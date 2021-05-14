import axios from 'axios';
import { serverUrl } from '../variables';

const getMyHeaders = () => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Accept', 'application/json');
	return myHeaders;
};
const getMyAuthHeaders = token => {
	const myAuthHeaders = new Headers();
	myAuthHeaders.append('Content-Type', 'application/json');
	myAuthHeaders.append('Accept', 'application/json');
	myAuthHeaders.append('Authorization', `Bearer ${token}`);
	return myAuthHeaders;
};

export const create = async (userId, token, post) => {
	try {
		const response = await axios({
			url: `${serverUrl}/api/post/new/${userId}`,
			method: 'POST',
			headers: getMyAuthHeaders(token),
			data: post,
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

// With pagination
export const list = async page => {
	try {
		const response = await axios({
			url: `${serverUrl}/api/posts?page=${page}`,
			method: 'GET',
			headers: getMyHeaders(),
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

export const relatedPost = async tags => {
	try {
		const response = await axios({
			url: `${serverUrl}/api/post/tags`,
			method: 'POST',
			headers: getMyHeaders(),
			data: JSON.stringify({ tags }),
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

export const singlePost = async postId => {
	try {
		const response = await fetch({
			url: `${serverUrl}/api/post/${postId}`,
			method: 'GET',
			headers: getMyHeaders(),
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

export const listByUser = async (userId, token) => {
	try {
		const response = await axios({
			url: `${serverUrl}/api/posts/by/${userId}`,
			method: 'GET',
			headers: getMyAuthHeaders(token),
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

export const remove = async (postId, token) => {
	try {
		const response = await axios({
			url: `${serverUrl}/api/post/${postId}`,
			method: 'DELETE',
			headers: getMyAuthHeaders(token),
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

export const update = async (postId, token, post) => {
	try {
		const response = await axios({
			url: `${serverUrl}/api/post/${postId}`,
			method: 'PUT',
			headers: getMyAuthHeaders(token),
			data: post,
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

export const like = async (userId, postId) => {
	try {
		const response = await axios({
			url: `${serverUrl}/api/post/like`,
			method: 'PUT',
			headers: getMyHeaders(),
			body: JSON.stringify({ userId, postId }),
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

export const unlike = async (userId, postId) => {
	try {
		const response = await axios({
			url: `${serverUrl}/api/post/unlike`,
			method: 'PUT',
			headers: getMyHeaders(),
			body: JSON.stringify({ userId, postId }),
		});
		return response;
	} catch (err) {
		return console.log(err);
	}
};

export const countpost = async () => {
	try {
		const data = await axios.get(`${serverUrl}/api/post/count`);
		return data.data;
	} catch (err) {
		return console.log(err);
	}
};
