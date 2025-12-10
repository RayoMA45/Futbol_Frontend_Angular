import { Component } from '@angular/core';
import { Menu } from '../../shared/menu/menu';
import { Carousel } from "./components/carousel/carousel";
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-noticias',
  imports: [Menu, Carousel, Card],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {

}
