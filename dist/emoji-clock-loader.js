'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClockLoader = function () {
  function ClockLoader(options) {
    _classCallCheck(this, ClockLoader);

    if (typeof options === 'string') {
      options = {
        el: options
      };
    }

    options = options || {};
    options.clocks || (options.clocks = ['🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚']);
    options.speed || (options.speed = 1000);

    if (!options.el) {
      throw new Error('ClockLoader must receive an element selector.');
      return;
    }

    this.el = document.querySelector(options.el);
    this.options = options;

    this.start();
  }

  _createClass(ClockLoader, [{
    key: 'start',
    value: function start() {
      this.el.innerText = this.options.clocks[0];
      window.setInterval(this.tick.bind(this), this.options.speed);
    }
  }, {
    key: 'tick',
    value: function tick() {
      var clocks = this.options.clocks;
      var nextClockIndex = clocks.indexOf(this.el.innerText) + 1;

      if (nextClockIndex >= clocks.length) {
        nextClockIndex = 0;
      }

      var nextClock = clocks[nextClockIndex];

      this.el.innerText = nextClock;
    }
  }]);

  return ClockLoader;
}();

exports.default = ClockLoader;
//# sourceMappingURL=emoji-clock-loader.js.map
