import { IMusculos } from './../../Models/IMusculos.model';
import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/services/dados.service';


@Component({
  selector: 'app-dados-triceps',
  templateUrl: './dados-triceps.page.html',
  styleUrls: ['./dados-triceps.page.scss'],
})
export class DadosTricepsPage implements OnInit {



  triceps: IMusculos;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.triceps = this.dadosService.pegarDados('triceps');
    console.log('exercicio enviado', this.triceps);
  }

}
