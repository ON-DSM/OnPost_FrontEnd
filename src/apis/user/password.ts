import instance from "../default";

export interface PasswordType {
    email: string,
	originPassword:string,
	newPassword: string,
}

const Password = (Password: PasswordType) =>{
    const formData = new FormData();
    formData.append("email",Password.email);
    formData.append("originPassword",Password.originPassword);
    formData.append("newPassword",Password.newPassword);
    return instance.post("./user/password",formData);
}

export default Password