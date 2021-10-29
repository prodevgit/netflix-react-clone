import { API_URL, API_KEY } from "../Config/config";
import Api from '../Services/ApiService'

const urls = [
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=stranger`,
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=breaking`,
  `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=13`
];

export function fetchTvShowsGrid() {
  const api = new Api()
  // return Promise.all(
  //   urls.map(items => {
  //     return fetch(items).then(response => response.json());
  //   })
  // );
  return api.getShowLatest()
}
