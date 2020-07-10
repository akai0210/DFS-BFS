"use strict";
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