"use strict";
exports.__esModule = true;
var BackendApi = /** @class */ (function () {
    function BackendApi() {
    }
    BackendApi.prototype.test = function (req, res) {
        res.json('Hello World');
        // Catch all other routes and return the index file 
    };
    return BackendApi;
}());
exports.BackendApi = BackendApi;
