import axios from 'axios';

const COURS_API_BASE_URL = "http://localhost:8888/api/v3/module";
class CourService {

    getCours(){
        return   axios({
            "method": "GET",
            "url": COURS_API_BASE_URL,
          });
    }

    createCour(cour){
        return axios.post(COURS_API_BASE_URL, cour);
    }

    getCourById(courId){
        return   axios({
            "method": "GET",
            "url": COURS_API_BASE_URL + '/' + courId,
          });
    }

    updateCour(cour, courId){
        return axios.put(COURS_API_BASE_URL + '/' + courId, cour);
    }

    deleteCour(courId){
        return axios.delete(COURS_API_BASE_URL + '/' + courId);
    }
}

export default new CourService()