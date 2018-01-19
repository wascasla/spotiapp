import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  constructor(public http: HttpClient) {
    console.log('servicio spotify listo');
  }

  getArtistas(termino: string){
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=track&market=US&limit=20`
    let headers = new HttpHeaders({
        'authorization': 'Bearer BQA0J8odqPs_Qvoqd4zbp68Pap7bnE-bc6oruPCO52IuqcGp404NBM7fxZw4oM3Ll37AaCQbUG3zDPw3UeA'
    })

    return this.http.get(url, {headers})
            .map((resp:any) => {
              this.artistas = resp.tracks.items;
              return this.artistas;
            });
  }


}
