/**
 * 包含action creator
 * 同步&异步
 */
import {INCR,DECR} from '../redux/action-types'

export const incr = (number)=>({type:INCR,data:number})
export const decr = (number)=>({type:DECR,data:number})
