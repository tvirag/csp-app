import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
})

export class Lab3Component {

  groupSelected: string;
//  statesComplex: any[] = [
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
