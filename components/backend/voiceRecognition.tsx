// hooks/useVoiceRecognition.ts
import { useEffect, useState } from 'react';
import Voice from 'react-native-voice';

export const useVoiceRecognition = () => {
  const [result, setResult] = useState('');
  const [started, setStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Voice.onSpeechStart = () => setStarted(true);
    Voice.onSpeechResults = (e) => setResult(e.value?.[0] || '');
    Voice.onSpeechEnd = () => setStarted(false);
    Voice.onSpeechError = (e) => setError(e.error?.message || 'Unknown error');

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    if (error) {
      console.error('error', error);
    }
  }, [error]);

  const startRecognition = async () => {
    if (!Voice || typeof Voice.start !== 'function') {
      setError('Voice module is not properly initialized.');
      return;
    }
    try {
      await Voice.start('en-US');
    } catch (e: any) {
      setError(e.message);
    }
  };
  

  const stopRecognition = async () => {
    console.log('stopRecognition');
    try {
      await Voice.stop();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return {
    result,
    started,
    error,
    startRecognition,
    stopRecognition,
  };
};
