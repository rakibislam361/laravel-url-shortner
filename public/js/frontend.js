(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/frontend"],{

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = (__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"]);
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/frontend/app.js":
/*!**************************************!*\
  !*** ./resources/js/frontend/app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");

__webpack_require__(/*! ./custom */ "./resources/js/frontend/custom.js");

/***/ }),

/***/ "./resources/js/frontend/custom.js":
/*!*****************************************!*\
  !*** ./resources/js/frontend/custom.js ***!
  \*****************************************/
/***/ (() => {

(function ($) {
  var current_fs, next_fs, previous_fs; //fieldsets

  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  var div_id = 1;
  setProgressBar(current);
  $("body").on("click", ".next", function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next(); //Add Class Active

    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active"); //show the next fieldset

    next_fs.show(); //hide the current fieldset with style

    current_fs.animate({
      opacity: 0
    }, {
      step: function step(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        current_fs.css({
          display: "none",
          position: "relative"
        });
        next_fs.css({
          opacity: opacity
        });
      },
      duration: 500
    });
    setProgressBar(++current);
  }).on('change', "#district_permanent", function () {
    var upazilla = JSON.parse($("#upazilla").val());
    var selected_district = $(this).children("option:selected").val();
    var upazilla_name = '';
    upazilla.forEach(function (element) {
      if (element.district_id == selected_district) {
        upazilla_name += '<option value="' + element.id + '">' + element.name + '</option>';
      }
    });
    $('#police_station_permanent').html(upazilla_name);
  }).on('change', "#district_present", function () {
    var upazilla = JSON.parse($("#upazilla").val());
    var selected_district = $(this).children("option:selected").val();
    var upazilla_name = '';
    upazilla.forEach(function (element) {
      if (element.district_id == selected_district) {
        upazilla_name += '<option value="' + element.id + '">' + element.name + '</option>';
      }
    });
    $('#police_station_present').html(upazilla_name);
  }).on("click", ".previous", function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev(); //Remove class active

    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active"); //show the previous fieldset

    previous_fs.show(); //hide the current fieldset with style

    current_fs.animate({
      opacity: 0
    }, {
      step: function step(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        current_fs.css({
          display: "none",
          position: "relative"
        });
        previous_fs.css({
          opacity: opacity
        });
      },
      duration: 500
    });
    setProgressBar(--current);
  }).on("click", ".qr_code", function () {
    var url = $(this).data('key');
    var qrmodal = $("#qruCodeModal");
    axios.post('url_shortener_qrcode', {
      data: url
    }).then(function (response) {
      qrmodal.find('.modal-body').html(response.data);
      qrmodal.modal('show');
    })["catch"](function (error) {
      console.log(error);
    }).then(function () {});
  });

  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/***/ (() => {

/**
 * Place any jQuery/helper plugins in here.
 */
(function ($) {
  /**
   * Checkbox tree for permission selecting
   */
  var permissionTree = $(".permission-tree :checkbox");
  permissionTree.on("click change", function () {
    if ($(this).is(":checked")) {
      $(this).siblings("ul").find('input[type="checkbox"]').attr("checked", true).attr("disabled", true);
    } else {
      $(this).siblings("ul").find('input[type="checkbox"]').removeAttr("checked").removeAttr("disabled");
    }
  });
  permissionTree.each(function () {
    if ($(this).is(":checked")) {
      $(this).siblings("ul").find('input[type="checkbox"]').attr("checked", true).attr("disabled", true);
    }
  });
  /**
   * Disable submit inputs in the given form
   *
   * @param form
   */

  function disableSubmitButtons(form) {
    form.find('input[type="submit"]').attr("disabled", true);
    form.find('button[type="submit"]').attr("disabled", true);
  }
  /**
   * Enable the submit inputs in a given form
   *
   * @param form
   */


  function enableSubmitButtons(form) {
    form.find('input[type="submit"]').removeAttr("disabled");
    form.find('button[type="submit"]').removeAttr("disabled");
  }
  /**
   * Disable all submit buttons once clicked
   */


  $("form").submit(function () {
    disableSubmitButtons($(this));
    return true;
  });
  /**
   * Add a confirmation to a delete button/form
   */

  $("body").on("click", "a[data-method=delete]", function (e) {
    e.preventDefault();
    var button = $(this);
    var href = button.attr("href");
    Swal.fire({
      text: "Are you sure you want to delete this item?",
      showCancelButton: true,
      confirmButtonText: "Confirm Delete",
      cancelButtonText: "Cancel",
      icon: "warning"
    }).then(function (result) {
      if (result.value) {
        axios["delete"](href).then(function (response) {
          var res = response.data;

          if (res.status) {
            Swal.fire({
              icon: res.icon,
              text: res.msg
            });
            button.closest("tr").remove();
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          } else {
            Swal.fire({
              icon: res.icon,
              text: res.msg
            });
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          }
        });
      }
    });
  }).on("submit", "form[name=confirm-item]", function (e) {
    var _this = this;

    e.preventDefault();
    Swal.fire({
      title: "Are you sure you want to do this?",
      showCancelButton: true,
      confirmButtonText: "Continue",
      cancelButtonText: "Cancel",
      icon: "warning"
    }).then(function (result) {
      if (result.value) {
        _this.submit();
      } else {
        enableSubmitButtons($(_this));
      }
    });
  }).on("click", "a[name=confirm-item]", function (e) {
    var _this2 = this;

    /**
     * Add an 'are you sure' pop-up to any button/link
     */
    e.preventDefault();
    Swal.fire({
      title: "Are you sure you want to do this?",
      showCancelButton: true,
      confirmButtonText: "Continue",
      cancelButtonText: "Cancel",
      icon: "info"
    }).then(function (result) {
      result.value && window.location.assign($(_this2).attr("href"));
    });
  }); // Remember tab on page load

  $('a[data-toggle="tab"], a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    var hash = $(e.target).attr("href");
    history.pushState ? history.pushState(null, null, hash) : location.hash = hash;
  });
  var hash = window.location.hash;

  if (hash) {
    $('.nav-link[href="' + hash + '"]').tab("show");
  } // Enable tooltips everywhere


  $('[data-toggle="tooltip"]').tooltip();
})(jQuery);

/***/ }),

/***/ "./resources/sass/frontend/app.scss":
/*!******************************************!*\
  !*** ./resources/sass/frontend/app.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/backend/app.scss":
/*!*****************************************!*\
  !*** ./resources/sass/backend/app.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/backend/extend.scss":
/*!********************************************!*\
  !*** ./resources/sass/backend/extend.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/backend","css/frontend","css/admin/extend","/js/vendor"], () => (__webpack_exec__("./resources/js/frontend/app.js"), __webpack_exec__("./resources/sass/frontend/app.scss"), __webpack_exec__("./resources/sass/backend/app.scss"), __webpack_exec__("./resources/sass/backend/extend.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2N1c3RvbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9mcm9udGVuZC9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9iYWNrZW5kL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2JhY2tlbmQvZXh0ZW5kLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxudHJ5IHtcbiAgIHdpbmRvdy5Qb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKS5kZWZhdWx0O1xuICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbiAgIHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xufSBjYXRjaCAoZSkge1xufVxuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9LRVksXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBmb3JjZVRMUzogdHJ1ZVxuLy8gfSk7XG4iLCIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxuXG5yZXF1aXJlKCcuLi9ib290c3RyYXAnKTtcblxuXG5yZXF1aXJlKCcuLi9wbHVnaW5zJyk7XG5yZXF1aXJlKCcuL2N1c3RvbScpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgdmFyIGN1cnJlbnRfZnMsIG5leHRfZnMsIHByZXZpb3VzX2ZzOyAvL2ZpZWxkc2V0c1xuICAgIHZhciBvcGFjaXR5O1xuICAgIHZhciBjdXJyZW50ID0gMTtcbiAgICB2YXIgc3RlcHMgPSAkKFwiZmllbGRzZXRcIikubGVuZ3RoO1xuICAgIHZhciBkaXZfaWQgPSAxO1xuXG4gICAgc2V0UHJvZ3Jlc3NCYXIoY3VycmVudCk7XG5cbiAgICAkKFwiYm9keVwiKVxuICAgICAgICAub24oXCJjbGlja1wiLCBcIi5uZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRfZnMgPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgICAgICAgICAgbmV4dF9mcyA9ICQodGhpcykucGFyZW50KCkubmV4dCgpO1xuICAgICAgICAgICAgLy9BZGQgQ2xhc3MgQWN0aXZlXG4gICAgICAgICAgICAkKFwiI3Byb2dyZXNzYmFyIGxpXCIpXG4gICAgICAgICAgICAgICAgLmVxKCQoXCJmaWVsZHNldFwiKS5pbmRleChuZXh0X2ZzKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIC8vc2hvdyB0aGUgbmV4dCBmaWVsZHNldFxuICAgICAgICAgICAgbmV4dF9mcy5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vaGlkZSB0aGUgY3VycmVudCBmaWVsZHNldCB3aXRoIHN0eWxlXG4gICAgICAgICAgICBjdXJyZW50X2ZzLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbiAobm93KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBtYWtpbmcgZmllbHNldCBhcHBlYXIgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSAxIC0gbm93O1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfZnMuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfZnMuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRQcm9ncmVzc0JhcigrK2N1cnJlbnQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NoYW5nZScsIFwiI2Rpc3RyaWN0X3Blcm1hbmVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXBhemlsbGEgPSBKU09OLnBhcnNlKCQoXCIjdXBhemlsbGFcIikudmFsKCkpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX2Rpc3RyaWN0ID0gJCh0aGlzKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIHZhciB1cGF6aWxsYV9uYW1lID0gJyc7XG4gICAgICAgICAgICB1cGF6aWxsYS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmRpc3RyaWN0X2lkID09IHNlbGVjdGVkX2Rpc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVwYXppbGxhX25hbWUgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgZWxlbWVudC5pZCArICdcIj4nICsgZWxlbWVudC5uYW1lICsgJzwvb3B0aW9uPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJyNwb2xpY2Vfc3RhdGlvbl9wZXJtYW5lbnQnKS5odG1sKHVwYXppbGxhX25hbWUpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2hhbmdlJywgXCIjZGlzdHJpY3RfcHJlc2VudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXBhemlsbGEgPSBKU09OLnBhcnNlKCQoXCIjdXBhemlsbGFcIikudmFsKCkpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX2Rpc3RyaWN0ID0gJCh0aGlzKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIHZhciB1cGF6aWxsYV9uYW1lID0gJyc7XG5cbiAgICAgICAgICAgIHVwYXppbGxhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGlzdHJpY3RfaWQgPT0gc2VsZWN0ZWRfZGlzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBhemlsbGFfbmFtZSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBlbGVtZW50LmlkICsgJ1wiPicgKyBlbGVtZW50Lm5hbWUgKyAnPC9vcHRpb24+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3BvbGljZV9zdGF0aW9uX3ByZXNlbnQnKS5odG1sKHVwYXppbGxhX25hbWUpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJjbGlja1wiLCBcIi5wcmV2aW91c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjdXJyZW50X2ZzID0gJCh0aGlzKS5wYXJlbnQoKTtcbiAgICAgICAgICAgIHByZXZpb3VzX2ZzID0gJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCk7XG4gICAgICAgICAgICAvL1JlbW92ZSBjbGFzcyBhY3RpdmVcbiAgICAgICAgICAgICQoXCIjcHJvZ3Jlc3NiYXIgbGlcIilcbiAgICAgICAgICAgICAgICAuZXEoJChcImZpZWxkc2V0XCIpLmluZGV4KGN1cnJlbnRfZnMpKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgLy9zaG93IHRoZSBwcmV2aW91cyBmaWVsZHNldFxuICAgICAgICAgICAgcHJldmlvdXNfZnMuc2hvdygpO1xuXG4gICAgICAgICAgICAvL2hpZGUgdGhlIGN1cnJlbnQgZmllbGRzZXQgd2l0aCBzdHlsZVxuICAgICAgICAgICAgY3VycmVudF9mcy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24gKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgbWFraW5nIGZpZWxzZXQgYXBwZWFyIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ID0gMSAtIG5vdztcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2ZzLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c19mcy5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKC0tY3VycmVudCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiLnFyX2NvZGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVybCA9ICQodGhpcykuZGF0YSgna2V5Jyk7XG4gICAgICAgICAgICB2YXIgcXJtb2RhbCA9ICQoXCIjcXJ1Q29kZU1vZGFsXCIpO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KCd1cmxfc2hvcnRlbmVyX3FyY29kZScsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdXJsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHFybW9kYWwuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHFybW9kYWwubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge30pO1xuICAgICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldFByb2dyZXNzQmFyKGN1clN0ZXApIHtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSBwYXJzZUZsb2F0KDEwMCAvIHN0ZXBzKSAqIGN1clN0ZXA7XG4gICAgICAgIHBlcmNlbnQgPSBwZXJjZW50LnRvRml4ZWQoKTtcbiAgICAgICAgJChcIi5wcm9ncmVzcy1iYXJcIikuY3NzKFwid2lkdGhcIiwgcGVyY2VudCArIFwiJVwiKTtcbiAgICB9XG5cbiAgICAkKFwiLnN1Ym1pdFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuXG59KShqUXVlcnkpO1xuIiwiLyoqXG4gKiBQbGFjZSBhbnkgalF1ZXJ5L2hlbHBlciBwbHVnaW5zIGluIGhlcmUuXG4gKi9cbihmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIENoZWNrYm94IHRyZWUgZm9yIHBlcm1pc3Npb24gc2VsZWN0aW5nXG4gICAgICovXG4gICAgbGV0IHBlcm1pc3Npb25UcmVlID0gJChcIi5wZXJtaXNzaW9uLXRyZWUgOmNoZWNrYm94XCIpO1xuXG4gICAgcGVybWlzc2lvblRyZWUub24oXCJjbGljayBjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKFwidWxcIilcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgICAuYXR0cihcImNoZWNrZWRcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcInVsXCIpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoXCJjaGVja2VkXCIpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGVybWlzc2lvblRyZWUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoXCJ1bFwiKVxuICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2hlY2tlZFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgc3VibWl0IGlucHV0cyBpbiB0aGUgZ2l2ZW4gZm9ybVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXNhYmxlU3VibWl0QnV0dG9ucyhmb3JtKSB7XG4gICAgICAgIGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhlIHN1Ym1pdCBpbnB1dHMgaW4gYSBnaXZlbiBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVuYWJsZVN1Ym1pdEJ1dHRvbnMoZm9ybSkge1xuICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIGZvcm0uZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBhbGwgc3VibWl0IGJ1dHRvbnMgb25jZSBjbGlja2VkXG4gICAgICovXG4gICAgJChcImZvcm1cIikuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbnMoJCh0aGlzKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uZmlybWF0aW9uIHRvIGEgZGVsZXRlIGJ1dHRvbi9mb3JtXG4gICAgICovXG4gICAgJChcImJvZHlcIilcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCJhW2RhdGEtbWV0aG9kPWRlbGV0ZV1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gYnV0dG9uLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtP1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiQ29uZmlybSBEZWxldGVcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoaHJlZikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiByZXMuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xvc2VzdChcInRyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IHJlcy5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMubXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJzdWJtaXRcIiwgXCJmb3JtW25hbWU9Y29uZmlybS1pdGVtXVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkbyB0aGlzP1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiQ29udGludWVcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVN1Ym1pdEJ1dHRvbnMoJCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiYVtuYW1lPWNvbmZpcm0taXRlbV1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIGFuICdhcmUgeW91IHN1cmUnIHBvcC11cCB0byBhbnkgYnV0dG9uL2xpbmtcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkbyB0aGlzP1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiQ29udGludWVcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlICYmIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyBSZW1lbWJlciB0YWIgb24gcGFnZSBsb2FkXG4gICAgJCgnYVtkYXRhLXRvZ2dsZT1cInRhYlwiXSwgYVtkYXRhLXRvZ2dsZT1cInBpbGxcIl0nKS5vbihcbiAgICAgICAgXCJzaG93bi5icy50YWJcIixcbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCBoYXNoID0gJChlLnRhcmdldCkuYXR0cihcImhyZWZcIik7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSA/XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgaGFzaCkgOlxuICAgICAgICAgICAgICAgIChsb2NhdGlvbi5oYXNoID0gaGFzaCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgbGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBpZiAoaGFzaCkge1xuICAgICAgICAkKCcubmF2LWxpbmtbaHJlZj1cIicgKyBoYXNoICsgJ1wiXScpLnRhYihcInNob3dcIik7XG4gICAgfVxuXG4gICAgLy8gRW5hYmxlIHRvb2x0aXBzIGV2ZXJ5d2hlcmVcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xufSkoalF1ZXJ5KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwibmFtZXMiOlsid2luZG93IiwiXyIsInJlcXVpcmUiLCJQb3BwZXIiLCIkIiwialF1ZXJ5IiwiZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3VycmVudF9mcyIsIm5leHRfZnMiLCJwcmV2aW91c19mcyIsIm9wYWNpdHkiLCJjdXJyZW50Iiwic3RlcHMiLCJsZW5ndGgiLCJkaXZfaWQiLCJzZXRQcm9ncmVzc0JhciIsIm9uIiwicGFyZW50IiwibmV4dCIsImVxIiwiaW5kZXgiLCJhZGRDbGFzcyIsInNob3ciLCJhbmltYXRlIiwic3RlcCIsIm5vdyIsImNzcyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwidXBhemlsbGEiLCJKU09OIiwicGFyc2UiLCJ2YWwiLCJzZWxlY3RlZF9kaXN0cmljdCIsImNoaWxkcmVuIiwidXBhemlsbGFfbmFtZSIsImZvckVhY2giLCJlbGVtZW50IiwiZGlzdHJpY3RfaWQiLCJpZCIsIm5hbWUiLCJodG1sIiwicHJldiIsInJlbW92ZUNsYXNzIiwidXJsIiwiZGF0YSIsInFybW9kYWwiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZmluZCIsIm1vZGFsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY3VyU3RlcCIsInBlcmNlbnQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNsaWNrIiwicGVybWlzc2lvblRyZWUiLCJpcyIsInNpYmxpbmdzIiwiYXR0ciIsInJlbW92ZUF0dHIiLCJlYWNoIiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbnMiLCJmb3JtIiwiZW5hYmxlU3VibWl0QnV0dG9ucyIsInN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwiaHJlZiIsIlN3YWwiLCJmaXJlIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJpY29uIiwicmVzdWx0IiwidmFsdWUiLCJyZXMiLCJzdGF0dXMiLCJtc2ciLCJjbG9zZXN0IiwicmVtb3ZlIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwidGl0bGUiLCJhc3NpZ24iLCJoYXNoIiwidGFyZ2V0IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRhYiIsInRvb2x0aXAiXSwic291cmNlUm9vdCI6IiJ9