import React from "react";

import { Col, Container } from "@nextui-org/react";

import Section from "./components/section/section";
import Welcome from "./sections/Welcome/Welcome";
import Projects from "./sections/Projects/Projects";

function App(): JSX.Element {
  return (
    <Container
      direction="column"
      display="flex"
      fluid
      css={{ height: "100vh" }}
    >
      <Col>
        <Section>
          <Welcome />
        </Section>

        <Section>
          <Projects />
        </Section>
      </Col>

      {/* <Row justify="center" align="center" css={{ height: "100vh" }}>
          <WelcomeMessage />
        </Row>

        <Row css={{ height: "100vh" }}>
          <AppCard
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            image={chef}
          />
        </Row>
        <Row css={{ height: "100vh" }}>
          <AppCard
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            image={chef}
          />
        </Row>
        <Row css={{ height: "100vh" }}>
          <AppCard
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            image={chef}
          />
        </Row> */}
    </Container>
  );
}

export default App;
