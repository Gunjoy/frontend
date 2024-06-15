import React from 'react';
import HeaderMenue from './components/HeaderMenue';
import { MapPerformance } from './components/map/map';
import { Footer } from './components/footer/Footer';
import  MainWindow  from './components/lists/mainWindow';
import './App.css';


export default function App() {
  return (
    <div className="App">
        <MainWindow></MainWindow>
    </div>
  );
}


