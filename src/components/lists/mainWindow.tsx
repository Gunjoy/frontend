import React from "react";
import { FC } from "react";

import HeaderMenue from '../HeaderMenue'
import { MapPerformance } from '../map/map'
import { Footer } from '../footer/Footer'

import '../styles/MainWindow.css'

const MainWindow = () =>{
    return(
        <div className="wrapper-MainWindow">
            <HeaderMenue></HeaderMenue>
            <MapPerformance></MapPerformance>
            <Footer></Footer>
        </div>
    )
}
export default MainWindow