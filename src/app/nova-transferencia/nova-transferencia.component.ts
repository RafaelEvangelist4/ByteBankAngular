import { routes } from './../app-routing.module';
import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir(){
    console.log("Solicitar nova transferencia");

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) =>{
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    error => console.error(error));
    this.limparCampos();
  }


  limparCampos(){
    this.destino = 0;
    this.valor = 0;
  }
}
