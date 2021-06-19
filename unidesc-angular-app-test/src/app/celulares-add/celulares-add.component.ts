import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Celular } from "../models/Celular";
import { CelularService } from '../services/celular.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-celulares-add',
  templateUrl: './celulares-add.component.html',
  styleUrls: ['./celulares-add.component.css']
})
export class CelularesAddComponent implements OnInit {

  celular: Celular = {
    nome: '',
    empresa: '',
    modelo: '',
    preco: 0
  }

  constructor(private celularService: CelularService){
    
  }

  ngOnInit(): void {

  }
  addCelular(){
    this.celularService.create(this.celular)
    .subscribe(
      response => {
        this.celular = {
          nome: '',
          empresa: '',
          modelo: '',
          preco: 0
        };
        
        Swal.fire(
          'Unidesc',
          'Celular criado com sucesso.',
          'success'
        )
      },
      error => {
        console.log(error);
      });    
  }

}