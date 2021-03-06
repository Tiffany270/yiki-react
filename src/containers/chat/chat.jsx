import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, WhiteSpace, Icon, List, InputItem } from 'antd-mobile'
import "../chat/componets.scss";
import { sendMsg } from '../../redux/actions'

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            txtContent: '',
            chatList: []
        }
    }
    componentDidUpdate(nextProps) {


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
            chat_id: this.props.user.userid + "_" + this.props.match.params.userid,
            content: this.state.txtContent,
            read: false,
            create_time: (new Date()).valueOf()
        }
        const content = this.state.txtContent.trim();
        if (content !== '') {
            const chatList = this.props.chat.chatList ? this.props.chat.chatList : []
            this.props.sendMsg(sendObj);
            this.setState({
                chatList: chatList,
                txtContent: ''
            })
        }

    }
    render() {
        const chatObj = this.props.chat;
        console.log(this.props);
        const chat_id1 = this.props.user.userid + "_" + this.props.match.params.userid;
        const chat_id2 = this.props.match.params.userid + "_" + this.props.user.userid;
        const chatList = chatObj.chatMsg ? chatObj.chatMsg.filter(x => x.chat_id === chat_id1 || x.chat_id === chat_id2) : [];
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


                <div className="chatPanel">
                    {
                        chatList.map((item, index) => (
                            <div key={index}
                                className={['chat-block',
                                    item.from === this.props.user.userid ? 'isSelf' : 'isOhter'].join(' ')}>
                                <div className="chat-header">
                                    <img src={require(`../../assets/imgs/${this.props.user.userheader ? this.props.user.userheader : index + 1}.jpeg`)}></img>
                                </div>
                                <div className="chat-main">
                                    <div className="chat-content">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))

                    }


                </div>


                <div id='chat-send-warrper'>
                    <InputItem
                        value={this.state.txtContent}
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
    state => ({//连接reducer里combineReducers里的东西
        user: state.user,
        chat: state.chat
    }),
    { sendMsg }
)(Chat)

