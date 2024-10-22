import React from 'react';

const PastTranscriptions = ({ transcriptions }) => {
  return (
    <div className="past-transcriptions">
      <h2>Past Transcriptions</h2>
      <ul>
        {transcriptions.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PastTranscriptions;
