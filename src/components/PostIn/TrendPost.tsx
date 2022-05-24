import styled from "@emotion/styled";

export default function TrendPost(){
    return(
        <MainPostBar>
            <TrendPostTitle>최근 인기있는 게시물</TrendPostTitle>
            <MainPostBox>
                <TrendPostImg src="/images/PostIn/TrendPost.png"/>
                <TrendPostInfo>
                    <TrendPostName>즐겁다겁즐</TrendPostName>
                    <TrendPostHeartBox>
                        <TrendPostHeartImg src="/images/PostIn/Heart.svg"/>
                        <TrendPostHeartSum>200</TrendPostHeartSum>
                    </TrendPostHeartBox>
                    <TrendPostTagBox>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                         <TrendPostTag>#태그</TrendPostTag>
                    </TrendPostTagBox>
                </TrendPostInfo>
            </MainPostBox>

            <MainPostBox>
                <TrendPostImg src="/images/PostIn/TrendPost.png"/>
                <TrendPostInfo>
                    <TrendPostName>즐겁다겁즐</TrendPostName>
                    <TrendPostHeartBox>
                        <TrendPostHeartImg src="/images/PostIn/Heart.svg"/>
                        <TrendPostHeartSum>200</TrendPostHeartSum>
                    </TrendPostHeartBox>
                    <TrendPostTagBox>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                         <TrendPostTag>#태그</TrendPostTag>
                    </TrendPostTagBox>
                </TrendPostInfo>
            </MainPostBox>

            <MainPostBox>
                <TrendPostImg src="/images/PostIn/TrendPost.png"/>
                <TrendPostInfo>
                    <TrendPostName>즐겁다겁즐asdasdasdasdasdasdasdasd</TrendPostName>
                    <TrendPostHeartBox>
                        <TrendPostHeartImg src="/images/PostIn/Heart.svg"/>
                        <TrendPostHeartSum>200</TrendPostHeartSum>
                    </TrendPostHeartBox>
                    <TrendPostTagBox>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                        <TrendPostTag>#태그</TrendPostTag>
                         <TrendPostTag>#태그</TrendPostTag>
                    </TrendPostTagBox>
                </TrendPostInfo>
            </MainPostBox>

        </MainPostBar>
    );   
}

const MainPostBar = styled.div`
    width:400px;
    height:500px;

    display:flex;
    flex-direction:column;
    align-items:center;
`

const MainPostBox = styled.div`
    background-color: white;
    width:300px;
    display:flex;
    margin:15px;
`

const TrendPostTitle = styled.span`
    font-size:20px;
`

const TrendPostInfo = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
    padding-top:3px;
`

const TrendPostName = styled.span`
    height:36px;
    font-size:14px;
    font-weight:bold;
    display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const TrendPostImg = styled.img`
    width:80px;
    height:80px;
`

const TrendPostHeartBox = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-top:8px;
`

const TrendPostHeartImg = styled.img`
    margin-right:10px;
    width:18px;
    height:16px;
`

const TrendPostHeartSum = styled.span`
    font-size:14px;
`

const TrendPostTagBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    height:21px;
    font-size: 18px;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

const TrendPostTag = styled.span`
    margin-right:10px;
    font-size:14px;
    color:#303F9F;
`
