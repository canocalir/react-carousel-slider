import { useQuery } from "react-query";
import DirectionArrow from "../DirectionArrow/DirectionArrow";
import {
  ArrowContainer,
  InnerSliderContainer,
  OuterSliderContainer,
  SlideImage,
} from "../styled";
import { useState } from "react";

const Slider = () => {
  const getImagesData = async () => {
    const url = `https://picsum.photos/v2/list`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const [imageIndex, setImageIndex] = useState(0);

  const { isLoading, error, data } = useQuery("images", getImagesData);

  if (isLoading) return <div>Loading</div>;

  return (
    <OuterSliderContainer>
      <InnerSliderContainer height={"30rem"} width={"100vw"}>
        {data.map((img) => {
          return (
            <SlideImage key={img.id} move={imageIndex} image={img.download_url}>
              <ArrowContainer>
                <DirectionArrow
                  images={data}
                  imageIndex={imageIndex}
                  setImageIndex={setImageIndex}
                  type={"prev"}
                />
                <DirectionArrow
                  images={data}
                  imageIndex={imageIndex}
                  setImageIndex={setImageIndex}
                  type={"next"}
                />
              </ArrowContainer>
            </SlideImage>
          );
        })}
      </InnerSliderContainer>
    </OuterSliderContainer>
  );
};

export default Slider;
