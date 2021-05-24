import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {

  let { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home pt-12">
      { error && <div className=" text-center ">{error}</div>}
      { isLoading && <div className="text-center">Loading...</div>}
      { blogs && <Bloglist blogs={blogs} title="All the Latest!" />}
    </div>
  );
};

export default Home;
