webpackJsonp([7],{

/***/ "../../../../../src/app/ecommerce/ecommerce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ecommerce_routing__ = __webpack_require__("../../../../../src/app/ecommerce/ecommerce.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products_component__ = __webpack_require__("../../../../../src/app/ecommerce/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_compact_products_compact_component__ = __webpack_require__("../../../../../src/app/ecommerce/products-compact/products-compact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/ecommerce/product-detail/product-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EcommerceModule = (function () {
    function EcommerceModule() {
    }
    return EcommerceModule;
}());
EcommerceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__ecommerce_routing__["a" /* EcommerceRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__products_compact_products_compact_component__["a" /* ProductsCompactComponent */],
            __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
        ]
    })
], EcommerceModule);

//# sourceMappingURL=ecommerce.module.js.map

/***/ }),

/***/ "../../../../../src/app/ecommerce/ecommerce.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_products_component__ = __webpack_require__("../../../../../src/app/ecommerce/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_compact_products_compact_component__ = __webpack_require__("../../../../../src/app/ecommerce/products-compact/products-compact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/ecommerce/product-detail/product-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceRoutes; });



var EcommerceRoutes = [
    {
        path: '',
        children: [{
                path: 'products',
                component: __WEBPACK_IMPORTED_MODULE_0__products_products_component__["a" /* ProductsComponent */]
            }, {
                path: 'compact',
                component: __WEBPACK_IMPORTED_MODULE_1__products_compact_products_compact_component__["a" /* ProductsCompactComponent */]
            }, {
                path: 'detail',
                component: __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
            }]
    }
];
//# sourceMappingURL=ecommerce.routing.js.map

/***/ }),

/***/ "../../../../../src/app/ecommerce/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\" stretch\" class=\"mb-1\">\n    <div fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <div class=\"card-image-header product-image-header\" style=\"background-image: url(assets/images/unsplash/fashion3.jpg); background-position: top;\"></div>\n    </div>\n    <div fxFlex.gt-md=\"60\" fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"pa-1\">\n      <div class=\"product-detail-header\">\n        <h1 class=\"ma-0 pa-0\"><strong>{{ product.name }}</strong></h1>\n        <h4 class=\"mat-text-muted ma-0 pa-0\">{{ product.description }}</h4>\n\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n          <span fxLayout=\"row\">\n            <span *ngFor=\"let star of stars\" [class.mat-text-default]=\"star <= product.rating\" class=\"mat-text-muted\">&#9733;</span>\n          </span>\n          <span class=\"px-1\">({{ product.rating }}) Votes</span>\n          <a href=\"javascript:;\">{{ product.rating }} customer reviews</a>\n        </div>\n      </div>\n      <h2 class=\"mat-text-primary mt-1\">\n        <span> $ {{ product.price }}</span>\n        <span class=\"strikethrough mat-text-muted text-sm\" *ngIf=\"product.discounted === 'discounted'\">$ {{ product.discount }}</span>\n        <span class=\"text-xs mat-text-muted\">*excluding tax</span>\n      </h2>\n\n      <div class=\"description\">\n        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"my-2\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"none center\">\n          <p>Size:</p>\n          <div class=\"mx-1\">\n            <md-button-toggle-group>\n              <md-button-toggle>S</md-button-toggle>\n              <md-button-toggle>M</md-button-toggle>\n              <md-button-toggle>L</md-button-toggle>\n            </md-button-toggle-group>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"none center\">\n          <p>Color:</p>\n          <div class=\"mx-1\">\n            <md-button-toggle-group>\n              <md-button-toggle>R</md-button-toggle>\n              <md-button-toggle>G</md-button-toggle>\n              <md-button-toggle>B</md-button-toggle>\n            </md-button-toggle-group>\n          </div>\n        </div>\n      </div>\n\n      <button md-raised-button color=\"primary\" class=\"mr-1\">Add to cart</button>\n      <button md-raised-button color=\"accent\" class=\"mr-1\">Add to my wishlist</button>\n    </div>\n  </div>\n\n  <md-tab-group [selectedIndex]=\"2\">\n    <md-tab>\n      <ng-template md-tab-label>Description</ng-template>\n      <md-card-content>\n        <p><strong>Donec sed odio dui.</strong></p>\n        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n        <p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n      </md-card-content>\n    </md-tab>\n    <md-tab>\n      <ng-template md-tab-label>Specifications</ng-template>\n      <md-card-content>\n        <div fxLayout=\"column\" layout-align=\"center\">\n          <div fxLayout=\"row\" class=\"py-1\">\n            <span class=\"mat-text-muted\">Processor:&nbsp;</span>          \n            <span>2.0GHz dual-core Intel Core i5 processor</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">CPU:&nbsp;</span>\n            <span>Turbo Boost up to 3.1GHz</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">RAM:&nbsp;</span>\n            <span>8GB 1866MHz memory</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">Hard Drive:&nbsp;</span>\n            <span>256GB PCIe-based SSD1</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">Graphics Chip:&nbsp;</span>\n            <span>Intel Iris Graphics 540</span>\n          </div>\n\n          <div fxLayout=\"row\" class=\"py-1\">          \n            <span class=\"mat-text-muted\">Ports:&nbsp;</span>\n            <span>Two Thunderbolt 3 ports</span>\n          </div>\n        </div>\n      </md-card-content>\n    </md-tab>\n    <md-tab>\n      <ng-template md-tab-label>Customer Reviews</ng-template>\n      <md-list>\n        <ng-template let-item let-last=\"last\" ngFor [ngForOf]=\"messages\">\n          <md-list-item>\n            <img md-list-avatar src=\"{{item.photo}}\" alt=\"\">\n            <h3 md-line> {{item.from}} </h3>\n            <div md-line>\n              <span fxLayout=\"row\">\n                <span *ngFor=\"let star of stars\" [class.mat-text-default]=\"star <= item.rating\" class=\"mat-text-muted\">&#9733;</span>\n              </span>\n            </div>\n            <p md-line> {{item.subject}} - {{item.message}} </p>\n          </md-list-item>\n        </ng-template>\n      </md-list>\n    </md-tab>\n  </md-tab-group>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/ecommerce/product-detail/product-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip:not(.mat-basic-chip) {\n  font-size: 13px;\n  line-height: 16px; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-input-container {\n  font: 400 inherit/1.125 Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-input-wrapper {\n  padding-bottom: 1.296875em; }\n\n.mat-input-prefix .mat-icon,\n.mat-input-prefix .mat-datepicker-toggle,\n.mat-input-suffix .mat-icon,\n.mat-input-suffix .mat-datepicker-toggle {\n  font-size: 150%; }\n\n.mat-input-prefix .mat-icon-button,\n.mat-input-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-input-prefix .mat-icon-button .mat-icon,\n  .mat-input-suffix .mat-icon-button .mat-icon {\n    line-height: 1.5; }\n\n.mat-input-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-float {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n\n.mat-input-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-input-placeholder {\n  top: 1.28125em; }\n  .mat-input-placeholder.mat-float:not(.mat-empty), .mat-focused .mat-input-placeholder.mat-float {\n    -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n            transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333333%; }\n\n.mat-input-underline {\n  bottom: 1.296875em; }\n\n.mat-input-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.60416667em;\n  top: calc(100% - 1.72916667em); }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-paginator {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  font-size: 16px; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader {\n  font: 500 12px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n:host /deep/ .product-image-header {\n  position: relative;\n  top: -5px;\n  left: -5px;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  height: 100%; }\n  @media (max-width: 959px) {\n    :host /deep/ .product-image-header {\n      top: 0;\n      left: 0;\n      border-radius: 2px 2px 0 0;\n      box-shadow: none;\n      height: 400px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ecommerce/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductDetailComponent = (function () {
    function ProductDetailComponent() {
        this.stars = [1, 2, 3, 4, 5];
        this.product = {
            price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            rating: Math.floor(Math.random() * 6),
            status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
            discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            name: [
                'Blouse',
                'Casual Shirt',
                'Plaid Shirt',
                'Long Sleeve',
                'Denim Jacked',
                'Fur Coat',
                'Crop Top',
                'Stripe Tee'
            ][Math.floor(Math.random() * 8)],
            description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
        };
        this.messages = [{
                from: 'Ali Connors',
                message: 'I will be in your neighborhood',
                photo: 'assets/images/face3.jpg',
                subject: 'Brunch this weekend?',
                rating: Math.floor(Math.random() * 6),
            }, {
                from: 'Trevor Hansen',
                message: 'Wish I could but we have plans',
                photo: 'assets/images/face6.jpg',
                subject: 'Brunch this weekend?',
                rating: Math.floor(Math.random() * 6),
            }, {
                from: 'Sandra Adams',
                message: 'Do you have Paris recommendations instead?',
                photo: 'assets/images/face4.jpg',
                subject: 'Brunch this weekend?',
                rating: Math.floor(Math.random() * 6),
            }];
    }
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/ecommerce/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ecommerce/product-detail/product-detail.component.scss")]
    })
], ProductDetailComponent);

//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/ecommerce/products-compact/products-compact.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"background-none shadow-none\">\n  <md-sidenav #productsnav [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" class=\"pa-0 ma-0\">\n    <div class=\"pl-1 pr-1 pb-1\">\n      <h3>Price</h3>\n      <md-slider value=\"43\"></md-slider>\n    </div>\n    <hr>\n\n    <div class=\"pa-1\">\n      <h3>Brand</h3>\n      <div class=\"pb-1\">\n        <md-checkbox>Apple</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Microsoft</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Samsung</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>HTC</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Sony</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Huawei</md-checkbox>\n      </div>\n    </div>\n    <hr>\n\n    <div class=\"pa-1\">\n      <h3>Screen Size</h3>\n      <div class=\"pb-1\">\n        <md-checkbox>16 GB</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>32 GB</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>64 GB</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>128 GB</md-checkbox>\n      </div>\n    </div>\n    <hr>\n\n    <div class=\"pa-1\">\n      <h3>OS</h3>\n      <div class=\"pb-1\">\n        <md-checkbox>Android</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>iOS</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Windows</md-checkbox>\n      </div>\n    </div>\n\n    <div class=\"pa-1\">\n      <button md-raised-button color=\"primary\">Filter</button>\n    </div>\n\n  </md-sidenav>\n  <md-toolbar color=\"primary\" fxHide=\"false\" fxHide.gt-sm>\n    <button (click)=\"productsnav.toggle()\" md-icon-button>\n      <md-icon>short_text</md-icon>\n    </button>\n    <span class=\"mr-1 ml-1\">Filter</span>\n  </md-toolbar>\n\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <div fxFlex.gt-md=\"33.33%\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor=\"let product of products\">\n      <md-card>\n        <div fxLayout=\"row\">\n          <div class=\"media-grid compact bg-cover\" [ngStyle]=\"{'background-image': 'url(../../assets/images/unsplash/'+ product.id +'.jpg)'}\" fxFlex=\"40\">\n            <figure>\n              <div class=\"product-badge\" *ngIf=\"product.status === 'sale'\"><span>Sale</span></div> \n            </figure>\n          </div>\n          <div class=\"pa-1\" fxFlex>\n            <div fxLayout=\"column\">\n              <span fxLayout=\"row\">\n                <span *ngFor=\"let star of stars\" [class.mat-text-default]=\"star <= product.rating\" class=\"mat-text-muted\">&#9733;</span>\n              </span>\n              <div>\n                <p class=\"ma-0\">{{ product.name }}</p>\n                <p class=\"ma-0 pa-0 text-md\">{{ product.description }}</p>\n              </div>\n              \n              <div class=\"mat-text-primary text-xl\">\n                <span> $ {{ product.price }}</span>\n                <span class=\"strikethrough mat-text-muted text-sm\" *ngIf=\"product.discounted === 'discounted'\">$ {{ product.discount }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </md-card>\n    </div>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/ecommerce/products-compact/products-compact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: -5px;\n  display: block; }\n\n:host /deep/ md-sidenav {\n  width: 200px; }\n\n:host /deep/ .mat-sidenav-container {\n  overflow: visible; }\n  :host /deep/ .mat-sidenav-container .mat-sidenav {\n    overflow: visible; }\n\n:host /deep/ .mat-sidenav-content {\n  padding: 0; }\n\n@media (min-width: 959px) {\n  :host /deep/ .mat-sidenav-side {\n    background-color: transparent;\n    box-shadow: none !important; } }\n\n:host /deep/ .mat-slider-horizontal {\n  width: 100%;\n  min-width: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ecommerce/products-compact/products-compact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsCompactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsCompactComponent = (function () {
    function ProductsCompactComponent() {
        this.products = [];
        this.num = 1;
        this.stars = [1, 2, 3, 4, 5];
        for (this.num; this.num <= 21; this.num += 1) {
            this.addProducts(this.num);
        }
    }
    ProductsCompactComponent.prototype.addProducts = function (i) {
        this.products.push({
            id: i,
            price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            rating: Math.floor(Math.random() * 6),
            status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
            discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            name: [
                'Blouse',
                'Casual Shirt',
                'Plaid Shirt',
                'Long Sleeve',
                'Denim Jacked',
                'Fur Coat',
                'Crop Top',
                'Stripe Tee'
            ][Math.floor(Math.random() * 8)],
            description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
        });
    };
    ProductsCompactComponent.prototype.isOver = function () {
        return window.matchMedia("(max-width: 960px)").matches;
    };
    ProductsCompactComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    return ProductsCompactComponent;
}());
ProductsCompactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-compact',
        template: __webpack_require__("../../../../../src/app/ecommerce/products-compact/products-compact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ecommerce/products-compact/products-compact.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductsCompactComponent);

//# sourceMappingURL=products-compact.component.js.map

/***/ }),

/***/ "../../../../../src/app/ecommerce/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"background-none shadow-none\">\n  <md-sidenav #productsnav [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" class=\"pa-0 ma-0\">\n    <div class=\"pl-1 pr-1 pb-1\">\n      <h3>Price</h3>\n      <md-slider value=\"43\"></md-slider>\n    </div>\n    <hr>\n\n    <div class=\"pa-1\">\n      <h3 class=\"mt-1\">Brand</h3>\n      <div class=\"pb-1\">\n        <md-checkbox>Apple</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Microsoft</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Samsung</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>HTC</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Sony</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Huawei</md-checkbox>\n      </div>\n    </div>\n    <hr>\n\n    <div class=\"pa-1\">\n      <h3>Screen Size</h3>\n      <div class=\"pb-1\">\n        <md-checkbox>16 GB</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>32 GB</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>64 GB</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>128 GB</md-checkbox>\n      </div>\n    </div>\n    <hr>\n\n    <div class=\"pa-1\">\n      <h3>OS</h3>\n      <div class=\"pb-1\">\n        <md-checkbox>Android</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>iOS</md-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <md-checkbox>Windows</md-checkbox>\n      </div>\n    </div>\n\n    <div class=\"pa-1\">\n      <button md-raised-button color=\"primary\">Filter</button>\n    </div>\n\n  </md-sidenav>\n  <md-toolbar color=\"primary\" fxHide=\"false\" fxHide.gt-sm>\n    <button (click)=\"productsnav.toggle()\" md-icon-button>\n      <md-icon>short_text</md-icon>\n    </button>\n    <span class=\"mr-1 ml-1\">Filter</span>\n  </md-toolbar>\n\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"33.3333%\" fxFlex=\"100\" *ngFor=\"let product of products\">\n      <md-card>\n        <div class=\"media-grid\">\n          <figure>\n            <div class=\"product-badge\" *ngIf=\"product.status === 'sale'\"><span>Sale</span></div>\n            <img src=\"assets/images/unsplash/{{ product.id }}.jpg\">\n            <figcaption>\n              <p>\n                <a href=\"javascript:;\" mdTooltip=\"Add to cart\" mdTooltipPosition=\"left\">\n                  <md-icon>shopping_basket</md-icon>\n                </a>\n                <a href=\"javascript:;\" mdTooltip=\"Add to favorites\" mdTooltipPosition=\"left\">\n                  <md-icon>favorite</md-icon>\n                </a>\n                <a href=\"javascript:;\" mdTooltip=\"Share\" mdTooltipPosition=\"left\">\n                  <md-icon>share</md-icon>\n                </a>\n                <a href=\"javascript:;\" mdTooltip=\"Bookmark\" mdTooltipPosition=\"left\">\n                  <md-icon>bookmark</md-icon>\n                </a>\n              </p>\n            </figcaption>     \n          </figure>\n        </div>\n        <md-card-content>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <div fxFlex>\n              <p class=\"ma-0\">{{ product.name }}</p>\n              <p class=\"ma-0 pa-0 text-md\">{{ product.description }}</p>\n            </div>\n            <div class=\"mat-text-primary text-xl\">\n              <span class=\"strikethrough mat-text-muted text-sm\" *ngIf=\"product.discounted === 'discounted'\">$ {{ product.discount }}</span>\n              <span> $ {{ product.price }}</span>\n            </div>\n          </div>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/ecommerce/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: -5px;\n  display: block; }\n\n:host /deep/ md-sidenav {\n  width: 200px; }\n\n:host /deep/ .mat-sidenav-container {\n  overflow: visible; }\n  :host /deep/ .mat-sidenav-container .mat-sidenav {\n    overflow: visible; }\n\n:host /deep/ .mat-sidenav-content {\n  padding: 0; }\n\n@media (min-width: 959px) {\n  :host /deep/ .mat-sidenav-side {\n    background-color: transparent;\n    box-shadow: none !important; } }\n\n:host /deep/ .mat-slider-horizontal {\n  width: 100%;\n  min-width: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ecommerce/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
        this.products = [];
        this.num = 1;
        for (this.num; this.num <= 20; this.num += 1) {
            this.addProducts(this.num);
        }
    }
    ProductsComponent.prototype.addProducts = function (i) {
        this.products.push({
            id: i,
            price: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            status: ['', '', '', 'sale'][Math.floor(Math.random() * 4)],
            discounted: ['', '', '', 'discounted'][Math.floor(Math.random() * 4)],
            discount: (Math.random() * (0.00 - 10.00) + 10.00).toFixed(2),
            name: [
                'Blouse',
                'Casual Shirt',
                'Plaid Shirt',
                'Long Sleeve',
                'Denim Jacked',
                'Fur Coat',
                'Crop Top',
                'Stripe Tee'
            ][Math.floor(Math.random() * 8)],
            description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)]
        });
    };
    ProductsComponent.prototype.isOver = function () {
        return window.matchMedia("(max-width: 960px)").matches;
    };
    ProductsComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/ecommerce/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ecommerce/products/products.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map