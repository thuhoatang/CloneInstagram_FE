import './Form.css';
import logoInstagram from '../../asset/images/logoInstagram.png'
import downloadAppStore from '../../asset/images/downloadAppStore.png'
import downloadGGPhay from '../../asset/images/downloadGGPhay.png'

import React, { Component } from "react";
import FormSignIn from './FormSignIn/FormSignIn';
import { Link } from 'react-router-dom';



class Form extends Component {
    render() {
    //   const renderListInput = listInputLogin.map((item, index) => { 
    //     return <Input key={index} typeNamePropInput={item.type} spanNamePropInput={item.placeholder}/>
    //   })

    const {questionAccoutPropsForm, tagRedirectPropsForm, linkPropForm} = this.props;
    return (
      <div className="formMain">
        {/* 1 */}
        <div className="formInput mt-5 mb-2">
          <div className="divImgLogo">
            <img src={logoInstagram}/>
          </div>
          {this.props.children}
          {/* <FormSignIn /> */}
        </div>

{/* 2 */}
        <div className="formAskAccount">
          <div>{questionAccoutPropsForm}</div>
          <div> <Link to={linkPropForm}>{tagRedirectPropsForm}</Link></div>
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
