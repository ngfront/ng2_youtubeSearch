import { Component,OnInit, ElementRef, EventEmitter } from '@angular/core';

import {SearchBox} from './SearchBox.component';
import {SearchResultComponent} from './SearchResult.component';
import {SearchResult} from './SearchResult';

@Component({
  selector: 'youtube-search',
  directives: [SearchBox, SearchResultComponent],
  template: `
  <div class='container'>
      <div class="page-header">
        <h1>YouTube Search</h1> <span *ngIf="isLoading">Loading...</span>

      </div>

      <div class="row">
        <div class="input-group input-group-lg col-md-12">
          <search-box
            (loading)="checkLoading($event)"
             (results)="updateResults($event)">
           </search-box>
        </div>
      </div>

      <div class="row">
        <search-result
          *ngFor="let result of results"
          [result]="result">
        </search-result>
        
      </div>
  </div>
  `
})
export class YouTubeSearchComponent {
  results: SearchResult[];
  isLoading: boolean;

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
  checkLoading(loadingStatus: boolean):void {
    
    this.isLoading = loadingStatus;
  }
}
