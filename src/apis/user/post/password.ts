import { PasswordType } from "../../Interface";
import instance from "../../default";
import { customToast } from "../../../utils/toast";



export const SetPassword = async(Password: PasswordType) =>{
    const Data = {...Password,'email': sessionStorage.getItem("email")}
    return await instance.post("/member/password",Data,{
        headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        }
    }).then(() =>  customToast(
        '새 비밀번호는 8자 이상, 20자 이하이여야 합니다.',
        'Success'
      )).catch((e) =>  customToast(
        '새 비밀번호는 8자 이상, 20자 이하이여야 합니다.',
        'Error'
      ));
}
