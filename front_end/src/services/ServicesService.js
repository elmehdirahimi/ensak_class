import axios from 'axios';
import authHeader from './auth-header';

const SERVICE_API_BASE_URL = "http://localhost:8888/api/services";
class ServiceService {

    getServices(){
        return   axios({
            "method": "GET",
            "url": SERVICE_API_BASE_URL+"/"
          });
    }

    // createService(semestre){
    //     return axios.post(SERVICE_API_BASE_URL, semestre);
    // }

    // getServiceByName(name){
    //     return axios.get(SERVICE_API_BASE_URL + '/semestre/' + name);
    // }

    // updateService(semestre){

    //     return   axios({
    //         "method": "GET",
    //         "url": SERVICE_API_BASE_URL+"/semestre",
    //         "data":semestre,
    //         "headers": authHeader()
    //       });
    //     return axios.put(SERVICE_API_BASE_URL + '/semestre' , semestre);
    // }

    // deleteService(semestreId){
    //     return axios.delete(SERVICE_API_BASE_URL + '/' + semestreId);
    // }
}

export default new ServiceService()