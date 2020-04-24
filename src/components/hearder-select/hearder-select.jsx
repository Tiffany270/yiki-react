import React, { Component } from 'react'
import {
    List, Grid
} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component {


    static propTypes = {
        setHeader: PropTypes.func.isRequired
    }

    state = {
        icon: null
    }


    constructor(props) {
        super(props);
        this.headerLsit = [];
        for (let index = 0; index < 20; index++) {
            this.headerLsit.push({
                icon: require(`../../assets/imgs/${index + 1}.jpeg`)
            })
        }
    }

    handleClick = (el,index) => {
        this.setState({
            icon: el.icon
        })

        //调用函数(你仔细看是在父类那里传递过来的）更新父组件状态
        this.props.setHeader(index)

    }

    render() {

        const { icon } = this.state;

        const header =
            this.state.icon ? (<div>
                <img 
                style={{ width: '75px', height: '75px' }}
                alt='X' src={icon} />
            </div>) : 'PLE SELECT YOUR HEADER'

        return (
            <List renderHeader={() => header}>
                <Grid data={this.headerLsit}
                    columnNum={5}
                    onClick={this.handleClick}
                    renderItem={dataItem => (
                        <div
                            style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                        </div>
                    )}
                ></Grid>

            </List>

        )
    }
}