export interface DataInfoType {
  name: string;
  introduce: string;
  email: string;
  profile: File | null | string;
  con: boolean;
}

export interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export interface PasswordType {
  newPassword: string;
  originPassword: string;
}

export interface PostRequestType {
  title: string;
  email: string;
  profile: File | null | string;
  introduce: string;
  content: string;
  tags: string;
}

export interface TagType {
  value: string;
}

export interface PostList{
  id: number;
  title: string;
  introduce: string;
  writer: {
    profile: string;
    email: string;
    name: string;
    introduce: string;
  };
  like: number;
  tags: string;
  profileImage: string;
  createAt: string;
}

export interface Post {
  id: number;
  content: string;
  title: string;
  introduce: string;
  writer: {
    profile: string;
    email: string;
    name: string;
    introduce: string;
  };
  doLike: boolean,
  like: number;
  tags: string;
  profile: string;
  createAt: string;
  comments: [
    {
      id: number;
      content: string;
      writer: {
        name: string;
        introduce: string;
        profile: string;
        email: string;
      },
      createAt: string;
      moreComment: number;
    }
  ]
}

export interface Page{
  like: number,
  new: number,
}

export interface MainPostType {
  NEW: PostList[];
  LIKE: PostList[];
}

export interface CommentType{
    id: number;
  content: string;
  writer: {
    profile: string;
    email: string;
    name: string;
    introduce: string;
  }
  createAt: string;
  moreComment: number;
}

export interface SubCommentType {
  comments: CommentType
}


