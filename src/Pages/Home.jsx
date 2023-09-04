import { useEffect, useState } from "react";
// import Header from '../Components/Header'
// import Search from "../Components/Search";
// import IntroPost from "../Components/IntroPost";
// import Blogs from "../Components/Blogs";
// import Footer from '../Components/Footer'
import GlobalApi from "../Services/GlobalApi";
import { Link } from "react-router-dom";

function Home() {
  const [post, setPost] = useState([]);
  // const [orgPost, setOrgPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);
  const getPost = () => {
    GlobalApi.getPost.then((resp) => {
      console.log(resp.data.categories, "food Data");
      const food = resp.data.categories;
      console.log(food, "food");

      setPost(food);
      
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {post.map((c) => {
        return (

            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={c.idCategory}>
              <img src={c.strCategoryThumb} alt="" srcSet="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{c.strCategory}</div>
                {/* <p className="text-gray-700 text-base">{c.strCategoryDescription}
                </p> */}
              </div>
              <Link to={`/details/${c.strCategory}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >Button
              </button>
              </Link>
             
            </div>
          
        );
      })}
    </div>
  );
}

export default Home;
