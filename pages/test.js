import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
// import { getBlogPostAPI } from '../api';
import linkResolver from '../pages/helper';
import DefaultLayout from '../pages/layouts';
import { constants } from '../constants';
import axios from 'axios';

export default class BlogPost extends Component {
	static async getInitialProps(context) {
		// const { slug } = context.query;
		// const response = await getBlogPostAPI(slug);
		const fetchData = async () =>
			await axios
				.get(`${constants.base_url}`)
				.then((res) => ({
					error: false,
					data: res.data,
				}))
				.catch(() => ({
					error: true,
					data: null,
				}));
		const data = await fetchData();
		const posts = [];
		if (data) {
			for (let i = 0; i < data.data.results.length; i++) {
				// console.log(posts.data.results[i]);
				if (data.data.results[i].type === 'blog') {
					posts.push(data.data.results[i]);
				}
			}
			console.log(posts[0], 'jjjjjjjjjjjjjj');
		}
		return {
			post: posts[0],
		};
	}

	render() {
		const post = this.props.post.data;
		return (
			<DefaultLayout>
				<article>
					ffffffffffffffff
					{/* <h1>{post.title.length ? post.title[0].text : ''}</h1> */}
					{RichText.render(post.body, linkResolver)}
				</article>
			</DefaultLayout>
		);
	}
}
