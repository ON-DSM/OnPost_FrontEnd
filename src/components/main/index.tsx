import PostItem from "../Post/PostItem";
import styled from "@emotion/styled";
import { useState} from "react";
import { Link } from "react-router-dom";



function Main() {
  const [click,setclick] = useState(true);

  const blog = () =>{
    setclick(true);
  }

  const trade = () =>{
    setclick(false);
  }

  return (
    <>
    <MainContainer>
      <MainImg
        src={'/images/main/MainImage.png'}
        alt='메인배너'
      />
      <SortBox>
        <Blog onClick={blog}>
          Blog
          {click ? <EmBlog/> : null}
        </Blog>
        <TradeBox onClick={trade}>
          Trend
          {click ? null : <EmTrade/>}
        </TradeBox>
    </SortBox>
    </MainContainer>  
  
    <ReadContainer>
      <PostContainer>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </PostContainer>
    </ReadContainer>
  </>
  );
}

const MainImg = styled.img`
  width:100%;
`

const PostContainer = styled.div`
  width: 1340px;
  @media (max-width: 1353px){
    justify-content:center;
  }
  display:flex;
  flex-wrap:wrap;
`

const MainContainer = styled.div`
  position: relative;
  display:flex;
  padding-top:60px;
  flex-direction:column;
  align-items:center;
`;
const ReadContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
`



const SortBox = styled.div`
  margin-top:64px;
  margin-bottom:144px;
  width:480px;
  display:flex;
  justify-content:space-between;
`
const TradeBox = styled.div`
  font-size:32px;
`
const EmTrade = styled.div`
  position:absolute;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 16px solid black;
  margin-left:32px;
  margin-top:8px;
`;

const EmBlog = styled.div`
  position:absolute;
  border-left:11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 16px solid black;
  margin-left:24px;
  margin-top:8px;
`;

const Blog = styled.div`
  font-size:32px;
`;

export default Main;
