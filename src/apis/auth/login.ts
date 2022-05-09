import instance from "../default";

export interface loginReqeustType {
  email: string;
  password: string;
}

export interface loginResponseType {
  tokenDto: {
    accessToken: string;
    refreshToken: string;
  };
  memberView: {
    id: number;
    name: string;
    introduce: null;
    image: null;
    email: string;
  };
}

export const login = async (Text: loginReqeustType) => {
  return await instance.post<loginResponseType>("/auth/login", Text);
};