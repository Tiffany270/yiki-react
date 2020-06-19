import React, { Component } from 'react'
import {
    NavBar,Result
} from 'antd-mobile'
import { connect } from 'react-redux'

class Person extends Component {


    save = () => {

    }

    render() {
        return (
            <div>
                <NavBar>个人页面</NavBar>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {}
)(Person)