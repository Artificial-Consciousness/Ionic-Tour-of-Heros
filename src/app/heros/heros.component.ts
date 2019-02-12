import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from './../hero';
import { HEROS } from './../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;

  constructor(private heroService : HeroService) { 
  }

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

  getHeros() : void {
    this.heroService.getHeros().subscribe(heros => this.heros = heros);
  }
}
