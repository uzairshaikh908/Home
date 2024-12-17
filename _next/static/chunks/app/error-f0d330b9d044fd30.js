(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7601], {
        84488: function(e, t, o) {
            Promise.resolve().then(o.bind(o, 8103))
        },
        28811: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = o(21024);
            o(2265);
            let r = n._(o(57075));

            function i(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function a(e, t) {
                let o = r.default,
                    n = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: o,
                                pastDelay: n
                            } = e;
                            return null
                        }
                    };
                "function" == typeof e && (n.loader = e), Object.assign(n, t);
                let a = n.loader;
                return o({ ...n,
                    loader: () => null != a ? a().then(i) : Promise.resolve(i(() => null))
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        19167: function(e, t, o) {
            "use strict";

            function n(e) {
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
                    return n
                }
            }), o(11283)
        },
        57075: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = o(21024),
                r = n._(o(2265)),
                i = o(19167),
                a = function(e) {
                    let t = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, e);

                    function o(e) {
                        let o = t.loading,
                            n = r.default.createElement(o, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            a = t.ssr ? r.default.Fragment : i.NoSSR,
                            l = t.lazy;
                        return r.default.createElement(r.default.Suspense, {
                            fallback: n
                        }, r.default.createElement(a, null, r.default.createElement(l, e)))
                    }
                    return t.lazy = r.default.lazy(t.loader), o.displayName = "LoadableComponent", o
                }
        },
        8103: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return Error
                }
            });
            var n = o(57437),
                r = o(2265),
                i = o(57042),
                a = o(95434),
                l = o.n(a),
                c = () => (0, n.jsx)("div", {
                    className: l().errorSectionMain,
                    children: (0, n.jsx)("div", {
                        className: l().wrapper,
                        children: (0, n.jsxs)("div", {
                            className: l().errorContainer,
                            children: [(0, n.jsx)("div", {
                                className: (0, i.Z)(l().imageContainer1, Math.floor(10 * Math.random()) + 1 > 5 && l().imageContainer2)
                            }), (0, n.jsx)("h2", {
                                className: l().errorheading,
                                children: "Something seems off. "
                            }), (0, n.jsx)("p", {
                                className: l().errorpara,
                                children: "No worries, try refreshing the page or come back later."
                            })]
                        })
                    })
                }),
                s = o(80197),
                u = o(93723),
                d = o(57372),
                m = o(52047),
                v = o(1714),
                p = o(93046);
            let f = [],
                g = [];

            function Error(e) {
                let {
                    error: t,
                    reset: o
                } = e, i = (0, p.v9)(e => e.extras.searchParams);
                return (0, r.useEffect)(() => {
                    window.addEventListener("keydown", e => {
                        ("Enter" === e.code || "Space" === e.code) && b({ ..._(e),
                            code: e.code
                        }, g)
                    }), window.addEventListener("click", e => {
                        b(_(e), f)
                    })
                }, []), (0, r.useEffect)(() => {
                    var e;
                    t && (null === (e = Object.keys(i)) || void 0 === e ? void 0 : e.length) && setTimeout(() => {
                        let e = (0, u.t6)(),
                            o = (null == e ? void 0 : e.InvestmentTypeID) || (null == e ? void 0 : e.InvestmentTypeId),
                            n = window.location.pathname,
                            r = "".concat(window.location.pathname, "_").concat(t),
                            a = {
                                url: window.location.href,
                                isMobile: (0, d.t)(),
                                error: {
                                    message: null == t ? void 0 : t.message,
                                    stack: null == t ? void 0 : t.stack
                                },
                                leadDetails: e,
                                browser: navigator.sayswho,
                                cookie: document.cookie,
                                sessionStorage: h(sessionStorage),
                                localStorage: h(localStorage),
                                UserImpressionArray: f,
                                UserKeyboardImpressionArray: g
                            },
                            l = {
                                EncEnquiryID: (null == i ? void 0 : i.enquiryid) || (null == e ? void 0 : e.EncEnquiryID),
                                ErrorKey: r,
                                ErrorDescription: JSON.stringify(a),
                                ...o && {
                                    InvestmentTypeID: o
                                },
                                ...n && {
                                    PageName: n
                                }
                            },
                            c = window.location.href.includes("sme.") || window.location.href.includes("smebusiness."),
                            s = r.includes("chunk"),
                            p = window.location.href.includes("localhost"),
                            b = (0, u.Dc)();
                        p || b || !c && (c || s) || m.B.post(v.b.SaveFrontEndErrorLog, {
                            data: l
                        })
                    }, 0)
                }, [t, i]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.Z, {}), (0, n.jsx)(c, {})]
                })
            }

            function h(e) {
                let t = {
                    local_masters: "local_masters",
                    dataArr: "dataArr",
                    local_api_list: "local_api_list",
                    local_cities: "local_cities",
                    local_cities_v2: "local_cities_v2",
                    local_popular_cities_v2: "local_popular_cities_v2"
                };
                return Object.keys(e).reduce(function(o, n) {
                    return t[n] || (o[n] = e.getItem(n)), o
                }, {})
            }

            function b(e, t) {
                e && (t.length < 5 ? t.push(e) : t.length >= 5 && (t.shift(), t.push(e)))
            }

            function _(e) {
                var t, o, n, r, i, a, l, c, s, u, d, m, v, p, f;
                return {
                    clickedElement: "".concat((null == e ? void 0 : null === (t = e.target) || void 0 === t ? void 0 : t.localName) || null, "=").concat((null == e ? void 0 : null === (o = e.target) || void 0 === o ? void 0 : o.className) || null, "=").concat(!!(null == e ? void 0 : null === (n = e.target) || void 0 === n ? void 0 : n.onclick)),
                    parent: "".concat((null == e ? void 0 : null === (i = e.target) || void 0 === i ? void 0 : null === (r = i.offsetParent) || void 0 === r ? void 0 : r.localName) || null, "=").concat((null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : null === (a = l.offsetParent) || void 0 === a ? void 0 : a.className) || null, "=").concat(!!(null == e ? void 0 : null === (s = e.target) || void 0 === s ? void 0 : null === (c = s.offsetParent) || void 0 === c ? void 0 : c.onclick)),
                    childElement: "".concat((null == e ? void 0 : null === (d = e.target) || void 0 === d ? void 0 : null === (u = d.firstChild) || void 0 === u ? void 0 : u.localName) || null, "=").concat((null == e ? void 0 : null === (v = e.target) || void 0 === v ? void 0 : null === (m = v.firstChild) || void 0 === m ? void 0 : m.className) || null, "=").concat(!!(null == e ? void 0 : null === (f = e.target) || void 0 === f ? void 0 : null === (p = f.firstChild) || void 0 === p ? void 0 : p.onclick))
                }
            }
        },
        1714: function(e, t, o) {
            "use strict";
            o.d(t, {
                b: function() {
                    return n
                }
            });
            let n = {
                GetCookieValue: "support/GetCookieValue",
                GetPreQuotes: "sme/GetPreQuote",
                GetPrequoteByVisitId: "sme/getPrequoteByVisitId",
                SavePreQuote: "sme/SavePreQuote",
                SavePrequoteByVisitId: "sme/savePrequoteByVisitId",
                HomeSavePreQuote: "prequote/save",
                CreateVisitLog: "sme/CreateVisitLog",
                GetClaritySetting: "master/GetClaritySettings",
                Dropcustomercookie: "support/dropcustomercookie",
                Getpopularcities: "master/getpopularcities",
                GetCityMaster: "master/getCityMaster",
                CustomerJourneyTracking: "sme/CustomerJourneyTracking",
                GetInvalidInputs: "master/getInvalidInputs",
                ScheduleCallback: "support/CustomerScheduleCallback",
                GetEmployeeCategory: "sme/GetEmployeeCategory",
                GetCurrencyList: "master/getCurrencyMaster",
                UpdateProposer: "sme/updateProposer",
                GetMaster: "sme/getmasters",
                GetLiabilityOccupancy: "sme/getLiabilityOccupancy",
                GetCampaignDetails: "support/GetCampaignDetails",
                SaveFrontEndErrorLog: "support/SaveFrontEndErrorLog",
                GetVendorDetails: "sme/GetVendorDetails",
                GetPreviousBookingDetails: "sme/GetPreviousBookingDetails",
                SavePreviousBookedEnquiryID: "sme/SavePreviousBookedEnquiryID",
                getOTP: "user/sendotp",
                verifyOTP: "user/validateotp"
            }
        },
        74694: function(e, t, o) {
            "use strict";
            o.d(t, {
                B: function() {
                    return u
                }
            });
            var n = o(87534),
                r = o(44881),
                i = o(41369),
                a = o(1714),
                l = o(93723);
            o(24033);
            let c = () => {
                var e;
                return {
                    enquiryid: null === (e = (0, l.t6)()) || void 0 === e ? void 0 : e.EncEnquiryID,
                    AgentId: (0, r.ej)("AgentId") || 0
                }
            };

            function s(e) {
                var t, o;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    c = null == e ? void 0 : e.isHome;
                if (c) return n.k.API_BASE_URL_HOME;
                let s = !!l || (null === i.h || void 0 === i.h ? void 0 : null === (o = i.h.getState()) || void 0 === o ? void 0 : null === (t = o.extras) || void 0 === t ? void 0 : t.isEb);
                return r && a.b.GetInvalidInputs === r ? n.k.API_BASE_URL : s ? n.k.API_BASE_URL_EB : n.k.API_BASE_URL
            }
            let u = {
                get: async function(e) {
                    var t;
                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            commonHeaders: !0,
                            extraHeader: {},
                            revalidate: 0,
                            isEb: !1,
                            currentUrl: ""
                        },
                        r = { ...(null == n ? void 0 : n.commonHeaders) && { ...c()
                            },
                            ...null == n ? void 0 : n.extraHeader,
                            "Access-Control-Allow-Origin": "*",
                            Vary: "Origin"
                        };
                    t = e, e = (null == o ? void 0 : o.EncEnquiryId) ? t + "/" + o.EncEnquiryId : t;
                    let i = new URLSearchParams(o.data),
                        a = s(o, e, null == n ? void 0 : n.isEb) + e + (i ? "?" + i : ""),
                        l = await fetch(a, {
                            method: "GET",
                            next: {
                                revalidate: 0
                            },
                            headers: r
                        });
                    m(l = await l.text()) && (l = JSON.parse(l));
                    let u = d(l, r, null == n ? void 0 : n.currentUrl);
                    return u && (window.location.href = "/corporate-insurance-v2" + u), l
                },
                post: async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            extraHeader: {},
                            currentUrl: ""
                        },
                        n = {
                            "Content-Type": "application/json",
                            ...c(),
                            ...null == o ? void 0 : o.extraHeader
                        };
                    e = s(t) + e;
                    let r = await fetch(e, {
                        method: "POST",
                        headers: n,
                        body: JSON.stringify(t.data)
                    });
                    m(r = await r.text()) && (r = JSON.parse(r));
                    let i = d(r, n, null == o ? void 0 : o.currentUrl);
                    return i && (window.location.href = "/corporate-insurance-v2" + i), r
                }
            };

            function d(e, Headers, t) {
                let o = null == e ? void 0 : e.isSuccess,
                    r = null == e ? void 0 : e.errorCode,
                    i = "";
                return !o && (1001 == r && (i = "/auth?popupType=1&message=".concat(encodeURIComponent(null == e ? void 0 : e.message), "&redirecturl=").concat(encodeURIComponent((null == e ? void 0 : e.redirectURL) || n.k.BASE_URL_EB))), 1002 == r && window.location.href && (i = "/auth?popupType=2&enquiryid=".concat(null == Headers ? void 0 : Headers.enquiryid, "&MaskedMobileNo=").concat(null == e ? void 0 : e.maskedMobileNo, "&redirecturl=").concat(encodeURIComponent(window.location.href)))), i
            }

            function m(e) {
                try {
                    JSON.parse(e)
                } catch (e) {
                    return !1
                }
                return !0
            }
        },
        52047: function(e, t, o) {
            "use strict";
            o.d(t, {
                B: function() {
                    return n.B
                }
            });
            var n = o(74694)
        },
        57372: function(e, t, o) {
            "use strict";
            o.d(t, {
                t: function() {
                    return n
                }
            });
            let n = function() {
                var e, t;
                let o = !1;
                return t = navigator.userAgent || navigator.vendor || (null === (e = window) || void 0 === e ? void 0 : e.opera), (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (o = !0), o
            }
        },
        95434: function(e) {
            e.exports = {
                errorSectionMain: "errorfallback_errorSectionMain__CtAij",
                wrapper: "errorfallback_wrapper__LiZ9N",
                errorContainer: "errorfallback_errorContainer__kaZkH",
                imageContainer1: "errorfallback_imageContainer1__6IWUd",
                imageContainer2: "errorfallback_imageContainer2__5wCT_",
                errorheading: "errorfallback_errorheading__nFUU6",
                errorpara: "errorfallback_errorpara__78UfT"
            }
        },
        20512: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Roboto_5738b0', '__Roboto_Fallback_5738b0'",
                    fontWeight: 400,
                    fontStyle: "normal"
                },
                className: "__className_5738b0"
            }
        },
        24033: function(e, t, o) {
            e.exports = o(50094)
        }
    },
    function(e) {
        e.O(0, [5209, 6547, 5931, 197, 2971, 2472, 1744], function() {
            return e(e.s = 84488)
        }), _N_E = e.O()
    }
]);