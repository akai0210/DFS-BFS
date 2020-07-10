
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9d36hRJRZMerQ1AeaIcTPS', 'Tile');
// Script/Tile.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tile = /** @class */ (function () {
    function Tile(x, y, type, isMist) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.isMist = isMist;
    }
    Tile.prototype.getX = function () { return this.x; };
    Tile.prototype.getY = function () { return this.y; };
    Tile.prototype.getPrev = function () { return this.prev; };
    Tile.prototype.getType = function () { return this.type; };
    Tile.prototype.setType = function (type) { this.type = type; };
    Tile.prototype.getIsMist = function () { return this.isMist; };
    Tile.prototype.setIsMist = function (b) { this.isMist = b; };
    return Tile;
}());
exports.default = Tile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFRRSxjQUFvQixDQUFRLEVBQUUsQ0FBUSxFQUFFLElBQWMsRUFBRSxNQUFlO1FBQ25FLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU0sbUJBQUksR0FBWCxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7SUFDdEIsbUJBQUksR0FBWCxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7SUFDdEIsc0JBQU8sR0FBZCxjQUFzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO0lBQ2pDLHNCQUFPLEdBQWQsY0FBMkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztJQUN0QyxzQkFBTyxHQUFkLFVBQWUsSUFBYyxJQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQztJQUMxQyx3QkFBUyxHQUFoQixjQUFtQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO0lBQ2hDLHdCQUFTLEdBQWhCLFVBQWlCLENBQVMsSUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDOUMsV0FBQztBQUFELENBdEJBLEFBc0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUSUxFX1RZUEUgfSBmcm9tIFwiLi9NYXplRGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSB7XHJcblxyXG4gIHByaXZhdGUgeDpudW1iZXI7XHJcbiAgcHJpdmF0ZSB5Om51bWJlcjtcclxuICBwcml2YXRlIHByZXY6VGlsZTtcclxuICBwcml2YXRlIHR5cGU6VElMRV9UWVBFO1xyXG4gIHByaXZhdGUgaXNNaXN0OmJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciggeDpudW1iZXIsIHk6bnVtYmVyLCB0eXBlOlRJTEVfVFlQRSwgaXNNaXN0Pzpib29sZWFuKXtcclxuICAgICAgdGhpcy54ID0geDtcclxuICAgICAgdGhpcy55ID0geTtcclxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5pc01pc3QgPSBpc01pc3Q7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0WCgpe3JldHVybiB0aGlzLng7fVxyXG4gIHB1YmxpYyBnZXRZKCl7cmV0dXJuIHRoaXMueTt9XHJcbiAgcHVibGljIGdldFByZXYoKTpUaWxle3JldHVybiB0aGlzLnByZXY7fVxyXG4gIHB1YmxpYyBnZXRUeXBlKCk6VElMRV9UWVBFe3JldHVybiB0aGlzLnR5cGU7fVxyXG4gIHB1YmxpYyBzZXRUeXBlKHR5cGU6VElMRV9UWVBFKXt0aGlzLnR5cGUgPSB0eXBlO31cclxuICBwdWJsaWMgZ2V0SXNNaXN0KCl7cmV0dXJuIHRoaXMuaXNNaXN0O31cclxuICBwdWJsaWMgc2V0SXNNaXN0KGI6Ym9vbGVhbil7dGhpcy5pc01pc3QgPSBifVxyXG59XHJcbiJdfQ==