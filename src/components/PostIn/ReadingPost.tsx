import styled from "@emotion/styled";
import TrendPost from "./TrendPost";
import Comment from "./Comment";
import { useState,useEffect,useRef } from "react";


export default function ReadingPost(){
    
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    
    const [value, setValue] = useState<string>("");

    const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
      };
    
      useEffect(() => {
        if (textareaRef && textareaRef.current) {
          textareaRef.current.style.height = "0px";
          const scrollHeight = textareaRef.current.scrollHeight;
          textareaRef.current.style.height = scrollHeight + "px";
        }
      }, [value]);
    return(
        <>  
        <script src="https://rawgit.com/jackmoore/autosize/master/dist/autosize.min.js"></script>
            <MainContainer>
                <MainCenter>
                    <PostName>제목이름입니당</PostName>
                    <PostTime>2022-03-30</PostTime>
                    <PostTagBox>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>
                        <PostTag>#태그입니다</PostTag>

                    </PostTagBox>
                    <PostImg src="/images/PostIn/PostInImg.png"/>
                    
                    <PostInfo>
                    먼저 Product Language란 무엇일까요? 아마 Product Language라는 말 자체가 생소하신 분들도 많으실 겁니다. 하지만 디자인 시스템이라고 하면 좀 익숙하신 분들도 계시겠죠? Product Language는 디자인 시스템의 확장판이라고 보시면 이해가 수월할 것 같습니다. 즉 일반적인 디자인 시스템이 디자인에 한정된 내용을 다루는 경향이 있다고 한다면, Product Language는 제품을 만드는 구성원 모두가 공유하고 사용하며 만들어가는 언어라고 할 수 있어요.
                    </PostInfo>

                    <PostButtonBar>
                        <ButtonCombine>
                            <PostButtonBox>
                                <PostButtonIcon src="/images/PostIn/Heart.svg"/>
                                <PostButtonName>200</PostButtonName>
                            </PostButtonBox>
                            <PostButtonBox>
                                <PostButtonName>공유하기</PostButtonName>
                                <PostButtonIcon src="/images/PostIn/Share.png"/>
                            </PostButtonBox>
                        </ButtonCombine>

                        <ButtonCombine>
                            <PostButtonBox>
                                <PostButtonName>수정하기</PostButtonName>
                                <PostButtonIcon src="/images/PostIn/Write.png"/>
                                
                            </PostButtonBox>
                            <PostButtonBox>
                                <PostButtonName>삭제하기</PostButtonName>
                                <PostButtonIcon src="/images/PostIn/Trash.png"/>
                                
                            </PostButtonBox>
                        </ButtonCombine>
                    </PostButtonBar>
                </MainCenter>
                <ProfileContainer>
                    <CenterBox>
                        <CenterInfoBox>
                            <ProfileBox>
                                <ProfileImg src="/images/PostIn/ProfileImg.png"/>
                                <ProfileInfo>
                                    <ProfileName>나아키인베</ProfileName>
                                    <ProfileSubName>앙기모띠띠띠띠ㅣ띠띠</ProfileSubName>
                                    <ProfileFollow>Follow</ProfileFollow>
                                </ProfileInfo>
                            </ProfileBox>
                            <Line />
                            <CommentSum><Num>20</Num>개의 댓글</CommentSum>
                            <form>
                                    <CommentInput 
                                        ref={textareaRef}
                                        onChange={textAreaChange}
                                    />
                                    <ButtonBox>
                                        <CommentButton>댓글 작성</CommentButton>
                                    </ButtonBox>
                            </form>
                            <Comment />                     
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>
                            <div>asd</div>

                        </CenterInfoBox>
                    </CenterBox>
                </ProfileContainer>
            </MainContainer>
            <TrendBar>
                <TrendPost />
            </TrendBar>
        </>
    );   
}

const MainContainer = styled.div`
    margin-top:60px;
    padding-left:300px;
    padding: 0;
`

const MainCenter = styled.div`
    padding-top:50px;
    width:1000px;
    margin:0 auto;
`
const PostName = styled.div`
    font-size:32px;
    font-weight:bold;
`

const PostTime = styled.a`
    font-size:14px;
    color:#686868;
    margin-left:7px;
`

const PostTagBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:800px;
    margin-top:20px;
`

const PostTag = styled.div`
    margin:7px;
    font-size:12px;
    padding-left:12px;
    padding-right:12px;
    height: 25px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#666AD1;
    color: white;
    border-radius:55px;
`

const PostImg = styled.img`
    width:800px;
    margin-top:10px;
    
`

const PostInfo = styled.div`
    width:800px;
    margin-top:50px;
    margin-bottom:100px;
`

const PostButtonBar = styled.div`
    display:flex;
    width:800px;
    justify-content:space-between;
    padding-bottom:10px;
`

const ButtonCombine = styled.div`
    display:flex;
`

const PostButtonName = styled.span`
    margin-left: 5px;
    margin-right:5px;
`

const PostButtonIcon = styled.img`
    width:16px;
`

const PostButtonBox = styled.button`
    padding-left:5px;
    padding-right:5px;
    margin-left: 5px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    border: 1px solid black;
    color: #333333;
    :hover{
        border: 1px solid #303F9F;
        color: #303F9F;
        background-color:#E4EAFF;
    }
    
`

const ProfileContainer = styled.div`

    background-color:#F8F8F8;
    
`

const CenterBox = styled.div`
    width:1000px;
    margin:auto;
`

const CenterInfoBox = styled.div`
    width:800px;
    display:flex;
    flex-direction:column;
`

const ProfileBox = styled.div`
    display:flex;
    flex-direction:row;
    padding-left:50px;
    padding-top:100px;
    padding-bottom:100px;
`

const ProfileImg = styled.img`
    width:100px;
    height:100px;
`

const ProfileInfo = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    margin-left: 20px;
    width:700px;
`

const ProfileName = styled.span`
    font-size:22px;
    font-weight:bold;
`

const ProfileSubName = styled.span`
    font-size:14px;
`


const ProfileFollow = styled.button`
    width: 100px;
    height:28px;
    border-radius:5px;
    color:white;
    background-color:#1A73EB;
    :hover{
        background-color:#1458B5;
    }
    border:none;
    margin-left:530px;
`

const Line = styled.span`
    height:1px;
    margin-bottom:10px;
    margin-top:50px;
    background-color:#999999;
`

const Num = styled.span`
    color: #303F9F;
`

const CommentSum = styled.span`
    font-size:16px;
    font-weight:bold;
    margin: 30px 0 10px 30px;
`



const CommentInput = styled.textarea`
    min-height:200px;
    width:100%;
    border-radius:10px;
    border:2px solid #303F9F;
    padding: 20px;
    resize:none;
    font-size:14px;
`

const ButtonBox = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
`

const CommentButton = styled.button`
    width:120px;
    height:35px;
    font-size:16px;
    font-weight:bold;
    border-radius:8px;
    background-color:#E4EAFF;
    color: #303F9F;
    border: 2px solid #303F9F;
    :hover{
        background-color:#C3D0FE;
    }
`





const TrendBar = styled.div`
    position:absolute;
    top:245px;
    right:50px;
`


