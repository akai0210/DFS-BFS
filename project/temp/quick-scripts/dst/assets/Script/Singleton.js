
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