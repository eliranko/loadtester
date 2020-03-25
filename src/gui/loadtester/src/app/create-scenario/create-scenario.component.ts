import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-scenario',
  templateUrl: './create-scenario.component.html',
  styleUrls: ['./create-scenario.component.css']
})
export class CreateScenarioComponent implements OnInit {
  form;
  
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      taskforce: '',
      bps: '',
      txTtl: '',
      maxBodySize: '',
      timeToRun: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.form.reset();
  }
}
