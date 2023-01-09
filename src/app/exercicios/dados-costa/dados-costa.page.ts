import { Component, OnInit } from '@angular/core';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-dados-costa',
  templateUrl: './dados-costa.page.html',
  styleUrls: ['./dados-costa.page.scss'],
})
export class DadosCostaPage implements OnInit {

  costa: IMusculos;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.costa = this.dadosService.pegarDados('costa');
    console.log('exercicio enviado', this.costa);
  }

}
