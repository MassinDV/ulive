(window.webpackJsonp = window.webpackJsonp || []).push([
    [68, 40, 42, 43, 44, 47, 48, 53], {
        257: function(t, e, r) {
            var content = r(263);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(41).default)("4c788c2d", content, !0, {
                sourceMap: !1
            })
        },
        258: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = {
                    props: {
                        logLink: String
                    }
                },
                o = r(28),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("n-link", {
                        attrs: {
                            to: t.logLink
                        }
                    }, [r("img", {
                        attrs: {
                            src: "/images/logo/logo.png",
                            alt: "Logo"
                        }
                    })])], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        259: function(t) {
            t.exports = JSON.parse('[{"url":"https://www.facebook.com/","iconName":"zmdi zmdi-facebook","mediaName":"facebook"},{"url":"https://www.twitter.com/","iconName":"zmdi zmdi-twitter","mediaName":"twitter"},{"url":"https://www.linkedin.com/","iconName":"zmdi zmdi-linkedin","mediaName":"linkedin"},{"url":"https://www.instagram.com/","iconName":"zmdi zmdi-instagram","mediaName":"instagram"}]')
        },
        260: function(t) {
            t.exports = JSON.parse('[{"name":"Home","mainlink":"/home"},{"name":"About US","mainlink":"/about"},{"name":"Series","mainlink":"/series"},{"name":"Contact Us","mainlink":"/contact"},{"name":"Tv Series","mainlink":"/series"},{"name":"Tech","mainlink":"/home"},{"name":"Movie","mainlink":"/movie"},{"name":"Video","mainlink":"/movie"},{"name":"Live","mainlink":"/home"},{"name":"Tv Series","mainlink":"/series"}]')
        },
        261: function(t) {
            t.exports = JSON.parse('[{"name":"Report a Bug","mainlink":"/home"},{"name":"Request a Feature","mainlink":"/about"},{"name":"Content Grievance","mainlink":"/home"},{"name":"Movie Request","mainlink":"/home"},{"name":"Submit Your Story","mainlink":"/contact"},{"name":"Privacy Policy","mainlink":"/home"},{"name":"Terms of Services","mainlink":"/contact"},{"name":"Support","mainlink":"/contact"}]')
        },
        262: function(t, e, r) {
            "use strict";
            r(257)
        },
        263: function(t, e, r) {
            var n = r(40)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".facebook[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(59 89 152 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(59 89 152 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.facebook[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(0 179 236 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 179 236 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(10 102 194 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(10 102 194 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(228 64 95 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(228 64 95 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}", ""]), n.locals = {}, t.exports = n
        },
        264: function(t, e, r) {
            "use strict";
            r.r(e);
            r(15), r(29), r(30);
            var n = r(259),
                o = r(260),
                l = r(261),
                c = {
                    components: {
                        Logo: function() {
                            return Promise.resolve().then(r.bind(null, 258))
                        },
                        BrandLogo: function() {
                            return r.e(22).then(r.bind(null, 433))
                        }
                    },
                    data: function() {
                        return {
                            socialData: n,
                            footerMenuData: o,
                            footerSubmenuData: l
                        }
                    }
                },
                m = (r(262), r(28)),
                component = Object(m.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex flex-wrap md:flex-row flex-col"
                    }, [r("div", {
                        staticClass: "flex flex-col w-full sm:w-3/4 md:w-1/3 lg:w-1/4 mb-8 md:mb-0"
                    }, [r("Logo", {
                        attrs: {
                            logLink: "/home"
                        }
                    }), t._v(" "), r("p", {
                        staticClass: "text-sm text-white w-full sm:w-[75%] my-5"
                    }, [t._v("Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip ex ea comm.")]), t._v(" "), r("ul", {
                        staticClass: "fotter-socail"
                    }, t._l(t.socialData, (function(link, t) {
                        return r("li", {
                            key: t,
                            staticClass: "inline-block"
                        }, [r("a", {
                            staticClass: "sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center rounded-full sm:mr-3 mr-2",
                            class: link.mediaName,
                            attrs: {
                                href: link.url
                            }
                        }, [r("i", {
                            class: link.iconName
                        })])])
                    })), 0)], 1), t._v(" "), r("div", {
                        staticClass: "lg:w-3/4 md:w-2/3 w-full"
                    }, [r("div", {
                        staticClass: "footer-top-right 2xl:ml-[50px] lg:ml-[20px] ml-0"
                    }, [r("div", {
                        staticClass: "footer-quicklink"
                    }, [r("ul", {
                        staticClass: "flex items-center flex-wrap"
                    }, t._l(t.footerMenuData, (function(link, e) {
                        return r("li", {
                            key: e,
                            staticClass: "md:mr-10 mr-5 last:mr-0"
                        }, [r("n-link", {
                            staticClass: "text-white text-[16px] md:text-[18px] hover:text-[#f4181c]",
                            attrs: {
                                to: link.mainlink
                            }
                        }, [t._v("\n                            " + t._s(link.name) + "\n                        ")])], 1)
                    })), 0)]), t._v(" "), r("BrandLogo"), t._v(" "), r("div", {
                        staticClass: "footer-quicklink-2"
                    }, [r("ul", {
                        staticClass: "flex items-center flex-wrap"
                    }, t._l(t.footerSubmenuData, (function(link, e) {
                        return r("li", {
                            key: e,
                            staticClass: "mr-10 last:mr-0 relative last:before:hidden before:absolute before:-right-5 before:top-1/2 before:w-[1px] before:h-[15px] before:content-[''] before:bg-[#444444] before:-translate-y-1/2"
                        }, [r("n-link", {
                            staticClass: "text-white text-[14px] hover:text-[#f4181c]",
                            attrs: {
                                to: link.mainlink
                            }
                        }, [t._v("\n                            " + t._s(link.name) + "\n                        ")])], 1)
                    })), 0)])], 1)])])
                }), [], !1, null, "e48bc206", null);
            e.default = component.exports;
            installComponents(component, {
                Logo: r(258).default
            })
        },
        265: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(28),
                component = Object(n.a)({}, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex items-center lg:justify-between lg:flex-row flex-col justify-center"
                    }, [t._m(0), t._v(" "), r("div", {
                        staticClass: "login-alert flex items-center md:flex-row flex-col lg:order-2 order-1"
                    }, [r("p", {
                        staticClass: "text-white mb-3 md:mb-0 text-[14px] mr-[15px]"
                    }, [t._v("Already have an Account? "), r("n-link", {
                        staticClass: "text-white uppercase font-semibold hover:text-[#f4181c]",
                        attrs: {
                            to: "/login"
                        }
                    }, [t._v("LOGIN")])], 1), t._v(" "), r("div", {
                        staticClass: "flex items-center justify-center"
                    }, [r("n-link", {
                        staticClass: "text-[16px] inline-block rounded-[3px] transition-all duration-300 py-[12px] px-[25px] bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]",
                        attrs: {
                            to: "/pricing"
                        }
                    }, [t._v("Become a Member")])], 1)])])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "copyright lg:mt-0 mt-5 lg:order-1 order-2"
                    }, [r("p", {
                        staticClass: "copyright-text text-white text-[14px] text-center"
                    }, [t._v("\n            Copyright ©2022 All rights reserved\n        ")])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        266: function(t, e, r) {
            var content = r(269);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(41).default)("73aac893", content, !0, {
                sourceMap: !1
            })
        },
        268: function(t, e, r) {
            "use strict";
            r(266)
        },
        269: function(t, e, r) {
            var n = r(40)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".breadcrumb-item[data-v-64fc2b49]{display:inline-block;font-size:16px;text-transform:capitalize}", ""]), n.locals = {}, t.exports = n
        },
        270: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = {
                    props: {
                        BreadcrumbTitle: String,
                        BreadcrumbEnd: String
                    },
                    components: {}
                },
                o = (r(268), r(28)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "flex items-center justify-center flex-col sm:flex-row"
                    }, [r("h1", {
                        staticClass: "font-semibold text-white text-[25px] mr-5"
                    }, [t._v(t._s(t.BreadcrumbTitle))]), t._v(" "), r("ul", {
                        staticClass: "flex justify-center items-center mt-2 flex-row"
                    }, [r("li", [r("n-link", {
                        staticClass: "breadcrumb-item text-[#ddd] hover:text-[#f4181c]",
                        attrs: {
                            to: "/home"
                        }
                    }, [t._v("Home")])], 1), t._v(" "), r("li", {
                        staticClass: "breadcrumb-item mx-2 text-[#ddd]"
                    }, [t._v("|")]), t._v(" "), r("li", [r("span", {
                        staticClass: "breadcrumb-item text-[#ddd]"
                    }, [t._v(t._s(t.BreadcrumbEnd))])])])])])
                }), [], !1, null, "64fc2b49", null);
            e.default = component.exports
        },
        352: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = {
                    components: {},
                    data: function() {
                        return {}
                    }
                },
                o = r(28),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("form", {
                        staticClass: "grid sm:gap-x-8 gap-x-4 grid-cols-2",
                        attrs: {
                            id: "contact-form",
                            action: "https://getform.io/f/6af30b8c-e767-4d30-b964-d7e38d35078b",
                            method: "POST"
                        }
                    }, [r("div", {
                        staticClass: "single-fild col-span-2 sm:col-span-1"
                    }, [r("input", {
                        staticClass: "px-6 h-14 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full",
                        attrs: {
                            type: "text",
                            placeholder: "Name"
                        }
                    })]), t._v(" "), r("div", {
                        staticClass: "single-fild col-span-2 sm:col-span-1"
                    }, [r("input", {
                        staticClass: "px-6 h-14 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full",
                        attrs: {
                            type: "email",
                            placeholder: "E-mail"
                        }
                    })]), t._v(" "), r("div", {
                        staticClass: "single-fild col-span-2 sm:col-span-1"
                    }, [r("input", {
                        staticClass: "px-6 h-14 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full",
                        attrs: {
                            type: "text",
                            placeholder: "Phone"
                        }
                    })]), t._v(" "), r("div", {
                        staticClass: "single-fild col-span-2 sm:col-span-1"
                    }, [r("input", {
                        staticClass: "px-6 h-14 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full",
                        attrs: {
                            type: "text",
                            placeholder: "Address"
                        }
                    })]), t._v(" "), r("div", {
                        staticClass: "single-fild col-span-2"
                    }, [r("textarea", {
                        staticClass: "px-6 pt-4 h-36 md:h-40 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full",
                        attrs: {
                            placeholder: "Write from here",
                            spellcheck: "false",
                            "data-gramm": "false"
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "flex justify-center w-full md:mt-10"
                    }, [r("button", {
                        staticClass: "inline-block text-center font-semibold px-6 py-4 rounded bg-[#f4181c] hover:bg-[#cf0408] text-white transition ease-in-out duration-500 hover:duration-500 text-[14px]",
                        attrs: {
                            type: "submit",
                            value: "submit",
                            name: "submit"
                        }
                    }, [t._v("\n                    Send Message\n                ")]), t._v(" "), r("p", {
                        staticClass: "form-messege"
                    })])])])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        357: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(28),
                component = Object(n.a)({}, (function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "contact-map"
                    }, [e("iframe", {
                        staticClass: "lg:h-[671px] md:h-[650px] h-[400px] w-full",
                        attrs: {
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1613802584124!5m2!1sen!2sbd",
                            allowfullscreen: "",
                            loading: "lazy"
                        }
                    })])
                }], !1, null, null, null);
            e.default = component.exports
        },
        358: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(28),
                component = Object(n.a)({}, (function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "container"
                    }, [r("div", {}, [r("ul", {
                        staticClass: "2xl:py-12 2xl:px-[100px] md:py-10 py-8 md:px-[60px] px-[30px] md:absolute mt-10 md:mt-0 md:top-1/2 transform md:-translate-y-1/2 2xl:w-[590px] 2xl:right-[250px] md:w-[400px] lg:right-[100px] md:right-[40px] rounded-[5px] bg-gradient-to-l from-[#000000] to-[#222222]"
                    }, [r("li", {
                        staticClass: "flex items-center mb-[30px] pb-[30px] border-b-1 border-white"
                    }, [r("div", {
                        staticClass: "h-[50px] w-[50px] min-h-[50px] min-w-[50px] leading-[50px] mr-[15px] text-center rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] bg-gradient-to-t from-[#0259ae] to-[#12b4f2]"
                    }, [r("i", {
                        staticClass: "text-white zmdi zmdi-home"
                    })]), t._v(" "), r("div", {}, [r("p", {
                        staticClass: "mt-1 text-[16px] text-white"
                    }, [t._v(" Home #02 Hangla pur "), r("br"), t._v(" Dhaka , Bangladesh ")])])]), t._v(" "), r("li", {
                        staticClass: "flex items-center mb-[30px] pb-[30px] border-b-1 border-white"
                    }, [r("div", {
                        staticClass: "h-[50px] w-[50px] min-h-[50px] min-w-[50px] leading-[50px] mr-[15px] text-center rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] bg-gradient-to-t from-[#0259ae] to-[#12b4f2]"
                    }, [r("i", {
                        staticClass: "text-white zmdi zmdi-phone"
                    })]), t._v(" "), r("div", {
                        staticClass: "flex flex-col"
                    }, [r("a", {
                        staticClass: "mt-1 text-[16px] text-white",
                        attrs: {
                            href: "tel:1234567"
                        }
                    }, [t._v("+022222222")]), t._v(" "), r("a", {
                        staticClass: "mt-1 text-[16px] text-white",
                        attrs: {
                            href: "tel:1234567"
                        }
                    }, [t._v("+01111109999")])])]), t._v(" "), r("li", {
                        staticClass: "flex items-center mb-[30px] pb-[30px] border-b-1 border-white"
                    }, [r("div", {
                        staticClass: "h-[50px] w-[50px] min-h-[50px] min-w-[50px] leading-[50px] mr-[15px] text-center rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] bg-gradient-to-t from-[#0259ae] to-[#12b4f2]"
                    }, [r("i", {
                        staticClass: "text-white zmdi zmdi-email"
                    })]), t._v(" "), r("div", {
                        staticClass: "flex flex-col"
                    }, [r("a", {
                        staticClass: "mt-1 text-[16px] text-white",
                        attrs: {
                            href: "mailto:example@e-mail.com"
                        }
                    }, [t._v("example@e-mail.com")]), t._v(" "), r("a", {
                        staticClass: "mt-1 text-[16px] text-white",
                        attrs: {
                            href: "mailto:example@e-mail.com"
                        }
                    }, [t._v("example@e-mail.com")])])]), t._v(" "), r("li", {
                        staticClass: "flex items-center"
                    }, [r("div", {
                        staticClass: "h-[50px] w-[50px] min-h-[50px] min-w-[50px] leading-[50px] mr-[15px] text-center rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] bg-gradient-to-t from-[#0259ae] to-[#12b4f2]"
                    }, [r("i", {
                        staticClass: "text-white zmdi zmdi-globe-alt"
                    })]), t._v(" "), r("div", {
                        staticClass: "flex items-center"
                    }, [r("a", {
                        staticClass: "mt-1 text-[16px] text-white",
                        attrs: {
                            href: "#/"
                        }
                    }, [t._v("www.streamo.net")])])])])])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        414: function(t, e, r) {
            "use strict";
            r.r(e);
            r(15), r(29), r(30);
            var n = {
                    components: {
                        MainHeader: function() {
                            return r.e(4).then(r.bind(null, 407))
                        },
                        OffcanvasSidebar: function() {
                            return r.e(2).then(r.bind(null, 437))
                        },
                        Breadcrumb: function() {
                            return Promise.resolve().then(r.bind(null, 270))
                        },
                        ContactForm: function() {
                            return Promise.resolve().then(r.bind(null, 352))
                        },
                        ContactMap: function() {
                            return Promise.resolve().then(r.bind(null, 357))
                        },
                        ContactInfo: function() {
                            return Promise.resolve().then(r.bind(null, 358))
                        },
                        FooterTop: function() {
                            return Promise.resolve().then(r.bind(null, 264))
                        },
                        FooterBottom: function() {
                            return Promise.resolve().then(r.bind(null, 265))
                        }
                    },
                    data: function() {
                        return {
                            navOpen: !1
                        }
                    }
                },
                o = r(28),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("MainHeader"), t._v(" "), r("OffcanvasSidebar", {
                        class: {
                            "show-mobile-menu": t.navOpen
                        },
                        on: {
                            togglenav: function(e) {
                                t.navOpen = !t.navOpen
                            }
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "py-[25px] bg-[#1E272D]"
                    }, [r("Breadcrumb", {
                        attrs: {
                            BreadcrumbTitle: "Contact Us",
                            BreadcrumbEnd: "Contact"
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "py-[50px] md:py-[80px] bg-[#000000]"
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("ContactForm")], 1)]), t._v(" "), r("div", {
                        staticClass: "pb-[50px] md:pb-[80px] bg-[#000000] relative"
                    }, [r("ContactMap"), t._v(" "), r("ContactInfo")], 1), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#000000]"
                    }, [r("FooterTop")], 1), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#000000] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                    }, [r("FooterBottom")], 1)], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Breadcrumb: r(270).default,
                ContactForm: r(352).default,
                ContactMap: r(357).default,
                ContactInfo: r(358).default,
                FooterTop: r(264).default,
                FooterBottom: r(265).default
            })
        }
    }
]);