// import Prismic from 'prismic-javascript';
// import { constants } from '../../constants';

// const getBlogPostsAPI = async () => {
// 	try {
// 		const API = await Prismic.api(`${constants.base_url}`);
// 		const response = await API.query(Prismic.Predicates.at('document.type', 'team_members'));
// 		console.log('ressssssssssssssssssssssssss', response, 'ressssssssssssssssssssssssss');
// 		return response;
// 	} catch (error) {
// 		return error;
// 	}
// };

// const getBlogPostAPI = async (slug) => {
// 	try {
// 		const API = await Prismic.api(PRISMIC_API_URL);
// 		const response = await API.query(Prismic.Predicates.at('my.blog_post.uid', slug));
// 		return response.results[0];
// 	} catch (error) {
// 		console.error(error);
// 		return error;
// 	}
// };

// export { getBlogPostsAPI, getBlogPostAPI };
