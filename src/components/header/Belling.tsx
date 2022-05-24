import styled from "@emotion/styled";

interface PropsType {
    setbell: (Bell: boolean) => void;
  }

function Belling({ setbell }: PropsType){
    const SetBell = () =>{
        setbell(false);
    }
    return(
        <>
            <Background onClick={SetBell} />
                <BellBox>
                    <BackImg onClick={SetBell} src="/images/Modal/ModalBack.png"/>
                    <span>알림</span>
                    <BellLine />
                    <PostCotain>

                        <PostBox>
                            <ProfileImg src="/images/Belling/Profile.png"/>
                            <PostNameBox>
                                <PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</PostName>
                                <PostTime>1시간 전</PostTime>
                            </PostNameBox>
                            <PostImg src="/images/Belling/PostImg.png"/>
                        </PostBox>

                        <PostBox>
                            <ProfileImg src="/images/Belling/Profile.png"/>
                            <PostNameBox>
                                <PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</PostName>
                                <PostTime>1시간 전</PostTime>
                            </PostNameBox>
                            <PostImg src="/images/Belling/PostImg.png"/>
                        </PostBox>

                        <PostBox>
                            <ProfileImg src="/images/Belling/Profile.png"/>
                            <PostNameBox>
                                <PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</PostName>
                                <PostTime>1시간 전</PostTime>
                            </PostNameBox>
                            <PostImg src="/images/Belling/PostImg.png"/>
                        </PostBox>

                        <PostBox>
                            <ProfileImg src="/images/Belling/Profile.png"/>
                            <PostNameBox>
                                <PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</PostName>
                                <PostTime>1시간 전</PostTime>
                            </PostNameBox>
                            <PostImg src="/images/Belling/PostImg.png"/>
                        </PostBox>

                        <PostBox>
                            <ProfileImg src="/images/Belling/Profile.png"/>
                            <PostNameBox>
                                <PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</PostName>
                                <PostTime>1시간 전</PostTime>
                            </PostNameBox>
                            <PostImg src="/images/Belling/PostImg.png"/>
                        </PostBox>

                        <PostBox>
                            <ProfileImg src="/images/Belling/Profile.png"/>
                            <PostNameBox>
                                <PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</PostName>
                                <PostTime>1시간 전</PostTime>
                            </PostNameBox>
                            <PostImg src="/images/Belling/PostImg.png"/>
                        </PostBox>

                        <PostBox>
                            <ProfileImg src="/images/Belling/Profile.png"/>
                            <PostNameBox>
                                <PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</PostName>
                                <PostTime>1시간 전</PostTime>
                            </PostNameBox>
                            <PostImg src="/images/Belling/PostImg.png"/>
                        </PostBox>

                        <PostBox>
                            <ProfileImg src="/images/Belling/Profile.png"/>
                            <PostNameBox>
                                <PostName>제목입니당제목이고요제가한번테스트를해보도록하겠습니다감사합니다</PostName>
                                <PostTime>1시간 전</PostTime>
                            </PostNameBox>
                            <PostImg src="/images/Belling/PostImg.png"/>
                        </PostBox>


                    </PostCotain>
                    
                </BellBox>
        </>
    );
}

const Background = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    z-index:3;
`

const BellBox = styled.div`
    position: fixed;
    z-index:4;
    top: 50px;
    border-radius: 5px;
    right: 230px;
    width: 430px;
    height: 500px;
    background-color: white;
    padding-right: 18px;
    padding-left: 18px;
    padding-top:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    outline:none;
    border: 1px solid rgba(0,0,0,0.1);
`

const BackImg = styled.img`
    position:absolute;
    margin-left:360px;
`

const BellLine = styled.span`
    width:109%;
    height:1px;
    background-color: rgba(0,0,0,0.1);
    margin-top:5px;
`

const PostCotain = styled.div`
    height:450px;
    overflow:auto;
    ::-webkit-scrollbar{
    width:0px;
    }
    ::-webkit-scrollbar-track{
        background-color:#E4E4E4;
    }
    ::-webkit-scrollbar-thumb{
        background-color:#303F9F;
    }
`

const PostBox = styled.div`
    width:380px;
    display:flex;
    margin-top:10px;
    margin-bottom:10px;
    
`

const ProfileImg = styled.img`
    width: 50px;
    height:50px;
    margin-right:10px;
`

const PostNameBox = styled.div`
    width:200px;
    display:flex;
    flex-direction:column;
`

const PostName = styled.span`
    font-size:14px;
    margin-bottom:10px;
`

const PostTime = styled.span`
    font-size:11px;
    color: #808080;
`

const PostImg = styled.img`
    width:100px;
    height:60px;
    margin-left:20px;
`

export default Belling;