import React, { createContext, useContext, useState } from 'react';
import { fetchScreeningTest } from '../backend/screeningService';

interface ScreeningScore {
  word: string;
  expectedWord: string;
  isCorrect: boolean;
  timestamp: Date;
  type: 'alphabet' | 'word';
}

interface ScreeningContextType {
  scores: ScreeningScore[];
  addScore: (score: Omit<ScreeningScore, 'timestamp'>) => void;
  clearScores: () => void;
  getAccuracy: () => number;
  alphabetTest: string[][];
  wordTest: string[];
  currentAlphabetIndex: number;
  currentWordIndex: number;
  setCurrentAlphabetIndex: (index: number) => void;
  setCurrentWordIndex: (index: number) => void;
  loadTestData: () => Promise<void>;
  isLoading: boolean;
  getCurrentTestType: () => 'alphabet' | 'word';
}

const ScreeningContext = createContext<ScreeningContextType | undefined>(undefined);

export function ScreeningProvider({ children }: { children: React.ReactNode }) {
  const [scores, setScores] = useState<ScreeningScore[]>([]);
  const [alphabetTest, setAlphabetTest] = useState<string[][]>([]);
  const [wordTest, setWordTest] = useState<string[]>([]);
  const [currentAlphabetIndex, setCurrentAlphabetIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentTestType = () => {
    // If we haven't completed alphabet test, we're in alphabet test
    if (currentAlphabetIndex < alphabetTest.length) {
      return 'alphabet';
    }
    return 'word';
  };

  const addScore = (score: Omit<ScreeningScore, 'timestamp'>) => {
    // Don't add score if the result is empty
    if (!score.word.trim()) {
      return;
    }

    // Add the current test type if not provided
    const scoreWithType = {
      ...score,
      type: score.type || getCurrentTestType(),
      timestamp: new Date()
    };

    setScores(prev => [...prev, scoreWithType]);
  };

  const clearScores = () => {
    setScores([]);
    setCurrentAlphabetIndex(0);
    setCurrentWordIndex(0);
  };

  const getAccuracy = () => {
    const validScores = scores.filter(score => score.word.trim() !== '');
    if (validScores.length === 0) return 0;
    
    // Get the total number of expected answers
    const totalExpected = alphabetTest.length + wordTest.length;
    
    // Get the number of correct answers
    const correctAnswers = validScores.filter(score => score.isCorrect).length;
    
    // Calculate accuracy based on total expected answers
    return (correctAnswers / totalExpected) * 100;
  };

  const loadTestData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchScreeningTest();
      setAlphabetTest(data.alphabet_test);
      setWordTest(data.word_test);
    } catch (error) {
      console.error('Error loading test data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreeningContext.Provider 
      value={{ 
        scores, 
        addScore, 
        clearScores, 
        getAccuracy,
        alphabetTest,
        wordTest,
        currentAlphabetIndex,
        currentWordIndex,
        setCurrentAlphabetIndex,
        setCurrentWordIndex,
        loadTestData,
        isLoading,
        getCurrentTestType
      }}
    >
      {children}
    </ScreeningContext.Provider>
  );
}

export function useScreening() {
  const context = useContext(ScreeningContext);
  if (context === undefined) {
    throw new Error('useScreening must be used within a ScreeningProvider');
  }
  return context;
} 