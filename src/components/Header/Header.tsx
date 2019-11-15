import React from 'react';

interface IHeaderProps {
    image: string
    title: string
}

interface IHeaderState {

}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <header className="header">
                <article className="header__logo">
                    <section className="header__logo__title">Clan Admin</section>
                    <section className="header__logo__subtitle">beta</section>
                </article>
                <article className="header__clan">
                    <section className="header__clan__image" style={{ backgroundImage: `url('${this.props.image}')` }}/>
                    <section className="header__clan__title">{this.props.title}</section>
                </article>
            </header>
        );
    }
}