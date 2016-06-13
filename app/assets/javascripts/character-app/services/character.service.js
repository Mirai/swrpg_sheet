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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CharacterService = (function () {
    function CharacterService(http) {
        this.http = http;
        this.apiUrl = '/api/characters'; // URL to web api
    }
    CharacterService.prototype.query = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CharacterService.prototype.get = function (id) {
        return this.query()
            .then(function (characters) { return characters.filter(function (character) { return character.id === id; })[0]; });
    };
    CharacterService.prototype.save = function (character) {
        if (character.id) {
            return this.put(character);
        }
        return this.post(character);
    };
    CharacterService.prototype.delete = function (character) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + character.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    // Add new Character
    CharacterService.prototype.post = function (character) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.apiUrl, JSON.stringify(character), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Update existing Character
    CharacterService.prototype.put = function (character) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + character.id;
        return this.http
            .put(url, JSON.stringify(character), { headers: headers })
            .toPromise()
            .then(function () { return character; })
            .catch(this.handleError);
    };
    CharacterService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CharacterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CharacterService);
    return CharacterService;
}());
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map