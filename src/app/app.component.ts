import { Component } from '@angular/core';
import { HeroesComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Tour of heroes'
}