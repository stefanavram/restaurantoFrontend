import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CarouselModule} from 'primeng/primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarouselModule]
})
export class HomeComponent implements OnInit {

  images: any[];
  public myInterval: number = 5000;
  public noWrapSlides: boolean = false;
  public slides: Array<any> = [];


  constructor(public translate: TranslateService) {
    //adding slides for carousel
    for (let i = 0; i < 3; i++) {
      this.addSlide();
    }

  }

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/pepperoni.png',
      alt: 'Description for Image 1',
    title: 'Title 1'
  });
  }


  public addSlide(): void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['Excellent', 'Great', 'Pretty good'][this.slides.length % 3]}`
    });
  }

  public removeSlide(index: number): void {
    this.slides.splice(index, 1);
  }

}
