import React, { ChangeEvent, useState } from 'react';
import { PasswordType } from '../../../../apis/Interface';
import * as S from '../styled';

interface PropType{
    setpass: (pass: PasswordType) => void;
    pass:PasswordType
}

export default function ModalPassword({setpass,pass}:PropType) {
    const Onchange = (e:ChangeEvent<HTMLInputElement>) =>{
        setpass({...pass,[e.target.name]: e.target.value})
    }
    return (
        <>
        <S.UserInfoInput
            name="originPassword"
            onChange={Onchange}
            value={pass.originPassword}
            placeholder="현재 비밀번호"
        />
        <S.UserInfoInput
            name="newPassword"
            onChange={Onchange}
            value={pass.newPassword}
            placeholder="새 비밀번호"
        />
        </>
    );
}
