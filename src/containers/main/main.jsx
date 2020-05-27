import React, { Component } from 'react'
import {
    NavBar,
    Button
} from 'antd-mobile'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Boss from '../boss/boss';
import Person from '../person/person';
import UserInfo from '../userInfo/userInfo';
import NavFooter from '../../components/nav-footer/nav-footer';
export default class Main extends Component {

    navList = [
        {
            path: '/boss',
            component: Boss,
            title: 'boss list',
            icon: 'boss',
            text: 'BOSS'
        }, {
            path: '/person',
            component: Person,
            title: 'person list',
            icon: 'person',
            text: 'PERSON'
        },
        {
            path: '/userInfo',
            component: UserInfo,
            title: 'INFO',
            icon: 'info',
            text: 'INFO'
        },
    ]

    logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    render() {
        if (!localStorage.getItem('yiki_user')) {
            return <Redirect to={'login'} />
        }
        const { navList } = this;
        const path = this.props.location.pathname;
        const currentNav = navList.find(nav => nav.path === path);


        return (
            <HashRouter>
                <Button
                    onClick={this.logout}
                >LOGINOUT</Button>

                {currentNav ?
                    <center>
                        <h4>{currentNav.text}</h4>
                    </center>
                    : null}

                {/* 
                   Note:
                   match/location/history 
                   will be passed the same the props!
                   to use method: this.props.history/location/match

                   <Route children> > <Route component> > <Route render> 
                   so don’t use in the same <Route>.

                   [<switch>]:
                   Renders the first child <Route> or <Redirect> that matches the location

                   */}
                <Switch>
                    {navList.map(nav => (
                        <Route
                            key={nav.path}
                            path={nav.path}
                            component={nav.component}
                        ></Route>
                    )
                    )}
                </Switch>


                {currentNav ?
                    <NavFooter navList={navList} /> : null}

            </HashRouter>
        )
    }
}

/*
syntax:
onClick={()=>this.func()} func(){...}
onClick={this,func()} func=()=>{...} better
but pass parms: onClick={(e) => this.func(id, e)} better
*/