import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrevisionComponent } from './shared/prevision/add-prevision/add-prevision.component';
import { PrevisionComponent } from './shared/prevision/prevision/prevision.component';

const routes: Routes = [
  {path:"prevision", component:PrevisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
