import * as S from './style';
import { useState } from 'react';
import DropComment from './DropComment';
import axios from 'axios';
import { comment } from '../../../apis/comment/commentShow';

type OpenType = {
  id: number;
  open: boolean;
};


export default function Comment() {
  const [Data,Dataset] = useState([
      
  ]);

  const [open, setopen] = useState<OpenType>({
    id: 0,
    open: false,
  });
  return (
    <S.AllcommentBox>
          <>
            <S.UserCommentBox>
              <S.UserImg src="/images/PostIn/ProfileImg.png" />
              <S.CommendBox>
                <S.UserName>소환식</S.UserName>
                <S.UserComment>
                  응ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                </S.UserComment>
                <S.HideBox>
                  <S.HideTitle>댓글 달기</S.HideTitle>
                  <S.HideImg src="/images/PostIn/minus.png" />
                </S.HideBox>
              </S.CommendBox>
            </S.UserCommentBox>
          </>
    </S.AllcommentBox>
  );
}
