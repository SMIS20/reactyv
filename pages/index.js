import React from 'react';
import Link from "next/link";
import { TimerObservable } from 'rxjs/observable/TimerObservable';

const flexCenterAlign = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.onIncr = this.onIncr.bind(this);
    }
    // Initial Props
    static async getInitialProps () {
        return {
            appTitle: 'Reactyv'
        };
    }
    // On Mount
    componentDidMount() {
        const source = TimerObservable.create(1000, 1000);
        source.subscribe(val => {
            this.setState({
                counter: this.state.counter + val
            });
        });
    }

    // Event listeners
    onIncr(e){
        this.setState({
            counter: this.state.counter + 1
        });
    }
    // Render
    render() {
        return (
            <div style={flexCenterAlign}>
                <p>Hello, <Link href="/about">{this.props.appTitle}</Link>!</p>
                <strong>{this.state.counter}</strong>
                <button onClick={this.onIncr}>Count Up!!</button>
            </div>
        )
    }
}

