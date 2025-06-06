import * as ExpoStt from 'expo-stt';
import { useEffect, useState } from 'react';

useEffect(() => {
    const [spokenText, setSpokenText] = useState("");
    const [error, setError] = useState<string | undefined>(undefined);
    const [recognizing, setRecognizing] = useState(false);
    
  const onSpeechStart = ExpoStt.addOnSpeechStartListener(() => {
    setSpokenText("");
    setError(undefined);
    setRecognizing(true);
  });

  const onSpeechResult = ExpoStt.addOnSpeechResultListener(({ value }) => {
    setSpokenText(value.join());
  });

  const onSpeechCancelled = ExpoStt.addOnSpeechCancelledListener(() => {
    setRecognizing(false);
  });

  const onSpeechError = ExpoStt.addOnSpeechErrorListener(({ cause }) => {
    setError(cause);
    setRecognizing(false);
  });

  const onSpeechEnd = ExpoStt.addOnSpeechEndListener(() => {
    setRecognizing(false);
  });

  return () => {
    onSpeechStart.remove();
    onSpeechResult.remove();
    onSpeechCancelled.remove();
    onSpeechError.remove();
    onSpeechEnd.remove();
  };
}, []);