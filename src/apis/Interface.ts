export interface DataInfoType {
  name: string;
  introduce: string;
  email: string;
  profile: File | null | string;
  con: boolean;
}

export interface PasswordType {
	password:string,
	oldpass: string,
}

export interface PostRequestType {
  title: string;
  email: string;
  profile: File | null | string;
  introduce: string;
  context: string;
  tags: string;
}

export interface TagType {
  value: string;
}