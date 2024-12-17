(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [160], {
        4136: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 2850))
        },
        2850: function(e, s, t) {
            "use strict";
            t.r(s);
            var r = t(7437),
                i = t(2265),
                a = t(6691),
                c = t.n(a),
                n = t(7551),
                u = t(1231),
                d = t(4033);
            s.default = () => {
                let {
                    handleEventTrackingData: e
                } = (0, u.default)(), s = (0, d.useRouter)();
                return (0, i.useEffect)(() => {
                    e("404", window.location.href, "Redirect"), setTimeout(() => {
                        s.push("/")
                    }, 200)
                }, []), (0, r.jsx)("section", {
                    className: "prequotePage",
                    children: (0, r.jsx)("div", {
                        className: "prequoteWrap ",
                        children: (0, r.jsxs)("div", {
                            className: "carLoader text-center",
                            children: [(0, r.jsx)("div", {
                                className: "headingV2 fontMedium mb-8",
                                children: "Please wait !"
                            }), (0, r.jsx)("div", {
                                className: "carLoaderIcon",
                                children: (0, r.jsx)(c(), {
                                    priority: !0,
                                    src: n.UY,
                                    width: "200",
                                    height: "200",
                                    alt: "car"
                                })
                            })]
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [352, 112, 971, 938, 744], function() {
            return e(e.s = 4136)
        }), _N_E = e.O()
    }
]);