import * as S from './styled';
import { PostRequestType } from '../../apis/Interface';
import useForm from '../../hooks/useForm';
import SubmitModal from './SubmitModal';
import { useState } from 'react';
import ReturnTag from './ReturnTag';

function CreatePost() {
  const [OpenModal, SetOpenModal] = useState<boolean>(false);
  const [url,seturl] = useState<string>('');
  const { Text, handleChange,SetText } = useForm<PostRequestType>({
    title: '',
    email:'',
    profile: '',
    introduce: '',
    context: '',
    tags: '',
  });



  return (
    <S.CreatePostBox>
      <S.InputText>
        <S.TitleInput
          name="title"
          placeholder="제목을 입력해주세요"
          onChange={handleChange}
        />
        <ReturnTag SetText={SetText} Text={Text}/>
        <S.ContentInput
          placeholder="내용을 입력해주세요"
          onChange={handleChange}
        />
        <S.OperationBar>
          <span style={{ marginLeft: '30px' }}>
            <img width="12" height="13.71" src="/svg/BackSpaceArrow.svg" />
            뒤로가기
          </span>
          <span>
            <S.SubmitContent onClick={() => SetOpenModal(true)}>
              제출하기
            </S.SubmitContent>
          </span>
        </S.OperationBar>
      </S.InputText>
      <S.PreviewText>
        <h1>{Text.title}</h1>
        <span>{Text.context}</span>
        <img style={{width:"100%"}}/>
      </S.PreviewText>
      {OpenModal && (
        <SubmitModal 
          handleChange={handleChange}
          Text={Text}
          SetOpenModal={SetOpenModal}
          SetText={SetText}
          seturl={seturl}
          url={url}
        />
      )}
    </S.CreatePostBox>
  );
}

export default CreatePost;
