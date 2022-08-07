import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any = [];

  constructor() { }

  saveDados(index: string, dados: any): boolean {
    if (index) {
      this.dados[index] = dados;
      return true;
    }
    return false;
  }

  getDados(index: string): any {
    if (index) {
      return this.dados[index];
    }
    return null;
  }

  removeDados(index: string): boolean {
    return delete this.dados[index];
  }

}
