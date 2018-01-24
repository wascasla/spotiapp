import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  tracks: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQAYl3-MdPrz7bFFiNs8Ig8EOvxr-7l_OJwZtHi6nv8njipcPve4PtuT9-Lndcijj9uOHhKdWemrd6Wsh34';

  constructor(public http: HttpClient) {
    console.log('servicio spotify listo');
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
        'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getTop(id: string){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`
    let headers = this.getHeaders();

    return this.http.get(url, {headers})
            .map((resp:any) => {
              console.log(resp);
              this.tracks = resp;
              return this.tracks;
            });
  }

  getArtista( id: string){
    let url = `${ this.urlSpotify }artists/${ id }`
    let headers = this.getHeaders();

    return this.http.get(url, {headers})
            .map((resp:any) => {
              console.log(resp);
              this.artistas = resp;
              return this.artistas;
            });
  }

  getArtistas(termino: string){
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&market=US&limit=20`
    let headers = this.getHeaders();

    return this.http.get(url, {headers})
            .map((resp:any) => {
              console.log(resp);
              this.artistas = resp.artists.items;
              return this.artistas;
            });
  }


}
