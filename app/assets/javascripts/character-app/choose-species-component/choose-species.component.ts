import { Component, OnInit } from '@angular/core';
import { Species } from './../classes/species';
import { SpeciesService } from './../services/species.service';

@Component({
  selector: 'choose-species',
  template: `
    <ul>
      <li *ngFor="let selectedSpecies of species">{{selectedSpecies.name}}</li>
    </ul>
  `
})

export class ChooseSpeciesComponent implements OnInit {
  species: Species[];
  error: any;

  constructor(
    private speciesService: SpeciesService
  ) { }

  ngOnInit() {
    this.speciesService
      .query()
      .then(species => this.species = species)
      .catch(error => this.error = error);

  }
}
