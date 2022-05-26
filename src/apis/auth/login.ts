import instance from '../default';

export interface loginReqeustType {
  email: string;
  password: string;
}

export interface loginResponseType {
  accessToken: string;
  refreshToken: string;
}

export const login = async (Text: loginReqeustType) => {
  return await instance.post<loginResponseType>('/auth/login', Text);
};
