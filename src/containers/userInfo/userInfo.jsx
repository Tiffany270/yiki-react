import React, { Component } from 'react'
import {
    NavBar, InputItem, Button, TextareaItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class UserInfo extends Component {


    save = () => {

    }

    render() {
        return (
            <div>
                <NavBar>公司信息完善</NavBar>

                <Button
                    onClick={this.save}
                    type="primary">保&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {}
)(UserInfo)