import axios from 'axios';

export default class CommentService {

    host = process.env.REACT_APP_HOST;
    port = process.env.REACT_APP_PORT;
    prefix = 'comment';
    baseURL = `${host}:${port}/${prefix}`;

    all = async (bulletinId) => {
        try {
            const response = await axios.get(`${baseURL}/show/${bulletinId}`);
            const comments = response.status !== 200 ? [] : response.data.comments ;
            return comments;   
        } catch (error) {
            console.log(`error while getting all comment for bulletin with id ${bulletinId}, error -> ${error}`);
            return error;
        }
    } 

    create = async (bulletinId, content) => {
        try {
            const response = await axios.post(`${baseURL}/create`,{bulletinId, content});
            const comment = response.status !== 201 ? {} : response.data.comment ;
            return comment;   
        } catch (error) {
            console.log(`error while creating a new  comment for bulletin with id ${bulletinId}, error  -> ${error}`);
            return error;
        }
    }
}