import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFilme } from '../model/IFilme.model';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  drawerOpen = new BehaviorSubject(null);

  constructor() { }

  openDrawer(filme: IFilme) {
    this.drawerOpen.next({ open: true, filme });
  }
}
