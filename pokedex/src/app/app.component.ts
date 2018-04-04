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
  about: boolean;

  //set the selected pokemon to currentPokemon
  showPokemon(item)
  {
    this.currentPokemon = item;
  }

  //clear the serch bar when its selected
  clearSearch()
  {
    this.query = "";
    this.currentPokemon = null;
  }

  //open app page
  openApp()
  {
    this.about = false;
  }

  //open about table
  openAbout()
  {
    this.about = true;
  }
  
  constructor (private http: HttpClient)
  {
    this.query = '';
    this.pokemon = [];
    this.about = false;

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
