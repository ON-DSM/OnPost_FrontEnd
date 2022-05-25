import { css } from "@emotion/react";

const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    ::-webkit-scrollbar{
      display:none;
    }
  }
`;

export default global;