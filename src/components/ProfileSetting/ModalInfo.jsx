import Image from "next/image";
import styled from "@emotion/styled";
import { useState } from "react"

const dummy = {
    nickname: "김태완",
    intro: "나 자신을 믿고 나아라하 그러한 자에게는 보물이 주어지리다",
    email: "kkkkteaaa2005@gmail.com",
    password: 'ktwtraspcx',
};

export default function ModalInfo() {
    
    return(
        <>
            <ProfileImgBox>
                <ProfileImg width={200} height={200} src="/images/main/MainImage.png" />
                <ImgUplordBox>
                    <ImgRemove>이미지 삭제</ImgRemove>
                    <ImgUplord>이미지 업로드</ImgUplord>
                </ImgUplordBox>
            </ProfileImgBox>
            <SizeName>사이즈: 200 x 200픽셀</SizeName>
            <UserInfoBox>
                <ProfileInfoBox>


                    <UserInfo>
                        사용자 이름
                        <ProfileInfoLine />
                    </UserInfo>
                    <UserInfo>
                        한줄 소개
                        <ProfileInfoLine />
                    </UserInfo>
                    <UserInfo>
                        프로필 공개 여부
                        <ProfileInfoLine />
                    </UserInfo>
                    <UserInfo>
                        이메일
                        <ProfileInfoLine />
                    </UserInfo>
                    <UserInfo>
                        비밀번호
                    <ProfileInfoLine />
                    </UserInfo>

                    
                    </ProfileInfoBox>
                        <ProfileInfo>
                            {true ? <UserInfoInput /> :<span>{dummy.nickname}</span> }
                            {false ? <UserInfoInput />:<span>{dummy.intro}</span>}
                            <PublicProfile>
                                <PublicProfileBall />
                            </PublicProfile>
                            <span>{dummy.email}</span>
                            <span>{dummy.password}</span>
                        </ProfileInfo>


                    <ProfilebuttonBox>
                        <Profilebutton>변경</Profilebutton>
                        <Profilebutton>변경</Profilebutton>
                        <Profilebutton>변경</Profilebutton>
                        <Profilebutton>변경</Profilebutton>
                        <Profilebutton>변경</Profilebutton>
                    </ProfilebuttonBox>
                    

                    <ProfileInfoBox>
                </ProfileInfoBox>
            </UserInfoBox>
        </>
    );
}

const ProfileImgBox = styled.div`
    display:flex;
    flex-direction:row;
`

const ProfileImg = styled(Image)`
    width:200px;
    height:200px;
`


const ImgUplordBox = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:10px;
    margin-top:140px;
`

const ImgRemove = styled.button`
    width: 80px;
    height: 25px;
    background-color: white;
    margin-top: 5px;
    border-radius: 5px;
    :hover{
        background-color: #e4e4e4;
    }
`

const ImgUplord = styled.button`
    width: 95px;
    height: 25px;
    background-color: white;
    margin-top: 5px;
    border-radius: 5px;
    :hover{
        background-color: #e4e4e4;
    }
`

const SizeName = styled.span`
    font-size:12px;
    color: #777777;
`

const UserInfoBox = styled.div`
    height:250px;
    display:flex;
    flex-direction:row;
    margin-top:50px;
`

const ProfileInfoBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    font-size:13px;
`

const ProfileInfo = styled.div`
    width:350px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    font-size:13px;
;`

const ProfileInfoLine = styled.span`
    width:2px;
    height:10px;
    background-color:black;
    margin-left:20px;
    margin-top:2px;
`

const Profilebutton = styled.button`
    width:40px;
    height:25px;
    border-radius:5px;
    background-color: white;
    font-size:13px;
    :hover{
        background-color:#E4E4e4;
    }
`

const ProfilebuttonBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    font-size:13px;
    height:102%;
    margin-top:-1px;
`

const UserInfoInput = styled.input`
    font-size:13px;
    border-radius:3px;
    border: 1px solid #666AD1;
    padding-left:5px;
`

const UserInfo = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width: 150px;
`

const PublicProfile = styled.div`
    width:40px;
    height:20px;
    display:flex;
    align-items:center;
    border-radius:10px;
    background-color: #C9C9C9;
`

const PublicProfileBall = styled.div`
    width:12px;
    height:12px;
    border-radius:6px;
    background-color:white;
`
