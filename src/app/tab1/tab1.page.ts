import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import homeData from '../../assets/mockdata/home.json';
import { ModalPage } from '../modal/modal.page';
import { modalEnterAnimation, modalLeaveAnimation } from '../modal-animation';
import { DrawerService } from '../services/drawer.service';
import banco from '../../assets/mockdata/banco.json';
import { IFilme } from '../model/IFilme.model';
import cate from '../../assets/mockdata/categories.json';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  filmes: IFilme[] = banco;
  categorias: string[] = cate;

  sections = homeData.sections;
  spotlight = homeData.spotlight;

  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    freeMode: true
  };

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController, private modalCtrl: ModalController, private drawerService: DrawerService) {
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

  openInfo(filme: IFilme) {
    this.drawerService.openDrawer(filme);
  }

  verificaData() {
    this.filmes = this.filmes.filter(filme =>
      new Date(filme.date) > new Date);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Inicio',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Ação',
          role: 'confirm',
          cssClass: 'cat',
          handler: () => {
            this.handlerMessage = 'Ação';
          },
        }, {
          text: 'Terror',
          role: 'confirm',
          cssClass: 'cat',
          handler: () => {
            this.handlerMessage = 'Terror';
          },
        }, {
          text: 'Suspense',
          role: 'confirm',
          cssClass: 'cat',
          handler: () => {
            this.handlerMessage = 'Suspense';
          },
        }, {
          text: 'Aventura',
          role: 'confirm',
          cssClass: 'cat',
          handler: () => {
            this.handlerMessage = 'Aventura';
          },
        }, {
          text: 'Comédia',
          role: 'confirm',
          cssClass: 'cat',
          handler: () => {
            this.handlerMessage = 'Comédia';
          },
        }, {
          text: 'Ficção científica',
          role: 'confirm',
          cssClass: 'cat',
          handler: () => {
            this.handlerMessage = 'Ficção científica';
          },
        }, {
          text: 'Drama',
          role: 'confirm',
          cssClass: 'cat',
          handler: () => {
            this.handlerMessage = 'Drama';
          },
        }, {
          text: 'Voltar',
          role: 'cancel',
          cssClass: 'cancel',
          handler: () => {
            this.handlerMessage = 'Voltar';
          },
        }
      ],
    });

    await alert.present();
  }
}
