import { Component } from '@angular/core';
import home from '../../assets/mockdata/home.json';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  sections = home.sections;
  destaque = home.destaque;

  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    freeMode: true
  };

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) {

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
