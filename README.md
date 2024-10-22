live link of this project:

# Deepgram Audio Transcriber

## Overview
Deepgram Audio Transcriber is a React-based web application that allows users to record audio and receive real-time transcriptions using the Deepgram API. This project demonstrates the integration of audio recording capabilities with advanced speech-to-text technology.

## Features
- Real-time audio recording
- Instant transcription of recorded audio
- Display of current and past transcriptions
- User-friendly interface with responsive design

## Technology Stack
- React.js
- Tailwind CSS for styling
- Deepgram API for speech-to-text conversion

## Key Components
1. **MicrophoneButton**: Handles audio recording functionality.
2. **TranscriptionDisplay**: Shows the current transcription.
3. **PastTranscriptions**: Displays a list of previous transcriptions.
4. **useRecorder**: Custom hook for managing audio recording.

## How It Works
1. Users click the microphone button to start recording.
2. The application captures audio using the browser's MediaRecorder API.
3. Recorded audio is sent to the Deepgram API for transcription.
4. Transcribed text is displayed in real-time and added to the list of past transcriptions.

## Setup and Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up a Deepgram API key and add it to your `.env` file
4. Run the application: `npm start`

## Future Enhancements
- Add support for multiple languages
- Implement real-time streaming transcription
- Include options for exporting transcriptions

## Contributing
Contributions to improve the Deepgram Audio Transcriber are welcome. Please feel free to submit pull requests or open issues for bugs and feature requests.

## created by Vishal Rathod
