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
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_LIST
} from './action-types'

const inituser = {
    username: '',
    usertype: '',
    msg: '',//错误信息
}

const initList = []; // http里回调的数据在action里，会分发到页面，自己取
function list(state = initList, action) {//action = {data:xx,type:xx}
    const res = action.data;
    switch (action.type) {
        case RECEIVE_LIST:
            return res.data;
        default:
            return state
    }
}


function user(state = inituser, action) {
    const res = action.data;
    switch (action.type) {
        case AUTH_SUCCESS://登录用
            const { usertype, userheader } = res.data;
            return {
                ...res.data,
                msg: res.msg,
                redirectTo: getRedirecTo(usertype, userheader)
            }
        case ERROR_MSG:// 错误用
            return {
                ...state,
                msg: res.msg
            }

        case RECEIVE_USER://更新信息
            const data = res.data;
            return {
                ...res.data,
                msg: res.msg,
                redirectTo: getRedirecTo(data.usertype, data.userheader)
            }
        case RESET_USER:
            return {
                ...inituser,//清除原有数据->login
                msg: res.msg
            }
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
        path = '/person'
    }
    if (!header) {
        path += 'info'
    }

    return path;
}



// 向外暴露状态：
export default combineReducers({
    user, getRedirecTo, list
})