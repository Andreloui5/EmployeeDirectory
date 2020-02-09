import axios from "axios";

const API = {
  getPeople: () => {
    return axios.get("https://randomuser.me/api/?results=400&nat=us")
  }
}

export default API;