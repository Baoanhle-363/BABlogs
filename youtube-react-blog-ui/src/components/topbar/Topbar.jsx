import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import "./topbar.css";

export default function Topbar() {
  const user = true;  // Giả sử người dùng đã đăng nhập

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">TRANG CHỦ</Link> {/* Liên kết đến trang Home */}
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">GIỚI THIỆU</Link> {/* Liên kết đến trang About */}
            </li>
          <li className="topListItem">
            <Link className="link" to="/contact">LIÊN HỆ</Link> {/* Liên kết đến trang About */}
          </li>
        
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/430866435_843133950912996_5775327786922558535_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHytdjk4PeJwIvKYfttEpLMCuEBCPbWvrIK4QEI9ta-snBw5PPvBCeg_Hd0hQEu7rU2umrZghx7ick6m3L0EE7c&_nc_ohc=4qiiJjrebbIQ7kNvgHmFD_A&_nc_oc=Adiao72-53_ppnSbVnPW81wXDjH2DIuOK1JQ95WGeITrhDKd3PLYlMP1EG7IROjMxDI&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=A9-i8t4YVNBN0E_miKGdx5U&oh=00_AYBQmuOyRHOu212mJLICyzB5d5Pip-gR7I5a2XzC8w5N7A&oe=67785A0D"
              alt="User Avatar"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i> {/* Biểu tượng tìm kiếm */}
      </div>
    </div>
  );
}