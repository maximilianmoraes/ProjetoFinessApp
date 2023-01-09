import { Component, OnInit } from '@angular/core';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-dados-peito',
  templateUrl: './dados-peito.page.html',
  styleUrls: ['./dados-peito.page.scss'],
})
export class DadosPeitoPage implements OnInit {

  peito: IMusculos;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.peito = this.dadosService.pegarDados('peito');
    console.log('exercicio enviado', this.peito);
  }

}
