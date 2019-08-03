import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  videos: any[];
  
  constructor( private youTubeService: YoutubeService) { }

  ngOnInit() {

    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
     // .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          console.log(element);
          this.videos.push(element)
        }
      });
  
  }

  unsubscribe$(unsubscribe$: any): import("rxjs").OperatorFunction<Object, Object> {
    throw new Error("Method not implemented.");
  }

}
