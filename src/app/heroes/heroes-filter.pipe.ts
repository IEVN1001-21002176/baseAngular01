import { Pipe, PipeTransform } from '@angular/core';
import { Iheroes } from './iheroes';

@Pipe({
  name: 'heroesFilter',
  standalone: false
})
export class HeroesFilterPipe implements PipeTransform {

  transform(value: Iheroes[], args: string): Iheroes[] {
    let filter:string=args?args.toLocaleLowerCase():'';

    return filter?value.filter((heroe:Iheroes)=>
      heroe.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }

}
