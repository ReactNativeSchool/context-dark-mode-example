import React from "react";
import { FlatList } from "react-native";

import Card, { Separator } from "../components/Card";
import Container from "../components/Container";

import data from "../data/items";

export default ({ navigation }) => (
  <Container>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Card
          item={item}
          onPress={() => navigation.navigate("Details", { item })}
        />
      )}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Separator}
    />
  </Container>
);
