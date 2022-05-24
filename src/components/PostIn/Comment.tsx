import styled from "@emotion/styled";
import { useState,useEffect,useRef } from "react";

export default function Comment(){
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
        <AllcommentBox>
            <UserCommentBox>
                    <UserImg src="/images/PostIn/ProfileImg.png"/>
                    <CommendBox>
                        <UserName>소환식</UserName>
                        <UserComment>응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</UserComment>
                        <HideBox>
                            <HideTitle>댓글 달기</HideTitle>
                            <HideImg src="/images/PostIn/minus.png"/>
                        </HideBox>
                    </CommendBox>  
            </UserCommentBox>
            { true ?
                <ReplyBox >
                    <AllcommentBox>
                        <UserCommentBox>
                                <UserImg src="/images/PostIn/ProfileImg.png"/>
                            <CommendBox>
                                <UserName>소환식</UserName>
                                <UserComment>응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</UserComment>
                                
                            </CommendBox>
                        </UserCommentBox>
                    </AllcommentBox>

                    <AllcommentBox>
                        <UserCommentBox>
                                <UserImg src="/images/PostIn/ProfileImg.png"/>
                            <CommendBox>
                                <UserName>소환식</UserName>
                                <UserComment>응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</UserComment>
                                
                            </CommendBox>
                        </UserCommentBox>
                    </AllcommentBox>
                    
                    <ReplyInput 
                        ref={textareaRef}
                        onChange={textAreaChange}
                    />

                    <ButtonBox>
                        <ReplyButton >답글작성</ReplyButton>
                    </ButtonBox>
                </ReplyBox>
                :
                <Line />
            }

            <UserCommentBox>
                    <UserImg src="/images/PostIn/ProfileImg.png"/>
                    <CommendBox>
                        <UserName>소환식</UserName>
                        <UserComment>응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</UserComment>
                        <HideBox>
                            <HideTitle>댓글 달기</HideTitle>
                            <HideImg src="/images/PostIn/minus.png"/>
                        </HideBox>
                    </CommendBox>  
            </UserCommentBox>
        </AllcommentBox> 
    );
}

const ButtonBox = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
`


const Line = styled.span`
    height:1px;
    margin-bottom:10px;
    margin-top:50px;
    background-color:#999999;
`

const UserCommentBox = styled.div`
    display:flex;
    flex-direction:row;
    margin:50px 0 25px 0;
`

const UserImg = styled.img`
    width:50px;
    height:50px;
`

const CommendBox = styled.div`
    width:730px;
    margin:0 0 0 20px;
    overflow-wrap: break-word;
`

const UserName = styled.span`
    font-weight:bold;
    margin-bottom:50px;
`

const UserComment = styled.div`
    margin-top:10px;
`

const HideBox = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-top:30px;
`

const HideImg = styled.img`
    width:14px;
    margin:4px 0 0 8px;
`

const HideTitle = styled.span`
    font-size:15px;
    font-weight:bold;
    color:#303F9F;
`

const ReplyBox = styled.div`
    padding:0 30px 20px 30px;
    background-color:#F5F7FE;
    border: 1px solid black;
    border-radius:10px;
    margin-bottom:25px;   
`

const ReplyInput = styled.textarea`
    width:100%;
    min-height:80px;
    margin:20px 0 10px 0;
    padding:10px 10px 10px 20px;
    font-size:14px;
    border-radius:8px;
    background-color: white;
    border: 2px solid #303F9F;
    
    resize:none;
`

const ReplyButton = styled.button`
    width:100px;
    height:30px;
    font-size:14px;
    font-weight:bold;
    border-radius:8px;
    background-color:#E4EAFF;
    color: #303F9F;
    border: 2px solid #303F9F;
    :hover{
        background-color:#C3D0FE;
    }
`


const AllcommentBox = styled.div`
    border-bottom: 1px solid #999999;
`