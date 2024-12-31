import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/430866435_843133950912996_5775327786922558535_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHytdjk4PeJwIvKYfttEpLMCuEBCPbWvrIK4QEI9ta-snBw5PPvBCeg_Hd0hQEu7rU2umrZghx7ick6m3L0EE7c&_nc_ohc=4qiiJjrebbIQ7kNvgHmFD_A&_nc_oc=Adiao72-53_ppnSbVnPW81wXDjH2DIuOK1JQ95WGeITrhDKd3PLYlMP1EG7IROjMxDI&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A9-i8t4YVNBN0E_miKGdx5U&oh=00_AYBQmuOyRHOu212mJLICyzB5d5Pip-gR7I5a2XzC8w5N7A&oe=67785A0D"
          alt=""
        />
        <p>
        Chào bạn, tôi là Lê Trần Bảo Anh!
        <br />

        Là một người đam mê công nghệ và lập trình, tôi luôn tìm kiếm những cơ hội mới để học hỏi và phát triển. Sau khi hoàn thành chương trình học về lập trình mạng máy tính, tôi quyết định theo đuổi sự nghiệp lập trình viên và đã bắt đầu hành trình sáng tạo phần mềm từ khi còn là sinh viên. Tôi yêu thích việc xây dựng những sản phẩm không chỉ hiệu quả mà còn mang lại trải nghiệm tuyệt vời cho người dùng.

        Bên cạnh công việc, tôi luôn tìm kiếm những trải nghiệm mới, từ việc đọc sách, du lịch cho đến việc tham gia các dự án tình nguyện. Blog này là nơi tôi chia sẻ những kinh nghiệm, học hỏi từ những người xung quanh và cả những bài viết về lập trình, công nghệ mà tôi yêu thích.

        Hy vọng rằng những bài viết của tôi sẽ mang lại giá trị và cảm hứng cho bạn. <br />Cảm ơn bạn đã ghé thăm!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">THÔNG TIN LIÊN HỆ</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              SDT: 0905368088
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Email: Baoanhle363@gmail.com
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Địa chỉ: Khu phố Tân Hòa, Dĩ An, Bình Dương
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">THEO DÕI QUA</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
