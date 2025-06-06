// hooks/useSpeechRecognition.ts
import * as ExpoStt from "expo-stt";
import { useEffect, useState } from "react";

export const useSpeechRecognition = () => {
  const [spokenText, setSpokenText] = useState<string>("");
  const [error, setError] = useState<string | undefined>();
  const [recognizing, setRecognizing] = useState(false);

  useEffect(() => {
    const onSpeechStart = ExpoStt.addOnSpeechStartListener(() => {
      setSpokenText("");
      setError(undefined);
      setRecognizing(true);
    });

    const onSpeechResult = ExpoStt.addOnSpeechResultListener(({ value }) => {
      setSpokenText(value.join(" "));
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

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (spokenText) {
      console.log(spokenText);
    }
  }, [spokenText]);

  const start = () => ExpoStt.startSpeech();
  const stop = () => ExpoStt.stopSpeech();
  const cancel = () => ExpoStt.cancelSpeech();
  const destroy = () => ExpoStt.destroySpeech();

  const requestPermission = () => ExpoStt.requestRecognitionPermission();
  const checkPermission = () => ExpoStt.checkRecognitionPermission();

  return {
    spokenText,
    error,
    recognizing,
    start,
    stop,
    cancel,
    destroy,
    requestPermission,
    checkPermission,
  };
};
