"use strict";
cc._RF.push(module, '788dcFa4RZK96RJFL8NKFcn', 'Maze');
// Script/Maze.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var STGame_1 = require("./STGame");
var VisualizationType = cc.Enum({
    "递归DFS深度优先寻路过程演示": 0,
    "非递归DFS深度优先寻路过程演示": 1,
    "非递归DFS寻路过程演示": 3,
    "非递归BFS寻路过程演示": 4,
    "非递归BSF基础上随机地图Version1寻路过程演示": 5,
    "非递归BSF基础上随机地图Version2寻路过程演示": 6,
    "非递归DFS地图生成过程演示": 7,
    "非递归BFS地图生成过程演示": 8,
    "非递归BSF基础上随机地图Version1生成过程演示": 9,
    "非递归BSF基础上随机地图Version2生成过程演示": 10,
});
exports.VisualizationType = VisualizationType;
var Maze = /** @class */ (function (_super) {
    __extends(Maze, _super);
    function Maze() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.graphics = null;
        _this.tileSpriteFrame = null;
        _this.地图规模 = 11;
        _this.地图格子大小 = 20;
        _this.visualType = VisualizationType["非递归BSF基础上随机地图Version2生成过程演示"];
        return _this;
        // update (dt) {}
    }
    Maze.prototype.onLoad = function () {
        cc.log('onLoad..');
        var size = this.地图规模;
        if (size % 2 === 0)
            size += 1;
        STGame_1.STGame.getInstance().loadData(size, this.地图格子大小);
        STGame_1.STGame.getInstance().setTileSpriteFrame(this.tileSpriteFrame);
        STGame_1.STGame.getInstance().initGraphicsNode(this.graphics.node);
        STGame_1.STGame.getInstance().initMap();
        // STGame.getInstance().run(this.visualType);
    };
    Maze.prototype.start = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], Maze.prototype, "graphics", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Maze.prototype, "tileSpriteFrame", void 0);
    __decorate([
        property
    ], Maze.prototype, "\u5730\u56FE\u89C4\u6A21", void 0);
    __decorate([
        property
    ], Maze.prototype, "\u5730\u56FE\u683C\u5B50\u5927\u5C0F", void 0);
    __decorate([
        property({ type: cc.Enum(VisualizationType) })
    ], Maze.prototype, "visualType", void 0);
    Maze = __decorate([
        ccclass
    ], Maze);
    return Maze;
}(cc.Component));
exports.default = Maze;

cc._RF.pop();