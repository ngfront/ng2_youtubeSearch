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
var SearchResultComponent = (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent = __decorate([
        core_1.Component({
            inputs: ['result'],
            selector: 'search-result',
            template: "\n   <div class=\"col-sm-6 col-md-3\">\n      <div class=\"thumbnail\">\n        <img src=\"{{result.thumbnailUrl}}\">\n        <div class=\"caption\">\n          <h3>{{result.title}}</h3>\n          <p>{{result.description}}</p>\n          <p><a href=\"{{result.videoUrl}}\"\n                class=\"btn btn-default\" role=\"button\">Watch</a></p>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
//# sourceMappingURL=SearchResult.component.js.map