"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Service = exports.Post = exports.Get = exports.Defined = exports.Store = exports.Prefix = exports.Param = void 0;
var Param_1 = require("./decorator/assist/Param");
__createBinding(exports, Param_1, "default", "Param");
var Prefix_1 = require("./decorator/assist/Prefix");
__createBinding(exports, Prefix_1, "default", "Prefix");
var Store_1 = require("./decorator/assist/Store");
__createBinding(exports, Store_1, "default", "Store");
var Defined_1 = require("./decorator/methods/Defined");
__createBinding(exports, Defined_1, "default", "Defined");
var Get_1 = require("./decorator/methods/Get");
__createBinding(exports, Get_1, "default", "Get");
var Post_1 = require("./decorator/methods/Post");
__createBinding(exports, Post_1, "default", "Post");
var Service_1 = require("./decorator/Service");
__createBinding(exports, Service_1, "default", "Service");
exports["default"] = {};
