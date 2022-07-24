import styled from "styled-components"

const Container = styled.div`
    background-color: #1B9CFC;
    height: 36px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Announcement = () => {
    return (
        <div>
            <Container>
                Super Deal, get 50% off on all purchase.
            </Container>
        </div>
    )
}

export default Announcement;