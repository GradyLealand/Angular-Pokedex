import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [],
  inputs:['poke']
})
export class PokemonCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
