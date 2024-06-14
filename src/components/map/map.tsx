import React, { useEffect, useRef } from "react";
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js'
import "./Map.css"
export const MapPerformance = () => {

    const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
      const mapContainer = useRef<HTMLDivElement>(null);
         useEffect (()=>{
            if(!mapContainer.current) return;
            map.setTarget(mapContainer.current)
            
         },[map])
    return(
        <div id="map" ref={mapContainer}></div>
    )
}