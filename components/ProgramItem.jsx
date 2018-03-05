import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from 'react-feather';
import pluralize from 'pluralize';

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

const ProgramItem = ({ hit }) => {
  const {
    title, desc, url, cost, length, topics, img,
  } = hit;
  return (
    <div>
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
      </div>
      <div
        className="bottom-container-mobile"
        onClick={openLink(url)}
        onKeyUp={openLink(url)}
        role="button"
        tabIndex="0"
      >
        <p>$ {numberWithCommas(Math.round(((cost / length) * 30) / 10) * 10)}/month</p>
      </div>
    </div>);
};

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

export default ProgramItem;
