import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e2d5d83e55e5ba2d72dee21c0e251450e3c7a5402fe6b793af07cd25a308e76a",
  },
});
