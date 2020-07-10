"use strict";
cc._RF.push(module, '8a22eyUrRNOUL+Y62Pjd6nD', 'STMazeHelper');
// Script/STMazeHelper.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var MazeData_1 = require("./MazeData");
var STMazeHelper = /** @class */ (function (_super) {
    __extends(STMazeHelper, _super);
    function STMazeHelper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tileSpriteFrame = null;
        return _this;
    }
    STMazeHelper.prototype.setTileSpriteFrame = function (sp) {
        this._tileSpriteFrame = sp;
    };
    STMazeHelper.prototype.createTile = function (pNode, tile) {
        var node = new cc.Node("New Sprite");
        var sprite = node.addComponent(cc.Sprite);
        node.parent = pNode;
        sprite.spriteFrame = this._tileSpriteFrame;
        this.resetTileColor(node, tile.getType(), tile.getIsMist());
        var TILESIZE = MazeData_1.MazeData.TILESIZE;
        node.anchorX = 0;
        node.anchorY = 1;
        node.setContentSize(new cc.Size(TILESIZE, TILESIZE));
        node.x = tile.getY() * TILESIZE;
        node.y = -tile.getX() * TILESIZE;
        return node;
    };
    STMazeHelper.prototype.resetTileColor = function (node, type, isMist) {
        var color = null;
        if (isMist) {
            color = cc.Color.BLACK;
        }
        else {
            if (type === MazeData_1.TILE_TYPE.ROAD)
                color = cc.Color.WHITE;
            else if (type === MazeData_1.TILE_TYPE.WALL)
                color = cc.Color.BLUE;
            else if (type === MazeData_1.TILE_TYPE.PATH)
                color = cc.Color.RED;
        }
        node.color = color;
    };
    // 递归完毕, 播放查找的过程.
    STMazeHelper.prototype.playProcess = function (tileNodes, process, isSleep) {
        if (isSleep === void 0) { isSleep = true; }
        var self = this;
        function sleep(ms) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve('');
                            }, ms);
                        })];
                });
            });
        }
        function playProcess() {
            return __awaiter(this, void 0, void 0, function () {
                var i, tile, node;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < process.length)) return [3 /*break*/, 4];
                            tile = process[i];
                            node = tileNodes[tile.getX()][tile.getY()];
                            self.resetTileColor(node, tile.getType(), tile.getIsMist());
                            if (!isSleep) return [3 /*break*/, 3];
                            return [4 /*yield*/, sleep(5)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        playProcess();
    };
    return STMazeHelper;
}(Singleton_1.Singleton));
exports.STMazeHelper = STMazeHelper;

cc._RF.pop();