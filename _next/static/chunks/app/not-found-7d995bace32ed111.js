(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9160], {
        62601: function(e, t, n) {
            "use strict";
            var r, o;
            e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof(null == (o = n.g.process) ? void 0 : o.env) ? n.g.process : n(58960)
        },
        62762: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 74753))
        },
        87534: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(62601);
            let o = {
                API_BASE_URL: "https://smebusiness.policybazaar.com/api/",
                API_BASE_URL_EB: "https://sme.policybazaar.com/api/",
                API_BASE_URL_HOME: "https://home.policybazaar.com/api/",
                CACHE_VER: r.env.NEXT_PUBLIC_CACHE_VER,
                BASE_URL: "https://smebusiness.policybazaar.com/",
                BASE_URL_EB: "https://sme.policybazaar.com/",
                BASE_URL_HOME: "https://home.policybazaar.com/",
                APILIST_VER: r.env.NEXT_PUBLIC_APILIST_VER,
                MASTER_VER: r.env.NEXT_PUBLIC_MASTER_VER,
                TOKEN_KEY: "x-access-token",
                API_TOKEN: "",
                API_TOKEN_NAME: "",
                COOKIE_LOGIN: "false",
                VALIDATION_VER: r.env.NEXT_PUBLIC_VALIDATION_VER,
                CITY_VER: r.env.NEXT_PUBLIC_CITY_VER,
                GTM: "GTM-PW5K",
                CND_BASE_URL: "https://static.pbcdn.in/sme-cdn",
                GOOGLE_API_KEY: "AIzaSyBqd8ykwh693hpFm7gRICWZx3QuMuRcqG4"
            }
        },
        74753: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(57437),
                o = n(2265),
                i = n(87534),
                s = n(57467);
            t.default = () => ((0, o.useEffect)(() => {
                window.location.href = i.k.BASE_URL_EB
            }, []), (0, r.jsx)("div", {
                children: (0, r.jsx)(s.Z, {
                    style: {
                        height: "100vh",
                        width: "100%"
                    }
                })
            }))
        },
        57467: function(e, t, n) {
            "use strict";
            var r = n(57437),
                o = n(10755),
                i = n.n(o);
            t.Z = function() {
                let {
                    width: e = 100,
                    height: t = 20,
                    style: n = {}
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, r.jsx)("span", {
                    className: i().skeleton,
                    style: {
                        width: e,
                        height: t,
                        ...n
                    }
                })
            }
        },
        10755: function(e) {
            e.exports = {
                skeleton: "style_skeleton__rVoPk",
                "MuiSkeleton-keyframes-wave": "style_MuiSkeleton-keyframes-wave__6LbpY",
                "skeleton-animation": "style_skeleton-animation__AAbW9"
            }
        },
        58960: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, n, r, o = e.exports = {};

                            function i() {
                                throw Error("setTimeout has not been defined")
                            }

                            function s() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function c(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (n) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (n) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : i
                                } catch (e) {
                                    t = i
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : s
                                } catch (e) {
                                    n = s
                                }
                            }();
                            var u = [],
                                a = !1,
                                l = -1;

                            function f() {
                                a && r && (a = !1, r.length ? u = r.concat(u) : l = -1, u.length && _())
                            }

                            function _() {
                                if (!a) {
                                    var e = c(f);
                                    a = !0;
                                    for (var t = u.length; t;) {
                                        for (r = u, u = []; ++l < t;) r && r[l].run();
                                        l = -1, t = u.length
                                    }
                                    r = null, a = !1,
                                        function(e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                            try {
                                                n(e)
                                            } catch (t) {
                                                try {
                                                    return n.call(null, e)
                                                } catch (t) {
                                                    return n.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function p(e, t) {
                                this.fun = e, this.array = t
                            }

                            function E() {}
                            o.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                u.push(new p(e, t)), 1 !== u.length || a || c(_)
                            }, p.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = E, o.addListener = E, o.once = E, o.off = E, o.removeListener = E, o.removeAllListeners = E, o.emit = E, o.prependListener = E, o.prependOnceListener = E, o.listeners = function(e) {
                                return []
                            }, o.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, o.cwd = function() {
                                return "/"
                            }, o.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, o.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function r(e) {
                    var o = n[e];
                    if (void 0 !== o) return o.exports;
                    var i = n[e] = {
                            exports: {}
                        },
                        s = !0;
                    try {
                        t[e](i, i.exports, r), s = !1
                    } finally {
                        s && delete n[e]
                    }
                    return i.exports
                }
                r.ab = "//";
                var o = r(229);
                e.exports = o
            }()
        },
        30622: function(e, t, n) {
            "use strict";
            var r = n(2265),
                o = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                u = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function a(e, t, n) {
                var r, i = {},
                    a = null,
                    l = null;
                for (r in void 0 !== n && (a = "" + n), void 0 !== t.key && (a = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: a,
                    ref: l,
                    props: i,
                    _owner: c.current
                }
            }
            t.Fragment = i, t.jsx = a, t.jsxs = a
        },
        57437: function(e, t, n) {
            "use strict";
            e.exports = n(30622)
        }
    },
    function(e) {
        e.O(0, [2971, 2472, 1744], function() {
            return e(e.s = 62762)
        }), _N_E = e.O()
    }
]);