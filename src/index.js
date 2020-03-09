import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'
import ReduxLearn from './learn/reduxlearn/redux-lean'
import { Provider } from 'react-redux'
import store from './redux/store'



    ReactDOM.render(
        <Provider store={store}>

            <HashRouter>
                <Switch>
                    {/* <Route path='/learn-redux'
                     component={()=><ReduxLearn  store={store}></ReduxLearn>} /> */}
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route component={Main} />
                </Switch>
                {/* 不指定path会被首先经过 */}
            </HashRouter>
        </Provider>
        , document.getElementById('root'));

serviceWorker.unregister();
