import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private chaveStorage = 'ids';

  constructor() { }

  adicionarId(id: string) {
    let idsSalvos: string[] = this.getId();
    if (!idsSalvos.includes(id)) {
      idsSalvos.push(id);
      this.atualizarIds(idsSalvos);
    }
    if (idsSalvos.length === 1){
      location.reload();
    }
  }

  getId(): string[] {
    try {
      // Verifica se o localStorage está disponível
      if (typeof localStorage !== 'undefined') {
        let storedIds: string | null = localStorage.getItem(this.chaveStorage);
        if (storedIds === null) {
          console.error('Chave não encontrada no localStorage.');
          return ['']; // Define o valor padrão desejado
        }
        return JSON.parse(storedIds);
      } else {
        console.error('localStorage não está disponível.');
        return ['']; // Define o valor padrão desejado em caso de localStorage não estar disponível
      }
    } catch (error) {
      console.error('Erro ao acessar localStorage:', error);
      return ['']; // Retorna um valor padrão em caso de erro
    }
  }
  
  
  removerId(id: string) {
    let idsSalvos: string[] = this.getId();
    const index = idsSalvos.indexOf(id);
    if (index !== -1) {
      idsSalvos.splice(index, 1);
      this.atualizarIds(idsSalvos);
      location.reload();
    }
  }

  limparIds() {
    try {
      localStorage.removeItem(this.chaveStorage);
    } catch (error) {
      console.error('Erro ao limpar localStorage:', error);
    }
  }

  private atualizarIds(ids: string[]) {
    try {
      localStorage.setItem(this.chaveStorage, JSON.stringify(ids));
    } catch (error) {
      console.error('Erro ao atualizar localStorage:', error);
    }
  }
}
