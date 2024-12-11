import {
  DomSanitizer
} from "./chunk-RTSZMD54.js";
import {
  isDocumentAvailable,
  validatePackage
} from "./chunk-4ATVGF2Z.js";
import {
  NgClass,
  NgIf
} from "./chunk-ERBSAO3V.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Renderer2,
  Subject,
  Subscription,
  isDevMode,
  map,
  setClassMetadata,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵinject,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-4CNRQKIC.js";

// node_modules/@progress/kendo-angular-icons/fesm2020/progress-kendo-angular-icons.mjs
function SVGIconComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("pointer-events", "none");
    ɵɵproperty("innerHTML", ctx_r0.content, ɵɵsanitizeHtml);
    ɵɵattribute("viewBox", ctx_r0.icon.viewBox);
  }
}
function IconWrapperComponent_kendo_svgicon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-svgicon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.innerCssClass)("icon", ctx_r0.svgIcon)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_ng_template_1_kendo_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.innerCssClass)("name", ctx_r0.name)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.customClasses);
  }
}
function IconWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, IconWrapperComponent_ng_template_1_kendo_icon_0_Template, 1, 5, "kendo-icon", 4)(1, IconWrapperComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const custom_r2 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r0.customFontIconClass)("ngIfElse", custom_r2);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-icons",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1725978685,
  version: "16.9.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var sizeClasses = {
  "default": "k-icon",
  "xsmall": "k-icon-xs",
  "small": "k-icon-sm",
  "medium": "k-icon-md",
  "large": "k-icon-lg",
  "xlarge": "k-icon-xl",
  "xxlarge": "k-icon-xxl",
  "xxxlarge": "k-icon-xxxl"
};
var IconBaseDirective = class {
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    validatePackage(packageMetadata);
  }
  get horizontalFlip() {
    return this.flip === "horizontal" || this.flip === "both";
  }
  get verticalFlip() {
    return this.flip === "vertical" || this.flip === "both";
  }
  /**
   * Specifies the theme color for the Icon.
   *
   * The possible values are:
   * * `inherit` (Default)&mdash;Applies coloring based on the current color.
   * * `primary` &mdash;Applies coloring based on primary theme color.
   * * `secondary`&mdash;Applies coloring based on secondary theme color.
   * * `tertiary`&mdash; Applies coloring based on tertiary theme color.
   * * `info`&mdash;Applies coloring based on info theme color.
   * * `success`&mdash; Applies coloring based on success theme color.
   * * `warning`&mdash; Applies coloring based on warning theme color.
   * * `error`&mdash; Applies coloring based on error theme color.
   * * `dark`&mdash; Applies coloring based on dark theme color.
   * * `light`&mdash; Applies coloring based on light theme color.
   * * `inverse`&mdash; Applies coloring based on inverse theme color.
   *
   */
  set themeColor(themeColor) {
    const element = this.element.nativeElement;
    if (this._themeColor) {
      this.renderer.removeClass(element, `!k-color-${this._themeColor}`);
    }
    this._themeColor = themeColor;
    if (themeColor) {
      this.renderer.addClass(element, `!k-color-${themeColor}`);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the Icon.
   *
   * The possible values are:
   * * `default` (Default) (Font-size: 16px; Width: 16px; Height: 16px)
   * * `xsmall` (Font-size: 12px; Width: 12px; Height: 12px;)
   * * `small` (Font-size: 14px; Width: 14px; Height: 14px;)
   * * `medium` (Font-size: 16px; Width: 16px; Height: 16px;)
   * * `large` (Font-size: 20px; Width: 20px; Height: 20px;)
   * * `xlarge` (Font-size: 24px; Width: 24px; Height: 24px;)
   * * `xxlarge` (Font-size: 32px; Width: 32px; Height: 32px;)
   * * `xxxlarge` (Font-size: 48px; Width: 48px; Height: 48px;)
   *
   */
  set size(size) {
    const currentClass = sizeClasses[this.size];
    const newClass = sizeClasses[size];
    const element = this.element.nativeElement;
    this.renderer.removeClass(element, currentClass);
    if (size && size !== "default") {
      this.renderer.addClass(element, newClass);
    }
    this._size = size;
  }
  get size() {
    return this._size;
  }
};
IconBaseDirective.ɵfac = function IconBaseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconBaseDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
IconBaseDirective.ɵdir = ɵɵdefineDirective({
  type: IconBaseDirective,
  selectors: [["", "kendoIconBase", ""]],
  hostVars: 4,
  hostBindings: function IconBaseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-flip-h", ctx.horizontalFlip)("k-flip-v", ctx.verticalFlip);
    }
  },
  inputs: {
    flip: "flip",
    themeColor: "themeColor",
    size: "size"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconBaseDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoIconBase]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    horizontalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-h"]
    }],
    verticalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-v"]
    }],
    flip: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconComponent = class extends IconBaseDirective {
  constructor(element, renderer) {
    super(element, renderer);
    this.element = element;
    this.renderer = renderer;
    this.hostClass = true;
    this.hostAriaHidden = true;
  }
  /**
   * Defines the name for an existing icon in a Kendo UI theme, which will be rendered.
   * All [Kendo UI Icons](slug:icon_list) are supported.
   */
  set name(name) {
    if (isDocumentAvailable()) {
      const newName = name !== this._name;
      if (newName) {
        const element = this.element.nativeElement;
        this.renderer.removeClass(element, `k-i-${this.name}`);
        this.renderer.addClass(element, `k-i-${name}`);
      }
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
};
IconComponent.ɵfac = function IconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
IconComponent.ɵcmp = ɵɵdefineComponent({
  type: IconComponent,
  selectors: [["kendo-icon"]],
  hostVars: 5,
  hostBindings: function IconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.hostAriaHidden);
      ɵɵclassProp("k-icon", ctx.hostClass)("k-font-icon", ctx.hostClass);
    }
  },
  inputs: {
    name: "name"
  },
  exportAs: ["kendoIcon"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function IconComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIcon",
      selector: "kendo-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-font-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    name: [{
      type: Input
    }]
  });
})();
var areSame = (i1, i2) => i1?.name === i2?.name && i1.content === i2.content && i1.viewBox === i2.viewBox;
var SVGIconComponent = class extends IconBaseDirective {
  constructor(domSanitizer, element, renderer) {
    super(element, renderer);
    this.domSanitizer = domSanitizer;
    this.element = element;
    this.renderer = renderer;
    this.hostClass = true;
    this.hostAriaHidden = true;
  }
  /**
   * Defines the SVG icon, which will be rendered. All [Kendo UI SVG Icons](slug:svgicon_list) are supported.
   */
  set icon(icon) {
    const element = this.element.nativeElement;
    const hasDocument = isDocumentAvailable();
    const newName = icon?.name && icon.name !== this._icon?.name;
    if (this._icon && this._icon.name && newName && hasDocument) {
      this.renderer.removeClass(element, `k-svg-i-${this._icon.name}`);
    }
    if (!areSame(icon, this._icon)) {
      this._icon = icon;
    }
    if (hasDocument && newName) {
      this.renderer.addClass(element, `k-svg-i-${this._icon.name}`);
    }
  }
  get icon() {
    return this._icon;
  }
  get content() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.icon.content);
  }
  get visible() {
    return this.icon && isDocumentAvailable();
  }
  ngOnInit() {
    this.verifyIconProperty();
  }
  verifyIconProperty() {
    if (!isDevMode()) {
      return;
    }
    if (!this._icon) {
      throw new Error(`
                Invalid configuration.
                The input [icon] is required for the Kendo UI SVG Icon component for Angular.
                See https://www.telerik.com/kendo-angular-ui/components/icons/svg-icon
            `);
    }
  }
};
SVGIconComponent.ɵfac = function SVGIconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SVGIconComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
SVGIconComponent.ɵcmp = ɵɵdefineComponent({
  type: SVGIconComponent,
  selectors: [["kendo-svg-icon"], ["kendo-svgicon"]],
  hostVars: 5,
  hostBindings: function SVGIconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", ctx.hostAriaHidden);
      ɵɵclassProp("k-svg-icon", ctx.hostClass)("k-icon", ctx.hostClass);
    }
  },
  inputs: {
    icon: "icon"
  },
  exportAs: ["kendoSVGIcon"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "pointerEvents", "innerHTML", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "innerHTML"]],
  template: function SVGIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SVGIconComponent__svg_svg_0_Template, 1, 4, "svg", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.visible);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSVGIcon",
      selector: "kendo-svg-icon, kendo-svgicon",
      template: `
        <svg [style.pointerEvents]="'none'" *ngIf="visible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            [attr.viewBox]="icon.viewBox" [innerHTML]="content">
        </svg>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgIf, NgClass]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-svg-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    icon: [{
      type: Input
    }]
  });
})();
var isPresent = (value) => value !== null && value !== void 0;
var IconSettingsService = class {
  constructor() {
    this.changes = new Subject();
  }
  /**
   * Notifies subscribers that the icon settings were changed.
   *
   * @param iconSettings - (Optional) A new value for the [icon settings token]({% slug api_icons_icon_settings %}).
   */
  notify(iconSettings) {
    this.changes.next(iconSettings);
  }
  /**
   * Returns the [`SVGIcon`](slug:api_icons_svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   *
   * @hidden
   */
  getSvgIcon(_name) {
    return null;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   *
   * @hidden
   */
  getCustomFontIconClass(_key) {
    return null;
  }
};
IconSettingsService.ɵfac = function IconSettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconSettingsService)();
};
IconSettingsService.ɵprov = ɵɵdefineInjectable({
  token: IconSettingsService,
  factory: IconSettingsService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSettingsService, [{
    type: Injectable
  }], null, null);
})();
var ICON_SETTINGS = new InjectionToken("Kendo UI Icon-Settings token");
var IconsService = class {
  constructor(_iconSettings, iconSettingsService) {
    this._iconSettings = _iconSettings;
    this.iconSettingsService = iconSettingsService;
    this.changes = new BehaviorSubject(this.iconSettings || {
      type: "svg"
    });
    this.subs = new Subscription();
    if (iconSettingsService) {
      this.subs.add(iconSettingsService.changes.pipe(map((iconSettings) => isPresent(iconSettings) ? iconSettings : this._iconSettings), tap((iconSettings) => this._iconSettings = iconSettings)).subscribe((iconSettings) => this.changes.next(iconSettings)));
    }
  }
  /**
   * @hidden
   */
  get iconSettings() {
    return this._iconSettings;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * Returns the [`SVGIcon`](slug:api_icons_svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   */
  getSvgIcon(name) {
    const customIcon = this.iconSettingsService && this.iconSettingsService.getSvgIcon(name);
    return customIcon;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   */
  getCustomFontIconClass(key) {
    const customClass = this.iconSettingsService && this.iconSettingsService.getCustomFontIconClass(key);
    return customClass;
  }
};
IconsService.ɵfac = function IconsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconsService)(ɵɵinject(ICON_SETTINGS, 8), ɵɵinject(IconSettingsService, 8));
};
IconsService.ɵprov = ɵɵdefineInjectable({
  token: IconsService,
  factory: IconsService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ICON_SETTINGS]
      }]
    }, {
      type: IconSettingsService,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var IconWrapperComponent = class {
  constructor(iconsService) {
    this.iconsService = iconsService;
    this.hostClass = true;
    this.innerCssClass = "";
    this.customFontClass = "";
    this.subs = new Subscription();
    this.subs = iconsService.changes.subscribe((iconSettings) => {
      this.iconSettings = iconSettings;
    });
  }
  get customClasses() {
    const classes = [this.customFontClass, this.innerCssClass, this.customFontIconClass].filter((cl) => !!cl).join(" ");
    return classes;
  }
  get hasSvgIcon() {
    this.svgIcon = this.iconsService.getSvgIcon(this.name) || this.svgIcon;
    if (this.svgIcon) {
      return true;
    }
    if (isDevMode()) {
      console.groupCollapsed(`Kendo UI for Angular: Icon type is set to 'svg', but only font icon name is provided. The "${this.name}" font icon will be rendered instead.`);
      console.warn(`
Starting from v7.0.0 (October, 2023) of the Kendo Themes, the font icons will be removed from the theme.
* To render an SVG icon, update the component configuration by setting the "svgIcon" input to the respective icon definition.
* To continue to use font icons, install the "@progress/kendo-font-icons" package and import "@progress/kendo-font-icons/dist/index.css".

Please note, that font icons are not compatible with a strict Content Security Policy and require the use of the "unsafe-inline" override.

For further details, check the following documentation articles:
https://www.telerik.com/kendo-angular-ui/components/icons/icon-settings
https://www.telerik.com/kendo-angular-ui/components/styling/icons/
https://www.telerik.com/kendo-angular-ui/components/styling/svg-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/font-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/
            `);
      console.groupEnd();
    }
    return false;
  }
  get customFontIconClass() {
    return this.iconsService.getCustomFontIconClass(this.name) || this.customFontClass;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
};
IconWrapperComponent.ɵfac = function IconWrapperComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconWrapperComponent)(ɵɵdirectiveInject(IconsService));
};
IconWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: IconWrapperComponent,
  selectors: [["kendo-icon-wrapper"]],
  hostVars: 2,
  hostBindings: function IconWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-icon-wrapper-host", ctx.hostClass);
    }
  },
  inputs: {
    name: "name",
    svgIcon: "svgIcon",
    innerCssClass: "innerCssClass",
    customFontClass: "customFontClass",
    size: "size"
  },
  exportAs: ["kendoIconWrapper"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["font", ""], ["custom", ""], [3, "ngClass", "icon", "size", "themeColor", "flip", 4, "ngIf", "ngIfElse"], [3, "ngClass", "icon", "size", "themeColor", "flip"], [3, "ngClass", "name", "size", "themeColor", "flip", 4, "ngIf", "ngIfElse"], [3, "ngClass", "name", "size", "themeColor", "flip"], [3, "ngClass"]],
  template: function IconWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IconWrapperComponent_kendo_svgicon_0_Template, 1, 5, "kendo-svgicon", 2)(1, IconWrapperComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const font_r3 = ɵɵreference(2);
      ɵɵproperty("ngIf", (ctx.iconSettings == null ? null : ctx.iconSettings.type) === "svg" && ctx.hasSvgIcon)("ngIfElse", font_r3);
    }
  },
  dependencies: [NgClass, NgIf, IconComponent, SVGIconComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconWrapperComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIconWrapper",
      selector: "kendo-icon-wrapper",
      template: `
        <kendo-svgicon
            *ngIf="iconSettings?.type === 'svg' && hasSvgIcon; else font"
            [ngClass]="innerCssClass"
            [icon]="svgIcon"
            [size]="size || iconSettings?.size"
            [themeColor]="iconSettings?.themeColor"
            [flip]="iconSettings?.flip"></kendo-svgicon>
        <ng-template #font>
            <kendo-icon
                *ngIf="!customFontIconClass; else custom"
                [ngClass]="innerCssClass"
                [name]="name"
                [size]="size || iconSettings?.size"
                [themeColor]="iconSettings?.themeColor"
                [flip]="iconSettings?.flip"></kendo-icon>
            <ng-template #custom>
                <span [ngClass]="customClasses"></span>
            </ng-template>
        </ng-template>
    `,
      standalone: true,
      imports: [NgClass, NgIf, IconComponent, SVGIconComponent]
    }]
  }], function() {
    return [{
      type: IconsService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon-wrapper-host"]
    }],
    name: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    innerCssClass: [{
      type: Input
    }],
    customFontClass: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconModule = class {
};
IconModule.ɵfac = function IconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconModule)();
};
IconModule.ɵmod = ɵɵdefineNgModule({
  type: IconModule,
  imports: [IconComponent],
  exports: [IconComponent]
});
IconModule.ɵinj = ɵɵdefineInjector({
  imports: [IconComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      exports: [IconComponent],
      imports: [IconComponent]
    }]
  }], null, null);
})();
var SVGIconModule = class {
};
SVGIconModule.ɵfac = function SVGIconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SVGIconModule)();
};
SVGIconModule.ɵmod = ɵɵdefineNgModule({
  type: SVGIconModule,
  imports: [SVGIconComponent],
  exports: [SVGIconComponent]
});
SVGIconModule.ɵinj = ɵɵdefineInjector({
  imports: [SVGIconComponent]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconModule, [{
    type: NgModule,
    args: [{
      exports: [SVGIconComponent],
      imports: [SVGIconComponent]
    }]
  }], null, null);
})();
var KENDO_ICON = [IconComponent];
var KENDO_SVGICON = [SVGIconComponent];
var KENDO_ICONS = [...KENDO_ICON, ...KENDO_SVGICON];
var IconsModule = class {
};
IconsModule.ɵfac = function IconsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IconsModule)();
};
IconsModule.ɵmod = ɵɵdefineNgModule({
  type: IconsModule,
  imports: [IconComponent, SVGIconComponent],
  exports: [IconComponent, SVGIconComponent]
});
IconsModule.ɵinj = ɵɵdefineInjector({
  providers: [IconsService],
  imports: [KENDO_ICONS]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_ICONS],
      exports: [...KENDO_ICONS],
      providers: [IconsService]
    }]
  }], null, null);
})();

export {
  IconComponent,
  SVGIconComponent,
  IconSettingsService,
  ICON_SETTINGS,
  IconsService,
  IconWrapperComponent,
  IconModule,
  SVGIconModule,
  KENDO_ICON,
  KENDO_SVGICON,
  KENDO_ICONS,
  IconsModule
};
//# sourceMappingURL=chunk-4UXEGTYQ.js.map
