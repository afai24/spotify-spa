import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userdata: any = {};

  constructor( private spotify: SpotifyService ) {
    this.spotify.getUser()
    .subscribe((data: any) => {
      console.log(data);
      console.log(name);
      this.userdata = data;
      console.log(this.userdata);
    });
  }


}
