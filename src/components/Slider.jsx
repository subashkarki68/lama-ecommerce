import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
    height:100vh;
    background-color: #1B9CFC;
    position: relative;
`;
const Arrow = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 50%;
    opacity: 0.5;
    cursor:pointer;
    background-color: #FFFFFF;
    &:hover{
        opacity: 1;
    }
    left: ${(props) => props.direction === 'left' && "30px"};
    right: ${(props) => props.direction === 'right' && "30px"};
`;
const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowBackIosNewOutlinedIcon />
            </Arrow>
            <Arrow direction="right">
                <ArrowForwardIosOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider;
