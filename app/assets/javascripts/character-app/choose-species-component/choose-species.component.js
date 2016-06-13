"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var character_service_1 = require('./../services/character.service');
var species_service_1 = require('./../services/species.service');
var ChooseSpeciesComponent = (function () {
    function ChooseSpeciesComponent(router, characterService, speciesService) {
        this.router = router;
        this.characterService = characterService;
        this.speciesService = speciesService;
    }
    ChooseSpeciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characterService
            .get(1)
            .then(function (character) { return _this.character = character; })
            .catch(function (error) { return console.log(error); });
        this.speciesService
            .query()
            .then(function (species) { return _this.species = species; })
            .catch(function (error) { return console.log(error); });
    };
    ChooseSpeciesComponent.prototype.selectSpecies = function (species) {
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
    };
    ChooseSpeciesComponent.prototype.saveCharacter = function () {
        var _this = this;
        this.characterService
            .save(this.character)
            .then(function (character) { return _this.router.navigate(['Characters']); })
            .catch(function (error) { return console.log(error); });
    };
    ChooseSpeciesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'choose-species',
            templateUrl: 'choose-species.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, character_service_1.CharacterService, species_service_1.SpeciesService])
    ], ChooseSpeciesComponent);
    return ChooseSpeciesComponent;
}());
exports.ChooseSpeciesComponent = ChooseSpeciesComponent;
//# sourceMappingURL=choose-species.component.js.map