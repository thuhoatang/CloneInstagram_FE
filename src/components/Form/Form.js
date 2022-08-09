import './Form.css';
import logoInstagram from '../../asset/images/logoInstagram.png'
import downloadAppStore from '../../asset/images/downloadAppStore.png'
import downloadGGPhay from '../../asset/images/downloadGGPhay.png'

import React, { Component } from "react";
import FormSignIn from './FormSignIn/FormSignIn';



class Form extends Component {
    render() {
    //   const renderListInput = listInputLogin.map((item, index) => { 
    //     return <Input key={index} typeNamePropInput={item.type} spanNamePropInput={item.placeholder}/>
    //   })
    return (
      <div className="formMain">
        {/* 1 */}
        <div className="formInput mt-5 mb-2">
          <div className="divImgLogo">
            <img src={logoInstagram}/>
          </div>
          <FormSignIn />
        </div>

{/* 2 */}
        <div className="formAskAccount">
          <div>Bạn chưa có tài khoản ư?</div>
          <div> <a href="#">Đăng kí</a></div>
        </div>

        {/* 3 */}
        <div className="formDownloadApp">
            <p className="text-center">Tải ứng dụng</p>

            <div className="towPicture">
              <a hred="#">
                <img src={downloadAppStore}/>
              </a>

              <a hred="#">
                <img src={downloadGGPhay}/>
              </a>
            </div>
        </div>        
      </div>
    );
  }
}

export default Form;
