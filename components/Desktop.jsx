import React from 'react';
import FilterPane from './FilterPane';
import MainPane from './MainPane';


const Desktop = () => (
  <div className="home-main-container">
    <FilterPane />
    <div className="right-main-bar">
      <MainPane />
    </div>
  </div>
);

export default Desktop;
