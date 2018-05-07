import React from 'react';
import Link from "next/link";

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
    // Event listeners
    onIncr(e){
        e.preventDefault();
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
                <a href="" title="Increment value!" onClick={this.onIncr}>Increment</a>
            </div>
        )
    }
}

