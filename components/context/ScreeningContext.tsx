import React, { createContext, useContext, useState } from 'react';

interface ScreeningScore {
  word: string;
  expectedWord: string;
  isCorrect: boolean;
  timestamp: Date;
}

interface ScreeningContextType {
  scores: ScreeningScore[];
  addScore: (score: Omit<ScreeningScore, 'timestamp'>) => void;
  clearScores: () => void;
  getAccuracy: () => number;
}

const ScreeningContext = createContext<ScreeningContextType | undefined>(undefined);

export function ScreeningProvider({ children }: { children: React.ReactNode }) {
  const [scores, setScores] = useState<ScreeningScore[]>([]);

  const addScore = (score: Omit<ScreeningScore, 'timestamp'>) => {
    setScores(prev => [...prev, { ...score, timestamp: new Date() }]);
  };

  const clearScores = () => {
    setScores([]);
  };

  const getAccuracy = () => {
    if (scores.length === 0) return 0;
    const correctAnswers = scores.filter(score => score.isCorrect).length;
    return (correctAnswers / scores.length) * 100;
  };

  return (
    <ScreeningContext.Provider value={{ scores, addScore, clearScores, getAccuracy }}>
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