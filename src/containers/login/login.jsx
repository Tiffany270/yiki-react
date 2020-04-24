import React, { Component } from 'react'
import {
    NavBar, WingBlank, List, InputItem, WhiteSpace, Toast, Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'

import { connect } from 'react-redux'
import { login } from '../../redux/actions'
import { Redirect } from 'react-router-dom'


class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    login = () => {

        if (!this.state.username || !this.state.password) {
            Toast.fail('存在空项', 2);
            return
        }
        Toast.loading('登录中', 2, (t) => {
            this.props.login(this.state);
        });


    }
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })

    }

    toRegitser = () => {
        this.props.history.replace('/register')
    }

    render() {

        const user = this.props.user;
        if (user.msg === 'ok') {
            localStorage.setItem('yiki_user',JSON.stringify(user));
            return <Redirect to='/' />
        }

        return (
            <div>
                <NavBar>YIKI</NavBar>
                <Logo />
                <WhiteSpace />
                <WingBlank>
                    <List>
                        <form>

                            <InputItem
                                onChange={v => { this.handleChange('username', v) }}
                            >
                                NAME:</InputItem>
                            <InputItem type="password" autoComplete="off"
                                onChange={v => { this.handleChange('password', v) }}
                            >
                                PAS:</InputItem>
                        </form>
                        <WhiteSpace />

                        <WhiteSpace />
                        <Button
                            type="primary"
                            onClick={this.toRegitser}
                        >REGISTE</Button>
                        <Button
                            onClick={this.login}
                        >LOGIN</Button>

                    </List>
                </WingBlank>
            </div >

        )
    }
}

export default connect(
    state => ({ user: state.user }),
    { login }
)(Login)