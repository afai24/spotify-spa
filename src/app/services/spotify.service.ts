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
   // token authorization spotify
   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC8wZOOrV_XP_9TGsTt6mRvbI8-sPVbuWm1GDouskZWrrkpEGaq96WLb20VnFkobtJAsQ3l5yZhKMXhkSA'
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
    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
       .pipe( map( data => data['tracks'] ));
   }

   getUser() {
     return this.getQuery(`users/afai24`);
    /* .pipe(map( data => {
        console.log(data);
     }));*/
   }

   getUserPlaylist() {
    return this.getQuery(`me/playlists`)
    .pipe(map( data => {
       console.log(data);
    }));
  }

}
