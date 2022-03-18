import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Assistido } from './../model/Assistido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistidoService {
API = `${environment.API}/assistido`
  constructor(private httpClient: HttpClient) { }

  buscarTodosAssistidos(): Observable<Assistido[]>{
    return this.httpClient.get<Assistido[]>(this.API);
  }

  salvarAssistido(assistido: Assistido, ): Observable<Assistido> {
     return this.httpClient.post<Assistido>(`${this.API}`, assistido);
  }

  editarAssistido(assistido: Assistido): Observable<Assistido> {
    return this.httpClient.put<Assistido>(`${this.API}/${assistido.id}`, assistido);
  }

 excluirAssistido(idProduto: number) {
  return this.httpClient.delete(`${this.API}/${idProduto}`);
  }
}
