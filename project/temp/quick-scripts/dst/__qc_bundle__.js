
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Maze');
require('./assets/Script/MazeData');
require('./assets/Script/STGame');
require('./assets/Script/STMazeHelper');
require('./assets/Script/Singleton');
require('./assets/Script/Tile');
require('./assets/Script/algorithm/List');
require('./assets/Script/algorithm/Queue');
require('./assets/Script/algorithm/RandomQueue');
require('./assets/Script/algorithm/RandomQueue2');
require('./assets/Script/algorithm/Stack');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/algorithm/RandomQueue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9a7dJvm0RP5q51vT1z2H3O', 'RandomQueue');
// Script/algorithm/RandomQueue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomQueue = /** @class */ (function () {
    function RandomQueue() {
        this.queue = [];
    }
    RandomQueue.prototype.push = function (e) {
        this.queue.push(e);
    };
    RandomQueue.prototype.pop = function () {
        if (this.queue.length === 0)
            throw new Error("There's no element to remove in Random Queue");
        var randIndex = Math.floor(Math.random() * this.queue.length);
        var randElement = this.queue[randIndex];
        this.queue[randIndex] = this.queue[this.queue.length - 1];
        this.queue.pop();
        return randElement;
    };
    RandomQueue.prototype.size = function () {
        return this.queue.length;
    };
    RandomQueue.prototype.isEmpty = function () {
        return this.size() == 0;
    };
    return RandomQueue;
}());
exports.default = RandomQueue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhbGdvcml0aG1cXFJhbmRvbVF1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFHRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTSwwQkFBSSxHQUFYLFVBQVksQ0FBRztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTSx5QkFBRyxHQUFWO1FBQ0UsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUVsRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFakIsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVNLDBCQUFJLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFTSw2QkFBTyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCxrQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21RdWV1ZTxFPiBpbXBsZW1lbnRzIExpc3Q8RT57XHJcbiAgcHJpdmF0ZSBxdWV1ZTpFIFtdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwdXNoKGU6RSl7XHJcbiAgICB0aGlzLnF1ZXVlLnB1c2goZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9wKCk6RSB7XHJcbiAgICBpZih0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUncyBubyBlbGVtZW50IHRvIHJlbW92ZSBpbiBSYW5kb20gUXVldWVcIik7XHJcblxyXG4gICAgbGV0IHJhbmRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucXVldWUubGVuZ3RoKTtcclxuICAgIFxyXG4gICAgbGV0IHJhbmRFbGVtZW50ID0gdGhpcy5xdWV1ZVtyYW5kSW5kZXhdO1xyXG4gICAgdGhpcy5xdWV1ZVtyYW5kSW5kZXhdID0gdGhpcy5xdWV1ZVt0aGlzLnF1ZXVlLmxlbmd0aC0xXTtcclxuICAgIHRoaXMucXVldWUucG9wKCk7XHJcblxyXG4gICAgcmV0dXJuIHJhbmRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNpemUoKXtcclxuICAgIHJldHVybiB0aGlzLnF1ZXVlLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0VtcHR5KCk6Ym9vbGVhbntcclxuICAgIHJldHVybiB0aGlzLnNpemUoKSA9PSAwO1xyXG4gIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/algorithm/Stack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '040a5B1nQtAn7t//7xGGDw2', 'Stack');
// Script/algorithm/Stack.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this._topNode = undefined;
        this._count = 0;
    }
    Stack.prototype.size = function () {
        return this._count;
    };
    Stack.prototype.isEmpty = function () {
        return this._topNode === undefined;
    };
    Stack.prototype.push = function (value) {
        // create a new Node and add it to the top
        var node = new Node(value, this._topNode);
        this._topNode = node;
        this._count++;
    };
    Stack.prototype.pop = function () {
        // remove the top node from the stack.
        // the node at the top now is the one before it
        var poppedNode = this._topNode;
        this._topNode = poppedNode.previous;
        this._count--;
        return poppedNode.data;
    };
    Stack.prototype.peek = function () {
        return this._topNode.data;
    };
    return Stack;
}());
exports.default = Stack;
var Node = /** @class */ (function () {
    function Node(data, previous) {
        this.previous = previous;
        this.data = data;
    }
    return Node;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhbGdvcml0aG1cXFN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUVVLGFBQVEsR0FBZ0IsU0FBUyxDQUFDO1FBQ2xDLFdBQU0sR0FBVyxDQUFDLENBQUM7SUE4QjdCLENBQUM7SUE1QlEsb0JBQUksR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sdUJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVNLG9CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLDBDQUEwQztRQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBUSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sbUJBQUcsR0FBVjtRQUNJLHNDQUFzQztRQUN0QywrQ0FBK0M7UUFDL0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFTSxvQkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUgsWUFBQztBQUFELENBakNBLEFBaUNDLElBQUE7O0FBRUQ7SUFLRSxjQUFhLElBQU8sRUFBRSxRQUFpQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0gsV0FBQztBQUFELENBVEEsQUFTQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2s8VERhdGE+IGltcGxlbWVudHMgTGlzdDxURGF0YT57XHJcblxyXG4gIHByaXZhdGUgX3RvcE5vZGU6IE5vZGU8VERhdGE+ID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2NvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICBwdWJsaWMgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY291bnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3RvcE5vZGUgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwdXNoKHZhbHVlOiBURGF0YSk6IHZvaWQge1xyXG4gICAgICAvLyBjcmVhdGUgYSBuZXcgTm9kZSBhbmQgYWRkIGl0IHRvIHRoZSB0b3BcclxuICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZTxURGF0YT4odmFsdWUsIHRoaXMuX3RvcE5vZGUpO1xyXG4gICAgICB0aGlzLl90b3BOb2RlID0gbm9kZTtcclxuICAgICAgdGhpcy5fY291bnQrKztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb3AoKTogVERhdGEge1xyXG4gICAgICAvLyByZW1vdmUgdGhlIHRvcCBub2RlIGZyb20gdGhlIHN0YWNrLlxyXG4gICAgICAvLyB0aGUgbm9kZSBhdCB0aGUgdG9wIG5vdyBpcyB0aGUgb25lIGJlZm9yZSBpdFxyXG4gICAgICBsZXQgcG9wcGVkTm9kZSA9IHRoaXMuX3RvcE5vZGU7XHJcbiAgICAgIHRoaXMuX3RvcE5vZGUgPSBwb3BwZWROb2RlLnByZXZpb3VzO1xyXG4gICAgICB0aGlzLl9jb3VudC0tO1xyXG4gICAgICByZXR1cm4gcG9wcGVkTm9kZS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBlZWsoKTogVERhdGEge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdG9wTm9kZS5kYXRhO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIE5vZGU8VD4ge1xyXG5cclxuICBwcmV2aW91czogTm9kZTxUPjtcclxuICBkYXRhOiBUO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoZGF0YTogVCwgcHJldmlvdXM6IE5vZGU8VD4pIHtcclxuICAgICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xyXG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b352eX8r1tPJ5LOK5mK9f1q', 'Singleton');
// Script/Singleton.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaW5nbGV0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBZ0JBLENBQUM7SUFiZSxxQkFBVyxHQUF6QjtRQUNFLElBQUcsQ0FBTyxJQUFLLENBQUMsUUFBUSxFQUFDO1lBQ2YsSUFBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBYSxJQUFLLENBQUMsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFRSCxnQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFFUSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNpbmdsZXRvbiB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFNpbmdsZXRvbjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZTxUIGV4dGVuZHMge30+KHRoaXM6IG5ldyAoKSA9PiBUKTogVCB7XHJcbiAgICBpZighKDxhbnk+dGhpcykuaW5zdGFuY2Upe1xyXG4gICAgICAgICg8YW55PnRoaXMpLmluc3RhbmNlID0gbmV3IHRoaXMoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoPGFueT50aGlzKS5pbnN0YW5jZTtcclxuICB9XHJcbiAgLy8gcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAvLyAgIGlmICghU2luZ2xldG9uLmluc3RhbmNlKSB7XHJcbiAgLy8gICAgIFNpbmdsZXRvbi5pbnN0YW5jZSA9IG5ldyBTaW5nbGV0b24oKTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICByZXR1cm4gU2luZ2xldG9uLmluc3RhbmNlO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2luZ2xldG9uIH07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/algorithm/RandomQueue2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be9e51G2lNH258oIogcTQK9', 'RandomQueue2');
// Script/algorithm/RandomQueue2.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomQueue2 = /** @class */ (function () {
    function RandomQueue2() {
        this.queue = [];
    }
    RandomQueue2.prototype.push = function (e) {
        if (Math.random() < 0.5)
            this.queue.unshift(e);
        else
            this.queue.push(e);
    };
    RandomQueue2.prototype.pop = function () {
        if (this.queue.length === 0)
            throw new Error("There's no element to remove in Random Queue");
        if (Math.random() < 0.5)
            return this.queue.shift();
        else
            return this.queue.pop();
    };
    RandomQueue2.prototype.size = function () {
        return this.queue.length;
    };
    RandomQueue2.prototype.isEmpty = function () {
        return this.size() == 0;
    };
    return RandomQueue2;
}());
exports.default = RandomQueue2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhbGdvcml0aG1cXFJhbmRvbVF1ZXVlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBR0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sMkJBQUksR0FBWCxVQUFZLENBQUc7UUFDYixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUV0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sMEJBQUcsR0FBVjtRQUNFLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFFbEUsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRztZQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBRTFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sMkJBQUksR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVNLDhCQUFPLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbVF1ZXVlMjxFPiBpbXBsZW1lbnRzIExpc3Q8RT57XHJcbiAgcHJpdmF0ZSBxdWV1ZTpFIFtdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwdXNoKGU6RSl7XHJcbiAgICBpZihNYXRoLnJhbmRvbSgpIDwgMC41KVxyXG4gICAgICB0aGlzLnF1ZXVlLnVuc2hpZnQoZSk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucXVldWUucHVzaChlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb3AoKTpFIHtcclxuICAgIGlmKHRoaXMucXVldWUubGVuZ3RoID09PSAwKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSdzIG5vIGVsZW1lbnQgdG8gcmVtb3ZlIGluIFJhbmRvbSBRdWV1ZVwiKTtcclxuXHJcbiAgICBpZihNYXRoLnJhbmRvbSgpIDwgMC41KVxyXG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5wb3AoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaXplKCl7XHJcbiAgICByZXR1cm4gdGhpcy5xdWV1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eSgpOmJvb2xlYW57XHJcbiAgICByZXR1cm4gdGhpcy5zaXplKCkgPT0gMDtcclxuICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/algorithm/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e62f4e3o+tMqZpQU/R9CFE8', 'List');
// Script/algorithm/List.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhbGdvcml0aG1cXExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBMaXN0PEU+IHtcclxuICBwdXNoKGU6RSk6dm9pZDtcclxuICBwb3AoKTpFO1xyXG4gIHNpemUoKTpudW1iZXI7XHJcbiAgaXNFbXB0eSgpOiBib29sZWFuO1xyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/algorithm/Queue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd272KGI4pIs6GqqXcrKmze', 'Queue');
// Script/algorithm/Queue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this._bottomNode = undefined;
        this._topNode = undefined;
        this._count = 0;
    }
    Queue.prototype.size = function () {
        return this._count;
    };
    Queue.prototype.isEmpty = function () {
        return this._bottomNode === undefined;
    };
    Queue.prototype.push = function (value) {
        // create a new Node and add it to the top
        var node = new Node(value, this._topNode, undefined);
        if (this._topNode !== undefined) {
            // set the "next" property on the top node if it exists
            this._topNode.setNext(node);
        }
        // if there is no bottom node, this is the bottom
        if (this._bottomNode === undefined) {
            this._bottomNode = node;
        }
        // this is always the top node
        this._topNode = node;
        this._count++;
    };
    Queue.prototype.pop = function () {
        // remove the bottom node from the stack.
        // the node at the bottom now is the one after it
        var poppedNode = this._bottomNode;
        // if this node has a next one
        if (poppedNode.next !== undefined) {
            // as we are popping the node, the next node will no longer have a "previous"
            poppedNode.next.setPrevious(undefined);
        }
        this._bottomNode = poppedNode.next;
        this._count--;
        return poppedNode.data;
    };
    Queue.prototype.peek = function () {
        return this._bottomNode.data;
    };
    return Queue;
}());
exports.default = Queue;
var Node = /** @class */ (function () {
    function Node(data, previous, next) {
        this.previous = previous;
        this.next = next;
        this.data = data;
    }
    Node.prototype.setNext = function (next) {
        this.next = next;
    };
    Node.prototype.setPrevious = function (previous) {
        this.previous = previous;
    };
    return Node;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhbGdvcml0aG1cXFF1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUVVLGdCQUFXLEdBQWdCLFNBQVMsQ0FBQztRQUNyQyxhQUFRLEdBQWdCLFNBQVMsQ0FBQztRQUNsQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBa0Q3QixDQUFDO0lBaERRLG9CQUFJLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLHVCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksS0FBWTtRQUNwQiwwQ0FBMEM7UUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUM3Qix1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7UUFFRCxpREFBaUQ7UUFDakQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELDhCQUE4QjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVNLG1CQUFHLEdBQVY7UUFDSSx5Q0FBeUM7UUFDekMsaURBQWlEO1FBQ2pELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFbEMsOEJBQThCO1FBQzlCLElBQUksVUFBVSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUc7WUFDaEMsNkVBQTZFO1lBQzdFLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRU0sb0JBQUksR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVILFlBQUM7QUFBRCxDQXREQSxBQXNEQyxJQUFBOztBQUVEO0lBTUUsY0FBYSxJQUFPLEVBQUUsUUFBaUIsRUFBRSxJQUFhO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxzQkFBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sMEJBQVcsR0FBbEIsVUFBbUIsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVILFdBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWU8VERhdGE+IGltcGxlbWVudHMgTGlzdDxURGF0YT57XHJcblxyXG4gIHByaXZhdGUgX2JvdHRvbU5vZGU6IE5vZGU8VERhdGE+ID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3RvcE5vZGU6IE5vZGU8VERhdGE+ID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2NvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICBwdWJsaWMgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY291bnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2JvdHRvbU5vZGUgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwdXNoKHZhbHVlOiBURGF0YSk6IHZvaWQge1xyXG4gICAgICAvLyBjcmVhdGUgYSBuZXcgTm9kZSBhbmQgYWRkIGl0IHRvIHRoZSB0b3BcclxuICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZTxURGF0YT4odmFsdWUsIHRoaXMuX3RvcE5vZGUsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fdG9wTm9kZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvLyBzZXQgdGhlIFwibmV4dFwiIHByb3BlcnR5IG9uIHRoZSB0b3Agbm9kZSBpZiBpdCBleGlzdHNcclxuICAgICAgICAgIHRoaXMuX3RvcE5vZGUuc2V0TmV4dChub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gYm90dG9tIG5vZGUsIHRoaXMgaXMgdGhlIGJvdHRvbVxyXG4gICAgICBpZiAodGhpcy5fYm90dG9tTm9kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLl9ib3R0b21Ob2RlID0gbm9kZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdGhpcyBpcyBhbHdheXMgdGhlIHRvcCBub2RlXHJcbiAgICAgIHRoaXMuX3RvcE5vZGUgPSBub2RlO1xyXG4gICAgICB0aGlzLl9jb3VudCsrO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvcCgpOiBURGF0YSB7XHJcbiAgICAgIC8vIHJlbW92ZSB0aGUgYm90dG9tIG5vZGUgZnJvbSB0aGUgc3RhY2suXHJcbiAgICAgIC8vIHRoZSBub2RlIGF0IHRoZSBib3R0b20gbm93IGlzIHRoZSBvbmUgYWZ0ZXIgaXRcclxuICAgICAgbGV0IHBvcHBlZE5vZGUgPSB0aGlzLl9ib3R0b21Ob2RlO1xyXG5cclxuICAgICAgLy8gaWYgdGhpcyBub2RlIGhhcyBhIG5leHQgb25lXHJcbiAgICAgIGlmIChwb3BwZWROb2RlLm5leHQgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgIC8vIGFzIHdlIGFyZSBwb3BwaW5nIHRoZSBub2RlLCB0aGUgbmV4dCBub2RlIHdpbGwgbm8gbG9uZ2VyIGhhdmUgYSBcInByZXZpb3VzXCJcclxuICAgICAgICAgIHBvcHBlZE5vZGUubmV4dC5zZXRQcmV2aW91cyh1bmRlZmluZWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9ib3R0b21Ob2RlID0gcG9wcGVkTm9kZS5uZXh0O1xyXG5cclxuICAgICAgdGhpcy5fY291bnQtLTtcclxuICAgICAgcmV0dXJuIHBvcHBlZE5vZGUuZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwZWVrKCk6IFREYXRhIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2JvdHRvbU5vZGUuZGF0YTtcclxuICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBOb2RlPFQ+IHtcclxuXHJcbiAgcHJldmlvdXM6IE5vZGU8VD47XHJcbiAgbmV4dDogTm9kZTxUPjtcclxuICBkYXRhOiBUO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoZGF0YTogVCwgcHJldmlvdXM6IE5vZGU8VD4sIG5leHQ6IE5vZGU8VD4pIHtcclxuICAgICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xyXG4gICAgICB0aGlzLm5leHQgPSBuZXh0O1xyXG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE5leHQobmV4dDogTm9kZTxUPik6IHZvaWQge1xyXG4gICAgICB0aGlzLm5leHQgPSBuZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFByZXZpb3VzKHByZXZpb3VzOiBOb2RlPFQ+KTogdm9pZCB7XHJcbiAgICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcclxuICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------
