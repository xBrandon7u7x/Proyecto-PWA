import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../../pages/category/Category";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <span className="title-bar">Categorias</span>
      <ul className="tag-list">
      {Array.isArray(cats) && cats.map((c, i) => (
  <Link to={`/posts/${c.name}`} className="link single-tag" key={i}>
    {c.name}
  </Link>
))}
      </ul>
      <span className="title-bar">Siguenos</span>
      <div className="icon-box">
        <i className="icon fab fa-facebook-square"></i>
        <i className="icon fab fa-twitter-square"></i>
        <i className="icon fab fa-pinterest-square"></i>
        <i className="icon fab fa-instagram-square"></i>
      </div>
    </div>
  );
}

