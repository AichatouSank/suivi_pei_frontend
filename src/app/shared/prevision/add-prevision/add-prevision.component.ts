import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PrevisionService } from 'src/app/core/services/prevision/prevision.service';

@Component({
  selector: 'app-add-prevision',
  templateUrl: './add-prevision.component.html',
  styleUrls: ['./add-prevision.component.scss']
})
export class AddPrevisionComponent implements OnInit{
  previsionForm : FormGroup
  constructor(private builder : FormBuilder, 
    private service : PrevisionService,
    private toastr : ToastrService
    ){}
  ngOnInit(): void {
    this.previsionForm = this.builder.group({})
  }
  savePrevision(){
    this.service.addPrevision(this.previsionForm.value)
    .subscribe({
      next:(res)=>{
        this.toastr.show("une nouvelle prévision ajoutée avec succes")
        this.previsionForm.reset()
      }
    })
  }

}
