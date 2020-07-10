
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