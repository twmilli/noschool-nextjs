import React from 'react';
import stylesheet from '../styles/feedback.scss';

const Feedback = () => (
  <div className="Feedback">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
    <iframe
      className="airtable-embed airtable-dynamic-height"
      src="https://airtable.com/embed/shr3NEKN880kTVb99?backgroundColor=green"
      frameBorder="0"
      onmousewheel=""
      width="100%"
      height="1593"
      style={{ background: 'transparent', border: '1px solid #ccc' }}
      title="airtable-feedback"
    />
  </div>
);

export default Feedback;
