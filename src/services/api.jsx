import axios from "axios";

export const getData = async(url) => {
  const getInfo = await axios.get(url);
  return getInfo.data.data
} 
