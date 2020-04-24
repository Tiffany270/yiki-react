/**包含多个reduncer函数
 * 根据 老的state和action返回新的state
 */

import { combineReducers } from 'redux'
import {AUTH_SUCCESS, ERROR_MSG } from './action-types'

const inituser = {
    username: '',
    usertype: '',
    msg: '',//错误信息
}
function user(state = inituser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...action.data}
        case ERROR_MSG:
            return { ...state, msg: action.data }
        default:
            return state
    }

}



// 向外暴露状态：
export default combineReducers({
    user
})