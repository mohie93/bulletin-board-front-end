import axios from 'axios';

export default class BulletinService {

    host = process.env.REACT_APP_HOST;
    port = process.env.REACT_APP_PORT;
    prefix = 'bulletin';
    baseURL = `${host}:${port}/${prefix}`;
    
    all = async () => {
        try {
            const response = await axios.get(baseURL);
            const bulletins = response.status !== 200 ? [] : response.data.bulletins ;
            return bulletins;   
        } catch (error) {
            console.log(`error while getting all bulletins -> ${error}`);
            return error;
        }
    } 

    create = async (title, content, images) => {
        try {
            const response = await axios.post(`${baseURL}/create`,{title, content, images});
            const bulletin = response.status !== 201 ? {} : response.data.bulletin ;
            return bulletin;   
        } catch (error) {
            console.log(`error while creating a new bulletin -> ${error}`);
            return error;
        }
    }
}