import DirectionArrow from "../DirectionArrow/DirectionArrow"
import { ArrowContainer, InnerSliderContainer, OuterSliderContainer, SlideImage } from "../styled"

const Slider = () => {
  return (
    <OuterSliderContainer>
        <InnerSliderContainer height={'30rem'} width={'100vw'}>
            <SlideImage image={'https://cdn.pixabay.com/photo/2021/12/09/18/46/forest-6858884_960_720.jpg'}>
            <ArrowContainer>
            <DirectionArrow type={'prev'}/>
            <DirectionArrow type={'next'}/>
            </ArrowContainer>
            </SlideImage>
        </InnerSliderContainer>
    </OuterSliderContainer>
  )
}

export default Slider