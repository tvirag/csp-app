import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
})


export class Lab1Component implements OnInit {

  title = 'app';
  csp: any[];
  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:3000/csp').subscribe(t=> {
//	     console.log(t);
	      this.csp = t;
      })
}

  ngOnInit() {
  }
}
