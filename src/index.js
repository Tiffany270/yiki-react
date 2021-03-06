import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Register from './containers/register/register'
import Login from './containers/login/login'
import BossInfo from './containers/boss-info/boss-info'
import PersonInfo from './containers/person-info/person-info'
import Main from './containers/main/main'
import Chat from './containers/chat/chat';

import { Provider } from 'react-redux'
import store from './redux/store'
import './utils/socketio'
// Provider wraps up your React application and makes it aware of the entire Redux's store.
ReactDOM.render(
    <Provider store={store}>

        <HashRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/bossinfo' component={BossInfo} />
                <Route path='/personinfo' component={PersonInfo} />
                <Route path="/chat/:userid" component={Chat}></Route>
                <Route component={Main} />
            </Switch>
            {/* 不指定path会被首先经过 */}
        </HashRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
