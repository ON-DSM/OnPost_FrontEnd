import { useState, useEffect, useRef, useCallback, FormEvent } from 'react';
import { useRecoilValue } from 'recoil';
import { ShowComment } from '../../../apis/comment/commentShow';
import { CreateComment } from '../../../apis/comment/createComment/Comment';
import { DeleteComment } from '../../../apis/comment/deleteComment';
import { CommentType } from '../../../apis/Interface';
import { ProfileState } from '../../../recoil/proflie';
import { getToken } from '../../../utils/token';
import * as S from './style';

interface PropsType {
  comments: CommentType;
  DeleteCom: (e: FormEvent<HTMLFormElement>, id: number) => void;
}
interface PropsTypetwo {
  id: number;
  ComArray: CommentType[];
  setArray: (ComArray: CommentType[]) => void;
  setComcount: (commentCount: number) => void;
  commentCount: number;
}

export default function DropComment({
  id,
  ComArray,
  setArray,
  setComcount,
  commentCount,
}: PropsTypetwo) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [value, setValue] = useState<string>('');
  const [dum, setdum] = useState<number>(0);
  const user = useRecoilValue(ProfileState);
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const ShowCom = useCallback(
    () =>
      ShowComment(id).then((data) => {
        console.log(data);
        setArray(data.subComments);
      }),
    [ComArray]
  );

  const CreateCom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CreateComment(true, value, id).then((data) => setdum(() => data));
  };

  useEffect(() => {
    if (value !== '') {
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
      setArray([...ComArray, DEmo]);
      setComcount(commentCount + 1);
      setValue('');
    }
  }, [dum]);

  const DeleteCom = (e: FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setArray(ComArray.filter((d) => d.id !== id));
    DeleteComment(id);
    setComcount(commentCount - 1);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  useEffect(() => {
    ShowCom();
  }, []);

  return (
    <>
      <S.ReplyBox>
        {ComArray &&
          ComArray.map((com, i) => (
            <BigComment key={i} DeleteCom={DeleteCom} comments={com} />
          ))}
        {getToken().accessToken && getToken().refreshToken && (
          <form onSubmit={CreateCom}>
            <S.ReplyInput ref={textareaRef} value={value} onChange={textAreaChange} />
            <S.ReplyButton type={value === '' ? 'button' : 'submit'}>
              답글작성
            </S.ReplyButton>
          </form>
        )}
      </S.ReplyBox>
    </>
  );
}

function BigComment({ comments, DeleteCom }: PropsType) {
  return (
    <>
      <S.AllcommentBox>
        <S.UserCommentBox>
          <S.UserImg src={comments.writer.profile} />
          <S.CommendBox>
            <S.UserName>{comments.writer.name}</S.UserName>
            <S.UserComment>{comments.content}</S.UserComment>
            {comments.writer.email === sessionStorage.getItem('email') && (
              <form
                style={{ border: '0', outline: '0' }}
                onSubmit={(e) => DeleteCom(e, comments.id)}
              >
                <button style={{ all: 'unset', float: 'right' }}>
                  <img style={{cursor: 'pointer'}} src="/svg/Postin/RedTrasj.svg" />
                </button>
              </form>
            )}
          </S.CommendBox>
        </S.UserCommentBox>
      </S.AllcommentBox>
      <S.Line />
    </>
  );
}
