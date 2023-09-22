import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  
   /*  AddPrevisionComponent,
    PointFocalDashboardComponent,
    AdminDashboardComponent,
    AgentDgsiDashboardComponent,
    AddCritereObsolescenceComponent,
    SuiviMatieresDashboardComponent,
    LeftSideComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
