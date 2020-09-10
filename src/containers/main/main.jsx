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
import Message from '../message/message';
import NavFooter from '../../components/nav-footer/nav-footer';


export default class Main extends Component {

    navList = [
        {
            path: '/boss',
            component: Boss,
            title: 'boss list',
            icon: 'boss',
            text: 'BOSS LIST'
        }, {
            path: '/person',
            component: Person,
            title: 'person list',
            icon: 'person',
            text: 'CANDIDATES LIST'
        },

        {
            path: '/message',
            component: Message,
            title: 'MESSAGE',
            icon: 'info',
            text: 'MESSAGE'
        },
        {
            path: '/userInfo',
            component: UserInfo,
            title: 'INFO',
            icon: 'info',
            text: 'INFO'
        },
    ]


    render() {

        const localdata = localStorage.getItem('yiki_user');
        if (!localdata) {
            return <Redirect to={'login'} />
        }
        const localpath = this.props.location.pathname;
        const { navList } = this;
        const path = localdata ? JSON.parse(localdata).redirectTo : localpath;
        const currentNav = navList.find(nav => nav.path === path);
        const userType = JSON.parse(localdata).usertype;

        if (userType === '应聘') {
            const index = navList.findIndex(x => x.path === '/boss');
            if (index !== -1) {
                navList.splice(index, 1);
            }
        } else {
            const index = navList.findIndex(x => x.path === '/person');
            if (index !== -1) {
                navList.splice(index, 1);
            }
        }

        return (
            <HashRouter>

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
                    {/* <Redirect
                        to={currentNav.path}
                    ></Redirect> */}
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

