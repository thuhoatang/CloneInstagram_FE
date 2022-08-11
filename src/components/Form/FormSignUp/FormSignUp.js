import  style from "./FormSignUp.module.scss";
import React, { Component } from "react";
import classNames from "classnames/bind";
import { Field, reduxForm } from "redux-form";

import Input from "../Input/Input";

const cx = classNames.bind(style)

class FormSignUp extends Component {
  render() {
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

          <form>
            <Field
              name="phoneNumber"
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

            
          </form>
        </div>
      </div>
    );
  }
}

// tương tự như mapStatetoProp
FormSignUp = reduxForm({
  // ten cua moi form la duy nhat
  form: "FormSignUp",
  // tên trường của reduxform
})(FormSignUp);

export default FormSignUp;
