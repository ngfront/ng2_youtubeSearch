import { Component } from '@angular/core';
import {YouTubeSearchComponent} from './components/YouTubeSearchComponent';
import {YouTubeService, youTubeServiceInjectables} from './services/YouTubeService.service';

@Component({
  selector: 'my-app',
  // template: `Im running`
  template: '<youtube-search></youtube-search>',
  directives:[YouTubeSearchComponent],
  providers:[YouTubeService,youTubeServiceInjectables]
})
export class AppComponent { }
