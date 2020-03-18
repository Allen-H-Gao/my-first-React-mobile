
import React, { Component } from 'react';

export default function asyncComponent(importComponent, placeholder = "加载中...") {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = { component: null };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({ component: component });
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.state} /> : placeholder;
        }
    }
    return AsyncComponent;
}