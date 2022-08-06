import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { Component } from '@angular/core';
import pesquisa from '../../assets/mockdata/novidades.json';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sections = pesquisa.sections;
  dateAtual = new Date;

  constructor() {
  }

}
