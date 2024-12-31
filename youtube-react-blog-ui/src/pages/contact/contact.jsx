import React from "react";
import Header from "../../components/header/Header";
import "./contact.css"; // Import file CSS cho trang Contact

export default function contact() {
  return (
    <div>
      <Header />
      <div className="contactPage">
        <div className="contactContent">
          <div className="contactItem">
            <span className="contactTitle">LIÊN HỆ VỚI CHÚNG TÔI</span>
            <p>
              Chúng tôi rất vui khi nhận được phản hồi từ bạn! Nếu bạn có bất kỳ câu hỏi nào, yêu cầu hay ý kiến đóng góp, xin vui lòng điền vào biểu mẫu dưới đây hoặc liên hệ với chúng tôi qua các kênh khác.
            </p>
          </div>

          <div className="contactItem">
            <span className="contactTitle">THÔNG TIN LIÊN HỆ</span>
            <ul className="contactList">
              <li className="contactListItem">
                SDT: 0905368088
              </li>
              <li className="contactListItem">
                Email: Baoanhle363@gmail.com
              </li>
              <li className="contactListItem">
                Địa chỉ: Khu phố Tân Hòa, Dĩ An, Bình Dương
              </li>
            </ul>
          </div>

          <div className="contactItem">
            <span className="contactTitle">GỬI TIN NHẮN</span>
            <form className="contactForm">
              <input
                type="text"
                className="contactInput"
                placeholder="Tên của bạn"
              />
              <input
                type="email"
                className="contactInput"
                placeholder="Email của bạn"
              />
              <textarea
                className="contactTextArea"
                placeholder="Nội dung tin nhắn"
                rows="5"
              ></textarea>
              <button type="submit" className="contactButton">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}