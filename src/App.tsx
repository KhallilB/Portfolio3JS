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
    alignItems: "center",
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
  );
}

export default App;
