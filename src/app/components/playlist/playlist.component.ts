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

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getUserPlaylist()
    .subscribe( (data: any) => {
      console.log(data);
      this.playlists = data;
      this.loading = false;
    } );
  }


}
