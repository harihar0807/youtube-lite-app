import axios from 'axios';


const KEY="AIzaSyArwxCea7JQqHBpvYzyWuie9wyVD2P21rQ";

export default axios.create({
       baseURL:  'https://www.googleapis.com/youtube/v3',
       params: {
           part: 'snippet',
           type: 'video',
           maxResult: 5,
           key: KEY
       }



});