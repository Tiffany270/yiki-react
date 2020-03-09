/**redux 管理对象
 * @applyMiddleware 应用中间件
 * @thunk 异步
 * @composeWithDevTools 工具函数
 */


import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))