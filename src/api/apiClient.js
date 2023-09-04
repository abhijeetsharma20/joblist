import axios from 'axios';

const apiClient = axios.create({

	// Configuration
	baseURL: 'http://localhost:8080'
	
});

export const getJobs = () =>{
    return apiClient.get('/posts');
}

export const getSearchJobs = (text) =>{
    return apiClient.get(`/posts/${text}`);
}

export const createJobs = (job) =>{
    return apiClient.post('/post', job);
}

