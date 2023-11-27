import React from 'react';

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            introduction: "Hello!",
            buttonText: "Exit",
            buttonCount: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        });
    }

    countClick() {
        this.setState({
            buttonCount: ++this.state.buttonCount,
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.countClick()}>Count</button>
                <h2>The count button has been clicked {this.state.buttonCount} times</h2>                
            </div>
        )
    }
}

export default StatefulGreeting