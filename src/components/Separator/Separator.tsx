import * as React from 'react';
import './separator.scss';

export default class Separator extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <section className="separator"/>
        );
    }
}