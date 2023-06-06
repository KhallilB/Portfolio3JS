import React, { type CSSProperties } from "react";
import { Container } from "@nextui-org/react";

import Welcome from "./sections/Welcome/Welcome";
import Projects from "./sections/Projects/Projects";

function App(): JSX.Element {
  const appContainerStyle: CSSProperties = {
    maxHeight: "100vh",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
  };

  const sectionStyle: CSSProperties = {
    height: "100vh",
    border: "solid 1px orange",
    scrollSnapAlign: "start",
    display: "flex",
    justifyContent: "center",
    alignItems: "flext-start",
  };

  return (
    <div className="container" style={appContainerStyle}>
      <section id="welcome" className="child" style={sectionStyle}>
        <Container responsive>
          <Welcome />
        </Container>
      </section>
      <section id="projects" className="child" style={sectionStyle}>
        <Container responsive>
          <Projects />
        </Container>
      </section>
    </div>
    // <Container
    //   direction="column"
    //   display="flex"
    //   fluid
    //   css={{
    //     scrollSnapPointsY: "repeat(300px)",
    //     scrollSnapType: "y mandatory",
    //   }}
    // >
    //   <Row
    //     css={{
    //       height: style.sectionHeight,
    //       scrollSnapStop: "always",
    //       scrollSnapAlign: "center",
    //     }}
    //   >
    //     <Welcome />
    //   </Row>

    //   <Row
    //     css={{
    //       height: style.sectionHeight,
    //       scrollSnapStop: "always",
    //       scrollSnapAlign: "center",
    //     }}
    //   >
    //     <Projects />
    //   </Row>
    // </Container>
  );
}

export default App;
