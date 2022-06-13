import { PasswordType } from "../../Interface";
import instance from "../../default";



export const RePassword = (Password: PasswordType) =>{
    const Data = {...Password,'email': sessionStorage.getItem("email")}
    return instance.post("/member/password",Data,{
        headers:{
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        }
    });
}
