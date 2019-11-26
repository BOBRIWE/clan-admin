import * as React from 'react';
import './section-header.scss';

interface ISectionHeaderProps {
    title: string
}

export default class SectionHeader extends React.Component<ISectionHeaderProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <span className="section-header">{this.props.title}</span>
        );
    }
}