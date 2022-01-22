import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    // height: (100% - 180px);
    height: 10%;
    // margin-top: -240px;  
    margin-bottom: -180px;
    display: flex;
    position: relative;
    overflow: hidden;
    z-index: 1;
`;


export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: yellow;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    // opacity: 0.5;
    z-index: 3;
`;


export const Wrapper = styled.div`
    height: 100%;
    // max-width: 100%;
    display: flex;
    transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
    transition: all 1.5s ease-in-out;

`;



export const Slide = styled.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    // justify-content: flex-end;
    justify-content: center;
    top: 0;
    bottom: 0; 
`;


export const ImgContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    // max-width: 100%;
    // flex: 1

`;


export const Image = styled.img`
    display: flex;
    width: 100%;
    // height: 85%;
    // height: (100% - 180px);
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

`;


export const InfoContainer = styled.div`
    z-index: 3;
    width: 100%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // margin-top: -200px;
    top:0;
    bottom: 0;
    color: ${({white}) => (white ? '#fff' : '#000')};
    // background-color: black;
    // background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5));
    // background: linear-gradient(
    //     180deg,
    //     rgba(0,0,0,0.2) 0%,
    //     rgba(0,0,0,0.6) 100%),
    //     linear-gradient(
    //         180deg,
    //         rgba(0,0,0,0.2) 0%,
    //         transparent 100%);


    background: linear-gradient( 
        180deg
        , rgba(0,0,0,-0.8) 87%, rgba(0,0,0,0.6) 100%), linear-gradient( 
        180deg
        , rgba(0,0,0,0.2) 93%, transparent 100%);
`;




export const Title = styled.h1`
    font-size: 70px;
    text-align: center;
    position: relative;
`;


export const Desc = styled.p`
    font-size: 20px;
    margin: 50px 0;
    font-weight: 500;
    letter-spacing: 3px;


`;


export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: gold;
    outline: none;
    // cursor: pointer;
    border: none;
`; 

