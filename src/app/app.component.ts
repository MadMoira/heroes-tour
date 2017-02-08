import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) {};

  title = "Tour of heroes";
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() : void {
    this.getHeroes();
  }
}
