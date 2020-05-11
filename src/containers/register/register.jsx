import React, { Component } from 'react'
import {
    NavBar, WingBlank, List, Toast, InputItem, WhiteSpace, Radio, Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
import ListItem from 'antd-mobile/lib/list/ListItem'

// 'connect' from 'react-redux', not 'redux'
// it connects a React component with the Redux store.
import { connect } from 'react-redux'


// http
import { register } from '../../redux/actions'
import { Redirect } from 'react-router-dom'

class Register extends Component {

    state = {
        username: '',
        password: '',
        password2: '',
        usertype: '招聘'            // A/B
    }

    register = () => {

        if (!this.state.username || !this.state.password) {
            Toast.fail('存在空项', 2);
            return
        }

        if (this.state.password !== this.state.password2) {
            Toast.fail('密码不一致', 2);
            return
        }
        Toast.loading('注册中', 2, (t) => {
            this.props.register(this.state)
        });
    }
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })

    }

    toLogin = () => {
        this.props.history.replace('/login')
    }

    render() {
        const user = this.props.user;
        if (user.msg === 'ok') {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <NavBar>YIKI</NavBar>
                <Logo />
                <WhiteSpace />
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v => { this.handleChange('username', v) }}
                        >
                            NAME:</InputItem>
                        <InputItem type="password"
                            onChange={v => { this.handleChange('password', v) }}
                        >
                            PAS:</InputItem>
                        <WhiteSpace />
                        <InputItem type="password"
                            onChange={v => { this.handleChange('password2', v) }}
                        >
                            REPAS:</InputItem>
                        <WhiteSpace />
                        <ListItem>
                            <span>TYPE:</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio
                                checked={this.state.usertype === '招聘'}
                                onChange={() => this.handleChange('usertype', '招聘')}>招聘</Radio>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio
                                checked={this.state.usertype === '应聘'}
                                onChange={() => this.handleChange('usertype', '应聘')}>应聘</Radio>
                        </ListItem>
                        <WhiteSpace />
                        <Button
                            type="primary"
                            onClick={this.register}
                        >REGISTE</Button>
                        <Button
                            onClick={this.toLogin}
                        >LOGIN</Button>

                    </List>
                </WingBlank>
            </div >

        )
    }
}

export default connect(// state: It comes from the reducer
    state => ({ user: state.user }),{ register }
)(Register)// This way it can update the global state by dispatching the addArticle action.

// order: action->https->dispatch->reducer->update state
// params : connect(state)(component)