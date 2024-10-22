import { useState, useCallback } from 'react';

const useRecorder = (handleData) => {
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = useCallback(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (e) => {
          handleData(e.data);
        };

        recorder.start();
      })
      .catch(err => console.error('Error accessing microphone:', err));
  }, [handleData]);

  const stopRecording = useCallback(() => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
  }, [mediaRecorder]);

  return { startRecording, stopRecording };
};

export default useRecorder;