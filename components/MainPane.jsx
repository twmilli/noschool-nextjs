import React from 'react';
import { ChevronsDown } from 'react-feather';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBox, SortBy } from 'react-instantsearch/dom';
import { connectInfiniteHits } from 'react-instantsearch/connectors';
import ProgramItem from './ProgramItem';
import { bookmark } from '../actions';

export const Programs = ({ programs }) => {
  const programList = Object.entries(programs)
    .map(program => <ProgramItem {...program[1]} key={program[0]} />);
  return (
    <div className="program-container">
      {programList}
    </div>
  );
};

Programs.propTypes = {
  programs: PropTypes.object, // eslint-disable-line
};

const MainPane = () => (
  <div className="main-pane-container">
    <div className="main-pane-search-options">
      <div className="search-box-wrapper">
        <SearchBox />
      </div>
      <SortBy
        items={[
              { value: 'gapyear', label: 'Most Relevent' },
              { value: 'gapyear_cost_asc', label: 'Price low - high' },
              { value: 'gapyear_cost_desc', label: 'Price high - low' },
              { value: 'gapyear_length_asc', label: 'Length low - high' },
              { value: 'gapyear_length_desc', label: 'Length high - low' },
            ]}
        defaultRefinement="gapyear"
      />
    </div>
    <div className="header-container">
      <h1 className="main-header">Suggestions</h1>
      <img src="http://d3bewr15g1kmwh.cloudfront.net/search-by-algolia.svg" alt="search by algolia" />
    </div>
    <ConnectedHits />
  </div>
);

const CustomHits = ({ hits, refine, hasMore }) => { //eslint-disable-line
  const loadMoreButton = hasMore ? (
    <div>
      <div className="bottom-border" />
      <div className="more-button" onClick={refine} role="button" tabIndex="0" onKeyPress={null}>
        <ChevronsDown />
      </div>
    </div>) : <div className="bottom-border" />;
  return (
    <div id="hits">
      {hits.map(hit => <ProgramItem hit={hit} key={hit.objectID} />)}
      {loadMoreButton}
    </div>);
};

const ConnectedHits = connectInfiniteHits(CustomHits);

const mapStateToProps = state => ({
  budget: state.budget,
  interests: state.interests,
  regions: state.regions,
  length: state.length,
});

export default connect(mapStateToProps, { bookmark })(MainPane);
