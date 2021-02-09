import axios from "axios";
import authHeader from "./auth-header";

const ETUDIANT_API_BASE_URL = "http://localhost:8888/api/etudiants";
class EtudiantService {
  getEtudiants() {
    // axios({
    //   method: "GET",
    //   url: "http://localhost:8888/api/etudiants/",
    //   headers: authHeader(),
    // }).then((response) => {
    //   console.log(response.data.etudiants);
    // });
    return axios({
      method: "GET",
      url: "http://localhost:8888/api/etudiants/",
      headers: authHeader(),
    });
  }

  createEtudiant(etudiant) {
    return axios.post(ETUDIANT_API_BASE_URL, etudiant);
  }

  getEtudiantByEmail(email) {

    return axios({
      method: "GET",
      url: ETUDIANT_API_BASE_URL + "/etudiant/" +  email,
      headers: authHeader(),
    })
    return axios.get(ETUDIANT_API_BASE_URL + "/etudiant/" + email);
  }

  updateEtudiant(etudiant) {

    return axios.put(ETUDIANT_API_BASE_URL + "/etudiant" , etudiant).then((response) => {
          console.log(response.data.etudiant.semestre);
        });
  }

  deleteEtudiant(email) {
    return axios.delete(ETUDIANT_API_BASE_URL + "/" + email);
  }
}

export default new EtudiantService();
