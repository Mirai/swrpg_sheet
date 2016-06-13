import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Character } from './../classes/character';

@Injectable()
export class CharacterService {
  private apiUrl = '/api/characters';  // URL to web api

  constructor(private http: Http) { }

  query(): Promise<Character[]> {
    return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  get(id: number) {
    return this.query()
               .then(characters => characters.filter(character => character.id === id)[0]);
  }

  save(character: Character): Promise<Character>  {
    if (character.id) {
      return this.put(character);
    }
    return this.post(character);
  }

  delete(character: Character) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.apiUrl}/${character.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  // Add new Character
  private post(character: Character): Promise<Character> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.apiUrl, JSON.stringify(character), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  // Update existing Character
  private put(character: Character) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.apiUrl}/${character.id}`;
    return this.http
               .put(url, JSON.stringify(character), {headers: headers})
               .toPromise()
               .then(() => character)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
