import React, { Component } from 'react'
import {
    NavBar, InputItem, Button, TextareaItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Boss extends Component {


    save = () => {

    }

    render() {
        return (
            <div>
                <NavBar>公司页面</NavBar>

               
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {}
)(Boss)