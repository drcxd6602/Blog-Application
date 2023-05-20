import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione
          laudantium omnis quos non ducimus expedita neque ipsam commodi iste.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES </span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Cinema</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Tech</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social-list">
          <i className="sidebar-icon fa-brands fa-linkedin"></i>
          <i className="sidebar-icon fa-brands fa-github"></i>
          <i className="sidebar-icon fa-brands fa-instagram"></i>
          <i className="sidebar-icon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
