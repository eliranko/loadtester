import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningScenarioComponent } from './running-scenario.component';

describe('RunningScenarioComponent', () => {
  let component: RunningScenarioComponent;
  let fixture: ComponentFixture<RunningScenarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningScenarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
