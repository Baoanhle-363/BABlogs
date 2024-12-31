import React from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import "./footer.css"; // Import file CSS của footer

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <h2 className="footerTitle">LÊ TRẦN BẢO ANH</h2>
        <p className="footerDescription">Nơi luôn cập nhật các khóa học về JAVA hoặc JAVA SCRIPS</p>
        <div className="footerSocials">
          <i className="footerIcon fab fa-facebook-square"></i>
          <i className="footerIcon fab fa-instagram-square"></i>
          <i className="footerIcon fab fa-twitter-square"></i>
          <i className="footerIcon fab fa-pinterest-square"></i>
        </div>
      </div>
      <div className="footerCenter">
        <h3 className="footerTitle">Liên kết</h3>
        <ul className="footerList">
          <li className="footerListItem">
            <Link className="link" to="/">Trang Chủ</Link>
          </li>
          <li className="footerListItem">
            <Link className="link" to="/about">Giới Thiệu</Link>
          </li>
          <li className="footerListItem">
            <Link className="link" to="/contact">Liên Hệ</Link>
          </li>
          <li className="footerListItem">
            <Link className="link" to="/privacy">Chính Sách Bảo Mật</Link>
          </li>
        </ul>
      </div>
      <div className="footerRight">
        <h3 className="footerTitle">Thông Tin Liên Hệ</h3>
        <p className="footerContact">Email: Baoanhle363@gmail.com</p>
        <p className="footerContact">SĐT: 0905368088</p>
        <p className="footerContact">Địa chỉ: Phường Đông Hòa, Dĩ An, Bình Dương</p>
      </div>
    </div>
  );
}