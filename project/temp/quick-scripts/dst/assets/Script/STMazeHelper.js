
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/STMazeHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTVE1hemVIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBcUM7QUFDckMsdUNBQWlEO0FBR2pEO0lBQTJCLGdDQUFTO0lBQXBDO1FBQUEscUVBNERDO1FBM0RTLHNCQUFnQixHQUFrQixJQUFJLENBQUM7O0lBMkRqRCxDQUFDO0lBekRRLHlDQUFrQixHQUF6QixVQUEwQixFQUFpQjtRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxpQ0FBVSxHQUFqQixVQUFrQixLQUFhLEVBQUUsSUFBUztRQUN4QyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTdELElBQUksUUFBUSxHQUFHLG1CQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFFLFFBQVEsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxxQ0FBYyxHQUFyQixVQUFzQixJQUFZLEVBQUcsSUFBYyxFQUFFLE1BQWM7UUFDakUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUcsTUFBTSxFQUFFO1lBQ1QsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3hCO2FBQUk7WUFDSCxJQUFHLElBQUksS0FBSyxvQkFBUyxDQUFDLElBQUk7Z0JBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUM5QyxJQUFHLElBQUksS0FBSyxvQkFBUyxDQUFDLElBQUk7Z0JBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNsRCxJQUFHLElBQUksS0FBSyxvQkFBUyxDQUFDLElBQUk7Z0JBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQjtJQUNqQixrQ0FBVyxHQUFYLFVBQVksU0FBcUIsRUFBRSxPQUFjLEVBQUUsT0FBc0I7UUFBdEIsd0JBQUEsRUFBQSxjQUFzQjtRQUN2RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsU0FBZSxLQUFLLENBQUMsRUFBVTs7O29CQUM3QixzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87NEJBQ3ZCLFVBQVUsQ0FBQztnQ0FDUCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTt3QkFDVixDQUFDLENBQUMsRUFBQzs7O1NBQ0o7UUFFRCxTQUFlLFdBQVc7Ozs7Ozs0QkFDZixDQUFDLEdBQUcsQ0FBQzs7O2lDQUFFLENBQUEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7NEJBQzFCLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7NEJBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztpQ0FDekQsT0FBTyxFQUFQLHdCQUFPOzRCQUNSLHFCQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQTs7NEJBQWQsU0FBYyxDQUFBOzs7NEJBTGtCLENBQUMsRUFBRSxDQUFBOzs7Ozs7U0FPeEM7UUFFRCxXQUFXLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQTVEQSxBQTREQyxDQTVEMEIscUJBQVMsR0E0RG5DO0FBRVEsb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NpbmdsZXRvbn0gZnJvbSBcIi4vU2luZ2xldG9uXCJcclxuaW1wb3J0IHsgTWF6ZURhdGEsIFRJTEVfVFlQRSB9IGZyb20gXCIuL01hemVEYXRhXCI7XHJcbmltcG9ydCBUaWxlIGZyb20gXCIuL1RpbGVcIjtcclxuXHJcbmNsYXNzIFNUTWF6ZUhlbHBlciBleHRlbmRzIFNpbmdsZXRvbntcclxuICBwcml2YXRlIF90aWxlU3ByaXRlRnJhbWU6Y2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc2V0VGlsZVNwcml0ZUZyYW1lKHNwOmNjLlNwcml0ZUZyYW1lKXtcclxuICAgIHRoaXMuX3RpbGVTcHJpdGVGcmFtZSA9IHNwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZVRpbGUocE5vZGU6Y2MuTm9kZSwgdGlsZTpUaWxlKXtcclxuICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoXCJOZXcgU3ByaXRlXCIpO1xyXG4gICAgdmFyIHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBub2RlLnBhcmVudCA9IHBOb2RlO1xyXG4gICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5fdGlsZVNwcml0ZUZyYW1lO1xyXG5cclxuICAgIHRoaXMucmVzZXRUaWxlQ29sb3Iobm9kZSwgIHRpbGUuZ2V0VHlwZSgpLCB0aWxlLmdldElzTWlzdCgpKTtcclxuXHJcbiAgICBsZXQgVElMRVNJWkUgPSBNYXplRGF0YS5USUxFU0laRTtcclxuICAgIG5vZGUuYW5jaG9yWCA9IDA7XHJcbiAgICBub2RlLmFuY2hvclkgPSAxO1xyXG4gICAgbm9kZS5zZXRDb250ZW50U2l6ZShuZXcgY2MuU2l6ZShUSUxFU0laRSwgVElMRVNJWkUpKTtcclxuICAgIG5vZGUueCA9IHRpbGUuZ2V0WSgpICogVElMRVNJWkU7XHJcbiAgICBub2RlLnkgPSAtdGlsZS5nZXRYKCkqIFRJTEVTSVpFO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG4gIHB1YmxpYyByZXNldFRpbGVDb2xvcihub2RlOmNjLk5vZGUsICB0eXBlOlRJTEVfVFlQRSwgaXNNaXN0OmJvb2xlYW4pe1xyXG4gICAgbGV0IGNvbG9yID0gbnVsbDtcclxuXHJcbiAgICBpZihpc01pc3QpIHtcclxuICAgICAgY29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgIH1lbHNle1xyXG4gICAgICBpZih0eXBlID09PSBUSUxFX1RZUEUuUk9BRCkgY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgZWxzZSBpZih0eXBlID09PSBUSUxFX1RZUEUuV0FMTCkgY29sb3IgPSBjYy5Db2xvci5CTFVFO1xyXG4gICAgICBlbHNlIGlmKHR5cGUgPT09IFRJTEVfVFlQRS5QQVRIKSBjb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgIH1cclxuXHJcbiAgICBub2RlLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG4gIC8vIOmAkuW9kuWujOavlSwg5pKt5pS+5p+l5om+55qE6L+H56iLLlxyXG4gIHBsYXlQcm9jZXNzKHRpbGVOb2RlczpjYy5Ob2RlW11bXSwgcHJvY2VzczpUaWxlW10sIGlzU2xlZXA6Ym9vbGVhbiA9IHRydWUpe1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcclxuICAgICAgICAgIH0sIG1zKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBwbGF5UHJvY2Vzcygpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2Nlc3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0aWxlID0gcHJvY2Vzc1tpXTtcclxuICAgICAgICBsZXQgbm9kZSA9IHRpbGVOb2Rlc1t0aWxlLmdldFgoKV1bdGlsZS5nZXRZKCldO1xyXG4gICAgICAgIHNlbGYucmVzZXRUaWxlQ29sb3Iobm9kZSwgdGlsZS5nZXRUeXBlKCksIHRpbGUuZ2V0SXNNaXN0KCkpO1xyXG4gICAgICAgIGlmKGlzU2xlZXApXHJcbiAgICAgICAgICBhd2FpdCBzbGVlcCg1KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIHBsYXlQcm9jZXNzKCk7XHJcbiAgfSBcclxufVxyXG5cclxuZXhwb3J0IHsgU1RNYXplSGVscGVyIH07Il19