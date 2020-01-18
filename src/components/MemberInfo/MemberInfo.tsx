import React from 'react';
import './MemberInfo.scss';
import ActivityStats from '../ActivityStats/ActivityStats';

class MemberInfo extends React.Component {
    render() {
        return (
            <section className="MemberInfo" style={{backgroundImage: `url(${'https://www.bungie.net/img/destiny_content/pgcr/raids.1305rh0093145r13t5hn10tnz.raid_sunset.jpg'})`}}>
                <header className="MemberInfo__header">
                    <span className="MemberInfo__name">BOBROVICE</span>
                    <span className="MemberInfo__age">1 year in bnet</span>
                </header>
                <main>
                    <ActivityStats/>
                </main>
            </section>
        );
    }
}

export default MemberInfo;