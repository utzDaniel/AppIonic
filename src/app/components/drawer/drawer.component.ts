import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IFilme } from 'src/app/model/IFilme.model';
import { DadosService } from 'src/app/services/dados.service';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @ViewChild('drawer', { read: ElementRef }) drawer: ElementRef;
  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();

  filme: IFilme = null;
  title: string = '';
  myList = false;
  download = false;

  constructor(public toastController: ToastController, public dadosService: DadosService, public route: Router) { }

  exibir(filme: IFilme) {
    this.dadosService.saveDados('filme', filme);
    this.route.navigateByUrl('/dados');
  }

  openDrawer(filme: IFilme) {
    this.filme = filme;
    this.title = filme.title;
    const drawer = this.drawer.nativeElement;
    drawer.style.transition = '.2s ease-in';
    drawer.style.transform = `translateY(-300px) `;
    this.openState.emit(true);
  }

  closeDrawer() {
    const drawer = this.drawer.nativeElement;
    drawer.style.transition = '.2s ease-out';
    drawer.style.transform = '';
    this.openState.emit(false);
  }

  playClick() {
    const drawer = this.drawer.nativeElement;
    drawer.style.transition = '.2s ease-out';
    drawer.style.transform = '';
    this.openState.emit(false);
  }

  downloadClick() {
    if (!this.download) {
      this.msgToast("Baixando " + this.filme.title, "success");
      this.download = true;
    }
  }

  myListClick() {
    if (!this.myList) {
      this.msgToast("Adicionado na lista.", "success");
    } else {
      this.msgToast("Removendo da lista.", "danger");
    }
    this.myList = !this.myList;
  }

  informationClick() {
    const drawer = this.drawer.nativeElement;
    drawer.style.transition = '.2s ease-out';
    drawer.style.transform = '';
    this.openState.emit(false);
  }

  async msgToast(msg, cor) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      color: cor
    });

    toast.present();
  }

}
