import React, { Component } from 'react'
import {
    NavBar, InputItem, Button, TextareaItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import HeaderSelector from '../../components/hearder-select/hearder-select'


class PersonInfo extends Component {

    state = {
        header: '',
        occupation: '',
        salary: '',
        intro: ''
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    setHeader = (header) => {
        this.setState({
            header: header
        })
    }

    save = () => {
        console.log(this.state);

    }

    render() {
        return (
            <div>
                <NavBar>用户信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem
                    onChange={val => { this.handleChange('occupation', val) }}
                    placeholder='YOUR OCCUPATION'>职位：</InputItem>
                <InputItem
                    onChange={val => { this.handleChange('salary', val) }}
                    placeholder='YOUR SALARY'>薪资：</InputItem>
                <TextareaItem title='INTRO:'
                    onChange={val => { this.handleChange('intro', val) }}
                    rows={3} />
                <Button
                    onClick={this.save}
                    type="primary">保&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {}//放action函数
)(PersonInfo)