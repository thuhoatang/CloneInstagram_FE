import  style from "./FormSignUp.module.scss";
import React, { Component } from "react";
import classNames from "classnames/bind";
import { Field, isAsyncValidating, reduxForm } from "redux-form";
import axios from "axios";

import Input from "../Input/Input";

const cx = classNames.bind(style);

class FormSignUp extends Component {
  
// Values của các Field tự render cho
onSubmit = (values) => {
  axios.post('http://localhost:8080/api/users', {
    email: values.email,
    fullName: values.fullname, // value là trường của mình theo thèn server 
    username: values.username,
    password: values.password
  })
  .then((response) => {
    console.log(response);
  })
}

  render() {
    const {handleSubmit, invalid} = this.props;
    return (
      <div>
        <div className={cx("form-sign-up")}>
          <p className={cx("text-center","titleIntro")}>
            Đăng ký để xem ảnh và video từ bạn bè
          </p>
          {/* Đăng nhập bằng facebook */}
          <div className={cx("loginByFacebook-signup","mt-3")}>
            <button>
              <iconify-icon
                icon="ant-design:facebook-filled"
                style={{ color: "white", fontSize: "20px" }}
              ></iconify-icon>
              <span>Đăng nhập bằng Facebook</span>
            </button>
          </div>

          {/*  */}
          <div className={cx("horizontal_line")}>
            <div className={cx("line_left")}></div>
            <div className={cx("hoac","my-3")} style={{ margin: "10px" }}>
              HOẶC
            </div>
            <div className={cx("line_right")}></div>
          </div>

          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              name="email"
              component={Input}
              typeNamePropInput="text"
              spanNamePropInput="Số điện thoại hoặc email"
              checkInput
            />
            <Field
              name="fullname"
              component={Input}
              typeNamePropInput="text"
              spanNamePropInput="Tên đầy đủ"
              checkInput
            />

            <Field
              name="username"
              component={Input}
              typeNamePropInput="text"
              spanNamePropInput="Tên người dùng"
              checkInput
              coreSpriteInputRefresh
            />

            <Field
              name="password"
              component={Input}
              typeNamePropInput="password"
              spanNamePropInput="Mật khẩu"
              
            />

            <p className={cx("contactInfo","text-center","my-3")}>
              Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin
              liên hệ của bạn lên Instagram.
              <a href="#"> Tìm hiểu thêm</a>
              <br />
              <br />
              Bằng cách đăng ký, bạn đồng ý với <a href="#">Điều khoản</a>,{" "}
              <a href="#">Chính sách quyền riêng tư</a> và
              <a href="#"> Chính sách cookie</a> của chúng tôi.
            </p>

            {/* button submit */}
            <button type="submit" className={cx("btnSignUp", "mb-4")} disabled={invalid}>Đăng ký</button>
            
          </form>
        </div>
      </div>
    );
  }
}

const validate = values => {
  const err = {} // err ={email: true}
  if(!values.email){
    err.email = true
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    err.email = true;
  }

  if(!values.fullname) {
    err.fullname = true
  }

  if (!values.username || values.password<4) {
    err.username = true;
  }

  if(!values.password || values.password <6){
    err.password = true;
  }
  return err
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const asyncValidate  = values => {
  return sleep(500).then(() => {
    console.log("nn", values.email);
    // mo phong do tre may chu
    if(['t1@gmail.com', 't2@.gov'].includes(values.email)) {
      throw {email: true}
    }
  })
}

const warn = values => {
  const warnings = {}
  if(values.email != null){
    warnings.username = true
    // console.log(warnings);
  }
  return warnings
}

// tương tự như mapStatetoProp
FormSignUp = reduxForm({
  // ten cua moi form la duy nhat
  form: "FormSignUp",
  validate,
  asyncValidate ,
  warn
  // tên trường của reduxform
})(FormSignUp);

export default FormSignUp;
