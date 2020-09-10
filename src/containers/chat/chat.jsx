import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, WhiteSpace, Icon, List, InputItem } from 'antd-mobile'
import "../chat/componets.scss";

class Chat extends Component {
    //     to: 'tiffany',
    //     char_id: 'yiki_tiffany',
    //     content: 'yiki',
    //     read: true,
    //     create_time: new Date()


    constructor() {
        super()
        this.state = {
            txtContent: ''
        }
    }

    txtChange = (e) => {
        const newVal = e
        this.setState({
            txtContent: newVal
        })
    }

    handleSend = () => {

        const sendObj = {
            from: this.props.user.userid,
            to: this.props.match.params.userid,
            content: this.state.txtContent,
            read: false,
            create_time: (new Date()).valueOf()
        }
        console.log(sendObj);

    }
    render() {
        const list = [
            { isOhter: true },
            { isOhter: false },
            { isOhter: false }
        ]
        return (

            <div id="chat-warpper">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >                        <img src={require(`../../assets/imgs/1.jpeg`)}></img>
                </NavBar>
                <WhiteSpace></WhiteSpace>

                <div
                    className={['chat-block',
                        list[0].isOhter ? 'isOhter' : 'isSelf'].join(' ')}>
                    <div className="chat-header">
                        <img src={require(`../../assets/imgs/1.jpeg`)}></img>
                    </div>
                    <div className="chat-main">
                        <div className="chat-content">
                            HI~
                        </div>
                    </div>
                </div>

                <div className={['chat-block',
                    list[1].isOhter ? 'isOhter' : 'isSelf'].join(' ')}>
                    <div className="chat-header">
                        <img src={require(`../../assets/imgs/2.jpeg`)}></img>
                    </div>
                    <div className="chat-main">
                        <div className="chat-content">
                            HI~
                        </div>
                    </div>
                </div>

                <div
                    className={['chat-block',
                        list[2].isOhter ? 'isOhter' : 'isSelf'].join(' ')}>
                    <div className="chat-header">
                        <img src={require(`../../assets/imgs/2.jpeg`)}></img>
                    </div>
                    <div className="chat-main">
                        <div className="chat-content">
                            HI~
                        </div>
                    </div>
                </div>



                <div id='chat-send-warrper'>
                    <InputItem
                        placeholder="pls input..."
                        onChange={(e) => this.txtChange(e)}
                        extra={
                            <span
                                onClick={this.handleSend}
                            >SEND</span>
                        }
                    ></InputItem>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user }),
    {}
)(Chat)

