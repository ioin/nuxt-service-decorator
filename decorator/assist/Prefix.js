"use strict";
exports.__esModule = true;
/**
 * route prefix for @Get @Post @Arbitrary method
 * @param prefix url prefix
 * @returns
 */
function ServiceRoutePrefix(prefix) {
    return function (target) {
        target.prototype.$prefix = prefix;
    };
}
exports["default"] = ServiceRoutePrefix;
