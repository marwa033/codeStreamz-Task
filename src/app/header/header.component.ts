import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
   providers: [NgbCarouselConfig]
})
export class HeaderComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = true;
  images = [ '/assets/1.jpg' , '/assets/3.jpg', '/assets/2.jpg'];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(){
  }
}
