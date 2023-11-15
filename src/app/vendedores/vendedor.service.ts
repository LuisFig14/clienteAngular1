import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedor } from './vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private url:string="http://localhost:8080/vendedor" //URL de la API

  constructor(private http: HttpClient) { }

  //obtener un vendedor
  get(id:any):Observable<Vendedor>{ //para obtener un vendedor se le pasa como parametro el id
    return this.http.get<Vendedor>(this.url + '/'+ id); //retorna del protocolo http hace un get de vendedor y como parametro la ruta de la API + el id
  }

  //obtener todos vendedores
  getAll():Observable<Vendedor[]>{
    return this.http.get<Vendedor[]> (this.url);
  }
  //metodo crear vendedor
  create(vendedor:Vendedor ):Observable<Vendedor>{ //recibe como parámetro un objeto tipo vendedor
    return this.http.post<Vendedor>(this.url, vendedor); //va a retornar de esta http va a hacer un envio dela clase vendedor y como parametro a esta url y el vendedor que se hizo la instancia
  }

  //metodo actualizar
  update(vendedor:Vendedor):Observable<Vendedor>{
    return this.http.put<Vendedor>(this.url, vendedor);
  }

  //metodo eliminar
  delete(id:any): Observable<Vendedor>{ //se le pasa como parametro el id 
    return this.http.delete<Vendedor>(this.url + '/' + id); //retorna dek protocolo http delete de vendedor como parametro la url de la api y el id que se desea eliminar
  }




}
