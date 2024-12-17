(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8362, 131, 3270, 2540, 348], {
        70131: function(e, i, n) {
            "use strict";
            n.r(i), n.d(i, {
                onLeadMobileChange: function() {
                    return s
                }
            });
            let s = (e, i) => {
                let {
                    updateLead: n,
                    validate: s
                } = e, {
                    id: a,
                    value: r
                } = i.target;
                if (isNaN(r)) return;
                let l = r.substr(0, 1);
                ("" === l || Number(l) >= 6) && (s(a, r), n({
                    [a]: Number(r)
                }))
            }
        },
        63270: function(e, i, n) {
            "use strict";
            n.r(i), n.d(i, {
                onLeadNumberOfEmpChange: function() {
                    return s
                }
            });
            let s = (e, i) => {
                let {
                    updateLead: n,
                    validate: s
                } = e, {
                    id: a,
                    value: r
                } = i.target;
                isNaN(r) || (r.substr(0, 1), s(a, r), n({
                    [a]: Number(r)
                }))
            }
        },
        5122: function(e, i, n) {
            "use strict";
            var s = n(2265);
            i.Z = function() {
                let {
                    ref: e,
                    rootMargin: i = "0px",
                    callJustOnce: n = !0,
                    callbackFn: a = () => {},
                    defaultVisibleStateValue: r = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [l, t] = (0, s.useState)(r), d = (0, s.useRef)(!1);
                return (0, s.useEffect)(() => {
                    l && (!n || n && !d.current) && (d.current = !0, a())
                }, [l]), (0, s.useEffect)(() => {
                    let n = new IntersectionObserver(e => {
                            let [i] = e;
                            t(i.isIntersecting)
                        }, {
                            rootMargin: i
                        }),
                        s = null == e ? void 0 : e.current;
                    return s && (null == n || n.observe(s)), () => {
                        s && (null == n || n.unobserve(s))
                    }
                }, [null == e ? void 0 : e.current]), l
            }
        },
        27189: function(e, i, n) {
            "use strict";
            n(57437)
        },
        92540: function(e, i, n) {
            "use strict";
            n.r(i);
            var s = n(57437),
                a = n(2265);
            i.default = e => {
                var i;
                let {
                    onChange: n,
                    mobileNo: r,
                    maskedMobileNo: l,
                    error: t,
                    isLeadMobileMasked: d,
                    setStateData: o,
                    refFunc: c,
                    MobileFieldExtraProps: h,
                    FieldError: p,
                    isSubmitClicked: m
                } = e;

                function u(e) {
                    o(i => ({ ...i,
                        isLeadMobileMasked: e
                    }))
                }
                return (0, a.useEffect)(() => {
                    l && u(!0)
                }, [l]), (0, s.jsx)(s.Fragment, {
                    children: n ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("input", {
                            oninput: "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
                            ref: c,
                            type: "tel",
                            id: "MobileNo",
                            placeholder: " ",
                            value: (d ? l : r) || "",
                            onChange: n,
                            onFocus: () => {
                                u(!1)
                            },
                            maxLength: 10,
                            autoComplete: "off",
                            min: 0
                        }), (0, s.jsx)("label", {
                            children: "Mobile number"
                        }), p ? (0, s.jsx)(p, {
                            error: (m || (null === (i = String(r)) || void 0 === i ? void 0 : i.length) == 10) && (t || (null == h ? void 0 : h.invalidNumberError))
                        }) : t || (null == h ? void 0 : h.invalidNumberError)]
                    }) : "loading ..."
                })
            }
        },
        60348: function(e, i, n) {
            "use strict";
            n.r(i);
            var s = n(57437);
            n(2265), i.default = e => {
                let {
                    onChange: i,
                    NumberOfEmployees: n,
                    error: a,
                    setStateData: r,
                    FieldError: l,
                    refFunc: t
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: i ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("input", {
                            ref: t,
                            autoComplete: "off",
                            type: "tel",
                            id: "NumberOfEmployees",
                            placeholder: " ",
                            value: n || "",
                            onChange: i,
                            maxLength: 4
                        }), (0, s.jsx)("label", {
                            for: "NumberOfEmployees",
                            children: "Total number of employees"
                        }), l ? (0, s.jsx)(l, {
                            error: a
                        }) : a]
                    }) : "loading ..."
                })
            }
        },
        18362: function(e, i, n) {
            "use strict";
            n.r(i), n.d(i, {
                default: function() {
                    return V
                }
            });
            var s = n(57437),
                a = n(7265),
                r = n.n(a),
                l = n(51542),
                t = n(39938);
            n(27189);
            var d = n(93046),
                o = n(34962),
                c = n(16691),
                h = n.n(c),
                p = n(45621),
                m = n.n(p),
                u = n(92220),
                _ = e => {
                    let {
                        handleback: i
                    } = e, n = (0, d.v9)(e => e.lead), a = (0, d.I0)(), r = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                        a((0, u.V4)({
                            FamilyDefinitionId: e
                        }))
                    };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: m().fieldCardTitle,
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)("i", {
                                    onClick: i,
                                    className: m().backBtn
                                }), (0, s.jsx)("h2", {
                                    className: m().fieldCardTitleHeading,
                                    children: "Whom do you want to insure?"
                                })]
                            }), (0, s.jsx)("label", {
                                className: m().stepCount,
                                children: "Step 2/2"
                            })]
                        }), (0, s.jsx)("div", {
                            className: m().freshRenewalSelection,
                            children: (0, s.jsxs)("ul", {
                                children: [(0, s.jsxs)("li", {
                                    onClick: () => {
                                        r(2)
                                    },
                                    className: "".concat((null == n ? void 0 : n.FamilyDefinitionId) == 2 && m().activePlans),
                                    children: [(0, s.jsxs)("p", {
                                        children: ["Employee,", (0, s.jsx)("br", {}), "Spouse ", (0, s.jsx)("br", {}), "& Kids"]
                                    }), (0, s.jsx)("label", {})]
                                }), (0, s.jsx)("li", {
                                    className: "".concat((null == n ? void 0 : n.FamilyDefinitionId) == 1 && m().activePlans),
                                    onClick: () => {
                                        r(1)
                                    },
                                    children: (0, s.jsxs)("p", {
                                        children: [(0, s.jsxs)("span", {
                                            children: ["Employee ", (0, s.jsx)("br", {}), "only"]
                                        }), (0, s.jsx)("label", {})]
                                    })
                                })]
                            })
                        })]
                    })
                },
                x = n(57042),
                g = n(48064),
                j = n(2530),
                f = n(5122),
                I = n(2265);
            let b = e => {
                    let {
                        loader: i,
                        onChangeFn: n,
                        children: a,
                        skeleton: r,
                        wkey: l,
                        checked: t
                    } = e;
                    return i || !n ? (0, s.jsx)("div", {
                        className: m().formfield,
                        children: r
                    }) : (0, s.jsx)("div", {
                        className: (0, x.Z)(m().formfield, t && m().fieldCheck),
                        children: a
                    })
                },
                v = e => {
                    let {
                        error: i
                    } = e;
                    return i ? (0, s.jsx)("div", {
                        className: m().error,
                        children: i
                    }) : ""
                };
            var y = function(e) {
                    let {
                        loader: i,
                        totalSteps: n,
                        children: a,
                        handleContinue: r,
                        step: l = 2,
                        handleback: t,
                        onWhatsAppToggle: o,
                        WhatsappOptIn: c,
                        stickyOnScrollCTABtn: p = !1
                    } = e, u = (0, I.useRef)(), b = (0, d.I0)(), v = (0, f.Z)({
                        ref: u,
                        callJustOnce: !1,
                        defaultVisibleStateValue: !0
                    }), y = () => (0, s.jsx)("button", {
                        className: (0, x.Z)(m().submitBtn, i && m().hideArrow),
                        onClick: () => !i && r(),
                        children: i ? (0, s.jsx)(g.Z, {}) : "View Plan Instantly"
                    });
                    return (0, s.jsxs)("section", {
                        className: m().rightContentBox,
                        children: [(0, s.jsxs)("div", {
                            className: m().fieldCard,
                            children: [1 == l && (0, s.jsxs)("div", {
                                className: m().fieldCardStep1,
                                children: [(0, s.jsxs)("div", {
                                    className: m().fieldCardTitle,
                                    children: [(0, s.jsxs)("h2", {
                                        className: m().fieldCardTitleHeading,
                                        children: ["Get ₹1 Lakh cover starting at just ₹110/month/employee", (0, s.jsx)("sup", {
                                            children: "+"
                                        })]
                                    }), (0, s.jsx)("label", {
                                        className: m().stepCount,
                                        children: "Step 1/2"
                                    })]
                                }), (0, s.jsxs)("article", {
                                    className: m().stepFormWrapper,
                                    children: [a, (0, s.jsx)("div", {
                                        className: m().secureTag,
                                        children: (0, s.jsxs)("span", {
                                            children: [(0, s.jsx)(h(), {
                                                width: 12,
                                                height: 14,
                                                alt: "secure-icon",
                                                src: "https://static.pbcdn.in/sme-cdn/images/icons/secure_icon.svg"
                                            }), "We don't spam"]
                                        })
                                    })]
                                })]
                            }), 2 == l && (0, s.jsxs)("div", {
                                className: m().fieldCardStep2,
                                children: [(0, s.jsx)(_, {
                                    handleback: t
                                }), a]
                            }), p && (0, s.jsx)("div", {
                                ref: u,
                                children: y()
                            }), (!p || !v) && (0, s.jsx)("div", {
                                className: m().fixedSubmitBtn,
                                children: y()
                            }), (0, s.jsxs)("div", {
                                className: m().policyCertified,
                                children: [(0, s.jsx)("label", {}), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("span", {}), (0, s.jsx)("p", {
                                        children: "Only IRDAI certified expert will assist you "
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: m().whatsappUpdates,
                                children: [(0, s.jsxs)("p", {
                                    children: [(0, s.jsx)("i", {}), " Get Quotes on Whatsapp"]
                                }), (0, s.jsx)("span", {
                                    className: m().MuiSwitchRoot,
                                    children: (0, s.jsxs)("label", {
                                        className: m().Switch,
                                        children: [(0, s.jsx)("input", {
                                            type: "checkbox",
                                            className: m().WhatsappOptIn,
                                            id: "WhatsappOptIn",
                                            name: "WhatsappOptIn",
                                            checked: c,
                                            onChange: o
                                        }), (0, s.jsx)("div", {
                                            className: m().slider
                                        })]
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: m().landingTerm,
                                children: ['By clicking on "', (0, s.jsx)("span", {
                                    className: "ngBinding",
                                    children: "View Plan Instantly"
                                }), '", you agree to our', (0, s.jsx)("a", {
                                    id: "landing_term-privacyPolciy",
                                    href: "http://www.policybazaar.com/legal-and-admin-policies/",
                                    target: "_blank",
                                    children: "Privacy Policy"
                                }), ",", (0, s.jsx)("a", {
                                    id: "landing_term-term-condition",
                                    href: "https://www.policybazaar.com/legal-and-admin-policies/#termsofuse",
                                    target: "_blank",
                                    children: "Terms of Use"
                                }), "\xa0 &", (0, s.jsxs)("a", {
                                    onClick: () => b((0, j.gf)(!0)),
                                    id: "disclaimerText",
                                    children: [(0, s.jsx)("sup", {
                                        children: "+"
                                    }), "Disclaimer"]
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "".concat(m().marketingRatedSectionMb, "  ").concat(m().mobile),
                            children: [(0, s.jsxs)("aside", {
                                className: m().policytrust,
                                children: [(0, s.jsx)("h3", {
                                    children: "Policybazaar's Trust"
                                }), (0, s.jsxs)("ul", {
                                    children: [(0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("i", {}), " Superior claims experience"]
                                    }), (0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("i", {}), " Budget-friendly plans"]
                                    }), (0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("i", {}), " Best in-class HR portal"]
                                    })]
                                })]
                            }), (0, s.jsxs)("aside", {
                                className: "".concat(m().marketingRatedMb, " ").concat(m().mobile),
                                children: [(0, s.jsx)(h(), {
                                    className: m().boxBg,
                                    width: 82,
                                    height: 82,
                                    src: "https://static.pbcdn.in/sme-cdn/images/marketing/marketing-rated-mb-bg.svg",
                                    alt: "box-bg"
                                }), (0, s.jsxs)("i", {
                                    children: ["Policybazaar is\xa0", (0, s.jsx)("strong", {
                                        children: "one of India's leading"
                                    }), "\xa0digital insurance platform"]
                                }), (0, s.jsxs)("ul", {
                                    children: [(0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("label", {
                                            children: (0, s.jsx)("span", {
                                                className: "".concat(m().ratedImg, " ").concat(m().ratedImg1)
                                            })
                                        }), (0, s.jsxs)("p", {
                                            children: [(0, s.jsx)("span", {
                                                children: "6.7 Crore"
                                            }), " Registered consumers"]
                                        })]
                                    }), (0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("label", {
                                            children: (0, s.jsx)("span", {
                                                className: "".concat(m().ratedImg, " ").concat(m().ratedImg2)
                                            })
                                        }), (0, s.jsxs)("p", {
                                            children: [(0, s.jsx)("span", {
                                                children: "51"
                                            }), " Insurance partners"]
                                        })]
                                    }), (0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("label", {
                                            children: (0, s.jsx)("span", {
                                                className: "".concat(m().ratedImg, " ").concat(m().ratedImg3)
                                            })
                                        }), (0, s.jsxs)("p", {
                                            children: [(0, s.jsx)("span", {
                                                children: "3.4 Crore"
                                            }), " Policies sold"]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                H = n(78662),
                G = n(73470);
            n(24033);
            var C = n(93006);
            n(3434);
            var N = n(70131),
                w = n(63270),
                B = n(92540),
                k = n(60348),
                F = e => {
                    let {
                        campaignData: i
                    } = e, {
                        searchParams: n,
                        bookdemo: a
                    } = (0, d.v9)(e => e.extras), r = n.enquiryid && n.step || 1, [c, h] = (0, I.useState)(r), p = n.campaignid, m = (0, d.v9)(e => e.loader[o.kf.initialLoader]), {
                        GAClickEvent: _,
                        GAViewedEvent: x,
                        VirtualPage: g
                    } = (0, C.Z)({
                        eventCategory: {
                            default: "GHI_LeadForm_Step".concat(c),
                            leadpreviouspage: "lead_ghi_previouspage",
                            leadpage: "lead_ghi_page"
                        },
                        pageNameMap: H.A
                    }), f = e => {
                        2 != e && h(e + 1)
                    }, F = (0, d.I0)(), M = (0, d.v9)(e => e.lead);
                    (0, I.useEffect)(() => {
                        F((0, j.Wu)({
                            isEb: !0
                        })), F((0, j.xr)({
                            offerid: G.s.GHI,
                            campaignid: p
                        })), F((0, u.V4)({
                            InvestmentTypeId: G.s.GHI
                        }))
                    }, []), (0, I.useEffect)(() => {
                        S()
                    }, [n.available]);
                    let S = () => {
                        M && ((null == M ? void 0 : M.MobileNo) || (null == M ? void 0 : M.MaskedMobileNo)) && h(n.step)
                    };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [1 == c && (0, s.jsx)(l.Z, {
                            loader: m,
                            Wrapper: y,
                            FieldWrapper: b,
                            FieldError: v,
                            step: 1,
                            continueCallback: f,
                            FieldsArray: [t.a.LeadMobile],
                            VirtualPage: g,
                            GAClickEvent: _,
                            GAViewedEvent: x,
                            totalSteps: 2,
                            OnChangeFunctions: e => ({
                                onLeadMobileChange: function() {
                                    for (var i = arguments.length, n = Array(i), s = 0; s < i; s++) n[s] = arguments[s];
                                    return (0, N.onLeadMobileChange)(e, ...n)
                                }
                            }),
                            Components: {
                                LeadMobileField: B.default
                            },
                            campaignDetails: i
                        }), 2 == c && (0, s.jsx)(l.Z, {
                            loader: m,
                            Wrapper: y,
                            FieldWrapper: b,
                            step: 2,
                            continueCallback: f,
                            FieldsArray: [t.a.LeadNumberOfEmployee],
                            VirtualPage: g,
                            GAClickEvent: _,
                            GAViewedEvent: x,
                            totalSteps: 2,
                            FieldError: v,
                            OnChangeFunctions: e => ({
                                onLeadNumberOfEmpChange: function() {
                                    for (var i = arguments.length, n = Array(i), s = 0; s < i; s++) n[s] = arguments[s];
                                    return (0, w.onLeadNumberOfEmpChange)(e, ...n)
                                }
                            }),
                            Components: {
                                LeadNumberOfEmployee: k.default
                            },
                            campaignDetails: i
                        })]
                    })
                },
                M = n(28811),
                S = n.n(M),
                P = n(21303),
                T = n.n(P);
            let E = {
                1: "Group Health Insurance",
                2: "Group Medical Insurance",
                3: "Employee Health Insurance",
                4: "Corporate Health Insurance",
                5: "Employee Medical Insurance",
                6: "Corporate Medical Insurance",
                18: "Group Health Insurance"
            };
            var R = () => {
                    let e = (0, d.v9)(e => e.extras.searchParams),
                        i = e.campaignid ? e.campaignid : 1;
                    return (0, s.jsxs)("section", {
                        className: T().leftContentBox,
                        children: [(0, s.jsxs)("div", {
                            className: T().Titles,
                            children: [(0, s.jsx)("h1", {
                                className: T().title,
                                children: E[i]
                            }), (0, s.jsxs)("h2", {
                                className: T().subTitle,
                                children: [(0, s.jsx)("span", {
                                    className: T().percentIcon
                                }), " Compare and Save", (0, s.jsxs)("label", {
                                    className: T().uptoPercent,
                                    children: ["upto 65%", (0, s.jsx)("sup", {
                                        children: (0, s.jsx)("small", {
                                            children: "++"
                                        })
                                    })]
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "".concat(T().caricatureMain, " ").concat(T().desktop),
                            children: [(0, s.jsx)("div", {
                                className: T().caricatureBanner,
                                children: (0, s.jsx)(h(), {
                                    src: "https://static.pbcdn.in/sme-cdn/images/marketing/marketing-kapil-sharma-brandv2.png",
                                    alt: "banner Image",
                                    width: 213,
                                    height: 253
                                })
                            }), (0, s.jsxs)("div", {
                                className: T().policyFeature,
                                children: [(0, s.jsx)("h3", {
                                    children: "Policybazaar's Trust"
                                }), (0, s.jsxs)("ul", {
                                    children: [(0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("i", {}), " Superior claims experience"]
                                    }), (0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("i", {}), " Budget-friendly plans"]
                                    }), (0, s.jsxs)("li", {
                                        children: [(0, s.jsx)("i", {}), " Best in-class HR portal"]
                                    })]
                                })]
                            })]
                        }), (0, s.jsxs)("aside", {
                            className: "".concat(T().marketingRated, " ").concat(T().desktop),
                            children: [(0, s.jsxs)("i", {
                                children: ["Policybazaar is\xa0", (0, s.jsx)("strong", {
                                    children: "one of India's leading"
                                }), " digital insurance platform"]
                            }), (0, s.jsxs)("ul", {
                                children: [(0, s.jsxs)("li", {
                                    children: [(0, s.jsx)("label", {
                                        children: (0, s.jsx)("span", {
                                            className: "".concat(T().ratedImg, " ").concat(T().ratedImg1)
                                        })
                                    }), (0, s.jsxs)("p", {
                                        children: [(0, s.jsx)("span", {
                                            children: "6.7 Crore"
                                        }), " Registered consumers"]
                                    })]
                                }), (0, s.jsxs)("li", {
                                    children: [(0, s.jsx)("label", {
                                        children: (0, s.jsx)("span", {
                                            className: "".concat(T().ratedImg, " ").concat(T().ratedImg2)
                                        })
                                    }), (0, s.jsxs)("p", {
                                        children: [(0, s.jsx)("span", {
                                            children: "51"
                                        }), " Insurance partners"]
                                    })]
                                }), (0, s.jsxs)("li", {
                                    children: [(0, s.jsx)("label", {
                                        children: (0, s.jsx)("span", {
                                            className: "".concat(T().ratedImg, " ").concat(T().ratedImg3)
                                        })
                                    }), (0, s.jsxs)("p", {
                                        children: [(0, s.jsx)("span", {
                                            children: "3.4 Crore"
                                        }), " Policies sold"]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                A = n(80197),
                O = n(58877),
                D = n.n(O),
                L = () => {
                    let [e, i] = (0, I.useState)(!1);
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: D().knowMore,
                            children: (0, s.jsxs)("div", {
                                className: D().wrapper,
                                children: [(0, s.jsxs)("h2", {
                                    onClick: () => {
                                        i(!e)
                                    },
                                    className: D().KnowMoreHeading,
                                    children: ["Know more about Group Health Insurance", (0, s.jsx)("label", {
                                        className: (0, x.Z)(D().knowMoreArrow, e && D().down)
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: (0, x.Z)(D().knowMoreDetails, e && D().additionalHeight),
                                    children: [(0, s.jsx)("h3", {
                                        children: "Group Health Insurance"
                                    }), (0, s.jsxs)("ul", {
                                        children: [(0, s.jsx)("li", {
                                            children: "Group health insurance is purchased by companies & organisation to provide medical coverageto their employees."
                                        }), (0, s.jsx)("li", {
                                            children: "Group health insurance provides coverage to employees from the day they join until the day they resign"
                                        }), (0, s.jsxs)("li", {
                                            children: ["The employer pays the premium amount of the group health insurance plan on the employee’s behalf.", " "]
                                        }), (0, s.jsx)("li", {
                                            children: "Group health insurance policy benefits both employer and employee in different ways."
                                        })]
                                    }), (0, s.jsx)("h3", {
                                        children: "Group Health Insurance Policy Benefits for Employers"
                                    }), (0, s.jsxs)("ul", {
                                        children: [(0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Retain & Attract Employees:"
                                            }), " Providing group insurance is one of the attractive perks of an organization, it helps in retaining old employees and attracting new ones."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Generates Goodwill:"
                                            }), " Providing group health insurance to employees helps in generating goodwill among the office staff."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Cost-Effective:"
                                            }), " Insurance companies cover a huge number of people under one insurance policy, it becomes cost-effective for the employer to purchase the policy."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Corporate Buffer:"
                                            }), " Only in case of a life-threatening disease or critical illnesses, the employer can opt for a corporate buffer, if the existing sum insured exhausts."]
                                        })]
                                    }), (0, s.jsx)("h3", {
                                        children: "Group Health Insurance Benefits for Employees"
                                    }), (0, s.jsxs)("ul", {
                                        children: [(0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "No Medical Screening:"
                                            }), " The employee does not have to go through any kind of medical screening before getting covered under group health insurance."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Pre & Post-Hospitalisation Coverage:"
                                            }), " The group mediclaim policy for employees provides coverage for pre & post hospitalisation expenses to the employees."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "ESKP:"
                                            }), " ESKP stands for Employee, spouse, kids and parents. Group health insurance coverage extends to these family members."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "No Waiting Period:"
                                            }), " Unlike individual health plans, there is no waiting period for the specified ailments under a group health insurance plan."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Cashless Claim:"
                                            }), " Cashless claims can be done within 45-60 minutes if the insured employee goes to a network hospital for treatment."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Reimbursement Claim:"
                                            }), " Reimbursement claims can be done within 15 working days if the insured employee goes to a non-network hospital for treatment."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Infant Coverage from Day 1:"
                                            }), " The employee’s newborn baby gets coverage from the of his/her delivery."]
                                        }), (0, s.jsxs)("li", {
                                            children: [(0, s.jsx)("span", {
                                                children: "Room-rent Coverage:"
                                            }), " 1% of the sum insured coverage is provided for a normal room whereas 2% of the sum insured coverage is provided for ICUs. No capping for room rent is also provided by some of the insurers"]
                                        })]
                                    }), (0, s.jsx)("h3", {
                                        children: "Policybazaar Advantages"
                                    }), (0, s.jsxs)("ul", {
                                        children: [(0, s.jsx)("li", {
                                            children: "Quick quotes from renowned insurers."
                                        }), (0, s.jsx)("li", {
                                            children: "24X7 Claim assistance."
                                        }), (0, s.jsx)("li", {
                                            children: "Be it endorsements, account statement, claims analyses or e-cards, there is an HR panel for all Policy Management requests."
                                        }), (0, s.jsx)("li", {
                                            children: "Policybazaar’s strong bond with insurers and TPAs makes the claiming process seamless."
                                        }), (0, s.jsx)("li", {
                                            children: "A dedicated relationship manager is assigned to resolve service-related queries."
                                        }), (0, s.jsx)("li", {
                                            children: "Customers can get a soft copy of the policy on their registered email ID right after the purchase. However, it is subject to the completion of documents."
                                        }), (0, s.jsx)("li", {
                                            children: "The members get access to several IPD & OPD benefits such as Annual health checkups, mental wellness/Psychiatry, 24X7 unlimited e-consultation from general physicians & specialists and many more."
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                };
            let K = S()(() => n.e(1895).then(n.bind(n, 1895)), {
                    loadableGenerated: {
                        webpack: () => [1895]
                    },
                    ssr: !1
                }),
                Z = S()(() => n.e(6629).then(n.bind(n, 26629)), {
                    loadableGenerated: {
                        webpack: () => [26629]
                    },
                    ssr: !1
                });
            var V = e => {
                let {
                    campaignData: i
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(A.Z, {}), (0, s.jsxs)("main", {
                        className: "".concat(r().ghiMain),
                        children: [(0, s.jsx)("section", {
                            className: "".concat(r().mainContentSection, " ").concat(r().ghibg),
                            children: (0, s.jsxs)("div", {
                                className: r().wrapper,
                                children: [(0, s.jsx)(R, {}), (0, s.jsx)(F, {
                                    campaignData: i
                                })]
                            })
                        }), (0, s.jsx)(Z, {}), (0, s.jsx)(L, {}), (0, s.jsx)(K, {})]
                    })]
                })
            }
        },
        21303: function(e) {
            e.exports = {
                mobile: "GHI_mobile__NbI5c",
                leftContentBox: "GHI_leftContentBox__NDBAt",
                Titles: "GHI_Titles__LpxAS",
                title: "GHI_title__iXQZs",
                subTitle: "GHI_subTitle__DiYQD",
                percentIcon: "GHI_percentIcon__lRoPz",
                uptoPercent: "GHI_uptoPercent__jZT4q",
                caricatureMain: "GHI_caricatureMain__KLB7b",
                caricatureBanner: "GHI_caricatureBanner__VNaEF",
                policyFeature: "GHI_policyFeature__vGZXM",
                marketingRated: "GHI_marketingRated__Izwpa",
                ratedImg: "GHI_ratedImg___ulyZ",
                ratedImg1: "GHI_ratedImg1__jK_Ro",
                ratedImg2: "GHI_ratedImg2__1rqDZ",
                ratedImg3: "GHI_ratedImg3__ZU_4V",
                desktop: "GHI_desktop__3Hmsi"
            }
        },
        45621: function(e) {
            e.exports = {
                mobile: "GHIFieldBrand_mobile___SYD4",
                rightContentBox: "GHIFieldBrand_rightContentBox__hqOwM",
                fieldCard: "GHIFieldBrand_fieldCard__VYKj9",
                fieldCardStep1: "GHIFieldBrand_fieldCardStep1__9_6z3",
                fieldCardTitle: "GHIFieldBrand_fieldCardTitle__N6Mst",
                fieldCardTitleHeading: "GHIFieldBrand_fieldCardTitleHeading__smeXr",
                stepCount: "GHIFieldBrand_stepCount__b8Qqi",
                stepFormWrapper: "GHIFieldBrand_stepFormWrapper__bNTSx",
                formfield: "GHIFieldBrand_formfield__yQXt9",
                error: "GHIFieldBrand_error__tS1mg",
                fieldCheck: "GHIFieldBrand_fieldCheck__uOvNd",
                secureTag: "GHIFieldBrand_secureTag__BuhO_",
                fieldCardStep2: "GHIFieldBrand_fieldCardStep2__g86pC",
                backBtn: "GHIFieldBrand_backBtn__GDH2U",
                freshRenewalSelection: "GHIFieldBrand_freshRenewalSelection__ytJeS",
                activePlans: "GHIFieldBrand_activePlans__mUVoA",
                submitBtn: "GHIFieldBrand_submitBtn__6kKub",
                hideArrow: "GHIFieldBrand_hideArrow__y8dkr",
                policyCertified: "GHIFieldBrand_policyCertified__HRTz_",
                whatsappUpdates: "GHIFieldBrand_whatsappUpdates__LO61D",
                MuiSwitchRoot: "GHIFieldBrand_MuiSwitchRoot__TGBuV",
                Switch: "GHIFieldBrand_Switch__Ogyz_",
                slider: "GHIFieldBrand_slider__NKhsN",
                landingTerm: "GHIFieldBrand_landingTerm__csM_X",
                marketingRatedSectionMb: "GHIFieldBrand_marketingRatedSectionMb__sSt8n",
                policytrust: "GHIFieldBrand_policytrust__6vadJ",
                marketingRatedMb: "GHIFieldBrand_marketingRatedMb__FOVtg",
                boxBg: "GHIFieldBrand_boxBg__eQc_D",
                ratedImg: "GHIFieldBrand_ratedImg__4O2O2",
                ratedImg1: "GHIFieldBrand_ratedImg1__IvYqf",
                ratedImg2: "GHIFieldBrand_ratedImg2__Op3UP",
                ratedImg3: "GHIFieldBrand_ratedImg3__WSUdC",
                insurerCardMb: "GHIFieldBrand_insurerCardMb__Q1BAb",
                insurerCardList: "GHIFieldBrand_insurerCardList__QB_nR",
                "scroll-carousel-eb": "GHIFieldBrand_scroll-carousel-eb__PqEnh",
                insurerLogo: "GHIFieldBrand_insurerLogo__Xd247",
                fixedSubmitBtn: "GHIFieldBrand_fixedSubmitBtn__jAfZc",
                fadein: "GHIFieldBrand_fadein__ylrtk",
                desktop: "GHIFieldBrand_desktop__q7Qik",
                zoomInOut: "GHIFieldBrand_zoomInOut___Vku2"
            }
        },
        7265: function(e) {
            e.exports = {
                wrapper: "GHI_wrapper__uJtTx",
                ghibg: "GHI_ghibg__ryIOP",
                mobile: "GHI_mobile__DGiny",
                ghiMain: "GHI_ghiMain__Xol5b",
                mainContentSection: "GHI_mainContentSection__Wuj_I",
                exclusiveBenefits: "GHI_exclusiveBenefits__Lkt7P",
                heading: "GHI_heading__CcBi_",
                exclusiveBenefitsList: "GHI_exclusiveBenefitsList__vQHt3",
                benefitsHr: "GHI_benefitsHr__KJ4tS",
                policyManagementIcon: "GHI_policyManagementIcon__SgWj8",
                dedicatedRelationshipIcon: "GHI_dedicatedRelationshipIcon__bcKtF",
                benefitsEmployees: "GHI_benefitsEmployees__nD2yG",
                inAppIcon: "GHI_inAppIcon__ItYFj",
                widestRangeIcon: "GHI_widestRangeIcon__xAKQK",
                footerSection: "GHI_footerSection__PthnR",
                footerSectionTitle: "GHI_footerSectionTitle__vq_Op",
                legalFooterArrow: "GHI_legalFooterArrow__ZItbu",
                down: "GHI_down__q__Yb",
                disclaimerDescription: "GHI_disclaimerDescription__3VI56",
                desktop: "GHI_desktop__58JeZ"
            }
        },
        58877: function(e) {
            e.exports = {
                knowMore: "KnowMore_knowMore__SDdey",
                wrapper: "KnowMore_wrapper__NSit3",
                KnowMoreHeading: "KnowMore_KnowMoreHeading__iCpYN",
                knowMoreArrow: "KnowMore_knowMoreArrow__hPGtM",
                down: "KnowMore_down__8h6uh",
                knowMoreDetails: "KnowMore_knowMoreDetails__Z3_pK",
                additionalHeight: "KnowMore_additionalHeight__CYu7z"
            }
        }
    }
]);