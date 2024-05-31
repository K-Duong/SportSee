import axios from "axios";

// clientHTTP

const clientHTTP = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUserInfos = async (id) => {
  return (await clientHTTP.get(`user/${id}`)).data.data;
};

export const getUserActivity = async (id) => {
  return (await clientHTTP.get(`user/${id}/activity`)).data.data;
};

export const getUserPerform = async (id) => {
  return (await clientHTTP.get(`user/${id}/performance`)).data.data;
};
export const getUserAverageSession = async (id) => {
  return (await clientHTTP.get(`user/${id}/average-sessions`)).data.data;
};
