"use strict";
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