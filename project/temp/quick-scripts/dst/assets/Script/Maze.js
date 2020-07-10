
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Maze.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFDNUMsbUNBQWtDO0FBRWxDLElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUM5QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGtCQUFrQixFQUFFLENBQUM7SUFDckIsY0FBYyxFQUFHLENBQUM7SUFDbEIsY0FBYyxFQUFHLENBQUM7SUFDbEIsNkJBQTZCLEVBQUcsQ0FBQztJQUNqQyw2QkFBNkIsRUFBRyxDQUFDO0lBQ2pDLGdCQUFnQixFQUFHLENBQUM7SUFDcEIsZ0JBQWdCLEVBQUcsQ0FBQztJQUNwQiw2QkFBNkIsRUFBRyxDQUFDO0lBQ2pDLDZCQUE2QixFQUFHLEVBQUU7Q0FDbkMsQ0FBQyxDQUFDO0FBMENLLDhDQUFpQjtBQXZDekI7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUFzQ0M7UUFsQ0MsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFHdkMsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUdWLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFHWixnQkFBVSxHQUFHLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDLENBQUM7O1FBcUI5RCxpQkFBaUI7SUFDbkIsQ0FBQztJQW5CQyxxQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUVsQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUU3QixlQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsZUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RCxlQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxlQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsNkNBQTZDO0lBRS9DLENBQUM7SUFHRCxvQkFBSyxHQUFMO0lBRUEsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ2M7SUFHdkM7UUFEQyxRQUFROzBEQUNDO0lBR1Y7UUFEQyxRQUFRO3NFQUNHO0lBR1o7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLENBQUM7NENBQ2dCO0lBZjNDLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FxQ3hCO0lBQUQsV0FBQztDQXJDRCxBQXFDQyxDQXJDaUMsRUFBRSxDQUFDLFNBQVMsR0FxQzdDO2tCQXJDb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCB7IFNUR2FtZSB9IGZyb20gXCIuL1NUR2FtZVwiO1xyXG5cclxubGV0IFZpc3VhbGl6YXRpb25UeXBlID0gY2MuRW51bSh7XHJcbiAgXCLpgJLlvZJERlPmt7HluqbkvJjlhYjlr7vot6/ov4fnqIvmvJTnpLpcIjogMCxcclxuICBcIumdnumAkuW9kkRGU+a3seW6puS8mOWFiOWvu+i3r+i/h+eoi+a8lOekulwiOiAxLFxyXG4gIFwi6Z2e6YCS5b2SREZT5a+76Lev6L+H56iL5ryU56S6XCIgOiAzLFxyXG4gIFwi6Z2e6YCS5b2SQkZT5a+76Lev6L+H56iL5ryU56S6XCIgOiA0LFxyXG4gIFwi6Z2e6YCS5b2SQlNG5Z+656GA5LiK6ZqP5py65Zyw5Zu+VmVyc2lvbjHlr7vot6/ov4fnqIvmvJTnpLpcIiA6IDUsXHJcbiAgXCLpnZ7pgJLlvZJCU0bln7rnoYDkuIrpmo/mnLrlnLDlm75WZXJzaW9uMuWvu+i3r+i/h+eoi+a8lOekulwiIDogNixcclxuICBcIumdnumAkuW9kkRGU+WcsOWbvueUn+aIkOi/h+eoi+a8lOekulwiIDogNyxcclxuICBcIumdnumAkuW9kkJGU+WcsOWbvueUn+aIkOi/h+eoi+a8lOekulwiIDogOCxcclxuICBcIumdnumAkuW9kkJTRuWfuuehgOS4iumaj+acuuWcsOWbvlZlcnNpb24x55Sf5oiQ6L+H56iL5ryU56S6XCIgOiA5LFxyXG4gIFwi6Z2e6YCS5b2SQlNG5Z+656GA5LiK6ZqP5py65Zyw5Zu+VmVyc2lvbjLnlJ/miJDov4fnqIvmvJTnpLpcIiA6IDEwLFxyXG59KTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hemUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gIGdyYXBoaWNzOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gIFxyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICB0aWxlU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5XHJcbiAg5Zyw5Zu+6KeE5qihID0gMTE7XHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIOWcsOWbvuagvOWtkOWkp+WwjyA9IDIwO1xyXG5cclxuICBAcHJvcGVydHkoe3R5cGUgOiBjYy5FbnVtKFZpc3VhbGl6YXRpb25UeXBlKX0pXHJcbiAgdmlzdWFsVHlwZSA9IFZpc3VhbGl6YXRpb25UeXBlW1wi6Z2e6YCS5b2SQlNG5Z+656GA5LiK6ZqP5py65Zyw5Zu+VmVyc2lvbjLnlJ/miJDov4fnqIvmvJTnpLpcIl07XHJcblxyXG5cclxuICBvbkxvYWQgKCkge1xyXG4gICAgY2MubG9nKCdvbkxvYWQuLicpXHJcblxyXG4gICAgbGV0IHNpemUgPSB0aGlzLuWcsOWbvuinhOaooTtcclxuICAgIGlmKHNpemUgJSAyID09PSAwKSBzaXplICs9IDE7XHJcblxyXG4gICAgU1RHYW1lLmdldEluc3RhbmNlKCkubG9hZERhdGEoc2l6ZSx0aGlzLuWcsOWbvuagvOWtkOWkp+Wwjyk7XHJcbiAgICBTVEdhbWUuZ2V0SW5zdGFuY2UoKS5zZXRUaWxlU3ByaXRlRnJhbWUodGhpcy50aWxlU3ByaXRlRnJhbWUpO1xyXG4gICAgU1RHYW1lLmdldEluc3RhbmNlKCkuaW5pdEdyYXBoaWNzTm9kZSh0aGlzLmdyYXBoaWNzLm5vZGUpO1xyXG4gICAgU1RHYW1lLmdldEluc3RhbmNlKCkuaW5pdE1hcCgpO1xyXG4gICAgLy8gU1RHYW1lLmdldEluc3RhbmNlKCkucnVuKHRoaXMudmlzdWFsVHlwZSk7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIFxyXG4gIH1cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcblxyXG5leHBvcnQge1Zpc3VhbGl6YXRpb25UeXBlfTsiXX0=