import * as S from './style';
import { FormEvent, useEffect, useState } from 'react';
import DropComment from './DropComment';
import { CommentType } from '../../../apis/Interface';

interface PropsType{
  comments: CommentType;
  ComDel: (id: number) => void;
}

export default function Comment( {comments,ComDel } : PropsType) {
  const [Open, setopen] = useState<boolean>(false);
  const [commentCount,setComcount] = useState<number>(comments.moreComment);
  const [ComArray, setArray] = useState<CommentType[]>();

  const Delete = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ComDel(comments.id)
  }

  useEffect(()=>{
    setComcount(comments.moreComment)
  },[comments.moreComment])
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
                    {commentCount
                      ? `${commentCount}개의 댓글`
                      : '댓글 달기'}

                  </S.HideTitle>

                  <S.HideImg src={`/images/PostIn/${Open ? "minus.png" : "plus.png"}`} />
                </div>
                {comments.writer.email === sessionStorage.getItem('email') && (
                  <form onSubmit={Delete} style={{border: '0',outline: '0'}}>
                    <button style={{all: 'unset',cursor: 'pointer'}} ><img src='/svg/Postin/RedTrasj.svg'/></button>
                  </form>
                  
                )}
              </S.HideBox>
            </S.CommendBox>
          </S.UserCommentBox>
      {Open && (
        <DropComment setComcount={setComcount} id={comments.id} ComArray={ComArray ? ComArray : []} commentCount={commentCount} setArray={setArray} />
      )}
      <S.Line />
    </>
  );
}