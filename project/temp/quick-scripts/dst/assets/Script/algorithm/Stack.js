
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