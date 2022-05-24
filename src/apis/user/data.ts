import instance from "../default";

export interface DataInfoType {
    nickname: string;
    intro: string;
    email: string;
    password: string;
}

const DataInfo = (DataInfo: DataInfoType) =>{
    const formData = new FormData();
    formData.append("Nickname",DataInfo.nickname);
    formData.append("Intro",DataInfo.intro);
    formData.append("Email",DataInfo.email);
    formData.append("password",DataInfo.password);
    return instance.post("./user/data",formData);
}

export default DataInfo