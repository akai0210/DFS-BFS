"use strict";
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