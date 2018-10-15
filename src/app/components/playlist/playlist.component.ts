import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  playlists: any[] = [];
  loading: boolean;
  items: any[] = [];
  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getUserPlaylist()
    .subscribe( (data: any) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data.items[ i ]);
      }
      console.log(data.items);
      console.log(data);
      this.playlists = data;
      this.items = data.items;
      this.loading = false;
    } );
  }


}
