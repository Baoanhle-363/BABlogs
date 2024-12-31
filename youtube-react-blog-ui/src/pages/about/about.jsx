import React from "react";
import Header from "../../components/header/Header";
import "./about.css";

export default function About() {
  return (
    <div>
      <Header /> {/* Thêm header vào trang About */}
      <div className="aboutPage">
        {/* Personal Avatar Section */}
        <div className="aboutAvatarContainer">
          <img
            className="aboutAvatar"
            src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/430866435_843133950912996_5775327786922558535_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHytdjk4PeJwIvKYfttEpLMCuEBCPbWvrIK4QEI9ta-snBw5PPvBCeg_Hd0hQEu7rU2umrZghx7ick6m3L0EE7c&_nc_ohc=4qiiJjrebbIQ7kNvgHmFD_A&_nc_oc=Adiao72-53_ppnSbVnPW81wXDjH2DIuOK1JQ95WGeITrhDKd3PLYlMP1EG7IROjMxDI&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A9-i8t4YVNBN0E_miKGdx5U&oh=00_AYBQmuOyRHOu212mJLICyzB5d5Pip-gR7I5a2XzC8w5N7A&oe=67785A0D"
            alt="Avatar"
          />
          <div className="aboutItem"></div>
          <span className="aboutTitle">LÊ TRẦN BẢO ANH</span>
          <p className="aboutDate">Công nghệ thông tin - Chuyên ngành phần mềm</p>
        </div>

        <div className="aboutItem">
          <span className="aboutTitle">THÔNG TIN LIÊN HỆ</span>
          <ul className="aboutList">
            <li className="aboutListItem">SDT: 0905368088</li>
            <li className="aboutListItem">Email: Baoanhle363@gmail.com</li>
            <li className="aboutListItem">Địa chỉ: Khu phố Tân Hòa, Dĩ An, Bình Dương</li>
          </ul>
        </div>

        <div className="aboutItem">
          <span className="aboutTitle">KỸ NĂNG</span>
          <ul className="aboutList">
            <li className="aboutListItem">Kỹ năng giao tiếp</li>
            <li className="aboutListItem">Kỹ năng làm việc nhóm</li>
            <li className="aboutListItem">Kỹ năng tư duy và sáng tạo</li>
            <li className="aboutListItem">Kỹ năng lập trình và tìm kiếm</li>
          </ul>
        </div>

        <div className="aboutItem">
          <span className="aboutTitle">KỸ NĂNG CHUYÊN MÔN</span>
          <ul className="aboutList">
            <li className="aboutListItem">Viết testcase</li>
            <li className="aboutListItem">Phần mềm Jira</li>
            <li className="aboutListItem">Phần mềm Strapi</li>
          </ul>
        </div>

        <div className="aboutItem">
          <span className="aboutTitle">KINH NGHIỆM LÀM VIỆC</span>
          <div className="aboutContent aboutContentTwoColumns">
            <div>
              <span className="aboutDate">T08/2023 - Nay</span>
              <div className="aboutListItem">CÔNG TY TNHH MEDVET</div>
              <p className="aboutListItem">Kiểm thử chất lượng phần mềm.</p>
              <p className="aboutListItem">Làm việc trực tiếp với đội phát triển sản phẩm.</p>
              <p className="aboutListItem">Phân tích tài liệu và lên testcase cho các tính năng của hệ thống.</p>
              <p className="aboutListItem">Sử dụng phần mềm Jira để báo lỗi và kiểm soát số lượng tồn đọng và số lượng hoàn thành.</p>
              <p className="aboutListItem">Viết tài liệu cho hệ thống quản lý Portal.</p>
              <p className="aboutListItem">Đi khảo sát quy trình nghiệp vụ tại bệnh viện và viết báo cáo.</p>
              <p className="aboutListItem">Đi triển khai phần mềm cho bệnh viện Trưng Vương, bệnh viện Truyền máu huyết học, Bệnh viện Y Học Cổ Truyền.</p>
              <p className="aboutListItem">Tập huấn cho nhân viên y tế tại bệnh viện sử dụng phần mềm.</p>
            </div>
          </div>
        </div>

        <div className="aboutItem">
          <span className="aboutTitle">DỰ ÁN THỰC TẾ</span>
          <div className="aboutContent aboutContentTwoColumns">
            <div>
              <span className="aboutDate">T09/2023 - Nay</span>
              <div className="aboutListItem">Phần mềm nhân viên y tế</div>
              <p className="aboutListItem">Triển khai cho các bệnh viện như: Bệnh viện Y Học Cổ Truyền, Bệnh viện Thống Nhất, Bệnh viện Nhi Đồng 2, Bệnh viện 105.</p>
              <p className="aboutListItem">Phân tích tài liệu và lên testcase.</p>
              <p className="aboutListItem">Kiểm thử và đánh giá phần mềm.</p>
              <p className="aboutListItem">Triển khai phần mềm cho.</p>
            </div>
            <div>
              <span className="aboutDate">T11/2023</span>
              <div className="aboutListItem">Phần mềm nhân viên y tế</div>
              <p className="aboutListItem">Triển khai 03 bệnh viện: Bệnh viện Trưng Vương, Bệnh viện Truyền máu huyết học, Bệnh viện Y Học Cổ Truyền.</p>
              <p className="aboutListItem">Phân tích tài liệu, lên testcase các tính năng lớn như: Tính năng Bệnh Án, tính năng Lịch sử điều trị, tính năng Kho hồ sơ số, tính năng Khám chuyên khoa, tính năng Hồ sơ ký số, tính năng Quản trị hệ thống.</p>
              <p className="aboutListItem">Kiểm thử và đánh giá phần mềm.</p>
              <p className="aboutListItem">Triển khai phần mềm cho nhân viên y tế sử dụng.</p>
            </div>
          </div>
        </div>

        {/* New section for Achievements */}
        <div className="aboutItem">
          <span className="aboutTitle">CHỨNG CHỈ ĐẠT ĐƯỢC</span>
          <ul className="aboutList">
        
          </ul>
          {/* Image for Certificates */}
          <div className="aboutCertificates">
            <img
              className="aboutImg"
              src="/Picture/1.png" // Replace with your actual certificate image URLs
              alt="Certificate 1"
            />
            <img
              className="aboutImg"
              src="/picture/2.png" // Replace with your actual certificate image URLs
              alt="Certificate 2"
            />
            <img
              className="aboutImg"
              src="/picture/3.png" // Replace with your actual certificate image URLs
              alt="Certificate 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}