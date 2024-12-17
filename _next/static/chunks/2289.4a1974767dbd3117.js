(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2289], {
        62289: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return Y
                }
            });
            var n = i(57437),
                l = i(2265),
                a = i(25407),
                o = i.n(a),
                s = i(16691),
                c = i.n(s),
                u = i(36753),
                r = i(93046),
                d = i(39938),
                m = i(33431),
                h = i(41057),
                p = i(48064),
                x = i(12399),
                v = i(29665),
                _ = i(93006),
                b = i(74581),
                E = i(57042),
                P = i(22370),
                g = i(28811),
                M = i.n(g),
                I = i(93723),
                k = i(98329),
                N = i(92220);
            let f = M()(() => i.e(9875).then(i.bind(i, 9961)), {
                    loadableGenerated: {
                        webpack: () => [9961]
                    },
                    ssr: !1
                }),
                S = {
                    MobileNo: [P._, "Please enter 10 digit mobile number", "Please enter valid mobile number"]
                };
            var w = e => {
                    var t;
                    let {
                        closeExitIntent: i,
                        continueToNextStep: a,
                        callPreQuoteApi: s,
                        autoContinueMobileNo: P
                    } = e, g = (0, r.v9)(e => e.lead), M = (0, r.v9)(e => e.campaign.Data), {
                        ProductName: w
                    } = M || {}, y = (0, r.I0)(), [j, C] = (0, l.useState)(!1), [D, T] = (0, l.useState)(!1), L = (0, r.v9)(e => e.extras.searchParams), B = L.enquiryid, Z = (0, I.Dc)(), {
                        GAClickEvent: q
                    } = (0, _.Z)();
                    (0, l.useEffect)(() => {
                        (null == g ? void 0 : g.MaskedMobileNo) && !(null == g ? void 0 : g.MobileNo) && T(!0)
                    }, [null == g ? void 0 : g.MobileNo, null == g ? void 0 : g.MaskedMobileNo]), (0, l.useEffect)(() => {
                        var e, t;
                        P && (null == g ? void 0 : null === (t = g.MobileNo) || void 0 === t ? void 0 : null === (e = t.toString()) || void 0 === e ? void 0 : e.length) == 10 && Q()
                    }, [g.MobileNo]);
                    let {
                        invalidNumberError: F,
                        InvalidPopupProps: A
                    } = (0, b.ZP)({
                        MobileNo: String(null == g ? void 0 : g.MobileNo),
                        clearAndFocus: () => {
                            y((0, N.V4)({
                                MobileNo: 0
                            }))
                        }
                    }), U = {
                        MobileNo: !!D || (null == g ? void 0 : g.MobileNo)
                    }, [{
                        errorsA: W
                    }, O, H] = (0, u.Z)({
                        VALID: S,
                        step: 1,
                        stepAstate: U
                    }), Y = (0, h.p)({
                        functions: (0, m.hV)([d.a.LeadMobile]),
                        validate: O
                    }), K = null == Y ? void 0 : Y[m.m6[d.a.LeadMobile]], Q = async () => {
                        let {
                            isError: e,
                            errors: t
                        } = H([], {
                            returnErrors: !0
                        });
                        if (e) return;
                        let i = { ...g
                            },
                            n = L.step;
                        i = (0, v.G)({
                            searchParams: L,
                            payload: i,
                            leadDetails: g,
                            step: n,
                            campaignDetails: M
                        });
                        try {
                            C(!0);
                            let e = await (0, x.w)({
                                payload: i,
                                campaignDetails: M,
                                step: n,
                                QueryParamEncEnquiryId: B,
                                GAClickEvent: q,
                                dispatch: y
                            });
                            (null == e ? void 0 : e.IsSuccess) && (C(!1), Z ? (0, k.h)(e) : s(e), a())
                        } catch (e) {}
                    }, V = !((null == W ? void 0 : W.MobileNo) || F) && (null == g ? void 0 : g.MobileNo);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "".concat(o().ExitIntentDilog),
                            children: [(0, n.jsx)(c(), {
                                width: 32,
                                height: 32,
                                src: "https://static.pbcdn.in/sme-cdn/images/marketing/exit-intent-popup-close.png",
                                alt: "closeIcon",
                                className: o().dilogClose,
                                onClick: i
                            }), (0, n.jsx)("div", {
                                className: o().ExitIntentBanner
                            }), (0, n.jsxs)("div", {
                                className: o().ExitIntentEnquiry,
                                children: [(0, n.jsx)("h2", {
                                    children: "Before you leave"
                                }), (0, n.jsxs)("p", {
                                    children: ["Would you like to connect with our in-house expert to know more about", (0, n.jsxs)("span", {
                                        children: [" ", w, (null == w ? void 0 : null === (t = w.toLowerCase()) || void 0 === t ? void 0 : t.includes("insurance")) ? "?" : " insurance?"]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: (0, E.Z)(o().formfield, V && o().fieldCheck),
                                    children: [(0, n.jsx)("input", {
                                        type: "text",
                                        id: "MobileNo",
                                        placeholder: "",
                                        value: (D ? null == g ? void 0 : g.MaskedMobileNo : null == g ? void 0 : g.MobileNo) || "",
                                        onChange: K,
                                        maxLength: 10,
                                        onFocus: () => {
                                            T(!1), q("ExitBanner_Marketing_PhoneNumberTyped")
                                        }
                                    }), (0, n.jsx)("label", {
                                        htmlFor: "MobileNo",
                                        children: "Mobile number"
                                    }), (0, n.jsx)("div", {
                                        className: o().error,
                                        children: (null == W ? void 0 : W.MobileNo) || F
                                    })]
                                }), (0, n.jsx)("button", {
                                    className: o().exitIntentSubmit,
                                    onClick: Q,
                                    children: j ? (0, n.jsx)(p.Z, {}) : "Schedule a callback"
                                })]
                            })]
                        }), (0, n.jsx)(f, { ...A,
                            showInvalidPopup: !1
                        })]
                    })
                },
                y = i(52047),
                j = i(1714);
            let C = (e, t) => new Date(e.getTime() + 864e5 * t),
                D = e => {
                    var t = new Date(e),
                        i = "" + (t.getMonth() + 1),
                        n = "" + t.getDate(),
                        l = t.getFullYear();
                    return i.length < 2 && (i = "0" + i), n.length < 2 && (n = "0" + n), [l, i, n].join("-")
                },
                T = [{
                    id: 1,
                    value: 10,
                    text: "10 AM - 11 AM",
                    display: "10:00 AM - 11:00 AM"
                }, {
                    id: 2,
                    value: 11,
                    text: "11 AM - 12 PM",
                    display: "11:00 AM - 12:00 PM"
                }, {
                    id: 3,
                    value: 12,
                    text: "12 PM - 1 PM",
                    display: "12:00 PM - 1:00 PM"
                }, {
                    id: 4,
                    value: 13,
                    text: "1 PM - 2 PM",
                    display: "1:00 PM - 2:00 PM"
                }, {
                    id: 5,
                    value: 14,
                    text: "2 PM - 3 PM",
                    display: "2:00 PM - 3:00 PM"
                }, {
                    id: 6,
                    value: 15,
                    text: "3 PM - 4 PM",
                    display: "3:00 PM - 4:00 PM"
                }, {
                    id: 7,
                    value: 16,
                    text: "4 PM - 5 PM",
                    display: "4:00 PM - 5:00 PM"
                }, {
                    id: 8,
                    value: 17,
                    text: "5 PM - 6 PM",
                    display: "5:00 PM - 6:00 PM"
                }, {
                    id: 9,
                    value: 18,
                    text: "6 PM - 7 PM",
                    display: "6:00 PM - 7:00 PM"
                }];
            var L = () => {
                    let [e, t] = (0, l.useState)(), [i, n] = (0, l.useState)(), [a, o] = (0, l.useState)(), [s, c] = (0, l.useState)(), [u, r] = (0, l.useState)([]), [d, m] = (0, l.useState)([]), {
                        GAClickEvent: h
                    } = (0, _.Z)();
                    (0, l.useEffect)(() => {
                        (function() {
                            let e, i;
                            var l = new Date,
                                a = l.getHours();
                            let s = l.getDate();
                            if (a < 18) {
                                var u = 0,
                                    d = 6;
                                e = l.getDate(), i = a < 10 ? 10 : a + 1
                            } else {
                                var u = 1,
                                    d = 7;
                                let t = new Date;
                                t.setDate(l.getDate() + 1), s = t.getDate(), e = t.getDate(), i = 10
                            }
                            t(s), n(a + 1), o(e), c(i);
                            let m = [];
                            for (let e = u; e < d; e++) {
                                var h = C(l, e);
                                let t = {
                                    value: h.toLocaleDateString("en-US", {
                                        day: "numeric"
                                    }),
                                    year: h.toLocaleDateString("en-US", {
                                        year: "numeric"
                                    }),
                                    formatDate: D(h.toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "numeric"
                                    }).replace(/ /g, "-")),
                                    month: h.toLocaleDateString("en-US", {
                                        month: "short"
                                    }),
                                    date: h.toLocaleDateString("en-US", {
                                        day: "numeric"
                                    }),
                                    day: h.toLocaleDateString("en-US", {
                                        weekday: "short"
                                    }),
                                    relativeDay: e == u ? "Today" : e == u + 1 ? "Tommorow" : ""
                                };
                                m.push(t)
                            }
                            r(m)
                        })()
                    }, []), (0, l.useEffect)(() => {
                        (function() {
                            let e = T.filter(e => p(e.value));
                            m(e)
                        })()
                    }, [s]);
                    let p = t => {
                            if (a && a != e);
                            else if (i > 18);
                            else if (t < i) return !1;
                            return !0
                        },
                        x = async e => {
                            let {
                                date: t,
                                time: i
                            } = e;
                            if (!t || !i) return;
                            var n, l = u.find(e => e.value == a.toString()),
                                o = d.find(e => e.value == s),
                                c = {
                                    enquiryId: null === (n = (0, I.t6)()) || void 0 === n ? void 0 : n.EncEnquiryID,
                                    scheduleDateTime: l.formatDate + "T" + s + ":00:00",
                                    Subissue: 143
                                };
                            let r = await y.B.get(j.b.ScheduleCallback, {
                                data: c
                            });
                            if (null == r ? void 0 : r.IsSuccess) return h("ExitBanner_Marketing_CallbackScheduled", c.scheduleDateTime), {
                                date: l,
                                time: o
                            };
                            throw Error("Call not scheduled")
                        };
                    return {
                        dateDataArr: u,
                        timeDataArr: d,
                        onDateClick: function(t) {
                            let n = null == t ? void 0 : t.value;
                            o(n), h("ExitBanner_Marketing_DateSelected", (null == t ? void 0 : t.relativeDay) || "".concat(t.date, " ").concat(t.month)), parseInt(n) != parseInt(e) ? c(10) : c(i)
                        },
                        onTimeClick: function(e) {
                            let t = null == e ? void 0 : e.value;
                            h("ExitBanner_Marketing_TimeSelected", e.display), c(t)
                        },
                        selectedDate: a,
                        selectedTime: s,
                        scheduleCallback: x
                    }
                },
                B = i(230),
                Z = e => {
                    let {
                        back: t,
                        closeExitIntent: i,
                        continueToNextStep: a,
                        setScheduledDateTime: s
                    } = e, [u, r] = (0, l.useState)(1), [d, m] = (0, l.useState)(!1), {
                        dateDataArr: h,
                        timeDataArr: x,
                        onDateClick: v,
                        onTimeClick: _,
                        selectedDate: b,
                        selectedTime: P,
                        scheduleCallback: g
                    } = L(), M = async e => {
                        let {
                            time: t
                        } = e, n = (null == t ? void 0 : t.value) || P;
                        m(!0);
                        try {
                            let e = await g({
                                date: b,
                                time: n
                            });
                            s(e), m(!1), a()
                        } catch (e) {
                            (0, B.Z)(), i()
                        }
                    };
                    return (0, n.jsxs)("div", {
                        className: "".concat(o().ghiPremiumScheduleDateTime),
                        children: [(0, n.jsxs)("div", {
                            className: o().dateTimeHeading,
                            children: [(0, n.jsx)(c(), {
                                width: 32,
                                height: 32,
                                src: "https://pbqa.policybazaar.com/cdn/images/bu/sme/premium-calculator-back.svg",
                                alt: "icon",
                                onClick: t
                            }), "Expert advice made easy", (0, n.jsx)(c(), {
                                className: o().popupClose,
                                width: 32,
                                height: 32,
                                src: "https://pbqa.policybazaar.com/cdn/images/bu/sme/premium-calculator-close.svg",
                                alt: "icon",
                                onClick: i
                            })]
                        }), (0, n.jsxs)("div", {
                            className: o().ghiPremiumBody,
                            children: [(0, n.jsx)("div", {
                                className: o().dateTimeSwitch,
                                children: (0, n.jsxs)("ul", {
                                    children: [(0, n.jsx)("li", {
                                        className: (0, E.Z)(o().switchDate, 1 == u && o().activeDate),
                                        onClick: () => r(1),
                                        children: "Date"
                                    }), (0, n.jsx)("li", {
                                        className: (0, E.Z)(o().switchTime, 2 == u && o().activeTime),
                                        onClick: () => r(2),
                                        children: "Time"
                                    })]
                                })
                            }), 1 == u && (0, n.jsxs)("div", {
                                className: "".concat(o().dateCallBackList, " "),
                                children: [(0, n.jsx)("h2", {
                                    children: "When do you want a call back?"
                                }), (0, n.jsx)("ul", {
                                    children: h.map(e => (0, n.jsx)("li", {
                                        className: (0, E.Z)(b == (null == e ? void 0 : e.value) && o().activeDate),
                                        onClick: () => {
                                            v(e), r(2)
                                        },
                                        children: (null == e ? void 0 : e.relativeDay) || "".concat(e.date, " ").concat(e.month)
                                    }, null == e ? void 0 : e.value))
                                }), (0, n.jsx)("button", {
                                    className: o().btnCallbackNext,
                                    onClick: () => r(2),
                                    children: "Next"
                                })]
                            }), 2 == u && (0, n.jsxs)("div", {
                                className: "".concat(o().timeCallBackList),
                                children: [(0, n.jsx)("h2", {
                                    children: "What will be the suitable time?"
                                }), (0, n.jsx)("ul", {
                                    children: x.map(e => (0, n.jsx)("li", {
                                        className: (0, E.Z)(P == (null == e ? void 0 : e.value) && o().activeTime),
                                        onClick: () => {
                                            _(e), M({
                                                time: e
                                            })
                                        },
                                        children: null == e ? void 0 : e.text
                                    }, null == e ? void 0 : e.value))
                                }), (0, n.jsx)("button", {
                                    className: o().btnCallbackNext,
                                    onClick: M,
                                    children: d ? (0, n.jsx)(p.Z, {}) : "Next"
                                })]
                            })]
                        })]
                    })
                },
                q = e => {
                    let {
                        closeExitIntent: t,
                        scheduledDateTime: i
                    } = e;
                    (0, l.useEffect)(() => {
                        let e = setTimeout(() => {
                            t()
                        }, 5e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }, []);
                    let {
                        date: a,
                        time: s
                    } = i || {};
                    return (0, n.jsxs)("div", {
                        className: o().callScheduledSuccess,
                        children: [(0, n.jsx)(c(), {
                            width: 110,
                            height: 110,
                            src: "https://static.pbcdn.in/sme-cdn/images/marketing/success-thanks.gif",
                            alt: "icon"
                        }), (0, n.jsx)("h3", {
                            children: "Call scheduled successfully!"
                        }), (0, n.jsxs)("p", {
                            className: o().paragraphBu,
                            children: ["Our experts will reach out to you ", (null == a ? void 0 : a.relativeday) ? (0, n.jsx)("span", {
                                className: o().datemonth,
                                children: null == a ? void 0 : a.relativeday
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: ["on ", (0, n.jsxs)("span", {
                                    className: o().datemonth,
                                    children: [null == a ? void 0 : a.date, " ", null == a ? void 0 : a.month]
                                })]
                            }), " between", (0, n.jsxs)("span", {
                                className: o().timebetween,
                                children: [" ", null == s ? void 0 : s.display]
                            })]
                        }), (0, n.jsx)("button", {
                            className: o().bthCallbackOk,
                            "data-bak": "step3",
                            onClick: t,
                            children: "Okay"
                        })]
                    })
                };
            let F = "ExitIntentPopupShowed";
            var A = () => {
                    let [e, t] = (0, l.useState)(!1), {
                        GAClickEvent: i,
                        GAViewedEvent: n
                    } = (0, _.Z)(), a = (0, l.useCallback)(e => {
                        if ((e = e || window.event).relatedTarget || e.toElement, (null == e ? void 0 : e.clientX) >= window.innerWidth || (null == e ? void 0 : e.clientY) >= window.innerHeight || (null == e ? void 0 : e.clientX) <= 0 || (null == e ? void 0 : e.clientY) <= 0) {
                            if (sessionStorage.getItem(F)) return;
                            let e = !1,
                                l = function() {
                                    e = !0, window.removeEventListener("mouseenter", l)
                                };
                            window.addEventListener("mouseenter", l), setTimeout(() => {
                                e || function() {
                                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                                    e ? n("ExitBanner_Marketing_Viewed") : i("ExitBanner_Marketing_Closed"), window.removeEventListener("mouseout", a), e ? (sessionStorage.setItem(F, !0), t(!0)) : t(!1)
                                }()
                            }, 200)
                        }
                    }, []);
                    return (0, l.useEffect)(() => (setTimeout(() => {
                        window.addEventListener("mouseout", a)
                    }, 2e3), () => {
                        window.removeEventListener("mouseout", a)
                    }), []), {
                        showExitIntent: e,
                        closeExitIntent: () => {
                            t(!1)
                        }
                    }
                },
                U = () => {
                    let {
                        showExitIntent: e,
                        closeExitIntent: t
                    } = A();
                    return {
                        showExitIntent: e,
                        closeExitIntent: t
                    }
                },
                W = i(57372),
                O = i(71280),
                H = i(78813),
                Y = e => {
                    let {
                        autoContinueMobileNo: t,
                        setExitIntentVisible: i = () => {}
                    } = e, {
                        showExitIntent: a,
                        closeExitIntent: s
                    } = U(), [c, u] = (0, l.useState)(1), [d, m] = (0, l.useState)({}), [h, p] = (0, l.useState)(!1), {
                        GAClickEvent: x,
                        GAViewedEvent: v
                    } = (0, _.Z)(), b = (0, r.v9)(e => e.extras.searchParams), E = (0, r.I0)();
                    (0, l.useEffect)(() => {
                        p((0, W.t)())
                    }, []), (0, l.useEffect)(() => {
                        i(a)
                    }, [a]);
                    let P = () => {
                            x("ExitBanner_Marketing_Closed"), s()
                        },
                        g = () => {
                            u(e => Math.min(e + 1, 3))
                        };
                    return !a || h ? null : (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)("div", {
                            className: o().exitIntent,
                            children: (0, n.jsxs)("div", {
                                className: o().ExitIntentPopup,
                                children: [1 == c && (0, n.jsx)(w, {
                                    closeExitIntent: P,
                                    continueToNextStep: g,
                                    callPreQuoteApi: e => {
                                        (0, O.r)({
                                            dispatch: E,
                                            updateLead: (0, H.k)(E),
                                            leadDetails: e,
                                            searchParams: b,
                                            EncEnquiryId: e.EncEnquiryID
                                        })
                                    },
                                    autoContinueMobileNo: t
                                }), 2 == c && (0, n.jsx)(Z, {
                                    back: () => {
                                        u(e => Math.max(1, e - 1))
                                    },
                                    closeExitIntent: P,
                                    continueToNextStep: g,
                                    setScheduledDateTime: m
                                }), 3 == c && (0, n.jsx)(q, {
                                    closeExitIntent: P,
                                    scheduledDateTime: d
                                })]
                            })
                        })
                    })
                }
        },
        25407: function(e) {
            e.exports = {
                hide: "ExitIntentPopup_hide__TbkN6",
                exitIntent: "ExitIntentPopup_exitIntent__7_A4N",
                ExitIntentPopup: "ExitIntentPopup_ExitIntentPopup__csvW9",
                ExitIntentDilog: "ExitIntentPopup_ExitIntentDilog__t55K4",
                dilogClose: "ExitIntentPopup_dilogClose__KECgQ",
                ExitIntentBanner: "ExitIntentPopup_ExitIntentBanner__pKBOS",
                ExitIntentEnquiry: "ExitIntentPopup_ExitIntentEnquiry__74q9k",
                formfield: "ExitIntentPopup_formfield__W8m6I",
                fieldCheck: "ExitIntentPopup_fieldCheck__yZtTw",
                error: "ExitIntentPopup_error__YuHbk",
                exitIntentSubmit: "ExitIntentPopup_exitIntentSubmit__b01ux",
                ghiPremiumScheduleDateTime: "ExitIntentPopup_ghiPremiumScheduleDateTime__rDLx4",
                dateTimeHeading: "ExitIntentPopup_dateTimeHeading__e2KYi",
                popupClose: "ExitIntentPopup_popupClose__ahGzN",
                ghiPremiumBody: "ExitIntentPopup_ghiPremiumBody__LLgZ_",
                dateTimeSwitch: "ExitIntentPopup_dateTimeSwitch__DWl4s",
                switchDate: "ExitIntentPopup_switchDate__4FiFc",
                switchTime: "ExitIntentPopup_switchTime__QR_Od",
                active: "ExitIntentPopup_active__OWfwf",
                activeTime: "ExitIntentPopup_activeTime__as4R5",
                activeDate: "ExitIntentPopup_activeDate__toV0_",
                dateCallBackList: "ExitIntentPopup_dateCallBackList__PI_w2",
                timeCallBackList: "ExitIntentPopup_timeCallBackList__gKja6",
                callUsNumber: "ExitIntentPopup_callUsNumber__doWo_",
                infoText: "ExitIntentPopup_infoText__uhtji",
                btnCallbackSubmit: "ExitIntentPopup_btnCallbackSubmit__opbDe",
                btnCallbackNext: "ExitIntentPopup_btnCallbackNext__A2B_R",
                formFieldError: "ExitIntentPopup_formFieldError__4akmN",
                callScheduledSuccess: "ExitIntentPopup_callScheduledSuccess__UFxE8",
                bthCallbackOk: "ExitIntentPopup_bthCallbackOk__38eYH"
            }
        }
    }
]);