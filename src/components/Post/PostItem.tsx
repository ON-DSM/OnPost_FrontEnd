import Image from "next/image";
import styled from "@emotion/styled";

export default function PostItem() {
    return (
        <PostBox>
          <PostImgBox>
            <PostImg width={170} height={170} src="/imges/main/PostItemImg"/>
            <PostDay>2022-2-24</PostDay>
          </PostImgBox>

          <PostDetailBox>
            <PostNameBox>
              <PostName>
              별똥별과 비슷한 인공위성 잔해묾ㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㄴ
              </PostName>
              <PostsubName>
              인공위성이 수명을 다하여 떨어질 때 별똥별과 비슷한 형상을 띈다고 한다 
              오늘 한 번 알아보자 안녕하십니까 저는 테스트를 하기위해 찾아온 김선생
              이라고 합니다 잘 부탁드립니다 오늘은 제가 재미있는 테스트를 하나 해보려 
              하는 데요? 한번 즐겁게 해봅시다 감사합니다 
              </PostsubName>
            </PostNameBox>
            
            <PostTagBox>
              <PostTag>#뒤죽</PostTag>
              <PostTag>#박죽</PostTag>
              <PostTag>#별자리</PostTag>
              <PostTag>#뒤죽</PostTag>
              <PostTag>#박죽</PostTag>
              <PostTag>#별자리</PostTag>
              <PostTag>#뒤죽</PostTag>
              <PostTag>#박죽</PostTag>
              <PostTag>#별자리</PostTag>
            </PostTagBox>

             <PostLine />

             <PostProfileBox>
              <PostUserBox>
                <PostProfileImg src="/imges/main/PostItemImg" />
                <PostProfileName>
                  나아키인베
                </PostProfileName>
              </PostUserBox>


              <PostHeartBox>
                <PostHeartImg src="images/main/PostHeart"/>
                <PostHeartsum>
                  200
                </PostHeartsum>
              </PostHeartBox>
             </PostProfileBox>
          </PostDetailBox>
         
        </PostBox>
    );
}



const PostBox = styled.div`
  width:608px;
  height:216px;
  margin-bottom:100px;
  display:flex;
  justify-content:space-between;
`

const PostImgBox = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const PostImg = styled.img`
  width:176px;
  height:176px;
`

const PostDay = styled.span`
  font-size:16px;
  color: #888888;
  margin-top:8px;
`

const PostDetailBox = styled.div`
  width:400px;
  border-radius: 5px;
  border: 1px solid #BABABA;
`

const PostNameBox = styled.div`
  margin-left:24px;
  margin-top:16px;
  display:flex;
  flex-direction:column;
  height:128px;
`

const PostName = styled.span`
  font-size:18px;
  font-weight:bold;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
  margin-bottom:8px;
`

const PostsubName = styled.span`
  font-size:14px;
  color: #777777;
  overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical; 
`

const PostTagBox = styled.div`
  margin-left:24px;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
`

const PostTag = styled.span`
  font-size:14px;
  color: #666AD1;
  margin-right:1rem;
`

const PostLine = styled.div`
  width:384px;
  margin-left:8px;
  margin-top:6px;
  border-bottom: 1px solid #BABABA;
`

const PostProfileBox = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-left:24px;
  width:352px;
`
const PostUserBox = styled.div`
  height:40px;
  display:flex;
  align-items:center;
`

const PostProfileImg = styled.img`
  margin-right:8px;
  border-radius:4px;
  width: 28px;
  height: 28px;
`

const PostProfileName = styled.span`
  font-size:14px;
`

const PostHeartBox = styled.div`
  height:40px;
  display:flex;
  align-items: center;
`

const PostHeartsum = styled.span`
  font-size:14px;
`

const PostHeartImg = styled.img`
  margin-right:8px;
  width:16px;
  height:16px;
`
