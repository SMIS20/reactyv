import React from 'react'
import Link from "next/link"
import { TimerObservable } from 'rxjs/observable/TimerObservable'

import Header from '../components/Layout'
import Layout from '../components/Layout';

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
            <Layout>
                <img src="/static/Reactyv_Logo.png" alt="Reactyv Logo"/>
                <p>Hello, <Link href="/about"><a title="Open About">{this.props.appTitle}</a></Link>!</p>
                <strong>{this.state.counter}</strong>
                <button onClick={this.onIncr}>Count Up!!</button>
            </Layout>
        )
    }
}

