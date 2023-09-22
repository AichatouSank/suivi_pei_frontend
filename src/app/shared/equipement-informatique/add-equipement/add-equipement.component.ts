import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EquipementService } from 'src/app/core/services/equipement/equipement.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-equipement',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.scss']
})
export class AddEquipementComponent implements OnInit{
  equipementForm : FormGroup
  constructor(private builder : FormBuilder,
              private service : EquipementService,
              private toastr : ToastrService){}
  
  ngOnInit(): void {
    this.equipementForm = this.builder.group({})
  }
  addEquipement(){
    this.service.addEquipement(this.equipementForm.value)
    .subscribe({
      next:(response)=>{
        this.toastr.warning("un nouvel équipement ajouté avec succès")
        this.equipementForm.reset()
      },
      error:()=>{
        
      }
    })
  }
}
