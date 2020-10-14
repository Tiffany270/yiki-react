
import ajax from './axios'
export const regRegister =
    (user) => ajax('/react/register', user, 'POST');
export const reglogin =
    (user) => {
        return ajax('/react/login', user, 'POST');
    }

export const req_update =
    (user) => ajax('/react/updataInfo', user, 'POST');

export const req_getAllUserList =
    (type) => ajax('/react/userList/' + type);

export const req_getChatListById =
    (chat_id) => ajax('/react_chat/ChatMsgFromId/' + chat_id);

//修改已读
export const req_setReadChatMsg =
    (info) => ajax('/react_chat/ChatMsgCurrentLoginUser', info, 'POST');//妈的大写啊姐

