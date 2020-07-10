
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MazeData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d22agQPm5I9LClvaKvPZLk', 'MazeData');
// Script/MazeData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tile_1 = require("./Tile");
var TILE_TYPE;
(function (TILE_TYPE) {
    TILE_TYPE[TILE_TYPE["ROAD"] = 0] = "ROAD";
    TILE_TYPE[TILE_TYPE["WALL"] = 1] = "WALL";
    TILE_TYPE[TILE_TYPE["PATH"] = 2] = "PATH";
    // MIST, // 迷雾
})(TILE_TYPE || (TILE_TYPE = {}));
exports.TILE_TYPE = TILE_TYPE;
;
var MazeData = /** @class */ (function () {
    function MazeData(N, M) {
        this.maze = [];
        this.visited = [];
        this.inMist = [];
        this.path = [];
        if (N % 2 === 0 && M % 2 === 0)
            throw new Error("Our Maze Generalization Algorihtm requires the width and height of the maze are odd numbers");
        this.n = N;
        this.m = M;
        this.entranceX = 1;
        this.entranceY = 0;
        this.exitX = this.n - 2;
        this.exitY = this.m - 1;
        this.process = [];
        this.path = [];
        for (var i = 0; i < N; i++) {
            this.maze[i] = [];
            this.visited[i] = [];
            this.inMist[i] = [];
            for (var j = 0; j < N; j++) {
                if (i % 2 === 1 && j % 2 === 1)
                    this.maze[i][j] = new Tile_1.default(i, j, TILE_TYPE.ROAD, true);
                else
                    this.maze[i][j] = new Tile_1.default(i, j, TILE_TYPE.WALL, true);
                this.visited[i][j] = false;
                this.inMist[i][j] = true;
            }
        }
        console.log("地图瓦片 this.maze-----1", this.maze);
        console.log("是否被寻路 this.visited-----------", this.visited);
        console.log("障碍瓦片 this.inmist---------", this.inMist);
        this.maze[this.entranceX][this.entranceY] = new Tile_1.default(this.entranceX, this.entranceY, TILE_TYPE.ROAD);
        this.maze[this.exitX][this.exitY] = new Tile_1.default(this.exitX, this.exitY, TILE_TYPE.ROAD);
    }
    MazeData.prototype.N = function () { return this.n; };
    MazeData.prototype.M = function () { return this.m; };
    MazeData.prototype.getEentranceX = function () { return this.entranceX; };
    MazeData.prototype.getEentranceY = function () { return this.entranceY; };
    MazeData.prototype.getExitX = function () { return this.exitX; };
    MazeData.prototype.getExitY = function () { return this.exitY; };
    MazeData.prototype.getMaze = function (i, j) {
        if (!this.inArea(i, j))
            throw new Error("i or j is out of index in getMaze!");
        return this.maze[i][j];
    };
    MazeData.prototype.inArea = function (x, y) {
        return x >= 0 && x < this.n && y >= 0 && y < this.m;
    };
    MazeData.prototype.openMist = function (x, y) {
        if (!this.inArea(x, y))
            throw new Error("i or j is out of index in getMaze!");
        for (var i = x - 1; i <= x + 1; i++) {
            for (var j = y - 1; j <= y + 1; j++) {
                if (this.inArea(i, j)) {
                    var tile = this.maze[i][j];
                    tile.setIsMist(false);
                    this.process.push(new Tile_1.default(i, j, tile.getType(), false));
                }
            }
        }
    };
    MazeData.TILESIZE = 20;
    return MazeData;
}());
exports.MazeData = MazeData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYXplRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUUxQixJQUFLLFNBS0o7QUFMRCxXQUFLLFNBQVM7SUFDWix5Q0FBSSxDQUFBO0lBQ0oseUNBQUksQ0FBQTtJQUNKLHlDQUFJLENBQUE7SUFDSixjQUFjO0FBQ2hCLENBQUMsRUFMSSxTQUFTLEtBQVQsU0FBUyxRQUtiO0FBOEZRLDhCQUFTO0FBOUZqQixDQUFDO0FBRUY7SUFrQkUsa0JBQW1CLENBQVEsRUFBRSxDQUFRO1FBWjlCLFNBQUksR0FBWSxFQUFFLENBQUM7UUFFbkIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUV6QixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFTdEIsSUFBSSxDQUFDLEdBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2RkFBNkYsQ0FBQyxDQUFBO1FBRWhILElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFWCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsQ0FBQyxFQUFHLENBQUMsRUFBRyxFQUFFO1lB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QU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTSwyQkFBUSxHQUFmLFVBQWdCLENBQVEsRUFBRSxDQUFRO1FBQ2hDLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBRXhELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsRUFBRyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsRUFBQztZQUMvQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLEVBQUcsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLEVBQUM7Z0JBQy9CLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUM7b0JBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXRCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksY0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQzFEO2FBRUY7U0FDRjtJQUNILENBQUM7SUF0RmMsaUJBQVEsR0FBVSxFQUFFLENBQUM7SUF1RnRDLGVBQUM7Q0F6RkQsQUF5RkMsSUFBQTtBQUVRLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbGUgZnJvbSBcIi4vVGlsZVwiO1xyXG5cclxuZW51bSBUSUxFX1RZUEUge1xyXG4gIFJPQUQsXHJcbiAgV0FMTCxcclxuICBQQVRILFxyXG4gIC8vIE1JU1QsIC8vIOi/t+mbvlxyXG59O1xyXG5cclxuY2xhc3MgTWF6ZURhdGEge1xyXG5cclxuICBwdWJsaWMgc3RhdGljICBUSUxFU0laRTpudW1iZXIgPSAyMDtcclxuXHJcbiAgcHJpdmF0ZSBuOm51bWJlcjtcclxuICBwcml2YXRlIG06bnVtYmVyO1xyXG4gIHB1YmxpYyBtYXplOlRpbGVbXVtdID0gW107XHJcbiAgXHJcbiAgcHVibGljIHZpc2l0ZWQ6Ym9vbGVhbltdW10gPSBbXTtcclxuICBwdWJsaWMgcHJvY2VzczpUaWxlW107IC8vIOafpeaJvui/h+eoi1xyXG4gIHB1YmxpYyBpbk1pc3Q6Ym9vbGVhbltdW10gPSBbXTtcclxuICBwdWJsaWMgcGF0aDpUaWxlW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBlbnRyYW5jZVg6bnVtYmVyXHJcbiAgcHJpdmF0ZSBlbnRyYW5jZVk6bnVtYmVyO1xyXG4gIHByaXZhdGUgZXhpdFg6bnVtYmVyO1xyXG4gIHByaXZhdGUgZXhpdFk6bnVtYmVyOyAgXHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihOOm51bWJlciwgTTpudW1iZXIpe1xyXG4gICBcclxuICAgIGlmKCBOJTIgPT09IDAgJiYgTSUyID09PSAwKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPdXIgTWF6ZSBHZW5lcmFsaXphdGlvbiBBbGdvcmlodG0gcmVxdWlyZXMgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIG1hemUgYXJlIG9kZCBudW1iZXJzXCIpXHJcblxyXG4gICAgdGhpcy5uID0gTjtcclxuICAgIHRoaXMubSA9IE07XHJcblxyXG4gICAgdGhpcy5lbnRyYW5jZVggPSAxO1xyXG4gICAgdGhpcy5lbnRyYW5jZVkgPSAwO1xyXG4gICAgdGhpcy5leGl0WCA9IHRoaXMubiAtIDI7XHJcbiAgICB0aGlzLmV4aXRZID0gdGhpcy5tIC0gMTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3MgPSBbXTtcclxuICAgIHRoaXMucGF0aCA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMCA7IGkgPCBOIDsgaSArKykge1xyXG4gICAgICB0aGlzLm1hemVbaV0gPSBbXTtcclxuICAgICAgdGhpcy52aXNpdGVkW2ldID0gW107XHJcbiAgICAgIHRoaXMuaW5NaXN0W2ldPSBbXTtcclxuICAgICAgZm9yKGxldCBqID0gMCA7IGogPCBOIDsgaiArKykge1xyXG4gICAgICAgIGlmKGklMiA9PT0gMSAmJiBqJTIgPT09IDEpXHJcbiAgICAgICAgICB0aGlzLm1hemVbaV1bal0gPSBuZXcgVGlsZShpLCBqLCBUSUxFX1RZUEUuUk9BRCwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGhpcy5tYXplW2ldW2pdID0gbmV3IFRpbGUoaSwgaiwgVElMRV9UWVBFLldBTEwsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2l0ZWRbaV1bal0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluTWlzdFtpXVtqXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIuWcsOWbvueTpueJhyB0aGlzLm1hemUtLS0tLTFcIix0aGlzLm1hemUpXHJcbiAgICBjb25zb2xlLmxvZyhcIuaYr+WQpuiiq+Wvu+i3ryB0aGlzLnZpc2l0ZWQtLS0tLS0tLS0tLVwiLHRoaXMudmlzaXRlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIumanOeijeeTpueJhyB0aGlzLmlubWlzdC0tLS0tLS0tLVwiLHRoaXMuaW5NaXN0KTtcclxuXHJcbiAgICB0aGlzLm1hemVbdGhpcy5lbnRyYW5jZVhdW3RoaXMuZW50cmFuY2VZXSA9IG5ldyBUaWxlKHRoaXMuZW50cmFuY2VYLCB0aGlzLmVudHJhbmNlWSwgVElMRV9UWVBFLlJPQUQpO1xyXG4gICAgdGhpcy5tYXplW3RoaXMuZXhpdFhdW3RoaXMuZXhpdFldID0gbmV3IFRpbGUodGhpcy5leGl0WCwgdGhpcy5leGl0WSwgVElMRV9UWVBFLlJPQUQpO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBOKCl7cmV0dXJuIHRoaXMubjt9XHJcbiAgcHVibGljIE0oKXtyZXR1cm4gdGhpcy5tO31cclxuICBwdWJsaWMgZ2V0RWVudHJhbmNlWCgpe3JldHVybiB0aGlzLmVudHJhbmNlWDt9XHJcbiAgcHVibGljIGdldEVlbnRyYW5jZVkoKXtyZXR1cm4gdGhpcy5lbnRyYW5jZVk7fVxyXG4gIHB1YmxpYyBnZXRFeGl0WCgpe3JldHVybiB0aGlzLmV4aXRYO31cclxuICBwdWJsaWMgZ2V0RXhpdFkoKXtyZXR1cm4gdGhpcy5leGl0WTt9XHJcbiAgcHVibGljIGdldE1hemUoaTpudW1iZXIsIGo6bnVtYmVyKXtcclxuICAgIGlmKCF0aGlzLmluQXJlYShpLCBqKSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaSBvciBqIGlzIG91dCBvZiBpbmRleCBpbiBnZXRNYXplIVwiKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tYXplW2ldW2pdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljICBpbkFyZWEoIHg6bnVtYmVyLCAgeTpudW1iZXIpOmJvb2xlYW57XHJcbiAgICByZXR1cm4geCA+PSAwICYmIHggPCB0aGlzLm4gJiYgeSA+PSAwICYmIHkgPCB0aGlzLm07XHJcbiAgfVxyXG4gIHB1YmxpYyBvcGVuTWlzdCh4Om51bWJlciwgeTpudW1iZXIpe1xyXG4gICAgaWYoIXRoaXMuaW5BcmVhKHgsIHkpKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpIG9yIGogaXMgb3V0IG9mIGluZGV4IGluIGdldE1hemUhXCIpO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IHgtMSA7IGkgPD0geCsxOyBpICsrKXtcclxuICAgICAgZm9yKGxldCBqID0geS0xIDsgaiA8PSB5KzE7IGogKyspe1xyXG4gICAgICAgIGlmKHRoaXMuaW5BcmVhKGksIGopKXtcclxuICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5tYXplW2ldW2pdO1xyXG4gICAgICAgICAgdGlsZS5zZXRJc01pc3QoZmFsc2UpO1xyXG5cclxuICAgICAgICAgIHRoaXMucHJvY2Vzcy5wdXNoKG5ldyBUaWxlKGksIGosIHRpbGUuZ2V0VHlwZSgpLCBmYWxzZSkpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1hemVEYXRhIH07XHJcbmV4cG9ydCB7IFRJTEVfVFlQRX07Il19