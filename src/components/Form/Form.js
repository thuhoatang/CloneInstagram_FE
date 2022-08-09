import './Form.css';
import React, { Component } from "react";
import Input from "./Input/Input";

const listInputLogin = [
//   { placeholder: "Số điện thoại", type: "number" },
  { placeholder: "Số điện thoại, tên người dùng hoặc email", type: "text" },
  { placeholder: "Mật khẩu", type: "password" },
];

class Form extends Component {
    render() {
    //   const renderListInput = listInputLogin.map((item, index) => { 
    //     return <Input key={index} typeNamePropInput={item.type} spanNamePropInput={item.placeholder}/>
    //   })
    return (
      <div className="fromMain">
        <div className="fromInput">
        <Input
          typeNamePropInput="text"
          spanNamePropInput="Số điện thoại, tên người dùng hoặc email"
        />
        <Input
          typeNamePropInput="password"
          spanNamePropInput="Mật khẩu cá nhân"
        />
        </div>
        <div className="fromAskAccount"></div>
        <div className="fromDownloadApp"></div>
        
      </div>
    );
  }
}

export default Form;
