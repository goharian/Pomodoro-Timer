import { saveSession, loadSessions, TimerSession } from './timer-storage';

describe('timer-storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save and load a session correctly', () => {
    saveSession(1500); // 25 minutes in seconds
    const sessions = loadSessions();
    expect(sessions.length).toBe(1);
    expect(sessions[0].seconds).toBe(1500);
    expect(typeof sessions[0].date).toBe('string');
  });

  it('should append sessions on multiple saves', () => {
    saveSession(100);
    saveSession(200);
    const sessions = loadSessions();
    expect(sessions.length).toBe(2);
    expect(sessions[0].seconds).toBe(100);
    expect(sessions[1].seconds).toBe(200);
  });
});
