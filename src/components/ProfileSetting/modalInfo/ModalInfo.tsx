import styled from '@emotion/styled';
import { read } from 'fs';
import React, { ChangeEvent, useState, useRef } from 'react';
import { DataInfoType } from '../../../apis/user/data';
import { clickOptions } from '@testing-library/user-event/dist/click';
import * as S from './styled';

interface PropsType {
  setclick: (isclick: number) => void;
}

export default function ModalInfo({ setclick }: PropsType) { ///유저정보 추가
  const [remain, setmain] = useState<boolean>(false);
  const [is, check] = useState<boolean>(false);
  const [change, setchange] = useState<number>(0);
  const [imgBase64, setImgBase64] = useState('');
  const [Custom, setCustom] = useState<string>('');
  const [imgFile, setImgFile] = useState({
    image: '',
    url: '',
  });
  const [Text, handleChange] = useState<DataInfoType>({
    nickname: '김태완',
    intro: '나 자신을 믿고 나아라하 그러한 자에게는 보물이 주어지리다',
    email: 'kkkkteaaa2005@gmail.com',
    password: 'ktwtraspcx',
  });

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) setImgBase64(base64.toString());
    };
    if (event.target.files !== null) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile({ image: '', url: `${reader.result}` });
    }
  };

  const ButtonOn = (id: string) => {
    handleChange({ ...Text, [id]: Custom });
    setchange(0);
  };

  const ButtonNick = () => {
    setCustom(Text.nickname);
    setchange(1);
  };

  const ButtonIntro = () => {
    setCustom(Text.intro);
    setchange(2);
  };

  const ButtonEmail = () => {
    setCustom(Text.email);
    setchange(3);
  };

  const ButtonPassword = () => {
    setCustom(Text.password);
    setchange(4);
  };

  const InfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustom(e.target.value);
  };

  return (
    <>
      <S.ProfileImgBox>
        <S.ProfileImg src={imgBase64} />
        <S.ImgUplordBox>
          <input
            id="image-input"
            accept=".gif, .jpg, .png"
            type="file"
            style={{ display: 'none' }}
            onChange={handleChangeFile}
          />
          <S.ImgRemove>이미지 삭제</S.ImgRemove>
          <S.ImgUplord htmlFor="image-input">이미지 업로드</S.ImgUplord>
        </S.ImgUplordBox>
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
            프로필 공개 여부
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
        </S.ProfileInfoBox>
        <S.ProfileInfo>
          {change === 1 ? (
            <S.UserInfoInput
              name="nickname"
              value={change === 1 ? Custom : Text.nickname}
              onChange={InfoChange}
            />
          ) : (
            <span>{Text.nickname}</span>
          )}
          {change === 2 ? (
            <S.UserInfoInput
              name="intro"
              value={change === 2 ? Custom : Text.intro}
              onChange={InfoChange}
            />
          ) : (
            <span>{Text.intro}</span>
          )}
          {false ? (
            <S.PublicProfile
              onClick={() => {
                check(!is);
                setmain(true);
              }}
              style={
                remain ? { animationName: is ? 'backcolor' : 'white' } : {}
              }
            >
              <S.PublicProfileBall
                style={remain ? { animationName: is ? 'right' : 'left' } : {}}
              />
            </S.PublicProfile>
          ) : (
            <S.PublicProfilefalse
              onClick={() => {
                check(!is);
                setmain(true);
              }}
              style={
                remain ? { animationName: is ? 'white' : 'backcolor' } : {}
              }
            >
              <S.PublicProfileBallFalse
                style={remain ? { animationName: is ? 'left' : 'right' } : {}}
              />
            </S.PublicProfilefalse>
          )}

          {change === 3 ? (
            <S.UserInfoInput
              name="email"
              value={change === 3 ? Custom : Text.email}
              onChange={InfoChange}
            />
          ) : (
            <span>{Text.email}</span>
          )}
          {change === 4 ? (
            <S.UserInfoInput
              name="password"
              value={change === 4 ? Custom : Text.password}
              onChange={InfoChange}
            />
          ) : (
            <span>{Text.password}</span>
          )}
        </S.ProfileInfo>

        <S.ProfilebuttonBox>
          <S.Profilebutton
            onClick={() => (change === 1 ? ButtonOn('nickname') : ButtonNick())}
          >
            {change === 1 ? '완료' : '변경'}
          </S.Profilebutton>
          <S.Profilebutton
            onClick={() => (change === 2 ? ButtonOn('intro') : ButtonIntro())}
          >
            {change === 2 ? '완료' : '변경'}
          </S.Profilebutton>
          <S.Buttonin />
          <S.Profilebutton
            onClick={() => (change === 3 ? ButtonOn('email') : ButtonEmail())}
          >
            {change === 3 ? '완료' : '변경'}
          </S.Profilebutton>
          <S.Profilebutton
            onClick={() =>
              change === 4 ? ButtonOn('password') : ButtonPassword()
            }
          >
            {change === 4 ? '완료' : '변경'}
          </S.Profilebutton>
        </S.ProfilebuttonBox>

        <S.ProfileInfoBox></S.ProfileInfoBox>
      </S.UserInfoBox>
    </>
  );
}
