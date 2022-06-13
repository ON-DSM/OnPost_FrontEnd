import { useEffect, useState } from 'react';
import InfoChange from './modalChange/ModalChange';
import * as S from './styled';
import {useRecoilState} from 'recoil';
import { ProfileState} from '../../../recoil/proflie';
import ModalImg from './modalChange/ModalImg';
import DataInfo from '../../../apis/user/post/data'
import { DataInfoType } from '../../../apis/Interface';



export default function ModalInfo() { ///유저정보 추가
  const [data,setdata] = useRecoilState(ProfileState)
  const [value, setvalue] = useState<DataInfoType>(data);

  useEffect(() =>{
    if((Object.entries(data).toString() !== Object.entries(value).toString())){
      DataInfo(value).then(Data => setdata(Data!));
    }
  })

  return (
    <>
      <S.ProfileImgBox >
        <ModalImg setvalue={setvalue} value={value}/>
      </S.ProfileImgBox>
      <S.SizeName>사이즈: 200 x 200픽셀</S.SizeName>
      <S.UserInfoBox>
        <S.ProfileInfoBox>
          <S.UserInfo>
            사용자 이름
            <S.ProfileInfoLine />
          </S.UserInfo>
          <S.UserInfo>
            한줄 소개
            <S.ProfileInfoLine />
          </S.UserInfo>
          <S.UserInfo>
            이메일
            <S.ProfileInfoLine />
          </S.UserInfo>
          <S.UserInfo>
            비밀번호
            <S.ProfileInfoLine />
          </S.UserInfo>
          <S.Block />
        </S.ProfileInfoBox>
        <InfoChange setvalue={setvalue} value={value}/>
        <S.ProfileInfoBox></S.ProfileInfoBox>
      </S.UserInfoBox>
    </>
  );
}
