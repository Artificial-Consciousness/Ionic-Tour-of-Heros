import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HEROS } from './../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heros = HEROS;

  constructor() { }

  ngOnInit() {
  }

  selectedHero: Hero;
  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }
}
