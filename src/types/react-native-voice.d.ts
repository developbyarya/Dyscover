declare module 'react-native-voice' {
  interface Voice {
    onSpeechStart: () => void;
    onSpeechEnd: () => void;
    onSpeechResults: (e: { value?: string[] }) => void;
    onSpeechError: (e: { error?: { message?: string } }) => void;
    start: (locale: string) => Promise<void>;
    stop: () => Promise<void>;
    destroy: () => Promise<void>;
    removeAllListeners: () => void;
  }
  const Voice: Voice;
  export default Voice;
} 