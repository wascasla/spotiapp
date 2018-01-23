import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';

  constructor(public http: HttpClient) {
    console.log('servicio spotify listo');
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
        'authorization': 'Bearer BQAy_rLyIm-33DNosIiPiQRRe6hPpyxBdBIQ55FWV8AdYjhphPeagxAyEVJkCLsy6r9ZngfjV0606C3mY90'
    });

    return headers;
  }

  getArtista( id: string){
    let url = `${ this.urlSpotify }artists/${ id }`


    return this.http.get(url, {headers})
            .map((resp:any) => {
              console.log(resp);
              this.artistas = resp.artists.items;
              return this.artistas;
            });
  }

  getArtistas(termino: string){
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&market=US&limit=20`
    let headers = new HttpHeaders({
        'authorization': 'Bearer BQAy_rLyIm-33DNosIiPiQRRe6hPpyxBdBIQ55FWV8AdYjhphPeagxAyEVJkCLsy6r9ZngfjV0606C3mY90'
    })

    return this.http.get(url, {headers})
            .map((resp:any) => {
              console.log(resp);
              this.artistas = resp.artists.items;
              return this.artistas;
            });
  }


}
