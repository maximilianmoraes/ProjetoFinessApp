import { Component, OnInit } from '@angular/core';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-dados-quadriceps',
  templateUrl: './dados-quadriceps.page.html',
  styleUrls: ['./dados-quadriceps.page.scss'],
})
export class DadosQuadricepsPage implements OnInit {

  quadriceps: IMusculos;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.quadriceps = this.dadosService.pegarDados('quadriceps');
    console.log('exercicio enviado', this.quadriceps);
  }

}
