// hooks/useVoiceRecognition.ts
import Voice from '@react-native-voice/voice';
import { useEffect, useState } from 'react';

interface Error {
    code?: string;
    message?: string;
}

export const useVoiceRecognition = () => {
  const [result, setResult] = useState('');
  const [started, setStarted] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    Voice.onSpeechStart = () => setStarted(true);
    Voice.onSpeechResults = (e) => setResult(e.value?.[0] || '');
    Voice.onSpeechEnd = () => setStarted(false);
    Voice.onSpeechError = (e) => {
        setError({
            code: e.error?.code,
            message: e.error?.message
        });
    };

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
      setError({
        code: '0',
        message: 'Voice module is not properly initialized.'
      });
      return;
    }
    try {
      await Voice.start('id-ID');
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
