import React from 'react'; // react核心，用到jsx的地方，都需要这个
import ReactDOM from 'react-dom'; // 渲染组件的时候需要

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

// 模块热替换的 API
if (module.hot) {
    module.hot.accept();
}