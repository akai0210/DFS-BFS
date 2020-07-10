
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