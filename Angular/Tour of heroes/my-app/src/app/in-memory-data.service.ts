import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';
import {Injectable} from '@angular/core';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
   createDb() {
     const heroes = [
        {id: 11, name: 'Supergirl',  superpower: 'super strength'},
        {id: 12, name: 'Zaltana',  superpower: 'magic tricks'},
        {id: 13, name: 'Brainiac',  superpower: 'greed'},
        {id: 14, name: 'Catwoman',superpower: 'cat abilities'},
        {id: 15, name: 'Sailor moon', superpower: 'moon spells'},
        {id: 16, name: 'Iron man', superpower: 'iron armor'}
     ];
     return {heroes};
   }
   genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +
    1 : 11;
   }
  constructor() { }
}
