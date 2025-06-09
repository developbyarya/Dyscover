// hooks/useVoiceRecognition.ts
import Voice from '@react-native-voice/voice';
import { useEffect, useRef, useState } from 'react';

interface Error {
    code?: string;
    message?: string;
}

// Error codes that we want to handle
const HANDLED_ERROR_CODES = ['7', 'NO_SPEECH'];

export const useVoiceRecognition = () => {
  const [result, setResult] = useState('');
  const [started, setStarted] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const hasResultRef = useRef(false);
  const isProcessingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastErrorRef = useRef<string | null>(null);

  const resetState = () => {
    console.log('Resetting voice recognition state');
    setResult('');
    setStarted(false);
    setError(null);
    hasResultRef.current = false;
    isProcessingRef.current = false;
    lastErrorRef.current = null;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleError = (code: string, message: string) => {
    // Only handle specific error codes and don't handle the same error type twice
    if (HANDLED_ERROR_CODES.includes(code) && lastErrorRef.current !== code && !hasResultRef.current) {
      console.log('Handling error:', code, message);
      lastErrorRef.current = code;
      setStarted(false);
      setError({ code, message });
    } else {
      console.log('Ignoring error:', code, message);
    }
  };

  useEffect(() => {
    Voice.onSpeechStart = () => {
      console.log('Speech started');
      setStarted(true);
      setError(null);
      hasResultRef.current = false;
      isProcessingRef.current = false;
      lastErrorRef.current = null;
    };
    
    Voice.onSpeechResults = (e) => {
      const value = e.value?.[0] || '';
      console.log('Speech result:', value);
      if (value.trim() && !isProcessingRef.current) {
        isProcessingRef.current = true;
        hasResultRef.current = true;
        setResult(value);
      }
    };
    
    Voice.onSpeechEnd = () => {
      console.log('Speech ended');
      setStarted(false);
      
      // Only set no speech error if we haven't got a result or another error
      if (!hasResultRef.current && !isProcessingRef.current && !lastErrorRef.current) {
        timeoutRef.current = setTimeout(() => {
          handleError('NO_SPEECH', 'No speech was detected');
        }, 500);
      }
    };
    
    Voice.onSpeechError = (e) => {
      const code = e.error?.code || 'UNKNOWN';
      const message = e.error?.message || 'An error occurred during speech recognition';
      console.log('Speech error:', code, message);
      
      handleError(code, message);
    };

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    if (error) {
      console.error('error', error);
    }
  }, [error]);

  useEffect(() => {
    console.log('result', result);
  }, [result]);

  const startRecognition = async () => {
    console.log('Starting recognition');
    if (!Voice || typeof Voice.start !== 'function') {
      handleError('INIT_ERROR', 'Voice module is not properly initialized.');
      return;
    }
    try {
      resetState();
      await Voice.start('id-ID');
    } catch (e: any) {
      console.error('Start recognition error:', e);
      handleError('START_ERROR', e.message || 'Failed to start voice recognition');
    }
  };
  

  const stopRecognition = async () => {
    console.log('Stopping recognition');
    try {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      await Voice.stop();
      setStarted(false);
      setResult('');
      hasResultRef.current = false;
      isProcessingRef.current = false;
    } catch (e: any) {
      console.error('Stop recognition error:', e);
      handleError('STOP_ERROR', e.message || 'Failed to stop voice recognition');
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
