import styled from "styled-components";

export const OuterSliderContainer = styled.div`
    display: flex;
    align-items:center;
    height: 100vh;
    overflow: hidden;
`

export const InnerSliderContainer = styled(OuterSliderContainer)`
    height: ${props => props.height};
    width: ${props => props.width};
`

export const ArrowContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

export const Arrow = styled.div`
    color: #ffffff;
    font-size: 3rem;
    cursor: pointer;
    &:hover{
        color: #b3b2b2;
        transition: 200ms ease-in;
    }
`

export const SlideImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0.2rem;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.5s ease-in;
    transform: translateX(-${props => props.move * 100}%);
`