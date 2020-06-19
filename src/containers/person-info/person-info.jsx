import React, { Component } from 'react'
import {
    NavBar, InputItem, Button, TextareaItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import HeaderSelector from '../../components/hearder-select/hearder-select'
import { updateInfo } from '../../redux/actions'
import { Redirect } from 'react-router-dom'


class PersonInfo extends Component {

    state = {
        userid: '',
        userheader: '',
        occupation: '',
        salary: '',
        intro: '',
        usertype: '应聘'
    }
    componentWillMount() {
        const store = JSON.parse(localStorage.getItem('yiki_user'));

        if (store) {
            this.setState({
                userid: store['userid']
            })
        }
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    setHeader = (header) => {
        this.setState({
            userheader: header
        })
    }

    save = () => {
        this.props.updateInfo(this.state);
    }

    render() {

        //render里面最好用props里的东西……maybe
        const res = this.props.user
        if (res.userheader) {
            localStorage.setItem('yiki_user', JSON.stringify(res));
            return <Redirect to={'main'} />
        }


        return (
            <div>
                <NavBar>用户信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader} />
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
    { updateInfo }//放action函数
)(PersonInfo)