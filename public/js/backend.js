(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/backend"],{

/***/ "./resources/js/backend/adminLte.js":
/*!******************************************!*\
  !*** ./resources/js/backend/adminLte.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * AdminLTE v3.0.5 (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <http://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (exports) {
  'use strict';
  /**
   * --------------------------------------------
   * AdminLTE ControlSidebar.js
   * License MIT
   * --------------------------------------------
   */

  var ControlSidebar = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'ControlSidebar';
    var DATA_KEY = 'lte.controlsidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      COLLAPSED: "collapsed" + EVENT_KEY,
      EXPANDED: "expanded" + EVENT_KEY
    };
    var Selector = {
      CONTROL_SIDEBAR: '.control-sidebar',
      CONTROL_SIDEBAR_CONTENT: '.control-sidebar-content',
      DATA_TOGGLE: '[data-widget="control-sidebar"]',
      CONTENT: '.content-wrapper',
      HEADER: '.main-header',
      FOOTER: '.main-footer'
    };
    var ClassName = {
      CONTROL_SIDEBAR_ANIMATE: 'control-sidebar-animate',
      CONTROL_SIDEBAR_OPEN: 'control-sidebar-open',
      CONTROL_SIDEBAR_SLIDE: 'control-sidebar-slide-open',
      LAYOUT_FIXED: 'layout-fixed',
      NAVBAR_FIXED: 'layout-navbar-fixed',
      NAVBAR_SM_FIXED: 'layout-sm-navbar-fixed',
      NAVBAR_MD_FIXED: 'layout-md-navbar-fixed',
      NAVBAR_LG_FIXED: 'layout-lg-navbar-fixed',
      NAVBAR_XL_FIXED: 'layout-xl-navbar-fixed',
      FOOTER_FIXED: 'layout-footer-fixed',
      FOOTER_SM_FIXED: 'layout-sm-footer-fixed',
      FOOTER_MD_FIXED: 'layout-md-footer-fixed',
      FOOTER_LG_FIXED: 'layout-lg-footer-fixed',
      FOOTER_XL_FIXED: 'layout-xl-footer-fixed'
    };
    var Default = {
      controlsidebarSlide: true,
      scrollbarTheme: 'os-theme-light',
      scrollbarAutoHide: 'l'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var ControlSidebar = /*#__PURE__*/function () {
      function ControlSidebar(element, config) {
        this._element = element;
        this._config = config;

        this._init();
      } // Public


      var _proto = ControlSidebar.prototype;

      _proto.collapse = function collapse() {
        // Show the control sidebar
        if (this._config.controlsidebarSlide) {
          $('html').addClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
          $('body').removeClass(ClassName.CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
            $(Selector.CONTROL_SIDEBAR).hide();
            $('html').removeClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
            $(this).dequeue();
          });
        } else {
          $('body').removeClass(ClassName.CONTROL_SIDEBAR_OPEN);
        }

        var collapsedEvent = $.Event(Event.COLLAPSED);
        $(this._element).trigger(collapsedEvent);
      };

      _proto.show = function show() {
        // Collapse the control sidebar
        if (this._config.controlsidebarSlide) {
          $('html').addClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
          $(Selector.CONTROL_SIDEBAR).show().delay(10).queue(function () {
            $('body').addClass(ClassName.CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
              $('html').removeClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
              $(this).dequeue();
            });
            $(this).dequeue();
          });
        } else {
          $('body').addClass(ClassName.CONTROL_SIDEBAR_OPEN);
        }

        var expandedEvent = $.Event(Event.EXPANDED);
        $(this._element).trigger(expandedEvent);
      };

      _proto.toggle = function toggle() {
        var shouldClose = $('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE);

        if (shouldClose) {
          // Close the control sidebar
          this.collapse();
        } else {
          // Open the control sidebar
          this.show();
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this;

        this._fixHeight();

        this._fixScrollHeight();

        $(window).resize(function () {
          _this._fixHeight();

          _this._fixScrollHeight();
        });
        $(window).scroll(function () {
          if ($('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE)) {
            _this._fixScrollHeight();
          }
        });
      };

      _proto._fixScrollHeight = function _fixScrollHeight() {
        var heights = {
          scroll: $(document).height(),
          window: $(window).height(),
          header: $(Selector.HEADER).outerHeight(),
          footer: $(Selector.FOOTER).outerHeight()
        };
        var positions = {
          bottom: Math.abs(heights.window + $(window).scrollTop() - heights.scroll),
          top: $(window).scrollTop()
        };
        var navbarFixed = false;
        var footerFixed = false;

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          if ($('body').hasClass(ClassName.NAVBAR_FIXED) || $('body').hasClass(ClassName.NAVBAR_SM_FIXED) || $('body').hasClass(ClassName.NAVBAR_MD_FIXED) || $('body').hasClass(ClassName.NAVBAR_LG_FIXED) || $('body').hasClass(ClassName.NAVBAR_XL_FIXED)) {
            if ($(Selector.HEADER).css("position") === "fixed") {
              navbarFixed = true;
            }
          }

          if ($('body').hasClass(ClassName.FOOTER_FIXED) || $('body').hasClass(ClassName.FOOTER_SM_FIXED) || $('body').hasClass(ClassName.FOOTER_MD_FIXED) || $('body').hasClass(ClassName.FOOTER_LG_FIXED) || $('body').hasClass(ClassName.FOOTER_XL_FIXED)) {
            if ($(Selector.FOOTER).css("position") === "fixed") {
              footerFixed = true;
            }
          }

          if (positions.top === 0 && positions.bottom === 0) {
            $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer);
            $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.header + heights.footer));
          } else if (positions.bottom <= heights.footer) {
            if (footerFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer - positions.bottom);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.footer - positions.bottom));
            } else {
              $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer);
            }
          } else if (positions.top <= heights.header) {
            if (navbarFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header - positions.top);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.header - positions.top));
            } else {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            }
          } else {
            if (navbarFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('top', 0);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window);
            } else {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            }
          }
        }
      };

      _proto._fixHeight = function _fixHeight() {
        var heights = {
          window: $(window).height(),
          header: $(Selector.HEADER).outerHeight(),
          footer: $(Selector.FOOTER).outerHeight()
        };

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          var sidebarHeight = heights.window - heights.header;

          if ($('body').hasClass(ClassName.FOOTER_FIXED) || $('body').hasClass(ClassName.FOOTER_SM_FIXED) || $('body').hasClass(ClassName.FOOTER_MD_FIXED) || $('body').hasClass(ClassName.FOOTER_LG_FIXED) || $('body').hasClass(ClassName.FOOTER_XL_FIXED)) {
            if ($(Selector.FOOTER).css("position") === "fixed") {
              sidebarHeight = heights.window - heights.header - heights.footer;
            }
          }

          $(Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', sidebarHeight);

          if (typeof $.fn.overlayScrollbars !== 'undefined') {
            $(Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).overlayScrollbars({
              className: this._config.scrollbarTheme,
              sizeAutoCapable: true,
              scrollbars: {
                autoHide: this._config.scrollbarAutoHide,
                clickScrolling: true
              }
            });
          }
        }
      } // Static
      ;

      ControlSidebar._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new ControlSidebar(this, _options);
            $(this).data(DATA_KEY, data);
          }

          if (data[operation] === 'undefined') {
            throw new Error(operation + " is not a function");
          }

          data[operation]();
        });
      };

      return ControlSidebar;
    }();
    /**
     *
     * Data Api implementation
     * ====================================================
     */


    $(document).on('click', Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      ControlSidebar._jQueryInterface.call($(this), 'toggle');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = ControlSidebar._jQueryInterface;
    $.fn[NAME].Constructor = ControlSidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ControlSidebar._jQueryInterface;
    };

    return ControlSidebar;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Layout.js
   * License MIT
   * --------------------------------------------
   */


  var Layout = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Layout';
    var DATA_KEY = 'lte.layout';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      HEADER: '.main-header',
      MAIN_SIDEBAR: '.main-sidebar',
      SIDEBAR: '.main-sidebar .sidebar',
      CONTENT: '.content-wrapper',
      BRAND: '.brand-link',
      CONTENT_HEADER: '.content-header',
      WRAPPER: '.wrapper',
      CONTROL_SIDEBAR: '.control-sidebar',
      CONTROL_SIDEBAR_CONTENT: '.control-sidebar-content',
      CONTROL_SIDEBAR_BTN: '[data-widget="control-sidebar"]',
      LAYOUT_FIXED: '.layout-fixed',
      FOOTER: '.main-footer',
      PUSHMENU_BTN: '[data-widget="pushmenu"]',
      LOGIN_BOX: '.login-box',
      REGISTER_BOX: '.register-box'
    };
    var ClassName = {
      HOLD: 'hold-transition',
      SIDEBAR: 'main-sidebar',
      CONTENT_FIXED: 'content-fixed',
      SIDEBAR_FOCUSED: 'sidebar-focused',
      LAYOUT_FIXED: 'layout-fixed',
      NAVBAR_FIXED: 'layout-navbar-fixed',
      FOOTER_FIXED: 'layout-footer-fixed',
      LOGIN_PAGE: 'login-page',
      REGISTER_PAGE: 'register-page',
      CONTROL_SIDEBAR_SLIDE_OPEN: 'control-sidebar-slide-open',
      CONTROL_SIDEBAR_OPEN: 'control-sidebar-open'
    };
    var Default = {
      scrollbarTheme: 'os-theme-light',
      scrollbarAutoHide: 'l',
      panelAutoHeight: true,
      loginRegisterAutoHeight: true
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Layout = /*#__PURE__*/function () {
      function Layout(element, config) {
        this._config = config;
        this._element = element;

        this._init();
      } // Public


      var _proto = Layout.prototype;

      _proto.fixLayoutHeight = function fixLayoutHeight(extra) {
        if (extra === void 0) {
          extra = null;
        }

        var control_sidebar = 0;

        if ($('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || extra == 'control_sidebar') {
          control_sidebar = $(Selector.CONTROL_SIDEBAR_CONTENT).height();
        }

        var heights = {
          window: $(window).height(),
          header: $(Selector.HEADER).length !== 0 ? $(Selector.HEADER).outerHeight() : 0,
          footer: $(Selector.FOOTER).length !== 0 ? $(Selector.FOOTER).outerHeight() : 0,
          sidebar: $(Selector.SIDEBAR).length !== 0 ? $(Selector.SIDEBAR).height() : 0,
          control_sidebar: control_sidebar
        };

        var max = this._max(heights);

        var offset = this._config.panelAutoHeight;

        if (offset === true) {
          offset = 0;
        }

        if (offset !== false) {
          if (max == heights.control_sidebar) {
            $(Selector.CONTENT).css('min-height', max + offset);
          } else if (max == heights.window) {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header - heights.footer);
          } else {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header);
          }

          if (this._isFooterFixed()) {
            $(Selector.CONTENT).css('min-height', parseFloat($(Selector.CONTENT).css('min-height')) + heights.footer);
          }
        }

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          if (offset !== false) {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header - heights.footer);
          }

          if (typeof $.fn.overlayScrollbars !== 'undefined') {
            $(Selector.SIDEBAR).overlayScrollbars({
              className: this._config.scrollbarTheme,
              sizeAutoCapable: true,
              scrollbars: {
                autoHide: this._config.scrollbarAutoHide,
                clickScrolling: true
              }
            });
          }
        }
      };

      _proto.fixLoginRegisterHeight = function fixLoginRegisterHeight() {
        if ($(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).length === 0) {
          $('body, html').css('height', 'auto');
        } else if ($(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).length !== 0) {
          var box_height = $(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).height();

          if ($('body').css('min-height') !== box_height) {
            $('body').css('min-height', box_height);
          }
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this; // Activate layout height watcher


        this.fixLayoutHeight();

        if (this._config.loginRegisterAutoHeight === true) {
          this.fixLoginRegisterHeight();
        } else if (Number.isInteger(this._config.loginRegisterAutoHeight)) {
          setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
        }

        $(Selector.SIDEBAR).on('collapsed.lte.treeview expanded.lte.treeview', function () {
          _this.fixLayoutHeight();
        });
        $(Selector.PUSHMENU_BTN).on('collapsed.lte.pushmenu shown.lte.pushmenu', function () {
          _this.fixLayoutHeight();
        });
        $(Selector.CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', function () {
          _this.fixLayoutHeight();
        }).on('expanded.lte.controlsidebar', function () {
          _this.fixLayoutHeight('control_sidebar');
        });
        $(window).resize(function () {
          _this.fixLayoutHeight();
        });
        setTimeout(function () {
          $('body.hold-transition').removeClass('hold-transition');
        }, 50);
      };

      _proto._max = function _max(numbers) {
        // Calculate the maximum number in a list
        var max = 0;
        Object.keys(numbers).forEach(function (key) {
          if (numbers[key] > max) {
            max = numbers[key];
          }
        });
        return max;
      };

      _proto._isFooterFixed = function _isFooterFixed() {
        return $('.main-footer').css('position') === 'fixed';
      } // Static
      ;

      Layout._jQueryInterface = function _jQueryInterface(config) {
        if (config === void 0) {
          config = '';
        }

        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Layout($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init' || config === '') {
            data['_init']();
          } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
            data[config]();
          }
        });
      };

      return Layout;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on('load', function () {
      Layout._jQueryInterface.call($('body'));
    });
    $(Selector.SIDEBAR + ' a').on('focusin', function () {
      $(Selector.MAIN_SIDEBAR).addClass(ClassName.SIDEBAR_FOCUSED);
    });
    $(Selector.SIDEBAR + ' a').on('focusout', function () {
      $(Selector.MAIN_SIDEBAR).removeClass(ClassName.SIDEBAR_FOCUSED);
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Layout._jQueryInterface;
    $.fn[NAME].Constructor = Layout;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Layout._jQueryInterface;
    };

    return Layout;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE PushMenu.js
   * License MIT
   * --------------------------------------------
   */


  var PushMenu = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'PushMenu';
    var DATA_KEY = 'lte.pushmenu';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      COLLAPSED: "collapsed" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY
    };
    var Default = {
      autoCollapseSize: 992,
      enableRemember: false,
      noTransitionAfterReload: true
    };
    var Selector = {
      TOGGLE_BUTTON: '[data-widget="pushmenu"]',
      SIDEBAR_MINI: '.sidebar-mini',
      SIDEBAR_COLLAPSED: '.sidebar-collapse',
      BODY: 'body',
      OVERLAY: '#sidebar-overlay',
      WRAPPER: '.wrapper'
    };
    var ClassName = {
      COLLAPSED: 'sidebar-collapse',
      OPEN: 'sidebar-open',
      CLOSED: 'sidebar-closed'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var PushMenu = /*#__PURE__*/function () {
      function PushMenu(element, options) {
        this._element = element;
        this._options = $.extend({}, Default, options);

        if (!$(Selector.OVERLAY).length) {
          this._addOverlay();
        }

        this._init();
      } // Public


      var _proto = PushMenu.prototype;

      _proto.expand = function expand() {
        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            $(Selector.BODY).addClass(ClassName.OPEN);
          }
        }

        $(Selector.BODY).removeClass(ClassName.COLLAPSED).removeClass(ClassName.CLOSED);

        if (this._options.enableRemember) {
          localStorage.setItem("remember" + EVENT_KEY, ClassName.OPEN);
        }

        var shownEvent = $.Event(Event.SHOWN);
        $(this._element).trigger(shownEvent);
      };

      _proto.collapse = function collapse() {
        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            $(Selector.BODY).removeClass(ClassName.OPEN).addClass(ClassName.CLOSED);
          }
        }

        $(Selector.BODY).addClass(ClassName.COLLAPSED);

        if (this._options.enableRemember) {
          localStorage.setItem("remember" + EVENT_KEY, ClassName.COLLAPSED);
        }

        var collapsedEvent = $.Event(Event.COLLAPSED);
        $(this._element).trigger(collapsedEvent);
      };

      _proto.toggle = function toggle() {
        if (!$(Selector.BODY).hasClass(ClassName.COLLAPSED)) {
          this.collapse();
        } else {
          this.expand();
        }
      };

      _proto.autoCollapse = function autoCollapse(resize) {
        if (resize === void 0) {
          resize = false;
        }

        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            if (!$(Selector.BODY).hasClass(ClassName.OPEN)) {
              this.collapse();
            }
          } else if (resize == true) {
            if ($(Selector.BODY).hasClass(ClassName.OPEN)) {
              $(Selector.BODY).removeClass(ClassName.OPEN);
            } else if ($(Selector.BODY).hasClass(ClassName.CLOSED)) {
              this.expand();
            }
          }
        }
      };

      _proto.remember = function remember() {
        if (this._options.enableRemember) {
          var toggleState = localStorage.getItem("remember" + EVENT_KEY);

          if (toggleState == ClassName.COLLAPSED) {
            if (this._options.noTransitionAfterReload) {
              $("body").addClass('hold-transition').addClass(ClassName.COLLAPSED).delay(50).queue(function () {
                $(this).removeClass('hold-transition');
                $(this).dequeue();
              });
            } else {
              $("body").addClass(ClassName.COLLAPSED);
            }
          } else {
            if (this._options.noTransitionAfterReload) {
              $("body").addClass('hold-transition').removeClass(ClassName.COLLAPSED).delay(50).queue(function () {
                $(this).removeClass('hold-transition');
                $(this).dequeue();
              });
            } else {
              $("body").removeClass(ClassName.COLLAPSED);
            }
          }
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this;

        this.remember();
        this.autoCollapse();
        $(window).resize(function () {
          _this.autoCollapse(true);
        });
      };

      _proto._addOverlay = function _addOverlay() {
        var _this2 = this;

        var overlay = $('<div />', {
          id: 'sidebar-overlay'
        });
        overlay.on('click', function () {
          _this2.collapse();
        });
        $(Selector.WRAPPER).append(overlay);
      } // Static
      ;

      PushMenu._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new PushMenu(this, _options);
            $(this).data(DATA_KEY, data);
          }

          if (typeof operation === 'string' && operation.match(/collapse|expand|toggle/)) {
            data[operation]();
          }
        });
      };

      return PushMenu;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.TOGGLE_BUTTON, function (event) {
      event.preventDefault();
      var button = event.currentTarget;

      if ($(button).data('widget') !== 'pushmenu') {
        button = $(button).closest(Selector.TOGGLE_BUTTON);
      }

      PushMenu._jQueryInterface.call($(button), 'toggle');
    });
    $(window).on('load', function () {
      PushMenu._jQueryInterface.call($(Selector.TOGGLE_BUTTON));
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = PushMenu._jQueryInterface;
    $.fn[NAME].Constructor = PushMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return PushMenu._jQueryInterface;
    };

    return PushMenu;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Treeview.js
   * License MIT
   * --------------------------------------------
   */


  var Treeview = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Treeview';
    var DATA_KEY = 'lte.treeview';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      SELECTED: "selected" + EVENT_KEY,
      EXPANDED: "expanded" + EVENT_KEY,
      COLLAPSED: "collapsed" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY
    };
    var Selector = {
      LI: '.nav-item',
      LINK: '.nav-link',
      TREEVIEW_MENU: '.nav-treeview',
      OPEN: '.menu-open',
      DATA_WIDGET: '[data-widget="treeview"]'
    };
    var ClassName = {
      LI: 'nav-item',
      LINK: 'nav-link',
      TREEVIEW_MENU: 'nav-treeview',
      OPEN: 'menu-open',
      SIDEBAR_COLLAPSED: 'sidebar-collapse'
    };
    var Default = {
      trigger: Selector.DATA_WIDGET + " " + Selector.LINK,
      animationSpeed: 300,
      accordion: true,
      expandSidebar: false,
      sidebarButtonSelector: '[data-widget="pushmenu"]'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Treeview = /*#__PURE__*/function () {
      function Treeview(element, config) {
        this._config = config;
        this._element = element;
      } // Public


      var _proto = Treeview.prototype;

      _proto.init = function init() {
        this._setupListeners();
      };

      _proto.expand = function expand(treeviewMenu, parentLi) {
        var _this = this;

        var expandedEvent = $.Event(Event.EXPANDED);

        if (this._config.accordion) {
          var openMenuLi = parentLi.siblings(Selector.OPEN).first();
          var openTreeview = openMenuLi.find(Selector.TREEVIEW_MENU).first();
          this.collapse(openTreeview, openMenuLi);
        }

        treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
          parentLi.addClass(ClassName.OPEN);
          $(_this._element).trigger(expandedEvent);
        });

        if (this._config.expandSidebar) {
          this._expandSidebar();
        }
      };

      _proto.collapse = function collapse(treeviewMenu, parentLi) {
        var _this2 = this;

        var collapsedEvent = $.Event(Event.COLLAPSED);
        treeviewMenu.stop().slideUp(this._config.animationSpeed, function () {
          parentLi.removeClass(ClassName.OPEN);
          $(_this2._element).trigger(collapsedEvent);
          treeviewMenu.find(Selector.OPEN + " > " + Selector.TREEVIEW_MENU).slideUp();
          treeviewMenu.find(Selector.OPEN).removeClass(ClassName.OPEN);
        });
      };

      _proto.toggle = function toggle(event) {
        var $relativeTarget = $(event.currentTarget);
        var $parent = $relativeTarget.parent();
        var treeviewMenu = $parent.find('> ' + Selector.TREEVIEW_MENU);

        if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
          if (!$parent.is(Selector.LI)) {
            treeviewMenu = $parent.parent().find('> ' + Selector.TREEVIEW_MENU);
          }

          if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
            return;
          }
        }

        event.preventDefault();
        var parentLi = $relativeTarget.parents(Selector.LI).first();
        var isOpen = parentLi.hasClass(ClassName.OPEN);

        if (isOpen) {
          this.collapse($(treeviewMenu), parentLi);
        } else {
          this.expand($(treeviewMenu), parentLi);
        }
      } // Private
      ;

      _proto._setupListeners = function _setupListeners() {
        var _this3 = this;

        $(document).on('click', this._config.trigger, function (event) {
          _this3.toggle(event);
        });
      };

      _proto._expandSidebar = function _expandSidebar() {
        if ($('body').hasClass(ClassName.SIDEBAR_COLLAPSED)) {
          $(this._config.sidebarButtonSelector).PushMenu('expand');
        }
      } // Static
      ;

      Treeview._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Treeview($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      };

      return Treeview;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.DATA_WIDGET).each(function () {
        Treeview._jQueryInterface.call($(this), 'init');
      });
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Treeview._jQueryInterface;
    $.fn[NAME].Constructor = Treeview;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Treeview._jQueryInterface;
    };

    return Treeview;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE DirectChat.js
   * License MIT
   * --------------------------------------------
   */


  var DirectChat = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'DirectChat';
    var DATA_KEY = 'lte.directchat';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      TOGGLED: "toggled{EVENT_KEY}"
    };
    var Selector = {
      DATA_TOGGLE: '[data-widget="chat-pane-toggle"]',
      DIRECT_CHAT: '.direct-chat'
    };
    var ClassName = {
      DIRECT_CHAT_OPEN: 'direct-chat-contacts-open'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var DirectChat = /*#__PURE__*/function () {
      function DirectChat(element, config) {
        this._element = element;
      }

      var _proto = DirectChat.prototype;

      _proto.toggle = function toggle() {
        $(this._element).parents(Selector.DIRECT_CHAT).first().toggleClass(ClassName.DIRECT_CHAT_OPEN);
        var toggledEvent = $.Event(Event.TOGGLED);
        $(this._element).trigger(toggledEvent);
      } // Static
      ;

      DirectChat._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new DirectChat($(this));
            $(this).data(DATA_KEY, data);
          }

          data[config]();
        });
      };

      return DirectChat;
    }();
    /**
     *
     * Data Api implementation
     * ====================================================
     */


    $(document).on('click', Selector.DATA_TOGGLE, function (event) {
      if (event) event.preventDefault();

      DirectChat._jQueryInterface.call($(this), 'toggle');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = DirectChat._jQueryInterface;
    $.fn[NAME].Constructor = DirectChat;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return DirectChat._jQueryInterface;
    };

    return DirectChat;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE TodoList.js
   * License MIT
   * --------------------------------------------
   */


  var TodoList = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'TodoList';
    var DATA_KEY = 'lte.todolist';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      DATA_TOGGLE: '[data-widget="todo-list"]'
    };
    var ClassName = {
      TODO_LIST_DONE: 'done'
    };
    var Default = {
      onCheck: function onCheck(item) {
        return item;
      },
      onUnCheck: function onUnCheck(item) {
        return item;
      }
    };
    /**
     * Class Definition
     * ====================================================
     */

    var TodoList = /*#__PURE__*/function () {
      function TodoList(element, config) {
        this._config = config;
        this._element = element;

        this._init();
      } // Public


      var _proto = TodoList.prototype;

      _proto.toggle = function toggle(item) {
        item.parents('li').toggleClass(ClassName.TODO_LIST_DONE);

        if (!$(item).prop('checked')) {
          this.unCheck($(item));
          return;
        }

        this.check(item);
      };

      _proto.check = function check(item) {
        this._config.onCheck.call(item);
      };

      _proto.unCheck = function unCheck(item) {
        this._config.onUnCheck.call(item);
      } // Private
      ;

      _proto._init = function _init() {
        var that = this;
        $(Selector.DATA_TOGGLE).find('input:checkbox:checked').parents('li').toggleClass(ClassName.TODO_LIST_DONE);
        $(Selector.DATA_TOGGLE).on('change', 'input:checkbox', function (event) {
          that.toggle($(event.target));
        });
      } // Static
      ;

      TodoList._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new TodoList($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      };

      return TodoList;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on('load', function () {
      TodoList._jQueryInterface.call($(Selector.DATA_TOGGLE));
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = TodoList._jQueryInterface;
    $.fn[NAME].Constructor = TodoList;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return TodoList._jQueryInterface;
    };

    return TodoList;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE CardWidget.js
   * License MIT
   * --------------------------------------------
   */


  var CardWidget = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'CardWidget';
    var DATA_KEY = 'lte.cardwidget';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      EXPANDED: "expanded" + EVENT_KEY,
      COLLAPSED: "collapsed" + EVENT_KEY,
      MAXIMIZED: "maximized" + EVENT_KEY,
      MINIMIZED: "minimized" + EVENT_KEY,
      REMOVED: "removed" + EVENT_KEY
    };
    var ClassName = {
      CARD: 'card',
      COLLAPSED: 'collapsed-card',
      COLLAPSING: 'collapsing-card',
      EXPANDING: 'expanding-card',
      WAS_COLLAPSED: 'was-collapsed',
      MAXIMIZED: 'maximized-card'
    };
    var Selector = {
      DATA_REMOVE: '[data-card-widget="remove"]',
      DATA_COLLAPSE: '[data-card-widget="collapse"]',
      DATA_MAXIMIZE: '[data-card-widget="maximize"]',
      CARD: "." + ClassName.CARD,
      CARD_HEADER: '.card-header',
      CARD_BODY: '.card-body',
      CARD_FOOTER: '.card-footer',
      COLLAPSED: "." + ClassName.COLLAPSED
    };
    var Default = {
      animationSpeed: 'normal',
      collapseTrigger: Selector.DATA_COLLAPSE,
      removeTrigger: Selector.DATA_REMOVE,
      maximizeTrigger: Selector.DATA_MAXIMIZE,
      collapseIcon: 'fa-minus',
      expandIcon: 'fa-plus',
      maximizeIcon: 'fa-expand',
      minimizeIcon: 'fa-compress'
    };

    var CardWidget = /*#__PURE__*/function () {
      function CardWidget(element, settings) {
        this._element = element;
        this._parent = element.parents(Selector.CARD).first();

        if (element.hasClass(ClassName.CARD)) {
          this._parent = element;
        }

        this._settings = $.extend({}, Default, settings);
      }

      var _proto = CardWidget.prototype;

      _proto.collapse = function collapse() {
        var _this = this;

        this._parent.addClass(ClassName.COLLAPSING).children(Selector.CARD_BODY + ", " + Selector.CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
          _this._parent.addClass(ClassName.COLLAPSED).removeClass(ClassName.COLLAPSING);
        });

        this._parent.find('> ' + Selector.CARD_HEADER + ' ' + this._settings.collapseTrigger + ' .' + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);

        var collapsed = $.Event(Event.COLLAPSED);

        this._element.trigger(collapsed, this._parent);
      };

      _proto.expand = function expand() {
        var _this2 = this;

        this._parent.addClass(ClassName.EXPANDING).children(Selector.CARD_BODY + ", " + Selector.CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
          _this2._parent.removeClass(ClassName.COLLAPSED).removeClass(ClassName.EXPANDING);
        });

        this._parent.find('> ' + Selector.CARD_HEADER + ' ' + this._settings.collapseTrigger + ' .' + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);

        var expanded = $.Event(Event.EXPANDED);

        this._element.trigger(expanded, this._parent);
      };

      _proto.remove = function remove() {
        this._parent.slideUp();

        var removed = $.Event(Event.REMOVED);

        this._element.trigger(removed, this._parent);
      };

      _proto.toggle = function toggle() {
        if (this._parent.hasClass(ClassName.COLLAPSED)) {
          this.expand();
          return;
        }

        this.collapse();
      };

      _proto.maximize = function maximize() {
        this._parent.find(this._settings.maximizeTrigger + ' .' + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);

        this._parent.css({
          'height': this._parent.height(),
          'width': this._parent.width(),
          'transition': 'all .15s'
        }).delay(150).queue(function () {
          $(this).addClass(ClassName.MAXIMIZED);
          $('html').addClass(ClassName.MAXIMIZED);

          if ($(this).hasClass(ClassName.COLLAPSED)) {
            $(this).addClass(ClassName.WAS_COLLAPSED);
          }

          $(this).dequeue();
        });

        var maximized = $.Event(Event.MAXIMIZED);

        this._element.trigger(maximized, this._parent);
      };

      _proto.minimize = function minimize() {
        this._parent.find(this._settings.maximizeTrigger + ' .' + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);

        this._parent.css('cssText', 'height:' + this._parent[0].style.height + ' !important;' + 'width:' + this._parent[0].style.width + ' !important; transition: all .15s;').delay(10).queue(function () {
          $(this).removeClass(ClassName.MAXIMIZED);
          $('html').removeClass(ClassName.MAXIMIZED);
          $(this).css({
            'height': 'inherit',
            'width': 'inherit'
          });

          if ($(this).hasClass(ClassName.WAS_COLLAPSED)) {
            $(this).removeClass(ClassName.WAS_COLLAPSED);
          }

          $(this).dequeue();
        });

        var MINIMIZED = $.Event(Event.MINIMIZED);

        this._element.trigger(MINIMIZED, this._parent);
      };

      _proto.toggleMaximize = function toggleMaximize() {
        if (this._parent.hasClass(ClassName.MAXIMIZED)) {
          this.minimize();
          return;
        }

        this.maximize();
      } // Private
      ;

      _proto._init = function _init(card) {
        var _this3 = this;

        this._parent = card;
        $(this).find(this._settings.collapseTrigger).click(function () {
          _this3.toggle();
        });
        $(this).find(this._settings.maximizeTrigger).click(function () {
          _this3.toggleMaximize();
        });
        $(this).find(this._settings.removeTrigger).click(function () {
          _this3.remove();
        });
      } // Static
      ;

      CardWidget._jQueryInterface = function _jQueryInterface(config) {
        var data = $(this).data(DATA_KEY);

        var _options = $.extend({}, Default, $(this).data());

        if (!data) {
          data = new CardWidget($(this), _options);
          $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
        }

        if (typeof config === 'string' && config.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)) {
          data[config]();
        } else if (_typeof(config) === 'object') {
          data._init($(this));
        }
      };

      return CardWidget;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.DATA_COLLAPSE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'toggle');
    });
    $(document).on('click', Selector.DATA_REMOVE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'remove');
    });
    $(document).on('click', Selector.DATA_MAXIMIZE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'toggleMaximize');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = CardWidget._jQueryInterface;
    $.fn[NAME].Constructor = CardWidget;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return CardWidget._jQueryInterface;
    };

    return CardWidget;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE CardRefresh.js
   * License MIT
   * --------------------------------------------
   */


  var CardRefresh = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'CardRefresh';
    var DATA_KEY = 'lte.cardrefresh';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      LOADED: "loaded" + EVENT_KEY,
      OVERLAY_ADDED: "overlay.added" + EVENT_KEY,
      OVERLAY_REMOVED: "overlay.removed" + EVENT_KEY
    };
    var ClassName = {
      CARD: 'card'
    };
    var Selector = {
      CARD: "." + ClassName.CARD,
      DATA_REFRESH: '[data-card-widget="card-refresh"]'
    };
    var Default = {
      source: '',
      sourceSelector: '',
      params: {},
      trigger: Selector.DATA_REFRESH,
      content: '.card-body',
      loadInContent: true,
      loadOnInit: true,
      responseType: '',
      overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
      onLoadStart: function onLoadStart() {},
      onLoadDone: function onLoadDone(response) {
        return response;
      }
    };

    var CardRefresh = /*#__PURE__*/function () {
      function CardRefresh(element, settings) {
        this._element = element;
        this._parent = element.parents(Selector.CARD).first();
        this._settings = $.extend({}, Default, settings);
        this._overlay = $(this._settings.overlayTemplate);

        if (element.hasClass(ClassName.CARD)) {
          this._parent = element;
        }

        if (this._settings.source === '') {
          throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.');
        }
      }

      var _proto = CardRefresh.prototype;

      _proto.load = function load() {
        this._addOverlay();

        this._settings.onLoadStart.call($(this));

        $.get(this._settings.source, this._settings.params, function (response) {
          if (this._settings.loadInContent) {
            if (this._settings.sourceSelector != '') {
              response = $(response).find(this._settings.sourceSelector).html();
            }

            this._parent.find(this._settings.content).html(response);
          }

          this._settings.onLoadDone.call($(this), response);

          this._removeOverlay();
        }.bind(this), this._settings.responseType !== '' && this._settings.responseType);
        var loadedEvent = $.Event(Event.LOADED);
        $(this._element).trigger(loadedEvent);
      };

      _proto._addOverlay = function _addOverlay() {
        this._parent.append(this._overlay);

        var overlayAddedEvent = $.Event(Event.OVERLAY_ADDED);
        $(this._element).trigger(overlayAddedEvent);
      };

      _proto._removeOverlay = function _removeOverlay() {
        this._parent.find(this._overlay).remove();

        var overlayRemovedEvent = $.Event(Event.OVERLAY_REMOVED);
        $(this._element).trigger(overlayRemovedEvent);
      }; // Private


      _proto._init = function _init(card) {
        var _this = this;

        $(this).find(this._settings.trigger).on('click', function () {
          _this.load();
        });

        if (this._settings.loadOnInit) {
          this.load();
        }
      } // Static
      ;

      CardRefresh._jQueryInterface = function _jQueryInterface(config) {
        var data = $(this).data(DATA_KEY);

        var _options = $.extend({}, Default, $(this).data());

        if (!data) {
          data = new CardRefresh($(this), _options);
          $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
        }

        if (typeof config === 'string' && config.match(/load/)) {
          data[config]();
        } else {
          data._init($(this));
        }
      };

      return CardRefresh;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.DATA_REFRESH, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardRefresh._jQueryInterface.call($(this), 'load');
    });
    $(document).ready(function () {
      $(Selector.DATA_REFRESH).each(function () {
        CardRefresh._jQueryInterface.call($(this));
      });
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = CardRefresh._jQueryInterface;
    $.fn[NAME].Constructor = CardRefresh;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return CardRefresh._jQueryInterface;
    };

    return CardRefresh;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Dropdown.js
   * License MIT
   * --------------------------------------------
   */


  var Dropdown = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Dropdown';
    var DATA_KEY = 'lte.dropdown';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      NAVBAR: '.navbar',
      DROPDOWN_MENU: '.dropdown-menu',
      DROPDOWN_MENU_ACTIVE: '.dropdown-menu.show',
      DROPDOWN_TOGGLE: '[data-toggle="dropdown"]'
    };
    var ClassName = {
      DROPDOWN_HOVER: 'dropdown-hover',
      DROPDOWN_RIGHT: 'dropdown-menu-right'
    };
    var Default = {};
    /**
     * Class Definition
     * ====================================================
     */

    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(element, config) {
        this._config = config;
        this._element = element;
      } // Public


      var _proto = Dropdown.prototype;

      _proto.toggleSubmenu = function toggleSubmenu() {
        this._element.siblings().show().toggleClass("show");

        if (!this._element.next().hasClass('show')) {
          this._element.parents('.dropdown-menu').first().find('.show').removeClass("show").hide();
        }

        this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show").hide();
        });
      };

      _proto.fixPosition = function fixPosition() {
        var elm = $(Selector.DROPDOWN_MENU_ACTIVE);

        if (elm.length !== 0) {
          if (elm.hasClass(ClassName.DROPDOWN_RIGHT)) {
            elm.css('left', 'inherit');
            elm.css('right', 0);
          } else {
            elm.css('left', 0);
            elm.css('right', 'inherit');
          }

          var offset = elm.offset();
          var width = elm.width();
          var windowWidth = $(window).width();
          var visiblePart = windowWidth - offset.left;

          if (offset.left < 0) {
            elm.css('left', 'inherit');
            elm.css('right', offset.left - 5);
          } else {
            if (visiblePart < width) {
              elm.css('left', 'inherit');
              elm.css('right', 0);
            }
          }
        }
      } // Static
      ;

      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Dropdown($(this), _config);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggleSubmenu' || config == 'fixPosition') {
            data[config]();
          }
        });
      };

      return Dropdown;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(Selector.DROPDOWN_MENU + ' ' + Selector.DROPDOWN_TOGGLE).on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($(this), 'toggleSubmenu');
    });
    $(Selector.NAVBAR + ' ' + Selector.DROPDOWN_TOGGLE).on("click", function (event) {
      event.preventDefault();
      setTimeout(function () {
        Dropdown._jQueryInterface.call($(this), 'fixPosition');
      }, 1);
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };

    return Dropdown;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Toasts.js
   * License MIT
   * --------------------------------------------
   */


  var Toasts = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Toasts';
    var DATA_KEY = 'lte.toasts';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      INIT: "init" + EVENT_KEY,
      CREATED: "created" + EVENT_KEY,
      REMOVED: "removed" + EVENT_KEY
    };
    var Selector = {
      BODY: 'toast-body',
      CONTAINER_TOP_RIGHT: '#toastsContainerTopRight',
      CONTAINER_TOP_LEFT: '#toastsContainerTopLeft',
      CONTAINER_BOTTOM_RIGHT: '#toastsContainerBottomRight',
      CONTAINER_BOTTOM_LEFT: '#toastsContainerBottomLeft'
    };
    var ClassName = {
      TOP_RIGHT: 'toasts-top-right',
      TOP_LEFT: 'toasts-top-left',
      BOTTOM_RIGHT: 'toasts-bottom-right',
      BOTTOM_LEFT: 'toasts-bottom-left',
      FADE: 'fade'
    };
    var Position = {
      TOP_RIGHT: 'topRight',
      TOP_LEFT: 'topLeft',
      BOTTOM_RIGHT: 'bottomRight',
      BOTTOM_LEFT: 'bottomLeft'
    };
    var Default = {
      position: Position.TOP_RIGHT,
      fixed: true,
      autohide: false,
      autoremove: true,
      delay: 1000,
      fade: true,
      icon: null,
      image: null,
      imageAlt: null,
      imageHeight: '25px',
      title: null,
      subtitle: null,
      close: true,
      body: null,
      "class": null
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Toasts = /*#__PURE__*/function () {
      function Toasts(element, config) {
        this._config = config;

        this._prepareContainer();

        var initEvent = $.Event(Event.INIT);
        $('body').trigger(initEvent);
      } // Public


      var _proto = Toasts.prototype;

      _proto.create = function create() {
        var toast = $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
        toast.data('autohide', this._config.autohide);
        toast.data('animation', this._config.fade);

        if (this._config["class"]) {
          toast.addClass(this._config["class"]);
        }

        if (this._config.delay && this._config.delay != 500) {
          toast.data('delay', this._config.delay);
        }

        var toast_header = $('<div class="toast-header">');

        if (this._config.image != null) {
          var toast_image = $('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt);

          if (this._config.imageHeight != null) {
            toast_image.height(this._config.imageHeight).width('auto');
          }

          toast_header.append(toast_image);
        }

        if (this._config.icon != null) {
          toast_header.append($('<i />').addClass('mr-2').addClass(this._config.icon));
        }

        if (this._config.title != null) {
          toast_header.append($('<strong />').addClass('mr-auto').html(this._config.title));
        }

        if (this._config.subtitle != null) {
          toast_header.append($('<small />').html(this._config.subtitle));
        }

        if (this._config.close == true) {
          var toast_close = $('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>');

          if (this._config.title == null) {
            toast_close.toggleClass('ml-2 ml-auto');
          }

          toast_header.append(toast_close);
        }

        toast.append(toast_header);

        if (this._config.body != null) {
          toast.append($('<div class="toast-body" />').html(this._config.body));
        }

        $(this._getContainerId()).prepend(toast);
        var createdEvent = $.Event(Event.CREATED);
        $('body').trigger(createdEvent);
        toast.toast('show');

        if (this._config.autoremove) {
          toast.on('hidden.bs.toast', function () {
            $(this).delay(200).remove();
            var removedEvent = $.Event(Event.REMOVED);
            $('body').trigger(removedEvent);
          });
        }
      } // Static
      ;

      _proto._getContainerId = function _getContainerId() {
        if (this._config.position == Position.TOP_RIGHT) {
          return Selector.CONTAINER_TOP_RIGHT;
        } else if (this._config.position == Position.TOP_LEFT) {
          return Selector.CONTAINER_TOP_LEFT;
        } else if (this._config.position == Position.BOTTOM_RIGHT) {
          return Selector.CONTAINER_BOTTOM_RIGHT;
        } else if (this._config.position == Position.BOTTOM_LEFT) {
          return Selector.CONTAINER_BOTTOM_LEFT;
        }
      };

      _proto._prepareContainer = function _prepareContainer() {
        if ($(this._getContainerId()).length === 0) {
          var container = $('<div />').attr('id', this._getContainerId().replace('#', ''));

          if (this._config.position == Position.TOP_RIGHT) {
            container.addClass(ClassName.TOP_RIGHT);
          } else if (this._config.position == Position.TOP_LEFT) {
            container.addClass(ClassName.TOP_LEFT);
          } else if (this._config.position == Position.BOTTOM_RIGHT) {
            container.addClass(ClassName.BOTTOM_RIGHT);
          } else if (this._config.position == Position.BOTTOM_LEFT) {
            container.addClass(ClassName.BOTTOM_LEFT);
          }

          $('body').append(container);
        }

        if (this._config.fixed) {
          $(this._getContainerId()).addClass('fixed');
        } else {
          $(this._getContainerId()).removeClass('fixed');
        }
      } // Static
      ;

      Toasts._jQueryInterface = function _jQueryInterface(option, config) {
        return this.each(function () {
          var _options = $.extend({}, Default, config);

          var toast = new Toasts($(this), _options);

          if (option === 'create') {
            toast[option]();
          }
        });
      };

      return Toasts;
    }();
    /**
     * jQuery API
     * ====================================================
     */


    $.fn[NAME] = Toasts._jQueryInterface;
    $.fn[NAME].Constructor = Toasts;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Toasts._jQueryInterface;
    };

    return Toasts;
  }(jQuery);

  exports.CardRefresh = CardRefresh;
  exports.CardWidget = CardWidget;
  exports.ControlSidebar = ControlSidebar;
  exports.DirectChat = DirectChat;
  exports.Dropdown = Dropdown;
  exports.Layout = Layout;
  exports.PushMenu = PushMenu;
  exports.Toasts = Toasts;
  exports.TodoList = TodoList;
  exports.Treeview = Treeview;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

try {
  window.Popper = (__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"]);
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
  window.Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {
  console.log(e);
}

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // Boilerplate

__webpack_require__(/*! ./adminLte */ "./resources/js/backend/adminLte.js");

__webpack_require__(/*! ./demo */ "./resources/js/backend/demo.js");

__webpack_require__(/*! ./manage_operation */ "./resources/js/backend/manage_operation.js");

__webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");

/***/ }),

/***/ "./resources/js/backend/demo.js":
/*!**************************************!*\
  !*** ./resources/js/backend/demo.js ***!
  \**************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict';

  var $sidebar = $('.control-sidebar');
  var $container = $('<div />', {
    "class": 'p-3 control-sidebar-content'
  });
  $sidebar.append($container);
  var navbar_dark_skins = ['navbar-primary', 'navbar-secondary', 'navbar-info', 'navbar-success', 'navbar-danger', 'navbar-indigo', 'navbar-purple', 'navbar-pink', 'navbar-navy', 'navbar-lightblue', 'navbar-teal', 'navbar-cyan', 'navbar-dark', 'navbar-gray-dark', 'navbar-gray'];
  var navbar_light_skins = ['navbar-light', 'navbar-warning', 'navbar-white', 'navbar-orange'];
  $container.append('<h5>Customize AdminLTE</h5><hr class="mb-2"/>');
  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0');
    } else {
      $('.main-header').removeClass('border-bottom-0');
    }
  });
  var $no_border_container = $('<div />', {
    'class': 'mb-1'
  }).append($no_border_checkbox).append('<span>No Navbar border</span>');
  $container.append($no_border_container);
  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm');
    } else {
      $('body').removeClass('text-sm');
    }
  });
  var $text_sm_body_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_body_checkbox).append('<span>Body small text</span>');
  $container.append($text_sm_body_container);
  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm');
    } else {
      $('.main-header').removeClass('text-sm');
    }
  });
  var $text_sm_header_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_header_checkbox).append('<span>Navbar small text</span>');
  $container.append($text_sm_header_container);
  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm');
    } else {
      $('.nav-sidebar').removeClass('text-sm');
    }
  });
  var $text_sm_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_sidebar_checkbox).append('<span>Sidebar nav small text</span>');
  $container.append($text_sm_sidebar_container);
  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm');
    } else {
      $('.main-footer').removeClass('text-sm');
    }
  });
  var $text_sm_footer_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_footer_checkbox).append('<span>Footer small text</span>');
  $container.append($text_sm_footer_container);
  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat');
    } else {
      $('.nav-sidebar').removeClass('nav-flat');
    }
  });
  var $flat_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($flat_sidebar_checkbox).append('<span>Sidebar nav flat style</span>');
  $container.append($flat_sidebar_container);
  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy');
    } else {
      $('.nav-sidebar').removeClass('nav-legacy');
    }
  });
  var $legacy_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($legacy_sidebar_checkbox).append('<span>Sidebar nav legacy style</span>');
  $container.append($legacy_sidebar_container);
  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact');
    } else {
      $('.nav-sidebar').removeClass('nav-compact');
    }
  });
  var $compact_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($compact_sidebar_checkbox).append('<span>Sidebar nav compact</span>');
  $container.append($compact_sidebar_container);
  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent');
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent');
    }
  });
  var $child_indent_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($child_indent_sidebar_checkbox).append('<span>Sidebar nav child indent</span>');
  $container.append($child_indent_sidebar_container);
  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand');
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand');
    }
  });
  var $no_expand_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($no_expand_sidebar_checkbox).append('<span>Main Sidebar disable hover/focus auto expand</span>');
  $container.append($no_expand_sidebar_container);
  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm');
    } else {
      $('.brand-link').removeClass('text-sm');
    }
  });
  var $text_sm_brand_container = $('<div />', {
    'class': 'mb-4'
  }).append($text_sm_brand_checkbox).append('<span>Brand small text</span>');
  $container.append($text_sm_brand_container);
  $container.append('<h6>Navbar Variants</h6>');
  var $navbar_variants = $('<div />', {
    'class': 'd-flex'
  });
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins);
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    var color = $(this).data('color');
    var $main_header = $('.main-header');
    $main_header.removeClass('navbar-dark').removeClass('navbar-light');
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color);
    });

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark');
    } else {
      $main_header.addClass('navbar-light');
    }

    $main_header.addClass(color);
  });
  $navbar_variants.append($navbar_variants_colors);
  $container.append($navbar_variants);
  var sidebar_colors = ['bg-primary', 'bg-warning', 'bg-info', 'bg-danger', 'bg-success', 'bg-indigo', 'bg-lightblue', 'bg-navy', 'bg-purple', 'bg-fuchsia', 'bg-pink', 'bg-maroon', 'bg-orange', 'bg-lime', 'bg-teal', 'bg-olive'];
  var accent_colors = ['accent-primary', 'accent-warning', 'accent-info', 'accent-danger', 'accent-success', 'accent-indigo', 'accent-lightblue', 'accent-navy', 'accent-purple', 'accent-fuchsia', 'accent-pink', 'accent-maroon', 'accent-orange', 'accent-lime', 'accent-teal', 'accent-olive'];
  var sidebar_skins = ['sidebar-dark-primary', 'sidebar-dark-warning', 'sidebar-dark-info', 'sidebar-dark-danger', 'sidebar-dark-success', 'sidebar-dark-indigo', 'sidebar-dark-lightblue', 'sidebar-dark-navy', 'sidebar-dark-purple', 'sidebar-dark-fuchsia', 'sidebar-dark-pink', 'sidebar-dark-maroon', 'sidebar-dark-orange', 'sidebar-dark-lime', 'sidebar-dark-teal', 'sidebar-dark-olive', 'sidebar-light-primary', 'sidebar-light-warning', 'sidebar-light-info', 'sidebar-light-danger', 'sidebar-light-success', 'sidebar-light-indigo', 'sidebar-light-lightblue', 'sidebar-light-navy', 'sidebar-light-purple', 'sidebar-light-fuchsia', 'sidebar-light-pink', 'sidebar-light-maroon', 'sidebar-light-orange', 'sidebar-light-lime', 'sidebar-light-teal', 'sidebar-light-olive'];
  $container.append('<h6>Accent Color Variants</h6>');
  var $accent_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($accent_variants);
  $container.append(createSkinBlock(accent_colors, function () {
    var color = $(this).data('color');
    var accent_class = color;
    var $body = $('body');
    accent_colors.map(function (skin) {
      $body.removeClass(skin);
    });
    $body.addClass(accent_class);
  }));
  $container.append('<h6>Dark Sidebar Variants</h6>');
  var $sidebar_variants_dark = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($sidebar_variants_dark);
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin);
    });
    $sidebar.addClass(sidebar_class);
  }));
  $container.append('<h6>Light Sidebar Variants</h6>');
  var $sidebar_variants_light = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($sidebar_variants_light);
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin);
    });
    $sidebar.addClass(sidebar_class);
  }));
  var logo_skins = navbar_all_colors;
  $container.append('<h6>Brand Logo Variants</h6>');
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($logo_variants);
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)'
  }).text('clear').on('click', function () {
    var $logo = $('.brand-link');
    logo_skins.map(function (skin) {
      $logo.removeClass(skin);
    });
  });
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color');
    var $logo = $('.brand-link');
    logo_skins.map(function (skin) {
      $logo.removeClass(skin);
    });
    $logo.addClass(color);
  }).append($clear_btn));

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    });
    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (_typeof(color) === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2'
      });
      $block.append($color);
      $color.data('color', color);
      $color.css({
        width: '40px',
        height: '20px',
        borderRadius: '25px',
        marginRight: 10,
        marginBottom: 10,
        opacity: 0.8,
        cursor: 'pointer'
      });
      $color.hover(function () {
        $(this).css({
          opacity: 1
        }).removeClass('elevation-2').addClass('elevation-4');
      }, function () {
        $(this).css({
          opacity: 0.8
        }).removeClass('elevation-4').addClass('elevation-2');
      });

      if (callback) {
        $color.on('click', callback);
      }
    });
    return $block;
  }

  $('.product-image-thumb').on('click', function () {
    var image_element = $(this).find('img');
    $('.product-image').prop('src', $(image_element).attr('src'));
    $('.product-image-thumb.active').removeClass('active');
    $(this).addClass('active');
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/backend/manage_operation.js":
/*!**************************************************!*\
  !*** ./resources/js/backend/manage_operation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! axios */ "./node_modules/axios/index.js"),
    axios = _require["default"];

function popupCenter(url, title, w, h) {
  // Fixes dual-screen position Most browsers      Firefox
  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  var systemZoom = width / window.screen.availWidth;
  var left = (width - w) / 2 / systemZoom + dualScreenLeft;
  var top = (height - h) / 2 / systemZoom + dualScreenTop;
  var newWindow = window.open(url, title, "scrollbars=yes, width=".concat(w / systemZoom, ", height=").concat(h / systemZoom, ", top=").concat(top, ",left=").concat(left));
  if (window.focus) newWindow.focus();
}

function swal_alert(alert_icon, msg) {
  Swal.fire({
    icon: alert_icon,
    text: msg
  });
}

$(document).ready(function () {
  $('.table_id').DataTable({
    // scrollY: "300px",
    // scrollX: true,
    // scrollCollapse: true,
    // paging: false,
    // order:[['0', "desc"]],
    ordering: false,
    columnDefs: [{
      targets: 0
    }],
    fixedColumns: true,
    dom: 'Bfrtip',
    buttons: ['colvis', 'csv', 'pdf']
  });
});

(function ($) {
  $("body").on("change", ".status-change", function () {
    var selector = $(this).val();
    var trId = $(this).data('key');
    var route = $('#status_update').val();
    Swal.fire({
      icon: "warning",
      text: "Do you really want to change status?",
      showCancelButton: true,
      confirmButtonText: "Confirm"
    }).then(function (result) {
      console.log(result);

      if (result.isConfirmed != false) {
        $.ajax({
          type: "POST",
          url: route,
          data: {
            'id': trId,
            'status': selector,
            '_token': $('meta[name=csrf-token]').attr('content')
          },
          success: function success(response) {
            Swal.fire({
              icon: "success",
              text: "Status changed successfully"
            }).then(function (result) {
              window.location.reload();
            });
          },
          error: function error(data) {
            console.log(data);
          }
        });
      }
    });
  }).on("click", ".qr_code", function () {
    var url = $(this).data('key');
    var qrmodal = $("#qruCodeModal");
    axios.post('/admin/manage-url-qrcode', {
      data: url
    }).then(function (response) {
      qrmodal.find('.modal-body').html(response.data);
      qrmodal.modal('show');
    })["catch"](function (error) {
      console.log(error);
    }).then(function () {});
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
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/backend/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMvanMvYmFja2VuZC9hZG1pbkx0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvZGVtby5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9tYW5hZ2Vfb3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wbHVnaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBZG1pbkxURSB2My4wLjUgKGh0dHBzOi8vYWRtaW5sdGUuaW8pXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIwIENvbG9ybGliIDxodHRwOi8vY29sb3JsaWIuY29tPlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vQ29sb3JsaWJIUS9BZG1pbkxURS9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuYWRtaW5sdGUgPSB7fSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBDb250cm9sU2lkZWJhci5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIENvbnRyb2xTaWRlYmFyID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdGFudHNcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnQ29udHJvbFNpZGViYXInO1xuICAgIHZhciBEQVRBX0tFWSA9ICdsdGUuY29udHJvbHNpZGViYXInO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIENPTExBUFNFRDogXCJjb2xsYXBzZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIEVYUEFOREVEOiBcImV4cGFuZGVkXCIgKyBFVkVOVF9LRVlcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIENPTlRST0xfU0lERUJBUjogJy5jb250cm9sLXNpZGViYXInLFxuICAgICAgQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQ6ICcuY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnLFxuICAgICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nLFxuICAgICAgQ09OVEVOVDogJy5jb250ZW50LXdyYXBwZXInLFxuICAgICAgSEVBREVSOiAnLm1haW4taGVhZGVyJyxcbiAgICAgIEZPT1RFUjogJy5tYWluLWZvb3RlcidcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBDT05UUk9MX1NJREVCQVJfQU5JTUFURTogJ2NvbnRyb2wtc2lkZWJhci1hbmltYXRlJyxcbiAgICAgIENPTlRST0xfU0lERUJBUl9PUEVOOiAnY29udHJvbC1zaWRlYmFyLW9wZW4nLFxuICAgICAgQ09OVFJPTF9TSURFQkFSX1NMSURFOiAnY29udHJvbC1zaWRlYmFyLXNsaWRlLW9wZW4nLFxuICAgICAgTEFZT1VUX0ZJWEVEOiAnbGF5b3V0LWZpeGVkJyxcbiAgICAgIE5BVkJBUl9GSVhFRDogJ2xheW91dC1uYXZiYXItZml4ZWQnLFxuICAgICAgTkFWQkFSX1NNX0ZJWEVEOiAnbGF5b3V0LXNtLW5hdmJhci1maXhlZCcsXG4gICAgICBOQVZCQVJfTURfRklYRUQ6ICdsYXlvdXQtbWQtbmF2YmFyLWZpeGVkJyxcbiAgICAgIE5BVkJBUl9MR19GSVhFRDogJ2xheW91dC1sZy1uYXZiYXItZml4ZWQnLFxuICAgICAgTkFWQkFSX1hMX0ZJWEVEOiAnbGF5b3V0LXhsLW5hdmJhci1maXhlZCcsXG4gICAgICBGT09URVJfRklYRUQ6ICdsYXlvdXQtZm9vdGVyLWZpeGVkJyxcbiAgICAgIEZPT1RFUl9TTV9GSVhFRDogJ2xheW91dC1zbS1mb290ZXItZml4ZWQnLFxuICAgICAgRk9PVEVSX01EX0ZJWEVEOiAnbGF5b3V0LW1kLWZvb3Rlci1maXhlZCcsXG4gICAgICBGT09URVJfTEdfRklYRUQ6ICdsYXlvdXQtbGctZm9vdGVyLWZpeGVkJyxcbiAgICAgIEZPT1RFUl9YTF9GSVhFRDogJ2xheW91dC14bC1mb290ZXItZml4ZWQnXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIGNvbnRyb2xzaWRlYmFyU2xpZGU6IHRydWUsXG4gICAgICBzY3JvbGxiYXJUaGVtZTogJ29zLXRoZW1lLWxpZ2h0JyxcbiAgICAgIHNjcm9sbGJhckF1dG9IaWRlOiAnbCdcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICB2YXIgQ29udHJvbFNpZGViYXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gQ29udHJvbFNpZGViYXIoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgfSAvLyBQdWJsaWNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gQ29udHJvbFNpZGViYXIucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uY29sbGFwc2UgPSBmdW5jdGlvbiBjb2xsYXBzZSgpIHtcbiAgICAgICAgLy8gU2hvdyB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuY29udHJvbHNpZGViYXJTbGlkZSkge1xuICAgICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpO1xuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKTtcbiAgICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbGxhcHNlZEV2ZW50ID0gJC5FdmVudChFdmVudC5DT0xMQVBTRUQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoY29sbGFwc2VkRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgICAvLyBDb2xsYXBzZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuY29udHJvbHNpZGViYXJTbGlkZSkge1xuICAgICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5zaG93KCkuZGVsYXkoMTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfQU5JTUFURSk7XG4gICAgICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9PUEVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHBhbmRlZEV2ZW50ID0gJC5FdmVudChFdmVudC5FWFBBTkRFRCk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihleHBhbmRlZEV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIHZhciBzaG91bGRDbG9zZSA9ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFKTtcblxuICAgICAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcbiAgICAgICAgICAvLyBDbG9zZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE9wZW4gdGhlIGNvbnRyb2wgc2lkZWJhclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fZml4SGVpZ2h0KCk7XG5cbiAgICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuX2ZpeEhlaWdodCgpO1xuXG4gICAgICAgICAgX3RoaXMuX2ZpeFNjcm9sbEhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFKSkge1xuICAgICAgICAgICAgX3RoaXMuX2ZpeFNjcm9sbEhlaWdodCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2ZpeFNjcm9sbEhlaWdodCA9IGZ1bmN0aW9uIF9maXhTY3JvbGxIZWlnaHQoKSB7XG4gICAgICAgIHZhciBoZWlnaHRzID0ge1xuICAgICAgICAgIHNjcm9sbDogJChkb2N1bWVudCkuaGVpZ2h0KCksXG4gICAgICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICAgICAgaGVhZGVyOiAkKFNlbGVjdG9yLkhFQURFUikub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICBmb290ZXI6ICQoU2VsZWN0b3IuRk9PVEVSKS5vdXRlckhlaWdodCgpXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSB7XG4gICAgICAgICAgYm90dG9tOiBNYXRoLmFicyhoZWlnaHRzLndpbmRvdyArICQod2luZG93KS5zY3JvbGxUb3AoKSAtIGhlaWdodHMuc2Nyb2xsKSxcbiAgICAgICAgICB0b3A6ICQod2luZG93KS5zY3JvbGxUb3AoKVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbmF2YmFyRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZvb3RlckZpeGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLk5BVkJBUl9GSVhFRCkgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5OQVZCQVJfU01fRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX01EX0ZJWEVEKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLk5BVkJBUl9MR19GSVhFRCkgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5OQVZCQVJfWExfRklYRUQpKSB7XG4gICAgICAgICAgICBpZiAoJChTZWxlY3Rvci5IRUFERVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgICAgbmF2YmFyRml4ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZPT1RFUl9GSVhFRCkgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5GT09URVJfU01fRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX01EX0ZJWEVEKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZPT1RFUl9MR19GSVhFRCkgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5GT09URVJfWExfRklYRUQpKSB7XG4gICAgICAgICAgICBpZiAoJChTZWxlY3Rvci5GT09URVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgICAgZm9vdGVyRml4ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwb3NpdGlvbnMudG9wID09PSAwICYmIHBvc2l0aW9ucy5ib3R0b20gPT09IDApIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ2JvdHRvbScsIGhlaWdodHMuZm9vdGVyKTtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJywgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuaGVhZGVyICsgaGVpZ2h0cy5mb290ZXIpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aW9ucy5ib3R0b20gPD0gaGVpZ2h0cy5mb290ZXIpIHtcbiAgICAgICAgICAgIGlmIChmb290ZXJGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKTtcbiAgICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnLCAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCdib3R0b20nLCBoZWlnaHRzLmZvb3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMudG9wIDw9IGhlaWdodHMuaGVhZGVyKSB7XG4gICAgICAgICAgICBpZiAobmF2YmFyRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcCk7XG4gICAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJywgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobmF2YmFyRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIDApO1xuICAgICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCd0b3AnLCBoZWlnaHRzLmhlYWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2ZpeEhlaWdodCA9IGZ1bmN0aW9uIF9maXhIZWlnaHQoKSB7XG4gICAgICAgIHZhciBoZWlnaHRzID0ge1xuICAgICAgICAgIHdpbmRvdzogJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICAgIGhlYWRlcjogJChTZWxlY3Rvci5IRUFERVIpLm91dGVySGVpZ2h0KCksXG4gICAgICAgICAgZm9vdGVyOiAkKFNlbGVjdG9yLkZPT1RFUikub3V0ZXJIZWlnaHQoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkxBWU9VVF9GSVhFRCkpIHtcbiAgICAgICAgICB2YXIgc2lkZWJhckhlaWdodCA9IGhlaWdodHMud2luZG93IC0gaGVpZ2h0cy5oZWFkZXI7XG5cbiAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5GT09URVJfRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1NNX0ZJWEVEKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZPT1RFUl9NRF9GSVhFRCkgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5GT09URVJfTEdfRklYRUQpIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1hMX0ZJWEVEKSkge1xuICAgICAgICAgICAgaWYgKCQoU2VsZWN0b3IuRk9PVEVSKS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgIHNpZGViYXJIZWlnaHQgPSBoZWlnaHRzLndpbmRvdyAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBzaWRlYmFySGVpZ2h0KTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5vdmVybGF5U2Nyb2xsYmFycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyVGhlbWUsXG4gICAgICAgICAgICAgIHNpemVBdXRvQ2FwYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyczoge1xuICAgICAgICAgICAgICAgIGF1dG9IaWRlOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsXG4gICAgICAgICAgICAgICAgY2xpY2tTY3JvbGxpbmc6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgdmFyIF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBDb250cm9sU2lkZWJhcih0aGlzLCBfb3B0aW9ucyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkYXRhW29wZXJhdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iob3BlcmF0aW9uICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YVtvcGVyYXRpb25dKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRyb2xTaWRlYmFyO1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIGpRdWVyeSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29udHJvbFNpZGViYXI7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBDb250cm9sU2lkZWJhcjtcbiAgfShqUXVlcnkpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBMYXlvdXQuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciBMYXlvdXQgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0YW50c1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdMYXlvdXQnO1xuICAgIHZhciBEQVRBX0tFWSA9ICdsdGUubGF5b3V0JztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBIRUFERVI6ICcubWFpbi1oZWFkZXInLFxuICAgICAgTUFJTl9TSURFQkFSOiAnLm1haW4tc2lkZWJhcicsXG4gICAgICBTSURFQkFSOiAnLm1haW4tc2lkZWJhciAuc2lkZWJhcicsXG4gICAgICBDT05URU5UOiAnLmNvbnRlbnQtd3JhcHBlcicsXG4gICAgICBCUkFORDogJy5icmFuZC1saW5rJyxcbiAgICAgIENPTlRFTlRfSEVBREVSOiAnLmNvbnRlbnQtaGVhZGVyJyxcbiAgICAgIFdSQVBQRVI6ICcud3JhcHBlcicsXG4gICAgICBDT05UUk9MX1NJREVCQVI6ICcuY29udHJvbC1zaWRlYmFyJyxcbiAgICAgIENPTlRST0xfU0lERUJBUl9DT05URU5UOiAnLmNvbnRyb2wtc2lkZWJhci1jb250ZW50JyxcbiAgICAgIENPTlRST0xfU0lERUJBUl9CVE46ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nLFxuICAgICAgTEFZT1VUX0ZJWEVEOiAnLmxheW91dC1maXhlZCcsXG4gICAgICBGT09URVI6ICcubWFpbi1mb290ZXInLFxuICAgICAgUFVTSE1FTlVfQlROOiAnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nLFxuICAgICAgTE9HSU5fQk9YOiAnLmxvZ2luLWJveCcsXG4gICAgICBSRUdJU1RFUl9CT1g6ICcucmVnaXN0ZXItYm94J1xuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIEhPTEQ6ICdob2xkLXRyYW5zaXRpb24nLFxuICAgICAgU0lERUJBUjogJ21haW4tc2lkZWJhcicsXG4gICAgICBDT05URU5UX0ZJWEVEOiAnY29udGVudC1maXhlZCcsXG4gICAgICBTSURFQkFSX0ZPQ1VTRUQ6ICdzaWRlYmFyLWZvY3VzZWQnLFxuICAgICAgTEFZT1VUX0ZJWEVEOiAnbGF5b3V0LWZpeGVkJyxcbiAgICAgIE5BVkJBUl9GSVhFRDogJ2xheW91dC1uYXZiYXItZml4ZWQnLFxuICAgICAgRk9PVEVSX0ZJWEVEOiAnbGF5b3V0LWZvb3Rlci1maXhlZCcsXG4gICAgICBMT0dJTl9QQUdFOiAnbG9naW4tcGFnZScsXG4gICAgICBSRUdJU1RFUl9QQUdFOiAncmVnaXN0ZXItcGFnZScsXG4gICAgICBDT05UUk9MX1NJREVCQVJfU0xJREVfT1BFTjogJ2NvbnRyb2wtc2lkZWJhci1zbGlkZS1vcGVuJyxcbiAgICAgIENPTlRST0xfU0lERUJBUl9PUEVOOiAnY29udHJvbC1zaWRlYmFyLW9wZW4nXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIHNjcm9sbGJhclRoZW1lOiAnb3MtdGhlbWUtbGlnaHQnLFxuICAgICAgc2Nyb2xsYmFyQXV0b0hpZGU6ICdsJyxcbiAgICAgIHBhbmVsQXV0b0hlaWdodDogdHJ1ZSxcbiAgICAgIGxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0OiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgdmFyIExheW91dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBMYXlvdXQoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgfSAvLyBQdWJsaWNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gTGF5b3V0LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmZpeExheW91dEhlaWdodCA9IGZ1bmN0aW9uIGZpeExheW91dEhlaWdodChleHRyYSkge1xuICAgICAgICBpZiAoZXh0cmEgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGV4dHJhID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250cm9sX3NpZGViYXIgPSAwO1xuXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERV9PUEVOKSB8fCAkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9PUEVOKSB8fCBleHRyYSA9PSAnY29udHJvbF9zaWRlYmFyJykge1xuICAgICAgICAgIGNvbnRyb2xfc2lkZWJhciA9ICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmhlaWdodCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhlaWdodHMgPSB7XG4gICAgICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICAgICAgaGVhZGVyOiAkKFNlbGVjdG9yLkhFQURFUikubGVuZ3RoICE9PSAwID8gJChTZWxlY3Rvci5IRUFERVIpLm91dGVySGVpZ2h0KCkgOiAwLFxuICAgICAgICAgIGZvb3RlcjogJChTZWxlY3Rvci5GT09URVIpLmxlbmd0aCAhPT0gMCA/ICQoU2VsZWN0b3IuRk9PVEVSKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgICAgICBzaWRlYmFyOiAkKFNlbGVjdG9yLlNJREVCQVIpLmxlbmd0aCAhPT0gMCA/ICQoU2VsZWN0b3IuU0lERUJBUikuaGVpZ2h0KCkgOiAwLFxuICAgICAgICAgIGNvbnRyb2xfc2lkZWJhcjogY29udHJvbF9zaWRlYmFyXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG1heCA9IHRoaXMuX21heChoZWlnaHRzKTtcblxuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodDtcblxuICAgICAgICBpZiAob2Zmc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKG1heCA9PSBoZWlnaHRzLmNvbnRyb2xfc2lkZWJhcikge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnLCBtYXggKyBvZmZzZXQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWF4ID09IGhlaWdodHMud2luZG93KSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIG1heCArIG9mZnNldCAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIG1heCArIG9mZnNldCAtIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5faXNGb290ZXJGaXhlZCgpKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIHBhcnNlRmxvYXQoJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnKSkgKyBoZWlnaHRzLmZvb3Rlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICAgIGlmIChvZmZzZXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIG1heCArIG9mZnNldCAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5vdmVybGF5U2Nyb2xsYmFycyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuU0lERUJBUikub3ZlcmxheVNjcm9sbGJhcnMoe1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJUaGVtZSxcbiAgICAgICAgICAgICAgc2l6ZUF1dG9DYXBhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzY3JvbGxiYXJzOiB7XG4gICAgICAgICAgICAgICAgYXV0b0hpZGU6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJBdXRvSGlkZSxcbiAgICAgICAgICAgICAgICBjbGlja1Njcm9sbGluZzogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5maXhMb2dpblJlZ2lzdGVySGVpZ2h0ID0gZnVuY3Rpb24gZml4TG9naW5SZWdpc3RlckhlaWdodCgpIHtcbiAgICAgICAgaWYgKCQoU2VsZWN0b3IuTE9HSU5fQk9YICsgJywgJyArIFNlbGVjdG9yLlJFR0lTVEVSX0JPWCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJCgnYm9keSwgaHRtbCcpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgICAgfSBlbHNlIGlmICgkKFNlbGVjdG9yLkxPR0lOX0JPWCArICcsICcgKyBTZWxlY3Rvci5SRUdJU1RFUl9CT1gpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHZhciBib3hfaGVpZ2h0ID0gJChTZWxlY3Rvci5MT0dJTl9CT1ggKyAnLCAnICsgU2VsZWN0b3IuUkVHSVNURVJfQk9YKS5oZWlnaHQoKTtcblxuICAgICAgICAgIGlmICgkKCdib2R5JykuY3NzKCdtaW4taGVpZ2h0JykgIT09IGJveF9oZWlnaHQpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ21pbi1oZWlnaHQnLCBib3hfaGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX2luaXQgPSBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBBY3RpdmF0ZSBsYXlvdXQgaGVpZ2h0IHdhdGNoZXJcbiAgICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0ID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5maXhMb2dpblJlZ2lzdGVySGVpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQpKSB7XG4gICAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5maXhMb2dpblJlZ2lzdGVySGVpZ2h0LCB0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChTZWxlY3Rvci5TSURFQkFSKS5vbignY29sbGFwc2VkLmx0ZS50cmVldmlldyBleHBhbmRlZC5sdGUudHJlZXZpZXcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFNlbGVjdG9yLlBVU0hNRU5VX0JUTikub24oJ2NvbGxhcHNlZC5sdGUucHVzaG1lbnUgc2hvd24ubHRlLnB1c2htZW51JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmZpeExheW91dEhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQlROKS5vbignY29sbGFwc2VkLmx0ZS5jb250cm9sc2lkZWJhcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5maXhMYXlvdXRIZWlnaHQoKTtcbiAgICAgICAgfSkub24oJ2V4cGFuZGVkLmx0ZS5jb250cm9sc2lkZWJhcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5maXhMYXlvdXRIZWlnaHQoJ2NvbnRyb2xfc2lkZWJhcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuZml4TGF5b3V0SGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKCdib2R5LmhvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKCdob2xkLXRyYW5zaXRpb24nKTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9tYXggPSBmdW5jdGlvbiBfbWF4KG51bWJlcnMpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtYXhpbXVtIG51bWJlciBpbiBhIGxpc3RcbiAgICAgICAgdmFyIG1heCA9IDA7XG4gICAgICAgIE9iamVjdC5rZXlzKG51bWJlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmIChudW1iZXJzW2tleV0gPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IG51bWJlcnNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9pc0Zvb3RlckZpeGVkID0gZnVuY3Rpb24gX2lzRm9vdGVyRml4ZWQoKSB7XG4gICAgICAgIHJldHVybiAkKCcubWFpbi1mb290ZXInKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCc7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBMYXlvdXQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbmZpZyA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgdmFyIF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBMYXlvdXQoJCh0aGlzKSwgX29wdGlvbnMpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcgfHwgY29uZmlnID09PSAnJykge1xuICAgICAgICAgICAgZGF0YVsnX2luaXQnXSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnID09PSAnZml4TGF5b3V0SGVpZ2h0JyB8fCBjb25maWcgPT09ICdmaXhMb2dpblJlZ2lzdGVySGVpZ2h0Jykge1xuICAgICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBMYXlvdXQ7XG4gICAgfSgpO1xuICAgIC8qKlxuICAgICAqIERhdGEgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBMYXlvdXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoJ2JvZHknKSk7XG4gICAgfSk7XG4gICAgJChTZWxlY3Rvci5TSURFQkFSICsgJyBhJykub24oJ2ZvY3VzaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFNlbGVjdG9yLk1BSU5fU0lERUJBUikuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNJREVCQVJfRk9DVVNFRCk7XG4gICAgfSk7XG4gICAgJChTZWxlY3Rvci5TSURFQkFSICsgJyBhJykub24oJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgJChTZWxlY3Rvci5NQUlOX1NJREVCQVIpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSURFQkFSX0ZPQ1VTRUQpO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIGpRdWVyeSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gTGF5b3V0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IExheW91dDtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gTGF5b3V0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBMYXlvdXQ7XG4gIH0oalF1ZXJ5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgUHVzaE1lbnUuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciBQdXNoTWVudSA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRzXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ1B1c2hNZW51JztcbiAgICB2YXIgREFUQV9LRVkgPSAnbHRlLnB1c2htZW51JztcbiAgICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDT0xMQVBTRUQ6IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVksXG4gICAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIGF1dG9Db2xsYXBzZVNpemU6IDk5MixcbiAgICAgIGVuYWJsZVJlbWVtYmVyOiBmYWxzZSxcbiAgICAgIG5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkOiB0cnVlXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBUT0dHTEVfQlVUVE9OOiAnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nLFxuICAgICAgU0lERUJBUl9NSU5JOiAnLnNpZGViYXItbWluaScsXG4gICAgICBTSURFQkFSX0NPTExBUFNFRDogJy5zaWRlYmFyLWNvbGxhcHNlJyxcbiAgICAgIEJPRFk6ICdib2R5JyxcbiAgICAgIE9WRVJMQVk6ICcjc2lkZWJhci1vdmVybGF5JyxcbiAgICAgIFdSQVBQRVI6ICcud3JhcHBlcidcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBDT0xMQVBTRUQ6ICdzaWRlYmFyLWNvbGxhcHNlJyxcbiAgICAgIE9QRU46ICdzaWRlYmFyLW9wZW4nLFxuICAgICAgQ0xPU0VEOiAnc2lkZWJhci1jbG9zZWQnXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgdmFyIFB1c2hNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFB1c2hNZW51KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKCEkKFNlbGVjdG9yLk9WRVJMQVkpLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2FkZE92ZXJsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgIH0gLy8gUHVibGljXG5cblxuICAgICAgdmFyIF9wcm90byA9IFB1c2hNZW51LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmV4cGFuZCA9IGZ1bmN0aW9uIGV4cGFuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSB0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoU2VsZWN0b3IuQk9EWSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNMT1NFRCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlbWVtYmVyXCIgKyBFVkVOVF9LRVksIENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTik7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb2xsYXBzZSA9IGZ1bmN0aW9uIGNvbGxhcHNlKCkge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNMT1NFRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJChTZWxlY3Rvci5CT0RZKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKTtcblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVSZW1lbWJlcikge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVtZW1iZXJcIiArIEVWRU5UX0tFWSwgQ2xhc3NOYW1lLkNPTExBUFNFRCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29sbGFwc2VkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNPTExBUFNFRCk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgICAgICBpZiAoISQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkpIHtcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5leHBhbmQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmF1dG9Db2xsYXBzZSA9IGZ1bmN0aW9uIGF1dG9Db2xsYXBzZShyZXNpemUpIHtcbiAgICAgICAgaWYgKHJlc2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmVzaXplID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgICAgaWYgKCEkKFNlbGVjdG9yLkJPRFkpLmhhc0NsYXNzKENsYXNzTmFtZS5PUEVOKSkge1xuICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNpemUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pKSB7XG4gICAgICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkKFNlbGVjdG9yLkJPRFkpLmhhc0NsYXNzKENsYXNzTmFtZS5DTE9TRUQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVtZW1iZXIgPSBmdW5jdGlvbiByZW1lbWJlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgICB2YXIgdG9nZ2xlU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlbWVtYmVyXCIgKyBFVkVOVF9LRVkpO1xuXG4gICAgICAgICAgaWYgKHRvZ2dsZVN0YXRlID09IENsYXNzTmFtZS5DT0xMQVBTRUQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkKSB7XG4gICAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKCdob2xkLXRyYW5zaXRpb24nKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcygnaG9sZC10cmFuc2l0aW9uJykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkuZGVsYXkoNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob2xkLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX2luaXQgPSBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlbWVtYmVyKCk7XG4gICAgICAgIHRoaXMuYXV0b0NvbGxhcHNlKCk7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmF1dG9Db2xsYXBzZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZE92ZXJsYXkgPSBmdW5jdGlvbiBfYWRkT3ZlcmxheSgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG92ZXJsYXkgPSAkKCc8ZGl2IC8+Jywge1xuICAgICAgICAgIGlkOiAnc2lkZWJhci1vdmVybGF5J1xuICAgICAgICB9KTtcbiAgICAgICAgb3ZlcmxheS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmNvbGxhcHNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFNlbGVjdG9yLldSQVBQRVIpLmFwcGVuZChvdmVybGF5KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICB2YXIgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IFB1c2hNZW51KHRoaXMsIF9vcHRpb25zKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBvcGVyYXRpb24gPT09ICdzdHJpbmcnICYmIG9wZXJhdGlvbi5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHRvZ2dsZS8pKSB7XG4gICAgICAgICAgICBkYXRhW29wZXJhdGlvbl0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFB1c2hNZW51O1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKiBEYXRhIEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuVE9HR0xFX0JVVFRPTiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgIGlmICgkKGJ1dHRvbikuZGF0YSgnd2lkZ2V0JykgIT09ICdwdXNobWVudScpIHtcbiAgICAgICAgYnV0dG9uID0gJChidXR0b24pLmNsb3Nlc3QoU2VsZWN0b3IuVE9HR0xFX0JVVFRPTik7XG4gICAgICB9XG5cbiAgICAgIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKTtcbiAgICB9KTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTZWxlY3Rvci5UT0dHTEVfQlVUVE9OKSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogalF1ZXJ5IEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBQdXNoTWVudTtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFB1c2hNZW51O1xuICB9KGpRdWVyeSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIFRyZWV2aWV3LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgVHJlZXZpZXcgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0YW50c1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdUcmVldmlldyc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2x0ZS50cmVldmlldyc7XG4gICAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgU0VMRUNURUQ6IFwic2VsZWN0ZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIEVYUEFOREVEOiBcImV4cGFuZGVkXCIgKyBFVkVOVF9LRVksXG4gICAgICBDT0xMQVBTRUQ6IFwiY29sbGFwc2VkXCIgKyBFVkVOVF9LRVksXG4gICAgICBMT0FEX0RBVEFfQVBJOiBcImxvYWRcIiArIEVWRU5UX0tFWVxuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgTEk6ICcubmF2LWl0ZW0nLFxuICAgICAgTElOSzogJy5uYXYtbGluaycsXG4gICAgICBUUkVFVklFV19NRU5VOiAnLm5hdi10cmVldmlldycsXG4gICAgICBPUEVOOiAnLm1lbnUtb3BlbicsXG4gICAgICBEQVRBX1dJREdFVDogJ1tkYXRhLXdpZGdldD1cInRyZWV2aWV3XCJdJ1xuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIExJOiAnbmF2LWl0ZW0nLFxuICAgICAgTElOSzogJ25hdi1saW5rJyxcbiAgICAgIFRSRUVWSUVXX01FTlU6ICduYXYtdHJlZXZpZXcnLFxuICAgICAgT1BFTjogJ21lbnUtb3BlbicsXG4gICAgICBTSURFQkFSX0NPTExBUFNFRDogJ3NpZGViYXItY29sbGFwc2UnXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIHRyaWdnZXI6IFNlbGVjdG9yLkRBVEFfV0lER0VUICsgXCIgXCIgKyBTZWxlY3Rvci5MSU5LLFxuICAgICAgYW5pbWF0aW9uU3BlZWQ6IDMwMCxcbiAgICAgIGFjY29yZGlvbjogdHJ1ZSxcbiAgICAgIGV4cGFuZFNpZGViYXI6IGZhbHNlLFxuICAgICAgc2lkZWJhckJ1dHRvblNlbGVjdG9yOiAnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgdmFyIFRyZWV2aWV3ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFRyZWV2aWV3KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgfSAvLyBQdWJsaWNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gVHJlZXZpZXcucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX3NldHVwTGlzdGVuZXJzKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uZXhwYW5kID0gZnVuY3Rpb24gZXhwYW5kKHRyZWV2aWV3TWVudSwgcGFyZW50TGkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgZXhwYW5kZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuRVhQQU5ERUQpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgdmFyIG9wZW5NZW51TGkgPSBwYXJlbnRMaS5zaWJsaW5ncyhTZWxlY3Rvci5PUEVOKS5maXJzdCgpO1xuICAgICAgICAgIHZhciBvcGVuVHJlZXZpZXcgPSBvcGVuTWVudUxpLmZpbmQoU2VsZWN0b3IuVFJFRVZJRVdfTUVOVSkuZmlyc3QoKTtcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlKG9wZW5UcmVldmlldywgb3Blbk1lbnVMaSk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmVldmlld01lbnUuc3RvcCgpLnNsaWRlRG93bih0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwYXJlbnRMaS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICAgJChfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihleHBhbmRlZEV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5leHBhbmRTaWRlYmFyKSB7XG4gICAgICAgICAgdGhpcy5fZXhwYW5kU2lkZWJhcigpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29sbGFwc2UgPSBmdW5jdGlvbiBjb2xsYXBzZSh0cmVldmlld01lbnUsIHBhcmVudExpKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjb2xsYXBzZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ09MTEFQU0VEKTtcbiAgICAgICAgdHJlZXZpZXdNZW51LnN0b3AoKS5zbGlkZVVwKHRoaXMuX2NvbmZpZy5hbmltYXRpb25TcGVlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBhcmVudExpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgICAkKF90aGlzMi5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudCk7XG4gICAgICAgICAgdHJlZXZpZXdNZW51LmZpbmQoU2VsZWN0b3IuT1BFTiArIFwiID4gXCIgKyBTZWxlY3Rvci5UUkVFVklFV19NRU5VKS5zbGlkZVVwKCk7XG4gICAgICAgICAgdHJlZXZpZXdNZW51LmZpbmQoU2VsZWN0b3IuT1BFTikucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZXZlbnQpIHtcbiAgICAgICAgdmFyICRyZWxhdGl2ZVRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIHZhciAkcGFyZW50ID0gJHJlbGF0aXZlVGFyZ2V0LnBhcmVudCgpO1xuICAgICAgICB2YXIgdHJlZXZpZXdNZW51ID0gJHBhcmVudC5maW5kKCc+ICcgKyBTZWxlY3Rvci5UUkVFVklFV19NRU5VKTtcblxuICAgICAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTZWxlY3Rvci5UUkVFVklFV19NRU5VKSkge1xuICAgICAgICAgIGlmICghJHBhcmVudC5pcyhTZWxlY3Rvci5MSSkpIHtcbiAgICAgICAgICAgIHRyZWV2aWV3TWVudSA9ICRwYXJlbnQucGFyZW50KCkuZmluZCgnPiAnICsgU2VsZWN0b3IuVFJFRVZJRVdfTUVOVSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF0cmVldmlld01lbnUuaXMoU2VsZWN0b3IuVFJFRVZJRVdfTUVOVSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgcGFyZW50TGkgPSAkcmVsYXRpdmVUYXJnZXQucGFyZW50cyhTZWxlY3Rvci5MSSkuZmlyc3QoKTtcbiAgICAgICAgdmFyIGlzT3BlbiA9IHBhcmVudExpLmhhc0NsYXNzKENsYXNzTmFtZS5PUEVOKTtcblxuICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZSgkKHRyZWV2aWV3TWVudSksIHBhcmVudExpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmV4cGFuZCgkKHRyZWV2aWV3TWVudSksIHBhcmVudExpKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBQcml2YXRlXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5fc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0dXBMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuX2NvbmZpZy50cmlnZ2VyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpczMudG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2V4cGFuZFNpZGViYXIgPSBmdW5jdGlvbiBfZXhwYW5kU2lkZWJhcigpIHtcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9DT0xMQVBTRUQpKSB7XG4gICAgICAgICAgJCh0aGlzLl9jb25maWcuc2lkZWJhckJ1dHRvblNlbGVjdG9yKS5QdXNoTWVudSgnZXhwYW5kJyk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICB2YXIgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IFRyZWV2aWV3KCQodGhpcyksIF9vcHRpb25zKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2luaXQnKSB7XG4gICAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFRyZWV2aWV3O1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKiBEYXRhIEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoU2VsZWN0b3IuREFUQV9XSURHRVQpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2luaXQnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIGpRdWVyeSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gVHJlZXZpZXcuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVHJlZXZpZXc7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBUcmVldmlldztcbiAgfShqUXVlcnkpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBEaXJlY3RDaGF0LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgRGlyZWN0Q2hhdCA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRzXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ0RpcmVjdENoYXQnO1xuICAgIHZhciBEQVRBX0tFWSA9ICdsdGUuZGlyZWN0Y2hhdCc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgVE9HR0xFRDogXCJ0b2dnbGVke0VWRU5UX0tFWX1cIlxuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJjaGF0LXBhbmUtdG9nZ2xlXCJdJyxcbiAgICAgIERJUkVDVF9DSEFUOiAnLmRpcmVjdC1jaGF0J1xuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIERJUkVDVF9DSEFUX09QRU46ICdkaXJlY3QtY2hhdC1jb250YWN0cy1vcGVuJ1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIHZhciBEaXJlY3RDaGF0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIERpcmVjdENoYXQoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gRGlyZWN0Q2hhdC5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkucGFyZW50cyhTZWxlY3Rvci5ESVJFQ1RfQ0hBVCkuZmlyc3QoKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuRElSRUNUX0NIQVRfT1BFTik7XG4gICAgICAgIHZhciB0b2dnbGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlRPR0dMRUQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIodG9nZ2xlZEV2ZW50KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBEaXJlY3RDaGF0KCQodGhpcykpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gRGlyZWN0Q2hhdDtcbiAgICB9KCk7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJyk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogalF1ZXJ5IEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERpcmVjdENoYXQ7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERpcmVjdENoYXQ7XG4gIH0oalF1ZXJ5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgVG9kb0xpc3QuanNcbiAgICogTGljZW5zZSBNSVRcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciBUb2RvTGlzdCA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRzXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ1RvZG9MaXN0JztcbiAgICB2YXIgREFUQV9LRVkgPSAnbHRlLnRvZG9saXN0JztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXdpZGdldD1cInRvZG8tbGlzdFwiXSdcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBUT0RPX0xJU1RfRE9ORTogJ2RvbmUnXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIG9uQ2hlY2s6IGZ1bmN0aW9uIG9uQ2hlY2soaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0sXG4gICAgICBvblVuQ2hlY2s6IGZ1bmN0aW9uIG9uVW5DaGVjayhpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIHZhciBUb2RvTGlzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBUb2RvTGlzdChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgICB9IC8vIFB1YmxpY1xuXG5cbiAgICAgIHZhciBfcHJvdG8gPSBUb2RvTGlzdC5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoaXRlbSkge1xuICAgICAgICBpdGVtLnBhcmVudHMoJ2xpJykudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlRPRE9fTElTVF9ET05FKTtcblxuICAgICAgICBpZiAoISQoaXRlbSkucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgdGhpcy51bkNoZWNrKCQoaXRlbSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2soaXRlbSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhpdGVtKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5vbkNoZWNrLmNhbGwoaXRlbSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8udW5DaGVjayA9IGZ1bmN0aW9uIHVuQ2hlY2soaXRlbSkge1xuICAgICAgICB0aGlzLl9jb25maWcub25VbkNoZWNrLmNhbGwoaXRlbSk7XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9pbml0ID0gZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgJChTZWxlY3Rvci5EQVRBX1RPR0dMRSkuZmluZCgnaW5wdXQ6Y2hlY2tib3g6Y2hlY2tlZCcpLnBhcmVudHMoJ2xpJykudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlRPRE9fTElTVF9ET05FKTtcbiAgICAgICAgJChTZWxlY3Rvci5EQVRBX1RPR0dMRSkub24oJ2NoYW5nZScsICdpbnB1dDpjaGVja2JveCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHRoYXQudG9nZ2xlKCQoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIHZhciBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgVG9kb0xpc3QoJCh0aGlzKSwgX29wdGlvbnMpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gVG9kb0xpc3Q7XG4gICAgfSgpO1xuICAgIC8qKlxuICAgICAqIERhdGEgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIGpRdWVyeSBBUElcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9kb0xpc3Q7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBUb2RvTGlzdDtcbiAgfShqUXVlcnkpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBDYXJkV2lkZ2V0LmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgQ2FyZFdpZGdldCA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RhbnRzXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ0NhcmRXaWRnZXQnO1xuICAgIHZhciBEQVRBX0tFWSA9ICdsdGUuY2FyZHdpZGdldCc7XG4gICAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgRVhQQU5ERUQ6IFwiZXhwYW5kZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIENPTExBUFNFRDogXCJjb2xsYXBzZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIE1BWElNSVpFRDogXCJtYXhpbWl6ZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIE1JTklNSVpFRDogXCJtaW5pbWl6ZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIFJFTU9WRUQ6IFwicmVtb3ZlZFwiICsgRVZFTlRfS0VZXG4gICAgfTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQ0FSRDogJ2NhcmQnLFxuICAgICAgQ09MTEFQU0VEOiAnY29sbGFwc2VkLWNhcmQnLFxuICAgICAgQ09MTEFQU0lORzogJ2NvbGxhcHNpbmctY2FyZCcsXG4gICAgICBFWFBBTkRJTkc6ICdleHBhbmRpbmctY2FyZCcsXG4gICAgICBXQVNfQ09MTEFQU0VEOiAnd2FzLWNvbGxhcHNlZCcsXG4gICAgICBNQVhJTUlaRUQ6ICdtYXhpbWl6ZWQtY2FyZCdcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIERBVEFfUkVNT1ZFOiAnW2RhdGEtY2FyZC13aWRnZXQ9XCJyZW1vdmVcIl0nLFxuICAgICAgREFUQV9DT0xMQVBTRTogJ1tkYXRhLWNhcmQtd2lkZ2V0PVwiY29sbGFwc2VcIl0nLFxuICAgICAgREFUQV9NQVhJTUlaRTogJ1tkYXRhLWNhcmQtd2lkZ2V0PVwibWF4aW1pemVcIl0nLFxuICAgICAgQ0FSRDogXCIuXCIgKyBDbGFzc05hbWUuQ0FSRCxcbiAgICAgIENBUkRfSEVBREVSOiAnLmNhcmQtaGVhZGVyJyxcbiAgICAgIENBUkRfQk9EWTogJy5jYXJkLWJvZHknLFxuICAgICAgQ0FSRF9GT09URVI6ICcuY2FyZC1mb290ZXInLFxuICAgICAgQ09MTEFQU0VEOiBcIi5cIiArIENsYXNzTmFtZS5DT0xMQVBTRURcbiAgICB9O1xuICAgIHZhciBEZWZhdWx0ID0ge1xuICAgICAgYW5pbWF0aW9uU3BlZWQ6ICdub3JtYWwnLFxuICAgICAgY29sbGFwc2VUcmlnZ2VyOiBTZWxlY3Rvci5EQVRBX0NPTExBUFNFLFxuICAgICAgcmVtb3ZlVHJpZ2dlcjogU2VsZWN0b3IuREFUQV9SRU1PVkUsXG4gICAgICBtYXhpbWl6ZVRyaWdnZXI6IFNlbGVjdG9yLkRBVEFfTUFYSU1JWkUsXG4gICAgICBjb2xsYXBzZUljb246ICdmYS1taW51cycsXG4gICAgICBleHBhbmRJY29uOiAnZmEtcGx1cycsXG4gICAgICBtYXhpbWl6ZUljb246ICdmYS1leHBhbmQnLFxuICAgICAgbWluaW1pemVJY29uOiAnZmEtY29tcHJlc3MnXG4gICAgfTtcblxuICAgIHZhciBDYXJkV2lkZ2V0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIENhcmRXaWRnZXQoZWxlbWVudCwgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQucGFyZW50cyhTZWxlY3Rvci5DQVJEKS5maXJzdCgpO1xuXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKENsYXNzTmFtZS5DQVJEKSkge1xuICAgICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBzZXR0aW5ncyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBDYXJkV2lkZ2V0LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmNvbGxhcHNlID0gZnVuY3Rpb24gY29sbGFwc2UoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fcGFyZW50LmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKS5jaGlsZHJlbihTZWxlY3Rvci5DQVJEX0JPRFkgKyBcIiwgXCIgKyBTZWxlY3Rvci5DQVJEX0ZPT1RFUikuc2xpZGVVcCh0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLl9wYXJlbnQuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCgnPiAnICsgU2VsZWN0b3IuQ0FSRF9IRUFERVIgKyAnICcgKyB0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXIgKyAnIC4nICsgdGhpcy5fc2V0dGluZ3MuY29sbGFwc2VJY29uKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5leHBhbmRJY29uKS5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pO1xuXG4gICAgICAgIHZhciBjb2xsYXBzZWQgPSAkLkV2ZW50KEV2ZW50LkNPTExBUFNFRCk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKGNvbGxhcHNlZCwgdGhpcy5fcGFyZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5leHBhbmQgPSBmdW5jdGlvbiBleHBhbmQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDbGFzc05hbWUuRVhQQU5ESU5HKS5jaGlsZHJlbihTZWxlY3Rvci5DQVJEX0JPRFkgKyBcIiwgXCIgKyBTZWxlY3Rvci5DQVJEX0ZPT1RFUikuc2xpZGVEb3duKHRoaXMuX3NldHRpbmdzLmFuaW1hdGlvblNwZWVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9wYXJlbnQucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkVYUEFORElORyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3BhcmVudC5maW5kKCc+ICcgKyBTZWxlY3Rvci5DQVJEX0hFQURFUiArICcgJyArIHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlciArICcgLicgKyB0aGlzLl9zZXR0aW5ncy5leHBhbmRJY29uKS5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pO1xuXG4gICAgICAgIHZhciBleHBhbmRlZCA9ICQuRXZlbnQoRXZlbnQuRVhQQU5ERUQpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcihleHBhbmRlZCwgdGhpcy5fcGFyZW50KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5zbGlkZVVwKCk7XG5cbiAgICAgICAgdmFyIHJlbW92ZWQgPSAkLkV2ZW50KEV2ZW50LlJFTU9WRUQpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcihyZW1vdmVkLCB0aGlzLl9wYXJlbnQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5oYXNDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKSkge1xuICAgICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLm1heGltaXplID0gZnVuY3Rpb24gbWF4aW1pemUoKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlciArICcgLicgKyB0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZUljb24pLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbikucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MubWF4aW1pemVJY29uKTtcblxuICAgICAgICB0aGlzLl9wYXJlbnQuY3NzKHtcbiAgICAgICAgICAnaGVpZ2h0JzogdGhpcy5fcGFyZW50LmhlaWdodCgpLFxuICAgICAgICAgICd3aWR0aCc6IHRoaXMuX3BhcmVudC53aWR0aCgpLFxuICAgICAgICAgICd0cmFuc2l0aW9uJzogJ2FsbCAuMTVzJ1xuICAgICAgICB9KS5kZWxheSgxNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpO1xuICAgICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcyhDbGFzc05hbWUuTUFYSU1JWkVEKTtcblxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKENsYXNzTmFtZS5XQVNfQ09MTEFQU0VEKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIG1heGltaXplZCA9ICQuRXZlbnQoRXZlbnQuTUFYSU1JWkVEKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIobWF4aW1pemVkLCB0aGlzLl9wYXJlbnQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLm1pbmltaXplID0gZnVuY3Rpb24gbWluaW1pemUoKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlciArICcgLicgKyB0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbikucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MubWluaW1pemVJY29uKTtcblxuICAgICAgICB0aGlzLl9wYXJlbnQuY3NzKCdjc3NUZXh0JywgJ2hlaWdodDonICsgdGhpcy5fcGFyZW50WzBdLnN0eWxlLmhlaWdodCArICcgIWltcG9ydGFudDsnICsgJ3dpZHRoOicgKyB0aGlzLl9wYXJlbnRbMF0uc3R5bGUud2lkdGggKyAnICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246IGFsbCAuMTVzOycpLmRlbGF5KDEwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuTUFYSU1JWkVEKTtcbiAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ2hlaWdodCc6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICd3aWR0aCc6ICdpbmhlcml0J1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoQ2xhc3NOYW1lLldBU19DT0xMQVBTRUQpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5XQVNfQ09MTEFQU0VEKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIE1JTklNSVpFRCA9ICQuRXZlbnQoRXZlbnQuTUlOSU1JWkVEKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoTUlOSU1JWkVELCB0aGlzLl9wYXJlbnQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnRvZ2dsZU1heGltaXplID0gZnVuY3Rpb24gdG9nZ2xlTWF4aW1pemUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRCkpIHtcbiAgICAgICAgICB0aGlzLm1pbmltaXplKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXhpbWl6ZSgpO1xuICAgICAgfSAvLyBQcml2YXRlXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5faW5pdCA9IGZ1bmN0aW9uIF9pbml0KGNhcmQpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fcGFyZW50ID0gY2FyZDtcbiAgICAgICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy50b2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuZmluZCh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZVRyaWdnZXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMudG9nZ2xlTWF4aW1pemUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykuZmluZCh0aGlzLl9zZXR0aW5ncy5yZW1vdmVUcmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICB2YXIgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQ2FyZFdpZGdldCgkKHRoaXMpLCBfb3B0aW9ucyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGEgOiBjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHJlbW92ZXx0b2dnbGV8bWF4aW1pemV8bWluaW1pemV8dG9nZ2xlTWF4aW1pemUvKSkge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgZGF0YS5faW5pdCgkKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENhcmRXaWRnZXQ7XG4gICAgfSgpO1xuICAgIC8qKlxuICAgICAqIERhdGEgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX0NPTExBUFNFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJyk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9SRU1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdyZW1vdmUnKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX01BWElNSVpFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlTWF4aW1pemUnKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBqUXVlcnkgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2FyZFdpZGdldDtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ2FyZFdpZGdldDtcbiAgfShqUXVlcnkpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBBZG1pbkxURSBDYXJkUmVmcmVzaC5qc1xuICAgKiBMaWNlbnNlIE1JVFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIENhcmRSZWZyZXNoID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdGFudHNcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnQ2FyZFJlZnJlc2gnO1xuICAgIHZhciBEQVRBX0tFWSA9ICdsdGUuY2FyZHJlZnJlc2gnO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIExPQURFRDogXCJsb2FkZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIE9WRVJMQVlfQURERUQ6IFwib3ZlcmxheS5hZGRlZFwiICsgRVZFTlRfS0VZLFxuICAgICAgT1ZFUkxBWV9SRU1PVkVEOiBcIm92ZXJsYXkucmVtb3ZlZFwiICsgRVZFTlRfS0VZXG4gICAgfTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQ0FSRDogJ2NhcmQnXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBDQVJEOiBcIi5cIiArIENsYXNzTmFtZS5DQVJELFxuICAgICAgREFUQV9SRUZSRVNIOiAnW2RhdGEtY2FyZC13aWRnZXQ9XCJjYXJkLXJlZnJlc2hcIl0nXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIHNvdXJjZTogJycsXG4gICAgICBzb3VyY2VTZWxlY3RvcjogJycsXG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgdHJpZ2dlcjogU2VsZWN0b3IuREFUQV9SRUZSRVNILFxuICAgICAgY29udGVudDogJy5jYXJkLWJvZHknLFxuICAgICAgbG9hZEluQ29udGVudDogdHJ1ZSxcbiAgICAgIGxvYWRPbkluaXQ6IHRydWUsXG4gICAgICByZXNwb25zZVR5cGU6ICcnLFxuICAgICAgb3ZlcmxheVRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48aSBjbGFzcz1cImZhcyBmYS0yeCBmYS1zeW5jLWFsdCBmYS1zcGluXCI+PC9pPjwvZGl2PicsXG4gICAgICBvbkxvYWRTdGFydDogZnVuY3Rpb24gb25Mb2FkU3RhcnQoKSB7fSxcbiAgICAgIG9uTG9hZERvbmU6IGZ1bmN0aW9uIG9uTG9hZERvbmUocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQ2FyZFJlZnJlc2ggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gQ2FyZFJlZnJlc2goZWxlbWVudCwgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQucGFyZW50cyhTZWxlY3Rvci5DQVJEKS5maXJzdCgpO1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX292ZXJsYXkgPSAkKHRoaXMuX3NldHRpbmdzLm92ZXJsYXlUZW1wbGF0ZSk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNBUkQpKSB7XG4gICAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zb3VyY2UgPT09ICcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3VyY2UgdXJsIHdhcyBub3QgZGVmaW5lZC4gUGxlYXNlIHNwZWNpZnkgYSB1cmwgaW4geW91ciBDYXJkUmVmcmVzaCBzb3VyY2Ugb3B0aW9uLicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBDYXJkUmVmcmVzaC5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5sb2FkID0gZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgdGhpcy5fYWRkT3ZlcmxheSgpO1xuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLm9uTG9hZFN0YXJ0LmNhbGwoJCh0aGlzKSk7XG5cbiAgICAgICAgJC5nZXQodGhpcy5fc2V0dGluZ3Muc291cmNlLCB0aGlzLl9zZXR0aW5ncy5wYXJhbXMsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5sb2FkSW5Db250ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc291cmNlU2VsZWN0b3IgIT0gJycpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSAkKHJlc3BvbnNlKS5maW5kKHRoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yKS5odG1sKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLmNvbnRlbnQpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX3NldHRpbmdzLm9uTG9hZERvbmUuY2FsbCgkKHRoaXMpLCByZXNwb25zZSk7XG5cbiAgICAgICAgICB0aGlzLl9yZW1vdmVPdmVybGF5KCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VUeXBlICE9PSAnJyAmJiB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZVR5cGUpO1xuICAgICAgICB2YXIgbG9hZGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkxPQURFRCk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihsb2FkZWRFdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZE92ZXJsYXkgPSBmdW5jdGlvbiBfYWRkT3ZlcmxheSgpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50LmFwcGVuZCh0aGlzLl9vdmVybGF5KTtcblxuICAgICAgICB2YXIgb3ZlcmxheUFkZGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50Lk9WRVJMQVlfQURERUQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIob3ZlcmxheUFkZGVkRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9yZW1vdmVPdmVybGF5ID0gZnVuY3Rpb24gX3JlbW92ZU92ZXJsYXkoKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX292ZXJsYXkpLnJlbW92ZSgpO1xuXG4gICAgICAgIHZhciBvdmVybGF5UmVtb3ZlZEV2ZW50ID0gJC5FdmVudChFdmVudC5PVkVSTEFZX1JFTU9WRUQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIob3ZlcmxheVJlbW92ZWRFdmVudCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBQcml2YXRlXG4gICAgICBfcHJvdG8uX2luaXQgPSBmdW5jdGlvbiBfaW5pdChjYXJkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnRyaWdnZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5sb2FkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5sb2FkT25Jbml0KSB7XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgdmFyIF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENhcmRSZWZyZXNoKCQodGhpcyksIF9vcHRpb25zKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gZGF0YSA6IGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgY29uZmlnLm1hdGNoKC9sb2FkLykpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhLl9pbml0KCQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ2FyZFJlZnJlc2g7XG4gICAgfSgpO1xuICAgIC8qKlxuICAgICAqIERhdGEgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX1JFRlJFU0gsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAnbG9hZCcpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICQoU2VsZWN0b3IuREFUQV9SRUZSRVNIKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcykpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogalF1ZXJ5IEFQSVxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJkUmVmcmVzaDtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENhcmRSZWZyZXNoO1xuICB9KGpRdWVyeSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEFkbWluTFRFIERyb3Bkb3duLmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgRHJvcGRvd24gPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0YW50c1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdEcm9wZG93bic7XG4gICAgdmFyIERBVEFfS0VZID0gJ2x0ZS5kcm9wZG93bic7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgTkFWQkFSOiAnLm5hdmJhcicsXG4gICAgICBEUk9QRE9XTl9NRU5VOiAnLmRyb3Bkb3duLW1lbnUnLFxuICAgICAgRFJPUERPV05fTUVOVV9BQ1RJVkU6ICcuZHJvcGRvd24tbWVudS5zaG93JyxcbiAgICAgIERST1BET1dOX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJ1xuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIERST1BET1dOX0hPVkVSOiAnZHJvcGRvd24taG92ZXInLFxuICAgICAgRFJPUERPV05fUklHSFQ6ICdkcm9wZG93bi1tZW51LXJpZ2h0J1xuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7fTtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgdmFyIERyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIERyb3Bkb3duKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgfSAvLyBQdWJsaWNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8udG9nZ2xlU3VibWVudSA9IGZ1bmN0aW9uIHRvZ2dsZVN1Ym1lbnUoKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2libGluZ3MoKS5zaG93KCkudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xuXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50cygnLmRyb3Bkb3duLW1lbnUnKS5maXJzdCgpLmZpbmQoJy5zaG93JykucmVtb3ZlQ2xhc3MoXCJzaG93XCIpLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50cygnbGkubmF2LWl0ZW0uZHJvcGRvd24uc2hvdycpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICQoJy5kcm9wZG93bi1zdWJtZW51IC5zaG93JykucmVtb3ZlQ2xhc3MoXCJzaG93XCIpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uZml4UG9zaXRpb24gPSBmdW5jdGlvbiBmaXhQb3NpdGlvbigpIHtcbiAgICAgICAgdmFyIGVsbSA9ICQoU2VsZWN0b3IuRFJPUERPV05fTUVOVV9BQ1RJVkUpO1xuXG4gICAgICAgIGlmIChlbG0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgaWYgKGVsbS5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUERPV05fUklHSFQpKSB7XG4gICAgICAgICAgICBlbG0uY3NzKCdsZWZ0JywgJ2luaGVyaXQnKTtcbiAgICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAwKTtcbiAgICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgJ2luaGVyaXQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWxtLm9mZnNldCgpO1xuICAgICAgICAgIHZhciB3aWR0aCA9IGVsbS53aWR0aCgpO1xuICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgIHZhciB2aXNpYmxlUGFydCA9IHdpbmRvd1dpZHRoIC0gb2Zmc2V0LmxlZnQ7XG5cbiAgICAgICAgICBpZiAob2Zmc2V0LmxlZnQgPCAwKSB7XG4gICAgICAgICAgICBlbG0uY3NzKCdsZWZ0JywgJ2luaGVyaXQnKTtcbiAgICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0Jywgb2Zmc2V0LmxlZnQgLSA1KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZpc2libGVQYXJ0IDwgd2lkdGgpIHtcbiAgICAgICAgICAgICAgZWxtLmNzcygnbGVmdCcsICdpbmhlcml0Jyk7XG4gICAgICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgdmFyIF9jb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKCQodGhpcyksIF9jb25maWcpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlU3VibWVudScgfHwgY29uZmlnID09ICdmaXhQb3NpdGlvbicpIHtcbiAgICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gRHJvcGRvd247XG4gICAgfSgpO1xuICAgIC8qKlxuICAgICAqIERhdGEgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG5cbiAgICAkKFNlbGVjdG9yLkRST1BET1dOX01FTlUgKyAnICcgKyBTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlU3VibWVudScpO1xuICAgIH0pO1xuICAgICQoU2VsZWN0b3IuTkFWQkFSICsgJyAnICsgU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2ZpeFBvc2l0aW9uJyk7XG4gICAgICB9LCAxKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBqUXVlcnkgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duO1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gRHJvcGRvd247XG4gIH0oalF1ZXJ5KTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQWRtaW5MVEUgVG9hc3RzLmpzXG4gICAqIExpY2Vuc2UgTUlUXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgVG9hc3RzID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdGFudHNcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnVG9hc3RzJztcbiAgICB2YXIgREFUQV9LRVkgPSAnbHRlLnRvYXN0cyc7XG4gICAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgSU5JVDogXCJpbml0XCIgKyBFVkVOVF9LRVksXG4gICAgICBDUkVBVEVEOiBcImNyZWF0ZWRcIiArIEVWRU5UX0tFWSxcbiAgICAgIFJFTU9WRUQ6IFwicmVtb3ZlZFwiICsgRVZFTlRfS0VZXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBCT0RZOiAndG9hc3QtYm9keScsXG4gICAgICBDT05UQUlORVJfVE9QX1JJR0hUOiAnI3RvYXN0c0NvbnRhaW5lclRvcFJpZ2h0JyxcbiAgICAgIENPTlRBSU5FUl9UT1BfTEVGVDogJyN0b2FzdHNDb250YWluZXJUb3BMZWZ0JyxcbiAgICAgIENPTlRBSU5FUl9CT1RUT01fUklHSFQ6ICcjdG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnLFxuICAgICAgQ09OVEFJTkVSX0JPVFRPTV9MRUZUOiAnI3RvYXN0c0NvbnRhaW5lckJvdHRvbUxlZnQnXG4gICAgfTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgVE9QX1JJR0hUOiAndG9hc3RzLXRvcC1yaWdodCcsXG4gICAgICBUT1BfTEVGVDogJ3RvYXN0cy10b3AtbGVmdCcsXG4gICAgICBCT1RUT01fUklHSFQ6ICd0b2FzdHMtYm90dG9tLXJpZ2h0JyxcbiAgICAgIEJPVFRPTV9MRUZUOiAndG9hc3RzLWJvdHRvbS1sZWZ0JyxcbiAgICAgIEZBREU6ICdmYWRlJ1xuICAgIH07XG4gICAgdmFyIFBvc2l0aW9uID0ge1xuICAgICAgVE9QX1JJR0hUOiAndG9wUmlnaHQnLFxuICAgICAgVE9QX0xFRlQ6ICd0b3BMZWZ0JyxcbiAgICAgIEJPVFRPTV9SSUdIVDogJ2JvdHRvbVJpZ2h0JyxcbiAgICAgIEJPVFRPTV9MRUZUOiAnYm90dG9tTGVmdCdcbiAgICB9O1xuICAgIHZhciBEZWZhdWx0ID0ge1xuICAgICAgcG9zaXRpb246IFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgYXV0b2hpZGU6IGZhbHNlLFxuICAgICAgYXV0b3JlbW92ZTogdHJ1ZSxcbiAgICAgIGRlbGF5OiAxMDAwLFxuICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgIGljb246IG51bGwsXG4gICAgICBpbWFnZTogbnVsbCxcbiAgICAgIGltYWdlQWx0OiBudWxsLFxuICAgICAgaW1hZ2VIZWlnaHQ6ICcyNXB4JyxcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgc3VidGl0bGU6IG51bGwsXG4gICAgICBjbG9zZTogdHJ1ZSxcbiAgICAgIGJvZHk6IG51bGwsXG4gICAgICBjbGFzczogbnVsbFxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIHZhciBUb2FzdHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gVG9hc3RzKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAgICAgdGhpcy5fcHJlcGFyZUNvbnRhaW5lcigpO1xuXG4gICAgICAgIHZhciBpbml0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LklOSVQpO1xuICAgICAgICAkKCdib2R5JykudHJpZ2dlcihpbml0RXZlbnQpO1xuICAgICAgfSAvLyBQdWJsaWNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gVG9hc3RzLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgdmFyIHRvYXN0ID0gJCgnPGRpdiBjbGFzcz1cInRvYXN0XCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIvPicpO1xuICAgICAgICB0b2FzdC5kYXRhKCdhdXRvaGlkZScsIHRoaXMuX2NvbmZpZy5hdXRvaGlkZSk7XG4gICAgICAgIHRvYXN0LmRhdGEoJ2FuaW1hdGlvbicsIHRoaXMuX2NvbmZpZy5mYWRlKTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmNsYXNzKSB7XG4gICAgICAgICAgdG9hc3QuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZGVsYXkgJiYgdGhpcy5fY29uZmlnLmRlbGF5ICE9IDUwMCkge1xuICAgICAgICAgIHRvYXN0LmRhdGEoJ2RlbGF5JywgdGhpcy5fY29uZmlnLmRlbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2FzdF9oZWFkZXIgPSAkKCc8ZGl2IGNsYXNzPVwidG9hc3QtaGVhZGVyXCI+Jyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbWFnZSAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIHRvYXN0X2ltYWdlID0gJCgnPGltZyAvPicpLmFkZENsYXNzKCdyb3VuZGVkIG1yLTInKS5hdHRyKCdzcmMnLCB0aGlzLl9jb25maWcuaW1hZ2UpLmF0dHIoJ2FsdCcsIHRoaXMuX2NvbmZpZy5pbWFnZUFsdCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmltYWdlSGVpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRvYXN0X2ltYWdlLmhlaWdodCh0aGlzLl9jb25maWcuaW1hZ2VIZWlnaHQpLndpZHRoKCdhdXRvJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCh0b2FzdF9pbWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmljb24gIT0gbnVsbCkge1xuICAgICAgICAgIHRvYXN0X2hlYWRlci5hcHBlbmQoJCgnPGkgLz4nKS5hZGRDbGFzcygnbXItMicpLmFkZENsYXNzKHRoaXMuX2NvbmZpZy5pY29uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKCQoJzxzdHJvbmcgLz4nKS5hZGRDbGFzcygnbXItYXV0bycpLmh0bWwodGhpcy5fY29uZmlnLnRpdGxlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnN1YnRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKCQoJzxzbWFsbCAvPicpLmh0bWwodGhpcy5fY29uZmlnLnN1YnRpdGxlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmNsb3NlID09IHRydWUpIHtcbiAgICAgICAgICB2YXIgdG9hc3RfY2xvc2UgPSAkKCc8YnV0dG9uIGRhdGEtZGlzbWlzcz1cInRvYXN0XCIgLz4nKS5hdHRyKCd0eXBlJywgJ2J1dHRvbicpLmFkZENsYXNzKCdtbC0yIG1iLTEgY2xvc2UnKS5hdHRyKCdhcmlhLWxhYmVsJywgJ0Nsb3NlJykuYXBwZW5kKCc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy50aXRsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0b2FzdF9jbG9zZS50b2dnbGVDbGFzcygnbWwtMiBtbC1hdXRvJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCh0b2FzdF9jbG9zZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2FzdC5hcHBlbmQodG9hc3RfaGVhZGVyKTtcblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJvZHkgIT0gbnVsbCkge1xuICAgICAgICAgIHRvYXN0LmFwcGVuZCgkKCc8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiIC8+JykuaHRtbCh0aGlzLl9jb25maWcuYm9keSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLl9nZXRDb250YWluZXJJZCgpKS5wcmVwZW5kKHRvYXN0KTtcbiAgICAgICAgdmFyIGNyZWF0ZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ1JFQVRFRCk7XG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKGNyZWF0ZWRFdmVudCk7XG4gICAgICAgIHRvYXN0LnRvYXN0KCdzaG93Jyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvcmVtb3ZlKSB7XG4gICAgICAgICAgdG9hc3Qub24oJ2hpZGRlbi5icy50b2FzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZGVsYXkoMjAwKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHZhciByZW1vdmVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlJFTU9WRUQpO1xuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIocmVtb3ZlZEV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9nZXRDb250YWluZXJJZCA9IGZ1bmN0aW9uIF9nZXRDb250YWluZXJJZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfUklHSFQpIHtcbiAgICAgICAgICByZXR1cm4gU2VsZWN0b3IuQ09OVEFJTkVSX1RPUF9SSUdIVDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uVE9QX0xFRlQpIHtcbiAgICAgICAgICByZXR1cm4gU2VsZWN0b3IuQ09OVEFJTkVSX1RPUF9MRUZUO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5CT1RUT01fUklHSFQpIHtcbiAgICAgICAgICByZXR1cm4gU2VsZWN0b3IuQ09OVEFJTkVSX0JPVFRPTV9SSUdIVDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgICByZXR1cm4gU2VsZWN0b3IuQ09OVEFJTkVSX0JPVFRPTV9MRUZUO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX3ByZXBhcmVDb250YWluZXIgPSBmdW5jdGlvbiBfcHJlcGFyZUNvbnRhaW5lcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5fZ2V0Q29udGFpbmVySWQoKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoJzxkaXYgLz4nKS5hdHRyKCdpZCcsIHRoaXMuX2dldENvbnRhaW5lcklkKCkucmVwbGFjZSgnIycsICcnKSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLlRPUF9SSUdIVCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENsYXNzTmFtZS5UT1BfUklHSFQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLlRPUF9MRUZUKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoQ2xhc3NOYW1lLlRPUF9MRUZUKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5CT1RUT01fUklHSFQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuQk9UVE9NX1JJR0hUKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5CT1RUT01fTEVGVCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENsYXNzTmFtZS5CT1RUT01fTEVGVCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJCgnYm9keScpLmFwcGVuZChjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5maXhlZCkge1xuICAgICAgICAgICQodGhpcy5fZ2V0Q29udGFpbmVySWQoKSkuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCh0aGlzLl9nZXRDb250YWluZXJJZCgpKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgVG9hc3RzLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKG9wdGlvbiwgY29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpO1xuXG4gICAgICAgICAgdmFyIHRvYXN0ID0gbmV3IFRvYXN0cygkKHRoaXMpLCBfb3B0aW9ucyk7XG5cbiAgICAgICAgICBpZiAob3B0aW9uID09PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgdG9hc3Rbb3B0aW9uXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gVG9hc3RzO1xuICAgIH0oKTtcbiAgICAvKipcbiAgICAgKiBqUXVlcnkgQVBJXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAqL1xuXG5cbiAgICAkLmZuW05BTUVdID0gVG9hc3RzLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvYXN0cztcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gVG9hc3RzLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBUb2FzdHM7XG4gIH0oalF1ZXJ5KTtcblxuICBleHBvcnRzLkNhcmRSZWZyZXNoID0gQ2FyZFJlZnJlc2g7XG4gIGV4cG9ydHMuQ2FyZFdpZGdldCA9IENhcmRXaWRnZXQ7XG4gIGV4cG9ydHMuQ29udHJvbFNpZGViYXIgPSBDb250cm9sU2lkZWJhcjtcbiAgZXhwb3J0cy5EaXJlY3RDaGF0ID0gRGlyZWN0Q2hhdDtcbiAgZXhwb3J0cy5Ecm9wZG93biA9IERyb3Bkb3duO1xuICBleHBvcnRzLkxheW91dCA9IExheW91dDtcbiAgZXhwb3J0cy5QdXNoTWVudSA9IFB1c2hNZW51O1xuICBleHBvcnRzLlRvYXN0cyA9IFRvYXN0cztcbiAgZXhwb3J0cy5Ub2RvTGlzdCA9IFRvZG9MaXN0O1xuICBleHBvcnRzLlRyZWV2aWV3ID0gVHJlZXZpZXc7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkbWlubHRlLmpzLm1hcFxuIiwidHJ5IHtcbiAgICB3aW5kb3cuUG9wcGVyID0gcmVxdWlyZShcInBvcHBlci5qc1wiKS5kZWZhdWx0O1xuICAgIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4gICAgd2luZG93LlN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XG4gICAgcmVxdWlyZShcImJvb3RzdHJhcFwiKTtcbn0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbn1cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuLy8gQm9pbGVycGxhdGVcbnJlcXVpcmUoXCIuL2FkbWluTHRlXCIpO1xucmVxdWlyZShcIi4vZGVtb1wiKTtcbnJlcXVpcmUoXCIuL21hbmFnZV9vcGVyYXRpb25cIik7XG5yZXF1aXJlKFwiLi4vcGx1Z2luc1wiKTtcbiIsIi8qKlxuICogQWRtaW5MVEUgRGVtbyBNZW51XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFlvdSBzaG91bGQgbm90IHVzZSB0aGlzIGZpbGUgaW4gcHJvZHVjdGlvbi5cbiAqIFRoaXMgZmlsZSBpcyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5LlxuICovXG4oZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgdmFyICRzaWRlYmFyICAgPSAkKCcuY29udHJvbC1zaWRlYmFyJylcbiAgdmFyICRjb250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAncC0zIGNvbnRyb2wtc2lkZWJhci1jb250ZW50J1xuICB9KVxuXG4gICRzaWRlYmFyLmFwcGVuZCgkY29udGFpbmVyKVxuXG4gIHZhciBuYXZiYXJfZGFya19za2lucyA9IFtcbiAgICAnbmF2YmFyLXByaW1hcnknLFxuICAgICduYXZiYXItc2Vjb25kYXJ5JyxcbiAgICAnbmF2YmFyLWluZm8nLFxuICAgICduYXZiYXItc3VjY2VzcycsXG4gICAgJ25hdmJhci1kYW5nZXInLFxuICAgICduYXZiYXItaW5kaWdvJyxcbiAgICAnbmF2YmFyLXB1cnBsZScsXG4gICAgJ25hdmJhci1waW5rJyxcbiAgICAnbmF2YmFyLW5hdnknLFxuICAgICduYXZiYXItbGlnaHRibHVlJyxcbiAgICAnbmF2YmFyLXRlYWwnLFxuICAgICduYXZiYXItY3lhbicsXG4gICAgJ25hdmJhci1kYXJrJyxcbiAgICAnbmF2YmFyLWdyYXktZGFyaycsXG4gICAgJ25hdmJhci1ncmF5JyxcbiAgXVxuXG4gIHZhciBuYXZiYXJfbGlnaHRfc2tpbnMgPSBbXG4gICAgJ25hdmJhci1saWdodCcsXG4gICAgJ25hdmJhci13YXJuaW5nJyxcbiAgICAnbmF2YmFyLXdoaXRlJyxcbiAgICAnbmF2YmFyLW9yYW5nZScsXG4gIF1cblxuICAkY29udGFpbmVyLmFwcGVuZChcbiAgICAnPGg1PkN1c3RvbWl6ZSBBZG1pbkxURTwvaDU+PGhyIGNsYXNzPVwibWItMlwiLz4nXG4gIClcblxuICB2YXIgJG5vX2JvcmRlcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4taGVhZGVyJykuaGFzQ2xhc3MoJ2JvcmRlci1ib3R0b20tMCcpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdib3JkZXItYm90dG9tLTAnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnYm9yZGVyLWJvdHRvbS0wJylcbiAgICB9XG4gIH0pXG4gIHZhciAkbm9fYm9yZGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCRub19ib3JkZXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Tm8gTmF2YmFyIGJvcmRlcjwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkbm9fYm9yZGVyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fYm9keV9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnYm9keScpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9ib2R5X2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCR0ZXh0X3NtX2JvZHlfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Qm9keSBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2JvZHlfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9oZWFkZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWhlYWRlcicpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21faGVhZGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCR0ZXh0X3NtX2hlYWRlcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5OYXZiYXIgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9oZWFkZXJfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsnY2xhc3MnOiAnbWItMSd9KS5hcHBlbmQoJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9mb290ZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWZvb3RlcicpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4tZm9vdGVyJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1mb290ZXInKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21fZm9vdGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCR0ZXh0X3NtX2Zvb3Rlcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5Gb290ZXIgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9mb290ZXJfY29udGFpbmVyKVxuXG4gIHZhciAkZmxhdF9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWZsYXQnKSxcbiAgICAnY2xhc3MnOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWZsYXQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWZsYXQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRmbGF0X3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsnY2xhc3MnOiAnbWItMSd9KS5hcHBlbmQoJGZsYXRfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBmbGF0IHN0eWxlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRmbGF0X3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkbGVnYWN5X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtbGVnYWN5JyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1sZWdhY3knKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWxlZ2FjeScpXG4gICAgfVxuICB9KVxuICB2YXIgJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCRsZWdhY3lfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBsZWdhY3kgc3R5bGU8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGNvbXBhY3Rfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1jb21wYWN0JyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1jb21wYWN0JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1jb21wYWN0JylcbiAgICB9XG4gIH0pXG4gIHZhciAkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCRjb21wYWN0X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgY29tcGFjdDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGNoaWxkX2luZGVudF9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWNoaWxkLWluZGVudCcpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtY2hpbGQtaW5kZW50JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1jaGlsZC1pbmRlbnQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi0xJ30pLmFwcGVuZCgkY2hpbGRfaW5kZW50X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgY2hpbGQgaW5kZW50PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRub19leHBhbmRfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4tc2lkZWJhcicpLmhhc0NsYXNzKCdzaWRlYmFyLW5vLWV4cGFuZCcpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLXNpZGViYXInKS5hZGRDbGFzcygnc2lkZWJhci1uby1leHBhbmQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItbm8tZXhwYW5kJylcbiAgICB9XG4gIH0pXG4gIHZhciAkbm9fZXhwYW5kX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsnY2xhc3MnOiAnbWItMSd9KS5hcHBlbmQoJG5vX2V4cGFuZF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk1haW4gU2lkZWJhciBkaXNhYmxlIGhvdmVyL2ZvY3VzIGF1dG8gZXhwYW5kPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRub19leHBhbmRfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX2JyYW5kX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcuYnJhbmQtbGluaycpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLmJyYW5kLWxpbmsnKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5icmFuZC1saW5rJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2JyYW5kX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTQnfSkuYXBwZW5kKCR0ZXh0X3NtX2JyYW5kX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkJyYW5kIHNtYWxsIHRleHQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21fYnJhbmRfY29udGFpbmVyKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+TmF2YmFyIFZhcmlhbnRzPC9oNj4nKVxuXG4gIHZhciAkbmF2YmFyX3ZhcmlhbnRzICAgICAgICA9ICQoJzxkaXYgLz4nLCB7XG4gICAgJ2NsYXNzJzogJ2QtZmxleCdcbiAgfSlcbiAgdmFyIG5hdmJhcl9hbGxfY29sb3JzICAgICAgID0gbmF2YmFyX2Rhcmtfc2tpbnMuY29uY2F0KG5hdmJhcl9saWdodF9za2lucylcbiAgdmFyICRuYXZiYXJfdmFyaWFudHNfY29sb3JzID0gY3JlYXRlU2tpbkJsb2NrKG5hdmJhcl9hbGxfY29sb3JzLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIHZhciAkbWFpbl9oZWFkZXIgPSAkKCcubWFpbi1oZWFkZXInKVxuICAgICRtYWluX2hlYWRlci5yZW1vdmVDbGFzcygnbmF2YmFyLWRhcmsnKS5yZW1vdmVDbGFzcygnbmF2YmFyLWxpZ2h0JylcbiAgICBuYXZiYXJfYWxsX2NvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAkbWFpbl9oZWFkZXIucmVtb3ZlQ2xhc3MoY29sb3IpXG4gICAgfSlcblxuICAgIGlmIChuYXZiYXJfZGFya19za2lucy5pbmRleE9mKGNvbG9yKSA+IC0xKSB7XG4gICAgICAkbWFpbl9oZWFkZXIuYWRkQ2xhc3MoJ25hdmJhci1kYXJrJylcbiAgICB9IGVsc2Uge1xuICAgICAgJG1haW5faGVhZGVyLmFkZENsYXNzKCduYXZiYXItbGlnaHQnKVxuICAgIH1cblxuICAgICRtYWluX2hlYWRlci5hZGRDbGFzcyhjb2xvcilcbiAgfSlcblxuICAkbmF2YmFyX3ZhcmlhbnRzLmFwcGVuZCgkbmF2YmFyX3ZhcmlhbnRzX2NvbG9ycylcblxuICAkY29udGFpbmVyLmFwcGVuZCgkbmF2YmFyX3ZhcmlhbnRzKVxuXG4gIHZhciBzaWRlYmFyX2NvbG9ycyA9IFtcbiAgICAnYmctcHJpbWFyeScsXG4gICAgJ2JnLXdhcm5pbmcnLFxuICAgICdiZy1pbmZvJyxcbiAgICAnYmctZGFuZ2VyJyxcbiAgICAnYmctc3VjY2VzcycsXG4gICAgJ2JnLWluZGlnbycsXG4gICAgJ2JnLWxpZ2h0Ymx1ZScsXG4gICAgJ2JnLW5hdnknLFxuICAgICdiZy1wdXJwbGUnLFxuICAgICdiZy1mdWNoc2lhJyxcbiAgICAnYmctcGluaycsXG4gICAgJ2JnLW1hcm9vbicsXG4gICAgJ2JnLW9yYW5nZScsXG4gICAgJ2JnLWxpbWUnLFxuICAgICdiZy10ZWFsJyxcbiAgICAnYmctb2xpdmUnXG4gIF1cblxuICB2YXIgYWNjZW50X2NvbG9ycyA9IFtcbiAgICAnYWNjZW50LXByaW1hcnknLFxuICAgICdhY2NlbnQtd2FybmluZycsXG4gICAgJ2FjY2VudC1pbmZvJyxcbiAgICAnYWNjZW50LWRhbmdlcicsXG4gICAgJ2FjY2VudC1zdWNjZXNzJyxcbiAgICAnYWNjZW50LWluZGlnbycsXG4gICAgJ2FjY2VudC1saWdodGJsdWUnLFxuICAgICdhY2NlbnQtbmF2eScsXG4gICAgJ2FjY2VudC1wdXJwbGUnLFxuICAgICdhY2NlbnQtZnVjaHNpYScsXG4gICAgJ2FjY2VudC1waW5rJyxcbiAgICAnYWNjZW50LW1hcm9vbicsXG4gICAgJ2FjY2VudC1vcmFuZ2UnLFxuICAgICdhY2NlbnQtbGltZScsXG4gICAgJ2FjY2VudC10ZWFsJyxcbiAgICAnYWNjZW50LW9saXZlJ1xuICBdXG5cbiAgdmFyIHNpZGViYXJfc2tpbnMgPSBbXG4gICAgJ3NpZGViYXItZGFyay1wcmltYXJ5JyxcbiAgICAnc2lkZWJhci1kYXJrLXdhcm5pbmcnLFxuICAgICdzaWRlYmFyLWRhcmstaW5mbycsXG4gICAgJ3NpZGViYXItZGFyay1kYW5nZXInLFxuICAgICdzaWRlYmFyLWRhcmstc3VjY2VzcycsXG4gICAgJ3NpZGViYXItZGFyay1pbmRpZ28nLFxuICAgICdzaWRlYmFyLWRhcmstbGlnaHRibHVlJyxcbiAgICAnc2lkZWJhci1kYXJrLW5hdnknLFxuICAgICdzaWRlYmFyLWRhcmstcHVycGxlJyxcbiAgICAnc2lkZWJhci1kYXJrLWZ1Y2hzaWEnLFxuICAgICdzaWRlYmFyLWRhcmstcGluaycsXG4gICAgJ3NpZGViYXItZGFyay1tYXJvb24nLFxuICAgICdzaWRlYmFyLWRhcmstb3JhbmdlJyxcbiAgICAnc2lkZWJhci1kYXJrLWxpbWUnLFxuICAgICdzaWRlYmFyLWRhcmstdGVhbCcsXG4gICAgJ3NpZGViYXItZGFyay1vbGl2ZScsXG4gICAgJ3NpZGViYXItbGlnaHQtcHJpbWFyeScsXG4gICAgJ3NpZGViYXItbGlnaHQtd2FybmluZycsXG4gICAgJ3NpZGViYXItbGlnaHQtaW5mbycsXG4gICAgJ3NpZGViYXItbGlnaHQtZGFuZ2VyJyxcbiAgICAnc2lkZWJhci1saWdodC1zdWNjZXNzJyxcbiAgICAnc2lkZWJhci1saWdodC1pbmRpZ28nLFxuICAgICdzaWRlYmFyLWxpZ2h0LWxpZ2h0Ymx1ZScsXG4gICAgJ3NpZGViYXItbGlnaHQtbmF2eScsXG4gICAgJ3NpZGViYXItbGlnaHQtcHVycGxlJyxcbiAgICAnc2lkZWJhci1saWdodC1mdWNoc2lhJyxcbiAgICAnc2lkZWJhci1saWdodC1waW5rJyxcbiAgICAnc2lkZWJhci1saWdodC1tYXJvb24nLFxuICAgICdzaWRlYmFyLWxpZ2h0LW9yYW5nZScsXG4gICAgJ3NpZGViYXItbGlnaHQtbGltZScsXG4gICAgJ3NpZGViYXItbGlnaHQtdGVhbCcsXG4gICAgJ3NpZGViYXItbGlnaHQtb2xpdmUnXG4gIF1cblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkFjY2VudCBDb2xvciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRhY2NlbnRfdmFyaWFudHMgPSAkKCc8ZGl2IC8+Jywge1xuICAgICdjbGFzcyc6ICdkLWZsZXgnXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKCRhY2NlbnRfdmFyaWFudHMpXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhhY2NlbnRfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yICAgICAgICAgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgYWNjZW50X2NsYXNzID0gY29sb3JcbiAgICB2YXIgJGJvZHkgICAgICA9ICQoJ2JvZHknKVxuICAgIGFjY2VudF9jb2xvcnMubWFwKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkYm9keS5hZGRDbGFzcyhhY2NlbnRfY2xhc3MpXG4gIH0pKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+RGFyayBTaWRlYmFyIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJHNpZGViYXJfdmFyaWFudHNfZGFyayA9ICQoJzxkaXYgLz4nLCB7XG4gICAgJ2NsYXNzJzogJ2QtZmxleCdcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfdmFyaWFudHNfZGFyaylcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKHNpZGViYXJfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yICAgICAgICAgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgc2lkZWJhcl9jbGFzcyA9ICdzaWRlYmFyLWRhcmstJyArIGNvbG9yLnJlcGxhY2UoJ2JnLScsICcnKVxuICAgIHZhciAkc2lkZWJhciAgICAgID0gJCgnLm1haW4tc2lkZWJhcicpXG4gICAgc2lkZWJhcl9za2lucy5tYXAoZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRzaWRlYmFyLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcblxuICAgICRzaWRlYmFyLmFkZENsYXNzKHNpZGViYXJfY2xhc3MpXG4gIH0pKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+TGlnaHQgU2lkZWJhciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRzaWRlYmFyX3ZhcmlhbnRzX2xpZ2h0ID0gJCgnPGRpdiAvPicsIHtcbiAgICAnY2xhc3MnOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl92YXJpYW50c19saWdodClcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKHNpZGViYXJfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yICAgICAgICAgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgc2lkZWJhcl9jbGFzcyA9ICdzaWRlYmFyLWxpZ2h0LScgKyBjb2xvci5yZXBsYWNlKCdiZy0nLCAnJylcbiAgICB2YXIgJHNpZGViYXIgICAgICA9ICQoJy5tYWluLXNpZGViYXInKVxuICAgIHNpZGViYXJfc2tpbnMubWFwKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkc2lkZWJhci5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkc2lkZWJhci5hZGRDbGFzcyhzaWRlYmFyX2NsYXNzKVxuICB9KSlcblxuICB2YXIgbG9nb19za2lucyA9IG5hdmJhcl9hbGxfY29sb3JzXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+QnJhbmQgTG9nbyBWYXJpYW50czwvaDY+JylcbiAgdmFyICRsb2dvX3ZhcmlhbnRzID0gJCgnPGRpdiAvPicsIHtcbiAgICAnY2xhc3MnOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkbG9nb192YXJpYW50cylcbiAgdmFyICRjbGVhcl9idG4gPSAkKCc8YSAvPicsIHtcbiAgICBocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJ1xuICB9KS50ZXh0KCdjbGVhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGxvZ28gPSAkKCcuYnJhbmQtbGluaycpXG4gICAgbG9nb19za2lucy5tYXAoZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRsb2dvLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKGxvZ29fc2tpbnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgJGxvZ28gPSAkKCcuYnJhbmQtbGluaycpXG4gICAgbG9nb19za2lucy5tYXAoZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRsb2dvLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcbiAgICAkbG9nby5hZGRDbGFzcyhjb2xvcilcbiAgfSkuYXBwZW5kKCRjbGVhcl9idG4pKVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraW5CbG9jayhjb2xvcnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyICRibG9jayA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICAnY2xhc3MnOiAnZC1mbGV4IGZsZXgtd3JhcCBtYi0zJ1xuICAgIH0pXG5cbiAgICBjb2xvcnMubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgdmFyICRjb2xvciA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICAgICdjbGFzcyc6ICh0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnID8gY29sb3Iuam9pbignICcpIDogY29sb3IpLnJlcGxhY2UoJ25hdmJhci0nLCAnYmctJykucmVwbGFjZSgnYWNjZW50LScsICdiZy0nKSArICcgZWxldmF0aW9uLTInXG4gICAgICB9KVxuXG4gICAgICAkYmxvY2suYXBwZW5kKCRjb2xvcilcblxuICAgICAgJGNvbG9yLmRhdGEoJ2NvbG9yJywgY29sb3IpXG5cbiAgICAgICRjb2xvci5jc3Moe1xuICAgICAgICB3aWR0aCAgICAgICA6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0ICAgICAgOiAnMjBweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxuICAgICAgICBtYXJnaW5SaWdodCA6IDEwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICBvcGFjaXR5ICAgICA6IDAuOCxcbiAgICAgICAgY3Vyc29yICAgICAgOiAncG9pbnRlcidcbiAgICAgIH0pXG5cbiAgICAgICRjb2xvci5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY3NzKHsgb3BhY2l0eTogMSB9KS5yZW1vdmVDbGFzcygnZWxldmF0aW9uLTInKS5hZGRDbGFzcygnZWxldmF0aW9uLTQnKVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNzcyh7IG9wYWNpdHk6IDAuOCB9KS5yZW1vdmVDbGFzcygnZWxldmF0aW9uLTQnKS5hZGRDbGFzcygnZWxldmF0aW9uLTInKVxuICAgICAgfSlcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICRjb2xvci5vbignY2xpY2snLCBjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICRibG9ja1xuICB9XG5cbiAgJCgnLnByb2R1Y3QtaW1hZ2UtdGh1bWInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpbWFnZV9lbGVtZW50ID0gJCh0aGlzKS5maW5kKCdpbWcnKTtcbiAgICAkKCcucHJvZHVjdC1pbWFnZScpLnByb3AoJ3NyYycsICQoaW1hZ2VfZWxlbWVudCkuYXR0cignc3JjJykpXG4gICAgJCgnLnByb2R1Y3QtaW1hZ2UtdGh1bWIuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcbn0pKGpRdWVyeSlcbiIsImNvbnN0IHtcbiAgICBkZWZhdWx0OiBheGlvc1xufSA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuZnVuY3Rpb24gcG9wdXBDZW50ZXIodXJsLCB0aXRsZSwgdywgaCkge1xuICAgIC8vIEZpeGVzIGR1YWwtc2NyZWVuIHBvc2l0aW9uIE1vc3QgYnJvd3NlcnMgICAgICBGaXJlZm94XG4gICAgY29uc3QgZHVhbFNjcmVlbkxlZnQgPVxuICAgICAgICB3aW5kb3cuc2NyZWVuTGVmdCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiB3aW5kb3cuc2NyZWVuWDtcbiAgICBjb25zdCBkdWFsU2NyZWVuVG9wID1cbiAgICAgICAgd2luZG93LnNjcmVlblRvcCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW5ZO1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggP1xuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA6XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6XG4gICAgICAgIHNjcmVlbi53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgP1xuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgOlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID9cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA6XG4gICAgICAgIHNjcmVlbi5oZWlnaHQ7XG4gICAgY29uc3Qgc3lzdGVtWm9vbSA9IHdpZHRoIC8gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoO1xuICAgIGNvbnN0IGxlZnQgPSAod2lkdGggLSB3KSAvIDIgLyBzeXN0ZW1ab29tICsgZHVhbFNjcmVlbkxlZnQ7XG4gICAgY29uc3QgdG9wID0gKGhlaWdodCAtIGgpIC8gMiAvIHN5c3RlbVpvb20gKyBkdWFsU2NyZWVuVG9wO1xuICAgIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKFxuICAgICAgICB1cmwsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBgc2Nyb2xsYmFycz15ZXMsIHdpZHRoPSR7dyAvIHN5c3RlbVpvb219LCBoZWlnaHQ9JHtoIC9cbiAgICAgIHN5c3RlbVpvb219LCB0b3A9JHt0b3B9LGxlZnQ9JHtsZWZ0fWBcbiAgICApO1xuICAgIGlmICh3aW5kb3cuZm9jdXMpIG5ld1dpbmRvdy5mb2N1cygpO1xufVxuXG5mdW5jdGlvbiBzd2FsX2FsZXJ0KGFsZXJ0X2ljb24sIG1zZykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIGljb246IGFsZXJ0X2ljb24sXG4gICAgICAgIHRleHQ6IG1zZ1xuICAgIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnRhYmxlX2lkJykuRGF0YVRhYmxlKHtcbiAgICAgICAgLy8gc2Nyb2xsWTogXCIzMDBweFwiLFxuICAgICAgICAvLyBzY3JvbGxYOiB0cnVlLFxuICAgICAgICAvLyBzY3JvbGxDb2xsYXBzZTogdHJ1ZSxcbiAgICAgICAgLy8gcGFnaW5nOiBmYWxzZSxcbiAgICAgICAgLy8gb3JkZXI6W1snMCcsIFwiZGVzY1wiXV0sXG4gICAgICAgIG9yZGVyaW5nOmZhbHNlLFxuICAgICAgICBjb2x1bW5EZWZzOiBbe1xuICAgICAgICAgICAgdGFyZ2V0czogMFxuICAgICAgICB9XSxcbiAgICAgICAgZml4ZWRDb2x1bW5zOiB0cnVlLFxuICAgICAgICBkb206ICdCZnJ0aXAnLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAnY29sdmlzJyxcbiAgICAgICAgICAgICdjc3YnLFxuICAgICAgICAgICAgJ3BkZidcbiAgICAgICAgXVxuICAgIH0pO1xufSk7XG5cbihmdW5jdGlvbiAoJCkge1xuXG4gICAgJChcImJvZHlcIilcbiAgICAgICAgLm9uKFwiY2hhbmdlXCIsIFwiLnN0YXR1cy1jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHZhciB0cklkID0gJCh0aGlzKS5kYXRhKCdrZXknKTtcbiAgICAgICAgICAgIHZhciByb3V0ZSA9ICQoJyNzdGF0dXNfdXBkYXRlJykudmFsKCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gY2hhbmdlIHN0YXR1cz9cIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBgQ29uZmlybWBcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiB0cklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0dXMnOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnX3Rva2VuJzogJCgnbWV0YVtuYW1lPWNzcmYtdG9rZW5dJykuYXR0cignY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU3RhdHVzIGNoYW5nZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNsaWNrXCIsIFwiLnFyX2NvZGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVybCA9ICQodGhpcykuZGF0YSgna2V5Jyk7XG4gICAgICAgICAgICB2YXIgcXJtb2RhbCA9ICQoXCIjcXJ1Q29kZU1vZGFsXCIpO1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FkbWluL21hbmFnZS11cmwtcXJjb2RlJywge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB1cmxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcXJtb2RhbC5maW5kKCcubW9kYWwtYm9keScpLmh0bWwocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgcXJtb2RhbC5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7fSk7XG4gICAgICAgIH0pO1xuXG5cbn0pKGpRdWVyeSk7XG4iLCIvKipcbiAqIFBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZS5cbiAqL1xuKGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQ2hlY2tib3ggdHJlZSBmb3IgcGVybWlzc2lvbiBzZWxlY3RpbmdcbiAgICAgKi9cbiAgICBsZXQgcGVybWlzc2lvblRyZWUgPSAkKFwiLnBlcm1pc3Npb24tdHJlZSA6Y2hlY2tib3hcIik7XG5cbiAgICBwZXJtaXNzaW9uVHJlZS5vbihcImNsaWNrIGNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoXCJ1bFwiKVxuICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2hlY2tlZFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKFwidWxcIilcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cihcImNoZWNrZWRcIilcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwZXJtaXNzaW9uVHJlZS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xuICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcInVsXCIpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjaGVja2VkXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzdWJtaXQgaW5wdXRzIGluIHRoZSBnaXZlbiBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc2FibGVTdWJtaXRCdXR0b25zKGZvcm0pIHtcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICBmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGUgc3VibWl0IGlucHV0cyBpbiBhIGdpdmVuIGZvcm1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICovXG4gICAgZnVuY3Rpb24gZW5hYmxlU3VibWl0QnV0dG9ucyhmb3JtKSB7XG4gICAgICAgIGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGFsbCBzdWJtaXQgYnV0dG9ucyBvbmNlIGNsaWNrZWRcbiAgICAgKi9cbiAgICAkKFwiZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNhYmxlU3VibWl0QnV0dG9ucygkKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjb25maXJtYXRpb24gdG8gYSBkZWxldGUgYnV0dG9uL2Zvcm1cbiAgICAgKi9cbiAgICAkKFwiYm9keVwiKVxuICAgICAgICAub24oXCJjbGlja1wiLCBcImFbZGF0YS1tZXRob2Q9ZGVsZXRlXVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBidXR0b24uYXR0cihcImhyZWZcIik7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/XCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJDb25maXJtIERlbGV0ZVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShocmVmKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IHJlcy5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXMubXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbG9zZXN0KFwidHJcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogcmVzLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcInN1Ym1pdFwiLCBcImZvcm1bbmFtZT1jb25maXJtLWl0ZW1dXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/XCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJDb250aW51ZVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlU3VibWl0QnV0dG9ucygkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwiY2xpY2tcIiwgXCJhW25hbWU9Y29uZmlybS1pdGVtXVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGQgYW4gJ2FyZSB5b3Ugc3VyZScgcG9wLXVwIHRvIGFueSBidXR0b24vbGlua1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/XCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJDb250aW51ZVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJpbmZvXCIsXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgd2luZG93LmxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIC8vIFJlbWVtYmVyIHRhYiBvbiBwYWdlIGxvYWRcbiAgICAkKCdhW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBhW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScpLm9uKFxuICAgICAgICBcInNob3duLmJzLnRhYlwiLFxuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IGhhc2ggPSAkKGUudGFyZ2V0KS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlID9cbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBoYXNoKSA6XG4gICAgICAgICAgICAgICAgKGxvY2F0aW9uLmhhc2ggPSBoYXNoKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGlmIChoYXNoKSB7XG4gICAgICAgICQoJy5uYXYtbGlua1tocmVmPVwiJyArIGhhc2ggKyAnXCJdJykudGFiKFwic2hvd1wiKTtcbiAgICB9XG5cbiAgICAvLyBFbmFibGUgdG9vbHRpcHMgZXZlcnl3aGVyZVxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG59KShqUXVlcnkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInNlbGYiLCJhZG1pbmx0ZSIsIkNvbnRyb2xTaWRlYmFyIiwiJCIsIk5BTUUiLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwiRXZlbnQiLCJDT0xMQVBTRUQiLCJFWFBBTkRFRCIsIlNlbGVjdG9yIiwiQ09OVFJPTF9TSURFQkFSIiwiQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQiLCJEQVRBX1RPR0dMRSIsIkNPTlRFTlQiLCJIRUFERVIiLCJGT09URVIiLCJDbGFzc05hbWUiLCJDT05UUk9MX1NJREVCQVJfQU5JTUFURSIsIkNPTlRST0xfU0lERUJBUl9PUEVOIiwiQ09OVFJPTF9TSURFQkFSX1NMSURFIiwiTEFZT1VUX0ZJWEVEIiwiTkFWQkFSX0ZJWEVEIiwiTkFWQkFSX1NNX0ZJWEVEIiwiTkFWQkFSX01EX0ZJWEVEIiwiTkFWQkFSX0xHX0ZJWEVEIiwiTkFWQkFSX1hMX0ZJWEVEIiwiRk9PVEVSX0ZJWEVEIiwiRk9PVEVSX1NNX0ZJWEVEIiwiRk9PVEVSX01EX0ZJWEVEIiwiRk9PVEVSX0xHX0ZJWEVEIiwiRk9PVEVSX1hMX0ZJWEVEIiwiRGVmYXVsdCIsImNvbnRyb2xzaWRlYmFyU2xpZGUiLCJzY3JvbGxiYXJUaGVtZSIsInNjcm9sbGJhckF1dG9IaWRlIiwiZWxlbWVudCIsImNvbmZpZyIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIl9pbml0IiwiX3Byb3RvIiwicHJvdG90eXBlIiwiY29sbGFwc2UiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGVsYXkiLCJxdWV1ZSIsImhpZGUiLCJkZXF1ZXVlIiwiY29sbGFwc2VkRXZlbnQiLCJ0cmlnZ2VyIiwic2hvdyIsImV4cGFuZGVkRXZlbnQiLCJ0b2dnbGUiLCJzaG91bGRDbG9zZSIsImhhc0NsYXNzIiwiX3RoaXMiLCJfZml4SGVpZ2h0IiwiX2ZpeFNjcm9sbEhlaWdodCIsIndpbmRvdyIsInJlc2l6ZSIsInNjcm9sbCIsImhlaWdodHMiLCJkb2N1bWVudCIsImhlaWdodCIsImhlYWRlciIsIm91dGVySGVpZ2h0IiwiZm9vdGVyIiwicG9zaXRpb25zIiwiYm90dG9tIiwiTWF0aCIsImFicyIsInNjcm9sbFRvcCIsInRvcCIsIm5hdmJhckZpeGVkIiwiZm9vdGVyRml4ZWQiLCJjc3MiLCJzaWRlYmFySGVpZ2h0Iiwib3ZlcmxheVNjcm9sbGJhcnMiLCJjbGFzc05hbWUiLCJzaXplQXV0b0NhcGFibGUiLCJzY3JvbGxiYXJzIiwiYXV0b0hpZGUiLCJjbGlja1Njcm9sbGluZyIsIl9qUXVlcnlJbnRlcmZhY2UiLCJvcGVyYXRpb24iLCJlYWNoIiwiZGF0YSIsIl9vcHRpb25zIiwiZXh0ZW5kIiwiRXJyb3IiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYWxsIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwialF1ZXJ5IiwiTGF5b3V0IiwiTUFJTl9TSURFQkFSIiwiU0lERUJBUiIsIkJSQU5EIiwiQ09OVEVOVF9IRUFERVIiLCJXUkFQUEVSIiwiQ09OVFJPTF9TSURFQkFSX0JUTiIsIlBVU0hNRU5VX0JUTiIsIkxPR0lOX0JPWCIsIlJFR0lTVEVSX0JPWCIsIkhPTEQiLCJDT05URU5UX0ZJWEVEIiwiU0lERUJBUl9GT0NVU0VEIiwiTE9HSU5fUEFHRSIsIlJFR0lTVEVSX1BBR0UiLCJDT05UUk9MX1NJREVCQVJfU0xJREVfT1BFTiIsInBhbmVsQXV0b0hlaWdodCIsImxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0IiwiZml4TGF5b3V0SGVpZ2h0IiwiZXh0cmEiLCJjb250cm9sX3NpZGViYXIiLCJsZW5ndGgiLCJzaWRlYmFyIiwibWF4IiwiX21heCIsIm9mZnNldCIsIl9pc0Zvb3RlckZpeGVkIiwicGFyc2VGbG9hdCIsImZpeExvZ2luUmVnaXN0ZXJIZWlnaHQiLCJib3hfaGVpZ2h0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwic2V0SW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwibnVtYmVycyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiUHVzaE1lbnUiLCJTSE9XTiIsImF1dG9Db2xsYXBzZVNpemUiLCJlbmFibGVSZW1lbWJlciIsIm5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkIiwiVE9HR0xFX0JVVFRPTiIsIlNJREVCQVJfTUlOSSIsIlNJREVCQVJfQ09MTEFQU0VEIiwiQk9EWSIsIk9WRVJMQVkiLCJPUEVOIiwiQ0xPU0VEIiwib3B0aW9ucyIsIl9hZGRPdmVybGF5IiwiZXhwYW5kIiwid2lkdGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2hvd25FdmVudCIsImF1dG9Db2xsYXBzZSIsInJlbWVtYmVyIiwidG9nZ2xlU3RhdGUiLCJnZXRJdGVtIiwiX3RoaXMyIiwib3ZlcmxheSIsImlkIiwiYXBwZW5kIiwibWF0Y2giLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsIlRyZWV2aWV3IiwiU0VMRUNURUQiLCJMT0FEX0RBVEFfQVBJIiwiTEkiLCJMSU5LIiwiVFJFRVZJRVdfTUVOVSIsIkRBVEFfV0lER0VUIiwiYW5pbWF0aW9uU3BlZWQiLCJhY2NvcmRpb24iLCJleHBhbmRTaWRlYmFyIiwic2lkZWJhckJ1dHRvblNlbGVjdG9yIiwiaW5pdCIsIl9zZXR1cExpc3RlbmVycyIsInRyZWV2aWV3TWVudSIsInBhcmVudExpIiwib3Blbk1lbnVMaSIsInNpYmxpbmdzIiwiZmlyc3QiLCJvcGVuVHJlZXZpZXciLCJmaW5kIiwic3RvcCIsInNsaWRlRG93biIsIl9leHBhbmRTaWRlYmFyIiwic2xpZGVVcCIsIiRyZWxhdGl2ZVRhcmdldCIsIiRwYXJlbnQiLCJwYXJlbnQiLCJpcyIsInBhcmVudHMiLCJpc09wZW4iLCJfdGhpczMiLCJEaXJlY3RDaGF0IiwiVE9HR0xFRCIsIkRJUkVDVF9DSEFUIiwiRElSRUNUX0NIQVRfT1BFTiIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlZEV2ZW50IiwiVG9kb0xpc3QiLCJUT0RPX0xJU1RfRE9ORSIsIm9uQ2hlY2siLCJpdGVtIiwib25VbkNoZWNrIiwicHJvcCIsInVuQ2hlY2siLCJjaGVjayIsInRoYXQiLCJ0YXJnZXQiLCJDYXJkV2lkZ2V0IiwiTUFYSU1JWkVEIiwiTUlOSU1JWkVEIiwiUkVNT1ZFRCIsIkNBUkQiLCJDT0xMQVBTSU5HIiwiRVhQQU5ESU5HIiwiV0FTX0NPTExBUFNFRCIsIkRBVEFfUkVNT1ZFIiwiREFUQV9DT0xMQVBTRSIsIkRBVEFfTUFYSU1JWkUiLCJDQVJEX0hFQURFUiIsIkNBUkRfQk9EWSIsIkNBUkRfRk9PVEVSIiwiY29sbGFwc2VUcmlnZ2VyIiwicmVtb3ZlVHJpZ2dlciIsIm1heGltaXplVHJpZ2dlciIsImNvbGxhcHNlSWNvbiIsImV4cGFuZEljb24iLCJtYXhpbWl6ZUljb24iLCJtaW5pbWl6ZUljb24iLCJzZXR0aW5ncyIsIl9wYXJlbnQiLCJfc2V0dGluZ3MiLCJjaGlsZHJlbiIsImNvbGxhcHNlZCIsImV4cGFuZGVkIiwicmVtb3ZlIiwicmVtb3ZlZCIsIm1heGltaXplIiwibWF4aW1pemVkIiwibWluaW1pemUiLCJzdHlsZSIsInRvZ2dsZU1heGltaXplIiwiY2FyZCIsImNsaWNrIiwiQ2FyZFJlZnJlc2giLCJMT0FERUQiLCJPVkVSTEFZX0FEREVEIiwiT1ZFUkxBWV9SRU1PVkVEIiwiREFUQV9SRUZSRVNIIiwic291cmNlIiwic291cmNlU2VsZWN0b3IiLCJwYXJhbXMiLCJjb250ZW50IiwibG9hZEluQ29udGVudCIsImxvYWRPbkluaXQiLCJyZXNwb25zZVR5cGUiLCJvdmVybGF5VGVtcGxhdGUiLCJvbkxvYWRTdGFydCIsIm9uTG9hZERvbmUiLCJyZXNwb25zZSIsIl9vdmVybGF5IiwibG9hZCIsImdldCIsImh0bWwiLCJfcmVtb3ZlT3ZlcmxheSIsImJpbmQiLCJsb2FkZWRFdmVudCIsIm92ZXJsYXlBZGRlZEV2ZW50Iiwib3ZlcmxheVJlbW92ZWRFdmVudCIsInJlYWR5IiwiRHJvcGRvd24iLCJOQVZCQVIiLCJEUk9QRE9XTl9NRU5VIiwiRFJPUERPV05fTUVOVV9BQ1RJVkUiLCJEUk9QRE9XTl9UT0dHTEUiLCJEUk9QRE9XTl9IT1ZFUiIsIkRST1BET1dOX1JJR0hUIiwidG9nZ2xlU3VibWVudSIsIm5leHQiLCJlIiwiZml4UG9zaXRpb24iLCJlbG0iLCJ3aW5kb3dXaWR0aCIsInZpc2libGVQYXJ0IiwibGVmdCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvYXN0cyIsIklOSVQiLCJDUkVBVEVEIiwiQ09OVEFJTkVSX1RPUF9SSUdIVCIsIkNPTlRBSU5FUl9UT1BfTEVGVCIsIkNPTlRBSU5FUl9CT1RUT01fUklHSFQiLCJDT05UQUlORVJfQk9UVE9NX0xFRlQiLCJUT1BfUklHSFQiLCJUT1BfTEVGVCIsIkJPVFRPTV9SSUdIVCIsIkJPVFRPTV9MRUZUIiwiRkFERSIsIlBvc2l0aW9uIiwicG9zaXRpb24iLCJmaXhlZCIsImF1dG9oaWRlIiwiYXV0b3JlbW92ZSIsImZhZGUiLCJpY29uIiwiaW1hZ2UiLCJpbWFnZUFsdCIsImltYWdlSGVpZ2h0IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNsb3NlIiwiYm9keSIsIl9wcmVwYXJlQ29udGFpbmVyIiwiaW5pdEV2ZW50IiwiY3JlYXRlIiwidG9hc3QiLCJ0b2FzdF9oZWFkZXIiLCJ0b2FzdF9pbWFnZSIsImF0dHIiLCJ0b2FzdF9jbG9zZSIsIl9nZXRDb250YWluZXJJZCIsInByZXBlbmQiLCJjcmVhdGVkRXZlbnQiLCJyZW1vdmVkRXZlbnQiLCJjb250YWluZXIiLCJyZXBsYWNlIiwib3B0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlBvcHBlciIsInJlcXVpcmUiLCJTd2FsIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiJHNpZGViYXIiLCIkY29udGFpbmVyIiwibmF2YmFyX2Rhcmtfc2tpbnMiLCJuYXZiYXJfbGlnaHRfc2tpbnMiLCIkbm9fYm9yZGVyX2NoZWNrYm94IiwidHlwZSIsImNoZWNrZWQiLCIkbm9fYm9yZGVyX2NvbnRhaW5lciIsIiR0ZXh0X3NtX2JvZHlfY2hlY2tib3giLCIkdGV4dF9zbV9ib2R5X2NvbnRhaW5lciIsIiR0ZXh0X3NtX2hlYWRlcl9jaGVja2JveCIsIiR0ZXh0X3NtX2hlYWRlcl9jb250YWluZXIiLCIkdGV4dF9zbV9zaWRlYmFyX2NoZWNrYm94IiwiJHRleHRfc21fc2lkZWJhcl9jb250YWluZXIiLCIkdGV4dF9zbV9mb290ZXJfY2hlY2tib3giLCIkdGV4dF9zbV9mb290ZXJfY29udGFpbmVyIiwiJGZsYXRfc2lkZWJhcl9jaGVja2JveCIsIiRmbGF0X3NpZGViYXJfY29udGFpbmVyIiwiJGxlZ2FjeV9zaWRlYmFyX2NoZWNrYm94IiwiJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lciIsIiRjb21wYWN0X3NpZGViYXJfY2hlY2tib3giLCIkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lciIsIiRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jaGVja2JveCIsIiRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jb250YWluZXIiLCIkbm9fZXhwYW5kX3NpZGViYXJfY2hlY2tib3giLCIkbm9fZXhwYW5kX3NpZGViYXJfY29udGFpbmVyIiwiJHRleHRfc21fYnJhbmRfY2hlY2tib3giLCIkdGV4dF9zbV9icmFuZF9jb250YWluZXIiLCIkbmF2YmFyX3ZhcmlhbnRzIiwibmF2YmFyX2FsbF9jb2xvcnMiLCJjb25jYXQiLCIkbmF2YmFyX3ZhcmlhbnRzX2NvbG9ycyIsImNyZWF0ZVNraW5CbG9jayIsImNvbG9yIiwiJG1haW5faGVhZGVyIiwibWFwIiwiaW5kZXhPZiIsInNpZGViYXJfY29sb3JzIiwiYWNjZW50X2NvbG9ycyIsInNpZGViYXJfc2tpbnMiLCIkYWNjZW50X3ZhcmlhbnRzIiwiYWNjZW50X2NsYXNzIiwiJGJvZHkiLCJza2luIiwiJHNpZGViYXJfdmFyaWFudHNfZGFyayIsInNpZGViYXJfY2xhc3MiLCIkc2lkZWJhcl92YXJpYW50c19saWdodCIsImxvZ29fc2tpbnMiLCIkbG9nb192YXJpYW50cyIsIiRjbGVhcl9idG4iLCJocmVmIiwidGV4dCIsIiRsb2dvIiwiY29sb3JzIiwiY2FsbGJhY2siLCIkYmxvY2siLCIkY29sb3IiLCJqb2luIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJvcGFjaXR5IiwiY3Vyc29yIiwiaG92ZXIiLCJpbWFnZV9lbGVtZW50IiwicG9wdXBDZW50ZXIiLCJ1cmwiLCJ3IiwiaCIsImR1YWxTY3JlZW5MZWZ0Iiwic2NyZWVuTGVmdCIsInVuZGVmaW5lZCIsInNjcmVlblgiLCJkdWFsU2NyZWVuVG9wIiwic2NyZWVuVG9wIiwic2NyZWVuWSIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInNjcmVlbiIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3lzdGVtWm9vbSIsImF2YWlsV2lkdGgiLCJuZXdXaW5kb3ciLCJvcGVuIiwiZm9jdXMiLCJzd2FsX2FsZXJ0IiwiYWxlcnRfaWNvbiIsIm1zZyIsImZpcmUiLCJEYXRhVGFibGUiLCJvcmRlcmluZyIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwiZml4ZWRDb2x1bW5zIiwiZG9tIiwiYnV0dG9ucyIsInNlbGVjdG9yIiwidmFsIiwidHJJZCIsInJvdXRlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiYWpheCIsInN1Y2Nlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwicXJtb2RhbCIsInBvc3QiLCJtb2RhbCIsInBlcm1pc3Npb25UcmVlIiwicmVtb3ZlQXR0ciIsImRpc2FibGVTdWJtaXRCdXR0b25zIiwiZm9ybSIsImVuYWJsZVN1Ym1pdEJ1dHRvbnMiLCJzdWJtaXQiLCJjYW5jZWxCdXR0b25UZXh0IiwicmVzIiwic3RhdHVzIiwiYXNzaWduIiwiaGFzaCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0YWIiLCJ0b29sdGlwIl0sInNvdXJjZVJvb3QiOiIifQ==