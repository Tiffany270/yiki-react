/**
 * 包含action creator
 * 同步&异步
 * 
 * 
 * 
 *  action: a reducer know when to generate the next state
 *  "dispatching an action" means sending out a signal to the store.
 */
import {
    regRegister,
    reglogin,
    req_update
} from '../api/index'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RESET_USER,
    RECEIVE_USER,
    RECEIVE_LIST
} from './action-types'
import {
    Toast
} from 'antd-mobile'

const authSuccess = (user) => ({
    type: AUTH_SUCCESS,
    data: user
})

const errorMsg = (msg) => ({
    type: ERROR_MSG,
    data: msg
})

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    data: user
})


// 获取所有信息
const receiveList = (list) => ({
    type: RECEIVE_LIST,
    data: list
})

const resetUser = (user) => ({
    type: RESET_USER,
    data: user
})

// 写注册的逻辑
export const register = (user) => {
    const { username, password: userpsw, password2, usertype } = user

    return async dispatch => {

        // 发送注册请求
        const res = await regRegister({ username, userpsw, usertype })
        if (res.data.status === 227) {
            Toast.success('注册成功');
            dispatch(authSuccess(res.data))
        } else {
            Toast.fail(res.data.msg, 2);
            dispatch(errorMsg(res.data.msg))
        }
    }
}
// 登录的逻辑
export const login = (user) => {
    const { username, password: userpsw } = user
    /*
     When an action is dispatched, 
     the store forwards a message (the action object) to the reducer.*/
    return async dispatch => {// 分发给->（看reduces.js)->reducer
        const res = await reglogin({ username, userpsw })
        if (res.data.status === 227) {
            Toast.success('登录成功');
            dispatch(authSuccess(res.data))
        } else {
            Toast.fail(res.data.msg, 2);
            dispatch(errorMsg(res.data.msg))
        }
    }
}

//登录完成跳转的完善页面
export const updateInfo = (user) => {
    return async dispatch => {
        const res = await req_update(user);
        if (res.data.status === 227) {
            dispatch(receiveUser(res.data))
        } else {
            dispatch(resetUser(res.msg))
        }
    }

}

// Get a list of all users information
export const getAllUsers=(list)=>{
    return async dispatch =>{
        if (list.data.status === 227) {
            dispatch(receiveList(list.data))
        } else {
            dispatch(errorMsg(list.msg))
        }
    }
}