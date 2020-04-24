/**
 * 包含action creator
 * 同步&异步
 */
import { INCR, DECR } from '../redux/action-types'
import { regRegister, reglogin } from '../api/index'
import {
    AUTH_SUCCESS,
    ERROR_MSG
} from './action-types'
import {
    Toast
} from 'antd-mobile'

export const incr = (number) => ({ type: INCR, data: number })
export const decr = (number) => ({ type: DECR, data: number })

const authSuccess = (user) => ({
    type: AUTH_SUCCESS,
    data: user
})

const errorMsg = (msg) => ({
    type: ERROR_MSG,
    data: msg
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
    //写一些发送前的判断

    
    return async dispatch => {
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
