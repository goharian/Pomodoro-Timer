
# 📘 API Documentation – Pomodoro Timer

## 1. `TimerComponent`
Handles the core timer logic and UI interactions.

### Methods:

- `startTimer(): void`  
  Starts the Pomodoro timer and updates the countdown every second.

- `pauseTimer(): void`  
  Pauses the countdown and retains the current state.

- `resetTimer(): void`  
  Resets the timer to its initial duration.

- `completeSession(): void`  
  Called when the timer reaches zero. Displays a completion message and saves the session.

---

## 2. `AppComponent`
Root component of the application.

### Properties:

- Basic Angular component logic for wrapping the application.

---

## 3. `AlertService`
A centralized service to show styled alerts using SweetAlert2.

```ts
@Injectable({ providedIn: 'root' })
export class AlertService
```

### Methods:

- `success(message: string, title?: string): void`  
  Displays a success popup. Default title: `'Success'`.

- `error(message: string, title?: string): void`  
  Displays an error popup. Default title: `'Error'`.

- `info(message: string, title?: string): void`  
  Displays an informational popup. Default title: `'Info'`.

---

## 4. `TimerSession` Module
Handles storing and retrieving completed timer sessions in `localStorage`.

### Interface:

```ts
export interface TimerSession {
  date: string;   // Format: YYYY-MM-DD
  seconds: number;
}
```

### Constants:

- `STORAGE_KEY = 'timer_sessions'`  
  Key used for saving data in `localStorage`.

### Functions:

- `saveSession(seconds: number): void`  
  Saves the duration of the latest completed session to `localStorage`.

- `loadSessions(): TimerSession[]`  
  Loads all previously saved sessions from `localStorage`.

## 5. TimerChartComponent

A standalone Angular component that renders a bar chart of weekly average session times.

### Dependencies

- `chart.js`
- `ng2-charts`

`calculateWeeklyAverage()` returns an array of objects:  
`{ day: string, average: number }[]`

### Lifecycle

- **ngOnInit()**:  
  Fetches, sorts, and prepares chart data:
  
  - `chartData`: `ChartData<'bar', number[], string>`
  - `chartOptions`: `ChartOptions<'bar'>` with axis titles