import styled from '@emotion/styled';

export const TempButton = styled.label`
  all: unset;
  color: #666ad1;
  cursor: pointer;
  font-size: 18px;
  margin-right: 40px;
`;

export const SubmitContent = styled.button`
  all: unset;
  background-color: #666ad1;
  width: 100px;
  text-align: center;
  border-radius: 7px;
  height: 40px;
  color: white;
  font-size: 18px;
  margin-right: 40px;
  cursor: pointer;
`;

export const CreatePostBox = styled.div`
  display: flex;
  position:relative;
  min-height: 100vh;
`;

export const PreviewText = styled.div`
  word-break: break-word;
  height: 750px;
  overflow-y: scroll;
  padding: 5rem;
  flex: 1 1 0%;
  ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #303f9f;
    }
`;

export const Pre = styled.pre`
  white-space: pre-wrap;
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    overflow-x: none;
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #303f9f;
    }
`

export const InputText = styled.div`
  width: 50%;
  height: 730px;
  word-break: break-word;
  
`;

export const InputElementBox = styled.div`
  height:680px;
  ::-webkit-scrollbar {
      display:none;
    }
`

export const TitleInput = styled.input`
  all: unset;
  width: 100%;
  min-height: 80px;
  height: auto;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 0 0 0;
  border-bottom: 6px solid #303f9f;
  resize: none;
  word-wrap: break-word;
`;

export const ContentInput = styled.textarea`
  all: unset;
  position: relative;
  z-index:0;
  width: 100%;
  min-height: 450px;
  padding-top: 20px;
  resize: none;
  ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #303f9f;
    }
`;

export const OperationBar = styled.div`
  z-index: 2;
  bottom: 0;
  left: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 10%) 0px -12px 12px -6px;
  background-color: white;
`;

export const TagLineBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const TagBox = styled.input`
  all: unset;
  height:43.6px;
  width: 300px;
`;

export const Tag = styled.span`
  padding: 5px 10px 5px 10px;
  background-color: #666ad1;
  margin: 5px;
  border-radius: 50px;
  color: white;
`;

export const InputBox = styled.div`
  text-align: center;
  margin-bottom:10px;
`;

export const SubmitBtn = styled.button`
  all: unset;
  background-color: #303f9f;
  color: white;
  cursor: pointer;
  margin-left:20px;
  border-radius: 7px;
  width: 80px;
  text-align: center;
  height: 25px;
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 106%;
  position: absolute;
  z-index: 2;
`;

export const SubmitModalBox = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  width: 450px;
  height: 450px;
`;

export const CancleBtn = styled.button`
  all: unset;
  color: #303f9f;
  cursor: pointer;
  font-weight: bold;
  margin-left:20px;
`;

export const Simplecontent = styled.textarea`
  overflow-y: scroll;
  ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #303f9f;
    }
  resize: none;
`;

export const ImgBox = styled.div`
  width: 200px;
  height: 200px;
  margin-top:20px;
`;

export const FileImg = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  display: block;
  margin-bottom: 1.25rem;
  
`;

export const InputLabel = styled.label`
  width: 90px;
  height: 25px;
  font-size: 14px;
  border: 2px solid #c4c4c4;
  border-radius: 5px;
  margin: 5px 0 10px 0;
  text-align: center;
  cursor: pointer;
`;
