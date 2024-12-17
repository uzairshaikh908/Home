var dwidht = $(document).width(),
    dheight = $(document).height(),
    wwidht = $(window).width(),
    wheight = $(window).height(),
    chkMobile = !1,
    BASEURL = document.location.protocol + "//" + document.location.host + "/",
    CDN_IMG_BASEURL = "https://static.pbcdn.in/cdn/images/",
    evLabel = "NoGcid",
    objGAData = "",
    utmTerm = "",
    utmSource = "",
    utmMedium = "",
    utmCampaign = "",
    utmContent = "",
    visitId = "",
    userType = "",
    productId = "",
    LoggedCustId = "",
    myacctoken = "",
    nriCName = "india",
    policyData = "",
    response_country_code = "",
    response_mobile_no = "",
    visitcreationtime = 0,
    enquiryId = 0,
    mtrxLeadId = 0,
    SystemUserID = 0,
    isBanners = 0,
    uniqueid = 0;
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (chkMobile = !0);
var wWidth = $(window).width(),
    wHeight = $(window).height(),
    countryName = "";

function imgInit() {
    for (var t = document.getElementsByTagName("img"), o = 0; o < t.length; o++) t[o].getAttribute("data-src") && t[o].setAttribute("src", t[o].getAttribute("data-src"))
}

function ipadType() {
    var t = $(window).width(),
        o = $(window).height();
    return 768 == o && 1024 == t || 1024 == o && 768 == t ? "ipad" : 1024 == o && 1366 == t || 1366 == o && 1024 == t ? "ipad_pro" : void 0
}

function is_iPhone_or_iPod() {
    var t = null != navigator.userAgent.match(/iPad/i),
        o = {
            deviceType: ipadType(),
            isture: 1
        };
    return !!t && o
}

function scrollFunction() {
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? $(".pb-navbar-wrapper").addClass("shrink") : $(".pb-navbar-wrapper").removeClass("shrink")
}

function toggleNavbar() {
    $(document).innerWidth() <= 1024 && $(document).on("click", ".btn-toggle, .pb-overlay, .btn-close", (function(t) {
        t.preventDefault(), $(".pb-nav").toggleClass("open"), $(".pb-overlay").toggleClass("open")
    }))
}

function menuopenpage(t, o, e, n) {
    var a = visitId;
    dataLayer.push({
        event: "eventTracking",
        eventCategory: o,
        eventAction: e,
        eventLabel: a,
        noninteraction: n
    }), setTimeout((function() {
        window.location = t
    }), 1e3)
}

function calculateHistoricalReturn(t, o, e, n, a) {
    var r = calculateHistoricalReturn_regular(t, o, e, a);
    if (n > e) {
        var c = getCompoundValueForExceedingYears(r, n - e, o);
        return c = Math.round(c)
    }
    return r
}

function calculateHistoricalReturn_regular(t, o, e, n) {
    if (null !== o) {
        var a = (100 + o) / 100,
            r = 1 - Math.pow(a, e),
            c = 1 - a,
            i = Math.round(t * r / c);
        return Math.round(i + i * o / 100)
    }
    return 0
}

function getCompoundValueForExceedingYears(t, o, e) {
    var n = Number(e) / 100,
        a = Math.pow(1 + n, o);
    return Number(t) * a
}

function convert_number2(t) {
    if (null == t || isNaN(t)) return 0;
    t = t.toString().replace(/,/g, "");
    var o = Math.round(t).toString(),
        e = o.length,
        n = "",
        a = "";
    return e < 4 ? n = o : 4 == e || 5 == e ? (n = o / 1e3, a = "K") : 6 == e || 7 == e ? (n = o / 1e5, a = "L") : (8 == e || e >= 9) && (n = o / 1e7, a = "Cr"), (n = parseInt(n) > 9 ? Math.round(10 * n) / 10 : Math.round(100 * n) / 100) + " " + a
}

function getPlanFundData() {
    try {
        if (postData = '{"task":"topplanfund"}', "india" == nriCName) var t = 5e3,
            o = "5 k";
        else t = 1e4, o = "10 k";
        $.ajax({
            url: BASEURL + "services/getulipservices.php",
            type: "POST",
            data: postData,
            success: function(e) {
                var n = e;
                if (PType = 12, t *= PType, "" !== n || null != n || NaN != n) {
                    var a = calculateHistoricalReturn(t, n -= 1.6, 20, 20, 1);
                    $(".invfundData").html("Invest <span>&#8377;</span> " + o + " per<br/> month & get <br/><span>&#8377; " + convert_number2(a) + "</span> in return<sup>#</sup>")
                }
            },
            error: function(t, o) {
                console.log(t + ":" + o)
            }
        })
    } catch (t) {
        console.log(t)
    }
}

function getCustomerInfo(t) {
    try {
        var o = t,
            e = getCookie("UID"),
            n = getCookie("cdprecent");
        if (null !== o && "" != o || null !== e && "" != e) {
            Url = BASEURL + "services/commonservice.php";
            $.ajax({
                beforeSend: function(t) {},
                url: Url,
                type: "POST",
                cache: !1,
                data: {
                    task: "getcdp"
                },
                success: function(t) {
                    if (null !== t && "" != t)
                        if (117 == (t = JSON.parse(t)).ProductID && null != t.Make && null != t.Model && null != t.RegistrationNo || 7 == t.ProductID || 115 == t.ProductID && !isNaN(parseInt(t.Premium)) && (null != t.lead_Age || "null" != t.lead_Age))
                            if (t.StageID && t.ProductID && (null == n || n != t.ProductID)) {
                                $(".top-pic").removeClass("open"), wWidth >= 1024 || "ipad_pro" == ipadType() ? ($(".slideshow-container-wrapper").delay(110).fadeOut(400), $(".card-view").delay(110).fadeIn(400), $(".card-view").addClass("slideDown"), $(".prd-container").addClass("slideDown"), 1024 == wWidth && "ipad" == ipadType() && $(".ext-head,.ext-banner-mobile").hide()) : chkMobile ? ($(".txt-part").delay(600).fadeOut(600), $(".slideshow-container-wrapper").delay(110).fadeOut(400), $(".card-view").delay(1200).fadeIn(400), slideProductBox()) : ($(".slideshow-container-wrapper").delay(110).fadeOut(400), $(".card-view").delay(110).fadeIn(400));
                                var o = "",
                                    e = "";
                                115 == t.ProductID || null == t.SumInsured && "" == t.SumInsured && "" == t.SumInsured || (o = '<div class="left-col wide"><p class="head">Sum Insured</p><p class="sub-head">&#x20B9; ' + (e = (e = parseInt(t.SumInsured)).toLocaleString("en-IN")) + "</p></div>");
                                var a = "";
                                if (115 == t.ProductID && (null != t.Premium || "" != t.Premium || "" != t.Premium || null != t.Premium || "null" != t.Premium)) {
                                    e = parseInt(t.Premium);
                                    var r = t.IsImmediatePension,
                                        c = t.IsDeferredAnnuity;
                                    a = isNaN(e) && 0 == e || !(5 == t.InvestmentTypeId || null != r && 1 == r || null != c && 1 == c) ? '<p class="head">Investment Amount</p><p class="sub-head">&#x20B9; ' + (e = (e = Math.ceil(e / 12)).toLocaleString("en-IN")) + " /month</p>" : '<p class="head">Investment Amount</p><p class="sub-head">&#x20B9; ' + (e = e.toLocaleString("en-IN")) + " </p>"
                                }
                                if (115 == t.ProductID) {
                                    var i = t.PlanType;
                                    "Investment/Growth" != i && "null" != i && null != i || (i = "Investment Plans"), "Retirement Fund" == i && (i = "Retirement Plans"), "Child Education" == i && (i = "Child Plans"), "Tax Saving" == i && (i = "Tax Saving Plans")
                                }
                                var s = "";
                                null != t.SupplierName && (s = getInsurerLogoClass(t.SupplierName, t.ProductID));
                                var d = "Dear User";
                                null != t.Name && (d = t.Name);
                                var u = "",
                                    l = 1 == t.StageID ? "wide" : "ext-short";
                                null != t.lead_Age ? u = '<div class="right-col ' + l + '"><p class="head">Age</p><p class="sub-head">' + t.lead_Age + " Years</p></div>" : null != t.Age && (u = '<div class="right-col ' + l + '"><p class="head">Age</p><p class="sub-head">' + t.Age + " Years</p></div>");
                                var p = "";
                                null != t.lead_City ? p = '<div class="right-col wide"><p class="head">City</p><p class="sub-head">' + t.lead_City + "</p></div>" : null != t.City && (p = '<div class="right-col wide"><p class="head">City</p><p class="sub-head">' + t.City + "</p></div>");
                                var m = "";
                                if (null != t.Premium && t.Premium > 0) {
                                    var y = parseInt(t.Premium);
                                    m = '<div class="right-col ext-short"><p class="head">Premium</p><p class="sub-head">&#x20B9; ' + (y = y.toLocaleString("en-IN")) + "</p></div>"
                                }
                                2 == t.ProductID && 1 == t.StageID && $(".card-view").html('<p class="heading">Continue your search for a <span>' + t.Product + ' Insurance</span> plan</p><div class="top-row"><div class="left-col wide"><p class="head">Members</p><p class="sub-head">' + t.Members + "</p></div>" + p + '</div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + t.Product + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '" data-stage="' + t.StageID + '" data-product="' + t.Product + '" class="view-plan">View all plans</a></div>'), 2 == t.ProductID && 2 == t.StageID && $(".card-view").html('<p class="heading">Your <span>' + t.Product + ' Insurance plan</span> is almost ready</p><div class="top-row"><div class="left-col short"><i class="' + s + '"></i></div><div class="left-col short"><p class="head">Members</p><p class="sub-head">' + t.Members + "</p></div>" + m + '</div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + t.Product + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '" data-stage="' + t.StageID + '" data-product="' + t.Product + '" class="view-plan">Continue with this Plan</a></div>'), 2 == t.ProductID && 3 == t.StageID && $(".card-view").html('<p class="heading">' + d + ", you were about to pay for your <span>" + t.Product + ' Insurance plan</span></p><div class="top-row"><div class="left-col short"><i class="' + s + '"></i></div><div class="left-col short"><p class="head">Members</p><p class="sub-head">' + t.Members + "</p></div>" + m + '</div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + t.Product + '" class="remind">Dismiss</a><a data-stage="' + t.StageID + '" data-product="' + t.Product + '" href="' + t.continueJourneyURL + '" class="view-plan">Proceed to Payment</a></div>'), 7 == t.ProductID && 1 == t.StageID && $(".card-view").html('<p class="heading">Continue your search for a <span>' + t.Product + ' Insurance</span> plan</p><div class="top-row">' + o + u + '</div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + t.Product + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '" data-stage="' + t.StageID + '" data-product="' + t.Product + '" class="view-plan">View all plans</a></div>'), 7 == t.ProductID && 2 == t.StageID && $(".card-view").html('<p class="heading">You left your <span>' + t.Product + ' Insurance</span> search mid way</p><div class="top-row"><div class="left-col short"><i class="' + s + '"></i></div><div class="left-col short"><p class="head">Sum Insured</p><p class="sub-head">&#x20B9; ' + e + "</p></div>" + u + '</div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + t.Product + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '" data-stage="' + t.StageID + '" data-product="' + t.Product + '" class="view-plan">View All Plans</a></div>'), 7 == t.ProductID && 3 == t.StageID && $(".card-view").html('<p class="heading">' + d + ", you were about to pay for your <span>" + t.Product + ' Insurance plan</span></p><div class="top-row"><div class="left-col short"><i class="' + s + '"></i></div><div class="left-col short"><p class="head">Sum Insured</p><p class="sub-head">&#x20B9; ' + e + "</p></div>" + u + '</div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + t.Product + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '" data-stage="' + t.StageID + '" data-product="' + t.Product + '" class="view-plan">View All Plans</a></div>'), 115 == t.ProductID && 1 == t.StageID && $(".card-view").html('<p class="heading">Continue your search for <b>' + i + '</b></p><div class="top-row"><div class="left-col wide">' + a + '</div><div class="right-col wide"><p class="head">Age</p><p class="sub-head">' + t.lead_Age + ' Years</p></div></div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + i + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '" data-stage="' + t.StageID + '" data-product="' + i + '" class="view-plan">View All Plans</a></div>'), 115 == t.ProductID && 2 == t.StageID && $(".card-view").html('<p class="heading">You left your <span><b>' + i + '</b> </span> search mid way</p><div class="top-row"><div class="left-col short"><i class="' + s + '"></i></div><div class="left-col wide">' + a + '</div><div class="right-col ext-short"><p class="head">Age</p><p class="sub-head">' + t.lead_Age + ' Years</p></div></div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + i + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '" data-stage="' + t.StageID + '" data-product="' + i + '" class="view-plan">View All Plans</a></div>'), 115 == t.ProductID && 3 == t.StageID && $(".card-view").html('<p class="heading">' + d + ", you were about to pay for your <span>" + i + '</span></p><div class="top-row"><div class="left-col short"><i class="' + s + '"></i></div><div class="left-col">' + a + '</div><div class="right-col ext-short"><p class="head">Age</p><p class="sub-head">' + t.lead_Age + ' Years</p></div></div><div class="btn-row"><a href="javascript:void(0)" data-stage="' + t.StageID + '" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + i + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '" data-stage="' + t.StageID + '" data-product="' + i + '" class="view-plan">View All Plans</a></div>'), 117 == t.ProductID && 1 == t.StageID && $(".card-view").html('<p class="heading">Continue your search for a <span>Car Insurance</span> plan</p><div class="top-row"><div class="left-col wide"><p class="head">Vehicle</p><p class="sub-head">' + t.Make + " " + t.Model + '</p></div><div class="right-col wide"><p class="head">Registration No.</p><p class="sub-head">' + t.RegistrationNo + '</p></div></div><div class="btn-row"><a href="javascript:void(0)" data-stage="1" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + t.Product + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '&AgentId=MA==" data-stage="1" data-product="' + t.Product + '" class="view-plan">View All Plans</a></div>'), 117 == t.ProductID && 2 == t.StageID && $(".card-view").html('<p class="heading">Your <span>Car Insurance plan</span> is almost ready</p><div class="top-row"><div class="left-col short"><i class="' + s + '"></i></div><div class="left-col short"><p class="head">Vehicle</p><p class="sub-head">' + t.Make + " " + t.Model + '</p></div><div class="right-col ext-short"><p class="head">Reg. No.</p><p class="sub-head">' + t.RegistrationNo + '</p></div></div><div class="btn-row"><a href="javascript:void(0)" data-stage="2" data-productid="' + t.ProductID + '" data-createdon="' + t.CreatedON + '" data-product="' + t.Product + '" class="remind">Dismiss</a><a href="' + t.continueJourneyURL + '&AgentId=MA==" data-stage="2" data-product="' + t.Product + '" class="view-plan">Continue with this Plan</a></div>'), 115 == t.ProductID ? GA360EventPage("Personalization", i, "Stage " + t.StageID + " view") : GA360EventPage("Personalization", t.Product, "Stage " + t.StageID + " view"), $(".card-view").removeClass("hide")
                            } else $(".top-pic").addClass("open"), $(".dotsLoader").addClass("hide"), $(".card-view").addClass("hide"), $(".card-view").html("").removeClass("show"), 1024 != wWidth || "ipad_pro" != ipadType() && "ipad" != ipadType() || !$(".top-fold").hasClass("nri") ? wWidth > 1024 && ("ipad_pro" == ipadType() || "ipad" == ipadType()) && $(".top-fold").hasClass("nri") || chkMobile && (wWidth >= 1024 || "ipad_pro" == ipadType() || ($(".txt-part").hide(), $(".top-fold.nri article:nth-child(2)").removeClass("hide"), slideRemoveProductBox(), $(".dotsLoader").addClass("hide"), $(".ext-head,.ext-banner-mobile").delay(300).fadeIn(300))) : $(".ext-head,.ext-banner-mobile").show();
                    else $(".top-pic").addClass("open"), $(".dotsLoader").addClass("hide"), $(".slideshow-container-wrapper").delay(1200).fadeIn(400), $(".card-view").delay(1200).fadeOut(400), wWidth >= 1024 || "ipad_pro" == ipadType() ? $(".ext-head").delay(300).fadeOut(300) : (chkMobile && !$(".top-fold").hasClass("nri") && $(".txt-part").delay(600).fadeOut(600), chkMobile && $(".top-fold").hasClass("nri") && (slideRemoveProductBox(), $(".dotsLoader").addClass("hide"), $(".ext-head,.ext-banner-mobile").delay(300).fadeIn(300)), 1 != getCookie("MobileBanner") ? $(".ext-head,.ext-banner-mobile").show() : ($(".txt-part").removeClass("mobilehide"), $(".txt-part").delay(300).fadeIn(300)));
                    else 1024 != wWidth && "ipad" != ipadType() || !$(".top-fold").hasClass("nri") ? ($(".slideshow-container-wrapper").delay(1200).fadeIn(400), $(".card-view").delay(1200).fadeOut(400), slideRemoveProductBox(), wWidth >= 1024 || "ipad_pro" == ipadType() ? $(".ext-head").delay(300).fadeOut(300) : (chkMobile && $(".txt-part").delay(600).fadeOut(600), $(".top-fold").hasClass("nri") || $(".ext-head").delay(300).fadeIn(300))) : $(".ext-head").delay(300).fadeIn(300)
                }
            })
        } else $(".top-fold").hasClass("nri") || ($(".slideshow-container-wrapper").delay(1200).fadeIn(400), $(".card-view").delay(1200).fadeOut(400), slideRemoveProductBox(), wWidth >= 1024 || "ipad_pro" == ipadType() ? $(".ext-head").delay(300).fadeOut(300) : (chkMobile && $(".txt-part").delay(600).fadeOut(600), $(".ext-head").delay(300).fadeIn(300)))
    } catch (t) {}
}
$(window).scroll((function(t) {
    var o = $(window).scrollTop();
    $(".landingSlide").offset(), $(".investor,.group-companies").offset().top;
    wWidth > 860 && null == is_iPhone_or_iPod().isture && (o > "70" ? madeEasyShowHide(1) : o <= "300" && (madeEasyShowHide(2), $(".insuranceMadeEasy").removeClass("remove"))), o < 1e3 ? $("#return-to-top").hide() : $("#return-to-top").show()
})), madeEasyShowHide = function(t) {
    1 == t && setTimeout((function() {
        $(".madeEasy").addClass("animated fadeInUp"), setTimeout((function() {}), 1e3)
    }))
}, window.onscroll = function() {
    scrollFunction()
}, toggleNavbar();
var elementNumber, popuupVideo_info = [{
    popupbanner_img: "saral-jeevan-bima.png",
    bottombanner_img: "sjb_banner.png?v=1",
    videokey: "TfhLxkAfuQU",
    bannertext: "Saral Jeevan Bima",
    url: "https://termprequotes.policybazaar.com/sjb?isSJB=true&utm_content=home_v10_sjb",
    datalabel: "buy-saral-jeevan-bima-online"
}, {
    popupbanner_img: "health-insurance-onecr.png",
    bottombanner_img: "onecr_banner.png?v=1",
    videokey: "HwgvovNoEOc",
    bannertext: "&#8377;1 Crore Health Insurance",
    url: "https://health.policybazaar.com/?offerid=26&crsi=true&utm_content=home_v10",
    datalabel: "be-ready-for-any-hospital-bill"
}];

function getRandomBanner() {
    $(".videoItem .videobanner").removeClass("show");
    var t;
    t = Math.floor(6 * Math.random()), elementNumber = t < 3 ? 1 : 2;
    var o = "",
        e = "";
    $.each(popuupVideo_info, (function(t, n) {
        o += '<div class="video_item" data-label="' + popuupVideo_info[t].datalabel + '"><img src="' + BASEURL + "cdn/images/home/" + popuupVideo_info[t].popupbanner_img + '" data-url="' + popuupVideo_info[t].videokey + '" data-id="' + t + '"><div class="video_name">' + popuupVideo_info[t].bannertext + "</div></div>", e += '<div class="videobanner" data-label="' + popuupVideo_info[t].datalabel + '"><img src="' + BASEURL + "cdn/images/home/" + popuupVideo_info[t].bottombanner_img + '" data-url="' + popuupVideo_info[t].videokey + '" data-id="' + t + '"></div>'
    })), $(".small_thumb_video .videoContent").html(o), $(".videoItem .videoBannerThumb").html(e), $(".more_video_link").html('<a href="' + popuupVideo_info[1].url + '" data-label="' + popuupVideo_info[1].datalabel + '">Buy ' + popuupVideo_info[1].bannertext + "</a>"), $(".videoItem .videobanner:nth-child(" + elementNumber + ")").addClass("show")
}
var topPos = 0;
const el = (t, o) => (o || document).querySelector(t),
    els = (t, o) => (o || document).querySelectorAll(t),
    elNew = (t, o) => Object.assign(document.createElement(t), o),
    mod = (t, o) => (t % o + o) % o,
    carousel = t => {
        const o = el(".carousel-slider", t),
            e = els(".carousel-slide", o),
            n = [];
        let a, r = e.length,
            c = 0;
        if (r < 2) return;
        const i = (t = 500) => {
                const a = mod(c, r);
                o.style.transitionDuration = `${t}ms`, o.style.transform = `translateX(${100*(-c-1)}%)`, e.forEach(((t, o) => t.classList.toggle("is-active", a === o))), n.forEach(((t, o) => t.classList.toggle("is-active", a === o)))
            },
            s = () => {
                c >= r || (c += 1, i())
            },
            d = () => {
                a = setInterval(s, 5500)
            },
            u = elNew("button", {
                type: "button",
                className: "carousel-prev",
                innerHTML: "<span>Prev</span>",
                onclick: () => {
                    c <= -1 || (c -= 1, i())
                }
            }),
            l = elNew("button", {
                type: "button",
                className: "carousel-next",
                innerHTML: "<span>Next</span>",
                onclick: () => s()
            }),
            p = elNew("div", {
                className: "carousel-navigation"
            });
        for (let t = 0; t < r; t++) {
            const o = elNew("button", {
                type: "button",
                className: "carousel-bullet",
                onclick: () => (c = t, void i())
            });
            n.push(o)
        }
        o.addEventListener("transitionend", (() => {
            c <= -1 && (c = r - 1), c >= r && (c = 0), i(0)
        })), t.addEventListener("pointerenter", (() => {
            clearInterval(a)
        })), t.addEventListener("pointerleave", (() => d())), p.append(...n), t.append(u, l, p), o.prepend(e[r - 1].cloneNode(!0)), o.append(e[0].cloneNode(!0)), i(0), d()
    };

function setInvCountryCode() {
    $(".getHelpMobNo").val(""), $(".cCode").html("+" + $("option:selected", this).attr("data-country-code")), $(".getHelpMobNo").attr("maxlength", $("option:selected", this).attr("data-max")), $(".getHelpMobNo").attr("minlength", $("option:selected", this).attr("data-min"))
}

function validmobile(t) {
    return /^[6789]\d{9}$/.test(t)
}

function addError(t, o) {
    var e = t.parents(".formInput");
    return t.addClass("error"), e.addClass("error"), $(".err").html(o), !1
}

function clearError(t) {
    var o = t.parents(".formInput");
    t.removeClass("error"), o.removeClass("error"), $(".err").html("")
}

function checkOnlyNumber(t) {
    return /^[0-9]*$/.test(t)
}

function onlyNumber(t) {
    return /^[0-9]*$/.test(t)
}

function clearLocalStorage(t, o) {
    var e = 0;
    ! function n() {
        var a = document.createElement("iframe");

        function r() {
            a.remove(), e >= t.length - 1 ? o() : (e++, n())
        }
        a.style.display = "none", a.sandbox = "allow-scripts allow-same-origin", a.src = t[e] + "/clearLocalStorage", document.body.appendChild(a), a.onload = r, a.onerror = r
    }()
}

function redirectToMyAcc(t) {
    getEncMob(t)
}

function redirectToDashboard(t) {
    var o = "https://myaccount.policybazaar.com/MyAccount/Login?redirection=" + t;
    o += uniqueid ? "?utm_medium=hp_signed_in_ma_btn" : "?utm_medium=hp_ma_btn", window.open(o, "_blank").location
}

function redirectToSupportDashboard(t) {
    var o = "https://myaccount.policybazaar.com/MyAccount/Login?redirection=" + t;
    o += uniqueid ? "?utm_medium=hp_signedin_support_drop_down_dashboard" : "?utm_medium=hp_support_drop_down_dashboard", window.open(o, "_blank").location
}

function centralLoginOnSuccess() {
    var t = getCookie("pbcentrallogin");
    "undefined" != t && "" != t && (topNavLoginGa("loggedin"), getMyAccData(t))
}

function getMyAccData(t) {
    try {
        var o = {
            task: "getpbcentraldata",
            cData: t
        };
        $.ajax({
            url: BASEURL + "services/commonservice.php",
            type: "POST",
            cache: !1,
            data: o,
            beforeSend: function() {},
            success: function(t) {
                if ("" != t) {
                    t = JSON.parse(t);
                    var o = $.trim(t.CustName);
                    if (LoggedCustId = $.trim(t.CustId), "" != o) {
                        if ("" == (e = t.CustNameInitials)) var e = o.match(/\b(\w)/g).join("");
                        $(".mobsignin").text(e.toUpperCase())
                    } else chkMobile && $(".signed").text("Hi"), $(".mobsignin").text("Hi");
                    $(".signin-dropdown").removeClass("hide"), $(".moblogout").removeClass("hide"), $(".mobile-sign").removeClass("hide"), $(".signin-link").addClass("hide"), $(".mobile-sign.signin-dropdown").addClass("loggedin"), $(".menu-list .box").addClass("loggedin"), $(".mobile-sign.signin-link").addClass("loggedin"), $(".ruby-wrapper").addClass("signin"), $(".redirectDashboard").removeAttr("target"), $(".redirectDashboard").attr("href", "javascript:void(0)"), $(".redirectDashboard").attr("onclick", "topNavLoginGa('Dashboard');redirectToSupportDashboard('/dashboard');"), $(".redirectPolicy").attr("href", "javascript:void(0)"), $(".redirectPolicy").attr("onclick", "topNavLoginGa('Your Policies');redirectToMyAcc('/policies/all');"), $(".mcpUrl").attr("onclick", "topNavLoginGa('Manage communication preference');redirectToMyAcc('/settings');"), $(".redirectPolicy").removeAttr("target"), $(".redirectPolicy .small-text").html("View all my policies"), $(".ico-2 .small-text").html("Access all of policies"), $(".verify-advisor-add").html("Verify my advisor"), $(".nearme-add").html("Stores near me"), $(".redirectTicket").attr("href", "javascript:void(0)"), $(".redirectTicket").attr("onclick", "topNavLoginGa('Raise a query');redirectToMyAcc('/tickets');"), divClass = "", claimproductval = $(".gethelp_pid").val(), $("body").removeClass("stopscroll"), $(".gethelp_pid").attr("data-linkfor") && claimRedirect(divClass), getCustomerTokenAndPolicy()
                }
            }
        })
    } catch (t) {
        console.log(t.message)
    }
}

function claimRedirect(t) {
    var o = $(".gethelp_pid").val(),
        e = $(".gethelp_pid").attr("data-linkfor");
    if ("" == t && "" == e) var n = 0;
    else if (n = 1, "" == t || "" != e && null != e) {
        if ("" == t && "" != e) a = e;
        else if ("" != t && "" != e) {
            a = t;
            o = "all"
        }
    } else {
        var a = t;
        o = "all"
    }
    if (n) {
        if (a.includes("new")) {
            redirectUrl = "/claimSupports/" + o + "/1";
            var r = "https://myaccount.policybazaar.com/MyAccount/Login?redirection=" + redirectUrl;
            window.open(r, "_blank")
        } else if (a.includes("already")) {
            redirectUrl = "/claimSupports/" + o + "/2";
            r = "https://myaccount.policybazaar.com/MyAccount/Login?redirection=" + redirectUrl;
            window.open(r, "_blank")
        } else if (a.includes("track")) {
            redirectUrl = "/claimSupports/" + o;
            r = "https://myaccount.policybazaar.com/MyAccount/Login?redirection=" + redirectUrl;
            window.open(r, "_blank")
        }
        return !0
    }
}

function getCustomerTokenAndPolicy() {
    try {
        $.ajax({
            url: "https://myaccount.policybazaar.com/myacc/login/getLoginCookie",
            type: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-client-source": "PBHOME"
            },
            xhrFields: {
                withCredentials: !0
            },
            success: function(t) {
                t.statusMsg && "success" == t.statusMsg && void 0 !== t.data && (myacctoken = t.data.Token, mobileno = t.data.MobileNo, uniqueid = t.data.UniqueID, CustomerName = t.data.Name, callMyaccServices(myacctoken, CustomerName, mobileno, uniqueid), topNavLoginGa("Alredy Logged in"), updateProductURL())
            }
        })
    } catch (t) {
        console.log(t.message)
    }
}

function updateProductURL() {
    var t = {
        "utm_content=new_cj": "utm_content=hp_signed_term_insurance",
        "utm_content=home_v10": "utm_content=hp_signed_term_insurance",
        "utm_content=home_v11_women": "utm_content=hp_signed_term_insurance_for_women",
        "utm_content=homespousenew_v10": "utm_content=hp_signed_term_insurance_for_spouse",
        "utm_content=home_v11_zerocost": "utm_content=hp_signed_term_insurance_for_zerocost",
        "utm_content=home_v11_diabetic": "utm_content=hp_signed_term_insurance_for_diabetic",
        "utm_content=lic_18thjan2024": "utm_content=hp_signed_term_insurance_for_lic_18thjan2024",
        "utm_content=health_icon_hp_health_insurance_dom": "utm_content=hp_signed_health_insurance_dom",
        "utm_content=health_icon_hp_health_dom": "utm_content=hp_signed_health_icon_dom",
        "utm_content=health_icon_hp_health_nri": "utm_content=hp_signed_health_icon_nri",
        "utm_content=health_icon_hp_family_insurance_dom": "utm_content=hp_signed_family_insurance_dom",
        "utm_content=health_icon_hp_family_insurance_nri": "utm_content=hp_signed_family_insurance_nri",
        "utm_content=health_icon_pg_1cr_health_dom": "utm_content=hp_signed_health_icon_pg_1cr_health_dom",
        "utm_content=health_icon_pg_1cr_health_nri": "utm_content=hp_signed_health_icon_pg_1cr_health_nri",
        "utm_content=health_icon_pg_arogyasanjeevni_dom": "utm_content=hp_signed_health_icon_pg_arogyasanjeevni_dom",
        "utm_content=health_icon_pg_arogyasanjeevni_nri": "utm_content=hp_signed_health_icon_pg_arogyasanjeevni_nri",
        "utm_content=health_icon_pg_family_insurance_dom": "utm_content=hp_signed_health_icon_pg_family_insurance_dom",
        "utm_content=health_icon_pg_family_insurance_nri": "utm_content=hp_signed_health_icon_pg_family_insurance_nri"
    };
    $.each($(".prd-row .prd-block a,.left-block ul li a"), (function(o, e) {
        if ("undefined" != $(this).attr("data-productname")) {
            var n = $(this).attr("onclick");
            n = n.replace(/utm_content=lic_18thjan2024|utm_content=home_v11_diabetic|utm_content=new_cj|utm_content=home_v10|utm_content=home_v11_women|utm_content=homespousenew_v10|utm_content=home_v11_zerocost|utm_content=health_icon_hp_health_dom|utm_content=health_icon_hp_health_nri|utm_content=health_icon_hp_health_insurance_dom|utm_content=health_icon_hp_family_insurance_dom|utm_content=health_icon_hp_family_insurance_nri|utm_content=health_icon_pg_family_insurance_nri|utm_content=health_icon_pg_family_insurance_dom|utm_content=health_icon_pg_arogyasanjeevni_nri|utm_content=health_icon_pg_arogyasanjeevni_dom|utm_content=health_icon_pg_1cr_health_nri|utm_content=health_icon_pg_1cr_health_dom/gi, (function(o) {
                return t[o]
            }));
            var a = $(this).attr("oncontextmenu");
            a = a.replace(/utm_content=lic_18thjan2024|utm_content=home_v11_diabetic|utm_content=new_cj|utm_content=home_v10|utm_content=home_v11_women|utm_content=homespousenew_v10|utm_content=home_v11_zerocost|utm_content=health_icon_hp_health_dom|utm_content=health_icon_hp_health_nri|utm_content=health_icon_hp_health_insurance_dom|utm_content=health_icon_hp_family_insurance_dom|utm_content=health_icon_hp_family_insurance_nri|utm_content=health_icon_pg_family_insurance_nri|utm_content=health_icon_pg_family_insurance_dom|utm_content=health_icon_pg_arogyasanjeevni_nri|utm_content=health_icon_pg_arogyasanjeevni_dom|utm_content=health_icon_pg_1cr_health_nri|utm_content=health_icon_pg_1cr_health_dom/gi, (function(o) {
                return t[o]
            })), $(this).attr("onclick", n), $(this).attr("oncontextmenu", a)
        }
    }))
}

function callMyaccServices(t, o, e, n) {
    getHomePageBanners(t, o, e, n)
}

function getRenewalUrl(t, o, e, n) {
    var a = {
        task: "getrenewalurl",
        token: myacctoken,
        pid: t,
        insid: o,
        continueid: e,
        bookingid: n
    };
    $.ajax({
        url: BASEURL + "services/commonservice.php",
        type: "POST",
        cache: !1,
        data: a,
        beforeSend: function() {},
        success: function(t) {
            if ((t = JSON.parse(t)).isSuccess && "success" == t.statusMsg && void 0 !== t.redirectionUrl) {
                var o = t.redirectionUrl;
                window.open(o).location
            }
        }
    })
}

function getOpenTicketAndPolicy(t) {
    $.ajax({
        url: BASEURL + "services/commonservice.php",
        type: "POST",
        cache: !1,
        data: {
            task: "getcustomerticket"
        },
        beforeSend: function() {},
        success: function(t) {
            var o = "";
            if ("" != (t = JSON.parse(t)) && (ticketData = t.Data, "undefined" != typeof ticketData)) {
                var e = ticketData,
                    n = e.LeadId;
                n = window.btoa(n), TicketId = window.btoa(e.TicketId);
                var a = "";
                chkMobile && (a = "mobile-view");
                var r = "";
                e.PromiseTime > 0 && (r = '<span class="dton"><p>Expected on</p><strong>' + dateConvert(e.PromiseTime) + "</strong></span>"), o += '<div class="policy-info ' + a + '"><p class="small-heading">Ticket status</p><div class="policy-info-wrap"><div class="policy-detail"><span class="policy-name">' + e.IssueName + " (" + e.SubIssueName + ')</span><div class="policydetails"><span><p>Product</p><strong>' + e.ProductName + '</strong></span><span  class="dton"><p>Created on</p><strong>' + dateConvert(e.CreatedOn) + "</strong></span>" + r + '</div><div class="ticketstatus">' + e.Status + " - " + e.SubStatusName + '</div><div class="policy-action"><a class="track-click-event" data-category="Top Navigation" data-action="Support" data-title="Detail ticket" target="_new"  href="https://myaccount.policybazaar.com/MyAccount/Login?redirection=/tickets/ticketsDetails?ticketId=' + TicketId + '">View details</a></div></div></div></div>'
            }
            if ("" != o) {
                $(".policy-update").html(o).removeClass("hide");
                var c = "logged out";
                uniqueid && (c = "logged in");
                try {
                    dataLayer.push({
                        event: "eventTracking",
                        eventCategory: "Top Navigation",
                        eventAction: "Support",
                        eventLabel: "Latest Ticket Visible",
                        customerId: uniqueid,
                        loginStatus: c
                    })
                } catch (t) {}
                return !0
            }
            getMyPolicy()
        }
    })
}

function getMyPolicy() {
    var t = "";
    if (void 0 !== policyData && "" != policyData) {
        var o = policyData,
            e = o.LeadId,
            n = '<a target="_new" class="track-click-event" data-category="Top Navigation" data-action="Support" data-title="Track policy" href="https://myaccount.policybazaar.com/MyAccount/Login?redirection=/policyDetail/' + (e = window.btoa(e)) + '">Track Policy</a>';
        "" != o.DocumentUrl && (n = ""), gethelpurl = "https://myaccount.policybazaar.com/Login/Admin?k=query&m=" + encodeURIComponent(o.encMobileNo) + "&l=" + encodeURIComponent(o.encLeadID) + "&productId=" + o.productID + "&source=web";
        var a = "&#8377;",
            r = "";
        chkMobile && (r = "mobile-view"), 3 == o.productID && (a = "&#" + o.CurrencyDisplayValue);
        117 == o.productID || 114 == o.productID ? t += '<div class="policy-info ' + r + '"><p class="small-heading">My latest policy</p><div class="policy-info-wrap"><div class="policy-detail"><span class="policy-name"><img loading="lazy" src="' + o.SupplierLogo + '"/>' + o.PlanName + '</span><div class="policydetails"><span><p>Product</p><strong>' + o.Product + "</strong></span><span><p>Premium</p><strong>&#8377; " + currencyConvert(o.PolicyPremium) + "</strong>" + o.PolicyType + "</span><span><p>IDV</p><strong>" + a + " " + currencyConvert(o.SumInsured) + '</strong></span></div><div class="policy-action">' + n + '<a class="track-click-event" data-category="Top Navigation" data-action="Support" data-title="Detail policy" target="_new"  href="https://myaccount.policybazaar.com/MyAccount/Login?redirection=/policyDetail/' + e + '">View details</a><a class="track-click-event" data-category="Top Navigation" data-action="Support" data-title="Get help" target="_new"  href="' + gethelpurl + '">Get help</a></div></div></div></div>' : t += '<div class="policy-info ' + r + '"><p class="small-heading">My latest policy</p><div class="policy-info-wrap"><div class="policy-detail"><span class="policy-name"><img loading="lazy" src="' + o.SupplierLogo + '"/>' + o.PlanName + '</span><div class="policydetails"><span><p>Product</p><strong>' + o.Product + "</strong></span><span><p>Premium</p><strong>&#8377; " + currencyConvert(o.PolicyPremium) + "</strong>" + o.PolicyType + "</span><span><p>Cover</p><strong>" + a + " " + currencyConvert(o.SumInsured) + '</strong></span></div><div class="policy-action">' + n + '<a class="track-click-event" data-category="Top Navigation" data-action="Support" data-title="Detail policy" target="_new"  href="https://myaccount.policybazaar.com/MyAccount/Login?redirection=/policyDetail/' + e + '">View details</a><a class="track-click-event" data-category="Top Navigation" data-action="Support" data-title="Get help" target="_new"  href="' + gethelpurl + '">Get help</a></div></div></div></div>'
    }
    if ("" != t) {
        $(".policy-update").html(t).removeClass("hide");
        var c = "logged out";
        uniqueid && (c = "logged in");
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "Top Navigation",
                eventAction: "Support",
                eventLabel: "Policy Visible",
                customerId: uniqueid,
                loginStatus: c
            })
        } catch (t) {}
    }
}

function getRenewalCart(t, o, e, n) {
    var a = {
        task: "getrenewalwithpolicy",
        token: t
    };
    $.ajax({
        url: BASEURL + "services/commonservice.php",
        type: "POST",
        cache: !1,
        data: a,
        beforeSend: function() {},
        success: function(t) {
            var e = "";
            if ((t = JSON.parse(t)).status && "success" == t.status && (void 0 !== t.renewal && (renewalData = t.renewal.productData), void 0 !== t.policy && (policyData = t.policy.productData), "undefined" != typeof renewalData)) {
                var a = renewalData,
                    r = a.LeadId;
                r = window.btoa(r);
                var c = "";
                if (null != a.Premium && a.Premium > 0) {
                    var i = parseInt(a.Premium);
                    c = '<div class="right-col short"><p class="head">Premium</p><p class="sub-head">&#x20B9; ' + (i = i.toLocaleString("en-IN")) + "</p></div>"
                }
                var s = "";
                null == a.SumInsured && "" == a.SumInsured && "" == a.SumInsured || (s = '<div class="left-col wide"><p class="head">Cover Amount</p><p class="sub-head">&#x20B9; ' + convert_number2(a.SumInsured) + "</p></div>"), null != a.Supplier && (insName = getInsurerLogoClass(a.Supplier, a.productID));
                var d = "";
                date1 = new Date(a.RenewalOn), date2 = new Date;
                var u = date1.getTime() - date2.getTime(),
                    l = parseInt(u / 864e5);
                d = l <= 0 ? "today" : "in " + l + " days";
                var p = "#";
                a.RedirectUrl && (p = a.RedirectUrl), 117 == a.productID || 114 == a.productID ? e += '<p class="heading">Hi ' + o + ", your <span>" + a.Product + " Insurance</span> will <span>expire  " + d + '</span></p><div class="top-row"><div class="left-col short"><p class="head">Insurer</p><i class="' + insName + '"></i></div><div class="left-col short"><p class="head">Registration No.</p><p class="sub-head">' + a.RegistrationNo + "</p></div>" + c + '</div><div class="btn-row"><a href="javascript:void(0)" data-stage="Renew now" data-custid="' + n + '" data-productid="' + a.productID + '" data-renewalon="' + dateConvert(a.RenewalOn) + '" data-product="' + a.Product + '" class="remind">Dismiss</a><a href="' + p + '" data-stage="Renew now" data-custid="' + n + '" data-product="' + a.Product + '" class="view-plan">Renew now</a></div>' : 2 == a.productID && (e += '<p class="heading">Hi ' + o + ", your <span>" + a.Product + " Insurance</span> will <span>expire  " + d + '</span></p><div class="top-row"><div class="left-col short"><p class="head">Insurer</p><i class="' + insName + '"></i></div>' + s + c + '</div><div class="btn-row"><a href="javascript:void(0)" data-stage="Renew now" data-custid="' + n + '" data-productid="' + a.productID + '" data-renewalon="' + dateConvert(a.RenewalOn) + '" data-product="' + a.Product + '" class="remind">Dismiss</a><a data-productid="' + a.productID + '" data-supplierid="' + a.supplierID + '" data-continueid="' + a.continueId + '" data-bookingid="' + a.BookingId + '" href="javascript:void(0)" data-stage="Renew now" data-custid="' + n + '" data-product="' + a.Product + '" class="view-plan healthrenewnow">Renew now</a></div>')
            }
            if ("" != e) {
                var m = getCookie("cdprecent");
                return null != m && m == a.productID || (wWidth >= 1024 || "ipad_pro" == ipadType() ? ($(".slideshow-container-wrapper").delay(110).fadeOut(400), slideRemoveProductBox(), $(".card-view").delay(110).fadeIn(400), $(".card-view").addClass("slideDown"), 1024 == wWidth && "ipad" == ipadType() && $(".ext-head,.ext-banner-mobile").hide()) : chkMobile ? ($(".txt-part").delay(600).fadeOut(600), $(".slideshow-container-wrapper").delay(110).fadeOut(400), $(".card-view").delay(1200).fadeIn(400), slideProductBox()) : ($(".slideshow-container-wrapper").delay(110).fadeOut(400), $(".card-view").delay(110).fadeIn(400), $(".ext-head,.ext-banner-mobile").hide()), $(".card-view").html(e).removeClass("hide"), $(".top-pic").removeClass("open"), setTimeout((function() {
                    $("main").hasClass("invert") && !chkMobile || GA360EventPage("Renewal Widget", "Display", a.Product + " - " + n)
                }), 100)), !0
            }
            setTimeout((function() {
                $("main").hasClass("invert") && !chkMobile || getCustomerInfo(n)
            }), 100)
        }
    })
}

function getHomePageBanners(t, o, e, n) {
    var a = {
        task: "getbanners",
        token: t
    };
    $.ajax({
        url: BASEURL + "services/commonservice.php",
        type: "POST",
        cache: !1,
        data: a,
        beforeSend: function() {},
        success: function(a) {
            a = JSON.parse(a);
            if (isBanners = 1, a.status && "success" == a.status) {
                BannerData = a.bannerData, console.log(BannerData);
                var r = "";
                BannerData.length && $.each(BannerData, (function(t, o) {
                    if (o.autoSubmit) var e = "gotoPage('" + o.utmMediumHp + "', '" + o.product + "','" + o.type + "', '" + t + "','" + o.web_link + "');",
                        n = "gotoPage('" + o.utmMediumHp + "', '" + o.product + "','" + o.type + "', '" + t + "','" + o.web_link + "');";
                    else e = "HandleRightClickTaxSaving('Home Page Top Banner', this,1, 'click', '" + o.web_link + "', '" + o.utmMedium + "');", n = "getClickv6('Home Page Top Banner', 1, 'click', '" + o.web_link + "', '" + o.utmMediumHp + "');";
                    "" != o.hpBannerUrl && null != o.hpBannerUrl && (r += '<a data-bannerType="' + o.type + '"  data-pid="' + o.product + '" data-medium="' + o.utmMediumHp + '" data-autosubmit="' + o.autoSubmit + '" oncontextmenu="' + e + '" onclick="' + n + '" href="javascript:void(0);" class="carousel-slide"><img src="' + o.hpBannerUrl + '"></a>', setbannertracking("shown", o.autoSubmit, t, 0, o.product, o.utmMediumHp, o.type))
                })), "" != r && ($(".carousel").html('<div class="carousel-slider">' + r + "</div>"), els(".carousel").forEach(carousel)), GA360EventPage("India" != countryName ? "Home Page Top Banner NRI" : "Home Page Top Banner", "Shown", "")
            }
            isBanners && (getRenewalCart(t, o, e, n), getOpenTicketAndPolicy(e, n))
        },
        error: function() {
            getRenewalCart(t, o, e, n), getOpenTicketAndPolicy(e, n)
        }
    })
}

function getSliderSetting() {
    return {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !0,
        arrows: !1,
        autoplaySpeed: 4e3,
        adaptiveHeight: !0,
        onInit: function() {
            this.$list.css("height", this.$slider.parents(".inner").outerHeight(!0))
        }
    }
}

function slideProductBox() {
    $(".top-fold").hasClass("nri") ? ($(".card-view").addClass("slideDown"), $(".prd-container").addClass("slideDown")) : setTimeout((function() {
        $(".card-view").parents("article").addClass("recent_search_active"), $(".card-view").addClass("slideDown"), $(".prd-container").addClass("slideDown")
    }), 100)
}

function slideRemoveProductBox() {
    $(".card-view").parents("article").removeClass("recent_search_active"), $(".card-view").removeClass("slideDown"), $(".prd-container").removeClass("slideDown")
}

function dateConvert(t) {
    var o = new Date(t);
    return currentDate = o.getDate(), month = o.getMonth() + 1, year = o.getFullYear(), dateString = currentDate + "/" + month + "/" + year, dateString
}

function getEncMob(t) {
    var o = "https://myaccount.policybazaar.com/MyAccount/Login?redirection=" + t;
    window.open(o, "_blank").location
}

function topNavLoginGa(t) {
    var o = "logged out";
    uniqueid && (o = "logged in");
    try {
        dataLayer.push({
            event: "eventTracking",
            eventCategory: "top navigation login",
            eventAction: t,
            eventLabel: LoggedCustId,
            customerId: uniqueid,
            loginStatus: o
        })
    } catch (t) {}
}

function HandleRightClick(t, o, e, n, a, r, c, i) {
    if ("" != o && "" != e) {
        var s = "logged out";
        uniqueid && (s = "logged in");
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "Product Box",
                eventAction: e,
                eventLabel: n,
                eventValue: 0,
                visitId: visitId,
                customerId: uniqueid,
                loginStatus: s
            })
        } catch (t) {}
        "" != a && "" != r && pbEventTracker(a, r)
    }
    var d = window.location.search,
        u = c;
    if ("" != i && ("Home_Corona_Click" == e ? "" != d && (u.indexOf("utm_source") > -1 && (u = removeParam("utm_source", u)), u.indexOf("utm_term") > -1 && (u = removeParam("utm_term", u)), u.indexOf("utm_campaign") > -1 && (u = removeParam("utm_campaign", u)), u.indexOf("pb_source") > -1 && (u = removeParam("pb_source", u)), u.indexOf("pb_term") > -1 && (u = removeParam("pb_term", u)), u.indexOf("pb_campaign") > -1 && (u = removeParam("pb_campaign", u)), (d.indexOf("utm_medium") > -1 || d.indexOf("pb_medium") > -1) && (d.indexOf("utm_medium") > -1 && (d = removeParam("utm_medium", d)), d.indexOf("pb_medium") > -1 && (d = removeParam("pb_medium", d))), d.indexOf("pb_content") > -1 && (d = removeParam("pb_content", d))) : "Travel_Click" == e ? "" != d && (u.indexOf("utm_source") > -1 && (u = removeParam("utm_source", u)), u.indexOf("utm_medium") > -1 && (u = removeParam("utm_medium", u)), (d.indexOf("utm_term") > -1 || d.indexOf("pb_term") > -1) && (d.indexOf("utm_term") > -1 && (d = removeParam("utm_term", d)), d.indexOf("pb_term") > -1 && (d = removeParam("pb_term", d))), u.indexOf("pb_source") > -1 && (u = removeParam("pb_source", u)), u.indexOf("pb_term") > -1 && (u = removeParam("pb_term", u)), u.indexOf("utm_campaign") > -1 && (u = removeParam("utm_campaign", u)), u.indexOf("pb_campaign") > -1 && (u = removeParam("pb_campaign", u)), d.indexOf("pb_content") > -1 && (d = removeParam("pb_content", d))) : (u.indexOf("utm_source") > -1 && (u = removeParam("utm_source", u)), u.indexOf("utm_term") > -1 && (u = removeParam("utm_term", u)), u.indexOf("utm_medium") > -1 && (u = removeParam("utm_medium", u)), u.indexOf("utm_campaign") > -1 && (u = removeParam("utm_campaign", u)), u.indexOf("pb_source") > -1 && (u = removeParam("pb_source", u)), u.indexOf("pb_term") > -1 && (u = removeParam("pb_term", u)), u.indexOf("pb_medium") > -1 && (u = removeParam("pb_medium", u)), u.indexOf("pb_campaign") > -1 && (u = removeParam("pb_campaign", u))), (l = u.indexOf("?")) > 0 && (d = d.replace("?", "&")), u)) {
        var l = (u += d).indexOf("?");
        (u += l > 0 ? "&" : "?").indexOf("utm_content") > -1 && -1 == d.indexOf("utm_content") ? -1 == u.indexOf("utm_content") && (u += "utm_content=" + i) : u.indexOf("pb_content") > -1 && -1 == d.indexOf("pb_content") ? -1 == u.indexOf("pb_content") && (u += "pb_content=" + i) : u.indexOf("utm_source") > -1 ? -1 == d.indexOf("utm_content") && (u += "utm_content=" + i) : u.indexOf("pb_source") > -1 ? -1 == d.indexOf("pb_content") && (u += "pb_content=" + i) : ("Home_Corona_Click" == e || u.indexOf("utm_content") > -1 && (u = removeParam("utm_content", u)), u += "utm_content=" + i), c = u = (u = u.replace("&&", "&")).replace(/&+$/, "")
    }
    t.href = c
}

function HandleRightClickProduct(t, o, e, n, a, r) {
    if ("" != HandleRightClickTaxSaving && "" != e) {
        var c = "logged out";
        uniqueid && (c = "logged in");
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: o,
                eventAction: e,
                eventLabel: n,
                customerId: uniqueid,
                loginStatus: c
            })
        } catch (t) {}
    }
    var i = window.location.search,
        s = a;
    if ("" != r && (s.indexOf("utm_source") > -1 && (s = removeParam("utm_source", s)), s.indexOf("utm_term") > -1 && (s = removeParam("utm_term", s)), s.indexOf("utm_medium") > -1 && (s = removeParam("utm_medium", s)), s.indexOf("utm_campaign") > -1 && (s = removeParam("utm_campaign", s)), s.indexOf("pb_source") > -1 && (s = removeParam("pb_source", s)), s.indexOf("pb_term") > -1 && (s = removeParam("pb_term", s)), s.indexOf("pb_medium") > -1 && (s = removeParam("pb_medium", s)), s.indexOf("pb_campaign") > -1 && (s = removeParam("pb_campaign", s)), (d = s.indexOf("?")) > 0 && (i = i.replace("?", "&")), s)) {
        var d = (s += i).indexOf("?");
        (s += d > 0 ? "&" : "?").indexOf("utm_content") > -1 && -1 == i.indexOf("utm_content") ? -1 == s.indexOf("utm_content") && (s += "utm_content=" + r) : s.indexOf("pb_content") > -1 && -1 == i.indexOf("pb_content") ? -1 == s.indexOf("pb_content") && (s += "pb_content=" + r) : s.indexOf("utm_source") > -1 ? -1 == i.indexOf("utm_content") && (s += "utm_content=" + r) : s.indexOf("pb_source") > -1 ? -1 == i.indexOf("pb_content") && (s += "pb_content=" + r) : ("Home_Corona_Click" == strClickFor || s.indexOf("utm_content") > -1 && (s = removeParam("utm_content", s)), s += "utm_content=" + r), a = s = (s = s.replace("&&", "&")).replace(/&+$/, "")
    }
    t.href = a
}

function HandleRightClickTaxSaving(t, o, e, n, a, r) {
    if ("" != e && "" != n) {
        var c = "logged out";
        uniqueid && (c = "logged in");
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: t,
                eventAction: n,
                eventLabel: chkVariant,
                customerId: uniqueid,
                loginStatus: c
            })
        } catch (t) {}
    }
    var i = window.location.search,
        s = a;
    if ("" != r && (s.indexOf("utm_source") > -1 && (s = removeParam("utm_source", s)), s.indexOf("utm_term") > -1 && (s = removeParam("utm_term", s)), s.indexOf("utm_medium") > -1 && (s = removeParam("utm_medium", s)), s.indexOf("utm_campaign") > -1 && (s = removeParam("utm_campaign", s)), s.indexOf("pb_source") > -1 && (s = removeParam("pb_source", s)), s.indexOf("pb_term") > -1 && (s = removeParam("pb_term", s)), s.indexOf("pb_medium") > -1 && (s = removeParam("pb_medium", s)), s.indexOf("pb_campaign") > -1 && (s = removeParam("pb_campaign", s)), (d = s.indexOf("?")) > 0 && (i = i.replace("?", "&")), s)) {
        var d = (s += i).indexOf("?");
        (s += d > 0 ? "&" : "?").indexOf("utm_content") > -1 && -1 == i.indexOf("utm_content") ? s += "utm_content=" + r : s.indexOf("pb_content") > -1 && -1 == i.indexOf("pb_content") ? s += "pb_content=" + r : s.indexOf("utm_source") > -1 ? -1 == i.indexOf("utm_content") && (s += "utm_content=" + r) : s.indexOf("pb_source") > -1 ? -1 == i.indexOf("pb_content") && (s += "pb_content=" + r) : ("Home_Corona_Click" == n || s.indexOf("utm_content") > -1 && (s = removeParam("utm_content", s)), s += "utm_content=" + r), a = s
    }
    o.href = a
}

function HandleRightClickV6(t, o, e, n, a, r) {
    if ("" != e && "" != n) try {
        dataLayer.push({
            event: "eventTracking",
            eventCategory: t,
            eventAction: n,
            eventLabel: "click"
        })
    } catch (t) {}
    var c = window.location.search,
        i = a;
    if ("" != r && (i.indexOf("utm_source") > -1 && (i = removeParam("utm_source", i)), i.indexOf("utm_term") > -1 && (i = removeParam("utm_term", i)), i.indexOf("utm_medium") > -1 && (i = removeParam("utm_medium", i)), i.indexOf("utm_campaign") > -1 && (i = removeParam("utm_campaign", i)), i.indexOf("pb_source") > -1 && (i = removeParam("pb_source", i)), i.indexOf("pb_term") > -1 && (i = removeParam("pb_term", i)), i.indexOf("pb_medium") > -1 && (i = removeParam("pb_medium", i)), i.indexOf("pb_campaign") > -1 && (i = removeParam("pb_campaign", i)), (s = i.indexOf("?")) > 0 && (c = c.replace("?", "&")), i)) {
        var s = (i += c).indexOf("?");
        (i += s > 0 ? "&" : "?").indexOf("utm_content") > -1 && -1 == c.indexOf("utm_content") ? i += "utm_content=" + r : i.indexOf("pb_content") > -1 && -1 == c.indexOf("pb_content") ? i += "pb_content=" + r : i.indexOf("utm_source") > -1 ? -1 == c.indexOf("utm_content") && (i += "utm_content=" + r) : i.indexOf("pb_source") > -1 ? -1 == c.indexOf("pb_content") && (i += "pb_content=" + r) : ("Home_Corona_Click" == n || i.indexOf("utm_content") > -1 && (i = removeParam("utm_content", i)), i += "utm_content=" + r), a = i
    }
    o.href = a
}

function gotoPage(t, o, e, n, a) {
    try {
        if (chkMobile) var r = "PBHOME_MOBILE";
        else r = "PBHOME";
        if (utmTerm = "PBHOME", GA360EventPage("India" != countryName ? "Home Page Top Banner NRI" : "Home Page Top Banner", "Clicked", o), 115 == o) {
            var c = {
                url: "https://www.googleapis.com/geolocation/v1/geolocate?key=" + googleGEOApi,
                method: "POST"
            };
            $.ajax(c).done((function(c) {
                var i = c,
                    s = {
                        task: "getredirectionlink",
                        token: myacctoken,
                        productid: o,
                        utmmedium: t,
                        utmsource: r,
                        utmterm: utmTerm,
                        utmcampaign: utmCampaign,
                        utmcontent: utmContent,
                        visitcreationtime: visitcreationtime,
                        enquiryid: enquiryId,
                        mtrxleadid: mtrxLeadId,
                        visitorid: visitId,
                        bannertype: e,
                        latitude: i.location.lat,
                        longitude: i.location.lng
                    };
                $.ajax({
                    url: BASEURL + "services/commonservice.php",
                    type: "POST",
                    cache: !1,
                    data: s,
                    beforeSend: function() {
                        $('<div class="fullpageloading show"><div class="loadingicon"></div></div>').appendTo("body")
                    },
                    success: function(r) {
                        (r = JSON.parse(r)).status && "success" == r.status ? (BannerData = r.redirectionData, "" != BannerData.quotes_url && null != BannerData.quotes_url ? (mtrxLeadId = BannerData.investment_mtxLeadId, enquiryId = BannerData.investment_enquiryId, SystemUserID = BannerData.SystemUserID, window.top.location.href = BannerData.quotes_url) : window.top.location.href = a) : window.top.location.href = a, setbannertracking("click", !0, n, "", o, t, e), $(".fullpageloading").removeClass("show")
                    },
                    error: function(r, c, i) {
                        window.top.location.href = a, setbannertracking("click", !0, n, "", o, t, e), $(".fullpageloading").removeClass("show")
                    }
                })
            }))
        } else {
            var i = {
                task: "getredirectionlink",
                token: myacctoken,
                productid: o,
                utmmedium: t,
                utmsource: r,
                utmterm: utmTerm,
                utmcampaign: utmCampaign,
                utmcontent: utmContent,
                visitcreationtime: visitcreationtime,
                enquiryid: enquiryId,
                mtrxleadid: mtrxLeadId,
                visitorid: visitId,
                bannertype: e
            };
            $.ajax({
                url: BASEURL + "services/commonservice.php",
                type: "POST",
                cache: !1,
                data: i,
                beforeSend: function() {
                    $('<div class="fullpageloading show"><div class="loadingicon"></div></div>').appendTo("body")
                },
                success: function(r) {
                    (r = JSON.parse(r)).status && "success" == r.status ? (BannerData = r.redirectionData, "" != BannerData.quotes_url && null != BannerData.quotes_url ? (mtrxLeadId = BannerData.MatrixLeadID, enquiryId = BannerData.EnquiryID, SystemUserID = BannerData.SystemUserID, window.top.location.href = BannerData.quotes_url) : window.top.location.href = a) : window.top.location.href = a, setbannertracking("click", !0, n, "", o, t, e), $(".fullpageloading").removeClass("show")
                },
                error: function(r, c, i) {
                    window.top.location.href = a, setbannertracking("click", !0, n, "", o, t, e), $(".fullpageloading").removeClass("show")
                }
            })
        }
    } catch (r) {
        window.top.location.href = a, setbannertracking("click", !0, n, "", o, t, e), $(".fullpageloading").removeClass("show")
    }
}

function setbannertracking(t, o, e, n, a, r, c) {
    if (chkMobile) var i = "PBHOME_MOBILE";
    else i = "PBHOME";
    var s = {
        task: "setbannertracking",
        token: myacctoken,
        productid: a,
        utmmedium: r,
        utmsource: i,
        utmterm: utmTerm = "PBHOME",
        utmcampaign: utmCampaign,
        utmcontent: utmContent,
        visitcreationtime: visitcreationtime,
        enquiryid: enquiryId,
        mtrxleadid: mtrxLeadId,
        vid: visitId,
        bannertype: c,
        c_indx: e,
        event: t,
        auto_s: o,
        stage: n
    };
    $.ajax({
        url: BASEURL + "services/commonservice.php",
        type: "POST",
        cache: !1,
        data: s,
        beforeSend: function() {},
        success: function(t) {
            JSON.parse(t);
            t.status && "success" == t.status && console.log(t)
        }
    })
}

function detectBrowser() {
    var t = navigator.appName,
        o = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    return o = o ? [o[1]] : t
}

function InsertTracking(t, o, e, n, a, r, c, i, s, d) {
    isLocal();
    var u = "home_v10",
        l = detectBrowser();
    setTimeout((function() {
        if (localStorage.getItem("PBLocalSGAData")) {
            var s = localStorage.getItem("PBLocalSGAData");
            objGAData = $.parseJSON(s), jsonItem = objGAData, !jsonItem.Data.datadisplayfor || "home-appwebview" != jsonItem.Data.datadisplayfor && "seo-appwebview" != jsonItem.Data.datadisplayfor || (u = jsonItem.Data.datadisplayfor)
        }
        Data = '{"VisitId":"' + t + '","url":"home page","sessionID":"' + e + '","utmsource":"' + n + '","utmterm":"' + a + '","ipaddress":"' + o + '","browser":"' + l + '","leadsource":"' + i + '","utmmedium":"' + r + '","utmcampaign":"' + c + '","CustID":"' + d + '","ProductID":"0","UtmContent":"' + u + '"}', TrackUrl = BASEURL + "services/tracking.php?v=" + Math.random(), $.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("Accept", "application/json")
            },
            url: TrackUrl,
            type: "POST",
            data: Data,
            dataType: "json",
            success: function(t) {
                if ("" != t) {
                    if (jsonItem = {}, localStorage.getItem("PBLocalSGAData")) {
                        var o = localStorage.getItem("PBLocalSGAData");
                        objGAData = $.parseJSON(o), jsonItem = objGAData, jsonItem.Data.datavisit = t.visitId
                    } else jsonItem.Data = {
                        datavisit: t.visitId
                    };
                    try {
                        localStorage.setItem("PBLocalSGAData", JSON.stringify(jsonItem))
                    } catch (t) {}
                    visitId = t.visitId, utmTerm = t.UtmTerm, utmSource = t.UtmSource, utmMedium = t.UtmMedium, utmCampaign = t.UtmCampaign, utmContent = null != t.UtmContent ? t.UtmContent : t.UtmMedium
                }
            }
        })
    }), 1500)
}

function getCountry() {
    var t = [{
        CountryCodeId: "375",
        CountryName: "United Arab Emirates",
        CountryCode: 971,
        MIN: 9,
        MAX: 9
    }, {
        CountryCodeId: "187",
        CountryName: "Kuwait",
        CountryCode: 965,
        MIN: 8,
        MAX: 8
    }, {
        CountryCodeId: "288",
        CountryName: "Qatar",
        CountryCode: 974,
        MIN: 8,
        MAX: 8
    }, {
        CountryCodeId: "308",
        CountryName: "Saudi Arabia",
        CountryCode: 966,
        MIN: 9,
        MAX: 9
    }];
    $.ajax({
        url: "https://termcjapi.policybazaar.com/api/v1/maxmind/country",
        dataType: "json",
        success: function(o) {
            void 0 !== o.countryName && $.each(t, (function(t, e) {
                if (e.CountryName.toLowerCase() === o.countryName.toLowerCase()) return countryName = e.CountryName, countryId = e.CountryCodeId, void(countryCode = e.CountryCode)
            }))
        }
    })
}

function isNRI() {
    $.ajax({
        url: "https://termcjapi.policybazaar.com/api/v1/maxmind/country",
        dataType: "json",
        success: function(t) {
            void 0 !== t.countryName && ("null" != t.countryName && "india" != t.countryName && $("#toofree").html("+91124-6656507"), countryName = (countryName = t.countryName).toLowerCase().replace(/\b[a-z]/g, (function(t) {
                return t.toUpperCase()
            })))
        }
    })
}

function getClickv3(t, o, e, n, a, r, c) {
    if ("" != t && "" != o) {
        var i = "logged out";
        uniqueid && (i = "logged in");
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "Product Box",
                eventAction: o,
                eventLabel: e,
                eventValue: 1,
                visitId: visitId,
                customerId: uniqueid,
                loginStatus: i
            })
        } catch (t) {}
        139 == n ? fncSetDBTracking(visitId, "CV_Prequotes_custdetails", "Page_loaded", "Y", utmSource, utmMedium, "") : "" != n && "" != a && pbEventTracker(n, a)
    }
    setTimeout((function() {
        return RedirectUrlHomeProduct(r, o, !1, c)
    }), 100)
}

function getClickv4(t, o, e, n, a) {
    if ("" != o && "" != e) try {
        dataLayer.push({
            event: "eventTracking",
            eventCategory: t,
            eventAction: e,
            eventLabel: ""
        })
    } catch (t) {}
    setTimeout((function() {
        return RedirectUrlHomeProduct(n, e, !1, a)
    }), 100)
}

function getClickv6(t, o, e, n, a) {
    var r = "logged out";
    if (uniqueid && (r = "logged in"), "" != o && "" != e) try {
        dataLayer.push({
            event: "eventTracking",
            eventCategory: t,
            eventAction: e,
            eventLabel: "click",
            customerId: uniqueid,
            loginStatus: r
        })
    } catch (t) {}
    setTimeout((function() {
        return RedirectUrlHomeProduct(n, e, !1, a)
    }), 500)
}

function getClickProduct(t, o, e, n, a) {
    if ("" != t && "" != o && "" != n) try {
        dataLayer.push({
            event: "eventTracking",
            eventCategory: t,
            eventAction: o,
            eventLabel: e
        })
    } catch (t) {}
    setTimeout((function() {
        return RedirectUrlHomeProduct(n, o, !1, a)
    }), 100)
}

function pbEventTracker(t, o) {
    try {
        var e = 7 == t ? "PBEVENT" : "Investment_EVENT";
        Data = 7 == t ? '{"visitId":"' + visitId + '","LeadID":"0","pageName":"Home","event":"' + o + '","collection":"' + e + '"}' : '{"VisitID":"' + visitId + '","LeadID":"0","pageName":"Home","event":"' + o + '","collection":"' + e + '"}', TrackUrl = BASEURL + "services/pbeventtracking.php", $.ajax({
            beforeSend: function(t) {
                t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("Accept", "application/json")
            },
            url: TrackUrl,
            type: "POST",
            data: Data,
            dataType: "json",
            async: !0,
            success: function(t) {}
        })
    } catch (t) {}
    return !1
}

function fncSetDBTracking(t, o, e, n, a, r, c) {
    var i = "Desktop";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) i = "Mobile";
    t = $("#gaData").attr("data-visit"), r = $("#gaData").attr("data-utm-medium");
    var s = {
            task: "cvdbtracking",
            visitid: t,
            device: i,
            eventCategory: o,
            eventAction: e,
            eventLabel: n,
            utmSource: $("#gaData").attr("data-utm-source"),
            utmMedium: r,
            additionalInfo: c
        },
        d = BASEURL + "policybazzar-home/callservice.php";
    $.ajax({
        url: d,
        type: "POST",
        data: s,
        cache: !1,
        beforeSend: function() {},
        success: function(t, o, e) {}
    })
}

function getClickNew(t, o, e, n, a) {
    if ("" != t && "" != o) {
        try {
            ga("pbTrackerObj.send", "event", "newHomePagev5", o, "", {
                nonInteraction: 1
            })
        } catch (t) {}
        "" != e && "" != n && pbEventTracker(e, n)
    }
    setTimeout((function() {
        return RedirectUrlHomeProduct(a, o, !0, "home_v4")
    }), 100)
}

function RedirectUrlHomeProduct(t, o, e, n) {
    var a = window.location.search,
        r = t;
    if ("" != n && ("Home_Corona_Click" == o ? "" != a && (r.indexOf("utm_source") > -1 && (r = removeParam("utm_source", r)), r.indexOf("utm_term") > -1 && (r = removeParam("utm_term", r)), (a.indexOf("utm_medium") > -1 || a.indexOf("pb_medium") > -1) && (a.indexOf("utm_medium") > -1 && (a = removeParam("utm_medium", a)), a.indexOf("pb_medium") > -1 && (a = removeParam("pb_medium", a))), r.indexOf("pb_source") > -1 && (r = removeParam("pb_source", r)), r.indexOf("pb_term") > -1 && (r = removeParam("pb_term", r)), r.indexOf("utm_campaign") > -1 && (r = removeParam("utm_campaign", r)), r.indexOf("pb_campaign") > -1 && (r = removeParam("pb_campaign", r)), a.indexOf("pb_content") > -1 && (a = removeParam("pb_content", a))) : "Corona_Kavach" == o ? "" != a && (r.indexOf("utm_source") > -1 && (r = removeParam("utm_source", r)), r.indexOf("utm_term") > -1 && (r = removeParam("utm_term", r)), r.indexOf("utm_campaign") > -1 && (r = removeParam("utm_campaign", r)), r.indexOf("pb_source") > -1 && (r = removeParam("pb_source", r)), r.indexOf("pb_term") > -1 && (r = removeParam("pb_term", r)), r.indexOf("pb_campaign") > -1 && (r = removeParam("pb_campaign", r)), (a.indexOf("utm_medium") > -1 || a.indexOf("pb_medium") > -1) && (a.indexOf("utm_medium") > -1 && (a = removeParam("utm_medium", a)), a.indexOf("pb_medium") > -1 && (a = removeParam("pb_medium", a))), a.indexOf("pb_content") > -1 && (a = removeParam("pb_content", a))) : "AnnuityPlan_Click" == o || "Annuity_Click" == o || "SmartDeposit_Click" == o || "GHI_HP_Banner_Click" == o ? "" != a && (r.indexOf("utm_source") > -1 && (r = removeParam("utm_source", r)), r.indexOf("utm_term") > -1 && (r = removeParam("utm_term", r)), r.indexOf("utm_medium") > -1 && (r = removeParam("utm_medium", r)), r.indexOf("pb_source") > -1 && (r = removeParam("pb_source", r)), r.indexOf("pb_term") > -1 && (r = removeParam("pb_term", r)), r.indexOf("pb_medium") > -1 && (r = removeParam("pb_medium", r)), (a.indexOf("utm_campaign") > -1 || a.indexOf("pb_campaign") > -1) && (a.indexOf("utm_campaign") > -1 && (a = removeParam("utm_campaign", a)), a.indexOf("pb_campaign") > -1 && (a = removeParam("pb_campaign", a))), a.indexOf("pb_content") > -1 && (a = removeParam("pb_content", a))) : "Travel_Click" == o ? "" != a && (r.indexOf("utm_source") > -1 && (r = removeParam("utm_source", r)), r.indexOf("utm_medium") > -1 && (r = removeParam("utm_medium", r)), (a.indexOf("utm_term") > -1 || a.indexOf("pb_term") > -1) && (a.indexOf("utm_term") > -1 && (a = removeParam("utm_term", a)), a.indexOf("pb_term") > -1 && (a = removeParam("pb_term", a))), r.indexOf("pb_source") > -1 && (r = removeParam("pb_source", r)), r.indexOf("pb_term") > -1 && (r = removeParam("pb_term", r)), r.indexOf("utm_campaign") > -1 && (r = removeParam("utm_campaign", r)), r.indexOf("pb_campaign") > -1 && (r = removeParam("pb_campaign", r)), a.indexOf("pb_content") > -1 && (a = removeParam("pb_content", a))) : (r.indexOf("utm_source") > -1 && (r = removeParam("utm_source", r)), r.indexOf("utm_term") > -1 && (r = removeParam("utm_term", r)), r.indexOf("utm_medium") > -1 && (r = removeParam("utm_medium", r)), r.indexOf("utm_campaign") > -1 && (r = removeParam("utm_campaign", r)), r.indexOf("pb_source") > -1 && (r = removeParam("pb_source", r)), r.indexOf("pb_term") > -1 && (r = removeParam("pb_term", r)), r.indexOf("pb_medium") > -1 && (r = removeParam("pb_medium", r)), r.indexOf("pb_campaign") > -1 && (r = removeParam("pb_campaign", r))), (c = r.indexOf("?")) > 0 && (a = a.replace("?", "&")), r)) {
        var c = (r += a).indexOf("?");
        (r += c > 0 ? "&" : "?").indexOf("utm_content") > -1 && -1 == a.indexOf("utm_content") ? -1 == r.indexOf("utm_content") && (r += "utm_content=" + n) : r.indexOf("pb_content") > -1 && -1 == a.indexOf("pb_content") ? -1 == r.indexOf("pb_content") && (r += "pb_content=" + n) : r.indexOf("utm_source") > -1 ? -1 == a.indexOf("utm_content") && (r += "utm_content=" + n) : r.indexOf("pb_source") > -1 ? -1 == a.indexOf("pb_content") && (r += "pb_content=" + n) : ("Home_Corona_Click" == o || r.indexOf("utm_content") > -1 && (r = removeParam("utm_content", r)), r += "utm_content=" + n), r = (r = r.replace("&&", "&")).replace(/&+$/, ""), t = r
    }
    return setTimeout((function() {
        e ? window.open(t, "_new") : window.location.href = t
    }), 500), !1
}

function removeParam(t, o) {
    var e = o.split("?")[0],
        n = [],
        a = -1 !== o.indexOf("?") ? o.split("?")[1] : "";
    if ("" !== a) {
        for (var r = (n = a.split("&")).length - 1; r >= 0; r -= 1) n[r].split("=")[0] === t && n.splice(r, 1);
        e = e + "?" + n.join("&")
    }
    return e
}

function setCookie(t, o, e, n, a, r) {
    cookieStr = t + "=" + escape(o) + "; ", e && (e = setExpiration(e), cookieStr += "expires=" + e + "; "), n && (cookieStr += "path=" + n + "; "), a && (cookieStr += "domain=" + a + "; "), r && (cookieStr += "secure; "), document.cookie = cookieStr
}

function setExpiration(t) {
    var o = new Date;
    return new Date(o.getTime() + 24 * t * 60 * 60 * 1e3).toGMTString()
}

function getCookie(t) {
    return document.cookie.length > 0 && (begin = document.cookie.indexOf(t + "="), -1 != begin) ? (begin += t.length + 1, end = document.cookie.indexOf(";", begin), -1 == end && (end = document.cookie.length), unescape(document.cookie.substring(begin, end))) : null
}

function GA360EventPage(t, o, e) {
    try {
        "" == e && (e = visitId);
        var n = "logged out";
        uniqueid && (n = "logged in"), dataLayer.push({
            event: "eventTracking",
            eventCategory: t,
            eventAction: o,
            eventLabel: e,
            customerId: uniqueid,
            loginStatus: n
        })
    } catch (t) {}
}

function getGAClientID() {
    try {
        var t, o, e = ga.getAll();
        for (t = 0, o = e.length; t < o; t += 1)
            if ("UA-4743078-1" === e[t].get("trackingId")) return e[t].get("clientId")
    } catch (t) {}
    return "false"
}

function isLocal() {
    var t = getCookie("dInternalTraffic"),
        o = getCookie("isInternal");
    "true" == t || "true" == o ? $("#gaData").attr("data-user-type", "agent") : $.ajax({
        url: "https://termcjapi.policybazaar.com/api/local/ip",
        type: "GET",
        cache: !1,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(t) {
            if (userType = "user", t.isLocalIP) {
                userType = "agent";
                var o = escape("true") + "; secure; path=/";
                document.cookie = "isInternal=" + o
            }
            $("#gaData").attr("data-user-type", userType)
        }
    })
}

function getInsurerLogoClass(t, o) {
    var e = "_general_icon";
    insurer = t.split(" ", 2), insurer[0] && (t = insurer[0].toLowerCase()), insurer[1] && "Life" != insurer[1] && (t += "_" + insurer[1].toLowerCase()), 7 != o && 115 != o && "hdfc_life" != t || (e = "_life_icon");
    var n = {
        "l&t": "lnt",
        bajaj: "bajaj_allianz",
        bhartiaxa: "bharti_axa",
        cholamandalam: "cholamandalam_ms",
        baxa: "bharti_axa",
        "-general": "",
        aditya_birla_sun: "aditya_birla",
        birla: "aditya_birla",
        et: "edelweiss_tokio",
        hdfc_life: "hdfc",
        hdfcergo: "hdfc_ergo",
        icici_pru: "icici_prudential",
        icici: "icici_prudential",
        max: "max_life_insurance",
        reliance: "reliance_nippon",
        coco_by: "navi",
        iffcotokio: "iffco_tokio",
        liberty_general: "liberty",
        magma_comprehensive: "magma",
        digit_general: "digit",
        shriram_general: "shriram",
        pnb_metlife: "pnb_metlife"
    };
    return t = (t = (t = (t = (t = (t = (t = (t = t.replace(/pnb_metlife|aditya_birla_sun|shriram_general|digit_general|hdfcergo|cholamandalam|coco_by|iffcotokio|liberty_general|magma_comprehensive|reliance|max|icici_pru|icici|hdfc_life|et|birla|l&t|bajaj|baxa|bhartiaxa|-general/gi, (function(t) {
        return n[t]
    }))).replace(/bajaj_allianz_allianz|bajaj_allianzallianz/g, "bajaj_allianz")).replace(/aditya_aditya_birla/g, "aditya_birla")).replace(/cholamandalam_ms_ms/g, "cholamandalam_ms")).replace(/max_life_insurance_bupa/g, "max_bupa")).replace(/reliance_nippon_general/g, "reliance_general")).replace(/edelweiss_general/g, "edelweiss")).replace(/navi_general/g, "navi"), t += e
}

function convert_number2(t) {
    if (null == t || isNaN(t)) return 0;
    t = t.toString().replace(/,/g, "");
    var o = Math.round(t).toString(),
        e = o.length,
        n = "",
        a = "";
    return e < 4 ? n = o : 4 == e || 5 == e ? (n = o / 1e3, a = "K") : 6 == e || 7 == e ? (n = o / 1e5, a = "Lakh") : (8 == e || e >= 9) && (n = o / 1e7, a = "Crore"), (n = parseInt(n) > 9 ? Math.round(10 * n) / 10 : Math.round(100 * n) / 100) + " " + a
}

function checkRegistrationNumber(t) {
    return !!/^[A-Z]{2}[ -]{0,1}[0-9]{2}[ -]{0,1}[0-9]{4}$/.test(t) || !!/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/.test(t)
}
els(".carousel").forEach(carousel), $(document).ready((function() {
    $(".co-logo").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 0,
        speed: 8e3,
        pauseOnHover: !0,
        cssEase: "linear",
        centerMode: !0,
        variableWidth: !0,
        responsive: [{
            breakpoint: 568,
            settings: "unslick"
        }]
    }), $(".content__container__list").slick({
        vertical: !0,
        verticalSwiping: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 1300,
        arrows: !1,
        dots: !1
    }), $(".mobileVideothum.sjb .vdposter .ps").attr("data-key", popuupVideo_info[0].videokey), $(".mobileVideothum.onecr .vdposter .ps").attr("data-key", popuupVideo_info[1].videokey);
    try {
        if (localStorage.getItem("PBLocalSGAData")) {
            var t = localStorage.getItem("PBLocalSGAData");
            objGAData = (objGAData = $.parseJSON(t)).Data
        } else null != (visitId = getCookie("Cookie_VisitLog")) && (objGAData = {
            Data: {
                dataref: "",
                datacountry: "",
                datasplitvar: "",
                datapid: 0,
                datasourcega360: "",
                datadisplayfor: "",
                dataarticleid: "",
                datautmterm: "",
                datautmsource: "",
                datautmcampaign: "",
                datautmmedium: "",
                datavisit: visitId,
                datacdn: "",
                datausertype: ""
            }
        })
    } catch (t) {}
    utmTerm = objGAData.datautmterm, utmSource = objGAData.datautmsource, utmMedium = objGAData.datautmmedium, utmCampaign = objGAData.datautmcampaign, utmContent = objGAData.datadisplayfor, visitId = objGAData.datavisit, userType = objGAData.datausertype, productId = 0, nriCName = objGAData.datacountry, LoggedCustId = "", myacctoken = "", policyData = "";
    var o = null != navigator.userAgent.match(/iPad/i),
        e = getCookie("AppSticky"),
        n = getCookie("MobileBanner"),
        a = getCookie("cdprecent");

    function r() {
        $("#appbar").removeClass("show")
    }
    wWidth >= 1024 && "ipad_pro" == ipadType() ? $(".txt-part").removeClass("hide").fadeIn(300) : ($(window).width() < 1024 || o) && (a && $(".top-fold").hasClass("nri") && ($(".txt-part").hide(), $(".top-fold.nri article:nth-child(2)").removeClass("hide"), slideRemoveProductBox(), $(".dotsLoader").addClass("hide"), $(".ext-head,.ext-banner-mobile").delay(300).fadeIn(300)), setTimeout((function() {
        1 != e && $("#appbar").addClass("show"), 1 == n && ($(".ext-head").hide(), $(".txt-part").removeClass("mobilehide"), $(".txt-part").delay(300).fadeIn(300))
    }), 500), setTimeout((function() {
        r(), $("#appbar").removeClass("show")
    }), 7e3)), $(document).on("click", ".ruby-grid .viewall", (function() {
        $(this).toggleClass("active"), "View more" == $(".viewlink span", this).text() ? $(".viewlink span", this).text("Close") : $(".viewlink span", this).text("View more")
    })), $(document).on("click", ".stikywrap .arrow", (function() {
        r(), setCookie("AppSticky", "1", 30, "/", ".policybazaar.com", 0)
    })), $(window).on("resize orientationchange", (function() {
        window.outerWidth - wwidht > 100 && ($(".more-prd-base").hide(), $(".more-prd-blk").hide(), $("body").removeClass("oh")), $(window).width() <= 1020 && ($(".view-all-prd, .see-more").click((function() {
            $(".more-prd-blk").animate({
                top: "10%"
            }, 200), $(".more-prd-base").addClass("show", "10000"), $("body").addClass("oh")
        })), $(".close-small").click((function() {
            $(".more-prd-blk").animate({
                top: "110%"
            }, 200), $(".more-prd-base").fadeOut(), $("body").removeClass("oh")
        })), $(".close-small-renew").click((function() {
            $(".more-prd-blk").animate({
                top: "110%"
            }, 200), $(".renew-prd-blk").toggleClass("show1"), $(".more-prd-base").fadeOut(), $("body").removeClass("oh")
        })))
    })), $(document).on("click", ".small_thumb_video .video_item", (function() {
        var t = $("img", this).attr("data-url"),
            o = $("img", this).attr("data-id");
        $(".small_thumb_video .video_item").removeClass("hide"), $(".video_item [data-url=" + t + "]").parent().addClass("hide"), $(".youtube_video.play .heading").html(popuupVideo_info[o].bannertext), $(".more_video_link").html('<a href="' + popuupVideo_info[o].url + '" data-label="' + popuupVideo_info[o].datalabel + '">Buy ' + popuupVideo_info[o].bannertext + "</a>"), $(".video_content .big_video").html('<iframe width="560" height="350" src="https://www.youtube.com/embed/' + t + '?controls=1&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>');
        try {
            var e = $(this).attr("data-label");
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "home-page-youtube",
                eventAction: "related-video-click",
                eventLabel: e
            })
        } catch (t) {}
    })), $(document).on("click", ".mobileVideothum", (function() {
        var t = $(".vdposter .ps", this).attr("data-key");
        if ($(".youtube_video").addClass("moblieyoutubeBox").show(), $(".video_content .big_video").html('<iframe width="560" height="350" src="https://www.youtube.com/embed/' + t + '?controls=1&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>'), $(".youtube_video").addClass("play").fadeIn(200), $(".more-prd-base").show(), $("body").addClass("oh"), 0 == $(this).attr("data-id")) var o = "buy-saral-jeevan-bima-online";
        if (1 == $(this).attr("data-id")) o = "be-ready-for-any-hospital-bill";
        GA360EventPage("home-page-youtube", "click", o)
    })), $(document).on("click", ".close-youtube", (function() {
        $(".video_content .big_video").html(""), $(".youtube_video").hide().removeClass("play"), $(".more-prd-base").removeClass("show");
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "home-page-youtube",
                eventAction: "related-video-popup-close"
            })
        } catch (t) {}
    })), $(document).on("click", ".videoItem img", (function() {
        try {
            dataLayer.push({
                event: "includeyoutubejs"
            })
        } catch (t) {}
        var t = $(this).attr("data-url"),
            o = $(this).attr("data-id");
        $(this).parents(".videoItem").hide(), $(".video_item [data-url=" + t + "]").parent().addClass("hide"), $(".video_content .big_video").html('<iframe width="560" height="350" src="https://www.youtube.com/embed/' + t + '?controls=1&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>'), $(".youtube_video .heading").html(popuupVideo_info[o].bannertext), $(".more_video_link").html('<a href="' + popuupVideo_info[o].url + '" data-label="' + popuupVideo_info[o].datalabel + '">Buy ' + popuupVideo_info[o].bannertext + "</a>"), $(this).parents(".videoItem").removeClass(".visible"), $(".youtube_video").addClass("play").fadeIn(200), $(".more-prd-base").show(), $("body").addClass("oh");
        try {
            var e = $(".videoItem .videobanner:nth-child(" + elementNumber + ")").attr("data-label");
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "home-page-youtube",
                eventAction: "click",
                eventLabel: e
            })
        } catch (t) {}
    })), $(document).on("click", ".youtube_video .close-youtube", (function() {
        $(".youtube_video").removeClass("moblieyoutubeBox play").fadeOut(100), $(".more-prd-base").hide(), $("body").removeClass("oh")
    })), $(document).on("click", ".more_video_link", (function() {
        try {
            var t = $("a", this).attr("data-label");
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "home-page-youtube",
                eventAction: "cj-link-click",
                eventLabel: t
            })
        } catch (t) {}
    })), $(document).on("click", ".closebutton", (function() {
        $(this).parent(".videoItem").removeClass("visible");
        try {
            var t = $(".videoItem .videobanner:nth-child(" + elementNumber + ")").attr("data-label");
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "home-page-youtube",
                eventAction: "close",
                eventLabel: t
            })
        } catch (t) {}
    })), $(document).on("click", ".btn-row .remind", (function() {
        $(".dotsLoader").addClass("hide"), $(".top-pic").addClass("open"), setCookie("cdprecent", $(this).attr("data-productid"), 0, "/", "", 0), chkMobile ? $(".top-fold").hasClass("nri") ? ($(".txt-part").removeClass("hide").fadeIn(300), $(".txt-part").hide(), $(".top-fold.nri article:nth-child(2)").removeClass("hide"), slideRemoveProductBox(), $(".dotsLoader").addClass("hide"), $(".ext-head,.ext-banner-mobile").delay(300).fadeIn(300)) : $(window).width() > 1023 ? ($(".card-view").fadeOut(300), slideRemoveProductBox(), $(".ext-head,.ext-banner-mobile").delay(300).fadeOut(300), $(".ext-banner").fadeIn(100)) : ($(".card-view").fadeOut(300), slideRemoveProductBox(), $(".ext-head,.ext-banner-mobile").delay(300).fadeIn(300)) : $(".top-fold").hasClass("nri") ? ($(".card-view").fadeOut(300), slideRemoveProductBox(), $(".slideshow-container-wrapper").delay(1200).fadeIn(400)) : ($(".card-view").fadeOut(300), slideRemoveProductBox()), $(".card-view").html(""), "Renew now" == $(this).attr("data-stage") ? GA360EventPage("Renewal Widget", "Dismiss", $(this).attr("data-product") + " - " + $(this).attr("data-custid")) : GA360EventPage("Personalization", $(this).attr("data-product"), "Stage " + $(this).attr("data-stage") + " remind later")
    })), $(document).on("click", ".mobile-banner-close", (function() {
        $(".ext-head").hide(), $(".txt-part").removeClass("mobilehide"), $(".txt-part").delay(300).fadeIn(300), setCookie("MobileBanner", "1", 0, "/", ".policybazaar.com", 0);
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "homepage_save_tax",
                eventAction: "close",
                eventLabel: chkVariant
            })
        } catch (t) {}
    })), $(document).on("click", ".btn-row .view-plan", (function() {
        var t = " view all plans";
        2 == $(this).attr("data-stage") && (t = " Continue with this Plan"), 3 == $(this).attr("data-stage") && (t = " Proceed to Payment"), "Renew now" == $(this).attr("data-stage") ? GA360EventPage("Renewal Widget", "Renew now", $(this).attr("data-product") + " - " + $(this).attr("data-custid")) : GA360EventPage("Personalization", $(this).attr("data-product"), "Stage " + $(this).attr("data-stage") + t)
    })), setTimeout((function() {
        $(".app-div").toggleClass("show")
    }), 2e3), setTimeout((function() {
        $(".app-div").toggleClass("show")
    }), 1e4), $(document).on("click", ".app-div .arrow", (function() {
        $(".app-div").hide()
    })), $(document).on("click", ".renewapolicymob", (function() {
        $(".renew-prd-blk").toggleClass("show1"), GA360EventPage("Top Navigation", "Renew a Policy", ""), $(".more-prd-base").fadeIn(300)
    }));
    navigator.userAgent;
    1 == (navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && navigator.vendor.toLowerCase().indexOf("google") > -1 ? "1" : "") ? $("html").addClass("webp") : $("html").addClass("no-webp"), imgInit(), /iPhone|iPad|iPod/i.test(navigator.userAgent) ? ($(".download-app1 .ios").show(), $(".download-app1 .googleplay").hide()) : ($(".download-app1 .googleplay").show(), $(".download-app1 .ios").hide()), /iPhone|iPad|iPod/i.test(navigator.userAgent) ? ($(".download-app1").addClass("app-store"), $(".download-app1").removeClass("play-store")) : ($(".download-app1").addClass("play-store"), $(".download-app1").removeClass("app-store")), "" == (c = utmSource) && (c = "direct"), $(".download-app").attr("href", "https://pbweb.onelink.me/4ChW?pid=" + c + "&c=home-app-pbff"), $(".install-now").attr("href", "https://pbweb.onelink.me/4ChW?pid=" + c + "&c=home-app-abff"), $(".noticeClick").click((function(t) {
        var o = $(window).width() < 480 ? 150 : 0,
            e = $("#noticeMassage").offset().top;
        $("body").animate({
            scrollTop: e - o
        }, 50), $("#return-to-top").show()
    })), $(document).on("click", ".mobile-banner-close", (function() {
        $(".ext-head").hide(), $(".txt-part").removeClass("mobilehide"), $(".txt-part").delay(300).fadeIn(300), setCookie("MobileBanner", "1", 0, "/", ".policybazaar.com", 0);
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: "homepage_save_tax",
                eventAction: "close",
                eventLabel: chkVariant
            })
        } catch (t) {}
    })), $(document).on("click", ".btn-row .view-plan", (function() {
        var t = " view all plans";
        2 == $(this).attr("data-stage") && (t = " Continue with this Plan"), 3 == $(this).attr("data-stage") && (t = " Proceed to Payment"), "Renew now" == $(this).attr("data-stage") ? GA360EventPage("Renewal Widget", "Renew now", $(this).attr("data-product") + " - " + $(this).attr("data-custid")) : GA360EventPage("Personalization", $(this).attr("data-product"), "Stage " + $(this).attr("data-stage") + t)
    })), setTimeout((function() {
        $(".app-div").toggleClass("show")
    }), 2e3), setTimeout((function() {
        $(".app-div").toggleClass("show")
    }), 1e4), $(document).on("click", ".app-div .arrow", (function() {
        $(".app-div").hide()
    }));
    var c;
    navigator.userAgent;
    1 == (navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && navigator.vendor.toLowerCase().indexOf("google") > -1 ? "1" : "") ? $("html").addClass("webp") : $("html").addClass("no-webp"), imgInit(), /iPhone|iPad|iPod/i.test(navigator.userAgent) ? ($(".download-app1 .ios").show(), $(".download-app1 .googleplay").hide()) : ($(".download-app1 .googleplay").show(), $(".download-app1 .ios").hide()), /iPhone|iPad|iPod/i.test(navigator.userAgent) ? ($(".download-app1").addClass("app-store"), $(".download-app1").removeClass("play-store")) : ($(".download-app1").addClass("play-store"), $(".download-app1").removeClass("app-store")), "" == (c = utmSource) && (c = "direct"), $(".download-app").attr("href", "https://pbweb.onelink.me/4ChW?pid=" + c + "&c=home-app-pbff"), $(".install-now").attr("href", "https://pbweb.onelink.me/4ChW?pid=" + c + "&c=home-app-abff"), $(".noticeClick").click((function(t) {
        var o = $(window).width() < 480 ? 150 : 0,
            e = $("#noticeMassage").offset().top;
        $("body").animate({
            scrollTop: e - o
        }, 50), $("#return-to-top").show()
    })), $("#return-to-top").click((function(t) {
        $("body").animate({
            scrollTop: 0
        }, 50), $("#return-to-top").hide()
    })), madeEasyShowHide(0), $(".moreProducts,.knowmoreSeo").click((function() {
        "More" == $(this).text() ? $(this).hasClass("np") ? ($(this).hide(), $(".restInsurance_icon .restInsurance_icon_band .sub-links").css("display", "inline-block")) : ($("body").addClass("stopScroll"), $("#moreMenu").addClass("open"), $(".row.seocontent.contentHide").hide(), $(".row.moreproductlink.contentHide").show()) : ($("body").addClass("stopScroll"), $("#moreMenu").addClass("open"), $(".row.seocontent.contentHide").show(), $(".row.moreproductlink.contentHide").hide())
    })), $(".close").click((function() {
        $("#moreMenu").removeClass("open"), $("body").removeClass("stopScroll")
    })), $(".testiMonialSlider").slick({
        infinite: !0,
        dots: !0,
        centerMode: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1015,
            settings: {
                arrows: !1,
                autoplay: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !0
            }
        }]
    }), $(".procards").slick({
        arrows: !1,
        autoplay: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        padding: 0,
        infinite: !0,
        dots: !0,
        responsive: [{
            breakpoint: 650,
            settings: {
                arrows: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                padding: 0,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 1015,
            settings: {
                arrows: !1,
                autoplay: !1,
                slidesToShow: 2,
                slidesToScroll: 2,
                padding: 0,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 1030,
            settings: {
                arrows: !1,
                autoplay: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                padding: 0,
                infinite: !0,
                dots: !0
            }
        }]
    }), $(".infoBannerslider").slick({
        dots: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 3e3,
        arrows: !1,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    try {
        $(".featurebanner").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: !0,
            autoplaySpeed: 3e3,
            dots: !0,
            infinite: !0,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: !1
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    centerMode: !0,
                    centerPadding: "0px"
                }
            }]
        })
    } catch (t) {}
    $(".close_panel").click((function() {
        $(".overflowHide").hide(200), $("body").css({
            overflow: "auto",
            position: "static",
            height: "auto"
        }), $("#menu_v3").removeAttr("style"), $(".sidebar").css({
            left: -275
        }), $("#humb_bg_menu").removeClass("active")
    }));
    try {
        $(window).scroll((function() {
            $(this).scrollTop() < (wheight <= 1024 ? 70 : 200) ? $("nav").removeClass("fixedh") : $("nav").addClass("fixedh")
        }))
    } catch (t) {}
    isNRI(), $(".center").slick({
        centerMode: !0,
        centerPadding: "100px",
        slidesToShow: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: !1,
                centerMode: !0,
                variableWidth: !0,
                centerPadding: "20px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                centerMode: !0,
                variableWidth: !0,
                centerPadding: "20px",
                slidesToShow: 1
            }
        }]
    }), $(".humberIcon").click((function(t) {
        $(".overlaybox").show(), $(".policynav").addClass("menuslide"), $("body").css({
            overflow: "hidden",
            position: "fixed",
            height: "100%"
        })
    })), $(".closenav,.overlaybox").click((function(t) {
        $(".overlaybox").hide(), $("body").removeAttr("style"), $(".policynav").removeClass("menuslide")
    })), $("#metismenu li ul").hide(), $("#metismenu li a.list_item").click((function(t) {
        var o = $(this);
        o.parent().children("ul").length > 0 && ($(this).parent("li").hasClass("active") ? ($("#metismenu li").removeClass("active"), $("#metismenu li ul").hide()) : ($("#metismenu li").removeClass("active"), o.parent().addClass("active"), $("#metismenu li ul").hide(), $("#metismenu li.active ul").show()))
    })), $("a").on("click", (function(t) {
        if ("" !== this.hash && "#license" !== this.hash && "#isnp" !== this.hash && "#security" !== this.hash) {
            t.preventDefault();
            var o = this.hash;
            $("html, body").animate({
                scrollTop: $(o).offset().top
            }, 800, (function() {
                window.location.hash = o
            }))
        }
    })), $(".knowmore").click((function() {
        $(".overlaybox").show(), $("body").css("overflow", "hidden");
        $(window).height();
        $(".seo_content_know_more").show()
    })), $(".seo_content_know_more .close,.overlaybox").on("click", (function() {
        $("body").removeAttr("style"), $(".overlaybox").hide("slow"), $(".seo_content_know_more").hide()
    }));
    var i = getCookie("pbcentrallogin");
    null != i && "undefined" != i && "" != i ? getCustomerTokenAndPolicy() : setTimeout((function() {
        $("main").hasClass("invert") && !chkMobile || getCustomerInfo()
    }), 2e3);
    var s = 0;
    $(document).on("click", ".mobile-sign.signin-dropdown.loggedin .signed", (function() {
        $(this).toggleClass("open"), $(".mobile_menu_aftersignin").toggleClass("open"), $(".mob-menu").hasClass("bg-white") || $(".mobile_menu_aftersignin").hasClass("open") ? $("body").addClass("overflow-hidden") : $("body").removeClass("overflow-hidden"), $("#menu-container .menu-list").removeClass("active"), $("#menu-container .menu-list").animate({
            left: "-100%"
        }, 400), $(".mob-menu").addClass("no-bg"), $("#hamburger-menu").removeClass("open")
    })), $(document).on("click", "#mobilemenu_signin, .signin-link", (function() {
        var t = getCookie("pbcentrallogin");
        topNavLoginGa("Signin"), (void 0 === t || "" == t || null == t && 0 == s) && setTimeout((function() {
            myModal.open()
        }), 1e3), s = 1
    })), $(document).on("click", ".popup-close", (function() {
        s = 0, $(".gethelp_pid").attr("data-linkfor", "")
    })), $(document).on("click", ".centrallogout", (function() {
        topNavLoginGa("Logout"), setCookie("pbcentrallogin", 0, "-0", "/", ".policybazaar.com", 1), setCookie("pbcjpreqd", 0, "-0", "/", ".policybazaar.com", 1), setCookie("pbcid", 0, "-0", "/", ".policybazaar.com", 1), clearLocalStorage(["https://myaccount.policybazaar.com", "https://myaccount.policybazaar.com"], (function() {
            var t = window.location.href;
            window.location.href = t.replace("#", "")
        }))
    })), $(document).on("click", ".country-flag", (function() {
        $(".search-flag").addClass("show"), $(".search-flag input").focus()
    })), $(document).on("focus", ".search-flag", (function() {
        $(".flags").css("width", $(".registration_check").width()), $(".flags").addClass("show"), $(this).focus()
    })), $(document).on("keyup", ".search-flag input", (function() {
        $("#result").html(""), $("#state").val("");
        var t = $(".search-flag input").val();
        if (/^[a-zA-Z]*$/.test(t)) {
            var o = new RegExp(t, "i"),
                e = '<div class="country-flag" id="country-ddp"><img loading="lazy" alt="india" src="https://myaccount.policybazaar.com/Content/countryIcon/in.svg" /></div><ul class="flags show">';
            $.each(CountryJson, (function(t, n) {
                -1 != n.Country.search(o) && (e += '<li><span class="country-flag"><img alt="' + n.Country + '" src="' + n.CountryIcon + '" /></span><div class="cname">' + n.Country + '</div><div class="code">+' + n.CountryCode + "</div></li>")
            })), e += '</ul><div class="cCode" id="country-code" data-country-code="91">+91</div>', $(".countybox").html(e)
        } else $(this).val("")
    })), $(document).on("click", ".flags.show li", (function() {
        var t = $(".country-flag img", this).attr("src"),
            o = $(".code", this).html();
        $("#country-code").html(o), $("#country-code").attr("data-country-code", parseInt(o)), $("#country-ddp img").attr("src", t), $(".flags").removeClass("show"), $(".search-flag").removeClass("show"), $("#getHelpInput").val("").focus(), clearError($(".getHelpMobNo"))
    })), $(document).on("click", ".getHelp", (function() {
        window.open(BASEURL + "need-help/", "_blank")
    })), $(document).on("click", ".getHelpClaim", (function() {
        var t = getCookie("pbcentrallogin");
        if ("" != LoggedCustId || null != t && "null" != t) divClass = $(this).attr("class"), claimRedirect(divClass);
        else {
            divClass = $(this).attr("class");
            var o = "";
            $(this).hasClass("new") && (o = '<div class="product-list claimpop" data-id="7" data-name="Term Insurance"> <div class="product-info"><span class="icon-bg term-life"></span><span class="text">Term<br>Insurance</span><span class="next"></span></div> </div>');
            var e = '<div class="get-help-intent-popup claim-modal"><div class="get-help-popup-content"><input type="hidden" name="gethelp_pid" class="gethelp_pid" data-name="" data-linkfor="' + divClass + '"><div class="help-product-wise claim"><div class="get-help-popup-content"><input type="hidden" name="gethelp_pid" class="gethelp_pid" data-name=""><div class="help-product-wise claim"><div class="heading">Select insurance type<div class="get-help-popup-close claimga" id="get-helpclaim-popup-close"></div></div><div class="product-item "><div class="product-list claimpop" data-id="117" data-name="Motor Insurance"><div class="product-info"><span class="icon-bg car-insurance"></span><span class="text">Motor<br>Insurance</span><span class="next"></span></div></div><div class="product-list claimpop " data-id="2" data-name="Health Insurance"><div class="product-info"><span class="icon-bg health-insurance"></span><span class="text">Health<br>Insurance</span><span class="next"></span></div></div>' + o + '</div></div></div></div><div class="login-product-wise claim hide"><div class="heading none"><div class="get-help-popup-close" id="get-help-popup-close"></div></div><div class="formbox"><div class="headingbox"><div class="left"><div class="heading-h2"></div><p class="text"></p></div><div class="right"></div></div><div class="auth-tab"><span class="custom-btn active hide" data-id="4"></span></div><div class="registration_check"><div class="formInput"><div class="countybox"></div><div class="search-flag"><div class="searchico"></div><input max-length="3" placeholder="Search"></div><input data-msg="Enter your mobile number." id="getHelpInput" autocomplete="new-mobno" inputmode="numeric" class="fullWidht getHelpInput getHelpMobNo labelshow" maxlength="10" actual-val="" minlength="10"><label class="feildLable mobN" for="termMobile">Registered mobile number</label></div><div class="err"></div></div><div class="loadingDiv"><div class="proceed" id="btnSubmitGetHelpClaim">Proceed</div><div id="loader" class="hide loaderProcess loading"><div class="wait-text">Please wait. We are processing..<div class="loader"></div></div></div></div></div></div><div class="authentication-check hide"><div class="heading none"><div class="get-help-popup-close" id="get-help-popup-close"></div></div><div class="formbox"><div class="headingbox"><div class="left"><div class="heading-h2">Please verify OTP</div><p class="text"></p></div><div class="right"></div></div><a href="javascript:void(0)" class="go_back_login gethelpback">Edit mobile number <img src="' + CDN_IMG_BASEURL + 'bu/verify-edit-icon.svg" alt="edit"></a><div class="verifyotp"><div class="mob-no">Please enter the OTP</div><div class="form"><div class="otp-box"><input inputmode="numeric" name="otpinput1" id="otpinput1" class="otp" maxlength="1" data-counter="1" type="text" autocomplete="off"><span class="dot"></span></div><div class="otp-box"><input inputmode="numeric" name="otpinput2" id="otpinput2" class="otp" maxlength="1" data-counter="2" type="text" autocomplete="off"><span class="dot"></span></div><div class="otp-box"><input inputmode="numeric" name="otpinput3" id="otpinput3" class="otp" maxlength="1" data-counter="3" type="text" autocomplete="off"><span class="dot"></span></div><div class="otp-box"><input inputmode="numeric" name="otpinput4" id="otpinput4" class="otp" maxlength="1" data-counter="4" type="text" autocomplete="off"><span class="dot"></span></div></div><div class="need-help">Didn\'t received the OTP yet? <a href="javascript:void(0)" class="gethelpresendotpClaim">Resend OTP</a></div><div class="otp-error"></div></div><div class="loadingDiv"><div class="proceed" id="btnSubmitVerifyOtpClaim">Verify OTP</div><div id="loader" class="hide loaderProcess loading"><div class="wait-text">Please wait. We are processing..<div class="loader"></div></div></div></div></div></div></div></div>';
            if ($(".get-help-popup-container").html(e).addClass("visible"), $(".get-help-intent-popup").length) {
                CountryJson = [{
                    CountryId: 392,
                    Country: "INDIA",
                    CountryCode: 91,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/in.svg"
                }, {
                    CountryId: 375,
                    Country: "UNITED ARAB EMIRATES",
                    CountryCode: 971,
                    TIMEZONE: 12,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ae.svg"
                }, {
                    CountryId: 24,
                    Country: "AUSTRALIA",
                    CountryCode: 61,
                    TIMEZONE: 1,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/au.svg"
                }, {
                    CountryId: 35,
                    Country: "BAHRAIN",
                    CountryCode: 973,
                    TIMEZONE: 2,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bh.svg"
                }, {
                    CountryId: 164,
                    Country: "INDONESIA",
                    CountryCode: 62,
                    TIMEZONE: 5,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/id.svg"
                }, {
                    CountryId: 187,
                    Country: "KUWAIT",
                    CountryCode: 965,
                    TIMEZONE: 9,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/kw.svg"
                }, {
                    CountryId: 217,
                    Country: "MALAYSIA",
                    CountryCode: 60,
                    TIMEZONE: 10,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/my.svg"
                }, {
                    CountryId: 271,
                    Country: "OMAN",
                    CountryCode: 968,
                    TIMEZONE: 12,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/om.svg"
                }, {
                    CountryId: 288,
                    Country: "QATAR",
                    CountryCode: 974,
                    TIMEZONE: 2,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/qa.svg"
                }, {
                    CountryId: 308,
                    Country: "SAUDI ARABIA",
                    CountryCode: 966,
                    TIMEZONE: 2,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sa.svg"
                }, {
                    CountryId: 313,
                    Country: "SINGAPORE",
                    CountryCode: 65,
                    TIMEZONE: 13,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sg.svg"
                }, {
                    CountryId: 376,
                    Country: "UNITED KINGDOM",
                    CountryCode: 44,
                    TIMEZONE: 14,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gb.svg"
                }, {
                    CountryId: 378,
                    Country: "USA/CANADA",
                    CountryCode: 1,
                    TIMEZONE: 3,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/us.svg"
                }, {
                    CountryId: 1,
                    Country: "AFGHANISTAN",
                    CountryCode: 93,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/af.svg"
                }, {
                    CountryId: 2,
                    Country: "AFRICAN REP-SPECIAL",
                    CountryCode: 61,
                    TIMEZONE: 15,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/afr.svg"
                }, {
                    CountryId: 5,
                    Country: "ALBANIA",
                    CountryCode: 355,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/al.svg"
                }, {
                    CountryId: 6,
                    Country: "ALGERIA",
                    CountryCode: 213,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/dz.svg"
                }, {
                    CountryId: 8,
                    Country: "AMERICAN SAMOA",
                    CountryCode: 1684,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/as.svg"
                }, {
                    CountryId: 10,
                    Country: "ANDORRA",
                    CountryCode: 376,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ad.svg"
                }, {
                    CountryId: 11,
                    Country: "ANGOLA",
                    CountryCode: 244,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ao.svg"
                }, {
                    CountryId: 12,
                    Country: "ANGUILLA",
                    CountryCode: 1264,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ai.svg"
                }, {
                    CountryId: 13,
                    Country: "ANTARCTICA",
                    CountryCode: 6721,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 14,
                    Country: "ANTIGUA & BARBUDA",
                    CountryCode: 1268,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ag.svg"
                }, {
                    CountryId: 15,
                    Country: "ANTILLES NETHERLANDS",
                    CountryCode: 599,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/ant.svg"
                }, {
                    CountryId: 16,
                    Country: "ARGENTINA",
                    CountryCode: 54,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ar.svg"
                }, {
                    CountryId: 17,
                    Country: "ARMENIA",
                    CountryCode: 374,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/am.svg"
                }, {
                    CountryId: 21,
                    Country: "ARUBA",
                    CountryCode: 297,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/aw.svg"
                }, {
                    CountryId: 22,
                    Country: "ASCENSION ISLAND",
                    CountryCode: 247,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/asc.svg"
                }, {
                    CountryId: 23,
                    Country: "ATLANTIC WEST (SAT)",
                    CountryCode: 874,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 26,
                    Country: "AUSTRIA",
                    CountryCode: 43,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/at.svg"
                }, {
                    CountryId: 33,
                    Country: "AZERBAIJAN",
                    CountryCode: 994,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/az.svg"
                }, {
                    CountryId: 34,
                    Country: "BAHAMAS",
                    CountryCode: 1242,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bs.svg"
                }, {
                    CountryId: 36,
                    Country: "BANGLADESH",
                    CountryCode: 880,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bd.svg"
                }, {
                    CountryId: 37,
                    Country: "BARBADOS",
                    CountryCode: 1246,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bb.svg"
                }, {
                    CountryId: 40,
                    Country: "BELARUS",
                    CountryCode: 375,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/by.svg"
                }, {
                    CountryId: 41,
                    Country: "BELGIUM",
                    CountryCode: 32,
                    TIMEZONE: 16,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/be.svg"
                }, {
                    CountryId: 44,
                    Country: "BELIZE",
                    CountryCode: 501,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bz.svg"
                }, {
                    CountryId: 45,
                    Country: "BENIN",
                    CountryCode: 229,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bj.svg"
                }, {
                    CountryId: 46,
                    Country: "BERMUDA",
                    CountryCode: 1441,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bm.svg"
                }, {
                    CountryId: 47,
                    Country: "BHUTAN",
                    CountryCode: 975,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bt.svg"
                }, {
                    CountryId: 48,
                    Country: "BOLIVIA",
                    CountryCode: 591,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bo.svg"
                }, {
                    CountryId: 50,
                    Country: "BOSNIA",
                    CountryCode: 387,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ba.svg"
                }, {
                    CountryId: 51,
                    Country: "BOTSWANA",
                    CountryCode: 267,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bw.svg"
                }, {
                    CountryId: 52,
                    Country: "BRAZIL",
                    CountryCode: 55,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/br.svg"
                }, {
                    CountryId: 54,
                    Country: "BRITISH VIRGIN ISLAND",
                    CountryCode: 1284,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 55,
                    Country: "BRUNEI",
                    CountryCode: 673,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bn.svg"
                }, {
                    CountryId: 57,
                    Country: "BULGARIA",
                    CountryCode: 359,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bg.svg"
                }, {
                    CountryId: 59,
                    Country: "BURKINA FASSO",
                    CountryCode: 226,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bf.svg"
                }, {
                    CountryId: 60,
                    Country: "BURUNDI",
                    CountryCode: 257,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/bi.svg"
                }, {
                    CountryId: 61,
                    Country: "CAMBODIA",
                    CountryCode: 855,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/kh.svg"
                }, {
                    CountryId: 62,
                    Country: "CAMEROON",
                    CountryCode: 237,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cm.svg"
                }, {
                    CountryId: 63,
                    Country: "CANADA",
                    CountryCode: 1867,
                    TIMEZONE: 3,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ca.svg"
                }, {
                    CountryId: 64,
                    Country: "CAPE VERDE ISLAND",
                    CountryCode: 238,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/cap.svg"
                }, {
                    CountryId: 65,
                    Country: "CAYMAN ISLAND",
                    CountryCode: 1345,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ky.svg"
                }, {
                    CountryId: 66,
                    Country: "CENTRAL AFRICAN REP",
                    CountryCode: 236,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cf.svg"
                }, {
                    CountryId: 69,
                    Country: "CHAD(REPUBLIC)",
                    CountryCode: 235,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/td.svg"
                }, {
                    CountryId: 70,
                    Country: "CHILE",
                    CountryCode: 56,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cl.svg"
                }, {
                    CountryId: 72,
                    Country: "CHINA",
                    CountryCode: 86,
                    TIMEZONE: 17,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cn.svg"
                }, {
                    CountryId: 73,
                    Country: "COLOMBIA",
                    CountryCode: 57,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/co.svg"
                }, {
                    CountryId: 74,
                    Country: "COMOROS",
                    CountryCode: 269,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/km.svg"
                }, {
                    CountryId: 75,
                    Country: "CONGO PEOPLES REPUBL",
                    CountryCode: 242,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/cpr.svg"
                }, {
                    CountryId: 77,
                    Country: "COOK ISLAND",
                    CountryCode: 682,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ck.svg"
                }, {
                    CountryId: 78,
                    Country: "COST RICA",
                    CountryCode: 506,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cr.svg"
                }, {
                    CountryId: 79,
                    Country: "CROATIA",
                    CountryCode: 385,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/hr.svg"
                }, {
                    CountryId: 83,
                    Country: "CUBA",
                    CountryCode: 53,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cu.svg"
                }, {
                    CountryId: 86,
                    Country: "CYPRUS",
                    CountryCode: 357,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cy.svg"
                }, {
                    CountryId: 89,
                    Country: "CZECH",
                    CountryCode: 420,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cz.svg"
                }, {
                    CountryId: 91,
                    Country: "DEM. REP. OF CONGO",
                    CountryCode: 243,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/cd.svg"
                }, {
                    CountryId: 92,
                    Country: "DENMARK",
                    CountryCode: 45,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/dk.svg"
                }, {
                    CountryId: 96,
                    Country: "DIEGO GARCIA",
                    CountryCode: 246,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/die.svg"
                }, {
                    CountryId: 97,
                    Country: "DJIBOUTI",
                    CountryCode: 253,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/dji.svg"
                }, {
                    CountryId: 98,
                    Country: "DOMINICA",
                    CountryCode: 1767,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/dm.svg"
                }, {
                    CountryId: 99,
                    Country: "DOMINICA REP",
                    CountryCode: 1829,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/do.svg"
                }, {
                    CountryId: 101,
                    Country: "EGYPT",
                    CountryCode: 20,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/eg.svg"
                }, {
                    CountryId: 102,
                    Country: "EL SALVADOR REPUBLIC",
                    CountryCode: 503,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sv.svg"
                }, {
                    CountryId: 103,
                    Country: "EQUADOR",
                    CountryCode: 593,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ec.svg"
                }, {
                    CountryId: 104,
                    Country: "EQUATORIAL GUINEA",
                    CountryCode: 240,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gq.svg"
                }, {
                    CountryId: 105,
                    Country: "ERITREA",
                    CountryCode: 291,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/er.svg"
                }, {
                    CountryId: 108,
                    Country: "ESTONIA",
                    CountryCode: 372,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ee.svg"
                }, {
                    CountryId: 109,
                    Country: "ETHIOPIA",
                    CountryCode: 251,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/et.svg"
                }, {
                    CountryId: 110,
                    Country: "FAEROE",
                    CountryCode: 298,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/fo.svg"
                }, {
                    CountryId: 111,
                    Country: "FALKLAND ISLAND",
                    CountryCode: 500,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 112,
                    Country: "FIJI",
                    CountryCode: 679,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/fj.svg"
                }, {
                    CountryId: 113,
                    Country: "FINLAND",
                    CountryCode: 358,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/fi.svg"
                }, {
                    CountryId: 117,
                    Country: "FRANCE",
                    CountryCode: 33,
                    TIMEZONE: 16,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/fr.svg"
                }, {
                    CountryId: 123,
                    Country: "FRENCH GUYANA",
                    CountryCode: 594,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gf.svg"
                }, {
                    CountryId: 124,
                    Country: "FRENCH POLYNESIA",
                    CountryCode: 689,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pf.svg"
                }, {
                    CountryId: 125,
                    Country: "GABON",
                    CountryCode: 241,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ga.svg"
                }, {
                    CountryId: 126,
                    Country: "GAMBIA",
                    CountryCode: 220,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gm.svg"
                }, {
                    CountryId: 127,
                    Country: "GEORGIA",
                    CountryCode: 995,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ge.svg"
                }, {
                    CountryId: 132,
                    Country: "GERMANY",
                    CountryCode: 49,
                    TIMEZONE: 23,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/de.svg"
                }, {
                    CountryId: 137,
                    Country: "GHANA",
                    CountryCode: 233,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gh.svg"
                }, {
                    CountryId: 139,
                    Country: "GIBRALTER",
                    CountryCode: 350,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gi.svg"
                }, {
                    CountryId: 140,
                    Country: "GREECE",
                    CountryCode: 30,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gr.svg"
                }, {
                    CountryId: 144,
                    Country: "GREENLAND",
                    CountryCode: 299,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gl.svg"
                }, {
                    CountryId: 145,
                    Country: "GRENADA",
                    CountryCode: 1473,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gd.svg"
                }, {
                    CountryId: 146,
                    Country: "GUADELOUPE",
                    CountryCode: 590,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gp.svg"
                }, {
                    CountryId: 147,
                    Country: "GUAM",
                    CountryCode: 671,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gu.svg"
                }, {
                    CountryId: 148,
                    Country: "GUATEMALA",
                    CountryCode: 502,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gt.svg"
                }, {
                    CountryId: 149,
                    Country: "GUINEA BISSAU REPUBLIC",
                    CountryCode: 245,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gw.svg"
                }, {
                    CountryId: 150,
                    Country: "GUINEA REPUBLIC",
                    CountryCode: 224,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/gui.svg"
                }, {
                    CountryId: 151,
                    Country: "GUYANA REPUBLIC",
                    CountryCode: 592,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/gy.svg"
                }, {
                    CountryId: 152,
                    Country: "HAITI REPUBLIC",
                    CountryCode: 509,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ht.svg"
                }, {
                    CountryId: 153,
                    Country: "HONDURAS REPUBLIC",
                    CountryCode: 504,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/hn.svg"
                }, {
                    CountryId: 154,
                    Country: "HONGKONG",
                    CountryCode: 852,
                    TIMEZONE: 22,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/hk.svg"
                }, {
                    CountryId: 155,
                    Country: "HUNGARY",
                    CountryCode: 36,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/hu.svg"
                }, {
                    CountryId: 161,
                    Country: "ICELAND",
                    CountryCode: 354,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/is.svg"
                }, {
                    CountryId: 162,
                    Country: "IMMERSAT",
                    CountryCode: 882,
                    TIMEZONE: 6,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 165,
                    Country: "IRAN",
                    CountryCode: 98,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ir.svg"
                }, {
                    CountryId: 166,
                    Country: "IRAQ",
                    CountryCode: 964,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/iq.svg"
                }, {
                    CountryId: 167,
                    Country: "IRELAND",
                    CountryCode: 353,
                    TIMEZONE: 15,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ie.svg"
                }, {
                    CountryId: 172,
                    Country: "ISRAEL",
                    CountryCode: 972,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/il.svg"
                }, {
                    CountryId: 173,
                    Country: "ITALY",
                    CountryCode: 39,
                    TIMEZONE: 23,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/it.svg"
                }, {
                    CountryId: 177,
                    Country: "IVORY COAST",
                    CountryCode: 225,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/ivo.svg"
                }, {
                    CountryId: 179,
                    Country: "JAMAICA",
                    CountryCode: 1876,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/jm.svg"
                }, {
                    CountryId: 180,
                    Country: "JAPAN",
                    CountryCode: 81,
                    TIMEZONE: 7,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/jp.svg"
                }, {
                    CountryId: 181,
                    Country: "JORDAN",
                    CountryCode: 962,
                    TIMEZONE: 24,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/jo.svg"
                }, {
                    CountryId: 182,
                    Country: "KAZAKHSTAN",
                    CountryCode: 77,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/kz.svg"
                }, {
                    CountryId: 184,
                    Country: "KENYA REPUBLIC",
                    CountryCode: 254,
                    TIMEZONE: 8,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ke.svg"
                }, {
                    CountryId: 186,
                    Country: "KIRIBATI",
                    CountryCode: 686,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ki.svg"
                }, {
                    CountryId: 189,
                    Country: "KYRGYZSTAN ",
                    CountryCode: 996,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/kg.svg"
                }, {
                    CountryId: 192,
                    Country: "LAOS",
                    CountryCode: 856,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/la.svg"
                }, {
                    CountryId: 193,
                    Country: "LATVIA",
                    CountryCode: 371,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/lv.svg"
                }, {
                    CountryId: 195,
                    Country: "LEBANON",
                    CountryCode: 961,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/lb.svg"
                }, {
                    CountryId: 196,
                    Country: "LESOTHO",
                    CountryCode: 266,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ls.svg"
                }, {
                    CountryId: 198,
                    Country: "LIBERIA REPUBLIC",
                    CountryCode: 231,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/lr.svg"
                }, {
                    CountryId: 199,
                    Country: "LIBYA",
                    CountryCode: 218,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ly.svg"
                }, {
                    CountryId: 202,
                    Country: "LIECHTENSTEIN",
                    CountryCode: 423,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/li.svg"
                }, {
                    CountryId: 206,
                    Country: "LITHUANIA",
                    CountryCode: 370,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/lt.svg"
                }, {
                    CountryId: 209,
                    Country: "LUXEMBOURG",
                    CountryCode: 352,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/lu.svg"
                }, {
                    CountryId: 210,
                    Country: "MACAU",
                    CountryCode: 853,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mo.svg"
                }, {
                    CountryId: 211,
                    Country: "MACEDONIA",
                    CountryCode: 389,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mk.svg"
                }, {
                    CountryId: 215,
                    Country: "MADAGASCAR",
                    CountryCode: 261,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mg.svg"
                }, {
                    CountryId: 216,
                    Country: "MALAWI",
                    CountryCode: 265,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mw.svg"
                }, {
                    CountryId: 218,
                    Country: "MALDIVES",
                    CountryCode: 960,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mv.svg"
                }, {
                    CountryId: 219,
                    Country: "MALI REPUBLIC",
                    CountryCode: 223,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ml.svg"
                }, {
                    CountryId: 222,
                    Country: "MALTA",
                    CountryCode: 356,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mt.svg"
                }, {
                    CountryId: 223,
                    Country: "MARIANA ISLAND",
                    CountryCode: 670,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/mar.svg"
                }, {
                    CountryId: 224,
                    Country: "MARISAT",
                    CountryCode: 873,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 225,
                    Country: "MARISAT ATLANTIC",
                    CountryCode: 870,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 226,
                    Country: "MARISAT PACIFIC",
                    CountryCode: 872,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 227,
                    Country: "MARSHAL ISLAND",
                    CountryCode: 692,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mh.svg"
                }, {
                    CountryId: 228,
                    Country: "MARTINIQUE",
                    CountryCode: 596,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mq.svg"
                }, {
                    CountryId: 229,
                    Country: "MAURITANIA",
                    CountryCode: 222,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mr.svg"
                }, {
                    CountryId: 230,
                    Country: "MAURITIUS",
                    CountryCode: 230,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mu.svg"
                }, {
                    CountryId: 231,
                    Country: "MEXICO",
                    CountryCode: 52,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mx.svg"
                }, {
                    CountryId: 232,
                    Country: "MICRONESIA (FEDERAL)",
                    CountryCode: 691,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/mic.svg"
                }, {
                    CountryId: 234,
                    Country: "MOLDOVA",
                    CountryCode: 373,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/md.svg"
                }, {
                    CountryId: 237,
                    Country: "MONACO",
                    CountryCode: 377,
                    TIMEZONE: 23,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mc.svg"
                }, {
                    CountryId: 238,
                    Country: "MONGOLIA",
                    CountryCode: 976,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mn.svg"
                }, {
                    CountryId: 239,
                    Country: "MONTSERRAT",
                    CountryCode: 1664,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ms.svg"
                }, {
                    CountryId: 240,
                    Country: "MOROCCO",
                    CountryCode: 212,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ma.svg"
                }, {
                    CountryId: 241,
                    Country: "MOZAMBIQUE",
                    CountryCode: 258,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mz.svg"
                }, {
                    CountryId: 243,
                    Country: "MYANMAR",
                    CountryCode: 95,
                    TIMEZONE: 18,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/mm.svg"
                }, {
                    CountryId: 244,
                    Country: "NAMIBIA",
                    CountryCode: 264,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/na.svg"
                }, {
                    CountryId: 245,
                    Country: "NAURU",
                    CountryCode: 674,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/nr.svg"
                }, {
                    CountryId: 246,
                    Country: "NEPAL",
                    CountryCode: 977,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/np.svg"
                }, {
                    CountryId: 247,
                    Country: "NETHERLANDS",
                    CountryCode: 31,
                    TIMEZONE: 16,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/nl.svg"
                }, {
                    CountryId: 254,
                    Country: "NEW ZEALAND",
                    CountryCode: 64,
                    TIMEZONE: 19,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/nz.svg"
                }, {
                    CountryId: 257,
                    Country: "NICARAGUA",
                    CountryCode: 505,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ni.svg"
                }, {
                    CountryId: 260,
                    Country: "NIGER REPUBLIC",
                    CountryCode: 227,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ne.svg"
                }, {
                    CountryId: 262,
                    Country: "NIGERIA",
                    CountryCode: 234,
                    TIMEZONE: 11,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ng.svg"
                }, {
                    CountryId: 263,
                    Country: "NIUE ISLAND",
                    CountryCode: 683,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/nu.svg"
                }, {
                    CountryId: 264,
                    Country: "NORFOLK ISLAND",
                    CountryCode: 672,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/nf.svg"
                }, {
                    CountryId: 265,
                    Country: "NORTH KOREA",
                    CountryCode: 850,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/kp.svg"
                }, {
                    CountryId: 266,
                    Country: "NORWAY",
                    CountryCode: 47,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/no.svg"
                }, {
                    CountryId: 273,
                    Country: "PAKISTAN",
                    CountryCode: 92,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pk.svg"
                }, {
                    CountryId: 274,
                    Country: "PALAU",
                    CountryCode: 680,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pw.svg"
                }, {
                    CountryId: 275,
                    Country: "PALESTINE",
                    CountryCode: 970,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/pal.svg"
                }, {
                    CountryId: 276,
                    Country: "PANAMA",
                    CountryCode: 507,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pa.svg"
                }, {
                    CountryId: 277,
                    Country: "PAPUA- NEW-GUINEA",
                    CountryCode: 675,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pg.svg"
                }, {
                    CountryId: 278,
                    Country: "PARAGUAY",
                    CountryCode: 595,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/py.svg"
                }, {
                    CountryId: 279,
                    Country: "PERU",
                    CountryCode: 51,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pe.svg"
                }, {
                    CountryId: 280,
                    Country: "PHILIPPINES",
                    CountryCode: 63,
                    TIMEZONE: 21,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ph.svg"
                }, {
                    CountryId: 281,
                    Country: "POLAND",
                    CountryCode: 48,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pl.svg"
                }, {
                    CountryId: 285,
                    Country: "PORTUGAL",
                    CountryCode: 351,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pt.svg"
                }, {
                    CountryId: 286,
                    Country: "PUERTO RICO",
                    CountryCode: 1787,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/pr.svg"
                }, {
                    CountryId: 289,
                    Country: "ROMANIA",
                    CountryCode: 40,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ro.svg"
                }, {
                    CountryId: 293,
                    Country: "RUNION ISLAND",
                    CountryCode: 262,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/run.svg"
                }, {
                    CountryId: 294,
                    Country: "RUSSIA",
                    CountryCode: 7,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ru.svg"
                }, {
                    CountryId: 299,
                    Country: "RWANDA REPUBLIC",
                    CountryCode: 250,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/rw.svg"
                }, {
                    CountryId: 300,
                    Country: "SAIPAN",
                    CountryCode: 1670,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 302,
                    Country: "SAMOA AMERICAN",
                    CountryCode: 684,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/sam.svg"
                }, {
                    CountryId: 303,
                    Country: "SAMOA WESTERN",
                    CountryCode: 685,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ws.svg"
                }, {
                    CountryId: 305,
                    Country: "SAN MARINO",
                    CountryCode: 378,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sm.svg"
                }, {
                    CountryId: 306,
                    Country: "SAOTOME PRINCIPE ISL",
                    CountryCode: 239,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/st.svg"
                }, {
                    CountryId: 307,
                    Country: "SATELLITE",
                    CountryCode: 883,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 309,
                    Country: "SENEGAL",
                    CountryCode: 221,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sn.svg"
                }, {
                    CountryId: 311,
                    Country: "SEYCHELLES",
                    CountryCode: 248,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sc.svg"
                }, {
                    CountryId: 312,
                    Country: "SIERRA LEONE",
                    CountryCode: 232,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sl.svg"
                }, {
                    CountryId: 315,
                    Country: "SLOVAKIA",
                    CountryCode: 421,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sk.svg"
                }, {
                    CountryId: 318,
                    Country: "SLOVENIA",
                    CountryCode: 386,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/si.svg"
                }, {
                    CountryId: 319,
                    Country: "SOLOMON ISLAND",
                    CountryCode: 677,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sb.svg"
                }, {
                    CountryId: 320,
                    Country: "SOMALIA",
                    CountryCode: 252,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/so.svg"
                }, {
                    CountryId: 321,
                    Country: "SOUTH AFRICA",
                    CountryCode: 27,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/za.svg"
                }, {
                    CountryId: 322,
                    Country: "SOUTH KOREA",
                    CountryCode: 82,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/kr.svg"
                }, {
                    CountryId: 323,
                    Country: "SOUTH SUDAN",
                    CountryCode: 211,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ss.svg"
                }, {
                    CountryId: 324,
                    Country: "SPAIN",
                    CountryCode: 34,
                    TIMEZONE: 16,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/es.svg"
                }, {
                    CountryId: 328,
                    Country: "SRI LANKA",
                    CountryCode: 94,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/lk.svg"
                }, {
                    CountryId: 329,
                    Country: "ST MAARTEN-ROC-",
                    CountryCode: 1721,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/stp.svg"
                }, {
                    CountryId: 330,
                    Country: "ST PIERRE & MIQUELON",
                    CountryCode: 508,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }, {
                    CountryId: 331,
                    Country: "ST. DENIS",
                    CountryCode: 282,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/std.svg"
                }, {
                    CountryId: 332,
                    Country: "ST. HELENA",
                    CountryCode: 290,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/sth.svg"
                }, {
                    CountryId: 333,
                    Country: "ST. KITTS & NEVIS",
                    CountryCode: 1869,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/stk.svg"
                }, {
                    CountryId: 334,
                    Country: "ST. LUCIA",
                    CountryCode: 1758,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/stl.svg"
                }, {
                    CountryId: 335,
                    Country: "ST.VINCENT & GRENADI",
                    CountryCode: 1784,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/stv.svg"
                }, {
                    CountryId: 336,
                    Country: "SUDAN DEMO. REP",
                    CountryCode: 249,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sd.svg"
                }, {
                    CountryId: 338,
                    Country: "SURINAM REPUBLIC",
                    CountryCode: 597,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sr.svg"
                }, {
                    CountryId: 339,
                    Country: "SWAZILAND",
                    CountryCode: 268,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sz.svg"
                }, {
                    CountryId: 340,
                    Country: "SWEDEN",
                    CountryCode: 46,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/se.svg"
                }, {
                    CountryId: 345,
                    Country: "SWITZERLAND",
                    CountryCode: 41,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ch.svg"
                }, {
                    CountryId: 349,
                    Country: "SYRIA",
                    CountryCode: 963,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/sy.svg"
                }, {
                    CountryId: 350,
                    Country: "TAIWAN",
                    CountryCode: 886,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tw.svg"
                }, {
                    CountryId: 351,
                    Country: "TAJIKISTAN",
                    CountryCode: 992,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tj.svg"
                }, {
                    CountryId: 354,
                    Country: "TANZANIA",
                    CountryCode: 255,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tz.svg"
                }, {
                    CountryId: 355,
                    Country: "THAILAND",
                    CountryCode: 66,
                    TIMEZONE: 20,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/th.svg"
                }, {
                    CountryId: 356,
                    Country: "TOGO LESE REP",
                    CountryCode: 228,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/tog.svg"
                }, {
                    CountryId: 358,
                    Country: "TOKELAU",
                    CountryCode: 690,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tk.svg"
                }, {
                    CountryId: 359,
                    Country: "TONGA",
                    CountryCode: 676,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/to.svg"
                }, {
                    CountryId: 360,
                    Country: "TRINIDAD & TOBAGO",
                    CountryCode: 1868,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tt.svg"
                }, {
                    CountryId: 361,
                    Country: "TUNISIA",
                    CountryCode: 216,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tn.svg"
                }, {
                    CountryId: 362,
                    Country: "TURKEY",
                    CountryCode: 90,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tr.svg"
                }, {
                    CountryId: 366,
                    Country: "TURKMENISTAN",
                    CountryCode: 993,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tm.svg"
                }, {
                    CountryId: 367,
                    Country: "TURKS & CAUCUS",
                    CountryCode: 1649,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tc.svg"
                }, {
                    CountryId: 368,
                    Country: "TUVALU",
                    CountryCode: 688,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/tv.svg"
                }, {
                    CountryId: 369,
                    Country: "UGANDA",
                    CountryCode: 256,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ug.svg"
                }, {
                    CountryId: 372,
                    Country: "UKRAINE",
                    CountryCode: 380,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ua.svg"
                }, {
                    CountryId: 377,
                    Country: "URUGUAY",
                    CountryCode: 598,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/uy.svg"
                }, {
                    CountryId: 379,
                    Country: "UZBEKISTAN",
                    CountryCode: 998,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/uz.svg"
                }, {
                    CountryId: 382,
                    Country: "VANUATU NEW HEBRIDES",
                    CountryCode: 678,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/vu.svg"
                }, {
                    CountryId: 383,
                    Country: "VENEZUELA",
                    CountryCode: 58,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ve.svg"
                }, {
                    CountryId: 384,
                    Country: "VIETNAM",
                    CountryCode: 84,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/vn.svg"
                }, {
                    CountryId: 385,
                    Country: "WALLIS & FUTUNA",
                    CountryCode: 681,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/wf.svg"
                }, {
                    CountryId: 386,
                    Country: "YEMEN",
                    CountryCode: 967,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/ye.svg"
                }, {
                    CountryId: 387,
                    Country: "YUGOSLAVIA",
                    CountryCode: 381,
                    TIMEZONE: 0,
                    CountryIcon: "https://static.pbcdn.in/myaccount-cdn/images/countyflags/yug.svg"
                }, {
                    CountryId: 389,
                    Country: "ZAMBIA",
                    CountryCode: 260,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/zm.svg"
                }, {
                    CountryId: 390,
                    Country: "ZIMBABWE",
                    CountryCode: 263,
                    TIMEZONE: 0,
                    CountryIcon: "https://myaccount.policybazaar.com/Content/countryIcon/zw.svg"
                }, {
                    CountryId: 999,
                    Country: "Other",
                    CountryCode: 0,
                    TIMEZONE: 0,
                    CountryIcon: CDN_IMG_BASEURL + "flag/flagna.svg"
                }];
                var n = '<div class="country-flag" id="country-ddp"><img loading="lazy" alt="india" src="https://myaccount.policybazaar.com/Content/countryIcon/in.svg" /></div><ul class="flags">';
                $.each(CountryJson, (function(t, o) {
                    n += '<li><span class="country-flag"><img alt="' + o.Country + '" src="' + o.CountryIcon + '" /></span><div class="cname">' + o.Country + '</div><div class="code">+' + o.CountryCode + "</div></li>"
                })), n += '</ul><div class="cCode" id="country-code" data-country-code="91">+91</div>', $(".countybox").html(n)
            }
            $("body").addClass("stopscroll")
        }
    })), $(document).on("click", ".get-help-popup-close", (function() {
        $(".get-help-popup-container").removeClass("visible"), $(".get-help-popup-container").html(""), $("body").removeClass("stopscroll"), popclaim = $(this).attr("class"), popclaim.includes("claimga") ? GA360EventPage("claim", "close", "") : GA360EventPage("get help", "close", "")
    })), $(document).on("click", ".gethelpback", (function() {
        $(".login-product-wise").removeClass("hide"), $(".authentication-check").addClass("hide"), $(".otp-error").html(""), $(".otp").html(""), GA360EventPage("get help", "back", "")
    })), $(document).on("click", ".help-product-wise .product-item .product-list", (function() {
        var t = $(this).attr("data-id"),
            o = $(this).attr("data-name");
        o = o.toLowerCase(), $(".gethelp_pid").val(t), $(".gethelp_pid").attr("data-name", o), $(".login-product-wise .heading-h2").html("Need help with your " + o + " policy?"), 117 == t || 114 == t || 139 == t ? ($(".regTab").removeClass("hide"), $(".login-product-wise .headingbox .text").html("Please provide your Mobile/Policy/Vehicle registration number")) : ($(".regTab").addClass("hide"), $(".login-product-wise .headingbox .text").html("Please provide your Mobile/Policy number")), $(".login-product-wise").removeClass("hide"), $(".help-product-wise").addClass("hide"), divClass = $(this).attr("class"), divClass.includes("claim") || GA360EventPage("get help", "select insurance type", o)
    })), $(document).on("click", ".claimpop", (function() {
        var t = getCookie("pbcentrallogin");
        7 != (o = $(this).attr("data-id")) && topNavLoginGa("Signin");
        $(this);
        if (void 0 === t || "" == t || null == t && 0 == s) {
            $(".get-help-popup-container").removeClass("visible");
            var o = $(this).attr("data-id"),
                e = $(this).attr("data-name");
            e && (e = e.toLowerCase()), $(".gethelp_pid").val(o), $(".gethelp_pid").attr("data-name", e);
            var n = $(".gethelp_pid").attr("data-linkfor");
            n.includes("new") ? gatext = "file a new claim" : n.includes("already") ? gatext = "Claim is already filed with the Insurer" : n.includes("track") && (gatext = "Track existing claim"), GA360EventPage(gatext, "select insurance type", e), setTimeout((function() {
                n.includes("new") && 7 == o ? window.top.location.href = "https://termclaim.policybazaar.com/" : myModal.open()
            }), 1e3)
        }
    })), $(document).on("click", ".auth-tab .custom-btn", (function() {
        var t = parseInt($(".auth-tab .custom-btn .active").attr("data-id")),
            o = parseInt($(this).attr("data-id"));
        if (o == t) return !1;
        $(".registration_check .err").html(""), $(this).parents(".auth-tab").find(".active").removeClass("active"), $(this).addClass("active"), $(".registration_check .formInput").addClass("hide"), $(".registration_check .formInput").eq(o - 1).removeClass("hide")
    })), $(document).on("click", "#btnSubmitGetHelp", (function() {
        try {
            var t = $(".getHelpInput"),
                o = $.trim($(".getHelpInput").val()),
                e = parseInt($(".auth-tab .active").attr("data-id")),
                n = "Mobile",
                a = o.length,
                r = !0,
                c = 'Edit mobile number <img src="' + CDN_IMG_BASEURL + 'bu/verify-edit-icon.svg" alt="edit">';
            switch (e) {
                case 1:
                    n = "Mobile no";
                    var i = {
                        task: "gethelpdetailwithmob",
                        getHelpInput: o,
                        cCode: $(".cCode").attr("data-country-code"),
                        PType: e
                    };
                    t = $(".getHelpMobNo"), a = (o = $(".getHelpMobNo").val()).length;
                    c = 'Edit mobile number <img src="' + CDN_IMG_BASEURL + 'bu/verify-edit-icon.svg" alt="edit">';
                    break;
                case 2:
                    n = "Registration no";
                    t = $(".getHelpRegistrationNo"), a = (o = $(".getHelpRegistrationNo").val()).length, i = {
                        task: "gethelpdetail",
                        getHelpInput: o,
                        PType: e
                    };
                    c = 'Edit registration number <img src="' + CDN_IMG_BASEURL + 'bu/verify-edit-icon.svg" alt="edit">';
                    break;
                case 3:
                    n = "Policy no";
                    t = $(".getHelpPolicyNo"), a = (o = $(".getHelpPolicyNo").val()).length, i = {
                        task: "gethelpdetail",
                        getHelpInput: o,
                        PType: e
                    };
                    c = 'Edit policy number <img src="' + CDN_IMG_BASEURL + 'bu/verify-edit-icon.svg" alt="edit">'
            }
            if (GA360EventPage("get help", "proceed", n), 1 == e) {
                var s = $(".cCode"),
                    d = t.attr("minlength"),
                    u = t.attr("maxlength");
                "" == o || "91" != s.attr("data-country-code") || validmobile(o) ? "" != o && !onlyNumber(o) || a < d || a > u ? (r = !1, addError(t, "Please enter valid mobile number")) : ($(".registration_check .err").html(""), $(".getHelpInput").addClass("labelshow"), clearError(t)) : (r = !1, addError(t, "Please enter valid mobile number"))
            } else 2 == e ? "" == o ? (r = !1, addError(t, "Please enter valid registration number")) : chkRegNum(t) ? ($(".registration_check .err").html(""), $(".getHelpInput").addClass("labelshow"), clearError(t)) : (r = !1, addError(t, "Please enter valid registration number")) : 3 == e && ("" == o ? (r = !1, addError(t, "Please enter policy no")) : ($(".registration_check .err").html(""), $(".getHelpInput").addClass("labelshow"), clearError(t)));
            r && $.ajax({
                url: BASEURL + "services/commonservice.php",
                type: "POST",
                cache: !1,
                data: i,
                beforeSend: function() {
                    response_country_code = "", response_mobile_no = "", $(".login-product-wise #btnSubmitGetHelp").addClass("hide"), $(".login-product-wise .loaderProcess").removeClass("hide"), $(".login-product-wise .auth-tab").addClass("disable")
                },
                success: function(t) {
                    "" != t ? (t = JSON.parse(t)).statusMsg ? ($(".login-product-wise").addClass("hide"), $(".authentication-check").removeClass("hide"), $(".verifyotp .mob-no").html("Please enter the OTP"), response_country_code = t.countryCode, response_mobile_no = t.Mobile, "" != t.Mobile && $(".authentication-check .headingbox .text").html(t.otpMsg), $(".go_back_login").html(c)) : $(".registration_check .err").html(t) : $(".registration_check .err").html("There is some issue, Please try after sometime");
                    $(".login-product-wise #btnSubmitGetHelp").removeClass("hide"), $(".login-product-wise .loaderProcess").addClass("hide"), $(".login-product-wise .auth-tab").removeClass("disable")
                }
            })
        } catch (t) {}
    }));
    var d = [];
    $(document).on("keyup", ".verifyotp input[type=text]", (function(t) {
        if (!/^[0-9]*$/.test($(this).val())) return $(this).val(""), void $(this).removeClass("labelshow");
        $(".verifyotp input[type=text]").each((function(t) {
            d[t] = $(".verifyotp input[type=text]")[t].value, $("#verificationCode").val(Number(d.join("")))
        })), "" != $(this).val() && ($(this).addClass("labelshow"), 1 != t.key && 2 != t.key && 3 != t.key && 4 != t.key && 5 != t.key && 6 != t.key && 7 != t.key && 8 != t.key && 9 != t.key && 0 != t.key || $(this).parent().next().find("input").focus())
    })), $(document).on("click", "#btnSubmitVerifyOtp", (function() {
        try {
            var t = $("#otpinput1").val() + $("#otpinput2").val() + $("#otpinput3").val() + $("#otpinput4").val(),
                o = response_country_code,
                e = response_mobile_no;
            if (GA360EventPage("get help", "Verify OTP", ""), "" != t && "" != o && "" != e) {
                var n = {
                    task: "gethelpverifyotp",
                    otp: t,
                    cCode: o,
                    mobileno: e
                };
                $.ajax({
                    url: BASEURL + "services/commonservice.php",
                    type: "POST",
                    cache: !1,
                    data: n,
                    beforeSend: function() {
                        $(".authentication-check #btnSubmitVerifyOtp").addClass("hide"), $(".authentication-check .loaderProcess").removeClass("hide")
                    },
                    success: function(t) {
                        if ("" != t) {
                            if ("success" == (t = JSON.parse(t)).statusMsg) {
                                var o = t.data.lstCookiesDetails;
                                $.each(o, (function(t, o) {
                                    setCookie(o.CookieKey, o.CookieValue, o.CookieDuration, "/", ".policybazaar.com", 0)
                                })), redirectUrl = "/policies/" + $(".gethelp_pid").val();
                                var e = "https://myaccount.policybazaar.com/MyAccount/Login?redirection=" + redirectUrl;
                                return window.top.location.href = e, !0
                            }
                            $(".otp-error").html(t.Message)
                        }
                        $(".authentication-check #btnSubmitVerifyOtp").removeClass("hide"), $(".authentication-check .loaderProcess").addClass("hide")
                    }
                })
            } else $(".otp-error").html("Please enter OTP")
        } catch (t) {}
    })), $(document).on("click", ".gethelpresendotp", (function() {
        try {
            $(".getHelpInput");
            var t = $(".getHelpInput").val(),
                o = parseInt($(".auth-tab .active").attr("data-id"));
            t.length;
            switch (GA360EventPage("get help", "resend OTP", ""), o) {
                case 1:
                    var e = {
                        task: "gethelpdetailwithmob",
                        getHelpInput: t,
                        cCode: $(".cCode").attr("data-country-code"),
                        PType: o
                    };
                    $(".getHelpMobNo"), (t = $(".getHelpMobNo").val()).length;
                    break;
                case 2:
                    $(".getHelpRegistrationNo"), (t = $(".getHelpRegistrationNo").val()).length, e = {
                        task: "gethelpdetail",
                        getHelpInput: t,
                        PType: o
                    };
                    break;
                case 3:
                    $(".getHelpPolicyNo"), (t = $(".getHelpPolicyNo").val()).length, e = {
                        task: "gethelpdetail",
                        getHelpInput: t,
                        PType: o
                    }
            }
            $.ajax({
                url: BASEURL + "services/commonservice.php",
                type: "POST",
                cache: !1,
                data: e,
                beforeSend: function() {
                    response_country_code = "", response_mobile_no = "", $(".verifyotp .mob-no").addClass("loading").html("Please wait.."), $(".verifyotp .need-help").html(""), $(".otp-error").html(""), $(".otp").val("").removeClass("labelshow")
                },
                success: function(t) {
                    "" != t && ((t = JSON.parse(t)).statusMsg && ($(".verifyotp .mob-no").removeClass("loading").html("Please enter the OTP"), response_country_code = t.countryCode, response_mobile_no = t.Mobile, $(".verifyotp .need-help").html('Didn\'t received the OTP yet? <a href="javascript:void(0)" class="gethelpresendotp">Resend OTP</a>')))
                }
            })
        } catch (t) {}
    })), $(document).on("blur", ".getHelpMobNo", fncInvMobile), $(document).on("keyup", ".getHelpRegistrationNo", fncMobRegistration), $(document).on("keyup", ".getHelpPolicyNo", fncMobPolicy)
})), fncInvMobile = function() {
    if (/^[0-9]*$/.test($(this).val())) {
        parentId = "";
        var t = $(parentId + ".cCode");
        $(this).attr("minlength"), $(this).attr("maxlength"), $(this).val().length;
        $(parentId + ".getHelpMobNo").addClass("labelshow"), ("" == $(this).val() || "91" != t.attr("data-country-code") || validmobile($(this).val())) && ("" == $(this).val() || onlyNumber($(this).val())) ? (clearError($(this)), $(this).addClass("labelshow")) : (addError($(this), "Please enter valid mobile number"), $(this).addClass("labelshow"))
    } else $(this).val("")
}, fncMobRegistration = function() {
    /^[0-9a-zA-Z]*$/.test($(this).val()) || $(this).val("")
}, fncMobPolicy = function() {
    /^[0-9a-zA-Z-/_]*$/.test($(this).val()) || $(this).val("")
}, $(window).on("load", (function() {
    $(".content-diwali").attr("style", "background-image:url(" + CDN_IMG_BASEURL + "bu/happy-diwali.gif)"), $(".shadeexpert").hover((function() {
        GA360EventPage("Top Navigation", "Talk to expert open", "")
    }), (function() {
        GA360EventPage("Top Navigation", "Talk to expert close", "")
    })), setTimeout((function() {
        $(".main-container").addClass("diwali")
    }), 2e3)
})), $(document).ready((function() {
    setTimeout((function() {
        $(".content-diwali").addClass("fade-diwali")
    }), 6e3), setTimeout((function() {
        $(".app-div").toggleClass("show")
    }), 2e3), setTimeout((function() {
        $(".app-div").toggleClass("show")
    }), 1e4), $(document).on("click", ".app-div .arrow", (function() {
        $(".app-div").hide()
    })), $(document).on("click", ".app-div .arrow", (function() {
        $(".app-div").hide()
    })), $(document).on("click", ".takltoexpert-mobile-menu", (function() {
        $(".talktoexpert-mobile-backdrop").addClass("fade-and-in"), $(".talktoexpert-mobile").addClass("fade-and-in"), GA360EventPage("Top Navigation", "Talk to expert open", "")
    })), $(document).on("click", ".talktoexpert-mobile-card .close", (function() {
        $(".talktoexpert-mobile-backdrop").removeClass("fade-and-in"), $(".talktoexpert-mobile").removeClass("fade-and-in"), GA360EventPage("Top Navigation", "Talk to expert close", "")
    })), $(document).on("click", ".card-view .healthrenewnow", (function() {
        var t = $(this).attr("data-productid"),
            o = $(this).attr("data-supplierid"),
            e = $(this).attr("data-continueid"),
            n = $(this).attr("data-bookingid");
        "" != t && null != t && "" != o && null != o && "" != e && null != e && "" != n && null != n && getRenewalUrl(t, o, e, n)
    })), $(".view-all-prd, .see-more").click((function() {
        $(".more-prd-blk").fadeIn(), $(".more-prd-base").fadeIn(), $("body").addClass("oh")
    })), $(".close-more-prd").click((function() {
        $(".more-prd-blk").fadeOut(), $(".more-prd-base").fadeOut(), $("body").removeClass("oh")
    })), $(window).width() <= 1023 && ($(".view-all-prd, .see-more").click((function() {
        $(".more-prd-blk").animate({
            top: "10%"
        }, 200), $(".more-prd-base").addClass("show", "10000"), $("body").addClass("oh")
    })), $(".close-small").click((function() {
        $(".more-prd-blk").animate({
            top: "110%"
        }, 200), $(".more-prd-base").fadeOut(), $("body").removeClass("oh")
    })), $(".close-small-renew").click((function() {
        $(".more-prd-blk").animate({
            top: "110%"
        }, 200), $(".renew-prd-blk").toggleClass("show1"), $(".more-prd-base").fadeOut(), $("body").removeClass("oh")
    }))), $(".add").addClass("short"), $(".testimonial-new").on("init", (function() {
        $(".slick-current").prev().removeClass("nextdiv").addClass("prevdiv"), $(".slick-current").next().removeClass("prevdiv").addClass("nextdiv")
    })), $(".testimonial-new").slick({
        centerMode: !1,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: !0,
        infinite: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: !0,
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: !1,
                centerPadding: "0px",
                arrows: !1
            }
        }, {
            breakpoint: 580,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: "40px",
                slidesToShow: 1,
                arrows: !1
            }
        }]
    }).on("beforeChange", (function() {
        $(".block").removeClass("prevdiv"), $(".block").removeClass("nextdiv")
    })).on("afterChange", (function() {
        $(".slick-current").prev().removeClass("nextdiv").addClass("prevdiv"), $(".slick-current").next().removeClass("prevdiv").addClass("nextdiv")
    })), $(".slide-stories").slick({
        centerMode: !1,
        centerPadding: "0px",
        slidesToShow: 1,
        dots: !1,
        infinite: !1,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "100px",
                slidesToShow: 1,
                dots: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                centerMode: !0,
                centerPadding: "40px",
                slidesToShow: 1,
                arrows: !1,
                dots: !0
            }
        }]
    }).on("beforeChange", (function() {
        $(".block").removeClass("prevdiv"), $(".block").removeClass("nextdiv")
    })).on("afterChange", (function() {
        $(".slick-current").prev().removeClass("nextdiv").addClass("prevdiv"), $(".slick-current").next().removeClass("prevdiv").addClass("nextdiv")
    })), $(".responsive").on("init", (function() {
        $(".slick-current").prev().removeClass("nextdiv").addClass("prevdiv"), $(".slick-current").next().removeClass("prevdiv").addClass("nextdiv")
    })), $(".responsive").slick({
        centerMode: !1,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !0,
        infinite: !0,
        autoplay: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: !0,
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: !1,
                centerPadding: "0px",
                arrows: !1,
                infinite: !0,
                autoplay: !0
            }
        }, {
            breakpoint: 580,
            settings: {
                centerPadding: "0",
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0
            }
        }]
    }).on("beforeChange", (function() {
        $(".block").removeClass("prevdiv"), $(".block").removeClass("nextdiv")
    })).on("afterChange", (function() {
        $(".slick-current").prev().removeClass("nextdiv").addClass("prevdiv"), $(".slick-current").next().removeClass("prevdiv").addClass("nextdiv")
    }));
    var t = 0;
    ! function o() {
        var e, n = $(".mySlides"),
            a = $(".dotswarpper .dot");
        for (e = 0; e < n.length; e++) n.eq(e).removeClass("showItem");
        t++, $(".dotswarpper").addClass("show"), t > n.length && (t = 1);
        for (e = 0; e < a.length; e++) a.eq(e).removeClass("active");
        n.eq(t - 1).addClass("showItem"), a.eq(t - 1).addClass("active"), setTimeout(o, 8e3)
    }(), $(".dotswarpper .dot").click((function() {
        $(".dotswarpper .dot").removeClass("active"), $(this).addClass("active");
        var t = $(this).data();
        $(".mySlides").removeClass("showItem"), $("[data-img=" + t.index + "]").addClass("showItem")
    })), $(".slide-investor").slick({
        centerMode: !1,
        centerPadding: "0px",
        dots: !1,
        infinite: !1,
        autoplay: !0,
        arrows: !1,
        autoplaySpeed: 0,
        speed: 1e4,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: !1,
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 2,
                dots: !1
            }
        }, {
            breakpoint: 481,
            settings: {
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 1,
                arrows: !1,
                dots: !1
            }
        }]
    }), $(document).on("click", ".track-click-event", (function(t) {
        try {
            dataLayer.push({
                event: "eventTracking",
                eventCategory: $(this).attr("data-category"),
                eventAction: $(this).attr("data-action"),
                eventLabel: $(this).attr("data-title")
            })
        } catch (t) {}
    }))
})), $(".left .know-more").click((function() {
    $(".pb-promise-popup-web").fadeIn(), $(".pb-promise-popup-overlay-web").fadeIn(), $("body").addClass("oh");
    try {
        dataLayer.push({
            event: "eventTracking",
            eventCategory: "Pb-Promise",
            eventAction: "know more",
            eventLabel: ""
        })
    } catch (t) {}
})), $(".pb-promise-popup-web-close").click((function() {
    $(".pb-promise-popup-web").fadeOut(), $(".pb-promise-popup-overlay-web").fadeOut(), $("body").removeClass("oh");
    try {
        dataLayer.push({
            event: "eventTracking",
            eventCategory: "Pb-Promise",
            eventAction: "close",
            eventLabel: ""
        })
    } catch (t) {}
})), $(".pb-promise-popup-mobile .inner-block .close").click((function() {
    $(".pb-promise-popup-mobile").fadeOut(), $(".pb-promise-popup-mobile").addClass("h0"), $(".pb-promise-popup-overlay-mobile").fadeOut(), $("body").removeClass("oh");
    try {
        dataLayer.push({
            event: "eventTracking",
            eventCategory: "Pb-Promise",
            eventAction: "close",
            eventLabel: ""
        })
    } catch (t) {}
})), currencyConvert = function(t) {
    if (t > 1) {
        var o = (t = t.toString()).substring(t.length - 3),
            e = t.substring(0, t.length - 3);
        return "" != e && (o = "," + o), e.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + o
    }
    return t
}, chkRegNum = function(t) {
    var o = $.trim(t.val());
    return o = o.toUpperCase(), t.val(o), !!checkRegistrationNumber(o)
};