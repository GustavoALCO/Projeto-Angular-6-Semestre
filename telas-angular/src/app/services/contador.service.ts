import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private contadores: { idProduto: string, contador: number }[] = [];

  constructor() { }

  atualizarContador(idProduto: string, novoValor: number) {
    const contadorIndex = this.contadores.findIndex(contador => contador.idProduto === idProduto);
    if (contadorIndex !== -1) {
    
      this.contadores[contadorIndex].contador = novoValor;
    } else {
      
      this.contadores.push({ idProduto: idProduto, contador: novoValor });
    }
  }

  obterContadores() {
    return this.contadores;
  }

  obterContadorId(idProduto: string) {
    const contador = this.contadores.find(contador => contador.idProduto === idProduto);
    console.log("teste")
    if (contador) {
      
      return contador.contador;
    } 
      
      return 1;
      
  }
}
