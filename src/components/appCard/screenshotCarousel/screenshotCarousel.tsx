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
                // width={250}
                // height={250}
                autoResize={true}
                src={url}
                alt={`Screenshot ${index + 1}`}
                objectFit="cover"
              />
            </div>
          );
        })}
      </Carousel>

      {/* <Image
        width={300}
        height={180}
        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
        alt="Default Image"
        objectFit="cover"
      />
      <Image
        width={300}
        height={180}
        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
        alt="Default Image"
        objectFit="cover"
      />
      <Image
        width={300}
        height={180}
        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
        alt="Default Image"
        objectFit="cover"
      /> */}
    </Row>
  );
};

export default ScreenshotCarousel;
