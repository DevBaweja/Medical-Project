import axios from 'axios';
import { serverUrl } from '../variables';

export const createPathy = async (title, effective, description) => {
	try {
		const response = await axios({
			method: 'POST',
			url: `${serverUrl}/api/pathy`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: { title, effective, description },
		});
		return response;
	} catch (err) {
		return err;
	}
};

export const getPathy = async () => {
	try {
		const response = await axios({
			method: 'GET',
			url: `${serverUrl}/api/pathy`,
		});
		return response;
	} catch (err) {
		return err;
	}
};
