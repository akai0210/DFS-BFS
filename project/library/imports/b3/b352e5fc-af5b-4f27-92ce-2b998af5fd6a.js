"use strict";
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