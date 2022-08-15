import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import homeData from '../../assets/mockdata/home.json';
import { ModalPage } from '../modal/modal.page';
import { modalEnterAnimation, modalLeaveAnimation } from '../modal-animation';
import { DrawerService } from '../services/drawer.service';
import banco from '../../assets/mockdata/banco.json';
import { IFilme } from '../model/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  filmes: IFilme[] = banco;

  sections = homeData.sections;
  spotlight = homeData.spotlight;

  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    freeMode: true
  };

  constructor(private modalCtrl: ModalController, private drawerService: DrawerService) {
    this.verificaData();
  }

  async openCategories() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'transparent-modal',
      enterAnimation: modalEnterAnimation,
      leaveAnimation: modalLeaveAnimation
    });

    await modal.present();
  }

  openInfo(series) {
    this.drawerService.openDrawer(series.title);
  }

  verificaData() {
    this.filmes = this.filmes.filter(filme =>
      new Date(filme.date) > new Date);
  }

}
