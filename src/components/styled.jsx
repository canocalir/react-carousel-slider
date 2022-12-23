import styled from "styled-components";

export const OuterSliderContainer = styled.div`
    display: flex;
    align-items:center;
    width: max-content;
    height: 100vh;
`

export const InnerSliderContainer = styled(OuterSliderContainer)`
    height: ${props => props.height};
    /* width: ${props => props.width}; */
`

export const ArrowContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
`

export const Arrow = styled.div`
    color: #ffffff;
    font-size: 3rem;
    padding: 2rem;
    cursor: pointer;
    &:hover{
        color: #b3b2b2;
        transition: 200ms ease-in;
    }
`

export const SlideImage = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    background: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0.2rem;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 1s ease-in;
    transform: translateX(-${props => props.move * 100}%);
`