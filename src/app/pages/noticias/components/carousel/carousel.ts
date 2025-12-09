import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {

  @ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLDivElement>;

  private cardWidth = 400 + 50;

  scrollRight() {
    this.carousel.nativeElement.scrollLeft += this.cardWidth;
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollLeft -= this.cardWidth;
  }
}
