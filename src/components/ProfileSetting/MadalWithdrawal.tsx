import styled from "@emotion/styled";

export default function MadalWithdrawal(){
    return(
        <MainContainer >
            <TitleName>
                온포스트를 탈퇴 하시겠습니까?
            </TitleName>
            <Titleimg src="/images/Modal/ExitOnpost.png" />
            <span style={{marginTop: '10px',color: "#d4d4d4"}}>버튼 클릭시 바로 삭제됩니다</span>
            <ExitBox>
                <ExitName>탈퇴 후 모든 개인정보는 삭제됩니다.</ExitName>
                <ExitButton>탈퇴</ExitButton>
            </ExitBox>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width:100%;
    height:100%;
    margin-left:-25px;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const TitleName = styled.span`
    font-size:26px;
    font-weight:bold;
    margin-bottom:20px;
`

const Titleimg = styled.img`
    width:400px;
    margin-top:20px;
`

const ExitBox = styled.div`
    margin-top:100px
`

const ExitName = styled.span`
    font-size:18px;
    color: #D30000;
    margin-right:20px;
`

const ExitButton = styled.button`
    font-size:16px;
    border-radius:5px;
    background-color:white;
    width:50px;
    :hover{
        background-color: #f9d2d2;
        border: 2px solid #D30000;
        color: #D30000
    }
`