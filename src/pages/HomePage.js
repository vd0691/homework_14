import React from "react";
import "./HomePage.css";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className={'container'}>
                <h1>{this.state.isToggleOn ? 'Главная страница' : 'Home page'}</h1>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Change title for english' : 'Сменить заголовок на русский'}
                </button>
            </div>

        );
    }
}

export default HomePage;