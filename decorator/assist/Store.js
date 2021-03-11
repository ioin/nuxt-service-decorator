"use strict";
exports.__esModule = true;
/**
 * used by send param where in store state
 * @param storeKey a key in vuex, get a module value use dot split
 * @param rename if null will use the last split dot of storeKey
 * @param defaultValue
 * @returns Parameter decorator
 */
function Store(storeKey, rename, defaultValue) {
    return function (service, methodName, index) {
        var method = service[methodName];
        if (method.$store || (method.$store = [])) {
            var keyChain = storeKey.split(".");
            method.$store.push({ storeKey: storeKey, keyChain: keyChain, name: rename !== null && rename !== void 0 ? rename : keyChain[keyChain.length - 1], defaultValue: defaultValue });
        }
    };
}
exports["default"] = Store;
