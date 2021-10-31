import * as axios from "axios";
// import { getCookie } from "./utils";

export default class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = process.env.REACT_APP_BASE_URL;
  }

  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");
    this.api_token = "b2e448e8d0683bf3a0ff2ad3ca179ca59ffbf89d"
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

  getMoviePopular = () => {
    return this.init().get('admin/movie/popular');
  }

  getUserList = (params) => {
    return this.init().get("/users", { params: params });
  };

  addNewUser = (data) => {
    return this.init().post("/users", data);
  };
}