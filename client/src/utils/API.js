import axios from "axios";
export default {
  getProjects: function (a) {
    return axios.get("/api/projects/" + a);
  },
  getProjects: function (a) {
    return axios.get("/api/projects", a);
  },
 
};