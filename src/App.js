import React, {Component} from 'react';
// import { AppContainer } from 'react-hot-loader';    // react和redux连接的桥梁，就是这个Provider

// 加载公共css
import './assets/css/public.scss';

// 加载路由
import AppRouter from './router/router';

// 加载redux
import store from './store/index';
import { Provider } from 'react-redux';

// 引入i18n
import locales from './i18n';
// 国际化插件
import intl from 'react-intl-universal';

// antd-mobile国际化
import {LocaleProvider} from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';


class App extends Component {

	constructor(props) {
        super(props);
        this.state = {
            initDone: false,
            lang: localStorage.getItem('lang') || 'zh'
        }
	}
	
	render() {
		return (
			<Provider store={store}>
				{/* 全局应用antd-mobile国际化,locale只接收对象 */}
				<LocaleProvider locale={this.state.lang === 'en' ? enUS : undefined} >
					<AppRouter />
				</LocaleProvider>
			</Provider>
		)
	}

	componentDidMount() {
        this.loadLocales();
    }

    loadLocales() {
        intl.init({
            currentLocale: this.state.lang, // TODO: determine locale here
            locales
          })
          .then(() => {
            localStorage.setItem('lang', this.state.lang);
            // After loading CLDR locale data, start to render
            this.setState({ initDone: true });
        });
	}
	
}

export default App;