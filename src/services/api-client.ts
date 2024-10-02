import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4dd155ca36be4b969da0b6cccbbfd844",
  },
});
