import { Component } from '@angular/core';
import pesquisa from '../../assets/mockdata/pesquisa.json';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sections = pesquisa.sections;

  constructor(private drawerService: DrawerService) {
  }

  openInfo(series) {
    this.drawerService.openDrawer(series.title);
  }

}
