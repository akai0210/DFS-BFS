"use strict";
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