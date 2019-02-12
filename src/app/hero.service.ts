import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros() : Observable<Hero[]> {
    return of(HEROS);
  }
}
