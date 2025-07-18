import { Component, OnInit } from '@angular/core';
import { saveSession } from '../services/timer-storage';
import { AlertService } from '../services/alert';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.html',
  styleUrls: ['./pomodoro.scss']
})
export class PomodoroComponent implements OnInit {
  timeLeft = 25 * 60;
  intervalId: any = null;
  isRunning = false;
  completedToday = 0;

  constructor(private alert: AlertService) { }

  ngOnInit(): void {
    this.loadStats();
  }

  startTimer(): void {
    if (this.isRunning) return;

    this.isRunning = true;
    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.completeSession();
      }
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.intervalId);
    this.isRunning = false;
  }

  resetTimer(): void {
    this.pauseTimer();
    this.timeLeft = 25 * 60;
  }

  get formattedTime(): string {
    const m = Math.floor(this.timeLeft / 60);
    const s = this.timeLeft % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  completeSession(): void {
    try {
      this.pauseTimer();
      saveSession(25 * 60);
      this.alert.success('Pomodoro finished!');
      this.loadStats();
      this.resetTimer();
    } catch (err) {
      this.alert.error('Failed to save session. Please try again.');
    }
  }

  loadStats(): void {
    try {
      const sessions = JSON.parse(localStorage.getItem('timer_sessions') || '[]');
      const today = new Date().toISOString().slice(0, 10);
      this.completedToday = sessions.filter((s: any) => s.date === today).length;
    } catch (err) {
      this.alert.error('Failed to load statistics.');
    }
  }
}
