import styled from "@emotion/styled";
import * as S from './style'

interface PropsType {
    setbell: (Bell: boolean) => void;
  }

function Belling({ setbell }: PropsType){
    const SetBell = () =>{
        setbell(false);
    }
    return(
        <>
            <S.Background onClick={SetBell} />
                <S.BellBox>
                    <S.BackImg onClick={SetBell} src="/images/Modal/ModalBack.png"/>
                    <span>알림</span>
                    <S.BellLine />
                    <S.PostCotain>

                        <S.PostBox>
                            <S.ProfileImg src="/images/Belling/Profile.png"/>
                            <S.PostNameBox>
                                <S.PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</S.PostName>
                                <S.PostTime>1시간 전</S.PostTime>
                            </S.PostNameBox>
                            <S.PostImg src="/images/Belling/PostImg.png"/>
                        </S.PostBox>

                        <S.PostBox>
                            <S.ProfileImg src="/images/Belling/Profile.png"/>
                            <S.PostNameBox>
                                <S.PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</S.PostName>
                                <S.PostTime>1시간 전</S.PostTime>
                            </S.PostNameBox>
                            <S.PostImg src="/images/Belling/PostImg.png"/>
                        </S.PostBox>

                        <S.PostBox>
                            <S.ProfileImg src="/images/Belling/Profile.png"/>
                            <S.PostNameBox>
                                <S.PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</S.PostName>
                                <S.PostTime>1시간 전</S.PostTime>
                            </S.PostNameBox>
                            <S.PostImg src="/images/Belling/PostImg.png"/>
                        </S.PostBox>

                        <S.PostBox>
                            <S.ProfileImg src="/images/Belling/Profile.png"/>
                            <S.PostNameBox>
                                <S.PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</S.PostName>
                                <S.PostTime>1시간 전</S.PostTime>
                            </S.PostNameBox>
                            <S.PostImg src="/images/Belling/PostImg.png"/>
                        </S.PostBox>

                        <S.PostBox>
                            <S.ProfileImg src="/images/Belling/Profile.png"/>
                            <S.PostNameBox>
                                <S.PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</S.PostName>
                                <S.PostTime>1시간 전</S.PostTime>
                            </S.PostNameBox>
                            <S.PostImg src="/images/Belling/PostImg.png"/>
                        </S.PostBox>

                        <S.PostBox>
                            <S.ProfileImg src="/images/Belling/Profile.png"/>
                            <S.PostNameBox>
                                <S.PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</S.PostName>
                                <S.PostTime>1시간 전</S.PostTime>
                            </S.PostNameBox>
                            <S.PostImg src="/images/Belling/PostImg.png"/>
                        </S.PostBox>

                        <S.PostBox>
                            <S.ProfileImg src="/images/Belling/Profile.png"/>
                            <S.PostNameBox>
                                <S.PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</S.PostName>
                                <S.PostTime>1시간 전</S.PostTime>
                            </S.PostNameBox>
                            <S.PostImg src="/images/Belling/PostImg.png"/>
                        </S.PostBox>

                        <S.PostBox>
                            <S.ProfileImg src="/images/Belling/Profile.png"/>
                            <S.PostNameBox>
                                <S.PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</S.PostName>
                                <S.PostTime>1시간 전</S.PostTime>
                            </S.PostNameBox>
                            <S.PostImg src="/images/Belling/PostImg.png"/>
                        </S.PostBox>


                    </S.PostCotain>
                    
                </S.BellBox>
        </>
    );
}

export default Belling;