import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Celular } from "../models/Celular";
import { CelularService } from '../services/celular.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html',
  styleUrls: ['./celular-list.component.css']
})
export class CelularListComponent implements OnInit {

  celulares?: Celular[];

  constructor(private celularService: CelularService, private router:Router) { }

  ngOnInit(): void {
    this.getCelulares();
  }

  getCelulares(){
    this.celularService.getAll()
    .subscribe(
      data => {
        this.celulares = data;
      },
      error => {
        console.log(error);
      });

  }

  deleteCelular(item:any){
    this.celularService.delete(item._id)
    .subscribe(
      data => {
        this.getCelulares();

        Swal.fire(
          'Unidesc',
          'Celular Deletado',
          'success'
        )
      },
      error => {
        console.log(error);
      });
  }
  
  redirectUpdateCelular(celular:Celular){    
    this.router.navigate(['/editar', celular]);
  }

}
