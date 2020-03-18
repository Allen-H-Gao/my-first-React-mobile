import React from 'react';
import { WingBlank, InputItem, Button, WhiteSpace} from 'antd-mobile';
import logo from '../../assets/img/u15.png';
import './login.scss';
import {withRouter} from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <WingBlank className="login-data-box">
                <div className="login-form">
                    <div className="login-icon">
                        <img src={logo} alt="logo" />
                    </div>
                    <p className="title">Sponsorship Event Platform</p>
                    <div className="login-input">
                        <InputItem className="login-username">用户名：</InputItem>
                        <InputItem className="login-password" type="password">密码：</InputItem>
                    </div>
                    <WhiteSpace />
                    <Button className="login" type="primary" onClick={this.login}>Log In</Button>
                </div>
            </WingBlank>
        )
    }
    login = () => {
        // 开发跳过登录页面
        sessionStorage.setItem('isLogin', true);
        let history = this.props.history;
        console.log(this.props.history)
        history.push('hello');
    }
}

export default withRouter(Login);