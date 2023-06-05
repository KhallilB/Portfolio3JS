import React from "react";
import { Image, Row } from "@nextui-org/react";

const ScreenshotCarousel = (): JSX.Element => {
  return (
    <Row gap={1} justify="center">
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
      />
      <Image
        width={300}
        height={180}
        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
        alt="Default Image"
        objectFit="cover"
      />
    </Row>
  );
};

export default ScreenshotCarousel;
