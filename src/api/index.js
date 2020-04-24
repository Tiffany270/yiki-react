
import ajax from './axios'
export const regRegister = (user)=>ajax('/react/register',user,'POST');
export const reglogin = (user)=>ajax('/react/login',user,'POST');

