import { Component } from '@angular/core';
import pesquisa from '../../assets/mockdata/pesquisa.json';
import { IFilme } from '../model/IFilme.model';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  filmes: IFilme[] = pesquisa;


  constructor(private drawerService: DrawerService) {
  }

  openInfo(filme: IFilme) {
    this.drawerService.openDrawer(filme);
  }

}
