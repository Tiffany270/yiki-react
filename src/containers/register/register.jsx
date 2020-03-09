import React, { Component } from 'react'
import {
    NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
const listitem = List.Item

export default class Register extends Component {
    render() {
        return (
            <div>
                <NavBar>YIKI</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem></InputItem>
                        <WhiteSpace></WhiteSpace>
                        <Radio></Radio>
                        <Button></Button>
                    </List>
                </WingBlank>
            </div>

        )
    }
}