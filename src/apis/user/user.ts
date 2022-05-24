import instance from "../default";

export interface UserInfoType {
    image: string;
    url: string;
}

const UserInfo = (UserInfo: UserInfoType) =>{
    const formData = new FormData();
    formData.append("UserImage",UserInfo.image);
    formData.append("UserUrl",UserInfo.url);
    return instance.post("./user/user",formData);
}

export default UserInfo