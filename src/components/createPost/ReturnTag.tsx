import styled from '@emotion/styled';
import React, { useState } from 'react';

interface TagType {
  value: string;
}

export default function ReturnTag() {
  const [Tags, setTag] = useState('');
  const [TagState, setTagState] = useState<TagType[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const AddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.code === 'Enter' &&
      Tags !== '' &&
      event.nativeEvent.isComposing === false
    ) {
      const Child = {
        value: Tags,
      };
      setTagState([...TagState, Child]);
      setTag('');
    }
    if (event.code === 'Backspace' && Tags.length === 0) {
      setTagState(TagState.filter((Tag,index) => index < TagState.length - 1))
    }
  };
  return (
    <>
      <TagLineBox>
        {TagState.map((item) => (
          <Tag>{item.value}</Tag>
        ))}
        <TagBox
          type="text"
          value={Tags}
          onChange={onChange}
          onKeyDown={AddTag}
          placeholder="태그를 입력해 주세요"
        />
      </TagLineBox>
    </>
  );
}

const TagLineBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const TagBox = styled.input`
  all: unset;
  width: 300px;
`;

const Tag = styled.span`
  padding: 5px 10px 5px 10px;
  background-color: #666ad1;
  margin: 5px;
  border-radius: 50px;
  color: white;
`;
