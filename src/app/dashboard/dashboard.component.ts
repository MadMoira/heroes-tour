import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/hero/hero';
import { HeroService } from 'app/hero/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  heroes: Hero[];

  constructor(private heroService: HeroService) {};

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}