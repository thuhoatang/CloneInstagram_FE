import './Footer.css'
import React, { Component } from "react";

class Footer extends Component {
  render() {
    const listFooter = [
      { name: "Giới thiệu", url: "http://meta" },
      { name: "Blog", url: "http://meta" },
      { name: "Việc làm", url: "http://meta" },
      { name: "Trợ giúp", url: "http://meta" },
      { name: "API", url: "http://meta" },
      { name: "Quyền riêng tư", url: "http://meta" },
      { name: "Điều khoản", url: "http://meta" },
      { name: "Tài khoản liên quan nhất", url: "http://meta" },
      { name: "Hashtag", url: "http://meta" },
      { name: "Vị trí", url: "http://meta" },
      { name: "Instagram Lite", url: "http://meta" },
      {
        name: "Tải thông tin người liên hệ lên & người không phải người dùng",
        url: "http://meta",
      },
      { name: "Khiêu vũ", url: "http://meta" },
      { name: "Ẩm thực", url: "http://meta" },
      { name: "Nhà & vườn", url: "http://meta" },
      { name: "Âm nhạc", url: "http://meta" },
      { name: "Nghệ thuật thị giác", url: "http://meta" },
    ];

    const renderedListFooter = listFooter.map((item, index) => {
      return (
        <div className="itemList" key={index}>
          <a href={item.url}>{item.name}</a>
        </div>
      );
    });
    return (
      <div className="footer_container">
        <div className="footer_container_list d-flex">{renderedListFooter}</div>
      </div>
    );
  }
}

export default Footer;
