import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  return (
    <div className="blog-list space-y-8 max-w-md mx-auto">
      <h2 className="font-bold text-3xl text-center">{title}</h2>
      <div className="blog-list-wrapper space-y-4">
        {blogs.map((blog) => (
          <div className="blog-card bg-white rounded-md shadow-md max-w-xl p-4" key={blog.id} >
            <Link to={`/blogs/${blog.id}`} >
              <h3 className="blog-title text-red-400 text-2xl font-bold mb-2">
                {blog.title}
              </h3>
              <h6 className="author text-xl text-gray-600">Written by {blog.author}</h6>
            </Link>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Bloglist;
