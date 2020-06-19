import React, { Component } from 'react'
import {
    NavBar, InputItem, Button, TextareaItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Message extends Component {


    save = () => {

    }

    render() {
        return (
            <div>
               <center>
                    <h4>messages</h4>
                </center>

            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {}
)(Message)