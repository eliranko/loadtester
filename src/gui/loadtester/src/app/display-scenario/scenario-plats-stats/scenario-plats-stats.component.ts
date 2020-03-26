import { Component, OnInit, ViewChild } from '@angular/core';
import { Scenario, PlatfromStat } from 'src/app/shared/models/scenario.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-scenario-plats-stats',
  templateUrl: './scenario-plats-stats.component.html',
  styleUrls: ['./scenario-plats-stats.component.css']
})
export class ScenarioPlatsStatsComponent implements OnInit {
  scenario: Scenario;
  displayedColumns: string[] = ['name', 'averageRtt', 'standardDeviation'];
  dataSource;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    this.scenario = new Scenario(); 
    this.scenario.platformStats = [];

    let platStats = new PlatfromStat();
    platStats.name = "ספינה 1";
    platStats.averageRtt = 50.5;
    platStats.standardDeviation = 6.8;
    this.scenario.platformStats.push(platStats);

    let platStats1 = new PlatfromStat();
    platStats1.name = "ספינה 2";
    platStats1.averageRtt = 33.4;
    platStats1.standardDeviation = 10.1;
    this.scenario.platformStats.push(platStats1);

    let platStats2 = new PlatfromStat();
    platStats2.name = "ספינה 3";
    platStats2.averageRtt = 5.9;
    platStats2.standardDeviation = 1.2;
    this.scenario.platformStats.push(platStats2);

    let platStats3 = new PlatfromStat();
    platStats3.name = "ספינה 4";
    platStats3.averageRtt = 558.1;
    platStats3.standardDeviation = 59.5;
    this.scenario.platformStats.push(platStats3);

    this.dataSource = new MatTableDataSource(this.scenario.platformStats);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }

}
