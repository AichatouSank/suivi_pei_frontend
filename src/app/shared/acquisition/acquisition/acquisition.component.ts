import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AcquisitionService } from 'src/app/core/services/acquisition/acquisition.service';
import  { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-acquisition',
  templateUrl: './acquisition.component.html',
  styleUrls: ['./acquisition.component.scss']
})
export class AcquisitionComponent implements OnInit{
 acquisitionForm : FormGroup
  constructor(private service : AcquisitionService, 
              private builder : FormBuilder,
              private toastr : ToastrService){}
  ngOnInit(): void {
    this.acquisitionForm = this.builder.group({
      
    })
  }
  addAcquisition(){
     this.service.addAcquisition(this.acquisitionForm.value)
     .subscribe({
      next:(res)=>{
        this.acquisitionForm.reset()
      },
      error:()=>{
        
      }
     })
  }

}
