import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPokemon'
})
export class SearchPokemonPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
