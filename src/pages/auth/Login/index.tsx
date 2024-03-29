import useForm from '../../../hooks/useForm';
import { login } from '../../../apis/auth/login';
import { loginReqeustType } from '../../../apis/auth/login';
import { FormEvent } from 'react';
import {  setToken } from '../../../utils/token';
import AuthBtn from '../../../components/auth/AuthBtn';
import FormBox from '../../../components/auth/FormBox';
import PasswordBox from '../../../components/auth/PasswordBox';
import CheckingBox from '../../../components/auth/CheckingBox';
import InputBox from '../../../components/auth/InputBox';
import { customToast } from '../../../utils/toast';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { RecentToken } from '../../../recoil/proflie';

function LoginPage() {
  const Navigate = useNavigate()
  const TokenSet = useSetRecoilState(RecentToken);
  const { handleChange, Text } = useForm<loginReqeustType>({
    email: 'lokijoji2@gmail.com',
    password: 'iggso821',
  });

  const LoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login(Text);
      setToken(res.data.accessToken, res.data.refreshToken);
      TokenSet({accessToken: res.data.accessToken,refreshToken:res.data.refreshToken})
       Navigate('/');
      setTimeout(() => customToast('로그인에 성공하셨습니다.', 'Success'),200)
       
      
     
    } catch (err) {
      customToast('로그인에 실패하셨습니다.', 'Error');
    }
  };

  return (
    <FormBox login={true} AuthSubmit={LoginSubmit}>
      <InputBox
        InputName="email"
        InputPlaceholder="이메일"
        handleChange={handleChange}
      />
      <PasswordBox passwordCheck={false} handleChange={handleChange} />
      <CheckingBox />

      <AuthBtn login={true} />
    </FormBox>
  );
}

export default LoginPage;
