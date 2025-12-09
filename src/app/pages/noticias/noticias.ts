import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { Carousel } from "./components/carousel/carousel";

@Component({
  selector: 'app-noticias',
  imports: [Menu, Carousel],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {

}
