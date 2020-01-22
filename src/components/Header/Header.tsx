import React from 'react';
import './header.scss';

interface IHeaderProps {
    title: string
}

interface IHeaderState {

}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <header className="header">
                <article className="header__logo">
                    <div className="header__logo__container">
                        <section className="header__logo__title">Clan Admin</section>
                        <section className="header__logo__subtitle">alfa</section>
                    </div>
                </article>
                <article className="header__clan">
                    <section className="header__clan__title">{this.props.title}</section>
                </article>
            </header>
        );
    }
}