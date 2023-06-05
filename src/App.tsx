import React from "react";
import { Row, Container } from "@nextui-org/react";

import Welcome from "./sections/Welcome/Welcome";
import Projects from "./sections/Projects/Projects";

function App(): JSX.Element {
  const style = {
    sectionHeight: "100vh",
  };
  return (
    <Container direction="column" display="flex" fluid>
      <Row css={{ height: style.sectionHeight }}>
        <Welcome />
      </Row>

      <Row css={{ height: style.sectionHeight }}>
        <Projects />
      </Row>
    </Container>
  );
}

export default App;
