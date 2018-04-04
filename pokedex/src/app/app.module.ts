import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SearchPokemonPipe } from './search-pokemon.pipe';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { AboutTableComponent } from './about-table/about-table.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { AboutResourcesComponent } from './about-resources/about-resources.component';
import { AboutLearningComponent } from './about-learning/about-learning.component';
import { AboutCodeComponent } from './about-code/about-code.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    SearchPokemonPipe,
    PokemonDetailsComponent,
    AboutTableComponent,
    AboutProjectComponent,
    AboutResourcesComponent,
    AboutLearningComponent,
    AboutCodeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
