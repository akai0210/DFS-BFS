"use strict";
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