import { useEffect, useState } from "react"
import DirectionArrow from "../DirectionArrow/DirectionArrow"
import { ArrowContainer, InnerSliderContainer, OuterSliderContainer, SlideImage } from "../styled"

const Slider = () => {
  const [images, setImages] = useState([])
  const [imageIndex, setImageIndex] = useState(0)
  const fetchImagesData = async () => {
    const url = `https://picsum.photos/v2/list`
    const res = await fetch(url)
    const data = await res.json()
    setImages(data)
  }
  useEffect(() => {
    fetchImagesData()
  },[])


  return (
    <OuterSliderContainer>
          <InnerSliderContainer height={'30rem'} width={'100vw'}>
            {images?.map((img, index) => {
              return (
                <SlideImage key={index} move={imageIndex} image={img.download_url}>
            <ArrowContainer>
            <DirectionArrow images={images} imageIndex={imageIndex} setImageIndex={setImageIndex} type={'prev'}/>
            <DirectionArrow images={images} imageIndex={imageIndex} setImageIndex={setImageIndex} type={'next'}/>
            </ArrowContainer>
            </SlideImage>
              )
            })}
        </InnerSliderContainer>
    </OuterSliderContainer>
  )
}

export default Slider