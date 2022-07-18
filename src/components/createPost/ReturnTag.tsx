import * as S from './styled';
import React, { useState } from 'react';
import { PostRequestType } from '../../apis/Interface';

interface PropType {
  SetText: (Text: PostRequestType) => void;
  Text: PostRequestType;
}

export default function ReturnTag({ SetText, Text }: PropType) {
  const [Tags, setTag] = useState('');
  const ShowTag = Text.tags !== null ?  Text.tags.split(',') : [];
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const AddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.code === 'Enter' &&
      Tags !== '' &&
      event.nativeEvent.isComposing === false
    ) {
      SetText({ ...Text, tags: Text.tags !== '' ? Text.tags !== null ?  Text.tags +  ',' + Tags : Tags : Text.tags + Tags});
      setTag('');
    }
    if (event.code === 'Backspace' && Tags.length === 0) {
      ShowTag.pop();
      SetText({ ...Text, tags: ShowTag.join(",") });
    }
  };
  return (
    <>
      <S.TagLineBox>
        {ShowTag.map((item) => (
          item !== '' && <S.Tag>{item}</S.Tag>
        ))}
        <S.TagBox
          type="text"
          value={Tags}
          onChange={onChange}
          onKeyDown={AddTag}
          placeholder="태그를 입력해 주세요"
        />
      </S.TagLineBox>
    </>
  );
}
