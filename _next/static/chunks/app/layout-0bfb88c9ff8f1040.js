(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        1153: function(e, a, r) {
            Promise.resolve().then(r.bind(r, 9813)), Promise.resolve().then(r.bind(r, 8871)), Promise.resolve().then(r.bind(r, 3069)), Promise.resolve().then(r.bind(r, 1231)), Promise.resolve().then(r.t.bind(r, 4162, 23))
        },
        4930: function(e, a, r) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function() {
                    return t
                }
            });
            let i = r(1024);
            r(2265);
            let n = i._(r(4795));

            function s(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function t(e, a) {
                let r = n.default,
                    i = {
                        loading: e => {
                            let {
                                error: a,
                                isLoading: r,
                                pastDelay: i
                            } = e;
                            return null
                        }
                    };
                "function" == typeof e && (i.loader = e), Object.assign(i, a);
                let t = i.loader;
                return r({ ...i,
                    loader: () => null != t ? t().then(s) : Promise.resolve(s(() => null))
                })
            }("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
                value: !0
            }), Object.assign(a.default, a), e.exports = a.default)
        },
        6005: function(e, a, r) {
            "use strict";

            function i(e) {
                let {
                    children: a
                } = e;
                return a
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "NoSSR", {
                enumerable: !0,
                get: function() {
                    return i
                }
            }), r(6491)
        },
        4795: function(e, a, r) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let i = r(1024)._(r(2265)),
                n = r(6005),
                s = function(e) {
                    let a = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, e);

                    function r(e) {
                        let r = a.loading,
                            s = i.default.createElement(r, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            t = a.ssr ? i.default.Fragment : n.NoSSR,
                            l = a.lazy;
                        return i.default.createElement(i.default.Suspense, {
                            fallback: s
                        }, i.default.createElement(t, null, i.default.createElement(l, e)))
                    }
                    return a.lazy = i.default.lazy(a.loader), r.displayName = "LoadableComponent", r
                }
        },
        9813: function(e, a, r) {
            "use strict";
            r.r(a);
            var i = r(7437),
                n = r(4614),
                s = r.n(n),
                t = r(2265),
                l = r(4930);
            let o = r.n(l)()(() => r.e(448).then(r.bind(r, 5448)), {
                loadableGenerated: {
                    webpack: () => [5448]
                },
                ssr: !1
            });
            a.default = e => {
                let {
                    children: a
                } = e, [r, n] = (0, t.useState)(!1);
                return ((0, t.useEffect)(() => {
                    n(!0)
                }, []), r) ? (0, i.jsxs)("section", {
                    className: s().className,
                    children: [a, (0, i.jsx)(o, {})]
                }) : null
            }
        },
        8871: function(e, a, r) {
            "use strict";
            r.r(a);
            var i = r(7437),
                n = r(2265);
            a.default = e => {
                let a = new Date().getFullYear(),
                    [r, s] = (0, n.useState)(!1),
                    t = () => {
                        s(e => !e)
                    },
                    [l, o] = (0, n.useState)(!1),
                    c = () => {
                        o(e => !e)
                    };
                return (0, i.jsxs)("footer", {
                    children: [(0, i.jsx)("div", {
                        className: "title",
                        onClick: () => t(),
                        children: "Disclaimer*"
                    }), r && (0, i.jsxs)("div", {
                        className: "footerText mb-24",
                        children: [(0, i.jsx)("p", {
                            children: "*Savings are based on the comparison between the highest and the lowest premium for own damage cover (excluding add-on covers) provided by different insurance companies for the same vehicle with the same IDV and same NCB."
                        }), (0, i.jsx)("p", {
                            children: "*Rs 2094/- per annum(Rs 6/day) is the price for third-party motor insurance for private cars (non-commercial and non-electric) of not more than 1000cc."
                        }), (0, i.jsx)("p", {
                            children: "**Savings of Rs 40000 are based on the comparison between the highest and the lowest premium for the long-term bundled plan (1-year own-damage and 3-year third party cover) (excluding add-on covers) provided by different insurance companies for private four-wheeler (non-commercial) with minimum IDV of 20 lac and 0% NCB"
                        }), (0, i.jsx)("p", {
                            children: "The renewal/purchase of insurance policy is subject to our operations not being impacted by a system failure or force majeure event or for reasons beyond our control. Actual time for transaction may vary subject to additional data requirements and operational processes."
                        }), (0, i.jsx)("p", {
                            children: "#Claim Assurance Program: Pick-up and drop facility available in 1400+ select network garages. On-ground workshop team available in select workshops. Repair warranty on parts at the sole discretion of insurance companies. Dedicated Claims Manager. 24x7 Claim Assistance."
                        }), (0, i.jsx)("p", {
                            children: "~Source: Google Review Rating available on:- Policybazaar Rating."
                        }), (0, i.jsx)("p", {
                            children: " Policybazaar is acting only as a facilitator and claims settlement shall be at the sole discretion of the insurer."
                        }), (0, i.jsx)("p", {
                            children: "For more details on risk factors, terms and conditions, please read the sales brochure carefully before concluding a sale. STANDARD TERMS AND CONDITIONS APPLY. "
                        }), (0, i.jsx)("p", {
                            children: "Policybazaar Insurance Brokers Private Limited, Registered Office - Plot No.119, Sector - 44, Gurgaon, Haryana - 122001 | CIN: U74999HR2014PTC053454 | Registration No. 742, Valid till 09/06/2027 | License category- Composite Broker"
                        }), (0, i.jsx)("p", {
                            children: "Visitors are hereby informed that their information submitted on the website may be shared with insurers. Product information is authentic and solely based on the information received from the insurers."
                        }), (0, i.jsxs)("p", {
                            children: ["\xa9 Copyright 2008- ", a, " ", (0, i.jsx)("a", {
                                href: "https://www.policybazaar.com/",
                                children: "policybazaar.com"
                            }), ". All Rights Reserved."]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "knowMoreAboutCar",
                        children: [(0, i.jsx)("div", {
                            className: "title",
                            onClick: () => c(),
                            children: "Know more about Car Insurance "
                        }), l && (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("h4", {
                                className: "headingV4 mb-16",
                                children: "Car Insurance"
                            }), (0, i.jsxs)("ul", {
                                className: "bulletList mb-16",
                                children: [(0, i.jsxs)("li", {
                                    children: ["In India, driving exposes you to various risks. ", (0, i.jsx)("a", {
                                        href: "https://www.policybazaar.com/motor-insurance/car-insurance/",
                                        target: "_blank",
                                        children: "Car Insurance"
                                    }), " helps neutralize those risks and mitigate damage repair expenses in case of an accident."]
                                }), (0, i.jsx)("li", {
                                    children: "For enhanced coverage, you can opt for add-on covers such as zero depreciation, quick road assistance, engine and electronic circuit cover, return to invoice, no-claim bonus protection, personal accident cover, loss of personal belongings, key replacement, daily cash allowance etc. so that your insurance expectations are fulfilled."
                                }), (0, i.jsxs)("li", {
                                    children: ["As per Motor Vehicle Act, 2008, it is mandatory for every vehicle owner to buy third party insurance for his/her vehicle plying on Indian roads. If an individual fails to do so, legal action will be taken against him/her. It's recommended to buy a comprehensive ", (0, i.jsx)("a", {
                                        href: "https://www.policybazaar.com/motor-insurance/",
                                        target: "_blank",
                                        children: "motor insurance"
                                    }), " plan. It provides coverage for third-party liability as well as own damage."]
                                }), (0, i.jsx)("li", {
                                    children: "Rather than paying the damage repair expenses, you pay an insurance premium to your insurance provider. The insurance premium is computed on the basis of your insured declared value."
                                })]
                            }), (0, i.jsx)("h4", {
                                className: "headingV4 mb-16",
                                children: "Benefits of Car Insurance"
                            }), (0, i.jsxs)("ul", {
                                className: "bulletList mb-16",
                                children: [(0, i.jsxs)("li", {
                                    children: [(0, i.jsx)("b", {
                                        children: "Covers Damage Repair Costs:"
                                    }), " Paying for damage repair can be expensive. There can be times where your car might get damaged because of somebody else's carelessness. What if the repair expenses burn a big hole in your pockets? If you have adequate vehicle insurance coverage, you don't have to worry about it."]
                                }), (0, i.jsxs)("li", {
                                    children: [(0, i.jsx)("b", {
                                        children: "Takes Care of Legal Liability:"
                                    }), " Buying ", (0, i.jsx)("a", {
                                        href: "https://www.policybazaar.com/motor-insurance/third-party-insurance/",
                                        target: "_blank",
                                        children: "third party insurance"
                                    }), " cover fulfills your legal liability. In case you are involved in a road mishap, it safeguards you from accident-related legal ramifications (if the accident is caused by you)."]
                                }), (0, i.jsxs)("li", {
                                    children: [(0, i.jsx)("b", {
                                        children: "Covers Hospitalization Expenses:"
                                    }), " Some accidents cause fractures and other serious injuries that need immediate medical attention. Having a motor insurance plan safeguards you from spending hospitalization expenses from your own pocket."]
                                }), (0, i.jsxs)("li", {
                                    children: [(0, i.jsx)("b", {
                                        children: "Financial Support:"
                                    }), " If a vehicle owner is a sole breadwinner, it's unfortunate if he succumbs to the injuries caused by a road accident. The financial crunch can be threatening for his/her family's survival. The financial support received by vehicle insurer is a blessing in disguise post the unfortunate incident."]
                                })]
                            }), (0, i.jsx)("h4", {
                                className: "headingV4 mb-16",
                                children: "Key Points to Remember when Comparing Car Insurance"
                            }), (0, i.jsxs)("ul", {
                                className: "bulletList mb-16",
                                children: [(0, i.jsx)("li", {
                                    children: "Try to strike a perfect balance between the premium and the offered coverage."
                                }), (0, i.jsx)("li", {
                                    children: "Check that your preferred insurance provider has authorized a wide range of car service centers and garages as their network listed."
                                }), (0, i.jsx)("li", {
                                    children: "Cashless motor insurance ensures a smooth claim process."
                                }), (0, i.jsx)("li", {
                                    children: "The voluntary excess shouldn't be too high or too low."
                                }), (0, i.jsx)("li", {
                                    children: "Check out the list of add-ons."
                                }), (0, i.jsx)("li", {
                                    children: "Check the Insured Declared Value offered by the insurance company."
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        3069: function(e, a, r) {
            "use strict";
            r.r(a);
            var i = r(7437),
                n = r(2265),
                s = r(6691),
                t = r.n(s),
                l = r(7551),
                o = r(2251);
            a.default = e => {
                let [a, r] = (0, n.useState)(!1), s = () => {
                    r(e => !e)
                };
                return (0, i.jsx)("header", {
                    children: (0, i.jsx)("div", {
                        className: "container-fluid",
                        children: (0, i.jsxs)("div", {
                            className: "headerInner",
                            children: [(0, i.jsx)("div", {
                                className: "logo",
                                children: (0, i.jsx)("a", {
                                    href: "https://www.policybazaar.com/",
                                    className: "logo",
                                    target: "_self",
                                    children: o.Z.isMobile() ? (0, i.jsx)("img", {
                                        width: "32",
                                        height: "32",
                                        className: "img-fluid valignMiddle",
                                        alt: "policybazaar",
                                        src: "https://static.pbcdn.in/car-cdn/car2.0/pb-logo-mobile.svg"
                                    }) : (0, i.jsx)(t(), {
                                        priority: !0,
                                        width: "161",
                                        height: "42",
                                        src: l.r4,
                                        className: "img-fluid",
                                        alt: "policybazaar"
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "btnGroup",
                                children: (0, i.jsxs)("div", {
                                    className: "needHelpWrap",
                                    children: [(0, i.jsxs)("div", {
                                        className: "primaryBtnV1 fontMedium",
                                        onClick: () => s(),
                                        children: [(0, i.jsx)(t(), {
                                            width: "14",
                                            height: "14",
                                            src: l.SP,
                                            alt: "need-help-policybazarr"
                                        }), " Need help?"]
                                    }), a && (0, i.jsx)("div", {
                                        className: "needHelpDropdown",
                                        children: (0, i.jsxs)("div", {
                                            className: "inner",
                                            children: [(0, i.jsx)("div", {
                                                className: "headingType2 mb-24",
                                                children: "Toll free numbers"
                                            }), (0, i.jsxs)("ul", {
                                                className: "tollFreeNumbers",
                                                children: [(0, i.jsx)("li", {
                                                    children: (0, i.jsxs)("a", {
                                                        href: "Tel:1800-419-7716",
                                                        children: [(0, i.jsx)(t(), {
                                                            width: "22",
                                                            height: "24",
                                                            src: l.LA,
                                                            alt: "tollfree"
                                                        }), " Sales: 1800-419-7716"]
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    children: (0, i.jsxs)("a", {
                                                        href: "Tel:1800-258-5970",
                                                        children: [(0, i.jsx)(t(), {
                                                            width: "25",
                                                            height: "26",
                                                            src: l.AS,
                                                            alt: "tollfree"
                                                        }), " Service: 1800-258-5970"]
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    children: (0, i.jsxs)("a", {
                                                        href: "Tel:1800-258-5881",
                                                        children: [(0, i.jsx)(t(), {
                                                            width: "25",
                                                            height: "26",
                                                            src: l.Vq,
                                                            alt: "tollfree"
                                                        }), "Claims: 1800-258-5881"]
                                                    })
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "note",
                                                style: {
                                                    background: "#FFF7EC"
                                                },
                                                children: [(0, i.jsx)(t(), {
                                                    width: "12",
                                                    height: "18",
                                                    src: "https://static.pbcdn.in/car-cdn/car2.0/pointingFinger.svg",
                                                    alt: "pointer"
                                                }), (0, i.jsx)("div", {
                                                    className: "text",
                                                    children: (0, i.jsx)("p", {
                                                        className: "smallestFont",
                                                        style: {
                                                            color: "#C67300"
                                                        },
                                                        children: "For personalized service, use your registered number"
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        4162: function() {},
        4614: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Roboto_3a7915', '__Roboto_Fallback_3a7915'",
                    fontStyle: "normal"
                },
                className: "__className_3a7915"
            }
        }
    },
    function(e) {
        e.O(0, [352, 112, 971, 938, 744], function() {
            return e(e.s = 1153)
        }), _N_E = e.O()
    }
]);