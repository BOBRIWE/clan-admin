import React from 'react';
import './ActivityChart.scss';
import IDestinyHistoricalStatsPeriodGroup
    from '../../BungieAPI/Destiny/HistoricalStats/IDestinyHistoricalStatsPeriodGroup';
import SectionHeader from '../SectionHeader/SectionHeader';

interface IActivityChartProps {
    activityData: IDestinyHistoricalStatsPeriodGroup[]
    onPointClicked: (id: string) => void
}

interface IActivityChartState {
    dateData: IDateData[][]
}

interface IDateData {
    date: string
    completed: number
    failed: number
    weekTag: string
    data: IDestinyHistoricalStatsPeriodGroup[]
}

class ActivityChart extends React.Component<IActivityChartProps, IActivityChartState> {
    private readonly _weekTags: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    constructor(props: IActivityChartProps) {
        super(props);
        this.state = {
            dateData: []
        }
    }

    componentDidMount() {
        const activityDataCopy = [...this.props.activityData];
        const dateData: IDateData[][] = this.getEmptyDateData(activityDataCopy.reverse()[0].period);

        for (let stat of activityDataCopy) {
            const formattedDate = this.formatDate(stat.period);

            let find: IDateData | undefined;
            dateData.find((week) => {
                const findDay = week.find((item) => {
                    return formattedDate === item.date;
                });

                if (findDay !== undefined) {
                    find = findDay;
                    return true;
                }

                find = undefined;
                return false;
            });

            if (find !== undefined) {
                find.data.push(stat);
                if (stat.values['completed'].basic.displayValue === 'Yes') {
                    find.completed++;
                } else {
                    find.failed++;
                }
            }
        }

        this.setState({
            dateData: dateData
        });
    }

    formatDate(date: string): string {
        return new Date(date).toISOString().split('T')[0];
    }

    getEmptyDateData(start: string): IDateData[][] {
        let current = new Date(start);
        const today = new Date(Date.now());
        const dateData: IDateData[][] = [];
        dateData.push([]);
        let currentWeekIndex = 0;

        while (current.getTime() <= today.getTime()) {
            const formattedDate = this.formatDate(current.toISOString());
            dateData[currentWeekIndex].push({
                date: formattedDate,
                completed: 0,
                failed: 0,
                weekTag: this._weekTags[new Date(formattedDate).getDay()],
                data: []
            });

            if (new Date(formattedDate).getDay() === 6) {
                currentWeekIndex++;
                dateData.push([]);
            }

            current.setDate(current.getDate() + 1);
        }

        if (dateData[dateData.length - 1].length === 0) {
            dateData.pop();
        }

        return dateData;
    }


    render() {
        return (
            <section className="ActivityChart">
                <SectionHeader title={'Calendar heatmap'}/>
                <main className="ActivityChart__main">
                    <div className="ActivityChart__main__container">
                        {this.state.dateData.map((week, weekI) => {
                            return <article key={weekI} className="ActivityChart__col">{week.map((item, itemI) => {
                                let statusClass = '';
                                if (item.failed !== 0 && item.completed !== 0) {
                                    statusClass = 'ActivityChart__cell--both';
                                } else if (item.completed > 0) {
                                    statusClass = 'ActivityChart__cell--done';
                                } else if (item.failed > 0) {
                                    statusClass = 'ActivityChart__cell--failed';
                                }

                                return <div key={itemI} className={`ActivityChart__cell ActivityChart__${item.weekTag} ${statusClass}`}>
                                    <div className="ActivityChart__cell__wrapper">
                                        <span className="ActivityChart__cell__title">{item.date}</span>
                                        <div className="ActivityChart__cell__data">
                                            {item.data.map((activityData, key) => {
                                                const colorClass = activityData.values['completed'].basic.displayValue === 'Yes' ? 'ActivityChart__cell--done' : 'ActivityChart__cell--failed';
                                                return <div
                                                    key={key}
                                                    className={`ActivityChart__cell__item ${colorClass}`}
                                                    onClick={()=>{this.props.onPointClicked(activityData.activityDetails.instanceId)}}
                                                />
                                            })}
                                        </div>
                                    </div>
                                </div>;
                            })}</article>;
                        })}
                    </div>
                </main>
                <footer></footer>
            </section>
        );
    }
}

export default ActivityChart;