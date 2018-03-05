
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700" rel="stylesheet" />
      <meta name="description" content="Easily search a curated collection of the best gap year and college alternatives to help you find your passion." />

      <meta itemProp="name" content="Noschool.io: Discover awesome activities for your gap year." />
      <meta itemProp="description" content="Easily search a curated collection of the best gap year and college alternatives to help you find your passion." />
      <meta itemProp="image" content="http://d3bewr15g1kmwh.cloudfront.net/meta.png" />
      <meta name="google-site-verification" content="mEnIIWwRmF5ZGPx08O-oQ89TVmxzbwccWp1G1c15Cn8" />

      <meta property="og:url" content="http://noschool.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Noschool.io: Discover awesome activities for your gap year." />
      <meta property="og:description" content="Easily search a curated collection of the best gap year and college alternatives to help you find your passion." />
      <meta property="og:image" content="http://d3bewr15g1kmwh.cloudfront.net/meta.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Noschool.io: Discover awesome activities for your gap year." />
      <meta name="twitter:description" content="Easily search a curated collection of the best gap year and college alternatives to help you find your passion." />
      <meta name="twitter:image" content="http://d3bewr15g1kmwh.cloudfront.net/meta.png" />
    </Head>
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired, //eslint-disable-line
};

export default Layout;
