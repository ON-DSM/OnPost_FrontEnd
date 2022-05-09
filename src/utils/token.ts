import axios from "axios";

const EXPIRES_TIME = 1000 * 60 * 60 * 24;

export function setToken(accessToken: string, refreshToken: string) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

export const clearStorege = () => localStorage.clear();

export const getToken = () => {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  const refreshToken =
    typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null;
  return { accessToken, refreshToken };
};
