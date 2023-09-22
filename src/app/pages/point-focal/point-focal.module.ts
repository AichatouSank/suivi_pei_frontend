import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointFocalRoutingModule } from './point-focal-routing.module';
import { AddPrevisionComponent } from '../../shared/prevision/add-prevision/add-prevision.component';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PointFocalRoutingModule,
    InputTextModule
  ],
  
})
export class PointFocalModule { }
