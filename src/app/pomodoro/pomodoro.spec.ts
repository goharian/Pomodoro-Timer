import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PomodoroComponent } from './pomodoro';

describe('PomodoroComponent', () => {
  let component: PomodoroComponent;
  let fixture: ComponentFixture<PomodoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PomodoroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PomodoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('resetTimer should stop timer and reset timeLeft to 25 minutes', () => {
    component.timeLeft = 100;
    component.isRunning = true;
    component.intervalId = setInterval(() => {}, 1000);

    component.resetTimer();

    expect(component.timeLeft).toBe(25 * 60);
    expect(component.isRunning).toBeFalse();
  });

  it('startTimer should start the timer and decrease timeLeft', fakeAsync(() => {
    component.resetTimer();
    component.startTimer();
    expect(component.isRunning).toBeTrue();

    tick(1000);
    expect(component.timeLeft).toBe(25 * 60 - 1);

    component.pauseTimer();
  }));

  it('pauseTimer should stop the timer', () => {
    component.startTimer();
    component.pauseTimer();
    expect(component.isRunning).toBeFalse();
  });
});
