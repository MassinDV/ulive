(window.webpackJsonp = window.webpackJsonp || []).push([
    [71, 46, 47, 48, 53, 59], {
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
                d = (n(262), n(28)),
                component = Object(d.a)(c, (function() {
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
        272: function(t, e, n) {
            var content = n(278);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(41).default)("3efa27d0", content, !0, {
                sourceMap: !1
            })
        },
        273: function(t, e, n) {
            var content = n(284);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(41).default)("39ab350e", content, !0, {
                sourceMap: !1
            })
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
        277: function(t, e, n) {
            "use strict";
            n(272)
        },
        278: function(t, e, n) {
            var r = n(40)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".accordion[data-v-43ea43a8]{margin-left:auto;margin-right:auto;display:block;width:100%;max-width:880px;overflow:hidden;padding:0px}.accordion__item[data-v-43ea43a8]{margin-bottom:10px;padding:0px}.accordion__item[data-v-43ea43a8]:last-child{margin-bottom:0px}.accordion__title[data-v-43ea43a8]{margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:space-between;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:1.25rem;padding-bottom:1.25rem;font-size:18px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@media (min-width: 640px){.accordion__title[data-v-43ea43a8]{font-size:22px}}.accordion__title_active[data-v-43ea43a8]{--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}.accordion__arrow_active[data-v-43ea43a8]{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.accordion__value[data-v-43ea43a8]{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding:30px;--tw-text-opacity:1;color:rgb(204 204 204 / var(--tw-text-opacity))}", ""]), r.locals = {}, t.exports = r
        },
        282: function(t) {
            t.exports = JSON.parse('[{"freePack":true,"pack":"Free Pack","avgPrice":"$0.00","aboutPkg":"Free","listdata":[{"text":"laboris nisi ut pariatur."},{"text":"Secure Service"},{"text":"laboris nisi ut pariatur."},{"text":"70 Cup of coffee"},{"text":"Awesome Support"},{"text":"Offline Download"},{"text":"nam aliquam"}],"btnLink":"/contact","btnText":"Choose A Plan"},{"freePack":false,"avgPrice":"$100","aboutPkg":"Premium","defaultclass":"default","listdata":[{"text":"laboris nisi ut pariatur."},{"text":"Secure Service"},{"text":"laboris nisi ut pariatur."},{"text":"200 Cup of coffee"},{"text":"Awesome Support"},{"text":"Offline Download"},{"text":"nam aliquam"}],"btnLink":"/contact","btnText":"Choose A Plan"},{"freePack":false,"avgPrice":"$200","aboutPkg":"Standard","listdata":[{"text":"laboris nisi ut pariatur."},{"text":"Secure Service"},{"text":"laboris nisi ut pariatur."},{"text":"500 Cup of coffee"},{"text":"Awesome Support"},{"text":"Offline Download"},{"text":"nam aliquam"}],"btnLink":"/contact","btnText":"Choose A Plan"}]')
        },
        283: function(t, e, n) {
            "use strict";
            n(273)
        },
        284: function(t, e, n) {
            var r = n(40)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".pricing-panel{--tw-bg-opacity:1;background-color:rgb(34 34 34 / var(--tw-bg-opacity))}.pricing-panel .action-btn{--tw-bg-opacity:1;background-color:rgb(51 51 51 / var(--tw-bg-opacity))}.pricing-panel .action-btn:hover{--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}.pricing-panel .pricing-heading::before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(51 51 51 / var(--tw-bg-opacity))}.default .pricing-heading::before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}.default .action-btn{--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}.default .action-btn:hover{--tw-bg-opacity:1;background-color:rgb(51 51 51 / var(--tw-bg-opacity))}", ""]), r.locals = {}, t.exports = r
        },
        295: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    data: function() {
                        return {
                            activeIndex: null,
                            items: [{
                                title: "What is streamo?",
                                value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            }, {
                                title: "How expensive is Streamo?",
                                value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            }, {
                                title: "Can I watch with Streamo everywhere?",
                                value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            }, {
                                title: "How easy is cancelling the subscription?",
                                value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            }, {
                                title: "What else can I watch with Streamo?",
                                value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            }, {
                                title: "How good is Streamo for kids?",
                                value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            }]
                        }
                    }
                },
                o = (n(277), n(28)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "accordion"
                    }, t._l(t.items, (function(e, i) {
                        return n("div", {
                            key: "accordion-item-" + i,
                            staticClass: "accordion__item"
                        }, [n("div", {
                            staticClass: "accordion__title",
                            class: {
                                accordion__title_active: t.activeIndex === i
                            },
                            on: {
                                click: function(e) {
                                    t.activeIndex = t.activeIndex === i ? null : i
                                }
                            }
                        }, [n("span", [t._v(t._s(e.title))]), t._v(" "), n("span", {
                            staticClass: "accordion__arrow",
                            class: {
                                accordion__arrow_active: t.activeIndex === i
                            }
                        }, [n("i", {
                            staticClass: "zmdi zmdi-chevron-down"
                        })])]), t._v(" "), n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: i === t.activeIndex,
                                expression: "i === activeIndex"
                            }],
                            staticClass: "accordion__value"
                        }, [t._v("\n\t\t\t" + t._s(e.value) + "\n\t\t")])])
                    })), 0)
                }), [], !1, null, "43ea43a8", null);
            e.default = component.exports
        },
        296: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(282),
                o = {
                    data: function() {
                        return {
                            pricingData: r
                        }
                    }
                },
                l = (n(283), n(28)),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "grid grid-cols-1 sm:grid-cols-12 gap-8"
                    }, t._l(t.pricingData, (function(e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "lg:col-span-4 sm:col-span-6"
                        }, [n("div", {
                            staticClass: "relative w-[300px] sm:w-full mx-auto",
                            class: e.defaultclass
                        }, [n("div", {
                            staticClass: "pricing-panel shadow-[0px_0px_10px_rgba(0,0,0,0.10)] overflow-hidden rounded-[5px] relative z-10"
                        }, [n("div", {
                            staticClass: "pricing-heading pt-[70px] pb-10 relative z-10 text-center before:bg-repeat before:bg-scroll before:rounded-[100%] before:h-[300px] before:absolute before:w-[610px] before:content before:-top-[170px] before:-left-[60px] before:transform before:-rotate-[22deg] before:-z-10 before:transition-all"
                        }, [n("h2", {
                            staticClass: "text-white font-semibold text-[36px] leading-[1]"
                        }, [t._v(t._s(e.avgPrice))]), t._v(" "), n("h4", {
                            staticClass: "text-white font-semibold text-[18px] mt-2"
                        }, [t._v(t._s(e.aboutPkg))])]), t._v(" "), n("div", {
                            staticClass: "pricing-body mt-[15px] text-center"
                        }, [n("ul", t._l(e.listdata, (function(e, r) {
                            return n("li", {
                                key: r,
                                staticClass: "text-[#cccccc] block text-[16px] mb-6 last:mb-0"
                            }, [t._v(t._s(e.text))])
                        })), 0)]), t._v(" "), n("div", {
                            staticClass: "pricing-footer pt-[30px] pb-[40px] text-center"
                        }, [n("n-link", {
                            staticClass: "action-btn inline-block py-3 px-10 text-white rounded-[5px] text-[16px]",
                            attrs: {
                                to: e.btnLink
                            }
                        }, [t._v(t._s(e.btnText))])], 1)])])])
                    })), 0)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        430: function(t, e, n) {
            "use strict";
            n.r(e);
            n(15), n(29), n(30), n(46);
            var r = n(276),
                o = n.n(r),
                l = n(267),
                c = {
                    props: {
                        className: String
                    },
                    components: {
                        Logo: function() {
                            return Promise.resolve().then(n.bind(null, 258))
                        },
                        BtnDefault: function() {
                            return n.e(6).then(n.bind(null, 431))
                        },
                        PricingArea: function() {
                            return Promise.resolve().then(n.bind(null, 296))
                        },
                        SingleProduct: function() {
                            return n.e(3).then(n.bind(null, 457))
                        },
                        FaqArea: function() {
                            return Promise.resolve().then(n.bind(null, 295))
                        },
                        FooterTop: function() {
                            return Promise.resolve().then(n.bind(null, 264))
                        },
                        FooterBottom: function() {
                            return Promise.resolve().then(n.bind(null, 265))
                        },
                        countTo: o.a
                    },
                    data: function() {
                        return {
                            movieData: l,
                            popularMovie: [],
                            commentsVisible: !1,
                            counter: [{
                                startVal: 0,
                                endVal: 500,
                                text: "Total Videos"
                            }, {
                                startVal: 0,
                                endVal: 10,
                                text: "Position"
                            }, {
                                startVal: 0,
                                endVal: 200,
                                text: "Subscribers"
                            }, {
                                startVal: 0,
                                endVal: 156,
                                text: "Awards"
                            }]
                        }
                    },
                    methods: {
                        visibilityChanged: function(t) {
                            this.commentsVisible = t
                        }
                    },
                    mounted: function() {
                        this.popularMovie = this.movieData.filter((function(t) {
                            return 1 == t.popular
                        }))
                    }
                },
                d = n(28),
                component = Object(d.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "flex justify-between flex-row items-center px-[15px] md:px-[30px] xl:px-[50px] 2xl:px-[100px] mx-auto py-[10px] z-999 w-full absolute top-0 left-0 right-0"
                    }, [n("div", {
                        staticClass: "flex items-center"
                    }, [n("Logo", {
                        attrs: {
                            logLink: "/home"
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "flex items-center"
                    }, [n("BtnDefault", {
                        staticClass: "ml-[10px] sm:ml-[15px]",
                        attrs: {
                            btnLink: "/login",
                            btnClass: "py-[13px] px-[30px] bg-[#f4181c] text-white hover:bg-white hover:text-[#333333] text-[18px] font-semibold",
                            btnText: "Sign In"
                        }
                    })], 1)]), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), n("div", {
                        staticClass: "bg-[#000000] py-[50px] md:py-[80px] "
                    }, [n("div", {
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
                            staticClass: "count-wrap flex justify-center items-center"
                        }, [n("countTo", {
                            staticClass: "text-5xl uppercase font-semibold block text-[#f4181c]",
                            class: t.className,
                            attrs: {
                                startVal: e.startVal,
                                endVal: e.endVal,
                                duration: 3e3,
                                autoplay: !0
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "text-[#f4181c] text-[48px] font-semibold"
                        }, [t._v("+")])], 1), t._v(" "), n("p", {
                            staticClass: "capitalize tex-white text-[25px] text-white",
                            class: t.className
                        }, [t._v(t._s(e.text))])])
                    })), 0) : t._e()])])]), t._v(" "), t._m(2), t._v(" "), n("div", {
                        staticClass: "py-[50px] md:py-[80px] bg-[#000000]"
                    }, [n("PricingArea")], 1), t._v(" "), t._m(3), t._v(" "), n("div", {
                        staticClass: "py-[50px] md:py-[80px] bg-[#000000]"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("h2", {
                        staticClass: "text-center text-white text-[36px] md:text-[40px] lg:text-[50px] font-semibold mb-[50px] leading-[1.5]"
                    }, [t._v("Popular Movies And Shows")]), t._v(" "), n("div", {
                        staticClass: "awardedmovie-area relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    }, t._l(t.popularMovie.slice(0, 4), (function(t, e) {
                        return n("div", {
                            key: e
                        }, [n("SingleProduct", {
                            attrs: {
                                product: t,
                                PageLink: "/movie",
                                btnLink: "/movie"
                            }
                        })], 1)
                    })), 0)])]), t._v(" "), n("div", {
                        staticClass: "py-[50px] md:py-[80px] bg-[#12222d]"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("h2", {
                        staticClass: "text-center text-white text-[36px] md:text-[40px] lg:text-[50px] font-semibold mb-[50px] leading-[1.5]"
                    }, [t._v("Frequently Asked Questions")]), t._v(" "), n("FaqArea")], 1)]), t._v(" "), n("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#000000]"
                    }, [n("FooterTop")], 1), t._v(" "), n("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#000000] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                    }, [n("FooterBottom")], 1)])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "hero-landing h-screen relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#000000] before:opacity-60 flex items-center justify-center",
                        staticStyle: {
                            "background-image": "url(/images/bg/bg-4.jpg)"
                        }
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "landing-hero-content text-center relative max-w-3xl mx-auto"
                    }, [n("h1", {
                        staticClass: "title text-white font-semibold text-[34px] md:text-[50px] sm:text-[40px] lg:text-[60px] leading-[1.13] mx-auto"
                    }, [t._v("Endless movies, TV shows, and more.")]), t._v(" "), n("h4", {
                        staticClass: "sub-title text-white text-[20px] md:text-[24px] leading-[1.13] mt-[27px] mb-[28px] font-normal"
                    }, [t._v("Enjoy anywhere. Unsubscribe anytime.")]), t._v(" "), n("p", {
                        staticClass: "text-white font-[17px] mb-[20px]"
                    }, [t._v("Ready to watch? Enter your email to create or restart your membership.")]), t._v(" "), n("div", {
                        staticClass: "create-membership-wrap mt-8 mx-auto relative"
                    }, [n("input", {
                        staticClass: "w-full bg-white pl-4 pr-[175px] py-5 relative rounded-[4px] text-black placeholder:text-black focus:outline-none focus:shadow-outline",
                        attrs: {
                            placeholder: "Email Address"
                        }
                    }), t._v(" "), n("button", {
                        staticClass: "landing-btn-style h-16 leading-[64px] px-8 text-center bg-[#f4181c] hover:bg-[#cf0408] transition-all text-white absolute rounded-[0_4px_4px_0] right-0",
                        attrs: {
                            type: "button"
                        }
                    }, [t._v("\n                        Get Started\n                    ")])])])])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "movie-site-info-wrap bg-black-2 py-[50px] md:py-[80px]  bg-[#12222d]"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "grid gap-8 items-center grid-cols-1 sm:grid-cols-12"
                    }, [n("div", {
                        staticClass: "sm:col-span-7 order-2 sm:order-1"
                    }, [n("div", {
                        staticClass: "movie-site-info-content info-width-1 mb-8 lg:mb-0"
                    }, [n("h2", {
                        staticClass: "title text-[30px] lg:text-[43px] leading-[1.5] mb-[23px] text-white font-semibold "
                    }, [t._v("Enjoy Watching Them on TV.")]), t._v(" "), n("h3", {
                        staticClass: "sub-title text-[20px] lg:text-[23px] leading-[1.5] text-white w-[80%]"
                    }, [t._v("Whether it’s Smart TV, Xbox, Apply TV, Watch Your Favorite Program with Great Pleasure.")])])]), t._v(" "), n("div", {
                        staticClass: "sm:col-span-5 text-center order-1 sm:order-2"
                    }, [n("div", {
                        staticClass: "movie-site-img"
                    }, [n("img", {
                        attrs: {
                            src: "/images/landing/3.png",
                            alt: ""
                        }
                    })])])])])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "movie-site-info-wrap bg-black-2 py-[50px] md:py-[80px]  bg-[#12222d]"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "grid gap-8 items-center grid-cols-1 sm:grid-cols-12"
                    }, [n("div", {
                        staticClass: "sm:col-span-7 order-2 sm:order-2"
                    }, [n("div", {
                        staticClass: "movie-site-info-content info-width-1 mb-8 lg:mb-0"
                    }, [n("h2", {
                        staticClass: "title text-[30px] lg:text-[43px] leading-[1.5] mb-[23px] text-white font-semibold "
                    }, [t._v("Download Favorites, Watch them Offline!.")]), t._v(" "), n("h3", {
                        staticClass: "sub-title text-[20px] lg:text-[23px] leading-[1.5] text-white w-[80%]"
                    }, [t._v("It’s super easy to save your favorite shows!")])])]), t._v(" "), n("div", {
                        staticClass: "sm:col-span-5 text-center order-1 sm:order-1"
                    }, [n("div", {
                        staticClass: "movie-site-img"
                    }, [n("img", {
                        attrs: {
                            src: "/images/landing/4.png",
                            alt: ""
                        }
                    })])])])])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "movie-site-info-wrap bg-black-2 py-[50px] md:py-[80px]  bg-[#12222d]"
                    }, [n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "grid gap-8 items-center grid-cols-1 sm:grid-cols-12"
                    }, [n("div", {
                        staticClass: "sm:col-span-7 order-2 sm:order-1"
                    }, [n("div", {
                        staticClass: "movie-site-info-content info-width-1 mb-8 lg:mb-0"
                    }, [n("h2", {
                        staticClass: "title text-[30px] lg:text-[43px] leading-[1.5] mb-[23px] text-white font-semibold "
                    }, [t._v("Watch Anywhere You Want.")]), t._v(" "), n("h3", {
                        staticClass: "sub-title text-[20px] lg:text-[23px] leading-[1.5] text-white w-[80%]"
                    }, [t._v("Watch an endless number of shows, on your phone, tablet, laptop, and TV.")])])]), t._v(" "), n("div", {
                        staticClass: "sm:col-span-5 text-center order-1 sm:order-2"
                    }, [n("div", {
                        staticClass: "movie-site-img"
                    }, [n("img", {
                        attrs: {
                            src: "/images/landing/2.png",
                            alt: ""
                        }
                    })])])])])])
                }], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Logo: n(258).default,
                PricingArea: n(296).default,
                FaqArea: n(295).default,
                FooterTop: n(264).default,
                FooterBottom: n(265).default
            })
        }
    }
]);