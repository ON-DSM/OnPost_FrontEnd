import styled from "@emotion/styled";
import PostItem from "../Post/PostItem";
import RelateFollow from "./RelateFollow";
import { useState,useEffect } from "react";

export default function RelateInfo(){
    const [modal,setmodal] = useState<boolean>(false);
    const [Follow,setFollow] = useState<boolean>(false);

    
    

    const Setting = () => {
        setmodal(!modal);
      };
    const Fcolor = () =>{
        return Follow ? "#A9A9A9" : "black";
    }
    const Fcolor2 = () =>{
        return Follow ? "black" : "#A9A9A9";
    }
    return(
        <>
            <MainContainer>
                <Tapline />
                <ProfileBox>
                    <ProfileImg src="images/RelatePage/RelatePageImg.png"/>
                    <Profilebutton>
                        <ProfileInfoBox>
                            <ProfileName>김길궐</ProfileName>
                            <ProfileSubName>오늘 저녘은 치킨이다</ProfileSubName>
                            <ProfileEmail>kimgimo123@gmail.com</ProfileEmail>
                            <ProfileFollowBox>
                                <ProfileFollow onClick={() => setmodal(true)}>팔로워 {123}</ProfileFollow>
                                <ProfileFollow onClick={() => setmodal(true)}>팔로우 {123}</ProfileFollow>
                            </ProfileFollowBox>
                        </ProfileInfoBox>
                        <ProfileButton>Follow</ProfileButton>
                    </Profilebutton>
                </ProfileBox>
                
                {
                false ?
                <PostBox>
                    <PostNameBox>
                        <PostImg src="images/RelatePage/WriteImg.png"/>
                        <PostName>{"나아키인베"}님의 글</PostName>
                    </PostNameBox>
                    <PostLine />
                </PostBox>
                :
                <PostBox>
                    <PostNameBox>
                        <PostImg src="images/RelatePage/ProtectImg.png"/>
                        <PostName>프로필이 비공개 되었습니다</PostName>
                    </PostNameBox>
                    <PostLine />
                </PostBox>
                }
            </MainContainer>

            {    
            true ?
            
            <ReadContainer>
                <PostContainer>
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </PostContainer>
            </ReadContainer>
            :
            <Imgoverflow>
                <ProtectImg src="images/RelatePage/ProtectLine.png"/>
            </Imgoverflow>
            }
            { modal &&
                <FollowModal>
                    <DialogBox>
                        <Backspace onClick={Setting} src='/images/Modal/ModalBack.png'/>
                        <ModalBox>
                            <FollowBox>
                                <Follower onClick={() =>setFollow(false)} color={Fcolor()}>Follow</Follower>
                                <Follower onClick={() =>setFollow(true)} color={Fcolor2()}>Follower</Follower>
                            </FollowBox>
                            {
                            Follow ?
                            <UserBox>
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                                <RelateFollow />
                            </UserBox>
                            :
                            <UserBox>
                               <NoBodyImg src="/images/RelatePage/Follwers.svg"/> 
                                <NoBodyTitle>아무도 없네요...</NoBodyTitle>
                            </UserBox>
                            }
                            
                        </ModalBox>
                        
                    </DialogBox>
                   <Backdrop onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        if (Setting) {
                        
                        Setting();
                        }
                    }}/>
                </FollowModal>
            }
        </>
    );
}

const Backspace = styled.img`
  position:absolute;
  margin-left:90%;
  margin-top:-105%;
`

const FollowModal = styled.div`
  z-index: 9999;
`;

const DialogBox = styled.dialog`
  width: 500px;
  height: 600px;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  box-shadow: 2px 8px 4px rgb(0,0,0,25%);
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalBox = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:40px;
`

const FollowBox = styled.div`
    width: 10px;
    margin-bottom:25px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const Follower = styled.span`
    margin-left:20px;
    margin-right:20px;
    padding-left:10px;
    padding-right:10px;
    font-size:20px;
    font-weight:bold;
    color: ${(props) => props.color && props.color};
    border-bottom: 1px solid black;
`

const UserBox = styled.div`
    height: 500px;
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  overflow: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar{
    width:10px;
  }
  ::-webkit-scrollbar-track{
      background-color:#E4E4E4;
  }
  ::-webkit-scrollbar-thumb{
      background-color:#303F9F;
  }
`

const NoBodyImg = styled.img`
    width:250px;
`

const NoBodyTitle = styled.span`
    color:#6C63FF;
    font-size: 18px;
    font-weight:bold;
    margin-top:20px;
    margin-left:-20px;
`



const PostContainer = styled.div`
  margin-top:100px;
  width: 1340px;
  @media (max-width: 1353px){
    justify-content:center;
  }
  display:flex;
  flex-wrap:wrap;
`

const ReadContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  
`



const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Tapline = styled.span`
    height:168px;
    width:100%;
    position:absolute;
    background: linear-gradient(to top,#4B309F,#0081C9);
    z-index:-1;
`

const ProfileBox = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    margin-top:120px;
`

const ProfileImg = styled.img`
    width:200px;
    height:200px;
`

const ProfileButton = styled.button`
    padding-left:25px;
    padding-right:25px;
    height:30px;
    border-radius:5px;
    color:white;
    background-color: #1A73EB;
    :hover{
        background-color: #001970;
    }
    border:none;
    margin-left:120px;
    margin-top:-70px;
    @media (max-width: 619px) {
        margin-left: -25px;
        margin-top: -100px;
    }
`

const Profilebutton = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

const ProfileInfoBox = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
`

const ProfileName = styled.span`
    font-size:24px;
    font-weight:bold;
    margin-bottom:5px;
`

const ProfileSubName = styled.span`
    font-size:18px;
    margin-bottom:25px;
`

const ProfileEmail = styled.span`
    font-size:16px;
    margin-bottom:5px;
`

const ProfileFollowBox = styled.div`
    font-size:14px;
`

const ProfileFollow = styled.span`
    color: #303F9F;
    margin-right:10px;
`

const PostBox = styled.div`
    margin-top:100px;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const PostNameBox = styled.div`
    display:flex;
    justify-content:center;
`

const PostImg = styled.img`
    width:25px;
    height:25px;
    margin-right:15px;
`

const PostName = styled.span`
    font-size:18px;
    margin-top:-2px;
    color:#666AD1;
`

const PostLine = styled.span`
    width:100%;
    height:1px;
    background-color:#666AD1;
    margin-top:5px;
`

const Imgoverflow = styled.div`
    overflow:hidden;
`

const ProtectImg = styled.img`
    width:1500px;
    height:298px;
`


