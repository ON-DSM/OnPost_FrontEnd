import React, { ChangeEvent , useState } from 'react';
import { PasswordType } from '../../../../apis/Interface';
import * as S from '../styled';
import ModalPassword from './ModalPassword';
import {DataInfoType} from '../../../../apis/Interface'
import { RePassword } from '../../../../apis/user/post/password';
import { customToast } from '../../../../utils/toast';


interface PropType{
  setvalue: (value: DataInfoType) => void;
  value: DataInfoType,
}



const clearpass = {
    password: '',
    oldpass:'',
  }

export default function InfoChange({setvalue,value}:PropType) {
  const [change, setchange] = useState<number>(0);
  const [Custom, setCustom] = useState<string>('');
  
  const [pass,setpass] = useState<PasswordType>({...clearpass})

  const ButtonOn = (id: string) => {
    setchange(0);
    if(Custom !== value[id as keyof DataInfoType] && Custom !== ''){    if(id === 'name' ){
    setvalue({ ...value, [id]: Custom.slice(0,10)});
    } else if(id === 'introduce'){
      setvalue({ ...value, [id]: Custom.slice(0,60) });
    }
  }else if(id === 'password' && pass.oldpass !== '' && pass.password !== ''){
    if(pass.password !== pass.oldpass){
        RePassword(pass)
        customToast("새 비밀번호는 8자 이상, 20자 이하이여야 합니다.","Error")
      }else {
        
      }
      setpass({...clearpass})
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


  const InfoChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setCustom(e.target.value)
  }

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
        {change === 1 ? (
          <S.UserInfoInput
            name="name"
            value={change === 1 ? Custom : value.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCustom(e.target.value)
            }
          />
        ) : (
          <S.Text>{value.name}</S.Text>
        )}
        {change === 2 ? (
          <S.UserInfoInput
            name="introduce"
            value={change === 2 ? Custom : value.introduce}
            onChange={InfoChange}
          />
        ) : (
          <S.Text>
            {value.introduce === null ? '소개해 주세요!' : value.introduce}
          </S.Text>
        )}
        <S.Text >
          {value.email}
        </S.Text>
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
            <S.Profilebutton
              onClick={() => {
                num + 1 == change ? unchanged[num]() : changed[num]();
              }}
            >
              {num == 2 ? "인증" : change === num + 1 ? '완료' : '변경'}
            </S.Profilebutton>
          </>
        ))}
        <S.Block />
      </S.ProfilebuttonBox>
    </>
  );
}
