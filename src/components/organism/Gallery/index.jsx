import React from "react";
import { Text } from "../../atom";
import "./app.css";

export const Gallery = () => {
    return (
        <>
        <div className="grid container">
            <div className="grid-info">
                <div className="photo">
                </div>
                <Text>Ògíamẹ̀'s Speech | Ògíamẹ̀ Atúwàtse III Economic Summit</Text>
            </div>
            <div className="grid-info">
                <div className="photo"></div>
                <Text>Komolafe's Speech | Ògíamẹ̀ Atúwàtse III Economic Summit</Text>
            </div>
            <div className="grid-info">
                <div className="photo"></div>
                <Text>Ògíamẹ̀ Visits Asantehene, Kumasi, Ghana | AkwasidaeFestival</Text>
            </div>
            <div className="grid-info">
                <div className="photo"></div>
                <Text>VP Prof. Yemi Osinbajo Official Visit to Ogiame Atuwatse III, The Olu of Warri.</Text>
            </div>
        </div>
        </>
    )
};