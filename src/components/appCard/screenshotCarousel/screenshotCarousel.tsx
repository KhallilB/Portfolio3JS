import React, { createRef, useEffect, useRef } from "react";
import { Image, Row } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";

interface Props {
  imageUrls: string[];
}

const ScreenshotCarousel = (props: Props): JSX.Element => {
  const imageRefs = useRef(props.imageUrls.map(() => createRef()));

  useEffect(() => {
    console.log(imageRefs);
  });

  return (
    <Row gap={1} justify="center">
      <Carousel showStatus={false} autoPlay={true} interval={2500}>
        {props.imageUrls.map((url, index) => {
          return (
            <div key={index}>
              <Image
                autoResize={true}
                src={url}
                alt={`Screenshot ${index + 1}`}
                objectFit="cover"
              />
            </div>
          );
        })}
      </Carousel>
    </Row>
  );
};

export default ScreenshotCarousel;
