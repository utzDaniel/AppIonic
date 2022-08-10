import { Component, OnInit } from '@angular/core';
import { IFilme } from '../model/IFilme.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  filme: IFilme;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.getDados('filme')
  }

}
