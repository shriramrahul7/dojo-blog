import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<div>
			<h1>Sorry...</h1>
			<p>The page was not found ( ERROR 404 )</p>
			<Link to="/">
				Go Back to Homepage
			</Link>
		</div>
	);
}

export default NotFound;