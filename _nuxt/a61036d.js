(window.webpackJsonp = window.webpackJsonp || []).push([
    [66, 40, 41, 45, 47, 48, 53, 64, 65], {
        257: function(t, e, n) {
            var content = n(263);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(41).default)("4c788c2d", content, !0, {
                sourceMap: !1
            })
        },
        258: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: {
                        logLink: String
                    }
                },
                o = n(28),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("n-link", {
                        attrs: {
                            to: t.logLink
                        }
                    }, [n("img", {
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
        262: function(t, e, n) {
            "use strict";
            n(257)
        },
        263: function(t, e, n) {
            var r = n(40)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".facebook[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(59 89 152 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(59 89 152 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.facebook[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(0 179 236 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 179 236 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(10 102 194 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(10 102 194 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(228 64 95 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(228 64 95 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}", ""]), r.locals = {}, t.exports = r
        },
        264: function(t, e, n) {
            "use strict";
            n.r(e);
            n(15), n(29), n(30);
            var r = n(259),
                o = n(260),
                l = n(261),
                c = {
                    components: {
                        Logo: function() {
                            return Promise.resolve().then(n.bind(null, 258))
                        },
                        BrandLogo: function() {
                            return n.e(22).then(n.bind(null, 433))
                        }
                    },
                    data: function() {
                        return {
                            socialData: r,
                            footerMenuData: o,
                            footerSubmenuData: l
                        }
                    }
                },
                m = (n(262), n(28)),
                component = Object(m.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex flex-wrap md:flex-row flex-col"
                    }, [n("div", {
                        staticClass: "flex flex-col w-full sm:w-3/4 md:w-1/3 lg:w-1/4 mb-8 md:mb-0"
                    }, [n("Logo", {
                        attrs: {
                            logLink: "/home"
                        }
                    }), t._v(" "), n("p", {
                        staticClass: "text-sm text-white w-full sm:w-[75%] my-5"
                    }, [t._v("Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip ex ea comm.")]), t._v(" "), n("ul", {
                        staticClass: "fotter-socail"
                    }, t._l(t.socialData, (function(link, t) {
                        return n("li", {
                            key: t,
                            staticClass: "inline-block"
                        }, [n("a", {
                            staticClass: "sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center rounded-full sm:mr-3 mr-2",
                            class: link.mediaName,
                            attrs: {
                                href: link.url
                            }
                        }, [n("i", {
                            class: link.iconName
                        })])])
                    })), 0)], 1), t._v(" "), n("div", {
                        staticClass: "lg:w-3/4 md:w-2/3 w-full"
                    }, [n("div", {
                        staticClass: "footer-top-right 2xl:ml-[50px] lg:ml-[20px] ml-0"
                    }, [n("div", {
                        staticClass: "footer-quicklink"
                    }, [n("ul", {
                        staticClass: "flex items-center flex-wrap"
                    }, t._l(t.footerMenuData, (function(link, e) {
                        return n("li", {
                            key: e,
                            staticClass: "md:mr-10 mr-5 last:mr-0"
                        }, [n("n-link", {
                            staticClass: "text-white text-[16px] md:text-[18px] hover:text-[#f4181c]",
                            attrs: {
                                to: link.mainlink
                            }
                        }, [t._v("\n                            " + t._s(link.name) + "\n                        ")])], 1)
                    })), 0)]), t._v(" "), n("BrandLogo"), t._v(" "), n("div", {
                        staticClass: "footer-quicklink-2"
                    }, [n("ul", {
                        staticClass: "flex items-center flex-wrap"
                    }, t._l(t.footerSubmenuData, (function(link, e) {
                        return n("li", {
                            key: e,
                            staticClass: "mr-10 last:mr-0 relative last:before:hidden before:absolute before:-right-5 before:top-1/2 before:w-[1px] before:h-[15px] before:content-[''] before:bg-[#444444] before:-translate-y-1/2"
                        }, [n("n-link", {
                            staticClass: "text-white text-[14px] hover:text-[#f4181c]",
                            attrs: {
                                to: link.mainlink
                            }
                        }, [t._v("\n                            " + t._s(link.name) + "\n                        ")])], 1)
                    })), 0)])], 1)])])
                }), [], !1, null, "e48bc206", null);
            e.default = component.exports;
            installComponents(component, {
                Logo: n(258).default
            })
        },
        265: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(28),
                component = Object(r.a)({}, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex items-center lg:justify-between lg:flex-row flex-col justify-center"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "login-alert flex items-center md:flex-row flex-col lg:order-2 order-1"
                    }, [n("p", {
                        staticClass: "text-white mb-3 md:mb-0 text-[14px] mr-[15px]"
                    }, [t._v("Already have an Account? "), n("n-link", {
                        staticClass: "text-white uppercase font-semibold hover:text-[#f4181c]",
                        attrs: {
                            to: "/login"
                        }
                    }, [t._v("LOGIN")])], 1), t._v(" "), n("div", {
                        staticClass: "flex items-center justify-center"
                    }, [n("n-link", {
                        staticClass: "text-[16px] inline-block rounded-[3px] transition-all duration-300 py-[12px] px-[25px] bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]",
                        attrs: {
                            to: "/pricing"
                        }
                    }, [t._v("Become a Member")])], 1)])])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "copyright lg:mt-0 mt-5 lg:order-1 order-2"
                    }, [n("p", {
                        staticClass: "copyright-text text-white text-[14px] text-center"
                    }, [t._v("\n            Copyright ©2022 All rights reserved\n        ")])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        266: function(t, e, n) {
            var content = n(269);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(41).default)("73aac893", content, !0, {
                sourceMap: !1
            })
        },
        268: function(t, e, n) {
            "use strict";
            n(266)
        },
        269: function(t, e, n) {
            var r = n(40)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".breadcrumb-item[data-v-64fc2b49]{display:inline-block;font-size:16px;text-transform:capitalize}", ""]), r.locals = {}, t.exports = r
        },
        270: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: {
                        BreadcrumbTitle: String,
                        BreadcrumbEnd: String
                    },
                    components: {}
                },
                o = (n(268), n(28)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "flex items-center justify-center flex-col sm:flex-row"
                    }, [n("h1", {
                        staticClass: "font-semibold text-white text-[25px] mr-5"
                    }, [t._v(t._s(t.BreadcrumbTitle))]), t._v(" "), n("ul", {
                        staticClass: "flex justify-center items-center mt-2 flex-row"
                    }, [n("li", [n("n-link", {
                        staticClass: "breadcrumb-item text-[#ddd] hover:text-[#f4181c]",
                        attrs: {
                            to: "/home"
                        }
                    }, [t._v("Home")])], 1), t._v(" "), n("li", {
                        staticClass: "breadcrumb-item mx-2 text-[#ddd]"
                    }, [t._v("|")]), t._v(" "), n("li", [n("span", {
                        staticClass: "breadcrumb-item text-[#ddd]"
                    }, [t._v(t._s(t.BreadcrumbEnd))])])])])])
                }), [], !1, null, "64fc2b49", null);
            e.default = component.exports
        },
        276: function(t, e, n) {
            t.exports = function(t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var a = i[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(a.exports, a, a.exports, e), a.l = !0, a.exports
                }
                var i = {};
                return e.m = t, e.c = i, e.i = function(t) {
                    return t
                }, e.d = function(t, i, n) {
                    e.o(t, i) || Object.defineProperty(t, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, e.n = function(t) {
                    var i = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return e.d(i, "a", i), i
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "/dist/", e(e.s = 2)
            }([function(t, e, i) {
                var n = i(4)(i(1), i(5), null, null);
                t.exports = n.exports
            }, function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = i(3);
                e.default = {
                    props: {
                        startVal: {
                            type: Number,
                            required: !1,
                            default: 0
                        },
                        endVal: {
                            type: Number,
                            required: !1,
                            default: 2017
                        },
                        duration: {
                            type: Number,
                            required: !1,
                            default: 3e3
                        },
                        autoplay: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        },
                        decimals: {
                            type: Number,
                            required: !1,
                            default: 0,
                            validator: function(t) {
                                return t >= 0
                            }
                        },
                        decimal: {
                            type: String,
                            required: !1,
                            default: "."
                        },
                        separator: {
                            type: String,
                            required: !1,
                            default: ","
                        },
                        prefix: {
                            type: String,
                            required: !1,
                            default: ""
                        },
                        suffix: {
                            type: String,
                            required: !1,
                            default: ""
                        },
                        useEasing: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        },
                        easingFn: {
                            type: Function,
                            default: function(t, e, i, n) {
                                return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
                            }
                        }
                    },
                    data: function() {
                        return {
                            localStartVal: this.startVal,
                            displayValue: this.formatNumber(this.startVal),
                            printVal: null,
                            paused: !1,
                            localDuration: this.duration,
                            startTime: null,
                            timestamp: null,
                            remaining: null,
                            rAF: null
                        }
                    },
                    computed: {
                        countDown: function() {
                            return this.startVal > this.endVal
                        }
                    },
                    watch: {
                        startVal: function() {
                            this.autoplay && this.start()
                        },
                        endVal: function() {
                            this.autoplay && this.start()
                        }
                    },
                    mounted: function() {
                        this.autoplay && this.start(), this.$emit("mountedCallback")
                    },
                    methods: {
                        start: function() {
                            this.localStartVal = this.startVal, this.startTime = null, this.localDuration = this.duration, this.paused = !1, this.rAF = (0, n.requestAnimationFrame)(this.count)
                        },
                        pauseResume: function() {
                            this.paused ? (this.resume(), this.paused = !1) : (this.pause(), this.paused = !0)
                        },
                        pause: function() {
                            (0, n.cancelAnimationFrame)(this.rAF)
                        },
                        resume: function() {
                            this.startTime = null, this.localDuration = +this.remaining, this.localStartVal = +this.printVal, (0, n.requestAnimationFrame)(this.count)
                        },
                        reset: function() {
                            this.startTime = null, (0, n.cancelAnimationFrame)(this.rAF), this.displayValue = this.formatNumber(this.startVal)
                        },
                        count: function(t) {
                            this.startTime || (this.startTime = t), this.timestamp = t;
                            var e = t - this.startTime;
                            this.remaining = this.localDuration - e, this.useEasing ? this.countDown ? this.printVal = this.localStartVal - this.easingFn(e, 0, this.localStartVal - this.endVal, this.localDuration) : this.printVal = this.easingFn(e, this.localStartVal, this.endVal - this.localStartVal, this.localDuration) : this.countDown ? this.printVal = this.localStartVal - (this.localStartVal - this.endVal) * (e / this.localDuration) : this.printVal = this.localStartVal + (this.localStartVal - this.startVal) * (e / this.localDuration), this.countDown ? this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal : this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal, this.displayValue = this.formatNumber(this.printVal), e < this.localDuration ? this.rAF = (0, n.requestAnimationFrame)(this.count) : this.$emit("callback")
                        },
                        isNumber: function(t) {
                            return !isNaN(parseFloat(t))
                        },
                        formatNumber: function(t) {
                            t = t.toFixed(this.decimals);
                            var e = (t += "").split("."),
                                i = e[0],
                                n = e.length > 1 ? this.decimal + e[1] : "",
                                a = /(\d+)(\d{3})/;
                            if (this.separator && !this.isNumber(this.separator))
                                for (; a.test(i);) i = i.replace(a, "$1" + this.separator + "$2");
                            return this.prefix + i + n + this.suffix
                        }
                    },
                    destroyed: function() {
                        (0, n.cancelAnimationFrame)(this.rAF)
                    }
                }
            }, function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var a = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(i(0));
                e.default = a.default, "undefined" != typeof window && window.Vue && window.Vue.component("count-to", a.default)
            }, function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = 0,
                    a = "webkit moz ms o".split(" "),
                    r = void 0,
                    o = void 0;
                if ("undefined" == typeof window) e.requestAnimationFrame = r = function() {}, e.cancelAnimationFrame = o = function() {};
                else {
                    e.requestAnimationFrame = r = window.requestAnimationFrame, e.cancelAnimationFrame = o = window.cancelAnimationFrame;
                    for (var s = void 0, u = 0; u < a.length && (!r || !o); u++) s = a[u], e.requestAnimationFrame = r = r || window[s + "RequestAnimationFrame"], e.cancelAnimationFrame = o = o || window[s + "CancelAnimationFrame"] || window[s + "CancelRequestAnimationFrame"];
                    r && o || (e.requestAnimationFrame = r = function(t) {
                        var e = (new Date).getTime(),
                            i = Math.max(0, 16 - (e - n)),
                            a = window.setTimeout((function() {
                                t(e + i)
                            }), i);
                        return n = e + i, a
                    }, e.cancelAnimationFrame = o = function(t) {
                        window.clearTimeout(t)
                    })
                }
                e.requestAnimationFrame = r, e.cancelAnimationFrame = o
            }, function(t, e) {
                t.exports = function(t, e, i, n) {
                    var a, r = t = t || {},
                        o = typeof t.default;
                    "object" !== o && "function" !== o || (a = t, r = t.default);
                    var s = "function" == typeof r ? r.options : r;
                    if (e && (s.render = e.render, s.staticRenderFns = e.staticRenderFns), i && (s._scopeId = i), n) {
                        var u = Object.create(s.computed || null);
                        Object.keys(n).forEach((function(t) {
                            var e = n[t];
                            u[t] = function() {
                                return e
                            }
                        })), s.computed = u
                    }
                    return {
                        esModule: a,
                        exports: r,
                        options: s
                    }
                }
            }, function(t, e) {
                t.exports = {
                    render: function() {
                        var t = this,
                            e = t.$createElement;
                        return (t._self._c || e)("span", [t._v("\n  " + t._s(t.displayValue) + "\n")])
                    },
                    staticRenderFns: []
                }
            }])
        },
        299: function(t) {
            t.exports = JSON.parse('[{"title":"Why choose us","text":"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis","textTwo":"Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis","imgSrc":"/images/about/01.jpg","listsData":[{"title":"Our Mission","textOne":"Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sununt .","numbers":[{"name":"Mod tempor incididunt ut laqua."},{"name":"Mod tempor incididunt ut laqua."},{"name":"Mod tempor incididunt ut laqua."}]},{"title":"Our Objective","textOne":"Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sununt .","textTwo":"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"},{"title":"Our Achievement","textOne":"Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sununt .","textTwo":"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"}]}]')
        },
        302: function(t) {
            t.exports = JSON.parse('[{"imgSrc":"/images/team/team-01.png","name":"Reza Karim","Subtitle":"Programer","socialData":[{"url":"https://www.facebook.com/","className":"zmdi zmdi-facebook"},{"url":"https://twitter.com/","className":"zmdi zmdi-twitter"},{"url":"https://www.linkedin.com/","className":"zmdi zmdi-linkedin"},{"url":"https://www.instagram.com/","className":"zmdi zmdi-instagram"}]},{"imgSrc":"/images/team/team-02.png","name":"Shan Morbel","Subtitle":"Designer","socialData":[{"url":"https://www.facebook.com/","className":"zmdi zmdi-facebook"},{"url":"https://twitter.com/","className":"zmdi zmdi-twitter"},{"url":"https://www.linkedin.com/","className":"zmdi zmdi-linkedin"},{"url":"https://www.instagram.com/","className":"zmdi zmdi-instagram"}]},{"imgSrc":"/images/team/team-03.png","name":"Marl Joni","Subtitle":"Video Editor","socialData":[{"url":"https://www.facebook.com/","className":"zmdi zmdi-facebook"},{"url":"https://twitter.com/","className":"zmdi zmdi-twitter"},{"url":"https://www.linkedin.com/","className":"zmdi zmdi-linkedin"},{"url":"https://www.instagram.com/","className":"zmdi zmdi-instagram"}]},{"imgSrc":"/images/team/team-04.png","name":"Jack Marland","Subtitle":"Writter","socialData":[{"url":"https://www.facebook.com/","className":"zmdi zmdi-facebook"},{"url":"https://twitter.com/","className":"zmdi zmdi-twitter"},{"url":"https://www.linkedin.com/","className":"zmdi zmdi-linkedin"},{"url":"https://www.instagram.com/","className":"zmdi zmdi-instagram"}]}]')
        },
        348: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(299),
                o = {
                    props: {
                        TextColor: String
                    },
                    data: function() {
                        return {
                            chooseData: r
                        }
                    }
                },
                l = n(28),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "container"
                    }, t._l(t.chooseData, (function(e, r) {
                        return n("div", {
                            key: r
                        }, [n("div", {
                            staticClass: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                        }, [n("div", {
                            staticClass: "order-2 md:order-1 md:mt-0 mt-5"
                        }, [n("div", {
                            staticClass: "about-us-title"
                        }, [n("h2", {
                            staticClass: "text-3xl md:text-4xl mb-3",
                            class: t.TextColor
                        }, [t._v(t._s(e.title))]), t._v(" "), n("p", {
                            class: t.TextColor
                        }, [t._v(t._s(e.text))])]), t._v(" "), n("p", {
                            staticClass: "text-[14px] leading-[2] mt-8",
                            class: t.TextColor
                        }, [t._v(t._s(e.textTwo))])]), t._v(" "), n("div", {
                            staticClass: "order-1 md:order-2"
                        }, [n("img", {
                            attrs: {
                                src: e.imgSrc,
                                alt: "About"
                            }
                        })])]), t._v(" "), n("div", {
                            staticClass: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:mt-[100px] md:mt-20 mt-[60px]"
                        }, t._l(e.listsData, (function(link, i) {
                            return n("div", {
                                key: i
                            }, [n("h3", {
                                staticClass: "text-[18px] font-semibold mb-5 md:mb-[30px]",
                                class: t.TextColor
                            }, [t._v(t._s(link.title))]), t._v(" "), n("p", {
                                staticClass: "text-[14px] leading-[2]",
                                class: t.TextColor
                            }, [t._v(t._s(link.textOne))]), t._v(" "), n("p", {
                                staticClass: "text-[14px] leading-[2]",
                                class: t.TextColor
                            }, [t._v(t._s(link.textTwo))]), t._v(" "), n("ul", t._l(link.numbers, (function(e, i) {
                                return n("li", {
                                    key: i,
                                    staticClass: "mb-[15px] last:mb-0"
                                }, [n("i", {
                                    staticClass: "zmdi zmdi-check mr-5",
                                    class: t.TextColor
                                }), t._v(" "), n("span", {
                                    class: t.TextColor
                                }, [t._v(t._s(e.name))])])
                            })), 0)])
                        })), 0)])
                    })), 0)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        349: function(t, e, n) {
            "use strict";
            n.r(e);
            n(15), n(29), n(30);
            var r = n(300),
                o = (n(301), {
                    components: {
                        SectionTitleTwo: function() {
                            return n.e(10).then(n.bind(null, 463))
                        },
                        CoolLightBox: r.a
                    },
                    data: function() {
                        return {
                            items: [{
                                imgSrc: "/images/other/mokup-06.png",
                                src: "https://afterglowplayer.com/sandbox/v1/afterglow_local_hd.mp4"
                            }],
                            index: null
                        }
                    }
                }),
                l = n(28),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "container"
                    }, [n("SectionTitleTwo", {
                        attrs: {
                            titleClass: "text-white",
                            title: "Why Choose Us",
                            textClass: "text-white",
                            text: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis"
                        }
                    }), t._v(" "), n("CoolLightBox", {
                        attrs: {
                            items: t.items,
                            index: t.index
                        },
                        on: {
                            close: function(e) {
                                t.index = null
                            }
                        }
                    }), t._v(" "), t._l(t.items, (function(e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "text-center relative",
                            on: {
                                click: function(e) {
                                    t.index = r
                                }
                            }
                        }, [n("img", {
                            attrs: {
                                src: e.imgSrc,
                                alt: "Image"
                            }
                        }), t._v(" "), t._m(0, !0)])
                    }))], 2)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "absolute left-[47%] top-[47%] bg-auto text-white h-[80px] w-[80px] text-[30px] leading-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#0259ae] to-[#12b4f2] cursor-pointer"
                    }, [e("i", {
                        staticClass: "zmdi zmdi-play"
                    })])
                }], !1, null, null, null);
            e.default = component.exports
        },
        350: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(276),
                o = {
                    props: {
                        className: String
                    },
                    components: {
                        countTo: n.n(r).a
                    },
                    data: function() {
                        return {
                            commentsVisible: !1,
                            counter: [{
                                imgCount: "/images/icon/cout-01.png",
                                startVal: 0,
                                endVal: 240,
                                text: "Satisfied Customer"
                            }, {
                                imgCount: "/images/icon/cout-02.png",
                                startVal: 0,
                                endVal: 546,
                                text: "Project Completed"
                            }, {
                                imgCount: "/images/icon/cout-03.png",
                                startVal: 0,
                                endVal: 350,
                                text: "Cup of coffee"
                            }, {
                                imgCount: "/images/icon/cout-04.png",
                                startVal: 0,
                                endVal: 156,
                                text: "Award Winning"
                            }]
                        }
                    },
                    methods: {
                        visibilityChanged: function(t) {
                            this.commentsVisible = t
                        }
                    }
                },
                l = n(28),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        directives: [{
                            name: "observe-visibility",
                            rawName: "v-observe-visibility",
                            value: {
                                callback: t.visibilityChanged,
                                once: !0
                            },
                            expression: "{callback: visibilityChanged, once: true}"
                        }]
                    }, [t.commentsVisible ? n("div", {
                        staticClass: "grid md:grid-cols-4 grid-cols-2 gap-9"
                    }, t._l(t.counter, (function(e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "text-center"
                        }, [n("div", {
                            staticClass: "mb-5"
                        }, [n("img", {
                            attrs: {
                                src: e.imgCount,
                                alt: "Count"
                            }
                        })]), t._v(" "), n("countTo", {
                            staticClass: "text-5xl uppercase font-semibold block",
                            class: t.className,
                            attrs: {
                                startVal: e.startVal,
                                endVal: e.endVal,
                                duration: 3e3,
                                autoplay: !0
                            }
                        }), t._v(" "), n("p", {
                            staticClass: "text-[16px] capitalize",
                            class: t.className
                        }, [t._v(t._s(e.text))])], 1)
                    })), 0) : t._e()])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        351: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(302),
                o = {
                    props: {
                        textColor: String
                    },
                    data: function() {
                        return {
                            teamData: r
                        }
                    }
                },
                l = n(28),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    }, t._l(t.teamData, (function(e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "text-center"
                        }, [n("div", {
                            staticClass: "text-center group"
                        }, [n("div", {
                            staticClass: "relative group-hover:bg-[#ffda84] transition-all pt-[10px]"
                        }, [n("img", {
                            attrs: {
                                src: e.imgSrc,
                                alt: "Team"
                            }
                        }), t._v(" "), n("ul", {
                            staticClass: "absolute -bottom-5 left-1/2 transition-all duration-500 transform -translate-x-1/2 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                        }, t._l(e.socialData, (function(t, e) {
                            return n("li", {
                                key: e,
                                staticClass: "mx-[4px]"
                            }, [n("a", {
                                staticClass: "block bg-[#ffc61b] text-white h-[40px] w-[40px] leading-[40px] text-center rounded-full group-hover:animate-roll",
                                attrs: {
                                    href: t.url
                                }
                            }, [n("i", {
                                class: t.className
                            })])])
                        })), 0)]), t._v(" "), n("div", {
                            staticClass: "mt-6"
                        }, [n("h4", {
                            staticClass: "text-[18px] font-semibold",
                            class: t.textColor
                        }, [t._v(t._s(e.name))]), t._v(" "), n("span", {
                            staticClass: "text-[16px] font-normal block mt-1",
                            class: t.textColor
                        }, [t._v(t._s(e.Subtitle))])])])])
                    })), 0)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        412: function(t, e, n) {
            "use strict";
            n.r(e);
            n(15), n(29), n(30);
            var r = {
                    components: {
                        MainHeader: function() {
                            return n.e(4).then(n.bind(null, 407))
                        },
                        OffcanvasSidebar: function() {
                            return n.e(2).then(n.bind(null, 437))
                        },
                        Breadcrumb: function() {
                            return Promise.resolve().then(n.bind(null, 270))
                        },
                        ChooseUs: function() {
                            return Promise.resolve().then(n.bind(null, 348))
                        },
                        CounterUp: function() {
                            return Promise.resolve().then(n.bind(null, 350))
                        },
                        SingleTeam: function() {
                            return Promise.resolve().then(n.bind(null, 351))
                        },
                        SectionTitleTwo: function() {
                            return n.e(10).then(n.bind(null, 463))
                        },
                        VideoWorks: function() {
                            return Promise.resolve().then(n.bind(null, 349))
                        },
                        FooterTop: function() {
                            return Promise.resolve().then(n.bind(null, 264))
                        },
                        FooterBottom: function() {
                            return Promise.resolve().then(n.bind(null, 265))
                        }
                    },
                    data: function() {
                        return {
                            navOpen: !1
                        }
                    }
                },
                o = n(28),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("MainHeader"), t._v(" "), n("OffcanvasSidebar", {
                        class: {
                            "show-mobile-menu": t.navOpen
                        },
                        on: {
                            togglenav: function(e) {
                                t.navOpen = !t.navOpen
                            }
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "py-[25px] bg-[#12222d]"
                    }, [n("Breadcrumb", {
                        attrs: {
                            BreadcrumbTitle: "About Us",
                            BreadcrumbEnd: "About Us"
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "py-[50px] xl:py-[150px] lg:py-[120px] md:py-[80px] bg-[#000000]"
                    }, [n("ChooseUs", {
                        attrs: {
                            TextColor: "text-[#ffffff]"
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "py-[50px] xl:py-[150px] lg:py-[120px] md:py-[80px] bg-[#12222d]"
                    }, [n("VideoWorks")], 1), t._v(" "), n("div", {
                        staticClass: "py-[50px] xl:py-[150px] lg:py-[120px] md:py-[80px] bg-[#000000]"
                    }, [n("CounterUp", {
                        attrs: {
                            className: "text-white"
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "py-[50px] xl:py-[150px] lg:py-[120px] md:py-[80px] bg-[#12222d]"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("SectionTitleTwo", {
                        attrs: {
                            titleClass: "text-white",
                            title: "Best Team",
                            textClass: "text-white",
                            text: "Adminim veniam, quis nostrud exercitation ullamco laboris nisi ut pariatur. Excepteur t labore et dolore magnam aliquam quaerat"
                        }
                    }), t._v(" "), n("SingleTeam", {
                        attrs: {
                            textColor: "text-white"
                        }
                    })], 1)]), t._v(" "), n("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#000000]"
                    }, [n("FooterTop")], 1), t._v(" "), n("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#000000] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                    }, [n("FooterBottom")], 1)], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Breadcrumb: n(270).default,
                ChooseUs: n(348).default,
                VideoWorks: n(349).default,
                CounterUp: n(350).default,
                SingleTeam: n(351).default,
                FooterTop: n(264).default,
                FooterBottom: n(265).default
            })
        }
    }
]);