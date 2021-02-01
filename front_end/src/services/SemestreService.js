import axios from 'axios';

const SEMESTRE_API_BASE_URL = "http://localhost:8888/api/v2/semestres";
class SemestreService {

    getSemestres(){
        return   axios({
            "method": "GET",
            "url": SEMESTRE_API_BASE_URL,
          });
    }

    createSemestre(semestre){
        return axios.post(SEMESTRE_API_BASE_URL, semestre);
    }

    getSemestreById(semestreId){
        return axios.get(SEMESTRE_API_BASE_URL + '/' + semestreId);
    }

    updateSemestre(semestre, semestreId){
        return axios.put(SEMESTRE_API_BASE_URL + '/' + semestreId, semestre);
    }

    deleteSemestre(semestreId){
        return axios.delete(SEMESTRE_API_BASE_URL + '/' + semestreId);
    }
}

export default new SemestreService()