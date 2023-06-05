import React, { type PropsWithChildren } from "react";
import { Row } from "@nextui-org/react";

interface Props {
  size?: string;
}

const SubSection = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Row
      justify="flex-start"
      align="flex-start"
      //   css={{ height: props.size === undefined ? "100%" : props.size }}
    >
      {props.children}
    </Row>
  );
};

export default SubSection;
