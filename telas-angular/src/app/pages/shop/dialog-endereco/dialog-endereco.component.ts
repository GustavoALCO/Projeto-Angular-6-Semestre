import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from '../../../services/localstorage.service';
import { ProdutosService } from '../../../services/produtos.service';
import { Produtos } from '../../../models/Produtos';
import { ContadorService } from '../../../services/contador.service';

@Component({
  selector: 'app-dialog-endereco',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-endereco.component.html',
  styleUrl: './dialog-endereco.component.scss'
})
export class DialogEnderecoComponent {
  endereco: string = '';
  numero!: number 
  complemento: string = '';
  produtos: Produtos[] = [];
  camposPreenchidos: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<DialogEnderecoComponent>,
    private localstorage: LocalStorageService,
    private ProdutosService: ProdutosService,
    private contadorService: ContadorService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit():void{
      this.obterProdutos();
      
    }
  close(): void {
    this.dialogRef.close();
  }
  verificar() {
    this.camposPreenchidos = this.endereco !== '' && this.numero !== undefined ;
  }

  pagamento(): void {
    
    if (this.data && this.data.vf !== null) {
      
      console.log('Valor de this.data.vf:', this.data.vf, this.produtos);
      
      // Mapear os produtos para um formato adequado para serialização
      const produtosDetails = this.produtos.map(produto => {
        const contador = this.contadorService.obterContadorId(produto.idProduto);
        
          return `${contador} ${produto.produto}: Ingredientes: ${produto.descricao}\n`;
        
    });
  
      // Concatenar os detalhes dos produtos em uma única string
      const produtosDetailsString = produtosDetails.join(', ');
  
       
      const mensagem = `Novo Pedido\n\nValor a Pagar: ${this.data.vf.toFixed(2)}\n\nProdutos:\n${produtosDetailsString}\n\n------------------------------------------------------\n\nEndereço = ${this.endereco}\nN° = ${this.numero}\nComplemento = ${this.complemento}`;
  
      // Montar a URL com os detalhes dos produtos e o valor this.vf
      const url = `https://wa.me/+5511940250807?text=${encodeURIComponent(mensagem)}`;
  
      // Abrir a URL em uma nova aba
      window.open(url, '_blank');
    } else {
      console.error(`this.data não está definido ou this.data.vf é nulo.`);
    }
  }
  obterContadores(id:string){
    this.contadorService.obterContadorId(id)
  }

  obterProdutos(): void {
    // Obter os IDs do Local Storage
    const ids = this.localstorage.getId();
  
    // Array para armazenar os produtos
    const produtosTemp: Produtos[] = [];
  
    ids.forEach(id => {
      this.ProdutosService.GetProdutoID(id)
        .subscribe(produtos => {
          // Adicionar os produtos retornados ao array temporário
          produtosTemp.push(...produtos);
  
          // Verificar se todas as chamadas foram concluídas
          if (produtosTemp.length === ids.length) {
            this.produtos = produtosTemp;
          }
        });
    });
  }
}
