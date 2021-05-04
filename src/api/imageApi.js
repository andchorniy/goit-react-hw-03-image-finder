import axios from "axios";

const API_KEY = "20675332-a9702851f51ed62280a08ad8f";
axios.defaults.baseURL = "https://pixabay.com/api";

export default function getImages(query, page) {
  return axios
    .get(
      `/?q=${query}&page=${page}&image_type=photo&key=${API_KEY}&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data);
}
