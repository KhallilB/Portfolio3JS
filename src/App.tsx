import React from "react";

import SnapScroll from "./components/util/snapScroll";
import Welcome from "./sections/Welcome/Welcome";
import Projects from "./sections/Projects/Projects";

function App(): JSX.Element {
  return (
    <SnapScroll
      sections={["welcome", "projects"]}
      containerStyle={{ maxHeight: "100vh" }}
      sectionStyle={{ height: "100vh" }}
    >
      <Welcome />
      <Projects />
    </SnapScroll>
  );
}

export default App;
