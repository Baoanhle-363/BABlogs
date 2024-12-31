import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const { id } = useParams();

  const posts = {
    java1: {
      title: "Cơ bản về Java cho người mới nhập môn",
      img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Quay lại trang",
      date: "1 day ago",
      content: `
        <p>Ở bài viết này, chúng ta sẽ cùng nhau tìm hiểu để người mới có thể nắm được những kiến thức cơ bản về Java, những lưu ý và những kiến thức cần phải nắm. Hãy cùng mình đi tìm hiểu nhé!</p>

<h2>Quy tắc đặt tên trong Java</h2>
<p>Trước hết, đối với bất kỳ ngôn ngữ lập trình nào ngày nay cũng đều có những quy tắc đặt tên biến, tên hằng, tên phương thức riêng. Và Java cũng không ngoại lệ, khi lập trình với Java, chúng ta cần phải lưu ý đến những nguyên tắc đặt tên sao cho hợp lý.</p>

<h3>Cơ bản về Java – Quy tắc đặt tên chung</h3>
<p>Java có những nguyên tắc đặt tên riêng, dù bạn muốn đặt tên biến, tên hằng hay tên phương thức theo ý nghĩa, tên biến đó vẫn phải tuân theo quy tắc Java đã đặt ra. Dưới đây là một số quy tắc chung bạn cần lưu ý:</p>
<ul>
  <li>Khi đặt tên, không được bắt đầu bằng số.</li>
  <li>Tên phải bắt đầu bằng một chữ cái hoặc ký tự $, _.</li>
  <li>Tên phải khác với các từ khóa đã có sẵn trong Java.</li>
  <li>Không sử dụng các ký tự đặc biệt để đặt tên, ngoại trừ $ và _.</li>
  <li>Tên khai báo cần có ý nghĩa, tránh đặt tên quá dài hoặc quá ngắn (không quá 20 ký tự).</li>
  <li>Tránh đặt tên gây nhầm lẫn về mặt ý nghĩa.</li>
</ul>

<h3>Đặt tên biến</h3>
<p>Khi đặt tên biến, bạn cần tuân thủ các quy tắc sau:</p>
<ul>
  <li>Tên biến phải tuân theo quy tắc Camel Case (quy tắc lạc đà). Chữ cái đầu tiên viết thường và các từ tiếp theo viết hoa. Ví dụ: <strong>studentName</strong>.</li>
  <li>Tên biến phải là danh từ và cần phản ánh rõ ràng mục đích của biến. Ví dụ: một biến lưu danh sách học sinh nên đặt là <strong>studentList</strong>.</li>
</ul>

<h3>Đặt tên hằng số</h3>
<p>Đối với hằng số, tất cả các chữ cái cần phải viết hoa và có ý nghĩa rõ ràng. Ví dụ: khai báo hằng số cho số PI nên là <strong>PI = 3.14</strong>.</p>

<h3>Đặt tên phương thức</h3>
<p>Để đặt tên phương thức, cần tuân thủ quy tắc Camel Case như đối với biến. Cần lưu ý thêm hai điểm sau:</p>
<ul>
  <li>Tên phương thức nên bắt đầu bằng một động từ. Ví dụ: <strong>addStudentToList()</strong>.</li>
  <li>Tên phương thức cần dễ hiểu và rõ ràng về chức năng.</li>
</ul>

<h3>Đặt tên Class</h3>
<p>Đối với Class hoặc Interface, bạn cần đặt tên theo quy tắc chung, trong đó chữ cái đầu tiên của mỗi từ cần phải viết hoa. Ví dụ: <strong>class StudentManagement</strong>.</p>
<p>Tên của Interface nên bắt đầu bằng chữ <strong>I</strong> (Ví dụ: <strong>IStudentManagement</strong>).</p>

<h3>Đặt tên package</h3>
<p>Tên package cần viết thường và tuân theo các quy tắc chung đã nêu trên.</p>

<h2>Một số từ khóa cơ bản của Java</h2>
<p>Dưới đây là danh sách các từ khóa quan trọng trong Java mà bạn cần nắm:</p>
<table border="1" style="width: 100%; text-align: center; border-collapse: collapse;">
  <tr><td>abstract</td><td>assert</td><td>boolean</td><td>break</td></tr>
  <tr><td>byte</td><td>case</td><td>catch</td><td>char</td></tr>
  <tr><td>class</td><td>const</td><td>continue</td><td>default</td></tr>
  <tr><td>do</td><td>double</td><td>else</td><td>enum</td></tr>
  <tr><td>extends</td><td>final</td><td>finally</td><td>float</td></tr>
  <tr><td>for</td><td>goto</td><td>if</td><td>implements</td></tr>
  <tr><td>import</td><td>instanceof</td><td>int</td><td>interface</td></tr>
  <tr><td>long</td><td>native</td><td>new</td><td>package</td></tr>
  <tr><td>private</td><td>protected</td><td>public</td><td>return</td></tr>
  <tr><td>short</td><td>static</td><td>strictfp</td><td>super</td></tr>
  <tr><td>switch</td><td>synchronized</td><td>this</td><td>throw</td></tr>
  <tr><td>throws</td><td>transient</td><td>try</td><td>void</td></tr>
  <tr><td>volatile</td><td>while</td></tr>
</table>

<h2>Comment code – Kiến thức cơ bản trong Java cần biết</h2>
<p>Comment code là những đoạn mã không được thực thi khi chạy chương trình trong Java. Java sẽ bỏ qua những đoạn này trong quá trình biên dịch. Những đoạn comment này được sử dụng để giải thích hoặc chú thích ý nghĩa của đoạn mã, giúp chúng ta dễ dàng hiểu và bảo trì code sau này.</p>
<p>Java có 3 cách để comment code:</p>
<ul>
  <li>Comment một dòng: Sử dụng ký hiệu <code>//</code> ở đầu mỗi dòng.</li>
  <li>Comment nhiều dòng: Sử dụng ký hiệu <code>/* comment code */</code>.</li>
  <li>Comment đặc biệt để tạo Java documentation, sử dụng định dạng HTML.</li>
</ul>

<h2>Các câu lệnh cơ bản để nhập xuất dữ liệu</h2>
<p>Chúng ta đã tìm hiểu các kiến thức cơ bản về Java. Vậy làm thế nào để nhập xuất dữ liệu trong Java? Java cung cấp các câu lệnh cơ bản như sau:</p>
<ul>
  <li>Sử dụng câu lệnh <strong>System.out</strong> để in dữ liệu lên màn hình console.</li>
  <li>Sử dụng câu lệnh <strong>System.in + Scanner</strong> để nhập dữ liệu từ bàn phím.</li>
</ul>`,
    },
    // Thêm các bài viết khác ở đây
    java2: {
      title: "Học Java trực tuyến Bắt đầu mã hóa từ đầu",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "2 days ago",
      content: `
        Java là một ngôn ngữ lập trình bậc cao, được phát triển bởi James Gosling và Sun Microsystems, phát hành lần đầu vào năm 1995.
        Java nổi bật nhờ tính ổn định, khả năng đa nền tảng và cú pháp dễ hiểu, giúp lập trình viên dễ dàng học và sử dụng.
        <br />
        <br />
        <strong>1. Lịch sử và sự phát triển của Java:</strong>
        <br />
        Java được phát triển bởi James Gosling tại Sun Microsystems vào những năm 1990. Được phát hành lần đầu vào năm 1995, Java nhanh chóng trở thành một trong những ngôn ngữ lập trình phổ biến nhất. Từ đó đến nay, Java đã được cải tiến và phát triển, vẫn giữ vững được vai trò quan trọng trong thế giới lập trình.
        <br />
        <br />
        <strong>2. Các tính năng chính của Java:</strong>
        <br />
        <ul>
          <li><strong>Đa nền tảng:</strong> Java có thể chạy trên nhiều hệ điều hành khác nhau nhờ vào Java Virtual Machine (JVM), giúp ứng dụng Java dễ dàng di chuyển giữa các nền tảng.</li>
          <li><strong>Hướng đối tượng:</strong> Java là ngôn ngữ lập trình hướng đối tượng, giúp việc tổ chức mã nguồn trở nên dễ dàng, bảo trì và mở rộng hiệu quả.</li>
          <li><strong>Bảo mật:</strong> Java có tính năng bảo mật cao, giúp bảo vệ dữ liệu và hệ thống của người dùng khỏi các tấn công bên ngoài.</li>
          <li><strong>Quản lý bộ nhớ tự động:</strong> Java cung cấp tính năng Garbage Collection (GC) để quản lý bộ nhớ hiệu quả, giúp giảm bớt gánh nặng cho lập trình viên.</li>
          <li><strong>Thư viện phong phú:</strong> Java đi kèm với một thư viện chuẩn mạnh mẽ, hỗ trợ mọi nhu cầu phát triển phần mềm từ cơ bản đến phức tạp.</li>
        </ul>
        <br />
        <br />
        <strong>3. Ứng dụng của Java:</strong>
        <br />
        Java được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
        <ul>
          <li><strong>Phát triển ứng dụng web:</strong> Java là nền tảng của nhiều ứng dụng web lớn như LinkedIn, eBay và Amazon.</li>
          <li><strong>Phát triển ứng dụng di động:</strong> Java là ngôn ngữ chính để phát triển ứng dụng Android, giúp tạo ra hàng triệu ứng dụng di động phổ biến.</li>
          <li><strong>Phát triển phần mềm doanh nghiệp:</strong> Java Enterprise Edition (Java EE) cung cấp các công cụ cho việc xây dựng các ứng dụng quy mô lớn như hệ thống ERP, CRM.</li>
          <li><strong>Game:</strong> Java cũng được sử dụng để phát triển các trò chơi, đặc biệt là các trò chơi trên nền tảng di động và máy tính.</li>
        </ul>
        <br />
        <br />
        <strong>4. Tương lai của Java:</strong>
        <br />
        Với sự phát triển không ngừng của cộng đồng và các phiên bản mới, Java tiếp tục giữ vững vị trí là một trong những ngôn ngữ lập trình mạnh mẽ nhất và phổ biến. Java vẫn sẽ tiếp tục phát triển và duy trì sự ổn định, phục vụ các yêu cầu phát triển phần mềm hiện đại trong nhiều năm tới.
      `,
    },
    // Thêm các bài viết khác ở đây
    java3: {
      title: "Chia sẻ kiến thức JavaScript",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "3 days ago",
      content: `
        JavaScript là một ngôn ngữ lập trình phổ biến được sử dụng chủ yếu trong phát triển web. Được biết đến với khả năng tương tác động và tạo các trải nghiệm người dùng mượt mà, JavaScript đã trở thành một phần không thể thiếu trong việc xây dựng các trang web hiện đại. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của JavaScript, bao gồm cú pháp, các kiểu dữ liệu và cách viết các chương trình đơn giản.
        <br />
        <br />
        <strong>1. Lịch sử và sự phát triển của JavaScript:</strong>
        <br />
        JavaScript được phát triển bởi Brendan Eich vào năm 1995 khi ông làm việc tại Netscape Communications Corporation. Ban đầu, nó được gọi là Mocha, sau đó đổi tên thành LiveScript và cuối cùng là JavaScript. Kể từ khi ra đời, JavaScript đã trải qua một sự phát triển mạnh mẽ, và giờ đây nó là một phần không thể thiếu trong phát triển web, trở thành một ngôn ngữ được sử dụng trên toàn cầu.
        <br />
        <br />
        <strong>2. Các tính năng chính của JavaScript:</strong>
        <br />
        <ul>
          <li><strong>Đơn giản và dễ học:</strong> JavaScript có cú pháp dễ hiểu và dễ học, giúp lập trình viên nhanh chóng làm quen và sử dụng.</li>
          <li><strong>Đa năng:</strong> JavaScript có thể được sử dụng cho cả phía client và phía server, giúp phát triển ứng dụng web toàn diện.</li>
          <li><strong>Thư viện và framework phong phú:</strong> JavaScript có nhiều thư viện và framework hỗ trợ như React, Angular, và Vue.js, giúp lập trình viên phát triển ứng dụng nhanh chóng và hiệu quả.</li>
          <li><strong>Đa nền tảng:</strong> JavaScript có thể chạy trên nhiều hệ điều hành và trình duyệt khác nhau.</li>
        </ul>
        <br />
        <br />
        <strong>3. Ứng dụng của JavaScript:</strong>
        <br />
        JavaScript được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
        <ul>
          <li><strong>Phát triển web:</strong> JavaScript là ngôn ngữ chính cho phát triển ứng dụng web, từ giao diện người dùng đến logic phía server, tạo ra các trang web động và tương tác.</li>
          <li><strong>Ứng dụng di động:</strong> JavaScript có thể được sử dụng để phát triển ứng dụng di động thông qua các framework như React Native, giúp tạo ra các ứng dụng trên cả iOS và Android.</li>
          <li><strong>Ứng dụng desktop:</strong> JavaScript có thể được sử dụng để phát triển ứng dụng desktop thông qua các framework như Electron, cho phép tạo ra ứng dụng đa nền tảng trên Windows, macOS và Linux.</li>
          <li><strong>Trò chơi:</strong> JavaScript có thể được sử dụng để phát triển trò chơi trên web, mang đến các trải nghiệm giải trí trực tuyến hấp dẫn.</li>
        </ul>
        <br />
        <br />
        <strong>4. Tương lai của JavaScript:</strong>
        <br />
        Với sự phát triển không ngừng của cộng đồng và các phiên bản mới, JavaScript tiếp tục là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất. JavaScript sẽ tiếp tục phát triển và đáp ứng nhu cầu của các lập trình viên trong tương lai, đặc biệt là trong các lĩnh vực phát triển ứng dụng di động, desktop, và web. Ngôn ngữ này chắc chắn sẽ không ngừng thay đổi và mở rộng, mang lại nhiều cơ hội và tiềm năng cho các nhà phát triển.
      `,
    },

    java4: {
      title: "Chia sẻ kiến thức C++",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "3 days ago",
      content: `
        C++ là một ngôn ngữ lập trình mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong phát triển phần mềm hệ thống và ứng dụng. Được tạo ra bởi Bjarne Stroustrup, C++ cung cấp những khả năng mạnh mẽ cho lập trình viên, đặc biệt trong việc xây dựng các ứng dụng yêu cầu hiệu suất cao. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của C++, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản.
        <br />
        <br />
        <strong>1. Lịch sử và sự phát triển của C++:</strong>
        <br />
        C++ được phát triển bởi Bjarne Stroustrup vào năm 1979 tại Bell Labs. Ban đầu, ngôn ngữ này được gọi là "C with Classes" và sau đó được đổi tên thành C++ vào năm 1983. Sự phát triển của C++ không ngừng thay đổi để đáp ứng các nhu cầu của lập trình viên trong việc xây dựng các phần mềm hệ thống và ứng dụng yêu cầu hiệu suất cao.
        <br />
        <br />
        <strong>2. Các tính năng chính của C++:</strong>
        <br />
        <ul>
          <li><strong>Hiệu suất cao:</strong> C++ được thiết kế để có hiệu suất cao, giúp phát triển các ứng dụng yêu cầu tài nguyên lớn như hệ điều hành, phần mềm nhúng và trò chơi.</li>
          <li><strong>Hướng đối tượng:</strong> C++ hỗ trợ các khái niệm hướng đối tượng như kế thừa, đa hình và đóng gói, cho phép tạo ra các chương trình dễ bảo trì và mở rộng.</li>
          <li><strong>Đa nền tảng:</strong> C++ có thể chạy trên nhiều hệ điều hành khác nhau, bao gồm Windows, macOS và Linux, giúp lập trình viên phát triển các ứng dụng đa nền tảng.</li>
          <li><strong>Thư viện phong phú:</strong> C++ có một hệ sinh thái thư viện phong phú, giúp lập trình viên dễ dàng tìm thấy các công cụ cần thiết cho công việc của mình, bao gồm cả các thư viện cho đồ họa, mạng và cơ sở dữ liệu.</li>
        </ul>
        <br />
        <br />
        <strong>3. Ứng dụng của C++:</strong>
        <br />
        C++ được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
        <ul>
          <li><strong>Phát triển phần mềm hệ thống:</strong> C++ là ngôn ngữ chính cho phát triển các hệ điều hành, trình biên dịch và các phần mềm hệ thống khác, nhờ vào hiệu suất và khả năng kiểm soát tài nguyên hệ thống.</li>
          <li><strong>Ứng dụng doanh nghiệp:</strong> C++ được sử dụng để phát triển các ứng dụng doanh nghiệp lớn nhờ tính ổn định và bảo mật, đặc biệt trong các hệ thống tài chính và quản lý doanh nghiệp.</li>
          <li><strong>Trò chơi:</strong> C++ là ngôn ngữ chính cho phát triển trò chơi nhờ hiệu suất cao và khả năng kiểm soát tài nguyên, giúp xây dựng các trò chơi 3D phức tạp.</li>
          <li><strong>Ứng dụng nhúng:</strong> C++ được sử dụng trong các thiết bị nhúng như TV thông minh, robot, và thiết bị IoT (Internet of Things), nơi yêu cầu tính toán hiệu quả và tiết kiệm tài nguyên.</li>
        </ul>
        <br />
        <br />
        <strong>4. Tương lai của C++:</strong>
        <br />
        Với sự phát triển không ngừng của cộng đồng và các phiên bản mới, C++ tiếp tục là một trong những ngôn ngữ lập trình phổ biến và mạnh mẽ nhất. C++ sẽ tiếp tục phát triển và đáp ứng nhu cầu của các lập trình viên trong tương lai, đặc biệt trong các lĩnh vực như phát triển phần mềm hệ thống, trò chơi và các ứng dụng nhúng.
      `,
    },
    java5: {
      title: "Chia sẻ kiến thức Java",
      img: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "4 days ago",
      content: `
        Java là một ngôn ngữ lập trình phổ biến được sử dụng rộng rãi trong phát triển phần mềm và ứng dụng. Với cú pháp đơn giản và khả năng chạy trên nhiều nền tảng khác nhau, Java đã trở thành một trong những ngôn ngữ lập trình được ưa chuộng nhất trong cộng đồng lập trình. Trong bài viết này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của Java, bao gồm cú pháp, các kiểu dữ liệu, và cách viết các chương trình đơn giản.
        <br />
        <br />
        <strong>1. Lịch sử và sự phát triển của Java:</strong>
        <br />
        Java được phát triển bởi James Gosling và các cộng sự tại Sun Microsystems vào năm 1995. Java được thiết kế với mục tiêu là một ngôn ngữ lập trình dễ sử dụng, dễ bảo trì và chạy trên nhiều nền tảng khác nhau. Đặc biệt, Java nổi bật với nguyên lý "Viết một lần, chạy ở mọi nơi", tức là các chương trình Java có thể chạy trên bất kỳ nền tảng nào mà không cần thay đổi mã nguồn.
        <br />
        <br />
        <strong>2. Các tính năng chính của Java:</strong>
        <br />
        <ul>
          <li><strong>Độc lập nền tảng:</strong> Java cho phép các ứng dụng chạy trên nhiều nền tảng khác nhau như Windows, macOS, Linux mà không cần thay đổi mã nguồn.</li>
          <li><strong>Hướng đối tượng:</strong> Java hỗ trợ các nguyên lý lập trình hướng đối tượng như kế thừa, đa hình, và đóng gói, giúp lập trình viên xây dựng các ứng dụng dễ bảo trì và mở rộng.</li>
          <li><strong>Thư viện phong phú:</strong> Java có một hệ sinh thái thư viện lớn mạnh, hỗ trợ phát triển ứng dụng nhanh chóng và hiệu quả.</li>
          <li><strong>Bảo mật cao:</strong> Java được thiết kế để có mức độ bảo mật cao, đặc biệt là trong việc phát triển ứng dụng web và di động.</li>
        </ul>
        <br />
        <br />
        <strong>3. Ứng dụng của Java:</strong>
        <br />
        Java được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau:
        <ul>
          <li><strong>Phát triển ứng dụng doanh nghiệp:</strong> Java là một ngôn ngữ phổ biến trong phát triển các ứng dụng doanh nghiệp lớn và hệ thống quản lý dữ liệu.</li>
          <li><strong>Phát triển ứng dụng di động:</strong> Java là ngôn ngữ chính để phát triển ứng dụng Android nhờ vào Android SDK.</li>
          <li><strong>Phát triển ứng dụng web:</strong> Java hỗ trợ nhiều framework như Spring và Hibernate để phát triển ứng dụng web hiệu quả và mạnh mẽ.</li>
          <li><strong>Phát triển trò chơi:</strong> Java cũng được sử dụng trong phát triển trò chơi, đặc biệt là các trò chơi trên nền tảng di động.</li>
        </ul>
        <br />
        <br />
        <strong>4. Tương lai của Java:</strong>
        <br />
        Với sự phát triển liên tục của các phiên bản mới và sự hỗ trợ mạnh mẽ từ cộng đồng, Java tiếp tục là một trong những ngôn ngữ lập trình hàng đầu. Sự phổ biến của Java trong các ứng dụng doanh nghiệp, phát triển di động và web cho thấy ngôn ngữ này sẽ tiếp tục giữ vững vị trí quan trọng trong tương lai.
      `,
    },
    java6: {
      title: "Chia sẻ về kinh nghiệm của tôi",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "2 days ago",
      content: `
        Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau.
        Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế.
        <br />
        <br />
        <strong>1. Kinh nghiệm với Java:</strong>
        <br />
        Java là ngôn ngữ lập trình đầu tiên mà tôi học. Tôi đã sử dụng Java để phát triển nhiều ứng dụng web và di động. Java có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng tiếp cận và học hỏi.
        <br />
        <br />
        <strong>2. Kinh nghiệm với Python:</strong>
        <br />
        Python là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án khoa học dữ liệu và trí tuệ nhân tạo. Python có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và thực hiện các tác vụ phức tạp.
        <br />
        <br />
        <strong>3. Kinh nghiệm với JavaScript:</strong>
        <br />
        JavaScript là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. JavaScript có cú pháp dễ hiểu và dễ học, giúp tôi dễ dàng phát triển các ứng dụng web tương tác.
        <br />
        <br />
        <strong>4. Kinh nghiệm với C++:</strong>
        <br />
        C++ là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển phần mềm hệ thống. C++ có cú pháp phức tạp hơn so với các ngôn ngữ khác, nhưng nó cung cấp nhiều tính năng mạnh mẽ giúp tôi phát triển các ứng dụng hiệu suất cao.
        <br />
        <br />
        <strong>5. Kinh nghiệm với Ruby:</strong>
        <br />
        Ruby là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. Ruby có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và phát triển các ứng dụng web nhanh chóng.
        <br />
        <br />
        Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình.
      `,
    },
    java7: {
      title: "Khóa học Java online Tiếng việt toán tập (Viẹtack)",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "2 days ago",
      content: `
        Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau.
        Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế.
        <br />
        <br />
        <strong>1. Kinh nghiệm với Java:</strong>
        <br />
        Java là ngôn ngữ lập trình đầu tiên mà tôi học. Tôi đã sử dụng Java để phát triển nhiều ứng dụng web và di động. Java có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng tiếp cận và học hỏi.
        <br />
        <br />
        <strong>2. Kinh nghiệm với Python:</strong>
        <br />
        Python là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án khoa học dữ liệu và trí tuệ nhân tạo. Python có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và thực hiện các tác vụ phức tạp.
        <br />
        <br />
        <strong>3. Kinh nghiệm với JavaScript:</strong>
        <br />
        JavaScript là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. JavaScript có cú pháp dễ hiểu và dễ học, giúp tôi dễ dàng phát triển các ứng dụng web tương tác.
        <br />
        <br />
        <strong>4. Kinh nghiệm với C++:</strong>
        <br />
        C++ là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển phần mềm hệ thống. C++ có cú pháp phức tạp hơn so với các ngôn ngữ khác, nhưng nó cung cấp nhiều tính năng mạnh mẽ giúp tôi phát triển các ứng dụng hiệu suất cao.
        <br />
        <br />
        <strong>5. Kinh nghiệm với Ruby:</strong>
        <br />
        Ruby là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. Ruby có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và phát triển các ứng dụng web nhanh chóng.
        <br />
        <br />
        Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình.
      `,
    },
    java8: {
      title: "Lập trình Java trong 4 tuần",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "2 days ago",
      content: `
        Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau.
        Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế.
        <br />
        <br />
        <strong>1. Kinh nghiệm với Java:</strong>
        <br />
        Java là ngôn ngữ lập trình đầu tiên mà tôi học. Tôi đã sử dụng Java để phát triển nhiều ứng dụng web và di động. Java có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng tiếp cận và học hỏi.
        <br />
        <br />
        <strong>2. Kinh nghiệm với Python:</strong>
        <br />
        Python là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án khoa học dữ liệu và trí tuệ nhân tạo. Python có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và thực hiện các tác vụ phức tạp.
        <br />
        <br />
        <strong>3. Kinh nghiệm với JavaScript:</strong>
        <br />
        JavaScript là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. JavaScript có cú pháp dễ hiểu và dễ học, giúp tôi dễ dàng phát triển các ứng dụng web tương tác.
        <br />
        <br />
        <strong>4. Kinh nghiệm với C++:</strong>
        <br />
        C++ là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển phần mềm hệ thống. C++ có cú pháp phức tạp hơn so với các ngôn ngữ khác, nhưng nó cung cấp nhiều tính năng mạnh mẽ giúp tôi phát triển các ứng dụng hiệu suất cao.
        <br />
        <br />
        <strong>5. Kinh nghiệm với Ruby:</strong>
        <br />
        Ruby là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. Ruby có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và phát triển các ứng dụng web nhanh chóng.
        <br />
        <br />
        Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình.
      `,
    },
    java9: {
      title: "The Complete Java Masterclass - Udemy",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "2 days ago",
      content: `
        Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau.
        Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế.
        <br />
        <br />
        <strong>1. Kinh nghiệm với Java:</strong>
        <br />
        Java là ngôn ngữ lập trình đầu tiên mà tôi học. Tôi đã sử dụng Java để phát triển nhiều ứng dụng web và di động. Java có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng tiếp cận và học hỏi.
        <br />
        <br />
        <strong>2. Kinh nghiệm với Python:</strong>
        <br />
        Python là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án khoa học dữ liệu và trí tuệ nhân tạo. Python có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và thực hiện các tác vụ phức tạp.
        <br />
        <br />
        <strong>3. Kinh nghiệm với JavaScript:</strong>
        <br />
        JavaScript là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. JavaScript có cú pháp dễ hiểu và dễ học, giúp tôi dễ dàng phát triển các ứng dụng web tương tác.
        <br />
        <br />
        <strong>4. Kinh nghiệm với C++:</strong>
        <br />
        C++ là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển phần mềm hệ thống. C++ có cú pháp phức tạp hơn so với các ngôn ngữ khác, nhưng nó cung cấp nhiều tính năng mạnh mẽ giúp tôi phát triển các ứng dụng hiệu suất cao.
        <br />
        <br />
        <strong>5. Kinh nghiệm với Ruby:</strong>
        <br />
        Ruby là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. Ruby có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và phát triển các ứng dụng web nhanh chóng.
        <br />
        <br />
        Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình.
      `,
    },
    java10: {
      title: "Khóa học lập trình Java cơ bản cho người mới bắt đầu - Rikkei Academy",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "2 days ago",
      content: `
        Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau.
        Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế.
        <br />
        <br />
        <strong>1. Kinh nghiệm với Java:</strong>
        <br />
        Java là ngôn ngữ lập trình đầu tiên mà tôi học. Tôi đã sử dụng Java để phát triển nhiều ứng dụng web và di động. Java có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng tiếp cận và học hỏi.
        <br />
        <br />
        <strong>2. Kinh nghiệm với Python:</strong>
        <br />
        Python là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án khoa học dữ liệu và trí tuệ nhân tạo. Python có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và thực hiện các tác vụ phức tạp.
        <br />
        <br />
        <strong>3. Kinh nghiệm với JavaScript:</strong>
        <br />
        JavaScript là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. JavaScript có cú pháp dễ hiểu và dễ học, giúp tôi dễ dàng phát triển các ứng dụng web tương tác.
        <br />
        <br />
        <strong>4. Kinh nghiệm với C++:</strong>
        <br />
        C++ là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển phần mềm hệ thống. C++ có cú pháp phức tạp hơn so với các ngôn ngữ khác, nhưng nó cung cấp nhiều tính năng mạnh mẽ giúp tôi phát triển các ứng dụng hiệu suất cao.
        <br />
        <br />
        <strong>5. Kinh nghiệm với Ruby:</strong>
        <br />
        Ruby là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. Ruby có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và phát triển các ứng dụng web nhanh chóng.
        <br />
        <br />
        Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình.
      `,
    },
    java11: {
      title: "Học ngôn ngữ Java cơ bản từ A - Z cho người mới bắt đầu - CodeGym",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "2 days ago",
      content: `
        Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau.
        Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế.
        <br />
        <br />
        <strong>1. Kinh nghiệm với Java:</strong>
        <br />
        Java là ngôn ngữ lập trình đầu tiên mà tôi học. Tôi đã sử dụng Java để phát triển nhiều ứng dụng web và di động. Java có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng tiếp cận và học hỏi.
        <br />
        <br />
        <strong>2. Kinh nghiệm với Python:</strong>
        <br />
        Python là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án khoa học dữ liệu và trí tuệ nhân tạo. Python có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và thực hiện các tác vụ phức tạp.
        <br />
        <br />
        <strong>3. Kinh nghiệm với JavaScript:</strong>
        <br />
        JavaScript là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. JavaScript có cú pháp dễ hiểu và dễ học, giúp tôi dễ dàng phát triển các ứng dụng web tương tác.
        <br />
        <br />
        <strong>4. Kinh nghiệm với C++:</strong>
        <br />
        C++ là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển phần mềm hệ thống. C++ có cú pháp phức tạp hơn so với các ngôn ngữ khác, nhưng nó cung cấp nhiều tính năng mạnh mẽ giúp tôi phát triển các ứng dụng hiệu suất cao.
        <br />
        <br />
        <strong>5. Kinh nghiệm với Ruby:</strong>
        <br />
        Ruby là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. Ruby có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và phát triển các ứng dụng web nhanh chóng.
        <br />
        <br />
        Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình.
      `,
    },
    java12: {
      title: "Khóa học lập trình Java cho người mới bắt đầu - FPT Aptech",
      img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      author: "Quay lại trang",
      date: "2 days ago",
      content: `
        Trong bài viết này, tôi sẽ chia sẻ về những kinh nghiệm của mình trong quá trình học tập và làm việc với các ngôn ngữ lập trình khác nhau.
        Tôi đã học và làm việc với nhiều ngôn ngữ lập trình như Java, Python, JavaScript, C++, và Ruby. Mỗi ngôn ngữ đều có những ưu điểm và nhược điểm riêng, và tôi đã học được rất nhiều từ việc sử dụng chúng trong các dự án thực tế.
        <br />
        <br />
        <strong>1. Kinh nghiệm với Java:</strong>
        <br />
        Java là ngôn ngữ lập trình đầu tiên mà tôi học. Tôi đã sử dụng Java để phát triển nhiều ứng dụng web và di động. Java có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng tiếp cận và học hỏi.
        <br />
        <br />
        <strong>2. Kinh nghiệm với Python:</strong>
        <br />
        Python là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án khoa học dữ liệu và trí tuệ nhân tạo. Python có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và thực hiện các tác vụ phức tạp.
        <br />
        <br />
        <strong>3. Kinh nghiệm với JavaScript:</strong>
        <br />
        JavaScript là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. JavaScript có cú pháp dễ hiểu và dễ học, giúp tôi dễ dàng phát triển các ứng dụng web tương tác.
        <br />
        <br />
        <strong>4. Kinh nghiệm với C++:</strong>
        <br />
        C++ là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển phần mềm hệ thống. C++ có cú pháp phức tạp hơn so với các ngôn ngữ khác, nhưng nó cung cấp nhiều tính năng mạnh mẽ giúp tôi phát triển các ứng dụng hiệu suất cao.
        <br />
        <br />
        <strong>5. Kinh nghiệm với Ruby:</strong>
        <br />
        Ruby là ngôn ngữ lập trình mà tôi sử dụng nhiều nhất trong các dự án phát triển web. Ruby có cú pháp rõ ràng và dễ hiểu, giúp tôi dễ dàng viết mã và phát triển các ứng dụng web nhanh chóng.
        <br />
        <br />
        Hy vọng những chia sẻ này sẽ giúp ích cho các bạn trong quá trình học tập và làm việc của mình.
      `,
    },
  };


  const post = posts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.img} alt="" />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {post.author}
              </Link>
            </b>
          </span>
          <span>{post.date}</span>
        </div>
        <p className="singlePostDesc" dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </div>
    </div>
  );
}