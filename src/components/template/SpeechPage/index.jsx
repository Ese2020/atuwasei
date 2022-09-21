import React, { useState } from "react";
import { SearchDetail } from "../../molecule";
import { SearchSpeech } from "../../molecule/SearchSpeech";
import { Footer, SlideUp } from "../../organism";
import "./app.css";

export const SpeechPage = () => {
  const [slideup, setSlideup] = useState(false);
  const handleClickSlide = () => setSlideup(!slideup);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  console.log(toggleState);
  return (
    <>
      <div className="parent-grid-speech">
        <div className="grid-speech speech-img"></div>
        <div className="grid-speech">
          <SearchSpeech
            toggle={toggleTab}
            handleClickSlide={handleClickSlide}
          />
        </div>
        <div className="grid-speech grid-last">
          <SearchDetail toggled={toggleState} />
        </div>
      </div>
      <footer className="ft">
        <Footer />
      </footer>
      <SlideUp click={handleClickSlide} className={slideup} />
    </>
  );
};
