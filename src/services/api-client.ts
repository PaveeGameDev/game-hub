import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "49a04c2135974b148bf238d505b35bb7",
  },
});
