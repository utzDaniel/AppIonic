import { Component } from '@angular/core';
import banco from '../../assets/mockdata/banco.json';
import { IFilme } from '../model/IFilme.model';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  filmes: IFilme[] = banco;

  constructor() {
    this.verificaDownload();
  }

  verificaDownload() {
    this.filmes = this.filmes.filter(filme =>
      filme.downloand === true);
  }

}
