import React, {RefObject} from 'react';
import Chart, {ChartElementsOptions} from 'chart.js';
import IDestinyActivityHistoryResults from '../../BungieAPI/Destiny/HistoricalStats/IDestinyActivityHistoryResults';

interface IActivityChartProps {
    activityData: IDestinyActivityHistoryResults[]
    onPointClicked: (id: string) => void
}

class ActivityChart extends React.Component<IActivityChartProps> {
    private readonly chartRef: RefObject<any>;
    private chart: Chart;

    constructor(props: IActivityChartProps) {
        super(props);
        this.chartRef = React.createRef();
        this.chart = new Chart('', {});
    }

    componentDidMount() {
        let temp = 0;
        let timeString: string[] = [];
        let colors: string[] = [];

        const cut = this.props.activityData[0].activities.slice(0, 25);

        let time1 = cut.map((item) => {
            temp += 1;
            timeString.push(new Date(item.period).toLocaleDateString());

            colors.push(item.values['completed'].basic.displayValue === 'Yes' ? '#00ff00' : '#ff0000');

            return {

                t: new Date(item.period),
                y: 0
            };
        });

        this.chart = new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                labels: timeString,

                datasets: [
                    {
                        data: time1,
                        pointBackgroundColor: colors,
                        radius: 5
                    }
                ]
            },
            options: {
                events: ['click']
            }
        });
    }

    onPointClicked(e: React.MouseEvent) {
        const activePoints = this.chart.getElementAtEvent(e);

        if (activePoints.length <= 0) return;

        // @ts-ignore
        const index: number = activePoints[0]._index;

        this.props.onPointClicked(this.props.activityData[0].activities[index].activityDetails.instanceId);
    }

    render() {
        return (
            <section className="ActivityChart">
                <canvas ref={this.chartRef} onClick={this.onPointClicked.bind(this)}/>
            </section>
        );
    }
}

export default ActivityChart;