import axios from 'axios';
import { serverUrl } from '../variables';

export default async (name, email, query) => {
	try {
		const response = await axios({
			method: 'post',
			url: `${serverUrl}/api/submit_query`,
			data: { name, email, query },
		});
		return response;
	} catch (err) {
		return err;
	}
};
