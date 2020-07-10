
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Maze');
require('./assets/Script/MazeData');
require('./assets/Script/STGame');
require('./assets/Script/STMazeHelper');
require('./assets/Script/Singleton');
require('./assets/Script/Tile');
require('./assets/Script/algorithm/List');
require('./assets/Script/algorithm/Queue');
require('./assets/Script/algorithm/RandomQueue');
require('./assets/Script/algorithm/RandomQueue2');
require('./assets/Script/algorithm/Stack');

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