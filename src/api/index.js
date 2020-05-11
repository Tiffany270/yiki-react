
import ajax from './axios'
export const regRegister = 
(user)=>ajax('/react/register',user,'POST');
export const reglogin = 
(user)=>ajax('/react/login',user,'POST');

export const req_update = 
(user)=>ajax('/react/updataInfo',user,'POST');

