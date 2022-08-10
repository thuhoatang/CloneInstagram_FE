import "./FormSignIn.css";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Icon } from "@iconify-icon/react";
import Input from "../Input/Input";

class FormSignIn extends Component {
  onSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div className="pageSignIn">
        <div className="cardRight">
          <div className="from-sign-in">
            <form onSubmit={this.onSubmit}>
              <Field
                name="username"
                component={Input}
                typeNamePropInput="text"
                spanNamePropInput="Số điện thoại, tên người dùng hoặc email"
              />
              <Field
                name="password"
                component={Input}
                typeNamePropInput="password"
                spanNamePropInput="Mật khẩu"
              />
              {/* <Input
              typeNamePropInput="text"
              spanNamePropInput="Số điện thoại, tên người dùng hoặc email"
            /> */}

              <button
                type="submit"
                className="btn_submit_dangnhap"
                disabled={this.props.invalid}
              >
                Đăng nhập
              </button>
            </form>

            <div className="horizontal_line">
              <div className="line_left"></div>
              <div className="hoac my-3" style={{ margin: "10px" }}>
                HOẶC
              </div>
              <div className="line_right"></div>
            </div>

            {/* Đăng nhập bằng facebook */}
            <div className="loginByFacebook">
              <button>
                <iconify-icon icon="ant-design:facebook-filled"></iconify-icon>
                <span>Đăng nhập bằng Facebook</span>
              </button>
            </div>

            {/* Thong bao sai pass */}
            <p className="text-center my-2 mx-5 notification">
              Tên người dùng bạn đã nhập không thuộc về tài khoản. Vui lòng kiểm
              tra tên người dùng của bạn và thử lại.
            </p>

            {/* Quen mat khau */}
            <a href="#" className="forgotPasswordTag">
              Quên mật khẩu
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// Trong form có 2 trường [username, password]
// trogn th valodate không có lỗi, thì err = {}
// trong th bị lỗi, thì err = {password: "chưa đủ doqkwd"} ==> invalid = true
// invalid: xuất hiện khi có reduxForm 
const validate = (values) => {
  const err = {};

  if (values?.password?.length < 6 || values.password == undefined) {
    err.password = "Chưa đủ 6 kí tự!";
  }

  // console.log(dẹqi);
  return err;
};



// tương tự như mapStatetoProp
FormSignIn = reduxForm({
  // ten cua moi form la duy nhat
  form: "formSignIn",
  validate: validate // tên trường của reduxform
})(FormSignIn);



export default FormSignIn;
