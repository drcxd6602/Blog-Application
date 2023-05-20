import Sidebar from "../../components/sidebar/Sidebar"
import SinglePostComp from "../../components/single-post-comp/SinglePostComp"
import "./single-post.css"

const SinglePost = () => {
  return (
    <div className="single-post">
          {/* post */}
          <SinglePostComp/>
          <Sidebar/>
    </div>
  )
}

export default SinglePost
