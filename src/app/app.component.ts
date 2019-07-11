import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  ngAfterViewInit() {
    new WOW().init();
  }
}
