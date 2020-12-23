import Head from 'next/head';
import styles from '../styles/Home.module.css';

export async function getStaticProps(context) {
	const res = await fetch(`https://pikes.prismic.io/api/v1/documents/search?ref=X-LgGhAAACQAYuc5#format=json`);
	const data = await res.json();
	console.log('lllllllllllllllllllllllllllllllllll');
	console.log(data);

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {}, // will be passed to the page component as props
	};
}
// export default function Home() {
// <>shahaid</>;
// }
