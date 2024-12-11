import {
  NgIf,
  NgStyle
} from "./chunk-ERBSAO3V.js";
import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  auditTime,
  from,
  fromEvent,
  isDevMode,
  merge,
  setClassMetadata,
  take,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-4CNRQKIC.js";

// node_modules/@progress/kendo-common/dist/es/util.js
var isWindowAvailable = function() {
  return typeof window !== "undefined";
};

// node_modules/@progress/kendo-common/dist/es/support.js
var agentRxs = {
  wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
  fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
  android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)(\.(\d+(\.\d+)?))?/,
  iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
  ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
  meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
  webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
  blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
  playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
  windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
  tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
  sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
  ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
};
var osRxs = {
  ios: /^i(phone|pad|pod)$/i,
  android: /^android|fire$/i,
  blackberry: /^blackberry|playbook/i,
  windows: /windows/,
  wp: /wp/,
  flat: /sailfish|ffos|tizen/i,
  meego: /meego/
};
var desktopBrowserRxs = {
  edge: /(edge)[ \/]([\w.]+)/i,
  webkit: /(chrome)[ \/]([\w.]+)/i,
  safari: /(webkit)[ \/]([\w.]+)/i,
  opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
  msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
  mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
var mobileBrowserRxs = {
  omini: /Opera\sMini/i,
  omobile: /Opera\sMobi/i,
  firefox: /Firefox|Fennec/i,
  mobilesafari: /version\/.*safari/i,
  ie: /MSIE|Windows\sPhone/i,
  chrome: /chrome|crios/i,
  webkit: /webkit/i
};
var testRx = function(agent, rxs, dflt) {
  for (var rx in rxs) {
    if (rxs.hasOwnProperty(rx) && rxs[rx].test(agent)) {
      return rx;
    }
  }
  return dflt !== void 0 ? dflt : agent;
};
var detectMobileOS = function(ua) {
  var minorVersion;
  var match = [];
  for (var agent in agentRxs) {
    if (agentRxs.hasOwnProperty(agent)) {
      match = ua.match(agentRxs[agent]);
      if (!match) {
        continue;
      }
      if (agent === "windows" && "plugins" in window.navigator) {
        return null;
      }
      var os = {};
      os.device = agent;
      os.browser = testRx(ua, mobileBrowserRxs, "default");
      os.name = testRx(agent, osRxs);
      os[os.name] = true;
      os.majorVersion = match[2];
      os.minorVersion = match[3] ? match[3].replace("_", ".") : ".0";
      minorVersion = os.minorVersion.replace(".", "").substr(0, 2);
      os.flatVersion = os.majorVersion + minorVersion + new Array(3 - (minorVersion.length < 3 ? minorVersion.length : 2)).join("0");
      os.cordova = typeof window.PhoneGap !== void 0 || typeof window.cordova !== void 0;
      os.appMode = window.navigator.standalone || /file|local|wmapp/.test(window.location.protocol) || os.cordova;
      return os;
    }
  }
  return null;
};
var detectDesktopBrowser = function(ua) {
  var browserInfo = null;
  var match = [];
  for (var agent in desktopBrowserRxs) {
    if (desktopBrowserRxs.hasOwnProperty(agent)) {
      match = ua.match(desktopBrowserRxs[agent]);
      if (match) {
        browserInfo = {};
        browserInfo[agent] = true;
        browserInfo[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browserInfo.version = parseInt(document.documentMode || match[2], 10);
        break;
      }
    }
  }
  return browserInfo;
};
var userAgent = isWindowAvailable() && window.navigator ? window.navigator.userAgent : null;
var browser = userAgent ? detectDesktopBrowser(userAgent) : null;
var mobileOS = userAgent ? detectMobileOS(userAgent) : null;
var touch = isWindowAvailable() && "ontouchstart" in window;
var msPointers = browser && !browser.chrome && window.MSPointerEvent;
var pointers = browser && !browser.chrome && window.PointerEvent;
var touchEnabled = mobileOS && (touch || msPointers || pointers);

// node_modules/@progress/kendo-common/dist/es/accessors/field-list.js
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
function fieldList(field) {
  var fields = [];
  field.replace(FIELD_REGEX, function(_match, index, indexAccessor, fieldName) {
    fields.push(index !== void 0 ? index : indexAccessor || fieldName);
  });
  return fields;
}

// node_modules/@progress/kendo-common/dist/es/accessors/getter.js
var getterCache = {};
getterCache["undefined"] = function(obj) {
  return obj;
};
function getter(field) {
  if (getterCache[field]) {
    return getterCache[field];
  }
  var fields = fieldList(field);
  getterCache[field] = function(obj) {
    var result = obj;
    for (var idx = 0; idx < fields.length && result; idx++) {
      result = result[fields[idx]];
    }
    return result;
  };
  return getterCache[field];
}

// node_modules/@progress/kendo-common/dist/es/accessors/setter.js
var setterCache = {};
setterCache["undefined"] = function(obj) {
  return obj;
};
var defaultValue = function(nextField, options) {
  return options && options.arrays && !isNaN(Number(nextField)) ? [] : {};
};
function setter(field) {
  if (setterCache[field]) {
    return setterCache[field];
  }
  var fields = fieldList(field);
  setterCache[field] = function(obj, value, options) {
    var root = obj;
    var depth = fields.length - 1;
    for (var idx = 0; idx < depth && root; idx++) {
      root = root[fields[idx]] = root[fields[idx]] || defaultValue(fields[idx + 1], options);
    }
    root[fields[depth]] = value;
  };
  return setterCache[field];
}

// node_modules/@progress/kendo-draggable/dist/es/main.js
var proxy = function(a, b) {
  return function(e) {
    return b(a(e));
  };
};
var bind = function(el, event, callback) {
  return el.addEventListener && el.addEventListener(event, callback);
};
var unbind = function(el, event, callback) {
  return el && el.removeEventListener && el.removeEventListener(event, callback);
};
var noop = function() {
};
var preventDefault = function(e) {
  return e.preventDefault();
};
var touchRegExp = /touch/;
var IGNORE_MOUSE_TIMEOUT = 2e3;
function normalizeEvent(e) {
  if (e.type.match(touchRegExp)) {
    return {
      pageX: e.changedTouches[0].pageX,
      pageY: e.changedTouches[0].pageY,
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY,
      type: e.type,
      originalEvent: e,
      isTouch: true
    };
  }
  return {
    pageX: e.pageX,
    pageY: e.pageY,
    clientX: e.clientX,
    clientY: e.clientY,
    offsetX: e.offsetX,
    offsetY: e.offsetY,
    type: e.type,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    originalEvent: e
  };
}
var Draggable = function Draggable2(ref) {
  var this$1 = this;
  var press = ref.press;
  if (press === void 0) press = noop;
  var drag = ref.drag;
  if (drag === void 0) drag = noop;
  var release = ref.release;
  if (release === void 0) release = noop;
  var mouseOnly = ref.mouseOnly;
  if (mouseOnly === void 0) mouseOnly = false;
  this._pressHandler = proxy(normalizeEvent, press);
  this._dragHandler = proxy(normalizeEvent, drag);
  this._releaseHandler = proxy(normalizeEvent, release);
  this._ignoreMouse = false;
  this._mouseOnly = mouseOnly;
  this._touchstart = function(e) {
    if (e.touches.length === 1) {
      this$1._pressHandler(e);
    }
  };
  this._touchmove = function(e) {
    if (e.touches.length === 1) {
      this$1._dragHandler(e);
    }
  };
  this._touchend = function(e) {
    if (e.touches.length === 0 && e.changedTouches.length === 1) {
      this$1._releaseHandler(e);
      this$1._ignoreMouse = true;
      setTimeout(this$1._restoreMouse, IGNORE_MOUSE_TIMEOUT);
    }
  };
  this._restoreMouse = function() {
    this$1._ignoreMouse = false;
  };
  this._mousedown = function(e) {
    var which = e.which;
    if (which && which > 1 || this$1._ignoreMouse) {
      return;
    }
    bind(this$1.document, "mousemove", this$1._mousemove);
    bind(this$1.document, "mouseup", this$1._mouseup);
    this$1._pressHandler(e);
  };
  this._mousemove = function(e) {
    this$1._dragHandler(e);
  };
  this._mouseup = function(e) {
    unbind(this$1.document, "mousemove", this$1._mousemove);
    unbind(this$1.document, "mouseup", this$1._mouseup);
    this$1._releaseHandler(e);
  };
  this._pointerdown = function(e) {
    if (e.isPrimary && e.button === 0) {
      bind(this$1.document, "pointermove", this$1._pointermove);
      bind(this$1.document, "pointerup", this$1._pointerup);
      bind(this$1.document, "pointercancel", this$1._pointerup);
      bind(this$1.document, "contextmenu", preventDefault);
      this$1._pressHandler(e);
    }
  };
  this._pointermove = function(e) {
    if (e.isPrimary) {
      this$1._dragHandler(e);
    }
  };
  this._pointerup = function(e) {
    if (e.isPrimary) {
      unbind(this$1.document, "pointermove", this$1._pointermove);
      unbind(this$1.document, "pointerup", this$1._pointerup);
      unbind(this$1.document, "pointercancel", this$1._pointerup);
      unbind(this$1.document, "contextmenu", preventDefault);
      this$1._releaseHandler(e);
    }
  };
};
var prototypeAccessors = {
  document: {
    configurable: true
  }
};
Draggable.supportPointerEvent = function supportPointerEvent() {
  return typeof window !== "undefined" && window.PointerEvent;
};
prototypeAccessors.document.get = function() {
  return this._element ? this._element.ownerDocument : document;
};
Draggable.prototype.cancelDrag = function cancelDrag() {
  unbind(this.document, "pointermove", this._pointermove);
  unbind(this.document, "pointerup", this._pointerup);
  unbind(this.document, "pointercancel", this._pointerup);
};
Draggable.prototype.bindTo = function bindTo(element) {
  if (element === this._element) {
    return;
  }
  if (this._element) {
    this._unbindFromCurrent();
  }
  this._element = element;
  this._bindToCurrent();
};
Draggable.prototype._bindToCurrent = function _bindToCurrent() {
  var element = this._element;
  if (this._usePointers()) {
    bind(element, "pointerdown", this._pointerdown);
    return;
  }
  bind(element, "mousedown", this._mousedown);
  if (!this._mouseOnly) {
    bind(element, "touchstart", this._touchstart);
    bind(element, "touchmove", this._touchmove);
    bind(element, "touchend", this._touchend);
  }
};
Draggable.prototype._unbindFromCurrent = function _unbindFromCurrent() {
  var element = this._element;
  if (this._usePointers()) {
    unbind(element, "pointerdown", this._pointerdown);
    unbind(this.document, "pointermove", this._pointermove);
    unbind(this.document, "pointerup", this._pointerup);
    unbind(this.document, "contextmenu", preventDefault);
    unbind(this.document, "pointercancel", this._pointerup);
    return;
  }
  unbind(element, "mousedown", this._mousedown);
  if (!this._mouseOnly) {
    unbind(element, "touchstart", this._touchstart);
    unbind(element, "touchmove", this._touchmove);
    unbind(element, "touchend", this._touchend);
  }
};
Draggable.prototype._usePointers = function _usePointers() {
  return !this._mouseOnly && Draggable.supportPointerEvent();
};
Draggable.prototype.update = function update(ref) {
  var press = ref.press;
  if (press === void 0) press = noop;
  var drag = ref.drag;
  if (drag === void 0) drag = noop;
  var release = ref.release;
  if (release === void 0) release = noop;
  var mouseOnly = ref.mouseOnly;
  if (mouseOnly === void 0) mouseOnly = false;
  this._pressHandler = proxy(normalizeEvent, press);
  this._dragHandler = proxy(normalizeEvent, drag);
  this._releaseHandler = proxy(normalizeEvent, release);
  this._mouseOnly = mouseOnly;
};
Draggable.prototype.destroy = function destroy() {
  this._unbindFromCurrent();
  this._element = null;
};
Object.defineProperties(Draggable.prototype, prototypeAccessors);
Draggable.default = Draggable;

// node_modules/@progress/kendo-angular-common/fesm2020/progress-kendo-angular-common.mjs
var _c0 = ["banner"];
var _c1 = ["kendoWatermarkOverlay", ""];
var _c2 = () => ({
  display: "flex",
  alignSelf: "center",
  marginRight: "8px"
});
var _c3 = () => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "24px"
});
var _c4 = () => ({
  marginRight: "8px",
  display: "flex"
});
function WatermarkOverlayComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2, 0)(2, "span", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 3);
    ɵɵelement(4, "path", 4);
    ɵɵelementEnd()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(5, "span");
    ɵɵtext(6, "No valid license found for Kendo UI for Angular. Learn how to activate your license.");
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 2)(8, "a", 5)(9, "button", 6);
    ɵɵnamespaceSVG();
    ɵɵelementStart(10, "svg", 3);
    ɵɵelement(11, "path", 7);
    ɵɵelementEnd()()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(12, "button", 8);
    ɵɵlistener("click", function WatermarkOverlayComponent_div_0_Template_button_click_12_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeBanner());
    });
    ɵɵnamespaceSVG();
    ɵɵelementStart(13, "svg", 3);
    ɵɵelement(14, "path", 9);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.bannerStyles);
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction0(7, _c2));
    ɵɵadvance(5);
    ɵɵproperty("ngStyle", ɵɵpureFunction0(8, _c3));
    ɵɵadvance();
    ɵɵproperty("href", ctx_r1.licenseKeyUrl, ɵɵsanitizeUrl)("ngStyle", ɵɵpureFunction0(9, _c4));
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.buttonStyles);
    ɵɵadvance(3);
    ɵɵproperty("ngStyle", ctx_r1.buttonStyles);
  }
}
var isDocumentAvailable = () => typeof document !== "undefined";
var isChanged = (propertyName, changes, skipFirstChange = true) => typeof changes[propertyName] !== "undefined" && (!changes[propertyName].isFirstChange() || !skipFirstChange) && changes[propertyName].previousValue !== changes[propertyName].currentValue;
var anyChanged = (propertyNames, changes, skipFirstChange = true) => propertyNames.some((name) => isChanged(name, changes, skipFirstChange));
var hasObservers = (emitter) => emitter && emitter.observers.length > 0;
var guid = () => {
  let id = "";
  for (let i = 0; i < 32; i++) {
    const random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += "-";
    }
    id += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }
  return id;
};
var isSafari = (userAgent2) => {
  return detectDesktopBrowser(userAgent2).safari || detectMobileOS(userAgent2) && detectMobileOS(userAgent2).browser === "mobilesafari";
};
var isFirefox = (userAgent2) => {
  const desktopBrowser = detectDesktopBrowser(userAgent2);
  const mobileOS2 = detectMobileOS(userAgent2);
  return desktopBrowser && desktopBrowser.mozilla || mobileOS2 && mobileOS2.browser === "firefox";
};
var isPresent = (value) => value !== null && value !== void 0;
var isObjectPresent = (value) => {
  return isObject(value) && Object.keys(value).length > 0;
};
var isString = (value) => value instanceof String || typeof value === "string";
var isObject = (value) => isPresent(value) && !Array.isArray(value) && typeof value === "object";
var splitStringToArray = (value) => value.trim().replace(/\s+/g, " ").split(" ");
var parseCSSClassNames = (value) => {
  if (Array.isArray(value)) {
    return parseArrayClassNames(value);
  }
  if (isObject(value)) {
    return parseObjectClassNames(value);
  }
  if (isString(value)) {
    return parseStringClassNames(value);
  }
};
var parseObjectClassNames = (value) => {
  const classes = [];
  Object.keys(value).forEach((className) => {
    const currentClassName = splitStringToArray(className);
    if (value[className] && currentClassName.length) {
      classes.push(...currentClassName);
    }
  });
  return classes;
};
var parseStringClassNames = (value) => {
  const classes = [];
  const classesArray = splitStringToArray(value);
  classesArray.forEach((className) => {
    classes.push(className);
  });
  return classes;
};
var parseArrayClassNames = (value) => {
  const classes = [];
  value.forEach((className) => {
    const current = splitStringToArray(className);
    if (current[0]) {
      classes.push(...current);
    }
  });
  return classes;
};
var setHTMLAttributes = (attributes, renderer, element, zone) => {
  zone ? zone.onStable.pipe(take(1)).subscribe(() => {
    applyAttributes(attributes, renderer, element);
  }) : applyAttributes(attributes, renderer, element);
};
var removeHTMLAttributes = (attributes, renderer, element) => {
  for (const attribute in attributes) {
    if (attribute) {
      renderer.removeAttribute(element, attribute);
    }
  }
};
var parseAttributes = (target, source) => {
  const targetObj = target;
  Object.keys(source).forEach((key) => {
    delete targetObj[key];
  });
  return targetObj;
};
var applyAttributes = (attributes, renderer, element) => {
  for (const attribute in attributes) {
    if (attribute && isPresent(attributes[attribute])) {
      renderer.setAttribute(element, attribute, attributes[attribute]);
    }
  }
};
var isControlRequired = (control) => {
  if (!control?.validator) {
    return false;
  }
  return control.validator(control)?.hasOwnProperty("required");
};
var DraggableDirective = class {
  constructor(element, ngZone) {
    this.element = element;
    this.ngZone = ngZone;
    this.enableDrag = true;
    this.kendoPress = new EventEmitter();
    this.kendoDrag = new EventEmitter();
    this.kendoRelease = new EventEmitter();
  }
  ngOnInit() {
    this.toggleDraggable();
  }
  ngOnChanges(changes) {
    if (isChanged("enableDrag", changes)) {
      this.toggleDraggable();
    }
  }
  ngOnDestroy() {
    this.destroyDraggable();
  }
  toggleDraggable() {
    if (isDocumentAvailable()) {
      this.destroyDraggable();
      if (this.enableDrag) {
        this.draggable = new Draggable({
          drag: (e) => this.kendoDrag.next(e),
          press: (e) => this.kendoPress.next(e),
          release: (e) => this.kendoRelease.next(e)
        });
        this.ngZone.runOutsideAngular(() => this.draggable?.bindTo(this.element.nativeElement));
      }
    }
  }
  destroyDraggable() {
    if (this.draggable) {
      this.draggable.destroy();
      this.draggable = void 0;
    }
  }
};
DraggableDirective.ɵfac = function DraggableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DraggableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
DraggableDirective.ɵdir = ɵɵdefineDirective({
  type: DraggableDirective,
  selectors: [["", "kendoDraggable", ""]],
  inputs: {
    enableDrag: "enableDrag"
  },
  outputs: {
    kendoPress: "kendoPress",
    kendoDrag: "kendoDrag",
    kendoRelease: "kendoRelease"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDraggable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    enableDrag: [{
      type: Input
    }],
    kendoPress: [{
      type: Output
    }],
    kendoDrag: [{
      type: Output
    }],
    kendoRelease: [{
      type: Output
    }]
  });
})();
var DraggableModule = class {
};
DraggableModule.ɵfac = function DraggableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DraggableModule)();
};
DraggableModule.ɵmod = ɵɵdefineNgModule({
  type: DraggableModule,
  imports: [DraggableDirective],
  exports: [DraggableDirective]
});
DraggableModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableModule, [{
    type: NgModule,
    args: [{
      exports: [DraggableDirective],
      imports: [DraggableDirective]
    }]
  }], null, null);
})();
var closestInScope = (node, predicate, scope) => {
  while (node && node !== scope && !predicate(node)) {
    node = node.parentNode;
  }
  if (node !== scope) {
    return node;
  }
  return void 0;
};
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var contains = (parent, node, matchSelf = false) => {
  const outside = !closest(node, (child) => child === parent);
  if (outside) {
    return false;
  }
  const el = closest(node, (child) => child === node);
  return el && (matchSelf || el !== parent);
};
var findElement = (node, predicate, matchSelf = true) => {
  if (!node) {
    return;
  }
  if (matchSelf && predicate(node)) {
    return node;
  }
  node = node.firstChild;
  while (node) {
    if (node.nodeType === 1) {
      const element = findElement(node, predicate);
      if (element) {
        return element;
      }
    }
    node = node.nextSibling;
  }
};
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var isFocusable = (element) => {
  if (!element.tagName) {
    return false;
  }
  const tagName = element.tagName.toLowerCase();
  const hasTabIndex = Boolean(element.getAttribute("tabIndex"));
  const focusable = !element.disabled && focusableRegex.test(tagName);
  return focusable || hasTabIndex;
};
var isVisible = (element) => {
  const rect = element.getBoundingClientRect();
  const hasSize = rect.width > 0 && rect.height > 0;
  const hasPosition = rect.x !== 0 && rect.y !== 0;
  return (hasSize || hasPosition) && window.getComputedStyle(element).visibility !== "hidden";
};
var isFocusableWithTabKey = (element, checkVisibility = true) => {
  if (!isFocusable(element)) {
    return false;
  }
  const tabIndex = element.getAttribute("tabIndex");
  const visible = !checkVisibility || isVisible(element);
  return visible && tabIndex !== "-1";
};
var findFocusableChild = (element, checkVisibility = true) => {
  return findElement(element, (node) => isFocusableWithTabKey(node, checkVisibility), false);
};
var EventsOutsideAngularDirective = class {
  constructor(element, ngZone, renderer) {
    this.element = element;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.events = {};
  }
  ngOnInit() {
    if (!this.element || !this.element.nativeElement) {
      return;
    }
    const events = this.events;
    this.subscriptions = [];
    this.ngZone.runOutsideAngular(() => {
      for (const name in events) {
        if (Object.hasOwnProperty.call(events, name)) {
          this.subscriptions?.push(this.renderer.listen(this.element.nativeElement, name, this.scope ? events[name].bind(this.scope) : events[name]));
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      for (let idx = 0; idx < this.subscriptions.length; idx++) {
        this.subscriptions[idx]();
      }
      this.subscriptions = null;
    }
  }
};
EventsOutsideAngularDirective.ɵfac = function EventsOutsideAngularDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EventsOutsideAngularDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
};
EventsOutsideAngularDirective.ɵdir = ɵɵdefineDirective({
  type: EventsOutsideAngularDirective,
  selectors: [["", "kendoEventsOutsideAngular", ""]],
  inputs: {
    events: [0, "kendoEventsOutsideAngular", "events"],
    scope: "scope"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsOutsideAngularDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoEventsOutsideAngular]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    events: [{
      type: Input,
      args: ["kendoEventsOutsideAngular"]
    }],
    scope: [{
      type: Input
    }]
  });
})();
var EventsModule = class {
};
EventsModule.ɵfac = function EventsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || EventsModule)();
};
EventsModule.ɵmod = ɵɵdefineNgModule({
  type: EventsModule,
  imports: [EventsOutsideAngularDirective],
  exports: [EventsOutsideAngularDirective]
});
EventsModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsModule, [{
    type: NgModule,
    args: [{
      imports: [EventsOutsideAngularDirective],
      exports: [EventsOutsideAngularDirective]
    }]
  }], null, null);
})();
var ResizeService = class {
  constructor(resizeBatchService) {
    this.resizeBatchService = resizeBatchService;
    this.resize = new EventEmitter();
    this.acceptedSize = false;
    this.state = 0;
  }
  acceptSize(size = this.measure()) {
    this.lastWidth = size.width;
    this.lastHeight = size.height;
    this.acceptedSize = true;
  }
  checkChanges() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.state === 0) {
      this.state = 1;
      this.resizeBatchService.schedule(this, this.init);
    }
  }
  destroy() {
    this.resizeBatchService.cancel(this);
  }
  checkSize() {
    if (!this.parentElement) {
      return false;
    }
    const {
      width,
      height
    } = this.measure();
    const sameSize = width === this.lastWidth && height === this.lastHeight;
    if (sameSize) {
      return false;
    }
    this.lastWidth = width;
    this.lastHeight = height;
    this.acceptedSize = false;
    this.resize.emit();
    return true;
  }
  initSize() {
    const size = this.measure();
    this.lastWidth = size.width;
    this.lastHeight = size.height;
  }
  measure() {
    let width = 0;
    let height = 0;
    if (this.parentElement) {
      height = this.parentElement.offsetHeight;
      width = this.parentElement.offsetWidth;
    }
    return {
      height,
      width
    };
  }
};
var div = (style) => {
  const el = document.createElement("div");
  el.style.cssText = style;
  return el;
};
var computedProp = (elem, prop) => getComputedStyle(elem, null).getPropertyValue(prop);
var WRAP_STYLE = "position: absolute; display: block; left: 0; top: 0; right: 0; bottom: 0; z-index: -1;overflow: hidden; visibility: hidden;";
var EXPAND_CHILD_STYLE = "position: absolute; left: 0; top: 0; transition: 0s;";
var SHRINK_CHILD_STYLE = EXPAND_CHILD_STYLE + "width: 200%; height: 200%;";
var ResizeCompatService = class extends ResizeService {
  constructor(resizeBatchService, element, ngZone) {
    super(resizeBatchService);
    this.element = element;
    this.ngZone = ngZone;
  }
  checkChanges() {
    if (this.state === 2) {
      if (!this.resizeBatchService.isScheduled(this)) {
        this.resizeBatchService.schedule(this, this.checkSize);
      }
      return;
    }
    super.checkChanges();
  }
  destroy() {
    super.destroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.expand) {
      const element = this.element?.nativeElement;
      element.removeChild(this.expand);
      element.removeChild(this.shrink);
      this.expand.removeChild(this.expandChild);
      this.expand = this.expandChild = this.shrink = this.element = null;
    }
  }
  checkSize() {
    if (super.checkSize()) {
      this.reset();
      return true;
    }
    return false;
  }
  init() {
    const parentElement = this.parentElement = this.element?.nativeElement.parentElement;
    if (computedProp(parentElement, "position") === "static") {
      parentElement.style.position = "relative";
    }
    this.state = 2;
    this.render();
    this.reset();
    this.initSize();
    this.subscribe();
  }
  render() {
    const element = this.element?.nativeElement;
    element.style.cssText = WRAP_STYLE;
    element.setAttribute("dir", "ltr");
    this.expand = div(WRAP_STYLE);
    this.expandChild = div(EXPAND_CHILD_STYLE);
    this.expand.appendChild(this.expandChild);
    element.appendChild(this.expand);
    this.shrink = div(WRAP_STYLE);
    const shrinkChild = div(SHRINK_CHILD_STYLE);
    this.shrink.appendChild(shrinkChild);
    element.appendChild(this.shrink);
  }
  reset() {
    const expandChild = this.expandChild;
    expandChild.style.width = "100000px";
    expandChild.style.height = "100000px";
    const expand = this.expand;
    expand.scrollLeft = 1e5;
    expand.scrollTop = 1e5;
    const shrink = this.shrink;
    shrink.scrollLeft = 1e5;
    shrink.scrollTop = 1e5;
  }
  subscribe() {
    this.ngZone.runOutsideAngular(() => {
      this.subscription = merge(fromEvent(this.shrink, "scroll"), fromEvent(this.expand, "scroll")).subscribe(() => {
        this.checkSize();
      });
    });
  }
};
var HAS_OBSERVER = typeof ResizeObserver !== "undefined";
var ResizeObserverService = class extends ResizeService {
  constructor(resizeBatchService, element, ngZone) {
    super(resizeBatchService);
    this.element = element;
    this.ngZone = ngZone;
  }
  static supported() {
    return HAS_OBSERVER;
  }
  destroy() {
    super.destroy();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.parentElement = null;
  }
  init() {
    this.parentElement = this.element.nativeElement.parentElement;
    this.initSize();
    this.state = 2;
    this.ngZone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkSize();
      });
      this.resizeObserver.observe(this.parentElement);
    });
  }
};
var ResizeBatchService = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.scheduled = [];
    this.resolvedPromise = Promise.resolve(null);
    this.flush = this.flush.bind(this);
  }
  schedule(instance, method) {
    this.scheduled.push({
      instance,
      method
    });
    if (!this.subscription) {
      this.ngZone.runOutsideAngular(() => {
        this.subscription = from(this.resolvedPromise).subscribe(this.flush);
      });
    }
  }
  isScheduled(instance) {
    return Boolean(this.scheduled.find((item) => item.instance === instance));
  }
  cancel(instance) {
    const scheduled = this.scheduled;
    const count = scheduled.length;
    for (let idx = 0; idx < count; idx++) {
      if (scheduled[idx].instance === instance) {
        scheduled.splice(idx, 1);
        if (!scheduled.length) {
          this.unsubscribe();
        }
        return;
      }
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  flush() {
    this.scheduled.forEach((item) => {
      item.method.call(item.instance);
    });
    this.scheduled = [];
    this.unsubscribe();
  }
};
ResizeBatchService.ɵfac = function ResizeBatchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeBatchService)(ɵɵinject(NgZone));
};
ResizeBatchService.ɵprov = ɵɵdefineInjectable({
  token: ResizeBatchService,
  factory: ResizeBatchService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeBatchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var DEFAULT_RATE_LIMIT = 10;
var ResizeSensorComponent = class {
  constructor(resizeBatchService, element, ngZone) {
    this.rateLimit = DEFAULT_RATE_LIMIT;
    this.resize = new EventEmitter();
    const serviceType = ResizeObserverService.supported() ? ResizeObserverService : ResizeCompatService;
    this.resizeService = new serviceType(resizeBatchService, element, ngZone);
    const throttleTime = 1e3 / (this.rateLimit || DEFAULT_RATE_LIMIT);
    this.subscription = this.resizeService.resize.pipe(auditTime(throttleTime)).subscribe(() => {
      if (!this.resizeService.acceptedSize) {
        this.resize.emit();
      }
    });
  }
  ngAfterViewChecked() {
    this.resizeService.checkChanges();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.resizeService.destroy();
  }
  acceptSize(size) {
    this.resizeService.acceptSize(size);
  }
};
ResizeSensorComponent.ɵfac = function ResizeSensorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeSensorComponent)(ɵɵdirectiveInject(ResizeBatchService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ResizeSensorComponent.ɵcmp = ɵɵdefineComponent({
  type: ResizeSensorComponent,
  selectors: [["kendo-resize-sensor"]],
  inputs: {
    rateLimit: "rateLimit"
  },
  outputs: {
    resize: "resize"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function ResizeSensorComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-resize-sensor",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ResizeBatchService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    rateLimit: [{
      type: Input
    }],
    resize: [{
      type: Output
    }]
  });
})();
var ResizeSensorModule = class {
};
ResizeSensorModule.ɵfac = function ResizeSensorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeSensorModule)();
};
ResizeSensorModule.ɵmod = ɵɵdefineNgModule({
  type: ResizeSensorModule,
  imports: [ResizeSensorComponent],
  exports: [ResizeSensorComponent]
});
ResizeSensorModule.ɵinj = ɵɵdefineInjector({
  providers: [ResizeBatchService],
  imports: [ResizeSensorComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensorModule, [{
    type: NgModule,
    args: [{
      imports: [ResizeSensorComponent],
      exports: [ResizeSensorComponent],
      providers: [ResizeBatchService]
    }]
  }], null, null);
})();
var KendoInput = class {
};
var Keys;
(function(Keys2) {
  Keys2[Keys2["Alt"] = 18] = "Alt";
  Keys2[Keys2["ArrowDown"] = 40] = "ArrowDown";
  Keys2[Keys2["ArrowLeft"] = 37] = "ArrowLeft";
  Keys2[Keys2["ArrowRight"] = 39] = "ArrowRight";
  Keys2[Keys2["ArrowUp"] = 38] = "ArrowUp";
  Keys2[Keys2["Backspace"] = 8] = "Backspace";
  Keys2[Keys2["Control"] = 17] = "Control";
  Keys2[Keys2["Delete"] = 46] = "Delete";
  Keys2[Keys2["Digit0"] = 48] = "Digit0";
  Keys2[Keys2["Digit1"] = 49] = "Digit1";
  Keys2[Keys2["Digit2"] = 50] = "Digit2";
  Keys2[Keys2["Digit3"] = 51] = "Digit3";
  Keys2[Keys2["Digit4"] = 52] = "Digit4";
  Keys2[Keys2["Digit5"] = 53] = "Digit5";
  Keys2[Keys2["Digit6"] = 54] = "Digit6";
  Keys2[Keys2["Digit7"] = 55] = "Digit7";
  Keys2[Keys2["Digit8"] = 56] = "Digit8";
  Keys2[Keys2["Digit9"] = 57] = "Digit9";
  Keys2[Keys2["End"] = 35] = "End";
  Keys2[Keys2["Enter"] = 13] = "Enter";
  Keys2[Keys2["Escape"] = 27] = "Escape";
  Keys2[Keys2["F1"] = 112] = "F1";
  Keys2[Keys2["F2"] = 113] = "F2";
  Keys2[Keys2["F10"] = 121] = "F10";
  Keys2[Keys2["Home"] = 36] = "Home";
  Keys2[Keys2["Insert"] = 45] = "Insert";
  Keys2[Keys2["KeyA"] = 65] = "KeyA";
  Keys2[Keys2["KeyB"] = 66] = "KeyB";
  Keys2[Keys2["KeyC"] = 67] = "KeyC";
  Keys2[Keys2["KeyD"] = 68] = "KeyD";
  Keys2[Keys2["KeyE"] = 69] = "KeyE";
  Keys2[Keys2["KeyF"] = 70] = "KeyF";
  Keys2[Keys2["KeyG"] = 71] = "KeyG";
  Keys2[Keys2["KeyH"] = 72] = "KeyH";
  Keys2[Keys2["KeyI"] = 73] = "KeyI";
  Keys2[Keys2["KeyJ"] = 74] = "KeyJ";
  Keys2[Keys2["KeyK"] = 75] = "KeyK";
  Keys2[Keys2["KeyL"] = 76] = "KeyL";
  Keys2[Keys2["KeyM"] = 77] = "KeyM";
  Keys2[Keys2["KeyN"] = 78] = "KeyN";
  Keys2[Keys2["KeyO"] = 79] = "KeyO";
  Keys2[Keys2["KeyP"] = 80] = "KeyP";
  Keys2[Keys2["KeyQ"] = 81] = "KeyQ";
  Keys2[Keys2["KeyR"] = 82] = "KeyR";
  Keys2[Keys2["KeyS"] = 83] = "KeyS";
  Keys2[Keys2["KeyT"] = 84] = "KeyT";
  Keys2[Keys2["KeyU"] = 85] = "KeyU";
  Keys2[Keys2["KeyV"] = 86] = "KeyV";
  Keys2[Keys2["KeyW"] = 87] = "KeyW";
  Keys2[Keys2["KeyX"] = 88] = "KeyX";
  Keys2[Keys2["KeyY"] = 89] = "KeyY";
  Keys2[Keys2["KeyZ"] = 90] = "KeyZ";
  Keys2[Keys2["NumpadDecimal"] = 110] = "NumpadDecimal";
  Keys2[Keys2["PageDown"] = 34] = "PageDown";
  Keys2[Keys2["PageUp"] = 33] = "PageUp";
  Keys2[Keys2["Shift"] = 16] = "Shift";
  Keys2[Keys2["Space"] = 32] = "Space";
  Keys2[Keys2["Tab"] = 9] = "Tab";
})(Keys || (Keys = {}));
var focusableSelector = ['a[href]:not([tabindex^="-"]):not([disabled])', 'area[href]:not([tabindex^="-"]):not([disabled])', 'input:not([tabindex^="-"]):not([disabled])', 'select:not([tabindex^="-"]):not([disabled])', 'textarea:not([tabindex^="-"]):not([disabled])', 'button:not([tabindex^="-"]):not([disabled])', 'iframe:not([tabindex^="-"]):not([disabled])', 'object:not([tabindex^="-"]):not([disabled])', 'embed:not([tabindex^="-"]):not([disabled])', '*[tabindex]:not([tabindex^="-"]):not([disabled])', '*[contenteditable]:not([tabindex^="-"]):not([disabled]):not([contenteditable="false"])'].join(",");
var watermarkStyles = `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    zIndex: 101;
    pointerEvents: none;
    backgroundImage: url('data:image/png;base64,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');
`;
var bannerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "16px",
  right: "16px",
  padding: "12px",
  borderRadius: "4px",
  boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.03)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  backgroundColor: "#FFC000",
  color: "#1E1E1E",
  zIndex: 2e4
};
var buttonStyles = {
  display: "inline-flex",
  position: "relative",
  border: "none",
  borderRadius: "4px",
  padding: "5px",
  backgroundColor: "transparent",
  transition: "color 0.2s ease-in-out",
  outline: "none",
  cursor: "pointer"
};
var licenseKeyUrl = "https://www.telerik.com/kendo-angular-ui/components/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-banner";
var bannerPresentOnPage = false;
var WatermarkOverlayComponent = class {
  constructor() {
    this.watermarkStyle = watermarkStyles;
    this.isOpen = true;
    this.bannerMounted = false;
    this.bannerStyles = bannerStyles;
    this.buttonStyles = buttonStyles;
    this.licenseKeyUrl = licenseKeyUrl;
  }
  ngOnInit() {
    if (!bannerPresentOnPage) {
      this.bannerMounted = true;
      bannerPresentOnPage = true;
    }
  }
  ngAfterViewInit() {
    if (this.isBannerRendered) {
      document.body.appendChild(this.banner.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.isBannerRendered) {
      document.body.removeChild(this.banner.nativeElement);
    }
  }
  closeBanner() {
    this.isOpen = false;
  }
  get isBannerRendered() {
    return isDocumentAvailable() && this.banner && this.banner.nativeElement;
  }
};
WatermarkOverlayComponent.ɵfac = function WatermarkOverlayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WatermarkOverlayComponent)();
};
WatermarkOverlayComponent.ɵcmp = ɵɵdefineComponent({
  type: WatermarkOverlayComponent,
  selectors: [["div", "kendoWatermarkOverlay", ""]],
  viewQuery: function WatermarkOverlayComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.banner = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function WatermarkOverlayComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleMap(ctx.watermarkStyle);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c1,
  decls: 1,
  vars: 1,
  consts: [["banner", ""], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z", "fill", "#1E1E1E"], [3, "href", "ngStyle"], ["title", "Learn More", 3, "ngStyle"], ["d", "M15 8C15 11.8656 11.8656 15 8 15C4.13437 15 1 11.8656 1 8C1 4.13437 4.13437 1 8 1C11.8656 1 15 4.13437 15 8ZM14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8ZM11 6C11 7.4125 10.2687 8.05937 9.73125 8.53125C9.25937 8.94688 9 9.17813 9 10H7C7 8.275 7.84688 7.525 8.40938 7.03125C8.84062 6.65312 9 6.50938 9 6C9 5.45 8.55 5 8 5C7.45 5 7 5.45 7 6H5C5 4.34375 6.34375 3 8 3C9.65625 3 11 4.34375 11 6ZM9 13V11H7V13H9Z", "fill", "#1E1E1E"], ["title", "Close", 3, "click", "ngStyle"], ["d", "M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z", "fill", "#1E1E1E"]],
  template: function WatermarkOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, WatermarkOverlayComponent_div_0_Template, 15, 10, "div", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isOpen && ctx.bannerMounted);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WatermarkOverlayComponent, [{
    type: Component,
    args: [{
      selector: "div[kendoWatermarkOverlay]",
      template: `
        <div #banner *ngIf="isOpen && bannerMounted" [ngStyle]="bannerStyles">
            <span [ngStyle]="{ display: 'flex', alignSelf: 'center', marginRight: '8px' }">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z" fill="#1E1E1E"/>
                </svg>
            </span>

            <span>No valid license found for Kendo UI for Angular. Learn how to activate your license.</span>

            <div [ngStyle]="{ display: 'flex', alignItems: 'center', marginLeft: '24px' }">
                <a [href]="licenseKeyUrl" [ngStyle]="{marginRight: '8px', display: 'flex'}">
                    <button title='Learn More' [ngStyle]="buttonStyles">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M15 8C15 11.8656 11.8656 15 8 15C4.13437 15 1 11.8656 1 8C1 4.13437 4.13437 1 8 1C11.8656 1 15 4.13437 15 8ZM14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8ZM11 6C11 7.4125 10.2687 8.05937 9.73125 8.53125C9.25937 8.94688 9 9.17813 9 10H7C7 8.275 7.84688 7.525 8.40938 7.03125C8.84062 6.65312 9 6.50938 9 6C9 5.45 8.55 5 8 5C7.45 5 7 5.45 7 6H5C5 4.34375 6.34375 3 8 3C9.65625 3 11 4.34375 11 6ZM9 13V11H7V13H9Z" fill="#1E1E1E"/>
                        </svg>
                    </button>
                </a>

                <button title='Close' [ngStyle]="buttonStyles" (click)="closeBanner()">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z" fill="#1E1E1E"/>
                    </svg>
                </button>
            </div>
        </div>
    `,
      standalone: true,
      imports: [NgIf, NgStyle]
    }]
  }], null, {
    watermarkStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    banner: [{
      type: ViewChild,
      args: ["banner"]
    }]
  });
})();
var WatermarkModule = class {
};
WatermarkModule.ɵfac = function WatermarkModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WatermarkModule)();
};
WatermarkModule.ɵmod = ɵɵdefineNgModule({
  type: WatermarkModule,
  imports: [WatermarkOverlayComponent],
  exports: [WatermarkOverlayComponent]
});
WatermarkModule.ɵinj = ɵɵdefineInjector({
  imports: [WatermarkOverlayComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WatermarkModule, [{
    type: NgModule,
    args: [{
      exports: [WatermarkOverlayComponent],
      imports: [WatermarkOverlayComponent]
    }]
  }], null, null);
})();
var allowed = ["telerik.com", "progress.com", "stackblitz.io", "csb.app"];
function shouldShowValidationUI(isPackageValid) {
  const skip = allowed.some((hostname) => globalThis.document?.location.hostname.endsWith(hostname));
  return !skip && !isPackageValid;
}
var PrefixTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._showSeparator = false;
  }
  /**
   * Sets the `showSeparator` attribute of the `prefixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
};
PrefixTemplateDirective.ɵfac = function PrefixTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PrefixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PrefixTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: PrefixTemplateDirective,
  selectors: [["", "kendoPrefixTemplate", ""]],
  inputs: {
    showSeparator: "showSeparator"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPrefixTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    showSeparator: [{
      type: Input
    }]
  });
})();
var SuffixTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._showSeparator = false;
  }
  /**
   * Sets the `showSeparator` attribute of the `suffixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
};
SuffixTemplateDirective.ɵfac = function SuffixTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SuffixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
SuffixTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: SuffixTemplateDirective,
  selectors: [["", "kendoSuffixTemplate", ""]],
  inputs: {
    showSeparator: "showSeparator"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuffixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSuffixTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    showSeparator: [{
      type: Input
    }]
  });
})();
var SeparatorComponent = class {
  constructor() {
    this.orientation = "vertical";
    this.hostClass = true;
  }
  /**
   * @hidden
   */
  get vertical() {
    return this.orientation === "vertical";
  }
  /**
   * @hidden
   */
  get horizontal() {
    return this.orientation === "horizontal";
  }
};
SeparatorComponent.ɵfac = function SeparatorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SeparatorComponent)();
};
SeparatorComponent.ɵcmp = ɵɵdefineComponent({
  type: SeparatorComponent,
  selectors: [["kendo-separator"]],
  hostVars: 6,
  hostBindings: function SeparatorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-input-separator-vertical", ctx.vertical)("k-input-separator-horizontal", ctx.horizontal)("k-input-separator", ctx.hostClass);
    }
  },
  inputs: {
    orientation: "orientation"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function SeparatorComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeparatorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-separator",
      template: ``,
      standalone: true
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    vertical: [{
      type: HostBinding,
      args: ["class.k-input-separator-vertical"]
    }],
    horizontal: [{
      type: HostBinding,
      args: ["class.k-input-separator-horizontal"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-separator"]
    }]
  });
})();
var TemplateContextDirective = class {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  set templateContext(context2) {
    if (this.insertedViewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
      this.insertedViewRef = void 0;
    }
    if (context2.templateRef) {
      this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context2.templateRef, context2);
    }
  }
};
TemplateContextDirective.ɵfac = function TemplateContextDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TemplateContextDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
TemplateContextDirective.ɵdir = ɵɵdefineDirective({
  type: TemplateContextDirective,
  selectors: [["", "templateContext", ""]],
  inputs: {
    templateContext: "templateContext"
  },
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateContextDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[templateContext]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    templateContext: [{
      type: Input
    }]
  });
})();
var MultiTabStop = class {
};
var tags = ["kendo-splitbutton", "kendo-combobox", "kendo-multicolumncombobox", "kendo-datepicker", "kendo-timepicker", "kendo-datetimepicker"];
var ToggleButtonTabStopDirective = class {
  /**
   * @hidden
   */
  constructor(hostEl, renderer, zone, hostComponent) {
    this.hostEl = hostEl;
    this.renderer = renderer;
    this.zone = zone;
    this.hostComponent = hostComponent;
    this.toggleButtonAriaLabel = "toggle popup";
    this.sub = new Subscription();
    this.onFocus = () => {
      this.renderer.setStyle(this.button, "box-shadow", "inset 0 0 0 1px rgba(0, 0, 0, 0.08)");
    };
    this.onBlur = () => {
      this.renderer.removeStyle(this.button, "box-shadow");
    };
    this.onClick = (e) => {
      const splitButtonToggleEnter = e instanceof KeyboardEvent && e.keyCode === Keys.Enter;
      const isClick = e instanceof PointerEvent;
      (splitButtonToggleEnter || isClick) && (this.focusButton = true);
    };
    this.onKeyDown = (e) => {
      if (e.keyCode === Keys.ArrowDown && e.altKey) {
        e.stopImmediatePropagation();
        this.focusButton = true;
        this.button.click();
      }
    };
    if (isDevMode() && tags.indexOf(hostEl.nativeElement.tagName.toLowerCase()) === -1) {
      console.warn(`The kendoToggleButtonTabStop directive can be applied to the following components only: ${tags}`);
    }
  }
  ngOnInit() {
    this.active = true;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.isSplitButton = this.hostEl.nativeElement.classList.contains("k-split-button");
    if (this.active) {
      this.activateButton();
    }
    if (this.hostComponent?.escape instanceof EventEmitter) {
      this.sub = this.hostComponent?.escape.subscribe(() => {
        this.returnFocusToToggleButton();
      });
      this.sub.add(this.hostComponent.close.subscribe((e) => {
        if (!e.isDefaultPrevented() && this.focusButton) {
          this.zone.onStable.pipe(take(1)).subscribe(() => {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => this.focusButton = false);
            });
          });
          const mainFocusableElement = this.hostEl.nativeElement.querySelector(".k-split-button > .k-button:first-child, .k-input-inner");
          const optionsListContainer = document.getElementById(`${mainFocusableElement.getAttribute("aria-controls")}`);
          const inList = !!optionsListContainer && optionsListContainer.contains(document.activeElement);
          const inWrapper = this.hostEl.nativeElement.contains(document.activeElement);
          const focusInComponent = inList || inWrapper;
          if (focusInComponent) {
            this.returnFocusToToggleButton();
          }
        }
      }));
    }
    const close = this.hostComponent.close;
  }
  ngOnChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (changes["active"]) {
      changes["active"].currentValue ? this.activateButton() : this.deactivateButton();
    }
    if (changes["toggleButtonAriaLabel"]) {
      this.button && this.renderer.setAttribute(this.button, "aria-label", changes["toggleButtonAriaLabel"].currentValue);
    }
  }
  ngOnDestroy() {
    this.removeListeners();
    this.sub.unsubscribe();
  }
  activateButton() {
    const el = this.hostEl.nativeElement;
    const tabindex = el.querySelector('button:not([tabindex^="-"]), input:not([tabindex^="-"]')?.getAttribute("tabindex");
    this.button = el.querySelector(".k-input-button, .k-split-button-arrow");
    this.button && this.renderer.setAttribute(this.button, "tabindex", tabindex);
    this.button && this.renderer.setAttribute(this.button, "aria-label", this.toggleButtonAriaLabel);
    this.button && this.renderer.removeAttribute(this.button, "aria-hidden");
    if (!this.observer) {
      this.initializeObserver(el);
    }
    this.removeListeners();
    this.addListeners();
  }
  deactivateButton() {
    this.button && this.renderer.setAttribute(this.button, "tabindex", "-1");
    this.button && this.renderer.setAttribute(this.button, "aria-hidden", "true");
    this.button && this.renderer.removeAttribute(this.button, "aria-label");
    this.removeListeners();
    this.observer && this.observer.disconnect();
    this.observer = null;
  }
  addListeners() {
    if (this.button) {
      this.zone.runOutsideAngular(() => this.button.addEventListener("focus", this.onFocus));
      this.zone.runOutsideAngular(() => this.button.addEventListener("blur", this.onBlur));
      this.zone.runOutsideAngular(() => this.button.addEventListener("click", this.onClick));
      this.isSplitButton && this.zone.runOutsideAngular(() => this.button.addEventListener("keyup", this.onClick));
      this.zone.runOutsideAngular(() => this.button.addEventListener("keydown", this.onKeyDown, true));
    }
  }
  removeListeners() {
    if (this.button) {
      this.zone.runOutsideAngular(() => this.button.removeEventListener("focus", this.onFocus));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("blur", this.onBlur));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("click", this.onClick));
      this.isSplitButton && this.zone.runOutsideAngular(() => this.button.removeEventListener("keyup", this.onClick));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("keydown", this.onKeyDown));
    }
  }
  focusToggleButton() {
    this.focusButton && this.zone.runOutsideAngular(() => this.button.focus());
    this.focusButton = false;
  }
  returnFocusToToggleButton() {
    if (this.isSplitButton) {
      this.zone.onStable.pipe(take(1)).subscribe(() => {
        this.focusToggleButton();
      });
    } else {
      this.focusToggleButton();
    }
  }
  // Keeps the `aria-controls` and `aria-expanded` attributes of the main focusable element of the component
  // and the toggle button element in sync.
  initializeObserver(element) {
    const mainFocusableElement = element.querySelector(".k-split-button > .k-button:first-child, .k-input-inner");
    const initialExpanded = mainFocusableElement.getAttribute("aria-expanded");
    const initialControls = mainFocusableElement.getAttribute("aria-controls");
    this.button && this.renderer.setAttribute(this.button, "aria-expanded", initialExpanded);
    this.button && initialControls && this.renderer.setAttribute(this.button, "aria-controls", initialControls);
    this.zone.runOutsideAngular(() => {
      const mutationConfig = {
        attributes: true
      };
      const callback = (mutationList) => {
        for (const mutation of mutationList) {
          if (mutation.attributeName === "aria-expanded") {
            this.renderer.setAttribute(this.button, "aria-expanded", mainFocusableElement.getAttribute("aria-expanded"));
          } else if (mutation.attributeName === "aria-controls") {
            const controlsRef = mainFocusableElement.getAttribute("aria-controls");
            !this.isSplitButton && controlsRef ? this.renderer.setAttribute(this.button, "aria-controls", controlsRef) : this.renderer.removeAttribute(this.button, "aria-controls");
          }
        }
      };
      this.observer = new MutationObserver(callback);
      this.observer.observe(mainFocusableElement, mutationConfig);
    });
  }
};
ToggleButtonTabStopDirective.ɵfac = function ToggleButtonTabStopDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToggleButtonTabStopDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(MultiTabStop));
};
ToggleButtonTabStopDirective.ɵdir = ɵɵdefineDirective({
  type: ToggleButtonTabStopDirective,
  selectors: [["", "kendoToggleButtonTabStop", ""]],
  inputs: {
    active: [0, "kendoToggleButtonTabStop", "active"],
    toggleButtonAriaLabel: "toggleButtonAriaLabel"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonTabStopDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoToggleButtonTabStop]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: MultiTabStop
    }];
  }, {
    active: [{
      type: Input,
      args: ["kendoToggleButtonTabStop"]
    }],
    toggleButtonAriaLabel: [{
      type: Input
    }]
  });
})();
var KENDO_ADORNMENTS = [PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent];
var KENDO_COMMON = [...KENDO_ADORNMENTS, DraggableDirective, EventsOutsideAngularDirective, ResizeSensorComponent, ToggleButtonTabStopDirective, WatermarkOverlayComponent];
var KENDO_RESIZESENSOR = [ResizeSensorComponent];
var AdornmentsModule = class {
};
AdornmentsModule.ɵfac = function AdornmentsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AdornmentsModule)();
};
AdornmentsModule.ɵmod = ɵɵdefineNgModule({
  type: AdornmentsModule,
  imports: [PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent],
  exports: [PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent]
});
AdornmentsModule.ɵinj = ɵɵdefineInjector({
  imports: [SeparatorComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdornmentsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_ADORNMENTS],
      exports: [...KENDO_ADORNMENTS]
    }]
  }], null, null);
})();
var PreventableEvent = class {
  constructor() {
    this.prevented = false;
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var canCreateElement = () => isDocumentAvailable() && document.createElement;
var propName = "--kendo-scrollbar-width";
var scrollbarWidth = () => {
  let scrollbarWidth2 = 0;
  if (canCreateElement()) {
    const div2 = document.createElement("div");
    div2.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div2.innerHTML = "&nbsp;";
    document.body.appendChild(div2);
    scrollbarWidth2 = div2.offsetWidth - div2.scrollWidth;
    document.body.removeChild(div2);
  }
  return scrollbarWidth2;
};
var ScrollbarWidthService = class {
  constructor() {
    this.changes = new EventEmitter();
    if (typeof window !== "undefined" && isDocumentAvailable()) {
      document.body.style.setProperty(propName, `${scrollbarWidth()}px`);
    }
  }
};
ScrollbarWidthService.ɵfac = function ScrollbarWidthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ScrollbarWidthService)();
};
ScrollbarWidthService.ɵprov = ɵɵdefineInjectable({
  token: ScrollbarWidthService,
  factory: ScrollbarWidthService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarWidthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ToggleButtonTabStopModule = class {
};
ToggleButtonTabStopModule.ɵfac = function ToggleButtonTabStopModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ToggleButtonTabStopModule)();
};
ToggleButtonTabStopModule.ɵmod = ɵɵdefineNgModule({
  type: ToggleButtonTabStopModule,
  imports: [ToggleButtonTabStopDirective],
  exports: [ToggleButtonTabStopDirective]
});
ToggleButtonTabStopModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonTabStopModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButtonTabStopDirective],
      exports: [ToggleButtonTabStopDirective]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-licensing/dist/index.mjs
var _0x10f4 = ["z2v0vgLTzq==", "ww91CIbSAwnLBNnLigv4CgLYzwqGB24G", "zgf0yq==", "uhjVz3jLC3mG", "AgvmshG=", "u2vLia==", "ChjVzhvJDenVzgvZ", "C2nYAxb0s2v5", "D3rmuhm=", "rKjcwKG=", "tM8GBgLJzw5ZzsbMB3vUzc4k", "CgfJA2fNzu5HBwu=", "qvfYAMq=", "CgfYC2u=", "ChjVzhvJDhm=", "igzVCIbTB3jLigLUzM9YBwf0Aw9UlGO=", "sgr5sMW=", "rg9iAwe=", "zxDJr2C=", "Du9wCuK=", "z2v0rNvSBfLLyxi=", "lcb0AguGCgfJA2fNzsb3yxmGChvIBgLZAgvKig9Uia==", "C2v0", "zxrNsxC=", "C29YDa==", "EeXMBLu=", "AgfZ", "s0XeCe8=", "rM1Ttxy=", "tNvstvG=", "ww91CIb0CMLHBcbSAwnLBNnLigv4CgLYzwqGB24G", "z2v0rgf0zq==", "BgvUz3rO", "txPHwe8=", "BgLJzw5Zzuv4CgLYyxrPB25eyxrL", "DhjPywW=", "vejxq3K=", "r2Ltv1q=", "uhPWBva=", "z2v0", "vgHLihbYB2r1y3qGAxmGBM90igLUy2X1zgvKigLUihrOzsbSAwnLBNnLlGO=", "z2v0tw9UDgG=", "s2DnDfK=", "DMvYC2LVBG==", "rKj6sum=", "DgLTzxn0yw1W", "B2jQzwn0", "DhLWzq==", "BgLJzw5ZAw5Nrg9JC1vYBa==", "BMfTzq==", "DwTXAeq=", "zg9JC1vYBa==", "z3jVDxbfBMq=", "z3jVDxa=", "yuDyzhy=", "zMLUza==", "D2fYBG==", "zNvUy3rPB24=", "Dw5KzwzPBMvK", "ChjVzhvJDe5HBwu=", "y29Uy2f0", "ChvIBgLZAerHDgu=", "zxHWAxj5rgf0zq==", "CeDhAfu=", "y29Kzq==", "Dg9mB2nHBgvtDhjPBMC=", "tgLJzw5ZzsbHy3rPDMf0Aw9UigzHAwXLzcbMB3iG"];
(function(_0x50aaef, _0x10f4b0) {
  var _0x145713 = function(_0x421c90) {
    while (--_0x421c90) {
      _0x50aaef["push"](_0x50aaef["shift"]());
    }
  };
  _0x145713(++_0x10f4b0);
})(_0x10f4, 439);
var _0x1457 = function(_0x50aaef, _0x10f4b0) {
  _0x50aaef = _0x50aaef - 0;
  var _0x145713 = _0x10f4[_0x50aaef];
  if (_0x1457["aWziBr"] === void 0) {
    var _0x421c90 = function(_0x1aecb4) {
      var _0x16aa36 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", _0x27d11b = String(_0x1aecb4)["replace"](/=+$/, "");
      var _0x46c2e8 = "";
      for (var _0x29c8dd = 0, _0x5ea27f, _0x25dc8b2, _0xcce2102 = 0; _0x25dc8b2 = _0x27d11b["charAt"](_0xcce2102++); ~_0x25dc8b2 && (_0x5ea27f = _0x29c8dd % 4 ? _0x5ea27f * 64 + _0x25dc8b2 : _0x25dc8b2, _0x29c8dd++ % 4) ? _0x46c2e8 += String["fromCharCode"](255 & _0x5ea27f >> (-2 * _0x29c8dd & 6)) : 0) {
        _0x25dc8b2 = _0x16aa36["indexOf"](_0x25dc8b2);
      }
      return _0x46c2e8;
    };
    _0x1457["XjGMHe"] = function(_0x2c6af5) {
      var _0x1b5a14 = _0x421c90(_0x2c6af5);
      var _0x2181c6 = [];
      for (var _0x4e0ecf2 = 0, _0x1a2fc42 = _0x1b5a14["length"]; _0x4e0ecf2 < _0x1a2fc42; _0x4e0ecf2++) {
        _0x2181c6 += "%" + ("00" + _0x1b5a14["charCodeAt"](_0x4e0ecf2)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(_0x2181c6);
    }, _0x1457["XQgCdR"] = {}, _0x1457["aWziBr"] = !![];
  }
  var _0x1b62be = _0x1457["XQgCdR"][_0x50aaef];
  return _0x1b62be === void 0 ? (_0x145713 = _0x1457["XjGMHe"](_0x145713), _0x1457["XQgCdR"][_0x50aaef] = _0x145713) : _0x145713 = _0x1b62be, _0x145713;
};
var context = {
  data: "  {}  "
};
var cache = /* @__PURE__ */ new Map();
function validatePackage(_0x401145) {
  if (cache[_0x1457("0x38")](_0x401145[_0x1457("0xc")])) {
    if (_0x1457("0x3a") !== _0x1457("0x3a")) {
      let _0x40b483 = function() {
        _0x55416e[_0x1457("0x10")](_0x394293);
      };
    } else return cache[_0x1457("0x2")](_0x401145[_0x1457("0xc")]);
  }
  var _0x13003c = _0x401145[_0x1457("0x6")] ? " v" + _0x401145[_0x1457("0x6")] : "", _0x487465 = _0x401145[_0x1457("0xc")] + _0x13003c, _0x5ac69b = JSON[_0x1457("0x2b")](context[_0x1457("0x20")]), _0x12f1b9 = !_0x5ac69b[_0x1457("0x25")] && !_0x5ac69b[_0x1457("0x8")], _0x404bc6 = _0x5ac69b[_0x1457("0x25")] && typeof KendoLicensing === _0x1457("0x15"), _0x21bd47 = matchProduct(_0x5ac69b, _0x401145[_0x1457("0x24")]), _0x379487;
  if (_0x12f1b9 || _0x404bc6) {
    if (_0x1457("0x2a") === _0x1457("0x2f")) {
      let _0x32c728 = function() {
        var _0x210aed = _0x1457("0x21")[_0x1457("0x17")](_0x1ec4d4[_0x1457("0x16")]), _0x5a1943 = typeof _0x5077fd[_0x1457("0x10")] === _0x1457("0x14");
        _0x5a1943 ? _0x1cbf22[_0x1457("0x10")](_0x210aed) : _0x52c64a[_0x1457("0x13")](_0x210aed), _0x19add1[_0x1457("0x13")](_0x2bf2c1(_0x2b5d62)), _0x5a1943 && _0x210919[_0x1457("0xf")]();
      };
    } else _0x379487 = {
      "type": 0,
      "packageName": _0x487465,
      "docsUrl": _0x401145[_0x1457("0xb")]
    };
  } else {
    if (_0x1457("0x39") === _0x1457("0x39")) {
      if (!_0x21bd47) {
        if (_0x1457("0x1a") !== _0x1457("0x1a")) {
          let _0x118e65 = function() {
            return _0x388bef[_0x1457("0x38")](_0x14b8a6[_0x1457("0x1b")]);
          };
        } else _0x379487 = {
          "type": 1,
          "packageName": _0x487465,
          "docsUrl": _0x401145[_0x1457("0xb")]
        };
      } else {
        if (_0x21bd47[_0x1457("0x41")] === !![] && isExpired(getCurrentDate(), _0x21bd47[_0x1457("0x40")])) {
          if (_0x1457("0x0") === _0x1457("0x0")) _0x379487 = {
            "type": 3,
            "packageName": _0x487465,
            "expiryDate": parseDate(_0x21bd47[_0x1457("0x40")]),
            "docsUrl": _0x401145[_0x1457("0xb")]
          };
          else {
            let _0x2acfd0 = function() {
              return new _0x538141(_0x6547c3 * 1e3);
            };
          }
        } else {
          if (isExpired(_0x401145[_0x1457("0x18")], _0x21bd47[_0x1457("0x40")])) {
            if (_0x1457("0x22") !== _0x1457("0x22")) {
              let _0x54738d = function() {
                _0xff686d += _0x1457("0x28");
              };
            } else _0x379487 = {
              "type": 2,
              "packageName": _0x487465,
              "publishDate": parseDate(_0x401145[_0x1457("0x18")]),
              "expiryDate": parseDate(_0x21bd47[_0x1457("0x40")]),
              "docsUrl": _0x401145[_0x1457("0xb")]
            };
          }
        }
      }
    } else {
      let _0x45a77a = function() {
        _0x4e0ecf = {
          "type": 0,
          "packageName": _0x1a2fc4,
          "docsUrl": _0x281109[_0x1457("0xb")]
        };
      };
    }
  }
  if (_0x379487 && typeof console === _0x1457("0x9")) {
    if (_0x1457("0x5") !== _0x1457("0x5")) {
      let _0x27a0d3 = function() {
        _0x23dc27[_0x1457("0xf")]();
      };
    } else {
      var _0x3e0d1b = _0x1457("0x21")[_0x1457("0x17")](_0x401145[_0x1457("0x16")]), _0x225671 = typeof console[_0x1457("0x10")] === _0x1457("0x14");
      if (_0x225671) {
        if (_0x1457("0x2e") === _0x1457("0x2e")) console[_0x1457("0x10")](_0x3e0d1b);
        else {
          let _0x1c2d92 = function() {
            if (!_0x3e4ff8) _0x37b223 = {
              "type": 1,
              "packageName": _0x36e726,
              "docsUrl": _0x3f80b8[_0x1457("0xb")]
            };
            else {
              if (_0x15d67c[_0x1457("0x41")] === !![] && _0x3b51a9(_0x102df8(), _0x3171d7[_0x1457("0x40")])) _0x1e0cab = {
                "type": 3,
                "packageName": _0x2724db,
                "expiryDate": _0x33ff27(_0x4eb9e1[_0x1457("0x40")]),
                "docsUrl": _0x2a3029[_0x1457("0xb")]
              };
              else _0x2a1aff(_0x3a6131[_0x1457("0x18")], _0x30ed8b[_0x1457("0x40")]) && (_0x36826b = {
                "type": 2,
                "packageName": _0x2a7f61,
                "publishDate": _0x19d46e(_0x3f1d0c[_0x1457("0x18")]),
                "expiryDate": _0x18bd78(_0x3231eb[_0x1457("0x40")]),
                "docsUrl": _0x265a7c[_0x1457("0xb")]
              });
            }
          };
        }
      } else {
        if (_0x1457("0x30") !== _0x1457("0x7")) console[_0x1457("0x13")](_0x3e0d1b);
        else {
          let _0x135861 = function() {
            _0x283aa0 += _0x1457("0x3c")[_0x1457("0x17")](_0x111d35[_0x1457("0x19")][_0x1457("0x1c")](), ".\n");
          };
        }
      }
      console[_0x1457("0x13")](formatError(_0x379487));
      if (_0x225671) {
        if (_0x1457("0xd") !== _0x1457("0xd")) {
          let _0x21b2c4 = function() {
            _0x2b9264 = {
              "type": 1,
              "packageName": _0x346bb2,
              "docsUrl": _0x2e7146[_0x1457("0xb")]
            };
          };
        } else console[_0x1457("0xf")]();
      }
    }
  }
  var _0x415e0e = !_0x379487;
  return cache[_0x1457("0x34")](_0x401145[_0x1457("0xc")], _0x415e0e), _0x415e0e;
}
function formatError(_0x594e89) {
  var _0x2d7e52 = _0x1457("0x1d")[_0x1457("0x17")](_0x594e89[_0x1457("0x29")], "\n");
  if (_0x594e89[_0x1457("0xa")] === 2) {
    if (_0x1457("0x3f") !== _0x1457("0x1")) _0x2d7e52 += _0x1457("0x1f")[_0x1457("0x17")](_0x594e89[_0x1457("0x19")][_0x1457("0x1c")](), _0x1457("0x33"))[_0x1457("0x17")](_0x594e89[_0x1457("0x18")][_0x1457("0x1c")](), ".\n");
    else {
      let _0x4205ac = function() {
        _0x339f11 = {
          "type": 3,
          "packageName": _0x324919,
          "expiryDate": _0x301701(_0xaf8b40[_0x1457("0x40")]),
          "docsUrl": _0x5b91f9[_0x1457("0xb")]
        };
      };
    }
  }
  if (_0x594e89[_0x1457("0xa")] === 3) {
    if (_0x1457("0x11") === _0x1457("0x11")) _0x2d7e52 += _0x1457("0x3c")[_0x1457("0x17")](_0x594e89[_0x1457("0x19")][_0x1457("0x1c")](), ".\n");
    else {
      let _0x3e8c99 = function() {
        _0x3f28ec += _0x1457("0x1f")[_0x1457("0x17")](_0x4667d4[_0x1457("0x19")][_0x1457("0x1c")](), _0x1457("0x33"))[_0x1457("0x17")](_0x23b5da[_0x1457("0x18")][_0x1457("0x1c")](), ".\n");
      };
    }
  } else {
    if (_0x594e89[_0x1457("0xa")] === 0) {
      if (_0x1457("0x35") === _0x1457("0x35")) _0x2d7e52 += _0x1457("0x28");
      else {
        let _0x3442b2 = function() {
          _0x5ccb08 += _0x1457("0x3");
        };
      }
    } else {
      if (_0x594e89[_0x1457("0xa")] === 1) {
        if (_0x1457("0x26") !== _0x1457("0x26")) {
          let _0x23b1cd = function() {
            var _0x5bedaa = _0x465bb0(_0x2ba0db), _0x6c2ce2 = new _0x4a6023(_0x5bedaa[_0x1457("0x32")](), _0x5bedaa[_0x1457("0x4")](), _0x5bedaa[_0x1457("0x3d")]() + 1), _0x34ce8e = _0x6c2ce2[_0x1457("0x1e")]() / 1e3;
            return _0x2f1bc7 > _0x34ce8e;
          };
        } else _0x2d7e52 += _0x1457("0x3");
      }
    }
  }
  return _0x2d7e52 += _0x1457("0x23")[_0x1457("0x17")](_0x594e89[_0x1457("0xe")], _0x1457("0x2d")), _0x2d7e52;
}
function matchProduct(_0x408a16, _0x9b416b) {
  var _0x45ca78 = _0x408a16[_0x1457("0x2c")];
  if (!_0x45ca78 || !_0x45ca78[_0x1457("0x3e")]) {
    if (_0x1457("0x27") !== _0x1457("0x37")) return null;
    else {
      let _0x52a8d4 = function() {
        return _0x25dc8b[_0x1457("0x2")](_0xcce210[_0x1457("0xc")]);
      };
    }
  }
  var _0x1880f2 = new Set(_0x9b416b);
  return _0x45ca78[_0x1457("0x36")](function(_0x226118, _0x16f928) {
    if (_0x1457("0x42") !== _0x1457("0x31")) return _0x16f928[_0x1457("0x40")] - _0x226118[_0x1457("0x40")];
    else {
      let _0x3dde91 = function() {
        return null;
      };
    }
  })[_0x1457("0x12")](function(_0x4632fe) {
    if (_0x1457("0x3b") === _0x1457("0x3b")) return _0x1880f2[_0x1457("0x38")](_0x4632fe[_0x1457("0x1b")]);
    else {
      let _0x43b66d = function() {
        return _0x22688d[_0x1457("0x40")] - _0x522bbc[_0x1457("0x40")];
      };
    }
  });
}
function parseDate(_0xe99283) {
  return new Date(_0xe99283 * 1e3);
}
function getCurrentDate() {
  return (/* @__PURE__ */ new Date())[_0x1457("0x1e")]() / 1e3;
}
function isExpired(_0x4b71d2, _0x1df709) {
  var _0x4f97fc = parseDate(_0x1df709), _0xea6b1d = new Date(_0x4f97fc[_0x1457("0x32")](), _0x4f97fc[_0x1457("0x4")](), _0x4f97fc[_0x1457("0x3d")]() + 1), _0x302664 = _0xea6b1d[_0x1457("0x1e")]() / 1e3;
  return _0x4b71d2 > _0x302664;
}

export {
  browser,
  mobileOS,
  pointers,
  touchEnabled,
  getter,
  setter,
  Draggable,
  isDocumentAvailable,
  isChanged,
  anyChanged,
  hasObservers,
  guid,
  isSafari,
  isFirefox,
  isPresent,
  isObjectPresent,
  isObject,
  parseCSSClassNames,
  setHTMLAttributes,
  removeHTMLAttributes,
  parseAttributes,
  isControlRequired,
  DraggableDirective,
  DraggableModule,
  closestInScope,
  closest,
  contains,
  isFocusable,
  findFocusableChild,
  EventsOutsideAngularDirective,
  EventsModule,
  ResizeBatchService,
  ResizeSensorComponent,
  ResizeSensorModule,
  KendoInput,
  Keys,
  focusableSelector,
  WatermarkOverlayComponent,
  shouldShowValidationUI,
  PrefixTemplateDirective,
  SuffixTemplateDirective,
  SeparatorComponent,
  TemplateContextDirective,
  MultiTabStop,
  ToggleButtonTabStopDirective,
  KENDO_RESIZESENSOR,
  AdornmentsModule,
  PreventableEvent,
  ScrollbarWidthService,
  validatePackage
};
//# sourceMappingURL=chunk-4ATVGF2Z.js.map
