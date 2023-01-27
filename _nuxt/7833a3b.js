(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        342: function(t, e, o) {
            var content = o(396);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(41).default)("683530e6", content, !0, {
                sourceMap: !1
            })
        },
        395: function(t, e, o) {
            "use strict";
            o(342)
        },
        396: function(t, e, o) {
            var r = o(40)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".product-wrap .product-img[data-v-d11294c2]:before{background:transparent linear-gradient(0deg,#072e4a 25%,transparent 60%) repeat scroll 0 0}", ""]), r.locals = {}, t.exports = r
        },
        457: function(t, e, o) {
            "use strict";
            o.r(e);
            o(31), o(74), o(15), o(104);
            var r = {
                    props: ["product", "ImageSrc", "PageLink", "btnLink"],
                    data: function() {
                        return {}
                    },
                    methods: {
                        date_function: function() {
                            return (new Date).toISOString().substr(0, 10)
                        },
                        slugify: function(text) {
                            return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        }
                    },
                    mounted: function() {
                        this.date_function()
                    }
                },
                n = (o(395), o(28)),
                component = Object(n.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "product-wrap relative overflow-hidden rounded-[10px] mb-30 group block",
                        class: t.product.singleClass
                    }, [o("div", {
                        staticClass: "product-img relative overflow-hidden block rounded-[10px] before:content-[''] before:bottom-0 before:left-0 before:opacity-0 before:absolute before:right-0 before:z-20 before:pointer-events-none before:rounded-[10px] before:transition-all before:duration-500 group-hover:before:opacity-100 before:w-full before:h-1/2 group-hover:before:h-full"
                    }, [o("n-link", {
                        staticClass: "w-full block group-hover:scale-[1.2] transition-all duration-300",
                        attrs: {
                            to: t.PageLink + "/" + t.slugify(t.product.title)
                        }
                    }, [o("img", {
                        staticClass: "default-img transition-all duration-500 w-full",
                        attrs: {
                            src: t.product.singleImage,
                            alt: t.product.title
                        }
                    })])], 1), t._v(" "), o("div", {
                        staticClass: "product-content flex flex-col my-4 text-center justify-center opacity-0 group-hover:opacity-100 absolute -bottom-[50px] group-hover:bottom-0 transition-all duration-500 z-999 w-full"
                    }, [o("h3", [o("n-link", {
                        staticClass: "text-[20px] font-semibold hover:text-yellow transition-all duration-300 text-white",
                        attrs: {
                            to: t.PageLink + "/" + t.slugify(t.product.title)
                        }
                    }, [t._v(t._s(t.product.title))])], 1), t._v(" "), o("div", {
                        staticClass: "flex justify-center mt-[5px]"
                    }, [o("div", {
                        staticClass: "quality flex items-center"
                    }, [o("span", {
                        staticClass: "mr-1 font-medium text-white text-[15px]"
                    }, [t._v("Quality : ")]), o("label", {
                        staticClass: "text-white"
                    }, [t._v(t._s(t.product.quality))])]), t._v(" "), o("div", [o("span", {
                        staticClass: "text-white hidden"
                    }, [t._v("Date:" + t._s(t.product.date))])])]), t._v(" "), o("div", {
                        staticClass: "flex items-center justify-center mt-3"
                    }, [o("n-link", {
                        staticClass: "text-[14px] inline-block rounded-[3px] transition-all duration-300 py-[6px] px-3 bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]",
                        attrs: {
                            to: t.btnLink + "/" + t.slugify(t.product.title)
                        }
                    }, [t._v("Watch Now")])], 1)])])
                }), [], !1, null, "d11294c2", null);
            e.default = component.exports
        }
    }
]);