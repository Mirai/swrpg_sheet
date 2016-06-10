import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Species } from './../classes/species';

@Injectable()
export class SpeciesService {
  private apiUrl = '/api/species';  // URL to web api

  constructor(private http: Http) { }

  query(): Promise<Species[]> {
    return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
