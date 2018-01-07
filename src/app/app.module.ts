import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    ManageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
