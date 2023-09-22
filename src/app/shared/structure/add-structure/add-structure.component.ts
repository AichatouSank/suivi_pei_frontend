import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss']
})
export class AddStructureComponent implements OnInit{
  structureForm : FormGroup
  constructor(private builder : FormBuilder){}
  ngOnInit(): void {
    this.structureForm = this.builder.group({
      libelleCourt : ['', Validators.compose],
      libelleLong : {}
    })
  }

}
