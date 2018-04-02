import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  query: string;
  pokemon: object;
  currentPokemon: object;

  showPokemon(item)
  {
    this.query = "";
    this.currentPokemon = item;
  }

  constructor (private http: HttpClient)
  {
    this.query = '';
    this.pokemon = [];


    console.log(this.pokemon)
  }

  ngOnInit(): void
  {
    this.http.get<Object>('../assets/data.json').subscribe(
      data => {
        this.pokemon = data;
      }
    )
  }
}
