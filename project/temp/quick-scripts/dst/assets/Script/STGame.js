
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/STGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20b6cnvKspEJrhkb/7xCKXl', 'STGame');
// Script/STGame.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var STMazeHelper_1 = require("./STMazeHelper");
var MazeData_1 = require("./MazeData");
var Tile_1 = require("./Tile");
var Stack_1 = require("./algorithm/Stack");
var Queue_1 = require("./algorithm/Queue");
var RandomQueue_1 = require("./algorithm/RandomQueue");
var RandomQueue2_1 = require("./algorithm/RandomQueue2");
var Maze_1 = require("./Maze");
var STGame = /** @class */ (function (_super) {
    __extends(STGame, _super);
    function STGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tileNodes = [];
        _this._mazeData = null;
        _this.d = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // 四个方向偏移量
        return _this;
    }
    STGame.prototype.loadData = function (size, tilesize) {
        var N = size;
        var M = size;
        if (tilesize != null) {
            MazeData_1.MazeData.TILESIZE = tilesize;
        }
        this._mazeData = new MazeData_1.MazeData(N, M);
    };
    STGame.prototype.setTileSpriteFrame = function (sp) {
        STMazeHelper_1.STMazeHelper.getInstance().setTileSpriteFrame(sp);
    };
    STGame.prototype.initGraphicsNode = function (node) {
        this._graphicsNode = node;
        this._graphicsNode.setContentSize(MazeData_1.MazeData.TILESIZE * this._mazeData.N(), MazeData_1.MazeData.TILESIZE * this._mazeData.M());
        this._graphicsNode.x = -MazeData_1.MazeData.TILESIZE * this._mazeData.N() / 2;
        this._graphicsNode.y = MazeData_1.MazeData.TILESIZE * this._mazeData.M() / 2;
    };
    STGame.prototype.initMap = function () {
        var line = this._mazeData.N();
        var row = this._mazeData.M();
        // 绘制地图
        for (var i = 0; i < line; i++) {
            this._tileNodes[i] = [];
            for (var j = 0; j < row; j++) {
                var tile = this._mazeData.getMaze(i, j);
                var node = STMazeHelper_1.STMazeHelper.getInstance().createTile(this._graphicsNode, tile);
                this._tileNodes[i][j] = node;
            }
        }
    };
    STGame.prototype.run = function (type) {
        if (type === Maze_1.VisualizationType.递归DFS深度优先寻路过程演示) {
            this.dfsRecursion();
            this.findPath();
        }
        else if (type === Maze_1.VisualizationType.非递归DFS深度优先寻路过程演示) {
            this.dfsNonRecursion();
            this.findPath();
        }
        else if (type === Maze_1.VisualizationType.非递归DFS寻路过程演示) {
            var algo = new Stack_1.default();
            this.algoNonRecursion(algo);
            this.findPath();
        }
        else if (type === Maze_1.VisualizationType.非递归BFS寻路过程演示) {
            var algo = new Queue_1.default();
            this.algoNonRecursion(algo);
            this.findPath();
        }
        else if (type === Maze_1.VisualizationType.非递归BSF基础上随机地图Version1寻路过程演示) {
            var algo = new RandomQueue_1.default();
            this.algoNonRecursion(algo);
            this.findPath();
        }
        else if (type === Maze_1.VisualizationType.非递归BSF基础上随机地图Version2寻路过程演示) {
            var algo = new RandomQueue2_1.default();
            this.algoNonRecursion(algo);
            this.findPath();
        }
        else if (type === Maze_1.VisualizationType.非递归DFS地图生成过程演示) {
            var algo = new Stack_1.default();
            this.algoNonRecursion(algo);
            STMazeHelper_1.STMazeHelper.getInstance().playProcess(this._tileNodes, this._mazeData.process, true);
        }
        else if (type === Maze_1.VisualizationType.非递归BFS地图生成过程演示) {
            var algo = new Queue_1.default();
            this.algoNonRecursion(algo);
            STMazeHelper_1.STMazeHelper.getInstance().playProcess(this._tileNodes, this._mazeData.process, true);
        }
        else if (type === Maze_1.VisualizationType.非递归BSF基础上随机地图Version1生成过程演示) {
            var algo = new RandomQueue_1.default();
            this.algoNonRecursion(algo);
            STMazeHelper_1.STMazeHelper.getInstance().playProcess(this._tileNodes, this._mazeData.process, true);
        }
        else if (type === Maze_1.VisualizationType.非递归BSF基础上随机地图Version2生成过程演示) {
            var algo = new RandomQueue2_1.default();
            this.algoNonRecursion(algo);
            STMazeHelper_1.STMazeHelper.getInstance().playProcess(this._tileNodes, this._mazeData.process, true);
        }
        // this.dfsRecursion();
        // this.dfsNonRecursion();
        // let algo = new RandomQueue2<Tile>();
        // this.algoNonRecursion(algo);
        // STMazeHelper.getInstance().playProcess(this._tileNodes, this._mazeData.process, false);
        // STMazeHelper.getInstance().playProcess(this._tileNodes, this._mazeData.process, true);
        // this.findPath();
    };
    STGame.prototype.dfsFindPath = function (x, y) {
        this._mazeData.visited[x][y] = true;
        this._mazeData.path.push(new Tile_1.default(x, y, MazeData_1.TILE_TYPE.PATH, false));
        if (x === this._mazeData.getExitX() && y === this._mazeData.getExitY()) {
            return true;
        }
        for (var i = 0; i < 4; i++) {
            var newX = x + this.d[i][0];
            var newY = y + this.d[i][1];
            if (this._mazeData.inArea(newX, newY) &&
                this._mazeData.maze[newX][newY].getType() == MazeData_1.TILE_TYPE.ROAD &&
                !this._mazeData.visited[newX][newY])
                if (this.dfsFindPath(newX, newY))
                    return true;
        }
        var type = this._mazeData.maze[x][y].getType();
        this._mazeData.path.push(new Tile_1.default(x, y, type, false));
        return false;
    };
    STGame.prototype.findPath = function () {
        for (var i = 0; i < this._mazeData.N(); i++) {
            for (var j = 0; j < this._mazeData.M(); j++) {
                this._mazeData.visited[i][j] = false;
            }
        }
        this.dfsFindPath(this._mazeData.getEentranceY(), this._mazeData.getEentranceY());
        STMazeHelper_1.STMazeHelper.getInstance().playProcess(this._tileNodes, this._mazeData.path, true);
    };
    STGame.prototype.algoNonRecursion = function (algo) {
        var queue = algo;
        var first = new Tile_1.default(this._mazeData.getEentranceX(), this._mazeData.getEentranceY() + 1, MazeData_1.TILE_TYPE.ROAD, false);
        queue.push(first);
        this._mazeData.visited[first.getX()][first.getY()] = true;
        this._mazeData.openMist(first.getX(), first.getY());
        while (!queue.isEmpty()) {
            var curPos = queue.pop();
            var x = curPos.getX();
            var y = curPos.getY();
            for (var i = 0; i < 4; i++) {
                var newX = x + this.d[i][0] * 2;
                var newY = y + this.d[i][1] * 2;
                if (this._mazeData.inArea(newX, newY) && !this._mazeData.visited[newX][newY]) {
                    queue.push(new Tile_1.default(newX, newY, MazeData_1.TILE_TYPE.ROAD, false));
                    this._mazeData.visited[newX][newY] = true;
                    this._mazeData.openMist(newX, newY);
                    this.setData(curPos.getX() + this.d[i][0], curPos.getY() + this.d[i][1]);
                }
            }
        }
    };
    STGame.prototype.dfsNonRecursion = function () {
        var stack = new Stack_1.default();
        var first = new Tile_1.default(this._mazeData.getEentranceX(), this._mazeData.getEentranceY() + 1, MazeData_1.TILE_TYPE.ROAD);
        stack.push(first);
        this._mazeData.visited[first.getX()][first.getY()] = true;
        while (!stack.isEmpty()) {
            var curPos = stack.pop();
            var x = curPos.getX();
            var y = curPos.getY();
            for (var i = 0; i < 4; i++) {
                var newX = x + this.d[i][0] * 2;
                var newY = y + this.d[i][1] * 2;
                if (this._mazeData.inArea(newX, newY) && !this._mazeData.visited[newX][newY]) {
                    stack.push(new Tile_1.default(newX, newY, MazeData_1.TILE_TYPE.ROAD));
                    this._mazeData.visited[newX][newY] = true;
                    this.setData(curPos.getX() + this.d[i][0], curPos.getY() + this.d[i][1]);
                }
            }
        }
    };
    STGame.prototype.dfsRecursion = function () {
        this.go(this._mazeData.getEentranceX(), this._mazeData.getEentranceY() + 1);
    };
    STGame.prototype.go = function (x, y) {
        if (!this._mazeData.inArea(x, y))
            throw new Error("x,y are out of index in go function!");
        this._mazeData.visited[x][y] = true;
        for (var i = 0; i < 4; i++) {
            var newX = x + this.d[i][0] * 2;
            var newY = y + this.d[i][1] * 2;
            if (this._mazeData.inArea(newX, newY) && !this._mazeData.visited[newX][newY]) {
                this.setData(x + this.d[i][0], y + this.d[i][1]);
                this.go(newX, newY);
            }
        }
    };
    STGame.prototype.setData = function (x, y) {
        if (this._mazeData.inArea(x, y)) {
            var tile = this._mazeData.maze[x][y];
            tile.setType(MazeData_1.TILE_TYPE.ROAD);
            this._mazeData.process.push(new Tile_1.default(x, y, MazeData_1.TILE_TYPE.ROAD, false));
        }
    };
    return STGame;
}(Singleton_1.Singleton));
exports.STGame = STGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTVEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXFDO0FBQ3JDLCtDQUE4QztBQUM5Qyx1Q0FBaUQ7QUFDakQsK0JBQTBCO0FBQzFCLDJDQUFzQztBQUN0QywyQ0FBc0M7QUFDdEMsdURBQWtEO0FBQ2xELHlEQUFvRDtBQUVwRCwrQkFBMkM7QUFFM0M7SUFBcUIsMEJBQVM7SUFBOUI7UUFBQSxxRUFzTkM7UUFyTlMsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBQzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsT0FBQyxHQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVOztJQWlOcEUsQ0FBQztJQS9NUSx5QkFBUSxHQUFmLFVBQWdCLElBQVcsRUFBRSxRQUFlO1FBQzFDLElBQUksQ0FBQyxHQUFVLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBVSxJQUFJLENBQUM7UUFDcEIsSUFBRyxRQUFRLElBQUksSUFBSSxFQUFDO1lBQ2xCLG1CQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sbUNBQWtCLEdBQXpCLFVBQTBCLEVBQWlCO1FBQ3pDLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLGlDQUFnQixHQUF2QixVQUF3QixJQUFZO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFB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SSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQztJQUVPLHdCQUFPLEdBQWYsVUFBZ0IsQ0FBUSxFQUFFLENBQVE7UUFDaEMsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUM7WUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLG9CQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBdE5BLEFBc05DLENBdE5vQixxQkFBUyxHQXNON0I7QUFFUSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2luZ2xldG9ufSBmcm9tIFwiLi9TaW5nbGV0b25cIlxyXG5pbXBvcnQgeyBTVE1hemVIZWxwZXIgfSBmcm9tIFwiLi9TVE1hemVIZWxwZXJcIjtcclxuaW1wb3J0IHsgTWF6ZURhdGEsIFRJTEVfVFlQRSB9IGZyb20gXCIuL01hemVEYXRhXCI7XHJcbmltcG9ydCBUaWxlIGZyb20gXCIuL1RpbGVcIjtcclxuaW1wb3J0IFN0YWNrIGZyb20gXCIuL2FsZ29yaXRobS9TdGFja1wiO1xyXG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vYWxnb3JpdGhtL1F1ZXVlXCI7XHJcbmltcG9ydCBSYW5kb21RdWV1ZSBmcm9tIFwiLi9hbGdvcml0aG0vUmFuZG9tUXVldWVcIjtcclxuaW1wb3J0IFJhbmRvbVF1ZXVlMiBmcm9tIFwiLi9hbGdvcml0aG0vUmFuZG9tUXVldWUyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL2FsZ29yaXRobS9MaXN0XCI7XHJcbmltcG9ydCB7IFZpc3VhbGl6YXRpb25UeXBlIH0gZnJvbSBcIi4vTWF6ZVwiO1xyXG5cclxuY2xhc3MgU1RHYW1lIGV4dGVuZHMgU2luZ2xldG9ue1xyXG4gIHByaXZhdGUgX3RpbGVOb2RlczpjYy5Ob2RlIFtdW10gPSBbXTtcclxuICBwcml2YXRlIF9tYXplRGF0YTpNYXplRGF0YSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfZ3JhcGhpY3NOb2RlOiBjYy5Ob2RlO1xyXG5cclxuICBwcml2YXRlIGQ6bnVtYmVyIFtdW10gPSBbWy0xLDBdLCBbMCwxXSwgWzEsMF0sIFswLC0xXV07IC8vIOWbm+S4quaWueWQkeWBj+enu+mHj1xyXG5cclxuICBwdWJsaWMgbG9hZERhdGEoc2l6ZTpudW1iZXIsIHRpbGVzaXplOm51bWJlcil7XHJcbiAgICBsZXQgTjpudW1iZXIgPSBzaXplOyBcclxuICAgIGxldCBNOm51bWJlciA9IHNpemU7XHJcbiAgICBpZih0aWxlc2l6ZSAhPSBudWxsKXtcclxuICAgICAgTWF6ZURhdGEuVElMRVNJWkUgPSB0aWxlc2l6ZTtcclxuICAgIH1cclxuICAgIHRoaXMuX21hemVEYXRhID0gbmV3IE1hemVEYXRhKE4sIE0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRpbGVTcHJpdGVGcmFtZShzcDpjYy5TcHJpdGVGcmFtZSl7XHJcbiAgICBTVE1hemVIZWxwZXIuZ2V0SW5zdGFuY2UoKS5zZXRUaWxlU3ByaXRlRnJhbWUoc3ApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXRHcmFwaGljc05vZGUobm9kZTpjYy5Ob2RlKXtcclxuICAgIHRoaXMuX2dyYXBoaWNzTm9kZSA9IG5vZGU7IFxyXG5cclxuICAgIHRoaXMuX2dyYXBoaWNzTm9kZS5zZXRDb250ZW50U2l6ZShNYXplRGF0YS5USUxFU0laRSAqIHRoaXMuX21hemVEYXRhLk4oKSwgTWF6ZURhdGEuVElMRVNJWkUgKiB0aGlzLl9tYXplRGF0YS5NKCkpO1xyXG5cclxuICAgIHRoaXMuX2dyYXBoaWNzTm9kZS54ID0gLU1hemVEYXRhLlRJTEVTSVpFICogdGhpcy5fbWF6ZURhdGEuTigpIC8gMjtcclxuICAgIHRoaXMuX2dyYXBoaWNzTm9kZS55ID0gTWF6ZURhdGEuVElMRVNJWkUgKiB0aGlzLl9tYXplRGF0YS5NKCkgLyAyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXRNYXAoKXtcclxuICAgIGxldCBsaW5lID0gdGhpcy5fbWF6ZURhdGEuTigpO1xyXG4gICAgbGV0IHJvdyA9IHRoaXMuX21hemVEYXRhLk0oKTtcclxuXHJcbiAgICAvLyDnu5jliLblnLDlm75cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX3RpbGVOb2Rlc1tpXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdzsgaisrKSB7XHJcbiAgICAgICAgbGV0IHRpbGUgPSB0aGlzLl9tYXplRGF0YS5nZXRNYXplKGksIGopO1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IFNUTWF6ZUhlbHBlci5nZXRJbnN0YW5jZSgpLmNyZWF0ZVRpbGUodGhpcy5fZ3JhcGhpY3NOb2RlLCB0aWxlKTtcclxuICAgICAgICB0aGlzLl90aWxlTm9kZXNbaV1bal0gPSBub2RlO1xyXG4gICAgICB9ICAgICAgICBcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcnVuKHR5cGU6bnVtYmVyKXtcclxuICAgIGlmKHR5cGUgPT09IFZpc3VhbGl6YXRpb25UeXBlLumAkuW9kkRGU+a3seW6puS8mOWFiOWvu+i3r+i/h+eoi+a8lOekuil7XHJcbiAgICAgIHRoaXMuZGZzUmVjdXJzaW9uKCk7XHJcbiAgICAgIHRoaXMuZmluZFBhdGgoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PT0gVmlzdWFsaXphdGlvblR5cGUu6Z2e6YCS5b2SREZT5rex5bqm5LyY5YWI5a+76Lev6L+H56iL5ryU56S6KXtcclxuICAgICAgdGhpcy5kZnNOb25SZWN1cnNpb24oKTtcclxuICAgICAgdGhpcy5maW5kUGF0aCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0eXBlID09PSBWaXN1YWxpemF0aW9uVHlwZS7pnZ7pgJLlvZJERlPlr7vot6/ov4fnqIvmvJTnpLope1xyXG4gICAgICBsZXQgYWxnbyA9IG5ldyBTdGFjazxUaWxlPigpO1xyXG4gICAgICB0aGlzLmFsZ29Ob25SZWN1cnNpb24oYWxnbyk7IFxyXG4gICAgICB0aGlzLmZpbmRQYXRoKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHR5cGUgPT09IFZpc3VhbGl6YXRpb25UeXBlLumdnumAkuW9kkJGU+Wvu+i3r+i/h+eoi+a8lOekuil7XHJcbiAgICAgIGxldCBhbGdvID0gbmV3IFF1ZXVlPFRpbGU+KCk7XHJcbiAgICAgIHRoaXMuYWxnb05vblJlY3Vyc2lvbihhbGdvKTsgXHJcbiAgICAgIHRoaXMuZmluZFBhdGgoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PT0gVmlzdWFsaXphdGlvblR5cGUu6Z2e6YCS5b2SQlNG5Z+656GA5LiK6ZqP5py65Zyw5Zu+VmVyc2lvbjHlr7vot6/ov4fnqIvmvJTnpLope1xyXG4gICAgICBsZXQgYWxnbyA9IG5ldyBSYW5kb21RdWV1ZTxUaWxlPigpO1xyXG4gICAgICB0aGlzLmFsZ29Ob25SZWN1cnNpb24oYWxnbyk7IFxyXG4gICAgICB0aGlzLmZpbmRQYXRoKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHR5cGUgPT09IFZpc3VhbGl6YXRpb25UeXBlLumdnumAkuW9kkJTRuWfuuehgOS4iumaj+acuuWcsOWbvlZlcnNpb24y5a+76Lev6L+H56iL5ryU56S6KXtcclxuICAgICAgbGV0IGFsZ28gPSBuZXcgUmFuZG9tUXVldWUyPFRpbGU+KCk7XHJcbiAgICAgIHRoaXMuYWxnb05vblJlY3Vyc2lvbihhbGdvKTsgXHJcbiAgICAgIHRoaXMuZmluZFBhdGgoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PT0gVmlzdWFsaXphdGlvblR5cGUu6Z2e6YCS5b2SREZT5Zyw5Zu+55Sf5oiQ6L+H56iL5ryU56S6KXtcclxuICAgICAgbGV0IGFsZ28gPSBuZXcgU3RhY2s8VGlsZT4oKTtcclxuICAgICAgdGhpcy5hbGdvTm9uUmVjdXJzaW9uKGFsZ28pOyBcclxuICAgICAgU1RNYXplSGVscGVyLmdldEluc3RhbmNlKCkucGxheVByb2Nlc3ModGhpcy5fdGlsZU5vZGVzLCB0aGlzLl9tYXplRGF0YS5wcm9jZXNzLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PT0gVmlzdWFsaXphdGlvblR5cGUu6Z2e6YCS5b2SQkZT5Zyw5Zu+55Sf5oiQ6L+H56iL5ryU56S6KXtcclxuICAgICAgbGV0IGFsZ28gPSBuZXcgUXVldWU8VGlsZT4oKTtcclxuICAgICAgdGhpcy5hbGdvTm9uUmVjdXJzaW9uKGFsZ28pOyBcclxuICAgICAgU1RNYXplSGVscGVyLmdldEluc3RhbmNlKCkucGxheVByb2Nlc3ModGhpcy5fdGlsZU5vZGVzLCB0aGlzLl9tYXplRGF0YS5wcm9jZXNzLCB0cnVlKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0eXBlID09PSBWaXN1YWxpemF0aW9uVHlwZS7pnZ7pgJLlvZJCU0bln7rnoYDkuIrpmo/mnLrlnLDlm75WZXJzaW9uMeeUn+aIkOi/h+eoi+a8lOekuil7XHJcbiAgICAgIGxldCBhbGdvID0gbmV3IFJhbmRvbVF1ZXVlPFRpbGU+KCk7XHJcbiAgICAgIHRoaXMuYWxnb05vblJlY3Vyc2lvbihhbGdvKTsgXHJcbiAgICAgIFNUTWF6ZUhlbHBlci5nZXRJbnN0YW5jZSgpLnBsYXlQcm9jZXNzKHRoaXMuX3RpbGVOb2RlcywgdGhpcy5fbWF6ZURhdGEucHJvY2VzcywgdHJ1ZSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZSA9PT0gVmlzdWFsaXphdGlvblR5cGUu6Z2e6YCS5b2SQlNG5Z+656GA5LiK6ZqP5py65Zyw5Zu+VmVyc2lvbjLnlJ/miJDov4fnqIvmvJTnpLope1xyXG4gICAgICBsZXQgYWxnbyA9IG5ldyBSYW5kb21RdWV1ZTI8VGlsZT4oKTtcclxuICAgICAgdGhpcy5hbGdvTm9uUmVjdXJzaW9uKGFsZ28pOyBcclxuICAgICAgU1RNYXplSGVscGVyLmdldEluc3RhbmNlKCkucGxheVByb2Nlc3ModGhpcy5fdGlsZU5vZGVzLCB0aGlzLl9tYXplRGF0YS5wcm9jZXNzLCB0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMuZGZzUmVjdXJzaW9uKCk7XHJcbiAgICAvLyB0aGlzLmRmc05vblJlY3Vyc2lvbigpO1xyXG4gICAgLy8gbGV0IGFsZ28gPSBuZXcgUmFuZG9tUXVldWUyPFRpbGU+KCk7XHJcbiAgICAvLyB0aGlzLmFsZ29Ob25SZWN1cnNpb24oYWxnbyk7XHJcbiAgICAvLyBTVE1hemVIZWxwZXIuZ2V0SW5zdGFuY2UoKS5wbGF5UHJvY2Vzcyh0aGlzLl90aWxlTm9kZXMsIHRoaXMuX21hemVEYXRhLnByb2Nlc3MsIGZhbHNlKTtcclxuICAgIC8vIFNUTWF6ZUhlbHBlci5nZXRJbnN0YW5jZSgpLnBsYXlQcm9jZXNzKHRoaXMuX3RpbGVOb2RlcywgdGhpcy5fbWF6ZURhdGEucHJvY2VzcywgdHJ1ZSk7XHJcblxyXG4gICAgLy8gdGhpcy5maW5kUGF0aCgpO1xyXG4gIH1cclxuICBwcml2YXRlIGRmc0ZpbmRQYXRoKHg6bnVtYmVyLCB5Om51bWJlcik6Ym9vbGVhbntcclxuXHJcbiAgICB0aGlzLl9tYXplRGF0YS52aXNpdGVkW3hdW3ldID0gdHJ1ZTtcclxuICAgIHRoaXMuX21hemVEYXRhLnBhdGgucHVzaChuZXcgVGlsZSh4LCB5LCBUSUxFX1RZUEUuUEFUSCwgZmFsc2UpKTsgXHJcblxyXG4gICAgaWYoeCA9PT0gdGhpcy5fbWF6ZURhdGEuZ2V0RXhpdFgoKSAmJiB5ID09PSB0aGlzLl9tYXplRGF0YS5nZXRFeGl0WSgpKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBpID0gMCA7IGkgPCA0OyBpICsrKXtcclxuICAgICAgbGV0IG5ld1ggPSB4ICsgdGhpcy5kW2ldWzBdO1xyXG4gICAgICBsZXQgbmV3WSA9IHkgKyB0aGlzLmRbaV1bMV07XHJcbiAgICAgXHJcbiAgICAgIGlmKCB0aGlzLl9tYXplRGF0YS5pbkFyZWEobmV3WCwgbmV3WSkgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF6ZURhdGEubWF6ZVtuZXdYXVtuZXdZXS5nZXRUeXBlKCkgPT0gVElMRV9UWVBFLlJPQUQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5fbWF6ZURhdGEudmlzaXRlZFtuZXdYXVtuZXdZXSlcclxuICAgICAgICBpZih0aGlzLmRmc0ZpbmRQYXRoKG5ld1gsIG5ld1kpKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdHlwZSA9IHRoaXMuX21hemVEYXRhLm1hemVbeF1beV0uZ2V0VHlwZSgpXHJcbiAgICB0aGlzLl9tYXplRGF0YS5wYXRoLnB1c2gobmV3IFRpbGUoeCwgeSwgdHlwZSwgZmFsc2UpKTsgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHByaXZhdGUgZmluZFBhdGgoKXtcclxuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgdGhpcy5fbWF6ZURhdGEuTigpOyBpICsrKXtcclxuICAgICAgZm9yKGxldCBqID0gMCA7IGogPCB0aGlzLl9tYXplRGF0YS5NKCk7IGogKyspe1xyXG4gICAgICAgIHRoaXMuX21hemVEYXRhLnZpc2l0ZWRbaV1bal0gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kZnNGaW5kUGF0aCh0aGlzLl9tYXplRGF0YS5nZXRFZW50cmFuY2VZKCksIHRoaXMuX21hemVEYXRhLmdldEVlbnRyYW5jZVkoKSk7XHJcbiAgICBTVE1hemVIZWxwZXIuZ2V0SW5zdGFuY2UoKS5wbGF5UHJvY2Vzcyh0aGlzLl90aWxlTm9kZXMsIHRoaXMuX21hemVEYXRhLnBhdGggLHRydWUpO1xyXG4gIH1cclxuICBwcml2YXRlIGFsZ29Ob25SZWN1cnNpb24oYWxnbzpMaXN0PFRpbGU+KXtcclxuICAgIGxldCBxdWV1ZTpMaXN0PFRpbGU+ID0gYWxnbztcclxuXHJcbiAgICBsZXQgZmlyc3QgPSBuZXcgVGlsZSh0aGlzLl9tYXplRGF0YS5nZXRFZW50cmFuY2VYKCksIHRoaXMuX21hemVEYXRhLmdldEVlbnRyYW5jZVkoKSArIDEsVElMRV9UWVBFLlJPQUQsIGZhbHNlKTtcclxuICAgIHF1ZXVlLnB1c2goZmlyc3QpO1xyXG4gICAgdGhpcy5fbWF6ZURhdGEudmlzaXRlZFtmaXJzdC5nZXRYKCldW2ZpcnN0LmdldFkoKV0gPSB0cnVlO1xyXG4gICAgdGhpcy5fbWF6ZURhdGEub3Blbk1pc3QoZmlyc3QuZ2V0WCgpLCBmaXJzdC5nZXRZKCkpO1xyXG5cclxuICAgIHdoaWxlKCFxdWV1ZS5pc0VtcHR5KCkpe1xyXG4gICAgICBsZXQgY3VyUG9zID0gcXVldWUucG9wKCk7XHJcblxyXG4gICAgICBsZXQgeCA9IGN1clBvcy5nZXRYKCk7XHJcbiAgICAgIGxldCB5ID0gY3VyUG9zLmdldFkoKTtcclxuICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCA0OyBpICsrKXtcclxuICAgICAgICBsZXQgbmV3WCA9IHggKyB0aGlzLmRbaV1bMF0qMjtcclxuICAgICAgICBsZXQgbmV3WSA9IHkgKyB0aGlzLmRbaV1bMV0qMjtcclxuICBcclxuICAgICAgICBpZih0aGlzLl9tYXplRGF0YS5pbkFyZWEobmV3WCwgbmV3WSkgJiYgIXRoaXMuX21hemVEYXRhLnZpc2l0ZWRbbmV3WF1bbmV3WV0pe1xyXG4gICAgICAgICAgcXVldWUucHVzaChuZXcgVGlsZShuZXdYICwgbmV3WSwgVElMRV9UWVBFLlJPQUQsIGZhbHNlKSlcclxuICAgICAgICAgIHRoaXMuX21hemVEYXRhLnZpc2l0ZWRbbmV3WF1bbmV3WV0gPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5fbWF6ZURhdGEub3Blbk1pc3QobmV3WCwgbmV3WSk7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoY3VyUG9zLmdldFgoKSArIHRoaXMuZFtpXVswXSAsIGN1clBvcy5nZXRZKCkgKyB0aGlzLmRbaV1bMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBkZnNOb25SZWN1cnNpb24oKXtcclxuICAgIGxldCBzdGFjazpTdGFjazxUaWxlPiA9IG5ldyBTdGFjazxUaWxlPigpO1xyXG5cclxuICAgIGxldCBmaXJzdCA9IG5ldyBUaWxlKHRoaXMuX21hemVEYXRhLmdldEVlbnRyYW5jZVgoKSwgdGhpcy5fbWF6ZURhdGEuZ2V0RWVudHJhbmNlWSgpICsgMSxUSUxFX1RZUEUuUk9BRCk7XHJcbiAgICBzdGFjay5wdXNoKGZpcnN0KTtcclxuICAgIHRoaXMuX21hemVEYXRhLnZpc2l0ZWRbZmlyc3QuZ2V0WCgpXVtmaXJzdC5nZXRZKCldID0gdHJ1ZTtcclxuXHJcbiAgICB3aGlsZSghc3RhY2suaXNFbXB0eSgpKXtcclxuICAgICAgbGV0IGN1clBvcyA9IHN0YWNrLnBvcCgpO1xyXG5cclxuICAgICAgbGV0IHggPSBjdXJQb3MuZ2V0WCgpO1xyXG4gICAgICBsZXQgeSA9IGN1clBvcy5nZXRZKCk7XHJcbiAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgNDsgaSArKyl7XHJcbiAgICAgICAgbGV0IG5ld1ggPSB4ICsgdGhpcy5kW2ldWzBdKjI7XHJcbiAgICAgICAgbGV0IG5ld1kgPSB5ICsgdGhpcy5kW2ldWzFdKjI7XHJcbiAgXHJcbiAgICAgICAgaWYodGhpcy5fbWF6ZURhdGEuaW5BcmVhKG5ld1gsIG5ld1kpICYmICF0aGlzLl9tYXplRGF0YS52aXNpdGVkW25ld1hdW25ld1ldKXtcclxuICAgICAgICAgIHN0YWNrLnB1c2gobmV3IFRpbGUobmV3WCAsIG5ld1ksIFRJTEVfVFlQRS5ST0FEKSlcclxuICAgICAgICAgIHRoaXMuX21hemVEYXRhLnZpc2l0ZWRbbmV3WF1bbmV3WV0gPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKGN1clBvcy5nZXRYKCkgKyB0aGlzLmRbaV1bMF0gLCBjdXJQb3MuZ2V0WSgpICsgdGhpcy5kW2ldWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGRmc1JlY3Vyc2lvbigpe1xyXG4gICAgdGhpcy5nbyh0aGlzLl9tYXplRGF0YS5nZXRFZW50cmFuY2VYKCksIHRoaXMuX21hemVEYXRhLmdldEVlbnRyYW5jZVkoKSArIDEpO1xyXG4gIH1cclxuICBwcml2YXRlIGdvKHg6bnVtYmVyLCB5Om51bWJlcik6dm9pZHtcclxuICAgIGlmKCF0aGlzLl9tYXplRGF0YS5pbkFyZWEoeCwgeSkpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIngseSBhcmUgb3V0IG9mIGluZGV4IGluIGdvIGZ1bmN0aW9uIVwiKTtcclxuXHJcbiAgICB0aGlzLl9tYXplRGF0YS52aXNpdGVkW3hdW3ldID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDQ7IGkgKyspe1xyXG4gICAgICBsZXQgbmV3WCA9IHggKyB0aGlzLmRbaV1bMF0qMjtcclxuICAgICAgbGV0IG5ld1kgPSB5ICsgdGhpcy5kW2ldWzFdKjI7XHJcblxyXG4gICAgICBpZih0aGlzLl9tYXplRGF0YS5pbkFyZWEobmV3WCwgbmV3WSkgJiYgIXRoaXMuX21hemVEYXRhLnZpc2l0ZWRbbmV3WF1bbmV3WV0pe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh4ICsgdGhpcy5kW2ldWzBdLCB5ICsgdGhpcy5kW2ldWzFdKTtcclxuICAgICAgICB0aGlzLmdvKG5ld1gsIG5ld1kpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERhdGEoeDpudW1iZXIsIHk6bnVtYmVyKXtcclxuICAgIGlmKHRoaXMuX21hemVEYXRhLmluQXJlYSh4LCB5KSl7XHJcbiAgICAgIGxldCB0aWxlID0gdGhpcy5fbWF6ZURhdGEubWF6ZVt4XVt5XTtcclxuICAgICAgdGlsZS5zZXRUeXBlKFRJTEVfVFlQRS5ST0FEKTtcclxuICAgICAgdGhpcy5fbWF6ZURhdGEucHJvY2Vzcy5wdXNoKG5ldyBUaWxlKHgsIHksIFRJTEVfVFlQRS5ST0FELCBmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxufSBcclxuXHJcbmV4cG9ydCB7IFNUR2FtZSB9O1xyXG4iXX0=