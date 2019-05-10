import React from "react";

import Container from "../components/Container";
import { Header } from "../components/Text";

export default ({ navigation }) => {
  const item = navigation.getParam("item", {});

  return (
    <Container style={{ padding: 10 }}>
      <Header>{item.title}</Header>
    </Container>
  );
};
