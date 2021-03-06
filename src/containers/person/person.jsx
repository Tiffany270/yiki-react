import React, { Component } from 'react'
import {
    NavBar,Result
} from 'antd-mobile'
import { connect } from 'react-redux'
import { getAllUsers } from '../../redux/actions'
import ItemList from '../../components/list/list'

class Person extends Component {


    save = () => {

    }
    componentDidMount() {
        this.props.getAllUsers(1);
    }
    render() {
        return (
            <div>
            <ItemList list={this.props.list}></ItemList>
        </div>
        )
    }
}

export default connect(
    state => ({ list: state.list }),//我觉得这里应该是拼接和合并，connect连接reducer和state
    { getAllUsers }
)(Person)