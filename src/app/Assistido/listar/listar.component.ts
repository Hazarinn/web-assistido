import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Assistido } from './../../model/Assistido';
import { AssistidoService } from './../assistido.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private service: AssistidoService,
              private dialog: MatDialog,
             private snackBar: MatSnackBar) { }
  assistidos: Assistido[] = [];
  colunasTabela: string[] = ['id', 'nome', 'cpfCnpj', 'logradouro', 'cep', 'bairro', 'cidade', 'acoes'];
  ngOnInit(): void {
    this.buscarAssistidos();
  }
  buscarAssistidos(){
    this.service.buscarTodosAssistidos().subscribe(data => {
      this.assistidos = data;
    }, erro => {
      this.snackBar.open('Erro ao Buscar Produtos', 'Fechar', {
        duration: 5000,

      });
    })
  }
//   abrirModalEditarProduto(produto: Produto){
//     this.dialog.open(EditaProdutoComponent, {
//       width: '300px',
//       height: '350px',
//       data: produto
//     }).afterClosed().subscribe(result => {
//       if(result){
//           this.buscarProdutos();
//       }
//     });
// }

abrirModalConfirmacaoExclusao(assistido:Assistido){

    Swal.fire({
      title: `Excluir Produto`,
      html: `Você deseja realmente excluir o Produto <b>${assistido.nome}</b> ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.excluirAssistido(assistido.id);
      }
    });
  }

   excluirAssistido(idAssistido: number){
        this.service.excluirAssistido(idAssistido).subscribe(data => {
          this.snackBar.open('Assistido Excluido com sucesso!', null, 
          {duration: 5000
          });
          this.buscarAssistidos();
        }, error => {
          this.snackBar.open('Erro ao tentar excluir o produto', null, 
          {duration: 5000
          });
        });
   }  

}
