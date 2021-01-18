import Prismic from 'prismic-javascript';
import { constants } from '../../constants';

const getBlogPostsAPI = async (params) => {
	try {
		const API = await Prismic.api(constants.PRISMIC_API_URL);
		const response = await API.query(
			Prismic.Predicates.at('document.type', 'portfolio')
			// ...params,
		);
		return response;
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

export { getBlogPostsAPI, getBlogPostAPI };
