import React, { Component } from 'react'; // react核心，用到jsx的地方，都需要这个

// react-redux 用法
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../store/hello/action';

import api from '../../services/axios';

// redux 基础用法
// import store from '../../store/test';

// 样式引用
import { NavBar, Icon, Picker, WhiteSpace, Pagination, List, InputItem} from 'antd-mobile';
import './nav.scss';

// 国际化引用
import intl from 'react-intl-universal';

const mapStatetoProps = (state) => {
    console.log(state) 
    // state被改变时会执行此方法,state是包含组件名字的(state{hello:{name: 'xxx}})
    return {name:state.hello.name}
};
// 中间件的装饰器
@connect(mapStatetoProps, dispatch => bindActionCreators(Actions, dispatch))
// 不写mapStatetoProps这个时,使用下面的方法可以获得所有props
// @connect((state) => state.hello, dispatch => bindActionCreators(Actions, dispatch))

class hello extends Component {
    constructor(props) {
        super(props);
        // this.state = store.getState();
        // this.state = { name: 'Nav'}
        this.state = {
            lang: localStorage.getItem('lang')
        }
        this.clickLeft = this.clickLeft.bind(this);
        this.ChangeLang = this.ChangeLang.bind(this);
        // 基本redux用法时用来更新render
        // this.StoreChange = this.StoreChange.bind(this);
        // store.subscribe(this.StoreChange);
    }
    
    render() {
        const local = this.state.lang;
        const languages = [
            {
              value: 'zh',
              label: '中文'
            },
            {
              value: 'en',
              label: 'English'
            }
        ];
        return (
            <div className="nav-data-box">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.clickLeft}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{this.props.name}</NavBar>

                <WhiteSpace/>

                <Pagination total={5} current={1} />
                
                <WhiteSpace/>

                <Picker
                    data={languages}
                    onChange={this.ChangeLang}
                    cols={1}
                    value={[local]}
                >
                    <List.Item arrow="horizontal">choose language</List.Item>
                </Picker>
                <InputItem defaultValue={this.state.lang} value={intl.get('test_value')}></InputItem>
            </div>
        )
    }

    clickLeft() {
        // 基础用法传action dispatch设置action
        // const action = {
        //     type: 'change_name',
        //     value: 'gai bian le'
        // }
        // store.dispatch(action);
        api.get('/contract/alteration/delete-by-id?id=' + 1).then((res) =>{

        })
        this.props.change('test');
    }

    // 语言改变
    ChangeLang(value) {
        localStorage.setItem('lang', value);
        window.location.reload();
    }
    // StoreChange() {
    //     this.setState(store.getState());
    // }

}

export default hello;