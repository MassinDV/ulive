(window.webpackJsonp = window.webpackJsonp || []).push([
    [83, 47, 48, 53], {
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
        423: function(t, e, r) {
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
                        SeriesBannerSlider: function() {
                            return Promise.all([r.e(1), r.e(19)]).then(r.bind(null, 447))
                        },
                        HorrorSeries: function() {
                            return Promise.all([r.e(1), r.e(9)]).then(r.bind(null, 459))
                        },
                        PopularSeries: function() {
                            return Promise.all([r.e(1), r.e(36)]).then(r.bind(null, 460))
                        },
                        SeriesBannerTwo: function() {
                            return Promise.all([r.e(1), r.e(21)]).then(r.bind(null, 449))
                        },
                        TrendingSeries: function() {
                            return Promise.all([r.e(1), r.e(37)]).then(r.bind(null, 461))
                        },
                        SeriesBannerThree: function() {
                            return Promise.all([r.e(1), r.e(20)]).then(r.bind(null, 448))
                        },
                        ComedySeries: function() {
                            return Promise.all([r.e(1), r.e(35)]).then(r.bind(null, 458))
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
                    }), t._v(" "), r("SeriesBannerSlider"), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]"
                    }, [r("HorrorSeries")], 1), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"
                    }, [r("PopularSeries")], 1), t._v(" "), r("SeriesBannerTwo", {
                        attrs: {
                            PageLink: "series"
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"
                    }, [r("TrendingSeries")], 1), t._v(" "), r("SeriesBannerThree", {
                        attrs: {
                            PageLink: "series"
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"
                    }, [r("ComedySeries")], 1), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#12222d]"
                    }, [r("FooterTop")], 1), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#12222d] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                    }, [r("FooterBottom")], 1)], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                FooterTop: r(264).default,
                FooterBottom: r(265).default
            })
        }
    }
]);