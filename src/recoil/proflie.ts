import { atom, selector } from 'recoil';
import { getinfo } from '../apis/user/get/getinfo';
import * as I from './Interface';

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
