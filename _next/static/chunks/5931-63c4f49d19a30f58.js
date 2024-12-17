"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5931], {
        87534: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return a
                }
            });
            var i = n(62601);
            let a = {
                API_BASE_URL: "https://smebusiness.policybazaar.com/api/",
                API_BASE_URL_EB: "https://sme.policybazaar.com/api/",
                API_BASE_URL_HOME: "https://home.policybazaar.com/api/",
                CACHE_VER: i.env.NEXT_PUBLIC_CACHE_VER,
                BASE_URL: "https://smebusiness.policybazaar.com/",
                BASE_URL_EB: "https://sme.policybazaar.com/",
                BASE_URL_HOME: "https://home.policybazaar.com/",
                APILIST_VER: i.env.NEXT_PUBLIC_APILIST_VER,
                MASTER_VER: i.env.NEXT_PUBLIC_MASTER_VER,
                TOKEN_KEY: "x-access-token",
                API_TOKEN: "",
                API_TOKEN_NAME: "",
                COOKIE_LOGIN: "false",
                VALIDATION_VER: i.env.NEXT_PUBLIC_VALIDATION_VER,
                CITY_VER: i.env.NEXT_PUBLIC_CITY_VER,
                GTM: "GTM-PW5K",
                CND_BASE_URL: "https://static.pbcdn.in/sme-cdn",
                GOOGLE_API_KEY: "AIzaSyBqd8ykwh693hpFm7gRICWZx3QuMuRcqG4"
            }
        },
        44881: function(e, t, n) {
            n.d(t, {
                d8: function() {
                    return i
                },
                ej: function() {
                    return a
                },
                lN: function() {
                    return u
                },
                pV: function() {
                    return r
                },
                wf: function() {
                    return o
                }
            });
            let i = function(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "domain=.policybazaar.com";
                    var a = new Date;
                    a.setTime(a.getTime() + n);
                    var o = "expires=" + a.toUTCString();
                    document.cookie = e + "=" + t + ";" + o + ";path=/;" + i + ";secure=true"
                },
                a = e => {
                    for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
                        for (var a = n[i];
                            " " == a.charAt(0);) a = a.substring(1);
                        if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
                    }
                    return ""
                },
                o = (e, t, n) => {
                    var i = new Date;
                    i.setTime(i.getTime() + n);
                    var a = "expires=" + i.toUTCString();
                    document.cookie = e + "=" + t + ";" + a + ";path=/;secure=true"
                },
                r = (e, t) => {
                    if (i("Cookie_VisitLog", encodeURIComponent(e.VisitLogID), 72e5), !t && e.UserId) {
                        var n, a;
                        i("UID", encodeURIComponent(e.UserId), 63072e6, null === (a = window) || void 0 === a ? void 0 : null === (n = a.location) || void 0 === n ? void 0 : n.host)
                    }
                },
                u = (e, t) => {
                    var n = new Date;
                    n.setTime(n.getTime() + 9e5);
                    var i = "expires=" + n.toUTCString();
                    document.cookie = e + "=" + t + ";" + i + ";path=/;secure=true"
                }
        },
        98157: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return a
                }
            });
            var i = n(44881);
            let a = e => {
                    var t, n, a, u, d, s, c;
                    let {
                        searchParams: l
                    } = e, m = {}, p = !1;
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (p = !0);
                    let f = l.leadsource || (p ? "PBMobile" : "PB");
                    if ((19 == l.campaignid || "PBMOBILEAPP" == l.leadsource || "PBMOBILEAPP" == l.leadSource) && (f = "PBMOBILEAPP"), m = {
                            LeadSource: f,
                            Browser: null === (a = window) || void 0 === a ? void 0 : null === (n = a.navigator) || void 0 === n ? void 0 : null === (t = n.userAgent) || void 0 === t ? void 0 : t.replace(/;/g, ""),
                            ExitPointUrl: null === (d = window) || void 0 === d ? void 0 : null === (u = d.location) || void 0 === u ? void 0 : u.href,
                            RequestUrl: null === (c = window) || void 0 === c ? void 0 : null === (s = c.location) || void 0 === s ? void 0 : s.href,
                            LandingPageName: "SME",
                            VisitorToken: ""
                        }, l.utm_source || l.pb_source || l.utm_medium || l.pb_medium || l.utm_term || l.pb_term || l.utm_campaign || l.pb_campaign || l.utm_content || l.pb_content) {
                        let e = (0, i.ej)("VisitProfileCookie") || !1,
                            t = e ? JSON.parse(e) : {};
                        m.UtmSource = l.utm_source || l.pb_source || t.UtmSource || "", m.UtmMedium = l.utm_medium || l.pb_medium || t.UtmMedium || "", m.UtmTerm = l.utm_term || l.pb_term || t.UtmTerm || "", m.UtmCampaign = l.utm_campaign || l.pb_campaign || t.UtmCampaign || "", m.UtmContent = l.utm_content || l.pb_content || t.UtmContent || "", "organic" === m.UtmSource && (m.UtmMedium = "cj"), (0, i.d8)("VisitProfileCookie", encodeURIComponent(JSON.stringify(m)), 27e5), "PBP_SME" === m.UtmSource ? (0, i.lN)("SMEPBPartner", encodeURIComponent("PBP_SME")) : (0, i.lN)("SMEPBPartner", encodeURIComponent(""))
                    } else {
                        let e = (0, i.ej)("VisitProfileCookie");
                        if (e) {
                            let t = JSON.parse(e);
                            m.UtmMedium = t.UtmMedium, m.UtmSource = t.UtmSource, m.UtmTerm = t.UtmTerm, m.UtmContent = t.UtmContent, m.UtmCampaign = t.UtmCampaign, "PBP_SME" === t.UtmSource ? (0, i.lN)("SMEPBPartner", encodeURIComponent("PBP_SME")) : (0, i.lN)("SMEPBPartner", encodeURIComponent(""))
                        } else {
                            let e = document.referrer;
                            e.indexOf("google") > -1 || e.indexOf("yahoo") > -1 || e.indexOf("bing") > -1 ? (m.UtmSource = "organic", m.UtmMedium = "cj") : (m.UtmSource = l.utm_source || l.pb_source || "", m.UtmMedium = l.utm_medium || l.pb_medium || ""), m.UtmTerm = l.utm_term || l.pb_term || "", m.UtmCampaign = l.utm_campaign || l.pb_campaign || "", m.UtmContent = l.utm_content || l.pb_content || "", (0, i.d8)("VisitProfileCookie", encodeURIComponent(JSON.stringify(m), 27e5))
                        }
                    }
                    return m.EncUTMDetails = l.token || "", {
                        utmData: m,
                        ...o(),
                        ...r()
                    }
                },
                o = () => {
                    let e = (0, i.ej)("Cookie_VisitLog") || 0,
                        t = (0, i.ej)("UID"),
                        n = t && "undefined" != t ? t : "";
                    return {
                        visitId: e = e && "null" !== e ? "" == n ? 0 : e : 0,
                        userId: n
                    }
                },
                r = () => {
                    let e = document.cookie.split(";");
                    for (let a = 0; a < e.length; a++) {
                        let o = e[a].trim();
                        if ("ClientID=" === o.substring(0, 9)) var t = e[a].substr(10);
                        if ("_gcl_aw=" === o.substring(0, 8)) var n = e[a].split(".")[2];
                        if ("AgentId=" === o.substring(0, 8)) var i = !e[a].substr(9)
                    }
                    return {
                        getGACID: t,
                        getGCLID: n,
                        IsExternal: i
                    }
                }
        },
        2530: function(e, t, n) {
            n.d(t, {
                $Y: function() {
                    return p
                },
                Wu: function() {
                    return o
                },
                XA: function() {
                    return r
                },
                Zr: function() {
                    return s
                },
                d5: function() {
                    return d
                },
                gf: function() {
                    return c
                },
                kN: function() {
                    return l
                },
                xT: function() {
                    return m
                },
                xr: function() {
                    return u
                }
            });
            var i = n(39730);
            let a = (0, i.oM)({
                    name: "extras",
                    initialState: {
                        gaDetails: {},
                        focusDisclaimer: !1,
                        openKnowMore: !1,
                        searchParams: {}
                    },
                    reducers: {
                        updateIsEb: (e, t) => {
                            e.isEb = t.payload.isEb
                        },
                        updateOfferIdAndCampaignId: (e, t) => {
                            e.offerid = t.payload.offerid, e.campaignid = t.payload.campaignid
                        },
                        updateGADetails: (e, t) => {
                            t.payload && (e.gaDetails = { ...e.gaDetails,
                                ...t.payload
                            })
                        },
                        updateExtras: (e, t) => ({ ...e,
                            ...t.payload
                        }),
                        updateBackFn: (e, t) => {
                            e.back = t.payload.back
                        },
                        focusDisclaimer: (e, t) => {
                            e.focusDisclaimer = t.payload
                        },
                        openKnowMore: (e, t) => {
                            e.openKnowMore = t.payload
                        },
                        bookDemo: (e, t) => {
                            e.bookdemo = t.payload
                        },
                        IsBookdemo: (e, t) => {
                            e.IsBookdemo = t.payload
                        }
                    }
                }),
                {
                    updateIsEb: o,
                    updateExtras: r,
                    updateOfferIdAndCampaignId: u,
                    updateGADetails: d,
                    updateBackFn: s,
                    focusDisclaimer: c,
                    openKnowMore: l,
                    bookDemo: m,
                    IsBookdemo: p
                } = a.actions;
            t.ZP = a.reducer
        },
        92220: function(e, t, n) {
            n.d(t, {
                CD: function() {
                    return I
                },
                J2: function() {
                    return p
                },
                Kk: function() {
                    return m
                },
                Tf: function() {
                    return l
                },
                V4: function() {
                    return r
                },
                W_: function() {
                    return u
                },
                _X: function() {
                    return c
                },
                iR: function() {
                    return s
                },
                j5: function() {
                    return _
                },
                rJ: function() {
                    return g
                },
                sZ: function() {
                    return d
                },
                tH: function() {
                    return C
                },
                uH: function() {
                    return f
                }
            });
            var i = n(39730);
            let a = e => (t, n) => {
                    t[e] = { ...t[e],
                        ...n.payload
                    }
                },
                o = (0, i.oM)({
                    name: "lead",
                    initialState: {
                        Headers: {
                            IPAddress: "",
                            VisitLogId: 0,
                            EncEnquiryID: "",
                            CustomerID: 0,
                            UtmDetails: {},
                            AgentId: null,
                            SessionID: null
                        },
                        EncEnquiryID: "",
                        VisitLogId: 0,
                        InvestmentTypeId: 0,
                        InsurancePolicy: "",
                        CompanyName: "",
                        ContactPerson: "",
                        MobileNo: 0,
                        MaskedMobileNo: "",
                        City: {
                            cityId: 0,
                            stateId: 0,
                            cityName: "",
                            stateName: ""
                        },
                        FamilyDefinitionId: 2,
                        FamilyDefinition: "",
                        Email: null,
                        NumberOfEmployees: 0,
                        AgeRange: 0,
                        CargoTypeID: 0,
                        ModeOfTransportID: "",
                        ModeOfTransport: "",
                        PolicyTypeID: 0,
                        SumInsured: 0,
                        RiskCategoryID: 0,
                        RiskFactorID: 0,
                        Insudtry: "",
                        IndustryTypeID: 0,
                        CJType: 0,
                        IsFromPreQuote: !0,
                        LocationId: "",
                        showHelp: !1,
                        WCDetails: {
                            Period: 0,
                            EmployeeDetails: []
                        },
                        WhatsappOptIn: !0,
                        IsPEDCovered: !1,
                        IsMaternityCovered: !1,
                        Salutation: 1,
                        VisitLogID: "",
                        FlowName: "Direct",
                        UserId: 0,
                        IsSuccess: !0,
                        ErrorCode: 0,
                        UID: 0,
                        NoofLivesRangeId: 0,
                        EncEmail: "",
                        EncMobileNo: "",
                        FireBurglarySIDetails: []
                    },
                    reducers: {
                        updateLead: (e, t) => (delete t.payload.Headers, { ...e,
                            ...t.payload
                        }),
                        updateUTM: (e, t) => {
                            e.Headers.UtmDetails = { ...e.Headers.UtmDetails,
                                ...t.payload
                            }
                        },
                        updateWCDetails: a("WCDetails"),
                        updateOfficePackageDetails: a("officePackagePolicyDetails"),
                        updateShopDetails: a("shopownerinsurancedetails"),
                        updateCarDetails: a("contractorallriskproposerdetails"),
                        updateEarDetails: a("erectionallriskproposerdetails"),
                        updateCpmDetails: a("CPMProposerDetails"),
                        updateEODetails: a("erroromissionproposerdetails"),
                        updateCyberDetails: a("cyberinsurancedetails"),
                        updateCglDetails: a("GeneralLiabilityPreQuote"),
                        updateDODetails: a("DirectorsOfficersPreQuote"),
                        updateRetailCyberDetails: a("retailCyberDetails")
                    }
                }),
                {
                    updateLead: r,
                    updateUTM: u,
                    updateWCDetails: d,
                    updateOfficePackageDetails: s,
                    updateShopDetails: c,
                    updateCarDetails: l,
                    updateEarDetails: m,
                    updateCpmDetails: p,
                    updateEODetails: f,
                    updateCyberDetails: I,
                    updateCglDetails: _,
                    updateDODetails: g,
                    updateRetailCyberDetails: C
                } = o.actions;
            t.ZP = o.reducer
        },
        34962: function(e, t, n) {
            n.d(t, {
                Y4: function() {
                    return u
                },
                kf: function() {
                    return a
                }
            });
            var i = n(39730);
            let a = {
                    initialLoader: "initialLoader"
                },
                o = {
                    [a.initialLoader]: !0
                },
                r = (0, i.oM)({
                    name: "loader",
                    initialState: o,
                    reducers: {
                        updateInitialLoader: (e, t) => {
                            e[a.initialLoader] = !!t.payload
                        },
                        updateLoader: (e, t) => ({ ...e,
                            ...t.payload
                        })
                    }
                }),
                {
                    updateInitialLoader: u,
                    updateLoader: d
                } = r.actions;
            t.ZP = r.reducer
        },
        41369: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return I
                }
            });
            var i = n(39730),
                a = n(92220),
                o = n(2530),
                r = n(34962);
            let u = {},
                d = (0, i.hg)("campaign/fetchCampaignDetailsByInvetmentTypeIdAndCampaignId", async e => {
                    let {
                        InvestmentTypeId: t,
                        campaignid: n
                    } = e;
                    await new Promise(e => setTimeout(e, 300));
                    let i = "".concat(t, "_").concat(n);
                    return u[i]
                }),
                s = (0, i.oM)({
                    name: "campaign",
                    initialState: {},
                    reducers: {
                        updateCampaignDetails: (e, t) => {
                            e.Data = t.payload
                        }
                    },
                    extraReducers: e => {
                        e.addCase(d.fulfilled, (e, t) => {
                            e.Data = t.payload
                        })
                    }
                }),
                {
                    updateCampaignDetails: c
                } = s.actions;
            var l = s.reducer;
            let m = (0, i.oM)({
                    name: "apistore",
                    initialState: {},
                    reducers: {
                        updateStore: (e, t) => (t.payload, { ...e,
                            ...t.payload
                        })
                    }
                }),
                {
                    updateStore: p
                } = m.actions;
            var f = m.reducer;
            let I = (0, i.xC)({
                reducer: {
                    lead: a.ZP,
                    extras: o.ZP,
                    loader: r.ZP,
                    campaign: l,
                    apistore: f
                },
                middleware: e => e({
                    serializableCheck: !1
                })
            })
        }
    }
]);