/**包含多个reduncer函数
 * 根据 老的state和action返回新的state
 */

import { combineReducers } from 'redux'
import { INCR, DECR } from './action-types'

function r_test(state = 0, acion) {
    return state;
}

 function redux_test(state = 0, action) {
    switch (action.type) {
        case INCR:
            return state + action.data
        case DECR:
            return state - action.data

        default:
            return state;
    }

}

// 向外暴露状态：
export default combineReducers({
    r_test,
    redux_test
})