import Prismic from 'prismic-javascript';
import { constants } from '../../constants';

const getBlogPostsAPI = async (params) => {
	try {
		const API = await Prismic.api(constants.PRISMIC_API_URL);
		const response = await API.query(
			Prismic.Predicates.any('document.type', [
				'blog_1',
				'blog_2',
				'blog_3',
				'blog_4',
				'blog_5',
				'blog_6',
				'blog_7',
				'blog_8',
				'blog_9',
				'blog_10',
			])
			// ...params,
		);
		return response;
	} catch (error) {
		return error;
	}
};
const getAllTeamMembersAPI = async (params) => {
	try {
		const API = await Prismic.api(constants.PRISMIC_API_URL);
		const response = await API.query(
			Prismic.Predicates.at('document.type', 'team_members')
			// ...params,
		);
		return response.results;
	} catch (error) {
		return error;
	}
};
const getAllTeamPortfolioProjectsAPI = async (params) => {
	try {
		const API = await Prismic.api(constants.PRISMIC_API_URL);
		const response = await API.query(
			Prismic.Predicates.at('document.type', 'portfolio')
			// ...params,
		);
		return response.results;
	} catch (error) {
		return error;
	}
};
const getAllTestimonialsHomePageApi = async (params) => {
	try {
		const API = await Prismic.api(constants.PRISMIC_API_URL);
		const response = await API.query(
			Prismic.Predicates.at('document.type', 'testimonials_home_page')
			// ...params,
		);
		return response.results;
	} catch (error) {
		return error;
	}
};
const getBlogPostAPI = async (slug) => {
	try {
		const API = await Prismic.api(constants.PRISMIC_API_URL);
		const response = await API.query(Prismic.Predicates.at('document.type', `blog_${slug.id.slug}`));
		// ...params,
		return response.results[0];
	} catch (error) {
		console.error(error);
		return error;
	}
};
const getProductDetailsAPI = async (slug) => {
	try {
		const API = await Prismic.api(constants.PRISMIC_API_URL);
		const response = await API.query(Prismic.Predicates.at('document.id', `${slug.id}`));
		// ...params,
		return response.results[0];
	} catch (error) {
		console.error(error);
		return error;
	}
};
export {
	getBlogPostsAPI,
	getBlogPostAPI,
	getAllTeamMembersAPI,
	getAllTeamPortfolioProjectsAPI,
	getProductDetailsAPI,
	getAllTestimonialsHomePageApi,
};
