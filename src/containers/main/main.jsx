import React, { Component } from 'react'
import {
    Button
} from 'antd-mobile'
import { HashRouter, Route, Switch } from 'react-router-dom'
import BossInfo from '../boss-info/boss-info';
import PersonInfo from '../person-info/person-info';

export default class Main extends Component {

    checkLogin() {

        if (!localStorage.getItem('yiki_user')) {
            this.props.history.push('/login');
        }
    }
    logout = () => {
        localStorage.clear();
        this.props.history.push('/login');
    }

    render() {
        this.checkLogin();
        return (
            <HashRouter>
                <Button
                    onClick={this.logout}
                >LOGINOUT</Button>
                <Switch>
                    <Route path='/boss' component={BossInfo} />
                    <Route path='/person' component={PersonInfo} />
                </Switch>
            </HashRouter>
        )
    }
}