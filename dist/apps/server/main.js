(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@ffdc/nestjs-oidc");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@ffdc/api_corporate-accounts");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ffdc_nestjs_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _ffdc_nestjs_proxy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ffdc_nestjs_proxy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _configs_proxy_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ffdc_api_corporate_accounts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
/* harmony import */ var _ffdc_api_corporate_accounts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ffdc_api_corporate_accounts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _configs_graphql_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony import */ var _configs_oidc_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14);
/* harmony import */ var _configs_serve_startic_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigModule"].forRoot({
                isGlobal: true,
                ignoreEnvFile: "production" === 'production',
            }),
            _ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_4__["OidcModule"].forRootAsync({
                imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigModule"]],
                useClass: _configs_oidc_config_service__WEBPACK_IMPORTED_MODULE_12__[/* OidcConfigService */ "a"],
            }),
            _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_3__["ServeStaticModule"].forRootAsync({
                useClass: _configs_serve_startic_config_service__WEBPACK_IMPORTED_MODULE_13__[/* ServiceStaticConfigService */ "a"],
            }),
            _ffdc_nestjs_proxy__WEBPACK_IMPORTED_MODULE_5__["ProxyModule"].forRootAsync({
                useClass: _configs_proxy_config_service__WEBPACK_IMPORTED_MODULE_8__[/* ProxyConfigService */ "a"],
                imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigModule"]],
            }),
            _ffdc_api_corporate_accounts__WEBPACK_IMPORTED_MODULE_10__["CorporateAccountsModule"],
            _nestjs_graphql__WEBPACK_IMPORTED_MODULE_9__["GraphQLModule"].forRootAsync({
                useClass: _configs_graphql_config_service__WEBPACK_IMPORTED_MODULE_11__[/* GqlConfigService */ "a"],
            }),
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_6__[/* AppController */ "a"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__[/* AppService */ "a"]],
    })
], AppModule);



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@ffdc/nestjs-proxy");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    user(req) {
        return req.user.userinfo;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/user'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Request"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "user", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"]) === "function" ? _a : Object])
], AppController);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
var _a;



let ProxyConfigService = class ProxyConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createModuleConfig() {
        const FFDC = this.configService.get('FFDC');
        const services = [
            {
                id: 'CORPORATE_ACCOUNTS',
                url: `${FFDC}/corporate/channels/accounts/me/v1/accounts`,
            },
        ];
        return {
            services,
        };
    }
};
ProxyConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]) === "function" ? _a : Object])
], ProxyConfigService);



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GqlConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ffdc_api_corporate_accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _ffdc_api_corporate_accounts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ffdc_api_corporate_accounts__WEBPACK_IMPORTED_MODULE_2__);



let GqlConfigService = class GqlConfigService {
    createGqlOptions() {
        const playgroundDevOptions = {
            settings: {
                'request.credentials': 'include',
            },
        };
        return {
            typePaths: ['./node_modules/@ffdc/api_corporate-accounts/**/*.graphql'],
            include: [_ffdc_api_corporate_accounts__WEBPACK_IMPORTED_MODULE_2__["CorporateAccountsModule"]],
            playground:  true ? false : undefined,
        };
    }
};
GqlConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GqlConfigService);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OidcConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
var OidcConfigService_1, _a;



let OidcConfigService = OidcConfigService_1 = class OidcConfigService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"](OidcConfigService_1.name);
    }
    createModuleConfig() {
        const issuer = this.configService.get('OIDC_ISSUER');
        const client_id = this.configService.get('OIDC_CLIENT_ID');
        const origin = this.configService.get('OIDC_ORIGIN', process.env.VERCEL_URL || this.getHerokuHost(process.env.HEROKU_APP_NAME));
        this.logger.log(`
issuer     : ${issuer}
client_id  : ${client_id}
origin     : ${origin}`);
        return {
            issuer,
            clientMetadata: {
                client_id,
                client_secret: this.configService.get('OIDC_CLIENT_SECRET'),
            },
            authParams: {
                scopes: this.configService.get('OIDC_SCOPES'),
                resource: this.configService.get('OIDC_RESOURCE'),
            },
            origin,
        };
    }
    getHerokuHost(appName) {
        return `https://${appName}.herokuapp.com`;
    }
};
OidcConfigService = OidcConfigService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]) === "function" ? _a : Object])
], OidcConfigService);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceStaticConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let ServiceStaticConfigService = class ServiceStaticConfigService {
    constructor(configService) {
        this.configService = configService;
        this.appFolder = Object(path__WEBPACK_IMPORTED_MODULE_3__["join"])(__dirname, '../../..', 'dist/apps/client');
    }
    createLoggerOptions() {
        return [
            {
                rootPath: this.appFolder,
            },
        ];
    }
};
ServiceStaticConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]) === "function" ? _a : Object])
], ServiceStaticConfigService);



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_5__);






function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_module__WEBPACK_IMPORTED_MODULE_2__[/* AppModule */ "a"]);
        const issuer = app.get(_nestjs_config__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]).get('OIDC_ISSUER');
        const tokenStore = yield Object(_ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_3__["getTokenStore"])(issuer);
        const reflector = app.get(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__["Reflector"]);
        app.useGlobalGuards(new _ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_3__["TokenGuard"](tokenStore, reflector));
        app.use(compression__WEBPACK_IMPORTED_MODULE_5__());
        Object(_ffdc_nestjs_oidc__WEBPACK_IMPORTED_MODULE_3__["setupSession"])(app);
        //setupStatic(app);
        const port = process.env.PORT || 3000;
        yield app.listen(port);
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map