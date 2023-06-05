import React, { type PropsWithChildren } from "react";
import { Row } from "@nextui-org/react";

interface Props {
  size?: string;
}

const Section = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Row
      justify="center"
      align="flex-start"
      css={{
        height: "100%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "column",
      }}
    >
      {props.children}
    </Row>
  );
};

export default Section;
