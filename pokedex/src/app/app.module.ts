import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SearchPokemonPipe } from './search-pokemon.pipe';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { AboutTableComponent } from './about-table/about-table.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    SearchPokemonPipe,
    PokemonDetailsComponent,
    AboutTableComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
