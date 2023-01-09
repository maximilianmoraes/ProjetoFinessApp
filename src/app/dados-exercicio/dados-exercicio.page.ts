import { IExercicio } from '../Models/IExercicio.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-exercicio',
  templateUrl: './dados-exercicio.page.html',
  styleUrls: ['./dados-exercicio.page.scss'],
})
export class DadosExercicioPage implements OnInit {

  exercicio: IExercicio;



  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.exercicio = this.dadosService.pegarDados('exercicio');
    console.log('exercicio enviado', this.exercicio);
  }

}
