import { useState, useEffect, useRef, useCallback, ChangeEvent, FormEvent } from 'react';
import { ShowComment } from '../../../apis/comment/commentShow';
import { CreateComment } from '../../../apis/comment/createComment/Comment';
import { DeleteComment } from '../../../apis/comment/deleteComment';
import { CommentType } from '../../../apis/Interface';
import { getToken } from '../../../utils/token';
import * as S from './style';

interface PropsType {
  comments: CommentType;
}
interface PropsTypetwo {
  id: number;
  ComArray: CommentType[] | undefined;
  setArray: (ComArray: CommentType[]) => void;
}

export default function DropComment({ id, ComArray, setArray }: PropsTypetwo) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [value, setValue] = useState<string>('');
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value)
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
        {ComArray && ComArray.map((com) => <BigComment comments={com} />)}
        {getToken().accessToken && getToken().refreshToken && (
          <form onSubmit={() => CreateComment(true,value, String(id))} >
            <S.ReplyInput ref={textareaRef} onChange={textAreaChange} />
            <S.ReplyButton type={value ? "button" : 'submit'}>답글작성</S.ReplyButton>
          </form>
        )}
      </S.ReplyBox>
    </>
  );
}

function BigComment({ comments }: PropsType) {
  const Delete = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    DeleteComment(comments.id)
  }
  return (
    <S.AllcommentBox>
      <S.UserCommentBox>
        <S.UserImg src={comments.writer.profile} />
        <S.CommendBox>
          <S.UserName>{comments.writer.name}</S.UserName>
          <S.UserComment>{comments.content}</S.UserComment>
          {comments.writer.email === sessionStorage.getItem('email') && (
            <form onSubmit={Delete}>
              <button  style={{border: '0',outline: '0'}}>삭제</button>
            </form>
          )}
        </S.CommendBox>
      </S.UserCommentBox>
    </S.AllcommentBox>
  );
}
