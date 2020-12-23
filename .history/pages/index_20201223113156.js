import axios from 'axios';

const fetchData = async () =>
	await axios
		// .get('https://jsonplaceholder.typicode.com/users')
		.get('https://pikes.prismic.io/api/v1/documents/search?ref=X-LgGhAAACQAYuc5#format=json')
		.then((res) => ({
			error: false,
			data: res.data,
		}))
		.catch(() => ({
			error: true,
			users: null,
		}));

const App = ({ users, error }) => {
	return (
		<section>
			<header>
				<h1>List of users</h1>
			</header>
			{error && <div>There was an error.</div>}
			{!error && users && (
				<table>
					<thead>
						<tr>
							<th>Username</th>
							<th>Email</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, key) => (
							<tr key={key}>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.name}</td>
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
	console.log('llllllllllllllllllllllllll');
	console.log(data.data.results);

	return {
		props: data,
	};
};

export default App;
