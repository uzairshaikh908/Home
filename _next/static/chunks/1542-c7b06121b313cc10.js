(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1542], {
        51542: function(e, o, l) {
            "use strict";
            l.d(o, {
                Z: function() {
                    return Z
                }
            });
            var i = l(57437),
                a = l(36753),
                n = l(33431),
                t = l(41057),
                d = l(93046),
                r = l(39938),
                s = l(28811),
                c = l.n(s),
                u = l(57467),
                m = l(2265);
            let p = () => (0, i.jsx)(u.Z, {
                    height: 56,
                    width: "100%",
                    style: {
                        borderRadius: "8px"
                    }
                }),
                v = () => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(u.Z, {
                        height: 56,
                        width: "100%",
                        style: {
                            borderRadius: "8px",
                            marginTop: 10
                        }
                    }), (0, i.jsx)(u.Z, {
                        height: 13,
                        width: "20%",
                        style: {
                            borderRadius: "13px",
                            marginTop: 18
                        }
                    }), (0, i.jsxs)("div", {
                        className: "mobile",
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            columnGap: 8,
                            rowGap: 15,
                            margin: "16px 0 15px 6px"
                        },
                        children: [Array(9).fill(0).map((e, o) => (0, i.jsx)(u.Z, {
                            height: 38,
                            width: 100,
                            style: {
                                borderRadius: "40px"
                            }
                        }, o)), (0, i.jsx)(u.Z, {
                            height: 38,
                            width: 100,
                            style: {
                                borderRadius: "40px"
                            }
                        })]
                    }), (0, i.jsx)("div", {
                        className: "desktop",
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            columnGap: 8,
                            rowGap: 15,
                            margin: "16px 0 15px 6px"
                        },
                        children: Array(9).fill(0).map((e, o) => (0, i.jsx)(u.Z, {
                            height: 38,
                            width: 120,
                            style: {
                                borderRadius: "40px"
                            }
                        }, o))
                    })]
                }),
                h = c()(() => l.e(2540).then(l.bind(l, 92540)), {
                    loadableGenerated: {
                        webpack: () => [92540]
                    },
                    loading: () => (0, i.jsx)(u.Z, {
                        height: 56,
                        width: "100%",
                        style: {
                            borderRadius: "8px"
                        }
                    })
                }),
                b = c()(() => l.e(348).then(l.bind(l, 60348)), {
                    loadableGenerated: {
                        webpack: () => [60348]
                    },
                    loading: () => (0, i.jsx)(u.Z, {
                        height: 56,
                        width: "100%",
                        style: {
                            borderRadius: "8px"
                        }
                    })
                }),
                y = c()(() => l.e(5242).then(l.bind(l, 75242)), {
                    loadableGenerated: {
                        webpack: () => [75242]
                    },
                    loading: () => (0, i.jsx)(p, {})
                }),
                k = c()(() => l.e(2705).then(l.bind(l, 72705)), {
                    loadableGenerated: {
                        webpack: () => [72705]
                    },
                    loading: () => (0, i.jsx)(v, {})
                }),
                g = c()(() => l.e(7029).then(l.bind(l, 27029)), {
                    loadableGenerated: {
                        webpack: () => [27029]
                    },
                    loading: () => (0, i.jsx)(p, {})
                });
            var f = e => {
                let {
                    loader: o,
                    FieldsArray: l,
                    errors: a,
                    onChangeFunctions: t,
                    leadDetails: d,
                    stateData: s,
                    setStateData: c,
                    Data: p,
                    FieldWrapper: f,
                    FieldError: C,
                    refFunc: x,
                    campaignDetails: w,
                    GAClickEvent: N,
                    MobileFieldExtraProps: E,
                    Components: I,
                    isSubmitClicked: L
                } = e, _ = (0, m.useCallback)(() => (0, i.jsx)(u.Z, {
                    height: 56,
                    width: "100%",
                    style: {
                        borderRadius: "8px"
                    }
                }), []), j = (null == I ? void 0 : I.LeadMobileField) || h, M = (null == I ? void 0 : I.LeadCompanyField) || y, S = (null == I ? void 0 : I.LeadCityField) || k, F = (null == I ? void 0 : I.LeadEmailField) || g, G = (null == I ? void 0 : I.LeadNumberOfEmployee) || b;
                return (0, i.jsx)(i.Fragment, {
                    children: l.map(e => {
                        let l = null == t ? void 0 : t[n.m6[e]];
                        switch (e) {
                            case r.a.LeadMobile:
                                return (0, i.jsx)(f, {
                                    loader: !1,
                                    wkey: "mobileno",
                                    onChangeFn: l,
                                    skeleton: (0, i.jsx)(_, {}),
                                    checked: !a.MobileNo && !(null == E ? void 0 : E.invalidNumberError) && ((null == s ? void 0 : s.isLeadMobileMasked) ? null == d ? void 0 : d.MaskedMobileNo : null == d ? void 0 : d.MobileNo),
                                    children: (0, i.jsx)(j, {
                                        onChange: l,
                                        mobileNo: null == d ? void 0 : d.MobileNo,
                                        maskedMobileNo: null == d ? void 0 : d.MaskedMobileNo,
                                        error: a.MobileNo,
                                        isLeadMobileMasked: null == s ? void 0 : s.isLeadMobileMasked,
                                        setStateData: c,
                                        refFunc: x,
                                        FieldError: C,
                                        GAClickEvent: N,
                                        MobileFieldExtraProps: E,
                                        isSubmitClicked: L
                                    })
                                }, "mobile");
                            case r.a.LeadNumberOfEmployee:
                                return (0, i.jsx)(f, {
                                    loader: o,
                                    wkey: "mobileno",
                                    onChangeFn: l,
                                    skeleton: (0, i.jsx)(_, {}),
                                    children: (0, i.jsx)(G, {
                                        onChange: l,
                                        NumberOfEmployees: null == d ? void 0 : d.NumberOfEmployees,
                                        error: a.NumberOfEmployees,
                                        setStateData: c,
                                        FieldError: C,
                                        refFunc: x
                                    })
                                }, "mobile");
                            case r.a.LeadCompanyName:
                                return (0, i.jsx)(f, {
                                    loader: o,
                                    wkey: "companyname",
                                    onChangeFn: l,
                                    skeleton: (0, i.jsx)(_, {}),
                                    checked: (null == d ? void 0 : d.CompanyName) && !a.CompanyName,
                                    children: (0, i.jsx)(M, {
                                        onChange: l,
                                        companyName: null == d ? void 0 : d.CompanyName,
                                        error: a.CompanyName,
                                        FieldError: C,
                                        refFunc: x,
                                        GAClickEvent: N
                                    }, "company")
                                }, "company");
                            case r.a.LeadCity:
                                var u;
                                return (0, i.jsx)(f, {
                                    loader: o,
                                    onChangeFn: l,
                                    wkey: "Cityname",
                                    checked: !!(null == d ? void 0 : null === (u = d.City) || void 0 === u ? void 0 : u.CityId),
                                    skeleton: (0, i.jsx)(v, {}),
                                    children: (0, i.jsx)(S, {
                                        onChange: l,
                                        city: null == d ? void 0 : d.City,
                                        error: a.City,
                                        refFunc: x,
                                        GAClickEvent: N,
                                        CitySkeleton: v,
                                        FieldError: C,
                                        setStateData: c
                                    }, "City")
                                }, "City");
                            case r.a.LeadEmail:
                                return (0, i.jsx)(f, {
                                    loader: o,
                                    wkey: "email",
                                    onChangeFn: l,
                                    skeleton: (0, i.jsx)(_, {}),
                                    checked: (null == d ? void 0 : d.Email) && !a.Email,
                                    children: (0, i.jsx)(F, {
                                        onChange: l,
                                        email: null == d ? void 0 : d.Email,
                                        error: a.Email,
                                        FieldError: C,
                                        refFunc: x,
                                        GAClickEvent: N
                                    })
                                }, "email");
                            default:
                                return null
                        }
                    })
                })
            };
            l(24033);
            var C = l(17222),
                x = l(12399),
                w = l(74581),
                N = l(34962),
                E = l(43320);
            let I = e => {
                var o;
                let {
                    searchParams: l,
                    payload: i,
                    leadDetails: a,
                    step: n,
                    campaignDetails: t
                } = e, d = structuredClone(i), r = l.isApp || 0;
                return delete d.WCDetails, delete d.ModeOfTransportID, delete d.IsPEDCovered, delete d.ModeOfTransport, delete d.ModeOfTransportID, delete d.NoofLivesRangeId, delete d.RiskCategoryID, delete d.RiskFactorID, delete d.showHelp, void 0 === d || null == d || (d && (null == d ? void 0 : d.VisitLogID) && (d.VisitLogId = d.VisitLogID), delete d.VisitLogID, (d && (null == d ? void 0 : d.VisitLogId) == "" || "string" == typeof(null == d ? void 0 : d.VisitLogId)) && d.VisitLogId, d.MobileNo && (d.MaskedMobileNo = null, d.EncMobileNo = null), d.MobileNo || (d.MobileNo = 0), d.LeadPageURL = window.location.href, d.LeadPageSource = 2, d.LeadPageType = 0, d.InitialNoofLives = (null == d ? void 0 : d.NumberOfEmployees) || null, d.SetDemographyData = 2 == n, d.PageStep = 2 == n ? "Mkt-lead-2" : "Mkt-Lead-1", d.Headers.VisitLogId = null == d ? void 0 : d.VisitLogId, (null == d ? void 0 : null === (o = d.Headers) || void 0 === o ? void 0 : o.UtmDetails) && (d.Headers.UtmDetails.isApp = Number(r))), d
            };
            var L = l(73470),
                _ = l(87534);
            let j = function(e) {
                let {
                    InvestmentTypeId: o,
                    leadDetails: l,
                    router: i
                } = e, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], t = "", {
                    EncEnquiryID: d
                } = l;
                if (n) {
                    t = "rfq?enquiryid=".concat(d, "&v=2&IsError=31"), window.location.href = _.k.BASE_URL_EB + t;
                    return
                }
                let r = () => {
                    let e = "";
                    return (null == l ? void 0 : l.VisitCreationTime) && (e = "&VisitCreationTime=".concat(null == l ? void 0 : l.VisitCreationTime)), (null == l ? void 0 : l.LeadCreationTime) && (e += "&LeadCreationTime=".concat(null == l ? void 0 : l.LeadCreationTime)), e
                };
                switch (o) {
                    case L.s.GHI:
                        t = "GHIPlans?enquiryid=".concat(d, "&v=2").concat(r()), a ? t += "&isScheduleCallback=true" : t += "&dtl=true";
                        break;
                    case L.s.GPA:
                        t = "Gpa?enquiryid=".concat(d, "&step=2&v=2").concat(r());
                        break;
                    case L.s.GTL:
                        t = "GTLPrequote?enquiryid=".concat(d, "&v=2");
                        break;
                    case L.s.GTI:
                        t = "GTIPrequote?enquiryid=".concat(d, "&v=2")
                }
                t && (window.location.href = _.k.BASE_URL_EB + t)
            };
            l(93377);
            var M = l(92220);
            let {
                CJTracker: S
            } = l(93377), F = async (e, o) => {
                await S(e, {
                    pageid: 18,
                    InvestmentTypeId: o
                }), await S(e, {
                    pageid: 29,
                    InvestmentTypeId: o
                })
            };
            var G = l(22370),
                T = l(48388);
            let D = e => {
                let {
                    value: o,
                    id: l,
                    errMessage: i,
                    minLength: a,
                    maxLength: n,
                    onlyAlhaCharacters: t = !1
                } = e;
                return o && 0 !== o.length ? o.length < a ? i || "Value must be minimum ".concat(a, " characters long") : n && o.length > n ? i || "Value should be smaller than ".concat(n, " characters long") : "" : ""
            };
            l(3434);
            var B = l(63731),
                P = l(51726),
                V = l(2530),
                O = l(98329);
            let A = c()(() => Promise.all([l.e(2289), l.e(2476)]).then(l.bind(l, 62289)), {
                    loadableGenerated: {
                        webpack: () => [62289]
                    }
                }),
                R = c()(() => l.e(9875).then(l.bind(l, 9961)), {
                    loadableGenerated: {
                        webpack: () => [9961]
                    }
                }),
                q = {
                    MobileNo: [G._, "Please enter 10 digit mobile number"],
                    CompanyName: [(0, T.qg)(3), "Please enter your company name"],
                    City: [null, "Please enter city"],
                    NumberOfEmployees: [function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                        return function(l) {
                            return D({ ...l,
                                minLength: e,
                                maxLength: o
                            })
                        }
                    }(), "Minimum 7 number of employees are required"],
                    Email: [e => {
                        let {
                            value: o = "",
                            errMessage: l = ""
                        } = e;
                        return (0, P.lV)(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/, o, l || B.w8d)
                    }, "Please enter valid email id"]
                };
            var Z = e => {
                var o, l;
                let {
                    Wrapper: s,
                    FieldWrapper: c,
                    FieldsArray: u,
                    step: p,
                    continueCallback: v,
                    VirtualPage: h,
                    GAClickEvent: b,
                    GAViewedEvent: y,
                    totalSteps: k,
                    FieldError: g,
                    Data: _,
                    OnChangeFunctions: S,
                    Components: G,
                    IsRenewal: T = !1,
                    campaignDetails: D
                } = e, B = (0, d.I0)(), P = (0, d.v9)(e => e.lead), Z = (0, d.v9)(e => e.loader[N.kf.initialLoader]), [W, H] = (0, m.useState)({
                    isLeadMobileMasked: null != D && !!D.ServerLeadDetails && !!(null == D ? void 0 : null === (o = D.ServerLeadDetails) || void 0 === o ? void 0 : o.MaskedMobileNo)
                }), [U, Q] = (0, m.useState)(!1), [K, Y] = (0, m.useState)(!1), {
                    searchParams: z,
                    bookdemo: J
                } = (0, d.v9)(e => e.extras), $ = z.enquiryid, X = e => !u.includes(e), ee = {
                    MobileNo: null != W && !!W.isLeadMobileMasked || (null == P ? void 0 : P.MobileNo) || X(r.a.LeadMobile),
                    NumberOfEmployees: (null == P ? void 0 : P.NumberOfEmployees) > 6 && (null == P ? void 0 : P.NumberOfEmployees) || X(r.a.LeadNumberOfEmployee),
                    CompanyName: (null == P ? void 0 : P.CompanyName) || X(r.a.LeadCompanyName),
                    City: (null == P ? void 0 : null === (l = P.City) || void 0 === l ? void 0 : l.CityId) || X(r.a.LeadCity),
                    IsCompany: "boolean" == typeof(null == P ? void 0 : P.IsCompany) || X(r.a.LeadIsCompanyRadio),
                    Email: (null == P ? void 0 : P.Email) || X(r.a.LeadEmail)
                }, {
                    checkShowMobileNoInvalidPopup: eo,
                    InvalidPopupProps: el,
                    showInvalidPopup: ei,
                    invalidNumberError: ea
                } = (0, w.ZP)({
                    MobileNo: String(null == P ? void 0 : P.MobileNo),
                    clearAndFocus: () => {
                        ed("MobileNo"), B((0, M.V4)({
                            MobileNo: 0
                        }))
                    }
                }), [en, et, ed] = (0, C.Z)({
                    focusDelay: 500
                }), [{
                    errorsA: er
                }, es, ec] = (0, a.Z)({
                    VALID: q,
                    step: 1,
                    stepAstate: ee,
                    focus: ed
                }), eu = (0, t.p)({
                    functions: S ? [] : (0, n.hV)(u),
                    validate: es
                });
                (0, m.useEffect)(() => {
                    Z || (h({
                        searchParams: z,
                        pageType: 1 == p ? "landing" : "City Page"
                    }), 1 == p && (window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    }), y("LeadFormViewed"), b("Click", "Proceed-StepA", {
                        newEventCategory: "sme_marketingLead",
                        nonInteraction: !1,
                        eventCategoryType: null,
                        leadSubmit: "leadSubmit"
                    })), 2 == p && (window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    }), y("CityViewed"), b("Click", "Proceed-StepB", {
                        newEventCategory: "sme_marketingLead",
                        nonInteraction: !1,
                        eventCategoryType: null,
                        leadSubmit: ""
                    })))
                }, [Z, p]), (0, m.useEffect)(() => {
                    (0, E.l)({
                        key: "step",
                        value: p
                    })
                }, [p, null == D ? void 0 : D.CJTrackingIds]), (0, m.useEffect)(() => {
                    (null == W ? void 0 : W.citySelected) && 2 == u.length && u[1] == r.a.LeadCity && P.City.CityId && em()
                }, [null == W ? void 0 : W.citySelected]);
                let em = async () => {
                    Y(!0);
                    let {
                        isError: e,
                        errors: o = {}
                    } = ec(null, {
                        validateReqFieldOnContinue: !0,
                        returnErrors: !0
                    });
                    if (e) b("ContinueClickederror", Object.values(o).join(","));
                    else {
                        var l, i;
                        if (!X(r.a.LeadMobile) && await eo()) return;
                        Q(!0);
                        let e = { ...P
                        };
                        (e = I({
                            searchParams: z,
                            payload: e,
                            leadDetails: P,
                            step: p,
                            campaignDetails: D
                        })).CampaignId = (null == z ? void 0 : z.campaignid) || (null == D ? void 0 : D.defaultCampaign), e.PageId = 1 == p ? 28 : 1, (null == e ? void 0 : null === (l = e.Headers) || void 0 === l ? void 0 : l.EncEnquiryId) || (null == e || null === (i = e.Headers) || void 0 === i || delete i.EncEnquiryID, e.Headers.EncEnquiryId = (null == e ? void 0 : e.EncEnquiryID) || ""), J && (e.LeadPageSource = 2, e.LeadPageType = 4, e.FamilyDefinitionId = 0);
                        let o = await (0, x.w)({
                            payload: e,
                            campaignDetails: D,
                            step: p,
                            QueryParamEncEnquiryId: $,
                            GAClickEvent: b,
                            totalSteps: k,
                            dispatch: B,
                            IsEb: !0
                        });
                        (null == o ? void 0 : o.IsSuccess) ? ((0, O.h)(o), 1 == p && (null == o ? void 0 : o.InvestmentTypeId) == L.s.GHI && await F(null == o ? void 0 : o.EncEnquiryID, null == o ? void 0 : o.InvestmentTypeId), (p == k || J) && j({
                            InvestmentTypeId: null == o ? void 0 : o.InvestmentTypeId,
                            leadDetails: o
                        }, J, T), J && B((0, V.xT)(!1)), Q(!1), p == k || J || v(p)) : (alert("Something went wrong"), Q(!1))
                    }
                };
                return (0, m.useEffect)(() => {
                    P && 10 == String(null == P ? void 0 : P.MobileNo).length && !J && em()
                }, [null == P ? void 0 : P.MobileNo]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s, {
                        loader: U,
                        handleContinue: em,
                        step: p,
                        handleback: () => {
                            v(0)
                        },
                        onWhatsAppToggle: e => {
                            let {
                                name: o,
                                checked: l
                            } = e.target;
                            b("WhatsappConsentClicked", l ? "On" : "Off"), B((0, M.V4)({
                                [o]: l
                            }))
                        },
                        WhatsappOptIn: P.WhatsappOptIn,
                        stickyOnScrollCTABtn: !0,
                        children: (0, i.jsx)(f, {
                            FieldsArray: u,
                            errors: er,
                            onChangeFunctions: S ? S({
                                updateLead: function() {
                                    for (var e = arguments.length, o = Array(e), l = 0; l < e; l++) o[l] = arguments[l];
                                    return B((0, M.V4)(...o))
                                },
                                validate: es
                            }) : eu,
                            leadDetails: Z && (null == D ? void 0 : D.ServerLeadDetails) ? null == D ? void 0 : D.ServerLeadDetails : P,
                            stateData: W,
                            setStateData: H,
                            FieldWrapper: c,
                            refFunc: et,
                            FieldError: g,
                            MobileFieldExtraProps: {
                                invalidNumberError: ea
                            },
                            GAClickEvent: b,
                            GAViewedEvent: y,
                            VirtualPage: h,
                            Components: G,
                            isSubmitClicked: K
                        })
                    }), !Z && !!P.MobileNo && (0, i.jsx)(R, { ...el
                    }), (0, i.jsx)(A, {})]
                })
            }
        },
        3434: function(e, o, l) {
            "use strict";
            l.d(o, {
                c: function() {
                    return m
                }
            });
            var i = l(57437),
                a = l(92129),
                n = l.n(a),
                t = l(16691),
                d = l.n(t),
                r = l(57042);
            l(93006), l(92220);
            var s = l(93046),
                c = l(48064),
                u = l(2530);
            let m = e => {
                let {
                    loader: o,
                    onChangeFn: l,
                    children: a,
                    skeleton: t,
                    wkey: d,
                    checked: s
                } = e;
                return o || !l ? (0, i.jsx)("div", {
                    className: (0, r.Z)(n().formfield, n().formGroup),
                    children: t
                }) : (0, i.jsx)("div", {
                    className: (0, r.Z)(n().formfield, n().formGroup, s && n().fieldCheck),
                    children: a
                })
            };
            o.Z = function(e) {
                let {
                    loader: o = !1,
                    totalSteps: l,
                    children: a,
                    handleContinue: t,
                    step: r = 2,
                    handleback: m,
                    WhatsappOptIn: p,
                    onWhatsAppToggle: v
                } = e, h = (0, s.I0)();
                return (0, i.jsx)("div", {
                    className: "".concat(n().bookdemo),
                    children: (0, i.jsx)("div", {
                        className: "".concat(n().bookdemopaper),
                        children: (0, i.jsxs)("div", {
                            className: "".concat(n().demoform),
                            children: [(0, i.jsx)("div", {
                                className: "".concat(n().booktitle),
                                children: "Enter your details and book a demo now"
                            }), (0, i.jsx)(d(), {
                                width: 16,
                                height: 18,
                                src: "https://static.pbcdn.in/sme-cdn/images/marketing/close.svg",
                                alt: "closeIcon",
                                className: n().closebtn,
                                onClick: () => {
                                    h((0, u.xT)(!1))
                                }
                            }), (0, i.jsxs)("div", {
                                className: "".concat(n().bookdemoform),
                                children: [a, (0, i.jsx)("div", {
                                    className: n().instruction,
                                    children: "To keep you updated with your demo"
                                }), (0, i.jsxs)("div", {
                                    className: n().whatsappUpdates,
                                    children: [(0, i.jsxs)("p", {
                                        children: [(0, i.jsx)("i", {}), " Get Quotes on Whatsapp"]
                                    }), (0, i.jsx)("span", {
                                        className: n().MuiSwitchRoot,
                                        children: (0, i.jsxs)("label", {
                                            className: n().Switch,
                                            children: [(0, i.jsx)("input", {
                                                type: "checkbox",
                                                className: n().WhatsappOptIn,
                                                name: "WhatsappOptIn",
                                                checked: p,
                                                onChange: v
                                            }), (0, i.jsx)("div", {
                                                className: n().slider
                                            })]
                                        })
                                    })]
                                }), (0, i.jsx)("button", {
                                    onClick: t,
                                    id: "contunue",
                                    className: n().continueBtn,
                                    children: o ? (0, i.jsx)(c.Z, {}) : "Continue"
                                })]
                            })]
                        })
                    })
                })
            }
        },
        92129: function(e) {
            e.exports = {
                bookdemo: "Bookedemo_bookdemo__yFSn4",
                bookdemopaper: "Bookedemo_bookdemopaper__WSA0U",
                demoform: "Bookedemo_demoform__Kfhhz",
                booktitle: "Bookedemo_booktitle__pY9LE",
                closebtn: "Bookedemo_closebtn__po4s9",
                bookdemoform: "Bookedemo_bookdemoform__SCU_W",
                formfield: "Bookedemo_formfield__OmDZl",
                fieldCheck: "Bookedemo_fieldCheck__LGAyH",
                error: "Bookedemo_error__VwGpH",
                formGroup: "Bookedemo_formGroup__yVioM",
                instruction: "Bookedemo_instruction__rkLYD",
                continueBtn: "Bookedemo_continueBtn__3QGkm",
                whatsappUpdates: "Bookedemo_whatsappUpdates__WKnW7",
                MuiSwitchRoot: "Bookedemo_MuiSwitchRoot__vjAqD",
                Switch: "Bookedemo_Switch__Itytg",
                slider: "Bookedemo_slider__1o83w"
            }
        }
    }
]);