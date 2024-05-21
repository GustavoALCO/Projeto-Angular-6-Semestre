import { Injectable } from '@angular/core';     


@Injectable({
    providedIn: 'root'
  })
  export class LocalStorageService {
    private chaveLocalStorage = 'ids';
  
    constructor() { }
  
    adicionarId(id: string) {
      let idsSalvos: string[] = this.getId();
      if (!idsSalvos.includes(id)) {
        idsSalvos.push(id); 
        localStorage.setItem(this.chaveLocalStorage, JSON.stringify(idsSalvos)); 
      }
      if (idsSalvos.length === 1){
        location.reload()
      }
    }
    getId(): string[] {
      return JSON.parse(localStorage.getItem(this.chaveLocalStorage) || '[]');
    }
    
    removerId(id: string){
      let idsSalvos: string[] = this.getId();
      const index = idsSalvos.indexOf(id);
      if (index !== -1) {
      idsSalvos.splice(index, 1);
      localStorage.setItem(this.chaveLocalStorage, JSON.stringify(idsSalvos)); 
      location.reload()
     }
    }

    limparIds() {
      localStorage.removeItem(this.chaveLocalStorage);
    }
    
  }