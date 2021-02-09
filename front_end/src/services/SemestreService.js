import axios from 'axios';
import authHeader from './auth-header';

const SEMESTRE_API_BASE_URL = "http://localhost:8888/api/v2";
class SemestreService {

    getSemestres(){
        return   axios({
            "method": "GET",
            "url": SEMESTRE_API_BASE_URL+"/semestres",
            "headers": authHeader()
          });
    }

    createSemestre(semestre){
        return axios.post(SEMESTRE_API_BASE_URL, semestre);
    }

    getSemestreByName(name){
        return axios.get(SEMESTRE_API_BASE_URL + '/semestre/' + name);
    }

    updateSemestre(semestre){

        return   axios({
            "method": "PUT",
            "url": SEMESTRE_API_BASE_URL+"/semestre",
            "data":semestre,
            "headers": authHeader()
          });
        return axios.put(SEMESTRE_API_BASE_URL + '/semestre' , semestre);
    }

    deleteSemestre(semestreId){
        return axios.delete(SEMESTRE_API_BASE_URL + '/' + semestreId);
    }
}

export default new SemestreService()