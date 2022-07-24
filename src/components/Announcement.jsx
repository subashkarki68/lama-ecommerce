import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";


const Container = styled.div`
    background-color: #1B9CFC;
    height: 36px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    // if close button is clicked then display none
    display: ${(props) => props.closeAnnouncement && "none"};
`;
const SuperText = styled.span`
    flex: 1;
    text-align: center;
`;
const CloseButton = styled(CloseIcon)`
    color: #fff;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
`;

const Announcement = () => {
    //This state is used to close the announcement if close button is clicked
    const [isAnnouncementClosed, setAnnouncementClosed] = useState(false);

    return (
        <div>
            <Container closeAnnouncement={isAnnouncementClosed}>
                <SuperText>Super Deal, get 50% off on all purchase.</SuperText>
                <CloseButton onClick={() => setAnnouncementClosed(true)} />
            </Container>
        </div>
    )
}

export default Announcement;