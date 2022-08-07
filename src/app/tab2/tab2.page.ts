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
  dateAtual = new Date;

  constructor() {
  }

}
