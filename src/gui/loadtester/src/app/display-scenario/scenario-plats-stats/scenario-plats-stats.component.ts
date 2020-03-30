import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Scenario, PlatfromStat } from 'src/app/shared/models/scenario.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-scenario-plats-stats',
  templateUrl: './scenario-plats-stats.component.html',
  styleUrls: ['./scenario-plats-stats.component.css']
})
export class ScenarioPlatsStatsComponent implements OnInit {
  @Input() scenario: Scenario;
  displayedColumns: string[] = ['name', 'averageRtt', 'standardDeviation'];
  dataSource;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.scenario.platformStats);
  }

  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }

}
