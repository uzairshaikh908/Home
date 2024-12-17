"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2476, 5760], {
        29665: function(e, i, o) {
            o.d(i, {
                G: function() {
                    return l
                }
            });
            var t = o(97336);
            let l = e => {
                var i;
                let {
                    searchParams: o,
                    payload: l,
                    leadDetails: d,
                    step: s,
                    campaignDetails: a,
                    withCJData: n = !0
                } = e, r = structuredClone(l), u = o.isApp || 0;
                return delete r.AgeRange, delete r.IsPEDCovered, delete r.IsMaternityCovered, delete r.NoofLivesRangeId, delete r.FamilyDefinition, delete r.IsHome, void 0 === r || null == r || (r && (null == r ? void 0 : r.VisitLogID) && (r.VisitLogId = r.VisitLogID), delete r.VisitLogID, (r && (null == r ? void 0 : r.VisitLogId) == "" || "string" == typeof(null == r ? void 0 : r.VisitLogId)) && r.VisitLogId, r.MobileNo && delete r.MaskedMobileNo, r.MobileNo || (r.MobileNo = 0), r.LeadPageURL = window.location.href, r.LeadPageSource = 2, r.LeadPageType = 0, (null == r ? void 0 : null === (i = r.Headers) || void 0 === i ? void 0 : i.UtmDetails) && (r.Headers.UtmDetails.isApp = Number(u)), u && (r.isApp = 1 == u), o.token && (r.LeadPageSource = 5), n && (r = (0, t.x)({
                    payload: r,
                    leadDetails: d,
                    step: s,
                    campaignDetails: a
                }))), r
            }
        }
    }
]);