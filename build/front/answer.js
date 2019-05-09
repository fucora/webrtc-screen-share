/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/front/answer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/answer.ts":
/*!*****************************!*\
  !*** ./src/front/answer.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar screen_reciever_1 = __importDefault(__webpack_require__(/*! ./screen-reciever */ \"./src/front/screen-reciever.ts\"));\nvar createVideo = function () {\n    var aVideo = document.createElement('a-video');\n    aVideo.setAttribute('height', '9');\n    aVideo.setAttribute('width', '16');\n    aVideo.setAttribute('position', '0 4 -9');\n    console.log('ATTACH NOW');\n    var videoHolder = document.getElementById('video-holder');\n    if (videoHolder == null) {\n        console.error('not find element \"#video-holder\"');\n        return;\n    }\n    videoHolder.appendChild(aVideo);\n    var remoteVideo = document.createElement('video');\n    var assets = document.querySelector('a-assets');\n    if (assets == null) {\n        return;\n    }\n    assets.addEventListener('loadeddata', function () {\n        console.log('loaded asset data');\n    });\n    remoteVideo.setAttribute('id', 'remote-video');\n    remoteVideo.setAttribute('autoplay', 'true');\n    remoteVideo.setAttribute('src', '');\n    assets.appendChild(remoteVideo);\n    remoteVideo.addEventListener('loadeddata', function () {\n        aVideo.setAttribute('src', \"#remote-video\");\n    });\n    var reciever = new screen_reciever_1.default(remoteVideo);\n};\ncreateVideo();\n\n\n//# sourceURL=webpack:///./src/front/answer.ts?");

/***/ }),

/***/ "./src/front/screen-reciever.ts":
/*!**************************************!*\
  !*** ./src/front/screen-reciever.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar screen_share_1 = __importDefault(__webpack_require__(/*! ./screen-share */ \"./src/front/screen-share.ts\"));\nvar ScreenReciever = (function (_super) {\n    __extends(ScreenReciever, _super);\n    function ScreenReciever(video) {\n        var _this = _super.call(this) || this;\n        _this.onMessage = function (event) {\n            console.log('ws onmessage() data:', event.data);\n            var message = JSON.parse(event.data);\n            if (message.type === 'offer') {\n                console.log('Received offer ...');\n                var offer = new RTCSessionDescription(message);\n                _this.setOffer(offer);\n            }\n        };\n        _this.playVideo = function (stream) {\n            var video = _this.remoteVideo;\n            video.srcObject = stream;\n            try {\n                video.play();\n            }\n            catch (err) {\n                alert(err);\n            }\n            video.volume = 0;\n        };\n        _this.makeAnswer = function () { return __awaiter(_this, void 0, void 0, function () {\n            var sessionDescription, err_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        console.log('sending Answer. Creating remote session description...');\n                        if (this.peerConnection == null) {\n                            console.error('peerConnection NOT exist!');\n                            return [2];\n                        }\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 4, , 5]);\n                        return [4, this.peerConnection.createAnswer()];\n                    case 2:\n                        sessionDescription = _a.sent();\n                        console.log('createAnswer() succsess');\n                        return [4, this.peerConnection.setLocalDescription(sessionDescription)];\n                    case 3:\n                        _a.sent();\n                        console.log('setLocalDescription() succsess');\n                        return [3, 5];\n                    case 4:\n                        err_1 = _a.sent();\n                        console.error(err_1);\n                        return [3, 5];\n                    case 5: return [2];\n                }\n            });\n        }); };\n        _this.setOffer = function (sessionDescription) { return __awaiter(_this, void 0, void 0, function () {\n            var err_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (this.peerConnection != null) {\n                            console.error('peerConnection alreay exist!');\n                            return [2];\n                        }\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 4, , 5]);\n                        this.peerConnection = this.prepareNewConnection();\n                        return [4, this.peerConnection.setRemoteDescription(sessionDescription)];\n                    case 2:\n                        _a.sent();\n                        return [4, this.makeAnswer()];\n                    case 3:\n                        _a.sent();\n                        return [3, 5];\n                    case 4:\n                        err_2 = _a.sent();\n                        console.error('setRemoteDescription(offer) ERROR: ', err_2);\n                        return [3, 5];\n                    case 5: return [2];\n                }\n            });\n        }); };\n        _this.remoteVideo = video;\n        return _this;\n    }\n    ScreenReciever.prototype.prepareNewConnection = function () {\n        var _this = this;\n        var peer = _super.prototype.prepareNewConnection.call(this);\n        peer.ontrack = function (event) {\n            console.log('-- peer.ontrack()');\n            if (event.streams && event.streams[0]) {\n                console.log('add stream');\n                _this.playVideo(event.streams[0]);\n            }\n            else {\n                console.log('add track');\n                if (_this.inboundStream == null) {\n                    _this.inboundStream = new MediaStream();\n                    _this.playVideo(_this.inboundStream);\n                }\n                _this.inboundStream.addTrack(event.track);\n            }\n        };\n        return peer;\n    };\n    return ScreenReciever;\n}(screen_share_1.default));\nexports.default = ScreenReciever;\n\n\n//# sourceURL=webpack:///./src/front/screen-reciever.ts?");

/***/ }),

/***/ "./src/front/screen-share.ts":
/*!***********************************!*\
  !*** ./src/front/screen-share.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ScreenShare = (function () {\n    function ScreenShare() {\n        var _this = this;\n        this.sendSdp = function (sessionDescription) {\n            console.log('---sending sdp ---');\n            var message = JSON.stringify(sessionDescription);\n            _this.ws.send(message);\n        };\n        this.ws = new WebSocket(this.WS_URL);\n        this.ws.onopen = function (evt) {\n            console.log('ws open()');\n        };\n        this.ws.onerror = function (err) {\n            console.error('ws onerror() ERR:', err);\n        };\n        this.ws.onmessage = function (event) { return _this.onMessage(event); };\n    }\n    ScreenShare.prototype.prepareNewConnection = function () {\n        var _this = this;\n        var pc_config = { \"iceServers\": [] };\n        var peer = new RTCPeerConnection(pc_config);\n        peer.onicecandidate = function (evt) {\n            if (evt.candidate) {\n                console.log(evt.candidate);\n            }\n            else {\n                console.log('empty ice event');\n                if (peer.localDescription != null) {\n                    _this.sendSdp(peer.localDescription);\n                }\n            }\n        };\n        return peer;\n    };\n    Object.defineProperty(ScreenShare.prototype, \"WS_URL\", {\n        get: function () {\n            return \"ws://\" + location.hostname + \":3001/\";\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return ScreenShare;\n}());\nexports.default = ScreenShare;\n\n\n//# sourceURL=webpack:///./src/front/screen-share.ts?");

/***/ })

/******/ });