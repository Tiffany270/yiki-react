import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incr, decr } from '../../redux/actions'


class ReduxLearn extends Component {


    static propTypes = {
        count: PropTypes.number.isRequired,
        incr: PropTypes.func.isRequired,
        decr: PropTypes.func.isRequired
    }

    incr = () => {
        // console.log(this.select);//ref是对组件真正实例的引用，这里要绑定this
        const num = this.select.value * 1
        // store.dispatch({ type: INCR, data: num })
        this.props.incr(num);

    }
    decr = () => {
        const num = this.select.value * 1
        // store.dispatch({ type: DECR, data: num })
        this.props.decr(num);

    }
    incr_odd = () => {//基数
        const num = this.select.value * 1
        const count = this.state.count
        if (count % 2 === 1) {
            this.setState({
                count: count + num
            })
        }

    }
    incr_asyn = () => {
        const num = this.select.value * 1
        const count = this.state.count
        setTimeout(() => {
            this.setState({
                count: count + num
            })
        }, 1000);

    }


    render() {
        //props 不知道为什么传不过去 以后再说
        console.log(this.props.store)

        // {count}写法是解构
        // const count = store.getState().redux_test
        const { count } = this.props.getState

        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.incr}>+</button>&nbsp;
                    <button onClick={this.decr}>-</button>&nbsp;
                    <button onClick={this.incr_odd}>add if odd</button>&nbsp;
                    <button onClick={this.incr_asyn}>add asyn</button>
                </div>
            </div>
        )
    }


}

export default connect(
    state => ({ count: state }), {
    incr, decr
}
)(ReduxLearn)