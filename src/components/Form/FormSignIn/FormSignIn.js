import "./FormSignIn.css";
import React, { Component } from "react";
import { Icon } from "@iconify-icon/react";
import Input from "../Input/Input";

export default class FormSignIn extends Component {
  render() {
    return (
      <div className="pageSignIn">
        <div className="cardRight">
          <div class="from-sign-in">
            <Input
              typeNamePropInput="text"
              spanNamePropInput="Số điện thoại, tên người dùng hoặc email"
            />
            <Input
              typeNamePropInput="password"
              spanNamePropInput="Mật khẩu cá nhân"
            />

            <button type="submit" className="btn_submit_dangnhap">
              Đăng nhập
            </button>

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
