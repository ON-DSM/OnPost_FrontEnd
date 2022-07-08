import styled from "@emotion/styled";

export const ButtonBox = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
`


export const Line = styled.span`
    height:1px;
    margin-bottom:10px;
    margin-top:50px;
    background-color:#999999;
`

export const UserCommentBox = styled.pre`
    display:flex;
    flex-direction:row;
    margin:50px 0 25px 0;
`

export const UserImg = styled.img`
    width:50px;
    height:50px;
    border-radius:50px;
`

export const CommendBox = styled.div`
    width:730px;
    margin:0 0 0 20px;
    overflow-wrap: break-word;
`

export const UserName = styled.span`
    font-weight:bold;
    margin-bottom:50px;
`

export const UserComment = styled.div`
    margin-top:10px;
`

export const HideBox = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-top:30px;
`

export const HideImg = styled.img`
    width:14px;
    margin:4px 0 0 8px;
`

export const HideTitle = styled.span`
    font-size:15px;
    font-weight:bold;
    color:#303F9F;
`

export const ReplyBox = styled.div`
    padding:0 30px 20px 30px;
    background-color:#F5F7FE;
    border: 1px solid black;
    border-radius:10px;
    margin-bottom:25px;   
`

export const ReplyInput = styled.textarea`
    width:100%;
    min-height:80px;
    margin:20px 0 10px 0;
    padding:10px 10px 10px 20px;
    font-size:14px;
    border-radius:8px;
    background-color: white;
    border: 2px solid #303F9F;
    
    resize:none;
`

export const ReplyButton = styled.button`
    width:100px;
    height:30px;
    float: right;
    font-size:14px;
    font-weight:bold;
    border-radius:8px;
    background-color:#E4EAFF;
    color: #303F9F;
    border: 2px solid #303F9F;
    :hover{
        background-color:#C3D0FE;
    }
`


export const AllcommentBox = styled.pre`
    
`