import React, { Component } from 'react';
import Slider from 'rc-slider';
import { connectRange } from 'react-instantsearch/connectors';
import PropTypes from 'prop-types';

const { Range } = Slider;

const handleStyle = {
  position: 'absolute',
  borderColor: 'white',
};


class RangeSlider extends Component {
  constructor() {
    super();
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(sliderState) {
    if (
      this.props.currentRefinement.min !== sliderState[0] ||
      this.props.currentRefinement.max !== sliderState[1]
    ) {
      if (sliderState[1] === this.props.maxVal) {
        this.props.refine({
          min: sliderState[0],
          max: 100000,
        });
      } else {
        this.props.refine({
          min: sliderState[0],
          max: sliderState[1],
        });
      }
    }
    this.props.onChange(sliderState);
  }

  render() {
    const { value, maxVal } = this.props;
    return (
      <Range
        allowCross={false}
        defaultValue={[0, maxVal]}
        value={[value.min, value.max]}
        max={maxVal}
        handleStyle={[
                  handleStyle,
                  handleStyle,
              ]}
        trackStyle={[{ backgroundColor: '#00EC85', height: 3 }]}
        railStyle={{ height: 3, backgroundColor: '#B0BECA' }}
        onChange={this.onSliderChange}
        step={(maxVal - 0) / 20}
      />
    );
  }
}

RangeSlider.propTypes = {
  value: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  maxVal: PropTypes.number.isRequired,
  currentRefinement: PropTypes.object, //eslint-disable-line
  refine: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connectRange(RangeSlider);
