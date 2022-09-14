import React from "react";
import { BackIcon, Holder, Slideup } from "./app";
import "./app.css";
export const SlideUp = ({ click, className }) => {
  return (
    <>
      <div className={className ? "sd-up" : "sd-down"}>
        <Slideup>
          <Holder>
            <BackIcon onClick={click} />
          </Holder>
        </Slideup>
      </div>
    </>
  );
};
