"use strict";
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