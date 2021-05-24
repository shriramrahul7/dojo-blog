import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
	const history = useHistory();

	const handleDelete = () => {
		fetch('http://localhost:8000/blogs/' + id, {
			method: "DELETE",
		}).then(() => {
			history.push('/');
		})
	}


	return (
		<div>
			{isLoading && <div> Loading the Blog...</div>}
			{error && <div>{error}</div>}
			{blog && (<div>
				<article>
					<h1>
						{blog.title}
					</h1>
					<h3>
						Written By : {blog.author}
					</h3>
					<br />
					<div>
						{blog.body}
					</div>
				</article>
				<button onClick={handleDelete}>
					Delete Blog
				</button>
			</div>)}
		</div>
	);
}

export default BlogDetails;