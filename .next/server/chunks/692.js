"use strict";
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 7150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2684);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const editorCanvasVariant = {
    hidden: {
        transformX: "0px",
        transformY: "0px",
        transformZ: "0px",
        scaleX: 2,
        scaleY: 2,
        scaleZ: 2
    },
    visible: {
        transformX: "0px",
        transformY: "0px",
        transformZ: "60px",
        scaleX: 0.75,
        scaleY: 0.75,
        scaleZ: 1
    }
};
function Background() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index_styled__WEBPACK_IMPORTED_MODULE_2__/* .BackgroundStyles */ .D, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            className: "editor-canvas",
            variants: editorCanvasVariant,
            initial: "hidden",
            animate: "visible",
            transition: {
                ease: "easeIn",
                duration: 3,
                delay: 2
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/image1.jpeg",
                    alt: "Image 1",
                    style: {
                        marginRight: "10px"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/image2.jpeg",
                    alt: "Image 2",
                    style: {
                        marginRight: "10px"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/image3.jpeg",
                    alt: "Image 3"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ BackgroundStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const BackgroundStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-32601382-0"
})`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url("/images/background.png");
  background-position: 50% 50%;
  background-size: cover;
  perspective: 2000px;

  .editor-canvas {
    position: relative;
    bottom: auto;
    display: flex;
    overflow: visible;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    perspective: 2000px;
    transform: perspective(2000px) translate3d(0px, 0px, 52px);
    background-clip: padding-box;
    -webkit-text-fill-color: inherit;
    object-fit: contain;
    transform-style: preserve-3d;

    /* Additional styles for motion animation */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 10px; /* Adjust margin between images */
      max-width: 100%; /* Ensure images don't exceed container width */
      height: auto; /* Maintain aspect ratio */
    }

    @media (max-width: 1100px) {
      display: none;
    }
  }
`;


/***/ }),

/***/ 8415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_styled__WEBPACK_IMPORTED_MODULE_2__]);
_index_styled__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const brandTextVariants = {
    visible: {
        opacity: 1,
        display: "block"
    },
    hidden: {
        opacity: 0
    }
};
function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index_styled__WEBPACK_IMPORTED_MODULE_2__/* .FooterStyles */ .F, {
        variants: brandTextVariants,
        initial: "hidden",
        animate: "visible",
        transition: {
            ease: "easeInOut",
            duration: 3,
            delay: 6
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FooterStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const FooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
    componentId: "sc-573dab2-0"
})`
  position: fixed;
  height: 40px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
  bottom: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  color: #7b7b7b;
  letter-spacing: 1px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8708);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_styled__WEBPACK_IMPORTED_MODULE_2__, _index__WEBPACK_IMPORTED_MODULE_3__]);
([_index_styled__WEBPACK_IMPORTED_MODULE_2__, _index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const homeVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};
const Home = ()=>{
    const [animate, setAnimate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_styled__WEBPACK_IMPORTED_MODULE_2__/* .HomeComponent */ .O, {
            variants: homeVariant,
            initial: "hidden",
            animate: "visible",
            transition: {
                delay: 1,
                duration: 1
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__/* .Navbar */ .wp, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__/* .Background */ .Aq, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__/* .Titles */ .KT, {
                    setAnimate: setAnimate,
                    animate: animate
                }),
                animate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u_, {
                    setAnimate: setAnimate,
                    animate: animate
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$_, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const HomeComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
    componentId: "sc-8d539009-0"
})`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "Aq": () => (/* reexport safe */ _background__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "KT": () => (/* reexport safe */ _titles__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "SK": () => (/* reexport safe */ _homepage__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "a_": () => (/* reexport safe */ _loading_screens__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "h_": () => (/* reexport safe */ _meta__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "wp": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_3__.Z)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7150);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5039);
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8118);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5387);
/* harmony import */ var _titles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(184);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9867);
/* harmony import */ var _loading_screens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9023);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2836);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background__WEBPACK_IMPORTED_MODULE_0__, _homepage__WEBPACK_IMPORTED_MODULE_1__, _navbar__WEBPACK_IMPORTED_MODULE_3__, _titles__WEBPACK_IMPORTED_MODULE_4__, _modal__WEBPACK_IMPORTED_MODULE_7__, _footer__WEBPACK_IMPORTED_MODULE_8__]);
([_background__WEBPACK_IMPORTED_MODULE_0__, _homepage__WEBPACK_IMPORTED_MODULE_1__, _navbar__WEBPACK_IMPORTED_MODULE_3__, _titles__WEBPACK_IMPORTED_MODULE_4__, _modal__WEBPACK_IMPORTED_MODULE_7__, _footer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ loading_screens)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/loading-screens/index.styled.js

const Screen = external_styled_components_default().div.withConfig({
    componentId: "sc-784722f8-0"
})`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #dddddd;
`;

;// CONCATENATED MODULE: ./components/loading-screens/index.js



const LoadingScreen = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Screen, {});
};
/* harmony default export */ const loading_screens = (LoadingScreen);


/***/ }),

/***/ 8118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Meta = ({ title , description , image , url  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }, "title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "shortcut icon",
                href: "/faviconsur.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "max-image-preview:large"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }, "description"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:type",
                content: "website"
            }, "og:type"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:title",
                content: title
            }, "og:title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:description",
                content: description
            }, "og:description"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:url",
                content: url
            }, "og:url"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:image",
                content: image
            }, "og:image"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:url",
                content: url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:image",
                content: image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                title: title,
                href: "https://feeds.feedburner.com/blogspot/amDG"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "dns-prefetch",
                href: "//s.w.org"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meta);


/***/ }),

/***/ 2836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7879);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7355);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_styled__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__]);
([_index_styled__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const modalVariant = {
    hidden: {
        scale: 0.3,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
};
function emailValidator(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function Modal({ animate , setAnimate  }) {
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useOutsideAlerter */ .p)(wrapperRef, ()=>setAnimate(!animate));
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const submitForm = async (e)=>{
        e.preventDefault();
        setLoading(true);
        if (emailValidator(email)) {
            try {
                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_7__.db, "submissions"), {
                    email
                });
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("You Details have been successfully submitted. Thank you!", {
                    type: "success",
                    position: "top-right",
                    duration: 3000
                });
                setLoading(false);
            } catch (e1) {
                console.error("Error adding document: ", e1);
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("You Details could not be submitted. Please try again!", {
                    type: "error",
                    position: "top-right",
                    duration: 3000
                });
            }
        } else {
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("incorrect email format", {
                type: "error",
                duration: 3000,
                position: "top-right"
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
        children: animate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_styled__WEBPACK_IMPORTED_MODULE_2__/* .ModalStyles */ .b, {
            variants: modalVariant,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            className: "safari-transform",
            transition: {
                type: "spring",
                ease: "easeIn",
                duration: 1
            },
            ref: wrapperRef,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-block",
                    children: "Secure your spot"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "paragraph",
                    children: [
                        "We will be in touch with you for our",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "upcoming launch."
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-block",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "text-field",
                                autoFocus: "true",
                                name: "email",
                                placeholder: "Your E-Mail",
                                id: "email",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "submit-button w-button",
                                onClick: (e)=>submitForm(e),
                                children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    className: "loader-svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "#ffffff",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            className: "spinner_VpEe",
                                            cx: "12",
                                            cy: "12",
                                            r: "0"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            className: "spinner_VpEe spinner_eahp",
                                            cx: "12",
                                            cy: "12",
                                            r: "0"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            className: "spinner_VpEe spinner_f7Y2",
                                            cx: "12",
                                            cy: "12",
                                            r: "0"
                                        })
                                    ]
                                }) : "Submit"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ModalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ModalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
    componentId: "sc-54a60446-0"
})`
  position: fixed;
  top: calc(50% - 160px);
  left: calc(50% - 230px);
  background: red;
  width: 470px;
  height: 320px;
  max-width: 95%;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: #181818;
  color: #1a1a1a;
  transform-style: preserve-3d;
  padding: 30px;
  z-index: 100;
  /* -webkit-transform: translate3d(0, 0, 0); */
  .text-block {
    position: relative;
    display: flex;
    margin: 10px auto;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    line-height: 31px;
    text-align: center;
    object-fit: fill;
    display: flex;
    padding-top: 0px;
    font-family: "Montserrat", sans-serif;
    color: #a5a5a5;
    text-decoration: none;
  }
  .paragraph {
    margin-top: 0px;
    margin-bottom: 37px;
    font-family: "Montserrat", sans-serif;
    color: #a5a5a5;
    text-align: center;
    display: block;
    font-size: 12px;
    font-weight: 200;
  }
  .form-block {
    display: flex;
    flex-direction: column;
    form {
      .text-field {
        height: 45px;
        border-style: solid;
        border-width: 1px;
        border-color: #242424;
        border-radius: 5px;
        background-color: #1d1d1d;
        font-family: "Montserrat", Segoe, sans-serif;
        color: #f1f1f1;
        display: block;
        width: 100%;
        padding: 8px 12px;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 1.42857143;
        vertical-align: middle;
        border: 1px solid #cccccc;
      }
      .submit-button {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background-color: #222;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        display: inline-block;
        padding: 9px 15px;
        color: white;
        border: 0;
        line-height: inherit;
        text-decoration: none;
        cursor: pointer;
        .loader-svg {
          .spinner_VpEe {
            animation: spinner_vXu6 1.2s cubic-bezier(0.52, 0.6, 0.25, 0.99)
              infinite;
          }
          .spinner_eahp {
            animation-delay: 0.4s;
          }
          .spinner_f7Y2 {
            animation-delay: 0.8s;
          }
          @keyframes spinner_vXu6 {
            0% {
              r: 0;
              opacity: 1;
            }
            100% {
              r: 11px;
              opacity: 0;
            }
          }
        }
      }
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4633);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_styled__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_index_styled__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const brandTextVariants = {
    visible: {
        opacity: 1,
        display: "block"
    },
    hidden: {
        opacity: 0
    }
};
const Navbar = ()=>{
    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.onscroll = ()=>{
            // Check if section exists before accessing its properties
            const section = document.querySelector("#scrollId");
            if (section) {
                const sectionTop = section.offsetTop;
                if (navRef) {
                    if (scrollY > 100) {
                        navRef.current.classList.add("no-logo");
                    } else {
                        navRef.current.classList.remove("no-logo");
                    }
                    if (scrollY >= sectionTop) {
                        navRef.current.classList.add("fixed");
                    } else {
                        navRef.current.classList.remove("fixed");
                    }
                }
            }
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index_styled__WEBPACK_IMPORTED_MODULE_3__/* .Component */ .w, {
        ref: navRef,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            style: {
                filter: "blur(0px",
                opacity: 1
            },
            role: "banner",
            variants: brandTextVariants,
            initial: "hidden",
            animate: "visible",
            transition: {
                ease: "easeInOut",
                duration: 3,
                delay: 6
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "navbar-wrapper",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/",
                                "aria-current": "page",
                                className: "navbar-brand",
                                "aria-label": "home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                role: "navigation",
                                className: "nav-menu-wrapper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nav-menu",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/Suryas-Rosooi-logo.png",
                                            alt: "Logo",
                                            className: "logo-fixed"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "menu-button w-nav-button",
                                style: {
                                    WebkitUserSelect: "text"
                                },
                                "aria-label": "menu",
                                role: "button",
                                tabIndex: "0",
                                "aria-controls": "w-nav-overlay-0",
                                "aria-haspopup": "menu",
                                "aria-expanded": "false",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon w-icon-nav-menu"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-nav-overlay",
                    "data-wf-ignore": "",
                    id: "w-nav-overlay-0"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Component = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
    componentId: "sc-fda85746-0"
})`
  position: fixed;
  width: 100%;
  z-index: 1;
  display: block;
  top: 0%;
  & > div {
    display: block;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-start;
    object-fit: fill;
    transform-style: preserve-3d;
    z-index: 5;
    max-width: 100%;
    padding: 20px;
    background-color: transparent;
    position: relative;
    &::before {
      content: " ";
      display: table;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-column-end: 2;
      grid-row-end: 2;
    }
    .container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      transform-style: preserve-3d;
      .navbar-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .navbar-brand {
          position: absolute;
          z-index: 5;
          display: block;
          flex: 0 auto;
          object-fit: fill;
        }
        .nav-menu-wrapper {
          width: 100%;
          position: relative;
          float: right;
          .nav-menu {
            position: relative;
            display: flex;
            margin: 6px 42px 0px;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            align-content: stretch;
            object-fit: fill;
            transform-style: preserve-3d;
            a {
              img {
                height: 100px;
              }
            }
          }
        }
      }
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Section)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/section/index.styled.js

const SectionStyles = external_styled_components_default().div.withConfig({
    componentId: "sc-d87cec73-0"
})`
  max-width: 700px;
  flex-direction: column;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    max-width: 728px;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    img {
      display: inline-block;
      float: left;
    }
  }
  .text-block {
    position: static;
    display: flex;
    margin-top: 0px;
    margin-left: 4px;
    padding-top: 0px;
    padding-bottom: 0px;
    float: left;
    background-color: #ebebeb;
    background-image: linear-gradient(91deg, #ffffff 0%, #fdc6c0 100%);
    font-family: Inter, sans-serif;
    color: #fff;
    font-size: 16px;
    line-height: 26px;
    text-decoration: none;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -o-object-fit: fill;
    object-fit: fill;
  }
`;

;// CONCATENATED MODULE: ./components/section/index.js



function Section() {
    return /*#__PURE__*/ jsx_runtime_.jsx(SectionStyles, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-block"
                })
            ]
        })
    });
}


/***/ }),

/***/ 184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Titles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_font_local_target_css_path_components_titles_index_js_import_arguments_src_path_public_fonts_didot_didot_italic_font_otf_weight_200_style_italic_variableName_roboto___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2596);
/* harmony import */ var _next_font_local_target_css_path_components_titles_index_js_import_arguments_src_path_public_fonts_didot_didot_italic_font_otf_weight_200_style_italic_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_components_titles_index_js_import_arguments_src_path_public_fonts_didot_didot_italic_font_otf_weight_200_style_italic_variableName_roboto___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2475);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const headingVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 0
    }
};
const ceoTextVariants = {
    visible: {
        opacity: 1,
        display: "block"
    },
    hidden: {
        opacity: 0
    }
};
const titleTextVariants = {
    visible: {
        opacity: 1,
        display: "block"
    },
    hidden: {
        opacity: 0
    }
};
const brandTextVariants = {
    visible: {
        opacity: 1,
        display: "block"
    },
    hidden: {
        opacity: 0
    }
};
function Titles({ animate , setAnimate  }) {
    const handleModalShow = ()=>{
        setAnimate(!animate);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index_styled__WEBPACK_IMPORTED_MODULE_2__/* .TitlesStyles */ .q, {
        className: "safari-transform",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {
                    variants: headingVariants,
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        ease: "easeInOut",
                        duration: 1,
                        delay: 2
                    },
                    className: "heading",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Meet"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "img",
                                    src: "/images/Suryas-Rosooi-logo.png"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h4, {
                    variants: ceoTextVariants,
                    initial: "hidden",
                    transition: {
                        ease: "easeInOut",
                        duration: 3,
                        delay: 4
                    },
                    animate: "visible",
                    className: `ceo-text ${(_next_font_local_target_css_path_components_titles_index_js_import_arguments_src_path_public_fonts_didot_didot_italic_font_otf_weight_200_style_italic_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default().className)}`,
                    children: "Suryas Rasooi, is based on authentic adaption on Indian food, with tasty health benefit"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {
                    variants: titleTextVariants,
                    initial: "hidden",
                    transition: {
                        ease: "easeInOut",
                        duration: 3,
                        delay: 5
                    },
                    animate: "visible",
                    className: "title-text",
                    children: "We offer catering to upto 100 people, on site cooking and delivery"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h2, {
                    variants: brandTextVariants,
                    initial: "hidden",
                    transition: {
                        ease: "easeInOut",
                        duration: 3,
                        delay: 6
                    },
                    animate: "visible",
                    className: `brand-text animated ${(_next_font_local_target_css_path_components_titles_index_js_import_arguments_src_path_public_fonts_didot_didot_italic_font_otf_weight_200_style_italic_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default().className)}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    variants: brandTextVariants,
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        ease: "easeInOut",
                        duration: 3,
                        delay: 6
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
                    variants: brandTextVariants,
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        ease: "easeInOut",
                        duration: 3,
                        delay: 6
                    },
                    className: "join-button",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cont",
                        onClick: ()=>handleModalShow(),
                        children: "Email us at suryasrasooi@mgmail.com"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {
                    variants: brandTextVariants,
                    initial: "hidden",
                    animate: "visible",
                    transition: {
                        ease: "easeInOut",
                        duration: 3,
                        delay: 6
                    },
                    href: "/",
                    className: "link"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ TitlesStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TitlesStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-d3289d19-0"
})`
  width: 100%;
  position: relative;
  display: block;
  overflow: visible;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0px;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  backface-visibility: visible;
  text-align: center;
  object-fit: fill;
  transform-style: preserve-3d;

  /* -webkit-transform: translate3d(0%, 0%, 200px); */
  @media (max-width: 991px) {
    max-width: 800px;
  }

  & > div {
    position: relative;
    height: fit-content;
  }
  .animated {
    color: blue;
  }

  .animated:before {
    content: "draft up agreements";
    animation: changeText 7s infinite 3.5s;
    animation-delay: 7s;
  }

  @keyframes changeText {
    33% {
      content: "Special Meat Rices Dishes";
    }
    66% {
      content: "Veggie & Meat Curries";
    }
    100% {
      content: "Kebabs & Samosas";
    }
  }

  .heading {
    display: flex;
    line-height: 44px;
    position: absolute;
    left: 0%;
    top: 50%;
    right: 0%;
    bottom: 0%;
    margin-top: 0px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0px;
    flex-direction: column;
    align-items: center;
    transform: translate(0px, -50%);
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 90px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    flex-direction: row;
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: inherit;
      line-height: inherit;
      margin-right: 30px;
    }
    img {
      height: 90px;
      margin-top: 20px;

    }

    @media (max-width: 450px) {
      font-size: 50px;
      line-height: 60px;
      img {
        height: 50px;
      }
    }
  }
  .title-text {
    max-width: 700px;
    margin: 10px auto;
    margin-bottom: 10px;
    transform: translate(0px, 0px);
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 55px;
    line-height: 65px;
    font-weight: 700;
    text-align: center;
    white-space: normal;
    @media (max-width: 450px) {
      font-size: 35px;
      line-height: 42px;
    }
  }
  .ceo-text {
    max-width: 700px;
    margin: 10px auto;
    font-style: italic;
    letter-spacing: 13px;
    font-weight: 200;
    color: #fff;
    font-size: 30px;
    line-height: 35px;
    font-weight: 700;
    text-align: center;
    white-space: normal;
    @media (max-width: 450px) {
      font-size: 25px;
      line-height: 32px;
    }
  }

  .brand-text {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    word-break: break-all;
    transform: translate(0px, 0px);
    font-style: italic;
    font-weight: 200;
    letter-spacing: 10px;
    color: #fff;
    font-size: 36px;
    line-height: 88px;
    text-align: center;
    white-space: normal;
    @media (max-width: 450px) {
      font-size: 17px;
      line-height: 60px;
    }
  }
  .join-button {
    max-width: 300px;
    width: 100%;
    height: 50px;
    border-radius: 6px;
    box-shadow: 0 4px 10px #333333;
    margin: 0 auto;
    cursor: pointer;
    padding: 3px;
    background: linear-gradient(91deg, #ffffff 0%, #fdc6c0 100%);
    .cont {
      width: 100%;
      height: 100%;
      padding: 9px;
      color: white;
      border-radius: 5px;
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      font-weight: 600;
      display: inline-block;
      line-height: inherit;
      text-decoration: none;
      background: #000;

      @media (max-width: 1100px) {
        background: transparent
          radial-gradient(closest-side at 50% 50%, #362e4c 0%, #362e3e 100%) 0%
          0% no-repeat padding-box;
      }
    }
  }
  .link {
    font-size: 14px;
    color: #e4e4e4;
    display: block;
    margin: 30px auto;
    text-decoration: underline;
    font-family: "Montserrat", sans-serif;
  }
`;


/***/ }),

/***/ 101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need


const firebaseConfig = {
    apiKey: "AIzaSyBgjT5gQEYkG55D4EAYGXY2EK--WRl2BGE",
    authDomain: "suryasrasooi-8a0d7.firebaseapp.com",
    projectId: "suryasrasooi-8a0d7",
    storageBucket: "suryasrasooi-8a0d7.appspot.com",
    messagingSenderId: "130066362305",
    appId: "1:130066362305:web:3a2d7b1515237597c04940",
    measurementId: "G-EM2M2RF9CK"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ hooks_useOutsideAlerter)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/useOutsideAlerter.js

const useOutsideAlerter = (ref, outsideAction)=>{
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            console.log(event.target.classList[0]);
            if (ref.current && !ref.current.contains(event.target) && event.target.classList[0] !== "cont") {
                console.log("calling outside action");
                outsideAction();
            }
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        ref
    ]);
};
/* harmony default export */ const hooks_useOutsideAlerter = (useOutsideAlerter);

;// CONCATENATED MODULE: ./hooks/index.js



/***/ })

};
;