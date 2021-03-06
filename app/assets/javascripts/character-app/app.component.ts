import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import { CharactersComponent } from './characters-component/characters.component';
import { ChooseSpeciesComponent } from './choose-species-component/choose-species.component';

import { CharacterService } from './services/character.service';
import { SpeciesService } from './services/species.service';

@Component({
  selector: 'character-app',
  template: '<router-outlet></router-outlet>',
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    CharacterService,
    SpeciesService
  ]
})

@RouteConfig([
  {
    path: '/',
    name: 'Characters',
    component: CharactersComponent,
    useAsDefault: true
  },
  {
    path: '/new',
    name: 'ChooseSpecies',
    component: ChooseSpeciesComponent,
  }
])

export class AppComponent { }
