import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';  // redux中间件
import { combineReducers } from 'redux'; // 合并reducer

import hello from './hello/reducer'

const rootReducer = combineReducers({
    hello
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
