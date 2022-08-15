import { Component } from '@angular/core';
import banco from '../../assets/mockdata/banco.json';
import { IFilme } from '../model/IFilme.model';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  filmes: IFilme[];


  constructor(private drawerService: DrawerService) {
    this.verificaData();
  }

  buscar(evento: any) {
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmes = this.filmes.filter(filme =>
        filme.title.toLowerCase().includes(busca.toLowerCase()));
    } else {
      this.verificaData();
    }

  }

  openInfo(filme: IFilme) {
    this.drawerService.openDrawer(filme);
  }

  verificaData() {
    this.filmes = banco.filter(filme =>
      new Date(filme.date) <= new Date);
  }

}
