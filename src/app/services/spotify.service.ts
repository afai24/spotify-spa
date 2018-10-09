import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify service listo');
   }

   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCqz1RUfBLlt05iC8lPuZoeBgi3RThOoaeNCqoc7WTHJgbozx5vlxd8yHjg-9KOWvdAQNx-OSU_2Zlh-hs'
    });

    return this.http.get(url, { headers });

   }

   getNewReleases() {

    return this.getQuery('browse/new-releases?limit=24')
    .pipe( map( data => {
      return data['albums'].items;
    }));

   }

   getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ));
   }

   getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
      // .pipe( map( data => data['artists'].items ));
   }

   getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
       .pipe( map( data => data['tracks'] ));
   }
}
