import { PasswordType } from "../../Interface";
import instance from "../../default";
import { customToast } from "../../../utils/toast";



export const SetPassword = async(Password: PasswordType) =>{
    const Data = {...Password,'email': sessionStorage.getItem("email")}
    await instance.post("/member/password",Data,{
        headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        }
    }).then(() =>  customToast(
        '비밀번호 변경이 완료되었습니다.',
        'Success'
      )).catch((e) =>  customToast(
        '비밀번호의 형식이 잘못되었습니다',
        'Error'
      ));
}
