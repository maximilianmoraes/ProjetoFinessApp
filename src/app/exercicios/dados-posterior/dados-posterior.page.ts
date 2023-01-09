import { Component, OnInit } from '@angular/core';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-dados-posterior',
  templateUrl: './dados-posterior.page.html',
  styleUrls: ['./dados-posterior.page.scss'],
})
export class DadosPosteriorPage implements OnInit {


  posterior: IMusculos;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.posterior = this.dadosService.pegarDados('posterior');
    console.log('exercicio enviado', this.posterior);
  }

}
