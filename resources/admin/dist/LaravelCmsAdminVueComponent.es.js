import { resolveComponent as be, openBlock as F, createElementBlock as W, createElementVNode as E, createVNode as Je, withCtx as Pt, createTextVNode as jt, Fragment as Ne, shallowRef as Lm, unref as io, shallowReactive as E_, nextTick as Bm, inject as Ei, defineComponent as ar, reactive as Iu, computed as De, h as Er, provide as Ec, ref as xe, watch as Xa, getCurrentInstance as Pu, watchEffect as $m, createBlock as gt, TransitionGroup as Fm, renderSlot as Lu, normalizeStyle as zp, resolveDynamicComponent as O_, renderList as wt, normalizeClass as gi, createCommentVNode as Kt, toDisplayString as Ke, withModifiers as Qe, withDirectives as Re, vModelText as et, vModelSelect as wi, onMounted as Bu, onBeforeUnmount as Ya, Teleport as T_, markRaw as A_, customRef as M_, vShow as Hp, createApp as N_ } from "vue";
const Te = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, D_ = {
  name: "LaravelCmsAdminMenu"
};
function R_(n, e, t, r, i, o) {
  const a = be("router-link");
  return F(), W("ul", null, [
    E("li", null, [
      Je(a, { to: "/templates" }, {
        default: Pt(() => [
          jt("Templates")
        ]),
        _: 1
      })
    ]),
    E("li", null, [
      Je(a, { to: "/pages" }, {
        default: Pt(() => [
          jt("Pages")
        ]),
        _: 1
      })
    ]),
    E("li", null, [
      Je(a, { to: "/paths" }, {
        default: Pt(() => [
          jt("Paths")
        ]),
        _: 1
      })
    ]),
    E("li", null, [
      Je(a, { to: "/components" }, {
        default: Pt(() => [
          jt("Components")
        ]),
        _: 1
      })
    ]),
    E("li", null, [
      Je(a, { to: "/media" }, {
        default: Pt(() => [
          jt("Media")
        ]),
        _: 1
      })
    ])
  ]);
}
const I_ = /* @__PURE__ */ Te(D_, [["render", R_]]);
const P_ = {
  name: "LaravelCmsAdminVueComponent",
  components: {
    AdminMenu: I_
  }
}, L_ = { class: "cms-container" }, B_ = { class: "cms-menu" }, $_ = { class: "cms-content" };
function F_(n, e, t, r, i, o) {
  const a = be("notifications"), c = be("admin-menu"), u = be("router-view");
  return F(), W(Ne, null, [
    Je(a),
    E("div", L_, [
      E("div", B_, [
        Je(c)
      ]),
      E("div", $_, [
        Je(u)
      ])
    ])
  ], 64);
}
const V_ = /* @__PURE__ */ Te(P_, [["render", F_]]);
function z_() {
  return Vm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Vm() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const H_ = typeof Proxy == "function", W_ = "devtools-plugin:setup", U_ = "plugin:settings:set";
let Gi, ou;
function j_() {
  var n;
  return Gi !== void 0 || (typeof window < "u" && window.performance ? (Gi = !0, ou = window.performance) : typeof global < "u" && ((n = global.perf_hooks) === null || n === void 0 ? void 0 : n.performance) ? (Gi = !0, ou = global.perf_hooks.performance) : Gi = !1), Gi;
}
function K_() {
  return j_() ? ou.now() : Date.now();
}
class q_ {
  constructor(e, t) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
    const r = {};
    if (e.settings)
      for (const a in e.settings) {
        const c = e.settings[a];
        r[a] = c.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${e.id}`;
    let o = Object.assign({}, r);
    try {
      const a = localStorage.getItem(i), c = JSON.parse(a);
      Object.assign(o, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(a) {
        try {
          localStorage.setItem(i, JSON.stringify(a));
        } catch {
        }
        o = a;
      },
      now() {
        return K_();
      }
    }, t && t.on(U_, (a, c) => {
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
      }), this.fallbacks[c](...u)) : (...u) => new Promise((d) => {
        this.targetQueue.push({
          method: c,
          args: u,
          resolve: d
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
function J_(n, e) {
  const t = n, r = Vm(), i = z_(), o = H_ && t.enableEarlyProxy;
  if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    i.emit(W_, n, e);
  else {
    const a = o ? new q_(t, i) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: t,
      setupFn: e,
      proxy: a
    }), a && e(a.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const kr = typeof window < "u";
function G_(n) {
  return n.__esModule || n[Symbol.toStringTag] === "Module";
}
const Be = Object.assign;
function Oc(n, e) {
  const t = {};
  for (const r in e) {
    const i = e[r];
    t[r] = vn(i) ? i.map(n) : n(i);
  }
  return t;
}
const ns = () => {
}, vn = Array.isArray;
function Oe(n) {
  const e = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + n].concat(e));
}
const X_ = /\/$/, Y_ = (n) => n.replace(X_, "");
function Tc(n, e, t = "/") {
  let r, i = {}, o = "", a = "";
  const c = e.indexOf("#");
  let u = e.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (r = e.slice(0, u), o = e.slice(u + 1, c > -1 ? c : e.length), i = n(o)), c > -1 && (r = r || e.slice(0, c), a = e.slice(c, e.length)), r = ek(r != null ? r : e, t), {
    fullPath: r + (o && "?") + o + a,
    path: r,
    query: i,
    hash: a
  };
}
function Z_(n, e) {
  const t = e.query ? n(e.query) : "";
  return e.path + (t && "?") + t + (e.hash || "");
}
function Wp(n, e) {
  return !e || !n.toLowerCase().startsWith(e.toLowerCase()) ? n : n.slice(e.length) || "/";
}
function Up(n, e, t) {
  const r = e.matched.length - 1, i = t.matched.length - 1;
  return r > -1 && r === i && Zr(e.matched[r], t.matched[i]) && zm(e.params, t.params) && n(e.query) === n(t.query) && e.hash === t.hash;
}
function Zr(n, e) {
  return (n.aliasOf || n) === (e.aliasOf || e);
}
function zm(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (const t in n)
    if (!Q_(n[t], e[t]))
      return !1;
  return !0;
}
function Q_(n, e) {
  return vn(n) ? jp(n, e) : vn(e) ? jp(e, n) : n === e;
}
function jp(n, e) {
  return vn(e) ? n.length === e.length && n.every((t, r) => t === e[r]) : n.length === 1 && n[0] === e;
}
function ek(n, e) {
  if (n.startsWith("/"))
    return n;
  if (process.env.NODE_ENV !== "production" && !e.startsWith("/"))
    return Oe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${e}". It should look like "/${e}".`), n;
  if (!n)
    return e;
  const t = e.split("/"), r = n.split("/"), i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let o = t.length - 1, a, c;
  for (a = 0; a < r.length; a++)
    if (c = r[a], c !== ".")
      if (c === "..")
        o > 1 && o--;
      else
        break;
  return t.slice(0, o).join("/") + "/" + r.slice(a - (a === r.length ? 1 : 0)).join("/");
}
var ds;
(function(n) {
  n.pop = "pop", n.push = "push";
})(ds || (ds = {}));
var rs;
(function(n) {
  n.back = "back", n.forward = "forward", n.unknown = "";
})(rs || (rs = {}));
function tk(n) {
  if (!n)
    if (kr) {
      const e = document.querySelector("base");
      n = e && e.getAttribute("href") || "/", n = n.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      n = "/";
  return n[0] !== "/" && n[0] !== "#" && (n = "/" + n), Y_(n);
}
const nk = /^[^#]+#/;
function rk(n, e) {
  return n.replace(nk, "#") + e;
}
function ik(n, e) {
  const t = document.documentElement.getBoundingClientRect(), r = n.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - t.left - (e.left || 0),
    top: r.top - t.top - (e.top || 0)
  };
}
const Za = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function ok(n) {
  let e;
  if ("el" in n) {
    const t = n.el, r = typeof t == "string" && t.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof n.el == "string" && (!r || !document.getElementById(n.el.slice(1))))
      try {
        const o = document.querySelector(n.el);
        if (r && o) {
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
    e = ik(i, n);
  } else
    e = n;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset);
}
function Kp(n, e) {
  return (history.state ? history.state.position - e : -1) + n;
}
const su = /* @__PURE__ */ new Map();
function sk(n, e) {
  su.set(n, e);
}
function ak(n) {
  const e = su.get(n);
  return su.delete(n), e;
}
let lk = () => location.protocol + "//" + location.host;
function Hm(n, e) {
  const { pathname: t, search: r, hash: i } = e, o = n.indexOf("#");
  if (o > -1) {
    let c = i.includes(n.slice(o)) ? n.slice(o).length : 1, u = i.slice(c);
    return u[0] !== "/" && (u = "/" + u), Wp(u, "");
  }
  return Wp(t, n) + r + i;
}
function ck(n, e, t, r) {
  let i = [], o = [], a = null;
  const c = ({ state: g }) => {
    const y = Hm(n, location), b = t.value, _ = e.value;
    let k = 0;
    if (g) {
      if (t.value = y, e.value = g, a && a === b) {
        a = null;
        return;
      }
      k = _ ? g.position - _.position : 0;
    } else
      r(y);
    i.forEach((A) => {
      A(t.value, b, {
        delta: k,
        type: ds.pop,
        direction: k ? k > 0 ? rs.forward : rs.back : rs.unknown
      });
    });
  };
  function u() {
    a = t.value;
  }
  function d(g) {
    i.push(g);
    const y = () => {
      const b = i.indexOf(g);
      b > -1 && i.splice(b, 1);
    };
    return o.push(y), y;
  }
  function p() {
    const { history: g } = window;
    !g.state || g.replaceState(Be({}, g.state, { scroll: Za() }), "");
  }
  function h() {
    for (const g of o)
      g();
    o = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", p);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", p, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: d,
    destroy: h
  };
}
function qp(n, e, t, r = !1, i = !1) {
  return {
    back: n,
    current: e,
    forward: t,
    replaced: r,
    position: window.history.length,
    scroll: i ? Za() : null
  };
}
function uk(n) {
  const { history: e, location: t } = window, r = {
    value: Hm(n, t)
  }, i = { value: e.state };
  i.value || o(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: e.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function o(u, d, p) {
    const h = n.indexOf("#"), g = h > -1 ? (t.host && document.querySelector("base") ? n : n.slice(h)) + u : lk() + n + u;
    try {
      e[p ? "replaceState" : "pushState"](d, "", g), i.value = d;
    } catch (y) {
      process.env.NODE_ENV !== "production" ? Oe("Error with push/replace State", y) : console.error(y), t[p ? "replace" : "assign"](g);
    }
  }
  function a(u, d) {
    const p = Be({}, e.state, qp(
      i.value.back,
      u,
      i.value.forward,
      !0
    ), d, { position: i.value.position });
    o(u, p, !0), r.value = u;
  }
  function c(u, d) {
    const p = Be(
      {},
      i.value,
      e.state,
      {
        forward: u,
        scroll: Za()
      }
    );
    process.env.NODE_ENV !== "production" && !e.state && Oe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), o(p.current, p, !0);
    const h = Be({}, qp(r.value, u, null), { position: p.position + 1 }, d);
    o(u, h, !1), r.value = u;
  }
  return {
    location: r,
    state: i,
    push: c,
    replace: a
  };
}
function fk(n) {
  n = tk(n);
  const e = uk(n), t = ck(n, e.state, e.location, e.replace);
  function r(o, a = !0) {
    a || t.pauseListeners(), history.go(o);
  }
  const i = Be({
    location: "",
    base: n,
    go: r,
    createHref: rk.bind(null, n)
  }, e, t);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), i;
}
function dk(n) {
  return n = location.host ? n || location.pathname + location.search : "", n.includes("#") || (n += "#"), process.env.NODE_ENV !== "production" && !n.endsWith("#/") && !n.endsWith("#") && Oe(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/, "#")}".`), fk(n);
}
function pk(n) {
  return typeof n == "string" || n && typeof n == "object";
}
function Wm(n) {
  return typeof n == "string" || typeof n == "symbol";
}
const Fr = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, au = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Jp;
(function(n) {
  n[n.aborted = 4] = "aborted", n[n.cancelled = 8] = "cancelled", n[n.duplicated = 16] = "duplicated";
})(Jp || (Jp = {}));
const hk = {
  [1]({ location: n, currentLocation: e }) {
    return `No match for
 ${JSON.stringify(n)}${e ? `
while being at
` + JSON.stringify(e) : ""}`;
  },
  [2]({ from: n, to: e }) {
    return `Redirected from "${n.fullPath}" to "${gk(e)}" via a navigation guard.`;
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
function co(n, e) {
  return process.env.NODE_ENV !== "production" ? Be(new Error(hk[n](e)), {
    type: n,
    [au]: !0
  }, e) : Be(new Error(), {
    type: n,
    [au]: !0
  }, e);
}
function wr(n, e) {
  return n instanceof Error && au in n && (e == null || !!(n.type & e));
}
const mk = ["params", "query", "hash"];
function gk(n) {
  if (typeof n == "string")
    return n;
  if ("path" in n)
    return n.path;
  const e = {};
  for (const t of mk)
    t in n && (e[t] = n[t]);
  return JSON.stringify(e, null, 2);
}
const Gp = "[^/]+?", yk = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, vk = /[.+*?^${}()[\]/\\]/g;
function bk(n, e) {
  const t = Be({}, yk, e), r = [];
  let i = t.start ? "^" : "";
  const o = [];
  for (const d of n) {
    const p = d.length ? [] : [90];
    t.strict && !d.length && (i += "/");
    for (let h = 0; h < d.length; h++) {
      const g = d[h];
      let y = 40 + (t.sensitive ? 0.25 : 0);
      if (g.type === 0)
        h || (i += "/"), i += g.value.replace(vk, "\\$&"), y += 40;
      else if (g.type === 1) {
        const { value: b, repeatable: _, optional: k, regexp: A } = g;
        o.push({
          name: b,
          repeatable: _,
          optional: k
        });
        const D = A || Gp;
        if (D !== Gp) {
          y += 10;
          try {
            new RegExp(`(${D})`);
          } catch (C) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${D}): ` + C.message);
          }
        }
        let H = _ ? `((?:${D})(?:/(?:${D}))*)` : `(${D})`;
        h || (H = k && d.length < 2 ? `(?:/${H})` : "/" + H), k && (H += "?"), i += H, y += 20, k && (y += -8), _ && (y += -20), D === ".*" && (y += -50);
      }
      p.push(y);
    }
    r.push(p);
  }
  if (t.strict && t.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += 0.7000000000000001;
  }
  t.strict || (i += "/?"), t.end ? i += "$" : t.strict && (i += "(?:/|$)");
  const a = new RegExp(i, t.sensitive ? "" : "i");
  function c(d) {
    const p = d.match(a), h = {};
    if (!p)
      return null;
    for (let g = 1; g < p.length; g++) {
      const y = p[g] || "", b = o[g - 1];
      h[b.name] = y && b.repeatable ? y.split("/") : y;
    }
    return h;
  }
  function u(d) {
    let p = "", h = !1;
    for (const g of n) {
      (!h || !p.endsWith("/")) && (p += "/"), h = !1;
      for (const y of g)
        if (y.type === 0)
          p += y.value;
        else if (y.type === 1) {
          const { value: b, repeatable: _, optional: k } = y, A = b in d ? d[b] : "";
          if (vn(A) && !_)
            throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
          const D = vn(A) ? A.join("/") : A;
          if (!D)
            if (k)
              g.length < 2 && (p.endsWith("/") ? p = p.slice(0, -1) : h = !0);
            else
              throw new Error(`Missing required param "${b}"`);
          p += D;
        }
    }
    return p || "/";
  }
  return {
    re: a,
    score: r,
    keys: o,
    parse: c,
    stringify: u
  };
}
function wk(n, e) {
  let t = 0;
  for (; t < n.length && t < e.length; ) {
    const r = e[t] - n[t];
    if (r)
      return r;
    t++;
  }
  return n.length < e.length ? n.length === 1 && n[0] === 40 + 40 ? -1 : 1 : n.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0;
}
function xk(n, e) {
  let t = 0;
  const r = n.score, i = e.score;
  for (; t < r.length && t < i.length; ) {
    const o = wk(r[t], i[t]);
    if (o)
      return o;
    t++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Xp(r))
      return 1;
    if (Xp(i))
      return -1;
  }
  return i.length - r.length;
}
function Xp(n) {
  const e = n[n.length - 1];
  return n.length > 0 && e[e.length - 1] < 0;
}
const Sk = {
  type: 0,
  value: ""
}, _k = /[a-zA-Z0-9_]/;
function kk(n) {
  if (!n)
    return [[]];
  if (n === "/")
    return [[Sk]];
  if (!n.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${n}" should be "/${n}".` : `Invalid path "${n}"`);
  function e(y) {
    throw new Error(`ERR (${t})/"${d}": ${y}`);
  }
  let t = 0, r = t;
  const i = [];
  let o;
  function a() {
    o && i.push(o), o = [];
  }
  let c = 0, u, d = "", p = "";
  function h() {
    !d || (t === 0 ? o.push({
      type: 0,
      value: d
    }) : t === 1 || t === 2 || t === 3 ? (o.length > 1 && (u === "*" || u === "+") && e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: 1,
      value: d,
      regexp: p,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : e("Invalid state to consume buffer"), d = "");
  }
  function g() {
    d += u;
  }
  for (; c < n.length; ) {
    if (u = n[c++], u === "\\" && t !== 2) {
      r = t, t = 4;
      continue;
    }
    switch (t) {
      case 0:
        u === "/" ? (d && h(), a()) : u === ":" ? (h(), t = 1) : g();
        break;
      case 4:
        g(), t = r;
        break;
      case 1:
        u === "(" ? t = 2 : _k.test(u) ? g() : (h(), t = 0, u !== "*" && u !== "?" && u !== "+" && c--);
        break;
      case 2:
        u === ")" ? p[p.length - 1] == "\\" ? p = p.slice(0, -1) + u : t = 3 : p += u;
        break;
      case 3:
        h(), t = 0, u !== "*" && u !== "?" && u !== "+" && c--, p = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return t === 2 && e(`Unfinished custom RegExp for param "${d}"`), h(), a(), i;
}
function Ck(n, e, t) {
  const r = bk(kk(n.path), t);
  if (process.env.NODE_ENV !== "production") {
    const o = /* @__PURE__ */ new Set();
    for (const a of r.keys)
      o.has(a.name) && Oe(`Found duplicated params with name "${a.name}" for path "${n.path}". Only the last one will be available on "$route.params".`), o.add(a.name);
  }
  const i = Be(r, {
    record: n,
    parent: e,
    children: [],
    alias: []
  });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i;
}
function Ek(n, e) {
  const t = [], r = /* @__PURE__ */ new Map();
  e = Qp({ strict: !1, end: !0, sensitive: !1 }, e);
  function i(p) {
    return r.get(p);
  }
  function o(p, h, g) {
    const y = !g, b = Ok(p);
    process.env.NODE_ENV !== "production" && Nk(b, h), b.aliasOf = g && g.record;
    const _ = Qp(e, p), k = [
      b
    ];
    if ("alias" in p) {
      const H = typeof p.alias == "string" ? [p.alias] : p.alias;
      for (const C of H)
        k.push(Be({}, b, {
          components: g ? g.record.components : b.components,
          path: C,
          aliasOf: g ? g.record : b
        }));
    }
    let A, D;
    for (const H of k) {
      const { path: C } = H;
      if (h && C[0] !== "/") {
        const q = h.record.path, B = q[q.length - 1] === "/" ? "" : "/";
        H.path = h.record.path + (C && B + C);
      }
      if (process.env.NODE_ENV !== "production" && H.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (A = Ck(H, h, _), process.env.NODE_ENV !== "production" && h && C[0] === "/" && Dk(A, h), g ? (g.alias.push(A), process.env.NODE_ENV !== "production" && Mk(g, A)) : (D = D || A, D !== A && D.alias.push(A), y && p.name && !Zp(A) && a(p.name)), b.children) {
        const q = b.children;
        for (let B = 0; B < q.length; B++)
          o(q[B], A, g && g.children[B]);
      }
      g = g || A, (A.record.components && Object.keys(A.record.components).length || A.record.name || A.record.redirect) && u(A);
    }
    return D ? () => {
      a(D);
    } : ns;
  }
  function a(p) {
    if (Wm(p)) {
      const h = r.get(p);
      h && (r.delete(p), t.splice(t.indexOf(h), 1), h.children.forEach(a), h.alias.forEach(a));
    } else {
      const h = t.indexOf(p);
      h > -1 && (t.splice(h, 1), p.record.name && r.delete(p.record.name), p.children.forEach(a), p.alias.forEach(a));
    }
  }
  function c() {
    return t;
  }
  function u(p) {
    let h = 0;
    for (; h < t.length && xk(p, t[h]) >= 0 && (p.record.path !== t[h].record.path || !Um(p, t[h])); )
      h++;
    t.splice(h, 0, p), p.record.name && !Zp(p) && r.set(p.record.name, p);
  }
  function d(p, h) {
    let g, y = {}, b, _;
    if ("name" in p && p.name) {
      if (g = r.get(p.name), !g)
        throw co(1, {
          location: p
        });
      if (process.env.NODE_ENV !== "production") {
        const D = Object.keys(p.params || {}).filter((H) => !g.keys.find((C) => C.name === H));
        D.length && Oe(`Discarded invalid param(s) "${D.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      _ = g.record.name, y = Be(
        Yp(
          h.params,
          g.keys.filter((D) => !D.optional).map((D) => D.name)
        ),
        p.params && Yp(p.params, g.keys.map((D) => D.name))
      ), b = g.stringify(y);
    } else if ("path" in p)
      b = p.path, process.env.NODE_ENV !== "production" && !b.startsWith("/") && Oe(`The Matcher cannot resolve relative paths but received "${b}". Unless you directly called \`matcher.resolve("${b}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = t.find((D) => D.re.test(b)), g && (y = g.parse(b), _ = g.record.name);
    else {
      if (g = h.name ? r.get(h.name) : t.find((D) => D.re.test(h.path)), !g)
        throw co(1, {
          location: p,
          currentLocation: h
        });
      _ = g.record.name, y = Be({}, h.params, p.params), b = g.stringify(y);
    }
    const k = [];
    let A = g;
    for (; A; )
      k.unshift(A.record), A = A.parent;
    return {
      name: _,
      path: b,
      params: y,
      matched: k,
      meta: Ak(k)
    };
  }
  return n.forEach((p) => o(p)), { addRoute: o, resolve: d, removeRoute: a, getRoutes: c, getRecordMatcher: i };
}
function Yp(n, e) {
  const t = {};
  for (const r of e)
    r in n && (t[r] = n[r]);
  return t;
}
function Ok(n) {
  return {
    path: n.path,
    redirect: n.redirect,
    name: n.name,
    meta: n.meta || {},
    aliasOf: void 0,
    beforeEnter: n.beforeEnter,
    props: Tk(n),
    children: n.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in n ? n.components || null : n.component && { default: n.component }
  };
}
function Tk(n) {
  const e = {}, t = n.props || !1;
  if ("component" in n)
    e.default = t;
  else
    for (const r in n.components)
      e[r] = typeof t == "object" ? t[r] : t;
  return e;
}
function Zp(n) {
  for (; n; ) {
    if (n.record.aliasOf)
      return !0;
    n = n.parent;
  }
  return !1;
}
function Ak(n) {
  return n.reduce((e, t) => Be(e, t.meta), {});
}
function Qp(n, e) {
  const t = {};
  for (const r in n)
    t[r] = r in e ? e[r] : n[r];
  return t;
}
function lu(n, e) {
  return n.name === e.name && n.optional === e.optional && n.repeatable === e.repeatable;
}
function Mk(n, e) {
  for (const t of n.keys)
    if (!t.optional && !e.keys.find(lu.bind(null, t)))
      return Oe(`Alias "${e.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);
  for (const t of e.keys)
    if (!t.optional && !n.keys.find(lu.bind(null, t)))
      return Oe(`Alias "${e.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);
}
function Nk(n, e) {
  e && e.record.name && !n.name && !n.path && Oe(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Dk(n, e) {
  for (const t of e.keys)
    if (!n.keys.find(lu.bind(null, t)))
      return Oe(`Absolute path "${n.record.path}" must have the exact same param named "${t.name}" as its parent "${e.record.path}".`);
}
function Um(n, e) {
  return e.children.some((t) => t === n || Um(n, t));
}
const jm = /#/g, Rk = /&/g, Ik = /\//g, Pk = /=/g, Lk = /\?/g, Km = /\+/g, Bk = /%5B/g, $k = /%5D/g, qm = /%5E/g, Fk = /%60/g, Jm = /%7B/g, Vk = /%7C/g, Gm = /%7D/g, zk = /%20/g;
function $u(n) {
  return encodeURI("" + n).replace(Vk, "|").replace(Bk, "[").replace($k, "]");
}
function Hk(n) {
  return $u(n).replace(Jm, "{").replace(Gm, "}").replace(qm, "^");
}
function cu(n) {
  return $u(n).replace(Km, "%2B").replace(zk, "+").replace(jm, "%23").replace(Rk, "%26").replace(Fk, "`").replace(Jm, "{").replace(Gm, "}").replace(qm, "^");
}
function Wk(n) {
  return cu(n).replace(Pk, "%3D");
}
function Uk(n) {
  return $u(n).replace(jm, "%23").replace(Lk, "%3F");
}
function jk(n) {
  return n == null ? "" : Uk(n).replace(Ik, "%2F");
}
function ps(n) {
  try {
    return decodeURIComponent("" + n);
  } catch {
    process.env.NODE_ENV !== "production" && Oe(`Error decoding "${n}". Using original value`);
  }
  return "" + n;
}
function Kk(n) {
  const e = {};
  if (n === "" || n === "?")
    return e;
  const r = (n[0] === "?" ? n.slice(1) : n).split("&");
  for (let i = 0; i < r.length; ++i) {
    const o = r[i].replace(Km, " "), a = o.indexOf("="), c = ps(a < 0 ? o : o.slice(0, a)), u = a < 0 ? null : ps(o.slice(a + 1));
    if (c in e) {
      let d = e[c];
      vn(d) || (d = e[c] = [d]), d.push(u);
    } else
      e[c] = u;
  }
  return e;
}
function eh(n) {
  let e = "";
  for (let t in n) {
    const r = n[t];
    if (t = Wk(t), r == null) {
      r !== void 0 && (e += (e.length ? "&" : "") + t);
      continue;
    }
    (vn(r) ? r.map((o) => o && cu(o)) : [r && cu(r)]).forEach((o) => {
      o !== void 0 && (e += (e.length ? "&" : "") + t, o != null && (e += "=" + o));
    });
  }
  return e;
}
function qk(n) {
  const e = {};
  for (const t in n) {
    const r = n[t];
    r !== void 0 && (e[t] = vn(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return e;
}
const Jk = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), th = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Qa = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Xm = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), uu = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Jo() {
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
    list: () => n.slice(),
    reset: t
  };
}
function zr(n, e, t, r, i) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, c) => {
    const u = (h) => {
      h === !1 ? c(co(4, {
        from: t,
        to: e
      })) : h instanceof Error ? c(h) : pk(h) ? c(co(2, {
        from: e,
        to: h
      })) : (o && r.enterCallbacks[i] === o && typeof h == "function" && o.push(h), a());
    }, d = n.call(r && r.instances[i], e, t, process.env.NODE_ENV !== "production" ? Gk(u, e, t) : u);
    let p = Promise.resolve(d);
    if (n.length < 3 && (p = p.then(u)), process.env.NODE_ENV !== "production" && n.length > 2) {
      const h = `The "next" callback was never called inside of ${n.name ? '"' + n.name + '"' : ""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        p = p.then((g) => u._called ? g : (Oe(h), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        Oe(h), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    p.catch((h) => c(h));
  });
}
function Gk(n, e, t) {
  let r = 0;
  return function() {
    r++ === 1 && Oe(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), n._called = !0, r === 1 && n.apply(null, arguments);
  };
}
function Ac(n, e, t, r) {
  const i = [];
  for (const o of n) {
    process.env.NODE_ENV !== "production" && !o.components && !o.children.length && Oe(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in o.components) {
      let c = o.components[a];
      if (process.env.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Oe(`Component "${a}" in record with path "${o.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Oe(`Component "${a}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Oe(`Component "${a}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(e !== "beforeRouteEnter" && !o.instances[a]))
        if (Xk(c)) {
          const d = (c.__vccOpts || c)[e];
          d && i.push(zr(d, t, r, o, a));
        } else {
          let u = c();
          process.env.NODE_ENV !== "production" && !("catch" in u) && (Oe(`Component "${a}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), i.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));
            const p = G_(d) ? d.default : d;
            o.components[a] = p;
            const g = (p.__vccOpts || p)[e];
            return g && zr(g, t, r, o, a)();
          }));
        }
    }
  }
  return i;
}
function Xk(n) {
  return typeof n == "object" || "displayName" in n || "props" in n || "__vccOpts" in n;
}
function nh(n) {
  const e = Ei(Qa), t = Ei(Xm), r = De(() => e.resolve(io(n.to))), i = De(() => {
    const { matched: u } = r.value, { length: d } = u, p = u[d - 1], h = t.matched;
    if (!p || !h.length)
      return -1;
    const g = h.findIndex(Zr.bind(null, p));
    if (g > -1)
      return g;
    const y = rh(u[d - 2]);
    return d > 1 && rh(p) === y && h[h.length - 1].path !== y ? h.findIndex(Zr.bind(null, u[d - 2])) : g;
  }), o = De(() => i.value > -1 && eC(t.params, r.value.params)), a = De(() => i.value > -1 && i.value === t.matched.length - 1 && zm(t.params, r.value.params));
  function c(u = {}) {
    return Qk(u) ? e[io(n.replace) ? "replace" : "push"](
      io(n.to)
    ).catch(ns) : Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || !1) && kr) {
    const u = Pu();
    if (u) {
      const d = {
        route: r.value,
        isActive: o.value,
        isExactActive: a.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), $m(() => {
        d.route = r.value, d.isActive = o.value, d.isExactActive = a.value;
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: De(() => r.value.href),
    isActive: o,
    isExactActive: a,
    navigate: c
  };
}
const Yk = /* @__PURE__ */ ar({
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
  useLink: nh,
  setup(n, { slots: e }) {
    const t = Iu(nh(n)), { options: r } = Ei(Qa), i = De(() => ({
      [ih(n.activeClass, r.linkActiveClass, "router-link-active")]: t.isActive,
      [ih(n.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive
    }));
    return () => {
      const o = e.default && e.default(t);
      return n.custom ? o : Er("a", {
        "aria-current": t.isExactActive ? n.ariaCurrentValue : null,
        href: t.href,
        onClick: t.navigate,
        class: i.value
      }, o);
    };
  }
}), Zk = Yk;
function Qk(n) {
  if (!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey) && !n.defaultPrevented && !(n.button !== void 0 && n.button !== 0)) {
    if (n.currentTarget && n.currentTarget.getAttribute) {
      const e = n.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e))
        return;
    }
    return n.preventDefault && n.preventDefault(), !0;
  }
}
function eC(n, e) {
  for (const t in e) {
    const r = e[t], i = n[t];
    if (typeof r == "string") {
      if (r !== i)
        return !1;
    } else if (!vn(i) || i.length !== r.length || r.some((o, a) => o !== i[a]))
      return !1;
  }
  return !0;
}
function rh(n) {
  return n ? n.aliasOf ? n.aliasOf.path : n.path : "";
}
const ih = (n, e, t) => n != null ? n : e != null ? e : t, tC = /* @__PURE__ */ ar({
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
    process.env.NODE_ENV !== "production" && rC();
    const r = Ei(uu), i = De(() => n.route || r.value), o = Ei(th, 0), a = De(() => {
      let d = io(o);
      const { matched: p } = i.value;
      let h;
      for (; (h = p[d]) && !h.components; )
        d++;
      return d;
    }), c = De(() => i.value.matched[a.value]);
    Ec(th, De(() => a.value + 1)), Ec(Jk, c), Ec(uu, i);
    const u = xe();
    return Xa(() => [u.value, c.value, n.name], ([d, p, h], [g, y, b]) => {
      p && (p.instances[h] = d, y && y !== p && d && d === g && (p.leaveGuards.size || (p.leaveGuards = y.leaveGuards), p.updateGuards.size || (p.updateGuards = y.updateGuards))), d && p && (!y || !Zr(p, y) || !g) && (p.enterCallbacks[h] || []).forEach((_) => _(d));
    }, { flush: "post" }), () => {
      const d = i.value, p = n.name, h = c.value, g = h && h.components[p];
      if (!g)
        return oh(t.default, { Component: g, route: d });
      const y = h.props[p], b = y ? y === !0 ? d.params : typeof y == "function" ? y(d) : y : null, k = Er(g, Be({}, b, e, {
        onVnodeUnmounted: (A) => {
          A.component.isUnmounted && (h.instances[p] = null);
        },
        ref: u
      }));
      if ((process.env.NODE_ENV !== "production" || !1) && kr && k.ref) {
        const A = {
          depth: a.value,
          name: h.name,
          path: h.path,
          meta: h.meta
        };
        (vn(k.ref) ? k.ref.map((H) => H.i) : [k.ref.i]).forEach((H) => {
          H.__vrv_devtools = A;
        });
      }
      return oh(t.default, { Component: k, route: d }) || k;
    };
  }
});
function oh(n, e) {
  if (!n)
    return null;
  const t = n(e);
  return t.length === 1 ? t[0] : t;
}
const nC = tC;
function rC() {
  const n = Pu(), e = n.parent && n.parent.type.name, t = n.parent && n.parent.subTree && n.parent.subTree.type;
  if (e && (e === "KeepAlive" || e.includes("Transition")) && typeof t == "object" && t.name === "RouterView") {
    const r = e === "KeepAlive" ? "keep-alive" : "transition";
    Oe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function Go(n, e) {
  const t = Be({}, n, {
    matched: n.matched.map((r) => dC(r, ["instances", "children", "aliasOf"]))
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
function va(n) {
  return {
    _custom: {
      display: n
    }
  };
}
let iC = 0;
function oC(n, e, t) {
  if (e.__hasDevtools)
    return;
  e.__hasDevtools = !0;
  const r = iC++;
  J_({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: n
  }, (i) => {
    typeof i.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i.on.inspectComponent((p, h) => {
      p.instanceData && p.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Go(e.currentRoute.value, "Current Route")
      });
    }), i.on.visitComponentTree(({ treeNode: p, componentInstance: h }) => {
      if (h.__vrv_devtools) {
        const g = h.__vrv_devtools;
        p.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Ym
        });
      }
      vn(h.__vrl_devtools) && (h.__devtoolsApi = i, h.__vrl_devtools.forEach((g) => {
        let y = eg, b = "";
        g.isExactActive ? (y = Qm, b = "This is exactly active") : g.isActive && (y = Zm, b = "This link is active"), p.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: b,
          backgroundColor: y
        });
      }));
    }), Xa(e.currentRoute, () => {
      u(), i.notifyComponentUpdate(), i.sendInspectorTree(c), i.sendInspectorState(c);
    });
    const o = "router:navigations:" + r;
    i.addTimelineLayer({
      id: o,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), e.onError((p, h) => {
      i.addTimelineEvent({
        layerId: o,
        event: {
          title: "Error during Navigation",
          subtitle: h.fullPath,
          logType: "error",
          time: i.now(),
          data: { error: p },
          groupId: h.meta.__navigationId
        }
      });
    });
    let a = 0;
    e.beforeEach((p, h) => {
      const g = {
        guard: va("beforeEach"),
        from: Go(h, "Current Location during this navigation"),
        to: Go(p, "Target location")
      };
      Object.defineProperty(p.meta, "__navigationId", {
        value: a++
      }), i.addTimelineEvent({
        layerId: o,
        event: {
          time: i.now(),
          title: "Start of navigation",
          subtitle: p.fullPath,
          data: g,
          groupId: p.meta.__navigationId
        }
      });
    }), e.afterEach((p, h, g) => {
      const y = {
        guard: va("afterEach")
      };
      g ? (y.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, y.status = va("\u274C")) : y.status = va("\u2705"), y.from = Go(h, "Current Location during this navigation"), y.to = Go(p, "Target location"), i.addTimelineEvent({
        layerId: o,
        event: {
          title: "End of navigation",
          subtitle: p.fullPath,
          time: i.now(),
          data: y,
          logType: g ? "warning" : "default",
          groupId: p.meta.__navigationId
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
      if (!d)
        return;
      const p = d;
      let h = t.getRoutes().filter((g) => !g.parent || !g.parent.record.components);
      h.forEach(rg), p.filter && (h = h.filter((g) => fu(g, p.filter.toLowerCase()))), h.forEach((g) => ng(g, e.currentRoute.value)), p.rootNodes = h.map(tg);
    }
    let d;
    i.on.getInspectorTree((p) => {
      d = p, p.app === n && p.inspectorId === c && u();
    }), i.on.getInspectorState((p) => {
      if (p.app === n && p.inspectorId === c) {
        const g = t.getRoutes().find((y) => y.record.__vd_id === p.nodeId);
        g && (p.state = {
          options: aC(g)
        });
      }
    }), i.sendInspectorTree(c), i.sendInspectorState(c);
  });
}
function sC(n) {
  return n.optional ? n.repeatable ? "*" : "?" : n.repeatable ? "+" : "";
}
function aC(n) {
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
        display: n.keys.map((r) => `${r.name}${sC(r)}`).join(" "),
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
const Ym = 15485081, Zm = 2450411, Qm = 8702998, lC = 2282478, eg = 16486972, cC = 6710886;
function tg(n) {
  const e = [], { record: t } = n;
  t.name != null && e.push({
    label: String(t.name),
    textColor: 0,
    backgroundColor: lC
  }), t.aliasOf && e.push({
    label: "alias",
    textColor: 0,
    backgroundColor: eg
  }), n.__vd_match && e.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Ym
  }), n.__vd_exactActive && e.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Qm
  }), n.__vd_active && e.push({
    label: "active",
    textColor: 0,
    backgroundColor: Zm
  }), t.redirect && e.push({
    label: typeof t.redirect == "string" ? `redirect: ${t.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: cC
  });
  let r = t.__vd_id;
  return r == null && (r = String(uC++), t.__vd_id = r), {
    id: r,
    label: t.path,
    tags: e,
    children: n.children.map(tg)
  };
}
let uC = 0;
const fC = /^\/(.*)\/([a-z]*)$/;
function ng(n, e) {
  const t = e.matched.length && Zr(e.matched[e.matched.length - 1], n.record);
  n.__vd_exactActive = n.__vd_active = t, t || (n.__vd_active = e.matched.some((r) => Zr(r, n.record))), n.children.forEach((r) => ng(r, e));
}
function rg(n) {
  n.__vd_match = !1, n.children.forEach(rg);
}
function fu(n, e) {
  const t = String(n.re).match(fC);
  if (n.__vd_match = !1, !t || t.length < 3)
    return !1;
  if (new RegExp(t[1].replace(/\$$/, ""), t[2]).test(e))
    return n.children.forEach((a) => fu(a, e)), n.record.path !== "/" || e === "/" ? (n.__vd_match = n.re.test(e), !0) : !1;
  const i = n.record.path.toLowerCase(), o = ps(i);
  return !e.startsWith("/") && (o.includes(e) || i.includes(e)) || o.startsWith(e) || i.startsWith(e) || n.record.name && String(n.record.name).includes(e) ? !0 : n.children.some((a) => fu(a, e));
}
function dC(n, e) {
  const t = {};
  for (const r in n)
    e.includes(r) || (t[r] = n[r]);
  return t;
}
function pC(n) {
  const e = Ek(n.routes, n), t = n.parseQuery || Kk, r = n.stringifyQuery || eh, i = n.history;
  if (process.env.NODE_ENV !== "production" && !i)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const o = Jo(), a = Jo(), c = Jo(), u = Lm(Fr);
  let d = Fr;
  kr && n.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const p = Oc.bind(null, (R) => "" + R), h = Oc.bind(null, jk), g = Oc.bind(null, ps);
  function y(R, U) {
    let j, G;
    return Wm(R) ? (j = e.getRecordMatcher(R), G = U) : G = R, e.addRoute(G, j);
  }
  function b(R) {
    const U = e.getRecordMatcher(R);
    U ? e.removeRoute(U) : process.env.NODE_ENV !== "production" && Oe(`Cannot remove non-existent route "${String(R)}"`);
  }
  function _() {
    return e.getRoutes().map((R) => R.record);
  }
  function k(R) {
    return !!e.getRecordMatcher(R);
  }
  function A(R, U) {
    if (U = Be({}, U || u.value), typeof R == "string") {
      const ne = Tc(t, R, U.path), Ae = e.resolve({ path: ne.path }, U), Ft = i.createHref(ne.fullPath);
      return process.env.NODE_ENV !== "production" && (Ft.startsWith("//") ? Oe(`Location "${R}" resolved to "${Ft}". A resolved location cannot start with multiple slashes.`) : Ae.matched.length || Oe(`No match found for location with path "${R}"`)), Be(ne, Ae, {
        params: g(Ae.params),
        hash: ps(ne.hash),
        redirectedFrom: void 0,
        href: Ft
      });
    }
    let j;
    if ("path" in R)
      process.env.NODE_ENV !== "production" && "params" in R && !("name" in R) && Object.keys(R.params).length && Oe(`Path "${R.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), j = Be({}, R, {
        path: Tc(t, R.path, U.path).path
      });
    else {
      const ne = Be({}, R.params);
      for (const Ae in ne)
        ne[Ae] == null && delete ne[Ae];
      j = Be({}, R, {
        params: h(ne)
      }), U.params = h(U.params);
    }
    const G = e.resolve(j, U), ue = R.hash || "";
    process.env.NODE_ENV !== "production" && ue && !ue.startsWith("#") && Oe(`A \`hash\` should always start with the character "#". Replace "${ue}" with "#${ue}".`), G.params = p(g(G.params));
    const Ve = Z_(r, Be({}, R, {
      hash: Hk(ue),
      path: G.path
    })), le = i.createHref(Ve);
    return process.env.NODE_ENV !== "production" && (le.startsWith("//") ? Oe(`Location "${R}" resolved to "${le}". A resolved location cannot start with multiple slashes.`) : G.matched.length || Oe(`No match found for location with path "${"path" in R ? R.path : R}"`)), Be({
      fullPath: Ve,
      hash: ue,
      query: r === eh ? qk(R.query) : R.query || {}
    }, G, {
      redirectedFrom: void 0,
      href: le
    });
  }
  function D(R) {
    return typeof R == "string" ? Tc(t, R, u.value.path) : Be({}, R);
  }
  function H(R, U) {
    if (d !== R)
      return co(8, {
        from: U,
        to: R
      });
  }
  function C(R) {
    return te(R);
  }
  function q(R) {
    return C(Be(D(R), { replace: !0 }));
  }
  function B(R) {
    const U = R.matched[R.matched.length - 1];
    if (U && U.redirect) {
      const { redirect: j } = U;
      let G = typeof j == "function" ? j(R) : j;
      if (typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = D(G) : { path: G }, G.params = {}), process.env.NODE_ENV !== "production" && !("path" in G) && !("name" in G))
        throw Oe(`Invalid redirect found:
${JSON.stringify(G, null, 2)}
 when navigating to "${R.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Be({
        query: R.query,
        hash: R.hash,
        params: "path" in G ? {} : R.params
      }, G);
    }
  }
  function te(R, U) {
    const j = d = A(R), G = u.value, ue = R.state, Ve = R.force, le = R.replace === !0, ne = B(j);
    if (ne)
      return te(
        Be(D(ne), {
          state: typeof ne == "object" ? Be({}, ue, ne.state) : ue,
          force: Ve,
          replace: le
        }),
        U || j
      );
    const Ae = j;
    Ae.redirectedFrom = U;
    let Ft;
    return !Ve && Up(r, G, j) && (Ft = co(16, { to: Ae, from: G }), it(
      G,
      G,
      !0,
      !1
    )), (Ft ? Promise.resolve(Ft) : _e(Ae, G)).catch((Pe) => wr(Pe) ? wr(Pe, 2) ? Pe : dt(Pe) : Fe(Pe, Ae, G)).then((Pe) => {
      if (Pe) {
        if (wr(Pe, 2))
          return process.env.NODE_ENV !== "production" && Up(r, A(Pe.to), Ae) && U && (U._count = U._count ? U._count + 1 : 1) > 30 ? (Oe(`Detected a possibly infinite redirection in a navigation guard when going from "${G.fullPath}" to "${Ae.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : te(
            Be({
              replace: le
            }, D(Pe.to), {
              state: typeof Pe.to == "object" ? Be({}, ue, Pe.to.state) : ue,
              force: Ve
            }),
            U || Ae
          );
      } else
        Pe = We(Ae, G, !0, le, ue);
      return He(Ae, G, Pe), Pe;
    });
  }
  function Se(R, U) {
    const j = H(R, U);
    return j ? Promise.reject(j) : Promise.resolve();
  }
  function Z(R) {
    const U = Nt.values().next().value;
    return U && typeof U.runWithContext == "function" ? U.runWithContext(R) : R();
  }
  function _e(R, U) {
    let j;
    const [G, ue, Ve] = hC(R, U);
    j = Ac(G.reverse(), "beforeRouteLeave", R, U);
    for (const ne of G)
      ne.leaveGuards.forEach((Ae) => {
        j.push(zr(Ae, R, U));
      });
    const le = Se.bind(null, R, U);
    return j.push(le), st(j).then(() => {
      j = [];
      for (const ne of o.list())
        j.push(zr(ne, R, U));
      return j.push(le), st(j);
    }).then(() => {
      j = Ac(ue, "beforeRouteUpdate", R, U);
      for (const ne of ue)
        ne.updateGuards.forEach((Ae) => {
          j.push(zr(Ae, R, U));
        });
      return j.push(le), st(j);
    }).then(() => {
      j = [];
      for (const ne of Ve)
        if (ne.beforeEnter)
          if (vn(ne.beforeEnter))
            for (const Ae of ne.beforeEnter)
              j.push(zr(Ae, R, U));
          else
            j.push(zr(ne.beforeEnter, R, U));
      return j.push(le), st(j);
    }).then(() => (R.matched.forEach((ne) => ne.enterCallbacks = {}), j = Ac(Ve, "beforeRouteEnter", R, U), j.push(le), st(j))).then(() => {
      j = [];
      for (const ne of a.list())
        j.push(zr(ne, R, U));
      return j.push(le), st(j);
    }).catch((ne) => wr(ne, 8) ? ne : Promise.reject(ne));
  }
  function He(R, U, j) {
    c.list().forEach((G) => Z(() => G(R, U, j)));
  }
  function We(R, U, j, G, ue) {
    const Ve = H(R, U);
    if (Ve)
      return Ve;
    const le = U === Fr, ne = kr ? history.state : {};
    j && (G || le ? i.replace(R.fullPath, Be({
      scroll: le && ne && ne.scroll
    }, ue)) : i.push(R.fullPath, ue)), u.value = R, it(R, U, j, le), dt();
  }
  let Ie;
  function vt() {
    Ie || (Ie = i.listen((R, U, j) => {
      if (!ot.listening)
        return;
      const G = A(R), ue = B(G);
      if (ue) {
        te(Be(ue, { replace: !0 }), G).catch(ns);
        return;
      }
      d = G;
      const Ve = u.value;
      kr && sk(Kp(Ve.fullPath, j.delta), Za()), _e(G, Ve).catch((le) => wr(le, 12) ? le : wr(le, 2) ? (te(
        le.to,
        G
      ).then((ne) => {
        wr(ne, 20) && !j.delta && j.type === ds.pop && i.go(-1, !1);
      }).catch(ns), Promise.reject()) : (j.delta && i.go(-j.delta, !1), Fe(le, G, Ve))).then((le) => {
        le = le || We(
          G,
          Ve,
          !1
        ), le && (j.delta && !wr(le, 8) ? i.go(-j.delta, !1) : j.type === ds.pop && wr(le, 20) && i.go(-1, !1)), He(G, Ve, le);
      }).catch(ns);
    }));
  }
  let ft = Jo(), rt = Jo(), Ue;
  function Fe(R, U, j) {
    dt(R);
    const G = rt.list();
    return G.length ? G.forEach((ue) => ue(R, U, j)) : (process.env.NODE_ENV !== "production" && Oe("uncaught error during route navigation:"), console.error(R)), Promise.reject(R);
  }
  function Zt() {
    return Ue && u.value !== Fr ? Promise.resolve() : new Promise((R, U) => {
      ft.add([R, U]);
    });
  }
  function dt(R) {
    return Ue || (Ue = !R, vt(), ft.list().forEach(([U, j]) => R ? j(R) : U()), ft.reset()), R;
  }
  function it(R, U, j, G) {
    const { scrollBehavior: ue } = n;
    if (!kr || !ue)
      return Promise.resolve();
    const Ve = !j && ak(Kp(R.fullPath, 0)) || (G || !j) && history.state && history.state.scroll || null;
    return Bm().then(() => ue(R, U, Ve)).then((le) => le && ok(le)).catch((le) => Fe(le, R, U));
  }
  const Mt = (R) => i.go(R);
  let cn;
  const Nt = /* @__PURE__ */ new Set(), ot = {
    currentRoute: u,
    listening: !0,
    addRoute: y,
    removeRoute: b,
    hasRoute: k,
    getRoutes: _,
    resolve: A,
    options: n,
    push: C,
    replace: q,
    go: Mt,
    back: () => Mt(-1),
    forward: () => Mt(1),
    beforeEach: o.add,
    beforeResolve: a.add,
    afterEach: c.add,
    onError: rt.add,
    isReady: Zt,
    install(R) {
      const U = this;
      R.component("RouterLink", Zk), R.component("RouterView", nC), R.config.globalProperties.$router = U, Object.defineProperty(R.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => io(u)
      }), kr && !cn && u.value === Fr && (cn = !0, C(i.location).catch((ue) => {
        process.env.NODE_ENV !== "production" && Oe("Unexpected error when starting the router:", ue);
      }));
      const j = {};
      for (const ue in Fr)
        Object.defineProperty(j, ue, {
          get: () => u.value[ue],
          enumerable: !0
        });
      R.provide(Qa, U), R.provide(Xm, E_(j)), R.provide(uu, u);
      const G = R.unmount;
      Nt.add(R), R.unmount = function() {
        Nt.delete(R), Nt.size < 1 && (d = Fr, Ie && Ie(), Ie = null, u.value = Fr, cn = !1, Ue = !1), G();
      }, (process.env.NODE_ENV !== "production" || !1) && kr && oC(R, U, e);
    }
  };
  function st(R) {
    return R.reduce((U, j) => U.then(() => Z(j)), Promise.resolve());
  }
  return ot;
}
function hC(n, e) {
  const t = [], r = [], i = [], o = Math.max(e.matched.length, n.matched.length);
  for (let a = 0; a < o; a++) {
    const c = e.matched[a];
    c && (n.matched.find((d) => Zr(d, c)) ? r.push(c) : t.push(c));
    const u = n.matched[a];
    u && (e.matched.find((d) => Zr(d, u)) || i.push(u));
  }
  return [t, r, i];
}
function ig() {
  return Ei(Qa);
}
function mC(n) {
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
const Ma = mC(), og = /* @__PURE__ */ new Map(), sh = {
  x: ["left", "center", "right"],
  y: ["top", "bottom"]
}, gC = ((n) => () => n++)(0), yC = (n) => typeof n != "string" ? [] : n.split(/\s+/gi).filter((e) => e), vC = (n) => {
  typeof n == "string" && (n = yC(n));
  let e = null, t = null;
  return n.forEach((r) => {
    sh.y.indexOf(r) !== -1 && (t = r), sh.x.indexOf(r) !== -1 && (e = r);
  }), { x: e, y: t };
};
class bC {
  constructor(e, t, r) {
    this.remaining = t, this.callback = e, this.notifyItem = r, this.resume();
  }
  pause() {
    clearTimeout(this.notifyItem.timer), this.remaining -= Date.now() - this.start;
  }
  resume() {
    this.start = Date.now(), clearTimeout(this.notifyItem.timer), this.notifyItem.timer = setTimeout(this.callback, this.remaining);
  }
}
const Mc = {
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
}, wC = ar({
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
}), Fu = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
};
function xC(n, e, t, r, i, o) {
  return F(), gt(Fm, {
    tag: "span",
    css: !1,
    onEnter: n.enter,
    onLeave: n.leave,
    onAfterLeave: n.afterLeave
  }, {
    default: Pt(() => [
      Lu(n.$slots, "default")
    ]),
    _: 3
  }, 8, ["onEnter", "onLeave", "onAfterLeave"]);
}
const SC = /* @__PURE__ */ Fu(wC, [["render", xC]]), _C = ar({
  name: "css-group",
  inheritAttrs: !1,
  props: {
    name: { type: String, required: !0 }
  }
});
function kC(n, e, t, r, i, o) {
  return F(), gt(Fm, {
    tag: "span",
    name: n.name
  }, {
    default: Pt(() => [
      Lu(n.$slots, "default")
    ]),
    _: 3
  }, 8, ["name"]);
}
const CC = /* @__PURE__ */ Fu(_C, [["render", kC]]), Nc = "[-+]?[0-9]*.?[0-9]+", ah = [
  {
    name: "px",
    regexp: new RegExp(`^${Nc}px$`)
  },
  {
    name: "%",
    regexp: new RegExp(`^${Nc}%$`)
  },
  {
    name: "px",
    regexp: new RegExp(`^${Nc}$`)
  }
], EC = (n) => {
  if (n === "auto")
    return {
      type: n,
      value: 0
    };
  for (let e = 0; e < ah.length; e++) {
    const t = ah[e];
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
}, OC = (n) => {
  switch (typeof n) {
    case "number":
      return { type: "px", value: n };
    case "string":
      return EC(n);
    default:
      return { type: "", value: n };
  }
}, ba = {
  IDLE: 0,
  DESTROYED: 2
}, TC = ar({
  name: "notifications",
  components: {
    VelocityGroup: SC,
    CssGroup: CC
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
      default: Mc.position
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
      default: Mc.velocityAnimation
    },
    animationName: {
      type: String,
      default: Mc.cssAnimation
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
  emits: ["click", "destroy", "start"],
  data() {
    return {
      list: [],
      velocity: og.get("velocity"),
      timerControl: null
    };
  },
  computed: {
    actualWidth() {
      return OC(this.width);
    },
    isVA() {
      return this.animationType === "velocity";
    },
    componentName() {
      return this.isVA ? "velocity-group" : "css-group";
    },
    styles() {
      const { x: n, y: e } = vC(this.position), t = this.actualWidth.value, r = this.actualWidth.type, i = {
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
    Ma.on("add", this.addItem), Ma.on("close", this.closeItem);
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
      const e = typeof n.duration == "number" ? n.duration : this.duration, t = typeof n.speed == "number" ? n.speed : this.speed, r = typeof n.ignoreDuplicates == "boolean" ? n.ignoreDuplicates : this.ignoreDuplicates, { title: i, text: o, type: a, data: c, id: u } = n, d = {
        id: u || gC(),
        title: i,
        text: o,
        type: a,
        state: ba.IDLE,
        speed: t,
        length: e + 2 * t,
        data: c
      };
      e >= 0 && (this.timerControl = new bC(() => this.destroy(d), d.length, d));
      const p = this.reverse ? !this.botToTop : this.botToTop;
      let h = -1;
      const g = this.active.some((y) => y.title === n.title && y.text === n.text);
      (!r || !g) && (p ? (this.list.push(d), this.$emit("start", d), this.active.length > this.max && (h = 0)) : (this.list.unshift(d), this.$emit("start", d), this.active.length > this.max && (h = this.active.length - 1)), h !== -1 && this.destroy(this.active[h]));
    },
    closeItem(n) {
      this.destroyById(n);
    },
    notifyClass(n) {
      return [
        "vue-notification-template",
        this.classes,
        n.type || ""
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
}), AC = ["data-id"], MC = ["onClick"], NC = ["innerHTML"], DC = ["innerHTML"];
function RC(n, e, t, r, i, o) {
  return F(), W("div", {
    class: "vue-notification-group",
    style: zp(n.styles)
  }, [
    (F(), gt(O_(n.componentName), {
      name: n.animationName,
      onEnter: n.enter,
      onLeave: n.leave,
      onAfterLeave: n.clean
    }, {
      default: Pt(() => [
        (F(!0), W(Ne, null, wt(n.active, (a) => (F(), W("div", {
          key: a.id,
          class: "vue-notification-wrapper",
          style: zp(n.notifyWrapperStyle(a)),
          "data-id": a.id,
          onMouseenter: e[0] || (e[0] = (...c) => n.pauseTimeout && n.pauseTimeout(...c)),
          onMouseleave: e[1] || (e[1] = (...c) => n.resumeTimeout && n.resumeTimeout(...c))
        }, [
          Lu(n.$slots, "body", {
            class: gi([n.classes, a.type]),
            item: a,
            close: () => n.destroy(a)
          }, () => [
            E("div", {
              class: gi(n.notifyClass(a)),
              onClick: (c) => n.destroyIfNecessary(a)
            }, [
              a.title ? (F(), W("div", {
                key: 0,
                class: "notification-title",
                innerHTML: a.title
              }, null, 8, NC)) : Kt("", !0),
              E("div", {
                class: "notification-content",
                innerHTML: a.text
              }, null, 8, DC)
            ], 10, MC)
          ])
        ], 44, AC))), 128))
      ]),
      _: 3
    }, 40, ["name", "onEnter", "onLeave", "onAfterLeave"]))
  ], 4);
}
const IC = /* @__PURE__ */ Fu(TC, [["render", RC]]), de = (n) => {
  typeof n == "string" && (n = { title: "", text: n }), typeof n == "object" && Ma.emit("add", n);
};
de.close = (n) => {
  Ma.emit("close", n);
};
function PC(n, e = {}) {
  Object.entries(e).forEach((r) => og.set(...r));
  const t = e.name || "notify";
  n.config.globalProperties["$" + t] = de, n.component(e.componentName || "Notifications", IC);
}
const LC = {
  install: PC
};
(function() {
  var n;
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.nonce = (n = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : n.content, e.appendChild(document.createTextNode(".vue-notification-group{display:block;position:fixed;z-index:5000}.vue-notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification-title{font-weight:600}.vue-notification-template{display:block;box-sizing:border-box;background:white;text-align:left}.vue-notification{display:block;box-sizing:border-box;text-align:left;font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44A4FC;border-left:5px solid #187FE7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#E54D42;border-left-color:#b82e24}.vue-notification.success{background:#68CD86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter-from,.vn-fade-leave-to{opacity:0}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var Xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qt = { exports: {} };
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
    var t, r = "4.17.21", i = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", a = "Expected a function", c = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", d = 500, p = "__lodash_placeholder__", h = 1, g = 2, y = 4, b = 1, _ = 2, k = 1, A = 2, D = 4, H = 8, C = 16, q = 32, B = 64, te = 128, Se = 256, Z = 512, _e = 30, He = "...", We = 800, Ie = 16, vt = 1, ft = 2, rt = 3, Ue = 1 / 0, Fe = 9007199254740991, Zt = 17976931348623157e292, dt = 0 / 0, it = 4294967295, Mt = it - 1, cn = it >>> 1, Nt = [
      ["ary", te],
      ["bind", k],
      ["bindKey", A],
      ["curry", H],
      ["curryRight", C],
      ["flip", Z],
      ["partial", q],
      ["partialRight", B],
      ["rearg", Se]
    ], ot = "[object Arguments]", st = "[object Array]", R = "[object AsyncFunction]", U = "[object Boolean]", j = "[object Date]", G = "[object DOMException]", ue = "[object Error]", Ve = "[object Function]", le = "[object GeneratorFunction]", ne = "[object Map]", Ae = "[object Number]", Ft = "[object Null]", Pe = "[object Object]", ii = "[object Promise]", Ni = "[object Proxy]", Vt = "[object RegExp]", ct = "[object Set]", Pn = "[object String]", wn = "[object Symbol]", oi = "[object Undefined]", jn = "[object WeakMap]", Di = "[object WeakSet]", Kn = "[object ArrayBuffer]", Ln = "[object DataView]", Co = "[object Float32Array]", Eo = "[object Float64Array]", Oo = "[object Int8Array]", To = "[object Int16Array]", Ao = "[object Int32Array]", I = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", re = "[object Uint16Array]", Me = "[object Uint32Array]", Ce = /\b__p \+= '';/g, kt = /\b(__p \+=) '' \+/g, Qt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, cr = /&(?:amp|lt|gt|quot|#39);/g, Mo = /[&<>"']/g, ur = RegExp(cr.source), No = RegExp(Mo.source), Ri = /<%-([\s\S]+?)%>/g, Ar = /<%([\s\S]+?)%>/g, As = /<%=([\s\S]+?)%>/g, Do = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ii = /^\w*$/, nv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hl = /[\\^$.*+?()[\]{}|]/g, rv = RegExp(hl.source), ml = /^\s+/, iv = /\s/, ov = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, sv = /\{\n\/\* \[wrapped with (.+)\] \*/, av = /,? & /, lv = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, cv = /[()=,{}\[\]\/\s]/, uv = /\\(\\)?/g, fv = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, mf = /\w*$/, dv = /^[-+]0x[0-9a-f]+$/i, pv = /^0b[01]+$/i, hv = /^\[object .+?Constructor\]$/, mv = /^0o[0-7]+$/i, gv = /^(?:0|[1-9]\d*)$/, yv = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ms = /($^)/, vv = /['\n\r\u2028\u2029\\]/g, Ns = "\\ud800-\\udfff", bv = "\\u0300-\\u036f", wv = "\\ufe20-\\ufe2f", xv = "\\u20d0-\\u20ff", gf = bv + wv + xv, yf = "\\u2700-\\u27bf", vf = "a-z\\xdf-\\xf6\\xf8-\\xff", Sv = "\\xac\\xb1\\xd7\\xf7", _v = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", kv = "\\u2000-\\u206f", Cv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", bf = "A-Z\\xc0-\\xd6\\xd8-\\xde", wf = "\\ufe0e\\ufe0f", xf = Sv + _v + kv + Cv, gl = "['\u2019]", Ev = "[" + Ns + "]", Sf = "[" + xf + "]", Ds = "[" + gf + "]", _f = "\\d+", Ov = "[" + yf + "]", kf = "[" + vf + "]", Cf = "[^" + Ns + xf + _f + yf + vf + bf + "]", yl = "\\ud83c[\\udffb-\\udfff]", Tv = "(?:" + Ds + "|" + yl + ")", Ef = "[^" + Ns + "]", vl = "(?:\\ud83c[\\udde6-\\uddff]){2}", bl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Pi = "[" + bf + "]", Of = "\\u200d", Tf = "(?:" + kf + "|" + Cf + ")", Av = "(?:" + Pi + "|" + Cf + ")", Af = "(?:" + gl + "(?:d|ll|m|re|s|t|ve))?", Mf = "(?:" + gl + "(?:D|LL|M|RE|S|T|VE))?", Nf = Tv + "?", Df = "[" + wf + "]?", Mv = "(?:" + Of + "(?:" + [Ef, vl, bl].join("|") + ")" + Df + Nf + ")*", Nv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Dv = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Rf = Df + Nf + Mv, Rv = "(?:" + [Ov, vl, bl].join("|") + ")" + Rf, Iv = "(?:" + [Ef + Ds + "?", Ds, vl, bl, Ev].join("|") + ")", Pv = RegExp(gl, "g"), Lv = RegExp(Ds, "g"), wl = RegExp(yl + "(?=" + yl + ")|" + Iv + Rf, "g"), Bv = RegExp([
      Pi + "?" + kf + "+" + Af + "(?=" + [Sf, Pi, "$"].join("|") + ")",
      Av + "+" + Mf + "(?=" + [Sf, Pi + Tf, "$"].join("|") + ")",
      Pi + "?" + Tf + "+" + Af,
      Pi + "+" + Mf,
      Dv,
      Nv,
      _f,
      Rv
    ].join("|"), "g"), $v = RegExp("[" + Of + Ns + gf + wf + "]"), Fv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Vv = [
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
    ], zv = -1, Xe = {};
    Xe[Co] = Xe[Eo] = Xe[Oo] = Xe[To] = Xe[Ao] = Xe[I] = Xe[Y] = Xe[re] = Xe[Me] = !0, Xe[ot] = Xe[st] = Xe[Kn] = Xe[U] = Xe[Ln] = Xe[j] = Xe[ue] = Xe[Ve] = Xe[ne] = Xe[Ae] = Xe[Pe] = Xe[Vt] = Xe[ct] = Xe[Pn] = Xe[jn] = !1;
    var Ge = {};
    Ge[ot] = Ge[st] = Ge[Kn] = Ge[Ln] = Ge[U] = Ge[j] = Ge[Co] = Ge[Eo] = Ge[Oo] = Ge[To] = Ge[Ao] = Ge[ne] = Ge[Ae] = Ge[Pe] = Ge[Vt] = Ge[ct] = Ge[Pn] = Ge[wn] = Ge[I] = Ge[Y] = Ge[re] = Ge[Me] = !0, Ge[ue] = Ge[Ve] = Ge[jn] = !1;
    var Hv = {
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
    }, Wv = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Uv = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, jv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Kv = parseFloat, qv = parseInt, If = typeof Xo == "object" && Xo && Xo.Object === Object && Xo, Jv = typeof self == "object" && self && self.Object === Object && self, Ct = If || Jv || Function("return this")(), xl = e && !e.nodeType && e, si = xl && !0 && n && !n.nodeType && n, Pf = si && si.exports === xl, Sl = Pf && If.process, xn = function() {
      try {
        var T = si && si.require && si.require("util").types;
        return T || Sl && Sl.binding && Sl.binding("util");
      } catch {
      }
    }(), Lf = xn && xn.isArrayBuffer, Bf = xn && xn.isDate, $f = xn && xn.isMap, Ff = xn && xn.isRegExp, Vf = xn && xn.isSet, zf = xn && xn.isTypedArray;
    function un(T, P, N) {
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
    function Gv(T, P, N, X) {
      for (var ce = -1, Le = T == null ? 0 : T.length; ++ce < Le; ) {
        var pt = T[ce];
        P(X, pt, N(pt), T);
      }
      return X;
    }
    function Sn(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length; ++N < X && P(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Xv(T, P) {
      for (var N = T == null ? 0 : T.length; N-- && P(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Hf(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length; ++N < X; )
        if (!P(T[N], N, T))
          return !1;
      return !0;
    }
    function Mr(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length, ce = 0, Le = []; ++N < X; ) {
        var pt = T[N];
        P(pt, N, T) && (Le[ce++] = pt);
      }
      return Le;
    }
    function Rs(T, P) {
      var N = T == null ? 0 : T.length;
      return !!N && Li(T, P, 0) > -1;
    }
    function _l(T, P, N) {
      for (var X = -1, ce = T == null ? 0 : T.length; ++X < ce; )
        if (N(P, T[X]))
          return !0;
      return !1;
    }
    function Ye(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length, ce = Array(X); ++N < X; )
        ce[N] = P(T[N], N, T);
      return ce;
    }
    function Nr(T, P) {
      for (var N = -1, X = P.length, ce = T.length; ++N < X; )
        T[ce + N] = P[N];
      return T;
    }
    function kl(T, P, N, X) {
      var ce = -1, Le = T == null ? 0 : T.length;
      for (X && Le && (N = T[++ce]); ++ce < Le; )
        N = P(N, T[ce], ce, T);
      return N;
    }
    function Yv(T, P, N, X) {
      var ce = T == null ? 0 : T.length;
      for (X && ce && (N = T[--ce]); ce--; )
        N = P(N, T[ce], ce, T);
      return N;
    }
    function Cl(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length; ++N < X; )
        if (P(T[N], N, T))
          return !0;
      return !1;
    }
    var Zv = El("length");
    function Qv(T) {
      return T.split("");
    }
    function e0(T) {
      return T.match(lv) || [];
    }
    function Wf(T, P, N) {
      var X;
      return N(T, function(ce, Le, pt) {
        if (P(ce, Le, pt))
          return X = Le, !1;
      }), X;
    }
    function Is(T, P, N, X) {
      for (var ce = T.length, Le = N + (X ? 1 : -1); X ? Le-- : ++Le < ce; )
        if (P(T[Le], Le, T))
          return Le;
      return -1;
    }
    function Li(T, P, N) {
      return P === P ? d0(T, P, N) : Is(T, Uf, N);
    }
    function t0(T, P, N, X) {
      for (var ce = N - 1, Le = T.length; ++ce < Le; )
        if (X(T[ce], P))
          return ce;
      return -1;
    }
    function Uf(T) {
      return T !== T;
    }
    function jf(T, P) {
      var N = T == null ? 0 : T.length;
      return N ? Tl(T, P) / N : dt;
    }
    function El(T) {
      return function(P) {
        return P == null ? t : P[T];
      };
    }
    function Ol(T) {
      return function(P) {
        return T == null ? t : T[P];
      };
    }
    function Kf(T, P, N, X, ce) {
      return ce(T, function(Le, pt, qe) {
        N = X ? (X = !1, Le) : P(N, Le, pt, qe);
      }), N;
    }
    function n0(T, P) {
      var N = T.length;
      for (T.sort(P); N--; )
        T[N] = T[N].value;
      return T;
    }
    function Tl(T, P) {
      for (var N, X = -1, ce = T.length; ++X < ce; ) {
        var Le = P(T[X]);
        Le !== t && (N = N === t ? Le : N + Le);
      }
      return N;
    }
    function Al(T, P) {
      for (var N = -1, X = Array(T); ++N < T; )
        X[N] = P(N);
      return X;
    }
    function r0(T, P) {
      return Ye(P, function(N) {
        return [N, T[N]];
      });
    }
    function qf(T) {
      return T && T.slice(0, Yf(T) + 1).replace(ml, "");
    }
    function fn(T) {
      return function(P) {
        return T(P);
      };
    }
    function Ml(T, P) {
      return Ye(P, function(N) {
        return T[N];
      });
    }
    function Ro(T, P) {
      return T.has(P);
    }
    function Jf(T, P) {
      for (var N = -1, X = T.length; ++N < X && Li(P, T[N], 0) > -1; )
        ;
      return N;
    }
    function Gf(T, P) {
      for (var N = T.length; N-- && Li(P, T[N], 0) > -1; )
        ;
      return N;
    }
    function i0(T, P) {
      for (var N = T.length, X = 0; N--; )
        T[N] === P && ++X;
      return X;
    }
    var o0 = Ol(Hv), s0 = Ol(Wv);
    function a0(T) {
      return "\\" + jv[T];
    }
    function l0(T, P) {
      return T == null ? t : T[P];
    }
    function Bi(T) {
      return $v.test(T);
    }
    function c0(T) {
      return Fv.test(T);
    }
    function u0(T) {
      for (var P, N = []; !(P = T.next()).done; )
        N.push(P.value);
      return N;
    }
    function Nl(T) {
      var P = -1, N = Array(T.size);
      return T.forEach(function(X, ce) {
        N[++P] = [ce, X];
      }), N;
    }
    function Xf(T, P) {
      return function(N) {
        return T(P(N));
      };
    }
    function Dr(T, P) {
      for (var N = -1, X = T.length, ce = 0, Le = []; ++N < X; ) {
        var pt = T[N];
        (pt === P || pt === p) && (T[N] = p, Le[ce++] = N);
      }
      return Le;
    }
    function Ps(T) {
      var P = -1, N = Array(T.size);
      return T.forEach(function(X) {
        N[++P] = X;
      }), N;
    }
    function f0(T) {
      var P = -1, N = Array(T.size);
      return T.forEach(function(X) {
        N[++P] = [X, X];
      }), N;
    }
    function d0(T, P, N) {
      for (var X = N - 1, ce = T.length; ++X < ce; )
        if (T[X] === P)
          return X;
      return -1;
    }
    function p0(T, P, N) {
      for (var X = N + 1; X--; )
        if (T[X] === P)
          return X;
      return X;
    }
    function $i(T) {
      return Bi(T) ? m0(T) : Zv(T);
    }
    function Bn(T) {
      return Bi(T) ? g0(T) : Qv(T);
    }
    function Yf(T) {
      for (var P = T.length; P-- && iv.test(T.charAt(P)); )
        ;
      return P;
    }
    var h0 = Ol(Uv);
    function m0(T) {
      for (var P = wl.lastIndex = 0; wl.test(T); )
        ++P;
      return P;
    }
    function g0(T) {
      return T.match(wl) || [];
    }
    function y0(T) {
      return T.match(Bv) || [];
    }
    var v0 = function T(P) {
      P = P == null ? Ct : Fi.defaults(Ct.Object(), P, Fi.pick(Ct, Vv));
      var N = P.Array, X = P.Date, ce = P.Error, Le = P.Function, pt = P.Math, qe = P.Object, Dl = P.RegExp, b0 = P.String, _n = P.TypeError, Ls = N.prototype, w0 = Le.prototype, Vi = qe.prototype, Bs = P["__core-js_shared__"], $s = w0.toString, je = Vi.hasOwnProperty, x0 = 0, Zf = function() {
        var s = /[^.]+$/.exec(Bs && Bs.keys && Bs.keys.IE_PROTO || "");
        return s ? "Symbol(src)_1." + s : "";
      }(), Fs = Vi.toString, S0 = $s.call(qe), _0 = Ct._, k0 = Dl(
        "^" + $s.call(je).replace(hl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Vs = Pf ? P.Buffer : t, Rr = P.Symbol, zs = P.Uint8Array, Qf = Vs ? Vs.allocUnsafe : t, Hs = Xf(qe.getPrototypeOf, qe), ed = qe.create, td = Vi.propertyIsEnumerable, Ws = Ls.splice, nd = Rr ? Rr.isConcatSpreadable : t, Io = Rr ? Rr.iterator : t, ai = Rr ? Rr.toStringTag : t, Us = function() {
        try {
          var s = di(qe, "defineProperty");
          return s({}, "", {}), s;
        } catch {
        }
      }(), C0 = P.clearTimeout !== Ct.clearTimeout && P.clearTimeout, E0 = X && X.now !== Ct.Date.now && X.now, O0 = P.setTimeout !== Ct.setTimeout && P.setTimeout, js = pt.ceil, Ks = pt.floor, Rl = qe.getOwnPropertySymbols, T0 = Vs ? Vs.isBuffer : t, rd = P.isFinite, A0 = Ls.join, M0 = Xf(qe.keys, qe), ht = pt.max, Dt = pt.min, N0 = X.now, D0 = P.parseInt, id = pt.random, R0 = Ls.reverse, Il = di(P, "DataView"), Po = di(P, "Map"), Pl = di(P, "Promise"), zi = di(P, "Set"), Lo = di(P, "WeakMap"), Bo = di(qe, "create"), qs = Lo && new Lo(), Hi = {}, I0 = pi(Il), P0 = pi(Po), L0 = pi(Pl), B0 = pi(zi), $0 = pi(Lo), Js = Rr ? Rr.prototype : t, $o = Js ? Js.valueOf : t, od = Js ? Js.toString : t;
      function w(s) {
        if (tt(s) && !fe(s) && !(s instanceof ke)) {
          if (s instanceof kn)
            return s;
          if (je.call(s, "__wrapped__"))
            return sp(s);
        }
        return new kn(s);
      }
      var Wi = function() {
        function s() {
        }
        return function(l) {
          if (!Ze(l))
            return {};
          if (ed)
            return ed(l);
          s.prototype = l;
          var f = new s();
          return s.prototype = t, f;
        };
      }();
      function Gs() {
      }
      function kn(s, l) {
        this.__wrapped__ = s, this.__actions__ = [], this.__chain__ = !!l, this.__index__ = 0, this.__values__ = t;
      }
      w.templateSettings = {
        escape: Ri,
        evaluate: Ar,
        interpolate: As,
        variable: "",
        imports: {
          _: w
        }
      }, w.prototype = Gs.prototype, w.prototype.constructor = w, kn.prototype = Wi(Gs.prototype), kn.prototype.constructor = kn;
      function ke(s) {
        this.__wrapped__ = s, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = it, this.__views__ = [];
      }
      function F0() {
        var s = new ke(this.__wrapped__);
        return s.__actions__ = en(this.__actions__), s.__dir__ = this.__dir__, s.__filtered__ = this.__filtered__, s.__iteratees__ = en(this.__iteratees__), s.__takeCount__ = this.__takeCount__, s.__views__ = en(this.__views__), s;
      }
      function V0() {
        if (this.__filtered__) {
          var s = new ke(this);
          s.__dir__ = -1, s.__filtered__ = !0;
        } else
          s = this.clone(), s.__dir__ *= -1;
        return s;
      }
      function z0() {
        var s = this.__wrapped__.value(), l = this.__dir__, f = fe(s), m = l < 0, v = f ? s.length : 0, x = Qb(0, v, this.__views__), S = x.start, O = x.end, M = O - S, L = m ? O : S - 1, $ = this.__iteratees__, V = $.length, K = 0, ee = Dt(M, this.__takeCount__);
        if (!f || !m && v == M && ee == M)
          return Ad(s, this.__actions__);
        var se = [];
        e:
          for (; M-- && K < ee; ) {
            L += l;
            for (var me = -1, ae = s[L]; ++me < V; ) {
              var we = $[me], Ee = we.iteratee, hn = we.type, Wt = Ee(ae);
              if (hn == ft)
                ae = Wt;
              else if (!Wt) {
                if (hn == vt)
                  continue e;
                break e;
              }
            }
            se[K++] = ae;
          }
        return se;
      }
      ke.prototype = Wi(Gs.prototype), ke.prototype.constructor = ke;
      function li(s) {
        var l = -1, f = s == null ? 0 : s.length;
        for (this.clear(); ++l < f; ) {
          var m = s[l];
          this.set(m[0], m[1]);
        }
      }
      function H0() {
        this.__data__ = Bo ? Bo(null) : {}, this.size = 0;
      }
      function W0(s) {
        var l = this.has(s) && delete this.__data__[s];
        return this.size -= l ? 1 : 0, l;
      }
      function U0(s) {
        var l = this.__data__;
        if (Bo) {
          var f = l[s];
          return f === u ? t : f;
        }
        return je.call(l, s) ? l[s] : t;
      }
      function j0(s) {
        var l = this.__data__;
        return Bo ? l[s] !== t : je.call(l, s);
      }
      function K0(s, l) {
        var f = this.__data__;
        return this.size += this.has(s) ? 0 : 1, f[s] = Bo && l === t ? u : l, this;
      }
      li.prototype.clear = H0, li.prototype.delete = W0, li.prototype.get = U0, li.prototype.has = j0, li.prototype.set = K0;
      function fr(s) {
        var l = -1, f = s == null ? 0 : s.length;
        for (this.clear(); ++l < f; ) {
          var m = s[l];
          this.set(m[0], m[1]);
        }
      }
      function q0() {
        this.__data__ = [], this.size = 0;
      }
      function J0(s) {
        var l = this.__data__, f = Xs(l, s);
        if (f < 0)
          return !1;
        var m = l.length - 1;
        return f == m ? l.pop() : Ws.call(l, f, 1), --this.size, !0;
      }
      function G0(s) {
        var l = this.__data__, f = Xs(l, s);
        return f < 0 ? t : l[f][1];
      }
      function X0(s) {
        return Xs(this.__data__, s) > -1;
      }
      function Y0(s, l) {
        var f = this.__data__, m = Xs(f, s);
        return m < 0 ? (++this.size, f.push([s, l])) : f[m][1] = l, this;
      }
      fr.prototype.clear = q0, fr.prototype.delete = J0, fr.prototype.get = G0, fr.prototype.has = X0, fr.prototype.set = Y0;
      function dr(s) {
        var l = -1, f = s == null ? 0 : s.length;
        for (this.clear(); ++l < f; ) {
          var m = s[l];
          this.set(m[0], m[1]);
        }
      }
      function Z0() {
        this.size = 0, this.__data__ = {
          hash: new li(),
          map: new (Po || fr)(),
          string: new li()
        };
      }
      function Q0(s) {
        var l = la(this, s).delete(s);
        return this.size -= l ? 1 : 0, l;
      }
      function eb(s) {
        return la(this, s).get(s);
      }
      function tb(s) {
        return la(this, s).has(s);
      }
      function nb(s, l) {
        var f = la(this, s), m = f.size;
        return f.set(s, l), this.size += f.size == m ? 0 : 1, this;
      }
      dr.prototype.clear = Z0, dr.prototype.delete = Q0, dr.prototype.get = eb, dr.prototype.has = tb, dr.prototype.set = nb;
      function ci(s) {
        var l = -1, f = s == null ? 0 : s.length;
        for (this.__data__ = new dr(); ++l < f; )
          this.add(s[l]);
      }
      function rb(s) {
        return this.__data__.set(s, u), this;
      }
      function ib(s) {
        return this.__data__.has(s);
      }
      ci.prototype.add = ci.prototype.push = rb, ci.prototype.has = ib;
      function $n(s) {
        var l = this.__data__ = new fr(s);
        this.size = l.size;
      }
      function ob() {
        this.__data__ = new fr(), this.size = 0;
      }
      function sb(s) {
        var l = this.__data__, f = l.delete(s);
        return this.size = l.size, f;
      }
      function ab(s) {
        return this.__data__.get(s);
      }
      function lb(s) {
        return this.__data__.has(s);
      }
      function cb(s, l) {
        var f = this.__data__;
        if (f instanceof fr) {
          var m = f.__data__;
          if (!Po || m.length < i - 1)
            return m.push([s, l]), this.size = ++f.size, this;
          f = this.__data__ = new dr(m);
        }
        return f.set(s, l), this.size = f.size, this;
      }
      $n.prototype.clear = ob, $n.prototype.delete = sb, $n.prototype.get = ab, $n.prototype.has = lb, $n.prototype.set = cb;
      function sd(s, l) {
        var f = fe(s), m = !f && hi(s), v = !f && !m && $r(s), x = !f && !m && !v && qi(s), S = f || m || v || x, O = S ? Al(s.length, b0) : [], M = O.length;
        for (var L in s)
          (l || je.call(s, L)) && !(S && (L == "length" || v && (L == "offset" || L == "parent") || x && (L == "buffer" || L == "byteLength" || L == "byteOffset") || gr(L, M))) && O.push(L);
        return O;
      }
      function ad(s) {
        var l = s.length;
        return l ? s[Kl(0, l - 1)] : t;
      }
      function ub(s, l) {
        return ca(en(s), ui(l, 0, s.length));
      }
      function fb(s) {
        return ca(en(s));
      }
      function Ll(s, l, f) {
        (f !== t && !Fn(s[l], f) || f === t && !(l in s)) && pr(s, l, f);
      }
      function Fo(s, l, f) {
        var m = s[l];
        (!(je.call(s, l) && Fn(m, f)) || f === t && !(l in s)) && pr(s, l, f);
      }
      function Xs(s, l) {
        for (var f = s.length; f--; )
          if (Fn(s[f][0], l))
            return f;
        return -1;
      }
      function db(s, l, f, m) {
        return Ir(s, function(v, x, S) {
          l(m, v, f(v), S);
        }), m;
      }
      function ld(s, l) {
        return s && Jn(l, bt(l), s);
      }
      function pb(s, l) {
        return s && Jn(l, nn(l), s);
      }
      function pr(s, l, f) {
        l == "__proto__" && Us ? Us(s, l, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : s[l] = f;
      }
      function Bl(s, l) {
        for (var f = -1, m = l.length, v = N(m), x = s == null; ++f < m; )
          v[f] = x ? t : yc(s, l[f]);
        return v;
      }
      function ui(s, l, f) {
        return s === s && (f !== t && (s = s <= f ? s : f), l !== t && (s = s >= l ? s : l)), s;
      }
      function Cn(s, l, f, m, v, x) {
        var S, O = l & h, M = l & g, L = l & y;
        if (f && (S = v ? f(s, m, v, x) : f(s)), S !== t)
          return S;
        if (!Ze(s))
          return s;
        var $ = fe(s);
        if ($) {
          if (S = t1(s), !O)
            return en(s, S);
        } else {
          var V = Rt(s), K = V == Ve || V == le;
          if ($r(s))
            return Dd(s, O);
          if (V == Pe || V == ot || K && !v) {
            if (S = M || K ? {} : Yd(s), !O)
              return M ? Ub(s, pb(S, s)) : Wb(s, ld(S, s));
          } else {
            if (!Ge[V])
              return v ? s : {};
            S = n1(s, V, O);
          }
        }
        x || (x = new $n());
        var ee = x.get(s);
        if (ee)
          return ee;
        x.set(s, S), Ep(s) ? s.forEach(function(ae) {
          S.add(Cn(ae, l, f, ae, s, x));
        }) : kp(s) && s.forEach(function(ae, we) {
          S.set(we, Cn(ae, l, f, we, s, x));
        });
        var se = L ? M ? rc : nc : M ? nn : bt, me = $ ? t : se(s);
        return Sn(me || s, function(ae, we) {
          me && (we = ae, ae = s[we]), Fo(S, we, Cn(ae, l, f, we, s, x));
        }), S;
      }
      function hb(s) {
        var l = bt(s);
        return function(f) {
          return cd(f, s, l);
        };
      }
      function cd(s, l, f) {
        var m = f.length;
        if (s == null)
          return !m;
        for (s = qe(s); m--; ) {
          var v = f[m], x = l[v], S = s[v];
          if (S === t && !(v in s) || !x(S))
            return !1;
        }
        return !0;
      }
      function ud(s, l, f) {
        if (typeof s != "function")
          throw new _n(a);
        return Ko(function() {
          s.apply(t, f);
        }, l);
      }
      function Vo(s, l, f, m) {
        var v = -1, x = Rs, S = !0, O = s.length, M = [], L = l.length;
        if (!O)
          return M;
        f && (l = Ye(l, fn(f))), m ? (x = _l, S = !1) : l.length >= i && (x = Ro, S = !1, l = new ci(l));
        e:
          for (; ++v < O; ) {
            var $ = s[v], V = f == null ? $ : f($);
            if ($ = m || $ !== 0 ? $ : 0, S && V === V) {
              for (var K = L; K--; )
                if (l[K] === V)
                  continue e;
              M.push($);
            } else
              x(l, V, m) || M.push($);
          }
        return M;
      }
      var Ir = Bd(qn), fd = Bd(Fl, !0);
      function mb(s, l) {
        var f = !0;
        return Ir(s, function(m, v, x) {
          return f = !!l(m, v, x), f;
        }), f;
      }
      function Ys(s, l, f) {
        for (var m = -1, v = s.length; ++m < v; ) {
          var x = s[m], S = l(x);
          if (S != null && (O === t ? S === S && !pn(S) : f(S, O)))
            var O = S, M = x;
        }
        return M;
      }
      function gb(s, l, f, m) {
        var v = s.length;
        for (f = he(f), f < 0 && (f = -f > v ? 0 : v + f), m = m === t || m > v ? v : he(m), m < 0 && (m += v), m = f > m ? 0 : Tp(m); f < m; )
          s[f++] = l;
        return s;
      }
      function dd(s, l) {
        var f = [];
        return Ir(s, function(m, v, x) {
          l(m, v, x) && f.push(m);
        }), f;
      }
      function Et(s, l, f, m, v) {
        var x = -1, S = s.length;
        for (f || (f = i1), v || (v = []); ++x < S; ) {
          var O = s[x];
          l > 0 && f(O) ? l > 1 ? Et(O, l - 1, f, m, v) : Nr(v, O) : m || (v[v.length] = O);
        }
        return v;
      }
      var $l = $d(), pd = $d(!0);
      function qn(s, l) {
        return s && $l(s, l, bt);
      }
      function Fl(s, l) {
        return s && pd(s, l, bt);
      }
      function Zs(s, l) {
        return Mr(l, function(f) {
          return yr(s[f]);
        });
      }
      function fi(s, l) {
        l = Lr(l, s);
        for (var f = 0, m = l.length; s != null && f < m; )
          s = s[Gn(l[f++])];
        return f && f == m ? s : t;
      }
      function hd(s, l, f) {
        var m = l(s);
        return fe(s) ? m : Nr(m, f(s));
      }
      function zt(s) {
        return s == null ? s === t ? oi : Ft : ai && ai in qe(s) ? Zb(s) : f1(s);
      }
      function Vl(s, l) {
        return s > l;
      }
      function yb(s, l) {
        return s != null && je.call(s, l);
      }
      function vb(s, l) {
        return s != null && l in qe(s);
      }
      function bb(s, l, f) {
        return s >= Dt(l, f) && s < ht(l, f);
      }
      function zl(s, l, f) {
        for (var m = f ? _l : Rs, v = s[0].length, x = s.length, S = x, O = N(x), M = 1 / 0, L = []; S--; ) {
          var $ = s[S];
          S && l && ($ = Ye($, fn(l))), M = Dt($.length, M), O[S] = !f && (l || v >= 120 && $.length >= 120) ? new ci(S && $) : t;
        }
        $ = s[0];
        var V = -1, K = O[0];
        e:
          for (; ++V < v && L.length < M; ) {
            var ee = $[V], se = l ? l(ee) : ee;
            if (ee = f || ee !== 0 ? ee : 0, !(K ? Ro(K, se) : m(L, se, f))) {
              for (S = x; --S; ) {
                var me = O[S];
                if (!(me ? Ro(me, se) : m(s[S], se, f)))
                  continue e;
              }
              K && K.push(se), L.push(ee);
            }
          }
        return L;
      }
      function wb(s, l, f, m) {
        return qn(s, function(v, x, S) {
          l(m, f(v), x, S);
        }), m;
      }
      function zo(s, l, f) {
        l = Lr(l, s), s = tp(s, l);
        var m = s == null ? s : s[Gn(On(l))];
        return m == null ? t : un(m, s, f);
      }
      function md(s) {
        return tt(s) && zt(s) == ot;
      }
      function xb(s) {
        return tt(s) && zt(s) == Kn;
      }
      function Sb(s) {
        return tt(s) && zt(s) == j;
      }
      function Ho(s, l, f, m, v) {
        return s === l ? !0 : s == null || l == null || !tt(s) && !tt(l) ? s !== s && l !== l : _b(s, l, f, m, Ho, v);
      }
      function _b(s, l, f, m, v, x) {
        var S = fe(s), O = fe(l), M = S ? st : Rt(s), L = O ? st : Rt(l);
        M = M == ot ? Pe : M, L = L == ot ? Pe : L;
        var $ = M == Pe, V = L == Pe, K = M == L;
        if (K && $r(s)) {
          if (!$r(l))
            return !1;
          S = !0, $ = !1;
        }
        if (K && !$)
          return x || (x = new $n()), S || qi(s) ? Jd(s, l, f, m, v, x) : Xb(s, l, M, f, m, v, x);
        if (!(f & b)) {
          var ee = $ && je.call(s, "__wrapped__"), se = V && je.call(l, "__wrapped__");
          if (ee || se) {
            var me = ee ? s.value() : s, ae = se ? l.value() : l;
            return x || (x = new $n()), v(me, ae, f, m, x);
          }
        }
        return K ? (x || (x = new $n()), Yb(s, l, f, m, v, x)) : !1;
      }
      function kb(s) {
        return tt(s) && Rt(s) == ne;
      }
      function Hl(s, l, f, m) {
        var v = f.length, x = v, S = !m;
        if (s == null)
          return !x;
        for (s = qe(s); v--; ) {
          var O = f[v];
          if (S && O[2] ? O[1] !== s[O[0]] : !(O[0] in s))
            return !1;
        }
        for (; ++v < x; ) {
          O = f[v];
          var M = O[0], L = s[M], $ = O[1];
          if (S && O[2]) {
            if (L === t && !(M in s))
              return !1;
          } else {
            var V = new $n();
            if (m)
              var K = m(L, $, M, s, l, V);
            if (!(K === t ? Ho($, L, b | _, m, V) : K))
              return !1;
          }
        }
        return !0;
      }
      function gd(s) {
        if (!Ze(s) || s1(s))
          return !1;
        var l = yr(s) ? k0 : hv;
        return l.test(pi(s));
      }
      function Cb(s) {
        return tt(s) && zt(s) == Vt;
      }
      function Eb(s) {
        return tt(s) && Rt(s) == ct;
      }
      function Ob(s) {
        return tt(s) && ma(s.length) && !!Xe[zt(s)];
      }
      function yd(s) {
        return typeof s == "function" ? s : s == null ? rn : typeof s == "object" ? fe(s) ? wd(s[0], s[1]) : bd(s) : Fp(s);
      }
      function Wl(s) {
        if (!jo(s))
          return M0(s);
        var l = [];
        for (var f in qe(s))
          je.call(s, f) && f != "constructor" && l.push(f);
        return l;
      }
      function Tb(s) {
        if (!Ze(s))
          return u1(s);
        var l = jo(s), f = [];
        for (var m in s)
          m == "constructor" && (l || !je.call(s, m)) || f.push(m);
        return f;
      }
      function Ul(s, l) {
        return s < l;
      }
      function vd(s, l) {
        var f = -1, m = tn(s) ? N(s.length) : [];
        return Ir(s, function(v, x, S) {
          m[++f] = l(v, x, S);
        }), m;
      }
      function bd(s) {
        var l = oc(s);
        return l.length == 1 && l[0][2] ? Qd(l[0][0], l[0][1]) : function(f) {
          return f === s || Hl(f, s, l);
        };
      }
      function wd(s, l) {
        return ac(s) && Zd(l) ? Qd(Gn(s), l) : function(f) {
          var m = yc(f, s);
          return m === t && m === l ? vc(f, s) : Ho(l, m, b | _);
        };
      }
      function Qs(s, l, f, m, v) {
        s !== l && $l(l, function(x, S) {
          if (v || (v = new $n()), Ze(x))
            Ab(s, l, S, f, Qs, m, v);
          else {
            var O = m ? m(cc(s, S), x, S + "", s, l, v) : t;
            O === t && (O = x), Ll(s, S, O);
          }
        }, nn);
      }
      function Ab(s, l, f, m, v, x, S) {
        var O = cc(s, f), M = cc(l, f), L = S.get(M);
        if (L) {
          Ll(s, f, L);
          return;
        }
        var $ = x ? x(O, M, f + "", s, l, S) : t, V = $ === t;
        if (V) {
          var K = fe(M), ee = !K && $r(M), se = !K && !ee && qi(M);
          $ = M, K || ee || se ? fe(O) ? $ = O : at(O) ? $ = en(O) : ee ? (V = !1, $ = Dd(M, !0)) : se ? (V = !1, $ = Rd(M, !0)) : $ = [] : qo(M) || hi(M) ? ($ = O, hi(O) ? $ = Ap(O) : (!Ze(O) || yr(O)) && ($ = Yd(M))) : V = !1;
        }
        V && (S.set(M, $), v($, M, m, x, S), S.delete(M)), Ll(s, f, $);
      }
      function xd(s, l) {
        var f = s.length;
        if (!!f)
          return l += l < 0 ? f : 0, gr(l, f) ? s[l] : t;
      }
      function Sd(s, l, f) {
        l.length ? l = Ye(l, function(x) {
          return fe(x) ? function(S) {
            return fi(S, x.length === 1 ? x[0] : x);
          } : x;
        }) : l = [rn];
        var m = -1;
        l = Ye(l, fn(ie()));
        var v = vd(s, function(x, S, O) {
          var M = Ye(l, function(L) {
            return L(x);
          });
          return { criteria: M, index: ++m, value: x };
        });
        return n0(v, function(x, S) {
          return Hb(x, S, f);
        });
      }
      function Mb(s, l) {
        return _d(s, l, function(f, m) {
          return vc(s, m);
        });
      }
      function _d(s, l, f) {
        for (var m = -1, v = l.length, x = {}; ++m < v; ) {
          var S = l[m], O = fi(s, S);
          f(O, S) && Wo(x, Lr(S, s), O);
        }
        return x;
      }
      function Nb(s) {
        return function(l) {
          return fi(l, s);
        };
      }
      function jl(s, l, f, m) {
        var v = m ? t0 : Li, x = -1, S = l.length, O = s;
        for (s === l && (l = en(l)), f && (O = Ye(s, fn(f))); ++x < S; )
          for (var M = 0, L = l[x], $ = f ? f(L) : L; (M = v(O, $, M, m)) > -1; )
            O !== s && Ws.call(O, M, 1), Ws.call(s, M, 1);
        return s;
      }
      function kd(s, l) {
        for (var f = s ? l.length : 0, m = f - 1; f--; ) {
          var v = l[f];
          if (f == m || v !== x) {
            var x = v;
            gr(v) ? Ws.call(s, v, 1) : Gl(s, v);
          }
        }
        return s;
      }
      function Kl(s, l) {
        return s + Ks(id() * (l - s + 1));
      }
      function Db(s, l, f, m) {
        for (var v = -1, x = ht(js((l - s) / (f || 1)), 0), S = N(x); x--; )
          S[m ? x : ++v] = s, s += f;
        return S;
      }
      function ql(s, l) {
        var f = "";
        if (!s || l < 1 || l > Fe)
          return f;
        do
          l % 2 && (f += s), l = Ks(l / 2), l && (s += s);
        while (l);
        return f;
      }
      function ve(s, l) {
        return uc(ep(s, l, rn), s + "");
      }
      function Rb(s) {
        return ad(Ji(s));
      }
      function Ib(s, l) {
        var f = Ji(s);
        return ca(f, ui(l, 0, f.length));
      }
      function Wo(s, l, f, m) {
        if (!Ze(s))
          return s;
        l = Lr(l, s);
        for (var v = -1, x = l.length, S = x - 1, O = s; O != null && ++v < x; ) {
          var M = Gn(l[v]), L = f;
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return s;
          if (v != S) {
            var $ = O[M];
            L = m ? m($, M, O) : t, L === t && (L = Ze($) ? $ : gr(l[v + 1]) ? [] : {});
          }
          Fo(O, M, L), O = O[M];
        }
        return s;
      }
      var Cd = qs ? function(s, l) {
        return qs.set(s, l), s;
      } : rn, Pb = Us ? function(s, l) {
        return Us(s, "toString", {
          configurable: !0,
          enumerable: !1,
          value: wc(l),
          writable: !0
        });
      } : rn;
      function Lb(s) {
        return ca(Ji(s));
      }
      function En(s, l, f) {
        var m = -1, v = s.length;
        l < 0 && (l = -l > v ? 0 : v + l), f = f > v ? v : f, f < 0 && (f += v), v = l > f ? 0 : f - l >>> 0, l >>>= 0;
        for (var x = N(v); ++m < v; )
          x[m] = s[m + l];
        return x;
      }
      function Bb(s, l) {
        var f;
        return Ir(s, function(m, v, x) {
          return f = l(m, v, x), !f;
        }), !!f;
      }
      function ea(s, l, f) {
        var m = 0, v = s == null ? m : s.length;
        if (typeof l == "number" && l === l && v <= cn) {
          for (; m < v; ) {
            var x = m + v >>> 1, S = s[x];
            S !== null && !pn(S) && (f ? S <= l : S < l) ? m = x + 1 : v = x;
          }
          return v;
        }
        return Jl(s, l, rn, f);
      }
      function Jl(s, l, f, m) {
        var v = 0, x = s == null ? 0 : s.length;
        if (x === 0)
          return 0;
        l = f(l);
        for (var S = l !== l, O = l === null, M = pn(l), L = l === t; v < x; ) {
          var $ = Ks((v + x) / 2), V = f(s[$]), K = V !== t, ee = V === null, se = V === V, me = pn(V);
          if (S)
            var ae = m || se;
          else
            L ? ae = se && (m || K) : O ? ae = se && K && (m || !ee) : M ? ae = se && K && !ee && (m || !me) : ee || me ? ae = !1 : ae = m ? V <= l : V < l;
          ae ? v = $ + 1 : x = $;
        }
        return Dt(x, Mt);
      }
      function Ed(s, l) {
        for (var f = -1, m = s.length, v = 0, x = []; ++f < m; ) {
          var S = s[f], O = l ? l(S) : S;
          if (!f || !Fn(O, M)) {
            var M = O;
            x[v++] = S === 0 ? 0 : S;
          }
        }
        return x;
      }
      function Od(s) {
        return typeof s == "number" ? s : pn(s) ? dt : +s;
      }
      function dn(s) {
        if (typeof s == "string")
          return s;
        if (fe(s))
          return Ye(s, dn) + "";
        if (pn(s))
          return od ? od.call(s) : "";
        var l = s + "";
        return l == "0" && 1 / s == -Ue ? "-0" : l;
      }
      function Pr(s, l, f) {
        var m = -1, v = Rs, x = s.length, S = !0, O = [], M = O;
        if (f)
          S = !1, v = _l;
        else if (x >= i) {
          var L = l ? null : Jb(s);
          if (L)
            return Ps(L);
          S = !1, v = Ro, M = new ci();
        } else
          M = l ? [] : O;
        e:
          for (; ++m < x; ) {
            var $ = s[m], V = l ? l($) : $;
            if ($ = f || $ !== 0 ? $ : 0, S && V === V) {
              for (var K = M.length; K--; )
                if (M[K] === V)
                  continue e;
              l && M.push(V), O.push($);
            } else
              v(M, V, f) || (M !== O && M.push(V), O.push($));
          }
        return O;
      }
      function Gl(s, l) {
        return l = Lr(l, s), s = tp(s, l), s == null || delete s[Gn(On(l))];
      }
      function Td(s, l, f, m) {
        return Wo(s, l, f(fi(s, l)), m);
      }
      function ta(s, l, f, m) {
        for (var v = s.length, x = m ? v : -1; (m ? x-- : ++x < v) && l(s[x], x, s); )
          ;
        return f ? En(s, m ? 0 : x, m ? x + 1 : v) : En(s, m ? x + 1 : 0, m ? v : x);
      }
      function Ad(s, l) {
        var f = s;
        return f instanceof ke && (f = f.value()), kl(l, function(m, v) {
          return v.func.apply(v.thisArg, Nr([m], v.args));
        }, f);
      }
      function Xl(s, l, f) {
        var m = s.length;
        if (m < 2)
          return m ? Pr(s[0]) : [];
        for (var v = -1, x = N(m); ++v < m; )
          for (var S = s[v], O = -1; ++O < m; )
            O != v && (x[v] = Vo(x[v] || S, s[O], l, f));
        return Pr(Et(x, 1), l, f);
      }
      function Md(s, l, f) {
        for (var m = -1, v = s.length, x = l.length, S = {}; ++m < v; ) {
          var O = m < x ? l[m] : t;
          f(S, s[m], O);
        }
        return S;
      }
      function Yl(s) {
        return at(s) ? s : [];
      }
      function Zl(s) {
        return typeof s == "function" ? s : rn;
      }
      function Lr(s, l) {
        return fe(s) ? s : ac(s, l) ? [s] : op(ze(s));
      }
      var $b = ve;
      function Br(s, l, f) {
        var m = s.length;
        return f = f === t ? m : f, !l && f >= m ? s : En(s, l, f);
      }
      var Nd = C0 || function(s) {
        return Ct.clearTimeout(s);
      };
      function Dd(s, l) {
        if (l)
          return s.slice();
        var f = s.length, m = Qf ? Qf(f) : new s.constructor(f);
        return s.copy(m), m;
      }
      function Ql(s) {
        var l = new s.constructor(s.byteLength);
        return new zs(l).set(new zs(s)), l;
      }
      function Fb(s, l) {
        var f = l ? Ql(s.buffer) : s.buffer;
        return new s.constructor(f, s.byteOffset, s.byteLength);
      }
      function Vb(s) {
        var l = new s.constructor(s.source, mf.exec(s));
        return l.lastIndex = s.lastIndex, l;
      }
      function zb(s) {
        return $o ? qe($o.call(s)) : {};
      }
      function Rd(s, l) {
        var f = l ? Ql(s.buffer) : s.buffer;
        return new s.constructor(f, s.byteOffset, s.length);
      }
      function Id(s, l) {
        if (s !== l) {
          var f = s !== t, m = s === null, v = s === s, x = pn(s), S = l !== t, O = l === null, M = l === l, L = pn(l);
          if (!O && !L && !x && s > l || x && S && M && !O && !L || m && S && M || !f && M || !v)
            return 1;
          if (!m && !x && !L && s < l || L && f && v && !m && !x || O && f && v || !S && v || !M)
            return -1;
        }
        return 0;
      }
      function Hb(s, l, f) {
        for (var m = -1, v = s.criteria, x = l.criteria, S = v.length, O = f.length; ++m < S; ) {
          var M = Id(v[m], x[m]);
          if (M) {
            if (m >= O)
              return M;
            var L = f[m];
            return M * (L == "desc" ? -1 : 1);
          }
        }
        return s.index - l.index;
      }
      function Pd(s, l, f, m) {
        for (var v = -1, x = s.length, S = f.length, O = -1, M = l.length, L = ht(x - S, 0), $ = N(M + L), V = !m; ++O < M; )
          $[O] = l[O];
        for (; ++v < S; )
          (V || v < x) && ($[f[v]] = s[v]);
        for (; L--; )
          $[O++] = s[v++];
        return $;
      }
      function Ld(s, l, f, m) {
        for (var v = -1, x = s.length, S = -1, O = f.length, M = -1, L = l.length, $ = ht(x - O, 0), V = N($ + L), K = !m; ++v < $; )
          V[v] = s[v];
        for (var ee = v; ++M < L; )
          V[ee + M] = l[M];
        for (; ++S < O; )
          (K || v < x) && (V[ee + f[S]] = s[v++]);
        return V;
      }
      function en(s, l) {
        var f = -1, m = s.length;
        for (l || (l = N(m)); ++f < m; )
          l[f] = s[f];
        return l;
      }
      function Jn(s, l, f, m) {
        var v = !f;
        f || (f = {});
        for (var x = -1, S = l.length; ++x < S; ) {
          var O = l[x], M = m ? m(f[O], s[O], O, f, s) : t;
          M === t && (M = s[O]), v ? pr(f, O, M) : Fo(f, O, M);
        }
        return f;
      }
      function Wb(s, l) {
        return Jn(s, sc(s), l);
      }
      function Ub(s, l) {
        return Jn(s, Gd(s), l);
      }
      function na(s, l) {
        return function(f, m) {
          var v = fe(f) ? Gv : db, x = l ? l() : {};
          return v(f, s, ie(m, 2), x);
        };
      }
      function Ui(s) {
        return ve(function(l, f) {
          var m = -1, v = f.length, x = v > 1 ? f[v - 1] : t, S = v > 2 ? f[2] : t;
          for (x = s.length > 3 && typeof x == "function" ? (v--, x) : t, S && Ht(f[0], f[1], S) && (x = v < 3 ? t : x, v = 1), l = qe(l); ++m < v; ) {
            var O = f[m];
            O && s(l, O, m, x);
          }
          return l;
        });
      }
      function Bd(s, l) {
        return function(f, m) {
          if (f == null)
            return f;
          if (!tn(f))
            return s(f, m);
          for (var v = f.length, x = l ? v : -1, S = qe(f); (l ? x-- : ++x < v) && m(S[x], x, S) !== !1; )
            ;
          return f;
        };
      }
      function $d(s) {
        return function(l, f, m) {
          for (var v = -1, x = qe(l), S = m(l), O = S.length; O--; ) {
            var M = S[s ? O : ++v];
            if (f(x[M], M, x) === !1)
              break;
          }
          return l;
        };
      }
      function jb(s, l, f) {
        var m = l & k, v = Uo(s);
        function x() {
          var S = this && this !== Ct && this instanceof x ? v : s;
          return S.apply(m ? f : this, arguments);
        }
        return x;
      }
      function Fd(s) {
        return function(l) {
          l = ze(l);
          var f = Bi(l) ? Bn(l) : t, m = f ? f[0] : l.charAt(0), v = f ? Br(f, 1).join("") : l.slice(1);
          return m[s]() + v;
        };
      }
      function ji(s) {
        return function(l) {
          return kl(Bp(Lp(l).replace(Pv, "")), s, "");
        };
      }
      function Uo(s) {
        return function() {
          var l = arguments;
          switch (l.length) {
            case 0:
              return new s();
            case 1:
              return new s(l[0]);
            case 2:
              return new s(l[0], l[1]);
            case 3:
              return new s(l[0], l[1], l[2]);
            case 4:
              return new s(l[0], l[1], l[2], l[3]);
            case 5:
              return new s(l[0], l[1], l[2], l[3], l[4]);
            case 6:
              return new s(l[0], l[1], l[2], l[3], l[4], l[5]);
            case 7:
              return new s(l[0], l[1], l[2], l[3], l[4], l[5], l[6]);
          }
          var f = Wi(s.prototype), m = s.apply(f, l);
          return Ze(m) ? m : f;
        };
      }
      function Kb(s, l, f) {
        var m = Uo(s);
        function v() {
          for (var x = arguments.length, S = N(x), O = x, M = Ki(v); O--; )
            S[O] = arguments[O];
          var L = x < 3 && S[0] !== M && S[x - 1] !== M ? [] : Dr(S, M);
          if (x -= L.length, x < f)
            return Ud(
              s,
              l,
              ra,
              v.placeholder,
              t,
              S,
              L,
              t,
              t,
              f - x
            );
          var $ = this && this !== Ct && this instanceof v ? m : s;
          return un($, this, S);
        }
        return v;
      }
      function Vd(s) {
        return function(l, f, m) {
          var v = qe(l);
          if (!tn(l)) {
            var x = ie(f, 3);
            l = bt(l), f = function(O) {
              return x(v[O], O, v);
            };
          }
          var S = s(l, f, m);
          return S > -1 ? v[x ? l[S] : S] : t;
        };
      }
      function zd(s) {
        return mr(function(l) {
          var f = l.length, m = f, v = kn.prototype.thru;
          for (s && l.reverse(); m--; ) {
            var x = l[m];
            if (typeof x != "function")
              throw new _n(a);
            if (v && !S && aa(x) == "wrapper")
              var S = new kn([], !0);
          }
          for (m = S ? m : f; ++m < f; ) {
            x = l[m];
            var O = aa(x), M = O == "wrapper" ? ic(x) : t;
            M && lc(M[0]) && M[1] == (te | H | q | Se) && !M[4].length && M[9] == 1 ? S = S[aa(M[0])].apply(S, M[3]) : S = x.length == 1 && lc(x) ? S[O]() : S.thru(x);
          }
          return function() {
            var L = arguments, $ = L[0];
            if (S && L.length == 1 && fe($))
              return S.plant($).value();
            for (var V = 0, K = f ? l[V].apply(this, L) : $; ++V < f; )
              K = l[V].call(this, K);
            return K;
          };
        });
      }
      function ra(s, l, f, m, v, x, S, O, M, L) {
        var $ = l & te, V = l & k, K = l & A, ee = l & (H | C), se = l & Z, me = K ? t : Uo(s);
        function ae() {
          for (var we = arguments.length, Ee = N(we), hn = we; hn--; )
            Ee[hn] = arguments[hn];
          if (ee)
            var Wt = Ki(ae), mn = i0(Ee, Wt);
          if (m && (Ee = Pd(Ee, m, v, ee)), x && (Ee = Ld(Ee, x, S, ee)), we -= mn, ee && we < L) {
            var lt = Dr(Ee, Wt);
            return Ud(
              s,
              l,
              ra,
              ae.placeholder,
              f,
              Ee,
              lt,
              O,
              M,
              L - we
            );
          }
          var Vn = V ? f : this, br = K ? Vn[s] : s;
          return we = Ee.length, O ? Ee = d1(Ee, O) : se && we > 1 && Ee.reverse(), $ && M < we && (Ee.length = M), this && this !== Ct && this instanceof ae && (br = me || Uo(br)), br.apply(Vn, Ee);
        }
        return ae;
      }
      function Hd(s, l) {
        return function(f, m) {
          return wb(f, s, l(m), {});
        };
      }
      function ia(s, l) {
        return function(f, m) {
          var v;
          if (f === t && m === t)
            return l;
          if (f !== t && (v = f), m !== t) {
            if (v === t)
              return m;
            typeof f == "string" || typeof m == "string" ? (f = dn(f), m = dn(m)) : (f = Od(f), m = Od(m)), v = s(f, m);
          }
          return v;
        };
      }
      function ec(s) {
        return mr(function(l) {
          return l = Ye(l, fn(ie())), ve(function(f) {
            var m = this;
            return s(l, function(v) {
              return un(v, m, f);
            });
          });
        });
      }
      function oa(s, l) {
        l = l === t ? " " : dn(l);
        var f = l.length;
        if (f < 2)
          return f ? ql(l, s) : l;
        var m = ql(l, js(s / $i(l)));
        return Bi(l) ? Br(Bn(m), 0, s).join("") : m.slice(0, s);
      }
      function qb(s, l, f, m) {
        var v = l & k, x = Uo(s);
        function S() {
          for (var O = -1, M = arguments.length, L = -1, $ = m.length, V = N($ + M), K = this && this !== Ct && this instanceof S ? x : s; ++L < $; )
            V[L] = m[L];
          for (; M--; )
            V[L++] = arguments[++O];
          return un(K, v ? f : this, V);
        }
        return S;
      }
      function Wd(s) {
        return function(l, f, m) {
          return m && typeof m != "number" && Ht(l, f, m) && (f = m = t), l = vr(l), f === t ? (f = l, l = 0) : f = vr(f), m = m === t ? l < f ? 1 : -1 : vr(m), Db(l, f, m, s);
        };
      }
      function sa(s) {
        return function(l, f) {
          return typeof l == "string" && typeof f == "string" || (l = Tn(l), f = Tn(f)), s(l, f);
        };
      }
      function Ud(s, l, f, m, v, x, S, O, M, L) {
        var $ = l & H, V = $ ? S : t, K = $ ? t : S, ee = $ ? x : t, se = $ ? t : x;
        l |= $ ? q : B, l &= ~($ ? B : q), l & D || (l &= ~(k | A));
        var me = [
          s,
          l,
          v,
          ee,
          V,
          se,
          K,
          O,
          M,
          L
        ], ae = f.apply(t, me);
        return lc(s) && np(ae, me), ae.placeholder = m, rp(ae, s, l);
      }
      function tc(s) {
        var l = pt[s];
        return function(f, m) {
          if (f = Tn(f), m = m == null ? 0 : Dt(he(m), 292), m && rd(f)) {
            var v = (ze(f) + "e").split("e"), x = l(v[0] + "e" + (+v[1] + m));
            return v = (ze(x) + "e").split("e"), +(v[0] + "e" + (+v[1] - m));
          }
          return l(f);
        };
      }
      var Jb = zi && 1 / Ps(new zi([, -0]))[1] == Ue ? function(s) {
        return new zi(s);
      } : _c;
      function jd(s) {
        return function(l) {
          var f = Rt(l);
          return f == ne ? Nl(l) : f == ct ? f0(l) : r0(l, s(l));
        };
      }
      function hr(s, l, f, m, v, x, S, O) {
        var M = l & A;
        if (!M && typeof s != "function")
          throw new _n(a);
        var L = m ? m.length : 0;
        if (L || (l &= ~(q | B), m = v = t), S = S === t ? S : ht(he(S), 0), O = O === t ? O : he(O), L -= v ? v.length : 0, l & B) {
          var $ = m, V = v;
          m = v = t;
        }
        var K = M ? t : ic(s), ee = [
          s,
          l,
          f,
          m,
          v,
          $,
          V,
          x,
          S,
          O
        ];
        if (K && c1(ee, K), s = ee[0], l = ee[1], f = ee[2], m = ee[3], v = ee[4], O = ee[9] = ee[9] === t ? M ? 0 : s.length : ht(ee[9] - L, 0), !O && l & (H | C) && (l &= ~(H | C)), !l || l == k)
          var se = jb(s, l, f);
        else
          l == H || l == C ? se = Kb(s, l, O) : (l == q || l == (k | q)) && !v.length ? se = qb(s, l, f, m) : se = ra.apply(t, ee);
        var me = K ? Cd : np;
        return rp(me(se, ee), s, l);
      }
      function Kd(s, l, f, m) {
        return s === t || Fn(s, Vi[f]) && !je.call(m, f) ? l : s;
      }
      function qd(s, l, f, m, v, x) {
        return Ze(s) && Ze(l) && (x.set(l, s), Qs(s, l, t, qd, x), x.delete(l)), s;
      }
      function Gb(s) {
        return qo(s) ? t : s;
      }
      function Jd(s, l, f, m, v, x) {
        var S = f & b, O = s.length, M = l.length;
        if (O != M && !(S && M > O))
          return !1;
        var L = x.get(s), $ = x.get(l);
        if (L && $)
          return L == l && $ == s;
        var V = -1, K = !0, ee = f & _ ? new ci() : t;
        for (x.set(s, l), x.set(l, s); ++V < O; ) {
          var se = s[V], me = l[V];
          if (m)
            var ae = S ? m(me, se, V, l, s, x) : m(se, me, V, s, l, x);
          if (ae !== t) {
            if (ae)
              continue;
            K = !1;
            break;
          }
          if (ee) {
            if (!Cl(l, function(we, Ee) {
              if (!Ro(ee, Ee) && (se === we || v(se, we, f, m, x)))
                return ee.push(Ee);
            })) {
              K = !1;
              break;
            }
          } else if (!(se === me || v(se, me, f, m, x))) {
            K = !1;
            break;
          }
        }
        return x.delete(s), x.delete(l), K;
      }
      function Xb(s, l, f, m, v, x, S) {
        switch (f) {
          case Ln:
            if (s.byteLength != l.byteLength || s.byteOffset != l.byteOffset)
              return !1;
            s = s.buffer, l = l.buffer;
          case Kn:
            return !(s.byteLength != l.byteLength || !x(new zs(s), new zs(l)));
          case U:
          case j:
          case Ae:
            return Fn(+s, +l);
          case ue:
            return s.name == l.name && s.message == l.message;
          case Vt:
          case Pn:
            return s == l + "";
          case ne:
            var O = Nl;
          case ct:
            var M = m & b;
            if (O || (O = Ps), s.size != l.size && !M)
              return !1;
            var L = S.get(s);
            if (L)
              return L == l;
            m |= _, S.set(s, l);
            var $ = Jd(O(s), O(l), m, v, x, S);
            return S.delete(s), $;
          case wn:
            if ($o)
              return $o.call(s) == $o.call(l);
        }
        return !1;
      }
      function Yb(s, l, f, m, v, x) {
        var S = f & b, O = nc(s), M = O.length, L = nc(l), $ = L.length;
        if (M != $ && !S)
          return !1;
        for (var V = M; V--; ) {
          var K = O[V];
          if (!(S ? K in l : je.call(l, K)))
            return !1;
        }
        var ee = x.get(s), se = x.get(l);
        if (ee && se)
          return ee == l && se == s;
        var me = !0;
        x.set(s, l), x.set(l, s);
        for (var ae = S; ++V < M; ) {
          K = O[V];
          var we = s[K], Ee = l[K];
          if (m)
            var hn = S ? m(Ee, we, K, l, s, x) : m(we, Ee, K, s, l, x);
          if (!(hn === t ? we === Ee || v(we, Ee, f, m, x) : hn)) {
            me = !1;
            break;
          }
          ae || (ae = K == "constructor");
        }
        if (me && !ae) {
          var Wt = s.constructor, mn = l.constructor;
          Wt != mn && "constructor" in s && "constructor" in l && !(typeof Wt == "function" && Wt instanceof Wt && typeof mn == "function" && mn instanceof mn) && (me = !1);
        }
        return x.delete(s), x.delete(l), me;
      }
      function mr(s) {
        return uc(ep(s, t, cp), s + "");
      }
      function nc(s) {
        return hd(s, bt, sc);
      }
      function rc(s) {
        return hd(s, nn, Gd);
      }
      var ic = qs ? function(s) {
        return qs.get(s);
      } : _c;
      function aa(s) {
        for (var l = s.name + "", f = Hi[l], m = je.call(Hi, l) ? f.length : 0; m--; ) {
          var v = f[m], x = v.func;
          if (x == null || x == s)
            return v.name;
        }
        return l;
      }
      function Ki(s) {
        var l = je.call(w, "placeholder") ? w : s;
        return l.placeholder;
      }
      function ie() {
        var s = w.iteratee || xc;
        return s = s === xc ? yd : s, arguments.length ? s(arguments[0], arguments[1]) : s;
      }
      function la(s, l) {
        var f = s.__data__;
        return o1(l) ? f[typeof l == "string" ? "string" : "hash"] : f.map;
      }
      function oc(s) {
        for (var l = bt(s), f = l.length; f--; ) {
          var m = l[f], v = s[m];
          l[f] = [m, v, Zd(v)];
        }
        return l;
      }
      function di(s, l) {
        var f = l0(s, l);
        return gd(f) ? f : t;
      }
      function Zb(s) {
        var l = je.call(s, ai), f = s[ai];
        try {
          s[ai] = t;
          var m = !0;
        } catch {
        }
        var v = Fs.call(s);
        return m && (l ? s[ai] = f : delete s[ai]), v;
      }
      var sc = Rl ? function(s) {
        return s == null ? [] : (s = qe(s), Mr(Rl(s), function(l) {
          return td.call(s, l);
        }));
      } : kc, Gd = Rl ? function(s) {
        for (var l = []; s; )
          Nr(l, sc(s)), s = Hs(s);
        return l;
      } : kc, Rt = zt;
      (Il && Rt(new Il(new ArrayBuffer(1))) != Ln || Po && Rt(new Po()) != ne || Pl && Rt(Pl.resolve()) != ii || zi && Rt(new zi()) != ct || Lo && Rt(new Lo()) != jn) && (Rt = function(s) {
        var l = zt(s), f = l == Pe ? s.constructor : t, m = f ? pi(f) : "";
        if (m)
          switch (m) {
            case I0:
              return Ln;
            case P0:
              return ne;
            case L0:
              return ii;
            case B0:
              return ct;
            case $0:
              return jn;
          }
        return l;
      });
      function Qb(s, l, f) {
        for (var m = -1, v = f.length; ++m < v; ) {
          var x = f[m], S = x.size;
          switch (x.type) {
            case "drop":
              s += S;
              break;
            case "dropRight":
              l -= S;
              break;
            case "take":
              l = Dt(l, s + S);
              break;
            case "takeRight":
              s = ht(s, l - S);
              break;
          }
        }
        return { start: s, end: l };
      }
      function e1(s) {
        var l = s.match(sv);
        return l ? l[1].split(av) : [];
      }
      function Xd(s, l, f) {
        l = Lr(l, s);
        for (var m = -1, v = l.length, x = !1; ++m < v; ) {
          var S = Gn(l[m]);
          if (!(x = s != null && f(s, S)))
            break;
          s = s[S];
        }
        return x || ++m != v ? x : (v = s == null ? 0 : s.length, !!v && ma(v) && gr(S, v) && (fe(s) || hi(s)));
      }
      function t1(s) {
        var l = s.length, f = new s.constructor(l);
        return l && typeof s[0] == "string" && je.call(s, "index") && (f.index = s.index, f.input = s.input), f;
      }
      function Yd(s) {
        return typeof s.constructor == "function" && !jo(s) ? Wi(Hs(s)) : {};
      }
      function n1(s, l, f) {
        var m = s.constructor;
        switch (l) {
          case Kn:
            return Ql(s);
          case U:
          case j:
            return new m(+s);
          case Ln:
            return Fb(s, f);
          case Co:
          case Eo:
          case Oo:
          case To:
          case Ao:
          case I:
          case Y:
          case re:
          case Me:
            return Rd(s, f);
          case ne:
            return new m();
          case Ae:
          case Pn:
            return new m(s);
          case Vt:
            return Vb(s);
          case ct:
            return new m();
          case wn:
            return zb(s);
        }
      }
      function r1(s, l) {
        var f = l.length;
        if (!f)
          return s;
        var m = f - 1;
        return l[m] = (f > 1 ? "& " : "") + l[m], l = l.join(f > 2 ? ", " : " "), s.replace(ov, `{
/* [wrapped with ` + l + `] */
`);
      }
      function i1(s) {
        return fe(s) || hi(s) || !!(nd && s && s[nd]);
      }
      function gr(s, l) {
        var f = typeof s;
        return l = l == null ? Fe : l, !!l && (f == "number" || f != "symbol" && gv.test(s)) && s > -1 && s % 1 == 0 && s < l;
      }
      function Ht(s, l, f) {
        if (!Ze(f))
          return !1;
        var m = typeof l;
        return (m == "number" ? tn(f) && gr(l, f.length) : m == "string" && l in f) ? Fn(f[l], s) : !1;
      }
      function ac(s, l) {
        if (fe(s))
          return !1;
        var f = typeof s;
        return f == "number" || f == "symbol" || f == "boolean" || s == null || pn(s) ? !0 : Ii.test(s) || !Do.test(s) || l != null && s in qe(l);
      }
      function o1(s) {
        var l = typeof s;
        return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? s !== "__proto__" : s === null;
      }
      function lc(s) {
        var l = aa(s), f = w[l];
        if (typeof f != "function" || !(l in ke.prototype))
          return !1;
        if (s === f)
          return !0;
        var m = ic(f);
        return !!m && s === m[0];
      }
      function s1(s) {
        return !!Zf && Zf in s;
      }
      var a1 = Bs ? yr : Cc;
      function jo(s) {
        var l = s && s.constructor, f = typeof l == "function" && l.prototype || Vi;
        return s === f;
      }
      function Zd(s) {
        return s === s && !Ze(s);
      }
      function Qd(s, l) {
        return function(f) {
          return f == null ? !1 : f[s] === l && (l !== t || s in qe(f));
        };
      }
      function l1(s) {
        var l = pa(s, function(m) {
          return f.size === d && f.clear(), m;
        }), f = l.cache;
        return l;
      }
      function c1(s, l) {
        var f = s[1], m = l[1], v = f | m, x = v < (k | A | te), S = m == te && f == H || m == te && f == Se && s[7].length <= l[8] || m == (te | Se) && l[7].length <= l[8] && f == H;
        if (!(x || S))
          return s;
        m & k && (s[2] = l[2], v |= f & k ? 0 : D);
        var O = l[3];
        if (O) {
          var M = s[3];
          s[3] = M ? Pd(M, O, l[4]) : O, s[4] = M ? Dr(s[3], p) : l[4];
        }
        return O = l[5], O && (M = s[5], s[5] = M ? Ld(M, O, l[6]) : O, s[6] = M ? Dr(s[5], p) : l[6]), O = l[7], O && (s[7] = O), m & te && (s[8] = s[8] == null ? l[8] : Dt(s[8], l[8])), s[9] == null && (s[9] = l[9]), s[0] = l[0], s[1] = v, s;
      }
      function u1(s) {
        var l = [];
        if (s != null)
          for (var f in qe(s))
            l.push(f);
        return l;
      }
      function f1(s) {
        return Fs.call(s);
      }
      function ep(s, l, f) {
        return l = ht(l === t ? s.length - 1 : l, 0), function() {
          for (var m = arguments, v = -1, x = ht(m.length - l, 0), S = N(x); ++v < x; )
            S[v] = m[l + v];
          v = -1;
          for (var O = N(l + 1); ++v < l; )
            O[v] = m[v];
          return O[l] = f(S), un(s, this, O);
        };
      }
      function tp(s, l) {
        return l.length < 2 ? s : fi(s, En(l, 0, -1));
      }
      function d1(s, l) {
        for (var f = s.length, m = Dt(l.length, f), v = en(s); m--; ) {
          var x = l[m];
          s[m] = gr(x, f) ? v[x] : t;
        }
        return s;
      }
      function cc(s, l) {
        if (!(l === "constructor" && typeof s[l] == "function") && l != "__proto__")
          return s[l];
      }
      var np = ip(Cd), Ko = O0 || function(s, l) {
        return Ct.setTimeout(s, l);
      }, uc = ip(Pb);
      function rp(s, l, f) {
        var m = l + "";
        return uc(s, r1(m, p1(e1(m), f)));
      }
      function ip(s) {
        var l = 0, f = 0;
        return function() {
          var m = N0(), v = Ie - (m - f);
          if (f = m, v > 0) {
            if (++l >= We)
              return arguments[0];
          } else
            l = 0;
          return s.apply(t, arguments);
        };
      }
      function ca(s, l) {
        var f = -1, m = s.length, v = m - 1;
        for (l = l === t ? m : l; ++f < l; ) {
          var x = Kl(f, v), S = s[x];
          s[x] = s[f], s[f] = S;
        }
        return s.length = l, s;
      }
      var op = l1(function(s) {
        var l = [];
        return s.charCodeAt(0) === 46 && l.push(""), s.replace(nv, function(f, m, v, x) {
          l.push(v ? x.replace(uv, "$1") : m || f);
        }), l;
      });
      function Gn(s) {
        if (typeof s == "string" || pn(s))
          return s;
        var l = s + "";
        return l == "0" && 1 / s == -Ue ? "-0" : l;
      }
      function pi(s) {
        if (s != null) {
          try {
            return $s.call(s);
          } catch {
          }
          try {
            return s + "";
          } catch {
          }
        }
        return "";
      }
      function p1(s, l) {
        return Sn(Nt, function(f) {
          var m = "_." + f[0];
          l & f[1] && !Rs(s, m) && s.push(m);
        }), s.sort();
      }
      function sp(s) {
        if (s instanceof ke)
          return s.clone();
        var l = new kn(s.__wrapped__, s.__chain__);
        return l.__actions__ = en(s.__actions__), l.__index__ = s.__index__, l.__values__ = s.__values__, l;
      }
      function h1(s, l, f) {
        (f ? Ht(s, l, f) : l === t) ? l = 1 : l = ht(he(l), 0);
        var m = s == null ? 0 : s.length;
        if (!m || l < 1)
          return [];
        for (var v = 0, x = 0, S = N(js(m / l)); v < m; )
          S[x++] = En(s, v, v += l);
        return S;
      }
      function m1(s) {
        for (var l = -1, f = s == null ? 0 : s.length, m = 0, v = []; ++l < f; ) {
          var x = s[l];
          x && (v[m++] = x);
        }
        return v;
      }
      function g1() {
        var s = arguments.length;
        if (!s)
          return [];
        for (var l = N(s - 1), f = arguments[0], m = s; m--; )
          l[m - 1] = arguments[m];
        return Nr(fe(f) ? en(f) : [f], Et(l, 1));
      }
      var y1 = ve(function(s, l) {
        return at(s) ? Vo(s, Et(l, 1, at, !0)) : [];
      }), v1 = ve(function(s, l) {
        var f = On(l);
        return at(f) && (f = t), at(s) ? Vo(s, Et(l, 1, at, !0), ie(f, 2)) : [];
      }), b1 = ve(function(s, l) {
        var f = On(l);
        return at(f) && (f = t), at(s) ? Vo(s, Et(l, 1, at, !0), t, f) : [];
      });
      function w1(s, l, f) {
        var m = s == null ? 0 : s.length;
        return m ? (l = f || l === t ? 1 : he(l), En(s, l < 0 ? 0 : l, m)) : [];
      }
      function x1(s, l, f) {
        var m = s == null ? 0 : s.length;
        return m ? (l = f || l === t ? 1 : he(l), l = m - l, En(s, 0, l < 0 ? 0 : l)) : [];
      }
      function S1(s, l) {
        return s && s.length ? ta(s, ie(l, 3), !0, !0) : [];
      }
      function _1(s, l) {
        return s && s.length ? ta(s, ie(l, 3), !0) : [];
      }
      function k1(s, l, f, m) {
        var v = s == null ? 0 : s.length;
        return v ? (f && typeof f != "number" && Ht(s, l, f) && (f = 0, m = v), gb(s, l, f, m)) : [];
      }
      function ap(s, l, f) {
        var m = s == null ? 0 : s.length;
        if (!m)
          return -1;
        var v = f == null ? 0 : he(f);
        return v < 0 && (v = ht(m + v, 0)), Is(s, ie(l, 3), v);
      }
      function lp(s, l, f) {
        var m = s == null ? 0 : s.length;
        if (!m)
          return -1;
        var v = m - 1;
        return f !== t && (v = he(f), v = f < 0 ? ht(m + v, 0) : Dt(v, m - 1)), Is(s, ie(l, 3), v, !0);
      }
      function cp(s) {
        var l = s == null ? 0 : s.length;
        return l ? Et(s, 1) : [];
      }
      function C1(s) {
        var l = s == null ? 0 : s.length;
        return l ? Et(s, Ue) : [];
      }
      function E1(s, l) {
        var f = s == null ? 0 : s.length;
        return f ? (l = l === t ? 1 : he(l), Et(s, l)) : [];
      }
      function O1(s) {
        for (var l = -1, f = s == null ? 0 : s.length, m = {}; ++l < f; ) {
          var v = s[l];
          m[v[0]] = v[1];
        }
        return m;
      }
      function up(s) {
        return s && s.length ? s[0] : t;
      }
      function T1(s, l, f) {
        var m = s == null ? 0 : s.length;
        if (!m)
          return -1;
        var v = f == null ? 0 : he(f);
        return v < 0 && (v = ht(m + v, 0)), Li(s, l, v);
      }
      function A1(s) {
        var l = s == null ? 0 : s.length;
        return l ? En(s, 0, -1) : [];
      }
      var M1 = ve(function(s) {
        var l = Ye(s, Yl);
        return l.length && l[0] === s[0] ? zl(l) : [];
      }), N1 = ve(function(s) {
        var l = On(s), f = Ye(s, Yl);
        return l === On(f) ? l = t : f.pop(), f.length && f[0] === s[0] ? zl(f, ie(l, 2)) : [];
      }), D1 = ve(function(s) {
        var l = On(s), f = Ye(s, Yl);
        return l = typeof l == "function" ? l : t, l && f.pop(), f.length && f[0] === s[0] ? zl(f, t, l) : [];
      });
      function R1(s, l) {
        return s == null ? "" : A0.call(s, l);
      }
      function On(s) {
        var l = s == null ? 0 : s.length;
        return l ? s[l - 1] : t;
      }
      function I1(s, l, f) {
        var m = s == null ? 0 : s.length;
        if (!m)
          return -1;
        var v = m;
        return f !== t && (v = he(f), v = v < 0 ? ht(m + v, 0) : Dt(v, m - 1)), l === l ? p0(s, l, v) : Is(s, Uf, v, !0);
      }
      function P1(s, l) {
        return s && s.length ? xd(s, he(l)) : t;
      }
      var L1 = ve(fp);
      function fp(s, l) {
        return s && s.length && l && l.length ? jl(s, l) : s;
      }
      function B1(s, l, f) {
        return s && s.length && l && l.length ? jl(s, l, ie(f, 2)) : s;
      }
      function $1(s, l, f) {
        return s && s.length && l && l.length ? jl(s, l, t, f) : s;
      }
      var F1 = mr(function(s, l) {
        var f = s == null ? 0 : s.length, m = Bl(s, l);
        return kd(s, Ye(l, function(v) {
          return gr(v, f) ? +v : v;
        }).sort(Id)), m;
      });
      function V1(s, l) {
        var f = [];
        if (!(s && s.length))
          return f;
        var m = -1, v = [], x = s.length;
        for (l = ie(l, 3); ++m < x; ) {
          var S = s[m];
          l(S, m, s) && (f.push(S), v.push(m));
        }
        return kd(s, v), f;
      }
      function fc(s) {
        return s == null ? s : R0.call(s);
      }
      function z1(s, l, f) {
        var m = s == null ? 0 : s.length;
        return m ? (f && typeof f != "number" && Ht(s, l, f) ? (l = 0, f = m) : (l = l == null ? 0 : he(l), f = f === t ? m : he(f)), En(s, l, f)) : [];
      }
      function H1(s, l) {
        return ea(s, l);
      }
      function W1(s, l, f) {
        return Jl(s, l, ie(f, 2));
      }
      function U1(s, l) {
        var f = s == null ? 0 : s.length;
        if (f) {
          var m = ea(s, l);
          if (m < f && Fn(s[m], l))
            return m;
        }
        return -1;
      }
      function j1(s, l) {
        return ea(s, l, !0);
      }
      function K1(s, l, f) {
        return Jl(s, l, ie(f, 2), !0);
      }
      function q1(s, l) {
        var f = s == null ? 0 : s.length;
        if (f) {
          var m = ea(s, l, !0) - 1;
          if (Fn(s[m], l))
            return m;
        }
        return -1;
      }
      function J1(s) {
        return s && s.length ? Ed(s) : [];
      }
      function G1(s, l) {
        return s && s.length ? Ed(s, ie(l, 2)) : [];
      }
      function X1(s) {
        var l = s == null ? 0 : s.length;
        return l ? En(s, 1, l) : [];
      }
      function Y1(s, l, f) {
        return s && s.length ? (l = f || l === t ? 1 : he(l), En(s, 0, l < 0 ? 0 : l)) : [];
      }
      function Z1(s, l, f) {
        var m = s == null ? 0 : s.length;
        return m ? (l = f || l === t ? 1 : he(l), l = m - l, En(s, l < 0 ? 0 : l, m)) : [];
      }
      function Q1(s, l) {
        return s && s.length ? ta(s, ie(l, 3), !1, !0) : [];
      }
      function ew(s, l) {
        return s && s.length ? ta(s, ie(l, 3)) : [];
      }
      var tw = ve(function(s) {
        return Pr(Et(s, 1, at, !0));
      }), nw = ve(function(s) {
        var l = On(s);
        return at(l) && (l = t), Pr(Et(s, 1, at, !0), ie(l, 2));
      }), rw = ve(function(s) {
        var l = On(s);
        return l = typeof l == "function" ? l : t, Pr(Et(s, 1, at, !0), t, l);
      });
      function iw(s) {
        return s && s.length ? Pr(s) : [];
      }
      function ow(s, l) {
        return s && s.length ? Pr(s, ie(l, 2)) : [];
      }
      function sw(s, l) {
        return l = typeof l == "function" ? l : t, s && s.length ? Pr(s, t, l) : [];
      }
      function dc(s) {
        if (!(s && s.length))
          return [];
        var l = 0;
        return s = Mr(s, function(f) {
          if (at(f))
            return l = ht(f.length, l), !0;
        }), Al(l, function(f) {
          return Ye(s, El(f));
        });
      }
      function dp(s, l) {
        if (!(s && s.length))
          return [];
        var f = dc(s);
        return l == null ? f : Ye(f, function(m) {
          return un(l, t, m);
        });
      }
      var aw = ve(function(s, l) {
        return at(s) ? Vo(s, l) : [];
      }), lw = ve(function(s) {
        return Xl(Mr(s, at));
      }), cw = ve(function(s) {
        var l = On(s);
        return at(l) && (l = t), Xl(Mr(s, at), ie(l, 2));
      }), uw = ve(function(s) {
        var l = On(s);
        return l = typeof l == "function" ? l : t, Xl(Mr(s, at), t, l);
      }), fw = ve(dc);
      function dw(s, l) {
        return Md(s || [], l || [], Fo);
      }
      function pw(s, l) {
        return Md(s || [], l || [], Wo);
      }
      var hw = ve(function(s) {
        var l = s.length, f = l > 1 ? s[l - 1] : t;
        return f = typeof f == "function" ? (s.pop(), f) : t, dp(s, f);
      });
      function pp(s) {
        var l = w(s);
        return l.__chain__ = !0, l;
      }
      function mw(s, l) {
        return l(s), s;
      }
      function ua(s, l) {
        return l(s);
      }
      var gw = mr(function(s) {
        var l = s.length, f = l ? s[0] : 0, m = this.__wrapped__, v = function(x) {
          return Bl(x, s);
        };
        return l > 1 || this.__actions__.length || !(m instanceof ke) || !gr(f) ? this.thru(v) : (m = m.slice(f, +f + (l ? 1 : 0)), m.__actions__.push({
          func: ua,
          args: [v],
          thisArg: t
        }), new kn(m, this.__chain__).thru(function(x) {
          return l && !x.length && x.push(t), x;
        }));
      });
      function yw() {
        return pp(this);
      }
      function vw() {
        return new kn(this.value(), this.__chain__);
      }
      function bw() {
        this.__values__ === t && (this.__values__ = Op(this.value()));
        var s = this.__index__ >= this.__values__.length, l = s ? t : this.__values__[this.__index__++];
        return { done: s, value: l };
      }
      function ww() {
        return this;
      }
      function xw(s) {
        for (var l, f = this; f instanceof Gs; ) {
          var m = sp(f);
          m.__index__ = 0, m.__values__ = t, l ? v.__wrapped__ = m : l = m;
          var v = m;
          f = f.__wrapped__;
        }
        return v.__wrapped__ = s, l;
      }
      function Sw() {
        var s = this.__wrapped__;
        if (s instanceof ke) {
          var l = s;
          return this.__actions__.length && (l = new ke(this)), l = l.reverse(), l.__actions__.push({
            func: ua,
            args: [fc],
            thisArg: t
          }), new kn(l, this.__chain__);
        }
        return this.thru(fc);
      }
      function _w() {
        return Ad(this.__wrapped__, this.__actions__);
      }
      var kw = na(function(s, l, f) {
        je.call(s, f) ? ++s[f] : pr(s, f, 1);
      });
      function Cw(s, l, f) {
        var m = fe(s) ? Hf : mb;
        return f && Ht(s, l, f) && (l = t), m(s, ie(l, 3));
      }
      function Ew(s, l) {
        var f = fe(s) ? Mr : dd;
        return f(s, ie(l, 3));
      }
      var Ow = Vd(ap), Tw = Vd(lp);
      function Aw(s, l) {
        return Et(fa(s, l), 1);
      }
      function Mw(s, l) {
        return Et(fa(s, l), Ue);
      }
      function Nw(s, l, f) {
        return f = f === t ? 1 : he(f), Et(fa(s, l), f);
      }
      function hp(s, l) {
        var f = fe(s) ? Sn : Ir;
        return f(s, ie(l, 3));
      }
      function mp(s, l) {
        var f = fe(s) ? Xv : fd;
        return f(s, ie(l, 3));
      }
      var Dw = na(function(s, l, f) {
        je.call(s, f) ? s[f].push(l) : pr(s, f, [l]);
      });
      function Rw(s, l, f, m) {
        s = tn(s) ? s : Ji(s), f = f && !m ? he(f) : 0;
        var v = s.length;
        return f < 0 && (f = ht(v + f, 0)), ga(s) ? f <= v && s.indexOf(l, f) > -1 : !!v && Li(s, l, f) > -1;
      }
      var Iw = ve(function(s, l, f) {
        var m = -1, v = typeof l == "function", x = tn(s) ? N(s.length) : [];
        return Ir(s, function(S) {
          x[++m] = v ? un(l, S, f) : zo(S, l, f);
        }), x;
      }), Pw = na(function(s, l, f) {
        pr(s, f, l);
      });
      function fa(s, l) {
        var f = fe(s) ? Ye : vd;
        return f(s, ie(l, 3));
      }
      function Lw(s, l, f, m) {
        return s == null ? [] : (fe(l) || (l = l == null ? [] : [l]), f = m ? t : f, fe(f) || (f = f == null ? [] : [f]), Sd(s, l, f));
      }
      var Bw = na(function(s, l, f) {
        s[f ? 0 : 1].push(l);
      }, function() {
        return [[], []];
      });
      function $w(s, l, f) {
        var m = fe(s) ? kl : Kf, v = arguments.length < 3;
        return m(s, ie(l, 4), f, v, Ir);
      }
      function Fw(s, l, f) {
        var m = fe(s) ? Yv : Kf, v = arguments.length < 3;
        return m(s, ie(l, 4), f, v, fd);
      }
      function Vw(s, l) {
        var f = fe(s) ? Mr : dd;
        return f(s, ha(ie(l, 3)));
      }
      function zw(s) {
        var l = fe(s) ? ad : Rb;
        return l(s);
      }
      function Hw(s, l, f) {
        (f ? Ht(s, l, f) : l === t) ? l = 1 : l = he(l);
        var m = fe(s) ? ub : Ib;
        return m(s, l);
      }
      function Ww(s) {
        var l = fe(s) ? fb : Lb;
        return l(s);
      }
      function Uw(s) {
        if (s == null)
          return 0;
        if (tn(s))
          return ga(s) ? $i(s) : s.length;
        var l = Rt(s);
        return l == ne || l == ct ? s.size : Wl(s).length;
      }
      function jw(s, l, f) {
        var m = fe(s) ? Cl : Bb;
        return f && Ht(s, l, f) && (l = t), m(s, ie(l, 3));
      }
      var Kw = ve(function(s, l) {
        if (s == null)
          return [];
        var f = l.length;
        return f > 1 && Ht(s, l[0], l[1]) ? l = [] : f > 2 && Ht(l[0], l[1], l[2]) && (l = [l[0]]), Sd(s, Et(l, 1), []);
      }), da = E0 || function() {
        return Ct.Date.now();
      };
      function qw(s, l) {
        if (typeof l != "function")
          throw new _n(a);
        return s = he(s), function() {
          if (--s < 1)
            return l.apply(this, arguments);
        };
      }
      function gp(s, l, f) {
        return l = f ? t : l, l = s && l == null ? s.length : l, hr(s, te, t, t, t, t, l);
      }
      function yp(s, l) {
        var f;
        if (typeof l != "function")
          throw new _n(a);
        return s = he(s), function() {
          return --s > 0 && (f = l.apply(this, arguments)), s <= 1 && (l = t), f;
        };
      }
      var pc = ve(function(s, l, f) {
        var m = k;
        if (f.length) {
          var v = Dr(f, Ki(pc));
          m |= q;
        }
        return hr(s, m, l, f, v);
      }), vp = ve(function(s, l, f) {
        var m = k | A;
        if (f.length) {
          var v = Dr(f, Ki(vp));
          m |= q;
        }
        return hr(l, m, s, f, v);
      });
      function bp(s, l, f) {
        l = f ? t : l;
        var m = hr(s, H, t, t, t, t, t, l);
        return m.placeholder = bp.placeholder, m;
      }
      function wp(s, l, f) {
        l = f ? t : l;
        var m = hr(s, C, t, t, t, t, t, l);
        return m.placeholder = wp.placeholder, m;
      }
      function xp(s, l, f) {
        var m, v, x, S, O, M, L = 0, $ = !1, V = !1, K = !0;
        if (typeof s != "function")
          throw new _n(a);
        l = Tn(l) || 0, Ze(f) && ($ = !!f.leading, V = "maxWait" in f, x = V ? ht(Tn(f.maxWait) || 0, l) : x, K = "trailing" in f ? !!f.trailing : K);
        function ee(lt) {
          var Vn = m, br = v;
          return m = v = t, L = lt, S = s.apply(br, Vn), S;
        }
        function se(lt) {
          return L = lt, O = Ko(we, l), $ ? ee(lt) : S;
        }
        function me(lt) {
          var Vn = lt - M, br = lt - L, Vp = l - Vn;
          return V ? Dt(Vp, x - br) : Vp;
        }
        function ae(lt) {
          var Vn = lt - M, br = lt - L;
          return M === t || Vn >= l || Vn < 0 || V && br >= x;
        }
        function we() {
          var lt = da();
          if (ae(lt))
            return Ee(lt);
          O = Ko(we, me(lt));
        }
        function Ee(lt) {
          return O = t, K && m ? ee(lt) : (m = v = t, S);
        }
        function hn() {
          O !== t && Nd(O), L = 0, m = M = v = O = t;
        }
        function Wt() {
          return O === t ? S : Ee(da());
        }
        function mn() {
          var lt = da(), Vn = ae(lt);
          if (m = arguments, v = this, M = lt, Vn) {
            if (O === t)
              return se(M);
            if (V)
              return Nd(O), O = Ko(we, l), ee(M);
          }
          return O === t && (O = Ko(we, l)), S;
        }
        return mn.cancel = hn, mn.flush = Wt, mn;
      }
      var Jw = ve(function(s, l) {
        return ud(s, 1, l);
      }), Gw = ve(function(s, l, f) {
        return ud(s, Tn(l) || 0, f);
      });
      function Xw(s) {
        return hr(s, Z);
      }
      function pa(s, l) {
        if (typeof s != "function" || l != null && typeof l != "function")
          throw new _n(a);
        var f = function() {
          var m = arguments, v = l ? l.apply(this, m) : m[0], x = f.cache;
          if (x.has(v))
            return x.get(v);
          var S = s.apply(this, m);
          return f.cache = x.set(v, S) || x, S;
        };
        return f.cache = new (pa.Cache || dr)(), f;
      }
      pa.Cache = dr;
      function ha(s) {
        if (typeof s != "function")
          throw new _n(a);
        return function() {
          var l = arguments;
          switch (l.length) {
            case 0:
              return !s.call(this);
            case 1:
              return !s.call(this, l[0]);
            case 2:
              return !s.call(this, l[0], l[1]);
            case 3:
              return !s.call(this, l[0], l[1], l[2]);
          }
          return !s.apply(this, l);
        };
      }
      function Yw(s) {
        return yp(2, s);
      }
      var Zw = $b(function(s, l) {
        l = l.length == 1 && fe(l[0]) ? Ye(l[0], fn(ie())) : Ye(Et(l, 1), fn(ie()));
        var f = l.length;
        return ve(function(m) {
          for (var v = -1, x = Dt(m.length, f); ++v < x; )
            m[v] = l[v].call(this, m[v]);
          return un(s, this, m);
        });
      }), hc = ve(function(s, l) {
        var f = Dr(l, Ki(hc));
        return hr(s, q, t, l, f);
      }), Sp = ve(function(s, l) {
        var f = Dr(l, Ki(Sp));
        return hr(s, B, t, l, f);
      }), Qw = mr(function(s, l) {
        return hr(s, Se, t, t, t, l);
      });
      function ex(s, l) {
        if (typeof s != "function")
          throw new _n(a);
        return l = l === t ? l : he(l), ve(s, l);
      }
      function tx(s, l) {
        if (typeof s != "function")
          throw new _n(a);
        return l = l == null ? 0 : ht(he(l), 0), ve(function(f) {
          var m = f[l], v = Br(f, 0, l);
          return m && Nr(v, m), un(s, this, v);
        });
      }
      function nx(s, l, f) {
        var m = !0, v = !0;
        if (typeof s != "function")
          throw new _n(a);
        return Ze(f) && (m = "leading" in f ? !!f.leading : m, v = "trailing" in f ? !!f.trailing : v), xp(s, l, {
          leading: m,
          maxWait: l,
          trailing: v
        });
      }
      function rx(s) {
        return gp(s, 1);
      }
      function ix(s, l) {
        return hc(Zl(l), s);
      }
      function ox() {
        if (!arguments.length)
          return [];
        var s = arguments[0];
        return fe(s) ? s : [s];
      }
      function sx(s) {
        return Cn(s, y);
      }
      function ax(s, l) {
        return l = typeof l == "function" ? l : t, Cn(s, y, l);
      }
      function lx(s) {
        return Cn(s, h | y);
      }
      function cx(s, l) {
        return l = typeof l == "function" ? l : t, Cn(s, h | y, l);
      }
      function ux(s, l) {
        return l == null || cd(s, l, bt(l));
      }
      function Fn(s, l) {
        return s === l || s !== s && l !== l;
      }
      var fx = sa(Vl), dx = sa(function(s, l) {
        return s >= l;
      }), hi = md(function() {
        return arguments;
      }()) ? md : function(s) {
        return tt(s) && je.call(s, "callee") && !td.call(s, "callee");
      }, fe = N.isArray, px = Lf ? fn(Lf) : xb;
      function tn(s) {
        return s != null && ma(s.length) && !yr(s);
      }
      function at(s) {
        return tt(s) && tn(s);
      }
      function hx(s) {
        return s === !0 || s === !1 || tt(s) && zt(s) == U;
      }
      var $r = T0 || Cc, mx = Bf ? fn(Bf) : Sb;
      function gx(s) {
        return tt(s) && s.nodeType === 1 && !qo(s);
      }
      function yx(s) {
        if (s == null)
          return !0;
        if (tn(s) && (fe(s) || typeof s == "string" || typeof s.splice == "function" || $r(s) || qi(s) || hi(s)))
          return !s.length;
        var l = Rt(s);
        if (l == ne || l == ct)
          return !s.size;
        if (jo(s))
          return !Wl(s).length;
        for (var f in s)
          if (je.call(s, f))
            return !1;
        return !0;
      }
      function vx(s, l) {
        return Ho(s, l);
      }
      function bx(s, l, f) {
        f = typeof f == "function" ? f : t;
        var m = f ? f(s, l) : t;
        return m === t ? Ho(s, l, t, f) : !!m;
      }
      function mc(s) {
        if (!tt(s))
          return !1;
        var l = zt(s);
        return l == ue || l == G || typeof s.message == "string" && typeof s.name == "string" && !qo(s);
      }
      function wx(s) {
        return typeof s == "number" && rd(s);
      }
      function yr(s) {
        if (!Ze(s))
          return !1;
        var l = zt(s);
        return l == Ve || l == le || l == R || l == Ni;
      }
      function _p(s) {
        return typeof s == "number" && s == he(s);
      }
      function ma(s) {
        return typeof s == "number" && s > -1 && s % 1 == 0 && s <= Fe;
      }
      function Ze(s) {
        var l = typeof s;
        return s != null && (l == "object" || l == "function");
      }
      function tt(s) {
        return s != null && typeof s == "object";
      }
      var kp = $f ? fn($f) : kb;
      function xx(s, l) {
        return s === l || Hl(s, l, oc(l));
      }
      function Sx(s, l, f) {
        return f = typeof f == "function" ? f : t, Hl(s, l, oc(l), f);
      }
      function _x(s) {
        return Cp(s) && s != +s;
      }
      function kx(s) {
        if (a1(s))
          throw new ce(o);
        return gd(s);
      }
      function Cx(s) {
        return s === null;
      }
      function Ex(s) {
        return s == null;
      }
      function Cp(s) {
        return typeof s == "number" || tt(s) && zt(s) == Ae;
      }
      function qo(s) {
        if (!tt(s) || zt(s) != Pe)
          return !1;
        var l = Hs(s);
        if (l === null)
          return !0;
        var f = je.call(l, "constructor") && l.constructor;
        return typeof f == "function" && f instanceof f && $s.call(f) == S0;
      }
      var gc = Ff ? fn(Ff) : Cb;
      function Ox(s) {
        return _p(s) && s >= -Fe && s <= Fe;
      }
      var Ep = Vf ? fn(Vf) : Eb;
      function ga(s) {
        return typeof s == "string" || !fe(s) && tt(s) && zt(s) == Pn;
      }
      function pn(s) {
        return typeof s == "symbol" || tt(s) && zt(s) == wn;
      }
      var qi = zf ? fn(zf) : Ob;
      function Tx(s) {
        return s === t;
      }
      function Ax(s) {
        return tt(s) && Rt(s) == jn;
      }
      function Mx(s) {
        return tt(s) && zt(s) == Di;
      }
      var Nx = sa(Ul), Dx = sa(function(s, l) {
        return s <= l;
      });
      function Op(s) {
        if (!s)
          return [];
        if (tn(s))
          return ga(s) ? Bn(s) : en(s);
        if (Io && s[Io])
          return u0(s[Io]());
        var l = Rt(s), f = l == ne ? Nl : l == ct ? Ps : Ji;
        return f(s);
      }
      function vr(s) {
        if (!s)
          return s === 0 ? s : 0;
        if (s = Tn(s), s === Ue || s === -Ue) {
          var l = s < 0 ? -1 : 1;
          return l * Zt;
        }
        return s === s ? s : 0;
      }
      function he(s) {
        var l = vr(s), f = l % 1;
        return l === l ? f ? l - f : l : 0;
      }
      function Tp(s) {
        return s ? ui(he(s), 0, it) : 0;
      }
      function Tn(s) {
        if (typeof s == "number")
          return s;
        if (pn(s))
          return dt;
        if (Ze(s)) {
          var l = typeof s.valueOf == "function" ? s.valueOf() : s;
          s = Ze(l) ? l + "" : l;
        }
        if (typeof s != "string")
          return s === 0 ? s : +s;
        s = qf(s);
        var f = pv.test(s);
        return f || mv.test(s) ? qv(s.slice(2), f ? 2 : 8) : dv.test(s) ? dt : +s;
      }
      function Ap(s) {
        return Jn(s, nn(s));
      }
      function Rx(s) {
        return s ? ui(he(s), -Fe, Fe) : s === 0 ? s : 0;
      }
      function ze(s) {
        return s == null ? "" : dn(s);
      }
      var Ix = Ui(function(s, l) {
        if (jo(l) || tn(l)) {
          Jn(l, bt(l), s);
          return;
        }
        for (var f in l)
          je.call(l, f) && Fo(s, f, l[f]);
      }), Mp = Ui(function(s, l) {
        Jn(l, nn(l), s);
      }), ya = Ui(function(s, l, f, m) {
        Jn(l, nn(l), s, m);
      }), Px = Ui(function(s, l, f, m) {
        Jn(l, bt(l), s, m);
      }), Lx = mr(Bl);
      function Bx(s, l) {
        var f = Wi(s);
        return l == null ? f : ld(f, l);
      }
      var $x = ve(function(s, l) {
        s = qe(s);
        var f = -1, m = l.length, v = m > 2 ? l[2] : t;
        for (v && Ht(l[0], l[1], v) && (m = 1); ++f < m; )
          for (var x = l[f], S = nn(x), O = -1, M = S.length; ++O < M; ) {
            var L = S[O], $ = s[L];
            ($ === t || Fn($, Vi[L]) && !je.call(s, L)) && (s[L] = x[L]);
          }
        return s;
      }), Fx = ve(function(s) {
        return s.push(t, qd), un(Np, t, s);
      });
      function Vx(s, l) {
        return Wf(s, ie(l, 3), qn);
      }
      function zx(s, l) {
        return Wf(s, ie(l, 3), Fl);
      }
      function Hx(s, l) {
        return s == null ? s : $l(s, ie(l, 3), nn);
      }
      function Wx(s, l) {
        return s == null ? s : pd(s, ie(l, 3), nn);
      }
      function Ux(s, l) {
        return s && qn(s, ie(l, 3));
      }
      function jx(s, l) {
        return s && Fl(s, ie(l, 3));
      }
      function Kx(s) {
        return s == null ? [] : Zs(s, bt(s));
      }
      function qx(s) {
        return s == null ? [] : Zs(s, nn(s));
      }
      function yc(s, l, f) {
        var m = s == null ? t : fi(s, l);
        return m === t ? f : m;
      }
      function Jx(s, l) {
        return s != null && Xd(s, l, yb);
      }
      function vc(s, l) {
        return s != null && Xd(s, l, vb);
      }
      var Gx = Hd(function(s, l, f) {
        l != null && typeof l.toString != "function" && (l = Fs.call(l)), s[l] = f;
      }, wc(rn)), Xx = Hd(function(s, l, f) {
        l != null && typeof l.toString != "function" && (l = Fs.call(l)), je.call(s, l) ? s[l].push(f) : s[l] = [f];
      }, ie), Yx = ve(zo);
      function bt(s) {
        return tn(s) ? sd(s) : Wl(s);
      }
      function nn(s) {
        return tn(s) ? sd(s, !0) : Tb(s);
      }
      function Zx(s, l) {
        var f = {};
        return l = ie(l, 3), qn(s, function(m, v, x) {
          pr(f, l(m, v, x), m);
        }), f;
      }
      function Qx(s, l) {
        var f = {};
        return l = ie(l, 3), qn(s, function(m, v, x) {
          pr(f, v, l(m, v, x));
        }), f;
      }
      var eS = Ui(function(s, l, f) {
        Qs(s, l, f);
      }), Np = Ui(function(s, l, f, m) {
        Qs(s, l, f, m);
      }), tS = mr(function(s, l) {
        var f = {};
        if (s == null)
          return f;
        var m = !1;
        l = Ye(l, function(x) {
          return x = Lr(x, s), m || (m = x.length > 1), x;
        }), Jn(s, rc(s), f), m && (f = Cn(f, h | g | y, Gb));
        for (var v = l.length; v--; )
          Gl(f, l[v]);
        return f;
      });
      function nS(s, l) {
        return Dp(s, ha(ie(l)));
      }
      var rS = mr(function(s, l) {
        return s == null ? {} : Mb(s, l);
      });
      function Dp(s, l) {
        if (s == null)
          return {};
        var f = Ye(rc(s), function(m) {
          return [m];
        });
        return l = ie(l), _d(s, f, function(m, v) {
          return l(m, v[0]);
        });
      }
      function iS(s, l, f) {
        l = Lr(l, s);
        var m = -1, v = l.length;
        for (v || (v = 1, s = t); ++m < v; ) {
          var x = s == null ? t : s[Gn(l[m])];
          x === t && (m = v, x = f), s = yr(x) ? x.call(s) : x;
        }
        return s;
      }
      function oS(s, l, f) {
        return s == null ? s : Wo(s, l, f);
      }
      function sS(s, l, f, m) {
        return m = typeof m == "function" ? m : t, s == null ? s : Wo(s, l, f, m);
      }
      var Rp = jd(bt), Ip = jd(nn);
      function aS(s, l, f) {
        var m = fe(s), v = m || $r(s) || qi(s);
        if (l = ie(l, 4), f == null) {
          var x = s && s.constructor;
          v ? f = m ? new x() : [] : Ze(s) ? f = yr(x) ? Wi(Hs(s)) : {} : f = {};
        }
        return (v ? Sn : qn)(s, function(S, O, M) {
          return l(f, S, O, M);
        }), f;
      }
      function lS(s, l) {
        return s == null ? !0 : Gl(s, l);
      }
      function cS(s, l, f) {
        return s == null ? s : Td(s, l, Zl(f));
      }
      function uS(s, l, f, m) {
        return m = typeof m == "function" ? m : t, s == null ? s : Td(s, l, Zl(f), m);
      }
      function Ji(s) {
        return s == null ? [] : Ml(s, bt(s));
      }
      function fS(s) {
        return s == null ? [] : Ml(s, nn(s));
      }
      function dS(s, l, f) {
        return f === t && (f = l, l = t), f !== t && (f = Tn(f), f = f === f ? f : 0), l !== t && (l = Tn(l), l = l === l ? l : 0), ui(Tn(s), l, f);
      }
      function pS(s, l, f) {
        return l = vr(l), f === t ? (f = l, l = 0) : f = vr(f), s = Tn(s), bb(s, l, f);
      }
      function hS(s, l, f) {
        if (f && typeof f != "boolean" && Ht(s, l, f) && (l = f = t), f === t && (typeof l == "boolean" ? (f = l, l = t) : typeof s == "boolean" && (f = s, s = t)), s === t && l === t ? (s = 0, l = 1) : (s = vr(s), l === t ? (l = s, s = 0) : l = vr(l)), s > l) {
          var m = s;
          s = l, l = m;
        }
        if (f || s % 1 || l % 1) {
          var v = id();
          return Dt(s + v * (l - s + Kv("1e-" + ((v + "").length - 1))), l);
        }
        return Kl(s, l);
      }
      var mS = ji(function(s, l, f) {
        return l = l.toLowerCase(), s + (f ? Pp(l) : l);
      });
      function Pp(s) {
        return bc(ze(s).toLowerCase());
      }
      function Lp(s) {
        return s = ze(s), s && s.replace(yv, o0).replace(Lv, "");
      }
      function gS(s, l, f) {
        s = ze(s), l = dn(l);
        var m = s.length;
        f = f === t ? m : ui(he(f), 0, m);
        var v = f;
        return f -= l.length, f >= 0 && s.slice(f, v) == l;
      }
      function yS(s) {
        return s = ze(s), s && No.test(s) ? s.replace(Mo, s0) : s;
      }
      function vS(s) {
        return s = ze(s), s && rv.test(s) ? s.replace(hl, "\\$&") : s;
      }
      var bS = ji(function(s, l, f) {
        return s + (f ? "-" : "") + l.toLowerCase();
      }), wS = ji(function(s, l, f) {
        return s + (f ? " " : "") + l.toLowerCase();
      }), xS = Fd("toLowerCase");
      function SS(s, l, f) {
        s = ze(s), l = he(l);
        var m = l ? $i(s) : 0;
        if (!l || m >= l)
          return s;
        var v = (l - m) / 2;
        return oa(Ks(v), f) + s + oa(js(v), f);
      }
      function _S(s, l, f) {
        s = ze(s), l = he(l);
        var m = l ? $i(s) : 0;
        return l && m < l ? s + oa(l - m, f) : s;
      }
      function kS(s, l, f) {
        s = ze(s), l = he(l);
        var m = l ? $i(s) : 0;
        return l && m < l ? oa(l - m, f) + s : s;
      }
      function CS(s, l, f) {
        return f || l == null ? l = 0 : l && (l = +l), D0(ze(s).replace(ml, ""), l || 0);
      }
      function ES(s, l, f) {
        return (f ? Ht(s, l, f) : l === t) ? l = 1 : l = he(l), ql(ze(s), l);
      }
      function OS() {
        var s = arguments, l = ze(s[0]);
        return s.length < 3 ? l : l.replace(s[1], s[2]);
      }
      var TS = ji(function(s, l, f) {
        return s + (f ? "_" : "") + l.toLowerCase();
      });
      function AS(s, l, f) {
        return f && typeof f != "number" && Ht(s, l, f) && (l = f = t), f = f === t ? it : f >>> 0, f ? (s = ze(s), s && (typeof l == "string" || l != null && !gc(l)) && (l = dn(l), !l && Bi(s)) ? Br(Bn(s), 0, f) : s.split(l, f)) : [];
      }
      var MS = ji(function(s, l, f) {
        return s + (f ? " " : "") + bc(l);
      });
      function NS(s, l, f) {
        return s = ze(s), f = f == null ? 0 : ui(he(f), 0, s.length), l = dn(l), s.slice(f, f + l.length) == l;
      }
      function DS(s, l, f) {
        var m = w.templateSettings;
        f && Ht(s, l, f) && (l = t), s = ze(s), l = ya({}, l, m, Kd);
        var v = ya({}, l.imports, m.imports, Kd), x = bt(v), S = Ml(v, x), O, M, L = 0, $ = l.interpolate || Ms, V = "__p += '", K = Dl(
          (l.escape || Ms).source + "|" + $.source + "|" + ($ === As ? fv : Ms).source + "|" + (l.evaluate || Ms).source + "|$",
          "g"
        ), ee = "//# sourceURL=" + (je.call(l, "sourceURL") ? (l.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zv + "]") + `
`;
        s.replace(K, function(ae, we, Ee, hn, Wt, mn) {
          return Ee || (Ee = hn), V += s.slice(L, mn).replace(vv, a0), we && (O = !0, V += `' +
__e(` + we + `) +
'`), Wt && (M = !0, V += `';
` + Wt + `;
__p += '`), Ee && (V += `' +
((__t = (` + Ee + `)) == null ? '' : __t) +
'`), L = mn + ae.length, ae;
        }), V += `';
`;
        var se = je.call(l, "variable") && l.variable;
        if (!se)
          V = `with (obj) {
` + V + `
}
`;
        else if (cv.test(se))
          throw new ce(c);
        V = (M ? V.replace(Ce, "") : V).replace(kt, "$1").replace(Qt, "$1;"), V = "function(" + (se || "obj") + `) {
` + (se ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (O ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var me = $p(function() {
          return Le(x, ee + "return " + V).apply(t, S);
        });
        if (me.source = V, mc(me))
          throw me;
        return me;
      }
      function RS(s) {
        return ze(s).toLowerCase();
      }
      function IS(s) {
        return ze(s).toUpperCase();
      }
      function PS(s, l, f) {
        if (s = ze(s), s && (f || l === t))
          return qf(s);
        if (!s || !(l = dn(l)))
          return s;
        var m = Bn(s), v = Bn(l), x = Jf(m, v), S = Gf(m, v) + 1;
        return Br(m, x, S).join("");
      }
      function LS(s, l, f) {
        if (s = ze(s), s && (f || l === t))
          return s.slice(0, Yf(s) + 1);
        if (!s || !(l = dn(l)))
          return s;
        var m = Bn(s), v = Gf(m, Bn(l)) + 1;
        return Br(m, 0, v).join("");
      }
      function BS(s, l, f) {
        if (s = ze(s), s && (f || l === t))
          return s.replace(ml, "");
        if (!s || !(l = dn(l)))
          return s;
        var m = Bn(s), v = Jf(m, Bn(l));
        return Br(m, v).join("");
      }
      function $S(s, l) {
        var f = _e, m = He;
        if (Ze(l)) {
          var v = "separator" in l ? l.separator : v;
          f = "length" in l ? he(l.length) : f, m = "omission" in l ? dn(l.omission) : m;
        }
        s = ze(s);
        var x = s.length;
        if (Bi(s)) {
          var S = Bn(s);
          x = S.length;
        }
        if (f >= x)
          return s;
        var O = f - $i(m);
        if (O < 1)
          return m;
        var M = S ? Br(S, 0, O).join("") : s.slice(0, O);
        if (v === t)
          return M + m;
        if (S && (O += M.length - O), gc(v)) {
          if (s.slice(O).search(v)) {
            var L, $ = M;
            for (v.global || (v = Dl(v.source, ze(mf.exec(v)) + "g")), v.lastIndex = 0; L = v.exec($); )
              var V = L.index;
            M = M.slice(0, V === t ? O : V);
          }
        } else if (s.indexOf(dn(v), O) != O) {
          var K = M.lastIndexOf(v);
          K > -1 && (M = M.slice(0, K));
        }
        return M + m;
      }
      function FS(s) {
        return s = ze(s), s && ur.test(s) ? s.replace(cr, h0) : s;
      }
      var VS = ji(function(s, l, f) {
        return s + (f ? " " : "") + l.toUpperCase();
      }), bc = Fd("toUpperCase");
      function Bp(s, l, f) {
        return s = ze(s), l = f ? t : l, l === t ? c0(s) ? y0(s) : e0(s) : s.match(l) || [];
      }
      var $p = ve(function(s, l) {
        try {
          return un(s, t, l);
        } catch (f) {
          return mc(f) ? f : new ce(f);
        }
      }), zS = mr(function(s, l) {
        return Sn(l, function(f) {
          f = Gn(f), pr(s, f, pc(s[f], s));
        }), s;
      });
      function HS(s) {
        var l = s == null ? 0 : s.length, f = ie();
        return s = l ? Ye(s, function(m) {
          if (typeof m[1] != "function")
            throw new _n(a);
          return [f(m[0]), m[1]];
        }) : [], ve(function(m) {
          for (var v = -1; ++v < l; ) {
            var x = s[v];
            if (un(x[0], this, m))
              return un(x[1], this, m);
          }
        });
      }
      function WS(s) {
        return hb(Cn(s, h));
      }
      function wc(s) {
        return function() {
          return s;
        };
      }
      function US(s, l) {
        return s == null || s !== s ? l : s;
      }
      var jS = zd(), KS = zd(!0);
      function rn(s) {
        return s;
      }
      function xc(s) {
        return yd(typeof s == "function" ? s : Cn(s, h));
      }
      function qS(s) {
        return bd(Cn(s, h));
      }
      function JS(s, l) {
        return wd(s, Cn(l, h));
      }
      var GS = ve(function(s, l) {
        return function(f) {
          return zo(f, s, l);
        };
      }), XS = ve(function(s, l) {
        return function(f) {
          return zo(s, f, l);
        };
      });
      function Sc(s, l, f) {
        var m = bt(l), v = Zs(l, m);
        f == null && !(Ze(l) && (v.length || !m.length)) && (f = l, l = s, s = this, v = Zs(l, bt(l)));
        var x = !(Ze(f) && "chain" in f) || !!f.chain, S = yr(s);
        return Sn(v, function(O) {
          var M = l[O];
          s[O] = M, S && (s.prototype[O] = function() {
            var L = this.__chain__;
            if (x || L) {
              var $ = s(this.__wrapped__), V = $.__actions__ = en(this.__actions__);
              return V.push({ func: M, args: arguments, thisArg: s }), $.__chain__ = L, $;
            }
            return M.apply(s, Nr([this.value()], arguments));
          });
        }), s;
      }
      function YS() {
        return Ct._ === this && (Ct._ = _0), this;
      }
      function _c() {
      }
      function ZS(s) {
        return s = he(s), ve(function(l) {
          return xd(l, s);
        });
      }
      var QS = ec(Ye), e_ = ec(Hf), t_ = ec(Cl);
      function Fp(s) {
        return ac(s) ? El(Gn(s)) : Nb(s);
      }
      function n_(s) {
        return function(l) {
          return s == null ? t : fi(s, l);
        };
      }
      var r_ = Wd(), i_ = Wd(!0);
      function kc() {
        return [];
      }
      function Cc() {
        return !1;
      }
      function o_() {
        return {};
      }
      function s_() {
        return "";
      }
      function a_() {
        return !0;
      }
      function l_(s, l) {
        if (s = he(s), s < 1 || s > Fe)
          return [];
        var f = it, m = Dt(s, it);
        l = ie(l), s -= it;
        for (var v = Al(m, l); ++f < s; )
          l(f);
        return v;
      }
      function c_(s) {
        return fe(s) ? Ye(s, Gn) : pn(s) ? [s] : en(op(ze(s)));
      }
      function u_(s) {
        var l = ++x0;
        return ze(s) + l;
      }
      var f_ = ia(function(s, l) {
        return s + l;
      }, 0), d_ = tc("ceil"), p_ = ia(function(s, l) {
        return s / l;
      }, 1), h_ = tc("floor");
      function m_(s) {
        return s && s.length ? Ys(s, rn, Vl) : t;
      }
      function g_(s, l) {
        return s && s.length ? Ys(s, ie(l, 2), Vl) : t;
      }
      function y_(s) {
        return jf(s, rn);
      }
      function v_(s, l) {
        return jf(s, ie(l, 2));
      }
      function b_(s) {
        return s && s.length ? Ys(s, rn, Ul) : t;
      }
      function w_(s, l) {
        return s && s.length ? Ys(s, ie(l, 2), Ul) : t;
      }
      var x_ = ia(function(s, l) {
        return s * l;
      }, 1), S_ = tc("round"), __ = ia(function(s, l) {
        return s - l;
      }, 0);
      function k_(s) {
        return s && s.length ? Tl(s, rn) : 0;
      }
      function C_(s, l) {
        return s && s.length ? Tl(s, ie(l, 2)) : 0;
      }
      return w.after = qw, w.ary = gp, w.assign = Ix, w.assignIn = Mp, w.assignInWith = ya, w.assignWith = Px, w.at = Lx, w.before = yp, w.bind = pc, w.bindAll = zS, w.bindKey = vp, w.castArray = ox, w.chain = pp, w.chunk = h1, w.compact = m1, w.concat = g1, w.cond = HS, w.conforms = WS, w.constant = wc, w.countBy = kw, w.create = Bx, w.curry = bp, w.curryRight = wp, w.debounce = xp, w.defaults = $x, w.defaultsDeep = Fx, w.defer = Jw, w.delay = Gw, w.difference = y1, w.differenceBy = v1, w.differenceWith = b1, w.drop = w1, w.dropRight = x1, w.dropRightWhile = S1, w.dropWhile = _1, w.fill = k1, w.filter = Ew, w.flatMap = Aw, w.flatMapDeep = Mw, w.flatMapDepth = Nw, w.flatten = cp, w.flattenDeep = C1, w.flattenDepth = E1, w.flip = Xw, w.flow = jS, w.flowRight = KS, w.fromPairs = O1, w.functions = Kx, w.functionsIn = qx, w.groupBy = Dw, w.initial = A1, w.intersection = M1, w.intersectionBy = N1, w.intersectionWith = D1, w.invert = Gx, w.invertBy = Xx, w.invokeMap = Iw, w.iteratee = xc, w.keyBy = Pw, w.keys = bt, w.keysIn = nn, w.map = fa, w.mapKeys = Zx, w.mapValues = Qx, w.matches = qS, w.matchesProperty = JS, w.memoize = pa, w.merge = eS, w.mergeWith = Np, w.method = GS, w.methodOf = XS, w.mixin = Sc, w.negate = ha, w.nthArg = ZS, w.omit = tS, w.omitBy = nS, w.once = Yw, w.orderBy = Lw, w.over = QS, w.overArgs = Zw, w.overEvery = e_, w.overSome = t_, w.partial = hc, w.partialRight = Sp, w.partition = Bw, w.pick = rS, w.pickBy = Dp, w.property = Fp, w.propertyOf = n_, w.pull = L1, w.pullAll = fp, w.pullAllBy = B1, w.pullAllWith = $1, w.pullAt = F1, w.range = r_, w.rangeRight = i_, w.rearg = Qw, w.reject = Vw, w.remove = V1, w.rest = ex, w.reverse = fc, w.sampleSize = Hw, w.set = oS, w.setWith = sS, w.shuffle = Ww, w.slice = z1, w.sortBy = Kw, w.sortedUniq = J1, w.sortedUniqBy = G1, w.split = AS, w.spread = tx, w.tail = X1, w.take = Y1, w.takeRight = Z1, w.takeRightWhile = Q1, w.takeWhile = ew, w.tap = mw, w.throttle = nx, w.thru = ua, w.toArray = Op, w.toPairs = Rp, w.toPairsIn = Ip, w.toPath = c_, w.toPlainObject = Ap, w.transform = aS, w.unary = rx, w.union = tw, w.unionBy = nw, w.unionWith = rw, w.uniq = iw, w.uniqBy = ow, w.uniqWith = sw, w.unset = lS, w.unzip = dc, w.unzipWith = dp, w.update = cS, w.updateWith = uS, w.values = Ji, w.valuesIn = fS, w.without = aw, w.words = Bp, w.wrap = ix, w.xor = lw, w.xorBy = cw, w.xorWith = uw, w.zip = fw, w.zipObject = dw, w.zipObjectDeep = pw, w.zipWith = hw, w.entries = Rp, w.entriesIn = Ip, w.extend = Mp, w.extendWith = ya, Sc(w, w), w.add = f_, w.attempt = $p, w.camelCase = mS, w.capitalize = Pp, w.ceil = d_, w.clamp = dS, w.clone = sx, w.cloneDeep = lx, w.cloneDeepWith = cx, w.cloneWith = ax, w.conformsTo = ux, w.deburr = Lp, w.defaultTo = US, w.divide = p_, w.endsWith = gS, w.eq = Fn, w.escape = yS, w.escapeRegExp = vS, w.every = Cw, w.find = Ow, w.findIndex = ap, w.findKey = Vx, w.findLast = Tw, w.findLastIndex = lp, w.findLastKey = zx, w.floor = h_, w.forEach = hp, w.forEachRight = mp, w.forIn = Hx, w.forInRight = Wx, w.forOwn = Ux, w.forOwnRight = jx, w.get = yc, w.gt = fx, w.gte = dx, w.has = Jx, w.hasIn = vc, w.head = up, w.identity = rn, w.includes = Rw, w.indexOf = T1, w.inRange = pS, w.invoke = Yx, w.isArguments = hi, w.isArray = fe, w.isArrayBuffer = px, w.isArrayLike = tn, w.isArrayLikeObject = at, w.isBoolean = hx, w.isBuffer = $r, w.isDate = mx, w.isElement = gx, w.isEmpty = yx, w.isEqual = vx, w.isEqualWith = bx, w.isError = mc, w.isFinite = wx, w.isFunction = yr, w.isInteger = _p, w.isLength = ma, w.isMap = kp, w.isMatch = xx, w.isMatchWith = Sx, w.isNaN = _x, w.isNative = kx, w.isNil = Ex, w.isNull = Cx, w.isNumber = Cp, w.isObject = Ze, w.isObjectLike = tt, w.isPlainObject = qo, w.isRegExp = gc, w.isSafeInteger = Ox, w.isSet = Ep, w.isString = ga, w.isSymbol = pn, w.isTypedArray = qi, w.isUndefined = Tx, w.isWeakMap = Ax, w.isWeakSet = Mx, w.join = R1, w.kebabCase = bS, w.last = On, w.lastIndexOf = I1, w.lowerCase = wS, w.lowerFirst = xS, w.lt = Nx, w.lte = Dx, w.max = m_, w.maxBy = g_, w.mean = y_, w.meanBy = v_, w.min = b_, w.minBy = w_, w.stubArray = kc, w.stubFalse = Cc, w.stubObject = o_, w.stubString = s_, w.stubTrue = a_, w.multiply = x_, w.nth = P1, w.noConflict = YS, w.noop = _c, w.now = da, w.pad = SS, w.padEnd = _S, w.padStart = kS, w.parseInt = CS, w.random = hS, w.reduce = $w, w.reduceRight = Fw, w.repeat = ES, w.replace = OS, w.result = iS, w.round = S_, w.runInContext = T, w.sample = zw, w.size = Uw, w.snakeCase = TS, w.some = jw, w.sortedIndex = H1, w.sortedIndexBy = W1, w.sortedIndexOf = U1, w.sortedLastIndex = j1, w.sortedLastIndexBy = K1, w.sortedLastIndexOf = q1, w.startCase = MS, w.startsWith = NS, w.subtract = __, w.sum = k_, w.sumBy = C_, w.template = DS, w.times = l_, w.toFinite = vr, w.toInteger = he, w.toLength = Tp, w.toLower = RS, w.toNumber = Tn, w.toSafeInteger = Rx, w.toString = ze, w.toUpper = IS, w.trim = PS, w.trimEnd = LS, w.trimStart = BS, w.truncate = $S, w.unescape = FS, w.uniqueId = u_, w.upperCase = VS, w.upperFirst = bc, w.each = hp, w.eachRight = mp, w.first = up, Sc(w, function() {
        var s = {};
        return qn(w, function(l, f) {
          je.call(w.prototype, f) || (s[f] = l);
        }), s;
      }(), { chain: !1 }), w.VERSION = r, Sn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(s) {
        w[s].placeholder = w;
      }), Sn(["drop", "take"], function(s, l) {
        ke.prototype[s] = function(f) {
          f = f === t ? 1 : ht(he(f), 0);
          var m = this.__filtered__ && !l ? new ke(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = Dt(f, m.__takeCount__) : m.__views__.push({
            size: Dt(f, it),
            type: s + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, ke.prototype[s + "Right"] = function(f) {
          return this.reverse()[s](f).reverse();
        };
      }), Sn(["filter", "map", "takeWhile"], function(s, l) {
        var f = l + 1, m = f == vt || f == rt;
        ke.prototype[s] = function(v) {
          var x = this.clone();
          return x.__iteratees__.push({
            iteratee: ie(v, 3),
            type: f
          }), x.__filtered__ = x.__filtered__ || m, x;
        };
      }), Sn(["head", "last"], function(s, l) {
        var f = "take" + (l ? "Right" : "");
        ke.prototype[s] = function() {
          return this[f](1).value()[0];
        };
      }), Sn(["initial", "tail"], function(s, l) {
        var f = "drop" + (l ? "" : "Right");
        ke.prototype[s] = function() {
          return this.__filtered__ ? new ke(this) : this[f](1);
        };
      }), ke.prototype.compact = function() {
        return this.filter(rn);
      }, ke.prototype.find = function(s) {
        return this.filter(s).head();
      }, ke.prototype.findLast = function(s) {
        return this.reverse().find(s);
      }, ke.prototype.invokeMap = ve(function(s, l) {
        return typeof s == "function" ? new ke(this) : this.map(function(f) {
          return zo(f, s, l);
        });
      }), ke.prototype.reject = function(s) {
        return this.filter(ha(ie(s)));
      }, ke.prototype.slice = function(s, l) {
        s = he(s);
        var f = this;
        return f.__filtered__ && (s > 0 || l < 0) ? new ke(f) : (s < 0 ? f = f.takeRight(-s) : s && (f = f.drop(s)), l !== t && (l = he(l), f = l < 0 ? f.dropRight(-l) : f.take(l - s)), f);
      }, ke.prototype.takeRightWhile = function(s) {
        return this.reverse().takeWhile(s).reverse();
      }, ke.prototype.toArray = function() {
        return this.take(it);
      }, qn(ke.prototype, function(s, l) {
        var f = /^(?:filter|find|map|reject)|While$/.test(l), m = /^(?:head|last)$/.test(l), v = w[m ? "take" + (l == "last" ? "Right" : "") : l], x = m || /^find/.test(l);
        !v || (w.prototype[l] = function() {
          var S = this.__wrapped__, O = m ? [1] : arguments, M = S instanceof ke, L = O[0], $ = M || fe(S), V = function(we) {
            var Ee = v.apply(w, Nr([we], O));
            return m && K ? Ee[0] : Ee;
          };
          $ && f && typeof L == "function" && L.length != 1 && (M = $ = !1);
          var K = this.__chain__, ee = !!this.__actions__.length, se = x && !K, me = M && !ee;
          if (!x && $) {
            S = me ? S : new ke(this);
            var ae = s.apply(S, O);
            return ae.__actions__.push({ func: ua, args: [V], thisArg: t }), new kn(ae, K);
          }
          return se && me ? s.apply(this, O) : (ae = this.thru(V), se ? m ? ae.value()[0] : ae.value() : ae);
        });
      }), Sn(["pop", "push", "shift", "sort", "splice", "unshift"], function(s) {
        var l = Ls[s], f = /^(?:push|sort|unshift)$/.test(s) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(s);
        w.prototype[s] = function() {
          var v = arguments;
          if (m && !this.__chain__) {
            var x = this.value();
            return l.apply(fe(x) ? x : [], v);
          }
          return this[f](function(S) {
            return l.apply(fe(S) ? S : [], v);
          });
        };
      }), qn(ke.prototype, function(s, l) {
        var f = w[l];
        if (f) {
          var m = f.name + "";
          je.call(Hi, m) || (Hi[m] = []), Hi[m].push({ name: l, func: f });
        }
      }), Hi[ra(t, A).name] = [{
        name: "wrapper",
        func: t
      }], ke.prototype.clone = F0, ke.prototype.reverse = V0, ke.prototype.value = z0, w.prototype.at = gw, w.prototype.chain = yw, w.prototype.commit = vw, w.prototype.next = bw, w.prototype.plant = xw, w.prototype.reverse = Sw, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = _w, w.prototype.first = w.prototype.head, Io && (w.prototype[Io] = ww), w;
    }, Fi = v0();
    si ? ((si.exports = Fi)._ = Fi, xl._ = Fi) : Ct._ = Fi;
  }).call(Xo);
})(qt, qt.exports);
const BC = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["component"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.component.id);
    }
    return { onDeleteClick: t };
  }
};
function $C(n, e, t, r, i, o) {
  const a = be("router-link");
  return F(), W("tr", null, [
    E("td", null, Ke(t.component.id), 1),
    E("td", null, [
      Je(a, {
        to: "/components/" + t.component.id
      }, {
        default: Pt(() => [
          jt(Ke(t.component.component), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    E("td", null, [
      E("button", {
        onClick: e[0] || (e[0] = Qe((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const FC = /* @__PURE__ */ Te(BC, [["render", $C]]), VC = {
  name: "LaravelCmsAdminComponentAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = xe({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = De(() => t.value.name != null && t.value.identifier != null);
    return { newPath: t, onSubmit: r, valid: i };
  }
}, zC = { class: "form-group form-inline mx-2" }, HC = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), WC = { class: "form-group form-inline mx-2" }, UC = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), jC = ["disabled"];
function KC(n, e, t, r, i, o) {
  return F(), W("form", {
    onSubmit: e[2] || (e[2] = Qe((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    E("fieldset", null, [
      E("div", zC, [
        HC,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newPath.name = a)
        }, null, 512), [
          [et, r.newPath.name]
        ])
      ]),
      E("div", WC, [
        UC,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newPath.identifier = a)
        }, null, 512), [
          [et, r.newPath.identifier]
        ])
      ]),
      E("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Path ", 8, jC)
    ])
  ], 32);
}
const qC = /* @__PURE__ */ Te(VC, [["render", KC]]), JC = {
  name: "LaravelCmsAdminComponents",
  components: {
    ListItem: FC,
    AddForm: qC
  },
  setup(n, { emit: e }) {
    const t = xe([]), r = xe(!1);
    async function i() {
      let u = "/api/cms-components?" + new URLSearchParams({
        "q[]": ["is_global[eq]=TRUE"]
      }).toString();
      const p = await (await fetch(u)).json();
      t.value = p.data, r.value = !0;
    }
    async function o(u) {
      const d = await fetch("/api/cms-components", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify(template)
      }), p = await d.json();
      if (!d.ok) {
        de({
          title: p.message,
          type: "error"
        });
        return;
      }
      t.value.push(p.data), de({
        title: "New component added.",
        type: "success"
      }), t.value.push(Object.assign(u, p.data));
    }
    async function a(u) {
      if (!(await fetch("/api/cms-components/" + u, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
      var p = t.value.map((h) => h.id).indexOf(u);
      ~p && t.value.splice(p, 1);
    }
    return i(), {
      componentsSorted: De(() => qt.exports.sortBy(t.value || [], (u) => u.component)),
      loaded: r,
      onAdd: o,
      onDelete: a
    };
  }
}, GC = /* @__PURE__ */ E("h2", null, "Components", -1), XC = {
  key: 0,
  class: "table"
}, YC = { key: 1 }, ZC = { key: 2 };
function QC(n, e, t, r, i, o) {
  const a = be("add-form"), c = be("list-item");
  return F(), W(Ne, null, [
    GC,
    Je(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.componentsSorted.length ? (F(), W("table", XC, [
      (F(!0), W(Ne, null, wt(r.componentsSorted, (u) => (F(), gt(c, {
        key: u.id,
        component: u,
        onDelete: r.onDelete
      }, null, 8, ["component", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), W("p", YC, "There are no components.")) : (F(), W("p", ZC, "Loading..."))
  ], 64);
}
const eE = /* @__PURE__ */ Te(JC, [["render", QC]]), tE = {};
function nE(n, e) {
  return null;
}
const rE = /* @__PURE__ */ Te(tE, [["render", nE]]), iE = {
  name: "LaravelCmsAdminMediaAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = xe({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    function i() {
      t.value.file = "Set";
    }
    const o = De(() => t.value.caption != null && t.value.file != null);
    return { newMedia: t, onSubmit: r, onFileChanged: i, valid: o };
  }
}, oE = { class: "form-group form-inline mx-2" }, sE = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "caption"
}, "Caption", -1), aE = { class: "form-group form-inline mx-2" }, lE = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "file"
}, "File", -1), cE = ["disabled"];
function uE(n, e, t, r, i, o) {
  return F(), W("form", {
    onSubmit: e[2] || (e[2] = Qe((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    E("fieldset", null, [
      E("div", oE, [
        sE,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "caption",
          id: "caption",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newMedia.caption = a)
        }, null, 512), [
          [et, r.newMedia.caption]
        ])
      ]),
      E("div", aE, [
        lE,
        E("input", {
          class: "form-input",
          type: "file",
          name: "file",
          id: "file",
          onChange: e[1] || (e[1] = (...a) => r.onFileChanged && r.onFileChanged(...a))
        }, null, 32)
      ]),
      E("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Media ", 8, cE)
    ])
  ], 32);
}
const fE = /* @__PURE__ */ Te(iE, [["render", uE]]), dE = {
  name: "LaravelCmsAdminMedia",
  components: {
    ListItem: rE,
    AddForm: fE
  },
  setup(n, { emit: e }) {
    const t = xe([]), r = xe(!1);
    async function i() {
      const d = await (await fetch("/api/cms-media")).json();
      t.value = d.data, r.value = !0;
    }
    async function o(u) {
      const d = await fetch("/api/cms-media", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify(template)
      }), p = await d.json();
      if (!d.ok) {
        de({
          title: p.message,
          type: "error"
        });
        return;
      }
      t.value.push(p.data), de({
        title: "New path added.",
        type: "success"
      }), paths.value.push(Object.assign(u, p.data));
    }
    async function a(u) {
      if (!(await fetch("/api/cms-media/" + u, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
      var p = paths.value.map((h) => h.id).indexOf(u);
      ~p && paths.value.splice(p, 1);
    }
    return i(), {
      mediaSorted: De(() => qt.exports.sortBy(t.value || [], (u) => u.created_at)),
      loaded: r,
      onAdd: o,
      onDelete: a
    };
  }
}, pE = /* @__PURE__ */ E("h2", null, "Media", -1), hE = {
  key: 0,
  class: "table"
}, mE = { key: 1 }, gE = { key: 2 };
function yE(n, e, t, r, i, o) {
  const a = be("add-form"), c = be("list-item");
  return F(), W(Ne, null, [
    pE,
    Je(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.mediaSorted.length ? (F(), W("table", hE, [
      (F(!0), W(Ne, null, wt(r.mediaSorted, (u) => (F(), gt(c, {
        key: u.id,
        media: u,
        onDelete: r.onDelete
      }, null, 8, ["media", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), W("p", mE, "There is no uploaded media.")) : (F(), W("p", gE, "Loading..."))
  ], 64);
}
const vE = /* @__PURE__ */ Te(dE, [["render", yE]]), bE = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["page"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.page.id);
    }
    return { onDeleteClick: t };
  }
};
function wE(n, e, t, r, i, o) {
  var c;
  const a = be("router-link");
  return F(), W("tr", null, [
    E("td", null, Ke(t.page.id), 1),
    E("td", null, [
      Je(a, {
        to: "/pages/" + t.page.id
      }, {
        default: Pt(() => [
          jt(Ke(t.page.name), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    E("td", null, Ke(t.page.title), 1),
    E("td", null, Ke(t.page.path), 1),
    E("td", null, Ke((c = t.page.template) == null ? void 0 : c.name), 1),
    E("td", null, [
      E("button", {
        onClick: e[0] || (e[0] = Qe((...u) => r.onDeleteClick && r.onDeleteClick(...u), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const xE = /* @__PURE__ */ Te(bE, [["render", wE]]), SE = {
  name: "LaravelCmsAdminPageAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = xe({}), r = xe([]);
    async function i() {
      const d = await (await fetch("/api/cms-templates")).json();
      r.value = d.data;
    }
    async function o() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    function a() {
      t.value.path || (t.value.path = "/" + t.value.title.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-"));
    }
    i();
    const c = De(() => t.value.name != null && t.value.title != null && t.value.path != null && t.value.cms_template_id != null);
    return { newPage: t, templates: r, onSubmit: o, onTitleBlur: a, valid: c };
  }
}, _E = { class: "form-group form-inline mx-2" }, kE = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), CE = { class: "form-group form-inline mx-2" }, EE = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "title"
}, "Title", -1), OE = { class: "form-group form-inline mx-2" }, TE = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "template"
}, "Template", -1), AE = /* @__PURE__ */ E("option", null, null, -1), ME = ["value"], NE = { class: "form-group form-inline mx-2" }, DE = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), RE = ["disabled"], IE = { key: 1 };
function PE(n, e, t, r, i, o) {
  const a = be("router-link");
  return r.templates.length ? (F(), W("form", {
    key: 0,
    onSubmit: e[5] || (e[5] = Qe((...c) => r.onSubmit && r.onSubmit(...c), ["prevent"]))
  }, [
    E("fieldset", null, [
      E("div", _E, [
        kE,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (c) => r.newPage.name = c)
        }, null, 512), [
          [et, r.newPage.name]
        ])
      ]),
      E("div", CE, [
        EE,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "title",
          id: "title",
          onBlur: e[1] || (e[1] = (...c) => r.onTitleBlur && r.onTitleBlur(...c)),
          "onUpdate:modelValue": e[2] || (e[2] = (c) => r.newPage.title = c)
        }, null, 544), [
          [et, r.newPage.title]
        ])
      ]),
      E("div", OE, [
        TE,
        Re(E("select", {
          class: "form-select",
          name: "template",
          id: "template",
          "onUpdate:modelValue": e[3] || (e[3] = (c) => r.newPage.cms_template_id = c)
        }, [
          AE,
          (F(!0), W(Ne, null, wt(r.templates, (c) => (F(), W("option", {
            key: c.id,
            value: c.id
          }, Ke(c.name), 9, ME))), 128))
        ], 512), [
          [
            wi,
            r.newPage.cms_template_id,
            void 0,
            { number: !0 }
          ]
        ])
      ]),
      E("div", NE, [
        DE,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "path",
          id: "path",
          "onUpdate:modelValue": e[4] || (e[4] = (c) => r.newPage.path = c)
        }, null, 512), [
          [et, r.newPage.path]
        ])
      ]),
      E("button", {
        class: "mx-2 btn btn-link",
        disabled: !r.valid
      }, " Add Page ", 8, RE)
    ])
  ], 32)) : (F(), W("p", IE, [
    jt(" You must set up "),
    Je(a, { to: "/templates" }, {
      default: Pt(() => [
        jt("templates")
      ]),
      _: 1
    }),
    jt(" before adding a page. ")
  ]));
}
const LE = /* @__PURE__ */ Te(SE, [["render", PE]]), BE = {
  name: "LaravelCmsAdminPages",
  components: {
    ListItem: xE,
    AddForm: LE
  },
  setup() {
    const n = ig(), e = xe([]), t = xe(!1);
    async function r() {
      let c = "/api/cms-pages?" + new URLSearchParams({
        "include[]": ["template"]
      }).toString();
      const d = await (await fetch(c)).json();
      e.value = d.data, t.value = !0;
    }
    async function i(c) {
      const u = await fetch("/api/cms-pages", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify(c)
      }), d = await u.json();
      if (!u.ok) {
        de({
          title: d.message,
          type: "error"
        });
        return;
      }
      e.value.push(d.data), de({
        title: "New page created.",
        type: "success"
      }), n.push("/pages/" + d.data.id);
    }
    async function o(c) {
      if (!(await fetch("/api/cms-pages/" + c, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
      var d = e.value.map((p) => p.id).indexOf(c);
      ~d && e.value.splice(d, 1);
    }
    return r(), {
      pagesSorted: De(() => qt.exports.sortBy(e.value || [], (c) => c.name)),
      loaded: t,
      onAdd: i,
      onDelete: o
    };
  }
}, $E = /* @__PURE__ */ E("h2", null, "Add Page", -1), FE = /* @__PURE__ */ E("h2", null, "Existing Pages", -1), VE = {
  key: 0,
  class: "table"
}, zE = /* @__PURE__ */ E("tr", null, [
  /* @__PURE__ */ E("th", null, "Id"),
  /* @__PURE__ */ E("th", null, "Name"),
  /* @__PURE__ */ E("th", null, "Title"),
  /* @__PURE__ */ E("th", null, "Path"),
  /* @__PURE__ */ E("th", null, "Template"),
  /* @__PURE__ */ E("th")
], -1), HE = { key: 1 }, WE = { key: 2 };
function UE(n, e, t, r, i, o) {
  const a = be("add-form"), c = be("list-item");
  return F(), W(Ne, null, [
    $E,
    Je(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    FE,
    r.loaded && r.pagesSorted.length ? (F(), W("table", VE, [
      zE,
      (F(!0), W(Ne, null, wt(r.pagesSorted, (u) => (F(), gt(c, {
        key: u.id,
        page: u,
        onDelete: r.onDelete
      }, null, 8, ["page", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), W("p", HE, "There are no pages.")) : (F(), W("p", WE, "Loading..."))
  ], 64);
}
const lh = /* @__PURE__ */ Te(BE, [["render", UE]]), jE = {
  name: "LaravelCmsAdminPagePathsListItem",
  props: ["path"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.path.id);
    }
    return { onDeleteClick: t };
  }
};
function KE(n, e, t, r, i, o) {
  return F(), W("tr", null, [
    E("td", null, Ke(t.path.id), 1),
    E("td", null, Ke(t.path.path), 1),
    E("td", null, [
      E("button", {
        onClick: e[0] || (e[0] = Qe((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const qE = /* @__PURE__ */ Te(jE, [["render", KE]]), JE = {
  name: "LaravelCmsAdminPagePathsAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = xe({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = De(() => t.value.path != null);
    return { newPath: t, onSubmit: r, valid: i };
  }
}, GE = { class: "form-group form-inline mx-2" }, XE = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), YE = ["disabled"];
function ZE(n, e, t, r, i, o) {
  return F(), W("form", {
    onSubmit: e[1] || (e[1] = Qe((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    E("fieldset", null, [
      E("div", GE, [
        XE,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "path",
          id: "path",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newPath.path = a)
        }, null, 512), [
          [et, r.newPath.path]
        ])
      ]),
      E("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Path ", 8, YE)
    ])
  ], 32);
}
const QE = /* @__PURE__ */ Te(JE, [["render", ZE]]), eO = {
  name: "LaravelCmsAdminPaths",
  components: {
    ListItem: qE,
    AddForm: QE
  },
  props: ["page"],
  setup(n, { emit: e }) {
    const t = xe([]), r = xe(!1);
    async function i() {
      const d = await (await fetch(
        "/api/cms-paths?cms_page_id=" + n.page.id
      )).json();
      t.value = d.data, r.value = !0;
    }
    async function o(u) {
      u.cms_page_id = n.page.id;
      const d = await fetch("/api/cms-paths", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify(u)
      }), p = await d.json();
      if (!d.ok) {
        de({
          title: p.message,
          type: "error"
        });
        return;
      }
      de({
        title: "New path added.",
        type: "success"
      }), t.value.push(Object.assign(u, p.data));
    }
    async function a(u) {
      if (!(await fetch("/api/cms-paths/" + u, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
      var p = t.value.map((h) => h.id).indexOf(u);
      ~p && t.value.splice(p, 1);
    }
    return i(), {
      pathsSorted: De(() => qt.exports.sortBy(t.value || [], (u) => u.path)),
      loaded: r,
      onAdd: o,
      onDelete: a
    };
  }
}, tO = {
  key: 0,
  class: "table"
}, nO = /* @__PURE__ */ E("tr", null, [
  /* @__PURE__ */ E("th", null, "Id"),
  /* @__PURE__ */ E("th", { colspan: "2" }, "Path")
], -1), rO = { key: 1 }, iO = { key: 2 };
function oO(n, e, t, r, i, o) {
  const a = be("add-form"), c = be("list-item");
  return F(), W(Ne, null, [
    Je(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.pathsSorted.length ? (F(), W("table", tO, [
      nO,
      (F(!0), W(Ne, null, wt(r.pathsSorted, (u) => (F(), gt(c, {
        key: u.id,
        path: u,
        onDelete: r.onDelete
      }, null, 8, ["path", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), W("p", rO, "There are no paths.")) : (F(), W("p", iO, "Loading..."))
  ], 64);
}
const sO = /* @__PURE__ */ Te(eO, [["render", oO]]), aO = {
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
    const i = De(() => n.component.html);
    return { onEditClick: t, onDeleteClick: r, preview: i };
  }
}, lO = { class: "card mb-2" }, cO = { class: "card-header" }, uO = { class: "card-title h5" }, fO = { class: "card-subtitle text-gray" }, dO = ["innerHTML"], pO = { class: "card-footer" };
function hO(n, e, t, r, i, o) {
  return F(), W("div", lO, [
    E("div", cO, [
      E("div", uO, Ke(t.component.name), 1),
      E("div", fO, Ke(t.component.view), 1)
    ]),
    E("div", {
      class: "card-body",
      innerHTML: r.preview
    }, null, 8, dO),
    E("div", pO, [
      E("button", {
        class: "btn btn-link",
        onClick: e[0] || (e[0] = Qe((...a) => r.onEditClick && r.onEditClick(...a), ["prevent"]))
      }, " Edit "),
      E("button", {
        class: "btn btn-link text-error float-right",
        onClick: e[1] || (e[1] = Qe((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"]))
      }, " Delete ")
    ])
  ]);
}
const sg = /* @__PURE__ */ Te(aO, [["render", hO]]), mO = {
  name: "LaravelCmsAdminPageUnsortedComponents",
  components: {
    Component: sg
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
}, gO = /* @__PURE__ */ E("p", null, "Unsorted Components", -1), yO = { class: "table mb-2" };
function vO(n, e, t, r, i, o) {
  const a = be("component");
  return F(), W(Ne, null, [
    gO,
    E("table", yO, [
      (F(!0), W(Ne, null, wt(t.components, (c) => (F(), gt(a, {
        key: c.id,
        component: c,
        onEdit: r.onEdit,
        onDelete: r.onDelete
      }, null, 8, ["component", "onEdit", "onDelete"]))), 128))
    ])
  ], 64);
}
const bO = /* @__PURE__ */ Te(mO, [["render", vO]]), wO = {
  name: "LaravelCmsAdminPageTemplateSection",
  props: ["templateSection", "components"],
  components: {
    Component: sg
  },
  setup(n, { emit: e }) {
    async function t(o) {
      e("select", o);
    }
    function r(o) {
      e("delete", o);
    }
    return {
      includedComponents: De(() => {
        const o = qt.exports.filter(n.components, (a) => a.cms_template_section_id == n.templateSection.id);
        return qt.exports.sortBy(o, "sort_order");
      }),
      onEdit: t,
      onDelete: r
    };
  }
};
function xO(n, e, t, r, i, o) {
  const a = be("component");
  return F(), W("fieldset", null, [
    E("legend", null, " Section: " + Ke(t.templateSection.name) + " " + Ke(t.templateSection.id), 1),
    (F(!0), W(Ne, null, wt(r.includedComponents, (c) => (F(), gt(a, {
      key: c.id,
      component: c,
      onEdit: r.onEdit,
      onDelete: r.onDelete
    }, null, 8, ["component", "onEdit", "onDelete"]))), 128))
  ]);
}
const SO = /* @__PURE__ */ Te(wO, [["render", xO]]), _O = {
  name: "LaravelCmsAdminPageTemplateSections",
  components: {
    ListItem: SO
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
function kO(n, e, t, r, i, o) {
  const a = be("list-item");
  return F(), W("form", null, [
    E("fieldset", null, [
      (F(!0), W(Ne, null, wt(t.templateSections, (c) => (F(), gt(a, {
        key: c.id,
        "template-section": c,
        components: t.components,
        onSelect: r.onSelect,
        onDelete: r.onDelete
      }, null, 8, ["template-section", "components", "onSelect", "onDelete"]))), 128))
    ])
  ]);
}
const CO = /* @__PURE__ */ Te(_O, [["render", kO]]);
function Ot(n) {
  this.content = n;
}
Ot.prototype = {
  constructor: Ot,
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
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new Ot(o);
  },
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new Ot(t);
  },
  addToStart: function(n, e) {
    return new Ot([n, e].concat(this.remove(n).content));
  },
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new Ot(t);
  },
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new Ot(i);
  },
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  prepend: function(n) {
    return n = Ot.from(n), n.size ? new Ot(n.content.concat(this.subtract(n).content)) : this;
  },
  append: function(n) {
    return n = Ot.from(n), n.size ? new Ot(this.subtract(n).content.concat(n.content)) : this;
  },
  subtract: function(n) {
    var e = this;
    n = Ot.from(n);
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
Ot.from = function(n) {
  if (n instanceof Ot)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new Ot(e);
};
function ag(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), o = e.child(r);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      for (let a = 0; i.text[a] == o.text[a]; a++)
        t++;
      return t;
    }
    if (i.content.size || o.content.size) {
      let a = ag(i.content, o.content, t + 1);
      if (a != null)
        return a;
    }
    t += i.nodeSize;
  }
}
function lg(n, e, t, r) {
  for (let i = n.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: r };
    let a = n.child(--i), c = e.child(--o), u = a.nodeSize;
    if (a == c) {
      t -= u, r -= u;
      continue;
    }
    if (!a.sameMarkup(c))
      return { a: t, b: r };
    if (a.isText && a.text != c.text) {
      let d = 0, p = Math.min(a.text.length, c.text.length);
      for (; d < p && a.text[a.text.length - d - 1] == c.text[c.text.length - d - 1]; )
        d++, t--, r--;
      return { a: t, b: r };
    }
    if (a.content.size || c.content.size) {
      let d = lg(a.content, c.content, t - 1, r - 1);
      if (d)
        return d;
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
  nodesBetween(e, t, r, i = 0, o) {
    for (let a = 0, c = 0; c < t; a++) {
      let u = this.content[a], d = c + u.nodeSize;
      if (d > e && r(u, i + c, o || null, a) !== !1 && u.content.size) {
        let p = c + 1;
        u.nodesBetween(Math.max(0, e - p), Math.min(u.content.size, t - p), r, i + p);
      }
      c = d;
    }
  }
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  textBetween(e, t, r, i) {
    let o = "", a = !0;
    return this.nodesBetween(e, t, (c, u) => {
      c.isText ? (o += c.text.slice(Math.max(e, u) - u, t - u), a = !r) : c.isLeaf ? (i ? o += typeof i == "function" ? i(c) : i : c.type.spec.leafText && (o += c.type.spec.leafText(c)), a = !r) : !a && c.isBlock && (o += r, a = !0);
    }, 0), o;
  }
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new z(i, this.size + e.size);
  }
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let o = 0, a = 0; a < t; o++) {
        let c = this.content[o], u = a + c.nodeSize;
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
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new z(i, o);
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
    return ag(this, e, t);
  }
  findDiffEnd(e, t = this.size, r = e.size) {
    return lg(this, e, t, r);
  }
  findIndex(e, t = -1) {
    if (e == 0)
      return wa(0, e);
    if (e == this.size)
      return wa(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), a = i + o.nodeSize;
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
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
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
const Dc = { index: 0, offset: 0 };
function wa(n, e) {
  return Dc.index = n, Dc.offset = e, Dc;
}
function Na(n, e) {
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
      if (!Na(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Na(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
class $e {
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
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
    return this == e || this.type == e.type && Na(this.attrs, e.attrs);
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
      return $e.none;
    if (e instanceof $e)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
}
$e.none = [];
class Da extends Error {
}
class J {
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  insertAt(e, t) {
    let r = ug(this.content, e + this.openStart, t);
    return r && new J(r, this.openStart, this.openEnd);
  }
  removeBetween(e, t) {
    return new J(cg(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
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
      return J.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new J(z.fromJSON(e, t.content), r, i);
  }
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new J(e, r, i);
  }
}
J.empty = new J(z.empty, 0, 0);
function cg(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: a, offset: c } = n.findIndex(t);
  if (i == e || o.isText) {
    if (c != t && !n.child(a).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != a)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, o.copy(cg(o.content, e - i - 1, t - i - 1)));
}
function ug(n, e, t, r) {
  let { index: i, offset: o } = n.findIndex(e), a = n.maybeChild(i);
  if (o == e || a.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let c = ug(a.content, e - o - 1, t);
  return c && n.replaceChild(i, a.copy(c));
}
function EO(n, e, t) {
  if (t.openStart > n.depth)
    throw new Da("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Da("Inconsistent open depths");
  return fg(n, e, t, 0);
}
function fg(n, e, t, r) {
  let i = n.index(r), o = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let a = fg(n, e, t, r + 1);
    return o.copy(o.content.replaceChild(i, a));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let a = n.parent, c = a.content;
      return Si(a, c.cut(0, n.parentOffset).append(t.content).append(c.cut(e.parentOffset)));
    } else {
      let { start: a, end: c } = OO(t, n);
      return Si(o, pg(n, a, c, e, r));
    }
  else
    return Si(o, Ra(n, e, r));
}
function dg(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Da("Cannot join " + e.type.name + " onto " + n.type.name);
}
function du(n, e, t) {
  let r = n.node(t);
  return dg(r, e.node(t)), r;
}
function xi(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function is(n, e, t, r) {
  let i = (e || n).node(t), o = 0, a = e ? e.index(t) : i.childCount;
  n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (xi(n.nodeAfter, r), o++));
  for (let c = o; c < a; c++)
    xi(i.child(c), r);
  e && e.depth == t && e.textOffset && xi(e.nodeBefore, r);
}
function Si(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function pg(n, e, t, r, i) {
  let o = n.depth > i && du(n, e, i + 1), a = r.depth > i && du(t, r, i + 1), c = [];
  return is(null, n, i, c), o && a && e.index(i) == t.index(i) ? (dg(o, a), xi(Si(o, pg(n, e, t, r, i + 1)), c)) : (o && xi(Si(o, Ra(n, e, i + 1)), c), is(e, t, i, c), a && xi(Si(a, Ra(t, r, i + 1)), c)), is(r, null, i, c), new z(c);
}
function Ra(n, e, t) {
  let r = [];
  if (is(null, n, t, r), n.depth > t) {
    let i = du(n, e, t + 1);
    xi(Si(i, Ra(n, e, t + 1)), r);
  }
  return is(e, null, t, r), new z(r);
}
function OO(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(z.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class hs {
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
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return $e.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let c = r;
      r = i, i = c;
    }
    let o = r.marks;
    for (var a = 0; a < o.length; a++)
      o[a].type.spec.inclusive === !1 && (!i || !o[a].isInSet(i.marks)) && (o = o[a--].removeFromSet(o));
    return o;
  }
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
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
        return new Ia(this, e, r);
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
    let r = [], i = 0, o = t;
    for (let a = e; ; ) {
      let { index: c, offset: u } = a.content.findIndex(o), d = o - u;
      if (r.push(a, c, i + u), !d || (a = a.child(c), a.isText))
        break;
      o = d - 1, i += u + 1;
    }
    return new hs(t, r, o);
  }
  static resolveCached(e, t) {
    for (let i = 0; i < Rc.length; i++) {
      let o = Rc[i];
      if (o.pos == t && o.doc == e)
        return o;
    }
    let r = Rc[Ic] = hs.resolve(e, t);
    return Ic = (Ic + 1) % TO, r;
  }
}
let Rc = [], Ic = 0, TO = 12;
class Ia {
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
const AO = /* @__PURE__ */ Object.create(null);
class tr {
  constructor(e, t, r, i = $e.none) {
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
    return this.type == e && Na(this.attrs, t || e.defaultAttrs || AO) && $e.sameSet(this.marks, r || $e.none);
  }
  copy(e = null) {
    return e == this.content ? this : new tr(this.type, this.attrs, e, this.marks);
  }
  mark(e) {
    return e == this.marks ? this : new tr(this.type, this.attrs, this.content, e);
  }
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return J.empty;
    let i = this.resolve(e), o = this.resolve(t), a = r ? 0 : i.sharedDepth(t), c = i.start(a), d = i.node(a).content.cut(i.pos - c, o.pos - c);
    return new J(d, i.depth - a, o.depth - a);
  }
  replace(e, t, r) {
    return EO(this.resolve(e), this.resolve(t), r);
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
    return hs.resolveCached(this, e);
  }
  resolveNoCache(e) {
    return hs.resolve(this, e);
  }
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), hg(this.marks, e);
  }
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  canReplace(e, t, r = z.empty, i = 0, o = r.childCount) {
    let a = this.contentMatchAt(e).matchFragment(r, i, o), c = a && a.matchFragment(this.content, t);
    if (!c || !c.validEnd)
      return !1;
    for (let u = i; u < o; u++)
      if (!this.type.allowsMarks(r.child(u).marks))
        return !1;
    return !0;
  }
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), a = o && o.matchFragment(this.content, t);
    return a ? a.validEnd : !1;
  }
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  check() {
    this.type.checkContent(this.content);
    let e = $e.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!$e.sameSet(e, this.marks))
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
tr.prototype.text = void 0;
class Pa extends tr {
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : hg(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new Pa(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Pa(this.type, this.attrs, e, this.marks);
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
function hg(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Oi {
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  static parse(e, t) {
    let r = new MO(e, t);
    if (r.next == null)
      return Oi.empty;
    let i = mg(r);
    r.next && r.err("Unexpected trailing text");
    let o = BO(LO(i));
    return $O(o, r), o;
  }
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let o = t; i && o < r; o++)
      i = i.matchType(e.child(o).type);
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
    function o(a, c) {
      let u = a.matchFragment(e, r);
      if (u && (!t || u.validEnd))
        return z.from(c.map((d) => d.createAndFill()));
      for (let d = 0; d < a.next.length; d++) {
        let { type: p, next: h } = a.next[d];
        if (!(p.isText || p.hasRequiredAttrs()) && i.indexOf(h) == -1) {
          i.push(h);
          let g = o(h, c.concat(p));
          if (g)
            return g;
        }
      }
      return null;
    }
    return o(this, []);
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
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let a = [];
        for (let c = i; c.type; c = c.via)
          a.push(c.type);
        return a.reverse();
      }
      for (let a = 0; a < o.next.length; a++) {
        let { type: c, next: u } = o.next[a];
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
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let a = 0; a < r.next.length; a++)
        o += (a ? ", " : "") + r.next[a].type.name + "->" + e.indexOf(r.next[a].next);
      return o;
    }).join(`
`);
  }
}
Oi.empty = new Oi(!0);
class MO {
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
function mg(n) {
  let e = [];
  do
    e.push(NO(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function NO(n) {
  let e = [];
  do
    e.push(DO(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function DO(n) {
  let e = PO(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = RO(n, e);
    else
      break;
  return e;
}
function ch(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function RO(n, e) {
  let t = ch(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = ch(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function IO(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let o in t) {
    let a = t[o];
    a.groups.indexOf(e) > -1 && i.push(a);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function PO(n) {
  if (n.eat("(")) {
    let e = mg(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = IO(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function LO(n) {
  let e = [[]];
  return i(o(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(a, c, u) {
    let d = { term: u, to: c };
    return e[a].push(d), d;
  }
  function i(a, c) {
    a.forEach((u) => u.to = c);
  }
  function o(a, c) {
    if (a.type == "choice")
      return a.exprs.reduce((u, d) => u.concat(o(d, c)), []);
    if (a.type == "seq")
      for (let u = 0; ; u++) {
        let d = o(a.exprs[u], c);
        if (u == a.exprs.length - 1)
          return d;
        i(d, c = t());
      }
    else if (a.type == "star") {
      let u = t();
      return r(c, u), i(o(a.expr, u), u), [r(u)];
    } else if (a.type == "plus") {
      let u = t();
      return i(o(a.expr, c), u), i(o(a.expr, u), u), [r(u)];
    } else {
      if (a.type == "opt")
        return [r(c)].concat(o(a.expr, c));
      if (a.type == "range") {
        let u = c;
        for (let d = 0; d < a.min; d++) {
          let p = t();
          i(o(a.expr, u), p), u = p;
        }
        if (a.max == -1)
          i(o(a.expr, u), u);
        else
          for (let d = a.min; d < a.max; d++) {
            let p = t();
            r(u, p), i(o(a.expr, u), p), u = p;
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
function gg(n, e) {
  return e - n;
}
function uh(n, e) {
  let t = [];
  return r(e), t.sort(gg);
  function r(i) {
    let o = n[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    t.push(i);
    for (let a = 0; a < o.length; a++) {
      let { term: c, to: u } = o[a];
      !c && t.indexOf(u) == -1 && r(u);
    }
  }
}
function BO(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(uh(n, 0));
  function t(r) {
    let i = [];
    r.forEach((a) => {
      n[a].forEach(({ term: c, to: u }) => {
        if (!c)
          return;
        let d;
        for (let p = 0; p < i.length; p++)
          i[p][0] == c && (d = i[p][1]);
        uh(n, u).forEach((p) => {
          d || i.push([c, d = []]), d.indexOf(p) == -1 && d.push(p);
        });
      });
    });
    let o = e[r.join(",")] = new Oi(r.indexOf(n.length - 1) > -1);
    for (let a = 0; a < i.length; a++) {
      let c = i[a][1].sort(gg);
      o.next.push({ type: i[a][0], next: e[c.join(",")] || t(c) });
    }
    return o;
  }
}
function $O(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], o = !i.validEnd, a = [];
    for (let c = 0; c < i.next.length; c++) {
      let { type: u, next: d } = i.next[c];
      a.push(u.name), o && !(u.isText || u.hasRequiredAttrs()) && (o = !1), r.indexOf(d) == -1 && r.push(d);
    }
    o && e.err("Only non-generatable nodes (" + a.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function yg(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function vg(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let o = n[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function bg(n) {
  let e = /* @__PURE__ */ Object.create(null);
  if (n)
    for (let t in n)
      e[t] = new FO(n[t]);
  return e;
}
class La {
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = bg(r.attrs), this.defaultAttrs = yg(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == Oi.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : vg(this.attrs, e);
  }
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new tr(this, this.computeAttrs(e), z.from(t), $e.setFrom(r));
  }
  createChecked(e = null, t, r) {
    return t = z.from(t), this.checkContent(t), new tr(this, this.computeAttrs(e), t, $e.setFrom(r));
  }
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = z.from(t), t.size) {
      let a = this.contentMatch.fillBefore(t);
      if (!a)
        return null;
      t = a.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(z.empty, !0);
    return o ? new tr(this, e, t.append(o), $e.setFrom(r)) : null;
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
    return t ? t.length ? t : $e.none : e;
  }
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, a) => r[o] = new La(o, t, a));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
}
class FO {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class el {
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = bg(i.attrs), this.excluded = null;
    let o = yg(this.attrs);
    this.instance = o ? new $e(this, o) : null;
  }
  create(e = null) {
    return !e && this.instance ? this.instance : new $e(this, vg(this.attrs, e));
  }
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, a) => r[o] = new el(o, i++, t, a)), r;
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
class VO {
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = Ot.from(e.nodes), t.marks = Ot.from(e.marks || {}), this.nodes = La.compile(this.spec.nodes, this), this.marks = el.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], a = o.spec.content || "", c = o.spec.marks;
      o.contentMatch = r[a] || (r[a] = Oi.parse(a, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.markSet = c == "_" ? null : c ? fh(this, c.split(" ")) : c == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], a = o.spec.excludes;
      o.excluded = a == null ? [o] : a == "" ? [] : fh(this, a.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof La) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  text(e, t) {
    let r = this.nodes.text;
    return new Pa(r, r.defaultAttrs, e, $e.setFrom(t));
  }
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  nodeFromJSON(e) {
    return tr.fromJSON(this, e);
  }
  markFromJSON(e) {
    return $e.fromJSON(this, e);
  }
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function fh(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = n.marks[i], a = o;
    if (o)
      t.push(o);
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
class uo {
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
    let r = new ph(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  parseSlice(e, t = {}) {
    let r = new ph(this, t, !0);
    return r.addAll(e, t.from, t.to), J.maxOpen(r.finish());
  }
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (WO(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let a = o.getAttrs(e);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  matchStyle(e, t, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let a = this.styles[o], c = a.style;
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
      let o = i.priority == null ? 50 : i.priority, a = 0;
      for (; a < t.length; a++) {
        let c = t[a];
        if ((c.priority == null ? 50 : c.priority) < o)
          break;
      }
      t.splice(a, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((a) => {
        r(a = hh(a)), a.mark || a.ignore || a.clearMark || (a.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((a) => {
        r(a = hh(a)), a.node || a.ignore || a.mark || (a.node = i);
      });
    }
    return t;
  }
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new uo(e, uo.schemaRules(e)));
  }
}
const wg = {
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
}, zO = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, xg = { ol: !0, ul: !0 }, Ba = 1, $a = 2, ss = 4;
function dh(n, e, t) {
  return e != null ? (e ? Ba : 0) | (e === "full" ? $a : 0) : n && n.whitespace == "pre" ? Ba | $a : t & ~ss;
}
class xa {
  constructor(e, t, r, i, o, a, c) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = o, this.options = c, this.content = [], this.activeMarks = $e.none, this.stashMarks = [], this.match = a || (c & ss ? null : e.contentMatch);
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
    if (!(this.options & Ba)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
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
      (this.type ? this.type.allowsMarkType(i.type) : jO(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !wg.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class ph {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, o, a = dh(null, t.preserveWhitespace, 0) | (r ? ss : 0);
    i ? o = new xa(i.type, i.attrs, $e.none, $e.none, !0, t.topMatch || i.type.contentMatch, a) : r ? o = new xa(null, null, $e.none, $e.none, !0, null, a) : o = new xa(e.schema.topNodeType, null, $e.none, $e.none, !0, null, a), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  addDOM(e) {
    e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e);
  }
  withStyleRules(e, t) {
    let r = e.getAttribute("style");
    if (!r)
      return t();
    let i = this.readStyles(UO(r));
    if (!i)
      return;
    let [o, a] = i, c = this.top;
    for (let u = 0; u < a.length; u++)
      this.removePendingMark(a[u], c);
    for (let u = 0; u < o.length; u++)
      this.addPendingMark(o[u]);
    t();
    for (let u = 0; u < o.length; u++)
      this.removePendingMark(o[u], c);
    for (let u = 0; u < a.length; u++)
      this.addPendingMark(a[u]);
  }
  addTextNode(e) {
    let t = e.nodeValue, r = this.top;
    if (r.options & $a || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (r.options & Ba)
        r.options & $a ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], o = e.previousSibling;
        (!i || o && o.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  addElement(e, t) {
    let r = e.nodeName.toLowerCase(), i;
    xg.hasOwnProperty(r) && this.parser.normalizeLists && HO(e);
    let o = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (o ? o.ignore : zO.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!o || o.skip || o.closeParent) {
      o && o.closeParent ? this.open = Math.max(0, this.open - 1) : o && o.skip.nodeType && (e = o.skip);
      let a, c = this.top, u = this.needsBlock;
      if (wg.hasOwnProperty(r))
        c.content.length && c.content[0].isInline && this.open && (this.open--, c = this.top), a = !0, c.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      o && o.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), a && this.sync(c), this.needsBlock = u;
    } else
      this.withStyleRules(e, () => {
        this.addElementByRule(e, o, o.consuming === !1 ? i : void 0);
      });
  }
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  readStyles(e) {
    let t = $e.none, r = $e.none;
    for (let i = 0; i < e.length; i += 2)
      for (let o = void 0; ; ) {
        let a = this.parser.matchStyle(e[i], e[i + 1], this, o);
        if (!a)
          break;
        if (a.ignore)
          return null;
        if (a.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((c) => {
          a.clearMark(c) && (r = c.addToSet(r));
        }) : t = this.parser.schema.marks[a.mark].create(a.attrs).addToSet(t), a.consuming === !1)
          o = a;
        else
          break;
      }
    return [t, r];
  }
  addElementByRule(e, t, r) {
    let i, o, a;
    t.node ? (o = this.parser.schema.nodes[t.node], o.isLeaf ? this.insertNode(o.create(t.attrs)) || this.leafFallback(e) : i = this.enter(o, t.attrs || null, t.preserveWhitespace)) : (a = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(a));
    let c = this.top;
    if (o && o.isLeaf)
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
    for (let o = t ? e.childNodes[t] : e.firstChild, a = r == null ? null : e.childNodes[r]; o != a; o = o.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(o);
    this.findAtPoint(e, i);
  }
  findPlace(e) {
    let t, r;
    for (let i = this.open; i >= 0; i--) {
      let o = this.nodes[i], a = o.findWrapping(e);
      if (a && (!t || t.length > a.length) && (t = a, r = o, !a.length) || o.solid)
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
    let o = this.top;
    o.applyPending(e), o.match = o.match && o.match.matchType(e);
    let a = dh(e, i, o.options);
    o.options & ss && o.content.length == 0 && (a |= ss), this.nodes.push(new xa(e, t, o.activeMarks, o.pendingMarks, r, null, a)), this.open++;
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
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), a = (c, u) => {
      for (; c >= 0; c--) {
        let d = t[c];
        if (d == "") {
          if (c == t.length - 1 || c == 0)
            continue;
          for (; u >= o; u--)
            if (a(c - 1, u))
              return !0;
          return !1;
        } else {
          let p = u > 0 || u == 0 && i ? this.nodes[u].type : r && u >= o ? r.node(u - o).type : null;
          if (!p || p.name != d && p.groups.indexOf(d) == -1)
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
    let t = KO(e, this.top.pendingMarks);
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
function HO(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && xg.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function WO(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function UO(n) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, r = [];
  for (; t = e.exec(n); )
    r.push(t[1], t[2].trim());
  return r;
}
function hh(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function jO(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let o = [], a = (c) => {
      o.push(c);
      for (let u = 0; u < c.edgeCount; u++) {
        let { type: d, next: p } = c.edge(u);
        if (d == e || o.indexOf(p) < 0 && a(p))
          return !0;
      }
    };
    if (a(i.contentMatch))
      return !0;
  }
}
function KO(n, e) {
  for (let t = 0; t < e.length; t++)
    if (n.eq(e[t]))
      return e[t];
}
class Qn {
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  serializeFragment(e, t = {}, r) {
    r || (r = Pc(t).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((a) => {
      if (o.length || a.marks.length) {
        let c = 0, u = 0;
        for (; c < o.length && u < a.marks.length; ) {
          let d = a.marks[u];
          if (!this.marks[d.type.name]) {
            u++;
            continue;
          }
          if (!d.eq(o[c][0]) || d.type.spec.spanning === !1)
            break;
          c++, u++;
        }
        for (; c < o.length; )
          i = o.pop()[1];
        for (; u < a.marks.length; ) {
          let d = a.marks[u++], p = this.serializeMark(d, a.isInline, t);
          p && (o.push([d, i]), i.appendChild(p.dom), i = p.contentDOM || p.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(a, t));
    }), r;
  }
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Qn.renderSpec(Pc(t), this.nodes[e.type.name](e));
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
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Qn.renderSpec(Pc(r), i(e, t));
  }
  static renderSpec(e, t, r = null) {
    if (typeof t == "string")
      return { dom: e.createTextNode(t) };
    if (t.nodeType != null)
      return { dom: t };
    if (t.dom && t.dom.nodeType != null)
      return t;
    let i = t[0], o = i.indexOf(" ");
    o > 0 && (r = i.slice(0, o), i = i.slice(o + 1));
    let a, c = r ? e.createElementNS(r, i) : e.createElement(i), u = t[1], d = 1;
    if (u && typeof u == "object" && u.nodeType == null && !Array.isArray(u)) {
      d = 2;
      for (let p in u)
        if (u[p] != null) {
          let h = p.indexOf(" ");
          h > 0 ? c.setAttributeNS(p.slice(0, h), p.slice(h + 1), u[p]) : c.setAttribute(p, u[p]);
        }
    }
    for (let p = d; p < t.length; p++) {
      let h = t[p];
      if (h === 0) {
        if (p < t.length - 1 || p > d)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: c, contentDOM: c };
      } else {
        let { dom: g, contentDOM: y } = Qn.renderSpec(e, h, r);
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
    return e.cached.domSerializer || (e.cached.domSerializer = new Qn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  static nodesFromSchema(e) {
    let t = mh(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  static marksFromSchema(e) {
    return mh(e.marks);
  }
}
function mh(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function Pc(n) {
  return n.document || window.document;
}
const Sg = 65535, _g = Math.pow(2, 16);
function qO(n, e) {
  return n + e * _g;
}
function gh(n) {
  return n & Sg;
}
function JO(n) {
  return (n - (n & Sg)) / _g;
}
const kg = 1, Cg = 2, Ea = 4, Eg = 8;
class pu {
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  get deleted() {
    return (this.delInfo & Eg) > 0;
  }
  get deletedBefore() {
    return (this.delInfo & (kg | Ea)) > 0;
  }
  get deletedAfter() {
    return (this.delInfo & (Cg | Ea)) > 0;
  }
  get deletedAcross() {
    return (this.delInfo & Ea) > 0;
  }
}
class gn {
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && gn.empty)
      return gn.empty;
  }
  recover(e) {
    let t = 0, r = gh(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + JO(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  _map(e, t, r) {
    let i = 0, o = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
    for (let c = 0; c < this.ranges.length; c += 3) {
      let u = this.ranges[c] - (this.inverted ? i : 0);
      if (u > e)
        break;
      let d = this.ranges[c + o], p = this.ranges[c + a], h = u + d;
      if (e <= h) {
        let g = d ? e == u ? -1 : e == h ? 1 : t : t, y = u + i + (g < 0 ? 0 : p);
        if (r)
          return y;
        let b = e == (t < 0 ? u : h) ? null : qO(c / 3, e - u), _ = e == u ? Cg : e == h ? kg : Ea;
        return (t < 0 ? e != u : e != h) && (_ |= Eg), new pu(y, _, b);
      }
      i += p - d;
    }
    return r ? e + i : new pu(e + i, 0, null);
  }
  touches(e, t) {
    let r = 0, i = gh(t), o = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
    for (let c = 0; c < this.ranges.length; c += 3) {
      let u = this.ranges[c] - (this.inverted ? r : 0);
      if (u > e)
        break;
      let d = this.ranges[c + o], p = u + d;
      if (e <= p && c == i * 3)
        return !0;
      r += this.ranges[c + a] - d;
    }
    return !1;
  }
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let a = this.ranges[i], c = a - (this.inverted ? o : 0), u = a + (this.inverted ? 0 : o), d = this.ranges[i + t], p = this.ranges[i + r];
      e(c, c + d, u, u + p), o += p - d;
    }
  }
  invert() {
    return new gn(this.ranges, !this.inverted);
  }
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  static offset(e) {
    return e == 0 ? gn.empty : new gn(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
gn.empty = new gn([]);
class oo {
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  slice(e = 0, t = this.maps.length) {
    return new oo(this.maps, this.mirror, e, t);
  }
  copy() {
    return new oo(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
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
    let e = new oo();
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
    for (let o = this.from; o < this.to; o++) {
      let a = this.maps[o], c = a.mapResult(e, t);
      if (c.recover != null) {
        let u = this.getMirror(o);
        if (u != null && u > o && u < this.to) {
          o = u, e = this.maps[u].recover(c.recover);
          continue;
        }
      }
      i |= c.delInfo, e = c.pos;
    }
    return r ? e : new pu(e, i, null);
  }
}
const Lc = /* @__PURE__ */ Object.create(null);
class $t {
  getMap() {
    return gn.empty;
  }
  merge(e) {
    return null;
  }
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Lc[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in Lc)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Lc[e] = t, t.prototype.jsonID = e, t;
  }
}
class ut {
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  static ok(e) {
    return new ut(e, null);
  }
  static fail(e) {
    return new ut(null, e);
  }
  static fromReplace(e, t, r, i) {
    try {
      return ut.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof Da)
        return ut.fail(o.message);
      throw o;
    }
  }
}
function Vu(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let o = n.child(i);
    o.content.size && (o = o.copy(Vu(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
  }
  return z.fromArray(r);
}
class jr extends $t {
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new J(Vu(t.content, (a, c) => !a.isAtom || !c.type.allowsMarkType(this.mark.type) ? a : a.mark(this.mark.addToSet(a.marks)), i), t.openStart, t.openEnd);
    return ut.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new er(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new jr(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof jr && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new jr(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new jr(t.from, t.to, e.markFromJSON(t.mark));
  }
}
$t.jsonID("addMark", jr);
class er extends $t {
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new J(Vu(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return ut.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new jr(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new er(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof er && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new er(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new er(t.from, t.to, e.markFromJSON(t.mark));
  }
}
$t.jsonID("removeMark", er);
class Kr extends $t {
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ut.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return ut.fromReplace(e, this.pos, this.pos + 1, new J(z.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Kr(this.pos, t.marks[i]);
        return new Kr(this.pos, this.mark);
      }
    }
    return new fo(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Kr(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Kr(t.pos, e.markFromJSON(t.mark));
  }
}
$t.jsonID("addNodeMark", Kr);
class fo extends $t {
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ut.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return ut.fromReplace(e, this.pos, this.pos + 1, new J(z.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Kr(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new fo(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new fo(t.pos, e.markFromJSON(t.mark));
  }
}
$t.jsonID("removeNodeMark", fo);
class Tt extends $t {
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && hu(e, this.from, this.to) ? ut.fail("Structure replace would overwrite content") : ut.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new gn([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Tt(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new Tt(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof Tt) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? J.empty : new J(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Tt(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? J.empty : new J(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Tt(e.from, this.to, t, this.structure);
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
    return new Tt(t.from, t.to, J.fromJSON(e, t.slice), !!t.structure);
  }
}
$t.jsonID("replace", Tt);
class xt extends $t {
  constructor(e, t, r, i, o, a, c = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = a, this.structure = c;
  }
  apply(e) {
    if (this.structure && (hu(e, this.from, this.gapFrom) || hu(e, this.gapTo, this.to)))
      return ut.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return ut.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? ut.fromReplace(e, this.from, this.to, r) : ut.fail("Content does not fit in gap");
  }
  getMap() {
    return new gn([
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
    return new xt(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), o = e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new xt(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
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
    return new xt(t.from, t.to, t.gapFrom, t.gapTo, J.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
$t.jsonID("replaceAround", xt);
function hu(n, e, t) {
  let r = n.resolve(e), i = t - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let a = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!a || a.isLeaf)
        return !0;
      a = a.firstChild, i--;
    }
  }
  return !1;
}
function GO(n, e, t, r) {
  let i = [], o = [], a, c;
  n.doc.nodesBetween(e, t, (u, d, p) => {
    if (!u.isInline)
      return;
    let h = u.marks;
    if (!r.isInSet(h) && p.type.allowsMarkType(r.type)) {
      let g = Math.max(d, e), y = Math.min(d + u.nodeSize, t), b = r.addToSet(h);
      for (let _ = 0; _ < h.length; _++)
        h[_].isInSet(b) || (a && a.to == g && a.mark.eq(h[_]) ? a.to = y : i.push(a = new er(g, y, h[_])));
      c && c.to == g ? c.to = y : o.push(c = new jr(g, y, r));
    }
  }), i.forEach((u) => n.step(u)), o.forEach((u) => n.step(u));
}
function XO(n, e, t, r) {
  let i = [], o = 0;
  n.doc.nodesBetween(e, t, (a, c) => {
    if (!a.isInline)
      return;
    o++;
    let u = null;
    if (r instanceof el) {
      let d = a.marks, p;
      for (; p = r.isInSet(d); )
        (u || (u = [])).push(p), d = p.removeFromSet(d);
    } else
      r ? r.isInSet(a.marks) && (u = [r]) : u = a.marks;
    if (u && u.length) {
      let d = Math.min(c + a.nodeSize, t);
      for (let p = 0; p < u.length; p++) {
        let h = u[p], g;
        for (let y = 0; y < i.length; y++) {
          let b = i[y];
          b.step == o - 1 && h.eq(i[y].style) && (g = b);
        }
        g ? (g.to = d, g.step = o) : i.push({ style: h, from: Math.max(c, e), to: d, step: o });
      }
    }
  }), i.forEach((a) => n.step(new er(a.from, a.to, a.style)));
}
function YO(n, e, t, r = t.contentMatch) {
  let i = n.doc.nodeAt(e), o = [], a = e + 1;
  for (let c = 0; c < i.childCount; c++) {
    let u = i.child(c), d = a + u.nodeSize, p = r.matchType(u.type);
    if (!p)
      o.push(new Tt(a, d, J.empty));
    else {
      r = p;
      for (let h = 0; h < u.marks.length; h++)
        t.allowsMarkType(u.marks[h].type) || n.step(new er(a, d, u.marks[h]));
      if (u.isText && !t.spec.code) {
        let h, g = /\r?\n|\r/g, y;
        for (; h = g.exec(u.text); )
          y || (y = new J(z.from(t.schema.text(" ", t.allowedMarks(u.marks))), 0, 0)), o.push(new Tt(a + h.index, a + h.index + h[0].length, y));
      }
    }
    a = d;
  }
  if (!r.validEnd) {
    let c = r.fillBefore(z.empty, !0);
    n.replace(a, a, new J(c, 0, 0));
  }
  for (let c = o.length - 1; c >= 0; c--)
    n.step(o[c]);
}
function ZO(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function _o(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), a = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, a, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !ZO(i, o, a))
      break;
  }
  return null;
}
function QO(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, a = r.before(o + 1), c = i.after(o + 1), u = a, d = c, p = z.empty, h = 0;
  for (let b = o, _ = !1; b > t; b--)
    _ || r.index(b) > 0 ? (_ = !0, p = z.from(r.node(b).copy(p)), h++) : u--;
  let g = z.empty, y = 0;
  for (let b = o, _ = !1; b > t; b--)
    _ || i.after(b + 1) < i.end(b) ? (_ = !0, g = z.from(i.node(b).copy(g)), y++) : d++;
  n.step(new xt(u, d, a, c, new J(p.append(g), h, y), p.size - h, !0));
}
function zu(n, e, t = null, r = n) {
  let i = eT(n, e), o = i && tT(r, e);
  return o ? i.map(yh).concat({ type: e, attrs: t }).concat(o.map(yh)) : null;
}
function yh(n) {
  return { type: n, attrs: null };
}
function eT(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let a = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, a) ? o : null;
}
function tT(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), a = e.contentMatch.findWrapping(o.type);
  if (!a)
    return null;
  let u = (a.length ? a[a.length - 1] : e).contentMatch;
  for (let d = r; u && d < i; d++)
    u = u.matchType(t.child(d).type);
  return !u || !u.validEnd ? null : a;
}
function nT(n, e, t) {
  let r = z.empty;
  for (let a = t.length - 1; a >= 0; a--) {
    if (r.size) {
      let c = t[a].type.contentMatch.matchFragment(r);
      if (!c || !c.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = z.from(t[a].type.create(t[a].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new xt(i, o, i, o, new J(r, 0, 0), t.length, !0));
}
function rT(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (a, c) => {
    if (a.isTextblock && !a.hasMarkup(r, i) && iT(n.doc, n.mapping.slice(o).map(c), r)) {
      n.clearIncompatible(n.mapping.slice(o).map(c, 1), r);
      let u = n.mapping.slice(o), d = u.map(c, 1), p = u.map(c + a.nodeSize, 1);
      return n.step(new xt(d, p, d + 1, p - 1, new J(z.from(r.create(i, null, a.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function iT(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function oT(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let a = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, a);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new xt(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new J(z.from(a), 0, 0), 1, !0));
}
function so(n, e, t = 1, r) {
  let i = n.resolve(e), o = i.depth - t, a = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !a.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let d = i.depth - 1, p = t - 2; d > o; d--, p--) {
    let h = i.node(d), g = i.index(d);
    if (h.type.spec.isolating)
      return !1;
    let y = h.content.cutByIndex(g, h.childCount), b = r && r[p + 1];
    b && (y = y.replaceChild(0, b.type.create(b.attrs)));
    let _ = r && r[p] || h;
    if (!h.canReplace(g + 1, h.childCount) || !_.type.validContent(y))
      return !1;
  }
  let c = i.indexAfter(o), u = r && r[0];
  return i.node(o).canReplaceWith(c, c, u ? u.type : i.node(o + 1).type);
}
function sT(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = z.empty, a = z.empty;
  for (let c = i.depth, u = i.depth - t, d = t - 1; c > u; c--, d--) {
    o = z.from(i.node(c).copy(o));
    let p = r && r[d];
    a = z.from(p ? p.type.create(p.attrs, a) : i.node(c).copy(a));
  }
  n.step(new Tt(e, e, new J(o.append(a), t, t), !0));
}
function ei(n, e) {
  let t = n.resolve(e), r = t.index();
  return Og(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function Og(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function tl(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, a, c = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, a = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), c++, a = r.node(i).maybeChild(c)) : (o = r.node(i).maybeChild(c - 1), a = r.node(i + 1)), o && !o.isTextblock && Og(o, a) && r.node(i).canReplace(c, c + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function aT(n, e, t) {
  let r = new Tt(e - t, e + t, J.empty, !0);
  n.step(r);
}
function lT(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function Tg(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let o = 0; o < t.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)
    for (let a = r.depth; a >= 0; a--) {
      let c = a == r.depth ? 0 : r.pos <= (r.start(a + 1) + r.end(a + 1)) / 2 ? -1 : 1, u = r.index(a) + (c > 0 ? 1 : 0), d = r.node(a), p = !1;
      if (o == 1)
        p = d.canReplace(u, u, i);
      else {
        let h = d.contentMatchAt(u).findWrapping(i.firstChild.type);
        p = h && d.canReplaceWith(u, u, h[0]);
      }
      if (p)
        return c == 0 ? r.pos : c < 0 ? r.before(a + 1) : r.after(a + 1);
    }
  return null;
}
function Hu(n, e, t = e, r = J.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), o = n.resolve(t);
  return Ag(i, o, r) ? new Tt(e, t, r) : new cT(i, o, r).fit();
}
function Ag(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class cT {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = z.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
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
      let d = this.findFittable();
      d ? this.placeNodes(d) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, a = r.depth, c = i.depth;
    for (; a && c && o.childCount == 1; )
      o = o.firstChild.content, a--, c--;
    let u = new J(o, a, c);
    return e > -1 ? new xt(r.pos, e, this.$to.pos, this.$to.end(), u, t) : u.size || r.pos != this.$to.pos ? new Tt(r.pos, i.pos, u) : null;
  }
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = Bc(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let a = i.firstChild;
        for (let c = this.depth; c >= 0; c--) {
          let { type: u, match: d } = this.frontier[c], p, h = null;
          if (t == 1 && (a ? d.matchType(a.type) || (h = d.fillBefore(z.from(a), !1)) : o && u.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: c, parent: o, inject: h };
          if (t == 2 && a && (p = d.findWrapping(a.type)))
            return { sliceDepth: r, frontierDepth: c, parent: o, wrap: p };
          if (o && d.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Bc(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new J(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = Bc(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new J(Qo(e, t - 1, 1), t - 1, o ? t - 1 : r);
    } else
      this.unplaced = new J(Qo(e, t, 1), t, r);
  }
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let _ = 0; _ < o.length; _++)
        this.openFrontierNode(o[_]);
    let a = this.unplaced, c = r ? r.content : a.content, u = a.openStart - e, d = 0, p = [], { match: h, type: g } = this.frontier[t];
    if (i) {
      for (let _ = 0; _ < i.childCount; _++)
        p.push(i.child(_));
      h = h.matchFragment(i);
    }
    let y = c.size + e - (a.content.size - a.openEnd);
    for (; d < c.childCount; ) {
      let _ = c.child(d), k = h.matchType(_.type);
      if (!k)
        break;
      d++, (d > 1 || u == 0 || _.content.size) && (h = k, p.push(Mg(_.mark(g.allowedMarks(_.marks)), d == 1 ? u : 0, d == c.childCount ? y : -1)));
    }
    let b = d == c.childCount;
    b || (y = -1), this.placed = es(this.placed, t, z.from(p)), this.frontier[t].match = h, b && y < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let _ = 0, k = c; _ < y; _++) {
      let A = k.lastChild;
      this.frontier.push({ type: A.type, match: A.contentMatchAt(A.childCount) }), k = A.content;
    }
    this.unplaced = b ? e == 0 ? J.empty : new J(Qo(a.content, e - 1, 1), e - 1, y < 0 ? a.openEnd : e - 1) : new J(Qo(a.content, e, d), a.openStart, a.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !$c(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), a = $c(e, t, i, r, o);
        if (!!a) {
          for (let c = t - 1; c >= 0; c--) {
            let { match: u, type: d } = this.frontier[c], p = $c(e, c, d, u, !0);
            if (!p || p.childCount)
              continue e;
          }
          return { depth: t, fit: a, move: o ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = es(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = es(this.placed, this.depth, z.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(z.empty, !0);
    t.childCount && (this.placed = es(this.placed, this.frontier.length, t));
  }
}
function Qo(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Qo(n.firstChild.content, e - 1, t)));
}
function es(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(es(n.lastChild.content, e - 1, t)));
}
function Bc(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Mg(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Mg(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(z.empty, !0)))), n.copy(r);
}
function $c(n, e, t, r, i) {
  let o = n.node(e), a = i ? n.indexAfter(e) : n.index(e);
  if (a == o.childCount && !t.compatibleContent(o.type))
    return null;
  let c = r.fillBefore(o.content, !0, a);
  return c && !uT(t, o.content, a) ? c : null;
}
function uT(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function fT(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function dT(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (Ag(i, o, r))
    return n.step(new Tt(e, t, r));
  let a = Dg(i, n.doc.resolve(t));
  a[a.length - 1] == 0 && a.pop();
  let c = -(i.depth + 1);
  a.unshift(c);
  for (let g = i.depth, y = i.pos - 1; g > 0; g--, y--) {
    let b = i.node(g).type.spec;
    if (b.defining || b.definingAsContext || b.isolating)
      break;
    a.indexOf(g) > -1 ? c = g : i.before(g) == y && a.splice(1, 0, -g);
  }
  let u = a.indexOf(c), d = [], p = r.openStart;
  for (let g = r.content, y = 0; ; y++) {
    let b = g.firstChild;
    if (d.push(b), y == r.openStart)
      break;
    g = b.content;
  }
  for (let g = p - 1; g >= 0; g--) {
    let y = d[g], b = fT(y.type);
    if (b && !y.sameMarkup(i.node(Math.abs(c) - 1)))
      p = g;
    else if (b || !y.type.isTextblock)
      break;
  }
  for (let g = r.openStart; g >= 0; g--) {
    let y = (g + p + 1) % (r.openStart + 1), b = d[y];
    if (!!b)
      for (let _ = 0; _ < a.length; _++) {
        let k = a[(_ + u) % a.length], A = !0;
        k < 0 && (A = !1, k = -k);
        let D = i.node(k - 1), H = i.index(k - 1);
        if (D.canReplaceWith(H, H, b.type, b.marks))
          return n.replace(i.before(k), A ? o.after(k) : t, new J(Ng(r.content, 0, r.openStart, y), y, r.openEnd));
      }
  }
  let h = n.steps.length;
  for (let g = a.length - 1; g >= 0 && (n.replace(e, t, r), !(n.steps.length > h)); g--) {
    let y = a[g];
    y < 0 || (e = i.before(y), t = o.after(y));
  }
}
function Ng(n, e, t, r, i) {
  if (e < t) {
    let o = n.firstChild;
    n = n.replaceChild(0, o.copy(Ng(o.content, e + 1, t, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), a = o.fillBefore(n).append(n);
    n = a.append(o.matchFragment(a).fillBefore(z.empty, !0));
  }
  return n;
}
function pT(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = lT(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new J(z.from(r), 0, 0));
}
function hT(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), o = Dg(r, i);
  for (let a = 0; a < o.length; a++) {
    let c = o[a], u = a == o.length - 1;
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
function Dg(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = n.start(i);
    if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
  }
  return t;
}
class ao extends $t {
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ut.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return ut.fromReplace(e, this.pos, this.pos + 1, new J(z.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return gn.empty;
  }
  invert(e) {
    return new ao(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ao(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new ao(t.pos, t.attr, t.value);
  }
}
$t.jsonID("attr", ao);
class ms extends $t {
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return ut.ok(r);
  }
  getMap() {
    return gn.empty;
  }
  invert(e) {
    return new ms(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new ms(t.attr, t.value);
  }
}
$t.jsonID("docAttr", ms);
let po = class extends Error {
};
po = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
po.prototype = Object.create(Error.prototype);
po.prototype.constructor = po;
po.prototype.name = "TransformError";
class mT {
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new oo();
  }
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new po(t.failed);
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
  replace(e, t = e, r = J.empty) {
    let i = Hu(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  replaceWith(e, t, r) {
    return this.replace(e, t, new J(z.from(r), 0, 0));
  }
  delete(e, t) {
    return this.replace(e, t, J.empty);
  }
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  replaceRange(e, t, r) {
    return dT(this, e, t, r), this;
  }
  replaceRangeWith(e, t, r) {
    return pT(this, e, t, r), this;
  }
  deleteRange(e, t) {
    return hT(this, e, t), this;
  }
  lift(e, t) {
    return QO(this, e, t), this;
  }
  join(e, t = 1) {
    return aT(this, e, t), this;
  }
  wrap(e, t) {
    return nT(this, e, t), this;
  }
  setBlockType(e, t = e, r, i = null) {
    return rT(this, e, t, r, i), this;
  }
  setNodeMarkup(e, t, r = null, i) {
    return oT(this, e, t, r, i), this;
  }
  setNodeAttribute(e, t, r) {
    return this.step(new ao(e, t, r)), this;
  }
  setDocAttribute(e, t) {
    return this.step(new ms(e, t)), this;
  }
  addNodeMark(e, t) {
    return this.step(new Kr(e, t)), this;
  }
  removeNodeMark(e, t) {
    if (!(t instanceof $e)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new fo(e, t)), this;
  }
  split(e, t = 1, r) {
    return sT(this, e, t, r), this;
  }
  addMark(e, t, r) {
    return GO(this, e, t, r), this;
  }
  removeMark(e, t, r) {
    return XO(this, e, t, r), this;
  }
  clearIncompatible(e, t, r) {
    return YO(this, e, t, r), this;
  }
}
const Fc = /* @__PURE__ */ Object.create(null);
class ye {
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new gT(e.min(t), e.max(t))];
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
  replace(e, t = J.empty) {
    let r = t.content.lastChild, i = null;
    for (let c = 0; c < t.openEnd; c++)
      i = r, r = r.lastChild;
    let o = e.steps.length, a = this.ranges;
    for (let c = 0; c < a.length; c++) {
      let { $from: u, $to: d } = a[c], p = e.mapping.slice(o);
      e.replaceRange(p.map(u.pos), p.map(d.pos), c ? J.empty : t), c == 0 && wh(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: a, $to: c } = i[o], u = e.mapping.slice(r), d = u.map(a.pos), p = u.map(c.pos);
      o ? e.deleteRange(d, p) : (e.replaceRangeWith(d, p, t), wh(e, r, t.isInline ? -1 : 1));
    }
  }
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new pe(e) : Qi(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let a = t < 0 ? Qi(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : Qi(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
      if (a)
        return a;
    }
    return null;
  }
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new Wn(e.node(0));
  }
  static atStart(e) {
    return Qi(e, e, 0, 0, 1) || new Wn(e);
  }
  static atEnd(e) {
    return Qi(e, e, e.content.size, e.childCount, -1) || new Wn(e);
  }
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Fc[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in Fc)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Fc[e] = t, t.prototype.jsonID = e, t;
  }
  getBookmark() {
    return pe.between(this.$anchor, this.$head).getBookmark();
  }
}
ye.prototype.visible = !0;
class gT {
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let vh = !1;
function bh(n) {
  !vh && !n.parent.inlineContent && (vh = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class pe extends ye {
  constructor(e, t = e) {
    bh(e), bh(t), super(e, t);
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return ye.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new pe(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = J.empty) {
    if (super.replace(e, t), t == J.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof pe && e.anchor == this.anchor && e.head == this.head;
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
    return new pe(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = ye.findFrom(t, r, !0) || ye.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return ye.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (ye.findFrom(e, -r, !0) || ye.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new pe(e, t);
  }
}
ye.jsonID("text", pe);
class nl {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new nl(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return pe.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class oe extends ye {
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? ye.near(o) : new oe(o);
  }
  content() {
    return new J(z.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof oe && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Wu(this.anchor);
  }
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new oe(e.resolve(t.anchor));
  }
  static create(e, t) {
    return new oe(e.resolve(t));
  }
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
oe.prototype.visible = !1;
ye.jsonID("node", oe);
class Wu {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new nl(r, r) : new Wu(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && oe.isSelectable(r) ? new oe(t) : ye.near(t);
  }
}
class Wn extends ye {
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = J.empty) {
    if (t == J.empty) {
      e.delete(0, e.doc.content.size);
      let r = ye.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  static fromJSON(e) {
    return new Wn(e);
  }
  map(e) {
    return new Wn(e);
  }
  eq(e) {
    return e instanceof Wn;
  }
  getBookmark() {
    return yT;
  }
}
ye.jsonID("all", Wn);
const yT = {
  map() {
    return this;
  },
  resolve(n) {
    return new Wn(n);
  }
};
function Qi(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return pe.create(n, t);
  for (let a = r - (i > 0 ? 0 : 1); i > 0 ? a < e.childCount : a >= 0; a += i) {
    let c = e.child(a);
    if (c.isAtom) {
      if (!o && oe.isSelectable(c))
        return oe.create(n, t - (i < 0 ? c.nodeSize : 0));
    } else {
      let u = Qi(n, c, t + i, i < 0 ? c.childCount : 0, i, o);
      if (u)
        return u;
    }
    t += c.nodeSize * i;
  }
  return null;
}
function wh(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof Tt || i instanceof xt))
    return;
  let o = n.mapping.maps[r], a;
  o.forEach((c, u, d, p) => {
    a == null && (a = p);
  }), n.setSelection(ye.near(n.doc.resolve(a), t));
}
const xh = 1, Sa = 2, Sh = 4;
class vT extends mT {
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | xh) & ~Sa, this.storedMarks = null, this;
  }
  get selectionSet() {
    return (this.updated & xh) > 0;
  }
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Sa, this;
  }
  ensureMarks(e) {
    return $e.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  get storedMarksSet() {
    return (this.updated & Sa) > 0;
  }
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~Sa, this.storedMarks = null;
  }
  setTime(e) {
    return this.time = e, this;
  }
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || $e.none))), r.replaceWith(this, e), this;
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
      let o = this.storedMarks;
      if (!o) {
        let a = this.doc.resolve(t);
        o = r == t ? a.marks() : a.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(ye.near(this.selection.$to)), this;
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
function _h(n, e) {
  return !e || !n ? n : n.bind(e);
}
class ts {
  constructor(e, t, r) {
    this.name = e, this.init = _h(t.init, r), this.apply = _h(t.apply, r);
  }
}
const bT = [
  new ts("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new ts("selection", {
    init(n, e) {
      return n.selection || ye.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new ts("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new ts("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Vc {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = bT.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new ts(r.key, r.spec.state, r));
    });
  }
}
class no {
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
      let o = !1;
      for (let a = 0; a < this.config.plugins.length; a++) {
        let c = this.config.plugins[a];
        if (c.spec.appendTransaction) {
          let u = i ? i[a].n : 0, d = i ? i[a].state : this, p = u < t.length && c.spec.appendTransaction.call(c, u ? t.slice(u) : t, d, r);
          if (p && r.filterTransaction(p, a)) {
            if (p.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let h = 0; h < this.config.plugins.length; h++)
                i.push(h < a ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(p), r = r.applyInner(p), o = !0;
          }
          i && (i[a] = { state: r, n: t.length });
        }
      }
      if (!o)
        return { state: r, transactions: t };
    }
  }
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new no(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      t[o.name] = o.apply(e, this[o.name], this, t);
    }
    return t;
  }
  get tr() {
    return new vT(this);
  }
  static create(e) {
    let t = new Vc(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new no(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  reconfigure(e) {
    let t = new Vc(this.schema, e.plugins), r = t.fields, i = new no(t);
    for (let o = 0; o < r.length; o++) {
      let a = r[o].name;
      i[a] = this.hasOwnProperty(a) ? this[a] : r[o].init(e, i);
    }
    return i;
  }
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Vc(e.schema, e.plugins), o = new no(i);
    return i.fields.forEach((a) => {
      if (a.name == "doc")
        o.doc = tr.fromJSON(e.schema, t.doc);
      else if (a.name == "selection")
        o.selection = ye.fromJSON(o.doc, t.selection);
      else if (a.name == "storedMarks")
        t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let c in r) {
            let u = r[c], d = u.spec.state;
            if (u.key == a.name && d && d.fromJSON && Object.prototype.hasOwnProperty.call(t, c)) {
              o[a.name] = d.fromJSON.call(u, e, t[c], o);
              return;
            }
          }
        o[a.name] = a.init(e, o);
      }
    }), o;
  }
}
function Rg(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Rg(i, e, {})), t[r] = i;
  }
  return t;
}
class ln {
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Rg(e.props, this, this.props), this.key = e.key ? e.key.key : Ig("plugin");
  }
  getState(e) {
    return e[this.key];
  }
}
const zc = /* @__PURE__ */ Object.create(null);
function Ig(n) {
  return n in zc ? n + "$" + ++zc[n] : (zc[n] = 0, n + "$");
}
class lr {
  constructor(e = "key") {
    this.key = Ig(e);
  }
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  getState(e) {
    return e[this.key];
  }
}
const Ut = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, gs = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let kh = null;
const Sr = function(n, e, t) {
  let r = kh || (kh = document.createRange());
  return r.setEnd(n, t == null ? n.nodeValue.length : t), r.setStart(n, e || 0), r;
}, Ti = function(n, e, t, r) {
  return t && (Ch(n, e, t, r, -1) || Ch(n, e, t, r, 1));
}, wT = /^(img|br|input|textarea|hr)$/i;
function Ch(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Zn(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || Uu(n) || wT.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = Ut(n) + (i < 0 ? 0 : 1), n = o;
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
function xT(n, e, t) {
  for (let r = e == 0, i = e == Zn(n); r || i; ) {
    if (n == t)
      return !0;
    let o = Ut(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == Zn(n);
  }
}
function Uu(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const rl = function(n) {
  return n.focusNode && Ti(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function yi(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function ST(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function _T(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: r.offset };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: r.startOffset };
  }
}
const rr = typeof navigator < "u" ? navigator : null, Eh = typeof document < "u" ? document : null, ti = rr && rr.userAgent || "", mu = /Edge\/(\d+)/.exec(ti), Pg = /MSIE \d/.exec(ti), gu = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ti), on = !!(Pg || gu || mu), Jr = Pg ? document.documentMode : gu ? +gu[1] : mu ? +mu[1] : 0, Un = !on && /gecko\/(\d+)/i.test(ti);
Un && +(/Firefox\/(\d+)/.exec(ti) || [0, 0])[1];
const yu = !on && /Chrome\/(\d+)/.exec(ti), Lt = !!yu, kT = yu ? +yu[1] : 0, Jt = !on && !!rr && /Apple Computer/.test(rr.vendor), ho = Jt && (/Mobile\/\w+/.test(ti) || !!rr && rr.maxTouchPoints > 2), An = ho || (rr ? /Mac/.test(rr.platform) : !1), CT = rr ? /Win/.test(rr.platform) : !1, zn = /Android \d/.test(ti), Cs = !!Eh && "webkitFontSmoothing" in Eh.documentElement.style, ET = Cs ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function OT(n) {
  return {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function xr(n, e) {
  return typeof n == "number" ? n : n[e];
}
function TT(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Oh(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let a = t || n.dom; a; a = gs(a)) {
    if (a.nodeType != 1)
      continue;
    let c = a, u = c == o.body, d = u ? OT(o) : TT(c), p = 0, h = 0;
    if (e.top < d.top + xr(r, "top") ? h = -(d.top - e.top + xr(i, "top")) : e.bottom > d.bottom - xr(r, "bottom") && (h = e.bottom - e.top > d.bottom - d.top ? e.top + xr(i, "top") - d.top : e.bottom - d.bottom + xr(i, "bottom")), e.left < d.left + xr(r, "left") ? p = -(d.left - e.left + xr(i, "left")) : e.right > d.right - xr(r, "right") && (p = e.right - d.right + xr(i, "right")), p || h)
      if (u)
        o.defaultView.scrollBy(p, h);
      else {
        let g = c.scrollLeft, y = c.scrollTop;
        h && (c.scrollTop += h), p && (c.scrollLeft += p);
        let b = c.scrollLeft - g, _ = c.scrollTop - y;
        e = { left: e.left - b, top: e.top - _, right: e.right - b, bottom: e.bottom - _ };
      }
    if (u || /^(fixed|sticky)$/.test(getComputedStyle(a).position))
      break;
  }
}
function AT(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, a = t + 1; a < Math.min(innerHeight, e.bottom); a += 5) {
    let c = n.root.elementFromPoint(o, a);
    if (!c || c == n.dom || !n.dom.contains(c))
      continue;
    let u = c.getBoundingClientRect();
    if (u.top >= t - 20) {
      r = c, i = u.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Lg(n.dom) };
}
function Lg(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = gs(r))
    ;
  return e;
}
function MT({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Bg(t, r == 0 ? 0 : r - e);
}
function Bg(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: o } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let Xi = null;
function NT(n) {
  if (n.setActive)
    return n.setActive();
  if (Xi)
    return n.focus(Xi);
  let e = Lg(n);
  n.focus(Xi == null ? {
    get preventScroll() {
      return Xi = { preventScroll: !0 }, !0;
    }
  } : void 0), Xi || (Xi = !1, Bg(e, 0));
}
function $g(n, e) {
  let t, r = 2e8, i, o = 0, a = e.top, c = e.top, u, d;
  for (let p = n.firstChild, h = 0; p; p = p.nextSibling, h++) {
    let g;
    if (p.nodeType == 1)
      g = p.getClientRects();
    else if (p.nodeType == 3)
      g = Sr(p).getClientRects();
    else
      continue;
    for (let y = 0; y < g.length; y++) {
      let b = g[y];
      if (b.top <= a && b.bottom >= c) {
        a = Math.max(b.bottom, a), c = Math.min(b.top, c);
        let _ = b.left > e.left ? b.left - e.left : b.right < e.left ? e.left - b.right : 0;
        if (_ < r) {
          t = p, r = _, i = _ && t.nodeType == 3 ? {
            left: b.right < e.left ? b.right : b.left,
            top: e.top
          } : e, p.nodeType == 1 && _ && (o = h + (e.left >= (b.left + b.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        b.top > e.top && !u && b.left <= e.left && b.right >= e.left && (u = p, d = { left: Math.max(b.left, Math.min(b.right, e.left)), top: b.top });
      !t && (e.left >= b.right && e.top >= b.top || e.left >= b.left && e.top >= b.bottom) && (o = h + 1);
    }
  }
  return !t && u && (t = u, i = d, r = 0), t && t.nodeType == 3 ? DT(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : $g(t, i);
}
function DT(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = Vr(r, 1);
    if (o.top != o.bottom && ju(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function ju(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function RT(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function IT(n, e, t) {
  let { node: r, offset: i } = $g(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let a = r.getBoundingClientRect();
    o = a.left != a.right && t.left > (a.left + a.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function PT(n, e, t, r) {
  let i = -1;
  for (let o = e, a = !1; o != n.dom; ) {
    let c = n.docView.nearestDesc(o, !0);
    if (!c)
      return null;
    if (c.dom.nodeType == 1 && (c.node.isBlock && c.parent && !a || !c.contentDOM)) {
      let u = c.dom.getBoundingClientRect();
      if (c.node.isBlock && c.parent && !a && (a = !0, u.left > r.left || u.top > r.top ? i = c.posBefore : (u.right < r.left || u.bottom < r.top) && (i = c.posAfter)), !c.contentDOM && i < 0 && !c.node.isText)
        return (c.node.isBlock ? r.top < (u.top + u.bottom) / 2 : r.left < (u.left + u.right) / 2) ? c.posBefore : c.posAfter;
    }
    o = c.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function Fg(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i; ; ) {
      let a = n.childNodes[o];
      if (a.nodeType == 1) {
        let c = a.getClientRects();
        for (let u = 0; u < c.length; u++) {
          let d = c[u];
          if (ju(e, d))
            return Fg(a, e, d);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return n;
}
function LT(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = _T(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let a = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), c;
  if (!a || !n.dom.contains(a.nodeType != 1 ? a.parentNode : a)) {
    let d = n.dom.getBoundingClientRect();
    if (!ju(e, d) || (a = Fg(n.dom, e, d), !a))
      return null;
  }
  if (Jt)
    for (let d = a; r && d; d = gs(d))
      d.draggable && (r = void 0);
  if (a = RT(a, e), r) {
    if (Un && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let p = r.childNodes[i], h;
      p.nodeName == "IMG" && (h = p.getBoundingClientRect()).right <= e.left && h.bottom > e.top && i++;
    }
    let d;
    Cs && i && r.nodeType == 1 && (d = r.childNodes[i - 1]).nodeType == 1 && d.contentEditable == "false" && d.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? c = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (c = PT(n, r, i, e));
  }
  c == null && (c = IT(n, a, e));
  let u = n.docView.nearestDesc(a, !0);
  return { pos: c, inside: u ? u.posAtStart - u.border : -1 };
}
function Th(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Vr(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Th(r))
      return r;
  }
  return Array.prototype.find.call(t, Th) || n.getBoundingClientRect();
}
const BT = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Vg(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), a = Cs || Un;
  if (r.nodeType == 3)
    if (a && (BT.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let u = Vr(Sr(r, i, i), t);
      if (Un && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let d = Vr(Sr(r, i - 1, i - 1), -1);
        if (d.top == u.top) {
          let p = Vr(Sr(r, i, i + 1), -1);
          if (p.top != u.top)
            return Yo(p, p.left < d.left);
        }
      }
      return u;
    } else {
      let u = i, d = i, p = t < 0 ? 1 : -1;
      return t < 0 && !i ? (d++, p = -1) : t >= 0 && i == r.nodeValue.length ? (u--, p = 1) : t < 0 ? u-- : d++, Yo(Vr(Sr(r, u, d), p), p < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == Zn(r))) {
      let u = r.childNodes[i - 1];
      if (u.nodeType == 1)
        return Hc(u.getBoundingClientRect(), !1);
    }
    if (o == null && i < Zn(r)) {
      let u = r.childNodes[i];
      if (u.nodeType == 1)
        return Hc(u.getBoundingClientRect(), !0);
    }
    return Hc(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == Zn(r))) {
    let u = r.childNodes[i - 1], d = u.nodeType == 3 ? Sr(u, Zn(u) - (a ? 0 : 1)) : u.nodeType == 1 && (u.nodeName != "BR" || !u.nextSibling) ? u : null;
    if (d)
      return Yo(Vr(d, 1), !1);
  }
  if (o == null && i < Zn(r)) {
    let u = r.childNodes[i];
    for (; u.pmViewDesc && u.pmViewDesc.ignoreForCoords; )
      u = u.nextSibling;
    let d = u ? u.nodeType == 3 ? Sr(u, 0, a ? 0 : 1) : u.nodeType == 1 ? u : null : null;
    if (d)
      return Yo(Vr(d, -1), !0);
  }
  return Yo(Vr(r.nodeType == 3 ? Sr(r) : r, -t), t >= 0);
}
function Yo(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Hc(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function zg(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function $T(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return zg(n, e, () => {
    let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let c = n.docView.nearestDesc(o, !0);
      if (!c)
        break;
      if (c.node.isBlock) {
        o = c.contentDOM || c.dom;
        break;
      }
      o = c.dom.parentNode;
    }
    let a = Vg(n, i.pos, 1);
    for (let c = o.firstChild; c; c = c.nextSibling) {
      let u;
      if (c.nodeType == 1)
        u = c.getClientRects();
      else if (c.nodeType == 3)
        u = Sr(c, 0, c.nodeValue.length).getClientRects();
      else
        continue;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (p.bottom > p.top + 1 && (t == "up" ? a.top - p.top > (p.bottom - a.top) * 2 : p.bottom - a.bottom > (a.bottom - p.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const FT = /[\u0590-\u08ac]/;
function VT(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, a = i == r.parent.content.size, c = n.domSelection();
  return !FT.test(r.parent.textContent) || !c.modify ? t == "left" || t == "backward" ? o : a : zg(n, e, () => {
    let { focusNode: u, focusOffset: d, anchorNode: p, anchorOffset: h } = n.domSelectionRange(), g = c.caretBidiLevel;
    c.modify("move", t, "character");
    let y = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: b, focusOffset: _ } = n.domSelectionRange(), k = b && !y.contains(b.nodeType == 1 ? b : b.parentNode) || u == b && d == _;
    try {
      c.collapse(p, h), u && (u != p || d != h) && c.extend && c.extend(u, d);
    } catch {
    }
    return g != null && (c.caretBidiLevel = g), k;
  });
}
let Ah = null, Mh = null, Nh = !1;
function zT(n, e, t) {
  return Ah == e && Mh == t ? Nh : (Ah = e, Mh = t, Nh = t == "up" || t == "down" ? $T(n, e, t) : VT(n, e, t));
}
const Nn = 0, Dh = 1, vi = 2, ir = 3;
class Es {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Nn, r.pmViewDesc = this;
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
        let o, a;
        if (e == this.contentDOM)
          o = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((a = o.pmViewDesc) && a.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(a) + a.size : this.posAtStart;
      } else {
        let o, a;
        if (e == this.contentDOM)
          o = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((a = o.pmViewDesc) && a.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(a) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > Ut(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return (i == null ? r > 0 : i) ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), a;
      if (o && (!t || o.node))
        if (r && (a = o.nodeDOM) && !(a.nodeType == 1 ? a.contains(e.nodeType == 1 ? e : e.parentNode) : a == e))
          r = !1;
        else
          return o;
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
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let a = this.children[r], c = o + a.size;
      if (c > e || a instanceof Wg) {
        i = e - o;
        break;
      }
      o = c;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Hg && o.side >= 0; r--)
      ;
    if (t <= 0) {
      let o, a = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, a = !1)
        ;
      return o && t && a && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? Ut(o.dom) + 1 : 0 };
    } else {
      let o, a = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, a = !1)
        ;
      return o && a && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? Ut(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let a = r, c = 0; ; c++) {
      let u = this.children[c], d = a + u.size;
      if (i == -1 && e <= d) {
        let p = a + u.border;
        if (e >= p && t <= d - u.border && u.node && u.contentDOM && this.contentDOM.contains(u.contentDOM))
          return u.parseRange(e, t, p);
        e = a;
        for (let h = c; h > 0; h--) {
          let g = this.children[h - 1];
          if (g.size && g.dom.parentNode == this.contentDOM && !g.emptyChildAt(1)) {
            i = Ut(g.dom) + 1;
            break;
          }
          e -= g.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (d > t || c == this.children.length - 1)) {
        t = d;
        for (let p = c + 1; p < this.children.length; p++) {
          let h = this.children[p];
          if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(-1)) {
            o = Ut(h.dom);
            break;
          }
          t += h.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      a = d;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: o };
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
    let o = Math.min(e, t), a = Math.max(e, t);
    for (let g = 0, y = 0; g < this.children.length; g++) {
      let b = this.children[g], _ = y + b.size;
      if (o > y && a < _)
        return b.setSelection(e - y - b.border, t - y - b.border, r, i);
      y = _;
    }
    let c = this.domFromPos(e, e ? -1 : 1), u = t == e ? c : this.domFromPos(t, t ? -1 : 1), d = r.getSelection(), p = !1;
    if ((Un || Jt) && e == t) {
      let { node: g, offset: y } = c;
      if (g.nodeType == 3) {
        if (p = !!(y && g.nodeValue[y - 1] == `
`), p && y == g.nodeValue.length)
          for (let b = g, _; b; b = b.parentNode) {
            if (_ = b.nextSibling) {
              _.nodeName == "BR" && (c = u = { node: _.parentNode, offset: Ut(_) + 1 });
              break;
            }
            let k = b.pmViewDesc;
            if (k && k.node && k.node.isBlock)
              break;
          }
      } else {
        let b = g.childNodes[y - 1];
        p = b && (b.nodeName == "BR" || b.contentEditable == "false");
      }
    }
    if (Un && d.focusNode && d.focusNode != u.node && d.focusNode.nodeType == 1) {
      let g = d.focusNode.childNodes[d.focusOffset];
      g && g.contentEditable == "false" && (i = !0);
    }
    if (!(i || p && Jt) && Ti(c.node, c.offset, d.anchorNode, d.anchorOffset) && Ti(u.node, u.offset, d.focusNode, d.focusOffset))
      return;
    let h = !1;
    if ((d.extend || e == t) && !p) {
      d.collapse(c.node, c.offset);
      try {
        e != t && d.extend(u.node, u.offset), h = !0;
      } catch {
      }
    }
    if (!h) {
      if (e > t) {
        let y = c;
        c = u, u = y;
      }
      let g = document.createRange();
      g.setEnd(u.node, u.offset), g.setStart(c.node, c.offset), d.removeAllRanges(), d.addRange(g);
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
      let o = this.children[i], a = r + o.size;
      if (r == a ? e <= a && t >= r : e < a && t > r) {
        let c = r + o.border, u = a - o.border;
        if (e >= c && t <= u) {
          this.dirty = e == r || t == a ? vi : Dh, e == c && t == u && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = ir : o.markDirty(e - c, t - c);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? vi : ir;
      }
      r = a;
    }
    this.dirty = vi;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? vi : Dh;
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
class Hg extends Es {
  constructor(e, t, r, i) {
    let o, a = t.type.toDOM;
    if (typeof a == "function" && (a = a(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !t.type.spec.raw) {
      if (a.nodeType != 1) {
        let c = document.createElement("span");
        c.appendChild(a), a = c;
      }
      a.contentEditable = "false", a.classList.add("ProseMirror-widget");
    }
    super(e, [], a, null), this.widget = t, this.widget = t, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Nn && e.type.eq(this.widget.type);
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
class HT extends Es {
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
class Ai extends Es {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let o = i.nodeViews[t.type.name], a = o && o(t, i, r);
    return (!a || !a.dom) && (a = Qn.renderSpec(document, t.type.spec.toDOM(t, r))), new Ai(e, t, a.dom, a.contentDOM || a.dom);
  }
  parseRule() {
    return this.dirty & ir || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != ir && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Nn) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Nn;
    }
  }
  slice(e, t, r) {
    let i = Ai.create(this.parent, this.mark, !0, r), o = this.children, a = this.size;
    t < a && (o = wu(o, t, a, r)), e > 0 && (o = wu(o, 0, e, r));
    for (let c = 0; c < o.length; c++)
      o[c].parent = i;
    return i.children = o, i;
  }
}
class Gr extends Es {
  constructor(e, t, r, i, o, a, c, u, d) {
    super(e, [], o, a), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = c;
  }
  static create(e, t, r, i, o, a) {
    let c = o.nodeViews[t.type.name], u, d = c && c(t, o, () => {
      if (!u)
        return a;
      if (u.parent)
        return u.parent.posBeforeChild(u);
    }, r, i), p = d && d.dom, h = d && d.contentDOM;
    if (t.isText) {
      if (!p)
        p = document.createTextNode(t.text);
      else if (p.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      p || ({ dom: p, contentDOM: h } = Qn.renderSpec(document, t.type.spec.toDOM(t)));
    !h && !t.isText && p.nodeName != "BR" && (p.hasAttribute("contenteditable") || (p.contentEditable = "false"), t.type.spec.draggable && (p.draggable = !0));
    let g = p;
    return p = Kg(p, r, t), d ? u = new WT(e, t, r, i, p, h || null, g, d, o, a + 1) : t.isText ? new il(e, t, r, i, p, g, o) : new Gr(e, t, r, i, p, h || null, g, o, a + 1);
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
    return this.dirty == Nn && e.eq(this.node) && bu(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, a = o && o.pos > -1 ? o : null, c = o && o.pos < 0, u = new jT(this, a && a.node, e);
    JT(this.node, this.innerDeco, (d, p, h) => {
      d.spec.marks ? u.syncToMarks(d.spec.marks, r, e) : d.type.side >= 0 && !h && u.syncToMarks(p == this.node.childCount ? $e.none : this.node.child(p).marks, r, e), u.placeWidget(d, e, i);
    }, (d, p, h, g) => {
      u.syncToMarks(d.marks, r, e);
      let y;
      u.findNodeMatch(d, p, h, g) || c && e.state.selection.from > i && e.state.selection.to < i + d.nodeSize && (y = u.findIndexWithChild(o.node)) > -1 && u.updateNodeAt(d, p, h, y, e) || u.updateNextNode(d, p, h, e, g, i) || u.addNode(d, p, h, e, i), i += d.nodeSize;
    }), u.syncToMarks([], r, e), this.node.isTextblock && u.addTextblockHacks(), u.destroyRest(), (u.changed || this.dirty == vi) && (a && this.protectLocalComposition(e, a), Ug(this.contentDOM, this.children, e), ho && GT(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof pe) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.domSelectionRange(), a = XT(o.focusNode, o.focusOffset);
    if (!a || !this.dom.contains(a.parentNode))
      return null;
    if (this.node.inlineContent) {
      let c = a.nodeValue, u = YT(this.node.content, c, r - t, i - t);
      return u < 0 ? null : { node: a, pos: u, text: c };
    } else
      return { node: a, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let o = t;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let a = new HT(this, o, t, i);
    e.input.compositionNodes.push(a), this.children = wu(this.children, r, r + i.length, e, a);
  }
  update(e, t, r, i) {
    return this.dirty == ir || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Nn;
  }
  updateOuterDeco(e) {
    if (bu(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = jg(this.dom, this.nodeDOM, vu(this.outerDeco, this.node, t), vu(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
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
  Kg(r, e, n);
  let o = new Gr(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class il extends Gr {
  constructor(e, t, r, i, o, a, c) {
    super(e, t, r, i, o, null, a, c, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == ir || this.dirty != Nn && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Nn || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Nn, !0);
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
    let i = this.node.cut(e, t), o = document.createTextNode(i.text);
    return new il(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = ir);
  }
  get domAtom() {
    return !1;
  }
}
class Wg extends Es {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Nn && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class WT extends Gr {
  constructor(e, t, r, i, o, a, c, u, d, p) {
    super(e, t, r, i, o, a, c, d, p), this.spec = u;
  }
  update(e, t, r, i) {
    if (this.dirty == ir)
      return !1;
    if (this.spec.update) {
      let o = this.spec.update(e, t, r);
      return o && this.updateInner(e, t, r, i), o;
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
function Ug(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let a = e[o], c = a.dom;
    if (c.parentNode == n) {
      for (; c != r; )
        r = Ih(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(c, r);
    if (a instanceof Ai) {
      let u = r ? r.previousSibling : n.lastChild;
      Ug(a.contentDOM, a.children, t), r = u ? u.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Ih(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const as = function(n) {
  n && (this.nodeName = n);
};
as.prototype = /* @__PURE__ */ Object.create(null);
const bi = [new as()];
function vu(n, e, t) {
  if (n.length == 0)
    return bi;
  let r = t ? bi[0] : new as(), i = [r];
  for (let o = 0; o < n.length; o++) {
    let a = n[o].type.attrs;
    if (!!a) {
      a.nodeName && i.push(r = new as(a.nodeName));
      for (let c in a) {
        let u = a[c];
        u != null && (t && i.length == 1 && i.push(r = new as(e.isInline ? "span" : "div")), c == "class" ? r.class = (r.class ? r.class + " " : "") + u : c == "style" ? r.style = (r.style ? r.style + ";" : "") + u : c != "nodeName" && (r[c] = u));
      }
    }
  }
  return i;
}
function jg(n, e, t, r) {
  if (t == bi && r == bi)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let a = r[o], c = t[o];
    if (o) {
      let u;
      c && c.nodeName == a.nodeName && i != n && (u = i.parentNode) && u.nodeName.toLowerCase() == a.nodeName || (u = document.createElement(a.nodeName), u.pmIsDeco = !0, u.appendChild(i), c = bi[0]), i = u;
    }
    UT(i, c || bi[0], a);
  }
  return i;
}
function UT(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
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
function Kg(n, e, t) {
  return jg(n, n, bi, vu(e, t, n.nodeType != 1));
}
function bu(n, e) {
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
class jT {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = KT(e.node.content, e);
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
    let i = 0, o = this.stack.length >> 1, a = Math.min(o, e.length);
    for (; i < a && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = Nn, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let c = -1;
      for (let u = this.index; u < Math.min(this.index + 3, this.top.children.length); u++) {
        let d = this.top.children[u];
        if (d.matchesMark(e[o]) && !this.isLocked(d.dom)) {
          c = u;
          break;
        }
      }
      if (c > -1)
        c > this.index && (this.changed = !0, this.destroyBetween(this.index, c)), this.top = this.top.children[this.index];
      else {
        let u = Ai.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, u), this.top = u, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  findNodeMatch(e, t, r, i) {
    let o = -1, a;
    if (i >= this.preMatch.index && (a = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && a.matchesNode(e, t, r))
      o = this.top.children.indexOf(a, this.index);
    else
      for (let c = this.index, u = Math.min(this.top.children.length, c + 5); c < u; c++) {
        let d = this.top.children[c];
        if (d.matchesNode(e, t, r) && !this.preMatch.matched.has(d)) {
          o = c;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, o) {
    let a = this.top.children[i];
    return a.dirty == ir && a.dom == a.contentDOM && (a.dirty = vi), a.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
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
  updateNextNode(e, t, r, i, o, a) {
    for (let c = this.index; c < this.top.children.length; c++) {
      let u = this.top.children[c];
      if (u instanceof Gr) {
        let d = this.preMatch.matched.get(u);
        if (d != null && d != o)
          return !1;
        let p = u.dom, h, g = this.isLocked(p) && !(e.isText && u.node && u.node.isText && u.nodeDOM.nodeValue == e.text && u.dirty != ir && bu(t, u.outerDeco));
        if (!g && u.update(e, t, r, i))
          return this.destroyBetween(this.index, c), u.dom != p && (this.changed = !0), this.index++, !0;
        if (!g && (h = this.recreateWrapper(u, e, t, r, i, a)))
          return this.top.children[this.index] = h, h.contentDOM && (h.dirty = vi, h.updateChildren(i, a + 1), h.dirty = Nn), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  recreateWrapper(e, t, r, i, o, a) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
      return null;
    let c = Gr.create(this.top, t, r, i, o, a);
    if (c.contentDOM) {
      c.children = e.children, e.children = [];
      for (let u of c.children)
        u.parent = c;
    }
    return e.destroy(), c;
  }
  addNode(e, t, r, i, o) {
    let a = Gr.create(this.top, e, t, r, i, o);
    a.contentDOM && a.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, a), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Hg(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Ai; )
      t = e, e = t.children[t.children.length - 1];
    (!e || !(e instanceof il) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Jt || Lt) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Wg(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function KT(n, e) {
  let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), a = [];
  e:
    for (; i > 0; ) {
      let c;
      for (; ; )
        if (r) {
          let d = t.children[r - 1];
          if (d instanceof Ai)
            t = d, r = d.children.length;
          else {
            c = d, r--;
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
        --i, o.set(c, i), a.push(c);
      }
    }
  return { index: i, matched: o, matches: a.reverse() };
}
function qT(n, e) {
  return n.type.side - e.type.side;
}
function JT(n, e, t, r) {
  let i = e.locals(n), o = 0;
  if (i.length == 0) {
    for (let d = 0; d < n.childCount; d++) {
      let p = n.child(d);
      r(p, i, e.forChild(o, p), d), o += p.nodeSize;
    }
    return;
  }
  let a = 0, c = [], u = null;
  for (let d = 0; ; ) {
    let p, h;
    for (; a < i.length && i[a].to == o; ) {
      let k = i[a++];
      k.widget && (p ? (h || (h = [p])).push(k) : p = k);
    }
    if (p)
      if (h) {
        h.sort(qT);
        for (let k = 0; k < h.length; k++)
          t(h[k], d, !!u);
      } else
        t(p, d, !!u);
    let g, y;
    if (u)
      y = -1, g = u, u = null;
    else if (d < n.childCount)
      y = d, g = n.child(d++);
    else
      break;
    for (let k = 0; k < c.length; k++)
      c[k].to <= o && c.splice(k--, 1);
    for (; a < i.length && i[a].from <= o && i[a].to > o; )
      c.push(i[a++]);
    let b = o + g.nodeSize;
    if (g.isText) {
      let k = b;
      a < i.length && i[a].from < k && (k = i[a].from);
      for (let A = 0; A < c.length; A++)
        c[A].to < k && (k = c[A].to);
      k < b && (u = g.cut(k - o), g = g.cut(0, k - o), b = k, y = -1);
    }
    let _ = g.isInline && !g.isLeaf ? c.filter((k) => !k.inline) : c.slice();
    r(g, _, e.forChild(o, g), y), o = b;
  }
}
function GT(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function XT(n, e) {
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
function YT(n, e, t, r) {
  for (let i = 0, o = 0; i < n.childCount && o <= r; ) {
    let a = n.child(i++), c = o;
    if (o += a.nodeSize, !a.isText)
      continue;
    let u = a.text;
    for (; i < n.childCount; ) {
      let d = n.child(i++);
      if (o += d.nodeSize, !d.isText)
        break;
      u += d.text;
    }
    if (o >= t) {
      if (o >= r && u.slice(r - e.length - c, r - c) == e)
        return r - e.length;
      let d = c < r ? u.lastIndexOf(e, r - c - 1) : -1;
      if (d >= 0 && d + e.length + c >= t)
        return c + d;
      if (t == r && u.length >= r + e.length - c && u.slice(r - c, r - c + e.length) == e)
        return r;
    }
  }
  return -1;
}
function wu(n, e, t, r, i) {
  let o = [];
  for (let a = 0, c = 0; a < n.length; a++) {
    let u = n[a], d = c, p = c += u.size;
    d >= t || p <= e ? o.push(u) : (d < e && o.push(u.slice(0, e - d, r)), i && (o.push(i), i = void 0), p > t && o.push(u.slice(t - d, u.size, r)));
  }
  return o;
}
function Ku(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, a = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (a < 0)
    return null;
  let c = r.resolve(a), u, d;
  if (rl(t)) {
    for (u = c; i && !i.node; )
      i = i.parent;
    let p = i.node;
    if (i && p.isAtom && oe.isSelectable(p) && i.parent && !(p.isInline && xT(t.focusNode, t.focusOffset, i.dom))) {
      let h = i.posBefore;
      d = new oe(a == h ? c : r.resolve(h));
    }
  } else {
    let p = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (p < 0)
      return null;
    u = r.resolve(p);
  }
  if (!d) {
    let p = e == "pointer" || n.state.selection.head < c.pos && !o ? 1 : -1;
    d = qu(n, u, c, p);
  }
  return d;
}
function qg(n) {
  return n.editable ? n.hasFocus() : Gg(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Or(n, e = !1) {
  let t = n.state.selection;
  if (Jg(n, t), !!qg(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Lt) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Ti(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      QT(n);
    else {
      let { anchor: r, head: i } = t, o, a;
      Ph && !(t instanceof pe) && (t.$from.parent.inlineContent || (o = Lh(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (a = Lh(n, t.to))), n.docView.setSelection(r, i, n.root, e), Ph && (o && Bh(o), a && Bh(a)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && ZT(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Ph = Jt || Lt && kT < 63;
function Lh(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (Jt && i && i.contentEditable == "false")
    return Wc(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Wc(i);
    if (o)
      return Wc(o);
  }
}
function Wc(n) {
  return n.contentEditable = "true", Jt && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Bh(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function ZT(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!qg(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function QT(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, Ut(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && on && Jr <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Jg(n, e) {
  if (e instanceof oe) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && ($h(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    $h(n);
}
function $h(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function qu(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || pe.between(e, t, r);
}
function Fh(n) {
  return n.editable && !n.hasFocus() ? !1 : Gg(n);
}
function Gg(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function eA(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Ti(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function xu(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && ye.findFrom(o, e);
}
function Hr(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Vh(n, e, t) {
  let r = n.state.selection;
  if (r instanceof pe)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let a = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Hr(n, new pe(r.$anchor, a));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = xu(n.state, e);
        return i && i instanceof oe ? Hr(n, i) : !1;
      } else if (!(An && t.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, a;
        if (!o || o.isText)
          return !1;
        let c = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (a = n.docView.descAt(c)) && !a.contentDOM ? oe.isSelectable(o) ? Hr(n, new oe(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : Cs ? Hr(n, new pe(n.state.doc.resolve(e < 0 ? c : c + o.nodeSize))) : !1 : !1;
      }
    } else
      return !1;
  else {
    if (r instanceof oe && r.node.isInline)
      return Hr(n, new pe(e > 0 ? r.$to : r.$from));
    {
      let i = xu(n.state, e);
      return i ? Hr(n, i) : !1;
    }
  }
}
function Fa(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function ls(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Yi(n, e) {
  return e < 0 ? tA(n) : nA(n);
}
function tA(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, a = !1;
  for (Un && t.nodeType == 1 && r < Fa(t) && ls(t.childNodes[r], -1) && (a = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let c = t.childNodes[r - 1];
        if (ls(c, -1))
          i = t, o = --r;
        else if (c.nodeType == 3)
          t = c, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Xg(t))
        break;
      {
        let c = t.previousSibling;
        for (; c && ls(c, -1); )
          i = t.parentNode, o = Ut(c), c = c.previousSibling;
        if (c)
          t = c, r = Fa(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  a ? Su(n, t, r) : i && Su(n, i, o);
}
function nA(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Fa(t), o, a;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let c = t.childNodes[r];
      if (ls(c, 1))
        o = t, a = ++r;
      else
        break;
    } else {
      if (Xg(t))
        break;
      {
        let c = t.nextSibling;
        for (; c && ls(c, 1); )
          o = c.parentNode, a = Ut(c) + 1, c = c.nextSibling;
        if (c)
          t = c, r = 0, i = Fa(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && Su(n, o, a);
}
function Xg(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function rA(n, e) {
  for (; n && e == n.childNodes.length && !Uu(n); )
    e = Ut(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function iA(n, e) {
  for (; n && !e && !Uu(n); )
    e = Ut(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Su(n, e, t) {
  if (e.nodeType != 3) {
    let o, a;
    (a = rA(e, t)) ? (e = a, t = 0) : (o = iA(e, t)) && (e = o, t = o.nodeValue.length);
  }
  let r = n.domSelection();
  if (rl(r)) {
    let o = document.createRange();
    o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && Or(n);
  }, 50);
}
function zh(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(Lt || CT) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let o = n.coordsAtPos(e - 1), a = (o.top + o.bottom) / 2;
      if (a > i.top && a < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let o = n.coordsAtPos(e + 1), a = (o.top + o.bottom) / 2;
      if (a > i.top && a < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Hh(n, e, t) {
  let r = n.state.selection;
  if (r instanceof pe && !r.empty || t.indexOf("s") > -1 || An && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let a = xu(n.state, e);
    if (a && a instanceof oe)
      return Hr(n, a);
  }
  if (!i.parent.inlineContent) {
    let a = e < 0 ? i : o, c = r instanceof Wn ? ye.near(a, e) : ye.findFrom(a, e);
    return c ? Hr(n, c) : !1;
  }
  return !1;
}
function Wh(n, e) {
  if (!(n.state.selection instanceof pe))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (o && !o.isText) {
    let a = n.state.tr;
    return e < 0 ? a.delete(t.pos - o.nodeSize, t.pos) : a.delete(t.pos, t.pos + o.nodeSize), n.dispatch(a), !0;
  }
  return !1;
}
function Uh(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function oA(n) {
  if (!Jt || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Uh(n, r, "true"), setTimeout(() => Uh(n, r, "false"), 20);
  }
  return !1;
}
function sA(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function aA(n, e) {
  let t = e.keyCode, r = sA(e);
  if (t == 8 || An && t == 72 && r == "c")
    return Wh(n, -1) || Yi(n, -1);
  if (t == 46 && !e.shiftKey || An && t == 68 && r == "c")
    return Wh(n, 1) || Yi(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || An && t == 66 && r == "c") {
    let i = t == 37 ? zh(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Vh(n, i, r) || Yi(n, i);
  } else if (t == 39 || An && t == 70 && r == "c") {
    let i = t == 39 ? zh(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Vh(n, i, r) || Yi(n, i);
  } else {
    if (t == 38 || An && t == 80 && r == "c")
      return Hh(n, -1, r) || Yi(n, -1);
    if (t == 40 || An && t == 78 && r == "c")
      return oA(n) || Hh(n, 1, r) || Yi(n, 1);
    if (r == (An ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function Yg(n, e) {
  n.someProp("transformCopied", (y) => {
    e = y(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let y = r.firstChild;
    t.push(y.type.name, y.attrs != y.type.defaultAttrs ? y.attrs : null), r = y.content;
  }
  let a = n.someProp("clipboardSerializer") || Qn.fromSchema(n.state.schema), c = ry(), u = c.createElement("div");
  u.appendChild(a.serializeFragment(r, { document: c }));
  let d = u.firstChild, p, h = 0;
  for (; d && d.nodeType == 1 && (p = ny[d.nodeName.toLowerCase()]); ) {
    for (let y = p.length - 1; y >= 0; y--) {
      let b = c.createElement(p[y]);
      for (; u.firstChild; )
        b.appendChild(u.firstChild);
      u.appendChild(b), h++;
    }
    d = u.firstChild;
  }
  d && d.nodeType == 1 && d.setAttribute("data-pm-slice", `${i} ${o}${h ? ` -${h}` : ""} ${JSON.stringify(t)}`);
  let g = n.someProp("clipboardTextSerializer", (y) => y(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: u, text: g };
}
function Zg(n, e, t, r, i) {
  let o = i.parent.type.spec.code, a, c;
  if (!t && !e)
    return null;
  let u = e && (r || o || !t);
  if (u) {
    if (n.someProp("transformPastedText", (g) => {
      e = g(e, o || r, n);
    }), o)
      return e ? new J(z.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : J.empty;
    let h = n.someProp("clipboardTextParser", (g) => g(e, i, r, n));
    if (h)
      c = h;
    else {
      let g = i.marks(), { schema: y } = n.state, b = Qn.fromSchema(y);
      a = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((_) => {
        let k = a.appendChild(document.createElement("p"));
        _ && k.appendChild(b.serializeNode(y.text(_, g)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (h) => {
      t = h(t, n);
    }), a = uA(t), Cs && fA(a);
  let d = a && a.querySelector("[data-pm-slice]"), p = d && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(d.getAttribute("data-pm-slice") || "");
  if (p && p[3])
    for (let h = +p[3]; h > 0; h--) {
      let g = a.firstChild;
      for (; g && g.nodeType != 1; )
        g = g.nextSibling;
      if (!g)
        break;
      a = g;
    }
  if (c || (c = (n.someProp("clipboardParser") || n.someProp("domParser") || uo.fromSchema(n.state.schema)).parseSlice(a, {
    preserveWhitespace: !!(u || p),
    context: i,
    ruleFromNode(g) {
      return g.nodeName == "BR" && !g.nextSibling && g.parentNode && !lA.test(g.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), p)
    c = dA(jh(c, +p[1], +p[2]), p[4]);
  else if (c = J.maxOpen(cA(c.content, i), !0), c.openStart || c.openEnd) {
    let h = 0, g = 0;
    for (let y = c.content.firstChild; h < c.openStart && !y.type.spec.isolating; h++, y = y.firstChild)
      ;
    for (let y = c.content.lastChild; g < c.openEnd && !y.type.spec.isolating; g++, y = y.lastChild)
      ;
    c = jh(c, h, g);
  }
  return n.someProp("transformPasted", (h) => {
    c = h(c, n);
  }), c;
}
const lA = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function cA(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), o, a = [];
    if (n.forEach((c) => {
      if (!a)
        return;
      let u = i.findWrapping(c.type), d;
      if (!u)
        return a = null;
      if (d = a.length && o.length && ey(u, o, c, a[a.length - 1], 0))
        a[a.length - 1] = d;
      else {
        a.length && (a[a.length - 1] = ty(a[a.length - 1], o.length));
        let p = Qg(c, u);
        a.push(p), i = i.matchType(p.type), o = u;
      }
    }), a)
      return z.from(a);
  }
  return n;
}
function Qg(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, z.from(n));
  return n;
}
function ey(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = ey(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(z.from(Qg(t, n, i + 1))));
  }
}
function ty(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, ty(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(z.empty, !0);
  return n.copy(t.append(r));
}
function _u(n, e, t, r, i, o) {
  let a = e < 0 ? n.firstChild : n.lastChild, c = a.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (c = _u(c, e, t, r, i + 1, o)), i >= t && (c = e < 0 ? a.contentMatchAt(0).fillBefore(c, o <= i).append(c) : c.append(a.contentMatchAt(a.childCount).fillBefore(z.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, a.copy(c));
}
function jh(n, e, t) {
  return e < n.openStart && (n = new J(_u(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new J(_u(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const ny = {
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
let Kh = null;
function ry() {
  return Kh || (Kh = document.implementation.createHTMLDocument("title"));
}
function uA(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = ry().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && ny[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = n, i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function fA(n) {
  let e = n.querySelectorAll(Lt ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function dA(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: o, openEnd: a } = n;
  for (let c = r.length - 2; c >= 0; c -= 2) {
    let u = t.nodes[r[c]];
    if (!u || u.hasRequiredAttrs())
      break;
    i = z.from(u.create(r[c + 1], i)), o++, a++;
  }
  return new J(i, o, a);
}
const Gt = {}, Xt = {}, pA = { touchstart: !0, touchmove: !0 };
class hA {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function mA(n) {
  for (let e in Gt) {
    let t = Gt[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      yA(n, r) && !Ju(n, r) && (n.editable || !(r.type in Xt)) && t(n, r);
    }, pA[e] ? { passive: !0 } : void 0);
  }
  Jt && n.dom.addEventListener("input", () => null), ku(n);
}
function qr(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function gA(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function ku(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => Ju(n, r));
  });
}
function Ju(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function yA(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function vA(n, e) {
  !Ju(n, e) && Gt[e.type] && (n.editable || !(e.type in Xt)) && Gt[e.type](n, e);
}
Xt.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !oy(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(zn && Lt && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), ho && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, yi(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || aA(n, t) ? t.preventDefault() : qr(n, "key");
};
Xt.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Xt.keypress = (n, e) => {
  let t = e;
  if (oy(n, t) || !t.charCode || t.ctrlKey && !t.altKey || An && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof pe) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function ol(n) {
  return { left: n.clientX, top: n.clientY };
}
function bA(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Gu(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let o = n.state.doc.resolve(r);
  for (let a = o.depth + 1; a > 0; a--)
    if (n.someProp(e, (c) => a > o.depth ? c(n, t, o.nodeAfter, o.before(a), i, !0) : c(n, t, o.node(a), o.before(a), i, !1)))
      return !0;
  return !1;
}
function lo(n, e, t) {
  n.focused || n.focus();
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function wA(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && oe.isSelectable(r) ? (lo(n, new oe(t), "pointer"), !0) : !1;
}
function xA(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof oe && (r = t.node);
  let o = n.state.doc.resolve(e);
  for (let a = o.depth + 1; a > 0; a--) {
    let c = a > o.depth ? o.nodeAfter : o.node(a);
    if (oe.isSelectable(c)) {
      r && t.$from.depth > 0 && a >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(a);
      break;
    }
  }
  return i != null ? (lo(n, oe.create(n.state.doc, i), "pointer"), !0) : !1;
}
function SA(n, e, t, r, i) {
  return Gu(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? xA(n, t) : wA(n, t));
}
function _A(n, e, t, r) {
  return Gu(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function kA(n, e, t, r) {
  return Gu(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || CA(n, t, r);
}
function CA(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (lo(n, pe.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let a = o > i.depth ? i.nodeAfter : i.node(o), c = i.before(o);
    if (a.inlineContent)
      lo(n, pe.create(r, c + 1, c + 1 + a.content.size), "pointer");
    else if (oe.isSelectable(a))
      lo(n, oe.create(r, c), "pointer");
    else
      continue;
    return !0;
  }
}
function Xu(n) {
  return Va(n);
}
const iy = An ? "metaKey" : "ctrlKey";
Gt.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = Xu(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && bA(t, n.input.lastClick) && !t[iy] && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o };
  let a = n.posAtCoords(ol(t));
  !a || (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new EA(n, a, t, !!r)) : (o == "doubleClick" ? _A : kA)(n, a.pos, a.inside, t) ? t.preventDefault() : qr(n, "pointer"));
};
class EA {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[iy], this.allowDefault = r.shiftKey;
    let o, a;
    if (t.inside > -1)
      o = e.state.doc.nodeAt(t.inside), a = t.inside;
    else {
      let p = e.state.doc.resolve(t.pos);
      o = p.parent, a = p.depth ? p.before() : 0;
    }
    const c = i ? null : r.target, u = c ? e.docView.nearestDesc(c, !0) : null;
    this.target = u ? u.dom : null;
    let { selection: d } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || d instanceof oe && d.from <= a && d.to > a) && (this.mightDrag = {
      node: o,
      pos: a,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Un && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), qr(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Or(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(ol(e))), this.updateAllowDefault(e), this.allowDefault || !t ? qr(this.view, "pointer") : SA(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || Jt && this.mightDrag && !this.mightDrag.node.isAtom || Lt && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (lo(this.view, ye.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : qr(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), qr(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Gt.touchstart = (n) => {
  n.input.lastTouch = Date.now(), Xu(n), qr(n, "pointer");
};
Gt.touchmove = (n) => {
  n.input.lastTouch = Date.now(), qr(n, "pointer");
};
Gt.contextmenu = (n) => Xu(n);
function oy(n, e) {
  return n.composing ? !0 : Jt && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const OA = zn ? 5e3 : -1;
Xt.compositionstart = Xt.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Va(n, !0), n.markCursor = null;
    else if (Va(n), Un && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let a = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!a)
          break;
        if (a.nodeType == 3) {
          n.domSelection().collapse(a, a.nodeValue.length);
          break;
        } else
          i = a, o = -1;
      }
    }
    n.input.composing = !0;
  }
  sy(n, OA);
};
Xt.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, sy(n, 20));
};
function sy(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Va(n), e));
}
function ay(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = TA()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function TA() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Va(n, e = !1) {
  if (!(zn && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), ay(n), e || n.docView && n.docView.dirty) {
      let t = Ku(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function AA(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const mo = on && Jr < 15 || ho && ET < 604;
Gt.copy = Xt.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = mo ? null : t.clipboardData, a = r.content(), { dom: c, text: u } = Yg(n, a);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", c.innerHTML), o.setData("text/plain", u)) : AA(n, c), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function MA(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function NA(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? ys(n, r.value, null, i, e) : ys(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function ys(n, e, t, r, i) {
  let o = Zg(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (u) => u(n, i, o || J.empty)))
    return !0;
  if (!o)
    return !1;
  let a = MA(o), c = a ? n.state.tr.replaceSelectionWith(a, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(c.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
Xt.paste = (n, e) => {
  let t = e;
  if (n.composing && !zn)
    return;
  let r = mo ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && ys(n, r.getData("text/plain"), r.getData("text/html"), i, t) ? t.preventDefault() : NA(n, t);
};
class DA {
  constructor(e, t) {
    this.slice = e, this.move = t;
  }
}
const ly = An ? "altKey" : "ctrlKey";
Gt.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, o = i.empty ? null : n.posAtCoords(ol(t));
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof oe ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      n.dispatch(n.state.tr.setSelection(oe.create(n.state.doc, r.mightDrag.pos)));
    else if (t.target && t.target.nodeType == 1) {
      let d = n.docView.nearestDesc(t.target, !0);
      d && d.node.type.spec.draggable && d != n.docView && n.dispatch(n.state.tr.setSelection(oe.create(n.state.doc, d.posBefore)));
    }
  }
  let a = n.state.selection.content(), { dom: c, text: u } = Yg(n, a);
  t.dataTransfer.clearData(), t.dataTransfer.setData(mo ? "Text" : "text/html", c.innerHTML), t.dataTransfer.effectAllowed = "copyMove", mo || t.dataTransfer.setData("text/plain", u), n.dragging = new DA(a, !t[ly]);
};
Gt.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Xt.dragover = Xt.dragenter = (n, e) => e.preventDefault();
Xt.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(ol(t));
  if (!i)
    return;
  let o = n.state.doc.resolve(i.pos), a = r && r.slice;
  a ? n.someProp("transformPasted", (b) => {
    a = b(a, n);
  }) : a = Zg(n, t.dataTransfer.getData(mo ? "Text" : "text/plain"), mo ? null : t.dataTransfer.getData("text/html"), !1, o);
  let c = !!(r && !t[ly]);
  if (n.someProp("handleDrop", (b) => b(n, t, a || J.empty, c))) {
    t.preventDefault();
    return;
  }
  if (!a)
    return;
  t.preventDefault();
  let u = a ? Tg(n.state.doc, o.pos, a) : o.pos;
  u == null && (u = o.pos);
  let d = n.state.tr;
  c && d.deleteSelection();
  let p = d.mapping.map(u), h = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1, g = d.doc;
  if (h ? d.replaceRangeWith(p, p, a.content.firstChild) : d.replaceRange(p, p, a), d.doc.eq(g))
    return;
  let y = d.doc.resolve(p);
  if (h && oe.isSelectable(a.content.firstChild) && y.nodeAfter && y.nodeAfter.sameMarkup(a.content.firstChild))
    d.setSelection(new oe(y));
  else {
    let b = d.mapping.map(u);
    d.mapping.maps[d.mapping.maps.length - 1].forEach((_, k, A, D) => b = D), d.setSelection(qu(n, y, d.doc.resolve(b)));
  }
  n.focus(), n.dispatch(d.setMeta("uiEvent", "drop"));
};
Gt.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Or(n);
  }, 20));
};
Gt.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
Gt.beforeinput = (n, e) => {
  if (Lt && zn && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o) => o(n, yi(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Xt)
  Gt[n] = Xt[n];
function vs(n, e) {
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
class za {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || _i, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: o, deleted: a } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return a ? null : new Mn(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof za && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && vs(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Xr {
  constructor(e, t) {
    this.attrs = e, this.spec = t || _i;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, a = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= a ? null : new Mn(o, a, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Xr && vs(this.attrs, e.attrs) && vs(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Xr;
  }
  destroy() {
  }
}
class Yu {
  constructor(e, t) {
    this.attrs = e, this.spec = t || _i;
  }
  map(e, t, r, i) {
    let o = e.mapResult(t.from + i, 1);
    if (o.deleted)
      return null;
    let a = e.mapResult(t.to + i, -1);
    return a.deleted || a.pos <= o.pos ? null : new Mn(o.pos - r, a.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), o;
    return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Yu && vs(this.attrs, e.attrs) && vs(this.spec, e.spec);
  }
  destroy() {
  }
}
class Mn {
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  copy(e, t) {
    return new Mn(e, t, this.type);
  }
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  static widget(e, t, r) {
    return new Mn(e, e, new za(t, r));
  }
  static inline(e, t, r, i) {
    return new Mn(e, t, new Xr(r, i));
  }
  static node(e, t, r, i) {
    return new Mn(e, t, new Yu(r, i));
  }
  get spec() {
    return this.type.spec;
  }
  get inline() {
    return this.type instanceof Xr;
  }
  get widget() {
    return this.type instanceof za;
  }
}
const eo = [], _i = {};
class mt {
  constructor(e, t) {
    this.local = e.length ? e : eo, this.children = t.length ? t : eo;
  }
  static create(e, t) {
    return t.length ? Ha(t, e, 0, _i) : It;
  }
  find(e, t, r) {
    let i = [];
    return this.findInner(e == null ? 0 : e, t == null ? 1e9 : t, i, 0, r), i;
  }
  findInner(e, t, r, i, o) {
    for (let a = 0; a < this.local.length; a++) {
      let c = this.local[a];
      c.from <= t && c.to >= e && (!o || o(c.spec)) && r.push(c.copy(c.from + i, c.to + i));
    }
    for (let a = 0; a < this.children.length; a += 3)
      if (this.children[a] < t && this.children[a + 1] > e) {
        let c = this.children[a] + 1;
        this.children[a + 2].findInner(e - c, t - c, r, i + c, o);
      }
  }
  map(e, t, r) {
    return this == It || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || _i);
  }
  mapInner(e, t, r, i, o) {
    let a;
    for (let c = 0; c < this.local.length; c++) {
      let u = this.local[c].map(e, r, i);
      u && u.type.valid(t, u) ? (a || (a = [])).push(u) : o.onRemove && o.onRemove(this.local[c].spec);
    }
    return this.children.length ? RA(this.children, a || [], e, t, r, i, o) : a ? new mt(a.sort(ki), eo) : It;
  }
  add(e, t) {
    return t.length ? this == It ? mt.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, o = 0;
    e.forEach((c, u) => {
      let d = u + r, p;
      if (!!(p = uy(t, c, d))) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < u; )
          o += 3;
        i[o] == u ? i[o + 2] = i[o + 2].addInner(c, p, d + 1) : i.splice(o, 0, u, u + c.nodeSize, Ha(p, c, d + 1, _i)), o += 3;
      }
    });
    let a = cy(o ? fy(t) : t, -r);
    for (let c = 0; c < a.length; c++)
      a[c].type.valid(e, a[c]) || a.splice(c--, 1);
    return new mt(a.length ? this.local.concat(a).sort(ki) : this.local, i || this.children);
  }
  remove(e) {
    return e.length == 0 || this == It ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let a, c = r[o] + t, u = r[o + 1] + t;
      for (let p = 0, h; p < e.length; p++)
        (h = e[p]) && h.from > c && h.to < u && (e[p] = null, (a || (a = [])).push(h));
      if (!a)
        continue;
      r == this.children && (r = this.children.slice());
      let d = r[o + 2].removeInner(a, c + 1);
      d != It ? r[o + 2] = d : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, a; o < e.length; o++)
        if (a = e[o])
          for (let c = 0; c < i.length; c++)
            i[c].eq(a, t) && (i == this.local && (i = this.local.slice()), i.splice(c--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new mt(i, r) : It;
  }
  forChild(e, t) {
    if (this == It)
      return this;
    if (t.isLeaf)
      return mt.empty;
    let r, i;
    for (let c = 0; c < this.children.length; c += 3)
      if (this.children[c] >= e) {
        this.children[c] == e && (r = this.children[c + 2]);
        break;
      }
    let o = e + 1, a = o + t.content.size;
    for (let c = 0; c < this.local.length; c++) {
      let u = this.local[c];
      if (u.from < a && u.to > o && u.type instanceof Xr) {
        let d = Math.max(o, u.from) - o, p = Math.min(a, u.to) - o;
        d < p && (i || (i = [])).push(u.copy(d, p));
      }
    }
    if (i) {
      let c = new mt(i.sort(ki), eo);
      return r ? new Ur([c, r]) : c;
    }
    return r || It;
  }
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof mt) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return Zu(this.localsInner(e));
  }
  localsInner(e) {
    if (this == It)
      return eo;
    if (e.inlineContent || !this.local.some(Xr.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Xr || t.push(this.local[r]);
    return t;
  }
}
mt.empty = new mt([], []);
mt.removeOverlap = Zu;
const It = mt.empty;
class Ur {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, _i));
    return Ur.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return mt.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != It && (o instanceof Ur ? r = r.concat(o.members) : r.push(o));
    }
    return Ur.from(r);
  }
  eq(e) {
    if (!(e instanceof Ur) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (!!o.length)
        if (!t)
          t = o;
        else {
          r && (t = t.slice(), r = !1);
          for (let a = 0; a < o.length; a++)
            t.push(o[a]);
        }
    }
    return t ? Zu(r ? t : t.sort(ki)) : eo;
  }
  static from(e) {
    switch (e.length) {
      case 0:
        return It;
      case 1:
        return e[0];
      default:
        return new Ur(e.every((t) => t instanceof mt) ? e : e.reduce((t, r) => t.concat(r instanceof mt ? r : r.members), []));
    }
  }
}
function RA(n, e, t, r, i, o, a) {
  let c = n.slice();
  for (let d = 0, p = o; d < t.maps.length; d++) {
    let h = 0;
    t.maps[d].forEach((g, y, b, _) => {
      let k = _ - b - (y - g);
      for (let A = 0; A < c.length; A += 3) {
        let D = c[A + 1];
        if (D < 0 || g > D + p - h)
          continue;
        let H = c[A] + p - h;
        y >= H ? c[A + 1] = g <= H ? -2 : -1 : b >= i && k && (c[A] += k, c[A + 1] += k);
      }
      h += k;
    }), p = t.maps[d].map(p, -1);
  }
  let u = !1;
  for (let d = 0; d < c.length; d += 3)
    if (c[d + 1] < 0) {
      if (c[d + 1] == -2) {
        u = !0, c[d + 1] = -1;
        continue;
      }
      let p = t.map(n[d] + o), h = p - i;
      if (h < 0 || h >= r.content.size) {
        u = !0;
        continue;
      }
      let g = t.map(n[d + 1] + o, -1), y = g - i, { index: b, offset: _ } = r.content.findIndex(h), k = r.maybeChild(b);
      if (k && _ == h && _ + k.nodeSize == y) {
        let A = c[d + 2].mapInner(t, k, p + 1, n[d] + o + 1, a);
        A != It ? (c[d] = h, c[d + 1] = y, c[d + 2] = A) : (c[d + 1] = -2, u = !0);
      } else
        u = !0;
    }
  if (u) {
    let d = IA(c, n, e, t, i, o, a), p = Ha(d, r, 0, a);
    e = p.local;
    for (let h = 0; h < c.length; h += 3)
      c[h + 1] < 0 && (c.splice(h, 3), h -= 3);
    for (let h = 0, g = 0; h < p.children.length; h += 3) {
      let y = p.children[h];
      for (; g < c.length && c[g] < y; )
        g += 3;
      c.splice(g, 0, p.children[h], p.children[h + 1], p.children[h + 2]);
    }
  }
  return new mt(e.sort(ki), c);
}
function cy(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Mn(i.from + e, i.to + e, i.type));
  }
  return t;
}
function IA(n, e, t, r, i, o, a) {
  function c(u, d) {
    for (let p = 0; p < u.local.length; p++) {
      let h = u.local[p].map(r, i, d);
      h ? t.push(h) : a.onRemove && a.onRemove(u.local[p].spec);
    }
    for (let p = 0; p < u.children.length; p += 3)
      c(u.children[p + 2], u.children[p] + d + 1);
  }
  for (let u = 0; u < n.length; u += 3)
    n[u + 1] == -1 && c(n[u + 2], e[u] + o + 1);
  return t;
}
function uy(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let o = 0, a; o < n.length; o++)
    (a = n[o]) && a.from > t && a.to < r && ((i || (i = [])).push(a), n[o] = null);
  return i;
}
function fy(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function Ha(n, e, t, r) {
  let i = [], o = !1;
  e.forEach((c, u) => {
    let d = uy(n, c, u + t);
    if (d) {
      o = !0;
      let p = Ha(d, c, t + u + 1, r);
      p != It && i.push(u, u + c.nodeSize, p);
    }
  });
  let a = cy(o ? fy(n) : n, -t).sort(ki);
  for (let c = 0; c < a.length; c++)
    a[c].type.valid(e, a[c]) || (r.onRemove && r.onRemove(a[c].spec), a.splice(c--, 1));
  return a.length || i.length ? new mt(a, i) : It;
}
function ki(n, e) {
  return n.from - e.from || n.to - e.to;
}
function Zu(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), qh(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), qh(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function qh(n, e, t) {
  for (; e < n.length && ki(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function Uc(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != It && e.push(r);
  }), n.cursorWrapper && e.push(mt.create(n.state.doc, [n.cursorWrapper.deco])), Ur.from(e);
}
const PA = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, LA = on && Jr <= 11;
class BA {
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
class $A {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new BA(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      on && Jr <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), LA && (this.onCharData = (r) => {
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
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, PA)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
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
        return Or(this.view);
      if (on && Jr <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Ti(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
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
    for (let o = e.focusNode; o; o = gs(o))
      t.add(o);
    for (let o = e.anchorNode; o; o = gs(o))
      if (t.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Fh(e) && !this.ignoreSelectionChange(r), o = -1, a = -1, c = !1, u = [];
    if (e.editable)
      for (let p = 0; p < t.length; p++) {
        let h = this.registerMutation(t[p], u);
        h && (o = o < 0 ? h.from : Math.min(h.from, o), a = a < 0 ? h.to : Math.max(h.to, a), h.typeOver && (c = !0));
      }
    if (Un && u.length > 1) {
      let p = u.filter((h) => h.nodeName == "BR");
      if (p.length == 2) {
        let h = p[0], g = p[1];
        h.parentNode && h.parentNode.parentNode == g.parentNode ? g.remove() : h.remove();
      }
    }
    let d = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && rl(r) && (d = Ku(e)) && d.eq(ye.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Or(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, a), FA(e)), this.handleDOMChange(o, a, c, u), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Or(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let p = 0; p < e.addedNodes.length; p++)
        t.push(e.addedNodes[p]);
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (on && Jr <= 11 && e.addedNodes.length)
        for (let p = 0; p < e.addedNodes.length; p++) {
          let { previousSibling: h, nextSibling: g } = e.addedNodes[p];
          (!h || Array.prototype.indexOf.call(e.addedNodes, h) < 0) && (i = h), (!g || Array.prototype.indexOf.call(e.addedNodes, g) < 0) && (o = g);
        }
      let a = i && i.parentNode == e.target ? Ut(i) + 1 : 0, c = r.localPosFromDOM(e.target, a, -1), u = o && o.parentNode == e.target ? Ut(o) : e.target.childNodes.length, d = r.localPosFromDOM(e.target, u, 1);
      return { from: c, to: d };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : {
        from: r.posAtStart,
        to: r.posAtEnd,
        typeOver: e.target.nodeValue == e.oldValue
      };
  }
}
let Jh = /* @__PURE__ */ new WeakMap(), Gh = !1;
function FA(n) {
  if (!Jh.has(n) && (Jh.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = Un, Gh)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Gh = !0;
  }
}
function VA(n) {
  let e;
  function t(u) {
    u.preventDefault(), u.stopImmediatePropagation(), e = u.getTargetRanges()[0];
  }
  n.dom.addEventListener("beforeinput", t, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", t, !0);
  let r = e.startContainer, i = e.startOffset, o = e.endContainer, a = e.endOffset, c = n.domAtPos(n.state.selection.anchor);
  return Ti(c.node, c.offset, o, a) && ([r, i, o, a] = [o, a, r, i]), { anchorNode: r, anchorOffset: i, focusNode: o, focusOffset: a };
}
function zA(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: a, to: c } = n.docView.parseRange(e, t), u = n.domSelectionRange(), d, p = u.anchorNode;
  if (p && n.dom.contains(p.nodeType == 1 ? p : p.parentNode) && (d = [{ node: p, offset: u.anchorOffset }], rl(u) || d.push({ node: u.focusNode, offset: u.focusOffset })), Lt && n.input.lastKeyCode === 8)
    for (let k = o; k > i; k--) {
      let A = r.childNodes[k - 1], D = A.pmViewDesc;
      if (A.nodeName == "BR" && !D) {
        o = k;
        break;
      }
      if (!D || D.size)
        break;
    }
  let h = n.state.doc, g = n.someProp("domParser") || uo.fromSchema(n.state.schema), y = h.resolve(a), b = null, _ = g.parse(r, {
    topNode: y.parent,
    topMatch: y.parent.contentMatchAt(y.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: y.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: d,
    ruleFromNode: HA,
    context: y
  });
  if (d && d[0].pos != null) {
    let k = d[0].pos, A = d[1] && d[1].pos;
    A == null && (A = k), b = { anchor: k + a, head: A + a };
  }
  return { doc: _, sel: b, from: a, to: c };
}
function HA(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Jt && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Jt && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const WA = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function UA(n, e, t, r, i) {
  let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let Z = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, _e = Ku(n, Z);
    if (_e && !n.state.selection.eq(_e)) {
      if (Lt && zn && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (We) => We(n, yi(13, "Enter"))))
        return;
      let He = n.state.tr.setSelection(_e);
      Z == "pointer" ? He.setMeta("pointer", !0) : Z == "key" && He.scrollIntoView(), o && He.setMeta("composition", o), n.dispatch(He);
    }
    return;
  }
  let a = n.state.doc.resolve(e), c = a.sharedDepth(t);
  e = a.before(c + 1), t = n.state.doc.resolve(t).after(c + 1);
  let u = n.state.selection, d = zA(n, e, t), p = n.state.doc, h = p.slice(d.from, d.to), g, y;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (g = n.state.selection.to, y = "end") : (g = n.state.selection.from, y = "start"), n.input.lastKeyCode = null;
  let b = qA(h.content, d.doc.content, d.from, g, y);
  if ((ho && n.input.lastIOSEnter > Date.now() - 225 || zn) && i.some((Z) => Z.nodeType == 1 && !WA.test(Z.nodeName)) && (!b || b.endA >= b.endB) && n.someProp("handleKeyDown", (Z) => Z(n, yi(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!b)
    if (r && u instanceof pe && !u.empty && u.$head.sameParent(u.$anchor) && !n.composing && !(d.sel && d.sel.anchor != d.sel.head))
      b = { start: u.from, endA: u.to, endB: u.to };
    else {
      if (d.sel) {
        let Z = Xh(n, n.state.doc, d.sel);
        if (Z && !Z.eq(n.state.selection)) {
          let _e = n.state.tr.setSelection(Z);
          o && _e.setMeta("composition", o), n.dispatch(_e);
        }
      }
      return;
    }
  if (Lt && n.cursorWrapper && d.sel && d.sel.anchor == n.cursorWrapper.deco.from && d.sel.head == d.sel.anchor) {
    let Z = b.endB - b.start;
    d.sel = { anchor: d.sel.anchor + Z, head: d.sel.anchor + Z };
  }
  n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && b.start == b.endB && n.state.selection instanceof pe && (b.start > n.state.selection.from && b.start <= n.state.selection.from + 2 && n.state.selection.from >= d.from ? b.start = n.state.selection.from : b.endA < n.state.selection.to && b.endA >= n.state.selection.to - 2 && n.state.selection.to <= d.to && (b.endB += n.state.selection.to - b.endA, b.endA = n.state.selection.to)), on && Jr <= 11 && b.endB == b.start + 1 && b.endA == b.start && b.start > d.from && d.doc.textBetween(b.start - d.from - 1, b.start - d.from + 1) == " \xA0" && (b.start--, b.endA--, b.endB--);
  let _ = d.doc.resolveNoCache(b.start - d.from), k = d.doc.resolveNoCache(b.endB - d.from), A = p.resolve(b.start), D = _.sameParent(k) && _.parent.inlineContent && A.end() >= b.endA, H;
  if ((ho && n.input.lastIOSEnter > Date.now() - 225 && (!D || i.some((Z) => Z.nodeName == "DIV" || Z.nodeName == "P")) || !D && _.pos < d.doc.content.size && !_.sameParent(k) && (H = ye.findFrom(d.doc.resolve(_.pos + 1), 1, !0)) && H.head == k.pos) && n.someProp("handleKeyDown", (Z) => Z(n, yi(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > b.start && KA(p, b.start, b.endA, _, k) && n.someProp("handleKeyDown", (Z) => Z(n, yi(8, "Backspace")))) {
    zn && Lt && n.domObserver.suppressSelectionUpdates();
    return;
  }
  Lt && zn && b.endB == b.start && (n.input.lastAndroidDelete = Date.now()), zn && !D && _.start() != k.start() && k.parentOffset == 0 && _.depth == k.depth && d.sel && d.sel.anchor == d.sel.head && d.sel.head == b.endA && (b.endB -= 2, k = d.doc.resolveNoCache(b.endB - d.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(Z) {
      return Z(n, yi(13, "Enter"));
    });
  }, 20));
  let C = b.start, q = b.endA, B, te, Se;
  if (D) {
    if (_.pos == k.pos)
      on && Jr <= 11 && _.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Or(n), 20)), B = n.state.tr.delete(C, q), te = p.resolve(b.start).marksAcross(p.resolve(b.endA));
    else if (b.endA == b.endB && (Se = jA(_.parent.content.cut(_.parentOffset, k.parentOffset), A.parent.content.cut(A.parentOffset, b.endA - A.start()))))
      B = n.state.tr, Se.type == "add" ? B.addMark(C, q, Se.mark) : B.removeMark(C, q, Se.mark);
    else if (_.parent.child(_.index()).isText && _.index() == k.index() - (k.textOffset ? 0 : 1)) {
      let Z = _.parent.textBetween(_.parentOffset, k.parentOffset);
      if (n.someProp("handleTextInput", (_e) => _e(n, C, q, Z)))
        return;
      B = n.state.tr.insertText(Z, C, q);
    }
  }
  if (B || (B = n.state.tr.replace(C, q, d.doc.slice(b.start - d.from, b.endB - d.from))), d.sel) {
    let Z = Xh(n, B.doc, d.sel);
    Z && !(Lt && zn && n.composing && Z.empty && (b.start != b.endB || n.input.lastAndroidDelete < Date.now() - 100) && (Z.head == C || Z.head == B.mapping.map(q) - 1) || on && Z.empty && Z.head == C) && B.setSelection(Z);
  }
  te && B.ensureMarks(te), o && B.setMeta("composition", o), n.dispatch(B.scrollIntoView());
}
function Xh(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : qu(n, e.resolve(t.anchor), e.resolve(t.head));
}
function jA(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, a, c, u;
  for (let p = 0; p < r.length; p++)
    i = r[p].removeFromSet(i);
  for (let p = 0; p < t.length; p++)
    o = t[p].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    c = i[0], a = "add", u = (p) => p.mark(c.addToSet(p.marks));
  else if (i.length == 0 && o.length == 1)
    c = o[0], a = "remove", u = (p) => p.mark(c.removeFromSet(p.marks));
  else
    return null;
  let d = [];
  for (let p = 0; p < e.childCount; p++)
    d.push(u(e.child(p)));
  if (z.from(d).eq(n))
    return { mark: c, type: a };
}
function KA(n, e, t, r, i) {
  if (!r.parent.isTextblock || t - e <= i.pos - r.pos || jc(r, !0, !1) < i.pos)
    return !1;
  let o = n.resolve(e);
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let a = n.resolve(jc(o, !0, !0));
  return !a.parent.isTextblock || a.pos > t || jc(a, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(a.parent.content);
}
function jc(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let o = n.node(r).maybeChild(n.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function qA(n, e, t, r, i) {
  let o = n.findDiffStart(e, t);
  if (o == null)
    return null;
  let { a, b: c } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let u = Math.max(0, o - Math.min(a, c));
    r -= a + u - o;
  }
  if (a < o && n.size < e.size) {
    let u = r <= o && r >= a ? o - r : 0;
    o -= u, c = o + (c - a), a = o;
  } else if (c < o) {
    let u = r <= o && r >= c ? o - r : 0;
    o -= u, a = o + (a - c), c = o;
  }
  return { start: o, endA: a, endB: c };
}
class JA {
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new hA(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(tm), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Qh(this), Zh(this), this.nodeViews = em(this), this.docView = Rh(this.state.doc, Yh(this), Uc(this), this.dom, this), this.domObserver = new $A(this, (r, i, o, a) => UA(this, r, i, o, a)), this.domObserver.start(), mA(this), this.updatePluginViews();
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
    e.handleDOMEvents != this._props.handleDOMEvents && ku(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(tm), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
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
    let r = this.state, i = !1, o = !1;
    e.storedMarks && this.composing && (ay(this), o = !0), this.state = e;
    let a = r.plugins != e.plugins || this._props.plugins != t.plugins;
    if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let g = em(this);
      XA(g, this.nodeViews) && (this.nodeViews = g, i = !0);
    }
    (a || t.handleDOMEvents != this._props.handleDOMEvents) && ku(this), this.editable = Qh(this), Zh(this);
    let c = Uc(this), u = Yh(this), d = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", p = i || !this.docView.matchesNode(e.doc, u, c);
    (p || !e.selection.eq(r.selection)) && (o = !0);
    let h = d == "preserve" && o && this.dom.style.overflowAnchor == null && AT(this);
    if (o) {
      this.domObserver.stop();
      let g = p && (on || Lt) && !this.composing && !r.selection.empty && !e.selection.empty && GA(r.selection, e.selection);
      if (p) {
        let y = Lt ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (i || !this.docView.update(e.doc, u, c, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Rh(e.doc, u, c, this.dom, this)), y && !this.trackWrites && (g = !0);
      }
      g || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && eA(this)) ? Or(this, g) : (Jg(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(r), d == "reset" ? this.dom.scrollTop = 0 : d == "to selection" ? this.scrollToSelection() : h && MT(h);
  }
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof oe) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Oh(this, t.getBoundingClientRect(), e);
      } else
        Oh(this, this.coordsAtPos(this.state.selection.head, 1), e);
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
    let o = this.state.plugins;
    if (o)
      for (let a = 0; a < o.length; a++) {
        let c = o[a].props[e];
        if (c != null && (i = t ? t(c) : c))
          return i;
      }
  }
  hasFocus() {
    if (on) {
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
    this.domObserver.stop(), this.editable && NT(this.dom), Or(this), this.domObserver.start();
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
  updateRoot() {
    this._root = null;
  }
  posAtCoords(e) {
    return LT(this, e);
  }
  coordsAtPos(e, t = 1) {
    return Vg(this, e, t);
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
    return zT(this, t || this.state, e);
  }
  pasteHTML(e, t) {
    return ys(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  pasteText(e, t) {
    return ys(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  destroy() {
    !this.docView || (gA(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Uc(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(e) {
    return vA(this, e);
  }
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  domSelectionRange() {
    return Jt && this.root.nodeType === 11 && ST(this.dom.ownerDocument) == this.dom ? VA(this) : this.domSelection();
  }
  domSelection() {
    return this.root.getSelection();
  }
}
function Yh(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Mn.node(0, n.state.doc.content.size, e)];
}
function Zh(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Mn.widget(n.state.selection.head, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Qh(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function GA(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function em(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function XA(n, e) {
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
function tm(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Qr = {
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
}, YA = typeof navigator < "u" && /Mac/.test(navigator.platform), ZA = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var At = 0; At < 10; At++)
  Qr[48 + At] = Qr[96 + At] = String(At);
for (var At = 1; At <= 24; At++)
  Qr[At + 111] = "F" + At;
for (var At = 65; At <= 90; At++)
  Qr[At] = String.fromCharCode(At + 32), Wa[At] = String.fromCharCode(At);
for (var Kc in Qr)
  Wa.hasOwnProperty(Kc) || (Wa[Kc] = Qr[Kc]);
function QA(n) {
  var e = YA && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || ZA && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Wa : Qr)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const eM = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function tM(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, o, a;
  for (let c = 0; c < e.length - 1; c++) {
    let u = e[c];
    if (/^(cmd|meta|m)$/i.test(u))
      a = !0;
    else if (/^a(lt)?$/i.test(u))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(u))
      i = !0;
    else if (/^s(hift)?$/i.test(u))
      o = !0;
    else if (/^mod$/i.test(u))
      eM ? a = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + u);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), a && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function nM(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[tM(t)] = n[t];
  return e;
}
function qc(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function rM(n) {
  return new ln({ props: { handleKeyDown: dy(n) } });
}
function dy(n) {
  let e = nM(n);
  return function(t, r) {
    let i = QA(r), o, a = e[qc(i, r)];
    if (a && a(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let c = e[qc(i, r, !1)];
        if (c && c(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = Qr[r.keyCode]) && o != i) {
        let c = e[qc(o, r)];
        if (c && c(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const iM = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function oM(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const sM = (n, e, t) => {
  let r = oM(n, t);
  if (!r)
    return !1;
  let i = py(r);
  if (!i) {
    let a = r.blockRange(), c = a && _o(a);
    return c == null ? !1 : (e && e(n.tr.lift(a, c).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (!o.type.spec.isolating && gy(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (go(o, "end") || oe.isSelectable(o))) {
    let a = Hu(n.doc, r.before(), r.after(), J.empty);
    if (a && a.slice.size < a.to - a.from) {
      if (e) {
        let c = n.tr.step(a);
        c.setSelection(go(o, "end") ? ye.findFrom(c.doc.resolve(c.mapping.map(i.pos, -1)), -1) : oe.create(c.doc, i.pos - o.nodeSize)), e(c.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
};
function go(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const aM = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    o = py(r);
  }
  let a = o && o.nodeBefore;
  return !a || !oe.isSelectable(a) ? !1 : (e && e(n.tr.setSelection(oe.create(n.doc, o.pos - a.nodeSize)).scrollIntoView()), !0);
};
function py(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function lM(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const cM = (n, e, t) => {
  let r = lM(n, t);
  if (!r)
    return !1;
  let i = hy(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (gy(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (go(o, "start") || oe.isSelectable(o))) {
    let a = Hu(n.doc, r.before(), r.after(), J.empty);
    if (a && a.slice.size < a.to - a.from) {
      if (e) {
        let c = n.tr.step(a);
        c.setSelection(go(o, "start") ? ye.findFrom(c.doc.resolve(c.mapping.map(i.pos)), 1) : oe.create(c.doc, c.mapping.map(i.pos))), e(c.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, uM = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    o = hy(r);
  }
  let a = o && o.nodeAfter;
  return !a || !oe.isSelectable(a) ? !1 : (e && e(n.tr.setSelection(oe.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function hy(n) {
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
const fM = (n, e) => {
  let t = n.selection, r = t instanceof oe, i;
  if (r) {
    if (t.node.isTextblock || !ei(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = tl(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(oe.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, dM = (n, e) => {
  let t = n.selection, r;
  if (t instanceof oe) {
    if (t.node.isTextblock || !ei(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = tl(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, pM = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && _o(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, hM = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function my(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const mM = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), a = my(i.contentMatchAt(o));
  if (!a || !i.canReplaceWith(o, o, a))
    return !1;
  if (e) {
    let c = t.after(), u = n.tr.replaceWith(c, c, a.createAndFill());
    u.setSelection(ye.near(u.doc.resolve(c), 1)), e(u.scrollIntoView());
  }
  return !0;
}, gM = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof Wn || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = my(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let a = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, c = n.tr.insert(a, o.createAndFill());
    c.setSelection(pe.create(c.doc, a + 1)), e(c.scrollIntoView());
  }
  return !0;
}, yM = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (so(n.doc, o))
      return e && e(n.tr.split(o).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && _o(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, vM = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(oe.create(n.doc, i))), !0);
};
function bM(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || ei(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function gy(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o, a;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (bM(n, e, t))
    return !0;
  let c = e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (a = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && a.matchType(o[0] || i.type).validEnd) {
    if (t) {
      let h = e.pos + i.nodeSize, g = z.empty;
      for (let _ = o.length - 1; _ >= 0; _--)
        g = z.from(o[_].create(null, g));
      g = z.from(r.copy(g));
      let y = n.tr.step(new xt(e.pos - 1, h, e.pos, h, new J(g, 1, 0), o.length, !0)), b = h + 2 * o.length;
      ei(y.doc, b) && y.join(b), t(y.scrollIntoView());
    }
    return !0;
  }
  let u = ye.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), p = d && _o(d);
  if (p != null && p >= e.depth)
    return t && t(n.tr.lift(d, p).scrollIntoView()), !0;
  if (c && go(i, "start", !0) && go(r, "end")) {
    let h = r, g = [];
    for (; g.push(h), !h.isTextblock; )
      h = h.lastChild;
    let y = i, b = 1;
    for (; !y.isTextblock; y = y.firstChild)
      b++;
    if (h.canReplace(h.childCount, h.childCount, y.content)) {
      if (t) {
        let _ = z.empty;
        for (let A = g.length - 1; A >= 0; A--)
          _ = z.from(g[A].copy(_));
        let k = n.tr.step(new xt(e.pos - g.length, e.pos + i.nodeSize, e.pos + b, e.pos + i.nodeSize - b, new J(_, g.length, 0), 0, !0));
        t(k.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function yy(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(pe.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const wM = yy(-1), xM = yy(1);
function SM(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, a = i.blockRange(o), c = a && zu(a, n, e);
    return c ? (r && r(t.tr.wrap(a, c).scrollIntoView()), !0) : !1;
  };
}
function nm(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: a }, $to: { pos: c } } = t.selection.ranges[o];
      t.doc.nodesBetween(a, c, (u, d) => {
        if (i)
          return !1;
        if (!(!u.isTextblock || u.hasMarkup(n, e)))
          if (u.type == n)
            i = !0;
          else {
            let p = t.doc.resolve(d), h = p.index();
            i = p.parent.canReplaceWith(h, h + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = t.tr;
      for (let a = 0; a < t.selection.ranges.length; a++) {
        let { $from: { pos: c }, $to: { pos: u } } = t.selection.ranges[a];
        o.setBlockType(c, u, n, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function _M(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, a = i.blockRange(o), c = !1, u = a;
    if (!a)
      return !1;
    if (a.depth >= 2 && i.node(a.depth - 1).type.compatibleContent(n) && a.startIndex == 0) {
      if (i.index(a.depth - 1) == 0)
        return !1;
      let p = t.doc.resolve(a.start - 2);
      u = new Ia(p, p, a.depth), a.endIndex < a.parent.childCount && (a = new Ia(i, t.doc.resolve(o.end(a.depth)), a.depth)), c = !0;
    }
    let d = zu(u, n, e, a);
    return d ? (r && r(kM(t.tr, a, d, c, n).scrollIntoView()), !0) : !1;
  };
}
function kM(n, e, t, r, i) {
  let o = z.empty;
  for (let p = t.length - 1; p >= 0; p--)
    o = z.from(t[p].type.create(t[p].attrs, o));
  n.step(new xt(e.start - (r ? 2 : 0), e.end, e.start, e.end, new J(o, 0, 0), t.length, !0));
  let a = 0;
  for (let p = 0; p < t.length; p++)
    t[p].type == i && (a = p + 1);
  let c = t.length - a, u = e.start + t.length - (r ? 2 : 0), d = e.parent;
  for (let p = e.startIndex, h = e.endIndex, g = !0; p < h; p++, g = !1)
    !g && so(n.doc, u, c) && (n.split(u, c), u += 2 * c), u += d.child(p).nodeSize;
  return n;
}
function CM(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (a) => a.childCount > 0 && a.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? EM(e, t, n, o) : OM(e, t, o) : !0 : !1;
  };
}
function EM(n, e, t, r) {
  let i = n.tr, o = r.end, a = r.$to.end(r.depth);
  o < a && (i.step(new xt(o - 1, a, o, a, new J(z.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Ia(i.doc.resolve(r.$from.pos), i.doc.resolve(a), r.depth));
  const c = _o(r);
  if (c == null)
    return !1;
  i.lift(r, c);
  let u = i.mapping.map(o, -1) - 1;
  return ei(i.doc, u) && i.join(u), e(i.scrollIntoView()), !0;
}
function OM(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let y = t.end, b = t.endIndex - 1, _ = t.startIndex; b > _; b--)
    y -= i.child(b).nodeSize, r.delete(y - 1, y + 1);
  let o = r.doc.resolve(t.start), a = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let c = t.startIndex == 0, u = t.endIndex == i.childCount, d = o.node(-1), p = o.index(-1);
  if (!d.canReplace(p + (c ? 0 : 1), p + 1, a.content.append(u ? z.empty : z.from(i))))
    return !1;
  let h = o.pos, g = h + a.nodeSize;
  return r.step(new xt(h - (c ? 1 : 0), g + (u ? 1 : 0), h + 1, g - 1, new J((c ? z.empty : z.from(i.copy(z.empty))).append(u ? z.empty : z.from(i.copy(z.empty))), c ? 0 : 1, u ? 0 : 1), c ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function TM(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (d) => d.childCount > 0 && d.firstChild.type == n);
    if (!o)
      return !1;
    let a = o.startIndex;
    if (a == 0)
      return !1;
    let c = o.parent, u = c.child(a - 1);
    if (u.type != n)
      return !1;
    if (t) {
      let d = u.lastChild && u.lastChild.type == c.type, p = z.from(d ? n.create() : null), h = new J(z.from(n.create(null, z.from(c.type.create(null, p)))), d ? 3 : 1, 0), g = o.start, y = o.end;
      t(e.tr.step(new xt(g - (d ? 3 : 1), y, g, y, h, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function sl(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: o } = t;
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
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, o = t.storedMarks, t;
    }
  };
}
class al {
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
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: o } = r, a = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([c, u]) => [c, (...p) => {
      const h = u(...p)(a);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), h;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: a } = i, c = [], u = !!e, d = e || o.tr, p = () => (!u && t && !d.getMeta("preventDispatch") && !this.hasCustomState && a.dispatch(d), c.every((g) => g === !0)), h = {
      ...Object.fromEntries(Object.entries(r).map(([g, y]) => [g, (..._) => {
        const k = this.buildProps(d, t), A = y(..._)(k);
        return c.push(A), h;
      }])),
      run: p
    };
    return h;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, o = e || r.tr, a = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([u, d]) => [u, (...p) => d(...p)({ ...a, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: a } = i, c = {
      tr: e,
      editor: i,
      view: a,
      state: sl({
        state: o,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([u, d]) => [u, (...p) => d(...p)(c)]));
      }
    };
    return c;
  }
}
class AM {
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
function Q(n, e, t) {
  return n.config[e] === void 0 && n.parent ? Q(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? Q(n.parent, e, t) : null
  }) : n.config[e];
}
function ll(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function vy(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = ll(n), i = [...t, ...r], o = {
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
    }, u = Q(a, "addGlobalAttributes", c);
    if (!u)
      return;
    u().forEach((p) => {
      p.types.forEach((h) => {
        Object.entries(p.attributes).forEach(([g, y]) => {
          e.push({
            type: h,
            name: g,
            attribute: {
              ...o,
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
    }, u = Q(a, "addAttributes", c);
    if (!u)
      return;
    const d = u();
    Object.entries(d).forEach(([p, h]) => {
      const g = {
        ...o,
        ...h
      };
      typeof (g == null ? void 0 : g.default) == "function" && (g.default = g.default()), (g == null ? void 0 : g.isRequired) && (g == null ? void 0 : g.default) === void 0 && delete g.default, e.push({
        type: a.name,
        name: p,
        attribute: g
      });
    });
  }), e;
}
function _t(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function yt(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const c = o ? o.split(" ") : [], u = r[i] ? r[i].split(" ") : [], d = c.filter((p) => !u.includes(p));
        r[i] = [...u, ...d].join(" ");
      } else
        i === "style" ? r[i] = [r[i], o].join("; ") : r[i] = o;
    }), r;
  }, {});
}
function Cu(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => yt(t, r), {});
}
function by(n) {
  return typeof n == "function";
}
function ge(n, e = void 0, ...t) {
  return by(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function MM(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function NM(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function rm(n, e) {
  return n.style ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, a) => {
        const c = a.attribute.parseHTML ? a.attribute.parseHTML(t) : NM(t.getAttribute(a.name));
        return c == null ? o : {
          ...o,
          [a.name]: c
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function im(n) {
  return Object.fromEntries(
    Object.entries(n).filter(([e, t]) => e === "attrs" && MM(t) ? !1 : t != null)
  );
}
function DM(n, e) {
  var t;
  const r = vy(n), { nodeExtensions: i, markExtensions: o } = ll(n), a = (t = i.find((d) => Q(d, "topNode"))) === null || t === void 0 ? void 0 : t.name, c = Object.fromEntries(i.map((d) => {
    const p = r.filter((A) => A.type === d.name), h = {
      name: d.name,
      options: d.options,
      storage: d.storage,
      editor: e
    }, g = n.reduce((A, D) => {
      const H = Q(D, "extendNodeSchema", h);
      return {
        ...A,
        ...H ? H(d) : {}
      };
    }, {}), y = im({
      ...g,
      content: ge(Q(d, "content", h)),
      marks: ge(Q(d, "marks", h)),
      group: ge(Q(d, "group", h)),
      inline: ge(Q(d, "inline", h)),
      atom: ge(Q(d, "atom", h)),
      selectable: ge(Q(d, "selectable", h)),
      draggable: ge(Q(d, "draggable", h)),
      code: ge(Q(d, "code", h)),
      defining: ge(Q(d, "defining", h)),
      isolating: ge(Q(d, "isolating", h)),
      attrs: Object.fromEntries(p.map((A) => {
        var D;
        return [A.name, { default: (D = A == null ? void 0 : A.attribute) === null || D === void 0 ? void 0 : D.default }];
      }))
    }), b = ge(Q(d, "parseHTML", h));
    b && (y.parseDOM = b.map((A) => rm(A, p)));
    const _ = Q(d, "renderHTML", h);
    _ && (y.toDOM = (A) => _({
      node: A,
      HTMLAttributes: Cu(A, p)
    }));
    const k = Q(d, "renderText", h);
    return k && (y.toText = k), [d.name, y];
  })), u = Object.fromEntries(o.map((d) => {
    const p = r.filter((k) => k.type === d.name), h = {
      name: d.name,
      options: d.options,
      storage: d.storage,
      editor: e
    }, g = n.reduce((k, A) => {
      const D = Q(A, "extendMarkSchema", h);
      return {
        ...k,
        ...D ? D(d) : {}
      };
    }, {}), y = im({
      ...g,
      inclusive: ge(Q(d, "inclusive", h)),
      excludes: ge(Q(d, "excludes", h)),
      group: ge(Q(d, "group", h)),
      spanning: ge(Q(d, "spanning", h)),
      code: ge(Q(d, "code", h)),
      attrs: Object.fromEntries(p.map((k) => {
        var A;
        return [k.name, { default: (A = k == null ? void 0 : k.attribute) === null || A === void 0 ? void 0 : A.default }];
      }))
    }), b = ge(Q(d, "parseHTML", h));
    b && (y.parseDOM = b.map((k) => rm(k, p)));
    const _ = Q(d, "renderHTML", h);
    return _ && (y.toDOM = (k) => _({
      mark: k,
      HTMLAttributes: Cu(k, p)
    })), [d.name, y];
  }));
  return new VO({
    topNode: a,
    nodes: c,
    marks: u
  });
}
function Jc(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function om(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const RM = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, o, a, c) => {
    var u, d;
    const p = ((d = (u = i.type.spec).toText) === null || d === void 0 ? void 0 : d.call(u, {
      node: i,
      pos: o,
      parent: a,
      index: c
    })) || i.textContent || "%leaf%";
    t += p.slice(0, Math.max(0, r - o));
  }), t;
};
function Qu(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class cl {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const IM = (n, e) => {
  if (Qu(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Gc(n) {
  var e;
  const { editor: t, from: r, to: i, text: o, rules: a, plugin: c } = n, { view: u } = t;
  if (u.composing)
    return !1;
  const d = u.state.doc.resolve(r);
  if (d.parent.type.spec.code || !!(!((e = d.nodeBefore || d.nodeAfter) === null || e === void 0) && e.marks.find((g) => g.type.spec.code)))
    return !1;
  let p = !1;
  const h = RM(d) + o;
  return a.forEach((g) => {
    if (p)
      return;
    const y = IM(h, g.find);
    if (!y)
      return;
    const b = u.state.tr, _ = sl({
      state: u.state,
      transaction: b
    }), k = {
      from: r - (y[0].length - o.length),
      to: i
    }, { commands: A, chain: D, can: H } = new al({
      editor: t,
      state: _
    });
    g.handler({
      state: _,
      range: k,
      match: y,
      commands: A,
      chain: D,
      can: H
    }) === null || !b.steps.length || (b.setMeta(c, {
      transform: b,
      from: r,
      to: i,
      text: o
    }), u.dispatch(b), p = !0);
  }), p;
}
function PM(n) {
  const { editor: e, rules: t } = n, r = new ln({
    state: {
      init() {
        return null;
      },
      apply(i, o) {
        const a = i.getMeta(r);
        return a || (i.selectionSet || i.docChanged ? null : o);
      }
    },
    props: {
      handleTextInput(i, o, a, c) {
        return Gc({
          editor: e,
          from: o,
          to: a,
          text: c,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && Gc({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: a } = i.state.selection;
        return a ? Gc({
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
function LM(n) {
  return typeof n == "number";
}
class BM {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const $M = (n, e) => {
  if (Qu(e))
    return [...n.matchAll(e)];
  const t = e(n);
  return t ? t.map((r) => {
    const i = [r.text];
    return i.index = r.index, i.input = n, i.data = r.data, r.replaceWith && (r.text.includes(r.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(r.replaceWith)), i;
  }) : [];
};
function FM(n) {
  const { editor: e, state: t, from: r, to: i, rule: o, pasteEvent: a, dropEvent: c } = n, { commands: u, chain: d, can: p } = new al({
    editor: e,
    state: t
  }), h = [];
  return t.doc.nodesBetween(r, i, (y, b) => {
    if (!y.isTextblock || y.type.spec.code)
      return;
    const _ = Math.max(r, b), k = Math.min(i, b + y.content.size), A = y.textBetween(_ - b, k - b, void 0, "\uFFFC");
    $M(A, o.find).forEach((H) => {
      if (H.index === void 0)
        return;
      const C = _ + H.index + 1, q = C + H[0].length, B = {
        from: t.tr.mapping.map(C),
        to: t.tr.mapping.map(q)
      }, te = o.handler({
        state: t,
        range: B,
        match: H,
        commands: u,
        chain: d,
        can: p,
        pasteEvent: a,
        dropEvent: c
      });
      h.push(te);
    });
  }), h.every((y) => y !== null);
}
function VM(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, o = !1, a = new ClipboardEvent("paste"), c = new DragEvent("drop");
  return t.map((d) => new ln({
    view(p) {
      const h = (g) => {
        var y;
        r = !((y = p.dom.parentElement) === null || y === void 0) && y.contains(g.target) ? p.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", h), {
        destroy() {
          window.removeEventListener("dragstart", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (p, h) => (o = r === p.dom.parentElement, c = h, !1),
        paste: (p, h) => {
          var g;
          const y = (g = h.clipboardData) === null || g === void 0 ? void 0 : g.getData("text/html");
          return a = h, i = !!(y != null && y.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (p, h, g) => {
      const y = p[0], b = y.getMeta("uiEvent") === "paste" && !i, _ = y.getMeta("uiEvent") === "drop" && !o;
      if (!b && !_)
        return;
      const k = h.doc.content.findDiffStart(g.doc.content), A = h.doc.content.findDiffEnd(g.doc.content);
      if (!LM(k) || !A || k === A.b)
        return;
      const D = g.tr, H = sl({
        state: g,
        transaction: D
      });
      if (!(!FM({
        editor: e,
        state: H,
        from: Math.max(k - 1, 0),
        to: A.b - 1,
        rule: d,
        pasteEvent: a,
        dropEvent: c
      }) || !D.steps.length))
        return c = new DragEvent("drop"), a = new ClipboardEvent("paste"), D;
    }
  }));
}
function zM(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return [...new Set(e)];
}
class ro {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = ro.resolve(e), this.schema = DM(this.extensions, t), this.extensions.forEach((r) => {
      var i;
      this.editor.extensionStorage[r.name] = r.storage;
      const o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: this.editor,
        type: Jc(r.name, this.schema)
      };
      r.type === "mark" && ((i = ge(Q(r, "keepOnSplit", o))) !== null && i !== void 0 ? i : !0) && this.splittableMarks.push(r.name);
      const a = Q(r, "onBeforeCreate", o);
      a && this.editor.on("beforeCreate", a);
      const c = Q(r, "onCreate", o);
      c && this.editor.on("create", c);
      const u = Q(r, "onUpdate", o);
      u && this.editor.on("update", u);
      const d = Q(r, "onSelectionUpdate", o);
      d && this.editor.on("selectionUpdate", d);
      const p = Q(r, "onTransaction", o);
      p && this.editor.on("transaction", p);
      const h = Q(r, "onFocus", o);
      h && this.editor.on("focus", h);
      const g = Q(r, "onBlur", o);
      g && this.editor.on("blur", g);
      const y = Q(r, "onDestroy", o);
      y && this.editor.on("destroy", y);
    });
  }
  static resolve(e) {
    const t = ro.sort(ro.flatten(e)), r = zM(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = Q(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((r, i) => {
      const o = Q(r, "priority") || 100, a = Q(i, "priority") || 100;
      return o > a ? -1 : o < a ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: Jc(t.name, this.schema)
      }, i = Q(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, t = ro.sort([...this.extensions].reverse()), r = [], i = [], o = t.map((a) => {
      const c = {
        name: a.name,
        options: a.options,
        storage: a.storage,
        editor: e,
        type: Jc(a.name, this.schema)
      }, u = [], d = Q(a, "addKeyboardShortcuts", c);
      let p = {};
      if (a.type === "mark" && a.config.exitable && (p.ArrowRight = () => or.handleExit({ editor: e, mark: a })), d) {
        const _ = Object.fromEntries(Object.entries(d()).map(([k, A]) => [k, () => A({ editor: e })]));
        p = { ...p, ..._ };
      }
      const h = rM(p);
      u.push(h);
      const g = Q(a, "addInputRules", c);
      om(a, e.options.enableInputRules) && g && r.push(...g());
      const y = Q(a, "addPasteRules", c);
      om(a, e.options.enablePasteRules) && y && i.push(...y());
      const b = Q(a, "addProseMirrorPlugins", c);
      if (b) {
        const _ = b();
        u.push(..._);
      }
      return u;
    }).flat();
    return [
      PM({
        editor: e,
        rules: r
      }),
      ...VM({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  get attributes() {
    return vy(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = ll(this.extensions);
    return Object.fromEntries(t.filter((r) => !!Q(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((u) => u.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: _t(r.name, this.schema)
      }, a = Q(r, "addNodeView", o);
      if (!a)
        return [];
      const c = (u, d, p, h) => {
        const g = Cu(u, i);
        return a()({
          editor: e,
          node: u,
          getPos: p,
          decorations: h,
          HTMLAttributes: g,
          extension: r
        });
      };
      return [r.name, c];
    }));
  }
}
function HM(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Xc(n) {
  return HM(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function ul(n, e) {
  const t = { ...n };
  return Xc(n) && Xc(e) && Object.keys(e).forEach((r) => {
    Xc(e[r]) ? r in n ? t[r] = ul(n[r], e[r]) : Object.assign(t, { [r]: e[r] }) : Object.assign(t, { [r]: e[r] });
  }), t;
}
class Yt {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ge(Q(this, "addOptions", {
      name: this.name
    }))), this.storage = ge(Q(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Yt(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ul(this.options, e), t.storage = ge(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Yt(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ge(Q(t, "addOptions", {
      name: t.name
    })), t.storage = ge(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function wy(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: a = {} } = t || {};
  let c = "", u = !0;
  return n.nodesBetween(r, i, (d, p, h, g) => {
    var y;
    const b = a == null ? void 0 : a[d.type.name];
    b ? (d.isBlock && !u && (c += o, u = !0), h && (c += b({
      node: d,
      pos: p,
      parent: h,
      index: g,
      range: e
    }))) : d.isText ? (c += (y = d == null ? void 0 : d.text) === null || y === void 0 ? void 0 : y.slice(Math.max(r, p) - p, i - p), u = !1) : d.isBlock && !u && (c += o, u = !0);
  }), c;
}
function xy(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const WM = Yt.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new ln({
        key: new lr("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: o } = i, a = Math.min(...o.map((p) => p.$from.pos)), c = Math.max(...o.map((p) => p.$to.pos)), u = xy(t);
            return wy(r, { from: a, to: c }, {
              textSerializers: u
            });
          }
        }
      })
    ];
  }
}), UM = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), jM = (n = !1) => ({ commands: e }) => e.setContent("", n), KM = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: o, $to: a }) => {
    n.doc.nodesBetween(o.pos, a.pos, (c, u) => {
      if (c.type.isText)
        return;
      const { doc: d, mapping: p } = e, h = d.resolve(p.map(u)), g = d.resolve(p.map(u + c.nodeSize)), y = h.blockRange(g);
      if (!y)
        return;
      const b = _o(y);
      if (c.type.isTextblock) {
        const { defaultType: _ } = h.parent.contentMatchAt(h.index());
        e.setNodeMarkup(y.start, _);
      }
      (b || b === 0) && e.lift(y, b);
    });
  }), !0;
}, qM = (n) => (e) => n(e), JM = () => ({ state: n, dispatch: e }) => gM(n, e), GM = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, o = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const a = r.mapping.map(e);
  return r.insert(a, o.content), r.setSelection(new pe(r.doc.resolve(a - 1))), !0;
}, XM = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const c = i.before(o), u = i.after(o);
        n.delete(c, u).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, YM = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = _t(n, t.schema), o = e.selection.$anchor;
  for (let a = o.depth; a > 0; a -= 1)
    if (o.node(a).type === i) {
      if (r) {
        const u = o.before(a), d = o.after(a);
        e.delete(u, d).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, ZM = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, QM = () => ({ state: n, dispatch: e }) => iM(n, e), eN = () => ({ commands: n }) => n.keyboardShortcut("Enter"), tN = () => ({ state: n, dispatch: e }) => mM(n, e);
function Ua(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Qu(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Eu(n, e, t = {}) {
  return n.find((r) => r.type === e && Ua(r.attrs, t));
}
function nN(n, e, t = {}) {
  return !!Eu(n, e, t);
}
function ef(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = Eu([...r.node.marks], e, t);
  if (!i)
    return;
  let o = r.index, a = n.start() + r.offset, c = o + 1, u = a + r.node.nodeSize;
  for (Eu([...r.node.marks], e, t); o > 0 && i.isInSet(n.parent.child(o - 1).marks); )
    o -= 1, a -= n.parent.child(o).nodeSize;
  for (; c < n.parent.childCount && nN([...n.parent.child(c).marks], e, t); )
    u += n.parent.child(c).nodeSize, c += 1;
  return {
    from: a,
    to: u
  };
}
function ni(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const rN = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const o = ni(n, r.schema), { doc: a, selection: c } = t, { $from: u, from: d, to: p } = c;
  if (i) {
    const h = ef(u, o, e);
    if (h && h.from <= d && h.to >= p) {
      const g = pe.create(a, h.from, h.to);
      t.setSelection(g);
    }
  }
  return !0;
}, iN = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function tf(n) {
  return n instanceof pe;
}
function Cr(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Sy(n, e = null) {
  if (!e)
    return null;
  const t = ye.atStart(n), r = ye.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, o = r.to;
  return e === "all" ? pe.create(n, Cr(0, i, o), Cr(n.content.size, i, o)) : pe.create(n, Cr(e, i, o), Cr(e, i, o));
}
function nf() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const oN = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const a = () => {
    nf() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (o && n === null && !tf(t.state.selection))
    return a(), !0;
  const c = Sy(i.doc, n) || t.state.selection, u = t.state.selection.eq(c);
  return o && (u || i.setSelection(c), u && i.storedMarks && i.setStoredMarks(i.storedMarks), a()), !0;
}, sN = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), aN = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e);
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
      return Array.isArray(n) && n.length > 0 ? z.fromArray(n.map((r) => e.nodeFromJSON(r))) : e.nodeFromJSON(n);
    } catch (r) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", r), ja("", e, t);
    }
  if (typeof n == "string") {
    const r = uo.fromSchema(e);
    return t.slice ? r.parseSlice(sm(n), t.parseOptions).content : r.parse(sm(n), t.parseOptions);
  }
  return ja("", e, t);
}
function lN(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof Tt || i instanceof xt))
    return;
  const o = n.mapping.maps[r];
  let a = 0;
  o.forEach((c, u, d, p) => {
    a === 0 && (a = p);
  }), n.setSelection(ye.near(n.doc.resolve(a), t));
}
const cN = (n) => n.toString().startsWith("<"), uN = (n, e, t) => ({ tr: r, dispatch: i, editor: o }) => {
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      ...t
    };
    const a = ja(e, o.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...t.parseOptions
      }
    });
    if (a.toString() === "<>")
      return !0;
    let { from: c, to: u } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, d = !0, p = !0;
    if ((cN(a) ? a : [a]).forEach((g) => {
      g.check(), d = d ? g.isText && g.marks.length === 0 : !1, p = p ? g.isBlock : !1;
    }), c === u && p) {
      const { parent: g } = r.doc.resolve(c);
      g.isTextblock && !g.type.spec.code && !g.childCount && (c -= 1, u += 1);
    }
    d ? Array.isArray(e) ? r.insertText(e.map((g) => g.text || "").join(""), c, u) : typeof e == "object" && !!e && !!e.text ? r.insertText(e.text, c, u) : r.insertText(e, c, u) : r.replaceWith(c, u, a), t.updateSelection && lN(r, r.steps.length - 1, -1);
  }
  return !0;
}, fN = () => ({ state: n, dispatch: e }) => fM(n, e), dN = () => ({ state: n, dispatch: e }) => dM(n, e), pN = () => ({ state: n, dispatch: e }) => sM(n, e), hN = () => ({ state: n, dispatch: e }) => cM(n, e), mN = () => ({ tr: n, state: e, dispatch: t }) => {
  try {
    const r = tl(e.doc, e.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
  } catch {
    return !1;
  }
}, gN = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = tl(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
};
function rf() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function yN(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, o, a;
  for (let c = 0; c < e.length - 1; c += 1) {
    const u = e[c];
    if (/^(cmd|meta|m)$/i.test(u))
      a = !0;
    else if (/^a(lt)?$/i.test(u))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(u))
      i = !0;
    else if (/^s(hift)?$/i.test(u))
      o = !0;
    else if (/^mod$/i.test(u))
      nf() || rf() ? a = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${u}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), a && (t = `Meta-${t}`), o && (t = `Shift-${t}`), t;
}
const vN = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const o = yN(n).split(/-(?!$)/), a = o.find((d) => !["Alt", "Ctrl", "Meta", "Shift"].includes(d)), c = new KeyboardEvent("keydown", {
    key: a === "Space" ? " " : a,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), u = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (d) => d(t, c));
  });
  return u == null || u.steps.forEach((d) => {
    const p = d.map(r.mapping);
    p && i && r.maybeStep(p);
  }), !0;
};
function bs(n, e, t = {}) {
  const { from: r, to: i, empty: o } = n.selection, a = e ? _t(e, n.schema) : null, c = [];
  n.doc.nodesBetween(r, i, (h, g) => {
    if (h.isText)
      return;
    const y = Math.max(r, g), b = Math.min(i, g + h.nodeSize);
    c.push({
      node: h,
      from: y,
      to: b
    });
  });
  const u = i - r, d = c.filter((h) => a ? a.name === h.node.type.name : !0).filter((h) => Ua(h.node.attrs, t, { strict: !1 }));
  return o ? !!d.length : d.reduce((h, g) => h + g.to - g.from, 0) >= u;
}
const bN = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = _t(n, t.schema);
  return bs(t, i, e) ? pM(t, r) : !1;
}, wN = () => ({ state: n, dispatch: e }) => yM(n, e), xN = (n) => ({ state: e, dispatch: t }) => {
  const r = _t(n, e.schema);
  return CM(r)(e, t);
}, SN = () => ({ state: n, dispatch: e }) => hM(n, e);
function fl(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function am(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const _N = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, a = null;
  const c = fl(typeof n == "string" ? n : n.name, r.schema);
  return c ? (c === "node" && (o = _t(n, r.schema)), c === "mark" && (a = ni(n, r.schema)), i && t.selection.ranges.forEach((u) => {
    r.doc.nodesBetween(u.$from.pos, u.$to.pos, (d, p) => {
      o && o === d.type && t.setNodeMarkup(p, void 0, am(d.attrs, e)), a && d.marks.length && d.marks.forEach((h) => {
        a === h.type && t.addMark(p, p + d.nodeSize, a.create(am(h.attrs, e)));
      });
    });
  }), !0) : !1;
}, kN = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), CN = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), EN = () => ({ state: n, dispatch: e }) => aM(n, e), ON = () => ({ state: n, dispatch: e }) => uM(n, e), TN = () => ({ state: n, dispatch: e }) => vM(n, e), AN = () => ({ state: n, dispatch: e }) => xM(n, e), MN = () => ({ state: n, dispatch: e }) => wM(n, e);
function _y(n, e, t = {}) {
  return ja(n, e, { slice: !1, parseOptions: t });
}
const NN = (n, e = !1, t = {}) => ({ tr: r, editor: i, dispatch: o }) => {
  const { doc: a } = r, c = _y(n, i.schema, t);
  return o && r.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !e), !0;
};
function dl(n, e) {
  const t = ni(e, n.schema), { from: r, to: i, empty: o } = n.selection, a = [];
  o ? (n.storedMarks && a.push(...n.storedMarks), a.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (u) => {
    a.push(...u.marks);
  });
  const c = a.find((u) => u.type.name === t.name);
  return c ? { ...c.attrs } : {};
}
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
function of(n) {
  return (e) => RN(e.$from, n);
}
function IN(n, e) {
  const t = Qn.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function PN(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return wy(n, t, e);
}
function LN(n, e) {
  const t = _t(e, n.schema), { from: r, to: i } = n.selection, o = [];
  n.doc.nodesBetween(r, i, (c) => {
    o.push(c);
  });
  const a = o.reverse().find((c) => c.type.name === t.name);
  return a ? { ...a.attrs } : {};
}
function BN(n, e) {
  const t = fl(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? LN(n, e) : t === "mark" ? dl(n, e) : {};
}
function ky(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const o = t.resolve(n - 1), a = ef(o, i.type);
    !a || r.push({
      mark: i,
      ...a
    });
  }) : t.nodesBetween(n, e, (i, o) => {
    r.push(...i.marks.map((a) => ({
      from: o,
      to: o + i.nodeSize,
      mark: a
    })));
  }), r;
}
function Oa(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Ou(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, o = e ? ni(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((h) => o ? o.name === h.type.name : !0).find((h) => Ua(h.attrs, t, { strict: !1 }));
  let a = 0;
  const c = [];
  if (i.forEach(({ $from: h, $to: g }) => {
    const y = h.pos, b = g.pos;
    n.doc.nodesBetween(y, b, (_, k) => {
      if (!_.isText && !_.marks.length)
        return;
      const A = Math.max(y, k), D = Math.min(b, k + _.nodeSize), H = D - A;
      a += H, c.push(..._.marks.map((C) => ({
        mark: C,
        from: A,
        to: D
      })));
    });
  }), a === 0)
    return !1;
  const u = c.filter((h) => o ? o.name === h.mark.type.name : !0).filter((h) => Ua(h.mark.attrs, t, { strict: !1 })).reduce((h, g) => h + g.to - g.from, 0), d = c.filter((h) => o ? h.mark.type !== o && h.mark.type.excludes(o) : !0).reduce((h, g) => h + g.to - g.from, 0);
  return (u > 0 ? u + d : u) >= a;
}
function $N(n, e, t = {}) {
  if (!e)
    return bs(n, null, t) || Ou(n, null, t);
  const r = fl(e, n.schema);
  return r === "node" ? bs(n, e, t) : r === "mark" ? Ou(n, e, t) : !1;
}
function lm(n, e) {
  const { nodeExtensions: t } = ll(e), r = t.find((a) => a.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = ge(Q(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function FN(n) {
  var e;
  const t = (e = n.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = n.toJSON();
  return JSON.stringify(t) === JSON.stringify(r);
}
function VN(n) {
  return n instanceof oe;
}
function Cy(n, e, t) {
  const i = n.state.doc.content.size, o = Cr(e, 0, i), a = Cr(t, 0, i), c = n.coordsAtPos(o), u = n.coordsAtPos(a, -1), d = Math.min(c.top, u.top), p = Math.max(c.bottom, u.bottom), h = Math.min(c.left, u.left), g = Math.max(c.right, u.right), y = g - h, b = p - d, A = {
    top: d,
    bottom: p,
    left: h,
    right: g,
    width: y,
    height: b,
    x: h,
    y: d
  };
  return {
    ...A,
    toJSON: () => A
  };
}
function zN(n, e, t) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (tf(i) && (o = i.$cursor), o) {
    const c = (r = n.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!t.isInSet(c) || !c.some((u) => u.type.excludes(t));
  }
  const { ranges: a } = i;
  return a.some(({ $from: c, $to: u }) => {
    let d = c.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(c.pos, u.pos, (p, h, g) => {
      if (d)
        return !1;
      if (p.isInline) {
        const y = !g || g.type.allowsMarkType(t), b = !!t.isInSet(p.marks) || !p.marks.some((_) => _.type.excludes(t));
        d = y && b;
      }
      return !d;
    }), d;
  });
}
const HN = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: o } = t, { empty: a, ranges: c } = o, u = ni(n, r.schema);
  if (i)
    if (a) {
      const d = dl(r, u);
      t.addStoredMark(u.create({
        ...d,
        ...e
      }));
    } else
      c.forEach((d) => {
        const p = d.$from.pos, h = d.$to.pos;
        r.doc.nodesBetween(p, h, (g, y) => {
          const b = Math.max(y, p), _ = Math.min(y + g.nodeSize, h);
          g.marks.find((A) => A.type === u) ? g.marks.forEach((A) => {
            u === A.type && t.addMark(b, _, u.create({
              ...A.attrs,
              ...e
            }));
          }) : t.addMark(b, _, u.create(e));
        });
      });
  return zN(r, t, u);
}, WN = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), UN = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const o = _t(n, t.schema);
  return o.isTextblock ? i().command(({ commands: a }) => nm(o, e)(t) ? !0 : a.clearNodes()).command(({ state: a }) => nm(o, e)(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, jN = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Cr(n, 0, r.content.size), o = oe.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, KN = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: o } = typeof n == "number" ? { from: n, to: n } : n, a = pe.atStart(r).from, c = pe.atEnd(r).to, u = Cr(i, a, c), d = Cr(o, a, c), p = pe.create(r, u, d);
    e.setSelection(p);
  }
  return !0;
}, qN = (n) => ({ state: e, dispatch: t }) => {
  const r = _t(n, e.schema);
  return TM(r)(e, t);
};
function cm(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const JN = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: o, doc: a } = e, { $from: c, $to: u } = o, d = i.extensionManager.attributes, p = Oa(d, c.node().type.name, c.node().attrs);
  if (o instanceof oe && o.node.isBlock)
    return !c.parentOffset || !so(a, c.pos) ? !1 : (r && (n && cm(t, i.extensionManager.splittableMarks), e.split(c.pos).scrollIntoView()), !0);
  if (!c.parent.isBlock)
    return !1;
  if (r) {
    const h = u.parentOffset === u.parent.content.size;
    o instanceof pe && e.deleteSelection();
    const g = c.depth === 0 ? void 0 : DN(c.node(-1).contentMatchAt(c.indexAfter(-1)));
    let y = h && g ? [
      {
        type: g,
        attrs: p
      }
    ] : void 0, b = so(e.doc, e.mapping.map(c.pos), 1, y);
    if (!y && !b && so(e.doc, e.mapping.map(c.pos), 1, g ? [{ type: g }] : void 0) && (b = !0, y = g ? [
      {
        type: g,
        attrs: p
      }
    ] : void 0), b && (e.split(e.mapping.map(c.pos), 1, y), g && !h && !c.parentOffset && c.parent.type !== g)) {
      const _ = e.mapping.map(c.before()), k = e.doc.resolve(_);
      c.node(-1).canReplaceWith(k.index(), k.index() + 1, g) && e.setNodeMarkup(e.mapping.map(c.before()), g);
    }
    n && cm(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, GN = (n) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  var o;
  const a = _t(n, t.schema), { $from: c, $to: u } = t.selection, d = t.selection.node;
  if (d && d.isBlock || c.depth < 2 || !c.sameParent(u))
    return !1;
  const p = c.node(-1);
  if (p.type !== a)
    return !1;
  const h = i.extensionManager.attributes;
  if (c.parent.content.size === 0 && c.node(-1).childCount === c.indexAfter(-1)) {
    if (c.depth === 2 || c.node(-3).type !== a || c.index(-2) !== c.node(-2).childCount - 1)
      return !1;
    if (r) {
      let k = z.empty;
      const A = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
      for (let te = c.depth - A; te >= c.depth - 3; te -= 1)
        k = z.from(c.node(te).copy(k));
      const D = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3, H = Oa(h, c.node().type.name, c.node().attrs), C = ((o = a.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(H)) || void 0;
      k = k.append(z.from(a.createAndFill(null, C) || void 0));
      const q = c.before(c.depth - (A - 1));
      e.replace(q, c.after(-D), new J(k, 4 - A, 0));
      let B = -1;
      e.doc.nodesBetween(q, e.doc.content.size, (te, Se) => {
        if (B > -1)
          return !1;
        te.isTextblock && te.content.size === 0 && (B = Se + 1);
      }), B > -1 && e.setSelection(pe.near(e.doc.resolve(B))), e.scrollIntoView();
    }
    return !0;
  }
  const g = u.pos === c.end() ? p.contentMatchAt(0).defaultType : null, y = Oa(h, p.type.name, p.attrs), b = Oa(h, c.node().type.name, c.node().attrs);
  e.delete(c.pos, u.pos);
  const _ = g ? [
    { type: a, attrs: y },
    { type: g, attrs: b }
  ] : [{ type: a, attrs: y }];
  if (!so(e.doc, c.pos, 2))
    return !1;
  if (r) {
    const { selection: k, storedMarks: A } = t, { splittableMarks: D } = i.extensionManager, H = A || k.$to.parentOffset && k.$from.marks();
    if (e.split(c.pos, 2, _).scrollIntoView(), !H || !r)
      return !0;
    const C = H.filter((q) => D.includes(q.type.name));
    e.ensureMarks(C);
  }
  return !0;
}, Yc = (n, e) => {
  const t = of((a) => a.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && ei(n.doc, t.pos) && n.join(t.pos), !0;
}, Zc = (n, e) => {
  const t = of((a) => a.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && ei(n.doc, r) && n.join(r), !0;
}, XN = (n, e, t, r = {}) => ({ editor: i, tr: o, state: a, dispatch: c, chain: u, commands: d, can: p }) => {
  const { extensions: h, splittableMarks: g } = i.extensionManager, y = _t(n, a.schema), b = _t(e, a.schema), { selection: _, storedMarks: k } = a, { $from: A, $to: D } = _, H = A.blockRange(D), C = k || _.$to.parentOffset && _.$from.marks();
  if (!H)
    return !1;
  const q = of((B) => lm(B.type.name, h))(_);
  if (H.depth >= 1 && q && H.depth - q.depth <= 1) {
    if (q.node.type === y)
      return d.liftListItem(b);
    if (lm(q.node.type.name, h) && y.validContent(q.node.content) && c)
      return u().command(() => (o.setNodeMarkup(q.pos, y), !0)).command(() => Yc(o, y)).command(() => Zc(o, y)).run();
  }
  return !t || !C || !c ? u().command(() => p().wrapInList(y, r) ? !0 : d.clearNodes()).wrapInList(y, r).command(() => Yc(o, y)).command(() => Zc(o, y)).run() : u().command(() => {
    const B = p().wrapInList(y, r), te = C.filter((Se) => g.includes(Se.type.name));
    return o.ensureMarks(te), B ? !0 : d.clearNodes();
  }).wrapInList(y, r).command(() => Yc(o, y)).command(() => Zc(o, y)).run();
}, YN = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, a = ni(n, r.schema);
  return Ou(r, a, e) ? i.unsetMark(a, { extendEmptyMarkRange: o }) : i.setMark(a, e);
}, ZN = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const o = _t(n, r.schema), a = _t(e, r.schema);
  return bs(r, o, t) ? i.setNode(a) : i.setNode(o, t);
}, QN = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = _t(n, t.schema);
  return bs(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, eD = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(n))) {
      if (e) {
        const a = n.tr, c = o.transform;
        for (let u = c.steps.length - 1; u >= 0; u -= 1)
          a.step(c.steps[u].invert(c.docs[u]));
        if (o.text) {
          const u = a.doc.resolve(o.from).marks();
          a.replaceWith(o.from, o.to, n.schema.text(o.text, u));
        } else
          a.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, tD = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, nD = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: a = !1 } = e, { selection: c } = t, u = ni(n, r.schema), { $from: d, empty: p, ranges: h } = c;
  if (!i)
    return !0;
  if (p && a) {
    let { from: g, to: y } = c;
    const b = (o = d.marks().find((k) => k.type === u)) === null || o === void 0 ? void 0 : o.attrs, _ = ef(d, u, b);
    _ && (g = _.from, y = _.to), t.removeMark(g, y, u);
  } else
    h.forEach((g) => {
      t.removeMark(g.$from.pos, g.$to.pos, u);
    });
  return t.removeStoredMark(u), !0;
}, rD = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, a = null;
  const c = fl(typeof n == "string" ? n : n.name, r.schema);
  return c ? (c === "node" && (o = _t(n, r.schema)), c === "mark" && (a = ni(n, r.schema)), i && t.selection.ranges.forEach((u) => {
    const d = u.$from.pos, p = u.$to.pos;
    r.doc.nodesBetween(d, p, (h, g) => {
      o && o === h.type && t.setNodeMarkup(g, void 0, {
        ...h.attrs,
        ...e
      }), a && h.marks.length && h.marks.forEach((y) => {
        if (a === y.type) {
          const b = Math.max(g, d), _ = Math.min(g + h.nodeSize, p);
          t.addMark(b, _, a.create({
            ...y.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, iD = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = _t(n, t.schema);
  return SM(i, e)(t, r);
}, oD = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = _t(n, t.schema);
  return _M(i, e)(t, r);
};
var sD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: UM,
  clearContent: jM,
  clearNodes: KM,
  command: qM,
  createParagraphNear: JM,
  cut: GM,
  deleteCurrentNode: XM,
  deleteNode: YM,
  deleteRange: ZM,
  deleteSelection: QM,
  enter: eN,
  exitCode: tN,
  extendMarkRange: rN,
  first: iN,
  focus: oN,
  forEach: sN,
  insertContent: aN,
  insertContentAt: uN,
  joinUp: fN,
  joinDown: dN,
  joinBackward: pN,
  joinForward: hN,
  joinItemBackward: mN,
  joinItemForward: gN,
  keyboardShortcut: vN,
  lift: bN,
  liftEmptyBlock: wN,
  liftListItem: xN,
  newlineInCode: SN,
  resetAttributes: _N,
  scrollIntoView: kN,
  selectAll: CN,
  selectNodeBackward: EN,
  selectNodeForward: ON,
  selectParentNode: TN,
  selectTextblockEnd: AN,
  selectTextblockStart: MN,
  setContent: NN,
  setMark: HN,
  setMeta: WN,
  setNode: UN,
  setNodeSelection: jN,
  setTextSelection: KN,
  sinkListItem: qN,
  splitBlock: JN,
  splitListItem: GN,
  toggleList: XN,
  toggleMark: YN,
  toggleNode: ZN,
  toggleWrap: QN,
  undoInputRule: eD,
  unsetAllMarks: tD,
  unsetMark: nD,
  updateAttributes: rD,
  wrapIn: iD,
  wrapInList: oD
});
const aD = Yt.create({
  name: "commands",
  addCommands() {
    return {
      ...sD
    };
  }
}), lD = Yt.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ln({
        key: new lr("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), cD = Yt.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new ln({
        key: new lr("focusEvents"),
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
}), uD = Yt.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: a }) => [
      () => a.undoInputRule(),
      () => a.command(({ tr: c }) => {
        const { selection: u, doc: d } = c, { empty: p, $anchor: h } = u, { pos: g, parent: y } = h, b = h.parent.isTextblock ? c.doc.resolve(g - 1) : h, _ = b.parent.type.spec.isolating, k = h.pos - h.parentOffset, A = _ && b.parent.childCount === 1 ? k === h.pos : ye.atStart(d).from === g;
        return !p || !A || !y.type.isTextblock || y.textContent.length ? !1 : a.clearNodes();
      }),
      () => a.deleteSelection(),
      () => a.joinBackward(),
      () => a.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: a }) => [
      () => a.deleteSelection(),
      () => a.deleteCurrentNode(),
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
    }, o = {
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
    return nf() || rf() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      new ln({
        key: new lr("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((b) => b.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: o, to: a } = e.selection, c = ye.atStart(e.doc).from, u = ye.atEnd(e.doc).to;
          if (i || !(o === c && a === u) || !(t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0))
            return;
          const h = t.tr, g = sl({
            state: t,
            transaction: h
          }), { commands: y } = new al({
            editor: this.editor,
            state: g
          });
          if (y.clearNodes(), !!h.steps.length)
            return h;
        }
      })
    ];
  }
}), fD = Yt.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new ln({
        key: new lr("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var dD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: WM,
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
function hD(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
class mD extends AM {
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
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  get state() {
    return this.view.state;
  }
  registerPlugin(e, t) {
    const r = by(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
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
    this.extensionManager = new ro(t, this);
  }
  createCommandManager() {
    this.commandManager = new al({
      editor: this
    });
  }
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  createView() {
    const e = _y(this.options.content, this.schema, this.options.parseOptions), t = Sy(e, this.options.autofocus);
    this.view = new JA(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: no.create({
        doc: e,
        selection: t || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
  }
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
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
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
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
        ...xy(this.schema),
        ...r
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
function yo(n) {
  return new cl({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = ge(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, a = r[r.length - 1], c = r[0];
      if (a) {
        const u = c.search(/\S/), d = t.from + c.indexOf(a), p = d + a.length;
        if (ky(t.from, t.to, e.doc).filter((y) => y.mark.type.excluded.find((_) => _ === n.type && _ !== y.mark.type)).filter((y) => y.to > d).length)
          return null;
        p < t.to && o.delete(p, t.to), d > t.from && o.delete(t.from + u, d);
        const g = t.from + u + a.length;
        o.addMark(t.from + u, g, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function gD(n) {
  return new cl({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = ge(n.getAttributes, void 0, r) || {}, { tr: o } = e, a = t.from;
      let c = t.to;
      const u = n.type.create(i);
      if (r[1]) {
        const d = r[0].lastIndexOf(r[1]);
        let p = a + d;
        p > c ? p = c : c = p + r[1].length;
        const h = r[0][r[0].length - 1];
        o.insertText(h, a + r[0].length - 1), o.replaceWith(p, c, u);
      } else
        r[0] && o.insert(a - 1, n.type.create(i)).delete(o.mapping.map(a), o.mapping.map(c));
      o.scrollIntoView();
    }
  });
}
function Tu(n) {
  return new cl({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), o = ge(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, o);
    }
  });
}
function ws(n) {
  return new cl({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const o = ge(n.getAttributes, void 0, r) || {}, a = e.tr.delete(t.from, t.to), u = a.doc.resolve(t.from).blockRange(), d = u && zu(u, n.type, o);
      if (!d)
        return null;
      if (a.wrap(u, d), n.keepMarks && n.editor) {
        const { selection: h, storedMarks: g } = e, { splittableMarks: y } = n.editor.extensionManager, b = g || h.$to.parentOffset && h.$from.marks();
        if (b) {
          const _ = b.filter((k) => y.includes(k.type.name));
          a.ensureMarks(_);
        }
      }
      if (n.keepAttributes) {
        const h = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(h, o).run();
      }
      const p = a.doc.resolve(t.from - 1).nodeBefore;
      p && p.type === n.type && ei(a.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, p)) && a.join(t.from - 1);
    }
  });
}
class or {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ge(Q(this, "addOptions", {
      name: this.name
    }))), this.storage = ge(Q(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new or(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ul(this.options, e), t.storage = ge(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new or(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ge(Q(t, "addOptions", {
      name: t.name
    })), t.storage = ge(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const a = i.marks();
      if (!!!a.find((d) => (d == null ? void 0 : d.type.name) === t.name))
        return !1;
      const u = a.find((d) => (d == null ? void 0 : d.type.name) === t.name);
      return u && r.removeStoredMark(u), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class Bt {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ge(Q(this, "addOptions", {
      name: this.name
    }))), this.storage = ge(Q(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Bt(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ul(this.options, e), t.storage = ge(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Bt(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ge(Q(t, "addOptions", {
      name: t.name
    })), t.storage = ge(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function vo(n) {
  return new BM({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const o = ge(n.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: a } = e, c = r[r.length - 1], u = r[0];
      let d = t.to;
      if (c) {
        const p = u.search(/\S/), h = t.from + u.indexOf(c), g = h + c.length;
        if (ky(t.from, t.to, e.doc).filter((b) => b.mark.type.excluded.find((k) => k === n.type && k !== b.mark.type)).filter((b) => b.to > h).length)
          return null;
        g < t.to && a.delete(g, t.to), h > t.from && a.delete(t.from + p, h), d = t.from + p + c.length, a.addMark(t.from + p, d, n.type.create(o || {})), a.removeStoredMark(n.type);
      }
    }
  });
}
var sn = "top", Rn = "bottom", In = "right", an = "left", sf = "auto", Os = [sn, Rn, In, an], bo = "start", xs = "end", yD = "clippingParents", Ey = "viewport", Zo = "popper", vD = "reference", um = /* @__PURE__ */ Os.reduce(function(n, e) {
  return n.concat([e + "-" + bo, e + "-" + xs]);
}, []), Oy = /* @__PURE__ */ [].concat(Os, [sf]).reduce(function(n, e) {
  return n.concat([e, e + "-" + bo, e + "-" + xs]);
}, []), bD = "beforeRead", wD = "read", xD = "afterRead", SD = "beforeMain", _D = "main", kD = "afterMain", CD = "beforeWrite", ED = "write", OD = "afterWrite", TD = [bD, wD, xD, SD, _D, kD, CD, ED, OD];
function sr(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function bn(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Mi(n) {
  var e = bn(n).Element;
  return n instanceof e || n instanceof Element;
}
function Dn(n) {
  var e = bn(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function af(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = bn(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function AD(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
    !Dn(o) || !sr(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function MD(n) {
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
      var i = e.elements[r], o = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), c = a.reduce(function(u, d) {
        return u[d] = "", u;
      }, {});
      !Dn(i) || !sr(i) || (Object.assign(i.style, c), Object.keys(o).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const Ty = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: AD,
  effect: MD,
  requires: ["computeStyles"]
};
function nr(n) {
  return n.split("-")[0];
}
var Ci = Math.max, Ka = Math.min, wo = Math.round;
function Au() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Ay() {
  return !/^((?!chrome|android).)*safari/i.test(Au());
}
function xo(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, o = 1;
  e && Dn(n) && (i = n.offsetWidth > 0 && wo(r.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && wo(r.height) / n.offsetHeight || 1);
  var a = Mi(n) ? bn(n) : window, c = a.visualViewport, u = !Ay() && t, d = (r.left + (u && c ? c.offsetLeft : 0)) / i, p = (r.top + (u && c ? c.offsetTop : 0)) / o, h = r.width / i, g = r.height / o;
  return {
    width: h,
    height: g,
    top: p,
    right: d + h,
    bottom: p + g,
    left: d,
    x: d,
    y: p
  };
}
function lf(n) {
  var e = xo(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function My(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && af(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Tr(n) {
  return bn(n).getComputedStyle(n);
}
function ND(n) {
  return ["table", "td", "th"].indexOf(sr(n)) >= 0;
}
function ri(n) {
  return ((Mi(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function pl(n) {
  return sr(n) === "html" ? n : n.assignedSlot || n.parentNode || (af(n) ? n.host : null) || ri(n);
}
function fm(n) {
  return !Dn(n) || Tr(n).position === "fixed" ? null : n.offsetParent;
}
function DD(n) {
  var e = /firefox/i.test(Au()), t = /Trident/i.test(Au());
  if (t && Dn(n)) {
    var r = Tr(n);
    if (r.position === "fixed")
      return null;
  }
  var i = pl(n);
  for (af(i) && (i = i.host); Dn(i) && ["html", "body"].indexOf(sr(i)) < 0; ) {
    var o = Tr(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ts(n) {
  for (var e = bn(n), t = fm(n); t && ND(t) && Tr(t).position === "static"; )
    t = fm(t);
  return t && (sr(t) === "html" || sr(t) === "body" && Tr(t).position === "static") ? e : t || DD(n) || e;
}
function cf(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function cs(n, e, t) {
  return Ci(n, Ka(e, t));
}
function RD(n, e, t) {
  var r = cs(n, e, t);
  return r > t ? t : r;
}
function Ny() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Dy(n) {
  return Object.assign({}, Ny(), n);
}
function Ry(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var ID = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, Dy(typeof e != "number" ? e : Ry(e, Os));
};
function PD(n) {
  var e, t = n.state, r = n.name, i = n.options, o = t.elements.arrow, a = t.modifiersData.popperOffsets, c = nr(t.placement), u = cf(c), d = [an, In].indexOf(c) >= 0, p = d ? "height" : "width";
  if (!(!o || !a)) {
    var h = ID(i.padding, t), g = lf(o), y = u === "y" ? sn : an, b = u === "y" ? Rn : In, _ = t.rects.reference[p] + t.rects.reference[u] - a[u] - t.rects.popper[p], k = a[u] - t.rects.reference[u], A = Ts(o), D = A ? u === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, H = _ / 2 - k / 2, C = h[y], q = D - g[p] - h[b], B = D / 2 - g[p] / 2 + H, te = cs(C, B, q), Se = u;
    t.modifiersData[r] = (e = {}, e[Se] = te, e.centerOffset = te - B, e);
  }
}
function LD(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || !My(e.elements.popper, i) || (e.elements.arrow = i));
}
const BD = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: PD,
  effect: LD,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function So(n) {
  return n.split("-")[1];
}
var $D = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function FD(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: wo(t * i) / i || 0,
    y: wo(r * i) / i || 0
  };
}
function dm(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, o = n.variation, a = n.offsets, c = n.position, u = n.gpuAcceleration, d = n.adaptive, p = n.roundOffsets, h = n.isFixed, g = a.x, y = g === void 0 ? 0 : g, b = a.y, _ = b === void 0 ? 0 : b, k = typeof p == "function" ? p({
    x: y,
    y: _
  }) : {
    x: y,
    y: _
  };
  y = k.x, _ = k.y;
  var A = a.hasOwnProperty("x"), D = a.hasOwnProperty("y"), H = an, C = sn, q = window;
  if (d) {
    var B = Ts(t), te = "clientHeight", Se = "clientWidth";
    if (B === bn(t) && (B = ri(t), Tr(B).position !== "static" && c === "absolute" && (te = "scrollHeight", Se = "scrollWidth")), B = B, i === sn || (i === an || i === In) && o === xs) {
      C = Rn;
      var Z = h && B === q && q.visualViewport ? q.visualViewport.height : B[te];
      _ -= Z - r.height, _ *= u ? 1 : -1;
    }
    if (i === an || (i === sn || i === Rn) && o === xs) {
      H = In;
      var _e = h && B === q && q.visualViewport ? q.visualViewport.width : B[Se];
      y -= _e - r.width, y *= u ? 1 : -1;
    }
  }
  var He = Object.assign({
    position: c
  }, d && $D), We = p === !0 ? FD({
    x: y,
    y: _
  }, bn(t)) : {
    x: y,
    y: _
  };
  if (y = We.x, _ = We.y, u) {
    var Ie;
    return Object.assign({}, He, (Ie = {}, Ie[C] = D ? "0" : "", Ie[H] = A ? "0" : "", Ie.transform = (q.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", Ie));
  }
  return Object.assign({}, He, (e = {}, e[C] = D ? _ + "px" : "", e[H] = A ? y + "px" : "", e.transform = "", e));
}
function VD(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, o = t.adaptive, a = o === void 0 ? !0 : o, c = t.roundOffsets, u = c === void 0 ? !0 : c, d = {
    placement: nr(e.placement),
    variation: So(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, dm(Object.assign({}, d, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: u
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, dm(Object.assign({}, d, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const zD = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: VD,
  data: {}
};
var _a = {
  passive: !0
};
function HD(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, c = a === void 0 ? !0 : a, u = bn(e.elements.popper), d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && d.forEach(function(p) {
    p.addEventListener("scroll", t.update, _a);
  }), c && u.addEventListener("resize", t.update, _a), function() {
    o && d.forEach(function(p) {
      p.removeEventListener("scroll", t.update, _a);
    }), c && u.removeEventListener("resize", t.update, _a);
  };
}
const WD = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: HD,
  data: {}
};
var UD = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ta(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return UD[e];
  });
}
var jD = {
  start: "end",
  end: "start"
};
function pm(n) {
  return n.replace(/start|end/g, function(e) {
    return jD[e];
  });
}
function uf(n) {
  var e = bn(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function ff(n) {
  return xo(ri(n)).left + uf(n).scrollLeft;
}
function KD(n, e) {
  var t = bn(n), r = ri(n), i = t.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, u = 0;
  if (i) {
    o = i.width, a = i.height;
    var d = Ay();
    (d || !d && e === "fixed") && (c = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + ff(n),
    y: u
  };
}
function qD(n) {
  var e, t = ri(n), r = uf(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, o = Ci(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ci(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + ff(n), u = -r.scrollTop;
  return Tr(i || t).direction === "rtl" && (c += Ci(t.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: u
  };
}
function df(n) {
  var e = Tr(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function Iy(n) {
  return ["html", "body", "#document"].indexOf(sr(n)) >= 0 ? n.ownerDocument.body : Dn(n) && df(n) ? n : Iy(pl(n));
}
function us(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = Iy(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), o = bn(r), a = i ? [o].concat(o.visualViewport || [], df(r) ? r : []) : r, c = e.concat(a);
  return i ? c : c.concat(us(pl(a)));
}
function Mu(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function JD(n, e) {
  var t = xo(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function hm(n, e, t) {
  return e === Ey ? Mu(KD(n, t)) : Mi(e) ? JD(e, t) : Mu(qD(ri(n)));
}
function GD(n) {
  var e = us(pl(n)), t = ["absolute", "fixed"].indexOf(Tr(n).position) >= 0, r = t && Dn(n) ? Ts(n) : n;
  return Mi(r) ? e.filter(function(i) {
    return Mi(i) && My(i, r) && sr(i) !== "body";
  }) : [];
}
function XD(n, e, t, r) {
  var i = e === "clippingParents" ? GD(n) : [].concat(e), o = [].concat(i, [t]), a = o[0], c = o.reduce(function(u, d) {
    var p = hm(n, d, r);
    return u.top = Ci(p.top, u.top), u.right = Ka(p.right, u.right), u.bottom = Ka(p.bottom, u.bottom), u.left = Ci(p.left, u.left), u;
  }, hm(n, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Py(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? nr(r) : null, o = r ? So(r) : null, a = e.x + e.width / 2 - t.width / 2, c = e.y + e.height / 2 - t.height / 2, u;
  switch (i) {
    case sn:
      u = {
        x: a,
        y: e.y - t.height
      };
      break;
    case Rn:
      u = {
        x: a,
        y: e.y + e.height
      };
      break;
    case In:
      u = {
        x: e.x + e.width,
        y: c
      };
      break;
    case an:
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
  var d = i ? cf(i) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (o) {
      case bo:
        u[d] = u[d] - (e[p] / 2 - t[p] / 2);
        break;
      case xs:
        u[d] = u[d] + (e[p] / 2 - t[p] / 2);
        break;
    }
  }
  return u;
}
function Ss(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, o = t.strategy, a = o === void 0 ? n.strategy : o, c = t.boundary, u = c === void 0 ? yD : c, d = t.rootBoundary, p = d === void 0 ? Ey : d, h = t.elementContext, g = h === void 0 ? Zo : h, y = t.altBoundary, b = y === void 0 ? !1 : y, _ = t.padding, k = _ === void 0 ? 0 : _, A = Dy(typeof k != "number" ? k : Ry(k, Os)), D = g === Zo ? vD : Zo, H = n.rects.popper, C = n.elements[b ? D : g], q = XD(Mi(C) ? C : C.contextElement || ri(n.elements.popper), u, p, a), B = xo(n.elements.reference), te = Py({
    reference: B,
    element: H,
    strategy: "absolute",
    placement: i
  }), Se = Mu(Object.assign({}, H, te)), Z = g === Zo ? Se : B, _e = {
    top: q.top - Z.top + A.top,
    bottom: Z.bottom - q.bottom + A.bottom,
    left: q.left - Z.left + A.left,
    right: Z.right - q.right + A.right
  }, He = n.modifiersData.offset;
  if (g === Zo && He) {
    var We = He[i];
    Object.keys(_e).forEach(function(Ie) {
      var vt = [In, Rn].indexOf(Ie) >= 0 ? 1 : -1, ft = [sn, Rn].indexOf(Ie) >= 0 ? "y" : "x";
      _e[Ie] += We[ft] * vt;
    });
  }
  return _e;
}
function YD(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, o = t.rootBoundary, a = t.padding, c = t.flipVariations, u = t.allowedAutoPlacements, d = u === void 0 ? Oy : u, p = So(r), h = p ? c ? um : um.filter(function(b) {
    return So(b) === p;
  }) : Os, g = h.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  g.length === 0 && (g = h);
  var y = g.reduce(function(b, _) {
    return b[_] = Ss(n, {
      placement: _,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[nr(_)], b;
  }, {});
  return Object.keys(y).sort(function(b, _) {
    return y[b] - y[_];
  });
}
function ZD(n) {
  if (nr(n) === sf)
    return [];
  var e = Ta(n);
  return [pm(n), e, pm(e)];
}
function QD(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, o = i === void 0 ? !0 : i, a = t.altAxis, c = a === void 0 ? !0 : a, u = t.fallbackPlacements, d = t.padding, p = t.boundary, h = t.rootBoundary, g = t.altBoundary, y = t.flipVariations, b = y === void 0 ? !0 : y, _ = t.allowedAutoPlacements, k = e.options.placement, A = nr(k), D = A === k, H = u || (D || !b ? [Ta(k)] : ZD(k)), C = [k].concat(H).reduce(function(Nt, ot) {
      return Nt.concat(nr(ot) === sf ? YD(e, {
        placement: ot,
        boundary: p,
        rootBoundary: h,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: _
      }) : ot);
    }, []), q = e.rects.reference, B = e.rects.popper, te = /* @__PURE__ */ new Map(), Se = !0, Z = C[0], _e = 0; _e < C.length; _e++) {
      var He = C[_e], We = nr(He), Ie = So(He) === bo, vt = [sn, Rn].indexOf(We) >= 0, ft = vt ? "width" : "height", rt = Ss(e, {
        placement: He,
        boundary: p,
        rootBoundary: h,
        altBoundary: g,
        padding: d
      }), Ue = vt ? Ie ? In : an : Ie ? Rn : sn;
      q[ft] > B[ft] && (Ue = Ta(Ue));
      var Fe = Ta(Ue), Zt = [];
      if (o && Zt.push(rt[We] <= 0), c && Zt.push(rt[Ue] <= 0, rt[Fe] <= 0), Zt.every(function(Nt) {
        return Nt;
      })) {
        Z = He, Se = !1;
        break;
      }
      te.set(He, Zt);
    }
    if (Se)
      for (var dt = b ? 3 : 1, it = function(ot) {
        var st = C.find(function(R) {
          var U = te.get(R);
          if (U)
            return U.slice(0, ot).every(function(j) {
              return j;
            });
        });
        if (st)
          return Z = st, "break";
      }, Mt = dt; Mt > 0; Mt--) {
        var cn = it(Mt);
        if (cn === "break")
          break;
      }
    e.placement !== Z && (e.modifiersData[r]._skip = !0, e.placement = Z, e.reset = !0);
  }
}
const eR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: QD,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function mm(n, e, t) {
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
function gm(n) {
  return [sn, In, Rn, an].some(function(e) {
    return n[e] >= 0;
  });
}
function tR(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, a = Ss(e, {
    elementContext: "reference"
  }), c = Ss(e, {
    altBoundary: !0
  }), u = mm(a, r), d = mm(c, i, o), p = gm(u), h = gm(d);
  e.modifiersData[t] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: h
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": h
  });
}
const nR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: tR
};
function rR(n, e, t) {
  var r = nr(n), i = [an, sn].indexOf(r) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * i, [an, In].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function iR(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, o = i === void 0 ? [0, 0] : i, a = Oy.reduce(function(p, h) {
    return p[h] = rR(h, e.rects, o), p;
  }, {}), c = a[e.placement], u = c.x, d = c.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += d), e.modifiersData[r] = a;
}
const oR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: iR
};
function sR(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Py({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const aR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: sR,
  data: {}
};
function lR(n) {
  return n === "x" ? "y" : "x";
}
function cR(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, o = i === void 0 ? !0 : i, a = t.altAxis, c = a === void 0 ? !1 : a, u = t.boundary, d = t.rootBoundary, p = t.altBoundary, h = t.padding, g = t.tether, y = g === void 0 ? !0 : g, b = t.tetherOffset, _ = b === void 0 ? 0 : b, k = Ss(e, {
    boundary: u,
    rootBoundary: d,
    padding: h,
    altBoundary: p
  }), A = nr(e.placement), D = So(e.placement), H = !D, C = cf(A), q = lR(C), B = e.modifiersData.popperOffsets, te = e.rects.reference, Se = e.rects.popper, Z = typeof _ == "function" ? _(Object.assign({}, e.rects, {
    placement: e.placement
  })) : _, _e = typeof Z == "number" ? {
    mainAxis: Z,
    altAxis: Z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Z), He = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, We = {
    x: 0,
    y: 0
  };
  if (!!B) {
    if (o) {
      var Ie, vt = C === "y" ? sn : an, ft = C === "y" ? Rn : In, rt = C === "y" ? "height" : "width", Ue = B[C], Fe = Ue + k[vt], Zt = Ue - k[ft], dt = y ? -Se[rt] / 2 : 0, it = D === bo ? te[rt] : Se[rt], Mt = D === bo ? -Se[rt] : -te[rt], cn = e.elements.arrow, Nt = y && cn ? lf(cn) : {
        width: 0,
        height: 0
      }, ot = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ny(), st = ot[vt], R = ot[ft], U = cs(0, te[rt], Nt[rt]), j = H ? te[rt] / 2 - dt - U - st - _e.mainAxis : it - U - st - _e.mainAxis, G = H ? -te[rt] / 2 + dt + U + R + _e.mainAxis : Mt + U + R + _e.mainAxis, ue = e.elements.arrow && Ts(e.elements.arrow), Ve = ue ? C === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, le = (Ie = He == null ? void 0 : He[C]) != null ? Ie : 0, ne = Ue + j - le - Ve, Ae = Ue + G - le, Ft = cs(y ? Ka(Fe, ne) : Fe, Ue, y ? Ci(Zt, Ae) : Zt);
      B[C] = Ft, We[C] = Ft - Ue;
    }
    if (c) {
      var Pe, ii = C === "x" ? sn : an, Ni = C === "x" ? Rn : In, Vt = B[q], ct = q === "y" ? "height" : "width", Pn = Vt + k[ii], wn = Vt - k[Ni], oi = [sn, an].indexOf(A) !== -1, jn = (Pe = He == null ? void 0 : He[q]) != null ? Pe : 0, Di = oi ? Pn : Vt - te[ct] - Se[ct] - jn + _e.altAxis, Kn = oi ? Vt + te[ct] + Se[ct] - jn - _e.altAxis : wn, Ln = y && oi ? RD(Di, Vt, Kn) : cs(y ? Di : Pn, Vt, y ? Kn : wn);
      B[q] = Ln, We[q] = Ln - Vt;
    }
    e.modifiersData[r] = We;
  }
}
const uR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: cR,
  requiresIfExists: ["offset"]
};
function fR(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function dR(n) {
  return n === bn(n) || !Dn(n) ? uf(n) : fR(n);
}
function pR(n) {
  var e = n.getBoundingClientRect(), t = wo(e.width) / n.offsetWidth || 1, r = wo(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function hR(n, e, t) {
  t === void 0 && (t = !1);
  var r = Dn(e), i = Dn(e) && pR(e), o = ri(e), a = xo(n, i, t), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((sr(e) !== "body" || df(o)) && (c = dR(e)), Dn(e) ? (u = xo(e, !0), u.x += e.clientLeft, u.y += e.clientTop) : o && (u.x = ff(o))), {
    x: a.left + c.scrollLeft - u.x,
    y: a.top + c.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function mR(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    t.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(c) {
      if (!t.has(c)) {
        var u = e.get(c);
        u && i(u);
      }
    }), r.push(o);
  }
  return n.forEach(function(o) {
    t.has(o.name) || i(o);
  }), r;
}
function gR(n) {
  var e = mR(n);
  return TD.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function yR(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function vR(n) {
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
var ym = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vm() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function bR(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, o = i === void 0 ? ym : i;
  return function(c, u, d) {
    d === void 0 && (d = o);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ym, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: u
      },
      attributes: {},
      styles: {}
    }, h = [], g = !1, y = {
      state: p,
      setOptions: function(A) {
        var D = typeof A == "function" ? A(p.options) : A;
        _(), p.options = Object.assign({}, o, p.options, D), p.scrollParents = {
          reference: Mi(c) ? us(c) : c.contextElement ? us(c.contextElement) : [],
          popper: us(u)
        };
        var H = gR(vR([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = H.filter(function(C) {
          return C.enabled;
        }), b(), y.update();
      },
      forceUpdate: function() {
        if (!g) {
          var A = p.elements, D = A.reference, H = A.popper;
          if (!!vm(D, H)) {
            p.rects = {
              reference: hR(D, Ts(H), p.options.strategy === "fixed"),
              popper: lf(H)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(_e) {
              return p.modifiersData[_e.name] = Object.assign({}, _e.data);
            });
            for (var C = 0; C < p.orderedModifiers.length; C++) {
              if (p.reset === !0) {
                p.reset = !1, C = -1;
                continue;
              }
              var q = p.orderedModifiers[C], B = q.fn, te = q.options, Se = te === void 0 ? {} : te, Z = q.name;
              typeof B == "function" && (p = B({
                state: p,
                options: Se,
                name: Z,
                instance: y
              }) || p);
            }
          }
        }
      },
      update: yR(function() {
        return new Promise(function(k) {
          y.forceUpdate(), k(p);
        });
      }),
      destroy: function() {
        _(), g = !0;
      }
    };
    if (!vm(c, u))
      return y;
    y.setOptions(d).then(function(k) {
      !g && d.onFirstUpdate && d.onFirstUpdate(k);
    });
    function b() {
      p.orderedModifiers.forEach(function(k) {
        var A = k.name, D = k.options, H = D === void 0 ? {} : D, C = k.effect;
        if (typeof C == "function") {
          var q = C({
            state: p,
            name: A,
            instance: y,
            options: H
          }), B = function() {
          };
          h.push(q || B);
        }
      });
    }
    function _() {
      h.forEach(function(k) {
        return k();
      }), h = [];
    }
    return y;
  };
}
var wR = [WD, aR, zD, Ty, oR, eR, uR, BD, nR], xR = /* @__PURE__ */ bR({
  defaultModifiers: wR
}), SR = "tippy-box", Ly = "tippy-content", _R = "tippy-backdrop", By = "tippy-arrow", $y = "tippy-svg-arrow", mi = {
  passive: !0,
  capture: !0
}, Fy = function() {
  return document.body;
};
function kR(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function Qc(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r == null ? Array.isArray(t) ? t[e] : t : r;
  }
  return n;
}
function pf(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function Vy(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function bm(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function CR(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function ER(n) {
  return n.split(/\s+/).filter(Boolean);
}
function to(n) {
  return [].concat(n);
}
function wm(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function OR(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function TR(n) {
  return n.split("-")[0];
}
function qa(n) {
  return [].slice.call(n);
}
function xm(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function fs() {
  return document.createElement("div");
}
function _s(n) {
  return ["Element", "Fragment"].some(function(e) {
    return pf(n, e);
  });
}
function AR(n) {
  return pf(n, "NodeList");
}
function MR(n) {
  return pf(n, "MouseEvent");
}
function NR(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function DR(n) {
  return _s(n) ? [n] : AR(n) ? qa(n) : Array.isArray(n) ? n : qa(document.querySelectorAll(n));
}
function eu(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function Sm(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function RR(n) {
  var e, t = to(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function IR(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var o = i.popperRect, a = i.popperState, c = i.props, u = c.interactiveBorder, d = TR(a.placement), p = a.modifiersData.offset;
    if (!p)
      return !0;
    var h = d === "bottom" ? p.top.y : 0, g = d === "top" ? p.bottom.y : 0, y = d === "right" ? p.left.x : 0, b = d === "left" ? p.right.x : 0, _ = o.top - r + h > u, k = r - o.bottom - g > u, A = o.left - t + y > u, D = t - o.right - b > u;
    return _ || k || A || D;
  });
}
function tu(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function _m(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var Yn = {
  isTouch: !1
}, km = 0;
function PR() {
  Yn.isTouch || (Yn.isTouch = !0, window.performance && document.addEventListener("mousemove", zy));
}
function zy() {
  var n = performance.now();
  n - km < 20 && (Yn.isTouch = !1, document.removeEventListener("mousemove", zy)), km = n;
}
function LR() {
  var n = document.activeElement;
  if (NR(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function BR() {
  document.addEventListener("touchstart", PR, mi), window.addEventListener("blur", LR);
}
var $R = typeof window < "u" && typeof document < "u", FR = $R ? !!window.msCrypto : !1;
function Zi(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function Cm(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function VR(n) {
  return Cm(`
  %ctippy.js

  %c` + Cm(n) + `

  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.
  `);
}
function Hy(n) {
  return [
    VR(n),
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    "line-height: 1.5",
    "color: #a6a095;"
  ];
}
var ks;
process.env.NODE_ENV !== "production" && zR();
function zR() {
  ks = /* @__PURE__ */ new Set();
}
function _r(n, e) {
  if (n && !ks.has(e)) {
    var t;
    ks.add(e), (t = console).warn.apply(t, Hy(e));
  }
}
function Nu(n, e) {
  if (n && !ks.has(e)) {
    var t;
    ks.add(e), (t = console).error.apply(t, Hy(e));
  }
}
function HR(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  Nu(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Nu(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var Wy = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, WR = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, yn = Object.assign({
  appendTo: Fy,
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
}, Wy, WR), UR = Object.keys(yn), jR = function(e) {
  process.env.NODE_ENV !== "production" && jy(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    yn[r] = e[r];
  });
};
function Uy(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var o = i.name, a = i.defaultValue;
    if (o) {
      var c;
      r[o] = n[o] !== void 0 ? n[o] : (c = yn[o]) != null ? c : a;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function KR(n, e) {
  var t = e ? Object.keys(Uy(Object.assign({}, yn, {
    plugins: e
  }))) : UR, r = t.reduce(function(i, o) {
    var a = (n.getAttribute("data-tippy-" + o) || "").trim();
    if (!a)
      return i;
    if (o === "content")
      i[o] = a;
    else
      try {
        i[o] = JSON.parse(a);
      } catch {
        i[o] = a;
      }
    return i;
  }, {});
  return r;
}
function Em(n, e) {
  var t = Object.assign({}, e, {
    content: Vy(e.content, [n])
  }, e.ignoreAttributes ? {} : KR(n, e.plugins));
  return t.aria = Object.assign({}, yn.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function jy(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = CR(yn, Object.keys(Wy)), o = !kR(i, r);
    o && (o = e.filter(function(a) {
      return a.name === r;
    }).length === 0), _r(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var qR = function() {
  return "innerHTML";
};
function Du(n, e) {
  n[qR()] = e;
}
function Om(n) {
  var e = fs();
  return n === !0 ? e.className = By : (e.className = $y, _s(n) ? e.appendChild(n) : Du(e, n)), e;
}
function Tm(n, e) {
  _s(e.content) ? (Du(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Du(n, e.content) : n.textContent = e.content);
}
function Ru(n) {
  var e = n.firstElementChild, t = qa(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(Ly);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(By) || r.classList.contains($y);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(_R);
    })
  };
}
function Ky(n) {
  var e = fs(), t = fs();
  t.className = SR, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = fs();
  r.className = Ly, r.setAttribute("data-state", "hidden"), Tm(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(o, a) {
    var c = Ru(e), u = c.box, d = c.content, p = c.arrow;
    a.theme ? u.setAttribute("data-theme", a.theme) : u.removeAttribute("data-theme"), typeof a.animation == "string" ? u.setAttribute("data-animation", a.animation) : u.removeAttribute("data-animation"), a.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof a.maxWidth == "number" ? a.maxWidth + "px" : a.maxWidth, a.role ? u.setAttribute("role", a.role) : u.removeAttribute("role"), (o.content !== a.content || o.allowHTML !== a.allowHTML) && Tm(d, n.props), a.arrow ? p ? o.arrow !== a.arrow && (u.removeChild(p), u.appendChild(Om(a.arrow))) : u.appendChild(Om(a.arrow)) : p && u.removeChild(p);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
Ky.$$tippy = !0;
var JR = 1, ka = [], nu = [];
function GR(n, e) {
  var t = Em(n, Object.assign({}, yn, Uy(xm(e)))), r, i, o, a = !1, c = !1, u = !1, d = !1, p, h, g, y = [], b = bm(ne, t.interactiveDebounce), _, k = JR++, A = null, D = OR(t.plugins), H = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, C = {
    id: k,
    reference: n,
    popper: fs(),
    popperInstance: A,
    props: t,
    state: H,
    plugins: D,
    clearDelayTimeouts: Di,
    setProps: Kn,
    setContent: Ln,
    show: Co,
    hide: Eo,
    hideWithInteractivity: Oo,
    enable: oi,
    disable: jn,
    unmount: To,
    destroy: Ao
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && Nu(!0, "render() function has not been supplied."), C;
  var q = t.render(C), B = q.popper, te = q.onUpdate;
  B.setAttribute("data-tippy-root", ""), B.id = "tippy-" + C.id, C.popper = B, n._tippy = C, B._tippy = C;
  var Se = D.map(function(I) {
    return I.fn(C);
  }), Z = n.hasAttribute("aria-expanded");
  return ue(), dt(), Ue(), Fe("onCreate", [C]), t.showOnCreate && Pn(), B.addEventListener("mouseenter", function() {
    C.props.interactive && C.state.isVisible && C.clearDelayTimeouts();
  }), B.addEventListener("mouseleave", function() {
    C.props.interactive && C.props.trigger.indexOf("mouseenter") >= 0 && vt().addEventListener("mousemove", b);
  }), C;
  function _e() {
    var I = C.props.touch;
    return Array.isArray(I) ? I : [I, 0];
  }
  function He() {
    return _e()[0] === "hold";
  }
  function We() {
    var I;
    return !!((I = C.props.render) != null && I.$$tippy);
  }
  function Ie() {
    return _ || n;
  }
  function vt() {
    var I = Ie().parentNode;
    return I ? RR(I) : document;
  }
  function ft() {
    return Ru(B);
  }
  function rt(I) {
    return C.state.isMounted && !C.state.isVisible || Yn.isTouch || p && p.type === "focus" ? 0 : Qc(C.props.delay, I ? 0 : 1, yn.delay);
  }
  function Ue(I) {
    I === void 0 && (I = !1), B.style.pointerEvents = C.props.interactive && !I ? "" : "none", B.style.zIndex = "" + C.props.zIndex;
  }
  function Fe(I, Y, re) {
    if (re === void 0 && (re = !0), Se.forEach(function(Ce) {
      Ce[I] && Ce[I].apply(Ce, Y);
    }), re) {
      var Me;
      (Me = C.props)[I].apply(Me, Y);
    }
  }
  function Zt() {
    var I = C.props.aria;
    if (!!I.content) {
      var Y = "aria-" + I.content, re = B.id, Me = to(C.props.triggerTarget || n);
      Me.forEach(function(Ce) {
        var kt = Ce.getAttribute(Y);
        if (C.state.isVisible)
          Ce.setAttribute(Y, kt ? kt + " " + re : re);
        else {
          var Qt = kt && kt.replace(re, "").trim();
          Qt ? Ce.setAttribute(Y, Qt) : Ce.removeAttribute(Y);
        }
      });
    }
  }
  function dt() {
    if (!(Z || !C.props.aria.expanded)) {
      var I = to(C.props.triggerTarget || n);
      I.forEach(function(Y) {
        C.props.interactive ? Y.setAttribute("aria-expanded", C.state.isVisible && Y === Ie() ? "true" : "false") : Y.removeAttribute("aria-expanded");
      });
    }
  }
  function it() {
    vt().removeEventListener("mousemove", b), ka = ka.filter(function(I) {
      return I !== b;
    });
  }
  function Mt(I) {
    if (!(Yn.isTouch && (u || I.type === "mousedown"))) {
      var Y = I.composedPath && I.composedPath()[0] || I.target;
      if (!(C.props.interactive && _m(B, Y))) {
        if (to(C.props.triggerTarget || n).some(function(re) {
          return _m(re, Y);
        })) {
          if (Yn.isTouch || C.state.isVisible && C.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Fe("onClickOutside", [C, I]);
        C.props.hideOnClick === !0 && (C.clearDelayTimeouts(), C.hide(), c = !0, setTimeout(function() {
          c = !1;
        }), C.state.isMounted || st());
      }
    }
  }
  function cn() {
    u = !0;
  }
  function Nt() {
    u = !1;
  }
  function ot() {
    var I = vt();
    I.addEventListener("mousedown", Mt, !0), I.addEventListener("touchend", Mt, mi), I.addEventListener("touchstart", Nt, mi), I.addEventListener("touchmove", cn, mi);
  }
  function st() {
    var I = vt();
    I.removeEventListener("mousedown", Mt, !0), I.removeEventListener("touchend", Mt, mi), I.removeEventListener("touchstart", Nt, mi), I.removeEventListener("touchmove", cn, mi);
  }
  function R(I, Y) {
    j(I, function() {
      !C.state.isVisible && B.parentNode && B.parentNode.contains(B) && Y();
    });
  }
  function U(I, Y) {
    j(I, Y);
  }
  function j(I, Y) {
    var re = ft().box;
    function Me(Ce) {
      Ce.target === re && (tu(re, "remove", Me), Y());
    }
    if (I === 0)
      return Y();
    tu(re, "remove", h), tu(re, "add", Me), h = Me;
  }
  function G(I, Y, re) {
    re === void 0 && (re = !1);
    var Me = to(C.props.triggerTarget || n);
    Me.forEach(function(Ce) {
      Ce.addEventListener(I, Y, re), y.push({
        node: Ce,
        eventType: I,
        handler: Y,
        options: re
      });
    });
  }
  function ue() {
    He() && (G("touchstart", le, {
      passive: !0
    }), G("touchend", Ae, {
      passive: !0
    })), ER(C.props.trigger).forEach(function(I) {
      if (I !== "manual")
        switch (G(I, le), I) {
          case "mouseenter":
            G("mouseleave", Ae);
            break;
          case "focus":
            G(FR ? "focusout" : "blur", Ft);
            break;
          case "focusin":
            G("focusout", Ft);
            break;
        }
    });
  }
  function Ve() {
    y.forEach(function(I) {
      var Y = I.node, re = I.eventType, Me = I.handler, Ce = I.options;
      Y.removeEventListener(re, Me, Ce);
    }), y = [];
  }
  function le(I) {
    var Y, re = !1;
    if (!(!C.state.isEnabled || Pe(I) || c)) {
      var Me = ((Y = p) == null ? void 0 : Y.type) === "focus";
      p = I, _ = I.currentTarget, dt(), !C.state.isVisible && MR(I) && ka.forEach(function(Ce) {
        return Ce(I);
      }), I.type === "click" && (C.props.trigger.indexOf("mouseenter") < 0 || a) && C.props.hideOnClick !== !1 && C.state.isVisible ? re = !0 : Pn(I), I.type === "click" && (a = !re), re && !Me && wn(I);
    }
  }
  function ne(I) {
    var Y = I.target, re = Ie().contains(Y) || B.contains(Y);
    if (!(I.type === "mousemove" && re)) {
      var Me = ct().concat(B).map(function(Ce) {
        var kt, Qt = Ce._tippy, cr = (kt = Qt.popperInstance) == null ? void 0 : kt.state;
        return cr ? {
          popperRect: Ce.getBoundingClientRect(),
          popperState: cr,
          props: t
        } : null;
      }).filter(Boolean);
      IR(Me, I) && (it(), wn(I));
    }
  }
  function Ae(I) {
    var Y = Pe(I) || C.props.trigger.indexOf("click") >= 0 && a;
    if (!Y) {
      if (C.props.interactive) {
        C.hideWithInteractivity(I);
        return;
      }
      wn(I);
    }
  }
  function Ft(I) {
    C.props.trigger.indexOf("focusin") < 0 && I.target !== Ie() || C.props.interactive && I.relatedTarget && B.contains(I.relatedTarget) || wn(I);
  }
  function Pe(I) {
    return Yn.isTouch ? He() !== I.type.indexOf("touch") >= 0 : !1;
  }
  function ii() {
    Ni();
    var I = C.props, Y = I.popperOptions, re = I.placement, Me = I.offset, Ce = I.getReferenceClientRect, kt = I.moveTransition, Qt = We() ? Ru(B).arrow : null, cr = Ce ? {
      getBoundingClientRect: Ce,
      contextElement: Ce.contextElement || Ie()
    } : n, Mo = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Ri) {
        var Ar = Ri.state;
        if (We()) {
          var As = ft(), Do = As.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Ii) {
            Ii === "placement" ? Do.setAttribute("data-placement", Ar.placement) : Ar.attributes.popper["data-popper-" + Ii] ? Do.setAttribute("data-" + Ii, "") : Do.removeAttribute("data-" + Ii);
          }), Ar.attributes.popper = {};
        }
      }
    }, ur = [{
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
        adaptive: !kt
      }
    }, Mo];
    We() && Qt && ur.push({
      name: "arrow",
      options: {
        element: Qt,
        padding: 3
      }
    }), ur.push.apply(ur, (Y == null ? void 0 : Y.modifiers) || []), C.popperInstance = xR(cr, B, Object.assign({}, Y, {
      placement: re,
      onFirstUpdate: g,
      modifiers: ur
    }));
  }
  function Ni() {
    C.popperInstance && (C.popperInstance.destroy(), C.popperInstance = null);
  }
  function Vt() {
    var I = C.props.appendTo, Y, re = Ie();
    C.props.interactive && I === Fy || I === "parent" ? Y = re.parentNode : Y = Vy(I, [re]), Y.contains(B) || Y.appendChild(B), C.state.isMounted = !0, ii(), process.env.NODE_ENV !== "production" && _r(C.props.interactive && I === yn.appendTo && re.nextElementSibling !== B, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function ct() {
    return qa(B.querySelectorAll("[data-tippy-root]"));
  }
  function Pn(I) {
    C.clearDelayTimeouts(), I && Fe("onTrigger", [C, I]), ot();
    var Y = rt(!0), re = _e(), Me = re[0], Ce = re[1];
    Yn.isTouch && Me === "hold" && Ce && (Y = Ce), Y ? r = setTimeout(function() {
      C.show();
    }, Y) : C.show();
  }
  function wn(I) {
    if (C.clearDelayTimeouts(), Fe("onUntrigger", [C, I]), !C.state.isVisible) {
      st();
      return;
    }
    if (!(C.props.trigger.indexOf("mouseenter") >= 0 && C.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(I.type) >= 0 && a)) {
      var Y = rt(!1);
      Y ? i = setTimeout(function() {
        C.state.isVisible && C.hide();
      }, Y) : o = requestAnimationFrame(function() {
        C.hide();
      });
    }
  }
  function oi() {
    C.state.isEnabled = !0;
  }
  function jn() {
    C.hide(), C.state.isEnabled = !1;
  }
  function Di() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function Kn(I) {
    if (process.env.NODE_ENV !== "production" && _r(C.state.isDestroyed, Zi("setProps")), !C.state.isDestroyed) {
      Fe("onBeforeUpdate", [C, I]), Ve();
      var Y = C.props, re = Em(n, Object.assign({}, Y, xm(I), {
        ignoreAttributes: !0
      }));
      C.props = re, ue(), Y.interactiveDebounce !== re.interactiveDebounce && (it(), b = bm(ne, re.interactiveDebounce)), Y.triggerTarget && !re.triggerTarget ? to(Y.triggerTarget).forEach(function(Me) {
        Me.removeAttribute("aria-expanded");
      }) : re.triggerTarget && n.removeAttribute("aria-expanded"), dt(), Ue(), te && te(Y, re), C.popperInstance && (ii(), ct().forEach(function(Me) {
        requestAnimationFrame(Me._tippy.popperInstance.forceUpdate);
      })), Fe("onAfterUpdate", [C, I]);
    }
  }
  function Ln(I) {
    C.setProps({
      content: I
    });
  }
  function Co() {
    process.env.NODE_ENV !== "production" && _r(C.state.isDestroyed, Zi("show"));
    var I = C.state.isVisible, Y = C.state.isDestroyed, re = !C.state.isEnabled, Me = Yn.isTouch && !C.props.touch, Ce = Qc(C.props.duration, 0, yn.duration);
    if (!(I || Y || re || Me) && !Ie().hasAttribute("disabled") && (Fe("onShow", [C], !1), C.props.onShow(C) !== !1)) {
      if (C.state.isVisible = !0, We() && (B.style.visibility = "visible"), Ue(), ot(), C.state.isMounted || (B.style.transition = "none"), We()) {
        var kt = ft(), Qt = kt.box, cr = kt.content;
        eu([Qt, cr], 0);
      }
      g = function() {
        var ur;
        if (!(!C.state.isVisible || d)) {
          if (d = !0, B.offsetHeight, B.style.transition = C.props.moveTransition, We() && C.props.animation) {
            var No = ft(), Ri = No.box, Ar = No.content;
            eu([Ri, Ar], Ce), Sm([Ri, Ar], "visible");
          }
          Zt(), dt(), wm(nu, C), (ur = C.popperInstance) == null || ur.forceUpdate(), Fe("onMount", [C]), C.props.animation && We() && U(Ce, function() {
            C.state.isShown = !0, Fe("onShown", [C]);
          });
        }
      }, Vt();
    }
  }
  function Eo() {
    process.env.NODE_ENV !== "production" && _r(C.state.isDestroyed, Zi("hide"));
    var I = !C.state.isVisible, Y = C.state.isDestroyed, re = !C.state.isEnabled, Me = Qc(C.props.duration, 1, yn.duration);
    if (!(I || Y || re) && (Fe("onHide", [C], !1), C.props.onHide(C) !== !1)) {
      if (C.state.isVisible = !1, C.state.isShown = !1, d = !1, a = !1, We() && (B.style.visibility = "hidden"), it(), st(), Ue(!0), We()) {
        var Ce = ft(), kt = Ce.box, Qt = Ce.content;
        C.props.animation && (eu([kt, Qt], Me), Sm([kt, Qt], "hidden"));
      }
      Zt(), dt(), C.props.animation ? We() && R(Me, C.unmount) : C.unmount();
    }
  }
  function Oo(I) {
    process.env.NODE_ENV !== "production" && _r(C.state.isDestroyed, Zi("hideWithInteractivity")), vt().addEventListener("mousemove", b), wm(ka, b), b(I);
  }
  function To() {
    process.env.NODE_ENV !== "production" && _r(C.state.isDestroyed, Zi("unmount")), C.state.isVisible && C.hide(), C.state.isMounted && (Ni(), ct().forEach(function(I) {
      I._tippy.unmount();
    }), B.parentNode && B.parentNode.removeChild(B), nu = nu.filter(function(I) {
      return I !== C;
    }), C.state.isMounted = !1, Fe("onHidden", [C]));
  }
  function Ao() {
    process.env.NODE_ENV !== "production" && _r(C.state.isDestroyed, Zi("destroy")), !C.state.isDestroyed && (C.clearDelayTimeouts(), C.unmount(), Ve(), delete n._tippy, C.state.isDestroyed = !0, Fe("onDestroy", [C]));
  }
}
function ko(n, e) {
  e === void 0 && (e = {});
  var t = yn.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (HR(n), jy(e, t)), BR();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = DR(n);
  if (process.env.NODE_ENV !== "production") {
    var o = _s(r.content), a = i.length > 1;
    _r(o && a, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var c = i.reduce(function(u, d) {
    var p = d && GR(d, r);
    return p && u.push(p), u;
  }, []);
  return _s(n) ? c[0] : c;
}
ko.defaultProps = yn;
ko.setDefaultProps = jR;
ko.currentInput = Yn;
Object.assign({}, Ty, {
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
ko.setDefaultProps({
  render: Ky
});
class XR {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: a }) {
    this.preventHide = !1, this.shouldShow = ({ view: c, state: u, from: d, to: p }) => {
      const { doc: h, selection: g } = u, { empty: y } = g, b = !h.textBetween(d, p).length && tf(u.selection), _ = this.element.contains(document.activeElement);
      return !(!(c.hasFocus() || _) || y || b || !this.editor.isEditable);
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
    }, this.handleDebouncedUpdate = (c, u) => {
      const d = !(u != null && u.selection.eq(c.state.selection)), p = !(u != null && u.doc.eq(c.state.doc));
      !d && !p || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(c, d, p, u);
      }, this.updateDelay));
    }, this.updateHandler = (c, u, d, p) => {
      var h, g, y;
      const { state: b, composing: _ } = c, { selection: k } = b;
      if (_ || !u && !d)
        return;
      this.createTooltip();
      const { ranges: D } = k, H = Math.min(...D.map((B) => B.$from.pos)), C = Math.max(...D.map((B) => B.$to.pos));
      if (!((h = this.shouldShow) === null || h === void 0 ? void 0 : h.call(this, {
        editor: this.editor,
        view: c,
        state: b,
        oldState: p,
        from: H,
        to: C
      }))) {
        this.hide();
        return;
      }
      (g = this.tippy) === null || g === void 0 || g.setProps({
        getReferenceClientRect: ((y = this.tippyOptions) === null || y === void 0 ? void 0 : y.getReferenceClientRect) || (() => {
          if (VN(b.selection)) {
            let B = c.nodeDOM(H);
            const te = B.dataset.nodeViewWrapper ? B : B.querySelector("[data-node-view-wrapper]");
            if (te && (B = te.firstChild), B)
              return B.getBoundingClientRect();
          }
          return Cy(c, H, C);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = o, a && (this.shouldShow = a), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = ko(e, {
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
    const { state: r } = e, i = r.selection.$from.pos !== r.selection.$to.pos;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const o = !(t != null && t.selection.eq(e.state.selection)), a = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, o, a, t);
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
const qy = (n) => new ln({
  key: typeof n.pluginKey == "string" ? new lr(n.pluginKey) : n.pluginKey,
  view: (e) => new XR({ view: e, ...n })
});
Yt.create({
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
      qy({
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
class YR {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: a, state: c }) => {
      const { selection: u } = c, { $anchor: d, empty: p } = u, h = d.depth === 1, g = d.parent.isTextblock && !d.parent.type.spec.code && !d.parent.textContent;
      return !(!a.hasFocus() || !p || !h || !g || !this.editor.isEditable);
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
    }, this.editor = e, this.element = t, this.view = r, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = ko(e, {
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
    var r, i, o;
    const { state: a } = e, { doc: c, selection: u } = a, { from: d, to: p } = u;
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
      getReferenceClientRect: ((o = this.tippyOptions) === null || o === void 0 ? void 0 : o.getReferenceClientRect) || (() => Cy(e, d, p))
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
const Jy = (n) => new ln({
  key: typeof n.pluginKey == "string" ? new lr(n.pluginKey) : n.pluginKey,
  view: (e) => new YR({ view: e, ...n })
});
Yt.create({
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
      Jy({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
ar({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
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
    const t = xe(null);
    return Bu(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: a, tippyOptions: c } = n;
      i.registerPlugin(qy({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: o,
        shouldShow: a,
        tippyOptions: c
      }));
    }), Ya(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Er("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function Am(n) {
  return M_((e, t) => ({
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
class ZR extends mD {
  constructor(e = {}) {
    return super(e), this.vueRenderers = Iu(/* @__PURE__ */ new Map()), this.contentComponent = null, this.reactiveState = Am(this.view.state), this.reactiveExtensionStorage = Am(this.extensionStorage), this.on("transaction", () => {
      this.reactiveState.value = this.view.state, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), A_(this);
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
const Gy = ar({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = xe(), t = Pu();
    return $m(() => {
      const r = n.editor;
      r && r.options.element && e.value && Bm(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = io(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), Ya(() => {
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
      const t = Er(T_, {
        to: e.teleportElement,
        key: e.id
      }, Er(e.component, {
        ref: e.id,
        ...e.props
      }));
      n.push(t);
    }), Er("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    }, ...n);
  }
});
ar({
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
    const t = xe(null);
    return Bu(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: a } = n;
      i.registerPlugin(Jy({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: o,
        shouldShow: a
      }));
    }), Ya(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Er("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
ar({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return Er(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
ar({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return Er(this.as, {
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
const Xy = (n = {}) => {
  const e = Lm();
  return Bu(() => {
    e.value = new ZR(n);
  }), Ya(() => {
    var t;
    (t = e.value) === null || t === void 0 || t.destroy();
  }), e;
}, QR = /^\s*>\s$/, eI = Bt.create({
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
    return ["blockquote", yt(this.options.HTMLAttributes, n), 0];
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
      ws({
        find: QR,
        type: this.type
      })
    ];
  }
}), tI = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/, nI = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g, rI = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/, iI = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g, oI = or.create({
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
    return ["strong", yt(this.options.HTMLAttributes, n), 0];
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
      yo({
        find: tI,
        type: this.type
      }),
      yo({
        find: rI,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vo({
        find: nI,
        type: this.type
      }),
      vo({
        find: iI,
        type: this.type
      })
    ];
  }
}), sI = Bt.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
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
    return ["li", yt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Mm = or.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", yt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = dl(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), Nm = /^\s*([-+*])\s$/, aI = Bt.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
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
    return ["ul", yt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(sI.name, this.editor.getAttributes(Mm.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = ws({
      find: Nm,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = ws({
      find: Nm,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(Mm.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), lI = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/, cI = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g, uI = or.create({
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
    return ["code", yt(this.options.HTMLAttributes, n), 0];
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
      yo({
        find: lI,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vo({
        find: cI,
        type: this.type
      })
    ];
  }
}), fI = /^```([a-z]+)?[\s\n]$/, dI = /^~~~([a-z]+)?[\s\n]$/, pI = Bt.create({
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
          const { languageClassPrefix: t } = this.options, o = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((a) => a.startsWith(t)).map((a) => a.replace(t, ""))[0];
          return o || null;
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
      yt(this.options.HTMLAttributes, e),
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
        const o = r.parentOffset === r.parent.nodeSize - 2, a = r.parent.textContent.endsWith(`

`);
        return !o || !a ? !1 : n.chain().command(({ tr: c }) => (c.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: o } = t;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const c = i.after();
        return c === void 0 || r.nodeAt(c) ? !1 : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Tu({
        find: fI,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Tu({
        find: dI,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      new ln({
        key: new lr("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i == null ? void 0 : i.mode;
            if (!t || !o)
              return !1;
            const { tr: a } = n.state;
            return a.replaceSelectionWith(this.type.create({ language: o })), a.setSelection(pe.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))), a.insertText(t.replace(/\r\n?/g, `
`)), a.setMeta("paste", !0), n.dispatch(a), !0;
          }
        }
      })
    ];
  }
}), hI = Bt.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function mI(n = {}) {
  return new ln({
    view(e) {
      return new gI(e, n);
    }
  });
}
class gI {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (a) => {
        this[i](a);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
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
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
    if (t) {
      let c = e.nodeBefore, u = e.nodeAfter;
      if (c || u) {
        let d = this.editorView.nodeDOM(this.cursorPos - (c ? c.nodeSize : 0));
        if (d) {
          let p = d.getBoundingClientRect(), h = c ? p.bottom : p.top;
          c && u && (h = (h + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: p.left, right: p.right, top: h - this.width / 2, bottom: h + this.width / 2 };
        }
      }
    }
    if (!r) {
      let c = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: c.left - this.width / 2, right: c.left + this.width / 2, top: c.top, bottom: c.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let o, a;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      o = -pageXOffset, a = -pageYOffset;
    else {
      let c = i.getBoundingClientRect();
      o = c.left - i.scrollLeft, a = c.top - i.scrollTop;
    }
    this.element.style.left = r.left - o + "px", this.element.style.top = r.top - a + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !o) {
      let a = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let c = Tg(this.editorView.state.doc, a, this.editorView.dragging.slice);
        c != null && (a = c);
      }
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
const yI = Yt.create({
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
      mI(this.options)
    ];
  }
});
class nt extends ye {
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return nt.valid(r) ? new nt(r) : ye.near(r);
  }
  content() {
    return J.empty;
  }
  eq(e) {
    return e instanceof nt && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new nt(e.resolve(t.pos));
  }
  getBookmark() {
    return new hf(this.anchor);
  }
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !vI(e) || !bI(e))
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
        if (!r && nt.valid(e))
          return e;
        let i = e.pos, o = null;
        for (let a = e.depth; ; a--) {
          let c = e.node(a);
          if (t > 0 ? e.indexAfter(a) < c.childCount : e.index(a) > 0) {
            o = c.child(t > 0 ? e.indexAfter(a) : e.index(a) - 1);
            break;
          } else if (a == 0)
            return null;
          i += t;
          let u = e.doc.resolve(i);
          if (nt.valid(u))
            return u;
        }
        for (; ; ) {
          let a = t > 0 ? o.firstChild : o.lastChild;
          if (!a) {
            if (o.isAtom && !o.isText && !oe.isSelectable(o)) {
              e = e.doc.resolve(i + o.nodeSize * t), r = !1;
              continue e;
            }
            break;
          }
          o = a, i += t;
          let c = e.doc.resolve(i);
          if (nt.valid(c))
            return c;
        }
        return null;
      }
  }
}
nt.prototype.visible = !1;
nt.findFrom = nt.findGapCursorFrom;
ye.jsonID("gapcursor", nt);
class hf {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new hf(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return nt.valid(t) ? new nt(t) : ye.near(t);
  }
}
function vI(n) {
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
function bI(n) {
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
function wI() {
  return new ln({
    props: {
      decorations: kI,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && nt.valid(t) ? new nt(t) : null;
      },
      handleClick: SI,
      handleKeyDown: xI,
      handleDOMEvents: { beforeinput: _I }
    }
  });
}
const xI = dy({
  ArrowLeft: Ca("horiz", -1),
  ArrowRight: Ca("horiz", 1),
  ArrowUp: Ca("vert", -1),
  ArrowDown: Ca("vert", 1)
});
function Ca(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let a = r.selection, c = e > 0 ? a.$to : a.$from, u = a.empty;
    if (a instanceof pe) {
      if (!o.endOfTextblock(t) || c.depth == 0)
        return !1;
      u = !1, c = r.doc.resolve(e > 0 ? c.after() : c.before());
    }
    let d = nt.findGapCursorFrom(c, e, u);
    return d ? (i && i(r.tr.setSelection(new nt(d))), !0) : !1;
  };
}
function SI(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!nt.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && oe.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new nt(r))), !0);
}
function _I(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof nt))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = z.empty;
  for (let a = r.length - 1; a >= 0; a--)
    i = z.from(r[a].createAndFill(null, i));
  let o = n.state.tr.replace(t.pos, t.pos, new J(i, 0, 0));
  return o.setSelection(pe.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function kI(n) {
  if (!(n.selection instanceof nt))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", mt.create(n.doc, [Mn.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const CI = Yt.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      wI()
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
      allowGapCursor: (e = ge(Q(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), EI = Bt.create({
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
    return ["br", yt(this.options.HTMLAttributes, n)];
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
          const { selection: i, storedMarks: o } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: a } = this.options, { splittableMarks: c } = r.extensionManager, u = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: d, dispatch: p }) => {
            if (p && u && a) {
              const h = u.filter((g) => c.includes(g.type.name));
              d.ensureMarks(h);
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
}), OI = Bt.create({
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
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, yt(this.options.HTMLAttributes, e), 0];
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
    return this.options.levels.map((n) => Tu({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var Ja = 200, St = function() {
};
St.prototype.append = function(e) {
  return e.length ? (e = St.from(e), !this.length && e || e.length < Ja && this.leafAppend(e) || this.length < Ja && e.leafPrepend(this) || this.appendInner(e)) : this;
};
St.prototype.prepend = function(e) {
  return e.length ? St.from(e).append(this) : this;
};
St.prototype.appendInner = function(e) {
  return new TI(this, e);
};
St.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? St.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
St.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
St.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
St.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, a) {
    return i.push(e(o, a));
  }, t, r), i;
};
St.from = function(e) {
  return e instanceof St ? e : e && e.length ? new Yy(e) : St.empty;
};
var Yy = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, a, c) {
    for (var u = o; u < a; u++)
      if (i(this.values[u], c + u) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, a, c) {
    for (var u = o - 1; u >= a; u--)
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
}(St);
St.empty = new Yy([]);
var TI = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, a) {
    var c = this.left.length;
    if (i < c && this.left.forEachInner(r, i, Math.min(o, c), a) === !1 || o > c && this.right.forEachInner(r, Math.max(i - c, 0), Math.min(this.length, o) - c, a + c) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, a) {
    var c = this.left.length;
    if (i > c && this.right.forEachInvertedInner(r, i - c, Math.max(o, c) - c, a + c) === !1 || o < c && this.left.forEachInvertedInner(r, Math.min(i, c), o, a) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
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
}(St);
const AI = 500;
class Hn {
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
    let i, o;
    t && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let a = e.tr, c, u, d = [], p = [];
    return this.items.forEach((h, g) => {
      if (!h.step) {
        i || (i = this.remapping(r, g + 1), o = i.maps.length), o--, p.push(h);
        return;
      }
      if (i) {
        p.push(new Xn(h.map));
        let y = h.step.map(i.slice(o)), b;
        y && a.maybeStep(y).doc && (b = a.mapping.maps[a.mapping.maps.length - 1], d.push(new Xn(b, void 0, void 0, d.length + p.length))), o--, b && i.appendMap(b, o);
      } else
        a.maybeStep(h.step);
      if (h.selection)
        return c = i ? h.selection.map(i.slice(o)) : h.selection, u = new Hn(this.items.slice(0, r).append(p.reverse().concat(d)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: u, transform: a, selection: c };
  }
  addTransform(e, t, r, i) {
    let o = [], a = this.eventCount, c = this.items, u = !i && c.length ? c.get(c.length - 1) : null;
    for (let p = 0; p < e.steps.length; p++) {
      let h = e.steps[p].invert(e.docs[p]), g = new Xn(e.mapping.maps[p], h, t), y;
      (y = u && u.merge(g)) && (g = y, p ? o.pop() : c = c.slice(0, c.length - 1)), o.push(g), t && (a++, t = void 0), i || (u = g);
    }
    let d = a - r.depth;
    return d > NI && (c = MI(c, d), a -= d), new Hn(c.append(o), a);
  }
  remapping(e, t) {
    let r = new oo();
    return this.items.forEach((i, o) => {
      let a = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, a);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Hn(this.items.append(e.map((t) => new Xn(t))), this.eventCount);
  }
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, a = e.steps.length, c = this.eventCount;
    this.items.forEach((g) => {
      g.selection && c--;
    }, i);
    let u = t;
    this.items.forEach((g) => {
      let y = o.getMirror(--u);
      if (y == null)
        return;
      a = Math.min(a, y);
      let b = o.maps[y];
      if (g.step) {
        let _ = e.steps[y].invert(e.docs[y]), k = g.selection && g.selection.map(o.slice(u + 1, y));
        k && c++, r.push(new Xn(b, _, k));
      } else
        r.push(new Xn(b));
    }, i);
    let d = [];
    for (let g = t; g < a; g++)
      d.push(new Xn(o.maps[g]));
    let p = this.items.slice(0, i).append(d).append(r), h = new Hn(p, c);
    return h.emptyItemCount() > AI && (h = h.compress(this.items.length - r.length)), h;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
    return this.items.forEach((a, c) => {
      if (c >= e)
        i.push(a), a.selection && o++;
      else if (a.step) {
        let u = a.step.map(t.slice(r)), d = u && u.getMap();
        if (r--, d && t.appendMap(d, r), u) {
          let p = a.selection && a.selection.map(t.slice(r));
          p && o++;
          let h = new Xn(d.invert(), u, p), g, y = i.length - 1;
          (g = i.length && i[y].merge(h)) ? i[y] = g : i.push(h);
        }
      } else
        a.map && r--;
    }, this.items.length, 0), new Hn(St.from(i.reverse()), o);
  }
}
Hn.empty = new Hn(St.empty, 0);
function MI(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class Xn {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new Xn(t.getMap().invert(), t, this.selection);
    }
  }
}
class Wr {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const NI = 20;
function DI(n, e, t, r) {
  let i = t.getMeta(Yr), o;
  if (i)
    return i.historyState;
  t.getMeta(II) && (n = new Wr(n.done, n.undone, null, 0, -1));
  let a = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (a && a.getMeta(Yr))
    return a.getMeta(Yr).redo ? new Wr(n.done.addTransform(t, void 0, r, Aa(e)), n.undone, Dm(t.mapping.maps[t.steps.length - 1]), n.prevTime, n.prevComposition) : new Wr(n.done, n.undone.addTransform(t, void 0, r, Aa(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(a && a.getMeta("addToHistory") === !1)) {
    let c = t.getMeta("composition"), u = n.prevTime == 0 || !a && n.prevComposition != c && (n.prevTime < (t.time || 0) - r.newGroupDelay || !RI(t, n.prevRanges)), d = a ? ru(n.prevRanges, t.mapping) : Dm(t.mapping.maps[t.steps.length - 1]);
    return new Wr(n.done.addTransform(t, u ? e.selection.getBookmark() : void 0, r, Aa(e)), Hn.empty, d, t.time, c == null ? n.prevComposition : c);
  } else
    return (o = t.getMeta("rebased")) ? new Wr(n.done.rebased(t, o), n.undone.rebased(t, o), ru(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Wr(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), ru(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function RI(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (t = !0);
  }), t;
}
function Dm(n) {
  let e = [];
  return n.forEach((t, r, i, o) => e.push(i, o)), e;
}
function ru(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function Zy(n, e, t, r) {
  let i = Aa(e), o = Yr.get(e).spec.config, a = (r ? n.undone : n.done).popEvent(e, i);
  if (!a)
    return;
  let c = a.selection.resolve(a.transform.doc), u = (r ? n.done : n.undone).addTransform(a.transform, e.selection.getBookmark(), o, i), d = new Wr(r ? u : a.remaining, r ? a.remaining : u, null, 0, -1);
  t(a.transform.setSelection(c).setMeta(Yr, { redo: r, historyState: d }).scrollIntoView());
}
let iu = !1, Rm = null;
function Aa(n) {
  let e = n.plugins;
  if (Rm != e) {
    iu = !1, Rm = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        iu = !0;
        break;
      }
  }
  return iu;
}
const Yr = new lr("history"), II = new lr("closeHistory");
function PI(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new ln({
    key: Yr,
    state: {
      init() {
        return new Wr(Hn.empty, Hn.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return DI(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? Qy : r == "historyRedo" ? ev : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
const Qy = (n, e) => {
  let t = Yr.getState(n);
  return !t || t.done.eventCount == 0 ? !1 : (e && Zy(t, n, e, !1), !0);
}, ev = (n, e) => {
  let t = Yr.getState(n);
  return !t || t.undone.eventCount == 0 ? !1 : (e && Zy(t, n, e, !0), !0);
}, LI = Yt.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Qy(n, e),
      redo: () => ({ state: n, dispatch: e }) => ev(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      PI(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-Z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Mod-Y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Shift-Mod-Z": () => this.editor.commands.redo(),
      "Mod-\u044F": () => this.editor.commands.undo(),
      "Shift-Mod-\u044F": () => this.editor.commands.redo()
    };
  }
}), BI = Bt.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", yt(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        const { $to: t } = e.selection, r = n();
        return t.parentOffset === 0 ? r.insertContentAt(Math.max(t.pos - 2, 0), { type: this.name }) : r.insertContent({ type: this.name }), r.command(({ tr: i, dispatch: o }) => {
          var a;
          if (o) {
            const { $to: c } = i.selection, u = c.end();
            if (c.nodeAfter)
              c.nodeAfter.isTextblock ? i.setSelection(pe.create(i.doc, c.pos + 1)) : c.nodeAfter.isBlock ? i.setSelection(oe.create(i.doc, c.pos)) : i.setSelection(pe.create(i.doc, c.pos));
            else {
              const d = (a = c.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create();
              d && (i.insert(u, d), i.setSelection(pe.create(i.doc, u + 1)));
            }
            i.scrollIntoView();
          }
          return !0;
        }).run();
      }
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
}), $I = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/, FI = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g, VI = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/, zI = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g, HI = or.create({
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
    return ["em", yt(this.options.HTMLAttributes, n), 0];
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
      yo({
        find: $I,
        type: this.type
      }),
      yo({
        find: VI,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vo({
        find: FI,
        type: this.type
      }),
      vo({
        find: zI,
        type: this.type
      })
    ];
  }
}), WI = Bt.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
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
    return ["li", yt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), UI = Bt.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
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
    return ["li", yt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Im = or.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", yt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = dl(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), Pm = /^(\d+)\.\s$/, jI = Bt.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
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
    return e === 1 ? ["ol", yt(this.options.HTMLAttributes, t), 0] : ["ol", yt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(UI.name, this.editor.getAttributes(Im.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = ws({
      find: Pm,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = ws({
      find: Pm,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Im.name) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), KI = Bt.create({
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
    return ["p", yt(this.options.HTMLAttributes, n), 0];
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
}), qI = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/, JI = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g, GI = or.create({
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
    return ["s", yt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    const n = {};
    return rf() ? n["Mod-Shift-s"] = () => this.editor.commands.toggleStrike() : n["Ctrl-Shift-s"] = () => this.editor.commands.toggleStrike(), n;
  },
  addInputRules() {
    return [
      yo({
        find: qI,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vo({
        find: JI,
        type: this.type
      })
    ];
  }
}), XI = Bt.create({
  name: "text",
  group: "inline"
}), Ga = Yt.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, o, a, c, u, d, p, h, g, y, b, _, k, A;
    const D = [];
    return this.options.blockquote !== !1 && D.push(eI.configure((n = this.options) === null || n === void 0 ? void 0 : n.blockquote)), this.options.bold !== !1 && D.push(oI.configure((e = this.options) === null || e === void 0 ? void 0 : e.bold)), this.options.bulletList !== !1 && D.push(aI.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && D.push(uI.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && D.push(pI.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && D.push(hI.configure((o = this.options) === null || o === void 0 ? void 0 : o.document)), this.options.dropcursor !== !1 && D.push(yI.configure((a = this.options) === null || a === void 0 ? void 0 : a.dropcursor)), this.options.gapcursor !== !1 && D.push(CI.configure((c = this.options) === null || c === void 0 ? void 0 : c.gapcursor)), this.options.hardBreak !== !1 && D.push(EI.configure((u = this.options) === null || u === void 0 ? void 0 : u.hardBreak)), this.options.heading !== !1 && D.push(OI.configure((d = this.options) === null || d === void 0 ? void 0 : d.heading)), this.options.history !== !1 && D.push(LI.configure((p = this.options) === null || p === void 0 ? void 0 : p.history)), this.options.horizontalRule !== !1 && D.push(BI.configure((h = this.options) === null || h === void 0 ? void 0 : h.horizontalRule)), this.options.italic !== !1 && D.push(HI.configure((g = this.options) === null || g === void 0 ? void 0 : g.italic)), this.options.listItem !== !1 && D.push(WI.configure((y = this.options) === null || y === void 0 ? void 0 : y.listItem)), this.options.orderedList !== !1 && D.push(jI.configure((b = this.options) === null || b === void 0 ? void 0 : b.orderedList)), this.options.paragraph !== !1 && D.push(KI.configure((_ = this.options) === null || _ === void 0 ? void 0 : _.paragraph)), this.options.strike !== !1 && D.push(GI.configure((k = this.options) === null || k === void 0 ? void 0 : k.strike)), this.options.text !== !1 && D.push(XI.configure((A = this.options) === null || A === void 0 ? void 0 : A.text)), D;
  }
}), YI = {
  name: "LaravelCmsAdminPageAddComponentForm",
  props: ["templateSections", "globalComponents"],
  components: { EditorContent: Gy, StarterKit: Ga },
  setup(n, { emit: e }) {
    const t = {
      type: null,
      html: null,
      view: null,
      name: null
    }, r = Iu({ ...t }), i = xe([]), o = Xy({
      content: r.html,
      extensions: [Ga],
      onUpdate: ({ editor: p }) => {
        r.html = p.getHTML();
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
      (p, h) => {
        r.html = null, r.view = null;
      }
    );
    const u = De(() => qt.exports.sortBy(n.globalComponents || [], (p) => p.name));
    a();
    const d = De(() => {
      if (!r.type)
        return !1;
      if (r.type == "new-text") {
        if (!r.html || !r.name)
          return !1;
      } else if (r.type == "new-view" && (!r.view || !r.name))
        return !1;
      return !0;
    });
    return { component: r, componentsSorted: u, views: i, valid: d, onSubmit: c, editor: o };
  }
}, ZI = /* @__PURE__ */ E("legend", null, "Add Item to Page", -1), QI = { class: "form-group mx-2" }, eP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "type"
}, "Select Component", -1), tP = /* @__PURE__ */ E("option", { value: "" }, "Select Type", -1), nP = /* @__PURE__ */ E("option", { value: "" }, "-- New Component --", -1), rP = /* @__PURE__ */ E("option", { value: "new-text" }, "HTML/Markdown", -1), iP = /* @__PURE__ */ E("option", { value: "new-view" }, "Laravel View", -1), oP = /* @__PURE__ */ E("option", { value: "" }, "-- Existing Component --", -1), sP = ["value"], aP = { class: "form-group mx-2" }, lP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), cP = {
  key: 0,
  class: "form-group mx-2"
}, uP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "html"
}, "Body", -1), fP = {
  key: 1,
  class: "form-group mx-2"
}, dP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "view"
}, "Laravel View", -1), pP = /* @__PURE__ */ E("option", { value: "" }, "Select", -1), hP = ["value"], mP = { class: "form-group mx-2" }, gP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "cms_template_section_id"
}, "Template Section", -1), yP = /* @__PURE__ */ E("option", { value: "" }, "Select", -1), vP = ["value"], bP = /* @__PURE__ */ E("button", {
  class: "btn mx-2",
  style: { float: "right" },
  disabled: 1
}, " Cancel ", -1), wP = ["disabled"];
function xP(n, e, t, r, i, o) {
  var c;
  const a = be("editor-content");
  return F(), W("form", {
    onSubmit: e[4] || (e[4] = Qe((...u) => r.onSubmit && r.onSubmit(...u), ["prevent"]))
  }, [
    E("fieldset", null, [
      ZI,
      E("div", QI, [
        eP,
        Re(E("select", {
          class: "form-select",
          name: "type",
          id: "type",
          "onUpdate:modelValue": e[0] || (e[0] = (u) => r.component.type = u)
        }, [
          tP,
          nP,
          rP,
          iP,
          (c = r.componentsSorted) != null && c.length ? (F(), W(Ne, { key: 0 }, [
            oP,
            (F(!0), W(Ne, null, wt(r.componentsSorted, (u) => (F(), W("option", {
              key: u.id,
              value: u.id
            }, Ke(u.name), 9, sP))), 128))
          ], 64)) : Kt("", !0)
        ], 512), [
          [wi, r.component.type]
        ])
      ]),
      E("div", aP, [
        lP,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[1] || (e[1] = (u) => r.component.name = u)
        }, null, 512), [
          [et, r.component.name]
        ])
      ]),
      r.component.type == "new-text" || r.component.type == "new-view" ? (F(), W(Ne, { key: 0 }, [
        r.component.type == "new-text" ? (F(), W("div", cP, [
          uP,
          Je(a, { editor: r.editor }, null, 8, ["editor"])
        ])) : Kt("", !0),
        r.component.type == "new-view" ? (F(), W("div", fP, [
          dP,
          Re(E("select", {
            class: "form-select",
            name: "view",
            id: "view",
            "onUpdate:modelValue": e[2] || (e[2] = (u) => r.component.view = u)
          }, [
            pP,
            (F(!0), W(Ne, null, wt(r.views, (u) => (F(), W("option", {
              key: u,
              value: u
            }, Ke(u), 9, hP))), 128))
          ], 512), [
            [wi, r.component.view]
          ])
        ])) : Kt("", !0)
      ], 64)) : Kt("", !0),
      E("div", mP, [
        gP,
        Re(E("select", {
          class: "form-select",
          name: "cms_template_section_id",
          id: "cms_template_section_id",
          "onUpdate:modelValue": e[3] || (e[3] = (u) => r.component.cms_template_section_id = u)
        }, [
          yP,
          (F(!0), W(Ne, null, wt(t.templateSections, (u) => (F(), W("option", {
            key: u.id,
            value: u.id
          }, Ke(u.name), 9, vP))), 128))
        ], 512), [
          [wi, r.component.cms_template_section_id]
        ])
      ]),
      bP,
      E("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Component ", 8, wP)
    ])
  ], 32);
}
const SP = /* @__PURE__ */ Te(YI, [["render", xP]]), _P = {
  name: "LaravelCmsAdminPageEditComponentForm",
  props: ["templateSections", "component"],
  components: { EditorContent: Gy, StarterKit: Ga },
  setup(n, { emit: e }) {
    const t = xe([]), r = Xy({
      content: n.component.html,
      extensions: [Ga],
      onUpdate: ({ editor: u }) => {
        n.component.html = u.getHTML();
      }
    });
    async function i() {
      const d = await (await fetch("/api/cms-views")).json();
      t.value = d.data;
    }
    async function o() {
      !this.valid || e("update", n.component);
    }
    const a = De(() => qt.exports.sortBy(n.globalComponents || [], (u) => u.name));
    i();
    const c = De(() => !0);
    return { componentsSorted: a, views: t, valid: c, onSubmit: o, editor: r };
  }
}, kP = /* @__PURE__ */ E("legend", null, "Edit Component", -1), CP = { class: "form-group mx-2" }, EP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), OP = {
  key: 0,
  class: "form-group mx-2"
}, TP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "view"
}, "Laravel View", -1), AP = /* @__PURE__ */ E("option", { value: "" }, "Select", -1), MP = ["value"], NP = {
  key: 1,
  class: "form-group mx-2"
}, DP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "html"
}, "Body", -1), RP = { class: "form-group mx-2" }, IP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "cms_template_section_id"
}, "Template Section", -1), PP = /* @__PURE__ */ E("option", { value: "" }, "Select", -1), LP = ["value"], BP = /* @__PURE__ */ E("button", {
  class: "btn mx-2",
  style: { float: "right" },
  disabled: 1
}, " Cancel ", -1), $P = ["disabled"];
function FP(n, e, t, r, i, o) {
  const a = be("editor-content");
  return F(), W("form", {
    onSubmit: e[3] || (e[3] = Qe((...c) => r.onSubmit && r.onSubmit(...c), ["prevent"]))
  }, [
    E("fieldset", null, [
      kP,
      E("div", CP, [
        EP,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (c) => t.component.name = c)
        }, null, 512), [
          [et, t.component.name]
        ])
      ]),
      t.component.view ? (F(), W("div", OP, [
        TP,
        Re(E("select", {
          class: "form-select",
          name: "view",
          id: "view",
          "onUpdate:modelValue": e[1] || (e[1] = (c) => t.component.view = c)
        }, [
          AP,
          (F(!0), W(Ne, null, wt(r.views, (c) => (F(), W("option", {
            key: c,
            value: c
          }, Ke(c), 9, MP))), 128))
        ], 512), [
          [wi, t.component.view]
        ])
      ])) : (F(), W("div", NP, [
        DP,
        Je(a, { editor: r.editor }, null, 8, ["editor"])
      ])),
      E("div", RP, [
        IP,
        Re(E("select", {
          class: "form-select",
          name: "cms_template_section_id",
          id: "cms_template_section_id",
          "onUpdate:modelValue": e[2] || (e[2] = (c) => t.component.cms_template_section_id = c)
        }, [
          PP,
          (F(!0), W(Ne, null, wt(t.templateSections, (c) => (F(), W("option", {
            key: c.id,
            value: c.id
          }, Ke(c.name), 9, LP))), 128))
        ], 512), [
          [wi, t.component.cms_template_section_id]
        ])
      ]),
      BP,
      E("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Update Component ", 8, $P)
    ])
  ], 32);
}
const VP = /* @__PURE__ */ Te(_P, [["render", FP]]), zP = {
  name: "LaravelCmsAdminPageContent",
  props: ["page"],
  components: {
    UnsortedComponents: bO,
    TemplateSections: CO,
    ComponentAddForm: SP,
    ComponentEditForm: VP
  },
  setup(n, { emit: e }) {
    const t = xe(n.page.components), r = xe([]), i = xe(null);
    async function o(h) {
      if (!isNaN(h.type)) {
        const b = await fetch("/api/cms-component-page", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
          },
          method: "POST",
          body: JSON.stringify({
            cms_page_id: n.page.id,
            cms_component_id: h.type,
            cms_template_section_id: h.cms_template_section_id
          })
        }), _ = await b.json();
        if (!b.ok) {
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
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
        t.value.map((b) => b.id).indexOf(h.id),
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
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
        t.value.map((b) => b.id).indexOf(h.id),
        1,
        Object.assign(h, y.data)
      ), de({
        title: "Component update.",
        type: "success"
      });
    }
    const d = De(() => {
      var b;
      const g = (((b = n.page.template) == null ? void 0 : b.template_sections) || []).map(function(_) {
        return _.id;
      }), y = qt.exports.filter(t.value, (_) => !_.cms_template_section_id || g.indexOf(
        _.cms_template_section_id
      ) == -1);
      return qt.exports.sortBy(y, "sort_order");
    });
    function p(h) {
      i.value = h;
    }
    return Promise.all([a()]), {
      selectedComponent: i,
      deleteComponent: c,
      pageComponents: t,
      globalComponents: r,
      unsortedComponents: d,
      selectComponent: p,
      onAddComponent: o,
      onUpdateComponent: u
    };
  }
}, HP = { class: "container" }, WP = { class: "columns" }, UP = { class: "column col-6" }, jP = { class: "column col-6" };
function KP(n, e, t, r, i, o) {
  var p, h, g, y, b, _, k, A, D, H, C;
  const a = be("unsorted-components"), c = be("template-sections"), u = be("component-edit-form"), d = be("component-add-form");
  return F(), W("div", HP, [
    E("div", WP, [
      E("div", UP, [
        r.unsortedComponents.length > 0 ? (F(), gt(a, {
          key: 0,
          "template-sections": (h = (p = t.page) == null ? void 0 : p.template) == null ? void 0 : h.template_sections,
          components: r.unsortedComponents,
          onSelect: r.selectComponent,
          onDelete: r.deleteComponent
        }, null, 8, ["template-sections", "components", "onSelect", "onDelete"])) : Kt("", !0),
        Je(c, {
          "template-sections": (y = (g = t.page) == null ? void 0 : g.template) == null ? void 0 : y.template_sections,
          components: (b = t.page) == null ? void 0 : b.components,
          onSelect: r.selectComponent,
          onDelete: r.deleteComponent
        }, null, 8, ["template-sections", "components", "onSelect", "onDelete"])
      ]),
      E("div", jP, [
        r.selectedComponent ? (F(), gt(u, {
          key: 0,
          component: r.selectedComponent,
          "template-sections": (k = (_ = t.page) == null ? void 0 : _.template) == null ? void 0 : k.template_sections,
          onUpdate: r.onUpdateComponent
        }, {
          default: Pt(() => [
            jt("EDIT")
          ]),
          _: 1
        }, 8, ["component", "template-sections", "onUpdate"])) : (F(), W(Ne, { key: 1 }, [
          (D = (A = t.page) == null ? void 0 : A.template) != null && D.template_sections ? (F(), gt(d, {
            key: 0,
            "template-sections": (C = (H = t.page) == null ? void 0 : H.template) == null ? void 0 : C.template_sections,
            "global-components": r.globalComponents,
            onAdd: r.onAddComponent
          }, null, 8, ["template-sections", "global-components", "onAdd"])) : Kt("", !0)
        ], 64))
      ])
    ])
  ]);
}
const qP = /* @__PURE__ */ Te(zP, [["render", KP]]), JP = {
  name: "LaravelCmsAdminPagePreview",
  props: ["page"],
  components: {},
  setup(n, { emit: e }) {
    const t = xe(null);
    console.log("...get page data");
    async function r() {
      const o = await (await fetch("/api/cms-render/" + n.page.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST"
      })).json();
      t.value = o.data;
    }
    return r(), { page: t };
  }
};
function GP(n, e, t, r, i, o) {
  return Ke(r.page);
}
const XP = /* @__PURE__ */ Te(JP, [["render", GP]]), YP = {
  name: "LaravelCmsAdminPageMainForm",
  props: ["page", "templates"],
  components: {},
  setup(n, { emit: e }) {
    return {};
  }
}, ZP = { class: "form-group" }, QP = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), eL = { class: "form-group" }, tL = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), nL = {
  key: 0,
  class: "form-group"
}, rL = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "template"
}, "Template", -1), iL = ["value"];
function oL(n, e, t, r, i, o) {
  var a;
  return F(), W("fieldset", null, [
    E("div", ZP, [
      QP,
      Re(E("input", {
        class: "form-input",
        type: "text",
        name: "name",
        id: "name",
        "onUpdate:modelValue": e[0] || (e[0] = (c) => t.page.name = c)
      }, null, 512), [
        [et, t.page.name]
      ])
    ]),
    E("div", eL, [
      tL,
      Re(E("input", {
        class: "form-input",
        type: "text",
        name: "path",
        id: "path",
        "onUpdate:modelValue": e[1] || (e[1] = (c) => t.page.path = c)
      }, null, 512), [
        [et, t.page.path]
      ])
    ]),
    (a = t.templates) != null && a.length ? (F(), W("div", nL, [
      rL,
      Re(E("select", {
        class: "form-select",
        name: "template",
        id: "template",
        "onUpdate:modelValue": e[2] || (e[2] = (c) => t.page.cms_template_id = c)
      }, [
        (F(!0), W(Ne, null, wt(t.templates, (c) => (F(), W("option", {
          key: c.id,
          value: c.id
        }, Ke(c.name), 9, iL))), 128))
      ], 512), [
        [
          wi,
          t.page.cms_template_id,
          void 0,
          { number: !0 }
        ]
      ])
    ])) : Kt("", !0)
  ]);
}
const sL = /* @__PURE__ */ Te(YP, [["render", oL]]), aL = {
  name: "LaravelCmsAdminPageSeoForm",
  props: ["page"],
  components: {},
  setup(n, { emit: e }) {
    return {};
  }
}, lL = { class: "form-group" }, cL = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "title"
}, "Title", -1), uL = { class: "form-group" }, fL = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "keywords"
}, "Meta Keywords", -1), dL = { class: "form-group" }, pL = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "keywords"
}, "Meta Description", -1);
function hL(n, e, t, r, i, o) {
  return F(), W("fieldset", null, [
    E("div", lL, [
      cL,
      Re(E("input", {
        class: "form-input",
        type: "text",
        name: "title",
        id: "title",
        "onUpdate:modelValue": e[0] || (e[0] = (a) => t.page.title = a)
      }, null, 512), [
        [et, t.page.title]
      ])
    ]),
    E("div", uL, [
      fL,
      Re(E("input", {
        class: "form-input",
        type: "text",
        name: "meta_keywords",
        id: "meta_keywords",
        "onUpdate:modelValue": e[1] || (e[1] = (a) => t.page.meta_keywords = a)
      }, null, 512), [
        [et, t.page.meta_keywords]
      ])
    ]),
    E("div", dL, [
      pL,
      Re(E("textarea", {
        class: "form-input",
        name: "meta_description",
        id: "meta_description",
        "onUpdate:modelValue": e[2] || (e[2] = (a) => t.page.meta_description = a)
      }, null, 512), [
        [et, t.page.meta_description]
      ])
    ])
  ]);
}
const mL = /* @__PURE__ */ Te(aL, [["render", hL]]), gL = {
  name: "LaravelCmsAdminPage",
  components: {
    PageContent: qP,
    PagePaths: sO,
    PagePreview: XP,
    MainForm: sL,
    SeoForm: mL
  },
  props: ["id"],
  setup(n) {
    const e = xe(null), t = xe(null), r = xe(null), i = xe([]);
    async function o() {
      const p = await (await fetch("/api/cms-pages/" + n.id)).json();
      e.value = p.data, r.value = Object.assign({}, e.value);
    }
    async function a() {
      const p = await (await fetch("/api/cms-templates")).json();
      i.value = p.data;
    }
    async function c() {
      const d = await fetch("/api/cms-pages/" + n.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "PUT",
        body: JSON.stringify(e.value)
      }), p = await d.json();
      if (!d.ok) {
        de({
          title: p.message,
          type: "error"
        });
        return;
      }
      e.value = p.data, r.value = Object.assign({}, e.value), de({
        title: "Page updated.",
        type: "success"
      });
    }
    Promise.all([o(), a()]);
    const u = De(() => JSON.stringify(r.value) != JSON.stringify(e.value));
    return {
      tab: t,
      page: e,
      templates: i,
      saveEnabled: u,
      onSubmit: c
    };
  }
}, yL = {
  class: "tab",
  style: { "margin-bottom": "1rem" }
}, vL = {
  key: 0,
  class: "container"
}, bL = { class: "columns" }, wL = { class: "column col-6" }, xL = ["disabled"];
function SL(n, e, t, r, i, o) {
  const a = be("router-link"), c = be("main-form"), u = be("seo-form"), d = be("page-paths"), p = be("page-content"), h = be("page-preview");
  return F(), W(Ne, null, [
    E("p", null, [
      Je(a, { to: "/pages" }, {
        default: Pt(() => [
          jt("< Back")
        ]),
        _: 1
      })
    ]),
    r.page ? (F(), W(Ne, { key: 0 }, [
      E("h2", null, "Edit Page: " + Ke(r.page.name), 1),
      E("ul", yL, [
        E("li", {
          class: gi(["tab-item", { active: r.tab == "main" || !r.tab }])
        }, [
          E("a", {
            href: "#",
            onClick: e[0] || (e[0] = Qe((g) => r.tab = "main", ["prevent"]))
          }, "Main")
        ], 2),
        E("li", {
          class: gi(["tab-item", { active: r.tab == "seo" }])
        }, [
          E("a", {
            href: "#",
            onClick: e[1] || (e[1] = Qe((g) => r.tab = "seo", ["prevent"]))
          }, "SEO")
        ], 2),
        E("li", {
          class: gi(["tab-item", { active: r.tab == "paths" }])
        }, [
          E("a", {
            href: "#",
            onClick: e[2] || (e[2] = Qe((g) => r.tab = "paths", ["prevent"]))
          }, "Paths")
        ], 2),
        E("li", {
          class: gi(["tab-item", { active: r.tab == "content" }])
        }, [
          E("a", {
            href: "#",
            onClick: e[3] || (e[3] = Qe((g) => r.tab = "content", ["prevent"]))
          }, "Content")
        ], 2),
        E("li", {
          class: gi(["tab-item", { active: r.tab == "preview" }])
        }, [
          E("a", {
            href: "#",
            onClick: e[4] || (e[4] = Qe((g) => r.tab = "preview", ["prevent"]))
          }, "Preview")
        ], 2)
      ]),
      r.tab == "main" || r.tab == "seo" || !r.tab ? (F(), W("div", vL, [
        E("div", bL, [
          E("div", wL, [
            E("form", {
              onSubmit: e[5] || (e[5] = Qe((...g) => r.onSubmit && r.onSubmit(...g), ["prevent"]))
            }, [
              Re(Je(c, { page: r.page }, null, 8, ["page"]), [
                [Hp, r.tab == "main" || !r.tab]
              ]),
              Re(Je(u, { page: r.page }, null, 8, ["page"]), [
                [Hp, r.tab == "seo"]
              ]),
              E("button", {
                class: "btn btn-primary",
                disabled: !r.saveEnabled
              }, " Update ", 8, xL)
            ], 32)
          ])
        ])
      ])) : Kt("", !0),
      r.tab == "paths" ? (F(), gt(d, {
        key: 1,
        page: r.page
      }, null, 8, ["page"])) : Kt("", !0),
      r.tab == "content" ? (F(), gt(p, {
        key: 2,
        page: r.page
      }, null, 8, ["page"])) : Kt("", !0),
      r.tab == "preview" ? (F(), gt(h, {
        key: 3,
        page: r.page
      }, null, 8, ["page"])) : Kt("", !0)
    ], 64)) : Kt("", !0)
  ], 64);
}
const _L = /* @__PURE__ */ Te(gL, [["render", SL]]), kL = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["path"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.path.id);
    }
    return { onDeleteClick: t };
  }
};
function CL(n, e, t, r, i, o) {
  const a = be("router-link");
  return F(), W("tr", null, [
    E("td", null, Ke(t.path.id), 1),
    E("td", null, Ke(t.path.cms_page_id), 1),
    E("td", null, [
      Je(a, {
        to: "/paths/" + t.path.id
      }, {
        default: Pt(() => [
          jt(Ke(t.path.path), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    E("td", null, [
      E("button", {
        onClick: e[0] || (e[0] = Qe((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const EL = /* @__PURE__ */ Te(kL, [["render", CL]]), OL = {
  name: "LaravelCmsAdminPaths",
  components: {
    ListItem: EL
  },
  setup(n, { emit: e }) {
    const t = xe([]), r = xe(!1);
    async function i() {
      const u = await (await fetch("/api/cms-paths")).json();
      t.value = u.data, r.value = !0;
    }
    async function o(c) {
      if (!(await fetch("/api/cms-paths/" + c, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
      var d = t.value.map((p) => p.id).indexOf(c);
      ~d && t.value.splice(d, 1);
    }
    return i(), {
      pathsSorted: De(() => qt.exports.sortBy(t.value || [], (c) => c.path)),
      loaded: r,
      onDelete: o
    };
  }
}, TL = /* @__PURE__ */ E("h2", null, "Paths", -1), AL = {
  key: 0,
  class: "table"
}, ML = /* @__PURE__ */ E("tr", null, [
  /* @__PURE__ */ E("th", null, "Id"),
  /* @__PURE__ */ E("th", null, "Page Id"),
  /* @__PURE__ */ E("th", { colspan: "2" }, "Path")
], -1), NL = { key: 1 }, DL = { key: 2 };
function RL(n, e, t, r, i, o) {
  const a = be("list-item");
  return F(), W(Ne, null, [
    TL,
    r.loaded && r.pathsSorted.length ? (F(), W("table", AL, [
      ML,
      (F(!0), W(Ne, null, wt(r.pathsSorted, (c) => (F(), gt(a, {
        key: c.id,
        path: c,
        onDelete: r.onDelete
      }, null, 8, ["path", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), W("p", NL, "There are no paths.")) : (F(), W("p", DL, "Loading..."))
  ], 64);
}
const IL = /* @__PURE__ */ Te(OL, [["render", RL]]), PL = {
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
function LL(n, e, t, r, i, o) {
  const a = be("router-link");
  return F(), W("tr", null, [
    E("td", null, Ke(t.template.id), 1),
    E("td", null, [
      Je(a, {
        to: "/templates/" + t.template.id
      }, {
        default: Pt(() => [
          jt(Ke(t.template.name), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    E("td", null, Ke(t.template.identifier), 1),
    E("td", null, [
      E("button", {
        onClick: e[0] || (e[0] = Qe((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const BL = /* @__PURE__ */ Te(PL, [["render", LL]]), $L = {
  name: "LaravelCmsAdminTemplateAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = xe({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = De(() => t.value.name != null && t.value.identifier != null);
    return { newTemplate: t, onSubmit: r, valid: i };
  }
}, FL = { class: "form-group form-inline mx-2" }, VL = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), zL = { class: "form-group form-inline mx-2" }, HL = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), WL = ["disabled"];
function UL(n, e, t, r, i, o) {
  return F(), W("form", {
    onSubmit: e[2] || (e[2] = Qe((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    E("fieldset", null, [
      E("div", FL, [
        VL,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newTemplate.name = a)
        }, null, 512), [
          [et, r.newTemplate.name]
        ])
      ]),
      E("div", zL, [
        HL,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newTemplate.identifier = a)
        }, null, 512), [
          [et, r.newTemplate.identifier]
        ])
      ]),
      E("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Template ", 8, WL)
    ])
  ], 32);
}
const jL = /* @__PURE__ */ Te($L, [["render", UL]]), KL = {
  name: "LaravelCmsAdminTemplates",
  components: {
    ListItem: BL,
    AddForm: jL
  },
  setup(n, { emit: e }) {
    const t = ig(), r = Ei("$cookies"), i = xe([]), o = xe(!1);
    async function a() {
      const h = await (await fetch("/api/cms-templates")).json();
      i.value = h.data, o.value = !0;
    }
    async function c(p) {
      const h = await fetch("/api/cms-templates", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": r.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify(p)
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
    async function u(p) {
      if (!(await fetch("/api/cms-templates/" + p, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": r.get("XSRF-TOKEN")
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
      var g = i.value.map((y) => y.id).indexOf(p);
      ~g && i.value.splice(g, 1);
    }
    return a(), {
      templatesSorted: De(() => qt.exports.sortBy(i.value || [], (p) => p.name)),
      loaded: o,
      onAdd: c,
      onDelete: u
    };
  }
}, qL = /* @__PURE__ */ E("h2", null, "Add Template", -1), JL = /* @__PURE__ */ E("h2", null, "Existing Templates", -1), GL = {
  key: 0,
  class: "table"
}, XL = { key: 1 }, YL = { key: 2 };
function ZL(n, e, t, r, i, o) {
  const a = be("add-form"), c = be("list-item");
  return F(), W(Ne, null, [
    qL,
    Je(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    JL,
    r.loaded && r.templatesSorted.length ? (F(), W("table", GL, [
      (F(!0), W(Ne, null, wt(r.templatesSorted, (u) => (F(), gt(c, {
        key: u.id,
        template: u,
        onDelete: r.onDelete
      }, null, 8, ["template", "onDelete"]))), 128))
    ])) : r.loaded ? (F(), W("p", XL, "There are no templates.")) : (F(), W("p", YL, "Loading..."))
  ], 64);
}
const QL = /* @__PURE__ */ Te(KL, [["render", ZL]]), e2 = (n, e) => {
  let t;
  return (...r) => {
    t && clearTimeout(t), t = setTimeout(() => {
      n(...r);
    }, e);
  };
}, t2 = {
  name: "LaravelCmsAdminTemplatesListItem",
  props: ["section"],
  emits: ["delete", "save"],
  setup(n, { emit: e }) {
    Xa(n.section, (i, o) => {
      r();
    });
    async function t() {
      e("delete", n.section.id);
    }
    const r = e2(() => {
      e("save", n.section);
    }, 1e3);
    return { onDeleteClick: t };
  }
}, n2 = { class: "form-group form-inline mx-2" }, r2 = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), i2 = { class: "form-group form-inline mx-2" }, o2 = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "identifier"
}, "Slug", -1);
function s2(n, e, t, r, i, o) {
  return F(), W("fieldset", null, [
    E("div", n2, [
      r2,
      Re(E("input", {
        class: "form-input",
        type: "text",
        name: "name",
        id: "name",
        "onUpdate:modelValue": e[0] || (e[0] = (a) => t.section.name = a)
      }, null, 512), [
        [et, t.section.name]
      ])
    ]),
    E("div", i2, [
      o2,
      Re(E("input", {
        class: "form-input",
        type: "text",
        name: "identifier",
        id: "identifier",
        "onUpdate:modelValue": e[1] || (e[1] = (a) => t.section.identifier = a)
      }, null, 512), [
        [et, t.section.identifier]
      ])
    ]),
    E("button", {
      class: "btn btn-link text-error mx-2",
      onClick: e[2] || (e[2] = Qe((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"]))
    }, " Delete ")
  ]);
}
const a2 = /* @__PURE__ */ Te(t2, [["render", s2]]), l2 = {
  name: "LaravelCmsAdminTemplateSectionAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = xe({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = De(() => t.value.name != null && t.value.identifier != null);
    return { newTemplateSection: t, onSubmit: r, valid: i };
  }
}, c2 = /* @__PURE__ */ E("legend", null, "Add Section", -1), u2 = { class: "form-group form-inline mx-2" }, f2 = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), d2 = { class: "form-group form-inline mx-2" }, p2 = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), h2 = ["disabled"];
function m2(n, e, t, r, i, o) {
  return F(), W("form", {
    onSubmit: e[2] || (e[2] = Qe((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    E("fieldset", null, [
      c2,
      E("div", u2, [
        f2,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newTemplateSection.name = a),
          required: ""
        }, null, 512), [
          [et, r.newTemplateSection.name]
        ])
      ]),
      E("div", d2, [
        p2,
        Re(E("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newTemplateSection.identifier = a)
        }, null, 512), [
          [et, r.newTemplateSection.identifier]
        ])
      ]),
      E("button", {
        class: "btn btn-link mx-2",
        disabled: !r.valid
      }, " Add Template Section ", 8, h2)
    ])
  ], 32);
}
const g2 = /* @__PURE__ */ Te(l2, [["render", m2]]), y2 = {
  name: "LaravelCmsAdminTemplateSections",
  components: {
    AddForm: g2,
    ListItem: a2
  },
  props: ["templateId"],
  setup(n) {
    const e = xe([]), t = xe(!1);
    async function r() {
      let u = "/api/cms-template-sections?" + new URLSearchParams({
        "q[]": ["cms_template_id[eq]=" + n.templateId]
      }).toString();
      const p = await (await fetch(u)).json();
      e.value = p.data, t.value = !0;
    }
    async function i(u) {
      if (!(await fetch("/api/cms-template-sections/" + u, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
      var p = e.value.map((h) => h.id).indexOf(u);
      ~p && e.value.splice(p, 1);
    }
    async function o(u) {
      const d = await fetch(
        "/api/cms-template-sections/" + u.id,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
          },
          method: "PUT",
          body: JSON.stringify(u)
        }
      ), p = await d.json();
      if (!d.ok) {
        de({
          title: p.message,
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
      const d = await fetch("/api/cms-template-sections", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify(u)
      }), p = await d.json();
      if (!d.ok) {
        de({
          title: p.message,
          type: "error"
        });
        return;
      }
      e.value.push(p.data), de({
        title: "New template section created.",
        type: "success"
      });
    }
    return r(), {
      sectionsSorted: De(() => qt.exports.sortBy(e.value || [], (u) => u.name)),
      loaded: t,
      onDelete: i,
      onSave: o,
      onAdd: a
    };
  }
}, v2 = { key: 0 }, b2 = /* @__PURE__ */ E("div", { class: "divider" }, null, -1), w2 = { key: 0 }, x2 = { key: 1 }, S2 = { key: 2 };
function _2(n, e, t, r, i, o) {
  const a = be("add-form"), c = be("list-item");
  return r.sectionsSorted ? (F(), W("fieldset", v2, [
    Je(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    b2,
    r.loaded && r.sectionsSorted.length ? (F(), W("div", w2, [
      (F(!0), W(Ne, null, wt(r.sectionsSorted, (u) => (F(), gt(c, {
        key: u.id,
        section: u,
        onDelete: r.onDelete,
        onSave: r.onSave
      }, null, 8, ["section", "onDelete", "onSave"]))), 128))
    ])) : r.loaded ? (F(), W("p", x2, "There are no templates sections.")) : (F(), W("p", S2, "Loading..."))
  ])) : Kt("", !0);
}
const k2 = /* @__PURE__ */ Te(y2, [["render", _2]]), C2 = {
  name: "LaravelCmsAdminTemplate",
  components: { TemplateSections: k2 },
  props: ["id"],
  setup(n) {
    const e = xe(null), t = xe(null);
    async function r() {
      const c = await (await fetch("/api/cms-templates/" + n.id)).json();
      e.value = c.data, t.value = Object.assign({}, e.value);
    }
    async function i() {
      const a = await fetch("/api/cms-templates/" + n.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
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
    const o = De(() => JSON.stringify(t.value) != JSON.stringify(e.value));
    return { template: e, onSubmit: i, saveEnabled: o };
  }
}, E2 = /* @__PURE__ */ E("h2", null, "Edit Template", -1), O2 = { key: 0 }, T2 = { class: "form-group form-inline mx-2" }, A2 = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), M2 = { class: "form-group form-inline mx-2" }, N2 = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), D2 = { class: "form-group form-inline mx-2" }, R2 = /* @__PURE__ */ E("label", {
  class: "form-label",
  for: "description"
}, "Description", -1), I2 = ["disabled"], P2 = /* @__PURE__ */ E("h2", null, "Template Sections", -1);
function L2(n, e, t, r, i, o) {
  const a = be("router-link"), c = be("template-sections");
  return F(), W(Ne, null, [
    E("p", null, [
      Je(a, { to: "/templates" }, {
        default: Pt(() => [
          jt("< Back")
        ]),
        _: 1
      })
    ]),
    E2,
    E("form", {
      onSubmit: e[3] || (e[3] = Qe((...u) => r.onSubmit && r.onSubmit(...u), ["prevent"]))
    }, [
      r.template ? (F(), W("fieldset", O2, [
        E("div", T2, [
          A2,
          Re(E("input", {
            class: "form-input",
            type: "text",
            name: "name",
            id: "name",
            "onUpdate:modelValue": e[0] || (e[0] = (u) => r.template.name = u)
          }, null, 512), [
            [et, r.template.name]
          ])
        ]),
        E("div", M2, [
          N2,
          Re(E("input", {
            class: "form-input",
            type: "text",
            name: "identifier",
            id: "identifier",
            "onUpdate:modelValue": e[1] || (e[1] = (u) => r.template.identifier = u)
          }, null, 512), [
            [et, r.template.identifier]
          ])
        ]),
        E("div", D2, [
          R2,
          Re(E("input", {
            class: "form-input",
            type: "text",
            name: "description",
            id: "description",
            "onUpdate:modelValue": e[2] || (e[2] = (u) => r.template.description = u)
          }, null, 512), [
            [et, r.template.description]
          ])
        ]),
        E("button", {
          class: "btn btn-link mx-2",
          disabled: !r.saveEnabled
        }, " Update ", 8, I2)
      ])) : Kt("", !0)
    ], 32),
    P2,
    E("form", null, [
      Je(c, { "template-id": t.id }, null, 8, ["template-id"])
    ])
  ], 64);
}
const B2 = /* @__PURE__ */ Te(C2, [["render", L2]]), $2 = [
  {
    path: "/",
    name: "Home",
    component: lh
  },
  {
    path: "/components",
    name: "Components",
    component: eE
  },
  {
    path: "/pages",
    name: "Pages",
    component: lh
  },
  {
    path: "/pages/:id",
    name: "Page",
    component: _L,
    props: (n) => ({ id: parseInt(n.params.id) })
  },
  {
    path: "/paths",
    name: "Paths",
    component: IL
  },
  {
    path: "/media",
    name: "Media",
    component: vE
  },
  {
    path: "/templates",
    name: "Templates",
    component: QL
  },
  {
    path: "/templates/:id",
    name: "Template",
    component: B2,
    props: (n) => ({ id: parseInt(n.params.id) })
  }
], F2 = pC({
  history: dk(),
  routes: $2
});
var tv = { exports: {} };
(function(n, e) {
  (function() {
    var t = {
      expires: "1d",
      path: "; path=/",
      domain: "",
      secure: "",
      sameSite: "; SameSite=Lax"
    }, r = {
      install: function(i, o) {
        o && this.config(o.expires, o.path, o.domain, o.secure, o.sameSite), i.prototype && (i.prototype.$cookies = this), i.config && i.config.globalProperties && (i.config.globalProperties.$cookies = this, i.provide("$cookies", this)), i.$cookies = this;
      },
      config: function(i, o, a, c, u) {
        t.expires = i || "1d", t.path = o ? "; path=" + o : "; path=/", t.domain = a ? "; domain=" + a : "", t.secure = c ? "; Secure" : "", t.sameSite = u ? "; SameSite=" + u : "; SameSite=Lax";
      },
      get: function(i) {
        var o = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        if (o && (o.substring(0, 1) === "{" && o.substring(o.length - 1, o.length) === "}" || o.substring(0, 1) === "[" && o.substring(o.length - 1, o.length) === "]"))
          try {
            o = JSON.parse(o);
          } catch {
            return o;
          }
        return o;
      },
      set: function(i, o, a, c, u, d, p) {
        if (i) {
          if (/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(i))
            throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: ' + i);
        } else
          throw new Error("Cookie name is not found in the first argument.");
        o && typeof o == "object" && (o = JSON.stringify(o));
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
        return document.cookie = encodeURIComponent(i) + "=" + encodeURIComponent(o) + h + (u ? "; domain=" + u : t.domain) + (c ? "; path=" + c : t.path) + (d == null ? t.secure : d ? "; Secure" : "") + (p == null ? t.sameSite : p ? "; SameSite=" + p : ""), this;
      },
      remove: function(i, o, a) {
        return !i || !this.isKey(i) ? !1 : (document.cookie = encodeURIComponent(i) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : t.domain) + (o ? "; path=" + o : t.path) + "; SameSite=Lax", !0);
      },
      isKey: function(i) {
        return new RegExp("(?:^|;\\s*)" + encodeURIComponent(i).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
      },
      keys: function() {
        if (!document.cookie)
          return [];
        for (var i = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), o = 0; o < i.length; o++)
          i[o] = decodeURIComponent(i[o]);
        return i;
      }
    };
    n.exports = r, typeof window < "u" && (window.$cookies = r);
  })();
})(tv);
const V2 = tv.exports;
const H2 = N_(V_).use(F2).use(LC).use(V2);
export {
  H2 as default
};
