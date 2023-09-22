import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ObsolescenceService } from 'src/app/core/services/obsolescence/obsolescence.service';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-add-obsolescence',
  templateUrl: './add-obsolescence.component.html',
  styleUrls: ['./add-obsolescence.component.scss']
})
export class AddObsolescenceComponent implements OnInit{
  obsolescenceForm : FormGroup
  constructor(private builder : FormBuilder,
              private service : ObsolescenceService,
              private toastr : ToastrService){}
  ngOnInit(): void {
    this.obsolescenceForm = this.builder.group({})
  }
  addObsolescence(){
    if(this.obsolescenceForm.valid){
      this.service.addObsolescence(this.obsolescenceForm.value)
      .subscribe({
        next:(reponse)=>{
          this.toastr.success(" ")
        },
        error:()=>{

        }
      })
    }
  }

}
