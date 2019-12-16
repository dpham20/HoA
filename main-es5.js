var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_auth_components/alert.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_auth_components/alert.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"margin-bottom:10px; margin-top:10px;\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 text-right\">\r\n    <button class=\"ms-btn ms-btn--green\" id=\"button\" (click)=\"getAllTickets()\">Refresh</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"table-ticket\">\r\n<table id=\"ticketTable\">\r\n  <thead>\r\n    <!-- <th *ngFor='let head of tickets | keys'>{{head}}</th> -->\r\n    <th *ngFor=\"let column of headers\">\r\n      <div class=\"table-header-fonts\">{{column}}</div>\r\n    </th>\r\n  </thead>\r\n  <tbody class=\"tableBody\">\r\n    <tr *ngFor=\"let ticket of tickets\" (click)=\"getTicketInfo(content,ticket)\">\r\n      <!-- <td *ngFor=\"let list of tickets | keys\">\r\n                {{tickets[list].ticketMessage}}\r\n            </td> -->\r\n      <td *ngFor=\"let column of headers\">\r\n        <div class=\"table-font\">{{ticket[column]}}</div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Ticket Information</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"modalForm\">\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <!-- <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketId\" name=\"ticketId\">{{modalTicketId}}</div>\r\n                    <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketDate\">{{modalTicketDate}}</div> -->\r\n\r\n          <div class=\"ms-row\">\r\n            <div class=\"cool-1-of-2\">\r\n\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketId\" name=\"ticketId\"><strong>No:</strong>\r\n                {{modalTicketId}}</div>\r\n            </div>\r\n            <div class=\"cool-1-of-2\">\r\n\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketDate\"><strong>Time:</strong>\r\n                {{modalTicketDate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <!-- <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">CLIENT NAME</div>\r\n                    <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">PHONE NUMBER</div> -->\r\n          <div class=\"ms-row\">\r\n            <div class=\"cool-1-of-2\">\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">Client name</div>\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketName\">{{modalTicketName}}</div>\r\n\r\n            </div>\r\n            <div class=\"cool-1-of-2\">\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">Phone number</div>\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketPhone\">{{modalTicketPhoneNumber}}</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <!-- <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketName\">{{modalTicketName}}</div>\r\n                    <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketPhone\">{{modalTicketPhoneNumber}}</div> -->\r\n          <div class=\"ms-row\">\r\n            <div class=\"cool-1-of-2\">\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">Subject</div>\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketSubject\">{{modalTicketSubject}}</div>\r\n\r\n            </div>\r\n            <div class=\"cool-1-of-2\">\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">Active State</div>\r\n              <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\">\r\n                <select class=\"form-control\" id=\"isActive\" name=\"isActive\" formControlName=\"isActive\" required>\r\n                  <option value=\"true\" selected disabled>Select Ticket Status</option>\r\n                  <option value=\"false\">false</option>\r\n                  <option value=\"true\">true</option>\r\n                </select>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">SUBJECT</div>\r\n                    <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">ACTIVE STATE</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\" id=\"ticketSubject\">{{modalTicketSubject}}</div>\r\n                    <div class=\"col-sm-6 col-lg-6 col-md-6 modal-field\">\r\n                        <select class=\"form-control\" id=\"isActive\" name=\"isActive\" formControlName=\"isActive\" required>\r\n                            <option value=\"true\" selected disabled>Select Ticket Status</option>\r\n                            <option value=\"false\">false</option>\r\n                            <option value=\"true\">true</option>\r\n                        </select>\r\n                    </div>\r\n                </div> -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">Ticket Message</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-lg-12 col-md-12 modal-field\">{{modalTicketMessage}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 col-lg-6 col-md-6 field-head\">Append new message here</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 col-lg-12 col-md-12\" style=\"padding:0;\">\r\n            <textarea class=\"ms-form__input\" id=\"ticketMessage\" type=\"text\" name=\"message\" placeholder=\"Your message\"\r\n              formControlName=\"ticketMessage\" required></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <div class=\"ms-row\">\r\n      <div class=\"cool-1-of-4\">\r\n        <!-- <button type=\"button\" id=\"delete-btn\" class=\"btn btn-outline-dark\" (click)=\"sendDelete()\">Delete</button> -->\r\n\r\n        <button type=\"button\" id=\"update-btn\" class=\"btn btn-outline-dark\" (click)=\"sendUpdate()\">Update</button>\r\n\r\n      </div>\r\n      <div class=\"cool-1-of-4\">&nbsp;</div>\r\n      <div class=\"cool-1-of-4\">&nbsp;</div>\r\n\r\n\r\n      <div class=\"cool-1-of-4\">\r\n        <!-- <button type=\"button\" id=\"update-btn\" class=\"btn btn-outline-dark\" (click)=\"sendUpdate()\">Update</button> -->\r\n        <button type=\"button\" id=\"delete-btn\" class=\"btn btn-outline-dark\" (click)=\"open(contentTwo)\">Delete</button>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"sendDelete()\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"sendUpdate()\">Update</button> -->\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #contentTwo let-modal>\r\n\r\n<div class=\"modal-header-center\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Are You Sure You Want To Delete The Ticket: {{modalTicketId}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"ms-row\">\r\n      <div class=\"cool-1-of-4\">\r\n        <!-- <button type=\"button\" id=\"delete-btn\" class=\"btn btn-outline-dark\" (click)=\"sendDelete()\">Delete</button> -->\r\n\r\n        <button type=\"button\" id=\"update-btn\" class=\"btn btn-outline-dark\" (click)=\"close(contentTwo)\">Cancel</button>\r\n\r\n      </div>\r\n      <!-- <div class=\"cool-1-of-4\">&nbsp;</div> -->\r\n      <div class=\"cool-1-of-4\">&nbsp;</div>\r\n      <div class=\"cool-1-of-4\">\r\n        <!-- <button type=\"button\" id=\"update-btn\" class=\"btn btn-outline-dark\" (click)=\"sendUpdate()\">Update</button> -->\r\n        <button type=\"button\" id=\"delete-btn\" class=\"btn btn-outline-dark\" (click)=\"sendDelete()\">Delete</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n  <div class=\"modal-footer\">\r\n  </div>\r\n</ng-template>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Header that grabs the currentUser's firstName and lastName and uses data binding to make them appear in the header information.-->\r\n<header class=\"ms-header\" *ngIf=\"currentUser\">\r\n    <div class=\"ms-header__logo-box\">\r\n        <img src=\"../assets/logomtair1.png\" alt=\"Logo\" class=\"ms-header__logo\" routerLink=\"/home\">\r\n    </div>\r\n\r\n    <nav class=\"ms-nav\">\r\n        <a class=\"ms-nav-logout\" href=\"#\" (click)=\"logout()\">Log out</a>\r\n\r\n        <a class=\"ms-nav-user\" href=\"#\">\r\n            <img class=\"ms-user-img\" src=\"../assets/user.jpg\" alt=\"Photo of User\">\r\n            <span>{{currentUser.firstName}} {{currentUser.lastName}}</span>\r\n        </a>\r\n    </nav>\r\n\r\n</header>\r\n\r\n\r\n<!--This is where the navigation bar's HTML is located.-->\r\n<main class=\"ms-main\">\r\n\r\n    <div class=\"ms-admin-view\">\r\n        <nav class=\"ms-admin-view__menu\" *ngIf=\"currentUser\">\r\n            <ul class=\"ms-side-nav\">\r\n                <li>\r\n                    <!-- <a href=\"#\" routerLink='/home' routerLinkActive='ms-side-nav--active'> -->\r\n                    <a href=\"#\" routerLink='/home' routerLinkActive=\"ms-side-nav--active\">\r\n                        <!-- <ion-icon name=\"ios-home\" class=\"ion-icon\"></ion-icon> -->\r\n                        <i class=\"icon ion-ios-home ion-icon\"></i>Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <!-- <a href=\"#\" routerLink='/forum' routerLinkActive='ms-side-nav--active'> -->\r\n                    <a href=\"#\" routerLink='/forum' routerLinkActive=\"ms-side-nav--active\">\r\n                        <!-- <ion-icon name=\"ios-chatboxes\" class=\"ion-icon\"></ion-icon> -->\r\n                        <i class=\"icon ion-ios-chatboxes ion-icon\"></i>Forum\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <!-- <a href=\"#\" routerLink='/ticket' routerLinkActive='ms-side-nav--active'> -->\r\n                    <a href=\"#\" routerLink='/ticket' routerLinkActive=\"ms-side-nav--active\">\r\n                        <!-- <ion-icon name=\"ios-list-box\" class=\"ion-icon\"></ion-icon> -->\r\n                        <i class=\"icon ion-ios-list ion-icon\"></i>Ticket\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <!-- <a href=\"#\" routerLink='/admin' routerLinkActive='ms-side-nav--active' *ngIf='isAdmin'> -->\r\n                    <a href=\"#\" routerLink='/admin' *ngIf='isAdmin' routerLinkActive=\"ms-side-nav--active\">\r\n                        <!-- <ion-icon name=\"ios-person\" class=\"ion-icon\"></ion-icon> -->\r\n                        <i class=\"icon ion-ios-person ion-icon\"></i>Admin\r\n                    </a>\r\n                </li>\r\n                <li class=\"align-right-color\">\r\n                    <!-- <a href=\"#\" routerLink='/admin' routerLinkActive='ms-side-nav--active' *ngIf='isAdmin'> -->\r\n                    <a href=\"https://drive.google.com/drive/folders/1xdClbUvhCcioLM3OMmC2Z-yzZMvOUGtA?usp=sharing\"\r\n                    target=\"_blank\">\r\n                        <!-- <ion-icon name=\"ios-person\" class=\"ion-icon\"></ion-icon> -->\r\n                        <i class=\"icon ion-document-text ion-icon\"></i>Documents\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n        </nav>\r\n        <div class=\"ms-admin-view__content\">\r\n            <!--                <div class=\"line\">&nbsp;</div>-->\r\n        </div>\r\n\r\n    </div>\r\n    <!--Where the component's HTML will be inject into. Every components HTML will be shown under the navigation bar.-->\r\n    <router-outlet></router-outlet>\r\n     <!--FOOTER-->\r\n  \r\n     <footer class=\"home-footer\">\r\n                    \r\n        Mt. Air &copy; 2019\r\n    </footer>\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <h1>This page is currently under construction!</h1> -->\r\n<section class=\"ms-section-about\">\r\n\r\n         \r\n\r\n    <div class=\"ms-row ms-roow\">\r\n        <!-- <div class=\"block-text\"> -->\r\n\r\n        <div class=\"cool-1-of-2\">\r\n            <h3 class=\"ms-heading-tertiary u-margin-bottom-small\">Homeowners Association</h3>\r\n            <p class=\"paragraph\">\r\n                This page is under construction ...\r\n            </p>\r\n\r\n            <h3 class=\"ms-heading-tertiary u-margin-bottom-small\">More Description</h3>\r\n            <p class=\"paragraph\">\r\n              Please check back later\r\n            </p>\r\n            \r\n            <!-- <div class=\"ticket-link\">\r\n                    <a href=\"#\" class=\"ms-btn-text\" routerLink=\"/ticket\">Create a ticket &rarr;</a>\r\n            </div> -->\r\n          \r\n        </div>\r\n\r\n\r\n        <!-- </div> -->\r\n\r\n\r\n        <div class=\"cool-1-of-2\">\r\n            <div class=\"composition\">\r\n                <img src=\"../../assets/webPageConstruction.jpg\" alt=\"Photo 2\" class=\"composition__photo composition__photo--p2\">\r\n            </div>\r\n        </div>\r\n    </div>      \r\n\r\n    </section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--VIEW TICKET-->\r\n<!-- <div class=\"container-fluid\"> -->\r\n    <!-- <div class=\"ms-row\">\r\n        <div class=\"col-1-of-2\">\r\n            <h1 class=\"h2\">Welcome to the HOA Website.</h1>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n            dolore magna aliqua. Neque sodales ut etiam sit amet nisl purus in. Sed faucibus turpis in eu mi bibendum\r\n            neque egestas. Quam pellentesque nec nam aliquam sem et tortor consequat id. Id porta nibh venenatis cras.\r\n            Quis hendrerit dolor magna eget. Ipsum consequat nisl vel pretium. Amet est placerat in egestas erat\r\n            imperdiet. Gravida in fermentum et sollicitudin ac. Leo vel fringilla est ullamcorper eget nulla. Morbi\r\n            tristique senectus et netus et malesuada fames ac turpis. Ornare lectus sit amet est placerat. Nullam eget\r\n            felis eget nunc lobortis.\r\n\r\n            \r\n        </div>\r\n        <div class=\"col-1-of-2\">\r\n            <img class=\"img-fluid\" style=\"width:100%;\" src=\"../../assets/download.png\">\r\n            <img class=\"img-fluid\" style=\"width:100%;\" src=\"../../assets/architecture.png\">\r\n        </div>\r\n    </div> -->\r\n\r\n    <section class=\"ms-section-about\">\r\n\r\n         \r\n\r\n            <div class=\"ms-row ms-roow\">\r\n                <!-- <div class=\"block-text\"> -->\r\n\r\n                <div class=\"cool-1-of-2\">\r\n                    <h3 class=\"ms-heading-tertiary u-margin-bottom-small\">Welcome To Mt. Air Association</h3>\r\n                    <p class=\"paragraph\">\r\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, praesentium laborum illum quisquam quasi modi nihil ab consequuntur cumque earum labore, rem voluptas! Aspernatur reiciendis, at praesentium.\r\n                    </p>\r\n\r\n                    <h3 class=\"ms-heading-tertiary u-margin-bottom-small\">More Description</h3>\r\n                    <p class=\"paragraph\">\r\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam dicta error impedit, modi optio saepe sit fugiat tenetur nemo maiores.\r\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam dicta error impedit, modi optio saepe sit fugiat tenetur nemo maiores.\r\n                    </p>\r\n                    \r\n                    <div class=\"ticket-link\">\r\n                            <a href=\"#\" class=\"ms-btn-text\" routerLink=\"/ticket\">Create a ticket &rarr;</a>\r\n                    </div>\r\n                  \r\n                </div>\r\n\r\n\r\n                <!-- </div> -->\r\n\r\n\r\n                <div class=\"cool-1-of-2\">\r\n                    <div class=\"composition\">\r\n                        <img src=\"../../assets/architecture.jpg\" alt=\"Photo 1\" class=\"composition__photo composition__photo--p1\">\r\n                    </div>\r\n                </div>\r\n            </div>      \r\n            </section>\r\n    \r\n<!-- </div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n    <!-- ----\r\n    <main class=\"main\">\r\n        <div class=\"login-form2\">\r\n            <h2 class=\"heading-secondary ma-bt-lg\">Log into your account</h2>\r\n            <form class=\"form form--login\">\r\n                <div class=\"form__group\">\r\n                    <label class=\"form__label\" for=\"email\">Email address</label>\r\n                    <input class=\"form__input\" id=\"email\" type=\"email\" placeholder=\"you@example.com\" required></div>\r\n                <div class=\"form__group ma-bt-md\"><label class=\"form__label\" for=\"password\">Password</label>\r\n                    <input class=\"form__input\" id=\"password\" type=\"password\" placeholder=\"••••••••\" required minlength=\"8\"></div>\r\n                <div class=\"form__group\"><button class=\"btn btn--green\">Login</button></div>\r\n            </form>\r\n        </div>\r\n    </main>\r\n    ----- -->\r\n\r\n\r\n\r\n\r\n    <div class=\"card login-form2\">\r\n        <h1 class=\"card-header heading-secondary2\">Mt. Air Login</h1>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\" class=\"font-2-rem form__label2\">Username</label>\r\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control login-input form__input2\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\" class=\"font-2-rem form__label2\">Password</label>\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control login-input form__input2\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                </div>\r\n                <button [disabled]=\"loading\" class=\"ms-btn ms-btn--green\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Login\r\n                </button>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n            </form>\r\n        </div>\r\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header class=\"ms-header\">\r\n    <div class=\"ms-header__logo-box\">\r\n        <img src=\"../assets/sample-logo.png\" alt=\"Logo\" class=\"ms-header__logo\">\r\n    </div>\r\n\r\n    <nav class=\"ms-nav\">\r\n        <a class=\"ms-nav-logout\" href=\"#\">Log out</a>\r\n\r\n        <a class=\"ms-nav-user\" href=\"#\">\r\n            <img class=\"ms-user-img\" src=\"../assets/user.jpg\" alt=\"Photo of User\">\r\n            <span>Admin One</span>\r\n        </a>\r\n    </nav>\r\n\r\n</header>\r\n\r\n\r\n\r\n<main class=\"ms-main\">\r\n\r\n    <div class=\"ms-admin-view\">\r\n        <nav class=\"ms-admin-view__menu\">\r\n            <ul class=\"ms-side-nav\">\r\n                <li>\r\n                    <a href=\"#\" routerLink='/home' routerLinkActive='ms-side-nav--active'>\r\n                        <!-- <ion-icon name=\"ios-home\" class=\"ion-icon\"></ion-icon> -->\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" routerLink='/forum' routerLinkActive='ms-side-nav--active'>\r\n                        <!-- <ion-icon name=\"ios-chatboxes\" class=\"ion-icon\"></ion-icon> -->\r\n                        Forum\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" routerLink='/ticket' routerLinkActive='ms-side-nav--active'>\r\n                        <!-- <ion-icon name=\"ios-list-box\" class=\"ion-icon\"></ion-icon> -->\r\n                        Ticket\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" routerLink='/admin' routerLinkActive='ms-side-nav--active'>\r\n                        <!-- <ion-icon name=\"ios-person\" class=\"ion-icon\"></ion-icon> -->\r\n                        Admin\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n        </nav>\r\n        <div class=\"ms-admin-view__content\">\r\n            <!--                <div class=\"line\">&nbsp;</div>-->\r\n        </div>\r\n\r\n    </div>\r\n\r\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Ticketing Intake Form-->\r\n<div class=\"ms-login-form margin-top2\">\r\n    <h2 class=\"ms-heading-secondary ms-ma-bt-lg\">Create a ticket</h2>\r\n    <!-- <form class=\"form form--signup\" method=\"POST\" action=\"php/sample.php\"> -->\r\n    <form class=\"form ms-form--signup\" [formGroup]=\"intakeForm\" (ngSubmit)=\"addNewTicket()\">\r\n        <div class=\"ms-row ms-roow\">\r\n        <div class=\"cool-1-of-2\">\r\n        <div class=\"form-group ms-form__group\">\r\n            <label class=\"ms-form__label\" for=\"name\"><span class=\"asterik\">*</span>Your name</label>\r\n            <input class=\"ms-form__input small-input\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"ex. Ted Lee\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n        </div>\r\n        <div class=\"form-group ms-form__group\">\r\n            <label class=\"ms-form__label\" for=\"email\"><span class=\"asterik\">*</span>Email address</label>\r\n            <input class=\"ms-form__input small-input\" id=\"email\" type=\"email\" name=\"email\" placeholder=\"you@example.com\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n        </div>\r\n        <div class=\"form-group ms-form__group\">\r\n            <label class=\"ms-form__label\" for=\"number\"><span class=\"asterik\">*</span>Phone number</label>\r\n            <input class=\"ms-form__input small-input\" id=\"number\" type=\"tel\" name=\"phone\" placeholder=\"123-456-7890\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" formControlName=\"phoneNumber\" [ngClass]=\"{ 'is-invalid': submitted && f.phoneNumber.errors }\">\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n        <div class=\"cool-1-of-2\">\r\n        <div class=\"form-group ms-form__group\">\r\n            <label class=\"ms-form__label\" for=\"subject\"><span class=\"asterik\">*</span>Subject</label>\r\n            <input class=\"ms-form__input\" id=\"subject\" type=\"text\" name=\"subject\" placeholder=\"subject\" formControlName=\"subject\" [ngClass]=\"{ 'is-invalid': submitted && f.subject.errors }\">\r\n        </div>\r\n\r\n        <div class=\"ms-form__group\">\r\n            <label class=\"ms-form__label\" for=\"message\"><span class=\"asterik\">*</span>Message</label>\r\n            <textarea class=\"ms-form__input\" id=\"message\" type=\"text\" name=\"message\" placeholder=\"Your message\" formControlName=\"ticketMessage\" [ngClass]=\"{ 'is-invalid': submitted && f.ticketMessage.errors }\"></textarea>\r\n            <!--                    <input class=\"form__input\" id=\"message\" type=\"tel\" name=\"phone\" placeholder=\"Your message\" required>-->\r\n        </div>\r\n        <!--\r\n        <div class=\"form__group ma-bt-md\">\r\n            <label class=\"form__label\" for=\"password\">Password</label>\r\n            <input class=\"form__input\" id=\"password\" type=\"password\" placeholder=\"••••••••\" required minlength=\"8\">\r\n        </div>\r\n        <div class=\"form__group ma-bt-md\">\r\n            <label class=\"form__label\" for=\"passwordConfirm\">Confirm password</label>\r\n            <input class=\"form__input\" id=\"passwordConfirm\" type=\"password\" placeholder=\"••••••••\" required minlength=\"8\">\r\n        </div>\r\n-->\r\n        <div class=\"ms-form__group\">\r\n            <button class=\"ms-btn ms-btn--green margin-top\" id=\"button\">Submit</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n    </form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/Ticket.ts": 
        /*!***************************!*\
          !*** ./src/app/Ticket.ts ***!
          \***************************/
        /*! exports provided: Ticket */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function () { return Ticket; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /**
             * Export class that acts as the model for a Ticket object.
             */
            var Ticket = /** @class */ (function () {
                /**
                 * Constructor takes in a Ticket object or a generic object then copies the properties from JSON data from API to the target object which is a Ticket object.
                 * @param data - The source data from API
                 */
                function Ticket(data) {
                    Object.assign(this, data);
                }
                return Ticket;
            }());
            /***/ 
        }),
        /***/ "./src/app/_auth_components/alert.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/_auth_components/alert.component.ts ***!
          \*****************************************************/
        /*! exports provided: AlertComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function () { return AlertComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_auth_services/alert.service */ "./src/app/_auth_services/alert.service.ts");
            /**
             * Alert for showing error messages for log in component.
             */
            var AlertComponent = /** @class */ (function () {
                function AlertComponent(alertService) {
                    this.alertService = alertService;
                }
                //On initialization of component it shows a different css class based on the type of alert.
                AlertComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.alertService.getAlert()
                        .subscribe(function (message) {
                        switch (message && message.type) {
                            case 'success':
                                message.cssClass = 'alert alert-success';
                                break;
                            case 'error':
                                message.cssClass = 'alert alert-danger';
                                break;
                        }
                        _this.message = message;
                    });
                };
                //unsubscribes from promise to stop memory leaks.
                AlertComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                return AlertComponent;
            }());
            AlertComponent.ctorParameters = function () { return [
                { type: _auth_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
            ]; };
            AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_auth_components/alert.component.html")).default })
            ], AlertComponent);
            /***/ 
        }),
        /***/ "./src/app/_auth_helpers/auth.guard.ts": 
        /*!*********************************************!*\
          !*** ./src/app/_auth_helpers/auth.guard.ts ***!
          \*********************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_auth_services/authentication.service */ "./src/app/_auth_services/authentication.service.ts");
            /**
             * This class handles user-role interactions with pages. Only admins can see extra pages such as the admin page.
             */
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                //Grabs current user, checks route of the page if there is any role restriction if there is then it redirects to home page.
                AuthGuard.prototype.canActivate = function (route, state) {
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser) {
                        // check if route is restricted by role
                        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                            // role not authorised so redirect to home page
                            this.router.navigate(['/']);
                            return false;
                        }
                        // authorised so return true
                        return true;
                    }
                    // not logged in so redirect to login page with the return url
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/_auth_helpers/error.interceptor.ts": 
        /*!****************************************************!*\
          !*** ./src/app/_auth_helpers/error.interceptor.ts ***!
          \****************************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_auth_services/authentication.service */ "./src/app/_auth_services/authentication.service.ts");
            /**
             * This class handles errors from the API. If the error is a 401 then it sends back an error message to the user. This is used for logging in with invalid credentials.
             */
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                ErrorInterceptor.prototype.intercept = function (request, next) {
                    var _this = this;
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                        if (err.status === 401) {
                            // auto logout if 401 response returned from api
                            //sets error as the error message from HTTP error status or pre-made string.
                            _this.authenticationService.logout();
                            //location.reload(true);
                        }
                        var error = err.error.message || "Wrong username or password.";
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                    }));
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ErrorInterceptor);
            /***/ 
        }),
        /***/ "./src/app/_auth_helpers/jwt.interceptor.ts": 
        /*!**************************************************!*\
          !*** ./src/app/_auth_helpers/jwt.interceptor.ts ***!
          \**************************************************/
        /*! exports provided: JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return JwtInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_auth_services/authentication.service */ "./src/app/_auth_services/authentication.service.ts");
            /**
             * Handles JWT tokens for user log in and current users. Sets token to current user.
             */
            var JwtInterceptor = /** @class */ (function () {
                function JwtInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                JwtInterceptor.prototype.intercept = function (request, next) {
                    // add auth header with jwt if user is logged in and request is to api url
                    var currentUser = this.authenticationService.currentUserValue;
                    var isLoggedIn = currentUser && currentUser.token;
                    var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
                    if (isLoggedIn && isApiUrl) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: "Bearer " + currentUser.token
                            }
                        });
                    }
                    return next.handle(request);
                };
                return JwtInterceptor;
            }());
            JwtInterceptor.ctorParameters = function () { return [
                { type: _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], JwtInterceptor);
            /***/ 
        }),
        /***/ "./src/app/_auth_models/Role.ts": 
        /*!**************************************!*\
          !*** ./src/app/_auth_models/Role.ts ***!
          \**************************************/
        /*! exports provided: Role */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function () { return Role; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /**
             * User roles are saved in an enum.
             */
            var Role;
            (function (Role) {
                Role["User"] = "User";
                Role["Admin"] = "Admin";
            })(Role || (Role = {}));
            /***/ 
        }),
        /***/ "./src/app/_auth_services/alert.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/_auth_services/alert.service.ts ***!
          \*************************************************/
        /*! exports provided: AlertService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function () { return AlertService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AlertService = /** @class */ (function () {
                function AlertService(router) {
                    var _this = this;
                    this.router = router;
                    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.keepAfterRouteChange = false;
                    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
                    this.router.events.subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                            if (_this.keepAfterRouteChange) {
                                // only keep for a single route change
                                _this.keepAfterRouteChange = false;
                            }
                            else {
                                // clear alert message
                                _this.clear();
                            }
                        }
                    });
                }
                //Grabs the alert for a specific response from the API as an observable.
                AlertService.prototype.getAlert = function () {
                    return this.subject.asObservable();
                };
                //Success message
                AlertService.prototype.success = function (message, keepAfterRouteChange) {
                    if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
                    this.keepAfterRouteChange = keepAfterRouteChange;
                    this.subject.next({ type: 'success', text: message });
                };
                //Error message
                AlertService.prototype.error = function (message, keepAfterRouteChange) {
                    if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
                    this.keepAfterRouteChange = keepAfterRouteChange;
                    this.subject.next({ type: 'error', text: message });
                };
                AlertService.prototype.clear = function () {
                    // clear by calling subject.next() without parameters
                    this.subject.next();
                };
                return AlertService;
            }());
            AlertService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AlertService);
            /***/ 
        }),
        /***/ "./src/app/_auth_services/authentication.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/_auth_services/authentication.service.ts ***!
          \**********************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
                    //Grabs the current user information if they are logged in.
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * This method requests a POST HTTP call to the API with the user credentials in a query parameter for validation.
                 * @param username - user input for their username
                 * @param password - user input for their password
                 */
                AuthenticationService.prototype.login = function (username, password) {
                    var _this = this;
                    // return this.http.post<any>(`${environment.apiUrl}/users/authen`, { username, password })
                    //     .pipe(map(user => {
                    //         // login successful if there's a jwt token in the response
                    //         if (user && user.token) {
                    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //             localStorage.setItem('currentUser', JSON.stringify(user));
                    //             this.currentUserSubject.next(user);
                    //         }
                    //         return user;
                    //     }));
                    return this.http.post("http://hoaa.api.ngrok.io/services/basic_auth/", { username: username, password: password })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
                        // login successful if there's a jwt token in the response
                        if (user && user.id) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('currentUser', JSON.stringify(user));
                            _this.currentUserSubject.next(user);
                        }
                        return user;
                    }));
                };
                AuthenticationService.prototype.logout = function () {
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');
                    this.currentUserSubject.next(null);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/_auth_services/user.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/_auth_services/user.service.ts ***!
          \************************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /**
             * This class is currently not in use.
             */
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                }
                // getAll() {
                //     return this.http.get<Member[]>(`${environment.apiUrl}/users`);
                // }
                // getById(id: number) {
                //     return this.http.get<Member>(`${environment.apiUrl}/users/${id}`);
                // }
                UserService.prototype.getById = function (id) {
                    return this.http.get('http://danny-test.ngrok.io/services/basic_auth/by_id' + id);
                };
                UserService.prototype.getAll = function () {
                    return this.http.get("http://danny-test.ngrok.io/services/basic_auth/all");
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/admin/admin.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/admin/admin.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".grid {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n.margin-top-30 {\r\n    margin-top: 30px;\r\n}\r\n\r\n.table-ticket {\r\n    /* width: 100%; */\r\n    height: 40rem;\r\n    /* overflow: scroll; */\r\n    overflow-y: scroll;\r\n}\r\n\r\n#ticketTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#ticketTable .tableBody,\r\n#ticketTable tbody {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    height: 400px;\r\n    width: 100%;\r\n}\r\n\r\n#ticketTable td,\r\n#ticketTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#ticketTable tr:nth-child(even) {\r\n    background-color: #ddd;\r\n}\r\n\r\n#ticketTable tr:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n#ticketTable th {\r\n    text-transform: uppercase;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.801), rgba(40, 180, 133, 0.801));\r\n    color: white;\r\n}\r\n\r\n#buttonPull {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    color: rgba(126, 213, 111, 0.801);\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.txt-area-modal {\r\n    width: 100%;\r\n}\r\n\r\n.field-head {\r\n    /* font-size: 1.5rem;\r\n    font-weight: bold;\r\n    background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.801), rgba(40, 180, 133, 0.801));\r\n    color: white; */\r\n}\r\n\r\n.form-group .row {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n}\r\n\r\n.modal-header {\r\n    /* background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.801), rgba(40, 180, 133, 0.801));\r\n    color: white;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px; */\r\n}\r\n\r\n.modal-field {\r\n    /* \r\n     */\r\n}\r\n\r\n.table-header-fonts{\r\n    font-size:1.5rem;\r\n    font-weight:400;\r\n}\r\n\r\n.table-font{\r\n    font-size:1.4rem;\r\n}\r\n\r\n.modal-header-center {\r\n    /* position: absolute;\r\nwidth: 1140px;\r\nheight: 70rem;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n-ms-transform: translate(-50%, -50%);\r\ntransform: translate(-50%, -50%);\r\nz-index: 999; */\r\n}\r\n\r\n.modal-content {\r\n    /* height: 25rem; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix5R0FBeUc7SUFDekcsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTs7O21CQUdlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTs7OzJCQUd1QjtBQUMzQjs7QUFFQTtJQUNJO01BQ0U7QUFDTjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7Ozs7Ozs7O2VBUVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0zMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGFibGUtdGlja2V0IHtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgaGVpZ2h0OiA0MHJlbTtcclxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbiN0aWNrZXRUYWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3RpY2tldFRhYmxlIC50YWJsZUJvZHksXHJcbiN0aWNrZXRUYWJsZSB0Ym9keSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jdGlja2V0VGFibGUgdGQsXHJcbiN0aWNrZXRUYWJsZSB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4jdGlja2V0VGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiN0aWNrZXRUYWJsZSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jdGlja2V0VGFibGUgdGgge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgcmdiYSgxMjYsIDIxMywgMTExLCAwLjgwMSksIHJnYmEoNDAsIDE4MCwgMTMzLCAwLjgwMSkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYnV0dG9uUHVsbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiByZ2JhKDEyNiwgMjEzLCAxMTEsIDAuODAxKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50eHQtYXJlYS1tb2RhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpZWxkLWhlYWQge1xyXG4gICAgLyogZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHJnYmEoMTI2LCAyMTMsIDExMSwgMC44MDEpLCByZ2JhKDQwLCAxODAsIDEzMywgMC44MDEpKTtcclxuICAgIGNvbG9yOiB3aGl0ZTsgKi9cclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgLnJvdyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCByZ2JhKDEyNiwgMjEzLCAxMTEsIDAuODAxKSwgcmdiYSg0MCwgMTgwLCAxMzMsIDAuODAxKSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4OyAqL1xyXG59XHJcblxyXG4ubW9kYWwtZmllbGQge1xyXG4gICAgLyogXHJcbiAgICAgKi9cclxufVxyXG5cclxuLnRhYmxlLWhlYWRlci1mb250c3tcclxuICAgIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbn1cclxuXHJcbi50YWJsZS1mb250e1xyXG4gICAgZm9udC1zaXplOjEuNHJlbTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlci1jZW50ZXIge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogMTE0MHB4O1xyXG5oZWlnaHQ6IDcwcmVtO1xyXG50b3A6IDUwJTtcclxubGVmdDogNTAlO1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4tbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG56LWluZGV4OiA5OTk7ICovXHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIC8qIGhlaWdodDogMjVyZW07ICovXHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/admin/admin.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/admin/admin.component.ts ***!
          \******************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _hoa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoa.service */ "./src/app/hoa.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _auth_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_auth_services/user.service */ "./src/app/_auth_services/user.service.ts");
            /**
             * Functionality for admin component goes here.
             */
            var AdminComponent = /** @class */ (function () {
                /**
                 * Constructor creates a formgroup called modalForm that has three fields.
                 * @param HOAService -Service to access Ticket system requests to API
                 * @param modalService - Object that handles events and actions of the modal.
                 * @param fb - formbuilider that creates the modal intake form group.
                 * @param userService - Service object that gives access to Member API requests.
                 */
                function AdminComponent(HOAService, modalService, fb, userService, cd) {
                    this.HOAService = HOAService;
                    this.modalService = modalService;
                    this.fb = fb;
                    this.userService = userService;
                    this.cd = cd;
                    this.loading = false; //keeps track of when the page is loaded on initialization of the page.
                    this.users = []; //Holds information for the current user.
                    //headers for the Admin ticket table.
                    this.headers = ["ticketId", "createdDate", "name", "subject", "isActive"];
                    this.modalForm = fb.group({
                        ticketMessage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        isActive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        ticketId: ['']
                    });
                }
                /**
                 * ngOnInit calls when the page is first loaded.
                 * Grabs the information for the current user.
                 * Also calls getAllTickets() which grabs all active tickets from the API to be used to create the Admin ticket table.
                 */
                AdminComponent.prototype.ngOnInit = function () {
                    this.loading = true;
                    this.getAllTickets();
                };
                /**
                 * Method to grab all active tickets from the API and place these Ticket objects into the tickets array.
                 */
                AdminComponent.prototype.getAllTickets = function () {
                    var _this = this;
                    this.HOAService.getAllTickets()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.tickets = data['tickets'];
                        //console.log(this.tickets);
                    });
                };
                ;
                /**
                 * Method to grab more details based on a given ticket id number. ticketData object holds the returned Ticket object.
                 */
                AdminComponent.prototype.getSelectedTicket = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.HOAService.getTicketById(id).subscribe(function (data) {
                                _this.ticketData = data;
                                console.log(_this.ticketData.name);
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Method used to set all fields of the modalForm based on the attributes of ticketData (the selected ticket object by id).
                 * Opens the modal using modalService.
                 * content - represents the element (modal)
                 * ticket - represents the ticket that is clicked on. Uses this ticket's id to grab more information about the ticket.
                 */
                AdminComponent.prototype.getTicketInfo = function (content, ticket) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.HOAService.getTicketById(ticket.ticketId).subscribe(function (data) {
                                _this.ticketData = data;
                                // console.log(data);
                                // console.log(this.ticketData.message);
                                _this.modalTicketDate = _this.ticketData.createdDate;
                                //this.modalIsActive
                                _this.modalTicketMessage = _this.ticketData.message;
                                _this.modalTicketId = _this.ticketData.ticketId;
                                _this.modalTicketName = _this.ticketData.name;
                                _this.modalTicketPhoneNumber = _this.ticketData.phoneNumber;
                                _this.modalTicketSubject = _this.ticketData.subject;
                                _this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * content- reference to the element modal.
                 * Used to open the modal.
                 */
                AdminComponent.prototype.open = function (content) {
                    this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
                };
                ;
                AdminComponent.prototype.close = function (content) {
                    this.modalRef.close();
                };
                /**
                 * Method used to send back a ticket object to update the specifically selected ticket.
                 * Resets input fields in the modal.
                 * Closes model after data is sent.
                 * Sends an alert to the user when a ticket is sent.
                 */
                AdminComponent.prototype.sendUpdate = function () {
                    var _this = this;
                    this.ticketUpdate = this.modalForm.value;
                    this.ticketUpdate.ticketId = this.modalTicketId;
                    console.log(this.ticketUpdate);
                    this.HOAService.updateTicket(this.ticketUpdate)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.getAllTickets();
                    });
                    this.modalForm.reset();
                    this.modalService.dismissAll();
                    alert("Your ticket is now updated!");
                    console.warn(this.modalForm.value);
                };
                ;
                /**
                 * Method that sends back a ticket id for the selected ticket. This ticket will be deleted.
                 * Closes modal window when delete request is sent.
                 */
                AdminComponent.prototype.sendDelete = function () {
                    var _this = this;
                    this.HOAService.deleteTicket(this.modalTicketId).subscribe(function (data) {
                        _this.getAllTickets();
                    });
                    this.modalService.dismissAll();
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: _hoa_service__WEBPACK_IMPORTED_MODULE_2__["HOAService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _auth_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: appRoutingModule, AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function () { return appRoutingModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket/ticket.component */ "./src/app/ticket/ticket.component.ts");
            /* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _auth_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_auth_helpers/auth.guard */ "./src/app/_auth_helpers/auth.guard.ts");
            /* harmony import */ var _auth_models_Role__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_auth_models/Role */ "./src/app/_auth_models/Role.ts");
            /**
             * Class that handles the pathing of pages/components and their authentication.
             */
            /**
             * routes contains the paths to each of the components.
             * By default '' or empty path will direct user towards HomeComponent.
             * AuthGuard calls the auth.guard.ts from _auth_helpers and checks to see if a user is logged in before directing them to the component/page.
             * Admin component has a role check that only allows this path to be accessed if the user is an Admin.
             */
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_auth_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_auth_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                { path: 'ticket', component: _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_5__["TicketComponent"], canActivate: [_auth_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                { path: 'forum', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_6__["ForumComponent"], canActivate: [_auth_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], canActivate: [_auth_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { roles: [_auth_models_Role__WEBPACK_IMPORTED_MODULE_10__["Role"].Admin] } },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
                { path: '**', redirectTo: '' }
            ];
            var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes);
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
                    ],
                    exports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                    ]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/_auth_services/authentication.service */ "./src/app/_auth_services/authentication.service.ts");
            /* harmony import */ var _app_auth_models_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/_auth_models/Role */ "./src/app/_auth_models/Role.ts");
            /**
             * The parent component for the angular app.
             * Current holds the functionality of the  navigation bar and header of the UI.
             */
            var AppComponent = /** @class */ (function () {
                /**
                 * Constructor grabs current user information from API.
                 * @param router Router object that is used to navigate to different components/pages.
                 * @param authenticationService AutheticationService that is used to call a request to the API that deals with authentication.
                 */
                function AppComponent(router, authenticationService) {
                    var _this = this;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.title = 'HOA Projectnpm '; //Auto-generated variable that holds a title for the application.
                    this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
                }
                Object.defineProperty(AppComponent.prototype, "isAdmin", {
                    /**
                     * Checks to see if the current user is an Admin.
                     */
                    get: function () {
                        return this.currentUser && this.currentUser.role === _app_auth_models_Role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Function used to log a user out and then navigates user back to the log in screen.
                 * Calls logout() from AuthenticationService.
                 */
                AppComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            /* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ticket/ticket.component */ "./src/app/ticket/ticket.component.ts");
            /* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _keys_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./keys.pipe */ "./src/app/keys.pipe.ts");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _auth_components_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_auth_components/alert.component */ "./src/app/_auth_components/alert.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
            /* harmony import */ var _app_auth_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/_auth_helpers/jwt.interceptor */ "./src/app/_auth_helpers/jwt.interceptor.ts");
            /* harmony import */ var _app_auth_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../app/_auth_helpers/error.interceptor */ "./src/app/_auth_helpers/error.interceptor.ts");
            /**
             * This is the TypeScript file that handles all components, modules, objects, classes, etc.. of an Angular project.
             * This is the brains of the Angular App.
             */
            //import { fakeBackendProvider } from '../app/_auth_helpers/fake-backend';
            //import { FlatpickrModule } from 'angularx-flatpickr';
            /**
             * declarations - represents all components, injectables, pipes, etc.. used within the angular project.
             * imports - Specific libraries/modules that are being utilized by one or many of the declarations. (Modules are located in node_modules folder)
             * providers - currently holds HTTPInterceptors that handles errors from server and checks if a user is logged on.
             * bootstrap - AppComponent is the parent component. Lists what components will be bootstrapped.
             */
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_8__["TicketComponent"],
                        _forum_forum_component__WEBPACK_IMPORTED_MODULE_9__["ForumComponent"],
                        _keys_pipe__WEBPACK_IMPORTED_MODULE_11__["KeysPipe"],
                        _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                        _auth_components_alert_component__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                        _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                    ],
                    providers: [
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _app_auth_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _app_auth_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptor"], multi: true },
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/forum/forum.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/forum/forum.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnVtL2ZvcnVtLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/forum/forum.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/forum/forum.component.ts ***!
          \******************************************/
        /*! exports provided: ForumComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function () { return ForumComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * Where functionality for the forum page will go.
             */
            var ForumComponent = /** @class */ (function () {
                function ForumComponent() {
                }
                ForumComponent.prototype.ngOnInit = function () {
                };
                return ForumComponent;
            }());
            ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-forum',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forum/forum.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum.component.css */ "./src/app/forum/forum.component.css")).default]
                })
            ], ForumComponent);
            /***/ 
        }),
        /***/ "./src/app/hoa.service.ts": 
        /*!********************************!*\
          !*** ./src/app/hoa.service.ts ***!
          \********************************/
        /*! exports provided: HOAService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOAService", function () { return HOAService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_Ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/Ticket */ "./src/app/Ticket.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /**
             * Contains the extra headers for responses when sending a POST request back to the service/API.
             */
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'my-auth-token'
                })
            };
            /**
             *
             */
            var HOAService = /** @class */ (function () {
                /**
                 * @param http -The HttpClient object that gives your the ability to send requests back to the API. Uses angular's HttpClient library.
                 */
                function HOAService(http) {
                    this.http = http;
                    this.Tickets = [];
                    /**
                     * All endpoints for the ticketing system held in variable. Variable names are self defining using <type of request>TicketURL.
                     */
                    this.getAllTicketURL = "http://hoaa.api.ngrok.io/services/ticket/microservices/ticket_crud_service/GetAll";
                    this.getTicketByIdURL = "http://hoaa.api.ngrok.io/services/ticket/microservices/ticket_crud_service/by_ticketid?id=";
                    this.postTicketURL = "http://hoaa.api.ngrok.io/services/ticket/microservices/ticket_crud_service/";
                    this.updateTicketURL = "http://hoaa.api.ngrok.io/services/ticket/microservices/ticket_crud_service/";
                    this.deleteTicketURL = "http://hoaa.api.ngrok.io/services/ticket/microservices/ticket_crud_service/?id=";
                }
                /**
                 * Method used to grab all Ticket objects from API/ Database.
                 */
                HOAService.prototype.getAllTickets = function () {
                    // return this.http.get(this.getAllTicketURL)
                    //         .pipe(map((result: Response) => this.Tickets = result['tickets']));\
                    return this.http.get(this.getAllTicketURL)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _app_Ticket__WEBPACK_IMPORTED_MODULE_2__["Ticket"](data); }));
                };
                ;
                /**
                 * Grabs a speific ticket from API based on ID parameter.
                 * @param id -ID number of a specific ticket.
                 */
                HOAService.prototype.getTicketById = function (id) {
                    return this.http.get(this.getTicketByIdURL + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _app_Ticket__WEBPACK_IMPORTED_MODULE_2__["Ticket"](data); }));
                };
                ;
                /**
                 * This method is a POST request that takes in a Ticket object and sends it to the API to be handled and added to the database.
                 */
                HOAService.prototype.addTicket = function (ticket) {
                    return this.http.post(this.postTicketURL, ticket, httpOptions);
                };
                /**
                 * This method is used to update existing tickets in the database using another Ticket object.
                 * @param ticket -Ticket used to replace another ticket.
                 */
                HOAService.prototype.updateTicket = function (ticket) {
                    return this.http.put(this.updateTicketURL, ticket, httpOptions);
                };
                /** DELETE: delete the ticket from the server */
                HOAService.prototype.deleteTicket = function (id) {
                    return this.http.delete(this.deleteTicketURL + id, httpOptions);
                };
                return HOAService;
            }());
            HOAService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            HOAService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
                /**
                 * HOAService is a class that contains the URLs and methods used to send request back to the API.
                 * This is the ticketing systems service class which handles interactions with endpoints.
                 */
            ], HOAService);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    border-bottom-width: 1px;\r\n    border-bottom-color: gray;\r\n    border-bottom-style: solid;\r\n}\r\n\r\na {\r\n    color: gray;\r\n}\r\n\r\n.h1 {\r\n    margin-top: 50px;\r\n}\r\n\r\n.h2 {\r\n    color: color_gray;\r\n}\r\n\r\n.TableResults {\r\n    margin: 0 auto;\r\n    /* or margin: 0 auto 0 auto */\r\n}\r\n\r\n#buttonPull button {\r\n    width: 100%;\r\n    /* background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.801), rgba(40, 180, 133, 0.801)); */\r\n    color: white;\r\n}\r\n\r\n#ticketTable table,\r\nth,\r\ntr {\r\n    border: 1px solid black;\r\n}\r\n\r\n#ticketTable table {\r\n    width: 100%;\r\n}\r\n\r\n#ticketTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#ticketTable tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n#ticketTable tr:hover {\r\n    background-color: #ddd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsK0dBQStHO0lBQy9HLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5oMiB7XHJcbiAgICBjb2xvcjogY29sb3JfZ3JheTtcclxufVxyXG5cclxuLlRhYmxlUmVzdWx0cyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qIG9yIG1hcmdpbjogMCBhdXRvIDAgYXV0byAqL1xyXG59XHJcblxyXG4jYnV0dG9uUHVsbCBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCByZ2JhKDEyNiwgMjEzLCAxMTEsIDAuODAxKSwgcmdiYSg0MCwgMTgwLCAxMzMsIDAuODAxKSk7ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN0aWNrZXRUYWJsZSB0YWJsZSxcclxudGgsXHJcbnRyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jdGlja2V0VGFibGUgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN0aWNrZXRUYWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuI3RpY2tldFRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4jdGlja2V0VGFibGUgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_auth_services/user.service */ "./src/app/_auth_services/user.service.ts");
            /* harmony import */ var _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_auth_services/authentication.service */ "./src/app/_auth_services/authentication.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(userSerive, authenticationService) {
                    this.userSerive = userSerive;
                    this.authenticationService = authenticationService;
                    this.loading = false;
                    this.currentUser = this.authenticationService.currentUserValue;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.loading = true;
                    // this.userSerive.getById(this.currentUser.id).pipe(first()).subscribe(
                    //   user=>{
                    //     this.loading = false;
                    //     this.userFromApi = user;
                    //   }
                    // )
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _auth_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/keys.pipe.ts": 
        /*!******************************!*\
          !*** ./src/app/keys.pipe.ts ***!
          \******************************/
        /*! exports provided: KeysPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function () { return KeysPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * Pipe that is supposed to separate Key from Values in a JSON response. It is not currently being used.
             */
            var KeysPipe = /** @class */ (function () {
                function KeysPipe() {
                }
                KeysPipe.prototype.transform = function (value, args) {
                    var keys = [];
                    for (var key in value) {
                        keys.push(key);
                    }
                    return keys;
                };
                return KeysPipe;
            }());
            KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'keys' })
            ], KeysPipe);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".font-2-rem{\r\n    /* font-size:2rem; */\r\n}\r\n\r\n.login-input{\r\n    /* font-size:1.5rem;\r\n    height: 4rem; */\r\n}\r\n\r\n.card-header{\r\n    /* background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.801), rgba(40, 180, 133, 0.801));\r\n    color:white; */\r\n}\r\n\r\n.login-form2 {\r\n    margin: 0 auto;\r\n    max-width: 55rem;\r\n    background-color: #fff;\r\n    box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);\r\n    padding: 5rem 7rem;\r\n    border-radius: 5px;\r\n  }\r\n\r\n.heading-secondary2 {\r\n    font-size: 2.25rem;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    background-image: linear-gradient(to right, #7dd56f, #28b487);\r\n    -webkit-background-clip: text;\r\n    color: transparent;\r\n    letter-spacing: 0.1rem;\r\n    line-height: 1.3;\r\n    display: inline-block;\r\n  }\r\n\r\n.form__label2 {\r\n    display: block;\r\n    font-size: 1.6rem;\r\n    font-weight: 700;\r\n    margin-bottom: 0.75rem;\r\n  }\r\n\r\n.form__input2 {\r\n    display: block;\r\n    font-family: inherit;\r\n    font-size: 1.5rem;\r\n    color: inherit;\r\n    padding: 1.25rem 1.75rem;\r\n    border: none;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    background-color: #f2f2f2;\r\n    border-top: 3px solid transparent;\r\n    border-bottom: 3px solid transparent;\r\n    transition: all 0.3s;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n\r\n    height: inherit;\r\n    background-clip: inherit;\r\n  }\r\n\r\n.form__input2:focus {\r\n    outline: none;\r\n    /* border-bottom: 3px solid #55c57a; */\r\n}\r\n\r\n.form__input2:focus:invalid {\r\n    border-bottom: 3px solid #ff7730;\r\n}\r\n\r\n.form__input2::-webkit-input-placeholder {\r\n    color: #bbb;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJO21CQUNlO0FBQ25COztBQUVBO0lBQ0k7a0JBQ2M7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUV0QixrREFBa0Q7SUFDbEQsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBRWhCLDZEQUE2RDtJQUM3RCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUVwQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBRWxCLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtMi1yZW17XHJcbiAgICAvKiBmb250LXNpemU6MnJlbTsgKi9cclxufVxyXG5cclxuLmxvZ2luLWlucHV0e1xyXG4gICAgLyogZm9udC1zaXplOjEuNXJlbTtcclxuICAgIGhlaWdodDogNHJlbTsgKi9cclxufVxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgcmdiYSgxMjYsIDIxMywgMTExLCAwLjgwMSksIHJnYmEoNDAsIDE4MCwgMTMzLCAwLjgwMSkpO1xyXG4gICAgY29sb3I6d2hpdGU7ICovXHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtMiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogNTVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIuNXJlbSA4cmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMi41cmVtIDhyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgcGFkZGluZzogNXJlbSA3cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5oZWFkaW5nLXNlY29uZGFyeTIge1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KCBsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzdkZDU2ZiksIHRvKCMyOGI0ODcpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzdkZDU2ZiwgIzI4YjQ4Nyk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1fX2xhYmVsMiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgfVxyXG5cclxuLmZvcm1fX2lucHV0MiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMS43NXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gIC5mb3JtX19pbnB1dDI6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTVjNTdhOyAqL1xyXG59XHJcblxyXG4uZm9ybV9faW5wdXQyOmZvY3VzOmludmFsaWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjc3MzA7XHJcbn1cclxuXHJcbi5mb3JtX19pbnB1dDI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_auth_services/authentication.service */ "./src/app/_auth_services/authentication.service.ts");
            /**
             * Handles functionality for LogIn Component.
             */
            var LoginComponent = /** @class */ (function () {
                /**
                 *
                 * @param formBuilder Used to create LogIn FormGroup.
                 * @param route Used to reroute user based on actions after logging in.
                 * @param router Also used to reroute user.
                 * @param authenticationService reference to AuthenticationService
                 */
                function LoginComponent(formBuilder, route, router, authenticationService) {
                    this.formBuilder = formBuilder;
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.loading = false; //checks to see if page is loading.
                    this.submitted = false; //checks to see if loginForm has been submitted.
                    this.error = ''; //string to represent error message.
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/home']);
                    }
                }
                /**
                 * Builds a loginForm using two input elements of username and password.
                 */
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    // get return url from route parameters or default to '/'
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
                };
                Object.defineProperty(LoginComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.loginForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Called when login button is clicked.
                 * Calls login from authenticationSerive and sends back the username and password to be validated by API.
                 * Once the promise is completed and user can be logged on, it will reroute user to '/' or this.returnURL which sends user to the home page.
                 */
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.loginForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.authenticationService.login(this.f.username.value, this.f.password.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.router.navigate([_this.returnUrl]);
                    }, function (error) {
                        _this.error = error;
                        _this.loading = false;
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/nav/nav.component.css": 
        /*!***************************************!*\
          !*** ./src/app/nav/nav.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    border-bottom-width: 1px;\r\n    border-bottom-color: gray;\r\n    border-bottom-style: solid;\r\n}\r\n\r\n.navbar-nav {\r\n    font-size: 1.8em !important;\r\n}\r\n\r\n.nav-link {\r\n    padding-right: 5rem !important;\r\n    color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/nav/nav.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/nav/nav.component.ts ***!
          \**************************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavComponent = /** @class */ (function () {
                function NavComponent() {
                }
                NavComponent.prototype.ngOnInit = function () {
                };
                return NavComponent;
            }());
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/ticket/ticket.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/ticket/ticket.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC90aWNrZXQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/ticket/ticket.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/ticket/ticket.component.ts ***!
          \********************************************/
        /*! exports provided: TicketComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function () { return TicketComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _hoa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoa.service */ "./src/app/hoa.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /**
             * Ticket class that handles all functionality behind the Ticket component.
             */
            var TicketComponent = /** @class */ (function () {
                /**
                 * Creates a formGroup using a FormBuilder, fb.
                 * Adds validators to each input elements and monitors input submissions.
                 */
                function TicketComponent(HOAService, fb) {
                    this.HOAService = HOAService;
                    this.fb = fb;
                    this.submitted = false; //checks to see if intakeform has been submitted.
                    this.intakeForm = fb.group({
                        ticketMessage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                }
                TicketComponent.prototype.ngOnInit = function () {
                };
                Object.defineProperty(TicketComponent.prototype, "f", {
                    /**
                     * Returns an object reference to form group "Intake Form"
                     */
                    get: function () {
                        return this.intakeForm.controls;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Methods calls the addTicket() from HOASerive with an the input as a value of the intakeForm.
                 * After the ticket is send. The method resets all data fields in the intakeForms.
                 * A alert is sent to the user to notify that the ticket is sent.
                 */
                TicketComponent.prototype.addNewTicket = function () {
                    var _this = this;
                    this.submitted = true;
                    if (this.intakeForm.invalid) {
                        alert("Please fill in all fields with the correct responses");
                        return;
                    }
                    if (this.intakeForm.invalid == false) {
                        this.HOAService.addTicket(this.intakeForm.value)
                            .subscribe(function (data) {
                            console.log(data);
                            _this.intakeForm.reset();
                        });
                        alert("Thanks for submitting a ticket!");
                        console.warn(this.intakeForm.value);
                    }
                };
                return TicketComponent;
            }());
            TicketComponent.ctorParameters = function () { return [
                { type: _hoa_service__WEBPACK_IMPORTED_MODULE_2__["HOAService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            TicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ticket',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ticket.component.css */ "./src/app/ticket/ticket.component.css")).default]
                })
            ], TicketComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: 'http://localhost:4000'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\danny\Documents\hoa\Admin\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map