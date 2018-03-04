import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch/connectors';
import Checkbox from './Checkbox';

class RefineList extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e);
    let refList = Object.entries(this.props.list)
      .filter(ref => ref[1] === true)
      .map(ref => ref[0]);
    const element = e.target.dataset.label || e.target.parentNode.dataset.label;
    const index = refList.indexOf(element);
    if (index === -1) {
      refList.push(element);
    } else {
      refList.splice(index, 1);
    }
    if (refList.length === 0) {
      refList = [null];
    }
    this.props.refine(refList);
  }
  render() {
    const RefinementList = Object.entries(this.props.list).map(r => (
      <Checkbox
        checked={this.props.list[r[0]]}
        label={r[0]}
        key={r[0]}
        handleClick={this.handleClick}
      />));
    return (
      <div className="check-list-container">
        {RefinementList}
      </div>
    );
  }
}

RefineList.propTypes = {
  refine: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired //eslint-disable-line
};

export default connectRefinementList(RefineList);
