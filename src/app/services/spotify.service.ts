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
      'Authorization': 'Bearer BQDs7DzqRficw2GtI4GjYgQlteSfnd-ScBMmv-HtbPaBbq65_sFnWj2fILdWh2qAY-aT8dbsVLuOgV7s3Ko'
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

   // spotify user required, in this case i use my spotify user: afai24
   getUser() {
     return this.getQuery(`users/afai24`);
   }

   getUserPlaylist() {
    return this.getQuery(`users/afai24/playlists?offset=0&limit=20`);
  }

}
