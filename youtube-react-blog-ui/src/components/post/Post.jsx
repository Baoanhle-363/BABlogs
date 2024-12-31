import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, title, categories, date, description, id }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {categories.map((cat, index) => (
            <span className="postCat" key={index}>
              <Link className="link" to={`/posts?cat=${cat}`}>
                {cat}
              </Link>
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}