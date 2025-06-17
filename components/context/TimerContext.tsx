import React, { createContext, useContext, useState } from "react";

type TimerContextType = {
  startTime: number | null;
  setStartTime: (time: number) => void;
  endTime: number | null;
  setEndTime: (time: number) => void;
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  return <TimerContext.Provider value={{ startTime, setStartTime, endTime, setEndTime }}>{children}</TimerContext.Provider>;
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
