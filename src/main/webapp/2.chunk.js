webpackJsonp([2],{

/***/ "../../../../../src/app/material/autocomplete/autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Autocomplete</md-card-title>\n  <md-card-subtitle>Use auto-complete text fields to present real-time suggestions or completions in dropdowns, so users can enter information more accurately and efficiently.</md-card-subtitle>\n  <md-card-content>\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n      <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n        <p>Reactive length: {{ reactiveStates.length }}</p>\n        <p>Reactive value: {{ stateCtrl.value | json }}</p>\n        <p>Reactive dirty: {{ stateCtrl.dirty }}</p>\n\n        <p>\n          <md-input-container floatPlaceholder=\"never\" [style.width.px]=\"300\">\n            <input mdInput placeholder=\"State\" [mdAutocomplete]=\"reactiveAuto\" [formControl]=\"stateCtrl\">\n          </md-input-container>\n        </p>\n\n        <button md-button (click)=\"stateCtrl.reset()\">RESET</button>\n        <button md-button (click)=\"stateCtrl.setValue(states[10])\">SET VALUE</button>\n        <button md-button (click)=\"stateCtrl.enabled ? stateCtrl.disable() : stateCtrl.enable()\">TOGGLE DISABLED</button>\n      </div>\n      <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n        <p>&nbsp;</p>\n        <p>Template-driven value (currentState): {{ currentState }}</p>\n        <p>Template-driven dirty: {{ modelDir.dirty }}</p>\n\n        <p>\n          <md-input-container [style.width.px]=\"300\">\n            <input mdInput placeholder=\"State\" [mdAutocomplete]=\"tdAuto\" [(ngModel)]=\"currentState\" #modelDir=\"ngModel\"\n              (ngModelChange)=\"this.tdStates = filterStates(currentState)\" [disabled]=\"tdDisabled\">\n          </md-input-container>\n        </p>\n\n        <button md-button (click)=\"modelDir.reset()\">RESET</button>\n        <button md-button (click)=\"currentState='California'\">SET VALUE</button>\n        <button md-button (click)=\"tdDisabled=!tdDisabled\">TOGGLE DISABLED</button>\n      </div>\n    </div>\n\n    <md-autocomplete #reactiveAuto=\"mdAutocomplete\" [displayWith]=\"displayFn\">\n      <md-option *ngFor=\"let state of reactiveStates | async\" [value]=\"state\">\n        <span>{{ state.name }}</span>\n        <span> ({{state.code}}) </span>\n      </md-option>\n    </md-autocomplete>\n\n    <md-autocomplete #tdAuto=\"mdAutocomplete\">\n      <md-option *ngFor=\"let state of tdStates\" [value]=\"state.name\">\n        <span>{{ state.name }}</span>\n      </md-option>\n    </md-autocomplete>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/autocomplete/autocomplete.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/autocomplete/autocomplete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutocompleteComponent = (function () {
    function AutocompleteComponent() {
        var _this = this;
        this.currentState = '';
        this.topHeightCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0);
        this.tdDisabled = false;
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'AK', name: 'Alaska' },
            { code: 'AZ', name: 'Arizona' },
            { code: 'AR', name: 'Arkansas' },
            { code: 'CA', name: 'California' },
            { code: 'CO', name: 'Colorado' },
            { code: 'CT', name: 'Connecticut' },
            { code: 'DE', name: 'Delaware' },
            { code: 'FL', name: 'Florida' },
            { code: 'GA', name: 'Georgia' },
            { code: 'HI', name: 'Hawaii' },
            { code: 'ID', name: 'Idaho' },
            { code: 'IL', name: 'Illinois' },
            { code: 'IN', name: 'Indiana' },
            { code: 'IA', name: 'Iowa' },
            { code: 'KS', name: 'Kansas' },
            { code: 'KY', name: 'Kentucky' },
            { code: 'LA', name: 'Louisiana' },
            { code: 'ME', name: 'Maine' },
            { code: 'MD', name: 'Maryland' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'MI', name: 'Michigan' },
            { code: 'MN', name: 'Minnesota' },
            { code: 'MS', name: 'Mississippi' },
            { code: 'MO', name: 'Missouri' },
            { code: 'MT', name: 'Montana' },
            { code: 'NE', name: 'Nebraska' },
            { code: 'NV', name: 'Nevada' },
            { code: 'NH', name: 'New Hampshire' },
            { code: 'NJ', name: 'New Jersey' },
            { code: 'NM', name: 'New Mexico' },
            { code: 'NY', name: 'New York' },
            { code: 'NC', name: 'North Carolina' },
            { code: 'ND', name: 'North Dakota' },
            { code: 'OH', name: 'Ohio' },
            { code: 'OK', name: 'Oklahoma' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'RI', name: 'Rhode Island' },
            { code: 'SC', name: 'South Carolina' },
            { code: 'SD', name: 'South Dakota' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'TX', name: 'Texas' },
            { code: 'UT', name: 'Utah' },
            { code: 'VT', name: 'Vermont' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WA', name: 'Washington' },
            { code: 'WV', name: 'West Virginia' },
            { code: 'WI', name: 'Wisconsin' },
            { code: 'WY', name: 'Wyoming' },
        ];
        this.tdStates = this.states;
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ code: 'CA', name: 'California' });
        this.reactiveStates = this.stateCtrl.valueChanges
            .startWith(this.stateCtrl.value)
            .map(function (val) { return _this.displayFn(val); })
            .map(function (name) { return _this.filterStates(name); });
    }
    AutocompleteComponent.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.name : value;
    };
    AutocompleteComponent.prototype.filterStates = function (val) {
        if (val) {
            var filterValue_1 = val.toLowerCase();
            return this.states.filter(function (state) { return state.name.toLowerCase().startsWith(filterValue_1); });
        }
        return this.states;
    };
    return AutocompleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"]) === "function" && _a || Object)
], AutocompleteComponent.prototype, "modelDir", void 0);
AutocompleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-autocomplete',
        template: __webpack_require__("../../../../../src/app/material/autocomplete/autocomplete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/autocomplete/autocomplete.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AutocompleteComponent);

var _a;
//# sourceMappingURL=autocomplete.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-title>Buttons</md-card-title>\n    <md-card-subtitle>md-button is an HTML button or a tag enhanced with styling and animation to match the Material Design button spec</md-card-subtitle>\n    <md-card-content>\n        <div class=\"pb-1\">\n            <p>Flat buttons</p>\n            <button md-icon-button><md-icon>favorite</md-icon></button>\n            <button md-button class=\"mr-1\">Default</button>\n            <button md-button color=\"primary\" class=\"mr-1\">Primary</button>\n            <button md-button color=\"accent\" class=\"mr-1\">Accent</button>\n            <button md-button color=\"warn\" class=\"mr-1\">Warn</button>\n            <button md-button disabled class=\"mr-1\">off</button>\n        </div>\n\n        <div class=\"pb-1\">\n            <p>Raised buttons</p>\n            <button md-raised-button md-icon-button class=\"mr-1\"><md-icon>favorite</md-icon></button>\n            <button md-raised-button class=\"mr-1\">Default</button>\n            <button md-raised-button color=\"primary\" class=\"mr-1\">Primary</button>\n            <button md-raised-button color=\"accent\" class=\"mr-1\">Accent</button>\n            <button md-raised-button color=\"warn\" class=\"mr-1\">Warn</button>\n            <button md-raised-button disabled class=\"mr-1\">off</button>\n        </div>\n\n        <div class=\"pb-1\">\n            <p>Small buttons</p>\n            <button md-raised-button md-icon-button md-button-sm class=\"mr-1\"><md-icon>favorite</md-icon></button>\n            <button md-raised-button md-button-sm class=\"mr-1\">Default</button>\n            <button md-raised-button md-button-sm color=\"primary\" class=\"mr-1\">Primary</button>\n            <button md-raised-button md-button-sm color=\"accent\" class=\"mr-1\">Accent</button>\n            <button md-raised-button md-button-sm color=\"warn\" class=\"mr-1\">Warn</button>\n            <button md-raised-button md-button-sm disabled class=\"mr-1\">off</button>\n        </div>\n\n        <div class=\"pb-1\">\n            <p>Fab buttons</p>\n            <button md-fab class=\"mr-1\"><md-icon>add</md-icon></button>\n            <button md-fab disabled=\"\" class=\"mr-1\"><md-icon>add</md-icon></button>\n            <button md-mini-fab class=\"mr-1\"><md-icon>add</md-icon></button>\n            <button md-mini-fab disabled class=\"mr-1\"><md-icon>add</md-icon></button>\n        </div>\n\n        <div class=\"pb-0\">\n            <p>Button toggles</p>\n            <md-button-toggle class=\"mr-1\">Single toggle</md-button-toggle>\n            <md-button-toggle-group name=\"alignment\" class=\"mr-1\">\n                <md-button-toggle value=\"left\">\n                    <md-icon>format_align_left</md-icon>\n                </md-button-toggle>\n                <md-button-toggle value=\"center\">\n                    <md-icon>format_align_center</md-icon>\n                </md-button-toggle>\n                <md-button-toggle value=\"right\">\n                    <md-icon>format_align_right</md-icon>\n                </md-button-toggle>\n                <md-button-toggle value=\"justify\">\n                    <md-icon>format_align_justify</md-icon>\n                </md-button-toggle>\n            </md-button-toggle-group>\n            <md-button-toggle-group multiple class=\"mr-1\">\n                <md-button-toggle>Flour</md-button-toggle>\n                <md-button-toggle>Eggs</md-button-toggle>\n                <md-button-toggle disabled>Sugar</md-button-toggle>\n                <md-button-toggle>Milk</md-button-toggle>\n            </md-button-toggle-group>\n        </div>\n    </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/material/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-buttons',
        template: __webpack_require__("../../../../../src/app/material/buttons/buttons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/buttons/buttons.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ButtonsComponent);

//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Cards</md-card-title>\n  <md-card-subtitle>md-card is a content container component that conforms to the spec of a Material Design card.</md-card-subtitle>\n  <md-card-content>\n    <md-card>\n      <md-card-content>Hello</md-card-content>\n    </md-card>\n    <md-card>\n      <md-card-subtitle>Subtitle</md-card-subtitle>\n      <md-card-title>Card with title and footer</md-card-title>\n      <md-card-content>\n        <p>This is supporting text.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n      </md-card-content>\n      <md-card-actions>\n        <button md-button>LIKE</button>\n        <button md-button>SHARE</button>\n      </md-card-actions>\n      <md-card-footer>\n        <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n      </md-card-footer>\n    </md-card>\n    <md-card class=\"mat-card-flat\">\n      <md-card-title>Easily customizable</md-card-title>\n      <md-card-actions>\n        <button md-button>First</button>\n        <button md-button>Second</button>\n      </md-card-actions>\n    </md-card>\n    <md-card>\n      <md-card-title>Standard Card</md-card-title>\n      <md-card-subtitle>Subtitle</md-card-subtitle>\n      <hr>\n      <md-card-content>\n        <p>Standard card with content</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>\n      </md-card-content>\n      <hr>\n      <md-card-actions>\n        <button md-button color=\"accent\">Action</button>\n        <button md-button>Cancel</button>\n      </md-card-actions>\n    </md-card>\n    <md-card>\n      <md-card-header>\n        <img md-card-avatar src=\"assets/images/avatar.jpg\">\n        <md-card-title>Header title</md-card-title>\n        <md-card-subtitle>Header subtitle</md-card-subtitle>\n      </md-card-header>\n      <img md-card-image src=\"https://source.unsplash.com/600x400\">\n      <md-card-content>\n        <p>Here is some more content</p>\n      </md-card-content>\n    </md-card>\n    <md-card>\n       <md-card-title-group>\n          <img md-card-sm-image src=\"https://source.unsplash.com/80x80\">\n          <md-card-title>Card with title</md-card-title>\n          <md-card-subtitle>Subtitle</md-card-subtitle>\n       </md-card-title-group>\n    </md-card>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/material/cards/cards.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = (function () {
    function CardsComponent() {
    }
    return CardsComponent;
}());
CardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cards',
        template: __webpack_require__("../../../../../src/app/material/cards/cards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/cards/cards.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CardsComponent);

//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Checkbox</md-card-title>\n  <md-card-subtitle>md-checkbox is a Material Design selection control that allows users to make a binary choice for a predetermined conditioned</md-card-subtitle>\n  <md-card-content>\n    <form class=\"mb-1\">\n      <md-checkbox [(ngModel)]=\"isChecked\"\n        name=\"cb\"\n        value=\"basic_checkbox\"\n        color=\"checkboxColor()\"\n        (change)=\"isIndeterminate = false\"\n        [indeterminate]=\"isIndeterminate\"\n        [disabled]=\"isDisabled\"\n        [align]=\"alignment\">\n        Do you want to <em>foobar</em> the <em>bazquux</em>?\n      </md-checkbox> - <strong>{{printResult()}}</strong>\n    </form>\n\n    <div  fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-1\">\n      <div>\n        <input id=\"indeterminate-toggle\"\n          type=\"checkbox\"\n         [(ngModel)]=\"isIndeterminate\"\n         [disabled]=\"isDisabled\">\n        <label for=\"indeterminate-toggle\" class=\"mr-xs\">Toggle Indeterminate</label>\n      </div>\n      <div>\n        <input id=\"disabled-toggle\" type=\"checkbox\" [(ngModel)]=\"isDisabled\">\n        <label for=\"disabled-toggle\" class=\"mr-xs\">Toggle Disabled</label>\n      </div>\n      <div>\n        <input id=\"color-toggle\" type=\"checkbox\" [(ngModel)]=\"useAlternativeColor\">\n        <label for=\"color-toggle\">Toggle Color</label>\n      </div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-1\">\n      <p class=\"mr-xs\">Alignment:</p>\n      <div class=\"mr-xs\">\n        <input #start type=\"radio\"\n          value=\"start\"\n          id=\"align-start\"\n          name=\"alignment\"\n          (click)=\"alignment = start.value\"\n          checked>\n        <label for=\"align-start\">Start</label>\n      </div>\n      <div>\n        <input #end type=\"radio\"\n          value=\"end\"\n          id=\"align-end\"\n          name=\"alignment\"\n          (click)=\"alignment = end.value\">\n        <label for=\"align-end\">End</label>\n      </div>\n    </div>\n\n    <p>Pseudo checkboxes</p>\n    <div class=\"mb-1\">\n      <md-pseudo-checkbox></md-pseudo-checkbox>\n      <md-pseudo-checkbox [disabled]=\"true\"></md-pseudo-checkbox>\n\n      <md-pseudo-checkbox state=\"checked\"></md-pseudo-checkbox>\n      <md-pseudo-checkbox state=\"checked\" [disabled]=\"true\"></md-pseudo-checkbox>\n\n      <md-pseudo-checkbox state=\"indeterminate\"></md-pseudo-checkbox>\n      <md-pseudo-checkbox state=\"indeterminate\" [disabled]=\"true\"></md-pseudo-checkbox>\n    </div>\n\n    <p>Nested Checklist</p>\n    <app-md-checkbox-demo-nested-checklist></app-md-checkbox-demo-nested-checklist>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/checkbox/checkbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ ul {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdCheckboxDemoNestedChecklistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this.isIndeterminate = false;
        this.isChecked = false;
        this.isDisabled = false;
        this.alignment = 'start';
        this.useAlternativeColor = false;
    }
    CheckboxComponent.prototype.printResult = function () {
        if (this.isIndeterminate) {
            return 'Maybe!';
        }
        return this.isChecked ? 'Yes!' : 'No!';
    };
    CheckboxComponent.prototype.checkboxColor = function () {
        return this.useAlternativeColor ? 'primary' : 'accent';
    };
    return CheckboxComponent;
}());
CheckboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkbox',
        template: __webpack_require__("../../../../../src/app/material/checkbox/checkbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/checkbox/checkbox.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CheckboxComponent);

var MdCheckboxDemoNestedChecklistComponent = (function () {
    function MdCheckboxDemoNestedChecklistComponent() {
        this.tasks = [{
                name: 'Reminders',
                completed: false,
                subtasks: [{
                        name: 'Cook Dinner',
                        completed: false
                    }, {
                        name: 'Read the Material Design Spec',
                        completed: false
                    }, {
                        name: 'Upgrade Application to Angular2',
                        completed: false
                    }]
            }, {
                name: 'Groceries',
                completed: false,
                subtasks: [{
                        name: 'Organic Eggs',
                        completed: false
                    }, {
                        name: 'Protein Powder',
                        completed: false
                    }, {
                        name: 'Almond Meal Flour',
                        completed: false
                    }]
            }];
    }
    MdCheckboxDemoNestedChecklistComponent.prototype.allComplete = function (task) {
        var subtasks = task.subtasks;
        if (!subtasks) {
            return false;
        }
        return subtasks.every(function (t) { return t.completed; }) ? true
            : subtasks.every(function (t) { return !t.completed; }) ? false
                : task.completed;
    };
    MdCheckboxDemoNestedChecklistComponent.prototype.someComplete = function (tasks) {
        var numComplete = tasks.filter(function (t) { return t.completed; }).length;
        return numComplete > 0 && numComplete < tasks.length;
    };
    MdCheckboxDemoNestedChecklistComponent.prototype.setAllCompleted = function (tasks, completed) {
        tasks.forEach(function (t) { return t.completed = completed; });
    };
    return MdCheckboxDemoNestedChecklistComponent;
}());
MdCheckboxDemoNestedChecklistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-md-checkbox-demo-nested-checklist',
        styles: ["\n    li {\n      margin-bottom: 4px;\n    }\n  "],
        template: __webpack_require__("../../../../../src/app/material/checkbox/nested-checklist.html"),
    })
], MdCheckboxDemoNestedChecklistComponent);

//# sourceMappingURL=checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/checkbox/nested-checklist.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-toolbar color=\"primary\">\n    <span>Tasks</span>\n  </md-toolbar>\n  <md-card-content>\n    <ul>\n      <li *ngFor=\"let task of tasks\">\n        <md-checkbox [(ngModel)]=\"task.completed\"\n                     [checked]=\"allComplete(task)\"\n                     [indeterminate]=\"someComplete(task.subtasks)\"\n                     (change)=\"setAllCompleted(task.subtasks, $event.checked)\">\n          <h4 class=\"ma-0\">{{task.name}}</h4>\n        </md-checkbox>\n        <ul class=\"ml-3\">\n          <li *ngFor=\"let subtask of task.subtasks\">\n            <md-checkbox [(ngModel)]=\"subtask.completed\">\n              {{subtask.name}}\n            </md-checkbox>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/chips/chips.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <md-card>\n    <md-card-title>Chips</md-card-title>\n    <md-card-subtitle>an input component for building lists of strings or objects. The list items are displayed as 'chips'.</md-card-subtitle>\n    \n    <md-card-content>\n      <div class=\"pb-1\">\n        <p class=\"mt-0\">Simple</p>\n        <md-chip-list>\n          <md-chip>Chip 1</md-chip>\n          <md-chip>Chip 2</md-chip>\n          <md-chip>Chip 3</md-chip>\n        </md-chip-list>\n      </div>\n\n      <div class=\"pb-1\">\n        <p>Unstyled</p>\n        <md-chip-list>\n          <md-basic-chip>Basic Chip 1</md-basic-chip>\n          <md-basic-chip>Basic Chip 2</md-basic-chip>\n          <md-basic-chip>Basic Chip 3</md-basic-chip>\n        </md-chip-list>\n      </div>\n\n      <p>Advanced</p>\n      <md-chip-list selectable=\"false\">\n        <md-chip color=\"accent\" selected=\"true\">Selected/Colored</md-chip>\n        <md-chip color=\"warn\" selected=\"true\" *ngIf=\"visible\"\n                 (destroy)=\"alert('chip destroyed')\" (click)=\"toggleVisible()\">\n          With Events\n        </md-chip>\n      </md-chip-list>\n    </md-card-content>\n  </md-card>\n\n  <md-card>\n    <md-card-title>Dynamic Chips</md-card-title>\n    <md-card-subtitle>an input component for building lists of strings or objects. The list items are displayed as 'chips'.</md-card-subtitle>\n    <md-card-content>\n      <div class=\"pb-1\">\n        <p class=\"mt-0\">Input Container</p>\n        <md-chip-list>\n          <md-chip *ngFor=\"let person of people\" [color]=\"color\">\n            {{person.name}}\n          </md-chip>\n        </md-chip-list>\n\n        <md-input-container class=\"mt-1\">\n          <input mdInput #input (keyup.enter)=\"add(input)\" placeholder=\"New Contributor...\"/>\n        </md-input-container>\n      </div>\n\n      <p>Stacked Chips</p>\n      <p>\n        You can also stack the chips if you want them on top of each other and/or use the\n        <code>(focus)</code> event to run custom code.\n      </p>\n      <md-chip-list class=\"mat-chip-list-stacked\">\n        <md-chip *ngFor=\"let aColor of availableColors\"\n                 (focus)=\"color = aColor.color\" color=\"{{aColor.color}}\" selected=\"true\">\n          {{aColor.name}}\n        </md-chip>\n      </md-chip-list>\n    </md-card-content>\n  </md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/chips/chips.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/chips/chips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChipsComponent = (function () {
    function ChipsComponent() {
        this.visible = true;
        this.color = '';
        this.people = [
            { name: 'Kara' },
            { name: 'Jeremy' },
            { name: 'Topher' },
            { name: 'Elad' },
            { name: 'Kristiyan' },
            { name: 'Paul' }
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsComponent.prototype.alert = function (message) {
        alert(message);
    };
    ChipsComponent.prototype.add = function (input) {
        if (input.value && input.value.trim() !== '') {
            this.people.push({ name: input.value.trim() });
            input.value = '';
        }
    };
    ChipsComponent.prototype.toggleVisible = function () {
        this.visible = false;
    };
    ChipsComponent.prototype.ngOnInit = function () {
    };
    return ChipsComponent;
}());
ChipsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chips',
        template: __webpack_require__("../../../../../src/app/material/chips/chips.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/chips/chips.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChipsComponent);

//# sourceMappingURL=chips.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Datepicker</md-card-title>\n  <md-card-subtitle>A material 2 component for datepicker</md-card-subtitle>\n  <md-card-content>\n    <p>Options</p>\n    <p>\n      <md-checkbox [(ngModel)]=\"touch\">Use touch UI</md-checkbox>\n      <md-checkbox [(ngModel)]=\"filterOdd\">Filter odd months and dates</md-checkbox>\n      <md-checkbox [(ngModel)]=\"yearView\">Start in year view</md-checkbox>\n    </p>\n    <p>\n      <md-input-container>\n        <input mdInput [mdDatepicker]=\"minDatePicker\" [(ngModel)]=\"minDate\" placeholder=\"Min date\">\n        <button mdSuffix [mdDatepickerToggle]=\"minDatePicker\"></button>\n      </md-input-container>\n      <md-datepicker #minDatePicker [touchUi]=\"touch\"></md-datepicker>\n      <md-input-container>\n        <input mdInput [mdDatepicker]=\"maxDatePicker\" [(ngModel)]=\"maxDate\" placeholder=\"Max date\">\n        <button mdSuffix [mdDatepickerToggle]=\"maxDatePicker\"></button>\n      </md-input-container>\n      <md-datepicker #maxDatePicker [touchUi]=\"touch\"></md-datepicker>\n    </p>\n    <p>\n      <md-input-container>\n        <input mdInput [mdDatepicker]=\"startAtPicker\" [(ngModel)]=\"startAt\" placeholder=\"Start at date\">\n        <button mdSuffix [mdDatepickerToggle]=\"startAtPicker\"></button>\n      </md-input-container>\n      <md-datepicker #startAtPicker [touchUi]=\"touch\"></md-datepicker>\n    </p>\n\n    <p>Result</p>\n    <p>\n      <button [mdDatepickerToggle]=\"resultPicker\"></button>\n      <md-input-container>\n        <input mdInput\n               #resultPickerModel=\"ngModel\"\n               [mdDatepicker]=\"resultPicker\"\n               [(ngModel)]=\"date\"\n               [min]=\"minDate\"\n               [max]=\"maxDate\"\n               [mdDatepickerFilter]=\"filterOdd ? dateFilter : null\"\n               placeholder=\"Pick a date\">\n        <md-error *ngIf=\"resultPickerModel.hasError('mdDatepickerMin')\">Too early!</md-error>\n        <md-error *ngIf=\"resultPickerModel.hasError('mdDatepickerMax')\">Too late!</md-error>\n        <md-error *ngIf=\"resultPickerModel.hasError('mdDatepickerFilter')\">Date unavailable!</md-error>\n      </md-input-container>\n      <md-datepicker\n          #resultPicker\n          [touchUi]=\"touch\"\n          [startAt]=\"startAt\"\n          [startView]=\"yearView ? 'year' : 'month'\">\n      </md-datepicker>\n    </p>\n    <p>\n      <input [mdDatepicker]=\"resultPicker2\"\n             [(ngModel)]=\"date\"\n             [min]=\"minDate\"\n             [max]=\"maxDate\"\n             [mdDatepickerFilter]=\"filterOdd ? dateFilter : null\"\n             placeholder=\"Pick a date\">\n      <button [mdDatepickerToggle]=\"resultPicker2\"></button>\n      <md-datepicker\n          #resultPicker2\n          [touchUi]=\"touch\"\n          [startAt]=\"startAt\"\n          [startView]=\"yearView ? 'year' : 'month'\">\n      </md-datepicker>\n    </p>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/datepicker/datepicker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-calendar {\n  width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatepickerComponent = (function () {
    function DatepickerComponent(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.dateFilter = function (date) { return date.getMonth() % 2 === 1 && date.getDate() % 2 === 0; };
        this.dateAdapter.setLocale('nl');
    }
    return DatepickerComponent;
}());
DatepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datepicker',
        template: __webpack_require__("../../../../../src/app/material/datepicker/datepicker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/datepicker/datepicker.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* DateAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* DateAdapter */]) === "function" && _a || Object])
], DatepickerComponent);

var _a;
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"demo-dialog-card\">\n  <md-card-title>Dialog</md-card-title>\n  <md-card-subtitle>MdDialog is a service, which opens dialogs components in the view.</md-card-subtitle>\n  <md-card-content>\n    <button md-raised-button color=\"primary\" (click)=\"openJazz()\">\n      Open dialog\n    </button>\n    <button md-raised-button color=\"accent\" (click)=\"openContentElement()\">\n      Open dialog with content elements\n    </button>\n    <button md-raised-button color=\"accent\" (click)=\"openTemplate()\">\n      Open dialog with template content\n    </button>\n\n    <p>Dialog dimensions</p>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.width\" placeholder=\"Width\">\n    </md-input-container>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.height\" placeholder=\"Height\">\n    </md-input-container>\n\n    <p>Dialog position</p>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.position.top\" (change)=\"config.position.bottom = ''\" placeholder=\"Top\">\n    </md-input-container>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.position.bottom\" (change)=\"config.position.top = ''\" placeholder=\"Bottom\">\n    </md-input-container>\n\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.position.left\" (change)=\"config.position.right = ''\" placeholder=\"Left\">\n    </md-input-container>\n    <md-input-container style=\"width: 100%\">\n      <input mdInput [(ngModel)]=\"config.position.right\" (change)=\"config.position.left = ''\" placeholder=\"Right\">\n    </md-input-container>\n\n    <p>Dialog backdrop</p>\n    <md-input-container>\n      <input mdInput [(ngModel)]=\"config.backdropClass\" placeholder=\"Backdrop class\">\n    </md-input-container>\n\n    <md-checkbox [(ngModel)]=\"config.hasBackdrop\">Has backdrop</md-checkbox>\n\n    <p>Other options</p>\n\n    <md-select placeholder=\"Button alignment\" [(ngModel)]=\"actionsAlignment\">\n      <md-option>Start</md-option>\n      <md-option value=\"end\">End</md-option>\n      <md-option value=\"center\">Center</md-option>\n    </md-select>\n\n    <md-input-container>\n      <input mdInput [(ngModel)]=\"config.data.message\" placeholder=\"Dialog message\">\n    </md-input-container>\n\n    <md-checkbox [(ngModel)]=\"config.disableClose\">Disable close</md-checkbox>\n\n    <p>Last close result: {{lastCloseResult}}</p>\n  </md-card-content>\n</md-card>\n<ng-template>\n  I'm a template dialog. I've been opened {{numTemplateOpens}} times!\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/material/dialog/dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JazzDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IFrameDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentElementDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var JazzDialogComponent = (function () {
    function JazzDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._dimesionToggle = false;
    }
    JazzDialogComponent.prototype.togglePosition = function () {
        this._dimesionToggle = !this._dimesionToggle;
        if (this._dimesionToggle) {
            this.dialogRef
                .updateSize('500px', '500px')
                .updatePosition({ top: '25px', left: '25px' });
        }
        else {
            this.dialogRef
                .updateSize()
                .updatePosition();
        }
    };
    return JazzDialogComponent;
}());
JazzDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jazz-dialog',
        template: "\n  <p>It's Jazz!</p>\n  <md-input-container>\n    <input mdInput placeholder=\"How much?\" #howMuch>\n  </md-input-container>\n  <p> {{ data.message }} </p>\n  <button type=\"button\" (click)=\"dialogRef.close(howMuch.value)\">Close dialog</button>\n  <button (click)=\"togglePosition()\">Change dimensions</button>"
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MdDialogRef */]) === "function" && _a || Object, Object])
], JazzDialogComponent);

var IFrameDialogComponent = (function () {
    function IFrameDialogComponent() {
    }
    return IFrameDialogComponent;
}());
IFrameDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-demo-iframe-dialog',
        styles: [
            "iframe {\n      width: 800px;\n    }"
        ],
        template: "\n    <h2 md-dialog-title>Neptune</h2>\n    <md-dialog-content>\n      <iframe frameborder=\"0\" src=\"https://en.wikipedia.org/wiki/Neptune\"></iframe>\n    </md-dialog-content>\n    <md-dialog-actions>\n      <button\n        md-raised-button\n        color=\"primary\"\n        md-dialog-close>Close</button>\n    </md-dialog-actions>"
    })
], IFrameDialogComponent);

var ContentElementDialogComponent = (function () {
    function ContentElementDialogComponent(dialog) {
        this.dialog = dialog;
    }
    ContentElementDialogComponent.prototype.showInStackedDialog = function () {
        this.dialog.open(IFrameDialogComponent);
    };
    return ContentElementDialogComponent;
}());
ContentElementDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-demo-content-element-dialog',
        styles: [
            "img {\n      max-width: 100%;\n    }"
        ],
        template: "\n    <h2 md-dialog-title>Neptune</h2>\n    <md-dialog-content>\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg\"/>\n      <p>\n        Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the\n        Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet,\n        and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more\n        massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger\n        than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1\n        astronomical units (4.50\u00D7109 km). It is named after the Roman god of the sea and has the\n        astronomical symbol \u2646, a stylised version of the god Neptune's trident.\n      </p>\n    </md-dialog-content>\n    <md-dialog-actions [attr.align]=\"actionsAlignment\">\n      <button\n        md-raised-button\n        color=\"primary\"\n        md-dialog-close>Close</button>\n      <a\n        md-button\n        color=\"primary\"\n        href=\"https://en.wikipedia.org/wiki/Neptune\"\n        target=\"_blank\">Read more on Wikipedia</a>\n      <button\n        md-button\n        color=\"secondary\"\n        (click)=\"showInStackedDialog()\">\n        Show in Dialog</button>\n    </md-dialog-actions>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MdDialog */]) === "function" && _b || Object])
], ContentElementDialogComponent);

var DialogComponent = (function () {
    function DialogComponent(dialog, doc) {
        this.dialog = dialog;
        this.config = {
            disableClose: false,
            panelClass: 'custom-overlay-pane-class',
            hasBackdrop: true,
            backdropClass: '',
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                message: 'Jazzy jazz jazz'
            }
        };
        this.numTemplateOpens = 0;
        // Possible useful example for the open and closeAll events.
        // Adding a class to the body if a dialog opens and
        // removing it after all open dialogs are closed
        dialog.afterOpen.subscribe(function () {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(function () {
            doc.body.classList.remove('no-scroll');
        });
    }
    DialogComponent.prototype.openJazz = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(JazzDialogComponent, this.config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    DialogComponent.prototype.openContentElement = function () {
        var dialogRef = this.dialog.open(ContentElementDialogComponent, this.config);
        dialogRef.componentInstance.actionsAlignment = this.actionsAlignment;
    };
    DialogComponent.prototype.openTemplate = function () {
        this.numTemplateOpens++;
        this.dialog.open(this.template, this.config);
    };
    return DialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _c || Object)
], DialogComponent.prototype, "template", void 0);
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__("../../../../../src/app/material/dialog/dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/dialog/dialog.component.scss")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MdDialog */]) === "function" && _d || Object, Object])
], DialogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/expansion/expansion.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Single Expansion Panel</md-card-title>\n  <md-card-subtitle>Expansion panel</md-card-subtitle>\n  <md-card-content>\n    <md-expansion-panel class=\"md-expansion-demo-width\" #myPanel>\n      <md-expansion-panel-header>\n        <mat-panel-description>This is a panel description.</mat-panel-description>\n        <mat-panel-title>Panel Title</mat-panel-title>\n      </md-expansion-panel-header>\n        This is the content text that makes sense here.\n      <md-action-row>\n        <button md-button (click)=\"myPanel.expanded = false\">CANCEL</button>\n        <button md-button>SAVE</button>\n      </md-action-row>\n    </md-expansion-panel>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Accordion</md-card-title>\n  <md-card-subtitle>Expansion panel</md-card-subtitle>\n  <md-card-content>\n    <div>\n      <p>Accordion Options</p>\n      <div class=\"block mb-2\">\n        <md-slide-toggle [(ngModel)]=\"multi\">Allow Multi Expansion</md-slide-toggle>\n        <md-slide-toggle [(ngModel)]=\"hideToggle\">Hide Indicators</md-slide-toggle>\n        <md-slide-toggle [(ngModel)]=\"showPanel3\">Show Panel 3</md-slide-toggle>\n      </div>\n\n      <p>Accordion Style</p>\n      <md-radio-group [(ngModel)]=\"displayMode\" class=\"block mb-2\">\n        <md-radio-button value=\"default\">Default</md-radio-button>\n        <md-radio-button value=\"flat\">Flat</md-radio-button>\n      </md-radio-group>\n\n      <p>Accordion Panel(s)</p>\n      <div class=\"block mb-2\">\n        <md-checkbox [(ngModel)]=\"panel1.expanded\">Panel 1</md-checkbox>\n        <md-checkbox [(ngModel)]=\"panel2.expanded\">Panel 2</md-checkbox>\n      </div>\n    </div>\n\n    <md-accordion [displayMode]=\"displayMode\" [multi]=\"multi\"\n                  class=\"md-expansion-demo-width\">\n      <md-expansion-panel #panel1  [hideToggle]=\"hideToggle\">\n        <md-expansion-panel-header>Section 1</md-expansion-panel-header>\n        <p>This is the content text that makes sense here.</p>\n      </md-expansion-panel>\n      <md-expansion-panel #panel2 [hideToggle]=\"hideToggle\">\n        <md-expansion-panel-header>Section 2</md-expansion-panel-header>\n        <p>This is the content text that makes sense here.</p>\n      </md-expansion-panel>\n      <md-expansion-panel #panel3 *ngIf=\"showPanel3\" [hideToggle]=\"hideToggle\">\n        <md-expansion-panel-header>Section 3</md-expansion-panel-header>\n        <md-checkbox #showButtons>Reveal Buttons Below</md-checkbox>\n        <md-action-row *ngIf=\"showButtons.checked\">\n          <button md-button (click)=\"panel2.expanded = true\">OPEN SECTION 2</button>\n          <button md-button (click)=\"panel3.expanded = false\">CLOSE</button>\n        </md-action-row>\n      </md-expansion-panel>\n    </md-accordion>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/expansion/expansion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/expansion/expansion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExpansionComponent = (function () {
    function ExpansionComponent() {
        this.displayMode = 'default';
        this.multi = false;
        this.hideToggle = false;
        this.showPanel3 = true;
    }
    return ExpansionComponent;
}());
ExpansionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-expansion',
        template: __webpack_require__("../../../../../src/app/material/expansion/expansion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/expansion/expansion.component.scss")]
    })
], ExpansionComponent);

//# sourceMappingURL=expansion.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Grid List</md-card-title>\n  <md-card-subtitle>md-grid-list is an alternative list view that arranges cells into grid-based layout.</md-card-subtitle>\n  <md-tab-group>\n    <md-tab>\n      <ng-template md-tab-label>Fixed height</ng-template>\n      <md-card-content>\n        <md-grid-list [cols]=\"fixedCols\" [rowHeight]=\"fixedRowHeight\">\n          <md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\n                        [style.background]=\"tile.color\">\n            {{tile.text}}\n          </md-grid-tile>\n        </md-grid-list>\n        <div fxLayout=\"row\"  fxLayoutAlign=\"start center\" class=\"mt-2\">\n          <md-input-container>\n            <input mdInput placeholder=\"Change list cols\" type=\"number\" [(ngModel)]=\"fixedCols\">\n          </md-input-container>\n          <md-input-container>\n            <input mdInput placeholder=\"Change row height\" type=\"number\" [(ngModel)]=\"fixedRowHeight\">\n          </md-input-container>\n        </div>\n      </md-card-content>\n      <hr>\n      <md-card-actions>\n        <button md-button (click)=\"addTileCols()\" color=\"primary\">ADD COLSPAN (THREE)</button>\n      </md-card-actions>\n    </md-tab>\n    <md-tab>\n      <ng-template md-tab-label>Ratio height</ng-template>\n      <md-card-content>\n        <md-grid-list cols=\"2\" [rowHeight]=\"ratio\" gutterSize=\"4px\">\n          <md-grid-tile *ngFor=\"let tile of tiles\" [style.background]=\"'lightblue'\">\n            {{tile.text}}\n          </md-grid-tile>\n        </md-grid-list>\n        <div  fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2\">\n          <md-input-container>\n            <input mdInput placeholder=\"Change ratio\" [(ngModel)]=\"ratio\">\n          </md-input-container>\n        </div>\n      </md-card-content>\n    </md-tab>\n    <md-tab>\n      <ng-template md-tab-label>Fit height</ng-template>\n      <md-card-content>\n        <md-grid-list cols=\"2\" rowHeight=\"fit\" [gutterSize]=\"ratioGutter\"\n                      [style.height]=\"fitListHeight\">\n          <md-grid-tile *ngFor=\"let tile of tiles\" [style.background]=\"'#F1EBBA'\">\n            {{tile.text}}\n          </md-grid-tile>\n        </md-grid-list>\n        <div  fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2\">\n          <md-input-container>\n            <input mdInput placeholder=\"Change list height\" [(ngModel)]=\"fitListHeight\">\n          </md-input-container>\n          <md-input-container>\n            <input mdInput placeholder=\"Change gutter\" type=\"number\" [(ngModel)]=\"ratioGutter\">\n          </md-input-container>\n        </div>\n      </md-card-content>\n    </md-tab>\n    <md-tab>\n      <ng-template md-tab-label>Headers</ng-template>\n      <md-card-content class=\"pa-0\">\n        <md-grid-list cols=\"3\" rowHeight=\"200px\">\n          <md-grid-tile *ngFor=\"let dog of dogs\" style=\"background:gray\">\n            <md-grid-tile-header>\n              <md-icon md-grid-avatar>info_outline</md-icon>\n              {{dog.name}}\n            </md-grid-tile-header>\n          </md-grid-tile>\n        </md-grid-list>\n      </md-card-content>\n    </md-tab>\n    <md-tab>\n      <ng-template md-tab-label>Footers</ng-template>\n      <md-card-content class=\"pa-0\">\n        <md-grid-list cols=\"3\" rowHeight=\"200px\">\n          <md-grid-tile *ngFor=\"let dog of dogs\">\n            <img [alt]=\"dog.name\" src=\"https://material.angularjs.org/material2_assets/ngconf/{{dog.name}}.png\">\n            <md-grid-tile-footer>\n              <h3 md-line>{{dog.name}}</h3>\n              <span md-line>Human: {{dog.human}}</span>\n              <md-icon>star_border</md-icon>\n            </md-grid-tile-footer>\n          </md-grid-tile>\n        </md-grid-list>\n      </md-card-content>\n    </md-tab>\n  </md-tab-group>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = (function () {
    function GridComponent() {
        this.tiles = [{
                text: 'One',
                cols: 3,
                rows: 1,
                color: 'lightblue'
            }, {
                text: 'Two',
                cols: 1,
                rows: 2,
                color: 'lightgreen'
            }, {
                text: 'Three',
                cols: 1,
                rows: 1,
                color: 'lightpink'
            }, {
                text: 'Four',
                cols: 2,
                rows: 1,
                color: '#DDBDF1'
            }];
        this.dogs = [{
                name: 'Porter',
                human: 'Kara'
            }, {
                name: 'Mal',
                human: 'Jeremy'
            }, {
                name: 'Koby',
                human: 'Igor'
            }, {
                name: 'Razzle',
                human: 'Ward'
            }, {
                name: 'Molly',
                human: 'Rob'
            }, {
                name: 'Husi',
                human: 'Matias'
            }];
        this.basicRowHeight = 80;
        this.fixedCols = 4;
        this.fixedRowHeight = 200;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
    GridComponent.prototype.addTileCols = function () {
        this.tiles[2].cols++;
    };
    return GridComponent;
}());
GridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-grid',
        template: __webpack_require__("../../../../../src/app/material/grid/grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/grid/grid.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], GridComponent);

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Basic</md-card-title>\n  <md-card-content>\n    <form>\n      <md-input-container style=\"width: 100%\">\n        <input mdInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n      </md-input-container>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container style=\"width: 100%\" floatPlaceholder=\"never\">\n          <input mdInput placeholder=\"First name\">\n        </md-input-container>\n        <md-input-container style=\"width: 100%\">\n          <input mdInput placeholder=\"Long Last Name That Will Be Truncated\">\n        </md-input-container>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container style=\"width: 100%\">\n          <textarea mdInput placeholder=\"Address\">1600 Amphitheatre Pkway</textarea>\n        </md-input-container>\n        <md-input-container style=\"width: 100%\">\n          <textarea mdInput placeholder=\"Address 2\"></textarea>\n        </md-input-container>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n        <md-input-container style=\"width: 100%\">\n          <input mdInput placeholder=\"City\" value=\"Mountain View\">\n        </md-input-container>\n\n        <md-input-container style=\"width: 100%\">\n          <input mdInput placeholder=\"State\" maxLength=\"2\" value=\"CA\">\n        </md-input-container>\n\n        <md-input-container style=\"width: 100%\">\n          <input mdInput #postalCode maxLength=\"5\" placeholder=\"Postal Code\" value=\"94043\"\n                 pattern=\"[0-9]{5}\">\n          <md-hint align=\"end\">\n            <md-icon>mode_edit</md-icon>\n            <span aria-live=\"polite\">{{postalCode.value.length}} / 5</span>\n          </md-hint>\n        </md-input-container>\n      </div>\n    </form>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Error messages</md-card-title>\n  <md-card-content>\n    <h4>Regular</h4>\n\n    <p>\n      <md-input-container>\n        <input mdInput placeholder=\"example\" [(ngModel)]=\"errorMessageExample1\" required>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput placeholder=\"email\" [formControl]=\"emailFormControl\">\n        <md-error *ngIf=\"emailFormControl.hasError('required')\">\n          This field is required\n        </md-error>\n        <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\n          Please enter a valid email address\n        </md-error>\n      </md-input-container>\n    </p>\n\n    <h4>With hint</h4>\n\n    <md-input-container>\n      <input mdInput placeholder=\"example\" [(ngModel)]=\"errorMessageExample2\" required>\n      <md-error>This field is required</md-error>\n      <md-hint>Please type something here</md-hint>\n    </md-input-container>\n\n\n    <form novalidate>\n      <h4>Inside a form</h4>\n\n      <md-input-container>\n        <input mdInput name=\"example\" placeholder=\"example\"\n          [(ngModel)]=\"errorMessageExample3\" required>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n\n      <button color=\"primary\" md-raised-button>Submit</button>\n    </form>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Prefix + Suffix</md-card-title>\n  <md-card-content>\n    <h4>Text</h4>\n    <md-input-container class=\"demo-text-align-end\">\n      <input mdInput placeholder=\"amount\">\n      <span mdPrefix>$&nbsp;</span>\n      <span mdSuffix>.00</span>\n    </md-input-container>\n\n    <h4>Icons</h4>\n    <md-input-container>\n      <input mdInput placeholder=\"amount\">\n      <md-icon mdPrefix>attach_money</md-icon>\n      <md-icon mdSuffix>mode_edit</md-icon>\n    </md-input-container>\n\n    <h4>Icon buttons</h4>\n    <md-input-container>\n      <input mdInput placeholder=\"amount\">\n      <button md-icon-button mdPrefix><md-icon>attach_money</md-icon></button>\n      <button md-icon-button mdSuffix><md-icon>mode_edit</md-icon></button>\n    </md-input-container>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Divider Colors</md-card-title>\n  <md-card-content>\n    <h4>Input</h4>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n      <md-input-container color=\"primary\" style=\"width: 100%;\">\n        <input mdInput placeholder=\"Default Color\" value=\"example\">\n      </md-input-container>\n      <md-input-container color=\"accent\" style=\"width: 100%;\">\n        <input mdInput placeholder=\"Accent Color\" value=\"example\">\n      </md-input-container>\n      <md-input-container color=\"warn\" style=\"width: 100%;\">\n        <input mdInput placeholder=\"Warn Color\" value=\"example\">\n      </md-input-container>\n    </div>\n\n    <h4>Textarea</h4>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n      <md-input-container color=\"primary\" style=\"width: 100%;\">\n        <textarea mdInput placeholder=\"Default Color\">example</textarea>\n      </md-input-container>\n      <md-input-container color=\"accent\" style=\"width: 100%;\">\n        <textarea mdInput placeholder=\"Accent Color\">example</textarea>\n      </md-input-container>\n      <md-input-container color=\"warn\" style=\"width: 100%;\">\n        <textarea mdInput placeholder=\"Warn Color\">example</textarea>\n      </md-input-container>\n    </div>\n\n    <h4>With error</h4>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\n      <md-input-container color=\"primary\" style=\"width: 100%;\">\n        <input mdInput placeholder=\"Default Color\" [(ngModel)]=\"dividerColorExample1\" required>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n      <md-input-container color=\"accent\" style=\"width: 100%;\">\n        <input mdInput placeholder=\"Accent Color\" [(ngModel)]=\"dividerColorExample2\" required>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n      <md-input-container color=\"warn\" style=\"width: 100%;\">\n        <input mdInput placeholder=\"Warn Color\" [(ngModel)]=\"dividerColorExample3\" required>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n    </div>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Hints</md-card-title>\n  <md-card-content>\n    <h4>Input</h4>\n    <p>\n      <md-input-container style=\"width: 100%\">\n        <input mdInput\n               #characterCountInputHintExample\n               placeholder=\"Character count (100 max)\"\n               maxLength=\"100\"\n               value=\"Hello world. How are you?\">\n        <md-hint align=\"end\" aria-live=\"polite\">\n          {{characterCountInputHintExample.value.length}} / 100\n        </md-hint>\n      </md-input-container>\n    </p>\n\n    <h4>Textarea</h4>\n    <p>\n      <md-input-container style=\"width: 100%\">\n        <textarea mdInput\n                  #characterCountTextareaHintExample\n                  placeholder=\"Character count (100 max)\"\n                  maxLength=\"100\">Hello world. How are you?</textarea>\n        <md-hint align=\"end\" aria-live=\"polite\">\n          {{characterCountTextareaHintExample.value.length}} / 100\n        </md-hint>\n      </md-input-container>\n    </p>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>\n    Hello&nbsp;\n    <md-input-container color=\"accent\">\n      <input mdInput [(ngModel)]=\"name\" type=\"text\" placeholder=\"First name\">\n    </md-input-container>,\n    how are you?\n  </md-card-title>\n  <md-card-content>\n    <p>\n      <md-input-container>\n        <input mdInput disabled placeholder=\"Disabled field\" value=\"Value\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput required placeholder=\"Required field\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container style=\"width: 100%\">\n        <input mdInput placeholder=\"100% width placeholder\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container style=\"width: 100%\">\n        <input mdInput #input placeholder=\"Character count (100 max)\" maxLength=\"100\">\n        <md-hint align=\"end\" aria-live=\"polite\">{{input.value.length}} / 100</md-hint>\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container hintLabel=\"Hint label\" style=\"width: 100%\">\n        <input mdInput placeholder=\"Show Hint Label\">\n      </md-input-container>\n    </p>\n\n    <p>\n      <md-input-container>\n        <input mdInput>\n        <md-placeholder>\n          I <md-icon>favorite</md-icon> <b>bold</b> placeholder\n        </md-placeholder>\n        <md-hint>\n          I also <md-icon>home</md-icon> <i>italic</i> hint labels\n        </md-hint>\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container hintLabel=\"Hint label\" style=\"width: 100%\">\n        <input mdInput #hintLabelWithCharCount placeholder=\"Show Hint Label With Character Count\">\n        <md-hint align=\"end\" aria-live=\"polite\">{{hintLabelWithCharCount.value.length}}</md-hint>\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container style=\"margin-bottom: 4em; width: 100%;\">\n        <textarea mdInput #longHint placeholder=\"Enter text to count\"></textarea>\n        <md-hint>\n          Enter some text to count how many characters are in it. The character count is shown on\n          the right.\n        </md-hint>\n        <md-hint align=\"end\" style=\"white-space: nowrap\" aria-live=\"polite\">\n          Length: {{longHint.value.length}}\n        </md-hint>\n      </md-input-container>\n    </p>\n    <p>\n      <md-checkbox [(ngModel)]=\"color\">Check to change the color:</md-checkbox>\n      <md-input-container [color]=\"color ? 'primary' : 'accent'\">\n        <input mdInput [placeholder]=\"color ? 'Primary color' : 'Accent color'\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-checkbox [(ngModel)]=\"requiredField\"> Check to make required:</md-checkbox>\n      <md-input-container>\n        <input mdInput\n               [required]=\"requiredField\"\n               [placeholder]=\"requiredField ? 'Required field' : 'Not required field'\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-checkbox [(ngModel)]=\"hideRequiredMarker\">Check to hide the required marker:</md-checkbox>\n      <md-input-container [hideRequiredMarker]=\"hideRequiredMarker\" style=\"width: 300px\">\n        <input mdInput\n               required\n               [placeholder]=\"hideRequiredMarker ?\n                   'Required Without Marker' : 'Required With Marker'\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-button-toggle-group [(ngModel)]=\"floatingLabel\">\n        <md-button-toggle value=\"auto\">Auto Float</md-button-toggle>\n        <md-button-toggle value=\"always\">Always Float</md-button-toggle>\n        <md-button-toggle value=\"never\">Never Float</md-button-toggle>\n      </md-button-toggle-group>\n    </p>\n\n    <p>\n      <md-input-container [floatPlaceholder]=\"floatingLabel\">\n        <input mdInput placeholder=\"Placeholder\">\n      </md-input-container>\n    </p>\n\n    <p>\n      <md-input-container>\n        <input mdInput placeholder=\"Prefixed\" value=\"example\">\n        <div mdPrefix>Example:&nbsp;</div>\n      </md-input-container>\n      <md-input-container class=\"demo-text-align-end\">\n        <input mdInput placeholder=\"Suffixed\" value=\"123\">\n        <span mdSuffix>.00 €</span>\n      </md-input-container>\n      <br/>\n      Both:\n      <md-input-container class=\"demo-text-align-end\">\n        <input mdInput #email placeholder=\"Email Address\" value=\"angular-core\">\n        <span mdPrefix><md-icon [class.primary]=\"email.focused\">email</md-icon>&nbsp;</span>\n        <span mdSuffix [class.primary]=\"email.focused\">&nbsp;@gmail.com</span>\n      </md-input-container>\n    </p>\n\n    <p>\n      Empty: <md-input-container><input mdInput></md-input-container>\n      <label>Label: <md-input-container><input mdInput></md-input-container></label>\n    </p>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Number Inputs</md-card-title>\n  <md-card-content>\n    <table width=\"100%\">\n      <thead>\n      <td>Table</td>\n      <td colspan=\"3\">\n        <button (click)=\"addABunch(5)\">Add 5</button>\n        <button (click)=\"addABunch(10)\">Add 10</button>\n        <button (click)=\"addABunch(100)\">Add 100</button>\n        <button (click)=\"addABunch(1000)\">Add 1000</button>\n      </td>\n      </thead>\n      <tr *ngFor=\"let item of items; let i = index\">\n        <td>{{i+1}}</td>\n        <td>\n          <md-input-container>\n            <input mdInput\n                   type=\"number\"\n                   placeholder=\"value\"\n                   aria-label=\"hello\"\n                   [(ngModel)]=\"items[i].value\">\n          </md-input-container>\n        </td>\n        <td>\n          <input type=\"number\" [(ngModel)]=\"items[i].value\">\n        </td>\n        <td>{{item.value}}</td>\n      </tr>\n    </table>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Forms</md-card-title>\n  <md-card-content>\n    <md-input-container><input mdInput placeholder=\"reactive\" [formControl]=\"formControl\">\n    </md-input-container>\n    <md-input-container>\n      <input mdInput placeholder=\"template\" [(ngModel)]=\"model\" required [disabled]=\"ctrlDisabled\">\n    </md-input-container>\n    <button md-raised-button color=\"primary\"\n            (click)=\"formControl.enabled ? formControl.disable() : formControl.enable()\">\n      DISABLE REACTIVE CTRL\n    </button>\n    <button md-raised-button color=\"primary\" (click)=\"ctrlDisabled = !ctrlDisabled\">\n      DISABLE TD CTRL\n    </button>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Textarea Autosize</md-card-title>\n  <md-card-content>\n    <h3>Regular &lt;textarea&gt;</h3>\n    <textarea mdTextareaAutosize class=\"demo-textarea\"></textarea>\n\n    <h3>&lt;textarea&gt; with md-input-container</h3>\n    <div>\n      <md-input-container>\n        <textarea mdInput\n                  mdTextareaAutosize\n                  placeholder=\"Autosized textarea\"></textarea>\n      </md-input-container>\n    </div>\n\n    <h3>&lt;textarea&gt; with ngModel</h3>\n    <div>\n      <label>Input with same ngModel <input [(ngModel)]=\"textareaNgModelValue\"></label>\n    </div>\n    <label>\n      Plain textarea with auto size\n      <textarea mdTextareaAutosize [(ngModel)]=\"textareaNgModelValue\"></textarea>\n    </label>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/input/input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var max = 5;
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var InputComponent = (function () {
    function InputComponent() {
        this.floatingLabel = 'auto';
        this.ctrlDisabled = false;
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('hello', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(EMAIL_REGEX)]);
        this.model = 'hello';
    }
    InputComponent.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    return InputComponent;
}());
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input',
        template: __webpack_require__("../../../../../src/app/material/input/input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/input/input.component.scss")]
    })
], InputComponent);

//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Lists</md-card-title>\n  <md-card-subtitle>md-list is a container component that wraps and formats a series of line items</md-card-subtitle>\n  <md-card-content>\n    <p>Normal lists</p>\n    <md-card>\n      <md-list>\n        <h3 md-subheader>Items</h3>\n        <md-list-item *ngFor=\"let item of items\">\n          {{item}}\n        </md-list-item>\n      </md-list>\n    </md-card>\n\n    <p>Multiline lists <button (click)=\"thirdLine=!thirdLine\">Show third line</button></p>\n    <md-card>\n      <md-list>\n        <md-list-item *ngFor=\"let contact of contacts\">\n          <h3 md-line>{{contact.name}}</h3>\n          <p md-line *ngIf=\"thirdLine\">extra line</p>\n          <p md-line>{{contact.headline}}</p>\n        </md-list-item>\n      </md-list>\n    </md-card>\n\n    <p>3 Line List Item with Avatars and Icons</p>\n    <md-card>\n      <md-list>\n        <h3 md-subheader>Today</h3>\n        <md-list-item *ngFor=\"let message of messages\">\n          <img md-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\n          <h4 md-line>{{message.from}}</h4>\n          <p md-line>\n            <span>{{message.subject}} -- </span>\n            <span class=\"text-md mat-text-muted\">{{message.message}}</span>\n          </p>\n        </md-list-item>\n        <md-divider></md-divider>\n        <md-list-item *ngFor=\"let message of messages\">\n          <h4 md-line>{{message.from}}</h4>\n          <p md-line> {{message.subject}} </p>\n          <p md-line class=\"text-md mat-text-muted\">{{message.message}} </p>\n        </md-list-item>\n        <md-divider></md-divider>\n        <md-list-item *ngFor=\"let message of messages\">\n          <md-icon md-list-avatar>person</md-icon>\n          <h4 md-line>{{message.from}}</h4>\n          <p md-line>\n            <span>{{message.subject}} -- </span>\n            <span class=\"text-md mat-text-muted\">{{message.message}}</span>\n          </p>\n        </md-list-item>\n      </md-list>\n    </md-card>\n\n    <p>Dense lists</p>\n    <md-card>\n      <md-list dense>\n        <h3 md-subheader>Items</h3>\n        <md-list-item *ngFor=\"let item of items\">\n          {{item}}\n        </md-list-item>\n      </md-list>\n    </md-card>\n\n    <p>Multiline dense list</p>\n    <md-card>\n      <md-list dense>\n        <md-list-item *ngFor=\"let contact of contacts\">\n          <h3 md-line>{{contact.name}}</h3>\n          <p md-line>{{contact.headline}}</p>\n        </md-list-item>\n      </md-list>\n    </md-card>\n\n    <p>3 Line List Item with Avatars and Icons</p>\n    <md-card>\n      <md-list dense>\n        <h3 md-subheader>Today</h3>\n        <md-list-item *ngFor=\"let message of messages\">\n          <img md-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\n          <h4 md-line>{{message.from}}</h4>\n          <p md-line> {{message.subject}} </p>\n          <p md-line>{{message.message}} </p>\n        </md-list-item>\n      </md-list>\n    </md-card>\n\n    <p>Checkbox list</p>\n    <md-card>  \n      <md-list>\n        <ng-template ngFor let-todo [ngForOf]=\"todos\">\n          <md-list-item>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"width: 100%;\">\n              <div fxFlex>\n                <md-checkbox [checked]=\"todo.finished\">\n                  {{todo.name}}\n                </md-checkbox>\n              </div>\n              <div><md-icon>more_horiz</md-icon></div>\n            </div>\n          </md-list-item>\n        </ng-template>\n      </md-list>\n    </md-card>\n\n    <p>Nav lists</p>\n    <md-card>\n      <md-nav-list>\n        <a md-list-item *ngFor=\"let link of links\" href=\"http://www.google.com\">\n          {{ link.name }}\n        </a>\n      </md-nav-list>\n      <hr>\n      <md-nav-list>\n        <h3 md-subheader *ngIf=\"infoClicked\">More info!</h3>\n        <md-list-item *ngFor=\"let link of links\">\n          <a md-line href=\"http://www.google.com\">{{ link.name }}</a>\n          <button md-icon-button (click)=\"infoClicked=!infoClicked\">\n            <md-icon>info</md-icon>\n          </button>\n        </md-list-item>\n      </md-nav-list>\n      <hr>\n      <md-nav-list>\n        <a md-list-item *ngFor=\"let link of links\" href=\"http://www.google.com\">\n          <md-icon md-list-icon>folder</md-icon>\n          <span md-line>{{ link.name }}</span>\n          <span md-line> Description </span>\n        </a>\n      </md-nav-list>\n      <hr>\n      <md-nav-list dense>\n        <md-list-item *ngFor=\"let link of links\">\n          <a md-line href=\"http://www.google.com\">{{ link.name }}</a>\n          <button md-icon-button (click)=\"infoClicked=!infoClicked\">\n            <md-icon class=\"material-icons\">info</md-icon>\n          </button>\n        </md-list-item>\n      </md-nav-list>\n    </md-card>\n  </md-card-content>\n</md-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/material/lists/lists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListsComponent = (function () {
    function ListsComponent() {
        this.todos = [{
                finished: true,
                name: 'Learn Angular 2.0',
            }, {
                finished: true,
                name: 'Learn Angular Material 2.0',
            }, {
                finished: false,
                name: 'Build examples',
            }, {
                finished: false,
                name: 'Documentation',
            }, {
                finished: false,
                name: 'Write about your findings',
            }, {
                finished: false,
                name: 'Contribute back to the community',
            }];
        this.items = ['Pepper', 'Salt', 'Paprika'];
        this.contacts = [{
                name: 'Nancy',
                headline: 'Software engineer'
            }, {
                name: 'Mary',
                headline: 'TPM'
            }, {
                name: 'Bobby',
                headline: 'UX designer'
            }];
        this.messages = [{
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: 'https://angular.io/generated/images/bios/julie-ralph.jpg'
            },
            {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: 'https://angular.io/generated/images/bios/juleskremer.jpg'
            },
            {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: 'https://angular.io/generated/images/bios/jelbourn.jpg'
            }];
        this.links = [{
                name: 'Inbox'
            }, {
                name: 'Outbox'
            }, {
                name: 'Spam'
            }, {
                name: 'Trash'
            }];
        this.thirdLine = false;
        this.infoClicked = false;
    }
    return ListsComponent;
}());
ListsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lists',
        template: __webpack_require__("../../../../../src/app/material/lists/lists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/lists/lists.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ListsComponent);

//# sourceMappingURL=lists.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_routing__ = __webpack_require__("../../../../../src/app/material/material.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/material/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cards_cards_component__ = __webpack_require__("../../../../../src/app/material/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__input_input_component__ = __webpack_require__("../../../../../src/app/material/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__ = __webpack_require__("../../../../../src/app/material/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__radio_radio_component__ = __webpack_require__("../../../../../src/app/material/radio/radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/material/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lists_lists_component__ = __webpack_require__("../../../../../src/app/material/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__grid_grid_component__ = __webpack_require__("../../../../../src/app/material/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__progress_progress_component__ = __webpack_require__("../../../../../src/app/material/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/material/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__toggle_toggle_component__ = __webpack_require__("../../../../../src/app/material/toggle/toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/material/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__menu_menu_component__ = __webpack_require__("../../../../../src/app/material/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__slider_slider_component__ = __webpack_require__("../../../../../src/app/material/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__snackbar_snackbar_component__ = __webpack_require__("../../../../../src/app/material/snackbar/snackbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/material/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__select_select_component__ = __webpack_require__("../../../../../src/app/material/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__autocomplete_autocomplete_component__ = __webpack_require__("../../../../../src/app/material/autocomplete/autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__chips_chips_component__ = __webpack_require__("../../../../../src/app/material/chips/chips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/material/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__expansion_expansion_component__ = __webpack_require__("../../../../../src/app/material/expansion/expansion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__table_table_component__ = __webpack_require__("../../../../../src/app/material/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__table_people_database__ = __webpack_require__("../../../../../src/app/material/table/people-database.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__table_table_header_demo__ = __webpack_require__("../../../../../src/app/material/table/table-header-demo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var MaterialComponentsModule = (function () {
    function MaterialComponentsModule() {
    }
    return MaterialComponentsModule;
}());
MaterialComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__material_routing__["a" /* MaterialRoutes */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSelectionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_cdk__["_0" /* CdkTableModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* OverlayContainer */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* FullscreenOverlayContainer */] },
            __WEBPACK_IMPORTED_MODULE_32__table_people_database__["a" /* PeopleDatabase */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__buttons_buttons_component__["a" /* ButtonsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__cards_cards_component__["a" /* CardsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__["a" /* CheckboxComponent */],
            __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__["b" /* MdCheckboxDemoNestedChecklistComponent */],
            __WEBPACK_IMPORTED_MODULE_14__radio_radio_component__["a" /* RadioComponent */],
            __WEBPACK_IMPORTED_MODULE_15__toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__lists_lists_component__["a" /* ListsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__grid_grid_component__["a" /* GridComponent */],
            __WEBPACK_IMPORTED_MODULE_18__progress_progress_component__["a" /* ProgressComponent */],
            __WEBPACK_IMPORTED_MODULE_19__tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__toggle_toggle_component__["a" /* ToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_21__tooltip_tooltip_component__["a" /* TooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_22__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_23__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_24__snackbar_snackbar_component__["a" /* SnackbarComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_26__select_select_component__["a" /* SelectComponent */],
            __WEBPACK_IMPORTED_MODULE_27__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_28__chips_chips_component__["a" /* ChipsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__datepicker_datepicker_component__["a" /* DatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["b" /* ContentElementDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["c" /* IFrameDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["d" /* JazzDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_30__expansion_expansion_component__["a" /* ExpansionComponent */],
            __WEBPACK_IMPORTED_MODULE_31__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_33__table_table_header_demo__["a" /* TableHeaderDemoComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["b" /* ContentElementDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["c" /* IFrameDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dialog_dialog_component__["d" /* JazzDialogComponent */]
        ],
    })
], MaterialComponentsModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/material/material.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/material/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_cards_component__ = __webpack_require__("../../../../../src/app/material/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input_component__ = __webpack_require__("../../../../../src/app/material/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox_checkbox_component__ = __webpack_require__("../../../../../src/app/material/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__radio_radio_component__ = __webpack_require__("../../../../../src/app/material/radio/radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/material/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lists_lists_component__ = __webpack_require__("../../../../../src/app/material/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grid_grid_component__ = __webpack_require__("../../../../../src/app/material/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_progress_component__ = __webpack_require__("../../../../../src/app/material/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/material/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toggle_toggle_component__ = __webpack_require__("../../../../../src/app/material/toggle/toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/material/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__ = __webpack_require__("../../../../../src/app/material/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__slider_slider_component__ = __webpack_require__("../../../../../src/app/material/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__snackbar_snackbar_component__ = __webpack_require__("../../../../../src/app/material/snackbar/snackbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/material/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__select_select_component__ = __webpack_require__("../../../../../src/app/material/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_component__ = __webpack_require__("../../../../../src/app/material/autocomplete/autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__chips_chips_component__ = __webpack_require__("../../../../../src/app/material/chips/chips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/material/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__expansion_expansion_component__ = __webpack_require__("../../../../../src/app/material/expansion/expansion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__table_table_component__ = __webpack_require__("../../../../../src/app/material/table/table.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRoutes; });






















var MaterialRoutes = [
    {
        path: '',
        children: [{
                path: 'button',
                component: __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__["a" /* ButtonsComponent */]
            }, {
                path: 'cards',
                component: __WEBPACK_IMPORTED_MODULE_1__cards_cards_component__["a" /* CardsComponent */]
            }, {
                path: 'input',
                component: __WEBPACK_IMPORTED_MODULE_2__input_input_component__["a" /* InputComponent */]
            }, {
                path: 'checkbox',
                component: __WEBPACK_IMPORTED_MODULE_3__checkbox_checkbox_component__["a" /* CheckboxComponent */]
            }, {
                path: 'datepicker',
                component: __WEBPACK_IMPORTED_MODULE_19__datepicker_datepicker_component__["a" /* DatepickerComponent */]
            }, {
                path: 'radio',
                component: __WEBPACK_IMPORTED_MODULE_4__radio_radio_component__["a" /* RadioComponent */]
            }, {
                path: 'toolbar',
                component: __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__["a" /* ToolbarComponent */]
            }, {
                path: 'lists',
                component: __WEBPACK_IMPORTED_MODULE_6__lists_lists_component__["a" /* ListsComponent */]
            }, {
                path: 'grid',
                component: __WEBPACK_IMPORTED_MODULE_7__grid_grid_component__["a" /* GridComponent */]
            }, {
                path: 'progress',
                component: __WEBPACK_IMPORTED_MODULE_8__progress_progress_component__["a" /* ProgressComponent */]
            }, {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_9__tabs_tabs_component__["a" /* TabsComponent */]
            }, {
                path: 'switch',
                component: __WEBPACK_IMPORTED_MODULE_10__toggle_toggle_component__["a" /* ToggleComponent */]
            }, {
                path: 'tooltip',
                component: __WEBPACK_IMPORTED_MODULE_11__tooltip_tooltip_component__["a" /* TooltipComponent */]
            }, {
                path: 'menu',
                component: __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__["a" /* MenuComponent */]
            }, {
                path: 'slider',
                component: __WEBPACK_IMPORTED_MODULE_13__slider_slider_component__["a" /* SliderComponent */]
            }, {
                path: 'snackbar',
                component: __WEBPACK_IMPORTED_MODULE_14__snackbar_snackbar_component__["a" /* SnackbarComponent */]
            }, {
                path: 'dialog',
                component: __WEBPACK_IMPORTED_MODULE_15__dialog_dialog_component__["a" /* DialogComponent */]
            }, {
                path: 'select',
                component: __WEBPACK_IMPORTED_MODULE_16__select_select_component__["a" /* SelectComponent */]
            }, {
                path: 'autocomplete',
                component: __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */]
            }, {
                path: 'chips',
                component: __WEBPACK_IMPORTED_MODULE_18__chips_chips_component__["a" /* ChipsComponent */]
            }, {
                path: 'expansion',
                component: __WEBPACK_IMPORTED_MODULE_20__expansion_expansion_component__["a" /* ExpansionComponent */]
            }, {
                path: 'table',
                component: __WEBPACK_IMPORTED_MODULE_21__table_table_component__["a" /* TableComponent */]
            }]
    }
];
//# sourceMappingURL=material.routing.js.map

/***/ }),

/***/ "../../../../../src/app/material/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Menus (dropdowns)</md-card-title>\n  <md-card-subtitle>md-menu is a list of options that displays when triggered.</md-card-subtitle>\n\n  <md-card-content>\n    <p>You clicked on: {{ selected }}</p>\n  </md-card-content>\n  <md-toolbar>\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\" aria-label=\"Open basic menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n  </md-toolbar>\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item *ngFor=\"let item of items\" (click)=\"select(item.text)\" [disabled]=\"item.disabled\">\n      {{ item.text }}\n    </button>\n  </md-menu>\n\n  <md-card-content>\n    <p> Clicking these will navigate:</p>\n  </md-card-content>\n  <md-toolbar>\n    <button md-icon-button [mdMenuTriggerFor]=\"anchorMenu\" aria-label=\"Open anchor menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n  </md-toolbar>\n  <md-menu #anchorMenu=\"mdMenu\">\n    <a md-menu-item *ngFor=\"let item of items\" href=\"http://www.google.com\" [disabled]=\"item.disabled\">\n      {{ item.text }}\n    </a>\n  </md-menu>\n\n  <md-card-content>\n    <p>Position x: before</p>\n  </md-card-content>\n  <md-toolbar class=\"end-icon\">\n    <button md-icon-button [mdMenuTriggerFor]=\"posXMenu\" aria-label=\"Open x-positioned menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n  </md-toolbar>\n\n  <md-menu x-position=\"before\" #posXMenu=\"mdMenu\" class=\"before\">\n    <button md-menu-item *ngFor=\"let item of iconItems\" [disabled]=\"item.disabled\">\n      <md-icon>{{ item.icon }}</md-icon>\n      {{ item.text }}\n    </button>\n  </md-menu>\n\n  <md-card-content>\n    <p>Position y: above</p>\n  </md-card-content>\n  <md-toolbar>\n    <button md-icon-button [mdMenuTriggerFor]=\"posYMenu\" aria-label=\"Open y-positioned menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n  </md-toolbar>\n\n  <md-menu y-position=\"above\" #posYMenu=\"mdMenu\">\n    <button md-menu-item *ngFor=\"let item of items\" [disabled]=\"item.disabled\">\n      {{ item.text }}\n    </button>\n  </md-menu>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.selected = '';
        this.items = [{
                text: 'Refresh'
            }, {
                text: 'Settings'
            }, {
                text: 'Help',
                disabled: true
            }, {
                text: 'Sign Out'
            }];
        this.iconItems = [{
                text: 'Redial',
                icon: 'dialpad'
            }, {
                text: 'Check voicemail',
                icon: 'voicemail',
                disabled: true
            }, {
                text: 'Disable alerts',
                icon: 'notifications_off'
            }];
    }
    MenuComponent.prototype.select = function (text) {
        this.selected = text;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/material/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Progress spinner</md-card-title>\n  <md-card-subtitle>md-progress-spinner is a component for indicating progress and activity, matching the spec of Material Design Progress & Activity.</md-card-subtitle>\n  <md-card-content>\n    <p>Determinate</p>\n    <div class=\"mb-1\">\n      <div fxLayout=\"row\">\n        <md-progress-spinner mode=\"determinate\"\n                      [value]=\"progressValue\"\n                      class=\"primary\"></md-progress-spinner>\n        <md-progress-spinner mode=\"determinate\" [value]=\"progressValue\"\n                      color=\"accent\"></md-progress-spinner>\n        <md-progress-spinner mode=\"determinate\" [value]=\"progressValue\"\n                      color=\"warn\"></md-progress-spinner>\n      </div>\n    </div>\n\n    <button md-raised-button class=\"mr-1\" (click)=\"step(10)\">Increase</button>\n    <button md-raised-button (click)=\"step(-10)\">Decrease</button>\n\n    <p class=\"mt-1\">Indeterminate</p>\n    <div>\n      <div fxLayout=\"row\">\n        <md-progress-spinner mode=\"indeterminate\"\n                      class=\"primary\"></md-progress-spinner>\n        <md-progress-spinner mode=\"indeterminate\"\n                      color=\"accent\"></md-progress-spinner>\n        <md-progress-spinner mode=\"indeterminate\"\n                      color=\"warn\"></md-progress-spinner>\n      </div>\n    </div>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Progress bar</md-card-title>\n  <md-card-subtitle>md-progress-bar is a component for indicating progress and activity, matching the spec of Material Design Progress & Activity</md-card-subtitle>\n  <md-card-content>\n    <p>Determinate</p>\n    <md-progress-bar mode=\"determinate\"\n                       [value]=\"determinateProgressValue\"\n                       color=\"primary\"\n                       class=\"mb-1\"></md-progress-bar>\n    <button md-raised-button class=\"mr-1\" (click)=\"stepDeterminateProgressVal(10)\">Increase</button>\n    <button md-raised-button (click)=\"stepDeterminateProgressVal(-10)\">Decrease</button>\n\n    <p>Buffer</p>\n    <md-progress-bar [value]=\"bufferProgressValue\"\n                       [bufferValue]=\"bufferBufferValue\"\n                       mode=\"buffer\"\n                       color=\"warn\"\n                       class=\"mb-1\"></md-progress-bar>\n\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n      <button md-raised-button class=\"mr-1 mb-xs\" (click)=\"stepBufferProgressVal(10)\">Increase</button>\n      <button md-raised-button class=\"mb-xs\" (click)=\"stepBufferProgressVal(-10)\">Decrease</button>\n      <span fxFlex></span>\n      <button md-raised-button class=\"mr-1 mb-xs\" (click)=\"stepBufferBufferVal(10)\">Increase</button>\n      <button md-raised-button class=\"mb-xs\" (click)=\"stepBufferBufferVal(-10)\">Decrease</button>\n    </div>\n\n    <p>Indeterminate</p>\n    <md-progress-bar mode=\"indeterminate\"\n                       class=\"mb-1\"></md-progress-bar>\n\n    <p>Query</p>\n    <md-progress-bar mode=\"query\"\n                       class=\"mb-1\"></md-progress-bar>\n\n    <p>Colors</p>\n    <md-progress-bar mode=\"indeterminate\" color=\"primary\" class=\"mb-1\"></md-progress-bar>\n    <md-progress-bar mode=\"indeterminate\" color=\"accent\" class=\"mb-1\"></md-progress-bar>\n    <md-progress-bar mode=\"indeterminate\" color=\"warn\" class=\"mb-1\"></md-progress-bar>\n\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/material/progress/progress.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = (function () {
    function ProgressComponent() {
        this.progressValue = 40;
        this.determinateProgressValue = 30;
        this.bufferProgressValue = 30;
        this.bufferBufferValue = 40;
    }
    ProgressComponent.prototype.step = function (val) {
        this.progressValue += val;
    };
    ProgressComponent.prototype.stepDeterminateProgressVal = function (val) {
        this.determinateProgressValue += val;
    };
    ProgressComponent.prototype.stepBufferProgressVal = function (val) {
        this.bufferProgressValue += val;
    };
    ProgressComponent.prototype.stepBufferBufferVal = function (val) {
        this.bufferBufferValue += val;
    };
    return ProgressComponent;
}());
ProgressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-progress',
        template: __webpack_require__("../../../../../src/app/material/progress/progress.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/progress/progress.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProgressComponent);

//# sourceMappingURL=progress.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/radio/radio.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Radios</md-card-title>\n  <md-card-subtitle>Radio buttons allow the user to select one option from a set</md-card-subtitle>\n  <md-card-content>\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"mb-1\">\n      <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n        <p>Basic Example</p>\n        <div fxLayout=\"column\">\n          <md-radio-button name=\"group1\">Option 1</md-radio-button>\n          <md-radio-button name=\"group1\">Option 2</md-radio-button>\n          <md-radio-button name=\"group1\" disabled=\"true\">Option 3 (disabled)</md-radio-button>\n        </div>\n      </div>\n\n      <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n        <p>Color Example</p>\n        <div fxLayout=\"column\">\n          <md-radio-button name=\"group2\">Default (accent)</md-radio-button>\n          <md-radio-button name=\"group2\" color=\"primary\">Primary</md-radio-button>\n          <md-radio-button name=\"group2\" color=\"accent\">Accent</md-radio-button>\n          <md-radio-button name=\"group2\" color=\"warn\">Warn</md-radio-button>\n        </div>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n      <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n        <p>Dynamic Example</p>\n        <div>\n          <md-radio-group name=\"my_options\" [disabled]=\"isDisabled\" [align]=\"isAlignEnd ? 'end' : 'start'\" fxLayout=\"column\">\n            <md-radio-button value=\"option_1\">Option 1</md-radio-button>\n            <md-radio-button value=\"option_2\">Option 2</md-radio-button>\n            <md-radio-button value=\"option_3\">Option 3</md-radio-button>\n          </md-radio-group>\n          <p>\n            <span>isDisabled: {{isDisabled}}</span>\n            <button (click)=\"isDisabled=!isDisabled\" class=\"demo-button\">\n              Disable buttons\n            </button>\n          </p>\n          <p>\n            <span><md-checkbox [(ngModel)]=\"isAlignEnd\">Align end</md-checkbox></span>\n          </p>\n        </div>\n      </div>\n      <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n        <p>Dynamic Example with two-way data-binding</p>\n        <div>\n          <md-radio-group name=\"more_options\" [(ngModel)]=\"favoriteSeason\"  fxLayout=\"column\">\n            <md-radio-button *ngFor=\"let season of seasonOptions\" name=\"more_options\" [value]=\"season\">\n              {{season}}\n            </md-radio-button>\n          </md-radio-group>\n          <p>Your favorite season is: {{favoriteSeason}}</p>\n        </div>\n      </div>\n    </div>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/radio/radio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/radio/radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadioComponent = (function () {
    function RadioComponent() {
        this.isDisabled = false;
        this.isAlignEnd = false;
        this.favoriteSeason = 'Autumn';
        this.seasonOptions = ['Winter', 'Spring', 'Summer', 'Autumn',];
    }
    return RadioComponent;
}());
RadioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-radio',
        template: __webpack_require__("../../../../../src/app/material/radio/radio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/radio/radio.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RadioComponent);

//# sourceMappingURL=radio.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Select</md-card-title>\n  <md-card-subtitle>ngModel</md-card-subtitle>\n  <md-card-content>\n    <md-select placeholder=\"Drink\" [color]=\"drinksTheme\" [(ngModel)]=\"currentDrink\" [required]=\"drinksRequired\"\n      [disabled]=\"drinksDisabled\" [floatPlaceholder]=\"floatPlaceholder\" #drinkControl=\"ngModel\">\n      <md-option>None</md-option>\n      <md-option *ngFor=\"let drink of drinks\" [value]=\"drink.value\" [disabled]=\"drink.disabled\">\n        {{ drink.viewValue }}\n      </md-option>\n    </md-select>\n    <p class=\"text-md\"> Value: {{ currentDrink }} </p>\n    <p class=\"text-md\"> Touched: {{ drinkControl.touched }} </p>\n    <p class=\"text-md\"> Dirty: {{ drinkControl.dirty }} </p>\n    <p class=\"text-md\"> Status: {{ drinkControl.control?.status }} </p>\n    <p>\n      <label for=\"floating-placeholder\">Floating placeholder:</label>\n      <select [(ngModel)]=\"floatPlaceholder\" id=\"floating-placeholder\">\n        <option value=\"auto\">Auto</option>\n        <option value=\"always\">Always</option>\n        <option value=\"never\">Never</option>\n      </select>\n    </p>\n    <p>\n      <label for=\"drinks-theme\">Theme:</label>\n      <select [(ngModel)]=\"drinksTheme\" id=\"drinks-theme\">\n        <option *ngFor=\"let theme of availableThemes\" [value]=\"theme.value\">{{ theme.name }}</option>\n      </select>\n    </p>\n\n    <button md-button (click)=\"currentDrink='water-2'\">SET VALUE</button>\n    <button md-button (click)=\"drinksRequired=!drinksRequired\">TOGGLE REQUIRED</button>\n    <button md-button (click)=\"drinksDisabled=!drinksDisabled\">TOGGLE DISABLED</button>\n    <button md-button (click)=\"drinkControl.reset()\">RESET</button>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Select</md-card-title>\n  <md-card-subtitle>Multiple selection</md-card-subtitle>\n  <md-card-content>\n    <md-select multiple [color]=\"pokemonTheme\" placeholder=\"Pokemon\" [(ngModel)]=\"currentPokemon\"\n      [required]=\"pokemonRequired\" [disabled]=\"pokemonDisabled\" #pokemonControl=\"ngModel\">\n      <md-option *ngFor=\"let creature of pokemon\" [value]=\"creature.value\">\n        {{ creature.viewValue }}\n      </md-option>\n    </md-select>\n    <p class=\"text-md\"> Value: {{ currentPokemon }} </p>\n    <p class=\"text-md\"> Touched: {{ pokemonControl.touched }} </p>\n    <p class=\"text-md\"> Dirty: {{ pokemonControl.dirty }} </p>\n    <p class=\"text-md\"> Status: {{ pokemonControl.control?.status }} </p>\n    <p>\n      <label for=\"pokemon-theme\">Theme:</label>\n      <select [(ngModel)]=\"pokemonTheme\" id=\"pokemon-theme\">\n        <option *ngFor=\"let theme of availableThemes\" [value]=\"theme.value\">{{ theme.name }}</option>\n      </select>\n    </p>\n    <button md-button (click)=\"setPokemonValue()\">SET VALUE</button>\n    <button md-button (click)=\"pokemonRequired=!pokemonRequired\">TOGGLE REQUIRED</button>\n    <button md-button (click)=\"pokemonDisabled=!pokemonDisabled\">TOGGLE DISABLED</button>\n    <button md-button (click)=\"pokemonControl.reset()\">RESET</button>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Select</md-card-title>\n  <md-card-subtitle>Option groups</md-card-subtitle>\n  <md-card-content>\n    <md-select placeholder=\"Pokemon\" [(ngModel)]=\"currentPokemonFromGroup\">\n      <md-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n        [disabled]=\"group.disabled\">\n        <md-option *ngFor=\"let creature of group.pokemon\" [value]=\"creature.value\">\n          {{ creature.viewValue }}\n        </md-option>\n      </md-optgroup>\n    </md-select>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/select/select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectComponent = (function () {
    function SelectComponent() {
        this.drinksRequired = false;
        this.pokemonRequired = false;
        this.drinksDisabled = false;
        this.pokemonDisabled = false;
        this.showSelect = false;
        this.floatPlaceholder = 'auto';
        this.foodControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('pizza-1');
        this.topHeightCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0);
        this.drinksTheme = 'primary';
        this.pokemonTheme = 'primary';
        this.foods = [
            { value: null, viewValue: 'None' },
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.drinks = [
            { value: 'coke-0', viewValue: 'Coke' },
            { value: 'long-name-1', viewValue: 'Decaf Chocolate Brownie Vanilla Gingerbread Frappuccino' },
            { value: 'water-2', viewValue: 'Water' },
            { value: 'pepper-3', viewValue: 'Dr. Pepper' },
            { value: 'coffee-4', viewValue: 'Coffee' },
            { value: 'tea-5', viewValue: 'Tea' },
            { value: 'juice-6', viewValue: 'Orange juice' },
            { value: 'wine-7', viewValue: 'Wine' },
            { value: 'milk-8', viewValue: 'Milk' },
        ];
        this.pokemon = [
            { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
            { value: 'charizard-1', viewValue: 'Charizard' },
            { value: 'squirtle-2', viewValue: 'Squirtle' },
            { value: 'pikachu-3', viewValue: 'Pikachu' },
            { value: 'eevee-4', viewValue: 'Eevee' },
            { value: 'ditto-5', viewValue: 'Ditto' },
            { value: 'psyduck-6', viewValue: 'Psyduck' },
        ];
        this.availableThemes = [
            { value: 'primary', name: 'Primary' },
            { value: 'accent', name: 'Accent' },
            { value: 'warn', name: 'Warn' }
        ];
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
    SelectComponent.prototype.toggleDisabled = function () {
        this.foodControl.enabled ? this.foodControl.disable() : this.foodControl.enable();
    };
    SelectComponent.prototype.setPokemonValue = function () {
        this.currentPokemon = ['eevee-4', 'psyduck-6'];
    };
    return SelectComponent;
}());
SelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-select',
        template: __webpack_require__("../../../../../src/app/material/select/select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/select/select.component.scss")]
    })
], SelectComponent);

//# sourceMappingURL=select.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Slider</md-card-title>\n  <md-card-subtitle>md-slider is a component that allows users to select from a range of values by moving the slider thumb</md-card-subtitle>\n  <md-card-content>\n    <p>Default Slider</p>\n    Label <md-slider #slidey></md-slider>\n    {{slidey.value}}\n\n    <p>Slider with Min and Max</p>\n    <input [(ngModel)]=\"min\">\n    <md-slider [min]=\"min\" [max]=\"max\" tick-interval=\"5\" #slider2></md-slider>\n    {{slider2.value}}\n    <input [(ngModel)]=\"max\">\n\n    <p>Disabled Slider</p>\n    <md-slider disabled #slider3></md-slider>\n    {{slider3.value}}\n\n    <p>Slider with set value</p>\n    <md-slider value=\"43\"></md-slider>\n\n    <p>Slider with step defined</p>\n    <md-slider min=\"1\" max=\"100\" step=\"20\" #slider5></md-slider>\n    {{slider5.value}}\n\n    <p>Slider with set tick interval</p>\n    <md-slider tick-interval=\"auto\"></md-slider>\n    <md-slider tick-interval=\"9\"></md-slider>\n\n    <p>Slider with Thumb Label</p>\n    <md-slider thumb-label></md-slider>\n\n    <p>Slider with one-way binding</p>\n    <md-slider [value]=\"val\" step=\"40\"></md-slider>\n    <input [(ngModel)]=\"val\">\n\n    <p>Slider with two-way binding</p>\n    <md-slider [(ngModel)]=\"demo\" step=\"40\"></md-slider>\n    <input [(ngModel)]=\"demo\">\n\n    <p>Inverted slider</p>\n    <md-slider invert value=\"50\" tick-interval=\"5\"></md-slider>\n\n    <p>Vertical slider</p>\n    <md-slider vertical thumb-label tick-interval=\"auto\" value=\"50\"></md-slider>\n\n    <p>Inverted vertical slider</p>\n    <md-slider vertical invert thumb-label tick-interval=\"auto\" value=\"50\"></md-slider>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/material/slider/slider.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
        this.val = 50;
        this.min = 0;
        this.max = 100;
    }
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__("../../../../../src/app/material/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/slider/slider.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/snackbar/snackbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Snack Bar</md-card-title>\n  <md-card-subtitle>MdSnackBar is a service, which opens snack bar notifications in the view.</md-card-subtitle>\n  <md-card-content>\n    <p>Message: <md-input-container><input mdInput type=\"text\" [(ngModel)]=\"message\"></md-input-container></p>\n    <md-checkbox [(ngModel)]=\"action\">\n      <p *ngIf=\"!action\">Show button on snack bar</p>\n      <md-input-container *ngIf=\"action\">\n        <input mdInput\n               type=\"text\"\n               class=\"demo-button-label-input\"\n               placeholder=\"Snack bar action label\"\n               [(ngModel)]=\"actionButtonLabel\">\n      </md-input-container>\n    </md-checkbox>\n\n    <md-checkbox [(ngModel)]=\"setAutoHide\">\n      <p *ngIf=\"!setAutoHide\">Auto hide after duration</p>\n      <md-input-container *ngIf=\"setAutoHide\">\n        <input mdInput\n               type=\"number\"\n               class=\"demo-button-label-input\"\n               placeholder=\"Auto Hide Duration in ms\"\n               [(ngModel)]=\"autoHide\">\n      </md-input-container>\n    </md-checkbox>\n    <p><md-checkbox [(ngModel)]=\"addExtraClass\">Add extra class to container</md-checkbox></p>\n    <button md-raised-button (click)=\"open()\">Show Snack bar</button>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/material/snackbar/snackbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/snackbar/snackbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarComponent = (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 10000;
        this.addExtraClass = false;
    }
    SnackbarComponent.prototype.open = function () {
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdSnackBarConfig */]();
        config.duration = this.autoHide;
        config.extraClasses = this.addExtraClass ? ['party'] : null;
        this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
    };
    return SnackbarComponent;
}());
SnackbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-snackbar',
        template: __webpack_require__("../../../../../src/app/material/snackbar/snackbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/snackbar/snackbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdSnackBar */]) === "function" && _a || Object])
], SnackbarComponent);

var _a;
//# sourceMappingURL=snackbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/table/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
var COLORS = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'Darkorange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen'
];
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "../../../../../src/app/material/table/names.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAMES; });
var NAMES = [
    'Abbott',
    'Acevedo',
    'Acosta',
    'Adams',
    'Adkins',
    'Aguilar',
    'Aguirre',
    'Albert',
    'Alexander',
    'Alford',
    'Allen',
    'Allison',
    'Alston',
    'Alvarado',
    'Alvarez',
    'Anderson',
    'Andrews',
    'Anthony',
    'Armstrong',
    'Arnold',
    'Ashley',
    'Atkins',
    'Atkinson',
    'Austin',
    'Avery',
    'Avila',
    'Ayala',
    'Ayers',
    'Bailey',
    'Baird',
    'Baker',
    'Baldwin',
    'Ball',
    'Ballard',
    'Banks',
    'Barber',
    'Barker',
    'Barlow',
    'Barnes',
    'Barnett',
    'Barr',
    'Barrera',
    'Barrett',
    'Barron',
    'Barry',
    'Bartlett',
    'Barton',
    'Bass',
    'Bates',
    'Battle',
    'Bauer',
    'Baxter',
    'Beach',
    'Bean',
    'Beard',
    'Beasley',
    'Beck',
    'Becker',
    'Bell',
    'Bender',
    'Benjamin',
    'Bennett',
    'Benson',
    'Bentley',
    'Benton',
    'Berg',
    'Berger',
    'Bernard',
    'Berry',
    'Best',
    'Bird',
    'Bishop',
    'Black',
    'Blackburn',
    'Blackwell',
    'Blair',
    'Blake',
    'Blanchard',
    'Blankenship',
    'Blevins',
    'Bolton',
    'Bond',
    'Bonner',
    'Booker',
    'Boone',
    'Booth',
    'Bowen',
    'Bowers',
    'Bowman',
    'Boyd',
    'Boyer',
    'Boyle',
    'Bradford',
    'Bradley',
    'Bradshaw',
    'Brady',
    'Branch',
    'Bray',
    'Brennan',
    'Brewer',
    'Bridges',
    'Briggs',
    'Bright',
    'Britt',
    'Brock',
    'Brooks',
    'Brown',
    'Browning',
    'Bruce',
    'Bryan',
    'Bryant',
    'Buchanan',
    'Buck',
    'Buckley',
    'Buckner',
    'Bullock',
    'Burch',
    'Burgess',
    'Burke',
    'Burks',
    'Burnett',
    'Burns',
    'Burris',
    'Burt',
    'Burton',
    'Bush',
    'Butler',
    'Byers',
    'Byrd',
    'Cabrera',
    'Cain',
    'Calderon',
    'Caldwell',
    'Calhoun',
    'Callahan',
    'Camacho',
    'Cameron',
    'Campbell',
    'Campos',
    'Cannon',
    'Cantrell',
    'Cantu',
    'Cardenas',
    'Carey',
    'Carlson',
    'Carney',
    'Carpenter',
    'Carr',
    'Carrillo',
    'Carroll',
    'Carson',
    'Carter',
    'Carver',
    'Case',
    'Casey',
    'Cash',
    'Castaneda',
    'Castillo',
    'Castro',
    'Cervantes',
    'Chambers',
    'Chan',
    'Chandler',
    'Chaney',
    'Chang',
    'Chapman',
    'Charles',
    'Chase',
    'Chavez',
    'Chen',
    'Cherry',
    'Christensen',
    'Christian',
    'Church',
    'Clark',
    'Clarke',
    'Clay',
    'Clayton',
    'Clements',
    'Clemons',
    'Cleveland',
    'Cline',
    'Cobb',
    'Cochran',
    'Coffey',
    'Cohen',
    'Cole',
    'Coleman',
    'Collier',
    'Collins',
    'Colon',
    'Combs',
    'Compton',
    'Conley',
    'Conner',
    'Conrad',
    'Contreras',
    'Conway',
    'Cook',
    'Cooke',
    'Cooley',
    'Cooper',
    'Copeland',
    'Cortez',
    'Cote',
    'Cotton',
    'Cox',
    'Craft',
    'Craig',
    'Crane',
    'Crawford',
    'Crosby',
    'Cross',
    'Cruz',
    'Cummings',
    'Cunningham',
    'Curry',
    'Curtis',
    'Dale',
    'Dalton',
    'Daniel',
    'Daniels',
    'Daugherty',
    'Davenport',
    'David',
    'Davidson',
    'Davis',
    'Dawson',
    'Day',
    'Dean',
    'Decker',
    'Dejesus',
    'Delacruz',
    'Delaney',
    'Deleon',
    'Delgado',
    'Dennis',
    'Diaz',
    'Dickerson',
    'Dickson',
    'Dillard',
    'Dillon',
    'Dixon',
    'Dodson',
    'Dominguez',
    'Donaldson',
    'Donovan',
    'Dorsey',
    'Dotson',
    'Douglas',
    'Downs',
    'Doyle',
    'Drake',
    'Dudley',
    'Duffy',
    'Duke',
    'Duncan',
    'Dunlap',
    'Dunn',
    'Duran',
    'Durham',
    'Dyer',
    'Eaton',
    'Edwards',
    'Elliott',
    'Ellis',
    'Ellison',
    'Emerson',
    'England',
    'English',
    'Erickson',
    'Espinoza',
    'Estes',
    'Estrada',
    'Evans',
    'Everett',
    'Ewing',
    'Farley',
    'Farmer',
    'Farrell',
    'Faulkner',
    'Ferguson',
    'Fernandez',
    'Ferrell',
    'Fields',
    'Figueroa',
    'Finch',
    'Finley',
    'Fischer',
    'Fisher',
    'Fitzgerald',
    'Fitzpatrick',
    'Fleming',
    'Fletcher',
    'Flores',
    'Flowers',
    'Floyd',
    'Flynn',
    'Foley',
    'Forbes',
    'Ford',
    'Foreman',
    'Foster',
    'Fowler',
    'Fox',
    'Francis',
    'Franco',
    'Frank',
    'Franklin',
    'Franks',
    'Frazier',
    'Frederick',
    'Freeman',
    'French',
    'Frost',
    'Fry',
    'Frye',
    'Fuentes',
    'Fuller',
    'Fulton',
    'Gaines',
    'Gallagher',
    'Gallegos',
    'Galloway',
    'Gamble',
    'Garcia',
    'Gardner',
    'Garner',
    'Garrett',
    'Garrison',
    'Garza',
    'Gates',
    'Gay',
    'Gentry',
    'George',
    'Gibbs',
    'Gibson',
    'Gilbert',
    'Giles',
    'Gill',
    'Gillespie',
    'Gilliam',
    'Gilmore',
    'Glass',
    'Glenn',
    'Glover',
    'Goff',
    'Golden',
    'Gomez',
    'Gonzales',
    'Gonzalez',
    'Good',
    'Goodman',
    'Goodwin',
    'Gordon',
    'Gould',
    'Graham',
    'Grant',
    'Graves',
    'Gray',
    'Green',
    'Greene',
    'Greer',
    'Gregory',
    'Griffin',
    'Griffith',
    'Grimes',
    'Gross',
    'Guerra',
    'Guerrero',
    'Guthrie',
    'Gutierrez',
    'Guy',
    'Guzman',
    'Hahn',
    'Hale',
    'Haley',
    'Hall',
    'Hamilton',
    'Hammond',
    'Hampton',
    'Hancock',
    'Haney',
    'Hansen',
    'Hanson',
    'Hardin',
    'Harding',
    'Hardy',
    'Harmon',
    'Harper',
    'Harrell',
    'Harrington',
    'Harris',
    'Harrison',
    'Hart',
    'Hartman',
    'Harvey',
    'Hatfield',
    'Hawkins',
    'Hayden',
    'Hayes',
    'Haynes',
    'Hays',
    'Head',
    'Heath',
    'Hebert',
    'Henderson',
    'Hendricks',
    'Hendrix',
    'Henry',
    'Hensley',
    'Henson',
    'Herman',
    'Hernandez',
    'Herrera',
    'Herring',
    'Hess',
    'Hester',
    'Hewitt',
    'Hickman',
    'Hicks',
    'Higgins',
    'Hill',
    'Hines',
    'Hinton',
    'Hobbs',
    'Hodge',
    'Hodges',
    'Hoffman',
    'Hogan',
    'Holcomb',
    'Holden',
    'Holder',
    'Holland',
    'Holloway',
    'Holman',
    'Holmes',
    'Holt',
    'Hood',
    'Hooper',
    'Hoover',
    'Hopkins',
    'Hopper',
    'Horn',
    'Horne',
    'Horton',
    'House',
    'Houston',
    'Howard',
    'Howe',
    'Howell',
    'Hubbard',
    'Huber',
    'Hudson',
    'Huff',
    'Huffman',
    'Hughes',
    'Hull',
    'Humphrey',
    'Hunt',
    'Hunter',
    'Hurley',
    'Hurst',
    'Hutchinson',
    'Hyde',
    'Ingram',
    'Irwin',
    'Jackson',
    'Jacobs',
    'Jacobson',
    'James',
    'Jarvis',
    'Jefferson',
    'Jenkins',
    'Jennings',
    'Jensen',
    'Jimenez',
    'Johns',
    'Johnson',
    'Johnston',
    'Jones',
    'Jordan',
    'Joseph',
    'Joyce',
    'Joyner',
    'Juarez',
    'Justice',
    'Kane',
    'Kaufman',
    'Keith',
    'Keller',
    'Kelley',
    'Kelly',
    'Kemp',
    'Kennedy',
    'Kent',
    'Kerr',
    'Key',
    'Kidd',
    'Kim',
    'King',
    'Kinney',
    'Kirby',
    'Kirk',
    'Kirkland',
    'Klein',
    'Kline',
    'Knapp',
    'Knight',
    'Knowles',
    'Knox',
    'Koch',
    'Kramer',
    'Lamb',
    'Lambert',
    'Lancaster',
    'Landry',
    'Lane',
    'Lang',
    'Langley',
    'Lara',
    'Larsen',
    'Larson',
    'Lawrence',
    'Lawson',
    'Le',
    'Leach',
    'Leblanc',
    'Lee',
    'Leon',
    'Leonard',
    'Lester',
    'Levine',
    'Levy',
    'Lewis',
    'Lindsay',
    'Lindsey',
    'Little',
    'Livingston',
    'Lloyd',
    'Logan',
    'Long',
    'Lopez',
    'Lott',
    'Love',
    'Lowe',
    'Lowery',
    'Lucas',
    'Luna',
    'Lynch',
    'Lynn',
    'Lyons',
    'Macdonald',
    'Macias',
    'Mack',
    'Madden',
    'Maddox',
    'Maldonado',
    'Malone',
    'Mann',
    'Manning',
    'Marks',
    'Marquez',
    'Marsh',
    'Marshall',
    'Martin',
    'Martinez',
    'Mason',
    'Massey',
    'Mathews',
    'Mathis',
    'Matthews',
    'Maxwell',
    'May',
    'Mayer',
    'Maynard',
    'Mayo',
    'Mays',
    'Mcbride',
    'Mccall',
    'Mccarthy',
    'Mccarty',
    'Mcclain',
    'Mcclure',
    'Mcconnell',
    'Mccormick',
    'Mccoy',
    'Mccray',
    'Mccullough',
    'Mcdaniel',
    'Mcdonald',
    'Mcdowell',
    'Mcfadden',
    'Mcfarland',
    'Mcgee',
    'Mcgowan',
    'Mcguire',
    'Mcintosh',
    'Mcintyre',
    'Mckay',
    'Mckee',
    'Mckenzie',
    'Mckinney',
    'Mcknight',
    'Mclaughlin',
    'Mclean',
    'Mcleod',
    'Mcmahon',
    'Mcmillan',
    'Mcneil',
    'Mcpherson',
    'Meadows',
    'Medina',
    'Mejia',
    'Melendez',
    'Melton',
    'Mendez',
    'Mendoza',
    'Mercado',
    'Mercer',
    'Merrill',
    'Merritt',
    'Meyer',
    'Meyers',
    'Michael',
    'Middleton',
    'Miles',
    'Miller',
    'Mills',
    'Miranda',
    'Mitchell',
    'Molina',
    'Monroe',
    'Montgomery',
    'Montoya',
    'Moody',
    'Moon',
    'Mooney',
    'Moore',
    'Morales',
    'Moran',
    'Moreno',
    'Morgan',
    'Morin',
    'Morris',
    'Morrison',
    'Morrow',
    'Morse',
    'Morton',
    'Moses',
    'Mosley',
    'Moss',
    'Mueller',
    'Mullen',
    'Mullins',
    'Munoz',
    'Murphy',
    'Murray',
    'Myers',
    'Nash',
    'Navarro',
    'Neal',
    'Nelson',
    'Newman',
    'Newton',
    'Nguyen',
    'Nichols',
    'Nicholson',
    'Nielsen',
    'Nieves',
    'Nixon',
    'Noble',
    'Noel',
    'Nolan',
    'Norman',
    'Norris',
    'Norton',
    'Nunez',
    'Obrien',
    'Ochoa',
    'Oconnor',
    'Odom',
    'Odonnell',
    'Oliver',
    'Olsen',
    'Olson',
    'Oneal',
    'Oneil',
    'Oneill',
    'Orr',
    'Ortega',
    'Ortiz',
    'Osborn',
    'Osborne',
    'Owen',
    'Owens',
    'Pace',
    'Pacheco',
    'Padilla',
    'Page',
    'Palmer',
    'Park',
    'Parker',
    'Parks',
    'Parrish',
    'Parsons',
    'Pate',
    'Patel',
    'Patrick',
    'Patterson',
    'Patton',
    'Paul',
    'Payne',
    'Pearson',
    'Peck',
    'Pena',
    'Pennington',
    'Perez',
    'Perkins',
    'Perry',
    'Peters',
    'Petersen',
    'Peterson',
    'Petty',
    'Phelps',
    'Phillips',
    'Pickett',
    'Pierce',
    'Pittman',
    'Pitts',
    'Pollard',
    'Poole',
    'Pope',
    'Porter',
    'Potter',
    'Potts',
    'Powell',
    'Powers',
    'Pratt',
    'Preston',
    'Price',
    'Prince',
    'Pruitt',
    'Puckett',
    'Pugh',
    'Quinn',
    'Ramirez',
    'Ramos',
    'Ramsey',
    'Randall',
    'Randolph',
    'Rasmussen',
    'Ratliff',
    'Ray',
    'Raymond',
    'Reed',
    'Reese',
    'Reeves',
    'Reid',
    'Reilly',
    'Reyes',
    'Reynolds',
    'Rhodes',
    'Rice',
    'Rich',
    'Richard',
    'Richards',
    'Richardson',
    'Richmond',
    'Riddle',
    'Riggs',
    'Riley',
    'Rios',
    'Rivas',
    'Rivera',
    'Rivers',
    'Roach',
    'Robbins',
    'Roberson',
    'Roberts',
    'Robertson',
    'Robinson',
    'Robles',
    'Rocha',
    'Rodgers',
    'Rodriguez',
    'Rodriquez',
    'Rogers',
    'Rojas',
    'Rollins',
    'Roman',
    'Romero',
    'Rosa',
    'Rosales',
    'Rosario',
    'Rose',
    'Ross',
    'Roth',
    'Rowe',
    'Rowland',
    'Roy',
    'Ruiz',
    'Rush',
    'Russell',
    'Russo',
    'Rutledge',
    'Ryan',
    'Salas',
    'Salazar',
    'Salinas',
    'Sampson',
    'Sanchez',
    'Sanders',
    'Sandoval',
    'Sanford',
    'Santana',
    'Santiago',
    'Santos',
    'Sargent',
    'Saunders',
    'Savage',
    'Sawyer',
    'Schmidt',
    'Schneider',
    'Schroeder',
    'Schultz',
    'Schwartz',
    'Scott',
    'Sears',
    'Sellers',
    'Serrano',
    'Sexton',
    'Shaffer',
    'Shannon',
    'Sharp',
    'Sharpe',
    'Shaw',
    'Shelton',
    'Shepard',
    'Shepherd',
    'Sheppard',
    'Sherman',
    'Shields',
    'Short',
    'Silva',
    'Simmons',
    'Simon',
    'Simpson',
    'Sims',
    'Singleton',
    'Skinner',
    'Slater',
    'Sloan',
    'Small',
    'Smith',
    'Snider',
    'Snow',
    'Snyder',
    'Solis',
    'Solomon',
    'Sosa',
    'Soto',
    'Sparks',
    'Spears',
    'Spence',
    'Spencer',
    'Stafford',
    'Stanley',
    'Stanton',
    'Stark',
    'Steele',
    'Stein',
    'Stephens',
    'Stephenson',
    'Stevens',
    'Stevenson',
    'Stewart',
    'Stokes',
    'Stone',
    'Stout',
    'Strickland',
    'Strong',
    'Stuart',
    'Suarez',
    'Sullivan',
    'Summers',
    'Sutton',
    'Swanson',
    'Sweeney',
    'Sweet',
    'Sykes',
    'Talley',
    'Tanner',
    'Tate',
    'Taylor',
    'Terrell',
    'Terry',
    'Thomas',
    'Thompson',
    'Thornton',
    'Tillman',
    'Todd',
    'Torres',
    'Townsend',
    'Tran',
    'Travis',
    'Trevino',
    'Trujillo',
    'Tucker',
    'Turner',
    'Tyler',
    'Tyson',
    'Underwood',
    'Valdez',
    'Valencia',
    'Valentine',
    'Valenzuela',
    'Vance',
    'Vang',
    'Vargas',
    'Vasquez',
    'Vaughan',
    'Vaughn',
    'Vazquez',
    'Vega',
    'Velasquez',
    'Velazquez',
    'Velez',
    'Villarreal',
    'Vincent',
    'Vinson',
    'Wade',
    'Wagner',
    'Walker',
    'Wall',
    'Wallace',
    'Waller',
    'Walls',
    'Walsh',
    'Walter',
    'Walters',
    'Walton',
    'Ward',
    'Ware',
    'Warner',
    'Warren',
    'Washington',
    'Waters',
    'Watkins',
    'Watson',
    'Watts',
    'Weaver',
    'Webb',
    'Weber',
    'Webster',
    'Weeks',
    'Weiss',
    'Welch',
    'Wells',
    'West',
    'Wheeler',
    'Whitaker',
    'White',
    'Whitehead',
    'Whitfield',
    'Whitley',
    'Whitney',
    'Wiggins',
    'Wilcox',
    'Wilder',
    'Wiley',
    'Wilkerson',
    'Wilkins',
    'Wilkinson',
    'William',
    'Williams',
    'Williamson',
    'Willis',
    'Wilson',
    'Winters',
    'Wise',
    'Witt',
    'Wolf',
    'Wolfe',
    'Wong',
    'Wood',
    'Woodard',
    'Woods',
    'Woodward',
    'Wooten',
    'Workman',
    'Wright',
    'Wyatt',
    'Wynn',
    'Yang',
    'Yates',
    'York',
    'Young',
    'Zamora',
    'Zimmerman'
];
//# sourceMappingURL=names.js.map

/***/ }),

/***/ "../../../../../src/app/material/table/people-database.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__names__ = __webpack_require__("../../../../../src/app/material/table/names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colors__ = __webpack_require__("../../../../../src/app/material/table/colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* unused harmony export LATEST_ID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleDatabase; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LATEST_ID = 0;
var PeopleDatabase = (function () {
    function PeopleDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(PeopleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    PeopleDatabase.prototype.initialize = function () {
        LATEST_ID = 0;
        this.dataChange.next([]);
        for (var i = 0; i < 100; i++) {
            this.addPerson();
        }
    };
    PeopleDatabase.prototype.shuffle = function (changeReferences) {
        var copiedData = this.data.slice();
        for (var i = copiedData.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [copiedData[j], copiedData[i - 1]], copiedData[i - 1] = _a[0], copiedData[j] = _a[1];
        }
        if (changeReferences) {
            copiedData = copiedData.map(function (userData) {
                return {
                    id: userData.id,
                    name: userData.name,
                    progress: userData.progress,
                    color: userData.color
                };
            });
        }
        this.dataChange.next(copiedData);
        var _a;
    };
    PeopleDatabase.prototype.addPerson = function () {
        var name = __WEBPACK_IMPORTED_MODULE_1__names__["a" /* NAMES */][Math.round(Math.random() * (__WEBPACK_IMPORTED_MODULE_1__names__["a" /* NAMES */].length - 1))] + ' ' +
            __WEBPACK_IMPORTED_MODULE_1__names__["a" /* NAMES */][Math.round(Math.random() * (__WEBPACK_IMPORTED_MODULE_1__names__["a" /* NAMES */].length - 1))].charAt(0) + '.';
        var copiedData = this.data.slice();
        copiedData.push({
            id: (++LATEST_ID).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: __WEBPACK_IMPORTED_MODULE_2__colors__["a" /* COLORS */][Math.round(Math.random() * (__WEBPACK_IMPORTED_MODULE_2__colors__["a" /* COLORS */].length - 1))]
        });
        this.dataChange.next(copiedData);
    };
    return PeopleDatabase;
}());
PeopleDatabase = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PeopleDatabase);

//# sourceMappingURL=people-database.js.map

/***/ }),

/***/ "../../../../../src/app/material/table/person-data-source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonDataSource; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var PersonDataSource = (function (_super) {
    __extends(PersonDataSource, _super);
    function PersonDataSource(_peopleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._peopleDatabase = _peopleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        return _this;
    }
    PersonDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._paginator.page,
            this._sort.mdSortChange,
            this._peopleDatabase.dataChange
        ];
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var data = _this.getSortedData();
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    PersonDataSource.prototype.disconnect = function () {
        // No-op
    };
    /** Returns a sorted copy of the database data. */
    PersonDataSource.prototype.getSortedData = function () {
        var _this = this;
        var data = this._peopleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return PersonDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk__["_1" /* DataSource */]));

//# sourceMappingURL=person-data-source.js.map

/***/ }),

/***/ "../../../../../src/app/material/table/table-header-demo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  MdTable Example\n</div>\n\n<div class=\"actions\">\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item (click)=\"shiftColumns.next()\">\n      <md-icon>subdirectory_arrow_left</md-icon>\n      Shift Columns Left\n    </button>\n    <button md-menu-item (click)=\"toggleColorColumn.next()\">\n      <md-icon>color_lens</md-icon>\n      Toggle Color Column\n    </button>\n  </md-menu>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/material/table/table-header-demo.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  min-height: 64px;\n  padding: 0 24px; }\n\n.title {\n  font-size: 16px; }\n\n.actions {\n  color: rgba(0, 0, 0, 0.54); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/table/table-header-demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableHeaderDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableHeaderDemoComponent = (function () {
    function TableHeaderDemoComponent() {
        this.shiftColumns = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleColorColumn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return TableHeaderDemoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TableHeaderDemoComponent.prototype, "shiftColumns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TableHeaderDemoComponent.prototype, "toggleColorColumn", void 0);
TableHeaderDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-header-demo',
        template: __webpack_require__("../../../../../src/app/material/table/table-header-demo.html"),
        styles: [__webpack_require__("../../../../../src/app/material/table/table-header-demo.scss")],
    })
], TableHeaderDemoComponent);

//# sourceMappingURL=table-header-demo.js.map

/***/ }),

/***/ "../../../../../src/app/material/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Data source actions</md-card-title>\n  <md-card-content class=\"demo-data-source-actions\">\n    <div class=\"mb-1\">\n      <button md-raised-button md-button-sm (click)=\"connect()\">Connect New Data Source</button>\n      <button md-raised-button md-button-sm (click)=\"disconnect()\" [disabled]=\"!dataSource\">Disconnect Data Source</button>\n    </div>\n\n    <div class=\"mb-1\">\n      <button md-raised-button md-button-sm (click)=\"_peopleDatabase.shuffle(changeReferences)\">Randomize Data</button>\n      <md-checkbox [(ngModel)]=\"changeReferences\">Change references</md-checkbox>\n    </div>\n\n    <div class=\"mb-1 demo-track-by-select\">\n      <div class=\"demo-track-by-label\">Track By</div>\n      <md-radio-group [(ngModel)]=\"trackByStrategy\">\n        <md-radio-button [value]=\"'reference'\">Reference</md-radio-button>\n        <md-radio-button [value]=\"'id'\">ID</md-radio-button>\n        <md-radio-button [value]=\"'index'\">Index</md-radio-button>\n      </md-radio-group>\n    </div>\n\n    <div class=\"mb-1 demo-highlighter\">\n      Highlight:\n      <md-checkbox (change)=\"toggleHighlight('first', $event.checked)\">First Row</md-checkbox>\n      <md-checkbox (change)=\"toggleHighlight('last', $event.checked)\">Last Row</md-checkbox>\n      <md-checkbox (change)=\"toggleHighlight('even', $event.checked)\">Even Rows</md-checkbox>\n      <md-checkbox (change)=\"toggleHighlight('odd', $event.checked)\">Odd Rows</md-checkbox>\n    </div>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>CdkTable Example</md-card-title>\n  <md-card-subtitle>A data table that connects with a data source to retrieve data of type T and renders a header row and data rows. Updates the rows when new data is provided by the data source.</md-card-subtitle>\n  <md-card-content>\n    <cdk-table #table mdSort [dataSource]=\"dataSource\" [trackBy]=\"userTrackBy\">\n\n      <!-- Column Definition: ID -->\n      <ng-container cdkColumnDef=\"userId\">\n        <cdk-header-cell *cdkHeaderCellDef md-sort-header arrowPosition=\"before\">ID</cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\"> {{row.id}} </cdk-cell>\n      </ng-container>\n\n      <!-- Column Definition: Progress -->\n      <ng-container cdkColumnDef=\"progress\">\n        <cdk-header-cell *cdkHeaderCellDef md-sort-header start=\"desc\">Progress</cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\">\n          <div class=\"demo-progress-stat\">{{row.progress}}%</div>\n          <div class=\"demo-progress-indicator-container\">\n            <div class=\"demo-progress-indicator\"\n              [style.background]=\"row.progress > 50 ? 'green' : 'red'\"\n              [style.opacity]=\"getOpacity(row.progress)\"\n              [style.width.%]=\"row.progress\"></div>\n          </div>\n        </cdk-cell>\n      </ng-container>\n\n      <!-- Column Definition: Name -->\n      <ng-container cdkColumnDef=\"userName\">\n        <cdk-header-cell *cdkHeaderCellDef md-sort-header>Name</cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\"> {{row.name}} </cdk-cell>\n      </ng-container>\n\n      <!-- Column Definition: Color -->\n      <ng-container cdkColumnDef=\"color\">\n        <cdk-header-cell *cdkHeaderCellDef md-sort-header disableClear>Color</cdk-header-cell>\n        <cdk-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </cdk-cell>\n      </ng-container>\n\n      <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n      <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\n                             let first = first; let last = last; let even = even; let odd = odd\"\n                 [ngClass]=\"{\n                   'demo-row-highlight-first': highlights.has('first') && first,\n                   'demo-row-highlight-last': highlights.has('last') && last,\n                   'demo-row-highlight-even': highlights.has('even') && even,\n                   'demo-row-highlight-odd': highlights.has('odd') && odd\n                 }\">\n        </cdk-row>\n    </cdk-table>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-table-container demo-mat-table-example\">\n  <app-table-header-demo (shiftColumns)=\"displayedColumns.push(displayedColumns.shift())\"\n                     (toggleColorColumn)=\"toggleColorColumn()\">\n  </app-table-header-demo>\n\n  <md-table [dataSource]=\"dataSource\" [trackBy]=\"userTrackBy\">\n\n    <!-- Column Definition: ID -->\n    <ng-container cdkColumnDef=\"userId\">\n      <md-header-cell *cdkHeaderCellDef> ID </md-header-cell>\n      <md-cell *cdkCellDef=\"let row\"> {{row.id}} </md-cell>\n    </ng-container>\n\n    <!-- Column Definition: Progress -->\n    <ng-container cdkColumnDef=\"progress\">\n      <md-header-cell *cdkHeaderCellDef> Progress </md-header-cell>\n      <md-cell *cdkCellDef=\"let row\">\n        <div class=\"demo-progress-stat\">{{row.progress}}%</div>\n        <div class=\"demo-progress-indicator-container\">\n          <div class=\"demo-progress-indicator\"\n               [style.background]=\"row.progress > 50 ? 'green' : 'red'\"\n               [style.opacity]=\"getOpacity(row.progress)\"\n               [style.width.%]=\"row.progress\"></div>\n        </div>\n      </md-cell>\n    </ng-container>\n\n    <!-- Column Definition: Name -->\n    <ng-container cdkColumnDef=\"userName\">\n      <md-header-cell *cdkHeaderCellDef> Name </md-header-cell>\n      <md-cell *cdkCellDef=\"let row\"> {{row.name}} </md-cell>\n    </ng-container>\n\n    <!-- Column Definition: Color -->\n    <ng-container cdkColumnDef=\"color\">\n      <md-header-cell *cdkHeaderCellDef>Color</md-header-cell>\n      <md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </md-cell>\n    </ng-container>\n\n    <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *cdkRowDef=\"let row; columns: displayedColumns\"></md-row>\n\n  </md-table>\n\n  <md-paginator #paginator\n                [length]=\"_peopleDatabase.data.length\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </md-paginator>\n\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/table/table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo-data-source-actions .demo-track-by-select {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .demo-data-source-actions .demo-track-by-select .demo-track-by-label {\n    margin-right: 8px; }\n\n.demo-data-source-actions .demo-highlighter .mat-checkbox {\n  margin: 0 8px; }\n\n.demo-row-highlight-first {\n  background: #f3f315; }\n\n.demo-row-highlight-last {\n  background: #0dd5fc; }\n\n.demo-row-highlight-even {\n  background: #ff0099; }\n\n.demo-row-highlight-odd {\n  background: #83f52c; }\n\n/** Styles so that the CDK Table columns have width and font size. */\n.cdk-table {\n  font-size: 12px; }\n  .cdk-table .cdk-row, .cdk-table .cdk-header-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .cdk-table .cdk-cell, .cdk-table .cdk-header-cell {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .cdk-table .cdk-header-cell {\n    font-weight: bold; }\n    .cdk-table .cdk-header-cell.mat-sort-header-sorted {\n      color: black; }\n\n.demo-mat-table-example table-header-demo {\n  background: white; }\n\n/* Structure so that the table is contained on a card */\n.demo-table-container {\n  max-height: 800px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .demo-table-container md-table {\n    overflow: auto; }\n\n/* Column max widths */\n.cdk-column-userId {\n  max-width: 32px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.cdk-column-userName {\n  max-width: 120px; }\n\n.cdk-column-color {\n  max-width: 160px; }\n\n/* Progress bar styling */\n.cdk-column-progress.cdk-cell, .cdk-column-progress.mat-cell {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .cdk-column-progress.cdk-cell .demo-progress-stat, .cdk-column-progress.mat-cell .demo-progress-stat {\n    width: 32px;\n    padding-right: 8px; }\n  .cdk-column-progress.cdk-cell .demo-progress-indicator-container, .cdk-column-progress.mat-cell .demo-progress-indicator-container {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .cdk-column-progress.cdk-cell .demo-progress-indicator, .cdk-column-progress.mat-cell .demo-progress-indicator {\n    border-radius: 8px;\n    height: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__people_database__ = __webpack_require__("../../../../../src/app/material/table/people-database.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_data_source__ = __webpack_require__("../../../../../src/app/material/table/person-data-source.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = (function () {
    function TableComponent(_peopleDatabase) {
        var _this = this;
        this._peopleDatabase = _peopleDatabase;
        this.displayedColumns = [];
        this.trackByStrategy = 'reference';
        this.changeReferences = false;
        this.highlights = new Set();
        this.userTrackBy = function (index, item) {
            switch (_this.trackByStrategy) {
                case 'id': return item.id;
                case 'reference': return item;
                case 'index': return index;
            }
        };
    }
    TableComponent.prototype.ngOnInit = function () {
        this.connect();
    };
    TableComponent.prototype.connect = function () {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__person_data_source__["a" /* PersonDataSource */](this._peopleDatabase, this._paginator, this.sort);
        this._peopleDatabase.initialize();
    };
    TableComponent.prototype.disconnect = function () {
        this.dataSource = null;
        this.displayedColumns = [];
    };
    TableComponent.prototype.getOpacity = function (progress) {
        var distanceFromMiddle = Math.abs(50 - progress);
        return distanceFromMiddle / 50 + .3;
    };
    TableComponent.prototype.toggleColorColumn = function () {
        var colorColumnIndex = this.displayedColumns.indexOf('color');
        if (colorColumnIndex === -1) {
            this.displayedColumns.push('color');
        }
        else {
            this.displayedColumns.splice(colorColumnIndex, 1);
        }
    };
    TableComponent.prototype.toggleHighlight = function (property, enable) {
        enable ? this.highlights.add(property) : this.highlights.delete(property);
    };
    return TableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdPaginator */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdPaginator */]) === "function" && _a || Object)
], TableComponent.prototype, "_paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MdSort */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MdSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MdSort */]) === "function" && _b || Object)
], TableComponent.prototype, "sort", void 0);
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/material/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/table/table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__people_database__["a" /* PeopleDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__people_database__["a" /* PeopleDatabase */]) === "function" && _c || Object])
], TableComponent);

var _a, _b, _c;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Tab Group Demo - Dynamic Tabs</md-card-title>\n  <div class=\"mat-blue-grey\">\n    <md-card-title>Add New Tab</md-card-title>\n    <md-card-content>\n      <div>\n        Selected tab index:\n        <md-input-container>\n          <input mdInput type=\"number\" [(ngModel)]=\"activeTabIndex\">\n        </md-input-container>\n      </div>\n      <md-checkbox [(ngModel)]=\"createWithLongContent\">\n        Include extra content\n      </md-checkbox>\n      <md-checkbox [(ngModel)]=\"gotoNewTabAfterAdding\">\n        Select after adding\n      </md-checkbox>\n      <div>\n        Position:\n        <md-input-container>\n          <input mdInput type=\"number\" [(ngModel)]=\"addTabPosition\">\n        </md-input-container>\n      </div>\n      <button md-raised-button color=\"primary\"\n              (click)=\"addTab(createWithLongContent)\">\n        Add\n      </button>\n    </md-card-content>\n  </div>\n  <md-card-content>\n    <md-input-container>\n      <input mdInput type=\"number\" placeholder=\"Selected tab index\" [(ngModel)]=\"activeTabIndex\">\n    </md-input-container>\n  \n    <md-card>\n      <md-tab-group dynamicHeight [(selectedIndex)]=\"activeTabIndex\">\n        <md-tab *ngFor=\"let tab of dynamicTabs\" [disabled]=\"tab.disabled\">\n          <ng-template md-tab-label>{{tab.label}}</ng-template>\n          <div class=\"tab-content\">\n            {{tab.content}}\n            <br>\n            <br>\n            <div *ngIf=\"tab.extraContent\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n              Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n              In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n              feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n              orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius\n              gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat\n              diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod\n              ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim\n              venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit.\n              Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\n              orci posuere, nec luctus mauris semper.\n              <br>\n              <br>\n              Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\n              magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\n              Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\n              Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\n              tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\n              nisl consectetur, rhoncus sapien sit amet, tempus sapien.\n              <br>\n              <br>\n              Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\n              molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\n              at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\n              Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\n            </div>\n            <br>\n            <br>\n            <md-input-container>\n              <input mdInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\n            </md-input-container>\n            <br><br>\n            <button md-raised-button\n                    [disabled]=\"dynamicTabs.length == 1\"\n                    (click)=\"deleteTab(tab)\">\n              Delete Tab\n            </button>\n          </div>\n        </md-tab>\n      </md-tab-group>\n    </md-card>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Tab Group Demo - Dynamic Tabs</md-card-title>\n  <md-card-content>\n    <md-card>\n      <md-tab-group dynamicHeight>\n        <md-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\n          <ng-template md-tab-label>{{tab.label}}</ng-template>\n          <div class=\"tab-content\">\n            {{tab.content}}\n            <br>\n            <br>\n            <div *ngIf=\"tab.extraContent\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n              Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n              In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n              feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n              orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius\n              gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat\n              diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod\n              ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim\n              venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit.\n              Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\n              orci posuere, nec luctus mauris semper.\n              <br>\n              <br>\n              Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\n              magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\n              Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\n              Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\n              tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\n              nisl consectetur, rhoncus sapien sit amet, tempus sapien.\n              <br>\n              <br>\n              Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\n              molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\n              at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\n              Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\n            </div>\n            <br>\n            <br>\n            <md-input-container>\n              <input mdInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\n            </md-input-container>\n          </div>\n        </md-tab>\n      </md-tab-group>\n    </md-card>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Tab Group Demo - Fixed Height</md-card-title>\n  <md-card-content>\n    <md-card>\n      <md-tab-group style=\"height: 220px\">\n        <md-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\n          <ng-template md-tab-label>{{tab.label}}</ng-template>\n          <div class=\"tab-content\">\n            {{tab.content}}\n            <br>\n            <br>\n            <div *ngIf=\"tab.extraContent\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n              Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n              In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n              feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n              orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius\n              gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat\n              diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod\n              ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim\n              venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit.\n              Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec\n              orci posuere, nec luctus mauris semper.\n              <br>\n              <br>\n              Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec\n              magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis.\n              Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel.\n              Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit\n              tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed\n              nisl consectetur, rhoncus sapien sit amet, tempus sapien.\n              <br>\n              <br>\n              Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere\n              molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat,\n              at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.\n              Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.\n            </div>\n            <br>\n            <br>\n            <md-input-container>\n              <input mdInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\n            </md-input-container>\n          </div>\n        </md-tab>\n      </md-tab-group>\n    </md-card>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Stretched Tabs</md-card-title>\n  <md-card-content>\n    <md-card>\n      <md-tab-group style=\"height: 200px\" md-stretch-tabs>\n        <md-tab *ngFor=\"let tab of tabs\" [disabled]=\"tab.disabled\">\n          <ng-template md-tab-label>{{tab.label}}</ng-template>\n          <div class=\"tab-content\">\n            {{tab.content}}\n          </div>\n        </md-tab>\n      </md-tab-group>\n    </md-card>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Async Tabs</md-card-title>\n  <md-card-content>\n    <md-card>\n      <md-tab-group>\n        <md-tab *ngFor=\"let tab of asyncTabs | async; let i = index\" [disabled]=\"i == 1\">\n          <ng-template md-tab-label>{{tab.label}}</ng-template>\n\n          <div class=\"tab-content\">\n            {{tab.content}}\n            <br>\n            <br>\n            <br>\n            <md-input-container>\n              <input mdInput placeholder=\"Tab Label\" [(ngModel)]=\"tab.label\">\n            </md-input-container>\n          </div>\n        </md-tab>\n      </md-tab-group>\n    </md-card>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Tabs with simplified api</md-card-title>\n  <md-card-content>\n    <md-card>\n      <md-tab-group>\n        <md-tab>\n          <ng-template md-tab-label>Earth</ng-template>\n          <md-card-content>This tab is about the Earth!</md-card-content>\n        </md-tab>\n        <md-tab>\n          <ng-template md-tab-label>Fire</ng-template>\n          <md-card-content>This tab is about combustion!</md-card-content>\n        </md-tab>\n      </md-tab-group>\n    </md-card>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>Inverted tabs</md-card-title>\n  <md-card-content>\n    <md-card>\n      <md-tab-group class=\"demo-tab-group\" headerPosition=\"below\">\n        <md-tab label=\"Earth\">\n          <div class=\"tab-content\">\n            This tab is about the Earth!\n          </div>\n        </md-tab>\n        <md-tab label=\"Fire\">\n          <div class=\"tab-content\">\n            This tab is about combustion!\n          </div>\n        </md-tab>\n      </md-tab-group>\n    </md-card>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent() {
        var _this = this;
        // Nav bar demo
        this.tabLinks = [
            { label: 'Sun', link: 'sunny-tab' },
            { label: 'Rain', link: 'rainy-tab' },
            { label: 'Fog', link: 'foggy-tab' },
        ];
        // Standard tabs demo
        this.tabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        // Dynamic tabs demo
        this.activeTabIndex = 0;
        this.addTabPosition = 0;
        this.gotoNewTabAfterAdding = false;
        this.createWithLongContent = false;
        this.dynamicTabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        this.asyncTabs = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(_this.tabs);
            }, 1000);
        });
    }
    TabsComponent.prototype.addTab = function (includeExtraContent) {
        this.dynamicTabs.splice(this.addTabPosition, 0, {
            label: 'New Tab ' + (this.dynamicTabs.length + 1),
            content: 'New tab contents ' + (this.dynamicTabs.length + 1),
            extraContent: includeExtraContent
        });
        if (this.gotoNewTabAfterAdding) {
            this.activeTabIndex = this.addTabPosition;
        }
    };
    TabsComponent.prototype.deleteTab = function (tab) {
        this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
    };
    TabsComponent.prototype.swapTabLinks = function () {
        var temp = this.tabLinks[0];
        this.tabLinks[0] = this.tabLinks[1];
        this.tabLinks[1] = temp;
    };
    TabsComponent.prototype.addToLabel = function () {
        this.tabLinks.forEach(function (link) { return link.label += 'extracontent'; });
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__("../../../../../src/app/material/tabs/tabs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/tabs/tabs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/toggle/toggle.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Slide Toggle</md-card-title>\n  <md-card-subtitle>MdSlideToggle is a two-state control, which can be also called switch.</md-card-subtitle>\n  <md-card-content>\n    <md-slide-toggle color=\"primary\" [(ngModel)]=\"firstToggle\">\n      Default Slide Toggle\n    </md-slide-toggle>\n\n    <md-slide-toggle [(ngModel)]=\"firstToggle\" disabled>\n      Disabled Slide Toggle\n    </md-slide-toggle>\n\n    <md-slide-toggle [disabled]=\"firstToggle\">\n      Disable Bound\n    </md-slide-toggle>\n\n    <p>Example where the slide toggle is required inside of a form.</p>\n\n    <form #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n      <md-slide-toggle name=\"slideToggle\" required ngModel>\n        Slide Toggle\n      </md-slide-toggle>\n\n      <p>\n        <button md-raised-button type=\"submit\">Submit Form</button>\n      </p>\n\n    </form>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/toggle/toggle.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/toggle/toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleComponent = (function () {
    function ToggleComponent() {
    }
    ToggleComponent.prototype.onFormSubmit = function () {
        alert("You submitted the form.");
    };
    return ToggleComponent;
}());
ToggleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toggle',
        template: __webpack_require__("../../../../../src/app/material/toggle/toggle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/toggle/toggle.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ToggleComponent);

//# sourceMappingURL=toggle.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Toolbar</md-card-title>\n  <md-card-subtitle>MdToolbar is a vertical aligned bar, which can hold the application title or actions.</md-card-subtitle>\n  <md-card-content>\n    <p>The default color toolbar:</p>\n    <md-toolbar>\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>menu</md-icon>\n      </button>\n      <span>Default Toolbar</span>\n      <span fxFlex></span>\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>search</md-icon>\n      </button>\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>more_vert</md-icon>\n      </button>\n    </md-toolbar>\n    <p>The primary color toolbar:</p>\n    <md-toolbar color=\"primary\">\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>menu</md-icon>\n      </button>\n      <span>Primary Toolbar</span>\n      <span fxFlex></span>\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>search</md-icon>\n      </button>\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>more_vert</md-icon>\n      </button>\n    </md-toolbar>\n    <p>The accent color toolbar:</p>\n    <md-toolbar color=\"accent\">\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>menu</md-icon>\n      </button>\n      <span>Accent Toolbar</span>\n      <span fxFlex></span>\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>search</md-icon>\n      </button>\n      <button md-button href=\"#\" md-icon-button>\n        <md-icon>more_vert</md-icon>\n      </button>\n    </md-toolbar>\n    <p>An accent toolbar using the second toolbar row:</p>\n    <md-toolbar color=\"accent\">\n      <md-toolbar-row>\n        <span>Second Line Toolbar</span>\n      </md-toolbar-row>\n    </md-toolbar>\n    <p>A primary toolbar using the third toolbar row:</p>\n    <md-toolbar color=\"primary\">\n      <md-toolbar-row></md-toolbar-row>\n      <md-toolbar-row>\n        <span fxFlex>Third Line Toolbar</span>\n        <md-icon>favorite</md-icon>\n        <md-icon>delete</md-icon>\n      </md-toolbar-row>\n    </md-toolbar>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/material/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/material/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>Tooltips</md-card-title>\n  <md-card-subtitle>Tooltip allows the user to specify text to be displayed when the mouse hovers over an element.</md-card-subtitle>\n  <md-card-content>\n    <div class=\"centered\" cdk-scrollable>\n    <button #tooltip=\"mdTooltip\"\n            md-raised-button\n            color=\"primary\"\n            [mdTooltip]=\"message\"\n            [mdTooltipPosition]=\"position\"\n            [mdTooltipDisabled]=\"disabled\"\n            [mdTooltipShowDelay]=\"showDelay\"\n            [mdTooltipHideDelay]=\"hideDelay\"\n            [mdTooltipClass]=\"{'red-tooltip': showExtraClass}\">\n      Mouse over to see the tooltip\n    </button>\n  </div>\n\n  <p class=\"mt-1\">\n    <md-radio-group [(ngModel)]=\"position\">\n      <md-radio-button value=\"below\">Below</md-radio-button>\n      <md-radio-button value=\"above\">Above</md-radio-button>\n      <md-radio-button value=\"left\">Left</md-radio-button>\n      <md-radio-button value=\"right\">Right</md-radio-button>\n      <md-radio-button value=\"before\">Before</md-radio-button>\n      <md-radio-button value=\"after\">After</md-radio-button>\n    </md-radio-group>\n  </p>\n  <p>\n    <strong>Message: </strong>\n    <md-input-container><input mdInput type=\"text\" [(ngModel)]=\"message\"></md-input-container>\n  </p>\n\n  <p>\n    <strong>Disabled: </strong>\n    <md-checkbox [(ngModel)]=\"disabled\"></md-checkbox>\n  </p>\n\n  <p>\n    <strong>Show Delay (ms): </strong>\n    <md-input-container>\n      <input mdInput type=\"number\" [(ngModel)]=\"showDelay\">\n    </md-input-container>\n  </p>\n\n  <p>\n    <strong>Hide Delay (ms): </strong>\n    <md-input-container>\n      <input mdInput type=\"number\" [(ngModel)]=\"hideDelay\">\n    </md-input-container>\n  </p>\n\n  <strong>Mouse over to</strong>\n  <button md-raised-button color=\"primary\" (mouseenter)=\"tooltip.show()\">\n    Show tooltip\n  </button>\n  <button md-raised-button color=\"primary\" (mouseenter)=\"tooltip.hide()\">\n    Hide tooltip\n  </button>\n  <button md-raised-button color=\"primary\" (mouseenter)=\"tooltip.toggle()\">\n    Toggle tooltip\n  </button>\n  <button md-raised-button color=\"primary\" (mouseenter)=\"showExtraClass = !showExtraClass\">\n    Toggle tooltipClass\n  </button>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/material/tooltip/tooltip.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TooltipComponent = (function () {
    function TooltipComponent() {
        this.position = 'below';
        this.message = 'Here is the tooltip';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 1000;
        this.showExtraClass = false;
    }
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tooltip',
        template: __webpack_require__("../../../../../src/app/material/tooltip/tooltip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/tooltip/tooltip.component.scss")]
    })
], TooltipComponent);

//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ "../../../../hammerjs/hammer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return Hammer;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ "../../../../rxjs/add/operator/startWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var startWith_1 = __webpack_require__("../../../../rxjs/operator/startWith.js");
Observable_1.Observable.prototype.startWith = startWith_1.startWith;
//# sourceMappingURL=startWith.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map