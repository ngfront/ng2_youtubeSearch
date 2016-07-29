import { Component,OnInit, ElementRef, EventEmitter } from '@angular/core';
import {YouTubeService} from '../services/YouTubeService.service';
import {SearchResult} from './SearchResult';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'search-box',
  outputs:['results', 'loading'],
  template: `
  <input type="text" class="form-control" placeholder="Search" autofocus>
  `  
})
export class SearchBox implements OnInit {
    results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
    loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public youtube: YouTubeService,
    private el: ElementRef) {

  }

  ngOnInit() {
    let searchBox = this.el.nativeElement;

    let SearchStream$ = Observable.fromEvent(searchBox, 'keyup')
                         .map((e:any) => e.target.value)
                         .filter((text: string) => text.length > 1)
                         .debounceTime(250)
                         .do(() => this.loading.next(true))
                         .map((query:string) => this.youtube.search(query))
                         .switch();

      SearchStream$.subscribe(
        (results: SearchResult[]) => {
          this.results.next(results);
          this.loading.next(false);
        },
        (err:any) => {
          this.loading.next(false);
          this.loading.next(false);
        },
        () => {
          this.loading.next(false);
        }
      )   
  }
}