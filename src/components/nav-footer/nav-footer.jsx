import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { PropTypes } from 'prop-types'

import { withRouter } from 'react-router-dom'
const Item = TabBar.Item;

class NavFooter extends Component {

    static propTypes = {
        navList: PropTypes.array.isRequired

    }

    render() {
        const { navList } = this.props;
        const path = this.props.location.pathname;
        return (
            <TabBar>{
                navList.map((nav, index) => (
                    <Item
                        icon={{ uri: require(`../../assets/imgs/${index + 1}.jpeg`) }}
                        title={nav.text}
                        key={nav.path}
                        selected={path === nav.path}
                        selectedIcon={{ uri: require(`../../assets/imgs/10.jpeg`) }}
                        onPress={() =>
                            this.props.history.replace(nav.path)}
                    />

                    /*
                    Note :
                    Route component as this.props.location
                    Route render as ({ location }) => ()
                    Route children as ({ location }) => ()
                    withRouter as this.props.location
                    */
                ))
            }
            </TabBar>
        )
    }
}
// 在非路由组件使用路由api
export default withRouter(NavFooter)

