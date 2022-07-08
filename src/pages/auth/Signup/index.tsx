import AuthBtn from "../../../components/auth/AuthBtn";
import FormBox from "../../../components/auth/FormBox";
import PasswordBox from "../../../components/auth/PasswordBox";
import InputBox from "../../../components/auth/InputBox";
import useForm from "../../../hooks/useForm";
import { signupRequestType } from "../../../apis/auth/signup";
import { FormEvent } from "react";
import { signup } from "../../../apis/auth/signup";
import { customToast } from "../../../utils/toast";
import { useNavigate } from "react-router";

function SignupPage() {
  const Navi = useNavigate();
  const { handleChange, Text } = useForm<signupRequestType>({
    email: "lokijoji2@gmail.com",
    password: "iggso821",
    username: "조상현",
  });

  const signupSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signup(Text);
      Navi('/auth/Login')
      customToast("회원가입이 완료되었습니다.", "Success");
    } catch (err) {
      customToast("회원가입이 실패하였습니다.", "Error");
    }
  };

  return (
    <FormBox login={false} AuthSubmit={signupSubmit}>
      <InputBox
        InputName='email'
        InputPlaceholder='이메일'
        handleChange={handleChange}
      />
      <PasswordBox passwordCheck={false} handleChange={handleChange} />
      <PasswordBox passwordCheck={true} handleChange={handleChange} />
      <InputBox
        InputName='username'
        InputPlaceholder='이름'
        handleChange={handleChange}
      />
      <AuthBtn login={false} />
    </FormBox>
  );
}

export default SignupPage;
