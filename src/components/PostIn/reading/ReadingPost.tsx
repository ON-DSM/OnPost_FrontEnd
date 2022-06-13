import * as S from './styled';
import TrendPost from "../trend/TrendPost";
import Comment from "../comment/Comment";
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
            <S.MainContainer>
                <S.MainCenter>
                    <S.PostName>제목이름입니당</S.PostName>
                    <S.PostTime>2022-03-30</S.PostTime>
                    <S.PostTagBox>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>
                        <S.PostTag>#태그입니다</S.PostTag>

                    </S.PostTagBox>
                    <S.PostImg src="/images/PostIn/PostInImg.png"/>
                    
                    <S.PostInfo>
                    먼저 Product Language란 무엇일까요? 아마 Product Language라는 말 자체가 생소하신 분들도 많으실 겁니다. 하지만 디자인 시스템이라고 하면 좀 익숙하신 분들도 계시겠죠? Product Language는 디자인 시스템의 확장판이라고 보시면 이해가 수월할 것 같습니다. 즉 일반적인 디자인 시스템이 디자인에 한정된 내용을 다루는 경향이 있다고 한다면, Product Language는 제품을 만드는 구성원 모두가 공유하고 사용하며 만들어가는 언어라고 할 수 있어요.
                    </S.PostInfo>

                    <S.PostButtonBar>
                        <S.ButtonCombine>
                            <S.PostButtonBox>
                                <S.PostButtonIcon src="/images/PostIn/Heart.svg"/>
                                <S.PostButtonName>200</S.PostButtonName>
                            </S.PostButtonBox>
                            <S.PostButtonBox>
                                <S.PostButtonName>공유하기</S.PostButtonName>
                                <S.PostButtonIcon src="/images/PostIn/Share.png"/>
                            </S.PostButtonBox>
                        </S.ButtonCombine>

                        <S.ButtonCombine>
                            <S.PostButtonBox>
                                <S.PostButtonName>수정하기</S.PostButtonName>
                                <S.PostButtonIcon src="/images/PostIn/Write.png"/>
                                
                            </S.PostButtonBox>
                            <S.PostButtonBox>
                                <S.PostButtonName>삭제하기</S.PostButtonName>
                                <S.PostButtonIcon src="/images/PostIn/Trash.png"/>
                                
                            </S.PostButtonBox>
                        </S.ButtonCombine>
                    </S.PostButtonBar>
                </S.MainCenter>
                <S.ProfileContainer>
                    <S.CenterBox >
                        <S.CenterInfoBox >
                            <S.ProfileBox>
                                <S.ProfileImg src="/images/PostIn/ProfileImg.png"/>
                                <S.ProfileInfo>
                                    <S.ProfileName>나아키인베</S.ProfileName>
                                    <S.ProfileSubName>앙기모띠띠띠띠ㅣ띠띠</S.ProfileSubName>
                                    <S.ProfileFollow>Follow</S.ProfileFollow>
                                </S.ProfileInfo>
                            </S.ProfileBox>
                            <S.Line />
                            <S.CommentSum><S.Num>20</S.Num>개의 댓글</S.CommentSum>
                            <form>
                                    <S.CommentInput 
                                        ref={textareaRef}
                                        onChange={textAreaChange}
                                    />
                                    <S.ButtonBox>
                                        <S.CommentButton>댓글 작성</S.CommentButton>
                                    </S.ButtonBox>
                            </form>
                            <Comment />                     
                        </S.CenterInfoBox>
                    </S.CenterBox>
                </S.ProfileContainer>
            </S.MainContainer>
    );   
}

