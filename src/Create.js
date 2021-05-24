import { useState } from 'react'
import { useHistory } from 'react-router';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('yoshi');
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		setIsLoading(true);

		fetch('http://localhost:8000/blogs', {
			method: "POST",
			headers: {
				"Content-Type": 'application/json'
			},
			body: JSON.stringify(blog)
		}).then(
			() => {
				console.log('blog added.')
				setIsLoading(false);
				history.push('/');
			}
		);
	}

	return (
		<div className="create-page">
			<h1>Add a new Blog : </h1>
			<form onSubmit={handleSubmit}>
				<label>Blog Title : </label>
				<input
					type="text"
					required
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<br />
				<label>Blog Body : </label>
				<textarea
					required
					value={body}
					onChange={(e) => { setBody(e.target.value) }}
				>
				</textarea>
				<br />
				<label>Blog Author : </label>
				<select value={author} onChange={e => setAuthor(e.target.value)} >
					<option value="mario">Mario</option>
					<option value="yoshi">Yoshi</option>
				</select>
				<br />
				{!isLoading && <button type="submit">Add Blog</button>}
				{isLoading && <button disabled type="submit">Adding Blog...</button>}
			</form>
		</div>
	);
}

export default Create;