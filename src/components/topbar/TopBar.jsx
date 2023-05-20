import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icons fa-brands fa-linkedin"></i>
        <i className="top-icons fa-brands fa-github"></i>
        <i className="top-icons fa-brands fa-instagram"></i>
        <i className="top-icons fa-brands fa-twitter"></i>
      </div>
      <div className="top-center">
        <div className="top-list">
          <li className="top-list-itoms">Home</li>
          <li className="top-list-itoms">About</li>
          <li className="top-list-itoms">Contact</li>
          <li className="top-list-itoms">Write</li>
          <li className="top-list-itoms">Logout</li>
        </div>
      </div>
      <div className="top-right">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
