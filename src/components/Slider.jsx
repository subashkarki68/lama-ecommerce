import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SlickSlider from "react-slick";
import SliderData from "../data/SliderData"
import { useRef } from 'react';

const Container = styled.div`
    height:100vh;
    position: relative;
    margin: auto;
    overflow: hidden;
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
const Slide = styled.div`
    display: flex;
    height: 100vh;
`;
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`;
const Image = styled.img`
    border-top-right-radius: 2%;
    border-bottom-right-radius: 2%;
    object-fit: cover;
    height: 80%;
    flex: 1;
`;
const InfoContainer = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 30px;
`;
const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 30px;
`;
const Description = styled.p`
    font-size: 20px;
    margin-bottom: 15px;
`;
const Button = styled.button`
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 15px;
    color: #fff;
    background-color: #1B9CFC;
    border-radius: 3px;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        background-color: #000;
    }
`;
const Slider = () => {
    const sliderRef = useRef();

    var slickSliderSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Container>
            <SlickSlider {...slickSliderSettings} ref={sliderRef}>
                {SliderData.map(function (item) {
                    return (
                        <Slide>
                            <Wrapper>
                                <Image src={item.imageURL ? item.imageURL : ""} />
                                <InfoContainer>
                                    <Title>{item.title ? item.title : ""}</Title>
                                    <Description>{item.desc ? item.desc : ""}</Description>
                                    <Button onClick={() => console.log('clicked')}>Shop Now</Button>
                                </InfoContainer>
                            </Wrapper>
                        </Slide>
                    )
                })}

            </SlickSlider>
            <Arrow direction="left" onClick={() => sliderRef.current.slickPrev()}>
                <ArrowBackIosNewOutlinedIcon />
            </Arrow>
            <Arrow direction="right" onClick={() => sliderRef.current.slickNext()}>
                <ArrowForwardIosOutlinedIcon />
            </Arrow>
        </Container >
    )
}

export default Slider;
