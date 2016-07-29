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
var SearchBox_component_1 = require('./SearchBox.component');
var SearchResult_component_1 = require('./SearchResult.component');
var YouTubeSearchComponent = (function () {
    function YouTubeSearchComponent() {
    }
    YouTubeSearchComponent.prototype.updateResults = function (results) {
        this.results = results;
    };
    YouTubeSearchComponent.prototype.checkLoading = function (loadingStatus) {
        this.isLoading = loadingStatus;
    };
    YouTubeSearchComponent = __decorate([
        core_1.Component({
            selector: 'youtube-search',
            directives: [SearchBox_component_1.SearchBox, SearchResult_component_1.SearchResultComponent],
            template: "\n  <div class='container'>\n      <div class=\"page-header\">\n        <h1>YouTube Search</h1> <span *ngIf=\"isLoading\">Loading...</span>\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-group input-group-lg col-md-12\">\n          <search-box\n            (loading)=\"checkLoading($event)\"\n             (results)=\"updateResults($event)\">\n           </search-box>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <search-result\n          *ngFor=\"let result of results\"\n          [result]=\"result\">\n        </search-result>\n        \n      </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], YouTubeSearchComponent);
    return YouTubeSearchComponent;
}());
exports.YouTubeSearchComponent = YouTubeSearchComponent;
//# sourceMappingURL=YouTubeSearchComponent.js.map