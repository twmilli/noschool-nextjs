import React from 'react';
import FilterPane from './FilterPane';
import MainPane from './MainPane';

const Mobile = () => (
  <div className="mobile-home-main-container">
    <div className="filters-toggle-btn" />
    <FilterPane />
    <MainPane />
  </div>
);

export default Mobile;
