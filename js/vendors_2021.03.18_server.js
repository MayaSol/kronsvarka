! function(t) { "function" == typeof define && define.amd ? define("inputmask", ["inputmask.dependencyLib"], t) : "object" == typeof exports ? module.exports = t(require("./inputmask.dependencyLib")) : t(window.dependencyLib || jQuery) }(function(t) {
    function e(o, s) { return this instanceof e ? (t.isPlainObject(o) ? s = o : (s = s || {}, s.alias = o), this.el = void 0, this.opts = t.extend(!0, {}, this.defaults, s), this.maskset = void 0, this.noMasksCache = s && void 0 !== s.definitions, this.userOptions = s || {}, this.events = {}, this.dataAttribute = "data-inputmask", this.isRTL = this.opts.numericInput, void i(this.opts.alias, s, this.opts)) : new e(o, s) }

    function i(e, o, s) { var n = s.aliases[e]; return n ? (n.alias && i(n.alias, void 0, s), t.extend(!0, s, n), t.extend(!0, s, o), !0) : (null === s.mask && (s.mask = e), !1) }

    function o(i, o) {
        function s(i, s, n) {
            if (null !== i && "" !== i) {
                if (1 === i.length && n.greedy === !1 && 0 !== n.repeat && (n.placeholder = ""), n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                    var a = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                    i = n.groupmarker.start + i + n.groupmarker.end + n.quantifiermarker.start + a + "," + n.repeat + n.quantifiermarker.end
                }
                var r;
                return void 0 === e.prototype.masksCache[i] || o === !0 ? (r = { mask: i, maskToken: e.prototype.analyseMask(i, n), validPositions: {}, _buffer: void 0, buffer: void 0, tests: {}, metadata: s, maskLength: void 0 }, o !== !0 && (e.prototype.masksCache[n.numericInput ? i.split("").reverse().join("") : i] = r, r = t.extend(!0, {}, e.prototype.masksCache[n.numericInput ? i.split("").reverse().join("") : i]))) : r = t.extend(!0, {}, e.prototype.masksCache[n.numericInput ? i.split("").reverse().join("") : i]), r
            }
        }
        var n;
        if (t.isFunction(i.mask) && (i.mask = i.mask(i)), t.isArray(i.mask)) { if (i.mask.length > 1) { i.keepStatic = null === i.keepStatic || i.keepStatic; var a = i.groupmarker.start; return t.each(i.numericInput ? i.mask.reverse() : i.mask, function(e, o) { a.length > 1 && (a += i.groupmarker.end + i.alternatormarker + i.groupmarker.start), a += void 0 === o.mask || t.isFunction(o.mask) ? o : o.mask }), a += i.groupmarker.end, s(a, i.mask, i) } i.mask = i.mask.pop() }
        return i.mask && (n = void 0 === i.mask.mask || t.isFunction(i.mask.mask) ? s(i.mask, i.mask, i) : s(i.mask.mask, i.mask, i)), n
    }

    function s(i, o, n) {
        function h(t, e, i) {
            e = e || 0;
            var o, s, a, r = [],
                l = 0,
                c = u();
            W = void 0 !== V ? V.maxLength : void 0, W === -1 && (W = void 0);
            do t === !0 && p().validPositions[l] ? (a = p().validPositions[l], s = a.match, o = a.locator.slice(), r.push(i === !0 ? a.input : i === !1 ? s.nativeDef : I(l, s))) : (a = _(l, o, l - 1), s = a.match, o = a.locator.slice(), (n.jitMasking === !1 || l < c || "number" == typeof n.jitMasking && isFinite(n.jitMasking) && n.jitMasking > l) && r.push(i === !1 ? s.nativeDef : I(l, s))), l++; while ((void 0 === W || l < W) && (null !== s.fn || "" !== s.def) || e > l);
            return "" === r[r.length - 1] && r.pop(), p().maskLength = l + 1, r
        }

        function p() { return o }

        function d(t) {
            var e = p();
            e.buffer = void 0, t !== !0 && (e._buffer = void 0, e.validPositions = {}, e.p = 0)
        }

        function u(t, e, i) {
            var o = -1,
                s = -1,
                n = i || p().validPositions;
            void 0 === t && (t = -1);
            for (var a in n) {
                var r = parseInt(a);
                n[r] && (e || null !== n[r].match.fn) && (r <= t && (o = r), r >= t && (s = r))
            }
            return o !== -1 && t - o > 1 || s < t ? o : s
        }

        function f(e, i, o, s) {
            function a(t) {
                var e = p().validPositions[t];
                if (void 0 !== e && null === e.match.fn) {
                    var i = p().validPositions[t - 1],
                        o = p().validPositions[t + 1];
                    return void 0 !== i && void 0 !== o
                }
                return !1
            }
            var r, l = e,
                c = t.extend(!0, {}, p().validPositions),
                h = !1;
            for (p().p = e, r = i - 1; r >= l; r--) void 0 !== p().validPositions[r] && (o !== !0 && (!p().validPositions[r].match.optionality && a(r) || n.canClearPosition(p(), r, u(), s, n) === !1) || delete p().validPositions[r]);
            for (d(!0), r = l + 1; r <= u();) {
                for (; void 0 !== p().validPositions[l];) l++;
                if (r < l && (r = l + 1), void 0 === p().validPositions[r] && E(r)) r++;
                else {
                    var f = _(r);
                    h === !1 && c[l] && c[l].match.def === f.match.def ? (p().validPositions[l] = t.extend(!0, {}, c[l]), p().validPositions[l].input = f.input, delete p().validPositions[r], r++) : g(l, f.match.def) ? P(l, f.input || I(r), !0) !== !1 && (delete p().validPositions[r], r++, h = !0) : E(r) || (r++, l--), l++
                }
            }
            d(!0)
        }

        function m(t, e) { for (var i, o = t, s = u(), a = p().validPositions[s] || k(0)[0], r = void 0 !== a.alternation ? a.locator[a.alternation].toString().split(",") : [], l = 0; l < o.length && (i = o[l], !(i.match && (n.greedy && i.match.optionalQuantifier !== !0 || (i.match.optionality === !1 || i.match.newBlockMarker === !1) && i.match.optionalQuantifier !== !0) && (void 0 === a.alternation || a.alternation !== i.alternation || void 0 !== i.locator[a.alternation] && C(i.locator[a.alternation].toString().split(","), r))) || e === !0 && (null !== i.match.fn || /[0-9a-bA-Z]/.test(i.match.def))); l++); return i }

        function _(t, e, i) { return p().validPositions[t] || m(k(t, e ? e.slice() : e, i)) }

        function v(t) { return p().validPositions[t] ? p().validPositions[t] : k(t)[0] }

        function g(t, e) {
            for (var i = !1, o = k(t), s = 0; s < o.length; s++)
                if (o[s].match && o[s].match.def === e) { i = !0; break } return i
        }

        function k(e, i, o) {
            function s(i, o, a, r) {
                function c(a, r, d) {
                    function m(e, i) { var o = 0 === t.inArray(e, i.matches); return o || t.each(i.matches, function(t, s) { if (s.isQuantifier === !0 && (o = m(e, i.matches[t - 1]))) return !1 }), o }

                    function v(e, i, o) {
                        var s, n;
                        return (p().tests[e] || p().validPositions[e]) && t.each(p().tests[e] || [p().validPositions[e]], function(t, e) {
                            var a = void 0 !== o ? o : e.alternation,
                                r = void 0 !== e.locator[a] ? e.locator[a].toString().indexOf(i) : -1;
                            (void 0 === n || r < n) && r !== -1 && (s = e, n = r)
                        }), s ? s.locator.slice((void 0 !== o ? o : s.alternation) + 1) : void 0 !== o ? v(e, i) : void 0
                    }

                    function g(t, i) { return null === t.match.fn && null !== i.match.fn && i.match.fn.test(t.match.def, p(), e, !1, n, !1) }
                    if (h > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + p().mask;
                    if (h === e && void 0 === a.matches) return u.push({ match: a, locator: r.reverse(), cd: _ }), !0;
                    if (void 0 !== a.matches) {
                        if (a.isGroup && d !== a) { if (a = c(i.matches[t.inArray(a, i.matches) + 1], r)) return !0 } else if (a.isOptional) {
                            var k = a;
                            if (a = s(a, o, r, d)) {
                                if (l = u[u.length - 1].match, !m(l, k)) return !0;
                                f = !0, h = e
                            }
                        } else if (a.isAlternator) {
                            var b, y = a,
                                x = [],
                                w = u.slice(),
                                C = r.length,
                                P = o.length > 0 ? o.shift() : -1;
                            if (P === -1 || "string" == typeof P) {
                                var E, T = h,
                                    M = o.slice(),
                                    $ = [];
                                if ("string" == typeof P) $ = P.split(",");
                                else
                                    for (E = 0; E < y.matches.length; E++) $.push(E);
                                for (var S = 0; S < $.length; S++) {
                                    if (E = parseInt($[S]), u = [], o = v(h, E, C) || M.slice(), a = c(y.matches[E] || i.matches[E], [E].concat(r), d) || a, a !== !0 && void 0 !== a && $[$.length - 1] < y.matches.length) {
                                        var I = t.inArray(a, i.matches) + 1;
                                        i.matches.length > I && (a = c(i.matches[I], [I].concat(r.slice(1, r.length)), d), a && ($.push(I.toString()), t.each(u, function(t, e) { e.alternation = r.length - 1 })))
                                    }
                                    b = u.slice(), h = T, u = [];
                                    for (var F = 0; F < b.length; F++) {
                                        var O = b[F],
                                            A = !1;
                                        O.alternation = O.alternation || C;
                                        for (var D = 0; D < x.length; D++) { var j = x[D]; if (("string" != typeof P || t.inArray(O.locator[O.alternation].toString(), $) !== -1) && (O.match.def === j.match.def || g(O, j))) { A = O.match.nativeDef === j.match.nativeDef, O.alternation == j.alternation && j.locator[j.alternation].toString().indexOf(O.locator[O.alternation]) === -1 && (j.locator[j.alternation] = j.locator[j.alternation] + "," + O.locator[O.alternation], j.alternation = O.alternation, null == O.match.fn && (j.na = j.na || O.locator[O.alternation].toString(), j.na.indexOf(O.locator[O.alternation]) === -1 && (j.na = j.na + "," + O.locator[O.alternation]))); break } } A || x.push(O)
                                    }
                                }
                                "string" == typeof P && (x = t.map(x, function(e, i) {
                                    if (isFinite(i)) {
                                        var o, s = e.alternation,
                                            n = e.locator[s].toString().split(",");
                                        e.locator[s] = void 0, e.alternation = void 0;
                                        for (var a = 0; a < n.length; a++) o = t.inArray(n[a], $) !== -1, o && (void 0 !== e.locator[s] ? (e.locator[s] += ",", e.locator[s] += n[a]) : e.locator[s] = parseInt(n[a]), e.alternation = s);
                                        if (void 0 !== e.locator[s]) return e
                                    }
                                })), u = w.concat(x), h = e, f = u.length > 0, o = M.slice()
                            } else a = c(y.matches[P] || i.matches[P], [P].concat(r), d);
                            if (a) return !0
                        } else if (a.isQuantifier && d !== i.matches[t.inArray(a, i.matches) - 1])
                            for (var L = a, B = o.length > 0 ? o.shift() : 0; B < (isNaN(L.quantifier.max) ? B + 1 : L.quantifier.max) && h <= e; B++) { var N = i.matches[t.inArray(L, i.matches) - 1]; if (a = c(N, [B].concat(r), N)) { if (l = u[u.length - 1].match, l.optionalQuantifier = B > L.quantifier.min - 1, m(l, N)) { if (B > L.quantifier.min - 1) { f = !0, h = e; break } return !0 } return !0 } } else if (a = s(a, o, r, d)) return !0
                    } else h++
                }
                for (var d = o.length > 0 ? o.shift() : 0; d < i.matches.length; d++)
                    if (i.matches[d].isQuantifier !== !0) { var m = c(i.matches[d], [d].concat(a), r); if (m && h === e) return m; if (h > e) break }
            }

            function a(e) {
                var i = [];
                return t.isArray(e) || (e = [e]), e.length > 0 && (void 0 === e[0].alternation ? (i = m(e.slice()).locator.slice(), 0 === i.length && (i = e[0].locator.slice())) : t.each(e, function(t, e) {
                    if ("" !== e.def)
                        if (0 === i.length) i = e.locator.slice();
                        else
                            for (var o = 0; o < i.length; o++) e.locator[o] && i[o].toString().indexOf(e.locator[o]) === -1 && (i[o] += "," + e.locator[o])
                })), i
            }

            function r(t) { return n.keepStatic && e > 0 && t.length > 1 + ("" === t[t.length - 1].match.def ? 1 : 0) && t[0].match.optionality !== !0 && t[0].match.optionalQuantifier !== !0 && null === t[0].match.fn && !/[0-9a-bA-Z]/.test(t[0].match.def) ? [m(t)] : t }
            var l, c = p().maskToken,
                h = i ? o : 0,
                d = i ? i.slice() : [0],
                u = [],
                f = !1,
                _ = i ? i.join("") : "";
            if (e > -1) {
                if (void 0 === i) {
                    for (var v, g = e - 1; void 0 === (v = p().validPositions[g] || p().tests[g]) && g > -1;) g--;
                    void 0 !== v && g > -1 && (d = a(v), _ = d.join(""), h = g)
                }
                if (p().tests[e] && p().tests[e][0].cd === _) return r(p().tests[e]);
                for (var k = d.shift(); k < c.length; k++) { var b = s(c[k], d, [k]); if (b && h === e || h > e) break }
            }
            return (0 === u.length || f) && u.push({ match: { fn: null, cardinality: 0, optionality: !0, casing: null, def: "", placeholder: "" }, locator: [], cd: _ }), void 0 !== i && p().tests[e] ? r(t.extend(!0, [], u)) : (p().tests[e] = t.extend(!0, [], u), r(p().tests[e]))
        }

        function b() { return void 0 === p()._buffer && (p()._buffer = h(!1, 1), void 0 === p().buffer && p()._buffer.slice()), p()._buffer }

        function y(t) { return void 0 !== p().buffer && t !== !0 || (p().buffer = h(!0, u(), !0)), p().buffer }

        function x(t, e, i) {
            var o;
            if (t === !0) d(), t = 0, e = i.length;
            else
                for (o = t; o < e; o++) delete p().validPositions[o];
            for (o = t; o < e; o++) d(!0), i[o] !== n.skipOptionalPartCharacter && P(o, i[o], !0, !0)
        }

        function w(t, i, o) {
            switch (n.casing || i.casing) {
                case "upper":
                    t = t.toUpperCase();
                    break;
                case "lower":
                    t = t.toLowerCase();
                    break;
                case "title":
                    var s = p().validPositions[o - 1];
                    t = 0 === o || s && s.input === String.fromCharCode(e.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase()
            }
            return t
        }

        function C(e, i) {
            for (var o = n.greedy ? i : i.slice(0, 1), s = !1, a = 0; a < e.length; a++)
                if (t.inArray(e[a], o) !== -1) { s = !0; break } return s
        }

        function P(i, o, s, a, r) {
            function l(t) { var e = q ? t.begin - t.end > 1 || t.begin - t.end === 1 && n.insertMode : t.end - t.begin > 1 || t.end - t.begin === 1 && n.insertMode; return e && 0 === t.begin && t.end === p().maskLength ? "full" : e }

            function c(e, o, s) {
                var r = !1;
                return t.each(k(e), function(c, h) {
                    for (var m = h.match, _ = o ? 1 : 0, v = "", g = m.cardinality; g > _; g--) v += $(e - (g - 1));
                    if (o && (v += o), y(!0), r = null != m.fn ? m.fn.test(v, p(), e, s, n, l(i)) : (o === m.def || o === n.skipOptionalPartCharacter) && "" !== m.def && { c: m.placeholder || m.def, pos: e }, r !== !1) {
                        var k = void 0 !== r.c ? r.c : o;
                        k = k === n.skipOptionalPartCharacter && null === m.fn ? m.placeholder || m.def : k;
                        var C = e,
                            E = y();
                        if (void 0 !== r.remove && (t.isArray(r.remove) || (r.remove = [r.remove]), t.each(r.remove.sort(function(t, e) { return e - t }), function(t, e) { f(e, e + 1, !0) })), void 0 !== r.insert && (t.isArray(r.insert) || (r.insert = [r.insert]), t.each(r.insert.sort(function(t, e) { return t - e }), function(t, e) { P(e.pos, e.c, !0, a) })), r.refreshFromBuffer) { var T = r.refreshFromBuffer; if (s = !0, x(T === !0 ? T : T.start, T.end, E), void 0 === r.pos && void 0 === r.c) return r.pos = u(), !1; if (C = void 0 !== r.pos ? r.pos : e, C !== e) return r = t.extend(r, P(C, k, !0, a)), !1 } else if (r !== !0 && void 0 !== r.pos && r.pos !== e && (C = r.pos, x(e, C, y().slice()), C !== e)) return r = t.extend(r, P(C, k, !0)), !1;
                        return (r === !0 || void 0 !== r.pos || void 0 !== r.c) && (c > 0 && d(!0), b(C, t.extend({}, h, { input: w(k, m, C) }), a, l(i)) || (r = !1), !1)
                    }
                }), r
            }

            function h(e, i, o) {
                var s, r, l, c, h, f, m, _, v = t.extend(!0, {}, p().validPositions),
                    g = !1,
                    b = u();
                for (c = p().validPositions[b]; b >= 0; b--)
                    if (l = p().validPositions[b], l && void 0 !== l.alternation) {
                        if (s = b, r = p().validPositions[s].alternation, c.locator[l.alternation] !== l.locator[l.alternation]) break;
                        c = l
                    } if (void 0 !== r) {
                    _ = parseInt(s);
                    var y = void 0 !== c.locator[c.alternation || r] ? c.locator[c.alternation || r] : m[0];
                    y.length > 0 && (y = y.split(",")[0]);
                    var x = p().validPositions[_],
                        w = p().validPositions[_ - 1];
                    t.each(k(_, w ? w.locator : void 0, _ - 1), function(s, l) {
                        m = l.locator[r] ? l.locator[r].toString().split(",") : [];
                        for (var c = 0; c < m.length; c++) {
                            var k = [],
                                b = 0,
                                w = 0,
                                C = !1;
                            if (y < m[c] && (void 0 === l.na || t.inArray(m[c], l.na.split(",")) === -1)) {
                                p().validPositions[_] = t.extend(!0, {}, l);
                                var E = p().validPositions[_].locator;
                                for (p().validPositions[_].locator[r] = parseInt(m[c]), null == l.match.fn ? (x.input !== l.match.def && (C = !0, x.generatedInput !== !0 && k.push(x.input)), w++, p().validPositions[_].generatedInput = !/[0-9a-bA-Z]/.test(l.match.def), p().validPositions[_].input = l.match.def) : p().validPositions[_].input = x.input, h = _ + 1; h < u(void 0, !0) + 1; h++) f = p().validPositions[h], f && f.generatedInput !== !0 && /[0-9a-bA-Z]/.test(f.input) ? k.push(f.input) : h < e && b++, delete p().validPositions[h];
                                for (C && k[0] === l.match.def && k.shift(), d(!0), g = !0; k.length > 0;) { var T = k.shift(); if (T !== n.skipOptionalPartCharacter && !(g = P(u(void 0, !0) + 1, T, !1, a, !0))) break }
                                if (g) {
                                    p().validPositions[_].locator = E;
                                    var M = u(e) + 1;
                                    for (h = _ + 1; h < u() + 1; h++) f = p().validPositions[h], (void 0 === f || null == f.match.fn) && h < e + (w - b) && w++;
                                    e += w - b, g = P(e > M ? M : e, i, o, a, !0)
                                }
                                if (g) return !1;
                                d(), p().validPositions = t.extend(!0, {}, v)
                            }
                        }
                    })
                }
                return g
            }

            function v(e, i) {
                var o = p().validPositions[i];
                if (o)
                    for (var s = o.locator, n = s.length, a = e; a < i; a++)
                        if (void 0 === p().validPositions[a] && !E(a, !0)) {
                            var r = k(a),
                                l = r[0],
                                c = -1;
                            t.each(r, function(t, e) { for (var i = 0; i < n && void 0 !== e.locator[i] && C(e.locator[i].toString().split(","), s[i].toString().split(",")); i++) c < i && (c = i, l = e) }), b(a, t.extend({}, l, { input: l.match.placeholder || l.match.def }), !0)
                        }
            }

            function b(e, i, o, s) {
                if (s || n.insertMode && void 0 !== p().validPositions[e] && void 0 === o) {
                    var a, r = t.extend(!0, {}, p().validPositions),
                        l = u(void 0, !0);
                    for (a = e; a <= l; a++) delete p().validPositions[a];
                    p().validPositions[e] = t.extend(!0, {}, i);
                    var c, h = !0,
                        f = p().validPositions,
                        m = !1,
                        _ = p().maskLength;
                    for (a = c = e; a <= l; a++) {
                        var v = r[a];
                        if (void 0 !== v)
                            for (var k = c; k < p().maskLength && (null === v.match.fn && f[a] && (f[a].match.optionalQuantifier === !0 || f[a].match.optionality === !0) || null != v.match.fn);) {
                                if (k++, m === !1 && r[k] && r[k].match.def === v.match.def) p().validPositions[k] = t.extend(!0, {}, r[k]), p().validPositions[k].input = v.input, M(k), c = k, h = !0;
                                else if (g(k, v.match.def)) {
                                    var b = P(k, v.input, !0, !0);
                                    h = b !== !1, c = b.caret || b.insert ? u() : k, m = !0
                                } else h = v.generatedInput === !0;
                                if (p().maskLength < _ && (p().maskLength = _), h) break
                            }
                        if (!h) break
                    }
                    if (!h) return p().validPositions = t.extend(!0, {}, r), d(!0), !1
                } else p().validPositions[e] = t.extend(!0, {}, i);
                return d(!0), !0
            }

            function M(e) { for (var i = e - 1; i > -1 && !p().validPositions[i]; i--); var o, s; for (i++; i < e; i++) void 0 === p().validPositions[i] && (n.jitMasking === !1 || n.jitMasking > i) && (s = k(i, _(i - 1).locator, i - 1).slice(), "" === s[s.length - 1].match.def && s.pop(), o = m(s), o && (o.match.def === n.radixPointDefinitionSymbol || !E(i, !0) || t.inArray(n.radixPoint, y()) < i && o.match.fn && o.match.fn.test(I(i), p(), i, !1, n)) && (F = c(i, o.match.placeholder || (null == o.match.fn ? o.match.def : "" !== I(i) ? I(i) : y()[i]), !0), F !== !1 && (p().validPositions[F.pos || i].generatedInput = !0))) } s = s === !0;
            var S = i;
            void 0 !== i.begin && (S = q && !l(i) ? i.end : i.begin);
            var F = !1,
                O = t.extend(!0, {}, p().validPositions);
            if (M(S), l(i) && (B(void 0, e.keyCode.DELETE, i), S = p().p), S < p().maskLength && (F = c(S, o, s), (!s || a === !0) && F === !1)) {
                var A = p().validPositions[S];
                if (!A || null !== A.match.fn || A.match.def !== o && o !== n.skipOptionalPartCharacter) {
                    if ((n.insertMode || void 0 === p().validPositions[T(S)]) && !E(S, !0)) {
                        var D = k(S).slice();
                        "" === D[D.length - 1].match.def && D.pop();
                        var j = m(D, !0);
                        j && null === j.match.fn && (j = j.match.placeholder || j.match.def, c(S, j, s), p().validPositions[S].generatedInput = !0);
                        for (var L = S + 1, N = T(S); L <= N; L++)
                            if (F = c(L, o, s), F !== !1) { v(S, void 0 !== F.pos ? F.pos : L), S = L; break }
                    }
                } else F = { caret: T(S) }
            }
            return F === !1 && n.keepStatic && !s && r !== !0 && (F = h(S, o, s)), F === !0 && (F = { pos: S }), t.isFunction(n.postValidation) && F !== !1 && !s && a !== !0 && (F = !!n.postValidation(y(!0), F, n) && F), void 0 === F.pos && (F.pos = S), F === !1 && (d(!0), p().validPositions = t.extend(!0, {}, O)), F
        }

        function E(t, e) { var i; if (e ? (i = _(t).match, "" === i.def && (i = v(t).match)) : i = v(t).match, null != i.fn) return i.fn; if (e !== !0 && t > -1) { var o = k(t); return o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0) } return !1 }

        function T(t, e) { var i = p().maskLength; if (t >= i) return i; for (var o = t; ++o < i && (e === !0 && (v(o).match.newBlockMarker !== !0 || !E(o)) || e !== !0 && !E(o));); return o }

        function M(t, e) { var i, o = t; if (o <= 0) return 0; for (; --o > 0 && (e === !0 && v(o).match.newBlockMarker !== !0 || e !== !0 && !E(o) && (i = k(o), i.length < 2 || 2 === i.length && "" === i[1].match.def));); return o }

        function $(t) { return void 0 === p().validPositions[t] ? I(t) : p().validPositions[t].input }

        function S(e, i, o, s, a) {
            if (s && t.isFunction(n.onBeforeWrite)) {
                var r = n.onBeforeWrite(s, i, o, n);
                if (r) {
                    if (r.refreshFromBuffer) {
                        var l = r.refreshFromBuffer;
                        x(l === !0 ? l : l.start, l.end, r.buffer || i), i = y(!0)
                    }
                    void 0 !== o && (o = void 0 !== r.caret ? r.caret : o)
                }
            }
            e.inputmask._valueSet(i.join("")), void 0 === o || void 0 !== s && "blur" === s.type ? G(e, i, o) : A(e, o), a === !0 && (Z = !0, t(e).trigger("input"))
        }

        function I(t, e) {
            if (e = e || v(t).match, void 0 !== e.placeholder) return e.placeholder;
            if (null === e.fn) {
                if (t > -1 && void 0 === p().validPositions[t]) {
                    var i, o = k(t),
                        s = [];
                    if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                        for (var a = 0; a < o.length; a++)
                            if (o[a].match.optionality !== !0 && o[a].match.optionalQuantifier !== !0 && (null === o[a].match.fn || void 0 === i || o[a].match.fn.test(i.match.def, p(), t, !0, n) !== !1) && (s.push(o[a]), null === o[a].match.fn && (i = o[a]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return n.placeholder.charAt(t % n.placeholder.length)
                }
                return e.def
            }
            return n.placeholder.charAt(t % n.placeholder.length)
        }

        function F(i, o, s, a, r, l) {
            function c() {
                var t = !1,
                    e = b().slice(m, T(m)).join("").indexOf(f);
                if (e !== -1 && !E(m)) {
                    t = !0;
                    for (var i = b().slice(m, m + e), o = 0; o < i.length; o++)
                        if (" " !== i[o]) { t = !1; break }
                }
                return t
            }
            var h = a.slice(),
                f = "",
                m = 0,
                v = void 0;
            if (d(), p().p = T(-1), !s)
                if (n.autoUnmask !== !0) {
                    var g = b().slice(0, T(-1)).join(""),
                        k = h.join("").match(new RegExp("^" + e.escapeRegex(g), "g"));
                    k && k.length > 0 && (h.splice(0, k.length * g.length), m = T(m))
                } else m = T(m);
            if (t.each(h, function(e, o) {
                    if (void 0 !== o) {
                        var a = new t.Event("keypress");
                        a.which = o.charCodeAt(0), f += o;
                        var r = u(void 0, !0),
                            l = p().validPositions[r],
                            h = _(r + 1, l ? l.locator.slice() : void 0, r);
                        if (!c() || s || n.autoUnmask) {
                            var g = s ? e : null == h.match.fn && h.match.optionality && r + 1 < p().p ? r + 1 : p().p;
                            v = tt.keypressEvent.call(i, a, !0, !1, s, g), m = g + 1, f = ""
                        } else v = tt.keypressEvent.call(i, a, !0, !1, !0, r + 1);
                        if (!s && t.isFunction(n.onBeforeWrite) && (v = n.onBeforeWrite(a, y(), v.forwardPosition, n), v && v.refreshFromBuffer)) {
                            var k = v.refreshFromBuffer;
                            x(k === !0 ? k : k.start, k.end, v.buffer), d(!0), v.caret && (p().p = v.caret)
                        }
                    }
                }), o) {
                var w = void 0,
                    C = u();
                document.activeElement === i && (r || v) && (w = A(i).begin, r && v === !1 && (w = T(u(w))), v && l !== !0 && (w < C + 1 || C === -1) && (w = n.numericInput && void 0 === v.caret ? M(v.forwardPosition) : v.forwardPosition)), S(i, y(), w, r || new t.Event("checkval"))
            }
        }

        function O(e) {
            if (e && void 0 === e.inputmask) return e.value;
            var i = [],
                o = p().validPositions;
            for (var s in o) o[s].match && null != o[s].match.fn && i.push(o[s].input);
            var a = 0 === i.length ? "" : (q ? i.reverse() : i).join("");
            if (t.isFunction(n.onUnMask)) {
                var r = (q ? y().slice().reverse() : y()).join("");
                a = n.onUnMask(r, a, n) || a
            }
            return a
        }

        function A(t, e, i, o) {
            function s(t) {
                if (o !== !0 && q && "number" == typeof t && (!n.greedy || "" !== n.placeholder)) {
                    var e = y().join("").length;
                    t = e - t
                }
                return t
            }
            var r;
            if ("number" != typeof e) return t.setSelectionRange ? (e = t.selectionStart, i = t.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0), r.commonAncestorContainer.parentNode !== t && r.commonAncestorContainer !== t || (e = r.startOffset, i = r.endOffset)) : document.selection && document.selection.createRange && (r = document.selection.createRange(), e = 0 - r.duplicate().moveStart("character", -t.inputmask._valueGet().length), i = e + r.text.length), { begin: s(e), end: s(i) };
            e = s(e), i = s(i), i = "number" == typeof i ? i : e;
            var l = parseInt(((t.ownerDocument.defaultView || window).getComputedStyle ? (t.ownerDocument.defaultView || window).getComputedStyle(t, null) : t.currentStyle).fontSize) * i;
            if (t.scrollLeft = l > t.scrollWidth ? l : 0, a || n.insertMode !== !1 || e !== i || i++, t.setSelectionRange) t.selectionStart = e, t.selectionEnd = i;
            else if (window.getSelection) {
                if (r = document.createRange(), void 0 === t.firstChild || null === t.firstChild) {
                    var c = document.createTextNode("");
                    t.appendChild(c)
                }
                r.setStart(t.firstChild, e < t.inputmask._valueGet().length ? e : t.inputmask._valueGet().length), r.setEnd(t.firstChild, i < t.inputmask._valueGet().length ? i : t.inputmask._valueGet().length), r.collapse(!0);
                var h = window.getSelection();
                h.removeAllRanges(), h.addRange(r)
            } else t.createTextRange && (r = t.createTextRange(), r.collapse(!0), r.moveEnd("character", i), r.moveStart("character", e), r.select());
            G(t, void 0, { begin: e, end: i })
        }

        function D(e) {
            var i, o, s = y(),
                n = s.length,
                a = u(),
                r = {},
                l = p().validPositions[a],
                c = void 0 !== l ? l.locator.slice() : void 0;
            for (i = a + 1; i < s.length; i++) o = _(i, c, i - 1), c = o.locator.slice(), r[i] = t.extend(!0, {}, o);
            var h = l && void 0 !== l.alternation ? l.locator[l.alternation] : void 0;
            for (i = n - 1; i > a && (o = r[i], (o.match.optionality || o.match.optionalQuantifier || h && (h !== r[i].locator[l.alternation] && null != o.match.fn || null === o.match.fn && o.locator[l.alternation] && C(o.locator[l.alternation].toString().split(","), h.toString().split(",")) && "" !== k(i)[0].def)) && s[i] === I(i, o.match)); i--) n--;
            return e ? { l: n, def: r[n] ? r[n].match : void 0 } : n
        }

        function j(t) { for (var e = D(), i = t.length - 1; i > e && !E(i); i--); return t.splice(e, i + 1 - e), t }

        function L(e) {
            if (t.isFunction(n.isComplete)) return n.isComplete(e, n);
            if ("*" !== n.repeat) {
                var i = !1,
                    o = D(!0),
                    s = M(o.l);
                if (void 0 === o.def || o.def.newBlockMarker || o.def.optionality || o.def.optionalQuantifier) { i = !0; for (var a = 0; a <= s; a++) { var r = _(a).match; if (null !== r.fn && void 0 === p().validPositions[a] && r.optionality !== !0 && r.optionalQuantifier !== !0 || null === r.fn && e[a] !== I(a, r)) { i = !1; break } } }
                return i
            }
        }

        function B(i, o, s, a) {
            function r() {
                if (n.keepStatic) {
                    for (var e = [], o = u(-1, !0), s = t.extend(!0, {}, p().validPositions), a = p().validPositions[o]; o >= 0; o--) {
                        var r = p().validPositions[o];
                        if (r) {
                            if (r.generatedInput !== !0 && /[0-9a-bA-Z]/.test(r.input) && e.push(r.input), delete p().validPositions[o], void 0 !== r.alternation && r.locator[r.alternation] !== a.locator[r.alternation]) break;
                            a = r
                        }
                    }
                    if (o > -1)
                        for (p().p = T(u(-1, !0)); e.length > 0;) {
                            var l = new t.Event("keypress");
                            l.which = e.pop().charCodeAt(0), tt.keypressEvent.call(i, l, !0, !1, !1, p().p)
                        } else p().validPositions = t.extend(!0, {}, s)
                }
            }
            if ((n.numericInput || q) && (o === e.keyCode.BACKSPACE ? o = e.keyCode.DELETE : o === e.keyCode.DELETE && (o = e.keyCode.BACKSPACE), q)) {
                var l = s.end;
                s.end = s.begin, s.begin = l
            }
            o === e.keyCode.BACKSPACE && (s.end - s.begin < 1 || n.insertMode === !1) ? (s.begin = M(s.begin), void 0 === p().validPositions[s.begin] || p().validPositions[s.begin].input !== n.groupSeparator && p().validPositions[s.begin].input !== n.radixPoint || s.begin--) : o === e.keyCode.DELETE && s.begin === s.end && (s.end = E(s.end, !0) ? s.end + 1 : T(s.end) + 1, void 0 === p().validPositions[s.begin] || p().validPositions[s.begin].input !== n.groupSeparator && p().validPositions[s.begin].input !== n.radixPoint || s.end++), f(s.begin, s.end, !1, a), a !== !0 && r();
            var c = u(s.begin, !0);
            c < s.begin ? p().p = T(c) : a !== !0 && (p().p = s.begin)
        }

        function N(e) {
            function i(t) {
                var i, o = document.createElement("span");
                for (var s in a) isNaN(s) && s.indexOf("font") !== -1 && (o.style[s] = a[s]);
                o.style.textTransform = a.textTransform, o.style.letterSpacing = a.letterSpacing, o.style.position = "absolute", o.style.height = "auto", o.style.width = "auto", o.style.visibility = "hidden", o.style.whiteSpace = "nowrap", document.body.appendChild(o);
                var n, r = e.inputmask._valueGet(),
                    l = 0;
                for (i = 0, n = r.length; i <= n; i++) {
                    if (o.innerHTML += r.charAt(i) || "_", o.offsetWidth >= t) {
                        var c = t - l,
                            h = o.offsetWidth - t;
                        o.innerHTML = r.charAt(i), c -= o.offsetWidth / 3, i = c < h ? i - 1 : i;
                        break
                    }
                    l = o.offsetWidth
                }
                return document.body.removeChild(o), i
            }

            function o() { K.style.position = "absolute", K.style.top = s.top + "px", K.style.left = s.left + "px", K.style.width = parseInt(e.offsetWidth) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth) + "px", K.style.height = parseInt(e.offsetHeight) - parseInt(a.paddingTop) - parseInt(a.paddingBottom) - parseInt(a.borderTopWidth) - parseInt(a.borderBottomWidth) + "px", K.style.lineHeight = K.style.height, K.style.zIndex = isNaN(a.zIndex) ? -1 : a.zIndex - 1, K.style.webkitAppearance = "textfield", K.style.mozAppearance = "textfield", K.style.Appearance = "textfield" }
            var s = t(e).position(),
                a = (e.ownerDocument.defaultView || window).getComputedStyle(e, null);
            e.parentNode, K = document.createElement("div"), document.body.appendChild(K);
            for (var r in a) isNaN(r) && "cssText" !== r && r.indexOf("webkit") == -1 && (K.style[r] = a[r]);
            e.style.backgroundColor = "transparent", e.style.color = "transparent", e.style.webkitAppearance = "caret", e.style.mozAppearance = "caret", e.style.Appearance = "caret", o(), t(window).on("resize", function(i) { s = t(e).position(), a = (e.ownerDocument.defaultView || window).getComputedStyle(e, null), o() }), t(e).on("click", function(t) { return A(e, i(t.clientX)), tt.clickEvent.call(this, [t]) }), t(e).on("keydown", function(t) { t.shiftKey || n.insertMode === !1 || setTimeout(function() { G(e) }, 0) })
        }

        function G(t, e, i) {
            function o() { a || null !== l.fn && void 0 !== c.input ? a && null !== l.fn && void 0 !== c.input && (a = !1, s += "</span>") : (a = !0, s += "<span class='im-static''>") }
            if (void 0 !== K) {
                e = e || y(), void 0 === i ? i = A(t) : void 0 === i.begin && (i = { begin: i, end: i });
                var s = "",
                    a = !1;
                if ("" != e) {
                    var r, l, c, h = 0,
                        d = u();
                    do h === i.begin && document.activeElement === t && (s += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"), p().validPositions[h] ? (c = p().validPositions[h], l = c.match, r = c.locator.slice(), o(), s += c.input) : (c = _(h, r, h - 1), l = c.match, r = c.locator.slice(), (n.jitMasking === !1 || h < d || "number" == typeof n.jitMasking && isFinite(n.jitMasking) && n.jitMasking > h) && (o(), s += I(h, l))), h++; while ((void 0 === W || h < W) && (null !== l.fn || "" !== l.def) || d > h)
                }
                K.innerHTML = s
            }
        }

        function R(e) {
            function i(e, i) {
                function o(e) {
                    function o(e) {
                        if (t.valHooks && (void 0 === t.valHooks[e] || t.valHooks[e].inputmaskpatch !== !0)) {
                            var o = t.valHooks[e] && t.valHooks[e].get ? t.valHooks[e].get : function(t) { return t.value },
                                s = t.valHooks[e] && t.valHooks[e].set ? t.valHooks[e].set : function(t, e) { return t.value = e, t };
                            t.valHooks[e] = { get: function(t) { if (t.inputmask) { if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue(); var e = o(t); return u(void 0, void 0, t.inputmask.maskset.validPositions) !== -1 || i.nullable !== !0 ? e : "" } return o(t) }, set: function(e, i) { var o, n = t(e); return o = s(e, i), e.inputmask && n.trigger("setvalue"), o }, inputmaskpatch: !0 }
                        }
                    }

                    function s() { return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : u() !== -1 || i.nullable !== !0 ? document.activeElement === this && i.clearMaskOnLostFocus ? (q ? j(y().slice()).reverse() : j(y().slice())).join("") : r.call(this) : "" : r.call(this) }

                    function n(e) { l.call(this, e), this.inputmask && t(this).trigger("setvalue") }

                    function a(e) {
                        J.on(e, "mouseenter", function(e) {
                            var i = t(this),
                                o = this,
                                s = o.inputmask._valueGet();
                            s !== y().join("") && i.trigger("setvalue")
                        })
                    }
                    var r, l;
                    if (!e.inputmask.__valueGet) {
                        if (i.noValuePatching !== !0) {
                            if (Object.getOwnPropertyDescriptor) {
                                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(t) { return t.__proto__ } : function(t) { return t.constructor.prototype });
                                var c = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : void 0;
                                c && c.get && c.set ? (r = c.get, l = c.set, Object.defineProperty(e, "value", { get: s, set: n, configurable: !0 })) : "INPUT" !== e.tagName && (r = function() { return this.textContent }, l = function(t) { this.textContent = t }, Object.defineProperty(e, "value", { get: s, set: n, configurable: !0 }))
                            } else document.__lookupGetter__ && e.__lookupGetter__("value") && (r = e.__lookupGetter__("value"), l = e.__lookupSetter__("value"), e.__defineGetter__("value", s), e.__defineSetter__("value", n));
                            e.inputmask.__valueGet = r, e.inputmask.__valueSet = l
                        }
                        e.inputmask._valueGet = function(t) { return q && t !== !0 ? r.call(this.el).split("").reverse().join("") : r.call(this.el) }, e.inputmask._valueSet = function(t, e) { l.call(this.el, null === t || void 0 === t ? "" : e !== !0 && q ? t.split("").reverse().join("") : t) }, void 0 === r && (r = function() { return this.value }, l = function(t) { this.value = t }, o(e.type), a(e))
                    }
                }
                var s = e.getAttribute("type"),
                    n = "INPUT" === e.tagName && t.inArray(s, i.supportsInputType) !== -1 || e.isContentEditable || "TEXTAREA" === e.tagName;
                if (!n)
                    if ("INPUT" === e.tagName) {
                        var a = document.createElement("input");
                        a.setAttribute("type", s), n = "text" === a.type, a = null
                    } else n = "partial";
                return n !== !1 && o(e), n
            }
            var o = i(e, n);
            if (o !== !1 && (V = e, z = t(V), ("rtl" === V.dir || n.rightAlign) && (V.style.textAlign = "right"), ("rtl" === V.dir || n.numericInput) && (V.dir = "ltr", V.removeAttribute("dir"), V.inputmask.isRTL = !0, q = !0), n.colorMask === !0 && N(V), c && (V.hasOwnProperty("inputmode") && (V.inputmode = n.inputmode, V.setAttribute("inputmode", n.inputmode)), "rtfm" === n.androidHack && (n.colorMask !== !0 && N(V), V.type = "password")), J.off(V), o === !0 && (J.on(V, "submit", tt.submitEvent), J.on(V, "reset", tt.resetEvent), J.on(V, "mouseenter", tt.mouseenterEvent), J.on(V, "blur", tt.blurEvent), J.on(V, "focus", tt.focusEvent), J.on(V, "mouseleave", tt.mouseleaveEvent), n.colorMask !== !0 && J.on(V, "click", tt.clickEvent), J.on(V, "dblclick", tt.dblclickEvent), J.on(V, "paste", tt.pasteEvent), J.on(V, "dragdrop", tt.pasteEvent), J.on(V, "drop", tt.pasteEvent), J.on(V, "cut", tt.cutEvent), J.on(V, "complete", n.oncomplete), J.on(V, "incomplete", n.onincomplete), J.on(V, "cleared", n.oncleared), n.inputEventOnly !== !0 && (J.on(V, "keydown", tt.keydownEvent), J.on(V, "keypress", tt.keypressEvent)), J.on(V, "compositionstart", t.noop), J.on(V, "compositionupdate", t.noop), J.on(V, "compositionend", t.noop), J.on(V, "keyup", t.noop), J.on(V, "input", tt.inputFallBackEvent)), J.on(V, "setvalue", tt.setValueEvent), b(), "" !== V.inputmask._valueGet() || n.clearMaskOnLostFocus === !1 || document.activeElement === V)) {
                var s = t.isFunction(n.onBeforeMask) ? n.onBeforeMask(V.inputmask._valueGet(), n) || V.inputmask._valueGet() : V.inputmask._valueGet();
                F(V, !0, !1, s.split(""));
                var a = y().slice();
                H = a.join(""), L(a) === !1 && n.clearIncomplete && d(), n.clearMaskOnLostFocus && document.activeElement !== V && (u() === -1 ? a = [] : j(a)), S(V, a), document.activeElement === V && A(V, T(u()))
            }
        }
        o = o || this.maskset, n = n || this.opts;
        var H, z, W, K, U, V = this.el,
            q = this.isRTL,
            Q = !1,
            Z = !1,
            X = !1,
            Y = !1,
            J = {
                on: function(i, o, s) {
                    var a = function(i) {
                        if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
                            var o = t.data(this, "_inputmask_opts");
                            o ? new e(o).mask(this) : J.off(this)
                        } else {
                            if ("setvalue" === i.type || !(this.disabled || this.readOnly && !("keydown" === i.type && i.ctrlKey && 67 === i.keyCode || n.tabThrough === !1 && i.keyCode === e.keyCode.TAB))) {
                                switch (i.type) {
                                    case "input":
                                        if (Z === !0) return Z = !1, i.preventDefault();
                                        break;
                                    case "keydown":
                                        Q = !1, Z = !1;
                                        break;
                                    case "keypress":
                                        if (Q === !0) return i.preventDefault();
                                        Q = !0;
                                        break;
                                    case "click":
                                        if (r || l) {
                                            var a = this,
                                                c = arguments;
                                            return setTimeout(function() { s.apply(a, c) }, 0), !1
                                        }
                                }
                                var h = s.apply(this, arguments);
                                return h === !1 && (i.preventDefault(), i.stopPropagation()), h
                            }
                            i.preventDefault()
                        }
                    };
                    i.inputmask.events[o] = i.inputmask.events[o] || [], i.inputmask.events[o].push(a), t.inArray(o, ["submit", "reset"]) !== -1 ? null != i.form && t(i.form).on(o, a) : t(i).on(o, a)
                },
                off: function(e, i) {
                    if (e.inputmask && e.inputmask.events) {
                        var o;
                        i ? (o = [], o[i] = e.inputmask.events[i]) : o = e.inputmask.events, t.each(o, function(i, o) {
                            for (; o.length > 0;) {
                                var s = o.pop();
                                t.inArray(i, ["submit", "reset"]) !== -1 ? null != e.form && t(e.form).off(i, s) : t(e).off(i, s)
                            }
                            delete e.inputmask.events[i]
                        })
                    }
                }
            },
            tt = {
                keydownEvent: function(i) {
                    function o(t) {
                        var e = document.createElement("input"),
                            i = "on" + t,
                            o = i in e;
                        return o || (e.setAttribute(i, "return;"), o = "function" == typeof e[i]), e = null, o
                    }
                    var s = this,
                        a = t(s),
                        r = i.keyCode,
                        c = A(s);
                    if (r === e.keyCode.BACKSPACE || r === e.keyCode.DELETE || l && r === e.keyCode.BACKSPACE_SAFARI || i.ctrlKey && r === e.keyCode.X && !o("cut")) i.preventDefault(), B(s, r, c), S(s, y(!0), p().p, i, s.inputmask._valueGet() !== y().join("")), s.inputmask._valueGet() === b().join("") ? a.trigger("cleared") : L(y()) === !0 && a.trigger("complete");
                    else if (r === e.keyCode.END || r === e.keyCode.PAGE_DOWN) {
                        i.preventDefault();
                        var h = T(u());
                        n.insertMode || h !== p().maskLength || i.shiftKey || h--, A(s, i.shiftKey ? c.begin : h, h, !0)
                    } else r === e.keyCode.HOME && !i.shiftKey || r === e.keyCode.PAGE_UP ? (i.preventDefault(), A(s, 0, i.shiftKey ? c.begin : 0, !0)) : (n.undoOnEscape && r === e.keyCode.ESCAPE || 90 === r && i.ctrlKey) && i.altKey !== !0 ? (F(s, !0, !1, H.split("")), a.trigger("click")) : r !== e.keyCode.INSERT || i.shiftKey || i.ctrlKey ? n.tabThrough === !0 && r === e.keyCode.TAB ? (i.shiftKey === !0 ? (null === v(c.begin).match.fn && (c.begin = T(c.begin)), c.end = M(c.begin, !0), c.begin = M(c.end, !0)) : (c.begin = T(c.begin, !0), c.end = T(c.begin, !0), c.end < p().maskLength && c.end--), c.begin < p().maskLength && (i.preventDefault(), A(s, c.begin, c.end))) : i.shiftKey || n.insertMode === !1 && (r === e.keyCode.RIGHT ? setTimeout(function() {
                        var t = A(s);
                        A(s, t.begin)
                    }, 0) : r === e.keyCode.LEFT && setTimeout(function() {
                        var t = A(s);
                        A(s, q ? t.begin + 1 : t.begin - 1)
                    }, 0)) : (n.insertMode = !n.insertMode, A(s, n.insertMode || c.begin !== p().maskLength ? c.begin : c.begin - 1));
                    n.onKeyDown.call(this, i, y(), A(s).begin, n), X = t.inArray(r, n.ignorables) !== -1
                },
                keypressEvent: function(i, o, s, a, r) {
                    var l = this,
                        c = t(l),
                        h = i.which || i.charCode || i.keyCode;
                    if (!(o === !0 || i.ctrlKey && i.altKey) && (i.ctrlKey || i.metaKey || X)) return h === e.keyCode.ENTER && H !== y().join("") && (H = y().join(""), setTimeout(function() { c.trigger("change") }, 0)), !0;
                    if (h) {
                        46 === h && i.shiftKey === !1 && "," === n.radixPoint && (h = 44);
                        var u, f = o ? { begin: r, end: r } : A(l),
                            m = String.fromCharCode(h);
                        p().writeOutBuffer = !0;
                        var _ = P(f, m, a);
                        if (_ !== !1 && (d(!0), u = void 0 !== _.caret ? _.caret : o ? _.pos + 1 : T(_.pos), p().p = u), s !== !1) {
                            var v = this;
                            if (setTimeout(function() { n.onKeyValidation.call(v, h, _, n) }, 0), p().writeOutBuffer && _ !== !1) {
                                var g = y();
                                S(l, g, n.numericInput && void 0 === _.caret ? M(u) : u, i, o !== !0), o !== !0 && setTimeout(function() { L(g) === !0 && c.trigger("complete") }, 0)
                            }
                        }
                        if (i.preventDefault(), o) return _.forwardPosition = u, _
                    }
                },
                pasteEvent: function(e) {
                    var i, o = this,
                        s = e.originalEvent || e,
                        a = t(o),
                        r = o.inputmask._valueGet(!0),
                        l = A(o);
                    q && (i = l.end, l.end = l.begin, l.begin = i);
                    var c = r.substr(0, l.begin),
                        h = r.substr(l.end, r.length);
                    if (c === (q ? b().reverse() : b()).slice(0, l.begin).join("") && (c = ""), h === (q ? b().reverse() : b()).slice(l.end).join("") && (h = ""), q && (i = c, c = h, h = i), window.clipboardData && window.clipboardData.getData) r = c + window.clipboardData.getData("Text") + h;
                    else {
                        if (!s.clipboardData || !s.clipboardData.getData) return !0;
                        r = c + s.clipboardData.getData("text/plain") + h
                    }
                    var p = r;
                    if (t.isFunction(n.onBeforePaste)) {
                        if (p = n.onBeforePaste(r, n), p === !1) return e.preventDefault();
                        p || (p = r)
                    }
                    return F(o, !1, !1, q ? p.split("").reverse() : p.toString().split("")), S(o, y(), T(u()), e, H !== y().join("")), L(y()) === !0 && a.trigger("complete"), e.preventDefault()
                },
                inputFallBackEvent: function(i) {
                    var o = this,
                        s = o.inputmask._valueGet();
                    if (y().join("") !== s) {
                        var n = A(o);
                        if (s = s.replace(new RegExp("(" + e.escapeRegex(b().join("")) + ")*"), ""), r) { var a = s.replace(y().join(""), ""); if (1 === a.length) { var l = new t.Event("keypress"); return l.which = a.charCodeAt(0), tt.keypressEvent.call(o, l, !0, !0, !1, p().validPositions[n.begin - 1] ? n.begin : n.begin - 1), !1 } }
                        if (n.begin > s.length && (A(o, s.length), n = A(o)), y().length - s.length !== 1 || s.charAt(n.begin) === y()[n.begin] || s.charAt(n.begin + 1) === y()[n.begin] || E(n.begin)) {
                            for (var c = u() + 1, h = b().join(""); null === s.match(e.escapeRegex(h) + "$");) h = h.slice(1);
                            s = s.replace(h, ""), s = s.split(""), F(o, !0, !1, s, i, n.begin < c), L(y()) === !0 && t(o).trigger("complete")
                        } else i.keyCode = e.keyCode.BACKSPACE, tt.keydownEvent.call(o, i);
                        i.preventDefault()
                    }
                },
                setValueEvent: function(e) {
                    var i = this,
                        o = i.inputmask._valueGet();
                    F(i, !0, !1, (t.isFunction(n.onBeforeMask) ? n.onBeforeMask(o, n) || o : o).split("")), H = y().join(""), (n.clearMaskOnLostFocus || n.clearIncomplete) && i.inputmask._valueGet() === b().join("") && i.inputmask._valueSet("")
                },
                focusEvent: function(t) {
                    var e = this,
                        i = e.inputmask._valueGet();
                    n.showMaskOnFocus && (!n.showMaskOnHover || n.showMaskOnHover && "" === i) && (e.inputmask._valueGet() !== y().join("") ? S(e, y(), T(u())) : Y === !1 && A(e, T(u()))), n.positionCaretOnTab === !0 && tt.clickEvent.apply(e, [t, !0]), H = y().join("")
                },
                mouseleaveEvent: function(t) {
                    var e = this;
                    if (Y = !1, n.clearMaskOnLostFocus && document.activeElement !== e) {
                        var i = y().slice(),
                            o = e.inputmask._valueGet();
                        o !== e.getAttribute("placeholder") && "" !== o && (u() === -1 && o === b().join("") ? i = [] : j(i), S(e, i))
                    }
                },
                clickEvent: function(e, i) {
                    function o(e) {
                        if ("" !== n.radixPoint) {
                            var i = p().validPositions;
                            if (void 0 === i[e] || i[e].input === I(e)) {
                                if (e < T(-1)) return !0;
                                var o = t.inArray(n.radixPoint, y());
                                if (o !== -1) {
                                    for (var s in i)
                                        if (o < s && i[s].input !== I(s)) return !1;
                                    return !0
                                }
                            }
                        }
                        return !1
                    }
                    var s = this;
                    setTimeout(function() {
                        if (document.activeElement === s) {
                            var e = A(s);
                            if (i && (e.begin = e.end), e.begin === e.end) switch (n.positionCaretOnClick) {
                                case "none":
                                    break;
                                case "radixFocus":
                                    if (o(e.begin)) {
                                        var a = t.inArray(n.radixPoint, y().join(""));
                                        A(s, n.numericInput ? T(a) : a);
                                        break
                                    }
                                default:
                                    var r = e.begin,
                                        l = u(r, !0),
                                        c = T(l);
                                    if (r < c) A(s, E(r) || E(r - 1) ? r : T(r));
                                    else {
                                        var h = I(c);
                                        ("" !== h && y()[c] !== h && v(c).match.optionalQuantifier !== !0 || !E(c) && v(c).match.def === h) && (c = T(c)), A(s, c)
                                    }
                            }
                        }
                    }, 0)
                },
                dblclickEvent: function(t) {
                    var e = this;
                    setTimeout(function() { A(e, 0, T(u())) }, 0)
                },
                cutEvent: function(i) {
                    var o = this,
                        s = t(o),
                        n = A(o),
                        a = i.originalEvent || i,
                        r = window.clipboardData || a.clipboardData,
                        l = q ? y().slice(n.end, n.begin) : y().slice(n.begin, n.end);
                    r.setData("text", q ? l.reverse().join("") : l.join("")), document.execCommand && document.execCommand("copy"), B(o, e.keyCode.DELETE, n), S(o, y(), p().p, i, H !== y().join("")), o.inputmask._valueGet() === b().join("") && s.trigger("cleared")
                },
                blurEvent: function(e) {
                    var i = t(this),
                        o = this;
                    if (o.inputmask) {
                        var s = o.inputmask._valueGet(),
                            a = y().slice();
                        H !== a.join("") && setTimeout(function() { i.trigger("change"), H = a.join("") }, 0), "" !== s && (n.clearMaskOnLostFocus && (u() === -1 && s === b().join("") ? a = [] : j(a)), L(a) === !1 && (setTimeout(function() { i.trigger("incomplete") }, 0), n.clearIncomplete && (d(), a = n.clearMaskOnLostFocus ? [] : b().slice())), S(o, a, void 0, e))
                    }
                },
                mouseenterEvent: function(t) {
                    var e = this;
                    Y = !0, document.activeElement !== e && n.showMaskOnHover && e.inputmask._valueGet() !== y().join("") && S(e, y())
                },
                submitEvent: function(t) { H !== y().join("") && z.trigger("change"), n.clearMaskOnLostFocus && u() === -1 && V.inputmask._valueGet && V.inputmask._valueGet() === b().join("") && V.inputmask._valueSet(""), n.removeMaskOnSubmit && (V.inputmask._valueSet(V.inputmask.unmaskedvalue(), !0), setTimeout(function() { S(V, y()) }, 0)) },
                resetEvent: function(t) { setTimeout(function() { z.trigger("setvalue") }, 0) }
            };
        if (void 0 !== i) switch (i.action) {
            case "isComplete":
                return V = i.el, L(y());
            case "unmaskedvalue":
                return void 0 !== V && void 0 === i.value || (U = i.value, U = (t.isFunction(n.onBeforeMask) ? n.onBeforeMask(U, n) || U : U).split(""), F(void 0, !1, !1, q ? U.reverse() : U), t.isFunction(n.onBeforeWrite) && n.onBeforeWrite(void 0, y(), 0, n)), O(V);
            case "mask":
                R(V);
                break;
            case "format":
                return U = (t.isFunction(n.onBeforeMask) ? n.onBeforeMask(i.value, n) || i.value : i.value).split(""), F(void 0, !1, !1, q ? U.reverse() : U), t.isFunction(n.onBeforeWrite) && n.onBeforeWrite(void 0, y(), 0, n), i.metadata ? { value: q ? y().slice().reverse().join("") : y().join(""), metadata: s.call(this, { action: "getmetadata" }, o, n) } : q ? y().slice().reverse().join("") : y().join("");
            case "isValid":
                i.value ? (U = i.value.split(""), F(void 0, !1, !0, q ? U.reverse() : U)) : i.value = y().join("");
                for (var et = y(), it = D(), ot = et.length - 1; ot > it && !E(ot); ot--);
                return et.splice(it, ot + 1 - it), L(et) && i.value === y().join("");
            case "getemptymask":
                return b().join("");
            case "remove":
                if (V) {
                    z = t(V), V.inputmask._valueSet(O(V)), J.off(V);
                    var st;
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (st = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(V), "value"), st && V.inputmask.__valueGet && Object.defineProperty(V, "value", { get: V.inputmask.__valueGet, set: V.inputmask.__valueSet, configurable: !0 })) : document.__lookupGetter__ && V.__lookupGetter__("value") && V.inputmask.__valueGet && (V.__defineGetter__("value", V.inputmask.__valueGet), V.__defineSetter__("value", V.inputmask.__valueSet)), V.inputmask = void 0
                }
                return V;
            case "getmetadata":
                if (t.isArray(o.metadata)) { var nt = h(!0, 0, !1).join(""); return t.each(o.metadata, function(t, e) { if (e.mask === nt) return nt = e, !1 }), nt }
                return o.metadata
        }
    }
    var n = navigator.userAgent,
        a = /mobile/i.test(n),
        r = /iemobile/i.test(n),
        l = /iphone/i.test(n) && !r,
        c = /android/i.test(n) && !r;
    return e.prototype = {
        defaults: { placeholder: "_", optionalmarker: { start: "[", end: "]" }, quantifiermarker: { start: "{", end: "}" }, groupmarker: { start: "(", end: ")" }, alternatormarker: "|", escapeChar: "\\", mask: null, oncomplete: t.noop, onincomplete: t.noop, oncleared: t.noop, repeat: 0, greedy: !0, autoUnmask: !1, removeMaskOnSubmit: !1, clearMaskOnLostFocus: !0, insertMode: !0, clearIncomplete: !1, aliases: {}, alias: null, onKeyDown: t.noop, onBeforeMask: null, onBeforePaste: function(e, i) { return t.isFunction(i.onBeforeMask) ? i.onBeforeMask(e, i) : e }, onBeforeWrite: null, onUnMask: null, showMaskOnFocus: !0, showMaskOnHover: !0, onKeyValidation: t.noop, skipOptionalPartCharacter: " ", numericInput: !1, rightAlign: !1, undoOnEscape: !0, radixPoint: "", radixPointDefinitionSymbol: void 0, groupSeparator: "", keepStatic: null, positionCaretOnTab: !0, tabThrough: !1, supportsInputType: ["text", "tel", "password"], definitions: { 9: { validator: "[0-9]", cardinality: 1, definitionSymbol: "*" }, a: { validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, definitionSymbol: "*" }, "*": { validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1 } }, ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123], isComplete: null, canClearPosition: t.noop, postValidation: null, staticDefinitionSymbol: void 0, jitMasking: !1, nullable: !0, inputEventOnly: !1, noValuePatching: !1, positionCaretOnClick: "lvp", casing: null, inputmode: "verbatim", colorMask: !1, androidHack: !1 },
        masksCache: {},
        mask: function(n) {
            function a(e, o, s, n) {
                function a(t, i) { i = void 0 !== i ? i : e.getAttribute(n + "-" + t), null !== i && ("string" == typeof i && (0 === t.indexOf("on") ? i = window[i] : "false" === i ? i = !1 : "true" === i && (i = !0)), s[t] = i) }
                var r, l, c, h, p = e.getAttribute(n);
                if (p && "" !== p && (p = p.replace(new RegExp("'", "g"), '"'), l = JSON.parse("{" + p + "}")), l) {
                    c = void 0;
                    for (h in l)
                        if ("alias" === h.toLowerCase()) { c = l[h]; break }
                }
                a("alias", c), s.alias && i(s.alias, s, o);
                for (r in o) {
                    if (l) {
                        c = void 0;
                        for (h in l)
                            if (h.toLowerCase() === r.toLowerCase()) { c = l[h]; break }
                    }
                    a(r, c)
                }
                return t.extend(!0, o, s), o
            }
            var r = this;
            return "string" == typeof n && (n = document.getElementById(n) || document.querySelectorAll(n)), n = n.nodeName ? [n] : n, t.each(n, function(i, n) {
                var l = t.extend(!0, {}, r.opts);
                a(n, l, t.extend(!0, {}, r.userOptions), r.dataAttribute);
                var c = o(l, r.noMasksCache);
                void 0 !== c && (void 0 !== n.inputmask && n.inputmask.remove(), n.inputmask = new e, n.inputmask.opts = l, n.inputmask.noMasksCache = r.noMasksCache, n.inputmask.userOptions = t.extend(!0, {}, r.userOptions), n.inputmask.el = n, n.inputmask.maskset = c, t.data(n, "_inputmask_opts", l), s.call(n.inputmask, { action: "mask" }))
            }), n && n[0] ? n[0].inputmask || this : this
        },
        option: function(e, i) { return "string" == typeof e ? this.opts[e] : "object" == typeof e ? (t.extend(this.userOptions, e), this.el && i !== !0 && this.mask(this.el), this) : void 0 },
        unmaskedvalue: function(t) { return this.maskset = this.maskset || o(this.opts, this.noMasksCache), s.call(this, { action: "unmaskedvalue", value: t }) },
        remove: function() { return s.call(this, { action: "remove" }) },
        getemptymask: function() { return this.maskset = this.maskset || o(this.opts, this.noMasksCache), s.call(this, { action: "getemptymask" }) },
        hasMaskedValue: function() { return !this.opts.autoUnmask },
        isComplete: function() { return this.maskset = this.maskset || o(this.opts, this.noMasksCache), s.call(this, { action: "isComplete" }) },
        getmetadata: function() { return this.maskset = this.maskset || o(this.opts, this.noMasksCache), s.call(this, { action: "getmetadata" }) },
        isValid: function(t) { return this.maskset = this.maskset || o(this.opts, this.noMasksCache), s.call(this, { action: "isValid", value: t }) },
        format: function(t, e) { return this.maskset = this.maskset || o(this.opts, this.noMasksCache), s.call(this, { action: "format", value: t, metadata: e }) },
        analyseMask: function(e, i) {
            function o(t, e, i, o) { this.matches = [], this.openGroup = t || !1, this.isGroup = t || !1, this.isOptional = e || !1, this.isQuantifier = i || !1, this.isAlternator = o || !1, this.quantifier = { min: 1, max: 1 } }

            function s(e, o, s) {
                var n = i.definitions[o];
                s = void 0 !== s ? s : e.matches.length;
                var a = e.matches[s - 1];
                if (n && !_) {
                    n.placeholder = t.isFunction(n.placeholder) ? n.placeholder(i) : n.placeholder;
                    for (var r = n.prevalidator, l = r ? r.length : 0, c = 1; c < n.cardinality; c++) {
                        var h = l >= c ? r[c - 1] : [],
                            p = h.validator,
                            d = h.cardinality;
                        e.matches.splice(s++, 0, { fn: p ? "string" == typeof p ? new RegExp(p) : new function() { this.test = p } : new RegExp("."), cardinality: d ? d : 1, optionality: e.isOptional, newBlockMarker: void 0 === a || a.def !== (n.definitionSymbol || o), casing: n.casing, def: n.definitionSymbol || o, placeholder: n.placeholder, nativeDef: o }), a = e.matches[s - 1]
                    }
                    e.matches.splice(s++, 0, { fn: n.validator ? "string" == typeof n.validator ? new RegExp(n.validator) : new function() { this.test = n.validator } : new RegExp("."), cardinality: n.cardinality, optionality: e.isOptional, newBlockMarker: void 0 === a || a.def !== (n.definitionSymbol || o), casing: n.casing, def: n.definitionSymbol || o, placeholder: n.placeholder, nativeDef: o })
                } else e.matches.splice(s++, 0, { fn: null, cardinality: 0, optionality: e.isOptional, newBlockMarker: void 0 === a || a.def !== o, casing: null, def: i.staticDefinitionSymbol || o, placeholder: void 0 !== i.staticDefinitionSymbol ? o : void 0, nativeDef: o }), _ = !1
            }

            function n(e) {
                e && e.matches && t.each(e.matches, function(t, o) {
                    var a = e.matches[t + 1];
                    (void 0 === a || void 0 === a.matches || a.isQuantifier === !1) && o && o.isGroup && (o.isGroup = !1, s(o, i.groupmarker.start, 0), o.openGroup !== !0 && s(o, i.groupmarker.end)), n(o)
                })
            }

            function a() {
                if (g.length > 0) {
                    if (p = g[g.length - 1], s(p, c), p.isAlternator) {
                        d = g.pop();
                        for (var t = 0; t < d.matches.length; t++) d.matches[t].isGroup = !1;
                        g.length > 0 ? (p = g[g.length - 1], p.matches.push(d)) : v.matches.push(d)
                    }
                } else s(v, c)
            }

            function r(t) {
                function e(t) { return t === i.optionalmarker.start ? t = i.optionalmarker.end : t === i.optionalmarker.end ? t = i.optionalmarker.start : t === i.groupmarker.start ? t = i.groupmarker.end : t === i.groupmarker.end && (t = i.groupmarker.start), t } t.matches = t.matches.reverse();
                for (var o in t.matches) {
                    var s = parseInt(o);
                    if (t.matches[o].isQuantifier && t.matches[s + 1] && t.matches[s + 1].isGroup) {
                        var n = t.matches[o];
                        t.matches.splice(o, 1), t.matches.splice(s + 1, 0, n)
                    }
                    void 0 !== t.matches[o].matches ? t.matches[o] = r(t.matches[o]) : t.matches[o] = e(t.matches[o])
                }
                return t
            }
            for (var l, c, h, p, d, u, f, m = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, _ = !1, v = new o, g = [], k = []; l = m.exec(e);)
                if (c = l[0], _) a();
                else switch (c.charAt(0)) {
                    case i.escapeChar:
                        _ = !0;
                        break;
                    case i.optionalmarker.end:
                    case i.groupmarker.end:
                        if (h = g.pop(), h.openGroup = !1, void 0 !== h)
                            if (g.length > 0) {
                                if (p = g[g.length - 1], p.matches.push(h), p.isAlternator) {
                                    d = g.pop();
                                    for (var b = 0; b < d.matches.length; b++) d.matches[b].isGroup = !1;
                                    g.length > 0 ? (p = g[g.length - 1], p.matches.push(d)) : v.matches.push(d)
                                }
                            } else v.matches.push(h);
                        else a();
                        break;
                    case i.optionalmarker.start:
                        g.push(new o((!1), (!0)));
                        break;
                    case i.groupmarker.start:
                        g.push(new o((!0)));
                        break;
                    case i.quantifiermarker.start:
                        var y = new o((!1), (!1), (!0));
                        c = c.replace(/[{}]/g, "");
                        var x = c.split(","),
                            w = isNaN(x[0]) ? x[0] : parseInt(x[0]),
                            C = 1 === x.length ? w : isNaN(x[1]) ? x[1] : parseInt(x[1]);
                        if ("*" !== C && "+" !== C || (w = "*" === C ? 0 : 1), y.quantifier = { min: w, max: C }, g.length > 0) {
                            var P = g[g.length - 1].matches;
                            l = P.pop(), l.isGroup || (f = new o((!0)), f.matches.push(l), l = f), P.push(l), P.push(y)
                        } else l = v.matches.pop(), l.isGroup || (f = new o((!0)), f.matches.push(l), l = f), v.matches.push(l), v.matches.push(y);
                        break;
                    case i.alternatormarker:
                        g.length > 0 ? (p = g[g.length - 1], u = p.matches.pop()) : u = v.matches.pop(), u.isAlternator ? g.push(u) : (d = new o((!1), (!1), (!1), (!0)), d.matches.push(u), g.push(d));
                        break;
                    default:
                        a()
                }
            for (; g.length > 0;) h = g.pop(), v.matches.push(h);
            return v.matches.length > 0 && (n(v), k.push(v)), i.numericInput && r(k[0]), k
        }
    }, e.extendDefaults = function(i) { t.extend(!0, e.prototype.defaults, i) }, e.extendDefinitions = function(i) { t.extend(!0, e.prototype.defaults.definitions, i) }, e.extendAliases = function(i) { t.extend(!0, e.prototype.defaults.aliases, i) }, e.format = function(t, i, o) { return e(i).format(t, o) }, e.unmask = function(t, i) { return e(i).unmaskedvalue(t) }, e.isValid = function(t, i) { return e(i).isValid(t) }, e.remove = function(e) { t.each(e, function(t, e) { e.inputmask && e.inputmask.remove() }) }, e.escapeRegex = function(t) { var e = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"]; return t.replace(new RegExp("(\\" + e.join("|\\") + ")", "gim"), "\\$1") }, e.keyCode = { ALT: 18, BACKSPACE: 8, BACKSPACE_SAFARI: 127, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91, X: 88 }, window.Inputmask = e, e
}),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], function(e) { return t(e, document, window, navigator) }) : "object" == typeof exports ? t(require("jquery"), document, window, navigator) : t(jQuery, document, window, navigator) }(function(t, e, i, o, s) {
    var n = 0,
        a = function() {
            var e = o.userAgent,
                i = /msie\s\d+/i;
            return 0 < e.search(i) && (e = i.exec(e).toString(), e = e.split(" ")[1], 9 > e) && (t("html").addClass("lt-ie9"), !0)
        }();
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this,
            i = [].slice;
        if ("function" != typeof e) throw new TypeError;
        var o = i.call(arguments, 1),
            s = function() {
                if (this instanceof s) {
                    var n = function() {};
                    n.prototype = e.prototype;
                    var n = new n,
                        a = e.apply(n, o.concat(i.call(arguments)));
                    return Object(a) === a ? a : n
                }
                return e.apply(t, o.concat(i.call(arguments)))
            };
        return s
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var o = Object(this),
            s = o.length >>> 0;
        if (0 === s) return -1;
        if (i = +e || 0, 1 / 0 === Math.abs(i) && (i = 0), i >= s) return -1;
        for (i = Math.max(0 <= i ? i : s - Math.abs(i), 0); i < s;) {
            if (i in o && o[i] === t) return i;
            i++
        }
        return -1
    });
    var r = function(o, n, a) {
        this.VERSION = "2.1.6", this.input = o, this.plugin_count = a, this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0, this.raf_id = this.old_min_interval = null, this.is_update = this.is_key = this.no_diapason = this.force_redraw = this.dragging = !1, this.is_start = this.is_first_update = !0, this.is_click = this.is_resize = this.is_active = this.is_finish = !1, n = n || {}, this.$cache = { win: t(i), body: t(e.body), input: t(o), cont: null, rs: null, min: null, max: null, from: null, to: null, single: null, bar: null, line: null, s_single: null, s_from: null, s_to: null, shad_single: null, shad_from: null, shad_to: null, edge: null, grid: null, grid_labels: [] }, this.coords = { x_gap: 0, x_pointer: 0, w_rs: 0, w_rs_old: 0, w_handle: 0, p_gap: 0, p_gap_left: 0, p_gap_right: 0, p_step: 0, p_pointer: 0, p_handle: 0, p_single_fake: 0, p_single_real: 0, p_from_fake: 0, p_from_real: 0, p_to_fake: 0, p_to_real: 0, p_bar_x: 0, p_bar_w: 0, grid_gap: 0, big_num: 0, big: [], big_w: [], big_p: [], big_x: [] }, this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 };
        var r = this.$cache.input;
        o = r.prop("value");
        var l;
        a = { type: "single", min: 10, max: 100, from: null, to: null, step: 1, min_interval: 0, max_interval: 0, drag_interval: !1, values: [], p_values: [], from_fixed: !1, from_min: null, from_max: null, from_shadow: !1, to_fixed: !1, to_min: null, to_max: null, to_shadow: !1, prettify_enabled: !0, prettify_separator: " ", prettify: null, force_edges: !1, keyboard: !1, keyboard_step: 5, grid: !1, grid_margin: !0, grid_num: 4, grid_snap: !1, hide_min_max: !1, hide_from_to: !1, prefix: "", postfix: "", max_postfix: "", decorate_both: !0, values_separator: " — ", input_values_separator: ";", disable: !1, onStart: null, onChange: null, onFinish: null, onUpdate: null }, "INPUT" !== r[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", r[0]), r = { type: r.data("type"), min: r.data("min"), max: r.data("max"), from: r.data("from"), to: r.data("to"), step: r.data("step"), min_interval: r.data("minInterval"), max_interval: r.data("maxInterval"), drag_interval: r.data("dragInterval"), values: r.data("values"), from_fixed: r.data("fromFixed"), from_min: r.data("fromMin"), from_max: r.data("fromMax"), from_shadow: r.data("fromShadow"), to_fixed: r.data("toFixed"), to_min: r.data("toMin"), to_max: r.data("toMax"), to_shadow: r.data("toShadow"), prettify_enabled: r.data("prettifyEnabled"), prettify_separator: r.data("prettifySeparator"), force_edges: r.data("forceEdges"), keyboard: r.data("keyboard"), keyboard_step: r.data("keyboardStep"), grid: r.data("grid"), grid_margin: r.data("gridMargin"), grid_num: r.data("gridNum"), grid_snap: r.data("gridSnap"), hide_min_max: r.data("hideMinMax"), hide_from_to: r.data("hideFromTo"), prefix: r.data("prefix"), postfix: r.data("postfix"), max_postfix: r.data("maxPostfix"), decorate_both: r.data("decorateBoth"), values_separator: r.data("valuesSeparator"), input_values_separator: r.data("inputValuesSeparator"), disable: r.data("disable") }, r.values = r.values && r.values.split(",");
        for (l in r) r.hasOwnProperty(l) && (r[l] !== s && "" !== r[l] || delete r[l]);
        o !== s && "" !== o && (o = o.split(r.input_values_separator || n.input_values_separator || ";"), o[0] && o[0] == +o[0] && (o[0] = +o[0]), o[1] && o[1] == +o[1] && (o[1] = +o[1]), n && n.values && n.values.length ? (a.from = o[0] && n.values.indexOf(o[0]), a.to = o[1] && n.values.indexOf(o[1])) : (a.from = o[0] && +o[0], a.to = o[1] && +o[1])), t.extend(a, n), t.extend(a, r), this.options = a, this.update_check = {}, this.validate(), this.result = { input: this.$cache.input, slider: null, min: this.options.min, max: this.options.max, from: this.options.from, from_percent: 0, from_value: null, to: this.options.to, to_percent: 0, to_value: null }, this.init()
    };
    r.prototype = {
            init: function(t) { this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene() },
            append: function() { this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + '"></span>'), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.cont.removeClass("irs-disabled"), this.$cache.input[0].disabled = !1, this.bindEvents()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize") },
            setTopHandler: function() {
                var t = this.options.max,
                    e = this.options.to;
                this.options.from > this.options.min && e === t ? this.$cache.s_from.addClass("type_last") : e < t && this.$cache.s_to.addClass("type_last")
            },
            changeLevel: function(t) {
                switch (t) {
                    case "single":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                        break;
                    case "from":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                }
            },
            appendDisableMask: function() { this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled") },
            remove: function() { this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), a && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id) },
            bindEvents: function() { this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), a && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)))) },
            pointerMove: function(t) { this.dragging && (this.coords.x_pointer = (t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc()) },
            pointerUp: function(e) { this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, a && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], e.target) || this.dragging) && this.callOnFinish(), this.dragging = !1) },
            pointerDown: function(e, i) {
                i.preventDefault();
                var o = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                2 !== i.button && ("both" === e && this.setTempMinInterval(), e || (e = this.target || "from"), this.current_plugin = this.plugin_count, this.target = e, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = o - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(e), a && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
            },
            pointerClick: function(t, e) {
                e.preventDefault();
                var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
            },
            key: function(t, e) {
                if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                    switch (e.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            e.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            e.preventDefault(), this.moveByKey(!0)
                    }
                    return !0
                }
            },
            moveByKey: function(t) {
                var e = this.coords.p_pointer,
                    e = t ? e + this.options.keyboard_step : e - this.options.keyboard_step;
                this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
            },
            setMinMax: function() { this.options && (this.options.hide_min_max ? (this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none") : (this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1))) },
            setTempMinInterval: function() {
                var t = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
            },
            restoreOriginalMinInterval: function() { null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null) },
            calc: function(t) {
                if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                    switch (this.calcPointerPercent(), t = this.getHandleX(), "both" === this.target && (this.coords.p_gap = 0, t = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(t)), this.target) {
                        case "base":
                            var e = (this.options.max - this.options.min) / 100;
                            t = (this.result.from - this.options.min) / e, e = (this.result.to - this.options.min) / e, this.coords.p_single_real = this.toFixed(t), this.coords.p_from_real = this.toFixed(t), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(t), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(t), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(t), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            t = this.toFixed(t + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both_one":
                            if (!this.options.from_fixed && !this.options.to_fixed) {
                                var i = this.convertToRealPercent(t);
                                t = this.result.to_percent - this.result.from_percent;
                                var o = t / 2,
                                    e = i - o,
                                    i = i + o;
                                0 > e && (e = 0, i = e + t), 100 < i && (i = 100, e = i - t), this.coords.p_from_real = this.calcWithStep(e), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(i), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                            }
                    }
                    "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                }
            },
            calcPointerPercent: function() { this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0 },
            convertToRealPercent: function(t) { return t / (100 - this.coords.p_handle) * 100 },
            convertToFakePercent: function(t) { return t / 100 * (100 - this.coords.p_handle) },
            getHandleX: function() {
                var t = 100 - this.coords.p_handle,
                    e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return 0 > e ? e = 0 : e > t && (e = t), e
            },
            calcHandlePercent: function() { this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100) },
            chooseHandle: function(t) { return "single" === this.options.type ? "single" : t >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from" },
            calcMinMax: function() { this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100) },
            calcLabels: function() { this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) },
            updateScene: function() { this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300)) },
            drawHandles: function() { this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%" : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click || this.is_first_update) && (this.is_first_update = this.is_click = this.is_key = !1, this.callOnFinish()), this.is_finish = this.is_resize = this.is_update = !1), this.force_redraw = this.is_click = this.is_key = this.is_start = !1)) },
            drawLabels: function() {
                if (this.options) {
                    var t, e = this.options.values.length,
                        i = this.options.p_values;
                    if (!this.options.hide_from_to)
                        if ("single" === this.options.type) e = e ? this.decorate(i[this.result.from]) : this.decorate(this._prettify(this.result.from), this.result.from), this.$cache.single.html(e), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
                        else {
                            e ? (this.options.decorate_both ? (e = this.decorate(i[this.result.from]), e += this.options.values_separator, e += this.decorate(i[this.result.to])) : e = this.decorate(i[this.result.from] + this.options.values_separator + i[this.result.to]), t = this.decorate(i[this.result.from]), i = this.decorate(i[this.result.to])) : (this.options.decorate_both ? (e = this.decorate(this._prettify(this.result.from), this.result.from), e += this.options.values_separator, e += this.decorate(this._prettify(this.result.to), this.result.to)) : e = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to), t = this.decorate(this._prettify(this.result.from), this.result.from), i = this.decorate(this._prettify(this.result.to), this.result.to)), this.$cache.single.html(e), this.$cache.from.html(t), this.$cache.to.html(i), this.calcLabels(), i = Math.min(this.labels.p_single_left, this.labels.p_from_left), e = this.labels.p_single_left + this.labels.p_single_fake, t = this.labels.p_to_left + this.labels.p_to_fake;
                            var o = Math.max(e, t);
                            this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", o = t) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", o = Math.max(e, t))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), this.$cache.min[0].style.visibility = i < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = o > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                        }
                }
            },
            drawShadow: function() {
                var t = this.options,
                    e = this.$cache,
                    i = "number" == typeof t.from_min && !isNaN(t.from_min),
                    o = "number" == typeof t.from_max && !isNaN(t.from_max),
                    s = "number" == typeof t.to_min && !isNaN(t.to_min),
                    n = "number" == typeof t.to_max && !isNaN(t.to_max);
                "single" === t.type ? t.from_shadow && (i || o) ? (i = this.convertToPercent(i ? t.from_min : t.min), o = this.convertToPercent(o ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), o = this.toFixed(o - this.coords.p_handle / 100 * o), i += this.coords.p_handle / 2, e.shad_single[0].style.display = "block", e.shad_single[0].style.left = i + "%", e.shad_single[0].style.width = o + "%") : e.shad_single[0].style.display = "none" : (t.from_shadow && (i || o) ? (i = this.convertToPercent(i ? t.from_min : t.min), o = this.convertToPercent(o ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), o = this.toFixed(o - this.coords.p_handle / 100 * o), i += this.coords.p_handle / 2, e.shad_from[0].style.display = "block", e.shad_from[0].style.left = i + "%", e.shad_from[0].style.width = o + "%") : e.shad_from[0].style.display = "none", t.to_shadow && (s || n) ? (s = this.convertToPercent(s ? t.to_min : t.min), t = this.convertToPercent(n ? t.to_max : t.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), t = this.toFixed(t - this.coords.p_handle / 100 * t), s += this.coords.p_handle / 2, e.shad_to[0].style.display = "block", e.shad_to[0].style.left = s + "%", e.shad_to[0].style.width = t + "%") : e.shad_to[0].style.display = "none")
            },
            writeToInput: function() { "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to)) },
            callOnStart: function() { this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && this.options.onStart(this.result) },
            callOnChange: function() { this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && this.options.onChange(this.result) },
            callOnFinish: function() { this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && this.options.onFinish(this.result) },
            callOnUpdate: function() { this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && this.options.onUpdate(this.result) },
            toggleInput: function() { this.$cache.input.toggleClass("irs-hidden-input") },
            convertToPercent: function(t, e) { var i = this.options.max - this.options.min; return i ? this.toFixed((e ? t : t - this.options.min) / (i / 100)) : (this.no_diapason = !0, 0) },
            convertToValue: function(t) {
                var e, i, o = this.options.min,
                    s = this.options.max,
                    n = o.toString().split(".")[1],
                    a = s.toString().split(".")[1],
                    r = 0,
                    l = 0;
                return 0 === t ? this.options.min : 100 === t ? this.options.max : (n && (r = e = n.length), a && (r = i = a.length), e && i && (r = e >= i ? e : i), 0 > o && (l = Math.abs(o), o = +(o + l).toFixed(r), s = +(s + l).toFixed(r)), t = (s - o) / 100 * t + o, (o = this.options.step.toString().split(".")[1]) ? t = +t.toFixed(o.length) : (t /= this.options.step, t *= this.options.step, t = +t.toFixed(0)), l && (t -= l), l = o ? +t.toFixed(o.length) : this.toFixed(t), l < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l)
            },
            calcWithStep: function(t) { var e = Math.round(t / this.coords.p_step) * this.coords.p_step; return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e) },
            checkMinInterval: function(t, e, i) { var o = this.options; return o.min_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t < o.min_interval && (t = e - o.min_interval) : t - e < o.min_interval && (t = e + o.min_interval), this.convertToPercent(t)) : t },
            checkMaxInterval: function(t, e, i) { var o = this.options; return o.max_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t > o.max_interval && (t = e - o.max_interval) : t - e > o.max_interval && (t = e + o.max_interval), this.convertToPercent(t)) : t },
            checkDiapason: function(t, e, i) { t = this.convertToValue(t); var o = this.options; return "number" != typeof e && (e = o.min), "number" != typeof i && (i = o.max), t < e && (t = e), t > i && (t = i), this.convertToPercent(t) },
            toFixed: function(t) { return t = t.toFixed(20), +t },
            _prettify: function(t) { return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t },
            prettify: function(t) { return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator) },
            checkEdges: function(t, e) { return this.options.force_edges ? (0 > t ? t = 0 : t > 100 - e && (t = 100 - e), this.toFixed(t)) : this.toFixed(t) },
            validate: function() {
                var t, e, i = this.options,
                    o = this.result,
                    s = i.values,
                    n = s.length;
                if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.keyboard_step && (i.keyboard_step = +i.keyboard_step), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), n)
                    for (i.p_values = [], i.min = 0, i.max = n - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < n; e++) t = +s[e], isNaN(t) ? t = s[e] : (s[e] = t, t = this._prettify(t)), i.p_values.push(t);
                ("number" != typeof i.from || isNaN(i.from)) && (i.from = i.min), ("number" != typeof i.to || isNaN(i.to)) && (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max), i.to < i.min && (i.to = i.min), i.to > i.max && (i.to = i.max), this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)), i.from > i.to && (i.from = i.to), i.to < i.from && (i.to = i.from)), ("number" != typeof i.step || isNaN(i.step) || !i.step || 0 > i.step) && (i.step = 1), ("number" != typeof i.keyboard_step || isNaN(i.keyboard_step) || !i.keyboard_step || 0 > i.keyboard_step) && (i.keyboard_step = 5), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), o && (o.min !== i.min && (o.min = i.min), o.max !== i.max && (o.max = i.max), (o.from < o.min || o.from > o.max) && (o.from = i.from), (o.to < o.min || o.to > o.max) && (o.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || 0 > i.min_interval) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || 0 > i.max_interval) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
            },
            decorate: function(t, e) {
                var i = "",
                    o = this.options;
                return o.prefix && (i += o.prefix), i += t, o.max_postfix && (o.values.length && t === o.p_values[o.max] ? (i += o.max_postfix, o.postfix && (i += " ")) : e === o.max && (i += o.max_postfix, o.postfix && (i += " "))), o.postfix && (i += o.postfix), i
            },
            updateFrom: function() { this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from]) },
            updateTo: function() { this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to]) },
            updateResult: function() { this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo() },
            appendGrid: function() {
                if (this.options.grid) {
                    var t, e, i = this.options;
                    t = i.max - i.min;
                    var o, s, n, a, r, l = i.grid_num,
                        c = 4,
                        h = "";
                    for (this.calcGridMargin(), i.grid_snap ? (l = t / i.step, o = this.toFixed(i.step / (t / 100))) : o = this.toFixed(100 / l), 4 < l && (c = 3), 7 < l && (c = 2), 14 < l && (c = 1), 28 < l && (c = 0), t = 0; t < l + 1; t++) {
                        for (n = c, s = this.toFixed(o * t), 100 < s && (s = 100, n -= 2, 0 > n && (n = 0)), this.coords.big[t] = s, a = (s - o * (t - 1)) / (n + 1), e = 1; e <= n && 0 !== s; e++) r = this.toFixed(s - a * e), h += '<span class="irs-grid-pol small" style="left: ' + r + '%"></span>';
                        h += '<span class="irs-grid-pol" style="left: ' + s + '%"></span>', e = this.convertToValue(s), e = i.values.length ? i.p_values[e] : this._prettify(e), h += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + s + '%">' + e + "</span>"
                    }
                    this.coords.big_num = Math.ceil(l + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(h), this.cacheGridLabels()
                }
            },
            cacheGridLabels: function() {
                var t, e, i = this.coords.big_num;
                for (e = 0; e < i; e++) t = this.$cache.grid.find(".js-grid-text-" + e), this.$cache.grid_labels.push(t);
                this.calcGridLabels()
            },
            calcGridLabels: function() {
                var t, e;
                e = [];
                var i = [],
                    o = this.coords.big_num;
                for (t = 0; t < o; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), e[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), i[t] = this.toFixed(e[t] + this.coords.big_p[t]);
                for (this.options.force_edges && (e[0] < -this.coords.grid_gap && (e[0] = -this.coords.grid_gap, i[0] = this.toFixed(e[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[o - 1] > 100 + this.coords.grid_gap && (i[o - 1] = 100 + this.coords.grid_gap, e[o - 1] = this.toFixed(i[o - 1] - this.coords.big_p[o - 1]), this.coords.big_x[o - 1] = this.toFixed(this.coords.big_p[o - 1] - this.coords.grid_gap))), this.calcGridCollision(2, e, i), this.calcGridCollision(4, e, i), t = 0; t < o; t++) e = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (e.style.marginLeft = -this.coords.big_x[t] + "%")
            },
            calcGridCollision: function(t, e, i) { var o, s, n, a = this.coords.big_num; for (o = 0; o < a && (s = o + t / 2, !(s >= a)); o += t) n = this.$cache.grid_labels[s][0], n.style.visibility = i[o] <= e[s] ? "visible" : "hidden" },
            calcGridMargin: function() { this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%")) },
            update: function(e) { this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = t.extend(this.options, e), this.validate(), this.updateResult(e), this.toggleInput(), this.remove(), this.init(!0)) },
            reset: function() { this.input && (this.updateResult(), this.update()) },
            destroy: function() { this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null) }
        }, t.fn.ionRangeSlider = function(e) { return this.each(function() { t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new r(this, e, (n++))) }) },
        function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], o = 0; o < e.length && !i.requestAnimationFrame; ++o) i.requestAnimationFrame = i[e[o] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[o] + "CancelAnimationFrame"] || i[e[o] + "CancelRequestAnimationFrame"];
            i.requestAnimationFrame || (i.requestAnimationFrame = function(e, o) {
                var s = (new Date).getTime(),
                    n = Math.max(0, 16 - (s - t)),
                    a = i.setTimeout(function() { e(s + n) }, n);
                return t = s + n, a
            }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) { clearTimeout(t) })
        }()
}), ! function(t) { "function" == typeof define && define.amd ? define(["jquery", "inputmask"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("./inputmask")) : t(jQuery, window.Inputmask) }(function(t, e) {
    return void 0 === t.fn.inputmask && (t.fn.inputmask = function(i, o) {
        var s, n = this[0];
        if (void 0 === o && (o = {}), "string" == typeof i) switch (i) {
            case "unmaskedvalue":
                return n && n.inputmask ? n.inputmask.unmaskedvalue() : t(n).val();
            case "remove":
                return this.each(function() { this.inputmask && this.inputmask.remove() });
            case "getemptymask":
                return n && n.inputmask ? n.inputmask.getemptymask() : "";
            case "hasMaskedValue":
                return !(!n || !n.inputmask) && n.inputmask.hasMaskedValue();
            case "isComplete":
                return !n || !n.inputmask || n.inputmask.isComplete();
            case "getmetadata":
                return n && n.inputmask ? n.inputmask.getmetadata() : void 0;
            case "setvalue":
                t(n).val(o), n && void 0 === n.inputmask && t(n).triggerHandler("setvalue");
                break;
            case "option":
                if ("string" != typeof o) return this.each(function() { if (void 0 !== this.inputmask) return this.inputmask.option(o) });
                if (n && void 0 !== n.inputmask) return n.inputmask.option(o);
                break;
            default:
                return o.alias = i, s = new e(o), this.each(function() { s.mask(this) })
        } else { if ("object" == typeof i) return s = new e(i), void 0 === i.mask && void 0 === i.alias ? this.each(function() { return void 0 !== this.inputmask ? this.inputmask.option(i) : void s.mask(this) }) : this.each(function() { s.mask(this) }); if (void 0 === i) return this.each(function() { s = new e(o), s.mask(this) }) }
    }), t.fn.inputmask
}), ! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(t) {
    var e, i, o, s, n, a, r = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        h = "BeforeAppend",
        p = "MarkupParse",
        d = "Open",
        u = "Change",
        f = "mfp",
        m = "." + f,
        _ = "mfp-ready",
        v = "mfp-removing",
        g = "mfp-prevent-close",
        k = function() {},
        b = !!window.jQuery,
        y = t(window),
        x = function(t, i) { e.ev.on(f + t + m, i) },
        w = function(e, i, o, s) { var n = document.createElement("div"); return n.className = "mfp-" + e, o && (n.innerHTML = o), s ? i && i.appendChild(n) : (n = t(n), i && n.appendTo(i)), n },
        C = function(i, o) { e.ev.triggerHandler(f + i, o), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(o) ? o : [o])) },
        P = function(i) { return i === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = i), e.currTemplate.closeBtn },
        E = function() { t.magnificPopup.instance || (e = new k, e.init(), t.magnificPopup.instance = e) },
        T = function() {
            var t = document.createElement("p").style,
                e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
                if (e.pop() + "Transition" in t) return !0;
            return !1
        };
    k.prototype = {
        constructor: k,
        init: function() {
            var i = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = T(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = t(document), e.popupsCache = {}
        },
        open: function(i) {
            var s;
            if (i.isObj === !1) {
                e.items = i.items.toArray(), e.index = 0;
                var a, r = i.items;
                for (s = 0; s < r.length; s++)
                    if (a = r[s], a.parsed && (a = a.el[0]), a === i.el[0]) { e.index = s; break }
            } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
            if (e.isOpen) return void e.updateItemHTML();
            e.types = [], n = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = o, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = w("bg").on("click" + m, function() { e.close() }), e.wrap = w("wrap").attr("tabindex", -1).on("click" + m, function(t) { e._checkIfClose(t.target) && e.close() }), e.container = w("container", e.wrap)), e.contentContainer = w("content"), e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
            var l = t.magnificPopup.modules;
            for (s = 0; s < l.length; s++) {
                var c = l[s];
                c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
            }
            C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (x(p, function(t, e, i, o) { i.close_replaceWith = P(o.type) }), n += " mfp-close-btn-in") : e.wrap.append(P())), e.st.alignTop && (n += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: y.scrollTop(), position: "absolute" }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: o.height(), position: "absolute" }), e.st.enableEscapeKey && o.on("keyup" + m, function(t) { 27 === t.keyCode && e.close() }), y.on("resize" + m, function() { e.updateSize() }), e.st.closeOnContentClick || (n += " mfp-auto-cursor"), n && e.wrap.addClass(n);
            var h = e.wH = y.height(),
                u = {};
            if (e.fixedContentPos && e._hasScrollBar(h)) {
                var f = e._getScrollbarSize();
                f && (u.marginRight = f)
            }
            e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : u.overflow = "hidden");
            var v = e.st.mainClass;
            return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), C("BuildControls"), t("html").css(u), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() { e.content ? (e._addClassToMFP(_), e._setFocus()) : e.bgOverlay.addClass(_), o.on("focusin" + m, e._onFocusIn) }, 16), e.isOpen = !0, e.updateSize(h), C(d), i
        },
        close: function() { e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() { e._close() }, e.st.removalDelay)) : e._close()) },
        _close: function() {
            C(r);
            var i = v + " " + _ + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var s = { marginRight: "" };
                e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s)
            }
            o.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(c)
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    o = window.innerHeight * i;
                e.wrap.css("height", o), e.wH = o
            } else e.wH = t || y.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize")
        },
        updateItemHTML: function() {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var o = i.type;
            if (C("BeforeChange", [e.currItem ? e.currItem.type : "", o]), e.currItem = i, !e.currTemplate[o]) {
                var n = !!e.st[o] && e.st[o].markup;
                C("FirstMarkupParse", n), n ? e.currTemplate[o] = t(n) : e.currTemplate[o] = !0
            }
            s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
            var a = e["get" + o.charAt(0).toUpperCase() + o.slice(1)](i, e.currTemplate[o]);
            e.appendContent(a, o), i.preloaded = !0, C(u, i), s = i.type, e.container.prepend(e.contentContainer), C("AfterChange")
        },
        appendContent: function(t, i) { e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(P()) : e.content = t : e.content = "", C(h), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content) },
        parseEl: function(i) {
            var o, s = e.items[i];
            if (s.tagName ? s = { el: t(s) } : (o = s.type, s = { data: s, src: s.src }), s.el) {
                for (var n = e.types, a = 0; a < n.length; a++)
                    if (s.el.hasClass("mfp-" + n[a])) { o = n[a]; break } s.src = s.el.attr("data-mfp-src"), s.src || (s.src = s.el.attr("href"))
            }
            return s.type = o || e.st.type || "inline", s.index = i, s.parsed = !0, e.items[i] = s, C("ElementParse", s), e.items[i]
        },
        addGroup: function(t, i) {
            var o = function(o) { o.mfpEl = this, e._openClick(o, t, i) };
            i || (i = {});
            var s = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(s).on(s, o)) : (i.isObj = !1, i.delegate ? t.off(s).on(s, i.delegate, o) : (i.items = t, t.off(s).on(s, o)))
        },
        _openClick: function(i, o, s) {
            var n = void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick;
            if (n || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var a = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
                if (a)
                    if (t.isFunction(a)) { if (!a.call(e)) return !0 } else if (y.width() < a) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), s.el = t(i.mfpEl), s.delegate && (s.items = o.find(s.delegate)), e.open(s)
            }
        },
        updateStatus: function(t, o) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), o || "loading" !== t || (o = e.st.tLoading);
                var s = { status: t, text: o };
                C("UpdateStatus", s), t = s.status, o = s.text, e.preloader.html(o), e.preloader.find("a").on("click", function(t) { t.stopImmediatePropagation() }), e.container.addClass("mfp-s-" + t), i = t
            }
        },
        _checkIfClose: function(i) {
            if (!t(i).hasClass(g)) {
                var o = e.st.closeOnContentClick,
                    s = e.st.closeOnBgClick;
                if (o && s) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) { if (o) return !0 } else if (s && t.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(t) { e.bgOverlay.addClass(t), e.wrap.addClass(t) },
        _removeClassFromMFP: function(t) { this.bgOverlay.removeClass(t), e.wrap.removeClass(t) },
        _hasScrollBar: function(t) { return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || y.height()) },
        _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        },
        _onFocusIn: function(i) { return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1) },
        _parseMarkup: function(e, i, o) {
            var s;
            o.data && (i = t.extend(o.data, i)), C(p, [e, i, o]), t.each(i, function(i, o) { if (void 0 === o || o === !1) return !0; if (s = i.split("_"), s.length > 1) { var n = e.find(m + "-" + s[0]); if (n.length > 0) { var a = s[1]; "replaceWith" === a ? n[0] !== o[0] && n.replaceWith(o) : "img" === a ? n.is("img") ? n.attr("src", o) : n.replaceWith(t("<img>").attr("src", o).attr("class", n.attr("class"))) : n.attr(s[1], o) } } else e.find(m + "-" + i).html(o) })
        },
        _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = { instance: null, proto: k.prototype, modules: [], open: function(e, i) { return E(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e) }, close: function() { return t.magnificPopup.instance && t.magnificPopup.instance.close() }, registerModule: function(e, i) { i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, t.fn.magnificPopup = function(i) {
        E();
        var o = t(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var s, n = b ? o.data("magnificPopup") : o[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                n.items ? s = n.items[a] : (s = o, n.delegate && (s = s.find(n.delegate)), s = s.eq(a)), e._openClick({ mfpEl: s }, o, n)
            } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else i = t.extend(!0, {}, i), b ? o.data("magnificPopup", i) : o[0].magnificPopup = i, e.addGroup(o, i);
        return o
    };
    var M, $, S, I = "inline",
        F = function() { S && ($.after(S.addClass(M)).detach(), S = null) };
    t.magnificPopup.registerModule(I, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function() { e.types.push(I), x(r + "." + I, function() { F() }) },
            getInline: function(i, o) {
                if (F(), i.src) {
                    var s = e.st.inline,
                        n = t(i.src);
                    if (n.length) {
                        var a = n[0].parentNode;
                        a && a.tagName && ($ || (M = s.hiddenClass, $ = w(M), M = "mfp-" + M), S = n.after($).detach().removeClass(M)), e.updateStatus("ready")
                    } else e.updateStatus("error", s.tNotFound), n = t("<div>");
                    return i.inlineElement = n, n
                }
                return e.updateStatus("ready"), e._parseMarkup(o, {}, i), o
            }
        }
    });
    var O, A = "ajax",
        D = function() { O && t(document.body).removeClass(O) },
        j = function() { D(), e.req && e.req.abort() };
    t.magnificPopup.registerModule(A, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function() { e.types.push(A), O = e.st.ajax.cursor, x(r + "." + A, j), x("BeforeChange." + A, j) },
            getAjax: function(i) {
                O && t(document.body).addClass(O), e.updateStatus("loading");
                var o = t.extend({
                    url: i.src,
                    success: function(o, s, n) {
                        var a = { data: o, xhr: n };
                        C("ParseAjax", a), e.appendContent(t(a.data), A), i.finished = !0, D(), e._setFocus(), setTimeout(function() { e.wrap.addClass(_) }, 16), e.updateStatus("ready"), C("AjaxContentAdded")
                    },
                    error: function() { D(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src)) }
                }, e.st.ajax.settings);
                return e.req = t.ajax(o), ""
            }
        }
    });
    var L, B = function(i) { if (i.data && void 0 !== i.data.title) return i.data.title; var o = e.st.image.titleSrc; if (o) { if (t.isFunction(o)) return o.call(e, i); if (i.el) return i.el.attr(o) || "" } return "" };
    t.magnificPopup.registerModule("image", {
        options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
        proto: {
            initImage: function() {
                var i = e.st.image,
                    o = ".image";
                e.types.push("image"), x(d + o, function() { "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor) }), x(r + o, function() { i.cursor && t(document.body).removeClass(i.cursor), y.off("resize" + m) }), x("Resize" + o, e.resizeImage), e.isLowIE && x("AfterChange", e.resizeImage)
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                }
            },
            _onImageHasSize: function(t) { t.img && (t.hasSize = !0, L && clearInterval(L), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1)) },
            findImageSize: function(t) {
                var i = 0,
                    o = t.img[0],
                    s = function(n) { L && clearInterval(L), L = setInterval(function() { return o.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(L), i++, void(3 === i ? s(10) : 40 === i ? s(50) : 100 === i && s(500))) }, n) };
                s(1)
            },
            getImage: function(i, o) {
                var s = 0,
                    n = function() { i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (s++, 200 > s ? setTimeout(n, 100) : a())) },
                    a = function() { i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", r.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0) },
                    r = e.st.image,
                    l = o.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", n).on("error.mfploader", a), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return e._parseMarkup(o, { title: B(i), img_replaceWith: i.img }, i), e.resizeImage(), i.hasSize ? (L && clearInterval(L), i.loadError ? (o.addClass("mfp-loading"), e.updateStatus("error", r.tError.replace("%url%", i.src))) : (o.removeClass("mfp-loading"), e.updateStatus("ready")), o) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, o.addClass("mfp-loading"), e.findImageSize(i)), o)
            }
        }
    });
    var N, G = function() { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
    t.magnificPopup.registerModule("zoom", {
        options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(t) { return t.is("img") ? t : t.find("img") } },
        proto: {
            initZoom: function() {
                var t, i = e.st.zoom,
                    o = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var s, n, a = i.duration,
                        c = function(t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                o = "all " + i.duration / 1e3 + "s " + i.easing,
                                s = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                n = "transition";
                            return s["-webkit-" + n] = s["-moz-" + n] = s["-o-" + n] = s[n] = o, e.css(s), e
                        },
                        h = function() { e.content.css("visibility", "visible") };
                    x("BuildControls" + o, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void h();
                            n = c(t), n.css(e._getOffset()), e.wrap.append(n), s = setTimeout(function() { n.css(e._getOffset(!0)), s = setTimeout(function() { h(), setTimeout(function() { n.remove(), t = n = null, C("ZoomAnimationEnded") }, 16) }, a) }, 16)
                        }
                    }), x(l + o, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.st.removalDelay = a, !t) {
                                if (t = e._getItemToZoom(), !t) return;
                                n = c(t)
                            }
                            n.css(e._getOffset(!0)), e.wrap.append(n), e.content.css("visibility", "hidden"), setTimeout(function() { n.css(e._getOffset()) }, 16)
                        }
                    }), x(r + o, function() { e._allowZoom() && (h(), n && n.remove(), t = null) })
                }
            },
            _allowZoom: function() { return "image" === e.currItem.type },
            _getItemToZoom: function() { return !!e.currItem.hasSize && e.currItem.img },
            _getOffset: function(i) {
                var o;
                o = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                var s = o.offset(),
                    n = parseInt(o.css("padding-top"), 10),
                    a = parseInt(o.css("padding-bottom"), 10);
                s.top -= t(window).scrollTop() - n;
                var r = { width: o.width(), height: (b ? o.innerHeight() : o[0].offsetHeight) - a - n };
                return G() ? r["-moz-transform"] = r.transform = "translate(" + s.left + "px," + s.top + "px)" : (r.left = s.left, r.top = s.top), r
            }
        }
    });
    var R = "iframe",
        H = "//about:blank",
        z = function(t) {
            if (e.currTemplate[R]) {
                var i = e.currTemplate[R].find("iframe");
                i.length && (t || (i[0].src = H), e.isIE8 && i.css("display", t ? "block" : "none"))
            }
        };
    t.magnificPopup.registerModule(R, {
        options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
        proto: {
            initIframe: function() { e.types.push(R), x("BeforeChange", function(t, e, i) { e !== i && (e === R ? z() : i === R && z(!0)) }), x(r + "." + R, function() { z() }) },
            getIframe: function(i, o) {
                var s = i.src,
                    n = e.st.iframe;
                t.each(n.patterns, function() { return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1) : void 0 });
                var a = {};
                return n.srcAction && (a[n.srcAction] = s), e._parseMarkup(o, a, i), e.updateStatus("ready"), o
            }
        }
    });
    var W = function(t) { var i = e.items.length; return t > i - 1 ? t - i : 0 > t ? i + t : t },
        K = function(t, e, i) { return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i) };
    t.magnificPopup.registerModule("gallery", {
        options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
        proto: {
            initGallery: function() {
                var i = e.st.gallery,
                    s = ".mfp-gallery";
                return e.direction = !0, !(!i || !i.enabled) && (n += " mfp-gallery", x(d + s, function() { i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function() { return e.items.length > 1 ? (e.next(), !1) : void 0 }), o.on("keydown" + s, function(t) { 37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next() }) }), x("UpdateStatus" + s, function(t, i) { i.text && (i.text = K(i.text, e.currItem.index, e.items.length)) }), x(p + s, function(t, o, s, n) {
                    var a = e.items.length;
                    s.counter = a > 1 ? K(i.tCounter, n.index, a) : ""
                }), x("BuildControls" + s, function() {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var o = i.arrowMarkup,
                            s = e.arrowLeft = t(o.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g),
                            n = e.arrowRight = t(o.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
                        s.click(function() { e.prev() }), n.click(function() { e.next() }), e.container.append(s.add(n))
                    }
                }), x(u + s, function() { e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() { e.preloadNearbyImages(), e._preloadTimeout = null }, 16) }), void x(r + s, function() { o.off(s), e.wrap.off("click" + s), e.arrowRight = e.arrowLeft = null }))
            },
            next: function() { e.direction = !0, e.index = W(e.index + 1), e.updateItemHTML() },
            prev: function() { e.direction = !1, e.index = W(e.index - 1), e.updateItemHTML() },
            goTo: function(t) { e.direction = t >= e.index, e.index = t, e.updateItemHTML() },
            preloadNearbyImages: function() {
                var t, i = e.st.gallery.preload,
                    o = Math.min(i[0], e.items.length),
                    s = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? s : o); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? o : s); t++) e._preloadItem(e.index - t)
            },
            _preloadItem: function(i) {
                if (i = W(i), !e.items[i].preloaded) {
                    var o = e.items[i];
                    o.parsed || (o = e.parseEl(i)), C("LazyLoad", o), "image" === o.type && (o.img = t('<img class="mfp-img" />').on("load.mfploader", function() { o.hasSize = !0 }).on("error.mfploader", function() { o.hasSize = !0, o.loadError = !0, C("LazyLoadError", o) }).attr("src", o.src)), o.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    t.magnificPopup.registerModule(U, {
        options: { replaceSrc: function(t) { return t.src.replace(/\.\w+$/, function(t) { return "@2x" + t }) }, ratio: 1 },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina,
                        i = t.ratio;
                    i = isNaN(i) ? i() : i, i > 1 && (x("ImageHasSize." + U, function(t, e) { e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" }) }), x("ElementParse." + U, function(e, o) { o.src = t.replaceSrc(o, i) }))
                }
            }
        }
    }), E()
});