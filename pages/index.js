import axios from 'axios';

const fetchData = async () =>
	await axios
		// .get('https://jsonplaceholder.typicode.com/users')
		.get('https://pikes.prismic.io/api/v1/documents/search?ref=X-L8ZhAAACQAY2TU#format=json')
		.then((res) => ({
			error: false,
			data: res.data,
		}))
		.catch(() => ({
			error: true,
			data: null,
		}));

const App = ({ data, error }) => {
	return (
		<section>
			<header>
				<h1>List of posts</h1>
			</header>
			{error && <div>There was an error.</div>}
			{!error && data && (
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Name</th>
							{'  '}
							{/* <th>Title</th> */}
						</tr>
					</thead>
					<tbody>
						{data.results.map((post, key) => (
							<tr key={key}>
								<td>{post.first_publication_date}</td>
								<td>{post.slugs[0]}</td>
								{/* <td>{user.name}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			)}
		</section>
	);
};

export const getStaticProps = async () => {
	const data = await fetchData();
	console.log('fffffffffffffffffffffffff');
	console.log(data.data.results[0]);
	// console.log(data.data.results.length);

	return {
		props: data,
	};
};

export default App;
