import React, { ChangeEvent, useState } from 'react';
import { PasswordType } from '../../../../apis/Interface';
import * as S from '../styled';
import ModalPassword from './ModalPassword';
import { DataInfoType } from '../../../../apis/Interface';
import { SetPassword } from '../../../../apis/user/post/password';
import { customToast } from '../../../../utils/toast';

interface PropType {
  setvalue: (value: DataInfoType) => void;
  value: DataInfoType;
}

const clearpass = {
  newPassword: '',
  originPassword: '',
};

export default function InfoChange({ setvalue, value }: PropType) {
  const [change, setchange] = useState<number>(0);
  const [Custom, setCustom] = useState<string>('');

  const [pass, setpass] = useState<PasswordType>({ ...clearpass });

  const ButtonOn = (id: string) => {
    setchange(0);
    if (Custom !== value[id as keyof DataInfoType] && Custom !== '') {
      if (id === 'name') {
        setvalue({ ...value, [id]: Custom.slice(0, 10) });
      } else if (id === 'introduce') {
        setvalue({ ...value, [id]: Custom.slice(0, 60) });
      }
    } else if (
      id === 'password' &&
      pass.originPassword !== '' &&
      pass.newPassword !== ''
    ) {
      if (pass.newPassword !== pass.originPassword) {
        SetPassword(pass);
      }
      setpass({ ...clearpass });
    }
  };

  const ButtonNick = () => {
    setchange(1);
    setCustom(value.name);
  };

  const ButtonIntro = () => {
    setchange(2);
    setCustom(value.introduce);
  };

  const InfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustom(e.target.value);
  };

  const changed = [
    ButtonNick,
    ButtonIntro,
    () => setchange(3),
    () => setchange(4),
  ];

  const unchanged = [
    () => ButtonOn('name'),
    () => ButtonOn('introduce'),
    () => setchange(0),
    () => ButtonOn('password'),
  ];

  return (
    <>
      <S.ProfileInfo>
        <S.Text>{value.email}</S.Text>
        {change === 2 ? (
          <S.UserInfoInput
            name="name"
            value={change === 2 ? Custom : value.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCustom(e.target.value)
            }
          />
        ) : (
          <S.Text>{value.name}</S.Text>
        )}
        {change === 3 ? (
          <S.UserInfoInput
            name="introduce"
            value={change === 3 ? Custom : value.introduce}
            onChange={InfoChange}
          />
        ) : (
          <S.Text>
            {value.introduce === null ? '소개해 주세요!' : value.introduce}
          </S.Text>
        )}

        {change === 4 ? (
          <ModalPassword setpass={setpass} pass={pass} />
        ) : (
          <>
            <S.Block />
            <S.Block />
          </>
        )}
      </S.ProfileInfo>
      <S.ProfilebuttonBox>
        {Array.from(Array(4).keys()).map((num) => (
          <>
            {num !== 0 ? (
              num !== 3 ? (
                <S.Profilebutton
                  color={num + 1 == change ? '#001970' : ''}
                  onClick={() => {
                    num + 1 == change ? unchanged[num]() : changed[num]();
                  }}
                >
                  {change === num + 1 ? '완료' : '변경'}
                </S.Profilebutton>
              ) : (
                <S.PasswordButton
                  color={num + 1 == change ? '#001970' : ''}
                  onClick={() => {
                    num + 1 == change ? unchanged[num]() : changed[num]();
                  }}
                >
                  {change === 4 ? '변경 완료' : '비밀번호 변경'}
                </S.PasswordButton>
              )
            ) : (
              <S.Block />
            )}
          </>
        ))}
        <S.Block />
      </S.ProfilebuttonBox>
    </>
  );
}
