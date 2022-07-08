import * as S from './style';
import { FormEvent, useState } from 'react';
import DropComment from './DropComment';
import { CommentType, SubCommentType } from '../../../apis/Interface';
import { DeleteComment } from '../../../apis/comment/deleteComment';

export default function Comment({ comments }: SubCommentType) {
  const [Open, setopen] = useState<boolean>(false);
  const [ComArray, setArray] = useState<CommentType[]>();

  const Delete = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    DeleteComment(comments.id)
  }
  return (
    <>
          <S.UserCommentBox>
            <S.UserImg src={comments.writer.profile} />
            <S.CommendBox>
              <S.UserName>{comments.writer.name}</S.UserName>
              <S.UserComment>{comments.content}</S.UserComment>
              <S.HideBox>
                <div onClick={() => setopen(!Open)}>
                  <S.HideTitle>
                    {comments.moreComment
                      ? `${comments.moreComment}개의 댓글`
                      : '댓글 달기'}
                  </S.HideTitle>

                  <S.HideImg src="/images/PostIn/minus.png" />
                </div>
                {comments.writer.email === sessionStorage.getItem('email') && (
                  <form onSubmit={Delete} style={{border: '0',outline: '0'}}>
                    <button >삭제</button>
                  </form>
                  
                )}
              </S.HideBox>
            </S.CommendBox>
          </S.UserCommentBox>
      {Open && (
        <DropComment id={comments.id} ComArray={ComArray} setArray={setArray} />
      )}
      <S.Line />
    </>
  );
}