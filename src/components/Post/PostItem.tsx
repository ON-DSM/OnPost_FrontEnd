import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PostList } from '../../apis/Interface';

interface PT {
  Obj: PostList;
}

export default function PostItem({ Obj }: PT) {
  return (
    <>
      <PostBox  to={`PostName/${Obj.id}`}>
        <PostImgBox>
          <PostImg  width={170} height={170} src={Obj.profileImage} />
          <PostDay>{Obj.createAt}</PostDay>
        </PostImgBox>

        <PostDetailBox>
          <PostNameBox>
            <PostName>{Obj.title}</PostName>
            <PostsubName>{Obj.introduce}</PostsubName>
          </PostNameBox>

          <PostTagBox>
            {Obj.tags ? (
              Obj.tags
                .split(',')
                .map((e, index) => <PostTag key={index}>{"#"+e}</PostTag>)
            ) : (
              <span style={{ display: 'block', height: '23.2px' }} />
            )}
          </PostTagBox>

          <PostLine />

          <PostProfileBox>
            <PostUserBox>
              <PostProfileImg src={Obj.writer.profile} />
              <PostProfileName>{Obj.writer.name}</PostProfileName>
            </PostUserBox>

            <PostHeartBox>
              <PostHeartImg src="images/main/PostHeart.png" />
              <PostHeartsum>{Obj.like}</PostHeartsum>
            </PostHeartBox>
          </PostProfileBox>
        </PostDetailBox>
      </PostBox>
    </>
  );
}

const PostBox = styled(Link)`
  width: 608px;
  height: 216px;
  margin: 30px 30px 80px 30px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

const PostImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostImg = styled.img`
  width: 176px;
  height: 176px;
  border-radius: 5px;
  object-fit: cover;
`;

const PostDay = styled.span`
  font-size: 16px;
  color: #888888;
  margin-top: 8px;
`;

const PostDetailBox = styled.div`
  width: 400px;
  border-radius: 5px;
  border: 1px solid #bababa;
`;

const PostNameBox = styled.div`
  margin-left: 24px;
  margin-top: -5.6px;
  padding-top:16px;
  display: flex;
  flex-direction: column;
  height: 128px;
`;

const PostName = styled.span`
  font-size: 18px;
  color: black;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 8px;
`;

const PostsubName = styled.span`
  font-size: 14px;
  color: #777777;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const PostTagBox = styled.div`
  margin-left: 24px;
  height: 43.2px;
  text-overflow: ellipsis;
   overflow: hidden;
   word-break: break-word;
    display:flex;
    flex-wrap: wrap;
`

const PostTag = styled.span`
  font-size: 14px;
  color: #666ad1;
  margin-right: 1rem;
`;

const PostLine = styled.div`
  width: 384px;
  margin-left: 8px;
  margin-top: 6px;
  border-bottom: 1px solid #bababa;
`;

const PostProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 24px;
  width: 352px;
`;
const PostUserBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const PostProfileImg = styled.img`
  margin-right: 8px;
  border-radius: 14px;
  object-fit:cover;
  width: 28px;
  height: 28px;
`;

const PostProfileName = styled.span`
  font-size: 14px;
  color: #777777;
`;

const PostHeartBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const PostHeartsum = styled.span`
  font-size: 14px;
  color: black;
`;

const PostHeartImg = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;
