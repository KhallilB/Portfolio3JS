import React from "react";
import { Col, Container } from "@nextui-org/react";

const Welcome = (): JSX.Element => {
  return (
    <Container responsive>
      <Col>
        <h1>Hi,{"I'm"} Khallil</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
          malesuada nibh. Nam condimentum, neque ornare venenatis scelerisque,
          magna libero pulvinar risus, quis maximus libero lectus non lacus. Sed
          nisl nulla, scelerisque nec aliquet at, pharetra ut mauris. Maecenas
          faucibus magna accumsan, efficitur ligula eu, semper tortor. Nam ac
          sagittis erat. Quisque auctor nulla ut odio aliquam, a tempor nibh
          ornare. Integer aliquet dolor risus, sit amet suscipit dolor
          condimentum ut. Vestibulum mi nibh, lobortis et velit vel, varius
          accumsan lacus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Vivamus id nibh non urna ullamcorper pretium. Mauris ac
          commodo mauris, sit amet egestas orci.
        </p>
      </Col>
    </Container>
  );
};

export default Welcome;
