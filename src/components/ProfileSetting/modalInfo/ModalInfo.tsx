import { useEffect, useState } from 'react';
import InfoChange from './modalChange/ModalChange';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { ProfileState } from '../../../recoil/proflie';
import ModalImg from './modalChange/ModalImg';
import DataInfo from '../../../apis/user/post/data';
import { DataInfoType } from '../../../apis/Interface';

export default function ModalInfo() {
  ///유저정보 추가
  const [data, setdata] = useRecoilState(ProfileState);
  const [value, setvalue] = useState<DataInfoType>(data);

  useEffect(() => {
    if (Object.entries(data).toString() !== Object.entries(value).toString()) {
      DataInfo(value).then((Data) => setdata(Data!));
    }
  });

  return (
    <>
      <div>
        <S.ProfileImgBox>
          <ModalImg setvalue={setvalue} value={value} />
        </S.ProfileImgBox>
        <S.UserInfoBox>
          <S.ProfileInfoBox>
            <S.UserInfo>
              이메일
              <S.ProfileInfoLine />
            </S.UserInfo>
            <S.UserInfo>
              사용자 이름
              <S.ProfileInfoLine />
            </S.UserInfo>
            <S.UserInfo>
              한줄 소개
              <S.ProfileInfoLine />
            </S.UserInfo>
            <S.Block />
            <S.Block />
          </S.ProfileInfoBox>

          <InfoChange setvalue={setvalue} value={value} />
          
        </S.UserInfoBox>
      </div>

      <S.ExitFormdiv >
        <S.ExitButton>회원탈퇴</S.ExitButton>
        <S.ExitName>탈퇴 후 모든 개인정보는 삭제됩니다.</S.ExitName>
      </S.ExitFormdiv>
    </>
  );
}
