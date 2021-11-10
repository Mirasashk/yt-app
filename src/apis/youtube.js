import axios from "axios";

const KEY = "AIzaSyDU3l_FPXxVnkbr9drr3pAb7kbI-3XQSIA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
