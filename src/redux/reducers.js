/**包含多个reduncer函数
 * 根据 老的state和action返回新的state
 */

import { combineReducers } from 'redux'
import { AUTH_SUCCESS, ERROR_MSG } from './action-types'

const inituser = {
    username: '',
    usertype: '',
    msg: '',//错误信息
}
function user(state = inituser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...action.data, redirectTo: getRedirecTo(action.data.data.usertype, action.data.data.userheader) }
        case ERROR_MSG:
            return { ...state, msg: action.data }
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