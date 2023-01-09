import { Component, OnInit } from '@angular/core';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-dados-cardio',
  templateUrl: './dados-cardio.page.html',
  styleUrls: ['./dados-cardio.page.scss'],
})
export class DadosCardioPage implements OnInit {

  cardio: IMusculos;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.cardio = this.dadosService.pegarDados('cardio');
    console.log('exercicio enviado', this.cardio);
  }

}
