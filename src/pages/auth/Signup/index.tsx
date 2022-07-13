import AuthBtn from '../../../components/auth/AuthBtn';
import FormBox from '../../../components/auth/FormBox';
import PasswordBox from '../../../components/auth/PasswordBox';
import InputBox from '../../../components/auth/InputBox';
import useForm from '../../../hooks/useForm';
import { signupRequestType } from '../../../apis/auth/signup';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { signup } from '../../../apis/auth/signup';
import { customToast } from '../../../utils/toast';
import { useNavigate } from 'react-router';
import EmailBox from '../../../components/auth/EmailBox';

function SignupPage() {
  const Navi = useNavigate();
  const [gone, setgone] = useState<string>('');
  const [Right,setRight] = useState<boolean>(false);
  const { handleChange, Text } = useForm<signupRequestType>({
    email: 'lokijoji2@gmail.com',
    password: 'iggso821',
    username: '조상현',
  });

  const signupSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Right) {
      try {
        await signup(Text);
        Navi('/auth/Login');
        customToast('회원가입이 완료되었습니다.', 'Success');
      } catch (err) {
        customToast('회원가입이 실패하였습니다.', 'Error');
      }
    } else{
      customToast('이메일을 인증해주세요.', 'Error');
    }
  };


  return (
    <FormBox login={false} AuthSubmit={signupSubmit}>
      <EmailBox
        InputName="email"
        InputPlaceholder="이메일"
        handleChange={handleChange}
        setgone={setgone}
        gone={gone}
        setRight={setRight}
        Right={Right}
      />

      <PasswordBox passwordCheck={false} handleChange={handleChange} />
      <PasswordBox passwordCheck={true} handleChange={handleChange} />
      <InputBox
        InputName="username"
        InputPlaceholder="이름"
        handleChange={handleChange}
      />
      <AuthBtn login={false} />
    </FormBox>
  );
}

export default SignupPage;
