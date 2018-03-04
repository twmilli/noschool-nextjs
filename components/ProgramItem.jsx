import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from 'react-feather';
import pluralize from 'pluralize';
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={799} />;
const Desktop = props => <Responsive {...props} minWidth={800} />;

const openLink = (url) => {
  const f = () => {
    window.open(url, '_blank'); //eslint-disable-line
  };
  return f;
};

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const formatLength = (length) => {
  if (length < 30) {
    return `${length} ${pluralize('day', length)}`;
  }
  const months = Math.round(length / 30);
  return `${months} ${pluralize('month', months)}`;
};

const tagMap = {
  Technology: 'Tech',
  Photography: 'Photo',
  Coding: 'Code',
};

const DesktopProgramItem = ({
  length, topics, url, cost, img, title, desc,
}) => (
  <div className="program-item-container">
    <div className="img-container">
      <img src={img} alt="" />
    </div>
    <div className="info-container">
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </div>
    <div className="right-container">
      <div className="top-container">
        <div className="length">
          {formatLength(length)}
        </div>
        <div className="tag">
          {topics[0] in tagMap ? tagMap[topics[0]] : topics[0]}
        </div>
      </div>
      <div
        className="bottom-container"
        onClick={openLink(url)}
        onKeyUp={openLink(url)}
        role="button"
        tabIndex="0"
      >
        <p>$ {numberWithCommas(Math.round(((cost / length) * 30) / 10) * 10)}/month</p>
        <ArrowRight />
        <span />
      </div>
    </div>
  </div>);

const MobileProgramItem = ({
  length, url, cost, img, title, desc,
}) => (
  <div className="mobile-wrapper">
    <div className="program-item-container mobile">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="info-container">
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
    <div
      className="bottom-container mobile"
      onClick={openLink(url)}
      onKeyUp={openLink(url)}
      role="button"
      tabIndex="0"
    >
      <p>$ {Math.round(((cost / length) * 30) / 10) * 10}/month</p>
    </div>
  </div>);


const ProgramItem = ({ hit }) => (
  <div>
    <Mobile>
      <MobileProgramItem {...hit} />
    </Mobile>
    <Desktop>
      <DesktopProgramItem {...hit} />
    </Desktop>
  </div>
);

ProgramItem.propTypes = {
  hit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    topics: PropTypes.array.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

MobileProgramItem.propTypes = {
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  topics: PropTypes.array.isRequired, //eslint-disable-line
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

DesktopProgramItem.propTypes = {
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  topics: PropTypes.array.isRequired, //eslint-disable-line
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default ProgramItem;
