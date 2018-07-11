webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(12);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(8);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(11);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(9);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(10);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Map = __webpack_require__(7);

var _Map2 = _interopRequireDefault(_Map);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Map2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var companyInfo = {
  title: 'TASTE OF VIETNAM',
  phone: '(718) 899 - 8674',
  location: 'San Francisco, United States'
};

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "contact us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Vietnam"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "San Francisco, ",
              (0, _hyperapp.h)(
                "span",
                null,
                "United States"
              )
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "Address" },
              "Taste Of Vietnam   ",
              (0, _hyperapp.h)("br", null),
              "87965 Broadway st, ",
              (0, _hyperapp.h)("br", null),
              "San Francisco, CA 94738"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              " ",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:support@phovietnam.com" },
                "support@phovietnam.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "(718) 899 - 8674"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday and Sunday ",
              (0, _hyperapp.h)("br", null),
              "from 12pm - 3pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Monday - Friday",
              (0, _hyperapp.h)("br", null),
              "from 5pm - 11pm"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)("div", { "class": "footer-logo" }),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Home"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.twitter.com/", target: "new" },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.facebook.com/", target: "new" },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-f" })
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.google.com/", target: "new" },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-google-plus-g" })
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.instagram.com/", target: "new" },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.youtube.com/", target: "new" },
          (0, _hyperapp.h)(
            "li",
            null,
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2018 Copyright"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)("div", { "class": "logo" }),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Home"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Map;

var _hyperapp = __webpack_require__(0);

function Map(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Map" },
    (0, _hyperapp.h)(
      "div",
      { "class": "google-map" },
      (0, _hyperapp.h)("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71024.73442840358!2d-122.45264757814331!3d37.77829791257393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf79c53d4792d1272!2sBoutikia+Homes!5e0!3m2!1sen!2sus!4v1528843133390", width: "100%", height: "500px", frameborder: "1", style: "border:0", allowfullscreen: true })
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Traditional made perfect for your taste buds."
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Taste Of Vietnam offers a modern Vietnamese dining experience. The restaurant brings a combination of chef driven menu and warm California spirit by using fresh local produce and ingredients. Our chef applies authentic Vietnamese flavors and techniques that allow the ingredients to be expressed without boundaries."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"Hands down the best Pho I ever had!\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Davis"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"The secret ingredient is always love.\""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- Johnny -"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "https://github.com/kenvantruong/hyper-restaurant/blob/master/public/img/chef-ken.jpg?raw=true" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "REVIEWS"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "MasterChef Of Vietnam"
          ),
          (0, _hyperapp.h)(
            "h4",
            null,
            "\"Best Pho Restaurant in San Francisco area!\""
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Vaporware sustainable mlkshk af hammock distillery selfies marfa narwhal. Cliche semiotics health goth, blog cred lumbersexual mumblecore celiac kitsch lo-fi sriracha."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "author" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Dom Ramsey"
            ),
            " - Winner of Iron Chef 2017"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { "class": "fa fa-arrow-left", "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { "class": "fa fa-arrow-right ready", "aria-hidden": "true" })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor Of Saigon"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img-one" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$10"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Ph\u1EDF \u0111\u1EB7c Bi\u1EC7t #1"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Famous Beef Rice Noodle Soup - Includes Beef or Chicken, Onions, Sugar, Ginger, Salt, Star anise, Fish sauce, and Rice Noodles"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img-two" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$12"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "B\xFAn B\xF2 Hu\u1EBF #37"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Hue Village Special Rice Noodle Soup - Includes Oxtail, Beef, Pork, Red pepper flakes, Garlic, Annatto seeds, Fish sauce, Shrimp paste"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img-three" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "$15"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "B\xFAn B\xF2 X\xE0o #12"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Vietnamese Lemon Grass Chicken with Rice Noodles - Includes Chicken, Meat Balls or Sirloin Steak, Sugar, Sprouts, Fish sauce, and Rice Noodles"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Contact Us"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(718) 899 - 8674"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri: "
            ),
            " 9am - 11pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Weekend: "
            ),
            " 9am - 3am"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[13]);