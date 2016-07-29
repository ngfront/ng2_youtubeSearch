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
var YouTubeService_service_1 = require('../services/YouTubeService.service');
var Rx_1 = require('rxjs/Rx');
var SearchBox = (function () {
    function SearchBox(youtube, el) {
        this.youtube = youtube;
        this.el = el;
        this.results = new core_1.EventEmitter();
        this.loading = new core_1.EventEmitter();
    }
    SearchBox.prototype.ngOnInit = function () {
        var _this = this;
        var searchBox = this.el.nativeElement;
        var SearchStream$ = Rx_1.Observable.fromEvent(searchBox, 'keyup')
            .map(function (e) { return e.target.value; })
            .filter(function (text) { return text.length > 1; })
            .debounceTime(250)
            .do(function () { return _this.loading.next(true); })
            .map(function (query) { return _this.youtube.search(query); })
            .switch();
        SearchStream$.subscribe(function (results) {
            _this.results.next(results);
            _this.loading.next(false);
        }, function (err) {
            _this.loading.next(false);
            _this.loading.next(false);
        }, function () {
            _this.loading.next(false);
        });
    };
    SearchBox = __decorate([
        core_1.Component({
            selector: 'search-box',
            outputs: ['results', 'loading'],
            template: "\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n  "
        }), 
        __metadata('design:paramtypes', [YouTubeService_service_1.YouTubeService, core_1.ElementRef])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
//# sourceMappingURL=SearchBox.component.js.map