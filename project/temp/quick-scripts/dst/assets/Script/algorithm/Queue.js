
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