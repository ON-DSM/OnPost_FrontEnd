import { ChangeEvent } from 'react';
import { DataInfoType, PasswordType } from '../../../../apis/Interface';
import * as S from '../styled';

interface PropsType{
    setpass: (pass: PasswordType) => void;
    pass: PasswordType;
    setvalue: (value: DataInfoType) => void;
    value: DataInfoType;
}



export default function ReturnChangeInput({setpass,pass,setvalue,value}:PropsType) {
  const Passchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setpass({ ...pass, [e.target.name]: e.target.value });
  };
  
  const Infochange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ width: '300px' }}>
        <S.NameInfoInput onChange={Infochange} name='name' value={value.name}/>
        <S.IntroInfoInput onChange={Infochange} name='introduce' value={value.introduce}/>
      <S.UserInfoInput
        name="originPassword"
        onChange={Passchange}
        value={pass.originPassword}
        placeholder="현재 비밀번호"
      />
      <S.UserInfoInput
        name="newPassword"
        onChange={Passchange}
        value={pass.newPassword}
        placeholder="새 비밀번호"
      />
    </div>
  );
}
