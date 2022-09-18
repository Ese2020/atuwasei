import React, { useState } from "react";
import "./app.css";
import { NavLink } from "../../atom/NavLink";
import { SlideUp } from "../../organism";
import icon from "../../../asset/menu2.svg";
import { Footer } from "../../organism/Footer";

export const Warri = () => {
  const [slideup, setSlideup] = useState(false);
  const handleClickSlide = () => setSlideup(!slideup);
  return (
    <>
      <div className="gin-container bc">
        <div className="back2">
          <img
            src={icon}
            alt="logo"
            onClick={handleClickSlide}
            className="img-ic"
          />
        </div>
        <div className="gin-img"></div>
        <div className="w-60">
          <div className="gin-info">
            <div className="gin-details br-30">
              <NavLink to="/" className="back">
                ⟵
              </NavLink>

              <h1 className="mb t-20">The Warri Traditional Council</h1>
              <p className="fs-14">The warri traditional council.</p>
              <input type="text" placeholder="search" />
            </div>
            <div className="gin-cards">
              <div className="cards">
                <div className="card1 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card2 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card3 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card4 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card5 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card6 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card7 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card8 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card9 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
                <div className="card10 mb">
                  <div className="card-logo"></div>
                  <div className="card-details">
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                    <div>
                      <h5>Olu Atuwatse III</h5>
                      <p>Present</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="break" />
              <div className="gin-descrip">
                <div className="card2-logo mt"></div>
                <h3>Olu Atuwatse III</h3>
                <p className="mb">Present</p>
                <h5 className="mb">Reign</h5>
                <div className="more-details">
                  <p className="fs mb">
                    <b>Start:</b>
                    "21 August 2021"
                    <span className="fs ml">
                      <b>End:</b>
                    </span>
                  </p>
                  <p className="fs">
                    21st Olu. Tsola Emiko born to Olu Atuwatse II and Olori
                    Gladys Durorike Emiko on 2 April 1984. He succeeded his
                    uncle and is married to Olori Ivie Emiko (née Okunbo). They
                    have three children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="ft">
        <Footer />
      </footer>
      <SlideUp click={handleClickSlide} className={slideup} />
    </>
  );
};
