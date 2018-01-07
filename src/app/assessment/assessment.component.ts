import { Component, OnInit } from '@angular/core';

import { AssessmentItem } from './assessment.model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  assessmentItems: AssessmentItem[] = [
      new AssessmentItem ('Overview','Overview details',''),
      new AssessmentItem ('Scene survey','Scene survey details',''),
      new AssessmentItem ('Primary assessment','Primary assessment details','')

  ];

  constructor() { }

  ngOnInit() {
  }

}
