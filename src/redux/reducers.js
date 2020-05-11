/**包含多个reduncer函数
 * 根据 老的state和action返回新的state
 * 
 * A Redux reducer is just a JavaScript function. 
 * It takes two parameters: the current state and action
 * 
 * 
 * 1. The state in Redux comes from reducers
 */

import { combineReducers } from 'redux'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    UPDATE_SUCCESS,
    RECEIVE_USER,
    RESET_USER
} from './action-types'

const inituser = {
    username: '',
    usertype: '',
    msg: '',//错误信息
}
function user(state = inituser, action) {

    switch (action.type) {
        case AUTH_SUCCESS://登录用
            return { ...action.data, redirectTo: getRedirecTo(action['data']['data'].usertype, action['data']['data'].userheader) }
        case ERROR_MSG:// 错误用
            return { ...state, msg: action.data }
        case UPDATE_SUCCESS://更新信息用
            return {
                ...state, msg: action.data, redirectTo: getRedirecTo(action['data']['data'].usertype,
                    action['data']['data'].userheader)
            }
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return { ...inituser,//清除原有数据->login
                 msg: action.data }
        default:
            return state
    }
}
// 返回对应的路由路径
function getRedirecTo(type, header) {
    let path = '';
    if (type === '招聘') {
        path = '/boss'
    }
    else if (type === '应聘') {
        path = 'person'
    }
    if (!header) {
        path += 'info'
    }
    return path;
}



// 向外暴露状态：
export default combineReducers({
    user, getRedirecTo
})