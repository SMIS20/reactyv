import React from 'react';
import Link from "next/link";

const flexCenterAlign = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default class Index extends React.Component {
    // Initial Props
    static async getInitialProps () {
        return {
            appTitle: 'Reactyv'
        };
    }
    // Initial state
    state = {
        counter: 0
    }
    // Render
    render() {
        return (
            <div style={flexCenterAlign}>
                <p>Hello, <Link href="/about">{this.props.appTitle}</Link>!</p>
                <strong>{this.state.counter}</strong>
            </div>
        )
    }
}

