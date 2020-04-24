import React, { Component } from 'react'
import {
    NavBar,InputItem,Button, TextareaItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import HeaderSelector from '../../components/hearder-select/hearder-select'


class PersonInfo extends Component {

    render() {
        return (
            <div>
                <NavBar>用户信息完善</NavBar>
                <HeaderSelector />
                <InputItem placeholder='YOUR OCCUPATION'>职位：</InputItem>
                <InputItem placeholder='YOUR SALARY'>薪资：</InputItem>
                <TextareaItem title='INTRO:'
                    rows={3} />
                <Button type="primary">保&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {  }//放action函数
)(PersonInfo)