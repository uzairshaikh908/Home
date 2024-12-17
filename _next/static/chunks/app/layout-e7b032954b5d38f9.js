(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        71818: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 19167)), Promise.resolve().then(n.t.bind(n, 51579, 23)), Promise.resolve().then(n.bind(n, 36529)), Promise.resolve().then(n.bind(n, 49398))
        },
        28811: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(21024);
            n(2265);
            let l = r._(n(57075));

            function a(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function i(e, t) {
                let n = l.default,
                    r = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: n,
                                pastDelay: r
                            } = e;
                            return null
                        }
                    };
                "function" == typeof e && (r.loader = e), Object.assign(r, t);
                let i = r.loader;
                return n({ ...r,
                    loader: () => null != i ? i().then(a) : Promise.resolve(a(() => null))
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        19167: function(e, t, n) {
            "use strict";

            function r(e) {
                let {
                    children: t
                } = e;
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "NoSSR", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(11283)
        },
        57075: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(21024),
                l = r._(n(2265)),
                a = n(19167),
                i = function(e) {
                    let t = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, e);

                    function n(e) {
                        let n = t.loading,
                            r = l.default.createElement(n, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            i = t.ssr ? l.default.Fragment : a.NoSSR,
                            o = t.lazy;
                        return l.default.createElement(l.default.Suspense, {
                            fallback: r
                        }, l.default.createElement(i, null, l.default.createElement(o, e)))
                    }
                    return t.lazy = l.default.lazy(t.loader), n.displayName = "LoadableComponent", n
                }
        },
        36529: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n(57437),
                l = n(98157),
                a = n(24033),
                i = n(2265),
                o = n(93046),
                s = n(92220),
                u = n(28811),
                d = n.n(u),
                c = n(2530),
                f = n(87534);
            let p = e => {
                    let {
                        leadDetails: t,
                        prevlink: n,
                        enquiryid: r
                    } = e;
                    if (!(n.includes("https") && n.includes(".policybazaar.com"))) return;
                    let l = t.InvestmentTypeId,
                        a = sessionStorage.getItem("prevlinks"),
                        i = "".concat(r, "_").concat(window.location.pathname, "_").concat(l);
                    if (a) {
                        if ("string" == typeof a) {
                            if ("object" != typeof(a = JSON.parse(a))) return;
                            a[i] = n
                        }
                        sessionStorage.setItem("prevlinks", JSON.stringify(a))
                    } else sessionStorage.setItem("prevlinks", JSON.stringify({
                        [i]: n
                    }))
                },
                v = d()(() => Promise.all([n.e(8475), n.e(3142)]).then(n.bind(n, 33142)), {
                    loadableGenerated: {
                        webpack: () => [33142]
                    },
                    ssr: !1
                }),
                b = d()(() => Promise.all([n.e(8475), n.e(1396), n.e(4423)]).then(n.bind(n, 4423)), {
                    loadableGenerated: {
                        webpack: () => [4423]
                    },
                    ssr: !1
                });
            var m = () => {
                var e;
                let t = (0, a.useSearchParams)(),
                    n = (0, o.I0)(),
                    u = null === (e = (0, o.v9)(e => e.extras)) || void 0 === e ? void 0 : e.isEb,
                    d = (0, o.v9)(e => e.extras.searchParams),
                    m = (0, o.v9)(e => e.lead);
                return (0, i.useEffect)(() => {
                    if (d.available && null != u) {
                        let {
                            utmData: e
                        } = (0, l.A)({
                            searchParams: d
                        });
                        n((0, s.W_)(e))
                    }
                }, [d.available, u]), (0, i.useEffect)(() => {
                    m.InvestmentTypeId && d.available && m.InvestmentTypeId && d.prevlink && p({
                        leadDetails: m,
                        prevlink: d.prevlink,
                        enquiryid: d.enquiryid
                    })
                }, [m.InvestmentTypeId, d.available, d.prevlink]), (0, i.useEffect)(() => {
                    window.addEventListener("pageshow", function(e) {
                        e.persisted && window.location.reload(!0)
                    }), window.location.href.endsWith("corporate-insurance-v2") && (window.location.href = f.k.BASE_URL_EB)
                }, []), (0, i.useEffect)(() => {
                    n((0, c.XA)({
                        searchParams: { ...Object.fromEntries(t.entries()),
                            available: !0,
                            pathname: window.location.pathname
                        }
                    }))
                }, [window.location.search]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(v, {}), (0, r.jsx)(b, {})]
                })
            }
        },
        49398: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ReduxProvider: function() {
                    return i
                }
            });
            var r = n(57437),
                l = n(41369),
                a = n(93046);

            function i(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(a.zt, {
                    store: l.h,
                    children: t
                })
            }
        },
        51579: function() {},
        24033: function(e, t, n) {
            e.exports = n(50094)
        }
    },
    function(e) {
        e.O(0, [5209, 5931, 2971, 2472, 1744], function() {
            return e(e.s = 71818)
        }), _N_E = e.O()
    }
]);