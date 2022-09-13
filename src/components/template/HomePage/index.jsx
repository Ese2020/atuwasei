import React from "react";
import { Navbar } from "../../molecule";
import { Text } from "../../atom";
import { Body, Section } from "./app";

export const HomePage = () => {
  return (
    <>
      <Body>
        <nav>
          <Navbar />
        </nav>
        <Section>
          <Text type="h1">Ògíamẹ̀ Atúwàtse III - The Olú of Warri</Text>
        </Section>
      </Body>
    </>
  );
};
