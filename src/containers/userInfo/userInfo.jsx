import React, { Component } from 'react'
import {
    Button, Result, List, WhiteSpace
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Brief } from 'antd-mobile/lib/list/ListItem';

const Item = List.Item;

class UserInfo extends Component {



    save = () => {

    }

    logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    render() {
       
        const {company,intro,occupation,salary,userheader,userid,username,usertype} = JSON.parse(localStorage.getItem('yiki_user'));
        return (
            <div>
                <center>
                    <h4>Persional Info</h4>
                </center>
                <Result
                    title={username}
                    message={company}
                    img={<img
                        alt="pic"
                        style={{ width: 50 }}
                        src={require(`../../assets/imgs/${userheader}.jpeg`)} />}>
                </Result>

                <List renderHeader={() => 'INFO'}>
                    <Item >
                        <Brief>OCC:{occupation}</Brief>
                        <Brief>INFO:{intro}</Brief>
                        <Brief>SALARY:{salary}K</Brief>
                    </Item>
                    <WhiteSpace></WhiteSpace>
                </List>

                <List>
                    <Button
                        onClick={this.save}
                        type="primary">修&nbsp;&nbsp;改</Button>
                </List>
                <List>

                    <Button
                        type='warning'
                        onClick={this.logout}
                    >LOGINOUT</Button>
                </List>

            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {}
)(UserInfo)