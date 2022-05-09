import useForm from "../../../hooks/useForm";
import { login } from "../../../apis/auth/login";
import { loginReqeustType } from "../../../apis/auth/login";
import { FormEvent } from "react";
import { setToken } from "../../../utils/token";
import AuthBtn from "../../../components/auth/AuthBtn";
import FormBox from "../../../components/auth/FormBox";
import PasswordBox from "../../../components/auth/PasswordBox";
import CheckingBox from "../../../components/auth/CheckingBox";
import InputBox from "../../../components/auth/InputBox";
import { customToast } from "../../../utils/toast";

function LoginPage() {
  const { handleChange, Text } = useForm<loginReqeustType>({
    email: "lokijoji2@gmail.com",
    password: "iggso821",
  });
  const LoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login(Text);
      customToast("로그인이 완료되었습니다.", "Success");
      setToken(res.data.tokenDto.accessToken, res.data.tokenDto.refreshToken);
      localStorage.setItem("userData", JSON.stringify(res.data.memberView));
    } catch (err) {
      customToast("로그인에 실패하셧습니다.", "Error");
    }
  };

  return (
    <FormBox login={true} AuthSubmit={LoginSubmit}>
      <InputBox
        InputName='email'
        InputPlaceholder='이메일'
        handleChange={handleChange}
      />
      <PasswordBox passwordCheck={false} handleChange={handleChange} />
      <CheckingBox />
      <AuthBtn login={true} />
    </FormBox>
  );
}

export default LoginPage;
