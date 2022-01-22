import React, {useState} from 'react';
import './hero.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import Shoes from '../../assets/slide/brown_shoes.jpg';
import Girl from '../../assets/slide/happy_girl.jpg';
import Bag from '../../assets/slide/pink_bag.jpg'
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from './herostyles';






const Hero = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }

        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }



    return (

        <Container>

            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                <Slide>
                    <ImgContainer>
                        <Image src={Shoes} />
                    </ImgContainer>


                    <InfoContainer white>
                            <Title>SUMMER SALE</Title>

                            <Desc>
                                DON'T COMPROMISE ON STYLE! 
                                <br /> 
                                GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>

                            <Button>SHOP NOW</Button>
    
                    </InfoContainer>

                </Slide>
                


                <Slide>
                    <ImgContainer>
                        <Image src={Bag} />
                    </ImgContainer>


                    <InfoContainer white>
                            <Title>SUMMER SALE</Title>

                            <Desc>
                                DON'T COMPROMISE ON STYLE! 
                                <br /> 
                                GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>

                            <Button>SHOP NOW</Button>
    
                    </InfoContainer>

                </Slide>


                <Slide>
                    <ImgContainer>
                        <Image src={Girl} />
                    </ImgContainer>


                    <InfoContainer>
                            <Title>SUMMER SALE</Title>

                            <Desc>
                                DON'T COMPROMISE ON STYLE! 
                                <br /> 
                                GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>

                            <Button>SHOP NOW</Button>
    
                    </InfoContainer>

                </Slide>

            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Hero;

