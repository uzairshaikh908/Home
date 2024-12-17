"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1895], {
        1895: function(e, a, r) {
            r.r(a);
            var s = r(57437),
                o = r(2265),
                i = r(7265),
                n = r.n(i),
                t = r(93006),
                l = r(93046),
                c = r(17222),
                d = r(2530);
            a.default = function() {
                let e = (0, l.I0)(),
                    [a, r] = (0, o.useState)(!1),
                    {
                        GAClickEvent: i
                    } = (0, t.Z)(),
                    u = (0, l.v9)(e => {
                        var a;
                        return null == e ? void 0 : null === (a = e.extras) || void 0 === a ? void 0 : a.focusDisclaimer
                    }),
                    [h, f, m] = (0, c.Z)();
                return (0, o.useEffect)(() => {
                    a && setTimeout(() => {
                        m("disclaimer", {
                            focus: !1,
                            block: "start"
                        })
                    }, 100)
                }, [a]), (0, o.useEffect)(() => {
                    u && (a ? setTimeout(() => {
                        m("disclaimer", {
                            focus: !1,
                            block: "start"
                        })
                    }, 100) : r(!0), e((0, d.gf)(!1)))
                }, [u]), (0, s.jsx)("footer", {
                    id: "disclaimer",
                    ref: f,
                    className: n().ghibg,
                    children: (0, s.jsx)("div", {
                        className: n().wrapper,
                        children: (0, s.jsxs)("div", {
                            className: n().footerSection,
                            children: [(0, s.jsxs)("div", {
                                onClick: () => {
                                    i("DisclaimerClicked", a ? "Closed" : "Open"), r(!a)
                                },
                                className: n().footerSectionTitle,
                                children: [(0, s.jsxs)("h2", {
                                    children: ["Disclaimers", (0, s.jsx)("sup", {
                                        children: (0, s.jsx)("small", {
                                            children: "+"
                                        })
                                    })]
                                }), (0, s.jsx)("label", {
                                    class: "".concat(n().legalFooterArrow, " ").concat(n().down)
                                })]
                            }), a && (0, s.jsxs)("div", {
                                className: n().disclaimerDescription,
                                children: [(0, s.jsxs)("p", {
                                    children: [(0, s.jsx)("sup", {
                                        children: (0, s.jsx)("small", {
                                            children: "+"
                                        })
                                    }), 'Premium of ₹110/Employee/Month for ₹1 Lac Sum Insured for 7 employees each that may vary depending on the age, risk location and coverage. Wellness Benefits are provided by the insurers as per the policy terms and conditions. For more details on risk factors, terms & conditions and definition of employee, please read sales literature carefully before concluding a sale. You also agree to provide us a formal mandate to represent you to the insurer and communicate to you the grant of a cover. STANDARD TERMS AND CONDITIONS APPLY. "Policybazaar for Business" is a brand under Policybazaar Insurance Brokers Private Limited | Policybazaar Insurance Brokers Private Limited, Registered Office - Plot No.119, Sector - 44, Gurgaon, Haryana - 122001 | CIN: U74999 HR2014PTC053454|Registration No. 742, Valid till 09/06/2027 | License category- Composite Broker']
                                }), (0, s.jsx)("p", {
                                    children: "The details of insurance coverage, inclusions and exclusions are subject to change as per solutions offered by insurance providers. The content has been curated based on the general practices in the industry. Policybazaar is not responsible for the factual correctness of these details"
                                }), (0, s.jsxs)("p", {
                                    children: [(0, s.jsx)("sup", {
                                        children: "++"
                                    }), "Savings of 65% are based on the comparison between the highest and lowest premiums provided by different insurance companies for Rs 5 lakh cover for 50 employees falling in the age group ranging between 19-55 years with room rent limits of 1% and 2% of sum insured for normal and ICU rooms respectively and does not include PED and maternity coverage", (0, s.jsx)("br", {}), (0, s.jsx)("a", {
                                        id: "legal-footer-contact-us",
                                        target: "_blank",
                                        rel: "noopener",
                                        href: "https://www.policybazaar.com/contact-us/",
                                        children: "Contact Us"
                                    }), "\xa0|\xa0", (0, s.jsx)("a", {
                                        id: "legal-footer-legal-and-admin",
                                        target: "_blank",
                                        rel: "noopener",
                                        href: "https://www.policybazaar.com/legal-and-admin-policies/",
                                        children: "Legal and Admin Policies"
                                    })]
                                }), (0, s.jsxs)("p", {
                                    children: ["~Source: Google Review Rating available on:-", (0, s.jsx)("a", {
                                        href: "http://bit.ly/3J20bXZ",
                                        target: "_blank",
                                        "data-v-7f2556c7": "",
                                        children: "http://bit.ly/3J20bXZ"
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        }
    }
]);