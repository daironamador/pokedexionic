import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPokemonService {
  public url: string;


  constructor(
    private _http: HttpClient
  ) { 
   this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  getData(lmt:any):Observable<any>{
    return this._http.get(this.url+lmt);
  }

  getDetail(id:string): Observable<any>{
    return this._http.get(this.url+id);
  }

  getDescription(id:string): Observable<any>{
    return this._http.get('https://pokeapi.co/api/v2/pokemon-species/'+id);
  }

  // getType(pkmn:any): Observable<any>{
  //   return this._http.get(this.url+pkmn);
  // }
  
}