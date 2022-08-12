import React from "react";
import { Container, Content, Header } from "./styles";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import headerImg from "../../assets/logo.webp";

export function Home() {
  return (
    <Container>
      <Header source={headerImg}>
        <Input placeholder="Pesquisar..." />
      </Header>

      <Content>
        <Card />
      </Content>
    </Container>
  );
}
