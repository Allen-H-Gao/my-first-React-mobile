import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import asyncComponent from './AsyncComponent';
import RouterComponent from './RouterComponent';

const LoginPage = asyncComponent(() => import(/* webpackChunkName: "counter" */ '../pages/login/login'));

// 判断是否登录
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render={props => {
            if (Boolean(sessionStorage.getItem("isLogin"))) {
                return <Component {...props} />
            }
            return <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
        }}
    />
  );
class AppRouter extends React.Component {
    render(){
        return (
            <BrowserRouter>
                {/* <ul>
                    <li><Link to="/hello">nav</Link></li>
                </ul> */}
                {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                    <PrivateRoute path="/" component={RouterComponent} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default AppRouter;