import axios from "axios";

export const getData = async(url) => {
  const res = await axios.get(url);
  console.log(res);
  return res.data.data
} 
