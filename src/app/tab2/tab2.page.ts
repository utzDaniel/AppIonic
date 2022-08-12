import { Component } from '@angular/core';
import novidades from '../../assets/mockdata/novidades.json';
import { IFilme } from '../model/IFilme.model';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  filmes: IFilme[] = novidades;

  constructor() {
    this.verificaData();
  }

  verificaData() {
    this.filmes = this.filmes.filter(filme =>
      new Date(filme.date) > new Date);
  }
}
