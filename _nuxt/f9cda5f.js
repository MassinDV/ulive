(window.webpackJsonp = window.webpackJsonp || []).push([
    [22], {
        376: function(e) {
            e.exports = JSON.parse('[{"Logo":"/images/brand/1.png"},{"Logo":"/images/brand/2.png"},{"Logo":"/images/brand/3.png"},{"Logo":"/images/brand/4.png"},{"Logo":"/images/brand/5.png"},{"Logo":"/images/brand/6.png"}]')
        },
        433: function(e, r, n) {
            "use strict";
            n.r(r);
            var t = n(376),
                o = n(138),
                d = {
                    components: {
                        Swiper: o.Swiper,
                        SwiperSlide: o.SwiperSlide
                    },
                    data: function() {
                        return {
                            brandSlider: t,
                            swiperOption: {
                                slidesPerView: 6,
                                loop: !0,
                                spaceBetween: 10,
                                pagination: !1,
                                navigation: !1,
                                breakpoints: {
                                    1680: {
                                        slidesPerView: 6
                                    },
                                    1300: {
                                        slidesPerView: 5
                                    },
                                    1025: {
                                        slidesPerView: 4
                                    },
                                    768: {
                                        slidesPerView: 3
                                    },
                                    640: {
                                        slidesPerView: 4
                                    },
                                    480: {
                                        slidesPerView: 3,
                                        spaceBetween: 10
                                    },
                                    320: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    }
                                }
                            }
                        }
                    }
                },
                l = n(28),
                component = Object(l.a)(d, (function() {
                    var e = this,
                        r = e.$createElement,
                        n = e._self._c || r;
                    return n("div", {
                        staticClass: "brand-logo group relative"
                    }, [n("swiper", {
                        staticClass: "swiper",
                        attrs: {
                            options: e.swiperOption
                        }
                    }, e._l(e.brandSlider, (function(e, r) {
                        return n("swiper-slide", {
                            key: r,
                            staticClass: "px-[5px] py-[25px]"
                        }, [n("div", {
                            staticClass: "cursor-pointer border-1 border-[#444444] overflow-hidden text-center"
                        }, [n("img", {
                            staticClass: "hover:scale-[1.2] transition-all duration-500",
                            attrs: {
                                src: e.Logo,
                                alt: "Brand"
                            }
                        })])])
                    })), 1)], 1)
                }), [], !1, null, "f09027c0", null);
            r.default = component.exports
        }
    }
]);