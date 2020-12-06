import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-a8a38/us-central1/api',
  //http://localhost:5001/clone-a8a38/us-central1/api
  //https://us-central1-clone-a8a38.cloudfunctions.net/api
});

export default instance;
