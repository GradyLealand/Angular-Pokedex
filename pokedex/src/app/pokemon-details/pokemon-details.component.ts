import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  inputs: ['poke']
})
export class PokemonDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
