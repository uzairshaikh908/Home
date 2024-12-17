(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6547], {
        90413: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return Image
                }
            });
            let n = r(21024),
                i = r(68533),
                o = i._(r(2265)),
                a = n._(r(54887)),
                l = n._(r(35793)),
                u = r(7929),
                s = r(17727),
                d = r(47327);
            r(92637);
            let c = r(36304),
                f = n._(r(69950)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/corporate-insurance-v2/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function m(e, t, r, n, i, o) {
                let a = null == e ? void 0 : e.src;
                if (!e || e["data-loaded-src"] === a) return;
                e["data-loaded-src"] = a;
                let l = "decode" in e ? e.decode() : Promise.resolve();
                l.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                i = !1;
                            r.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(e)
                    }
                })
            }

            function g(e) {
                let [t, r] = o.version.split(".", 2), n = parseInt(t, 10), i = parseInt(r, 10);
                return n > 18 || 18 === n && i >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let h = (0, o.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: i,
                    height: a,
                    width: l,
                    decoding: u,
                    className: s,
                    style: d,
                    fetchPriority: c,
                    placeholder: f,
                    loading: p,
                    unoptimized: h,
                    fill: y,
                    onLoadRef: b,
                    onLoadingCompleteRef: v,
                    setBlurComplete: _,
                    setShowAltText: w,
                    onLoad: S,
                    onError: P,
                    ...C
                } = e;
                return o.default.createElement("img", { ...C,
                    ...g(c),
                    loading: p,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": y ? "fill" : "1",
                    className: s,
                    style: d,
                    sizes: i,
                    srcSet: n,
                    src: r,
                    ref: (0, o.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (P && (e.src = e.src), e.complete && m(e, f, b, v, _, h))
                    }, [r, f, b, v, _, P, h, t]),
                    onLoad: e => {
                        let t = e.currentTarget;
                        m(t, f, b, v, _, h)
                    },
                    onError: e => {
                        w(!0), "empty" !== f && _(!0), P && P(e)
                    }
                })
            });

            function y(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: r
                } = e, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...g(r.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(r.src, n), null) : o.default.createElement(l.default, null, o.default.createElement("link", {
                    key: "__nimg-" + r.src + r.srcSet + r.sizes,
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...n
                }))
            }
            let Image = (0, o.forwardRef)((e, t) => {
                let r = (0, o.useContext)(c.RouterContext),
                    n = (0, o.useContext)(d.ImageConfigContext),
                    i = (0, o.useMemo)(() => {
                        let e = p || n || s.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            r = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: r
                        }
                    }, [n]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = e,
                    m = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    m.current = a
                }, [a]);
                let g = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    g.current = l
                }, [l]);
                let [b, v] = (0, o.useState)(!1), [_, w] = (0, o.useState)(!1), {
                    props: S,
                    meta: P
                } = (0, u.getImgProps)(e, {
                    defaultLoader: f.default,
                    imgConf: i,
                    blurComplete: b,
                    showAltText: _
                });
                return o.default.createElement(o.default.Fragment, null, o.default.createElement(h, { ...S,
                    unoptimized: P.unoptimized,
                    placeholder: P.placeholder,
                    fill: P.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: v,
                    setShowAltText: w,
                    ref: t
                }), P.priority ? o.default.createElement(y, {
                    isAppRouter: !r,
                    imgAttributes: S
                }) : null)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        28569: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(21024),
                i = n._(r(2265)),
                o = i.default.createContext({})
        },
        94472: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1
                } = void 0 === e ? {} : e;
                return t || r && n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        7929: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return l
                }
            }), r(92637);
            let n = r(61511),
                i = r(17727);

            function o(e) {
                return void 0 !== e.default
            }

            function a(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function l(e, t) {
                var r;
                let l, u, s, {
                        src: d,
                        sizes: c,
                        unoptimized: f = !1,
                        priority: p = !1,
                        loading: m,
                        className: g,
                        quality: h,
                        width: y,
                        height: b,
                        fill: v = !1,
                        style: _,
                        onLoad: w,
                        onLoadingComplete: S,
                        placeholder: P = "empty",
                        blurDataURL: C,
                        fetchPriority: j,
                        layout: O,
                        objectFit: x,
                        objectPosition: E,
                        lazyBoundary: z,
                        lazyRoot: M,
                        ...I
                    } = e,
                    {
                        imgConf: k,
                        showAltText: A,
                        blurComplete: R,
                        defaultLoader: D
                    } = t,
                    U = k || i.imageConfigDefault;
                if ("allSizes" in U) l = U;
                else {
                    let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
                        t = U.deviceSizes.sort((e, t) => e - t);
                    l = { ...U,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                let L = I.loader || D;
                delete I.loader, delete I.srcSet;
                let N = "__next_img_default" in L;
                if (N) {
                    if ("custom" === l.loader) throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = L;
                    L = t => {
                        let {
                            config: r,
                            ...n
                        } = t;
                        return e(n)
                    }
                }
                if (O) {
                    "fill" === O && (v = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[O];
                    e && (_ = { ..._,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[O];
                    t && !c && (c = t)
                }
                let B = "",
                    F = a(y),
                    G = a(b);
                if ("object" == typeof(r = d) && (o(r) || void 0 !== r.src)) {
                    let e = o(d) ? d.default : d;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (u = e.blurWidth, s = e.blurHeight, C = C || e.blurDataURL, B = e.src, !v) {
                        if (F || G) {
                            if (F && !G) {
                                let t = F / e.width;
                                G = Math.round(e.height * t)
                            } else if (!F && G) {
                                let t = G / e.height;
                                F = Math.round(e.width * t)
                            }
                        } else F = e.width, G = e.height
                    }
                }
                let T = !p && ("lazy" === m || void 0 === m);
                (!(d = "string" == typeof d ? d : B) || d.startsWith("data:") || d.startsWith("blob:")) && (f = !0, T = !1), l.unoptimized && (f = !0), N && d.endsWith(".svg") && !l.dangerouslyAllowSVG && (f = !0), p && (j = "high");
                let W = a(h),
                    V = Object.assign(v ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: x,
                        objectPosition: E
                    } : {}, A ? {} : {
                        color: "transparent"
                    }, _),
                    H = R || "empty" === P ? null : "blur" === P ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: F,
                        heightInt: G,
                        blurWidth: u,
                        blurHeight: s,
                        blurDataURL: C || "",
                        objectFit: V.objectFit
                    }) + '")' : 'url("' + P + '")',
                    q = H ? {
                        backgroundSize: V.objectFit || "cover",
                        backgroundPosition: V.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: H
                    } : {},
                    $ = function(e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: n,
                            width: i,
                            quality: o,
                            sizes: a,
                            loader: l
                        } = e;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: s
                        } = function(e, t, r) {
                            let {
                                deviceSizes: n,
                                allSizes: i
                            } = e;
                            if (r) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: i.filter(t => t >= n[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: n,
                                kind: "w"
                            };
                            let o = [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))];
                            return {
                                widths: o,
                                kind: "x"
                            }
                        }(t, i, a), d = u.length - 1;
                        return {
                            sizes: a || "w" !== s ? a : "100vw",
                            srcSet: u.map((e, n) => l({
                                config: t,
                                src: r,
                                quality: o,
                                width: e
                            }) + " " + ("w" === s ? e : n + 1) + s).join(", "),
                            src: l({
                                config: t,
                                src: r,
                                quality: o,
                                width: u[d]
                            })
                        }
                    }({
                        config: l,
                        src: d,
                        unoptimized: f,
                        width: F,
                        quality: W,
                        sizes: c,
                        loader: L
                    }),
                    J = { ...I,
                        loading: T ? "lazy" : m,
                        fetchPriority: j,
                        width: F,
                        height: G,
                        decoding: "async",
                        className: g,
                        style: { ...V,
                            ...q
                        },
                        sizes: $.sizes,
                        srcSet: $.srcSet,
                        src: $.src
                    },
                    Y = {
                        unoptimized: f,
                        priority: p,
                        placeholder: P,
                        fill: v
                    };
                return {
                    props: J,
                    meta: Y
                }
            }
        },
        35793: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    defaultHead: function() {
                        return d
                    },
                    default: function() {
                        return m
                    }
                });
            let n = r(21024),
                i = r(68533),
                o = i._(r(2265)),
                a = n._(r(80110)),
                l = r(28569),
                u = r(61852),
                s = r(94472);

            function d(e) {
                void 0 === e && (e = !1);
                let t = [o.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function c(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            r(92637);
            let f = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                let {
                    inAmpMode: r
                } = t;
                return e.reduce(c, []).reverse().concat(d(r).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        r = new Set,
                        n = {};
                    return i => {
                        let o = !0,
                            a = !1;
                        if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                            a = !0;
                            let t = i.key.slice(i.key.indexOf("$") + 1);
                            e.has(t) ? o = !1 : e.add(t)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                t.has(i.type) ? o = !1 : t.add(i.type);
                                break;
                            case "meta":
                                for (let e = 0, t = f.length; e < t; e++) {
                                    let t = f[e];
                                    if (i.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) r.has(t) ? o = !1 : r.add(t);
                                        else {
                                            let e = i.props[t],
                                                r = n[t] || new Set;
                                            ("name" !== t || !a) && r.has(e) ? o = !1 : (r.add(e), n[t] = r)
                                        }
                                    }
                                }
                        }
                        return o
                    }
                }()).reverse().map((e, t) => {
                    let n = e.key || t;
                    if (!r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, o.default.cloneElement(e, t)
                    }
                    return o.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            let m = function(e) {
                let {
                    children: t
                } = e, r = (0, o.useContext)(l.AmpStateContext), n = (0, o.useContext)(u.HeadManagerContext);
                return o.default.createElement(a.default, {
                    reduceComponentsToState: p,
                    headManager: n,
                    inAmpMode: (0, s.isInAmpMode)(r)
                }, t)
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        61511: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: i,
                    blurDataURL: o,
                    objectFit: a
                } = e, l = n ? 40 * n : t, u = i ? 40 * i : r, s = l && u ? "viewBox='0 0 " + l + " " + u + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + s + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (s ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        47327: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(21024),
                i = n._(r(2265)),
                o = r(17727),
                a = i.default.createContext(o.imageConfigDefault)
        },
        17727: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return r
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        80679: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    unstable_getImgProps: function() {
                        return u
                    },
                    default: function() {
                        return s
                    }
                });
            let n = r(21024),
                i = r(7929),
                o = r(92637),
                a = r(90413),
                l = n._(r(69950)),
                u = e => {
                    (0, o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, i.getImgProps)(e, {
                        defaultLoader: l.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/corporate-insurance-v2/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                    return {
                        props: t
                    }
                },
                s = a.Image
        },
        69950: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    config: t,
                    src: r,
                    width: n,
                    quality: i
                } = e;
                return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        36304: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(21024),
                i = n._(r(2265)),
                o = i.default.createContext(null)
        },
        80110: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(2265),
                i = n.useLayoutEffect,
                o = n.useEffect;

            function a(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: r
                } = e;

                function a() {
                    if (t && t.mountedInstances) {
                        let i = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(r(i, e))
                    }
                }
                return i(() => {
                    var r;
                    return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                        var r;
                        null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                    }
                }), i(() => (t && (t._pendingUpdate = a), () => {
                    t && (t._pendingUpdate = a)
                })), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        92637: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = e => {}
        },
        16691: function(e, t, r) {
            e.exports = r(80679)
        },
        57042: function(e, t, r) {
            "use strict";
            t.Z = function() {
                for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = function e(t) {
                    var r, n, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var o = t.length;
                            for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n)
                        } else
                            for (n in t) t[n] && (i && (i += " "), i += n)
                    }
                    return i
                }(e)) && (n && (n += " "), n += t);
                return n
            }
        }
    }
]);