import {
  BehaviorSubject,
  Directive,
  Inject,
  Injectable,
  InjectionToken,
  Optional,
  map,
  setClassMetadata,
  skip,
  tap,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4CNRQKIC.js";

// node_modules/@progress/kendo-angular-l10n/fesm2020/progress-kendo-angular-l10n.mjs
var MessageService = class {
  /**
   * @hidden
   */
  constructor() {
    this.changes = new BehaviorSubject({
      rtl: void 0
    });
  }
  /**
   * Notifies the components that the messages were changed.
   *
   * @param rtl - (Optional) A new value for the [text direction token]({% slug api_l10n_rtl %}).
   */
  notify(rtl) {
    this.changes.next({
      rtl
    });
  }
  /**
   * Returns a localized message for the supplied key.
   *
   * @param _key - The message key. For example, `"kendo.grid.noRecords"`.
   * @return - The localized message for this key or `undefined` if not found.
   */
  get(_key) {
    return void 0;
  }
};
MessageService.ɵfac = function MessageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MessageService)();
};
MessageService.ɵprov = ɵɵdefineInjectable({
  token: MessageService,
  factory: MessageService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var ComponentMessages = class {
  get override() {
    return false;
  }
  ngOnChanges(changes) {
    this.register(changes);
    if (Object.keys(changes).some((field) => !changes[field].isFirstChange())) {
      this.service.notifyChanges();
    }
  }
  ngOnInit() {
    this.subscription = this.service.changes.pipe(skip(1)).subscribe(() => this.register(this));
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  register(changes) {
    const keys = Object.keys(changes);
    keys.forEach((key) => this.service.register(key, this[key], this.override));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
ComponentMessages.ɵfac = function ComponentMessages_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ComponentMessages)();
};
ComponentMessages.ɵdir = ɵɵdefineDirective({
  type: ComponentMessages,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentMessages, [{
    type: Directive,
    args: [{}]
  }], null, null);
})();
var RTL = new InjectionToken("Kendo UI Right-to-Left token");
var L10N_PREFIX = new InjectionToken("Localization key prefix");
var LocalizationService = class {
  constructor(prefix, messageService, _rtl) {
    this.prefix = prefix;
    this.messageService = messageService;
    this._rtl = _rtl;
    this.changes = new BehaviorSubject({
      rtl: this._rtl
    });
    this.dictionary = {};
    if (messageService) {
      this.subscription = messageService.changes.pipe(map(({
        rtl
      }) => rtl !== void 0 ? rtl : this._rtl), tap((rtl) => this._rtl = rtl)).subscribe((rtl) => {
        this.dictionary = {};
        this.changes.next({
          rtl
        });
      });
    }
  }
  get rtl() {
    return this._rtl;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  get(shortKey) {
    const key = this.key(shortKey);
    return this.dictionary[key];
  }
  register(shortKey, value, override = false) {
    const key = this.key(shortKey);
    let message = value;
    if (!override) {
      if (Object.hasOwnProperty.call(this.dictionary, key)) {
        return;
      }
      message = this.defaultValue(key, value);
    }
    this.dictionary[key] = message;
  }
  notifyChanges() {
    this.changes.next({
      rtl: this.rtl
    });
  }
  key(shortKey) {
    return this.prefix + "." + shortKey;
  }
  defaultValue(key, value) {
    if (!this.messageService) {
      return value;
    }
    const alt = this.messageService.get(key);
    return alt === void 0 ? value : alt;
  }
};
LocalizationService.ɵfac = function LocalizationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8));
};
LocalizationService.ɵprov = ɵɵdefineInjectable({
  token: LocalizationService,
  factory: LocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }];
  }, null);
})();

export {
  MessageService,
  ComponentMessages,
  RTL,
  L10N_PREFIX,
  LocalizationService
};
//# sourceMappingURL=chunk-C7JC3N2W.js.map
