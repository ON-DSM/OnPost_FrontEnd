import React, { ChangeEvent, useState } from 'react';
import { PasswordType } from '../../../../apis/Interface';
import * as S from '../styled';

interface PassType{
    password:string;
    oldpass:string; 
}

interface PropType{
    setpass: (pass: PassType) => void;
    pass:PassType
}

export default function ModalPassword({setpass,pass}:PropType) {
    const Onchange = (e:ChangeEvent<HTMLInputElement>) =>{
        setpass({...pass,[e.target.name]: e.target.value})
    }
    return (
        <>
        <S.UserInfoInput
            name="oldpass"
            onChange={Onchange}
            value={pass.oldpass}
            placeholder="현재 비밀번호"
        />
        <S.UserInfoInput
            name="password"
            onChange={Onchange}
            value={pass.password}
            placeholder="새 비밀번호"
        />
        </>
    );
}
