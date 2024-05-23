import { baseURL } from "./config/config";
import axios from "axios";

// export const getData = async (url, method) => {
//   const request = await axios
//     .request({
//       baseURL,
//       url: url,
//       method: method,
//     })
  
//   return request.data.data
// };

export const getData = async(url) => {
  const getInfo = await axios.get(url);
  return getInfo.data.data
} 
