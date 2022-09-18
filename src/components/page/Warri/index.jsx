import React from "react";
import "./app.css";
import { NavLink } from "../../atom/NavLink";

export const Warri = () => {
  return (
    <>
    <div className="warri-container bc">
      <div className="warri-img"></div>
      <div className="w-60">
        <div className="warri-info">
          <div className="warri-details br-30">
            <NavLink to="/" className="back">
             ⟵
            </NavLink>
            <h1 className="mb t-20">The Warri Traditional Council</h1>
            <p className="fs-14 mt-16">The Warri Traditional Council.</p>
            <input type="text" placeholder="search" />
          </div>
          <div className="warri-cards">
          <div className="w-cards">
            <div className="w-card mb">
              <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief Johnson Amatserunleghe</h5>
              <p className=" mt-8">The Iyatsere of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5 className="mt-4">Chief Gabriel Awala</h5>
              <p className="mt-8">The Uwangue of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief T.Y. Pessu</h5>
              <p className="mt-8">The Ojomo of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief Sunday Rone</h5>
              <p className="mt-8"> The Obazuaye of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief (Dr.) P.E.B. Uku</h5>
              <p className="mt-8">The Ere Oluyon of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief G.T. Grant</h5>
              <p className="mt-8">The Agura-Otiri of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief (Mrs.) R. L. Ogbebor</h5>
              <p className="mt-8">The Igba of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief Kofi Kartey</h5>
              <p className="mt-8">The Abolujiyan of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief Brown Mene</h5>
              <p className="mt-8">The Ogwaolusan of Warri</p>
              </div>
              </div>
            </div>
            <div className="w-card mb">
            <div className="w-card-logo"></div>
              <div className="w-card-details">
              <div>
              <h5>Chief Elder Walter Odeli (JP)</h5>
              <p className="mt-8">The Oritsegbogwa of Warri</p>
              </div>
              </div>
            </div>
          </div>
          <hr className="break" />
          <div className="warri-descrip">
          <div className="w-card2-logo mt"></div>
          <h3 className="mt-8">Chief Johnson Amatserunleghe</h3>
          <div className="more-details">
            <p className="fs-16 mb mt-8">
              <b>Title:</b>
              The Iyatsere of Warri
            </p>
            <p className="fs-16 mb">
              <b>Appellation:</b>
              Uji
            </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
