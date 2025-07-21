# Pomodoro Timer

A modern and responsive Pomodoro Timer desktop application built with **Angular** and **Electron**, designed to help users enhance focus and productivity using the Pomodoro technique. Features include task management, customizable timers, light/dark mode, notifications, and user-friendly UI powered by SweetAlert2.

---

## 🧠 Application Description

Pomodoro Timer is a productivity application that helps users manage their time using the Pomodoro Technique: 25 minutes of focused work followed by a 5-minute break. After every 4 sessions, users get a longer break.

### Key Features:
- Customizable Pomodoro, short break, and long break durations  
- Start, pause, reset, and skip functionality  
- Responsive UI with light/dark mode toggle  
- SweetAlert2 notifications and error modals  
- Task list management  
- Persistent settings (optional localStorage)  
- Desktop support via Electron

---

## ⚙️ Setup Instructions

### Prerequisites:
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/)
- [Electron](https://www.electronjs.org/)

### Clone the repository:
```bash
git clone https://github.com/goharian/Pomodoro-Timer.git
cd Pomodoro-Timer

## Development server

To start a local development server, run:

```bash
npm install
npm run start:electron
```

✅ The app window should open automatically once the build completes.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 🧱 Architecture Decisions
Tech Stack:
Frontend Framework: Angular 20V

Desktop Runtime: Electron

Alerting: SweetAlert2 for clean and modern dialogs

Styling: CSS Grid/Flexbox, global theming (dark/light mode)

State Management: Component-level (no global state library)

Routing: 2 different views

## ⚠️ Known Limitations
No persistent storage of task list or timer sessions (can be added with localStorage or a backend).

Currently supports only one task list at a time.

Sound alerts are not implemented.

Not tested on all OSes (only Windows verified).
