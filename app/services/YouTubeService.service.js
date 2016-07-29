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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var SearchResult_1 = require('../components/SearchResult');
exports.YOUTUBE_API_KEY = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
exports.YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
// let loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');
/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */
var YouTubeService = (function () {
    function YouTubeService(http, apiKey, apiUrl) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    YouTubeService.prototype.search = function (query) {
        var params = [
            ("q=" + query),
            ("key=" + this.apiKey),
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var queryUrl = this.apiUrl + "?" + params;
        return this.http.get(queryUrl)
            .map(function (response) {
            return response.json().items.map(function (item) {
                // console.log("raw item", item); // uncomment if you want to debug
                return new SearchResult_1.SearchResult({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    };
    YouTubeService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(exports.YOUTUBE_API_KEY)),
        __param(2, core_1.Inject(exports.YOUTUBE_API_URL)), 
        __metadata('design:paramtypes', [http_1.Http, String, String])
    ], YouTubeService);
    return YouTubeService;
}());
exports.YouTubeService = YouTubeService;
exports.youTubeServiceInjectables = [
    core_1.bind(YouTubeService).toClass(YouTubeService),
    core_1.bind(exports.YOUTUBE_API_KEY).toValue(exports.YOUTUBE_API_KEY),
    core_1.bind(exports.YOUTUBE_API_URL).toValue(exports.YOUTUBE_API_URL)
];
//# sourceMappingURL=YouTubeService.service.js.map