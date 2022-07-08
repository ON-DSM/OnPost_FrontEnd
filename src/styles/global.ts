import { css } from '@emotion/react';

const global = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    overflow-x: none;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #303f9f;
    }
  }
`;

export default global;
