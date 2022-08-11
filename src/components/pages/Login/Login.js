import "./Login.css";
import AppInst1 from "../../../asset/images/AppInst1.png";
import AppInst2 from "../../../asset/images/AppInst2.png";
import AppInst3 from "../../../asset/images/AppInst3.png";
import AppInst4 from "../../../asset/images/AppInst4.png";

import React, { Component } from "react";
import Form from "../../Form/Form";
import SlideImg from "./SlideImg";
import FormSignIn from "../../Form/FormSignIn/FormSignIn";
import routeDefault from "../../../config";

const arrSrcImg = [AppInst1, AppInst2, AppInst3, AppInst4];
class Login extends Component {
  render() {
    // console.log("2");
    return (
      <div className="pageLogin">
        <div className="leftImageIntroduct mx-2">
          <SlideImg />
          {/* <div className="imgActive">
                        <img src={arrSrcImg[this.state.imgCurrent]}/>
                    </div> */}
        </div>
        <div className="rightForm mx-2">
          <Form
            questionAccoutPropsForm="Bạn chưa có tài khoản ư?"
            tagRedirectPropsForm="Đăng kí"
            linkPropForm={routeDefault.signUp}
          >
            <FormSignIn />
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
