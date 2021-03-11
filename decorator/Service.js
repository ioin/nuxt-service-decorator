"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * register service error
 */
var ServiceRegisterError = /** @class */ (function (_super) {
    __extends(ServiceRegisterError, _super);
    function ServiceRegisterError(msg) {
        var _this = _super.call(this) || this;
        _this.name = "ServiceRegisterError";
        _this.message = "Service regist error cause: " + msg;
        return _this;
    }
    return ServiceRegisterError;
}(Error));
/**
 * register some services to current VueComponent
 * @param services
 * @returns
 */
function Service() {
    var services = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        services[_i] = arguments[_i];
    }
    return function (VueComponent) {
        if (services.length === 0) {
            throw new ServiceRegisterError('At least one service should be registered');
        }
        if (VueComponent.options.computed === undefined) {
            VueComponent.options.computed = {};
        }
        services.forEach(function (service) {
            var serviceName = service.__name;
            if (serviceName === undefined) {
                throw new ServiceRegisterError("Be registered class " + service.name + " is not a service module.Please add @Module(\"" + service.name + "\") to class");
            }
            var firstLetter = serviceName[0];
            serviceName = serviceName.replace(firstLetter, firstLetter.toLowerCase());
            service = new service();
            VueComponent.options.computed[serviceName] = {
                get: function () {
                    service.$axios = this.$axios;
                    service.$store = this.$store;
                    return service;
                }
            };
        });
    };
}
exports["default"] = Service;
