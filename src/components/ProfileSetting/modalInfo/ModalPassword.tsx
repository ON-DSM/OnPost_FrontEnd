import React, { useState } from 'react';
import { PasswordType } from '../../../apis/user/password';
import * as S from './styled';


export default function ModalPassword() {
    const [Pass,setPasss] = useState<PasswordType>({
        email: "khcho050125@gmail.com",
	    originPassword:"12345678",
	    newPassword: "87654321",
    })


    return (
        <>
        <S.UserInfoInput
            name="password"
        />
        <S.UserInfoInput
            name="password"
        />
        </>
    );
}
