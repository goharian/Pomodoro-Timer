import { loadSessions } from "../services/timer-storage";

export interface DayAverage {
  day: string; 
  average: number;
}

export function calculateWeeklyAverage(): DayAverage[] {
  const sessions = loadSessions();
  const dayMap = new Map<string, number[]>();

  for (const session of sessions) {
    const date = new Date(session.date);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    if (!dayMap.has(dayName)) {
      dayMap.set(dayName, []);
    }
    dayMap.get(dayName)!.push(session.seconds);
  }

  const result: DayAverage[] = [];
  for (const [day, secondsList] of dayMap.entries()) {
    const avg = secondsList.reduce((a, b) => a + b, 0) / secondsList.length;
    result.push({ day, average: Math.round(avg) });
  }

  return result;
}
