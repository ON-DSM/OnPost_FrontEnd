import styled from "@emotion/styled";

export const Background = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    z-index:3;
`

export const BellBox = styled.div`
    position: fixed;
    z-index:4;
    top: 50px;
    border-radius: 5px;
    right: 230px;
    width: 430px;
    height: 500px;
    background-color: white;
    padding-right: 18px;
    padding-left: 18px;
    padding-top:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    outline:none;
    border: 1px solid rgba(0,0,0,0.1);
`

export const BackImg = styled.img`
    position:absolute;
    margin-left:360px;
`

export const BellLine = styled.span`
    width:109%;
    height:1px;
    background-color: rgba(0,0,0,0.1);
    margin-top:5px;
`

export const PostCotain = styled.div`
    height:450px;
    overflow:auto;
    ::-webkit-scrollbar{
    width:0px;
    }
    ::-webkit-scrollbar-track{
        background-color:#E4E4E4;
    }
    ::-webkit-scrollbar-thumb{
        background-color:#303F9F;
    }
`

export const PostBox = styled.div`
    width:380px;
    display:flex;
    margin-top:10px;
    margin-bottom:10px;
    
`

export const ProfileImg = styled.img`
    width: 50px;
    height:50px;
    margin-right:10px;
`

export const PostNameBox = styled.div`
    width:200px;
    display:flex;
    flex-direction:column;
`

export const PostName = styled.span`
    font-size:14px;
    margin-bottom:10px;
`

export const PostTime = styled.span`
    font-size:11px;
    color: #808080;
`

export const PostImg = styled.img`
    width:100px;
    height:60px;
    margin-left:20px;
`
