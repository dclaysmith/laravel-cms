import { resolveComponent as ve, openBlock as F, createElementBlock as H, createElementVNode as k, createVNode as Ke, withCtx as Rt, createTextVNode as Ft, Fragment as Re, shallowRef as Hm, unref as oo, computed as Ne, reactive as Ya, nextTick as Wm, inject as ki, defineComponent as or, h as Sr, provide as Oc, ref as _e, watch as Xa, getCurrentInstance as $u, watchEffect as Um, createBlock as ht, TransitionGroup as jm, renderSlot as Fu, normalizeStyle as Wp, resolveDynamicComponent as FS, renderList as vt, normalizeClass as mi, createCommentVNode as Vt, toDisplayString as Ue, withModifiers as tt, withDirectives as Ie, vModelText as nt, vModelSelect as vi, onMounted as Vu, onBeforeUnmount as Za, Teleport as VS, markRaw as zS, customRef as HS, vShow as Up, createApp as WS } from "vue";
const Ae = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, US = {
  name: "LaravelCmsAdminMenu"
};
function jS(n, e, t, r, i, s) {
  const a = ve("router-link");
  return F(), H("ul", null, [
    k("li", null, [
      Ke(a, { to: "/templates" }, {
        default: Rt(() => [
          Ft("Templates")
        ]),
        _: 1
      })
    ]),
    k("li", null, [
      Ke(a, { to: "/pages" }, {
        default: Rt(() => [
          Ft("Pages")
        ]),
        _: 1
      })
    ]),
    k("li", null, [
      Ke(a, { to: "/paths" }, {
        default: Rt(() => [
          Ft("Paths")
        ]),
        _: 1
      })
    ]),
    k("li", null, [
      Ke(a, { to: "/components" }, {
        default: Rt(() => [
          Ft("Components")
        ]),
        _: 1
      })
    ]),
    k("li", null, [
      Ke(a, { to: "/media" }, {
        default: Rt(() => [
          Ft("Media")
        ]),
        _: 1
      })
    ])
  ]);
}
const qS = /* @__PURE__ */ Ae(US, [["render", jS]]);
const KS = {
  name: "LaravelCmsAdminVueComponent",
  components: {
    AdminMenu: qS
  }
}, JS = { class: "cms-container" }, GS = { class: "cms-menu" }, YS = { class: "cms-content" };
function XS(n, e, t, r, i, s) {
  const a = ve("notifications"), c = ve("admin-menu"), u = ve("router-view");
  return F(), H(Re, null, [
    Ke(a),
    k("div", JS, [
      k("div", GS, [
        Ke(c)
      ]),
      k("div", YS, [
        Ke(u)
      ])
    ])
  ], 64);
}
const qm = /* @__PURE__ */ Ae(KS, [["render", XS]]);
function ZS() {
  return Km().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Km() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const QS = typeof Proxy == "function", ek = "devtools-plugin:setup", tk = "plugin:settings:set";
let Ji, au;
function nk() {
  var n;
  return Ji !== void 0 || (typeof window < "u" && window.performance ? (Ji = !0, au = window.performance) : typeof global < "u" && ((n = global.perf_hooks) === null || n === void 0 ? void 0 : n.performance) ? (Ji = !0, au = global.perf_hooks.performance) : Ji = !1), Ji;
}
function rk() {
  return nk() ? au.now() : Date.now();
}
class ik {
  constructor(e, t) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
    const r = {};
    if (e.settings)
      for (const a in e.settings) {
        const c = e.settings[a];
        r[a] = c.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${e.id}`;
    let s = Object.assign({}, r);
    try {
      const a = localStorage.getItem(i), c = JSON.parse(a);
      Object.assign(s, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(a) {
        try {
          localStorage.setItem(i, JSON.stringify(a));
        } catch {
        }
        s = a;
      },
      now() {
        return rk();
      }
    }, t && t.on(tk, (a, c) => {
      a === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, c) => this.target ? this.target.on[c] : (...u) => {
        this.onQueue.push({
          method: c,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...u) => (this.targetQueue.push({
        method: c,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[c](...u)) : (...u) => new Promise((p) => {
        this.targetQueue.push({
          method: c,
          args: u,
          resolve: p
        });
      })
    });
  }
  async setRealTarget(e) {
    this.target = e;
    for (const t of this.onQueue)
      this.target.on[t.method](...t.args);
    for (const t of this.targetQueue)
      t.resolve(await this.target[t.method](...t.args));
  }
}
function ok(n, e) {
  const t = n, r = Km(), i = ZS(), s = QS && t.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(ek, n, e);
  else {
    const a = s ? new ik(t, i) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: t,
      setupFn: e,
      proxy: a
    }), a && e(a.proxiedTarget);
  }
}
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const xr = typeof window < "u";
function sk(n) {
  return n.__esModule || n[Symbol.toStringTag] === "Module";
}
const Be = Object.assign;
function Tc(n, e) {
  const t = {};
  for (const r in e) {
    const i = e[r];
    t[r] = yn(i) ? i.map(n) : n(i);
  }
  return t;
}
const ss = () => {
}, yn = Array.isArray;
function Oe(n) {
  const e = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + n].concat(e));
}
const ak = /\/$/, lk = (n) => n.replace(ak, "");
function Ac(n, e, t = "/") {
  let r, i = {}, s = "", a = "";
  const c = e.indexOf("#");
  let u = e.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (r = e.slice(0, u), s = e.slice(u + 1, c > -1 ? c : e.length), i = n(s)), c > -1 && (r = r || e.slice(0, c), a = e.slice(c, e.length)), r = fk(r != null ? r : e, t), {
    fullPath: r + (s && "?") + s + a,
    path: r,
    query: i,
    hash: a
  };
}
function ck(n, e) {
  const t = e.query ? n(e.query) : "";
  return e.path + (t && "?") + t + (e.hash || "");
}
function jp(n, e) {
  return !e || !n.toLowerCase().startsWith(e.toLowerCase()) ? n : n.slice(e.length) || "/";
}
function qp(n, e, t) {
  const r = e.matched.length - 1, i = t.matched.length - 1;
  return r > -1 && r === i && Jr(e.matched[r], t.matched[i]) && Jm(e.params, t.params) && n(e.query) === n(t.query) && e.hash === t.hash;
}
function Jr(n, e) {
  return (n.aliasOf || n) === (e.aliasOf || e);
}
function Jm(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (const t in n)
    if (!uk(n[t], e[t]))
      return !1;
  return !0;
}
function uk(n, e) {
  return yn(n) ? Kp(n, e) : yn(e) ? Kp(e, n) : n === e;
}
function Kp(n, e) {
  return yn(e) ? n.length === e.length && n.every((t, r) => t === e[r]) : n.length === 1 && n[0] === e;
}
function fk(n, e) {
  if (n.startsWith("/"))
    return n;
  if (process.env.NODE_ENV !== "production" && !e.startsWith("/"))
    return Oe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${e}". It should look like "/${e}".`), n;
  if (!n)
    return e;
  const t = e.split("/"), r = n.split("/");
  let i = t.length - 1, s, a;
  for (s = 0; s < r.length; s++)
    if (a = r[s], a !== ".")
      if (a === "..")
        i > 1 && i--;
      else
        break;
  return t.slice(0, i).join("/") + "/" + r.slice(s - (s === r.length ? 1 : 0)).join("/");
}
var ms;
(function(n) {
  n.pop = "pop", n.push = "push";
})(ms || (ms = {}));
var as;
(function(n) {
  n.back = "back", n.forward = "forward", n.unknown = "";
})(as || (as = {}));
function dk(n) {
  if (!n)
    if (xr) {
      const e = document.querySelector("base");
      n = e && e.getAttribute("href") || "/", n = n.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      n = "/";
  return n[0] !== "/" && n[0] !== "#" && (n = "/" + n), lk(n);
}
const pk = /^[^#]+#/;
function hk(n, e) {
  return n.replace(pk, "#") + e;
}
function mk(n, e) {
  const t = document.documentElement.getBoundingClientRect(), r = n.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - t.left - (e.left || 0),
    top: r.top - t.top - (e.top || 0)
  };
}
const Qa = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function gk(n) {
  let e;
  if ("el" in n) {
    const t = n.el, r = typeof t == "string" && t.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof n.el == "string" && (!r || !document.getElementById(n.el.slice(1))))
      try {
        const s = document.querySelector(n.el);
        if (r && s) {
          Oe(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Oe(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const i = typeof t == "string" ? r ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
    if (!i) {
      process.env.NODE_ENV !== "production" && Oe(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);
      return;
    }
    e = mk(i, n);
  } else
    e = n;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset);
}
function Jp(n, e) {
  return (history.state ? history.state.position - e : -1) + n;
}
const lu = /* @__PURE__ */ new Map();
function yk(n, e) {
  lu.set(n, e);
}
function vk(n) {
  const e = lu.get(n);
  return lu.delete(n), e;
}
let bk = () => location.protocol + "//" + location.host;
function Gm(n, e) {
  const { pathname: t, search: r, hash: i } = e, s = n.indexOf("#");
  if (s > -1) {
    let c = i.includes(n.slice(s)) ? n.slice(s).length : 1, u = i.slice(c);
    return u[0] !== "/" && (u = "/" + u), jp(u, "");
  }
  return jp(t, n) + r + i;
}
function wk(n, e, t, r) {
  let i = [], s = [], a = null;
  const c = ({ state: g }) => {
    const y = Gm(n, location), x = t.value, _ = e.value;
    let O = 0;
    if (g) {
      if (t.value = y, e.value = g, a && a === x) {
        a = null;
        return;
      }
      O = _ ? g.position - _.position : 0;
    } else
      r(y);
    i.forEach((M) => {
      M(t.value, x, {
        delta: O,
        type: ms.pop,
        direction: O ? O > 0 ? as.forward : as.back : as.unknown
      });
    });
  };
  function u() {
    a = t.value;
  }
  function p(g) {
    i.push(g);
    const y = () => {
      const x = i.indexOf(g);
      x > -1 && i.splice(x, 1);
    };
    return s.push(y), y;
  }
  function d() {
    const { history: g } = window;
    !g.state || g.replaceState(Be({}, g.state, { scroll: Qa() }), "");
  }
  function h() {
    for (const g of s)
      g();
    s = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", d);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", d), {
    pauseListeners: u,
    listen: p,
    destroy: h
  };
}
function Gp(n, e, t, r = !1, i = !1) {
  return {
    back: n,
    current: e,
    forward: t,
    replaced: r,
    position: window.history.length,
    scroll: i ? Qa() : null
  };
}
function xk(n) {
  const { history: e, location: t } = window, r = {
    value: Gm(n, t)
  }, i = { value: e.state };
  i.value || s(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: e.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function s(u, p, d) {
    const h = n.indexOf("#"), g = h > -1 ? (t.host && document.querySelector("base") ? n : n.slice(h)) + u : bk() + n + u;
    try {
      e[d ? "replaceState" : "pushState"](p, "", g), i.value = p;
    } catch (y) {
      process.env.NODE_ENV !== "production" ? Oe("Error with push/replace State", y) : console.error(y), t[d ? "replace" : "assign"](g);
    }
  }
  function a(u, p) {
    const d = Be({}, e.state, Gp(
      i.value.back,
      u,
      i.value.forward,
      !0
    ), p, { position: i.value.position });
    s(u, d, !0), r.value = u;
  }
  function c(u, p) {
    const d = Be(
      {},
      i.value,
      e.state,
      {
        forward: u,
        scroll: Qa()
      }
    );
    process.env.NODE_ENV !== "production" && !e.state && Oe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), s(d.current, d, !0);
    const h = Be({}, Gp(r.value, u, null), { position: d.position + 1 }, p);
    s(u, h, !1), r.value = u;
  }
  return {
    location: r,
    state: i,
    push: c,
    replace: a
  };
}
function _k(n) {
  n = dk(n);
  const e = xk(n), t = wk(n, e.state, e.location, e.replace);
  function r(s, a = !0) {
    a || t.pauseListeners(), history.go(s);
  }
  const i = Be({
    location: "",
    base: n,
    go: r,
    createHref: hk.bind(null, n)
  }, e, t);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), i;
}
function Sk(n) {
  return n = location.host ? n || location.pathname + location.search : "", n.includes("#") || (n += "#"), process.env.NODE_ENV !== "production" && !n.endsWith("#/") && !n.endsWith("#") && Oe(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/, "#")}".`), _k(n);
}
function kk(n) {
  return typeof n == "string" || n && typeof n == "object";
}
function Ym(n) {
  return typeof n == "string" || typeof n == "symbol";
}
const Pr = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, cu = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Yp;
(function(n) {
  n[n.aborted = 4] = "aborted", n[n.cancelled = 8] = "cancelled", n[n.duplicated = 16] = "duplicated";
})(Yp || (Yp = {}));
const Ek = {
  [1]({ location: n, currentLocation: e }) {
    return `No match for
 ${JSON.stringify(n)}${e ? `
while being at
` + JSON.stringify(e) : ""}`;
  },
  [2]({ from: n, to: e }) {
    return `Redirected from "${n.fullPath}" to "${Ok(e)}" via a navigation guard.`;
  },
  [4]({ from: n, to: e }) {
    return `Navigation aborted from "${n.fullPath}" to "${e.fullPath}" via a navigation guard.`;
  },
  [8]({ from: n, to: e }) {
    return `Navigation cancelled from "${n.fullPath}" to "${e.fullPath}" with a new navigation.`;
  },
  [16]({ from: n, to: e }) {
    return `Avoided redundant navigation to current location: "${n.fullPath}".`;
  }
};
function uo(n, e) {
  return process.env.NODE_ENV !== "production" ? Be(new Error(Ek[n](e)), {
    type: n,
    [cu]: !0
  }, e) : Be(new Error(), {
    type: n,
    [cu]: !0
  }, e);
}
function vr(n, e) {
  return n instanceof Error && cu in n && (e == null || !!(n.type & e));
}
const Ck = ["params", "query", "hash"];
function Ok(n) {
  if (typeof n == "string")
    return n;
  if ("path" in n)
    return n.path;
  const e = {};
  for (const t of Ck)
    t in n && (e[t] = n[t]);
  return JSON.stringify(e, null, 2);
}
const Xp = "[^/]+?", Tk = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Ak = /[.+*?^${}()[\]/\\]/g;
function Mk(n, e) {
  const t = Be({}, Tk, e), r = [];
  let i = t.start ? "^" : "";
  const s = [];
  for (const p of n) {
    const d = p.length ? [] : [90];
    t.strict && !p.length && (i += "/");
    for (let h = 0; h < p.length; h++) {
      const g = p[h];
      let y = 40 + (t.sensitive ? 0.25 : 0);
      if (g.type === 0)
        h || (i += "/"), i += g.value.replace(Ak, "\\$&"), y += 40;
      else if (g.type === 1) {
        const { value: x, repeatable: _, optional: O, regexp: M } = g;
        s.push({
          name: x,
          repeatable: _,
          optional: O
        });
        const I = M || Xp;
        if (I !== Xp) {
          y += 10;
          try {
            new RegExp(`(${I})`);
          } catch (E) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${I}): ` + E.message);
          }
        }
        let W = _ ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`;
        h || (W = O && p.length < 2 ? `(?:/${W})` : "/" + W), O && (W += "?"), i += W, y += 20, O && (y += -8), _ && (y += -20), I === ".*" && (y += -50);
      }
      d.push(y);
    }
    r.push(d);
  }
  if (t.strict && t.end) {
    const p = r.length - 1;
    r[p][r[p].length - 1] += 0.7000000000000001;
  }
  t.strict || (i += "/?"), t.end ? i += "$" : t.strict && (i += "(?:/|$)");
  const a = new RegExp(i, t.sensitive ? "" : "i");
  function c(p) {
    const d = p.match(a), h = {};
    if (!d)
      return null;
    for (let g = 1; g < d.length; g++) {
      const y = d[g] || "", x = s[g - 1];
      h[x.name] = y && x.repeatable ? y.split("/") : y;
    }
    return h;
  }
  function u(p) {
    let d = "", h = !1;
    for (const g of n) {
      (!h || !d.endsWith("/")) && (d += "/"), h = !1;
      for (const y of g)
        if (y.type === 0)
          d += y.value;
        else if (y.type === 1) {
          const { value: x, repeatable: _, optional: O } = y, M = x in p ? p[x] : "";
          if (yn(M) && !_)
            throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);
          const I = yn(M) ? M.join("/") : M;
          if (!I)
            if (O)
              g.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : h = !0);
            else
              throw new Error(`Missing required param "${x}"`);
          d += I;
        }
    }
    return d || "/";
  }
  return {
    re: a,
    score: r,
    keys: s,
    parse: c,
    stringify: u
  };
}
function Nk(n, e) {
  let t = 0;
  for (; t < n.length && t < e.length; ) {
    const r = e[t] - n[t];
    if (r)
      return r;
    t++;
  }
  return n.length < e.length ? n.length === 1 && n[0] === 40 + 40 ? -1 : 1 : n.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0;
}
function Dk(n, e) {
  let t = 0;
  const r = n.score, i = e.score;
  for (; t < r.length && t < i.length; ) {
    const s = Nk(r[t], i[t]);
    if (s)
      return s;
    t++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Zp(r))
      return 1;
    if (Zp(i))
      return -1;
  }
  return i.length - r.length;
}
function Zp(n) {
  const e = n[n.length - 1];
  return n.length > 0 && e[e.length - 1] < 0;
}
const Rk = {
  type: 0,
  value: ""
}, Ik = /[a-zA-Z0-9_]/;
function Pk(n) {
  if (!n)
    return [[]];
  if (n === "/")
    return [[Rk]];
  if (!n.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${n}" should be "/${n}".` : `Invalid path "${n}"`);
  function e(y) {
    throw new Error(`ERR (${t})/"${p}": ${y}`);
  }
  let t = 0, r = t;
  const i = [];
  let s;
  function a() {
    s && i.push(s), s = [];
  }
  let c = 0, u, p = "", d = "";
  function h() {
    !p || (t === 0 ? s.push({
      type: 0,
      value: p
    }) : t === 1 || t === 2 || t === 3 ? (s.length > 1 && (u === "*" || u === "+") && e(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: p,
      regexp: d,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : e("Invalid state to consume buffer"), p = "");
  }
  function g() {
    p += u;
  }
  for (; c < n.length; ) {
    if (u = n[c++], u === "\\" && t !== 2) {
      r = t, t = 4;
      continue;
    }
    switch (t) {
      case 0:
        u === "/" ? (p && h(), a()) : u === ":" ? (h(), t = 1) : g();
        break;
      case 4:
        g(), t = r;
        break;
      case 1:
        u === "(" ? t = 2 : Ik.test(u) ? g() : (h(), t = 0, u !== "*" && u !== "?" && u !== "+" && c--);
        break;
      case 2:
        u === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + u : t = 3 : d += u;
        break;
      case 3:
        h(), t = 0, u !== "*" && u !== "?" && u !== "+" && c--, d = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return t === 2 && e(`Unfinished custom RegExp for param "${p}"`), h(), a(), i;
}
function Lk(n, e, t) {
  const r = Mk(Pk(n.path), t);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const a of r.keys)
      s.has(a.name) && Oe(`Found duplicated params with name "${a.name}" for path "${n.path}". Only the last one will be available on "$route.params".`), s.add(a.name);
  }
  const i = Be(r, {
    record: n,
    parent: e,
    children: [],
    alias: []
  });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i;
}
function Bk(n, e) {
  const t = [], r = /* @__PURE__ */ new Map();
  e = th({ strict: !1, end: !0, sensitive: !1 }, e);
  function i(d) {
    return r.get(d);
  }
  function s(d, h, g) {
    const y = !g, x = $k(d);
    process.env.NODE_ENV !== "production" && Hk(x, h), x.aliasOf = g && g.record;
    const _ = th(e, d), O = [
      x
    ];
    if ("alias" in d) {
      const W = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const E of W)
        O.push(Be({}, x, {
          components: g ? g.record.components : x.components,
          path: E,
          aliasOf: g ? g.record : x
        }));
    }
    let M, I;
    for (const W of O) {
      const { path: E } = W;
      if (h && E[0] !== "/") {
        const U = h.record.path, $ = U[U.length - 1] === "/" ? "" : "/";
        W.path = h.record.path + (E && $ + E);
      }
      if (process.env.NODE_ENV !== "production" && W.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (M = Lk(W, h, _), process.env.NODE_ENV !== "production" && h && E[0] === "/" && Wk(M, h), g ? (g.alias.push(M), process.env.NODE_ENV !== "production" && zk(g, M)) : (I = I || M, I !== M && I.alias.push(M), y && d.name && !eh(M) && a(d.name)), x.children) {
        const U = x.children;
        for (let $ = 0; $ < U.length; $++)
          s(U[$], M, g && g.children[$]);
      }
      g = g || M, (M.record.components && Object.keys(M.record.components).length || M.record.name || M.record.redirect) && u(M);
    }
    return I ? () => {
      a(I);
    } : ss;
  }
  function a(d) {
    if (Ym(d)) {
      const h = r.get(d);
      h && (r.delete(d), t.splice(t.indexOf(h), 1), h.children.forEach(a), h.alias.forEach(a));
    } else {
      const h = t.indexOf(d);
      h > -1 && (t.splice(h, 1), d.record.name && r.delete(d.record.name), d.children.forEach(a), d.alias.forEach(a));
    }
  }
  function c() {
    return t;
  }
  function u(d) {
    let h = 0;
    for (; h < t.length && Dk(d, t[h]) >= 0 && (d.record.path !== t[h].record.path || !Xm(d, t[h])); )
      h++;
    t.splice(h, 0, d), d.record.name && !eh(d) && r.set(d.record.name, d);
  }
  function p(d, h) {
    let g, y = {}, x, _;
    if ("name" in d && d.name) {
      if (g = r.get(d.name), !g)
        throw uo(1, {
          location: d
        });
      if (process.env.NODE_ENV !== "production") {
        const I = Object.keys(d.params || {}).filter((W) => !g.keys.find((E) => E.name === W));
        I.length && Oe(`Discarded invalid param(s) "${I.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      _ = g.record.name, y = Be(
        Qp(
          h.params,
          g.keys.filter((I) => !I.optional).map((I) => I.name)
        ),
        d.params && Qp(d.params, g.keys.map((I) => I.name))
      ), x = g.stringify(y);
    } else if ("path" in d)
      x = d.path, process.env.NODE_ENV !== "production" && !x.startsWith("/") && Oe(`The Matcher cannot resolve relative paths but received "${x}". Unless you directly called \`matcher.resolve("${x}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), g = t.find((I) => I.re.test(x)), g && (y = g.parse(x), _ = g.record.name);
    else {
      if (g = h.name ? r.get(h.name) : t.find((I) => I.re.test(h.path)), !g)
        throw uo(1, {
          location: d,
          currentLocation: h
        });
      _ = g.record.name, y = Be({}, h.params, d.params), x = g.stringify(y);
    }
    const O = [];
    let M = g;
    for (; M; )
      O.unshift(M.record), M = M.parent;
    return {
      name: _,
      path: x,
      params: y,
      matched: O,
      meta: Vk(O)
    };
  }
  return n.forEach((d) => s(d)), { addRoute: s, resolve: p, removeRoute: a, getRoutes: c, getRecordMatcher: i };
}
function Qp(n, e) {
  const t = {};
  for (const r of e)
    r in n && (t[r] = n[r]);
  return t;
}
function $k(n) {
  return {
    path: n.path,
    redirect: n.redirect,
    name: n.name,
    meta: n.meta || {},
    aliasOf: void 0,
    beforeEnter: n.beforeEnter,
    props: Fk(n),
    children: n.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in n ? n.components || null : n.component && { default: n.component }
  };
}
function Fk(n) {
  const e = {}, t = n.props || !1;
  if ("component" in n)
    e.default = t;
  else
    for (const r in n.components)
      e[r] = typeof t == "boolean" ? t : t[r];
  return e;
}
function eh(n) {
  for (; n; ) {
    if (n.record.aliasOf)
      return !0;
    n = n.parent;
  }
  return !1;
}
function Vk(n) {
  return n.reduce((e, t) => Be(e, t.meta), {});
}
function th(n, e) {
  const t = {};
  for (const r in n)
    t[r] = r in e ? e[r] : n[r];
  return t;
}
function uu(n, e) {
  return n.name === e.name && n.optional === e.optional && n.repeatable === e.repeatable;
}
function zk(n, e) {
  for (const t of n.keys)
    if (!t.optional && !e.keys.find(uu.bind(null, t)))
      return Oe(`Alias "${e.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);
  for (const t of e.keys)
    if (!t.optional && !n.keys.find(uu.bind(null, t)))
      return Oe(`Alias "${e.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);
}
function Hk(n, e) {
  e && e.record.name && !n.name && !n.path && Oe(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Wk(n, e) {
  for (const t of e.keys)
    if (!n.keys.find(uu.bind(null, t)))
      return Oe(`Absolute path "${n.record.path}" must have the exact same param named "${t.name}" as its parent "${e.record.path}".`);
}
function Xm(n, e) {
  return e.children.some((t) => t === n || Xm(n, t));
}
const Zm = /#/g, Uk = /&/g, jk = /\//g, qk = /=/g, Kk = /\?/g, Qm = /\+/g, Jk = /%5B/g, Gk = /%5D/g, eg = /%5E/g, Yk = /%60/g, tg = /%7B/g, Xk = /%7C/g, ng = /%7D/g, Zk = /%20/g;
function zu(n) {
  return encodeURI("" + n).replace(Xk, "|").replace(Jk, "[").replace(Gk, "]");
}
function Qk(n) {
  return zu(n).replace(tg, "{").replace(ng, "}").replace(eg, "^");
}
function fu(n) {
  return zu(n).replace(Qm, "%2B").replace(Zk, "+").replace(Zm, "%23").replace(Uk, "%26").replace(Yk, "`").replace(tg, "{").replace(ng, "}").replace(eg, "^");
}
function eE(n) {
  return fu(n).replace(qk, "%3D");
}
function tE(n) {
  return zu(n).replace(Zm, "%23").replace(Kk, "%3F");
}
function nE(n) {
  return n == null ? "" : tE(n).replace(jk, "%2F");
}
function gs(n) {
  try {
    return decodeURIComponent("" + n);
  } catch {
    process.env.NODE_ENV !== "production" && Oe(`Error decoding "${n}". Using original value`);
  }
  return "" + n;
}
function rE(n) {
  const e = {};
  if (n === "" || n === "?")
    return e;
  const r = (n[0] === "?" ? n.slice(1) : n).split("&");
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(Qm, " "), a = s.indexOf("="), c = gs(a < 0 ? s : s.slice(0, a)), u = a < 0 ? null : gs(s.slice(a + 1));
    if (c in e) {
      let p = e[c];
      yn(p) || (p = e[c] = [p]), p.push(u);
    } else
      e[c] = u;
  }
  return e;
}
function nh(n) {
  let e = "";
  for (let t in n) {
    const r = n[t];
    if (t = eE(t), r == null) {
      r !== void 0 && (e += (e.length ? "&" : "") + t);
      continue;
    }
    (yn(r) ? r.map((s) => s && fu(s)) : [r && fu(r)]).forEach((s) => {
      s !== void 0 && (e += (e.length ? "&" : "") + t, s != null && (e += "=" + s));
    });
  }
  return e;
}
function iE(n) {
  const e = {};
  for (const t in n) {
    const r = n[t];
    r !== void 0 && (e[t] = yn(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return e;
}
const oE = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), rh = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), el = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), rg = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), du = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Yo() {
  let n = [];
  function e(r) {
    return n.push(r), () => {
      const i = n.indexOf(r);
      i > -1 && n.splice(i, 1);
    };
  }
  function t() {
    n = [];
  }
  return {
    add: e,
    list: () => n,
    reset: t
  };
}
function Fr(n, e, t, r, i) {
  const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, c) => {
    const u = (h) => {
      h === !1 ? c(uo(4, {
        from: t,
        to: e
      })) : h instanceof Error ? c(h) : kk(h) ? c(uo(2, {
        from: e,
        to: h
      })) : (s && r.enterCallbacks[i] === s && typeof h == "function" && s.push(h), a());
    }, p = n.call(r && r.instances[i], e, t, process.env.NODE_ENV !== "production" ? sE(u, e, t) : u);
    let d = Promise.resolve(p);
    if (n.length < 3 && (d = d.then(u)), process.env.NODE_ENV !== "production" && n.length > 2) {
      const h = `The "next" callback was never called inside of ${n.name ? '"' + n.name + '"' : ""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof p == "object" && "then" in p)
        d = d.then((g) => u._called ? g : (Oe(h), Promise.reject(new Error("Invalid navigation guard"))));
      else if (p !== void 0 && !u._called) {
        Oe(h), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((h) => c(h));
  });
}
function sE(n, e, t) {
  let r = 0;
  return function() {
    r++ === 1 && Oe(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), n._called = !0, r === 1 && n.apply(null, arguments);
  };
}
function Mc(n, e, t, r) {
  const i = [];
  for (const s of n) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && Oe(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in s.components) {
      let c = s.components[a];
      if (process.env.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Oe(`Component "${a}" in record with path "${s.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Oe(`Component "${a}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Oe(`Component "${a}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(e !== "beforeRouteEnter" && !s.instances[a]))
        if (aE(c)) {
          const p = (c.__vccOpts || c)[e];
          p && i.push(Fr(p, t, r, s, a));
        } else {
          let u = c();
          process.env.NODE_ENV !== "production" && !("catch" in u) && (Oe(`Component "${a}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), i.push(() => u.then((p) => {
            if (!p)
              return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
            const d = sk(p) ? p.default : p;
            s.components[a] = d;
            const g = (d.__vccOpts || d)[e];
            return g && Fr(g, t, r, s, a)();
          }));
        }
    }
  }
  return i;
}
function aE(n) {
  return typeof n == "object" || "displayName" in n || "props" in n || "__vccOpts" in n;
}
function ih(n) {
  const e = ki(el), t = ki(rg), r = Ne(() => e.resolve(oo(n.to))), i = Ne(() => {
    const { matched: u } = r.value, { length: p } = u, d = u[p - 1], h = t.matched;
    if (!d || !h.length)
      return -1;
    const g = h.findIndex(Jr.bind(null, d));
    if (g > -1)
      return g;
    const y = oh(u[p - 2]);
    return p > 1 && oh(d) === y && h[h.length - 1].path !== y ? h.findIndex(Jr.bind(null, u[p - 2])) : g;
  }), s = Ne(() => i.value > -1 && fE(t.params, r.value.params)), a = Ne(() => i.value > -1 && i.value === t.matched.length - 1 && Jm(t.params, r.value.params));
  function c(u = {}) {
    return uE(u) ? e[oo(n.replace) ? "replace" : "push"](
      oo(n.to)
    ).catch(ss) : Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || !1) && xr) {
    const u = $u();
    if (u) {
      const p = {
        route: r.value,
        isActive: s.value,
        isExactActive: a.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(p), Um(() => {
        p.route = r.value, p.isActive = s.value, p.isExactActive = a.value;
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: Ne(() => r.value.href),
    isActive: s,
    isExactActive: a,
    navigate: c
  };
}
const lE = /* @__PURE__ */ or({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: ih,
  setup(n, { slots: e }) {
    const t = Ya(ih(n)), { options: r } = ki(el), i = Ne(() => ({
      [sh(n.activeClass, r.linkActiveClass, "router-link-active")]: t.isActive,
      [sh(n.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive
    }));
    return () => {
      const s = e.default && e.default(t);
      return n.custom ? s : Sr("a", {
        "aria-current": t.isExactActive ? n.ariaCurrentValue : null,
        href: t.href,
        onClick: t.navigate,
        class: i.value
      }, s);
    };
  }
}), cE = lE;
function uE(n) {
  if (!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey) && !n.defaultPrevented && !(n.button !== void 0 && n.button !== 0)) {
    if (n.currentTarget && n.currentTarget.getAttribute) {
      const e = n.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e))
        return;
    }
    return n.preventDefault && n.preventDefault(), !0;
  }
}
function fE(n, e) {
  for (const t in e) {
    const r = e[t], i = n[t];
    if (typeof r == "string") {
      if (r !== i)
        return !1;
    } else if (!yn(i) || i.length !== r.length || r.some((s, a) => s !== i[a]))
      return !1;
  }
  return !0;
}
function oh(n) {
  return n ? n.aliasOf ? n.aliasOf.path : n.path : "";
}
const sh = (n, e, t) => n != null ? n : e != null ? e : t, dE = /* @__PURE__ */ or({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(n, { attrs: e, slots: t }) {
    process.env.NODE_ENV !== "production" && hE();
    const r = ki(du), i = Ne(() => n.route || r.value), s = ki(rh, 0), a = Ne(() => {
      let p = oo(s);
      const { matched: d } = i.value;
      let h;
      for (; (h = d[p]) && !h.components; )
        p++;
      return p;
    }), c = Ne(() => i.value.matched[a.value]);
    Oc(rh, Ne(() => a.value + 1)), Oc(oE, c), Oc(du, i);
    const u = _e();
    return Xa(() => [u.value, c.value, n.name], ([p, d, h], [g, y, x]) => {
      d && (d.instances[h] = p, y && y !== d && p && p === g && (d.leaveGuards.size || (d.leaveGuards = y.leaveGuards), d.updateGuards.size || (d.updateGuards = y.updateGuards))), p && d && (!y || !Jr(d, y) || !g) && (d.enterCallbacks[h] || []).forEach((_) => _(p));
    }, { flush: "post" }), () => {
      const p = i.value, d = n.name, h = c.value, g = h && h.components[d];
      if (!g)
        return ah(t.default, { Component: g, route: p });
      const y = h.props[d], x = y ? y === !0 ? p.params : typeof y == "function" ? y(p) : y : null, O = Sr(g, Be({}, x, e, {
        onVnodeUnmounted: (M) => {
          M.component.isUnmounted && (h.instances[d] = null);
        },
        ref: u
      }));
      if ((process.env.NODE_ENV !== "production" || !1) && xr && O.ref) {
        const M = {
          depth: a.value,
          name: h.name,
          path: h.path,
          meta: h.meta
        };
        (yn(O.ref) ? O.ref.map((W) => W.i) : [O.ref.i]).forEach((W) => {
          W.__vrv_devtools = M;
        });
      }
      return ah(t.default, { Component: O, route: p }) || O;
    };
  }
});
function ah(n, e) {
  if (!n)
    return null;
  const t = n(e);
  return t.length === 1 ? t[0] : t;
}
const pE = dE;
function hE() {
  const n = $u(), e = n.parent && n.parent.type.name;
  if (e && (e === "KeepAlive" || e.includes("Transition"))) {
    const t = e === "KeepAlive" ? "keep-alive" : "transition";
    Oe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${t}>
    <component :is="Component" />
  </${t}>
</router-view>`);
  }
}
function Xo(n, e) {
  const t = Be({}, n, {
    matched: n.matched.map((r) => SE(r, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: n.fullPath,
      tooltip: e,
      value: t
    }
  };
}
function ya(n) {
  return {
    _custom: {
      display: n
    }
  };
}
let mE = 0;
function gE(n, e, t) {
  if (e.__hasDevtools)
    return;
  e.__hasDevtools = !0;
  const r = mE++;
  ok({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: n
  }, (i) => {
    typeof i.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i.on.inspectComponent((d, h) => {
      d.instanceData && d.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Xo(e.currentRoute.value, "Current Route")
      });
    }), i.on.visitComponentTree(({ treeNode: d, componentInstance: h }) => {
      if (h.__vrv_devtools) {
        const g = h.__vrv_devtools;
        d.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: ig
        });
      }
      yn(h.__vrl_devtools) && (h.__devtoolsApi = i, h.__vrl_devtools.forEach((g) => {
        let y = ag, x = "";
        g.isExactActive ? (y = sg, x = "This is exactly active") : g.isActive && (y = og, x = "This link is active"), d.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: x,
          backgroundColor: y
        });
      }));
    }), Xa(e.currentRoute, () => {
      u(), i.notifyComponentUpdate(), i.sendInspectorTree(c), i.sendInspectorState(c);
    });
    const s = "router:navigations:" + r;
    i.addTimelineLayer({
      id: s,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), e.onError((d, h) => {
      i.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: h.fullPath,
          logType: "error",
          time: i.now(),
          data: { error: d },
          groupId: h.meta.__navigationId
        }
      });
    });
    let a = 0;
    e.beforeEach((d, h) => {
      const g = {
        guard: ya("beforeEach"),
        from: Xo(h, "Current Location during this navigation"),
        to: Xo(d, "Target location")
      };
      Object.defineProperty(d.meta, "__navigationId", {
        value: a++
      }), i.addTimelineEvent({
        layerId: s,
        event: {
          time: i.now(),
          title: "Start of navigation",
          subtitle: d.fullPath,
          data: g,
          groupId: d.meta.__navigationId
        }
      });
    }), e.afterEach((d, h, g) => {
      const y = {
        guard: ya("afterEach")
      };
      g ? (y.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, y.status = ya("\u274C")) : y.status = ya("\u2705"), y.from = Xo(h, "Current Location during this navigation"), y.to = Xo(d, "Target location"), i.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: d.fullPath,
          time: i.now(),
          data: y,
          logType: g ? "warning" : "default",
          groupId: d.meta.__navigationId
        }
      });
    });
    const c = "router-inspector:" + r;
    i.addInspector({
      id: c,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function u() {
      if (!p)
        return;
      const d = p;
      let h = t.getRoutes().filter((g) => !g.parent);
      h.forEach(ug), d.filter && (h = h.filter((g) => pu(g, d.filter.toLowerCase()))), h.forEach((g) => cg(g, e.currentRoute.value)), d.rootNodes = h.map(lg);
    }
    let p;
    i.on.getInspectorTree((d) => {
      p = d, d.app === n && d.inspectorId === c && u();
    }), i.on.getInspectorState((d) => {
      if (d.app === n && d.inspectorId === c) {
        const g = t.getRoutes().find((y) => y.record.__vd_id === d.nodeId);
        g && (d.state = {
          options: vE(g)
        });
      }
    }), i.sendInspectorTree(c), i.sendInspectorState(c);
  });
}
function yE(n) {
  return n.optional ? n.repeatable ? "*" : "?" : n.repeatable ? "+" : "";
}
function vE(n) {
  const { record: e } = n, t = [
    { editable: !1, key: "path", value: e.path }
  ];
  return e.name != null && t.push({
    editable: !1,
    key: "name",
    value: e.name
  }), t.push({ editable: !1, key: "regexp", value: n.re }), n.keys.length && t.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: n.keys.map((r) => `${r.name}${yE(r)}`).join(" "),
        tooltip: "Param keys",
        value: n.keys
      }
    }
  }), e.redirect != null && t.push({
    editable: !1,
    key: "redirect",
    value: e.redirect
  }), n.alias.length && t.push({
    editable: !1,
    key: "aliases",
    value: n.alias.map((r) => r.record.path)
  }), Object.keys(n.record.meta).length && t.push({
    editable: !1,
    key: "meta",
    value: n.record.meta
  }), t.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: n.score.map((r) => r.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: n.score
      }
    }
  }), t;
}
const ig = 15485081, og = 2450411, sg = 8702998, bE = 2282478, ag = 16486972, wE = 6710886;
function lg(n) {
  const e = [], { record: t } = n;
  t.name != null && e.push({
    label: String(t.name),
    textColor: 0,
    backgroundColor: bE
  }), t.aliasOf && e.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ag
  }), n.__vd_match && e.push({
    label: "matches",
    textColor: 0,
    backgroundColor: ig
  }), n.__vd_exactActive && e.push({
    label: "exact",
    textColor: 0,
    backgroundColor: sg
  }), n.__vd_active && e.push({
    label: "active",
    textColor: 0,
    backgroundColor: og
  }), t.redirect && e.push({
    label: typeof t.redirect == "string" ? `redirect: ${t.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: wE
  });
  let r = t.__vd_id;
  return r == null && (r = String(xE++), t.__vd_id = r), {
    id: r,
    label: t.path,
    tags: e,
    children: n.children.map(lg)
  };
}
let xE = 0;
const _E = /^\/(.*)\/([a-z]*)$/;
function cg(n, e) {
  const t = e.matched.length && Jr(e.matched[e.matched.length - 1], n.record);
  n.__vd_exactActive = n.__vd_active = t, t || (n.__vd_active = e.matched.some((r) => Jr(r, n.record))), n.children.forEach((r) => cg(r, e));
}
function ug(n) {
  n.__vd_match = !1, n.children.forEach(ug);
}
function pu(n, e) {
  const t = String(n.re).match(_E);
  if (n.__vd_match = !1, !t || t.length < 3)
    return !1;
  if (new RegExp(t[1].replace(/\$$/, ""), t[2]).test(e))
    return n.children.forEach((a) => pu(a, e)), n.record.path !== "/" || e === "/" ? (n.__vd_match = n.re.test(e), !0) : !1;
  const i = n.record.path.toLowerCase(), s = gs(i);
  return !e.startsWith("/") && (s.includes(e) || i.includes(e)) || s.startsWith(e) || i.startsWith(e) || n.record.name && String(n.record.name).includes(e) ? !0 : n.children.some((a) => pu(a, e));
}
function SE(n, e) {
  const t = {};
  for (const r in n)
    e.includes(r) || (t[r] = n[r]);
  return t;
}
function kE(n) {
  const e = Bk(n.routes, n), t = n.parseQuery || rE, r = n.stringifyQuery || nh, i = n.history;
  if (process.env.NODE_ENV !== "production" && !i)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const s = Yo(), a = Yo(), c = Yo(), u = Hm(Pr);
  let p = Pr;
  xr && n.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = Tc.bind(null, (D) => "" + D), h = Tc.bind(null, nE), g = Tc.bind(null, gs);
  function y(D, j) {
    let q, G;
    return Ym(D) ? (q = e.getRecordMatcher(D), G = j) : G = D, e.addRoute(G, q);
  }
  function x(D) {
    const j = e.getRecordMatcher(D);
    j ? e.removeRoute(j) : process.env.NODE_ENV !== "production" && Oe(`Cannot remove non-existent route "${String(D)}"`);
  }
  function _() {
    return e.getRoutes().map((D) => D.record);
  }
  function O(D) {
    return !!e.getRecordMatcher(D);
  }
  function M(D, j) {
    if (j = Be({}, j || u.value), typeof D == "string") {
      const ae = Ac(t, D, j.path), Pe = e.resolve({ path: ae.path }, j), Xe = i.createHref(ae.fullPath);
      return process.env.NODE_ENV !== "production" && (Xe.startsWith("//") ? Oe(`Location "${D}" resolved to "${Xe}". A resolved location cannot start with multiple slashes.`) : Pe.matched.length || Oe(`No match found for location with path "${D}"`)), Be(ae, Pe, {
        params: g(Pe.params),
        hash: gs(ae.hash),
        redirectedFrom: void 0,
        href: Xe
      });
    }
    let q;
    if ("path" in D)
      process.env.NODE_ENV !== "production" && "params" in D && !("name" in D) && Object.keys(D.params).length && Oe(`Path "${D.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), q = Be({}, D, {
        path: Ac(t, D.path, j.path).path
      });
    else {
      const ae = Be({}, D.params);
      for (const Pe in ae)
        ae[Pe] == null && delete ae[Pe];
      q = Be({}, D, {
        params: h(D.params)
      }), j.params = h(j.params);
    }
    const G = e.resolve(q, j), ce = D.hash || "";
    process.env.NODE_ENV !== "production" && ce && !ce.startsWith("#") && Oe(`A \`hash\` should always start with the character "#". Replace "${ce}" with "#${ce}".`), G.params = d(g(G.params));
    const $e = ck(r, Be({}, D, {
      hash: Qk(ce),
      path: G.path
    })), se = i.createHref($e);
    return process.env.NODE_ENV !== "production" && (se.startsWith("//") ? Oe(`Location "${D}" resolved to "${se}". A resolved location cannot start with multiple slashes.`) : G.matched.length || Oe(`No match found for location with path "${"path" in D ? D.path : D}"`)), Be({
      fullPath: $e,
      hash: ce,
      query: r === nh ? iE(D.query) : D.query || {}
    }, G, {
      redirectedFrom: void 0,
      href: se
    });
  }
  function I(D) {
    return typeof D == "string" ? Ac(t, D, u.value.path) : Be({}, D);
  }
  function W(D, j) {
    if (p !== D)
      return uo(8, {
        from: j,
        to: D
      });
  }
  function E(D) {
    return Z(D);
  }
  function U(D) {
    return E(Be(I(D), { replace: !0 }));
  }
  function $(D) {
    const j = D.matched[D.matched.length - 1];
    if (j && j.redirect) {
      const { redirect: q } = j;
      let G = typeof q == "function" ? q(D) : q;
      if (typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = I(G) : { path: G }, G.params = {}), process.env.NODE_ENV !== "production" && !("path" in G) && !("name" in G))
        throw Oe(`Invalid redirect found:
${JSON.stringify(G, null, 2)}
 when navigating to "${D.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Be({
        query: D.query,
        hash: D.hash,
        params: "path" in G ? {} : D.params
      }, G);
    }
  }
  function Z(D, j) {
    const q = p = M(D), G = u.value, ce = D.state, $e = D.force, se = D.replace === !0, ae = $(q);
    if (ae)
      return Z(
        Be(I(ae), {
          state: typeof ae == "object" ? Be({}, ce, ae.state) : ce,
          force: $e,
          replace: se
        }),
        j || q
      );
    const Pe = q;
    Pe.redirectedFrom = j;
    let Xe;
    return !$e && qp(r, G, q) && (Xe = uo(16, { to: Pe, from: G }), gt(
      G,
      G,
      !0,
      !1
    )), (Xe ? Promise.resolve(Xe) : we(Pe, G)).catch((Je) => vr(Je) ? vr(Je, 2) ? Je : Ot(Je) : He(Je, Pe, G)).then((Je) => {
      if (Je) {
        if (vr(Je, 2))
          return process.env.NODE_ENV !== "production" && qp(r, M(Je.to), Pe) && j && (j._count = j._count ? j._count + 1 : 1) > 10 ? (Oe(`Detected an infinite redirection in a navigation guard when going from "${G.fullPath}" to "${Pe.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : Z(
            Be({
              replace: se
            }, I(Je.to), {
              state: typeof Je.to == "object" ? Be({}, ce, Je.to.state) : ce,
              force: $e
            }),
            j || Pe
          );
      } else
        Je = ke(Pe, G, !0, se, ce);
      return De(Pe, G, Je), Je;
    });
  }
  function K(D, j) {
    const q = W(D, j);
    return q ? Promise.reject(q) : Promise.resolve();
  }
  function we(D, j) {
    let q;
    const [G, ce, $e] = EE(D, j);
    q = Mc(G.reverse(), "beforeRouteLeave", D, j);
    for (const ae of G)
      ae.leaveGuards.forEach((Pe) => {
        q.push(Fr(Pe, D, j));
      });
    const se = K.bind(null, D, j);
    return q.push(se), Gi(q).then(() => {
      q = [];
      for (const ae of s.list())
        q.push(Fr(ae, D, j));
      return q.push(se), Gi(q);
    }).then(() => {
      q = Mc(ce, "beforeRouteUpdate", D, j);
      for (const ae of ce)
        ae.updateGuards.forEach((Pe) => {
          q.push(Fr(Pe, D, j));
        });
      return q.push(se), Gi(q);
    }).then(() => {
      q = [];
      for (const ae of D.matched)
        if (ae.beforeEnter && !j.matched.includes(ae))
          if (yn(ae.beforeEnter))
            for (const Pe of ae.beforeEnter)
              q.push(Fr(Pe, D, j));
          else
            q.push(Fr(ae.beforeEnter, D, j));
      return q.push(se), Gi(q);
    }).then(() => (D.matched.forEach((ae) => ae.enterCallbacks = {}), q = Mc($e, "beforeRouteEnter", D, j), q.push(se), Gi(q))).then(() => {
      q = [];
      for (const ae of a.list())
        q.push(Fr(ae, D, j));
      return q.push(se), Gi(q);
    }).catch((ae) => vr(ae, 8) ? ae : Promise.reject(ae));
  }
  function De(D, j, q) {
    for (const G of c.list())
      G(D, j, q);
  }
  function ke(D, j, q, G, ce) {
    const $e = W(D, j);
    if ($e)
      return $e;
    const se = j === Pr, ae = xr ? history.state : {};
    q && (G || se ? i.replace(D.fullPath, Be({
      scroll: se && ae && ae.scroll
    }, ce)) : i.push(D.fullPath, ce)), u.value = D, gt(D, j, q, se), Ot();
  }
  let Te;
  function je() {
    Te || (Te = i.listen((D, j, q) => {
      if (!Kt.listening)
        return;
      const G = M(D), ce = $(G);
      if (ce) {
        Z(Be(ce, { replace: !0 }), G).catch(ss);
        return;
      }
      p = G;
      const $e = u.value;
      xr && yk(Jp($e.fullPath, q.delta), Qa()), we(G, $e).catch((se) => vr(se, 12) ? se : vr(se, 2) ? (Z(
        se.to,
        G
      ).then((ae) => {
        vr(ae, 20) && !q.delta && q.type === ms.pop && i.go(-1, !1);
      }).catch(ss), Promise.reject()) : (q.delta && i.go(-q.delta, !1), He(se, G, $e))).then((se) => {
        se = se || ke(
          G,
          $e,
          !1
        ), se && (q.delta && !vr(se, 8) ? i.go(-q.delta, !1) : q.type === ms.pop && vr(se, 20) && i.go(-1, !1)), De(G, $e, se);
      }).catch(ss);
    }));
  }
  let lt = Yo(), mt = Yo(), Qe;
  function He(D, j, q) {
    Ot(D);
    const G = mt.list();
    return G.length ? G.forEach((ce) => ce(D, j, q)) : (process.env.NODE_ENV !== "production" && Oe("uncaught error during route navigation:"), console.error(D)), Promise.reject(D);
  }
  function We() {
    return Qe && u.value !== Pr ? Promise.resolve() : new Promise((D, j) => {
      lt.add([D, j]);
    });
  }
  function Ot(D) {
    return Qe || (Qe = !D, je(), lt.list().forEach(([j, q]) => D ? q(D) : j()), lt.reset()), D;
  }
  function gt(D, j, q, G) {
    const { scrollBehavior: ce } = n;
    if (!xr || !ce)
      return Promise.resolve();
    const $e = !q && vk(Jp(D.fullPath, 0)) || (G || !q) && history.state && history.state.scroll || null;
    return Wm().then(() => ce(D, j, $e)).then((se) => se && gk(se)).catch((se) => He(se, D, j));
  }
  const rt = (D) => i.go(D);
  let Tt;
  const an = /* @__PURE__ */ new Set(), Kt = {
    currentRoute: u,
    listening: !0,
    addRoute: y,
    removeRoute: x,
    hasRoute: O,
    getRoutes: _,
    resolve: M,
    options: n,
    push: E,
    replace: U,
    go: rt,
    back: () => rt(-1),
    forward: () => rt(1),
    beforeEach: s.add,
    beforeResolve: a.add,
    afterEach: c.add,
    onError: mt.add,
    isReady: We,
    install(D) {
      const j = this;
      D.component("RouterLink", cE), D.component("RouterView", pE), D.config.globalProperties.$router = j, Object.defineProperty(D.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => oo(u)
      }), xr && !Tt && u.value === Pr && (Tt = !0, E(i.location).catch((ce) => {
        process.env.NODE_ENV !== "production" && Oe("Unexpected error when starting the router:", ce);
      }));
      const q = {};
      for (const ce in Pr)
        q[ce] = Ne(() => u.value[ce]);
      D.provide(el, j), D.provide(rg, Ya(q)), D.provide(du, u);
      const G = D.unmount;
      an.add(D), D.unmount = function() {
        an.delete(D), an.size < 1 && (p = Pr, Te && Te(), Te = null, u.value = Pr, Tt = !1, Qe = !1), G();
      }, (process.env.NODE_ENV !== "production" || !1) && xr && gE(D, j, e);
    }
  };
  return Kt;
}
function Gi(n) {
  return n.reduce((e, t) => e.then(() => t()), Promise.resolve());
}
function EE(n, e) {
  const t = [], r = [], i = [], s = Math.max(e.matched.length, n.matched.length);
  for (let a = 0; a < s; a++) {
    const c = e.matched[a];
    c && (n.matched.find((p) => Jr(p, c)) ? r.push(c) : t.push(c));
    const u = n.matched[a];
    u && (e.matched.find((p) => Jr(p, u)) || i.push(u));
  }
  return [t, r, i];
}
function fg() {
  return ki(el);
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".vue-notification-group{display:block;position:fixed;z-index:5000}.vue-notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification-title{font-weight:600}.vue-notification-template{display:block;box-sizing:border-box;background:white;text-align:left}.vue-notification{display:block;box-sizing:border-box;text-align:left;font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44A4FC;border-left:5px solid #187FE7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#E54D42;border-left-color:#b82e24}.vue-notification.success{background:#68CD86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter-from,.vn-fade-leave-to{opacity:0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var CE = Object.defineProperty, OE = (n, e, t) => e in n ? CE(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, va = (n, e, t) => (OE(n, typeof e != "symbol" ? e + "" : e, t), t);
function TE(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(e, t) {
    var r = n.get(e);
    r ? r.push(t) : n.set(e, [t]);
  }, off: function(e, t) {
    var r = n.get(e);
    r && (t ? r.splice(r.indexOf(t) >>> 0, 1) : n.set(e, []));
  }, emit: function(e, t) {
    var r = n.get(e);
    r && r.slice().map(function(i) {
      i(t);
    }), (r = n.get("*")) && r.slice().map(function(i) {
      i(e, t);
    });
  } };
}
const Na = TE(), dg = /* @__PURE__ */ new Map(), lh = {
  x: ["left", "center", "right"],
  y: ["top", "bottom"]
}, AE = ((n) => () => n++)(0), ME = (n) => typeof n != "string" ? [] : n.split(/\s+/gi).filter((e) => e), NE = (n) => {
  typeof n == "string" && (n = ME(n));
  let e = null, t = null;
  return n.forEach((r) => {
    lh.y.indexOf(r) !== -1 && (t = r), lh.x.indexOf(r) !== -1 && (e = r);
  }), { x: e, y: t };
};
class DE {
  constructor(e, t, r) {
    va(this, "start"), va(this, "remaining"), va(this, "notifyItem"), va(this, "callback"), this.remaining = t, this.callback = e, this.notifyItem = r, this.resume();
  }
  pause() {
    clearTimeout(this.notifyItem.timer), this.remaining -= Date.now() - this.start;
  }
  resume() {
    this.start = Date.now(), clearTimeout(this.notifyItem.timer), this.notifyItem.timer = setTimeout(this.callback, this.remaining);
  }
}
const Nc = {
  position: ["top", "right"],
  cssAnimation: "vn-fade",
  velocityAnimation: {
    enter: (n) => ({
      height: [n.clientHeight, 0],
      opacity: [1, 0]
    }),
    leave: {
      height: 0,
      opacity: [0, 1]
    }
  }
}, RE = or({
  name: "velocity-group",
  emits: ["after-leave", "leave", "enter"],
  methods: {
    enter(n, e) {
      this.$emit("enter", n, e);
    },
    leave(n, e) {
      this.$emit("leave", n, e);
    },
    afterLeave() {
      this.$emit("after-leave");
    }
  }
}), Hu = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
};
function IE(n, e, t, r, i, s) {
  return F(), ht(jm, {
    tag: "span",
    css: !1,
    onEnter: n.enter,
    onLeave: n.leave,
    onAfterLeave: n.afterLeave
  }, {
    default: Rt(() => [
      Fu(n.$slots, "default")
    ]),
    _: 3
  }, 8, ["onEnter", "onLeave", "onAfterLeave"]);
}
const PE = /* @__PURE__ */ Hu(RE, [["render", IE]]), LE = or({
  name: "css-group",
  inheritAttrs: !1,
  props: {
    name: { type: String, required: !0 }
  }
});
function BE(n, e, t, r, i, s) {
  return F(), ht(jm, {
    tag: "span",
    name: n.name
  }, {
    default: Rt(() => [
      Fu(n.$slots, "default")
    ]),
    _: 3
  }, 8, ["name"]);
}
const $E = /* @__PURE__ */ Hu(LE, [["render", BE]]), Dc = "[-+]?[0-9]*.?[0-9]+", ch = [
  {
    name: "px",
    regexp: new RegExp(`^${Dc}px$`)
  },
  {
    name: "%",
    regexp: new RegExp(`^${Dc}%$`)
  },
  {
    name: "px",
    regexp: new RegExp(`^${Dc}$`)
  }
], FE = (n) => {
  if (n === "auto")
    return {
      type: n,
      value: 0
    };
  for (let e = 0; e < ch.length; e++) {
    const t = ch[e];
    if (t.regexp.test(n))
      return {
        type: t.name,
        value: parseFloat(n)
      };
  }
  return {
    type: "",
    value: n
  };
}, VE = (n) => {
  switch (typeof n) {
    case "number":
      return { type: "px", value: n };
    case "string":
      return FE(n);
    default:
      return { type: "", value: n };
  }
}, ba = {
  IDLE: 0,
  DESTROYED: 2
}, zE = or({
  name: "notifications",
  components: {
    VelocityGroup: PE,
    CssGroup: $E
  },
  props: {
    group: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 300
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    position: {
      type: [String, Array],
      default: Nc.position
    },
    classes: {
      type: String,
      default: "vue-notification"
    },
    animationType: {
      type: String,
      default: "css"
    },
    animation: {
      type: Object,
      default: Nc.velocityAnimation
    },
    animationName: {
      type: String,
      default: Nc.cssAnimation
    },
    speed: {
      type: Number,
      default: 300
    },
    cooldown: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 3e3
    },
    delay: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1 / 0
    },
    ignoreDuplicates: {
      type: Boolean,
      default: !1
    },
    closeOnClick: {
      type: Boolean,
      default: !0
    },
    pauseOnHover: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click", "destroy"],
  data() {
    return {
      list: [],
      velocity: dg.get("velocity"),
      timerControl: null
    };
  },
  computed: {
    actualWidth() {
      return VE(this.width);
    },
    isVA() {
      return this.animationType === "velocity";
    },
    componentName() {
      return this.isVA ? "velocity-group" : "css-group";
    },
    styles() {
      const { x: n, y: e } = NE(this.position), t = this.actualWidth.value, r = this.actualWidth.type, i = {
        width: t + r
      };
      return e && (i[e] = "0px"), n && (n === "center" ? i.left = `calc(50% - ${+t / 2}${r})` : i[n] = "0px"), i;
    },
    active() {
      return this.list.filter((n) => n.state !== ba.DESTROYED);
    },
    botToTop() {
      return this.styles.hasOwnProperty("bottom");
    }
  },
  mounted() {
    Na.on("add", this.addItem), Na.on("close", this.closeItem);
  },
  methods: {
    destroyIfNecessary(n) {
      this.$emit("click", n), this.closeOnClick && this.destroy(n);
    },
    pauseTimeout() {
      var n;
      this.pauseOnHover && ((n = this.timerControl) == null || n.pause());
    },
    resumeTimeout() {
      var n;
      this.pauseOnHover && ((n = this.timerControl) == null || n.resume());
    },
    addItem(n = {}) {
      if (n.group || (n.group = ""), n.data || (n.data = {}), this.group !== n.group)
        return;
      if (n.clean || n.clear) {
        this.destroyAll();
        return;
      }
      const e = typeof n.duration == "number" ? n.duration : this.duration, t = typeof n.speed == "number" ? n.speed : this.speed, r = typeof n.ignoreDuplicates == "boolean" ? n.ignoreDuplicates : this.ignoreDuplicates, { title: i, text: s, type: a, data: c, id: u } = n, p = {
        id: u || AE(),
        title: i,
        text: s,
        type: a,
        state: ba.IDLE,
        speed: t,
        length: e + 2 * t,
        data: c
      };
      e >= 0 && (this.timerControl = new DE(() => this.destroy(p), p.length, p));
      const d = this.reverse ? !this.botToTop : this.botToTop;
      let h = -1;
      const g = this.active.some((y) => y.title === n.title && y.text === n.text);
      (!r || !g) && (d ? (this.list.push(p), this.active.length > this.max && (h = 0)) : (this.list.unshift(p), this.active.length > this.max && (h = this.active.length - 1)), h !== -1 && this.destroy(this.active[h]));
    },
    closeItem(n) {
      this.destroyById(n);
    },
    notifyClass(n) {
      var e;
      return [
        "vue-notification-template",
        this.classes,
        (e = n.type) != null ? e : ""
      ];
    },
    notifyWrapperStyle(n) {
      return this.isVA ? void 0 : { transition: `all ${n.speed}ms` };
    },
    destroy(n) {
      clearTimeout(n.timer), n.state = ba.DESTROYED, this.clean(), this.$emit("destroy", n);
    },
    destroyById(n) {
      const e = this.list.find((t) => t.id === n);
      e && this.destroy(e);
    },
    destroyAll() {
      this.active.forEach(this.destroy);
    },
    getAnimation(n, e) {
      var t;
      const r = (t = this.animation) == null ? void 0 : t[n];
      return typeof r == "function" ? r.call(this, e) : r;
    },
    enter(n, e) {
      if (!this.isVA)
        return;
      const t = this.getAnimation("enter", n);
      this.velocity(n, t, {
        duration: this.speed,
        complete: e
      });
    },
    leave(n, e) {
      if (!this.isVA)
        return;
      const t = this.getAnimation("leave", n);
      this.velocity(n, t, {
        duration: this.speed,
        complete: e
      });
    },
    clean() {
      this.list = this.list.filter((n) => n.state !== ba.DESTROYED);
    }
  }
}), HE = ["data-id"], WE = ["onClick"], UE = ["innerHTML"], jE = ["innerHTML"];
function qE(n, e, t, r, i, s) {
  return F(), H("div", {
    class: "vue-notification-group",
    style: Wp(n.styles)
  }, [
    (F(), ht(FS(n.componentName), {
      name: n.animationName,
      onEnter: n.enter,
      onLeave: n.leave,
      onAfterLeave: n.clean
    }, {
      default: Rt(() => [
        (F(!0), H(Re, null, vt(n.active, (a) => (F(), H("div", {
          key: a.id,
          class: "vue-notification-wrapper",
          style: Wp(n.notifyWrapperStyle(a)),
          "data-id": a.id,
          onMouseenter: e[0] || (e[0] = (...c) => n.pauseTimeout && n.pauseTimeout(...c)),
          onMouseleave: e[1] || (e[1] = (...c) => n.resumeTimeout && n.resumeTimeout(...c))
        }, [
          Fu(n.$slots, "body", {
            class: mi([n.classes, a.type]),
            item: a,
            close: () => n.destroy(a)
          }, () => [
            k("div", {
              class: mi(n.notifyClass(a)),
              onClick: (c) => n.destroyIfNecessary(a)
            }, [
              a.title ? (F(), H("div", {
                key: 0,
                class: "notification-title",
                innerHTML: a.title
              }, null, 8, UE)) : Vt("", !0),
              k("div", {
                class: "notification-content",
                innerHTML: a.text
              }, null, 8, jE)
            ], 10, WE)
          ])
        ], 44, HE))), 128))
      ]),
      _: 3
    }, 40, ["name", "onEnter", "onLeave", "onAfterLeave"]))
  ], 4);
}
const KE = /* @__PURE__ */ Hu(zE, [["render", qE]]), de = (n) => {
  typeof n == "string" && (n = { title: "", text: n }), typeof n == "object" && Na.emit("add", n);
};
de.close = (n) => {
  Na.emit("close", n);
};
function JE(n, e = {}) {
  Object.entries(e).forEach((r) => dg.set(...r));
  const t = e.name || "notify";
  n.config.globalProperties["$" + t] = de, n.component(e.componentName || "notifications", KE);
}
const GE = {
  install: JE
};
var Zo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zt = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(n, e) {
  (function() {
    var t, r = "4.17.21", i = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", a = "Expected a function", c = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", p = 500, d = "__lodash_placeholder__", h = 1, g = 2, y = 4, x = 1, _ = 2, O = 1, M = 2, I = 4, W = 8, E = 16, U = 32, $ = 64, Z = 128, K = 256, we = 512, De = 30, ke = "...", Te = 800, je = 16, lt = 1, mt = 2, Qe = 3, He = 1 / 0, We = 9007199254740991, Ot = 17976931348623157e292, gt = 0 / 0, rt = 4294967295, Tt = rt - 1, an = rt >>> 1, Kt = [
      ["ary", Z],
      ["bind", O],
      ["bindKey", M],
      ["curry", W],
      ["curryRight", E],
      ["flip", we],
      ["partial", U],
      ["partialRight", $],
      ["rearg", K]
    ], D = "[object Arguments]", j = "[object Array]", q = "[object AsyncFunction]", G = "[object Boolean]", ce = "[object Date]", $e = "[object DOMException]", se = "[object Error]", ae = "[object Function]", Pe = "[object GeneratorFunction]", Xe = "[object Map]", Je = "[object Number]", ti = "[object Null]", It = "[object Object]", ni = "[object Promise]", Mi = "[object Proxy]", Pt = "[object RegExp]", ct = "[object Set]", Rn = "[object String]", vn = "[object Symbol]", ri = "[object Undefined]", jn = "[object WeakMap]", Ni = "[object WeakSet]", qn = "[object ArrayBuffer]", In = "[object DataView]", Oo = "[object Float32Array]", To = "[object Float64Array]", Ao = "[object Int8Array]", Mo = "[object Int16Array]", No = "[object Int32Array]", R = "[object Uint8Array]", Q = "[object Uint8ClampedArray]", ne = "[object Uint16Array]", Me = "[object Uint32Array]", Ee = /\b__p \+= '';/g, xt = /\b(__p \+=) '' \+/g, Jt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ar = /&(?:amp|lt|gt|quot|#39);/g, Do = /[&<>"']/g, lr = RegExp(ar.source), Ro = RegExp(Do.source), Di = /<%-([\s\S]+?)%>/g, Er = /<%([\s\S]+?)%>/g, Ts = /<%=([\s\S]+?)%>/g, Io = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ri = /^\w*$/, mv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ml = /[\\^$.*+?()[\]{}|]/g, gv = RegExp(ml.source), gl = /^\s+/, yv = /\s/, vv = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, bv = /\{\n\/\* \[wrapped with (.+)\] \*/, wv = /,? & /, xv = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, _v = /[()=,{}\[\]\/\s]/, Sv = /\\(\\)?/g, kv = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, yf = /\w*$/, Ev = /^[-+]0x[0-9a-f]+$/i, Cv = /^0b[01]+$/i, Ov = /^\[object .+?Constructor\]$/, Tv = /^0o[0-7]+$/i, Av = /^(?:0|[1-9]\d*)$/, Mv = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, As = /($^)/, Nv = /['\n\r\u2028\u2029\\]/g, Ms = "\\ud800-\\udfff", Dv = "\\u0300-\\u036f", Rv = "\\ufe20-\\ufe2f", Iv = "\\u20d0-\\u20ff", vf = Dv + Rv + Iv, bf = "\\u2700-\\u27bf", wf = "a-z\\xdf-\\xf6\\xf8-\\xff", Pv = "\\xac\\xb1\\xd7\\xf7", Lv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Bv = "\\u2000-\\u206f", $v = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xf = "A-Z\\xc0-\\xd6\\xd8-\\xde", _f = "\\ufe0e\\ufe0f", Sf = Pv + Lv + Bv + $v, yl = "['\u2019]", Fv = "[" + Ms + "]", kf = "[" + Sf + "]", Ns = "[" + vf + "]", Ef = "\\d+", Vv = "[" + bf + "]", Cf = "[" + wf + "]", Of = "[^" + Ms + Sf + Ef + bf + wf + xf + "]", vl = "\\ud83c[\\udffb-\\udfff]", zv = "(?:" + Ns + "|" + vl + ")", Tf = "[^" + Ms + "]", bl = "(?:\\ud83c[\\udde6-\\uddff]){2}", wl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ii = "[" + xf + "]", Af = "\\u200d", Mf = "(?:" + Cf + "|" + Of + ")", Hv = "(?:" + Ii + "|" + Of + ")", Nf = "(?:" + yl + "(?:d|ll|m|re|s|t|ve))?", Df = "(?:" + yl + "(?:D|LL|M|RE|S|T|VE))?", Rf = zv + "?", If = "[" + _f + "]?", Wv = "(?:" + Af + "(?:" + [Tf, bl, wl].join("|") + ")" + If + Rf + ")*", Uv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", jv = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Pf = If + Rf + Wv, qv = "(?:" + [Vv, bl, wl].join("|") + ")" + Pf, Kv = "(?:" + [Tf + Ns + "?", Ns, bl, wl, Fv].join("|") + ")", Jv = RegExp(yl, "g"), Gv = RegExp(Ns, "g"), xl = RegExp(vl + "(?=" + vl + ")|" + Kv + Pf, "g"), Yv = RegExp([
      Ii + "?" + Cf + "+" + Nf + "(?=" + [kf, Ii, "$"].join("|") + ")",
      Hv + "+" + Df + "(?=" + [kf, Ii + Mf, "$"].join("|") + ")",
      Ii + "?" + Mf + "+" + Nf,
      Ii + "+" + Df,
      jv,
      Uv,
      Ef,
      qv
    ].join("|"), "g"), Xv = RegExp("[" + Af + Ms + vf + _f + "]"), Zv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Qv = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], e0 = -1, Ye = {};
    Ye[Oo] = Ye[To] = Ye[Ao] = Ye[Mo] = Ye[No] = Ye[R] = Ye[Q] = Ye[ne] = Ye[Me] = !0, Ye[D] = Ye[j] = Ye[qn] = Ye[G] = Ye[In] = Ye[ce] = Ye[se] = Ye[ae] = Ye[Xe] = Ye[Je] = Ye[It] = Ye[Pt] = Ye[ct] = Ye[Rn] = Ye[jn] = !1;
    var Ge = {};
    Ge[D] = Ge[j] = Ge[qn] = Ge[In] = Ge[G] = Ge[ce] = Ge[Oo] = Ge[To] = Ge[Ao] = Ge[Mo] = Ge[No] = Ge[Xe] = Ge[Je] = Ge[It] = Ge[Pt] = Ge[ct] = Ge[Rn] = Ge[vn] = Ge[R] = Ge[Q] = Ge[ne] = Ge[Me] = !0, Ge[se] = Ge[ae] = Ge[jn] = !1;
    var t0 = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, n0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, r0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, i0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, o0 = parseFloat, s0 = parseInt, Lf = typeof Zo == "object" && Zo && Zo.Object === Object && Zo, a0 = typeof self == "object" && self && self.Object === Object && self, _t = Lf || a0 || Function("return this")(), _l = e && !e.nodeType && e, ii = _l && !0 && n && !n.nodeType && n, Bf = ii && ii.exports === _l, Sl = Bf && Lf.process, bn = function() {
      try {
        var T = ii && ii.require && ii.require("util").types;
        return T || Sl && Sl.binding && Sl.binding("util");
      } catch {
      }
    }(), $f = bn && bn.isArrayBuffer, Ff = bn && bn.isDate, Vf = bn && bn.isMap, zf = bn && bn.isRegExp, Hf = bn && bn.isSet, Wf = bn && bn.isTypedArray;
    function ln(T, P, N) {
      switch (N.length) {
        case 0:
          return T.call(P);
        case 1:
          return T.call(P, N[0]);
        case 2:
          return T.call(P, N[0], N[1]);
        case 3:
          return T.call(P, N[0], N[1], N[2]);
      }
      return T.apply(P, N);
    }
    function l0(T, P, N, X) {
      for (var ue = -1, Le = T == null ? 0 : T.length; ++ue < Le; ) {
        var ut = T[ue];
        P(X, ut, N(ut), T);
      }
      return X;
    }
    function wn(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length; ++N < X && P(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function c0(T, P) {
      for (var N = T == null ? 0 : T.length; N-- && P(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Uf(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length; ++N < X; )
        if (!P(T[N], N, T))
          return !1;
      return !0;
    }
    function Cr(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length, ue = 0, Le = []; ++N < X; ) {
        var ut = T[N];
        P(ut, N, T) && (Le[ue++] = ut);
      }
      return Le;
    }
    function Ds(T, P) {
      var N = T == null ? 0 : T.length;
      return !!N && Pi(T, P, 0) > -1;
    }
    function kl(T, P, N) {
      for (var X = -1, ue = T == null ? 0 : T.length; ++X < ue; )
        if (N(P, T[X]))
          return !0;
      return !1;
    }
    function Ze(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length, ue = Array(X); ++N < X; )
        ue[N] = P(T[N], N, T);
      return ue;
    }
    function Or(T, P) {
      for (var N = -1, X = P.length, ue = T.length; ++N < X; )
        T[ue + N] = P[N];
      return T;
    }
    function El(T, P, N, X) {
      var ue = -1, Le = T == null ? 0 : T.length;
      for (X && Le && (N = T[++ue]); ++ue < Le; )
        N = P(N, T[ue], ue, T);
      return N;
    }
    function u0(T, P, N, X) {
      var ue = T == null ? 0 : T.length;
      for (X && ue && (N = T[--ue]); ue--; )
        N = P(N, T[ue], ue, T);
      return N;
    }
    function Cl(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length; ++N < X; )
        if (P(T[N], N, T))
          return !0;
      return !1;
    }
    var f0 = Ol("length");
    function d0(T) {
      return T.split("");
    }
    function p0(T) {
      return T.match(xv) || [];
    }
    function jf(T, P, N) {
      var X;
      return N(T, function(ue, Le, ut) {
        if (P(ue, Le, ut))
          return X = Le, !1;
      }), X;
    }
    function Rs(T, P, N, X) {
      for (var ue = T.length, Le = N + (X ? 1 : -1); X ? Le-- : ++Le < ue; )
        if (P(T[Le], Le, T))
          return Le;
      return -1;
    }
    function Pi(T, P, N) {
      return P === P ? E0(T, P, N) : Rs(T, qf, N);
    }
    function h0(T, P, N, X) {
      for (var ue = N - 1, Le = T.length; ++ue < Le; )
        if (X(T[ue], P))
          return ue;
      return -1;
    }
    function qf(T) {
      return T !== T;
    }
    function Kf(T, P) {
      var N = T == null ? 0 : T.length;
      return N ? Al(T, P) / N : gt;
    }
    function Ol(T) {
      return function(P) {
        return P == null ? t : P[T];
      };
    }
    function Tl(T) {
      return function(P) {
        return T == null ? t : T[P];
      };
    }
    function Jf(T, P, N, X, ue) {
      return ue(T, function(Le, ut, qe) {
        N = X ? (X = !1, Le) : P(N, Le, ut, qe);
      }), N;
    }
    function m0(T, P) {
      var N = T.length;
      for (T.sort(P); N--; )
        T[N] = T[N].value;
      return T;
    }
    function Al(T, P) {
      for (var N, X = -1, ue = T.length; ++X < ue; ) {
        var Le = P(T[X]);
        Le !== t && (N = N === t ? Le : N + Le);
      }
      return N;
    }
    function Ml(T, P) {
      for (var N = -1, X = Array(T); ++N < T; )
        X[N] = P(N);
      return X;
    }
    function g0(T, P) {
      return Ze(P, function(N) {
        return [N, T[N]];
      });
    }
    function Gf(T) {
      return T && T.slice(0, Qf(T) + 1).replace(gl, "");
    }
    function cn(T) {
      return function(P) {
        return T(P);
      };
    }
    function Nl(T, P) {
      return Ze(P, function(N) {
        return T[N];
      });
    }
    function Po(T, P) {
      return T.has(P);
    }
    function Yf(T, P) {
      for (var N = -1, X = T.length; ++N < X && Pi(P, T[N], 0) > -1; )
        ;
      return N;
    }
    function Xf(T, P) {
      for (var N = T.length; N-- && Pi(P, T[N], 0) > -1; )
        ;
      return N;
    }
    function y0(T, P) {
      for (var N = T.length, X = 0; N--; )
        T[N] === P && ++X;
      return X;
    }
    var v0 = Tl(t0), b0 = Tl(n0);
    function w0(T) {
      return "\\" + i0[T];
    }
    function x0(T, P) {
      return T == null ? t : T[P];
    }
    function Li(T) {
      return Xv.test(T);
    }
    function _0(T) {
      return Zv.test(T);
    }
    function S0(T) {
      for (var P, N = []; !(P = T.next()).done; )
        N.push(P.value);
      return N;
    }
    function Dl(T) {
      var P = -1, N = Array(T.size);
      return T.forEach(function(X, ue) {
        N[++P] = [ue, X];
      }), N;
    }
    function Zf(T, P) {
      return function(N) {
        return T(P(N));
      };
    }
    function Tr(T, P) {
      for (var N = -1, X = T.length, ue = 0, Le = []; ++N < X; ) {
        var ut = T[N];
        (ut === P || ut === d) && (T[N] = d, Le[ue++] = N);
      }
      return Le;
    }
    function Is(T) {
      var P = -1, N = Array(T.size);
      return T.forEach(function(X) {
        N[++P] = X;
      }), N;
    }
    function k0(T) {
      var P = -1, N = Array(T.size);
      return T.forEach(function(X) {
        N[++P] = [X, X];
      }), N;
    }
    function E0(T, P, N) {
      for (var X = N - 1, ue = T.length; ++X < ue; )
        if (T[X] === P)
          return X;
      return -1;
    }
    function C0(T, P, N) {
      for (var X = N + 1; X--; )
        if (T[X] === P)
          return X;
      return X;
    }
    function Bi(T) {
      return Li(T) ? T0(T) : f0(T);
    }
    function Pn(T) {
      return Li(T) ? A0(T) : d0(T);
    }
    function Qf(T) {
      for (var P = T.length; P-- && yv.test(T.charAt(P)); )
        ;
      return P;
    }
    var O0 = Tl(r0);
    function T0(T) {
      for (var P = xl.lastIndex = 0; xl.test(T); )
        ++P;
      return P;
    }
    function A0(T) {
      return T.match(xl) || [];
    }
    function M0(T) {
      return T.match(Yv) || [];
    }
    var N0 = function T(P) {
      P = P == null ? _t : $i.defaults(_t.Object(), P, $i.pick(_t, Qv));
      var N = P.Array, X = P.Date, ue = P.Error, Le = P.Function, ut = P.Math, qe = P.Object, Rl = P.RegExp, D0 = P.String, xn = P.TypeError, Ps = N.prototype, R0 = Le.prototype, Fi = qe.prototype, Ls = P["__core-js_shared__"], Bs = R0.toString, ze = Fi.hasOwnProperty, I0 = 0, ed = function() {
        var o = /[^.]+$/.exec(Ls && Ls.keys && Ls.keys.IE_PROTO || "");
        return o ? "Symbol(src)_1." + o : "";
      }(), $s = Fi.toString, P0 = Bs.call(qe), L0 = _t._, B0 = Rl(
        "^" + Bs.call(ze).replace(ml, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Fs = Bf ? P.Buffer : t, Ar = P.Symbol, Vs = P.Uint8Array, td = Fs ? Fs.allocUnsafe : t, zs = Zf(qe.getPrototypeOf, qe), nd = qe.create, rd = Fi.propertyIsEnumerable, Hs = Ps.splice, id = Ar ? Ar.isConcatSpreadable : t, Lo = Ar ? Ar.iterator : t, oi = Ar ? Ar.toStringTag : t, Ws = function() {
        try {
          var o = ui(qe, "defineProperty");
          return o({}, "", {}), o;
        } catch {
        }
      }(), $0 = P.clearTimeout !== _t.clearTimeout && P.clearTimeout, F0 = X && X.now !== _t.Date.now && X.now, V0 = P.setTimeout !== _t.setTimeout && P.setTimeout, Us = ut.ceil, js = ut.floor, Il = qe.getOwnPropertySymbols, z0 = Fs ? Fs.isBuffer : t, od = P.isFinite, H0 = Ps.join, W0 = Zf(qe.keys, qe), ft = ut.max, At = ut.min, U0 = X.now, j0 = P.parseInt, sd = ut.random, q0 = Ps.reverse, Pl = ui(P, "DataView"), Bo = ui(P, "Map"), Ll = ui(P, "Promise"), Vi = ui(P, "Set"), $o = ui(P, "WeakMap"), Fo = ui(qe, "create"), qs = $o && new $o(), zi = {}, K0 = fi(Pl), J0 = fi(Bo), G0 = fi(Ll), Y0 = fi(Vi), X0 = fi($o), Ks = Ar ? Ar.prototype : t, Vo = Ks ? Ks.valueOf : t, ad = Ks ? Ks.toString : t;
      function b(o) {
        if (it(o) && !fe(o) && !(o instanceof Se)) {
          if (o instanceof _n)
            return o;
          if (ze.call(o, "__wrapped__"))
            return lp(o);
        }
        return new _n(o);
      }
      var Hi = function() {
        function o() {
        }
        return function(l) {
          if (!et(l))
            return {};
          if (nd)
            return nd(l);
          o.prototype = l;
          var f = new o();
          return o.prototype = t, f;
        };
      }();
      function Js() {
      }
      function _n(o, l) {
        this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!l, this.__index__ = 0, this.__values__ = t;
      }
      b.templateSettings = {
        escape: Di,
        evaluate: Er,
        interpolate: Ts,
        variable: "",
        imports: {
          _: b
        }
      }, b.prototype = Js.prototype, b.prototype.constructor = b, _n.prototype = Hi(Js.prototype), _n.prototype.constructor = _n;
      function Se(o) {
        this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = rt, this.__views__ = [];
      }
      function Z0() {
        var o = new Se(this.__wrapped__);
        return o.__actions__ = Gt(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = Gt(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = Gt(this.__views__), o;
      }
      function Q0() {
        if (this.__filtered__) {
          var o = new Se(this);
          o.__dir__ = -1, o.__filtered__ = !0;
        } else
          o = this.clone(), o.__dir__ *= -1;
        return o;
      }
      function eb() {
        var o = this.__wrapped__.value(), l = this.__dir__, f = fe(o), m = l < 0, v = f ? o.length : 0, w = d1(0, v, this.__views__), S = w.start, C = w.end, A = C - S, L = m ? C : S - 1, B = this.__iteratees__, V = B.length, J = 0, te = At(A, this.__takeCount__);
        if (!f || !m && v == A && te == A)
          return Nd(o, this.__actions__);
        var ie = [];
        e:
          for (; A-- && J < te; ) {
            L += l;
            for (var he = -1, oe = o[L]; ++he < V; ) {
              var xe = B[he], Ce = xe.iteratee, dn = xe.type, $t = Ce(oe);
              if (dn == mt)
                oe = $t;
              else if (!$t) {
                if (dn == lt)
                  continue e;
                break e;
              }
            }
            ie[J++] = oe;
          }
        return ie;
      }
      Se.prototype = Hi(Js.prototype), Se.prototype.constructor = Se;
      function si(o) {
        var l = -1, f = o == null ? 0 : o.length;
        for (this.clear(); ++l < f; ) {
          var m = o[l];
          this.set(m[0], m[1]);
        }
      }
      function tb() {
        this.__data__ = Fo ? Fo(null) : {}, this.size = 0;
      }
      function nb(o) {
        var l = this.has(o) && delete this.__data__[o];
        return this.size -= l ? 1 : 0, l;
      }
      function rb(o) {
        var l = this.__data__;
        if (Fo) {
          var f = l[o];
          return f === u ? t : f;
        }
        return ze.call(l, o) ? l[o] : t;
      }
      function ib(o) {
        var l = this.__data__;
        return Fo ? l[o] !== t : ze.call(l, o);
      }
      function ob(o, l) {
        var f = this.__data__;
        return this.size += this.has(o) ? 0 : 1, f[o] = Fo && l === t ? u : l, this;
      }
      si.prototype.clear = tb, si.prototype.delete = nb, si.prototype.get = rb, si.prototype.has = ib, si.prototype.set = ob;
      function cr(o) {
        var l = -1, f = o == null ? 0 : o.length;
        for (this.clear(); ++l < f; ) {
          var m = o[l];
          this.set(m[0], m[1]);
        }
      }
      function sb() {
        this.__data__ = [], this.size = 0;
      }
      function ab(o) {
        var l = this.__data__, f = Gs(l, o);
        if (f < 0)
          return !1;
        var m = l.length - 1;
        return f == m ? l.pop() : Hs.call(l, f, 1), --this.size, !0;
      }
      function lb(o) {
        var l = this.__data__, f = Gs(l, o);
        return f < 0 ? t : l[f][1];
      }
      function cb(o) {
        return Gs(this.__data__, o) > -1;
      }
      function ub(o, l) {
        var f = this.__data__, m = Gs(f, o);
        return m < 0 ? (++this.size, f.push([o, l])) : f[m][1] = l, this;
      }
      cr.prototype.clear = sb, cr.prototype.delete = ab, cr.prototype.get = lb, cr.prototype.has = cb, cr.prototype.set = ub;
      function ur(o) {
        var l = -1, f = o == null ? 0 : o.length;
        for (this.clear(); ++l < f; ) {
          var m = o[l];
          this.set(m[0], m[1]);
        }
      }
      function fb() {
        this.size = 0, this.__data__ = {
          hash: new si(),
          map: new (Bo || cr)(),
          string: new si()
        };
      }
      function db(o) {
        var l = aa(this, o).delete(o);
        return this.size -= l ? 1 : 0, l;
      }
      function pb(o) {
        return aa(this, o).get(o);
      }
      function hb(o) {
        return aa(this, o).has(o);
      }
      function mb(o, l) {
        var f = aa(this, o), m = f.size;
        return f.set(o, l), this.size += f.size == m ? 0 : 1, this;
      }
      ur.prototype.clear = fb, ur.prototype.delete = db, ur.prototype.get = pb, ur.prototype.has = hb, ur.prototype.set = mb;
      function ai(o) {
        var l = -1, f = o == null ? 0 : o.length;
        for (this.__data__ = new ur(); ++l < f; )
          this.add(o[l]);
      }
      function gb(o) {
        return this.__data__.set(o, u), this;
      }
      function yb(o) {
        return this.__data__.has(o);
      }
      ai.prototype.add = ai.prototype.push = gb, ai.prototype.has = yb;
      function Ln(o) {
        var l = this.__data__ = new cr(o);
        this.size = l.size;
      }
      function vb() {
        this.__data__ = new cr(), this.size = 0;
      }
      function bb(o) {
        var l = this.__data__, f = l.delete(o);
        return this.size = l.size, f;
      }
      function wb(o) {
        return this.__data__.get(o);
      }
      function xb(o) {
        return this.__data__.has(o);
      }
      function _b(o, l) {
        var f = this.__data__;
        if (f instanceof cr) {
          var m = f.__data__;
          if (!Bo || m.length < i - 1)
            return m.push([o, l]), this.size = ++f.size, this;
          f = this.__data__ = new ur(m);
        }
        return f.set(o, l), this.size = f.size, this;
      }
      Ln.prototype.clear = vb, Ln.prototype.delete = bb, Ln.prototype.get = wb, Ln.prototype.has = xb, Ln.prototype.set = _b;
      function ld(o, l) {
        var f = fe(o), m = !f && di(o), v = !f && !m && Ir(o), w = !f && !m && !v && qi(o), S = f || m || v || w, C = S ? Ml(o.length, D0) : [], A = C.length;
        for (var L in o)
          (l || ze.call(o, L)) && !(S && (L == "length" || v && (L == "offset" || L == "parent") || w && (L == "buffer" || L == "byteLength" || L == "byteOffset") || hr(L, A))) && C.push(L);
        return C;
      }
      function cd(o) {
        var l = o.length;
        return l ? o[Kl(0, l - 1)] : t;
      }
      function Sb(o, l) {
        return la(Gt(o), li(l, 0, o.length));
      }
      function kb(o) {
        return la(Gt(o));
      }
      function Bl(o, l, f) {
        (f !== t && !Bn(o[l], f) || f === t && !(l in o)) && fr(o, l, f);
      }
      function zo(o, l, f) {
        var m = o[l];
        (!(ze.call(o, l) && Bn(m, f)) || f === t && !(l in o)) && fr(o, l, f);
      }
      function Gs(o, l) {
        for (var f = o.length; f--; )
          if (Bn(o[f][0], l))
            return f;
        return -1;
      }
      function Eb(o, l, f, m) {
        return Mr(o, function(v, w, S) {
          l(m, v, f(v), S);
        }), m;
      }
      function ud(o, l) {
        return o && Jn(l, yt(l), o);
      }
      function Cb(o, l) {
        return o && Jn(l, Xt(l), o);
      }
      function fr(o, l, f) {
        l == "__proto__" && Ws ? Ws(o, l, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : o[l] = f;
      }
      function $l(o, l) {
        for (var f = -1, m = l.length, v = N(m), w = o == null; ++f < m; )
          v[f] = w ? t : vc(o, l[f]);
        return v;
      }
      function li(o, l, f) {
        return o === o && (f !== t && (o = o <= f ? o : f), l !== t && (o = o >= l ? o : l)), o;
      }
      function Sn(o, l, f, m, v, w) {
        var S, C = l & h, A = l & g, L = l & y;
        if (f && (S = v ? f(o, m, v, w) : f(o)), S !== t)
          return S;
        if (!et(o))
          return o;
        var B = fe(o);
        if (B) {
          if (S = h1(o), !C)
            return Gt(o, S);
        } else {
          var V = Mt(o), J = V == ae || V == Pe;
          if (Ir(o))
            return Id(o, C);
          if (V == It || V == D || J && !v) {
            if (S = A || J ? {} : Qd(o), !C)
              return A ? r1(o, Cb(S, o)) : n1(o, ud(S, o));
          } else {
            if (!Ge[V])
              return v ? o : {};
            S = m1(o, V, C);
          }
        }
        w || (w = new Ln());
        var te = w.get(o);
        if (te)
          return te;
        w.set(o, S), Tp(o) ? o.forEach(function(oe) {
          S.add(Sn(oe, l, f, oe, o, w));
        }) : Cp(o) && o.forEach(function(oe, xe) {
          S.set(xe, Sn(oe, l, f, xe, o, w));
        });
        var ie = L ? A ? ic : rc : A ? Xt : yt, he = B ? t : ie(o);
        return wn(he || o, function(oe, xe) {
          he && (xe = oe, oe = o[xe]), zo(S, xe, Sn(oe, l, f, xe, o, w));
        }), S;
      }
      function Ob(o) {
        var l = yt(o);
        return function(f) {
          return fd(f, o, l);
        };
      }
      function fd(o, l, f) {
        var m = f.length;
        if (o == null)
          return !m;
        for (o = qe(o); m--; ) {
          var v = f[m], w = l[v], S = o[v];
          if (S === t && !(v in o) || !w(S))
            return !1;
        }
        return !0;
      }
      function dd(o, l, f) {
        if (typeof o != "function")
          throw new xn(a);
        return Jo(function() {
          o.apply(t, f);
        }, l);
      }
      function Ho(o, l, f, m) {
        var v = -1, w = Ds, S = !0, C = o.length, A = [], L = l.length;
        if (!C)
          return A;
        f && (l = Ze(l, cn(f))), m ? (w = kl, S = !1) : l.length >= i && (w = Po, S = !1, l = new ai(l));
        e:
          for (; ++v < C; ) {
            var B = o[v], V = f == null ? B : f(B);
            if (B = m || B !== 0 ? B : 0, S && V === V) {
              for (var J = L; J--; )
                if (l[J] === V)
                  continue e;
              A.push(B);
            } else
              w(l, V, m) || A.push(B);
          }
        return A;
      }
      var Mr = Fd(Kn), pd = Fd(Vl, !0);
      function Tb(o, l) {
        var f = !0;
        return Mr(o, function(m, v, w) {
          return f = !!l(m, v, w), f;
        }), f;
      }
      function Ys(o, l, f) {
        for (var m = -1, v = o.length; ++m < v; ) {
          var w = o[m], S = l(w);
          if (S != null && (C === t ? S === S && !fn(S) : f(S, C)))
            var C = S, A = w;
        }
        return A;
      }
      function Ab(o, l, f, m) {
        var v = o.length;
        for (f = pe(f), f < 0 && (f = -f > v ? 0 : v + f), m = m === t || m > v ? v : pe(m), m < 0 && (m += v), m = f > m ? 0 : Mp(m); f < m; )
          o[f++] = l;
        return o;
      }
      function hd(o, l) {
        var f = [];
        return Mr(o, function(m, v, w) {
          l(m, v, w) && f.push(m);
        }), f;
      }
      function St(o, l, f, m, v) {
        var w = -1, S = o.length;
        for (f || (f = y1), v || (v = []); ++w < S; ) {
          var C = o[w];
          l > 0 && f(C) ? l > 1 ? St(C, l - 1, f, m, v) : Or(v, C) : m || (v[v.length] = C);
        }
        return v;
      }
      var Fl = Vd(), md = Vd(!0);
      function Kn(o, l) {
        return o && Fl(o, l, yt);
      }
      function Vl(o, l) {
        return o && md(o, l, yt);
      }
      function Xs(o, l) {
        return Cr(l, function(f) {
          return mr(o[f]);
        });
      }
      function ci(o, l) {
        l = Dr(l, o);
        for (var f = 0, m = l.length; o != null && f < m; )
          o = o[Gn(l[f++])];
        return f && f == m ? o : t;
      }
      function gd(o, l, f) {
        var m = l(o);
        return fe(o) ? m : Or(m, f(o));
      }
      function Lt(o) {
        return o == null ? o === t ? ri : ti : oi && oi in qe(o) ? f1(o) : k1(o);
      }
      function zl(o, l) {
        return o > l;
      }
      function Mb(o, l) {
        return o != null && ze.call(o, l);
      }
      function Nb(o, l) {
        return o != null && l in qe(o);
      }
      function Db(o, l, f) {
        return o >= At(l, f) && o < ft(l, f);
      }
      function Hl(o, l, f) {
        for (var m = f ? kl : Ds, v = o[0].length, w = o.length, S = w, C = N(w), A = 1 / 0, L = []; S--; ) {
          var B = o[S];
          S && l && (B = Ze(B, cn(l))), A = At(B.length, A), C[S] = !f && (l || v >= 120 && B.length >= 120) ? new ai(S && B) : t;
        }
        B = o[0];
        var V = -1, J = C[0];
        e:
          for (; ++V < v && L.length < A; ) {
            var te = B[V], ie = l ? l(te) : te;
            if (te = f || te !== 0 ? te : 0, !(J ? Po(J, ie) : m(L, ie, f))) {
              for (S = w; --S; ) {
                var he = C[S];
                if (!(he ? Po(he, ie) : m(o[S], ie, f)))
                  continue e;
              }
              J && J.push(ie), L.push(te);
            }
          }
        return L;
      }
      function Rb(o, l, f, m) {
        return Kn(o, function(v, w, S) {
          l(m, f(v), w, S);
        }), m;
      }
      function Wo(o, l, f) {
        l = Dr(l, o), o = rp(o, l);
        var m = o == null ? o : o[Gn(En(l))];
        return m == null ? t : ln(m, o, f);
      }
      function yd(o) {
        return it(o) && Lt(o) == D;
      }
      function Ib(o) {
        return it(o) && Lt(o) == qn;
      }
      function Pb(o) {
        return it(o) && Lt(o) == ce;
      }
      function Uo(o, l, f, m, v) {
        return o === l ? !0 : o == null || l == null || !it(o) && !it(l) ? o !== o && l !== l : Lb(o, l, f, m, Uo, v);
      }
      function Lb(o, l, f, m, v, w) {
        var S = fe(o), C = fe(l), A = S ? j : Mt(o), L = C ? j : Mt(l);
        A = A == D ? It : A, L = L == D ? It : L;
        var B = A == It, V = L == It, J = A == L;
        if (J && Ir(o)) {
          if (!Ir(l))
            return !1;
          S = !0, B = !1;
        }
        if (J && !B)
          return w || (w = new Ln()), S || qi(o) ? Yd(o, l, f, m, v, w) : c1(o, l, A, f, m, v, w);
        if (!(f & x)) {
          var te = B && ze.call(o, "__wrapped__"), ie = V && ze.call(l, "__wrapped__");
          if (te || ie) {
            var he = te ? o.value() : o, oe = ie ? l.value() : l;
            return w || (w = new Ln()), v(he, oe, f, m, w);
          }
        }
        return J ? (w || (w = new Ln()), u1(o, l, f, m, v, w)) : !1;
      }
      function Bb(o) {
        return it(o) && Mt(o) == Xe;
      }
      function Wl(o, l, f, m) {
        var v = f.length, w = v, S = !m;
        if (o == null)
          return !w;
        for (o = qe(o); v--; ) {
          var C = f[v];
          if (S && C[2] ? C[1] !== o[C[0]] : !(C[0] in o))
            return !1;
        }
        for (; ++v < w; ) {
          C = f[v];
          var A = C[0], L = o[A], B = C[1];
          if (S && C[2]) {
            if (L === t && !(A in o))
              return !1;
          } else {
            var V = new Ln();
            if (m)
              var J = m(L, B, A, o, l, V);
            if (!(J === t ? Uo(B, L, x | _, m, V) : J))
              return !1;
          }
        }
        return !0;
      }
      function vd(o) {
        if (!et(o) || b1(o))
          return !1;
        var l = mr(o) ? B0 : Ov;
        return l.test(fi(o));
      }
      function $b(o) {
        return it(o) && Lt(o) == Pt;
      }
      function Fb(o) {
        return it(o) && Mt(o) == ct;
      }
      function Vb(o) {
        return it(o) && ha(o.length) && !!Ye[Lt(o)];
      }
      function bd(o) {
        return typeof o == "function" ? o : o == null ? Zt : typeof o == "object" ? fe(o) ? _d(o[0], o[1]) : xd(o) : zp(o);
      }
      function Ul(o) {
        if (!Ko(o))
          return W0(o);
        var l = [];
        for (var f in qe(o))
          ze.call(o, f) && f != "constructor" && l.push(f);
        return l;
      }
      function zb(o) {
        if (!et(o))
          return S1(o);
        var l = Ko(o), f = [];
        for (var m in o)
          m == "constructor" && (l || !ze.call(o, m)) || f.push(m);
        return f;
      }
      function jl(o, l) {
        return o < l;
      }
      function wd(o, l) {
        var f = -1, m = Yt(o) ? N(o.length) : [];
        return Mr(o, function(v, w, S) {
          m[++f] = l(v, w, S);
        }), m;
      }
      function xd(o) {
        var l = sc(o);
        return l.length == 1 && l[0][2] ? tp(l[0][0], l[0][1]) : function(f) {
          return f === o || Wl(f, o, l);
        };
      }
      function _d(o, l) {
        return lc(o) && ep(l) ? tp(Gn(o), l) : function(f) {
          var m = vc(f, o);
          return m === t && m === l ? bc(f, o) : Uo(l, m, x | _);
        };
      }
      function Zs(o, l, f, m, v) {
        o !== l && Fl(l, function(w, S) {
          if (v || (v = new Ln()), et(w))
            Hb(o, l, S, f, Zs, m, v);
          else {
            var C = m ? m(uc(o, S), w, S + "", o, l, v) : t;
            C === t && (C = w), Bl(o, S, C);
          }
        }, Xt);
      }
      function Hb(o, l, f, m, v, w, S) {
        var C = uc(o, f), A = uc(l, f), L = S.get(A);
        if (L) {
          Bl(o, f, L);
          return;
        }
        var B = w ? w(C, A, f + "", o, l, S) : t, V = B === t;
        if (V) {
          var J = fe(A), te = !J && Ir(A), ie = !J && !te && qi(A);
          B = A, J || te || ie ? fe(C) ? B = C : st(C) ? B = Gt(C) : te ? (V = !1, B = Id(A, !0)) : ie ? (V = !1, B = Pd(A, !0)) : B = [] : Go(A) || di(A) ? (B = C, di(C) ? B = Np(C) : (!et(C) || mr(C)) && (B = Qd(A))) : V = !1;
        }
        V && (S.set(A, B), v(B, A, m, w, S), S.delete(A)), Bl(o, f, B);
      }
      function Sd(o, l) {
        var f = o.length;
        if (!!f)
          return l += l < 0 ? f : 0, hr(l, f) ? o[l] : t;
      }
      function kd(o, l, f) {
        l.length ? l = Ze(l, function(w) {
          return fe(w) ? function(S) {
            return ci(S, w.length === 1 ? w[0] : w);
          } : w;
        }) : l = [Zt];
        var m = -1;
        l = Ze(l, cn(re()));
        var v = wd(o, function(w, S, C) {
          var A = Ze(l, function(L) {
            return L(w);
          });
          return { criteria: A, index: ++m, value: w };
        });
        return m0(v, function(w, S) {
          return t1(w, S, f);
        });
      }
      function Wb(o, l) {
        return Ed(o, l, function(f, m) {
          return bc(o, m);
        });
      }
      function Ed(o, l, f) {
        for (var m = -1, v = l.length, w = {}; ++m < v; ) {
          var S = l[m], C = ci(o, S);
          f(C, S) && jo(w, Dr(S, o), C);
        }
        return w;
      }
      function Ub(o) {
        return function(l) {
          return ci(l, o);
        };
      }
      function ql(o, l, f, m) {
        var v = m ? h0 : Pi, w = -1, S = l.length, C = o;
        for (o === l && (l = Gt(l)), f && (C = Ze(o, cn(f))); ++w < S; )
          for (var A = 0, L = l[w], B = f ? f(L) : L; (A = v(C, B, A, m)) > -1; )
            C !== o && Hs.call(C, A, 1), Hs.call(o, A, 1);
        return o;
      }
      function Cd(o, l) {
        for (var f = o ? l.length : 0, m = f - 1; f--; ) {
          var v = l[f];
          if (f == m || v !== w) {
            var w = v;
            hr(v) ? Hs.call(o, v, 1) : Yl(o, v);
          }
        }
        return o;
      }
      function Kl(o, l) {
        return o + js(sd() * (l - o + 1));
      }
      function jb(o, l, f, m) {
        for (var v = -1, w = ft(Us((l - o) / (f || 1)), 0), S = N(w); w--; )
          S[m ? w : ++v] = o, o += f;
        return S;
      }
      function Jl(o, l) {
        var f = "";
        if (!o || l < 1 || l > We)
          return f;
        do
          l % 2 && (f += o), l = js(l / 2), l && (o += o);
        while (l);
        return f;
      }
      function ye(o, l) {
        return fc(np(o, l, Zt), o + "");
      }
      function qb(o) {
        return cd(Ki(o));
      }
      function Kb(o, l) {
        var f = Ki(o);
        return la(f, li(l, 0, f.length));
      }
      function jo(o, l, f, m) {
        if (!et(o))
          return o;
        l = Dr(l, o);
        for (var v = -1, w = l.length, S = w - 1, C = o; C != null && ++v < w; ) {
          var A = Gn(l[v]), L = f;
          if (A === "__proto__" || A === "constructor" || A === "prototype")
            return o;
          if (v != S) {
            var B = C[A];
            L = m ? m(B, A, C) : t, L === t && (L = et(B) ? B : hr(l[v + 1]) ? [] : {});
          }
          zo(C, A, L), C = C[A];
        }
        return o;
      }
      var Od = qs ? function(o, l) {
        return qs.set(o, l), o;
      } : Zt, Jb = Ws ? function(o, l) {
        return Ws(o, "toString", {
          configurable: !0,
          enumerable: !1,
          value: xc(l),
          writable: !0
        });
      } : Zt;
      function Gb(o) {
        return la(Ki(o));
      }
      function kn(o, l, f) {
        var m = -1, v = o.length;
        l < 0 && (l = -l > v ? 0 : v + l), f = f > v ? v : f, f < 0 && (f += v), v = l > f ? 0 : f - l >>> 0, l >>>= 0;
        for (var w = N(v); ++m < v; )
          w[m] = o[m + l];
        return w;
      }
      function Yb(o, l) {
        var f;
        return Mr(o, function(m, v, w) {
          return f = l(m, v, w), !f;
        }), !!f;
      }
      function Qs(o, l, f) {
        var m = 0, v = o == null ? m : o.length;
        if (typeof l == "number" && l === l && v <= an) {
          for (; m < v; ) {
            var w = m + v >>> 1, S = o[w];
            S !== null && !fn(S) && (f ? S <= l : S < l) ? m = w + 1 : v = w;
          }
          return v;
        }
        return Gl(o, l, Zt, f);
      }
      function Gl(o, l, f, m) {
        var v = 0, w = o == null ? 0 : o.length;
        if (w === 0)
          return 0;
        l = f(l);
        for (var S = l !== l, C = l === null, A = fn(l), L = l === t; v < w; ) {
          var B = js((v + w) / 2), V = f(o[B]), J = V !== t, te = V === null, ie = V === V, he = fn(V);
          if (S)
            var oe = m || ie;
          else
            L ? oe = ie && (m || J) : C ? oe = ie && J && (m || !te) : A ? oe = ie && J && !te && (m || !he) : te || he ? oe = !1 : oe = m ? V <= l : V < l;
          oe ? v = B + 1 : w = B;
        }
        return At(w, Tt);
      }
      function Td(o, l) {
        for (var f = -1, m = o.length, v = 0, w = []; ++f < m; ) {
          var S = o[f], C = l ? l(S) : S;
          if (!f || !Bn(C, A)) {
            var A = C;
            w[v++] = S === 0 ? 0 : S;
          }
        }
        return w;
      }
      function Ad(o) {
        return typeof o == "number" ? o : fn(o) ? gt : +o;
      }
      function un(o) {
        if (typeof o == "string")
          return o;
        if (fe(o))
          return Ze(o, un) + "";
        if (fn(o))
          return ad ? ad.call(o) : "";
        var l = o + "";
        return l == "0" && 1 / o == -He ? "-0" : l;
      }
      function Nr(o, l, f) {
        var m = -1, v = Ds, w = o.length, S = !0, C = [], A = C;
        if (f)
          S = !1, v = kl;
        else if (w >= i) {
          var L = l ? null : a1(o);
          if (L)
            return Is(L);
          S = !1, v = Po, A = new ai();
        } else
          A = l ? [] : C;
        e:
          for (; ++m < w; ) {
            var B = o[m], V = l ? l(B) : B;
            if (B = f || B !== 0 ? B : 0, S && V === V) {
              for (var J = A.length; J--; )
                if (A[J] === V)
                  continue e;
              l && A.push(V), C.push(B);
            } else
              v(A, V, f) || (A !== C && A.push(V), C.push(B));
          }
        return C;
      }
      function Yl(o, l) {
        return l = Dr(l, o), o = rp(o, l), o == null || delete o[Gn(En(l))];
      }
      function Md(o, l, f, m) {
        return jo(o, l, f(ci(o, l)), m);
      }
      function ea(o, l, f, m) {
        for (var v = o.length, w = m ? v : -1; (m ? w-- : ++w < v) && l(o[w], w, o); )
          ;
        return f ? kn(o, m ? 0 : w, m ? w + 1 : v) : kn(o, m ? w + 1 : 0, m ? v : w);
      }
      function Nd(o, l) {
        var f = o;
        return f instanceof Se && (f = f.value()), El(l, function(m, v) {
          return v.func.apply(v.thisArg, Or([m], v.args));
        }, f);
      }
      function Xl(o, l, f) {
        var m = o.length;
        if (m < 2)
          return m ? Nr(o[0]) : [];
        for (var v = -1, w = N(m); ++v < m; )
          for (var S = o[v], C = -1; ++C < m; )
            C != v && (w[v] = Ho(w[v] || S, o[C], l, f));
        return Nr(St(w, 1), l, f);
      }
      function Dd(o, l, f) {
        for (var m = -1, v = o.length, w = l.length, S = {}; ++m < v; ) {
          var C = m < w ? l[m] : t;
          f(S, o[m], C);
        }
        return S;
      }
      function Zl(o) {
        return st(o) ? o : [];
      }
      function Ql(o) {
        return typeof o == "function" ? o : Zt;
      }
      function Dr(o, l) {
        return fe(o) ? o : lc(o, l) ? [o] : ap(Fe(o));
      }
      var Xb = ye;
      function Rr(o, l, f) {
        var m = o.length;
        return f = f === t ? m : f, !l && f >= m ? o : kn(o, l, f);
      }
      var Rd = $0 || function(o) {
        return _t.clearTimeout(o);
      };
      function Id(o, l) {
        if (l)
          return o.slice();
        var f = o.length, m = td ? td(f) : new o.constructor(f);
        return o.copy(m), m;
      }
      function ec(o) {
        var l = new o.constructor(o.byteLength);
        return new Vs(l).set(new Vs(o)), l;
      }
      function Zb(o, l) {
        var f = l ? ec(o.buffer) : o.buffer;
        return new o.constructor(f, o.byteOffset, o.byteLength);
      }
      function Qb(o) {
        var l = new o.constructor(o.source, yf.exec(o));
        return l.lastIndex = o.lastIndex, l;
      }
      function e1(o) {
        return Vo ? qe(Vo.call(o)) : {};
      }
      function Pd(o, l) {
        var f = l ? ec(o.buffer) : o.buffer;
        return new o.constructor(f, o.byteOffset, o.length);
      }
      function Ld(o, l) {
        if (o !== l) {
          var f = o !== t, m = o === null, v = o === o, w = fn(o), S = l !== t, C = l === null, A = l === l, L = fn(l);
          if (!C && !L && !w && o > l || w && S && A && !C && !L || m && S && A || !f && A || !v)
            return 1;
          if (!m && !w && !L && o < l || L && f && v && !m && !w || C && f && v || !S && v || !A)
            return -1;
        }
        return 0;
      }
      function t1(o, l, f) {
        for (var m = -1, v = o.criteria, w = l.criteria, S = v.length, C = f.length; ++m < S; ) {
          var A = Ld(v[m], w[m]);
          if (A) {
            if (m >= C)
              return A;
            var L = f[m];
            return A * (L == "desc" ? -1 : 1);
          }
        }
        return o.index - l.index;
      }
      function Bd(o, l, f, m) {
        for (var v = -1, w = o.length, S = f.length, C = -1, A = l.length, L = ft(w - S, 0), B = N(A + L), V = !m; ++C < A; )
          B[C] = l[C];
        for (; ++v < S; )
          (V || v < w) && (B[f[v]] = o[v]);
        for (; L--; )
          B[C++] = o[v++];
        return B;
      }
      function $d(o, l, f, m) {
        for (var v = -1, w = o.length, S = -1, C = f.length, A = -1, L = l.length, B = ft(w - C, 0), V = N(B + L), J = !m; ++v < B; )
          V[v] = o[v];
        for (var te = v; ++A < L; )
          V[te + A] = l[A];
        for (; ++S < C; )
          (J || v < w) && (V[te + f[S]] = o[v++]);
        return V;
      }
      function Gt(o, l) {
        var f = -1, m = o.length;
        for (l || (l = N(m)); ++f < m; )
          l[f] = o[f];
        return l;
      }
      function Jn(o, l, f, m) {
        var v = !f;
        f || (f = {});
        for (var w = -1, S = l.length; ++w < S; ) {
          var C = l[w], A = m ? m(f[C], o[C], C, f, o) : t;
          A === t && (A = o[C]), v ? fr(f, C, A) : zo(f, C, A);
        }
        return f;
      }
      function n1(o, l) {
        return Jn(o, ac(o), l);
      }
      function r1(o, l) {
        return Jn(o, Xd(o), l);
      }
      function ta(o, l) {
        return function(f, m) {
          var v = fe(f) ? l0 : Eb, w = l ? l() : {};
          return v(f, o, re(m, 2), w);
        };
      }
      function Wi(o) {
        return ye(function(l, f) {
          var m = -1, v = f.length, w = v > 1 ? f[v - 1] : t, S = v > 2 ? f[2] : t;
          for (w = o.length > 3 && typeof w == "function" ? (v--, w) : t, S && Bt(f[0], f[1], S) && (w = v < 3 ? t : w, v = 1), l = qe(l); ++m < v; ) {
            var C = f[m];
            C && o(l, C, m, w);
          }
          return l;
        });
      }
      function Fd(o, l) {
        return function(f, m) {
          if (f == null)
            return f;
          if (!Yt(f))
            return o(f, m);
          for (var v = f.length, w = l ? v : -1, S = qe(f); (l ? w-- : ++w < v) && m(S[w], w, S) !== !1; )
            ;
          return f;
        };
      }
      function Vd(o) {
        return function(l, f, m) {
          for (var v = -1, w = qe(l), S = m(l), C = S.length; C--; ) {
            var A = S[o ? C : ++v];
            if (f(w[A], A, w) === !1)
              break;
          }
          return l;
        };
      }
      function i1(o, l, f) {
        var m = l & O, v = qo(o);
        function w() {
          var S = this && this !== _t && this instanceof w ? v : o;
          return S.apply(m ? f : this, arguments);
        }
        return w;
      }
      function zd(o) {
        return function(l) {
          l = Fe(l);
          var f = Li(l) ? Pn(l) : t, m = f ? f[0] : l.charAt(0), v = f ? Rr(f, 1).join("") : l.slice(1);
          return m[o]() + v;
        };
      }
      function Ui(o) {
        return function(l) {
          return El(Fp($p(l).replace(Jv, "")), o, "");
        };
      }
      function qo(o) {
        return function() {
          var l = arguments;
          switch (l.length) {
            case 0:
              return new o();
            case 1:
              return new o(l[0]);
            case 2:
              return new o(l[0], l[1]);
            case 3:
              return new o(l[0], l[1], l[2]);
            case 4:
              return new o(l[0], l[1], l[2], l[3]);
            case 5:
              return new o(l[0], l[1], l[2], l[3], l[4]);
            case 6:
              return new o(l[0], l[1], l[2], l[3], l[4], l[5]);
            case 7:
              return new o(l[0], l[1], l[2], l[3], l[4], l[5], l[6]);
          }
          var f = Hi(o.prototype), m = o.apply(f, l);
          return et(m) ? m : f;
        };
      }
      function o1(o, l, f) {
        var m = qo(o);
        function v() {
          for (var w = arguments.length, S = N(w), C = w, A = ji(v); C--; )
            S[C] = arguments[C];
          var L = w < 3 && S[0] !== A && S[w - 1] !== A ? [] : Tr(S, A);
          if (w -= L.length, w < f)
            return qd(
              o,
              l,
              na,
              v.placeholder,
              t,
              S,
              L,
              t,
              t,
              f - w
            );
          var B = this && this !== _t && this instanceof v ? m : o;
          return ln(B, this, S);
        }
        return v;
      }
      function Hd(o) {
        return function(l, f, m) {
          var v = qe(l);
          if (!Yt(l)) {
            var w = re(f, 3);
            l = yt(l), f = function(C) {
              return w(v[C], C, v);
            };
          }
          var S = o(l, f, m);
          return S > -1 ? v[w ? l[S] : S] : t;
        };
      }
      function Wd(o) {
        return pr(function(l) {
          var f = l.length, m = f, v = _n.prototype.thru;
          for (o && l.reverse(); m--; ) {
            var w = l[m];
            if (typeof w != "function")
              throw new xn(a);
            if (v && !S && sa(w) == "wrapper")
              var S = new _n([], !0);
          }
          for (m = S ? m : f; ++m < f; ) {
            w = l[m];
            var C = sa(w), A = C == "wrapper" ? oc(w) : t;
            A && cc(A[0]) && A[1] == (Z | W | U | K) && !A[4].length && A[9] == 1 ? S = S[sa(A[0])].apply(S, A[3]) : S = w.length == 1 && cc(w) ? S[C]() : S.thru(w);
          }
          return function() {
            var L = arguments, B = L[0];
            if (S && L.length == 1 && fe(B))
              return S.plant(B).value();
            for (var V = 0, J = f ? l[V].apply(this, L) : B; ++V < f; )
              J = l[V].call(this, J);
            return J;
          };
        });
      }
      function na(o, l, f, m, v, w, S, C, A, L) {
        var B = l & Z, V = l & O, J = l & M, te = l & (W | E), ie = l & we, he = J ? t : qo(o);
        function oe() {
          for (var xe = arguments.length, Ce = N(xe), dn = xe; dn--; )
            Ce[dn] = arguments[dn];
          if (te)
            var $t = ji(oe), pn = y0(Ce, $t);
          if (m && (Ce = Bd(Ce, m, v, te)), w && (Ce = $d(Ce, w, S, te)), xe -= pn, te && xe < L) {
            var at = Tr(Ce, $t);
            return qd(
              o,
              l,
              na,
              oe.placeholder,
              f,
              Ce,
              at,
              C,
              A,
              L - xe
            );
          }
          var $n = V ? f : this, yr = J ? $n[o] : o;
          return xe = Ce.length, C ? Ce = E1(Ce, C) : ie && xe > 1 && Ce.reverse(), B && A < xe && (Ce.length = A), this && this !== _t && this instanceof oe && (yr = he || qo(yr)), yr.apply($n, Ce);
        }
        return oe;
      }
      function Ud(o, l) {
        return function(f, m) {
          return Rb(f, o, l(m), {});
        };
      }
      function ra(o, l) {
        return function(f, m) {
          var v;
          if (f === t && m === t)
            return l;
          if (f !== t && (v = f), m !== t) {
            if (v === t)
              return m;
            typeof f == "string" || typeof m == "string" ? (f = un(f), m = un(m)) : (f = Ad(f), m = Ad(m)), v = o(f, m);
          }
          return v;
        };
      }
      function tc(o) {
        return pr(function(l) {
          return l = Ze(l, cn(re())), ye(function(f) {
            var m = this;
            return o(l, function(v) {
              return ln(v, m, f);
            });
          });
        });
      }
      function ia(o, l) {
        l = l === t ? " " : un(l);
        var f = l.length;
        if (f < 2)
          return f ? Jl(l, o) : l;
        var m = Jl(l, Us(o / Bi(l)));
        return Li(l) ? Rr(Pn(m), 0, o).join("") : m.slice(0, o);
      }
      function s1(o, l, f, m) {
        var v = l & O, w = qo(o);
        function S() {
          for (var C = -1, A = arguments.length, L = -1, B = m.length, V = N(B + A), J = this && this !== _t && this instanceof S ? w : o; ++L < B; )
            V[L] = m[L];
          for (; A--; )
            V[L++] = arguments[++C];
          return ln(J, v ? f : this, V);
        }
        return S;
      }
      function jd(o) {
        return function(l, f, m) {
          return m && typeof m != "number" && Bt(l, f, m) && (f = m = t), l = gr(l), f === t ? (f = l, l = 0) : f = gr(f), m = m === t ? l < f ? 1 : -1 : gr(m), jb(l, f, m, o);
        };
      }
      function oa(o) {
        return function(l, f) {
          return typeof l == "string" && typeof f == "string" || (l = Cn(l), f = Cn(f)), o(l, f);
        };
      }
      function qd(o, l, f, m, v, w, S, C, A, L) {
        var B = l & W, V = B ? S : t, J = B ? t : S, te = B ? w : t, ie = B ? t : w;
        l |= B ? U : $, l &= ~(B ? $ : U), l & I || (l &= ~(O | M));
        var he = [
          o,
          l,
          v,
          te,
          V,
          ie,
          J,
          C,
          A,
          L
        ], oe = f.apply(t, he);
        return cc(o) && ip(oe, he), oe.placeholder = m, op(oe, o, l);
      }
      function nc(o) {
        var l = ut[o];
        return function(f, m) {
          if (f = Cn(f), m = m == null ? 0 : At(pe(m), 292), m && od(f)) {
            var v = (Fe(f) + "e").split("e"), w = l(v[0] + "e" + (+v[1] + m));
            return v = (Fe(w) + "e").split("e"), +(v[0] + "e" + (+v[1] - m));
          }
          return l(f);
        };
      }
      var a1 = Vi && 1 / Is(new Vi([, -0]))[1] == He ? function(o) {
        return new Vi(o);
      } : kc;
      function Kd(o) {
        return function(l) {
          var f = Mt(l);
          return f == Xe ? Dl(l) : f == ct ? k0(l) : g0(l, o(l));
        };
      }
      function dr(o, l, f, m, v, w, S, C) {
        var A = l & M;
        if (!A && typeof o != "function")
          throw new xn(a);
        var L = m ? m.length : 0;
        if (L || (l &= ~(U | $), m = v = t), S = S === t ? S : ft(pe(S), 0), C = C === t ? C : pe(C), L -= v ? v.length : 0, l & $) {
          var B = m, V = v;
          m = v = t;
        }
        var J = A ? t : oc(o), te = [
          o,
          l,
          f,
          m,
          v,
          B,
          V,
          w,
          S,
          C
        ];
        if (J && _1(te, J), o = te[0], l = te[1], f = te[2], m = te[3], v = te[4], C = te[9] = te[9] === t ? A ? 0 : o.length : ft(te[9] - L, 0), !C && l & (W | E) && (l &= ~(W | E)), !l || l == O)
          var ie = i1(o, l, f);
        else
          l == W || l == E ? ie = o1(o, l, C) : (l == U || l == (O | U)) && !v.length ? ie = s1(o, l, f, m) : ie = na.apply(t, te);
        var he = J ? Od : ip;
        return op(he(ie, te), o, l);
      }
      function Jd(o, l, f, m) {
        return o === t || Bn(o, Fi[f]) && !ze.call(m, f) ? l : o;
      }
      function Gd(o, l, f, m, v, w) {
        return et(o) && et(l) && (w.set(l, o), Zs(o, l, t, Gd, w), w.delete(l)), o;
      }
      function l1(o) {
        return Go(o) ? t : o;
      }
      function Yd(o, l, f, m, v, w) {
        var S = f & x, C = o.length, A = l.length;
        if (C != A && !(S && A > C))
          return !1;
        var L = w.get(o), B = w.get(l);
        if (L && B)
          return L == l && B == o;
        var V = -1, J = !0, te = f & _ ? new ai() : t;
        for (w.set(o, l), w.set(l, o); ++V < C; ) {
          var ie = o[V], he = l[V];
          if (m)
            var oe = S ? m(he, ie, V, l, o, w) : m(ie, he, V, o, l, w);
          if (oe !== t) {
            if (oe)
              continue;
            J = !1;
            break;
          }
          if (te) {
            if (!Cl(l, function(xe, Ce) {
              if (!Po(te, Ce) && (ie === xe || v(ie, xe, f, m, w)))
                return te.push(Ce);
            })) {
              J = !1;
              break;
            }
          } else if (!(ie === he || v(ie, he, f, m, w))) {
            J = !1;
            break;
          }
        }
        return w.delete(o), w.delete(l), J;
      }
      function c1(o, l, f, m, v, w, S) {
        switch (f) {
          case In:
            if (o.byteLength != l.byteLength || o.byteOffset != l.byteOffset)
              return !1;
            o = o.buffer, l = l.buffer;
          case qn:
            return !(o.byteLength != l.byteLength || !w(new Vs(o), new Vs(l)));
          case G:
          case ce:
          case Je:
            return Bn(+o, +l);
          case se:
            return o.name == l.name && o.message == l.message;
          case Pt:
          case Rn:
            return o == l + "";
          case Xe:
            var C = Dl;
          case ct:
            var A = m & x;
            if (C || (C = Is), o.size != l.size && !A)
              return !1;
            var L = S.get(o);
            if (L)
              return L == l;
            m |= _, S.set(o, l);
            var B = Yd(C(o), C(l), m, v, w, S);
            return S.delete(o), B;
          case vn:
            if (Vo)
              return Vo.call(o) == Vo.call(l);
        }
        return !1;
      }
      function u1(o, l, f, m, v, w) {
        var S = f & x, C = rc(o), A = C.length, L = rc(l), B = L.length;
        if (A != B && !S)
          return !1;
        for (var V = A; V--; ) {
          var J = C[V];
          if (!(S ? J in l : ze.call(l, J)))
            return !1;
        }
        var te = w.get(o), ie = w.get(l);
        if (te && ie)
          return te == l && ie == o;
        var he = !0;
        w.set(o, l), w.set(l, o);
        for (var oe = S; ++V < A; ) {
          J = C[V];
          var xe = o[J], Ce = l[J];
          if (m)
            var dn = S ? m(Ce, xe, J, l, o, w) : m(xe, Ce, J, o, l, w);
          if (!(dn === t ? xe === Ce || v(xe, Ce, f, m, w) : dn)) {
            he = !1;
            break;
          }
          oe || (oe = J == "constructor");
        }
        if (he && !oe) {
          var $t = o.constructor, pn = l.constructor;
          $t != pn && "constructor" in o && "constructor" in l && !(typeof $t == "function" && $t instanceof $t && typeof pn == "function" && pn instanceof pn) && (he = !1);
        }
        return w.delete(o), w.delete(l), he;
      }
      function pr(o) {
        return fc(np(o, t, fp), o + "");
      }
      function rc(o) {
        return gd(o, yt, ac);
      }
      function ic(o) {
        return gd(o, Xt, Xd);
      }
      var oc = qs ? function(o) {
        return qs.get(o);
      } : kc;
      function sa(o) {
        for (var l = o.name + "", f = zi[l], m = ze.call(zi, l) ? f.length : 0; m--; ) {
          var v = f[m], w = v.func;
          if (w == null || w == o)
            return v.name;
        }
        return l;
      }
      function ji(o) {
        var l = ze.call(b, "placeholder") ? b : o;
        return l.placeholder;
      }
      function re() {
        var o = b.iteratee || _c;
        return o = o === _c ? bd : o, arguments.length ? o(arguments[0], arguments[1]) : o;
      }
      function aa(o, l) {
        var f = o.__data__;
        return v1(l) ? f[typeof l == "string" ? "string" : "hash"] : f.map;
      }
      function sc(o) {
        for (var l = yt(o), f = l.length; f--; ) {
          var m = l[f], v = o[m];
          l[f] = [m, v, ep(v)];
        }
        return l;
      }
      function ui(o, l) {
        var f = x0(o, l);
        return vd(f) ? f : t;
      }
      function f1(o) {
        var l = ze.call(o, oi), f = o[oi];
        try {
          o[oi] = t;
          var m = !0;
        } catch {
        }
        var v = $s.call(o);
        return m && (l ? o[oi] = f : delete o[oi]), v;
      }
      var ac = Il ? function(o) {
        return o == null ? [] : (o = qe(o), Cr(Il(o), function(l) {
          return rd.call(o, l);
        }));
      } : Ec, Xd = Il ? function(o) {
        for (var l = []; o; )
          Or(l, ac(o)), o = zs(o);
        return l;
      } : Ec, Mt = Lt;
      (Pl && Mt(new Pl(new ArrayBuffer(1))) != In || Bo && Mt(new Bo()) != Xe || Ll && Mt(Ll.resolve()) != ni || Vi && Mt(new Vi()) != ct || $o && Mt(new $o()) != jn) && (Mt = function(o) {
        var l = Lt(o), f = l == It ? o.constructor : t, m = f ? fi(f) : "";
        if (m)
          switch (m) {
            case K0:
              return In;
            case J0:
              return Xe;
            case G0:
              return ni;
            case Y0:
              return ct;
            case X0:
              return jn;
          }
        return l;
      });
      function d1(o, l, f) {
        for (var m = -1, v = f.length; ++m < v; ) {
          var w = f[m], S = w.size;
          switch (w.type) {
            case "drop":
              o += S;
              break;
            case "dropRight":
              l -= S;
              break;
            case "take":
              l = At(l, o + S);
              break;
            case "takeRight":
              o = ft(o, l - S);
              break;
          }
        }
        return { start: o, end: l };
      }
      function p1(o) {
        var l = o.match(bv);
        return l ? l[1].split(wv) : [];
      }
      function Zd(o, l, f) {
        l = Dr(l, o);
        for (var m = -1, v = l.length, w = !1; ++m < v; ) {
          var S = Gn(l[m]);
          if (!(w = o != null && f(o, S)))
            break;
          o = o[S];
        }
        return w || ++m != v ? w : (v = o == null ? 0 : o.length, !!v && ha(v) && hr(S, v) && (fe(o) || di(o)));
      }
      function h1(o) {
        var l = o.length, f = new o.constructor(l);
        return l && typeof o[0] == "string" && ze.call(o, "index") && (f.index = o.index, f.input = o.input), f;
      }
      function Qd(o) {
        return typeof o.constructor == "function" && !Ko(o) ? Hi(zs(o)) : {};
      }
      function m1(o, l, f) {
        var m = o.constructor;
        switch (l) {
          case qn:
            return ec(o);
          case G:
          case ce:
            return new m(+o);
          case In:
            return Zb(o, f);
          case Oo:
          case To:
          case Ao:
          case Mo:
          case No:
          case R:
          case Q:
          case ne:
          case Me:
            return Pd(o, f);
          case Xe:
            return new m();
          case Je:
          case Rn:
            return new m(o);
          case Pt:
            return Qb(o);
          case ct:
            return new m();
          case vn:
            return e1(o);
        }
      }
      function g1(o, l) {
        var f = l.length;
        if (!f)
          return o;
        var m = f - 1;
        return l[m] = (f > 1 ? "& " : "") + l[m], l = l.join(f > 2 ? ", " : " "), o.replace(vv, `{
/* [wrapped with ` + l + `] */
`);
      }
      function y1(o) {
        return fe(o) || di(o) || !!(id && o && o[id]);
      }
      function hr(o, l) {
        var f = typeof o;
        return l = l == null ? We : l, !!l && (f == "number" || f != "symbol" && Av.test(o)) && o > -1 && o % 1 == 0 && o < l;
      }
      function Bt(o, l, f) {
        if (!et(f))
          return !1;
        var m = typeof l;
        return (m == "number" ? Yt(f) && hr(l, f.length) : m == "string" && l in f) ? Bn(f[l], o) : !1;
      }
      function lc(o, l) {
        if (fe(o))
          return !1;
        var f = typeof o;
        return f == "number" || f == "symbol" || f == "boolean" || o == null || fn(o) ? !0 : Ri.test(o) || !Io.test(o) || l != null && o in qe(l);
      }
      function v1(o) {
        var l = typeof o;
        return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? o !== "__proto__" : o === null;
      }
      function cc(o) {
        var l = sa(o), f = b[l];
        if (typeof f != "function" || !(l in Se.prototype))
          return !1;
        if (o === f)
          return !0;
        var m = oc(f);
        return !!m && o === m[0];
      }
      function b1(o) {
        return !!ed && ed in o;
      }
      var w1 = Ls ? mr : Cc;
      function Ko(o) {
        var l = o && o.constructor, f = typeof l == "function" && l.prototype || Fi;
        return o === f;
      }
      function ep(o) {
        return o === o && !et(o);
      }
      function tp(o, l) {
        return function(f) {
          return f == null ? !1 : f[o] === l && (l !== t || o in qe(f));
        };
      }
      function x1(o) {
        var l = da(o, function(m) {
          return f.size === p && f.clear(), m;
        }), f = l.cache;
        return l;
      }
      function _1(o, l) {
        var f = o[1], m = l[1], v = f | m, w = v < (O | M | Z), S = m == Z && f == W || m == Z && f == K && o[7].length <= l[8] || m == (Z | K) && l[7].length <= l[8] && f == W;
        if (!(w || S))
          return o;
        m & O && (o[2] = l[2], v |= f & O ? 0 : I);
        var C = l[3];
        if (C) {
          var A = o[3];
          o[3] = A ? Bd(A, C, l[4]) : C, o[4] = A ? Tr(o[3], d) : l[4];
        }
        return C = l[5], C && (A = o[5], o[5] = A ? $d(A, C, l[6]) : C, o[6] = A ? Tr(o[5], d) : l[6]), C = l[7], C && (o[7] = C), m & Z && (o[8] = o[8] == null ? l[8] : At(o[8], l[8])), o[9] == null && (o[9] = l[9]), o[0] = l[0], o[1] = v, o;
      }
      function S1(o) {
        var l = [];
        if (o != null)
          for (var f in qe(o))
            l.push(f);
        return l;
      }
      function k1(o) {
        return $s.call(o);
      }
      function np(o, l, f) {
        return l = ft(l === t ? o.length - 1 : l, 0), function() {
          for (var m = arguments, v = -1, w = ft(m.length - l, 0), S = N(w); ++v < w; )
            S[v] = m[l + v];
          v = -1;
          for (var C = N(l + 1); ++v < l; )
            C[v] = m[v];
          return C[l] = f(S), ln(o, this, C);
        };
      }
      function rp(o, l) {
        return l.length < 2 ? o : ci(o, kn(l, 0, -1));
      }
      function E1(o, l) {
        for (var f = o.length, m = At(l.length, f), v = Gt(o); m--; ) {
          var w = l[m];
          o[m] = hr(w, f) ? v[w] : t;
        }
        return o;
      }
      function uc(o, l) {
        if (!(l === "constructor" && typeof o[l] == "function") && l != "__proto__")
          return o[l];
      }
      var ip = sp(Od), Jo = V0 || function(o, l) {
        return _t.setTimeout(o, l);
      }, fc = sp(Jb);
      function op(o, l, f) {
        var m = l + "";
        return fc(o, g1(m, C1(p1(m), f)));
      }
      function sp(o) {
        var l = 0, f = 0;
        return function() {
          var m = U0(), v = je - (m - f);
          if (f = m, v > 0) {
            if (++l >= Te)
              return arguments[0];
          } else
            l = 0;
          return o.apply(t, arguments);
        };
      }
      function la(o, l) {
        var f = -1, m = o.length, v = m - 1;
        for (l = l === t ? m : l; ++f < l; ) {
          var w = Kl(f, v), S = o[w];
          o[w] = o[f], o[f] = S;
        }
        return o.length = l, o;
      }
      var ap = x1(function(o) {
        var l = [];
        return o.charCodeAt(0) === 46 && l.push(""), o.replace(mv, function(f, m, v, w) {
          l.push(v ? w.replace(Sv, "$1") : m || f);
        }), l;
      });
      function Gn(o) {
        if (typeof o == "string" || fn(o))
          return o;
        var l = o + "";
        return l == "0" && 1 / o == -He ? "-0" : l;
      }
      function fi(o) {
        if (o != null) {
          try {
            return Bs.call(o);
          } catch {
          }
          try {
            return o + "";
          } catch {
          }
        }
        return "";
      }
      function C1(o, l) {
        return wn(Kt, function(f) {
          var m = "_." + f[0];
          l & f[1] && !Ds(o, m) && o.push(m);
        }), o.sort();
      }
      function lp(o) {
        if (o instanceof Se)
          return o.clone();
        var l = new _n(o.__wrapped__, o.__chain__);
        return l.__actions__ = Gt(o.__actions__), l.__index__ = o.__index__, l.__values__ = o.__values__, l;
      }
      function O1(o, l, f) {
        (f ? Bt(o, l, f) : l === t) ? l = 1 : l = ft(pe(l), 0);
        var m = o == null ? 0 : o.length;
        if (!m || l < 1)
          return [];
        for (var v = 0, w = 0, S = N(Us(m / l)); v < m; )
          S[w++] = kn(o, v, v += l);
        return S;
      }
      function T1(o) {
        for (var l = -1, f = o == null ? 0 : o.length, m = 0, v = []; ++l < f; ) {
          var w = o[l];
          w && (v[m++] = w);
        }
        return v;
      }
      function A1() {
        var o = arguments.length;
        if (!o)
          return [];
        for (var l = N(o - 1), f = arguments[0], m = o; m--; )
          l[m - 1] = arguments[m];
        return Or(fe(f) ? Gt(f) : [f], St(l, 1));
      }
      var M1 = ye(function(o, l) {
        return st(o) ? Ho(o, St(l, 1, st, !0)) : [];
      }), N1 = ye(function(o, l) {
        var f = En(l);
        return st(f) && (f = t), st(o) ? Ho(o, St(l, 1, st, !0), re(f, 2)) : [];
      }), D1 = ye(function(o, l) {
        var f = En(l);
        return st(f) && (f = t), st(o) ? Ho(o, St(l, 1, st, !0), t, f) : [];
      });
      function R1(o, l, f) {
        var m = o == null ? 0 : o.length;
        return m ? (l = f || l === t ? 1 : pe(l), kn(o, l < 0 ? 0 : l, m)) : [];
      }
      function I1(o, l, f) {
        var m = o == null ? 0 : o.length;
        return m ? (l = f || l === t ? 1 : pe(l), l = m - l, kn(o, 0, l < 0 ? 0 : l)) : [];
      }
      function P1(o, l) {
        return o && o.length ? ea(o, re(l, 3), !0, !0) : [];
      }
      function L1(o, l) {
        return o && o.length ? ea(o, re(l, 3), !0) : [];
      }
      function B1(o, l, f, m) {
        var v = o == null ? 0 : o.length;
        return v ? (f && typeof f != "number" && Bt(o, l, f) && (f = 0, m = v), Ab(o, l, f, m)) : [];
      }
      function cp(o, l, f) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var v = f == null ? 0 : pe(f);
        return v < 0 && (v = ft(m + v, 0)), Rs(o, re(l, 3), v);
      }
      function up(o, l, f) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var v = m - 1;
        return f !== t && (v = pe(f), v = f < 0 ? ft(m + v, 0) : At(v, m - 1)), Rs(o, re(l, 3), v, !0);
      }
      function fp(o) {
        var l = o == null ? 0 : o.length;
        return l ? St(o, 1) : [];
      }
      function $1(o) {
        var l = o == null ? 0 : o.length;
        return l ? St(o, He) : [];
      }
      function F1(o, l) {
        var f = o == null ? 0 : o.length;
        return f ? (l = l === t ? 1 : pe(l), St(o, l)) : [];
      }
      function V1(o) {
        for (var l = -1, f = o == null ? 0 : o.length, m = {}; ++l < f; ) {
          var v = o[l];
          m[v[0]] = v[1];
        }
        return m;
      }
      function dp(o) {
        return o && o.length ? o[0] : t;
      }
      function z1(o, l, f) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var v = f == null ? 0 : pe(f);
        return v < 0 && (v = ft(m + v, 0)), Pi(o, l, v);
      }
      function H1(o) {
        var l = o == null ? 0 : o.length;
        return l ? kn(o, 0, -1) : [];
      }
      var W1 = ye(function(o) {
        var l = Ze(o, Zl);
        return l.length && l[0] === o[0] ? Hl(l) : [];
      }), U1 = ye(function(o) {
        var l = En(o), f = Ze(o, Zl);
        return l === En(f) ? l = t : f.pop(), f.length && f[0] === o[0] ? Hl(f, re(l, 2)) : [];
      }), j1 = ye(function(o) {
        var l = En(o), f = Ze(o, Zl);
        return l = typeof l == "function" ? l : t, l && f.pop(), f.length && f[0] === o[0] ? Hl(f, t, l) : [];
      });
      function q1(o, l) {
        return o == null ? "" : H0.call(o, l);
      }
      function En(o) {
        var l = o == null ? 0 : o.length;
        return l ? o[l - 1] : t;
      }
      function K1(o, l, f) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var v = m;
        return f !== t && (v = pe(f), v = v < 0 ? ft(m + v, 0) : At(v, m - 1)), l === l ? C0(o, l, v) : Rs(o, qf, v, !0);
      }
      function J1(o, l) {
        return o && o.length ? Sd(o, pe(l)) : t;
      }
      var G1 = ye(pp);
      function pp(o, l) {
        return o && o.length && l && l.length ? ql(o, l) : o;
      }
      function Y1(o, l, f) {
        return o && o.length && l && l.length ? ql(o, l, re(f, 2)) : o;
      }
      function X1(o, l, f) {
        return o && o.length && l && l.length ? ql(o, l, t, f) : o;
      }
      var Z1 = pr(function(o, l) {
        var f = o == null ? 0 : o.length, m = $l(o, l);
        return Cd(o, Ze(l, function(v) {
          return hr(v, f) ? +v : v;
        }).sort(Ld)), m;
      });
      function Q1(o, l) {
        var f = [];
        if (!(o && o.length))
          return f;
        var m = -1, v = [], w = o.length;
        for (l = re(l, 3); ++m < w; ) {
          var S = o[m];
          l(S, m, o) && (f.push(S), v.push(m));
        }
        return Cd(o, v), f;
      }
      function dc(o) {
        return o == null ? o : q0.call(o);
      }
      function ew(o, l, f) {
        var m = o == null ? 0 : o.length;
        return m ? (f && typeof f != "number" && Bt(o, l, f) ? (l = 0, f = m) : (l = l == null ? 0 : pe(l), f = f === t ? m : pe(f)), kn(o, l, f)) : [];
      }
      function tw(o, l) {
        return Qs(o, l);
      }
      function nw(o, l, f) {
        return Gl(o, l, re(f, 2));
      }
      function rw(o, l) {
        var f = o == null ? 0 : o.length;
        if (f) {
          var m = Qs(o, l);
          if (m < f && Bn(o[m], l))
            return m;
        }
        return -1;
      }
      function iw(o, l) {
        return Qs(o, l, !0);
      }
      function ow(o, l, f) {
        return Gl(o, l, re(f, 2), !0);
      }
      function sw(o, l) {
        var f = o == null ? 0 : o.length;
        if (f) {
          var m = Qs(o, l, !0) - 1;
          if (Bn(o[m], l))
            return m;
        }
        return -1;
      }
      function aw(o) {
        return o && o.length ? Td(o) : [];
      }
      function lw(o, l) {
        return o && o.length ? Td(o, re(l, 2)) : [];
      }
      function cw(o) {
        var l = o == null ? 0 : o.length;
        return l ? kn(o, 1, l) : [];
      }
      function uw(o, l, f) {
        return o && o.length ? (l = f || l === t ? 1 : pe(l), kn(o, 0, l < 0 ? 0 : l)) : [];
      }
      function fw(o, l, f) {
        var m = o == null ? 0 : o.length;
        return m ? (l = f || l === t ? 1 : pe(l), l = m - l, kn(o, l < 0 ? 0 : l, m)) : [];
      }
      function dw(o, l) {
        return o && o.length ? ea(o, re(l, 3), !1, !0) : [];
      }
      function pw(o, l) {
        return o && o.length ? ea(o, re(l, 3)) : [];
      }
      var hw = ye(function(o) {
        return Nr(St(o, 1, st, !0));
      }), mw = ye(function(o) {
        var l = En(o);
        return st(l) && (l = t), Nr(St(o, 1, st, !0), re(l, 2));
      }), gw = ye(function(o) {
        var l = En(o);
        return l = typeof l == "function" ? l : t, Nr(St(o, 1, st, !0), t, l);
      });
      function yw(o) {
        return o && o.length ? Nr(o) : [];
      }
      function vw(o, l) {
        return o && o.length ? Nr(o, re(l, 2)) : [];
      }
      function bw(o, l) {
        return l = typeof l == "function" ? l : t, o && o.length ? Nr(o, t, l) : [];
      }
      function pc(o) {
        if (!(o && o.length))
          return [];
        var l = 0;
        return o = Cr(o, function(f) {
          if (st(f))
            return l = ft(f.length, l), !0;
        }), Ml(l, function(f) {
          return Ze(o, Ol(f));
        });
      }
      function hp(o, l) {
        if (!(o && o.length))
          return [];
        var f = pc(o);
        return l == null ? f : Ze(f, function(m) {
          return ln(l, t, m);
        });
      }
      var ww = ye(function(o, l) {
        return st(o) ? Ho(o, l) : [];
      }), xw = ye(function(o) {
        return Xl(Cr(o, st));
      }), _w = ye(function(o) {
        var l = En(o);
        return st(l) && (l = t), Xl(Cr(o, st), re(l, 2));
      }), Sw = ye(function(o) {
        var l = En(o);
        return l = typeof l == "function" ? l : t, Xl(Cr(o, st), t, l);
      }), kw = ye(pc);
      function Ew(o, l) {
        return Dd(o || [], l || [], zo);
      }
      function Cw(o, l) {
        return Dd(o || [], l || [], jo);
      }
      var Ow = ye(function(o) {
        var l = o.length, f = l > 1 ? o[l - 1] : t;
        return f = typeof f == "function" ? (o.pop(), f) : t, hp(o, f);
      });
      function mp(o) {
        var l = b(o);
        return l.__chain__ = !0, l;
      }
      function Tw(o, l) {
        return l(o), o;
      }
      function ca(o, l) {
        return l(o);
      }
      var Aw = pr(function(o) {
        var l = o.length, f = l ? o[0] : 0, m = this.__wrapped__, v = function(w) {
          return $l(w, o);
        };
        return l > 1 || this.__actions__.length || !(m instanceof Se) || !hr(f) ? this.thru(v) : (m = m.slice(f, +f + (l ? 1 : 0)), m.__actions__.push({
          func: ca,
          args: [v],
          thisArg: t
        }), new _n(m, this.__chain__).thru(function(w) {
          return l && !w.length && w.push(t), w;
        }));
      });
      function Mw() {
        return mp(this);
      }
      function Nw() {
        return new _n(this.value(), this.__chain__);
      }
      function Dw() {
        this.__values__ === t && (this.__values__ = Ap(this.value()));
        var o = this.__index__ >= this.__values__.length, l = o ? t : this.__values__[this.__index__++];
        return { done: o, value: l };
      }
      function Rw() {
        return this;
      }
      function Iw(o) {
        for (var l, f = this; f instanceof Js; ) {
          var m = lp(f);
          m.__index__ = 0, m.__values__ = t, l ? v.__wrapped__ = m : l = m;
          var v = m;
          f = f.__wrapped__;
        }
        return v.__wrapped__ = o, l;
      }
      function Pw() {
        var o = this.__wrapped__;
        if (o instanceof Se) {
          var l = o;
          return this.__actions__.length && (l = new Se(this)), l = l.reverse(), l.__actions__.push({
            func: ca,
            args: [dc],
            thisArg: t
          }), new _n(l, this.__chain__);
        }
        return this.thru(dc);
      }
      function Lw() {
        return Nd(this.__wrapped__, this.__actions__);
      }
      var Bw = ta(function(o, l, f) {
        ze.call(o, f) ? ++o[f] : fr(o, f, 1);
      });
      function $w(o, l, f) {
        var m = fe(o) ? Uf : Tb;
        return f && Bt(o, l, f) && (l = t), m(o, re(l, 3));
      }
      function Fw(o, l) {
        var f = fe(o) ? Cr : hd;
        return f(o, re(l, 3));
      }
      var Vw = Hd(cp), zw = Hd(up);
      function Hw(o, l) {
        return St(ua(o, l), 1);
      }
      function Ww(o, l) {
        return St(ua(o, l), He);
      }
      function Uw(o, l, f) {
        return f = f === t ? 1 : pe(f), St(ua(o, l), f);
      }
      function gp(o, l) {
        var f = fe(o) ? wn : Mr;
        return f(o, re(l, 3));
      }
      function yp(o, l) {
        var f = fe(o) ? c0 : pd;
        return f(o, re(l, 3));
      }
      var jw = ta(function(o, l, f) {
        ze.call(o, f) ? o[f].push(l) : fr(o, f, [l]);
      });
      function qw(o, l, f, m) {
        o = Yt(o) ? o : Ki(o), f = f && !m ? pe(f) : 0;
        var v = o.length;
        return f < 0 && (f = ft(v + f, 0)), ma(o) ? f <= v && o.indexOf(l, f) > -1 : !!v && Pi(o, l, f) > -1;
      }
      var Kw = ye(function(o, l, f) {
        var m = -1, v = typeof l == "function", w = Yt(o) ? N(o.length) : [];
        return Mr(o, function(S) {
          w[++m] = v ? ln(l, S, f) : Wo(S, l, f);
        }), w;
      }), Jw = ta(function(o, l, f) {
        fr(o, f, l);
      });
      function ua(o, l) {
        var f = fe(o) ? Ze : wd;
        return f(o, re(l, 3));
      }
      function Gw(o, l, f, m) {
        return o == null ? [] : (fe(l) || (l = l == null ? [] : [l]), f = m ? t : f, fe(f) || (f = f == null ? [] : [f]), kd(o, l, f));
      }
      var Yw = ta(function(o, l, f) {
        o[f ? 0 : 1].push(l);
      }, function() {
        return [[], []];
      });
      function Xw(o, l, f) {
        var m = fe(o) ? El : Jf, v = arguments.length < 3;
        return m(o, re(l, 4), f, v, Mr);
      }
      function Zw(o, l, f) {
        var m = fe(o) ? u0 : Jf, v = arguments.length < 3;
        return m(o, re(l, 4), f, v, pd);
      }
      function Qw(o, l) {
        var f = fe(o) ? Cr : hd;
        return f(o, pa(re(l, 3)));
      }
      function ex(o) {
        var l = fe(o) ? cd : qb;
        return l(o);
      }
      function tx(o, l, f) {
        (f ? Bt(o, l, f) : l === t) ? l = 1 : l = pe(l);
        var m = fe(o) ? Sb : Kb;
        return m(o, l);
      }
      function nx(o) {
        var l = fe(o) ? kb : Gb;
        return l(o);
      }
      function rx(o) {
        if (o == null)
          return 0;
        if (Yt(o))
          return ma(o) ? Bi(o) : o.length;
        var l = Mt(o);
        return l == Xe || l == ct ? o.size : Ul(o).length;
      }
      function ix(o, l, f) {
        var m = fe(o) ? Cl : Yb;
        return f && Bt(o, l, f) && (l = t), m(o, re(l, 3));
      }
      var ox = ye(function(o, l) {
        if (o == null)
          return [];
        var f = l.length;
        return f > 1 && Bt(o, l[0], l[1]) ? l = [] : f > 2 && Bt(l[0], l[1], l[2]) && (l = [l[0]]), kd(o, St(l, 1), []);
      }), fa = F0 || function() {
        return _t.Date.now();
      };
      function sx(o, l) {
        if (typeof l != "function")
          throw new xn(a);
        return o = pe(o), function() {
          if (--o < 1)
            return l.apply(this, arguments);
        };
      }
      function vp(o, l, f) {
        return l = f ? t : l, l = o && l == null ? o.length : l, dr(o, Z, t, t, t, t, l);
      }
      function bp(o, l) {
        var f;
        if (typeof l != "function")
          throw new xn(a);
        return o = pe(o), function() {
          return --o > 0 && (f = l.apply(this, arguments)), o <= 1 && (l = t), f;
        };
      }
      var hc = ye(function(o, l, f) {
        var m = O;
        if (f.length) {
          var v = Tr(f, ji(hc));
          m |= U;
        }
        return dr(o, m, l, f, v);
      }), wp = ye(function(o, l, f) {
        var m = O | M;
        if (f.length) {
          var v = Tr(f, ji(wp));
          m |= U;
        }
        return dr(l, m, o, f, v);
      });
      function xp(o, l, f) {
        l = f ? t : l;
        var m = dr(o, W, t, t, t, t, t, l);
        return m.placeholder = xp.placeholder, m;
      }
      function _p(o, l, f) {
        l = f ? t : l;
        var m = dr(o, E, t, t, t, t, t, l);
        return m.placeholder = _p.placeholder, m;
      }
      function Sp(o, l, f) {
        var m, v, w, S, C, A, L = 0, B = !1, V = !1, J = !0;
        if (typeof o != "function")
          throw new xn(a);
        l = Cn(l) || 0, et(f) && (B = !!f.leading, V = "maxWait" in f, w = V ? ft(Cn(f.maxWait) || 0, l) : w, J = "trailing" in f ? !!f.trailing : J);
        function te(at) {
          var $n = m, yr = v;
          return m = v = t, L = at, S = o.apply(yr, $n), S;
        }
        function ie(at) {
          return L = at, C = Jo(xe, l), B ? te(at) : S;
        }
        function he(at) {
          var $n = at - A, yr = at - L, Hp = l - $n;
          return V ? At(Hp, w - yr) : Hp;
        }
        function oe(at) {
          var $n = at - A, yr = at - L;
          return A === t || $n >= l || $n < 0 || V && yr >= w;
        }
        function xe() {
          var at = fa();
          if (oe(at))
            return Ce(at);
          C = Jo(xe, he(at));
        }
        function Ce(at) {
          return C = t, J && m ? te(at) : (m = v = t, S);
        }
        function dn() {
          C !== t && Rd(C), L = 0, m = A = v = C = t;
        }
        function $t() {
          return C === t ? S : Ce(fa());
        }
        function pn() {
          var at = fa(), $n = oe(at);
          if (m = arguments, v = this, A = at, $n) {
            if (C === t)
              return ie(A);
            if (V)
              return Rd(C), C = Jo(xe, l), te(A);
          }
          return C === t && (C = Jo(xe, l)), S;
        }
        return pn.cancel = dn, pn.flush = $t, pn;
      }
      var ax = ye(function(o, l) {
        return dd(o, 1, l);
      }), lx = ye(function(o, l, f) {
        return dd(o, Cn(l) || 0, f);
      });
      function cx(o) {
        return dr(o, we);
      }
      function da(o, l) {
        if (typeof o != "function" || l != null && typeof l != "function")
          throw new xn(a);
        var f = function() {
          var m = arguments, v = l ? l.apply(this, m) : m[0], w = f.cache;
          if (w.has(v))
            return w.get(v);
          var S = o.apply(this, m);
          return f.cache = w.set(v, S) || w, S;
        };
        return f.cache = new (da.Cache || ur)(), f;
      }
      da.Cache = ur;
      function pa(o) {
        if (typeof o != "function")
          throw new xn(a);
        return function() {
          var l = arguments;
          switch (l.length) {
            case 0:
              return !o.call(this);
            case 1:
              return !o.call(this, l[0]);
            case 2:
              return !o.call(this, l[0], l[1]);
            case 3:
              return !o.call(this, l[0], l[1], l[2]);
          }
          return !o.apply(this, l);
        };
      }
      function ux(o) {
        return bp(2, o);
      }
      var fx = Xb(function(o, l) {
        l = l.length == 1 && fe(l[0]) ? Ze(l[0], cn(re())) : Ze(St(l, 1), cn(re()));
        var f = l.length;
        return ye(function(m) {
          for (var v = -1, w = At(m.length, f); ++v < w; )
            m[v] = l[v].call(this, m[v]);
          return ln(o, this, m);
        });
      }), mc = ye(function(o, l) {
        var f = Tr(l, ji(mc));
        return dr(o, U, t, l, f);
      }), kp = ye(function(o, l) {
        var f = Tr(l, ji(kp));
        return dr(o, $, t, l, f);
      }), dx = pr(function(o, l) {
        return dr(o, K, t, t, t, l);
      });
      function px(o, l) {
        if (typeof o != "function")
          throw new xn(a);
        return l = l === t ? l : pe(l), ye(o, l);
      }
      function hx(o, l) {
        if (typeof o != "function")
          throw new xn(a);
        return l = l == null ? 0 : ft(pe(l), 0), ye(function(f) {
          var m = f[l], v = Rr(f, 0, l);
          return m && Or(v, m), ln(o, this, v);
        });
      }
      function mx(o, l, f) {
        var m = !0, v = !0;
        if (typeof o != "function")
          throw new xn(a);
        return et(f) && (m = "leading" in f ? !!f.leading : m, v = "trailing" in f ? !!f.trailing : v), Sp(o, l, {
          leading: m,
          maxWait: l,
          trailing: v
        });
      }
      function gx(o) {
        return vp(o, 1);
      }
      function yx(o, l) {
        return mc(Ql(l), o);
      }
      function vx() {
        if (!arguments.length)
          return [];
        var o = arguments[0];
        return fe(o) ? o : [o];
      }
      function bx(o) {
        return Sn(o, y);
      }
      function wx(o, l) {
        return l = typeof l == "function" ? l : t, Sn(o, y, l);
      }
      function xx(o) {
        return Sn(o, h | y);
      }
      function _x(o, l) {
        return l = typeof l == "function" ? l : t, Sn(o, h | y, l);
      }
      function Sx(o, l) {
        return l == null || fd(o, l, yt(l));
      }
      function Bn(o, l) {
        return o === l || o !== o && l !== l;
      }
      var kx = oa(zl), Ex = oa(function(o, l) {
        return o >= l;
      }), di = yd(function() {
        return arguments;
      }()) ? yd : function(o) {
        return it(o) && ze.call(o, "callee") && !rd.call(o, "callee");
      }, fe = N.isArray, Cx = $f ? cn($f) : Ib;
      function Yt(o) {
        return o != null && ha(o.length) && !mr(o);
      }
      function st(o) {
        return it(o) && Yt(o);
      }
      function Ox(o) {
        return o === !0 || o === !1 || it(o) && Lt(o) == G;
      }
      var Ir = z0 || Cc, Tx = Ff ? cn(Ff) : Pb;
      function Ax(o) {
        return it(o) && o.nodeType === 1 && !Go(o);
      }
      function Mx(o) {
        if (o == null)
          return !0;
        if (Yt(o) && (fe(o) || typeof o == "string" || typeof o.splice == "function" || Ir(o) || qi(o) || di(o)))
          return !o.length;
        var l = Mt(o);
        if (l == Xe || l == ct)
          return !o.size;
        if (Ko(o))
          return !Ul(o).length;
        for (var f in o)
          if (ze.call(o, f))
            return !1;
        return !0;
      }
      function Nx(o, l) {
        return Uo(o, l);
      }
      function Dx(o, l, f) {
        f = typeof f == "function" ? f : t;
        var m = f ? f(o, l) : t;
        return m === t ? Uo(o, l, t, f) : !!m;
      }
      function gc(o) {
        if (!it(o))
          return !1;
        var l = Lt(o);
        return l == se || l == $e || typeof o.message == "string" && typeof o.name == "string" && !Go(o);
      }
      function Rx(o) {
        return typeof o == "number" && od(o);
      }
      function mr(o) {
        if (!et(o))
          return !1;
        var l = Lt(o);
        return l == ae || l == Pe || l == q || l == Mi;
      }
      function Ep(o) {
        return typeof o == "number" && o == pe(o);
      }
      function ha(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= We;
      }
      function et(o) {
        var l = typeof o;
        return o != null && (l == "object" || l == "function");
      }
      function it(o) {
        return o != null && typeof o == "object";
      }
      var Cp = Vf ? cn(Vf) : Bb;
      function Ix(o, l) {
        return o === l || Wl(o, l, sc(l));
      }
      function Px(o, l, f) {
        return f = typeof f == "function" ? f : t, Wl(o, l, sc(l), f);
      }
      function Lx(o) {
        return Op(o) && o != +o;
      }
      function Bx(o) {
        if (w1(o))
          throw new ue(s);
        return vd(o);
      }
      function $x(o) {
        return o === null;
      }
      function Fx(o) {
        return o == null;
      }
      function Op(o) {
        return typeof o == "number" || it(o) && Lt(o) == Je;
      }
      function Go(o) {
        if (!it(o) || Lt(o) != It)
          return !1;
        var l = zs(o);
        if (l === null)
          return !0;
        var f = ze.call(l, "constructor") && l.constructor;
        return typeof f == "function" && f instanceof f && Bs.call(f) == P0;
      }
      var yc = zf ? cn(zf) : $b;
      function Vx(o) {
        return Ep(o) && o >= -We && o <= We;
      }
      var Tp = Hf ? cn(Hf) : Fb;
      function ma(o) {
        return typeof o == "string" || !fe(o) && it(o) && Lt(o) == Rn;
      }
      function fn(o) {
        return typeof o == "symbol" || it(o) && Lt(o) == vn;
      }
      var qi = Wf ? cn(Wf) : Vb;
      function zx(o) {
        return o === t;
      }
      function Hx(o) {
        return it(o) && Mt(o) == jn;
      }
      function Wx(o) {
        return it(o) && Lt(o) == Ni;
      }
      var Ux = oa(jl), jx = oa(function(o, l) {
        return o <= l;
      });
      function Ap(o) {
        if (!o)
          return [];
        if (Yt(o))
          return ma(o) ? Pn(o) : Gt(o);
        if (Lo && o[Lo])
          return S0(o[Lo]());
        var l = Mt(o), f = l == Xe ? Dl : l == ct ? Is : Ki;
        return f(o);
      }
      function gr(o) {
        if (!o)
          return o === 0 ? o : 0;
        if (o = Cn(o), o === He || o === -He) {
          var l = o < 0 ? -1 : 1;
          return l * Ot;
        }
        return o === o ? o : 0;
      }
      function pe(o) {
        var l = gr(o), f = l % 1;
        return l === l ? f ? l - f : l : 0;
      }
      function Mp(o) {
        return o ? li(pe(o), 0, rt) : 0;
      }
      function Cn(o) {
        if (typeof o == "number")
          return o;
        if (fn(o))
          return gt;
        if (et(o)) {
          var l = typeof o.valueOf == "function" ? o.valueOf() : o;
          o = et(l) ? l + "" : l;
        }
        if (typeof o != "string")
          return o === 0 ? o : +o;
        o = Gf(o);
        var f = Cv.test(o);
        return f || Tv.test(o) ? s0(o.slice(2), f ? 2 : 8) : Ev.test(o) ? gt : +o;
      }
      function Np(o) {
        return Jn(o, Xt(o));
      }
      function qx(o) {
        return o ? li(pe(o), -We, We) : o === 0 ? o : 0;
      }
      function Fe(o) {
        return o == null ? "" : un(o);
      }
      var Kx = Wi(function(o, l) {
        if (Ko(l) || Yt(l)) {
          Jn(l, yt(l), o);
          return;
        }
        for (var f in l)
          ze.call(l, f) && zo(o, f, l[f]);
      }), Dp = Wi(function(o, l) {
        Jn(l, Xt(l), o);
      }), ga = Wi(function(o, l, f, m) {
        Jn(l, Xt(l), o, m);
      }), Jx = Wi(function(o, l, f, m) {
        Jn(l, yt(l), o, m);
      }), Gx = pr($l);
      function Yx(o, l) {
        var f = Hi(o);
        return l == null ? f : ud(f, l);
      }
      var Xx = ye(function(o, l) {
        o = qe(o);
        var f = -1, m = l.length, v = m > 2 ? l[2] : t;
        for (v && Bt(l[0], l[1], v) && (m = 1); ++f < m; )
          for (var w = l[f], S = Xt(w), C = -1, A = S.length; ++C < A; ) {
            var L = S[C], B = o[L];
            (B === t || Bn(B, Fi[L]) && !ze.call(o, L)) && (o[L] = w[L]);
          }
        return o;
      }), Zx = ye(function(o) {
        return o.push(t, Gd), ln(Rp, t, o);
      });
      function Qx(o, l) {
        return jf(o, re(l, 3), Kn);
      }
      function e_(o, l) {
        return jf(o, re(l, 3), Vl);
      }
      function t_(o, l) {
        return o == null ? o : Fl(o, re(l, 3), Xt);
      }
      function n_(o, l) {
        return o == null ? o : md(o, re(l, 3), Xt);
      }
      function r_(o, l) {
        return o && Kn(o, re(l, 3));
      }
      function i_(o, l) {
        return o && Vl(o, re(l, 3));
      }
      function o_(o) {
        return o == null ? [] : Xs(o, yt(o));
      }
      function s_(o) {
        return o == null ? [] : Xs(o, Xt(o));
      }
      function vc(o, l, f) {
        var m = o == null ? t : ci(o, l);
        return m === t ? f : m;
      }
      function a_(o, l) {
        return o != null && Zd(o, l, Mb);
      }
      function bc(o, l) {
        return o != null && Zd(o, l, Nb);
      }
      var l_ = Ud(function(o, l, f) {
        l != null && typeof l.toString != "function" && (l = $s.call(l)), o[l] = f;
      }, xc(Zt)), c_ = Ud(function(o, l, f) {
        l != null && typeof l.toString != "function" && (l = $s.call(l)), ze.call(o, l) ? o[l].push(f) : o[l] = [f];
      }, re), u_ = ye(Wo);
      function yt(o) {
        return Yt(o) ? ld(o) : Ul(o);
      }
      function Xt(o) {
        return Yt(o) ? ld(o, !0) : zb(o);
      }
      function f_(o, l) {
        var f = {};
        return l = re(l, 3), Kn(o, function(m, v, w) {
          fr(f, l(m, v, w), m);
        }), f;
      }
      function d_(o, l) {
        var f = {};
        return l = re(l, 3), Kn(o, function(m, v, w) {
          fr(f, v, l(m, v, w));
        }), f;
      }
      var p_ = Wi(function(o, l, f) {
        Zs(o, l, f);
      }), Rp = Wi(function(o, l, f, m) {
        Zs(o, l, f, m);
      }), h_ = pr(function(o, l) {
        var f = {};
        if (o == null)
          return f;
        var m = !1;
        l = Ze(l, function(w) {
          return w = Dr(w, o), m || (m = w.length > 1), w;
        }), Jn(o, ic(o), f), m && (f = Sn(f, h | g | y, l1));
        for (var v = l.length; v--; )
          Yl(f, l[v]);
        return f;
      });
      function m_(o, l) {
        return Ip(o, pa(re(l)));
      }
      var g_ = pr(function(o, l) {
        return o == null ? {} : Wb(o, l);
      });
      function Ip(o, l) {
        if (o == null)
          return {};
        var f = Ze(ic(o), function(m) {
          return [m];
        });
        return l = re(l), Ed(o, f, function(m, v) {
          return l(m, v[0]);
        });
      }
      function y_(o, l, f) {
        l = Dr(l, o);
        var m = -1, v = l.length;
        for (v || (v = 1, o = t); ++m < v; ) {
          var w = o == null ? t : o[Gn(l[m])];
          w === t && (m = v, w = f), o = mr(w) ? w.call(o) : w;
        }
        return o;
      }
      function v_(o, l, f) {
        return o == null ? o : jo(o, l, f);
      }
      function b_(o, l, f, m) {
        return m = typeof m == "function" ? m : t, o == null ? o : jo(o, l, f, m);
      }
      var Pp = Kd(yt), Lp = Kd(Xt);
      function w_(o, l, f) {
        var m = fe(o), v = m || Ir(o) || qi(o);
        if (l = re(l, 4), f == null) {
          var w = o && o.constructor;
          v ? f = m ? new w() : [] : et(o) ? f = mr(w) ? Hi(zs(o)) : {} : f = {};
        }
        return (v ? wn : Kn)(o, function(S, C, A) {
          return l(f, S, C, A);
        }), f;
      }
      function x_(o, l) {
        return o == null ? !0 : Yl(o, l);
      }
      function __(o, l, f) {
        return o == null ? o : Md(o, l, Ql(f));
      }
      function S_(o, l, f, m) {
        return m = typeof m == "function" ? m : t, o == null ? o : Md(o, l, Ql(f), m);
      }
      function Ki(o) {
        return o == null ? [] : Nl(o, yt(o));
      }
      function k_(o) {
        return o == null ? [] : Nl(o, Xt(o));
      }
      function E_(o, l, f) {
        return f === t && (f = l, l = t), f !== t && (f = Cn(f), f = f === f ? f : 0), l !== t && (l = Cn(l), l = l === l ? l : 0), li(Cn(o), l, f);
      }
      function C_(o, l, f) {
        return l = gr(l), f === t ? (f = l, l = 0) : f = gr(f), o = Cn(o), Db(o, l, f);
      }
      function O_(o, l, f) {
        if (f && typeof f != "boolean" && Bt(o, l, f) && (l = f = t), f === t && (typeof l == "boolean" ? (f = l, l = t) : typeof o == "boolean" && (f = o, o = t)), o === t && l === t ? (o = 0, l = 1) : (o = gr(o), l === t ? (l = o, o = 0) : l = gr(l)), o > l) {
          var m = o;
          o = l, l = m;
        }
        if (f || o % 1 || l % 1) {
          var v = sd();
          return At(o + v * (l - o + o0("1e-" + ((v + "").length - 1))), l);
        }
        return Kl(o, l);
      }
      var T_ = Ui(function(o, l, f) {
        return l = l.toLowerCase(), o + (f ? Bp(l) : l);
      });
      function Bp(o) {
        return wc(Fe(o).toLowerCase());
      }
      function $p(o) {
        return o = Fe(o), o && o.replace(Mv, v0).replace(Gv, "");
      }
      function A_(o, l, f) {
        o = Fe(o), l = un(l);
        var m = o.length;
        f = f === t ? m : li(pe(f), 0, m);
        var v = f;
        return f -= l.length, f >= 0 && o.slice(f, v) == l;
      }
      function M_(o) {
        return o = Fe(o), o && Ro.test(o) ? o.replace(Do, b0) : o;
      }
      function N_(o) {
        return o = Fe(o), o && gv.test(o) ? o.replace(ml, "\\$&") : o;
      }
      var D_ = Ui(function(o, l, f) {
        return o + (f ? "-" : "") + l.toLowerCase();
      }), R_ = Ui(function(o, l, f) {
        return o + (f ? " " : "") + l.toLowerCase();
      }), I_ = zd("toLowerCase");
      function P_(o, l, f) {
        o = Fe(o), l = pe(l);
        var m = l ? Bi(o) : 0;
        if (!l || m >= l)
          return o;
        var v = (l - m) / 2;
        return ia(js(v), f) + o + ia(Us(v), f);
      }
      function L_(o, l, f) {
        o = Fe(o), l = pe(l);
        var m = l ? Bi(o) : 0;
        return l && m < l ? o + ia(l - m, f) : o;
      }
      function B_(o, l, f) {
        o = Fe(o), l = pe(l);
        var m = l ? Bi(o) : 0;
        return l && m < l ? ia(l - m, f) + o : o;
      }
      function $_(o, l, f) {
        return f || l == null ? l = 0 : l && (l = +l), j0(Fe(o).replace(gl, ""), l || 0);
      }
      function F_(o, l, f) {
        return (f ? Bt(o, l, f) : l === t) ? l = 1 : l = pe(l), Jl(Fe(o), l);
      }
      function V_() {
        var o = arguments, l = Fe(o[0]);
        return o.length < 3 ? l : l.replace(o[1], o[2]);
      }
      var z_ = Ui(function(o, l, f) {
        return o + (f ? "_" : "") + l.toLowerCase();
      });
      function H_(o, l, f) {
        return f && typeof f != "number" && Bt(o, l, f) && (l = f = t), f = f === t ? rt : f >>> 0, f ? (o = Fe(o), o && (typeof l == "string" || l != null && !yc(l)) && (l = un(l), !l && Li(o)) ? Rr(Pn(o), 0, f) : o.split(l, f)) : [];
      }
      var W_ = Ui(function(o, l, f) {
        return o + (f ? " " : "") + wc(l);
      });
      function U_(o, l, f) {
        return o = Fe(o), f = f == null ? 0 : li(pe(f), 0, o.length), l = un(l), o.slice(f, f + l.length) == l;
      }
      function j_(o, l, f) {
        var m = b.templateSettings;
        f && Bt(o, l, f) && (l = t), o = Fe(o), l = ga({}, l, m, Jd);
        var v = ga({}, l.imports, m.imports, Jd), w = yt(v), S = Nl(v, w), C, A, L = 0, B = l.interpolate || As, V = "__p += '", J = Rl(
          (l.escape || As).source + "|" + B.source + "|" + (B === Ts ? kv : As).source + "|" + (l.evaluate || As).source + "|$",
          "g"
        ), te = "//# sourceURL=" + (ze.call(l, "sourceURL") ? (l.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++e0 + "]") + `
`;
        o.replace(J, function(oe, xe, Ce, dn, $t, pn) {
          return Ce || (Ce = dn), V += o.slice(L, pn).replace(Nv, w0), xe && (C = !0, V += `' +
__e(` + xe + `) +
'`), $t && (A = !0, V += `';
` + $t + `;
__p += '`), Ce && (V += `' +
((__t = (` + Ce + `)) == null ? '' : __t) +
'`), L = pn + oe.length, oe;
        }), V += `';
`;
        var ie = ze.call(l, "variable") && l.variable;
        if (!ie)
          V = `with (obj) {
` + V + `
}
`;
        else if (_v.test(ie))
          throw new ue(c);
        V = (A ? V.replace(Ee, "") : V).replace(xt, "$1").replace(Jt, "$1;"), V = "function(" + (ie || "obj") + `) {
` + (ie ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (C ? ", __e = _.escape" : "") + (A ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var he = Vp(function() {
          return Le(w, te + "return " + V).apply(t, S);
        });
        if (he.source = V, gc(he))
          throw he;
        return he;
      }
      function q_(o) {
        return Fe(o).toLowerCase();
      }
      function K_(o) {
        return Fe(o).toUpperCase();
      }
      function J_(o, l, f) {
        if (o = Fe(o), o && (f || l === t))
          return Gf(o);
        if (!o || !(l = un(l)))
          return o;
        var m = Pn(o), v = Pn(l), w = Yf(m, v), S = Xf(m, v) + 1;
        return Rr(m, w, S).join("");
      }
      function G_(o, l, f) {
        if (o = Fe(o), o && (f || l === t))
          return o.slice(0, Qf(o) + 1);
        if (!o || !(l = un(l)))
          return o;
        var m = Pn(o), v = Xf(m, Pn(l)) + 1;
        return Rr(m, 0, v).join("");
      }
      function Y_(o, l, f) {
        if (o = Fe(o), o && (f || l === t))
          return o.replace(gl, "");
        if (!o || !(l = un(l)))
          return o;
        var m = Pn(o), v = Yf(m, Pn(l));
        return Rr(m, v).join("");
      }
      function X_(o, l) {
        var f = De, m = ke;
        if (et(l)) {
          var v = "separator" in l ? l.separator : v;
          f = "length" in l ? pe(l.length) : f, m = "omission" in l ? un(l.omission) : m;
        }
        o = Fe(o);
        var w = o.length;
        if (Li(o)) {
          var S = Pn(o);
          w = S.length;
        }
        if (f >= w)
          return o;
        var C = f - Bi(m);
        if (C < 1)
          return m;
        var A = S ? Rr(S, 0, C).join("") : o.slice(0, C);
        if (v === t)
          return A + m;
        if (S && (C += A.length - C), yc(v)) {
          if (o.slice(C).search(v)) {
            var L, B = A;
            for (v.global || (v = Rl(v.source, Fe(yf.exec(v)) + "g")), v.lastIndex = 0; L = v.exec(B); )
              var V = L.index;
            A = A.slice(0, V === t ? C : V);
          }
        } else if (o.indexOf(un(v), C) != C) {
          var J = A.lastIndexOf(v);
          J > -1 && (A = A.slice(0, J));
        }
        return A + m;
      }
      function Z_(o) {
        return o = Fe(o), o && lr.test(o) ? o.replace(ar, O0) : o;
      }
      var Q_ = Ui(function(o, l, f) {
        return o + (f ? " " : "") + l.toUpperCase();
      }), wc = zd("toUpperCase");
      function Fp(o, l, f) {
        return o = Fe(o), l = f ? t : l, l === t ? _0(o) ? M0(o) : p0(o) : o.match(l) || [];
      }
      var Vp = ye(function(o, l) {
        try {
          return ln(o, t, l);
        } catch (f) {
          return gc(f) ? f : new ue(f);
        }
      }), eS = pr(function(o, l) {
        return wn(l, function(f) {
          f = Gn(f), fr(o, f, hc(o[f], o));
        }), o;
      });
      function tS(o) {
        var l = o == null ? 0 : o.length, f = re();
        return o = l ? Ze(o, function(m) {
          if (typeof m[1] != "function")
            throw new xn(a);
          return [f(m[0]), m[1]];
        }) : [], ye(function(m) {
          for (var v = -1; ++v < l; ) {
            var w = o[v];
            if (ln(w[0], this, m))
              return ln(w[1], this, m);
          }
        });
      }
      function nS(o) {
        return Ob(Sn(o, h));
      }
      function xc(o) {
        return function() {
          return o;
        };
      }
      function rS(o, l) {
        return o == null || o !== o ? l : o;
      }
      var iS = Wd(), oS = Wd(!0);
      function Zt(o) {
        return o;
      }
      function _c(o) {
        return bd(typeof o == "function" ? o : Sn(o, h));
      }
      function sS(o) {
        return xd(Sn(o, h));
      }
      function aS(o, l) {
        return _d(o, Sn(l, h));
      }
      var lS = ye(function(o, l) {
        return function(f) {
          return Wo(f, o, l);
        };
      }), cS = ye(function(o, l) {
        return function(f) {
          return Wo(o, f, l);
        };
      });
      function Sc(o, l, f) {
        var m = yt(l), v = Xs(l, m);
        f == null && !(et(l) && (v.length || !m.length)) && (f = l, l = o, o = this, v = Xs(l, yt(l)));
        var w = !(et(f) && "chain" in f) || !!f.chain, S = mr(o);
        return wn(v, function(C) {
          var A = l[C];
          o[C] = A, S && (o.prototype[C] = function() {
            var L = this.__chain__;
            if (w || L) {
              var B = o(this.__wrapped__), V = B.__actions__ = Gt(this.__actions__);
              return V.push({ func: A, args: arguments, thisArg: o }), B.__chain__ = L, B;
            }
            return A.apply(o, Or([this.value()], arguments));
          });
        }), o;
      }
      function uS() {
        return _t._ === this && (_t._ = L0), this;
      }
      function kc() {
      }
      function fS(o) {
        return o = pe(o), ye(function(l) {
          return Sd(l, o);
        });
      }
      var dS = tc(Ze), pS = tc(Uf), hS = tc(Cl);
      function zp(o) {
        return lc(o) ? Ol(Gn(o)) : Ub(o);
      }
      function mS(o) {
        return function(l) {
          return o == null ? t : ci(o, l);
        };
      }
      var gS = jd(), yS = jd(!0);
      function Ec() {
        return [];
      }
      function Cc() {
        return !1;
      }
      function vS() {
        return {};
      }
      function bS() {
        return "";
      }
      function wS() {
        return !0;
      }
      function xS(o, l) {
        if (o = pe(o), o < 1 || o > We)
          return [];
        var f = rt, m = At(o, rt);
        l = re(l), o -= rt;
        for (var v = Ml(m, l); ++f < o; )
          l(f);
        return v;
      }
      function _S(o) {
        return fe(o) ? Ze(o, Gn) : fn(o) ? [o] : Gt(ap(Fe(o)));
      }
      function SS(o) {
        var l = ++I0;
        return Fe(o) + l;
      }
      var kS = ra(function(o, l) {
        return o + l;
      }, 0), ES = nc("ceil"), CS = ra(function(o, l) {
        return o / l;
      }, 1), OS = nc("floor");
      function TS(o) {
        return o && o.length ? Ys(o, Zt, zl) : t;
      }
      function AS(o, l) {
        return o && o.length ? Ys(o, re(l, 2), zl) : t;
      }
      function MS(o) {
        return Kf(o, Zt);
      }
      function NS(o, l) {
        return Kf(o, re(l, 2));
      }
      function DS(o) {
        return o && o.length ? Ys(o, Zt, jl) : t;
      }
      function RS(o, l) {
        return o && o.length ? Ys(o, re(l, 2), jl) : t;
      }
      var IS = ra(function(o, l) {
        return o * l;
      }, 1), PS = nc("round"), LS = ra(function(o, l) {
        return o - l;
      }, 0);
      function BS(o) {
        return o && o.length ? Al(o, Zt) : 0;
      }
      function $S(o, l) {
        return o && o.length ? Al(o, re(l, 2)) : 0;
      }
      return b.after = sx, b.ary = vp, b.assign = Kx, b.assignIn = Dp, b.assignInWith = ga, b.assignWith = Jx, b.at = Gx, b.before = bp, b.bind = hc, b.bindAll = eS, b.bindKey = wp, b.castArray = vx, b.chain = mp, b.chunk = O1, b.compact = T1, b.concat = A1, b.cond = tS, b.conforms = nS, b.constant = xc, b.countBy = Bw, b.create = Yx, b.curry = xp, b.curryRight = _p, b.debounce = Sp, b.defaults = Xx, b.defaultsDeep = Zx, b.defer = ax, b.delay = lx, b.difference = M1, b.differenceBy = N1, b.differenceWith = D1, b.drop = R1, b.dropRight = I1, b.dropRightWhile = P1, b.dropWhile = L1, b.fill = B1, b.filter = Fw, b.flatMap = Hw, b.flatMapDeep = Ww, b.flatMapDepth = Uw, b.flatten = fp, b.flattenDeep = $1, b.flattenDepth = F1, b.flip = cx, b.flow = iS, b.flowRight = oS, b.fromPairs = V1, b.functions = o_, b.functionsIn = s_, b.groupBy = jw, b.initial = H1, b.intersection = W1, b.intersectionBy = U1, b.intersectionWith = j1, b.invert = l_, b.invertBy = c_, b.invokeMap = Kw, b.iteratee = _c, b.keyBy = Jw, b.keys = yt, b.keysIn = Xt, b.map = ua, b.mapKeys = f_, b.mapValues = d_, b.matches = sS, b.matchesProperty = aS, b.memoize = da, b.merge = p_, b.mergeWith = Rp, b.method = lS, b.methodOf = cS, b.mixin = Sc, b.negate = pa, b.nthArg = fS, b.omit = h_, b.omitBy = m_, b.once = ux, b.orderBy = Gw, b.over = dS, b.overArgs = fx, b.overEvery = pS, b.overSome = hS, b.partial = mc, b.partialRight = kp, b.partition = Yw, b.pick = g_, b.pickBy = Ip, b.property = zp, b.propertyOf = mS, b.pull = G1, b.pullAll = pp, b.pullAllBy = Y1, b.pullAllWith = X1, b.pullAt = Z1, b.range = gS, b.rangeRight = yS, b.rearg = dx, b.reject = Qw, b.remove = Q1, b.rest = px, b.reverse = dc, b.sampleSize = tx, b.set = v_, b.setWith = b_, b.shuffle = nx, b.slice = ew, b.sortBy = ox, b.sortedUniq = aw, b.sortedUniqBy = lw, b.split = H_, b.spread = hx, b.tail = cw, b.take = uw, b.takeRight = fw, b.takeRightWhile = dw, b.takeWhile = pw, b.tap = Tw, b.throttle = mx, b.thru = ca, b.toArray = Ap, b.toPairs = Pp, b.toPairsIn = Lp, b.toPath = _S, b.toPlainObject = Np, b.transform = w_, b.unary = gx, b.union = hw, b.unionBy = mw, b.unionWith = gw, b.uniq = yw, b.uniqBy = vw, b.uniqWith = bw, b.unset = x_, b.unzip = pc, b.unzipWith = hp, b.update = __, b.updateWith = S_, b.values = Ki, b.valuesIn = k_, b.without = ww, b.words = Fp, b.wrap = yx, b.xor = xw, b.xorBy = _w, b.xorWith = Sw, b.zip = kw, b.zipObject = Ew, b.zipObjectDeep = Cw, b.zipWith = Ow, b.entries = Pp, b.entriesIn = Lp, b.extend = Dp, b.extendWith = ga, Sc(b, b), b.add = kS, b.attempt = Vp, b.camelCase = T_, b.capitalize = Bp, b.ceil = ES, b.clamp = E_, b.clone = bx, b.cloneDeep = xx, b.cloneDeepWith = _x, b.cloneWith = wx, b.conformsTo = Sx, b.deburr = $p, b.defaultTo = rS, b.divide = CS, b.endsWith = A_, b.eq = Bn, b.escape = M_, b.escapeRegExp = N_, b.every = $w, b.find = Vw, b.findIndex = cp, b.findKey = Qx, b.findLast = zw, b.findLastIndex = up, b.findLastKey = e_, b.floor = OS, b.forEach = gp, b.forEachRight = yp, b.forIn = t_, b.forInRight = n_, b.forOwn = r_, b.forOwnRight = i_, b.get = vc, b.gt = kx, b.gte = Ex, b.has = a_, b.hasIn = bc, b.head = dp, b.identity = Zt, b.includes = qw, b.indexOf = z1, b.inRange = C_, b.invoke = u_, b.isArguments = di, b.isArray = fe, b.isArrayBuffer = Cx, b.isArrayLike = Yt, b.isArrayLikeObject = st, b.isBoolean = Ox, b.isBuffer = Ir, b.isDate = Tx, b.isElement = Ax, b.isEmpty = Mx, b.isEqual = Nx, b.isEqualWith = Dx, b.isError = gc, b.isFinite = Rx, b.isFunction = mr, b.isInteger = Ep, b.isLength = ha, b.isMap = Cp, b.isMatch = Ix, b.isMatchWith = Px, b.isNaN = Lx, b.isNative = Bx, b.isNil = Fx, b.isNull = $x, b.isNumber = Op, b.isObject = et, b.isObjectLike = it, b.isPlainObject = Go, b.isRegExp = yc, b.isSafeInteger = Vx, b.isSet = Tp, b.isString = ma, b.isSymbol = fn, b.isTypedArray = qi, b.isUndefined = zx, b.isWeakMap = Hx, b.isWeakSet = Wx, b.join = q1, b.kebabCase = D_, b.last = En, b.lastIndexOf = K1, b.lowerCase = R_, b.lowerFirst = I_, b.lt = Ux, b.lte = jx, b.max = TS, b.maxBy = AS, b.mean = MS, b.meanBy = NS, b.min = DS, b.minBy = RS, b.stubArray = Ec, b.stubFalse = Cc, b.stubObject = vS, b.stubString = bS, b.stubTrue = wS, b.multiply = IS, b.nth = J1, b.noConflict = uS, b.noop = kc, b.now = fa, b.pad = P_, b.padEnd = L_, b.padStart = B_, b.parseInt = $_, b.random = O_, b.reduce = Xw, b.reduceRight = Zw, b.repeat = F_, b.replace = V_, b.result = y_, b.round = PS, b.runInContext = T, b.sample = ex, b.size = rx, b.snakeCase = z_, b.some = ix, b.sortedIndex = tw, b.sortedIndexBy = nw, b.sortedIndexOf = rw, b.sortedLastIndex = iw, b.sortedLastIndexBy = ow, b.sortedLastIndexOf = sw, b.startCase = W_, b.startsWith = U_, b.subtract = LS, b.sum = BS, b.sumBy = $S, b.template = j_, b.times = xS, b.toFinite = gr, b.toInteger = pe, b.toLength = Mp, b.toLower = q_, b.toNumber = Cn, b.toSafeInteger = qx, b.toString = Fe, b.toUpper = K_, b.trim = J_, b.trimEnd = G_, b.trimStart = Y_, b.truncate = X_, b.unescape = Z_, b.uniqueId = SS, b.upperCase = Q_, b.upperFirst = wc, b.each = gp, b.eachRight = yp, b.first = dp, Sc(b, function() {
        var o = {};
        return Kn(b, function(l, f) {
          ze.call(b.prototype, f) || (o[f] = l);
        }), o;
      }(), { chain: !1 }), b.VERSION = r, wn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
        b[o].placeholder = b;
      }), wn(["drop", "take"], function(o, l) {
        Se.prototype[o] = function(f) {
          f = f === t ? 1 : ft(pe(f), 0);
          var m = this.__filtered__ && !l ? new Se(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = At(f, m.__takeCount__) : m.__views__.push({
            size: At(f, rt),
            type: o + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, Se.prototype[o + "Right"] = function(f) {
          return this.reverse()[o](f).reverse();
        };
      }), wn(["filter", "map", "takeWhile"], function(o, l) {
        var f = l + 1, m = f == lt || f == Qe;
        Se.prototype[o] = function(v) {
          var w = this.clone();
          return w.__iteratees__.push({
            iteratee: re(v, 3),
            type: f
          }), w.__filtered__ = w.__filtered__ || m, w;
        };
      }), wn(["head", "last"], function(o, l) {
        var f = "take" + (l ? "Right" : "");
        Se.prototype[o] = function() {
          return this[f](1).value()[0];
        };
      }), wn(["initial", "tail"], function(o, l) {
        var f = "drop" + (l ? "" : "Right");
        Se.prototype[o] = function() {
          return this.__filtered__ ? new Se(this) : this[f](1);
        };
      }), Se.prototype.compact = function() {
        return this.filter(Zt);
      }, Se.prototype.find = function(o) {
        return this.filter(o).head();
      }, Se.prototype.findLast = function(o) {
        return this.reverse().find(o);
      }, Se.prototype.invokeMap = ye(function(o, l) {
        return typeof o == "function" ? new Se(this) : this.map(function(f) {
          return Wo(f, o, l);
        });
      }), Se.prototype.reject = function(o) {
        return this.filter(pa(re(o)));
      }, Se.prototype.slice = function(o, l) {
        o = pe(o);
        var f = this;
        return f.__filtered__ && (o > 0 || l < 0) ? new Se(f) : (o < 0 ? f = f.takeRight(-o) : o && (f = f.drop(o)), l !== t && (l = pe(l), f = l < 0 ? f.dropRight(-l) : f.take(l - o)), f);
      }, Se.prototype.takeRightWhile = function(o) {
        return this.reverse().takeWhile(o).reverse();
      }, Se.prototype.toArray = function() {
        return this.take(rt);
      }, Kn(Se.prototype, function(o, l) {
        var f = /^(?:filter|find|map|reject)|While$/.test(l), m = /^(?:head|last)$/.test(l), v = b[m ? "take" + (l == "last" ? "Right" : "") : l], w = m || /^find/.test(l);
        !v || (b.prototype[l] = function() {
          var S = this.__wrapped__, C = m ? [1] : arguments, A = S instanceof Se, L = C[0], B = A || fe(S), V = function(xe) {
            var Ce = v.apply(b, Or([xe], C));
            return m && J ? Ce[0] : Ce;
          };
          B && f && typeof L == "function" && L.length != 1 && (A = B = !1);
          var J = this.__chain__, te = !!this.__actions__.length, ie = w && !J, he = A && !te;
          if (!w && B) {
            S = he ? S : new Se(this);
            var oe = o.apply(S, C);
            return oe.__actions__.push({ func: ca, args: [V], thisArg: t }), new _n(oe, J);
          }
          return ie && he ? o.apply(this, C) : (oe = this.thru(V), ie ? m ? oe.value()[0] : oe.value() : oe);
        });
      }), wn(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
        var l = Ps[o], f = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(o);
        b.prototype[o] = function() {
          var v = arguments;
          if (m && !this.__chain__) {
            var w = this.value();
            return l.apply(fe(w) ? w : [], v);
          }
          return this[f](function(S) {
            return l.apply(fe(S) ? S : [], v);
          });
        };
      }), Kn(Se.prototype, function(o, l) {
        var f = b[l];
        if (f) {
          var m = f.name + "";
          ze.call(zi, m) || (zi[m] = []), zi[m].push({ name: l, func: f });
        }
      }), zi[na(t, M).name] = [{
        name: "wrapper",
        func: t
      }], Se.prototype.clone = Z0, Se.prototype.reverse = Q0, Se.prototype.value = eb, b.prototype.at = Aw, b.prototype.chain = Mw, b.prototype.commit = Nw, b.prototype.next = Dw, b.prototype.plant = Iw, b.prototype.reverse = Pw, b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = Lw, b.prototype.first = b.prototype.head, Lo && (b.prototype[Lo] = Rw), b;
    }, $i = N0();
    ii ? ((ii.exports = $i)._ = $i, _l._ = $i) : _t._ = $i;
  }).call(Zo);
})(zt, zt.exports);
const YE = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["component"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.component.id);
    }
    return { onDeleteClick: t };
  }
};
function XE(n, e, t, r, i, s) {
  const a = ve("router-link");
  return F(), H("tr", null, [
    k("td", null, Ue(t.component.id), 1),
    k("td", null, [
      Ke(a, {
        to: "/components/" + t.component.id
      }, {
        default: Rt(() => [
          Ft(Ue(t.component.component), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    k("td", null, [
      k("button", {
        onClick: e[0] || (e[0] = tt((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const ZE = /* @__PURE__ */ Ae(YE, [["render", XE]]), QE = {
  name: "LaravelCmsAdminComponentAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = _e({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = Ne(() => t.value.name != null && t.value.identifier != null);
    return { newPath: t, onSubmit: r, valid: i };
  }
}, eC = { class: "form-group form-inline mx-2" }, tC = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), nC = { class: "form-group form-inline mx-2" }, rC = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), iC = ["disabled"];
function oC(n, e, t, r, i, s) {
  return F(), H("form", {
    onSubmit: e[2] || (e[2] = tt((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    k("fieldset", null, [
      k("div", eC, [
        tC,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newPath.name = a)
        }, null, 512), [
          [nt, r.newPath.name]
        ])
      ]),
      k("div", nC, [
        rC,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newPath.identifier = a)
        }, null, 512), [
          [nt, r.newPath.identifier]
        ])
      ]),
      k("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Path ", 8, iC)
    ])
  ], 32);
}
const sC = /* @__PURE__ */ Ae(QE, [["render", oC]]), aC = {
  name: "LaravelCmsAdminComponents",
  components: {
    ListItem: ZE,
    AddForm: sC
  },
  setup(n, { emit: e }) {
    const t = _e([]), r = _e(!1);
    async function i() {
      let u = "/api/cms-components?" + new URLSearchParams({
        "q[]": ["is_global[eq]=TRUE"]
      }).toString();
      const d = await (await fetch(u)).json();
      t.value = d.data, r.value = !0;
    }
    async function s(u) {
      const p = await fetch("/api/cms-components", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(template)
      }), d = await p.json();
      if (!p.ok) {
        de({
          title: d.message,
          type: "error"
        });
        return;
      }
      t.value.push(d.data), de({
        title: "New component added.",
        type: "success"
      }), t.value.push(Object.assign(u, d.data));
    }
    async function a(u) {
      if (!(await fetch("/api/cms-components/" + u, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })).ok) {
        de({
          title: json.message,
          type: "error"
        });
        return;
      }
      de({
        title: "Template deleted.",
        type: "warn"
      });
      var d = t.value.map((h) => h.id).indexOf(u);
      ~d && t.value.splice(d, 1);
    }
    return i(), {
      componentsSorted: Ne(() => zt.exports.sortBy(t.value || [], (u) => u.component)),
      loaded: r,
      onAdd: s,
      onDelete: a
    };
  }
}, lC = /* @__PURE__ */ k("h2", null, "Components", -1), cC = {
  key: 0,
  class: "table"
}, uC = { key: 1 }, fC = { key: 2 };
function dC(n, e, t, r, i, s) {
  const a = ve("add-form"), c = ve("list-item");
  return F(), H(Re, null, [
    lC,
    Ke(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.componentsSorted.length ? (F(), H("table", cC, [
      (F(!0), H(Re, null, vt(r.componentsSorted, (u) => (F(), ht(c, {
        key: u.id,
        component: u,
        onDelete: r.onDelete
      }, null, 8, ["component", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), H("p", uC, "There are no components.")) : (F(), H("p", fC, "Loading..."))
  ], 64);
}
const pC = /* @__PURE__ */ Ae(aC, [["render", dC]]), hC = {};
function mC(n, e) {
  return null;
}
const gC = /* @__PURE__ */ Ae(hC, [["render", mC]]), yC = {
  name: "LaravelCmsAdminMediaAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = _e({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    function i() {
      t.value.file = "Set";
    }
    const s = Ne(() => t.value.caption != null && t.value.file != null);
    return { newMedia: t, onSubmit: r, onFileChanged: i, valid: s };
  }
}, vC = { class: "form-group form-inline mx-2" }, bC = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "caption"
}, "Caption", -1), wC = { class: "form-group form-inline mx-2" }, xC = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "file"
}, "File", -1), _C = ["disabled"];
function SC(n, e, t, r, i, s) {
  return F(), H("form", {
    onSubmit: e[2] || (e[2] = tt((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    k("fieldset", null, [
      k("div", vC, [
        bC,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "caption",
          id: "caption",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newMedia.caption = a)
        }, null, 512), [
          [nt, r.newMedia.caption]
        ])
      ]),
      k("div", wC, [
        xC,
        k("input", {
          class: "form-input",
          type: "file",
          name: "file",
          id: "file",
          onChange: e[1] || (e[1] = (...a) => r.onFileChanged && r.onFileChanged(...a))
        }, null, 32)
      ]),
      k("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Media ", 8, _C)
    ])
  ], 32);
}
const kC = /* @__PURE__ */ Ae(yC, [["render", SC]]), EC = {
  name: "LaravelCmsAdminMedia",
  components: {
    ListItem: gC,
    AddForm: kC
  },
  setup(n, { emit: e }) {
    const t = _e([]), r = _e(!1);
    async function i() {
      const p = await (await fetch("/api/cms-media")).json();
      t.value = p.data, r.value = !0;
    }
    async function s(u) {
      const p = await fetch("/api/cms-media", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(template)
      }), d = await p.json();
      if (!p.ok) {
        de({
          title: d.message,
          type: "error"
        });
        return;
      }
      t.value.push(d.data), de({
        title: "New path added.",
        type: "success"
      }), paths.value.push(Object.assign(u, d.data));
    }
    async function a(u) {
      if (!(await fetch("/api/cms-media/" + u, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })).ok) {
        de({
          title: json.message,
          type: "error"
        });
        return;
      }
      de({
        title: "Media deleted.",
        type: "warn"
      });
      var d = paths.value.map((h) => h.id).indexOf(u);
      ~d && paths.value.splice(d, 1);
    }
    return i(), {
      mediaSorted: Ne(() => zt.exports.sortBy(t.value || [], (u) => u.created_at)),
      loaded: r,
      onAdd: s,
      onDelete: a
    };
  }
}, CC = /* @__PURE__ */ k("h2", null, "Media", -1), OC = {
  key: 0,
  class: "table"
}, TC = { key: 1 }, AC = { key: 2 };
function MC(n, e, t, r, i, s) {
  const a = ve("add-form"), c = ve("list-item");
  return F(), H(Re, null, [
    CC,
    Ke(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.mediaSorted.length ? (F(), H("table", OC, [
      (F(!0), H(Re, null, vt(r.mediaSorted, (u) => (F(), ht(c, {
        key: u.id,
        media: u,
        onDelete: r.onDelete
      }, null, 8, ["media", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), H("p", TC, "There is no uploaded media.")) : (F(), H("p", AC, "Loading..."))
  ], 64);
}
const NC = /* @__PURE__ */ Ae(EC, [["render", MC]]), DC = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["page"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.page.id);
    }
    return { onDeleteClick: t };
  }
};
function RC(n, e, t, r, i, s) {
  var c;
  const a = ve("router-link");
  return F(), H("tr", null, [
    k("td", null, Ue(t.page.id), 1),
    k("td", null, [
      Ke(a, {
        to: "/pages/" + t.page.id
      }, {
        default: Rt(() => [
          Ft(Ue(t.page.name), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    k("td", null, Ue(t.page.title), 1),
    k("td", null, Ue(t.page.path), 1),
    k("td", null, Ue((c = t.page.template) == null ? void 0 : c.name), 1),
    k("td", null, [
      k("button", {
        onClick: e[0] || (e[0] = tt((...u) => r.onDeleteClick && r.onDeleteClick(...u), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const IC = /* @__PURE__ */ Ae(DC, [["render", RC]]), PC = {
  name: "LaravelCmsAdminPageAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = _e({}), r = _e([]);
    async function i() {
      const p = await (await fetch("/api/cms-templates")).json();
      r.value = p.data;
    }
    async function s() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    function a() {
      t.value.path || (t.value.path = "/" + t.value.title.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-"));
    }
    i();
    const c = Ne(() => t.value.name != null && t.value.title != null && t.value.path != null && t.value.cms_template_id != null);
    return { newPage: t, templates: r, onSubmit: s, onTitleBlur: a, valid: c };
  }
}, LC = { class: "form-group form-inline mx-2" }, BC = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), $C = { class: "form-group form-inline mx-2" }, FC = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "title"
}, "Title", -1), VC = { class: "form-group form-inline mx-2" }, zC = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "template"
}, "Template", -1), HC = /* @__PURE__ */ k("option", null, null, -1), WC = ["value"], UC = { class: "form-group form-inline mx-2" }, jC = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), qC = ["disabled"], KC = { key: 1 };
function JC(n, e, t, r, i, s) {
  const a = ve("router-link");
  return r.templates.length ? (F(), H("form", {
    key: 0,
    onSubmit: e[5] || (e[5] = tt((...c) => r.onSubmit && r.onSubmit(...c), ["prevent"]))
  }, [
    k("fieldset", null, [
      k("div", LC, [
        BC,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (c) => r.newPage.name = c)
        }, null, 512), [
          [nt, r.newPage.name]
        ])
      ]),
      k("div", $C, [
        FC,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "title",
          id: "title",
          onBlur: e[1] || (e[1] = (...c) => r.onTitleBlur && r.onTitleBlur(...c)),
          "onUpdate:modelValue": e[2] || (e[2] = (c) => r.newPage.title = c)
        }, null, 544), [
          [nt, r.newPage.title]
        ])
      ]),
      k("div", VC, [
        zC,
        Ie(k("select", {
          class: "form-select",
          name: "template",
          id: "template",
          "onUpdate:modelValue": e[3] || (e[3] = (c) => r.newPage.cms_template_id = c)
        }, [
          HC,
          (F(!0), H(Re, null, vt(r.templates, (c) => (F(), H("option", {
            key: c.id,
            value: c.id
          }, Ue(c.name), 9, WC))), 128))
        ], 512), [
          [
            vi,
            r.newPage.cms_template_id,
            void 0,
            { number: !0 }
          ]
        ])
      ]),
      k("div", UC, [
        jC,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "path",
          id: "path",
          "onUpdate:modelValue": e[4] || (e[4] = (c) => r.newPage.path = c)
        }, null, 512), [
          [nt, r.newPage.path]
        ])
      ]),
      k("button", {
        class: "mx-2 btn btn-link",
        disabled: !r.valid
      }, " Add Page ", 8, qC)
    ])
  ], 32)) : (F(), H("p", KC, [
    Ft(" You must set up "),
    Ke(a, { to: "/templates" }, {
      default: Rt(() => [
        Ft("templates")
      ]),
      _: 1
    }),
    Ft(" before adding a page. ")
  ]));
}
const GC = /* @__PURE__ */ Ae(PC, [["render", JC]]), YC = {
  name: "LaravelCmsAdminPages",
  components: {
    ListItem: IC,
    AddForm: GC
  },
  setup() {
    const n = fg(), e = _e([]), t = _e(!1);
    async function r() {
      let c = "/api/cms-pages?" + new URLSearchParams({
        "include[]": ["template"]
      }).toString();
      const p = await (await fetch(c)).json();
      e.value = p.data, t.value = !0;
    }
    async function i(c) {
      const u = await fetch("/api/cms-pages", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(c)
      }), p = await u.json();
      if (!u.ok) {
        de({
          title: p.message,
          type: "error"
        });
        return;
      }
      e.value.push(p.data), de({
        title: "New page created.",
        type: "success"
      }), n.push("/pages/" + p.data.id);
    }
    async function s(c) {
      if (!(await fetch("/api/cms-pages/" + c, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })).ok) {
        de({
          title: json.message,
          type: "error"
        });
        return;
      }
      de({
        title: "Page deleted.",
        type: "warn"
      });
      var p = e.value.map((d) => d.id).indexOf(c);
      ~p && e.value.splice(p, 1);
    }
    return r(), {
      pagesSorted: Ne(() => zt.exports.sortBy(e.value || [], (c) => c.name)),
      loaded: t,
      onAdd: i,
      onDelete: s
    };
  }
}, XC = /* @__PURE__ */ k("h2", null, "Add Page", -1), ZC = /* @__PURE__ */ k("h2", null, "Existing Pages", -1), QC = {
  key: 0,
  class: "table"
}, eO = /* @__PURE__ */ k("tr", null, [
  /* @__PURE__ */ k("th", null, "Id"),
  /* @__PURE__ */ k("th", null, "Name"),
  /* @__PURE__ */ k("th", null, "Title"),
  /* @__PURE__ */ k("th", null, "Path"),
  /* @__PURE__ */ k("th", null, "Template"),
  /* @__PURE__ */ k("th")
], -1), tO = { key: 1 }, nO = { key: 2 };
function rO(n, e, t, r, i, s) {
  const a = ve("add-form"), c = ve("list-item");
  return F(), H(Re, null, [
    XC,
    Ke(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    ZC,
    r.loaded && r.pagesSorted.length ? (F(), H("table", QC, [
      eO,
      (F(!0), H(Re, null, vt(r.pagesSorted, (u) => (F(), ht(c, {
        key: u.id,
        page: u,
        onDelete: r.onDelete
      }, null, 8, ["page", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), H("p", tO, "There are no pages.")) : (F(), H("p", nO, "Loading..."))
  ], 64);
}
const iO = /* @__PURE__ */ Ae(YC, [["render", rO]]), oO = {
  name: "LaravelCmsAdminPagePathsListItem",
  props: ["path"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.path.id);
    }
    return { onDeleteClick: t };
  }
};
function sO(n, e, t, r, i, s) {
  return F(), H("tr", null, [
    k("td", null, Ue(t.path.id), 1),
    k("td", null, Ue(t.path.path), 1),
    k("td", null, [
      k("button", {
        onClick: e[0] || (e[0] = tt((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const aO = /* @__PURE__ */ Ae(oO, [["render", sO]]), lO = {
  name: "LaravelCmsAdminPagePathsAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = _e({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = Ne(() => t.value.path != null);
    return { newPath: t, onSubmit: r, valid: i };
  }
}, cO = { class: "form-group form-inline mx-2" }, uO = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), fO = ["disabled"];
function dO(n, e, t, r, i, s) {
  return F(), H("form", {
    onSubmit: e[1] || (e[1] = tt((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    k("fieldset", null, [
      k("div", cO, [
        uO,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "path",
          id: "path",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newPath.path = a)
        }, null, 512), [
          [nt, r.newPath.path]
        ])
      ]),
      k("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Path ", 8, fO)
    ])
  ], 32);
}
const pO = /* @__PURE__ */ Ae(lO, [["render", dO]]), hO = {
  name: "LaravelCmsAdminPaths",
  components: {
    ListItem: aO,
    AddForm: pO
  },
  props: ["page"],
  setup(n, { emit: e }) {
    const t = _e([]), r = _e(!1);
    async function i() {
      const p = await (await fetch(
        "/api/cms-paths?cms_page_id=" + n.page.id
      )).json();
      t.value = p.data, r.value = !0;
    }
    async function s(u) {
      u.cms_page_id = n.page.id;
      const p = await fetch("/api/cms-paths", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(u)
      }), d = await p.json();
      if (!p.ok) {
        de({
          title: d.message,
          type: "error"
        });
        return;
      }
      de({
        title: "New path added.",
        type: "success"
      }), t.value.push(Object.assign(u, d.data));
    }
    async function a(u) {
      if (!(await fetch("/api/cms-paths/" + u, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })).ok) {
        de({
          title: json.message,
          type: "error"
        });
        return;
      }
      de({
        title: "Path deleted.",
        type: "warn"
      });
      var d = t.value.map((h) => h.id).indexOf(u);
      ~d && t.value.splice(d, 1);
    }
    return i(), {
      pathsSorted: Ne(() => zt.exports.sortBy(t.value || [], (u) => u.path)),
      loaded: r,
      onAdd: s,
      onDelete: a
    };
  }
}, mO = {
  key: 0,
  class: "table"
}, gO = /* @__PURE__ */ k("tr", null, [
  /* @__PURE__ */ k("th", null, "Id"),
  /* @__PURE__ */ k("th", { colspan: "2" }, "Path")
], -1), yO = { key: 1 }, vO = { key: 2 };
function bO(n, e, t, r, i, s) {
  const a = ve("add-form"), c = ve("list-item");
  return F(), H(Re, null, [
    Ke(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.pathsSorted.length ? (F(), H("table", mO, [
      gO,
      (F(!0), H(Re, null, vt(r.pathsSorted, (u) => (F(), ht(c, {
        key: u.id,
        path: u,
        onDelete: r.onDelete
      }, null, 8, ["path", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), H("p", yO, "There are no paths.")) : (F(), H("p", vO, "Loading..."))
  ], 64);
}
const wO = /* @__PURE__ */ Ae(hO, [["render", bO]]), xO = {
  name: "LaravelCmsAdminPageComponent",
  props: ["component"],
  components: {},
  emits: ["edit"],
  setup(n, { emit: e }) {
    function t() {
      e("edit", n.component);
    }
    function r() {
      e("delete", n.component);
    }
    const i = Ne(() => n.component.html);
    return { onEditClick: t, onDeleteClick: r, preview: i };
  }
}, _O = { class: "card mb-2" }, SO = { class: "card-header" }, kO = { class: "card-title h5" }, EO = { class: "card-subtitle text-gray" }, CO = ["innerHTML"], OO = { class: "card-footer" };
function TO(n, e, t, r, i, s) {
  return F(), H("div", _O, [
    k("div", SO, [
      k("div", kO, Ue(t.component.name), 1),
      k("div", EO, Ue(t.component.view), 1)
    ]),
    k("div", {
      class: "card-body",
      innerHTML: r.preview
    }, null, 8, CO),
    k("div", OO, [
      k("button", {
        class: "btn btn-link",
        onClick: e[0] || (e[0] = tt((...a) => r.onEditClick && r.onEditClick(...a), ["prevent"]))
      }, " Edit "),
      k("button", {
        class: "btn btn-link text-error float-right",
        onClick: e[1] || (e[1] = tt((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"]))
      }, " Delete ")
    ])
  ]);
}
const pg = /* @__PURE__ */ Ae(xO, [["render", TO]]), AO = {
  name: "LaravelCmsAdminPageUnsortedComponents",
  components: {
    Component: pg
  },
  props: ["templateSections", "components"],
  emits: ["select", "delete"],
  setup(n, { emit: e }) {
    function t(i) {
      e("select", i);
    }
    function r(i) {
      e("delete", i);
    }
    return { onEdit: t, onDelete: r };
  }
}, MO = /* @__PURE__ */ k("p", null, "Unsorted Components", -1), NO = { class: "table mb-2" };
function DO(n, e, t, r, i, s) {
  const a = ve("component");
  return F(), H(Re, null, [
    MO,
    k("table", NO, [
      (F(!0), H(Re, null, vt(t.components, (c) => (F(), ht(a, {
        key: c.id,
        component: c,
        onEdit: r.onEdit,
        onDelete: r.onDelete
      }, null, 8, ["component", "onEdit", "onDelete"]))), 128))
    ])
  ], 64);
}
const RO = /* @__PURE__ */ Ae(AO, [["render", DO]]), IO = {
  name: "LaravelCmsAdminPageTemplateSection",
  props: ["templateSection", "components"],
  components: {
    Component: pg
  },
  setup(n, { emit: e }) {
    async function t(s) {
      e("select", s);
    }
    function r(s) {
      e("delete", s);
    }
    return {
      includedComponents: Ne(() => {
        const s = zt.exports.filter(n.components, (a) => a.cms_template_section_id == n.templateSection.id);
        return zt.exports.sortBy(s, "sort_order");
      }),
      onEdit: t,
      onDelete: r
    };
  }
};
function PO(n, e, t, r, i, s) {
  const a = ve("component");
  return F(), H("fieldset", null, [
    k("legend", null, " Section: " + Ue(t.templateSection.name) + " " + Ue(t.templateSection.id), 1),
    (F(!0), H(Re, null, vt(r.includedComponents, (c) => (F(), ht(a, {
      key: c.id,
      component: c,
      onEdit: r.onEdit,
      onDelete: r.onDelete
    }, null, 8, ["component", "onEdit", "onDelete"]))), 128))
  ]);
}
const LO = /* @__PURE__ */ Ae(IO, [["render", PO]]), BO = {
  name: "LaravelCmsAdminPageTemplateSections",
  components: {
    ListItem: LO
  },
  props: ["templateSections", "components"],
  setup(n, { emit: e }) {
    async function t(i) {
      e("select", i);
    }
    function r(i) {
      e("delete", i);
    }
    return { onSelect: t, onDelete: r };
  }
};
function $O(n, e, t, r, i, s) {
  const a = ve("list-item");
  return F(), H("form", null, [
    k("fieldset", null, [
      (F(!0), H(Re, null, vt(t.templateSections, (c) => (F(), ht(a, {
        key: c.id,
        "template-section": c,
        components: t.components,
        onSelect: r.onSelect,
        onDelete: r.onDelete
      }, null, 8, ["template-section", "components", "onSelect", "onDelete"]))), 128))
    ])
  ]);
}
const FO = /* @__PURE__ */ Ae(BO, [["render", $O]]);
function kt(n) {
  this.content = n;
}
kt.prototype = {
  constructor: kt,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n)
        return e;
    return -1;
  },
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new kt(s);
  },
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new kt(t);
  },
  addToStart: function(n, e) {
    return new kt([n, e].concat(this.remove(n).content));
  },
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new kt(t);
  },
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new kt(i);
  },
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  prepend: function(n) {
    return n = kt.from(n), n.size ? new kt(n.content.concat(this.subtract(n).content)) : this;
  },
  append: function(n) {
    return n = kt.from(n), n.size ? new kt(this.subtract(n).content.concat(n.content)) : this;
  },
  subtract: function(n) {
    var e = this;
    n = kt.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  get size() {
    return this.content.length >> 1;
  }
};
kt.from = function(n) {
  if (n instanceof kt)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new kt(e);
};
function hg(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let a = 0; i.text[a] == s.text[a]; a++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let a = hg(i.content, s.content, t + 1);
      if (a != null)
        return a;
    }
    t += i.nodeSize;
  }
}
function mg(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let a = n.child(--i), c = e.child(--s), u = a.nodeSize;
    if (a == c) {
      t -= u, r -= u;
      continue;
    }
    if (!a.sameMarkup(c))
      return { a: t, b: r };
    if (a.isText && a.text != c.text) {
      let p = 0, d = Math.min(a.text.length, c.text.length);
      for (; p < d && a.text[a.text.length - p - 1] == c.text[c.text.length - p - 1]; )
        p++, t--, r--;
      return { a: t, b: r };
    }
    if (a.content.size || c.content.size) {
      let p = mg(a.content, c.content, t - 1, r - 1);
      if (p)
        return p;
    }
    t -= u, r -= u;
  }
}
class z {
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  nodesBetween(e, t, r, i = 0, s) {
    for (let a = 0, c = 0; c < t; a++) {
      let u = this.content[a], p = c + u.nodeSize;
      if (p > e && r(u, i + c, s || null, a) !== !1 && u.content.size) {
        let d = c + 1;
        u.nodesBetween(Math.max(0, e - d), Math.min(u.content.size, t - d), r, i + d);
      }
      c = p;
    }
  }
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  textBetween(e, t, r, i) {
    let s = "", a = !0;
    return this.nodesBetween(e, t, (c, u) => {
      c.isText ? (s += c.text.slice(Math.max(e, u) - u, t - u), a = !r) : c.isLeaf ? (i ? s += typeof i == "function" ? i(c) : i : c.type.spec.leafText && (s += c.type.spec.leafText(c)), a = !r) : !a && c.isBlock && (s += r, a = !0);
    }, 0), s;
  }
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new z(i, this.size + e.size);
  }
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, a = 0; a < t; s++) {
        let c = this.content[s], u = a + c.nodeSize;
        u > e && ((a < e || u > t) && (c.isText ? c = c.cut(Math.max(0, e - a), Math.min(c.text.length, t - a)) : c = c.cut(Math.max(0, e - a - 1), Math.min(c.content.size, t - a - 1))), r.push(c), i += c.nodeSize), a = u;
      }
    return new z(r, i);
  }
  cutByIndex(e, t) {
    return e == t ? z.empty : e == 0 && t == this.content.length ? this : new z(this.content.slice(e, t));
  }
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new z(i, s);
  }
  addToStart(e) {
    return new z([e].concat(this.content), this.size + e.nodeSize);
  }
  addToEnd(e) {
    return new z(this.content.concat(e), this.size + e.nodeSize);
  }
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  get childCount() {
    return this.content.length;
  }
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  maybeChild(e) {
    return this.content[e] || null;
  }
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  findDiffStart(e, t = 0) {
    return hg(this, e, t);
  }
  findDiffEnd(e, t = this.size, r = e.size) {
    return mg(this, e, t, r);
  }
  findIndex(e, t = -1) {
    if (e == 0)
      return wa(0, e);
    if (e == this.size)
      return wa(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), a = i + s.nodeSize;
      if (a >= e)
        return a == e || t > 0 ? wa(r + 1, a) : wa(r, i);
      i = a;
    }
  }
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  toStringInner() {
    return this.content.join(", ");
  }
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  static fromJSON(e, t) {
    if (!t)
      return z.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new z(t.map(e.nodeFromJSON));
  }
  static fromArray(e) {
    if (!e.length)
      return z.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new z(t || e, r);
  }
  static from(e) {
    if (!e)
      return z.empty;
    if (e instanceof z)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new z([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
z.empty = new z([], 0);
const Rc = { index: 0, offset: 0 };
function wa(n, e) {
  return Rc.index = n, Rc.offset = e, Rc;
}
function Da(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Da(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Da(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
class Ve {
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  eq(e) {
    return this == e || this.type == e.type && Da(this.attrs, e.attrs);
  }
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return r.create(t.attrs);
  }
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Ve.none;
    if (e instanceof Ve)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
}
Ve.none = [];
class Ra extends Error {
}
class Y {
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  insertAt(e, t) {
    let r = yg(this.content, e + this.openStart, t);
    return r && new Y(r, this.openStart, this.openEnd);
  }
  removeBetween(e, t) {
    return new Y(gg(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  static fromJSON(e, t) {
    if (!t)
      return Y.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new Y(z.fromJSON(e, t.content), r, i);
  }
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new Y(e, r, i);
  }
}
Y.empty = new Y(z.empty, 0, 0);
function gg(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: a, offset: c } = n.findIndex(t);
  if (i == e || s.isText) {
    if (c != t && !n.child(a).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != a)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(gg(s.content, e - i - 1, t - i - 1)));
}
function yg(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), a = n.maybeChild(i);
  if (s == e || a.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let c = yg(a.content, e - s - 1, t);
  return c && n.replaceChild(i, a.copy(c));
}
function VO(n, e, t) {
  if (t.openStart > n.depth)
    throw new Ra("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Ra("Inconsistent open depths");
  return vg(n, e, t, 0);
}
function vg(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let a = vg(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, a));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let a = n.parent, c = a.content;
      return wi(a, c.cut(0, n.parentOffset).append(t.content).append(c.cut(e.parentOffset)));
    } else {
      let { start: a, end: c } = zO(t, n);
      return wi(s, wg(n, a, c, e, r));
    }
  else
    return wi(s, Ia(n, e, r));
}
function bg(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Ra("Cannot join " + e.type.name + " onto " + n.type.name);
}
function hu(n, e, t) {
  let r = n.node(t);
  return bg(r, e.node(t)), r;
}
function bi(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function ls(n, e, t, r) {
  let i = (e || n).node(t), s = 0, a = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (bi(n.nodeAfter, r), s++));
  for (let c = s; c < a; c++)
    bi(i.child(c), r);
  e && e.depth == t && e.textOffset && bi(e.nodeBefore, r);
}
function wi(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function wg(n, e, t, r, i) {
  let s = n.depth > i && hu(n, e, i + 1), a = r.depth > i && hu(t, r, i + 1), c = [];
  return ls(null, n, i, c), s && a && e.index(i) == t.index(i) ? (bg(s, a), bi(wi(s, wg(n, e, t, r, i + 1)), c)) : (s && bi(wi(s, Ia(n, e, i + 1)), c), ls(e, t, i, c), a && bi(wi(a, Ia(t, r, i + 1)), c)), ls(r, null, i, c), new z(c);
}
function Ia(n, e, t) {
  let r = [];
  if (ls(null, n, t, r), n.depth > t) {
    let i = hu(n, e, t + 1);
    bi(wi(i, Ia(n, e, t + 1)), r);
  }
  return ls(e, null, t, r), new z(r);
}
function zO(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(z.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class ys {
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  get parent() {
    return this.node(this.depth);
  }
  get doc() {
    return this.node(0);
  }
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return Ve.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let c = r;
      r = i, i = c;
    }
    let s = r.marks;
    for (var a = 0; a < s.length; a++)
      s[a].type.spec.inclusive === !1 && (!i || !s[a].isInSet(i.marks)) && (s = s[a--].removeFromSet(s));
    return s;
  }
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Pa(this, e, r);
    return null;
  }
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let a = e; ; ) {
      let { index: c, offset: u } = a.content.findIndex(s), p = s - u;
      if (r.push(a, c, i + u), !p || (a = a.child(c), a.isText))
        break;
      s = p - 1, i += u + 1;
    }
    return new ys(t, r, s);
  }
  static resolveCached(e, t) {
    for (let i = 0; i < Ic.length; i++) {
      let s = Ic[i];
      if (s.pos == t && s.doc == e)
        return s;
    }
    let r = Ic[Pc] = ys.resolve(e, t);
    return Pc = (Pc + 1) % HO, r;
  }
}
let Ic = [], Pc = 0, HO = 12;
class Pa {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  get start() {
    return this.$from.before(this.depth + 1);
  }
  get end() {
    return this.$to.after(this.depth + 1);
  }
  get parent() {
    return this.$from.node(this.depth);
  }
  get startIndex() {
    return this.$from.index(this.depth);
  }
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const WO = /* @__PURE__ */ Object.create(null);
class nr {
  constructor(e, t, r, i = Ve.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || z.empty;
  }
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  get childCount() {
    return this.content.childCount;
  }
  child(e) {
    return this.content.child(e);
  }
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  forEach(e) {
    this.content.forEach(e);
  }
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  get firstChild() {
    return this.content.firstChild;
  }
  get lastChild() {
    return this.content.lastChild;
  }
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  hasMarkup(e, t, r) {
    return this.type == e && Da(this.attrs, t || e.defaultAttrs || WO) && Ve.sameSet(this.marks, r || Ve.none);
  }
  copy(e = null) {
    return e == this.content ? this : new nr(this.type, this.attrs, e, this.marks);
  }
  mark(e) {
    return e == this.marks ? this : new nr(this.type, this.attrs, this.content, e);
  }
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return Y.empty;
    let i = this.resolve(e), s = this.resolve(t), a = r ? 0 : i.sharedDepth(t), c = i.start(a), p = i.node(a).content.cut(i.pos - c, s.pos - c);
    return new Y(p, i.depth - a, s.depth - a);
  }
  replace(e, t, r) {
    return VO(this.resolve(e), this.resolve(t), r);
  }
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  resolve(e) {
    return ys.resolveCached(this, e);
  }
  resolveNoCache(e) {
    return ys.resolve(this, e);
  }
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  get isBlock() {
    return this.type.isBlock;
  }
  get isTextblock() {
    return this.type.isTextblock;
  }
  get inlineContent() {
    return this.type.inlineContent;
  }
  get isInline() {
    return this.type.isInline;
  }
  get isText() {
    return this.type.isText;
  }
  get isLeaf() {
    return this.type.isLeaf;
  }
  get isAtom() {
    return this.type.isAtom;
  }
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), xg(this.marks, e);
  }
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  canReplace(e, t, r = z.empty, i = 0, s = r.childCount) {
    let a = this.contentMatchAt(e).matchFragment(r, i, s), c = a && a.matchFragment(this.content, t);
    if (!c || !c.validEnd)
      return !1;
    for (let u = i; u < s; u++)
      if (!this.type.allowsMarks(r.child(u).marks))
        return !1;
    return !0;
  }
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), a = s && s.matchFragment(this.content, t);
    return a ? a.validEnd : !1;
  }
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  check() {
    this.type.checkContent(this.content);
    let e = Ve.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!Ve.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r = null;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = z.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, r);
  }
}
nr.prototype.text = void 0;
class La extends nr {
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : xg(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new La(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new La(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function xg(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Ei {
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  static parse(e, t) {
    let r = new UO(e, t);
    if (r.next == null)
      return Ei.empty;
    let i = _g(r);
    r.next && r.err("Unexpected trailing text");
    let s = XO(YO(i));
    return ZO(s, r), s;
  }
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(a, c) {
      let u = a.matchFragment(e, r);
      if (u && (!t || u.validEnd))
        return z.from(c.map((p) => p.createAndFill()));
      for (let p = 0; p < a.next.length; p++) {
        let { type: d, next: h } = a.next[p];
        if (!(d.isText || d.hasRequiredAttrs()) && i.indexOf(h) == -1) {
          i.push(h);
          let g = s(h, c.concat(d));
          if (g)
            return g;
        }
      }
      return null;
    }
    return s(this, []);
  }
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let a = [];
        for (let c = i; c.type; c = c.via)
          a.push(c.type);
        return a.reverse();
      }
      for (let a = 0; a < s.next.length; a++) {
        let { type: c, next: u } = s.next[a];
        !c.isLeaf && !c.hasRequiredAttrs() && !(c.name in t) && (!i.type || u.validEnd) && (r.push({ match: c.contentMatch, type: c, via: i }), t[c.name] = !0);
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let a = 0; a < r.next.length; a++)
        s += (a ? ", " : "") + r.next[a].type.name + "->" + e.indexOf(r.next[a].next);
      return s;
    }).join(`
`);
  }
}
Ei.empty = new Ei(!0);
class UO {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function _g(n) {
  let e = [];
  do
    e.push(jO(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function jO(n) {
  let e = [];
  do
    e.push(qO(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function qO(n) {
  let e = GO(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = KO(n, e);
    else
      break;
  return e;
}
function uh(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function KO(n, e) {
  let t = uh(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = uh(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function JO(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let a = t[s];
    a.groups.indexOf(e) > -1 && i.push(a);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function GO(n) {
  if (n.eat("(")) {
    let e = _g(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = JO(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function YO(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(a, c, u) {
    let p = { term: u, to: c };
    return e[a].push(p), p;
  }
  function i(a, c) {
    a.forEach((u) => u.to = c);
  }
  function s(a, c) {
    if (a.type == "choice")
      return a.exprs.reduce((u, p) => u.concat(s(p, c)), []);
    if (a.type == "seq")
      for (let u = 0; ; u++) {
        let p = s(a.exprs[u], c);
        if (u == a.exprs.length - 1)
          return p;
        i(p, c = t());
      }
    else if (a.type == "star") {
      let u = t();
      return r(c, u), i(s(a.expr, u), u), [r(u)];
    } else if (a.type == "plus") {
      let u = t();
      return i(s(a.expr, c), u), i(s(a.expr, u), u), [r(u)];
    } else {
      if (a.type == "opt")
        return [r(c)].concat(s(a.expr, c));
      if (a.type == "range") {
        let u = c;
        for (let p = 0; p < a.min; p++) {
          let d = t();
          i(s(a.expr, u), d), u = d;
        }
        if (a.max == -1)
          i(s(a.expr, u), u);
        else
          for (let p = a.min; p < a.max; p++) {
            let d = t();
            r(u, d), i(s(a.expr, u), d), u = d;
          }
        return [r(u)];
      } else {
        if (a.type == "name")
          return [r(c, void 0, a.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Sg(n, e) {
  return e - n;
}
function fh(n, e) {
  let t = [];
  return r(e), t.sort(Sg);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let a = 0; a < s.length; a++) {
      let { term: c, to: u } = s[a];
      !c && t.indexOf(u) == -1 && r(u);
    }
  }
}
function XO(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(fh(n, 0));
  function t(r) {
    let i = [];
    r.forEach((a) => {
      n[a].forEach(({ term: c, to: u }) => {
        if (!c)
          return;
        let p;
        for (let d = 0; d < i.length; d++)
          i[d][0] == c && (p = i[d][1]);
        fh(n, u).forEach((d) => {
          p || i.push([c, p = []]), p.indexOf(d) == -1 && p.push(d);
        });
      });
    });
    let s = e[r.join(",")] = new Ei(r.indexOf(n.length - 1) > -1);
    for (let a = 0; a < i.length; a++) {
      let c = i[a][1].sort(Sg);
      s.next.push({ type: i[a][0], next: e[c.join(",")] || t(c) });
    }
    return s;
  }
}
function ZO(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, a = [];
    for (let c = 0; c < i.next.length; c++) {
      let { type: u, next: p } = i.next[c];
      a.push(u.name), s && !(u.isText || u.hasRequiredAttrs()) && (s = !1), r.indexOf(p) == -1 && r.push(p);
    }
    s && e.err("Only non-generatable nodes (" + a.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function kg(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Eg(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Cg(n) {
  let e = /* @__PURE__ */ Object.create(null);
  if (n)
    for (let t in n)
      e[t] = new QO(n[t]);
  return e;
}
class Ba {
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Cg(r.attrs), this.defaultAttrs = kg(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == Ei.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Eg(this.attrs, e);
  }
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new nr(this, this.computeAttrs(e), z.from(t), Ve.setFrom(r));
  }
  createChecked(e = null, t, r) {
    return t = z.from(t), this.checkContent(t), new nr(this, this.computeAttrs(e), t, Ve.setFrom(r));
  }
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = z.from(t), t.size) {
      let a = this.contentMatch.fillBefore(t);
      if (!a)
        return null;
      t = a.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(z.empty, !0);
    return s ? new nr(this, e, t.append(s), Ve.setFrom(r)) : null;
  }
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : Ve.none : e;
  }
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, a) => r[s] = new Ba(s, t, a));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
}
class QO {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class tl {
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = Cg(i.attrs), this.excluded = null;
    let s = kg(this.attrs);
    this.instance = s ? new Ve(this, s) : null;
  }
  create(e = null) {
    return !e && this.instance ? this.instance : new Ve(this, Eg(this.attrs, e));
  }
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, a) => r[s] = new tl(s, i++, t, a)), r;
  }
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class eT {
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null), this.spec = {
      nodes: kt.from(e.nodes),
      marks: kt.from(e.marks || {}),
      topNode: e.topNode
    }, this.nodes = Ba.compile(this.spec.nodes, this), this.marks = tl.compile(this.spec.marks, this);
    let t = /* @__PURE__ */ Object.create(null);
    for (let r in this.nodes) {
      if (r in this.marks)
        throw new RangeError(r + " can not be both a node and a mark");
      let i = this.nodes[r], s = i.spec.content || "", a = i.spec.marks;
      i.contentMatch = t[s] || (t[s] = Ei.parse(s, this.nodes)), i.inlineContent = i.contentMatch.inlineContent, i.markSet = a == "_" ? null : a ? dh(this, a.split(" ")) : a == "" || !i.inlineContent ? [] : null;
    }
    for (let r in this.marks) {
      let i = this.marks[r], s = i.spec.excludes;
      i.excluded = s == null ? [i] : s == "" ? [] : dh(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Ba) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  text(e, t) {
    let r = this.nodes.text;
    return new La(r, r.defaultAttrs, e, Ve.setFrom(t));
  }
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  nodeFromJSON(e) {
    return nr.fromJSON(this, e);
  }
  markFromJSON(e) {
    return Ve.fromJSON(this, e);
  }
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function dh(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], a = s;
    if (s)
      t.push(s);
    else
      for (let c in n.marks) {
        let u = n.marks[c];
        (i == "_" || u.spec.group && u.spec.group.split(" ").indexOf(i) > -1) && t.push(a = u);
      }
    if (!a)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
class fo {
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [], t.forEach((r) => {
      r.tag ? this.tags.push(r) : r.style && this.styles.push(r);
    }), this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return !1;
      let i = e.nodes[r.node];
      return i.contentMatch.matchType(i);
    });
  }
  parse(e, t = {}) {
    let r = new hh(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  parseSlice(e, t = {}) {
    let r = new hh(this, t, !0);
    return r.addAll(e, t.from, t.to), Y.maxOpen(r.finish());
  }
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (rT(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let a = s.getAttrs(e);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let a = this.styles[s], c = a.style;
      if (!(c.indexOf(e) != 0 || a.context && !r.matchesContext(a.context) || c.length > e.length && (c.charCodeAt(e.length) != 61 || c.slice(e.length + 1) != t))) {
        if (a.getAttrs) {
          let u = a.getAttrs(t);
          if (u === !1)
            continue;
          a.attrs = u || void 0;
        }
        return a;
      }
    }
  }
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, a = 0;
      for (; a < t.length; a++) {
        let c = t[a];
        if ((c.priority == null ? 50 : c.priority) < s)
          break;
      }
      t.splice(a, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((a) => {
        r(a = mh(a)), a.mark = i;
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((a) => {
        r(a = mh(a)), a.node = i;
      });
    }
    return t;
  }
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new fo(e, fo.schemaRules(e)));
  }
}
const Og = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, tT = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Tg = { ol: !0, ul: !0 }, $a = 1, Fa = 2, cs = 4;
function ph(n, e, t) {
  return e != null ? (e ? $a : 0) | (e === "full" ? Fa : 0) : n && n.whitespace == "pre" ? $a | Fa : t & ~cs;
}
class xa {
  constructor(e, t, r, i, s, a, c) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = s, this.options = c, this.content = [], this.activeMarks = Ve.none, this.stashMarks = [], this.match = a || (c & cs ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(z.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & $a)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = z.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(z.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
      let i = r[t];
      (this.type ? this.type.allowsMarkType(i.type) : oT(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Og.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class hh {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, s, a = ph(null, t.preserveWhitespace, 0) | (r ? cs : 0);
    i ? s = new xa(i.type, i.attrs, Ve.none, Ve.none, !0, t.topMatch || i.type.contentMatch, a) : r ? s = new xa(null, null, Ve.none, Ve.none, !0, null, a) : s = new xa(e.schema.topNodeType, null, Ve.none, Ve.none, !0, null, a), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  addDOM(e) {
    if (e.nodeType == 3)
      this.addTextNode(e);
    else if (e.nodeType == 1) {
      let t = e.getAttribute("style"), r = t ? this.readStyles(iT(t)) : null, i = this.top;
      if (r != null)
        for (let s = 0; s < r.length; s++)
          this.addPendingMark(r[s]);
      if (this.addElement(e), r != null)
        for (let s = 0; s < r.length; s++)
          this.removePendingMark(r[s], i);
    }
  }
  addTextNode(e) {
    let t = e.nodeValue, r = this.top;
    if (r.options & Fa || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (r.options & $a)
        r.options & Fa ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], s = e.previousSibling;
        (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  addElement(e, t) {
    let r = e.nodeName.toLowerCase(), i;
    Tg.hasOwnProperty(r) && this.parser.normalizeLists && nT(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (s ? s.ignore : tT.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let a, c = this.top, u = this.needsBlock;
      if (Og.hasOwnProperty(r))
        c.content.length && c.content[0].isInline && this.open && (this.open--, c = this.top), a = !0, c.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      this.addAll(e), a && this.sync(c), this.needsBlock = u;
    } else
      this.addElementByRule(e, s, s.consuming === !1 ? i : void 0);
  }
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  readStyles(e) {
    let t = Ve.none;
    e:
      for (let r = 0; r < e.length; r += 2)
        for (let i = void 0; ; ) {
          let s = this.parser.matchStyle(e[r], e[r + 1], this, i);
          if (!s)
            continue e;
          if (s.ignore)
            return null;
          if (t = this.parser.schema.marks[s.mark].create(s.attrs).addToSet(t), s.consuming === !1)
            i = s;
          else
            break;
        }
    return t;
  }
  addElementByRule(e, t, r) {
    let i, s, a;
    t.node ? (s = this.parser.schema.nodes[t.node], s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : i = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (a = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(a));
    let c = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((u) => this.insertNode(u));
    else {
      let u = e;
      typeof t.contentElement == "string" ? u = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? u = t.contentElement(e) : t.contentElement && (u = t.contentElement), this.findAround(e, u, !0), this.addAll(u);
    }
    i && this.sync(c) && this.open--, a && this.removePendingMark(a, c);
  }
  addAll(e, t, r) {
    let i = t || 0;
    for (let s = t ? e.childNodes[t] : e.firstChild, a = r == null ? null : e.childNodes[r]; s != a; s = s.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(s);
    this.findAtPoint(e, i);
  }
  findPlace(e) {
    let t, r;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], a = s.findWrapping(e);
      if (a && (!t || t.length > a.length) && (t = a, r = s, !a.length) || s.solid)
        break;
    }
    if (!t)
      return !1;
    this.sync(r);
    for (let i = 0; i < t.length; i++)
      this.enterInner(t[i], null, !1);
    return !0;
  }
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let t = this.textblockFromContext();
      t && this.enterInner(t);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let t = this.top;
      t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
      let r = t.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return t.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  enter(e, t, r) {
    let i = this.findPlace(e.create(t));
    return i && this.enterInner(e, t, !0, r), i;
  }
  enterInner(e, t = null, r = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.applyPending(e), s.match = s.match && s.match.matchType(e);
    let a = ph(e, i, s.options);
    s.options & cs && s.content.length == 0 && (a |= cs), this.nodes.push(new xa(e, t, s.activeMarks, s.pendingMarks, r, null, a)), this.open++;
  }
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), a = (c, u) => {
      for (; c >= 0; c--) {
        let p = t[c];
        if (p == "") {
          if (c == t.length - 1 || c == 0)
            continue;
          for (; u >= s; u--)
            if (a(c - 1, u))
              return !0;
          return !1;
        } else {
          let d = u > 0 || u == 0 && i ? this.nodes[u].type : r && u >= s ? r.node(u - s).type : null;
          if (!d || d.name != p && d.groups.indexOf(p) == -1)
            return !1;
          u--;
        }
      }
      return !0;
    };
    return a(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let t = sT(e, this.top.pendingMarks);
    t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, t) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let a = i.popFromStashMark(e);
        a && i.type && i.type.allowsMarkType(a.type) && (i.activeMarks = a.addToSet(i.activeMarks));
      }
      if (i == t)
        break;
    }
  }
}
function nT(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Tg.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function rT(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function iT(n) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, r = [];
  for (; t = e.exec(n); )
    r.push(t[1], t[2].trim());
  return r;
}
function mh(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function oT(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], a = (c) => {
      s.push(c);
      for (let u = 0; u < c.edgeCount; u++) {
        let { type: p, next: d } = c.edge(u);
        if (p == e || s.indexOf(d) < 0 && a(d))
          return !0;
      }
    };
    if (a(i.contentMatch))
      return !0;
  }
}
function sT(n, e) {
  for (let t = 0; t < e.length; t++)
    if (n.eq(e[t]))
      return e[t];
}
class er {
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  serializeFragment(e, t = {}, r) {
    r || (r = Lc(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((a) => {
      if (s.length || a.marks.length) {
        let c = 0, u = 0;
        for (; c < s.length && u < a.marks.length; ) {
          let p = a.marks[u];
          if (!this.marks[p.type.name]) {
            u++;
            continue;
          }
          if (!p.eq(s[c][0]) || p.type.spec.spanning === !1)
            break;
          c++, u++;
        }
        for (; c < s.length; )
          i = s.pop()[1];
        for (; u < a.marks.length; ) {
          let p = a.marks[u++], d = this.serializeMark(p, a.isInline, t);
          d && (s.push([p, i]), i.appendChild(d.dom), i = d.contentDOM || d.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(a, t));
    }), r;
  }
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = er.renderSpec(Lc(t), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && er.renderSpec(Lc(r), i(e, t));
  }
  static renderSpec(e, t, r = null) {
    if (typeof t == "string")
      return { dom: e.createTextNode(t) };
    if (t.nodeType != null)
      return { dom: t };
    if (t.dom && t.dom.nodeType != null)
      return t;
    let i = t[0], s = i.indexOf(" ");
    s > 0 && (r = i.slice(0, s), i = i.slice(s + 1));
    let a, c = r ? e.createElementNS(r, i) : e.createElement(i), u = t[1], p = 1;
    if (u && typeof u == "object" && u.nodeType == null && !Array.isArray(u)) {
      p = 2;
      for (let d in u)
        if (u[d] != null) {
          let h = d.indexOf(" ");
          h > 0 ? c.setAttributeNS(d.slice(0, h), d.slice(h + 1), u[d]) : c.setAttribute(d, u[d]);
        }
    }
    for (let d = p; d < t.length; d++) {
      let h = t[d];
      if (h === 0) {
        if (d < t.length - 1 || d > p)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: c, contentDOM: c };
      } else {
        let { dom: g, contentDOM: y } = er.renderSpec(e, h, r);
        if (c.appendChild(g), y) {
          if (a)
            throw new RangeError("Multiple content holes");
          a = y;
        }
      }
    }
    return { dom: c, contentDOM: a };
  }
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new er(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  static nodesFromSchema(e) {
    let t = gh(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  static marksFromSchema(e) {
    return gh(e.marks);
  }
}
function gh(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function Lc(n) {
  return n.document || window.document;
}
const Ag = 65535, Mg = Math.pow(2, 16);
function aT(n, e) {
  return n + e * Mg;
}
function yh(n) {
  return n & Ag;
}
function lT(n) {
  return (n - (n & Ag)) / Mg;
}
const Ng = 1, Dg = 2, Oa = 4, Rg = 8;
class mu {
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  get deleted() {
    return (this.delInfo & Rg) > 0;
  }
  get deletedBefore() {
    return (this.delInfo & (Ng | Oa)) > 0;
  }
  get deletedAfter() {
    return (this.delInfo & (Dg | Oa)) > 0;
  }
  get deletedAcross() {
    return (this.delInfo & Oa) > 0;
  }
}
class Tn {
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && Tn.empty)
      return Tn.empty;
  }
  recover(e) {
    let t = 0, r = yh(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + lT(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
    for (let c = 0; c < this.ranges.length; c += 3) {
      let u = this.ranges[c] - (this.inverted ? i : 0);
      if (u > e)
        break;
      let p = this.ranges[c + s], d = this.ranges[c + a], h = u + p;
      if (e <= h) {
        let g = p ? e == u ? -1 : e == h ? 1 : t : t, y = u + i + (g < 0 ? 0 : d);
        if (r)
          return y;
        let x = e == (t < 0 ? u : h) ? null : aT(c / 3, e - u), _ = e == u ? Dg : e == h ? Ng : Oa;
        return (t < 0 ? e != u : e != h) && (_ |= Rg), new mu(y, _, x);
      }
      i += d - p;
    }
    return r ? e + i : new mu(e + i, 0, null);
  }
  touches(e, t) {
    let r = 0, i = yh(t), s = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
    for (let c = 0; c < this.ranges.length; c += 3) {
      let u = this.ranges[c] - (this.inverted ? r : 0);
      if (u > e)
        break;
      let p = this.ranges[c + s], d = u + p;
      if (e <= d && c == i * 3)
        return !0;
      r += this.ranges[c + a] - p;
    }
    return !1;
  }
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let a = this.ranges[i], c = a - (this.inverted ? s : 0), u = a + (this.inverted ? 0 : s), p = this.ranges[i + t], d = this.ranges[i + r];
      e(c, c + p, u, u + d), s += d - p;
    }
  }
  invert() {
    return new Tn(this.ranges, !this.inverted);
  }
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  static offset(e) {
    return e == 0 ? Tn.empty : new Tn(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Tn.empty = new Tn([]);
class so {
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  slice(e = 0, t = this.maps.length) {
    return new so(this.maps, this.mirror, e, t);
  }
  copy() {
    return new so(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  invert() {
    let e = new so();
    return e.appendMappingInverted(this), e;
  }
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let a = this.maps[s], c = a.mapResult(e, t);
      if (c.recover != null) {
        let u = this.getMirror(s);
        if (u != null && u > s && u < this.to) {
          s = u, e = this.maps[u].recover(c.recover);
          continue;
        }
      }
      i |= c.delInfo, e = c.pos;
    }
    return r ? e : new mu(e, i, null);
  }
}
const Bc = /* @__PURE__ */ Object.create(null);
class on {
  getMap() {
    return Tn.empty;
  }
  merge(e) {
    return null;
  }
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Bc[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in Bc)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Bc[e] = t, t.prototype.jsonID = e, t;
  }
}
class pt {
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  static ok(e) {
    return new pt(e, null);
  }
  static fail(e) {
    return new pt(null, e);
  }
  static fromReplace(e, t, r, i) {
    try {
      return pt.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof Ra)
        return pt.fail(s.message);
      throw s;
    }
  }
}
function Wu(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(Wu(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return z.fromArray(r);
}
class Hr extends on {
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new Y(Wu(t.content, (a, c) => !a.isAtom || !c.type.allowsMarkType(this.mark.type) ? a : a.mark(this.mark.addToSet(a.marks)), i), t.openStart, t.openEnd);
    return pt.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new tr(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Hr(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Hr && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Hr(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Hr(t.from, t.to, e.markFromJSON(t.mark));
  }
}
on.jsonID("addMark", Hr);
class tr extends on {
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new Y(Wu(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return pt.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Hr(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new tr(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof tr && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new tr(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new tr(t.from, t.to, e.markFromJSON(t.mark));
  }
}
on.jsonID("removeMark", tr);
class Wr extends on {
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return pt.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return pt.fromReplace(e, this.pos, this.pos + 1, new Y(z.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Wr(this.pos, t.marks[i]);
        return new Wr(this.pos, this.mark);
      }
    }
    return new po(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Wr(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Wr(t.pos, e.markFromJSON(t.mark));
  }
}
on.jsonID("addNodeMark", Wr);
class po extends on {
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return pt.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return pt.fromReplace(e, this.pos, this.pos + 1, new Y(z.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Wr(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new po(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new po(t.pos, e.markFromJSON(t.mark));
  }
}
on.jsonID("removeNodeMark", po);
class Dt extends on {
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && gu(e, this.from, this.to) ? pt.fail("Structure replace would overwrite content") : pt.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Tn([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Dt(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new Dt(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof Dt) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? Y.empty : new Y(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Dt(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? Y.empty : new Y(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Dt(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new Dt(t.from, t.to, Y.fromJSON(e, t.slice), !!t.structure);
  }
}
on.jsonID("replace", Dt);
class bt extends on {
  constructor(e, t, r, i, s, a, c = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = a, this.structure = c;
  }
  apply(e) {
    if (this.structure && (gu(e, this.from, this.gapFrom) || gu(e, this.gapTo, this.to)))
      return pt.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return pt.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? pt.fromReplace(e, this.from, this.to, r) : pt.fail("Content does not fit in gap");
  }
  getMap() {
    return new Tn([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new bt(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), s = e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new bt(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new bt(t.from, t.to, t.gapFrom, t.gapTo, Y.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
on.jsonID("replaceAround", bt);
function gu(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let a = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!a || a.isLeaf)
        return !0;
      a = a.firstChild, i--;
    }
  }
  return !1;
}
function cT(n, e, t, r) {
  let i = [], s = [], a, c;
  n.doc.nodesBetween(e, t, (u, p, d) => {
    if (!u.isInline)
      return;
    let h = u.marks;
    if (!r.isInSet(h) && d.type.allowsMarkType(r.type)) {
      let g = Math.max(p, e), y = Math.min(p + u.nodeSize, t), x = r.addToSet(h);
      for (let _ = 0; _ < h.length; _++)
        h[_].isInSet(x) || (a && a.to == g && a.mark.eq(h[_]) ? a.to = y : i.push(a = new tr(g, y, h[_])));
      c && c.to == g ? c.to = y : s.push(c = new Hr(g, y, r));
    }
  }), i.forEach((u) => n.step(u)), s.forEach((u) => n.step(u));
}
function uT(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (a, c) => {
    if (!a.isInline)
      return;
    s++;
    let u = null;
    if (r instanceof tl) {
      let p = a.marks, d;
      for (; d = r.isInSet(p); )
        (u || (u = [])).push(d), p = d.removeFromSet(p);
    } else
      r ? r.isInSet(a.marks) && (u = [r]) : u = a.marks;
    if (u && u.length) {
      let p = Math.min(c + a.nodeSize, t);
      for (let d = 0; d < u.length; d++) {
        let h = u[d], g;
        for (let y = 0; y < i.length; y++) {
          let x = i[y];
          x.step == s - 1 && h.eq(i[y].style) && (g = x);
        }
        g ? (g.to = p, g.step = s) : i.push({ style: h, from: Math.max(c, e), to: p, step: s });
      }
    }
  }), i.forEach((a) => n.step(new tr(a.from, a.to, a.style)));
}
function fT(n, e, t, r = t.contentMatch) {
  let i = n.doc.nodeAt(e), s = [], a = e + 1;
  for (let c = 0; c < i.childCount; c++) {
    let u = i.child(c), p = a + u.nodeSize, d = r.matchType(u.type);
    if (!d)
      s.push(new Dt(a, p, Y.empty));
    else {
      r = d;
      for (let h = 0; h < u.marks.length; h++)
        t.allowsMarkType(u.marks[h].type) || n.step(new tr(a, p, u.marks[h]));
    }
    a = p;
  }
  if (!r.validEnd) {
    let c = r.fillBefore(z.empty, !0);
    n.replace(a, a, new Y(c, 0, 0));
  }
  for (let c = s.length - 1; c >= 0; c--)
    n.step(s[c]);
}
function dT(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function ko(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), a = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, a, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !dT(i, s, a))
      break;
  }
  return null;
}
function pT(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, a = r.before(s + 1), c = i.after(s + 1), u = a, p = c, d = z.empty, h = 0;
  for (let x = s, _ = !1; x > t; x--)
    _ || r.index(x) > 0 ? (_ = !0, d = z.from(r.node(x).copy(d)), h++) : u--;
  let g = z.empty, y = 0;
  for (let x = s, _ = !1; x > t; x--)
    _ || i.after(x + 1) < i.end(x) ? (_ = !0, g = z.from(i.node(x).copy(g)), y++) : p++;
  n.step(new bt(u, p, a, c, new Y(d.append(g), h, y), d.size - h, !0));
}
function Uu(n, e, t = null, r = n) {
  let i = hT(n, e), s = i && mT(r, e);
  return s ? i.map(vh).concat({ type: e, attrs: t }).concat(s.map(vh)) : null;
}
function vh(n) {
  return { type: n, attrs: null };
}
function hT(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let a = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, a) ? s : null;
}
function mT(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), a = e.contentMatch.findWrapping(s.type);
  if (!a)
    return null;
  let u = (a.length ? a[a.length - 1] : e).contentMatch;
  for (let p = r; u && p < i; p++)
    u = u.matchType(t.child(p).type);
  return !u || !u.validEnd ? null : a;
}
function gT(n, e, t) {
  let r = z.empty;
  for (let a = t.length - 1; a >= 0; a--) {
    if (r.size) {
      let c = t[a].type.contentMatch.matchFragment(r);
      if (!c || !c.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = z.from(t[a].type.create(t[a].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new bt(i, s, i, s, new Y(r, 0, 0), t.length, !0));
}
function yT(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (a, c) => {
    if (a.isTextblock && !a.hasMarkup(r, i) && vT(n.doc, n.mapping.slice(s).map(c), r)) {
      n.clearIncompatible(n.mapping.slice(s).map(c, 1), r);
      let u = n.mapping.slice(s), p = u.map(c, 1), d = u.map(c + a.nodeSize, 1);
      return n.step(new bt(p, d, p + 1, d - 1, new Y(z.from(r.create(i, null, a.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function vT(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function bT(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let a = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, a);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new bt(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new Y(z.from(a), 0, 0), 1, !0));
}
function ao(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, a = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !a.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let p = i.depth - 1, d = t - 2; p > s; p--, d--) {
    let h = i.node(p), g = i.index(p);
    if (h.type.spec.isolating)
      return !1;
    let y = h.content.cutByIndex(g, h.childCount), x = r && r[d] || h;
    if (x != h && (y = y.replaceChild(0, x.type.create(x.attrs))), !h.canReplace(g + 1, h.childCount) || !x.type.validContent(y))
      return !1;
  }
  let c = i.indexAfter(s), u = r && r[0];
  return i.node(s).canReplaceWith(c, c, u ? u.type : i.node(s + 1).type);
}
function wT(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = z.empty, a = z.empty;
  for (let c = i.depth, u = i.depth - t, p = t - 1; c > u; c--, p--) {
    s = z.from(i.node(c).copy(s));
    let d = r && r[p];
    a = z.from(d ? d.type.create(d.attrs, a) : i.node(c).copy(a));
  }
  n.step(new Dt(e, e, new Y(s.append(a), t, t), !0));
}
function Eo(n, e) {
  let t = n.resolve(e), r = t.index();
  return xT(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function xT(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function _T(n, e, t) {
  let r = new Dt(e - t, e + t, Y.empty, !0);
  n.step(r);
}
function ST(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function Ig(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let a = r.depth; a >= 0; a--) {
      let c = a == r.depth ? 0 : r.pos <= (r.start(a + 1) + r.end(a + 1)) / 2 ? -1 : 1, u = r.index(a) + (c > 0 ? 1 : 0), p = r.node(a), d = !1;
      if (s == 1)
        d = p.canReplace(u, u, i);
      else {
        let h = p.contentMatchAt(u).findWrapping(i.firstChild.type);
        d = h && p.canReplaceWith(u, u, h[0]);
      }
      if (d)
        return c == 0 ? r.pos : c < 0 ? r.before(a + 1) : r.after(a + 1);
    }
  return null;
}
function ju(n, e, t = e, r = Y.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return Pg(i, s, r) ? new Dt(e, t, r) : new kT(i, s, r).fit();
}
function Pg(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class kT {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = z.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = z.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let p = this.findFittable();
      p ? this.placeNodes(p) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, a = r.depth, c = i.depth;
    for (; a && c && s.childCount == 1; )
      s = s.firstChild.content, a--, c--;
    let u = new Y(s, a, c);
    return e > -1 ? new bt(r.pos, e, this.$to.pos, this.$to.end(), u, t) : u.size || r.pos != this.$to.pos ? new Dt(r.pos, i.pos, u) : null;
  }
  findFittable() {
    for (let e = 1; e <= 2; e++)
      for (let t = this.unplaced.openStart; t >= 0; t--) {
        let r, i = null;
        t ? (i = $c(this.unplaced.content, t - 1).firstChild, r = i.content) : r = this.unplaced.content;
        let s = r.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: c, match: u } = this.frontier[a], p, d = null;
          if (e == 1 && (s ? u.matchType(s.type) || (d = u.fillBefore(z.from(s), !1)) : i && c.compatibleContent(i.type)))
            return { sliceDepth: t, frontierDepth: a, parent: i, inject: d };
          if (e == 2 && s && (p = u.findWrapping(s.type)))
            return { sliceDepth: t, frontierDepth: a, parent: i, wrap: p };
          if (i && u.matchType(i.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = $c(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new Y(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = $c(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new Y(ns(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new Y(ns(e, t, 1), t, r);
  }
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let _ = 0; _ < s.length; _++)
        this.openFrontierNode(s[_]);
    let a = this.unplaced, c = r ? r.content : a.content, u = a.openStart - e, p = 0, d = [], { match: h, type: g } = this.frontier[t];
    if (i) {
      for (let _ = 0; _ < i.childCount; _++)
        d.push(i.child(_));
      h = h.matchFragment(i);
    }
    let y = c.size + e - (a.content.size - a.openEnd);
    for (; p < c.childCount; ) {
      let _ = c.child(p), O = h.matchType(_.type);
      if (!O)
        break;
      p++, (p > 1 || u == 0 || _.content.size) && (h = O, d.push(Lg(_.mark(g.allowedMarks(_.marks)), p == 1 ? u : 0, p == c.childCount ? y : -1)));
    }
    let x = p == c.childCount;
    x || (y = -1), this.placed = rs(this.placed, t, z.from(d)), this.frontier[t].match = h, x && y < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let _ = 0, O = c; _ < y; _++) {
      let M = O.lastChild;
      this.frontier.push({ type: M.type, match: M.contentMatchAt(M.childCount) }), O = M.content;
    }
    this.unplaced = x ? e == 0 ? Y.empty : new Y(ns(a.content, e - 1, 1), e - 1, y < 0 ? a.openEnd : e - 1) : new Y(ns(a.content, e, p), a.openStart, a.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Fc(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), a = Fc(e, t, i, r, s);
        if (!!a) {
          for (let c = t - 1; c >= 0; c--) {
            let { match: u, type: p } = this.frontier[c], d = Fc(e, c, p, u, !0);
            if (!d || d.childCount)
              continue e;
          }
          return { depth: t, fit: a, move: s ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = rs(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = rs(this.placed, this.depth, z.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(z.empty, !0);
    t.childCount && (this.placed = rs(this.placed, this.frontier.length, t));
  }
}
function ns(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(ns(n.firstChild.content, e - 1, t)));
}
function rs(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(rs(n.lastChild.content, e - 1, t)));
}
function $c(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Lg(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Lg(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(z.empty, !0)))), n.copy(r);
}
function Fc(n, e, t, r, i) {
  let s = n.node(e), a = i ? n.indexAfter(e) : n.index(e);
  if (a == s.childCount && !t.compatibleContent(s.type))
    return null;
  let c = r.fillBefore(s.content, !0, a);
  return c && !ET(t, s.content, a) ? c : null;
}
function ET(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function CT(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function OT(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (Pg(i, s, r))
    return n.step(new Dt(e, t, r));
  let a = $g(i, n.doc.resolve(t));
  a[a.length - 1] == 0 && a.pop();
  let c = -(i.depth + 1);
  a.unshift(c);
  for (let g = i.depth, y = i.pos - 1; g > 0; g--, y--) {
    let x = i.node(g).type.spec;
    if (x.defining || x.definingAsContext || x.isolating)
      break;
    a.indexOf(g) > -1 ? c = g : i.before(g) == y && a.splice(1, 0, -g);
  }
  let u = a.indexOf(c), p = [], d = r.openStart;
  for (let g = r.content, y = 0; ; y++) {
    let x = g.firstChild;
    if (p.push(x), y == r.openStart)
      break;
    g = x.content;
  }
  for (let g = d - 1; g >= 0; g--) {
    let y = p[g].type, x = CT(y);
    if (x && i.node(u).type != y)
      d = g;
    else if (x || !y.isTextblock)
      break;
  }
  for (let g = r.openStart; g >= 0; g--) {
    let y = (g + d + 1) % (r.openStart + 1), x = p[y];
    if (!!x)
      for (let _ = 0; _ < a.length; _++) {
        let O = a[(_ + u) % a.length], M = !0;
        O < 0 && (M = !1, O = -O);
        let I = i.node(O - 1), W = i.index(O - 1);
        if (I.canReplaceWith(W, W, x.type, x.marks))
          return n.replace(i.before(O), M ? s.after(O) : t, new Y(Bg(r.content, 0, r.openStart, y), y, r.openEnd));
      }
  }
  let h = n.steps.length;
  for (let g = a.length - 1; g >= 0 && (n.replace(e, t, r), !(n.steps.length > h)); g--) {
    let y = a[g];
    y < 0 || (e = i.before(y), t = s.after(y));
  }
}
function Bg(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(Bg(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), a = s.fillBefore(n).append(n);
    n = a.append(s.matchFragment(a).fillBefore(z.empty, !0));
  }
  return n;
}
function TT(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = ST(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new Y(z.from(r), 0, 0));
}
function AT(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = $g(r, i);
  for (let a = 0; a < s.length; a++) {
    let c = s[a], u = a == s.length - 1;
    if (u && c == 0 || r.node(c).type.contentMatch.validEnd)
      return n.delete(r.start(c), i.end(c));
    if (c > 0 && (u || r.node(c - 1).canReplace(r.index(c - 1), i.indexAfter(c - 1))))
      return n.delete(r.before(c), i.after(c));
  }
  for (let a = 1; a <= r.depth && a <= i.depth; a++)
    if (e - r.start(a) == r.depth - a && t > r.end(a) && i.end(a) - t != i.depth - a)
      return n.delete(r.before(a), t);
  n.delete(e, t);
}
function $g(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class lo extends on {
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return pt.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return pt.fromReplace(e, this.pos, this.pos + 1, new Y(z.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Tn.empty;
  }
  invert(e) {
    return new lo(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new lo(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new lo(t.pos, t.attr, t.value);
  }
}
on.jsonID("attr", lo);
let ho = class extends Error {
};
ho = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
ho.prototype = Object.create(Error.prototype);
ho.prototype.constructor = ho;
ho.prototype.name = "TransformError";
class MT {
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new so();
  }
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new ho(t.failed);
    return this;
  }
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  get docChanged() {
    return this.steps.length > 0;
  }
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  replace(e, t = e, r = Y.empty) {
    let i = ju(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  replaceWith(e, t, r) {
    return this.replace(e, t, new Y(z.from(r), 0, 0));
  }
  delete(e, t) {
    return this.replace(e, t, Y.empty);
  }
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  replaceRange(e, t, r) {
    return OT(this, e, t, r), this;
  }
  replaceRangeWith(e, t, r) {
    return TT(this, e, t, r), this;
  }
  deleteRange(e, t) {
    return AT(this, e, t), this;
  }
  lift(e, t) {
    return pT(this, e, t), this;
  }
  join(e, t = 1) {
    return _T(this, e, t), this;
  }
  wrap(e, t) {
    return gT(this, e, t), this;
  }
  setBlockType(e, t = e, r, i = null) {
    return yT(this, e, t, r, i), this;
  }
  setNodeMarkup(e, t, r = null, i = []) {
    return bT(this, e, t, r, i), this;
  }
  setNodeAttribute(e, t, r) {
    return this.step(new lo(e, t, r)), this;
  }
  addNodeMark(e, t) {
    return this.step(new Wr(e, t)), this;
  }
  removeNodeMark(e, t) {
    if (!(t instanceof Ve)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new po(e, t)), this;
  }
  split(e, t = 1, r) {
    return wT(this, e, t, r), this;
  }
  addMark(e, t, r) {
    return cT(this, e, t, r), this;
  }
  removeMark(e, t, r) {
    return uT(this, e, t, r), this;
  }
  clearIncompatible(e, t, r) {
    return fT(this, e, t, r), this;
  }
}
const Vc = /* @__PURE__ */ Object.create(null);
class ge {
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new NT(e.min(t), e.max(t))];
  }
  get anchor() {
    return this.$anchor.pos;
  }
  get head() {
    return this.$head.pos;
  }
  get from() {
    return this.$from.pos;
  }
  get to() {
    return this.$to.pos;
  }
  get $from() {
    return this.ranges[0].$from;
  }
  get $to() {
    return this.ranges[0].$to;
  }
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  replace(e, t = Y.empty) {
    let r = t.content.lastChild, i = null;
    for (let c = 0; c < t.openEnd; c++)
      i = r, r = r.lastChild;
    let s = e.steps.length, a = this.ranges;
    for (let c = 0; c < a.length; c++) {
      let { $from: u, $to: p } = a[c], d = e.mapping.slice(s);
      e.replaceRange(d.map(u.pos), d.map(p.pos), c ? Y.empty : t), c == 0 && xh(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: a, $to: c } = i[s], u = e.mapping.slice(r), p = u.map(a.pos), d = u.map(c.pos);
      s ? e.deleteRange(p, d) : (e.replaceRangeWith(p, d, t), xh(e, r, t.isInline ? -1 : 1));
    }
  }
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new be(e) : Zi(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let a = t < 0 ? Zi(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : Zi(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
      if (a)
        return a;
    }
    return null;
  }
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new Vn(e.node(0));
  }
  static atStart(e) {
    return Zi(e, e, 0, 0, 1) || new Vn(e);
  }
  static atEnd(e) {
    return Zi(e, e, e.content.size, e.childCount, -1) || new Vn(e);
  }
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Vc[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in Vc)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Vc[e] = t, t.prototype.jsonID = e, t;
  }
  getBookmark() {
    return be.between(this.$anchor, this.$head).getBookmark();
  }
}
ge.prototype.visible = !0;
class NT {
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let bh = !1;
function wh(n) {
  !bh && !n.parent.inlineContent && (bh = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class be extends ge {
  constructor(e, t = e) {
    wh(e), wh(t), super(e, t);
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return ge.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new be(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = Y.empty) {
    if (super.replace(e, t), t == Y.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof be && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new nl(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new be(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = ge.findFrom(t, r, !0) || ge.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return ge.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (ge.findFrom(e, -r, !0) || ge.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new be(e, t);
  }
}
ge.jsonID("text", be);
class nl {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new nl(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return be.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class le extends ge {
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? ge.near(s) : new le(s);
  }
  content() {
    return new Y(z.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof le && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new qu(this.anchor);
  }
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new le(e.resolve(t.anchor));
  }
  static create(e, t) {
    return new le(e.resolve(t));
  }
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
le.prototype.visible = !1;
ge.jsonID("node", le);
class qu {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new nl(r, r) : new qu(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && le.isSelectable(r) ? new le(t) : ge.near(t);
  }
}
class Vn extends ge {
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = Y.empty) {
    if (t == Y.empty) {
      e.delete(0, e.doc.content.size);
      let r = ge.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  static fromJSON(e) {
    return new Vn(e);
  }
  map(e) {
    return new Vn(e);
  }
  eq(e) {
    return e instanceof Vn;
  }
  getBookmark() {
    return DT;
  }
}
ge.jsonID("all", Vn);
const DT = {
  map() {
    return this;
  },
  resolve(n) {
    return new Vn(n);
  }
};
function Zi(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return be.create(n, t);
  for (let a = r - (i > 0 ? 0 : 1); i > 0 ? a < e.childCount : a >= 0; a += i) {
    let c = e.child(a);
    if (c.isAtom) {
      if (!s && le.isSelectable(c))
        return le.create(n, t - (i < 0 ? c.nodeSize : 0));
    } else {
      let u = Zi(n, c, t + i, i < 0 ? c.childCount : 0, i, s);
      if (u)
        return u;
    }
    t += c.nodeSize * i;
  }
  return null;
}
function xh(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof Dt || i instanceof bt))
    return;
  let s = n.mapping.maps[r], a;
  s.forEach((c, u, p, d) => {
    a == null && (a = d);
  }), n.setSelection(ge.near(n.doc.resolve(a), t));
}
const _h = 1, _a = 2, Sh = 4;
class RT extends MT {
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | _h) & ~_a, this.storedMarks = null, this;
  }
  get selectionSet() {
    return (this.updated & _h) > 0;
  }
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= _a, this;
  }
  ensureMarks(e) {
    return Ve.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  get storedMarksSet() {
    return (this.updated & _a) > 0;
  }
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~_a, this.storedMarks = null;
  }
  setTime(e) {
    return this.time = e, this;
  }
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || Ve.none))), r.replaceWith(this, e), this;
  }
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r == null ? t : r, !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let a = this.doc.resolve(t);
        s = r == t ? a.marks() : a.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), this.selection.empty || this.setSelection(ge.near(this.selection.$to)), this;
    }
  }
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  scrollIntoView() {
    return this.updated |= Sh, this;
  }
  get scrolledIntoView() {
    return (this.updated & Sh) > 0;
  }
}
function kh(n, e) {
  return !e || !n ? n : n.bind(e);
}
class is {
  constructor(e, t, r) {
    this.name = e, this.init = kh(t.init, r), this.apply = kh(t.apply, r);
  }
}
const IT = [
  new is("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new is("selection", {
    init(n, e) {
      return n.selection || ge.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new is("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new is("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class zc {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = IT.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new is(r.key, r.spec.state, r));
    });
  }
}
class to {
  constructor(e) {
    this.config = e;
  }
  get schema() {
    return this.config.schema;
  }
  get plugins() {
    return this.config.plugins;
  }
  apply(e) {
    return this.applyTransaction(e).state;
  }
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let a = 0; a < this.config.plugins.length; a++) {
        let c = this.config.plugins[a];
        if (c.spec.appendTransaction) {
          let u = i ? i[a].n : 0, p = i ? i[a].state : this, d = u < t.length && c.spec.appendTransaction.call(c, u ? t.slice(u) : t, p, r);
          if (d && r.filterTransaction(d, a)) {
            if (d.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let h = 0; h < this.config.plugins.length; h++)
                i.push(h < a ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(d), r = r.applyInner(d), s = !0;
          }
          i && (i[a] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new to(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  get tr() {
    return new RT(this);
  }
  static create(e) {
    let t = new zc(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new to(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  reconfigure(e) {
    let t = new zc(this.schema, e.plugins), r = t.fields, i = new to(t);
    for (let s = 0; s < r.length; s++) {
      let a = r[s].name;
      i[a] = this.hasOwnProperty(a) ? this[a] : r[s].init(e, i);
    }
    return i;
  }
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new zc(e.schema, e.plugins), s = new to(i);
    return i.fields.forEach((a) => {
      if (a.name == "doc")
        s.doc = nr.fromJSON(e.schema, t.doc);
      else if (a.name == "selection")
        s.selection = ge.fromJSON(s.doc, t.selection);
      else if (a.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let c in r) {
            let u = r[c], p = u.spec.state;
            if (u.key == a.name && p && p.fromJSON && Object.prototype.hasOwnProperty.call(t, c)) {
              s[a.name] = p.fromJSON.call(u, e, t[c], s);
              return;
            }
          }
        s[a.name] = a.init(e, s);
      }
    }), s;
  }
}
function Fg(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Fg(i, e, {})), t[r] = i;
  }
  return t;
}
class sn {
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Fg(e.props, this, this.props), this.key = e.key ? e.key.key : Vg("plugin");
  }
  getState(e) {
    return e[this.key];
  }
}
const Hc = /* @__PURE__ */ Object.create(null);
function Vg(n) {
  return n in Hc ? n + "$" + ++Hc[n] : (Hc[n] = 0, n + "$");
}
class sr {
  constructor(e = "key") {
    this.key = Vg(e);
  }
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  getState(e) {
    return e[this.key];
  }
}
const hn = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, vs = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Eh = null;
const br = function(n, e, t) {
  let r = Eh || (Eh = document.createRange());
  return r.setEnd(n, t == null ? n.nodeValue.length : t), r.setStart(n, e || 0), r;
}, Ci = function(n, e, t, r) {
  return t && (Ch(n, e, t, r, -1) || Ch(n, e, t, r, 1));
}, PT = /^(img|br|input|textarea|hr)$/i;
function Ch(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Zn(n))) {
      let s = n.parentNode;
      if (!s || s.nodeType != 1 || BT(n) || PT.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = hn(n) + (i < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? Zn(n) : 0;
    } else
      return !1;
  }
}
function Zn(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function LT(n, e, t) {
  for (let r = e == 0, i = e == Zn(n); r || i; ) {
    if (n == t)
      return !0;
    let s = hn(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == Zn(n);
  }
}
function BT(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const rl = function(n) {
  return n.focusNode && Ci(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function no(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function $T(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Gr = typeof navigator < "u" ? navigator : null, Oh = typeof document < "u" ? document : null, Zr = Gr && Gr.userAgent || "", yu = /Edge\/(\d+)/.exec(Zr), zg = /MSIE \d/.exec(Zr), vu = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Zr), en = !!(zg || vu || yu), jr = zg ? document.documentMode : vu ? +vu[1] : yu ? +yu[1] : 0, Wn = !en && /gecko\/(\d+)/i.test(Zr);
Wn && +(/Firefox\/(\d+)/.exec(Zr) || [0, 0])[1];
const bu = !en && /Chrome\/(\d+)/.exec(Zr), Qt = !!bu, FT = bu ? +bu[1] : 0, Ht = !en && !!Gr && /Apple Computer/.test(Gr.vendor), mo = Ht && (/Mobile\/\w+/.test(Zr) || !!Gr && Gr.maxTouchPoints > 2), On = mo || (Gr ? /Mac/.test(Gr.platform) : !1), Qn = /Android \d/.test(Zr), il = !!Oh && "webkitFontSmoothing" in Oh.documentElement.style, VT = il ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function zT(n) {
  return {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function Lr(n, e) {
  return typeof n == "number" ? n : n[e];
}
function HT(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Th(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let a = t || n.dom; a; a = vs(a)) {
    if (a.nodeType != 1)
      continue;
    let c = a, u = c == s.body, p = u ? zT(s) : HT(c), d = 0, h = 0;
    if (e.top < p.top + Lr(r, "top") ? h = -(p.top - e.top + Lr(i, "top")) : e.bottom > p.bottom - Lr(r, "bottom") && (h = e.bottom - p.bottom + Lr(i, "bottom")), e.left < p.left + Lr(r, "left") ? d = -(p.left - e.left + Lr(i, "left")) : e.right > p.right - Lr(r, "right") && (d = e.right - p.right + Lr(i, "right")), d || h)
      if (u)
        s.defaultView.scrollBy(d, h);
      else {
        let g = c.scrollLeft, y = c.scrollTop;
        h && (c.scrollTop += h), d && (c.scrollLeft += d);
        let x = c.scrollLeft - g, _ = c.scrollTop - y;
        e = { left: e.left - x, top: e.top - _, right: e.right - x, bottom: e.bottom - _ };
      }
    if (u)
      break;
  }
}
function WT(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, a = t + 1; a < Math.min(innerHeight, e.bottom); a += 5) {
    let c = n.root.elementFromPoint(s, a);
    if (!c || c == n.dom || !n.dom.contains(c))
      continue;
    let u = c.getBoundingClientRect();
    if (u.top >= t - 20) {
      r = c, i = u.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Hg(n.dom) };
}
function Hg(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = vs(r))
    ;
  return e;
}
function UT({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Wg(t, r == 0 ? 0 : r - e);
}
function Wg(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let Yi = null;
function jT(n) {
  if (n.setActive)
    return n.setActive();
  if (Yi)
    return n.focus(Yi);
  let e = Hg(n);
  n.focus(Yi == null ? {
    get preventScroll() {
      return Yi = { preventScroll: !0 }, !0;
    }
  } : void 0), Yi || (Yi = !1, Wg(e, 0));
}
function Ug(n, e) {
  let t, r = 2e8, i, s = 0, a = e.top, c = e.top;
  for (let u = n.firstChild, p = 0; u; u = u.nextSibling, p++) {
    let d;
    if (u.nodeType == 1)
      d = u.getClientRects();
    else if (u.nodeType == 3)
      d = br(u).getClientRects();
    else
      continue;
    for (let h = 0; h < d.length; h++) {
      let g = d[h];
      if (g.top <= a && g.bottom >= c) {
        a = Math.max(g.bottom, a), c = Math.min(g.top, c);
        let y = g.left > e.left ? g.left - e.left : g.right < e.left ? e.left - g.right : 0;
        if (y < r) {
          t = u, r = y, i = y && t.nodeType == 3 ? {
            left: g.right < e.left ? g.right : g.left,
            top: e.top
          } : e, u.nodeType == 1 && y && (s = p + (e.left >= (g.left + g.right) / 2 ? 1 : 0));
          continue;
        }
      }
      !t && (e.left >= g.right && e.top >= g.top || e.left >= g.left && e.top >= g.bottom) && (s = p + 1);
    }
  }
  return t && t.nodeType == 3 ? qT(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : Ug(t, i);
}
function qT(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let s = $r(r, 1);
    if (s.top != s.bottom && Ku(e, s))
      return { node: n, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function Ku(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function KT(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function JT(n, e, t) {
  let { node: r, offset: i } = Ug(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let a = r.getBoundingClientRect();
    s = a.left != a.right && t.left > (a.left + a.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function GT(n, e, t, r) {
  let i = -1;
  for (let s = e; s != n.dom; ) {
    let a = n.docView.nearestDesc(s, !0);
    if (!a)
      return null;
    if (a.node.isBlock && a.parent) {
      let c = a.dom.getBoundingClientRect();
      if (c.left > r.left || c.top > r.top)
        i = a.posBefore;
      else if (c.right < r.left || c.bottom < r.top)
        i = a.posAfter;
      else
        break;
    }
    s = a.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, 1);
}
function jg(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let a = n.childNodes[s];
      if (a.nodeType == 1) {
        let c = a.getClientRects();
        for (let u = 0; u < c.length; u++) {
          let p = c[u];
          if (Ku(e, p))
            return jg(a, e, p);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function YT(n, e) {
  let t = n.dom.ownerDocument, r, i = 0;
  if (t.caretPositionFromPoint)
    try {
      let u = t.caretPositionFromPoint(e.left, e.top);
      u && ({ offsetNode: r, offset: i } = u);
    } catch {
    }
  if (!r && t.caretRangeFromPoint) {
    let u = t.caretRangeFromPoint(e.left, e.top);
    u && ({ startContainer: r, startOffset: i } = u);
  }
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), a;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let u = n.dom.getBoundingClientRect();
    if (!Ku(e, u) || (s = jg(n.dom, e, u), !s))
      return null;
  }
  if (Ht)
    for (let u = s; r && u; u = vs(u))
      u.draggable && (r = void 0);
  if (s = KT(s, e), r) {
    if (Wn && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], p;
      u.nodeName == "IMG" && (p = u.getBoundingClientRect()).right <= e.left && p.bottom > e.top && i++;
    }
    r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? a = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (a = GT(n, r, i, e));
  }
  a == null && (a = JT(n, s, e));
  let c = n.docView.nearestDesc(s, !0);
  return { pos: a, inside: c ? c.posAtStart - c.border : -1 };
}
function $r(n, e) {
  let t = n.getClientRects();
  return t.length ? t[e < 0 ? 0 : t.length - 1] : n.getBoundingClientRect();
}
const XT = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function qg(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), a = il || Wn;
  if (r.nodeType == 3)
    if (a && (XT.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let u = $r(br(r, i, i), t);
      if (Wn && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let p = $r(br(r, i - 1, i - 1), -1);
        if (p.top == u.top) {
          let d = $r(br(r, i, i + 1), -1);
          if (d.top != u.top)
            return Qo(d, d.left < p.left);
        }
      }
      return u;
    } else {
      let u = i, p = i, d = t < 0 ? 1 : -1;
      return t < 0 && !i ? (p++, d = -1) : t >= 0 && i == r.nodeValue.length ? (u--, d = 1) : t < 0 ? u-- : p++, Qo($r(br(r, u, p), 1), d < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == Zn(r))) {
      let u = r.childNodes[i - 1];
      if (u.nodeType == 1)
        return Wc(u.getBoundingClientRect(), !1);
    }
    if (s == null && i < Zn(r)) {
      let u = r.childNodes[i];
      if (u.nodeType == 1)
        return Wc(u.getBoundingClientRect(), !0);
    }
    return Wc(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == Zn(r))) {
    let u = r.childNodes[i - 1], p = u.nodeType == 3 ? br(u, Zn(u) - (a ? 0 : 1)) : u.nodeType == 1 && (u.nodeName != "BR" || !u.nextSibling) ? u : null;
    if (p)
      return Qo($r(p, 1), !1);
  }
  if (s == null && i < Zn(r)) {
    let u = r.childNodes[i];
    for (; u.pmViewDesc && u.pmViewDesc.ignoreForCoords; )
      u = u.nextSibling;
    let p = u ? u.nodeType == 3 ? br(u, 0, a ? 0 : 1) : u.nodeType == 1 ? u : null : null;
    if (p)
      return Qo($r(p, -1), !0);
  }
  return Qo($r(r.nodeType == 3 ? br(r) : r, -t), t >= 0);
}
function Qo(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Wc(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function Kg(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function ZT(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return Kg(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let c = n.docView.nearestDesc(s, !0);
      if (!c)
        break;
      if (c.node.isBlock) {
        s = c.dom;
        break;
      }
      s = c.dom.parentNode;
    }
    let a = qg(n, i.pos, 1);
    for (let c = s.firstChild; c; c = c.nextSibling) {
      let u;
      if (c.nodeType == 1)
        u = c.getClientRects();
      else if (c.nodeType == 3)
        u = br(c, 0, c.nodeValue.length).getClientRects();
      else
        continue;
      for (let p = 0; p < u.length; p++) {
        let d = u[p];
        if (d.bottom > d.top + 1 && (t == "up" ? a.top - d.top > (d.bottom - a.top) * 2 : d.bottom - a.bottom > (a.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const QT = /[\u0590-\u08ac]/;
function eA(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, a = i == r.parent.content.size, c = n.domSelection();
  return !QT.test(r.parent.textContent) || !c.modify ? t == "left" || t == "backward" ? s : a : Kg(n, e, () => {
    let { focusNode: u, focusOffset: p, anchorNode: d, anchorOffset: h } = n.domSelectionRange(), g = c.caretBidiLevel;
    c.modify("move", t, "character");
    let y = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: x, focusOffset: _ } = n.domSelectionRange(), O = x && !y.contains(x.nodeType == 1 ? x : x.parentNode) || u == x && p == _;
    try {
      c.collapse(d, h), u && (u != d || p != h) && c.extend && c.extend(u, p);
    } catch {
    }
    return g != null && (c.caretBidiLevel = g), O;
  });
}
let Ah = null, Mh = null, Nh = !1;
function tA(n, e, t) {
  return Ah == e && Mh == t ? Nh : (Ah = e, Mh = t, Nh = t == "up" || t == "down" ? ZT(n, e, t) : eA(n, e, t));
}
const zn = 0, Dh = 1, ro = 2, rr = 3;
class Es {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = zn, r.pmViewDesc = this;
  }
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  parseRule() {
    return null;
  }
  stopEvent(e) {
    return !1;
  }
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, a;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((a = s.pmViewDesc) && a.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(a) + a.size : this.posAtStart;
      } else {
        let s, a;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((a = s.pmViewDesc) && a.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(a) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > hn(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return (i == null ? r > 0 : i) ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), a;
      if (s && (!t || s.node))
        if (r && (a = s.nodeDOM) && !(a.nodeType == 1 ? a.contains(e.nodeType == 1 ? e : e.parentNode) : a == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let a = this.children[r], c = s + a.size;
      if (c > e || a instanceof Gg) {
        i = e - s;
        break;
      }
      s = c;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof Jg && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, a = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, a = !1)
        ;
      return s && t && a && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? hn(s.dom) + 1 : 0 };
    } else {
      let s, a = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, a = !1)
        ;
      return s && a && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? hn(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let a = r, c = 0; ; c++) {
      let u = this.children[c], p = a + u.size;
      if (i == -1 && e <= p) {
        let d = a + u.border;
        if (e >= d && t <= p - u.border && u.node && u.contentDOM && this.contentDOM.contains(u.contentDOM))
          return u.parseRange(e, t, d);
        e = a;
        for (let h = c; h > 0; h--) {
          let g = this.children[h - 1];
          if (g.size && g.dom.parentNode == this.contentDOM && !g.emptyChildAt(1)) {
            i = hn(g.dom) + 1;
            break;
          }
          e -= g.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (p > t || c == this.children.length - 1)) {
        t = p;
        for (let d = c + 1; d < this.children.length; d++) {
          let h = this.children[d];
          if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(-1)) {
            s = hn(h.dom);
            break;
          }
          t += h.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      a = p;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), a = Math.max(e, t);
    for (let g = 0, y = 0; g < this.children.length; g++) {
      let x = this.children[g], _ = y + x.size;
      if (s > y && a < _)
        return x.setSelection(e - y - x.border, t - y - x.border, r, i);
      y = _;
    }
    let c = this.domFromPos(e, e ? -1 : 1), u = t == e ? c : this.domFromPos(t, t ? -1 : 1), p = r.getSelection(), d = !1;
    if ((Wn || Ht) && e == t) {
      let { node: g, offset: y } = c;
      if (g.nodeType == 3) {
        if (d = !!(y && g.nodeValue[y - 1] == `
`), d && y == g.nodeValue.length)
          for (let x = g, _; x; x = x.parentNode) {
            if (_ = x.nextSibling) {
              _.nodeName == "BR" && (c = u = { node: _.parentNode, offset: hn(_) + 1 });
              break;
            }
            let O = x.pmViewDesc;
            if (O && O.node && O.node.isBlock)
              break;
          }
      } else {
        let x = g.childNodes[y - 1];
        d = x && (x.nodeName == "BR" || x.contentEditable == "false");
      }
    }
    if (Wn && p.focusNode && p.focusNode != u.node && p.focusNode.nodeType == 1) {
      let g = p.focusNode.childNodes[p.focusOffset];
      g && g.contentEditable == "false" && (i = !0);
    }
    if (!(i || d && Ht) && Ci(c.node, c.offset, p.anchorNode, p.anchorOffset) && Ci(u.node, u.offset, p.focusNode, p.focusOffset))
      return;
    let h = !1;
    if ((p.extend || e == t) && !d) {
      p.collapse(c.node, c.offset);
      try {
        e != t && p.extend(u.node, u.offset), h = !0;
      } catch {
      }
    }
    if (!h) {
      if (e > t) {
        let y = c;
        c = u, u = y;
      }
      let g = document.createRange();
      g.setEnd(u.node, u.offset), g.setStart(c.node, c.offset), p.removeAllRanges(), p.addRange(g);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], a = r + s.size;
      if (r == a ? e <= a && t >= r : e < a && t > r) {
        let c = r + s.border, u = a - s.border;
        if (e >= c && t <= u) {
          this.dirty = e == r || t == a ? ro : Dh, e == c && t == u && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = rr : s.markDirty(e - c, t - c);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? ro : rr;
      }
      r = a;
    }
    this.dirty = ro;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? ro : Dh;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
}
class Jg extends Es {
  constructor(e, t, r, i) {
    let s, a = t.type.toDOM;
    if (typeof a == "function" && (a = a(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (a.nodeType != 1) {
        let c = document.createElement("span");
        c.appendChild(a), a = c;
      }
      a.contentEditable = "false", a.classList.add("ProseMirror-widget");
    }
    super(e, [], a, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == zn && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class nA extends Es {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Oi extends Es {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], a = s && s(t, i, r);
    return (!a || !a.dom) && (a = er.renderSpec(document, t.type.spec.toDOM(t, r))), new Oi(e, t, a.dom, a.contentDOM || a.dom);
  }
  parseRule() {
    return this.dirty & rr || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM || void 0 };
  }
  matchesMark(e) {
    return this.dirty != rr && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != zn) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = zn;
    }
  }
  slice(e, t, r) {
    let i = Oi.create(this.parent, this.mark, !0, r), s = this.children, a = this.size;
    t < a && (s = _u(s, t, a, r)), e > 0 && (s = _u(s, 0, e, r));
    for (let c = 0; c < s.length; c++)
      s[c].parent = i;
    return i.children = s, i;
  }
}
class Ti extends Es {
  constructor(e, t, r, i, s, a, c, u, p) {
    super(e, [], s, a), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = c, a && this.updateChildren(u, p);
  }
  static create(e, t, r, i, s, a) {
    let c = s.nodeViews[t.type.name], u, p = c && c(t, s, () => {
      if (!u)
        return a;
      if (u.parent)
        return u.parent.posBeforeChild(u);
    }, r, i), d = p && p.dom, h = p && p.contentDOM;
    if (t.isText) {
      if (!d)
        d = document.createTextNode(t.text);
      else if (d.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      d || ({ dom: d, contentDOM: h } = er.renderSpec(document, t.type.spec.toDOM(t)));
    !h && !t.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), t.type.spec.draggable && (d.draggable = !0));
    let g = d;
    return d = Zg(d, r, t), p ? u = new rA(e, t, r, i, d, h || null, g, p, s, a + 1) : t.isText ? new ol(e, t, r, i, d, g, s) : new Ti(e, t, r, i, d, h || null, g, s, a + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => z.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == zn && e.eq(this.node) && xu(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, a = s && s.pos > -1 ? s : null, c = s && s.pos < 0, u = new oA(this, a && a.node, e);
    lA(this.node, this.innerDeco, (p, d, h) => {
      p.spec.marks ? u.syncToMarks(p.spec.marks, r, e) : p.type.side >= 0 && !h && u.syncToMarks(d == this.node.childCount ? Ve.none : this.node.child(d).marks, r, e), u.placeWidget(p, e, i);
    }, (p, d, h, g) => {
      u.syncToMarks(p.marks, r, e);
      let y;
      u.findNodeMatch(p, d, h, g) || c && e.state.selection.from > i && e.state.selection.to < i + p.nodeSize && (y = u.findIndexWithChild(s.node)) > -1 && u.updateNodeAt(p, d, h, y, e) || u.updateNextNode(p, d, h, e, g) || u.addNode(p, d, h, e, i), i += p.nodeSize;
    }), u.syncToMarks([], r, e), this.node.isTextblock && u.addTextblockHacks(), u.destroyRest(), (u.changed || this.dirty == ro) && (a && this.protectLocalComposition(e, a), Yg(this.contentDOM, this.children, e), mo && cA(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof be) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.domSelectionRange(), a = uA(s.focusNode, s.focusOffset);
    if (!a || !this.dom.contains(a.parentNode))
      return null;
    if (this.node.inlineContent) {
      let c = a.nodeValue, u = fA(this.node.content, c, r - t, i - t);
      return u < 0 ? null : { node: a, pos: u, text: c };
    } else
      return { node: a, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let a = new nA(this, s, t, i);
    e.input.compositionNodes.push(a), this.children = _u(this.children, r, r + i.length, e, a);
  }
  update(e, t, r, i) {
    return this.dirty == rr || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = zn;
  }
  updateOuterDeco(e) {
    if (xu(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Xg(this.dom, this.nodeDOM, wu(this.outerDeco, this.node, t), wu(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  deselectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable");
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Rh(n, e, t, r, i) {
  return Zg(r, e, n), new Ti(void 0, n, e, t, r, r, r, i, 0);
}
class ol extends Ti {
  constructor(e, t, r, i, s, a, c) {
    super(e, t, r, i, s, null, a, c, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == rr || this.dirty != zn && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != zn || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = zn, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new ol(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = rr);
  }
  get domAtom() {
    return !1;
  }
}
class Gg extends Es {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == zn && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class rA extends Ti {
  constructor(e, t, r, i, s, a, c, u, p, d) {
    super(e, t, r, i, s, a, c, p, d), this.spec = u;
  }
  update(e, t, r, i) {
    if (this.dirty == rr)
      return !1;
    if (this.spec.update) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Yg(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let a = e[s], c = a.dom;
    if (c.parentNode == n) {
      for (; c != r; )
        r = Ih(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(c, r);
    if (a instanceof Oi) {
      let u = r ? r.previousSibling : n.lastChild;
      Yg(a.contentDOM, a.children, t), r = u ? u.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Ih(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const us = function(n) {
  n && (this.nodeName = n);
};
us.prototype = /* @__PURE__ */ Object.create(null);
const yi = [new us()];
function wu(n, e, t) {
  if (n.length == 0)
    return yi;
  let r = t ? yi[0] : new us(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let a = n[s].type.attrs;
    if (!!a) {
      a.nodeName && i.push(r = new us(a.nodeName));
      for (let c in a) {
        let u = a[c];
        u != null && (t && i.length == 1 && i.push(r = new us(e.isInline ? "span" : "div")), c == "class" ? r.class = (r.class ? r.class + " " : "") + u : c == "style" ? r.style = (r.style ? r.style + ";" : "") + u : c != "nodeName" && (r[c] = u));
      }
    }
  }
  return i;
}
function Xg(n, e, t, r) {
  if (t == yi && r == yi)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let a = r[s], c = t[s];
    if (s) {
      let u;
      c && c.nodeName == a.nodeName && i != n && (u = i.parentNode) && u.nodeName.toLowerCase() == a.nodeName || (u = document.createElement(a.nodeName), u.pmIsDeco = !0, u.appendChild(i), c = yi[0]), i = u;
    }
    iA(i, c || yi[0], a);
  }
  return i;
}
function iA(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Zg(n, e, t) {
  return Xg(n, n, yi, wu(e, t, n.nodeType != 1));
}
function xu(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Ih(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class oA {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = sA(e.node.content, e);
  }
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  syncToMarks(e, t, r) {
    let i = 0, s = this.stack.length >> 1, a = Math.min(s, e.length);
    for (; i < a && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = zn, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let c = -1;
      for (let u = this.index; u < Math.min(this.index + 3, this.top.children.length); u++)
        if (this.top.children[u].matchesMark(e[s])) {
          c = u;
          break;
        }
      if (c > -1)
        c > this.index && (this.changed = !0, this.destroyBetween(this.index, c)), this.top = this.top.children[this.index];
      else {
        let u = Oi.create(this.top, e[s], t, r);
        this.top.children.splice(this.index, 0, u), this.top = u, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  findNodeMatch(e, t, r, i) {
    let s = -1, a;
    if (i >= this.preMatch.index && (a = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && a.matchesNode(e, t, r))
      s = this.top.children.indexOf(a, this.index);
    else
      for (let c = this.index, u = Math.min(this.top.children.length, c + 5); c < u; c++) {
        let p = this.top.children[c];
        if (p.matchesNode(e, t, r) && !this.preMatch.matched.has(p)) {
          s = c;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let a = this.top.children[i];
    return a.dirty == rr && a.dom == a.contentDOM && (a.dirty = ro), a.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  updateNextNode(e, t, r, i, s) {
    for (let a = this.index; a < this.top.children.length; a++) {
      let c = this.top.children[a];
      if (c instanceof Ti) {
        let u = this.preMatch.matched.get(c);
        if (u != null && u != s)
          return !1;
        let p = c.dom;
        if (!(this.lock && (p == this.lock || p.nodeType == 1 && p.contains(this.lock.parentNode)) && !(e.isText && c.node && c.node.isText && c.nodeDOM.nodeValue == e.text && c.dirty != rr && xu(t, c.outerDeco))) && c.update(e, t, r, i))
          return this.destroyBetween(this.index, a), c.dom != p && (this.changed = !0), this.index++, !0;
        break;
      }
    }
    return !1;
  }
  addNode(e, t, r, i, s) {
    this.top.children.splice(this.index++, 0, Ti.create(this.top, e, t, r, i, s)), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new Jg(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Oi; )
      t = e, e = t.children[t.children.length - 1];
    (!e || !(e instanceof ol) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Ht || Qt) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Gg(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
}
function sA(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), a = [];
  e:
    for (; i > 0; ) {
      let c;
      for (; ; )
        if (r) {
          let p = t.children[r - 1];
          if (p instanceof Oi)
            t = p, r = p.children.length;
          else {
            c = p, r--;
            break;
          }
        } else {
          if (t == e)
            break e;
          r = t.parent.children.indexOf(t), t = t.parent;
        }
      let u = c.node;
      if (!!u) {
        if (u != n.child(i - 1))
          break;
        --i, s.set(c, i), a.push(c);
      }
    }
  return { index: i, matched: s, matches: a.reverse() };
}
function aA(n, e) {
  return n.type.side - e.type.side;
}
function lA(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let p = 0; p < n.childCount; p++) {
      let d = n.child(p);
      r(d, i, e.forChild(s, d), p), s += d.nodeSize;
    }
    return;
  }
  let a = 0, c = [], u = null;
  for (let p = 0; ; ) {
    if (a < i.length && i[a].to == s) {
      let x = i[a++], _;
      for (; a < i.length && i[a].to == s; )
        (_ || (_ = [x])).push(i[a++]);
      if (_) {
        _.sort(aA);
        for (let O = 0; O < _.length; O++)
          t(_[O], p, !!u);
      } else
        t(x, p, !!u);
    }
    let d, h;
    if (u)
      h = -1, d = u, u = null;
    else if (p < n.childCount)
      h = p, d = n.child(p++);
    else
      break;
    for (let x = 0; x < c.length; x++)
      c[x].to <= s && c.splice(x--, 1);
    for (; a < i.length && i[a].from <= s && i[a].to > s; )
      c.push(i[a++]);
    let g = s + d.nodeSize;
    if (d.isText) {
      let x = g;
      a < i.length && i[a].from < x && (x = i[a].from);
      for (let _ = 0; _ < c.length; _++)
        c[_].to < x && (x = c[_].to);
      x < g && (u = d.cut(x - s), d = d.cut(0, x - s), g = x, h = -1);
    }
    let y = d.isInline && !d.isLeaf ? c.filter((x) => !x.inline) : c.slice();
    r(d, y, e.forChild(s, d), h), s = g;
  }
}
function cA(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function uA(n, e) {
  for (; ; ) {
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.childNodes.length > e && n.childNodes[e].nodeType == 3)
        return n.childNodes[e];
      n = n.childNodes[e - 1], e = Zn(n);
    } else if (n.nodeType == 1 && e < n.childNodes.length)
      n = n.childNodes[e], e = 0;
    else
      return null;
  }
}
function fA(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let a = n.child(i++), c = s;
    if (s += a.nodeSize, !a.isText)
      continue;
    let u = a.text;
    for (; i < n.childCount; ) {
      let p = n.child(i++);
      if (s += p.nodeSize, !p.isText)
        break;
      u += p.text;
    }
    if (s >= t) {
      let p = c < r ? u.lastIndexOf(e, r - c - 1) : -1;
      if (p >= 0 && p + e.length + c >= t)
        return c + p;
      if (t == r && u.length >= r + e.length - c && u.slice(r - c, r - c + e.length) == e)
        return r;
    }
  }
  return -1;
}
function _u(n, e, t, r, i) {
  let s = [];
  for (let a = 0, c = 0; a < n.length; a++) {
    let u = n[a], p = c, d = c += u.size;
    p >= t || d <= e ? s.push(u) : (p < e && s.push(u.slice(0, e - p, r)), i && (s.push(i), i = void 0), d > t && s.push(u.slice(t - p, u.size, r)));
  }
  return s;
}
function Ju(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, a = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (a < 0)
    return null;
  let c = r.resolve(a), u, p;
  if (rl(t)) {
    for (u = c; i && !i.node; )
      i = i.parent;
    let d = i.node;
    if (i && d.isAtom && le.isSelectable(d) && i.parent && !(d.isInline && LT(t.focusNode, t.focusOffset, i.dom))) {
      let h = i.posBefore;
      p = new le(a == h ? c : r.resolve(h));
    }
  } else {
    let d = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (d < 0)
      return null;
    u = r.resolve(d);
  }
  if (!p) {
    let d = e == "pointer" || n.state.selection.head < c.pos && !s ? 1 : -1;
    p = Gu(n, u, c, d);
  }
  return p;
}
function Qg(n) {
  return n.editable ? n.hasFocus() : ty(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function kr(n, e = !1) {
  let t = n.state.selection;
  if (ey(n, t), !!Qg(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Qt) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Ci(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      pA(n);
    else {
      let { anchor: r, head: i } = t, s, a;
      Ph && !(t instanceof be) && (t.$from.parent.inlineContent || (s = Lh(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (a = Lh(n, t.to))), n.docView.setSelection(r, i, n.root, e), Ph && (s && Bh(s), a && Bh(a)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && dA(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Ph = Ht || Qt && FT < 63;
function Lh(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (Ht && i && i.contentEditable == "false")
    return Uc(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return Uc(i);
    if (s)
      return Uc(s);
  }
}
function Uc(n) {
  return n.contentEditable = "true", Ht && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Bh(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function dA(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Qg(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function pA(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, hn(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && en && jr <= 11 && (r.disabled = !0, r.disabled = !1);
}
function ey(n, e) {
  if (e instanceof le) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && ($h(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    $h(n);
}
function $h(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function Gu(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || be.between(e, t, r);
}
function Fh(n) {
  return n.editable && !n.hasFocus() ? !1 : ty(n);
}
function ty(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function hA(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Ci(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Su(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && ge.findFrom(s, e);
}
function gi(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Vh(n, e, t) {
  let r = n.state.selection;
  if (r instanceof be) {
    if (!r.empty || t.indexOf("s") > -1)
      return !1;
    if (n.endOfTextblock(e > 0 ? "right" : "left")) {
      let i = Su(n.state, e);
      return i && i instanceof le ? gi(n, i) : !1;
    } else if (!(On && t.indexOf("m") > -1)) {
      let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, a;
      if (!s || s.isText)
        return !1;
      let c = e < 0 ? i.pos - s.nodeSize : i.pos;
      return s.isAtom || (a = n.docView.descAt(c)) && !a.contentDOM ? le.isSelectable(s) ? gi(n, new le(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : il ? gi(n, new be(n.state.doc.resolve(e < 0 ? c : c + s.nodeSize))) : !1 : !1;
    }
  } else {
    if (r instanceof le && r.node.isInline)
      return gi(n, new be(e > 0 ? r.$to : r.$from));
    {
      let i = Su(n.state, e);
      return i ? gi(n, i) : !1;
    }
  }
}
function Va(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function fs(n) {
  let e = n.pmViewDesc;
  return e && e.size == 0 && (n.nextSibling || n.nodeName != "BR");
}
function jc(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, a = !1;
  for (Wn && t.nodeType == 1 && r < Va(t) && fs(t.childNodes[r]) && (a = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let c = t.childNodes[r - 1];
        if (fs(c))
          i = t, s = --r;
        else if (c.nodeType == 3)
          t = c, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (ny(t))
        break;
      {
        let c = t.previousSibling;
        for (; c && fs(c); )
          i = t.parentNode, s = hn(c), c = c.previousSibling;
        if (c)
          t = c, r = Va(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  a ? ku(n, t, r) : i && ku(n, i, s);
}
function qc(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Va(t), s, a;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let c = t.childNodes[r];
      if (fs(c))
        s = t, a = ++r;
      else
        break;
    } else {
      if (ny(t))
        break;
      {
        let c = t.nextSibling;
        for (; c && fs(c); )
          s = c.parentNode, a = hn(c) + 1, c = c.nextSibling;
        if (c)
          t = c, r = 0, i = Va(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && ku(n, s, a);
}
function ny(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function ku(n, e, t) {
  let r = n.domSelection();
  if (rl(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && kr(n);
  }, 50);
}
function zh(n, e, t) {
  let r = n.state.selection;
  if (r instanceof be && !r.empty || t.indexOf("s") > -1 || On && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let a = Su(n.state, e);
    if (a && a instanceof le)
      return gi(n, a);
  }
  if (!i.parent.inlineContent) {
    let a = e < 0 ? i : s, c = r instanceof Vn ? ge.near(a, e) : ge.findFrom(a, e);
    return c ? gi(n, c) : !1;
  }
  return !1;
}
function Hh(n, e) {
  if (!(n.state.selection instanceof be))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let a = n.state.tr;
    return e < 0 ? a.delete(t.pos - s.nodeSize, t.pos) : a.delete(t.pos, t.pos + s.nodeSize), n.dispatch(a), !0;
  }
  return !1;
}
function Wh(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function mA(n) {
  if (!Ht || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Wh(n, r, "true"), setTimeout(() => Wh(n, r, "false"), 20);
  }
  return !1;
}
function gA(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function yA(n, e) {
  let t = e.keyCode, r = gA(e);
  return t == 8 || On && t == 72 && r == "c" ? Hh(n, -1) || jc(n) : t == 46 || On && t == 68 && r == "c" ? Hh(n, 1) || qc(n) : t == 13 || t == 27 ? !0 : t == 37 || On && t == 66 && r == "c" ? Vh(n, -1, r) || jc(n) : t == 39 || On && t == 70 && r == "c" ? Vh(n, 1, r) || qc(n) : t == 38 || On && t == 80 && r == "c" ? zh(n, -1, r) || jc(n) : t == 40 || On && t == 78 && r == "c" ? mA(n) || zh(n, 1, r) || qc(n) : r == (On ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90);
}
function ry(n, e) {
  n.someProp("transformCopied", (y) => {
    e = y(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let y = r.firstChild;
    t.push(y.type.name, y.attrs != y.type.defaultAttrs ? y.attrs : null), r = y.content;
  }
  let a = n.someProp("clipboardSerializer") || er.fromSchema(n.state.schema), c = cy(), u = c.createElement("div");
  u.appendChild(a.serializeFragment(r, { document: c }));
  let p = u.firstChild, d, h = 0;
  for (; p && p.nodeType == 1 && (d = ly[p.nodeName.toLowerCase()]); ) {
    for (let y = d.length - 1; y >= 0; y--) {
      let x = c.createElement(d[y]);
      for (; u.firstChild; )
        x.appendChild(u.firstChild);
      u.appendChild(x), h++;
    }
    p = u.firstChild;
  }
  p && p.nodeType == 1 && p.setAttribute("data-pm-slice", `${i} ${s}${h ? ` -${h}` : ""} ${JSON.stringify(t)}`);
  let g = n.someProp("clipboardTextSerializer", (y) => y(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: u, text: g };
}
function iy(n, e, t, r, i) {
  let s = i.parent.type.spec.code, a, c;
  if (!t && !e)
    return null;
  let u = e && (r || s || !t);
  if (u) {
    if (n.someProp("transformPastedText", (g) => {
      e = g(e, s || r, n);
    }), s)
      return e ? new Y(z.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : Y.empty;
    let h = n.someProp("clipboardTextParser", (g) => g(e, i, r, n));
    if (h)
      c = h;
    else {
      let g = i.marks(), { schema: y } = n.state, x = er.fromSchema(y);
      a = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((_) => {
        let O = a.appendChild(document.createElement("p"));
        _ && O.appendChild(x.serializeNode(y.text(_, g)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (h) => {
      t = h(t, n);
    }), a = wA(t), il && xA(a);
  let p = a && a.querySelector("[data-pm-slice]"), d = p && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(p.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let h = +d[3]; h > 0; h--) {
      let g = a.firstChild;
      for (; g && g.nodeType != 1; )
        g = g.nextSibling;
      if (!g)
        break;
      a = g;
    }
  if (c || (c = (n.someProp("clipboardParser") || n.someProp("domParser") || fo.fromSchema(n.state.schema)).parseSlice(a, {
    preserveWhitespace: !!(u || d),
    context: i,
    ruleFromNode(g) {
      return g.nodeName == "BR" && !g.nextSibling && g.parentNode && !vA.test(g.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    c = _A(Uh(c, +d[1], +d[2]), d[4]);
  else if (c = Y.maxOpen(bA(c.content, i), !0), c.openStart || c.openEnd) {
    let h = 0, g = 0;
    for (let y = c.content.firstChild; h < c.openStart && !y.type.spec.isolating; h++, y = y.firstChild)
      ;
    for (let y = c.content.lastChild; g < c.openEnd && !y.type.spec.isolating; g++, y = y.lastChild)
      ;
    c = Uh(c, h, g);
  }
  return n.someProp("transformPasted", (h) => {
    c = h(c, n);
  }), c;
}
const vA = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function bA(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, a = [];
    if (n.forEach((c) => {
      if (!a)
        return;
      let u = i.findWrapping(c.type), p;
      if (!u)
        return a = null;
      if (p = a.length && s.length && sy(u, s, c, a[a.length - 1], 0))
        a[a.length - 1] = p;
      else {
        a.length && (a[a.length - 1] = ay(a[a.length - 1], s.length));
        let d = oy(c, u);
        a.push(d), i = i.matchType(d.type), s = u;
      }
    }), a)
      return z.from(a);
  }
  return n;
}
function oy(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, z.from(n));
  return n;
}
function sy(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = sy(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(z.from(oy(t, n, i + 1))));
  }
}
function ay(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, ay(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(z.empty, !0);
  return n.copy(t.append(r));
}
function Eu(n, e, t, r, i, s) {
  let a = e < 0 ? n.firstChild : n.lastChild, c = a.content;
  return i < r - 1 && (c = Eu(c, e, t, r, i + 1, s)), i >= t && (c = e < 0 ? a.contentMatchAt(0).fillBefore(c, n.childCount > 1 || s <= i).append(c) : c.append(a.contentMatchAt(a.childCount).fillBefore(z.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, a.copy(c));
}
function Uh(n, e, t) {
  return e < n.openStart && (n = new Y(Eu(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new Y(Eu(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const ly = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let jh = null;
function cy() {
  return jh || (jh = document.implementation.createHTMLDocument("title"));
}
function wA(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = cy().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && ly[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = n, i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function xA(n) {
  let e = n.querySelectorAll(Qt ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function _A(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: a } = n;
  for (let c = r.length - 2; c >= 0; c -= 2) {
    let u = t.nodes[r[c]];
    if (!u || u.hasRequiredAttrs())
      break;
    i = z.from(u.create(r[c + 1], i)), s++, a++;
  }
  return new Y(i, s, a);
}
const Wt = {}, Ut = {}, SA = { touchstart: !0, touchmove: !0 };
class kA {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function EA(n) {
  for (let e in Wt) {
    let t = Wt[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      OA(n, r) && !Yu(n, r) && (n.editable || !(r.type in Ut)) && t(n, r);
    }, SA[e] ? { passive: !0 } : void 0);
  }
  Ht && n.dom.addEventListener("input", () => null), Cu(n);
}
function Ur(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function CA(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Cu(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => Yu(n, r));
  });
}
function Yu(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function OA(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function TA(n, e) {
  !Yu(n, e) && Wt[e.type] && (n.editable || !(e.type in Ut)) && Wt[e.type](n, e);
}
Ut.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !fy(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Qn && Qt && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), mo && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, no(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || yA(n, t) ? t.preventDefault() : Ur(n, "key");
};
Ut.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Ut.keypress = (n, e) => {
  let t = e;
  if (fy(n, t) || !t.charCode || t.ctrlKey && !t.altKey || On && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof be) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    n.someProp("handleTextInput", (s) => s(n, r.$from.pos, r.$to.pos, i)) || n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function sl(n) {
  return { left: n.clientX, top: n.clientY };
}
function AA(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Xu(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let a = s.depth + 1; a > 0; a--)
    if (n.someProp(e, (c) => a > s.depth ? c(n, t, s.nodeAfter, s.before(a), i, !0) : c(n, t, s.node(a), s.before(a), i, !1)))
      return !0;
  return !1;
}
function co(n, e, t) {
  n.focused || n.focus();
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function MA(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && le.isSelectable(r) ? (co(n, new le(t), "pointer"), !0) : !1;
}
function NA(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof le && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let a = s.depth + 1; a > 0; a--) {
    let c = a > s.depth ? s.nodeAfter : s.node(a);
    if (le.isSelectable(c)) {
      r && t.$from.depth > 0 && a >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(a);
      break;
    }
  }
  return i != null ? (co(n, le.create(n.state.doc, i), "pointer"), !0) : !1;
}
function DA(n, e, t, r, i) {
  return Xu(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? NA(n, t) : MA(n, t));
}
function RA(n, e, t, r) {
  return Xu(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function IA(n, e, t, r) {
  return Xu(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || PA(n, t, r);
}
function PA(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (co(n, be.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let a = s > i.depth ? i.nodeAfter : i.node(s), c = i.before(s);
    if (a.inlineContent)
      co(n, be.create(r, c + 1, c + 1 + a.content.size), "pointer");
    else if (le.isSelectable(a))
      co(n, le.create(r, c), "pointer");
    else
      continue;
    return !0;
  }
}
function Zu(n) {
  return za(n);
}
const uy = On ? "metaKey" : "ctrlKey";
Wt.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = Zu(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && AA(t, n.input.lastClick) && !t[uy] && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s };
  let a = n.posAtCoords(sl(t));
  !a || (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new LA(n, a, t, !!r)) : (s == "doubleClick" ? RA : IA)(n, a.pos, a.inside, t) ? t.preventDefault() : Ur(n, "pointer"));
};
class LA {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[uy], this.allowDefault = r.shiftKey;
    let s, a;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), a = t.inside;
    else {
      let d = e.state.doc.resolve(t.pos);
      s = d.parent, a = d.depth ? d.before() : 0;
    }
    const c = i ? null : r.target, u = c ? e.docView.nearestDesc(c, !0) : null;
    this.target = u ? u.dom : null;
    let { selection: p } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || p instanceof le && p.from <= a && p.to > a) && (this.mightDrag = {
      node: s,
      pos: a,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Wn && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Ur(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => kr(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(sl(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Ur(this.view, "pointer") : DA(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || Ht && this.mightDrag && !this.mightDrag.node.isAtom || Qt && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (co(this.view, ge.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : Ur(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Ur(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Wt.touchstart = (n) => {
  n.input.lastTouch = Date.now(), Zu(n), Ur(n, "pointer");
};
Wt.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Ur(n, "pointer");
};
Wt.contextmenu = (n) => Zu(n);
function fy(n, e) {
  return n.composing ? !0 : Ht && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const BA = Qn ? 5e3 : -1;
Ut.compositionstart = Ut.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), za(n, !0), n.markCursor = null;
    else if (za(n), Wn && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let a = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!a)
          break;
        if (a.nodeType == 3) {
          n.domSelection().collapse(a, a.nodeValue.length);
          break;
        } else
          i = a, s = -1;
      }
    }
    n.input.composing = !0;
  }
  dy(n, BA);
};
Ut.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, dy(n, 20));
};
function dy(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => za(n), e));
}
function py(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = $A()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function $A() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function za(n, e = !1) {
  if (!(Qn && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), py(n), e || n.docView && n.docView.dirty) {
      let t = Ju(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function FA(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const go = en && jr < 15 || mo && VT < 604;
Wt.copy = Ut.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = go ? null : t.clipboardData, a = r.content(), { dom: c, text: u } = ry(n, a);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", c.innerHTML), s.setData("text/plain", u)) : FA(n, c), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function VA(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function zA(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus(), setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Ou(n, r.value, null, e) : Ou(n, r.textContent, r.innerHTML, e);
  }, 50);
}
function Ou(n, e, t, r) {
  let i = iy(n, e, t, n.input.shiftKey, n.state.selection.$from);
  if (n.someProp("handlePaste", (c) => c(n, r, i || Y.empty)))
    return !0;
  if (!i)
    return !1;
  let s = VA(i), a = s ? n.state.tr.replaceSelectionWith(s, n.input.shiftKey) : n.state.tr.replaceSelection(i);
  return n.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
Ut.paste = (n, e) => {
  let t = e;
  if (n.composing && !Qn)
    return;
  let r = go ? null : t.clipboardData;
  r && Ou(n, r.getData("text/plain"), r.getData("text/html"), t) ? t.preventDefault() : zA(n, t);
};
class HA {
  constructor(e, t) {
    this.slice = e, this.move = t;
  }
}
const hy = On ? "altKey" : "ctrlKey";
Wt.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(sl(t));
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof le ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      n.dispatch(n.state.tr.setSelection(le.create(n.state.doc, r.mightDrag.pos)));
    else if (t.target && t.target.nodeType == 1) {
      let p = n.docView.nearestDesc(t.target, !0);
      p && p.node.type.spec.draggable && p != n.docView && n.dispatch(n.state.tr.setSelection(le.create(n.state.doc, p.posBefore)));
    }
  }
  let a = n.state.selection.content(), { dom: c, text: u } = ry(n, a);
  t.dataTransfer.clearData(), t.dataTransfer.setData(go ? "Text" : "text/html", c.innerHTML), t.dataTransfer.effectAllowed = "copyMove", go || t.dataTransfer.setData("text/plain", u), n.dragging = new HA(a, !t[hy]);
};
Wt.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Ut.dragover = Ut.dragenter = (n, e) => e.preventDefault();
Ut.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(sl(t));
  if (!i)
    return;
  let s = n.state.doc.resolve(i.pos), a = r && r.slice;
  a ? n.someProp("transformPasted", (x) => {
    a = x(a, n);
  }) : a = iy(n, t.dataTransfer.getData(go ? "Text" : "text/plain"), go ? null : t.dataTransfer.getData("text/html"), !1, s);
  let c = !!(r && !t[hy]);
  if (n.someProp("handleDrop", (x) => x(n, t, a || Y.empty, c))) {
    t.preventDefault();
    return;
  }
  if (!a)
    return;
  t.preventDefault();
  let u = a ? Ig(n.state.doc, s.pos, a) : s.pos;
  u == null && (u = s.pos);
  let p = n.state.tr;
  c && p.deleteSelection();
  let d = p.mapping.map(u), h = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1, g = p.doc;
  if (h ? p.replaceRangeWith(d, d, a.content.firstChild) : p.replaceRange(d, d, a), p.doc.eq(g))
    return;
  let y = p.doc.resolve(d);
  if (h && le.isSelectable(a.content.firstChild) && y.nodeAfter && y.nodeAfter.sameMarkup(a.content.firstChild))
    p.setSelection(new le(y));
  else {
    let x = p.mapping.map(u);
    p.mapping.maps[p.mapping.maps.length - 1].forEach((_, O, M, I) => x = I), p.setSelection(Gu(n, y, p.doc.resolve(x)));
  }
  n.focus(), n.dispatch(p.setMeta("uiEvent", "drop"));
};
Wt.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && kr(n);
  }, 20));
};
Wt.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
Wt.beforeinput = (n, e) => {
  if (Qt && Qn && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, no(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Ut)
  Wt[n] = Ut[n];
function bs(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Qu {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || xi, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: a } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return a ? null : new An(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Qu && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && bs(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class qr {
  constructor(e, t) {
    this.attrs = e, this.spec = t || xi;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, a = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= a ? null : new An(s, a, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof qr && bs(this.attrs, e.attrs) && bs(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof qr;
  }
  destroy() {
  }
}
class ef {
  constructor(e, t) {
    this.attrs = e, this.spec = t || xi;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let a = e.mapResult(t.to + i, -1);
    return a.deleted || a.pos <= s.pos ? null : new An(s.pos - r, a.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof ef && bs(this.attrs, e.attrs) && bs(this.spec, e.spec);
  }
  destroy() {
  }
}
class An {
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  copy(e, t) {
    return new An(e, t, this.type);
  }
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  static widget(e, t, r) {
    return new An(e, e, new Qu(t, r));
  }
  static inline(e, t, r, i) {
    return new An(e, t, new qr(r, i));
  }
  static node(e, t, r, i) {
    return new An(e, t, new ef(r, i));
  }
  get spec() {
    return this.type.spec;
  }
  get inline() {
    return this.type instanceof qr;
  }
}
const Qi = [], xi = {};
class dt {
  constructor(e, t) {
    this.local = e.length ? e : Qi, this.children = t.length ? t : Qi;
  }
  static create(e, t) {
    return t.length ? Ha(t, e, 0, xi) : Nt;
  }
  find(e, t, r) {
    let i = [];
    return this.findInner(e == null ? 0 : e, t == null ? 1e9 : t, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let a = 0; a < this.local.length; a++) {
      let c = this.local[a];
      c.from <= t && c.to >= e && (!s || s(c.spec)) && r.push(c.copy(c.from + i, c.to + i));
    }
    for (let a = 0; a < this.children.length; a += 3)
      if (this.children[a] < t && this.children[a + 1] > e) {
        let c = this.children[a] + 1;
        this.children[a + 2].findInner(e - c, t - c, r, i + c, s);
      }
  }
  map(e, t, r) {
    return this == Nt || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || xi);
  }
  mapInner(e, t, r, i, s) {
    let a;
    for (let c = 0; c < this.local.length; c++) {
      let u = this.local[c].map(e, r, i);
      u && u.type.valid(t, u) ? (a || (a = [])).push(u) : s.onRemove && s.onRemove(this.local[c].spec);
    }
    return this.children.length ? WA(this.children, a || [], e, t, r, i, s) : a ? new dt(a.sort(_i), Qi) : Nt;
  }
  add(e, t) {
    return t.length ? this == Nt ? dt.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((c, u) => {
      let p = u + r, d;
      if (!!(d = gy(t, c, p))) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < u; )
          s += 3;
        i[s] == u ? i[s + 2] = i[s + 2].addInner(c, d, p + 1) : i.splice(s, 0, u, u + c.nodeSize, Ha(d, c, p + 1, xi)), s += 3;
      }
    });
    let a = my(s ? yy(t) : t, -r);
    for (let c = 0; c < a.length; c++)
      a[c].type.valid(e, a[c]) || a.splice(c--, 1);
    return new dt(a.length ? this.local.concat(a).sort(_i) : this.local, i || this.children);
  }
  remove(e) {
    return e.length == 0 || this == Nt ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let a, c = r[s] + t, u = r[s + 1] + t;
      for (let d = 0, h; d < e.length; d++)
        (h = e[d]) && h.from > c && h.to < u && (e[d] = null, (a || (a = [])).push(h));
      if (!a)
        continue;
      r == this.children && (r = this.children.slice());
      let p = r[s + 2].removeInner(a, c + 1);
      p != Nt ? r[s + 2] = p : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, a; s < e.length; s++)
        if (a = e[s])
          for (let c = 0; c < i.length; c++)
            i[c].eq(a, t) && (i == this.local && (i = this.local.slice()), i.splice(c--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new dt(i, r) : Nt;
  }
  forChild(e, t) {
    if (this == Nt)
      return this;
    if (t.isLeaf)
      return dt.empty;
    let r, i;
    for (let c = 0; c < this.children.length; c += 3)
      if (this.children[c] >= e) {
        this.children[c] == e && (r = this.children[c + 2]);
        break;
      }
    let s = e + 1, a = s + t.content.size;
    for (let c = 0; c < this.local.length; c++) {
      let u = this.local[c];
      if (u.from < a && u.to > s && u.type instanceof qr) {
        let p = Math.max(s, u.from) - s, d = Math.min(a, u.to) - s;
        p < d && (i || (i = [])).push(u.copy(p, d));
      }
    }
    if (i) {
      let c = new dt(i.sort(_i), Qi);
      return r ? new zr([c, r]) : c;
    }
    return r || Nt;
  }
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof dt) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  locals(e) {
    return tf(this.localsInner(e));
  }
  localsInner(e) {
    if (this == Nt)
      return Qi;
    if (e.inlineContent || !this.local.some(qr.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof qr || t.push(this.local[r]);
    return t;
  }
}
dt.empty = new dt([], []);
dt.removeOverlap = tf;
const Nt = dt.empty;
class zr {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, xi));
    return zr.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return dt.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != Nt && (s instanceof zr ? r = r.concat(s.members) : r.push(s));
    }
    return zr.from(r);
  }
  eq(e) {
    if (!(e instanceof zr) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (!!s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let a = 0; a < s.length; a++)
            t.push(s[a]);
        }
    }
    return t ? tf(r ? t : t.sort(_i)) : Qi;
  }
  static from(e) {
    switch (e.length) {
      case 0:
        return Nt;
      case 1:
        return e[0];
      default:
        return new zr(e.every((t) => t instanceof dt) ? e : e.reduce((t, r) => t.concat(r instanceof dt ? r : r.members), []));
    }
  }
}
function WA(n, e, t, r, i, s, a) {
  let c = n.slice();
  for (let p = 0, d = s; p < t.maps.length; p++) {
    let h = 0;
    t.maps[p].forEach((g, y, x, _) => {
      let O = _ - x - (y - g);
      for (let M = 0; M < c.length; M += 3) {
        let I = c[M + 1];
        if (I < 0 || g > I + d - h)
          continue;
        let W = c[M] + d - h;
        y >= W ? c[M + 1] = g <= W ? -2 : -1 : x >= i && O && (c[M] += O, c[M + 1] += O);
      }
      h += O;
    }), d = t.maps[p].map(d, -1);
  }
  let u = !1;
  for (let p = 0; p < c.length; p += 3)
    if (c[p + 1] < 0) {
      if (c[p + 1] == -2) {
        u = !0, c[p + 1] = -1;
        continue;
      }
      let d = t.map(n[p] + s), h = d - i;
      if (h < 0 || h >= r.content.size) {
        u = !0;
        continue;
      }
      let g = t.map(n[p + 1] + s, -1), y = g - i, { index: x, offset: _ } = r.content.findIndex(h), O = r.maybeChild(x);
      if (O && _ == h && _ + O.nodeSize == y) {
        let M = c[p + 2].mapInner(t, O, d + 1, n[p] + s + 1, a);
        M != Nt ? (c[p] = h, c[p + 1] = y, c[p + 2] = M) : (c[p + 1] = -2, u = !0);
      } else
        u = !0;
    }
  if (u) {
    let p = UA(c, n, e, t, i, s, a), d = Ha(p, r, 0, a);
    e = d.local;
    for (let h = 0; h < c.length; h += 3)
      c[h + 1] < 0 && (c.splice(h, 3), h -= 3);
    for (let h = 0, g = 0; h < d.children.length; h += 3) {
      let y = d.children[h];
      for (; g < c.length && c[g] < y; )
        g += 3;
      c.splice(g, 0, d.children[h], d.children[h + 1], d.children[h + 2]);
    }
  }
  return new dt(e.sort(_i), c);
}
function my(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new An(i.from + e, i.to + e, i.type));
  }
  return t;
}
function UA(n, e, t, r, i, s, a) {
  function c(u, p) {
    for (let d = 0; d < u.local.length; d++) {
      let h = u.local[d].map(r, i, p);
      h ? t.push(h) : a.onRemove && a.onRemove(u.local[d].spec);
    }
    for (let d = 0; d < u.children.length; d += 3)
      c(u.children[d + 2], u.children[d] + p + 1);
  }
  for (let u = 0; u < n.length; u += 3)
    n[u + 1] == -1 && c(n[u + 2], e[u] + s + 1);
  return t;
}
function gy(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, a; s < n.length; s++)
    (a = n[s]) && a.from > t && a.to < r && ((i || (i = [])).push(a), n[s] = null);
  return i;
}
function yy(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function Ha(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((c, u) => {
    let p = gy(n, c, u + t);
    if (p) {
      s = !0;
      let d = Ha(p, c, t + u + 1, r);
      d != Nt && i.push(u, u + c.nodeSize, d);
    }
  });
  let a = my(s ? yy(n) : n, -t).sort(_i);
  for (let c = 0; c < a.length; c++)
    a[c].type.valid(e, a[c]) || (r.onRemove && r.onRemove(a[c].spec), a.splice(c--, 1));
  return a.length || i.length ? new dt(a, i) : Nt;
}
function _i(n, e) {
  return n.from - e.from || n.to - e.to;
}
function tf(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), qh(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), qh(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function qh(n, e, t) {
  for (; e < n.length && _i(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function Kc(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != Nt && e.push(r);
  }), n.cursorWrapper && e.push(dt.create(n.state.doc, [n.cursorWrapper.deco])), zr.from(e);
}
const jA = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, qA = en && jr <= 11;
class KA {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class JA {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new KA(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      en && jr <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), qA && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, jA)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (!!Fh(this.view)) {
      if (this.suppressingSelectionUpdates)
        return kr(this.view);
      if (en && jr <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Ci(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = vs(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = vs(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.observer ? this.observer.takeRecords() : [];
    this.queue.length && (t = this.queue.concat(t), this.queue.length = 0);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Fh(e) && !this.ignoreSelectionChange(r), s = -1, a = -1, c = !1, u = [];
    if (e.editable)
      for (let d = 0; d < t.length; d++) {
        let h = this.registerMutation(t[d], u);
        h && (s = s < 0 ? h.from : Math.min(h.from, s), a = a < 0 ? h.to : Math.max(h.to, a), h.typeOver && (c = !0));
      }
    if (Wn && u.length > 1) {
      let d = u.filter((h) => h.nodeName == "BR");
      if (d.length == 2) {
        let h = d[0], g = d[1];
        h.parentNode && h.parentNode.parentNode == g.parentNode ? g.remove() : h.remove();
      }
    }
    let p = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && e.input.lastTouch < Date.now() - 300 && rl(r) && (p = Ju(e)) && p.eq(ge.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, kr(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, a), GA(e)), this.handleDOMChange(s, a, c, u), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || kr(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++)
        t.push(e.addedNodes[d]);
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (en && jr <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: h, nextSibling: g } = e.addedNodes[d];
          (!h || Array.prototype.indexOf.call(e.addedNodes, h) < 0) && (i = h), (!g || Array.prototype.indexOf.call(e.addedNodes, g) < 0) && (s = g);
        }
      let a = i && i.parentNode == e.target ? hn(i) + 1 : 0, c = r.localPosFromDOM(e.target, a, -1), u = s && s.parentNode == e.target ? hn(s) : e.target.childNodes.length, p = r.localPosFromDOM(e.target, u, 1);
      return { from: c, to: p };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : {
        from: r.posAtStart,
        to: r.posAtEnd,
        typeOver: e.target.nodeValue == e.oldValue
      };
  }
}
let Kh = /* @__PURE__ */ new WeakMap(), Jh = !1;
function GA(n) {
  if (!Kh.has(n) && (Kh.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = Wn, Jh)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Jh = !0;
  }
}
function YA(n) {
  let e;
  function t(u) {
    u.preventDefault(), u.stopImmediatePropagation(), e = u.getTargetRanges()[0];
  }
  n.dom.addEventListener("beforeinput", t, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", t, !0);
  let r = e.startContainer, i = e.startOffset, s = e.endContainer, a = e.endOffset, c = n.domAtPos(n.state.selection.anchor);
  return Ci(c.node, c.offset, s, a) && ([r, i, s, a] = [s, a, r, i]), { anchorNode: r, anchorOffset: i, focusNode: s, focusOffset: a };
}
function XA(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: a, to: c } = n.docView.parseRange(e, t), u = n.domSelectionRange(), p, d = u.anchorNode;
  if (d && n.dom.contains(d.nodeType == 1 ? d : d.parentNode) && (p = [{ node: d, offset: u.anchorOffset }], rl(u) || p.push({ node: u.focusNode, offset: u.focusOffset })), Qt && n.input.lastKeyCode === 8)
    for (let O = s; O > i; O--) {
      let M = r.childNodes[O - 1], I = M.pmViewDesc;
      if (M.nodeName == "BR" && !I) {
        s = O;
        break;
      }
      if (!I || I.size)
        break;
    }
  let h = n.state.doc, g = n.someProp("domParser") || fo.fromSchema(n.state.schema), y = h.resolve(a), x = null, _ = g.parse(r, {
    topNode: y.parent,
    topMatch: y.parent.contentMatchAt(y.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: y.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: p,
    ruleFromNode: ZA,
    context: y
  });
  if (p && p[0].pos != null) {
    let O = p[0].pos, M = p[1] && p[1].pos;
    M == null && (M = O), x = { anchor: O + a, head: M + a };
  }
  return { doc: _, sel: x, from: a, to: c };
}
function ZA(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Ht && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Ht && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
function QA(n, e, t, r, i) {
  if (e < 0) {
    let K = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, we = Ju(n, K);
    if (we && !n.state.selection.eq(we)) {
      let De = n.state.tr.setSelection(we);
      K == "pointer" ? De.setMeta("pointer", !0) : K == "key" && De.scrollIntoView(), n.dispatch(De);
    }
    return;
  }
  let s = n.state.doc.resolve(e), a = s.sharedDepth(t);
  e = s.before(a + 1), t = n.state.doc.resolve(t).after(a + 1);
  let c = n.state.selection, u = XA(n, e, t), p = n.state.doc, d = p.slice(u.from, u.to), h, g;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (h = n.state.selection.to, g = "end") : (h = n.state.selection.from, g = "start"), n.input.lastKeyCode = null;
  let y = nM(d.content, u.doc.content, u.from, h, g);
  if ((mo && n.input.lastIOSEnter > Date.now() - 225 || Qn) && i.some((K) => K.nodeName == "DIV" || K.nodeName == "P" || K.nodeName == "LI") && (!y || y.endA >= y.endB) && n.someProp("handleKeyDown", (K) => K(n, no(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!y)
    if (r && c instanceof be && !c.empty && c.$head.sameParent(c.$anchor) && !n.composing && !(u.sel && u.sel.anchor != u.sel.head))
      y = { start: c.from, endA: c.to, endB: c.to };
    else {
      if (u.sel) {
        let K = Gh(n, n.state.doc, u.sel);
        K && !K.eq(n.state.selection) && n.dispatch(n.state.tr.setSelection(K));
      }
      return;
    }
  if (Qt && n.cursorWrapper && u.sel && u.sel.anchor == n.cursorWrapper.deco.from && u.sel.head == u.sel.anchor) {
    let K = y.endB - y.start;
    u.sel = { anchor: u.sel.anchor + K, head: u.sel.anchor + K };
  }
  n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && y.start == y.endB && n.state.selection instanceof be && (y.start > n.state.selection.from && y.start <= n.state.selection.from + 2 && n.state.selection.from >= u.from ? y.start = n.state.selection.from : y.endA < n.state.selection.to && y.endA >= n.state.selection.to - 2 && n.state.selection.to <= u.to && (y.endB += n.state.selection.to - y.endA, y.endA = n.state.selection.to)), en && jr <= 11 && y.endB == y.start + 1 && y.endA == y.start && y.start > u.from && u.doc.textBetween(y.start - u.from - 1, y.start - u.from + 1) == " \xA0" && (y.start--, y.endA--, y.endB--);
  let x = u.doc.resolveNoCache(y.start - u.from), _ = u.doc.resolveNoCache(y.endB - u.from), O = p.resolve(y.start), M = x.sameParent(_) && x.parent.inlineContent && O.end() >= y.endA, I;
  if ((mo && n.input.lastIOSEnter > Date.now() - 225 && (!M || i.some((K) => K.nodeName == "DIV" || K.nodeName == "P")) || !M && x.pos < u.doc.content.size && (I = ge.findFrom(u.doc.resolve(x.pos + 1), 1, !0)) && I.head == _.pos) && n.someProp("handleKeyDown", (K) => K(n, no(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > y.start && tM(p, y.start, y.endA, x, _) && n.someProp("handleKeyDown", (K) => K(n, no(8, "Backspace")))) {
    Qn && Qt && n.domObserver.suppressSelectionUpdates();
    return;
  }
  Qt && Qn && y.endB == y.start && (n.input.lastAndroidDelete = Date.now()), Qn && !M && x.start() != _.start() && _.parentOffset == 0 && x.depth == _.depth && u.sel && u.sel.anchor == u.sel.head && u.sel.head == y.endA && (y.endB -= 2, _ = u.doc.resolveNoCache(y.endB - u.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(K) {
      return K(n, no(13, "Enter"));
    });
  }, 20));
  let W = y.start, E = y.endA, U, $, Z;
  if (M) {
    if (x.pos == _.pos)
      en && jr <= 11 && x.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => kr(n), 20)), U = n.state.tr.delete(W, E), $ = p.resolve(y.start).marksAcross(p.resolve(y.endA));
    else if (y.endA == y.endB && (Z = eM(x.parent.content.cut(x.parentOffset, _.parentOffset), O.parent.content.cut(O.parentOffset, y.endA - O.start()))))
      U = n.state.tr, Z.type == "add" ? U.addMark(W, E, Z.mark) : U.removeMark(W, E, Z.mark);
    else if (x.parent.child(x.index()).isText && x.index() == _.index() - (_.textOffset ? 0 : 1)) {
      let K = x.parent.textBetween(x.parentOffset, _.parentOffset);
      if (n.someProp("handleTextInput", (we) => we(n, W, E, K)))
        return;
      U = n.state.tr.insertText(K, W, E);
    }
  }
  if (U || (U = n.state.tr.replace(W, E, u.doc.slice(y.start - u.from, y.endB - u.from))), u.sel) {
    let K = Gh(n, U.doc, u.sel);
    K && !(Qt && Qn && n.composing && K.empty && (y.start != y.endB || n.input.lastAndroidDelete < Date.now() - 100) && (K.head == W || K.head == U.mapping.map(E) - 1) || en && K.empty && K.head == W) && U.setSelection(K);
  }
  $ && U.ensureMarks($), n.dispatch(U.scrollIntoView());
}
function Gh(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : Gu(n, e.resolve(t.anchor), e.resolve(t.head));
}
function eM(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, a, c, u;
  for (let d = 0; d < r.length; d++)
    i = r[d].removeFromSet(i);
  for (let d = 0; d < t.length; d++)
    s = t[d].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    c = i[0], a = "add", u = (d) => d.mark(c.addToSet(d.marks));
  else if (i.length == 0 && s.length == 1)
    c = s[0], a = "remove", u = (d) => d.mark(c.removeFromSet(d.marks));
  else
    return null;
  let p = [];
  for (let d = 0; d < e.childCount; d++)
    p.push(u(e.child(d)));
  if (z.from(p).eq(n))
    return { mark: c, type: a };
}
function tM(n, e, t, r, i) {
  if (!r.parent.isTextblock || t - e <= i.pos - r.pos || Jc(r, !0, !1) < i.pos)
    return !1;
  let s = n.resolve(e);
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let a = n.resolve(Jc(s, !0, !0));
  return !a.parent.isTextblock || a.pos > t || Jc(a, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(a.parent.content);
}
function Jc(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function nM(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a, b: c } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let u = Math.max(0, s - Math.min(a, c));
    r -= a + u - s;
  }
  if (a < s && n.size < e.size) {
    let u = r <= s && r >= a ? s - r : 0;
    s -= u, c = s + (c - a), a = s;
  } else if (c < s) {
    let u = r <= s && r >= c ? s - r : 0;
    s -= u, a = s + (a - c), c = s;
  }
  return { start: s, endA: a, endB: c };
}
class rM {
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new kA(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(em), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Zh(this), Xh(this), this.nodeViews = Qh(this), this.docView = Rh(this.state.doc, Yh(this), Kc(this), this.dom, this), this.domObserver = new JA(this, (r, i, s, a) => QA(this, r, i, s, a)), this.domObserver.start(), EA(this), this.updatePluginViews();
  }
  get composing() {
    return this.input.composing;
  }
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Cu(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(em), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    let r = this.state, i = !1, s = !1;
    e.storedMarks && this.composing && (py(this), s = !0), this.state = e;
    let a = r.plugins != e.plugins || this._props.plugins != t.plugins;
    if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let g = Qh(this);
      oM(g, this.nodeViews) && (this.nodeViews = g, i = !0);
    }
    (a || t.handleDOMEvents != this._props.handleDOMEvents) && Cu(this), this.editable = Zh(this), Xh(this);
    let c = Kc(this), u = Yh(this), p = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", d = i || !this.docView.matchesNode(e.doc, u, c);
    (d || !e.selection.eq(r.selection)) && (s = !0);
    let h = p == "preserve" && s && this.dom.style.overflowAnchor == null && WT(this);
    if (s) {
      this.domObserver.stop();
      let g = d && (en || Qt) && !this.composing && !r.selection.empty && !e.selection.empty && iM(r.selection, e.selection);
      if (d) {
        let y = Qt ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (i || !this.docView.update(e.doc, u, c, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Rh(e.doc, u, c, this.dom, this)), y && !this.trackWrites && (g = !0);
      }
      g || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && hA(this)) ? kr(this, g) : (ey(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(r), p == "reset" ? this.dom.scrollTop = 0 : p == "to selection" ? this.scrollToSelection() : h && UT(h);
  }
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof le) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Th(this, t.getBoundingClientRect(), e);
      } else
        Th(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let a = 0; a < this.directPlugins.length; a++) {
      let c = this.directPlugins[a].props[e];
      if (c != null && (i = t ? t(c) : c))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let a = 0; a < s.length; a++) {
        let c = s[a].props[e];
        if (c != null && (i = t ? t(c) : c))
          return i;
      }
  }
  hasFocus() {
    if (en) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  focus() {
    this.domObserver.stop(), this.editable && jT(this.dom), kr(this), this.domObserver.start();
  }
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  posAtCoords(e) {
    return YT(this, e);
  }
  coordsAtPos(e, t = 1) {
    return qg(this, e, t);
  }
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  endOfTextblock(e, t) {
    return tA(this, t || this.state, e);
  }
  destroy() {
    !this.docView || (CA(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Kc(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(e) {
    return TA(this, e);
  }
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  domSelectionRange() {
    return Ht && this.root.nodeType === 11 && $T(this.dom.ownerDocument) == this.dom ? YA(this) : this.domSelection();
  }
  domSelection() {
    return this.root.getSelection();
  }
}
function Yh(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), e.translate = "no", n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" && (e.class += " " + t[r]), r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), [An.node(0, n.state.doc.content.size, e)];
}
function Xh(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: An.widget(n.state.selection.head, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Zh(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function iM(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Qh(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function oM(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function em(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Yr = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Wa = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, tm = typeof navigator < "u" && /Chrome\/(\d+)/.exec(navigator.userAgent);
typeof navigator < "u" && /Gecko\/\d+/.test(navigator.userAgent);
var sM = typeof navigator < "u" && /Mac/.test(navigator.platform), aM = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), lM = sM || tm && +tm[1] < 57;
for (var Et = 0; Et < 10; Et++)
  Yr[48 + Et] = Yr[96 + Et] = String(Et);
for (var Et = 1; Et <= 24; Et++)
  Yr[Et + 111] = "F" + Et;
for (var Et = 65; Et <= 90; Et++)
  Yr[Et] = String.fromCharCode(Et + 32), Wa[Et] = String.fromCharCode(Et);
for (var Gc in Yr)
  Wa.hasOwnProperty(Gc) || (Wa[Gc] = Yr[Gc]);
function cM(n) {
  var e = lM && (n.ctrlKey || n.altKey || n.metaKey) || aM && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Wa : Yr)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const uM = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function fM(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, a;
  for (let c = 0; c < e.length - 1; c++) {
    let u = e[c];
    if (/^(cmd|meta|m)$/i.test(u))
      a = !0;
    else if (/^a(lt)?$/i.test(u))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(u))
      i = !0;
    else if (/^s(hift)?$/i.test(u))
      s = !0;
    else if (/^mod$/i.test(u))
      uM ? a = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + u);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), a && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function dM(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[fM(t)] = n[t];
  return e;
}
function Yc(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
function pM(n) {
  return new sn({ props: { handleKeyDown: vy(n) } });
}
function vy(n) {
  let e = dM(n);
  return function(t, r) {
    let i = cM(r), s = i.length == 1 && i != " ", a, c = e[Yc(i, r, !s)];
    if (c && c(t.state, t.dispatch, t))
      return !0;
    if (s && (r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (a = Yr[r.keyCode]) && a != i) {
      let u = e[Yc(a, r, !0)];
      if (u && u(t.state, t.dispatch, t))
        return !0;
    } else if (s && r.shiftKey) {
      let u = e[Yc(i, r, !0)];
      if (u && u(t.state, t.dispatch, t))
        return !0;
    }
    return !1;
  };
}
const hM = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0), mM = (n, e, t) => {
  let { $cursor: r } = n.selection;
  if (!r || (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0))
    return !1;
  let i = by(r);
  if (!i) {
    let a = r.blockRange(), c = a && ko(a);
    return c == null ? !1 : (e && e(n.tr.lift(a, c).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (!s.type.spec.isolating && _y(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (yo(s, "end") || le.isSelectable(s))) {
    let a = ju(n.doc, r.before(), r.after(), Y.empty);
    if (a && a.slice.size < a.to - a.from) {
      if (e) {
        let c = n.tr.step(a);
        c.setSelection(yo(s, "end") ? ge.findFrom(c.doc.resolve(c.mapping.map(i.pos, -1)), -1) : le.create(c.doc, i.pos - s.nodeSize)), e(c.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
};
function yo(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const gM = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = by(r);
  }
  let a = s && s.nodeBefore;
  return !a || !le.isSelectable(a) ? !1 : (e && e(n.tr.setSelection(le.create(n.doc, s.pos - a.nodeSize)).scrollIntoView()), !0);
};
function by(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
const yM = (n, e, t) => {
  let { $cursor: r } = n.selection;
  if (!r || (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size))
    return !1;
  let i = wy(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (_y(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (yo(s, "start") || le.isSelectable(s))) {
    let a = ju(n.doc, r.before(), r.after(), Y.empty);
    if (a && a.slice.size < a.to - a.from) {
      if (e) {
        let c = n.tr.step(a);
        c.setSelection(yo(s, "start") ? ge.findFrom(c.doc.resolve(c.mapping.map(i.pos)), 1) : le.create(c.doc, c.mapping.map(i.pos))), e(c.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, vM = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = wy(r);
  }
  let a = s && s.nodeAfter;
  return !a || !le.isSelectable(a) ? !1 : (e && e(n.tr.setSelection(le.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function wy(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const bM = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && ko(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, wM = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function xy(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const xM = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), a = xy(i.contentMatchAt(s));
  if (!a || !i.canReplaceWith(s, s, a))
    return !1;
  if (e) {
    let c = t.after(), u = n.tr.replaceWith(c, c, a.createAndFill());
    u.setSelection(ge.near(u.doc.resolve(c), 1)), e(u.scrollIntoView());
  }
  return !0;
}, _M = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof Vn || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = xy(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let a = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, c = n.tr.insert(a, s.createAndFill());
    c.setSelection(be.create(c.doc, a + 1)), e(c.scrollIntoView());
  }
  return !0;
}, SM = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (ao(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && ko(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, kM = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection(le.create(n.doc, i))), !0);
};
function EM(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || Eo(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function _y(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s, a;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (EM(n, e, t))
    return !0;
  let c = e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (a = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && a.matchType(s[0] || i.type).validEnd) {
    if (t) {
      let h = e.pos + i.nodeSize, g = z.empty;
      for (let _ = s.length - 1; _ >= 0; _--)
        g = z.from(s[_].create(null, g));
      g = z.from(r.copy(g));
      let y = n.tr.step(new bt(e.pos - 1, h, e.pos, h, new Y(g, 1, 0), s.length, !0)), x = h + 2 * s.length;
      Eo(y.doc, x) && y.join(x), t(y.scrollIntoView());
    }
    return !0;
  }
  let u = ge.findFrom(e, 1), p = u && u.$from.blockRange(u.$to), d = p && ko(p);
  if (d != null && d >= e.depth)
    return t && t(n.tr.lift(p, d).scrollIntoView()), !0;
  if (c && yo(i, "start", !0) && yo(r, "end")) {
    let h = r, g = [];
    for (; g.push(h), !h.isTextblock; )
      h = h.lastChild;
    let y = i, x = 1;
    for (; !y.isTextblock; y = y.firstChild)
      x++;
    if (h.canReplace(h.childCount, h.childCount, y.content)) {
      if (t) {
        let _ = z.empty;
        for (let M = g.length - 1; M >= 0; M--)
          _ = z.from(g[M].copy(_));
        let O = n.tr.step(new bt(e.pos - g.length, e.pos + i.nodeSize, e.pos + x, e.pos + i.nodeSize - x, new Y(_, g.length, 0), 0, !0));
        t(O.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Sy(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(be.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const CM = Sy(-1), OM = Sy(1);
function TM(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, a = i.blockRange(s), c = a && Uu(a, n, e);
    return c ? (r && r(t.tr.wrap(a, c).scrollIntoView()), !0) : !1;
  };
}
function nm(n, e = null) {
  return function(t, r) {
    let { from: i, to: s } = t.selection, a = !1;
    return t.doc.nodesBetween(i, s, (c, u) => {
      if (a)
        return !1;
      if (!(!c.isTextblock || c.hasMarkup(n, e)))
        if (c.type == n)
          a = !0;
        else {
          let p = t.doc.resolve(u), d = p.index();
          a = p.parent.canReplaceWith(d, d + 1, n);
        }
    }), a ? (r && r(t.tr.setBlockType(i, s, n, e).scrollIntoView()), !0) : !1;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function AM(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, a = i.blockRange(s), c = !1, u = a;
    if (!a)
      return !1;
    if (a.depth >= 2 && i.node(a.depth - 1).type.compatibleContent(n) && a.startIndex == 0) {
      if (i.index(a.depth - 1) == 0)
        return !1;
      let d = t.doc.resolve(a.start - 2);
      u = new Pa(d, d, a.depth), a.endIndex < a.parent.childCount && (a = new Pa(i, t.doc.resolve(s.end(a.depth)), a.depth)), c = !0;
    }
    let p = Uu(u, n, e, a);
    return p ? (r && r(MM(t.tr, a, p, c, n).scrollIntoView()), !0) : !1;
  };
}
function MM(n, e, t, r, i) {
  let s = z.empty;
  for (let d = t.length - 1; d >= 0; d--)
    s = z.from(t[d].type.create(t[d].attrs, s));
  n.step(new bt(e.start - (r ? 2 : 0), e.end, e.start, e.end, new Y(s, 0, 0), t.length, !0));
  let a = 0;
  for (let d = 0; d < t.length; d++)
    t[d].type == i && (a = d + 1);
  let c = t.length - a, u = e.start + t.length - (r ? 2 : 0), p = e.parent;
  for (let d = e.startIndex, h = e.endIndex, g = !0; d < h; d++, g = !1)
    !g && ao(n.doc, u, c) && (n.split(u, c), u += 2 * c), u += p.child(d).nodeSize;
  return n;
}
function NM(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (a) => a.childCount > 0 && a.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? DM(e, t, n, s) : RM(e, t, s) : !0 : !1;
  };
}
function DM(n, e, t, r) {
  let i = n.tr, s = r.end, a = r.$to.end(r.depth);
  s < a && (i.step(new bt(s - 1, a, s, a, new Y(z.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Pa(i.doc.resolve(r.$from.pos), i.doc.resolve(a), r.depth));
  const c = ko(r);
  if (c == null)
    return !1;
  i.lift(r, c);
  let u = i.mapping.map(s, -1) - 1;
  return Eo(i.doc, u) && i.join(u), e(i.scrollIntoView()), !0;
}
function RM(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let y = t.end, x = t.endIndex - 1, _ = t.startIndex; x > _; x--)
    y -= i.child(x).nodeSize, r.delete(y - 1, y + 1);
  let s = r.doc.resolve(t.start), a = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let c = t.startIndex == 0, u = t.endIndex == i.childCount, p = s.node(-1), d = s.index(-1);
  if (!p.canReplace(d + (c ? 0 : 1), d + 1, a.content.append(u ? z.empty : z.from(i))))
    return !1;
  let h = s.pos, g = h + a.nodeSize;
  return r.step(new bt(h - (c ? 1 : 0), g + (u ? 1 : 0), h + 1, g - 1, new Y((c ? z.empty : z.from(i.copy(z.empty))).append(u ? z.empty : z.from(i.copy(z.empty))), c ? 0 : 1, u ? 0 : 1), c ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function IM(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (p) => p.childCount > 0 && p.firstChild.type == n);
    if (!s)
      return !1;
    let a = s.startIndex;
    if (a == 0)
      return !1;
    let c = s.parent, u = c.child(a - 1);
    if (u.type != n)
      return !1;
    if (t) {
      let p = u.lastChild && u.lastChild.type == c.type, d = z.from(p ? n.create() : null), h = new Y(z.from(n.create(null, z.from(c.type.create(null, d)))), p ? 3 : 1, 0), g = s.start, y = s.end;
      t(e.tr.step(new bt(g - (p ? 3 : 1), y, g, y, h, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function al(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    filterTransaction: e.filterTransaction,
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
class ll {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: s } = r, a = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([c, u]) => [c, (...d) => {
      const h = u(...d)(a);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), h;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: a } = i, c = [], u = !!e, p = e || s.tr, d = () => (!u && t && !p.getMeta("preventDispatch") && !this.hasCustomState && a.dispatch(p), c.every((g) => g === !0)), h = {
      ...Object.fromEntries(Object.entries(r).map(([g, y]) => [g, (..._) => {
        const O = this.buildProps(p, t), M = y(..._)(O);
        return c.push(M), h;
      }])),
      run: d
    };
    return h;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, s = e || r.tr, a = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([u, p]) => [u, (...d) => p(...d)({ ...a, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: a } = i;
    s.storedMarks && e.setStoredMarks(s.storedMarks);
    const c = {
      tr: e,
      editor: i,
      view: a,
      state: al({
        state: s,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([u, p]) => [u, (...d) => p(...d)(c)]));
      }
    };
    return c;
  }
}
class PM {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function ee(n, e, t) {
  return n.config[e] === void 0 && n.parent ? ee(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? ee(n.parent, e, t) : null
  }) : n.config[e];
}
function cl(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function ky(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = cl(n), i = [...t, ...r], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((a) => {
    const c = {
      name: a.name,
      options: a.options,
      storage: a.storage
    }, u = ee(a, "addGlobalAttributes", c);
    if (!u)
      return;
    u().forEach((d) => {
      d.types.forEach((h) => {
        Object.entries(d.attributes).forEach(([g, y]) => {
          e.push({
            type: h,
            name: g,
            attribute: {
              ...s,
              ...y
            }
          });
        });
      });
    });
  }), i.forEach((a) => {
    const c = {
      name: a.name,
      options: a.options,
      storage: a.storage
    }, u = ee(a, "addAttributes", c);
    if (!u)
      return;
    const p = u();
    Object.entries(p).forEach(([d, h]) => {
      const g = {
        ...s,
        ...h
      };
      (h == null ? void 0 : h.isRequired) && (h == null ? void 0 : h.default) === void 0 && delete g.default, e.push({
        type: a.name,
        name: d,
        attribute: g
      });
    });
  }), e;
}
function wt(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function jt(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      i === "class" ? r[i] = [r[i], s].join(" ") : i === "style" ? r[i] = [r[i], s].join("; ") : r[i] = s;
    }), r;
  }, {});
}
function Tu(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => jt(t, r), {});
}
function Ey(n) {
  return typeof n == "function";
}
function me(n, e = void 0, ...t) {
  return Ey(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function LM(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function BM(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function rm(n, e) {
  return n.style ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, a) => {
        const c = a.attribute.parseHTML ? a.attribute.parseHTML(t) : BM(t.getAttribute(a.name));
        return c == null ? s : {
          ...s,
          [a.name]: c
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function im(n) {
  return Object.fromEntries(Object.entries(n).filter(([e, t]) => e === "attrs" && LM(t) ? !1 : t != null));
}
function $M(n) {
  var e;
  const t = ky(n), { nodeExtensions: r, markExtensions: i } = cl(n), s = (e = r.find((u) => ee(u, "topNode"))) === null || e === void 0 ? void 0 : e.name, a = Object.fromEntries(r.map((u) => {
    const p = t.filter((O) => O.type === u.name), d = {
      name: u.name,
      options: u.options,
      storage: u.storage
    }, h = n.reduce((O, M) => {
      const I = ee(M, "extendNodeSchema", d);
      return {
        ...O,
        ...I ? I(u) : {}
      };
    }, {}), g = im({
      ...h,
      content: me(ee(u, "content", d)),
      marks: me(ee(u, "marks", d)),
      group: me(ee(u, "group", d)),
      inline: me(ee(u, "inline", d)),
      atom: me(ee(u, "atom", d)),
      selectable: me(ee(u, "selectable", d)),
      draggable: me(ee(u, "draggable", d)),
      code: me(ee(u, "code", d)),
      defining: me(ee(u, "defining", d)),
      isolating: me(ee(u, "isolating", d)),
      attrs: Object.fromEntries(p.map((O) => {
        var M;
        return [O.name, { default: (M = O == null ? void 0 : O.attribute) === null || M === void 0 ? void 0 : M.default }];
      }))
    }), y = me(ee(u, "parseHTML", d));
    y && (g.parseDOM = y.map((O) => rm(O, p)));
    const x = ee(u, "renderHTML", d);
    x && (g.toDOM = (O) => x({
      node: O,
      HTMLAttributes: Tu(O, p)
    }));
    const _ = ee(u, "renderText", d);
    return _ && (g.toText = _), [u.name, g];
  })), c = Object.fromEntries(i.map((u) => {
    const p = t.filter((_) => _.type === u.name), d = {
      name: u.name,
      options: u.options,
      storage: u.storage
    }, h = n.reduce((_, O) => {
      const M = ee(O, "extendMarkSchema", d);
      return {
        ..._,
        ...M ? M(u) : {}
      };
    }, {}), g = im({
      ...h,
      inclusive: me(ee(u, "inclusive", d)),
      excludes: me(ee(u, "excludes", d)),
      group: me(ee(u, "group", d)),
      spanning: me(ee(u, "spanning", d)),
      code: me(ee(u, "code", d)),
      attrs: Object.fromEntries(p.map((_) => {
        var O;
        return [_.name, { default: (O = _ == null ? void 0 : _.attribute) === null || O === void 0 ? void 0 : O.default }];
      }))
    }), y = me(ee(u, "parseHTML", d));
    y && (g.parseDOM = y.map((_) => rm(_, p)));
    const x = ee(u, "renderHTML", d);
    return x && (g.toDOM = (_) => x({
      mark: _,
      HTMLAttributes: Tu(_, p)
    })), [u.name, g];
  }));
  return new eT({
    topNode: s,
    nodes: a,
    marks: c
  });
}
function Xc(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function om(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const FM = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, a, c) => {
    var u, p;
    const d = ((p = (u = i.type.spec).toText) === null || p === void 0 ? void 0 : p.call(u, {
      node: i,
      pos: s,
      parent: a,
      index: c
    })) || i.textContent || "%leaf%";
    t += d.slice(0, Math.max(0, r - s));
  }), t;
};
function nf(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class ul {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const VM = (n, e) => {
  if (nf(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [];
  return r.push(t.text), r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Zc(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: a, plugin: c } = n, { view: u } = t;
  if (u.composing)
    return !1;
  const p = u.state.doc.resolve(r);
  if (p.parent.type.spec.code || !!(!((e = p.nodeBefore || p.nodeAfter) === null || e === void 0) && e.marks.find((g) => g.type.spec.code)))
    return !1;
  let d = !1;
  const h = FM(p) + s;
  return a.forEach((g) => {
    if (d)
      return;
    const y = VM(h, g.find);
    if (!y)
      return;
    const x = u.state.tr, _ = al({
      state: u.state,
      transaction: x
    }), O = {
      from: r - (y[0].length - s.length),
      to: i
    }, { commands: M, chain: I, can: W } = new ll({
      editor: t,
      state: _
    });
    g.handler({
      state: _,
      range: O,
      match: y,
      commands: M,
      chain: I,
      can: W
    }) === null || !x.steps.length || (x.setMeta(c, {
      transform: x,
      from: r,
      to: i,
      text: s
    }), u.dispatch(x), d = !0);
  }), d;
}
function zM(n) {
  const { editor: e, rules: t } = n, r = new sn({
    state: {
      init() {
        return null;
      },
      apply(i, s) {
        const a = i.getMeta(r);
        return a || (i.selectionSet || i.docChanged ? null : s);
      }
    },
    props: {
      handleTextInput(i, s, a, c) {
        return Zc({
          editor: e,
          from: s,
          to: a,
          text: c,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && Zc({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: a } = i.state.selection;
        return a ? Zc({
          editor: e,
          from: a.pos,
          to: a.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    isInputRules: !0
  });
  return r;
}
function HM(n) {
  return typeof n == "number";
}
class WM {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const UM = (n, e) => {
  if (nf(e))
    return [...n.matchAll(e)];
  const t = e(n);
  return t ? t.map((r) => {
    const i = [];
    return i.push(r.text), i.index = r.index, i.input = n, i.data = r.data, r.replaceWith && (r.text.includes(r.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(r.replaceWith)), i;
  }) : [];
};
function jM(n) {
  const { editor: e, state: t, from: r, to: i, rule: s } = n, { commands: a, chain: c, can: u } = new ll({
    editor: e,
    state: t
  }), p = [];
  return t.doc.nodesBetween(r, i, (h, g) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const y = Math.max(r, g), x = Math.min(i, g + h.content.size), _ = h.textBetween(y - g, x - g, void 0, "\uFFFC");
    UM(_, s.find).forEach((M) => {
      if (M.index === void 0)
        return;
      const I = y + M.index + 1, W = I + M[0].length, E = {
        from: t.tr.mapping.map(I),
        to: t.tr.mapping.map(W)
      }, U = s.handler({
        state: t,
        range: E,
        match: M,
        commands: a,
        chain: c,
        can: u
      });
      p.push(U);
    });
  }), p.every((h) => h !== null);
}
function qM(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1;
  return t.map((c) => new sn({
    view(u) {
      const p = (d) => {
        var h;
        r = !((h = u.dom.parentElement) === null || h === void 0) && h.contains(d.target) ? u.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", p), {
        destroy() {
          window.removeEventListener("dragstart", p);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u) => (s = r === u.dom.parentElement, !1),
        paste: (u, p) => {
          var d;
          const h = (d = p.clipboardData) === null || d === void 0 ? void 0 : d.getData("text/html");
          return i = !!(h != null && h.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (u, p, d) => {
      const h = u[0], g = h.getMeta("uiEvent") === "paste" && !i, y = h.getMeta("uiEvent") === "drop" && !s;
      if (!g && !y)
        return;
      const x = p.doc.content.findDiffStart(d.doc.content), _ = p.doc.content.findDiffEnd(d.doc.content);
      if (!HM(x) || !_ || x === _.b)
        return;
      const O = d.tr, M = al({
        state: d,
        transaction: O
      });
      if (!(!jM({
        editor: e,
        state: M,
        from: Math.max(x - 1, 0),
        to: _.b - 1,
        rule: c
      }) || !O.steps.length))
        return O;
    }
  }));
}
function KM(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return [...new Set(e)];
}
class io {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = io.resolve(e), this.schema = $M(this.extensions), this.extensions.forEach((r) => {
      var i;
      this.editor.extensionStorage[r.name] = r.storage;
      const s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: this.editor,
        type: Xc(r.name, this.schema)
      };
      r.type === "mark" && ((i = me(ee(r, "keepOnSplit", s))) !== null && i !== void 0 ? i : !0) && this.splittableMarks.push(r.name);
      const a = ee(r, "onBeforeCreate", s);
      a && this.editor.on("beforeCreate", a);
      const c = ee(r, "onCreate", s);
      c && this.editor.on("create", c);
      const u = ee(r, "onUpdate", s);
      u && this.editor.on("update", u);
      const p = ee(r, "onSelectionUpdate", s);
      p && this.editor.on("selectionUpdate", p);
      const d = ee(r, "onTransaction", s);
      d && this.editor.on("transaction", d);
      const h = ee(r, "onFocus", s);
      h && this.editor.on("focus", h);
      const g = ee(r, "onBlur", s);
      g && this.editor.on("blur", g);
      const y = ee(r, "onDestroy", s);
      y && this.editor.on("destroy", y);
    });
  }
  static resolve(e) {
    const t = io.sort(io.flatten(e)), r = KM(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = ee(t, "addExtensions", r);
      return i ? [
        t,
        ...this.flatten(i())
      ] : t;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((r, i) => {
      const s = ee(r, "priority") || 100, a = ee(i, "priority") || 100;
      return s > a ? -1 : s < a ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: Xc(t.name, this.schema)
      }, i = ee(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, t = io.sort([...this.extensions].reverse()), r = [], i = [], s = t.map((a) => {
      const c = {
        name: a.name,
        options: a.options,
        storage: a.storage,
        editor: e,
        type: Xc(a.name, this.schema)
      }, u = [], p = ee(a, "addKeyboardShortcuts", c);
      let d = {};
      if (a.type === "mark" && a.config.exitable && (d.ArrowRight = () => Xr.handleExit({ editor: e, mark: a })), p) {
        const _ = Object.fromEntries(Object.entries(p()).map(([O, M]) => [O, () => M({ editor: e })]));
        d = { ...d, ..._ };
      }
      const h = pM(d);
      u.push(h);
      const g = ee(a, "addInputRules", c);
      om(a, e.options.enableInputRules) && g && r.push(...g());
      const y = ee(a, "addPasteRules", c);
      om(a, e.options.enablePasteRules) && y && i.push(...y());
      const x = ee(a, "addProseMirrorPlugins", c);
      if (x) {
        const _ = x();
        u.push(..._);
      }
      return u;
    }).flat();
    return [
      zM({
        editor: e,
        rules: r
      }),
      ...qM({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  get attributes() {
    return ky(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = cl(this.extensions);
    return Object.fromEntries(t.filter((r) => !!ee(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((u) => u.type === r.name), s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: wt(r.name, this.schema)
      }, a = ee(r, "addNodeView", s);
      if (!a)
        return [];
      const c = (u, p, d, h) => {
        const g = Tu(u, i);
        return a()({
          editor: e,
          node: u,
          getPos: d,
          decorations: h,
          HTMLAttributes: g,
          extension: r
        });
      };
      return [r.name, c];
    }));
  }
}
function JM(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Qc(n) {
  return JM(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function fl(n, e) {
  const t = { ...n };
  return Qc(n) && Qc(e) && Object.keys(e).forEach((r) => {
    Qc(e[r]) ? r in n ? t[r] = fl(n[r], e[r]) : Object.assign(t, { [r]: e[r] }) : Object.assign(t, { [r]: e[r] });
  }), t;
}
class qt {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = me(ee(this, "addOptions", {
      name: this.name
    }))), this.storage = me(ee(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new qt(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = fl(this.options, e), t.storage = me(ee(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new qt(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = me(ee(t, "addOptions", {
      name: t.name
    })), t.storage = me(ee(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Cy(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: a = {} } = t || {};
  let c = "", u = !0;
  return n.nodesBetween(r, i, (p, d, h, g) => {
    var y;
    const x = a == null ? void 0 : a[p.type.name];
    x ? (p.isBlock && !u && (c += s, u = !0), h && (c += x({
      node: p,
      pos: d,
      parent: h,
      index: g,
      range: e
    }))) : p.isText ? (c += (y = p == null ? void 0 : p.text) === null || y === void 0 ? void 0 : y.slice(Math.max(r, d) - d, i - d), u = !1) : p.isBlock && !u && (c += s, u = !0);
  }), c;
}
function Oy(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const GM = qt.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new sn({
        key: new sr("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, a = Math.min(...s.map((d) => d.$from.pos)), c = Math.max(...s.map((d) => d.$to.pos)), u = Oy(t);
            return Cy(r, { from: a, to: c }, {
              textSerializers: u
            });
          }
        }
      })
    ];
  }
}), YM = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), XM = (n = !1) => ({ commands: e }) => e.setContent("", n), ZM = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: a }) => {
    n.doc.nodesBetween(s.pos, a.pos, (c, u) => {
      if (c.type.isText)
        return;
      const { doc: p, mapping: d } = e, h = p.resolve(d.map(u)), g = p.resolve(d.map(u + c.nodeSize)), y = h.blockRange(g);
      if (!y)
        return;
      const x = ko(y);
      if (c.type.isTextblock) {
        const { defaultType: _ } = h.parent.contentMatchAt(h.index());
        e.setNodeMarkup(y.start, _);
      }
      (x || x === 0) && e.lift(y, x);
    });
  }), !0;
}, QM = (n) => (e) => n(e), eN = () => ({ state: n, dispatch: e }) => _M(n, e), tN = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = wt(n, t.schema), s = e.selection.$anchor;
  for (let a = s.depth; a > 0; a -= 1)
    if (s.node(a).type === i) {
      if (r) {
        const u = s.before(a), p = s.after(a);
        e.delete(u, p).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, nN = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, rN = () => ({ state: n, dispatch: e }) => hM(n, e), iN = () => ({ commands: n }) => n.keyboardShortcut("Enter"), oN = () => ({ state: n, dispatch: e }) => xM(n, e);
function Ua(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : nf(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Au(n, e, t = {}) {
  return n.find((r) => r.type === e && Ua(r.attrs, t));
}
function sN(n, e, t = {}) {
  return !!Au(n, e, t);
}
function rf(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = Au([...r.node.marks], e, t);
  if (!i)
    return;
  let s = r.index, a = n.start() + r.offset, c = s + 1, u = a + r.node.nodeSize;
  for (Au([...r.node.marks], e, t); s > 0 && i.isInSet(n.parent.child(s - 1).marks); )
    s -= 1, a -= n.parent.child(s).nodeSize;
  for (; c < n.parent.childCount && sN([...n.parent.child(c).marks], e, t); )
    u += n.parent.child(c).nodeSize, c += 1;
  return {
    from: a,
    to: u
  };
}
function Qr(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const aN = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = Qr(n, r.schema), { doc: a, selection: c } = t, { $from: u, from: p, to: d } = c;
  if (i) {
    const h = rf(u, s, e);
    if (h && h.from <= p && h.to >= d) {
      const g = be.create(a, h.from, h.to);
      t.setSelection(g);
    }
  }
  return !0;
}, lN = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function of(n) {
  return n instanceof be;
}
function _r(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Ty(n, e = null) {
  if (!e)
    return null;
  const t = ge.atStart(n), r = ge.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? be.create(n, _r(0, i, s), _r(n.content.size, i, s)) : be.create(n, _r(e, i, s), _r(e, i, s));
}
function sf() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const cN = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const a = () => {
    sf() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !of(t.state.selection))
    return a(), !0;
  const c = Ty(i.doc, n) || t.state.selection, u = t.state.selection.eq(c);
  return s && (u || i.setSelection(c), u && i.storedMarks && i.setStoredMarks(i.storedMarks), a()), !0;
}, uN = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), fN = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e);
function sm(n) {
  const e = `<body>${n}</body>`;
  return new window.DOMParser().parseFromString(e, "text/html").body;
}
function ja(n, e, t) {
  if (t = {
    slice: !0,
    parseOptions: {},
    ...t
  }, typeof n == "object" && n !== null)
    try {
      return Array.isArray(n) ? z.fromArray(n.map((r) => e.nodeFromJSON(r))) : e.nodeFromJSON(n);
    } catch (r) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", r), ja("", e, t);
    }
  if (typeof n == "string") {
    const r = fo.fromSchema(e);
    return t.slice ? r.parseSlice(sm(n), t.parseOptions).content : r.parse(sm(n), t.parseOptions);
  }
  return ja("", e, t);
}
function dN(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof Dt || i instanceof bt))
    return;
  const s = n.mapping.maps[r];
  let a = 0;
  s.forEach((c, u, p, d) => {
    a === 0 && (a = d);
  }), n.setSelection(ge.near(n.doc.resolve(a), t));
}
const pN = (n) => n.toString().startsWith("<"), hN = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      ...t
    };
    const a = ja(e, s.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...t.parseOptions
      }
    });
    if (a.toString() === "<>")
      return !0;
    let { from: c, to: u } = typeof n == "number" ? { from: n, to: n } : n, p = !0, d = !0;
    if ((pN(a) ? a : [a]).forEach((g) => {
      g.check(), p = p ? g.isText && g.marks.length === 0 : !1, d = d ? g.isBlock : !1;
    }), c === u && d) {
      const { parent: g } = r.doc.resolve(c);
      g.isTextblock && !g.type.spec.code && !g.childCount && (c -= 1, u += 1);
    }
    p ? r.insertText(e, c, u) : r.replaceWith(c, u, a), t.updateSelection && dN(r, r.steps.length - 1, -1);
  }
  return !0;
}, mN = () => ({ state: n, dispatch: e }) => mM(n, e), gN = () => ({ state: n, dispatch: e }) => yM(n, e);
function Ay() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function yN(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, a;
  for (let c = 0; c < e.length - 1; c += 1) {
    const u = e[c];
    if (/^(cmd|meta|m)$/i.test(u))
      a = !0;
    else if (/^a(lt)?$/i.test(u))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(u))
      i = !0;
    else if (/^s(hift)?$/i.test(u))
      s = !0;
    else if (/^mod$/i.test(u))
      sf() || Ay() ? a = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${u}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), a && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
const vN = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = yN(n).split(/-(?!$)/), a = s.find((p) => !["Alt", "Ctrl", "Meta", "Shift"].includes(p)), c = new KeyboardEvent("keydown", {
    key: a === "Space" ? " " : a,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), u = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (p) => p(t, c));
  });
  return u == null || u.steps.forEach((p) => {
    const d = p.map(r.mapping);
    d && i && r.maybeStep(d);
  }), !0;
};
function ws(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, a = e ? wt(e, n.schema) : null, c = [];
  n.doc.nodesBetween(r, i, (h, g) => {
    if (h.isText)
      return;
    const y = Math.max(r, g), x = Math.min(i, g + h.nodeSize);
    c.push({
      node: h,
      from: y,
      to: x
    });
  });
  const u = i - r, p = c.filter((h) => a ? a.name === h.node.type.name : !0).filter((h) => Ua(h.node.attrs, t, { strict: !1 }));
  return s ? !!p.length : p.reduce((h, g) => h + g.to - g.from, 0) >= u;
}
const bN = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = wt(n, t.schema);
  return ws(t, i, e) ? bM(t, r) : !1;
}, wN = () => ({ state: n, dispatch: e }) => SM(n, e), xN = (n) => ({ state: e, dispatch: t }) => {
  const r = wt(n, e.schema);
  return NM(r)(e, t);
}, _N = () => ({ state: n, dispatch: e }) => wM(n, e);
function dl(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function am(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const SN = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, a = null;
  const c = dl(typeof n == "string" ? n : n.name, r.schema);
  return c ? (c === "node" && (s = wt(n, r.schema)), c === "mark" && (a = Qr(n, r.schema)), i && t.selection.ranges.forEach((u) => {
    r.doc.nodesBetween(u.$from.pos, u.$to.pos, (p, d) => {
      s && s === p.type && t.setNodeMarkup(d, void 0, am(p.attrs, e)), a && p.marks.length && p.marks.forEach((h) => {
        a === h.type && t.addMark(d, d + p.nodeSize, a.create(am(h.attrs, e)));
      });
    });
  }), !0) : !1;
}, kN = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), EN = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), CN = () => ({ state: n, dispatch: e }) => gM(n, e), ON = () => ({ state: n, dispatch: e }) => vM(n, e), TN = () => ({ state: n, dispatch: e }) => kM(n, e), AN = () => ({ state: n, dispatch: e }) => OM(n, e), MN = () => ({ state: n, dispatch: e }) => CM(n, e);
function My(n, e, t = {}) {
  return ja(n, e, { slice: !1, parseOptions: t });
}
const NN = (n, e = !1, t = {}) => ({ tr: r, editor: i, dispatch: s }) => {
  const { doc: a } = r, c = My(n, i.schema, t);
  return s && r.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !e), !0;
};
function DN(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function RN(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function af(n) {
  return (e) => RN(e.$from, n);
}
function IN(n, e) {
  const t = er.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function PN(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return Cy(n, t, e);
}
function Ny(n, e) {
  const t = Qr(e, n.schema), { from: r, to: i, empty: s } = n.selection, a = [];
  s ? (n.storedMarks && a.push(...n.storedMarks), a.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (u) => {
    a.push(...u.marks);
  });
  const c = a.find((u) => u.type.name === t.name);
  return c ? { ...c.attrs } : {};
}
function LN(n, e) {
  const t = wt(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (c) => {
    s.push(c);
  });
  const a = s.reverse().find((c) => c.type.name === t.name);
  return a ? { ...a.attrs } : {};
}
function BN(n, e) {
  const t = dl(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? LN(n, e) : t === "mark" ? Ny(n, e) : {};
}
function Dy(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n - 1), a = rf(s, i.type);
    !a || r.push({
      mark: i,
      ...a
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    r.push(...i.marks.map((a) => ({
      from: s,
      to: s + i.nodeSize,
      mark: a
    })));
  }), r;
}
function Mu(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? Qr(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((h) => s ? s.name === h.type.name : !0).find((h) => Ua(h.attrs, t, { strict: !1 }));
  let a = 0;
  const c = [];
  if (i.forEach(({ $from: h, $to: g }) => {
    const y = h.pos, x = g.pos;
    n.doc.nodesBetween(y, x, (_, O) => {
      if (!_.isText && !_.marks.length)
        return;
      const M = Math.max(y, O), I = Math.min(x, O + _.nodeSize), W = I - M;
      a += W, c.push(..._.marks.map((E) => ({
        mark: E,
        from: M,
        to: I
      })));
    });
  }), a === 0)
    return !1;
  const u = c.filter((h) => s ? s.name === h.mark.type.name : !0).filter((h) => Ua(h.mark.attrs, t, { strict: !1 })).reduce((h, g) => h + g.to - g.from, 0), p = c.filter((h) => s ? h.mark.type !== s && h.mark.type.excludes(s) : !0).reduce((h, g) => h + g.to - g.from, 0);
  return (u > 0 ? u + p : u) >= a;
}
function $N(n, e, t = {}) {
  if (!e)
    return ws(n, null, t) || Mu(n, null, t);
  const r = dl(e, n.schema);
  return r === "node" ? ws(n, e, t) : r === "mark" ? Mu(n, e, t) : !1;
}
function lm(n, e) {
  const { nodeExtensions: t } = cl(e), r = t.find((a) => a.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = me(ee(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function FN(n) {
  var e;
  const t = (e = n.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = n.toJSON();
  return JSON.stringify(t) === JSON.stringify(r);
}
function VN(n) {
  return n instanceof le;
}
function Ry(n, e, t) {
  const i = n.state.doc.content.size, s = _r(e, 0, i), a = _r(t, 0, i), c = n.coordsAtPos(s), u = n.coordsAtPos(a, -1), p = Math.min(c.top, u.top), d = Math.max(c.bottom, u.bottom), h = Math.min(c.left, u.left), g = Math.max(c.right, u.right), y = g - h, x = d - p, M = {
    top: p,
    bottom: d,
    left: h,
    right: g,
    width: y,
    height: x,
    x: h,
    y: p
  };
  return {
    ...M,
    toJSON: () => M
  };
}
function zN(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (of(i) && (s = i.$cursor), s) {
    const c = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!t.isInSet(c) || !c.some((u) => u.type.excludes(t));
  }
  const { ranges: a } = i;
  return a.some(({ $from: c, $to: u }) => {
    let p = c.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(c.pos, u.pos, (d, h, g) => {
      if (p)
        return !1;
      if (d.isInline) {
        const y = !g || g.type.allowsMarkType(t), x = !!t.isInSet(d.marks) || !d.marks.some((_) => _.type.excludes(t));
        p = y && x;
      }
      return !p;
    }), p;
  });
}
const HN = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: a, ranges: c } = s, u = Qr(n, r.schema);
  if (i)
    if (a) {
      const p = Ny(r, u);
      t.addStoredMark(u.create({
        ...p,
        ...e
      }));
    } else
      c.forEach((p) => {
        const d = p.$from.pos, h = p.$to.pos;
        r.doc.nodesBetween(d, h, (g, y) => {
          const x = Math.max(y, d), _ = Math.min(y + g.nodeSize, h);
          g.marks.find((M) => M.type === u) ? g.marks.forEach((M) => {
            u === M.type && t.addMark(x, _, u.create({
              ...M.attrs,
              ...e
            }));
          }) : t.addMark(x, _, u.create(e));
        });
      });
  return zN(r, t, u);
}, WN = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), UN = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = wt(n, t.schema);
  return s.isTextblock ? i().command(({ commands: a }) => nm(s, e)(t) ? !0 : a.clearNodes()).command(({ state: a }) => nm(s, e)(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, jN = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = _r(n, 0, r.content.size), s = le.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, qN = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, a = be.atStart(r).from, c = be.atEnd(r).to, u = _r(i, a, c), p = _r(s, a, c), d = be.create(r, u, p);
    e.setSelection(d);
  }
  return !0;
}, KN = (n) => ({ state: e, dispatch: t }) => {
  const r = wt(n, e.schema);
  return IM(r)(e, t);
};
function Ta(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((s) => s.type === e && s.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function cm(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const JN = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: a } = e, { $from: c, $to: u } = s, p = i.extensionManager.attributes, d = Ta(p, c.node().type.name, c.node().attrs);
  if (s instanceof le && s.node.isBlock)
    return !c.parentOffset || !ao(a, c.pos) ? !1 : (r && (n && cm(t, i.extensionManager.splittableMarks), e.split(c.pos).scrollIntoView()), !0);
  if (!c.parent.isBlock)
    return !1;
  if (r) {
    const h = u.parentOffset === u.parent.content.size;
    s instanceof be && e.deleteSelection();
    const g = c.depth === 0 ? void 0 : DN(c.node(-1).contentMatchAt(c.indexAfter(-1)));
    let y = h && g ? [{
      type: g,
      attrs: d
    }] : void 0, x = ao(e.doc, e.mapping.map(c.pos), 1, y);
    if (!y && !x && ao(e.doc, e.mapping.map(c.pos), 1, g ? [{ type: g }] : void 0) && (x = !0, y = g ? [{
      type: g,
      attrs: d
    }] : void 0), x && (e.split(e.mapping.map(c.pos), 1, y), g && !h && !c.parentOffset && c.parent.type !== g)) {
      const _ = e.mapping.map(c.before()), O = e.doc.resolve(_);
      c.node(-1).canReplaceWith(O.index(), O.index() + 1, g) && e.setNodeMarkup(e.mapping.map(c.before()), g);
    }
    n && cm(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, GN = (n) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  var s;
  const a = wt(n, t.schema), { $from: c, $to: u } = t.selection, p = t.selection.node;
  if (p && p.isBlock || c.depth < 2 || !c.sameParent(u))
    return !1;
  const d = c.node(-1);
  if (d.type !== a)
    return !1;
  const h = i.extensionManager.attributes;
  if (c.parent.content.size === 0 && c.node(-1).childCount === c.indexAfter(-1)) {
    if (c.depth === 2 || c.node(-3).type !== a || c.index(-2) !== c.node(-2).childCount - 1)
      return !1;
    if (r) {
      let O = z.empty;
      const M = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
      for (let Z = c.depth - M; Z >= c.depth - 3; Z -= 1)
        O = z.from(c.node(Z).copy(O));
      const I = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3, W = Ta(h, c.node().type.name, c.node().attrs), E = ((s = a.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(W)) || void 0;
      O = O.append(z.from(a.createAndFill(null, E) || void 0));
      const U = c.before(c.depth - (M - 1));
      e.replace(U, c.after(-I), new Y(O, 4 - M, 0));
      let $ = -1;
      e.doc.nodesBetween(U, e.doc.content.size, (Z, K) => {
        if ($ > -1)
          return !1;
        Z.isTextblock && Z.content.size === 0 && ($ = K + 1);
      }), $ > -1 && e.setSelection(be.near(e.doc.resolve($))), e.scrollIntoView();
    }
    return !0;
  }
  const g = u.pos === c.end() ? d.contentMatchAt(0).defaultType : null, y = Ta(h, d.type.name, d.attrs), x = Ta(h, c.node().type.name, c.node().attrs);
  e.delete(c.pos, u.pos);
  const _ = g ? [{ type: a, attrs: y }, { type: g, attrs: x }] : [{ type: a, attrs: y }];
  return ao(e.doc, c.pos, 2) ? (r && e.split(c.pos, 2, _).scrollIntoView(), !0) : !1;
}, um = (n, e) => {
  const t = af((a) => a.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Eo(n.doc, t.pos) && n.join(t.pos), !0;
}, fm = (n, e) => {
  const t = af((a) => a.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Eo(n.doc, r) && n.join(r), !0;
}, YN = (n, e) => ({ editor: t, tr: r, state: i, dispatch: s, chain: a, commands: c, can: u }) => {
  const { extensions: p } = t.extensionManager, d = wt(n, i.schema), h = wt(e, i.schema), { selection: g } = i, { $from: y, $to: x } = g, _ = y.blockRange(x);
  if (!_)
    return !1;
  const O = af((M) => lm(M.type.name, p))(g);
  if (_.depth >= 1 && O && _.depth - O.depth <= 1) {
    if (O.node.type === d)
      return c.liftListItem(h);
    if (lm(O.node.type.name, p) && d.validContent(O.node.content) && s)
      return a().command(() => (r.setNodeMarkup(O.pos, d), !0)).command(() => um(r, d)).command(() => fm(r, d)).run();
  }
  return a().command(() => u().wrapInList(d) ? !0 : c.clearNodes()).wrapInList(d).command(() => um(r, d)).command(() => fm(r, d)).run();
}, XN = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, a = Qr(n, r.schema);
  return Mu(r, a, e) ? i.unsetMark(a, { extendEmptyMarkRange: s }) : i.setMark(a, e);
}, ZN = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = wt(n, r.schema), a = wt(e, r.schema);
  return ws(r, s, t) ? i.setNode(a) : i.setNode(s, t);
}, QN = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = wt(n, t.schema);
  return ws(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, eD = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const a = n.tr, c = s.transform;
        for (let u = c.steps.length - 1; u >= 0; u -= 1)
          a.step(c.steps[u].invert(c.docs[u]));
        if (s.text) {
          const u = a.doc.resolve(s.from).marks();
          a.replaceWith(s.from, s.to, n.schema.text(s.text, u));
        } else
          a.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, tD = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, nD = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: a = !1 } = e, { selection: c } = t, u = Qr(n, r.schema), { $from: p, empty: d, ranges: h } = c;
  if (!i)
    return !0;
  if (d && a) {
    let { from: g, to: y } = c;
    const x = (s = p.marks().find((O) => O.type === u)) === null || s === void 0 ? void 0 : s.attrs, _ = rf(p, u, x);
    _ && (g = _.from, y = _.to), t.removeMark(g, y, u);
  } else
    h.forEach((g) => {
      t.removeMark(g.$from.pos, g.$to.pos, u);
    });
  return t.removeStoredMark(u), !0;
}, rD = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, a = null;
  const c = dl(typeof n == "string" ? n : n.name, r.schema);
  return c ? (c === "node" && (s = wt(n, r.schema)), c === "mark" && (a = Qr(n, r.schema)), i && t.selection.ranges.forEach((u) => {
    const p = u.$from.pos, d = u.$to.pos;
    r.doc.nodesBetween(p, d, (h, g) => {
      s && s === h.type && t.setNodeMarkup(g, void 0, {
        ...h.attrs,
        ...e
      }), a && h.marks.length && h.marks.forEach((y) => {
        if (a === y.type) {
          const x = Math.max(g, p), _ = Math.min(g + h.nodeSize, d);
          t.addMark(x, _, a.create({
            ...y.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, iD = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = wt(n, t.schema);
  return TM(i, e)(t, r);
}, oD = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = wt(n, t.schema);
  return AM(i, e)(t, r);
};
var sD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: YM,
  clearContent: XM,
  clearNodes: ZM,
  command: QM,
  createParagraphNear: eN,
  deleteNode: tN,
  deleteRange: nN,
  deleteSelection: rN,
  enter: iN,
  exitCode: oN,
  extendMarkRange: aN,
  first: lN,
  focus: cN,
  forEach: uN,
  insertContent: fN,
  insertContentAt: hN,
  joinBackward: mN,
  joinForward: gN,
  keyboardShortcut: vN,
  lift: bN,
  liftEmptyBlock: wN,
  liftListItem: xN,
  newlineInCode: _N,
  resetAttributes: SN,
  scrollIntoView: kN,
  selectAll: EN,
  selectNodeBackward: CN,
  selectNodeForward: ON,
  selectParentNode: TN,
  selectTextblockEnd: AN,
  selectTextblockStart: MN,
  setContent: NN,
  setMark: HN,
  setMeta: WN,
  setNode: UN,
  setNodeSelection: jN,
  setTextSelection: qN,
  sinkListItem: KN,
  splitBlock: JN,
  splitListItem: GN,
  toggleList: YN,
  toggleMark: XN,
  toggleNode: ZN,
  toggleWrap: QN,
  undoInputRule: eD,
  unsetAllMarks: tD,
  unsetMark: nD,
  updateAttributes: rD,
  wrapIn: iD,
  wrapInList: oD
});
const aD = qt.create({
  name: "commands",
  addCommands() {
    return {
      ...sD
    };
  }
}), lD = qt.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new sn({
        key: new sr("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), cD = qt.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new sn({
        key: new sr("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), uD = qt.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: a }) => [
      () => a.undoInputRule(),
      () => a.command(({ tr: c }) => {
        const { selection: u, doc: p } = c, { empty: d, $anchor: h } = u, { pos: g, parent: y } = h, x = ge.atStart(p).from === g;
        return !d || !x || !y.type.isTextblock || y.textContent.length ? !1 : a.clearNodes();
      }),
      () => a.deleteSelection(),
      () => a.joinBackward(),
      () => a.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: a }) => [
      () => a.deleteSelection(),
      () => a.joinForward(),
      () => a.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: a }) => [
        () => a.newlineInCode(),
        () => a.createParagraphNear(),
        () => a.liftEmptyBlock(),
        () => a.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return sf() || Ay() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      new sn({
        key: new sr("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((x) => x.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: s, to: a } = e.selection, c = ge.atStart(e.doc).from, u = ge.atEnd(e.doc).to, p = s === c && a === u, d = t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0;
          if (i || !p || !d)
            return;
          const h = t.tr, g = al({
            state: t,
            transaction: h
          }), { commands: y } = new ll({
            editor: this.editor,
            state: g
          });
          if (y.clearNodes(), !!h.steps.length)
            return h;
        }
      })
    ];
  }
}), fD = qt.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new sn({
        key: new sr("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var dD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: GM,
  Commands: aD,
  Editable: lD,
  FocusEvents: cD,
  Keymap: uD,
  Tabindex: fD
});
const pD = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function hD(n, e) {
  const t = document.querySelector("style[data-tiptap-style]");
  if (t !== null)
    return t;
  const r = document.createElement("style");
  return e && r.setAttribute("nonce", e), r.setAttribute("data-tiptap-style", ""), r.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(r), r;
}
class mD extends PM {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
    }, 0);
  }
  get storage() {
    return this.extensionStorage;
  }
  get commands() {
    return this.commandManager.commands;
  }
  chain() {
    return this.commandManager.chain();
  }
  can() {
    return this.commandManager.can();
  }
  injectCSS() {
    this.options.injectCSS && document && (this.css = hD(pD, this.options.injectNonce));
  }
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  setEditable(e) {
    this.setOptions({ editable: e }), this.emit("update", { editor: this, transaction: this.state.tr });
  }
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  get state() {
    return this.view.state;
  }
  registerPlugin(e, t) {
    const r = Ey(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    this.view.updateState(i);
  }
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(t))
    });
    this.view.updateState(r);
  }
  createExtensionManager() {
    const t = [...this.options.enableCoreExtensions ? Object.values(dD) : [], ...this.options.extensions].filter((r) => ["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
    this.extensionManager = new io(t, this);
  }
  createCommandManager() {
    this.commandManager = new ll({
      editor: this
    });
  }
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  createView() {
    const e = My(this.options.content, this.schema, this.options.parseOptions), t = Ty(e, this.options.autofocus);
    this.view = new rM(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: to.create({
        doc: e,
        selection: t || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews();
    const i = this.view.dom;
    i.editor = this;
  }
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  dispatchTransaction(e) {
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((a) => {
        var c;
        return (c = this.capturedTransaction) === null || c === void 0 ? void 0 : c.step(a);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  getAttributes(e) {
    return BN(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return $N(this.state, r, i);
  }
  getJSON() {
    return this.state.doc.toJSON();
  }
  getHTML() {
    return IN(this.state.doc.content, this.schema);
  }
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return PN(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...r,
        ...Oy(this.schema)
      }
    });
  }
  get isEmpty() {
    return FN(this.state.doc);
  }
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
}
function vo(n) {
  return new ul({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = me(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, a = r[r.length - 1], c = r[0];
      let u = t.to;
      if (a) {
        const p = c.search(/\S/), d = t.from + c.indexOf(a), h = d + a.length;
        if (Dy(t.from, t.to, e.doc).filter((y) => y.mark.type.excluded.find((_) => _ === n.type && _ !== y.mark.type)).filter((y) => y.to > d).length)
          return null;
        h < t.to && s.delete(h, t.to), d > t.from && s.delete(t.from + p, d), u = t.from + p + a.length, s.addMark(t.from + p, u, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function gD(n) {
  return new ul({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = me(n.getAttributes, void 0, r) || {}, { tr: s } = e, a = t.from;
      let c = t.to;
      if (r[1]) {
        const u = r[0].lastIndexOf(r[1]);
        let p = a + u;
        p > c ? p = c : c = p + r[1].length;
        const d = r[0][r[0].length - 1];
        s.insertText(d, a + r[0].length - 1), s.replaceWith(p, c, n.type.create(i));
      } else
        r[0] && s.replaceWith(a, c, n.type.create(i));
    }
  });
}
function Nu(n) {
  return new ul({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), s = me(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
    }
  });
}
function lf(n) {
  return new ul({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = me(n.getAttributes, void 0, r) || {}, s = e.tr.delete(t.from, t.to), c = s.doc.resolve(t.from).blockRange(), u = c && Uu(c, n.type, i);
      if (!u)
        return null;
      s.wrap(c, u);
      const p = s.doc.resolve(t.from - 1).nodeBefore;
      p && p.type === n.type && Eo(s.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, p)) && s.join(t.from - 1);
    }
  });
}
class Xr {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = me(ee(this, "addOptions", {
      name: this.name
    }))), this.storage = me(ee(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Xr(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = fl(this.options, e), t.storage = me(ee(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Xr(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = me(ee(t, "addOptions", {
      name: t.name
    })), t.storage = me(ee(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const a = i.marks();
      if (!!!a.find((p) => (p == null ? void 0 : p.type.name) === t.name))
        return !1;
      const u = a.find((p) => (p == null ? void 0 : p.type.name) === t.name);
      return u && r.removeStoredMark(u), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class rn {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = me(ee(this, "addOptions", {
      name: this.name
    }))), this.storage = me(ee(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new rn(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = fl(this.options, e), t.storage = me(ee(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new rn(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = me(ee(t, "addOptions", {
      name: t.name
    })), t.storage = me(ee(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function bo(n) {
  return new WM({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = me(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, a = r[r.length - 1], c = r[0];
      let u = t.to;
      if (a) {
        const p = c.search(/\S/), d = t.from + c.indexOf(a), h = d + a.length;
        if (Dy(t.from, t.to, e.doc).filter((y) => y.mark.type.excluded.find((_) => _ === n.type && _ !== y.mark.type)).filter((y) => y.to > d).length)
          return null;
        h < t.to && s.delete(h, t.to), d > t.from && s.delete(t.from + p, d), u = t.from + p + a.length, s.addMark(t.from + p, u, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
var tn = "top", Mn = "bottom", Nn = "right", nn = "left", pl = "auto", Cs = [tn, Mn, Nn, nn], wo = "start", xs = "end", yD = "clippingParents", Iy = "viewport", es = "popper", vD = "reference", dm = /* @__PURE__ */ Cs.reduce(function(n, e) {
  return n.concat([e + "-" + wo, e + "-" + xs]);
}, []), Py = /* @__PURE__ */ [].concat(Cs, [pl]).reduce(function(n, e) {
  return n.concat([e, e + "-" + wo, e + "-" + xs]);
}, []), bD = "beforeRead", wD = "read", xD = "afterRead", _D = "beforeMain", SD = "main", kD = "afterMain", ED = "beforeWrite", CD = "write", OD = "afterWrite", Du = [bD, wD, xD, _D, SD, kD, ED, CD, OD];
function ir(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function Dn(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Ai(n) {
  var e = Dn(n).Element;
  return n instanceof e || n instanceof Element;
}
function gn(n) {
  var e = Dn(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function cf(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Dn(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function TD(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, s = e.elements[t];
    !gn(s) || !ir(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? s.removeAttribute(a) : s.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function AD(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], s = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), c = a.reduce(function(u, p) {
        return u[p] = "", u;
      }, {});
      !gn(i) || !ir(i) || (Object.assign(i.style, c), Object.keys(s).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const Ly = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: TD,
  effect: AD,
  requires: ["computeStyles"]
};
function Hn(n) {
  return n.split("-")[0];
}
var Si = Math.max, qa = Math.min, xo = Math.round;
function Ru() {
  var n = navigator.userAgentData;
  return n != null && n.brands ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function By() {
  return !/^((?!chrome|android).)*safari/i.test(Ru());
}
function _o(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, s = 1;
  e && gn(n) && (i = n.offsetWidth > 0 && xo(r.width) / n.offsetWidth || 1, s = n.offsetHeight > 0 && xo(r.height) / n.offsetHeight || 1);
  var a = Ai(n) ? Dn(n) : window, c = a.visualViewport, u = !By() && t, p = (r.left + (u && c ? c.offsetLeft : 0)) / i, d = (r.top + (u && c ? c.offsetTop : 0)) / s, h = r.width / i, g = r.height / s;
  return {
    width: h,
    height: g,
    top: d,
    right: p + h,
    bottom: d + g,
    left: p,
    x: p,
    y: d
  };
}
function uf(n) {
  var e = _o(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function $y(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && cf(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Un(n) {
  return Dn(n).getComputedStyle(n);
}
function MD(n) {
  return ["table", "td", "th"].indexOf(ir(n)) >= 0;
}
function ei(n) {
  return ((Ai(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function hl(n) {
  return ir(n) === "html" ? n : n.assignedSlot || n.parentNode || (cf(n) ? n.host : null) || ei(n);
}
function pm(n) {
  return !gn(n) || Un(n).position === "fixed" ? null : n.offsetParent;
}
function ND(n) {
  var e = /firefox/i.test(Ru()), t = /Trident/i.test(Ru());
  if (t && gn(n)) {
    var r = Un(n);
    if (r.position === "fixed")
      return null;
  }
  var i = hl(n);
  for (cf(i) && (i = i.host); gn(i) && ["html", "body"].indexOf(ir(i)) < 0; ) {
    var s = Un(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || e && s.willChange === "filter" || e && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Os(n) {
  for (var e = Dn(n), t = pm(n); t && MD(t) && Un(t).position === "static"; )
    t = pm(t);
  return t && (ir(t) === "html" || ir(t) === "body" && Un(t).position === "static") ? e : t || ND(n) || e;
}
function ff(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function ds(n, e, t) {
  return Si(n, qa(e, t));
}
function DD(n, e, t) {
  var r = ds(n, e, t);
  return r > t ? t : r;
}
function Fy() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Vy(n) {
  return Object.assign({}, Fy(), n);
}
function zy(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var RD = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, Vy(typeof e != "number" ? e : zy(e, Cs));
};
function ID(n) {
  var e, t = n.state, r = n.name, i = n.options, s = t.elements.arrow, a = t.modifiersData.popperOffsets, c = Hn(t.placement), u = ff(c), p = [nn, Nn].indexOf(c) >= 0, d = p ? "height" : "width";
  if (!(!s || !a)) {
    var h = RD(i.padding, t), g = uf(s), y = u === "y" ? tn : nn, x = u === "y" ? Mn : Nn, _ = t.rects.reference[d] + t.rects.reference[u] - a[u] - t.rects.popper[d], O = a[u] - t.rects.reference[u], M = Os(s), I = M ? u === "y" ? M.clientHeight || 0 : M.clientWidth || 0 : 0, W = _ / 2 - O / 2, E = h[y], U = I - g[d] - h[x], $ = I / 2 - g[d] / 2 + W, Z = ds(E, $, U), K = u;
    t.modifiersData[r] = (e = {}, e[K] = Z, e.centerOffset = Z - $, e);
  }
}
function PD(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  if (i != null && !(typeof i == "string" && (i = e.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (gn(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !$y(e.elements.popper, i)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    e.elements.arrow = i;
  }
}
const LD = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ID,
  effect: PD,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function So(n) {
  return n.split("-")[1];
}
var BD = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function $D(n) {
  var e = n.x, t = n.y, r = window, i = r.devicePixelRatio || 1;
  return {
    x: xo(e * i) / i || 0,
    y: xo(t * i) / i || 0
  };
}
function hm(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, s = n.variation, a = n.offsets, c = n.position, u = n.gpuAcceleration, p = n.adaptive, d = n.roundOffsets, h = n.isFixed, g = a.x, y = g === void 0 ? 0 : g, x = a.y, _ = x === void 0 ? 0 : x, O = typeof d == "function" ? d({
    x: y,
    y: _
  }) : {
    x: y,
    y: _
  };
  y = O.x, _ = O.y;
  var M = a.hasOwnProperty("x"), I = a.hasOwnProperty("y"), W = nn, E = tn, U = window;
  if (p) {
    var $ = Os(t), Z = "clientHeight", K = "clientWidth";
    if ($ === Dn(t) && ($ = ei(t), Un($).position !== "static" && c === "absolute" && (Z = "scrollHeight", K = "scrollWidth")), $ = $, i === tn || (i === nn || i === Nn) && s === xs) {
      E = Mn;
      var we = h && $ === U && U.visualViewport ? U.visualViewport.height : $[Z];
      _ -= we - r.height, _ *= u ? 1 : -1;
    }
    if (i === nn || (i === tn || i === Mn) && s === xs) {
      W = Nn;
      var De = h && $ === U && U.visualViewport ? U.visualViewport.width : $[K];
      y -= De - r.width, y *= u ? 1 : -1;
    }
  }
  var ke = Object.assign({
    position: c
  }, p && BD), Te = d === !0 ? $D({
    x: y,
    y: _
  }) : {
    x: y,
    y: _
  };
  if (y = Te.x, _ = Te.y, u) {
    var je;
    return Object.assign({}, ke, (je = {}, je[E] = I ? "0" : "", je[W] = M ? "0" : "", je.transform = (U.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", je));
  }
  return Object.assign({}, ke, (e = {}, e[E] = I ? _ + "px" : "", e[W] = M ? y + "px" : "", e.transform = "", e));
}
function FD(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, s = t.adaptive, a = s === void 0 ? !0 : s, c = t.roundOffsets, u = c === void 0 ? !0 : c;
  if (process.env.NODE_ENV !== "production") {
    var p = Un(e.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(h) {
      return p.indexOf(h) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Hn(e.placement),
    variation: So(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, hm(Object.assign({}, d, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: u
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, hm(Object.assign({}, d, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const VD = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: FD,
  data: {}
};
var Sa = {
  passive: !0
};
function zD(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, c = a === void 0 ? !0 : a, u = Dn(e.elements.popper), p = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return s && p.forEach(function(d) {
    d.addEventListener("scroll", t.update, Sa);
  }), c && u.addEventListener("resize", t.update, Sa), function() {
    s && p.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Sa);
    }), c && u.removeEventListener("resize", t.update, Sa);
  };
}
const HD = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: zD,
  data: {}
};
var WD = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Aa(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return WD[e];
  });
}
var UD = {
  start: "end",
  end: "start"
};
function mm(n) {
  return n.replace(/start|end/g, function(e) {
    return UD[e];
  });
}
function df(n) {
  var e = Dn(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function pf(n) {
  return _o(ei(n)).left + df(n).scrollLeft;
}
function jD(n, e) {
  var t = Dn(n), r = ei(n), i = t.visualViewport, s = r.clientWidth, a = r.clientHeight, c = 0, u = 0;
  if (i) {
    s = i.width, a = i.height;
    var p = By();
    (p || !p && e === "fixed") && (c = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: c + pf(n),
    y: u
  };
}
function qD(n) {
  var e, t = ei(n), r = df(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, s = Si(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Si(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + pf(n), u = -r.scrollTop;
  return Un(i || t).direction === "rtl" && (c += Si(t.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: c,
    y: u
  };
}
function hf(n) {
  var e = Un(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function Hy(n) {
  return ["html", "body", "#document"].indexOf(ir(n)) >= 0 ? n.ownerDocument.body : gn(n) && hf(n) ? n : Hy(hl(n));
}
function ps(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = Hy(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), s = Dn(r), a = i ? [s].concat(s.visualViewport || [], hf(r) ? r : []) : r, c = e.concat(a);
  return i ? c : c.concat(ps(hl(a)));
}
function Iu(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function KD(n, e) {
  var t = _o(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function gm(n, e, t) {
  return e === Iy ? Iu(jD(n, t)) : Ai(e) ? KD(e, t) : Iu(qD(ei(n)));
}
function JD(n) {
  var e = ps(hl(n)), t = ["absolute", "fixed"].indexOf(Un(n).position) >= 0, r = t && gn(n) ? Os(n) : n;
  return Ai(r) ? e.filter(function(i) {
    return Ai(i) && $y(i, r) && ir(i) !== "body";
  }) : [];
}
function GD(n, e, t, r) {
  var i = e === "clippingParents" ? JD(n) : [].concat(e), s = [].concat(i, [t]), a = s[0], c = s.reduce(function(u, p) {
    var d = gm(n, p, r);
    return u.top = Si(d.top, u.top), u.right = qa(d.right, u.right), u.bottom = qa(d.bottom, u.bottom), u.left = Si(d.left, u.left), u;
  }, gm(n, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Wy(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? Hn(r) : null, s = r ? So(r) : null, a = e.x + e.width / 2 - t.width / 2, c = e.y + e.height / 2 - t.height / 2, u;
  switch (i) {
    case tn:
      u = {
        x: a,
        y: e.y - t.height
      };
      break;
    case Mn:
      u = {
        x: a,
        y: e.y + e.height
      };
      break;
    case Nn:
      u = {
        x: e.x + e.width,
        y: c
      };
      break;
    case nn:
      u = {
        x: e.x - t.width,
        y: c
      };
      break;
    default:
      u = {
        x: e.x,
        y: e.y
      };
  }
  var p = i ? ff(i) : null;
  if (p != null) {
    var d = p === "y" ? "height" : "width";
    switch (s) {
      case wo:
        u[p] = u[p] - (e[d] / 2 - t[d] / 2);
        break;
      case xs:
        u[p] = u[p] + (e[d] / 2 - t[d] / 2);
        break;
    }
  }
  return u;
}
function _s(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, s = t.strategy, a = s === void 0 ? n.strategy : s, c = t.boundary, u = c === void 0 ? yD : c, p = t.rootBoundary, d = p === void 0 ? Iy : p, h = t.elementContext, g = h === void 0 ? es : h, y = t.altBoundary, x = y === void 0 ? !1 : y, _ = t.padding, O = _ === void 0 ? 0 : _, M = Vy(typeof O != "number" ? O : zy(O, Cs)), I = g === es ? vD : es, W = n.rects.popper, E = n.elements[x ? I : g], U = GD(Ai(E) ? E : E.contextElement || ei(n.elements.popper), u, d, a), $ = _o(n.elements.reference), Z = Wy({
    reference: $,
    element: W,
    strategy: "absolute",
    placement: i
  }), K = Iu(Object.assign({}, W, Z)), we = g === es ? K : $, De = {
    top: U.top - we.top + M.top,
    bottom: we.bottom - U.bottom + M.bottom,
    left: U.left - we.left + M.left,
    right: we.right - U.right + M.right
  }, ke = n.modifiersData.offset;
  if (g === es && ke) {
    var Te = ke[i];
    Object.keys(De).forEach(function(je) {
      var lt = [Nn, Mn].indexOf(je) >= 0 ? 1 : -1, mt = [tn, Mn].indexOf(je) >= 0 ? "y" : "x";
      De[je] += Te[mt] * lt;
    });
  }
  return De;
}
function YD(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, s = t.rootBoundary, a = t.padding, c = t.flipVariations, u = t.allowedAutoPlacements, p = u === void 0 ? Py : u, d = So(r), h = d ? c ? dm : dm.filter(function(x) {
    return So(x) === d;
  }) : Cs, g = h.filter(function(x) {
    return p.indexOf(x) >= 0;
  });
  g.length === 0 && (g = h, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var y = g.reduce(function(x, _) {
    return x[_] = _s(n, {
      placement: _,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Hn(_)], x;
  }, {});
  return Object.keys(y).sort(function(x, _) {
    return y[x] - y[_];
  });
}
function XD(n) {
  if (Hn(n) === pl)
    return [];
  var e = Aa(n);
  return [mm(n), e, mm(e)];
}
function ZD(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, s = i === void 0 ? !0 : i, a = t.altAxis, c = a === void 0 ? !0 : a, u = t.fallbackPlacements, p = t.padding, d = t.boundary, h = t.rootBoundary, g = t.altBoundary, y = t.flipVariations, x = y === void 0 ? !0 : y, _ = t.allowedAutoPlacements, O = e.options.placement, M = Hn(O), I = M === O, W = u || (I || !x ? [Aa(O)] : XD(O)), E = [O].concat(W).reduce(function(Kt, D) {
      return Kt.concat(Hn(D) === pl ? YD(e, {
        placement: D,
        boundary: d,
        rootBoundary: h,
        padding: p,
        flipVariations: x,
        allowedAutoPlacements: _
      }) : D);
    }, []), U = e.rects.reference, $ = e.rects.popper, Z = /* @__PURE__ */ new Map(), K = !0, we = E[0], De = 0; De < E.length; De++) {
      var ke = E[De], Te = Hn(ke), je = So(ke) === wo, lt = [tn, Mn].indexOf(Te) >= 0, mt = lt ? "width" : "height", Qe = _s(e, {
        placement: ke,
        boundary: d,
        rootBoundary: h,
        altBoundary: g,
        padding: p
      }), He = lt ? je ? Nn : nn : je ? Mn : tn;
      U[mt] > $[mt] && (He = Aa(He));
      var We = Aa(He), Ot = [];
      if (s && Ot.push(Qe[Te] <= 0), c && Ot.push(Qe[He] <= 0, Qe[We] <= 0), Ot.every(function(Kt) {
        return Kt;
      })) {
        we = ke, K = !1;
        break;
      }
      Z.set(ke, Ot);
    }
    if (K)
      for (var gt = x ? 3 : 1, rt = function(D) {
        var j = E.find(function(q) {
          var G = Z.get(q);
          if (G)
            return G.slice(0, D).every(function(ce) {
              return ce;
            });
        });
        if (j)
          return we = j, "break";
      }, Tt = gt; Tt > 0; Tt--) {
        var an = rt(Tt);
        if (an === "break")
          break;
      }
    e.placement !== we && (e.modifiersData[r]._skip = !0, e.placement = we, e.reset = !0);
  }
}
const QD = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ZD,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ym(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function vm(n) {
  return [tn, Nn, Mn, nn].some(function(e) {
    return n[e] >= 0;
  });
}
function eR(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, s = e.modifiersData.preventOverflow, a = _s(e, {
    elementContext: "reference"
  }), c = _s(e, {
    altBoundary: !0
  }), u = ym(a, r), p = ym(c, i, s), d = vm(u), h = vm(p);
  e.modifiersData[t] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: p,
    isReferenceHidden: d,
    hasPopperEscaped: h
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": h
  });
}
const tR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: eR
};
function nR(n, e, t) {
  var r = Hn(n), i = [nn, tn].indexOf(r) >= 0 ? -1 : 1, s = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, a = s[0], c = s[1];
  return a = a || 0, c = (c || 0) * i, [nn, Nn].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function rR(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, s = i === void 0 ? [0, 0] : i, a = Py.reduce(function(d, h) {
    return d[h] = nR(h, e.rects, s), d;
  }, {}), c = a[e.placement], u = c.x, p = c.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += p), e.modifiersData[r] = a;
}
const iR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: rR
};
function oR(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Wy({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const sR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: oR,
  data: {}
};
function aR(n) {
  return n === "x" ? "y" : "x";
}
function lR(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, s = i === void 0 ? !0 : i, a = t.altAxis, c = a === void 0 ? !1 : a, u = t.boundary, p = t.rootBoundary, d = t.altBoundary, h = t.padding, g = t.tether, y = g === void 0 ? !0 : g, x = t.tetherOffset, _ = x === void 0 ? 0 : x, O = _s(e, {
    boundary: u,
    rootBoundary: p,
    padding: h,
    altBoundary: d
  }), M = Hn(e.placement), I = So(e.placement), W = !I, E = ff(M), U = aR(E), $ = e.modifiersData.popperOffsets, Z = e.rects.reference, K = e.rects.popper, we = typeof _ == "function" ? _(Object.assign({}, e.rects, {
    placement: e.placement
  })) : _, De = typeof we == "number" ? {
    mainAxis: we,
    altAxis: we
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, we), ke = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, Te = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (s) {
      var je, lt = E === "y" ? tn : nn, mt = E === "y" ? Mn : Nn, Qe = E === "y" ? "height" : "width", He = $[E], We = He + O[lt], Ot = He - O[mt], gt = y ? -K[Qe] / 2 : 0, rt = I === wo ? Z[Qe] : K[Qe], Tt = I === wo ? -K[Qe] : -Z[Qe], an = e.elements.arrow, Kt = y && an ? uf(an) : {
        width: 0,
        height: 0
      }, D = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Fy(), j = D[lt], q = D[mt], G = ds(0, Z[Qe], Kt[Qe]), ce = W ? Z[Qe] / 2 - gt - G - j - De.mainAxis : rt - G - j - De.mainAxis, $e = W ? -Z[Qe] / 2 + gt + G + q + De.mainAxis : Tt + G + q + De.mainAxis, se = e.elements.arrow && Os(e.elements.arrow), ae = se ? E === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, Pe = (je = ke == null ? void 0 : ke[E]) != null ? je : 0, Xe = He + ce - Pe - ae, Je = He + $e - Pe, ti = ds(y ? qa(We, Xe) : We, He, y ? Si(Ot, Je) : Ot);
      $[E] = ti, Te[E] = ti - He;
    }
    if (c) {
      var It, ni = E === "x" ? tn : nn, Mi = E === "x" ? Mn : Nn, Pt = $[U], ct = U === "y" ? "height" : "width", Rn = Pt + O[ni], vn = Pt - O[Mi], ri = [tn, nn].indexOf(M) !== -1, jn = (It = ke == null ? void 0 : ke[U]) != null ? It : 0, Ni = ri ? Rn : Pt - Z[ct] - K[ct] - jn + De.altAxis, qn = ri ? Pt + Z[ct] + K[ct] - jn - De.altAxis : vn, In = y && ri ? DD(Ni, Pt, qn) : ds(y ? Ni : Rn, Pt, y ? qn : vn);
      $[U] = In, Te[U] = In - Pt;
    }
    e.modifiersData[r] = Te;
  }
}
const cR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: lR,
  requiresIfExists: ["offset"]
};
function uR(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function fR(n) {
  return n === Dn(n) || !gn(n) ? df(n) : uR(n);
}
function dR(n) {
  var e = n.getBoundingClientRect(), t = xo(e.width) / n.offsetWidth || 1, r = xo(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function pR(n, e, t) {
  t === void 0 && (t = !1);
  var r = gn(e), i = gn(e) && dR(e), s = ei(e), a = _o(n, i, t), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((ir(e) !== "body" || hf(s)) && (c = fR(e)), gn(e) ? (u = _o(e, !0), u.x += e.clientLeft, u.y += e.clientTop) : s && (u.x = pf(s))), {
    x: a.left + c.scrollLeft - u.x,
    y: a.top + c.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function hR(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(s) {
    e.set(s.name, s);
  });
  function i(s) {
    t.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(c) {
      if (!t.has(c)) {
        var u = e.get(c);
        u && i(u);
      }
    }), r.push(s);
  }
  return n.forEach(function(s) {
    t.has(s.name) || i(s);
  }), r;
}
function mR(n) {
  var e = hR(n);
  return Du.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function gR(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function Br(n) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    t[r - 1] = arguments[r];
  return [].concat(t).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, n);
}
var pi = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', yR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', bm = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function vR(n) {
  n.forEach(function(e) {
    [].concat(Object.keys(e), bm).filter(function(t, r, i) {
      return i.indexOf(t) === r;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof e.name != "string" && console.error(Br(pi, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(Br(pi, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          Du.indexOf(e.phase) < 0 && console.error(Br(pi, e.name, '"phase"', "either " + Du.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(Br(pi, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(Br(pi, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(Br(pi, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(Br(pi, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + bm.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      e.requires && e.requires.forEach(function(r) {
        n.find(function(i) {
          return i.name === r;
        }) == null && console.error(Br(yR, String(e.name), r, r));
      });
    });
  });
}
function bR(n, e) {
  var t = /* @__PURE__ */ new Set();
  return n.filter(function(r) {
    var i = e(r);
    if (!t.has(i))
      return t.add(i), !0;
  });
}
function wR(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var wm = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", xR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", xm = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _m() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function _R(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, s = i === void 0 ? xm : i;
  return function(c, u, p) {
    p === void 0 && (p = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xm, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: u
      },
      attributes: {},
      styles: {}
    }, h = [], g = !1, y = {
      state: d,
      setOptions: function(M) {
        var I = typeof M == "function" ? M(d.options) : M;
        _(), d.options = Object.assign({}, s, d.options, I), d.scrollParents = {
          reference: Ai(c) ? ps(c) : c.contextElement ? ps(c.contextElement) : [],
          popper: ps(u)
        };
        var W = mR(wR([].concat(r, d.options.modifiers)));
        if (d.orderedModifiers = W.filter(function(ke) {
          return ke.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = bR([].concat(W, d.options.modifiers), function(ke) {
            var Te = ke.name;
            return Te;
          });
          if (vR(E), Hn(d.options.placement) === pl) {
            var U = d.orderedModifiers.find(function(ke) {
              var Te = ke.name;
              return Te === "flip";
            });
            U || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var $ = Un(u), Z = $.marginTop, K = $.marginRight, we = $.marginBottom, De = $.marginLeft;
          [Z, K, we, De].some(function(ke) {
            return parseFloat(ke);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return x(), y.update();
      },
      forceUpdate: function() {
        if (!g) {
          var M = d.elements, I = M.reference, W = M.popper;
          if (!_m(I, W)) {
            process.env.NODE_ENV !== "production" && console.error(wm);
            return;
          }
          d.rects = {
            reference: pR(I, Os(W), d.options.strategy === "fixed"),
            popper: uf(W)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(ke) {
            return d.modifiersData[ke.name] = Object.assign({}, ke.data);
          });
          for (var E = 0, U = 0; U < d.orderedModifiers.length; U++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(xR);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, U = -1;
              continue;
            }
            var $ = d.orderedModifiers[U], Z = $.fn, K = $.options, we = K === void 0 ? {} : K, De = $.name;
            typeof Z == "function" && (d = Z({
              state: d,
              options: we,
              name: De,
              instance: y
            }) || d);
          }
        }
      },
      update: gR(function() {
        return new Promise(function(O) {
          y.forceUpdate(), O(d);
        });
      }),
      destroy: function() {
        _(), g = !0;
      }
    };
    if (!_m(c, u))
      return process.env.NODE_ENV !== "production" && console.error(wm), y;
    y.setOptions(p).then(function(O) {
      !g && p.onFirstUpdate && p.onFirstUpdate(O);
    });
    function x() {
      d.orderedModifiers.forEach(function(O) {
        var M = O.name, I = O.options, W = I === void 0 ? {} : I, E = O.effect;
        if (typeof E == "function") {
          var U = E({
            state: d,
            name: M,
            instance: y,
            options: W
          }), $ = function() {
          };
          h.push(U || $);
        }
      });
    }
    function _() {
      h.forEach(function(O) {
        return O();
      }), h = [];
    }
    return y;
  };
}
var SR = [HD, sR, VD, Ly, iR, QD, cR, LD, tR], kR = /* @__PURE__ */ _R({
  defaultModifiers: SR
}), ER = "tippy-box", Uy = "tippy-content", CR = "tippy-backdrop", jy = "tippy-arrow", qy = "tippy-svg-arrow", hi = {
  passive: !0,
  capture: !0
}, Ky = function() {
  return document.body;
};
function OR(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function eu(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r == null ? Array.isArray(t) ? t[e] : t : r;
  }
  return n;
}
function mf(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function Jy(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function Sm(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function TR(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function AR(n) {
  return n.split(/\s+/).filter(Boolean);
}
function eo(n) {
  return [].concat(n);
}
function km(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function MR(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function NR(n) {
  return n.split("-")[0];
}
function Ka(n) {
  return [].slice.call(n);
}
function Em(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function hs() {
  return document.createElement("div");
}
function Ss(n) {
  return ["Element", "Fragment"].some(function(e) {
    return mf(n, e);
  });
}
function DR(n) {
  return mf(n, "NodeList");
}
function RR(n) {
  return mf(n, "MouseEvent");
}
function IR(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function PR(n) {
  return Ss(n) ? [n] : DR(n) ? Ka(n) : Array.isArray(n) ? n : Ka(document.querySelectorAll(n));
}
function tu(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function Cm(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function LR(n) {
  var e, t = eo(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function BR(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var s = i.popperRect, a = i.popperState, c = i.props, u = c.interactiveBorder, p = NR(a.placement), d = a.modifiersData.offset;
    if (!d)
      return !0;
    var h = p === "bottom" ? d.top.y : 0, g = p === "top" ? d.bottom.y : 0, y = p === "right" ? d.left.x : 0, x = p === "left" ? d.right.x : 0, _ = s.top - r + h > u, O = r - s.bottom - g > u, M = s.left - t + y > u, I = t - s.right - x > u;
    return _ || O || M || I;
  });
}
function nu(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function Om(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var Xn = {
  isTouch: !1
}, Tm = 0;
function $R() {
  Xn.isTouch || (Xn.isTouch = !0, window.performance && document.addEventListener("mousemove", Gy));
}
function Gy() {
  var n = performance.now();
  n - Tm < 20 && (Xn.isTouch = !1, document.removeEventListener("mousemove", Gy)), Tm = n;
}
function FR() {
  var n = document.activeElement;
  if (IR(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function VR() {
  document.addEventListener("touchstart", $R, hi), window.addEventListener("blur", FR);
}
var zR = typeof window < "u" && typeof document < "u", HR = zR ? !!window.msCrypto : !1;
function Xi(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function Am(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function WR(n) {
  return Am(`
  %ctippy.js

  %c` + Am(n) + `

  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.
  `);
}
function Yy(n) {
  return [
    WR(n),
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    "line-height: 1.5",
    "color: #a6a095;"
  ];
}
var ks;
process.env.NODE_ENV !== "production" && UR();
function UR() {
  ks = /* @__PURE__ */ new Set();
}
function wr(n, e) {
  if (n && !ks.has(e)) {
    var t;
    ks.add(e), (t = console).warn.apply(t, Yy(e));
  }
}
function Pu(n, e) {
  if (n && !ks.has(e)) {
    var t;
    ks.add(e), (t = console).error.apply(t, Yy(e));
  }
}
function jR(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  Pu(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Pu(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var Xy = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, qR = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, mn = Object.assign({
  appendTo: Ky,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, Xy, qR), KR = Object.keys(mn), JR = function(e) {
  process.env.NODE_ENV !== "production" && Qy(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    mn[r] = e[r];
  });
};
function Zy(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var s = i.name, a = i.defaultValue;
    if (s) {
      var c;
      r[s] = n[s] !== void 0 ? n[s] : (c = mn[s]) != null ? c : a;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function GR(n, e) {
  var t = e ? Object.keys(Zy(Object.assign({}, mn, {
    plugins: e
  }))) : KR, r = t.reduce(function(i, s) {
    var a = (n.getAttribute("data-tippy-" + s) || "").trim();
    if (!a)
      return i;
    if (s === "content")
      i[s] = a;
    else
      try {
        i[s] = JSON.parse(a);
      } catch {
        i[s] = a;
      }
    return i;
  }, {});
  return r;
}
function Mm(n, e) {
  var t = Object.assign({}, e, {
    content: Jy(e.content, [n])
  }, e.ignoreAttributes ? {} : GR(n, e.plugins));
  return t.aria = Object.assign({}, mn.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function Qy(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = TR(mn, Object.keys(Xy)), s = !OR(i, r);
    s && (s = e.filter(function(a) {
      return a.name === r;
    }).length === 0), wr(s, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var YR = function() {
  return "innerHTML";
};
function Lu(n, e) {
  n[YR()] = e;
}
function Nm(n) {
  var e = hs();
  return n === !0 ? e.className = jy : (e.className = qy, Ss(n) ? e.appendChild(n) : Lu(e, n)), e;
}
function Dm(n, e) {
  Ss(e.content) ? (Lu(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Lu(n, e.content) : n.textContent = e.content);
}
function Bu(n) {
  var e = n.firstElementChild, t = Ka(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(Uy);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(jy) || r.classList.contains(qy);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(CR);
    })
  };
}
function ev(n) {
  var e = hs(), t = hs();
  t.className = ER, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = hs();
  r.className = Uy, r.setAttribute("data-state", "hidden"), Dm(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(s, a) {
    var c = Bu(e), u = c.box, p = c.content, d = c.arrow;
    a.theme ? u.setAttribute("data-theme", a.theme) : u.removeAttribute("data-theme"), typeof a.animation == "string" ? u.setAttribute("data-animation", a.animation) : u.removeAttribute("data-animation"), a.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof a.maxWidth == "number" ? a.maxWidth + "px" : a.maxWidth, a.role ? u.setAttribute("role", a.role) : u.removeAttribute("role"), (s.content !== a.content || s.allowHTML !== a.allowHTML) && Dm(p, n.props), a.arrow ? d ? s.arrow !== a.arrow && (u.removeChild(d), u.appendChild(Nm(a.arrow))) : u.appendChild(Nm(a.arrow)) : d && u.removeChild(d);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
ev.$$tippy = !0;
var XR = 1, ka = [], ru = [];
function ZR(n, e) {
  var t = Mm(n, Object.assign({}, mn, Zy(Em(e)))), r, i, s, a = !1, c = !1, u = !1, p = !1, d, h, g, y = [], x = Sm(Xe, t.interactiveDebounce), _, O = XR++, M = null, I = MR(t.plugins), W = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, E = {
    id: O,
    reference: n,
    popper: hs(),
    popperInstance: M,
    props: t,
    state: W,
    plugins: I,
    clearDelayTimeouts: Ni,
    setProps: qn,
    setContent: In,
    show: Oo,
    hide: To,
    hideWithInteractivity: Ao,
    enable: ri,
    disable: jn,
    unmount: Mo,
    destroy: No
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && Pu(!0, "render() function has not been supplied."), E;
  var U = t.render(E), $ = U.popper, Z = U.onUpdate;
  $.setAttribute("data-tippy-root", ""), $.id = "tippy-" + E.id, E.popper = $, n._tippy = E, $._tippy = E;
  var K = I.map(function(R) {
    return R.fn(E);
  }), we = n.hasAttribute("aria-expanded");
  return se(), gt(), He(), We("onCreate", [E]), t.showOnCreate && Rn(), $.addEventListener("mouseenter", function() {
    E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
  }), $.addEventListener("mouseleave", function() {
    E.props.interactive && E.props.trigger.indexOf("mouseenter") >= 0 && lt().addEventListener("mousemove", x);
  }), E;
  function De() {
    var R = E.props.touch;
    return Array.isArray(R) ? R : [R, 0];
  }
  function ke() {
    return De()[0] === "hold";
  }
  function Te() {
    var R;
    return !!((R = E.props.render) != null && R.$$tippy);
  }
  function je() {
    return _ || n;
  }
  function lt() {
    var R = je().parentNode;
    return R ? LR(R) : document;
  }
  function mt() {
    return Bu($);
  }
  function Qe(R) {
    return E.state.isMounted && !E.state.isVisible || Xn.isTouch || d && d.type === "focus" ? 0 : eu(E.props.delay, R ? 0 : 1, mn.delay);
  }
  function He(R) {
    R === void 0 && (R = !1), $.style.pointerEvents = E.props.interactive && !R ? "" : "none", $.style.zIndex = "" + E.props.zIndex;
  }
  function We(R, Q, ne) {
    if (ne === void 0 && (ne = !0), K.forEach(function(Ee) {
      Ee[R] && Ee[R].apply(Ee, Q);
    }), ne) {
      var Me;
      (Me = E.props)[R].apply(Me, Q);
    }
  }
  function Ot() {
    var R = E.props.aria;
    if (!!R.content) {
      var Q = "aria-" + R.content, ne = $.id, Me = eo(E.props.triggerTarget || n);
      Me.forEach(function(Ee) {
        var xt = Ee.getAttribute(Q);
        if (E.state.isVisible)
          Ee.setAttribute(Q, xt ? xt + " " + ne : ne);
        else {
          var Jt = xt && xt.replace(ne, "").trim();
          Jt ? Ee.setAttribute(Q, Jt) : Ee.removeAttribute(Q);
        }
      });
    }
  }
  function gt() {
    if (!(we || !E.props.aria.expanded)) {
      var R = eo(E.props.triggerTarget || n);
      R.forEach(function(Q) {
        E.props.interactive ? Q.setAttribute("aria-expanded", E.state.isVisible && Q === je() ? "true" : "false") : Q.removeAttribute("aria-expanded");
      });
    }
  }
  function rt() {
    lt().removeEventListener("mousemove", x), ka = ka.filter(function(R) {
      return R !== x;
    });
  }
  function Tt(R) {
    if (!(Xn.isTouch && (u || R.type === "mousedown"))) {
      var Q = R.composedPath && R.composedPath()[0] || R.target;
      if (!(E.props.interactive && Om($, Q))) {
        if (eo(E.props.triggerTarget || n).some(function(ne) {
          return Om(ne, Q);
        })) {
          if (Xn.isTouch || E.state.isVisible && E.props.trigger.indexOf("click") >= 0)
            return;
        } else
          We("onClickOutside", [E, R]);
        E.props.hideOnClick === !0 && (E.clearDelayTimeouts(), E.hide(), c = !0, setTimeout(function() {
          c = !1;
        }), E.state.isMounted || j());
      }
    }
  }
  function an() {
    u = !0;
  }
  function Kt() {
    u = !1;
  }
  function D() {
    var R = lt();
    R.addEventListener("mousedown", Tt, !0), R.addEventListener("touchend", Tt, hi), R.addEventListener("touchstart", Kt, hi), R.addEventListener("touchmove", an, hi);
  }
  function j() {
    var R = lt();
    R.removeEventListener("mousedown", Tt, !0), R.removeEventListener("touchend", Tt, hi), R.removeEventListener("touchstart", Kt, hi), R.removeEventListener("touchmove", an, hi);
  }
  function q(R, Q) {
    ce(R, function() {
      !E.state.isVisible && $.parentNode && $.parentNode.contains($) && Q();
    });
  }
  function G(R, Q) {
    ce(R, Q);
  }
  function ce(R, Q) {
    var ne = mt().box;
    function Me(Ee) {
      Ee.target === ne && (nu(ne, "remove", Me), Q());
    }
    if (R === 0)
      return Q();
    nu(ne, "remove", h), nu(ne, "add", Me), h = Me;
  }
  function $e(R, Q, ne) {
    ne === void 0 && (ne = !1);
    var Me = eo(E.props.triggerTarget || n);
    Me.forEach(function(Ee) {
      Ee.addEventListener(R, Q, ne), y.push({
        node: Ee,
        eventType: R,
        handler: Q,
        options: ne
      });
    });
  }
  function se() {
    ke() && ($e("touchstart", Pe, {
      passive: !0
    }), $e("touchend", Je, {
      passive: !0
    })), AR(E.props.trigger).forEach(function(R) {
      if (R !== "manual")
        switch ($e(R, Pe), R) {
          case "mouseenter":
            $e("mouseleave", Je);
            break;
          case "focus":
            $e(HR ? "focusout" : "blur", ti);
            break;
          case "focusin":
            $e("focusout", ti);
            break;
        }
    });
  }
  function ae() {
    y.forEach(function(R) {
      var Q = R.node, ne = R.eventType, Me = R.handler, Ee = R.options;
      Q.removeEventListener(ne, Me, Ee);
    }), y = [];
  }
  function Pe(R) {
    var Q, ne = !1;
    if (!(!E.state.isEnabled || It(R) || c)) {
      var Me = ((Q = d) == null ? void 0 : Q.type) === "focus";
      d = R, _ = R.currentTarget, gt(), !E.state.isVisible && RR(R) && ka.forEach(function(Ee) {
        return Ee(R);
      }), R.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || a) && E.props.hideOnClick !== !1 && E.state.isVisible ? ne = !0 : Rn(R), R.type === "click" && (a = !ne), ne && !Me && vn(R);
    }
  }
  function Xe(R) {
    var Q = R.target, ne = je().contains(Q) || $.contains(Q);
    if (!(R.type === "mousemove" && ne)) {
      var Me = ct().concat($).map(function(Ee) {
        var xt, Jt = Ee._tippy, ar = (xt = Jt.popperInstance) == null ? void 0 : xt.state;
        return ar ? {
          popperRect: Ee.getBoundingClientRect(),
          popperState: ar,
          props: t
        } : null;
      }).filter(Boolean);
      BR(Me, R) && (rt(), vn(R));
    }
  }
  function Je(R) {
    var Q = It(R) || E.props.trigger.indexOf("click") >= 0 && a;
    if (!Q) {
      if (E.props.interactive) {
        E.hideWithInteractivity(R);
        return;
      }
      vn(R);
    }
  }
  function ti(R) {
    E.props.trigger.indexOf("focusin") < 0 && R.target !== je() || E.props.interactive && R.relatedTarget && $.contains(R.relatedTarget) || vn(R);
  }
  function It(R) {
    return Xn.isTouch ? ke() !== R.type.indexOf("touch") >= 0 : !1;
  }
  function ni() {
    Mi();
    var R = E.props, Q = R.popperOptions, ne = R.placement, Me = R.offset, Ee = R.getReferenceClientRect, xt = R.moveTransition, Jt = Te() ? Bu($).arrow : null, ar = Ee ? {
      getBoundingClientRect: Ee,
      contextElement: Ee.contextElement || je()
    } : n, Do = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Di) {
        var Er = Di.state;
        if (Te()) {
          var Ts = mt(), Io = Ts.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Ri) {
            Ri === "placement" ? Io.setAttribute("data-placement", Er.placement) : Er.attributes.popper["data-popper-" + Ri] ? Io.setAttribute("data-" + Ri, "") : Io.removeAttribute("data-" + Ri);
          }), Er.attributes.popper = {};
        }
      }
    }, lr = [{
      name: "offset",
      options: {
        offset: Me
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !xt
      }
    }, Do];
    Te() && Jt && lr.push({
      name: "arrow",
      options: {
        element: Jt,
        padding: 3
      }
    }), lr.push.apply(lr, (Q == null ? void 0 : Q.modifiers) || []), E.popperInstance = kR(ar, $, Object.assign({}, Q, {
      placement: ne,
      onFirstUpdate: g,
      modifiers: lr
    }));
  }
  function Mi() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  function Pt() {
    var R = E.props.appendTo, Q, ne = je();
    E.props.interactive && R === Ky || R === "parent" ? Q = ne.parentNode : Q = Jy(R, [ne]), Q.contains($) || Q.appendChild($), E.state.isMounted = !0, ni(), process.env.NODE_ENV !== "production" && wr(E.props.interactive && R === mn.appendTo && ne.nextElementSibling !== $, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function ct() {
    return Ka($.querySelectorAll("[data-tippy-root]"));
  }
  function Rn(R) {
    E.clearDelayTimeouts(), R && We("onTrigger", [E, R]), D();
    var Q = Qe(!0), ne = De(), Me = ne[0], Ee = ne[1];
    Xn.isTouch && Me === "hold" && Ee && (Q = Ee), Q ? r = setTimeout(function() {
      E.show();
    }, Q) : E.show();
  }
  function vn(R) {
    if (E.clearDelayTimeouts(), We("onUntrigger", [E, R]), !E.state.isVisible) {
      j();
      return;
    }
    if (!(E.props.trigger.indexOf("mouseenter") >= 0 && E.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(R.type) >= 0 && a)) {
      var Q = Qe(!1);
      Q ? i = setTimeout(function() {
        E.state.isVisible && E.hide();
      }, Q) : s = requestAnimationFrame(function() {
        E.hide();
      });
    }
  }
  function ri() {
    E.state.isEnabled = !0;
  }
  function jn() {
    E.hide(), E.state.isEnabled = !1;
  }
  function Ni() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(s);
  }
  function qn(R) {
    if (process.env.NODE_ENV !== "production" && wr(E.state.isDestroyed, Xi("setProps")), !E.state.isDestroyed) {
      We("onBeforeUpdate", [E, R]), ae();
      var Q = E.props, ne = Mm(n, Object.assign({}, Q, Em(R), {
        ignoreAttributes: !0
      }));
      E.props = ne, se(), Q.interactiveDebounce !== ne.interactiveDebounce && (rt(), x = Sm(Xe, ne.interactiveDebounce)), Q.triggerTarget && !ne.triggerTarget ? eo(Q.triggerTarget).forEach(function(Me) {
        Me.removeAttribute("aria-expanded");
      }) : ne.triggerTarget && n.removeAttribute("aria-expanded"), gt(), He(), Z && Z(Q, ne), E.popperInstance && (ni(), ct().forEach(function(Me) {
        requestAnimationFrame(Me._tippy.popperInstance.forceUpdate);
      })), We("onAfterUpdate", [E, R]);
    }
  }
  function In(R) {
    E.setProps({
      content: R
    });
  }
  function Oo() {
    process.env.NODE_ENV !== "production" && wr(E.state.isDestroyed, Xi("show"));
    var R = E.state.isVisible, Q = E.state.isDestroyed, ne = !E.state.isEnabled, Me = Xn.isTouch && !E.props.touch, Ee = eu(E.props.duration, 0, mn.duration);
    if (!(R || Q || ne || Me) && !je().hasAttribute("disabled") && (We("onShow", [E], !1), E.props.onShow(E) !== !1)) {
      if (E.state.isVisible = !0, Te() && ($.style.visibility = "visible"), He(), D(), E.state.isMounted || ($.style.transition = "none"), Te()) {
        var xt = mt(), Jt = xt.box, ar = xt.content;
        tu([Jt, ar], 0);
      }
      g = function() {
        var lr;
        if (!(!E.state.isVisible || p)) {
          if (p = !0, $.offsetHeight, $.style.transition = E.props.moveTransition, Te() && E.props.animation) {
            var Ro = mt(), Di = Ro.box, Er = Ro.content;
            tu([Di, Er], Ee), Cm([Di, Er], "visible");
          }
          Ot(), gt(), km(ru, E), (lr = E.popperInstance) == null || lr.forceUpdate(), We("onMount", [E]), E.props.animation && Te() && G(Ee, function() {
            E.state.isShown = !0, We("onShown", [E]);
          });
        }
      }, Pt();
    }
  }
  function To() {
    process.env.NODE_ENV !== "production" && wr(E.state.isDestroyed, Xi("hide"));
    var R = !E.state.isVisible, Q = E.state.isDestroyed, ne = !E.state.isEnabled, Me = eu(E.props.duration, 1, mn.duration);
    if (!(R || Q || ne) && (We("onHide", [E], !1), E.props.onHide(E) !== !1)) {
      if (E.state.isVisible = !1, E.state.isShown = !1, p = !1, a = !1, Te() && ($.style.visibility = "hidden"), rt(), j(), He(!0), Te()) {
        var Ee = mt(), xt = Ee.box, Jt = Ee.content;
        E.props.animation && (tu([xt, Jt], Me), Cm([xt, Jt], "hidden"));
      }
      Ot(), gt(), E.props.animation ? Te() && q(Me, E.unmount) : E.unmount();
    }
  }
  function Ao(R) {
    process.env.NODE_ENV !== "production" && wr(E.state.isDestroyed, Xi("hideWithInteractivity")), lt().addEventListener("mousemove", x), km(ka, x), x(R);
  }
  function Mo() {
    process.env.NODE_ENV !== "production" && wr(E.state.isDestroyed, Xi("unmount")), E.state.isVisible && E.hide(), E.state.isMounted && (Mi(), ct().forEach(function(R) {
      R._tippy.unmount();
    }), $.parentNode && $.parentNode.removeChild($), ru = ru.filter(function(R) {
      return R !== E;
    }), E.state.isMounted = !1, We("onHidden", [E]));
  }
  function No() {
    process.env.NODE_ENV !== "production" && wr(E.state.isDestroyed, Xi("destroy")), !E.state.isDestroyed && (E.clearDelayTimeouts(), E.unmount(), ae(), delete n._tippy, E.state.isDestroyed = !0, We("onDestroy", [E]));
  }
}
function Co(n, e) {
  e === void 0 && (e = {});
  var t = mn.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (jR(n), Qy(e, t)), VR();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = PR(n);
  if (process.env.NODE_ENV !== "production") {
    var s = Ss(r.content), a = i.length > 1;
    wr(s && a, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var c = i.reduce(function(u, p) {
    var d = p && ZR(p, r);
    return d && u.push(d), u;
  }, []);
  return Ss(n) ? c[0] : c;
}
Co.defaultProps = mn;
Co.setDefaultProps = JR;
Co.currentInput = Xn;
Object.assign({}, Ly, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
Co.setDefaultProps({
  render: ev
});
var Ea = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function QR(n) {
  var e = typeof n;
  return n != null && (e == "object" || e == "function");
}
var tv = QR, eI = typeof Ea == "object" && Ea && Ea.Object === Object && Ea, tI = eI, nI = tI, rI = typeof self == "object" && self && self.Object === Object && self, iI = nI || rI || Function("return this")(), nv = iI, oI = nv, sI = function() {
  return oI.Date.now();
}, aI = sI, lI = /\s/;
function cI(n) {
  for (var e = n.length; e-- && lI.test(n.charAt(e)); )
    ;
  return e;
}
var uI = cI, fI = uI, dI = /^\s+/;
function pI(n) {
  return n && n.slice(0, fI(n) + 1).replace(dI, "");
}
var hI = pI, mI = nv, gI = mI.Symbol, rv = gI, Rm = rv, iv = Object.prototype, yI = iv.hasOwnProperty, vI = iv.toString, ts = Rm ? Rm.toStringTag : void 0;
function bI(n) {
  var e = yI.call(n, ts), t = n[ts];
  try {
    n[ts] = void 0;
    var r = !0;
  } catch {
  }
  var i = vI.call(n);
  return r && (e ? n[ts] = t : delete n[ts]), i;
}
var wI = bI, xI = Object.prototype, _I = xI.toString;
function SI(n) {
  return _I.call(n);
}
var kI = SI, Im = rv, EI = wI, CI = kI, OI = "[object Null]", TI = "[object Undefined]", Pm = Im ? Im.toStringTag : void 0;
function AI(n) {
  return n == null ? n === void 0 ? TI : OI : Pm && Pm in Object(n) ? EI(n) : CI(n);
}
var MI = AI;
function NI(n) {
  return n != null && typeof n == "object";
}
var DI = NI, RI = MI, II = DI, PI = "[object Symbol]";
function LI(n) {
  return typeof n == "symbol" || II(n) && RI(n) == PI;
}
var BI = LI, $I = hI, Lm = tv, FI = BI, Bm = 0 / 0, VI = /^[-+]0x[0-9a-f]+$/i, zI = /^0b[01]+$/i, HI = /^0o[0-7]+$/i, WI = parseInt;
function UI(n) {
  if (typeof n == "number")
    return n;
  if (FI(n))
    return Bm;
  if (Lm(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = Lm(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = $I(n);
  var t = zI.test(n);
  return t || HI.test(n) ? WI(n.slice(2), t ? 2 : 8) : VI.test(n) ? Bm : +n;
}
var jI = UI, qI = tv, iu = aI, $m = jI, KI = "Expected a function", JI = Math.max, GI = Math.min;
function YI(n, e, t) {
  var r, i, s, a, c, u, p = 0, d = !1, h = !1, g = !0;
  if (typeof n != "function")
    throw new TypeError(KI);
  e = $m(e) || 0, qI(t) && (d = !!t.leading, h = "maxWait" in t, s = h ? JI($m(t.maxWait) || 0, e) : s, g = "trailing" in t ? !!t.trailing : g);
  function y($) {
    var Z = r, K = i;
    return r = i = void 0, p = $, a = n.apply(K, Z), a;
  }
  function x($) {
    return p = $, c = setTimeout(M, e), d ? y($) : a;
  }
  function _($) {
    var Z = $ - u, K = $ - p, we = e - Z;
    return h ? GI(we, s - K) : we;
  }
  function O($) {
    var Z = $ - u, K = $ - p;
    return u === void 0 || Z >= e || Z < 0 || h && K >= s;
  }
  function M() {
    var $ = iu();
    if (O($))
      return I($);
    c = setTimeout(M, _($));
  }
  function I($) {
    return c = void 0, g && r ? y($) : (r = i = void 0, a);
  }
  function W() {
    c !== void 0 && clearTimeout(c), p = 0, r = u = i = c = void 0;
  }
  function E() {
    return c === void 0 ? a : I(iu());
  }
  function U() {
    var $ = iu(), Z = O($);
    if (r = arguments, i = this, u = $, Z) {
      if (c === void 0)
        return x(u);
      if (h)
        return clearTimeout(c), c = setTimeout(M, e), y(u);
    }
    return c === void 0 && (c = setTimeout(M, e)), a;
  }
  return U.cancel = W, U.flush = E, U;
}
var XI = YI;
class ZI {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: s = 250, shouldShow: a }) {
    this.preventHide = !1, this.shouldShow = ({ view: c, state: u, from: p, to: d }) => {
      const { doc: h, selection: g } = u, { empty: y } = g, x = !h.textBetween(p, d).length && of(u.selection), _ = this.element.contains(document.activeElement);
      return !(!(c.hasFocus() || _) || y || x || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: c }) => {
      var u;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      (c == null ? void 0 : c.relatedTarget) && ((u = this.element.parentNode) === null || u === void 0 ? void 0 : u.contains(c.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (c) => {
      this.blurHandler({ event: c });
    }, this.updateHandler = (c, u) => {
      var p, d, h;
      const { state: g, composing: y } = c, { doc: x, selection: _ } = g, O = u && u.doc.eq(x) && u.selection.eq(_);
      if (y || O)
        return;
      this.createTooltip();
      const { ranges: M } = _, I = Math.min(...M.map((U) => U.$from.pos)), W = Math.max(...M.map((U) => U.$to.pos));
      if (!((p = this.shouldShow) === null || p === void 0 ? void 0 : p.call(this, {
        editor: this.editor,
        view: c,
        state: g,
        oldState: u,
        from: I,
        to: W
      }))) {
        this.hide();
        return;
      }
      (d = this.tippy) === null || d === void 0 || d.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (VN(g.selection)) {
            const U = c.nodeDOM(I);
            if (U)
              return U.getBoundingClientRect();
          }
          return Ry(c, I, W);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = s, a && (this.shouldShow = a), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = Co(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e;
    r.selection.$from.pos !== r.selection.$to.pos ? this.updateDelay > 0 ? XI(this.updateHandler, this.updateDelay)(e, t) : this.updateHandler(e, t) : this.hide();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const ov = (n) => new sn({
  key: typeof n.pluginKey == "string" ? new sr(n.pluginKey) : n.pluginKey,
  view: (e) => new ZI({ view: e, ...n })
});
qt.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      ov({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class QI {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: a, state: c }) => {
      const { selection: u } = c, { $anchor: p, empty: d } = u, h = p.depth === 1, g = p.parent.isTextblock && !p.parent.type.spec.code && !p.parent.textContent;
      return !(!a.hasFocus() || !d || !h || !g || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: a }) => {
      var c;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      (a == null ? void 0 : a.relatedTarget) && ((c = this.element.parentNode) === null || c === void 0 ? void 0 : c.contains(a.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (a) => {
      this.blurHandler({ event: a });
    }, this.editor = e, this.element = t, this.view = r, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = Co(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    var r, i, s;
    const { state: a } = e, { doc: c, selection: u } = a, { from: p, to: d } = u;
    if (t && t.doc.eq(c) && t.selection.eq(u))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: a,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((s = this.tippyOptions) === null || s === void 0 ? void 0 : s.getReferenceClientRect) || (() => Ry(e, p, d))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const sv = (n) => new sn({
  key: typeof n.pluginKey == "string" ? new sr(n.pluginKey) : n.pluginKey,
  view: (e) => new QI({ view: e, ...n })
});
qt.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      sv({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
or({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: null,
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = _e(null);
    return Vu(() => {
      const { updateDelay: r, editor: i, pluginKey: s, shouldShow: a, tippyOptions: c } = n;
      i.registerPlugin(ov({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: s,
        shouldShow: a,
        tippyOptions: c
      }));
    }), Za(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Sr("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function Fm(n) {
  return HS((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class eP extends mD {
  constructor(e = {}) {
    return super(e), this.vueRenderers = Ya(/* @__PURE__ */ new Map()), this.contentComponent = null, this.reactiveState = Fm(this.view.state), this.reactiveExtensionStorage = Fm(this.extensionStorage), this.on("transaction", () => {
      this.reactiveState.value = this.view.state, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), zS(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  registerPlugin(e, t) {
    super.registerPlugin(e, t), this.reactiveState.value = this.view.state;
  }
  unregisterPlugin(e) {
    super.unregisterPlugin(e), this.reactiveState.value = this.view.state;
  }
}
const av = or({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = _e(), t = $u();
    return Um(() => {
      const r = n.editor;
      r && r.options.element && e.value && Wm(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = oo(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), Za(() => {
      const r = n.editor;
      if (!r || (r.isDestroyed || r.view.setProps({
        nodeViews: {}
      }), r.contentComponent = null, !r.options.element.firstChild))
        return;
      const i = document.createElement("div");
      i.append(...r.options.element.childNodes), r.setOptions({
        element: i
      });
    }), { rootEl: e };
  },
  render() {
    const n = [];
    return this.editor && this.editor.vueRenderers.forEach((e) => {
      const t = Sr(VS, {
        to: e.teleportElement,
        key: e.id
      }, Sr(e.component, {
        ref: e.id,
        ...e.props
      }));
      n.push(t);
    }), Sr("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    }, ...n);
  }
});
or({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = _e(null);
    return Vu(() => {
      const { pluginKey: r, editor: i, tippyOptions: s, shouldShow: a } = n;
      i.registerPlugin(sv({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: s,
        shouldShow: a
      }));
    }), Za(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Sr("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
or({
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return Sr(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
or({
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return Sr(this.as, {
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
const lv = (n = {}) => {
  const e = Hm();
  return Vu(() => {
    e.value = new eP(n);
  }), Za(() => {
    var t;
    (t = e.value) === null || t === void 0 || t.destroy();
  }), e;
}, tP = /^\s*>\s$/, nP = rn.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", jt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      lf({
        find: tP,
        type: this.type
      })
    ];
  }
}), rP = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/, iP = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g, oP = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/, sP = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g, aP = Xr.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", jt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      vo({
        find: rP,
        type: this.type
      }),
      vo({
        find: oP,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      bo({
        find: iP,
        type: this.type
      }),
      bo({
        find: sP,
        type: this.type
      })
    ];
  }
}), lP = /^\s*([-+*])\s$/, cP = rn.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", jt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n }) => n.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    return [
      lf({
        find: lP,
        type: this.type
      })
    ];
  }
}), uP = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/, fP = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g, dP = Xr.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", jt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      vo({
        find: uP,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      bo({
        find: fP,
        type: this.type
      })
    ];
  }
}), pP = /^```([a-z]+)?[\s\n]$/, hP = /^~~~([a-z]+)?[\s\n]$/, mP = rn.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, s = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((a) => a.startsWith(t)).map((a) => a.replace(t, ""))[0];
          return s || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      jt(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const s = r.parentOffset === r.parent.nodeSize - 2, a = r.parent.textContent.endsWith(`

`);
        return !s || !a ? !1 : n.chain().command(({ tr: c }) => (c.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: s } = t;
        if (!s || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const c = i.after();
        return c === void 0 || r.nodeAt(c) ? !1 : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Nu({
        find: pP,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Nu({
        find: hP,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      new sn({
        key: new sr("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, s = i == null ? void 0 : i.mode;
            if (!t || !s)
              return !1;
            const { tr: a } = n.state;
            return a.replaceSelectionWith(this.type.create({ language: s })), a.setSelection(be.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))), a.insertText(t.replace(/\r\n?/g, `
`)), a.setMeta("paste", !0), n.dispatch(a), !0;
          }
        }
      })
    ];
  }
}), gP = rn.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function yP(n = {}) {
  return new sn({
    view(e) {
      return new vP(e, n);
    }
  });
}
class vP {
  constructor(e, t) {
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = t.width || 1, this.color = t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((r) => {
      let i = (s) => {
        this[r](s);
      };
      return e.dom.addEventListener(r, i), { name: r, handler: i };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t;
    if (!e.parent.inlineContent) {
      let a = e.nodeBefore, c = e.nodeAfter;
      if (a || c) {
        let u = this.editorView.nodeDOM(this.cursorPos - (a ? a.nodeSize : 0)).getBoundingClientRect(), p = a ? u.bottom : u.top;
        a && c && (p = (p + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), t = { left: u.left, right: u.right, top: p - this.width / 2, bottom: p + this.width / 2 };
      }
    }
    if (!t) {
      let a = this.editorView.coordsAtPos(this.cursorPos);
      t = { left: a.left - this.width / 2, right: a.left + this.width / 2, top: a.top, bottom: a.bottom };
    }
    let r = this.editorView.dom.offsetParent;
    this.element || (this.element = r.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none; background-color: " + this.color);
    let i, s;
    if (!r || r == document.body && getComputedStyle(r).position == "static")
      i = -pageXOffset, s = -pageYOffset;
    else {
      let a = r.getBoundingClientRect();
      i = a.left - r.scrollLeft, s = a.top - r.scrollTop;
    }
    this.element.style.left = t.left - i + "px", this.element.style.top = t.top - s + "px", this.element.style.width = t.right - t.left + "px", this.element.style.height = t.bottom - t.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, s = typeof i == "function" ? i(this.editorView, t) : i;
    if (t && !s) {
      let a = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice && (a = Ig(this.editorView.state.doc, a, this.editorView.dragging.slice), a == null))
        return this.setCursor(null);
      this.setCursor(a), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const bP = qt.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      yP(this.options)
    ];
  }
});
class ot extends ge {
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return ot.valid(r) ? new ot(r) : ge.near(r);
  }
  content() {
    return Y.empty;
  }
  eq(e) {
    return e instanceof ot && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new ot(e.resolve(t.pos));
  }
  getBookmark() {
    return new gf(this.anchor);
  }
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !wP(e) || !xP(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  static findGapCursorFrom(e, t, r = !1) {
    e:
      for (; ; ) {
        if (!r && ot.valid(e))
          return e;
        let i = e.pos, s = null;
        for (let a = e.depth; ; a--) {
          let c = e.node(a);
          if (t > 0 ? e.indexAfter(a) < c.childCount : e.index(a) > 0) {
            s = c.child(t > 0 ? e.indexAfter(a) : e.index(a) - 1);
            break;
          } else if (a == 0)
            return null;
          i += t;
          let u = e.doc.resolve(i);
          if (ot.valid(u))
            return u;
        }
        for (; ; ) {
          let a = t > 0 ? s.firstChild : s.lastChild;
          if (!a) {
            if (s.isAtom && !s.isText && !le.isSelectable(s)) {
              e = e.doc.resolve(i + s.nodeSize * t), r = !1;
              continue e;
            }
            break;
          }
          s = a, i += t;
          let c = e.doc.resolve(i);
          if (ot.valid(c))
            return c;
        }
        return null;
      }
  }
}
ot.prototype.visible = !1;
ot.findFrom = ot.findGapCursorFrom;
ge.jsonID("gapcursor", ot);
class gf {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new gf(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return ot.valid(t) ? new ot(t) : ge.near(t);
  }
}
function wP(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function xP(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function _P() {
  return new sn({
    props: {
      decorations: CP,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && ot.valid(t) ? new ot(t) : null;
      },
      handleClick: kP,
      handleKeyDown: SP,
      handleDOMEvents: { beforeinput: EP }
    }
  });
}
const SP = vy({
  ArrowLeft: Ca("horiz", -1),
  ArrowRight: Ca("horiz", 1),
  ArrowUp: Ca("vert", -1),
  ArrowDown: Ca("vert", 1)
});
function Ca(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, s) {
    let a = r.selection, c = e > 0 ? a.$to : a.$from, u = a.empty;
    if (a instanceof be) {
      if (!s.endOfTextblock(t) || c.depth == 0)
        return !1;
      u = !1, c = r.doc.resolve(e > 0 ? c.after() : c.before());
    }
    let p = ot.findGapCursorFrom(c, e, u);
    return p ? (i && i(r.tr.setSelection(new ot(p))), !0) : !1;
  };
}
function kP(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!ot.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && le.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new ot(r))), !0);
}
function EP(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof ot))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = z.empty;
  for (let a = r.length - 1; a >= 0; a--)
    i = z.from(r[a].createAndFill(null, i));
  let s = n.state.tr.replace(t.pos, t.pos, new Y(i, 0, 0));
  return s.setSelection(be.near(s.doc.resolve(t.pos + 1))), n.dispatch(s), !1;
}
function CP(n) {
  if (!(n.selection instanceof ot))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", dt.create(n.doc, [An.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const OP = qt.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      _P()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = me(ee(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), TP = rn.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", jt(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: s } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: a } = this.options, { splittableMarks: c } = r.extensionManager, u = s || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: p, dispatch: d }) => {
            if (d && u && a) {
              const h = u.filter((g) => c.includes(g.type.name));
              p.ensureMarks(h);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), AP = rn.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, jt(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => Nu({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var Ja = 200, Ct = function() {
};
Ct.prototype.append = function(e) {
  return e.length ? (e = Ct.from(e), !this.length && e || e.length < Ja && this.leafAppend(e) || this.length < Ja && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Ct.prototype.prepend = function(e) {
  return e.length ? Ct.from(e).append(this) : this;
};
Ct.prototype.appendInner = function(e) {
  return new MP(this, e);
};
Ct.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Ct.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
Ct.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Ct.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
Ct.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, a) {
    return i.push(e(s, a));
  }, t, r), i;
};
Ct.from = function(e) {
  return e instanceof Ct ? e : e && e.length ? new cv(e) : Ct.empty;
};
var cv = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, a, c) {
    for (var u = s; u < a; u++)
      if (i(this.values[u], c + u) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, a, c) {
    for (var u = s - 1; u >= a; u--)
      if (i(this.values[u], c + u) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Ja)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Ja)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(Ct);
Ct.empty = new cv([]);
var MP = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, a) {
    var c = this.left.length;
    if (i < c && this.left.forEachInner(r, i, Math.min(s, c), a) === !1 || s > c && this.right.forEachInner(r, Math.max(i - c, 0), Math.min(this.length, s) - c, a + c) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, a) {
    var c = this.left.length;
    if (i > c && this.right.forEachInvertedInner(r, i - c, Math.max(s, c) - c, a + c) === !1 || s < c && this.left.forEachInvertedInner(r, Math.min(i, c), s, a) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(Ct), uv = Ct;
const NP = 500;
class Fn {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    t && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let a = e.tr, c, u, p = [], d = [];
    return this.items.forEach((h, g) => {
      if (!h.step) {
        i || (i = this.remapping(r, g + 1), s = i.maps.length), s--, d.push(h);
        return;
      }
      if (i) {
        d.push(new Yn(h.map));
        let y = h.step.map(i.slice(s)), x;
        y && a.maybeStep(y).doc && (x = a.mapping.maps[a.mapping.maps.length - 1], p.push(new Yn(x, void 0, void 0, p.length + d.length))), s--, x && i.appendMap(x, s);
      } else
        a.maybeStep(h.step);
      if (h.selection)
        return c = i ? h.selection.map(i.slice(s)) : h.selection, u = new Fn(this.items.slice(0, r).append(d.reverse().concat(p)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: u, transform: a, selection: c };
  }
  addTransform(e, t, r, i) {
    let s = [], a = this.eventCount, c = this.items, u = !i && c.length ? c.get(c.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let h = e.steps[d].invert(e.docs[d]), g = new Yn(e.mapping.maps[d], h, t), y;
      (y = u && u.merge(g)) && (g = y, d ? s.pop() : c = c.slice(0, c.length - 1)), s.push(g), t && (a++, t = void 0), i || (u = g);
    }
    let p = a - r.depth;
    return p > RP && (c = DP(c, p), a -= p), new Fn(c.append(s), a);
  }
  remapping(e, t) {
    let r = new so();
    return this.items.forEach((i, s) => {
      let a = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, a);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Fn(this.items.append(e.map((t) => new Yn(t))), this.eventCount);
  }
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), s = e.mapping, a = e.steps.length, c = this.eventCount;
    this.items.forEach((g) => {
      g.selection && c--;
    }, i);
    let u = t;
    this.items.forEach((g) => {
      let y = s.getMirror(--u);
      if (y == null)
        return;
      a = Math.min(a, y);
      let x = s.maps[y];
      if (g.step) {
        let _ = e.steps[y].invert(e.docs[y]), O = g.selection && g.selection.map(s.slice(u + 1, y));
        O && c++, r.push(new Yn(x, _, O));
      } else
        r.push(new Yn(x));
    }, i);
    let p = [];
    for (let g = t; g < a; g++)
      p.push(new Yn(s.maps[g]));
    let d = this.items.slice(0, i).append(p).append(r), h = new Fn(d, c);
    return h.emptyItemCount() > NP && (h = h.compress(this.items.length - r.length)), h;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], s = 0;
    return this.items.forEach((a, c) => {
      if (c >= e)
        i.push(a), a.selection && s++;
      else if (a.step) {
        let u = a.step.map(t.slice(r)), p = u && u.getMap();
        if (r--, p && t.appendMap(p, r), u) {
          let d = a.selection && a.selection.map(t.slice(r));
          d && s++;
          let h = new Yn(p.invert(), u, d), g, y = i.length - 1;
          (g = i.length && i[y].merge(h)) ? i[y] = g : i.push(h);
        }
      } else
        a.map && r--;
    }, this.items.length, 0), new Fn(uv.from(i.reverse()), s);
  }
}
Fn.empty = new Fn(uv.empty, 0);
function DP(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class Yn {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new Yn(t.getMap().invert(), t, this.selection);
    }
  }
}
class Vr {
  constructor(e, t, r, i) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i;
  }
}
const RP = 20;
function IP(n, e, t, r) {
  let i = t.getMeta(Kr), s;
  if (i)
    return i.historyState;
  t.getMeta(LP) && (n = new Vr(n.done, n.undone, null, 0));
  let a = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (a && a.getMeta(Kr))
    return a.getMeta(Kr).redo ? new Vr(n.done.addTransform(t, void 0, r, Ma(e)), n.undone, Vm(t.mapping.maps[t.steps.length - 1]), n.prevTime) : new Vr(n.done, n.undone.addTransform(t, void 0, r, Ma(e)), null, n.prevTime);
  if (t.getMeta("addToHistory") !== !1 && !(a && a.getMeta("addToHistory") === !1)) {
    let c = n.prevTime == 0 || !a && (n.prevTime < (t.time || 0) - r.newGroupDelay || !PP(t, n.prevRanges)), u = a ? ou(n.prevRanges, t.mapping) : Vm(t.mapping.maps[t.steps.length - 1]);
    return new Vr(n.done.addTransform(t, c ? e.selection.getBookmark() : void 0, r, Ma(e)), Fn.empty, u, t.time);
  } else
    return (s = t.getMeta("rebased")) ? new Vr(n.done.rebased(t, s), n.undone.rebased(t, s), ou(n.prevRanges, t.mapping), n.prevTime) : new Vr(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), ou(n.prevRanges, t.mapping), n.prevTime);
}
function PP(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function Vm(n) {
  let e = [];
  return n.forEach((t, r, i, s) => e.push(i, s)), e;
}
function ou(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), s = e.map(n[r + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function fv(n, e, t, r) {
  let i = Ma(e), s = Kr.get(e).spec.config, a = (r ? n.undone : n.done).popEvent(e, i);
  if (!a)
    return;
  let c = a.selection.resolve(a.transform.doc), u = (r ? n.done : n.undone).addTransform(a.transform, e.selection.getBookmark(), s, i), p = new Vr(r ? u : a.remaining, r ? a.remaining : u, null, 0);
  t(a.transform.setSelection(c).setMeta(Kr, { redo: r, historyState: p }).scrollIntoView());
}
let su = !1, zm = null;
function Ma(n) {
  let e = n.plugins;
  if (zm != e) {
    su = !1, zm = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        su = !0;
        break;
      }
  }
  return su;
}
const Kr = new sr("history"), LP = new sr("closeHistory");
function BP(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new sn({
    key: Kr,
    state: {
      init() {
        return new Vr(Fn.empty, Fn.empty, null, 0);
      },
      apply(e, t, r) {
        return IP(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? dv : r == "historyRedo" ? pv : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
const dv = (n, e) => {
  let t = Kr.getState(n);
  return !t || t.done.eventCount == 0 ? !1 : (e && fv(t, n, e, !1), !0);
}, pv = (n, e) => {
  let t = Kr.getState(n);
  return !t || t.undone.eventCount == 0 ? !1 : (e && fv(t, n, e, !0), !0);
}, $P = qt.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => dv(n, e),
      redo: () => ({ state: n, dispatch: e }) => pv(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      BP(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-\u044F": () => this.editor.commands.undo(),
      "Shift-Mod-\u044F": () => this.editor.commands.redo()
    };
  }
}), FP = rn.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [
      { tag: "hr" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", jt(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n }) => n().insertContent({ type: this.name }).command(({ tr: e, dispatch: t }) => {
        var r;
        if (t) {
          const { $to: i } = e.selection, s = i.end();
          if (i.nodeAfter)
            e.setSelection(be.create(e.doc, i.pos));
          else {
            const a = (r = i.parent.type.contentMatch.defaultType) === null || r === void 0 ? void 0 : r.create();
            a && (e.insert(s, a), e.setSelection(be.create(e.doc, s)));
          }
          e.scrollIntoView();
        }
        return !0;
      }).run()
    };
  },
  addInputRules() {
    return [
      gD({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), VP = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/, zP = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g, HP = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/, WP = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g, UP = Xr.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", jt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      vo({
        find: VP,
        type: this.type
      }),
      vo({
        find: HP,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      bo({
        find: zP,
        type: this.type
      }),
      bo({
        find: WP,
        type: this.type
      })
    ];
  }
}), jP = rn.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", jt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), qP = /^(\d+)\.\s$/, KP = rn.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", jt(this.options.HTMLAttributes, t), 0] : ["ol", jt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n }) => n.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    return [
      lf({
        find: qP,
        type: this.type,
        getAttributes: (n) => ({ start: +n[1] }),
        joinPredicate: (n, e) => e.childCount + e.attrs.start === +n[1]
      })
    ];
  }
}), JP = rn.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", jt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), GP = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/, YP = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g, XP = Xr.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", jt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-x": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      vo({
        find: GP,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      bo({
        find: YP,
        type: this.type
      })
    ];
  }
}), ZP = rn.create({
  name: "text",
  group: "inline"
}), Ga = qt.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, s, a, c, u, p, d, h, g, y, x, _, O, M;
    const I = [];
    return this.options.blockquote !== !1 && I.push(nP.configure((n = this.options) === null || n === void 0 ? void 0 : n.blockquote)), this.options.bold !== !1 && I.push(aP.configure((e = this.options) === null || e === void 0 ? void 0 : e.bold)), this.options.bulletList !== !1 && I.push(cP.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && I.push(dP.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && I.push(mP.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && I.push(gP.configure((s = this.options) === null || s === void 0 ? void 0 : s.document)), this.options.dropcursor !== !1 && I.push(bP.configure((a = this.options) === null || a === void 0 ? void 0 : a.dropcursor)), this.options.gapcursor !== !1 && I.push(OP.configure((c = this.options) === null || c === void 0 ? void 0 : c.gapcursor)), this.options.hardBreak !== !1 && I.push(TP.configure((u = this.options) === null || u === void 0 ? void 0 : u.hardBreak)), this.options.heading !== !1 && I.push(AP.configure((p = this.options) === null || p === void 0 ? void 0 : p.heading)), this.options.history !== !1 && I.push($P.configure((d = this.options) === null || d === void 0 ? void 0 : d.history)), this.options.horizontalRule !== !1 && I.push(FP.configure((h = this.options) === null || h === void 0 ? void 0 : h.horizontalRule)), this.options.italic !== !1 && I.push(UP.configure((g = this.options) === null || g === void 0 ? void 0 : g.italic)), this.options.listItem !== !1 && I.push(jP.configure((y = this.options) === null || y === void 0 ? void 0 : y.listItem)), this.options.orderedList !== !1 && I.push(KP.configure((x = this.options) === null || x === void 0 ? void 0 : x.orderedList)), this.options.paragraph !== !1 && I.push(JP.configure((_ = this.options) === null || _ === void 0 ? void 0 : _.paragraph)), this.options.strike !== !1 && I.push(XP.configure((O = this.options) === null || O === void 0 ? void 0 : O.strike)), this.options.text !== !1 && I.push(ZP.configure((M = this.options) === null || M === void 0 ? void 0 : M.text)), I;
  }
}), QP = {
  name: "LaravelCmsAdminPageAddComponentForm",
  props: ["templateSections", "globalComponents"],
  components: { EditorContent: av, StarterKit: Ga },
  setup(n, { emit: e }) {
    const t = {
      type: null,
      html: null,
      view: null,
      name: null
    }, r = Ya({ ...t }), i = _e([]), s = lv({
      content: r.html,
      extensions: [Ga],
      onUpdate: ({ editor: d }) => {
        r.html = d.getHTML();
      }
    });
    async function a() {
      const h = await (await fetch("/api/cms-views")).json();
      i.value = h.data;
    }
    async function c() {
      !this.valid || (e("add", Object.assign({}, r)), Object.assign(r, t));
    }
    Xa(
      () => r.type,
      (d, h) => {
        r.html = null, r.view = null;
      }
    );
    const u = Ne(() => zt.exports.sortBy(n.globalComponents || [], (d) => d.name));
    a();
    const p = Ne(() => {
      if (!r.type)
        return !1;
      if (r.type == "new-text") {
        if (!r.html || !r.name)
          return !1;
      } else if (r.type == "new-view" && (!r.view || !r.name))
        return !1;
      return !0;
    });
    return { component: r, componentsSorted: u, views: i, valid: p, onSubmit: c, editor: s };
  }
}, eL = /* @__PURE__ */ k("legend", null, "Add Item to Page", -1), tL = { class: "form-group mx-2" }, nL = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "type"
}, "Select Component", -1), rL = /* @__PURE__ */ k("option", { value: "" }, "Select Type", -1), iL = /* @__PURE__ */ k("option", { value: "" }, "-- New Component --", -1), oL = /* @__PURE__ */ k("option", { value: "new-text" }, "HTML/Markdown", -1), sL = /* @__PURE__ */ k("option", { value: "new-view" }, "Laravel View", -1), aL = /* @__PURE__ */ k("option", { value: "" }, "-- Existing Component --", -1), lL = ["value"], cL = { class: "form-group mx-2" }, uL = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), fL = {
  key: 0,
  class: "form-group mx-2"
}, dL = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "html"
}, "Body", -1), pL = {
  key: 1,
  class: "form-group mx-2"
}, hL = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "view"
}, "Laravel View", -1), mL = /* @__PURE__ */ k("option", { value: "" }, "Select", -1), gL = ["value"], yL = { class: "form-group mx-2" }, vL = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "cms_template_section_id"
}, "Template Section", -1), bL = /* @__PURE__ */ k("option", { value: "" }, "Select", -1), wL = ["value"], xL = /* @__PURE__ */ k("button", {
  class: "btn mx-2",
  style: { float: "right" },
  disabled: 1
}, " Cancel ", -1), _L = ["disabled"];
function SL(n, e, t, r, i, s) {
  var c;
  const a = ve("editor-content");
  return F(), H("form", {
    onSubmit: e[4] || (e[4] = tt((...u) => r.onSubmit && r.onSubmit(...u), ["prevent"]))
  }, [
    k("fieldset", null, [
      eL,
      k("div", tL, [
        nL,
        Ie(k("select", {
          class: "form-select",
          name: "type",
          id: "type",
          "onUpdate:modelValue": e[0] || (e[0] = (u) => r.component.type = u)
        }, [
          rL,
          iL,
          oL,
          sL,
          (c = r.componentsSorted) != null && c.length ? (F(), H(Re, { key: 0 }, [
            aL,
            (F(!0), H(Re, null, vt(r.componentsSorted, (u) => (F(), H("option", {
              key: u.id,
              value: u.id
            }, Ue(u.name), 9, lL))), 128))
          ], 64)) : Vt("", !0)
        ], 512), [
          [vi, r.component.type]
        ])
      ]),
      k("div", cL, [
        uL,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[1] || (e[1] = (u) => r.component.name = u)
        }, null, 512), [
          [nt, r.component.name]
        ])
      ]),
      r.component.type == "new-text" || r.component.type == "new-view" ? (F(), H(Re, { key: 0 }, [
        r.component.type == "new-text" ? (F(), H("div", fL, [
          dL,
          Ke(a, { editor: r.editor }, null, 8, ["editor"])
        ])) : Vt("", !0),
        r.component.type == "new-view" ? (F(), H("div", pL, [
          hL,
          Ie(k("select", {
            class: "form-select",
            name: "view",
            id: "view",
            "onUpdate:modelValue": e[2] || (e[2] = (u) => r.component.view = u)
          }, [
            mL,
            (F(!0), H(Re, null, vt(r.views, (u) => (F(), H("option", {
              key: u,
              value: u
            }, Ue(u), 9, gL))), 128))
          ], 512), [
            [vi, r.component.view]
          ])
        ])) : Vt("", !0)
      ], 64)) : Vt("", !0),
      k("div", yL, [
        vL,
        Ie(k("select", {
          class: "form-select",
          name: "cms_template_section_id",
          id: "cms_template_section_id",
          "onUpdate:modelValue": e[3] || (e[3] = (u) => r.component.cms_template_section_id = u)
        }, [
          bL,
          (F(!0), H(Re, null, vt(t.templateSections, (u) => (F(), H("option", {
            key: u.id,
            value: u.id
          }, Ue(u.name), 9, wL))), 128))
        ], 512), [
          [vi, r.component.cms_template_section_id]
        ])
      ]),
      xL,
      k("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Component ", 8, _L)
    ])
  ], 32);
}
const kL = /* @__PURE__ */ Ae(QP, [["render", SL]]), EL = {
  name: "LaravelCmsAdminPageEditComponentForm",
  props: ["templateSections", "component"],
  components: { EditorContent: av, StarterKit: Ga },
  setup(n, { emit: e }) {
    const t = _e([]), r = lv({
      content: n.component.html,
      extensions: [Ga],
      onUpdate: ({ editor: u }) => {
        n.component.html = u.getHTML();
      }
    });
    async function i() {
      const p = await (await fetch("/api/cms-views")).json();
      t.value = p.data;
    }
    async function s() {
      !this.valid || e("update", n.component);
    }
    const a = Ne(() => zt.exports.sortBy(n.globalComponents || [], (u) => u.name));
    i();
    const c = Ne(() => !0);
    return { componentsSorted: a, views: t, valid: c, onSubmit: s, editor: r };
  }
}, CL = /* @__PURE__ */ k("legend", null, "Edit Component", -1), OL = { class: "form-group mx-2" }, TL = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), AL = {
  key: 0,
  class: "form-group mx-2"
}, ML = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "view"
}, "Laravel View", -1), NL = /* @__PURE__ */ k("option", { value: "" }, "Select", -1), DL = ["value"], RL = {
  key: 1,
  class: "form-group mx-2"
}, IL = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "html"
}, "Body", -1), PL = { class: "form-group mx-2" }, LL = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "cms_template_section_id"
}, "Template Section", -1), BL = /* @__PURE__ */ k("option", { value: "" }, "Select", -1), $L = ["value"], FL = /* @__PURE__ */ k("button", {
  class: "btn mx-2",
  style: { float: "right" },
  disabled: 1
}, " Cancel ", -1), VL = ["disabled"];
function zL(n, e, t, r, i, s) {
  const a = ve("editor-content");
  return F(), H("form", {
    onSubmit: e[3] || (e[3] = tt((...c) => r.onSubmit && r.onSubmit(...c), ["prevent"]))
  }, [
    k("fieldset", null, [
      CL,
      k("div", OL, [
        TL,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (c) => t.component.name = c)
        }, null, 512), [
          [nt, t.component.name]
        ])
      ]),
      t.component.view ? (F(), H("div", AL, [
        ML,
        Ie(k("select", {
          class: "form-select",
          name: "view",
          id: "view",
          "onUpdate:modelValue": e[1] || (e[1] = (c) => t.component.view = c)
        }, [
          NL,
          (F(!0), H(Re, null, vt(r.views, (c) => (F(), H("option", {
            key: c,
            value: c
          }, Ue(c), 9, DL))), 128))
        ], 512), [
          [vi, t.component.view]
        ])
      ])) : (F(), H("div", RL, [
        IL,
        Ke(a, { editor: r.editor }, null, 8, ["editor"])
      ])),
      k("div", PL, [
        LL,
        Ie(k("select", {
          class: "form-select",
          name: "cms_template_section_id",
          id: "cms_template_section_id",
          "onUpdate:modelValue": e[2] || (e[2] = (c) => t.component.cms_template_section_id = c)
        }, [
          BL,
          (F(!0), H(Re, null, vt(t.templateSections, (c) => (F(), H("option", {
            key: c.id,
            value: c.id
          }, Ue(c.name), 9, $L))), 128))
        ], 512), [
          [vi, t.component.cms_template_section_id]
        ])
      ]),
      FL,
      k("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Update Component ", 8, VL)
    ])
  ], 32);
}
const HL = /* @__PURE__ */ Ae(EL, [["render", zL]]), WL = {
  name: "LaravelCmsAdminPageContent",
  props: ["page"],
  components: {
    UnsortedComponents: RO,
    TemplateSections: FO,
    ComponentAddForm: kL,
    ComponentEditForm: HL
  },
  setup(n, { emit: e }) {
    const t = _e(n.page.components), r = _e([]), i = _e(null);
    async function s(h) {
      if (!isNaN(h.type)) {
        const x = await fetch("/api/cms-component-page", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            cms_page_id: n.page.id,
            cms_component_id: h.type,
            cms_template_section_id: h.cms_template_section_id
          })
        }), _ = await x.json();
        if (!x.ok) {
          de({
            title: _.message,
            type: "error"
          });
          return;
        }
        t.value.push(
          Object.assign(h, _.data.component)
        ), de({
          title: "New component added.",
          type: "success"
        });
        return;
      }
      h.cms_page_id = n.page.id, h.is_global = !1;
      const g = await fetch("/api/cms-components", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(h)
      }), y = await g.json();
      if (!g.ok) {
        de({
          title: y.message,
          type: "error"
        });
        return;
      }
      t.value.push(Object.assign(h, y.data)), de({
        title: "New component added.",
        type: "success"
      });
    }
    async function a() {
      let h = "/api/cms-components?" + new URLSearchParams({
        "q[]": ["is_global[eq]=TRUE"]
      }).toString();
      const y = await (await fetch(h)).json();
      r.value = y.data;
    }
    async function c(h) {
      const g = await fetch("/api/cms-component-page", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE",
        body: JSON.stringify({
          cms_page_id: n.page.id,
          cms_component_id: h.id
        })
      }), y = await g.json();
      if (!g.ok) {
        de({
          title: y.message,
          type: "error"
        });
        return;
      }
      t.value.splice(
        t.value.map((x) => x.id).indexOf(h.id),
        1
      ), de({
        title: "Component removed.",
        type: "success"
      });
    }
    async function u(h) {
      h.cms_page_id = n.page.id;
      const g = await fetch(
        "/api/cms-components/" + h.id,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: JSON.stringify(h)
        }
      ), y = await g.json();
      if (!g.ok) {
        de({
          title: y.message,
          type: "error"
        });
        return;
      }
      t.value.splice(
        t.value.map((x) => x.id).indexOf(h.id),
        1,
        Object.assign(h, y.data)
      ), de({
        title: "Component update.",
        type: "success"
      });
    }
    const p = Ne(() => {
      var x;
      const g = (((x = n.page.template) == null ? void 0 : x.template_sections) || []).map(function(_) {
        return _.id;
      }), y = zt.exports.filter(t.value, (_) => !_.cms_template_section_id || g.indexOf(
        _.cms_template_section_id
      ) == -1);
      return zt.exports.sortBy(y, "sort_order");
    });
    function d(h) {
      i.value = h;
    }
    return Promise.all([a()]), {
      selectedComponent: i,
      deleteComponent: c,
      pageComponents: t,
      globalComponents: r,
      unsortedComponents: p,
      selectComponent: d,
      onAddComponent: s,
      onUpdateComponent: u
    };
  }
}, UL = { class: "container" }, jL = { class: "columns" }, qL = { class: "column col-6" }, KL = { class: "column col-6" };
function JL(n, e, t, r, i, s) {
  var d, h, g, y, x, _, O, M, I, W, E;
  const a = ve("unsorted-components"), c = ve("template-sections"), u = ve("component-edit-form"), p = ve("component-add-form");
  return F(), H("div", UL, [
    k("div", jL, [
      k("div", qL, [
        r.unsortedComponents.length > 0 ? (F(), ht(a, {
          key: 0,
          "template-sections": (h = (d = t.page) == null ? void 0 : d.template) == null ? void 0 : h.template_sections,
          components: r.unsortedComponents,
          onSelect: r.selectComponent,
          onDelete: r.deleteComponent
        }, null, 8, ["template-sections", "components", "onSelect", "onDelete"])) : Vt("", !0),
        Ke(c, {
          "template-sections": (y = (g = t.page) == null ? void 0 : g.template) == null ? void 0 : y.template_sections,
          components: (x = t.page) == null ? void 0 : x.components,
          onSelect: r.selectComponent,
          onDelete: r.deleteComponent
        }, null, 8, ["template-sections", "components", "onSelect", "onDelete"])
      ]),
      k("div", KL, [
        r.selectedComponent ? (F(), ht(u, {
          key: 0,
          component: r.selectedComponent,
          "template-sections": (O = (_ = t.page) == null ? void 0 : _.template) == null ? void 0 : O.template_sections,
          onUpdate: r.onUpdateComponent
        }, {
          default: Rt(() => [
            Ft("EDIT")
          ]),
          _: 1
        }, 8, ["component", "template-sections", "onUpdate"])) : (F(), H(Re, { key: 1 }, [
          (I = (M = t.page) == null ? void 0 : M.template) != null && I.template_sections ? (F(), ht(p, {
            key: 0,
            "template-sections": (E = (W = t.page) == null ? void 0 : W.template) == null ? void 0 : E.template_sections,
            "global-components": r.globalComponents,
            onAdd: r.onAddComponent
          }, null, 8, ["template-sections", "global-components", "onAdd"])) : Vt("", !0)
        ], 64))
      ])
    ])
  ]);
}
const GL = /* @__PURE__ */ Ae(WL, [["render", JL]]), YL = {
  name: "LaravelCmsAdminPagePreview",
  props: ["page"],
  components: {},
  setup(n, { emit: e }) {
    const t = _e(null);
    async function r() {
      const s = await (await fetch("/api/cms-render/" + n.page.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST"
      })).json();
      t.value = s.data;
    }
    return r(), { page: t };
  }
};
function XL(n, e, t, r, i, s) {
  return Ue(r.page);
}
const ZL = /* @__PURE__ */ Ae(YL, [["render", XL]]), QL = {
  name: "LaravelCmsAdminPageMainForm",
  props: ["page", "templates"],
  components: {},
  setup(n, { emit: e }) {
    return {};
  }
}, e2 = { class: "form-group" }, t2 = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), n2 = { class: "form-group" }, r2 = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), i2 = {
  key: 0,
  class: "form-group"
}, o2 = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "template"
}, "Template", -1), s2 = ["value"];
function a2(n, e, t, r, i, s) {
  var a;
  return F(), H("fieldset", null, [
    k("div", e2, [
      t2,
      Ie(k("input", {
        class: "form-input",
        type: "text",
        name: "name",
        id: "name",
        "onUpdate:modelValue": e[0] || (e[0] = (c) => t.page.name = c)
      }, null, 512), [
        [nt, t.page.name]
      ])
    ]),
    k("div", n2, [
      r2,
      Ie(k("input", {
        class: "form-input",
        type: "text",
        name: "path",
        id: "path",
        "onUpdate:modelValue": e[1] || (e[1] = (c) => t.page.path = c)
      }, null, 512), [
        [nt, t.page.path]
      ])
    ]),
    (a = t.templates) != null && a.length ? (F(), H("div", i2, [
      o2,
      Ie(k("select", {
        class: "form-select",
        name: "template",
        id: "template",
        "onUpdate:modelValue": e[2] || (e[2] = (c) => t.page.cms_template_id = c)
      }, [
        (F(!0), H(Re, null, vt(t.templates, (c) => (F(), H("option", {
          key: c.id,
          value: c.id
        }, Ue(c.name), 9, s2))), 128))
      ], 512), [
        [
          vi,
          t.page.cms_template_id,
          void 0,
          { number: !0 }
        ]
      ])
    ])) : Vt("", !0)
  ]);
}
const l2 = /* @__PURE__ */ Ae(QL, [["render", a2]]), c2 = {
  name: "LaravelCmsAdminPageSeoForm",
  props: ["page"],
  components: {},
  setup(n, { emit: e }) {
    return {};
  }
}, u2 = { class: "form-group" }, f2 = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "title"
}, "Title", -1), d2 = { class: "form-group" }, p2 = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "keywords"
}, "Meta Keywords", -1), h2 = { class: "form-group" }, m2 = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "keywords"
}, "Meta Description", -1);
function g2(n, e, t, r, i, s) {
  return F(), H("fieldset", null, [
    k("div", u2, [
      f2,
      Ie(k("input", {
        class: "form-input",
        type: "text",
        name: "title",
        id: "title",
        "onUpdate:modelValue": e[0] || (e[0] = (a) => t.page.title = a)
      }, null, 512), [
        [nt, t.page.title]
      ])
    ]),
    k("div", d2, [
      p2,
      Ie(k("input", {
        class: "form-input",
        type: "text",
        name: "meta_keywords",
        id: "meta_keywords",
        "onUpdate:modelValue": e[1] || (e[1] = (a) => t.page.meta_keywords = a)
      }, null, 512), [
        [nt, t.page.meta_keywords]
      ])
    ]),
    k("div", h2, [
      m2,
      Ie(k("textarea", {
        class: "form-input",
        name: "meta_description",
        id: "meta_description",
        "onUpdate:modelValue": e[2] || (e[2] = (a) => t.page.meta_description = a)
      }, null, 512), [
        [nt, t.page.meta_description]
      ])
    ])
  ]);
}
const y2 = /* @__PURE__ */ Ae(c2, [["render", g2]]), v2 = {
  name: "LaravelCmsAdminPage",
  components: {
    PageContent: GL,
    PagePaths: wO,
    PagePreview: ZL,
    MainForm: l2,
    SeoForm: y2
  },
  props: ["id"],
  setup(n) {
    const e = _e(null), t = _e(null), r = _e(null), i = _e([]);
    async function s() {
      const d = await (await fetch("/api/cms-pages/" + n.id)).json();
      e.value = d.data, r.value = Object.assign({}, e.value);
    }
    async function a() {
      const d = await (await fetch("/api/cms-templates")).json();
      i.value = d.data;
    }
    async function c() {
      const p = await fetch("/api/cms-pages/" + n.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(e.value)
      }), d = await p.json();
      if (!p.ok) {
        de({
          title: d.message,
          type: "error"
        });
        return;
      }
      e.value = d.data, r.value = Object.assign({}, e.value), de({
        title: "Page updated.",
        type: "success"
      });
    }
    Promise.all([s(), a()]);
    const u = Ne(() => JSON.stringify(r.value) != JSON.stringify(e.value));
    return {
      tab: t,
      page: e,
      templates: i,
      saveEnabled: u,
      onSubmit: c
    };
  }
}, b2 = {
  class: "tab",
  style: { "margin-bottom": "1rem" }
}, w2 = {
  key: 0,
  class: "container"
}, x2 = { class: "columns" }, _2 = { class: "column col-6" }, S2 = ["disabled"];
function k2(n, e, t, r, i, s) {
  const a = ve("router-link"), c = ve("main-form"), u = ve("seo-form"), p = ve("page-paths"), d = ve("page-content"), h = ve("page-preview");
  return F(), H(Re, null, [
    k("p", null, [
      Ke(a, { to: "/pages" }, {
        default: Rt(() => [
          Ft("< Back")
        ]),
        _: 1
      })
    ]),
    r.page ? (F(), H(Re, { key: 0 }, [
      k("h2", null, "Edit Page: " + Ue(r.page.name), 1),
      k("ul", b2, [
        k("li", {
          class: mi(["tab-item", { active: r.tab == "main" || !r.tab }])
        }, [
          k("a", {
            href: "#",
            onClick: e[0] || (e[0] = tt((g) => r.tab = "main", ["prevent"]))
          }, "Main")
        ], 2),
        k("li", {
          class: mi(["tab-item", { active: r.tab == "seo" }])
        }, [
          k("a", {
            href: "#",
            onClick: e[1] || (e[1] = tt((g) => r.tab = "seo", ["prevent"]))
          }, "SEO")
        ], 2),
        k("li", {
          class: mi(["tab-item", { active: r.tab == "paths" }])
        }, [
          k("a", {
            href: "#",
            onClick: e[2] || (e[2] = tt((g) => r.tab = "paths", ["prevent"]))
          }, "Paths")
        ], 2),
        k("li", {
          class: mi(["tab-item", { active: r.tab == "content" }])
        }, [
          k("a", {
            href: "#",
            onClick: e[3] || (e[3] = tt((g) => r.tab = "content", ["prevent"]))
          }, "Content")
        ], 2),
        k("li", {
          class: mi(["tab-item", { active: r.tab == "preview" }])
        }, [
          k("a", {
            href: "#",
            onClick: e[4] || (e[4] = tt((g) => r.tab = "preview", ["prevent"]))
          }, "Preview")
        ], 2)
      ]),
      r.tab == "main" || r.tab == "seo" || !r.tab ? (F(), H("div", w2, [
        k("div", x2, [
          k("div", _2, [
            k("form", {
              onSubmit: e[5] || (e[5] = tt((...g) => r.onSubmit && r.onSubmit(...g), ["prevent"]))
            }, [
              Ie(Ke(c, { page: r.page }, null, 8, ["page"]), [
                [Up, r.tab == "main" || !r.tab]
              ]),
              Ie(Ke(u, { page: r.page }, null, 8, ["page"]), [
                [Up, r.tab == "seo"]
              ]),
              k("button", {
                class: "btn btn-primary",
                disabled: !r.saveEnabled
              }, " Update ", 8, S2)
            ], 32)
          ])
        ])
      ])) : Vt("", !0),
      r.tab == "paths" ? (F(), ht(p, {
        key: 1,
        page: r.page,
        templates: r.templates
      }, null, 8, ["page", "templates"])) : Vt("", !0),
      r.tab == "content" ? (F(), ht(d, {
        key: 2,
        page: r.page
      }, null, 8, ["page"])) : Vt("", !0),
      r.tab == "preview" ? (F(), ht(h, {
        key: 3,
        page: r.page
      }, null, 8, ["page"])) : Vt("", !0)
    ], 64)) : Vt("", !0)
  ], 64);
}
const E2 = /* @__PURE__ */ Ae(v2, [["render", k2]]), C2 = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["path"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.path.id);
    }
    return { onDeleteClick: t };
  }
};
function O2(n, e, t, r, i, s) {
  const a = ve("router-link");
  return F(), H("tr", null, [
    k("td", null, Ue(t.path.id), 1),
    k("td", null, Ue(t.path.cms_page_id), 1),
    k("td", null, [
      Ke(a, {
        to: "/paths/" + t.path.id
      }, {
        default: Rt(() => [
          Ft(Ue(t.path.path), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    k("td", null, [
      k("button", {
        onClick: e[0] || (e[0] = tt((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const T2 = /* @__PURE__ */ Ae(C2, [["render", O2]]), A2 = {
  name: "LaravelCmsAdminPaths",
  components: {
    ListItem: T2
  },
  setup(n, { emit: e }) {
    const t = _e([]), r = _e(!1);
    async function i() {
      const u = await (await fetch("/api/cms-paths")).json();
      t.value = u.data, r.value = !0;
    }
    async function s(c) {
      if (!(await fetch("/api/cms-paths/" + c, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })).ok) {
        de({
          title: json.message,
          type: "error"
        });
        return;
      }
      de({
        title: "Path deleted.",
        type: "warn"
      });
      var p = t.value.map((d) => d.id).indexOf(c);
      ~p && t.value.splice(p, 1);
    }
    return i(), {
      pathsSorted: Ne(() => zt.exports.sortBy(t.value || [], (c) => c.path)),
      loaded: r,
      onDelete: s
    };
  }
}, M2 = /* @__PURE__ */ k("h2", null, "Paths", -1), N2 = {
  key: 0,
  class: "table"
}, D2 = /* @__PURE__ */ k("tr", null, [
  /* @__PURE__ */ k("th", null, "Id"),
  /* @__PURE__ */ k("th", null, "Page Id"),
  /* @__PURE__ */ k("th", { colspan: "2" }, "Path")
], -1), R2 = { key: 1 }, I2 = { key: 2 };
function P2(n, e, t, r, i, s) {
  const a = ve("list-item");
  return F(), H(Re, null, [
    M2,
    r.loaded && r.pathsSorted.length ? (F(), H("table", N2, [
      D2,
      (F(!0), H(Re, null, vt(r.pathsSorted, (c) => (F(), ht(a, {
        key: c.id,
        path: c,
        onDelete: r.onDelete
      }, null, 8, ["path", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), H("p", R2, "There are no paths.")) : (F(), H("p", I2, "Loading..."))
  ], 64);
}
const L2 = /* @__PURE__ */ Ae(A2, [["render", P2]]), B2 = {
  name: "LaravelCmsAdminTemplatesListItem",
  props: ["template"],
  emits: ["delete"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.template.id);
    }
    return { onDeleteClick: t };
  }
};
function $2(n, e, t, r, i, s) {
  const a = ve("router-link");
  return F(), H("tr", null, [
    k("td", null, Ue(t.template.id), 1),
    k("td", null, [
      Ke(a, {
        to: "/templates/" + t.template.id
      }, {
        default: Rt(() => [
          Ft(Ue(t.template.name), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    k("td", null, Ue(t.template.identifier), 1),
    k("td", null, [
      k("button", {
        onClick: e[0] || (e[0] = tt((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const F2 = /* @__PURE__ */ Ae(B2, [["render", $2]]), V2 = {
  name: "LaravelCmsAdminTemplateAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = _e({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = Ne(() => t.value.name != null && t.value.identifier != null);
    return { newTemplate: t, onSubmit: r, valid: i };
  }
}, z2 = { class: "form-group form-inline mx-2" }, H2 = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), W2 = { class: "form-group form-inline mx-2" }, U2 = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), j2 = ["disabled"];
function q2(n, e, t, r, i, s) {
  return F(), H("form", {
    onSubmit: e[2] || (e[2] = tt((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    k("fieldset", null, [
      k("div", z2, [
        H2,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newTemplate.name = a)
        }, null, 512), [
          [nt, r.newTemplate.name]
        ])
      ]),
      k("div", W2, [
        U2,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newTemplate.identifier = a)
        }, null, 512), [
          [nt, r.newTemplate.identifier]
        ])
      ]),
      k("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Template ", 8, j2)
    ])
  ], 32);
}
const K2 = /* @__PURE__ */ Ae(V2, [["render", q2]]), J2 = {
  name: "LaravelCmsAdminTemplates",
  components: {
    ListItem: F2,
    AddForm: K2
  },
  setup(n, { emit: e }) {
    const t = fg(), r = ki("$cookies"), i = _e([]), s = _e(!1);
    async function a() {
      const h = await (await fetch("/api/cms-templates")).json();
      i.value = h.data, s.value = !0;
    }
    async function c(d) {
      const h = await fetch("/api/cms-templates", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": r.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify(d)
      }), g = await h.json();
      if (!h.ok) {
        de({
          title: g.message,
          type: "error"
        });
        return;
      }
      i.value.push(g.data), de({
        title: "New template created.",
        type: "success"
      }), t.push("/templates/" + g.data.id);
    }
    async function u(d) {
      if (!(await fetch("/api/cms-templates/" + d, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })).ok) {
        de({
          title: json.message,
          type: "error"
        });
        return;
      }
      de({
        title: "Template deleted.",
        type: "warn"
      });
      var g = i.value.map((y) => y.id).indexOf(d);
      ~g && i.value.splice(g, 1);
    }
    return a(), {
      templatesSorted: Ne(() => zt.exports.sortBy(i.value || [], (d) => d.name)),
      loaded: s,
      onAdd: c,
      onDelete: u
    };
  }
}, G2 = /* @__PURE__ */ k("h2", null, "Add Template", -1), Y2 = /* @__PURE__ */ k("h2", null, "Existing Templates", -1), X2 = {
  key: 0,
  class: "table"
}, Z2 = { key: 1 }, Q2 = { key: 2 };
function eB(n, e, t, r, i, s) {
  const a = ve("add-form"), c = ve("list-item");
  return F(), H(Re, null, [
    G2,
    Ke(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    Y2,
    r.loaded && r.templatesSorted.length ? (F(), H("table", X2, [
      (F(!0), H(Re, null, vt(r.templatesSorted, (u) => (F(), ht(c, {
        key: u.id,
        template: u,
        onDelete: r.onDelete
      }, null, 8, ["template", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), H("p", Z2, "There are no templates.")) : (F(), H("p", Q2, "Loading..."))
  ], 64);
}
const tB = /* @__PURE__ */ Ae(J2, [["render", eB]]), nB = (n, e) => {
  let t;
  return (...r) => {
    t && clearTimeout(t), t = setTimeout(() => {
      n(...r);
    }, e);
  };
}, rB = {
  name: "LaravelCmsAdminTemplatesListItem",
  props: ["section"],
  emits: ["delete", "save"],
  setup(n, { emit: e }) {
    Xa(n.section, (i, s) => {
      r();
    });
    async function t() {
      e("delete", n.section.id);
    }
    const r = nB(() => {
      e("save", n.section);
    }, 1e3);
    return { onDeleteClick: t };
  }
}, iB = { class: "form-group form-inline mx-2" }, oB = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), sB = { class: "form-group form-inline mx-2" }, aB = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "identifier"
}, "Slug", -1);
function lB(n, e, t, r, i, s) {
  return F(), H("fieldset", null, [
    k("div", iB, [
      oB,
      Ie(k("input", {
        class: "form-input",
        type: "text",
        name: "name",
        id: "name",
        "onUpdate:modelValue": e[0] || (e[0] = (a) => t.section.name = a)
      }, null, 512), [
        [nt, t.section.name]
      ])
    ]),
    k("div", sB, [
      aB,
      Ie(k("input", {
        class: "form-input",
        type: "text",
        name: "identifier",
        id: "identifier",
        "onUpdate:modelValue": e[1] || (e[1] = (a) => t.section.identifier = a)
      }, null, 512), [
        [nt, t.section.identifier]
      ])
    ]),
    k("button", {
      class: "btn btn-link text-error mx-2",
      onClick: e[2] || (e[2] = tt((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"]))
    }, " Delete ")
  ]);
}
const cB = /* @__PURE__ */ Ae(rB, [["render", lB]]), uB = {
  name: "LaravelCmsAdminTemplateSectionAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = _e({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = Ne(() => t.value.name != null && t.value.identifier != null);
    return { newTemplateSection: t, onSubmit: r, valid: i };
  }
}, fB = /* @__PURE__ */ k("legend", null, "Add Section", -1), dB = { class: "form-group form-inline mx-2" }, pB = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), hB = { class: "form-group form-inline mx-2" }, mB = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), gB = ["disabled"];
function yB(n, e, t, r, i, s) {
  return F(), H("form", {
    onSubmit: e[2] || (e[2] = tt((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    k("fieldset", null, [
      fB,
      k("div", dB, [
        pB,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newTemplateSection.name = a),
          required: ""
        }, null, 512), [
          [nt, r.newTemplateSection.name]
        ])
      ]),
      k("div", hB, [
        mB,
        Ie(k("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newTemplateSection.identifier = a)
        }, null, 512), [
          [nt, r.newTemplateSection.identifier]
        ])
      ]),
      k("button", {
        class: "btn btn-link mx-2",
        disabled: !r.valid
      }, " Add Template Section ", 8, gB)
    ])
  ], 32);
}
const vB = /* @__PURE__ */ Ae(uB, [["render", yB]]), bB = {
  name: "LaravelCmsAdminTemplateSections",
  components: {
    AddForm: vB,
    ListItem: cB
  },
  props: ["templateId"],
  setup(n) {
    const e = _e([]), t = _e(!1);
    async function r() {
      let u = "/api/cms-template-sections?" + new URLSearchParams({
        "q[]": ["cms_template_id[eq]=" + n.templateId]
      }).toString();
      const d = await (await fetch(u)).json();
      e.value = d.data, t.value = !0;
    }
    async function i(u) {
      if (!(await fetch("/api/cms-template-sections/" + u, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })).ok) {
        de({
          title: json.message,
          type: "error"
        });
        return;
      }
      de({
        title: "Template section deleted.",
        type: "warn"
      });
      var d = e.value.map((h) => h.id).indexOf(u);
      ~d && e.value.splice(d, 1);
    }
    async function s(u) {
      const p = await fetch(
        "/api/cms-template-sections/" + u.id,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: JSON.stringify(u)
        }
      ), d = await p.json();
      if (!p.ok) {
        de({
          title: d.message,
          type: "error"
        });
        return;
      }
      de({
        title: "Template section updated.",
        type: "success"
      });
      var h = e.value.map((g) => g.id).indexOf(u.id);
      ~h && e.value.splice(h, 1, u);
    }
    async function a(u) {
      u.cms_template_id = n.templateId;
      const p = await fetch("/api/cms-template-sections", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(u)
      }), d = await p.json();
      if (!p.ok) {
        de({
          title: d.message,
          type: "error"
        });
        return;
      }
      e.value.push(d.data), de({
        title: "New template section created.",
        type: "success"
      });
    }
    return r(), {
      sectionsSorted: Ne(() => zt.exports.sortBy(e.value || [], (u) => u.name)),
      loaded: t,
      onDelete: i,
      onSave: s,
      onAdd: a
    };
  }
}, wB = { key: 0 }, xB = /* @__PURE__ */ k("div", { class: "divider" }, null, -1), _B = { key: 0 }, SB = { key: 1 }, kB = { key: 2 };
function EB(n, e, t, r, i, s) {
  const a = ve("add-form"), c = ve("list-item");
  return r.sectionsSorted ? (F(), H("fieldset", wB, [
    Ke(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    xB,
    r.loaded && r.sectionsSorted.length ? (F(), H("div", _B, [
      (F(!0), H(Re, null, vt(r.sectionsSorted, (u) => (F(), ht(c, {
        key: u.id,
        section: u,
        onDelete: r.onDelete,
        onSave: r.onSave
      }, null, 8, ["section", "onDelete", "onSave"]))), 128))
    ])) : r.loaded ? (F(), H("p", SB, "There are no templates sections.")) : (F(), H("p", kB, "Loading..."))
  ])) : Vt("", !0);
}
const CB = /* @__PURE__ */ Ae(bB, [["render", EB]]), OB = {
  name: "LaravelCmsAdminTemplate",
  components: { TemplateSections: CB },
  props: ["id"],
  setup(n) {
    const e = _e(null), t = _e(null);
    async function r() {
      const c = await (await fetch("/api/cms-templates/" + n.id)).json();
      e.value = c.data, t.value = Object.assign({}, e.value);
    }
    async function i() {
      const a = await fetch("/api/cms-templates/" + n.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(e.value)
      }), c = await a.json();
      if (!a.ok) {
        de({
          title: c.message,
          type: "error"
        });
        return;
      }
      e.value = c.data, t.value = Object.assign({}, e.value), de({
        title: "Template updated.",
        type: "success"
      });
    }
    r();
    const s = Ne(() => JSON.stringify(t.value) != JSON.stringify(e.value));
    return { template: e, onSubmit: i, saveEnabled: s };
  }
}, TB = /* @__PURE__ */ k("h2", null, "Edit Template", -1), AB = { key: 0 }, MB = { class: "form-group form-inline mx-2" }, NB = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), DB = { class: "form-group form-inline mx-2" }, RB = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), IB = { class: "form-group form-inline mx-2" }, PB = /* @__PURE__ */ k("label", {
  class: "form-label",
  for: "description"
}, "Description", -1), LB = ["disabled"], BB = /* @__PURE__ */ k("h2", null, "Template Sections", -1);
function $B(n, e, t, r, i, s) {
  const a = ve("router-link"), c = ve("template-sections");
  return F(), H(Re, null, [
    k("p", null, [
      Ke(a, { to: "/templates" }, {
        default: Rt(() => [
          Ft("< Back")
        ]),
        _: 1
      })
    ]),
    TB,
    k("form", {
      onSubmit: e[3] || (e[3] = tt((...u) => r.onSubmit && r.onSubmit(...u), ["prevent"]))
    }, [
      r.template ? (F(), H("fieldset", AB, [
        k("div", MB, [
          NB,
          Ie(k("input", {
            class: "form-input",
            type: "text",
            name: "name",
            id: "name",
            "onUpdate:modelValue": e[0] || (e[0] = (u) => r.template.name = u)
          }, null, 512), [
            [nt, r.template.name]
          ])
        ]),
        k("div", DB, [
          RB,
          Ie(k("input", {
            class: "form-input",
            type: "text",
            name: "identifier",
            id: "identifier",
            "onUpdate:modelValue": e[1] || (e[1] = (u) => r.template.identifier = u)
          }, null, 512), [
            [nt, r.template.identifier]
          ])
        ]),
        k("div", IB, [
          PB,
          Ie(k("input", {
            class: "form-input",
            type: "text",
            name: "description",
            id: "description",
            "onUpdate:modelValue": e[2] || (e[2] = (u) => r.template.description = u)
          }, null, 512), [
            [nt, r.template.description]
          ])
        ]),
        k("button", {
          class: "btn btn-link mx-2",
          disabled: !r.saveEnabled
        }, " Update ", 8, LB)
      ])) : Vt("", !0)
    ], 32),
    BB,
    k("form", null, [
      Ke(c, { "template-id": t.id }, null, 8, ["template-id"])
    ])
  ], 64);
}
const FB = /* @__PURE__ */ Ae(OB, [["render", $B]]), VB = [
  {
    path: "/",
    name: "Home",
    component: qm
  },
  {
    path: "/components",
    name: "Components",
    component: pC
  },
  {
    path: "/pages",
    name: "Pages",
    component: iO
  },
  {
    path: "/pages/:id",
    name: "Page",
    component: E2,
    props: (n) => ({ id: parseInt(n.params.id) })
  },
  {
    path: "/paths",
    name: "Paths",
    component: L2
  },
  {
    path: "/media",
    name: "Media",
    component: NC
  },
  {
    path: "/templates",
    name: "Templates",
    component: tB
  },
  {
    path: "/templates/:id",
    name: "Template",
    component: FB,
    props: (n) => ({ id: parseInt(n.params.id) })
  }
], zB = kE({
  history: Sk(),
  routes: VB
});
var hv = { exports: {} };
(function(n, e) {
  (function() {
    var t = {
      expires: "1d",
      path: "; path=/",
      domain: "",
      secure: "",
      sameSite: "; SameSite=Lax"
    }, r = {
      install: function(i, s) {
        s && this.config(s.expires, s.path, s.domain, s.secure, s.sameSite), i.prototype && (i.prototype.$cookies = this), i.config && i.config.globalProperties && (i.config.globalProperties.$cookies = this, i.provide("$cookies", this)), i.$cookies = this;
      },
      config: function(i, s, a, c, u) {
        t.expires = i || "1d", t.path = s ? "; path=" + s : "; path=/", t.domain = a ? "; domain=" + a : "", t.secure = c ? "; Secure" : "", t.sameSite = u ? "; SameSite=" + u : "; SameSite=Lax";
      },
      get: function(i) {
        var s = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        if (s && (s.substring(0, 1) === "{" && s.substring(s.length - 1, s.length) === "}" || s.substring(0, 1) === "[" && s.substring(s.length - 1, s.length) === "]"))
          try {
            s = JSON.parse(s);
          } catch {
            return s;
          }
        return s;
      },
      set: function(i, s, a, c, u, p, d) {
        if (i) {
          if (/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(i))
            throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: ' + i);
        } else
          throw new Error("Cookie name is not found in the first argument.");
        s && s.constructor === Object && (s = JSON.stringify(s));
        var h = "";
        if (a = a == null ? t.expires : a, a && a != 0)
          switch (a.constructor) {
            case Number:
              a === 1 / 0 || a === -1 ? h = "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : h = "; max-age=" + a;
              break;
            case String:
              if (/^(?:\d+(y|m|d|h|min|s))$/i.test(a)) {
                var g = a.replace(/^(\d+)(?:y|m|d|h|min|s)$/i, "$1");
                switch (a.replace(/^(?:\d+)(y|m|d|h|min|s)$/i, "$1").toLowerCase()) {
                  case "m":
                    h = "; max-age=" + +g * 2592e3;
                    break;
                  case "d":
                    h = "; max-age=" + +g * 86400;
                    break;
                  case "h":
                    h = "; max-age=" + +g * 3600;
                    break;
                  case "min":
                    h = "; max-age=" + +g * 60;
                    break;
                  case "s":
                    h = "; max-age=" + g;
                    break;
                  case "y":
                    h = "; max-age=" + +g * 31104e3;
                    break;
                }
              } else
                h = "; expires=" + a;
              break;
            case Date:
              h = "; expires=" + a.toUTCString();
              break;
          }
        return document.cookie = encodeURIComponent(i) + "=" + encodeURIComponent(s) + h + (u ? "; domain=" + u : t.domain) + (c ? "; path=" + c : t.path) + (p == null ? t.secure : p ? "; Secure" : "") + (d == null ? t.sameSite : d ? "; SameSite=" + d : ""), this;
      },
      remove: function(i, s, a) {
        return !i || !this.isKey(i) ? !1 : (document.cookie = encodeURIComponent(i) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : t.domain) + (s ? "; path=" + s : t.path) + "; SameSite=Lax", !0);
      },
      isKey: function(i) {
        return new RegExp("(?:^|;\\s*)" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
      },
      keys: function() {
        if (!document.cookie)
          return [];
        for (var i = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), s = 0; s < i.length; s++)
          i[s] = decodeURIComponent(i[s]);
        return i;
      }
    };
    n.exports = r, typeof window < "u" && (window.$cookies = r);
  })();
})(hv);
const HB = hv.exports, UB = WS(qm).use(zB).use(GE).use(HB);
export {
  UB as default
};
