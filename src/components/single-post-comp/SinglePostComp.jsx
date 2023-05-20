import "./single-post-comp.css";

const SinglePostComp = () => {
  return (
    <div className="single-post-comp">
      <div className="single-post-wrapper">
        <img
          src="https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="single-post-img"
        />

        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet.
          <div className="single-post-edit">
            <i className="single-post-ed far fa-edit"></i>
            <i className="single-post-del far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-auth">
            Author : <b> Gunjan </b>
          </span>
          <span className="single-post-date">1 hr ago</span>
        </div>
        <p className="single-post-desc" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          possimus neque molestiae consequatur odio omnis autem modi veritatis
          voluptatem pariatur, rem maiores aliquam mollitia cum dolores deleniti
          quasi, a magnam, totam velit dicta quod laudantium explicabo! Quas,
          illo, quia eum porro impedit rerum temporibus exercitationem unde
          harum sed facilis adipisci totam iure excepturi, explicabo vero
          pariatur reiciendis! Harum corrupti autem ipsum ea quo nostrum unde
          cum quidem necessitatibus nulla aliquid sint tempore, dolore quasi
          nisi molestiae sed ad itaque vitae aut! Iure ipsum fuga optio
          explicabo quasi asperiores, facilis, excepturi velit recusandae
          distinctio, nesciunt sed cum repudiandae cumque cupiditate? Accusamus
          illum minima laborum incidunt ea, suscipit excepturi quibusdam eius
          magnam repellat ipsam consequuntur hic, cupiditate possimus
          reiciendis, repudiandae fugiat ab dolor facere animi voluptatibus
          recusandae. Dolorem molestiae repellendus odit minus reiciendis saepe,
          ducimus assumenda veniam cumque molestias, quibusdam necessitatibus
          illum aliquam iusto laudantium eos cum voluptatem ipsum obcaecati
          maxime. Neque!cum dolores deleniti quasi, a magnam, totam velit dicta
          quod laudantium explicabo! Quas, illo, quia eum porro impedit rerum
          temporibus exercitationem unde harum sed facilis adipisci totam iure
          excepturi, explicabo vero pariatur reiciendis! Harum corrupti autem
          ipsum ea quo nostrum unde cum quidem necessitatibus nulla aliquid sint
          tempore, dolore quasi nisi molestiae sed ad itaque vitae aut! Iure
          ipsum fuga optio explicabo quasi asperiores, facilis, excepturi velit
          recusandae distinctio, nesciunt sed cum repudiandae cumque cupiditate?
          Accusamus illum minima laborum incidunt ea, suscipit excepturi
          quibusdam eius magnam repellat ipsam consequuntur hic, cupiditate
          possimus reiciendis, repudiandae fugiat ab dolor facere animi
          voluptatibus recusandae. Dolorem molestiae repellendus odit minus
          reiciendis saepe, ducimus assumenda veniam cumque molestias, quibusdam
          necessitatibus illum aliquam iusto laudantium eos cum voluptatem ipsum
          obcaecati maxime. Neque!
        </p>
      </div>
    </div>
  );
};

export default SinglePostComp;
