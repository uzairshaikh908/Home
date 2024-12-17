(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [197], {
        93006: function(e, t, n) {
            "use strict";
            var o = n(93046),
                a = n(98329),
                r = n(2265),
                i = n(2530);
            t.Z = e => {
                var t;
                let n = (0, o.I0)(),
                    l = (0, o.v9)(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.extras) || void 0 === t ? void 0 : t.gaDetails
                    });
                return (0, r.useEffect)(() => {
                    e && n((0, i.d5)(e))
                }, [(null == e ? void 0 : null === (t = e.eventCategory) || void 0 === t ? void 0 : t.default) || (null == e ? void 0 : e.eventCategory)]), (0, a.Z)(e || l)
            }
        },
        98329: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return p
                },
                Z: function() {
                    return v
                }
            });
            var o = n(93046),
                a = n(44881),
                r = n(98157),
                i = n(93723);
            let l = e => {
                var t, n;
                let {
                    InvestmentTypeId: o,
                    pageNameMap: a
                } = e, r = o || (null === (t = (0, i.t6)()) || void 0 === t ? void 0 : t.InvestmentTypeId), l = {
                    pageName: a,
                    subproductId: {
                        1: 1,
                        33: 33,
                        5: 5,
                        7: 7,
                        8: 8,
                        16: 16,
                        17: 17,
                        12: 12,
                        2: 2,
                        25: 19,
                        30: 5,
                        31: 5,
                        32: 5,
                        19: 19,
                        13: 13,
                        24: 13,
                        14: 14,
                        34: 13,
                        21: 21,
                        15: 15,
                        23: 5,
                        20: 20,
                        18: 18,
                        3: 3,
                        38: 38
                    },
                    productbucket: {
                        1: "GMC",
                        33: "Group Covid",
                        5: "Fire and Burgalary",
                        7: "Office Package",
                        8: "Shop Owner",
                        16: "Engineering",
                        17: "Engineering",
                        12: "Liability",
                        14: "Liability",
                        2: "EB Non GMC",
                        25: "Workmen",
                        24: "Marine",
                        23: "Property",
                        30: "Business",
                        31: "Commercial",
                        32: "Corporate",
                        19: "Workmen",
                        21: "Liability",
                        15: "Liability",
                        18: "Liability",
                        20: "Liability",
                        13: "Marine",
                        34: "Marine"
                    }
                };
                return {
                    pageName: null === (n = l.pageName) || void 0 === n ? void 0 : n[r],
                    subproductId: l.subproductId[r],
                    productbucket: l.productbucket[r]
                }
            };
            var c = n(2265);
            let d = e => {
                    let t = e.utm_source || e.pb_source || "",
                        n = e.utm_medium || e.pb_medium || "",
                        o = e.utm_campaign || e.pb_campaign || "",
                        a = e.utm_term || e.pb_term || "",
                        i = e.utm_content || e.pb_content || "",
                        {
                            utmData: l
                        } = (0, r.A)({
                            searchParams: e
                        }),
                        c = l.UtmSource,
                        d = l.UtmMedium,
                        s = l.UtmCampaign,
                        p = l.UtmTerm,
                        u = l.UtmContent;
                    return {
                        pb_source_s: t,
                        pb_medium_s: n,
                        pb_campaign_s: o,
                        pb_term_s: a,
                        pb_content_s: i,
                        pb_source: c,
                        pb_medium: d,
                        pb_campaign: s,
                        pb_term: p,
                        pb_content: u
                    }
                },
                s = e => {
                    var t, n;
                    null === (t = window) || void 0 === t || t.dataLayer.push({
                        event: "virtualPage",
                        productId: 131,
                        leadId: (0, i.v8)() || "",
                        enquiryId: e.enquiryId || "",
                        pageType: e.pageType || "",
                        pageName: e.pageName || "",
                        subproductId: e.subproductid || void 0,
                        productbucket: e.productbucket || void 0,
                        ebornoneb: e.ebornoneb || void 0,
                        internalTraffic: null !== (n = e.internalTraffic) && void 0 !== n ? n : void 0,
                        isAgent: Number(!!(0, a.ej)("AgentId")),
                        loginSource: Number((0, a.ej)("isApp")) ? "app" : "",
                        customerId: e.CustomerId || "",
                        visitId: e.VisitLogId || "",
                        prevPage: document.referrer,
                        pb_source: e.pb_source,
                        pb_medium: e.pb_medium,
                        pb_campaign: e.pb_campaign,
                        pb_term: e.pb_term,
                        pb_content: e.pb_content,
                        pb_source_s: e.pb_source_s,
                        pb_medium_s: e.pb_medium_s,
                        pb_campaign_s: e.pb_campaign_s,
                        pb_term_s: e.pb_term_s,
                        pb_content_s: e.pb_content_s
                    })
                },
                p = e => {
                    e.isParentLead || e.IsParentLead ? (u({
                        event: "parent_lead_created",
                        eventCategory: "parent_lead_created",
                        eventAction: e.InvestmentTypeId,
                        eventLabel: (0, i.v8)(),
                        productId: "pb131"
                    }), u({
                        event: "lead_created",
                        eventCategory: "lead_created_parent",
                        eventAction: e.InvestmentTypeId,
                        eventLabel: (0, i.v8)(),
                        productId: "pb131"
                    })) : u({
                        event: "lead_created",
                        eventCategory: "lead_created_child",
                        eventAction: e.InvestmentTypeId,
                        eventLabel: (0, i.v8)(),
                        productId: "pb131"
                    })
                },
                u = e => {
                    var t;
                    let {
                        eventCategory: n,
                        eventAction: o,
                        eventLabel: r,
                        eventValue: l,
                        nonInteraction: c = !1,
                        event: d = "eventTracking",
                        productId: s = 131
                    } = e;
                    null === (t = window) || void 0 === t || t.dataLayer.push({
                        event: d || "eventTracking",
                        productId: s,
                        eventCategory: n,
                        eventAction: o,
                        eventLabel: r,
                        eventValue: l,
                        nonInteraction: c,
                        isAgent: Number(!!(0, a.ej)("AgentId")),
                        loginSource: Number((0, a.ej)("isApp")) ? "app" : "",
                        leadId: (0, i.v8)()
                    })
                };
            var v = e => {
                let {
                    eventCategory: t,
                    pageType: n,
                    pageName: a,
                    pageNameMap: r
                } = e, i = (0, o.v9)(e => e.lead), {
                    isEb: p
                } = (0, o.v9)(e => e.extras);
                return (0, c.useEffect)(() => {
                    window.dataLayer || (window.dataLayer = [])
                }, []), {
                    GAClickEvent: function(e, n) {
                        let {
                            newEventCategory: o,
                            nonInteraction: a = !1,
                            eventCategoryType: r,
                            leadSubmit: i = ""
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = t;
                        "object" == typeof t && (l = r ? null == t ? void 0 : t[r] : null == t ? void 0 : t.default), u({
                            eventCategory: o || l,
                            eventAction: e,
                            eventLabel: null != n ? n : void 0,
                            nonInteraction: a,
                            event: null != i ? i : void 0
                        })
                    },
                    GAViewedEvent: function(e) {
                        let {
                            eventLabel: n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = t;
                        "object" == typeof t && (o = null == t ? void 0 : t.default), u({
                            eventCategory: o,
                            eventAction: e,
                            nonInteraction: !0,
                            eventLabel: n
                        })
                    },
                    VirtualPage: function() {
                        var e;
                        let {
                            searchParams: t,
                            pageType: o
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                            pageName: c,
                            productbucket: u,
                            subproductId: v
                        } = l({
                            pageNameMap: r
                        });
                        s({
                            pageType: o || n,
                            pageName: a || c,
                            productId: 131,
                            subproductid: v,
                            productbucket: u,
                            ebornoneb: p ? "SMEEB" : "NonEB",
                            leadId: i.MatrixLeadId,
                            enquiryId: i.EnquiryId,
                            internalTraffic: null == i ? void 0 : null === (e = i.Headers) || void 0 === e ? void 0 : e.IsInternalIP,
                            VisitLogId: null == i ? void 0 : i.VisitLogId,
                            CustomerId: null == i ? void 0 : i.CustomerId,
                            ...t ? d(t) : {}
                        })
                    }
                }
            }
        },
        4913: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var o = n(2265);

            function a(e, t) {
                (0, o.useEffect)(() => {
                    let n = n => {
                        !e.current || e.current.contains(n.target) || t(n)
                    };
                    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
                        document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n)
                    }
                }, [e, t])
            }
        },
        93723: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dc: function() {
                    return a
                },
                t6: function() {
                    return i
                },
                v8: function() {
                    return r
                }
            });
            var o = n(41369);
            let a = () => {
                    var e, t;
                    return null === o.h || void 0 === o.h ? void 0 : null === (t = o.h.getState()) || void 0 === t ? void 0 : null === (e = t.extras) || void 0 === e ? void 0 : e.isEb
                },
                r = () => {
                    var e, t;
                    return null === o.h || void 0 === o.h ? void 0 : null === (t = o.h.getState()) || void 0 === t ? void 0 : null === (e = t.lead) || void 0 === e ? void 0 : e.MatrixLeadId
                },
                i = () => {
                    var e;
                    return null === o.h || void 0 === o.h ? void 0 : null === (e = o.h.getState()) || void 0 === e ? void 0 : e.lead
                }
        },
        80197: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var o = n(57437),
                a = n(91248),
                r = n.n(a),
                i = n(20512),
                l = n.n(i),
                c = n(93006),
                d = n(93046),
                s = n(57042),
                p = n(87534),
                u = n(28811),
                v = n.n(u),
                _ = n(2265),
                m = n(16691),
                b = n.n(m),
                g = n(77911),
                h = n.n(g),
                k = e => {
                    let {
                        iconSrc: t,
                        title: n,
                        contact: a,
                        onClick: r
                    } = e;
                    return (0, o.jsx)("a", {
                        rel: "noopener",
                        href: "tel:".concat(a),
                        className: h().dropdownAnchorContainer,
                        onClick: r,
                        children: (0, o.jsx)("div", {
                            className: h().dropdownItemContainer,
                            children: (0, o.jsxs)("nobr", {
                                children: [(0, o.jsx)(b(), {
                                    src: t,
                                    width: 33,
                                    height: 36,
                                    alt: "icon",
                                    className: h().dropdownItemIcon
                                }), (0, o.jsxs)("div", {
                                    children: [(0, o.jsx)("span", {
                                        children: n
                                    }), (0, o.jsx)("span", {
                                        children: a
                                    })]
                                })]
                            })
                        })
                    })
                },
                x = n(4913),
                I = n(2530);
            let T = v()(() => n.e(8974).then(n.bind(n, 18974)), {
                loadableGenerated: {
                    webpack: () => [18974]
                },
                ssr: !1
            });
            var C = () => {
                    let [e, t] = (0, _.useState)(!1), [n, a] = (0, _.useState)(!1), {
                        searchParams: r,
                        IsBookdemo: i
                    } = (0, d.v9)(e => e.extras), {
                        GAClickEvent: l
                    } = (0, c.Z)(), p = (0, _.useRef)(), u = (0, d.I0)();
                    (0, _.useCallback)((0, x.Z)(p, () => t(!1)), []), (0, _.useEffect)(() => {
                        r.token && a(!0)
                    }, [r.token]);
                    let v = () => {
                        e || l("CallUsClicked"), t(e => !e)
                    };
                    return (0, o.jsxs)("div", {
                        className: h().tollFree,
                        ref: p,
                        children: [(0, o.jsxs)("div", {
                            className: h().callUsBtn,
                            onClick: v,
                            children: [(0, o.jsx)(b(), {
                                src: "https://static.pbcdn.in/sme-cdn/images/marketing/callus_button_icon.svg",
                                width: 13,
                                height: 13,
                                className: "hidden md:block",
                                alt: "icon"
                            }), (0, o.jsx)("p", {
                                className: h().callUsText,
                                children: "Talk to expert"
                            })]
                        }), e && (0, o.jsx)(o.Fragment, {
                            children: (0, o.jsxs)("div", {
                                className: h().fadeInPopup,
                                children: [(0, o.jsx)("div", {
                                    className: (0, s.Z)(h().bgOverlay),
                                    onClick: v
                                }), (0, o.jsxs)("div", {
                                    className: h().callDropdown,
                                    children: [(0, o.jsx)(b(), {
                                        src: "https://static.pbcdn.in/sme-cdn/images/marketing/close-popup_icon.svg",
                                        width: 19,
                                        height: 19,
                                        className: h().closeDropdownIcon,
                                        alt: "icon",
                                        onClick: v
                                    }), (0, o.jsx)("div", {
                                        className: h().line
                                    }), (0, o.jsx)("p", {
                                        className: h().dropdownHeading,
                                        children: "You can reach us directly on the below toll-free numbers"
                                    }), n ? (0, o.jsx)(k, {
                                        iconSrc: "https://static.pbcdn.in/sme-cdn/images/marketing/call-us_icon.svg",
                                        title: "Have Not Paid Yet (Sales)",
                                        contact: "8448590818",
                                        onClick: () => l("SalesTFClicked")
                                    }) : (0, o.jsxs)(o.Fragment, {
                                        children: [(0, o.jsx)(k, {
                                            iconSrc: "https://static.pbcdn.in/sme-cdn/images/marketing/call-us_icon.svg",
                                            title: "Have Not Paid Yet (Sales)",
                                            contact: "1800-571-441" == r.source ? "" : "1800-309-0988",
                                            onClick: () => l("SalesTFClicked")
                                        }), (0, o.jsx)(k, {
                                            iconSrc: "https://static.pbcdn.in/sme-cdn/images/marketing/call-services_icon.svg",
                                            title: "Have Already Paid (Service)",
                                            contact: "1800-572-3918",
                                            onClick: () => l("ServiceTFClicked")
                                        }), i && (0, o.jsx)(T, {
                                            iconSrc: "https://static.pbcdn.in/sme-cdn/images/marketing/book-demo_icon.svg",
                                            title: "Book a demo",
                                            onClick: () => {
                                                v(), l("bookDemo"), u((0, I.xT)(!0))
                                            },
                                            togglePopup: v
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                f = function() {
                    let {
                        searchParams: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        GAClickEvent: t
                    } = (0, c.Z)(), {
                        back: n
                    } = (0, d.v9)(e => e.extras), a = () => {
                        t("PBlogoClicked"), window.location.href = p.k.BASE_URL_EB
                    };
                    return (null == e ? void 0 : e.isApp) ? null : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("header", {
                            className: "".concat(l().className, " ").concat(r().topbarContainer, " ").concat(r().topbarBgGhi),
                            children: (0, o.jsxs)("div", {
                                className: r().wrapper,
                                children: [(0, o.jsxs)("div", {
                                    className: r().LogoWrapper,
                                    children: [!!n && (0, o.jsx)("div", {
                                        onClick: n,
                                        className: (0, s.Z)(r().topbarBackContainer, "mobile"),
                                        children: (0, o.jsx)("div", {
                                            className: r().backIcon
                                        })
                                    }), (0, o.jsx)("a", {
                                        onClick: a,
                                        id: "pblogo-desktop",
                                        className: "".concat(r().logo, " ").concat(r().desktop),
                                        rel: "noopener",
                                        "aria-label": "pb-logo"
                                    }), (0, o.jsx)("a", {
                                        onClick: a,
                                        id: "pblogo-mobile",
                                        className: "".concat(r().mbLogo, " ").concat(r().mobile),
                                        width: "32px",
                                        height: "32px",
                                        rel: "noopener",
                                        "aria-label": "pb-logo"
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "header-right",
                                    children: (0, o.jsx)(C, {})
                                })]
                            })
                        }), (0, o.jsx)("div", {
                            className: r().topbarBgHeight
                        })]
                    })
                }
        },
        77911: function(e) {
            e.exports = {
                tollFree: "TalkToExpertV1_tollFree__IFxiF",
                bgOverlay: "TalkToExpertV1_bgOverlay__aDCqq",
                callUsBtn: "TalkToExpertV1_callUsBtn__4Xwc_",
                callUsText: "TalkToExpertV1_callUsText__mm3yZ",
                fadeInPopup: "TalkToExpertV1_fadeInPopup__Sa7qN",
                fadein: "TalkToExpertV1_fadein__RA6VY",
                callDropdown: "TalkToExpertV1_callDropdown__aSxCq",
                line: "TalkToExpertV1_line__i0Zva",
                dropdownHeading: "TalkToExpertV1_dropdownHeading__pkLRO",
                closeDropdownIcon: "TalkToExpertV1_closeDropdownIcon___x4Ce",
                dropdownAnchorContainer: "TalkToExpertV1_dropdownAnchorContainer__uLq8U",
                dropdownItemContainer: "TalkToExpertV1_dropdownItemContainer___NP_t",
                bookDemo: "TalkToExpertV1_bookDemo__akwkU",
                dropdownItemIcon: "TalkToExpertV1_dropdownItemIcon__ido6q"
            }
        },
        91248: function(e) {
            e.exports = {
                topbarContainer: "Topbar_topbarContainer__L_j1U",
                topbarBgGhi: "Topbar_topbarBgGhi__ahnvN",
                LogoWrapper: "Topbar_LogoWrapper__WJAt1",
                logo: "Topbar_logo__TpyTM",
                mbLogo: "Topbar_mbLogo__wtYht",
                wrapper: "Topbar_wrapper__rKq9J",
                topbarBackContainer: "Topbar_topbarBackContainer__miQuZ",
                backIcon: "Topbar_backIcon__BT9JO",
                topbarBgHeight: "Topbar_topbarBgHeight__tSEAr",
                mobile: "Topbar_mobile__KzsJm",
                desktop: "Topbar_desktop___LvkW"
            }
        }
    }
]);