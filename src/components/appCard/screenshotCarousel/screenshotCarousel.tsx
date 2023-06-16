import React, { createRef, useEffect, useRef } from "react";
import { Image, Row } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";

interface Props {
  imageUrls: string[];
  height?: string;
  width?: string;
}

const ScreenshotCarousel = (props: Props): JSX.Element => {
  // const [selectedSlide, setSelectedSlide] = React.useState(null);
  // const [interval, setInterval] = React.useState(2500);
  const imageRefs = useRef(props.imageUrls.map(() => createRef()));

  useEffect(() => {
    console.log(imageRefs);
  });

  return (
    <Row gap={1} justify="center">
      <Carousel
        showStatus={false}
        autoPlay={true}
        interval={2500}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
      >
        {props.imageUrls.map((url, index) => {
          return (
            <div key={index}>
              <Image
                autoResize={true}
                src={url}
                alt={`Screenshot ${index + 1}`}
                css={{
                  borderRadius: "0.5em",
                  height: props.height,
                  width: props.width,
                }}
              />
            </div>
          );
        })}
      </Carousel>
    </Row>
  );
};

export default ScreenshotCarousel;
