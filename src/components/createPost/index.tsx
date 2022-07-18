import * as S from './styled';
import { PostRequestType } from '../../apis/Interface';
import useForm from '../../hooks/useForm';
import SubmitModal from './SubmitModal';
import { useEffect, useState } from 'react';
import ReturnTag from './ReturnTag';
import { useNavigate, useParams } from 'react-router';
import { GetterPostIn } from '../../apis/post/crud/get/PostIn';

function CreatePost() {
  const { id } = useParams();
  const Navi = useNavigate();
  const [OpenModal, SetOpenModal] = useState<boolean>(false);
  const [url, seturl] = useState<string>('');
  const { Text, handleChange, SetText } = useForm<PostRequestType>({
    title: '',
    email: '',
    profile: '',
    introduce: '',
    content: '',
    tags: '',
  });

  useEffect(() => {
    const Email = sessionStorage.getItem('email');
    if (Text.email === '' && Email !== '') {
      SetText({ ...Text, email: Email! });
    }
    if (id !== '0') {
      GetterPostIn(id).then((data) => {console.log(data.data);data.data && SetText(() => data.data)});
    }
    console.log(Text)
  }, []);

  return (
    <S.CreatePostBox>
      <S.InputText>
        <S.InputElementBox style={{padding: '70px 70px 0 70px',overflowY: 'scroll'}}>
          <S.TitleInput
          name="title"
          placeholder="제목을 입력해주세요"
          value={Text.title}
          onChange={handleChange}
        />
        <ReturnTag SetText={SetText} Text={Text} />
        <S.ContentInput
          name="content"
          placeholder="내용을 입력해주세요"
          value={Text.content}
          onChange={handleChange}
        />
        </S.InputElementBox> 
        <S.OperationBar>
          <span onClick={() => Navi(-1)} style={{ marginLeft: '30px' }}>
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
        <S.Pre >{Text.content}</S.Pre>
        <img style={{ width: '100%' }} />
      </S.PreviewText>
      {OpenModal && (
        <SubmitModal
          handleChange={handleChange}
          Text={Text}
          SetOpenModal={SetOpenModal}
          SetText={SetText}
          seturl={seturl}
          url={url}
          id={id}
        />
      )}
    </S.CreatePostBox>
  );
}

export default CreatePost;
