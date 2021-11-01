import axios from "axios";

export default axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/',
  // baseURL: 'https://api.thecatapi.com/v1/images/search?limit=5&page=11&order=Desc',
});
