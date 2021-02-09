import axios from "axios";
import authHeader from "./auth-header";

const FILES_API_BASE_URL = "http://localhost:8888/api/files";
class FilesService {

  uploadFile(file) {
      const data = new FormData();
      data.append("file", file);
      return  axios({
        method: 'post',
        url: FILES_API_BASE_URL+"/upload",
        data: data,
        header: {
            "Content-Type": "multipart/form-data"
          },
      })
  }

  getFile(filename)
  {

    return axios({
      method: "GET",
      url: FILES_API_BASE_URL + "/file/" + filename,
      headers: authHeader(),
    });

  }
}

export default new FilesService();
