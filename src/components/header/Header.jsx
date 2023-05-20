import "./header.css";
import bg from "../../assets/blog-app-home-bg.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <div className="header-title-sm">G & D</div>
        <div className="header-title-lg">Blogs</div>
      </div>
      <img
        className="header-img"
        src="https://images.pexels.com/photos/1222561/pexels-photo-1222561.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
    </div>
  );
};

export default Header;
