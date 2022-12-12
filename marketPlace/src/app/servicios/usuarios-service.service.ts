import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { params } from '../enviorenment/enviorenment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  constructor(private http: HttpClient) {

   }

   getUsuarios(): Observable<Array<Usuario>>{
    return this.http.get<Array<Usuario>>(params.URL_BACK);
   }
}
