import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioPlatsStatsComponent } from './scenario-plats-stats.component';

describe('ScenarioPlatsStatsComponent', () => {
  let component: ScenarioPlatsStatsComponent;
  let fixture: ComponentFixture<ScenarioPlatsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioPlatsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioPlatsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
