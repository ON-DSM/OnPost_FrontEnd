import * as S from './styled';
import Comment from '../comment/Comment';
import { useState, useEffect, useRef, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router';
import { GetterPostIn } from '../../../apis/post/crud/get/PostIn';
import { PostLike } from '../../../apis/post/crud/post/like';
import { getToken } from '../../../utils/token';
import { DeletePost } from '../../../apis/post/crud/delete/deletePost';
import { CreateComment } from '../../../apis/comment/createComment/Comment';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LastPost, ProfileState } from '../../../recoil/proflie';
import { ShowComment } from '../../../apis/comment/commentShow';
import { DeleteComment } from '../../../apis/comment/deleteComment';
import instance from '../../../apis/default';

export default function ReadingPost() {
  const { id } = useParams();
  const Navi = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLike, setLike] = useState<boolean>(true);
  const [value, setValue] = useState<string>('');
  const [dum, setdum] = useState<number>(0);
  const [Post, setPost] = useRecoilState(LastPost);

  const user = useRecoilValue(ProfileState);

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
      instance
        .post(isLike ? '/post/like' : '/post/unlike', Data, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        })
        .then(() => setLike(!isLike));
    }
  };

  const Delete = () => {
    DeletePost(Post.id);
    Navi('/');
  };

  const CreateCom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CreateComment(false, value, id).then((data) => setdum(() => data));
  };

  useEffect(() => {
    if (value !== '') {
      console.log(dum)
      const DEmo = {
        id: typeof dum === 'number' ? dum : 0,
        content: value,
        writer: {
          name: user.name,
          introduce: user.introduce,
          profile: typeof user.profile === 'string' ? user.profile : '',
          email: user.email,
        },
        createAt: '',
        moreComment: 0,
      };
      console.log(DEmo);
      setPost({ ...Post, comments: [...Post.comments, DEmo] });
      setValue('');
    }
  }, [dum]);

  const ComDel = (id: number) => {
    const arr = Post.comments.filter((d) => d.id !== id);
    setPost({ ...Post, comments: arr });
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
              .map((T, idx) => <S.PostTag key={idx}>{'#' + T}</S.PostTag>)}
        </S.PostTagBox>
        <S.PostImg src={Post.profile !== '' ? Post.profile : ''} />

        <S.PostInfo>{Post.content}</S.PostInfo>

        <S.PostButtonBar>
          {isLike ? (
            <S.PostButtonBox onClick={ClickLike}>
              <S.PostButtonIcon src="/svg/Postin/Like.svg" />
              <S.PostButtonName>
                {!isLike ? Post.like + 1 : Post.like}
              </S.PostButtonName>
            </S.PostButtonBox>
          ) : (
            <S.OtherButtonBox onClick={ClickLike}>
              <S.PostButtonIcon
                style={{ opacity: '100%' }}
                src="/svg/Postin/Like3.svg"
              />
              <S.PostButtonName>
                {!isLike ? Post.like + 1 : Post.like}
              </S.PostButtonName>
            </S.OtherButtonBox>
          )}

          {sessionStorage.getItem('email') === Post.writer.email && (
            <S.ButtonCombine>
              <S.PostButtonBox
                onClick={() => Navi(`/post/CreatePostPage/${Post.id}`)}
              >
                <S.PostButtonName>수정하기</S.PostButtonName>
                <S.PostButtonIcon src="/svg/Postin/Write.svg" />
              </S.PostButtonBox>
              <S.PostButtonBox onClick={Delete}>
                <S.PostButtonName>삭제하기</S.PostButtonName>
                <S.PostButtonIcon src="/svg/Postin/TrashCan.svg" />
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
              <form onSubmit={(e) => value !== '' && CreateCom(e)}>
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
              <Comment comments={comment} ComDel={ComDel} />
            ))}
          </S.CenterInfoBox>
        </S.CenterBox>
      </S.ProfileContainer>
    </S.MainContainer>
  );
}
