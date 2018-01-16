import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  template: `
    <h2>HEROES</h2>
    <p>Get your heroes here</p>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  styles: []
})
export class HeroListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
