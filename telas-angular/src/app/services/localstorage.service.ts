import { Injectable } from '@angular/core';     


@Injectable({
    providedIn: 'root'
  })
  export class LocalStorageService {
    private chaveLocalStorage = 'ids';
  
    constructor() { }
  
    adicionarId(id: string) {
      let idsSalvos = this.getId();
      idsSalvos.push(id);
      localStorage.setItem(this.chaveLocalStorage, JSON.stringify(idsSalvos));
      
      if (idsSalvos.length === 1){
        location.reload()
      }
    }
    getId(): string[] {
      return JSON.parse(localStorage.getItem(this.chaveLocalStorage) || '[]');
    }
  
    limparIds() {
      localStorage.removeItem(this.chaveLocalStorage);
    }
    
  }