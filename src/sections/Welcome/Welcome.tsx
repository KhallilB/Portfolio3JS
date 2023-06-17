import React from "react";
import { useTheme, Col, Row, Container, Text, Image } from "@nextui-org/react";

import headshot from "../../assets/headshot/Khallil_Bailey.png";

const Welcome = (): JSX.Element => {
  // const [headshotHeight, setHeadshotHeight] = useState("25em");

  const { theme } = useTheme();
  // const { width } = useWindowDimensions();

  return (
    <Container responsive>
      <Col span={5}>
        <Row align="center" css={{ border: "solid 1px orange" }}>
          <Text h1 em css={{ fontSize: theme?.fontSizes["5xl"].value }}>
            Hi, {" I'm"} Khallil
          </Text>
        </Row>
        <Row
          align="center"
          css={{ border: "solid 1px orange", position: "absolute" }}
        >
          <Image height={100} src={headshot} />
        </Row>
      </Col>

      <Col span={5}>
        <Text css={{ fontSize: theme?.fontSizes.xl.value }}>
          As an experienced and driven software developer residing in San
          Francisco, CA, I am confident in my ability to bring valuable skills
          and contributions to any technology-focused organization. With an
          extensive background in programming and a strong desire to continually
          learn and improve, I am eager to tackle new challenges and make
          impactful contributions to innovative projects.
        </Text>
      </Col>
    </Container>
  );
};

export default Welcome;
