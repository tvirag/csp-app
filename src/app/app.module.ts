import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AnatomyComponent } from './anatomy/anatomy.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { InjuriesComponent } from './conditions/injuries/injuries.component';
import { MedicalComponent } from './conditions/medical/medical.component';
import { ManageComponent } from './manage/manage.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3Component } from './lab3/lab3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssessmentComponent,
    AnatomyComponent,
    ConditionsComponent,
    ProceduresComponent,
    EquipmentComponent,
    InjuriesComponent,
    MedicalComponent,
    ManageComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
	  HttpClientModule,
    TypeaheadModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
