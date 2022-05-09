import instance from "../default";

export interface signupResponseType {
  id: number;
  name: string;
  introduce: null;
  image: null;
  email: string;
}

export interface signupRequestType {
  email: string;
  username: string;
  password: string;
}

export const signup = async (Text: signupRequestType) => {
  return await instance.post<signupResponseType>("/auth/signup", Text);
};
