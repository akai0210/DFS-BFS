"use strict";
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