import { useState,useEffect,useRef } from "react";
import * as S from './style';

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
        <S.AllcommentBox>
            <S.UserCommentBox>
                    <S.UserImg src="/images/PostIn/ProfileImg.png"/>
                    <S.CommendBox>
                        <S.UserName>소환식</S.UserName>
                        <S.UserComment>응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</S.UserComment>
                        <S.HideBox>
                            <S.HideTitle>댓글 달기</S.HideTitle>
                            <S.HideImg src="/images/PostIn/minus.png"/>
                        </S.HideBox>
                    </S.CommendBox>  
            </S.UserCommentBox>
            { true ?
                <S.ReplyBox >
                    <S.AllcommentBox>
                        <S.UserCommentBox>
                                <S.UserImg src="/images/PostIn/ProfileImg.png"/>
                            <S.CommendBox>
                                <S.UserName>소환식</S.UserName>
                                <S.UserComment>응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</S.UserComment>
                                
                            </S.CommendBox>
                        </S.UserCommentBox>
                    </S.AllcommentBox>

                    <S.AllcommentBox>
                        <S.UserCommentBox>
                                <S.UserImg src="/images/PostIn/ProfileImg.png"/>
                            <S.CommendBox>
                                <S.UserName>소환식</S.UserName>
                                <S.UserComment>응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</S.UserComment>
                                
                            </S.CommendBox>
                        </S.UserCommentBox>
                    </S.AllcommentBox>
                    
                    <S.ReplyInput 
                        ref={textareaRef}
                        onChange={textAreaChange}
                    />

                    <S.ButtonBox>
                        <S.ReplyButton >답글작성</S.ReplyButton>
                    </S.ButtonBox>
                </S.ReplyBox>
                :
                <S.Line />
            }

            <S.UserCommentBox>
                    <S.UserImg src="/images/PostIn/ProfileImg.png"/>
                    <S.CommendBox>
                        <S.UserName>소환식</S.UserName>
                        <S.UserComment>응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</S.UserComment>
                        <S.HideBox>
                            <S.HideTitle>댓글 달기</S.HideTitle>
                            <S.HideImg src="/images/PostIn/minus.png"/>
                        </S.HideBox>
                    </S.CommendBox>  
            </S.UserCommentBox>
        </S.AllcommentBox> 
    );
}