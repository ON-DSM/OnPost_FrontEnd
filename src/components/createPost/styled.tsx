import styled from "@emotion/styled";


export    const TempButton = styled.label`
   all: unset;
   color: #666ad1;
   cursor: pointer;
   font-size: 18px;
   margin-right: 40px;
   `;

export    const SubmitContent = styled.button`
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

export    const CreatePostBox = styled.div`
    display: flex;
    min-height: 100vh;
    `;

export    const PreviewText = styled.div`
        word-break: break-word;
        padding: 5rem;
        flex: 1 1 0%;
        overflow-y: auto;
    `;

export    const InputText = styled.div`
    width: 50%;
    height: 760px;
    padding: 70px;
    word-break: break-word;
    `;

export    const TitleInput = styled.input`
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

export    const ContentInput = styled.textarea`
    all: unset;
    width: 100%;
    min-height: 450px;
    padding-top: 20px;
    resize: none;
    `;

export    const OperationBar = styled.div`
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgb(0 0 0 / 10%) 0px -12px 12px -6px;
    `;

export    const TagLineBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    `;

export    const TagBox = styled.input`
    all: unset;
    width: 300px;
    `;

export    const Tag = styled.span`
    padding: 5px 10px 5px 10px;
    background-color: #666ad1;
    margin: 5px;
    border-radius: 50px;
    color: white;
    `;

export    const InputBox = styled.div`
    text-align: center;
    `;

export    const SubmitBtn = styled.button`
    all: unset;
    background-color: #303f9f;
    color: white;
    cursor: pointer;
    border-radius: 7px;
    width: 80px;
    text-align: center;
    height: 25px;
    `;

export    const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    `;

export    const SubmitModalBox = styled.form`
    background-color: #ffffff;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius: 6px;
    width: 500px;
    height: 400px;
    `;

export    const CancleBtn = styled.button`
    all: unset;
    color: #303f9f;
    cursor: pointer;
    font-weight: bold;
    `;

export    const Simplecontent = styled.textarea`
    resize: none;
    `;

export    const ImgBox = styled.div`
   width:200px;
   height:200px;
   `

export    const FileImg = styled.img`
        object-fit: cover;
        width: 200px;
        height: 200px;
        display: block;
        margin-bottom: 1.25rem;
    `