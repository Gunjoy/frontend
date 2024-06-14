import React from "react";

import "../components/styles/HeaderMenue.css"

let HeaderMenue = () => {
    return(
        <div className="header-wrapper">
            <div className="header-wrapper_nameAppBox"></div>
            <h3 className="header-wrapper_nameAppBox-text">КИБЕРПСИХОЗ</h3>
            <button className="header-wrapper_button-select-city">Выбрать город</button>
        </div>
    )

}

export default HeaderMenue