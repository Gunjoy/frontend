import React from 'react';
import HeaderMenue from './components/HeaderMenue';
import { MapPerformance } from './components/map/map';
import { Footer } from './components/footer/Footer';

import './App.css';


export default function App() {
  return (
    <div className="App">
      <HeaderMenue></HeaderMenue>
      <MapPerformance></MapPerformance>
      <Footer></Footer>
    </div>
  );
}


