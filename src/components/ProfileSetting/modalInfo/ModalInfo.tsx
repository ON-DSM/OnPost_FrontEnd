import React, { ChangeEvent, useState, useRef } from 'react';
import InfoChange from './ModalChange';
import * as S from './styled';



export default function ModalInfo() { ///유저정보 추가
  const [imgBase64, setImgBase64] = useState("/images/Modal/Standard.svg");
  const [imgFile, setImgFile] = useState<null | File>(null);

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) setImgBase64(base64.toString());
    };
    if (event.target.files !== null) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
    }
  };

 
  return (
    <>
      <S.ProfileImgBox>
        <S.ProfileImg src={imgBase64} />
        <S.ImgUplordBox>
          <input
            id="image-input"
            accept=".gif, .jpg, .png, .svg"
            type="file"
            style={{ display: 'none' }}
            onChange={handleChangeFile}
          />
          <S.ImgRemove onClick={() =>setImgBase64("/images/Modal/Standard.svg")}>이미지 삭제</S.ImgRemove>
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
            이메일
            <S.ProfileInfoLine />
          </S.UserInfo>
          <S.UserInfo>
            비밀번호
            <S.ProfileInfoLine />
          </S.UserInfo>
        </S.ProfileInfoBox>
        <InfoChange />
        <S.ProfileInfoBox></S.ProfileInfoBox>
      </S.UserInfoBox>
    </>
  );
}
