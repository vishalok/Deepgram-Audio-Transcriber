import React from 'react';

const TranscriptionDisplay = ({ transcription }) => {
  return (
    <div className="transcription">
      <h2>Transcription</h2>
      <p>{transcription || 'Start recording to see transcription...'}</p>
    </div>
  );
};

export default TranscriptionDisplay;
