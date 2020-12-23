import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<button
				type="button"
				aria-expanded="false"
				aria-label="Toggle full screen menu"
				data-trigger="menu"
				class="c-burger"
			>
				<span class="c-burger__text">
					<span class="u-no-js-none">Menu </span>
				</span>{' '}
				<span class="c-burger__icon"></span>
			</button>
		</div>
	);
}
