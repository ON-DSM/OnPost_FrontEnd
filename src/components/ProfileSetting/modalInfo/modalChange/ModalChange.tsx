import React, { useEffect, useState } from 'react';
import { PasswordType } from '../../../../apis/user/password';
import * as S from '../styled';
import { getinfo } from '../../../../apis/user/getinfo';
import ModalPassword from '../ModalPassword';
import { DataInfoType } from '../../../../apis/user/data';

export default function InfoChange() {
  const [change, setchange] = useState<number>(0);
  const [Custom, setCustom] = useState<string>('');
  const [Pro, setPro] = useState<PasswordType>({
    email: '',
    originPassword: '',
    newPassword: '',
  });
  const [Text, handleChange] = useState<DataInfoType>({
    nickname: '김태완',
    intro: '나 자신을 믿고 나아라하 그러한 자에게는 보물이 주어지리다',
    email: 'kkkkteaaa2005@gmail.com',
    image: '',
  });


  useEffect(() => {
    async () => {
      await getinfo().then((data) => {
        handleChange(data);
        console.log('1');
      });
    };
  }, [Text]);

  const ButtonOn = async(id: string) => {
    handleChange({ ...Text, [id]: Custom });
    setchange(0);
    await getinfo().then((data) =>{
      handleChange(data);
      console.log(Text)
    })
  };

  const ButtonNick = () => {
    setCustom(Text.nickname);
    setchange(1);
  };

  const ButtonIntro = () => {
    setCustom(Text.intro);
    setchange(2);
  };

  const InfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustom(e.target.value);
  };

  return (
    <>
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
        {change === 3 ? (
          <>
            <span>{Text.email}</span>
          </>
        ) : (
          <span>{Text.email}</span>
        )}
        {change === 4 ? (
          <ModalPassword />
        ) : (
          <>
            <S.Block />
            <S.Block />
          </>
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
        <S.Profilebutton
          onClick={() => (change === 3 ? setchange(0) : setchange(3))}
        >
          인증
        </S.Profilebutton>
        <S.Profilebutton
          onClick={() => (change === 4 ? ButtonOn('password') : setchange(4))}
        >
          {!false && change === 4 ? '완료' : '변경'}
        </S.Profilebutton>
        <S.Block />
      </S.ProfilebuttonBox>
    </>
  );
}
