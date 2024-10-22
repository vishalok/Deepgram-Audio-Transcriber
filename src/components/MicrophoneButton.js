import React, { useState } from 'react';
import { FaMicrophone, FaStop } from 'react-icons/fa';
import useRecorder from '../hooks/useRecorder';

function MicrophoneButton({ handleData }) {
  const [isRecording, setIsRecording] = useState(false);
  const { startRecording, stopRecording } = useRecorder(handleData);

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={toggleRecording}
        className={`
          relative
          w-20 h-20
          flex items-center justify-center
          rounded-full
          text-white
          transition-all duration-300 ease-in-out
          ${isRecording 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-500 hover:bg-blue-600'}
        `}
      >
        {isRecording ? (
          <FaStop className="text-2xl" />
        ) : (
          <FaMicrophone className="text-2xl" />
        )}
        {isRecording && (
          <span className="absolute w-full h-full rounded-full animate-ping bg-red-400 opacity-75"></span>
        )}
      </button>
    </div>
  );
}

export default MicrophoneButton;