import React, { useState } from 'react';
import { DataInfoType } from '../../../apis/user/data';
import * as S from './styled';
import { getinfo } from '../../../apis/user/getinfo';

export default function InfoChange() {
  const [change, setchange] = useState<number>(0);
  const [Custom, setCustom] = useState<string>('');

  const [Text, handleChange] = useState<DataInfoType>({
    nickname: '김태완',
    intro: '나 자신을 믿고 나아라하 그러한 자에게는 보물이 주어지리다',
    email: 'kkkkteaaa2005@gmail.com',
    password: 'ktwtraspcx',
  });

  const ButtonOn = (id: string) => {
    handleChange({ ...Text, [id]: Custom });
    setchange(0);
    console.log(getinfo())
  };

  const ButtonNick = () => {
    setCustom(Text.nickname);
    setchange(1);
  };

  const ButtonIntro = () => {
    setCustom(Text.intro);
    setchange(2);
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
        <S.Profilebutton
          onClick={() => (change === 3 ? setchange(0) : setchange(3))}
        >
          {change === 3 ? '완료' : '인증'}
        </S.Profilebutton>
        <S.Profilebutton
          onClick={() =>
            change === 4 ? ButtonOn('password') : ButtonPassword()
          }
        >
          {change === 4 ? '완료' : '변경'}
        </S.Profilebutton>
      </S.ProfilebuttonBox>
    </>
  );
}
