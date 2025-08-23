import axios from "axios";

let url = "https://dummyjson.com/"
const Api = axios.create({
  baseURL: url
})

export default Api
