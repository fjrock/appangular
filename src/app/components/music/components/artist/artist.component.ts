import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MusicService } from '../../../../services/music.service'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {


  constructor(private router: Router,
              private musicService: MusicService) { }

  ngOnInit() {
    

  }
  

}
