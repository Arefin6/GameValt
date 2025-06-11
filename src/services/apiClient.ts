import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "553e7d3c704c4eb7bd071ce25640d0ef",
  },
});
