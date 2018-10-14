import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor( private spotify: SpotifyService ) {
    let name;
    this.spotify.getUser()
    .subscribe((data: any) => {
      console.log(data);
      name = data['display_name'];
    });
  }


}
