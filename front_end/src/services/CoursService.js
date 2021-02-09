import axios from "axios";
import authHeader from "./auth-header";

const COURS_API_BASE_URL = "http://localhost:8888/api/v3/module";
class CoursService {
  getCours() {
    return axios({
      method: "GET",
      url: COURS_API_BASE_URL,
      headers: authHeader(),
    });
  }

  createCours(modules) {
    return axios.put(COURS_API_BASE_URL, modules);
  }

  getCoursByTitre(titreModule) {
    return axios({
      method: "GET",
      url: COURS_API_BASE_URL + "/" + titreModule,
    });
  }

  updateCours(cours, coursId) {
    return axios.put(COURS_API_BASE_URL + "/" + coursId, cours);
  }

  deleteCours(coursId) {
    return axios.delete(COURS_API_BASE_URL + "/" + coursId);
  }
}

export default new CoursService();
