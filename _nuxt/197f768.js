(window.webpackJsonp = window.webpackJsonp || []).push([
    [73, 47, 48, 53, 60], {
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
            var o = {
                    props: {
                        logLink: String
                    }
                },
                n = r(28),
                component = Object(n.a)(o, (function() {
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
            var o = r(40)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".facebook[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(59 89 152 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(59 89 152 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.facebook[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(0 179 236 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 179 236 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(10 102 194 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(10 102 194 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(228 64 95 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(228 64 95 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}", ""]), o.locals = {}, t.exports = o
        },
        264: function(t, e, r) {
            "use strict";
            r.r(e);
            r(15), r(29), r(30);
            var o = r(259),
                n = r(260),
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
                            socialData: o,
                            footerMenuData: n,
                            footerSubmenuData: l
                        }
                    }
                },
                d = (r(262), r(28)),
                component = Object(d.a)(c, (function() {
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
            var o = r(28),
                component = Object(o.a)({}, (function() {
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
        274: function(t, e, r) {
            var content = r(288);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(41).default)("43348e6c", content, !0, {
                sourceMap: !1
            })
        },
        287: function(t, e, r) {
            "use strict";
            r(274)
        },
        288: function(t, e, r) {
            var o = r(40)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".plyr__poster{background-size:cover!important}", ""]), o.locals = {}, t.exports = o
        },
        297: function(t, e, r) {
            "use strict";
            r.r(e);
            r(15), r(29), r(30), r(31), r(74), r(104);
            var o = r(138),
                n = r(271),
                l = {
                    props: ["product"],
                    components: {
                        MainHeader: function() {
                            return r.e(23).then(r.bind(null, 407))
                        },
                        OffcanvasSidebar: function() {
                            return r.e(2).then(r.bind(null, 437))
                        },
                        SingleProduct: function() {
                            return r.e(3).then(r.bind(null, 457))
                        },
                        SectionTitle: function() {
                            return r.e(5).then(r.bind(null, 462))
                        },
                        Swiper: o.Swiper,
                        SwiperSlide: o.SwiperSlide
                    },
                    data: function() {
                        return {
                            seriesData: n,
                            options: {
                                quality: {
                                    default: "1080p"
                                }
                            },
                            relatedOption: {
                                loop: !0,
                                slidesPerView: 4,
                                spaceBetween: 30,
                                autoplay: !0,
                                navigation: {
                                    nextEl: ".upcoming-area .nextbtn",
                                    prevEl: ".upcoming-area .prevbtn"
                                },
                                breakpoints: {
                                    1480: {
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    },
                                    1300: {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20
                                    },
                                    480: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10
                                    }
                                }
                            }
                        }
                    },
                    mounted: function() {
                        console.log(this.product.items), console.log(this.product.category)
                    },
                    slugify: function(text) {
                        return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    }
                },
                c = (r(287), r(28)),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {}, [r("div", {
                        staticClass: " bg-[#1E272D] flex items-center justify-center py-2 sm:py-7 px-3 sm:flex-row flex-col"
                    }, [r("h2", {
                        staticClass: "sm:text-[26px] text-[22px] text-white font-semibold mr-3"
                    }, [t._v(t._s(t.product.title))]), t._v(" "), r("ul", {
                        staticClass: "flex items-center flex-wrap justify-center"
                    }, [r("li", {
                        staticClass: "text-[#dddddd] md:text-[16px] text-[14px] mr-2 relative before:absolute before:w-[2px] before:h-[12px] before:bg-[#dddddd] before:top-1/2 before:right-0 before:transform before:-translate-y-1/2 pr-2"
                    }, [r("span", [t._v(t._s(t.product.duration))])]), t._v(" "), r("li", {
                        staticClass: "text-[#dddddd] md:text-[16px] text-[14px] mr-2 relative before:absolute before:w-[2px] before:h-[12px] before:bg-[#dddddd] before:top-1/2 before:right-0 before:transform before:-translate-y-1/2 pr-2"
                    }, [r("span", [t._v(t._s(t.product.date))])]), t._v(" "), r("li", {
                        staticClass: "text-[#dddddd] md:text-[16px] text-[14px] mr-2 relative before:absolute before:w-[2px] before:h-[12px] before:bg-[#dddddd] before:top-1/2 before:right-0 before:transform before:-translate-y-1/2 pr-2 flex"
                    }, t._l(t.product.category, (function(e, o) {
                        return r("div", {
                            key: o,
                            staticClass: " capitalize mr-2 relative before:content-[','] before:absolute before:-right-[4px] before:bottom-0 last:before:hidden last:mr-0"
                        }, [r("span", {}, [t._v(t._s(e))])])
                    })), 0), t._v(" "), r("li", {
                        staticClass: "text-[#dddddd] md:text-[16px] text-[14px] mr-2"
                    }, [r("span", [t._v(t._s(t.product.permit))])])])]), t._v(" "), r("div", {
                        staticClass: "bg-[#000000] py-[50px]"
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("client-only", [r("vue-plyr", {
                        attrs: {
                            options: t.options
                        }
                    }, [r("video", {
                        attrs: {
                            controls: "",
                            crossorigin: "",
                            playsinline: "",
                            "data-poster": t.product.posterImage
                        }
                    }, [r("source", {
                        attrs: {
                            src: t.product.video,
                            type: "video/mp4"
                        }
                    })])])], 1)], 1), t._v(" "), r("div", {
                        staticClass: "product-details-content container"
                    }, [r("ul", {
                        staticClass: "my-5"
                    }, t._l(t.product.items, (function(e, o) {
                        return r("li", {
                            key: o,
                            staticClass: "text-[16px] mb-3 text-[#dddddd] font-light"
                        }, [r("span", {
                            staticClass: "text-[18px] font-semibold mr-1 text-[#f4181c]"
                        }, [t._v(t._s(e.label) + " ")]), t._v(t._s(e.labeldesc) + "\n                ")])
                    })), 0), t._v(" "), r("p", {
                        staticClass: "text-[#dddddd] font-normal text-[14px]"
                    }, [t._v(t._s(t.product.description))]), t._v(" "), r("p", {
                        staticClass: "text-[#dddddd] font-normal text-[14px]"
                    }, [t._v(t._s(t.product.descriptionTwo))]), t._v(" "), t._m(0)])]), t._v(" "), r("div", {
                        staticClass: "bg-[#000000] pb-[50px]"
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "awardedmovie-area relative"
                    }, [r("Swiper", {
                        attrs: {
                            options: t.relatedOption
                        }
                    }, t._l(t.seriesData, (function(t, e) {
                        return r("Swiper-Slide", {
                            key: e
                        }, [r("SingleProduct", {
                            attrs: {
                                product: t,
                                PageLink: "/series",
                                btnLink: "/series"
                            }
                        })], 1)
                    })), 1)], 1)])])])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex items-center justify-between flex-wrap mt-9 py-3 border-y-1 border-[#dddddd]"
                    }, [r("div", {
                        staticClass: "flex items-center"
                    }, [r("span", {
                        staticClass: "text-[18px] font-semibold text-[#f4181c]"
                    }, [t._v("Share:")]), t._v(" "), r("div", {
                        staticClass: "social-style-1 flex items-center"
                    }, [r("a", {
                        staticClass: "sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center bg-white text-[#18163a] hover:bg-[#f4181c] hover:text-white rounded-full sm:ml-3 ml-2",
                        attrs: {
                            href: "https://www.facebook.com/"
                        }
                    }, [r("i", {
                        staticClass: "zmdi zmdi-facebook"
                    })]), t._v(" "), r("a", {
                        staticClass: "sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center bg-white text-[#18163a] hover:bg-[#f4181c] hover:text-white rounded-full sm:ml-3 ml-2",
                        attrs: {
                            href: "https://twitter.com/"
                        }
                    }, [r("i", {
                        staticClass: "zmdi zmdi-twitter"
                    })]), t._v(" "), r("a", {
                        staticClass: "sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center bg-white text-[#18163a] hover:bg-[#f4181c] hover:text-white rounded-full sm:ml-3 ml-2",
                        attrs: {
                            href: "https://www.linkedin.com/"
                        }
                    }, [r("i", {
                        staticClass: "zmdi zmdi-linkedin"
                    })])])]), t._v(" "), r("div", {
                        staticClass: "like-dislike-wrap"
                    }, [r("button", {
                        staticClass: "like-dislike-style text-[20px] sm:text-[30px] text-white hover:text-[#f4181c] mr-2"
                    }, [r("i", {
                        staticClass: "zmdi zmdi-thumb-up"
                    })]), t._v(" "), r("button", {
                        staticClass: "like-dislike-style text-[20px] sm:text-[30px] text-white hover:text-[#f4181c] ml-2"
                    }, [r("i", {
                        staticClass: "zmdi zmdi-thumb-down"
                    })])])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        313: function(t, e, r) {
            "use strict";
            var o = r(6),
                n = r(76).find,
                l = r(139),
                c = "find",
                d = !0;
            c in [] && Array(1).find((function() {
                d = !1
            })), o({
                target: "Array",
                proto: !0,
                forced: d
            }, {
                find: function(t) {
                    return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), l(c)
        },
        428: function(t, e, r) {
            "use strict";
            r.r(e);
            r(15), r(29), r(30), r(313), r(31), r(74), r(104);
            var o = r(267),
                n = {
                    components: {
                        MainHeader: function() {
                            return r.e(4).then(r.bind(null, 407))
                        },
                        OffcanvasSidebar: function() {
                            return r.e(2).then(r.bind(null, 437))
                        },
                        ProductDetails: function() {
                            return Promise.resolve().then(r.bind(null, 297))
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
                            navOpen: !1,
                            product: o,
                            slug: this.$route.params.slug
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.product = o.find((function(e) {
                            return t.slugify(e.title) === t.slug
                        }))
                    },
                    methods: {
                        slugify: function(text) {
                            return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        }
                    }
                },
                l = r(28),
                component = Object(l.a)(n, (function() {
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
                    }), t._v(" "), r("ProductDetails", {
                        attrs: {
                            product: t.product
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#12222d]"
                    }, [r("FooterTop")], 1), t._v(" "), r("div", {
                        staticClass: "container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#12222d] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                    }, [r("FooterBottom")], 1)], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                ProductDetails: r(297).default,
                FooterTop: r(264).default,
                FooterBottom: r(265).default
            })
        }
    }
]);