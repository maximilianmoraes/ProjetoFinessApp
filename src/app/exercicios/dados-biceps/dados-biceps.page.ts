import { Component, OnInit } from '@angular/core';
import { IMusculos } from 'src/app/Models/IMusculos.model';
import { DadosService } from 'src/app/services/dados.service';


@Component({
  selector: 'app-dados-biceps',
  templateUrl: './dados-biceps.page.html',
  styleUrls: ['./dados-biceps.page.scss'],
})
export class DadosBicepsPage implements OnInit {



  biceps: IMusculos;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.biceps = this.dadosService.pegarDados('biceps');
    console.log('exercicio enviado', this.biceps);
  }

}
