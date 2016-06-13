import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Character } from './../classes/character';
import { Species } from './../classes/species';
import { CharacterService } from './../services/character.service';
import { SpeciesService } from './../services/species.service';

@Component({
  moduleId: module.id,
  selector: 'choose-species',
  templateUrl: 'choose-species.component.html'
})

export class ChooseSpeciesComponent implements OnInit {
  character: Character;
  species: Species[];
  selectedSpecies: Species;

  constructor(
    private router: Router,
    private characterService: CharacterService,
    private speciesService: SpeciesService
  ) { }

  ngOnInit() {
    this.characterService
      .get(1)
      .then(character => this.character = character)
      .catch(error => console.log(error));

    this.speciesService
      .query()
      .then(species => this.species = species)
      .catch(error => console.log(error));
  }

  selectSpecies(species: Species) {
    this.character.species_id = species.id;
    this.character.brawn = species.brawn;
    this.character.agility = species.agility;
    this.character.intellect = species.intellect;
    this.character.cunning = species.cunning;
    this.character.willpower = species.willpower;
    this.character.presence = species.presence;
    this.character.exp_total = species.exp_starting;
    this.character.exp_remaining = species.exp_starting;

    this.selectedSpecies = species;
  }

  saveCharacter() {
    this.characterService
      .save(this.character)
      .then(character => this.router.navigate(['Characters']))
      .catch(error => console.log(error));
  }
}
