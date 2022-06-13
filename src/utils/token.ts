import axios from "axios";

const EXPIRES_TIME = 1000 * 60 * 60 * 24;

axios.defaults.baseURL = "http://13.209.141.103:8080";


export function setToken(accessToken: string, refreshToken: string) {
  sessionStorage.setItem("accessToken", accessToken);
  sessionStorage.setItem("refreshToken", refreshToken);
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export const clearStorege = () => sessionStorage.clear();

export const getToken = () => {
  const accessToken =
    typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : null;
  const refreshToken =
    typeof window !== "undefined" ? sessionStorage.getItem("refreshToken") : null;
  return { accessToken, refreshToken };
};



 
//Request interceptor for API calls

