import { Component, OnInit } from '@angular/core';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-dados-ombro',
  templateUrl: './dados-ombro.page.html',
  styleUrls: ['./dados-ombro.page.scss'],
})
export class DadosOmbroPage implements OnInit {

  ombro: IMusculos;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.ombro = this.dadosService.pegarDados('ombro');
    console.log('exercicio enviado', this.ombro);
  }

}
