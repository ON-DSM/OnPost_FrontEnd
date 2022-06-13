import { atom } from 'recoil';
import * as I from '../apis/Interface';

export const ProfileState = atom<I.DataInfoType>({
  key: 'ProfileState',
  default: {
    name: "",
    introduce: "",
    email: "",
    profile: null,
    con: false,
  },
});

export const TokenClock = atom<boolean>({
  key:"TokenKey",
  default: false,
});

export const WritePost = atom<I.PostRequestType>({
  key:'UserPost',
  default:{
    title: '',
    email:'',
    profile: '',
    introduce: '',
    context: '',
    tags: '',
  }
})
