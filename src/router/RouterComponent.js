import React from 'react';
import { Route, Switch} from "react-router-dom";
import asyncComponent from './AsyncComponent';

const Nav = asyncComponent(() => import(/* webpackChunkName: "counter" */ '../pages/hello/hello'));
const Page404 = asyncComponent(() => import(/* webpackChunkName: "counter" */ '../pages/common/Page404'));

class RouterComponent extends React.Component {
    render() {
		return (
			<Switch>
				<Route exact path="/hello" component={Nav} />
				<Route component={Page404} />
			</Switch>
		)
	}
}

export default RouterComponent;