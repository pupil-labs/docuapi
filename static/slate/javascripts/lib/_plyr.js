! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function() {
        return t(e, document)
    }) : e.plyr = t(e, document)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n() {
        var e, n, r, a = navigator.userAgent,
            s = navigator.appName,
            o = "" + parseFloat(navigator.appVersion),
            i = parseInt(navigator.appVersion, 10),
            l = !1,
            u = !1,
            c = !1,
            d = !1;
        return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (l = !0, s = "IE", o = "11") : -1 !== (n = a.indexOf("MSIE")) ? (l = !0, s = "IE", o = a.substring(n + 5)) : -1 !== (n = a.indexOf("Chrome")) ? (c = !0, s = "Chrome", o = a.substring(n + 7)) : -1 !== (n = a.indexOf("Safari")) ? (d = !0, s = "Safari", o = a.substring(n + 7), -1 !== (n = a.indexOf("Version")) && (o = a.substring(n + 8))) : -1 !== (n = a.indexOf("Firefox")) ? (u = !0, s = "Firefox", o = a.substring(n + 8)) : (e = a.lastIndexOf(" ") + 1) < (n = a.lastIndexOf("/")) && (s = a.substring(e, n), o = a.substring(n + 1), s.toLowerCase() === s.toUpperCase() && (s = navigator.appName)), -1 !== (r = o.indexOf(";")) && (o = o.substring(0, r)), -1 !== (r = o.indexOf(" ")) && (o = o.substring(0, r)), i = parseInt("" + o, 10), isNaN(i) && (o = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10)), {
            name: s,
            version: i,
            isIE: l,
            isFirefox: u,
            isChrome: c,
            isSafari: d,
            isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            isTouch: "ontouchstart" in t.documentElement
        }
    }

    function r(e, t) {
        var n = e.media;
        if ("video" === e.type) switch (t) {
            case "video/webm":
                return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
            case "video/mp4":
                return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
            case "video/ogg":
                return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
        } else if ("audio" === e.type) switch (t) {
            case "audio/mpeg":
                return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
            case "audio/ogg":
                return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
            case "audio/wav":
                return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
        }
        return !1
    }

    function a(e) {
        if (!t.querySelectorAll('script[src="' + e + '"]').length) {
            var n = t.createElement("script");
            n.src = e;
            var r = t.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(n, r)
        }
    }

    function s(e, t) {
        return Array.prototype.indexOf && -1 !== e.indexOf(t)
    }

    function o(e, t, n) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n)
    }

    function i(e, t) {
        e.length || (e = [e]);
        for (var n = e.length - 1; n >= 0; n--) {
            var r = n > 0 ? t.cloneNode(!0) : t,
                a = e[n],
                s = a.parentNode,
                o = a.nextSibling;
            return r.appendChild(a), o ? s.insertBefore(r, o) : s.appendChild(r), r
        }
    }

    function l(e) {
        e && e.parentNode.removeChild(e)
    }

    function u(e, t) {
        e.insertBefore(t, e.firstChild)
    }

    function c(e, t) {
        for (var n in t) e.setAttribute(n, P["boolean"](t[n]) && t[n] ? "" : t[n])
    }

    function d(e, n, r) {
        var a = t.createElement(e);
        c(a, r), u(n, a)
    }

    function p(e) {
        return e.replace(".", "")
    }

    function m(e, t, n) {
        if (e)
            if (e.classList) e.classList[n ? "add" : "remove"](t);
            else {
                var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                e.className = r + (n ? " " + t : "")
            }
    }

    function f(e, t) {
        return e ? e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) : !1
    }

    function y(e, n) {
        var r = Element.prototype,
            a = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || function(e) {
                return -1 !== [].indexOf.call(t.querySelectorAll(e), this)
            };
        return a.call(e, n)
    }

    function b(e, t, n, r, a) {
        g(e, t, function(t) {
            n && n.apply(e, [t]), r.apply(e, [t])
        }, a)
    }

    function v(e, t, n, r, a) {
        var s = t.split(" ");
        if (P["boolean"](a) || (a = !1), e instanceof NodeList)
            for (var o = 0; o < e.length; o++) e[o] instanceof Node && v(e[o], arguments[1], arguments[2], arguments[3]);
        else
            for (var i = 0; i < s.length; i++) e[r ? "addEventListener" : "removeEventListener"](s[i], n, a)
    }

    function g(e, t, n, r) {
        e && v(e, t, n, !0, r)
    }

    function h(e, t, n, r) {
        if (e && t) {
            P["boolean"](n) || (n = !1);
            var a = new CustomEvent(t, {
                bubbles: n,
                detail: r
            });
            e.dispatchEvent(a)
        }
    }

    function k(e, t) {
        return e ? (t = P["boolean"](t) ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t) : void 0
    }

    function w(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
    }

    function x() {
        var e = arguments;
        if (e.length) {
            if (1 === e.length) return e[0];
            for (var t = Array.prototype.shift.call(e), n = e.length, r = 0; n > r; r++) {
                var a = e[r];
                for (var s in a) a[s] && a[s].constructor && a[s].constructor === Object ? (t[s] = t[s] || {}, x(t[s], a[s])) : t[s] = a[s]
            }
            return t
        }
    }

    function T() {
        var e = {
                supportsFullScreen: !1,
                isFullScreen: function() {
                    return !1
                },
                requestFullScreen: function() {},
                cancelFullScreen: function() {},
                fullScreenEventName: "",
                element: null,
                prefix: ""
            },
            n = "webkit o moz ms khtml".split(" ");
        if (P.undefined(t.cancelFullScreen))
            for (var r = 0, a = n.length; a > r; r++) {
                if (e.prefix = n[r], !P.undefined(t[e.prefix + "CancelFullScreen"])) {
                    e.supportsFullScreen = !0;
                    break
                }
                if (!P.undefined(t.msExitFullscreen) && t.msFullscreenEnabled) {
                    e.prefix = "ms", e.supportsFullScreen = !0;
                    break
                }
            } else e.supportsFullScreen = !0;
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
            switch (P.undefined(e) && (e = t.body), this.prefix) {
                case "":
                    return t.fullscreenElement === e;
                case "moz":
                    return t.mozFullScreenElement === e;
                default:
                    return t[this.prefix + "FullscreenElement"] === e
            }
        }, e.requestFullScreen = function(e) {
            return P.undefined(e) && (e = t.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
        }, e.cancelFullScreen = function() {
            return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
        }, e.element = function() {
            return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
        }), e
    }

    function S(v, S) {
        function C(e, t, n, r) {
            h(e, t, n, x({}, r, {
                plyr: We
            }))
        }

        function L(t, n) {
            S.debug && e.console && (n = Array.prototype.slice.call(n), P.string(S.logPrefix) && S.logPrefix.length && n.unshift(S.logPrefix), console[t].apply(console, n))
        }

        function O() {
            return {
                url: S.iconUrl,
                absolute: 0 === S.iconUrl.indexOf("http") || Ye.browser.isIE
            }
        }

        function j() {
            var e = [],
                t = O(),
                n = (t.absolute ? "" : t.url) + "#" + S.iconPrefix;
            return s(S.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large" title="Click to play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + S.i18n.play + "</span>", "</button>"), e.push('<div class="plyr__controls">'), s(S.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + n + '-restart" /></svg>', '<span class="plyr__sr-only">' + S.i18n.restart + "</span>", "</button>"), s(S.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + n + '-rewind" /></svg>', '<span class="plyr__sr-only">' + S.i18n.rewind + "</span>", "</button>"), s(S.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + S.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + n + '-pause" /></svg>', '<span class="plyr__sr-only">' + S.i18n.pause + "</span>", "</button>"), s(S.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + n + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + S.i18n.forward + "</span>", "</button>"), s(S.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + S.i18n.buffered, "</progress>"), S.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</span>")), s(S.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + S.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), s(S.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + S.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), s(S.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + n + '-muted" /></svg>', '<svg><use xlink:href="' + n + '-volume" /></svg>', '<span class="plyr__sr-only">' + S.i18n.toggleMute + "</span>", "</button>"), s(S.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + S.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + S.volumeMin + '" max="' + S.volumeMax + '" value="' + S.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + S.volumeMax + '" value="' + S.volumeMin + '" role="presentation"></progress>', "</span>"), s(S.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + n + '-captions-on" /></svg>', '<svg><use xlink:href="' + n + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + S.i18n.toggleCaptions + "</span>", "</button>"), s(S.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen" title="Fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + n + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + n + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + S.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</div>"), e.join("")
        }

        function V() {
            if (Ye.supported.full && ("audio" !== Ye.type || S.fullscreen.allowAudio) && S.fullscreen.enabled) {
                var e = A.supportsFullScreen;
                e || S.fullscreen.fallback && !B() ? (Ue((e ? "Native" : "Fallback") + " fullscreen enabled"), m(Ye.container, S.classes.fullscreen.enabled, !0)) : Ue("Fullscreen not supported and fallback disabled"), Ye.buttons && Ye.buttons.fullscreen && k(Ye.buttons.fullscreen, !1), X()
            }
        }

        function q() {
            if ("video" === Ye.type) {
                Y(S.selectors.captions) || Ye.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + p(S.selectors.captions) + '"></div>'), Ye.usingTextTracks = !1, Ye.media.textTracks && (Ye.usingTextTracks = !0);
                for (var e, t = "", n = Ye.media.childNodes, r = 0; r < n.length; r++) "track" === n[r].nodeName.toLowerCase() && (e = n[r].kind, "captions" !== e && "subtitles" !== e || (t = n[r].getAttribute("src")));
                if (Ye.captionExists = !0, "" === t ? (Ye.captionExists = !1, Ue("No caption track found")) : Ue("Caption track found; URI: " + t), Ye.captionExists) {
                    for (var a = Ye.media.textTracks, s = 0; s < a.length; s++) a[s].mode = "hidden";
                    if (H(Ye), (Ye.browser.isIE && Ye.browser.version >= 10 || Ye.browser.isFirefox && Ye.browser.version >= 31) && (Ue("Detected browser with known TextTrack issues - using manual fallback"), Ye.usingTextTracks = !1), Ye.usingTextTracks) {
                        Ue("TextTracks supported");
                        for (var o = 0; o < a.length; o++) {
                            var i = a[o];
                            "captions" !== i.kind && "subtitles" !== i.kind || g(i, "cuechange", function() {
                                this.activeCues[0] && "text" in this.activeCues[0] ? R(this.activeCues[0].getCueAsHTML()) : R()
                            })
                        }
                    } else if (Ue("TextTracks not supported so rendering captions manually"), Ye.currentCaption = "", Ye.captions = [], "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function() {
                            if (4 === l.readyState)
                                if (200 === l.status) {
                                    var e, t = [],
                                        n = l.responseText;
                                    t = n.split("\n\n");
                                    for (var r = 0; r < t.length; r++) {
                                        e = t[r], Ye.captions[r] = [];
                                        var a = e.split("\n"),
                                            s = 0; - 1 === a[s].indexOf(":") && (s = 1), Ye.captions[r] = [a[s], a[s + 1]]
                                    }
                                    Ye.captions.shift(), Ue("Successfully loaded the caption file via AJAX")
                                } else Je(S.logPrefix + "There was a problem loading the caption file via AJAX")
                        }, l.open("get", t, !0), l.send()
                    }
                } else m(Ye.container, S.classes.captions.enabled)
            }
        }

        function R(e) {
            var n = Y(S.selectors.captions),
                r = t.createElement("span");
            n.innerHTML = "", P.undefined(e) && (e = ""), P.string(e) ? r.innerHTML = e.trim() : r.appendChild(e), n.appendChild(r);
            n.offsetHeight
        }

        function D(e) {
            function t(e, t) {
                var n = [];
                n = e.split(" --> ");
                for (var r = 0; r < n.length; r++) n[r] = n[r].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                return a(n[t])
            }

            function n(e) {
                return t(e, 0)
            }

            function r(e) {
                return t(e, 1)
            }

            function a(e) {
                if (null === e || void 0 === e) return 0;
                var t, n = [],
                    r = [];
                return n = e.split(","), r = n[0].split(":"), t = Math.floor(60 * r[0] * 60) + Math.floor(60 * r[1]) + Math.floor(r[2])
            }
            if (!Ye.usingTextTracks && "video" === Ye.type && Ye.supported.full && (Ye.subcount = 0, e = P.number(e) ? e : Ye.media.currentTime, Ye.captions[Ye.subcount])) {
                for (; r(Ye.captions[Ye.subcount][0]) < e.toFixed(1);)
                    if (Ye.subcount++, Ye.subcount > Ye.captions.length - 1) {
                        Ye.subcount = Ye.captions.length - 1;
                        break
                    }
                Ye.media.currentTime.toFixed(1) >= n(Ye.captions[Ye.subcount][0]) && Ye.media.currentTime.toFixed(1) <= r(Ye.captions[Ye.subcount][0]) ? (Ye.currentCaption = Ye.captions[Ye.subcount][1], R(Ye.currentCaption)) : R()
            }
        }

        function H() {
            if (Ye.buttons.captions) {
                m(Ye.container, S.classes.captions.enabled, !0);
                var e = Ye.storage.captionsEnabled;
                P["boolean"](e) || (e = S.captions.defaultActive), e && (m(Ye.container, S.classes.captions.active, !0), k(Ye.buttons.captions, !0))
            }
        }

        function W(e) {
            return Ye.container.querySelectorAll(e)
        }

        function Y(e) {
            return W(e)[0]
        }

        function B() {
            try {
                return e.self !== e.top
            } catch (t) {
                return !0
            }
        }

        function X() {
            function e(e) {
                9 === e.which && Ye.isFullscreen && (e.target !== r || e.shiftKey ? e.target === n && e.shiftKey && (e.preventDefault(), r.focus()) : (e.preventDefault(), n.focus()))
            }
            var t = W("input:not([disabled]), button:not([disabled])"),
                n = t[0],
                r = t[t.length - 1];
            g(Ye.container, "keydown", e)
        }

        function U(e, t) {
            if (P.string(t)) d(e, Ye.media, {
                src: t
            });
            else if (t.constructor === Array)
                for (var n = t.length - 1; n >= 0; n--) d(e, Ye.media, t[n])
        }

        function J() {
            if (S.loadSprite) {
                var e = O();
                e.absolute ? (Ue("AJAX loading absolute SVG sprite" + (Ye.browser.isIE ? " (due to IE)" : "")), _(e.url, "sprite-plyr")) : Ue("Sprite will be used as external resource directly")
            }
            var n = S.html;
            Ue("Injecting custom controls"), n || (n = j()), n = o(n, "{seektime}", S.seekTime), n = o(n, "{id}", Math.floor(1e4 * Math.random()));
            var r;
            if (P.string(S.selectors.controls.container) && (r = t.querySelector(S.selectors.controls.container)), P.htmlElement(r) || (r = Ye.container), r.insertAdjacentHTML("beforeend", n), S.tooltips.controls)
                for (var a = W([S.selectors.controls.wrapper, " ", S.selectors.labels, " .", S.classes.hidden].join("")), s = a.length - 1; s >= 0; s--) {
                    var i = a[s];
                    m(i, S.classes.hidden, !1), m(i, S.classes.tooltip, !0)
                }
        }

        function z() {
            try {
                return Ye.controls = Y(S.selectors.controls.wrapper), Ye.buttons = {}, Ye.buttons.seek = Y(S.selectors.buttons.seek), Ye.buttons.play = W(S.selectors.buttons.play), Ye.buttons.pause = Y(S.selectors.buttons.pause), Ye.buttons.restart = Y(S.selectors.buttons.restart), Ye.buttons.rewind = Y(S.selectors.buttons.rewind), Ye.buttons.forward = Y(S.selectors.buttons.forward), Ye.buttons.fullscreen = Y(S.selectors.buttons.fullscreen), Ye.buttons.mute = Y(S.selectors.buttons.mute), Ye.buttons.captions = Y(S.selectors.buttons.captions), Ye.progress = {}, Ye.progress.container = Y(S.selectors.progress.container), Ye.progress.buffer = {}, Ye.progress.buffer.bar = Y(S.selectors.progress.buffer), Ye.progress.buffer.text = Ye.progress.buffer.bar && Ye.progress.buffer.bar.getElementsByTagName("span")[0], Ye.progress.played = Y(S.selectors.progress.played), Ye.progress.tooltip = Ye.progress.container && Ye.progress.container.querySelector("." + S.classes.tooltip), Ye.volume = {}, Ye.volume.input = Y(S.selectors.volume.input), Ye.volume.display = Y(S.selectors.volume.display), Ye.duration = Y(S.selectors.duration), Ye.currentTime = Y(S.selectors.currentTime), Ye.seekTime = W(S.selectors.seekTime), !0
            } catch (e) {
                return Je("It looks like there is a problem with your controls HTML"), G(!0), !1
            }
        }

        function $() {
            m(Ye.container, S.selectors.container.replace(".", ""), Ye.supported.full)
        }

        function G(e) {
            e && s(S.types.html5, Ye.type) ? Ye.media.setAttribute("controls", "") : Ye.media.removeAttribute("controls")
        }

        function K(e) {
            var t = S.i18n.play;
            if (P.string(S.title) && S.title.length && (t += ", " + S.title, Ye.container.setAttribute("aria-label", S.title)), Ye.supported.full && Ye.buttons.play)
                for (var n = Ye.buttons.play.length - 1; n >= 0; n--) Ye.buttons.play[n].setAttribute("aria-label", t);
            P.htmlElement(e) && e.setAttribute("title", S.i18n.frameTitle.replace("{title}", S.title))
        }

        function Q() {
            var t = null;
            Ye.storage = {}, M.supported && S.storage.enabled && (e.localStorage.removeItem("plyr-volume"), t = e.localStorage.getItem(S.storage.key), t && (/^\d+(\.\d+)?$/.test(t) ? Z({
                volume: parseFloat(t)
            }) : Ye.storage = JSON.parse(t)))
        }

        function Z(t) {
            M.supported && S.storage.enabled && (x(Ye.storage, t), e.localStorage.setItem(S.storage.key, JSON.stringify(Ye.storage)))
        }

        function ee() {
            if (!Ye.media) return void Je("No media element found!");
            if (Ye.supported.full && (m(Ye.container, S.classes.type.replace("{0}", Ye.type), !0), s(S.types.embed, Ye.type) && m(Ye.container, S.classes.type.replace("{0}", "video"), !0), m(Ye.container, S.classes.stopped, S.autoplay), m(Ye.ontainer, S.classes.isIos, Ye.browser.isIos), m(Ye.container, S.classes.isTouch, Ye.browser.isTouch), "video" === Ye.type)) {
                var e = t.createElement("div");
                e.setAttribute("class", S.classes.videoWrapper), i(Ye.media, e), Ye.videoContainer = e
            }
            s(S.types.embed, Ye.type) && te()
        }

        function te() {
            for (var n = t.createElement("div"), r = Ye.embedId, s = Ye.type + "-" + Math.floor(1e4 * Math.random()), o = W('[id^="' + Ye.type + '-"]'), i = o.length - 1; i >= 0; i--) l(o[i]);
            if (m(Ye.media, S.classes.videoWrapper, !0), m(Ye.media, S.classes.embedWrapper, !0), "youtube" === Ye.type) Ye.media.appendChild(n), n.setAttribute("id", s), P.object(e.YT) ? re(r, n) : (a(S.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function() {
                re(r, n)
            }), e.onYouTubeIframeAPIReady = function() {
                e.onYouTubeReadyCallbacks.forEach(function(e) {
                    e()
                })
            });
            else if ("vimeo" === Ye.type)
                if (Ye.supported.full ? Ye.media.appendChild(n) : n = Ye.media, n.setAttribute("id", s), P.object(e.Vimeo)) ae(r, n);
                else {
                    a(S.urls.vimeo.api);
                    var u = e.setInterval(function() {
                        P.object(e.Vimeo) && (e.clearInterval(u), ae(r, n))
                    }, 50)
                }
            else if ("soundcloud" === Ye.type) {
                var d = t.createElement("iframe");
                d.loaded = !1, g(d, "load", function() {
                    d.loaded = !0
                }), c(d, {
                    src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + r,
                    id: s
                }), n.appendChild(d), Ye.media.appendChild(n), e.SC || a(S.urls.soundcloud.api);
                var p = e.setInterval(function() {
                    e.SC && d.loaded && (e.clearInterval(p), se.call(d))
                }, 50)
            }
        }

        function ne() {
            Ye.supported.full && (De(), He()), K(Y("iframe"))
        }

        function re(t, n) {
            Ye.embed = new e.YT.Player(n.id, {
                videoId: t,
                playerVars: {
                    autoplay: S.autoplay ? 1 : 0,
                    controls: Ye.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: S.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1,
                    origin: "*"
                },
                events: {
                    onError: function(e) {
                        C(Ye.container, "error", !0, {
                            code: e.data,
                            embed: e.target
                        })
                    },
                    onReady: function(t) {
                        var n = t.target;
                        Ye.media.play = function() {
                            n.playVideo(), Ye.media.paused = !1
                        }, Ye.media.pause = function() {
                            n.pauseVideo(), Ye.media.paused = !0
                        }, Ye.media.stop = function() {
                            n.stopVideo(), Ye.media.paused = !0
                        }, Ye.media.duration = n.getDuration(), Ye.media.paused = !0, Ye.media.currentTime = 0, Ye.media.muted = n.isMuted(), S.title = n.getVideoData().title, Ye.supported.full && Ye.media.querySelector("iframe").setAttribute("tabindex", "-1"), ne(), C(Ye.media, "timeupdate"), C(Ye.media, "durationchange"), e.clearInterval(Be.buffering), Be.buffering = e.setInterval(function() {
                            Ye.media.buffered = n.getVideoLoadedFraction(), (null === Ye.media.lastBuffered || Ye.media.lastBuffered < Ye.media.buffered) && C(Ye.media, "progress"), Ye.media.lastBuffered = Ye.media.buffered, 1 === Ye.media.buffered && (e.clearInterval(Be.buffering), C(Ye.media, "canplaythrough"))
                        }, 200)
                    },
                    onStateChange: function(t) {
                        var n = t.target;
                        switch (e.clearInterval(Be.playing), t.data) {
                            case 0:
                                Ye.media.paused = !0, C(Ye.media, "ended");
                                break;
                            case 1:
                                Ye.media.paused = !1, Ye.media.seeking = !1, C(Ye.media, "play"), C(Ye.media, "playing"), Be.playing = e.setInterval(function() {
                                    Ye.media.currentTime = n.getCurrentTime(), C(Ye.media, "timeupdate")
                                }, 100);
                                break;
                            case 2:
                                Ye.media.paused = !0, C(Ye.media, "pause")
                        }
                        C(Ye.container, "statechange", !1, {
                            code: t.data
                        })
                    }
                }
            })
        }

        function ae(t, n) {
            Ye.embed = new e.Vimeo.Player(n, {
                id: parseInt(t),
                loop: S.loop,
                autoplay: S.autoplay,
                byline: !1,
                portrait: !1,
                title: !1
            }), Ye.media.play = function() {
                Ye.embed.play(), Ye.media.paused = !1
            }, Ye.media.pause = function() {
                Ye.embed.pause(), Ye.media.paused = !0
            }, Ye.media.stop = function() {
                Ye.embed.stop(), Ye.media.paused = !0
            }, Ye.media.paused = !0, Ye.media.currentTime = 0, ne(), Ye.embed.getCurrentTime().then(function(e) {
                Ye.media.currentTime = e, C(Ye.media, "timeupdate")
            }), Ye.embed.getDuration().then(function(e) {
                Ye.media.duration = e, C(Ye.media, "durationchange")
            }), Ye.embed.on("loaded", function() {
                P.htmlElement(Ye.embed.element) && Ye.supported.full && Ye.embed.element.setAttribute("tabindex", "-1")
            }), Ye.embed.on("play", function() {
                Ye.media.paused = !1, C(Ye.media, "play"), C(Ye.media, "playing")
            }), Ye.embed.on("pause", function() {
                Ye.media.paused = !0, C(Ye.media, "pause")
            }), Ye.embed.on("timeupdate", function(e) {
                Ye.media.seeking = !1, Ye.media.currentTime = e.seconds, C(Ye.media, "timeupdate")
            }), Ye.embed.on("progress", function(e) {
                Ye.media.buffered = e.percent, C(Ye.media, "progress"), 1 === parseInt(e.percent) && C(Ye.media, "canplaythrough")
            }), Ye.embed.on("ended", function() {
                Ye.media.paused = !0, C(Ye.media, "ended")
            })
        }

        function se() {
            Ye.embed = e.SC.Widget(this), Ye.embed.bind(e.SC.Widget.Events.READY, function() {
                Ye.media.play = function() {
                    Ye.embed.play(), Ye.media.paused = !1
                }, Ye.media.pause = function() {
                    Ye.embed.pause(), Ye.media.paused = !0
                }, Ye.media.stop = function() {
                    Ye.embed.seekTo(0), Ye.embed.pause(), Ye.media.paused = !0
                }, Ye.media.paused = !0, Ye.media.currentTime = 0, Ye.embed.getDuration(function(e) {
                    Ye.media.duration = e / 1e3, ne()
                }), Ye.embed.getPosition(function(e) {
                    Ye.media.currentTime = e, C(Ye.media, "timeupdate")
                }), Ye.embed.bind(e.SC.Widget.Events.PLAY, function() {
                    Ye.media.paused = !1, C(Ye.media, "play"), C(Ye.media, "playing")
                }), Ye.embed.bind(e.SC.Widget.Events.PAUSE, function() {
                    Ye.media.paused = !0, C(Ye.media, "pause")
                }), Ye.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                    Ye.media.seeking = !1, Ye.media.currentTime = e.currentPosition / 1e3, C(Ye.media, "timeupdate")
                }), Ye.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                    Ye.media.buffered = e.loadProgress, C(Ye.media, "progress"), 1 === parseInt(e.loadProgress) && C(Ye.media, "canplaythrough")
                }), Ye.embed.bind(e.SC.Widget.Events.FINISH, function() {
                    Ye.media.paused = !0, C(Ye.media, "ended")
                })
            })
        }

        function oe() {
            "play" in Ye.media && Ye.media.play()
        }

        function ie() {
            "pause" in Ye.media && Ye.media.pause()
        }

        function le(e) {
            return P["boolean"](e) || (e = Ye.media.paused), e ? oe() : ie(), e
        }

        function ue(e) {
            P.number(e) || (e = S.seekTime), de(Ye.media.currentTime - e)
        }

        function ce(e) {
            P.number(e) || (e = S.seekTime), de(Ye.media.currentTime + e)
        }

        function de(e) {
            var t = 0,
                n = Ye.media.paused,
                r = pe();
            P.number(e) ? t = e : P.object(e) && s(["input", "change"], e.type) && (t = e.target.value / e.target.max * r), 0 > t ? t = 0 : t > r && (t = r), Ae(t);
            try {
                Ye.media.currentTime = t.toFixed(4)
            } catch (a) {}
            if (s(S.types.embed, Ye.type)) {
                switch (Ye.type) {
                    case "youtube":
                        Ye.embed.seekTo(t);
                        break;
                    case "vimeo":
                        Ye.embed.setCurrentTime(t.toFixed(0));
                        break;
                    case "soundcloud":
                        Ye.embed.seekTo(1e3 * t)
                }
                n && ie(), C(Ye.media, "timeupdate"), Ye.media.seeking = !0
            }
            Ue("Seeking to " + Ye.media.currentTime + " seconds"), D(t)
        }

        function pe() {
            var e = parseInt(S.duration),
                t = 0;
            return null === Ye.media.duration || isNaN(Ye.media.duration) || (t = Ye.media.duration), isNaN(e) ? t : e
        }

        function me() {
            m(Ye.container, S.classes.playing, !Ye.media.paused), m(Ye.container, S.classes.stopped, Ye.media.paused), Ne(Ye.media.paused)
        }

        function fe() {
            I = {
                x: e.pageXOffset || 0,
                y: e.pageYOffset || 0
            }
        }

        function ye() {
            e.scrollTo(I.x, I.y)
        }

        function be(e) {
            var n = A.supportsFullScreen;
            if (n) {
                if (!e || e.type !== A.fullScreenEventName) return A.isFullScreen(Ye.container) ? A.cancelFullScreen() : (fe(), A.requestFullScreen(Ye.container)), void(Ye.isFullscreen = A.isFullScreen(Ye.container));
                Ye.isFullscreen = A.isFullScreen(Ye.container)
            } else Ye.isFullscreen = !Ye.isFullscreen, t.body.style.overflow = Ye.isFullscreen ? "hidden" : "";
            m(Ye.container, S.classes.fullscreen.active, Ye.isFullscreen), X(Ye.isFullscreen), Ye.buttons && Ye.buttons.fullscreen && k(Ye.buttons.fullscreen, Ye.isFullscreen), C(Ye.container, Ye.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !Ye.isFullscreen && n && ye()
        }

        function ve(e) {
            if (P["boolean"](e) || (e = !Ye.media.muted), k(Ye.buttons.mute, e), Ye.media.muted = e, 0 === Ye.media.volume && ge(S.volume), s(S.types.embed, Ye.type)) {
                switch (Ye.type) {
                    case "youtube":
                        Ye.embed[Ye.media.muted ? "mute" : "unMute"]();
                        break;
                    case "vimeo":
                    case "soundcloud":
                        Ye.embed.setVolume(Ye.media.muted ? 0 : parseFloat(S.volume / S.volumeMax))
                }
                C(Ye.media, "volumechange")
            }
        }

        function ge(e) {
            var t = S.volumeMax,
                n = S.volumeMin;
            if (P.undefined(e) && (e = Ye.storage.volume), (null === e || isNaN(e)) && (e = S.volume), e > t && (e = t), n > e && (e = n), Ye.media.volume = parseFloat(e / t), Ye.volume.display && (Ye.volume.display.value = e), s(S.types.embed, Ye.type)) {
                switch (Ye.type) {
                    case "youtube":
                        Ye.embed.setVolume(100 * Ye.media.volume);
                        break;
                    case "vimeo":
                    case "soundcloud":
                        Ye.embed.setVolume(Ye.media.volume)
                }
                C(Ye.media, "volumechange")
            }
            0 === e ? Ye.media.muted = !0 : Ye.media.muted && e > 0 && ve()
        }

        function he(e) {
            var t = Ye.media.muted ? 0 : Ye.media.volume * S.volumeMax;
            P.number(e) || (e = S.volumeStep), ge(t + e)
        }

        function ke(e) {
            var t = Ye.media.muted ? 0 : Ye.media.volume * S.volumeMax;
            P.number(e) || (e = S.volumeStep), ge(t - e)
        }

        function we() {
            var e = Ye.media.muted ? 0 : Ye.media.volume * S.volumeMax;
            Ye.supported.full && (Ye.volume.input && (Ye.volume.input.value = e), Ye.volume.display && (Ye.volume.display.value = e)), Z({
                volume: e
            }), m(Ye.container, S.classes.muted, 0 === e), Ye.supported.full && Ye.buttons.mute && k(Ye.buttons.mute, 0 === e)
        }

        function xe(e) {
            Ye.supported.full && Ye.buttons.captions && (P["boolean"](e) || (e = -1 === Ye.container.className.indexOf(S.classes.captions.active)), Ye.captionsEnabled = e, k(Ye.buttons.captions, Ye.captionsEnabled), m(Ye.container, S.classes.captions.active, Ye.captionsEnabled), C(Ye.container, Ye.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0), Z({
                captionsEnabled: Ye.captionsEnabled
            }))
        }

        function Te(e) {
            var t = "waiting" === e.type;
            clearTimeout(Be.loading), Be.loading = setTimeout(function() {
                m(Ye.container, S.classes.loading, t), Ne(t)
            }, t ? 250 : 0)
        }

        function Se(e) {
            if (Ye.supported.full) {
                var t = Ye.progress.played,
                    n = 0,
                    r = pe();
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                        if (Ye.controls.pressed) return;
                        n = w(Ye.media.currentTime, r), "timeupdate" === e.type && Ye.buttons.seek && (Ye.buttons.seek.value = n);
                        break;
                    case "playing":
                    case "progress":
                        t = Ye.progress.buffer, n = function() {
                            var e = Ye.media.buffered;
                            return e && e.length ? w(e.end(0), r) : P.number(e) ? 100 * e : 0
                        }()
                }
                _e(t, n)
            }
        }

        function _e(e, t) {
            if (Ye.supported.full) {
                if (P.undefined(t) && (t = 0), P.undefined(e)) {
                    if (!Ye.progress || !Ye.progress.buffer) return;
                    e = Ye.progress.buffer
                }
                P.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
            }
        }

        function Ee(e, t) {
            if (t) {
                isNaN(e) && (e = 0), Ye.secs = parseInt(e % 60), Ye.mins = parseInt(e / 60 % 60), Ye.hours = parseInt(e / 60 / 60 % 60);
                var n = parseInt(pe() / 60 / 60 % 60) > 0;
                Ye.secs = ("0" + Ye.secs).slice(-2), Ye.mins = ("0" + Ye.mins).slice(-2), t.innerHTML = (n ? Ye.hours + ":" : "") + Ye.mins + ":" + Ye.secs
            }
        }

        function Ce() {
            if (Ye.supported.full) {
                var e = pe() || 0;
                !Ye.duration && S.displayDuration && Ye.media.paused && Ee(e, Ye.currentTime), Ye.duration && Ee(e, Ye.duration), Ie()
            }
        }

        function Fe(e) {
            Ee(Ye.media.currentTime, Ye.currentTime), e && "timeupdate" === e.type && Ye.media.seeking || Se(e)
        }

        function Ae(e) {
            P.number(e) || (e = 0);
            var t = pe(),
                n = w(e, t);
            Ye.progress && Ye.progress.played && (Ye.progress.played.value = n), Ye.buttons && Ye.buttons.seek && (Ye.buttons.seek.value = n)
        }

        function Ie(e) {
            var t = pe();
            if (S.tooltips.seek && Ye.progress.container && 0 !== t) {
                var n = Ye.progress.container.getBoundingClientRect(),
                    r = 0,
                    a = S.classes.tooltip + "--visible";
                if (e) r = 100 / n.width * (e.pageX - n.left);
                else {
                    if (!f(Ye.progress.tooltip, a)) return;
                    r = Ye.progress.tooltip.style.left.replace("%", "")
                }
                0 > r ? r = 0 : r > 100 && (r = 100), Ee(t / 100 * r, Ye.progress.tooltip), Ye.progress.tooltip.style.left = r + "%", e && s(["mouseenter", "mouseleave"], e.type) && m(Ye.progress.tooltip, a, "mouseenter" === e.type)
            }
        }

        function Ne(t) {
            if (S.hideControls && "audio" !== Ye.type) {
                var n = 0,
                    r = !1,
                    a = t,
                    o = f(Ye.container, S.classes.loading);
                if (P["boolean"](t) || (t && t.type ? (r = "enterfullscreen" === t.type, a = s(["mousemove", "touchstart", "mouseenter", "focus"], t.type), s(["mousemove", "touchmove"], t.type) && (n = 2e3), "focus" === t.type && (n = 3e3)) : a = f(Ye.container, S.classes.hideControls)), e.clearTimeout(Be.hover), a || Ye.media.paused || o) {
                    if (m(Ye.container, S.classes.hideControls, !1), Ye.media.paused || o) return;
                    Ye.browser.isTouch && (n = 3e3)
                }
                a && Ye.media.paused || (Be.hover = e.setTimeout(function() {
                    (!Ye.controls.pressed && !Ye.controls.hover || r) && m(Ye.container, S.classes.hideControls, !0)
                }, n))
            }
        }

        function Pe(e) {
            if (!P.undefined(e)) return void Me(e);
            var t;
            switch (Ye.type) {
                case "youtube":
                    t = Ye.embed.getVideoUrl();
                    break;
                case "vimeo":
                    Ye.embed.getVideoUrl.then(function(e) {
                        t = e
                    });
                    break;
                case "soundcloud":
                    Ye.embed.getCurrentSound(function(e) {
                        t = e.permalink_url
                    });
                    break;
                default:
                    t = Ye.media.currentSrc
            }
            return t || ""
        }

        function Me(e) {
            function n() {
                if (Ye.embed = null, l(Ye.media), "video" === Ye.type && Ye.videoContainer && l(Ye.videoContainer), Ye.container && Ye.container.removeAttribute("class"), "type" in e && (Ye.type = e.type, "video" === Ye.type)) {
                    var n = e.sources[0];
                    "type" in n && s(S.types.embed, n.type) && (Ye.type = n.type)
                }
                switch (Ye.supported = E(Ye.type), Ye.type) {
                    case "video":
                        Ye.media = t.createElement("video");
                        break;
                    case "audio":
                        Ye.media = t.createElement("audio");
                        break;
                    case "youtube":
                    case "vimeo":
                    case "soundcloud":
                        Ye.media = t.createElement("div"), Ye.embedId = e.sources[0].src
                }
                u(Ye.container, Ye.media), P["boolean"](e.autoplay) && (S.autoplay = e.autoplay), s(S.types.html5, Ye.type) && (S.crossorigin && Ye.media.setAttribute("crossorigin", ""), S.autoplay && Ye.media.setAttribute("autoplay", ""), "poster" in e && Ye.media.setAttribute("poster", e.poster), S.loop && Ye.media.setAttribute("loop", "")), m(Ye.container, S.classes.fullscreen.active, Ye.isFullscreen), m(Ye.container, S.classes.captions.active, Ye.captionsEnabled), $(), s(S.types.html5, Ye.type) && U("source", e.sources), ee(), s(S.types.html5, Ye.type) && ("tracks" in e && U("track", e.tracks), Ye.media.load()), (s(S.types.html5, Ye.type) || s(S.types.embed, Ye.type) && !Ye.supported.full) && (De(), He()), S.title = e.title, K()
            }
            return P.object(e) && "sources" in e && e.sources.length ? (m(Ye.container, S.classes.ready, !1), ie(), Ae(), _e(), Ve(), void qe(n, !1)) : void Je("Invalid source format")
        }

        function Le(e) {
            "video" === Ye.type && Ye.media.setAttribute("poster", e)
        }

        function Oe() {
            function n() {
                var e = le(),
                    t = Ye.buttons[e ? "play" : "pause"],
                    n = Ye.buttons[e ? "pause" : "play"];
                if (n = n && n.length > 1 ? n[n.length - 1] : n[0]) {
                    var r = f(t, S.classes.tabFocus);
                    setTimeout(function() {
                        n.focus(), r && (m(t, S.classes.tabFocus, !1), m(n, S.classes.tabFocus, !0))
                    }, 100)
                }
            }

            function r() {
                var e = t.activeElement;
                return e = e && e !== t.body ? t.querySelector(":focus") : null
            }

            function a(e) {
                return e.keyCode ? e.keyCode : e.which
            }

            function o(e) {
                for (var t in Ye.buttons) {
                    var n = Ye.buttons[t];
                    if (P.nodeList(n))
                        for (var r = 0; r < n.length; r++) m(n[r], S.classes.tabFocus, n[r] === e);
                    else m(n, S.classes.tabFocus, n === e)
                }
            }

            function i(e) {
                function t() {
                    var e = Ye.media.duration;
                    P.number(e) && de(e / 10 * (n - 48))
                }
                var n = a(e),
                    r = "keydown" === e.type,
                    o = r && n === u;
                if (P.number(n))
                    if (r) {
                        var i = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];
                        switch (s(i, n) && (e.preventDefault(), e.stopPropagation()), n) {
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                o || t();
                                break;
                            case 32:
                            case 75:
                                o || le();
                                break;
                            case 38:
                                he();
                                break;
                            case 40:
                                ke();
                                break;
                            case 77:
                                o || ve();
                                break;
                            case 39:
                                ce();
                                break;
                            case 37:
                                ue();
                                break;
                            case 70:
                                be();
                                break;
                            case 67:
                                o || xe()
                        }!A.supportsFullScreen && Ye.isFullscreen && 27 === n && be(), u = n
                    } else u = null
            }
            var l = Ye.browser.isIE ? "change" : "input";
            if (S.keyboardShorcuts.focused) {
                var u = null;
                S.keyboardShorcuts.global && g(e, "keydown keyup", function(e) {
                    var t = a(e),
                        n = r(),
                        o = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67],
                        l = F().length;
                    1 !== l || !s(o, t) || P.htmlElement(n) && y(n, S.selectors.editable) || i(e)
                }), g(Ye.container, "keydown keyup", i)
            }
            g(e, "keyup", function(e) {
                var t = a(e),
                    n = r();
                9 === t && o(n)
            }), g(t.body, "click", function() {
                m(Y("." + S.classes.tabFocus), S.classes.tabFocus, !1)
            });
            for (var c in Ye.buttons) {
                var d = Ye.buttons[c];
                g(d, "blur", function() {
                    m(d, "tab-focus", !1)
                })
            }
            b(Ye.buttons.play, "click", S.listeners.play, n), b(Ye.buttons.pause, "click", S.listeners.pause, n), b(Ye.buttons.restart, "click", S.listeners.restart, de), b(Ye.buttons.rewind, "click", S.listeners.rewind, ue), b(Ye.buttons.forward, "click", S.listeners.forward, ce), b(Ye.buttons.seek, l, S.listeners.seek, de), b(Ye.volume.input, l, S.listeners.volume, function() {
                ge(Ye.volume.input.value)
            }), b(Ye.buttons.mute, "click", S.listeners.mute, ve), b(Ye.buttons.fullscreen, "click", S.listeners.fullscreen, be), A.supportsFullScreen && g(t, A.fullScreenEventName, be), g(Ye.buttons.captions, "click", xe), g(Ye.progress.container, "mouseenter mouseleave mousemove", Ie), S.hideControls && (g(Ye.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Ne),
                g(Ye.controls, "mouseenter mouseleave", function(e) {
                    Ye.controls.hover = "mouseenter" === e.type
                }), g(Ye.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                    Ye.controls.pressed = s(["mousedown", "touchstart"], e.type)
                }), g(Ye.controls, "focus blur", Ne, !0)), g(Ye.volume.input, "wheel", function(e) {
                e.preventDefault();
                var t = e.webkitDirectionInvertedFromDevice,
                    n = S.volumeStep / 5;
                (e.deltaY < 0 || e.deltaX > 0) && (t ? ke(n) : he(n)), (e.deltaY > 0 || e.deltaX < 0) && (t ? he(n) : ke(n))
            })
        }

        function je() {
            if (g(Ye.media, "timeupdate seeking", Fe), g(Ye.media, "timeupdate", D), g(Ye.media, "durationchange loadedmetadata", Ce), g(Ye.media, "ended", function() {
                    "video" === Ye.type && S.showPosterOnEnd && ("video" === Ye.type && R(), de(), Ye.media.load())
                }), g(Ye.media, "progress playing", Se), g(Ye.media, "volumechange", we), g(Ye.media, "play pause ended", me), g(Ye.media, "waiting canplay seeked", Te), S.clickToPlay && "audio" !== Ye.type) {
                var e = Y("." + S.classes.videoWrapper);
                if (!e) return;
                e.style.cursor = "pointer", g(e, "click", function() {
                    S.hideControls && Ye.browser.isTouch && !Ye.media.paused || (Ye.media.paused ? oe() : Ye.media.ended ? (de(), oe()) : ie())
                })
            }
            S.disableContextMenu && g(Ye.media, "contextmenu", function(e) {
                e.preventDefault()
            }), g(Ye.media, S.events.concat(["keyup", "keydown"]).join(" "), function(e) {
                C(Ye.container, e.type, !0)
            })
        }

        function Ve() {
            if (s(S.types.html5, Ye.type)) {
                for (var e = Ye.media.querySelectorAll("source"), t = 0; t < e.length; t++) l(e[t]);
                Ye.media.setAttribute("src", "https://cdn.selz.com/plyr/blank.mp4"), Ye.media.load(), Ue("Cancelled network requests")
            }
        }

        function qe(t, n) {
            function r() {
                P["boolean"](n) || (n = !0), P["function"](t) && t.call(Xe), n && (Ye.init = !1, Ye.container.parentNode.replaceChild(Xe, Ye.container), C(Xe, "destroyed", !0))
            }
            if (!Ye.init) return null;
            switch (Ye.type) {
                case "youtube":
                    e.clearInterval(Be.buffering), e.clearInterval(Be.playing), Ye.embed.destroy(), r();
                    break;
                case "vimeo":
                    Ye.embed.unload().then(r), e.setTimeout(r, 200);
                    break;
                case "video":
                case "audio":
                    G(!0), r()
            }
        }

        function Re() {
            if (Ye.init) return null;
            if (A = T(), Ye.browser = n(), P.htmlElement(Ye.media)) {
                Q();
                var e = v.tagName.toLowerCase();
                "div" === e ? (Ye.type = v.getAttribute("data-type"), Ye.embedId = v.getAttribute("data-video-id"), v.removeAttribute("data-type"), v.removeAttribute("data-video-id")) : (Ye.type = e, S.crossorigin = null !== v.getAttribute("crossorigin"), S.autoplay = S.autoplay || null !== v.getAttribute("autoplay"), S.loop = S.loop || null !== v.getAttribute("loop")), Ye.supported = E(Ye.type), Ye.supported.basic && (Ye.container = i(v, t.createElement("div")), Ye.container.setAttribute("tabindex", 0), $(), Ue("" + Ye.browser.name + " " + Ye.browser.version), ee(), (s(S.types.html5, Ye.type) || s(S.types.embed, Ye.type) && !Ye.supported.full) && (De(), He(), K()), Ye.init = !0)
            }
        }

        function De() {
            if (!Ye.supported.full) return Je("Basic support only", Ye.type), l(Y(S.selectors.controls.wrapper)), l(Y(S.selectors.buttons.play)), void G(!0);
            var e = !W(S.selectors.controls.wrapper).length;
            e && J(), z() && (e && Oe(), je(), G(), V(), q(), ge(), we(), Fe(), me())
        }

        function He() {
            e.setTimeout(function() {
                C(Ye.media, "ready")
            }, 0), m(Ye.media, N.classes.setup, !0), m(Ye.container, S.classes.ready, !0), Ye.media.plyr = We, S.autoplay && oe()
        }
        var We, Ye = this,
            Be = {};
        Ye.media = v;
        var Xe = v.cloneNode(!0),
            Ue = function() {
                L("log", arguments)
            },
            Je = function() {
                L("warn", arguments)
            };
        return Ue("Config", S), We = {
            getOriginal: function() {
                return Xe
            },
            getContainer: function() {
                return Ye.container
            },
            getEmbed: function() {
                return Ye.embed
            },
            getMedia: function() {
                return Ye.media
            },
            getType: function() {
                return Ye.type
            },
            getDuration: pe,
            getCurrentTime: function() {
                return Ye.media.currentTime
            },
            getVolume: function() {
                return Ye.media.volume
            },
            isMuted: function() {
                return Ye.media.muted
            },
            isReady: function() {
                return f(Ye.container, S.classes.ready)
            },
            isLoading: function() {
                return f(Ye.container, S.classes.loading)
            },
            on: function(e, t) {
                g(Ye.container, e, t)
            },
            play: oe,
            pause: ie,
            stop: function() {
                ie(), de()
            },
            restart: de,
            rewind: ue,
            forward: ce,
            seek: de,
            source: Pe,
            poster: Le,
            setVolume: ge,
            togglePlay: le,
            toggleMute: ve,
            toggleCaptions: xe,
            toggleFullscreen: be,
            toggleControls: Ne,
            isFullscreen: function() {
                return Ye.isFullscreen || !1
            },
            support: function(e) {
                return r(Ye, e)
            },
            destroy: qe
        }, Re(), Ye.init ? We : null
    }

    function _(e, n) {
        var r = new XMLHttpRequest;
        if (!P.string(n) || !P.htmlElement(t.querySelector("#" + n))) {
            var a = t.createElement("div");
            a.setAttribute("hidden", ""), P.string(n) && a.setAttribute("id", n), t.body.insertBefore(a, t.body.childNodes[0]), "withCredentials" in r && (r.open("GET", e, !0), r.onload = function() {
                a.innerHTML = r.responseText
            }, r.send())
        }
    }

    function E(e) {
        var r, a, s = n(),
            o = s.isIE && s.version <= 9,
            i = s.isIos,
            l = /iPhone|iPod/i.test(navigator.userAgent),
            u = !!t.createElement("audio").canPlayType,
            c = !!t.createElement("video").canPlayType;
        switch (e) {
            case "video":
                r = c, a = r && !o && !l;
                break;
            case "audio":
                r = u, a = r && !o;
                break;
            case "vimeo":
            case "youtube":
            case "soundcloud":
                r = !0, a = !o && !i;
                break;
            default:
                r = u && c, a = r && !o
        }
        return {
            basic: r,
            full: a
        }
    }

    function C(e, n) {
        function r(e, t) {
            f(t, N.classes.hook) || a.push({
                target: e,
                media: t
            })
        }
        var a = [],
            s = [],
            o = [N.selectors.html5, N.selectors.embed].join(",");
        if (P.string(e) ? e = t.querySelectorAll(e) : P.htmlElement(e) ? e = [e] : P.nodeList(e) || P.array(e) || P.string(e) || (P.undefined(n) && P.object(e) && (n = e), e = t.querySelectorAll(o)), P.nodeList(e) && (e = Array.prototype.slice.call(e)), !E().basic || !e.length) return !1;
        for (var i = 0; i < e.length; i++) {
            var l = e[i],
                u = l.querySelectorAll(o);
            if (u.length)
                for (var c = 0; c < u.length; c++) r(l, u[c]);
            else y(l, o) && r(l, l)
        }
        return a.forEach(function(e) {
            var t = e.target,
                r = e.media,
                a = !1;
            r === t && (a = !0);
            var o = {};
            try {
                o = JSON.parse(t.getAttribute("data-plyr"))
            } catch (i) {}
            var l = x({}, N, n, o);
            if (!l.enabled) return null;
            var u = new S(r, l);
            if (P.object(u)) {
                if (l.debug) {
                    var c = l.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                    g(u.getContainer(), c.join(" "), function(e) {
                        console.log([l.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                    })
                }
                h(u.getContainer(), "setup", !0, {
                    plyr: u
                }), s.push(u)
            }
        }), s
    }

    function F(e) {
        if (P.string(e) ? e = t.querySelector(e) : P.undefined(e) && (e = t.body), P.htmlElement(e)) {
            var n = e.querySelectorAll("." + N.classes.setup),
                r = [];
            return Array.prototype.slice.call(n).forEach(function(e) {
                P.object(e.plyr) && r.push(e.plyr)
            }), r
        }
        return []
    }
    var A, I = {
            x: 0,
            y: 0
        },
        N = {
            enabled: !0,
            debug: !1,
            autoplay: !1,
            loop: !1,
            seekTime: 10,
            volume: 10,
            volumeMin: 0,
            volumeMax: 10,
            volumeStep: 1,
            duration: null,
            displayDuration: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/2.0.7/plyr.svg",
            clickToPlay: !0,
            hideControls: !0,
            showPosterOnEnd: !1,
            disableContextMenu: !0,
            keyboardShorcuts: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            selectors: {
                html5: "video, audio",
                embed: "[data-type]",
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    seek: '[data-plyr="seek"]',
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    forward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    fullscreen: '[data-plyr="fullscreen"]'
                },
                volume: {
                    input: '[data-plyr="volume"]',
                    display: ".plyr__volume--display"
                },
                progress: {
                    container: ".plyr__progress",
                    buffer: ".plyr__progress--buffer",
                    played: ".plyr__progress--played"
                },
                captions: ".plyr__captions",
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration"
            },
            classes: {
                setup: "plyr--setup",
                ready: "plyr--ready",
                videoWrapper: "plyr__video-wrapper",
                embedWrapper: "plyr__video-embed",
                type: "plyr--{0}",
                stopped: "plyr--stopped",
                playing: "plyr--playing",
                muted: "plyr--muted",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    active: "plyr--fullscreen-active"
                },
                tabFocus: "tab-focus"
            },
            captions: {
                defaultActive: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                allowAudio: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime} secs",
                play: "Play",
                pause: "Pause",
                forward: "Forward {seektime} secs",
                played: "played",
                buffered: "buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                toggleMute: "Toggle Mute",
                toggleCaptions: "Toggle Captions",
                toggleFullscreen: "Toggle Fullscreen",
                frameTitle: "Player for {title}"
            },
            types: {
                embed: ["youtube", "vimeo", "soundcloud"],
                html5: ["video", "audio"]
            },
            urls: {
                vimeo: {
                    api: "https://player.vimeo.com/api/player.js"
                },
                youtube: {
                    api: "https://www.youtube.com/iframe_api"
                },
                soundcloud: {
                    api: "https://w.soundcloud.com/player/api.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                forward: null,
                mute: null,
                volume: null,
                captions: null,
                fullscreen: null
            },
            events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "emptied"],
            logPrefix: "[Plyr]"
        },
        P = {
            object: function(e) {
                return null !== e && "object" == typeof e
            },
            array: function(e) {
                return null !== e && "object" == typeof e && e.constructor === Array
            },
            number: function(e) {
                return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
            },
            string: function(e) {
                return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
            },
            "boolean": function(e) {
                return null !== e && "boolean" == typeof e
            },
            nodeList: function(e) {
                return null !== e && e instanceof NodeList
            },
            htmlElement: function(e) {
                return null !== e && e instanceof HTMLElement
            },
            "function": function(e) {
                return null !== e && "function" == typeof e
            },
            undefined: function(e) {
                return null !== e && "undefined" == typeof e
            }
        },
        M = {
            supported: function() {
                if (!("localStorage" in e)) return !1;
                try {
                    e.localStorage.setItem("___test", "OK");
                    var t = e.localStorage.getItem("___test");
                    return e.localStorage.removeItem("___test"), "OK" === t
                } catch (n) {
                    return !1
                }
                return !1
            }()
        };
    return {
        setup: C,
        supported: E,
        loadSprite: _,
        get: F
    }
}),
function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }
    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
}();