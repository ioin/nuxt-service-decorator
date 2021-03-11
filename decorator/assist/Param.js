"use strict";
exports.__esModule = true;
/**
 *  used by send param if you return nothing in function
 * @param name send param name
 * @param defaultValue  default value
 * @returns Parameter decorator
 */
function Param(name, defaultValue) {
    return function (target, methodName, index) {
        var method = target[methodName];
        if (method.$sends || (method.$sends = [])) {
            method.$sends.push({ name: name, defaultValue: defaultValue });
        }
    };
}
exports["default"] = Param;
