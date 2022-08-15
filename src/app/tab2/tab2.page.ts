import { Component } from '@angular/core';
import banco from '../../assets/mockdata/banco.json';
import { IFilme } from '../model/IFilme.model';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  filmes: IFilme[] = banco;

  constructor() {
    this.verificaData();
  }

  verificaData() {
    this.filmes = this.filmes.filter(filme =>
      new Date(filme.date) > new Date)
      .sort(function (f1, f2) {
        return new Date(f1.date).getTime() - new Date(f2.date).getTime()
      }
      );
  }
}
