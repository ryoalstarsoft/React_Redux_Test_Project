import axios from 'axios';

export default {
    fetchData: () => {
        return axios.get('data/data.json');
    }
}