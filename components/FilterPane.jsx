import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RefineList from './RefineList';
import { setBudget, setRegion, setInterest, setLength } from '../actions';
import RangeSlider from './RangeSlider';

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const formatLength = ({ min, max }) => {
  let sMin;
  let sMax;
  const minMonths = Math.floor(min / 30);
  const maxMonths = Math.floor(max / 30);
  if (minMonths <= 0) {
    sMin = '1 day';
  } else if (minMonths === 1) {
    sMin = `${minMonths} month`;
  } else {
    sMin = `${minMonths} months`;
  }
  if (maxMonths === 12) {
    sMax = 'No limit';
  } else {
    sMax = `${maxMonths} months`;
  }
  if (minMonths === maxMonths) {
    return sMin;
  }
  return `${sMin} - ${sMax}`;
};

const FilterPane = (props) => {
  const {
    budget, regions, interests, length,
  } = props;
  return (
    <div className="left-filters-pane">
      <div className="filter-container">
        <div className="slider-header">
          <h1>Budget</h1>
          <div className="slider-label">${budget.min} - {budget.max === 20000 ? 'No Limit' : numberWithCommas(budget.max)}</div>
        </div>
        <div className="slider-container">
          <RangeSlider
            onChange={props.setBudget}
            value={budget}
            attributeName="cost"
            maxVal={20000}
          />
        </div>
      </div>
      <div className="filter-container">
        <div className="slider-header">
          <h1>Duration</h1>
          <div className="slider-label">{formatLength(length)}</div>
        </div>
        <div className="slider-container">
          <RangeSlider
            onChange={props.setLength}
            value={length}
            attributeName="length"
            maxVal={360}
          />
        </div>
      </div>
      <div className="filter-container">
        <h1>Your Interests</h1>
        <RefineList onClick={props.setInterest} list={interests} attributeName="topics" />
      </div>
      <div className="filter-container">
        <h1>Continents</h1>
        <RefineList onClick={props.setRegion} list={regions} attributeName="regions" />
      </div>
    </div>);
};

const mapStateToProps = state => ({
  budget: state.budget,
  regions: state.regions,
  interests: state.interests,
  length: state.length,
});

FilterPane.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRegion: PropTypes.func.isRequired,
  budget: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  regions: PropTypes.shape({
    'South America': PropTypes.bool.isRequired,
    Africa: PropTypes.bool.isRequired,
    Europe: PropTypes.bool.isRequired,
    Asia: PropTypes.bool.isRequired,
    Australia: PropTypes.bool.isRequired,
    'Middle East': PropTypes.bool.isRequired,
  }).isRequired,
  setInterest: PropTypes.func.isRequired,
  interests: PropTypes.shape({
    Travel: PropTypes.bool.isRequired,
    Coding: PropTypes.bool.isRequired,
    Music: PropTypes.bool.isRequired,
    Art: PropTypes.bool.isRequired,
    Technology: PropTypes.bool.isRequired,
    Medicine: PropTypes.bool.isRequired,
    Farming: PropTypes.bool.isRequired,
    Photography: PropTypes.bool.isRequired,
    Cooking: PropTypes.bool.isRequired,
  }).isRequired,
  length: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  setLength: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  setBudget, setRegion, setInterest, setLength,
})(FilterPane);
