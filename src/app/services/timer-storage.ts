export interface TimerSession {
  date: string; // YYYY-MM-DD
  seconds: number;
}

const STORAGE_KEY = 'timer_sessions';

export function saveSession(seconds: number): void {
  const sessions: TimerSession[] = loadSessions();
  const today = new Date().toISOString().slice(0, 10);
  sessions.push({ date: today, seconds });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

export function loadSessions(): TimerSession[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
