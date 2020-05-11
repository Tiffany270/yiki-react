/**redux 管理对象
 * @applyMiddleware 应用中间件
 * @thunk 异步地生成 Ajax 请求以获取 action
 * @composeWithDevTools 工具函数
 */


import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'


//createStore: to create a store in Redux
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))