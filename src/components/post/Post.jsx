import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="post-img"
      />

      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet.</span>
        <span className="post-date">1 hr ago</span>
          </div>
          <p className="post-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ea ipsam harum error totam similique porro in consequuntur vero quae, tempore molestias neque placeat facilis deleniti minima doloribus ratione necessitatibus rerum! Ad mollitia voluptates ratione ipsa reprehenderit tenetur, quos reiciendis vero praesentium labore obcaecati, molestias ab ea saepe omnis facere!
          </p>
    </div>
  );
};

export default Post;
