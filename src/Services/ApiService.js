import * as axios from "axios";
// import { getCookie } from "./utils";

export default class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = 'http://localhost:8000/api/v1';
  }

  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");
    this.api_token = "ddff57a2d4c53a9e666ae8e6eab6b0a6c84be13d"
    let headers = {
      Accept: "application/json",
    };

    if (this.api_token) {
      headers.Authorization = `Token ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getShowList = () => {
    return this.init().get("/admin/show/list");
  };

  getShowLatest = () => {
    return this.init().get('admin/show/latest');
  }

  getMovieLatest = () => {
    return this.init().get('admin/movie/latest');
  }

  getUserList = (params) => {
    return this.init().get("/users", { params: params });
  };

  addNewUser = (data) => {
    return this.init().post("/users", data);
  };
}