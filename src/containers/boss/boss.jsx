import React, { Component } from 'react'
import {
    NavBar
} from 'antd-mobile'
import { connect } from 'react-redux'
import { getAllUsers } from '../../redux/actions'

class Boss extends Component {


    save = () => {

    }
    componentDidMount() {
        this.props.getAllUsers(2);
    }
    render() {
        console.log(this.props.list)

        return (
            <div>
                <NavBar>公司页面</NavBar>
            </div>
        )
    }
}

export default connect(
    state => ({ list: state.list }),//我觉得这里应该是拼接和合并，connect连接reducer和state
    { getAllUsers }
)(Boss)