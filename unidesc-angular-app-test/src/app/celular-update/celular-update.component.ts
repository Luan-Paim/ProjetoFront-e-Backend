import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Celular } from "../models/Celular";
import { CelularService } from '../services/celular.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-celular-update',
  templateUrl: './celular-update.component.html',
  styleUrls: ['./celular-update.component.css']
})
export class CelularUpdateComponent implements OnInit {

  item?: any;

  celular: Celular = {
    _id: '',
    nome: '',
    empresa: '',
    modelo: '',
    preco: 0
  }

  constructor(private celularService: CelularService, private route:ActivatedRoute) {   }

  ngOnInit(): void {
    this.item = this.route.paramMap.subscribe(params => {
      console.log(params);
      this.celular = {
        _id: params.get('_id')!,
        nome: params.get('nome')!,
        empresa: params.get('empresa')!,
        modelo: params.get('modelo')!,
        preco: new Number(params.get('preco')!)
      }
    })
  }
  
  atualizarCelular(){
    this.celularService.updateCelular(this.celular)
    .subscribe(
      response => {        
        
        Swal.fire(
          'Unidesc',
          'Celular atualizado com sucesso.',
          'success'
        )
      },
      error => {
        console.log(error);
      });    
  }

}