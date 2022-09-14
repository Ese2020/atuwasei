import React, { useState } from "react";
import { Navbar } from "../../molecule";
import { Text } from "../../atom";
import { Body, Section, BottomNav } from "./app";
import { Footer } from "../../organism/Footer";
import { SlideUp } from "../../organism";

export const HomePage = () => {
  const [slideup, setSlideup] = useState(false);
  const handleClickSlide = () => setSlideup(!slideup);
  return (
    <>
      <Body>
        <nav>
          <Navbar click={handleClickSlide} />
        </nav>
        <Section>
          <Text type="h1">Ògíamẹ̀ Atúwàtse III - The Olú of Warri</Text>
        </Section>
        <BottomNav>
          <Footer />
        </BottomNav>
        <SlideUp click={handleClickSlide} className={slideup} />
      </Body>
    </>
  );
};
