import { Routes } from '@angular/router';
import { PomodoroComponent } from './pomodoro/pomodoro';
import { TimerChartComponent } from './chart/chart';

export const routes: Routes = [
  { path: '', redirectTo: '/pomodoro', pathMatch: 'full' },
  { path: 'pomodoro', component: PomodoroComponent },
  { path: 'stats', component: TimerChartComponent },
  { path: '**', redirectTo: '/pomodoro' },
];
