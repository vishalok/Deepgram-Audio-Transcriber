import axios from 'axios';

const DEEPGRAM_API_URL = 'https://api.deepgram.com/v1/listen';
const DEEPGRAM_API_KEY = process.env.REACT_APP_DEEPGRAM_API_KEY;

export const transcribeAudio = async (audioBlob) => {
  const formData = new FormData();
  formData.append('audio', audioBlob);

  try {
    const response = await axios.post(DEEPGRAM_API_URL, formData, {
      headers: {
        'Authorization': `Token ${DEEPGRAM_API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Transcription error:', error);
    throw error;
  }
};
