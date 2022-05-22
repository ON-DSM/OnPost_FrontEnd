import Image from "next/image";
import styled from "@emotion/styled";

export default function ModalFollow(){
    return(
        <MainContainer>
            <FollowFollower>

            </FollowFollower>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const FollowFollower = styled.div`
    width:66%;
    display:flex;
    flex-direction:row;
    justify-content:center;
`

const FollowFollowerName = styled.span`
    
`

const FollowFollowerLine = styled.span`
    
`

const FollowContain = styled.div`
    
`

const FollowLine = styled.span`
    
`

const FollowBox = styled.div`
    
`

const FollowImg = styled(Image)`
    
`

const FollowName = styled.span`
    
`

const FolowSubName = styled.span`
    
`

const FollowButton = styled.button`
    
`