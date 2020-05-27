import React, { Component } from 'react'
import {
    NavBar, InputItem, Button, TextareaItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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