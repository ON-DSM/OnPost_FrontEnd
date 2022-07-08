import * as S from './styled';
import Comment from '../comment/Comment';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { GetterPostIn } from '../../../apis/post/crud/get/PostIn';
import { PostLike } from '../../../apis/post/crud/post/like';
import { getToken } from '../../../utils/token';
import { DeletePost } from '../../../apis/post/crud/delete/deletePost';
import { CreateComment } from '../../../apis/comment/createComment/Comment';
import { useRecoilState } from 'recoil';
import { LastPost } from '../../../recoil/proflie';
import { ShowComment } from '../../../apis/comment/commentShow';
import { DeleteComment } from '../../../apis/comment/deleteComment';
import instance from '../../../apis/default';

export default function ReadingPost() {
  const { id } = useParams();
  const Navi = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLike, setLike] = useState<boolean>(true);
  const [value, setValue] = useState<string>('');
  const [Post, setPost] = useRecoilState(LastPost);

  const CommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  const ClickLike = () => {
      if (getToken().accessToken && getToken().refreshToken) {
        const Data = {
          email: sessionStorage.getItem('email'),
          postId: Post.id,
        };
        console.log(Data);
        instance.post(isLike ? '/post/like' : '/post/unlike', Data, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        }).then(() => setLike(!isLike));
      }
    ComDel(51, 1);
  };

  const Delete = () => {
    DeletePost(Post.id);
    Navi('/');
  };

  const ComDel = (id: number, index: number) => {
    const arr = Post.comments.filter((d, i) => index !== i);
    ///setPost({...Post,comments: arr})
    console.log(arr);
    console.log(Post.comments);
    DeleteComment(id);
  };

  useEffect(() => {
    GetterPostIn(id).then((data) => {
      const Data = data.data;
      setPost(() => Data);
      !Data.doLike &&
        setPost((setdata) => {
          return { ...setdata, like: Data.like - 1 };
        });
      setLike(() => Data.doLike);
      console.log(Data);
    });
    console.log(Post.profile);
  }, []);

  return (
    <S.MainContainer>
      <S.MainCenter>
        <S.PostName>{Post.title}</S.PostName>
        <S.PostTime>{Post.createAt}</S.PostTime>
        <S.PostTagBox>
          {Post.tags !== null &&
            Post.tags
              .split(',')
              .map((T, idx) => <S.PostTag key={idx}>{T}</S.PostTag>)}
        </S.PostTagBox>
        <S.PostImg src={Post.profile !== '' ? Post.profile : ''} />

        <S.PostInfo>{Post.content}</S.PostInfo>

        <S.PostButtonBar>
          <S.PostButtonBox
            onClick={ClickLike}
            style={{ backgroundColor: !isLike ? '#86DFFF' : '' }}
          >
            <S.PostButtonIcon src="/images/PostIn/Heart.svg" />
            <S.PostButtonName>
              {!isLike ? Post.like + 1 : Post.like}
            </S.PostButtonName>
          </S.PostButtonBox>

          {sessionStorage.getItem('email') === Post.writer.email && (
            <S.ButtonCombine>
              <S.PostButtonBox>
                <S.PostButtonName
                  onClick={() =>
                    Navi(`/post/CreatePostPage/recent=:${Post.id}`)
                  }
                >
                  수정하기
                </S.PostButtonName>
                <S.PostButtonIcon src="/images/PostIn/Write.png" />
              </S.PostButtonBox>
              <S.PostButtonBox>
                <S.PostButtonName onClick={Delete}>삭제하기</S.PostButtonName>
                <S.PostButtonIcon src="/images/PostIn/Trash.png" />
              </S.PostButtonBox>
            </S.ButtonCombine>
          )}
        </S.PostButtonBar>
      </S.MainCenter>
      <S.ProfileContainer>
        <S.CenterBox>
          <S.CenterInfoBox>
            <S.ProfileBox>
              <S.ProfileImg src={Post.writer.profile} />
              <S.ProfileInfo>
                <S.ProfileName>{Post.writer.name}</S.ProfileName>
                <S.ProfileSubName>{Post.writer.introduce}</S.ProfileSubName>
              </S.ProfileInfo>
            </S.ProfileBox>
            <S.Line />
            <S.CommentSum>
              <S.Num>{Post.comments.length}</S.Num>개의 댓글
            </S.CommentSum>
            {getToken().accessToken && getToken().refreshToken && (
              <form
                onSubmit={() => value !== '' && CreateComment(false, value, id)}
              >
                <S.CommentInput
                  onChange={CommentChange}
                  ref={textareaRef}
                  value={value}
                />
                <S.CommentButton type={value === '' ? 'button' : 'submit'}>
                  댓글 작성
                </S.CommentButton>
              </form>
            )}
            {Post.comments.map((comment) => (
              <Comment comments={comment} />
            ))}
          </S.CenterInfoBox>
        </S.CenterBox>
      </S.ProfileContainer>
    </S.MainContainer>
  );
}
