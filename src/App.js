import React, { useState } from 'react';
import MicrophoneButton from './components/MicrophoneButton';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import PastTranscriptions from './components/PastTranscriptions';
import { transcribeAudio } from './services/deepgramService';

function App() {
  const [transcription, setTranscription] = useState('');
  const [pastTranscriptions, setPastTranscriptions] = useState([]);

  const handleAudioData = async (audioBlob) => {
    try {
      const transcriptionResponse = await transcribeAudio(audioBlob);
      const newTranscription = transcriptionResponse.results.channels[0].alternatives[0].transcript;
      setTranscription(newTranscription);
      setPastTranscriptions([newTranscription, ...pastTranscriptions]);
    } catch (error) {
      setTranscription('Error with transcription.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto sm:max-w-xl lg:max-w-2xl">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
              Deepgram Audio Transcriber
            </h1>
          </div>
          <div className="p-4 sm:p-6 space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Click the microphone to start recording</p>
              <MicrophoneButton handleData={handleAudioData} />
            </div>
            <TranscriptionDisplay transcription={transcription} />
            <PastTranscriptions transcriptions={pastTranscriptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
