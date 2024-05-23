// import { baseURL } from "./config/config";
// import { useState } from "react";
import axios from "axios";

export const getData = async(url) => {
  const getInfo = await axios.get(url);
  return getInfo.data.data
} 
// const fetchApi = async() => {
//   const [user, setUser] = useState(null);
//   const id = userId[0]


//   const fetch = async () => {
//     try
//     {const mainData = await getData(`http://localhost:3000/user/${id}`);
//     const activities = await getData(
//       `http://localhost:3000/user/${id}/activity`
//     );
//     const performanceInfos = await getData(
//       `http://localhost:3000/user/${id}/performance`
//     );
//     const averageSession = await getData(
//       `http://localhost:3000/user/${id}/average-sessions`
//     );
//     setUser((prev) => {
//       return {
//         ...prev,
//         id: id,
//         mainData,
//         activities,
//         performanceInfos,
//         averageSession,
//       };
//     })}catch(err) {
//       setError((prev) => {
//         return {
//           ...prev,
//           status: err.response.status,
//           message: "L'identifiant incorrect🙄. Veuillez réessayer !"
//         }
//       })
    
//   }


// }}
