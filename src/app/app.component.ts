import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero:Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = 
    heroes);
  }

  onSelect (hero:Hero): void{
    this.selectedHero = hero;
  }
}
