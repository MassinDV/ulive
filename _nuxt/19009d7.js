/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [86], {
        0: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return w
            })), n.d(t, "l", (function() {
                return x
            })), n.d(t, "n", (function() {
                return k
            })), n.d(t, "m", (function() {
                return T
            })), n.d(t, "f", (function() {
                return S
            })), n.d(t, "b", (function() {
                return _
            })), n.d(t, "s", (function() {
                return C
            })), n.d(t, "h", (function() {
                return E
            })), n.d(t, "i", (function() {
                return P
            })), n.d(t, "e", (function() {
                return $
            })), n.d(t, "r", (function() {
                return O
            })), n.d(t, "k", (function() {
                return M
            })), n.d(t, "t", (function() {
                return I
            })), n.d(t, "o", (function() {
                return j
            })), n.d(t, "q", (function() {
                return z
            })), n.d(t, "g", (function() {
                return N
            })), n.d(t, "c", (function() {
                return D
            })), n.d(t, "j", (function() {
                return R
            })), n.d(t, "p", (function() {
                return B
            })), n.d(t, "a", (function() {
                return W
            })), n.d(t, "v", (function() {
                return X
            })), n.d(t, "u", (function() {
                return K
            }));
            n(64), n(45), n(69), n(70), n(96), n(42), n(97);
            var r = n(39),
                o = n(9),
                l = n(37),
                c = n(21),
                d = (n(71), n(15), n(46), n(218), n(36), n(123), n(54), n(53), n(29), n(30), n(59), n(31), n(74), n(174), n(175), n(222), n(104), n(177), n(223), n(56), n(57), n(1)),
                h = n(14);

            function f(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function m(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(t) {
                        Object(l.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }

            function v(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return y(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t;
                    return void 0 === e[n] && (e[n] = 0), e[n]++
                }
            }

            function x(e) {
                d.default.config.errorHandler && d.default.config.errorHandler(e)
            }

            function k(e) {
                return e.then((function(e) {
                    return e.default || e
                }))
            }

            function T(e) {
                return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
            }

            function S(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = e.$children || [],
                    o = v(r);
                try {
                    for (o.s(); !(t = o.n()).done;) {
                        var l = t.value;
                        l.$fetch ? n.push(l) : l.$children && S(l, n)
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return n
            }

            function _(e, t) {
                if (t || !e.options.__hasNuxtData) {
                    var n = e.options._originDataFn || e.options.data || function() {
                        return {}
                    };
                    e.options._originDataFn = n, e.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), m(m({}, data), t)
                    }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
                }
            }

            function C(e) {
                return e.options && e._Ctor === e || (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = d.default.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], e.matched.map((function(e, r) {
                    return Object.keys(e[n]).map((function(o) {
                        return t && t.push(r), e[n][o]
                    }))
                })))
            }

            function P(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return E(e, t, "instances")
            }

            function $(e, t) {
                return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                    return Object.keys(e.components).reduce((function(r, o) {
                        return e.components[o] ? r.push(t(e.components[o], e.instances[o], e, o, n)) : delete e.components[o], r
                    }), [])
                })))
            }

            function O(e, t) {
                return Promise.all($(e, function() {
                    var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r, o, l) {
                        var c, d;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, n();
                                case 4:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 7:
                                    throw e.prev = 7, e.t0 = e.catch(1), e.t0 && "ChunkLoadError" === e.t0.name && "undefined" != typeof window && window.sessionStorage && (c = Date.now(), (!(d = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || d + 6e4 < c) && (window.sessionStorage.setItem("nuxt-reload", c), window.location.reload(!0))), e.t0;
                                case 11:
                                    return o.components[l] = n = C(n), e.abrupt("return", "function" == typeof t ? t(n, r, o, l) : n);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t, n, r, o) {
                        return e.apply(this, arguments)
                    }
                }()))
            }

            function M(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, O(t);
                            case 4:
                                return e.abrupt("return", m(m({}, t), {}, {
                                    meta: E(t).map((function(e, n) {
                                        return m(m({}, e.options.meta), (t.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function I(e, t) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = Object(o.a)(regeneratorRuntime.mark((function e(t, n) {
                    var o, l, d, f;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.context || (t.context = {
                                    isStatic: !0,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: t,
                                    store: t.store,
                                    payload: n.payload,
                                    error: n.error,
                                    base: t.router.options.base,
                                    env: {}
                                }, n.ssrContext && (t.context.ssrContext = n.ssrContext), t.context.redirect = function(e, path, n) {
                                    if (e) {
                                        t.context._redirected = !0;
                                        var o = Object(r.a)(path);
                                        if ("number" == typeof e || "undefined" !== o && "object" !== o || (n = path || {}, path = e, o = Object(r.a)(path), e = 302), "object" === o && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(h.f)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                        t.context.next({
                                            path: path,
                                            query: n,
                                            status: e
                                        })
                                    }
                                }, t.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([M(n.route), M(n.from)]);
                            case 3:
                                o = e.sent, l = Object(c.a)(o, 2), d = l[0], f = l[1], n.route && (t.context.route = d), n.from && (t.context.from = f), t.context.next = n.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function j(e, t) {
                return !e.length || t._redirected || t._errored ? Promise.resolve() : z(e[0], t).then((function() {
                    return j(e.slice(1), t)
                }))
            }

            function z(e, t) {
                var n;
                return (n = 2 === e.length ? new Promise((function(n) {
                    e(t, (function(e, data) {
                        e && t.error(e), n(data = data || {})
                    }))
                })) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function N(base, e) {
                if ("hash" === e) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var t = (path || "/") + window.location.search + window.location.hash;
                return Object(h.d)(t)
            }

            function D(e, t) {
                return function(e, t) {
                    for (var n = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(r.a)(e[i]) && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", G(t)));
                    return function(t, r) {
                        for (var path = "", data = t || {}, o = (r || {}).pretty ? F : encodeURIComponent, l = 0; l < e.length; l++) {
                            var c = e[l];
                            if ("string" != typeof c) {
                                var d = data[c.name || "pathMatch"],
                                    h = void 0;
                                if (null == d) {
                                    if (c.optional) {
                                        c.partial && (path += c.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + c.name + '" to be defined')
                                }
                                if (Array.isArray(d)) {
                                    if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                    if (0 === d.length) {
                                        if (c.optional) continue;
                                        throw new TypeError('Expected "' + c.name + '" to not be empty')
                                    }
                                    for (var f = 0; f < d.length; f++) {
                                        if (h = o(d[f]), !n[l].test(h)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(h) + "`");
                                        path += (0 === f ? c.prefix : c.delimiter) + h
                                    }
                                } else {
                                    if (h = c.asterisk ? V(d) : o(d), !n[l].test(h)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + h + '"');
                                    path += c.prefix + h
                                }
                            } else path += c
                        }
                        return path
                    }
                }(function(e, t) {
                    var n, r = [],
                        o = 0,
                        l = 0,
                        path = "",
                        c = t && t.delimiter || "/";
                    for (; null != (n = H.exec(e));) {
                        var d = n[0],
                            h = n[1],
                            f = n.index;
                        if (path += e.slice(l, f), l = f + d.length, h) path += h[1];
                        else {
                            var m = e[l],
                                v = n[2],
                                y = n[3],
                                w = n[4],
                                x = n[5],
                                k = n[6],
                                T = n[7];
                            path && (r.push(path), path = "");
                            var S = null != v && null != m && m !== v,
                                _ = "+" === k || "*" === k,
                                C = "?" === k || "*" === k,
                                E = n[2] || c,
                                pattern = w || x;
                            r.push({
                                name: y || o++,
                                prefix: v || "",
                                delimiter: E,
                                optional: C,
                                repeat: _,
                                partial: S,
                                asterisk: Boolean(T),
                                pattern: pattern ? Y(pattern) : T ? ".*" : "[^" + U(E) + "]+?"
                            })
                        }
                    }
                    l < e.length && (path += e.substr(l));
                    path && r.push(path);
                    return r
                }(e, t), t)
            }

            function R(e, t) {
                var n = {},
                    r = m(m({}, e), t);
                for (var o in r) String(e[o]) !== String(t[o]) && (n[o] = !0);
                return n
            }

            function B(e) {
                var t;
                if (e.message || "string" == typeof e) t = e.message || e;
                else try {
                    t = JSON.stringify(e, null, 2)
                } catch (n) {
                    t = "[".concat(e.constructor.name, "]")
                }
                return m(m({}, e), {}, {
                    message: t,
                    statusCode: e.statusCode || e.status || e.response && e.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(e) {
                window.onNuxtReadyCbs.push(e)
            };
            var H = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function F(e, t) {
                var n = t ? /[?#]/g : /[/?#]/g;
                return encodeURI(e).replace(n, (function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function V(e) {
                return F(e, !0)
            }

            function U(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function Y(e) {
                return e.replace(/([=!:$/()])/g, "\\$1")
            }

            function G(e) {
                return e && e.sensitive ? "" : "i"
            }

            function W(e, t, n) {
                e.$options[t] || (e.$options[t] = []), e.$options[t].includes(n) || e.$options[t].push(n)
            }
            var X = h.c;
            h.h, h.b;

            function K(e) {
                try {
                    window.history.scrollRestoration = e
                } catch (e) {}
            }
        },
        103: function(e, t, n) {
            "use strict";
            n(72), n(15), n(42), n(54), n(46), n(56), n(57), n(59), n(36), n(64), n(29), n(31), n(45), n(69), n(70), n(30);
            var r = n(1);

            function o(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    d = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        d = !0, o = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (d) throw o
                        }
                    }
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }
            var c = window.requestIdleCallback || function(e) {
                    var t = Date.now();
                    return setTimeout((function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }), 1)
                },
                d = window.cancelIdleCallback || function(e) {
                    clearTimeout(e)
                },
                h = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        var t = e.intersectionRatio,
                            link = e.target;
                        t <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            t.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = c(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    d(this.handleId), this.__observed && (h.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        h && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), h.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        var e = this.$router.resolve(this.to, this.$route, this.append);
                        return e.resolved.matched.map((function(e) {
                            return e.components.default
                        })).filter((function(t) {
                            return e.href || "function" == typeof t && !t.options && !t.__prefetched
                        })).length
                    },
                    canPrefetch: function() {
                        var e = navigator.connection;
                        return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                            return e.components.default
                        })).filter((function(e) {
                            return "function" == typeof e && !e.options && !e.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            h.unobserve(this.$el);
                            var e, t = o(this.getPrefetchComponents());
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var n = e.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            if (!this.$root.isPreview) {
                                var l = this.$router.resolve(this.to, this.$route, this.append).href;
                                this.$nuxt && this.$nuxt.fetchPayload(l, !0).catch((function() {}))
                            }
                        }
                    }
                }
            }
        },
        127: function(e, t, n) {
            "use strict";
            t.a = {}
        },
        128: function(e, t, n) {
            "use strict";
            var r = {
                name: "ClientOnly",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(e, t) {
                    var n = t.parent,
                        r = t.slots,
                        o = t.props,
                        l = r(),
                        c = l.default;
                    void 0 === c && (c = []);
                    var d = l.placeholder;
                    return n._isMounted ? c : (n.$once("hook:mounted", (function() {
                        n.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || d) ? e(o.placeholderTag, {
                        class: ["client-only-placeholder"]
                    }, o.placeholder || d) : c.length > 0 ? c.map((function() {
                        return e(!1)
                    })) : e(!1))
                }
            };
            e.exports = r
        },
        130: function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = 1e3,
                    t = 6e4,
                    n = 36e5,
                    r = "millisecond",
                    i = "second",
                    s = "minute",
                    u = "hour",
                    a = "day",
                    o = "week",
                    l = "month",
                    c = "quarter",
                    d = "year",
                    h = "date",
                    f = "Invalid Date",
                    m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    y = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                    },
                    w = function(e, t, n) {
                        var r = String(e);
                        return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e
                    },
                    g = {
                        s: w,
                        z: function(e) {
                            var t = -e.utcOffset(),
                                n = Math.abs(t),
                                r = Math.floor(n / 60),
                                i = n % 60;
                            return (t <= 0 ? "+" : "-") + w(r, 2, "0") + ":" + w(i, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date()) return -e(n, t);
                            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                i = t.clone().add(r, l),
                                s = n - i < 0,
                                u = t.clone().add(r + (s ? -1 : 1), l);
                            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(e) {
                            return {
                                M: l,
                                y: d,
                                w: o,
                                d: a,
                                D: h,
                                h: u,
                                m: s,
                                s: i,
                                ms: r,
                                Q: c
                            }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    },
                    x = "en",
                    k = {};
                k[x] = y;
                var p = function(e) {
                        return e instanceof C
                    },
                    T = function(e, t, n) {
                        var r;
                        if (!e) return x;
                        if ("string" == typeof e) k[e] && (r = e), t && (k[e] = t, r = e);
                        else {
                            var i = e.name;
                            k[i] = e, r = i
                        }
                        return !n && r && (x = r), r || !n && x
                    },
                    S = function(e, t) {
                        if (p(e)) return e.clone();
                        var n = "object" == typeof t ? t : {};
                        return n.date = e, n.args = arguments, new C(n)
                    },
                    _ = g;
                _.l = T, _.i = p, _.w = function(e, t) {
                    return S(e, {
                        locale: t.$L,
                        utc: t.$u,
                        x: t.$x,
                        $offset: t.$offset
                    })
                };
                var C = function() {
                        function y(e) {
                            this.$L = T(e.locale, null, !0), this.parse(e)
                        }
                        var w = y.prototype;
                        return w.parse = function(e) {
                            this.$d = function(e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (_.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(m);
                                    if (r) {
                                        var i = r[2] - 1 || 0,
                                            s = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                                    }
                                }
                                return new Date(t)
                            }(e), this.$x = e.x || {}, this.init()
                        }, w.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, w.$utils = function() {
                            return _
                        }, w.isValid = function() {
                            return !(this.$d.toString() === f)
                        }, w.isSame = function(e, t) {
                            var n = S(e);
                            return this.startOf(t) <= n && n <= this.endOf(t)
                        }, w.isAfter = function(e, t) {
                            return S(e) < this.startOf(t)
                        }, w.isBefore = function(e, t) {
                            return this.endOf(t) < S(e)
                        }, w.$g = function(e, t, n) {
                            return _.u(e) ? this[t] : this.set(n, e)
                        }, w.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, w.valueOf = function() {
                            return this.$d.getTime()
                        }, w.startOf = function(e, t) {
                            var n = this,
                                r = !!_.u(t) || t,
                                c = _.p(e),
                                f = function(e, t) {
                                    var i = _.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                                    return r ? i : i.endOf(a)
                                },
                                m = function(e, t) {
                                    return _.w(n.toDate()[e].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                                },
                                v = this.$W,
                                y = this.$M,
                                w = this.$D,
                                g = "set" + (this.$u ? "UTC" : "");
                            switch (c) {
                                case d:
                                    return r ? f(1, 0) : f(31, 11);
                                case l:
                                    return r ? f(1, y) : f(0, y + 1);
                                case o:
                                    var x = this.$locale().weekStart || 0,
                                        k = (v < x ? v + 7 : v) - x;
                                    return f(r ? w - k : w + (6 - k), y);
                                case a:
                                case h:
                                    return m(g + "Hours", 0);
                                case u:
                                    return m(g + "Minutes", 1);
                                case s:
                                    return m(g + "Seconds", 2);
                                case i:
                                    return m(g + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, w.endOf = function(e) {
                            return this.startOf(e, !1)
                        }, w.$set = function(e, t) {
                            var n, o = _.p(e),
                                c = "set" + (this.$u ? "UTC" : ""),
                                f = (n = {}, n[a] = c + "Date", n[h] = c + "Date", n[l] = c + "Month", n[d] = c + "FullYear", n[u] = c + "Hours", n[s] = c + "Minutes", n[i] = c + "Seconds", n[r] = c + "Milliseconds", n)[o],
                                m = o === a ? this.$D + (t - this.$W) : t;
                            if (o === l || o === d) {
                                var v = this.clone().set(h, 1);
                                v.$d[f](m), v.init(), this.$d = v.set(h, Math.min(this.$D, v.daysInMonth())).$d
                            } else f && this.$d[f](m);
                            return this.init(), this
                        }, w.set = function(e, t) {
                            return this.clone().$set(e, t)
                        }, w.get = function(e) {
                            return this[_.p(e)]()
                        }, w.add = function(r, c) {
                            var h, f = this;
                            r = Number(r);
                            var m = _.p(c),
                                v = function(e) {
                                    var t = S(f);
                                    return _.w(t.date(t.date() + Math.round(e * r)), f)
                                };
                            if (m === l) return this.set(l, this.$M + r);
                            if (m === d) return this.set(d, this.$y + r);
                            if (m === a) return v(1);
                            if (m === o) return v(7);
                            var y = (h = {}, h[s] = t, h[u] = n, h[i] = e, h)[m] || 1,
                                w = this.$d.getTime() + r * y;
                            return _.w(w, this)
                        }, w.subtract = function(e, t) {
                            return this.add(-1 * e, t)
                        }, w.format = function(e) {
                            var t = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || f;
                            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                i = _.z(this),
                                s = this.$H,
                                u = this.$m,
                                a = this.$M,
                                o = n.weekdays,
                                l = n.months,
                                c = function(e, n, i, s) {
                                    return e && (e[n] || e(t, r)) || i[n].substr(0, s)
                                },
                                d = function(e) {
                                    return _.s(s % 12 || 12, e, "0")
                                },
                                h = n.meridiem || function(e, t, n) {
                                    var r = e < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                },
                                m = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: a + 1,
                                    MM: _.s(a + 1, 2, "0"),
                                    MMM: c(n.monthsShort, a, l, 3),
                                    MMMM: c(l, a),
                                    D: this.$D,
                                    DD: _.s(this.$D, 2, "0"),
                                    d: String(this.$W),
                                    dd: c(n.weekdaysMin, this.$W, o, 2),
                                    ddd: c(n.weekdaysShort, this.$W, o, 3),
                                    dddd: o[this.$W],
                                    H: String(s),
                                    HH: _.s(s, 2, "0"),
                                    h: d(1),
                                    hh: d(2),
                                    a: h(s, u, !0),
                                    A: h(s, u, !1),
                                    m: String(u),
                                    mm: _.s(u, 2, "0"),
                                    s: String(this.$s),
                                    ss: _.s(this.$s, 2, "0"),
                                    SSS: _.s(this.$ms, 3, "0"),
                                    Z: i
                                };
                            return r.replace(v, (function(e, t) {
                                return t || m[e] || i.replace(":", "")
                            }))
                        }, w.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, w.diff = function(r, h, f) {
                            var m, v = _.p(h),
                                y = S(r),
                                w = (y.utcOffset() - this.utcOffset()) * t,
                                g = this - y,
                                x = _.m(this, y);
                            return x = (m = {}, m[d] = x / 12, m[l] = x, m[c] = x / 3, m[o] = (g - w) / 6048e5, m[a] = (g - w) / 864e5, m[u] = g / n, m[s] = g / t, m[i] = g / e, m)[v] || g, f ? x : _.a(x)
                        }, w.daysInMonth = function() {
                            return this.endOf(l).$D
                        }, w.$locale = function() {
                            return k[this.$L]
                        }, w.locale = function(e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = T(e, t, !0);
                            return r && (n.$L = r), n
                        }, w.clone = function() {
                            return _.w(this.$d, this)
                        }, w.toDate = function() {
                            return new Date(this.valueOf())
                        }, w.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, w.toISOString = function() {
                            return this.$d.toISOString()
                        }, w.toString = function() {
                            return this.$d.toUTCString()
                        }, y
                    }(),
                    b = C.prototype;
                return S.prototype = b, [
                    ["$ms", r],
                    ["$s", i],
                    ["$m", s],
                    ["$H", u],
                    ["$W", a],
                    ["$M", l],
                    ["$y", d],
                    ["$D", h]
                ].forEach((function(e) {
                    b[e[1]] = function(t) {
                        return this.$g(t, e[0], e[1])
                    }
                })), S.extend = function(e, t) {
                    return e.$i || (e(t, C, S), e.$i = !0), S
                }, S.locale = T, S.isDayjs = p, S.unix = function(e) {
                    return S(1e3 * e)
                }, S.en = k[x], S.Ls = k, S.p = {}, S
            }()
        },
        138: function(e, t, n) {
            ! function(e, t, n) {
                "use strict";
                var r;
                t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n,
                    function(e) {
                        e.SwiperComponent = "Swiper", e.SwiperSlideComponent = "SwiperSlide", e.SwiperDirective = "swiper", e.SwiperInstance = "$swiper"
                    }(r || (r = {}));
                var o, l, c = Object.freeze({
                    containerClass: "swiper-container",
                    wrapperClass: "swiper-wrapper",
                    slideClass: "swiper-slide"
                });
                (function(e) {
                    e.Ready = "ready", e.ClickSlide = "clickSlide"
                })(o || (o = {})),
                function(e) {
                    e.AutoUpdate = "autoUpdate", e.AutoDestroy = "autoDestroy", e.DeleteInstanceOnDestroy = "deleteInstanceOnDestroy", e.CleanupStylesOnDestroy = "cleanupStylesOnDestroy"
                }(l || (l = {}));
                var d = ["init", "beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize", "observerUpdate", "beforeLoopFix", "loopFix"];

                function h() {
                    for (var s = 0, i = 0, e = arguments.length; i < e; i++) s += arguments[i].length;
                    var t = Array(s),
                        n = 0;
                    for (i = 0; i < e; i++)
                        for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++) t[n] = a[r];
                    return t
                }
                var f, m = function(e) {
                        return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase()
                    },
                    v = function(e, t, n) {
                        var r, l, c;
                        if (e && !e.destroyed) {
                            var d = (null === (r = t.composedPath) || void 0 === r ? void 0 : r.call(t)) || t.path;
                            if ((null == t ? void 0 : t.target) && d) {
                                var h = Array.from(e.slides),
                                    f = Array.from(d);
                                if (h.includes(t.target) || f.some((function(e) {
                                        return h.includes(e)
                                    }))) {
                                    var v = e.clickedIndex,
                                        y = Number(null === (c = null === (l = e.clickedSlide) || void 0 === l ? void 0 : l.dataset) || void 0 === c ? void 0 : c.swiperSlideIndex),
                                        w = Number.isInteger(y) ? y : null;
                                    n(o.ClickSlide, v, w), n(m(o.ClickSlide), v, w)
                                }
                            }
                        }
                    },
                    y = function(e, t) {
                        d.forEach((function(n) {
                            e.on(n, (function() {
                                for (var e = arguments, r = [], o = 0; o < arguments.length; o++) r[o] = e[o];
                                t.apply(void 0, h([n], r));
                                var l = m(n);
                                l !== n && t.apply(void 0, h([l], r))
                            }))
                        }))
                    },
                    w = "instanceName";

                function x(e, t) {
                    var n = function(e, t) {
                            var n, r, o, l, c = null === (r = null === (n = e.data) || void 0 === n ? void 0 : n.attrs) || void 0 === r ? void 0 : r[t];
                            return void 0 !== c ? c : null === (l = null === (o = e.data) || void 0 === o ? void 0 : o.attrs) || void 0 === l ? void 0 : l[m(t)]
                        },
                        d = function(element, e, t) {
                            return e.arg || n(t, w) || element.id || r.SwiperInstance
                        },
                        h = function(element, e, t) {
                            var n = d(element, e, t);
                            return t.context[n] || null
                        },
                        f = function(e) {
                            return e.value || t
                        },
                        x = function(input) {
                            return [!0, void 0, null, ""].includes(input)
                        },
                        k = function(e) {
                            var t, n, r = (null === (t = e.data) || void 0 === t ? void 0 : t.on) || (null === (n = e.componentOptions) || void 0 === n ? void 0 : n.listeners);
                            return function(e) {
                                for (var t, n = arguments, o = [], l = 1; l < arguments.length; l++) o[l - 1] = n[l];
                                var c = null === (t = r) || void 0 === t ? void 0 : t[e];
                                c && c.fns.apply(c, o)
                            }
                        };
                    return {
                        bind: function(element, e, t) {
                            -1 === element.className.indexOf(c.containerClass) && (element.className += (element.className ? " " : "") + c.containerClass), element.addEventListener("click", (function(n) {
                                var r = k(t),
                                    o = h(element, e, t);
                                v(o, n, r)
                            }))
                        },
                        inserted: function(element, t, n) {
                            var r = n.context,
                                l = f(t),
                                c = d(element, t, n),
                                h = k(n),
                                m = r,
                                v = null == m ? void 0 : m[c];
                            v && !v.destroyed || (v = new e(element, l), m[c] = v, y(v, h), h(o.Ready, v))
                        },
                        componentUpdated: function(element, e, t) {
                            var r, o, c, d, m, v, y, w, k, T, S, _, C = n(t, l.AutoUpdate);
                            if (x(C)) {
                                var E = h(element, e, t);
                                if (E) {
                                    var P = f(e).loop;
                                    P && (null === (o = null === (r = E) || void 0 === r ? void 0 : r.loopDestroy) || void 0 === o || o.call(r)), null === (c = null == E ? void 0 : E.update) || void 0 === c || c.call(E), null === (m = null === (d = E.navigation) || void 0 === d ? void 0 : d.update) || void 0 === m || m.call(d), null === (y = null === (v = E.pagination) || void 0 === v ? void 0 : v.render) || void 0 === y || y.call(v), null === (k = null === (w = E.pagination) || void 0 === w ? void 0 : w.update) || void 0 === k || k.call(w), P && (null === (S = null === (T = E) || void 0 === T ? void 0 : T.loopCreate) || void 0 === S || S.call(T), null === (_ = null == E ? void 0 : E.update) || void 0 === _ || _.call(E))
                                }
                            }
                        },
                        unbind: function(element, e, t) {
                            var r, o = n(t, l.AutoDestroy);
                            if (x(o)) {
                                var c = h(element, e, t);
                                c && c.initialized && (null === (r = null == c ? void 0 : c.destroy) || void 0 === r || r.call(c, x(n(t, l.DeleteInstanceOnDestroy)), x(n(t, l.CleanupStylesOnDestroy))))
                            }
                        }
                    }
                }

                function k(e) {
                    var t;
                    return n.extend({
                        name: r.SwiperComponent,
                        props: (t = {
                            defaultOptions: {
                                type: Object,
                                required: !1,
                                default: function() {
                                    return {}
                                }
                            },
                            options: {
                                type: Object,
                                required: !1
                            }
                        }, t[l.AutoUpdate] = {
                            type: Boolean,
                            default: !0
                        }, t[l.AutoDestroy] = {
                            type: Boolean,
                            default: !0
                        }, t[l.DeleteInstanceOnDestroy] = {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }, t[l.CleanupStylesOnDestroy] = {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }, t),
                        data: function() {
                            var e;
                            return (e = {})[r.SwiperInstance] = null, e
                        },
                        computed: {
                            swiperInstance: {
                                cache: !1,
                                set: function(e) {
                                    this[r.SwiperInstance] = e
                                },
                                get: function() {
                                    return this[r.SwiperInstance]
                                }
                            },
                            swiperOptions: function() {
                                return this.options || this.defaultOptions
                            },
                            wrapperClass: function() {
                                return this.swiperOptions.wrapperClass || c.wrapperClass
                            }
                        },
                        methods: {
                            handleSwiperClick: function(e) {
                                v(this.swiperInstance, e, this.$emit.bind(this))
                            },
                            autoReLoopSwiper: function() {
                                var e, t;
                                if (this.swiperInstance && this.swiperOptions.loop) {
                                    var n = this.swiperInstance;
                                    null === (e = null == n ? void 0 : n.loopDestroy) || void 0 === e || e.call(n), null === (t = null == n ? void 0 : n.loopCreate) || void 0 === t || t.call(n)
                                }
                            },
                            updateSwiper: function() {
                                var e, t, n, r, o, c, d, h;
                                this[l.AutoUpdate] && this.swiperInstance && (this.autoReLoopSwiper(), null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.update) || void 0 === t || t.call(e), null === (r = null === (n = this.swiperInstance.navigation) || void 0 === n ? void 0 : n.update) || void 0 === r || r.call(n), null === (c = null === (o = this.swiperInstance.pagination) || void 0 === o ? void 0 : o.render) || void 0 === c || c.call(o), null === (h = null === (d = this.swiperInstance.pagination) || void 0 === d ? void 0 : d.update) || void 0 === h || h.call(d))
                            },
                            destroySwiper: function() {
                                var e, t;
                                this[l.AutoDestroy] && this.swiperInstance && this.swiperInstance.initialized && (null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.destroy) || void 0 === t || t.call(e, this[l.DeleteInstanceOnDestroy], this[l.CleanupStylesOnDestroy]))
                            },
                            initSwiper: function() {
                                this.swiperInstance = new e(this.$el, this.swiperOptions), y(this.swiperInstance, this.$emit.bind(this)), this.$emit(o.Ready, this.swiperInstance)
                            }
                        },
                        mounted: function() {
                            this.swiperInstance || this.initSwiper()
                        },
                        activated: function() {
                            this.updateSwiper()
                        },
                        updated: function() {
                            this.updateSwiper()
                        },
                        beforeDestroy: function() {
                            this.$nextTick(this.destroySwiper)
                        },
                        render: function(e) {
                            return e("div", {
                                staticClass: c.containerClass,
                                on: {
                                    click: this.handleSwiperClick
                                }
                            }, [this.$slots[f.ParallaxBg], e("div", {
                                class: this.wrapperClass
                            }, this.$slots.default), this.$slots[f.Pagination], this.$slots[f.PrevButton], this.$slots[f.NextButton], this.$slots[f.Scrollbar]])
                        }
                    })
                }! function(e) {
                    e.ParallaxBg = "parallax-bg", e.Pagination = "pagination", e.Scrollbar = "scrollbar", e.PrevButton = "button-prev", e.NextButton = "button-next"
                }(f || (f = {}));
                var T = n.extend({
                        name: r.SwiperSlideComponent,
                        computed: {
                            slideClass: function() {
                                var e, t;
                                return (null === (t = null === (e = this.$parent) || void 0 === e ? void 0 : e.swiperOptions) || void 0 === t ? void 0 : t.slideClass) || c.slideClass
                            }
                        },
                        methods: {
                            update: function() {
                                var e, t = this.$parent;
                                t[l.AutoUpdate] && (null === (e = null == t ? void 0 : t.swiperInstance) || void 0 === e || e.update())
                            }
                        },
                        mounted: function() {
                            this.update()
                        },
                        updated: function() {
                            this.update()
                        },
                        render: function(e) {
                            return e("div", {
                                class: this.slideClass
                            }, this.$slots.default)
                        }
                    }),
                    S = function(e) {
                        var t = function(n, o) {
                            if (!t.installed) {
                                var l = k(e);
                                o && (l.options.props.defaultOptions.default = function() {
                                    return o
                                }), n.component(r.SwiperComponent, l), n.component(r.SwiperSlideComponent, T), n.directive(r.SwiperDirective, x(e, o)), t.installed = !0
                            }
                        };
                        return t
                    };

                function _(e) {
                    var t;
                    return (t = {
                        version: "4.1.1",
                        install: S(e),
                        directive: x(e)
                    })[r.SwiperComponent] = k(e), t[r.SwiperSlideComponent] = T, t
                }
                var C = _(t),
                    E = C.version,
                    P = C.install,
                    $ = C.directive,
                    O = C.Swiper,
                    M = C.SwiperSlide;
                e.Swiper = O, e.SwiperSlide = M, e.default = C, e.directive = $, e.install = P, e.version = E, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(256), n(1))
        },
        141: function(e, t, n) {
            e.exports = function() {
                var e = "undefined" != typeof window,
                    t = "undefined" != typeof navigator,
                    n = e && ("ontouchstart" in window || t && navigator.msMaxTouchPoints > 0) ? ["touchstart"] : ["click"];

                function i(e) {
                    var t = e.event,
                        n = e.handler;
                    (0, e.middleware)(t) && n(t)
                }

                function r(e, t) {
                    var r = function(e) {
                            var t = "function" == typeof e;
                            if (!t && "object" != typeof e) throw new Error("v-click-outside: Binding value must be a function or an object");
                            return {
                                handler: t ? e : e.handler,
                                middleware: e.middleware || function(e) {
                                    return e
                                },
                                events: e.events || n,
                                isActive: !(!1 === e.isActive),
                                detectIframe: !(!1 === e.detectIframe)
                            }
                        }(t.value),
                        o = r.handler,
                        l = r.middleware,
                        a = r.detectIframe;
                    if (r.isActive) {
                        if (e["__v-click-outside"] = r.events.map((function(t) {
                                return {
                                    event: t,
                                    srcTarget: document.documentElement,
                                    handler: function(t) {
                                        return function(e) {
                                            var t = e.el,
                                                n = e.event,
                                                r = e.handler,
                                                o = e.middleware,
                                                l = n.path || n.composedPath && n.composedPath();
                                            (l ? l.indexOf(t) < 0 : !t.contains(n.target)) && i({
                                                event: n,
                                                handler: r,
                                                middleware: o
                                            })
                                        }({
                                            el: e,
                                            event: t,
                                            handler: o,
                                            middleware: l
                                        })
                                    }
                                }
                            })), a) {
                            var c = {
                                event: "blur",
                                srcTarget: window,
                                handler: function(t) {
                                    return function(e) {
                                        var t = e.el,
                                            n = e.event,
                                            r = e.handler,
                                            o = e.middleware;
                                        setTimeout((function() {
                                            var e = document.activeElement;
                                            e && "IFRAME" === e.tagName && !t.contains(e) && i({
                                                event: n,
                                                handler: r,
                                                middleware: o
                                            })
                                        }), 0)
                                    }({
                                        el: e,
                                        event: t,
                                        handler: o,
                                        middleware: l
                                    })
                                }
                            };
                            e["__v-click-outside"] = [].concat(e["__v-click-outside"], [c])
                        }
                        e["__v-click-outside"].forEach((function(t) {
                            var n = t.event,
                                i = t.srcTarget,
                                r = t.handler;
                            return setTimeout((function() {
                                e["__v-click-outside"] && i.addEventListener(n, r, !1)
                            }), 0)
                        }))
                    }
                }

                function o(e) {
                    (e["__v-click-outside"] || []).forEach((function(e) {
                        return e.srcTarget.removeEventListener(e.event, e.handler, !1)
                    })), delete e["__v-click-outside"]
                }
                var l = e ? {
                    bind: r,
                    update: function(e, t) {
                        var n = t.value,
                            i = t.oldValue;
                        JSON.stringify(n) !== JSON.stringify(i) && (o(e), r(e, {
                            value: n
                        }))
                    },
                    unbind: o
                } : {};
                return {
                    install: function(e) {
                        e.directive("click-outside", l)
                    },
                    directive: l
                }
            }()
        },
        178: function(e, t, n) {
            var content = n(235);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(41).default)("6fd8836a", content, !0, {
                sourceMap: !1
            })
        },
        179: function(e, t, n) {
            var content = n(253);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(41).default)("4582f6a0", content, !0, {
                sourceMap: !1
            })
        },
        180: function(e, t, n) {
            "use strict";
            t.a = function(e, t) {
                return t = t || {}, new Promise((function(n, r) {
                    var s = new XMLHttpRequest,
                        o = [],
                        u = [],
                        i = {},
                        a = function() {
                            return {
                                ok: 2 == (s.status / 100 | 0),
                                statusText: s.statusText,
                                status: s.status,
                                url: s.responseURL,
                                text: function() {
                                    return Promise.resolve(s.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(s.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([s.response]))
                                },
                                clone: a,
                                headers: {
                                    keys: function() {
                                        return o
                                    },
                                    entries: function() {
                                        return u
                                    },
                                    get: function(e) {
                                        return i[e.toLowerCase()]
                                    },
                                    has: function(e) {
                                        return e.toLowerCase() in i
                                    }
                                }
                            }
                        };
                    for (var l in s.open(t.method || "get", e, !0), s.onload = function() {
                            s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
                                o.push(t = t.toLowerCase()), u.push([t, n]), i[t] = i[t] ? i[t] + "," + n : n
                            })), n(a())
                        }, s.onerror = r, s.withCredentials = "include" == t.credentials, t.headers) s.setRequestHeader(l, t.headers[l]);
                    s.send(t.body || null)
                }))
            }
        },
        182: function(e, t, n) {
            "use strict";
            var r = function(e) {
                return function(e) {
                    return !!e && "object" == typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === o
                    }(e)
                }(e)
            };
            var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function l(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? m((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function c(e, source, t) {
                return e.concat(source).map((function(element) {
                    return l(element, t)
                }))
            }

            function d(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(symbol) {
                        return e.propertyIsEnumerable(symbol)
                    })) : []
                }(e))
            }

            function h(object, e) {
                try {
                    return e in object
                } catch (e) {
                    return !1
                }
            }

            function f(e, source, t) {
                var n = {};
                return t.isMergeableObject(e) && d(e).forEach((function(r) {
                    n[r] = l(e[r], t)
                })), d(source).forEach((function(r) {
                    (function(e, t) {
                        return h(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, r) || (h(e, r) && t.isMergeableObject(source[r]) ? n[r] = function(e, t) {
                        if (!t.customMerge) return m;
                        var n = t.customMerge(e);
                        return "function" == typeof n ? n : m
                    }(r, t)(e[r], source[r], t) : n[r] = l(source[r], t))
                })), n
            }

            function m(e, source, t) {
                (t = t || {}).arrayMerge = t.arrayMerge || c, t.isMergeableObject = t.isMergeableObject || r, t.cloneUnlessOtherwiseSpecified = l;
                var n = Array.isArray(source);
                return n === Array.isArray(e) ? n ? t.arrayMerge(e, source, t) : f(e, source, t) : l(source, t)
            }
            m.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, n) {
                    return m(e, n, t)
                }), {})
            };
            var v = m;
            e.exports = v
        },
        183: function(e, t, n) {
            "use strict";
            (function(e) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, n(e)
                }

                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function o(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var i = 0, t = new Array(e.length); i < e.length; i++) t[i] = e[i];
                            return t
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function l(e, t) {
                    if (e === t) return !0;
                    if ("object" === n(e)) {
                        for (var r in e)
                            if (!l(e[r], t[r])) return !1;
                        return !0
                    }
                    return !1
                }
                var c = function() {
                    function e(t, n, r) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(n, r)
                    }
                    var t, n, l;
                    return t = e, n = [{
                        key: "createObserver",
                        value: function(e, t) {
                            var n = this;
                            if (this.observer && this.destroyObserver(), !this.frozen) {
                                var r;
                                if (this.options = "function" == typeof(r = e) ? {
                                        callback: r
                                    } : r, this.callback = function(e, t) {
                                        n.options.callback(e, t), e && n.options.once && (n.frozen = !0, n.destroyObserver())
                                    }, this.callback && this.options.throttle) {
                                    var l = (this.options.throttleOptions || {}).leading;
                                    this.callback = function(e, t) {
                                        var n, r, l, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                            d = function(d) {
                                                for (var h = arguments.length, f = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++) f[m - 1] = arguments[m];
                                                if (l = f, !n || d !== r) {
                                                    var v = c.leading;
                                                    "function" == typeof v && (v = v(d, r)), n && d === r || !v || e.apply(void 0, [d].concat(o(l))), r = d, clearTimeout(n), n = setTimeout((function() {
                                                        e.apply(void 0, [d].concat(o(l))), n = 0
                                                    }), t)
                                                }
                                            };
                                        return d._clear = function() {
                                            clearTimeout(n), n = null
                                        }, d
                                    }(this.callback, this.options.throttle, {
                                        leading: function(e) {
                                            return "both" === l || "visible" === l && e || "hidden" === l && !e
                                        }
                                    })
                                }
                                this.oldResult = void 0, this.observer = new IntersectionObserver((function(e) {
                                    var t = e[0];
                                    if (e.length > 1) {
                                        var r = e.find((function(e) {
                                            return e.isIntersecting
                                        }));
                                        r && (t = r)
                                    }
                                    if (n.callback) {
                                        var o = t.isIntersecting && t.intersectionRatio >= n.threshold;
                                        if (o === n.oldResult) return;
                                        n.oldResult = o, n.callback(o, t)
                                    }
                                }), this.options.intersection), t.context.$nextTick((function() {
                                    n.observer && n.observer.observe(n.el)
                                }))
                            }
                        }
                    }, {
                        key: "destroyObserver",
                        value: function() {
                            this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null)
                        }
                    }, {
                        key: "threshold",
                        get: function() {
                            return this.options.intersection && "number" == typeof this.options.intersection.threshold ? this.options.intersection.threshold : 0
                        }
                    }], n && r(t.prototype, n), l && r(t, l), e
                }();

                function d(e, t, n) {
                    var r = t.value;
                    if (r)
                        if ("undefined" == typeof IntersectionObserver) console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
                        else {
                            var o = new c(e, r, n);
                            e._vue_visibilityState = o
                        }
                }

                function h(e) {
                    var t = e._vue_visibilityState;
                    t && (t.destroyObserver(), delete e._vue_visibilityState)
                }
                var f = {
                    bind: d,
                    update: function(e, t, n) {
                        var r = t.value;
                        if (!l(r, t.oldValue)) {
                            var o = e._vue_visibilityState;
                            r ? o ? o.createObserver(r, n) : d(e, {
                                value: r
                            }, n) : h(e)
                        }
                    },
                    unbind: h
                };
                var m = {
                        version: "1.0.0",
                        install: function(e) {
                            e.directive("observe-visibility", f)
                        }
                    },
                    v = null;
                "undefined" != typeof window ? v = window.Vue : void 0 !== e && (v = e.Vue), v && v.use(m), t.a = m
            }).call(this, n(23))
        },
        184: function(e, t, n) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function(e) {
                        try {
                            return !!e()
                        } catch (e) {
                            return !0
                        }
                    },
                    r = !n((function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7
                            }
                        })[1]
                    })),
                    o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

                function l(e, t, n) {
                    return n = {
                        path: t,
                        exports: {},
                        require: function(path, base) {
                            return function() {
                                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                            }(null == base && n.path)
                        }
                    }, e(n, n.exports), n.exports
                }
                var c = function(e) {
                        return e && e.Math == Math && e
                    },
                    d = c("object" == typeof globalThis && globalThis) || c("object" == typeof window && window) || c("object" == typeof self && self) || c("object" == typeof o && o) || Function("return this")(),
                    h = function(e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    },
                    f = d.document,
                    m = h(f) && h(f.createElement),
                    v = function(e) {
                        return m ? f.createElement(e) : {}
                    },
                    y = !r && !n((function() {
                        return 7 != Object.defineProperty(v("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    })),
                    w = function(e) {
                        if (!h(e)) throw TypeError(String(e) + " is not an object");
                        return e
                    },
                    x = function(input, e) {
                        if (!h(input)) return input;
                        var t, n;
                        if (e && "function" == typeof(t = input.toString) && !h(n = t.call(input))) return n;
                        if ("function" == typeof(t = input.valueOf) && !h(n = t.call(input))) return n;
                        if (!e && "function" == typeof(t = input.toString) && !h(n = t.call(input))) return n;
                        throw TypeError("Can't convert object to primitive value")
                    },
                    k = Object.defineProperty,
                    T = {
                        f: r ? k : function(e, t, n) {
                            if (w(e), t = x(t, !0), w(n), y) try {
                                return k(e, t, n)
                            } catch (e) {}
                            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                            return "value" in n && (e[t] = n.value), e
                        }
                    },
                    S = T.f,
                    _ = Function.prototype,
                    C = _.toString,
                    E = /^\s*function ([^ (]*)/,
                    P = "name";
                r && !(P in _) && S(_, P, {
                    configurable: !0,
                    get: function() {
                        try {
                            return C.call(this).match(E)[1]
                        } catch (e) {
                            return ""
                        }
                    }
                });
                var $ = {}.propertyIsEnumerable,
                    O = Object.getOwnPropertyDescriptor,
                    M = O && !$.call({
                        1: 2
                    }, 1) ? function(e) {
                        var t = O(this, e);
                        return !!t && t.enumerable
                    } : $,
                    A = {
                        f: M
                    },
                    I = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    },
                    L = {}.toString,
                    j = function(e) {
                        return L.call(e).slice(8, -1)
                    },
                    z = "".split,
                    N = n((function() {
                        return !Object("z").propertyIsEnumerable(0)
                    })) ? function(e) {
                        return "String" == j(e) ? z.call(e, "") : Object(e)
                    } : Object,
                    D = function(e) {
                        if (null == e) throw TypeError("Can't call method on " + e);
                        return e
                    },
                    R = function(e) {
                        return N(D(e))
                    },
                    B = {}.hasOwnProperty,
                    H = function(e, t) {
                        return B.call(e, t)
                    },
                    F = Object.getOwnPropertyDescriptor,
                    V = {
                        f: r ? F : function(e, t) {
                            if (e = R(e), t = x(t, !0), y) try {
                                return F(e, t)
                            } catch (e) {}
                            if (H(e, t)) return I(!A.f.call(e, t), e[t])
                        }
                    },
                    U = r ? function(object, e, t) {
                        return T.f(object, e, I(1, t))
                    } : function(object, e, t) {
                        return object[e] = t, object
                    },
                    Y = function(e, t) {
                        try {
                            U(d, e, t)
                        } catch (n) {
                            d[e] = t
                        }
                        return t
                    },
                    G = "__core-js_shared__",
                    W = d[G] || Y(G, {}),
                    X = Function.toString;
                "function" != typeof W.inspectSource && (W.inspectSource = function(e) {
                    return X.call(e)
                });
                var K, J, Q, Z = W.inspectSource,
                    ee = d.WeakMap,
                    te = "function" == typeof ee && /native code/.test(Z(ee)),
                    ne = l((function(e) {
                        (e.exports = function(e, t) {
                            return W[e] || (W[e] = void 0 !== t ? t : {})
                        })("versions", []).push({
                            version: "3.6.5",
                            mode: "global",
                            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                        })
                    })),
                    re = 0,
                    ie = Math.random(),
                    ae = function(e) {
                        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++re + ie).toString(36)
                    },
                    oe = ne("keys"),
                    se = function(e) {
                        return oe[e] || (oe[e] = ae(e))
                    },
                    le = {},
                    ce = d.WeakMap;
                if (te) {
                    var ue = new ce,
                        de = ue.get,
                        pe = ue.has,
                        he = ue.set;
                    K = function(e, t) {
                        return he.call(ue, e, t), t
                    }, J = function(e) {
                        return de.call(ue, e) || {}
                    }, Q = function(e) {
                        return pe.call(ue, e)
                    }
                } else {
                    var fe = se("state");
                    le[fe] = !0, K = function(e, t) {
                        return U(e, fe, t), t
                    }, J = function(e) {
                        return H(e, fe) ? e[fe] : {}
                    }, Q = function(e) {
                        return H(e, fe)
                    }
                }
                var me, ge = {
                        set: K,
                        get: J,
                        has: Q,
                        enforce: function(e) {
                            return Q(e) ? J(e) : K(e, {})
                        },
                        getterFor: function(e) {
                            return function(t) {
                                var n;
                                if (!h(t) || (n = J(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                                return n
                            }
                        }
                    },
                    ve = l((function(e) {
                        var t = ge.get,
                            n = ge.enforce,
                            r = String(String).split("String");
                        (e.exports = function(e, t, o, l) {
                            var c = !!l && !!l.unsafe,
                                h = !!l && !!l.enumerable,
                                f = !!l && !!l.noTargetGet;
                            "function" == typeof o && ("string" != typeof t || H(o, "name") || U(o, "name", t), n(o).source = r.join("string" == typeof t ? t : "")), e !== d ? (c ? !f && e[t] && (h = !0) : delete e[t], h ? e[t] = o : U(e, t, o)) : h ? e[t] = o : Y(t, o)
                        })(Function.prototype, "toString", (function() {
                            return "function" == typeof this && t(this).source || Z(this)
                        }))
                    })),
                    path = d,
                    ye = function(e) {
                        return "function" == typeof e ? e : void 0
                    },
                    be = function(e, t) {
                        return arguments.length < 2 ? ye(path[e]) || ye(d[e]) : path[e] && path[e][t] || d[e] && d[e][t]
                    },
                    we = Math.ceil,
                    xe = Math.floor,
                    ke = function(e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? xe : we)(e)
                    },
                    Te = Math.min,
                    Se = function(e) {
                        return e > 0 ? Te(ke(e), 9007199254740991) : 0
                    },
                    _e = Math.max,
                    Ce = Math.min,
                    Ee = function(e, t) {
                        var n = ke(e);
                        return n < 0 ? _e(n + t, 0) : Ce(n, t)
                    },
                    Pe = function(e) {
                        return function(t, n, r) {
                            var o, l = R(t),
                                c = Se(l.length),
                                d = Ee(r, c);
                            if (e && n != n) {
                                for (; c > d;)
                                    if ((o = l[d++]) != o) return !0
                            } else
                                for (; c > d; d++)
                                    if ((e || d in l) && l[d] === n) return e || d || 0;
                            return !e && -1
                        }
                    },
                    $e = {
                        includes: Pe(!0),
                        indexOf: Pe(!1)
                    },
                    Oe = $e.indexOf,
                    Me = function(object, e) {
                        var t, n = R(object),
                            i = 0,
                            r = [];
                        for (t in n) !H(le, t) && H(n, t) && r.push(t);
                        for (; e.length > i;) H(n, t = e[i++]) && (~Oe(r, t) || r.push(t));
                        return r
                    },
                    Ae = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                    Ie = Ae.concat("length", "prototype"),
                    Le = {
                        f: Object.getOwnPropertyNames || function(e) {
                            return Me(e, Ie)
                        }
                    },
                    je = {
                        f: Object.getOwnPropertySymbols
                    },
                    ze = be("Reflect", "ownKeys") || function(e) {
                        var t = Le.f(w(e)),
                            n = je.f;
                        return n ? t.concat(n(e)) : t
                    },
                    Ne = function(e, source) {
                        for (var t = ze(source), n = T.f, r = V.f, i = 0; i < t.length; i++) {
                            var o = t[i];
                            H(e, o) || n(e, o, r(source, o))
                        }
                    },
                    De = /#|\.prototype\./,
                    Re = function(e, t) {
                        var r = data[Be(e)];
                        return r == Fe || r != He && ("function" == typeof t ? n(t) : !!t)
                    },
                    Be = Re.normalize = function(e) {
                        return String(e).replace(De, ".").toLowerCase()
                    },
                    data = Re.data = {},
                    He = Re.NATIVE = "N",
                    Fe = Re.POLYFILL = "P",
                    qe = Re,
                    Ve = V.f,
                    Ue = function(e, source) {
                        var t, n, r, o, l, c = e.target,
                            h = e.global,
                            f = e.stat;
                        if (t = h ? d : f ? d[c] || Y(c, {}) : (d[c] || {}).prototype)
                            for (n in source) {
                                if (o = source[n], r = e.noTargetGet ? (l = Ve(t, n)) && l.value : t[n], !qe(h ? n : c + (f ? "." : "#") + n, e.forced) && void 0 !== r) {
                                    if (typeof o == typeof r) continue;
                                    Ne(o, r)
                                }(e.sham || r && r.sham) && U(o, "sham", !0), ve(t, n, o, e)
                            }
                    },
                    Ye = !!Object.getOwnPropertySymbols && !n((function() {
                        return !String(Symbol())
                    })),
                    Ge = Ye && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                    We = Array.isArray || function(e) {
                        return "Array" == j(e)
                    },
                    Xe = function(e) {
                        return Object(D(e))
                    },
                    Ke = Object.keys || function(e) {
                        return Me(e, Ae)
                    },
                    Je = r ? Object.defineProperties : function(e, t) {
                        w(e);
                        for (var n, r = Ke(t), o = r.length, l = 0; o > l;) T.f(e, n = r[l++], t[n]);
                        return e
                    },
                    html = be("document", "documentElement"),
                    Qe = se("IE_PROTO"),
                    Ze = function() {},
                    et = function(content) {
                        return "<script>" + content + "</" + "script>"
                    },
                    tt = function() {
                        try {
                            me = document.domain && new ActiveXObject("htmlfile")
                        } catch (e) {}
                        var e, iframe;
                        tt = me ? function(e) {
                            e.write(et("")), e.close();
                            var t = e.parentWindow.Object;
                            return e = null, t
                        }(me) : ((iframe = v("iframe")).style.display = "none", html.appendChild(iframe), iframe.src = String("javascript:"), (e = iframe.contentWindow.document).open(), e.write(et("document.F=Object")), e.close(), e.F);
                        for (var t = Ae.length; t--;) delete tt.prototype[Ae[t]];
                        return tt()
                    };
                le[Qe] = !0;
                var nt = Object.create || function(e, t) {
                        var n;
                        return null !== e ? (Ze.prototype = w(e), n = new Ze, Ze.prototype = null, n[Qe] = e) : n = tt(), void 0 === t ? n : Je(n, t)
                    },
                    it = Le.f,
                    at = {}.toString,
                    ot = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                    st = {
                        f: function(e) {
                            return ot && "[object Window]" == at.call(e) ? function(e) {
                                try {
                                    return it(e)
                                } catch (e) {
                                    return ot.slice()
                                }
                            }(e) : it(R(e))
                        }
                    },
                    lt = ne("wks"),
                    ct = d.Symbol,
                    ut = Ge ? ct : ct && ct.withoutSetter || ae,
                    pt = function(e) {
                        return H(lt, e) || (Ye && H(ct, e) ? lt[e] = ct[e] : lt[e] = ut("Symbol." + e)), lt[e]
                    },
                    ht = {
                        f: pt
                    },
                    ft = T.f,
                    mt = function(e) {
                        var t = path.Symbol || (path.Symbol = {});
                        H(t, e) || ft(t, e, {
                            value: ht.f(e)
                        })
                    },
                    gt = T.f,
                    vt = pt("toStringTag"),
                    yt = function(e, t, n) {
                        e && !H(e = n ? e : e.prototype, vt) && gt(e, vt, {
                            configurable: !0,
                            value: t
                        })
                    },
                    bt = function(e) {
                        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                        return e
                    },
                    wt = function(e, t, n) {
                        if (bt(e), void 0 === t) return e;
                        switch (n) {
                            case 0:
                                return function() {
                                    return e.call(t)
                                };
                            case 1:
                                return function(a) {
                                    return e.call(t, a)
                                };
                            case 2:
                                return function(a, b) {
                                    return e.call(t, a, b)
                                };
                            case 3:
                                return function(a, b, n) {
                                    return e.call(t, a, b, n)
                                }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    },
                    xt = pt("species"),
                    kt = function(e, t) {
                        var n;
                        return We(e) && ("function" != typeof(n = e.constructor) || n !== Array && !We(n.prototype) ? h(n) && null === (n = n[xt]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
                    },
                    Tt = [].push,
                    St = function(e) {
                        var t = 1 == e,
                            n = 2 == e,
                            r = 3 == e,
                            o = 4 == e,
                            l = 6 == e,
                            c = 5 == e || l;
                        return function(d, h, f, m) {
                            for (var v, y, w = Xe(d), x = N(w), k = wt(h, f, 3), T = Se(x.length), S = 0, _ = m || kt, C = t ? _(d, T) : n ? _(d, 0) : void 0; T > S; S++)
                                if ((c || S in x) && (y = k(v = x[S], S, w), e))
                                    if (t) C[S] = y;
                                    else if (y) switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return v;
                                case 6:
                                    return S;
                                case 2:
                                    Tt.call(C, v)
                            } else if (o) return !1;
                            return l ? -1 : r || o ? o : C
                        }
                    },
                    _t = {
                        forEach: St(0),
                        map: St(1),
                        filter: St(2),
                        some: St(3),
                        every: St(4),
                        find: St(5),
                        findIndex: St(6)
                    },
                    Ct = _t.forEach,
                    Et = se("hidden"),
                    Pt = "Symbol",
                    $t = pt("toPrimitive"),
                    Ot = ge.set,
                    Mt = ge.getterFor(Pt),
                    At = Object.prototype,
                    It = d.Symbol,
                    Lt = be("JSON", "stringify"),
                    jt = V.f,
                    zt = T.f,
                    Nt = st.f,
                    Dt = A.f,
                    Rt = ne("symbols"),
                    Bt = ne("op-symbols"),
                    Ht = ne("string-to-symbol-registry"),
                    Ft = ne("symbol-to-string-registry"),
                    qt = ne("wks"),
                    Vt = d.QObject,
                    Ut = !Vt || !Vt.prototype || !Vt.prototype.findChild,
                    Yt = r && n((function() {
                        return 7 != nt(zt({}, "a", {
                            get: function() {
                                return zt(this, "a", {
                                    value: 7
                                }).a
                            }
                        })).a
                    })) ? function(e, t, n) {
                        var r = jt(At, t);
                        r && delete At[t], zt(e, t, n), r && e !== At && zt(At, t, r)
                    } : zt,
                    Gt = function(e, t) {
                        var symbol = Rt[e] = nt(It.prototype);
                        return Ot(symbol, {
                            type: Pt,
                            tag: e,
                            description: t
                        }), r || (symbol.description = t), symbol
                    },
                    Wt = Ge ? function(e) {
                        return "symbol" == typeof e
                    } : function(e) {
                        return Object(e) instanceof It
                    },
                    Xt = function(e, t, n) {
                        e === At && Xt(Bt, t, n), w(e);
                        var r = x(t, !0);
                        return w(n), H(Rt, r) ? (n.enumerable ? (H(e, Et) && e[Et][r] && (e[Et][r] = !1), n = nt(n, {
                            enumerable: I(0, !1)
                        })) : (H(e, Et) || zt(e, Et, I(1, {})), e[Et][r] = !0), Yt(e, r, n)) : zt(e, r, n)
                    },
                    Kt = function(e, t) {
                        w(e);
                        var n = R(t),
                            o = Ke(n).concat(en(n));
                        return Ct(o, (function(t) {
                            r && !Jt.call(n, t) || Xt(e, t, n[t])
                        })), e
                    },
                    Jt = function(e) {
                        var t = x(e, !0),
                            n = Dt.call(this, t);
                        return !(this === At && H(Rt, t) && !H(Bt, t)) && (!(n || !H(this, t) || !H(Rt, t) || H(this, Et) && this[Et][t]) || n)
                    },
                    Qt = function(e, t) {
                        var n = R(e),
                            r = x(t, !0);
                        if (n !== At || !H(Rt, r) || H(Bt, r)) {
                            var o = jt(n, r);
                            return !o || !H(Rt, r) || H(n, Et) && n[Et][r] || (o.enumerable = !0), o
                        }
                    },
                    Zt = function(e) {
                        var t = Nt(R(e)),
                            n = [];
                        return Ct(t, (function(e) {
                            H(Rt, e) || H(le, e) || n.push(e)
                        })), n
                    },
                    en = function(e) {
                        var t = e === At,
                            n = Nt(t ? Bt : R(e)),
                            r = [];
                        return Ct(n, (function(e) {
                            !H(Rt, e) || t && !H(At, e) || r.push(Rt[e])
                        })), r
                    };
                if (Ye || (It = function() {
                        if (this instanceof It) throw TypeError("Symbol is not a constructor");
                        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                            t = ae(e),
                            n = function(e) {
                                this === At && n.call(Bt, e), H(this, Et) && H(this[Et], t) && (this[Et][t] = !1), Yt(this, t, I(1, e))
                            };
                        return r && Ut && Yt(At, t, {
                            configurable: !0,
                            set: n
                        }), Gt(t, e)
                    }, ve(It.prototype, "toString", (function() {
                        return Mt(this).tag
                    })), ve(It, "withoutSetter", (function(e) {
                        return Gt(ae(e), e)
                    })), A.f = Jt, T.f = Xt, V.f = Qt, Le.f = st.f = Zt, je.f = en, ht.f = function(e) {
                        return Gt(pt(e), e)
                    }, r && (zt(It.prototype, "description", {
                        configurable: !0,
                        get: function() {
                            return Mt(this).description
                        }
                    }), ve(At, "propertyIsEnumerable", Jt, {
                        unsafe: !0
                    }))), Ue({
                        global: !0,
                        wrap: !0,
                        forced: !Ye,
                        sham: !Ye
                    }, {
                        Symbol: It
                    }), Ct(Ke(qt), (function(e) {
                        mt(e)
                    })), Ue({
                        target: Pt,
                        stat: !0,
                        forced: !Ye
                    }, {
                        for: function(e) {
                            var t = String(e);
                            if (H(Ht, t)) return Ht[t];
                            var symbol = It(t);
                            return Ht[t] = symbol, Ft[symbol] = t, symbol
                        },
                        keyFor: function(e) {
                            if (!Wt(e)) throw TypeError(e + " is not a symbol");
                            if (H(Ft, e)) return Ft[e]
                        },
                        useSetter: function() {
                            Ut = !0
                        },
                        useSimple: function() {
                            Ut = !1
                        }
                    }), Ue({
                        target: "Object",
                        stat: !0,
                        forced: !Ye,
                        sham: !r
                    }, {
                        create: function(e, t) {
                            return void 0 === t ? nt(e) : Kt(nt(e), t)
                        },
                        defineProperty: Xt,
                        defineProperties: Kt,
                        getOwnPropertyDescriptor: Qt
                    }), Ue({
                        target: "Object",
                        stat: !0,
                        forced: !Ye
                    }, {
                        getOwnPropertyNames: Zt,
                        getOwnPropertySymbols: en
                    }), Ue({
                        target: "Object",
                        stat: !0,
                        forced: n((function() {
                            je.f(1)
                        }))
                    }, {
                        getOwnPropertySymbols: function(e) {
                            return je.f(Xe(e))
                        }
                    }), Lt) {
                    var tn = !Ye || n((function() {
                        var symbol = It();
                        return "[null]" != Lt([symbol]) || "{}" != Lt({
                            a: symbol
                        }) || "{}" != Lt(Object(symbol))
                    }));
                    Ue({
                        target: "JSON",
                        stat: !0,
                        forced: tn
                    }, {
                        stringify: function(e, t, n) {
                            for (var r, o = [e], l = 1; arguments.length > l;) o.push(arguments[l++]);
                            if (r = t, (h(t) || void 0 !== e) && !Wt(e)) return We(t) || (t = function(e, t) {
                                if ("function" == typeof r && (t = r.call(this, e, t)), !Wt(t)) return t
                            }), o[1] = t, Lt.apply(null, o)
                        }
                    })
                }
                It.prototype[$t] || U(It.prototype, $t, It.prototype.valueOf), yt(It, Pt), le[Et] = !0;
                var nn, rn, an = be("navigator", "userAgent") || "",
                    on = d.process,
                    sn = on && on.versions,
                    ln = sn && sn.v8;
                ln ? rn = (nn = ln.split("."))[0] + nn[1] : an && (!(nn = an.match(/Edge\/(\d+)/)) || nn[1] >= 74) && (nn = an.match(/Chrome\/(\d+)/)) && (rn = nn[1]);
                var cn = rn && +rn,
                    un = pt("species"),
                    dn = function(e) {
                        return cn >= 51 || !n((function() {
                            var t = [];
                            return (t.constructor = {})[un] = function() {
                                return {
                                    foo: 1
                                }
                            }, 1 !== t[e](Boolean).foo
                        }))
                    },
                    pn = Object.defineProperty,
                    hn = {},
                    fn = function(e) {
                        throw e
                    },
                    mn = function(e, t) {
                        if (H(hn, e)) return hn[e];
                        t || (t = {});
                        var o = [][e],
                            l = !!H(t, "ACCESSORS") && t.ACCESSORS,
                            c = H(t, 0) ? t[0] : fn,
                            d = H(t, 1) ? t[1] : void 0;
                        return hn[e] = !!o && !n((function() {
                            if (l && !r) return !0;
                            var e = {
                                length: -1
                            };
                            l ? pn(e, 1, {
                                enumerable: !0,
                                get: fn
                            }) : e[1] = 1, o.call(e, c, d)
                        }))
                    },
                    gn = _t.filter,
                    vn = dn("filter"),
                    yn = mn("filter");
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !vn || !yn
                }, {
                    filter: function(e) {
                        return gn(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                });
                var bn = function(e, t) {
                        var r = [][e];
                        return !!r && n((function() {
                            r.call(null, t || function() {
                                throw 1
                            }, 1)
                        }))
                    },
                    wn = _t.forEach,
                    xn = bn("forEach"),
                    kn = mn("forEach"),
                    Tn = xn && kn ? [].forEach : function(e) {
                        return wn(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    };
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: [].forEach != Tn
                }, {
                    forEach: Tn
                });
                var Sn = V.f,
                    _n = n((function() {
                        Sn(1)
                    }));
                Ue({
                    target: "Object",
                    stat: !0,
                    forced: !r || _n,
                    sham: !r
                }, {
                    getOwnPropertyDescriptor: function(e, t) {
                        return Sn(R(e), t)
                    }
                });
                var Cn = function(object, e, t) {
                    var n = x(e);
                    n in object ? T.f(object, n, I(0, t)) : object[n] = t
                };
                Ue({
                    target: "Object",
                    stat: !0,
                    sham: !r
                }, {
                    getOwnPropertyDescriptors: function(object) {
                        for (var e, t, n = R(object), r = V.f, o = ze(n), l = {}, c = 0; o.length > c;) void 0 !== (t = r(n, e = o[c++])) && Cn(l, e, t);
                        return l
                    }
                });
                var En = n((function() {
                    Ke(1)
                }));
                Ue({
                    target: "Object",
                    stat: !0,
                    forced: En
                }, {
                    keys: function(e) {
                        return Ke(Xe(e))
                    }
                });
                var Pn = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                };
                for (var $n in Pn) {
                    var On = d[$n],
                        Mn = On && On.prototype;
                    if (Mn && Mn.forEach !== Tn) try {
                        U(Mn, "forEach", Tn)
                    } catch (e) {
                        Mn.forEach = Tn
                    }
                }

                function An(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function In(object, e) {
                    var t = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(object);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(object, e).enumerable
                        }))), t.push.apply(t, n)
                    }
                    return t
                }

                function Ln(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? In(Object(source), !0).forEach((function(t) {
                            An(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : In(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }
                var jn = T.f,
                    zn = d.Symbol;
                if (r && "function" == typeof zn && (!("description" in zn.prototype) || void 0 !== zn().description)) {
                    var Nn = {},
                        Dn = function() {
                            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                                t = this instanceof Dn ? new zn(e) : void 0 === e ? zn() : zn(e);
                            return "" === e && (Nn[t] = !0), t
                        };
                    Ne(Dn, zn);
                    var Rn = Dn.prototype = zn.prototype;
                    Rn.constructor = Dn;
                    var Bn = Rn.toString,
                        Hn = "Symbol(test)" == String(zn("test")),
                        Fn = /^Symbol\((.*)\)[^)]+$/;
                    jn(Rn, "description", {
                        configurable: !0,
                        get: function() {
                            var symbol = h(this) ? this.valueOf() : this,
                                e = Bn.call(symbol);
                            if (H(Nn, symbol)) return "";
                            var desc = Hn ? e.slice(7, -1) : e.replace(Fn, "$1");
                            return "" === desc ? void 0 : desc
                        }
                    }), Ue({
                        global: !0,
                        forced: !0
                    }, {
                        Symbol: Dn
                    })
                }
                mt("iterator");
                var qn = pt("isConcatSpreadable"),
                    Vn = 9007199254740991,
                    Un = "Maximum allowed index exceeded",
                    Yn = cn >= 51 || !n((function() {
                        var e = [];
                        return e[qn] = !1, e.concat()[0] !== e
                    })),
                    Gn = dn("concat"),
                    Wn = function(e) {
                        if (!h(e)) return !1;
                        var t = e[qn];
                        return void 0 !== t ? !!t : We(e)
                    };
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !Yn || !Gn
                }, {
                    concat: function(e) {
                        var i, t, n, r, o, l = Xe(this),
                            c = kt(l, 0),
                            d = 0;
                        for (i = -1, n = arguments.length; i < n; i++)
                            if (Wn(o = -1 === i ? l : arguments[i])) {
                                if (d + (r = Se(o.length)) > Vn) throw TypeError(Un);
                                for (t = 0; t < r; t++, d++) t in o && Cn(c, d, o[t])
                            } else {
                                if (d >= Vn) throw TypeError(Un);
                                Cn(c, d++, o)
                            }
                        return c.length = d, c
                    }
                });
                var Xn = _t.every,
                    Kn = bn("every"),
                    Jn = mn("every");
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !Kn || !Jn
                }, {
                    every: function(e) {
                        return Xn(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                });
                var Qn = pt("unscopables"),
                    Zn = Array.prototype;
                null == Zn[Qn] && T.f(Zn, Qn, {
                    configurable: !0,
                    value: nt(null)
                });
                var er = function(e) {
                        Zn[Qn][e] = !0
                    },
                    nr = _t.find,
                    rr = "find",
                    ir = !0,
                    ar = mn(rr);
                rr in [] && Array(1).find((function() {
                    ir = !1
                })), Ue({
                    target: "Array",
                    proto: !0,
                    forced: ir || !ar
                }, {
                    find: function(e) {
                        return nr(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), er(rr);
                var or = _t.findIndex,
                    sr = "findIndex",
                    lr = !0,
                    cr = mn(sr);
                sr in [] && Array(1).findIndex((function() {
                    lr = !1
                })), Ue({
                    target: "Array",
                    proto: !0,
                    forced: lr || !cr
                }, {
                    findIndex: function(e) {
                        return or(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), er(sr);
                var ur = function(e, t, n, r) {
                        try {
                            return r ? t(w(n)[0], n[1]) : t(n)
                        } catch (t) {
                            var o = e.return;
                            throw void 0 !== o && w(o.call(e)), t
                        }
                    },
                    dr = {},
                    pr = pt("iterator"),
                    fr = Array.prototype,
                    mr = function(e) {
                        return void 0 !== e && (dr.Array === e || fr[pr] === e)
                    },
                    gr = {};
                gr[pt("toStringTag")] = "z";
                var vr = "[object z]" === String(gr),
                    yr = pt("toStringTag"),
                    wr = "Arguments" == j(function() {
                        return arguments
                    }()),
                    xr = vr ? j : function(e) {
                        var t, n, r;
                        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                            try {
                                return e[t]
                            } catch (e) {}
                        }(t = Object(e), yr)) ? n : wr ? j(t) : "Object" == (r = j(t)) && "function" == typeof t.callee ? "Arguments" : r
                    },
                    kr = pt("iterator"),
                    Tr = function(e) {
                        if (null != e) return e[kr] || e["@@iterator"] || dr[xr(e)]
                    },
                    Sr = function(e) {
                        var t, n, r, o, l, c, d = Xe(e),
                            h = "function" == typeof this ? this : Array,
                            f = arguments.length,
                            m = f > 1 ? arguments[1] : void 0,
                            v = void 0 !== m,
                            y = Tr(d),
                            w = 0;
                        if (v && (m = wt(m, f > 2 ? arguments[2] : void 0, 2)), null == y || h == Array && mr(y))
                            for (n = new h(t = Se(d.length)); t > w; w++) c = v ? m(d[w], w) : d[w], Cn(n, w, c);
                        else
                            for (l = (o = y.call(d)).next, n = new h; !(r = l.call(o)).done; w++) c = v ? ur(o, m, [r.value, w], !0) : r.value, Cn(n, w, c);
                        return n.length = w, n
                    },
                    _r = pt("iterator"),
                    Cr = !1;
                try {
                    var Er = 0,
                        Pr = {
                            next: function() {
                                return {
                                    done: !!Er++
                                }
                            },
                            return: function() {
                                Cr = !0
                            }
                        };
                    Pr[_r] = function() {
                        return this
                    }, Array.from(Pr, (function() {
                        throw 2
                    }))
                } catch (e) {}
                var $r = function(e, t) {
                        if (!t && !Cr) return !1;
                        var n = !1;
                        try {
                            var object = {};
                            object[_r] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: n = !0
                                        }
                                    }
                                }
                            }, e(object)
                        } catch (e) {}
                        return n
                    },
                    Or = !$r((function(e) {
                        Array.from(e)
                    }));
                Ue({
                    target: "Array",
                    stat: !0,
                    forced: Or
                }, {
                    from: Sr
                });
                var Mr = $e.includes,
                    Ar = mn("indexOf", {
                        ACCESSORS: !0,
                        1: 0
                    });
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !Ar
                }, {
                    includes: function(e) {
                        return Mr(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), er("includes");
                var Ir = $e.indexOf,
                    Lr = [].indexOf,
                    jr = !!Lr && 1 / [1].indexOf(1, -0) < 0,
                    zr = bn("indexOf"),
                    Nr = mn("indexOf", {
                        ACCESSORS: !0,
                        1: 0
                    });
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: jr || !zr || !Nr
                }, {
                    indexOf: function(e) {
                        return jr ? Lr.apply(this, arguments) || 0 : Ir(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                });
                var Dr = [].join,
                    Rr = N != Object,
                    Br = bn("join", ",");
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: Rr || !Br
                }, {
                    join: function(e) {
                        return Dr.call(R(this), void 0 === e ? "," : e)
                    }
                });
                var Hr = Math.min,
                    Fr = [].lastIndexOf,
                    qr = !!Fr && 1 / [1].lastIndexOf(1, -0) < 0,
                    Vr = bn("lastIndexOf"),
                    Ur = mn("indexOf", {
                        ACCESSORS: !0,
                        1: 0
                    }),
                    Yr = qr || !Vr || !Ur ? function(e) {
                        if (qr) return Fr.apply(this, arguments) || 0;
                        var t = R(this),
                            n = Se(t.length),
                            r = n - 1;
                        for (arguments.length > 1 && (r = Hr(r, ke(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                            if (r in t && t[r] === e) return r || 0;
                        return -1
                    } : Fr;
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: Yr !== [].lastIndexOf
                }, {
                    lastIndexOf: Yr
                });
                var Gr = _t.map,
                    Wr = dn("map"),
                    Xr = mn("map");
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !Wr || !Xr
                }, {
                    map: function(e) {
                        return Gr(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                });
                var Kr = function(e) {
                        return function(t, n, r, o) {
                            bt(n);
                            var l = Xe(t),
                                c = N(l),
                                d = Se(l.length),
                                h = e ? d - 1 : 0,
                                i = e ? -1 : 1;
                            if (r < 2)
                                for (;;) {
                                    if (h in c) {
                                        o = c[h], h += i;
                                        break
                                    }
                                    if (h += i, e ? h < 0 : d <= h) throw TypeError("Reduce of empty array with no initial value")
                                }
                            for (; e ? h >= 0 : d > h; h += i) h in c && (o = n(o, c[h], h, l));
                            return o
                        }
                    },
                    Jr = {
                        left: Kr(!1),
                        right: Kr(!0)
                    }.left,
                    Qr = bn("reduce"),
                    Zr = mn("reduce", {
                        1: 0
                    });
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !Qr || !Zr
                }, {
                    reduce: function(e) {
                        return Jr(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
                    }
                });
                var ei = dn("slice"),
                    ti = mn("slice", {
                        ACCESSORS: !0,
                        0: 0,
                        1: 2
                    }),
                    ni = pt("species"),
                    ri = [].slice,
                    ii = Math.max;
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !ei || !ti
                }, {
                    slice: function(e, t) {
                        var n, r, o, l = R(this),
                            c = Se(l.length),
                            d = Ee(e, c),
                            f = Ee(void 0 === t ? c : t, c);
                        if (We(l) && ("function" != typeof(n = l.constructor) || n !== Array && !We(n.prototype) ? h(n) && null === (n = n[ni]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return ri.call(l, d, f);
                        for (r = new(void 0 === n ? Array : n)(ii(f - d, 0)), o = 0; d < f; d++, o++) d in l && Cn(r, o, l[d]);
                        return r.length = o, r
                    }
                });
                var ai = _t.some,
                    oi = bn("some"),
                    si = mn("some");
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !oi || !si
                }, {
                    some: function(e) {
                        return ai(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                });
                var ci = dn("splice"),
                    ui = mn("splice", {
                        ACCESSORS: !0,
                        0: 0,
                        1: 2
                    }),
                    di = Math.max,
                    pi = Math.min,
                    hi = 9007199254740991,
                    fi = "Maximum allowed length exceeded";
                Ue({
                    target: "Array",
                    proto: !0,
                    forced: !ci || !ui
                }, {
                    splice: function(e, t) {
                        var n, r, o, l, c, d, h = Xe(this),
                            f = Se(h.length),
                            m = Ee(e, f),
                            v = arguments.length;
                        if (0 === v ? n = r = 0 : 1 === v ? (n = 0, r = f - m) : (n = v - 2, r = pi(di(ke(t), 0), f - m)), f + n - r > hi) throw TypeError(fi);
                        for (o = kt(h, r), l = 0; l < r; l++)(c = m + l) in h && Cn(o, l, h[c]);
                        if (o.length = r, n < r) {
                            for (l = m; l < f - r; l++) d = l + n, (c = l + r) in h ? h[d] = h[c] : delete h[d];
                            for (l = f; l > f - r + n; l--) delete h[l - 1]
                        } else if (n > r)
                            for (l = f - r; l > m; l--) d = l + n - 1, (c = l + r - 1) in h ? h[d] = h[c] : delete h[d];
                        for (l = 0; l < n; l++) h[l + m] = arguments[l + 2];
                        return h.length = f - r + n, o
                    }
                }), Ue({
                    global: !0
                }, {
                    globalThis: d
                });
                var mi = Math.sign || function(e) {
                    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
                };
                Ue({
                    target: "Math",
                    stat: !0
                }, {
                    sign: mi
                });
                var gi = Math.ceil,
                    vi = Math.floor;
                Ue({
                    target: "Math",
                    stat: !0
                }, {
                    trunc: function(e) {
                        return (e > 0 ? vi : gi)(e)
                    }
                });
                var yi = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                        var e, t = !1,
                            n = {};
                        try {
                            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
                        } catch (e) {}
                        return function(n, r) {
                            return w(n),
                                function(e) {
                                    if (!h(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                                }(r), t ? e.call(n, r) : n.__proto__ = r, n
                        }
                    }() : void 0),
                    bi = function(e, t, n) {
                        var r, o;
                        return yi && "function" == typeof(r = t.constructor) && r !== n && h(o = r.prototype) && o !== n.prototype && yi(e, o), e
                    },
                    wi = "\t\n\v\f\r                　\u2028\u2029\ufeff",
                    xi = "[" + wi + "]",
                    ki = RegExp("^" + xi + xi + "*"),
                    Ti = RegExp(xi + xi + "*$"),
                    Si = function(e) {
                        return function(t) {
                            var n = String(D(t));
                            return 1 & e && (n = n.replace(ki, "")), 2 & e && (n = n.replace(Ti, "")), n
                        }
                    },
                    _i = {
                        start: Si(1),
                        end: Si(2),
                        trim: Si(3)
                    },
                    Ci = Le.f,
                    Ei = V.f,
                    Pi = T.f,
                    $i = _i.trim,
                    Oi = "Number",
                    Mi = d.Number,
                    Ai = Mi.prototype,
                    Ii = j(nt(Ai)) == Oi,
                    Li = function(e) {
                        var t, n, r, o, l, c, d, code, h = x(e, !1);
                        if ("string" == typeof h && h.length > 2)
                            if (43 === (t = (h = $i(h)).charCodeAt(0)) || 45 === t) {
                                if (88 === (n = h.charCodeAt(2)) || 120 === n) return NaN
                            } else if (48 === t) {
                            switch (h.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    r = 2, o = 49;
                                    break;
                                case 79:
                                case 111:
                                    r = 8, o = 55;
                                    break;
                                default:
                                    return +h
                            }
                            for (c = (l = h.slice(2)).length, d = 0; d < c; d++)
                                if ((code = l.charCodeAt(d)) < 48 || code > o) return NaN;
                            return parseInt(l, r)
                        }
                        return +h
                    };
                if (qe(Oi, !Mi(" 0o1") || !Mi("0b1") || Mi("+0x1"))) {
                    for (var ji, zi = function(e) {
                            var t = arguments.length < 1 ? 0 : e,
                                r = this;
                            return r instanceof zi && (Ii ? n((function() {
                                Ai.valueOf.call(r)
                            })) : j(r) != Oi) ? bi(new Mi(Li(t)), r, zi) : Li(t)
                        }, Ni = r ? Ci(Mi) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Di = 0; Ni.length > Di; Di++) H(Mi, ji = Ni[Di]) && !H(zi, ji) && Pi(zi, ji, Ei(Mi, ji));
                    zi.prototype = Ai, Ai.constructor = zi, ve(d, Oi, zi)
                }
                Ue({
                    target: "Number",
                    stat: !0
                }, {
                    isNaN: function(e) {
                        return e != e
                    }
                });
                var Ri = "".repeat || function(e) {
                        var t = String(D(this)),
                            n = "",
                            r = ke(e);
                        if (r < 0 || r == 1 / 0) throw RangeError("Wrong number of repetitions");
                        for (; r > 0;
                            (r >>>= 1) && (t += t)) 1 & r && (n += t);
                        return n
                    },
                    Bi = 1..toFixed,
                    Hi = Math.floor,
                    Fi = function(e, t, n) {
                        return 0 === t ? n : t % 2 == 1 ? Fi(e, t - 1, n * e) : Fi(e * e, t / 2, n)
                    },
                    qi = Bi && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n((function() {
                        Bi.call({})
                    }));
                Ue({
                    target: "Number",
                    proto: !0,
                    forced: qi
                }, {
                    toFixed: function(e) {
                        var t, n, r, o, l = function(e) {
                                if ("number" != typeof e && "Number" != j(e)) throw TypeError("Incorrect invocation");
                                return +e
                            }(this),
                            c = ke(e),
                            data = [0, 0, 0, 0, 0, 0],
                            d = "",
                            h = "0",
                            f = function(e, t) {
                                for (var n = -1, r = t; ++n < 6;) r += e * data[n], data[n] = r % 1e7, r = Hi(r / 1e7)
                            },
                            m = function(e) {
                                for (var t = 6, n = 0; --t >= 0;) n += data[t], data[t] = Hi(n / e), n = n % e * 1e7
                            },
                            v = function() {
                                for (var e = 6, s = ""; --e >= 0;)
                                    if ("" !== s || 0 === e || 0 !== data[e]) {
                                        var t = String(data[e]);
                                        s = "" === s ? t : s + Ri.call("0", 7 - t.length) + t
                                    }
                                return s
                            };
                        if (c < 0 || c > 20) throw RangeError("Incorrect fraction digits");
                        if (l != l) return "NaN";
                        if (l <= -1e21 || l >= 1e21) return String(l);
                        if (l < 0 && (d = "-", l = -l), l > 1e-21)
                            if (n = (t = function(e) {
                                    for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                                    for (; n >= 2;) t += 1, n /= 2;
                                    return t
                                }(l * Fi(2, 69, 1)) - 69) < 0 ? l * Fi(2, -t, 1) : l / Fi(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
                                for (f(0, n), r = c; r >= 7;) f(1e7, 0), r -= 7;
                                for (f(Fi(10, r, 1), 0), r = t - 1; r >= 23;) m(1 << 23), r -= 23;
                                m(1 << r), f(1, 1), m(2), h = v()
                            } else f(0, n), f(1 << -t, 0), h = v() + Ri.call("0", c);
                        return h = c > 0 ? d + ((o = h.length) <= c ? "0." + Ri.call("0", c - o) + h : h.slice(0, o - c) + "." + h.slice(o - c)) : d + h
                    }
                });
                var Vi = A.f,
                    Ui = function(e) {
                        return function(t) {
                            for (var n, o = R(t), l = Ke(o), c = l.length, i = 0, d = []; c > i;) n = l[i++], r && !Vi.call(o, n) || d.push(e ? [n, o[n]] : o[n]);
                            return d
                        }
                    },
                    Yi = {
                        entries: Ui(!0),
                        values: Ui(!1)
                    },
                    Gi = Yi.entries;
                Ue({
                    target: "Object",
                    stat: !0
                }, {
                    entries: function(e) {
                        return Gi(e)
                    }
                });
                var Wi = vr ? {}.toString : function() {
                    return "[object " + xr(this) + "]"
                };
                vr || ve(Object.prototype, "toString", Wi, {
                    unsafe: !0
                });
                var Xi = Yi.values;
                Ue({
                    target: "Object",
                    stat: !0
                }, {
                    values: function(e) {
                        return Xi(e)
                    }
                });
                var Ki = pt("match"),
                    Ji = function(e) {
                        var t;
                        return h(e) && (void 0 !== (t = e[Ki]) ? !!t : "RegExp" == j(e))
                    },
                    Qi = function() {
                        var e = w(this),
                            t = "";
                        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
                    };

                function Zi(s, e) {
                    return RegExp(s, e)
                }
                var ea = {
                        UNSUPPORTED_Y: n((function() {
                            var e = Zi("a", "y");
                            return e.lastIndex = 2, null != e.exec("abcd")
                        })),
                        BROKEN_CARET: n((function() {
                            var e = Zi("^r", "gy");
                            return e.lastIndex = 2, null != e.exec("str")
                        }))
                    },
                    ta = pt("species"),
                    na = T.f,
                    ra = Le.f,
                    ia = ge.set,
                    aa = pt("match"),
                    oa = d.RegExp,
                    sa = oa.prototype,
                    la = /a/g,
                    ca = /a/g,
                    ua = new oa(la) !== la,
                    da = ea.UNSUPPORTED_Y;
                if (r && qe("RegExp", !ua || da || n((function() {
                        return ca[aa] = !1, oa(la) != la || oa(ca) == ca || "/a/i" != oa(la, "i")
                    })))) {
                    for (var pa = function(pattern, e) {
                            var t, n = this instanceof pa,
                                r = Ji(pattern),
                                o = void 0 === e;
                            if (!n && r && pattern.constructor === pa && o) return pattern;
                            ua ? r && !o && (pattern = pattern.source) : pattern instanceof pa && (o && (e = Qi.call(pattern)), pattern = pattern.source), da && (t = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""));
                            var l = bi(ua ? new oa(pattern, e) : oa(pattern, e), n ? this : sa, pa);
                            return da && t && ia(l, {
                                sticky: t
                            }), l
                        }, ha = function(e) {
                            e in pa || na(pa, e, {
                                configurable: !0,
                                get: function() {
                                    return oa[e]
                                },
                                set: function(t) {
                                    oa[e] = t
                                }
                            })
                        }, fa = ra(oa), ma = 0; fa.length > ma;) ha(fa[ma++]);
                    sa.constructor = pa, pa.prototype = sa, ve(d, "RegExp", pa)
                }! function(e) {
                    var t = be(e),
                        n = T.f;
                    r && t && !t[ta] && n(t, ta, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }("RegExp");
                var ga = RegExp.prototype.exec,
                    va = String.prototype.replace,
                    ya = ga,
                    ba = function() {
                        var e = /a/,
                            t = /b*/g;
                        return ga.call(e, "a"), ga.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
                    }(),
                    wa = ea.UNSUPPORTED_Y || ea.BROKEN_CARET,
                    xa = void 0 !== /()??/.exec("")[1];
                (ba || xa || wa) && (ya = function(e) {
                    var t, n, r, i, o = this,
                        l = wa && o.sticky,
                        c = Qi.call(o),
                        source = o.source,
                        d = 0,
                        h = e;
                    return l && (-1 === (c = c.replace("y", "")).indexOf("g") && (c += "g"), h = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (source = "(?: " + source + ")", h = " " + h, d++), n = new RegExp("^(?:" + source + ")", c)), xa && (n = new RegExp("^" + source + "$(?!\\s)", c)), ba && (t = o.lastIndex), r = ga.call(l ? n : o, h), l ? r ? (r.input = r.input.slice(d), r[0] = r[0].slice(d), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : ba && r && (o.lastIndex = o.global ? r.index + r[0].length : t), xa && r && r.length > 1 && va.call(r[0], n, (function() {
                        for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
                    })), r
                });
                var ka = ya;
                Ue({
                    target: "RegExp",
                    proto: !0,
                    forced: /./.exec !== ka
                }, {
                    exec: ka
                });
                var Ta = "toString",
                    Sa = RegExp.prototype,
                    _a = Sa.toString,
                    Ca = n((function() {
                        return "/a/b" != _a.call({
                            source: "a",
                            flags: "b"
                        })
                    })),
                    Ea = _a.name != Ta;
                (Ca || Ea) && ve(RegExp.prototype, Ta, (function() {
                    var e = w(this),
                        p = String(e.source),
                        t = e.flags;
                    return "/" + p + "/" + String(void 0 === t && e instanceof RegExp && !("flags" in Sa) ? Qi.call(e) : t)
                }), {
                    unsafe: !0
                });
                var Pa = function(e) {
                        if (Ji(e)) throw TypeError("The method doesn't accept regular expressions");
                        return e
                    },
                    $a = pt("match"),
                    Oa = function(e) {
                        var t = /./;
                        try {
                            "/./" [e](t)
                        } catch (n) {
                            try {
                                return t[$a] = !1, "/./" [e](t)
                            } catch (e) {}
                        }
                        return !1
                    };
                Ue({
                    target: "String",
                    proto: !0,
                    forced: !Oa("includes")
                }, {
                    includes: function(e) {
                        return !!~String(D(this)).indexOf(Pa(e), arguments.length > 1 ? arguments[1] : void 0)
                    }
                });
                var Ma, Aa, Ia, La = function(e) {
                        return function(t, n) {
                            var r, o, l = String(D(t)),
                                c = ke(n),
                                d = l.length;
                            return c < 0 || c >= d ? e ? "" : void 0 : (r = l.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === d || (o = l.charCodeAt(c + 1)) < 56320 || o > 57343 ? e ? l.charAt(c) : r : e ? l.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536
                        }
                    },
                    ja = {
                        codeAt: La(!1),
                        charAt: La(!0)
                    },
                    za = !n((function() {
                        function e() {}
                        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                    })),
                    Na = se("IE_PROTO"),
                    Da = Object.prototype,
                    Ra = za ? Object.getPrototypeOf : function(e) {
                        return e = Xe(e), H(e, Na) ? e[Na] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Da : null
                    },
                    Ba = pt("iterator"),
                    Ha = !1;
                [].keys && ("next" in (Ia = [].keys()) ? (Aa = Ra(Ra(Ia))) !== Object.prototype && (Ma = Aa) : Ha = !0), null == Ma && (Ma = {}), H(Ma, Ba) || U(Ma, Ba, (function() {
                    return this
                }));
                var Fa = {
                        IteratorPrototype: Ma,
                        BUGGY_SAFARI_ITERATORS: Ha
                    },
                    qa = Fa.IteratorPrototype,
                    Va = function() {
                        return this
                    },
                    Ua = function(e, t, n) {
                        var r = t + " Iterator";
                        return e.prototype = nt(qa, {
                            next: I(1, n)
                        }), yt(e, r, !1), dr[r] = Va, e
                    },
                    Ya = Fa.IteratorPrototype,
                    Ga = Fa.BUGGY_SAFARI_ITERATORS,
                    Wa = pt("iterator"),
                    Xa = "keys",
                    Ka = "values",
                    Ja = "entries",
                    Qa = function() {
                        return this
                    },
                    Za = function(e, t, n, r, o, l, c) {
                        Ua(n, t, r);
                        var d, h, f, m = function(e) {
                                if (e === o && k) return k;
                                if (!Ga && e in w) return w[e];
                                switch (e) {
                                    case Xa:
                                    case Ka:
                                    case Ja:
                                        return function() {
                                            return new n(this, e)
                                        }
                                }
                                return function() {
                                    return new n(this)
                                }
                            },
                            v = t + " Iterator",
                            y = !1,
                            w = e.prototype,
                            x = w[Wa] || w["@@iterator"] || o && w[o],
                            k = !Ga && x || m(o),
                            T = "Array" == t && w.entries || x;
                        if (T && (d = Ra(T.call(new e)), Ya !== Object.prototype && d.next && (Ra(d) !== Ya && (yi ? yi(d, Ya) : "function" != typeof d[Wa] && U(d, Wa, Qa)), yt(d, v, !0))), o == Ka && x && x.name !== Ka && (y = !0, k = function() {
                                return x.call(this)
                            }), w[Wa] !== k && U(w, Wa, k), dr[t] = k, o)
                            if (h = {
                                    values: m(Ka),
                                    keys: l ? k : m(Xa),
                                    entries: m(Ja)
                                }, c)
                                for (f in h)(Ga || y || !(f in w)) && ve(w, f, h[f]);
                            else Ue({
                                target: t,
                                proto: !0,
                                forced: Ga || y
                            }, h);
                        return h
                    },
                    eo = ja.charAt,
                    to = "String Iterator",
                    no = ge.set,
                    ro = ge.getterFor(to);
                Za(String, "String", (function(e) {
                    no(this, {
                        type: to,
                        string: String(e),
                        index: 0
                    })
                }), (function() {
                    var e, t = ro(this),
                        n = t.string,
                        r = t.index;
                    return r >= n.length ? {
                        value: void 0,
                        done: !0
                    } : (e = eo(n, r), t.index += e.length, {
                        value: e,
                        done: !1
                    })
                }));
                var io = pt("species"),
                    ao = !n((function() {
                        var e = /./;
                        return e.exec = function() {
                            var e = [];
                            return e.groups = {
                                a: "7"
                            }, e
                        }, "7" !== "".replace(e, "$<a>")
                    })),
                    oo = "$0" === "a".replace(/./, "$0"),
                    so = pt("replace"),
                    lo = !!/./ [so] && "" === /./ [so]("a", "$0"),
                    co = !n((function() {
                        var e = /(?:)/,
                            t = e.exec;
                        e.exec = function() {
                            return t.apply(this, arguments)
                        };
                        var n = "ab".split(e);
                        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
                    })),
                    uo = function(e, t, r, o) {
                        var l = pt(e),
                            c = !n((function() {
                                var t = {};
                                return t[l] = function() {
                                    return 7
                                }, 7 != "" [e](t)
                            })),
                            d = c && !n((function() {
                                var t = !1,
                                    n = /a/;
                                return "split" === e && ((n = {}).constructor = {}, n.constructor[io] = function() {
                                    return n
                                }, n.flags = "", n[l] = /./ [l]), n.exec = function() {
                                    return t = !0, null
                                }, n[l](""), !t
                            }));
                        if (!c || !d || "replace" === e && (!ao || !oo || lo) || "split" === e && !co) {
                            var h = /./ [l],
                                f = r(l, "" [e], (function(e, t, n, r, o) {
                                    return t.exec === ka ? c && !o ? {
                                        done: !0,
                                        value: h.call(t, n, r)
                                    } : {
                                        done: !0,
                                        value: e.call(n, t, r)
                                    } : {
                                        done: !1
                                    }
                                }), {
                                    REPLACE_KEEPS_$0: oo,
                                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: lo
                                }),
                                m = f[0],
                                v = f[1];
                            ve(String.prototype, e, m), ve(RegExp.prototype, l, 2 == t ? function(e, t) {
                                return v.call(e, this, t)
                            } : function(e) {
                                return v.call(e, this)
                            })
                        }
                        o && U(RegExp.prototype[l], "sham", !0)
                    },
                    po = ja.charAt,
                    ho = function(e, t, n) {
                        return t + (n ? po(e, t).length : 1)
                    },
                    fo = function(e, t) {
                        var n = e.exec;
                        if ("function" == typeof n) {
                            var r = n.call(e, t);
                            if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
                            return r
                        }
                        if ("RegExp" !== j(e)) throw TypeError("RegExp#exec called on incompatible receiver");
                        return ka.call(e, t)
                    };
                uo("match", 1, (function(e, t, n) {
                    return [function(t) {
                        var n = D(this),
                            r = null == t ? void 0 : t[e];
                        return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
                    }, function(e) {
                        var r = n(t, e, this);
                        if (r.done) return r.value;
                        var o = w(e),
                            l = String(this);
                        if (!o.global) return fo(o, l);
                        var c = o.unicode;
                        o.lastIndex = 0;
                        for (var d, h = [], f = 0; null !== (d = fo(o, l));) {
                            var m = String(d[0]);
                            h[f] = m, "" === m && (o.lastIndex = ho(l, Se(o.lastIndex), c)), f++
                        }
                        return 0 === f ? null : h
                    }]
                }));
                var mo = Math.max,
                    go = Math.min,
                    vo = Math.floor,
                    yo = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                    bo = /\$([$&'`]|\d\d?)/g;
                uo("replace", 2, (function(e, t, n, r) {
                    var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                        l = r.REPLACE_KEEPS_$0,
                        c = o ? "$" : "$0";
                    return [function(n, r) {
                        var o = D(this),
                            l = null == n ? void 0 : n[e];
                        return void 0 !== l ? l.call(n, o, r) : t.call(String(o), n, r)
                    }, function(e, r) {
                        if (!o && l || "string" == typeof r && -1 === r.indexOf(c)) {
                            var h = n(t, e, this, r);
                            if (h.done) return h.value
                        }
                        var f = w(e),
                            m = String(this),
                            v = "function" == typeof r;
                        v || (r = String(r));
                        var y = f.global;
                        if (y) {
                            var x = f.unicode;
                            f.lastIndex = 0
                        }
                        for (var k = [];;) {
                            var T = fo(f, m);
                            if (null === T) break;
                            if (k.push(T), !y) break;
                            "" === String(T[0]) && (f.lastIndex = ho(m, Se(f.lastIndex), x))
                        }
                        for (var S, _ = "", C = 0, i = 0; i < k.length; i++) {
                            T = k[i];
                            for (var E = String(T[0]), P = mo(go(ke(T.index), m.length), 0), $ = [], O = 1; O < T.length; O++) $.push(void 0 === (S = T[O]) ? S : String(S));
                            var M = T.groups;
                            if (v) {
                                var A = [E].concat($, P, m);
                                void 0 !== M && A.push(M);
                                var I = String(r.apply(void 0, A))
                            } else I = d(E, m, P, $, M, r);
                            P >= C && (_ += m.slice(C, P) + I, C = P + E.length)
                        }
                        return _ + m.slice(C)
                    }];

                    function d(e, n, r, o, l, c) {
                        var d = r + e.length,
                            h = o.length,
                            f = bo;
                        return void 0 !== l && (l = Xe(l), f = yo), t.call(c, f, (function(t, c) {
                            var f;
                            switch (c.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return e;
                                case "`":
                                    return n.slice(0, r);
                                case "'":
                                    return n.slice(d);
                                case "<":
                                    f = l[c.slice(1, -1)];
                                    break;
                                default:
                                    var m = +c;
                                    if (0 === m) return t;
                                    if (m > h) {
                                        var v = vo(m / 10);
                                        return 0 === v ? t : v <= h ? void 0 === o[v - 1] ? c.charAt(1) : o[v - 1] + c.charAt(1) : t
                                    }
                                    f = o[m - 1]
                            }
                            return void 0 === f ? "" : f
                        }))
                    }
                }));
                var wo = Object.is || function(e, t) {
                    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
                };
                uo("search", 1, (function(e, t, n) {
                    return [function(t) {
                        var n = D(this),
                            r = null == t ? void 0 : t[e];
                        return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
                    }, function(e) {
                        var r = n(t, e, this);
                        if (r.done) return r.value;
                        var o = w(e),
                            l = String(this),
                            c = o.lastIndex;
                        wo(c, 0) || (o.lastIndex = 0);
                        var d = fo(o, l);
                        return wo(o.lastIndex, c) || (o.lastIndex = c), null === d ? -1 : d.index
                    }]
                }));
                var xo = pt("species"),
                    ko = [].push,
                    To = Math.min,
                    So = 4294967295,
                    _o = !n((function() {
                        return !RegExp(So, "y")
                    }));
                uo("split", 2, (function(e, t, n) {
                    var r;
                    return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
                        var r = String(D(this)),
                            o = void 0 === n ? So : n >>> 0;
                        if (0 === o) return [];
                        if (void 0 === e) return [r];
                        if (!Ji(e)) return t.call(r, e, o);
                        for (var l, c, d, output = [], h = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, m = new RegExp(e.source, h + "g");
                            (l = ka.call(m, r)) && !((c = m.lastIndex) > f && (output.push(r.slice(f, l.index)), l.length > 1 && l.index < r.length && ko.apply(output, l.slice(1)), d = l[0].length, f = c, output.length >= o));) m.lastIndex === l.index && m.lastIndex++;
                        return f === r.length ? !d && m.test("") || output.push("") : output.push(r.slice(f)), output.length > o ? output.slice(0, o) : output
                    } : "0".split(void 0, 0).length ? function(e, n) {
                        return void 0 === e && 0 === n ? [] : t.call(this, e, n)
                    } : t, [function(t, n) {
                        var o = D(this),
                            l = null == t ? void 0 : t[e];
                        return void 0 !== l ? l.call(t, o, n) : r.call(String(o), t, n)
                    }, function(e, o) {
                        var l = n(r, e, this, o, r !== t);
                        if (l.done) return l.value;
                        var c = w(e),
                            d = String(this),
                            h = function(e, t) {
                                var n, r = w(e).constructor;
                                return void 0 === r || null == (n = w(r)[xo]) ? t : bt(n)
                            }(c, RegExp),
                            f = c.unicode,
                            m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (_o ? "y" : "g"),
                            v = new h(_o ? c : "^(?:" + c.source + ")", m),
                            y = void 0 === o ? So : o >>> 0;
                        if (0 === y) return [];
                        if (0 === d.length) return null === fo(v, d) ? [d] : [];
                        for (var p = 0, q = 0, x = []; q < d.length;) {
                            v.lastIndex = _o ? q : 0;
                            var k, T = fo(v, _o ? d : d.slice(q));
                            if (null === T || (k = To(Se(v.lastIndex + (_o ? 0 : q)), d.length)) === p) q = ho(d, q, f);
                            else {
                                if (x.push(d.slice(p, q)), x.length === y) return x;
                                for (var i = 1; i <= T.length - 1; i++)
                                    if (x.push(T[i]), x.length === y) return x;
                                q = p = k
                            }
                        }
                        return x.push(d.slice(p)), x
                    }]
                }), !_o);
                var Co, Eo = V.f,
                    Po = "".startsWith,
                    $o = Math.min,
                    Oo = Oa("startsWith"),
                    Mo = !(Oo || (Co = Eo(String.prototype, "startsWith"), !Co || Co.writable));
                Ue({
                    target: "String",
                    proto: !0,
                    forced: !Mo && !Oo
                }, {
                    startsWith: function(e) {
                        var t = String(D(this));
                        Pa(e);
                        var n = Se($o(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                            r = String(e);
                        return Po ? Po.call(t, r, n) : t.slice(n, n + r.length) === r
                    }
                });
                var Ao = _i.trim;
                Ue({
                    target: "String",
                    proto: !0,
                    forced: function(e) {
                        return n((function() {
                            return !!wi[e]() || "​᠎" != "​᠎" [e]() || wi[e].name !== e
                        }))
                    }("trim")
                }, {
                    trim: function() {
                        return Ao(this)
                    }
                });
                var Io = function(e, t, n) {
                        for (var r in t) ve(e, r, t[r], n);
                        return e
                    },
                    Lo = !n((function() {
                        return Object.isExtensible(Object.preventExtensions({}))
                    })),
                    jo = l((function(e) {
                        var t = T.f,
                            n = ae("meta"),
                            r = 0,
                            o = Object.isExtensible || function() {
                                return !0
                            },
                            l = function(e) {
                                t(e, n, {
                                    value: {
                                        objectID: "O" + ++r,
                                        weakData: {}
                                    }
                                })
                            },
                            meta = e.exports = {
                                REQUIRED: !1,
                                fastKey: function(e, t) {
                                    if (!h(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                                    if (!H(e, n)) {
                                        if (!o(e)) return "F";
                                        if (!t) return "E";
                                        l(e)
                                    }
                                    return e[n].objectID
                                },
                                getWeakData: function(e, t) {
                                    if (!H(e, n)) {
                                        if (!o(e)) return !0;
                                        if (!t) return !1;
                                        l(e)
                                    }
                                    return e[n].weakData
                                },
                                onFreeze: function(e) {
                                    return Lo && meta.REQUIRED && o(e) && !H(e, n) && l(e), e
                                }
                            };
                        le[n] = !0
                    })),
                    zo = l((function(e) {
                        var t = function(e, t) {
                                this.stopped = e, this.result = t
                            },
                            n = e.exports = function(e, n, r, o, l) {
                                var c, d, h, f, m, v, y, x = wt(n, r, o ? 2 : 1);
                                if (l) c = e;
                                else {
                                    if ("function" != typeof(d = Tr(e))) throw TypeError("Target is not iterable");
                                    if (mr(d)) {
                                        for (h = 0, f = Se(e.length); f > h; h++)
                                            if ((m = o ? x(w(y = e[h])[0], y[1]) : x(e[h])) && m instanceof t) return m;
                                        return new t(!1)
                                    }
                                    c = d.call(e)
                                }
                                for (v = c.next; !(y = v.call(c)).done;)
                                    if ("object" == typeof(m = ur(c, x, y.value, o)) && m && m instanceof t) return m;
                                return new t(!1)
                            };
                        n.stop = function(e) {
                            return new t(!0, e)
                        }
                    })),
                    No = function(e, t, n) {
                        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
                        return e
                    },
                    Do = jo.getWeakData,
                    Ro = ge.set,
                    Bo = ge.getterFor,
                    Ho = _t.find,
                    Fo = _t.findIndex,
                    qo = 0,
                    Vo = function(e) {
                        return e.frozen || (e.frozen = new Uo)
                    },
                    Uo = function() {
                        this.entries = []
                    },
                    Yo = function(e, t) {
                        return Ho(e.entries, (function(e) {
                            return e[0] === t
                        }))
                    };
                Uo.prototype = {
                    get: function(e) {
                        var t = Yo(this, e);
                        if (t) return t[1]
                    },
                    has: function(e) {
                        return !!Yo(this, e)
                    },
                    set: function(e, t) {
                        var n = Yo(this, e);
                        n ? n[1] = t : this.entries.push([e, t])
                    },
                    delete: function(e) {
                        var t = Fo(this.entries, (function(t) {
                            return t[0] === e
                        }));
                        return ~t && this.entries.splice(t, 1), !!~t
                    }
                };
                var Go = {
                        getConstructor: function(e, t, n, r) {
                            var o = e((function(e, l) {
                                    No(e, o, t), Ro(e, {
                                        type: t,
                                        id: qo++,
                                        frozen: void 0
                                    }), null != l && zo(l, e[r], e, n)
                                })),
                                l = Bo(t),
                                c = function(e, t, n) {
                                    var r = l(e),
                                        data = Do(w(t), !0);
                                    return !0 === data ? Vo(r).set(t, n) : data[r.id] = n, e
                                };
                            return Io(o.prototype, {
                                delete: function(e) {
                                    var t = l(this);
                                    if (!h(e)) return !1;
                                    var data = Do(e);
                                    return !0 === data ? Vo(t).delete(e) : data && H(data, t.id) && delete data[t.id]
                                },
                                has: function(e) {
                                    var t = l(this);
                                    if (!h(e)) return !1;
                                    var data = Do(e);
                                    return !0 === data ? Vo(t).has(e) : data && H(data, t.id)
                                }
                            }), Io(o.prototype, n ? {
                                get: function(e) {
                                    var t = l(this);
                                    if (h(e)) {
                                        var data = Do(e);
                                        return !0 === data ? Vo(t).get(e) : data ? data[t.id] : void 0
                                    }
                                },
                                set: function(e, t) {
                                    return c(this, e, t)
                                }
                            } : {
                                add: function(e) {
                                    return c(this, e, !0)
                                }
                            }), o
                        }
                    },
                    Wo = (l((function(e) {
                        var t, r = ge.enforce,
                            o = !d.ActiveXObject && "ActiveXObject" in d,
                            l = Object.isExtensible,
                            c = function(e) {
                                return function() {
                                    return e(this, arguments.length ? arguments[0] : void 0)
                                }
                            },
                            f = e.exports = function(e, t, r) {
                                var o = -1 !== e.indexOf("Map"),
                                    l = -1 !== e.indexOf("Weak"),
                                    c = o ? "set" : "add",
                                    f = d[e],
                                    m = f && f.prototype,
                                    v = f,
                                    y = {},
                                    w = function(e) {
                                        var t = m[e];
                                        ve(m, e, "add" == e ? function(e) {
                                            return t.call(this, 0 === e ? 0 : e), this
                                        } : "delete" == e ? function(e) {
                                            return !(l && !h(e)) && t.call(this, 0 === e ? 0 : e)
                                        } : "get" == e ? function(e) {
                                            return l && !h(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                                        } : "has" == e ? function(e) {
                                            return !(l && !h(e)) && t.call(this, 0 === e ? 0 : e)
                                        } : function(e, n) {
                                            return t.call(this, 0 === e ? 0 : e, n), this
                                        })
                                    };
                                if (qe(e, "function" != typeof f || !(l || m.forEach && !n((function() {
                                        (new f).entries().next()
                                    }))))) v = r.getConstructor(t, e, o, c), jo.REQUIRED = !0;
                                else if (qe(e, !0)) {
                                    var x = new v,
                                        k = x[c](l ? {} : -0, 1) != x,
                                        T = n((function() {
                                            x.has(1)
                                        })),
                                        S = $r((function(e) {
                                            new f(e)
                                        })),
                                        _ = !l && n((function() {
                                            for (var e = new f, t = 5; t--;) e[c](t, t);
                                            return !e.has(-0)
                                        }));
                                    S || ((v = t((function(t, n) {
                                        No(t, v, e);
                                        var r = bi(new f, t, v);
                                        return null != n && zo(n, r[c], r, o), r
                                    }))).prototype = m, m.constructor = v), (T || _) && (w("delete"), w("has"), o && w("get")), (_ || k) && w(c), l && m.clear && delete m.clear
                                }
                                return y[e] = v, Ue({
                                    global: !0,
                                    forced: v != f
                                }, y), yt(v, e), l || r.setStrong(v, e, o), v
                            }("WeakMap", c, Go);
                        if (te && o) {
                            t = Go.getConstructor(c, "WeakMap", !0), jo.REQUIRED = !0;
                            var m = f.prototype,
                                v = m.delete,
                                y = m.has,
                                w = m.get,
                                x = m.set;
                            Io(m, {
                                delete: function(e) {
                                    if (h(e) && !l(e)) {
                                        var n = r(this);
                                        return n.frozen || (n.frozen = new t), v.call(this, e) || n.frozen.delete(e)
                                    }
                                    return v.call(this, e)
                                },
                                has: function(e) {
                                    if (h(e) && !l(e)) {
                                        var n = r(this);
                                        return n.frozen || (n.frozen = new t), y.call(this, e) || n.frozen.has(e)
                                    }
                                    return y.call(this, e)
                                },
                                get: function(e) {
                                    if (h(e) && !l(e)) {
                                        var n = r(this);
                                        return n.frozen || (n.frozen = new t), y.call(this, e) ? w.call(this, e) : n.frozen.get(e)
                                    }
                                    return w.call(this, e)
                                },
                                set: function(e, n) {
                                    if (h(e) && !l(e)) {
                                        var o = r(this);
                                        o.frozen || (o.frozen = new t), y.call(this, e) ? x.call(this, e, n) : o.frozen.set(e, n)
                                    } else x.call(this, e, n);
                                    return this
                                }
                            })
                        }
                    })), "Array Iterator"),
                    Xo = ge.set,
                    Ko = ge.getterFor(Wo),
                    Jo = Za(Array, "Array", (function(e, t) {
                        Xo(this, {
                            type: Wo,
                            target: R(e),
                            index: 0,
                            kind: t
                        })
                    }), (function() {
                        var e = Ko(this),
                            t = e.target,
                            n = e.kind,
                            r = e.index++;
                        return !t || r >= t.length ? (e.target = void 0, {
                            value: void 0,
                            done: !0
                        }) : "keys" == n ? {
                            value: r,
                            done: !1
                        } : "values" == n ? {
                            value: t[r],
                            done: !1
                        } : {
                            value: [r, t[r]],
                            done: !1
                        }
                    }), "values");
                dr.Arguments = dr.Array, er("keys"), er("values"), er("entries");
                var Qo = pt("iterator"),
                    Zo = pt("toStringTag"),
                    es = Jo.values;
                for (var ts in Pn) {
                    var ns = d[ts],
                        rs = ns && ns.prototype;
                    if (rs) {
                        if (rs[Qo] !== es) try {
                            U(rs, Qo, es)
                        } catch (e) {
                            rs[Qo] = es
                        }
                        if (rs[Zo] || U(rs, Zo, ts), Pn[ts])
                            for (var is in Jo)
                                if (rs[is] !== Jo[is]) try {
                                    U(rs, is, Jo[is])
                                } catch (e) {
                                    rs[is] = Jo[is]
                                }
                    }
                }
                var as = pt("iterator"),
                    os = !n((function() {
                        var e = new URL("b?a=1&b=2&c=3", "http://a"),
                            t = e.searchParams,
                            n = "";
                        return e.pathname = "c%20d", t.forEach((function(e, r) {
                            t.delete("b"), n += r + e
                        })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[as] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
                    })),
                    ss = Object.assign,
                    ls = Object.defineProperty,
                    cs = !ss || n((function() {
                        if (r && 1 !== ss({
                                b: 1
                            }, ss(ls({}, "a", {
                                enumerable: !0,
                                get: function() {
                                    ls(this, "b", {
                                        value: 3,
                                        enumerable: !1
                                    })
                                }
                            }), {
                                b: 2
                            })).b) return !0;
                        var e = {},
                            t = {},
                            symbol = Symbol(),
                            n = "abcdefghijklmnopqrst";
                        return e[symbol] = 7, n.split("").forEach((function(e) {
                            t[e] = e
                        })), 7 != ss({}, e)[symbol] || Ke(ss({}, t)).join("") != n
                    })) ? function(e, source) {
                        for (var t = Xe(e), n = arguments.length, o = 1, l = je.f, c = A.f; n > o;)
                            for (var d, h = N(arguments[o++]), f = l ? Ke(h).concat(l(h)) : Ke(h), m = f.length, v = 0; m > v;) d = f[v++], r && !c.call(h, d) || (t[d] = h[d]);
                        return t
                    } : ss,
                    us = 2147483647,
                    ds = /[^\0-\u007E]/,
                    ps = /[.\u3002\uFF0E\uFF61]/g,
                    hs = "Overflow: input needs wider integers to process",
                    fs = Math.floor,
                    ms = String.fromCharCode,
                    gs = function(e) {
                        return e + 22 + 75 * (e < 26)
                    },
                    vs = function(e, t, n) {
                        var r = 0;
                        for (e = n ? fs(e / 700) : e >> 1, e += fs(e / t); e > 455; r += 36) e = fs(e / 35);
                        return fs(r + 36 * e / (e + 38))
                    },
                    ys = function(input) {
                        var output = [];
                        input = function(e) {
                            for (var output = [], t = 0, n = e.length; t < n;) {
                                var r = e.charCodeAt(t++);
                                if (r >= 55296 && r <= 56319 && t < n) {
                                    var o = e.charCodeAt(t++);
                                    56320 == (64512 & o) ? output.push(((1023 & r) << 10) + (1023 & o) + 65536) : (output.push(r), t--)
                                } else output.push(r)
                            }
                            return output
                        }(input);
                        var i, e, t = input.length,
                            n = 128,
                            r = 0,
                            o = 72;
                        for (i = 0; i < input.length; i++)(e = input[i]) < 128 && output.push(ms(e));
                        var l = output.length,
                            c = l;
                        for (l && output.push("-"); c < t;) {
                            var d = us;
                            for (i = 0; i < input.length; i++)(e = input[i]) >= n && e < d && (d = e);
                            var h = c + 1;
                            if (d - n > fs((us - r) / h)) throw RangeError(hs);
                            for (r += (d - n) * h, n = d, i = 0; i < input.length; i++) {
                                if ((e = input[i]) < n && ++r > us) throw RangeError(hs);
                                if (e == n) {
                                    for (var q = r, f = 36;; f += 36) {
                                        var m = f <= o ? 1 : f >= o + 26 ? 26 : f - o;
                                        if (q < m) break;
                                        var v = q - m,
                                            y = 36 - m;
                                        output.push(ms(gs(m + v % y))), q = fs(v / y)
                                    }
                                    output.push(ms(gs(q))), o = vs(r, h, c == l), r = 0, ++c
                                }
                            }++r, ++n
                        }
                        return output.join("")
                    },
                    bs = function(e) {
                        var t = Tr(e);
                        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
                        return w(t.call(e))
                    },
                    ws = be("fetch"),
                    xs = be("Headers"),
                    ks = pt("iterator"),
                    Ts = "URLSearchParams",
                    Ss = "URLSearchParamsIterator",
                    _s = ge.set,
                    Cs = ge.getterFor(Ts),
                    Es = ge.getterFor(Ss),
                    Ps = /\+/g,
                    $s = Array(4),
                    Os = function(e) {
                        return $s[e - 1] || ($s[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
                    },
                    Ms = function(e) {
                        try {
                            return decodeURIComponent(e)
                        } catch (t) {
                            return e
                        }
                    },
                    As = function(e) {
                        var t = e.replace(Ps, " "),
                            n = 4;
                        try {
                            return decodeURIComponent(t)
                        } catch (e) {
                            for (; n;) t = t.replace(Os(n--), Ms);
                            return t
                        }
                    },
                    Is = /[!'()~]|%20/g,
                    Ls = {
                        "!": "%21",
                        "'": "%27",
                        "(": "%28",
                        ")": "%29",
                        "~": "%7E",
                        "%20": "+"
                    },
                    js = function(e) {
                        return Ls[e]
                    },
                    zs = function(e) {
                        return encodeURIComponent(e).replace(Is, js)
                    },
                    Ns = function(e, t) {
                        if (t)
                            for (var n, r, o = t.split("&"), l = 0; l < o.length;)(n = o[l++]).length && (r = n.split("="), e.push({
                                key: As(r.shift()),
                                value: As(r.join("="))
                            }))
                    },
                    Ds = function(e) {
                        this.entries.length = 0, Ns(this.entries, e)
                    },
                    Rs = function(e, t) {
                        if (e < t) throw TypeError("Not enough arguments")
                    },
                    Bs = Ua((function(e, t) {
                        _s(this, {
                            type: Ss,
                            iterator: bs(Cs(e).entries),
                            kind: t
                        })
                    }), "Iterator", (function() {
                        var e = Es(this),
                            t = e.kind,
                            n = e.iterator.next(),
                            r = n.value;
                        return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
                    })),
                    Hs = function() {
                        No(this, Hs, Ts);
                        var e, t, n, r, o, l, c, d, f, m = arguments.length > 0 ? arguments[0] : void 0,
                            v = this,
                            y = [];
                        if (_s(v, {
                                type: Ts,
                                entries: y,
                                updateURL: function() {},
                                updateSearchParams: Ds
                            }), void 0 !== m)
                            if (h(m))
                                if ("function" == typeof(e = Tr(m)))
                                    for (n = (t = e.call(m)).next; !(r = n.call(t)).done;) {
                                        if ((c = (l = (o = bs(w(r.value))).next).call(o)).done || (d = l.call(o)).done || !l.call(o).done) throw TypeError("Expected sequence with length 2");
                                        y.push({
                                            key: c.value + "",
                                            value: d.value + ""
                                        })
                                    } else
                                        for (f in m) H(m, f) && y.push({
                                            key: f,
                                            value: m[f] + ""
                                        });
                                else Ns(y, "string" == typeof m ? "?" === m.charAt(0) ? m.slice(1) : m : m + "")
                    },
                    Fs = Hs.prototype;
                Io(Fs, {
                    append: function(e, t) {
                        Rs(arguments.length, 2);
                        var n = Cs(this);
                        n.entries.push({
                            key: e + "",
                            value: t + ""
                        }), n.updateURL()
                    },
                    delete: function(e) {
                        Rs(arguments.length, 1);
                        for (var t = Cs(this), n = t.entries, r = e + "", o = 0; o < n.length;) n[o].key === r ? n.splice(o, 1) : o++;
                        t.updateURL()
                    },
                    get: function(e) {
                        Rs(arguments.length, 1);
                        for (var t = Cs(this).entries, n = e + "", r = 0; r < t.length; r++)
                            if (t[r].key === n) return t[r].value;
                        return null
                    },
                    getAll: function(e) {
                        Rs(arguments.length, 1);
                        for (var t = Cs(this).entries, n = e + "", r = [], o = 0; o < t.length; o++) t[o].key === n && r.push(t[o].value);
                        return r
                    },
                    has: function(e) {
                        Rs(arguments.length, 1);
                        for (var t = Cs(this).entries, n = e + "", r = 0; r < t.length;)
                            if (t[r++].key === n) return !0;
                        return !1
                    },
                    set: function(e, t) {
                        Rs(arguments.length, 1);
                        for (var n, r = Cs(this), o = r.entries, l = !1, c = e + "", d = t + "", h = 0; h < o.length; h++)(n = o[h]).key === c && (l ? o.splice(h--, 1) : (l = !0, n.value = d));
                        l || o.push({
                            key: c,
                            value: d
                        }), r.updateURL()
                    },
                    sort: function() {
                        var e, t, n, r = Cs(this),
                            o = r.entries,
                            l = o.slice();
                        for (o.length = 0, n = 0; n < l.length; n++) {
                            for (e = l[n], t = 0; t < n; t++)
                                if (o[t].key > e.key) {
                                    o.splice(t, 0, e);
                                    break
                                }
                            t === n && o.push(e)
                        }
                        r.updateURL()
                    },
                    forEach: function(e) {
                        for (var t, n = Cs(this).entries, r = wt(e, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length;) r((t = n[o++]).value, t.key, this)
                    },
                    keys: function() {
                        return new Bs(this, "keys")
                    },
                    values: function() {
                        return new Bs(this, "values")
                    },
                    entries: function() {
                        return new Bs(this, "entries")
                    }
                }, {
                    enumerable: !0
                }), ve(Fs, ks, Fs.entries), ve(Fs, "toString", (function() {
                    for (var e, t = Cs(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(zs(e.key) + "=" + zs(e.value));
                    return n.join("&")
                }), {
                    enumerable: !0
                }), yt(Hs, Ts), Ue({
                    global: !0,
                    forced: !os
                }, {
                    URLSearchParams: Hs
                }), os || "function" != typeof ws || "function" != typeof xs || Ue({
                    global: !0,
                    enumerable: !0,
                    forced: !0
                }, {
                    fetch: function(input) {
                        var e, body, t, n = [input];
                        return arguments.length > 1 && (h(e = arguments[1]) && (body = e.body, xr(body) === Ts && ((t = e.headers ? new xs(e.headers) : new xs).has("content-type") || t.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), e = nt(e, {
                            body: I(0, String(body)),
                            headers: I(0, t)
                        }))), n.push(e)), ws.apply(this, n)
                    }
                });
                var qs, Vs = {
                        URLSearchParams: Hs,
                        getState: Cs
                    },
                    Us = ja.codeAt,
                    Ys = d.URL,
                    Gs = Vs.URLSearchParams,
                    Ws = Vs.getState,
                    Xs = ge.set,
                    Ks = ge.getterFor("URL"),
                    Js = Math.floor,
                    Qs = Math.pow,
                    Zs = "Invalid scheme",
                    el = "Invalid host",
                    tl = "Invalid port",
                    nl = /[A-Za-z]/,
                    rl = /[\d+-.A-Za-z]/,
                    il = /\d/,
                    al = /^(0x|0X)/,
                    sl = /^[0-7]+$/,
                    ll = /^\d+$/,
                    cl = /^[\dA-Fa-f]+$/,
                    pl = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
                    hl = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
                    fl = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
                    ml = /[\u0009\u000A\u000D]/g,
                    gl = function(e, input) {
                        var t, n, r;
                        if ("[" == input.charAt(0)) {
                            if ("]" != input.charAt(input.length - 1)) return el;
                            if (!(t = yl(input.slice(1, -1)))) return el;
                            e.host = t
                        } else if (Cl(e)) {
                            if (input = function(input) {
                                    var i, label, e = [],
                                        t = input.toLowerCase().replace(ps, ".").split(".");
                                    for (i = 0; i < t.length; i++) label = t[i], e.push(ds.test(label) ? "xn--" + ys(label) : label);
                                    return e.join(".")
                                }(input), pl.test(input)) return el;
                            if (null === (t = vl(input))) return el;
                            e.host = t
                        } else {
                            if (hl.test(input)) return el;
                            for (t = "", n = Sr(input), r = 0; r < n.length; r++) t += Sl(n[r], wl);
                            e.host = t
                        }
                    },
                    vl = function(input) {
                        var e, t, n, r, o, l, c, d = input.split(".");
                        if (d.length && "" == d[d.length - 1] && d.pop(), (e = d.length) > 4) return input;
                        for (t = [], n = 0; n < e; n++) {
                            if ("" == (r = d[n])) return input;
                            if (o = 10, r.length > 1 && "0" == r.charAt(0) && (o = al.test(r) ? 16 : 8, r = r.slice(8 == o ? 1 : 2)), "" === r) l = 0;
                            else {
                                if (!(10 == o ? ll : 8 == o ? sl : cl).test(r)) return input;
                                l = parseInt(r, o)
                            }
                            t.push(l)
                        }
                        for (n = 0; n < e; n++)
                            if (l = t[n], n == e - 1) {
                                if (l >= Qs(256, 5 - e)) return null
                            } else if (l > 255) return null;
                        for (c = t.pop(), n = 0; n < t.length; n++) c += t[n] * Qs(256, 3 - n);
                        return c
                    },
                    yl = function(input) {
                        var e, t, n, r, o, l, c, address = [0, 0, 0, 0, 0, 0, 0, 0],
                            d = 0,
                            h = null,
                            f = 0,
                            m = function() {
                                return input.charAt(f)
                            };
                        if (":" == m()) {
                            if (":" != input.charAt(1)) return;
                            f += 2, h = ++d
                        }
                        for (; m();) {
                            if (8 == d) return;
                            if (":" != m()) {
                                for (e = t = 0; t < 4 && cl.test(m());) e = 16 * e + parseInt(m(), 16), f++, t++;
                                if ("." == m()) {
                                    if (0 == t) return;
                                    if (f -= t, d > 6) return;
                                    for (n = 0; m();) {
                                        if (r = null, n > 0) {
                                            if (!("." == m() && n < 4)) return;
                                            f++
                                        }
                                        if (!il.test(m())) return;
                                        for (; il.test(m());) {
                                            if (o = parseInt(m(), 10), null === r) r = o;
                                            else {
                                                if (0 == r) return;
                                                r = 10 * r + o
                                            }
                                            if (r > 255) return;
                                            f++
                                        }
                                        address[d] = 256 * address[d] + r, 2 != ++n && 4 != n || d++
                                    }
                                    if (4 != n) return;
                                    break
                                }
                                if (":" == m()) {
                                    if (f++, !m()) return
                                } else if (m()) return;
                                address[d++] = e
                            } else {
                                if (null !== h) return;
                                f++, h = ++d
                            }
                        }
                        if (null !== h)
                            for (l = d - h, d = 7; 0 != d && l > 0;) c = address[d], address[d--] = address[h + l - 1], address[h + --l] = c;
                        else if (8 != d) return;
                        return address
                    },
                    bl = function(e) {
                        var t, n, r, o;
                        if ("number" == typeof e) {
                            for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = Js(e / 256);
                            return t.join(".")
                        }
                        if ("object" == typeof e) {
                            for (t = "", r = function(e) {
                                    for (var t = null, n = 1, r = null, o = 0, l = 0; l < 8; l++) 0 !== e[l] ? (o > n && (t = r, n = o), r = null, o = 0) : (null === r && (r = l), ++o);
                                    return o > n && (t = r, n = o), t
                                }(e), n = 0; n < 8; n++) o && 0 === e[n] || (o && (o = !1), r === n ? (t += n ? ":" : "::", o = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                            return "[" + t + "]"
                        }
                        return e
                    },
                    wl = {},
                    xl = cs({}, wl, {
                        " ": 1,
                        '"': 1,
                        "<": 1,
                        ">": 1,
                        "`": 1
                    }),
                    kl = cs({}, xl, {
                        "#": 1,
                        "?": 1,
                        "{": 1,
                        "}": 1
                    }),
                    Tl = cs({}, kl, {
                        "/": 1,
                        ":": 1,
                        ";": 1,
                        "=": 1,
                        "@": 1,
                        "[": 1,
                        "\\": 1,
                        "]": 1,
                        "^": 1,
                        "|": 1
                    }),
                    Sl = function(e, t) {
                        var code = Us(e, 0);
                        return code > 32 && code < 127 && !H(t, e) ? e : encodeURIComponent(e)
                    },
                    _l = {
                        ftp: 21,
                        file: null,
                        http: 80,
                        https: 443,
                        ws: 80,
                        wss: 443
                    },
                    Cl = function(e) {
                        return H(_l, e.scheme)
                    },
                    El = function(e) {
                        return "" != e.username || "" != e.password
                    },
                    Pl = function(e) {
                        return !e.host || e.cannotBeABaseURL || "file" == e.scheme
                    },
                    $l = function(e, t) {
                        var n;
                        return 2 == e.length && nl.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
                    },
                    Ol = function(e) {
                        var t;
                        return e.length > 1 && $l(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
                    },
                    Ml = function(e) {
                        var path = e.path,
                            t = path.length;
                        !t || "file" == e.scheme && 1 == t && $l(path[0], !0) || path.pop()
                    },
                    Al = function(e) {
                        return "." === e || "%2e" === e.toLowerCase()
                    },
                    Il = {},
                    Ll = {},
                    jl = {},
                    zl = {},
                    Nl = {},
                    Dl = {},
                    Rl = {},
                    Bl = {},
                    Hl = {},
                    Fl = {},
                    ql = {},
                    Vl = {},
                    Ul = {},
                    Yl = {},
                    Gl = {},
                    Wl = {},
                    Xl = {},
                    Kl = {},
                    Jl = {},
                    Ql = {},
                    Zl = {},
                    ec = function(e, input, t, base) {
                        var n, r, o, l, c, d = t || Il,
                            h = 0,
                            f = "",
                            m = !1,
                            v = !1,
                            y = !1;
                        for (t || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, input = input.replace(fl, "")), input = input.replace(ml, ""), n = Sr(input); h <= n.length;) {
                            switch (r = n[h], d) {
                                case Il:
                                    if (!r || !nl.test(r)) {
                                        if (t) return Zs;
                                        d = jl;
                                        continue
                                    }
                                    f += r.toLowerCase(), d = Ll;
                                    break;
                                case Ll:
                                    if (r && (rl.test(r) || "+" == r || "-" == r || "." == r)) f += r.toLowerCase();
                                    else {
                                        if (":" != r) {
                                            if (t) return Zs;
                                            f = "", d = jl, h = 0;
                                            continue
                                        }
                                        if (t && (Cl(e) != H(_l, f) || "file" == f && (El(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                                        if (e.scheme = f, t) return void(Cl(e) && _l[e.scheme] == e.port && (e.port = null));
                                        f = "", "file" == e.scheme ? d = Yl : Cl(e) && base && base.scheme == e.scheme ? d = zl : Cl(e) ? d = Bl : "/" == n[h + 1] ? (d = Nl, h++) : (e.cannotBeABaseURL = !0, e.path.push(""), d = Jl)
                                    }
                                    break;
                                case jl:
                                    if (!base || base.cannotBeABaseURL && "#" != r) return Zs;
                                    if (base.cannotBeABaseURL && "#" == r) {
                                        e.scheme = base.scheme, e.path = base.path.slice(), e.query = base.query, e.fragment = "", e.cannotBeABaseURL = !0, d = Zl;
                                        break
                                    }
                                    d = "file" == base.scheme ? Yl : Dl;
                                    continue;
                                case zl:
                                    if ("/" != r || "/" != n[h + 1]) {
                                        d = Dl;
                                        continue
                                    }
                                    d = Hl, h++;
                                    break;
                                case Nl:
                                    if ("/" == r) {
                                        d = Fl;
                                        break
                                    }
                                    d = Kl;
                                    continue;
                                case Dl:
                                    if (e.scheme = base.scheme, r == qs) e.username = base.username, e.password = base.password, e.host = base.host, e.port = base.port, e.path = base.path.slice(), e.query = base.query;
                                    else if ("/" == r || "\\" == r && Cl(e)) d = Rl;
                                    else if ("?" == r) e.username = base.username, e.password = base.password, e.host = base.host, e.port = base.port, e.path = base.path.slice(), e.query = "", d = Ql;
                                    else {
                                        if ("#" != r) {
                                            e.username = base.username, e.password = base.password, e.host = base.host, e.port = base.port, e.path = base.path.slice(), e.path.pop(), d = Kl;
                                            continue
                                        }
                                        e.username = base.username, e.password = base.password, e.host = base.host, e.port = base.port, e.path = base.path.slice(), e.query = base.query, e.fragment = "", d = Zl
                                    }
                                    break;
                                case Rl:
                                    if (!Cl(e) || "/" != r && "\\" != r) {
                                        if ("/" != r) {
                                            e.username = base.username, e.password = base.password, e.host = base.host, e.port = base.port, d = Kl;
                                            continue
                                        }
                                        d = Fl
                                    } else d = Hl;
                                    break;
                                case Bl:
                                    if (d = Hl, "/" != r || "/" != f.charAt(h + 1)) continue;
                                    h++;
                                    break;
                                case Hl:
                                    if ("/" != r && "\\" != r) {
                                        d = Fl;
                                        continue
                                    }
                                    break;
                                case Fl:
                                    if ("@" == r) {
                                        m && (f = "%40" + f), m = !0, o = Sr(f);
                                        for (var i = 0; i < o.length; i++) {
                                            var w = o[i];
                                            if (":" != w || y) {
                                                var x = Sl(w, Tl);
                                                y ? e.password += x : e.username += x
                                            } else y = !0
                                        }
                                        f = ""
                                    } else if (r == qs || "/" == r || "?" == r || "#" == r || "\\" == r && Cl(e)) {
                                        if (m && "" == f) return "Invalid authority";
                                        h -= Sr(f).length + 1, f = "", d = ql
                                    } else f += r;
                                    break;
                                case ql:
                                case Vl:
                                    if (t && "file" == e.scheme) {
                                        d = Wl;
                                        continue
                                    }
                                    if (":" != r || v) {
                                        if (r == qs || "/" == r || "?" == r || "#" == r || "\\" == r && Cl(e)) {
                                            if (Cl(e) && "" == f) return el;
                                            if (t && "" == f && (El(e) || null !== e.port)) return;
                                            if (l = gl(e, f)) return l;
                                            if (f = "", d = Xl, t) return;
                                            continue
                                        }
                                        "[" == r ? v = !0 : "]" == r && (v = !1), f += r
                                    } else {
                                        if ("" == f) return el;
                                        if (l = gl(e, f)) return l;
                                        if (f = "", d = Ul, t == Vl) return
                                    }
                                    break;
                                case Ul:
                                    if (!il.test(r)) {
                                        if (r == qs || "/" == r || "?" == r || "#" == r || "\\" == r && Cl(e) || t) {
                                            if ("" != f) {
                                                var k = parseInt(f, 10);
                                                if (k > 65535) return tl;
                                                e.port = Cl(e) && k === _l[e.scheme] ? null : k, f = ""
                                            }
                                            if (t) return;
                                            d = Xl;
                                            continue
                                        }
                                        return tl
                                    }
                                    f += r;
                                    break;
                                case Yl:
                                    if (e.scheme = "file", "/" == r || "\\" == r) d = Gl;
                                    else {
                                        if (!base || "file" != base.scheme) {
                                            d = Kl;
                                            continue
                                        }
                                        if (r == qs) e.host = base.host, e.path = base.path.slice(), e.query = base.query;
                                        else if ("?" == r) e.host = base.host, e.path = base.path.slice(), e.query = "", d = Ql;
                                        else {
                                            if ("#" != r) {
                                                Ol(n.slice(h).join("")) || (e.host = base.host, e.path = base.path.slice(), Ml(e)), d = Kl;
                                                continue
                                            }
                                            e.host = base.host, e.path = base.path.slice(), e.query = base.query, e.fragment = "", d = Zl
                                        }
                                    }
                                    break;
                                case Gl:
                                    if ("/" == r || "\\" == r) {
                                        d = Wl;
                                        break
                                    }
                                    base && "file" == base.scheme && !Ol(n.slice(h).join("")) && ($l(base.path[0], !0) ? e.path.push(base.path[0]) : e.host = base.host), d = Kl;
                                    continue;
                                case Wl:
                                    if (r == qs || "/" == r || "\\" == r || "?" == r || "#" == r) {
                                        if (!t && $l(f)) d = Kl;
                                        else if ("" == f) {
                                            if (e.host = "", t) return;
                                            d = Xl
                                        } else {
                                            if (l = gl(e, f)) return l;
                                            if ("localhost" == e.host && (e.host = ""), t) return;
                                            f = "", d = Xl
                                        }
                                        continue
                                    }
                                    f += r;
                                    break;
                                case Xl:
                                    if (Cl(e)) {
                                        if (d = Kl, "/" != r && "\\" != r) continue
                                    } else if (t || "?" != r)
                                        if (t || "#" != r) {
                                            if (r != qs && (d = Kl, "/" != r)) continue
                                        } else e.fragment = "", d = Zl;
                                    else e.query = "", d = Ql;
                                    break;
                                case Kl:
                                    if (r == qs || "/" == r || "\\" == r && Cl(e) || !t && ("?" == r || "#" == r)) {
                                        if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (Ml(e), "/" == r || "\\" == r && Cl(e) || e.path.push("")) : Al(f) ? "/" == r || "\\" == r && Cl(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && $l(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (r == qs || "?" == r || "#" == r))
                                            for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                                        "?" == r ? (e.query = "", d = Ql) : "#" == r && (e.fragment = "", d = Zl)
                                    } else f += Sl(r, kl);
                                    break;
                                case Jl:
                                    "?" == r ? (e.query = "", d = Ql) : "#" == r ? (e.fragment = "", d = Zl) : r != qs && (e.path[0] += Sl(r, wl));
                                    break;
                                case Ql:
                                    t || "#" != r ? r != qs && ("'" == r && Cl(e) ? e.query += "%27" : e.query += "#" == r ? "%23" : Sl(r, wl)) : (e.fragment = "", d = Zl);
                                    break;
                                case Zl:
                                    r != qs && (e.fragment += Sl(r, xl))
                            }
                            h++
                        }
                    },
                    tc = function(e) {
                        var t, n, o = No(this, tc, "URL"),
                            base = arguments.length > 1 ? arguments[1] : void 0,
                            l = String(e),
                            c = Xs(o, {
                                type: "URL"
                            });
                        if (void 0 !== base)
                            if (base instanceof tc) t = Ks(base);
                            else if (n = ec(t = {}, String(base))) throw TypeError(n);
                        if (n = ec(c, l, null, t)) throw TypeError(n);
                        var d = c.searchParams = new Gs,
                            h = Ws(d);
                        h.updateSearchParams(c.query), h.updateURL = function() {
                            c.query = String(d) || null
                        }, r || (o.href = rc.call(o), o.origin = ic.call(o), o.protocol = ac.call(o), o.username = oc.call(o), o.password = sc.call(o), o.host = lc.call(o), o.hostname = cc.call(o), o.port = uc.call(o), o.pathname = dc.call(o), o.search = pc.call(o), o.searchParams = hc.call(o), o.hash = fc.call(o))
                    },
                    nc = tc.prototype,
                    rc = function() {
                        var e = Ks(this),
                            t = e.scheme,
                            n = e.username,
                            r = e.password,
                            o = e.host,
                            l = e.port,
                            path = e.path,
                            c = e.query,
                            d = e.fragment,
                            output = t + ":";
                        return null !== o ? (output += "//", El(e) && (output += n + (r ? ":" + r : "") + "@"), output += bl(o), null !== l && (output += ":" + l)) : "file" == t && (output += "//"), output += e.cannotBeABaseURL ? path[0] : path.length ? "/" + path.join("/") : "", null !== c && (output += "?" + c), null !== d && (output += "#" + d), output
                    },
                    ic = function() {
                        var e = Ks(this),
                            t = e.scheme,
                            n = e.port;
                        if ("blob" == t) try {
                            return new URL(t.path[0]).origin
                        } catch (e) {
                            return "null"
                        }
                        return "file" != t && Cl(e) ? t + "://" + bl(e.host) + (null !== n ? ":" + n : "") : "null"
                    },
                    ac = function() {
                        return Ks(this).scheme + ":"
                    },
                    oc = function() {
                        return Ks(this).username
                    },
                    sc = function() {
                        return Ks(this).password
                    },
                    lc = function() {
                        var e = Ks(this),
                            t = e.host,
                            n = e.port;
                        return null === t ? "" : null === n ? bl(t) : bl(t) + ":" + n
                    },
                    cc = function() {
                        var e = Ks(this).host;
                        return null === e ? "" : bl(e)
                    },
                    uc = function() {
                        var e = Ks(this).port;
                        return null === e ? "" : String(e)
                    },
                    dc = function() {
                        var e = Ks(this),
                            path = e.path;
                        return e.cannotBeABaseURL ? path[0] : path.length ? "/" + path.join("/") : ""
                    },
                    pc = function() {
                        var e = Ks(this).query;
                        return e ? "?" + e : ""
                    },
                    hc = function() {
                        return Ks(this).searchParams
                    },
                    fc = function() {
                        var e = Ks(this).fragment;
                        return e ? "#" + e : ""
                    },
                    mc = function(e, t) {
                        return {
                            get: e,
                            set: t,
                            configurable: !0,
                            enumerable: !0
                        }
                    };
                if (r && Je(nc, {
                        href: mc(rc, (function(e) {
                            var t = Ks(this),
                                n = String(e),
                                r = ec(t, n);
                            if (r) throw TypeError(r);
                            Ws(t.searchParams).updateSearchParams(t.query)
                        })),
                        origin: mc(ic),
                        protocol: mc(ac, (function(e) {
                            var t = Ks(this);
                            ec(t, String(e) + ":", Il)
                        })),
                        username: mc(oc, (function(e) {
                            var t = Ks(this),
                                n = Sr(String(e));
                            if (!Pl(t)) {
                                t.username = "";
                                for (var i = 0; i < n.length; i++) t.username += Sl(n[i], Tl)
                            }
                        })),
                        password: mc(sc, (function(e) {
                            var t = Ks(this),
                                n = Sr(String(e));
                            if (!Pl(t)) {
                                t.password = "";
                                for (var i = 0; i < n.length; i++) t.password += Sl(n[i], Tl)
                            }
                        })),
                        host: mc(lc, (function(e) {
                            var t = Ks(this);
                            t.cannotBeABaseURL || ec(t, String(e), ql)
                        })),
                        hostname: mc(cc, (function(e) {
                            var t = Ks(this);
                            t.cannotBeABaseURL || ec(t, String(e), Vl)
                        })),
                        port: mc(uc, (function(e) {
                            var t = Ks(this);
                            Pl(t) || ("" == (e = String(e)) ? t.port = null : ec(t, e, Ul))
                        })),
                        pathname: mc(dc, (function(e) {
                            var t = Ks(this);
                            t.cannotBeABaseURL || (t.path = [], ec(t, e + "", Xl))
                        })),
                        search: mc(pc, (function(e) {
                            var t = Ks(this);
                            "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", ec(t, e, Ql)), Ws(t.searchParams).updateSearchParams(t.query)
                        })),
                        searchParams: mc(hc),
                        hash: mc(fc, (function(e) {
                            var t = Ks(this);
                            "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", ec(t, e, Zl)) : t.fragment = null
                        }))
                    }), ve(nc, "toJSON", (function() {
                        return rc.call(this)
                    }), {
                        enumerable: !0
                    }), ve(nc, "toString", (function() {
                        return rc.call(this)
                    }), {
                        enumerable: !0
                    }), Ys) {
                    var gc = Ys.createObjectURL,
                        vc = Ys.revokeObjectURL;
                    gc && ve(tc, "createObjectURL", (function(e) {
                        return gc.apply(Ys, arguments)
                    })), vc && ve(tc, "revokeObjectURL", (function(e) {
                        return vc.apply(Ys, arguments)
                    }))
                }

                function yc(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function bc(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function wc(e, t, i) {
                    return t && bc(e.prototype, t), i && bc(e, i), e
                }

                function xc(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function kc(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), i.push.apply(i, n)
                    }
                    return i
                }

                function Tc(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? kc(Object(i), !0).forEach((function(t) {
                            xc(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : kc(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }

                function Sc(e, t) {
                    if (null == e) return {};
                    var i, n, s = function(e, t) {
                        if (null == e) return {};
                        var i, n, s = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) i = a[n], t.indexOf(i) >= 0 || (s[i] = e[i]);
                        return s
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++) i = a[n], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i])
                    }
                    return s
                }

                function _c(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var i = [],
                                n = !0,
                                s = !1,
                                a = void 0;
                            try {
                                for (var r, o = e[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0);
                            } catch (e) {
                                s = !0, a = e
                            } finally {
                                try {
                                    n || null == o.return || o.return()
                                } finally {
                                    if (s) throw a
                                }
                            }
                            return i
                        }
                    }(e, t) || Ec(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function Cc(e) {
                    return function(e) {
                        if (Array.isArray(e)) return Pc(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || Ec(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function Ec(e, t) {
                    if (e) {
                        if ("string" == typeof e) return Pc(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Pc(e, t) : void 0
                    }
                }

                function Pc(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n
                }

                function $c(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function Oc(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }

                function Mc(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), i.push.apply(i, n)
                    }
                    return i
                }

                function Ac(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Mc(Object(i), !0).forEach((function(t) {
                            Oc(e, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Mc(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }))
                    }
                    return e
                }
                yt(tc, "URL"), Ue({
                    global: !0,
                    forced: !os,
                    sham: !r
                }, {
                    URL: tc
                });
                var Ic = {
                    addCSS: !0,
                    thumbWidth: 15,
                    watch: !0
                };

                function Lc(e, t) {
                    return function() {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }.call(e, t)
                }
                var jc = function(e) {
                        return null != e ? e.constructor : null
                    },
                    zc = function(e, t) {
                        return !!(e && t && e instanceof t)
                    },
                    Nc = function(e) {
                        return null == e
                    },
                    Dc = function(e) {
                        return jc(e) === Object
                    },
                    Rc = function(e) {
                        return jc(e) === String
                    },
                    Bc = function(e) {
                        return Array.isArray(e)
                    },
                    Hc = function(e) {
                        return zc(e, NodeList)
                    },
                    Fc = Rc,
                    qc = Bc,
                    Vc = Hc,
                    Uc = function(e) {
                        return zc(e, Element)
                    },
                    Yc = function(e) {
                        return zc(e, Event)
                    },
                    Gc = function(e) {
                        return Nc(e) || (Rc(e) || Bc(e) || Hc(e)) && !e.length || Dc(e) && !Object.keys(e).length
                    };

                function Wc(e, t) {
                    if (1 > t) {
                        var i = function(e) {
                            var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                            return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                        }(t);
                        return parseFloat(e.toFixed(i))
                    }
                    return Math.round(e / t) * t
                }
                var Xc, Kc, i, Jc = function() {
                        function e(t, i) {
                            (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), Uc(t) ? this.element = t : Fc(t) && (this.element = document.querySelector(t)), Uc(this.element) && Gc(this.element.rangeTouch) && (this.config = Ac({}, Ic, {}, i), this.init())
                        }
                        return function(e, t, i) {
                            t && $c(e.prototype, t), i && $c(e, i)
                        }(e, [{
                            key: "init",
                            value: function() {
                                e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                            }
                        }, {
                            key: "listeners",
                            value: function(e) {
                                var t = this,
                                    i = e ? "addEventListener" : "removeEventListener";
                                ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                                    t.element[i](e, (function(e) {
                                        return t.set(e)
                                    }), !1)
                                }))
                            }
                        }, {
                            key: "get",
                            value: function(t) {
                                if (!e.enabled || !Yc(t)) return null;
                                var i, n = t.target,
                                    s = t.changedTouches[0],
                                    a = parseFloat(n.getAttribute("min")) || 0,
                                    r = parseFloat(n.getAttribute("max")) || 100,
                                    o = parseFloat(n.getAttribute("step")) || 1,
                                    l = n.getBoundingClientRect(),
                                    c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                                return 0 > (i = 100 / l.width * (s.clientX - l.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + Wc(i / 100 * (r - a), o)
                            }
                        }, {
                            key: "set",
                            value: function(t) {
                                e.enabled && Yc(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                                    if (e && t) {
                                        var i = new Event(t, {
                                            bubbles: !0
                                        });
                                        e.dispatchEvent(i)
                                    }
                                }(t.target, "touchend" === t.type ? "change" : "input"))
                            }
                        }], [{
                            key: "setup",
                            value: function(t) {
                                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = null;
                                if (Gc(t) || Fc(t) ? n = Array.from(document.querySelectorAll(Fc(t) ? t : 'input[type="range"]')) : Uc(t) ? n = [t] : Vc(t) ? n = Array.from(t) : qc(t) && (n = t.filter(Uc)), Gc(n)) return null;
                                var s = Ac({}, Ic, {}, i);
                                if (Fc(t) && s.watch) {
                                    var a = new MutationObserver((function(i) {
                                        Array.from(i).forEach((function(i) {
                                            Array.from(i.addedNodes).forEach((function(i) {
                                                Uc(i) && Lc(i, t) && new e(i, s)
                                            }))
                                        }))
                                    }));
                                    a.observe(document.body, {
                                        childList: !0,
                                        subtree: !0
                                    })
                                }
                                return n.map((function(t) {
                                    return new e(t, i)
                                }))
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return "ontouchstart" in document.documentElement
                            }
                        }]), e
                    }(),
                    Qc = function(e) {
                        return null != e ? e.constructor : null
                    },
                    Zc = function(e, t) {
                        return Boolean(e && t && e instanceof t)
                    },
                    eu = function(e) {
                        return null == e
                    },
                    tu = function(e) {
                        return Qc(e) === Object
                    },
                    nu = function(e) {
                        return Qc(e) === String
                    },
                    ru = function(e) {
                        return Qc(e) === Function
                    },
                    iu = function(e) {
                        return Array.isArray(e)
                    },
                    au = function(e) {
                        return Zc(e, NodeList)
                    },
                    ou = function(e) {
                        return eu(e) || (nu(e) || iu(e) || au(e)) && !e.length || tu(e) && !Object.keys(e).length
                    },
                    su = eu,
                    lu = tu,
                    cu = function(e) {
                        return Qc(e) === Number && !Number.isNaN(e)
                    },
                    uu = nu,
                    du = function(e) {
                        return Qc(e) === Boolean
                    },
                    pu = ru,
                    hu = iu,
                    fu = au,
                    mu = function(e) {
                        return Zc(e, Element)
                    },
                    gu = function(e) {
                        return Zc(e, Event)
                    },
                    vu = function(e) {
                        return Zc(e, KeyboardEvent)
                    },
                    yu = function(e) {
                        return Zc(e, TextTrack) || !eu(e) && nu(e.kind)
                    },
                    bu = function(e) {
                        return Zc(e, Promise) && ru(e.then)
                    },
                    wu = function(e) {
                        if (Zc(e, window.URL)) return !0;
                        if (!nu(e)) return !1;
                        var t = e;
                        e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
                        try {
                            return !ou(new URL(t).hostname)
                        } catch (e) {
                            return !1
                        }
                    },
                    xu = ou,
                    ku = (Xc = document.createElement("span"), Kc = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    }, i = Object.keys(Kc).find((function(e) {
                        return void 0 !== Xc.style[e]
                    })), !!uu(i) && Kc[i]);

                function Tu(e, t) {
                    setTimeout((function() {
                        try {
                            e.hidden = !0, e.offsetHeight, e.hidden = !1
                        } catch (e) {}
                    }), t)
                }
                var Su = {
                    isIE: !!document.documentMode,
                    isEdge: window.navigator.userAgent.includes("Edge"),
                    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                };

                function _u(e, t) {
                    return t.split(".").reduce((function(e, t) {
                        return e && e[t]
                    }), e)
                }

                function Cu() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    if (!i.length) return e;
                    var s = i.shift();
                    return lu(s) ? (Object.keys(s).forEach((function(t) {
                        lu(s[t]) ? (Object.keys(e).includes(t) || Object.assign(e, xc({}, t, {})), Cu(e[t], s[t])) : Object.assign(e, xc({}, t, s[t]))
                    })), Cu.apply(void 0, [e].concat(i))) : e
                }

                function Eu(e, t) {
                    var i = e.length ? e : [e];
                    Array.from(i).reverse().forEach((function(e, i) {
                        var n = i > 0 ? t.cloneNode(!0) : t,
                            s = e.parentNode,
                            a = e.nextSibling;
                        n.appendChild(e), a ? s.insertBefore(n, a) : s.appendChild(n)
                    }))
                }

                function Pu(e, t) {
                    mu(e) && !xu(t) && Object.entries(t).filter((function(e) {
                        var t = _c(e, 2)[1];
                        return !su(t)
                    })).forEach((function(t) {
                        var i = _c(t, 2),
                            n = i[0],
                            s = i[1];
                        return e.setAttribute(n, s)
                    }))
                }

                function $u(e, t, i) {
                    var n = document.createElement(e);
                    return lu(t) && Pu(n, t), uu(i) && (n.innerText = i), n
                }

                function Ou(e, t, i, n) {
                    mu(t) && t.appendChild($u(e, i, n))
                }

                function Mu(e) {
                    fu(e) || hu(e) ? Array.from(e).forEach(Mu) : mu(e) && mu(e.parentNode) && e.parentNode.removeChild(e)
                }

                function Au(e) {
                    if (mu(e))
                        for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
                }

                function Iu(e, t) {
                    return mu(t) && mu(t.parentNode) && mu(e) ? (t.parentNode.replaceChild(e, t), e) : null
                }

                function Lu(e, t) {
                    if (!uu(e) || xu(e)) return {};
                    var i = {},
                        n = Cu({}, t);
                    return e.split(",").forEach((function(e) {
                        var t = e.trim(),
                            s = t.replace(".", ""),
                            a = t.replace(/[[\]]/g, "").split("="),
                            r = _c(a, 1)[0],
                            o = a.length > 1 ? a[1].replace(/["']/g, "") : "";
                        switch (t.charAt(0)) {
                            case ".":
                                uu(n.class) ? i.class = "".concat(n.class, " ").concat(s) : i.class = s;
                                break;
                            case "#":
                                i.id = t.replace("#", "");
                                break;
                            case "[":
                                i[r] = o
                        }
                    })), Cu(n, i)
                }

                function ju(e, t) {
                    if (mu(e)) {
                        var i = t;
                        du(i) || (i = !e.hidden), e.hidden = i
                    }
                }

                function zu(e, t, i) {
                    if (fu(e)) return Array.from(e).map((function(e) {
                        return zu(e, t, i)
                    }));
                    if (mu(e)) {
                        var n = "toggle";
                        return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t)
                    }
                    return !1
                }

                function Nu(e, t) {
                    return mu(e) && e.classList.contains(t)
                }

                function Du(e, t) {
                    var i = Element.prototype;
                    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }).call(e, t)
                }

                function Ru(e) {
                    return this.elements.container.querySelectorAll(e)
                }

                function Bu(e) {
                    return this.elements.container.querySelector(e)
                }

                function Hu() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    mu(e) && (e.focus({
                        preventScroll: !0
                    }), t && zu(e, this.config.classNames.tabFocus))
                }
                var Fu = {
                        "audio/ogg": "vorbis",
                        "audio/wav": "1",
                        "video/webm": "vp8, vorbis",
                        "video/mp4": "avc1.42E01E, mp4a.40.2",
                        "video/ogg": "theora"
                    },
                    qu = {
                        audio: "canPlayType" in document.createElement("audio"),
                        video: "canPlayType" in document.createElement("video"),
                        check: function(e, t, i) {
                            var n = Su.isIPhone && i && qu.playsinline,
                                s = qu[e] || "html5" !== t;
                            return {
                                api: s,
                                ui: s && qu.rangeInput && ("video" !== e || !Su.isIPhone || n)
                            }
                        },
                        pip: !(Su.isIPhone || !pu($u("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $u("video").disablePictureInPicture)),
                        airplay: pu(window.WebKitPlaybackTargetAvailabilityEvent),
                        playsinline: "playsInline" in document.createElement("video"),
                        mime: function(e) {
                            if (xu(e)) return !1;
                            var t = _c(e.split("/"), 1)[0],
                                i = e;
                            if (!this.isHTML5 || t !== this.type) return !1;
                            Object.keys(Fu).includes(i) && (i += '; codecs="'.concat(Fu[e], '"'));
                            try {
                                return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                            } catch (e) {
                                return !1
                            }
                        },
                        textTracks: "textTracks" in document.createElement("video"),
                        rangeInput: function() {
                            var e = document.createElement("input");
                            return e.type = "range", "range" === e.type
                        }(),
                        touch: "ontouchstart" in document.documentElement,
                        transitions: !1 !== ku,
                        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                    },
                    Vu = function() {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    return e = !0, null
                                }
                            });
                            window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                        } catch (e) {}
                        return e
                    }();

                function Uu(e, t, i) {
                    var n = this,
                        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    if (e && "addEventListener" in e && !xu(t) && pu(i)) {
                        var o = t.split(" "),
                            l = r;
                        Vu && (l = {
                            passive: a,
                            capture: r
                        }), o.forEach((function(t) {
                            n && n.eventListeners && s && n.eventListeners.push({
                                element: e,
                                type: t,
                                callback: i,
                                options: l
                            }), e[s ? "addEventListener" : "removeEventListener"](t, i, l)
                        }))
                    }
                }

                function Yu(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    Uu.call(this, e, t, i, !0, n, s)
                }

                function Gu(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    Uu.call(this, e, t, i, !1, n, s)
                }

                function Wu(e) {
                    var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        r = function r() {
                            Gu(e, i, r, s, a);
                            for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
                            n.apply(t, l)
                        };
                    Uu.call(this, e, i, r, !0, s, a)
                }

                function Xu(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if (mu(e) && !xu(t)) {
                        var s = new CustomEvent(t, {
                            bubbles: i,
                            detail: Tc(Tc({}, n), {}, {
                                plyr: this
                            })
                        });
                        e.dispatchEvent(s)
                    }
                }

                function Ku() {
                    this && this.eventListeners && (this.eventListeners.forEach((function(e) {
                        var t = e.element,
                            i = e.type,
                            n = e.callback,
                            s = e.options;
                        t.removeEventListener(i, n, s)
                    })), this.eventListeners = [])
                }

                function Ju() {
                    var e = this;
                    return new Promise((function(t) {
                        return e.ready ? setTimeout(t, 0) : Yu.call(e, e.elements.container, "ready", t)
                    })).then((function() {}))
                }

                function Qu(e) {
                    bu(e) && e.then(null, (function() {}))
                }

                function Zu(e) {
                    return !!(hu(e) || uu(e) && e.includes(":")) && (hu(e) ? e : e.split(":")).map(Number).every(cu)
                }

                function ed(e) {
                    if (!hu(e) || !e.every(cu)) return null;
                    var t = _c(e, 2),
                        i = t[0],
                        n = t[1],
                        s = function e(t, i) {
                            return 0 === i ? t : e(i, t % i)
                        }(i, n);
                    return [i / s, n / s]
                }

                function nd(e) {
                    var t = function(e) {
                            return Zu(e) ? e.split(":").map(Number) : null
                        },
                        i = t(e);
                    if (null === i && (i = t(this.config.ratio)), null === i && !xu(this.embed) && hu(this.embed.ratio) && (i = this.embed.ratio), null === i && this.isHTML5) {
                        var n = this.media;
                        i = ed([n.videoWidth, n.videoHeight])
                    }
                    return i
                }

                function rd(e) {
                    if (!this.isVideo) return {};
                    var t = this.elements.wrapper,
                        i = nd.call(this, e),
                        n = _c(hu(i) ? i : [0, 0], 2),
                        s = 100 / n[0] * n[1];
                    if (t.style.paddingBottom = "".concat(s, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                        var a = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                            r = (a - s) / (a / 50);
                        this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(r, "%)")
                    } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== i);
                    return {
                        padding: s,
                        ratio: i
                    }
                }
                var id = {
                    getSources: function() {
                        var e = this;
                        return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) {
                            var i = t.getAttribute("type");
                            return !!xu(i) || qu.mime.call(e, i)
                        })) : []
                    },
                    getQualityOptions: function() {
                        return this.config.quality.forced ? this.config.quality.options : id.getSources.call(this).map((function(e) {
                            return Number(e.getAttribute("size"))
                        })).filter(Boolean)
                    },
                    setup: function() {
                        if (this.isHTML5) {
                            var e = this;
                            e.options.speed = e.config.speed.options, xu(this.config.ratio) || rd.call(e), Object.defineProperty(e.media, "quality", {
                                get: function() {
                                    var t = id.getSources.call(e).find((function(t) {
                                        return t.getAttribute("src") === e.source
                                    }));
                                    return t && Number(t.getAttribute("size"))
                                },
                                set: function(t) {
                                    if (e.quality !== t) {
                                        if (e.config.quality.forced && pu(e.config.quality.onChange)) e.config.quality.onChange(t);
                                        else {
                                            var i = id.getSources.call(e).find((function(e) {
                                                return Number(e.getAttribute("size")) === t
                                            }));
                                            if (!i) return;
                                            var n = e.media,
                                                s = n.currentTime,
                                                a = n.paused,
                                                r = n.preload,
                                                o = n.readyState,
                                                l = n.playbackRate;
                                            e.media.src = i.getAttribute("src"), ("none" !== r || o) && (e.once("loadedmetadata", (function() {
                                                e.speed = l, e.currentTime = s, a || Qu(e.play())
                                            })), e.media.load())
                                        }
                                        Xu.call(e, e.media, "qualitychange", !1, {
                                            quality: t
                                        })
                                    }
                                }
                            })
                        }
                    },
                    cancelRequests: function() {
                        this.isHTML5 && (Mu(id.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                    }
                };

                function ad(e) {
                    return hu(e) ? e.filter((function(t, i) {
                        return e.indexOf(t) === i
                    })) : e
                }

                function od(e) {
                    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    return xu(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) {
                        return i[t].toString()
                    }))
                }
                var sd = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString())
                    },
                    ld = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return e.toString().replace(/\w\S*/g, (function(e) {
                            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                        }))
                    };

                function cd() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.toString();
                    return t = sd(t, "-", " "), t = sd(t, "_", " "), t = ld(t), sd(t, " ", "")
                }

                function ud(e) {
                    var t = document.createElement("div");
                    return t.appendChild(e), t.innerHTML
                }
                var pd = {
                        pip: "PIP",
                        airplay: "AirPlay",
                        html5: "HTML5",
                        vimeo: "Vimeo",
                        youtube: "YouTube"
                    },
                    hd = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (xu(e) || xu(t)) return "";
                        var i = _u(t.i18n, e);
                        if (xu(i)) return Object.keys(pd).includes(e) ? pd[e] : "";
                        var n = {
                            "{seektime}": t.seekTime,
                            "{title}": t.title
                        };
                        return Object.entries(n).forEach((function(e) {
                            var t = _c(e, 2),
                                n = t[0],
                                s = t[1];
                            i = sd(i, n, s)
                        })), i
                    },
                    fd = function() {
                        function e(t) {
                            yc(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
                        }
                        return wc(e, [{
                            key: "get",
                            value: function(t) {
                                if (!e.supported || !this.enabled) return null;
                                var i = window.localStorage.getItem(this.key);
                                if (xu(i)) return null;
                                var n = JSON.parse(i);
                                return uu(t) && t.length ? n[t] : n
                            }
                        }, {
                            key: "set",
                            value: function(t) {
                                if (e.supported && this.enabled && lu(t)) {
                                    var i = this.get();
                                    xu(i) && (i = {}), Cu(i, t), window.localStorage.setItem(this.key, JSON.stringify(i))
                                }
                            }
                        }], [{
                            key: "supported",
                            get: function() {
                                try {
                                    if (!("localStorage" in window)) return !1;
                                    var e = "___test";
                                    return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                                } catch (e) {
                                    return !1
                                }
                            }
                        }]), e
                    }();

                function md(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                    return new Promise((function(i, n) {
                        try {
                            var s = new XMLHttpRequest;
                            if (!("withCredentials" in s)) return;
                            s.addEventListener("load", (function() {
                                if ("text" === t) try {
                                    i(JSON.parse(s.responseText))
                                } catch (e) {
                                    i(s.responseText)
                                } else i(s.response)
                            })), s.addEventListener("error", (function() {
                                throw new Error(s.status)
                            })), s.open("GET", e, !0), s.responseType = t, s.send()
                        } catch (e) {
                            n(e)
                        }
                    }))
                }

                function gd(e, t) {
                    if (uu(e)) {
                        var i = "cache",
                            n = uu(t),
                            s = function() {
                                return null !== document.getElementById(t)
                            },
                            a = function(e, t) {
                                e.innerHTML = t, n && s() || document.body.insertAdjacentElement("afterbegin", e)
                            };
                        if (!n || !s()) {
                            var r = fd.supported,
                                o = document.createElement("div");
                            if (o.setAttribute("hidden", ""), n && o.setAttribute("id", t), r) {
                                var l = window.localStorage.getItem("".concat(i, "-").concat(t));
                                if (null !== l) {
                                    var c = JSON.parse(l);
                                    a(o, c.content)
                                }
                            }
                            md(e).then((function(e) {
                                xu(e) || (r && window.localStorage.setItem("".concat(i, "-").concat(t), JSON.stringify({
                                    content: e
                                })), a(o, e))
                            })).catch((function() {}))
                        }
                    }
                }
                var vd = function(e) {
                        return Math.trunc(e / 60 / 60 % 60, 10)
                    },
                    yd = function(e) {
                        return Math.trunc(e / 60 % 60, 10)
                    },
                    bd = function(e) {
                        return Math.trunc(e % 60, 10)
                    };

                function wd() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!cu(e)) return wd(void 0, t, i);
                    var n = function(e) {
                            return "0".concat(e).slice(-2)
                        },
                        s = vd(e),
                        a = yd(e),
                        r = bd(e);
                    return s = t || s > 0 ? "".concat(s, ":") : "", "".concat(i && e > 0 ? "-" : "").concat(s).concat(n(a), ":").concat(n(r))
                }
                var xd = {
                    getIconUrl: function() {
                        var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || Su.isIE && !window.svg4everybody;
                        return {
                            url: this.config.iconUrl,
                            cors: e
                        }
                    },
                    findElements: function() {
                        try {
                            return this.elements.controls = Bu.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                                play: Ru.call(this, this.config.selectors.buttons.play),
                                pause: Bu.call(this, this.config.selectors.buttons.pause),
                                restart: Bu.call(this, this.config.selectors.buttons.restart),
                                rewind: Bu.call(this, this.config.selectors.buttons.rewind),
                                fastForward: Bu.call(this, this.config.selectors.buttons.fastForward),
                                mute: Bu.call(this, this.config.selectors.buttons.mute),
                                pip: Bu.call(this, this.config.selectors.buttons.pip),
                                airplay: Bu.call(this, this.config.selectors.buttons.airplay),
                                settings: Bu.call(this, this.config.selectors.buttons.settings),
                                captions: Bu.call(this, this.config.selectors.buttons.captions),
                                fullscreen: Bu.call(this, this.config.selectors.buttons.fullscreen)
                            }, this.elements.progress = Bu.call(this, this.config.selectors.progress), this.elements.inputs = {
                                seek: Bu.call(this, this.config.selectors.inputs.seek),
                                volume: Bu.call(this, this.config.selectors.inputs.volume)
                            }, this.elements.display = {
                                buffer: Bu.call(this, this.config.selectors.display.buffer),
                                currentTime: Bu.call(this, this.config.selectors.display.currentTime),
                                duration: Bu.call(this, this.config.selectors.display.duration)
                            }, mu(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
                        } catch (e) {
                            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                        }
                    },
                    createIcon: function(e, t) {
                        var i = "http://www.w3.org/2000/svg",
                            n = xd.getIconUrl.call(this),
                            s = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
                            a = document.createElementNS(i, "svg");
                        Pu(a, Cu(t, {
                            "aria-hidden": "true",
                            focusable: "false"
                        }));
                        var r = document.createElementNS(i, "use"),
                            o = "".concat(s, "-").concat(e);
                        return "href" in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(r), a
                    },
                    createLabel: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = hd(e, this.config),
                            n = Tc(Tc({}, t), {}, {
                                class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                            });
                        return $u("span", n, i)
                    },
                    createBadge: function(e) {
                        if (xu(e)) return null;
                        var t = $u("span", {
                            class: this.config.classNames.menu.value
                        });
                        return t.appendChild($u("span", {
                            class: this.config.classNames.menu.badge
                        }, e)), t
                    },
                    createButton: function(e, t) {
                        var i = this,
                            n = Cu({}, t),
                            s = function() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                                return (e = cd(e)).charAt(0).toLowerCase() + e.slice(1)
                            }(e),
                            a = {
                                element: "button",
                                toggle: !1,
                                label: null,
                                icon: null,
                                labelPressed: null,
                                iconPressed: null
                            };
                        switch (["element", "icon", "label"].forEach((function(e) {
                            Object.keys(n).includes(e) && (a[e] = n[e], delete n[e])
                        })), "button" !== a.element || Object.keys(n).includes("type") || (n.type = "button"), Object.keys(n).includes("class") ? n.class.split(" ").some((function(e) {
                            return e === i.config.classNames.control
                        })) || Cu(n, {
                            class: "".concat(n.class, " ").concat(this.config.classNames.control)
                        }) : n.class = this.config.classNames.control, e) {
                            case "play":
                                a.toggle = !0, a.label = "play", a.labelPressed = "pause", a.icon = "play", a.iconPressed = "pause";
                                break;
                            case "mute":
                                a.toggle = !0, a.label = "mute", a.labelPressed = "unmute", a.icon = "volume", a.iconPressed = "muted";
                                break;
                            case "captions":
                                a.toggle = !0, a.label = "enableCaptions", a.labelPressed = "disableCaptions", a.icon = "captions-off", a.iconPressed = "captions-on";
                                break;
                            case "fullscreen":
                                a.toggle = !0, a.label = "enterFullscreen", a.labelPressed = "exitFullscreen", a.icon = "enter-fullscreen", a.iconPressed = "exit-fullscreen";
                                break;
                            case "play-large":
                                n.class += " ".concat(this.config.classNames.control, "--overlaid"), s = "play", a.label = "play", a.icon = "play";
                                break;
                            default:
                                xu(a.label) && (a.label = s), xu(a.icon) && (a.icon = e)
                        }
                        var r = $u(a.element);
                        return a.toggle ? (r.appendChild(xd.createIcon.call(this, a.iconPressed, {
                            class: "icon--pressed"
                        })), r.appendChild(xd.createIcon.call(this, a.icon, {
                            class: "icon--not-pressed"
                        })), r.appendChild(xd.createLabel.call(this, a.labelPressed, {
                            class: "label--pressed"
                        })), r.appendChild(xd.createLabel.call(this, a.label, {
                            class: "label--not-pressed"
                        }))) : (r.appendChild(xd.createIcon.call(this, a.icon)), r.appendChild(xd.createLabel.call(this, a.label))), Cu(n, Lu(this.config.selectors.buttons[s], n)), Pu(r, n), "play" === s ? (hu(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(r)) : this.elements.buttons[s] = r, r
                    },
                    createRange: function(e, t) {
                        var i = $u("input", Cu(Lu(this.config.selectors.inputs[e]), {
                            type: "range",
                            min: 0,
                            max: 100,
                            step: .01,
                            value: 0,
                            autocomplete: "off",
                            role: "slider",
                            "aria-label": hd(e, this.config),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": 0
                        }, t));
                        return this.elements.inputs[e] = i, xd.updateRangeFill.call(this, i), Jc.setup(i), i
                    },
                    createProgress: function(e, t) {
                        var i = $u("progress", Cu(Lu(this.config.selectors.display[e]), {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: "progressbar",
                            "aria-hidden": !0
                        }, t));
                        if ("volume" !== e) {
                            i.appendChild($u("span", null, "0"));
                            var n = {
                                    played: "played",
                                    buffer: "buffered"
                                }[e],
                                s = n ? hd(n, this.config) : "";
                            i.innerText = "% ".concat(s.toLowerCase())
                        }
                        return this.elements.display[e] = i, i
                    },
                    createTime: function(e, t) {
                        var i = Lu(this.config.selectors.display[e], t),
                            n = $u("div", Cu(i, {
                                class: "".concat(i.class ? i.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                                "aria-label": hd(e, this.config)
                            }), "00:00");
                        return this.elements.display[e] = n, n
                    },
                    bindMenuItemShortcuts: function(e, t) {
                        var i = this;
                        Yu.call(this, e, "keydown keyup", (function(n) {
                            if ([32, 38, 39, 40].includes(n.which) && (n.preventDefault(), n.stopPropagation(), "keydown" !== n.type)) {
                                var s, a = Du(e, '[role="menuitemradio"]');
                                !a && [32, 39].includes(n.which) ? xd.showMenuPanel.call(i, t, !0) : 32 !== n.which && (40 === n.which || a && 39 === n.which ? (s = e.nextElementSibling, mu(s) || (s = e.parentNode.firstElementChild)) : (s = e.previousElementSibling, mu(s) || (s = e.parentNode.lastElementChild)), Hu.call(i, s, !0))
                            }
                        }), !1), Yu.call(this, e, "keyup", (function(e) {
                            13 === e.which && xd.focusFirstMenuItem.call(i, null, !0)
                        }))
                    },
                    createMenuItem: function(e) {
                        var t = this,
                            i = e.value,
                            n = e.list,
                            s = e.type,
                            a = e.title,
                            r = e.badge,
                            o = void 0 === r ? null : r,
                            l = e.checked,
                            c = void 0 !== l && l,
                            u = Lu(this.config.selectors.inputs[s]),
                            d = $u("button", Cu(u, {
                                type: "button",
                                role: "menuitemradio",
                                class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                                "aria-checked": c,
                                value: i
                            })),
                            h = $u("span");
                        h.innerHTML = a, mu(o) && h.appendChild(o), d.appendChild(h), Object.defineProperty(d, "checked", {
                            enumerable: !0,
                            get: function() {
                                return "true" === d.getAttribute("aria-checked")
                            },
                            set: function(e) {
                                e && Array.from(d.parentNode.children).filter((function(e) {
                                    return Du(e, '[role="menuitemradio"]')
                                })).forEach((function(e) {
                                    return e.setAttribute("aria-checked", "false")
                                })), d.setAttribute("aria-checked", e ? "true" : "false")
                            }
                        }), this.listeners.bind(d, "click keyup", (function(e) {
                            if (!vu(e) || 32 === e.which) {
                                switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, s) {
                                    case "language":
                                        t.currentTrack = Number(i);
                                        break;
                                    case "quality":
                                        t.quality = i;
                                        break;
                                    case "speed":
                                        t.speed = parseFloat(i)
                                }
                                xd.showMenuPanel.call(t, "home", vu(e))
                            }
                        }), s, !1), xd.bindMenuItemShortcuts.call(this, d, s), n.appendChild(d)
                    },
                    formatTime: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!cu(e)) return e;
                        var i = vd(this.duration) > 0;
                        return wd(e, i, t)
                    },
                    updateTimeDisplay: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        mu(e) && cu(t) && (e.innerText = xd.formatTime(t, i))
                    },
                    updateVolume: function() {
                        this.supported.ui && (mu(this.elements.inputs.volume) && xd.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), mu(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                    },
                    setRange: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        mu(e) && (e.value = t, xd.updateRangeFill.call(this, e))
                    },
                    updateProgress: function(e) {
                        var t = this;
                        if (this.supported.ui && gu(e)) {
                            var i = 0;
                            if (e) switch (e.type) {
                                case "timeupdate":
                                case "seeking":
                                case "seeked":
                                    i = function(e, t) {
                                        return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
                                    }(this.currentTime, this.duration), "timeupdate" === e.type && xd.setRange.call(this, this.elements.inputs.seek, i);
                                    break;
                                case "playing":
                                case "progress":
                                    ! function(e, i) {
                                        var n = cu(i) ? i : 0,
                                            s = mu(e) ? e : t.elements.display.buffer;
                                        if (mu(s)) {
                                            s.value = n;
                                            var a = s.getElementsByTagName("span")[0];
                                            mu(a) && (a.childNodes[0].nodeValue = n)
                                        }
                                    }(this.elements.display.buffer, 100 * this.buffered)
                            }
                        }
                    },
                    updateRangeFill: function(e) {
                        var t = gu(e) ? e.target : e;
                        if (mu(t) && "range" === t.getAttribute("type")) {
                            if (Du(t, this.config.selectors.inputs.seek)) {
                                t.setAttribute("aria-valuenow", this.currentTime);
                                var i = xd.formatTime(this.currentTime),
                                    n = xd.formatTime(this.duration),
                                    s = hd("seekLabel", this.config);
                                t.setAttribute("aria-valuetext", s.replace("{currentTime}", i).replace("{duration}", n))
                            } else if (Du(t, this.config.selectors.inputs.volume)) {
                                var a = 100 * t.value;
                                t.setAttribute("aria-valuenow", a), t.setAttribute("aria-valuetext", "".concat(a.toFixed(1), "%"))
                            } else t.setAttribute("aria-valuenow", t.value);
                            Su.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
                        }
                    },
                    updateSeekTooltip: function(e) {
                        var t = this;
                        if (this.config.tooltips.seek && mu(this.elements.inputs.seek) && mu(this.elements.display.seekTooltip) && 0 !== this.duration) {
                            var i = "".concat(this.config.classNames.tooltip, "--visible"),
                                n = function(e) {
                                    return zu(t.elements.display.seekTooltip, i, e)
                                };
                            if (this.touch) n(!1);
                            else {
                                var s = 0,
                                    a = this.elements.progress.getBoundingClientRect();
                                if (gu(e)) s = 100 / a.width * (e.pageX - a.left);
                                else {
                                    if (!Nu(this.elements.display.seekTooltip, i)) return;
                                    s = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                                }
                                s < 0 ? s = 0 : s > 100 && (s = 100), xd.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * s), this.elements.display.seekTooltip.style.left = "".concat(s, "%"), gu(e) && ["mouseenter", "mouseleave"].includes(e.type) && n("mouseenter" === e.type)
                            }
                        }
                    },
                    timeUpdate: function(e) {
                        var t = !mu(this.elements.display.duration) && this.config.invertTime;
                        xd.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || xd.updateProgress.call(this, e)
                    },
                    durationUpdate: function() {
                        if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                            if (this.duration >= Math.pow(2, 32)) return ju(this.elements.display.currentTime, !0), void ju(this.elements.progress, !0);
                            mu(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                            var e = mu(this.elements.display.duration);
                            !e && this.config.displayDuration && this.paused && xd.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && xd.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), xd.updateSeekTooltip.call(this)
                        }
                    },
                    toggleMenuButton: function(e, t) {
                        ju(this.elements.settings.buttons[e], !t)
                    },
                    updateSetting: function(e, t, i) {
                        var n = this.elements.settings.panels[e],
                            s = null,
                            a = t;
                        if ("captions" === e) s = this.currentTrack;
                        else {
                            if (s = xu(i) ? this[e] : i, xu(s) && (s = this.config[e].default), !xu(this.options[e]) && !this.options[e].includes(s)) return void this.debug.warn("Unsupported value of '".concat(s, "' for ").concat(e));
                            if (!this.config[e].options.includes(s)) return void this.debug.warn("Disabled value of '".concat(s, "' for ").concat(e))
                        }
                        if (mu(a) || (a = n && n.querySelector('[role="menu"]')), mu(a)) {
                            this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = xd.getLabel.call(this, e, s);
                            var r = a && a.querySelector('[value="'.concat(s, '"]'));
                            mu(r) && (r.checked = !0)
                        }
                    },
                    getLabel: function(e, t) {
                        switch (e) {
                            case "speed":
                                return 1 === t ? hd("normal", this.config) : "".concat(t, "&times;");
                            case "quality":
                                if (cu(t)) {
                                    var i = hd("qualityLabel.".concat(t), this.config);
                                    return i.length ? i : "".concat(t, "p")
                                }
                                return ld(t);
                            case "captions":
                                return Sd.getLabel.call(this);
                            default:
                                return null
                        }
                    },
                    setQualityMenu: function(e) {
                        var t = this;
                        if (mu(this.elements.settings.panels.quality)) {
                            var i = "quality",
                                n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                            hu(e) && (this.options.quality = ad(e).filter((function(e) {
                                return t.config.quality.options.includes(e)
                            })));
                            var s = !xu(this.options.quality) && this.options.quality.length > 1;
                            if (xd.toggleMenuButton.call(this, i, s), Au(n), xd.checkMenu.call(this), s) {
                                var a = function(e) {
                                    var i = hd("qualityBadge.".concat(e), t.config);
                                    return i.length ? xd.createBadge.call(t, i) : null
                                };
                                this.options.quality.sort((function(e, i) {
                                    var n = t.config.quality.options;
                                    return n.indexOf(e) > n.indexOf(i) ? 1 : -1
                                })).forEach((function(e) {
                                    xd.createMenuItem.call(t, {
                                        value: e,
                                        list: n,
                                        type: i,
                                        title: xd.getLabel.call(t, "quality", e),
                                        badge: a(e)
                                    })
                                })), xd.updateSetting.call(this, i, n)
                            }
                        }
                    },
                    setCaptionsMenu: function() {
                        var e = this;
                        if (mu(this.elements.settings.panels.captions)) {
                            var t = "captions",
                                i = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                                n = Sd.getTracks.call(this),
                                s = Boolean(n.length);
                            if (xd.toggleMenuButton.call(this, t, s), Au(i), xd.checkMenu.call(this), s) {
                                var a = n.map((function(t, n) {
                                    return {
                                        value: n,
                                        checked: e.captions.toggled && e.currentTrack === n,
                                        title: Sd.getLabel.call(e, t),
                                        badge: t.language && xd.createBadge.call(e, t.language.toUpperCase()),
                                        list: i,
                                        type: "language"
                                    }
                                }));
                                a.unshift({
                                    value: -1,
                                    checked: !this.captions.toggled,
                                    title: hd("disabled", this.config),
                                    list: i,
                                    type: "language"
                                }), a.forEach(xd.createMenuItem.bind(this)), xd.updateSetting.call(this, t, i)
                            }
                        }
                    },
                    setSpeedMenu: function() {
                        var e = this;
                        if (mu(this.elements.settings.panels.speed)) {
                            var t = "speed",
                                i = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                            this.options.speed = this.options.speed.filter((function(t) {
                                return t >= e.minimumSpeed && t <= e.maximumSpeed
                            }));
                            var n = !xu(this.options.speed) && this.options.speed.length > 1;
                            xd.toggleMenuButton.call(this, t, n), Au(i), xd.checkMenu.call(this), n && (this.options.speed.forEach((function(n) {
                                xd.createMenuItem.call(e, {
                                    value: n,
                                    list: i,
                                    type: t,
                                    title: xd.getLabel.call(e, "speed", n)
                                })
                            })), xd.updateSetting.call(this, t, i))
                        }
                    },
                    checkMenu: function() {
                        var e = this.elements.settings.buttons,
                            t = !xu(e) && Object.values(e).some((function(e) {
                                return !e.hidden
                            }));
                        ju(this.elements.settings.menu, !t)
                    },
                    focusFirstMenuItem: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!this.elements.settings.popup.hidden) {
                            var i = e;
                            mu(i) || (i = Object.values(this.elements.settings.panels).find((function(e) {
                                return !e.hidden
                            })));
                            var n = i.querySelector('[role^="menuitem"]');
                            Hu.call(this, n, t)
                        }
                    },
                    toggleMenu: function(e) {
                        var t = this.elements.settings.popup,
                            i = this.elements.buttons.settings;
                        if (mu(t) && mu(i)) {
                            var n = t.hidden,
                                s = n;
                            if (du(e)) s = e;
                            else if (vu(e) && 27 === e.which) s = !1;
                            else if (gu(e)) {
                                var a = pu(e.composedPath) ? e.composedPath()[0] : e.target,
                                    r = t.contains(a);
                                if (r || !r && e.target !== i && s) return
                            }
                            i.setAttribute("aria-expanded", s), ju(t, !s), zu(this.elements.container, this.config.classNames.menu.open, s), s && vu(e) ? xd.focusFirstMenuItem.call(this, null, !0) : s || n || Hu.call(this, i, vu(e))
                        }
                    },
                    getMenuSize: function(e) {
                        var t = e.cloneNode(!0);
                        t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                        var i = t.scrollWidth,
                            n = t.scrollHeight;
                        return Mu(t), {
                            width: i,
                            height: n
                        }
                    },
                    showMenuPanel: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
                        if (mu(n)) {
                            var s = n.parentNode,
                                a = Array.from(s.children).find((function(e) {
                                    return !e.hidden
                                }));
                            if (qu.transitions && !qu.reducedMotion) {
                                s.style.width = "".concat(a.scrollWidth, "px"), s.style.height = "".concat(a.scrollHeight, "px");
                                var r = xd.getMenuSize.call(this, n),
                                    o = function t(i) {
                                        i.target === s && ["width", "height"].includes(i.propertyName) && (s.style.width = "", s.style.height = "", Gu.call(e, s, ku, t))
                                    };
                                Yu.call(this, s, ku, o), s.style.width = "".concat(r.width, "px"), s.style.height = "".concat(r.height, "px")
                            }
                            ju(a, !0), ju(n, !1), xd.focusFirstMenuItem.call(this, n, i)
                        }
                    },
                    setDownloadUrl: function() {
                        var e = this.elements.buttons.download;
                        mu(e) && e.setAttribute("href", this.download)
                    },
                    create: function(e) {
                        var t = this,
                            i = xd.bindMenuItemShortcuts,
                            n = xd.createButton,
                            s = xd.createProgress,
                            a = xd.createRange,
                            r = xd.createTime,
                            o = xd.setQualityMenu,
                            l = xd.setSpeedMenu,
                            c = xd.showMenuPanel;
                        this.elements.controls = null, hu(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(n.call(this, "play-large"));
                        var u = $u("div", Lu(this.config.selectors.controls.wrapper));
                        this.elements.controls = u;
                        var d = {
                            class: "plyr__controls__item"
                        };
                        return ad(hu(this.config.controls) ? this.config.controls : []).forEach((function(o) {
                            if ("restart" === o && u.appendChild(n.call(t, "restart", d)), "rewind" === o && u.appendChild(n.call(t, "rewind", d)), "play" === o && u.appendChild(n.call(t, "play", d)), "fast-forward" === o && u.appendChild(n.call(t, "fast-forward", d)), "progress" === o) {
                                var l = $u("div", {
                                        class: "".concat(d.class, " plyr__progress__container")
                                    }),
                                    h = $u("div", Lu(t.config.selectors.progress));
                                if (h.appendChild(a.call(t, "seek", {
                                        id: "plyr-seek-".concat(e.id)
                                    })), h.appendChild(s.call(t, "buffer")), t.config.tooltips.seek) {
                                    var f = $u("span", {
                                        class: t.config.classNames.tooltip
                                    }, "00:00");
                                    h.appendChild(f), t.elements.display.seekTooltip = f
                                }
                                t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l)
                            }
                            if ("current-time" === o && u.appendChild(r.call(t, "currentTime", d)), "duration" === o && u.appendChild(r.call(t, "duration", d)), "mute" === o || "volume" === o) {
                                var p = t.elements.volume;
                                if (mu(p) && u.contains(p) || (p = $u("div", Cu({}, d, {
                                        class: "".concat(d.class, " plyr__volume").trim()
                                    })), t.elements.volume = p, u.appendChild(p)), "mute" === o && p.appendChild(n.call(t, "mute")), "volume" === o && !Su.isIos) {
                                    var g = {
                                        max: 1,
                                        step: .05,
                                        value: t.config.volume
                                    };
                                    p.appendChild(a.call(t, "volume", Cu(g, {
                                        id: "plyr-volume-".concat(e.id)
                                    })))
                                }
                            }
                            if ("captions" === o && u.appendChild(n.call(t, "captions", d)), "settings" === o && !xu(t.config.settings)) {
                                var m = $u("div", Cu({}, d, {
                                    class: "".concat(d.class, " plyr__menu").trim(),
                                    hidden: ""
                                }));
                                m.appendChild(n.call(t, "settings", {
                                    "aria-haspopup": !0,
                                    "aria-controls": "plyr-settings-".concat(e.id),
                                    "aria-expanded": !1
                                }));
                                var v = $u("div", {
                                        class: "plyr__menu__container",
                                        id: "plyr-settings-".concat(e.id),
                                        hidden: ""
                                    }),
                                    y = $u("div"),
                                    b = $u("div", {
                                        id: "plyr-settings-".concat(e.id, "-home")
                                    }),
                                    w = $u("div", {
                                        role: "menu"
                                    });
                                b.appendChild(w), y.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function(n) {
                                    var s = $u("button", Cu(Lu(t.config.selectors.buttons.settings), {
                                        type: "button",
                                        class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                                        role: "menuitem",
                                        "aria-haspopup": !0,
                                        hidden: ""
                                    }));
                                    i.call(t, s, n), Yu.call(t, s, "click", (function() {
                                        c.call(t, n, !1)
                                    }));
                                    var a = $u("span", null, hd(n, t.config)),
                                        r = $u("span", {
                                            class: t.config.classNames.menu.value
                                        });
                                    r.innerHTML = e[n], a.appendChild(r), s.appendChild(a), w.appendChild(s);
                                    var o = $u("div", {
                                            id: "plyr-settings-".concat(e.id, "-").concat(n),
                                            hidden: ""
                                        }),
                                        l = $u("button", {
                                            type: "button",
                                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                                        });
                                    l.appendChild($u("span", {
                                        "aria-hidden": !0
                                    }, hd(n, t.config))), l.appendChild($u("span", {
                                        class: t.config.classNames.hidden
                                    }, hd("menuBack", t.config))), Yu.call(t, o, "keydown", (function(e) {
                                        37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0))
                                    }), !1), Yu.call(t, l, "click", (function() {
                                        c.call(t, "home", !1)
                                    })), o.appendChild(l), o.appendChild($u("div", {
                                        role: "menu"
                                    })), y.appendChild(o), t.elements.settings.buttons[n] = s, t.elements.settings.panels[n] = o
                                })), v.appendChild(y), m.appendChild(v), u.appendChild(m), t.elements.settings.popup = v, t.elements.settings.menu = m
                            }
                            if ("pip" === o && qu.pip && u.appendChild(n.call(t, "pip", d)), "airplay" === o && qu.airplay && u.appendChild(n.call(t, "airplay", d)), "download" === o) {
                                var x = Cu({}, d, {
                                    element: "a",
                                    href: t.download,
                                    target: "_blank"
                                });
                                t.isHTML5 && (x.download = "");
                                var k = t.config.urls.download;
                                !wu(k) && t.isEmbed && Cu(x, {
                                    icon: "logo-".concat(t.provider),
                                    label: t.provider
                                }), u.appendChild(n.call(t, "download", x))
                            }
                            "fullscreen" === o && u.appendChild(n.call(t, "fullscreen", d))
                        })), this.isHTML5 && o.call(this, id.getQualityOptions.call(this)), l.call(this), u
                    },
                    inject: function() {
                        var e = this;
                        if (this.config.loadSprite) {
                            var t = xd.getIconUrl.call(this);
                            t.cors && gd(t.url, "sprite-plyr")
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        var i = null;
                        this.elements.controls = null;
                        var a, n, r = {
                                id: this.id,
                                seektime: this.config.seekTime,
                                title: this.config.title
                            },
                            s = !0;
                        if (pu(this.config.controls) && (this.config.controls = this.config.controls.call(this, r)), this.config.controls || (this.config.controls = []), mu(this.config.controls) || uu(this.config.controls) ? i = this.config.controls : (i = xd.create.call(this, {
                                id: this.id,
                                seektime: this.config.seekTime,
                                speed: this.speed,
                                quality: this.quality,
                                captions: Sd.getLabel.call(this)
                            }), s = !1), s && uu(this.config.controls) && (a = i, Object.entries(r).forEach((function(e) {
                                var t = _c(e, 2),
                                    i = t[0],
                                    n = t[1];
                                a = sd(a, "{".concat(i, "}"), n)
                            })), i = a), uu(this.config.selectors.controls.container) && (n = document.querySelector(this.config.selectors.controls.container)), mu(n) || (n = this.elements.container), n[mu(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), mu(this.elements.controls) || xd.findElements.call(this), !xu(this.elements.buttons)) {
                            var o = function(t) {
                                var i = e.config.classNames.controlPressed;
                                Object.defineProperty(t, "pressed", {
                                    enumerable: !0,
                                    get: function() {
                                        return Nu(t, i)
                                    },
                                    set: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                        zu(t, i, e)
                                    }
                                })
                            };
                            Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) {
                                hu(e) || fu(e) ? Array.from(e).filter(Boolean).forEach(o) : o(e)
                            }))
                        }
                        if (Su.isEdge && Tu(n), this.config.tooltips.controls) {
                            var l = this.config,
                                c = l.classNames,
                                u = l.selectors,
                                d = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(c.hidden),
                                h = Ru.call(this, d);
                            Array.from(h).forEach((function(t) {
                                zu(t, e.config.classNames.hidden, !1), zu(t, e.config.classNames.tooltip, !0)
                            }))
                        }
                    }
                };

                function kd(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = e;
                    if (t) {
                        var n = document.createElement("a");
                        n.href = i, i = n.href
                    }
                    try {
                        return new URL(i)
                    } catch (e) {
                        return null
                    }
                }

                function Td(e) {
                    var t = new URLSearchParams;
                    return lu(e) && Object.entries(e).forEach((function(e) {
                        var i = _c(e, 2),
                            n = i[0],
                            s = i[1];
                        t.set(n, s)
                    })), t
                }
                var Sd = {
                        setup: function() {
                            if (this.supported.ui)
                                if (!this.isVideo || this.isYouTube || this.isHTML5 && !qu.textTracks) hu(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && xd.setCaptionsMenu.call(this);
                                else {
                                    if (mu(this.elements.captions) || (this.elements.captions = $u("div", Lu(this.config.selectors.captions)), function(e, t) {
                                            mu(e) && mu(t) && t.parentNode.insertBefore(e, t.nextSibling)
                                        }(this.elements.captions, this.elements.wrapper)), Su.isIE && window.URL) {
                                        var e = this.media.querySelectorAll("track");
                                        Array.from(e).forEach((function(e) {
                                            var t = e.getAttribute("src"),
                                                i = kd(t);
                                            null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && md(t, "blob").then((function(t) {
                                                e.setAttribute("src", window.URL.createObjectURL(t))
                                            })).catch((function() {
                                                Mu(e)
                                            }))
                                        }))
                                    }
                                    var t = ad((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) {
                                            return e.split("-")[0]
                                        }))),
                                        i = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                                    "auto" === i && (i = _c(t, 1)[0]);
                                    var n = this.storage.get("captions");
                                    if (du(n) || (n = this.config.captions.active), Object.assign(this.captions, {
                                            toggled: !1,
                                            active: n,
                                            language: i,
                                            languages: t
                                        }), this.isHTML5) {
                                        var s = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                        Yu.call(this, this.media.textTracks, s, Sd.update.bind(this))
                                    }
                                    setTimeout(Sd.update.bind(this), 0)
                                }
                        },
                        update: function() {
                            var e = this,
                                t = Sd.getTracks.call(this, !0),
                                i = this.captions,
                                n = i.active,
                                s = i.language,
                                a = i.meta,
                                r = i.currentTrackNode,
                                o = Boolean(t.find((function(e) {
                                    return e.language === s
                                })));
                            this.isHTML5 && this.isVideo && t.filter((function(e) {
                                return !a.get(e)
                            })).forEach((function(t) {
                                e.debug.log("Track added", t), a.set(t, {
                                    default: "showing" === t.mode
                                }), "showing" === t.mode && (t.mode = "hidden"), Yu.call(e, t, "cuechange", (function() {
                                    return Sd.updateCues.call(e)
                                }))
                            })), (o && this.language !== s || !t.includes(r)) && (Sd.setLanguage.call(this, s), Sd.toggle.call(this, n && o)), zu(this.elements.container, this.config.classNames.captions.enabled, !xu(t)), hu(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && xd.setCaptionsMenu.call(this)
                        },
                        toggle: function(e) {
                            var t = this,
                                i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            if (this.supported.ui) {
                                var n = this.captions.toggled,
                                    s = this.config.classNames.captions.active,
                                    a = su(e) ? !n : e;
                                if (a !== n) {
                                    if (i || (this.captions.active = a, this.storage.set({
                                            captions: a
                                        })), !this.language && a && !i) {
                                        var r = Sd.getTracks.call(this),
                                            o = Sd.findTrack.call(this, [this.captions.language].concat(Cc(this.captions.languages)), !0);
                                        return this.captions.language = o.language, void Sd.set.call(this, r.indexOf(o))
                                    }
                                    this.elements.buttons.captions && (this.elements.buttons.captions.pressed = a), zu(this.elements.container, s, a), this.captions.toggled = a, xd.updateSetting.call(this, "captions"), Xu.call(this, this.media, a ? "captionsenabled" : "captionsdisabled")
                                }
                                setTimeout((function() {
                                    a && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden")
                                }))
                            }
                        },
                        set: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                i = Sd.getTracks.call(this);
                            if (-1 !== e)
                                if (cu(e))
                                    if (e in i) {
                                        if (this.captions.currentTrack !== e) {
                                            this.captions.currentTrack = e;
                                            var n = i[e],
                                                s = n || {},
                                                a = s.language;
                                            this.captions.currentTrackNode = n, xd.updateSetting.call(this, "captions"), t || (this.captions.language = a, this.storage.set({
                                                language: a
                                            })), this.isVimeo && this.embed.enableTextTrack(a), Xu.call(this, this.media, "languagechange")
                                        }
                                        Sd.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Sd.updateCues.call(this)
                                    } else this.debug.warn("Track not found", e);
                            else this.debug.warn("Invalid caption argument", e);
                            else Sd.toggle.call(this, !1, t)
                        },
                        setLanguage: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            if (uu(e)) {
                                var i = e.toLowerCase();
                                this.captions.language = i;
                                var n = Sd.getTracks.call(this),
                                    s = Sd.findTrack.call(this, [i]);
                                Sd.set.call(this, n.indexOf(s), t)
                            } else this.debug.warn("Invalid language argument", e)
                        },
                        getTracks: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                i = Array.from((this.media || {}).textTracks || []);
                            return i.filter((function(i) {
                                return !e.isHTML5 || t || e.captions.meta.has(i)
                            })).filter((function(e) {
                                return ["captions", "subtitles"].includes(e.kind)
                            }))
                        },
                        findTrack: function(e) {
                            var t, i = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                s = Sd.getTracks.call(this),
                                a = function(e) {
                                    return Number((i.captions.meta.get(e) || {}).default)
                                },
                                r = Array.from(s).sort((function(e, t) {
                                    return a(t) - a(e)
                                }));
                            return e.every((function(e) {
                                return !(t = r.find((function(t) {
                                    return t.language === e
                                })))
                            })), t || (n ? r[0] : void 0)
                        },
                        getCurrentTrack: function() {
                            return Sd.getTracks.call(this)[this.currentTrack]
                        },
                        getLabel: function(e) {
                            var t = e;
                            return !yu(t) && qu.textTracks && this.captions.toggled && (t = Sd.getCurrentTrack.call(this)), yu(t) ? xu(t.label) ? xu(t.language) ? hd("enabled", this.config) : e.language.toUpperCase() : t.label : hd("disabled", this.config)
                        },
                        updateCues: function(e) {
                            if (this.supported.ui)
                                if (mu(this.elements.captions))
                                    if (su(e) || Array.isArray(e)) {
                                        var t = e;
                                        if (!t) {
                                            var i = Sd.getCurrentTrack.call(this);
                                            t = Array.from((i || {}).activeCues || []).map((function(e) {
                                                return e.getCueAsHTML()
                                            })).map(ud)
                                        }
                                        var n = t.map((function(e) {
                                            return e.trim()
                                        })).join("\n");
                                        if (n !== this.elements.captions.innerHTML) {
                                            Au(this.elements.captions);
                                            var s = $u("span", Lu(this.config.selectors.caption));
                                            s.innerHTML = n, this.elements.captions.appendChild(s), Xu.call(this, this.media, "cuechange")
                                        }
                                    } else this.debug.warn("updateCues: Invalid input", e);
                            else this.debug.warn("No captions element to render to")
                        }
                    },
                    _d = {
                        enabled: !0,
                        title: "",
                        debug: !1,
                        autoplay: !1,
                        autopause: !0,
                        playsinline: !0,
                        seekTime: 10,
                        volume: 1,
                        muted: !1,
                        duration: null,
                        displayDuration: !0,
                        invertTime: !0,
                        toggleInvert: !0,
                        ratio: null,
                        clickToPlay: !0,
                        hideControls: !0,
                        resetOnEnd: !1,
                        disableContextMenu: !0,
                        loadSprite: !0,
                        iconPrefix: "plyr",
                        iconUrl: "https://cdn.plyr.io/3.6.1/plyr.svg",
                        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                        quality: {
                            default: 576,
                            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                            forced: !1,
                            onChange: null
                        },
                        loop: {
                            active: !1
                        },
                        speed: {
                            selected: 1,
                            options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                        },
                        keyboard: {
                            focused: !0,
                            global: !1
                        },
                        tooltips: {
                            controls: !1,
                            seek: !0
                        },
                        captions: {
                            active: !1,
                            language: "auto",
                            update: !1
                        },
                        fullscreen: {
                            enabled: !0,
                            fallback: !0,
                            iosNative: !1
                        },
                        storage: {
                            enabled: !0,
                            key: "plyr"
                        },
                        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                        settings: ["captions", "quality", "speed"],
                        i18n: {
                            restart: "Restart",
                            rewind: "Rewind {seektime}s",
                            play: "Play",
                            pause: "Pause",
                            fastForward: "Forward {seektime}s",
                            seek: "Seek",
                            seekLabel: "{currentTime} of {duration}",
                            played: "Played",
                            buffered: "Buffered",
                            currentTime: "Current time",
                            duration: "Duration",
                            volume: "Volume",
                            mute: "Mute",
                            unmute: "Unmute",
                            enableCaptions: "Enable captions",
                            disableCaptions: "Disable captions",
                            download: "Download",
                            enterFullscreen: "Enter fullscreen",
                            exitFullscreen: "Exit fullscreen",
                            frameTitle: "Player for {title}",
                            captions: "Captions",
                            settings: "Settings",
                            pip: "PIP",
                            menuBack: "Go back to previous menu",
                            speed: "Speed",
                            normal: "Normal",
                            quality: "Quality",
                            loop: "Loop",
                            start: "Start",
                            end: "End",
                            all: "All",
                            reset: "Reset",
                            disabled: "Disabled",
                            enabled: "Enabled",
                            advertisement: "Ad",
                            qualityBadge: {
                                2160: "4K",
                                1440: "HD",
                                1080: "HD",
                                720: "HD",
                                576: "SD",
                                480: "SD"
                            }
                        },
                        urls: {
                            download: null,
                            vimeo: {
                                sdk: "https://player.vimeo.com/api/player.js",
                                iframe: "https://player.vimeo.com/video/{0}?{1}",
                                api: "https://vimeo.com/api/v2/video/{0}.json"
                            },
                            youtube: {
                                sdk: "https://www.youtube.com/iframe_api",
                                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                            },
                            googleIMA: {
                                sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                            }
                        },
                        listeners: {
                            seek: null,
                            play: null,
                            pause: null,
                            restart: null,
                            rewind: null,
                            fastForward: null,
                            mute: null,
                            volume: null,
                            captions: null,
                            download: null,
                            fullscreen: null,
                            pip: null,
                            airplay: null,
                            speed: null,
                            quality: null,
                            loop: null,
                            language: null
                        },
                        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                        selectors: {
                            editable: "input, textarea, select, [contenteditable]",
                            container: ".plyr",
                            controls: {
                                container: null,
                                wrapper: ".plyr__controls"
                            },
                            labels: "[data-plyr]",
                            buttons: {
                                play: '[data-plyr="play"]',
                                pause: '[data-plyr="pause"]',
                                restart: '[data-plyr="restart"]',
                                rewind: '[data-plyr="rewind"]',
                                fastForward: '[data-plyr="fast-forward"]',
                                mute: '[data-plyr="mute"]',
                                captions: '[data-plyr="captions"]',
                                download: '[data-plyr="download"]',
                                fullscreen: '[data-plyr="fullscreen"]',
                                pip: '[data-plyr="pip"]',
                                airplay: '[data-plyr="airplay"]',
                                settings: '[data-plyr="settings"]',
                                loop: '[data-plyr="loop"]'
                            },
                            inputs: {
                                seek: '[data-plyr="seek"]',
                                volume: '[data-plyr="volume"]',
                                speed: '[data-plyr="speed"]',
                                language: '[data-plyr="language"]',
                                quality: '[data-plyr="quality"]'
                            },
                            display: {
                                currentTime: ".plyr__time--current",
                                duration: ".plyr__time--duration",
                                buffer: ".plyr__progress__buffer",
                                loop: ".plyr__progress__loop",
                                volume: ".plyr__volume--display"
                            },
                            progress: ".plyr__progress",
                            captions: ".plyr__captions",
                            caption: ".plyr__caption"
                        },
                        classNames: {
                            type: "plyr--{0}",
                            provider: "plyr--{0}",
                            video: "plyr__video-wrapper",
                            embed: "plyr__video-embed",
                            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                            embedContainer: "plyr__video-embed__container",
                            poster: "plyr__poster",
                            posterEnabled: "plyr__poster-enabled",
                            ads: "plyr__ads",
                            control: "plyr__control",
                            controlPressed: "plyr__control--pressed",
                            playing: "plyr--playing",
                            paused: "plyr--paused",
                            stopped: "plyr--stopped",
                            loading: "plyr--loading",
                            hover: "plyr--hover",
                            tooltip: "plyr__tooltip",
                            cues: "plyr__cues",
                            hidden: "plyr__sr-only",
                            hideControls: "plyr--hide-controls",
                            isIos: "plyr--is-ios",
                            isTouch: "plyr--is-touch",
                            uiSupported: "plyr--full-ui",
                            noTransition: "plyr--no-transition",
                            display: {
                                time: "plyr__time"
                            },
                            menu: {
                                value: "plyr__menu__value",
                                badge: "plyr__badge",
                                open: "plyr--menu-open"
                            },
                            captions: {
                                enabled: "plyr--captions-enabled",
                                active: "plyr--captions-active"
                            },
                            fullscreen: {
                                enabled: "plyr--fullscreen-enabled",
                                fallback: "plyr--fullscreen-fallback"
                            },
                            pip: {
                                supported: "plyr--pip-supported",
                                active: "plyr--pip-active"
                            },
                            airplay: {
                                supported: "plyr--airplay-supported",
                                active: "plyr--airplay-active"
                            },
                            tabFocus: "plyr__tab-focus",
                            previewThumbnails: {
                                thumbContainer: "plyr__preview-thumb",
                                thumbContainerShown: "plyr__preview-thumb--is-shown",
                                imageContainer: "plyr__preview-thumb__image-container",
                                timeContainer: "plyr__preview-thumb__time-container",
                                scrubbingContainer: "plyr__preview-scrubbing",
                                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                            }
                        },
                        attributes: {
                            embed: {
                                provider: "data-plyr-provider",
                                id: "data-plyr-embed-id"
                            }
                        },
                        ads: {
                            enabled: !1,
                            publisherId: "",
                            tagUrl: ""
                        },
                        previewThumbnails: {
                            enabled: !1,
                            src: ""
                        },
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            speed: !0,
                            transparent: !1,
                            premium: !1,
                            referrerPolicy: null
                        },
                        youtube: {
                            noCookie: !0,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1
                        }
                    },
                    Cd = "picture-in-picture",
                    Ed = "inline",
                    Pd = {
                        html5: "html5",
                        youtube: "youtube",
                        vimeo: "vimeo"
                    },
                    $d = "audio",
                    Od = "video";
                var Md = function() {},
                    Ad = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            yc(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
                        }
                        return wc(e, [{
                            key: "log",
                            get: function() {
                                return this.enabled ? Function.prototype.bind.call(console.log, console) : Md
                            }
                        }, {
                            key: "warn",
                            get: function() {
                                return this.enabled ? Function.prototype.bind.call(console.warn, console) : Md
                            }
                        }, {
                            key: "error",
                            get: function() {
                                return this.enabled ? Function.prototype.bind.call(console.error, console) : Md
                            }
                        }]), e
                    }(),
                    Id = function() {
                        function e(t) {
                            var i = this;
                            yc(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                                x: 0,
                                y: 0
                            }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                                return (Element.prototype.closest || function() {
                                    var e = this;
                                    do {
                                        if (Du.matches(e, t)) return e;
                                        e = e.parentElement || e.parentNode
                                    } while (null !== e && 1 === e.nodeType);
                                    return null
                                }).call(e, t)
                            }(this.player.elements.container, t.config.fullscreen.container), Yu.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
                                i.onChange()
                            })), Yu.call(this.player, this.player.elements.container, "dblclick", (function(e) {
                                mu(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle()
                            })), Yu.call(this, this.player.elements.container, "keydown", (function(e) {
                                return i.trapFocus(e)
                            })), this.update()
                        }
                        return wc(e, [{
                            key: "onChange",
                            value: function() {
                                if (this.enabled) {
                                    var e = this.player.elements.buttons.fullscreen;
                                    mu(e) && (e.pressed = this.active);
                                    var t = this.target === this.player.media ? this.target : this.player.elements.container;
                                    Xu.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                                }
                            }
                        }, {
                            key: "toggleFallback",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (e ? this.scrollPosition = {
                                        x: window.scrollX || 0,
                                        y: window.scrollY || 0
                                    } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", zu(this.target, this.player.config.classNames.fullscreen.fallback, e), Su.isIos) {
                                    var t = document.head.querySelector('meta[name="viewport"]'),
                                        i = "viewport-fit=cover";
                                    t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                                    var n = uu(t.content) && t.content.includes(i);
                                    e ? (this.cleanupViewport = !n, n || (t.content += ",".concat(i))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) {
                                        return e.trim() !== i
                                    })).join(","))
                                }
                                this.onChange()
                            }
                        }, {
                            key: "trapFocus",
                            value: function(e) {
                                if (!Su.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                                    var t = document.activeElement,
                                        i = Ru.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                                        n = _c(i, 1)[0],
                                        s = i[i.length - 1];
                                    t !== s || e.shiftKey ? t === n && e.shiftKey && (s.focus(), e.preventDefault()) : (n.focus(), e.preventDefault())
                                }
                            }
                        }, {
                            key: "update",
                            value: function() {
                                var t;
                                this.enabled ? (t = this.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", this.player.debug.log("".concat(t, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled"), zu(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                            }
                        }, {
                            key: "enter",
                            value: function() {
                                this.enabled && (Su.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !e.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? xu(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
                                    navigationUI: "hide"
                                }))
                            }
                        }, {
                            key: "exit",
                            value: function() {
                                if (this.enabled)
                                    if (Su.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), Qu(this.player.play());
                                    else if (!e.native || this.forceFallback) this.toggleFallback(!1);
                                else if (this.prefix) {
                                    if (!xu(this.prefix)) {
                                        var t = "moz" === this.prefix ? "Cancel" : "Exit";
                                        document["".concat(this.prefix).concat(t).concat(this.property)]()
                                    }
                                } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                            }
                        }, {
                            key: "toggle",
                            value: function() {
                                this.active ? this.exit() : this.enter()
                            }
                        }, {
                            key: "usingNative",
                            get: function() {
                                return e.native && !this.forceFallback
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                            }
                        }, {
                            key: "active",
                            get: function() {
                                if (!this.enabled) return !1;
                                if (!e.native || this.forceFallback) return Nu(this.target, this.player.config.classNames.fullscreen.fallback);
                                var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
                                return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
                            }
                        }, {
                            key: "target",
                            get: function() {
                                return Su.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                            }
                        }], [{
                            key: "native",
                            get: function() {
                                return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                            }
                        }, {
                            key: "prefix",
                            get: function() {
                                if (pu(document.exitFullscreen)) return "";
                                var e = "";
                                return ["webkit", "moz", "ms"].some((function(t) {
                                    return !(!pu(document["".concat(t, "ExitFullscreen")]) && !pu(document["".concat(t, "CancelFullScreen")]) || (e = t, 0))
                                })), e
                            }
                        }, {
                            key: "property",
                            get: function() {
                                return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                            }
                        }]), e
                    }();

                function Ld(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return new Promise((function(i, n) {
                        var s = new Image,
                            a = function() {
                                delete s.onload, delete s.onerror, (s.naturalWidth >= t ? i : n)(s)
                            };
                        Object.assign(s, {
                            onload: a,
                            onerror: a,
                            src: e
                        })
                    }))
                }
                var jd = {
                        addStyleHook: function() {
                            zu(this.elements.container, this.config.selectors.container.replace(".", ""), !0), zu(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                        },
                        toggleNativeControls: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                        },
                        build: function() {
                            var e = this;
                            if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void jd.toggleNativeControls.call(this, !0);
                            mu(this.elements.controls) || (xd.inject.call(this), this.listeners.controls()), jd.toggleNativeControls.call(this), this.isHTML5 && Sd.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, xd.updateVolume.call(this), xd.timeUpdate.call(this), jd.checkPlaying.call(this), zu(this.elements.container, this.config.classNames.pip.supported, qu.pip && this.isHTML5 && this.isVideo), zu(this.elements.container, this.config.classNames.airplay.supported, qu.airplay && this.isHTML5), zu(this.elements.container, this.config.classNames.isIos, Su.isIos), zu(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() {
                                Xu.call(e, e.media, "ready")
                            }), 0), jd.setTitle.call(this), this.poster && jd.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && xd.durationUpdate.call(this)
                        },
                        setTitle: function() {
                            var e = hd("play", this.config);
                            if (uu(this.config.title) && !xu(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) {
                                    t.setAttribute("aria-label", e)
                                })), this.isEmbed) {
                                var t = Bu.call(this, "iframe");
                                if (!mu(t)) return;
                                var i = xu(this.config.title) ? "video" : this.config.title,
                                    n = hd("frameTitle", this.config);
                                t.setAttribute("title", n.replace("{title}", i))
                            }
                        },
                        togglePoster: function(e) {
                            zu(this.elements.container, this.config.classNames.posterEnabled, e)
                        },
                        setPoster: function(e) {
                            var t = this,
                                i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return i && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), Ju.call(this).then((function() {
                                return Ld(e)
                            })).catch((function(i) {
                                throw e === t.poster && jd.togglePoster.call(t, !1), i
                            })).then((function() {
                                if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                            })).then((function() {
                                return Object.assign(t.elements.poster.style, {
                                    backgroundImage: "url('".concat(e, "')"),
                                    backgroundSize: ""
                                }), jd.togglePoster.call(t, !0), e
                            })))
                        },
                        checkPlaying: function(e) {
                            var t = this;
                            zu(this.elements.container, this.config.classNames.playing, this.playing), zu(this.elements.container, this.config.classNames.paused, this.paused), zu(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) {
                                Object.assign(e, {
                                    pressed: t.playing
                                }), e.setAttribute("aria-label", hd(t.playing ? "pause" : "play", t.config))
                            })), gu(e) && "timeupdate" === e.type || jd.toggleControls.call(this)
                        },
                        checkLoading: function(e) {
                            var t = this;
                            this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() {
                                zu(t.elements.container, t.config.classNames.loading, t.loading), jd.toggleControls.call(t)
                            }), this.loading ? 250 : 0)
                        },
                        toggleControls: function(e) {
                            var t = this.elements.controls;
                            if (t && this.config.hideControls) {
                                var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                                this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
                            }
                        },
                        migrateStyles: function() {
                            var e = this;
                            Object.values(Tc({}, this.media.style)).filter((function(e) {
                                return !xu(e) && uu(e) && e.startsWith("--plyr")
                            })).forEach((function(t) {
                                e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t)
                            })), xu(this.media.style) && this.media.removeAttribute("style")
                        }
                    },
                    zd = function() {
                        function e(t) {
                            yc(this, e), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
                        }
                        return wc(e, [{
                            key: "handleKey",
                            value: function(e) {
                                var t = this.player,
                                    i = t.elements,
                                    n = e.keyCode ? e.keyCode : e.which,
                                    s = "keydown" === e.type,
                                    a = s && n === this.lastKey;
                                if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && cu(n))
                                    if (s) {
                                        var r = document.activeElement;
                                        if (mu(r)) {
                                            var o = t.config.selectors.editable;
                                            if (r !== i.inputs.seek && Du(r, o)) return;
                                            if (32 === e.which && Du(r, 'button, [role^="menuitem"]')) return
                                        }
                                        switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                                            case 48:
                                            case 49:
                                            case 50:
                                            case 51:
                                            case 52:
                                            case 53:
                                            case 54:
                                            case 55:
                                            case 56:
                                            case 57:
                                                a || (t.currentTime = t.duration / 10 * (n - 48));
                                                break;
                                            case 32:
                                            case 75:
                                                a || Qu(t.togglePlay());
                                                break;
                                            case 38:
                                                t.increaseVolume(.1);
                                                break;
                                            case 40:
                                                t.decreaseVolume(.1);
                                                break;
                                            case 77:
                                                a || (t.muted = !t.muted);
                                                break;
                                            case 39:
                                                t.forward();
                                                break;
                                            case 37:
                                                t.rewind();
                                                break;
                                            case 70:
                                                t.fullscreen.toggle();
                                                break;
                                            case 67:
                                                a || t.toggleCaptions();
                                                break;
                                            case 76:
                                                t.loop = !t.loop
                                        }
                                        27 === n && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = n
                                    } else this.lastKey = null
                            }
                        }, {
                            key: "toggleMenu",
                            value: function(e) {
                                xd.toggleMenu.call(this.player, e)
                            }
                        }, {
                            key: "firstTouch",
                            value: function() {
                                var e = this.player,
                                    t = e.elements;
                                e.touch = !0, zu(t.container, e.config.classNames.isTouch, !0)
                            }
                        }, {
                            key: "setTabFocus",
                            value: function(e) {
                                var t = this.player,
                                    i = t.elements;
                                if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                                    "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                                    var n, s = e.timeStamp - this.lastKeyDown <= 20;
                                    ("focus" !== e.type || s) && (n = t.config.classNames.tabFocus, zu(Ru.call(t, ".".concat(n)), n, !1), "focusout" !== e.type && (this.focusTimer = setTimeout((function() {
                                        var e = document.activeElement;
                                        i.container.contains(e) && zu(document.activeElement, t.config.classNames.tabFocus, !0)
                                    }), 10)))
                                }
                            }
                        }, {
                            key: "global",
                            value: function() {
                                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                    t = this.player;
                                t.config.keyboard.global && Uu.call(t, window, "keydown keyup", this.handleKey, e, !1), Uu.call(t, document.body, "click", this.toggleMenu, e), Wu.call(t, document.body, "touchstart", this.firstTouch), Uu.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                            }
                        }, {
                            key: "container",
                            value: function() {
                                var e = this.player,
                                    t = e.config,
                                    i = e.elements,
                                    n = e.timers;
                                !t.keyboard.global && t.keyboard.focused && Yu.call(e, i.container, "keydown keyup", this.handleKey, !1), Yu.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                                    var s = i.controls;
                                    s && "enterfullscreen" === t.type && (s.pressed = !1, s.hover = !1);
                                    var a = 0;
                                    ["touchstart", "touchmove", "mousemove"].includes(t.type) && (jd.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(n.controls), n.controls = setTimeout((function() {
                                        return jd.toggleControls.call(e, !1)
                                    }), a)
                                }));
                                var s = function(t) {
                                        if (!t) return rd.call(e);
                                        var n = i.container.getBoundingClientRect(),
                                            s = n.width,
                                            a = n.height;
                                        return rd.call(e, "".concat(s, ":").concat(a))
                                    },
                                    a = function() {
                                        clearTimeout(n.resized), n.resized = setTimeout(s, 50)
                                    };
                                Yu.call(e, i.container, "enterfullscreen exitfullscreen", (function(t) {
                                    var n = e.fullscreen,
                                        r = n.target,
                                        o = n.usingNative;
                                    if (r === i.container && (e.isEmbed || !xu(e.config.ratio))) {
                                        var l = "enterfullscreen" === t.type,
                                            c = s(l);
                                        c.padding, ! function(t, i, n) {
                                            if (e.isVimeo && !e.config.vimeo.premium) {
                                                var s = e.elements.wrapper.firstChild,
                                                    a = _c(t, 2)[1],
                                                    r = _c(nd.call(e), 2),
                                                    o = r[0],
                                                    l = r[1];
                                                s.style.maxWidth = n ? "".concat(a / l * o, "px") : null, s.style.margin = n ? "0 auto" : null
                                            }
                                        }(c.ratio, 0, l), o || (l ? Yu.call(e, window, "resize", a) : Gu.call(e, window, "resize", a))
                                    }
                                }))
                            }
                        }, {
                            key: "media",
                            value: function() {
                                var e = this,
                                    t = this.player,
                                    i = t.elements;
                                if (Yu.call(t, t.media, "timeupdate seeking seeked", (function(e) {
                                        return xd.timeUpdate.call(t, e)
                                    })), Yu.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) {
                                        return xd.durationUpdate.call(t, e)
                                    })), Yu.call(t, t.media, "ended", (function() {
                                        t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
                                    })), Yu.call(t, t.media, "progress playing seeking seeked", (function(e) {
                                        return xd.updateProgress.call(t, e)
                                    })), Yu.call(t, t.media, "volumechange", (function(e) {
                                        return xd.updateVolume.call(t, e)
                                    })), Yu.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) {
                                        return jd.checkPlaying.call(t, e)
                                    })), Yu.call(t, t.media, "waiting canplay seeked playing", (function(e) {
                                        return jd.checkLoading.call(t, e)
                                    })), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                                    var n = Bu.call(t, ".".concat(t.config.classNames.video));
                                    if (!mu(n)) return;
                                    Yu.call(t, i.container, "click", (function(s) {
                                        ([i.container, n].includes(s.target) || n.contains(s.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(s, t.restart, "restart"), e.proxy(s, (function() {
                                            Qu(t.play())
                                        }), "play")) : e.proxy(s, (function() {
                                            Qu(t.togglePlay())
                                        }), "play")))
                                    }))
                                }
                                t.supported.ui && t.config.disableContextMenu && Yu.call(t, i.wrapper, "contextmenu", (function(e) {
                                    e.preventDefault()
                                }), !1), Yu.call(t, t.media, "volumechange", (function() {
                                    t.storage.set({
                                        volume: t.volume,
                                        muted: t.muted
                                    })
                                })), Yu.call(t, t.media, "ratechange", (function() {
                                    xd.updateSetting.call(t, "speed"), t.storage.set({
                                        speed: t.speed
                                    })
                                })), Yu.call(t, t.media, "qualitychange", (function(e) {
                                    xd.updateSetting.call(t, "quality", null, e.detail.quality)
                                })), Yu.call(t, t.media, "ready qualitychange", (function() {
                                    xd.setDownloadUrl.call(t)
                                }));
                                var s = t.config.events.concat(["keyup", "keydown"]).join(" ");
                                Yu.call(t, t.media, s, (function(e) {
                                    var n = e.detail,
                                        s = void 0 === n ? {} : n;
                                    "error" === e.type && (s = t.media.error), Xu.call(t, i.container, e.type, !0, s)
                                }))
                            }
                        }, {
                            key: "proxy",
                            value: function(e, t, i) {
                                var n = this.player,
                                    s = n.config.listeners[i],
                                    a = !0;
                                pu(s) && (a = s.call(n, e)), !1 !== a && pu(t) && t.call(n, e)
                            }
                        }, {
                            key: "bind",
                            value: function(e, t, i, n) {
                                var s = this,
                                    a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                    r = this.player,
                                    o = r.config.listeners[n],
                                    l = pu(o);
                                Yu.call(r, e, t, (function(e) {
                                    return s.proxy(e, i, n)
                                }), a && !l)
                            }
                        }, {
                            key: "controls",
                            value: function() {
                                var e = this,
                                    t = this.player,
                                    i = t.elements,
                                    n = Su.isIE ? "change" : "input";
                                if (i.buttons.play && Array.from(i.buttons.play).forEach((function(i) {
                                        e.bind(i, "click", (function() {
                                            Qu(t.togglePlay())
                                        }), "play")
                                    })), this.bind(i.buttons.restart, "click", t.restart, "restart"), this.bind(i.buttons.rewind, "click", t.rewind, "rewind"), this.bind(i.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(i.buttons.mute, "click", (function() {
                                        t.muted = !t.muted
                                    }), "mute"), this.bind(i.buttons.captions, "click", (function() {
                                        return t.toggleCaptions()
                                    })), this.bind(i.buttons.download, "click", (function() {
                                        Xu.call(t, t.media, "download")
                                    }), "download"), this.bind(i.buttons.fullscreen, "click", (function() {
                                        t.fullscreen.toggle()
                                    }), "fullscreen"), this.bind(i.buttons.pip, "click", (function() {
                                        t.pip = "toggle"
                                    }), "pip"), this.bind(i.buttons.airplay, "click", t.airplay, "airplay"), this.bind(i.buttons.settings, "click", (function(e) {
                                        e.stopPropagation(), e.preventDefault(), xd.toggleMenu.call(t, e)
                                    }), null, !1), this.bind(i.buttons.settings, "keyup", (function(e) {
                                        var i = e.which;
                                        [13, 32].includes(i) && (13 !== i ? (e.preventDefault(), e.stopPropagation(), xd.toggleMenu.call(t, e)) : xd.focusFirstMenuItem.call(t, null, !0))
                                    }), null, !1), this.bind(i.settings.menu, "keydown", (function(e) {
                                        27 === e.which && xd.toggleMenu.call(t, e)
                                    })), this.bind(i.inputs.seek, "mousedown mousemove", (function(e) {
                                        var t = i.progress.getBoundingClientRect(),
                                            n = 100 / t.width * (e.pageX - t.left);
                                        e.currentTarget.setAttribute("seek-value", n)
                                    })), this.bind(i.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
                                        var i = e.currentTarget,
                                            n = e.keyCode ? e.keyCode : e.which,
                                            s = "play-on-seeked";
                                        if (!vu(e) || 39 === n || 37 === n) {
                                            t.lastSeekTime = Date.now();
                                            var a = i.hasAttribute(s),
                                                r = ["mouseup", "touchend", "keyup"].includes(e.type);
                                            a && r ? (i.removeAttribute(s), Qu(t.play())) : !r && t.playing && (i.setAttribute(s, ""), t.pause())
                                        }
                                    })), Su.isIos) {
                                    var s = Ru.call(t, 'input[type="range"]');
                                    Array.from(s).forEach((function(t) {
                                        return e.bind(t, n, (function(e) {
                                            return Tu(e.target)
                                        }))
                                    }))
                                }
                                this.bind(i.inputs.seek, n, (function(e) {
                                    var i = e.currentTarget,
                                        n = i.getAttribute("seek-value");
                                    xu(n) && (n = i.value), i.removeAttribute("seek-value"), t.currentTime = n / i.max * t.duration
                                }), "seek"), this.bind(i.progress, "mouseenter mouseleave mousemove", (function(e) {
                                    return xd.updateSeekTooltip.call(t, e)
                                })), this.bind(i.progress, "mousemove touchmove", (function(e) {
                                    var i = t.previewThumbnails;
                                    i && i.loaded && i.startMove(e)
                                })), this.bind(i.progress, "mouseleave touchend click", (function() {
                                    var e = t.previewThumbnails;
                                    e && e.loaded && e.endMove(!1, !0)
                                })), this.bind(i.progress, "mousedown touchstart", (function(e) {
                                    var i = t.previewThumbnails;
                                    i && i.loaded && i.startScrubbing(e)
                                })), this.bind(i.progress, "mouseup touchend", (function(e) {
                                    var i = t.previewThumbnails;
                                    i && i.loaded && i.endScrubbing(e)
                                })), Su.isWebkit && Array.from(Ru.call(t, 'input[type="range"]')).forEach((function(i) {
                                    e.bind(i, "input", (function(e) {
                                        return xd.updateRangeFill.call(t, e.target)
                                    }))
                                })), t.config.toggleInvert && !mu(i.display.duration) && this.bind(i.display.currentTime, "click", (function() {
                                    0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, xd.timeUpdate.call(t))
                                })), this.bind(i.inputs.volume, n, (function(e) {
                                    t.volume = e.target.value
                                }), "volume"), this.bind(i.controls, "mouseenter mouseleave", (function(e) {
                                    i.controls.hover = !t.touch && "mouseenter" === e.type
                                })), i.fullscreen && Array.from(i.fullscreen.children).filter((function(e) {
                                    return !e.contains(i.container)
                                })).forEach((function(n) {
                                    e.bind(n, "mouseenter mouseleave", (function(e) {
                                        i.controls.hover = !t.touch && "mouseenter" === e.type
                                    }))
                                })), this.bind(i.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) {
                                    i.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                                })), this.bind(i.controls, "focusin", (function() {
                                    var n = t.config,
                                        s = t.timers;
                                    zu(i.controls, n.classNames.noTransition, !0), jd.toggleControls.call(t, !0), setTimeout((function() {
                                        zu(i.controls, n.classNames.noTransition, !1)
                                    }), 0);
                                    var a = e.touch ? 3e3 : 4e3;
                                    clearTimeout(s.controls), s.controls = setTimeout((function() {
                                        return jd.toggleControls.call(t, !1)
                                    }), a)
                                })), this.bind(i.inputs.volume, "wheel", (function(e) {
                                    var i = e.webkitDirectionInvertedFromDevice,
                                        n = _c([e.deltaX, -e.deltaY].map((function(e) {
                                            return i ? -e : e
                                        })), 2),
                                        s = n[0],
                                        a = n[1],
                                        r = Math.sign(Math.abs(s) > Math.abs(a) ? s : a);
                                    t.increaseVolume(r / 50);
                                    var o = t.media.volume;
                                    (1 === r && o < 1 || -1 === r && o > 0) && e.preventDefault()
                                }), "volume", !1)
                            }
                        }]), e
                    }();
                var Nd = function(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }((function(e, t) {
                    e.exports = function() {
                        var e = function() {},
                            t = {},
                            i = {},
                            n = {};

                        function a(e, t) {
                            if (e) {
                                var s = n[e];
                                if (i[e] = t, s)
                                    for (; s.length;) s[0](e, t), s.splice(0, 1)
                            }
                        }

                        function r(t, i) {
                            t.call && (t = {
                                success: t
                            }), i.length ? (t.error || e)(i) : (t.success || e)(t)
                        }

                        function o(t, i, n, s) {
                            var a, r, l = document,
                                c = n.async,
                                u = (n.numRetries || 0) + 1,
                                d = n.before || e,
                                h = t.replace(/[\?|#].*$/, ""),
                                f = t.replace(/^(css|img)!/, "");
                            s = s || 0, /(^css!|\.css$)/.test(h) ? ((r = l.createElement("link")).rel = "stylesheet", r.href = f, (a = "hideFocus" in r) && r.relList && (a = 0, r.rel = "preload", r.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (r = l.createElement("img")).src = f : ((r = l.createElement("script")).src = t, r.async = void 0 === c || c), r.onload = r.onerror = r.onbeforeload = function(e) {
                                var l = e.type[0];
                                if (a) try {
                                    r.sheet.cssText.length || (l = "e")
                                } catch (e) {
                                    18 != e.code && (l = "e")
                                }
                                if ("e" == l) {
                                    if ((s += 1) < u) return o(t, i, n, s)
                                } else if ("preload" == r.rel && "style" == r.as) return r.rel = "stylesheet";
                                i(t, l, e.defaultPrevented)
                            }, !1 !== d(t, r) && l.head.appendChild(r)
                        }

                        function l(e, t, i) {
                            var n, s, a = (e = e.push ? e : [e]).length,
                                r = a,
                                l = [];
                            for (n = function(e, i, n) {
                                    if ("e" == i && l.push(e), "b" == i) {
                                        if (!n) return;
                                        l.push(e)
                                    }--a || t(l)
                                }, s = 0; s < r; s++) o(e[s], n, i)
                        }

                        function c(e, i, n) {
                            var s, o;
                            if (i && i.trim && (s = i), o = (s ? n : i) || {}, s) {
                                if (s in t) throw "LoadJS";
                                t[s] = !0
                            }

                            function c(t, i) {
                                l(e, (function(e) {
                                    r(o, e), t && r({
                                        success: t,
                                        error: i
                                    }, e), a(s, e)
                                }), o)
                            }
                            if (o.returnPromise) return new Promise(c);
                            c()
                        }
                        return c.ready = function(e, t) {
                            return function(e, t) {
                                e = e.push ? e : [e];
                                var s, a, r, o = [],
                                    l = e.length,
                                    c = l;
                                for (s = function(e, i) {
                                        i.length && o.push(e), --c || t(o)
                                    }; l--;) a = e[l], (r = i[a]) ? s(a, r) : (n[a] = n[a] || []).push(s)
                            }(e, (function(e) {
                                r(t, e)
                            })), c
                        }, c.done = function(e) {
                            a(e, [])
                        }, c.reset = function() {
                            t = {}, i = {}, n = {}
                        }, c.isDefined = function(e) {
                            return e in t
                        }, c
                    }()
                }));

                function Dd(e) {
                    return new Promise((function(t, i) {
                        Nd(e, {
                            success: t,
                            error: i
                        })
                    }))
                }

                function Rd(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Xu.call(this, this.media, e ? "play" : "pause"))
                }
                var Bd = {
                    setup: function() {
                        var e = this;
                        zu(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, rd.call(e), lu(window.Vimeo) ? Bd.ready.call(e) : Dd(e.config.urls.vimeo.sdk).then((function() {
                            Bd.ready.call(e)
                        })).catch((function(t) {
                            e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                        }))
                    },
                    ready: function() {
                        var e = this,
                            t = this,
                            i = t.config.vimeo,
                            n = i.premium,
                            s = i.referrerPolicy,
                            a = Sc(i, ["premium", "referrerPolicy"]);
                        n && Object.assign(a, {
                            controls: !1,
                            sidedock: !1
                        });
                        var r = Td(Tc({
                                loop: t.config.loop.active,
                                autoplay: t.autoplay,
                                muted: t.muted,
                                gesture: "media",
                                playsinline: !this.config.fullscreen.iosNative
                            }, a)),
                            o = t.media.getAttribute("src");
                        xu(o) && (o = t.media.getAttribute(t.config.attributes.embed.id));
                        var l = function(e) {
                                return xu(e) ? null : cu(Number(e)) ? e : e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e
                            }(o),
                            c = $u("iframe"),
                            u = od(t.config.urls.vimeo.iframe, l, r);
                        c.setAttribute("src", u), c.setAttribute("allowfullscreen", ""), c.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), xu(s) || c.setAttribute("referrerPolicy", s);
                        var d = t.poster;
                        if (n) c.setAttribute("data-poster", d), t.media = Iu(c, t.media);
                        else {
                            var h = $u("div", {
                                class: t.config.classNames.embedContainer,
                                "data-poster": d
                            });
                            h.appendChild(c), t.media = Iu(h, t.media)
                        }
                        md(od(t.config.urls.vimeo.api, l), "json").then((function(e) {
                            if (!xu(e)) {
                                var i = new URL(e[0].thumbnail_large);
                                i.pathname = "".concat(i.pathname.split("_")[0], ".jpg"), jd.setPoster.call(t, i.href).catch((function() {}))
                            }
                        })), t.embed = new window.Vimeo.Player(c, {
                            autopause: t.config.autopause,
                            muted: t.muted
                        }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                            return Rd.call(t, !0), t.embed.play()
                        }, t.media.pause = function() {
                            return Rd.call(t, !1), t.embed.pause()
                        }, t.media.stop = function() {
                            t.pause(), t.currentTime = 0
                        };
                        var f = t.media.currentTime;
                        Object.defineProperty(t.media, "currentTime", {
                            get: function() {
                                return f
                            },
                            set: function(e) {
                                var i = t.embed,
                                    n = t.media,
                                    s = t.paused,
                                    a = t.volume,
                                    r = s && !i.hasPlayed;
                                n.seeking = !0, Xu.call(t, n, "seeking"), Promise.resolve(r && i.setVolume(0)).then((function() {
                                    return i.setCurrentTime(e)
                                })).then((function() {
                                    return r && i.pause()
                                })).then((function() {
                                    return r && i.setVolume(a)
                                })).catch((function() {}))
                            }
                        });
                        var p = t.config.speed.selected;
                        Object.defineProperty(t.media, "playbackRate", {
                            get: function() {
                                return p
                            },
                            set: function(e) {
                                t.embed.setPlaybackRate(e).then((function() {
                                    p = e, Xu.call(t, t.media, "ratechange")
                                })).catch((function() {
                                    t.options.speed = [1]
                                }))
                            }
                        });
                        var g = t.config.volume;
                        Object.defineProperty(t.media, "volume", {
                            get: function() {
                                return g
                            },
                            set: function(e) {
                                t.embed.setVolume(e).then((function() {
                                    g = e, Xu.call(t, t.media, "volumechange")
                                }))
                            }
                        });
                        var m = t.config.muted;
                        Object.defineProperty(t.media, "muted", {
                            get: function() {
                                return m
                            },
                            set: function(e) {
                                var i = !!du(e) && e;
                                t.embed.setVolume(i ? 0 : t.config.volume).then((function() {
                                    m = i, Xu.call(t, t.media, "volumechange")
                                }))
                            }
                        });
                        var v, y = t.config.loop;
                        Object.defineProperty(t.media, "loop", {
                            get: function() {
                                return y
                            },
                            set: function(e) {
                                var i = du(e) ? e : t.config.loop.active;
                                t.embed.setLoop(i).then((function() {
                                    y = i
                                }))
                            }
                        }), t.embed.getVideoUrl().then((function(e) {
                            v = e, xd.setDownloadUrl.call(t)
                        })).catch((function(t) {
                            e.debug.warn(t)
                        })), Object.defineProperty(t.media, "currentSrc", {
                            get: function() {
                                return v
                            }
                        }), Object.defineProperty(t.media, "ended", {
                            get: function() {
                                return t.currentTime === t.duration
                            }
                        }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(i) {
                            var n = _c(i, 2),
                                s = n[0],
                                a = n[1];
                            t.embed.ratio = [s, a], rd.call(e)
                        })), t.embed.setAutopause(t.config.autopause).then((function(e) {
                            t.config.autopause = e
                        })), t.embed.getVideoTitle().then((function(i) {
                            t.config.title = i, jd.setTitle.call(e)
                        })), t.embed.getCurrentTime().then((function(e) {
                            f = e, Xu.call(t, t.media, "timeupdate")
                        })), t.embed.getDuration().then((function(e) {
                            t.media.duration = e, Xu.call(t, t.media, "durationchange")
                        })), t.embed.getTextTracks().then((function(e) {
                            t.media.textTracks = e, Sd.setup.call(t)
                        })), t.embed.on("cuechange", (function(e) {
                            var i = e.cues,
                                n = (void 0 === i ? [] : i).map((function(e) {
                                    return function(e) {
                                        var t = document.createDocumentFragment(),
                                            i = document.createElement("div");
                                        return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
                                    }(e.text)
                                }));
                            Sd.updateCues.call(t, n)
                        })), t.embed.on("loaded", (function() {
                            t.embed.getPaused().then((function(e) {
                                Rd.call(t, !e), e || Xu.call(t, t.media, "playing")
                            })), mu(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                        })), t.embed.on("bufferstart", (function() {
                            Xu.call(t, t.media, "waiting")
                        })), t.embed.on("bufferend", (function() {
                            Xu.call(t, t.media, "playing")
                        })), t.embed.on("play", (function() {
                            Rd.call(t, !0), Xu.call(t, t.media, "playing")
                        })), t.embed.on("pause", (function() {
                            Rd.call(t, !1)
                        })), t.embed.on("timeupdate", (function(e) {
                            t.media.seeking = !1, f = e.seconds, Xu.call(t, t.media, "timeupdate")
                        })), t.embed.on("progress", (function(e) {
                            t.media.buffered = e.percent, Xu.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Xu.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) {
                                e !== t.media.duration && (t.media.duration = e, Xu.call(t, t.media, "durationchange"))
                            }))
                        })), t.embed.on("seeked", (function() {
                            t.media.seeking = !1, Xu.call(t, t.media, "seeked")
                        })), t.embed.on("ended", (function() {
                            t.media.paused = !0, Xu.call(t, t.media, "ended")
                        })), t.embed.on("error", (function(e) {
                            t.media.error = e, Xu.call(t, t.media, "error")
                        })), setTimeout((function() {
                            return jd.build.call(t)
                        }), 0)
                    }
                };

                function Hd(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Xu.call(this, this.media, e ? "play" : "pause"))
                }

                function Fd(e) {
                    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
                }
                var qd = {
                        setup: function() {
                            var e = this;
                            if (zu(this.elements.wrapper, this.config.classNames.embed, !0), lu(window.YT) && pu(window.YT.Player)) qd.ready.call(this);
                            else {
                                var t = window.onYouTubeIframeAPIReady;
                                window.onYouTubeIframeAPIReady = function() {
                                    pu(t) && t(), qd.ready.call(e)
                                }, Dd(this.config.urls.youtube.sdk).catch((function(t) {
                                    e.debug.warn("YouTube API failed to load", t)
                                }))
                            }
                        },
                        getTitle: function(e) {
                            var t = this;
                            md(od(this.config.urls.youtube.api, e)).then((function(e) {
                                if (lu(e)) {
                                    var i = e.title,
                                        n = e.height,
                                        s = e.width;
                                    t.config.title = i, jd.setTitle.call(t), t.embed.ratio = [s, n]
                                }
                                rd.call(t)
                            })).catch((function() {
                                rd.call(t)
                            }))
                        },
                        ready: function() {
                            var e = this,
                                t = e.media && e.media.getAttribute("id");
                            if (xu(t) || !t.startsWith("youtube-")) {
                                var i = e.media.getAttribute("src");
                                xu(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
                                var n = function(e) {
                                        return xu(e) ? null : e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e
                                    }(i),
                                    s = function(e) {
                                        return "".concat(e, "-").concat(Math.floor(1e4 * Math.random()))
                                    }(e.provider),
                                    a = $u("div", {
                                        id: s,
                                        "data-poster": e.poster
                                    });
                                e.media = Iu(a, e.media);
                                var r = function(e) {
                                    return "https://i.ytimg.com/vi/".concat(n, "/").concat(e, "default.jpg")
                                };
                                Ld(r("maxres"), 121).catch((function() {
                                    return Ld(r("sd"), 121)
                                })).catch((function() {
                                    return Ld(r("hq"))
                                })).then((function(t) {
                                    return jd.setPoster.call(e, t.src)
                                })).then((function(t) {
                                    t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                                })).catch((function() {}));
                                var o = e.config.youtube;
                                e.embed = new window.YT.Player(s, {
                                    videoId: n,
                                    host: Fd(o),
                                    playerVars: Cu({}, {
                                        autoplay: e.config.autoplay ? 1 : 0,
                                        hl: e.config.hl,
                                        controls: e.supported.ui ? 0 : 1,
                                        disablekb: 1,
                                        playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                                        cc_load_policy: e.captions.active ? 1 : 0,
                                        cc_lang_pref: e.config.captions.language,
                                        widget_referrer: window ? window.location.href : null
                                    }, o),
                                    events: {
                                        onError: function(t) {
                                            if (!e.media.error) {
                                                var i = t.data,
                                                    n = {
                                                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                                                        150: "The owner of the requested video does not allow it to be played in embedded players."
                                                    }[i] || "An unknown error occured";
                                                e.media.error = {
                                                    code: i,
                                                    message: n
                                                }, Xu.call(e, e.media, "error")
                                            }
                                        },
                                        onPlaybackRateChange: function(t) {
                                            var i = t.target;
                                            e.media.playbackRate = i.getPlaybackRate(), Xu.call(e, e.media, "ratechange")
                                        },
                                        onReady: function(t) {
                                            if (!pu(e.media.play)) {
                                                var i = t.target;
                                                qd.getTitle.call(e, n), e.media.play = function() {
                                                    Hd.call(e, !0), i.playVideo()
                                                }, e.media.pause = function() {
                                                    Hd.call(e, !1), i.pauseVideo()
                                                }, e.media.stop = function() {
                                                    i.stopVideo()
                                                }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                                    get: function() {
                                                        return Number(i.getCurrentTime())
                                                    },
                                                    set: function(t) {
                                                        e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Xu.call(e, e.media, "seeking"), i.seekTo(t)
                                                    }
                                                }), Object.defineProperty(e.media, "playbackRate", {
                                                    get: function() {
                                                        return i.getPlaybackRate()
                                                    },
                                                    set: function(e) {
                                                        i.setPlaybackRate(e)
                                                    }
                                                });
                                                var s = e.config.volume;
                                                Object.defineProperty(e.media, "volume", {
                                                    get: function() {
                                                        return s
                                                    },
                                                    set: function(t) {
                                                        s = t, i.setVolume(100 * s), Xu.call(e, e.media, "volumechange")
                                                    }
                                                });
                                                var a = e.config.muted;
                                                Object.defineProperty(e.media, "muted", {
                                                    get: function() {
                                                        return a
                                                    },
                                                    set: function(t) {
                                                        var n = du(t) ? t : a;
                                                        a = n, i[n ? "mute" : "unMute"](), Xu.call(e, e.media, "volumechange")
                                                    }
                                                }), Object.defineProperty(e.media, "currentSrc", {
                                                    get: function() {
                                                        return i.getVideoUrl()
                                                    }
                                                }), Object.defineProperty(e.media, "ended", {
                                                    get: function() {
                                                        return e.currentTime === e.duration
                                                    }
                                                });
                                                var r = i.getAvailablePlaybackRates();
                                                e.options.speed = r.filter((function(t) {
                                                    return e.config.speed.options.includes(t)
                                                })), e.supported.ui && e.media.setAttribute("tabindex", -1), Xu.call(e, e.media, "timeupdate"), Xu.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() {
                                                    e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Xu.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Xu.call(e, e.media, "canplaythrough"))
                                                }), 200), setTimeout((function() {
                                                    return jd.build.call(e)
                                                }), 50)
                                            }
                                        },
                                        onStateChange: function(t) {
                                            var i = t.target;
                                            switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, Xu.call(e, e.media, "seeked")), t.data) {
                                                case -1:
                                                    Xu.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Xu.call(e, e.media, "progress");
                                                    break;
                                                case 0:
                                                    Hd.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : Xu.call(e, e.media, "ended");
                                                    break;
                                                case 1:
                                                    e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (Hd.call(e, !0), Xu.call(e, e.media, "playing"), e.timers.playing = setInterval((function() {
                                                        Xu.call(e, e.media, "timeupdate")
                                                    }), 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Xu.call(e, e.media, "durationchange"))) : e.media.pause();
                                                    break;
                                                case 2:
                                                    e.muted || e.embed.unMute(), Hd.call(e, !1);
                                                    break;
                                                case 3:
                                                    Xu.call(e, e.media, "waiting")
                                            }
                                            Xu.call(e, e.elements.container, "statechange", !1, {
                                                code: t.data
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    },
                    Vd = {
                        setup: function() {
                            this.media ? (zu(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), zu(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && zu(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = $u("div", {
                                class: this.config.classNames.video
                            }), Eu(this.media, this.elements.wrapper), this.elements.poster = $u("div", {
                                class: this.config.classNames.poster
                            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? id.setup.call(this) : this.isYouTube ? qd.setup.call(this) : this.isVimeo && Bd.setup.call(this)) : this.debug.warn("No media element found!")
                        }
                    },
                    Ud = function() {
                        function e(t) {
                            var i = this;
                            yc(this, e), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                                container: null,
                                displayContainer: null
                            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) {
                                i.on("loaded", e), i.on("error", t)
                            })), this.load()
                        }
                        return wc(e, [{
                            key: "load",
                            value: function() {
                                var e = this;
                                this.enabled && (lu(window.google) && lu(window.google.ima) ? this.ready() : Dd(this.player.config.urls.googleIMA.sdk).then((function() {
                                    e.ready()
                                })).catch((function() {
                                    e.trigger("error", new Error("Google IMA SDK failed to load"))
                                })))
                            }
                        }, {
                            key: "ready",
                            value: function() {
                                var e = this;
                                this.enabled || function(e) {
                                    e.manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()
                                }(this), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() {
                                    e.clearSafetyTimer("onAdsManagerLoaded()")
                                })), this.listeners(), this.setupIMA()
                            }
                        }, {
                            key: "setupIMA",
                            value: function() {
                                var e = this;
                                this.elements.container = $u("div", {
                                    class: this.player.config.classNames.ads
                                }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) {
                                    return e.onAdsManagerLoaded(t)
                                }), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) {
                                    return e.onAdError(t)
                                }), !1), this.requestAds()
                            }
                        }, {
                            key: "requestAds",
                            value: function() {
                                var e = this.player.elements.container;
                                try {
                                    var t = new google.ima.AdsRequest;
                                    t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
                                } catch (e) {
                                    this.onAdError(e)
                                }
                            }
                        }, {
                            key: "pollCountdown",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                                var i = function() {
                                    var t = wd(Math.max(e.manager.getRemainingTime(), 0)),
                                        i = "".concat(hd("advertisement", e.player.config), " - ").concat(t);
                                    e.elements.container.setAttribute("data-badge-text", i)
                                };
                                this.countdownTimer = setInterval(i, 100)
                            }
                        }, {
                            key: "onAdsManagerLoaded",
                            value: function(e) {
                                var t = this;
                                if (this.enabled) {
                                    var i = new google.ima.AdsRenderingSettings;
                                    i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                                        return t.onAdError(e)
                                    })), Object.keys(google.ima.AdEvent.Type).forEach((function(e) {
                                        t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) {
                                            return t.onAdEvent(e)
                                        }))
                                    })), this.trigger("loaded")
                                }
                            }
                        }, {
                            key: "addCuePoints",
                            value: function() {
                                var e = this;
                                xu(this.cuePoints) || this.cuePoints.forEach((function(t) {
                                    if (0 !== t && -1 !== t && t < e.player.duration) {
                                        var i = e.player.elements.progress;
                                        if (mu(i)) {
                                            var n = 100 / e.player.duration * t,
                                                s = $u("span", {
                                                    class: e.player.config.classNames.cues
                                                });
                                            s.style.left = "".concat(n.toString(), "%"), i.appendChild(s)
                                        }
                                    }
                                }))
                            }
                        }, {
                            key: "onAdEvent",
                            value: function(e) {
                                var t, n = this.player.elements.container,
                                    s = e.getAd(),
                                    a = e.getAdData();
                                switch (t = e.type, Xu.call(this.player, this.player.media, "ads".concat(t.replace(/_/g, "").toLowerCase())), e.type) {
                                    case google.ima.AdEvent.Type.LOADED:
                                        this.trigger("loaded"), this.pollCountdown(!0), s.isLinear() || (s.width = n.offsetWidth, s.height = n.offsetHeight);
                                        break;
                                    case google.ima.AdEvent.Type.STARTED:
                                        this.manager.setVolume(this.player.volume);
                                        break;
                                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                        this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                        break;
                                    case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                        this.pauseContent();
                                        break;
                                    case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                        this.pollCountdown(), this.resumeContent();
                                        break;
                                    case google.ima.AdEvent.Type.LOG:
                                        a.adError && this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()))
                                }
                            }
                        }, {
                            key: "onAdError",
                            value: function(e) {
                                this.cancel(), this.player.debug.warn("Ads error", e)
                            }
                        }, {
                            key: "listeners",
                            value: function() {
                                var e, t = this,
                                    i = this.player.elements.container;
                                this.player.on("canplay", (function() {
                                    t.addCuePoints()
                                })), this.player.on("ended", (function() {
                                    t.loader.contentComplete()
                                })), this.player.on("timeupdate", (function() {
                                    e = t.player.currentTime
                                })), this.player.on("seeked", (function() {
                                    var i = t.player.currentTime;
                                    xu(t.cuePoints) || t.cuePoints.forEach((function(n, s) {
                                        e < n && n < i && (t.manager.discardAdBreak(), t.cuePoints.splice(s, 1))
                                    }))
                                })), window.addEventListener("resize", (function() {
                                    t.manager && t.manager.resize(i.offsetWidth, i.offsetHeight, google.ima.ViewMode.NORMAL)
                                }))
                            }
                        }, {
                            key: "play",
                            value: function() {
                                var e = this,
                                    t = this.player.elements.container;
                                this.managerPromise || this.resumeContent(), this.managerPromise.then((function() {
                                    e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();
                                    try {
                                        e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                                    } catch (t) {
                                        e.onAdError(t)
                                    }
                                })).catch((function() {}))
                            }
                        }, {
                            key: "resumeContent",
                            value: function() {
                                this.elements.container.style.zIndex = "", this.playing = !1, Qu(this.player.media.play())
                            }
                        }, {
                            key: "pauseContent",
                            value: function() {
                                this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                            }
                        }, {
                            key: "cancel",
                            value: function() {
                                this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                            }
                        }, {
                            key: "loadAds",
                            value: function() {
                                var e = this;
                                this.managerPromise.then((function() {
                                    e.manager && e.manager.destroy(), e.managerPromise = new Promise((function(t) {
                                        e.on("loaded", t), e.player.debug.log(e.manager)
                                    })), e.initialized = !1, e.requestAds()
                                })).catch((function() {}))
                            }
                        }, {
                            key: "trigger",
                            value: function(e) {
                                for (var t = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
                                var a = this.events[e];
                                hu(a) && a.forEach((function(e) {
                                    pu(e) && e.apply(t, n)
                                }))
                            }
                        }, {
                            key: "on",
                            value: function(e, t) {
                                return hu(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                            }
                        }, {
                            key: "startSafetyTimer",
                            value: function(e, t) {
                                var i = this;
                                this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout((function() {
                                    i.cancel(), i.clearSafetyTimer("startSafetyTimer()")
                                }), e)
                            }
                        }, {
                            key: "clearSafetyTimer",
                            value: function(e) {
                                su(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                var e = this.config;
                                return this.player.isHTML5 && this.player.isVideo && e.enabled && (!xu(e.publisherId) || wu(e.tagUrl))
                            }
                        }, {
                            key: "tagUrl",
                            get: function() {
                                var e = this.config;
                                if (wu(e.tagUrl)) return e.tagUrl;
                                var t = {
                                    AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                                    AV_CHANNELID: "5a0458dc28a06145e4519d21",
                                    AV_URL: window.location.hostname,
                                    cb: Date.now(),
                                    AV_WIDTH: 640,
                                    AV_HEIGHT: 480,
                                    AV_CDIM2: e.publisherId
                                };
                                return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(Td(t))
                            }
                        }]), e
                    }(),
                    Yd = function(e) {
                        var t = [];
                        return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                            var i = {};
                            e.split(/\r\n|\n|\r/).forEach((function(e) {
                                if (cu(i.startTime)) {
                                    if (!xu(e.trim()) && xu(i.text)) {
                                        var t = e.trim().split("#xywh="),
                                            n = _c(t, 1);
                                        if (i.text = n[0], t[1]) {
                                            var s = _c(t[1].split(","), 4);
                                            i.x = s[0], i.y = s[1], i.w = s[2], i.h = s[3]
                                        }
                                    }
                                } else {
                                    var a = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                    a && (i.startTime = 60 * Number(a[1] || 0) * 60 + 60 * Number(a[2]) + Number(a[3]) + Number("0.".concat(a[4])), i.endTime = 60 * Number(a[6] || 0) * 60 + 60 * Number(a[7]) + Number(a[8]) + Number("0.".concat(a[9])))
                                }
                            })), i.text && t.push(i)
                        })), t
                    },
                    Gd = function(e, t) {
                        var i = {};
                        return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i
                    },
                    Wd = function() {
                        function e(t) {
                            yc(this, e), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                                thumb: {},
                                scrubbing: {}
                            }, this.load()
                        }
                        return wc(e, [{
                            key: "load",
                            value: function() {
                                var e = this;
                                this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() {
                                    e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0)
                                }))
                            }
                        }, {
                            key: "getThumbnails",
                            value: function() {
                                var e = this;
                                return new Promise((function(t) {
                                    var i = e.player.config.previewThumbnails.src;
                                    if (xu(i)) throw new Error("Missing previewThumbnails.src config attribute");
                                    var n = function() {
                                        e.thumbnails.sort((function(e, t) {
                                            return e.height - t.height
                                        })), e.player.debug.log("Preview thumbnails", e.thumbnails), t()
                                    };
                                    if (pu(i)) i((function(t) {
                                        e.thumbnails = t, n()
                                    }));
                                    else {
                                        var s = (uu(i) ? [i] : i).map((function(t) {
                                            return e.getThumbnail(t)
                                        }));
                                        Promise.all(s).then(n)
                                    }
                                }))
                            }
                        }, {
                            key: "getThumbnail",
                            value: function(e) {
                                var t = this;
                                return new Promise((function(i) {
                                    md(e).then((function(n) {
                                        var s = {
                                            frames: Yd(n),
                                            height: null,
                                            urlPrefix: ""
                                        };
                                        s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                        var a = new Image;
                                        a.onload = function() {
                                            s.height = a.naturalHeight, s.width = a.naturalWidth, t.thumbnails.push(s), i()
                                        }, a.src = s.urlPrefix + s.frames[0].text
                                    }))
                                }))
                            }
                        }, {
                            key: "startMove",
                            value: function(e) {
                                if (this.loaded && gu(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                    if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                    else {
                                        var t = this.player.elements.progress.getBoundingClientRect(),
                                            i = 100 / t.width * (e.pageX - t.left);
                                        this.seekTime = this.player.media.duration * (i / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = wd(this.seekTime)
                                    }
                                    this.showImageAtCurrentTime()
                                }
                            }
                        }, {
                            key: "endMove",
                            value: function() {
                                this.toggleThumbContainer(!1, !0)
                            }
                        }, {
                            key: "startScrubbing",
                            value: function(e) {
                                (su(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                            }
                        }, {
                            key: "endScrubbing",
                            value: function() {
                                var e = this;
                                this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Wu.call(this.player, this.player.media, "timeupdate", (function() {
                                    e.mouseDown || e.toggleScrubbingContainer(!1)
                                }))
                            }
                        }, {
                            key: "listeners",
                            value: function() {
                                var e = this;
                                this.player.on("play", (function() {
                                    e.toggleThumbContainer(!1, !0)
                                })), this.player.on("seeked", (function() {
                                    e.toggleThumbContainer(!1)
                                })), this.player.on("timeupdate", (function() {
                                    e.lastTime = e.player.media.currentTime
                                }))
                            }
                        }, {
                            key: "render",
                            value: function() {
                                this.elements.thumb.container = $u("div", {
                                    class: this.player.config.classNames.previewThumbnails.thumbContainer
                                }), this.elements.thumb.imageContainer = $u("div", {
                                    class: this.player.config.classNames.previewThumbnails.imageContainer
                                }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                                var e = $u("div", {
                                    class: this.player.config.classNames.previewThumbnails.timeContainer
                                });
                                this.elements.thumb.time = $u("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), mu(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $u("div", {
                                    class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                                }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                            }
                        }, {
                            key: "showImageAtCurrentTime",
                            value: function() {
                                var e = this;
                                this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                                var t = this.thumbnails[0].frames.findIndex((function(t) {
                                        return e.seekTime >= t.startTime && e.seekTime <= t.endTime
                                    })),
                                    i = t >= 0,
                                    n = 0;
                                this.mouseDown || this.toggleThumbContainer(i), i && (this.thumbnails.forEach((function(i, s) {
                                    e.loadedImages.includes(i.frames[t].text) && (n = s)
                                })), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(n)))
                            }
                        }, {
                            key: "loadImage",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    i = this.showingThumb,
                                    n = this.thumbnails[t],
                                    s = n.urlPrefix,
                                    a = n.frames[i],
                                    r = n.frames[i].text,
                                    o = s + r;
                                if (this.currentImageElement && this.currentImageElement.dataset.filename === r) this.showImage(this.currentImageElement, a, t, i, r, !1), this.currentImageElement.dataset.index = i, this.removeOldImages(this.currentImageElement);
                                else {
                                    this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                    var l = new Image;
                                    l.src = o, l.dataset.index = i, l.dataset.filename = r, this.showingThumbFilename = r, this.player.debug.log("Loading image: ".concat(o)), l.onload = function() {
                                        return e.showImage(l, a, t, i, r, !0)
                                    }, this.loadingImage = l, this.removeOldImages(l)
                                }
                            }
                        }, {
                            key: "showImage",
                            value: function(e, t, i, n, s) {
                                var a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                                this.player.debug.log("Showing thumb: ".concat(s, ". num: ").concat(n, ". qual: ").concat(i, ". newimg: ").concat(a)), this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(s) || this.loadedImages.push(s)), this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, e, t, s))
                            }
                        }, {
                            key: "removeOldImages",
                            value: function(e) {
                                var t = this;
                                Array.from(this.currentImageContainer.children).forEach((function(i) {
                                    if ("img" === i.tagName.toLowerCase()) {
                                        var n = t.usingSprites ? 500 : 1e3;
                                        if (i.dataset.index !== e.dataset.index && !i.dataset.deleting) {
                                            i.dataset.deleting = !0;
                                            var s = t.currentImageContainer;
                                            setTimeout((function() {
                                                s.removeChild(i), t.player.debug.log("Removing thumb: ".concat(i.dataset.filename))
                                            }), n)
                                        }
                                    }
                                }))
                            }
                        }, {
                            key: "preloadNearby",
                            value: function(e) {
                                var t = this,
                                    i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                return new Promise((function(n) {
                                    setTimeout((function() {
                                        var s = t.thumbnails[0].frames[e].text;
                                        if (t.showingThumbFilename === s) {
                                            var a;
                                            a = i ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                                            var r = !1;
                                            a.forEach((function(e) {
                                                var i = e.text;
                                                if (i !== s && !t.loadedImages.includes(i)) {
                                                    r = !0, t.player.debug.log("Preloading thumb filename: ".concat(i));
                                                    var a = t.thumbnails[0].urlPrefix + i,
                                                        o = new Image;
                                                    o.src = a, o.onload = function() {
                                                        t.player.debug.log("Preloaded thumb filename: ".concat(i)), t.loadedImages.includes(i) || t.loadedImages.push(i), n()
                                                    }
                                                }
                                            })), r || n()
                                        }
                                    }), 300)
                                }))
                            }
                        }, {
                            key: "getHigherQuality",
                            value: function(e, t, i, n) {
                                var s = this;
                                if (e < this.thumbnails.length - 1) {
                                    var a = t.naturalHeight;
                                    this.usingSprites && (a = i.h), a < this.thumbContainerHeight && setTimeout((function() {
                                        s.showingThumbFilename === n && (s.player.debug.log("Showing higher quality thumb for: ".concat(n)), s.loadImage(e + 1))
                                    }), 300)
                                }
                            }
                        }, {
                            key: "toggleThumbContainer",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                                this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                            }
                        }, {
                            key: "toggleScrubbingContainer",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                                this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                            }
                        }, {
                            key: "determineContainerAutoSizing",
                            value: function() {
                                (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                            }
                        }, {
                            key: "setThumbContainerSizeAndPos",
                            value: function() {
                                if (this.sizeSpecifiedInCSS) {
                                    if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                                        var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                                        this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                                    } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                                        var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                                        this.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                                    }
                                } else {
                                    var i = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(i, "px")
                                }
                                this.setThumbContainerPos()
                            }
                        }, {
                            key: "setThumbContainerPos",
                            value: function() {
                                var e = this.player.elements.progress.getBoundingClientRect(),
                                    t = this.player.elements.container.getBoundingClientRect(),
                                    i = this.elements.thumb.container,
                                    n = t.left - e.left + 10,
                                    s = t.right - e.left - i.clientWidth - 10,
                                    a = this.mousePosX - e.left - i.clientWidth / 2;
                                a < n && (a = n), a > s && (a = s), i.style.left = "".concat(a, "px")
                            }
                        }, {
                            key: "setScrubbingContainerSize",
                            value: function() {
                                var e = Gd(this.thumbAspectRatio, {
                                        width: this.player.media.clientWidth,
                                        height: this.player.media.clientHeight
                                    }),
                                    t = e.width,
                                    i = e.height;
                                this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(i, "px")
                            }
                        }, {
                            key: "setImageSizeAndOffset",
                            value: function(e, t) {
                                if (this.usingSprites) {
                                    var i = this.thumbContainerHeight / t.h;
                                    e.style.height = "".concat(e.naturalHeight * i, "px"), e.style.width = "".concat(e.naturalWidth * i, "px"), e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px")
                                }
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                            }
                        }, {
                            key: "currentImageContainer",
                            get: function() {
                                return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                            }
                        }, {
                            key: "usingSprites",
                            get: function() {
                                return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                            }
                        }, {
                            key: "thumbAspectRatio",
                            get: function() {
                                return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                            }
                        }, {
                            key: "thumbContainerHeight",
                            get: function() {
                                return this.mouseDown ? Gd(this.thumbAspectRatio, {
                                    width: this.player.media.clientWidth,
                                    height: this.player.media.clientHeight
                                }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                            }
                        }, {
                            key: "currentImageElement",
                            get: function() {
                                return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                            },
                            set: function(e) {
                                this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                            }
                        }]), e
                    }(),
                    source = {
                        insertElements: function(e, t) {
                            var i = this;
                            uu(t) ? Ou(e, this.media, {
                                src: t
                            }) : hu(t) && t.forEach((function(t) {
                                Ou(e, i.media, t)
                            }))
                        },
                        change: function(e) {
                            var t = this;
                            _u(e, "sources.length") ? (id.cancelRequests.call(this), this.destroy.call(this, (function() {
                                t.options.quality = [], Mu(t.media), t.media = null, mu(t.elements.container) && t.elements.container.removeAttribute("class");
                                var i = e.sources,
                                    n = e.type,
                                    s = _c(i, 1)[0],
                                    a = s.provider,
                                    r = void 0 === a ? Pd.html5 : a,
                                    o = s.src,
                                    l = "html5" === r ? n : "div",
                                    c = "html5" === r ? {} : {
                                        src: o
                                    };
                                Object.assign(t, {
                                    provider: r,
                                    type: n,
                                    supported: qu.check(n, r, t.config.playsinline),
                                    media: $u(l, c)
                                }), t.elements.container.appendChild(t.media), du(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), xu(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), jd.addStyleHook.call(t), t.isHTML5 && source.insertElements.call(t, "source", i), t.config.title = e.title, Vd.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && source.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && jd.build.call(t), t.isHTML5 && t.media.load(), xu(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new Wd(t))), t.fullscreen.update()
                            }), !0)) : this.debug.warn("Invalid source format")
                        }
                    };
                var Xd = function() {
                    function e(t, i) {
                        var n = this;
                        if (yc(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = qu.touch, this.media = t, uu(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || fu(this.media) || hu(this.media)) && (this.media = this.media[0]), this.config = Cu({}, _d, e.defaults, i || {}, function() {
                                try {
                                    return JSON.parse(n.media.getAttribute("data-plyr-config"))
                                } catch (e) {
                                    return {}
                                }
                            }()), this.elements = {
                                container: null,
                                fullscreen: null,
                                captions: null,
                                buttons: {},
                                display: {},
                                progress: {},
                                inputs: {},
                                settings: {
                                    popup: null,
                                    menu: null,
                                    panels: {},
                                    buttons: {}
                                }
                            }, this.captions = {
                                active: null,
                                currentTrack: -1,
                                meta: new WeakMap
                            }, this.fullscreen = {
                                active: !1
                            }, this.options = {
                                speed: [],
                                quality: []
                            }, this.debug = new Ad(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", qu), !su(this.media) && mu(this.media))
                            if (this.media.plyr) this.debug.warn("Target already setup");
                            else if (this.config.enabled)
                            if (qu.check().api) {
                                var s = this.media.cloneNode(!0);
                                s.autoplay = !1, this.elements.original = s;
                                var a = this.media.tagName.toLowerCase(),
                                    r = null,
                                    o = null;
                                switch (a) {
                                    case "div":
                                        if (r = this.media.querySelector("iframe"), mu(r)) {
                                            if (o = kd(r.getAttribute("src")), this.provider = function(e) {
                                                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Pd.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Pd.vimeo : null
                                                }(o.toString()), this.elements.container = this.media, this.media = r, this.elements.container.className = "", o.search.length) {
                                                var l = ["1", "true"];
                                                l.includes(o.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(o.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(o.searchParams.get("playsinline")), this.config.youtube.hl = o.searchParams.get("hl")) : this.config.playsinline = !0
                                            }
                                        } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                        if (xu(this.provider) || !Object.keys(Pd).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                        this.type = Od;
                                        break;
                                    case "video":
                                    case "audio":
                                        this.type = a, this.provider = Pd.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                        break;
                                    default:
                                        return void this.debug.error("Setup failed: unsupported type")
                                }
                                this.supported = qu.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new zd(this), this.storage = new fd(this), this.media.plyr = this, mu(this.elements.container) || (this.elements.container = $u("div", {
                                    tabindex: 0
                                }), Eu(this.media, this.elements.container)), jd.migrateStyles.call(this), jd.addStyleHook.call(this), Vd.setup.call(this), this.config.debug && Yu.call(this, this.elements.container, this.config.events.join(" "), (function(e) {
                                    n.debug.log("event: ".concat(e.type))
                                })), this.fullscreen = new Id(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && jd.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Ud(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (function() {
                                    return Qu(n.play())
                                })), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Wd(this))) : this.debug.error("Setup failed: no support")
                            } else this.debug.error("Setup failed: no support");
                        else this.debug.error("Setup failed: disabled by config");
                        else this.debug.error("Setup failed: no suitable element passed")
                    }
                    return wc(e, [{
                        key: "play",
                        value: function() {
                            var e = this;
                            return pu(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() {
                                return e.ads.play()
                            })).catch((function() {
                                return Qu(e.media.play())
                            })), this.media.play()) : null
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            return this.playing && pu(this.media.pause) ? this.media.pause() : null
                        }
                    }, {
                        key: "togglePlay",
                        value: function(e) {
                            return (du(e) ? e : !this.playing) ? this.play() : this.pause()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.isHTML5 ? (this.pause(), this.restart()) : pu(this.media.stop) && this.media.stop()
                        }
                    }, {
                        key: "restart",
                        value: function() {
                            this.currentTime = 0
                        }
                    }, {
                        key: "rewind",
                        value: function(e) {
                            this.currentTime -= cu(e) ? e : this.config.seekTime
                        }
                    }, {
                        key: "forward",
                        value: function(e) {
                            this.currentTime += cu(e) ? e : this.config.seekTime
                        }
                    }, {
                        key: "increaseVolume",
                        value: function(e) {
                            var t = this.media.muted ? 0 : this.volume;
                            this.volume = t + (cu(e) ? e : 0)
                        }
                    }, {
                        key: "decreaseVolume",
                        value: function(e) {
                            this.increaseVolume(-e)
                        }
                    }, {
                        key: "toggleCaptions",
                        value: function(e) {
                            Sd.toggle.call(this, e, !1)
                        }
                    }, {
                        key: "airplay",
                        value: function() {
                            qu.airplay && this.media.webkitShowPlaybackTargetPicker()
                        }
                    }, {
                        key: "toggleControls",
                        value: function(e) {
                            if (this.supported.ui && !this.isAudio) {
                                var t = Nu(this.elements.container, this.config.classNames.hideControls),
                                    i = void 0 === e ? void 0 : !e,
                                    n = zu(this.elements.container, this.config.classNames.hideControls, i);
                                if (n && hu(this.config.controls) && this.config.controls.includes("settings") && !xu(this.config.settings) && xd.toggleMenu.call(this, !1), n !== t) {
                                    var s = n ? "controlshidden" : "controlsshown";
                                    Xu.call(this, this.media, s)
                                }
                                return !n
                            }
                            return !1
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            Yu.call(this, this.elements.container, e, t)
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            Wu.call(this, this.elements.container, e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            Gu(this.elements.container, e, t)
                        }
                    }, {
                        key: "destroy",
                        value: function(e) {
                            var t = this,
                                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (this.ready) {
                                var n = function() {
                                    document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (Mu(t.elements.buttons.play), Mu(t.elements.captions), Mu(t.elements.controls), Mu(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), pu(e) && e()) : (Ku.call(t), id.cancelRequests.call(t), Iu(t.elements.original, t.elements.container), Xu.call(t, t.elements.original, "destroyed", !0), pu(e) && e.call(t.elements.original), t.ready = !1, setTimeout((function() {
                                        t.elements = null, t.media = null
                                    }), 200))
                                };
                                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (jd.toggleNativeControls.call(this, !0), n()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && pu(this.embed.destroy) && this.embed.destroy(), n()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200))
                            }
                        }
                    }, {
                        key: "supports",
                        value: function(e) {
                            return qu.mime.call(this, e)
                        }
                    }, {
                        key: "isHTML5",
                        get: function() {
                            return this.provider === Pd.html5
                        }
                    }, {
                        key: "isEmbed",
                        get: function() {
                            return this.isYouTube || this.isVimeo
                        }
                    }, {
                        key: "isYouTube",
                        get: function() {
                            return this.provider === Pd.youtube
                        }
                    }, {
                        key: "isVimeo",
                        get: function() {
                            return this.provider === Pd.vimeo
                        }
                    }, {
                        key: "isVideo",
                        get: function() {
                            return this.type === Od
                        }
                    }, {
                        key: "isAudio",
                        get: function() {
                            return this.type === $d
                        }
                    }, {
                        key: "playing",
                        get: function() {
                            return Boolean(this.ready && !this.paused && !this.ended)
                        }
                    }, {
                        key: "paused",
                        get: function() {
                            return Boolean(this.media.paused)
                        }
                    }, {
                        key: "stopped",
                        get: function() {
                            return Boolean(this.paused && 0 === this.currentTime)
                        }
                    }, {
                        key: "ended",
                        get: function() {
                            return Boolean(this.media.ended)
                        }
                    }, {
                        key: "currentTime",
                        set: function(e) {
                            if (this.duration) {
                                var t = cu(e) && e > 0;
                                this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                            }
                        },
                        get: function() {
                            return Number(this.media.currentTime)
                        }
                    }, {
                        key: "buffered",
                        get: function() {
                            var e = this.media.buffered;
                            return cu(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                        }
                    }, {
                        key: "seeking",
                        get: function() {
                            return Boolean(this.media.seeking)
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            var e = parseFloat(this.config.duration),
                                t = (this.media || {}).duration,
                                i = cu(t) && t !== 1 / 0 ? t : 0;
                            return e || i
                        }
                    }, {
                        key: "volume",
                        set: function(e) {
                            var t = e;
                            uu(t) && (t = Number(t)), cu(t) || (t = this.storage.get("volume")), cu(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !xu(e) && this.muted && t > 0 && (this.muted = !1)
                        },
                        get: function() {
                            return Number(this.media.volume)
                        }
                    }, {
                        key: "muted",
                        set: function(e) {
                            var t = e;
                            du(t) || (t = this.storage.get("muted")), du(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                        },
                        get: function() {
                            return Boolean(this.media.muted)
                        }
                    }, {
                        key: "hasAudio",
                        get: function() {
                            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                        }
                    }, {
                        key: "speed",
                        set: function(e) {
                            var t = this,
                                i = null;
                            cu(e) && (i = e), cu(i) || (i = this.storage.get("speed")), cu(i) || (i = this.config.speed.selected);
                            var n = this.minimumSpeed,
                                s = this.maximumSpeed;
                            i = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                                return Math.min(Math.max(e, t), i)
                            }(i, n, s), this.config.speed.selected = i, setTimeout((function() {
                                t.media.playbackRate = i
                            }), 0)
                        },
                        get: function() {
                            return Number(this.media.playbackRate)
                        }
                    }, {
                        key: "minimumSpeed",
                        get: function() {
                            return this.isYouTube ? Math.min.apply(Math, Cc(this.options.speed)) : this.isVimeo ? .5 : .0625
                        }
                    }, {
                        key: "maximumSpeed",
                        get: function() {
                            return this.isYouTube ? Math.max.apply(Math, Cc(this.options.speed)) : this.isVimeo ? 2 : 16
                        }
                    }, {
                        key: "quality",
                        set: function(e) {
                            var t = this.config.quality,
                                i = this.options.quality;
                            if (i.length) {
                                var n = [!xu(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(cu),
                                    s = !0;
                                if (!i.includes(n)) {
                                    var a = function(e, t) {
                                        return hu(e) && e.length ? e.reduce((function(e, i) {
                                            return Math.abs(i - t) < Math.abs(e - t) ? i : e
                                        })) : null
                                    }(i, n);
                                    this.debug.warn("Unsupported quality option: ".concat(n, ", using ").concat(a, " instead")), n = a, s = !1
                                }
                                t.selected = n, this.media.quality = n, s && this.storage.set({
                                    quality: n
                                })
                            }
                        },
                        get: function() {
                            return this.media.quality
                        }
                    }, {
                        key: "loop",
                        set: function(e) {
                            var t = du(e) ? e : this.config.loop.active;
                            this.config.loop.active = t, this.media.loop = t
                        },
                        get: function() {
                            return Boolean(this.media.loop)
                        }
                    }, {
                        key: "source",
                        set: function(e) {
                            source.change.call(this, e)
                        },
                        get: function() {
                            return this.media.currentSrc
                        }
                    }, {
                        key: "download",
                        get: function() {
                            var e = this.config.urls.download;
                            return wu(e) ? e : this.source
                        },
                        set: function(e) {
                            wu(e) && (this.config.urls.download = e, xd.setDownloadUrl.call(this))
                        }
                    }, {
                        key: "poster",
                        set: function(e) {
                            this.isVideo ? jd.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video")
                        },
                        get: function() {
                            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                        }
                    }, {
                        key: "ratio",
                        get: function() {
                            if (!this.isVideo) return null;
                            var e = ed(nd.call(this));
                            return hu(e) ? e.join(":") : e
                        },
                        set: function(e) {
                            this.isVideo ? uu(e) && Zu(e) ? (this.config.ratio = e, rd.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
                        }
                    }, {
                        key: "autoplay",
                        set: function(e) {
                            var t = du(e) ? e : this.config.autoplay;
                            this.config.autoplay = t
                        },
                        get: function() {
                            return Boolean(this.config.autoplay)
                        }
                    }, {
                        key: "currentTrack",
                        set: function(e) {
                            Sd.set.call(this, e, !1)
                        },
                        get: function() {
                            var e = this.captions,
                                t = e.toggled,
                                i = e.currentTrack;
                            return t ? i : -1
                        }
                    }, {
                        key: "language",
                        set: function(e) {
                            Sd.setLanguage.call(this, e, !1)
                        },
                        get: function() {
                            return (Sd.getCurrentTrack.call(this) || {}).language
                        }
                    }, {
                        key: "pip",
                        set: function(e) {
                            if (qu.pip) {
                                var t = du(e) ? e : !this.pip;
                                pu(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Cd : Ed), pu(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                            }
                        },
                        get: function() {
                            return qu.pip ? xu(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Cd : null
                        }
                    }], [{
                        key: "supported",
                        value: function(e, t, i) {
                            return qu.check(e, t, i)
                        }
                    }, {
                        key: "loadSprite",
                        value: function(e, t) {
                            return gd(e, t)
                        }
                    }, {
                        key: "setup",
                        value: function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = null;
                            return uu(t) ? n = Array.from(document.querySelectorAll(t)) : fu(t) ? n = Array.from(t) : hu(t) && (n = t.filter(mu)), xu(n) ? null : n.map((function(t) {
                                return new e(t, i)
                            }))
                        }
                    }]), e
                }();
                Xd.defaults = function(e) {
                    return JSON.parse(JSON.stringify(e))
                }(_d);
                var script = {
                    name: "VuePlyr",
                    props: {
                        options: {
                            type: Object,
                            required: !1,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            player: {}
                        }
                    },
                    computed: {
                        opts: function() {
                            var e = this.options;
                            return Object.prototype.hasOwnProperty.call(this.options, "hideYouTubeDOMError") || (e.hideYouTubeDOMError = !0), e
                        }
                    },
                    mounted: function() {
                        this.player = new Xd(this.$el, this.opts)
                    },
                    beforeUnmount: function() {
                        try {
                            this.player.destroy()
                        } catch (e) {
                            this.opts.hideYouTubeDOMError && "The YouTube player is not attached to the DOM." === e.message || console.error(e)
                        }
                    },
                    render: function() {
                        var e = this.$slots.default;
                        return "function" == typeof e ? e()[0] : e
                    },
                    install: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t.plyr && (script.props.options.default = function() {
                            return Ln({}, t.plyr)
                        }), e.component(script.name, script)
                    }
                };
                t.default = script
            }).call(this, n(23))
        },
        185: function(e, t, n) {
            ! function(e) {
                "use strict";
                var t = /^(attrs|props|on|nativeOn|class|style|hook)$/,
                    n = function(e) {
                        return e.reduce((function(a, b) {
                            var e, n, o, l, c;
                            for (o in b)
                                if (e = a[o], n = b[o], e && t.test(o))
                                    if ("class" === o && ("string" == typeof e && (c = e, a[o] = e = {}, e[c] = !0), "string" == typeof n && (c = n, b[o] = n = {}, n[c] = !0)), "on" === o || "nativeOn" === o || "hook" === o)
                                        for (l in n) e[l] = r(e[l], n[l]);
                                    else if (Array.isArray(e)) a[o] = e.concat(n);
                            else if (Array.isArray(n)) a[o] = [e].concat(n);
                            else
                                for (l in n) e[l] = n[l];
                            else a[o] = b[o];
                            return a
                        }), {})
                    };

                function r(a, b) {
                    return function() {
                        a.apply(this, arguments), b.apply(this, arguments)
                    }
                }
                var o = {
                        name: "vue-tabs",
                        props: {
                            activeTabColor: String,
                            activeTextColor: String,
                            disabledColor: String,
                            disabledTextColor: String,
                            textPosition: {
                                type: String,
                                default: "center"
                            },
                            type: {
                                type: String,
                                default: "tabs"
                            },
                            direction: {
                                type: String,
                                default: "horizontal"
                            },
                            centered: Boolean,
                            value: [String, Number, Object]
                        },
                        data: function() {
                            return {
                                activeTabIndex: 0,
                                tabs: []
                            }
                        },
                        computed: {
                            isTabShape: function() {
                                return "tabs" === this.type
                            },
                            isStacked: function() {
                                return "vertical" === this.direction
                            },
                            classList: function() {
                                return "nav " + (this.isTabShape ? "nav-tabs" : "nav-pills") + " " + (this.centered ? "nav-justified" : "") + " " + (this.isStacked ? "nav-stacked" : "")
                            },
                            stackedClass: function() {
                                return this.isStacked ? "stacked" : ""
                            },
                            activeTabStyle: function() {
                                return {
                                    backgroundColor: this.activeTabColor,
                                    color: this.activeTextColor
                                }
                            }
                        },
                        methods: {
                            navigateToTab: function(e, t) {
                                this.changeTab(this.activeTabIndex, e, t)
                            },
                            activateTab: function(e) {
                                this.activeTabIndex = e;
                                var t = this.tabs[e];
                                t.active = !0, this.$emit("input", t.title)
                            },
                            changeTab: function(e, t, n) {
                                var r = this.tabs[e] || {},
                                    o = this.tabs[t];
                                o.disabled || (this.activeTabIndex = t, r.active = !1, o.active = !0, this.$emit("input", this.tabs[t].title), this.$emit("tab-change", t, o, r), this.tryChangeRoute(n))
                            },
                            tryChangeRoute: function(e) {
                                this.$router && e && this.$router.push(e)
                            },
                            addTab: function(e) {
                                var t = this.$slots.default.indexOf(e.$vnode);
                                this.tabs.splice(t, 0, e)
                            },
                            removeTab: function(e) {
                                var t = this.tabs,
                                    n = t.indexOf(e);
                                n > -1 && t.splice(n, 1)
                            },
                            getTabs: function() {
                                return this.$slots.default ? this.$slots.default.filter((function(e) {
                                    return e.componentOptions
                                })) : []
                            },
                            findTabAndActivate: function(e) {
                                var t = this.tabs.findIndex((function(t, n) {
                                    return t.title === e || n === e
                                }));
                                t !== this.activeTabIndex && (-1 !== t ? this.changeTab(this.activeTabIndex, t) : this.changeTab(this.activeTabIndex, 0))
                            },
                            renderTabTitle: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                                    n = this.$createElement;
                                if (0 !== this.tabs.length) {
                                    var r = this.tabs[e],
                                        o = r.active,
                                        title = r.title,
                                        l = {
                                            color: this.activeTabColor
                                        };
                                    "center" === t && (l.color = this.activeTextColor);
                                    var c = n("span", {
                                        class: "title title_" + t,
                                        style: o ? l : {}
                                    }, ["center" === t && this.renderIcon(e), title]);
                                    return r.$slots.title ? r.$slots.title : r.$scopedSlots.title ? r.$scopedSlots.title({
                                        active: o,
                                        title: title,
                                        position: t,
                                        icon: r.icon,
                                        data: r.tabData
                                    }) : c
                                }
                            },
                            renderIcon: function(e) {
                                var t = this.$createElement;
                                if (0 !== this.tabs.length) {
                                    var n = this.tabs[e],
                                        r = n.icon,
                                        o = t("i", {
                                            class: r
                                        }, [" "]);
                                    return !n.$slots.title && r ? o : void 0
                                }
                            },
                            tabStyles: function(e) {
                                return e.disabled ? {
                                    backgroundColor: this.disabledColor,
                                    color: this.disabledTextColor
                                } : {}
                            },
                            renderTabs: function() {
                                var e = this,
                                    t = this.$createElement;
                                return this.tabs.map((function(r, o) {
                                    if (r) {
                                        var l = r.route,
                                            title = (r.id, r.title),
                                            c = (r.icon, r.tabId),
                                            d = e.activeTabIndex === o;
                                        return t("li", n([{
                                            attrs: {
                                                name: "tab",
                                                id: "t-" + c,
                                                "aria-selected": d,
                                                "aria-controls": "p-" + c,
                                                role: "tab"
                                            },
                                            class: ["tab", {
                                                active: d
                                            }, {
                                                disabled: r.disabled
                                            }],
                                            key: title
                                        }, {
                                            on: {
                                                click: function(t) {
                                                    for (var n = arguments.length, c = Array(n > 1 ? n - 1 : 0), d = 1; d < n; d++) c[d - 1] = arguments[d];
                                                    (function() {
                                                        return !r.disabled && e.navigateToTab(o, l)
                                                    }).apply(void 0, [t].concat(c))
                                                }
                                            }
                                        }]), ["top" === e.textPosition && e.renderTabTitle(o, e.textPosition), t("a", n([{
                                            attrs: {
                                                href: "#",
                                                role: "tab"
                                            },
                                            style: d ? e.activeTabStyle : e.tabStyles(r),
                                            class: [{
                                                active_tab: d
                                            }, "tabs__link"]
                                        }, {
                                            on: {
                                                click: function(e) {
                                                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                                                    (function(e) {
                                                        return e.preventDefault(), !1
                                                    }).apply(void 0, [e].concat(n))
                                                }
                                            }
                                        }]), ["center" !== e.textPosition && !r.$slots.title && e.renderIcon(o), "center" === e.textPosition && e.renderTabTitle(o, e.textPosition)]), "bottom" === e.textPosition && e.renderTabTitle(o, e.textPosition)])
                                    }
                                }))
                            }
                        },
                        render: function() {
                            var e = arguments[0],
                                t = this.renderTabs();
                            return e("div", {
                                class: ["vue-tabs", this.stackedClass]
                            }, [e("div", {
                                class: [{
                                    "nav-tabs-navigation": !this.isStacked
                                }, {
                                    "left-vertical-tabs": this.isStacked
                                }]
                            }, [e("div", {
                                class: ["nav-tabs-wrapper", this.stackedClass]
                            }, [e("ul", {
                                class: this.classList,
                                attrs: {
                                    role: "tablist"
                                }
                            }, [t])])]), e("div", {
                                class: ["tab-content", {
                                    "right-text-tabs": this.isStacked
                                }]
                            }, [this.$slots.default])])
                        },
                        watch: {
                            tabs: function(e) {
                                e.length > 0 && !this.value && (e.length <= this.activeTabIndex ? this.activateTab(this.activeTabIndex - 1) : this.activateTab(this.activeTabIndex)), e.length > 0 && this.value && this.findTabAndActivate(this.value)
                            },
                            value: function(e) {
                                this.findTabAndActivate(e)
                            }
                        }
                    },
                    l = {
                        name: "v-tab",
                        props: {
                            title: {
                                type: String,
                                default: ""
                            },
                            icon: {
                                type: String,
                                default: ""
                            },
                            tabData: {
                                default: null
                            },
                            beforeChange: {
                                type: Function
                            },
                            id: String,
                            route: {
                                type: [String, Object]
                            },
                            disabled: Boolean,
                            transitionName: String,
                            transitionMode: String
                        },
                        computed: {
                            isValidParent: function() {
                                return "vue-tabs" === this.$parent.$options.name
                            },
                            hash: function() {
                                return "#" + this.id
                            },
                            tabId: function() {
                                return this.id ? this.id : this.title
                            }
                        },
                        data: function() {
                            return {
                                active: !1,
                                validationError: null
                            }
                        },
                        mounted: function() {
                            this.$parent.addTab(this)
                        },
                        destroyed: function() {
                            this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el), this.$parent.removeTab(this)
                        },
                        render: function() {
                            return (0, arguments[0])("section", {
                                class: "tab-container",
                                attrs: {
                                    id: "p-" + this.tabId,
                                    "aria-labelledby": "t-" + this.tabId,
                                    role: "tabpanel"
                                },
                                directives: [{
                                    name: "show",
                                    value: this.active
                                }]
                            }, [this.$slots.default])
                        }
                    },
                    c = {
                        install: function(e) {
                            e.component("vue-tabs", o), e.component("v-tab", l)
                        }
                    };
                "undefined" != typeof window && window.Vue && (window.Vue.use(c), window.VueTabs = c), e.default = c, e.VueTabs = o, e.VTab = l, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        },
        186: function(e, t, n) {
            "use strict";
            var r = n(9),
                o = (n(71), n(36), n(15), n(72), n(1)),
                l = n(0),
                c = window.__NUXT__;

            function d() {
                if (!this._hydrated) return this.$fetch()
            }

            function h() {
                if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                    var e;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = c.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var t in data) o.default.set(this.$data, t, data[t])
                } else f.call(this)
            }

            function f() {
                var e = !1 !== this.$options.fetchOnServer;
                if ("function" == typeof this.$options.fetchOnServer && (e = !1 !== this.$options.fetchOnServer.call(this)), e && !this.$nuxt.isPreview && this.$nuxt._pagePayload) {
                    this._hydrated = !0;
                    var t = this.$options._scopeId || this.$options.name || "",
                        n = Object(l.d)(this.$nuxt._fetchCounters, t);
                    if ("function" == typeof this.$options.fetchKey) this._fetchKey = this.$options.fetchKey.call(this, n);
                    else {
                        var r = "string" == typeof this.$options.fetchKey ? this.$options.fetchKey : t;
                        this._fetchKey = r ? r + ":" + n(r) : String(n(r))
                    }
                    var data = this.$nuxt._pagePayload.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else if (data)
                        for (var c in data) o.default.set(this.$data, c, data[c]);
                    else this.$fetch()
                }
            }

            function m() {
                var e = this;
                return this._fetchPromise || (this._fetchPromise = v.call(this).then((function() {
                    delete e._fetchPromise
                }))), this._fetchPromise
            }

            function v() {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = Object(r.a)(regeneratorRuntime.mark((function e() {
                    var t, n, r, o = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, t = null, n = Date.now(), e.prev = 6, e.next = 9, this.$options.fetch.call(this);
                            case 9:
                                e.next = 15;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(6), t = Object(l.p)(e.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    e.next = 19;
                                    break
                                }
                                return e.next = 19, new Promise((function(e) {
                                    return setTimeout(e, r)
                                }));
                            case 19:
                                this.$fetchState.error = t, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            t.a = {
                beforeCreate: function() {
                    Object(l.m)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = m.bind(this), Object(l.a)(this, "created", h), Object(l.a)(this, "beforeMount", d))
                }
            }
        },
        187: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            n(15), n(36), n(72);
            var r = {},
                o = {},
                l = {};

            function c(e, t) {
                if (r[e]) return Promise.resolve(r[e]);
                if (l[e]) return Promise.reject(l[e]);
                if (o[e]) return o[e];
                var n, c, d = o[e] = new Promise((function(e, t) {
                    n = e, c = t
                }));
                delete r[e];
                var h, script = document.createElement("script");
                script.charset = "utf-8", script.timeout = 120, script.src = t;
                var f = new Error,
                    m = script.onerror = script.onload = function(t) {
                        if (clearTimeout(h), delete o[e], script.onerror = script.onload = null, r[e]) return n(r[e]);
                        var d = t && ("load" === t.type ? "missing" : t.type),
                            m = t && t.target && t.target.src;
                        f.message = "Loading chunk " + e + " failed.\n(" + d + ": " + m + ")", f.name = "ChunkLoadError", f.type = d, f.request = m, l[e] = f, c(f)
                    };
                return h = setTimeout((function() {
                    m({
                        type: "timeout",
                        target: script
                    })
                }), 12e4), document.head.appendChild(script), d
            }

            function d() {
                window.__NUXT_JSONP__ = function(e, t) {
                    r[e] = t
                }, window.__NUXT_JSONP_CACHE__ = r, window.__NUXT_IMPORT__ = c
            }
        },
        188: function(e, t, n) {
            "use strict";
            n(190);
            var r = {
                    props: {
                        value: {
                            type: Number
                        },
                        pageCount: {
                            type: Number,
                            required: !0
                        },
                        forcePage: {
                            type: Number
                        },
                        clickHandler: {
                            type: Function,
                            default: function() {}
                        },
                        pageRange: {
                            type: Number,
                            default: 3
                        },
                        marginPages: {
                            type: Number,
                            default: 1
                        },
                        prevText: {
                            type: String,
                            default: "Prev"
                        },
                        nextText: {
                            type: String,
                            default: "Next"
                        },
                        breakViewText: {
                            type: String,
                            default: "…"
                        },
                        containerClass: {
                            type: String
                        },
                        pageClass: {
                            type: String
                        },
                        pageLinkClass: {
                            type: String
                        },
                        prevClass: {
                            type: String
                        },
                        prevLinkClass: {
                            type: String
                        },
                        nextClass: {
                            type: String
                        },
                        nextLinkClass: {
                            type: String
                        },
                        breakViewClass: {
                            type: String
                        },
                        breakViewLinkClass: {
                            type: String
                        },
                        activeClass: {
                            type: String,
                            default: "active"
                        },
                        disabledClass: {
                            type: String,
                            default: "disabled"
                        },
                        noLiSurround: {
                            type: Boolean,
                            default: !1
                        },
                        firstLastButton: {
                            type: Boolean,
                            default: !1
                        },
                        firstButtonText: {
                            type: String,
                            default: "First"
                        },
                        lastButtonText: {
                            type: String,
                            default: "Last"
                        },
                        hidePrevNext: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    beforeUpdate: function() {
                        void 0 !== this.forcePage && this.forcePage !== this.selected && (this.selected = this.forcePage)
                    },
                    computed: {
                        selected: {
                            get: function() {
                                return this.value || this.innerValue
                            },
                            set: function(e) {
                                this.innerValue = e
                            }
                        },
                        pages: function() {
                            var e = this,
                                t = {};
                            if (this.pageCount <= this.pageRange)
                                for (var n = 0; n < this.pageCount; n++) {
                                    var r = {
                                        index: n,
                                        content: n + 1,
                                        selected: n === this.selected - 1
                                    };
                                    t[n] = r
                                } else {
                                    for (var o = Math.floor(this.pageRange / 2), l = function(n) {
                                            var r = {
                                                index: n,
                                                content: n + 1,
                                                selected: n === e.selected - 1
                                            };
                                            t[n] = r
                                        }, c = function(e) {
                                            t[e] = {
                                                disabled: !0,
                                                breakView: !0
                                            }
                                        }, i = 0; i < this.marginPages; i++) l(i);
                                    var d = 0;
                                    this.selected - o > 0 && (d = this.selected - 1 - o);
                                    var h = d + this.pageRange - 1;
                                    h >= this.pageCount && (d = (h = this.pageCount - 1) - this.pageRange + 1);
                                    for (var f = d; f <= h && f <= this.pageCount - 1; f++) l(f);
                                    d > this.marginPages && c(d - 1), h + 1 < this.pageCount - this.marginPages && c(h + 1);
                                    for (var m = this.pageCount - 1; m >= this.pageCount - this.marginPages; m--) l(m)
                                }
                            return t
                        }
                    },
                    data: function() {
                        return {
                            innerValue: 1
                        }
                    },
                    methods: {
                        handlePageSelected: function(e) {
                            this.selected !== e && (this.innerValue = e, this.$emit("input", e), this.clickHandler(e))
                        },
                        prevPage: function() {
                            this.selected <= 1 || this.handlePageSelected(this.selected - 1)
                        },
                        nextPage: function() {
                            this.selected >= this.pageCount || this.handlePageSelected(this.selected + 1)
                        },
                        firstPageSelected: function() {
                            return 1 === this.selected
                        },
                        lastPageSelected: function() {
                            return this.selected === this.pageCount || 0 === this.pageCount
                        },
                        selectFirstPage: function() {
                            this.selected <= 1 || this.handlePageSelected(1)
                        },
                        selectLastPage: function() {
                            this.selected >= this.pageCount || this.handlePageSelected(this.pageCount)
                        }
                    }
                },
                o = (n(252), n(28)),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.noLiSurround ? n("div", {
                        class: e.containerClass
                    }, [e.firstLastButton ? n("a", {
                        class: [e.pageLinkClass, e.firstPageSelected() ? e.disabledClass : ""],
                        attrs: {
                            tabindex: "0"
                        },
                        domProps: {
                            innerHTML: e._s(e.firstButtonText)
                        },
                        on: {
                            click: function(t) {
                                return e.selectFirstPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.selectFirstPage()
                            }
                        }
                    }) : e._e(), e._v(" "), e.firstPageSelected() && e.hidePrevNext ? e._e() : n("a", {
                        class: [e.prevLinkClass, e.firstPageSelected() ? e.disabledClass : ""],
                        attrs: {
                            tabindex: "0"
                        },
                        domProps: {
                            innerHTML: e._s(e.prevText)
                        },
                        on: {
                            click: function(t) {
                                return e.prevPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.prevPage()
                            }
                        }
                    }), e._v(" "), e._l(e.pages, (function(t) {
                        return [t.breakView ? n("a", {
                            class: [e.pageLinkClass, e.breakViewLinkClass, t.disabled ? e.disabledClass : ""],
                            attrs: {
                                tabindex: "0"
                            }
                        }, [e._t("breakViewContent", (function() {
                            return [e._v(e._s(e.breakViewText))]
                        }))], 2) : t.disabled ? n("a", {
                            class: [e.pageLinkClass, t.selected ? e.activeClass : "", e.disabledClass],
                            attrs: {
                                tabindex: "0"
                            }
                        }, [e._v(e._s(t.content))]) : n("a", {
                            class: [e.pageLinkClass, t.selected ? e.activeClass : ""],
                            attrs: {
                                tabindex: "0"
                            },
                            on: {
                                click: function(n) {
                                    return e.handlePageSelected(t.index + 1)
                                },
                                keyup: function(n) {
                                    return !n.type.indexOf("key") && e._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : e.handlePageSelected(t.index + 1)
                                }
                            }
                        }, [e._v(e._s(t.content))])]
                    })), e._v(" "), e.lastPageSelected() && e.hidePrevNext ? e._e() : n("a", {
                        class: [e.nextLinkClass, e.lastPageSelected() ? e.disabledClass : ""],
                        attrs: {
                            tabindex: "0"
                        },
                        domProps: {
                            innerHTML: e._s(e.nextText)
                        },
                        on: {
                            click: function(t) {
                                return e.nextPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.nextPage()
                            }
                        }
                    }), e._v(" "), e.firstLastButton ? n("a", {
                        class: [e.pageLinkClass, e.lastPageSelected() ? e.disabledClass : ""],
                        attrs: {
                            tabindex: "0"
                        },
                        domProps: {
                            innerHTML: e._s(e.lastButtonText)
                        },
                        on: {
                            click: function(t) {
                                return e.selectLastPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.selectLastPage()
                            }
                        }
                    }) : e._e()], 2) : n("ul", {
                        class: e.containerClass
                    }, [e.firstLastButton ? n("li", {
                        class: [e.pageClass, e.firstPageSelected() ? e.disabledClass : ""]
                    }, [n("a", {
                        class: e.pageLinkClass,
                        attrs: {
                            tabindex: e.firstPageSelected() ? -1 : 0
                        },
                        domProps: {
                            innerHTML: e._s(e.firstButtonText)
                        },
                        on: {
                            click: function(t) {
                                return e.selectFirstPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.selectFirstPage()
                            }
                        }
                    })]) : e._e(), e._v(" "), e.firstPageSelected() && e.hidePrevNext ? e._e() : n("li", {
                        class: [e.prevClass, e.firstPageSelected() ? e.disabledClass : ""]
                    }, [n("a", {
                        class: e.prevLinkClass,
                        attrs: {
                            tabindex: e.firstPageSelected() ? -1 : 0
                        },
                        domProps: {
                            innerHTML: e._s(e.prevText)
                        },
                        on: {
                            click: function(t) {
                                return e.prevPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.prevPage()
                            }
                        }
                    })]), e._v(" "), e._l(e.pages, (function(t) {
                        return n("li", {
                            class: [e.pageClass, t.selected ? e.activeClass : "", t.disabled ? e.disabledClass : "", t.breakView ? e.breakViewClass : ""]
                        }, [t.breakView ? n("a", {
                            class: [e.pageLinkClass, e.breakViewLinkClass],
                            attrs: {
                                tabindex: "0"
                            }
                        }, [e._t("breakViewContent", (function() {
                            return [e._v(e._s(e.breakViewText))]
                        }))], 2) : t.disabled ? n("a", {
                            class: e.pageLinkClass,
                            attrs: {
                                tabindex: "0"
                            }
                        }, [e._v(e._s(t.content))]) : n("a", {
                            class: e.pageLinkClass,
                            attrs: {
                                tabindex: "0"
                            },
                            on: {
                                click: function(n) {
                                    return e.handlePageSelected(t.index + 1)
                                },
                                keyup: function(n) {
                                    return !n.type.indexOf("key") && e._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : e.handlePageSelected(t.index + 1)
                                }
                            }
                        }, [e._v(e._s(t.content))])])
                    })), e._v(" "), e.lastPageSelected() && e.hidePrevNext ? e._e() : n("li", {
                        class: [e.nextClass, e.lastPageSelected() ? e.disabledClass : ""]
                    }, [n("a", {
                        class: e.nextLinkClass,
                        attrs: {
                            tabindex: e.lastPageSelected() ? -1 : 0
                        },
                        domProps: {
                            innerHTML: e._s(e.nextText)
                        },
                        on: {
                            click: function(t) {
                                return e.nextPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.nextPage()
                            }
                        }
                    })]), e._v(" "), e.firstLastButton ? n("li", {
                        class: [e.pageClass, e.lastPageSelected() ? e.disabledClass : ""]
                    }, [n("a", {
                        class: e.pageLinkClass,
                        attrs: {
                            tabindex: e.lastPageSelected() ? -1 : 0
                        },
                        domProps: {
                            innerHTML: e._s(e.lastButtonText)
                        },
                        on: {
                            click: function(t) {
                                return e.selectLastPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.selectLastPage()
                            }
                        }
                    })]) : e._e()], 2)
                }), [], !1, null, "c86c3bb4", null);
            t.a = component.exports
        },
        192: function(e, t, n) {
            (function(e) {
                e.installComponents = function(component, e) {
                    var n = "function" == typeof component.exports ? component.exports.extendOptions : component.options;
                    for (var i in "function" == typeof component.exports && (n.components = component.exports.options.components), n.components = n.components || {}, e) n.components[i] = n.components[i] || e[i];
                    n.functional && function(component, e) {
                        if (component.exports[t]) return;
                        component.exports[t] = !0;
                        var n = component.exports.render;
                        component.exports.render = function(t, r) {
                            return n(t, Object.assign({}, r, {
                                _c: function(t, a, b) {
                                    return r._c(e[t] || t, a, b)
                                }
                            }))
                        }
                    }(component, n.components)
                };
                var t = "_functionalComponents"
            }).call(this, n(23))
        },
        193: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    n(59), n(64), n(45), n(69), n(70);
                    var t = n(39),
                        r = n(9),
                        o = (n(115), n(203), n(213), n(215), n(71), n(36), n(15), n(42), n(46), n(53), n(56), n(57), n(123), n(54), n(31), n(29), n(30), n(72), n(1)),
                        l = n(180),
                        c = n(127),
                        d = n(0),
                        h = n(27),
                        f = n(186),
                        m = n(103),
                        v = n(187);

                    function y(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return w(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                                }(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, l = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next();
                                return l = e.done, e
                            },
                            e: function(e) {
                                c = !0, o = e
                            },
                            f: function() {
                                try {
                                    l || null == n.return || n.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                        }
                    }

                    function w(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                        return n
                    }
                    Object(v.a)(), o.default.__nuxt__fetch__mixin__ || (o.default.mixin(f.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), e.fetch || (e.fetch = l.a);
                    var x, k, T = [],
                        S = window.__NUXT__ || {},
                        _ = S.config || {};
                    _._app && (n.p = Object(d.v)(_._app.cdnURL, _._app.assetsPath)), Object.assign(o.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var C = o.default.config.errorHandler || console.error;

                    function E(e, t, n) {
                        for (var r = function(component) {
                                var e = function(component, e) {
                                    if (!component || !component.options || !component.options[e]) return {};
                                    var option = component.options[e];
                                    if ("function" == typeof option) {
                                        for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", t, n) || {};
                                return "string" == typeof e ? {
                                    name: e
                                } : e
                            }, o = n ? Object(d.h)(n) : [], l = Math.max(e.length, o.length), c = [], h = function(i) {
                                var t = Object.assign({}, r(e[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(t).filter((function(e) {
                                    return void 0 !== t[e] && !e.toLowerCase().includes("leave")
                                })).forEach((function(e) {
                                    n[e] = t[e]
                                })), c.push(n)
                            }, i = 0; i < l; i++) h(i);
                        return c
                    }

                    function P(e, t, n) {
                        return $.apply(this, arguments)
                    }

                    function $() {
                        return ($ = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r) {
                            var o, l, c, h, f = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== t.name, this._paramChanged = !this._routeChanged && n.path !== t.path, this._queryChanged = !this._paramChanged && n.fullPath !== t.fullPath, this._diffQuery = this._queryChanged ? Object(d.j)(t.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), e.prev = 5, !this._queryChanged) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 9, Object(d.r)(t, (function(e, t) {
                                            return {
                                                Component: e,
                                                instance: t
                                            }
                                        }));
                                    case 9:
                                        o = e.sent, o.some((function(e) {
                                            var r = e.Component,
                                                o = e.instance,
                                                l = r.options.watchQuery;
                                            return !0 === l || (Array.isArray(l) ? l.some((function(e) {
                                                return f._diffQuery[e]
                                            })) : "function" == typeof l && l.apply(o, [t.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), e.next = 26;
                                        break;
                                    case 15:
                                        if (e.prev = 15, e.t0 = e.catch(5), l = e.t0 || {}, c = l.statusCode || l.status || l.response && l.response.status || 500, h = l.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(h)) {
                                            e.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), e.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: c,
                                            message: h
                                        }), this.$nuxt.$emit("routeChanged", t, n, l), r();
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function O(e, t) {
                        return S.serverRendered && t && Object(d.b)(e, t), e._Ctor = e, e
                    }

                    function M(e) {
                        return Object(d.e)(e, function() {
                            var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r, o, l) {
                                var c;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("function" != typeof t || t.options) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 3, t();
                                        case 3:
                                            t = e.sent;
                                        case 4:
                                            return c = O(Object(d.s)(t), S.data ? S.data[l] : null), r.components[o] = c, e.abrupt("return", c);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, r, o, l) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }

                    function A(e, t, n) {
                        var r = this,
                            o = [],
                            l = !1;
                        if (void 0 !== n && (o = [], (n = Object(d.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), e.forEach((function(e) {
                                e.options.middleware && (o = o.concat(e.options.middleware))
                            }))), o = o.map((function(e) {
                                return "function" == typeof e ? e : ("function" != typeof c.a[e] && (l = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + e
                                })), c.a[e])
                            })), !l) return Object(d.o)(o, t)
                    }

                    function I(e, t, n) {
                        return L.apply(this, arguments)
                    }

                    function L() {
                        return L = Object(r.a)(regeneratorRuntime.mark((function e(t, n, o) {
                            var l, c, f, m, v, w, k, S, _, C, P, $, O, M, I, L, j = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", o());
                                    case 2:
                                        return l = !1, t === n ? (T = [], l = !0) : (c = [], T = Object(d.h)(n, c).map((function(e, i) {
                                            return Object(d.c)(n.matched[c[i]].path)(n.params)
                                        }))), f = !1, m = function(path) {
                                            n.path === path.path && j.$loading.finish && j.$loading.finish(), n.path !== path.path && j.$loading.pause && j.$loading.pause(), f || (f = !0, o(path))
                                        }, e.next = 8, Object(d.t)(x, {
                                            route: t,
                                            from: n,
                                            next: m.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), v = [], (w = Object(d.h)(t, v)).length) {
                                            e.next = 27;
                                            break
                                        }
                                        return e.next = 15, A.call(this, w, x.context);
                                    case 15:
                                        if (!f) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 17:
                                        return k = (h.a.options || h.a).layout, e.next = 20, this.loadLayout("function" == typeof k ? k.call(h.a, x.context) : k);
                                    case 20:
                                        return S = e.sent, e.next = 23, A.call(this, w, x.context, S);
                                    case 23:
                                        if (!f) {
                                            e.next = 25;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 25:
                                        return x.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), e.abrupt("return", o());
                                    case 27:
                                        return w.forEach((function(e) {
                                            e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                                        })), this.setTransitions(E(w, t, n)), e.prev = 29, e.next = 32, A.call(this, w, x.context);
                                    case 32:
                                        if (!f) {
                                            e.next = 34;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 34:
                                        if (!x.context._errored) {
                                            e.next = 36;
                                            break
                                        }
                                        return e.abrupt("return", o());
                                    case 36:
                                        return "function" == typeof(_ = w[0].options.layout) && (_ = _(x.context)), e.next = 40, this.loadLayout(_);
                                    case 40:
                                        return _ = e.sent, e.next = 43, A.call(this, w, x.context, _);
                                    case 43:
                                        if (!f) {
                                            e.next = 45;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 45:
                                        if (!x.context._errored) {
                                            e.next = 47;
                                            break
                                        }
                                        return e.abrupt("return", o());
                                    case 47:
                                        C = !0, e.prev = 48, P = y(w), e.prev = 50, P.s();
                                    case 52:
                                        if (($ = P.n()).done) {
                                            e.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(O = $.value).options.validate) {
                                            e.next = 56;
                                            break
                                        }
                                        return e.abrupt("continue", 61);
                                    case 56:
                                        return e.next = 58, O.options.validate(x.context);
                                    case 58:
                                        if (C = e.sent) {
                                            e.next = 61;
                                            break
                                        }
                                        return e.abrupt("break", 63);
                                    case 61:
                                        e.next = 52;
                                        break;
                                    case 63:
                                        e.next = 68;
                                        break;
                                    case 65:
                                        e.prev = 65, e.t0 = e.catch(50), P.e(e.t0);
                                    case 68:
                                        return e.prev = 68, P.f(), e.finish(68);
                                    case 71:
                                        e.next = 77;
                                        break;
                                    case 73:
                                        return e.prev = 73, e.t1 = e.catch(48), this.error({
                                            statusCode: e.t1.statusCode || "500",
                                            message: e.t1.message
                                        }), e.abrupt("return", o());
                                    case 77:
                                        if (C) {
                                            e.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), e.abrupt("return", o());
                                    case 80:
                                        return e.next = 82, Promise.all(w.map(function() {
                                            var e = Object(r.a)(regeneratorRuntime.mark((function e(r, i) {
                                                var o, c, h, f, m, y, w, k, p;
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (r._path = Object(d.c)(t.matched[v[i]].path)(t.params), r._dataRefresh = !1, o = r._path !== T[i], j._routeChanged && o ? r._dataRefresh = !0 : j._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : j._queryChanged && (!0 === (h = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(h) ? r._dataRefresh = h.some((function(e) {
                                                                    return j._diffQuery[e]
                                                                })) : "function" == typeof h && (M || (M = Object(d.i)(t)), r._dataRefresh = h.apply(M[i], [t.query, n.query]))), j._hadError || !j._isMounted || r._dataRefresh) {
                                                                e.next = 6;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 6:
                                                            return f = [], m = r.options.asyncData && "function" == typeof r.options.asyncData, y = Boolean(r.options.fetch) && r.options.fetch.length, w = m && y ? 30 : 45, m && ((k = j.isPreview || l ? Object(d.q)(r.options.asyncData, x.context) : j.fetchPayload(t.path).then((function(e) {
                                                                return e.data[i]
                                                            })).catch((function(e) {
                                                                return Object(d.q)(r.options.asyncData, x.context)
                                                            }))).then((function(e) {
                                                                Object(d.b)(r, e), j.$loading.increase && j.$loading.increase(w)
                                                            })), f.push(k)), j.isPreview || l || f.push(j.fetchPayload(t.path).then((function(e) {
                                                                e.mutations.forEach((function(e) {
                                                                    j.$store.commit(e[0], e[1])
                                                                }))
                                                            })).catch((function(e) {
                                                                return null
                                                            }))), j.$loading.manual = !1 === r.options.loading, j.isPreview || l || f.push(j.fetchPayload(t.path).catch((function(e) {
                                                                return null
                                                            }))), y && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(e) {
                                                                j.$loading.increase && j.$loading.increase(w)
                                                            })), f.push(p)), e.abrupt("return", Promise.all(f));
                                                        case 16:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        f || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), e.next = 99;
                                        break;
                                    case 85:
                                        if (e.prev = 85, e.t2 = e.catch(29), "ERR_REDIRECT" !== (I = e.t2 || {}).message) {
                                            e.next = 90;
                                            break
                                        }
                                        return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, n, I));
                                    case 90:
                                        return T = [], Object(d.l)(I), "function" == typeof(L = (h.a.options || h.a).layout) && (L = L(x.context)), e.next = 96, this.loadLayout(L);
                                    case 96:
                                        this.error(I), this.$nuxt.$emit("routeChanged", t, n, I), o();
                                    case 99:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        }))), L.apply(this, arguments)
                    }

                    function j(e, n) {
                        Object(d.e)(e, (function(e, n, r, l) {
                            return "object" !== Object(t.a)(e) || e.options || ((e = o.default.extend(e))._Ctor = e, r.components[l] = e), e
                        }))
                    }

                    function z(e) {
                        var t = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                        var n = t ? (h.a.options || h.a).layout : e.matched[0].components.default.options.layout;
                        "function" == typeof n && (n = n(x.context)), this.setLayout(n)
                    }

                    function N(e) {
                        e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
                    }

                    function D(e, t) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(d.i)(e),
                                l = Object(d.h)(e),
                                c = !1;
                            o.default.nextTick((function() {
                                r.forEach((function(e, i) {
                                    if (e && !e._isDestroyed && e.constructor._dataRefresh && l[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                        var t = e.constructor.options.data.call(e);
                                        for (var n in t) o.default.set(e.$data, n, t[n]);
                                        c = !0
                                    }
                                })), c && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), N(n)
                            }))
                        }
                    }

                    function R(e) {
                        window.onNuxtReadyCbs.forEach((function(t) {
                            "function" == typeof t && t(e)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), k.afterEach((function(t, n) {
                            o.default.nextTick((function() {
                                return e.$nuxt.$emit("routeChanged", t, n)
                            }))
                        }))
                    }

                    function B() {
                        return (B = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                            var n, r, l, c, h, f;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (x = t.app, k = t.router, t.store, n = new o.default(x), S.data || !S.serverRendered) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.prev = 5, e.next = 8, n.fetchPayload(S.routePath || n.context.route.path);
                                    case 8:
                                        r = e.sent, Object.assign(S, r), e.next = 14;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(5);
                                    case 14:
                                        return l = S.layout || "default", e.next = 17, n.loadLayout(l);
                                    case 17:
                                        return n.setLayout(l), c = function() {
                                            n.$mount("#__nuxt"), k.afterEach(j), k.afterEach(z.bind(n)), k.afterEach(D.bind(n)), o.default.nextTick((function() {
                                                R(n)
                                            }))
                                        }, e.next = 21, Promise.all(M(x.context.route));
                                    case 21:
                                        if (h = e.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), h.length && (n.setTransitions(E(h, k.currentRoute)), T = k.currentRoute.matched.map((function(e) {
                                                return Object(d.c)(e.path)(k.currentRoute.params)
                                            }))), n.$loading = {}, S.error && n.error(S.error), k.beforeEach(P.bind(n)), k.beforeEach(I.bind(n)), !S.serverRendered) {
                                            e.next = 30;
                                            break
                                        }
                                        return e.abrupt("return", c());
                                    case 30:
                                        return f = function() {
                                            j(k.currentRoute, k.currentRoute), z.call(n, k.currentRoute), N(n), c()
                                        }, e.next = 33, new Promise((function(e) {
                                            return setTimeout(e, 0)
                                        }));
                                    case 33:
                                        I.call(n, k.currentRoute, k.currentRoute, (function(path) {
                                            if (path) {
                                                var e = k.afterEach((function(t, n) {
                                                    e(), f()
                                                }));
                                                k.push(path, void 0, (function(e) {
                                                    e && C(e)
                                                }))
                                            } else f()
                                        }));
                                    case 34:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 12]
                            ])
                        })))).apply(this, arguments)
                    }
                    Object(h.b)(null, S.config).then((function(e) {
                        return B.apply(this, arguments)
                    })).catch(C)
                }.call(this, n(23))
        },
        234: function(e, t, n) {
            "use strict";
            n(178)
        },
        235: function(e, t, n) {
            var r = n(40)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), r.locals = {}, e.exports = r
        },
        240: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), "string" != typeof(e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            }
        },
        247: function(e, t, n) {
            var content = n(248);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(41).default)("925f6c30", content, !0, {
                sourceMap: !1
            })
        },
        248: function(e, t, n) {
            var r = n(40)((function(i) {
                return i[1]
            }));
            r.push([e.i, '@-webkit-keyframes plyr-progress{to{background-position:25px 0;background-position:var(--plyr-progress-loading-size,25px) 0}}@keyframes plyr-progress{to{background-position:25px 0;background-position:var(--plyr-progress-loading-size,25px) 0}}@-webkit-keyframes plyr-popup{0%{opacity:.5;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes plyr-popup{0%{opacity:.5;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes plyr-fade-in{0%{opacity:0}to{opacity:1}}@keyframes plyr-fade-in{0%{opacity:0}to{opacity:1}}.plyr{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;direction:ltr;display:flex;flex-direction:column;font-family:inherit;font-family:var(--plyr-font-family,inherit);font-variant-numeric:tabular-nums;font-weight:400;font-weight:var(--plyr-font-weight-regular,400);height:100%;line-height:1.7;line-height:var(--plyr-line-height,1.7);max-width:100%;min-width:200px;position:relative;text-shadow:none;transition:box-shadow .3s ease;z-index:0}.plyr audio,.plyr iframe,.plyr video{display:block;height:100%;width:100%}.plyr button{font:inherit;line-height:inherit;width:auto}.plyr:focus{outline:0}.plyr--full-ui{box-sizing:border-box}.plyr--full-ui *,.plyr--full-ui :after,.plyr--full-ui :before{box-sizing:inherit}.plyr--full-ui a,.plyr--full-ui button,.plyr--full-ui input,.plyr--full-ui label{touch-action:manipulation}.plyr__badge{background:#4a5464;background:var(--plyr-badge-background,#4a5464);border-radius:2px;border-radius:var(--plyr-badge-border-radius,2px);color:#fff;color:var(--plyr-badge-text-color,#fff);font-size:9px;font-size:var(--plyr-font-size-badge,9px);line-height:1;padding:3px 4px}.plyr--full-ui ::-webkit-media-text-track-container{display:none}.plyr__captions{-webkit-animation:plyr-fade-in .3s ease;animation:plyr-fade-in .3s ease;bottom:0;display:none;font-size:13px;font-size:var(--plyr-font-size-small,13px);left:0;padding:10px;padding:var(--plyr-control-spacing,10px);position:absolute;text-align:center;transition:transform .4s ease-in-out;width:100%}.plyr__captions span:empty{display:none}@media (min-width:480px){.plyr__captions{font-size:15px;font-size:var(--plyr-font-size-base,15px);padding:20px;padding:calc(10px*2);padding:calc(var(--plyr-control-spacing,10px)*2)}}@media (min-width:768px){.plyr__captions{font-size:18px;font-size:var(--plyr-font-size-large,18px)}}.plyr--captions-active .plyr__captions{display:block}.plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(-40px);transform:translateY(calc(10px*-4));transform:translateY(calc(var(--plyr-control-spacing,10px)*-4))}.plyr__caption{background:rgba(0,0,0,.8);background:var(--plyr-captions-background,rgba(0,0,0,.8));border-radius:2px;-webkit-box-decoration-break:clone;box-decoration-break:clone;color:#fff;color:var(--plyr-captions-text-color,#fff);line-height:185%;padding:.2em .5em;white-space:pre-wrap}.plyr__caption div{display:inline}.plyr__control{background:0 0;border:0;border-radius:3px;border-radius:var(--plyr-control-radius,3px);color:inherit;cursor:pointer;flex-shrink:0;overflow:visible;padding:7px;padding:calc(10px*0.7);padding:calc(var(--plyr-control-spacing,10px)*0.7);position:relative;transition:all .3s ease}.plyr__control svg{display:block;fill:currentColor;height:18px;height:var(--plyr-control-icon-size,18px);pointer-events:none;width:18px;width:var(--plyr-control-icon-size,18px)}.plyr__control:focus{outline:0}.plyr__control.plyr__tab-focus{outline-color:#00b3ff;outline-color:var(--plyr-tab-focus-color,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)));outline-offset:2px;outline-style:dotted;outline-width:3px}a.plyr__control{text-decoration:none}.plyr__control.plyr__control--pressed .icon--not-pressed,.plyr__control.plyr__control--pressed .label--not-pressed,.plyr__control:not(.plyr__control--pressed) .icon--pressed,.plyr__control:not(.plyr__control--pressed) .label--pressed,a.plyr__control:after,a.plyr__control:before{display:none}.plyr--full-ui ::-webkit-media-controls{display:none}.plyr__controls{align-items:center;display:flex;justify-content:flex-end;text-align:center}.plyr__controls .plyr__progress__container{flex:1;min-width:0}.plyr__controls .plyr__controls__item{margin-left:2.5px;margin-left:calc(10px/4);margin-left:calc(var(--plyr-control-spacing,10px)/4)}.plyr__controls .plyr__controls__item:first-child{margin-left:0;margin-right:auto}.plyr__controls .plyr__controls__item.plyr__progress__container{padding-left:2.5px;padding-left:calc(10px/4);padding-left:calc(var(--plyr-control-spacing,10px)/4)}.plyr__controls .plyr__controls__item.plyr__time{padding:0 5px;padding:0 calc(10px/2);padding:0 calc(var(--plyr-control-spacing,10px)/2)}.plyr__controls .plyr__controls__item.plyr__progress__container:first-child,.plyr__controls .plyr__controls__item.plyr__time+.plyr__time,.plyr__controls .plyr__controls__item.plyr__time:first-child{padding-left:0}.plyr [data-plyr=airplay],.plyr [data-plyr=captions],.plyr [data-plyr=fullscreen],.plyr [data-plyr=pip],.plyr__controls:empty{display:none}.plyr--airplay-supported [data-plyr=airplay],.plyr--captions-enabled [data-plyr=captions],.plyr--fullscreen-enabled [data-plyr=fullscreen],.plyr--pip-supported [data-plyr=pip]{display:inline-block}.plyr__menu{display:flex;position:relative}.plyr__menu .plyr__control svg{transition:transform .3s ease}.plyr__menu .plyr__control[aria-expanded=true] svg{transform:rotate(90deg)}.plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip{display:none}.plyr__menu__container{-webkit-animation:plyr-popup .2s ease;animation:plyr-popup .2s ease;background:hsla(0,0%,100%,.9);background:var(--plyr-menu-background,hsla(0,0%,100%,.9));border-radius:4px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:var(--plyr-menu-shadow,0 1px 2px rgba(0,0,0,.15));color:#4a5464;color:var(--plyr-menu-color,#4a5464);font-size:15px;font-size:var(--plyr-font-size-base,15px);margin-bottom:10px;position:absolute;right:-3px;text-align:left;white-space:nowrap;z-index:3}.plyr__menu__container>div{overflow:hidden;transition:height .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1)}.plyr__menu__container:after{border:4px solid transparent;border-width:4px;border-width:var(--plyr-menu-arrow-size,4px);border-top:4px solid hsla(0,0%,100%,.9);border-top:var(--plyr-menu-arrow-size,4px) solid hsla(0,0%,100%,.9);content:"";height:0;position:absolute;right:14px;right:calc(18px/2 + 10px*0.7 - 4px/2);right:calc(var(--plyr-control-icon-size,18px)/2 + var(--plyr-control-spacing,10px)*0.7 - var(--plyr-menu-arrow-size,4px)/2);top:100%;width:0}.plyr__menu__container [role=menu]{padding:7px;padding:calc(10px*0.7);padding:calc(var(--plyr-control-spacing,10px)*0.7)}.plyr__menu__container [role=menuitem],.plyr__menu__container [role=menuitemradio]{margin-top:2px}.plyr__menu__container [role=menuitem]:first-child,.plyr__menu__container [role=menuitemradio]:first-child{margin-top:0}.plyr__menu__container .plyr__control{align-items:center;color:#4a5464;color:var(--plyr-menu-color,#4a5464);display:flex;font-size:13px;font-size:var(--plyr-font-size-menu,var(--plyr-font-size-small,13px));padding:4.66667px 10.5px;padding:calc(10px*0.7/1.5) calc(10px*0.7*1.5);padding:calc(var(--plyr-control-spacing,10px)*0.7/1.5) calc(var(--plyr-control-spacing,10px)*0.7*1.5);-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;width:100%}.plyr__menu__container .plyr__control>span{align-items:inherit;display:flex;width:100%}.plyr__menu__container .plyr__control:after{border:4px solid transparent;border:var(--plyr-menu-item-arrow-size,4px) solid transparent;content:"";position:absolute;top:50%;transform:translateY(-50%)}.plyr__menu__container .plyr__control--forward{padding-right:28px;padding-right:calc(10px*0.7*4);padding-right:calc(var(--plyr-control-spacing,10px)*0.7*4)}.plyr__menu__container .plyr__control--forward:after{border-left-color:#728197;border-left-color:var(--plyr-menu-arrow-color,#728197);right:6.5px;right:calc(10px*0.7*1.5 - 4px);right:calc(var(--plyr-control-spacing,10px)*0.7*1.5 - var(--plyr-menu-item-arrow-size,4px))}.plyr__menu__container .plyr__control--forward.plyr__tab-focus:after,.plyr__menu__container .plyr__control--forward:hover:after{border-left-color:currentColor}.plyr__menu__container .plyr__control--back{font-weight:400;font-weight:var(--plyr-font-weight-regular,400);margin:7px;margin:calc(10px*0.7);margin:calc(var(--plyr-control-spacing,10px)*0.7);margin-bottom:3.5px;margin-bottom:calc(10px*0.7/2);margin-bottom:calc(var(--plyr-control-spacing,10px)*0.7/2);padding-left:28px;padding-left:calc(10px*0.7*4);padding-left:calc(var(--plyr-control-spacing,10px)*0.7*4);position:relative;width:calc(100% - 14px);width:calc(100% - 10px*0.7*2);width:calc(100% - var(--plyr-control-spacing,10px)*0.7*2)}.plyr__menu__container .plyr__control--back:after{border-right-color:#728197;border-right-color:var(--plyr-menu-arrow-color,#728197);left:6.5px;left:calc(10px*0.7*1.5 - 4px);left:calc(var(--plyr-control-spacing,10px)*0.7*1.5 - var(--plyr-menu-item-arrow-size,4px))}.plyr__menu__container .plyr__control--back:before{background:#dcdfe5;background:var(--plyr-menu-back-border-color,#dcdfe5);box-shadow:0 1px 0 #fff;box-shadow:0 1px 0 var(--plyr-menu-back-border-shadow-color,#fff);content:"";height:1px;left:0;margin-top:3.5px;margin-top:calc(10px*0.7/2);margin-top:calc(var(--plyr-control-spacing,10px)*0.7/2);overflow:hidden;position:absolute;right:0;top:100%}.plyr__menu__container .plyr__control--back.plyr__tab-focus:after,.plyr__menu__container .plyr__control--back:hover:after{border-right-color:currentColor}.plyr__menu__container .plyr__control[role=menuitemradio]{padding-left:7px;padding-left:calc(10px*0.7);padding-left:calc(var(--plyr-control-spacing,10px)*0.7)}.plyr__menu__container .plyr__control[role=menuitemradio]:after,.plyr__menu__container .plyr__control[role=menuitemradio]:before{border-radius:100%}.plyr__menu__container .plyr__control[role=menuitemradio]:before{background:rgba(0,0,0,.1);content:"";display:block;flex-shrink:0;height:16px;margin-right:10px;margin-right:var(--plyr-control-spacing,10px);transition:all .3s ease;width:16px}.plyr__menu__container .plyr__control[role=menuitemradio]:after{background:#fff;border:0;height:6px;left:12px;opacity:0;top:50%;transform:translateY(-50%) scale(0);transition:transform .3s ease,opacity .3s ease;width:6px}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:before{background:#00b3ff;background:var(--plyr-control-toggle-checked-background,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)))}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:after{opacity:1;transform:translateY(-50%) scale(1)}.plyr__menu__container .plyr__control[role=menuitemradio].plyr__tab-focus:before,.plyr__menu__container .plyr__control[role=menuitemradio]:hover:before{background:rgba(35,40,47,.1)}.plyr__menu__container .plyr__menu__value{align-items:center;display:flex;margin-left:auto;margin-right:calc(-7px - -2);margin-right:calc(10px*0.7*-1 - -2);margin-right:calc(var(--plyr-control-spacing,10px)*0.7*-1 - -2);overflow:hidden;padding-left:24.5px;padding-left:calc(10px*0.7*3.5);padding-left:calc(var(--plyr-control-spacing,10px)*0.7*3.5);pointer-events:none}.plyr--full-ui input[type=range]{-webkit-appearance:none;background:0 0;border:0;border-radius:26px;border-radius:calc(13px*2);border-radius:calc(var(--plyr-range-thumb-height,13px)*2);color:#00b3ff;color:var(--plyr-range-fill-background,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)));display:block;height:19px;height:calc(3px*2 + 13px);height:calc(var(--plyr-range-thumb-active-shadow-width,3px)*2 + var(--plyr-range-thumb-height,13px));margin:0;padding:0;transition:box-shadow .3s ease;width:100%}.plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background:0 0;border:0;border-radius:2.5px;border-radius:calc(5px/2);border-radius:calc(var(--plyr-range-track-height,5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-webkit-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-webkit-user-select:none;user-select:none;background-image:linear-gradient(90deg,currentColor 0,transparent 0);background-image:linear-gradient(90deg,currentColor var(--value,0),transparent var(--value,0))}.plyr--full-ui input[type=range]::-webkit-slider-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2));height:13px;height:var(--plyr-range-thumb-height,13px);position:relative;-webkit-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px);-webkit-appearance:none;margin-top:-4px;margin-top:calc(13px/2*-1 - 5px/2*-1);margin-top:calc(var(--plyr-range-thumb-height,13px)/2*-1 - var(--plyr-range-track-height,5px)/2*-1)}.plyr--full-ui input[type=range]::-moz-range-track{background:0 0;border:0;border-radius:2.5px;border-radius:calc(5px/2);border-radius:calc(var(--plyr-range-track-height,5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-moz-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-moz-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-moz-range-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2));height:13px;height:var(--plyr-range-thumb-height,13px);position:relative;-moz-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-moz-range-progress{background:currentColor;border-radius:2.5px;border-radius:calc(5px/2);border-radius:calc(var(--plyr-range-track-height,5px)/2);height:5px;height:var(--plyr-range-track-height,5px)}.plyr--full-ui input[type=range]::-ms-track{color:transparent}.plyr--full-ui input[type=range]::-ms-fill-upper,.plyr--full-ui input[type=range]::-ms-track{background:0 0;border:0;border-radius:2.5px;border-radius:calc(5px/2);border-radius:calc(var(--plyr-range-track-height,5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-ms-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-ms-fill-lower{background:0 0;border:0;border-radius:2.5px;border-radius:calc(5px/2);border-radius:calc(var(--plyr-range-track-height,5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-ms-user-select:none;user-select:none;background:currentColor}.plyr--full-ui input[type=range]::-ms-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2));height:13px;height:var(--plyr-range-thumb-height,13px);position:relative;-ms-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px);margin-top:0}.plyr--full-ui input[type=range]::-ms-tooltip{display:none}.plyr--full-ui input[type=range]:focus{outline:0}.plyr--full-ui input[type=range]::-moz-focus-outer{border:0}.plyr--full-ui input[type=range].plyr__tab-focus::-webkit-slider-runnable-track{outline-color:#00b3ff;outline-color:var(--plyr-tab-focus-color,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)));outline-offset:2px;outline-style:dotted;outline-width:3px}.plyr--full-ui input[type=range].plyr__tab-focus::-moz-range-track{outline-color:#00b3ff;outline-color:var(--plyr-tab-focus-color,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)));outline-offset:2px;outline-style:dotted;outline-width:3px}.plyr--full-ui input[type=range].plyr__tab-focus::-ms-track{outline-color:#00b3ff;outline-color:var(--plyr-tab-focus-color,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)));outline-offset:2px;outline-style:dotted;outline-width:3px}.plyr__poster{background-color:#000;background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity .2s ease;width:100%;z-index:1}.plyr--stopped.plyr__poster-enabled .plyr__poster{opacity:1}.plyr__time{font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px))}.plyr__time+.plyr__time:before{content:"\\2044";margin-right:10px;margin-right:var(--plyr-control-spacing,10px)}@media (max-width:calc(768px - 1)){.plyr__time+.plyr__time{display:none}}.plyr__tooltip{background:hsla(0,0%,100%,.9);background:var(--plyr-tooltip-background,hsla(0,0%,100%,.9));border-radius:3px;border-radius:var(--plyr-tooltip-radius,3px);bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:var(--plyr-tooltip-shadow,0 1px 2px rgba(0,0,0,.15));color:#4a5464;color:var(--plyr-tooltip-color,#4a5464);font-size:13px;font-size:var(--plyr-font-size-small,13px);font-weight:400;font-weight:var(--plyr-font-weight-regular,400);left:50%;line-height:1.3;margin-bottom:10px;margin-bottom:calc(10px/2*2);margin-bottom:calc(var(--plyr-control-spacing,10px)/2*2);opacity:0;padding:5px 7.5px;padding:calc(10px/2) calc(10px/2*1.5);padding:calc(var(--plyr-control-spacing,10px)/2) calc(var(--plyr-control-spacing,10px)/2*1.5);pointer-events:none;position:absolute;transform:translate(-50%,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s ease .1s,opacity .2s ease .1s;white-space:nowrap;z-index:2}.plyr__tooltip:before{border-left:4px solid transparent;border-left:var(--plyr-tooltip-arrow-size,4px) solid transparent;border-right:4px solid transparent;border-right:var(--plyr-tooltip-arrow-size,4px) solid transparent;border-top:4px solid hsla(0,0%,100%,.9);border-top:var(--plyr-tooltip-arrow-size,4px) solid var(--plyr-tooltip-background,hsla(0,0%,100%,.9));bottom:-4px;bottom:calc(4px*-1);bottom:calc(var(--plyr-tooltip-arrow-size,4px)*-1);content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr .plyr__control.plyr__tab-focus .plyr__tooltip,.plyr .plyr__control:hover .plyr__tooltip,.plyr__tooltip--visible{opacity:1;transform:translate(-50%) scale(1)}.plyr .plyr__control:hover .plyr__tooltip{z-index:3}.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip,.plyr__controls>.plyr__control:first-child .plyr__tooltip{left:0;transform:translateY(10px) scale(.8);transform-origin:0 100%}.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip:before,.plyr__controls>.plyr__control:first-child .plyr__tooltip:before{left:16px;left:calc(18px/2 + 10px*0.7);left:calc(var(--plyr-control-icon-size,18px)/2 + var(--plyr-control-spacing,10px)*0.7)}.plyr__controls>.plyr__control:last-child .plyr__tooltip{left:auto;right:0;transform:translateY(10px) scale(.8);transform-origin:100% 100%}.plyr__controls>.plyr__control:last-child .plyr__tooltip:before{left:auto;right:16px;right:calc(18px/2 + 10px*0.7);right:calc(var(--plyr-control-icon-size,18px)/2 + var(--plyr-control-spacing,10px)*0.7);transform:translateX(50%)}.plyr__controls>.plyr__control:first-child+.plyr__control.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:last-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:last-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:last-child:hover .plyr__tooltip{transform:translate(0) scale(1)}.plyr__progress{left:6.5px;left:calc(13px*0.5);left:calc(var(--plyr-range-thumb-height,13px)*0.5);margin-right:13px;margin-right:var(--plyr-range-thumb-height,13px);position:relative}.plyr__progress__buffer,.plyr__progress input[type=range]{margin-left:-6.5px;margin-left:calc(13px*-0.5);margin-left:calc(var(--plyr-range-thumb-height,13px)*-0.5);margin-right:-6.5px;margin-right:calc(13px*-0.5);margin-right:calc(var(--plyr-range-thumb-height,13px)*-0.5);width:calc(100% + 13px);width:calc(100% + var(--plyr-range-thumb-height,13px))}.plyr__progress input[type=range]{position:relative;z-index:2}.plyr__progress .plyr__tooltip{font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px));left:0}.plyr__progress__buffer{-webkit-appearance:none;background:0 0;border:0;border-radius:100px;height:5px;height:var(--plyr-range-track-height,5px);left:0;margin-top:-2.5px;margin-top:calc(5px/2*-1);margin-top:calc(var(--plyr-range-track-height,5px)/2*-1);padding:0;position:absolute;top:50%}.plyr__progress__buffer::-webkit-progress-bar{background:0 0}.plyr__progress__buffer::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:5px;min-width:var(--plyr-range-track-height,5px);-webkit-transition:width .2s ease;transition:width .2s ease}.plyr__progress__buffer::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:5px;min-width:var(--plyr-range-track-height,5px);-moz-transition:width .2s ease;transition:width .2s ease}.plyr__progress__buffer::-ms-fill{border-radius:100px;-ms-transition:width .2s ease;transition:width .2s ease}.plyr--loading .plyr__progress__buffer{-webkit-animation:plyr-progress 1s linear infinite;animation:plyr-progress 1s linear infinite;background-image:linear-gradient(-45deg,rgba(35,40,47,.6) 25%,transparent 0,transparent 50%,rgba(35,40,47,.6) 0,rgba(35,40,47,.6) 75%,transparent 0,transparent);background-image:linear-gradient(-45deg,var(--plyr-progress-loading-background,rgba(35,40,47,.6)) 25%,transparent 0,transparent 50%,var(--plyr-progress-loading-background,rgba(35,40,47,.6)) 0,var(--plyr-progress-loading-background,rgba(35,40,47,.6)) 75%,transparent 0,transparent);background-repeat:repeat-x;background-size:25px 25px;background-size:var(--plyr-progress-loading-size,25px) var(--plyr-progress-loading-size,25px);color:transparent}.plyr--video.plyr--loading .plyr__progress__buffer{background-color:hsla(0,0%,100%,.25);background-color:var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25))}.plyr--audio.plyr--loading .plyr__progress__buffer{background-color:rgba(193,200,209,.6);background-color:var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6))}.plyr__volume{align-items:center;display:flex;max-width:110px;min-width:80px;position:relative;width:20%}.plyr__volume input[type=range]{margin-left:5px;margin-left:calc(10px/2);margin-left:calc(var(--plyr-control-spacing,10px)/2);margin-right:5px;margin-right:calc(10px/2);margin-right:calc(var(--plyr-control-spacing,10px)/2);position:relative;z-index:2}.plyr--is-ios .plyr__volume{min-width:0;width:auto}.plyr--audio{display:block}.plyr--audio .plyr__controls{background:#fff;background:var(--plyr-audio-controls-background,#fff);border-radius:inherit;color:#4a5464;color:var(--plyr-audio-control-color,#4a5464);padding:10px;padding:var(--plyr-control-spacing,10px)}.plyr--audio .plyr__control.plyr__tab-focus,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true]{background:#00b3ff;background:var(--plyr-audio-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)));color:#fff;color:var(--plyr-audio-control-color-hover,#fff)}.plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track{background-color:rgba(193,200,209,.6);background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6)))}.plyr--full-ui.plyr--audio input[type=range]::-moz-range-track{background-color:rgba(193,200,209,.6);background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6)))}.plyr--full-ui.plyr--audio input[type=range]::-ms-track{background-color:rgba(193,200,209,.6);background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6)))}.plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px rgba(35,40,47,.1);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,rgba(35,40,47,.1))}.plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px rgba(35,40,47,.1);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,rgba(35,40,47,.1))}.plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px rgba(35,40,47,.1);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,rgba(35,40,47,.1))}.plyr--audio .plyr__progress__buffer{color:rgba(193,200,209,.6);color:var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6))}.plyr--video{background:#000;overflow:hidden}.plyr--video.plyr--menu-open{overflow:visible}.plyr__video-wrapper{background:#000;height:100%;margin:auto;overflow:hidden;position:relative;width:100%}.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0;padding-bottom:56.25%}.plyr__video-embed iframe,.plyr__video-wrapper--fixed-ratio video{border:0;left:0;position:absolute;top:0}.plyr--full-ui .plyr__video-embed>.plyr__video-embed__container{padding-bottom:240%;position:relative;transform:translateY(-38.28125%)}.plyr--video .plyr__controls{background:linear-gradient(transparent,rgba(0,0,0,.75));background:var(--plyr-video-controls-background,linear-gradient(transparent,rgba(0,0,0,.75)));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0;color:#fff;color:var(--plyr-video-control-color,#fff);left:0;padding:5px;padding:calc(10px/2);padding:calc(var(--plyr-control-spacing,10px)/2);padding-top:20px;padding-top:calc(10px*2);padding-top:calc(var(--plyr-control-spacing,10px)*2);position:absolute;right:0;transition:opacity .4s ease-in-out,transform .4s ease-in-out;z-index:3}@media (min-width:480px){.plyr--video .plyr__controls{padding:10px;padding:var(--plyr-control-spacing,10px);padding-top:35px;padding-top:calc(10px*3.5);padding-top:calc(var(--plyr-control-spacing,10px)*3.5)}}.plyr--video.plyr--hide-controls .plyr__controls{opacity:0;pointer-events:none;transform:translateY(100%)}.plyr--video .plyr__control.plyr__tab-focus,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{background:#00b3ff;background:var(--plyr-video-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)));color:#fff;color:var(--plyr-video-control-color-hover,#fff)}.plyr__control--overlaid{background:#00b3ff;background:var(--plyr-video-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b3ff)));border:0;border-radius:100%;color:#fff;color:var(--plyr-video-control-color,#fff);display:none;left:50%;opacity:.9;padding:15px;padding:calc(10px*1.5);padding:calc(var(--plyr-control-spacing,10px)*1.5);position:absolute;top:50%;transform:translate(-50%,-50%);transition:.3s;z-index:2}.plyr__control--overlaid svg{left:2px;position:relative}.plyr__control--overlaid:focus,.plyr__control--overlaid:hover{opacity:1}.plyr--playing .plyr__control--overlaid{opacity:0;visibility:hidden}.plyr--full-ui.plyr--video .plyr__control--overlaid{display:block}.plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{background-color:hsla(0,0%,100%,.25);background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25)))}.plyr--full-ui.plyr--video input[type=range]::-moz-range-track{background-color:hsla(0,0%,100%,.25);background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25)))}.plyr--full-ui.plyr--video input[type=range]::-ms-track{background-color:hsla(0,0%,100%,.25);background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25)))}.plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px hsla(0,0%,100%,.5);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,hsla(0,0%,100%,.5))}.plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px hsla(0,0%,100%,.5);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,hsla(0,0%,100%,.5))}.plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px hsla(0,0%,100%,.5);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,hsla(0,0%,100%,.5))}.plyr--video .plyr__progress__buffer{color:hsla(0,0%,100%,.25);color:var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25))}.plyr:-webkit-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-ms-fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-webkit-full-screen video{height:100%}.plyr:-ms-fullscreen video{height:100%}.plyr:fullscreen video{height:100%}.plyr:-webkit-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-ms-fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-webkit-full-screen.plyr--hide-controls{cursor:none}.plyr:-ms-fullscreen.plyr--hide-controls{cursor:none}.plyr:fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-webkit-full-screen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}.plyr:-ms-fullscreen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}.plyr:fullscreen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr:-webkit-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-webkit-full-screen video{height:100%}.plyr:-webkit-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-webkit-full-screen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-webkit-full-screen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr:-moz-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-moz-full-screen video{height:100%}.plyr:-moz-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-moz-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-moz-full-screen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-moz-full-screen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr:-ms-fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-ms-fullscreen video{height:100%}.plyr:-ms-fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-ms-fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-ms-fullscreen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr--fullscreen-fallback{background:#000;border-radius:0!important;height:100%;margin:0;width:100%;bottom:0;display:block;left:0;position:fixed;right:0;top:0;z-index:10000000}.plyr--fullscreen-fallback video{height:100%}.plyr--fullscreen-fallback .plyr__video-wrapper{height:100%;position:static}.plyr--fullscreen-fallback.plyr--vimeo .plyr__video-wrapper{height:0;position:relative}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen{display:block}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr--fullscreen-fallback.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr--fullscreen-fallback .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr__ads{border-radius:inherit;bottom:0;cursor:pointer;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:-1}.plyr__ads>div,.plyr__ads>div iframe{height:100%;position:absolute;width:100%}.plyr__ads:after{background:#23282f;border-radius:2px;bottom:10px;bottom:var(--plyr-control-spacing,10px);color:#fff;content:attr(data-badge-text);font-size:11px;padding:2px 6px;pointer-events:none;position:absolute;right:10px;right:var(--plyr-control-spacing,10px);z-index:3}.plyr__ads:after:empty{display:none}.plyr__cues{background:currentColor;display:block;height:5px;height:var(--plyr-range-track-height,5px);left:0;margin:-var(--plyr-range-track-height,5px)/2 0 0;opacity:.8;position:absolute;top:50%;width:3px;z-index:3}.plyr__preview-thumb{background-color:hsla(0,0%,100%,.9);background-color:var(--plyr-tooltip-background,hsla(0,0%,100%,.9));border-radius:3px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:var(--plyr-tooltip-shadow,0 1px 2px rgba(0,0,0,.15));margin-bottom:10px;margin-bottom:calc(10px/2*2);margin-bottom:calc(var(--plyr-control-spacing,10px)/2*2);opacity:0;padding:3px;padding:var(--plyr-tooltip-radius,3px);pointer-events:none;position:absolute;transform:translateY(10px) scale(.8);transform-origin:50% 100%;transition:transform .2s ease .1s,opacity .2s ease .1s;z-index:2}.plyr__preview-thumb--is-shown{opacity:1;transform:translate(0) scale(1)}.plyr__preview-thumb:before{border-left:4px solid transparent;border-left:var(--plyr-tooltip-arrow-size,4px) solid transparent;border-right:4px solid transparent;border-right:var(--plyr-tooltip-arrow-size,4px) solid transparent;border-top:4px solid hsla(0,0%,100%,.9);border-top:var(--plyr-tooltip-arrow-size,4px) solid var(--plyr-tooltip-background,hsla(0,0%,100%,.9));bottom:-4px;bottom:calc(4px*-1);bottom:calc(var(--plyr-tooltip-arrow-size,4px)*-1);content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr__preview-thumb__image-container{background:#c1c8d1;border-radius:2px;border-radius:calc(3px - 1px);border-radius:calc(var(--plyr-tooltip-radius,3px) - 1px);overflow:hidden;position:relative;z-index:0}.plyr__preview-thumb__image-container img{height:100%;left:0;max-height:none;max-width:none;position:absolute;top:0;width:100%}.plyr__preview-thumb__time-container{bottom:6px;left:0;position:absolute;right:0;white-space:nowrap;z-index:3}.plyr__preview-thumb__time-container span{background-color:rgba(0,0,0,.55);border-radius:2px;border-radius:calc(3px - 1px);border-radius:calc(var(--plyr-tooltip-radius,3px) - 1px);color:#fff;font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px));padding:3px 6px}.plyr__preview-scrubbing{bottom:0;filter:blur(1px);height:100%;left:0;margin:auto;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s ease;width:100%;z-index:1}.plyr__preview-scrubbing--is-shown{opacity:1}.plyr__preview-scrubbing img{height:100%;left:0;max-height:none;max-width:none;-o-object-fit:contain;object-fit:contain;position:absolute;top:0;width:100%}.plyr--no-transition{transition:none!important}.plyr__sr-only{clip:rect(1px,1px,1px,1px);overflow:hidden;border:0!important;height:1px!important;padding:0!important;position:absolute!important;width:1px!important}.plyr [hidden]{display:none!important}', ""]), r.locals = {}, e.exports = r
        },
        252: function(e, t, n) {
            "use strict";
            n(179)
        },
        253: function(e, t, n) {
            var r = n(40)((function(i) {
                return i[1]
            }));
            r.push([e.i, "a[data-v-c86c3bb4]{cursor:pointer}", ""]), r.locals = {}, e.exports = r
        },
        254: function(e, t, n) {
            var content = n(255);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(41).default)("5d31e469", content, !0, {
                sourceMap: !1
            })
        },
        255: function(e, t, n) {
            var r = n(40)((function(i) {
                return i[1]
            }));
            r.push([e.i, '.vue-tabs.stacked{display:flex}.vue-tabs .tabs__link{text-decoration:none;color:grey}.vue-tabs .nav{margin-bottom:0;margin-top:0;padding-left:0;list-style:none}.vue-tabs .nav:after,.vue-tabs .nav:before{content:" ";display:table}.vue-tabs .nav:after{clear:both}.vue-tabs .nav>li,.vue-tabs .nav>li>a{position:relative;display:block}.vue-tabs .nav>li>a{padding:10px 15px}.vue-tabs .nav>li>a:focus,.vue-tabs .nav>li>a:hover{text-decoration:none;background-color:#eee}.vue-tabs .nav>li span.title{display:flex;justify-content:center}.vue-tabs .nav>li.disabled>a{color:#777}.vue-tabs .nav>li.disabled>a:focus,.vue-tabs .nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent;border-color:transparent}.vue-tabs .nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.vue-tabs .nav>li>a>img{max-width:none}.vue-tabs .nav-tabs{border-bottom:1px solid #ddd}.vue-tabs .nav-tabs>li{float:left;margin-bottom:-1px}.vue-tabs .nav-tabs>li>a{margin-right:2px;line-height:1.42857;border:1px solid transparent;border-radius:4px 4px 0 0}.vue-tabs .nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.vue-tabs .nav-tabs>li.active>a,.vue-tabs .nav-tabs>li.active>a:focus,.vue-tabs .nav-tabs>li.active>a:hover{color:#555;background-color:#fff;border:1px solid;border-color:#ddd #ddd transparent;cursor:default}.vue-tabs .nav-pills>li{float:left}.vue-tabs .nav-pills>li>a{border-radius:4px}.vue-tabs .nav-pills>li+li{margin-left:2px}.vue-tabs .nav-pills>li.active>a,.vue-tabs .nav-pills>li.active>a:focus,.vue-tabs .nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.vue-tabs .nav-stacked>li{float:none}.vue-tabs .nav-stacked>li+li{margin-top:2px;margin-left:0}.vue-tabs .nav-justified,.vue-tabs .nav-tabs.nav-justified{width:100%}.vue-tabs .nav-justified>li,.vue-tabs .nav-tabs.nav-justified>li{float:none}.vue-tabs .nav-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.vue-tabs .nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.vue-tabs .nav-justified>li,.vue-tabs .nav-tabs.nav-justified>li{display:table-cell;width:1%}.vue-tabs .nav-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{margin-bottom:0}}.vue-tabs .nav-tabs-justified,.vue-tabs .nav-tabs.nav-justified{border-bottom:0}.vue-tabs .nav-tabs-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.vue-tabs .nav-tabs-justified>.active>a,.vue-tabs .nav-tabs-justified>.active>a:focus,.vue-tabs .nav-tabs-justified>.active>a:hover,.vue-tabs .nav-tabs.nav-justified>.active>a,.vue-tabs .nav-tabs.nav-justified>.active>a:focus,.vue-tabs .nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.vue-tabs .nav-tabs-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.vue-tabs .nav-tabs-justified>.active>a,.vue-tabs .nav-tabs-justified>.active>a:focus,.vue-tabs .nav-tabs-justified>.active>a:hover,.vue-tabs .nav-tabs.nav-justified>.active>a,.vue-tabs .nav-tabs.nav-justified>.active>a:focus,.vue-tabs .nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.vue-tabs .tab-content>.tab-pane{display:none}.vue-tabs .tab-content>.active{display:block}.vue-tabs section[aria-hidden=true]{display:none}', ""]), r.locals = {}, e.exports = r
        },
        256: function(e, t, n) {
            "use strict";

            function r(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function o(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(n) {
                    void 0 === e[n] ? e[n] = t[n] : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0 && o(e[n], t[n])
                }))
            }
            n.r(t);
            var l = "undefined" != typeof document ? document : {},
                c = {
                    body: {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    activeElement: {
                        blur: function() {},
                        nodeName: ""
                    },
                    querySelector: function() {
                        return null
                    },
                    querySelectorAll: function() {
                        return []
                    },
                    getElementById: function() {
                        return null
                    },
                    createEvent: function() {
                        return {
                            initEvent: function() {}
                        }
                    },
                    createElement: function() {
                        return {
                            children: [],
                            childNodes: [],
                            style: {},
                            setAttribute: function() {},
                            getElementsByTagName: function() {
                                return []
                            }
                        }
                    },
                    createElementNS: function() {
                        return {}
                    },
                    importNode: function() {
                        return null
                    },
                    location: {
                        hash: "",
                        host: "",
                        hostname: "",
                        href: "",
                        origin: "",
                        pathname: "",
                        protocol: "",
                        search: ""
                    }
                };
            o(l, c);
            var d = "undefined" != typeof window ? window : {};
            o(d, {
                document: c,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                }
            });
            class h {
                constructor(e) {
                    const t = this;
                    for (let i = 0; i < e.length; i += 1) t[i] = e[i];
                    return t.length = e.length, this
                }
            }

            function f(e, t) {
                const n = [];
                let i = 0;
                if (e && !t && e instanceof h) return e;
                if (e)
                    if ("string" == typeof e) {
                        let r, o;
                        const html = e.trim();
                        if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                            let e = "div";
                            for (0 === html.indexOf("<li") && (e = "ul"), 0 === html.indexOf("<tr") && (e = "tbody"), 0 !== html.indexOf("<td") && 0 !== html.indexOf("<th") || (e = "tr"), 0 === html.indexOf("<tbody") && (e = "table"), 0 === html.indexOf("<option") && (e = "select"), o = l.createElement(e), o.innerHTML = html, i = 0; i < o.childNodes.length; i += 1) n.push(o.childNodes[i])
                        } else
                            for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || l).querySelectorAll(e.trim()) : [l.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
                    } else if (e.nodeType || e === d || e === l) n.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (i = 0; i < e.length; i += 1) n.push(e[i]);
                return new h(n)
            }

            function m(e) {
                const t = [];
                for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            f.fn = h.prototype, f.Class = h, f.Dom7 = h;
            "resize scroll".split(" ");
            const v = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.add(t[i]);
                    return this
                },
                removeClass: function(e) {
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.remove(t[i]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.toggle(t[i]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(e, t);
                        else
                            for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    let n;
                    if (void 0 !== t) {
                        for (let i = 0; i < this.length; i += 1) n = this[i], n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                        return this
                    }
                    if (n = this[0], n) {
                        if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                        const t = n.getAttribute(`data-${e}`);
                        return t || void 0
                    }
                },
                transform: function(e) {
                    for (let i = 0; i < this.length; i += 1) {
                        const t = this[i].style;
                        t.webkitTransform = e, t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e = `${e}ms`);
                    for (let i = 0; i < this.length; i += 1) {
                        const t = this[i].style;
                        t.webkitTransitionDuration = e, t.transitionDuration = e
                    }
                    return this
                },
                on: function(...e) {
                    let [t, n, r, o] = e;

                    function l(e) {
                        const t = e.target;
                        if (!t) return;
                        const o = e.target.dom7EventData || [];
                        if (o.indexOf(e) < 0 && o.unshift(e), f(t).is(n)) r.apply(t, o);
                        else {
                            const e = f(t).parents();
                            for (let t = 0; t < e.length; t += 1) f(e[t]).is(n) && r.apply(e[t], o)
                        }
                    }

                    function c(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
                    }
                    "function" == typeof e[1] && ([t, r, o] = e, n = void 0), o || (o = !1);
                    const d = t.split(" ");
                    let h;
                    for (let i = 0; i < this.length; i += 1) {
                        const e = this[i];
                        if (n)
                            for (h = 0; h < d.length; h += 1) {
                                const t = d[h];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: r,
                                    proxyListener: l
                                }), e.addEventListener(t, l, o)
                            } else
                                for (h = 0; h < d.length; h += 1) {
                                    const t = d[h];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: r,
                                        proxyListener: c
                                    }), e.addEventListener(t, c, o)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, n, r, o] = e;
                    "function" == typeof e[1] && ([t, r, o] = e, n = void 0), o || (o = !1);
                    const l = t.split(" ");
                    for (let i = 0; i < l.length; i += 1) {
                        const e = l[i];
                        for (let t = 0; t < this.length; t += 1) {
                            const l = this[t];
                            let c;
                            if (!n && l.dom7Listeners ? c = l.dom7Listeners[e] : n && l.dom7LiveListeners && (c = l.dom7LiveListeners[e]), c && c.length)
                                for (let t = c.length - 1; t >= 0; t -= 1) {
                                    const n = c[t];
                                    r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (l.removeEventListener(e, n.proxyListener, o), c.splice(t, 1)) : r || (l.removeEventListener(e, n.proxyListener, o), c.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = e[0].split(" "),
                        n = e[1];
                    for (let i = 0; i < t.length; i += 1) {
                        const r = t[i];
                        for (let t = 0; t < this.length; t += 1) {
                            const o = this[t];
                            let c;
                            try {
                                c = new d.CustomEvent(r, {
                                    detail: n,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                c = l.createEvent("Event"), c.initEvent(r, !0, !0), c.detail = n
                            }
                            o.dom7EventData = e.filter(((data, e) => e > 0)), o.dispatchEvent(c), o.dom7EventData = [], delete o.dom7EventData
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = ["webkitTransitionEnd", "transitionend"],
                        n = this;
                    let i;

                    function r(o) {
                        if (o.target === this)
                            for (e.call(this, o), i = 0; i < t.length; i += 1) n.off(t[i], r)
                    }
                    if (e)
                        for (i = 0; i < t.length; i += 1) n.on(t[i], r);
                    return this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = this[0],
                            t = e.getBoundingClientRect(),
                            body = l.body,
                            n = e.clientTop || body.clientTop || 0,
                            r = e.clientLeft || body.clientLeft || 0,
                            o = e === d ? d.scrollY : e.scrollTop,
                            c = e === d ? d.scrollX : e.scrollLeft;
                        return {
                            top: t.top + o - n,
                            left: t.left + c - r
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (let t in e) this[i].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return d.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    if (!e) return this;
                    for (let i = 0; i < this.length; i += 1)
                        if (!1 === e.call(this[i], i, this[i])) return this;
                    return this
                },
                html: function(html) {
                    if (void 0 === html) return this[0] ? this[0].innerHTML : void 0;
                    for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
                    return this
                },
                text: function(text) {
                    if (void 0 === text) return this[0] ? this[0].textContent.trim() : null;
                    for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
                    return this
                },
                is: function(e) {
                    const t = this[0];
                    let n, i;
                    if (!t || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (t.matches) return t.matches(e);
                        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                        if (t.msMatchesSelector) return t.msMatchesSelector(e);
                        for (n = f(e), i = 0; i < n.length; i += 1)
                            if (n[i] === t) return !0;
                        return !1
                    }
                    if (e === l) return t === l;
                    if (e === d) return t === d;
                    if (e.nodeType || e instanceof h) {
                        for (n = e.nodeType ? [e] : e, i = 0; i < n.length; i += 1)
                            if (n[i] === t) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let i, e = this[0];
                    if (e) {
                        for (i = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (i += 1);
                        return i
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    const t = this.length;
                    let n;
                    return e > t - 1 ? new h([]) : e < 0 ? (n = t + e, new h(n < 0 ? [] : [this[n]])) : new h([this[e]])
                },
                append: function(...e) {
                    let t;
                    for (let n = 0; n < e.length; n += 1) {
                        t = e[n];
                        for (let i = 0; i < this.length; i += 1)
                            if ("string" == typeof t) {
                                const e = l.createElement("div");
                                for (e.innerHTML = t; e.firstChild;) this[i].appendChild(e.firstChild)
                            } else if (t instanceof h)
                            for (let e = 0; e < t.length; e += 1) this[i].appendChild(t[e]);
                        else this[i].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    let i, t;
                    for (i = 0; i < this.length; i += 1)
                        if ("string" == typeof e) {
                            const n = l.createElement("div");
                            for (n.innerHTML = e, t = n.childNodes.length - 1; t >= 0; t -= 1) this[i].insertBefore(n.childNodes[t], this[i].childNodes[0])
                        } else if (e instanceof h)
                        for (t = 0; t < e.length; t += 1) this[i].insertBefore(e[t], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e) ? new h([this[0].nextElementSibling]) : new h([]) : this[0].nextElementSibling ? new h([this[0].nextElementSibling]) : new h([]) : new h([])
                },
                nextAll: function(e) {
                    const t = [];
                    let n = this[0];
                    if (!n) return new h([]);
                    for (; n.nextElementSibling;) {
                        const r = n.nextElementSibling;
                        e ? f(r).is(e) && t.push(r) : t.push(r), n = r
                    }
                    return new h(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && f(t.previousElementSibling).is(e) ? new h([t.previousElementSibling]) : new h([]) : t.previousElementSibling ? new h([t.previousElementSibling]) : new h([])
                    }
                    return new h([])
                },
                prevAll: function(e) {
                    const t = [];
                    let n = this[0];
                    if (!n) return new h([]);
                    for (; n.previousElementSibling;) {
                        const r = n.previousElementSibling;
                        e ? f(r).is(e) && t.push(r) : t.push(r), n = r
                    }
                    return new h(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? f(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return f(m(t))
                },
                parents: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let n = this[i].parentNode;
                        for (; n;) e ? f(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
                    }
                    return f(m(t))
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? new h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i].querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) t.push(n[e])
                    }
                    return new h(t)
                },
                children: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i].childNodes;
                        for (let r = 0; r < n.length; r += 1) e ? 1 === n[r].nodeType && f(n[r]).is(e) && t.push(n[r]) : 1 === n[r].nodeType && t.push(n[r])
                    }
                    return new h(m(t))
                },
                filter: function(e) {
                    const t = [],
                        n = this;
                    for (let i = 0; i < n.length; i += 1) e.call(n[i], i, n[i]) && t.push(n[i]);
                    return new h(t)
                },
                remove: function() {
                    for (let i = 0; i < this.length; i += 1) this[i].parentNode && this[i].parentNode.removeChild(this[i]);
                    return this
                },
                add: function(...e) {
                    const t = this;
                    let i, n;
                    for (i = 0; i < e.length; i += 1) {
                        const r = f(e[i]);
                        for (n = 0; n < r.length; n += 1) t[t.length] = r[n], t.length += 1
                    }
                    return t
                },
                styles: function() {
                    return this[0] ? d.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(v).forEach((e => {
                f.fn[e] = f.fn[e] || v[e]
            }));
            const y = {
                    deleteProps(e) {
                        const object = e;
                        Object.keys(object).forEach((e => {
                            try {
                                object[e] = null
                            } catch (e) {}
                            try {
                                delete object[e]
                            } catch (e) {}
                        }))
                    },
                    nextTick: (e, t = 0) => setTimeout(e, t),
                    now: () => Date.now(),
                    getTranslate(e, t = "x") {
                        let n, r, o;
                        const l = d.getComputedStyle(e, null);
                        return d.WebKitCSSMatrix ? (r = l.transform || l.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((a => a.replace(",", "."))).join(", ")), o = new d.WebKitCSSMatrix("none" === r ? "" : r)) : (o = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), "x" === t && (r = d.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = d.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
                    },
                    parseUrlQuery(e) {
                        const t = {};
                        let i, n, param, r, o = e || d.location.href;
                        if ("string" == typeof o && o.length)
                            for (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "", n = o.split("&").filter((e => "" !== e)), r = n.length, i = 0; i < r; i += 1) param = n[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(param[0])] = void 0 === param[1] ? void 0 : decodeURIComponent(param[1]) || "";
                        return t
                    },
                    isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
                    extend(...e) {
                        const t = Object(e[0]);
                        for (let i = 1; i < e.length; i += 1) {
                            const n = e[i];
                            if (null != n) {
                                const e = Object.keys(Object(n));
                                for (let r = 0, o = e.length; r < o; r += 1) {
                                    const o = e[r],
                                        desc = Object.getOwnPropertyDescriptor(n, o);
                                    void 0 !== desc && desc.enumerable && (y.isObject(t[o]) && y.isObject(n[o]) ? y.extend(t[o], n[o]) : !y.isObject(t[o]) && y.isObject(n[o]) ? (t[o] = {}, y.extend(t[o], n[o])) : t[o] = n[o])
                                }
                            }
                        }
                        return t
                    }
                },
                w = {
                    touch: !!("ontouchstart" in d || d.DocumentTouch && l instanceof d.DocumentTouch),
                    pointerEvents: !!d.PointerEvent && "maxTouchPoints" in d.navigator && d.navigator.maxTouchPoints >= 0,
                    observer: "MutationObserver" in d || "WebkitMutationObserver" in d,
                    passiveListener: function() {
                        let e = !1;
                        try {
                            const t = Object.defineProperty({}, "passive", {
                                get() {
                                    e = !0
                                }
                            });
                            d.addEventListener("testPassiveListener", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: "ongesturestart" in d
                };
            class x {
                constructor(e = {}) {
                    const t = this;
                    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((e => {
                        t.on(e, t.params.on[e])
                    }))
                }
                on(e, t, n) {
                    const r = this;
                    if ("function" != typeof t) return r;
                    const o = n ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][o](t)
                    })), r
                }
                once(e, t, n) {
                    const r = this;
                    if ("function" != typeof t) return r;

                    function o(...n) {
                        r.off(e, o), o.f7proxy && delete o.f7proxy, t.apply(r, n)
                    }
                    return o.f7proxy = t, r.on(e, o, n)
                }
                off(e, t) {
                    const n = this;
                    return n.eventsListeners ? (e.split(" ").forEach((e => {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach(((r, o) => {
                            (r === t || r.f7proxy && r.f7proxy === t) && n.eventsListeners[e].splice(o, 1)
                        }))
                    })), n) : n
                }
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let n, data, r;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], data = e.slice(1, e.length), r = t) : (n = e[0].events, data = e[0].data, r = e[0].context || t);
                    return (Array.isArray(n) ? n : n.split(" ")).forEach((e => {
                        if (t.eventsListeners && t.eventsListeners[e]) {
                            const n = [];
                            t.eventsListeners[e].forEach((e => {
                                n.push(e)
                            })), n.forEach((e => {
                                e.apply(r, data)
                            }))
                        }
                    })), t
                }
                useModulesParams(e) {
                    const t = this;
                    t.modules && Object.keys(t.modules).forEach((n => {
                        const r = t.modules[n];
                        r.params && y.extend(e, r.params)
                    }))
                }
                useModules(e = {}) {
                    const t = this;
                    t.modules && Object.keys(t.modules).forEach((n => {
                        const r = t.modules[n],
                            o = e[n] || {};
                        r.instance && Object.keys(r.instance).forEach((e => {
                            const n = r.instance[e];
                            t[e] = "function" == typeof n ? n.bind(t) : n
                        })), r.on && t.on && Object.keys(r.on).forEach((e => {
                            t.on(e, r.on[e])
                        })), r.create && r.create.bind(t)(o)
                    }))
                }
                static set components(e) {
                    this.use && this.use(e)
                }
                static installModule(e, ...t) {
                    const n = this;
                    n.prototype.modules || (n.prototype.modules = {});
                    const r = e.name || `${Object.keys(n.prototype.modules).length}_${y.now()}`;
                    return n.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach((t => {
                        n.prototype[t] = e.proto[t]
                    })), e.static && Object.keys(e.static).forEach((t => {
                        n[t] = e.static[t]
                    })), e.install && e.install.apply(n, t), n
                }
                static use(e, ...t) {
                    const n = this;
                    return Array.isArray(e) ? (e.forEach((e => n.installModule(e))), n) : n.installModule(e, ...t)
                }
            }
            var k = {
                updateSize: function() {
                    const e = this;
                    let t, n;
                    const r = e.$el;
                    t = void 0 !== e.params.width ? e.params.width : r[0].clientWidth, n = void 0 !== e.params.height ? e.params.height : r[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left"), 10) - parseInt(r.css("padding-right"), 10), n = n - parseInt(r.css("padding-top"), 10) - parseInt(r.css("padding-bottom"), 10), y.extend(e, {
                        width: t,
                        height: n,
                        size: e.isHorizontal() ? t : n
                    }))
                },
                updateSlides: function() {
                    const e = this,
                        t = e.params,
                        {
                            $wrapperEl: n,
                            size: r,
                            rtlTranslate: o,
                            wrongRTL: l
                        } = e,
                        c = e.virtual && t.virtual.enabled,
                        h = c ? e.virtual.slides.length : e.slides.length,
                        f = n.children(`.${e.params.slideClass}`),
                        m = c ? e.virtual.slides.length : f.length;
                    let v = [];
                    const w = [],
                        x = [];

                    function k(e) {
                        return !t.cssMode || e !== f.length - 1
                    }
                    let T = t.slidesOffsetBefore;
                    "function" == typeof T && (T = t.slidesOffsetBefore.call(e));
                    let S = t.slidesOffsetAfter;
                    "function" == typeof S && (S = t.slidesOffsetAfter.call(e));
                    const _ = e.snapGrid.length,
                        C = e.snapGrid.length;
                    let E, P, $ = t.spaceBetween,
                        O = -T,
                        M = 0,
                        A = 0;
                    if (void 0 === r) return;
                    "string" == typeof $ && $.indexOf("%") >= 0 && ($ = parseFloat($.replace("%", "")) / 100 * r), e.virtualSize = -$, o ? f.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : f.css({
                        marginRight: "",
                        marginBottom: ""
                    }), t.slidesPerColumn > 1 && (E = Math.floor(m / t.slidesPerColumn) === m / e.params.slidesPerColumn ? m : Math.ceil(m / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (E = Math.max(E, t.slidesPerView * t.slidesPerColumn)));
                    const I = t.slidesPerColumn,
                        L = E / I,
                        j = Math.floor(m / t.slidesPerColumn);
                    for (let i = 0; i < m; i += 1) {
                        P = 0;
                        const n = f.eq(i);
                        if (t.slidesPerColumn > 1) {
                            let r, o, l;
                            if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                const e = Math.floor(i / (t.slidesPerGroup * t.slidesPerColumn)),
                                    c = i - t.slidesPerColumn * t.slidesPerGroup * e,
                                    d = 0 === e ? t.slidesPerGroup : Math.min(Math.ceil((m - e * I * t.slidesPerGroup) / I), t.slidesPerGroup);
                                l = Math.floor(c / d), o = c - l * d + e * t.slidesPerGroup, r = o + l * E / I, n.css({
                                    "-webkit-box-ordinal-group": r,
                                    "-moz-box-ordinal-group": r,
                                    "-ms-flex-order": r,
                                    "-webkit-order": r,
                                    order: r
                                })
                            } else "column" === t.slidesPerColumnFill ? (o = Math.floor(i / I), l = i - o * I, (o > j || o === j && l === I - 1) && (l += 1, l >= I && (l = 0, o += 1))) : (l = Math.floor(i / L), o = i - l * L);
                            n.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== l && t.spaceBetween && `${t.spaceBetween}px`)
                        }
                        if ("none" !== n.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                const r = d.getComputedStyle(n[0], null),
                                    o = n[0].style.transform,
                                    l = n[0].style.webkitTransform;
                                if (o && (n[0].style.transform = "none"), l && (n[0].style.webkitTransform = "none"), t.roundLengths) P = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else if (e.isHorizontal()) {
                                    const e = parseFloat(r.getPropertyValue("width")),
                                        t = parseFloat(r.getPropertyValue("padding-left")),
                                        n = parseFloat(r.getPropertyValue("padding-right")),
                                        o = parseFloat(r.getPropertyValue("margin-left")),
                                        l = parseFloat(r.getPropertyValue("margin-right")),
                                        c = r.getPropertyValue("box-sizing");
                                    P = c && "border-box" === c ? e + o + l : e + t + n + o + l
                                } else {
                                    const e = parseFloat(r.getPropertyValue("height")),
                                        t = parseFloat(r.getPropertyValue("padding-top")),
                                        n = parseFloat(r.getPropertyValue("padding-bottom")),
                                        o = parseFloat(r.getPropertyValue("margin-top")),
                                        l = parseFloat(r.getPropertyValue("margin-bottom")),
                                        c = r.getPropertyValue("box-sizing");
                                    P = c && "border-box" === c ? e + o + l : e + t + n + o + l
                                }
                                o && (n[0].style.transform = o), l && (n[0].style.webkitTransform = l), t.roundLengths && (P = Math.floor(P))
                            } else P = (r - (t.slidesPerView - 1) * $) / t.slidesPerView, t.roundLengths && (P = Math.floor(P)), f[i] && (e.isHorizontal() ? f[i].style.width = `${P}px` : f[i].style.height = `${P}px`);
                            f[i] && (f[i].swiperSlideSize = P), x.push(P), t.centeredSlides ? (O = O + P / 2 + M / 2 + $, 0 === M && 0 !== i && (O = O - r / 2 - $), 0 === i && (O = O - r / 2 - $), Math.abs(O) < .001 && (O = 0), t.roundLengths && (O = Math.floor(O)), A % t.slidesPerGroup == 0 && v.push(O), w.push(O)) : (t.roundLengths && (O = Math.floor(O)), (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup == 0 && v.push(O), w.push(O), O = O + P + $), e.virtualSize += P + $, M = P, A += 1
                        }
                    }
                    let z;
                    if (e.virtualSize = Math.max(e.virtualSize, r) + S, o && l && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }), t.setWrapperSize && (e.isHorizontal() ? n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }) : n.css({
                            height: `${e.virtualSize+t.spaceBetween}px`
                        })), t.slidesPerColumn > 1 && (e.virtualSize = (P + t.spaceBetween) * E, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }) : n.css({
                            height: `${e.virtualSize+t.spaceBetween}px`
                        }), t.centeredSlides)) {
                        z = [];
                        for (let i = 0; i < v.length; i += 1) {
                            let n = v[i];
                            t.roundLengths && (n = Math.floor(n)), v[i] < e.virtualSize + v[0] && z.push(n)
                        }
                        v = z
                    }
                    if (!t.centeredSlides) {
                        z = [];
                        for (let i = 0; i < v.length; i += 1) {
                            let n = v[i];
                            t.roundLengths && (n = Math.floor(n)), v[i] <= e.virtualSize - r && z.push(n)
                        }
                        v = z, Math.floor(e.virtualSize - r) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - r)
                    }
                    if (0 === v.length && (v = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? o ? f.filter(k).css({
                            marginLeft: `${$}px`
                        }) : f.filter(k).css({
                            marginRight: `${$}px`
                        }) : f.filter(k).css({
                            marginBottom: `${$}px`
                        })), t.centeredSlides && t.centeredSlidesBounds) {
                        let e = 0;
                        x.forEach((n => {
                            e += n + (t.spaceBetween ? t.spaceBetween : 0)
                        })), e -= t.spaceBetween;
                        const n = e - r;
                        v = v.map((e => e < 0 ? -T : e > n ? n + S : e))
                    }
                    if (t.centerInsufficientSlides) {
                        let e = 0;
                        if (x.forEach((n => {
                                e += n + (t.spaceBetween ? t.spaceBetween : 0)
                            })), e -= t.spaceBetween, e < r) {
                            const t = (r - e) / 2;
                            v.forEach(((e, n) => {
                                v[n] = e - t
                            })), w.forEach(((e, n) => {
                                w[n] = e + t
                            }))
                        }
                    }
                    y.extend(e, {
                        slides: f,
                        snapGrid: v,
                        slidesGrid: w,
                        slidesSizesGrid: x
                    }), m !== h && e.emit("slidesLengthChange"), v.length !== _ && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), w.length !== C && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        n = [];
                    let i, r = 0;
                    if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each(((e, t) => {
                            n.push(t)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length) break;
                                n.push(t.slides.eq(e)[0])
                            } else n.push(t.slides.eq(t.activeIndex)[0]);
                    for (i = 0; i < n.length; i += 1)
                        if (void 0 !== n[i]) {
                            const e = n[i].offsetHeight;
                            r = e > r ? e : r
                        }
                    r && t.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        n = t.params,
                        {
                            slides: r,
                            rtlTranslate: o
                        } = t;
                    if (0 === r.length) return;
                    void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                    let l = -e;
                    o && (l = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let i = 0; i < r.length; i += 1) {
                        const e = r[i],
                            c = (l + (n.centeredSlides ? t.minTranslate() : 0) - e.swiperSlideOffset) / (e.swiperSlideSize + n.spaceBetween);
                        if (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) {
                            const o = -(l - e.swiperSlideOffset),
                                c = o + t.slidesSizesGrid[i];
                            (o >= 0 && o < t.size - 1 || c > 1 && c <= t.size || o <= 0 && c >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(i), r.eq(i).addClass(n.slideVisibleClass))
                        }
                        e.progress = o ? -c : c
                    }
                    t.visibleSlides = f(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    const n = t.params,
                        r = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: progress,
                        isBeginning: o,
                        isEnd: l
                    } = t;
                    const c = o,
                        d = l;
                    0 === r ? (progress = 0, o = !0, l = !0) : (progress = (e - t.minTranslate()) / r, o = progress <= 0, l = progress >= 1), y.extend(t, {
                        progress: progress,
                        isBeginning: o,
                        isEnd: l
                    }), (n.watchSlidesProgress || n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), o && !c && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (c && !o || d && !l) && t.emit("fromEdge"), t.emit("progress", progress)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: n,
                            $wrapperEl: r,
                            activeIndex: o,
                            realIndex: l
                        } = e,
                        c = e.virtual && n.virtual.enabled;
                    let d;
                    t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), d = c ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${o}"]`) : t.eq(o), d.addClass(n.slideActiveClass), n.loop && (d.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l}"]`).addClass(n.slideDuplicateActiveClass));
                    let h = d.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === h.length && (h = t.eq(0), h.addClass(n.slideNextClass));
                    let f = d.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === f.length && (f = t.eq(-1), f.addClass(n.slidePrevClass)), n.loop && (h.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), f.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${f.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${f.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        n = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: r,
                            snapGrid: o,
                            params: l,
                            activeIndex: c,
                            realIndex: d,
                            snapIndex: h
                        } = t;
                    let f, m = e;
                    if (void 0 === m) {
                        for (let i = 0; i < r.length; i += 1) void 0 !== r[i + 1] ? n >= r[i] && n < r[i + 1] - (r[i + 1] - r[i]) / 2 ? m = i : n >= r[i] && n < r[i + 1] && (m = i + 1) : n >= r[i] && (m = i);
                        l.normalizeSlideIndex && (m < 0 || void 0 === m) && (m = 0)
                    }
                    if (o.indexOf(n) >= 0) f = o.indexOf(n);
                    else {
                        const e = Math.min(l.slidesPerGroupSkip, m);
                        f = e + Math.floor((m - e) / l.slidesPerGroup)
                    }
                    if (f >= o.length && (f = o.length - 1), m === c) return void(f !== h && (t.snapIndex = f, t.emit("snapIndexChange")));
                    const v = parseInt(t.slides.eq(m).attr("data-swiper-slide-index") || m, 10);
                    y.extend(t, {
                        snapIndex: f,
                        realIndex: v,
                        previousIndex: c,
                        activeIndex: m
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), d !== v && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        n = t.params,
                        r = f(e.target).closest(`.${n.slideClass}`)[0];
                    let o = !1;
                    if (r)
                        for (let i = 0; i < t.slides.length; i += 1) t.slides[i] === r && (o = !0);
                    if (!r || !o) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(f(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = f(r).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var T = {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: n,
                        translate: r,
                        $wrapperEl: o
                    } = this;
                    if (t.virtualTranslate) return n ? -r : r;
                    if (t.cssMode) return r;
                    let l = y.getTranslate(o[0], e);
                    return n && (l = -l), l || 0
                },
                setTranslate: function(e, t) {
                    const n = this,
                        {
                            rtlTranslate: r,
                            params: o,
                            $wrapperEl: l,
                            wrapperEl: c,
                            progress: progress
                        } = n;
                    let d, h = 0,
                        f = 0;
                    n.isHorizontal() ? h = r ? -e : e : f = e, o.roundLengths && (h = Math.floor(h), f = Math.floor(f)), o.cssMode ? c[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -h : -f : o.virtualTranslate || l.transform(`translate3d(${h}px, ${f}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? h : f;
                    const m = n.maxTranslate() - n.minTranslate();
                    d = 0 === m ? 0 : (e - n.minTranslate()) / m, d !== progress && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, n = !0, r = !0, o) {
                    const l = this,
                        {
                            params: c,
                            wrapperEl: d
                        } = l;
                    if (l.animating && c.preventInteractionOnTransition) return !1;
                    const h = l.minTranslate(),
                        f = l.maxTranslate();
                    let m;
                    if (m = r && e > h ? h : r && e < f ? f : e, l.updateProgress(m), c.cssMode) {
                        const e = l.isHorizontal();
                        return 0 === t ? d[e ? "scrollLeft" : "scrollTop"] = -m : d.scrollTo ? d.scrollTo({
                            [e ? "left" : "top"]: -m,
                            behavior: "smooth"
                        }) : d[e ? "scrollLeft" : "scrollTop"] = -m, !0
                    }
                    return 0 === t ? (l.setTransition(0), l.setTranslate(m), n && (l.emit("beforeTransitionStart", t, o), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(m), n && (l.emit("beforeTransitionStart", t, o), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                        l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, n && l.emit("transitionEnd"))
                    }), l.$wrapperEl[0].addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onTranslateToWrapperTransitionEnd))), !0
                }
            };
            var S = {
                setTransition: function(e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                },
                transitionStart: function(e = !0, t) {
                    const n = this,
                        {
                            activeIndex: r,
                            params: o,
                            previousIndex: l
                        } = n;
                    if (o.cssMode) return;
                    o.autoHeight && n.updateAutoHeight();
                    let c = t;
                    if (c || (c = r > l ? "next" : r < l ? "prev" : "reset"), n.emit("transitionStart"), e && r !== l) {
                        if ("reset" === c) return void n.emit("slideResetTransitionStart");
                        n.emit("slideChangeTransitionStart"), "next" === c ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function(e = !0, t) {
                    const n = this,
                        {
                            activeIndex: r,
                            previousIndex: o,
                            params: l
                        } = n;
                    if (n.animating = !1, l.cssMode) return;
                    n.setTransition(0);
                    let c = t;
                    if (c || (c = r > o ? "next" : r < o ? "prev" : "reset"), n.emit("transitionEnd"), e && r !== o) {
                        if ("reset" === c) return void n.emit("slideResetTransitionEnd");
                        n.emit("slideChangeTransitionEnd"), "next" === c ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
                    }
                }
            };
            var _ = {
                slideTo: function(e = 0, t = this.params.speed, n = !0, r) {
                    const o = this;
                    let l = e;
                    l < 0 && (l = 0);
                    const {
                        params: c,
                        snapGrid: d,
                        slidesGrid: h,
                        previousIndex: f,
                        activeIndex: m,
                        rtlTranslate: v,
                        wrapperEl: y
                    } = o;
                    if (o.animating && c.preventInteractionOnTransition) return !1;
                    const w = Math.min(o.params.slidesPerGroupSkip, l);
                    let x = w + Math.floor((l - w) / o.params.slidesPerGroup);
                    x >= d.length && (x = d.length - 1), (m || c.initialSlide || 0) === (f || 0) && n && o.emit("beforeSlideChangeStart");
                    const k = -d[x];
                    if (o.updateProgress(k), c.normalizeSlideIndex)
                        for (let i = 0; i < h.length; i += 1) - Math.floor(100 * k) >= Math.floor(100 * h[i]) && (l = i);
                    if (o.initialized && l !== m) {
                        if (!o.allowSlideNext && k < o.translate && k < o.minTranslate()) return !1;
                        if (!o.allowSlidePrev && k > o.translate && k > o.maxTranslate() && (m || 0) !== l) return !1
                    }
                    let T;
                    if (T = l > m ? "next" : l < m ? "prev" : "reset", v && -k === o.translate || !v && k === o.translate) return o.updateActiveIndex(l), c.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== c.effect && o.setTranslate(k), "reset" !== T && (o.transitionStart(n, T), o.transitionEnd(n, T)), !1;
                    if (c.cssMode) {
                        const e = o.isHorizontal();
                        let n = -k;
                        return v && (n = y.scrollWidth - y.offsetWidth - n), 0 === t ? y[e ? "scrollLeft" : "scrollTop"] = n : y.scrollTo ? y.scrollTo({
                            [e ? "left" : "top"]: n,
                            behavior: "smooth"
                        }) : y[e ? "scrollLeft" : "scrollTop"] = n, !0
                    }
                    return 0 === t ? (o.setTransition(0), o.setTranslate(k), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, T), o.transitionEnd(n, T)) : (o.setTransition(t), o.setTranslate(k), o.updateActiveIndex(l), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, T), o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, T))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, n = !0, r) {
                    const o = this;
                    let l = e;
                    return o.params.loop && (l += o.loopedSlides), o.slideTo(l, t, n, r)
                },
                slideNext: function(e = this.params.speed, t = !0, n) {
                    const r = this,
                        {
                            params: o,
                            animating: l
                        } = r,
                        c = r.activeIndex < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup;
                    if (o.loop) {
                        if (l) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }
                    return r.slideTo(r.activeIndex + c, e, t, n)
                },
                slidePrev: function(e = this.params.speed, t = !0, n) {
                    const r = this,
                        {
                            params: o,
                            animating: l,
                            snapGrid: c,
                            slidesGrid: d,
                            rtlTranslate: h
                        } = r;
                    if (o.loop) {
                        if (l) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }

                    function f(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const m = f(h ? r.translate : -r.translate),
                        v = c.map((e => f(e)));
                    d.map((e => f(e))), c[v.indexOf(m)];
                    let y, w = c[v.indexOf(m) - 1];
                    return void 0 === w && o.cssMode && c.forEach((e => {
                        !w && m >= e && (w = e)
                    })), void 0 !== w && (y = d.indexOf(w), y < 0 && (y = r.activeIndex - 1)), r.slideTo(y, e, t, n)
                },
                slideReset: function(e = this.params.speed, t = !0, n) {
                    return this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e = this.params.speed, t = !0, n, r = .5) {
                    const o = this;
                    let l = o.activeIndex;
                    const c = Math.min(o.params.slidesPerGroupSkip, l),
                        d = c + Math.floor((l - c) / o.params.slidesPerGroup),
                        h = o.rtlTranslate ? o.translate : -o.translate;
                    if (h >= o.snapGrid[d]) {
                        const e = o.snapGrid[d];
                        h - e > (o.snapGrid[d + 1] - e) * r && (l += o.params.slidesPerGroup)
                    } else {
                        const e = o.snapGrid[d - 1];
                        h - e <= (o.snapGrid[d] - e) * r && (l -= o.params.slidesPerGroup)
                    }
                    return l = Math.max(l, 0), l = Math.min(l, o.slidesGrid.length - 1), o.slideTo(l, e, t, n)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e,
                        r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let o, l = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        o = parseInt(f(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? l < e.loopedSlides - r / 2 || l > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), l = n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), y.nextTick((() => {
                            e.slideTo(l)
                        }))) : e.slideTo(l) : l > e.slides.length - r ? (e.loopFix(), l = n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), y.nextTick((() => {
                            e.slideTo(l)
                        }))) : e.slideTo(l)
                    } else e.slideTo(l)
                }
            };
            var C = {
                loopCreate: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e;
                    n.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                    let r = n.children(`.${t.slideClass}`);
                    if (t.loopFillGroupWithBlank) {
                        const e = t.slidesPerGroup - r.length % t.slidesPerGroup;
                        if (e !== t.slidesPerGroup) {
                            for (let i = 0; i < e; i += 1) {
                                const e = f(l.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                                n.append(e)
                            }
                            r = n.children(`.${t.slideClass}`)
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    const o = [],
                        c = [];
                    r.each(((t, n) => {
                        const l = f(n);
                        t < e.loopedSlides && c.push(n), t < r.length && t >= r.length - e.loopedSlides && o.push(n), l.attr("data-swiper-slide-index", t)
                    }));
                    for (let i = 0; i < c.length; i += 1) n.append(f(c[i].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (let i = o.length - 1; i >= 0; i -= 1) n.prepend(f(o[i].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: n,
                        loopedSlides: r,
                        allowSlidePrev: o,
                        allowSlideNext: l,
                        snapGrid: c,
                        rtlTranslate: d
                    } = e;
                    let h;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const f = -c[t] - e.getTranslate();
                    if (t < r) {
                        h = n.length - 3 * r + t, h += r;
                        e.slideTo(h, 0, !1, !0) && 0 !== f && e.setTranslate((d ? -e.translate : e.translate) - f)
                    } else if (t >= n.length - r) {
                        h = -n.length + t + r, h += r;
                        e.slideTo(h, 0, !1, !0) && 0 !== f && e.setTranslate((d ? -e.translate : e.translate) - f)
                    }
                    e.allowSlidePrev = o, e.allowSlideNext = l, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: n
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                }
            };
            var E = {
                setGrabCursor: function(e) {
                    const t = this;
                    if (w.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = t.el;
                    n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    w.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                }
            };
            var P = {
                appendSlide: function(e) {
                    const t = this,
                        {
                            $wrapperEl: n,
                            params: r
                        } = t;
                    if (r.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (let i = 0; i < e.length; i += 1) e[i] && n.append(e[i]);
                    else n.append(e);
                    r.loop && t.loopCreate(), r.observer && w.observer || t.update()
                },
                prependSlide: function(e) {
                    const t = this,
                        {
                            params: n,
                            $wrapperEl: r,
                            activeIndex: o
                        } = t;
                    n.loop && t.loopDestroy();
                    let l = o + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (let i = 0; i < e.length; i += 1) e[i] && r.prepend(e[i]);
                        l = o + e.length
                    } else r.prepend(e);
                    n.loop && t.loopCreate(), n.observer && w.observer || t.update(), t.slideTo(l, 0, !1)
                },
                addSlide: function(e, t) {
                    const n = this,
                        {
                            $wrapperEl: r,
                            params: o,
                            activeIndex: l
                        } = n;
                    let c = l;
                    o.loop && (c -= n.loopedSlides, n.loopDestroy(), n.slides = r.children(`.${o.slideClass}`));
                    const d = n.slides.length;
                    if (e <= 0) return void n.prependSlide(t);
                    if (e >= d) return void n.appendSlide(t);
                    let h = c > e ? c + 1 : c;
                    const f = [];
                    for (let i = d - 1; i >= e; i -= 1) {
                        const e = n.slides.eq(i);
                        e.remove(), f.unshift(e)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (let i = 0; i < t.length; i += 1) t[i] && r.append(t[i]);
                        h = c > e ? c + t.length : c
                    } else r.append(t);
                    for (let i = 0; i < f.length; i += 1) r.append(f[i]);
                    o.loop && n.loopCreate(), o.observer && w.observer || n.update(), o.loop ? n.slideTo(h + n.loopedSlides, 0, !1) : n.slideTo(h, 0, !1)
                },
                removeSlide: function(e) {
                    const t = this,
                        {
                            params: n,
                            $wrapperEl: r,
                            activeIndex: o
                        } = t;
                    let l = o;
                    n.loop && (l -= t.loopedSlides, t.loopDestroy(), t.slides = r.children(`.${n.slideClass}`));
                    let c, d = l;
                    if ("object" == typeof e && "length" in e) {
                        for (let i = 0; i < e.length; i += 1) c = e[i], t.slides[c] && t.slides.eq(c).remove(), c < d && (d -= 1);
                        d = Math.max(d, 0)
                    } else c = e, t.slides[c] && t.slides.eq(c).remove(), c < d && (d -= 1), d = Math.max(d, 0);
                    n.loop && t.loopCreate(), n.observer && w.observer || t.update(), n.loop ? t.slideTo(d + t.loopedSlides, 0, !1) : t.slideTo(d, 0, !1)
                },
                removeAllSlides: function() {
                    const e = this,
                        t = [];
                    for (let i = 0; i < e.slides.length; i += 1) t.push(i);
                    e.removeSlide(t)
                }
            };
            const $ = function() {
                const e = d.navigator.platform,
                    t = d.navigator.userAgent,
                    n = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        edge: !1,
                        ie: !1,
                        firefox: !1,
                        macos: !1,
                        windows: !1,
                        cordova: !(!d.cordova && !d.phonegap),
                        phonegap: !(!d.cordova && !d.phonegap),
                        electron: !1
                    },
                    r = d.screen.width,
                    o = d.screen.height,
                    l = t.match(/(Android);?[\s\/]+([\d.]+)?/);
                let c = t.match(/(iPad).*OS\s([\d_]+)/);
                const h = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                    f = !c && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    m = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
                    v = t.indexOf("Edge/") >= 0,
                    y = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
                    x = "Win32" === e,
                    k = t.toLowerCase().indexOf("electron") >= 0;
                let T = "MacIntel" === e;
                return !c && T && w.touch && (1024 === r && 1366 === o || 834 === r && 1194 === o || 834 === r && 1112 === o || 768 === r && 1024 === o) && (c = t.match(/(Version)\/([\d.]+)/), T = !1), n.ie = m, n.edge = v, n.firefox = y, l && !x && (n.os = "android", n.osVersion = l[2], n.android = !0, n.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), (c || f || h) && (n.os = "ios", n.ios = !0), f && !h && (n.osVersion = f[2].replace(/_/g, "."), n.iphone = !0), c && (n.osVersion = c[2].replace(/_/g, "."), n.ipad = !0), h && (n.osVersion = h[3] ? h[3].replace(/_/g, ".") : null, n.ipod = !0), n.ios && n.osVersion && t.indexOf("Version/") >= 0 && "10" === n.osVersion.split(".")[0] && (n.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), n.webView = !(!(f || c || h) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !d.navigator.standalone) || d.matchMedia && d.matchMedia("(display-mode: standalone)").matches, n.webview = n.webView, n.standalone = n.webView, n.desktop = !(n.ios || n.android) || k, n.desktop && (n.electron = k, n.macos = T, n.windows = x, n.macos && (n.os = "macos"), n.windows && (n.os = "windows")), n.pixelRatio = d.devicePixelRatio || 1, n
            }();

            function O(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r
                    } = t;
                if (t.animating && n.preventInteractionOnTransition) return;
                let o = e;
                o.originalEvent && (o = o.originalEvent);
                const c = f(o.target);
                if ("wrapper" === n.touchEventsTarget && !c.closest(t.wrapperEl).length) return;
                if (data.isTouchEvent = "touchstart" === o.type, !data.isTouchEvent && "which" in o && 3 === o.which) return;
                if (!data.isTouchEvent && "button" in o && o.button > 0) return;
                if (data.isTouched && data.isMoved) return;
                if (n.noSwiping && c.closest(n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`)[0]) return void(t.allowClick = !0);
                if (n.swipeHandler && !c.closest(n.swipeHandler)[0]) return;
                r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                const h = r.currentX,
                    m = r.currentY,
                    v = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                    w = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (!v || !(h <= w || h >= d.screen.width - w)) {
                    if (y.extend(data, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), r.startX = h, r.startY = m, data.touchStartTime = y.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (data.allowThresholdMove = !1), "touchstart" !== o.type) {
                        let e = !0;
                        c.is(data.formElements) && (e = !1), l.activeElement && f(l.activeElement).is(data.formElements) && l.activeElement !== c[0] && l.activeElement.blur();
                        const r = e && t.allowTouchMove && n.touchStartPreventDefault;
                        (n.touchStartForcePreventDefault || r) && o.preventDefault()
                    }
                    t.emit("touchStart", o)
                }
            }

            function M(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r,
                        rtlTranslate: o
                    } = t;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), !data.isTouched) return void(data.startMoving && data.isScrolling && t.emit("touchMoveOpposite", c));
                if (data.isTouchEvent && "touchmove" !== c.type) return;
                const d = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                    h = "touchmove" === c.type ? d.pageX : c.pageX,
                    m = "touchmove" === c.type ? d.pageY : c.pageY;
                if (c.preventedByNestedSwiper) return r.startX = h, void(r.startY = m);
                if (!t.allowTouchMove) return t.allowClick = !1, void(data.isTouched && (y.extend(r, {
                    startX: h,
                    startY: m,
                    currentX: h,
                    currentY: m
                }), data.touchStartTime = y.now()));
                if (data.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (t.isVertical()) {
                        if (m < r.startY && t.translate <= t.maxTranslate() || m > r.startY && t.translate >= t.minTranslate()) return data.isTouched = !1, void(data.isMoved = !1)
                    } else if (h < r.startX && t.translate <= t.maxTranslate() || h > r.startX && t.translate >= t.minTranslate()) return;
                if (data.isTouchEvent && l.activeElement && c.target === l.activeElement && f(c.target).is(data.formElements)) return data.isMoved = !0, void(t.allowClick = !1);
                if (data.allowTouchCallbacks && t.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
                r.currentX = h, r.currentY = m;
                const v = r.currentX - r.startX,
                    w = r.currentY - r.startY;
                if (t.params.threshold && Math.sqrt(v ** 2 + w ** 2) < t.params.threshold) return;
                if (void 0 === data.isScrolling) {
                    let e;
                    t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? data.isScrolling = !1 : v * v + w * w >= 25 && (e = 180 * Math.atan2(Math.abs(w), Math.abs(v)) / Math.PI, data.isScrolling = t.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
                }
                if (data.isScrolling && t.emit("touchMoveOpposite", c), void 0 === data.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (data.startMoving = !0)), data.isScrolling) return void(data.isTouched = !1);
                if (!data.startMoving) return;
                t.allowClick = !1, !n.cssMode && c.cancelable && c.preventDefault(), n.touchMoveStopPropagation && !n.nested && c.stopPropagation(), data.isMoved || (n.loop && t.loopFix(), data.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), data.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", c)), t.emit("sliderMove", c), data.isMoved = !0;
                let x = t.isHorizontal() ? v : w;
                r.diff = x, x *= n.touchRatio, o && (x = -x), t.swipeDirection = x > 0 ? "prev" : "next", data.currentTranslate = x + data.startTranslate;
                let k = !0,
                    T = n.resistanceRatio;
                if (n.touchReleaseOnEdges && (T = 0), x > 0 && data.currentTranslate > t.minTranslate() ? (k = !1, n.resistance && (data.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + data.startTranslate + x) ** T)) : x < 0 && data.currentTranslate < t.maxTranslate() && (k = !1, n.resistance && (data.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - data.startTranslate - x) ** T)), k && (c.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate), n.threshold > 0) {
                    if (!(Math.abs(x) > n.threshold || data.allowThresholdMove)) return void(data.currentTranslate = data.startTranslate);
                    if (!data.allowThresholdMove) return data.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, data.currentTranslate = data.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                }
                n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === data.velocities.length && data.velocities.push({
                    position: r[t.isHorizontal() ? "startX" : "startY"],
                    time: data.touchStartTime
                }), data.velocities.push({
                    position: r[t.isHorizontal() ? "currentX" : "currentY"],
                    time: y.now()
                })), t.updateProgress(data.currentTranslate), t.setTranslate(data.currentTranslate))
            }

            function A(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r,
                        rtlTranslate: o,
                        $wrapperEl: l,
                        slidesGrid: c,
                        snapGrid: d
                    } = t;
                let h = e;
                if (h.originalEvent && (h = h.originalEvent), data.allowTouchCallbacks && t.emit("touchEnd", h), data.allowTouchCallbacks = !1, !data.isTouched) return data.isMoved && n.grabCursor && t.setGrabCursor(!1), data.isMoved = !1, void(data.startMoving = !1);
                n.grabCursor && data.isMoved && data.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const f = y.now(),
                    m = f - data.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), m < 300 && f - data.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), data.lastClickTime = y.now(), y.nextTick((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !data.isTouched || !data.isMoved || !t.swipeDirection || 0 === r.diff || data.currentTranslate === data.startTranslate) return data.isTouched = !1, data.isMoved = !1, void(data.startMoving = !1);
                let v;
                if (data.isTouched = !1, data.isMoved = !1, data.startMoving = !1, v = n.followFinger ? o ? t.translate : -t.translate : -data.currentTranslate, n.cssMode) return;
                if (n.freeMode) {
                    if (v < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (v > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (data.velocities.length > 1) {
                            const e = data.velocities.pop(),
                                r = data.velocities.pop(),
                                o = e.position - r.position,
                                time = e.time - r.time;
                            t.velocity = o / time, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (time > 150 || y.now() - e.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= n.freeModeMomentumVelocityRatio, data.velocities.length = 0;
                        let e = 1e3 * n.freeModeMomentumRatio;
                        const r = t.velocity * e;
                        let c = t.translate + r;
                        o && (c = -c);
                        let h, f = !1;
                        const m = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                        let v;
                        if (c < t.maxTranslate()) n.freeModeMomentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), h = t.maxTranslate(), f = !0, data.allowMomentumBounce = !0) : c = t.maxTranslate(), n.loop && n.centeredSlides && (v = !0);
                        else if (c > t.minTranslate()) n.freeModeMomentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), h = t.minTranslate(), f = !0, data.allowMomentumBounce = !0) : c = t.minTranslate(), n.loop && n.centeredSlides && (v = !0);
                        else if (n.freeModeSticky) {
                            let e;
                            for (let t = 0; t < d.length; t += 1)
                                if (d[t] > -c) {
                                    e = t;
                                    break
                                }
                            c = Math.abs(d[e] - c) < Math.abs(d[e - 1] - c) || "next" === t.swipeDirection ? d[e] : d[e - 1], c = -c
                        }
                        if (v && t.once("transitionEnd", (() => {
                                t.loopFix()
                            })), 0 !== t.velocity) {
                            if (e = o ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), n.freeModeSticky) {
                                const r = Math.abs((o ? -c : c) - t.translate),
                                    l = t.slidesSizesGrid[t.activeIndex];
                                e = r < l ? n.speed : r < 2 * l ? 1.5 * n.speed : 2.5 * n.speed
                            }
                        } else if (n.freeModeSticky) return void t.slideToClosest();
                        n.freeModeMomentumBounce && f ? (t.updateProgress(h), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, l.transitionEnd((() => {
                            t && !t.destroyed && data.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), setTimeout((() => {
                                t.setTranslate(h), l.transitionEnd((() => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            }), 0))
                        }))) : t.velocity ? (t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, l.transitionEnd((() => {
                            t && !t.destroyed && t.transitionEnd()
                        })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (n.freeModeSticky) return void t.slideToClosest();
                    return void((!n.freeModeMomentum || m >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
                }
                let w = 0,
                    x = t.slidesSizesGrid[0];
                for (let i = 0; i < c.length; i += i < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = i < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    void 0 !== c[i + e] ? v >= c[i] && v < c[i + e] && (w = i, x = c[i + e] - c[i]) : v >= c[i] && (w = i, x = c[c.length - 1] - c[c.length - 2])
                }
                const k = (v - c[w]) / x,
                    T = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (m > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (k >= n.longSwipesRatio ? t.slideTo(w + T) : t.slideTo(w)), "prev" === t.swipeDirection && (k > 1 - n.longSwipesRatio ? t.slideTo(w + T) : t.slideTo(w))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(w + T) : t.slideTo(w) : ("next" === t.swipeDirection && t.slideTo(w + T), "prev" === t.swipeDirection && t.slideTo(w))
                }
            }

            function I() {
                const e = this,
                    {
                        params: t,
                        el: n
                    } = e;
                if (n && 0 === n.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: r,
                    allowSlidePrev: o,
                    snapGrid: l
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = o, e.allowSlideNext = r, e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
            }

            function L(e) {
                const t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function j() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: n
                    } = e;
                let r;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const o = e.maxTranslate() - e.minTranslate();
                r = 0 === o ? 0 : (e.translate - e.minTranslate()) / o, r !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let z = !1;

            function N() {}
            var D = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            };
            const R = {
                    update: k,
                    translate: T,
                    transition: S,
                    slide: _,
                    loop: C,
                    grabCursor: E,
                    manipulation: P,
                    events: {
                        attachEvents: function() {
                            const e = this,
                                {
                                    params: t,
                                    touchEvents: n,
                                    el: r,
                                    wrapperEl: o
                                } = e;
                            e.onTouchStart = O.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = A.bind(e), t.cssMode && (e.onScroll = j.bind(e)), e.onClick = L.bind(e);
                            const c = !!t.nested;
                            if (!w.touch && w.pointerEvents) r.addEventListener(n.start, e.onTouchStart, !1), l.addEventListener(n.move, e.onTouchMove, c), l.addEventListener(n.end, e.onTouchEnd, !1);
                            else {
                                if (w.touch) {
                                    const o = !("touchstart" !== n.start || !w.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    r.addEventListener(n.start, e.onTouchStart, o), r.addEventListener(n.move, e.onTouchMove, w.passiveListener ? {
                                        passive: !1,
                                        capture: c
                                    } : c), r.addEventListener(n.end, e.onTouchEnd, o), n.cancel && r.addEventListener(n.cancel, e.onTouchEnd, o), z || (l.addEventListener("touchstart", N), z = !0)
                                }(t.simulateTouch && !$.ios && !$.android || t.simulateTouch && !w.touch && $.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), l.addEventListener("mousemove", e.onTouchMove, c), l.addEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), t.cssMode && o.addEventListener("scroll", e.onScroll), t.updateOnWindowResize ? e.on($.ios || $.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I, !0) : e.on("observerUpdate", I, !0)
                        },
                        detachEvents: function() {
                            const e = this,
                                {
                                    params: t,
                                    touchEvents: n,
                                    el: r,
                                    wrapperEl: o
                                } = e,
                                c = !!t.nested;
                            if (!w.touch && w.pointerEvents) r.removeEventListener(n.start, e.onTouchStart, !1), l.removeEventListener(n.move, e.onTouchMove, c), l.removeEventListener(n.end, e.onTouchEnd, !1);
                            else {
                                if (w.touch) {
                                    const o = !("onTouchStart" !== n.start || !w.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    r.removeEventListener(n.start, e.onTouchStart, o), r.removeEventListener(n.move, e.onTouchMove, c), r.removeEventListener(n.end, e.onTouchEnd, o), n.cancel && r.removeEventListener(n.cancel, e.onTouchEnd, o)
                                }(t.simulateTouch && !$.ios && !$.android || t.simulateTouch && !w.touch && $.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), l.removeEventListener("mousemove", e.onTouchMove, c), l.removeEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), t.cssMode && o.removeEventListener("scroll", e.onScroll), e.off($.ios || $.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I)
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    activeIndex: t,
                                    initialized: n,
                                    loopedSlides: r = 0,
                                    params: o,
                                    $el: l
                                } = e,
                                c = o.breakpoints;
                            if (!c || c && 0 === Object.keys(c).length) return;
                            const d = e.getBreakpoint(c);
                            if (d && e.currentBreakpoint !== d) {
                                const h = d in c ? c[d] : void 0;
                                h && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((param => {
                                    const e = h[param];
                                    void 0 !== e && (h[param] = "slidesPerView" !== param || "AUTO" !== e && "auto" !== e ? "slidesPerView" === param ? parseFloat(e) : parseInt(e, 10) : "auto")
                                }));
                                const f = h || e.originalParams,
                                    m = o.slidesPerColumn > 1,
                                    v = f.slidesPerColumn > 1;
                                m && !v ? l.removeClass(`${o.containerModifierClass}multirow ${o.containerModifierClass}multirow-column`) : !m && v && (l.addClass(`${o.containerModifierClass}multirow`), "column" === f.slidesPerColumnFill && l.addClass(`${o.containerModifierClass}multirow-column`));
                                const w = f.direction && f.direction !== o.direction,
                                    x = o.loop && (f.slidesPerView !== o.slidesPerView || w);
                                w && n && e.changeDirection(), y.extend(e.params, f), y.extend(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }), e.currentBreakpoint = d, x && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", f)
                            }
                        },
                        getBreakpoint: function(e) {
                            if (!e) return;
                            let t = !1;
                            const n = Object.keys(e).map((e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: d.innerHeight * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                            n.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
                            for (let i = 0; i < n.length; i += 1) {
                                const {
                                    point: e,
                                    value: r
                                } = n[i];
                                r <= d.innerWidth && (t = e)
                            }
                            return t || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                t = e.params,
                                n = e.isLocked,
                                r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                            t.slidesOffsetBefore && t.slidesOffsetAfter && r ? e.isLocked = r <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), n && n !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const {
                                classNames: e,
                                params: t,
                                rtl: n,
                                $el: r
                            } = this, o = [];
                            o.push("initialized"), o.push(t.direction), t.freeMode && o.push("free-mode"), t.autoHeight && o.push("autoheight"), n && o.push("rtl"), t.slidesPerColumn > 1 && (o.push("multirow"), "column" === t.slidesPerColumnFill && o.push("multirow-column")), $.android && o.push("android"), $.ios && o.push("ios"), t.cssMode && o.push("css-mode"), o.forEach((n => {
                                e.push(t.containerModifierClass + n)
                            })), r.addClass(e.join(" "))
                        },
                        removeClasses: function() {
                            const {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" "))
                        }
                    },
                    images: {
                        loadImage: function(e, t, n, r, o, l) {
                            let image;

                            function c() {
                                l && l()
                            }
                            f(e).parent("picture")[0] || e.complete && o ? c() : t ? (image = new d.Image, image.onload = c, image.onerror = c, r && (image.sizes = r), n && (image.srcset = n), t && (image.src = t)) : c()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                                const n = e.imagesToLoad[i];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                B = {};
            class H extends x {
                constructor(...e) {
                    let t, n;
                    1 === e.length && e[0].constructor && e[0].constructor === Object ? n = e[0] : [t, n] = e, n || (n = {}), n = y.extend({}, n), t && !n.el && (n.el = t), super(n), Object.keys(R).forEach((e => {
                        Object.keys(R[e]).forEach((t => {
                            H.prototype[t] || (H.prototype[t] = R[e][t])
                        }))
                    }));
                    const r = this;
                    void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach((e => {
                        const t = r.modules[e];
                        if (t.params) {
                            const e = Object.keys(t.params)[0],
                                r = t.params[e];
                            if ("object" != typeof r || null === r) return;
                            if (!(e in n) || !("enabled" in r)) return;
                            !0 === n[e] && (n[e] = {
                                enabled: !0
                            }), "object" != typeof n[e] || "enabled" in n[e] || (n[e].enabled = !0), n[e] || (n[e] = {
                                enabled: !1
                            })
                        }
                    }));
                    const o = y.extend({}, D);
                    r.useModulesParams(o), r.params = y.extend({}, o, B, n), r.originalParams = y.extend({}, r.params), r.passedParams = y.extend({}, n), r.$ = f;
                    const l = f(r.params.el);
                    if (t = l[0], !t) return;
                    if (l.length > 1) {
                        const e = [];
                        return l.each(((t, r) => {
                            const o = y.extend({}, n, {
                                el: r
                            });
                            e.push(new H(o))
                        })), e
                    }
                    let c;
                    return t.swiper = r, l.data("swiper", r), t && t.shadowRoot && t.shadowRoot.querySelector ? (c = f(t.shadowRoot.querySelector(`.${r.params.wrapperClass}`)), c.children = e => l.children(e)) : c = l.children(`.${r.params.wrapperClass}`), y.extend(r, {
                        $el: l,
                        el: t,
                        $wrapperEl: c,
                        wrapperEl: c[0],
                        classNames: [],
                        slides: f(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === r.params.direction,
                        isVertical: () => "vertical" === r.params.direction,
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction")),
                        wrongRTL: "-webkit-box" === c.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
                            let t = ["mousedown", "mousemove", "mouseup"];
                            return w.pointerEvents && (t = ["pointerdown", "pointermove", "pointerup"]), r.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, r.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, w.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: y.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
                slidesPerViewDynamic() {
                    const {
                        params: e,
                        slides: t,
                        slidesGrid: n,
                        size: r,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if (e.centeredSlides) {
                        let e, n = t[o].swiperSlideSize;
                        for (let i = o + 1; i < t.length; i += 1) t[i] && !e && (n += t[i].swiperSlideSize, l += 1, n > r && (e = !0));
                        for (let i = o - 1; i >= 0; i -= 1) t[i] && !e && (n += t[i].swiperSlideSize, l += 1, n > r && (e = !0))
                    } else
                        for (let i = o + 1; i < t.length; i += 1) n[i] - n[o] < r && (l += 1);
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: n
                    } = e;

                    function r() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let o;
                    n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (o = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), o || r()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    const n = this,
                        r = n.params.direction;
                    return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`), n.params.direction = e, n.slides.each(((t, n) => {
                        "vertical" === e ? n.style.width = "" : n.style.height = ""
                    })), n.emit("changeDirection"), t && n.update()), n
                }
                init() {
                    const e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }
                destroy(e = !0, t = !0) {
                    const n = this,
                        {
                            params: r,
                            $el: o,
                            $wrapperEl: l,
                            slides: c
                        } = n;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), o.removeAttr("style"), l.removeAttr("style"), c && c.length && c.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                        n.off(e)
                    })), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), y.deleteProps(n)), n.destroyed = !0), null
                }
                static extendDefaults(e) {
                    y.extend(B, e)
                }
                static get extendedDefaults() {
                    return B
                }
                static get defaults() {
                    return D
                }
                static get Class() {
                    return x
                }
                static get $() {
                    return f
                }
            }
            var F = {
                    name: "device",
                    proto: {
                        device: $
                    },
                    static: {
                        device: $
                    }
                },
                V = {
                    name: "support",
                    proto: {
                        support: w
                    },
                    static: {
                        support: w
                    }
                };
            const U = {
                isEdge: !!d.navigator.userAgent.match(/Edge/g),
                isSafari: function() {
                    const e = d.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(d.navigator.userAgent)
            };
            var Y = {
                    name: "browser",
                    proto: {
                        browser: U
                    },
                    static: {
                        browser: U
                    }
                },
                G = {
                    name: "resize",
                    create() {
                        const e = this;
                        y.extend(e, {
                            resize: {
                                resizeHandler() {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                                },
                                orientationChangeHandler() {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange")
                                }
                            }
                        })
                    },
                    on: {
                        init() {
                            d.addEventListener("resize", this.resize.resizeHandler), d.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                        },
                        destroy() {
                            d.removeEventListener("resize", this.resize.resizeHandler), d.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }
                    }
                };
            const W = {
                func: d.MutationObserver || d.WebkitMutationObserver,
                attach(e, t = {}) {
                    const n = this,
                        r = new(0, W.func)((e => {
                            if (1 === e.length) return void n.emit("observerUpdate", e[0]);
                            const t = function() {
                                n.emit("observerUpdate", e[0])
                            };
                            d.requestAnimationFrame ? d.requestAnimationFrame(t) : d.setTimeout(t, 0)
                        }));
                    r.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), n.observer.observers.push(r)
                },
                init() {
                    const e = this;
                    if (w.observer && e.params.observer) {
                        if (e.params.observeParents) {
                            const t = e.$el.parents();
                            for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i])
                        }
                        e.observer.attach(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy() {
                    this.observer.observers.forEach((e => {
                        e.disconnect()
                    })), this.observer.observers = []
                }
            };
            var X = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        observer: {
                            init: W.init.bind(e),
                            attach: W.attach.bind(e),
                            destroy: W.destroy.bind(e),
                            observers: []
                        }
                    })
                },
                on: {
                    init() {
                        this.observer.init()
                    },
                    destroy() {
                        this.observer.destroy()
                    }
                }
            };
            const K = {
                update(e) {
                    const t = this,
                        {
                            slidesPerView: n,
                            slidesPerGroup: r,
                            centeredSlides: o
                        } = t.params,
                        {
                            addSlidesBefore: l,
                            addSlidesAfter: c
                        } = t.params.virtual,
                        {
                            from: d,
                            to: h,
                            slides: f,
                            slidesGrid: m,
                            renderSlide: v,
                            offset: w
                        } = t.virtual;
                    t.updateActiveIndex();
                    const x = t.activeIndex || 0;
                    let k, T, S;
                    k = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", o ? (T = Math.floor(n / 2) + r + l, S = Math.floor(n / 2) + r + c) : (T = n + (r - 1) + l, S = r + c);
                    const _ = Math.max((x || 0) - S, 0),
                        C = Math.min((x || 0) + T, f.length - 1),
                        E = (t.slidesGrid[_] || 0) - (t.slidesGrid[0] || 0);

                    function P() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (y.extend(t.virtual, {
                            from: _,
                            to: C,
                            offset: E,
                            slidesGrid: t.slidesGrid
                        }), d === _ && h === C && !e) return t.slidesGrid !== m && E !== w && t.slides.css(k, `${E}px`), void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                        offset: E,
                        from: _,
                        to: C,
                        slides: function() {
                            const e = [];
                            for (let i = _; i <= C; i += 1) e.push(f[i]);
                            return e
                        }()
                    }), void P();
                    const $ = [],
                        O = [];
                    if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
                    else
                        for (let i = d; i <= h; i += 1)(i < _ || i > C) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                    for (let i = 0; i < f.length; i += 1) i >= _ && i <= C && (void 0 === h || e ? O.push(i) : (i > h && O.push(i), i < d && $.push(i)));
                    O.forEach((e => {
                        t.$wrapperEl.append(v(f[e], e))
                    })), $.sort(((a, b) => b - a)).forEach((e => {
                        t.$wrapperEl.prepend(v(f[e], e))
                    })), t.$wrapperEl.children(".swiper-slide").css(k, `${E}px`), P()
                },
                renderSlide(e, t) {
                    const n = this,
                        r = n.params.virtual;
                    if (r.cache && n.virtual.cache[t]) return n.virtual.cache[t];
                    const o = r.renderSlide ? f(r.renderSlide.call(n, e, t)) : f(`<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                    return o.attr("data-swiper-slide-index") || o.attr("data-swiper-slide-index", t), r.cache && (n.virtual.cache[t] = o), o
                },
                appendSlide(e) {
                    const t = this;
                    if ("object" == typeof e && "length" in e)
                        for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.push(e[i]);
                    else t.virtual.slides.push(e);
                    t.virtual.update(!0)
                },
                prependSlide(e) {
                    const t = this,
                        n = t.activeIndex;
                    let r = n + 1,
                        o = 1;
                    if (Array.isArray(e)) {
                        for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.unshift(e[i]);
                        r = n + e.length, o = e.length
                    } else t.virtual.slides.unshift(e);
                    if (t.params.virtual.cache) {
                        const e = t.virtual.cache,
                            n = {};
                        Object.keys(e).forEach((t => {
                            const r = e[t],
                                l = r.attr("data-swiper-slide-index");
                            l && r.attr("data-swiper-slide-index", parseInt(l, 10) + 1), n[parseInt(t, 10) + o] = r
                        })), t.virtual.cache = n
                    }
                    t.virtual.update(!0), t.slideTo(r, 0)
                },
                removeSlide(e) {
                    const t = this;
                    if (null == e) return;
                    let n = t.activeIndex;
                    if (Array.isArray(e))
                        for (let i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), n = Math.max(n, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), n = Math.max(n, 0);
                    t.virtual.update(!0), t.slideTo(n, 0)
                },
                removeAllSlides() {
                    const e = this;
                    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
                }
            };
            var J = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        virtual: {
                            update: K.update.bind(e),
                            appendSlide: K.appendSlide.bind(e),
                            prependSlide: K.prependSlide.bind(e),
                            removeSlide: K.removeSlide.bind(e),
                            removeAllSlides: K.removeAllSlides.bind(e),
                            renderSlide: K.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if (!e.params.virtual.enabled) return;
                        e.classNames.push(`${e.params.containerModifierClass}virtual`);
                        const t = {
                            watchSlidesProgress: !0
                        };
                        y.extend(e.params, t), y.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    },
                    setTranslate() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            };
            const Q = {
                handle(e) {
                    const t = this,
                        {
                            rtlTranslate: n
                        } = t;
                    let r = e;
                    r.originalEvent && (r = r.originalEvent);
                    const o = r.keyCode || r.charCode,
                        c = t.params.keyboard.pageUpDown,
                        h = c && 33 === o,
                        f = c && 34 === o,
                        m = 37 === o,
                        v = 39 === o,
                        y = 38 === o,
                        w = 40 === o;
                    if (!t.allowSlideNext && (t.isHorizontal() && v || t.isVertical() && w || f)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && m || t.isVertical() && y || h)) return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (h || f || m || v || y || w)) {
                            let e = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            const r = d.innerWidth,
                                o = d.innerHeight,
                                l = t.$el.offset();
                            n && (l.left -= t.$el[0].scrollLeft);
                            const c = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height]
                            ];
                            for (let i = 0; i < c.length; i += 1) {
                                const t = c[i];
                                t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o && (e = !0)
                            }
                            if (!e) return
                        }
                        t.isHorizontal() ? ((h || f || m || v) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((f || v) && !n || (h || m) && n) && t.slideNext(), ((h || m) && !n || (f || v) && n) && t.slidePrev()) : ((h || f || y || w) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (f || w) && t.slideNext(), (h || y) && t.slidePrev()), t.emit("keyPress", o)
                    }
                },
                enable() {
                    const e = this;
                    e.keyboard.enabled || (f(l).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
                },
                disable() {
                    const e = this;
                    e.keyboard.enabled && (f(l).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
                }
            };
            var Z = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        keyboard: {
                            enabled: !1,
                            enable: Q.enable.bind(e),
                            disable: Q.disable.bind(e),
                            handle: Q.handle.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.keyboard.enabled && e.keyboard.enable()
                    },
                    destroy() {
                        const e = this;
                        e.keyboard.enabled && e.keyboard.disable()
                    }
                }
            };
            const ee = {
                lastScrollTime: y.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: () => d.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    const e = "onwheel";
                    let t = e in l;
                    if (!t) {
                        const element = l.createElement("div");
                        element.setAttribute(e, "return;"), t = "function" == typeof element.onwheel
                    }
                    return !t && l.implementation && l.implementation.hasFeature && !0 !== l.implementation.hasFeature("", "") && (t = l.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel",
                normalize(e) {
                    let t = 0,
                        n = 0,
                        r = 0,
                        o = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, o = 10 * n, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = o, o = 0), (r || o) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, o *= 40) : (r *= 800, o *= 800)), r && !t && (t = r < 1 ? -1 : 1), o && !n && (n = o < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: r,
                        pixelY: o
                    }
                },
                handleMouseEnter() {
                    this.mouseEntered = !0
                },
                handleMouseLeave() {
                    this.mouseEntered = !1
                },
                handle(e) {
                    let t = e;
                    const n = this,
                        r = n.params.mousewheel;
                    n.params.cssMode && t.preventDefault();
                    let o = n.$el;
                    if ("container" !== n.params.mousewheel.eventsTarged && (o = f(n.params.mousewheel.eventsTarged)), !n.mouseEntered && !o[0].contains(t.target) && !r.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    let l = 0;
                    const c = n.rtlTranslate ? -1 : 1,
                        data = ee.normalize(t);
                    if (r.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(data.pixelX) > Math.abs(data.pixelY))) return !0;
                            l = -data.pixelX * c
                        } else {
                            if (!(Math.abs(data.pixelY) > Math.abs(data.pixelX))) return !0;
                            l = -data.pixelY
                        }
                    else l = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * c : -data.pixelY;
                    if (0 === l) return !0;
                    if (r.invert && (l = -l), n.params.freeMode) {
                        const e = {
                                time: y.now(),
                                delta: Math.abs(l),
                                direction: Math.sign(l)
                            },
                            {
                                lastEventBeforeSnap: o
                            } = n.mousewheel,
                            c = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                        if (!c) {
                            n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                            let o = n.getTranslate() + l * r.sensitivity;
                            const d = n.isBeginning,
                                h = n.isEnd;
                            if (o >= n.minTranslate() && (o = n.minTranslate()), o <= n.maxTranslate() && (o = n.maxTranslate()), n.setTransition(0), n.setTranslate(o), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!d && n.isBeginning || !h && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) {
                                clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0;
                                const t = n.mousewheel.recentWheelEvents;
                                t.length >= 15 && t.shift();
                                const r = t.length ? t[t.length - 1] : void 0,
                                    o = t[0];
                                if (t.push(e), r && (e.delta > r.delta || e.direction !== r.direction)) t.splice(0);
                                else if (t.length >= 15 && e.time - o.time < 500 && o.delta - e.delta >= 1 && e.delta <= 6) {
                                    const r = l > 0 ? .8 : .2;
                                    n.mousewheel.lastEventBeforeSnap = e, t.splice(0), n.mousewheel.timeout = y.nextTick((() => {
                                        n.slideToClosest(n.params.speed, !0, void 0, r)
                                    }), 0)
                                }
                                n.mousewheel.timeout || (n.mousewheel.timeout = y.nextTick((() => {
                                    n.mousewheel.lastEventBeforeSnap = e, t.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5)
                                }), 500))
                            }
                            if (c || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), o === n.minTranslate() || o === n.maxTranslate()) return !0
                        }
                    } else {
                        const t = {
                                time: y.now(),
                                delta: Math.abs(l),
                                direction: Math.sign(l),
                                raw: e
                            },
                            r = n.mousewheel.recentWheelEvents;
                        r.length >= 2 && r.shift();
                        const o = r.length ? r[r.length - 1] : void 0;
                        if (r.push(t), o ? (t.direction !== o.direction || t.delta > o.delta || t.time > o.time + 150) && n.mousewheel.animateSlider(t) : n.mousewheel.animateSlider(t), n.mousewheel.releaseScroll(t)) return !0
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                animateSlider(e) {
                    const t = this;
                    return e.delta >= 6 && y.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new d.Date).getTime(), !1)
                },
                releaseScroll(e) {
                    const t = this,
                        n = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
                    } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
                    return !1
                },
                enable() {
                    const e = this,
                        t = ee.event();
                    if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (e.mousewheel.enabled) return !1;
                    let n = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (n = f(e.params.mousewheel.eventsTarged)), n.on("mouseenter", e.mousewheel.handleMouseEnter), n.on("mouseleave", e.mousewheel.handleMouseLeave), n.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
                },
                disable() {
                    const e = this,
                        t = ee.event();
                    if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (!e.mousewheel.enabled) return !1;
                    let n = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (n = f(e.params.mousewheel.eventsTarged)), n.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
                }
            };
            const te = {
                update() {
                    const e = this,
                        t = e.params.navigation;
                    if (e.params.loop) return;
                    const {
                        $nextEl: n,
                        $prevEl: r
                    } = e.navigation;
                    r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && n.length > 0 && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                },
                onPrevClick(e) {
                    const t = this;
                    e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                },
                onNextClick(e) {
                    const t = this;
                    e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                },
                init() {
                    const e = this,
                        t = e.params.navigation;
                    if (!t.nextEl && !t.prevEl) return;
                    let n, r;
                    t.nextEl && (n = f(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && n.length > 1 && 1 === e.$el.find(t.nextEl).length && (n = e.$el.find(t.nextEl))), t.prevEl && (r = f(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && r.length > 1 && 1 === e.$el.find(t.prevEl).length && (r = e.$el.find(t.prevEl))), n && n.length > 0 && n.on("click", e.navigation.onNextClick), r && r.length > 0 && r.on("click", e.navigation.onPrevClick), y.extend(e.navigation, {
                        $nextEl: n,
                        nextEl: n && n[0],
                        $prevEl: r,
                        prevEl: r && r[0]
                    })
                },
                destroy() {
                    const e = this,
                        {
                            $nextEl: t,
                            $prevEl: n
                        } = e.navigation;
                    t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
                }
            };
            const ne = {
                update() {
                    const e = this,
                        t = e.rtl,
                        n = e.params.pagination;
                    if (!n.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        o = e.pagination.$el;
                    let l;
                    const c = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (l = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), l > r - 1 - 2 * e.loopedSlides && (l -= r - 2 * e.loopedSlides), l > c - 1 && (l -= c), l < 0 && "bullets" !== e.params.paginationType && (l = c + l)) : l = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        const r = e.pagination.bullets;
                        let c, d, h;
                        if (n.dynamicBullets && (e.pagination.bulletSize = r.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += l - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), c = l - e.pagination.dynamicBulletIndex, d = c + (Math.min(r.length, n.dynamicMainBullets) - 1), h = (d + c) / 2), r.removeClass(`${n.bulletActiveClass} ${n.bulletActiveClass}-next ${n.bulletActiveClass}-next-next ${n.bulletActiveClass}-prev ${n.bulletActiveClass}-prev-prev ${n.bulletActiveClass}-main`), o.length > 1) r.each(((e, t) => {
                            const r = f(t),
                                o = r.index();
                            o === l && r.addClass(n.bulletActiveClass), n.dynamicBullets && (o >= c && o <= d && r.addClass(`${n.bulletActiveClass}-main`), o === c && r.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), o === d && r.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`))
                        }));
                        else {
                            const t = r.eq(l),
                                o = t.index();
                            if (t.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                const t = r.eq(c),
                                    l = r.eq(d);
                                for (let i = c; i <= d; i += 1) r.eq(i).addClass(`${n.bulletActiveClass}-main`);
                                if (e.params.loop)
                                    if (o >= r.length - n.dynamicMainBullets) {
                                        for (let i = n.dynamicMainBullets; i >= 0; i -= 1) r.eq(r.length - i).addClass(`${n.bulletActiveClass}-main`);
                                        r.eq(r.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                                    } else t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), l.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`);
                                else t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), l.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`)
                            }
                        }
                        if (n.dynamicBullets) {
                            const o = Math.min(r.length, n.dynamicMainBullets + 4),
                                l = (e.pagination.bulletSize * o - e.pagination.bulletSize) / 2 - h * e.pagination.bulletSize,
                                c = t ? "right" : "left";
                            r.css(e.isHorizontal() ? c : "top", `${l}px`)
                        }
                    }
                    if ("fraction" === n.type && (o.find(`.${n.currentClass}`).text(n.formatFractionCurrent(l + 1)), o.find(`.${n.totalClass}`).text(n.formatFractionTotal(c))), "progressbar" === n.type) {
                        let t;
                        t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        const r = (l + 1) / c;
                        let d = 1,
                            h = 1;
                        "horizontal" === t ? d = r : h = r, o.find(`.${n.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${d}) scaleY(${h})`).transition(e.params.speed)
                    }
                    "custom" === n.type && n.renderCustom ? (o.html(n.renderCustom(e, l + 1, c)), e.emit("paginationRender", e, o[0])) : e.emit("paginationUpdate", e, o[0]), o[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](n.lockClass)
                },
                render() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el;
                    let o = "";
                    if ("bullets" === t.type) {
                        const l = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        for (let i = 0; i < l; i += 1) t.renderBullet ? o += t.renderBullet.call(e, i, t.bulletClass) : o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        r.html(o), e.pagination.bullets = r.find(`.${t.bulletClass}`)
                    }
                    "fraction" === t.type && (o = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, r.html(o)), "progressbar" === t.type && (o = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, r.html(o)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                },
                init() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el) return;
                    let n = f(t.el);
                    0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", `.${t.bulletClass}`, (function(t) {
                        t.preventDefault();
                        let n = f(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (n += e.loopedSlides), e.slideTo(n)
                    })), y.extend(e.pagination, {
                        $el: n,
                        el: n[0]
                    }))
                },
                destroy() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const n = e.pagination.$el;
                    n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", `.${t.bulletClass}`)
                }
            };
            const re = {
                setTranslate() {
                    const e = this;
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        rtlTranslate: n,
                        progress: progress
                    } = e, {
                        dragSize: r,
                        trackSize: o,
                        $dragEl: l,
                        $el: c
                    } = t, d = e.params.scrollbar;
                    let h = r,
                        f = (o - r) * progress;
                    n ? (f = -f, f > 0 ? (h = r - f, f = 0) : -f + r > o && (h = o + f)) : f < 0 ? (h = r + f, f = 0) : f + r > o && (h = o - f), e.isHorizontal() ? (l.transform(`translate3d(${f}px, 0, 0)`), l[0].style.width = `${h}px`) : (l.transform(`translate3d(0px, ${f}px, 0)`), l[0].style.height = `${h}px`), d.hide && (clearTimeout(e.scrollbar.timeout), c[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((() => {
                        c[0].style.opacity = 0, c.transition(400)
                    }), 1e3))
                },
                setTransition(e) {
                    const t = this;
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                },
                updateSize() {
                    const e = this;
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const {
                        scrollbar: t
                    } = e, {
                        $dragEl: n,
                        $el: r
                    } = t;
                    n[0].style.width = "", n[0].style.height = "";
                    const o = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
                        l = e.size / e.virtualSize,
                        c = l * (o / e.size);
                    let d;
                    d = "auto" === e.params.scrollbar.dragSize ? o * l : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = `${d}px` : n[0].style.height = `${d}px`, r[0].style.display = l >= 1 ? "none" : "", e.params.scrollbar.hide && (r[0].style.opacity = 0), y.extend(t, {
                        trackSize: o,
                        divider: l,
                        moveDivider: c,
                        dragSize: d
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                },
                getPointerPosition(e) {
                    return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                },
                setDragPosition(e) {
                    const t = this,
                        {
                            scrollbar: n,
                            rtlTranslate: r
                        } = t,
                        {
                            $el: o,
                            dragSize: l,
                            trackSize: c,
                            dragStartPos: d
                        } = n;
                    let h;
                    h = (n.getPointerPosition(e) - o.offset()[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : l / 2)) / (c - l), h = Math.max(Math.min(h, 1), 0), r && (h = 1 - h);
                    const f = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * h;
                    t.updateProgress(f), t.setTranslate(f), t.updateActiveIndex(), t.updateSlidesClasses()
                },
                onDragStart(e) {
                    const t = this,
                        n = t.params.scrollbar,
                        {
                            scrollbar: r,
                            $wrapperEl: o
                        } = t,
                        {
                            $el: l,
                            $dragEl: c
                        } = r;
                    t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === c[0] || e.target === c ? r.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), o.transition(100), c.transition(100), r.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), l.transition(0), n.hide && l.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
                },
                onDragMove(e) {
                    const t = this,
                        {
                            scrollbar: n,
                            $wrapperEl: r
                        } = t,
                        {
                            $el: o,
                            $dragEl: l
                        } = n;
                    t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), r.transition(0), o.transition(0), l.transition(0), t.emit("scrollbarDragMove", e))
                },
                onDragEnd(e) {
                    const t = this,
                        n = t.params.scrollbar,
                        {
                            scrollbar: r,
                            $wrapperEl: o
                        } = t,
                        {
                            $el: l
                        } = r;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), o.transition("")), n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = y.nextTick((() => {
                        l.css("opacity", 0), l.transition(400)
                    }), 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
                },
                enableDraggable() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        touchEventsTouch: n,
                        touchEventsDesktop: r,
                        params: o
                    } = e, c = t.$el[0], d = !(!w.passiveListener || !o.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, h = !(!w.passiveListener || !o.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    w.touch ? (c.addEventListener(n.start, e.scrollbar.onDragStart, d), c.addEventListener(n.move, e.scrollbar.onDragMove, d), c.addEventListener(n.end, e.scrollbar.onDragEnd, h)) : (c.addEventListener(r.start, e.scrollbar.onDragStart, d), l.addEventListener(r.move, e.scrollbar.onDragMove, d), l.addEventListener(r.end, e.scrollbar.onDragEnd, h))
                },
                disableDraggable() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        touchEventsTouch: n,
                        touchEventsDesktop: r,
                        params: o
                    } = e, c = t.$el[0], d = !(!w.passiveListener || !o.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, h = !(!w.passiveListener || !o.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    w.touch ? (c.removeEventListener(n.start, e.scrollbar.onDragStart, d), c.removeEventListener(n.move, e.scrollbar.onDragMove, d), c.removeEventListener(n.end, e.scrollbar.onDragEnd, h)) : (c.removeEventListener(r.start, e.scrollbar.onDragStart, d), l.removeEventListener(r.move, e.scrollbar.onDragMove, d), l.removeEventListener(r.end, e.scrollbar.onDragEnd, h))
                },
                init() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        $el: n
                    } = e, r = e.params.scrollbar;
                    let o = f(r.el);
                    e.params.uniqueNavElements && "string" == typeof r.el && o.length > 1 && 1 === n.find(r.el).length && (o = n.find(r.el));
                    let l = o.find(`.${e.params.scrollbar.dragClass}`);
                    0 === l.length && (l = f(`<div class="${e.params.scrollbar.dragClass}"></div>`), o.append(l)), y.extend(t, {
                        $el: o,
                        el: o[0],
                        $dragEl: l,
                        dragEl: l[0]
                    }), r.draggable && t.enableDraggable()
                },
                destroy() {
                    this.scrollbar.disableDraggable()
                }
            };
            const ie = {
                setTransform(e, progress) {
                    const {
                        rtl: t
                    } = this, n = f(e), r = t ? -1 : 1, p = n.attr("data-swiper-parallax") || "0";
                    let o = n.attr("data-swiper-parallax-x"),
                        l = n.attr("data-swiper-parallax-y");
                    const c = n.attr("data-swiper-parallax-scale"),
                        d = n.attr("data-swiper-parallax-opacity");
                    if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = p, l = "0") : (l = p, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * progress * r + "%" : o * progress * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * progress + "%" : l * progress + "px", null != d) {
                        const e = d - (d - 1) * (1 - Math.abs(progress));
                        n[0].style.opacity = e
                    }
                    if (null == c) n.transform(`translate3d(${o}, ${l}, 0px)`);
                    else {
                        const e = c - (c - 1) * (1 - Math.abs(progress));
                        n.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
                    }
                },
                setTranslate() {
                    const e = this,
                        {
                            $el: t,
                            slides: n,
                            progress: progress,
                            snapGrid: r
                        } = e;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                        e.parallax.setTransform(n, progress)
                    })), n.each(((t, n) => {
                        let o = n.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (o += Math.ceil(t / 2) - progress * (r.length - 1)), o = Math.min(Math.max(o, -1), 1), f(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                            e.parallax.setTransform(n, o)
                        }))
                    }))
                },
                setTransition(e = this.params.speed) {
                    const {
                        $el: t
                    } = this;
                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                        const r = f(n);
                        let o = parseInt(r.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (o = 0), r.transition(o)
                    }))
                }
            };
            const ae = {
                getDistanceBetweenTouches(e) {
                    if (e.targetTouches.length < 2) return 1;
                    const t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        r = e.targetTouches[1].pageX,
                        o = e.targetTouches[1].pageY;
                    return Math.sqrt((r - t) ** 2 + (o - n) ** 2)
                },
                onGestureStart(e) {
                    const t = this,
                        n = t.params.zoom,
                        r = t.zoom,
                        {
                            gesture: o
                        } = r;
                    if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !w.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        r.fakeGestureTouched = !0, o.scaleStart = ae.getDistanceBetweenTouches(e)
                    }
                    o.$slideEl && o.$slideEl.length || (o.$slideEl = f(e.target).closest(`.${t.params.slideClass}`), 0 === o.$slideEl.length && (o.$slideEl = t.slides.eq(t.activeIndex)), o.$imageEl = o.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), o.$imageWrapEl = o.$imageEl.parent(`.${n.containerClass}`), o.maxRatio = o.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== o.$imageWrapEl.length) ? (o.$imageEl && o.$imageEl.transition(0), t.zoom.isScaling = !0) : o.$imageEl = void 0
                },
                onGestureChange(e) {
                    const t = this.params.zoom,
                        n = this.zoom,
                        {
                            gesture: r
                        } = n;
                    if (!w.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureMoved = !0, r.scaleMove = ae.getDistanceBetweenTouches(e)
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (n.scale = w.gestures ? e.scale * n.currentScale : r.scaleMove / r.scaleStart * n.currentScale, n.scale > r.maxRatio && (n.scale = r.maxRatio - 1 + (n.scale - r.maxRatio + 1) ** .5), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - (t.minRatio - n.scale + 1) ** .5), r.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`))
                },
                onGestureEnd(e) {
                    const t = this,
                        n = t.params.zoom,
                        r = t.zoom,
                        {
                            gesture: o
                        } = r;
                    if (!w.gestures) {
                        if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !$.android) return;
                        r.fakeGestureTouched = !1, r.fakeGestureMoved = !1
                    }
                    o.$imageEl && 0 !== o.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, o.maxRatio), n.minRatio), o.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (o.$slideEl = void 0))
                },
                onTouchStart(e) {
                    const t = this.zoom,
                        {
                            gesture: n,
                            image: image
                        } = t;
                    n.$imageEl && 0 !== n.$imageEl.length && (image.isTouched || ($.android && e.cancelable && e.preventDefault(), image.isTouched = !0, image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove(e) {
                    const t = this,
                        n = t.zoom,
                        {
                            gesture: r,
                            image: image,
                            velocity: o
                        } = n;
                    if (!r.$imageEl || 0 === r.$imageEl.length) return;
                    if (t.allowClick = !1, !image.isTouched || !r.$slideEl) return;
                    image.isMoved || (image.width = r.$imageEl[0].offsetWidth, image.height = r.$imageEl[0].offsetHeight, image.startX = y.getTranslate(r.$imageWrapEl[0], "x") || 0, image.startY = y.getTranslate(r.$imageWrapEl[0], "y") || 0, r.slideWidth = r.$slideEl[0].offsetWidth, r.slideHeight = r.$slideEl[0].offsetHeight, r.$imageWrapEl.transition(0), t.rtl && (image.startX = -image.startX, image.startY = -image.startY));
                    const l = image.width * n.scale,
                        c = image.height * n.scale;
                    if (!(l < r.slideWidth && c < r.slideHeight)) {
                        if (image.minX = Math.min(r.slideWidth / 2 - l / 2, 0), image.maxX = -image.minX, image.minY = Math.min(r.slideHeight / 2 - c / 2, 0), image.maxY = -image.minY, image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !image.isMoved && !n.isScaling) {
                            if (t.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) return void(image.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) return void(image.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), image.isMoved = !0, image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX, image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY, image.currentX < image.minX && (image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** .8), image.currentX > image.maxX && (image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** .8), image.currentY < image.minY && (image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** .8), image.currentY > image.maxY && (image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** .8), o.prevPositionX || (o.prevPositionX = image.touchesCurrent.x), o.prevPositionY || (o.prevPositionY = image.touchesCurrent.y), o.prevTime || (o.prevTime = Date.now()), o.x = (image.touchesCurrent.x - o.prevPositionX) / (Date.now() - o.prevTime) / 2, o.y = (image.touchesCurrent.y - o.prevPositionY) / (Date.now() - o.prevTime) / 2, Math.abs(image.touchesCurrent.x - o.prevPositionX) < 2 && (o.x = 0), Math.abs(image.touchesCurrent.y - o.prevPositionY) < 2 && (o.y = 0), o.prevPositionX = image.touchesCurrent.x, o.prevPositionY = image.touchesCurrent.y, o.prevTime = Date.now(), r.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`)
                    }
                },
                onTouchEnd() {
                    const e = this.zoom,
                        {
                            gesture: t,
                            image: image,
                            velocity: n
                        } = e;
                    if (!t.$imageEl || 0 === t.$imageEl.length) return;
                    if (!image.isTouched || !image.isMoved) return image.isTouched = !1, void(image.isMoved = !1);
                    image.isTouched = !1, image.isMoved = !1;
                    let r = 300,
                        o = 300;
                    const l = n.x * r,
                        c = image.currentX + l,
                        d = n.y * o,
                        h = image.currentY + d;
                    0 !== n.x && (r = Math.abs((c - image.currentX) / n.x)), 0 !== n.y && (o = Math.abs((h - image.currentY) / n.y));
                    const f = Math.max(r, o);
                    image.currentX = c, image.currentY = h;
                    const m = image.width * e.scale,
                        v = image.height * e.scale;
                    image.minX = Math.min(t.slideWidth / 2 - m / 2, 0), image.maxX = -image.minX, image.minY = Math.min(t.slideHeight / 2 - v / 2, 0), image.maxY = -image.minY, image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX), image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY), t.$imageWrapEl.transition(f).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`)
                },
                onTransitionEnd() {
                    const e = this,
                        t = e.zoom,
                        {
                            gesture: n
                        } = t;
                    n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
                },
                toggle(e) {
                    const t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in (e) {
                    const t = this,
                        n = t.zoom,
                        r = t.params.zoom,
                        {
                            gesture: o,
                            image: image
                        } = n;
                    if (o.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? o.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : o.$slideEl = t.slides.eq(t.activeIndex), o.$imageEl = o.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), o.$imageWrapEl = o.$imageEl.parent(`.${r.containerClass}`)), !o.$imageEl || 0 === o.$imageEl.length) return;
                    let l, c, d, h, f, m, v, y, w, x, k, T, S, _, C, E, P, $;
                    o.$slideEl.addClass(`${r.zoomedSlideClass}`), void 0 === image.touchesStart.x && e ? (l = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, c = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (l = image.touchesStart.x, c = image.touchesStart.y), n.scale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, n.currentScale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, e ? (P = o.$slideEl[0].offsetWidth, $ = o.$slideEl[0].offsetHeight, d = o.$slideEl.offset().left, h = o.$slideEl.offset().top, f = d + P / 2 - l, m = h + $ / 2 - c, w = o.$imageEl[0].offsetWidth, x = o.$imageEl[0].offsetHeight, k = w * n.scale, T = x * n.scale, S = Math.min(P / 2 - k / 2, 0), _ = Math.min($ / 2 - T / 2, 0), C = -S, E = -_, v = f * n.scale, y = m * n.scale, v < S && (v = S), v > C && (v = C), y < _ && (y = _), y > E && (y = E)) : (v = 0, y = 0), o.$imageWrapEl.transition(300).transform(`translate3d(${v}px, ${y}px,0)`), o.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
                },
                out() {
                    const e = this,
                        t = e.zoom,
                        n = e.params.zoom,
                        {
                            gesture: r
                        } = t;
                    r.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? r.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : r.$slideEl = e.slides.eq(e.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent(`.${n.containerClass}`)), r.$imageEl && 0 !== r.$imageEl.length && (t.scale = 1, t.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass(`${n.zoomedSlideClass}`), r.$slideEl = void 0)
                },
                enable() {
                    const e = this,
                        t = e.zoom;
                    if (t.enabled) return;
                    t.enabled = !0;
                    const n = !("touchstart" !== e.touchEvents.start || !w.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        r = !w.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        o = `.${e.params.slideClass}`;
                    w.gestures ? (e.$wrapperEl.on("gesturestart", o, t.onGestureStart, n), e.$wrapperEl.on("gesturechange", o, t.onGestureChange, n), e.$wrapperEl.on("gestureend", o, t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, o, t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, o, t.onGestureChange, r), e.$wrapperEl.on(e.touchEvents.end, o, t.onGestureEnd, n), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, o, t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, r)
                },
                disable() {
                    const e = this,
                        t = e.zoom;
                    if (!t.enabled) return;
                    e.zoom.enabled = !1;
                    const n = !("touchstart" !== e.touchEvents.start || !w.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        r = !w.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        o = `.${e.params.slideClass}`;
                    w.gestures ? (e.$wrapperEl.off("gesturestart", o, t.onGestureStart, n), e.$wrapperEl.off("gesturechange", o, t.onGestureChange, n), e.$wrapperEl.off("gestureend", o, t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, o, t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, o, t.onGestureChange, r), e.$wrapperEl.off(e.touchEvents.end, o, t.onGestureEnd, n), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, o, t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, r)
                }
            };
            const oe = {
                loadInSlide(e, t = !0) {
                    const n = this,
                        r = n.params.lazy;
                    if (void 0 === e) return;
                    if (0 === n.slides.length) return;
                    const o = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children(`.${n.params.slideClass}[data-swiper-slide-index="${e}"]`) : n.slides.eq(e);
                    let l = o.find(`.${r.elementClass}:not(.${r.loadedClass}):not(.${r.loadingClass})`);
                    !o.hasClass(r.elementClass) || o.hasClass(r.loadedClass) || o.hasClass(r.loadingClass) || (l = l.add(o[0])), 0 !== l.length && l.each(((e, l) => {
                        const c = f(l);
                        c.addClass(r.loadingClass);
                        const d = c.attr("data-background"),
                            h = c.attr("data-src"),
                            m = c.attr("data-srcset"),
                            v = c.attr("data-sizes"),
                            y = c.parent("picture");
                        n.loadImage(c[0], h || d, m, v, !1, (() => {
                            if (null != n && n && (!n || n.params) && !n.destroyed) {
                                if (d ? (c.css("background-image", `url("${d}")`), c.removeAttr("data-background")) : (m && (c.attr("srcset", m), c.removeAttr("data-srcset")), v && (c.attr("sizes", v), c.removeAttr("data-sizes")), y.length && y.children("source").each(((e, t) => {
                                        const n = f(t);
                                        n.attr("data-srcset") && (n.attr("srcset", n.attr("data-srcset")), n.removeAttr("data-srcset"))
                                    })), h && (c.attr("src", h), c.removeAttr("data-src"))), c.addClass(r.loadedClass).removeClass(r.loadingClass), o.find(`.${r.preloaderClass}`).remove(), n.params.loop && t) {
                                    const e = o.attr("data-swiper-slide-index");
                                    if (o.hasClass(n.params.slideDuplicateClass)) {
                                        const t = n.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${n.params.slideDuplicateClass})`);
                                        n.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        const t = n.$wrapperEl.children(`.${n.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                        n.lazy.loadInSlide(t.index(), !1)
                                    }
                                }
                                n.emit("lazyImageReady", o[0], c[0]), n.params.autoHeight && n.updateAutoHeight()
                            }
                        })), n.emit("lazyImageLoad", o[0], c[0])
                    }))
                },
                load() {
                    const e = this,
                        {
                            $wrapperEl: t,
                            params: n,
                            slides: r,
                            activeIndex: o
                        } = e,
                        l = e.virtual && n.virtual.enabled,
                        c = n.lazy;
                    let d = n.slidesPerView;

                    function h(e) {
                        if (l) {
                            if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                        } else if (r[e]) return !0;
                        return !1
                    }

                    function m(e) {
                        return l ? f(e).attr("data-swiper-slide-index") : f(e).index()
                    }
                    if ("auto" === d && (d = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(`.${n.slideVisibleClass}`).each(((t, n) => {
                        const r = l ? f(n).attr("data-swiper-slide-index") : f(n).index();
                        e.lazy.loadInSlide(r)
                    }));
                    else if (d > 1)
                        for (let i = o; i < o + d; i += 1) h(i) && e.lazy.loadInSlide(i);
                    else e.lazy.loadInSlide(o);
                    if (c.loadPrevNext)
                        if (d > 1 || c.loadPrevNextAmount && c.loadPrevNextAmount > 1) {
                            const t = c.loadPrevNextAmount,
                                n = d,
                                l = Math.min(o + n + Math.max(t, n), r.length),
                                f = Math.max(o - Math.max(n, t), 0);
                            for (let i = o + d; i < l; i += 1) h(i) && e.lazy.loadInSlide(i);
                            for (let i = f; i < o; i += 1) h(i) && e.lazy.loadInSlide(i)
                        } else {
                            const r = t.children(`.${n.slideNextClass}`);
                            r.length > 0 && e.lazy.loadInSlide(m(r));
                            const o = t.children(`.${n.slidePrevClass}`);
                            o.length > 0 && e.lazy.loadInSlide(m(o))
                        }
                }
            };
            const se = {
                LinearSpline: function(e, t) {
                    const n = function() {
                        let e, t, n;
                        return (r, o) => {
                            for (t = -1, e = r.length; e - t > 1;) n = e + t >> 1, r[n] <= o ? t = n : e = n;
                            return e
                        }
                    }();
                    let r, o;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (o = n(this.x, e), r = o - 1, (e - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0
                    }, this
                },
                getInterpolateFunction(e) {
                    const t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new se.LinearSpline(t.slidesGrid, e.slidesGrid) : new se.LinearSpline(t.snapGrid, e.snapGrid))
                },
                setTranslate(e, t) {
                    const n = this,
                        r = n.controller.control;
                    let o, l;

                    function c(e) {
                        const t = n.rtlTranslate ? -n.translate : n.translate;
                        "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e), l = -n.controller.spline.interpolate(-t)), l && "container" !== n.params.controller.by || (o = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), l = (t - n.minTranslate()) * o + e.minTranslate()), n.params.controller.inverse && (l = e.maxTranslate() - l), e.updateProgress(l), e.setTranslate(l, n), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(r))
                        for (let i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof H && c(r[i]);
                    else r instanceof H && t !== r && c(r)
                },
                setTransition(e, t) {
                    const n = this,
                        r = n.controller.control;
                    let i;

                    function o(t) {
                        t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && y.nextTick((() => {
                            t.updateAutoHeight()
                        })), t.$wrapperEl.transitionEnd((() => {
                            r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                        })))
                    }
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof H && o(r[i]);
                    else r instanceof H && t !== r && o(r)
                }
            };
            const le = {
                makeElFocusable: e => (e.attr("tabIndex", "0"), e),
                makeElNotFocusable: e => (e.attr("tabIndex", "-1"), e),
                addElRole: (e, t) => (e.attr("role", t), e),
                addElLabel: (e, label) => (e.attr("aria-label", label), e),
                disableEl: e => (e.attr("aria-disabled", !0), e),
                enableEl: e => (e.attr("aria-disabled", !1), e),
                onEnterKey(e) {
                    const t = this,
                        n = t.params.a11y;
                    if (13 !== e.keyCode) return;
                    const r = f(e.target);
                    t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && r.is(`.${t.params.pagination.bulletClass}`) && r[0].click()
                },
                notify(e) {
                    const t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation() {
                    const e = this;
                    if (e.params.loop || !e.navigation) return;
                    const {
                        $nextEl: t,
                        $prevEl: n
                    } = e.navigation;
                    n && n.length > 0 && (e.isBeginning ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n))), t && t.length > 0 && (e.isEnd ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t)) : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)))
                },
                updatePagination() {
                    const e = this,
                        t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(((n, r) => {
                        const o = f(r);
                        e.a11y.makeElFocusable(o), e.a11y.addElRole(o, "button"), e.a11y.addElLabel(o, t.paginationBulletMessage.replace(/\{\{index\}\}/, o.index() + 1))
                    }))
                },
                init() {
                    const e = this;
                    e.$el.append(e.a11y.liveRegion);
                    const t = e.params.a11y;
                    let n, r;
                    e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.nextSlideMessage), n.on("keydown", e.a11y.onEnterKey)), r && (e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.prevSlideMessage), r.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
                },
                destroy() {
                    const e = this;
                    let t, n;
                    e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), n && n.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
                }
            };
            const ce = {
                init() {
                    const e = this;
                    if (!e.params.history) return;
                    if (!d.history || !d.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    const t = e.history;
                    t.initialized = !0, t.paths = ce.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || d.addEventListener("popstate", e.history.setHistoryPopState))
                },
                destroy() {
                    const e = this;
                    e.params.history.replaceState || d.removeEventListener("popstate", e.history.setHistoryPopState)
                },
                setHistoryPopState() {
                    const e = this;
                    e.history.paths = ce.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
                },
                getPathValues() {
                    const e = d.location.pathname.slice(1).split("/").filter((e => "" !== e)),
                        t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory(e, t) {
                    const n = this;
                    if (!n.history.initialized || !n.params.history.enabled) return;
                    const r = n.slides.eq(t);
                    let o = ce.slugify(r.attr("data-history"));
                    d.location.pathname.includes(e) || (o = `${e}/${o}`);
                    const l = d.history.state;
                    l && l.value === o || (n.params.history.replaceState ? d.history.replaceState({
                        value: o
                    }, null, o) : d.history.pushState({
                        value: o
                    }, null, o))
                },
                slugify: text => text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                scrollToSlide(e, t, n) {
                    const r = this;
                    if (t)
                        for (let i = 0, o = r.slides.length; i < o; i += 1) {
                            const o = r.slides.eq(i);
                            if (ce.slugify(o.attr("data-history")) === t && !o.hasClass(r.params.slideDuplicateClass)) {
                                const t = o.index();
                                r.slideTo(t, e, n)
                            }
                        } else r.slideTo(0, e, n)
                }
            };
            const ue = {
                onHashCange() {
                    const e = this;
                    e.emit("hashChange");
                    const t = l.location.hash.replace("#", "");
                    if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                        const n = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                        if (void 0 === n) return;
                        e.slideTo(n)
                    }
                },
                setHash() {
                    const e = this;
                    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && d.history && d.history.replaceState) d.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), e.emit("hashSet");
                        else {
                            const t = e.slides.eq(e.activeIndex),
                                n = t.attr("data-hash") || t.attr("data-history");
                            l.location.hash = n || "", e.emit("hashSet")
                        }
                },
                init() {
                    const e = this;
                    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                    e.hashNavigation.initialized = !0;
                    const t = l.location.hash.replace("#", "");
                    if (t) {
                        const n = 0;
                        for (let i = 0, r = e.slides.length; i < r; i += 1) {
                            const r = e.slides.eq(i);
                            if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                                const t = r.index();
                                e.slideTo(t, n, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    }
                    e.params.hashNavigation.watchState && f(d).on("hashchange", e.hashNavigation.onHashCange)
                },
                destroy() {
                    const e = this;
                    e.params.hashNavigation.watchState && f(d).off("hashchange", e.hashNavigation.onHashCange)
                }
            };
            const de = {
                run() {
                    const e = this,
                        t = e.slides.eq(e.activeIndex);
                    let n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = y.nextTick((() => {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                    }), n)
                },
                start() {
                    const e = this;
                    return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
                },
                stop() {
                    const e = this;
                    return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
                },
                pause(e) {
                    const t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            };
            const pe = {
                setTranslate() {
                    const e = this,
                        {
                            slides: t
                        } = e;
                    for (let i = 0; i < t.length; i += 1) {
                        const t = e.slides.eq(i);
                        let n = -t[0].swiperSlideOffset;
                        e.params.virtualTranslate || (n -= e.translate);
                        let r = 0;
                        e.isHorizontal() || (r = n, n = 0);
                        const o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        t.css({
                            opacity: o
                        }).transform(`translate3d(${n}px, ${r}px, 0px)`)
                    }
                },
                setTransition(e) {
                    const t = this,
                        {
                            slides: n,
                            $wrapperEl: r
                        } = t;
                    if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                        let e = !1;
                        n.transitionEnd((() => {
                            if (e) return;
                            if (!t || t.destroyed) return;
                            e = !0, t.animating = !1;
                            const n = ["webkitTransitionEnd", "transitionend"];
                            for (let i = 0; i < n.length; i += 1) r.trigger(n[i])
                        }))
                    }
                }
            };
            const he = {
                setTranslate() {
                    const e = this,
                        {
                            $el: t,
                            $wrapperEl: n,
                            slides: r,
                            width: o,
                            height: l,
                            rtlTranslate: c,
                            size: d
                        } = e,
                        h = e.params.cubeEffect,
                        m = e.isHorizontal(),
                        v = e.virtual && e.params.virtual.enabled;
                    let y, w = 0;
                    h.shadow && (m ? (y = n.find(".swiper-cube-shadow"), 0 === y.length && (y = f('<div class="swiper-cube-shadow"></div>'), n.append(y)), y.css({
                        height: `${o}px`
                    })) : (y = t.find(".swiper-cube-shadow"), 0 === y.length && (y = f('<div class="swiper-cube-shadow"></div>'), t.append(y))));
                    for (let i = 0; i < r.length; i += 1) {
                        const e = r.eq(i);
                        let t = i;
                        v && (t = parseInt(e.attr("data-swiper-slide-index"), 10));
                        let n = 90 * t,
                            o = Math.floor(n / 360);
                        c && (n = -n, o = Math.floor(-n / 360));
                        const progress = Math.max(Math.min(e[0].progress, 1), -1);
                        let l = 0,
                            y = 0,
                            x = 0;
                        t % 4 == 0 ? (l = 4 * -o * d, x = 0) : (t - 1) % 4 == 0 ? (l = 0, x = 4 * -o * d) : (t - 2) % 4 == 0 ? (l = d + 4 * o * d, x = d) : (t - 3) % 4 == 0 && (l = -d, x = 3 * d + 4 * d * o), c && (l = -l), m || (y = l, l = 0);
                        const k = `rotateX(${m?0:-n}deg) rotateY(${m?n:0}deg) translate3d(${l}px, ${y}px, ${x}px)`;
                        if (progress <= 1 && progress > -1 && (w = 90 * t + 90 * progress, c && (w = 90 * -t - 90 * progress)), e.transform(k), h.slideShadows) {
                            let t = m ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                n = m ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = f(`<div class="swiper-slide-shadow-${m?"left":"top"}"></div>`), e.append(t)), 0 === n.length && (n = f(`<div class="swiper-slide-shadow-${m?"right":"bottom"}"></div>`), e.append(n)), t.length && (t[0].style.opacity = Math.max(-progress, 0)), n.length && (n[0].style.opacity = Math.max(progress, 0))
                        }
                    }
                    if (n.css({
                            "-webkit-transform-origin": `50% 50% -${d/2}px`,
                            "-moz-transform-origin": `50% 50% -${d/2}px`,
                            "-ms-transform-origin": `50% 50% -${d/2}px`,
                            "transform-origin": `50% 50% -${d/2}px`
                        }), h.shadow)
                        if (m) y.transform(`translate3d(0px, ${o/2+h.shadowOffset}px, ${-o/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);
                        else {
                            const e = Math.abs(w) - 90 * Math.floor(Math.abs(w) / 90),
                                t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                n = h.shadowScale,
                                r = h.shadowScale / t,
                                o = h.shadowOffset;
                            y.transform(`scale3d(${n}, 1, ${r}) translate3d(0px, ${l/2+o}px, ${-l/2/r}px) rotateX(-90deg)`)
                        }
                    const x = U.isSafari || U.isWebView ? -d / 2 : 0;
                    n.transform(`translate3d(0px,0,${x}px) rotateX(${e.isHorizontal()?0:w}deg) rotateY(${e.isHorizontal()?-w:0}deg)`)
                },
                setTransition(e) {
                    const t = this,
                        {
                            $el: n,
                            slides: r
                        } = t;
                    r.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
                }
            };
            const fe = {
                setTranslate() {
                    const e = this,
                        {
                            slides: t,
                            rtlTranslate: n
                        } = e;
                    for (let i = 0; i < t.length; i += 1) {
                        const r = t.eq(i);
                        let progress = r[0].progress;
                        e.params.flipEffect.limitRotation && (progress = Math.max(Math.min(r[0].progress, 1), -1));
                        let o = -180 * progress,
                            l = 0,
                            c = -r[0].swiperSlideOffset,
                            d = 0;
                        if (e.isHorizontal() ? n && (o = -o) : (d = c, c = 0, l = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(progress)) + t.length, e.params.flipEffect.slideShadows) {
                            let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                n = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = f(`<div class="swiper-slide-shadow-${e.isHorizontal()?"left":"top"}"></div>`), r.append(t)), 0 === n.length && (n = f(`<div class="swiper-slide-shadow-${e.isHorizontal()?"right":"bottom"}"></div>`), r.append(n)), t.length && (t[0].style.opacity = Math.max(-progress, 0)), n.length && (n[0].style.opacity = Math.max(progress, 0))
                        }
                        r.transform(`translate3d(${c}px, ${d}px, 0px) rotateX(${l}deg) rotateY(${o}deg)`)
                    }
                },
                setTransition(e) {
                    const t = this,
                        {
                            slides: n,
                            activeIndex: r,
                            $wrapperEl: o
                        } = t;
                    if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        let e = !1;
                        n.eq(r).transitionEnd((function() {
                            if (e) return;
                            if (!t || t.destroyed) return;
                            e = !0, t.animating = !1;
                            const n = ["webkitTransitionEnd", "transitionend"];
                            for (let i = 0; i < n.length; i += 1) o.trigger(n[i])
                        }))
                    }
                }
            };
            const me = {
                setTranslate() {
                    const e = this,
                        {
                            width: t,
                            height: n,
                            slides: r,
                            $wrapperEl: o,
                            slidesSizesGrid: l
                        } = e,
                        c = e.params.coverflowEffect,
                        d = e.isHorizontal(),
                        h = e.translate,
                        m = d ? t / 2 - h : n / 2 - h,
                        v = d ? c.rotate : -c.rotate,
                        y = c.depth;
                    for (let i = 0, e = r.length; i < e; i += 1) {
                        const e = r.eq(i),
                            t = l[i],
                            n = (m - e[0].swiperSlideOffset - t / 2) / t * c.modifier;
                        let o = d ? v * n : 0,
                            h = d ? 0 : v * n,
                            w = -y * Math.abs(n),
                            x = c.stretch;
                        "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(c.stretch) / 100 * t);
                        let k = d ? 0 : x * n,
                            T = d ? x * n : 0,
                            S = 1 - (1 - c.scale) * Math.abs(n);
                        Math.abs(T) < .001 && (T = 0), Math.abs(k) < .001 && (k = 0), Math.abs(w) < .001 && (w = 0), Math.abs(o) < .001 && (o = 0), Math.abs(h) < .001 && (h = 0), Math.abs(S) < .001 && (S = 0);
                        const _ = `translate3d(${T}px,${k}px,${w}px)  rotateX(${h}deg) rotateY(${o}deg) scale(${S})`;
                        if (e.transform(_), e[0].style.zIndex = 1 - Math.abs(Math.round(n)), c.slideShadows) {
                            let t = d ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                r = d ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = f(`<div class="swiper-slide-shadow-${d?"left":"top"}"></div>`), e.append(t)), 0 === r.length && (r = f(`<div class="swiper-slide-shadow-${d?"right":"bottom"}"></div>`), e.append(r)), t.length && (t[0].style.opacity = n > 0 ? n : 0), r.length && (r[0].style.opacity = -n > 0 ? -n : 0)
                        }
                    }
                    if (w.pointerEvents || w.prefixedPointerEvents) {
                        o[0].style.perspectiveOrigin = `${m}px 50%`
                    }
                },
                setTransition(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            };
            const ge = {
                init() {
                    const e = this,
                        {
                            thumbs: t
                        } = e.params,
                        n = e.constructor;
                    t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, y.extend(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), y.extend(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : y.isObject(t.swiper) && (e.thumbs.swiper = new n(y.extend({}, t.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                },
                onThumbClick() {
                    const e = this,
                        t = e.thumbs.swiper;
                    if (!t) return;
                    const n = t.clickedIndex,
                        r = t.clickedSlide;
                    if (r && f(r).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
                    if (null == n) return;
                    let o;
                    if (o = t.params.loop ? parseInt(f(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                        let t = e.activeIndex;
                        e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                        const n = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${o}"]`).eq(0).index(),
                            r = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${o}"]`).eq(0).index();
                        o = void 0 === n ? r : void 0 === r ? n : r - t < t - n ? r : n
                    }
                    e.slideTo(o)
                },
                update(e) {
                    const t = this,
                        n = t.thumbs.swiper;
                    if (!n) return;
                    const r = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                        o = t.params.thumbs.autoScrollOffset,
                        l = o && !n.params.loop;
                    if (t.realIndex !== n.realIndex || l) {
                        let c, d, h = n.activeIndex;
                        if (n.params.loop) {
                            n.slides.eq(h).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, h = n.activeIndex);
                            const e = n.slides.eq(h).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                                r = n.slides.eq(h).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                            c = void 0 === e ? r : void 0 === r ? e : r - h == h - e ? h : r - h < h - e ? r : e, d = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else c = t.realIndex, d = c > t.previousIndex ? "next" : "prev";
                        l && (c += "next" === d ? o : -1 * o), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(c) < 0 && (n.params.centeredSlides ? c = c > h ? c - Math.floor(r / 2) + 1 : c + Math.floor(r / 2) - 1 : c > h && (c = c - r + 1), n.slideTo(c, e ? 0 : void 0))
                    }
                    let c = 1;
                    const d = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (c = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (c = 1), c = Math.floor(c), n.slides.removeClass(d), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                        for (let i = 0; i < c; i += 1) n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+i}"]`).addClass(d);
                    else
                        for (let i = 0; i < c; i += 1) n.slides.eq(t.realIndex + i).addClass(d)
                }
            };
            const ve = [F, V, Y, G, X, J, Z, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: ee.enable.bind(e),
                            disable: ee.disable.bind(e),
                            handle: ee.handle.bind(e),
                            handleMouseEnter: ee.handleMouseEnter.bind(e),
                            handleMouseLeave: ee.handleMouseLeave.bind(e),
                            animateSlider: ee.animateSlider.bind(e),
                            releaseScroll: ee.releaseScroll.bind(e),
                            lastScrollTime: y.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: []
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                    },
                    destroy() {
                        const e = this;
                        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        navigation: {
                            init: te.init.bind(e),
                            update: te.update.bind(e),
                            destroy: te.destroy.bind(e),
                            onNextClick: te.onNextClick.bind(e),
                            onPrevClick: te.onPrevClick.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge() {
                        this.navigation.update()
                    },
                    fromEdge() {
                        this.navigation.update()
                    },
                    destroy() {
                        this.navigation.destroy()
                    },
                    click(e) {
                        const t = this,
                            {
                                $nextEl: n,
                                $prevEl: r
                            } = t.navigation;
                        if (t.params.navigation.hideOnClick && !f(e.target).is(r) && !f(e.target).is(n)) {
                            let e;
                            n ? e = n.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t), n && n.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
                        }
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        pagination: {
                            init: ne.init.bind(e),
                            render: ne.render.bind(e),
                            update: ne.update.bind(e),
                            destroy: ne.destroy.bind(e),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.pagination.init(), e.pagination.render(), e.pagination.update()
                    },
                    activeIndexChange() {
                        const e = this;
                        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                    },
                    snapIndexChange() {
                        const e = this;
                        e.params.loop || e.pagination.update()
                    },
                    slidesLengthChange() {
                        const e = this;
                        e.params.loop && (e.pagination.render(), e.pagination.update())
                    },
                    snapGridLengthChange() {
                        const e = this;
                        e.params.loop || (e.pagination.render(), e.pagination.update())
                    },
                    destroy() {
                        this.pagination.destroy()
                    },
                    click(e) {
                        const t = this;
                        if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !f(e.target).hasClass(t.params.pagination.bulletClass)) {
                            !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                        }
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        scrollbar: {
                            init: re.init.bind(e),
                            destroy: re.destroy.bind(e),
                            updateSize: re.updateSize.bind(e),
                            setTranslate: re.setTranslate.bind(e),
                            setTransition: re.setTransition.bind(e),
                            enableDraggable: re.enableDraggable.bind(e),
                            disableDraggable: re.disableDraggable.bind(e),
                            setDragPosition: re.setDragPosition.bind(e),
                            getPointerPosition: re.getPointerPosition.bind(e),
                            onDragStart: re.onDragStart.bind(e),
                            onDragMove: re.onDragMove.bind(e),
                            onDragEnd: re.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                    },
                    update() {
                        this.scrollbar.updateSize()
                    },
                    resize() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy() {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        parallax: {
                            setTransform: ie.setTransform.bind(e),
                            setTranslate: ie.setTranslate.bind(e),
                            setTransition: ie.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    init() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTranslate() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTransition(e) {
                        this.params.parallax.enabled && this.parallax.setTransition(e)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create() {
                    const e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((n => {
                        t[n] = ae[n].bind(e)
                    })), y.extend(e, {
                        zoom: t
                    });
                    let n = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: () => n,
                        set(t) {
                            if (n !== t) {
                                const n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                    r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, n, r)
                            }
                            n = t
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.zoom.enabled && e.zoom.enable()
                    },
                    destroy() {
                        this.zoom.disable()
                    },
                    touchStart(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap(e) {
                        const t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                    },
                    transitionEnd() {
                        const e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                    },
                    slideChange() {
                        const e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: oe.load.bind(e),
                            loadInSlide: oe.loadInSlide.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    },
                    init() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                    },
                    scroll() {
                        const e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                    },
                    resize() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    scrollbarDragMove() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    transitionStart() {
                        const e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                    },
                    slideChange() {
                        const e = this;
                        e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: se.getInterpolateFunction.bind(e),
                            setTranslate: se.setTranslate.bind(e),
                            setTransition: se.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    update() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    resize() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    observerUpdate() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    setTranslate(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t)
                    },
                    setTransition(e, t) {
                        this.controller.control && this.controller.setTransition(e, t)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        a11y: {
                            liveRegion: f(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                        }
                    }), Object.keys(le).forEach((t => {
                        e.a11y[t] = le[t].bind(e)
                    }))
                },
                on: {
                    init() {
                        const e = this;
                        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                    },
                    toEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        history: {
                            init: ce.init.bind(e),
                            setHistory: ce.setHistory.bind(e),
                            setHistoryPopState: ce.setHistoryPopState.bind(e),
                            scrollToSlide: ce.scrollToSlide.bind(e),
                            destroy: ce.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.history.enabled && e.history.init()
                    },
                    destroy() {
                        const e = this;
                        e.params.history.enabled && e.history.destroy()
                    },
                    transitionEnd() {
                        const e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                    },
                    slideChange() {
                        const e = this;
                        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: ue.init.bind(e),
                            destroy: ue.destroy.bind(e),
                            setHash: ue.setHash.bind(e),
                            onHashCange: ue.onHashCange.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init()
                    },
                    destroy() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                    },
                    transitionEnd() {
                        const e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash()
                    },
                    slideChange() {
                        const e = this;
                        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: de.run.bind(e),
                            start: de.start.bind(e),
                            stop: de.stop.bind(e),
                            pause: de.pause.bind(e),
                            onVisibilityChange() {
                                "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                            },
                            onTransitionEnd(t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                    },
                    beforeTransitionStart(e, t) {
                        const n = this;
                        n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
                    },
                    sliderFirstMove() {
                        const e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                    },
                    touchEnd() {
                        const e = this;
                        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                    },
                    destroy() {
                        const e = this;
                        e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        fadeEffect: {
                            setTranslate: pe.setTranslate.bind(e),
                            setTransition: pe.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("fade" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}fade`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        y.extend(e.params, t), y.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        cubeEffect: {
                            setTranslate: he.setTranslate.bind(e),
                            setTransition: he.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("cube" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}cube`), e.classNames.push(`${e.params.containerModifierClass}3d`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        y.extend(e.params, t), y.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        flipEffect: {
                            setTranslate: fe.setTranslate.bind(e),
                            setTransition: fe.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("flip" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}flip`), e.classNames.push(`${e.params.containerModifierClass}3d`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        y.extend(e.params, t), y.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        coverflowEffect: {
                            setTranslate: me.setTranslate.bind(e),
                            setTransition: me.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        "coverflow" === e.params.effect && (e.classNames.push(`${e.params.containerModifierClass}coverflow`), e.classNames.push(`${e.params.containerModifierClass}3d`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                    }
                }
            }, {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create() {
                    const e = this;
                    y.extend(e, {
                        thumbs: {
                            swiper: null,
                            init: ge.init.bind(e),
                            update: ge.update.bind(e),
                            onThumbClick: ge.onThumbClick.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this,
                            {
                                thumbs: t
                            } = e.params;
                        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                    },
                    slideChange() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    update() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    resize() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    observerUpdate() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    setTransition(e) {
                        const t = this.thumbs.swiper;
                        t && t.setTransition(e)
                    },
                    beforeDestroy() {
                        const e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy()
                    }
                }
            }];
            void 0 === H.use && (H.use = H.Class.use, H.installModule = H.Class.installModule), H.use(ve);
            t.default = H
        },
        27: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return vt
            })), n.d(t, "a", (function() {
                return M.a
            }));
            var r = {};
            n.r(r), n.d(r, "Breadcrumb", (function() {
                return U
            })), n.d(r, "ChooseUs", (function() {
                return Y
            })), n.d(r, "ContactForm", (function() {
                return G
            })), n.d(r, "ContactInfo", (function() {
                return W
            })), n.d(r, "ContactMap", (function() {
                return X
            })), n.d(r, "CounterUp", (function() {
                return K
            })), n.d(r, "FaqArea", (function() {
                return J
            })), n.d(r, "Login", (function() {
                return Q
            })), n.d(r, "MyAccount", (function() {
                return Z
            })), n.d(r, "PaymentInfo", (function() {
                return ee
            })), n.d(r, "PricingArea", (function() {
                return te
            })), n.d(r, "ProfileArea", (function() {
                return ne
            })), n.d(r, "Register", (function() {
                return re
            })), n.d(r, "SingleTeam", (function() {
                return ie
            })), n.d(r, "ButtonsBtnDefault", (function() {
                return ae
            })), n.d(r, "ButtonsVideoButton", (function() {
                return oe
            })), n.d(r, "FooterBrandLogo", (function() {
                return se
            })), n.d(r, "FooterBottom", (function() {
                return le
            })), n.d(r, "FooterTop", (function() {
                return ce
            })), n.d(r, "HeaderSearch", (function() {
                return ue
            })), n.d(r, "HeaderMainHeader", (function() {
                return de
            })), n.d(r, "HeaderMainMenu", (function() {
                return pe
            })), n.d(r, "HeaderMobileMenu", (function() {
                return he
            })), n.d(r, "HeaderNotification", (function() {
                return fe
            })), n.d(r, "HeaderOffcanvasSidebar", (function() {
                return me
            })), n.d(r, "HeaderProfile", (function() {
                return ge
            })), n.d(r, "BannerHorrorSeriesBanner", (function() {
                return ve
            })), n.d(r, "BannerMovieBannerSlider", (function() {
                return ye
            })), n.d(r, "BannerMovieBannerSliderHorror", (function() {
                return be
            })), n.d(r, "BannerMovieBannerSliderRomantic", (function() {
                return we
            })), n.d(r, "BannerMovieBannerThree", (function() {
                return xe
            })), n.d(r, "BannerMovieBannerTwo", (function() {
                return ke
            })), n.d(r, "BannerRomanticSeriesBanner", (function() {
                return Te
            })), n.d(r, "BannerSeriesBannerOne", (function() {
                return Se
            })), n.d(r, "BannerSeriesBannerSlider", (function() {
                return _e
            })), n.d(r, "BannerSeriesBannerThree", (function() {
                return Ce
            })), n.d(r, "BannerSeriesBannerTwo", (function() {
                return Ee
            })), n.d(r, "HeroOne", (function() {
                return Pe
            })), n.d(r, "HeroTwo", (function() {
                return $e
            })), n.d(r, "Logo", (function() {
                return Oe
            })), n.d(r, "MovieAllHorrorMovie", (function() {
                return Me
            })), n.d(r, "MovieAllRomanticMovie", (function() {
                return Ae
            })), n.d(r, "MovieAwardedMovie", (function() {
                return Ie
            })), n.d(r, "MovieComedyMovie", (function() {
                return Le
            })), n.d(r, "MovieHorrorMovie", (function() {
                return je
            })), n.d(r, "MovieOldMovie", (function() {
                return ze
            })), n.d(r, "MoviePopularMovie", (function() {
                return Ne
            })), n.d(r, "MovieRecentMovie", (function() {
                return De
            })), n.d(r, "MovieTrendingMovie", (function() {
                return Re
            })), n.d(r, "MovieWatchWithFamilyMovie", (function() {
                return Be
            })), n.d(r, "ProductDetails", (function() {
                return He
            })), n.d(r, "ProductSlider", (function() {
                return Fe
            })), n.d(r, "ProductSingleProduct", (function() {
                return qe
            })), n.d(r, "SeriesComedySeries", (function() {
                return Ve
            })), n.d(r, "SeriesHorrorSeries", (function() {
                return Ue
            })), n.d(r, "SeriesPopularSeries", (function() {
                return Ye
            })), n.d(r, "SeriesTrendingSeries", (function() {
                return Ge
            })), n.d(r, "TitleSectionTitle", (function() {
                return We
            })), n.d(r, "TitleSectionTitleTwo", (function() {
                return Xe
            })), n.d(r, "VideoWorks", (function() {
                return Ke
            }));
            n(53), n(45), n(46), n(96), n(42), n(97);
            var o = n(9),
                l = n(37),
                c = (n(71), n(36), n(15), n(54), n(31), n(74), n(1)),
                d = n(73),
                h = n(181),
                f = n(128),
                m = n.n(f),
                v = n(55),
                y = n.n(v),
                w = (n(29), n(30), n(129)),
                x = n(14),
                k = n(0);
            "scrollRestoration" in window.history && (Object(k.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(k.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(k.u)("manual")
            })));

            function T(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function S(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? T(Object(source), !0).forEach((function(t) {
                        Object(l.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : T(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var _ = function() {};
            c.default.use(w.a);
            var C = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(e, t, n) {
                    var r = !1,
                        o = e !== t;
                    n ? r = n : o && function(e) {
                        var t = Object(k.h)(e);
                        if (1 === t.length) {
                            var n = t[0].options;
                            return !1 !== (void 0 === n ? {} : n).scrollToTop
                        }
                        return t.some((function(e) {
                            var t = e.options;
                            return t && t.scrollToTop
                        }))
                    }(e) && (r = {
                        x: 0,
                        y: 0
                    });
                    var l = window.$nuxt;
                    return (!o || e.path === t.path && e.hash !== t.hash) && l.$nextTick((function() {
                        return l.$emit("triggerScroll")
                    })), new Promise((function(t) {
                        l.$once("triggerScroll", (function() {
                            if (e.hash) {
                                var n = e.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    document.querySelector(n) && (r = {
                                        selector: n
                                    })
                                } catch (e) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            t(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/about",
                    component: function() {
                        return Object(k.n)(Promise.all([n.e(7), n.e(66)]).then(n.bind(null, 412)))
                    },
                    name: "about"
                }, {
                    path: "/account",
                    component: function() {
                        return Object(k.n)(n.e(67).then(n.bind(null, 413)))
                    },
                    name: "account"
                }, {
                    path: "/contact",
                    component: function() {
                        return Object(k.n)(n.e(68).then(n.bind(null, 414)))
                    },
                    name: "contact"
                }, {
                    path: "/faq",
                    component: function() {
                        return Object(k.n)(n.e(69).then(n.bind(null, 415)))
                    },
                    name: "faq"
                }, {
                    path: "/home",
                    component: function() {
                        return Object(k.n)(Promise.all([n.e(0), n.e(70)]).then(n.bind(null, 416)))
                    },
                    name: "home"
                }, {
                    path: "/login",
                    component: function() {
                        return Object(k.n)(n.e(72).then(n.bind(null, 417)))
                    },
                    name: "login"
                }, {
                    path: "/movie",
                    component: function() {
                        return Object(k.n)(n.e(75).then(n.bind(null, 418)))
                    },
                    name: "movie"
                }, {
                    path: "/payment",
                    component: function() {
                        return Object(k.n)(n.e(77).then(n.bind(null, 419)))
                    },
                    name: "payment"
                }, {
                    path: "/pricing",
                    component: function() {
                        return Object(k.n)(n.e(78).then(n.bind(null, 420)))
                    },
                    name: "pricing"
                }, {
                    path: "/profile",
                    component: function() {
                        return Object(k.n)(Promise.all([n.e(0), n.e(79)]).then(n.bind(null, 421)))
                    },
                    name: "profile"
                }, {
                    path: "/register",
                    component: function() {
                        return Object(k.n)(n.e(80).then(n.bind(null, 422)))
                    },
                    name: "register"
                }, {
                    path: "/series",
                    component: function() {
                        return Object(k.n)(n.e(83).then(n.bind(null, 423)))
                    },
                    name: "series"
                }, {
                    path: "/movie/horror",
                    component: function() {
                        return Object(k.n)(n.e(74).then(n.bind(null, 424)))
                    },
                    name: "movie-horror"
                }, {
                    path: "/movie/romantic",
                    component: function() {
                        return Object(k.n)(n.e(76).then(n.bind(null, 425)))
                    },
                    name: "movie-romantic"
                }, {
                    path: "/series/horror",
                    component: function() {
                        return Object(k.n)(n.e(82).then(n.bind(null, 426)))
                    },
                    name: "series-horror"
                }, {
                    path: "/series/romantic",
                    component: function() {
                        return Object(k.n)(n.e(84).then(n.bind(null, 427)))
                    },
                    name: "series-romantic"
                }, {
                    path: "/movie/:slug",
                    component: function() {
                        return Object(k.n)(Promise.all([n.e(0), n.e(1), n.e(73)]).then(n.bind(null, 428)))
                    },
                    name: "movie-slug"
                }, {
                    path: "/series/:slug",
                    component: function() {
                        return Object(k.n)(Promise.all([n.e(1), n.e(81)]).then(n.bind(null, 429)))
                    },
                    name: "series-slug"
                }, {
                    path: "/",
                    component: function() {
                        return Object(k.n)(Promise.all([n.e(0), n.e(71)]).then(n.bind(null, 430)))
                    },
                    name: "index"
                }],
                fallback: !1
            };

            function E(e, t) {
                var base = t._app && t._app.basePath || C.base,
                    n = new w.a(S(S({}, C), {}, {
                        base: base
                    })),
                    r = n.push;
                n.push = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, e, t, n)
                };
                var o = n.resolve.bind(n);
                return n.resolve = function(e, t, n) {
                    return "string" == typeof e && (e = Object(x.d)(e)), o(e, t, n)
                }, n
            }
            var P = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(e, t) {
                        var n = t.parent,
                            data = t.data,
                            r = t.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var l = n, c = n.$nuxt.nuxt.transitions, d = n.$nuxt.nuxt.defaultTransition, h = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && h++, n = n.$parent;
                        data.nuxtChildDepth = h;
                        var f = c[h] || d,
                            m = {};
                        $.forEach((function(e) {
                            void 0 !== f[e] && (m[e] = f[e])
                        }));
                        var v = {};
                        O.forEach((function(e) {
                            "function" == typeof f[e] && (v[e] = f[e].bind(l))
                        }));
                        var y = v.beforeEnter;
                        if (v.beforeEnter = function(e) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), y) return y.call(l, e)
                            }, !1 === f.css) {
                            var w = v.leave;
                            (!w || w.length < 2) && (v.leave = function(e, t) {
                                w && w.call(l, e), l.$nextTick(t)
                            })
                        }
                        var x = o("routerView", data);
                        return r.keepAlive && (x = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [x])), o("transition", {
                            props: m,
                            on: v
                        }, [x])
                    }
                },
                $ = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                O = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                M = n(38),
                A = n(21),
                I = (n(104), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: P,
                        NuxtError: M.a
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(e) {
                        this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(k.c)(this.$route.matched[0].path)(this.$route.params);
                            var e = Object(A.a)(this.$route.matched, 1)[0];
                            if (!e) return this.$route.path;
                            var t = e.components.default;
                            if (t && t.options) {
                                var n = t.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(e) {
                        var t = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return t.errorFromNuxtError = !1
                        })), e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return t.displayingNuxtError = !1
                        })), e(M.a, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : e("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                L = (n(59), n(64), n(69), n(70), n(56), n(57), n(72), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                        },
                        start: function() {
                            var e = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return e.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(e) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(e))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(e) {
                            return this.percent = Math.min(100, Math.floor(this.percent + e)), this
                        },
                        decrease: function(e) {
                            return this.percent = Math.max(0, Math.floor(this.percent - e)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var e = this;
                            return this.clear(), setTimeout((function() {
                                e.show = !1, e.$nextTick((function() {
                                    e.percent = 0, e.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(e) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var e = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut), e.continuous && (e.percent >= 100 || e.percent <= 0) && (e.skipTimerCount = 1, e.reversed = !e.reversed))
                            }), 100)
                        }
                    },
                    render: function(e) {
                        var t = e(!1);
                        return this.show && (t = e("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), t
                    }
                }),
                j = (n(234), n(28)),
                z = Object(j.a)(L, undefined, undefined, !1, null, null, null).exports,
                N = (n(236), n(238), n(244), Object(j.a)({}, (function() {
                    var e = this.$createElement;
                    return (this._self._c || e)("Nuxt")
                }), [], !1, null, null, null).exports);

            function D(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return R(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, l = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }
            var B = {
                    _default: Object(k.s)(N)
                },
                H = {
                    render: function(e, t) {
                        var n = e("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = e(this.layout || "nuxt"),
                            o = e("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            l = e("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(e) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return e("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, l])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var e = this;
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.$loading = e.$refs.loading, !e.isPreview) {
                                            t.next = 9;
                                            break
                                        }
                                        if (!e.$store || !e.$store._actions.nuxtServerInit) {
                                            t.next = 6;
                                            break
                                        }
                                        return e.$loading.start(), t.next = 6, e.$store.dispatch("nuxtServerInit", e.context);
                                    case 6:
                                        return t.next = 8, e.refresh();
                                    case 8:
                                        e.$loading.finish();
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        },
                        isPreview: function() {
                            return Boolean(this.$options.previewData)
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function t() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ((n = Object(k.i)(e.$route)).length) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            return e.$loading.start(), r = n.map((function(t) {
                                                var p = [];
                                                if (t.$options.fetch && t.$options.fetch.length && p.push(Object(k.q)(t.$options.fetch, e.context)), t.$fetch) p.push(t.$fetch());
                                                else {
                                                    var n, r = D(Object(k.f)(t.$vnode.componentInstance));
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) {
                                                            var component = n.value;
                                                            p.push(component.$fetch())
                                                        }
                                                    } catch (e) {
                                                        r.e(e)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                                return t.$options.asyncData && p.push(Object(k.q)(t.$options.asyncData, e.context).then((function(e) {
                                                    for (var n in e) c.default.set(t.$data, n, e[n])
                                                }))), Promise.all(p)
                                            })), t.prev = 5, t.next = 8, Promise.all(r);
                                        case 8:
                                            t.next = 15;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t.catch(5), e.$loading.fail(t.t0), Object(k.l)(t.t0), e.error(t.t0);
                                        case 15:
                                            e.$loading.finish();
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                                var e = (M.a.options || M.a).layout;
                                "function" == typeof e && (e = e(this.context)), this.setLayout(e)
                            }
                        },
                        setLayout: function(e) {
                            return e && B["_" + e] || (e = "default"), this.layoutName = e, this.layout = B["_" + e], this.layout
                        },
                        loadLayout: function(e) {
                            return e && B["_" + e] || (e = "default"), Promise.resolve(B["_" + e])
                        },
                        getRouterBase: function() {
                            return Object(x.h)(this.$router.options.base)
                        },
                        getRoutePath: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                                base = this.getRouterBase();
                            return Object(x.h)(Object(x.g)(Object(x.e)(e).pathname, base))
                        },
                        getStaticAssetsPath: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                                t = window.__NUXT__.staticAssetsBase;
                            return Object(k.v)(t, this.getRoutePath(e))
                        },
                        fetchStaticManifest: function() {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", window.__NUXT_IMPORT__("manifest.js", Object(x.d)(Object(k.v)(e.getStaticAssetsPath(), "manifest.js"))));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        setPagePayload: function(e) {
                            this._pagePayload = e, this._fetchCounters = {}
                        },
                        fetchPayload: function(e, t) {
                            var n = this;
                            return Object(o.a)(regeneratorRuntime.mark((function r() {
                                var path, o, l;
                                return regeneratorRuntime.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return path = Object(x.a)(n.getRoutePath(e)), r.next = 3, n.fetchStaticManifest();
                                        case 3:
                                            if (r.sent.routes.includes(path)) {
                                                r.next = 7;
                                                break
                                            }
                                            throw t || n.setPagePayload(!1), new Error("Route ".concat(path, " is not pre-rendered"));
                                        case 7:
                                            return o = Object(k.v)(n.getStaticAssetsPath(e), "payload.js"), r.prev = 8, r.next = 11, window.__NUXT_IMPORT__(path, Object(x.d)(o));
                                        case 11:
                                            return l = r.sent, t || n.setPagePayload(l), r.abrupt("return", l);
                                        case 16:
                                            throw r.prev = 16, r.t0 = r.catch(8), t || n.setPagePayload(!1), r.t0;
                                        case 20:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [8, 16]
                                ])
                            })))()
                        }
                    },
                    components: {
                        NuxtLoading: z
                    }
                };
            c.default.use(d.a);
            var F = {};
            (F = function(e, t) {
                if ((e = e.default || e).commit) throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
                return "function" != typeof e && (e = Object.assign({}, e)),
                    function(e, t) {
                        if (e.state && "function" != typeof e.state) {
                            console.warn("'state' should be a method that returns an object in ".concat(t));
                            var n = Object.assign({}, e.state);
                            e = Object.assign({}, e, {
                                state: function() {
                                    return n
                                }
                            })
                        }
                        return e
                    }(e, t)
            }(n(246), "store/index.js")).modules = F.modules || {};
            var V = F instanceof Function ? F : function() {
                return new d.a.Store(Object.assign({
                    strict: !1
                }, F))
            };
            var U = function() {
                    return n.e(40).then(n.bind(null, 270)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Y = function() {
                    return n.e(41).then(n.bind(null, 348)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                G = function() {
                    return n.e(42).then(n.bind(null, 352)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                W = function() {
                    return n.e(43).then(n.bind(null, 358)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                X = function() {
                    return n.e(44).then(n.bind(null, 357)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                K = function() {
                    return n.e(45).then(n.bind(null, 350)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                J = function() {
                    return n.e(46).then(n.bind(null, 295)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Q = function() {
                    return n.e(52).then(n.bind(null, 359)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Z = function() {
                    return n.e(57).then(n.bind(null, 356)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ee = function() {
                    return n.e(58).then(n.bind(null, 360)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                te = function() {
                    return n.e(59).then(n.bind(null, 296)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ne = function() {
                    return Promise.all([n.e(0), n.e(62)]).then(n.bind(null, 355)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                re = function() {
                    return n.e(63).then(n.bind(null, 361)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ie = function() {
                    return n.e(64).then(n.bind(null, 351)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ae = function() {
                    return n.e(6).then(n.bind(null, 431)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                oe = function() {
                    return Promise.all([n.e(7), n.e(8)]).then(n.bind(null, 432)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                se = function() {
                    return n.e(22).then(n.bind(null, 433)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                le = function() {
                    return n.e(47).then(n.bind(null, 265)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ce = function() {
                    return n.e(48).then(n.bind(null, 264)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ue = function() {
                    return n.e(49).then(n.bind(null, 298)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                de = function() {
                    return n.e(23).then(n.bind(null, 407)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                pe = function() {
                    return n.e(24).then(n.bind(null, 434)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                he = function() {
                    return n.e(25).then(n.bind(null, 435)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                fe = function() {
                    return n.e(26).then(n.bind(null, 436)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                me = function() {
                    return n.e(2).then(n.bind(null, 437)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ge = function() {
                    return n.e(27).then(n.bind(null, 438)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ve = function() {
                    return Promise.all([n.e(1), n.e(11)]).then(n.bind(null, 439)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ye = function() {
                    return Promise.all([n.e(0), n.e(12)]).then(n.bind(null, 440)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                be = function() {
                    return Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 441)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                we = function() {
                    return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 442)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                xe = function() {
                    return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, 443)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ke = function() {
                    return Promise.all([n.e(0), n.e(16)]).then(n.bind(null, 444)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Te = function() {
                    return Promise.all([n.e(1), n.e(17)]).then(n.bind(null, 445)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Se = function() {
                    return Promise.all([n.e(1), n.e(18)]).then(n.bind(null, 446)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                _e = function() {
                    return Promise.all([n.e(1), n.e(19)]).then(n.bind(null, 447)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ce = function() {
                    return Promise.all([n.e(1), n.e(20)]).then(n.bind(null, 448)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ee = function() {
                    return Promise.all([n.e(1), n.e(21)]).then(n.bind(null, 449)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Pe = function() {
                    return Promise.all([n.e(0), n.e(50)]).then(n.bind(null, 353)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                $e = function() {
                    return Promise.all([n.e(0), n.e(51)]).then(n.bind(null, 354)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Oe = function() {
                    return n.e(53).then(n.bind(null, 258)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Me = function() {
                    return Promise.all([n.e(0), n.e(28)]).then(n.bind(null, 450)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ae = function() {
                    return Promise.all([n.e(0), n.e(29)]).then(n.bind(null, 451)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ie = function() {
                    return Promise.all([n.e(0), n.e(54)]).then(n.bind(null, 408)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Le = function() {
                    return Promise.all([n.e(0), n.e(30)]).then(n.bind(null, 452)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                je = function() {
                    return Promise.all([n.e(0), n.e(31)]).then(n.bind(null, 453)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                ze = function() {
                    return Promise.all([n.e(0), n.e(55)]).then(n.bind(null, 409)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ne = function() {
                    return Promise.all([n.e(0), n.e(32)]).then(n.bind(null, 454)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                De = function() {
                    return Promise.all([n.e(0), n.e(33)]).then(n.bind(null, 410)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Re = function() {
                    return Promise.all([n.e(0), n.e(34)]).then(n.bind(null, 455)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Be = function() {
                    return Promise.all([n.e(0), n.e(56)]).then(n.bind(null, 411)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                He = function() {
                    return Promise.all([n.e(1), n.e(60)]).then(n.bind(null, 297)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Fe = function() {
                    return n.e(61).then(n.bind(null, 456)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                qe = function() {
                    return n.e(3).then(n.bind(null, 457)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ve = function() {
                    return Promise.all([n.e(1), n.e(35)]).then(n.bind(null, 458)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ue = function() {
                    return Promise.all([n.e(1), n.e(9)]).then(n.bind(null, 459)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ye = function() {
                    return Promise.all([n.e(1), n.e(36)]).then(n.bind(null, 460)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ge = function() {
                    return Promise.all([n.e(1), n.e(37)]).then(n.bind(null, 461)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                We = function() {
                    return n.e(5).then(n.bind(null, 462)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Xe = function() {
                    return n.e(10).then(n.bind(null, 463)).then((function(e) {
                        return Je(e.default || e)
                    }))
                },
                Ke = function() {
                    return Promise.all([n.e(7), n.e(65)]).then(n.bind(null, 349)).then((function(e) {
                        return Je(e.default || e)
                    }))
                };

            function Je(e) {
                if (!e || !e.functional) return e;
                var t = Array.isArray(e.props) ? e.props : Object.keys(e.props || {});
                return {
                    render: function(n) {
                        var r = {},
                            o = {};
                        for (var l in this.$attrs) t.includes(l) ? o[l] = this.$attrs[l] : r[l] = this.$attrs[l];
                        return n(e, {
                            on: this.$listeners,
                            attrs: r,
                            props: o,
                            scopedSlots: this.$scopedSlots
                        }, this.$slots.default)
                    }
                }
            }
            for (var Qe in r) c.default.component(Qe, r[Qe]), c.default.component("Lazy" + Qe, r[Qe]);
            var Ze = n(130),
                et = n.n(Ze),
                tt = function(e, t) {
                    e.$dayjs = et.a, t("dayjs", et.a)
                },
                nt = n(131),
                it = n(132),
                at = n(133),
                ot = n(134),
                st = n.n(ot),
                lt = n(135),
                ct = n(136),
                ut = n(137);

            function pt(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function ht(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? pt(Object(source), !0).forEach((function(t) {
                        Object(l.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : pt(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            c.default.component(m.a.name, m.a), c.default.component(y.a.name, ht(ht({}, y.a), {}, {
                render: function(e, t) {
                    return y.a._warned || (y.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), y.a.render(e, t)
                }
            })), c.default.component(P.name, P), c.default.component("NChild", P), c.default.component(I.name, I), Object.defineProperty(c.default.prototype, "$nuxt", {
                get: function() {
                    var e = this.$root.$options.$nuxt;
                    return e || "undefined" == typeof window ? e : window.$nuxt
                },
                configurable: !0
            }), c.default.use(h.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var ft = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to"
                },
                mt = d.a.Store.prototype.registerModule;

            function gt(path, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Array.isArray(path) ? !!path.reduce((function(e, path) {
                        return e && e[path]
                    }), this.state) : path in this.state;
                return mt.call(this, path, e, ht({
                    preserveState: n
                }, t))
            }

            function vt(e) {
                return yt.apply(this, arguments)
            }

            function yt() {
                return yt = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    var n, r, l, d, h, f, path, m, v = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return m = function(e, t) {
                                    if (!e) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === t) throw new Error("inject('".concat(e, "', value) has no value provided"));
                                    d[e = "$" + e] = t, d.context[e] || (d.context[e] = t), l[e] = d[e];
                                    var n = "__nuxt_" + e + "_installed__";
                                    c.default[n] || (c.default[n] = !0, c.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(c.default.prototype, e) || Object.defineProperty(c.default.prototype, e, {
                                            get: function() {
                                                return this.$root.$options[e]
                                            }
                                        })
                                    })))
                                }, n = v.length > 1 && void 0 !== v[1] ? v[1] : {}, e.next = 4, E(0, n);
                            case 4:
                                return r = e.sent, (l = V(t)).$router = r, l.registerModule = gt, d = ht({
                                    head: {
                                        title: "Streamo - Netflix Like VueJs Website Template",
                                        htmlAttrs: {
                                            lang: "en"
                                        },
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: ""
                                        }, {
                                            name: "format-detection",
                                            content: "telephone=no"
                                        }],
                                        link: [{
                                            rel: "icon",
                                            type: "image/x-icon",
                                            href: "/favicon.ico"
                                        }, {
                                            rel: "stylesheet",
                                            href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                                        }],
                                        style: [],
                                        script: []
                                    },
                                    store: l,
                                    router: r,
                                    nuxt: {
                                        defaultTransition: ft,
                                        transitions: [ft],
                                        setTransitions: function(e) {
                                            return Array.isArray(e) || (e = [e]), e = e.map((function(e) {
                                                return e = e ? "string" == typeof e ? Object.assign({}, ft, {
                                                    name: e
                                                }) : Object.assign({}, ft, e) : ft
                                            })), this.$options.nuxt.transitions = e, e
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(e) {
                                            e = e || null, d.context._errored = Boolean(e), e = e ? Object(k.p)(e) : null;
                                            var n = d.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = e, t && (t.nuxt.error = e), e
                                        }
                                    }
                                }, H), l.app = d, h = t ? t.next : function(e) {
                                    return d.router.push(e)
                                }, t ? f = r.resolve(t.url).route : (path = Object(k.g)(r.options.base, r.options.mode), f = r.resolve(path).route), e.next = 14, Object(k.t)(d, {
                                    store: l,
                                    route: f,
                                    next: h,
                                    error: d.nuxt.error.bind(d),
                                    payload: t ? t.payload : void 0,
                                    req: t ? t.req : void 0,
                                    res: t ? t.res : void 0,
                                    beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                    ssrContext: t
                                });
                            case 14:
                                m("config", n), window.__NUXT__ && window.__NUXT__.state && l.replaceState(window.__NUXT__.state), d.context.enablePreview = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    d.previewData = Object.assign({}, e), m("preview", e)
                                }, e.next = 20;
                                break;
                            case 20:
                                return e.next = 23, tt(d.context, m);
                            case 23:
                                if ("function" != typeof nt.default) {
                                    e.next = 26;
                                    break
                                }
                                return e.next = 26, Object(nt.default)(d.context, m);
                            case 26:
                                if ("function" != typeof it.default) {
                                    e.next = 29;
                                    break
                                }
                                return e.next = 29, Object(it.default)(d.context, m);
                            case 29:
                                if ("function" != typeof at.default) {
                                    e.next = 32;
                                    break
                                }
                                return e.next = 32, Object(at.default)(d.context, m);
                            case 32:
                                if ("function" != typeof st.a) {
                                    e.next = 35;
                                    break
                                }
                                return e.next = 35, st()(d.context, m);
                            case 35:
                                if ("function" != typeof lt.default) {
                                    e.next = 38;
                                    break
                                }
                                return e.next = 38, Object(lt.default)(d.context, m);
                            case 38:
                                if ("function" != typeof ct.default) {
                                    e.next = 41;
                                    break
                                }
                                return e.next = 41, Object(ct.default)(d.context, m);
                            case 41:
                                if ("function" != typeof ut.default) {
                                    e.next = 44;
                                    break
                                }
                                return e.next = 44, Object(ut.default)(d.context, m);
                            case 44:
                                return d.context.enablePreview = function() {
                                    console.warn("You cannot call enablePreview() outside a plugin.")
                                }, e.next = 47, new Promise((function(e, t) {
                                    if (!r.resolve(d.context.route.fullPath).route.matched.length) return e();
                                    r.replace(d.context.route.fullPath, e, (function(n) {
                                        if (!n._isRouter) return t(n);
                                        if (2 !== n.type) return e();
                                        var l = r.afterEach(function() {
                                            var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r) {
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 3, Object(k.k)(n);
                                                        case 3:
                                                            d.context.route = t.sent, d.context.params = n.params || {}, d.context.query = n.query || {}, l(), e();
                                                        case 8:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 47:
                                return e.abrupt("return", {
                                    store: l,
                                    app: d,
                                    router: r
                                });
                            case 48:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), yt.apply(this, arguments)
            }
        },
        40: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var content = e(t);
                        return t[2] ? "@media ".concat(t[2], " {").concat(content, "}") : content
                    })).join("")
                }, t.i = function(e, n, r) {
                    "string" == typeof e && (e = [
                        [null, e, ""]
                    ]);
                    var o = {};
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var l = this[i][0];
                            null != l && (o[l] = !0)
                        }
                    for (var c = 0; c < e.length; c++) {
                        var d = [].concat(e[c]);
                        r && o[d[0]] || (n && (d[2] ? d[2] = "".concat(n, " and ").concat(d[2]) : d[2] = n), t.push(d))
                    }
                }, t
            }
        },
        41: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = [], r = {}, i = 0; i < t.length; i++) {
                    var o = t[i],
                        l = o[0],
                        c = {
                            id: e + ":" + i,
                            css: o[1],
                            media: o[2],
                            sourceMap: o[3]
                        };
                    r[l] ? r[l].parts.push(c) : n.push(r[l] = {
                        id: l,
                        parts: [c]
                    })
                }
                return n
            }
            n.r(t), n.d(t, "default", (function() {
                return w
            }));
            var o = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var l = {},
                head = o && (document.head || document.getElementsByTagName("head")[0]),
                c = null,
                d = 0,
                h = !1,
                f = function() {},
                m = null,
                v = "data-vue-ssr-id",
                y = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

            function w(e, t, n, o) {
                h = n, m = o || {};
                var c = r(e, t);
                return x(c),
                    function(t) {
                        for (var n = [], i = 0; i < c.length; i++) {
                            var o = c[i];
                            (d = l[o.id]).refs--, n.push(d)
                        }
                        t ? x(c = r(e, t)) : c = [];
                        for (i = 0; i < n.length; i++) {
                            var d;
                            if (0 === (d = n[i]).refs) {
                                for (var h = 0; h < d.parts.length; h++) d.parts[h]();
                                delete l[d.id]
                            }
                        }
                    }
            }

            function x(e) {
                for (var i = 0; i < e.length; i++) {
                    var t = e[i],
                        n = l[t.id];
                    if (n) {
                        n.refs++;
                        for (var r = 0; r < n.parts.length; r++) n.parts[r](t.parts[r]);
                        for (; r < t.parts.length; r++) n.parts.push(T(t.parts[r]));
                        n.parts.length > t.parts.length && (n.parts.length = t.parts.length)
                    } else {
                        var o = [];
                        for (r = 0; r < t.parts.length; r++) o.push(T(t.parts[r]));
                        l[t.id] = {
                            id: t.id,
                            refs: 1,
                            parts: o
                        }
                    }
                }
            }

            function k() {
                var e = document.createElement("style");
                return e.type = "text/css", head.appendChild(e), e
            }

            function T(e) {
                var t, n, r = document.querySelector("style[" + v + '~="' + e.id + '"]');
                if (r) {
                    if (h) return f;
                    r.parentNode.removeChild(r)
                }
                if (y) {
                    var o = d++;
                    r = c || (c = k()), t = C.bind(null, r, o, !1), n = C.bind(null, r, o, !0)
                } else r = k(), t = E.bind(null, r), n = function() {
                    r.parentNode.removeChild(r)
                };
                return t(e),
                    function(r) {
                        if (r) {
                            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                            t(e = r)
                        } else n()
                    }
            }
            var S, _ = (S = [], function(e, t) {
                return S[e] = t, S.filter(Boolean).join("\n")
            });

            function C(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = _(t, o);
                else {
                    var l = document.createTextNode(o),
                        c = e.childNodes;
                    c[t] && e.removeChild(c[t]), c.length ? e.insertBefore(l, c[t]) : e.appendChild(l)
                }
            }

            function E(e, t) {
                var n = t.css,
                    r = t.media,
                    o = t.sourceMap;
                if (r && e.setAttribute("media", r), m.ssrId && e.setAttribute(v, t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
        },
        55: function(e, t, n) {
            "use strict";
            var r = {
                name: "NoSsr",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(e, t) {
                    var n = t.parent,
                        r = t.slots,
                        o = t.props,
                        l = r(),
                        c = l.default;
                    void 0 === c && (c = []);
                    var d = l.placeholder;
                    return n._isMounted ? c : (n.$once("hook:mounted", (function() {
                        n.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || d) ? e(o.placeholderTag, {
                        class: ["no-ssr-placeholder"]
                    }, o.placeholder || d) : c.length > 0 ? c.map((function() {
                        return e(!1)
                    })) : e(!1))
                }
            };
            e.exports = r
        }
    }
]);