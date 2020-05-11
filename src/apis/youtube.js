import axios from "axios";
const API_KEY = "AIzaSyAa1ENHalRyxelAxEgTJfRItqHLq11mIgs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: API_KEY,
  },
});
