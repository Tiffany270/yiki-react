import React, { Component } from 'react'
import {
    Button
} from 'antd-mobile'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import BossInfo from '../boss-info/boss-info';
import PersonInfo from '../person-info/person-info';
import Boss from '../boss/boss';
import Person from '../person/person';
import UserInfo from '../userInfo/userInfo';
import NotFound from '../../components/not-found/not-found';

export default class Main extends Component {
    logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    render() {
        if (!localStorage.getItem('yiki_user')) {
            return <Redirect to={'login'} />
        }

        return (
            <HashRouter>
                <Button
                    onClick={this.logout}
                >LOGINOUT</Button>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo} />
                    <Route path='/notfound' component={NotFound} />
                    <Route path='/personinfo' component={PersonInfo} />
                </Switch>
            </HashRouter>
        )
    }
}