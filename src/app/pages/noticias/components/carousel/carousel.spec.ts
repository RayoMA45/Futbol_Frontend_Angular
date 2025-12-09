import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent {

  @ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLDivElement>;

  // ancho del elemento + márgenes (ajústalo si cambias tu CSS)
  private cardWidth = 450; 

  scrollRight() {
    this.carousel.nativeElement.scrollLeft += this.cardWidth;
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollLeft -= this.cardWidth;
  }
}
