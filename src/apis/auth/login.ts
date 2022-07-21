import instance from '../default';

export interface loginReqeustType {
  email: string;
  password: string;
}

export interface loginResponseType {
  accessToken: string;
  refreshToken: string;
}

export const login = (Text: loginReqeustType) => {
  return instance.post<loginResponseType>('/auth/login', Text);
};

export const ECheck = (gone:string) => {
  return instance.post('/mail/certified', null,{params: {email: gone}});
};
