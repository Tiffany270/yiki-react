import React from 'react'
import imgURL from './../../assets/yiki.png';
// 可以用函数组件

export default function Logo() {
    return (
        <div className="logo-container">

            <img 
            style={logocss}
            src={imgURL} />

        </div>)
}

const logocss = {
    width: "200px",
    height:"200px",
    marginLeft: "25%"
};
