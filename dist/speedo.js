'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Speedo = (function () {
  function Speedo() {
    _classCallCheck(this, Speedo);
  }

  _createClass(Speedo, [{
    key: 'supports',
    value: function supports(name, fn) {
      Object.defineProperty(this, name, {
        get: function get() {
          var retval = fn();
          return Promise[retval ? 'resolve' : 'reject'](retval);
        }
      });
    }
  }]);

  return Speedo;
})();

var speedo = new Speedo();

speedo.supports('websockets', function () {
  return typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined';
});

exports['default'] = speedo;
module.exports = exports['default'];