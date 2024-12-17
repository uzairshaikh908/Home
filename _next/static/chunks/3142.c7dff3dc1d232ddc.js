"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3142], {
        1714: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            let o = {
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
        74694: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return s
                }
            });
            var o = n(87534),
                i = n(44881),
                r = n(41369),
                a = n(1714),
                l = n(93723);
            n(24033);
            let d = () => {
                var e;
                return {
                    enquiryid: null === (e = (0, l.t6)()) || void 0 === e ? void 0 : e.EncEnquiryID,
                    AgentId: (0, i.ej)("AgentId") || 0
                }
            };

            function u(e) {
                var t, n;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    d = null == e ? void 0 : e.isHome;
                if (d) return o.k.API_BASE_URL_HOME;
                let u = !!l || (null === r.h || void 0 === r.h ? void 0 : null === (n = r.h.getState()) || void 0 === n ? void 0 : null === (t = n.extras) || void 0 === t ? void 0 : t.isEb);
                return i && a.b.GetInvalidInputs === i ? o.k.API_BASE_URL : u ? o.k.API_BASE_URL_EB : o.k.API_BASE_URL
            }
            let s = {
                get: async function(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            commonHeaders: !0,
                            extraHeader: {},
                            revalidate: 0,
                            isEb: !1,
                            currentUrl: ""
                        },
                        i = { ...(null == o ? void 0 : o.commonHeaders) && { ...d()
                            },
                            ...null == o ? void 0 : o.extraHeader,
                            "Access-Control-Allow-Origin": "*",
                            Vary: "Origin"
                        };
                    t = e, e = (null == n ? void 0 : n.EncEnquiryId) ? t + "/" + n.EncEnquiryId : t;
                    let r = new URLSearchParams(n.data),
                        a = u(n, e, null == o ? void 0 : o.isEb) + e + (r ? "?" + r : ""),
                        l = await fetch(a, {
                            method: "GET",
                            next: {
                                revalidate: 0
                            },
                            headers: i
                        });
                    v(l = await l.text()) && (l = JSON.parse(l));
                    let s = c(l, i, null == o ? void 0 : o.currentUrl);
                    return s && (window.location.href = "/corporate-insurance-v2" + s), l
                },
                post: async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            extraHeader: {},
                            currentUrl: ""
                        },
                        o = {
                            "Content-Type": "application/json",
                            ...d(),
                            ...null == n ? void 0 : n.extraHeader
                        };
                    e = u(t) + e;
                    let i = await fetch(e, {
                        method: "POST",
                        headers: o,
                        body: JSON.stringify(t.data)
                    });
                    v(i = await i.text()) && (i = JSON.parse(i));
                    let r = c(i, o, null == n ? void 0 : n.currentUrl);
                    return r && (window.location.href = "/corporate-insurance-v2" + r), i
                }
            };

            function c(e, Headers, t) {
                let n = null == e ? void 0 : e.isSuccess,
                    i = null == e ? void 0 : e.errorCode,
                    r = "";
                return !n && (1001 == i && (r = "/auth?popupType=1&message=".concat(encodeURIComponent(null == e ? void 0 : e.message), "&redirecturl=").concat(encodeURIComponent((null == e ? void 0 : e.redirectURL) || o.k.BASE_URL_EB))), 1002 == i && window.location.href && (r = "/auth?popupType=2&enquiryid=".concat(null == Headers ? void 0 : Headers.enquiryid, "&MaskedMobileNo=").concat(null == e ? void 0 : e.maskedMobileNo, "&redirecturl=").concat(encodeURIComponent(window.location.href)))), r
            }

            function v(e) {
                try {
                    JSON.parse(e)
                } catch (e) {
                    return !1
                }
                return !0
            }
        },
        52047: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return o.B
                }
            });
            var o = n(74694)
        },
        93723: function(e, t, n) {
            n.d(t, {
                Dc: function() {
                    return i
                },
                t6: function() {
                    return a
                },
                v8: function() {
                    return r
                }
            });
            var o = n(41369);
            let i = () => {
                    var e, t;
                    return null === o.h || void 0 === o.h ? void 0 : null === (t = o.h.getState()) || void 0 === t ? void 0 : null === (e = t.extras) || void 0 === e ? void 0 : e.isEb
                },
                r = () => {
                    var e, t;
                    return null === o.h || void 0 === o.h ? void 0 : null === (t = o.h.getState()) || void 0 === t ? void 0 : null === (e = t.lead) || void 0 === e ? void 0 : e.MatrixLeadId
                },
                a = () => {
                    var e;
                    return null === o.h || void 0 === o.h ? void 0 : null === (e = o.h.getState()) || void 0 === e ? void 0 : e.lead
                }
        },
        33142: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var o = n(57437),
                i = n(87534),
                r = n(1714),
                a = n(52047);
            let l = (e, t) => {
                a.B.get(r.b.GetClaritySetting, {
                    data: {
                        InvestmentTypeID: e,
                        visitLogID: t
                    }
                }).then(e => {
                    var t, n, o, i, r, a, l, d, u, s;
                    (null == e ? void 0 : null === (t = e.Data) || void 0 === t ? void 0 : t.AddClarity) && (null == e ? void 0 : null === (n = e.Data) || void 0 === n ? void 0 : n.ProjectCode) && (i = window, r = document, a = "clarity", l = "script", d = null == e ? void 0 : null === (o = e.Data) || void 0 === o ? void 0 : o.ProjectCode, i[a] = i[a] || function() {
                        (i[a].q = i[a].q || []).push(arguments)
                    }, (u = r.createElement(l)).async = 1, u.src = "https://www.clarity.ms/tag/" + d, (s = r.getElementsByTagName(l)[0]).parentNode.insertBefore(u, s))
                })
            };
            var d = n(48475),
                u = n.n(d),
                s = n(2265),
                c = n(93046),
                v = () => {
                    var e;
                    let t = (0, c.v9)(e => e.lead),
                        n = null === (e = (0, c.v9)(e => e.extras)) || void 0 === e ? void 0 : e.isEb;
                    return (0, s.useEffect)(() => {
                        let e = (null == t ? void 0 : t.VisitLogID) || (null == t ? void 0 : t.VisitLogId);
                        (null == t ? void 0 : t.InvestmentTypeId) && e && l(null == t ? void 0 : t.InvestmentTypeId, e)
                    }, [null == t ? void 0 : t.InvestmentTypeId, null == t ? void 0 : t.VisitLogId, t.VisitLogID, n]), (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("noscript", {
                            children: (0, o.jsx)("iframe", {
                                src: "https://www.googletagmanager.com/ns.html?id=".concat(i.k.GTM),
                                height: "0",
                                width: "0",
                                style: {
                                    display: "none",
                                    visibility: "hidden"
                                }
                            })
                        }), (0, o.jsx)(u(), {
                            id: "gtm-script",
                            async: !0,
                            strategy: "lazyOnload",
                            dangerouslySetInnerHTML: {
                                __html: "\n                    console.log('loading gtm  lazy on load');\n                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','".concat(i.k.GTM, "')\n      ")
                            }
                        })]
                    })
                }
        }
    }
]);