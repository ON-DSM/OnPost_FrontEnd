import { atom } from 'recoil';
import * as I from '../apis/Interface';

export const ProfileState = atom<I.DataInfoType>({
  key: 'ProfileState',
  default: {
    name: '',
    introduce: '',
    email: '',
    profile: null,
    con: false,
  },
});

export const TokenClock = atom<boolean>({
  key: 'TokenKey',
  default: false,
});

export const WritePost = atom<I.PostRequestType>({
  key: 'UserPost',
  default: {
    title: '',
    email: '',
    profile: '',
    introduce: '',
    content: '',
    tags: '',
  },
});

export const LastPost = atom<I.Post>({
  key: 'LastPost',
  default: {
    id: 0,
    content: '',
    title: '',
    introduce: '',
    writer: {
      profile: '',
      email: '',
      name: '',
      introduce: '',
    },
    doLike: false,
    like: 0,
    tags: '',
    profile: '',
    createAt: '',
    comments: [
      {
        id: 0,
        content: '',
        writer: {
          name: '',
          introduce: '',
          profile: '',
          email: '',
        },
        createAt: '',
        moreComment: 0,
      }
    ]
  },
});



export const RecentToken = atom<I.TokenType>({
  key: 'onChangeToken',
  default: {
    accessToken: '',
    refreshToken: '',
  },
});
