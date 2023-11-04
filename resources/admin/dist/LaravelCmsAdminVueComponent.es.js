import { resolveComponent as le, openBlock as L, createElementBlock as z, createElementVNode as S, createVNode as Me, withCtx as ct, createTextVNode as xt, Fragment as Ve, shallowRef as Bm, unref as io, shallowReactive as C_, nextTick as $m, inject as Ei, defineComponent as lr, reactive as Pu, computed as Ee, h as Or, provide as Oc, ref as be, watch as Ga, getCurrentInstance as Lu, watchEffect as Fm, createBlock as dt, TransitionGroup as Vm, renderSlot as Xa, normalizeStyle as zp, resolveDynamicComponent as E_, renderList as St, normalizeClass as Mt, createCommentVNode as $t, withModifiers as Je, withDirectives as Ne, vModelText as Ze, onMounted as Bu, onBeforeUnmount as Ya, Teleport as O_, markRaw as T_, customRef as A_, toDisplayString as Ie, vModelSelect as wi, Suspense as M_, vShow as Hp, createApp as N_ } from "vue";
const xe = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, D_ = {
  name: "LaravelCmsAdminMenu"
};
function R_(n, e, t, r, i, o) {
  const a = le("router-link");
  return L(), z("ul", null, [
    S("li", null, [
      Me(a, { to: "/templates" }, {
        default: ct(() => [
          xt("Templates")
        ]),
        _: 1
      })
    ]),
    S("li", null, [
      Me(a, { to: "/pages" }, {
        default: ct(() => [
          xt("Pages")
        ]),
        _: 1
      })
    ]),
    S("li", null, [
      Me(a, { to: "/paths" }, {
        default: ct(() => [
          xt("Paths")
        ]),
        _: 1
      })
    ]),
    S("li", null, [
      Me(a, { to: "/components" }, {
        default: ct(() => [
          xt("Components")
        ]),
        _: 1
      })
    ]),
    S("li", null, [
      Me(a, { to: "/media" }, {
        default: ct(() => [
          xt("Media")
        ]),
        _: 1
      })
    ])
  ]);
}
const I_ = /* @__PURE__ */ xe(D_, [["render", R_]]);
const P_ = {
  name: "LaravelCmsAdminVueComponent",
  components: {
    AdminMenu: I_
  }
}, L_ = { class: "cms-container" }, B_ = { class: "cms-menu" }, $_ = { class: "cms-content" };
function F_(n, e, t, r, i, o) {
  const a = le("notifications"), c = le("admin-menu"), u = le("router-view");
  return L(), z(Ve, null, [
    Me(a),
    S("div", L_, [
      S("div", B_, [
        Me(c)
      ]),
      S("div", $_, [
        Me(u)
      ])
    ])
  ], 64);
}
const V_ = /* @__PURE__ */ xe(P_, [["render", F_]]);
function z_() {
  return zm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zm() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const H_ = typeof Proxy == "function", W_ = "devtools-plugin:setup", U_ = "plugin:settings:set";
let Gi, su;
function j_() {
  var n;
  return Gi !== void 0 || (typeof window < "u" && window.performance ? (Gi = !0, su = window.performance) : typeof global < "u" && ((n = global.perf_hooks) === null || n === void 0 ? void 0 : n.performance) ? (Gi = !0, su = global.perf_hooks.performance) : Gi = !1), Gi;
}
function K_() {
  return j_() ? su.now() : Date.now();
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
  const t = n, r = zm(), i = z_(), o = H_ && t.enableEarlyProxy;
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
const Cr = typeof window < "u";
function G_(n) {
  return n.__esModule || n[Symbol.toStringTag] === "Module";
}
const $e = Object.assign;
function Tc(n, e) {
  const t = {};
  for (const r in e) {
    const i = e[r];
    t[r] = bn(i) ? i.map(n) : n(i);
  }
  return t;
}
const ns = () => {
}, bn = Array.isArray;
function Ae(n) {
  const e = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + n].concat(e));
}
const X_ = /\/$/, Y_ = (n) => n.replace(X_, "");
function Ac(n, e, t = "/") {
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
  return r > -1 && r === i && Qr(e.matched[r], t.matched[i]) && Hm(e.params, t.params) && n(e.query) === n(t.query) && e.hash === t.hash;
}
function Qr(n, e) {
  return (n.aliasOf || n) === (e.aliasOf || e);
}
function Hm(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (const t in n)
    if (!Q_(n[t], e[t]))
      return !1;
  return !0;
}
function Q_(n, e) {
  return bn(n) ? jp(n, e) : bn(e) ? jp(e, n) : n === e;
}
function jp(n, e) {
  return bn(e) ? n.length === e.length && n.every((t, r) => t === e[r]) : n.length === 1 && n[0] === e;
}
function ek(n, e) {
  if (n.startsWith("/"))
    return n;
  if (process.env.NODE_ENV !== "production" && !e.startsWith("/"))
    return Ae(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${e}". It should look like "/${e}".`), n;
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
    if (Cr) {
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
          Ae(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Ae(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const i = typeof t == "string" ? r ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
    if (!i) {
      process.env.NODE_ENV !== "production" && Ae(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);
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
const au = /* @__PURE__ */ new Map();
function sk(n, e) {
  au.set(n, e);
}
function ak(n) {
  const e = au.get(n);
  return au.delete(n), e;
}
let lk = () => location.protocol + "//" + location.host;
function Wm(n, e) {
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
    const y = Wm(n, location), b = t.value, k = e.value;
    let C = 0;
    if (g) {
      if (t.value = y, e.value = g, a && a === b) {
        a = null;
        return;
      }
      C = k ? g.position - k.position : 0;
    } else
      r(y);
    i.forEach((A) => {
      A(t.value, b, {
        delta: C,
        type: ds.pop,
        direction: C ? C > 0 ? rs.forward : rs.back : rs.unknown
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
    !g.state || g.replaceState($e({}, g.state, { scroll: Za() }), "");
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
    value: Wm(n, t)
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
      process.env.NODE_ENV !== "production" ? Ae("Error with push/replace State", y) : console.error(y), t[p ? "replace" : "assign"](g);
    }
  }
  function a(u, d) {
    const p = $e({}, e.state, qp(
      i.value.back,
      u,
      i.value.forward,
      !0
    ), d, { position: i.value.position });
    o(u, p, !0), r.value = u;
  }
  function c(u, d) {
    const p = $e(
      {},
      i.value,
      e.state,
      {
        forward: u,
        scroll: Za()
      }
    );
    process.env.NODE_ENV !== "production" && !e.state && Ae(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), o(p.current, p, !0);
    const h = $e({}, qp(r.value, u, null), { position: p.position + 1 }, d);
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
  const i = $e({
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
  return n = location.host ? n || location.pathname + location.search : "", n.includes("#") || (n += "#"), process.env.NODE_ENV !== "production" && !n.endsWith("#/") && !n.endsWith("#") && Ae(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/, "#")}".`), fk(n);
}
function pk(n) {
  return typeof n == "string" || n && typeof n == "object";
}
function Um(n) {
  return typeof n == "string" || typeof n == "symbol";
}
const Vr = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, lu = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
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
  return process.env.NODE_ENV !== "production" ? $e(new Error(hk[n](e)), {
    type: n,
    [lu]: !0
  }, e) : $e(new Error(), {
    type: n,
    [lu]: !0
  }, e);
}
function xr(n, e) {
  return n instanceof Error && lu in n && (e == null || !!(n.type & e));
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
  const t = $e({}, yk, e), r = [];
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
        const { value: b, repeatable: k, optional: C, regexp: A } = g;
        o.push({
          name: b,
          repeatable: k,
          optional: C
        });
        const D = A || Gp;
        if (D !== Gp) {
          y += 10;
          try {
            new RegExp(`(${D})`);
          } catch (E) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${D}): ` + E.message);
          }
        }
        let W = k ? `((?:${D})(?:/(?:${D}))*)` : `(${D})`;
        h || (W = C && d.length < 2 ? `(?:/${W})` : "/" + W), C && (W += "?"), i += W, y += 20, C && (y += -8), k && (y += -20), D === ".*" && (y += -50);
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
          const { value: b, repeatable: k, optional: C } = y, A = b in d ? d[b] : "";
          if (bn(A) && !k)
            throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
          const D = bn(A) ? A.join("/") : A;
          if (!D)
            if (C)
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
      o.has(a.name) && Ae(`Found duplicated params with name "${a.name}" for path "${n.path}". Only the last one will be available on "$route.params".`), o.add(a.name);
  }
  const i = $e(r, {
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
    const k = Qp(e, p), C = [
      b
    ];
    if ("alias" in p) {
      const W = typeof p.alias == "string" ? [p.alias] : p.alias;
      for (const E of W)
        C.push($e({}, b, {
          components: g ? g.record.components : b.components,
          path: E,
          aliasOf: g ? g.record : b
        }));
    }
    let A, D;
    for (const W of C) {
      const { path: E } = W;
      if (h && E[0] !== "/") {
        const q = h.record.path, $ = q[q.length - 1] === "/" ? "" : "/";
        W.path = h.record.path + (E && $ + E);
      }
      if (process.env.NODE_ENV !== "production" && W.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (A = Ck(W, h, k), process.env.NODE_ENV !== "production" && h && E[0] === "/" && Dk(A, h), g ? (g.alias.push(A), process.env.NODE_ENV !== "production" && Mk(g, A)) : (D = D || A, D !== A && D.alias.push(A), y && p.name && !Zp(A) && a(p.name)), b.children) {
        const q = b.children;
        for (let $ = 0; $ < q.length; $++)
          o(q[$], A, g && g.children[$]);
      }
      g = g || A, (A.record.components && Object.keys(A.record.components).length || A.record.name || A.record.redirect) && u(A);
    }
    return D ? () => {
      a(D);
    } : ns;
  }
  function a(p) {
    if (Um(p)) {
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
    for (; h < t.length && xk(p, t[h]) >= 0 && (p.record.path !== t[h].record.path || !jm(p, t[h])); )
      h++;
    t.splice(h, 0, p), p.record.name && !Zp(p) && r.set(p.record.name, p);
  }
  function d(p, h) {
    let g, y = {}, b, k;
    if ("name" in p && p.name) {
      if (g = r.get(p.name), !g)
        throw co(1, {
          location: p
        });
      if (process.env.NODE_ENV !== "production") {
        const D = Object.keys(p.params || {}).filter((W) => !g.keys.find((E) => E.name === W));
        D.length && Ae(`Discarded invalid param(s) "${D.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      k = g.record.name, y = $e(
        Yp(
          h.params,
          g.keys.filter((D) => !D.optional).map((D) => D.name)
        ),
        p.params && Yp(p.params, g.keys.map((D) => D.name))
      ), b = g.stringify(y);
    } else if ("path" in p)
      b = p.path, process.env.NODE_ENV !== "production" && !b.startsWith("/") && Ae(`The Matcher cannot resolve relative paths but received "${b}". Unless you directly called \`matcher.resolve("${b}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = t.find((D) => D.re.test(b)), g && (y = g.parse(b), k = g.record.name);
    else {
      if (g = h.name ? r.get(h.name) : t.find((D) => D.re.test(h.path)), !g)
        throw co(1, {
          location: p,
          currentLocation: h
        });
      k = g.record.name, y = $e({}, h.params, p.params), b = g.stringify(y);
    }
    const C = [];
    let A = g;
    for (; A; )
      C.unshift(A.record), A = A.parent;
    return {
      name: k,
      path: b,
      params: y,
      matched: C,
      meta: Ak(C)
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
  return n.reduce((e, t) => $e(e, t.meta), {});
}
function Qp(n, e) {
  const t = {};
  for (const r in n)
    t[r] = r in e ? e[r] : n[r];
  return t;
}
function cu(n, e) {
  return n.name === e.name && n.optional === e.optional && n.repeatable === e.repeatable;
}
function Mk(n, e) {
  for (const t of n.keys)
    if (!t.optional && !e.keys.find(cu.bind(null, t)))
      return Ae(`Alias "${e.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);
  for (const t of e.keys)
    if (!t.optional && !n.keys.find(cu.bind(null, t)))
      return Ae(`Alias "${e.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);
}
function Nk(n, e) {
  e && e.record.name && !n.name && !n.path && Ae(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Dk(n, e) {
  for (const t of e.keys)
    if (!n.keys.find(cu.bind(null, t)))
      return Ae(`Absolute path "${n.record.path}" must have the exact same param named "${t.name}" as its parent "${e.record.path}".`);
}
function jm(n, e) {
  return e.children.some((t) => t === n || jm(n, t));
}
const Km = /#/g, Rk = /&/g, Ik = /\//g, Pk = /=/g, Lk = /\?/g, qm = /\+/g, Bk = /%5B/g, $k = /%5D/g, Jm = /%5E/g, Fk = /%60/g, Gm = /%7B/g, Vk = /%7C/g, Xm = /%7D/g, zk = /%20/g;
function $u(n) {
  return encodeURI("" + n).replace(Vk, "|").replace(Bk, "[").replace($k, "]");
}
function Hk(n) {
  return $u(n).replace(Gm, "{").replace(Xm, "}").replace(Jm, "^");
}
function uu(n) {
  return $u(n).replace(qm, "%2B").replace(zk, "+").replace(Km, "%23").replace(Rk, "%26").replace(Fk, "`").replace(Gm, "{").replace(Xm, "}").replace(Jm, "^");
}
function Wk(n) {
  return uu(n).replace(Pk, "%3D");
}
function Uk(n) {
  return $u(n).replace(Km, "%23").replace(Lk, "%3F");
}
function jk(n) {
  return n == null ? "" : Uk(n).replace(Ik, "%2F");
}
function ps(n) {
  try {
    return decodeURIComponent("" + n);
  } catch {
    process.env.NODE_ENV !== "production" && Ae(`Error decoding "${n}". Using original value`);
  }
  return "" + n;
}
function Kk(n) {
  const e = {};
  if (n === "" || n === "?")
    return e;
  const r = (n[0] === "?" ? n.slice(1) : n).split("&");
  for (let i = 0; i < r.length; ++i) {
    const o = r[i].replace(qm, " "), a = o.indexOf("="), c = ps(a < 0 ? o : o.slice(0, a)), u = a < 0 ? null : ps(o.slice(a + 1));
    if (c in e) {
      let d = e[c];
      bn(d) || (d = e[c] = [d]), d.push(u);
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
    (bn(r) ? r.map((o) => o && uu(o)) : [r && uu(r)]).forEach((o) => {
      o !== void 0 && (e += (e.length ? "&" : "") + t, o != null && (e += "=" + o));
    });
  }
  return e;
}
function qk(n) {
  const e = {};
  for (const t in n) {
    const r = n[t];
    r !== void 0 && (e[t] = bn(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return e;
}
const Jk = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), th = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Qa = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Ym = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), fu = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
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
function Hr(n, e, t, r, i) {
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
        p = p.then((g) => u._called ? g : (Ae(h), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        Ae(h), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    p.catch((h) => c(h));
  });
}
function Gk(n, e, t) {
  let r = 0;
  return function() {
    r++ === 1 && Ae(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), n._called = !0, r === 1 && n.apply(null, arguments);
  };
}
function Mc(n, e, t, r) {
  const i = [];
  for (const o of n) {
    process.env.NODE_ENV !== "production" && !o.components && !o.children.length && Ae(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in o.components) {
      let c = o.components[a];
      if (process.env.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Ae(`Component "${a}" in record with path "${o.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Ae(`Component "${a}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Ae(`Component "${a}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(e !== "beforeRouteEnter" && !o.instances[a]))
        if (Xk(c)) {
          const d = (c.__vccOpts || c)[e];
          d && i.push(Hr(d, t, r, o, a));
        } else {
          let u = c();
          process.env.NODE_ENV !== "production" && !("catch" in u) && (Ae(`Component "${a}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), i.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));
            const p = G_(d) ? d.default : d;
            o.components[a] = p;
            const g = (p.__vccOpts || p)[e];
            return g && Hr(g, t, r, o, a)();
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
  const e = Ei(Qa), t = Ei(Ym), r = Ee(() => e.resolve(io(n.to))), i = Ee(() => {
    const { matched: u } = r.value, { length: d } = u, p = u[d - 1], h = t.matched;
    if (!p || !h.length)
      return -1;
    const g = h.findIndex(Qr.bind(null, p));
    if (g > -1)
      return g;
    const y = rh(u[d - 2]);
    return d > 1 && rh(p) === y && h[h.length - 1].path !== y ? h.findIndex(Qr.bind(null, u[d - 2])) : g;
  }), o = Ee(() => i.value > -1 && eC(t.params, r.value.params)), a = Ee(() => i.value > -1 && i.value === t.matched.length - 1 && Hm(t.params, r.value.params));
  function c(u = {}) {
    return Qk(u) ? e[io(n.replace) ? "replace" : "push"](
      io(n.to)
    ).catch(ns) : Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || !1) && Cr) {
    const u = Lu();
    if (u) {
      const d = {
        route: r.value,
        isActive: o.value,
        isExactActive: a.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Fm(() => {
        d.route = r.value, d.isActive = o.value, d.isExactActive = a.value;
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: Ee(() => r.value.href),
    isActive: o,
    isExactActive: a,
    navigate: c
  };
}
const Yk = /* @__PURE__ */ lr({
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
    const t = Pu(nh(n)), { options: r } = Ei(Qa), i = Ee(() => ({
      [ih(n.activeClass, r.linkActiveClass, "router-link-active")]: t.isActive,
      [ih(n.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive
    }));
    return () => {
      const o = e.default && e.default(t);
      return n.custom ? o : Or("a", {
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
    } else if (!bn(i) || i.length !== r.length || r.some((o, a) => o !== i[a]))
      return !1;
  }
  return !0;
}
function rh(n) {
  return n ? n.aliasOf ? n.aliasOf.path : n.path : "";
}
const ih = (n, e, t) => n != null ? n : e != null ? e : t, tC = /* @__PURE__ */ lr({
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
    const r = Ei(fu), i = Ee(() => n.route || r.value), o = Ei(th, 0), a = Ee(() => {
      let d = io(o);
      const { matched: p } = i.value;
      let h;
      for (; (h = p[d]) && !h.components; )
        d++;
      return d;
    }), c = Ee(() => i.value.matched[a.value]);
    Oc(th, Ee(() => a.value + 1)), Oc(Jk, c), Oc(fu, i);
    const u = be();
    return Ga(() => [u.value, c.value, n.name], ([d, p, h], [g, y, b]) => {
      p && (p.instances[h] = d, y && y !== p && d && d === g && (p.leaveGuards.size || (p.leaveGuards = y.leaveGuards), p.updateGuards.size || (p.updateGuards = y.updateGuards))), d && p && (!y || !Qr(p, y) || !g) && (p.enterCallbacks[h] || []).forEach((k) => k(d));
    }, { flush: "post" }), () => {
      const d = i.value, p = n.name, h = c.value, g = h && h.components[p];
      if (!g)
        return oh(t.default, { Component: g, route: d });
      const y = h.props[p], b = y ? y === !0 ? d.params : typeof y == "function" ? y(d) : y : null, C = Or(g, $e({}, b, e, {
        onVnodeUnmounted: (A) => {
          A.component.isUnmounted && (h.instances[p] = null);
        },
        ref: u
      }));
      if ((process.env.NODE_ENV !== "production" || !1) && Cr && C.ref) {
        const A = {
          depth: a.value,
          name: h.name,
          path: h.path,
          meta: h.meta
        };
        (bn(C.ref) ? C.ref.map((W) => W.i) : [C.ref.i]).forEach((W) => {
          W.__vrv_devtools = A;
        });
      }
      return oh(t.default, { Component: C, route: d }) || C;
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
  const n = Lu(), e = n.parent && n.parent.type.name, t = n.parent && n.parent.subTree && n.parent.subTree.type;
  if (e && (e === "KeepAlive" || e.includes("Transition")) && typeof t == "object" && t.name === "RouterView") {
    const r = e === "KeepAlive" ? "keep-alive" : "transition";
    Ae(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function Go(n, e) {
  const t = $e({}, n, {
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
          backgroundColor: Zm
        });
      }
      bn(h.__vrl_devtools) && (h.__devtoolsApi = i, h.__vrl_devtools.forEach((g) => {
        let y = tg, b = "";
        g.isExactActive ? (y = eg, b = "This is exactly active") : g.isActive && (y = Qm, b = "This link is active"), p.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: b,
          backgroundColor: y
        });
      }));
    }), Ga(e.currentRoute, () => {
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
      h.forEach(ig), p.filter && (h = h.filter((g) => du(g, p.filter.toLowerCase()))), h.forEach((g) => rg(g, e.currentRoute.value)), p.rootNodes = h.map(ng);
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
const Zm = 15485081, Qm = 2450411, eg = 8702998, lC = 2282478, tg = 16486972, cC = 6710886;
function ng(n) {
  const e = [], { record: t } = n;
  t.name != null && e.push({
    label: String(t.name),
    textColor: 0,
    backgroundColor: lC
  }), t.aliasOf && e.push({
    label: "alias",
    textColor: 0,
    backgroundColor: tg
  }), n.__vd_match && e.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Zm
  }), n.__vd_exactActive && e.push({
    label: "exact",
    textColor: 0,
    backgroundColor: eg
  }), n.__vd_active && e.push({
    label: "active",
    textColor: 0,
    backgroundColor: Qm
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
    children: n.children.map(ng)
  };
}
let uC = 0;
const fC = /^\/(.*)\/([a-z]*)$/;
function rg(n, e) {
  const t = e.matched.length && Qr(e.matched[e.matched.length - 1], n.record);
  n.__vd_exactActive = n.__vd_active = t, t || (n.__vd_active = e.matched.some((r) => Qr(r, n.record))), n.children.forEach((r) => rg(r, e));
}
function ig(n) {
  n.__vd_match = !1, n.children.forEach(ig);
}
function du(n, e) {
  const t = String(n.re).match(fC);
  if (n.__vd_match = !1, !t || t.length < 3)
    return !1;
  if (new RegExp(t[1].replace(/\$$/, ""), t[2]).test(e))
    return n.children.forEach((a) => du(a, e)), n.record.path !== "/" || e === "/" ? (n.__vd_match = n.re.test(e), !0) : !1;
  const i = n.record.path.toLowerCase(), o = ps(i);
  return !e.startsWith("/") && (o.includes(e) || i.includes(e)) || o.startsWith(e) || i.startsWith(e) || n.record.name && String(n.record.name).includes(e) ? !0 : n.children.some((a) => du(a, e));
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
  const o = Jo(), a = Jo(), c = Jo(), u = Bm(Vr);
  let d = Vr;
  Cr && n.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const p = Tc.bind(null, (R) => "" + R), h = Tc.bind(null, jk), g = Tc.bind(null, ps);
  function y(R, U) {
    let j, G;
    return Um(R) ? (j = e.getRecordMatcher(R), G = U) : G = R, e.addRoute(G, j);
  }
  function b(R) {
    const U = e.getRecordMatcher(R);
    U ? e.removeRoute(U) : process.env.NODE_ENV !== "production" && Ae(`Cannot remove non-existent route "${String(R)}"`);
  }
  function k() {
    return e.getRoutes().map((R) => R.record);
  }
  function C(R) {
    return !!e.getRecordMatcher(R);
  }
  function A(R, U) {
    if (U = $e({}, U || u.value), typeof R == "string") {
      const ne = Ac(t, R, U.path), De = e.resolve({ path: ne.path }, U), Ht = i.createHref(ne.fullPath);
      return process.env.NODE_ENV !== "production" && (Ht.startsWith("//") ? Ae(`Location "${R}" resolved to "${Ht}". A resolved location cannot start with multiple slashes.`) : De.matched.length || Ae(`No match found for location with path "${R}"`)), $e(ne, De, {
        params: g(De.params),
        hash: ps(ne.hash),
        redirectedFrom: void 0,
        href: Ht
      });
    }
    let j;
    if ("path" in R)
      process.env.NODE_ENV !== "production" && "params" in R && !("name" in R) && Object.keys(R.params).length && Ae(`Path "${R.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), j = $e({}, R, {
        path: Ac(t, R.path, U.path).path
      });
    else {
      const ne = $e({}, R.params);
      for (const De in ne)
        ne[De] == null && delete ne[De];
      j = $e({}, R, {
        params: h(ne)
      }), U.params = h(U.params);
    }
    const G = e.resolve(j, U), de = R.hash || "";
    process.env.NODE_ENV !== "production" && de && !de.startsWith("#") && Ae(`A \`hash\` should always start with the character "#". Replace "${de}" with "#${de}".`), G.params = p(g(G.params));
    const He = Z_(r, $e({}, R, {
      hash: Hk(de),
      path: G.path
    })), ce = i.createHref(He);
    return process.env.NODE_ENV !== "production" && (ce.startsWith("//") ? Ae(`Location "${R}" resolved to "${ce}". A resolved location cannot start with multiple slashes.`) : G.matched.length || Ae(`No match found for location with path "${"path" in R ? R.path : R}"`)), $e({
      fullPath: He,
      hash: de,
      query: r === eh ? qk(R.query) : R.query || {}
    }, G, {
      redirectedFrom: void 0,
      href: ce
    });
  }
  function D(R) {
    return typeof R == "string" ? Ac(t, R, u.value.path) : $e({}, R);
  }
  function W(R, U) {
    if (d !== R)
      return co(8, {
        from: U,
        to: R
      });
  }
  function E(R) {
    return te(R);
  }
  function q(R) {
    return E($e(D(R), { replace: !0 }));
  }
  function $(R) {
    const U = R.matched[R.matched.length - 1];
    if (U && U.redirect) {
      const { redirect: j } = U;
      let G = typeof j == "function" ? j(R) : j;
      if (typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = D(G) : { path: G }, G.params = {}), process.env.NODE_ENV !== "production" && !("path" in G) && !("name" in G))
        throw Ae(`Invalid redirect found:
${JSON.stringify(G, null, 2)}
 when navigating to "${R.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return $e({
        query: R.query,
        hash: R.hash,
        params: "path" in G ? {} : R.params
      }, G);
    }
  }
  function te(R, U) {
    const j = d = A(R), G = u.value, de = R.state, He = R.force, ce = R.replace === !0, ne = $(j);
    if (ne)
      return te(
        $e(D(ne), {
          state: typeof ne == "object" ? $e({}, de, ne.state) : de,
          force: He,
          replace: ce
        }),
        U || j
      );
    const De = j;
    De.redirectedFrom = U;
    let Ht;
    return !He && Up(r, G, j) && (Ht = co(16, { to: De, from: G }), it(
      G,
      G,
      !0,
      !1
    )), (Ht ? Promise.resolve(Ht) : ke(De, G)).catch((Le) => xr(Le) ? xr(Le, 2) ? Le : ht(Le) : ze(Le, De, G)).then((Le) => {
      if (Le) {
        if (xr(Le, 2))
          return process.env.NODE_ENV !== "production" && Up(r, A(Le.to), De) && U && (U._count = U._count ? U._count + 1 : 1) > 30 ? (Ae(`Detected a possibly infinite redirection in a navigation guard when going from "${G.fullPath}" to "${De.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : te(
            $e({
              replace: ce
            }, D(Le.to), {
              state: typeof Le.to == "object" ? $e({}, de, Le.to.state) : de,
              force: He
            }),
            U || De
          );
      } else
        Le = je(De, G, !0, ce, de);
      return Ue(De, G, Le), Le;
    });
  }
  function _e(R, U) {
    const j = W(R, U);
    return j ? Promise.reject(j) : Promise.resolve();
  }
  function Z(R) {
    const U = It.values().next().value;
    return U && typeof U.runWithContext == "function" ? U.runWithContext(R) : R();
  }
  function ke(R, U) {
    let j;
    const [G, de, He] = hC(R, U);
    j = Mc(G.reverse(), "beforeRouteLeave", R, U);
    for (const ne of G)
      ne.leaveGuards.forEach((De) => {
        j.push(Hr(De, R, U));
      });
    const ce = _e.bind(null, R, U);
    return j.push(ce), st(j).then(() => {
      j = [];
      for (const ne of o.list())
        j.push(Hr(ne, R, U));
      return j.push(ce), st(j);
    }).then(() => {
      j = Mc(de, "beforeRouteUpdate", R, U);
      for (const ne of de)
        ne.updateGuards.forEach((De) => {
          j.push(Hr(De, R, U));
        });
      return j.push(ce), st(j);
    }).then(() => {
      j = [];
      for (const ne of He)
        if (ne.beforeEnter)
          if (bn(ne.beforeEnter))
            for (const De of ne.beforeEnter)
              j.push(Hr(De, R, U));
          else
            j.push(Hr(ne.beforeEnter, R, U));
      return j.push(ce), st(j);
    }).then(() => (R.matched.forEach((ne) => ne.enterCallbacks = {}), j = Mc(He, "beforeRouteEnter", R, U), j.push(ce), st(j))).then(() => {
      j = [];
      for (const ne of a.list())
        j.push(Hr(ne, R, U));
      return j.push(ce), st(j);
    }).catch((ne) => xr(ne, 8) ? ne : Promise.reject(ne));
  }
  function Ue(R, U, j) {
    c.list().forEach((G) => Z(() => G(R, U, j)));
  }
  function je(R, U, j, G, de) {
    const He = W(R, U);
    if (He)
      return He;
    const ce = U === Vr, ne = Cr ? history.state : {};
    j && (G || ce ? i.replace(R.fullPath, $e({
      scroll: ce && ne && ne.scroll
    }, de)) : i.push(R.fullPath, de)), u.value = R, it(R, U, j, ce), ht();
  }
  let Pe;
  function bt() {
    Pe || (Pe = i.listen((R, U, j) => {
      if (!ot.listening)
        return;
      const G = A(R), de = $(G);
      if (de) {
        te($e(de, { replace: !0 }), G).catch(ns);
        return;
      }
      d = G;
      const He = u.value;
      Cr && sk(Kp(He.fullPath, j.delta), Za()), ke(G, He).catch((ce) => xr(ce, 12) ? ce : xr(ce, 2) ? (te(
        ce.to,
        G
      ).then((ne) => {
        xr(ne, 20) && !j.delta && j.type === ds.pop && i.go(-1, !1);
      }).catch(ns), Promise.reject()) : (j.delta && i.go(-j.delta, !1), ze(ce, G, He))).then((ce) => {
        ce = ce || je(
          G,
          He,
          !1
        ), ce && (j.delta && !xr(ce, 8) ? i.go(-j.delta, !1) : j.type === ds.pop && xr(ce, 20) && i.go(-1, !1)), Ue(G, He, ce);
      }).catch(ns);
    }));
  }
  let pt = Jo(), rt = Jo(), Ke;
  function ze(R, U, j) {
    ht(R);
    const G = rt.list();
    return G.length ? G.forEach((de) => de(R, U, j)) : (process.env.NODE_ENV !== "production" && Ae("uncaught error during route navigation:"), console.error(R)), Promise.reject(R);
  }
  function Qt() {
    return Ke && u.value !== Vr ? Promise.resolve() : new Promise((R, U) => {
      pt.add([R, U]);
    });
  }
  function ht(R) {
    return Ke || (Ke = !R, bt(), pt.list().forEach(([U, j]) => R ? j(R) : U()), pt.reset()), R;
  }
  function it(R, U, j, G) {
    const { scrollBehavior: de } = n;
    if (!Cr || !de)
      return Promise.resolve();
    const He = !j && ak(Kp(R.fullPath, 0)) || (G || !j) && history.state && history.state.scroll || null;
    return $m().then(() => de(R, U, He)).then((ce) => ce && ok(ce)).catch((ce) => ze(ce, R, U));
  }
  const Rt = (R) => i.go(R);
  let un;
  const It = /* @__PURE__ */ new Set(), ot = {
    currentRoute: u,
    listening: !0,
    addRoute: y,
    removeRoute: b,
    hasRoute: C,
    getRoutes: k,
    resolve: A,
    options: n,
    push: E,
    replace: q,
    go: Rt,
    back: () => Rt(-1),
    forward: () => Rt(1),
    beforeEach: o.add,
    beforeResolve: a.add,
    afterEach: c.add,
    onError: rt.add,
    isReady: Qt,
    install(R) {
      const U = this;
      R.component("RouterLink", Zk), R.component("RouterView", nC), R.config.globalProperties.$router = U, Object.defineProperty(R.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => io(u)
      }), Cr && !un && u.value === Vr && (un = !0, E(i.location).catch((de) => {
        process.env.NODE_ENV !== "production" && Ae("Unexpected error when starting the router:", de);
      }));
      const j = {};
      for (const de in Vr)
        Object.defineProperty(j, de, {
          get: () => u.value[de],
          enumerable: !0
        });
      R.provide(Qa, U), R.provide(Ym, C_(j)), R.provide(fu, u);
      const G = R.unmount;
      It.add(R), R.unmount = function() {
        It.delete(R), It.size < 1 && (d = Vr, Pe && Pe(), Pe = null, u.value = Vr, un = !1, Ke = !1), G();
      }, (process.env.NODE_ENV !== "production" || !1) && Cr && oC(R, U, e);
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
    c && (n.matched.find((d) => Qr(d, c)) ? r.push(c) : t.push(c));
    const u = n.matched[a];
    u && (e.matched.find((d) => Qr(d, u)) || i.push(u));
  }
  return [t, r, i];
}
function og() {
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
const Ma = mC(), sg = /* @__PURE__ */ new Map(), sh = {
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
}, wC = lr({
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
  return L(), dt(Vm, {
    tag: "span",
    css: !1,
    onEnter: n.enter,
    onLeave: n.leave,
    onAfterLeave: n.afterLeave
  }, {
    default: ct(() => [
      Xa(n.$slots, "default")
    ]),
    _: 3
  }, 8, ["onEnter", "onLeave", "onAfterLeave"]);
}
const SC = /* @__PURE__ */ Fu(wC, [["render", xC]]), _C = lr({
  name: "css-group",
  inheritAttrs: !1,
  props: {
    name: { type: String, required: !0 }
  }
});
function kC(n, e, t, r, i, o) {
  return L(), dt(Vm, {
    tag: "span",
    name: n.name
  }, {
    default: ct(() => [
      Xa(n.$slots, "default")
    ]),
    _: 3
  }, 8, ["name"]);
}
const CC = /* @__PURE__ */ Fu(_C, [["render", kC]]), Dc = "[-+]?[0-9]*.?[0-9]+", ah = [
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
}, TC = lr({
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
  emits: ["click", "destroy", "start"],
  data() {
    return {
      list: [],
      velocity: sg.get("velocity"),
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
  return L(), z("div", {
    class: "vue-notification-group",
    style: zp(n.styles)
  }, [
    (L(), dt(E_(n.componentName), {
      name: n.animationName,
      onEnter: n.enter,
      onLeave: n.leave,
      onAfterLeave: n.clean
    }, {
      default: ct(() => [
        (L(!0), z(Ve, null, St(n.active, (a) => (L(), z("div", {
          key: a.id,
          class: "vue-notification-wrapper",
          style: zp(n.notifyWrapperStyle(a)),
          "data-id": a.id,
          onMouseenter: e[0] || (e[0] = (...c) => n.pauseTimeout && n.pauseTimeout(...c)),
          onMouseleave: e[1] || (e[1] = (...c) => n.resumeTimeout && n.resumeTimeout(...c))
        }, [
          Xa(n.$slots, "body", {
            class: Mt([n.classes, a.type]),
            item: a,
            close: () => n.destroy(a)
          }, () => [
            S("div", {
              class: Mt(n.notifyClass(a)),
              onClick: (c) => n.destroyIfNecessary(a)
            }, [
              a.title ? (L(), z("div", {
                key: 0,
                class: "notification-title",
                innerHTML: a.title
              }, null, 8, NC)) : $t("", !0),
              S("div", {
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
const IC = /* @__PURE__ */ Fu(TC, [["render", RC]]), fe = (n) => {
  typeof n == "string" && (n = { title: "", text: n }), typeof n == "object" && Ma.emit("add", n);
};
fe.close = (n) => {
  Ma.emit("close", n);
};
function PC(n, e = {}) {
  Object.entries(e).forEach((r) => sg.set(...r));
  const t = e.name || "notify";
  n.config.globalProperties["$" + t] = fe, n.component(e.componentName || "Notifications", IC);
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
var Xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Jt = { exports: {} };
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
    var t, r = "4.17.21", i = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", a = "Expected a function", c = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", d = 500, p = "__lodash_placeholder__", h = 1, g = 2, y = 4, b = 1, k = 2, C = 1, A = 2, D = 4, W = 8, E = 16, q = 32, $ = 64, te = 128, _e = 256, Z = 512, ke = 30, Ue = "...", je = 800, Pe = 16, bt = 1, pt = 2, rt = 3, Ke = 1 / 0, ze = 9007199254740991, Qt = 17976931348623157e292, ht = 0 / 0, it = 4294967295, Rt = it - 1, un = it >>> 1, It = [
      ["ary", te],
      ["bind", C],
      ["bindKey", A],
      ["curry", W],
      ["curryRight", E],
      ["flip", Z],
      ["partial", q],
      ["partialRight", $],
      ["rearg", _e]
    ], ot = "[object Arguments]", st = "[object Array]", R = "[object AsyncFunction]", U = "[object Boolean]", j = "[object Date]", G = "[object DOMException]", de = "[object Error]", He = "[object Function]", ce = "[object GeneratorFunction]", ne = "[object Map]", De = "[object Number]", Ht = "[object Null]", Le = "[object Object]", oi = "[object Promise]", Ni = "[object Proxy]", Wt = "[object RegExp]", ut = "[object Set]", Ln = "[object String]", xn = "[object Symbol]", si = "[object Undefined]", Kn = "[object WeakMap]", Di = "[object WeakSet]", qn = "[object ArrayBuffer]", Bn = "[object DataView]", Co = "[object Float32Array]", Eo = "[object Float64Array]", Oo = "[object Int8Array]", To = "[object Int16Array]", Ao = "[object Int32Array]", I = "[object Uint8Array]", Y = "[object Uint8ClampedArray]", re = "[object Uint16Array]", Re = "[object Uint32Array]", Oe = /\b__p \+= '';/g, Et = /\b(__p \+=) '' \+/g, en = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ur = /&(?:amp|lt|gt|quot|#39);/g, Mo = /[&<>"']/g, fr = RegExp(ur.source), No = RegExp(Mo.source), Ri = /<%-([\s\S]+?)%>/g, Mr = /<%([\s\S]+?)%>/g, As = /<%=([\s\S]+?)%>/g, Do = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ii = /^\w*$/, tv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ml = /[\\^$.*+?()[\]{}|]/g, nv = RegExp(ml.source), gl = /^\s+/, rv = /\s/, iv = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ov = /\{\n\/\* \[wrapped with (.+)\] \*/, sv = /,? & /, av = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, lv = /[()=,{}\[\]\/\s]/, cv = /\\(\\)?/g, uv = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, mf = /\w*$/, fv = /^[-+]0x[0-9a-f]+$/i, dv = /^0b[01]+$/i, pv = /^\[object .+?Constructor\]$/, hv = /^0o[0-7]+$/i, mv = /^(?:0|[1-9]\d*)$/, gv = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ms = /($^)/, yv = /['\n\r\u2028\u2029\\]/g, Ns = "\\ud800-\\udfff", vv = "\\u0300-\\u036f", bv = "\\ufe20-\\ufe2f", wv = "\\u20d0-\\u20ff", gf = vv + bv + wv, yf = "\\u2700-\\u27bf", vf = "a-z\\xdf-\\xf6\\xf8-\\xff", xv = "\\xac\\xb1\\xd7\\xf7", Sv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", _v = "\\u2000-\\u206f", kv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", bf = "A-Z\\xc0-\\xd6\\xd8-\\xde", wf = "\\ufe0e\\ufe0f", xf = xv + Sv + _v + kv, yl = "['\u2019]", Cv = "[" + Ns + "]", Sf = "[" + xf + "]", Ds = "[" + gf + "]", _f = "\\d+", Ev = "[" + yf + "]", kf = "[" + vf + "]", Cf = "[^" + Ns + xf + _f + yf + vf + bf + "]", vl = "\\ud83c[\\udffb-\\udfff]", Ov = "(?:" + Ds + "|" + vl + ")", Ef = "[^" + Ns + "]", bl = "(?:\\ud83c[\\udde6-\\uddff]){2}", wl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Pi = "[" + bf + "]", Of = "\\u200d", Tf = "(?:" + kf + "|" + Cf + ")", Tv = "(?:" + Pi + "|" + Cf + ")", Af = "(?:" + yl + "(?:d|ll|m|re|s|t|ve))?", Mf = "(?:" + yl + "(?:D|LL|M|RE|S|T|VE))?", Nf = Ov + "?", Df = "[" + wf + "]?", Av = "(?:" + Of + "(?:" + [Ef, bl, wl].join("|") + ")" + Df + Nf + ")*", Mv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Nv = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Rf = Df + Nf + Av, Dv = "(?:" + [Ev, bl, wl].join("|") + ")" + Rf, Rv = "(?:" + [Ef + Ds + "?", Ds, bl, wl, Cv].join("|") + ")", Iv = RegExp(yl, "g"), Pv = RegExp(Ds, "g"), xl = RegExp(vl + "(?=" + vl + ")|" + Rv + Rf, "g"), Lv = RegExp([
      Pi + "?" + kf + "+" + Af + "(?=" + [Sf, Pi, "$"].join("|") + ")",
      Tv + "+" + Mf + "(?=" + [Sf, Pi + Tf, "$"].join("|") + ")",
      Pi + "?" + Tf + "+" + Af,
      Pi + "+" + Mf,
      Nv,
      Mv,
      _f,
      Dv
    ].join("|"), "g"), Bv = RegExp("[" + Of + Ns + gf + wf + "]"), $v = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fv = [
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
    ], Vv = -1, Ye = {};
    Ye[Co] = Ye[Eo] = Ye[Oo] = Ye[To] = Ye[Ao] = Ye[I] = Ye[Y] = Ye[re] = Ye[Re] = !0, Ye[ot] = Ye[st] = Ye[qn] = Ye[U] = Ye[Bn] = Ye[j] = Ye[de] = Ye[He] = Ye[ne] = Ye[De] = Ye[Le] = Ye[Wt] = Ye[ut] = Ye[Ln] = Ye[Kn] = !1;
    var Xe = {};
    Xe[ot] = Xe[st] = Xe[qn] = Xe[Bn] = Xe[U] = Xe[j] = Xe[Co] = Xe[Eo] = Xe[Oo] = Xe[To] = Xe[Ao] = Xe[ne] = Xe[De] = Xe[Le] = Xe[Wt] = Xe[ut] = Xe[Ln] = Xe[xn] = Xe[I] = Xe[Y] = Xe[re] = Xe[Re] = !0, Xe[de] = Xe[He] = Xe[Kn] = !1;
    var zv = {
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
    }, Hv = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Wv = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Uv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, jv = parseFloat, Kv = parseInt, If = typeof Xo == "object" && Xo && Xo.Object === Object && Xo, qv = typeof self == "object" && self && self.Object === Object && self, Ot = If || qv || Function("return this")(), Sl = e && !e.nodeType && e, ai = Sl && !0 && n && !n.nodeType && n, Pf = ai && ai.exports === Sl, _l = Pf && If.process, Sn = function() {
      try {
        var T = ai && ai.require && ai.require("util").types;
        return T || _l && _l.binding && _l.binding("util");
      } catch {
      }
    }(), Lf = Sn && Sn.isArrayBuffer, Bf = Sn && Sn.isDate, $f = Sn && Sn.isMap, Ff = Sn && Sn.isRegExp, Vf = Sn && Sn.isSet, zf = Sn && Sn.isTypedArray;
    function fn(T, P, N) {
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
    function Jv(T, P, N, X) {
      for (var ue = -1, Be = T == null ? 0 : T.length; ++ue < Be; ) {
        var mt = T[ue];
        P(X, mt, N(mt), T);
      }
      return X;
    }
    function _n(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length; ++N < X && P(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Gv(T, P) {
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
    function Nr(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length, ue = 0, Be = []; ++N < X; ) {
        var mt = T[N];
        P(mt, N, T) && (Be[ue++] = mt);
      }
      return Be;
    }
    function Rs(T, P) {
      var N = T == null ? 0 : T.length;
      return !!N && Li(T, P, 0) > -1;
    }
    function kl(T, P, N) {
      for (var X = -1, ue = T == null ? 0 : T.length; ++X < ue; )
        if (N(P, T[X]))
          return !0;
      return !1;
    }
    function Qe(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length, ue = Array(X); ++N < X; )
        ue[N] = P(T[N], N, T);
      return ue;
    }
    function Dr(T, P) {
      for (var N = -1, X = P.length, ue = T.length; ++N < X; )
        T[ue + N] = P[N];
      return T;
    }
    function Cl(T, P, N, X) {
      var ue = -1, Be = T == null ? 0 : T.length;
      for (X && Be && (N = T[++ue]); ++ue < Be; )
        N = P(N, T[ue], ue, T);
      return N;
    }
    function Xv(T, P, N, X) {
      var ue = T == null ? 0 : T.length;
      for (X && ue && (N = T[--ue]); ue--; )
        N = P(N, T[ue], ue, T);
      return N;
    }
    function El(T, P) {
      for (var N = -1, X = T == null ? 0 : T.length; ++N < X; )
        if (P(T[N], N, T))
          return !0;
      return !1;
    }
    var Yv = Ol("length");
    function Zv(T) {
      return T.split("");
    }
    function Qv(T) {
      return T.match(av) || [];
    }
    function Wf(T, P, N) {
      var X;
      return N(T, function(ue, Be, mt) {
        if (P(ue, Be, mt))
          return X = Be, !1;
      }), X;
    }
    function Is(T, P, N, X) {
      for (var ue = T.length, Be = N + (X ? 1 : -1); X ? Be-- : ++Be < ue; )
        if (P(T[Be], Be, T))
          return Be;
      return -1;
    }
    function Li(T, P, N) {
      return P === P ? f0(T, P, N) : Is(T, Uf, N);
    }
    function e0(T, P, N, X) {
      for (var ue = N - 1, Be = T.length; ++ue < Be; )
        if (X(T[ue], P))
          return ue;
      return -1;
    }
    function Uf(T) {
      return T !== T;
    }
    function jf(T, P) {
      var N = T == null ? 0 : T.length;
      return N ? Al(T, P) / N : ht;
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
    function Kf(T, P, N, X, ue) {
      return ue(T, function(Be, mt, Ge) {
        N = X ? (X = !1, Be) : P(N, Be, mt, Ge);
      }), N;
    }
    function t0(T, P) {
      var N = T.length;
      for (T.sort(P); N--; )
        T[N] = T[N].value;
      return T;
    }
    function Al(T, P) {
      for (var N, X = -1, ue = T.length; ++X < ue; ) {
        var Be = P(T[X]);
        Be !== t && (N = N === t ? Be : N + Be);
      }
      return N;
    }
    function Ml(T, P) {
      for (var N = -1, X = Array(T); ++N < T; )
        X[N] = P(N);
      return X;
    }
    function n0(T, P) {
      return Qe(P, function(N) {
        return [N, T[N]];
      });
    }
    function qf(T) {
      return T && T.slice(0, Yf(T) + 1).replace(gl, "");
    }
    function dn(T) {
      return function(P) {
        return T(P);
      };
    }
    function Nl(T, P) {
      return Qe(P, function(N) {
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
    function r0(T, P) {
      for (var N = T.length, X = 0; N--; )
        T[N] === P && ++X;
      return X;
    }
    var i0 = Tl(zv), o0 = Tl(Hv);
    function s0(T) {
      return "\\" + Uv[T];
    }
    function a0(T, P) {
      return T == null ? t : T[P];
    }
    function Bi(T) {
      return Bv.test(T);
    }
    function l0(T) {
      return $v.test(T);
    }
    function c0(T) {
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
    function Xf(T, P) {
      return function(N) {
        return T(P(N));
      };
    }
    function Rr(T, P) {
      for (var N = -1, X = T.length, ue = 0, Be = []; ++N < X; ) {
        var mt = T[N];
        (mt === P || mt === p) && (T[N] = p, Be[ue++] = N);
      }
      return Be;
    }
    function Ps(T) {
      var P = -1, N = Array(T.size);
      return T.forEach(function(X) {
        N[++P] = X;
      }), N;
    }
    function u0(T) {
      var P = -1, N = Array(T.size);
      return T.forEach(function(X) {
        N[++P] = [X, X];
      }), N;
    }
    function f0(T, P, N) {
      for (var X = N - 1, ue = T.length; ++X < ue; )
        if (T[X] === P)
          return X;
      return -1;
    }
    function d0(T, P, N) {
      for (var X = N + 1; X--; )
        if (T[X] === P)
          return X;
      return X;
    }
    function $i(T) {
      return Bi(T) ? h0(T) : Yv(T);
    }
    function $n(T) {
      return Bi(T) ? m0(T) : Zv(T);
    }
    function Yf(T) {
      for (var P = T.length; P-- && rv.test(T.charAt(P)); )
        ;
      return P;
    }
    var p0 = Tl(Wv);
    function h0(T) {
      for (var P = xl.lastIndex = 0; xl.test(T); )
        ++P;
      return P;
    }
    function m0(T) {
      return T.match(xl) || [];
    }
    function g0(T) {
      return T.match(Lv) || [];
    }
    var y0 = function T(P) {
      P = P == null ? Ot : Fi.defaults(Ot.Object(), P, Fi.pick(Ot, Fv));
      var N = P.Array, X = P.Date, ue = P.Error, Be = P.Function, mt = P.Math, Ge = P.Object, Rl = P.RegExp, v0 = P.String, kn = P.TypeError, Ls = N.prototype, b0 = Be.prototype, Vi = Ge.prototype, Bs = P["__core-js_shared__"], $s = b0.toString, qe = Vi.hasOwnProperty, w0 = 0, Zf = function() {
        var s = /[^.]+$/.exec(Bs && Bs.keys && Bs.keys.IE_PROTO || "");
        return s ? "Symbol(src)_1." + s : "";
      }(), Fs = Vi.toString, x0 = $s.call(Ge), S0 = Ot._, _0 = Rl(
        "^" + $s.call(qe).replace(ml, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Vs = Pf ? P.Buffer : t, Ir = P.Symbol, zs = P.Uint8Array, Qf = Vs ? Vs.allocUnsafe : t, Hs = Xf(Ge.getPrototypeOf, Ge), ed = Ge.create, td = Vi.propertyIsEnumerable, Ws = Ls.splice, nd = Ir ? Ir.isConcatSpreadable : t, Io = Ir ? Ir.iterator : t, li = Ir ? Ir.toStringTag : t, Us = function() {
        try {
          var s = pi(Ge, "defineProperty");
          return s({}, "", {}), s;
        } catch {
        }
      }(), k0 = P.clearTimeout !== Ot.clearTimeout && P.clearTimeout, C0 = X && X.now !== Ot.Date.now && X.now, E0 = P.setTimeout !== Ot.setTimeout && P.setTimeout, js = mt.ceil, Ks = mt.floor, Il = Ge.getOwnPropertySymbols, O0 = Vs ? Vs.isBuffer : t, rd = P.isFinite, T0 = Ls.join, A0 = Xf(Ge.keys, Ge), gt = mt.max, Pt = mt.min, M0 = X.now, N0 = P.parseInt, id = mt.random, D0 = Ls.reverse, Pl = pi(P, "DataView"), Po = pi(P, "Map"), Ll = pi(P, "Promise"), zi = pi(P, "Set"), Lo = pi(P, "WeakMap"), Bo = pi(Ge, "create"), qs = Lo && new Lo(), Hi = {}, R0 = hi(Pl), I0 = hi(Po), P0 = hi(Ll), L0 = hi(zi), B0 = hi(Lo), Js = Ir ? Ir.prototype : t, $o = Js ? Js.valueOf : t, od = Js ? Js.toString : t;
      function w(s) {
        if (tt(s) && !pe(s) && !(s instanceof Ce)) {
          if (s instanceof Cn)
            return s;
          if (qe.call(s, "__wrapped__"))
            return sp(s);
        }
        return new Cn(s);
      }
      var Wi = function() {
        function s() {
        }
        return function(l) {
          if (!et(l))
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
      function Cn(s, l) {
        this.__wrapped__ = s, this.__actions__ = [], this.__chain__ = !!l, this.__index__ = 0, this.__values__ = t;
      }
      w.templateSettings = {
        escape: Ri,
        evaluate: Mr,
        interpolate: As,
        variable: "",
        imports: {
          _: w
        }
      }, w.prototype = Gs.prototype, w.prototype.constructor = w, Cn.prototype = Wi(Gs.prototype), Cn.prototype.constructor = Cn;
      function Ce(s) {
        this.__wrapped__ = s, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = it, this.__views__ = [];
      }
      function $0() {
        var s = new Ce(this.__wrapped__);
        return s.__actions__ = tn(this.__actions__), s.__dir__ = this.__dir__, s.__filtered__ = this.__filtered__, s.__iteratees__ = tn(this.__iteratees__), s.__takeCount__ = this.__takeCount__, s.__views__ = tn(this.__views__), s;
      }
      function F0() {
        if (this.__filtered__) {
          var s = new Ce(this);
          s.__dir__ = -1, s.__filtered__ = !0;
        } else
          s = this.clone(), s.__dir__ *= -1;
        return s;
      }
      function V0() {
        var s = this.__wrapped__.value(), l = this.__dir__, f = pe(s), m = l < 0, v = f ? s.length : 0, x = Zb(0, v, this.__views__), _ = x.start, O = x.end, M = O - _, B = m ? O : _ - 1, F = this.__iteratees__, V = F.length, K = 0, ee = Pt(M, this.__takeCount__);
        if (!f || !m && v == M && ee == M)
          return Ad(s, this.__actions__);
        var se = [];
        e:
          for (; M-- && K < ee; ) {
            B += l;
            for (var ge = -1, ae = s[B]; ++ge < V; ) {
              var Se = F[ge], Te = Se.iteratee, mn = Se.type, Kt = Te(ae);
              if (mn == pt)
                ae = Kt;
              else if (!Kt) {
                if (mn == bt)
                  continue e;
                break e;
              }
            }
            se[K++] = ae;
          }
        return se;
      }
      Ce.prototype = Wi(Gs.prototype), Ce.prototype.constructor = Ce;
      function ci(s) {
        var l = -1, f = s == null ? 0 : s.length;
        for (this.clear(); ++l < f; ) {
          var m = s[l];
          this.set(m[0], m[1]);
        }
      }
      function z0() {
        this.__data__ = Bo ? Bo(null) : {}, this.size = 0;
      }
      function H0(s) {
        var l = this.has(s) && delete this.__data__[s];
        return this.size -= l ? 1 : 0, l;
      }
      function W0(s) {
        var l = this.__data__;
        if (Bo) {
          var f = l[s];
          return f === u ? t : f;
        }
        return qe.call(l, s) ? l[s] : t;
      }
      function U0(s) {
        var l = this.__data__;
        return Bo ? l[s] !== t : qe.call(l, s);
      }
      function j0(s, l) {
        var f = this.__data__;
        return this.size += this.has(s) ? 0 : 1, f[s] = Bo && l === t ? u : l, this;
      }
      ci.prototype.clear = z0, ci.prototype.delete = H0, ci.prototype.get = W0, ci.prototype.has = U0, ci.prototype.set = j0;
      function dr(s) {
        var l = -1, f = s == null ? 0 : s.length;
        for (this.clear(); ++l < f; ) {
          var m = s[l];
          this.set(m[0], m[1]);
        }
      }
      function K0() {
        this.__data__ = [], this.size = 0;
      }
      function q0(s) {
        var l = this.__data__, f = Xs(l, s);
        if (f < 0)
          return !1;
        var m = l.length - 1;
        return f == m ? l.pop() : Ws.call(l, f, 1), --this.size, !0;
      }
      function J0(s) {
        var l = this.__data__, f = Xs(l, s);
        return f < 0 ? t : l[f][1];
      }
      function G0(s) {
        return Xs(this.__data__, s) > -1;
      }
      function X0(s, l) {
        var f = this.__data__, m = Xs(f, s);
        return m < 0 ? (++this.size, f.push([s, l])) : f[m][1] = l, this;
      }
      dr.prototype.clear = K0, dr.prototype.delete = q0, dr.prototype.get = J0, dr.prototype.has = G0, dr.prototype.set = X0;
      function pr(s) {
        var l = -1, f = s == null ? 0 : s.length;
        for (this.clear(); ++l < f; ) {
          var m = s[l];
          this.set(m[0], m[1]);
        }
      }
      function Y0() {
        this.size = 0, this.__data__ = {
          hash: new ci(),
          map: new (Po || dr)(),
          string: new ci()
        };
      }
      function Z0(s) {
        var l = la(this, s).delete(s);
        return this.size -= l ? 1 : 0, l;
      }
      function Q0(s) {
        return la(this, s).get(s);
      }
      function eb(s) {
        return la(this, s).has(s);
      }
      function tb(s, l) {
        var f = la(this, s), m = f.size;
        return f.set(s, l), this.size += f.size == m ? 0 : 1, this;
      }
      pr.prototype.clear = Y0, pr.prototype.delete = Z0, pr.prototype.get = Q0, pr.prototype.has = eb, pr.prototype.set = tb;
      function ui(s) {
        var l = -1, f = s == null ? 0 : s.length;
        for (this.__data__ = new pr(); ++l < f; )
          this.add(s[l]);
      }
      function nb(s) {
        return this.__data__.set(s, u), this;
      }
      function rb(s) {
        return this.__data__.has(s);
      }
      ui.prototype.add = ui.prototype.push = nb, ui.prototype.has = rb;
      function Fn(s) {
        var l = this.__data__ = new dr(s);
        this.size = l.size;
      }
      function ib() {
        this.__data__ = new dr(), this.size = 0;
      }
      function ob(s) {
        var l = this.__data__, f = l.delete(s);
        return this.size = l.size, f;
      }
      function sb(s) {
        return this.__data__.get(s);
      }
      function ab(s) {
        return this.__data__.has(s);
      }
      function lb(s, l) {
        var f = this.__data__;
        if (f instanceof dr) {
          var m = f.__data__;
          if (!Po || m.length < i - 1)
            return m.push([s, l]), this.size = ++f.size, this;
          f = this.__data__ = new pr(m);
        }
        return f.set(s, l), this.size = f.size, this;
      }
      Fn.prototype.clear = ib, Fn.prototype.delete = ob, Fn.prototype.get = sb, Fn.prototype.has = ab, Fn.prototype.set = lb;
      function sd(s, l) {
        var f = pe(s), m = !f && mi(s), v = !f && !m && Fr(s), x = !f && !m && !v && qi(s), _ = f || m || v || x, O = _ ? Ml(s.length, v0) : [], M = O.length;
        for (var B in s)
          (l || qe.call(s, B)) && !(_ && (B == "length" || v && (B == "offset" || B == "parent") || x && (B == "buffer" || B == "byteLength" || B == "byteOffset") || yr(B, M))) && O.push(B);
        return O;
      }
      function ad(s) {
        var l = s.length;
        return l ? s[ql(0, l - 1)] : t;
      }
      function cb(s, l) {
        return ca(tn(s), fi(l, 0, s.length));
      }
      function ub(s) {
        return ca(tn(s));
      }
      function Bl(s, l, f) {
        (f !== t && !Vn(s[l], f) || f === t && !(l in s)) && hr(s, l, f);
      }
      function Fo(s, l, f) {
        var m = s[l];
        (!(qe.call(s, l) && Vn(m, f)) || f === t && !(l in s)) && hr(s, l, f);
      }
      function Xs(s, l) {
        for (var f = s.length; f--; )
          if (Vn(s[f][0], l))
            return f;
        return -1;
      }
      function fb(s, l, f, m) {
        return Pr(s, function(v, x, _) {
          l(m, v, f(v), _);
        }), m;
      }
      function ld(s, l) {
        return s && Gn(l, wt(l), s);
      }
      function db(s, l) {
        return s && Gn(l, rn(l), s);
      }
      function hr(s, l, f) {
        l == "__proto__" && Us ? Us(s, l, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : s[l] = f;
      }
      function $l(s, l) {
        for (var f = -1, m = l.length, v = N(m), x = s == null; ++f < m; )
          v[f] = x ? t : vc(s, l[f]);
        return v;
      }
      function fi(s, l, f) {
        return s === s && (f !== t && (s = s <= f ? s : f), l !== t && (s = s >= l ? s : l)), s;
      }
      function En(s, l, f, m, v, x) {
        var _, O = l & h, M = l & g, B = l & y;
        if (f && (_ = v ? f(s, m, v, x) : f(s)), _ !== t)
          return _;
        if (!et(s))
          return s;
        var F = pe(s);
        if (F) {
          if (_ = e1(s), !O)
            return tn(s, _);
        } else {
          var V = Lt(s), K = V == He || V == ce;
          if (Fr(s))
            return Dd(s, O);
          if (V == Le || V == ot || K && !v) {
            if (_ = M || K ? {} : Yd(s), !O)
              return M ? Wb(s, db(_, s)) : Hb(s, ld(_, s));
          } else {
            if (!Xe[V])
              return v ? s : {};
            _ = t1(s, V, O);
          }
        }
        x || (x = new Fn());
        var ee = x.get(s);
        if (ee)
          return ee;
        x.set(s, _), Ep(s) ? s.forEach(function(ae) {
          _.add(En(ae, l, f, ae, s, x));
        }) : kp(s) && s.forEach(function(ae, Se) {
          _.set(Se, En(ae, l, f, Se, s, x));
        });
        var se = B ? M ? ic : rc : M ? rn : wt, ge = F ? t : se(s);
        return _n(ge || s, function(ae, Se) {
          ge && (Se = ae, ae = s[Se]), Fo(_, Se, En(ae, l, f, Se, s, x));
        }), _;
      }
      function pb(s) {
        var l = wt(s);
        return function(f) {
          return cd(f, s, l);
        };
      }
      function cd(s, l, f) {
        var m = f.length;
        if (s == null)
          return !m;
        for (s = Ge(s); m--; ) {
          var v = f[m], x = l[v], _ = s[v];
          if (_ === t && !(v in s) || !x(_))
            return !1;
        }
        return !0;
      }
      function ud(s, l, f) {
        if (typeof s != "function")
          throw new kn(a);
        return Ko(function() {
          s.apply(t, f);
        }, l);
      }
      function Vo(s, l, f, m) {
        var v = -1, x = Rs, _ = !0, O = s.length, M = [], B = l.length;
        if (!O)
          return M;
        f && (l = Qe(l, dn(f))), m ? (x = kl, _ = !1) : l.length >= i && (x = Ro, _ = !1, l = new ui(l));
        e:
          for (; ++v < O; ) {
            var F = s[v], V = f == null ? F : f(F);
            if (F = m || F !== 0 ? F : 0, _ && V === V) {
              for (var K = B; K--; )
                if (l[K] === V)
                  continue e;
              M.push(F);
            } else
              x(l, V, m) || M.push(F);
          }
        return M;
      }
      var Pr = Bd(Jn), fd = Bd(Vl, !0);
      function hb(s, l) {
        var f = !0;
        return Pr(s, function(m, v, x) {
          return f = !!l(m, v, x), f;
        }), f;
      }
      function Ys(s, l, f) {
        for (var m = -1, v = s.length; ++m < v; ) {
          var x = s[m], _ = l(x);
          if (_ != null && (O === t ? _ === _ && !hn(_) : f(_, O)))
            var O = _, M = x;
        }
        return M;
      }
      function mb(s, l, f, m) {
        var v = s.length;
        for (f = me(f), f < 0 && (f = -f > v ? 0 : v + f), m = m === t || m > v ? v : me(m), m < 0 && (m += v), m = f > m ? 0 : Tp(m); f < m; )
          s[f++] = l;
        return s;
      }
      function dd(s, l) {
        var f = [];
        return Pr(s, function(m, v, x) {
          l(m, v, x) && f.push(m);
        }), f;
      }
      function Tt(s, l, f, m, v) {
        var x = -1, _ = s.length;
        for (f || (f = r1), v || (v = []); ++x < _; ) {
          var O = s[x];
          l > 0 && f(O) ? l > 1 ? Tt(O, l - 1, f, m, v) : Dr(v, O) : m || (v[v.length] = O);
        }
        return v;
      }
      var Fl = $d(), pd = $d(!0);
      function Jn(s, l) {
        return s && Fl(s, l, wt);
      }
      function Vl(s, l) {
        return s && pd(s, l, wt);
      }
      function Zs(s, l) {
        return Nr(l, function(f) {
          return vr(s[f]);
        });
      }
      function di(s, l) {
        l = Br(l, s);
        for (var f = 0, m = l.length; s != null && f < m; )
          s = s[Xn(l[f++])];
        return f && f == m ? s : t;
      }
      function hd(s, l, f) {
        var m = l(s);
        return pe(s) ? m : Dr(m, f(s));
      }
      function Ut(s) {
        return s == null ? s === t ? si : Ht : li && li in Ge(s) ? Yb(s) : u1(s);
      }
      function zl(s, l) {
        return s > l;
      }
      function gb(s, l) {
        return s != null && qe.call(s, l);
      }
      function yb(s, l) {
        return s != null && l in Ge(s);
      }
      function vb(s, l, f) {
        return s >= Pt(l, f) && s < gt(l, f);
      }
      function Hl(s, l, f) {
        for (var m = f ? kl : Rs, v = s[0].length, x = s.length, _ = x, O = N(x), M = 1 / 0, B = []; _--; ) {
          var F = s[_];
          _ && l && (F = Qe(F, dn(l))), M = Pt(F.length, M), O[_] = !f && (l || v >= 120 && F.length >= 120) ? new ui(_ && F) : t;
        }
        F = s[0];
        var V = -1, K = O[0];
        e:
          for (; ++V < v && B.length < M; ) {
            var ee = F[V], se = l ? l(ee) : ee;
            if (ee = f || ee !== 0 ? ee : 0, !(K ? Ro(K, se) : m(B, se, f))) {
              for (_ = x; --_; ) {
                var ge = O[_];
                if (!(ge ? Ro(ge, se) : m(s[_], se, f)))
                  continue e;
              }
              K && K.push(se), B.push(ee);
            }
          }
        return B;
      }
      function bb(s, l, f, m) {
        return Jn(s, function(v, x, _) {
          l(m, f(v), x, _);
        }), m;
      }
      function zo(s, l, f) {
        l = Br(l, s), s = tp(s, l);
        var m = s == null ? s : s[Xn(Tn(l))];
        return m == null ? t : fn(m, s, f);
      }
      function md(s) {
        return tt(s) && Ut(s) == ot;
      }
      function wb(s) {
        return tt(s) && Ut(s) == qn;
      }
      function xb(s) {
        return tt(s) && Ut(s) == j;
      }
      function Ho(s, l, f, m, v) {
        return s === l ? !0 : s == null || l == null || !tt(s) && !tt(l) ? s !== s && l !== l : Sb(s, l, f, m, Ho, v);
      }
      function Sb(s, l, f, m, v, x) {
        var _ = pe(s), O = pe(l), M = _ ? st : Lt(s), B = O ? st : Lt(l);
        M = M == ot ? Le : M, B = B == ot ? Le : B;
        var F = M == Le, V = B == Le, K = M == B;
        if (K && Fr(s)) {
          if (!Fr(l))
            return !1;
          _ = !0, F = !1;
        }
        if (K && !F)
          return x || (x = new Fn()), _ || qi(s) ? Jd(s, l, f, m, v, x) : Gb(s, l, M, f, m, v, x);
        if (!(f & b)) {
          var ee = F && qe.call(s, "__wrapped__"), se = V && qe.call(l, "__wrapped__");
          if (ee || se) {
            var ge = ee ? s.value() : s, ae = se ? l.value() : l;
            return x || (x = new Fn()), v(ge, ae, f, m, x);
          }
        }
        return K ? (x || (x = new Fn()), Xb(s, l, f, m, v, x)) : !1;
      }
      function _b(s) {
        return tt(s) && Lt(s) == ne;
      }
      function Wl(s, l, f, m) {
        var v = f.length, x = v, _ = !m;
        if (s == null)
          return !x;
        for (s = Ge(s); v--; ) {
          var O = f[v];
          if (_ && O[2] ? O[1] !== s[O[0]] : !(O[0] in s))
            return !1;
        }
        for (; ++v < x; ) {
          O = f[v];
          var M = O[0], B = s[M], F = O[1];
          if (_ && O[2]) {
            if (B === t && !(M in s))
              return !1;
          } else {
            var V = new Fn();
            if (m)
              var K = m(B, F, M, s, l, V);
            if (!(K === t ? Ho(F, B, b | k, m, V) : K))
              return !1;
          }
        }
        return !0;
      }
      function gd(s) {
        if (!et(s) || o1(s))
          return !1;
        var l = vr(s) ? _0 : pv;
        return l.test(hi(s));
      }
      function kb(s) {
        return tt(s) && Ut(s) == Wt;
      }
      function Cb(s) {
        return tt(s) && Lt(s) == ut;
      }
      function Eb(s) {
        return tt(s) && ma(s.length) && !!Ye[Ut(s)];
      }
      function yd(s) {
        return typeof s == "function" ? s : s == null ? on : typeof s == "object" ? pe(s) ? wd(s[0], s[1]) : bd(s) : Fp(s);
      }
      function Ul(s) {
        if (!jo(s))
          return A0(s);
        var l = [];
        for (var f in Ge(s))
          qe.call(s, f) && f != "constructor" && l.push(f);
        return l;
      }
      function Ob(s) {
        if (!et(s))
          return c1(s);
        var l = jo(s), f = [];
        for (var m in s)
          m == "constructor" && (l || !qe.call(s, m)) || f.push(m);
        return f;
      }
      function jl(s, l) {
        return s < l;
      }
      function vd(s, l) {
        var f = -1, m = nn(s) ? N(s.length) : [];
        return Pr(s, function(v, x, _) {
          m[++f] = l(v, x, _);
        }), m;
      }
      function bd(s) {
        var l = sc(s);
        return l.length == 1 && l[0][2] ? Qd(l[0][0], l[0][1]) : function(f) {
          return f === s || Wl(f, s, l);
        };
      }
      function wd(s, l) {
        return lc(s) && Zd(l) ? Qd(Xn(s), l) : function(f) {
          var m = vc(f, s);
          return m === t && m === l ? bc(f, s) : Ho(l, m, b | k);
        };
      }
      function Qs(s, l, f, m, v) {
        s !== l && Fl(l, function(x, _) {
          if (v || (v = new Fn()), et(x))
            Tb(s, l, _, f, Qs, m, v);
          else {
            var O = m ? m(uc(s, _), x, _ + "", s, l, v) : t;
            O === t && (O = x), Bl(s, _, O);
          }
        }, rn);
      }
      function Tb(s, l, f, m, v, x, _) {
        var O = uc(s, f), M = uc(l, f), B = _.get(M);
        if (B) {
          Bl(s, f, B);
          return;
        }
        var F = x ? x(O, M, f + "", s, l, _) : t, V = F === t;
        if (V) {
          var K = pe(M), ee = !K && Fr(M), se = !K && !ee && qi(M);
          F = M, K || ee || se ? pe(O) ? F = O : at(O) ? F = tn(O) : ee ? (V = !1, F = Dd(M, !0)) : se ? (V = !1, F = Rd(M, !0)) : F = [] : qo(M) || mi(M) ? (F = O, mi(O) ? F = Ap(O) : (!et(O) || vr(O)) && (F = Yd(M))) : V = !1;
        }
        V && (_.set(M, F), v(F, M, m, x, _), _.delete(M)), Bl(s, f, F);
      }
      function xd(s, l) {
        var f = s.length;
        if (!!f)
          return l += l < 0 ? f : 0, yr(l, f) ? s[l] : t;
      }
      function Sd(s, l, f) {
        l.length ? l = Qe(l, function(x) {
          return pe(x) ? function(_) {
            return di(_, x.length === 1 ? x[0] : x);
          } : x;
        }) : l = [on];
        var m = -1;
        l = Qe(l, dn(ie()));
        var v = vd(s, function(x, _, O) {
          var M = Qe(l, function(B) {
            return B(x);
          });
          return { criteria: M, index: ++m, value: x };
        });
        return t0(v, function(x, _) {
          return zb(x, _, f);
        });
      }
      function Ab(s, l) {
        return _d(s, l, function(f, m) {
          return bc(s, m);
        });
      }
      function _d(s, l, f) {
        for (var m = -1, v = l.length, x = {}; ++m < v; ) {
          var _ = l[m], O = di(s, _);
          f(O, _) && Wo(x, Br(_, s), O);
        }
        return x;
      }
      function Mb(s) {
        return function(l) {
          return di(l, s);
        };
      }
      function Kl(s, l, f, m) {
        var v = m ? e0 : Li, x = -1, _ = l.length, O = s;
        for (s === l && (l = tn(l)), f && (O = Qe(s, dn(f))); ++x < _; )
          for (var M = 0, B = l[x], F = f ? f(B) : B; (M = v(O, F, M, m)) > -1; )
            O !== s && Ws.call(O, M, 1), Ws.call(s, M, 1);
        return s;
      }
      function kd(s, l) {
        for (var f = s ? l.length : 0, m = f - 1; f--; ) {
          var v = l[f];
          if (f == m || v !== x) {
            var x = v;
            yr(v) ? Ws.call(s, v, 1) : Xl(s, v);
          }
        }
        return s;
      }
      function ql(s, l) {
        return s + Ks(id() * (l - s + 1));
      }
      function Nb(s, l, f, m) {
        for (var v = -1, x = gt(js((l - s) / (f || 1)), 0), _ = N(x); x--; )
          _[m ? x : ++v] = s, s += f;
        return _;
      }
      function Jl(s, l) {
        var f = "";
        if (!s || l < 1 || l > ze)
          return f;
        do
          l % 2 && (f += s), l = Ks(l / 2), l && (s += s);
        while (l);
        return f;
      }
      function we(s, l) {
        return fc(ep(s, l, on), s + "");
      }
      function Db(s) {
        return ad(Ji(s));
      }
      function Rb(s, l) {
        var f = Ji(s);
        return ca(f, fi(l, 0, f.length));
      }
      function Wo(s, l, f, m) {
        if (!et(s))
          return s;
        l = Br(l, s);
        for (var v = -1, x = l.length, _ = x - 1, O = s; O != null && ++v < x; ) {
          var M = Xn(l[v]), B = f;
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return s;
          if (v != _) {
            var F = O[M];
            B = m ? m(F, M, O) : t, B === t && (B = et(F) ? F : yr(l[v + 1]) ? [] : {});
          }
          Fo(O, M, B), O = O[M];
        }
        return s;
      }
      var Cd = qs ? function(s, l) {
        return qs.set(s, l), s;
      } : on, Ib = Us ? function(s, l) {
        return Us(s, "toString", {
          configurable: !0,
          enumerable: !1,
          value: xc(l),
          writable: !0
        });
      } : on;
      function Pb(s) {
        return ca(Ji(s));
      }
      function On(s, l, f) {
        var m = -1, v = s.length;
        l < 0 && (l = -l > v ? 0 : v + l), f = f > v ? v : f, f < 0 && (f += v), v = l > f ? 0 : f - l >>> 0, l >>>= 0;
        for (var x = N(v); ++m < v; )
          x[m] = s[m + l];
        return x;
      }
      function Lb(s, l) {
        var f;
        return Pr(s, function(m, v, x) {
          return f = l(m, v, x), !f;
        }), !!f;
      }
      function ea(s, l, f) {
        var m = 0, v = s == null ? m : s.length;
        if (typeof l == "number" && l === l && v <= un) {
          for (; m < v; ) {
            var x = m + v >>> 1, _ = s[x];
            _ !== null && !hn(_) && (f ? _ <= l : _ < l) ? m = x + 1 : v = x;
          }
          return v;
        }
        return Gl(s, l, on, f);
      }
      function Gl(s, l, f, m) {
        var v = 0, x = s == null ? 0 : s.length;
        if (x === 0)
          return 0;
        l = f(l);
        for (var _ = l !== l, O = l === null, M = hn(l), B = l === t; v < x; ) {
          var F = Ks((v + x) / 2), V = f(s[F]), K = V !== t, ee = V === null, se = V === V, ge = hn(V);
          if (_)
            var ae = m || se;
          else
            B ? ae = se && (m || K) : O ? ae = se && K && (m || !ee) : M ? ae = se && K && !ee && (m || !ge) : ee || ge ? ae = !1 : ae = m ? V <= l : V < l;
          ae ? v = F + 1 : x = F;
        }
        return Pt(x, Rt);
      }
      function Ed(s, l) {
        for (var f = -1, m = s.length, v = 0, x = []; ++f < m; ) {
          var _ = s[f], O = l ? l(_) : _;
          if (!f || !Vn(O, M)) {
            var M = O;
            x[v++] = _ === 0 ? 0 : _;
          }
        }
        return x;
      }
      function Od(s) {
        return typeof s == "number" ? s : hn(s) ? ht : +s;
      }
      function pn(s) {
        if (typeof s == "string")
          return s;
        if (pe(s))
          return Qe(s, pn) + "";
        if (hn(s))
          return od ? od.call(s) : "";
        var l = s + "";
        return l == "0" && 1 / s == -Ke ? "-0" : l;
      }
      function Lr(s, l, f) {
        var m = -1, v = Rs, x = s.length, _ = !0, O = [], M = O;
        if (f)
          _ = !1, v = kl;
        else if (x >= i) {
          var B = l ? null : qb(s);
          if (B)
            return Ps(B);
          _ = !1, v = Ro, M = new ui();
        } else
          M = l ? [] : O;
        e:
          for (; ++m < x; ) {
            var F = s[m], V = l ? l(F) : F;
            if (F = f || F !== 0 ? F : 0, _ && V === V) {
              for (var K = M.length; K--; )
                if (M[K] === V)
                  continue e;
              l && M.push(V), O.push(F);
            } else
              v(M, V, f) || (M !== O && M.push(V), O.push(F));
          }
        return O;
      }
      function Xl(s, l) {
        return l = Br(l, s), s = tp(s, l), s == null || delete s[Xn(Tn(l))];
      }
      function Td(s, l, f, m) {
        return Wo(s, l, f(di(s, l)), m);
      }
      function ta(s, l, f, m) {
        for (var v = s.length, x = m ? v : -1; (m ? x-- : ++x < v) && l(s[x], x, s); )
          ;
        return f ? On(s, m ? 0 : x, m ? x + 1 : v) : On(s, m ? x + 1 : 0, m ? v : x);
      }
      function Ad(s, l) {
        var f = s;
        return f instanceof Ce && (f = f.value()), Cl(l, function(m, v) {
          return v.func.apply(v.thisArg, Dr([m], v.args));
        }, f);
      }
      function Yl(s, l, f) {
        var m = s.length;
        if (m < 2)
          return m ? Lr(s[0]) : [];
        for (var v = -1, x = N(m); ++v < m; )
          for (var _ = s[v], O = -1; ++O < m; )
            O != v && (x[v] = Vo(x[v] || _, s[O], l, f));
        return Lr(Tt(x, 1), l, f);
      }
      function Md(s, l, f) {
        for (var m = -1, v = s.length, x = l.length, _ = {}; ++m < v; ) {
          var O = m < x ? l[m] : t;
          f(_, s[m], O);
        }
        return _;
      }
      function Zl(s) {
        return at(s) ? s : [];
      }
      function Ql(s) {
        return typeof s == "function" ? s : on;
      }
      function Br(s, l) {
        return pe(s) ? s : lc(s, l) ? [s] : op(We(s));
      }
      var Bb = we;
      function $r(s, l, f) {
        var m = s.length;
        return f = f === t ? m : f, !l && f >= m ? s : On(s, l, f);
      }
      var Nd = k0 || function(s) {
        return Ot.clearTimeout(s);
      };
      function Dd(s, l) {
        if (l)
          return s.slice();
        var f = s.length, m = Qf ? Qf(f) : new s.constructor(f);
        return s.copy(m), m;
      }
      function ec(s) {
        var l = new s.constructor(s.byteLength);
        return new zs(l).set(new zs(s)), l;
      }
      function $b(s, l) {
        var f = l ? ec(s.buffer) : s.buffer;
        return new s.constructor(f, s.byteOffset, s.byteLength);
      }
      function Fb(s) {
        var l = new s.constructor(s.source, mf.exec(s));
        return l.lastIndex = s.lastIndex, l;
      }
      function Vb(s) {
        return $o ? Ge($o.call(s)) : {};
      }
      function Rd(s, l) {
        var f = l ? ec(s.buffer) : s.buffer;
        return new s.constructor(f, s.byteOffset, s.length);
      }
      function Id(s, l) {
        if (s !== l) {
          var f = s !== t, m = s === null, v = s === s, x = hn(s), _ = l !== t, O = l === null, M = l === l, B = hn(l);
          if (!O && !B && !x && s > l || x && _ && M && !O && !B || m && _ && M || !f && M || !v)
            return 1;
          if (!m && !x && !B && s < l || B && f && v && !m && !x || O && f && v || !_ && v || !M)
            return -1;
        }
        return 0;
      }
      function zb(s, l, f) {
        for (var m = -1, v = s.criteria, x = l.criteria, _ = v.length, O = f.length; ++m < _; ) {
          var M = Id(v[m], x[m]);
          if (M) {
            if (m >= O)
              return M;
            var B = f[m];
            return M * (B == "desc" ? -1 : 1);
          }
        }
        return s.index - l.index;
      }
      function Pd(s, l, f, m) {
        for (var v = -1, x = s.length, _ = f.length, O = -1, M = l.length, B = gt(x - _, 0), F = N(M + B), V = !m; ++O < M; )
          F[O] = l[O];
        for (; ++v < _; )
          (V || v < x) && (F[f[v]] = s[v]);
        for (; B--; )
          F[O++] = s[v++];
        return F;
      }
      function Ld(s, l, f, m) {
        for (var v = -1, x = s.length, _ = -1, O = f.length, M = -1, B = l.length, F = gt(x - O, 0), V = N(F + B), K = !m; ++v < F; )
          V[v] = s[v];
        for (var ee = v; ++M < B; )
          V[ee + M] = l[M];
        for (; ++_ < O; )
          (K || v < x) && (V[ee + f[_]] = s[v++]);
        return V;
      }
      function tn(s, l) {
        var f = -1, m = s.length;
        for (l || (l = N(m)); ++f < m; )
          l[f] = s[f];
        return l;
      }
      function Gn(s, l, f, m) {
        var v = !f;
        f || (f = {});
        for (var x = -1, _ = l.length; ++x < _; ) {
          var O = l[x], M = m ? m(f[O], s[O], O, f, s) : t;
          M === t && (M = s[O]), v ? hr(f, O, M) : Fo(f, O, M);
        }
        return f;
      }
      function Hb(s, l) {
        return Gn(s, ac(s), l);
      }
      function Wb(s, l) {
        return Gn(s, Gd(s), l);
      }
      function na(s, l) {
        return function(f, m) {
          var v = pe(f) ? Jv : fb, x = l ? l() : {};
          return v(f, s, ie(m, 2), x);
        };
      }
      function Ui(s) {
        return we(function(l, f) {
          var m = -1, v = f.length, x = v > 1 ? f[v - 1] : t, _ = v > 2 ? f[2] : t;
          for (x = s.length > 3 && typeof x == "function" ? (v--, x) : t, _ && jt(f[0], f[1], _) && (x = v < 3 ? t : x, v = 1), l = Ge(l); ++m < v; ) {
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
          if (!nn(f))
            return s(f, m);
          for (var v = f.length, x = l ? v : -1, _ = Ge(f); (l ? x-- : ++x < v) && m(_[x], x, _) !== !1; )
            ;
          return f;
        };
      }
      function $d(s) {
        return function(l, f, m) {
          for (var v = -1, x = Ge(l), _ = m(l), O = _.length; O--; ) {
            var M = _[s ? O : ++v];
            if (f(x[M], M, x) === !1)
              break;
          }
          return l;
        };
      }
      function Ub(s, l, f) {
        var m = l & C, v = Uo(s);
        function x() {
          var _ = this && this !== Ot && this instanceof x ? v : s;
          return _.apply(m ? f : this, arguments);
        }
        return x;
      }
      function Fd(s) {
        return function(l) {
          l = We(l);
          var f = Bi(l) ? $n(l) : t, m = f ? f[0] : l.charAt(0), v = f ? $r(f, 1).join("") : l.slice(1);
          return m[s]() + v;
        };
      }
      function ji(s) {
        return function(l) {
          return Cl(Bp(Lp(l).replace(Iv, "")), s, "");
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
          return et(m) ? m : f;
        };
      }
      function jb(s, l, f) {
        var m = Uo(s);
        function v() {
          for (var x = arguments.length, _ = N(x), O = x, M = Ki(v); O--; )
            _[O] = arguments[O];
          var B = x < 3 && _[0] !== M && _[x - 1] !== M ? [] : Rr(_, M);
          if (x -= B.length, x < f)
            return Ud(
              s,
              l,
              ra,
              v.placeholder,
              t,
              _,
              B,
              t,
              t,
              f - x
            );
          var F = this && this !== Ot && this instanceof v ? m : s;
          return fn(F, this, _);
        }
        return v;
      }
      function Vd(s) {
        return function(l, f, m) {
          var v = Ge(l);
          if (!nn(l)) {
            var x = ie(f, 3);
            l = wt(l), f = function(O) {
              return x(v[O], O, v);
            };
          }
          var _ = s(l, f, m);
          return _ > -1 ? v[x ? l[_] : _] : t;
        };
      }
      function zd(s) {
        return gr(function(l) {
          var f = l.length, m = f, v = Cn.prototype.thru;
          for (s && l.reverse(); m--; ) {
            var x = l[m];
            if (typeof x != "function")
              throw new kn(a);
            if (v && !_ && aa(x) == "wrapper")
              var _ = new Cn([], !0);
          }
          for (m = _ ? m : f; ++m < f; ) {
            x = l[m];
            var O = aa(x), M = O == "wrapper" ? oc(x) : t;
            M && cc(M[0]) && M[1] == (te | W | q | _e) && !M[4].length && M[9] == 1 ? _ = _[aa(M[0])].apply(_, M[3]) : _ = x.length == 1 && cc(x) ? _[O]() : _.thru(x);
          }
          return function() {
            var B = arguments, F = B[0];
            if (_ && B.length == 1 && pe(F))
              return _.plant(F).value();
            for (var V = 0, K = f ? l[V].apply(this, B) : F; ++V < f; )
              K = l[V].call(this, K);
            return K;
          };
        });
      }
      function ra(s, l, f, m, v, x, _, O, M, B) {
        var F = l & te, V = l & C, K = l & A, ee = l & (W | E), se = l & Z, ge = K ? t : Uo(s);
        function ae() {
          for (var Se = arguments.length, Te = N(Se), mn = Se; mn--; )
            Te[mn] = arguments[mn];
          if (ee)
            var Kt = Ki(ae), gn = r0(Te, Kt);
          if (m && (Te = Pd(Te, m, v, ee)), x && (Te = Ld(Te, x, _, ee)), Se -= gn, ee && Se < B) {
            var lt = Rr(Te, Kt);
            return Ud(
              s,
              l,
              ra,
              ae.placeholder,
              f,
              Te,
              lt,
              O,
              M,
              B - Se
            );
          }
          var zn = V ? f : this, wr = K ? zn[s] : s;
          return Se = Te.length, O ? Te = f1(Te, O) : se && Se > 1 && Te.reverse(), F && M < Se && (Te.length = M), this && this !== Ot && this instanceof ae && (wr = ge || Uo(wr)), wr.apply(zn, Te);
        }
        return ae;
      }
      function Hd(s, l) {
        return function(f, m) {
          return bb(f, s, l(m), {});
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
            typeof f == "string" || typeof m == "string" ? (f = pn(f), m = pn(m)) : (f = Od(f), m = Od(m)), v = s(f, m);
          }
          return v;
        };
      }
      function tc(s) {
        return gr(function(l) {
          return l = Qe(l, dn(ie())), we(function(f) {
            var m = this;
            return s(l, function(v) {
              return fn(v, m, f);
            });
          });
        });
      }
      function oa(s, l) {
        l = l === t ? " " : pn(l);
        var f = l.length;
        if (f < 2)
          return f ? Jl(l, s) : l;
        var m = Jl(l, js(s / $i(l)));
        return Bi(l) ? $r($n(m), 0, s).join("") : m.slice(0, s);
      }
      function Kb(s, l, f, m) {
        var v = l & C, x = Uo(s);
        function _() {
          for (var O = -1, M = arguments.length, B = -1, F = m.length, V = N(F + M), K = this && this !== Ot && this instanceof _ ? x : s; ++B < F; )
            V[B] = m[B];
          for (; M--; )
            V[B++] = arguments[++O];
          return fn(K, v ? f : this, V);
        }
        return _;
      }
      function Wd(s) {
        return function(l, f, m) {
          return m && typeof m != "number" && jt(l, f, m) && (f = m = t), l = br(l), f === t ? (f = l, l = 0) : f = br(f), m = m === t ? l < f ? 1 : -1 : br(m), Nb(l, f, m, s);
        };
      }
      function sa(s) {
        return function(l, f) {
          return typeof l == "string" && typeof f == "string" || (l = An(l), f = An(f)), s(l, f);
        };
      }
      function Ud(s, l, f, m, v, x, _, O, M, B) {
        var F = l & W, V = F ? _ : t, K = F ? t : _, ee = F ? x : t, se = F ? t : x;
        l |= F ? q : $, l &= ~(F ? $ : q), l & D || (l &= ~(C | A));
        var ge = [
          s,
          l,
          v,
          ee,
          V,
          se,
          K,
          O,
          M,
          B
        ], ae = f.apply(t, ge);
        return cc(s) && np(ae, ge), ae.placeholder = m, rp(ae, s, l);
      }
      function nc(s) {
        var l = mt[s];
        return function(f, m) {
          if (f = An(f), m = m == null ? 0 : Pt(me(m), 292), m && rd(f)) {
            var v = (We(f) + "e").split("e"), x = l(v[0] + "e" + (+v[1] + m));
            return v = (We(x) + "e").split("e"), +(v[0] + "e" + (+v[1] - m));
          }
          return l(f);
        };
      }
      var qb = zi && 1 / Ps(new zi([, -0]))[1] == Ke ? function(s) {
        return new zi(s);
      } : kc;
      function jd(s) {
        return function(l) {
          var f = Lt(l);
          return f == ne ? Dl(l) : f == ut ? u0(l) : n0(l, s(l));
        };
      }
      function mr(s, l, f, m, v, x, _, O) {
        var M = l & A;
        if (!M && typeof s != "function")
          throw new kn(a);
        var B = m ? m.length : 0;
        if (B || (l &= ~(q | $), m = v = t), _ = _ === t ? _ : gt(me(_), 0), O = O === t ? O : me(O), B -= v ? v.length : 0, l & $) {
          var F = m, V = v;
          m = v = t;
        }
        var K = M ? t : oc(s), ee = [
          s,
          l,
          f,
          m,
          v,
          F,
          V,
          x,
          _,
          O
        ];
        if (K && l1(ee, K), s = ee[0], l = ee[1], f = ee[2], m = ee[3], v = ee[4], O = ee[9] = ee[9] === t ? M ? 0 : s.length : gt(ee[9] - B, 0), !O && l & (W | E) && (l &= ~(W | E)), !l || l == C)
          var se = Ub(s, l, f);
        else
          l == W || l == E ? se = jb(s, l, O) : (l == q || l == (C | q)) && !v.length ? se = Kb(s, l, f, m) : se = ra.apply(t, ee);
        var ge = K ? Cd : np;
        return rp(ge(se, ee), s, l);
      }
      function Kd(s, l, f, m) {
        return s === t || Vn(s, Vi[f]) && !qe.call(m, f) ? l : s;
      }
      function qd(s, l, f, m, v, x) {
        return et(s) && et(l) && (x.set(l, s), Qs(s, l, t, qd, x), x.delete(l)), s;
      }
      function Jb(s) {
        return qo(s) ? t : s;
      }
      function Jd(s, l, f, m, v, x) {
        var _ = f & b, O = s.length, M = l.length;
        if (O != M && !(_ && M > O))
          return !1;
        var B = x.get(s), F = x.get(l);
        if (B && F)
          return B == l && F == s;
        var V = -1, K = !0, ee = f & k ? new ui() : t;
        for (x.set(s, l), x.set(l, s); ++V < O; ) {
          var se = s[V], ge = l[V];
          if (m)
            var ae = _ ? m(ge, se, V, l, s, x) : m(se, ge, V, s, l, x);
          if (ae !== t) {
            if (ae)
              continue;
            K = !1;
            break;
          }
          if (ee) {
            if (!El(l, function(Se, Te) {
              if (!Ro(ee, Te) && (se === Se || v(se, Se, f, m, x)))
                return ee.push(Te);
            })) {
              K = !1;
              break;
            }
          } else if (!(se === ge || v(se, ge, f, m, x))) {
            K = !1;
            break;
          }
        }
        return x.delete(s), x.delete(l), K;
      }
      function Gb(s, l, f, m, v, x, _) {
        switch (f) {
          case Bn:
            if (s.byteLength != l.byteLength || s.byteOffset != l.byteOffset)
              return !1;
            s = s.buffer, l = l.buffer;
          case qn:
            return !(s.byteLength != l.byteLength || !x(new zs(s), new zs(l)));
          case U:
          case j:
          case De:
            return Vn(+s, +l);
          case de:
            return s.name == l.name && s.message == l.message;
          case Wt:
          case Ln:
            return s == l + "";
          case ne:
            var O = Dl;
          case ut:
            var M = m & b;
            if (O || (O = Ps), s.size != l.size && !M)
              return !1;
            var B = _.get(s);
            if (B)
              return B == l;
            m |= k, _.set(s, l);
            var F = Jd(O(s), O(l), m, v, x, _);
            return _.delete(s), F;
          case xn:
            if ($o)
              return $o.call(s) == $o.call(l);
        }
        return !1;
      }
      function Xb(s, l, f, m, v, x) {
        var _ = f & b, O = rc(s), M = O.length, B = rc(l), F = B.length;
        if (M != F && !_)
          return !1;
        for (var V = M; V--; ) {
          var K = O[V];
          if (!(_ ? K in l : qe.call(l, K)))
            return !1;
        }
        var ee = x.get(s), se = x.get(l);
        if (ee && se)
          return ee == l && se == s;
        var ge = !0;
        x.set(s, l), x.set(l, s);
        for (var ae = _; ++V < M; ) {
          K = O[V];
          var Se = s[K], Te = l[K];
          if (m)
            var mn = _ ? m(Te, Se, K, l, s, x) : m(Se, Te, K, s, l, x);
          if (!(mn === t ? Se === Te || v(Se, Te, f, m, x) : mn)) {
            ge = !1;
            break;
          }
          ae || (ae = K == "constructor");
        }
        if (ge && !ae) {
          var Kt = s.constructor, gn = l.constructor;
          Kt != gn && "constructor" in s && "constructor" in l && !(typeof Kt == "function" && Kt instanceof Kt && typeof gn == "function" && gn instanceof gn) && (ge = !1);
        }
        return x.delete(s), x.delete(l), ge;
      }
      function gr(s) {
        return fc(ep(s, t, cp), s + "");
      }
      function rc(s) {
        return hd(s, wt, ac);
      }
      function ic(s) {
        return hd(s, rn, Gd);
      }
      var oc = qs ? function(s) {
        return qs.get(s);
      } : kc;
      function aa(s) {
        for (var l = s.name + "", f = Hi[l], m = qe.call(Hi, l) ? f.length : 0; m--; ) {
          var v = f[m], x = v.func;
          if (x == null || x == s)
            return v.name;
        }
        return l;
      }
      function Ki(s) {
        var l = qe.call(w, "placeholder") ? w : s;
        return l.placeholder;
      }
      function ie() {
        var s = w.iteratee || Sc;
        return s = s === Sc ? yd : s, arguments.length ? s(arguments[0], arguments[1]) : s;
      }
      function la(s, l) {
        var f = s.__data__;
        return i1(l) ? f[typeof l == "string" ? "string" : "hash"] : f.map;
      }
      function sc(s) {
        for (var l = wt(s), f = l.length; f--; ) {
          var m = l[f], v = s[m];
          l[f] = [m, v, Zd(v)];
        }
        return l;
      }
      function pi(s, l) {
        var f = a0(s, l);
        return gd(f) ? f : t;
      }
      function Yb(s) {
        var l = qe.call(s, li), f = s[li];
        try {
          s[li] = t;
          var m = !0;
        } catch {
        }
        var v = Fs.call(s);
        return m && (l ? s[li] = f : delete s[li]), v;
      }
      var ac = Il ? function(s) {
        return s == null ? [] : (s = Ge(s), Nr(Il(s), function(l) {
          return td.call(s, l);
        }));
      } : Cc, Gd = Il ? function(s) {
        for (var l = []; s; )
          Dr(l, ac(s)), s = Hs(s);
        return l;
      } : Cc, Lt = Ut;
      (Pl && Lt(new Pl(new ArrayBuffer(1))) != Bn || Po && Lt(new Po()) != ne || Ll && Lt(Ll.resolve()) != oi || zi && Lt(new zi()) != ut || Lo && Lt(new Lo()) != Kn) && (Lt = function(s) {
        var l = Ut(s), f = l == Le ? s.constructor : t, m = f ? hi(f) : "";
        if (m)
          switch (m) {
            case R0:
              return Bn;
            case I0:
              return ne;
            case P0:
              return oi;
            case L0:
              return ut;
            case B0:
              return Kn;
          }
        return l;
      });
      function Zb(s, l, f) {
        for (var m = -1, v = f.length; ++m < v; ) {
          var x = f[m], _ = x.size;
          switch (x.type) {
            case "drop":
              s += _;
              break;
            case "dropRight":
              l -= _;
              break;
            case "take":
              l = Pt(l, s + _);
              break;
            case "takeRight":
              s = gt(s, l - _);
              break;
          }
        }
        return { start: s, end: l };
      }
      function Qb(s) {
        var l = s.match(ov);
        return l ? l[1].split(sv) : [];
      }
      function Xd(s, l, f) {
        l = Br(l, s);
        for (var m = -1, v = l.length, x = !1; ++m < v; ) {
          var _ = Xn(l[m]);
          if (!(x = s != null && f(s, _)))
            break;
          s = s[_];
        }
        return x || ++m != v ? x : (v = s == null ? 0 : s.length, !!v && ma(v) && yr(_, v) && (pe(s) || mi(s)));
      }
      function e1(s) {
        var l = s.length, f = new s.constructor(l);
        return l && typeof s[0] == "string" && qe.call(s, "index") && (f.index = s.index, f.input = s.input), f;
      }
      function Yd(s) {
        return typeof s.constructor == "function" && !jo(s) ? Wi(Hs(s)) : {};
      }
      function t1(s, l, f) {
        var m = s.constructor;
        switch (l) {
          case qn:
            return ec(s);
          case U:
          case j:
            return new m(+s);
          case Bn:
            return $b(s, f);
          case Co:
          case Eo:
          case Oo:
          case To:
          case Ao:
          case I:
          case Y:
          case re:
          case Re:
            return Rd(s, f);
          case ne:
            return new m();
          case De:
          case Ln:
            return new m(s);
          case Wt:
            return Fb(s);
          case ut:
            return new m();
          case xn:
            return Vb(s);
        }
      }
      function n1(s, l) {
        var f = l.length;
        if (!f)
          return s;
        var m = f - 1;
        return l[m] = (f > 1 ? "& " : "") + l[m], l = l.join(f > 2 ? ", " : " "), s.replace(iv, `{
/* [wrapped with ` + l + `] */
`);
      }
      function r1(s) {
        return pe(s) || mi(s) || !!(nd && s && s[nd]);
      }
      function yr(s, l) {
        var f = typeof s;
        return l = l == null ? ze : l, !!l && (f == "number" || f != "symbol" && mv.test(s)) && s > -1 && s % 1 == 0 && s < l;
      }
      function jt(s, l, f) {
        if (!et(f))
          return !1;
        var m = typeof l;
        return (m == "number" ? nn(f) && yr(l, f.length) : m == "string" && l in f) ? Vn(f[l], s) : !1;
      }
      function lc(s, l) {
        if (pe(s))
          return !1;
        var f = typeof s;
        return f == "number" || f == "symbol" || f == "boolean" || s == null || hn(s) ? !0 : Ii.test(s) || !Do.test(s) || l != null && s in Ge(l);
      }
      function i1(s) {
        var l = typeof s;
        return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? s !== "__proto__" : s === null;
      }
      function cc(s) {
        var l = aa(s), f = w[l];
        if (typeof f != "function" || !(l in Ce.prototype))
          return !1;
        if (s === f)
          return !0;
        var m = oc(f);
        return !!m && s === m[0];
      }
      function o1(s) {
        return !!Zf && Zf in s;
      }
      var s1 = Bs ? vr : Ec;
      function jo(s) {
        var l = s && s.constructor, f = typeof l == "function" && l.prototype || Vi;
        return s === f;
      }
      function Zd(s) {
        return s === s && !et(s);
      }
      function Qd(s, l) {
        return function(f) {
          return f == null ? !1 : f[s] === l && (l !== t || s in Ge(f));
        };
      }
      function a1(s) {
        var l = pa(s, function(m) {
          return f.size === d && f.clear(), m;
        }), f = l.cache;
        return l;
      }
      function l1(s, l) {
        var f = s[1], m = l[1], v = f | m, x = v < (C | A | te), _ = m == te && f == W || m == te && f == _e && s[7].length <= l[8] || m == (te | _e) && l[7].length <= l[8] && f == W;
        if (!(x || _))
          return s;
        m & C && (s[2] = l[2], v |= f & C ? 0 : D);
        var O = l[3];
        if (O) {
          var M = s[3];
          s[3] = M ? Pd(M, O, l[4]) : O, s[4] = M ? Rr(s[3], p) : l[4];
        }
        return O = l[5], O && (M = s[5], s[5] = M ? Ld(M, O, l[6]) : O, s[6] = M ? Rr(s[5], p) : l[6]), O = l[7], O && (s[7] = O), m & te && (s[8] = s[8] == null ? l[8] : Pt(s[8], l[8])), s[9] == null && (s[9] = l[9]), s[0] = l[0], s[1] = v, s;
      }
      function c1(s) {
        var l = [];
        if (s != null)
          for (var f in Ge(s))
            l.push(f);
        return l;
      }
      function u1(s) {
        return Fs.call(s);
      }
      function ep(s, l, f) {
        return l = gt(l === t ? s.length - 1 : l, 0), function() {
          for (var m = arguments, v = -1, x = gt(m.length - l, 0), _ = N(x); ++v < x; )
            _[v] = m[l + v];
          v = -1;
          for (var O = N(l + 1); ++v < l; )
            O[v] = m[v];
          return O[l] = f(_), fn(s, this, O);
        };
      }
      function tp(s, l) {
        return l.length < 2 ? s : di(s, On(l, 0, -1));
      }
      function f1(s, l) {
        for (var f = s.length, m = Pt(l.length, f), v = tn(s); m--; ) {
          var x = l[m];
          s[m] = yr(x, f) ? v[x] : t;
        }
        return s;
      }
      function uc(s, l) {
        if (!(l === "constructor" && typeof s[l] == "function") && l != "__proto__")
          return s[l];
      }
      var np = ip(Cd), Ko = E0 || function(s, l) {
        return Ot.setTimeout(s, l);
      }, fc = ip(Ib);
      function rp(s, l, f) {
        var m = l + "";
        return fc(s, n1(m, d1(Qb(m), f)));
      }
      function ip(s) {
        var l = 0, f = 0;
        return function() {
          var m = M0(), v = Pe - (m - f);
          if (f = m, v > 0) {
            if (++l >= je)
              return arguments[0];
          } else
            l = 0;
          return s.apply(t, arguments);
        };
      }
      function ca(s, l) {
        var f = -1, m = s.length, v = m - 1;
        for (l = l === t ? m : l; ++f < l; ) {
          var x = ql(f, v), _ = s[x];
          s[x] = s[f], s[f] = _;
        }
        return s.length = l, s;
      }
      var op = a1(function(s) {
        var l = [];
        return s.charCodeAt(0) === 46 && l.push(""), s.replace(tv, function(f, m, v, x) {
          l.push(v ? x.replace(cv, "$1") : m || f);
        }), l;
      });
      function Xn(s) {
        if (typeof s == "string" || hn(s))
          return s;
        var l = s + "";
        return l == "0" && 1 / s == -Ke ? "-0" : l;
      }
      function hi(s) {
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
      function d1(s, l) {
        return _n(It, function(f) {
          var m = "_." + f[0];
          l & f[1] && !Rs(s, m) && s.push(m);
        }), s.sort();
      }
      function sp(s) {
        if (s instanceof Ce)
          return s.clone();
        var l = new Cn(s.__wrapped__, s.__chain__);
        return l.__actions__ = tn(s.__actions__), l.__index__ = s.__index__, l.__values__ = s.__values__, l;
      }
      function p1(s, l, f) {
        (f ? jt(s, l, f) : l === t) ? l = 1 : l = gt(me(l), 0);
        var m = s == null ? 0 : s.length;
        if (!m || l < 1)
          return [];
        for (var v = 0, x = 0, _ = N(js(m / l)); v < m; )
          _[x++] = On(s, v, v += l);
        return _;
      }
      function h1(s) {
        for (var l = -1, f = s == null ? 0 : s.length, m = 0, v = []; ++l < f; ) {
          var x = s[l];
          x && (v[m++] = x);
        }
        return v;
      }
      function m1() {
        var s = arguments.length;
        if (!s)
          return [];
        for (var l = N(s - 1), f = arguments[0], m = s; m--; )
          l[m - 1] = arguments[m];
        return Dr(pe(f) ? tn(f) : [f], Tt(l, 1));
      }
      var g1 = we(function(s, l) {
        return at(s) ? Vo(s, Tt(l, 1, at, !0)) : [];
      }), y1 = we(function(s, l) {
        var f = Tn(l);
        return at(f) && (f = t), at(s) ? Vo(s, Tt(l, 1, at, !0), ie(f, 2)) : [];
      }), v1 = we(function(s, l) {
        var f = Tn(l);
        return at(f) && (f = t), at(s) ? Vo(s, Tt(l, 1, at, !0), t, f) : [];
      });
      function b1(s, l, f) {
        var m = s == null ? 0 : s.length;
        return m ? (l = f || l === t ? 1 : me(l), On(s, l < 0 ? 0 : l, m)) : [];
      }
      function w1(s, l, f) {
        var m = s == null ? 0 : s.length;
        return m ? (l = f || l === t ? 1 : me(l), l = m - l, On(s, 0, l < 0 ? 0 : l)) : [];
      }
      function x1(s, l) {
        return s && s.length ? ta(s, ie(l, 3), !0, !0) : [];
      }
      function S1(s, l) {
        return s && s.length ? ta(s, ie(l, 3), !0) : [];
      }
      function _1(s, l, f, m) {
        var v = s == null ? 0 : s.length;
        return v ? (f && typeof f != "number" && jt(s, l, f) && (f = 0, m = v), mb(s, l, f, m)) : [];
      }
      function ap(s, l, f) {
        var m = s == null ? 0 : s.length;
        if (!m)
          return -1;
        var v = f == null ? 0 : me(f);
        return v < 0 && (v = gt(m + v, 0)), Is(s, ie(l, 3), v);
      }
      function lp(s, l, f) {
        var m = s == null ? 0 : s.length;
        if (!m)
          return -1;
        var v = m - 1;
        return f !== t && (v = me(f), v = f < 0 ? gt(m + v, 0) : Pt(v, m - 1)), Is(s, ie(l, 3), v, !0);
      }
      function cp(s) {
        var l = s == null ? 0 : s.length;
        return l ? Tt(s, 1) : [];
      }
      function k1(s) {
        var l = s == null ? 0 : s.length;
        return l ? Tt(s, Ke) : [];
      }
      function C1(s, l) {
        var f = s == null ? 0 : s.length;
        return f ? (l = l === t ? 1 : me(l), Tt(s, l)) : [];
      }
      function E1(s) {
        for (var l = -1, f = s == null ? 0 : s.length, m = {}; ++l < f; ) {
          var v = s[l];
          m[v[0]] = v[1];
        }
        return m;
      }
      function up(s) {
        return s && s.length ? s[0] : t;
      }
      function O1(s, l, f) {
        var m = s == null ? 0 : s.length;
        if (!m)
          return -1;
        var v = f == null ? 0 : me(f);
        return v < 0 && (v = gt(m + v, 0)), Li(s, l, v);
      }
      function T1(s) {
        var l = s == null ? 0 : s.length;
        return l ? On(s, 0, -1) : [];
      }
      var A1 = we(function(s) {
        var l = Qe(s, Zl);
        return l.length && l[0] === s[0] ? Hl(l) : [];
      }), M1 = we(function(s) {
        var l = Tn(s), f = Qe(s, Zl);
        return l === Tn(f) ? l = t : f.pop(), f.length && f[0] === s[0] ? Hl(f, ie(l, 2)) : [];
      }), N1 = we(function(s) {
        var l = Tn(s), f = Qe(s, Zl);
        return l = typeof l == "function" ? l : t, l && f.pop(), f.length && f[0] === s[0] ? Hl(f, t, l) : [];
      });
      function D1(s, l) {
        return s == null ? "" : T0.call(s, l);
      }
      function Tn(s) {
        var l = s == null ? 0 : s.length;
        return l ? s[l - 1] : t;
      }
      function R1(s, l, f) {
        var m = s == null ? 0 : s.length;
        if (!m)
          return -1;
        var v = m;
        return f !== t && (v = me(f), v = v < 0 ? gt(m + v, 0) : Pt(v, m - 1)), l === l ? d0(s, l, v) : Is(s, Uf, v, !0);
      }
      function I1(s, l) {
        return s && s.length ? xd(s, me(l)) : t;
      }
      var P1 = we(fp);
      function fp(s, l) {
        return s && s.length && l && l.length ? Kl(s, l) : s;
      }
      function L1(s, l, f) {
        return s && s.length && l && l.length ? Kl(s, l, ie(f, 2)) : s;
      }
      function B1(s, l, f) {
        return s && s.length && l && l.length ? Kl(s, l, t, f) : s;
      }
      var $1 = gr(function(s, l) {
        var f = s == null ? 0 : s.length, m = $l(s, l);
        return kd(s, Qe(l, function(v) {
          return yr(v, f) ? +v : v;
        }).sort(Id)), m;
      });
      function F1(s, l) {
        var f = [];
        if (!(s && s.length))
          return f;
        var m = -1, v = [], x = s.length;
        for (l = ie(l, 3); ++m < x; ) {
          var _ = s[m];
          l(_, m, s) && (f.push(_), v.push(m));
        }
        return kd(s, v), f;
      }
      function dc(s) {
        return s == null ? s : D0.call(s);
      }
      function V1(s, l, f) {
        var m = s == null ? 0 : s.length;
        return m ? (f && typeof f != "number" && jt(s, l, f) ? (l = 0, f = m) : (l = l == null ? 0 : me(l), f = f === t ? m : me(f)), On(s, l, f)) : [];
      }
      function z1(s, l) {
        return ea(s, l);
      }
      function H1(s, l, f) {
        return Gl(s, l, ie(f, 2));
      }
      function W1(s, l) {
        var f = s == null ? 0 : s.length;
        if (f) {
          var m = ea(s, l);
          if (m < f && Vn(s[m], l))
            return m;
        }
        return -1;
      }
      function U1(s, l) {
        return ea(s, l, !0);
      }
      function j1(s, l, f) {
        return Gl(s, l, ie(f, 2), !0);
      }
      function K1(s, l) {
        var f = s == null ? 0 : s.length;
        if (f) {
          var m = ea(s, l, !0) - 1;
          if (Vn(s[m], l))
            return m;
        }
        return -1;
      }
      function q1(s) {
        return s && s.length ? Ed(s) : [];
      }
      function J1(s, l) {
        return s && s.length ? Ed(s, ie(l, 2)) : [];
      }
      function G1(s) {
        var l = s == null ? 0 : s.length;
        return l ? On(s, 1, l) : [];
      }
      function X1(s, l, f) {
        return s && s.length ? (l = f || l === t ? 1 : me(l), On(s, 0, l < 0 ? 0 : l)) : [];
      }
      function Y1(s, l, f) {
        var m = s == null ? 0 : s.length;
        return m ? (l = f || l === t ? 1 : me(l), l = m - l, On(s, l < 0 ? 0 : l, m)) : [];
      }
      function Z1(s, l) {
        return s && s.length ? ta(s, ie(l, 3), !1, !0) : [];
      }
      function Q1(s, l) {
        return s && s.length ? ta(s, ie(l, 3)) : [];
      }
      var ew = we(function(s) {
        return Lr(Tt(s, 1, at, !0));
      }), tw = we(function(s) {
        var l = Tn(s);
        return at(l) && (l = t), Lr(Tt(s, 1, at, !0), ie(l, 2));
      }), nw = we(function(s) {
        var l = Tn(s);
        return l = typeof l == "function" ? l : t, Lr(Tt(s, 1, at, !0), t, l);
      });
      function rw(s) {
        return s && s.length ? Lr(s) : [];
      }
      function iw(s, l) {
        return s && s.length ? Lr(s, ie(l, 2)) : [];
      }
      function ow(s, l) {
        return l = typeof l == "function" ? l : t, s && s.length ? Lr(s, t, l) : [];
      }
      function pc(s) {
        if (!(s && s.length))
          return [];
        var l = 0;
        return s = Nr(s, function(f) {
          if (at(f))
            return l = gt(f.length, l), !0;
        }), Ml(l, function(f) {
          return Qe(s, Ol(f));
        });
      }
      function dp(s, l) {
        if (!(s && s.length))
          return [];
        var f = pc(s);
        return l == null ? f : Qe(f, function(m) {
          return fn(l, t, m);
        });
      }
      var sw = we(function(s, l) {
        return at(s) ? Vo(s, l) : [];
      }), aw = we(function(s) {
        return Yl(Nr(s, at));
      }), lw = we(function(s) {
        var l = Tn(s);
        return at(l) && (l = t), Yl(Nr(s, at), ie(l, 2));
      }), cw = we(function(s) {
        var l = Tn(s);
        return l = typeof l == "function" ? l : t, Yl(Nr(s, at), t, l);
      }), uw = we(pc);
      function fw(s, l) {
        return Md(s || [], l || [], Fo);
      }
      function dw(s, l) {
        return Md(s || [], l || [], Wo);
      }
      var pw = we(function(s) {
        var l = s.length, f = l > 1 ? s[l - 1] : t;
        return f = typeof f == "function" ? (s.pop(), f) : t, dp(s, f);
      });
      function pp(s) {
        var l = w(s);
        return l.__chain__ = !0, l;
      }
      function hw(s, l) {
        return l(s), s;
      }
      function ua(s, l) {
        return l(s);
      }
      var mw = gr(function(s) {
        var l = s.length, f = l ? s[0] : 0, m = this.__wrapped__, v = function(x) {
          return $l(x, s);
        };
        return l > 1 || this.__actions__.length || !(m instanceof Ce) || !yr(f) ? this.thru(v) : (m = m.slice(f, +f + (l ? 1 : 0)), m.__actions__.push({
          func: ua,
          args: [v],
          thisArg: t
        }), new Cn(m, this.__chain__).thru(function(x) {
          return l && !x.length && x.push(t), x;
        }));
      });
      function gw() {
        return pp(this);
      }
      function yw() {
        return new Cn(this.value(), this.__chain__);
      }
      function vw() {
        this.__values__ === t && (this.__values__ = Op(this.value()));
        var s = this.__index__ >= this.__values__.length, l = s ? t : this.__values__[this.__index__++];
        return { done: s, value: l };
      }
      function bw() {
        return this;
      }
      function ww(s) {
        for (var l, f = this; f instanceof Gs; ) {
          var m = sp(f);
          m.__index__ = 0, m.__values__ = t, l ? v.__wrapped__ = m : l = m;
          var v = m;
          f = f.__wrapped__;
        }
        return v.__wrapped__ = s, l;
      }
      function xw() {
        var s = this.__wrapped__;
        if (s instanceof Ce) {
          var l = s;
          return this.__actions__.length && (l = new Ce(this)), l = l.reverse(), l.__actions__.push({
            func: ua,
            args: [dc],
            thisArg: t
          }), new Cn(l, this.__chain__);
        }
        return this.thru(dc);
      }
      function Sw() {
        return Ad(this.__wrapped__, this.__actions__);
      }
      var _w = na(function(s, l, f) {
        qe.call(s, f) ? ++s[f] : hr(s, f, 1);
      });
      function kw(s, l, f) {
        var m = pe(s) ? Hf : hb;
        return f && jt(s, l, f) && (l = t), m(s, ie(l, 3));
      }
      function Cw(s, l) {
        var f = pe(s) ? Nr : dd;
        return f(s, ie(l, 3));
      }
      var Ew = Vd(ap), Ow = Vd(lp);
      function Tw(s, l) {
        return Tt(fa(s, l), 1);
      }
      function Aw(s, l) {
        return Tt(fa(s, l), Ke);
      }
      function Mw(s, l, f) {
        return f = f === t ? 1 : me(f), Tt(fa(s, l), f);
      }
      function hp(s, l) {
        var f = pe(s) ? _n : Pr;
        return f(s, ie(l, 3));
      }
      function mp(s, l) {
        var f = pe(s) ? Gv : fd;
        return f(s, ie(l, 3));
      }
      var Nw = na(function(s, l, f) {
        qe.call(s, f) ? s[f].push(l) : hr(s, f, [l]);
      });
      function Dw(s, l, f, m) {
        s = nn(s) ? s : Ji(s), f = f && !m ? me(f) : 0;
        var v = s.length;
        return f < 0 && (f = gt(v + f, 0)), ga(s) ? f <= v && s.indexOf(l, f) > -1 : !!v && Li(s, l, f) > -1;
      }
      var Rw = we(function(s, l, f) {
        var m = -1, v = typeof l == "function", x = nn(s) ? N(s.length) : [];
        return Pr(s, function(_) {
          x[++m] = v ? fn(l, _, f) : zo(_, l, f);
        }), x;
      }), Iw = na(function(s, l, f) {
        hr(s, f, l);
      });
      function fa(s, l) {
        var f = pe(s) ? Qe : vd;
        return f(s, ie(l, 3));
      }
      function Pw(s, l, f, m) {
        return s == null ? [] : (pe(l) || (l = l == null ? [] : [l]), f = m ? t : f, pe(f) || (f = f == null ? [] : [f]), Sd(s, l, f));
      }
      var Lw = na(function(s, l, f) {
        s[f ? 0 : 1].push(l);
      }, function() {
        return [[], []];
      });
      function Bw(s, l, f) {
        var m = pe(s) ? Cl : Kf, v = arguments.length < 3;
        return m(s, ie(l, 4), f, v, Pr);
      }
      function $w(s, l, f) {
        var m = pe(s) ? Xv : Kf, v = arguments.length < 3;
        return m(s, ie(l, 4), f, v, fd);
      }
      function Fw(s, l) {
        var f = pe(s) ? Nr : dd;
        return f(s, ha(ie(l, 3)));
      }
      function Vw(s) {
        var l = pe(s) ? ad : Db;
        return l(s);
      }
      function zw(s, l, f) {
        (f ? jt(s, l, f) : l === t) ? l = 1 : l = me(l);
        var m = pe(s) ? cb : Rb;
        return m(s, l);
      }
      function Hw(s) {
        var l = pe(s) ? ub : Pb;
        return l(s);
      }
      function Ww(s) {
        if (s == null)
          return 0;
        if (nn(s))
          return ga(s) ? $i(s) : s.length;
        var l = Lt(s);
        return l == ne || l == ut ? s.size : Ul(s).length;
      }
      function Uw(s, l, f) {
        var m = pe(s) ? El : Lb;
        return f && jt(s, l, f) && (l = t), m(s, ie(l, 3));
      }
      var jw = we(function(s, l) {
        if (s == null)
          return [];
        var f = l.length;
        return f > 1 && jt(s, l[0], l[1]) ? l = [] : f > 2 && jt(l[0], l[1], l[2]) && (l = [l[0]]), Sd(s, Tt(l, 1), []);
      }), da = C0 || function() {
        return Ot.Date.now();
      };
      function Kw(s, l) {
        if (typeof l != "function")
          throw new kn(a);
        return s = me(s), function() {
          if (--s < 1)
            return l.apply(this, arguments);
        };
      }
      function gp(s, l, f) {
        return l = f ? t : l, l = s && l == null ? s.length : l, mr(s, te, t, t, t, t, l);
      }
      function yp(s, l) {
        var f;
        if (typeof l != "function")
          throw new kn(a);
        return s = me(s), function() {
          return --s > 0 && (f = l.apply(this, arguments)), s <= 1 && (l = t), f;
        };
      }
      var hc = we(function(s, l, f) {
        var m = C;
        if (f.length) {
          var v = Rr(f, Ki(hc));
          m |= q;
        }
        return mr(s, m, l, f, v);
      }), vp = we(function(s, l, f) {
        var m = C | A;
        if (f.length) {
          var v = Rr(f, Ki(vp));
          m |= q;
        }
        return mr(l, m, s, f, v);
      });
      function bp(s, l, f) {
        l = f ? t : l;
        var m = mr(s, W, t, t, t, t, t, l);
        return m.placeholder = bp.placeholder, m;
      }
      function wp(s, l, f) {
        l = f ? t : l;
        var m = mr(s, E, t, t, t, t, t, l);
        return m.placeholder = wp.placeholder, m;
      }
      function xp(s, l, f) {
        var m, v, x, _, O, M, B = 0, F = !1, V = !1, K = !0;
        if (typeof s != "function")
          throw new kn(a);
        l = An(l) || 0, et(f) && (F = !!f.leading, V = "maxWait" in f, x = V ? gt(An(f.maxWait) || 0, l) : x, K = "trailing" in f ? !!f.trailing : K);
        function ee(lt) {
          var zn = m, wr = v;
          return m = v = t, B = lt, _ = s.apply(wr, zn), _;
        }
        function se(lt) {
          return B = lt, O = Ko(Se, l), F ? ee(lt) : _;
        }
        function ge(lt) {
          var zn = lt - M, wr = lt - B, Vp = l - zn;
          return V ? Pt(Vp, x - wr) : Vp;
        }
        function ae(lt) {
          var zn = lt - M, wr = lt - B;
          return M === t || zn >= l || zn < 0 || V && wr >= x;
        }
        function Se() {
          var lt = da();
          if (ae(lt))
            return Te(lt);
          O = Ko(Se, ge(lt));
        }
        function Te(lt) {
          return O = t, K && m ? ee(lt) : (m = v = t, _);
        }
        function mn() {
          O !== t && Nd(O), B = 0, m = M = v = O = t;
        }
        function Kt() {
          return O === t ? _ : Te(da());
        }
        function gn() {
          var lt = da(), zn = ae(lt);
          if (m = arguments, v = this, M = lt, zn) {
            if (O === t)
              return se(M);
            if (V)
              return Nd(O), O = Ko(Se, l), ee(M);
          }
          return O === t && (O = Ko(Se, l)), _;
        }
        return gn.cancel = mn, gn.flush = Kt, gn;
      }
      var qw = we(function(s, l) {
        return ud(s, 1, l);
      }), Jw = we(function(s, l, f) {
        return ud(s, An(l) || 0, f);
      });
      function Gw(s) {
        return mr(s, Z);
      }
      function pa(s, l) {
        if (typeof s != "function" || l != null && typeof l != "function")
          throw new kn(a);
        var f = function() {
          var m = arguments, v = l ? l.apply(this, m) : m[0], x = f.cache;
          if (x.has(v))
            return x.get(v);
          var _ = s.apply(this, m);
          return f.cache = x.set(v, _) || x, _;
        };
        return f.cache = new (pa.Cache || pr)(), f;
      }
      pa.Cache = pr;
      function ha(s) {
        if (typeof s != "function")
          throw new kn(a);
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
      function Xw(s) {
        return yp(2, s);
      }
      var Yw = Bb(function(s, l) {
        l = l.length == 1 && pe(l[0]) ? Qe(l[0], dn(ie())) : Qe(Tt(l, 1), dn(ie()));
        var f = l.length;
        return we(function(m) {
          for (var v = -1, x = Pt(m.length, f); ++v < x; )
            m[v] = l[v].call(this, m[v]);
          return fn(s, this, m);
        });
      }), mc = we(function(s, l) {
        var f = Rr(l, Ki(mc));
        return mr(s, q, t, l, f);
      }), Sp = we(function(s, l) {
        var f = Rr(l, Ki(Sp));
        return mr(s, $, t, l, f);
      }), Zw = gr(function(s, l) {
        return mr(s, _e, t, t, t, l);
      });
      function Qw(s, l) {
        if (typeof s != "function")
          throw new kn(a);
        return l = l === t ? l : me(l), we(s, l);
      }
      function ex(s, l) {
        if (typeof s != "function")
          throw new kn(a);
        return l = l == null ? 0 : gt(me(l), 0), we(function(f) {
          var m = f[l], v = $r(f, 0, l);
          return m && Dr(v, m), fn(s, this, v);
        });
      }
      function tx(s, l, f) {
        var m = !0, v = !0;
        if (typeof s != "function")
          throw new kn(a);
        return et(f) && (m = "leading" in f ? !!f.leading : m, v = "trailing" in f ? !!f.trailing : v), xp(s, l, {
          leading: m,
          maxWait: l,
          trailing: v
        });
      }
      function nx(s) {
        return gp(s, 1);
      }
      function rx(s, l) {
        return mc(Ql(l), s);
      }
      function ix() {
        if (!arguments.length)
          return [];
        var s = arguments[0];
        return pe(s) ? s : [s];
      }
      function ox(s) {
        return En(s, y);
      }
      function sx(s, l) {
        return l = typeof l == "function" ? l : t, En(s, y, l);
      }
      function ax(s) {
        return En(s, h | y);
      }
      function lx(s, l) {
        return l = typeof l == "function" ? l : t, En(s, h | y, l);
      }
      function cx(s, l) {
        return l == null || cd(s, l, wt(l));
      }
      function Vn(s, l) {
        return s === l || s !== s && l !== l;
      }
      var ux = sa(zl), fx = sa(function(s, l) {
        return s >= l;
      }), mi = md(function() {
        return arguments;
      }()) ? md : function(s) {
        return tt(s) && qe.call(s, "callee") && !td.call(s, "callee");
      }, pe = N.isArray, dx = Lf ? dn(Lf) : wb;
      function nn(s) {
        return s != null && ma(s.length) && !vr(s);
      }
      function at(s) {
        return tt(s) && nn(s);
      }
      function px(s) {
        return s === !0 || s === !1 || tt(s) && Ut(s) == U;
      }
      var Fr = O0 || Ec, hx = Bf ? dn(Bf) : xb;
      function mx(s) {
        return tt(s) && s.nodeType === 1 && !qo(s);
      }
      function gx(s) {
        if (s == null)
          return !0;
        if (nn(s) && (pe(s) || typeof s == "string" || typeof s.splice == "function" || Fr(s) || qi(s) || mi(s)))
          return !s.length;
        var l = Lt(s);
        if (l == ne || l == ut)
          return !s.size;
        if (jo(s))
          return !Ul(s).length;
        for (var f in s)
          if (qe.call(s, f))
            return !1;
        return !0;
      }
      function yx(s, l) {
        return Ho(s, l);
      }
      function vx(s, l, f) {
        f = typeof f == "function" ? f : t;
        var m = f ? f(s, l) : t;
        return m === t ? Ho(s, l, t, f) : !!m;
      }
      function gc(s) {
        if (!tt(s))
          return !1;
        var l = Ut(s);
        return l == de || l == G || typeof s.message == "string" && typeof s.name == "string" && !qo(s);
      }
      function bx(s) {
        return typeof s == "number" && rd(s);
      }
      function vr(s) {
        if (!et(s))
          return !1;
        var l = Ut(s);
        return l == He || l == ce || l == R || l == Ni;
      }
      function _p(s) {
        return typeof s == "number" && s == me(s);
      }
      function ma(s) {
        return typeof s == "number" && s > -1 && s % 1 == 0 && s <= ze;
      }
      function et(s) {
        var l = typeof s;
        return s != null && (l == "object" || l == "function");
      }
      function tt(s) {
        return s != null && typeof s == "object";
      }
      var kp = $f ? dn($f) : _b;
      function wx(s, l) {
        return s === l || Wl(s, l, sc(l));
      }
      function xx(s, l, f) {
        return f = typeof f == "function" ? f : t, Wl(s, l, sc(l), f);
      }
      function Sx(s) {
        return Cp(s) && s != +s;
      }
      function _x(s) {
        if (s1(s))
          throw new ue(o);
        return gd(s);
      }
      function kx(s) {
        return s === null;
      }
      function Cx(s) {
        return s == null;
      }
      function Cp(s) {
        return typeof s == "number" || tt(s) && Ut(s) == De;
      }
      function qo(s) {
        if (!tt(s) || Ut(s) != Le)
          return !1;
        var l = Hs(s);
        if (l === null)
          return !0;
        var f = qe.call(l, "constructor") && l.constructor;
        return typeof f == "function" && f instanceof f && $s.call(f) == x0;
      }
      var yc = Ff ? dn(Ff) : kb;
      function Ex(s) {
        return _p(s) && s >= -ze && s <= ze;
      }
      var Ep = Vf ? dn(Vf) : Cb;
      function ga(s) {
        return typeof s == "string" || !pe(s) && tt(s) && Ut(s) == Ln;
      }
      function hn(s) {
        return typeof s == "symbol" || tt(s) && Ut(s) == xn;
      }
      var qi = zf ? dn(zf) : Eb;
      function Ox(s) {
        return s === t;
      }
      function Tx(s) {
        return tt(s) && Lt(s) == Kn;
      }
      function Ax(s) {
        return tt(s) && Ut(s) == Di;
      }
      var Mx = sa(jl), Nx = sa(function(s, l) {
        return s <= l;
      });
      function Op(s) {
        if (!s)
          return [];
        if (nn(s))
          return ga(s) ? $n(s) : tn(s);
        if (Io && s[Io])
          return c0(s[Io]());
        var l = Lt(s), f = l == ne ? Dl : l == ut ? Ps : Ji;
        return f(s);
      }
      function br(s) {
        if (!s)
          return s === 0 ? s : 0;
        if (s = An(s), s === Ke || s === -Ke) {
          var l = s < 0 ? -1 : 1;
          return l * Qt;
        }
        return s === s ? s : 0;
      }
      function me(s) {
        var l = br(s), f = l % 1;
        return l === l ? f ? l - f : l : 0;
      }
      function Tp(s) {
        return s ? fi(me(s), 0, it) : 0;
      }
      function An(s) {
        if (typeof s == "number")
          return s;
        if (hn(s))
          return ht;
        if (et(s)) {
          var l = typeof s.valueOf == "function" ? s.valueOf() : s;
          s = et(l) ? l + "" : l;
        }
        if (typeof s != "string")
          return s === 0 ? s : +s;
        s = qf(s);
        var f = dv.test(s);
        return f || hv.test(s) ? Kv(s.slice(2), f ? 2 : 8) : fv.test(s) ? ht : +s;
      }
      function Ap(s) {
        return Gn(s, rn(s));
      }
      function Dx(s) {
        return s ? fi(me(s), -ze, ze) : s === 0 ? s : 0;
      }
      function We(s) {
        return s == null ? "" : pn(s);
      }
      var Rx = Ui(function(s, l) {
        if (jo(l) || nn(l)) {
          Gn(l, wt(l), s);
          return;
        }
        for (var f in l)
          qe.call(l, f) && Fo(s, f, l[f]);
      }), Mp = Ui(function(s, l) {
        Gn(l, rn(l), s);
      }), ya = Ui(function(s, l, f, m) {
        Gn(l, rn(l), s, m);
      }), Ix = Ui(function(s, l, f, m) {
        Gn(l, wt(l), s, m);
      }), Px = gr($l);
      function Lx(s, l) {
        var f = Wi(s);
        return l == null ? f : ld(f, l);
      }
      var Bx = we(function(s, l) {
        s = Ge(s);
        var f = -1, m = l.length, v = m > 2 ? l[2] : t;
        for (v && jt(l[0], l[1], v) && (m = 1); ++f < m; )
          for (var x = l[f], _ = rn(x), O = -1, M = _.length; ++O < M; ) {
            var B = _[O], F = s[B];
            (F === t || Vn(F, Vi[B]) && !qe.call(s, B)) && (s[B] = x[B]);
          }
        return s;
      }), $x = we(function(s) {
        return s.push(t, qd), fn(Np, t, s);
      });
      function Fx(s, l) {
        return Wf(s, ie(l, 3), Jn);
      }
      function Vx(s, l) {
        return Wf(s, ie(l, 3), Vl);
      }
      function zx(s, l) {
        return s == null ? s : Fl(s, ie(l, 3), rn);
      }
      function Hx(s, l) {
        return s == null ? s : pd(s, ie(l, 3), rn);
      }
      function Wx(s, l) {
        return s && Jn(s, ie(l, 3));
      }
      function Ux(s, l) {
        return s && Vl(s, ie(l, 3));
      }
      function jx(s) {
        return s == null ? [] : Zs(s, wt(s));
      }
      function Kx(s) {
        return s == null ? [] : Zs(s, rn(s));
      }
      function vc(s, l, f) {
        var m = s == null ? t : di(s, l);
        return m === t ? f : m;
      }
      function qx(s, l) {
        return s != null && Xd(s, l, gb);
      }
      function bc(s, l) {
        return s != null && Xd(s, l, yb);
      }
      var Jx = Hd(function(s, l, f) {
        l != null && typeof l.toString != "function" && (l = Fs.call(l)), s[l] = f;
      }, xc(on)), Gx = Hd(function(s, l, f) {
        l != null && typeof l.toString != "function" && (l = Fs.call(l)), qe.call(s, l) ? s[l].push(f) : s[l] = [f];
      }, ie), Xx = we(zo);
      function wt(s) {
        return nn(s) ? sd(s) : Ul(s);
      }
      function rn(s) {
        return nn(s) ? sd(s, !0) : Ob(s);
      }
      function Yx(s, l) {
        var f = {};
        return l = ie(l, 3), Jn(s, function(m, v, x) {
          hr(f, l(m, v, x), m);
        }), f;
      }
      function Zx(s, l) {
        var f = {};
        return l = ie(l, 3), Jn(s, function(m, v, x) {
          hr(f, v, l(m, v, x));
        }), f;
      }
      var Qx = Ui(function(s, l, f) {
        Qs(s, l, f);
      }), Np = Ui(function(s, l, f, m) {
        Qs(s, l, f, m);
      }), eS = gr(function(s, l) {
        var f = {};
        if (s == null)
          return f;
        var m = !1;
        l = Qe(l, function(x) {
          return x = Br(x, s), m || (m = x.length > 1), x;
        }), Gn(s, ic(s), f), m && (f = En(f, h | g | y, Jb));
        for (var v = l.length; v--; )
          Xl(f, l[v]);
        return f;
      });
      function tS(s, l) {
        return Dp(s, ha(ie(l)));
      }
      var nS = gr(function(s, l) {
        return s == null ? {} : Ab(s, l);
      });
      function Dp(s, l) {
        if (s == null)
          return {};
        var f = Qe(ic(s), function(m) {
          return [m];
        });
        return l = ie(l), _d(s, f, function(m, v) {
          return l(m, v[0]);
        });
      }
      function rS(s, l, f) {
        l = Br(l, s);
        var m = -1, v = l.length;
        for (v || (v = 1, s = t); ++m < v; ) {
          var x = s == null ? t : s[Xn(l[m])];
          x === t && (m = v, x = f), s = vr(x) ? x.call(s) : x;
        }
        return s;
      }
      function iS(s, l, f) {
        return s == null ? s : Wo(s, l, f);
      }
      function oS(s, l, f, m) {
        return m = typeof m == "function" ? m : t, s == null ? s : Wo(s, l, f, m);
      }
      var Rp = jd(wt), Ip = jd(rn);
      function sS(s, l, f) {
        var m = pe(s), v = m || Fr(s) || qi(s);
        if (l = ie(l, 4), f == null) {
          var x = s && s.constructor;
          v ? f = m ? new x() : [] : et(s) ? f = vr(x) ? Wi(Hs(s)) : {} : f = {};
        }
        return (v ? _n : Jn)(s, function(_, O, M) {
          return l(f, _, O, M);
        }), f;
      }
      function aS(s, l) {
        return s == null ? !0 : Xl(s, l);
      }
      function lS(s, l, f) {
        return s == null ? s : Td(s, l, Ql(f));
      }
      function cS(s, l, f, m) {
        return m = typeof m == "function" ? m : t, s == null ? s : Td(s, l, Ql(f), m);
      }
      function Ji(s) {
        return s == null ? [] : Nl(s, wt(s));
      }
      function uS(s) {
        return s == null ? [] : Nl(s, rn(s));
      }
      function fS(s, l, f) {
        return f === t && (f = l, l = t), f !== t && (f = An(f), f = f === f ? f : 0), l !== t && (l = An(l), l = l === l ? l : 0), fi(An(s), l, f);
      }
      function dS(s, l, f) {
        return l = br(l), f === t ? (f = l, l = 0) : f = br(f), s = An(s), vb(s, l, f);
      }
      function pS(s, l, f) {
        if (f && typeof f != "boolean" && jt(s, l, f) && (l = f = t), f === t && (typeof l == "boolean" ? (f = l, l = t) : typeof s == "boolean" && (f = s, s = t)), s === t && l === t ? (s = 0, l = 1) : (s = br(s), l === t ? (l = s, s = 0) : l = br(l)), s > l) {
          var m = s;
          s = l, l = m;
        }
        if (f || s % 1 || l % 1) {
          var v = id();
          return Pt(s + v * (l - s + jv("1e-" + ((v + "").length - 1))), l);
        }
        return ql(s, l);
      }
      var hS = ji(function(s, l, f) {
        return l = l.toLowerCase(), s + (f ? Pp(l) : l);
      });
      function Pp(s) {
        return wc(We(s).toLowerCase());
      }
      function Lp(s) {
        return s = We(s), s && s.replace(gv, i0).replace(Pv, "");
      }
      function mS(s, l, f) {
        s = We(s), l = pn(l);
        var m = s.length;
        f = f === t ? m : fi(me(f), 0, m);
        var v = f;
        return f -= l.length, f >= 0 && s.slice(f, v) == l;
      }
      function gS(s) {
        return s = We(s), s && No.test(s) ? s.replace(Mo, o0) : s;
      }
      function yS(s) {
        return s = We(s), s && nv.test(s) ? s.replace(ml, "\\$&") : s;
      }
      var vS = ji(function(s, l, f) {
        return s + (f ? "-" : "") + l.toLowerCase();
      }), bS = ji(function(s, l, f) {
        return s + (f ? " " : "") + l.toLowerCase();
      }), wS = Fd("toLowerCase");
      function xS(s, l, f) {
        s = We(s), l = me(l);
        var m = l ? $i(s) : 0;
        if (!l || m >= l)
          return s;
        var v = (l - m) / 2;
        return oa(Ks(v), f) + s + oa(js(v), f);
      }
      function SS(s, l, f) {
        s = We(s), l = me(l);
        var m = l ? $i(s) : 0;
        return l && m < l ? s + oa(l - m, f) : s;
      }
      function _S(s, l, f) {
        s = We(s), l = me(l);
        var m = l ? $i(s) : 0;
        return l && m < l ? oa(l - m, f) + s : s;
      }
      function kS(s, l, f) {
        return f || l == null ? l = 0 : l && (l = +l), N0(We(s).replace(gl, ""), l || 0);
      }
      function CS(s, l, f) {
        return (f ? jt(s, l, f) : l === t) ? l = 1 : l = me(l), Jl(We(s), l);
      }
      function ES() {
        var s = arguments, l = We(s[0]);
        return s.length < 3 ? l : l.replace(s[1], s[2]);
      }
      var OS = ji(function(s, l, f) {
        return s + (f ? "_" : "") + l.toLowerCase();
      });
      function TS(s, l, f) {
        return f && typeof f != "number" && jt(s, l, f) && (l = f = t), f = f === t ? it : f >>> 0, f ? (s = We(s), s && (typeof l == "string" || l != null && !yc(l)) && (l = pn(l), !l && Bi(s)) ? $r($n(s), 0, f) : s.split(l, f)) : [];
      }
      var AS = ji(function(s, l, f) {
        return s + (f ? " " : "") + wc(l);
      });
      function MS(s, l, f) {
        return s = We(s), f = f == null ? 0 : fi(me(f), 0, s.length), l = pn(l), s.slice(f, f + l.length) == l;
      }
      function NS(s, l, f) {
        var m = w.templateSettings;
        f && jt(s, l, f) && (l = t), s = We(s), l = ya({}, l, m, Kd);
        var v = ya({}, l.imports, m.imports, Kd), x = wt(v), _ = Nl(v, x), O, M, B = 0, F = l.interpolate || Ms, V = "__p += '", K = Rl(
          (l.escape || Ms).source + "|" + F.source + "|" + (F === As ? uv : Ms).source + "|" + (l.evaluate || Ms).source + "|$",
          "g"
        ), ee = "//# sourceURL=" + (qe.call(l, "sourceURL") ? (l.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Vv + "]") + `
`;
        s.replace(K, function(ae, Se, Te, mn, Kt, gn) {
          return Te || (Te = mn), V += s.slice(B, gn).replace(yv, s0), Se && (O = !0, V += `' +
__e(` + Se + `) +
'`), Kt && (M = !0, V += `';
` + Kt + `;
__p += '`), Te && (V += `' +
((__t = (` + Te + `)) == null ? '' : __t) +
'`), B = gn + ae.length, ae;
        }), V += `';
`;
        var se = qe.call(l, "variable") && l.variable;
        if (!se)
          V = `with (obj) {
` + V + `
}
`;
        else if (lv.test(se))
          throw new ue(c);
        V = (M ? V.replace(Oe, "") : V).replace(Et, "$1").replace(en, "$1;"), V = "function(" + (se || "obj") + `) {
` + (se ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (O ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var ge = $p(function() {
          return Be(x, ee + "return " + V).apply(t, _);
        });
        if (ge.source = V, gc(ge))
          throw ge;
        return ge;
      }
      function DS(s) {
        return We(s).toLowerCase();
      }
      function RS(s) {
        return We(s).toUpperCase();
      }
      function IS(s, l, f) {
        if (s = We(s), s && (f || l === t))
          return qf(s);
        if (!s || !(l = pn(l)))
          return s;
        var m = $n(s), v = $n(l), x = Jf(m, v), _ = Gf(m, v) + 1;
        return $r(m, x, _).join("");
      }
      function PS(s, l, f) {
        if (s = We(s), s && (f || l === t))
          return s.slice(0, Yf(s) + 1);
        if (!s || !(l = pn(l)))
          return s;
        var m = $n(s), v = Gf(m, $n(l)) + 1;
        return $r(m, 0, v).join("");
      }
      function LS(s, l, f) {
        if (s = We(s), s && (f || l === t))
          return s.replace(gl, "");
        if (!s || !(l = pn(l)))
          return s;
        var m = $n(s), v = Jf(m, $n(l));
        return $r(m, v).join("");
      }
      function BS(s, l) {
        var f = ke, m = Ue;
        if (et(l)) {
          var v = "separator" in l ? l.separator : v;
          f = "length" in l ? me(l.length) : f, m = "omission" in l ? pn(l.omission) : m;
        }
        s = We(s);
        var x = s.length;
        if (Bi(s)) {
          var _ = $n(s);
          x = _.length;
        }
        if (f >= x)
          return s;
        var O = f - $i(m);
        if (O < 1)
          return m;
        var M = _ ? $r(_, 0, O).join("") : s.slice(0, O);
        if (v === t)
          return M + m;
        if (_ && (O += M.length - O), yc(v)) {
          if (s.slice(O).search(v)) {
            var B, F = M;
            for (v.global || (v = Rl(v.source, We(mf.exec(v)) + "g")), v.lastIndex = 0; B = v.exec(F); )
              var V = B.index;
            M = M.slice(0, V === t ? O : V);
          }
        } else if (s.indexOf(pn(v), O) != O) {
          var K = M.lastIndexOf(v);
          K > -1 && (M = M.slice(0, K));
        }
        return M + m;
      }
      function $S(s) {
        return s = We(s), s && fr.test(s) ? s.replace(ur, p0) : s;
      }
      var FS = ji(function(s, l, f) {
        return s + (f ? " " : "") + l.toUpperCase();
      }), wc = Fd("toUpperCase");
      function Bp(s, l, f) {
        return s = We(s), l = f ? t : l, l === t ? l0(s) ? g0(s) : Qv(s) : s.match(l) || [];
      }
      var $p = we(function(s, l) {
        try {
          return fn(s, t, l);
        } catch (f) {
          return gc(f) ? f : new ue(f);
        }
      }), VS = gr(function(s, l) {
        return _n(l, function(f) {
          f = Xn(f), hr(s, f, hc(s[f], s));
        }), s;
      });
      function zS(s) {
        var l = s == null ? 0 : s.length, f = ie();
        return s = l ? Qe(s, function(m) {
          if (typeof m[1] != "function")
            throw new kn(a);
          return [f(m[0]), m[1]];
        }) : [], we(function(m) {
          for (var v = -1; ++v < l; ) {
            var x = s[v];
            if (fn(x[0], this, m))
              return fn(x[1], this, m);
          }
        });
      }
      function HS(s) {
        return pb(En(s, h));
      }
      function xc(s) {
        return function() {
          return s;
        };
      }
      function WS(s, l) {
        return s == null || s !== s ? l : s;
      }
      var US = zd(), jS = zd(!0);
      function on(s) {
        return s;
      }
      function Sc(s) {
        return yd(typeof s == "function" ? s : En(s, h));
      }
      function KS(s) {
        return bd(En(s, h));
      }
      function qS(s, l) {
        return wd(s, En(l, h));
      }
      var JS = we(function(s, l) {
        return function(f) {
          return zo(f, s, l);
        };
      }), GS = we(function(s, l) {
        return function(f) {
          return zo(s, f, l);
        };
      });
      function _c(s, l, f) {
        var m = wt(l), v = Zs(l, m);
        f == null && !(et(l) && (v.length || !m.length)) && (f = l, l = s, s = this, v = Zs(l, wt(l)));
        var x = !(et(f) && "chain" in f) || !!f.chain, _ = vr(s);
        return _n(v, function(O) {
          var M = l[O];
          s[O] = M, _ && (s.prototype[O] = function() {
            var B = this.__chain__;
            if (x || B) {
              var F = s(this.__wrapped__), V = F.__actions__ = tn(this.__actions__);
              return V.push({ func: M, args: arguments, thisArg: s }), F.__chain__ = B, F;
            }
            return M.apply(s, Dr([this.value()], arguments));
          });
        }), s;
      }
      function XS() {
        return Ot._ === this && (Ot._ = S0), this;
      }
      function kc() {
      }
      function YS(s) {
        return s = me(s), we(function(l) {
          return xd(l, s);
        });
      }
      var ZS = tc(Qe), QS = tc(Hf), e_ = tc(El);
      function Fp(s) {
        return lc(s) ? Ol(Xn(s)) : Mb(s);
      }
      function t_(s) {
        return function(l) {
          return s == null ? t : di(s, l);
        };
      }
      var n_ = Wd(), r_ = Wd(!0);
      function Cc() {
        return [];
      }
      function Ec() {
        return !1;
      }
      function i_() {
        return {};
      }
      function o_() {
        return "";
      }
      function s_() {
        return !0;
      }
      function a_(s, l) {
        if (s = me(s), s < 1 || s > ze)
          return [];
        var f = it, m = Pt(s, it);
        l = ie(l), s -= it;
        for (var v = Ml(m, l); ++f < s; )
          l(f);
        return v;
      }
      function l_(s) {
        return pe(s) ? Qe(s, Xn) : hn(s) ? [s] : tn(op(We(s)));
      }
      function c_(s) {
        var l = ++w0;
        return We(s) + l;
      }
      var u_ = ia(function(s, l) {
        return s + l;
      }, 0), f_ = nc("ceil"), d_ = ia(function(s, l) {
        return s / l;
      }, 1), p_ = nc("floor");
      function h_(s) {
        return s && s.length ? Ys(s, on, zl) : t;
      }
      function m_(s, l) {
        return s && s.length ? Ys(s, ie(l, 2), zl) : t;
      }
      function g_(s) {
        return jf(s, on);
      }
      function y_(s, l) {
        return jf(s, ie(l, 2));
      }
      function v_(s) {
        return s && s.length ? Ys(s, on, jl) : t;
      }
      function b_(s, l) {
        return s && s.length ? Ys(s, ie(l, 2), jl) : t;
      }
      var w_ = ia(function(s, l) {
        return s * l;
      }, 1), x_ = nc("round"), S_ = ia(function(s, l) {
        return s - l;
      }, 0);
      function __(s) {
        return s && s.length ? Al(s, on) : 0;
      }
      function k_(s, l) {
        return s && s.length ? Al(s, ie(l, 2)) : 0;
      }
      return w.after = Kw, w.ary = gp, w.assign = Rx, w.assignIn = Mp, w.assignInWith = ya, w.assignWith = Ix, w.at = Px, w.before = yp, w.bind = hc, w.bindAll = VS, w.bindKey = vp, w.castArray = ix, w.chain = pp, w.chunk = p1, w.compact = h1, w.concat = m1, w.cond = zS, w.conforms = HS, w.constant = xc, w.countBy = _w, w.create = Lx, w.curry = bp, w.curryRight = wp, w.debounce = xp, w.defaults = Bx, w.defaultsDeep = $x, w.defer = qw, w.delay = Jw, w.difference = g1, w.differenceBy = y1, w.differenceWith = v1, w.drop = b1, w.dropRight = w1, w.dropRightWhile = x1, w.dropWhile = S1, w.fill = _1, w.filter = Cw, w.flatMap = Tw, w.flatMapDeep = Aw, w.flatMapDepth = Mw, w.flatten = cp, w.flattenDeep = k1, w.flattenDepth = C1, w.flip = Gw, w.flow = US, w.flowRight = jS, w.fromPairs = E1, w.functions = jx, w.functionsIn = Kx, w.groupBy = Nw, w.initial = T1, w.intersection = A1, w.intersectionBy = M1, w.intersectionWith = N1, w.invert = Jx, w.invertBy = Gx, w.invokeMap = Rw, w.iteratee = Sc, w.keyBy = Iw, w.keys = wt, w.keysIn = rn, w.map = fa, w.mapKeys = Yx, w.mapValues = Zx, w.matches = KS, w.matchesProperty = qS, w.memoize = pa, w.merge = Qx, w.mergeWith = Np, w.method = JS, w.methodOf = GS, w.mixin = _c, w.negate = ha, w.nthArg = YS, w.omit = eS, w.omitBy = tS, w.once = Xw, w.orderBy = Pw, w.over = ZS, w.overArgs = Yw, w.overEvery = QS, w.overSome = e_, w.partial = mc, w.partialRight = Sp, w.partition = Lw, w.pick = nS, w.pickBy = Dp, w.property = Fp, w.propertyOf = t_, w.pull = P1, w.pullAll = fp, w.pullAllBy = L1, w.pullAllWith = B1, w.pullAt = $1, w.range = n_, w.rangeRight = r_, w.rearg = Zw, w.reject = Fw, w.remove = F1, w.rest = Qw, w.reverse = dc, w.sampleSize = zw, w.set = iS, w.setWith = oS, w.shuffle = Hw, w.slice = V1, w.sortBy = jw, w.sortedUniq = q1, w.sortedUniqBy = J1, w.split = TS, w.spread = ex, w.tail = G1, w.take = X1, w.takeRight = Y1, w.takeRightWhile = Z1, w.takeWhile = Q1, w.tap = hw, w.throttle = tx, w.thru = ua, w.toArray = Op, w.toPairs = Rp, w.toPairsIn = Ip, w.toPath = l_, w.toPlainObject = Ap, w.transform = sS, w.unary = nx, w.union = ew, w.unionBy = tw, w.unionWith = nw, w.uniq = rw, w.uniqBy = iw, w.uniqWith = ow, w.unset = aS, w.unzip = pc, w.unzipWith = dp, w.update = lS, w.updateWith = cS, w.values = Ji, w.valuesIn = uS, w.without = sw, w.words = Bp, w.wrap = rx, w.xor = aw, w.xorBy = lw, w.xorWith = cw, w.zip = uw, w.zipObject = fw, w.zipObjectDeep = dw, w.zipWith = pw, w.entries = Rp, w.entriesIn = Ip, w.extend = Mp, w.extendWith = ya, _c(w, w), w.add = u_, w.attempt = $p, w.camelCase = hS, w.capitalize = Pp, w.ceil = f_, w.clamp = fS, w.clone = ox, w.cloneDeep = ax, w.cloneDeepWith = lx, w.cloneWith = sx, w.conformsTo = cx, w.deburr = Lp, w.defaultTo = WS, w.divide = d_, w.endsWith = mS, w.eq = Vn, w.escape = gS, w.escapeRegExp = yS, w.every = kw, w.find = Ew, w.findIndex = ap, w.findKey = Fx, w.findLast = Ow, w.findLastIndex = lp, w.findLastKey = Vx, w.floor = p_, w.forEach = hp, w.forEachRight = mp, w.forIn = zx, w.forInRight = Hx, w.forOwn = Wx, w.forOwnRight = Ux, w.get = vc, w.gt = ux, w.gte = fx, w.has = qx, w.hasIn = bc, w.head = up, w.identity = on, w.includes = Dw, w.indexOf = O1, w.inRange = dS, w.invoke = Xx, w.isArguments = mi, w.isArray = pe, w.isArrayBuffer = dx, w.isArrayLike = nn, w.isArrayLikeObject = at, w.isBoolean = px, w.isBuffer = Fr, w.isDate = hx, w.isElement = mx, w.isEmpty = gx, w.isEqual = yx, w.isEqualWith = vx, w.isError = gc, w.isFinite = bx, w.isFunction = vr, w.isInteger = _p, w.isLength = ma, w.isMap = kp, w.isMatch = wx, w.isMatchWith = xx, w.isNaN = Sx, w.isNative = _x, w.isNil = Cx, w.isNull = kx, w.isNumber = Cp, w.isObject = et, w.isObjectLike = tt, w.isPlainObject = qo, w.isRegExp = yc, w.isSafeInteger = Ex, w.isSet = Ep, w.isString = ga, w.isSymbol = hn, w.isTypedArray = qi, w.isUndefined = Ox, w.isWeakMap = Tx, w.isWeakSet = Ax, w.join = D1, w.kebabCase = vS, w.last = Tn, w.lastIndexOf = R1, w.lowerCase = bS, w.lowerFirst = wS, w.lt = Mx, w.lte = Nx, w.max = h_, w.maxBy = m_, w.mean = g_, w.meanBy = y_, w.min = v_, w.minBy = b_, w.stubArray = Cc, w.stubFalse = Ec, w.stubObject = i_, w.stubString = o_, w.stubTrue = s_, w.multiply = w_, w.nth = I1, w.noConflict = XS, w.noop = kc, w.now = da, w.pad = xS, w.padEnd = SS, w.padStart = _S, w.parseInt = kS, w.random = pS, w.reduce = Bw, w.reduceRight = $w, w.repeat = CS, w.replace = ES, w.result = rS, w.round = x_, w.runInContext = T, w.sample = Vw, w.size = Ww, w.snakeCase = OS, w.some = Uw, w.sortedIndex = z1, w.sortedIndexBy = H1, w.sortedIndexOf = W1, w.sortedLastIndex = U1, w.sortedLastIndexBy = j1, w.sortedLastIndexOf = K1, w.startCase = AS, w.startsWith = MS, w.subtract = S_, w.sum = __, w.sumBy = k_, w.template = NS, w.times = a_, w.toFinite = br, w.toInteger = me, w.toLength = Tp, w.toLower = DS, w.toNumber = An, w.toSafeInteger = Dx, w.toString = We, w.toUpper = RS, w.trim = IS, w.trimEnd = PS, w.trimStart = LS, w.truncate = BS, w.unescape = $S, w.uniqueId = c_, w.upperCase = FS, w.upperFirst = wc, w.each = hp, w.eachRight = mp, w.first = up, _c(w, function() {
        var s = {};
        return Jn(w, function(l, f) {
          qe.call(w.prototype, f) || (s[f] = l);
        }), s;
      }(), { chain: !1 }), w.VERSION = r, _n(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(s) {
        w[s].placeholder = w;
      }), _n(["drop", "take"], function(s, l) {
        Ce.prototype[s] = function(f) {
          f = f === t ? 1 : gt(me(f), 0);
          var m = this.__filtered__ && !l ? new Ce(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = Pt(f, m.__takeCount__) : m.__views__.push({
            size: Pt(f, it),
            type: s + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, Ce.prototype[s + "Right"] = function(f) {
          return this.reverse()[s](f).reverse();
        };
      }), _n(["filter", "map", "takeWhile"], function(s, l) {
        var f = l + 1, m = f == bt || f == rt;
        Ce.prototype[s] = function(v) {
          var x = this.clone();
          return x.__iteratees__.push({
            iteratee: ie(v, 3),
            type: f
          }), x.__filtered__ = x.__filtered__ || m, x;
        };
      }), _n(["head", "last"], function(s, l) {
        var f = "take" + (l ? "Right" : "");
        Ce.prototype[s] = function() {
          return this[f](1).value()[0];
        };
      }), _n(["initial", "tail"], function(s, l) {
        var f = "drop" + (l ? "" : "Right");
        Ce.prototype[s] = function() {
          return this.__filtered__ ? new Ce(this) : this[f](1);
        };
      }), Ce.prototype.compact = function() {
        return this.filter(on);
      }, Ce.prototype.find = function(s) {
        return this.filter(s).head();
      }, Ce.prototype.findLast = function(s) {
        return this.reverse().find(s);
      }, Ce.prototype.invokeMap = we(function(s, l) {
        return typeof s == "function" ? new Ce(this) : this.map(function(f) {
          return zo(f, s, l);
        });
      }), Ce.prototype.reject = function(s) {
        return this.filter(ha(ie(s)));
      }, Ce.prototype.slice = function(s, l) {
        s = me(s);
        var f = this;
        return f.__filtered__ && (s > 0 || l < 0) ? new Ce(f) : (s < 0 ? f = f.takeRight(-s) : s && (f = f.drop(s)), l !== t && (l = me(l), f = l < 0 ? f.dropRight(-l) : f.take(l - s)), f);
      }, Ce.prototype.takeRightWhile = function(s) {
        return this.reverse().takeWhile(s).reverse();
      }, Ce.prototype.toArray = function() {
        return this.take(it);
      }, Jn(Ce.prototype, function(s, l) {
        var f = /^(?:filter|find|map|reject)|While$/.test(l), m = /^(?:head|last)$/.test(l), v = w[m ? "take" + (l == "last" ? "Right" : "") : l], x = m || /^find/.test(l);
        !v || (w.prototype[l] = function() {
          var _ = this.__wrapped__, O = m ? [1] : arguments, M = _ instanceof Ce, B = O[0], F = M || pe(_), V = function(Se) {
            var Te = v.apply(w, Dr([Se], O));
            return m && K ? Te[0] : Te;
          };
          F && f && typeof B == "function" && B.length != 1 && (M = F = !1);
          var K = this.__chain__, ee = !!this.__actions__.length, se = x && !K, ge = M && !ee;
          if (!x && F) {
            _ = ge ? _ : new Ce(this);
            var ae = s.apply(_, O);
            return ae.__actions__.push({ func: ua, args: [V], thisArg: t }), new Cn(ae, K);
          }
          return se && ge ? s.apply(this, O) : (ae = this.thru(V), se ? m ? ae.value()[0] : ae.value() : ae);
        });
      }), _n(["pop", "push", "shift", "sort", "splice", "unshift"], function(s) {
        var l = Ls[s], f = /^(?:push|sort|unshift)$/.test(s) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(s);
        w.prototype[s] = function() {
          var v = arguments;
          if (m && !this.__chain__) {
            var x = this.value();
            return l.apply(pe(x) ? x : [], v);
          }
          return this[f](function(_) {
            return l.apply(pe(_) ? _ : [], v);
          });
        };
      }), Jn(Ce.prototype, function(s, l) {
        var f = w[l];
        if (f) {
          var m = f.name + "";
          qe.call(Hi, m) || (Hi[m] = []), Hi[m].push({ name: l, func: f });
        }
      }), Hi[ra(t, A).name] = [{
        name: "wrapper",
        func: t
      }], Ce.prototype.clone = $0, Ce.prototype.reverse = F0, Ce.prototype.value = V0, w.prototype.at = mw, w.prototype.chain = gw, w.prototype.commit = yw, w.prototype.next = vw, w.prototype.plant = ww, w.prototype.reverse = xw, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = Sw, w.prototype.first = w.prototype.head, Io && (w.prototype[Io] = bw), w;
    }, Fi = y0();
    ai ? ((ai.exports = Fi)._ = Fi, Sl._ = Fi) : Ot._ = Fi;
  }).call(Xo);
})(Jt, Jt.exports);
function At(n) {
  this.content = n;
}
At.prototype = {
  constructor: At,
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
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new At(o);
  },
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new At(t);
  },
  addToStart: function(n, e) {
    return new At([n, e].concat(this.remove(n).content));
  },
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new At(t);
  },
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new At(i);
  },
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  prepend: function(n) {
    return n = At.from(n), n.size ? new At(n.content.concat(this.subtract(n).content)) : this;
  },
  append: function(n) {
    return n = At.from(n), n.size ? new At(this.subtract(n).content.concat(n.content)) : this;
  },
  subtract: function(n) {
    var e = this;
    n = At.from(n);
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
At.from = function(n) {
  if (n instanceof At)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new At(e);
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
class H {
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
    return new H(i, this.size + e.size);
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
    return new H(r, i);
  }
  cutByIndex(e, t) {
    return e == t ? H.empty : e == 0 && t == this.content.length ? this : new H(this.content.slice(e, t));
  }
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new H(i, o);
  }
  addToStart(e) {
    return new H([e].concat(this.content), this.size + e.nodeSize);
  }
  addToEnd(e) {
    return new H(this.content.concat(e), this.size + e.nodeSize);
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
      return H.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new H(t.map(e.nodeFromJSON));
  }
  static fromArray(e) {
    if (!e.length)
      return H.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new H(t || e, r);
  }
  static from(e) {
    if (!e)
      return H.empty;
    if (e instanceof H)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new H([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
H.empty = new H([], 0);
const Rc = { index: 0, offset: 0 };
function wa(n, e) {
  return Rc.index = n, Rc.offset = e, Rc;
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
class Fe {
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
      return Fe.none;
    if (e instanceof Fe)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
}
Fe.none = [];
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
    return new J(H.fromJSON(e, t.content), r, i);
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
J.empty = new J(H.empty, 0, 0);
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
function BC(n, e, t) {
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
      let { start: a, end: c } = $C(t, n);
      return Si(o, pg(n, a, c, e, r));
    }
  else
    return Si(o, Ra(n, e, r));
}
function dg(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Da("Cannot join " + e.type.name + " onto " + n.type.name);
}
function pu(n, e, t) {
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
  let o = n.depth > i && pu(n, e, i + 1), a = r.depth > i && pu(t, r, i + 1), c = [];
  return is(null, n, i, c), o && a && e.index(i) == t.index(i) ? (dg(o, a), xi(Si(o, pg(n, e, t, r, i + 1)), c)) : (o && xi(Si(o, Ra(n, e, i + 1)), c), is(e, t, i, c), a && xi(Si(a, Ra(t, r, i + 1)), c)), is(r, null, i, c), new H(c);
}
function Ra(n, e, t) {
  let r = [];
  if (is(null, n, t, r), n.depth > t) {
    let i = pu(n, e, t + 1);
    xi(Si(i, Ra(n, e, t + 1)), r);
  }
  return is(e, null, t, r), new H(r);
}
function $C(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(H.from(i));
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
      return Fe.none;
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
    for (let i = 0; i < Ic.length; i++) {
      let o = Ic[i];
      if (o.pos == t && o.doc == e)
        return o;
    }
    let r = Ic[Pc] = hs.resolve(e, t);
    return Pc = (Pc + 1) % FC, r;
  }
}
let Ic = [], Pc = 0, FC = 12;
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
const VC = /* @__PURE__ */ Object.create(null);
class nr {
  constructor(e, t, r, i = Fe.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || H.empty;
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
    return this.type == e && Na(this.attrs, t || e.defaultAttrs || VC) && Fe.sameSet(this.marks, r || Fe.none);
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
      return J.empty;
    let i = this.resolve(e), o = this.resolve(t), a = r ? 0 : i.sharedDepth(t), c = i.start(a), d = i.node(a).content.cut(i.pos - c, o.pos - c);
    return new J(d, i.depth - a, o.depth - a);
  }
  replace(e, t, r) {
    return BC(this.resolve(e), this.resolve(t), r);
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
  canReplace(e, t, r = H.empty, i = 0, o = r.childCount) {
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
    let e = Fe.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!Fe.sameSet(e, this.marks))
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
    let i = H.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, r);
  }
}
nr.prototype.text = void 0;
class Pa extends nr {
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
    let r = new zC(e, t);
    if (r.next == null)
      return Oi.empty;
    let i = mg(r);
    r.next && r.err("Unexpected trailing text");
    let o = JC(qC(i));
    return GC(o, r), o;
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
        return H.from(c.map((d) => d.createAndFill()));
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
class zC {
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
    e.push(HC(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function HC(n) {
  let e = [];
  do
    e.push(WC(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function WC(n) {
  let e = KC(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = UC(n, e);
    else
      break;
  return e;
}
function lh(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function UC(n, e) {
  let t = lh(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = lh(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function jC(n, e) {
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
function KC(n) {
  if (n.eat("(")) {
    let e = mg(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = jC(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function qC(n) {
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
function ch(n, e) {
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
function JC(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(ch(n, 0));
  function t(r) {
    let i = [];
    r.forEach((a) => {
      n[a].forEach(({ term: c, to: u }) => {
        if (!c)
          return;
        let d;
        for (let p = 0; p < i.length; p++)
          i[p][0] == c && (d = i[p][1]);
        ch(n, u).forEach((p) => {
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
function GC(n, e) {
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
      e[t] = new XC(n[t]);
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
    return new nr(this, this.computeAttrs(e), H.from(t), Fe.setFrom(r));
  }
  createChecked(e = null, t, r) {
    return t = H.from(t), this.checkContent(t), new nr(this, this.computeAttrs(e), t, Fe.setFrom(r));
  }
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = H.from(t), t.size) {
      let a = this.contentMatch.fillBefore(t);
      if (!a)
        return null;
      t = a.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(H.empty, !0);
    return o ? new nr(this, e, t.append(o), Fe.setFrom(r)) : null;
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
    return t ? t.length ? t : Fe.none : e;
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
class XC {
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
    this.instance = o ? new Fe(this, o) : null;
  }
  create(e = null) {
    return !e && this.instance ? this.instance : new Fe(this, vg(this.attrs, e));
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
class YC {
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = At.from(e.nodes), t.marks = At.from(e.marks || {}), this.nodes = La.compile(this.spec.nodes, this), this.marks = el.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], a = o.spec.content || "", c = o.spec.marks;
      o.contentMatch = r[a] || (r[a] = Oi.parse(a, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.markSet = c == "_" ? null : c ? uh(this, c.split(" ")) : c == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], a = o.spec.excludes;
      o.excluded = a == null ? [o] : a == "" ? [] : uh(this, a.split(" "));
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
    return new Pa(r, r.defaultAttrs, e, Fe.setFrom(t));
  }
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  nodeFromJSON(e) {
    return nr.fromJSON(this, e);
  }
  markFromJSON(e) {
    return Fe.fromJSON(this, e);
  }
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function uh(n, e) {
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
    let r = new dh(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  parseSlice(e, t = {}) {
    let r = new dh(this, t, !0);
    return r.addAll(e, t.from, t.to), J.maxOpen(r.finish());
  }
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (eE(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
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
        r(a = ph(a)), a.mark || a.ignore || a.clearMark || (a.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((a) => {
        r(a = ph(a)), a.node || a.ignore || a.mark || (a.node = i);
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
}, ZC = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, xg = { ol: !0, ul: !0 }, Ba = 1, $a = 2, ss = 4;
function fh(n, e, t) {
  return e != null ? (e ? Ba : 0) | (e === "full" ? $a : 0) : n && n.whitespace == "pre" ? Ba | $a : t & ~ss;
}
class xa {
  constructor(e, t, r, i, o, a, c) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = o, this.options = c, this.content = [], this.activeMarks = Fe.none, this.stashMarks = [], this.match = a || (c & ss ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(H.from(e));
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
    let t = H.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(H.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
      let i = r[t];
      (this.type ? this.type.allowsMarkType(i.type) : nE(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !wg.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class dh {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, o, a = fh(null, t.preserveWhitespace, 0) | (r ? ss : 0);
    i ? o = new xa(i.type, i.attrs, Fe.none, Fe.none, !0, t.topMatch || i.type.contentMatch, a) : r ? o = new xa(null, null, Fe.none, Fe.none, !0, null, a) : o = new xa(e.schema.topNodeType, null, Fe.none, Fe.none, !0, null, a), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
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
    let i = this.readStyles(tE(r));
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
    xg.hasOwnProperty(r) && this.parser.normalizeLists && QC(e);
    let o = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (o ? o.ignore : ZC.hasOwnProperty(r))
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
    let t = Fe.none, r = Fe.none;
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
    let a = fh(e, i, o.options);
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
    let t = rE(e, this.top.pendingMarks);
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
function QC(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && xg.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function eE(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function tE(n) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, r = [];
  for (; t = e.exec(n); )
    r.push(t[1], t[2].trim());
  return r;
}
function ph(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function nE(n, e) {
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
function rE(n, e) {
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
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
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
    let t = hh(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  static marksFromSchema(e) {
    return hh(e.marks);
  }
}
function hh(n) {
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
const Sg = 65535, _g = Math.pow(2, 16);
function iE(n, e) {
  return n + e * _g;
}
function mh(n) {
  return n & Sg;
}
function oE(n) {
  return (n - (n & Sg)) / _g;
}
const kg = 1, Cg = 2, Ea = 4, Eg = 8;
class hu {
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
class yn {
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && yn.empty)
      return yn.empty;
  }
  recover(e) {
    let t = 0, r = mh(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + oE(e);
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
        let b = e == (t < 0 ? u : h) ? null : iE(c / 3, e - u), k = e == u ? Cg : e == h ? kg : Ea;
        return (t < 0 ? e != u : e != h) && (k |= Eg), new hu(y, k, b);
      }
      i += p - d;
    }
    return r ? e + i : new hu(e + i, 0, null);
  }
  touches(e, t) {
    let r = 0, i = mh(t), o = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
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
    return new yn(this.ranges, !this.inverted);
  }
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  static offset(e) {
    return e == 0 ? yn.empty : new yn(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
yn.empty = new yn([]);
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
    return r ? e : new hu(e, i, null);
  }
}
const Bc = /* @__PURE__ */ Object.create(null);
class zt {
  getMap() {
    return yn.empty;
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
class ft {
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  static ok(e) {
    return new ft(e, null);
  }
  static fail(e) {
    return new ft(null, e);
  }
  static fromReplace(e, t, r, i) {
    try {
      return ft.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof Da)
        return ft.fail(o.message);
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
  return H.fromArray(r);
}
class Kr extends zt {
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new J(Vu(t.content, (a, c) => !a.isAtom || !c.type.allowsMarkType(this.mark.type) ? a : a.mark(this.mark.addToSet(a.marks)), i), t.openStart, t.openEnd);
    return ft.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new tr(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Kr(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Kr && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Kr(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new Kr(t.from, t.to, e.markFromJSON(t.mark));
  }
}
zt.jsonID("addMark", Kr);
class tr extends zt {
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new J(Vu(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return ft.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Kr(this.from, this.to, this.mark);
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
zt.jsonID("removeMark", tr);
class qr extends zt {
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ft.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return ft.fromReplace(e, this.pos, this.pos + 1, new J(H.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new qr(this.pos, t.marks[i]);
        return new qr(this.pos, this.mark);
      }
    }
    return new fo(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new qr(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new qr(t.pos, e.markFromJSON(t.mark));
  }
}
zt.jsonID("addNodeMark", qr);
class fo extends zt {
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ft.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return ft.fromReplace(e, this.pos, this.pos + 1, new J(H.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new qr(this.pos, this.mark);
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
zt.jsonID("removeNodeMark", fo);
class Nt extends zt {
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && mu(e, this.from, this.to) ? ft.fail("Structure replace would overwrite content") : ft.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new yn([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Nt(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new Nt(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof Nt) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? J.empty : new J(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Nt(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? J.empty : new J(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Nt(e.from, this.to, t, this.structure);
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
    return new Nt(t.from, t.to, J.fromJSON(e, t.slice), !!t.structure);
  }
}
zt.jsonID("replace", Nt);
class _t extends zt {
  constructor(e, t, r, i, o, a, c = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = a, this.structure = c;
  }
  apply(e) {
    if (this.structure && (mu(e, this.from, this.gapFrom) || mu(e, this.gapTo, this.to)))
      return ft.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return ft.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? ft.fromReplace(e, this.from, this.to, r) : ft.fail("Content does not fit in gap");
  }
  getMap() {
    return new yn([
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
    return new _t(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), o = e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new _t(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
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
    return new _t(t.from, t.to, t.gapFrom, t.gapTo, J.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
zt.jsonID("replaceAround", _t);
function mu(n, e, t) {
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
function sE(n, e, t, r) {
  let i = [], o = [], a, c;
  n.doc.nodesBetween(e, t, (u, d, p) => {
    if (!u.isInline)
      return;
    let h = u.marks;
    if (!r.isInSet(h) && p.type.allowsMarkType(r.type)) {
      let g = Math.max(d, e), y = Math.min(d + u.nodeSize, t), b = r.addToSet(h);
      for (let k = 0; k < h.length; k++)
        h[k].isInSet(b) || (a && a.to == g && a.mark.eq(h[k]) ? a.to = y : i.push(a = new tr(g, y, h[k])));
      c && c.to == g ? c.to = y : o.push(c = new Kr(g, y, r));
    }
  }), i.forEach((u) => n.step(u)), o.forEach((u) => n.step(u));
}
function aE(n, e, t, r) {
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
  }), i.forEach((a) => n.step(new tr(a.from, a.to, a.style)));
}
function lE(n, e, t, r = t.contentMatch) {
  let i = n.doc.nodeAt(e), o = [], a = e + 1;
  for (let c = 0; c < i.childCount; c++) {
    let u = i.child(c), d = a + u.nodeSize, p = r.matchType(u.type);
    if (!p)
      o.push(new Nt(a, d, J.empty));
    else {
      r = p;
      for (let h = 0; h < u.marks.length; h++)
        t.allowsMarkType(u.marks[h].type) || n.step(new tr(a, d, u.marks[h]));
      if (u.isText && !t.spec.code) {
        let h, g = /\r?\n|\r/g, y;
        for (; h = g.exec(u.text); )
          y || (y = new J(H.from(t.schema.text(" ", t.allowedMarks(u.marks))), 0, 0)), o.push(new Nt(a + h.index, a + h.index + h[0].length, y));
      }
    }
    a = d;
  }
  if (!r.validEnd) {
    let c = r.fillBefore(H.empty, !0);
    n.replace(a, a, new J(c, 0, 0));
  }
  for (let c = o.length - 1; c >= 0; c--)
    n.step(o[c]);
}
function cE(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function _o(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), a = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, a, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !cE(i, o, a))
      break;
  }
  return null;
}
function uE(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, a = r.before(o + 1), c = i.after(o + 1), u = a, d = c, p = H.empty, h = 0;
  for (let b = o, k = !1; b > t; b--)
    k || r.index(b) > 0 ? (k = !0, p = H.from(r.node(b).copy(p)), h++) : u--;
  let g = H.empty, y = 0;
  for (let b = o, k = !1; b > t; b--)
    k || i.after(b + 1) < i.end(b) ? (k = !0, g = H.from(i.node(b).copy(g)), y++) : d++;
  n.step(new _t(u, d, a, c, new J(p.append(g), h, y), p.size - h, !0));
}
function zu(n, e, t = null, r = n) {
  let i = fE(n, e), o = i && dE(r, e);
  return o ? i.map(gh).concat({ type: e, attrs: t }).concat(o.map(gh)) : null;
}
function gh(n) {
  return { type: n, attrs: null };
}
function fE(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let a = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, a) ? o : null;
}
function dE(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), a = e.contentMatch.findWrapping(o.type);
  if (!a)
    return null;
  let u = (a.length ? a[a.length - 1] : e).contentMatch;
  for (let d = r; u && d < i; d++)
    u = u.matchType(t.child(d).type);
  return !u || !u.validEnd ? null : a;
}
function pE(n, e, t) {
  let r = H.empty;
  for (let a = t.length - 1; a >= 0; a--) {
    if (r.size) {
      let c = t[a].type.contentMatch.matchFragment(r);
      if (!c || !c.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = H.from(t[a].type.create(t[a].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new _t(i, o, i, o, new J(r, 0, 0), t.length, !0));
}
function hE(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (a, c) => {
    if (a.isTextblock && !a.hasMarkup(r, i) && mE(n.doc, n.mapping.slice(o).map(c), r)) {
      n.clearIncompatible(n.mapping.slice(o).map(c, 1), r);
      let u = n.mapping.slice(o), d = u.map(c, 1), p = u.map(c + a.nodeSize, 1);
      return n.step(new _t(d, p, d + 1, p - 1, new J(H.from(r.create(i, null, a.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function mE(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function gE(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let a = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, a);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new _t(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new J(H.from(a), 0, 0), 1, !0));
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
    let k = r && r[p] || h;
    if (!h.canReplace(g + 1, h.childCount) || !k.type.validContent(y))
      return !1;
  }
  let c = i.indexAfter(o), u = r && r[0];
  return i.node(o).canReplaceWith(c, c, u ? u.type : i.node(o + 1).type);
}
function yE(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = H.empty, a = H.empty;
  for (let c = i.depth, u = i.depth - t, d = t - 1; c > u; c--, d--) {
    o = H.from(i.node(c).copy(o));
    let p = r && r[d];
    a = H.from(p ? p.type.create(p.attrs, a) : i.node(c).copy(a));
  }
  n.step(new Nt(e, e, new J(o.append(a), t, t), !0));
}
function ti(n, e) {
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
function vE(n, e, t) {
  let r = new Nt(e - t, e + t, J.empty, !0);
  n.step(r);
}
function bE(n, e, t) {
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
  return Ag(i, o, r) ? new Nt(e, t, r) : new wE(i, o, r).fit();
}
function Ag(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class wE {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = H.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = H.from(e.node(i).copy(this.placed));
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
    return e > -1 ? new _t(r.pos, e, this.$to.pos, this.$to.end(), u, t) : u.size || r.pos != this.$to.pos ? new Nt(r.pos, i.pos, u) : null;
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
        r ? (o = $c(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let a = i.firstChild;
        for (let c = this.depth; c >= 0; c--) {
          let { type: u, match: d } = this.frontier[c], p, h = null;
          if (t == 1 && (a ? d.matchType(a.type) || (h = d.fillBefore(H.from(a), !1)) : o && u.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: c, parent: o, inject: h };
          if (t == 2 && a && (p = d.findWrapping(a.type)))
            return { sliceDepth: r, frontierDepth: c, parent: o, wrap: p };
          if (o && d.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = $c(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new J(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = $c(e, t);
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
      for (let k = 0; k < o.length; k++)
        this.openFrontierNode(o[k]);
    let a = this.unplaced, c = r ? r.content : a.content, u = a.openStart - e, d = 0, p = [], { match: h, type: g } = this.frontier[t];
    if (i) {
      for (let k = 0; k < i.childCount; k++)
        p.push(i.child(k));
      h = h.matchFragment(i);
    }
    let y = c.size + e - (a.content.size - a.openEnd);
    for (; d < c.childCount; ) {
      let k = c.child(d), C = h.matchType(k.type);
      if (!C)
        break;
      d++, (d > 1 || u == 0 || k.content.size) && (h = C, p.push(Mg(k.mark(g.allowedMarks(k.marks)), d == 1 ? u : 0, d == c.childCount ? y : -1)));
    }
    let b = d == c.childCount;
    b || (y = -1), this.placed = es(this.placed, t, H.from(p)), this.frontier[t].match = h, b && y < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let k = 0, C = c; k < y; k++) {
      let A = C.lastChild;
      this.frontier.push({ type: A.type, match: A.contentMatchAt(A.childCount) }), C = A.content;
    }
    this.unplaced = b ? e == 0 ? J.empty : new J(Qo(a.content, e - 1, 1), e - 1, y < 0 ? a.openEnd : e - 1) : new J(Qo(a.content, e, d), a.openStart, a.openEnd);
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
        let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), a = Fc(e, t, i, r, o);
        if (!!a) {
          for (let c = t - 1; c >= 0; c--) {
            let { match: u, type: d } = this.frontier[c], p = Fc(e, c, d, u, !0);
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
    i.match = i.match.matchType(e), this.placed = es(this.placed, this.depth, H.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(H.empty, !0);
    t.childCount && (this.placed = es(this.placed, this.frontier.length, t));
  }
}
function Qo(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Qo(n.firstChild.content, e - 1, t)));
}
function es(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(es(n.lastChild.content, e - 1, t)));
}
function $c(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Mg(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Mg(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(H.empty, !0)))), n.copy(r);
}
function Fc(n, e, t, r, i) {
  let o = n.node(e), a = i ? n.indexAfter(e) : n.index(e);
  if (a == o.childCount && !t.compatibleContent(o.type))
    return null;
  let c = r.fillBefore(o.content, !0, a);
  return c && !xE(t, o.content, a) ? c : null;
}
function xE(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function SE(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function _E(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (Ag(i, o, r))
    return n.step(new Nt(e, t, r));
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
    let y = d[g], b = SE(y.type);
    if (b && !y.sameMarkup(i.node(Math.abs(c) - 1)))
      p = g;
    else if (b || !y.type.isTextblock)
      break;
  }
  for (let g = r.openStart; g >= 0; g--) {
    let y = (g + p + 1) % (r.openStart + 1), b = d[y];
    if (!!b)
      for (let k = 0; k < a.length; k++) {
        let C = a[(k + u) % a.length], A = !0;
        C < 0 && (A = !1, C = -C);
        let D = i.node(C - 1), W = i.index(C - 1);
        if (D.canReplaceWith(W, W, b.type, b.marks))
          return n.replace(i.before(C), A ? o.after(C) : t, new J(Ng(r.content, 0, r.openStart, y), y, r.openEnd));
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
    n = a.append(o.matchFragment(a).fillBefore(H.empty, !0));
  }
  return n;
}
function kE(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = bE(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new J(H.from(r), 0, 0));
}
function CE(n, e, t) {
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
class ao extends zt {
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ft.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return ft.fromReplace(e, this.pos, this.pos + 1, new J(H.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return yn.empty;
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
zt.jsonID("attr", ao);
class ms extends zt {
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return ft.ok(r);
  }
  getMap() {
    return yn.empty;
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
zt.jsonID("docAttr", ms);
let po = class extends Error {
};
po = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
po.prototype = Object.create(Error.prototype);
po.prototype.constructor = po;
po.prototype.name = "TransformError";
class EE {
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
    return this.replace(e, t, new J(H.from(r), 0, 0));
  }
  delete(e, t) {
    return this.replace(e, t, J.empty);
  }
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  replaceRange(e, t, r) {
    return _E(this, e, t, r), this;
  }
  replaceRangeWith(e, t, r) {
    return kE(this, e, t, r), this;
  }
  deleteRange(e, t) {
    return CE(this, e, t), this;
  }
  lift(e, t) {
    return uE(this, e, t), this;
  }
  join(e, t = 1) {
    return vE(this, e, t), this;
  }
  wrap(e, t) {
    return pE(this, e, t), this;
  }
  setBlockType(e, t = e, r, i = null) {
    return hE(this, e, t, r, i), this;
  }
  setNodeMarkup(e, t, r = null, i) {
    return gE(this, e, t, r, i), this;
  }
  setNodeAttribute(e, t, r) {
    return this.step(new ao(e, t, r)), this;
  }
  setDocAttribute(e, t) {
    return this.step(new ms(e, t)), this;
  }
  addNodeMark(e, t) {
    return this.step(new qr(e, t)), this;
  }
  removeNodeMark(e, t) {
    if (!(t instanceof Fe)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new fo(e, t)), this;
  }
  split(e, t = 1, r) {
    return yE(this, e, t, r), this;
  }
  addMark(e, t, r) {
    return sE(this, e, t, r), this;
  }
  removeMark(e, t, r) {
    return aE(this, e, t, r), this;
  }
  clearIncompatible(e, t, r) {
    return lE(this, e, t, r), this;
  }
}
const Vc = /* @__PURE__ */ Object.create(null);
class ve {
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new OE(e.min(t), e.max(t))];
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
      e.replaceRange(p.map(u.pos), p.map(d.pos), c ? J.empty : t), c == 0 && bh(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: a, $to: c } = i[o], u = e.mapping.slice(r), d = u.map(a.pos), p = u.map(c.pos);
      o ? e.deleteRange(d, p) : (e.replaceRangeWith(d, p, t), bh(e, r, t.isInline ? -1 : 1));
    }
  }
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new he(e) : Qi(e.node(0), e.parent, e.pos, e.index(), t, r);
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
    return this.findFrom(e, t) || this.findFrom(e, -t) || new Un(e.node(0));
  }
  static atStart(e) {
    return Qi(e, e, 0, 0, 1) || new Un(e);
  }
  static atEnd(e) {
    return Qi(e, e, e.content.size, e.childCount, -1) || new Un(e);
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
    return he.between(this.$anchor, this.$head).getBookmark();
  }
}
ve.prototype.visible = !0;
class OE {
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let yh = !1;
function vh(n) {
  !yh && !n.parent.inlineContent && (yh = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class he extends ve {
  constructor(e, t = e) {
    vh(e), vh(t), super(e, t);
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return ve.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new he(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = J.empty) {
    if (super.replace(e, t), t == J.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof he && e.anchor == this.anchor && e.head == this.head;
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
    return new he(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = ve.findFrom(t, r, !0) || ve.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return ve.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (ve.findFrom(e, -r, !0) || ve.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new he(e, t);
  }
}
ve.jsonID("text", he);
class nl {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new nl(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return he.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class oe extends ve {
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? ve.near(o) : new oe(o);
  }
  content() {
    return new J(H.from(this.node), 0, 0);
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
ve.jsonID("node", oe);
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
    return r && oe.isSelectable(r) ? new oe(t) : ve.near(t);
  }
}
class Un extends ve {
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = J.empty) {
    if (t == J.empty) {
      e.delete(0, e.doc.content.size);
      let r = ve.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  static fromJSON(e) {
    return new Un(e);
  }
  map(e) {
    return new Un(e);
  }
  eq(e) {
    return e instanceof Un;
  }
  getBookmark() {
    return TE;
  }
}
ve.jsonID("all", Un);
const TE = {
  map() {
    return this;
  },
  resolve(n) {
    return new Un(n);
  }
};
function Qi(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return he.create(n, t);
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
function bh(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof Nt || i instanceof _t))
    return;
  let o = n.mapping.maps[r], a;
  o.forEach((c, u, d, p) => {
    a == null && (a = p);
  }), n.setSelection(ve.near(n.doc.resolve(a), t));
}
const wh = 1, Sa = 2, xh = 4;
class AE extends EE {
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | wh) & ~Sa, this.storedMarks = null, this;
  }
  get selectionSet() {
    return (this.updated & wh) > 0;
  }
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Sa, this;
  }
  ensureMarks(e) {
    return Fe.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
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
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || Fe.none))), r.replaceWith(this, e), this;
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
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(ve.near(this.selection.$to)), this;
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
    return this.updated |= xh, this;
  }
  get scrolledIntoView() {
    return (this.updated & xh) > 0;
  }
}
function Sh(n, e) {
  return !e || !n ? n : n.bind(e);
}
class ts {
  constructor(e, t, r) {
    this.name = e, this.init = Sh(t.init, r), this.apply = Sh(t.apply, r);
  }
}
const ME = [
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
      return n.selection || ve.atStart(e.doc);
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
class zc {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = ME.slice(), t && t.forEach((r) => {
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
    return new AE(this);
  }
  static create(e) {
    let t = new zc(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new no(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  reconfigure(e) {
    let t = new zc(this.schema, e.plugins), r = t.fields, i = new no(t);
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
    let i = new zc(e.schema, e.plugins), o = new no(i);
    return i.fields.forEach((a) => {
      if (a.name == "doc")
        o.doc = nr.fromJSON(e.schema, t.doc);
      else if (a.name == "selection")
        o.selection = ve.fromJSON(o.doc, t.selection);
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
class cn {
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Rg(e.props, this, this.props), this.key = e.key ? e.key.key : Ig("plugin");
  }
  getState(e) {
    return e[this.key];
  }
}
const Hc = /* @__PURE__ */ Object.create(null);
function Ig(n) {
  return n in Hc ? n + "$" + ++Hc[n] : (Hc[n] = 0, n + "$");
}
class cr {
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
const qt = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, gs = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let _h = null;
const _r = function(n, e, t) {
  let r = _h || (_h = document.createRange());
  return r.setEnd(n, t == null ? n.nodeValue.length : t), r.setStart(n, e || 0), r;
}, Ti = function(n, e, t, r) {
  return t && (kh(n, e, t, r, -1) || kh(n, e, t, r, 1));
}, NE = /^(img|br|input|textarea|hr)$/i;
function kh(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Qn(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || Uu(n) || NE.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = qt(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? Qn(n) : 0;
    } else
      return !1;
  }
}
function Qn(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function DE(n, e, t) {
  for (let r = e == 0, i = e == Qn(n); r || i; ) {
    if (n == t)
      return !0;
    let o = qt(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == Qn(n);
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
function RE(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function IE(n, e, t) {
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
const ir = typeof navigator < "u" ? navigator : null, Ch = typeof document < "u" ? document : null, ni = ir && ir.userAgent || "", gu = /Edge\/(\d+)/.exec(ni), Pg = /MSIE \d/.exec(ni), yu = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ni), sn = !!(Pg || yu || gu), Gr = Pg ? document.documentMode : yu ? +yu[1] : gu ? +gu[1] : 0, jn = !sn && /gecko\/(\d+)/i.test(ni);
jn && +(/Firefox\/(\d+)/.exec(ni) || [0, 0])[1];
const vu = !sn && /Chrome\/(\d+)/.exec(ni), Ft = !!vu, PE = vu ? +vu[1] : 0, Gt = !sn && !!ir && /Apple Computer/.test(ir.vendor), ho = Gt && (/Mobile\/\w+/.test(ni) || !!ir && ir.maxTouchPoints > 2), Mn = ho || (ir ? /Mac/.test(ir.platform) : !1), LE = ir ? /Win/.test(ir.platform) : !1, Hn = /Android \d/.test(ni), Cs = !!Ch && "webkitFontSmoothing" in Ch.documentElement.style, BE = Cs ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function $E(n) {
  return {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function Sr(n, e) {
  return typeof n == "number" ? n : n[e];
}
function FE(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Eh(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let a = t || n.dom; a; a = gs(a)) {
    if (a.nodeType != 1)
      continue;
    let c = a, u = c == o.body, d = u ? $E(o) : FE(c), p = 0, h = 0;
    if (e.top < d.top + Sr(r, "top") ? h = -(d.top - e.top + Sr(i, "top")) : e.bottom > d.bottom - Sr(r, "bottom") && (h = e.bottom - e.top > d.bottom - d.top ? e.top + Sr(i, "top") - d.top : e.bottom - d.bottom + Sr(i, "bottom")), e.left < d.left + Sr(r, "left") ? p = -(d.left - e.left + Sr(i, "left")) : e.right > d.right - Sr(r, "right") && (p = e.right - d.right + Sr(i, "right")), p || h)
      if (u)
        o.defaultView.scrollBy(p, h);
      else {
        let g = c.scrollLeft, y = c.scrollTop;
        h && (c.scrollTop += h), p && (c.scrollLeft += p);
        let b = c.scrollLeft - g, k = c.scrollTop - y;
        e = { left: e.left - b, top: e.top - k, right: e.right - b, bottom: e.bottom - k };
      }
    if (u || /^(fixed|sticky)$/.test(getComputedStyle(a).position))
      break;
  }
}
function VE(n) {
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
function zE({ refDOM: n, refTop: e, stack: t }) {
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
function HE(n) {
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
      g = _r(p).getClientRects();
    else
      continue;
    for (let y = 0; y < g.length; y++) {
      let b = g[y];
      if (b.top <= a && b.bottom >= c) {
        a = Math.max(b.bottom, a), c = Math.min(b.top, c);
        let k = b.left > e.left ? b.left - e.left : b.right < e.left ? e.left - b.right : 0;
        if (k < r) {
          t = p, r = k, i = k && t.nodeType == 3 ? {
            left: b.right < e.left ? b.right : b.left,
            top: e.top
          } : e, p.nodeType == 1 && k && (o = h + (e.left >= (b.left + b.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        b.top > e.top && !u && b.left <= e.left && b.right >= e.left && (u = p, d = { left: Math.max(b.left, Math.min(b.right, e.left)), top: b.top });
      !t && (e.left >= b.right && e.top >= b.top || e.left >= b.left && e.top >= b.bottom) && (o = h + 1);
    }
  }
  return !t && u && (t = u, i = d, r = 0), t && t.nodeType == 3 ? WE(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : $g(t, i);
}
function WE(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = zr(r, 1);
    if (o.top != o.bottom && ju(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function ju(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function UE(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function jE(n, e, t) {
  let { node: r, offset: i } = $g(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let a = r.getBoundingClientRect();
    o = a.left != a.right && t.left > (a.left + a.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function KE(n, e, t, r) {
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
function qE(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = IE(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let a = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), c;
  if (!a || !n.dom.contains(a.nodeType != 1 ? a.parentNode : a)) {
    let d = n.dom.getBoundingClientRect();
    if (!ju(e, d) || (a = Fg(n.dom, e, d), !a))
      return null;
  }
  if (Gt)
    for (let d = a; r && d; d = gs(d))
      d.draggable && (r = void 0);
  if (a = UE(a, e), r) {
    if (jn && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let p = r.childNodes[i], h;
      p.nodeName == "IMG" && (h = p.getBoundingClientRect()).right <= e.left && h.bottom > e.top && i++;
    }
    let d;
    Cs && i && r.nodeType == 1 && (d = r.childNodes[i - 1]).nodeType == 1 && d.contentEditable == "false" && d.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? c = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (c = KE(n, r, i, e));
  }
  c == null && (c = jE(n, a, e));
  let u = n.docView.nearestDesc(a, !0);
  return { pos: c, inside: u ? u.posAtStart - u.border : -1 };
}
function Oh(n) {
  return n.top < n.bottom || n.left < n.right;
}
function zr(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Oh(r))
      return r;
  }
  return Array.prototype.find.call(t, Oh) || n.getBoundingClientRect();
}
const JE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Vg(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), a = Cs || jn;
  if (r.nodeType == 3)
    if (a && (JE.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let u = zr(_r(r, i, i), t);
      if (jn && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let d = zr(_r(r, i - 1, i - 1), -1);
        if (d.top == u.top) {
          let p = zr(_r(r, i, i + 1), -1);
          if (p.top != u.top)
            return Yo(p, p.left < d.left);
        }
      }
      return u;
    } else {
      let u = i, d = i, p = t < 0 ? 1 : -1;
      return t < 0 && !i ? (d++, p = -1) : t >= 0 && i == r.nodeValue.length ? (u--, p = 1) : t < 0 ? u-- : d++, Yo(zr(_r(r, u, d), p), p < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == Qn(r))) {
      let u = r.childNodes[i - 1];
      if (u.nodeType == 1)
        return Wc(u.getBoundingClientRect(), !1);
    }
    if (o == null && i < Qn(r)) {
      let u = r.childNodes[i];
      if (u.nodeType == 1)
        return Wc(u.getBoundingClientRect(), !0);
    }
    return Wc(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == Qn(r))) {
    let u = r.childNodes[i - 1], d = u.nodeType == 3 ? _r(u, Qn(u) - (a ? 0 : 1)) : u.nodeType == 1 && (u.nodeName != "BR" || !u.nextSibling) ? u : null;
    if (d)
      return Yo(zr(d, 1), !1);
  }
  if (o == null && i < Qn(r)) {
    let u = r.childNodes[i];
    for (; u.pmViewDesc && u.pmViewDesc.ignoreForCoords; )
      u = u.nextSibling;
    let d = u ? u.nodeType == 3 ? _r(u, 0, a ? 0 : 1) : u.nodeType == 1 ? u : null : null;
    if (d)
      return Yo(zr(d, -1), !0);
  }
  return Yo(zr(r.nodeType == 3 ? _r(r) : r, -t), t >= 0);
}
function Yo(n, e) {
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
function zg(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function GE(n, e, t) {
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
        u = _r(c, 0, c.nodeValue.length).getClientRects();
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
const XE = /[\u0590-\u08ac]/;
function YE(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, a = i == r.parent.content.size, c = n.domSelection();
  return !XE.test(r.parent.textContent) || !c.modify ? t == "left" || t == "backward" ? o : a : zg(n, e, () => {
    let { focusNode: u, focusOffset: d, anchorNode: p, anchorOffset: h } = n.domSelectionRange(), g = c.caretBidiLevel;
    c.modify("move", t, "character");
    let y = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: b, focusOffset: k } = n.domSelectionRange(), C = b && !y.contains(b.nodeType == 1 ? b : b.parentNode) || u == b && d == k;
    try {
      c.collapse(p, h), u && (u != p || d != h) && c.extend && c.extend(u, d);
    } catch {
    }
    return g != null && (c.caretBidiLevel = g), C;
  });
}
let Th = null, Ah = null, Mh = !1;
function ZE(n, e, t) {
  return Th == e && Ah == t ? Mh : (Th = e, Ah = t, Mh = t == "up" || t == "down" ? GE(n, e, t) : YE(n, e, t));
}
const Dn = 0, Nh = 1, vi = 2, or = 3;
class Es {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Dn, r.pmViewDesc = this;
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
      i = t > qt(this.contentDOM);
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
      return o && t && a && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? qt(o.dom) + 1 : 0 };
    } else {
      let o, a = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, a = !1)
        ;
      return o && a && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? qt(o.dom) : this.contentDOM.childNodes.length };
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
            i = qt(g.dom) + 1;
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
            o = qt(h.dom);
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
      let b = this.children[g], k = y + b.size;
      if (o > y && a < k)
        return b.setSelection(e - y - b.border, t - y - b.border, r, i);
      y = k;
    }
    let c = this.domFromPos(e, e ? -1 : 1), u = t == e ? c : this.domFromPos(t, t ? -1 : 1), d = r.getSelection(), p = !1;
    if ((jn || Gt) && e == t) {
      let { node: g, offset: y } = c;
      if (g.nodeType == 3) {
        if (p = !!(y && g.nodeValue[y - 1] == `
`), p && y == g.nodeValue.length)
          for (let b = g, k; b; b = b.parentNode) {
            if (k = b.nextSibling) {
              k.nodeName == "BR" && (c = u = { node: k.parentNode, offset: qt(k) + 1 });
              break;
            }
            let C = b.pmViewDesc;
            if (C && C.node && C.node.isBlock)
              break;
          }
      } else {
        let b = g.childNodes[y - 1];
        p = b && (b.nodeName == "BR" || b.contentEditable == "false");
      }
    }
    if (jn && d.focusNode && d.focusNode != u.node && d.focusNode.nodeType == 1) {
      let g = d.focusNode.childNodes[d.focusOffset];
      g && g.contentEditable == "false" && (i = !0);
    }
    if (!(i || p && Gt) && Ti(c.node, c.offset, d.anchorNode, d.anchorOffset) && Ti(u.node, u.offset, d.focusNode, d.focusOffset))
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
          this.dirty = e == r || t == a ? vi : Nh, e == c && t == u && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = or : o.markDirty(e - c, t - c);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? vi : or;
      }
      r = a;
    }
    this.dirty = vi;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? vi : Nh;
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
    return this.dirty == Dn && e.type.eq(this.widget.type);
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
class QE extends Es {
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
    return (!a || !a.dom) && (a = er.renderSpec(document, t.type.spec.toDOM(t, r))), new Ai(e, t, a.dom, a.contentDOM || a.dom);
  }
  parseRule() {
    return this.dirty & or || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != or && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Dn) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Dn;
    }
  }
  slice(e, t, r) {
    let i = Ai.create(this.parent, this.mark, !0, r), o = this.children, a = this.size;
    t < a && (o = xu(o, t, a, r)), e > 0 && (o = xu(o, 0, e, r));
    for (let c = 0; c < o.length; c++)
      o[c].parent = i;
    return i.children = o, i;
  }
}
class Xr extends Es {
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
      p || ({ dom: p, contentDOM: h } = er.renderSpec(document, t.type.spec.toDOM(t)));
    !h && !t.isText && p.nodeName != "BR" && (p.hasAttribute("contenteditable") || (p.contentEditable = "false"), t.type.spec.draggable && (p.draggable = !0));
    let g = p;
    return p = Kg(p, r, t), d ? u = new eO(e, t, r, i, p, h || null, g, d, o, a + 1) : t.isText ? new il(e, t, r, i, p, g, o) : new Xr(e, t, r, i, p, h || null, g, o, a + 1);
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
      e.contentElement || (e.getContent = () => H.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Dn && e.eq(this.node) && wu(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, a = o && o.pos > -1 ? o : null, c = o && o.pos < 0, u = new nO(this, a && a.node, e);
    oO(this.node, this.innerDeco, (d, p, h) => {
      d.spec.marks ? u.syncToMarks(d.spec.marks, r, e) : d.type.side >= 0 && !h && u.syncToMarks(p == this.node.childCount ? Fe.none : this.node.child(p).marks, r, e), u.placeWidget(d, e, i);
    }, (d, p, h, g) => {
      u.syncToMarks(d.marks, r, e);
      let y;
      u.findNodeMatch(d, p, h, g) || c && e.state.selection.from > i && e.state.selection.to < i + d.nodeSize && (y = u.findIndexWithChild(o.node)) > -1 && u.updateNodeAt(d, p, h, y, e) || u.updateNextNode(d, p, h, e, g, i) || u.addNode(d, p, h, e, i), i += d.nodeSize;
    }), u.syncToMarks([], r, e), this.node.isTextblock && u.addTextblockHacks(), u.destroyRest(), (u.changed || this.dirty == vi) && (a && this.protectLocalComposition(e, a), Ug(this.contentDOM, this.children, e), ho && sO(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof he) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.domSelectionRange(), a = aO(o.focusNode, o.focusOffset);
    if (!a || !this.dom.contains(a.parentNode))
      return null;
    if (this.node.inlineContent) {
      let c = a.nodeValue, u = lO(this.node.content, c, r - t, i - t);
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
    let a = new QE(this, o, t, i);
    e.input.compositionNodes.push(a), this.children = xu(this.children, r, r + i.length, e, a);
  }
  update(e, t, r, i) {
    return this.dirty == or || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Dn;
  }
  updateOuterDeco(e) {
    if (wu(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = jg(this.dom, this.nodeDOM, bu(this.outerDeco, this.node, t), bu(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
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
function Dh(n, e, t, r, i) {
  Kg(r, e, n);
  let o = new Xr(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class il extends Xr {
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
    return this.dirty == or || this.dirty != Dn && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Dn || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Dn, !0);
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
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = or);
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
    return this.dirty == Dn && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class eO extends Xr {
  constructor(e, t, r, i, o, a, c, u, d, p) {
    super(e, t, r, i, o, a, c, d, p), this.spec = u;
  }
  update(e, t, r, i) {
    if (this.dirty == or)
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
        r = Rh(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(c, r);
    if (a instanceof Ai) {
      let u = r ? r.previousSibling : n.lastChild;
      Ug(a.contentDOM, a.children, t), r = u ? u.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Rh(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const as = function(n) {
  n && (this.nodeName = n);
};
as.prototype = /* @__PURE__ */ Object.create(null);
const bi = [new as()];
function bu(n, e, t) {
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
    tO(i, c || bi[0], a);
  }
  return i;
}
function tO(n, e, t) {
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
  return jg(n, n, bi, bu(e, t, n.nodeType != 1));
}
function wu(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Rh(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class nO {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = rO(e.node.content, e);
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
      this.destroyRest(), this.top.dirty = Dn, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
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
    return a.dirty == or && a.dom == a.contentDOM && (a.dirty = vi), a.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
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
      if (u instanceof Xr) {
        let d = this.preMatch.matched.get(u);
        if (d != null && d != o)
          return !1;
        let p = u.dom, h, g = this.isLocked(p) && !(e.isText && u.node && u.node.isText && u.nodeDOM.nodeValue == e.text && u.dirty != or && wu(t, u.outerDeco));
        if (!g && u.update(e, t, r, i))
          return this.destroyBetween(this.index, c), u.dom != p && (this.changed = !0), this.index++, !0;
        if (!g && (h = this.recreateWrapper(u, e, t, r, i, a)))
          return this.top.children[this.index] = h, h.contentDOM && (h.dirty = vi, h.updateChildren(i, a + 1), h.dirty = Dn), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  recreateWrapper(e, t, r, i, o, a) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
      return null;
    let c = Xr.create(this.top, t, r, i, o, a);
    if (c.contentDOM) {
      c.children = e.children, e.children = [];
      for (let u of c.children)
        u.parent = c;
    }
    return e.destroy(), c;
  }
  addNode(e, t, r, i, o) {
    let a = Xr.create(this.top, e, t, r, i, o);
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
    (!e || !(e instanceof il) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Gt || Ft) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
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
function rO(n, e) {
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
function iO(n, e) {
  return n.type.side - e.type.side;
}
function oO(n, e, t, r) {
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
      let C = i[a++];
      C.widget && (p ? (h || (h = [p])).push(C) : p = C);
    }
    if (p)
      if (h) {
        h.sort(iO);
        for (let C = 0; C < h.length; C++)
          t(h[C], d, !!u);
      } else
        t(p, d, !!u);
    let g, y;
    if (u)
      y = -1, g = u, u = null;
    else if (d < n.childCount)
      y = d, g = n.child(d++);
    else
      break;
    for (let C = 0; C < c.length; C++)
      c[C].to <= o && c.splice(C--, 1);
    for (; a < i.length && i[a].from <= o && i[a].to > o; )
      c.push(i[a++]);
    let b = o + g.nodeSize;
    if (g.isText) {
      let C = b;
      a < i.length && i[a].from < C && (C = i[a].from);
      for (let A = 0; A < c.length; A++)
        c[A].to < C && (C = c[A].to);
      C < b && (u = g.cut(C - o), g = g.cut(0, C - o), b = C, y = -1);
    }
    let k = g.isInline && !g.isLeaf ? c.filter((C) => !C.inline) : c.slice();
    r(g, k, e.forChild(o, g), y), o = b;
  }
}
function sO(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function aO(n, e) {
  for (; ; ) {
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.childNodes.length > e && n.childNodes[e].nodeType == 3)
        return n.childNodes[e];
      n = n.childNodes[e - 1], e = Qn(n);
    } else if (n.nodeType == 1 && e < n.childNodes.length)
      n = n.childNodes[e], e = 0;
    else
      return null;
  }
}
function lO(n, e, t, r) {
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
function xu(n, e, t, r, i) {
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
    if (i && p.isAtom && oe.isSelectable(p) && i.parent && !(p.isInline && DE(t.focusNode, t.focusOffset, i.dom))) {
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
function Tr(n, e = !1) {
  let t = n.state.selection;
  if (Jg(n, t), !!qg(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Ft) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Ti(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      uO(n);
    else {
      let { anchor: r, head: i } = t, o, a;
      Ih && !(t instanceof he) && (t.$from.parent.inlineContent || (o = Ph(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (a = Ph(n, t.to))), n.docView.setSelection(r, i, n.root, e), Ih && (o && Lh(o), a && Lh(a)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && cO(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Ih = Gt || Ft && PE < 63;
function Ph(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (Gt && i && i.contentEditable == "false")
    return Uc(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Uc(i);
    if (o)
      return Uc(o);
  }
}
function Uc(n) {
  return n.contentEditable = "true", Gt && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Lh(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function cO(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!qg(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function uO(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, qt(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && sn && Gr <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Jg(n, e) {
  if (e instanceof oe) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Bh(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Bh(n);
}
function Bh(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function qu(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || he.between(e, t, r);
}
function $h(n) {
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
function fO(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Ti(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Su(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && ve.findFrom(o, e);
}
function Wr(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Fh(n, e, t) {
  let r = n.state.selection;
  if (r instanceof he)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let a = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Wr(n, new he(r.$anchor, a));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Su(n.state, e);
        return i && i instanceof oe ? Wr(n, i) : !1;
      } else if (!(Mn && t.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, a;
        if (!o || o.isText)
          return !1;
        let c = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (a = n.docView.descAt(c)) && !a.contentDOM ? oe.isSelectable(o) ? Wr(n, new oe(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : Cs ? Wr(n, new he(n.state.doc.resolve(e < 0 ? c : c + o.nodeSize))) : !1 : !1;
      }
    } else
      return !1;
  else {
    if (r instanceof oe && r.node.isInline)
      return Wr(n, new he(e > 0 ? r.$to : r.$from));
    {
      let i = Su(n.state, e);
      return i ? Wr(n, i) : !1;
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
  return e < 0 ? dO(n) : pO(n);
}
function dO(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, a = !1;
  for (jn && t.nodeType == 1 && r < Fa(t) && ls(t.childNodes[r], -1) && (a = !0); ; )
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
          i = t.parentNode, o = qt(c), c = c.previousSibling;
        if (c)
          t = c, r = Fa(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  a ? _u(n, t, r) : i && _u(n, i, o);
}
function pO(n) {
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
          o = c.parentNode, a = qt(c) + 1, c = c.nextSibling;
        if (c)
          t = c, r = 0, i = Fa(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && _u(n, o, a);
}
function Xg(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function hO(n, e) {
  for (; n && e == n.childNodes.length && !Uu(n); )
    e = qt(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function mO(n, e) {
  for (; n && !e && !Uu(n); )
    e = qt(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function _u(n, e, t) {
  if (e.nodeType != 3) {
    let o, a;
    (a = hO(e, t)) ? (e = a, t = 0) : (o = mO(e, t)) && (e = o, t = o.nodeValue.length);
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
    n.state == i && Tr(n);
  }, 50);
}
function Vh(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(Ft || LE) && t.parent.inlineContent) {
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
function zh(n, e, t) {
  let r = n.state.selection;
  if (r instanceof he && !r.empty || t.indexOf("s") > -1 || Mn && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let a = Su(n.state, e);
    if (a && a instanceof oe)
      return Wr(n, a);
  }
  if (!i.parent.inlineContent) {
    let a = e < 0 ? i : o, c = r instanceof Un ? ve.near(a, e) : ve.findFrom(a, e);
    return c ? Wr(n, c) : !1;
  }
  return !1;
}
function Hh(n, e) {
  if (!(n.state.selection instanceof he))
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
function Wh(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function gO(n) {
  if (!Gt || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Wh(n, r, "true"), setTimeout(() => Wh(n, r, "false"), 20);
  }
  return !1;
}
function yO(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function vO(n, e) {
  let t = e.keyCode, r = yO(e);
  if (t == 8 || Mn && t == 72 && r == "c")
    return Hh(n, -1) || Yi(n, -1);
  if (t == 46 && !e.shiftKey || Mn && t == 68 && r == "c")
    return Hh(n, 1) || Yi(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Mn && t == 66 && r == "c") {
    let i = t == 37 ? Vh(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Fh(n, i, r) || Yi(n, i);
  } else if (t == 39 || Mn && t == 70 && r == "c") {
    let i = t == 39 ? Vh(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Fh(n, i, r) || Yi(n, i);
  } else {
    if (t == 38 || Mn && t == 80 && r == "c")
      return zh(n, -1, r) || Yi(n, -1);
    if (t == 40 || Mn && t == 78 && r == "c")
      return gO(n) || zh(n, 1, r) || Yi(n, 1);
    if (r == (Mn ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
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
  let a = n.someProp("clipboardSerializer") || er.fromSchema(n.state.schema), c = ry(), u = c.createElement("div");
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
      return e ? new J(H.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : J.empty;
    let h = n.someProp("clipboardTextParser", (g) => g(e, i, r, n));
    if (h)
      c = h;
    else {
      let g = i.marks(), { schema: y } = n.state, b = er.fromSchema(y);
      a = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((k) => {
        let C = a.appendChild(document.createElement("p"));
        k && C.appendChild(b.serializeNode(y.text(k, g)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (h) => {
      t = h(t, n);
    }), a = xO(t), Cs && SO(a);
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
      return g.nodeName == "BR" && !g.nextSibling && g.parentNode && !bO.test(g.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), p)
    c = _O(Uh(c, +p[1], +p[2]), p[4]);
  else if (c = J.maxOpen(wO(c.content, i), !0), c.openStart || c.openEnd) {
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
const bO = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function wO(n, e) {
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
      return H.from(a);
  }
  return n;
}
function Qg(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, H.from(n));
  return n;
}
function ey(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = ey(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(H.from(Qg(t, n, i + 1))));
  }
}
function ty(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, ty(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(H.empty, !0);
  return n.copy(t.append(r));
}
function ku(n, e, t, r, i, o) {
  let a = e < 0 ? n.firstChild : n.lastChild, c = a.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (c = ku(c, e, t, r, i + 1, o)), i >= t && (c = e < 0 ? a.contentMatchAt(0).fillBefore(c, o <= i).append(c) : c.append(a.contentMatchAt(a.childCount).fillBefore(H.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, a.copy(c));
}
function Uh(n, e, t) {
  return e < n.openStart && (n = new J(ku(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new J(ku(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
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
let jh = null;
function ry() {
  return jh || (jh = document.implementation.createHTMLDocument("title"));
}
function xO(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = ry().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && ny[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = n, i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function SO(n) {
  let e = n.querySelectorAll(Ft ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function _O(n, e) {
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
    i = H.from(u.create(r[c + 1], i)), o++, a++;
  }
  return new J(i, o, a);
}
const Xt = {}, Yt = {}, kO = { touchstart: !0, touchmove: !0 };
class CO {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function EO(n) {
  for (let e in Xt) {
    let t = Xt[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      TO(n, r) && !Ju(n, r) && (n.editable || !(r.type in Yt)) && t(n, r);
    }, kO[e] ? { passive: !0 } : void 0);
  }
  Gt && n.dom.addEventListener("input", () => null), Cu(n);
}
function Jr(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function OO(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Cu(n) {
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
function TO(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function AO(n, e) {
  !Ju(n, e) && Xt[e.type] && (n.editable || !(e.type in Yt)) && Xt[e.type](n, e);
}
Yt.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !oy(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Hn && Ft && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), ho && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, yi(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || vO(n, t) ? t.preventDefault() : Jr(n, "key");
};
Yt.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Yt.keypress = (n, e) => {
  let t = e;
  if (oy(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Mn && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof he) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function ol(n) {
  return { left: n.clientX, top: n.clientY };
}
function MO(n, e) {
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
function NO(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && oe.isSelectable(r) ? (lo(n, new oe(t), "pointer"), !0) : !1;
}
function DO(n, e) {
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
function RO(n, e, t, r, i) {
  return Gu(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? DO(n, t) : NO(n, t));
}
function IO(n, e, t, r) {
  return Gu(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function PO(n, e, t, r) {
  return Gu(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || LO(n, t, r);
}
function LO(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (lo(n, he.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let a = o > i.depth ? i.nodeAfter : i.node(o), c = i.before(o);
    if (a.inlineContent)
      lo(n, he.create(r, c + 1, c + 1 + a.content.size), "pointer");
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
const iy = Mn ? "metaKey" : "ctrlKey";
Xt.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = Xu(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && MO(t, n.input.lastClick) && !t[iy] && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o };
  let a = n.posAtCoords(ol(t));
  !a || (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new BO(n, a, t, !!r)) : (o == "doubleClick" ? IO : PO)(n, a.pos, a.inside, t) ? t.preventDefault() : Jr(n, "pointer"));
};
class BO {
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
      setUneditable: !!(this.target && jn && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Jr(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Tr(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(ol(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Jr(this.view, "pointer") : RO(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || Gt && this.mightDrag && !this.mightDrag.node.isAtom || Ft && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (lo(this.view, ve.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : Jr(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Jr(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Xt.touchstart = (n) => {
  n.input.lastTouch = Date.now(), Xu(n), Jr(n, "pointer");
};
Xt.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Jr(n, "pointer");
};
Xt.contextmenu = (n) => Xu(n);
function oy(n, e) {
  return n.composing ? !0 : Gt && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const $O = Hn ? 5e3 : -1;
Yt.compositionstart = Yt.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Va(n, !0), n.markCursor = null;
    else if (Va(n), jn && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
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
  sy(n, $O);
};
Yt.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, sy(n, 20));
};
function sy(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Va(n), e));
}
function ay(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = FO()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function FO() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Va(n, e = !1) {
  if (!(Hn && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), ay(n), e || n.docView && n.docView.dirty) {
      let t = Ku(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function VO(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const mo = sn && Gr < 15 || ho && BE < 604;
Xt.copy = Yt.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = mo ? null : t.clipboardData, a = r.content(), { dom: c, text: u } = Yg(n, a);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", c.innerHTML), o.setData("text/plain", u)) : VO(n, c), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function zO(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function HO(n, e) {
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
  let a = zO(o), c = a ? n.state.tr.replaceSelectionWith(a, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(c.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
Yt.paste = (n, e) => {
  let t = e;
  if (n.composing && !Hn)
    return;
  let r = mo ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && ys(n, r.getData("text/plain"), r.getData("text/html"), i, t) ? t.preventDefault() : HO(n, t);
};
class WO {
  constructor(e, t) {
    this.slice = e, this.move = t;
  }
}
const ly = Mn ? "altKey" : "ctrlKey";
Xt.dragstart = (n, e) => {
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
  t.dataTransfer.clearData(), t.dataTransfer.setData(mo ? "Text" : "text/html", c.innerHTML), t.dataTransfer.effectAllowed = "copyMove", mo || t.dataTransfer.setData("text/plain", u), n.dragging = new WO(a, !t[ly]);
};
Xt.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Yt.dragover = Yt.dragenter = (n, e) => e.preventDefault();
Yt.drop = (n, e) => {
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
    d.mapping.maps[d.mapping.maps.length - 1].forEach((k, C, A, D) => b = D), d.setSelection(qu(n, y, d.doc.resolve(b)));
  }
  n.focus(), n.dispatch(d.setMeta("uiEvent", "drop"));
};
Xt.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Tr(n);
  }, 20));
};
Xt.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
Xt.beforeinput = (n, e) => {
  if (Ft && Hn && e.inputType == "deleteContentBackward") {
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
for (let n in Yt)
  Xt[n] = Yt[n];
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
    return a ? null : new Nn(o - r, o - r, this);
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
class Yr {
  constructor(e, t) {
    this.attrs = e, this.spec = t || _i;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, a = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= a ? null : new Nn(o, a, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Yr && vs(this.attrs, e.attrs) && vs(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Yr;
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
    return a.deleted || a.pos <= o.pos ? null : new Nn(o.pos - r, a.pos - r, this);
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
class Nn {
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  copy(e, t) {
    return new Nn(e, t, this.type);
  }
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  static widget(e, t, r) {
    return new Nn(e, e, new za(t, r));
  }
  static inline(e, t, r, i) {
    return new Nn(e, t, new Yr(r, i));
  }
  static node(e, t, r, i) {
    return new Nn(e, t, new Yu(r, i));
  }
  get spec() {
    return this.type.spec;
  }
  get inline() {
    return this.type instanceof Yr;
  }
  get widget() {
    return this.type instanceof za;
  }
}
const eo = [], _i = {};
class yt {
  constructor(e, t) {
    this.local = e.length ? e : eo, this.children = t.length ? t : eo;
  }
  static create(e, t) {
    return t.length ? Ha(t, e, 0, _i) : Bt;
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
    return this == Bt || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || _i);
  }
  mapInner(e, t, r, i, o) {
    let a;
    for (let c = 0; c < this.local.length; c++) {
      let u = this.local[c].map(e, r, i);
      u && u.type.valid(t, u) ? (a || (a = [])).push(u) : o.onRemove && o.onRemove(this.local[c].spec);
    }
    return this.children.length ? UO(this.children, a || [], e, t, r, i, o) : a ? new yt(a.sort(ki), eo) : Bt;
  }
  add(e, t) {
    return t.length ? this == Bt ? yt.create(e, t) : this.addInner(e, t, 0) : this;
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
    return new yt(a.length ? this.local.concat(a).sort(ki) : this.local, i || this.children);
  }
  remove(e) {
    return e.length == 0 || this == Bt ? this : this.removeInner(e, 0);
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
      d != Bt ? r[o + 2] = d : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, a; o < e.length; o++)
        if (a = e[o])
          for (let c = 0; c < i.length; c++)
            i[c].eq(a, t) && (i == this.local && (i = this.local.slice()), i.splice(c--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new yt(i, r) : Bt;
  }
  forChild(e, t) {
    if (this == Bt)
      return this;
    if (t.isLeaf)
      return yt.empty;
    let r, i;
    for (let c = 0; c < this.children.length; c += 3)
      if (this.children[c] >= e) {
        this.children[c] == e && (r = this.children[c + 2]);
        break;
      }
    let o = e + 1, a = o + t.content.size;
    for (let c = 0; c < this.local.length; c++) {
      let u = this.local[c];
      if (u.from < a && u.to > o && u.type instanceof Yr) {
        let d = Math.max(o, u.from) - o, p = Math.min(a, u.to) - o;
        d < p && (i || (i = [])).push(u.copy(d, p));
      }
    }
    if (i) {
      let c = new yt(i.sort(ki), eo);
      return r ? new jr([c, r]) : c;
    }
    return r || Bt;
  }
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof yt) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    if (this == Bt)
      return eo;
    if (e.inlineContent || !this.local.some(Yr.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Yr || t.push(this.local[r]);
    return t;
  }
}
yt.empty = new yt([], []);
yt.removeOverlap = Zu;
const Bt = yt.empty;
class jr {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, _i));
    return jr.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return yt.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != Bt && (o instanceof jr ? r = r.concat(o.members) : r.push(o));
    }
    return jr.from(r);
  }
  eq(e) {
    if (!(e instanceof jr) || e.members.length != this.members.length)
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
        return Bt;
      case 1:
        return e[0];
      default:
        return new jr(e.every((t) => t instanceof yt) ? e : e.reduce((t, r) => t.concat(r instanceof yt ? r : r.members), []));
    }
  }
}
function UO(n, e, t, r, i, o, a) {
  let c = n.slice();
  for (let d = 0, p = o; d < t.maps.length; d++) {
    let h = 0;
    t.maps[d].forEach((g, y, b, k) => {
      let C = k - b - (y - g);
      for (let A = 0; A < c.length; A += 3) {
        let D = c[A + 1];
        if (D < 0 || g > D + p - h)
          continue;
        let W = c[A] + p - h;
        y >= W ? c[A + 1] = g <= W ? -2 : -1 : b >= i && C && (c[A] += C, c[A + 1] += C);
      }
      h += C;
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
      let g = t.map(n[d + 1] + o, -1), y = g - i, { index: b, offset: k } = r.content.findIndex(h), C = r.maybeChild(b);
      if (C && k == h && k + C.nodeSize == y) {
        let A = c[d + 2].mapInner(t, C, p + 1, n[d] + o + 1, a);
        A != Bt ? (c[d] = h, c[d + 1] = y, c[d + 2] = A) : (c[d + 1] = -2, u = !0);
      } else
        u = !0;
    }
  if (u) {
    let d = jO(c, n, e, t, i, o, a), p = Ha(d, r, 0, a);
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
  return new yt(e.sort(ki), c);
}
function cy(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Nn(i.from + e, i.to + e, i.type));
  }
  return t;
}
function jO(n, e, t, r, i, o, a) {
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
      p != Bt && i.push(u, u + c.nodeSize, p);
    }
  });
  let a = cy(o ? fy(n) : n, -t).sort(ki);
  for (let c = 0; c < a.length; c++)
    a[c].type.valid(e, a[c]) || (r.onRemove && r.onRemove(a[c].spec), a.splice(c--, 1));
  return a.length || i.length ? new yt(a, i) : Bt;
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
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), Kh(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), Kh(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Kh(n, e, t) {
  for (; e < n.length && ki(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function jc(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != Bt && e.push(r);
  }), n.cursorWrapper && e.push(yt.create(n.state.doc, [n.cursorWrapper.deco])), jr.from(e);
}
const KO = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, qO = sn && Gr <= 11;
class JO {
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
class GO {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new JO(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      sn && Gr <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), qO && (this.onCharData = (r) => {
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
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, KO)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
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
    if (!!$h(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Tr(this.view);
      if (sn && Gr <= 11 && !this.view.state.selection.empty) {
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
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && $h(e) && !this.ignoreSelectionChange(r), o = -1, a = -1, c = !1, u = [];
    if (e.editable)
      for (let p = 0; p < t.length; p++) {
        let h = this.registerMutation(t[p], u);
        h && (o = o < 0 ? h.from : Math.min(h.from, o), a = a < 0 ? h.to : Math.max(h.to, a), h.typeOver && (c = !0));
      }
    if (jn && u.length > 1) {
      let p = u.filter((h) => h.nodeName == "BR");
      if (p.length == 2) {
        let h = p[0], g = p[1];
        h.parentNode && h.parentNode.parentNode == g.parentNode ? g.remove() : h.remove();
      }
    }
    let d = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && rl(r) && (d = Ku(e)) && d.eq(ve.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Tr(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, a), XO(e)), this.handleDOMChange(o, a, c, u), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Tr(e), this.currentSelection.set(r));
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
      if (sn && Gr <= 11 && e.addedNodes.length)
        for (let p = 0; p < e.addedNodes.length; p++) {
          let { previousSibling: h, nextSibling: g } = e.addedNodes[p];
          (!h || Array.prototype.indexOf.call(e.addedNodes, h) < 0) && (i = h), (!g || Array.prototype.indexOf.call(e.addedNodes, g) < 0) && (o = g);
        }
      let a = i && i.parentNode == e.target ? qt(i) + 1 : 0, c = r.localPosFromDOM(e.target, a, -1), u = o && o.parentNode == e.target ? qt(o) : e.target.childNodes.length, d = r.localPosFromDOM(e.target, u, 1);
      return { from: c, to: d };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : {
        from: r.posAtStart,
        to: r.posAtEnd,
        typeOver: e.target.nodeValue == e.oldValue
      };
  }
}
let qh = /* @__PURE__ */ new WeakMap(), Jh = !1;
function XO(n) {
  if (!qh.has(n) && (qh.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = jn, Jh)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Jh = !0;
  }
}
function YO(n) {
  let e;
  function t(u) {
    u.preventDefault(), u.stopImmediatePropagation(), e = u.getTargetRanges()[0];
  }
  n.dom.addEventListener("beforeinput", t, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", t, !0);
  let r = e.startContainer, i = e.startOffset, o = e.endContainer, a = e.endOffset, c = n.domAtPos(n.state.selection.anchor);
  return Ti(c.node, c.offset, o, a) && ([r, i, o, a] = [o, a, r, i]), { anchorNode: r, anchorOffset: i, focusNode: o, focusOffset: a };
}
function ZO(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: a, to: c } = n.docView.parseRange(e, t), u = n.domSelectionRange(), d, p = u.anchorNode;
  if (p && n.dom.contains(p.nodeType == 1 ? p : p.parentNode) && (d = [{ node: p, offset: u.anchorOffset }], rl(u) || d.push({ node: u.focusNode, offset: u.focusOffset })), Ft && n.input.lastKeyCode === 8)
    for (let C = o; C > i; C--) {
      let A = r.childNodes[C - 1], D = A.pmViewDesc;
      if (A.nodeName == "BR" && !D) {
        o = C;
        break;
      }
      if (!D || D.size)
        break;
    }
  let h = n.state.doc, g = n.someProp("domParser") || uo.fromSchema(n.state.schema), y = h.resolve(a), b = null, k = g.parse(r, {
    topNode: y.parent,
    topMatch: y.parent.contentMatchAt(y.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: y.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: d,
    ruleFromNode: QO,
    context: y
  });
  if (d && d[0].pos != null) {
    let C = d[0].pos, A = d[1] && d[1].pos;
    A == null && (A = C), b = { anchor: C + a, head: A + a };
  }
  return { doc: k, sel: b, from: a, to: c };
}
function QO(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Gt && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Gt && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const eT = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function tT(n, e, t, r, i) {
  let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let Z = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, ke = Ku(n, Z);
    if (ke && !n.state.selection.eq(ke)) {
      if (Ft && Hn && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (je) => je(n, yi(13, "Enter"))))
        return;
      let Ue = n.state.tr.setSelection(ke);
      Z == "pointer" ? Ue.setMeta("pointer", !0) : Z == "key" && Ue.scrollIntoView(), o && Ue.setMeta("composition", o), n.dispatch(Ue);
    }
    return;
  }
  let a = n.state.doc.resolve(e), c = a.sharedDepth(t);
  e = a.before(c + 1), t = n.state.doc.resolve(t).after(c + 1);
  let u = n.state.selection, d = ZO(n, e, t), p = n.state.doc, h = p.slice(d.from, d.to), g, y;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (g = n.state.selection.to, y = "end") : (g = n.state.selection.from, y = "start"), n.input.lastKeyCode = null;
  let b = iT(h.content, d.doc.content, d.from, g, y);
  if ((ho && n.input.lastIOSEnter > Date.now() - 225 || Hn) && i.some((Z) => Z.nodeType == 1 && !eT.test(Z.nodeName)) && (!b || b.endA >= b.endB) && n.someProp("handleKeyDown", (Z) => Z(n, yi(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!b)
    if (r && u instanceof he && !u.empty && u.$head.sameParent(u.$anchor) && !n.composing && !(d.sel && d.sel.anchor != d.sel.head))
      b = { start: u.from, endA: u.to, endB: u.to };
    else {
      if (d.sel) {
        let Z = Gh(n, n.state.doc, d.sel);
        if (Z && !Z.eq(n.state.selection)) {
          let ke = n.state.tr.setSelection(Z);
          o && ke.setMeta("composition", o), n.dispatch(ke);
        }
      }
      return;
    }
  if (Ft && n.cursorWrapper && d.sel && d.sel.anchor == n.cursorWrapper.deco.from && d.sel.head == d.sel.anchor) {
    let Z = b.endB - b.start;
    d.sel = { anchor: d.sel.anchor + Z, head: d.sel.anchor + Z };
  }
  n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && b.start == b.endB && n.state.selection instanceof he && (b.start > n.state.selection.from && b.start <= n.state.selection.from + 2 && n.state.selection.from >= d.from ? b.start = n.state.selection.from : b.endA < n.state.selection.to && b.endA >= n.state.selection.to - 2 && n.state.selection.to <= d.to && (b.endB += n.state.selection.to - b.endA, b.endA = n.state.selection.to)), sn && Gr <= 11 && b.endB == b.start + 1 && b.endA == b.start && b.start > d.from && d.doc.textBetween(b.start - d.from - 1, b.start - d.from + 1) == " \xA0" && (b.start--, b.endA--, b.endB--);
  let k = d.doc.resolveNoCache(b.start - d.from), C = d.doc.resolveNoCache(b.endB - d.from), A = p.resolve(b.start), D = k.sameParent(C) && k.parent.inlineContent && A.end() >= b.endA, W;
  if ((ho && n.input.lastIOSEnter > Date.now() - 225 && (!D || i.some((Z) => Z.nodeName == "DIV" || Z.nodeName == "P")) || !D && k.pos < d.doc.content.size && !k.sameParent(C) && (W = ve.findFrom(d.doc.resolve(k.pos + 1), 1, !0)) && W.head == C.pos) && n.someProp("handleKeyDown", (Z) => Z(n, yi(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > b.start && rT(p, b.start, b.endA, k, C) && n.someProp("handleKeyDown", (Z) => Z(n, yi(8, "Backspace")))) {
    Hn && Ft && n.domObserver.suppressSelectionUpdates();
    return;
  }
  Ft && Hn && b.endB == b.start && (n.input.lastAndroidDelete = Date.now()), Hn && !D && k.start() != C.start() && C.parentOffset == 0 && k.depth == C.depth && d.sel && d.sel.anchor == d.sel.head && d.sel.head == b.endA && (b.endB -= 2, C = d.doc.resolveNoCache(b.endB - d.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(Z) {
      return Z(n, yi(13, "Enter"));
    });
  }, 20));
  let E = b.start, q = b.endA, $, te, _e;
  if (D) {
    if (k.pos == C.pos)
      sn && Gr <= 11 && k.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Tr(n), 20)), $ = n.state.tr.delete(E, q), te = p.resolve(b.start).marksAcross(p.resolve(b.endA));
    else if (b.endA == b.endB && (_e = nT(k.parent.content.cut(k.parentOffset, C.parentOffset), A.parent.content.cut(A.parentOffset, b.endA - A.start()))))
      $ = n.state.tr, _e.type == "add" ? $.addMark(E, q, _e.mark) : $.removeMark(E, q, _e.mark);
    else if (k.parent.child(k.index()).isText && k.index() == C.index() - (C.textOffset ? 0 : 1)) {
      let Z = k.parent.textBetween(k.parentOffset, C.parentOffset);
      if (n.someProp("handleTextInput", (ke) => ke(n, E, q, Z)))
        return;
      $ = n.state.tr.insertText(Z, E, q);
    }
  }
  if ($ || ($ = n.state.tr.replace(E, q, d.doc.slice(b.start - d.from, b.endB - d.from))), d.sel) {
    let Z = Gh(n, $.doc, d.sel);
    Z && !(Ft && Hn && n.composing && Z.empty && (b.start != b.endB || n.input.lastAndroidDelete < Date.now() - 100) && (Z.head == E || Z.head == $.mapping.map(q) - 1) || sn && Z.empty && Z.head == E) && $.setSelection(Z);
  }
  te && $.ensureMarks(te), o && $.setMeta("composition", o), n.dispatch($.scrollIntoView());
}
function Gh(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : qu(n, e.resolve(t.anchor), e.resolve(t.head));
}
function nT(n, e) {
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
  if (H.from(d).eq(n))
    return { mark: c, type: a };
}
function rT(n, e, t, r, i) {
  if (!r.parent.isTextblock || t - e <= i.pos - r.pos || Kc(r, !0, !1) < i.pos)
    return !1;
  let o = n.resolve(e);
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let a = n.resolve(Kc(o, !0, !0));
  return !a.parent.isTextblock || a.pos > t || Kc(a, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(a.parent.content);
}
function Kc(n, e, t) {
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
function iT(n, e, t, r, i) {
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
class oT {
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new CO(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(em), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Zh(this), Yh(this), this.nodeViews = Qh(this), this.docView = Dh(this.state.doc, Xh(this), jc(this), this.dom, this), this.domObserver = new GO(this, (r, i, o, a) => tT(this, r, i, o, a)), this.domObserver.start(), EO(this), this.updatePluginViews();
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
    let r = this.state, i = !1, o = !1;
    e.storedMarks && this.composing && (ay(this), o = !0), this.state = e;
    let a = r.plugins != e.plugins || this._props.plugins != t.plugins;
    if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let g = Qh(this);
      aT(g, this.nodeViews) && (this.nodeViews = g, i = !0);
    }
    (a || t.handleDOMEvents != this._props.handleDOMEvents) && Cu(this), this.editable = Zh(this), Yh(this);
    let c = jc(this), u = Xh(this), d = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", p = i || !this.docView.matchesNode(e.doc, u, c);
    (p || !e.selection.eq(r.selection)) && (o = !0);
    let h = d == "preserve" && o && this.dom.style.overflowAnchor == null && VE(this);
    if (o) {
      this.domObserver.stop();
      let g = p && (sn || Ft) && !this.composing && !r.selection.empty && !e.selection.empty && sT(r.selection, e.selection);
      if (p) {
        let y = Ft ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (i || !this.docView.update(e.doc, u, c, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Dh(e.doc, u, c, this.dom, this)), y && !this.trackWrites && (g = !0);
      }
      g || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && fO(this)) ? Tr(this, g) : (Jg(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(r), d == "reset" ? this.dom.scrollTop = 0 : d == "to selection" ? this.scrollToSelection() : h && zE(h);
  }
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof oe) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Eh(this, t.getBoundingClientRect(), e);
      } else
        Eh(this, this.coordsAtPos(this.state.selection.head, 1), e);
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
    if (sn) {
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
    this.domObserver.stop(), this.editable && HE(this.dom), Tr(this), this.domObserver.start();
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
    return qE(this, e);
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
    return ZE(this, t || this.state, e);
  }
  pasteHTML(e, t) {
    return ys(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  pasteText(e, t) {
    return ys(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  destroy() {
    !this.docView || (OO(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], jc(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(e) {
    return AO(this, e);
  }
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  domSelectionRange() {
    return Gt && this.root.nodeType === 11 && RE(this.dom.ownerDocument) == this.dom ? YO(this) : this.domSelection();
  }
  domSelection() {
    return this.root.getSelection();
  }
}
function Xh(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Nn.node(0, n.state.doc.content.size, e)];
}
function Yh(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Nn.widget(n.state.selection.head, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Zh(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function sT(n, e) {
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
function aT(n, e) {
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
var ei = {
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
}, lT = typeof navigator < "u" && /Mac/.test(navigator.platform), cT = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Dt = 0; Dt < 10; Dt++)
  ei[48 + Dt] = ei[96 + Dt] = String(Dt);
for (var Dt = 1; Dt <= 24; Dt++)
  ei[Dt + 111] = "F" + Dt;
for (var Dt = 65; Dt <= 90; Dt++)
  ei[Dt] = String.fromCharCode(Dt + 32), Wa[Dt] = String.fromCharCode(Dt);
for (var qc in ei)
  Wa.hasOwnProperty(qc) || (Wa[qc] = ei[qc]);
function uT(n) {
  var e = lT && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || cT && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Wa : ei)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const fT = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function dT(n) {
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
      fT ? a = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + u);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), a && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function pT(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[dT(t)] = n[t];
  return e;
}
function Jc(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function hT(n) {
  return new cn({ props: { handleKeyDown: dy(n) } });
}
function dy(n) {
  let e = pT(n);
  return function(t, r) {
    let i = uT(r), o, a = e[Jc(i, r)];
    if (a && a(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let c = e[Jc(i, r, !1)];
        if (c && c(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = ei[r.keyCode]) && o != i) {
        let c = e[Jc(o, r)];
        if (c && c(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const mT = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function gT(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const yT = (n, e, t) => {
  let r = gT(n, t);
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
        c.setSelection(go(o, "end") ? ve.findFrom(c.doc.resolve(c.mapping.map(i.pos, -1)), -1) : oe.create(c.doc, i.pos - o.nodeSize)), e(c.scrollIntoView());
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
const vT = (n, e, t) => {
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
function bT(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const wT = (n, e, t) => {
  let r = bT(n, t);
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
        c.setSelection(go(o, "start") ? ve.findFrom(c.doc.resolve(c.mapping.map(i.pos)), 1) : oe.create(c.doc, c.mapping.map(i.pos))), e(c.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, xT = (n, e, t) => {
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
const ST = (n, e) => {
  let t = n.selection, r = t instanceof oe, i;
  if (r) {
    if (t.node.isTextblock || !ti(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = tl(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(oe.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, _T = (n, e) => {
  let t = n.selection, r;
  if (t instanceof oe) {
    if (t.node.isTextblock || !ti(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = tl(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, kT = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && _o(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, CT = (n, e) => {
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
const ET = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), a = my(i.contentMatchAt(o));
  if (!a || !i.canReplaceWith(o, o, a))
    return !1;
  if (e) {
    let c = t.after(), u = n.tr.replaceWith(c, c, a.createAndFill());
    u.setSelection(ve.near(u.doc.resolve(c), 1)), e(u.scrollIntoView());
  }
  return !0;
}, OT = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof Un || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = my(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let a = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, c = n.tr.insert(a, o.createAndFill());
    c.setSelection(he.create(c.doc, a + 1)), e(c.scrollIntoView());
  }
  return !0;
}, TT = (n, e) => {
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
}, AT = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(oe.create(n.doc, i))), !0);
};
function MT(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || ti(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function gy(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o, a;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (MT(n, e, t))
    return !0;
  let c = e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (a = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && a.matchType(o[0] || i.type).validEnd) {
    if (t) {
      let h = e.pos + i.nodeSize, g = H.empty;
      for (let k = o.length - 1; k >= 0; k--)
        g = H.from(o[k].create(null, g));
      g = H.from(r.copy(g));
      let y = n.tr.step(new _t(e.pos - 1, h, e.pos, h, new J(g, 1, 0), o.length, !0)), b = h + 2 * o.length;
      ti(y.doc, b) && y.join(b), t(y.scrollIntoView());
    }
    return !0;
  }
  let u = ve.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), p = d && _o(d);
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
        let k = H.empty;
        for (let A = g.length - 1; A >= 0; A--)
          k = H.from(g[A].copy(k));
        let C = n.tr.step(new _t(e.pos - g.length, e.pos + i.nodeSize, e.pos + b, e.pos + i.nodeSize - b, new J(k, g.length, 0), 0, !0));
        t(C.scrollIntoView());
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
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(he.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const NT = yy(-1), DT = yy(1);
function RT(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, a = i.blockRange(o), c = a && zu(a, n, e);
    return c ? (r && r(t.tr.wrap(a, c).scrollIntoView()), !0) : !1;
  };
}
function tm(n, e = null) {
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
function IT(n, e = null) {
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
    return d ? (r && r(PT(t.tr, a, d, c, n).scrollIntoView()), !0) : !1;
  };
}
function PT(n, e, t, r, i) {
  let o = H.empty;
  for (let p = t.length - 1; p >= 0; p--)
    o = H.from(t[p].type.create(t[p].attrs, o));
  n.step(new _t(e.start - (r ? 2 : 0), e.end, e.start, e.end, new J(o, 0, 0), t.length, !0));
  let a = 0;
  for (let p = 0; p < t.length; p++)
    t[p].type == i && (a = p + 1);
  let c = t.length - a, u = e.start + t.length - (r ? 2 : 0), d = e.parent;
  for (let p = e.startIndex, h = e.endIndex, g = !0; p < h; p++, g = !1)
    !g && so(n.doc, u, c) && (n.split(u, c), u += 2 * c), u += d.child(p).nodeSize;
  return n;
}
function LT(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (a) => a.childCount > 0 && a.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? BT(e, t, n, o) : $T(e, t, o) : !0 : !1;
  };
}
function BT(n, e, t, r) {
  let i = n.tr, o = r.end, a = r.$to.end(r.depth);
  o < a && (i.step(new _t(o - 1, a, o, a, new J(H.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Ia(i.doc.resolve(r.$from.pos), i.doc.resolve(a), r.depth));
  const c = _o(r);
  if (c == null)
    return !1;
  i.lift(r, c);
  let u = i.mapping.map(o, -1) - 1;
  return ti(i.doc, u) && i.join(u), e(i.scrollIntoView()), !0;
}
function $T(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let y = t.end, b = t.endIndex - 1, k = t.startIndex; b > k; b--)
    y -= i.child(b).nodeSize, r.delete(y - 1, y + 1);
  let o = r.doc.resolve(t.start), a = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let c = t.startIndex == 0, u = t.endIndex == i.childCount, d = o.node(-1), p = o.index(-1);
  if (!d.canReplace(p + (c ? 0 : 1), p + 1, a.content.append(u ? H.empty : H.from(i))))
    return !1;
  let h = o.pos, g = h + a.nodeSize;
  return r.step(new _t(h - (c ? 1 : 0), g + (u ? 1 : 0), h + 1, g - 1, new J((c ? H.empty : H.from(i.copy(H.empty))).append(u ? H.empty : H.from(i.copy(H.empty))), c ? 0 : 1, u ? 0 : 1), c ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function FT(n) {
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
      let d = u.lastChild && u.lastChild.type == c.type, p = H.from(d ? n.create() : null), h = new J(H.from(n.create(null, H.from(c.type.create(null, p)))), d ? 3 : 1, 0), g = o.start, y = o.end;
      t(e.tr.step(new _t(g - (d ? 3 : 1), y, g, y, h, 1, !0)).scrollIntoView());
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
      ...Object.fromEntries(Object.entries(r).map(([g, y]) => [g, (...k) => {
        const C = this.buildProps(d, t), A = y(...k)(C);
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
class VT {
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
function Ct(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function vt(...n) {
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
function Eu(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => vt(t, r), {});
}
function by(n) {
  return typeof n == "function";
}
function ye(n, e = void 0, ...t) {
  return by(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function zT(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function HT(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function nm(n, e) {
  return n.style ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, a) => {
        const c = a.attribute.parseHTML ? a.attribute.parseHTML(t) : HT(t.getAttribute(a.name));
        return c == null ? o : {
          ...o,
          [a.name]: c
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function rm(n) {
  return Object.fromEntries(
    Object.entries(n).filter(([e, t]) => e === "attrs" && zT(t) ? !1 : t != null)
  );
}
function WT(n, e) {
  var t;
  const r = vy(n), { nodeExtensions: i, markExtensions: o } = ll(n), a = (t = i.find((d) => Q(d, "topNode"))) === null || t === void 0 ? void 0 : t.name, c = Object.fromEntries(i.map((d) => {
    const p = r.filter((A) => A.type === d.name), h = {
      name: d.name,
      options: d.options,
      storage: d.storage,
      editor: e
    }, g = n.reduce((A, D) => {
      const W = Q(D, "extendNodeSchema", h);
      return {
        ...A,
        ...W ? W(d) : {}
      };
    }, {}), y = rm({
      ...g,
      content: ye(Q(d, "content", h)),
      marks: ye(Q(d, "marks", h)),
      group: ye(Q(d, "group", h)),
      inline: ye(Q(d, "inline", h)),
      atom: ye(Q(d, "atom", h)),
      selectable: ye(Q(d, "selectable", h)),
      draggable: ye(Q(d, "draggable", h)),
      code: ye(Q(d, "code", h)),
      defining: ye(Q(d, "defining", h)),
      isolating: ye(Q(d, "isolating", h)),
      attrs: Object.fromEntries(p.map((A) => {
        var D;
        return [A.name, { default: (D = A == null ? void 0 : A.attribute) === null || D === void 0 ? void 0 : D.default }];
      }))
    }), b = ye(Q(d, "parseHTML", h));
    b && (y.parseDOM = b.map((A) => nm(A, p)));
    const k = Q(d, "renderHTML", h);
    k && (y.toDOM = (A) => k({
      node: A,
      HTMLAttributes: Eu(A, p)
    }));
    const C = Q(d, "renderText", h);
    return C && (y.toText = C), [d.name, y];
  })), u = Object.fromEntries(o.map((d) => {
    const p = r.filter((C) => C.type === d.name), h = {
      name: d.name,
      options: d.options,
      storage: d.storage,
      editor: e
    }, g = n.reduce((C, A) => {
      const D = Q(A, "extendMarkSchema", h);
      return {
        ...C,
        ...D ? D(d) : {}
      };
    }, {}), y = rm({
      ...g,
      inclusive: ye(Q(d, "inclusive", h)),
      excludes: ye(Q(d, "excludes", h)),
      group: ye(Q(d, "group", h)),
      spanning: ye(Q(d, "spanning", h)),
      code: ye(Q(d, "code", h)),
      attrs: Object.fromEntries(p.map((C) => {
        var A;
        return [C.name, { default: (A = C == null ? void 0 : C.attribute) === null || A === void 0 ? void 0 : A.default }];
      }))
    }), b = ye(Q(d, "parseHTML", h));
    b && (y.parseDOM = b.map((C) => nm(C, p)));
    const k = Q(d, "renderHTML", h);
    return k && (y.toDOM = (C) => k({
      mark: C,
      HTMLAttributes: Eu(C, p)
    })), [d.name, y];
  }));
  return new YC({
    topNode: a,
    nodes: c,
    marks: u
  });
}
function Gc(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function im(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const UT = (n, e = 500) => {
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
const jT = (n, e) => {
  if (Qu(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Xc(n) {
  var e;
  const { editor: t, from: r, to: i, text: o, rules: a, plugin: c } = n, { view: u } = t;
  if (u.composing)
    return !1;
  const d = u.state.doc.resolve(r);
  if (d.parent.type.spec.code || !!(!((e = d.nodeBefore || d.nodeAfter) === null || e === void 0) && e.marks.find((g) => g.type.spec.code)))
    return !1;
  let p = !1;
  const h = UT(d) + o;
  return a.forEach((g) => {
    if (p)
      return;
    const y = jT(h, g.find);
    if (!y)
      return;
    const b = u.state.tr, k = sl({
      state: u.state,
      transaction: b
    }), C = {
      from: r - (y[0].length - o.length),
      to: i
    }, { commands: A, chain: D, can: W } = new al({
      editor: t,
      state: k
    });
    g.handler({
      state: k,
      range: C,
      match: y,
      commands: A,
      chain: D,
      can: W
    }) === null || !b.steps.length || (b.setMeta(c, {
      transform: b,
      from: r,
      to: i,
      text: o
    }), u.dispatch(b), p = !0);
  }), p;
}
function KT(n) {
  const { editor: e, rules: t } = n, r = new cn({
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
        return Xc({
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
          o && Xc({
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
        return a ? Xc({
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
function qT(n) {
  return typeof n == "number";
}
class JT {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const GT = (n, e) => {
  if (Qu(e))
    return [...n.matchAll(e)];
  const t = e(n);
  return t ? t.map((r) => {
    const i = [r.text];
    return i.index = r.index, i.input = n, i.data = r.data, r.replaceWith && (r.text.includes(r.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(r.replaceWith)), i;
  }) : [];
};
function XT(n) {
  const { editor: e, state: t, from: r, to: i, rule: o, pasteEvent: a, dropEvent: c } = n, { commands: u, chain: d, can: p } = new al({
    editor: e,
    state: t
  }), h = [];
  return t.doc.nodesBetween(r, i, (y, b) => {
    if (!y.isTextblock || y.type.spec.code)
      return;
    const k = Math.max(r, b), C = Math.min(i, b + y.content.size), A = y.textBetween(k - b, C - b, void 0, "\uFFFC");
    GT(A, o.find).forEach((W) => {
      if (W.index === void 0)
        return;
      const E = k + W.index + 1, q = E + W[0].length, $ = {
        from: t.tr.mapping.map(E),
        to: t.tr.mapping.map(q)
      }, te = o.handler({
        state: t,
        range: $,
        match: W,
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
function YT(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, o = !1, a = new ClipboardEvent("paste"), c = new DragEvent("drop");
  return t.map((d) => new cn({
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
      const y = p[0], b = y.getMeta("uiEvent") === "paste" && !i, k = y.getMeta("uiEvent") === "drop" && !o;
      if (!b && !k)
        return;
      const C = h.doc.content.findDiffStart(g.doc.content), A = h.doc.content.findDiffEnd(g.doc.content);
      if (!qT(C) || !A || C === A.b)
        return;
      const D = g.tr, W = sl({
        state: g,
        transaction: D
      });
      if (!(!XT({
        editor: e,
        state: W,
        from: Math.max(C - 1, 0),
        to: A.b - 1,
        rule: d,
        pasteEvent: a,
        dropEvent: c
      }) || !D.steps.length))
        return c = new DragEvent("drop"), a = new ClipboardEvent("paste"), D;
    }
  }));
}
function ZT(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return [...new Set(e)];
}
class ro {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = ro.resolve(e), this.schema = WT(this.extensions, t), this.extensions.forEach((r) => {
      var i;
      this.editor.extensionStorage[r.name] = r.storage;
      const o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: this.editor,
        type: Gc(r.name, this.schema)
      };
      r.type === "mark" && ((i = ye(Q(r, "keepOnSplit", o))) !== null && i !== void 0 ? i : !0) && this.splittableMarks.push(r.name);
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
    const t = ro.sort(ro.flatten(e)), r = ZT(t.map((i) => i.name));
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
        type: Gc(t.name, this.schema)
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
        type: Gc(a.name, this.schema)
      }, u = [], d = Q(a, "addKeyboardShortcuts", c);
      let p = {};
      if (a.type === "mark" && a.config.exitable && (p.ArrowRight = () => sr.handleExit({ editor: e, mark: a })), d) {
        const k = Object.fromEntries(Object.entries(d()).map(([C, A]) => [C, () => A({ editor: e })]));
        p = { ...p, ...k };
      }
      const h = hT(p);
      u.push(h);
      const g = Q(a, "addInputRules", c);
      im(a, e.options.enableInputRules) && g && r.push(...g());
      const y = Q(a, "addPasteRules", c);
      im(a, e.options.enablePasteRules) && y && i.push(...y());
      const b = Q(a, "addProseMirrorPlugins", c);
      if (b) {
        const k = b();
        u.push(...k);
      }
      return u;
    }).flat();
    return [
      KT({
        editor: e,
        rules: r
      }),
      ...YT({
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
        type: Ct(r.name, this.schema)
      }, a = Q(r, "addNodeView", o);
      if (!a)
        return [];
      const c = (u, d, p, h) => {
        const g = Eu(u, i);
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
function QT(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Yc(n) {
  return QT(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function ul(n, e) {
  const t = { ...n };
  return Yc(n) && Yc(e) && Object.keys(e).forEach((r) => {
    Yc(e[r]) ? r in n ? t[r] = ul(n[r], e[r]) : Object.assign(t, { [r]: e[r] }) : Object.assign(t, { [r]: e[r] });
  }), t;
}
class Zt {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ye(Q(this, "addOptions", {
      name: this.name
    }))), this.storage = ye(Q(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Zt(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ul(this.options, e), t.storage = ye(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Zt(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ye(Q(t, "addOptions", {
      name: t.name
    })), t.storage = ye(Q(t, "addStorage", {
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
const eA = Zt.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new cn({
        key: new cr("clipboardTextSerializer"),
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
}), tA = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), nA = (n = !1) => ({ commands: e }) => e.setContent("", n), rA = () => ({ state: n, tr: e, dispatch: t }) => {
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
        const { defaultType: k } = h.parent.contentMatchAt(h.index());
        e.setNodeMarkup(y.start, k);
      }
      (b || b === 0) && e.lift(y, b);
    });
  }), !0;
}, iA = (n) => (e) => n(e), oA = () => ({ state: n, dispatch: e }) => OT(n, e), sA = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, o = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const a = r.mapping.map(e);
  return r.insert(a, o.content), r.setSelection(new he(r.doc.resolve(a - 1))), !0;
}, aA = () => ({ tr: n, dispatch: e }) => {
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
}, lA = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = Ct(n, t.schema), o = e.selection.$anchor;
  for (let a = o.depth; a > 0; a -= 1)
    if (o.node(a).type === i) {
      if (r) {
        const u = o.before(a), d = o.after(a);
        e.delete(u, d).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, cA = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, uA = () => ({ state: n, dispatch: e }) => mT(n, e), fA = () => ({ commands: n }) => n.keyboardShortcut("Enter"), dA = () => ({ state: n, dispatch: e }) => ET(n, e);
function Ua(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Qu(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Ou(n, e, t = {}) {
  return n.find((r) => r.type === e && Ua(r.attrs, t));
}
function pA(n, e, t = {}) {
  return !!Ou(n, e, t);
}
function ef(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = Ou([...r.node.marks], e, t);
  if (!i)
    return;
  let o = r.index, a = n.start() + r.offset, c = o + 1, u = a + r.node.nodeSize;
  for (Ou([...r.node.marks], e, t); o > 0 && i.isInSet(n.parent.child(o - 1).marks); )
    o -= 1, a -= n.parent.child(o).nodeSize;
  for (; c < n.parent.childCount && pA([...n.parent.child(c).marks], e, t); )
    u += n.parent.child(c).nodeSize, c += 1;
  return {
    from: a,
    to: u
  };
}
function ri(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const hA = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const o = ri(n, r.schema), { doc: a, selection: c } = t, { $from: u, from: d, to: p } = c;
  if (i) {
    const h = ef(u, o, e);
    if (h && h.from <= d && h.to >= p) {
      const g = he.create(a, h.from, h.to);
      t.setSelection(g);
    }
  }
  return !0;
}, mA = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function tf(n) {
  return n instanceof he;
}
function Er(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Sy(n, e = null) {
  if (!e)
    return null;
  const t = ve.atStart(n), r = ve.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, o = r.to;
  return e === "all" ? he.create(n, Er(0, i, o), Er(n.content.size, i, o)) : he.create(n, Er(e, i, o), Er(e, i, o));
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
const gA = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: o }) => {
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
}, yA = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), vA = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e);
function om(n) {
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
      return Array.isArray(n) && n.length > 0 ? H.fromArray(n.map((r) => e.nodeFromJSON(r))) : e.nodeFromJSON(n);
    } catch (r) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", r), ja("", e, t);
    }
  if (typeof n == "string") {
    const r = uo.fromSchema(e);
    return t.slice ? r.parseSlice(om(n), t.parseOptions).content : r.parse(om(n), t.parseOptions);
  }
  return ja("", e, t);
}
function bA(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof Nt || i instanceof _t))
    return;
  const o = n.mapping.maps[r];
  let a = 0;
  o.forEach((c, u, d, p) => {
    a === 0 && (a = p);
  }), n.setSelection(ve.near(n.doc.resolve(a), t));
}
const wA = (n) => n.toString().startsWith("<"), xA = (n, e, t) => ({ tr: r, dispatch: i, editor: o }) => {
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
    if ((wA(a) ? a : [a]).forEach((g) => {
      g.check(), d = d ? g.isText && g.marks.length === 0 : !1, p = p ? g.isBlock : !1;
    }), c === u && p) {
      const { parent: g } = r.doc.resolve(c);
      g.isTextblock && !g.type.spec.code && !g.childCount && (c -= 1, u += 1);
    }
    d ? Array.isArray(e) ? r.insertText(e.map((g) => g.text || "").join(""), c, u) : typeof e == "object" && !!e && !!e.text ? r.insertText(e.text, c, u) : r.insertText(e, c, u) : r.replaceWith(c, u, a), t.updateSelection && bA(r, r.steps.length - 1, -1);
  }
  return !0;
}, SA = () => ({ state: n, dispatch: e }) => ST(n, e), _A = () => ({ state: n, dispatch: e }) => _T(n, e), kA = () => ({ state: n, dispatch: e }) => yT(n, e), CA = () => ({ state: n, dispatch: e }) => wT(n, e), EA = () => ({ tr: n, state: e, dispatch: t }) => {
  try {
    const r = tl(e.doc, e.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
  } catch {
    return !1;
  }
}, OA = () => ({ state: n, dispatch: e, tr: t }) => {
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
function TA(n) {
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
const AA = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const o = TA(n).split(/-(?!$)/), a = o.find((d) => !["Alt", "Ctrl", "Meta", "Shift"].includes(d)), c = new KeyboardEvent("keydown", {
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
  const { from: r, to: i, empty: o } = n.selection, a = e ? Ct(e, n.schema) : null, c = [];
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
const MA = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Ct(n, t.schema);
  return bs(t, i, e) ? kT(t, r) : !1;
}, NA = () => ({ state: n, dispatch: e }) => TT(n, e), DA = (n) => ({ state: e, dispatch: t }) => {
  const r = Ct(n, e.schema);
  return LT(r)(e, t);
}, RA = () => ({ state: n, dispatch: e }) => CT(n, e);
function fl(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function sm(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const IA = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, a = null;
  const c = fl(typeof n == "string" ? n : n.name, r.schema);
  return c ? (c === "node" && (o = Ct(n, r.schema)), c === "mark" && (a = ri(n, r.schema)), i && t.selection.ranges.forEach((u) => {
    r.doc.nodesBetween(u.$from.pos, u.$to.pos, (d, p) => {
      o && o === d.type && t.setNodeMarkup(p, void 0, sm(d.attrs, e)), a && d.marks.length && d.marks.forEach((h) => {
        a === h.type && t.addMark(p, p + d.nodeSize, a.create(sm(h.attrs, e)));
      });
    });
  }), !0) : !1;
}, PA = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), LA = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), BA = () => ({ state: n, dispatch: e }) => vT(n, e), $A = () => ({ state: n, dispatch: e }) => xT(n, e), FA = () => ({ state: n, dispatch: e }) => AT(n, e), VA = () => ({ state: n, dispatch: e }) => DT(n, e), zA = () => ({ state: n, dispatch: e }) => NT(n, e);
function _y(n, e, t = {}) {
  return ja(n, e, { slice: !1, parseOptions: t });
}
const HA = (n, e = !1, t = {}) => ({ tr: r, editor: i, dispatch: o }) => {
  const { doc: a } = r, c = _y(n, i.schema, t);
  return o && r.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !e), !0;
};
function dl(n, e) {
  const t = ri(e, n.schema), { from: r, to: i, empty: o } = n.selection, a = [];
  o ? (n.storedMarks && a.push(...n.storedMarks), a.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (u) => {
    a.push(...u.marks);
  });
  const c = a.find((u) => u.type.name === t.name);
  return c ? { ...c.attrs } : {};
}
function WA(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function UA(n, e) {
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
  return (e) => UA(e.$from, n);
}
function jA(n, e) {
  const t = er.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function KA(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return wy(n, t, e);
}
function qA(n, e) {
  const t = Ct(e, n.schema), { from: r, to: i } = n.selection, o = [];
  n.doc.nodesBetween(r, i, (c) => {
    o.push(c);
  });
  const a = o.reverse().find((c) => c.type.name === t.name);
  return a ? { ...a.attrs } : {};
}
function JA(n, e) {
  const t = fl(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? qA(n, e) : t === "mark" ? dl(n, e) : {};
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
function Tu(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, o = e ? ri(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((h) => o ? o.name === h.type.name : !0).find((h) => Ua(h.attrs, t, { strict: !1 }));
  let a = 0;
  const c = [];
  if (i.forEach(({ $from: h, $to: g }) => {
    const y = h.pos, b = g.pos;
    n.doc.nodesBetween(y, b, (k, C) => {
      if (!k.isText && !k.marks.length)
        return;
      const A = Math.max(y, C), D = Math.min(b, C + k.nodeSize), W = D - A;
      a += W, c.push(...k.marks.map((E) => ({
        mark: E,
        from: A,
        to: D
      })));
    });
  }), a === 0)
    return !1;
  const u = c.filter((h) => o ? o.name === h.mark.type.name : !0).filter((h) => Ua(h.mark.attrs, t, { strict: !1 })).reduce((h, g) => h + g.to - g.from, 0), d = c.filter((h) => o ? h.mark.type !== o && h.mark.type.excludes(o) : !0).reduce((h, g) => h + g.to - g.from, 0);
  return (u > 0 ? u + d : u) >= a;
}
function GA(n, e, t = {}) {
  if (!e)
    return bs(n, null, t) || Tu(n, null, t);
  const r = fl(e, n.schema);
  return r === "node" ? bs(n, e, t) : r === "mark" ? Tu(n, e, t) : !1;
}
function am(n, e) {
  const { nodeExtensions: t } = ll(e), r = t.find((a) => a.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = ye(Q(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function XA(n) {
  var e;
  const t = (e = n.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = n.toJSON();
  return JSON.stringify(t) === JSON.stringify(r);
}
function YA(n) {
  return n instanceof oe;
}
function Cy(n, e, t) {
  const i = n.state.doc.content.size, o = Er(e, 0, i), a = Er(t, 0, i), c = n.coordsAtPos(o), u = n.coordsAtPos(a, -1), d = Math.min(c.top, u.top), p = Math.max(c.bottom, u.bottom), h = Math.min(c.left, u.left), g = Math.max(c.right, u.right), y = g - h, b = p - d, A = {
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
function ZA(n, e, t) {
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
        const y = !g || g.type.allowsMarkType(t), b = !!t.isInSet(p.marks) || !p.marks.some((k) => k.type.excludes(t));
        d = y && b;
      }
      return !d;
    }), d;
  });
}
const QA = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: o } = t, { empty: a, ranges: c } = o, u = ri(n, r.schema);
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
          const b = Math.max(y, p), k = Math.min(y + g.nodeSize, h);
          g.marks.find((A) => A.type === u) ? g.marks.forEach((A) => {
            u === A.type && t.addMark(b, k, u.create({
              ...A.attrs,
              ...e
            }));
          }) : t.addMark(b, k, u.create(e));
        });
      });
  return ZA(r, t, u);
}, eM = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), tM = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const o = Ct(n, t.schema);
  return o.isTextblock ? i().command(({ commands: a }) => tm(o, e)(t) ? !0 : a.clearNodes()).command(({ state: a }) => tm(o, e)(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, nM = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Er(n, 0, r.content.size), o = oe.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, rM = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: o } = typeof n == "number" ? { from: n, to: n } : n, a = he.atStart(r).from, c = he.atEnd(r).to, u = Er(i, a, c), d = Er(o, a, c), p = he.create(r, u, d);
    e.setSelection(p);
  }
  return !0;
}, iM = (n) => ({ state: e, dispatch: t }) => {
  const r = Ct(n, e.schema);
  return FT(r)(e, t);
};
function lm(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const oM = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: o, doc: a } = e, { $from: c, $to: u } = o, d = i.extensionManager.attributes, p = Oa(d, c.node().type.name, c.node().attrs);
  if (o instanceof oe && o.node.isBlock)
    return !c.parentOffset || !so(a, c.pos) ? !1 : (r && (n && lm(t, i.extensionManager.splittableMarks), e.split(c.pos).scrollIntoView()), !0);
  if (!c.parent.isBlock)
    return !1;
  if (r) {
    const h = u.parentOffset === u.parent.content.size;
    o instanceof he && e.deleteSelection();
    const g = c.depth === 0 ? void 0 : WA(c.node(-1).contentMatchAt(c.indexAfter(-1)));
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
      const k = e.mapping.map(c.before()), C = e.doc.resolve(k);
      c.node(-1).canReplaceWith(C.index(), C.index() + 1, g) && e.setNodeMarkup(e.mapping.map(c.before()), g);
    }
    n && lm(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, sM = (n) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  var o;
  const a = Ct(n, t.schema), { $from: c, $to: u } = t.selection, d = t.selection.node;
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
      let C = H.empty;
      const A = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
      for (let te = c.depth - A; te >= c.depth - 3; te -= 1)
        C = H.from(c.node(te).copy(C));
      const D = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3, W = Oa(h, c.node().type.name, c.node().attrs), E = ((o = a.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(W)) || void 0;
      C = C.append(H.from(a.createAndFill(null, E) || void 0));
      const q = c.before(c.depth - (A - 1));
      e.replace(q, c.after(-D), new J(C, 4 - A, 0));
      let $ = -1;
      e.doc.nodesBetween(q, e.doc.content.size, (te, _e) => {
        if ($ > -1)
          return !1;
        te.isTextblock && te.content.size === 0 && ($ = _e + 1);
      }), $ > -1 && e.setSelection(he.near(e.doc.resolve($))), e.scrollIntoView();
    }
    return !0;
  }
  const g = u.pos === c.end() ? p.contentMatchAt(0).defaultType : null, y = Oa(h, p.type.name, p.attrs), b = Oa(h, c.node().type.name, c.node().attrs);
  e.delete(c.pos, u.pos);
  const k = g ? [
    { type: a, attrs: y },
    { type: g, attrs: b }
  ] : [{ type: a, attrs: y }];
  if (!so(e.doc, c.pos, 2))
    return !1;
  if (r) {
    const { selection: C, storedMarks: A } = t, { splittableMarks: D } = i.extensionManager, W = A || C.$to.parentOffset && C.$from.marks();
    if (e.split(c.pos, 2, k).scrollIntoView(), !W || !r)
      return !0;
    const E = W.filter((q) => D.includes(q.type.name));
    e.ensureMarks(E);
  }
  return !0;
}, Zc = (n, e) => {
  const t = of((a) => a.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && ti(n.doc, t.pos) && n.join(t.pos), !0;
}, Qc = (n, e) => {
  const t = of((a) => a.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && ti(n.doc, r) && n.join(r), !0;
}, aM = (n, e, t, r = {}) => ({ editor: i, tr: o, state: a, dispatch: c, chain: u, commands: d, can: p }) => {
  const { extensions: h, splittableMarks: g } = i.extensionManager, y = Ct(n, a.schema), b = Ct(e, a.schema), { selection: k, storedMarks: C } = a, { $from: A, $to: D } = k, W = A.blockRange(D), E = C || k.$to.parentOffset && k.$from.marks();
  if (!W)
    return !1;
  const q = of(($) => am($.type.name, h))(k);
  if (W.depth >= 1 && q && W.depth - q.depth <= 1) {
    if (q.node.type === y)
      return d.liftListItem(b);
    if (am(q.node.type.name, h) && y.validContent(q.node.content) && c)
      return u().command(() => (o.setNodeMarkup(q.pos, y), !0)).command(() => Zc(o, y)).command(() => Qc(o, y)).run();
  }
  return !t || !E || !c ? u().command(() => p().wrapInList(y, r) ? !0 : d.clearNodes()).wrapInList(y, r).command(() => Zc(o, y)).command(() => Qc(o, y)).run() : u().command(() => {
    const $ = p().wrapInList(y, r), te = E.filter((_e) => g.includes(_e.type.name));
    return o.ensureMarks(te), $ ? !0 : d.clearNodes();
  }).wrapInList(y, r).command(() => Zc(o, y)).command(() => Qc(o, y)).run();
}, lM = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, a = ri(n, r.schema);
  return Tu(r, a, e) ? i.unsetMark(a, { extendEmptyMarkRange: o }) : i.setMark(a, e);
}, cM = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const o = Ct(n, r.schema), a = Ct(e, r.schema);
  return bs(r, o, t) ? i.setNode(a) : i.setNode(o, t);
}, uM = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = Ct(n, t.schema);
  return bs(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, fM = () => ({ state: n, dispatch: e }) => {
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
}, dM = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, pM = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: a = !1 } = e, { selection: c } = t, u = ri(n, r.schema), { $from: d, empty: p, ranges: h } = c;
  if (!i)
    return !0;
  if (p && a) {
    let { from: g, to: y } = c;
    const b = (o = d.marks().find((C) => C.type === u)) === null || o === void 0 ? void 0 : o.attrs, k = ef(d, u, b);
    k && (g = k.from, y = k.to), t.removeMark(g, y, u);
  } else
    h.forEach((g) => {
      t.removeMark(g.$from.pos, g.$to.pos, u);
    });
  return t.removeStoredMark(u), !0;
}, hM = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, a = null;
  const c = fl(typeof n == "string" ? n : n.name, r.schema);
  return c ? (c === "node" && (o = Ct(n, r.schema)), c === "mark" && (a = ri(n, r.schema)), i && t.selection.ranges.forEach((u) => {
    const d = u.$from.pos, p = u.$to.pos;
    r.doc.nodesBetween(d, p, (h, g) => {
      o && o === h.type && t.setNodeMarkup(g, void 0, {
        ...h.attrs,
        ...e
      }), a && h.marks.length && h.marks.forEach((y) => {
        if (a === y.type) {
          const b = Math.max(g, d), k = Math.min(g + h.nodeSize, p);
          t.addMark(b, k, a.create({
            ...y.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, mM = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Ct(n, t.schema);
  return RT(i, e)(t, r);
}, gM = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Ct(n, t.schema);
  return IT(i, e)(t, r);
};
var yM = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: tA,
  clearContent: nA,
  clearNodes: rA,
  command: iA,
  createParagraphNear: oA,
  cut: sA,
  deleteCurrentNode: aA,
  deleteNode: lA,
  deleteRange: cA,
  deleteSelection: uA,
  enter: fA,
  exitCode: dA,
  extendMarkRange: hA,
  first: mA,
  focus: gA,
  forEach: yA,
  insertContent: vA,
  insertContentAt: xA,
  joinUp: SA,
  joinDown: _A,
  joinBackward: kA,
  joinForward: CA,
  joinItemBackward: EA,
  joinItemForward: OA,
  keyboardShortcut: AA,
  lift: MA,
  liftEmptyBlock: NA,
  liftListItem: DA,
  newlineInCode: RA,
  resetAttributes: IA,
  scrollIntoView: PA,
  selectAll: LA,
  selectNodeBackward: BA,
  selectNodeForward: $A,
  selectParentNode: FA,
  selectTextblockEnd: VA,
  selectTextblockStart: zA,
  setContent: HA,
  setMark: QA,
  setMeta: eM,
  setNode: tM,
  setNodeSelection: nM,
  setTextSelection: rM,
  sinkListItem: iM,
  splitBlock: oM,
  splitListItem: sM,
  toggleList: aM,
  toggleMark: lM,
  toggleNode: cM,
  toggleWrap: uM,
  undoInputRule: fM,
  unsetAllMarks: dM,
  unsetMark: pM,
  updateAttributes: hM,
  wrapIn: mM,
  wrapInList: gM
});
const vM = Zt.create({
  name: "commands",
  addCommands() {
    return {
      ...yM
    };
  }
}), bM = Zt.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new cn({
        key: new cr("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), wM = Zt.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new cn({
        key: new cr("focusEvents"),
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
}), xM = Zt.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: a }) => [
      () => a.undoInputRule(),
      () => a.command(({ tr: c }) => {
        const { selection: u, doc: d } = c, { empty: p, $anchor: h } = u, { pos: g, parent: y } = h, b = h.parent.isTextblock ? c.doc.resolve(g - 1) : h, k = b.parent.type.spec.isolating, C = h.pos - h.parentOffset, A = k && b.parent.childCount === 1 ? C === h.pos : ve.atStart(d).from === g;
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
      new cn({
        key: new cr("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((b) => b.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: o, to: a } = e.selection, c = ve.atStart(e.doc).from, u = ve.atEnd(e.doc).to;
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
}), SM = Zt.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new cn({
        key: new cr("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var _M = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: eA,
  Commands: vM,
  Editable: bM,
  FocusEvents: wM,
  Keymap: xM,
  Tabindex: SM
});
const kM = `.ProseMirror {
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
function CM(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
class EM extends VT {
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
    this.options.injectCSS && document && (this.css = CM(kM, this.options.injectNonce));
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
    const t = [...this.options.enableCoreExtensions ? Object.values(_M) : [], ...this.options.extensions].filter((r) => ["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
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
    this.view = new oT(this.options.element, {
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
    return JA(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return GA(this.state, r, i);
  }
  getJSON() {
    return this.state.doc.toJSON();
  }
  getHTML() {
    return jA(this.state.doc.content, this.schema);
  }
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return KA(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...xy(this.schema),
        ...r
      }
    });
  }
  get isEmpty() {
    return XA(this.state.doc);
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
      const i = ye(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, a = r[r.length - 1], c = r[0];
      if (a) {
        const u = c.search(/\S/), d = t.from + c.indexOf(a), p = d + a.length;
        if (ky(t.from, t.to, e.doc).filter((y) => y.mark.type.excluded.find((k) => k === n.type && k !== y.mark.type)).filter((y) => y.to > d).length)
          return null;
        p < t.to && o.delete(p, t.to), d > t.from && o.delete(t.from + u, d);
        const g = t.from + u + a.length;
        o.addMark(t.from + u, g, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function OM(n) {
  return new cl({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = ye(n.getAttributes, void 0, r) || {}, { tr: o } = e, a = t.from;
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
function Au(n) {
  return new cl({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), o = ye(n.getAttributes, void 0, r) || {};
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
      const o = ye(n.getAttributes, void 0, r) || {}, a = e.tr.delete(t.from, t.to), u = a.doc.resolve(t.from).blockRange(), d = u && zu(u, n.type, o);
      if (!d)
        return null;
      if (a.wrap(u, d), n.keepMarks && n.editor) {
        const { selection: h, storedMarks: g } = e, { splittableMarks: y } = n.editor.extensionManager, b = g || h.$to.parentOffset && h.$from.marks();
        if (b) {
          const k = b.filter((C) => y.includes(C.type.name));
          a.ensureMarks(k);
        }
      }
      if (n.keepAttributes) {
        const h = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(h, o).run();
      }
      const p = a.doc.resolve(t.from - 1).nodeBefore;
      p && p.type === n.type && ti(a.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, p)) && a.join(t.from - 1);
    }
  });
}
class sr {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ye(Q(this, "addOptions", {
      name: this.name
    }))), this.storage = ye(Q(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new sr(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ul(this.options, e), t.storage = ye(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new sr(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ye(Q(t, "addOptions", {
      name: t.name
    })), t.storage = ye(Q(t, "addStorage", {
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
class Vt {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ye(Q(this, "addOptions", {
      name: this.name
    }))), this.storage = ye(Q(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Vt(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ul(this.options, e), t.storage = ye(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Vt(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ye(Q(t, "addOptions", {
      name: t.name
    })), t.storage = ye(Q(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function vo(n) {
  return new JT({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const o = ye(n.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: a } = e, c = r[r.length - 1], u = r[0];
      let d = t.to;
      if (c) {
        const p = u.search(/\S/), h = t.from + u.indexOf(c), g = h + c.length;
        if (ky(t.from, t.to, e.doc).filter((b) => b.mark.type.excluded.find((C) => C === n.type && C !== b.mark.type)).filter((b) => b.to > h).length)
          return null;
        g < t.to && a.delete(g, t.to), h > t.from && a.delete(t.from + p, h), d = t.from + p + c.length, a.addMark(t.from + p, d, n.type.create(o || {})), a.removeStoredMark(n.type);
      }
    }
  });
}
const TM = /^\s*>\s$/, AM = Vt.create({
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
    return ["blockquote", vt(this.options.HTMLAttributes, n), 0];
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
        find: TM,
        type: this.type
      })
    ];
  }
}), MM = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/, NM = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g, DM = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/, RM = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g, IM = sr.create({
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
    return ["strong", vt(this.options.HTMLAttributes, n), 0];
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
        find: MM,
        type: this.type
      }),
      yo({
        find: DM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vo({
        find: NM,
        type: this.type
      }),
      vo({
        find: RM,
        type: this.type
      })
    ];
  }
}), PM = Vt.create({
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
    return ["li", vt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), cm = sr.create({
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
    return ["span", vt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = dl(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), um = /^\s*([-+*])\s$/, LM = Vt.create({
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
    return ["ul", vt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(PM.name, this.editor.getAttributes(cm.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = ws({
      find: um,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = ws({
      find: um,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(cm.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), BM = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/, $M = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g, FM = sr.create({
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
    return ["code", vt(this.options.HTMLAttributes, n), 0];
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
        find: BM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vo({
        find: $M,
        type: this.type
      })
    ];
  }
}), VM = /^```([a-z]+)?[\s\n]$/, zM = /^~~~([a-z]+)?[\s\n]$/, HM = Vt.create({
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
      vt(this.options.HTMLAttributes, e),
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
      Au({
        find: VM,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Au({
        find: zM,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      new cn({
        key: new cr("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i == null ? void 0 : i.mode;
            if (!t || !o)
              return !1;
            const { tr: a } = n.state;
            return a.replaceSelectionWith(this.type.create({ language: o })), a.setSelection(he.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))), a.insertText(t.replace(/\r\n?/g, `
`)), a.setMeta("paste", !0), n.dispatch(a), !0;
          }
        }
      })
    ];
  }
}), WM = Vt.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function UM(n = {}) {
  return new cn({
    view(e) {
      return new jM(e, n);
    }
  });
}
class jM {
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
const KM = Zt.create({
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
      UM(this.options)
    ];
  }
});
class nt extends ve {
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return nt.valid(r) ? new nt(r) : ve.near(r);
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
    return new sf(this.anchor);
  }
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !qM(e) || !JM(e))
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
ve.jsonID("gapcursor", nt);
class sf {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new sf(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return nt.valid(t) ? new nt(t) : ve.near(t);
  }
}
function qM(n) {
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
function JM(n) {
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
function GM() {
  return new cn({
    props: {
      decorations: QM,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && nt.valid(t) ? new nt(t) : null;
      },
      handleClick: YM,
      handleKeyDown: XM,
      handleDOMEvents: { beforeinput: ZM }
    }
  });
}
const XM = dy({
  ArrowLeft: _a("horiz", -1),
  ArrowRight: _a("horiz", 1),
  ArrowUp: _a("vert", -1),
  ArrowDown: _a("vert", 1)
});
function _a(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let a = r.selection, c = e > 0 ? a.$to : a.$from, u = a.empty;
    if (a instanceof he) {
      if (!o.endOfTextblock(t) || c.depth == 0)
        return !1;
      u = !1, c = r.doc.resolve(e > 0 ? c.after() : c.before());
    }
    let d = nt.findGapCursorFrom(c, e, u);
    return d ? (i && i(r.tr.setSelection(new nt(d))), !0) : !1;
  };
}
function YM(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!nt.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && oe.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new nt(r))), !0);
}
function ZM(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof nt))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = H.empty;
  for (let a = r.length - 1; a >= 0; a--)
    i = H.from(r[a].createAndFill(null, i));
  let o = n.state.tr.replace(t.pos, t.pos, new J(i, 0, 0));
  return o.setSelection(he.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function QM(n) {
  if (!(n.selection instanceof nt))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", yt.create(n.doc, [Nn.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const eN = Zt.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      GM()
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
      allowGapCursor: (e = ye(Q(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), tN = Vt.create({
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
    return ["br", vt(this.options.HTMLAttributes, n)];
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
}), nN = Vt.create({
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
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, vt(this.options.HTMLAttributes, e), 0];
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
    return this.options.levels.map((n) => Au({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var Ka = 200, kt = function() {
};
kt.prototype.append = function(e) {
  return e.length ? (e = kt.from(e), !this.length && e || e.length < Ka && this.leafAppend(e) || this.length < Ka && e.leafPrepend(this) || this.appendInner(e)) : this;
};
kt.prototype.prepend = function(e) {
  return e.length ? kt.from(e).append(this) : this;
};
kt.prototype.appendInner = function(e) {
  return new rN(this, e);
};
kt.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? kt.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
kt.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
kt.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
kt.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, a) {
    return i.push(e(o, a));
  }, t, r), i;
};
kt.from = function(e) {
  return e instanceof kt ? e : e && e.length ? new Ey(e) : kt.empty;
};
var Ey = /* @__PURE__ */ function(n) {
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
    if (this.length + i.length <= Ka)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Ka)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(kt);
kt.empty = new Ey([]);
var rN = /* @__PURE__ */ function(n) {
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
}(kt);
const iN = 500;
class Wn {
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
        p.push(new Yn(h.map));
        let y = h.step.map(i.slice(o)), b;
        y && a.maybeStep(y).doc && (b = a.mapping.maps[a.mapping.maps.length - 1], d.push(new Yn(b, void 0, void 0, d.length + p.length))), o--, b && i.appendMap(b, o);
      } else
        a.maybeStep(h.step);
      if (h.selection)
        return c = i ? h.selection.map(i.slice(o)) : h.selection, u = new Wn(this.items.slice(0, r).append(p.reverse().concat(d)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: u, transform: a, selection: c };
  }
  addTransform(e, t, r, i) {
    let o = [], a = this.eventCount, c = this.items, u = !i && c.length ? c.get(c.length - 1) : null;
    for (let p = 0; p < e.steps.length; p++) {
      let h = e.steps[p].invert(e.docs[p]), g = new Yn(e.mapping.maps[p], h, t), y;
      (y = u && u.merge(g)) && (g = y, p ? o.pop() : c = c.slice(0, c.length - 1)), o.push(g), t && (a++, t = void 0), i || (u = g);
    }
    let d = a - r.depth;
    return d > sN && (c = oN(c, d), a -= d), new Wn(c.append(o), a);
  }
  remapping(e, t) {
    let r = new oo();
    return this.items.forEach((i, o) => {
      let a = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, a);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Wn(this.items.append(e.map((t) => new Yn(t))), this.eventCount);
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
        let k = e.steps[y].invert(e.docs[y]), C = g.selection && g.selection.map(o.slice(u + 1, y));
        C && c++, r.push(new Yn(b, k, C));
      } else
        r.push(new Yn(b));
    }, i);
    let d = [];
    for (let g = t; g < a; g++)
      d.push(new Yn(o.maps[g]));
    let p = this.items.slice(0, i).append(d).append(r), h = new Wn(p, c);
    return h.emptyItemCount() > iN && (h = h.compress(this.items.length - r.length)), h;
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
          let h = new Yn(d.invert(), u, p), g, y = i.length - 1;
          (g = i.length && i[y].merge(h)) ? i[y] = g : i.push(h);
        }
      } else
        a.map && r--;
    }, this.items.length, 0), new Wn(kt.from(i.reverse()), o);
  }
}
Wn.empty = new Wn(kt.empty, 0);
function oN(n, e) {
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
class Ur {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const sN = 20;
function aN(n, e, t, r) {
  let i = t.getMeta(Zr), o;
  if (i)
    return i.historyState;
  t.getMeta(cN) && (n = new Ur(n.done, n.undone, null, 0, -1));
  let a = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (a && a.getMeta(Zr))
    return a.getMeta(Zr).redo ? new Ur(n.done.addTransform(t, void 0, r, Ta(e)), n.undone, fm(t.mapping.maps[t.steps.length - 1]), n.prevTime, n.prevComposition) : new Ur(n.done, n.undone.addTransform(t, void 0, r, Ta(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(a && a.getMeta("addToHistory") === !1)) {
    let c = t.getMeta("composition"), u = n.prevTime == 0 || !a && n.prevComposition != c && (n.prevTime < (t.time || 0) - r.newGroupDelay || !lN(t, n.prevRanges)), d = a ? eu(n.prevRanges, t.mapping) : fm(t.mapping.maps[t.steps.length - 1]);
    return new Ur(n.done.addTransform(t, u ? e.selection.getBookmark() : void 0, r, Ta(e)), Wn.empty, d, t.time, c == null ? n.prevComposition : c);
  } else
    return (o = t.getMeta("rebased")) ? new Ur(n.done.rebased(t, o), n.undone.rebased(t, o), eu(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Ur(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), eu(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function lN(n, e) {
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
function fm(n) {
  let e = [];
  return n.forEach((t, r, i, o) => e.push(i, o)), e;
}
function eu(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function Oy(n, e, t, r) {
  let i = Ta(e), o = Zr.get(e).spec.config, a = (r ? n.undone : n.done).popEvent(e, i);
  if (!a)
    return;
  let c = a.selection.resolve(a.transform.doc), u = (r ? n.done : n.undone).addTransform(a.transform, e.selection.getBookmark(), o, i), d = new Ur(r ? u : a.remaining, r ? a.remaining : u, null, 0, -1);
  t(a.transform.setSelection(c).setMeta(Zr, { redo: r, historyState: d }).scrollIntoView());
}
let tu = !1, dm = null;
function Ta(n) {
  let e = n.plugins;
  if (dm != e) {
    tu = !1, dm = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        tu = !0;
        break;
      }
  }
  return tu;
}
const Zr = new cr("history"), cN = new cr("closeHistory");
function uN(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new cn({
    key: Zr,
    state: {
      init() {
        return new Ur(Wn.empty, Wn.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return aN(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? Ty : r == "historyRedo" ? Ay : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
const Ty = (n, e) => {
  let t = Zr.getState(n);
  return !t || t.done.eventCount == 0 ? !1 : (e && Oy(t, n, e, !1), !0);
}, Ay = (n, e) => {
  let t = Zr.getState(n);
  return !t || t.undone.eventCount == 0 ? !1 : (e && Oy(t, n, e, !0), !0);
}, fN = Zt.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Ty(n, e),
      redo: () => ({ state: n, dispatch: e }) => Ay(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      uN(this.options)
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
}), dN = Vt.create({
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
    return ["hr", vt(this.options.HTMLAttributes, n)];
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
              c.nodeAfter.isTextblock ? i.setSelection(he.create(i.doc, c.pos + 1)) : c.nodeAfter.isBlock ? i.setSelection(oe.create(i.doc, c.pos)) : i.setSelection(he.create(i.doc, c.pos));
            else {
              const d = (a = c.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create();
              d && (i.insert(u, d), i.setSelection(he.create(i.doc, u + 1)));
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
      OM({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), pN = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/, hN = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g, mN = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/, gN = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g, yN = sr.create({
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
    return ["em", vt(this.options.HTMLAttributes, n), 0];
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
        find: pN,
        type: this.type
      }),
      yo({
        find: mN,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vo({
        find: hN,
        type: this.type
      }),
      vo({
        find: gN,
        type: this.type
      })
    ];
  }
}), vN = Vt.create({
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
    return ["li", vt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), bN = Vt.create({
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
    return ["li", vt(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), pm = sr.create({
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
    return ["span", vt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = dl(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), hm = /^(\d+)\.\s$/, wN = Vt.create({
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
    return e === 1 ? ["ol", vt(this.options.HTMLAttributes, t), 0] : ["ol", vt(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(bN.name, this.editor.getAttributes(pm.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = ws({
      find: hm,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = ws({
      find: hm,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(pm.name) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), xN = Vt.create({
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
    return ["p", vt(this.options.HTMLAttributes, n), 0];
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
}), SN = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/, _N = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g, kN = sr.create({
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
    return ["s", vt(this.options.HTMLAttributes, n), 0];
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
        find: SN,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      vo({
        find: _N,
        type: this.type
      })
    ];
  }
}), CN = Vt.create({
  name: "text",
  group: "inline"
}), mm = Zt.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, o, a, c, u, d, p, h, g, y, b, k, C, A;
    const D = [];
    return this.options.blockquote !== !1 && D.push(AM.configure((n = this.options) === null || n === void 0 ? void 0 : n.blockquote)), this.options.bold !== !1 && D.push(IM.configure((e = this.options) === null || e === void 0 ? void 0 : e.bold)), this.options.bulletList !== !1 && D.push(LM.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && D.push(FM.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && D.push(HM.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && D.push(WM.configure((o = this.options) === null || o === void 0 ? void 0 : o.document)), this.options.dropcursor !== !1 && D.push(KM.configure((a = this.options) === null || a === void 0 ? void 0 : a.dropcursor)), this.options.gapcursor !== !1 && D.push(eN.configure((c = this.options) === null || c === void 0 ? void 0 : c.gapcursor)), this.options.hardBreak !== !1 && D.push(tN.configure((u = this.options) === null || u === void 0 ? void 0 : u.hardBreak)), this.options.heading !== !1 && D.push(nN.configure((d = this.options) === null || d === void 0 ? void 0 : d.heading)), this.options.history !== !1 && D.push(fN.configure((p = this.options) === null || p === void 0 ? void 0 : p.history)), this.options.horizontalRule !== !1 && D.push(dN.configure((h = this.options) === null || h === void 0 ? void 0 : h.horizontalRule)), this.options.italic !== !1 && D.push(yN.configure((g = this.options) === null || g === void 0 ? void 0 : g.italic)), this.options.listItem !== !1 && D.push(vN.configure((y = this.options) === null || y === void 0 ? void 0 : y.listItem)), this.options.orderedList !== !1 && D.push(wN.configure((b = this.options) === null || b === void 0 ? void 0 : b.orderedList)), this.options.paragraph !== !1 && D.push(xN.configure((k = this.options) === null || k === void 0 ? void 0 : k.paragraph)), this.options.strike !== !1 && D.push(kN.configure((C = this.options) === null || C === void 0 ? void 0 : C.strike)), this.options.text !== !1 && D.push(CN.configure((A = this.options) === null || A === void 0 ? void 0 : A.text)), D;
  }
}), EN = {
  name: "LaravelCmsAdminEditorHtml",
  emits: ["submit", "update:visible", "update"],
  components: {},
  props: {
    html: String,
    visible: Boolean
  },
  setup(n, { emit: e }) {
    const t = Ee({
      get() {
        return n.visible;
      },
      set(i) {
        e("update:visible", i);
      }
    }), r = Ee({
      get() {
        return n.html;
      },
      set(i) {
        e("update", i);
      }
    });
    return { localVisible: t, localHtml: r };
  }
}, ON = { class: "modal-container" }, TN = { class: "modal-header" }, AN = /* @__PURE__ */ S("div", { class: "modal-title" }, "Edit HTML", -1), MN = { class: "modal-body" };
function NN(n, e, t, r, i, o) {
  return L(), z("span", null, [
    S("div", {
      class: Mt(["modal", { active: r.localVisible }])
    }, [
      S("a", {
        href: "#close",
        class: "modal-overlay",
        "aria-label": "Close",
        onClick: e[0] || (e[0] = Je((a) => r.localVisible = !1, ["prevent"]))
      }),
      S("div", ON, [
        S("div", TN, [
          S("a", {
            href: "#close",
            class: "btn btn-clear float-right",
            "aria-label": "Close",
            onClick: e[1] || (e[1] = Je((a) => r.localVisible = !1, ["prevent"]))
          }),
          AN
        ]),
        S("div", MN, [
          S("div", null, [
            Ne(S("textarea", {
              "onUpdate:modelValue": e[2] || (e[2] = (a) => r.localHtml = a),
              style: { width: "100%", height: "10rem" }
            }, null, 512), [
              [Ze, r.localHtml]
            ])
          ])
        ])
      ])
    ], 2),
    Xa(n.$slots, "default")
  ]);
}
const DN = /* @__PURE__ */ xe(EN, [["render", NN]]);
var an = "top", In = "bottom", Pn = "right", ln = "left", af = "auto", Os = [an, In, Pn, ln], bo = "start", xs = "end", RN = "clippingParents", My = "viewport", Zo = "popper", IN = "reference", gm = /* @__PURE__ */ Os.reduce(function(n, e) {
  return n.concat([e + "-" + bo, e + "-" + xs]);
}, []), Ny = /* @__PURE__ */ [].concat(Os, [af]).reduce(function(n, e) {
  return n.concat([e, e + "-" + bo, e + "-" + xs]);
}, []), PN = "beforeRead", LN = "read", BN = "afterRead", $N = "beforeMain", FN = "main", VN = "afterMain", zN = "beforeWrite", HN = "write", WN = "afterWrite", UN = [PN, LN, BN, $N, FN, VN, zN, HN, WN];
function ar(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function wn(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Mi(n) {
  var e = wn(n).Element;
  return n instanceof e || n instanceof Element;
}
function Rn(n) {
  var e = wn(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function lf(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = wn(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function jN(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
    !Rn(o) || !ar(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function KN(n) {
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
      !Rn(i) || !ar(i) || (Object.assign(i.style, c), Object.keys(o).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const Dy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: jN,
  effect: KN,
  requires: ["computeStyles"]
};
function rr(n) {
  return n.split("-")[0];
}
var Ci = Math.max, qa = Math.min, wo = Math.round;
function Mu() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Ry() {
  return !/^((?!chrome|android).)*safari/i.test(Mu());
}
function xo(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, o = 1;
  e && Rn(n) && (i = n.offsetWidth > 0 && wo(r.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && wo(r.height) / n.offsetHeight || 1);
  var a = Mi(n) ? wn(n) : window, c = a.visualViewport, u = !Ry() && t, d = (r.left + (u && c ? c.offsetLeft : 0)) / i, p = (r.top + (u && c ? c.offsetTop : 0)) / o, h = r.width / i, g = r.height / o;
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
function cf(n) {
  var e = xo(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function Iy(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && lf(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ar(n) {
  return wn(n).getComputedStyle(n);
}
function qN(n) {
  return ["table", "td", "th"].indexOf(ar(n)) >= 0;
}
function ii(n) {
  return ((Mi(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function pl(n) {
  return ar(n) === "html" ? n : n.assignedSlot || n.parentNode || (lf(n) ? n.host : null) || ii(n);
}
function ym(n) {
  return !Rn(n) || Ar(n).position === "fixed" ? null : n.offsetParent;
}
function JN(n) {
  var e = /firefox/i.test(Mu()), t = /Trident/i.test(Mu());
  if (t && Rn(n)) {
    var r = Ar(n);
    if (r.position === "fixed")
      return null;
  }
  var i = pl(n);
  for (lf(i) && (i = i.host); Rn(i) && ["html", "body"].indexOf(ar(i)) < 0; ) {
    var o = Ar(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ts(n) {
  for (var e = wn(n), t = ym(n); t && qN(t) && Ar(t).position === "static"; )
    t = ym(t);
  return t && (ar(t) === "html" || ar(t) === "body" && Ar(t).position === "static") ? e : t || JN(n) || e;
}
function uf(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function cs(n, e, t) {
  return Ci(n, qa(e, t));
}
function GN(n, e, t) {
  var r = cs(n, e, t);
  return r > t ? t : r;
}
function Py() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ly(n) {
  return Object.assign({}, Py(), n);
}
function By(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var XN = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, Ly(typeof e != "number" ? e : By(e, Os));
};
function YN(n) {
  var e, t = n.state, r = n.name, i = n.options, o = t.elements.arrow, a = t.modifiersData.popperOffsets, c = rr(t.placement), u = uf(c), d = [ln, Pn].indexOf(c) >= 0, p = d ? "height" : "width";
  if (!(!o || !a)) {
    var h = XN(i.padding, t), g = cf(o), y = u === "y" ? an : ln, b = u === "y" ? In : Pn, k = t.rects.reference[p] + t.rects.reference[u] - a[u] - t.rects.popper[p], C = a[u] - t.rects.reference[u], A = Ts(o), D = A ? u === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, W = k / 2 - C / 2, E = h[y], q = D - g[p] - h[b], $ = D / 2 - g[p] / 2 + W, te = cs(E, $, q), _e = u;
    t.modifiersData[r] = (e = {}, e[_e] = te, e.centerOffset = te - $, e);
  }
}
function ZN(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || !Iy(e.elements.popper, i) || (e.elements.arrow = i));
}
const QN = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: YN,
  effect: ZN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function So(n) {
  return n.split("-")[1];
}
var eD = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function tD(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: wo(t * i) / i || 0,
    y: wo(r * i) / i || 0
  };
}
function vm(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, o = n.variation, a = n.offsets, c = n.position, u = n.gpuAcceleration, d = n.adaptive, p = n.roundOffsets, h = n.isFixed, g = a.x, y = g === void 0 ? 0 : g, b = a.y, k = b === void 0 ? 0 : b, C = typeof p == "function" ? p({
    x: y,
    y: k
  }) : {
    x: y,
    y: k
  };
  y = C.x, k = C.y;
  var A = a.hasOwnProperty("x"), D = a.hasOwnProperty("y"), W = ln, E = an, q = window;
  if (d) {
    var $ = Ts(t), te = "clientHeight", _e = "clientWidth";
    if ($ === wn(t) && ($ = ii(t), Ar($).position !== "static" && c === "absolute" && (te = "scrollHeight", _e = "scrollWidth")), $ = $, i === an || (i === ln || i === Pn) && o === xs) {
      E = In;
      var Z = h && $ === q && q.visualViewport ? q.visualViewport.height : $[te];
      k -= Z - r.height, k *= u ? 1 : -1;
    }
    if (i === ln || (i === an || i === In) && o === xs) {
      W = Pn;
      var ke = h && $ === q && q.visualViewport ? q.visualViewport.width : $[_e];
      y -= ke - r.width, y *= u ? 1 : -1;
    }
  }
  var Ue = Object.assign({
    position: c
  }, d && eD), je = p === !0 ? tD({
    x: y,
    y: k
  }, wn(t)) : {
    x: y,
    y: k
  };
  if (y = je.x, k = je.y, u) {
    var Pe;
    return Object.assign({}, Ue, (Pe = {}, Pe[E] = D ? "0" : "", Pe[W] = A ? "0" : "", Pe.transform = (q.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + k + "px)" : "translate3d(" + y + "px, " + k + "px, 0)", Pe));
  }
  return Object.assign({}, Ue, (e = {}, e[E] = D ? k + "px" : "", e[W] = A ? y + "px" : "", e.transform = "", e));
}
function nD(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, o = t.adaptive, a = o === void 0 ? !0 : o, c = t.roundOffsets, u = c === void 0 ? !0 : c, d = {
    placement: rr(e.placement),
    variation: So(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, vm(Object.assign({}, d, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: u
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, vm(Object.assign({}, d, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const rD = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nD,
  data: {}
};
var ka = {
  passive: !0
};
function iD(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, o = i === void 0 ? !0 : i, a = r.resize, c = a === void 0 ? !0 : a, u = wn(e.elements.popper), d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && d.forEach(function(p) {
    p.addEventListener("scroll", t.update, ka);
  }), c && u.addEventListener("resize", t.update, ka), function() {
    o && d.forEach(function(p) {
      p.removeEventListener("scroll", t.update, ka);
    }), c && u.removeEventListener("resize", t.update, ka);
  };
}
const oD = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: iD,
  data: {}
};
var sD = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Aa(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return sD[e];
  });
}
var aD = {
  start: "end",
  end: "start"
};
function bm(n) {
  return n.replace(/start|end/g, function(e) {
    return aD[e];
  });
}
function ff(n) {
  var e = wn(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function df(n) {
  return xo(ii(n)).left + ff(n).scrollLeft;
}
function lD(n, e) {
  var t = wn(n), r = ii(n), i = t.visualViewport, o = r.clientWidth, a = r.clientHeight, c = 0, u = 0;
  if (i) {
    o = i.width, a = i.height;
    var d = Ry();
    (d || !d && e === "fixed") && (c = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: c + df(n),
    y: u
  };
}
function cD(n) {
  var e, t = ii(n), r = ff(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, o = Ci(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ci(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + df(n), u = -r.scrollTop;
  return Ar(i || t).direction === "rtl" && (c += Ci(t.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: c,
    y: u
  };
}
function pf(n) {
  var e = Ar(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function $y(n) {
  return ["html", "body", "#document"].indexOf(ar(n)) >= 0 ? n.ownerDocument.body : Rn(n) && pf(n) ? n : $y(pl(n));
}
function us(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = $y(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), o = wn(r), a = i ? [o].concat(o.visualViewport || [], pf(r) ? r : []) : r, c = e.concat(a);
  return i ? c : c.concat(us(pl(a)));
}
function Nu(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function uD(n, e) {
  var t = xo(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function wm(n, e, t) {
  return e === My ? Nu(lD(n, t)) : Mi(e) ? uD(e, t) : Nu(cD(ii(n)));
}
function fD(n) {
  var e = us(pl(n)), t = ["absolute", "fixed"].indexOf(Ar(n).position) >= 0, r = t && Rn(n) ? Ts(n) : n;
  return Mi(r) ? e.filter(function(i) {
    return Mi(i) && Iy(i, r) && ar(i) !== "body";
  }) : [];
}
function dD(n, e, t, r) {
  var i = e === "clippingParents" ? fD(n) : [].concat(e), o = [].concat(i, [t]), a = o[0], c = o.reduce(function(u, d) {
    var p = wm(n, d, r);
    return u.top = Ci(p.top, u.top), u.right = qa(p.right, u.right), u.bottom = qa(p.bottom, u.bottom), u.left = Ci(p.left, u.left), u;
  }, wm(n, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Fy(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? rr(r) : null, o = r ? So(r) : null, a = e.x + e.width / 2 - t.width / 2, c = e.y + e.height / 2 - t.height / 2, u;
  switch (i) {
    case an:
      u = {
        x: a,
        y: e.y - t.height
      };
      break;
    case In:
      u = {
        x: a,
        y: e.y + e.height
      };
      break;
    case Pn:
      u = {
        x: e.x + e.width,
        y: c
      };
      break;
    case ln:
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
  var d = i ? uf(i) : null;
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
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, o = t.strategy, a = o === void 0 ? n.strategy : o, c = t.boundary, u = c === void 0 ? RN : c, d = t.rootBoundary, p = d === void 0 ? My : d, h = t.elementContext, g = h === void 0 ? Zo : h, y = t.altBoundary, b = y === void 0 ? !1 : y, k = t.padding, C = k === void 0 ? 0 : k, A = Ly(typeof C != "number" ? C : By(C, Os)), D = g === Zo ? IN : Zo, W = n.rects.popper, E = n.elements[b ? D : g], q = dD(Mi(E) ? E : E.contextElement || ii(n.elements.popper), u, p, a), $ = xo(n.elements.reference), te = Fy({
    reference: $,
    element: W,
    strategy: "absolute",
    placement: i
  }), _e = Nu(Object.assign({}, W, te)), Z = g === Zo ? _e : $, ke = {
    top: q.top - Z.top + A.top,
    bottom: Z.bottom - q.bottom + A.bottom,
    left: q.left - Z.left + A.left,
    right: Z.right - q.right + A.right
  }, Ue = n.modifiersData.offset;
  if (g === Zo && Ue) {
    var je = Ue[i];
    Object.keys(ke).forEach(function(Pe) {
      var bt = [Pn, In].indexOf(Pe) >= 0 ? 1 : -1, pt = [an, In].indexOf(Pe) >= 0 ? "y" : "x";
      ke[Pe] += je[pt] * bt;
    });
  }
  return ke;
}
function pD(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, o = t.rootBoundary, a = t.padding, c = t.flipVariations, u = t.allowedAutoPlacements, d = u === void 0 ? Ny : u, p = So(r), h = p ? c ? gm : gm.filter(function(b) {
    return So(b) === p;
  }) : Os, g = h.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  g.length === 0 && (g = h);
  var y = g.reduce(function(b, k) {
    return b[k] = Ss(n, {
      placement: k,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[rr(k)], b;
  }, {});
  return Object.keys(y).sort(function(b, k) {
    return y[b] - y[k];
  });
}
function hD(n) {
  if (rr(n) === af)
    return [];
  var e = Aa(n);
  return [bm(n), e, bm(e)];
}
function mD(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, o = i === void 0 ? !0 : i, a = t.altAxis, c = a === void 0 ? !0 : a, u = t.fallbackPlacements, d = t.padding, p = t.boundary, h = t.rootBoundary, g = t.altBoundary, y = t.flipVariations, b = y === void 0 ? !0 : y, k = t.allowedAutoPlacements, C = e.options.placement, A = rr(C), D = A === C, W = u || (D || !b ? [Aa(C)] : hD(C)), E = [C].concat(W).reduce(function(It, ot) {
      return It.concat(rr(ot) === af ? pD(e, {
        placement: ot,
        boundary: p,
        rootBoundary: h,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: k
      }) : ot);
    }, []), q = e.rects.reference, $ = e.rects.popper, te = /* @__PURE__ */ new Map(), _e = !0, Z = E[0], ke = 0; ke < E.length; ke++) {
      var Ue = E[ke], je = rr(Ue), Pe = So(Ue) === bo, bt = [an, In].indexOf(je) >= 0, pt = bt ? "width" : "height", rt = Ss(e, {
        placement: Ue,
        boundary: p,
        rootBoundary: h,
        altBoundary: g,
        padding: d
      }), Ke = bt ? Pe ? Pn : ln : Pe ? In : an;
      q[pt] > $[pt] && (Ke = Aa(Ke));
      var ze = Aa(Ke), Qt = [];
      if (o && Qt.push(rt[je] <= 0), c && Qt.push(rt[Ke] <= 0, rt[ze] <= 0), Qt.every(function(It) {
        return It;
      })) {
        Z = Ue, _e = !1;
        break;
      }
      te.set(Ue, Qt);
    }
    if (_e)
      for (var ht = b ? 3 : 1, it = function(ot) {
        var st = E.find(function(R) {
          var U = te.get(R);
          if (U)
            return U.slice(0, ot).every(function(j) {
              return j;
            });
        });
        if (st)
          return Z = st, "break";
      }, Rt = ht; Rt > 0; Rt--) {
        var un = it(Rt);
        if (un === "break")
          break;
      }
    e.placement !== Z && (e.modifiersData[r]._skip = !0, e.placement = Z, e.reset = !0);
  }
}
const gD = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mD,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function xm(n, e, t) {
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
function Sm(n) {
  return [an, Pn, In, ln].some(function(e) {
    return n[e] >= 0;
  });
}
function yD(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, a = Ss(e, {
    elementContext: "reference"
  }), c = Ss(e, {
    altBoundary: !0
  }), u = xm(a, r), d = xm(c, i, o), p = Sm(u), h = Sm(d);
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
const vD = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yD
};
function bD(n, e, t) {
  var r = rr(n), i = [ln, an].indexOf(r) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, a = o[0], c = o[1];
  return a = a || 0, c = (c || 0) * i, [ln, Pn].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function wD(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, o = i === void 0 ? [0, 0] : i, a = Ny.reduce(function(p, h) {
    return p[h] = bD(h, e.rects, o), p;
  }, {}), c = a[e.placement], u = c.x, d = c.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += d), e.modifiersData[r] = a;
}
const xD = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: wD
};
function SD(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Fy({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const _D = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: SD,
  data: {}
};
function kD(n) {
  return n === "x" ? "y" : "x";
}
function CD(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, o = i === void 0 ? !0 : i, a = t.altAxis, c = a === void 0 ? !1 : a, u = t.boundary, d = t.rootBoundary, p = t.altBoundary, h = t.padding, g = t.tether, y = g === void 0 ? !0 : g, b = t.tetherOffset, k = b === void 0 ? 0 : b, C = Ss(e, {
    boundary: u,
    rootBoundary: d,
    padding: h,
    altBoundary: p
  }), A = rr(e.placement), D = So(e.placement), W = !D, E = uf(A), q = kD(E), $ = e.modifiersData.popperOffsets, te = e.rects.reference, _e = e.rects.popper, Z = typeof k == "function" ? k(Object.assign({}, e.rects, {
    placement: e.placement
  })) : k, ke = typeof Z == "number" ? {
    mainAxis: Z,
    altAxis: Z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Z), Ue = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, je = {
    x: 0,
    y: 0
  };
  if (!!$) {
    if (o) {
      var Pe, bt = E === "y" ? an : ln, pt = E === "y" ? In : Pn, rt = E === "y" ? "height" : "width", Ke = $[E], ze = Ke + C[bt], Qt = Ke - C[pt], ht = y ? -_e[rt] / 2 : 0, it = D === bo ? te[rt] : _e[rt], Rt = D === bo ? -_e[rt] : -te[rt], un = e.elements.arrow, It = y && un ? cf(un) : {
        width: 0,
        height: 0
      }, ot = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Py(), st = ot[bt], R = ot[pt], U = cs(0, te[rt], It[rt]), j = W ? te[rt] / 2 - ht - U - st - ke.mainAxis : it - U - st - ke.mainAxis, G = W ? -te[rt] / 2 + ht + U + R + ke.mainAxis : Rt + U + R + ke.mainAxis, de = e.elements.arrow && Ts(e.elements.arrow), He = de ? E === "y" ? de.clientTop || 0 : de.clientLeft || 0 : 0, ce = (Pe = Ue == null ? void 0 : Ue[E]) != null ? Pe : 0, ne = Ke + j - ce - He, De = Ke + G - ce, Ht = cs(y ? qa(ze, ne) : ze, Ke, y ? Ci(Qt, De) : Qt);
      $[E] = Ht, je[E] = Ht - Ke;
    }
    if (c) {
      var Le, oi = E === "x" ? an : ln, Ni = E === "x" ? In : Pn, Wt = $[q], ut = q === "y" ? "height" : "width", Ln = Wt + C[oi], xn = Wt - C[Ni], si = [an, ln].indexOf(A) !== -1, Kn = (Le = Ue == null ? void 0 : Ue[q]) != null ? Le : 0, Di = si ? Ln : Wt - te[ut] - _e[ut] - Kn + ke.altAxis, qn = si ? Wt + te[ut] + _e[ut] - Kn - ke.altAxis : xn, Bn = y && si ? GN(Di, Wt, qn) : cs(y ? Di : Ln, Wt, y ? qn : xn);
      $[q] = Bn, je[q] = Bn - Wt;
    }
    e.modifiersData[r] = je;
  }
}
const ED = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: CD,
  requiresIfExists: ["offset"]
};
function OD(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function TD(n) {
  return n === wn(n) || !Rn(n) ? ff(n) : OD(n);
}
function AD(n) {
  var e = n.getBoundingClientRect(), t = wo(e.width) / n.offsetWidth || 1, r = wo(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function MD(n, e, t) {
  t === void 0 && (t = !1);
  var r = Rn(e), i = Rn(e) && AD(e), o = ii(e), a = xo(n, i, t), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((ar(e) !== "body" || pf(o)) && (c = TD(e)), Rn(e) ? (u = xo(e, !0), u.x += e.clientLeft, u.y += e.clientTop) : o && (u.x = df(o))), {
    x: a.left + c.scrollLeft - u.x,
    y: a.top + c.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function ND(n) {
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
function DD(n) {
  var e = ND(n);
  return UN.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function RD(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function ID(n) {
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
var _m = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function km() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function PD(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, o = i === void 0 ? _m : i;
  return function(c, u, d) {
    d === void 0 && (d = o);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _m, o),
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
        k(), p.options = Object.assign({}, o, p.options, D), p.scrollParents = {
          reference: Mi(c) ? us(c) : c.contextElement ? us(c.contextElement) : [],
          popper: us(u)
        };
        var W = DD(ID([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = W.filter(function(E) {
          return E.enabled;
        }), b(), y.update();
      },
      forceUpdate: function() {
        if (!g) {
          var A = p.elements, D = A.reference, W = A.popper;
          if (!!km(D, W)) {
            p.rects = {
              reference: MD(D, Ts(W), p.options.strategy === "fixed"),
              popper: cf(W)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(ke) {
              return p.modifiersData[ke.name] = Object.assign({}, ke.data);
            });
            for (var E = 0; E < p.orderedModifiers.length; E++) {
              if (p.reset === !0) {
                p.reset = !1, E = -1;
                continue;
              }
              var q = p.orderedModifiers[E], $ = q.fn, te = q.options, _e = te === void 0 ? {} : te, Z = q.name;
              typeof $ == "function" && (p = $({
                state: p,
                options: _e,
                name: Z,
                instance: y
              }) || p);
            }
          }
        }
      },
      update: RD(function() {
        return new Promise(function(C) {
          y.forceUpdate(), C(p);
        });
      }),
      destroy: function() {
        k(), g = !0;
      }
    };
    if (!km(c, u))
      return y;
    y.setOptions(d).then(function(C) {
      !g && d.onFirstUpdate && d.onFirstUpdate(C);
    });
    function b() {
      p.orderedModifiers.forEach(function(C) {
        var A = C.name, D = C.options, W = D === void 0 ? {} : D, E = C.effect;
        if (typeof E == "function") {
          var q = E({
            state: p,
            name: A,
            instance: y,
            options: W
          }), $ = function() {
          };
          h.push(q || $);
        }
      });
    }
    function k() {
      h.forEach(function(C) {
        return C();
      }), h = [];
    }
    return y;
  };
}
var LD = [oD, _D, rD, Dy, xD, gD, ED, QN, vD], BD = /* @__PURE__ */ PD({
  defaultModifiers: LD
}), $D = "tippy-box", Vy = "tippy-content", FD = "tippy-backdrop", zy = "tippy-arrow", Hy = "tippy-svg-arrow", gi = {
  passive: !0,
  capture: !0
}, Wy = function() {
  return document.body;
};
function VD(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function nu(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r == null ? Array.isArray(t) ? t[e] : t : r;
  }
  return n;
}
function hf(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function Uy(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function Cm(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function zD(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function HD(n) {
  return n.split(/\s+/).filter(Boolean);
}
function to(n) {
  return [].concat(n);
}
function Em(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function WD(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function UD(n) {
  return n.split("-")[0];
}
function Ja(n) {
  return [].slice.call(n);
}
function Om(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function fs() {
  return document.createElement("div");
}
function _s(n) {
  return ["Element", "Fragment"].some(function(e) {
    return hf(n, e);
  });
}
function jD(n) {
  return hf(n, "NodeList");
}
function KD(n) {
  return hf(n, "MouseEvent");
}
function qD(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function JD(n) {
  return _s(n) ? [n] : jD(n) ? Ja(n) : Array.isArray(n) ? n : Ja(document.querySelectorAll(n));
}
function ru(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function Tm(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function GD(n) {
  var e, t = to(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function XD(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var o = i.popperRect, a = i.popperState, c = i.props, u = c.interactiveBorder, d = UD(a.placement), p = a.modifiersData.offset;
    if (!p)
      return !0;
    var h = d === "bottom" ? p.top.y : 0, g = d === "top" ? p.bottom.y : 0, y = d === "right" ? p.left.x : 0, b = d === "left" ? p.right.x : 0, k = o.top - r + h > u, C = r - o.bottom - g > u, A = o.left - t + y > u, D = t - o.right - b > u;
    return k || C || A || D;
  });
}
function iu(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function Am(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var Zn = {
  isTouch: !1
}, Mm = 0;
function YD() {
  Zn.isTouch || (Zn.isTouch = !0, window.performance && document.addEventListener("mousemove", jy));
}
function jy() {
  var n = performance.now();
  n - Mm < 20 && (Zn.isTouch = !1, document.removeEventListener("mousemove", jy)), Mm = n;
}
function ZD() {
  var n = document.activeElement;
  if (qD(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function QD() {
  document.addEventListener("touchstart", YD, gi), window.addEventListener("blur", ZD);
}
var eR = typeof window < "u" && typeof document < "u", tR = eR ? !!window.msCrypto : !1;
function Zi(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function Nm(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function nR(n) {
  return Nm(`
  %ctippy.js

  %c` + Nm(n) + `

  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.
  `);
}
function Ky(n) {
  return [
    nR(n),
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    "line-height: 1.5",
    "color: #a6a095;"
  ];
}
var ks;
process.env.NODE_ENV !== "production" && rR();
function rR() {
  ks = /* @__PURE__ */ new Set();
}
function kr(n, e) {
  if (n && !ks.has(e)) {
    var t;
    ks.add(e), (t = console).warn.apply(t, Ky(e));
  }
}
function Du(n, e) {
  if (n && !ks.has(e)) {
    var t;
    ks.add(e), (t = console).error.apply(t, Ky(e));
  }
}
function iR(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  Du(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Du(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var qy = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, oR = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, vn = Object.assign({
  appendTo: Wy,
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
}, qy, oR), sR = Object.keys(vn), aR = function(e) {
  process.env.NODE_ENV !== "production" && Gy(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    vn[r] = e[r];
  });
};
function Jy(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var o = i.name, a = i.defaultValue;
    if (o) {
      var c;
      r[o] = n[o] !== void 0 ? n[o] : (c = vn[o]) != null ? c : a;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function lR(n, e) {
  var t = e ? Object.keys(Jy(Object.assign({}, vn, {
    plugins: e
  }))) : sR, r = t.reduce(function(i, o) {
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
function Dm(n, e) {
  var t = Object.assign({}, e, {
    content: Uy(e.content, [n])
  }, e.ignoreAttributes ? {} : lR(n, e.plugins));
  return t.aria = Object.assign({}, vn.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function Gy(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = zD(vn, Object.keys(qy)), o = !VD(i, r);
    o && (o = e.filter(function(a) {
      return a.name === r;
    }).length === 0), kr(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var cR = function() {
  return "innerHTML";
};
function Ru(n, e) {
  n[cR()] = e;
}
function Rm(n) {
  var e = fs();
  return n === !0 ? e.className = zy : (e.className = Hy, _s(n) ? e.appendChild(n) : Ru(e, n)), e;
}
function Im(n, e) {
  _s(e.content) ? (Ru(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Ru(n, e.content) : n.textContent = e.content);
}
function Iu(n) {
  var e = n.firstElementChild, t = Ja(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(Vy);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(zy) || r.classList.contains(Hy);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(FD);
    })
  };
}
function Xy(n) {
  var e = fs(), t = fs();
  t.className = $D, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = fs();
  r.className = Vy, r.setAttribute("data-state", "hidden"), Im(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(o, a) {
    var c = Iu(e), u = c.box, d = c.content, p = c.arrow;
    a.theme ? u.setAttribute("data-theme", a.theme) : u.removeAttribute("data-theme"), typeof a.animation == "string" ? u.setAttribute("data-animation", a.animation) : u.removeAttribute("data-animation"), a.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof a.maxWidth == "number" ? a.maxWidth + "px" : a.maxWidth, a.role ? u.setAttribute("role", a.role) : u.removeAttribute("role"), (o.content !== a.content || o.allowHTML !== a.allowHTML) && Im(d, n.props), a.arrow ? p ? o.arrow !== a.arrow && (u.removeChild(p), u.appendChild(Rm(a.arrow))) : u.appendChild(Rm(a.arrow)) : p && u.removeChild(p);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
Xy.$$tippy = !0;
var uR = 1, Ca = [], ou = [];
function fR(n, e) {
  var t = Dm(n, Object.assign({}, vn, Jy(Om(e)))), r, i, o, a = !1, c = !1, u = !1, d = !1, p, h, g, y = [], b = Cm(ne, t.interactiveDebounce), k, C = uR++, A = null, D = WD(t.plugins), W = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, E = {
    id: C,
    reference: n,
    popper: fs(),
    popperInstance: A,
    props: t,
    state: W,
    plugins: D,
    clearDelayTimeouts: Di,
    setProps: qn,
    setContent: Bn,
    show: Co,
    hide: Eo,
    hideWithInteractivity: Oo,
    enable: si,
    disable: Kn,
    unmount: To,
    destroy: Ao
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && Du(!0, "render() function has not been supplied."), E;
  var q = t.render(E), $ = q.popper, te = q.onUpdate;
  $.setAttribute("data-tippy-root", ""), $.id = "tippy-" + E.id, E.popper = $, n._tippy = E, $._tippy = E;
  var _e = D.map(function(I) {
    return I.fn(E);
  }), Z = n.hasAttribute("aria-expanded");
  return de(), ht(), Ke(), ze("onCreate", [E]), t.showOnCreate && Ln(), $.addEventListener("mouseenter", function() {
    E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
  }), $.addEventListener("mouseleave", function() {
    E.props.interactive && E.props.trigger.indexOf("mouseenter") >= 0 && bt().addEventListener("mousemove", b);
  }), E;
  function ke() {
    var I = E.props.touch;
    return Array.isArray(I) ? I : [I, 0];
  }
  function Ue() {
    return ke()[0] === "hold";
  }
  function je() {
    var I;
    return !!((I = E.props.render) != null && I.$$tippy);
  }
  function Pe() {
    return k || n;
  }
  function bt() {
    var I = Pe().parentNode;
    return I ? GD(I) : document;
  }
  function pt() {
    return Iu($);
  }
  function rt(I) {
    return E.state.isMounted && !E.state.isVisible || Zn.isTouch || p && p.type === "focus" ? 0 : nu(E.props.delay, I ? 0 : 1, vn.delay);
  }
  function Ke(I) {
    I === void 0 && (I = !1), $.style.pointerEvents = E.props.interactive && !I ? "" : "none", $.style.zIndex = "" + E.props.zIndex;
  }
  function ze(I, Y, re) {
    if (re === void 0 && (re = !0), _e.forEach(function(Oe) {
      Oe[I] && Oe[I].apply(Oe, Y);
    }), re) {
      var Re;
      (Re = E.props)[I].apply(Re, Y);
    }
  }
  function Qt() {
    var I = E.props.aria;
    if (!!I.content) {
      var Y = "aria-" + I.content, re = $.id, Re = to(E.props.triggerTarget || n);
      Re.forEach(function(Oe) {
        var Et = Oe.getAttribute(Y);
        if (E.state.isVisible)
          Oe.setAttribute(Y, Et ? Et + " " + re : re);
        else {
          var en = Et && Et.replace(re, "").trim();
          en ? Oe.setAttribute(Y, en) : Oe.removeAttribute(Y);
        }
      });
    }
  }
  function ht() {
    if (!(Z || !E.props.aria.expanded)) {
      var I = to(E.props.triggerTarget || n);
      I.forEach(function(Y) {
        E.props.interactive ? Y.setAttribute("aria-expanded", E.state.isVisible && Y === Pe() ? "true" : "false") : Y.removeAttribute("aria-expanded");
      });
    }
  }
  function it() {
    bt().removeEventListener("mousemove", b), Ca = Ca.filter(function(I) {
      return I !== b;
    });
  }
  function Rt(I) {
    if (!(Zn.isTouch && (u || I.type === "mousedown"))) {
      var Y = I.composedPath && I.composedPath()[0] || I.target;
      if (!(E.props.interactive && Am($, Y))) {
        if (to(E.props.triggerTarget || n).some(function(re) {
          return Am(re, Y);
        })) {
          if (Zn.isTouch || E.state.isVisible && E.props.trigger.indexOf("click") >= 0)
            return;
        } else
          ze("onClickOutside", [E, I]);
        E.props.hideOnClick === !0 && (E.clearDelayTimeouts(), E.hide(), c = !0, setTimeout(function() {
          c = !1;
        }), E.state.isMounted || st());
      }
    }
  }
  function un() {
    u = !0;
  }
  function It() {
    u = !1;
  }
  function ot() {
    var I = bt();
    I.addEventListener("mousedown", Rt, !0), I.addEventListener("touchend", Rt, gi), I.addEventListener("touchstart", It, gi), I.addEventListener("touchmove", un, gi);
  }
  function st() {
    var I = bt();
    I.removeEventListener("mousedown", Rt, !0), I.removeEventListener("touchend", Rt, gi), I.removeEventListener("touchstart", It, gi), I.removeEventListener("touchmove", un, gi);
  }
  function R(I, Y) {
    j(I, function() {
      !E.state.isVisible && $.parentNode && $.parentNode.contains($) && Y();
    });
  }
  function U(I, Y) {
    j(I, Y);
  }
  function j(I, Y) {
    var re = pt().box;
    function Re(Oe) {
      Oe.target === re && (iu(re, "remove", Re), Y());
    }
    if (I === 0)
      return Y();
    iu(re, "remove", h), iu(re, "add", Re), h = Re;
  }
  function G(I, Y, re) {
    re === void 0 && (re = !1);
    var Re = to(E.props.triggerTarget || n);
    Re.forEach(function(Oe) {
      Oe.addEventListener(I, Y, re), y.push({
        node: Oe,
        eventType: I,
        handler: Y,
        options: re
      });
    });
  }
  function de() {
    Ue() && (G("touchstart", ce, {
      passive: !0
    }), G("touchend", De, {
      passive: !0
    })), HD(E.props.trigger).forEach(function(I) {
      if (I !== "manual")
        switch (G(I, ce), I) {
          case "mouseenter":
            G("mouseleave", De);
            break;
          case "focus":
            G(tR ? "focusout" : "blur", Ht);
            break;
          case "focusin":
            G("focusout", Ht);
            break;
        }
    });
  }
  function He() {
    y.forEach(function(I) {
      var Y = I.node, re = I.eventType, Re = I.handler, Oe = I.options;
      Y.removeEventListener(re, Re, Oe);
    }), y = [];
  }
  function ce(I) {
    var Y, re = !1;
    if (!(!E.state.isEnabled || Le(I) || c)) {
      var Re = ((Y = p) == null ? void 0 : Y.type) === "focus";
      p = I, k = I.currentTarget, ht(), !E.state.isVisible && KD(I) && Ca.forEach(function(Oe) {
        return Oe(I);
      }), I.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || a) && E.props.hideOnClick !== !1 && E.state.isVisible ? re = !0 : Ln(I), I.type === "click" && (a = !re), re && !Re && xn(I);
    }
  }
  function ne(I) {
    var Y = I.target, re = Pe().contains(Y) || $.contains(Y);
    if (!(I.type === "mousemove" && re)) {
      var Re = ut().concat($).map(function(Oe) {
        var Et, en = Oe._tippy, ur = (Et = en.popperInstance) == null ? void 0 : Et.state;
        return ur ? {
          popperRect: Oe.getBoundingClientRect(),
          popperState: ur,
          props: t
        } : null;
      }).filter(Boolean);
      XD(Re, I) && (it(), xn(I));
    }
  }
  function De(I) {
    var Y = Le(I) || E.props.trigger.indexOf("click") >= 0 && a;
    if (!Y) {
      if (E.props.interactive) {
        E.hideWithInteractivity(I);
        return;
      }
      xn(I);
    }
  }
  function Ht(I) {
    E.props.trigger.indexOf("focusin") < 0 && I.target !== Pe() || E.props.interactive && I.relatedTarget && $.contains(I.relatedTarget) || xn(I);
  }
  function Le(I) {
    return Zn.isTouch ? Ue() !== I.type.indexOf("touch") >= 0 : !1;
  }
  function oi() {
    Ni();
    var I = E.props, Y = I.popperOptions, re = I.placement, Re = I.offset, Oe = I.getReferenceClientRect, Et = I.moveTransition, en = je() ? Iu($).arrow : null, ur = Oe ? {
      getBoundingClientRect: Oe,
      contextElement: Oe.contextElement || Pe()
    } : n, Mo = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Ri) {
        var Mr = Ri.state;
        if (je()) {
          var As = pt(), Do = As.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Ii) {
            Ii === "placement" ? Do.setAttribute("data-placement", Mr.placement) : Mr.attributes.popper["data-popper-" + Ii] ? Do.setAttribute("data-" + Ii, "") : Do.removeAttribute("data-" + Ii);
          }), Mr.attributes.popper = {};
        }
      }
    }, fr = [{
      name: "offset",
      options: {
        offset: Re
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
        adaptive: !Et
      }
    }, Mo];
    je() && en && fr.push({
      name: "arrow",
      options: {
        element: en,
        padding: 3
      }
    }), fr.push.apply(fr, (Y == null ? void 0 : Y.modifiers) || []), E.popperInstance = BD(ur, $, Object.assign({}, Y, {
      placement: re,
      onFirstUpdate: g,
      modifiers: fr
    }));
  }
  function Ni() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  function Wt() {
    var I = E.props.appendTo, Y, re = Pe();
    E.props.interactive && I === Wy || I === "parent" ? Y = re.parentNode : Y = Uy(I, [re]), Y.contains($) || Y.appendChild($), E.state.isMounted = !0, oi(), process.env.NODE_ENV !== "production" && kr(E.props.interactive && I === vn.appendTo && re.nextElementSibling !== $, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function ut() {
    return Ja($.querySelectorAll("[data-tippy-root]"));
  }
  function Ln(I) {
    E.clearDelayTimeouts(), I && ze("onTrigger", [E, I]), ot();
    var Y = rt(!0), re = ke(), Re = re[0], Oe = re[1];
    Zn.isTouch && Re === "hold" && Oe && (Y = Oe), Y ? r = setTimeout(function() {
      E.show();
    }, Y) : E.show();
  }
  function xn(I) {
    if (E.clearDelayTimeouts(), ze("onUntrigger", [E, I]), !E.state.isVisible) {
      st();
      return;
    }
    if (!(E.props.trigger.indexOf("mouseenter") >= 0 && E.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(I.type) >= 0 && a)) {
      var Y = rt(!1);
      Y ? i = setTimeout(function() {
        E.state.isVisible && E.hide();
      }, Y) : o = requestAnimationFrame(function() {
        E.hide();
      });
    }
  }
  function si() {
    E.state.isEnabled = !0;
  }
  function Kn() {
    E.hide(), E.state.isEnabled = !1;
  }
  function Di() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function qn(I) {
    if (process.env.NODE_ENV !== "production" && kr(E.state.isDestroyed, Zi("setProps")), !E.state.isDestroyed) {
      ze("onBeforeUpdate", [E, I]), He();
      var Y = E.props, re = Dm(n, Object.assign({}, Y, Om(I), {
        ignoreAttributes: !0
      }));
      E.props = re, de(), Y.interactiveDebounce !== re.interactiveDebounce && (it(), b = Cm(ne, re.interactiveDebounce)), Y.triggerTarget && !re.triggerTarget ? to(Y.triggerTarget).forEach(function(Re) {
        Re.removeAttribute("aria-expanded");
      }) : re.triggerTarget && n.removeAttribute("aria-expanded"), ht(), Ke(), te && te(Y, re), E.popperInstance && (oi(), ut().forEach(function(Re) {
        requestAnimationFrame(Re._tippy.popperInstance.forceUpdate);
      })), ze("onAfterUpdate", [E, I]);
    }
  }
  function Bn(I) {
    E.setProps({
      content: I
    });
  }
  function Co() {
    process.env.NODE_ENV !== "production" && kr(E.state.isDestroyed, Zi("show"));
    var I = E.state.isVisible, Y = E.state.isDestroyed, re = !E.state.isEnabled, Re = Zn.isTouch && !E.props.touch, Oe = nu(E.props.duration, 0, vn.duration);
    if (!(I || Y || re || Re) && !Pe().hasAttribute("disabled") && (ze("onShow", [E], !1), E.props.onShow(E) !== !1)) {
      if (E.state.isVisible = !0, je() && ($.style.visibility = "visible"), Ke(), ot(), E.state.isMounted || ($.style.transition = "none"), je()) {
        var Et = pt(), en = Et.box, ur = Et.content;
        ru([en, ur], 0);
      }
      g = function() {
        var fr;
        if (!(!E.state.isVisible || d)) {
          if (d = !0, $.offsetHeight, $.style.transition = E.props.moveTransition, je() && E.props.animation) {
            var No = pt(), Ri = No.box, Mr = No.content;
            ru([Ri, Mr], Oe), Tm([Ri, Mr], "visible");
          }
          Qt(), ht(), Em(ou, E), (fr = E.popperInstance) == null || fr.forceUpdate(), ze("onMount", [E]), E.props.animation && je() && U(Oe, function() {
            E.state.isShown = !0, ze("onShown", [E]);
          });
        }
      }, Wt();
    }
  }
  function Eo() {
    process.env.NODE_ENV !== "production" && kr(E.state.isDestroyed, Zi("hide"));
    var I = !E.state.isVisible, Y = E.state.isDestroyed, re = !E.state.isEnabled, Re = nu(E.props.duration, 1, vn.duration);
    if (!(I || Y || re) && (ze("onHide", [E], !1), E.props.onHide(E) !== !1)) {
      if (E.state.isVisible = !1, E.state.isShown = !1, d = !1, a = !1, je() && ($.style.visibility = "hidden"), it(), st(), Ke(!0), je()) {
        var Oe = pt(), Et = Oe.box, en = Oe.content;
        E.props.animation && (ru([Et, en], Re), Tm([Et, en], "hidden"));
      }
      Qt(), ht(), E.props.animation ? je() && R(Re, E.unmount) : E.unmount();
    }
  }
  function Oo(I) {
    process.env.NODE_ENV !== "production" && kr(E.state.isDestroyed, Zi("hideWithInteractivity")), bt().addEventListener("mousemove", b), Em(Ca, b), b(I);
  }
  function To() {
    process.env.NODE_ENV !== "production" && kr(E.state.isDestroyed, Zi("unmount")), E.state.isVisible && E.hide(), E.state.isMounted && (Ni(), ut().forEach(function(I) {
      I._tippy.unmount();
    }), $.parentNode && $.parentNode.removeChild($), ou = ou.filter(function(I) {
      return I !== E;
    }), E.state.isMounted = !1, ze("onHidden", [E]));
  }
  function Ao() {
    process.env.NODE_ENV !== "production" && kr(E.state.isDestroyed, Zi("destroy")), !E.state.isDestroyed && (E.clearDelayTimeouts(), E.unmount(), He(), delete n._tippy, E.state.isDestroyed = !0, ze("onDestroy", [E]));
  }
}
function ko(n, e) {
  e === void 0 && (e = {});
  var t = vn.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (iR(n), Gy(e, t)), QD();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = JD(n);
  if (process.env.NODE_ENV !== "production") {
    var o = _s(r.content), a = i.length > 1;
    kr(o && a, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var c = i.reduce(function(u, d) {
    var p = d && fR(d, r);
    return p && u.push(p), u;
  }, []);
  return _s(n) ? c[0] : c;
}
ko.defaultProps = vn;
ko.setDefaultProps = aR;
ko.currentInput = Zn;
Object.assign({}, Dy, {
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
  render: Xy
});
class dR {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: a }) {
    this.preventHide = !1, this.shouldShow = ({ view: c, state: u, from: d, to: p }) => {
      const { doc: h, selection: g } = u, { empty: y } = g, b = !h.textBetween(d, p).length && tf(u.selection), k = this.element.contains(document.activeElement);
      return !(!(c.hasFocus() || k) || y || b || !this.editor.isEditable);
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
      const { state: b, composing: k } = c, { selection: C } = b;
      if (k || !u && !d)
        return;
      this.createTooltip();
      const { ranges: D } = C, W = Math.min(...D.map(($) => $.$from.pos)), E = Math.max(...D.map(($) => $.$to.pos));
      if (!((h = this.shouldShow) === null || h === void 0 ? void 0 : h.call(this, {
        editor: this.editor,
        view: c,
        state: b,
        oldState: p,
        from: W,
        to: E
      }))) {
        this.hide();
        return;
      }
      (g = this.tippy) === null || g === void 0 || g.setProps({
        getReferenceClientRect: ((y = this.tippyOptions) === null || y === void 0 ? void 0 : y.getReferenceClientRect) || (() => {
          if (YA(b.selection)) {
            let $ = c.nodeDOM(W);
            const te = $.dataset.nodeViewWrapper ? $ : $.querySelector("[data-node-view-wrapper]");
            if (te && ($ = te.firstChild), $)
              return $.getBoundingClientRect();
          }
          return Cy(c, W, E);
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
const Yy = (n) => new cn({
  key: typeof n.pluginKey == "string" ? new cr(n.pluginKey) : n.pluginKey,
  view: (e) => new dR({ view: e, ...n })
});
Zt.create({
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
      Yy({
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
class pR {
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
const Zy = (n) => new cn({
  key: typeof n.pluginKey == "string" ? new cr(n.pluginKey) : n.pluginKey,
  view: (e) => new pR({ view: e, ...n })
});
Zt.create({
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
      Zy({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
const hR = lr({
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
    const t = be(null);
    return Bu(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: a, tippyOptions: c } = n;
      i.registerPlugin(Yy({
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
      return Or("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function Pm(n) {
  return A_((e, t) => ({
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
class mR extends EM {
  constructor(e = {}) {
    return super(e), this.vueRenderers = Pu(/* @__PURE__ */ new Map()), this.contentComponent = null, this.reactiveState = Pm(this.view.state), this.reactiveExtensionStorage = Pm(this.extensionStorage), this.on("transaction", () => {
      this.reactiveState.value = this.view.state, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), T_(this);
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
const gR = lr({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = be(), t = Lu();
    return Fm(() => {
      const r = n.editor;
      r && r.options.element && e.value && $m(() => {
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
      const t = Or(O_, {
        to: e.teleportElement,
        key: e.id
      }, Or(e.component, {
        ref: e.id,
        ...e.props
      }));
      n.push(t);
    }), Or("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    }, ...n);
  }
}), yR = lr({
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
    const t = be(null);
    return Bu(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: a } = n;
      i.registerPlugin(Zy({
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
      return Or("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
lr({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return Or(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
lr({
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
    return Or(this.as, {
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
const vR = (n = {}) => {
  const e = Bm();
  return Bu(() => {
    e.value = new mR(n);
  }), Ya(() => {
    var t;
    (t = e.value) === null || t === void 0 || t.destroy();
  }), e;
}, bR = {
  name: "LaravelCmsAdminEditor",
  components: {
    EditorContent: gR,
    StarterKit: mm,
    BubbleMenu: hR,
    FloatingMenu: yR,
    EditHtml: DN
  },
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = be(!1), r = vR({
      content: n.modelValue,
      extensions: [mm],
      onUpdate: ({ editor: o }) => {
        e("update:modelValue", o.getHTML());
      }
    });
    async function i(o) {
      r.value.commands.setContent(o), e("update:modelValue", o);
    }
    return {
      editor: r,
      showEditHtml: t,
      setFromHtml: i
    };
  }
}, wR = { key: 0 };
function xR(n, e, t, r, i, o) {
  const a = le("editor-content"), c = le("edit-html"), u = le("bubble-menu"), d = le("floating-menu");
  return r.editor ? (L(), z("div", wR, [
    Me(a, { editor: r.editor }, null, 8, ["editor"]),
    Me(c, {
      html: t.modelValue,
      onUpdate: r.setFromHtml,
      visible: r.showEditHtml,
      "onUpdate:visible": e[1] || (e[1] = (p) => r.showEditHtml = p)
    }, {
      default: ct(() => [
        S("a", {
          href: "#",
          slot: "trigger",
          onClick: e[0] || (e[0] = Je((p) => r.showEditHtml = !0, ["prevent"]))
        }, "Edit Html ")
      ]),
      _: 1
    }, 8, ["html", "onUpdate", "visible"]),
    Me(u, {
      class: "bubble-menu",
      "tippy-options": { duration: 100 },
      editor: r.editor
    }, {
      default: ct(() => [
        S("button", {
          onClick: e[2] || (e[2] = (p) => r.editor.chain().focus().toggleBold().run()),
          class: Mt({
            "is-active": r.editor.isActive("bold")
          })
        }, " Bold ", 2),
        S("button", {
          onClick: e[3] || (e[3] = (p) => r.editor.chain().focus().toggleItalic().run()),
          class: Mt({
            "is-active": r.editor.isActive("italic")
          })
        }, " Italic ", 2),
        S("button", {
          onClick: e[4] || (e[4] = (p) => r.editor.chain().focus().toggleStrike().run()),
          class: Mt({
            "is-active": r.editor.isActive("strike")
          })
        }, " Strike ", 2),
        S("button", {
          onClick: e[5] || (e[5] = (p) => r.editor.chain().focus().toggleBulletList().run()),
          class: Mt({
            "is-active": r.editor.isActive("bulletList")
          })
        }, " Bullet List ", 2),
        S("button", {
          onClick: e[6] || (e[6] = (p) => r.editor.chain().focus().toggleOrderedList().run()),
          class: Mt({
            "is-active": r.editor.isActive("orderedList")
          })
        }, " Ordered List ", 2)
      ]),
      _: 1
    }, 8, ["editor"]),
    Me(d, {
      class: "floating-menu",
      "tippy-options": { duration: 100 },
      editor: r.editor
    }, {
      default: ct(() => [
        S("button", {
          onClick: e[7] || (e[7] = (p) => r.editor.chain().focus().toggleHeading({ level: 1 }).run()),
          class: Mt({
            "is-active": r.editor.isActive("heading", {
              level: 1
            })
          })
        }, " H1 ", 2),
        S("button", {
          onClick: e[8] || (e[8] = (p) => r.editor.chain().focus().toggleHeading({ level: 2 }).run()),
          class: Mt({
            "is-active": r.editor.isActive("heading", {
              level: 2
            })
          })
        }, " H2 ", 2),
        S("button", {
          onClick: e[9] || (e[9] = (p) => r.editor.chain().focus().toggleBulletList().run()),
          class: Mt({
            "is-active": r.editor.isActive("bulletList")
          })
        }, " Bullet List ", 2),
        S("button", {
          onClick: e[10] || (e[10] = (p) => r.editor.chain().focus().toggleOrderedList().run()),
          class: Mt({
            "is-active": r.editor.isActive("orderedList")
          })
        }, " Ordered List ", 2)
      ]),
      _: 1
    }, 8, ["editor"])
  ])) : $t("", !0);
}
const hl = /* @__PURE__ */ xe(bR, [["render", xR]]), SR = {
  name: "LaravelCmsAdminComponent",
  components: { WysiwygEditor: hl },
  props: ["id"],
  setup(n) {
    const e = be(null), t = be(null);
    async function r() {
      const c = await (await fetch("/api/cms-components/" + n.id)).json();
      e.value = c.data, t.value = Object.assign({}, e.value);
    }
    async function i() {
      const a = await fetch("/api/cms-components/" + n.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "PUT",
        body: JSON.stringify(e.value)
      }), c = await a.json();
      if (!a.ok) {
        fe({
          title: c.message,
          type: "error"
        });
        return;
      }
      e.value = c.data, t.value = Object.assign({}, e.value), fe({
        title: "Page updated.",
        type: "success"
      });
    }
    Promise.all([r()]);
    const o = Ee(() => JSON.stringify(t.value) != JSON.stringify(e.value));
    return {
      component: e,
      componentOriginal: t,
      saveEnabled: o,
      onSubmit: i
    };
  }
}, _R = /* @__PURE__ */ S("h2", null, "Edit Component", -1), kR = { class: "form-group" }, CR = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), ER = { class: "form-group" }, OR = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "html"
}, "Body", -1), TR = ["disabled"];
function AR(n, e, t, r, i, o) {
  const a = le("router-link"), c = le("wysiwyg-editor");
  return L(), z(Ve, null, [
    S("p", null, [
      Me(a, { to: "/components" }, {
        default: ct(() => [
          xt("< Back")
        ]),
        _: 1
      })
    ]),
    _R,
    r.component ? (L(), z("form", {
      key: 0,
      onSubmit: e[2] || (e[2] = Je((...u) => r.onSubmit && r.onSubmit(...u), ["prevent"]))
    }, [
      S("fieldset", null, [
        S("div", kR, [
          CR,
          Ne(S("input", {
            class: "form-input",
            type: "text",
            name: "name",
            id: "name",
            "onUpdate:modelValue": e[0] || (e[0] = (u) => r.component.name = u)
          }, null, 512), [
            [Ze, r.component.name]
          ])
        ]),
        S("div", ER, [
          OR,
          Me(c, {
            modelValue: r.component.html,
            "onUpdate:modelValue": e[1] || (e[1] = (u) => r.component.html = u)
          }, null, 8, ["modelValue"])
        ]),
        S("button", {
          class: "btn btn-primary",
          disabled: !r.saveEnabled
        }, " Update ", 8, TR)
      ])
    ], 32)) : $t("", !0)
  ], 64);
}
const MR = /* @__PURE__ */ xe(SR, [["render", AR]]), NR = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["component"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.component.id);
    }
    return { onDeleteClick: t };
  }
};
function DR(n, e, t, r, i, o) {
  const a = le("router-link");
  return L(), z("tr", null, [
    S("td", null, Ie(t.component.id), 1),
    S("td", null, [
      Me(a, {
        to: "/components/" + t.component.id
      }, {
        default: ct(() => [
          xt(Ie(t.component.name), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    S("td", null, [
      S("button", {
        onClick: e[0] || (e[0] = Je((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const RR = /* @__PURE__ */ xe(NR, [["render", DR]]), IR = {
  name: "LaravelCmsAdminComponentAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = be({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = Ee(() => t.value.name != null && t.value.identifier != null);
    return { newComponent: t, onSubmit: r, valid: i };
  }
}, PR = { class: "form-group form-inline mx-2" }, LR = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), BR = { class: "form-group form-inline mx-2" }, $R = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), FR = ["disabled"];
function VR(n, e, t, r, i, o) {
  return L(), z("form", {
    onSubmit: e[2] || (e[2] = Je((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    S("fieldset", null, [
      S("div", PR, [
        LR,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newComponent.name = a)
        }, null, 512), [
          [Ze, r.newComponent.name]
        ])
      ]),
      S("div", BR, [
        $R,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newComponent.identifier = a)
        }, null, 512), [
          [Ze, r.newComponent.identifier]
        ])
      ]),
      S("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Component ", 8, FR)
    ])
  ], 32);
}
const zR = /* @__PURE__ */ xe(IR, [["render", VR]]), HR = {
  name: "LaravelCmsAdminComponents",
  components: {
    ListItem: RR,
    AddForm: zR
  },
  setup(n, { emit: e }) {
    const t = be([]), r = be(!1);
    async function i() {
      let u = "/api/cms-components?" + new URLSearchParams({
        "q[]": ["is_global[eq]=TRUE"]
      }).toString();
      const p = await (await fetch(u)).json();
      t.value = p.data, r.value = !0;
    }
    async function o(u) {
      u.is_global = !0;
      const d = await fetch("/api/cms-components", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify(u)
      }), p = await d.json();
      if (!d.ok) {
        fe({
          title: p.message,
          type: "error"
        });
        return;
      }
      t.value.push(p.data), fe({
        title: "New component added.",
        type: "success"
      }), router.push("/components/" + p.data.id);
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
        fe({
          title: json.message,
          type: "error"
        });
        return;
      }
      fe({
        title: "Component deleted.",
        type: "warn"
      });
      var p = t.value.map((h) => h.id).indexOf(u);
      ~p && t.value.splice(p, 1);
    }
    return i(), {
      componentsSorted: Ee(() => Jt.exports.sortBy(t.value || [], (u) => u.component)),
      loaded: r,
      onAdd: o,
      onDelete: a
    };
  }
}, WR = /* @__PURE__ */ S("h2", null, "Components", -1), UR = {
  key: 0,
  class: "table"
}, jR = { key: 1 }, KR = { key: 2 };
function qR(n, e, t, r, i, o) {
  const a = le("add-form"), c = le("list-item");
  return L(), z(Ve, null, [
    WR,
    Me(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.componentsSorted.length ? (L(), z("table", UR, [
      (L(!0), z(Ve, null, St(r.componentsSorted, (u) => (L(), dt(c, {
        key: u.id,
        component: u,
        onDelete: r.onDelete
      }, null, 8, ["component", "onDelete"]))), 128))
    ])) : r.loaded ? (L(), z("p", jR, "There are no components.")) : (L(), z("p", KR, "Loading..."))
  ], 64);
}
const JR = /* @__PURE__ */ xe(HR, [["render", qR]]), GR = {
  name: "LaravelCmsAdminMediaListItem",
  props: ["media"],
  emits: ["delete"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.media.id);
    }
    return { onDeleteClick: t };
  }
}, XR = ["src", "alt"], YR = /* @__PURE__ */ S("br", null, null, -1);
function ZR(n, e, t, r, i, o) {
  return L(), z("tr", null, [
    S("td", null, Ie(t.media.id), 1),
    S("td", null, [
      S("img", {
        src: t.media.url,
        alt: t.media.caption,
        style: { "max-width": "200px" }
      }, null, 8, XR)
    ]),
    S("td", null, [
      xt(Ie(t.media.url), 1),
      YR,
      xt(Ie(t.media.caption), 1)
    ]),
    S("td", null, [
      S("button", {
        onClick: e[0] || (e[0] = Je((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const QR = /* @__PURE__ */ xe(GR, [["render", ZR]]), eI = {
  name: "LaravelCmsAdminMediaAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = be({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    function i(a) {
      t.value.file = a.target.files[0];
    }
    const o = Ee(() => t.value.caption != null && t.value.file != null);
    return { newMedia: t, onSubmit: r, onFileChanged: i, valid: o };
  }
}, tI = { class: "form-group form-inline mx-2" }, nI = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "caption"
}, "Caption", -1), rI = { class: "form-group form-inline mx-2" }, iI = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "file"
}, "File", -1), oI = ["disabled"];
function sI(n, e, t, r, i, o) {
  return L(), z("form", {
    onSubmit: e[2] || (e[2] = Je((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    S("fieldset", null, [
      S("div", tI, [
        nI,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "caption",
          id: "caption",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newMedia.caption = a)
        }, null, 512), [
          [Ze, r.newMedia.caption]
        ])
      ]),
      S("div", rI, [
        iI,
        S("input", {
          class: "form-input",
          type: "file",
          name: "file",
          id: "file",
          onChange: e[1] || (e[1] = (...a) => r.onFileChanged && r.onFileChanged(...a))
        }, null, 32)
      ]),
      S("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Media ", 8, oI)
    ])
  ], 32);
}
const aI = /* @__PURE__ */ xe(eI, [["render", sI]]), lI = {
  name: "LaravelCmsAdminMedia",
  components: {
    ListItem: QR,
    AddForm: aI
  },
  setup(n, { emit: e }) {
    const t = be([]), r = be(!1);
    async function i() {
      const d = await (await fetch("/api/cms-media")).json();
      t.value = d.data, r.value = !0;
    }
    async function o(u) {
      const d = new FormData();
      d.append("media", u.file), d.append("caption", u.caption);
      const p = await fetch("/api/cms-media", {
        headers: {
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST",
        body: d
      }), h = await p.json();
      if (!p.ok) {
        fe({
          title: h.message,
          type: "error"
        });
        return;
      }
      fe({
        title: "New media added.",
        type: "success"
      }), t.value.push(Object.assign(u, h.data));
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
        fe({
          title: json.message,
          type: "error"
        });
        return;
      }
      fe({
        title: "Media deleted.",
        type: "warn"
      });
      var p = t.value.map((h) => h.id).indexOf(u);
      ~p && t.value.splice(p, 1);
    }
    return i(), {
      mediaSorted: Ee(() => Jt.exports.sortBy(t.value || [], (u) => u.created_at)),
      loaded: r,
      onAdd: o,
      onDelete: a
    };
  }
}, cI = /* @__PURE__ */ S("h2", null, "Media", -1), uI = {
  key: 0,
  class: "table"
}, fI = { key: 1 }, dI = { key: 2 };
function pI(n, e, t, r, i, o) {
  const a = le("add-form"), c = le("list-item");
  return L(), z(Ve, null, [
    cI,
    Me(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.mediaSorted.length ? (L(), z("table", uI, [
      (L(!0), z(Ve, null, St(r.mediaSorted, (u) => (L(), dt(c, {
        key: u.id,
        media: u,
        onDelete: r.onDelete
      }, null, 8, ["media", "onDelete"]))), 128))
    ])) : r.loaded ? (L(), z("p", fI, "There is no uploaded media.")) : (L(), z("p", dI, "Loading..."))
  ], 64);
}
const hI = /* @__PURE__ */ xe(lI, [["render", pI]]), mI = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["page"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.page.id);
    }
    return { onDeleteClick: t };
  }
};
function gI(n, e, t, r, i, o) {
  var c;
  const a = le("router-link");
  return L(), z("tr", null, [
    S("td", null, Ie(t.page.id), 1),
    S("td", null, [
      Me(a, {
        to: "/pages/" + t.page.id
      }, {
        default: ct(() => [
          xt(Ie(t.page.name), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    S("td", null, Ie(t.page.title), 1),
    S("td", null, Ie(t.page.path), 1),
    S("td", null, Ie((c = t.page.template) == null ? void 0 : c.name), 1),
    S("td", null, [
      S("button", {
        onClick: e[0] || (e[0] = Je((...u) => r.onDeleteClick && r.onDeleteClick(...u), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const yI = /* @__PURE__ */ xe(mI, [["render", gI]]), vI = {
  name: "LaravelCmsAdminPageAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = be({}), r = be([]);
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
    const c = Ee(() => t.value.name != null && t.value.title != null && t.value.path != null && t.value.cms_template_id != null);
    return { newPage: t, templates: r, onSubmit: o, onTitleBlur: a, valid: c };
  }
}, bI = { class: "form-group form-inline mx-2" }, wI = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), xI = { class: "form-group form-inline mx-2" }, SI = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "title"
}, "Title", -1), _I = { class: "form-group form-inline mx-2" }, kI = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "template"
}, "Template", -1), CI = /* @__PURE__ */ S("option", null, null, -1), EI = ["value"], OI = { class: "form-group form-inline mx-2" }, TI = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), AI = ["disabled"], MI = { key: 1 };
function NI(n, e, t, r, i, o) {
  const a = le("router-link");
  return r.templates.length ? (L(), z("form", {
    key: 0,
    onSubmit: e[5] || (e[5] = Je((...c) => r.onSubmit && r.onSubmit(...c), ["prevent"]))
  }, [
    S("fieldset", null, [
      S("div", bI, [
        wI,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (c) => r.newPage.name = c)
        }, null, 512), [
          [Ze, r.newPage.name]
        ])
      ]),
      S("div", xI, [
        SI,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "title",
          id: "title",
          onBlur: e[1] || (e[1] = (...c) => r.onTitleBlur && r.onTitleBlur(...c)),
          "onUpdate:modelValue": e[2] || (e[2] = (c) => r.newPage.title = c)
        }, null, 544), [
          [Ze, r.newPage.title]
        ])
      ]),
      S("div", _I, [
        kI,
        Ne(S("select", {
          class: "form-select",
          name: "template",
          id: "template",
          "onUpdate:modelValue": e[3] || (e[3] = (c) => r.newPage.cms_template_id = c)
        }, [
          CI,
          (L(!0), z(Ve, null, St(r.templates, (c) => (L(), z("option", {
            key: c.id,
            value: c.id
          }, Ie(c.name), 9, EI))), 128))
        ], 512), [
          [
            wi,
            r.newPage.cms_template_id,
            void 0,
            { number: !0 }
          ]
        ])
      ]),
      S("div", OI, [
        TI,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "path",
          id: "path",
          "onUpdate:modelValue": e[4] || (e[4] = (c) => r.newPage.path = c)
        }, null, 512), [
          [Ze, r.newPage.path]
        ])
      ]),
      S("button", {
        class: "mx-2 btn btn-link",
        disabled: !r.valid
      }, " Add Page ", 8, AI)
    ])
  ], 32)) : (L(), z("p", MI, [
    xt(" You must set up "),
    Me(a, { to: "/templates" }, {
      default: ct(() => [
        xt("templates")
      ]),
      _: 1
    }),
    xt(" before adding a page. ")
  ]));
}
const DI = /* @__PURE__ */ xe(vI, [["render", NI]]), RI = {
  name: "LaravelCmsAdminPages",
  components: {
    ListItem: yI,
    AddForm: DI
  },
  setup() {
    const n = og(), e = be([]), t = be(!1);
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
        fe({
          title: d.message,
          type: "error"
        });
        return;
      }
      e.value.push(d.data), fe({
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
        fe({
          title: json.message,
          type: "error"
        });
        return;
      }
      fe({
        title: "Page deleted.",
        type: "warn"
      });
      var d = e.value.map((p) => p.id).indexOf(c);
      ~d && e.value.splice(d, 1);
    }
    return r(), {
      pagesSorted: Ee(() => Jt.exports.sortBy(e.value || [], (c) => c.name)),
      loaded: t,
      onAdd: i,
      onDelete: o
    };
  }
}, II = /* @__PURE__ */ S("h2", null, "Add Page", -1), PI = /* @__PURE__ */ S("h2", null, "Existing Pages", -1), LI = {
  key: 0,
  class: "table"
}, BI = /* @__PURE__ */ S("tr", null, [
  /* @__PURE__ */ S("th", null, "Id"),
  /* @__PURE__ */ S("th", null, "Name"),
  /* @__PURE__ */ S("th", null, "Title"),
  /* @__PURE__ */ S("th", null, "Path"),
  /* @__PURE__ */ S("th", null, "Template"),
  /* @__PURE__ */ S("th")
], -1), $I = { key: 1 }, FI = { key: 2 };
function VI(n, e, t, r, i, o) {
  const a = le("add-form"), c = le("list-item");
  return L(), z(Ve, null, [
    II,
    Me(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    PI,
    r.loaded && r.pagesSorted.length ? (L(), z("table", LI, [
      BI,
      (L(!0), z(Ve, null, St(r.pagesSorted, (u) => (L(), dt(c, {
        key: u.id,
        page: u,
        onDelete: r.onDelete
      }, null, 8, ["page", "onDelete"]))), 128))
    ])) : r.loaded ? (L(), z("p", $I, "There are no pages.")) : (L(), z("p", FI, "Loading..."))
  ], 64);
}
const Lm = /* @__PURE__ */ xe(RI, [["render", VI]]), zI = {
  name: "LaravelCmsAdminPagePathsListItem",
  props: ["path"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.path.id);
    }
    return { onDeleteClick: t };
  }
};
function HI(n, e, t, r, i, o) {
  return L(), z("tr", null, [
    S("td", null, Ie(t.path.id), 1),
    S("td", null, Ie(t.path.path), 1),
    S("td", null, [
      S("button", {
        onClick: e[0] || (e[0] = Je((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const WI = /* @__PURE__ */ xe(zI, [["render", HI]]), UI = {
  name: "LaravelCmsAdminPagePathsAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = be({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = Ee(() => t.value.path != null);
    return { newPath: t, onSubmit: r, valid: i };
  }
}, jI = { class: "form-group form-inline mx-2" }, KI = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), qI = ["disabled"];
function JI(n, e, t, r, i, o) {
  return L(), z("form", {
    onSubmit: e[1] || (e[1] = Je((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    S("fieldset", null, [
      S("div", jI, [
        KI,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "path",
          id: "path",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newPath.path = a)
        }, null, 512), [
          [Ze, r.newPath.path]
        ])
      ]),
      S("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Path ", 8, qI)
    ])
  ], 32);
}
const GI = /* @__PURE__ */ xe(UI, [["render", JI]]), XI = {
  name: "LaravelCmsAdminPaths",
  components: {
    ListItem: WI,
    AddForm: GI
  },
  props: ["page"],
  setup(n, { emit: e }) {
    const t = be([]), r = be(!1);
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
        fe({
          title: p.message,
          type: "error"
        });
        return;
      }
      fe({
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
        fe({
          title: json.message,
          type: "error"
        });
        return;
      }
      fe({
        title: "Path deleted.",
        type: "warn"
      });
      var p = t.value.map((h) => h.id).indexOf(u);
      ~p && t.value.splice(p, 1);
    }
    return i(), {
      pathsSorted: Ee(() => Jt.exports.sortBy(t.value || [], (u) => u.path)),
      loaded: r,
      onAdd: o,
      onDelete: a
    };
  }
}, YI = {
  key: 0,
  class: "table"
}, ZI = /* @__PURE__ */ S("tr", null, [
  /* @__PURE__ */ S("th", null, "Id"),
  /* @__PURE__ */ S("th", { colspan: "2" }, "Path")
], -1), QI = { key: 1 }, eP = { key: 2 };
function tP(n, e, t, r, i, o) {
  const a = le("add-form"), c = le("list-item");
  return L(), z(Ve, null, [
    Me(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    r.loaded && r.pathsSorted.length ? (L(), z("table", YI, [
      ZI,
      (L(!0), z(Ve, null, St(r.pathsSorted, (u) => (L(), dt(c, {
        key: u.id,
        path: u,
        onDelete: r.onDelete
      }, null, 8, ["path", "onDelete"]))), 128))
    ])) : r.loaded ? (L(), z("p", QI, "There are no paths.")) : (L(), z("p", eP, "Loading..."))
  ], 64);
}
const nP = /* @__PURE__ */ xe(XI, [["render", tP]]), rP = {
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
    const i = Ee(() => n.component.html);
    return { onEditClick: t, onDeleteClick: r, preview: i };
  }
}, iP = { class: "card mb-2" }, oP = { class: "card-header" }, sP = { class: "card-title h5" }, aP = { class: "card-subtitle text-gray" }, lP = ["innerHTML"], cP = { class: "card-footer" }, uP = ["disabled"];
function fP(n, e, t, r, i, o) {
  return L(), z("div", iP, [
    S("div", oP, [
      S("div", sP, Ie(t.component.name), 1),
      S("div", aP, Ie(t.component.view), 1)
    ]),
    S("div", {
      class: "card-body",
      innerHTML: r.preview
    }, null, 8, lP),
    S("div", cP, [
      S("button", {
        class: "btn btn-link",
        onClick: e[0] || (e[0] = Je((...a) => r.onEditClick && r.onEditClick(...a), ["prevent"])),
        disabled: t.component.is_global
      }, " Edit " + Ie(t.component.is_global ? "(Edit in Components)" : ""), 9, uP),
      S("button", {
        class: "btn btn-link text-error float-right",
        onClick: e[1] || (e[1] = Je((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"]))
      }, " Delete ")
    ])
  ]);
}
const Qy = /* @__PURE__ */ xe(rP, [["render", fP]]), dP = {
  name: "LaravelCmsAdminPageUnsortedComponents",
  components: {
    Component: Qy
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
}, pP = /* @__PURE__ */ S("p", null, "Unsorted Components", -1), hP = { class: "table mb-2" };
function mP(n, e, t, r, i, o) {
  const a = le("component");
  return L(), z(Ve, null, [
    pP,
    S("table", hP, [
      (L(!0), z(Ve, null, St(t.components, (c) => (L(), dt(a, {
        key: c.id,
        component: c,
        onEdit: r.onEdit,
        onDelete: r.onDelete
      }, null, 8, ["component", "onEdit", "onDelete"]))), 128))
    ])
  ], 64);
}
const gP = /* @__PURE__ */ xe(dP, [["render", mP]]), yP = {
  name: "LaravelCmsAdminPageTemplateSection",
  props: ["templateSection", "components"],
  components: {
    ComponentPreview: Qy
  },
  setup(n, { emit: e }) {
    async function t(o) {
      e("select", o);
    }
    function r(o) {
      e("delete", o);
    }
    return {
      includedComponents: Ee(() => {
        const o = Jt.exports.filter(n.components, (a) => a.cms_template_section_id == n.templateSection.id);
        return Jt.exports.sortBy(o, "sort_order");
      }),
      onEdit: t,
      onDelete: r
    };
  }
};
function vP(n, e, t, r, i, o) {
  const a = le("component-preview");
  return L(), z("fieldset", null, [
    S("legend", null, " Section: " + Ie(t.templateSection.name) + " " + Ie(t.templateSection.id), 1),
    (L(!0), z(Ve, null, St(r.includedComponents, (c) => (L(), dt(a, {
      key: c.id,
      component: c,
      onEdit: r.onEdit,
      onDelete: r.onDelete
    }, null, 8, ["component", "onEdit", "onDelete"]))), 128))
  ]);
}
const bP = /* @__PURE__ */ xe(yP, [["render", vP]]), wP = {
  name: "LaravelCmsAdminPageTemplateSections",
  components: {
    ListItem: bP
  },
  props: ["templateSections", "components"],
  setup(n, { emit: e }) {
    return {};
  }
};
function xP(n, e, t, r, i, o) {
  const a = le("list-item");
  return L(), z("form", null, [
    S("fieldset", null, [
      (L(!0), z(Ve, null, St(t.templateSections, (c) => (L(), dt(a, {
        key: c.id,
        "template-section": c,
        components: t.components,
        onSelect: e[0] || (e[0] = (u) => n.$emit("select", u)),
        onDelete: e[1] || (e[1] = (u) => n.$emit("delete", u))
      }, null, 8, ["template-section", "components"]))), 128))
    ])
  ]);
}
const SP = /* @__PURE__ */ xe(wP, [["render", xP]]), _P = {
  name: "LaravelCmsAdminPageAddComponentForm",
  props: ["templateSections", "globalComponents"],
  components: { WysiwygEditor: hl },
  setup(n, { emit: e }) {
    const t = {
      type: null,
      html: null,
      view: null,
      name: null
    }, r = Pu({ ...t }), i = be([]);
    async function o() {
      const p = await (await fetch("/api/cms-views")).json();
      i.value = p.data;
    }
    async function a() {
      !this.valid || (e("add", Object.assign({}, r)), Object.assign(r, t));
    }
    Ga(
      () => r.type,
      (d, p) => {
        r.html = null, r.view = null;
      }
    );
    const c = Ee(() => Jt.exports.sortBy(n.globalComponents || [], (d) => d.name));
    o();
    const u = Ee(() => {
      if (!r.type)
        return !1;
      if (r.type == "new-text") {
        if (!r.html || !r.name)
          return !1;
      } else if (r.type == "new-view" && (!r.view || !r.name))
        return !1;
      return !0;
    });
    return { component: r, componentsSorted: c, views: i, valid: u, onSubmit: a };
  }
}, kP = /* @__PURE__ */ S("legend", null, "Add Item to Page", -1), CP = { class: "form-group mx-2" }, EP = {
  class: "form-label",
  for: "type"
}, OP = /* @__PURE__ */ S("option", { value: "" }, "Select Type", -1), TP = /* @__PURE__ */ S("option", { value: "" }, "-- New Component --", -1), AP = /* @__PURE__ */ S("option", { value: "new-text" }, "HTML/Markdown", -1), MP = /* @__PURE__ */ S("option", { value: "new-view" }, "Laravel View", -1), NP = /* @__PURE__ */ S("option", { value: "" }, "-- Existing Component --", -1), DP = ["value"], RP = { class: "form-group mx-2" }, IP = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), PP = {
  key: 0,
  class: "form-group mx-2"
}, LP = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "html"
}, "Body", -1), BP = {
  key: 1,
  class: "form-group mx-2"
}, $P = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "view"
}, "Laravel View", -1), FP = /* @__PURE__ */ S("option", { value: "" }, "Select", -1), VP = ["value"], zP = { class: "form-group mx-2" }, HP = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "cms_template_section_id"
}, "Template Section", -1), WP = /* @__PURE__ */ S("option", { value: "" }, "Select", -1), UP = ["value"], jP = /* @__PURE__ */ S("button", {
  class: "btn mx-2",
  style: { float: "right" },
  disabled: 1
}, " Cancel ", -1), KP = ["disabled"];
function qP(n, e, t, r, i, o) {
  var c;
  const a = le("wysiwyg-editor");
  return L(), z("form", {
    onSubmit: e[5] || (e[5] = Je((...u) => r.onSubmit && r.onSubmit(...u), ["prevent"]))
  }, [
    S("fieldset", null, [
      kP,
      S("div", CP, [
        S("label", EP, "Select Component " + Ie(r.component.type), 1),
        Ne(S("select", {
          class: "form-select",
          name: "type",
          id: "type",
          "onUpdate:modelValue": e[0] || (e[0] = (u) => r.component.type = u)
        }, [
          OP,
          TP,
          AP,
          MP,
          (c = r.componentsSorted) != null && c.length ? (L(), z(Ve, { key: 0 }, [
            NP,
            (L(!0), z(Ve, null, St(r.componentsSorted, (u) => (L(), z("option", {
              key: u.id,
              value: u.id
            }, Ie(u.name), 9, DP))), 128))
          ], 64)) : $t("", !0)
        ], 512), [
          [wi, r.component.type]
        ])
      ]),
      S("div", RP, [
        IP,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[1] || (e[1] = (u) => r.component.name = u)
        }, null, 512), [
          [Ze, r.component.name]
        ])
      ]),
      r.component.type == "new-text" || r.component.type == "new-view" ? (L(), z(Ve, { key: 0 }, [
        r.component.type == "new-text" ? (L(), z("div", PP, [
          LP,
          Me(a, {
            modelValue: r.component.html,
            "onUpdate:modelValue": e[2] || (e[2] = (u) => r.component.html = u)
          }, null, 8, ["modelValue"])
        ])) : $t("", !0),
        r.component.type == "new-view" ? (L(), z("div", BP, [
          $P,
          Ne(S("select", {
            class: "form-select",
            name: "view",
            id: "view",
            "onUpdate:modelValue": e[3] || (e[3] = (u) => r.component.view = u)
          }, [
            FP,
            (L(!0), z(Ve, null, St(r.views, (u) => (L(), z("option", {
              key: u,
              value: u
            }, Ie(u), 9, VP))), 128))
          ], 512), [
            [wi, r.component.view]
          ])
        ])) : $t("", !0)
      ], 64)) : $t("", !0),
      S("div", zP, [
        HP,
        Ne(S("select", {
          class: "form-select",
          name: "cms_template_section_id",
          id: "cms_template_section_id",
          "onUpdate:modelValue": e[4] || (e[4] = (u) => r.component.cms_template_section_id = u)
        }, [
          WP,
          (L(!0), z(Ve, null, St(t.templateSections, (u) => (L(), z("option", {
            key: u.id,
            value: u.id
          }, Ie(u.name), 9, UP))), 128))
        ], 512), [
          [wi, r.component.cms_template_section_id]
        ])
      ]),
      jP,
      S("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Component ", 8, KP)
    ])
  ], 32);
}
const JP = /* @__PURE__ */ xe(_P, [["render", qP]]), GP = {
  name: "LaravelCmsAdminPageEditComponentForm",
  props: ["templateSections", "component"],
  components: { WysiwygEditor: hl },
  setup(n, { emit: e }) {
    const t = be([]);
    async function r() {
      const u = await (await fetch("/api/cms-views")).json();
      t.value = u.data;
    }
    async function i() {
      !this.valid || e("update", n.component);
    }
    const o = Ee(() => Jt.exports.sortBy(n.globalComponents || [], (c) => c.name)), a = Ee(() => !0);
    return r(), { componentsSorted: o, views: t, valid: a, onSubmit: i };
  }
}, XP = /* @__PURE__ */ S("legend", null, "Edit Component", -1), YP = { class: "form-group mx-2" }, ZP = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), QP = {
  key: 0,
  class: "form-group mx-2"
}, eL = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "view"
}, "Laravel View", -1), tL = /* @__PURE__ */ S("option", { value: "" }, "Select", -1), nL = ["value"], rL = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "html"
}, "Body", -1), iL = { class: "form-group mx-2" }, oL = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "cms_template_section_id"
}, "Template Section", -1), sL = /* @__PURE__ */ S("option", { value: "" }, "Select", -1), aL = ["value"], lL = /* @__PURE__ */ S("button", {
  class: "btn mx-2",
  style: { float: "right" },
  disabled: 1
}, " Cancel ", -1), cL = ["disabled"];
function uL(n, e, t, r, i, o) {
  const a = le("wysiwyg-editor");
  return L(), z("form", {
    onSubmit: e[4] || (e[4] = Je((...c) => r.onSubmit && r.onSubmit(...c), ["prevent"]))
  }, [
    S("fieldset", null, [
      XP,
      S("div", YP, [
        ZP,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (c) => t.component.name = c)
        }, null, 512), [
          [Ze, t.component.name]
        ])
      ]),
      t.component.view ? (L(), z("div", QP, [
        eL,
        Ne(S("select", {
          class: "form-select",
          name: "view",
          id: "view",
          "onUpdate:modelValue": e[1] || (e[1] = (c) => t.component.view = c)
        }, [
          tL,
          (L(!0), z(Ve, null, St(r.views, (c) => (L(), z("option", {
            key: c,
            value: c
          }, Ie(c), 9, nL))), 128))
        ], 512), [
          [wi, t.component.view]
        ])
      ])) : (L(), z(Ve, { key: 1 }, [
        rL,
        Me(a, {
          modelValue: t.component.html,
          "onUpdate:modelValue": e[2] || (e[2] = (c) => t.component.html = c)
        }, null, 8, ["modelValue"])
      ], 64)),
      S("div", iL, [
        oL,
        Ne(S("select", {
          class: "form-select",
          name: "cms_template_section_id",
          id: "cms_template_section_id",
          "onUpdate:modelValue": e[3] || (e[3] = (c) => t.component.cms_template_section_id = c)
        }, [
          sL,
          (L(!0), z(Ve, null, St(t.templateSections, (c) => (L(), z("option", {
            key: c.id,
            value: c.id
          }, Ie(c.name), 9, aL))), 128))
        ], 512), [
          [wi, t.component.cms_template_section_id]
        ])
      ]),
      lL,
      S("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Update Component ", 8, cL)
    ])
  ], 32);
}
const fL = /* @__PURE__ */ xe(GP, [["render", uL]]), dL = {
  name: "LaravelCmsAdminPageContent",
  props: ["page"],
  components: {
    UnsortedComponents: gP,
    TemplateSections: SP,
    ComponentAddForm: JP,
    ComponentEditForm: fL
  },
  setup(n, { emit: e }) {
    const t = be(n.page.components), r = be([]), i = be(null);
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
        }), k = await b.json();
        if (!b.ok) {
          fe({
            title: k.message,
            type: "error"
          });
          return;
        }
        t.value.push(
          Object.assign(h, k.data.component)
        ), fe({
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
        fe({
          title: y.message,
          type: "error"
        });
        return;
      }
      t.value.push(Object.assign(h, y.data)), fe({
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
        fe({
          title: y.message,
          type: "error"
        });
        return;
      }
      t.value.splice(
        t.value.map((b) => b.id).indexOf(h.id),
        1
      ), fe({
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
        fe({
          title: y.message,
          type: "error"
        });
        return;
      }
      t.value.splice(
        t.value.map((b) => b.id).indexOf(h.id),
        1,
        Object.assign(h, y.data)
      ), fe({
        title: "Component update.",
        type: "success"
      });
    }
    const d = Ee(() => {
      var b;
      const g = (((b = n.page.template) == null ? void 0 : b.template_sections) || []).map(function(k) {
        return k.id;
      }), y = Jt.exports.filter(t.value, (k) => !k.cms_template_section_id || g.indexOf(
        k.cms_template_section_id
      ) == -1);
      return Jt.exports.sortBy(y, "sort_order");
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
}, pL = { class: "container" }, hL = { class: "columns" }, mL = { class: "column col-6" }, gL = { class: "column col-6" };
function yL(n, e, t, r, i, o) {
  var p, h, g, y, b, k, C, A, D;
  const a = le("unsorted-components"), c = le("template-sections"), u = le("component-edit-form"), d = le("component-add-form");
  return L(), z("div", pL, [
    S("div", hL, [
      S("div", mL, [
        r.unsortedComponents.length > 0 ? (L(), dt(a, {
          key: 0,
          "template-sections": (h = (p = t.page) == null ? void 0 : p.template) == null ? void 0 : h.template_sections,
          components: r.unsortedComponents,
          onSelect: r.selectComponent,
          onDelete: r.deleteComponent
        }, null, 8, ["template-sections", "components", "onSelect", "onDelete"])) : $t("", !0),
        Me(c, {
          "template-sections": (y = (g = t.page) == null ? void 0 : g.template) == null ? void 0 : y.template_sections,
          components: (b = t.page) == null ? void 0 : b.components,
          onSelect: r.selectComponent,
          onDelete: r.deleteComponent
        }, null, 8, ["template-sections", "components", "onSelect", "onDelete"])
      ]),
      S("div", gL, [
        r.selectedComponent ? (L(), dt(u, {
          key: 0,
          component: r.selectedComponent,
          "template-sections": (C = (k = t.page) == null ? void 0 : k.template) == null ? void 0 : C.template_sections,
          onUpdate: r.onUpdateComponent
        }, {
          default: ct(() => [
            xt("EDIT")
          ]),
          _: 1
        }, 8, ["component", "template-sections", "onUpdate"])) : (L(), dt(d, {
          key: 1,
          "template-sections": (D = (A = t.page) == null ? void 0 : A.template) == null ? void 0 : D.template_sections,
          "global-components": r.globalComponents,
          onAdd: r.onAddComponent
        }, null, 8, ["template-sections", "global-components", "onAdd"]))
      ])
    ])
  ]);
}
const vL = /* @__PURE__ */ xe(dL, [["render", yL]]), bL = {
  name: "LaravelCmsAdminPagePreviewContent",
  props: ["pageId"],
  async setup(n, { emit: e }) {
    const t = be(null);
    async function r() {
      const a = await (await fetch("/api/cms-render", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN")
        },
        method: "POST",
        body: JSON.stringify({ cms_page_id: n.pageId })
      })).json();
      t.value = a.data;
    }
    return await r(), { content: Ee(() => t.value.html) };
  }
}, wL = ["innerHTML"];
function xL(n, e, t, r, i, o) {
  return L(), z("div", { innerHTML: r.content }, null, 8, wL);
}
const SL = /* @__PURE__ */ xe(bL, [["render", xL]]), _L = {
  name: "LaravelCmsAdminPagePreviewContent",
  props: ["page"],
  components: { PageContent: SL },
  setup(n, { emit: e }) {
    return {};
  }
};
function kL(n, e, t, r, i, o) {
  const a = le("page-content");
  return L(), dt(M_, null, {
    default: ct(() => [
      Me(a, {
        "page-id": t.page.id
      }, null, 8, ["page-id"])
    ]),
    _: 1
  });
}
const CL = /* @__PURE__ */ xe(_L, [["render", kL]]), EL = {
  name: "LaravelCmsAdminPageMainForm",
  props: ["page", "templates"],
  components: {},
  setup(n, { emit: e }) {
    return {};
  }
}, OL = { class: "form-group" }, TL = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), AL = { class: "form-group" }, ML = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "path"
}, "Path", -1), NL = {
  key: 0,
  class: "form-group"
}, DL = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "template"
}, "Template", -1), RL = ["value"];
function IL(n, e, t, r, i, o) {
  var a;
  return L(), z("fieldset", null, [
    S("div", OL, [
      TL,
      Ne(S("input", {
        class: "form-input",
        type: "text",
        name: "name",
        id: "name",
        "onUpdate:modelValue": e[0] || (e[0] = (c) => t.page.name = c)
      }, null, 512), [
        [Ze, t.page.name]
      ])
    ]),
    S("div", AL, [
      ML,
      Ne(S("input", {
        class: "form-input",
        type: "text",
        name: "path",
        id: "path",
        "onUpdate:modelValue": e[1] || (e[1] = (c) => t.page.path = c)
      }, null, 512), [
        [Ze, t.page.path]
      ])
    ]),
    (a = t.templates) != null && a.length ? (L(), z("div", NL, [
      DL,
      Ne(S("select", {
        class: "form-select",
        name: "template",
        id: "template",
        "onUpdate:modelValue": e[2] || (e[2] = (c) => t.page.cms_template_id = c)
      }, [
        (L(!0), z(Ve, null, St(t.templates, (c) => (L(), z("option", {
          key: c.id,
          value: c.id
        }, Ie(c.name), 9, RL))), 128))
      ], 512), [
        [
          wi,
          t.page.cms_template_id,
          void 0,
          { number: !0 }
        ]
      ])
    ])) : $t("", !0)
  ]);
}
const PL = /* @__PURE__ */ xe(EL, [["render", IL]]), LL = {
  name: "LaravelCmsAdminPageSeoForm",
  props: ["page"],
  components: {},
  setup(n, { emit: e }) {
    return {};
  }
}, BL = { class: "form-group" }, $L = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "title"
}, "Title", -1), FL = { class: "form-group" }, VL = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "keywords"
}, "Meta Keywords", -1), zL = { class: "form-group" }, HL = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "keywords"
}, "Meta Description", -1);
function WL(n, e, t, r, i, o) {
  return L(), z("fieldset", null, [
    S("div", BL, [
      $L,
      Ne(S("input", {
        class: "form-input",
        type: "text",
        name: "title",
        id: "title",
        "onUpdate:modelValue": e[0] || (e[0] = (a) => t.page.title = a)
      }, null, 512), [
        [Ze, t.page.title]
      ])
    ]),
    S("div", FL, [
      VL,
      Ne(S("input", {
        class: "form-input",
        type: "text",
        name: "meta_keywords",
        id: "meta_keywords",
        "onUpdate:modelValue": e[1] || (e[1] = (a) => t.page.meta_keywords = a)
      }, null, 512), [
        [Ze, t.page.meta_keywords]
      ])
    ]),
    S("div", zL, [
      HL,
      Ne(S("textarea", {
        class: "form-input",
        name: "meta_description",
        id: "meta_description",
        "onUpdate:modelValue": e[2] || (e[2] = (a) => t.page.meta_description = a)
      }, null, 512), [
        [Ze, t.page.meta_description]
      ])
    ])
  ]);
}
const UL = /* @__PURE__ */ xe(LL, [["render", WL]]), jL = {
  name: "LaravelCmsAdminPage",
  components: {
    PageContent: vL,
    PagePaths: nP,
    PagePreview: CL,
    MainForm: PL,
    SeoForm: UL
  },
  props: ["id"],
  setup(n) {
    const e = be(null), t = be(null), r = be(null), i = be([]);
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
        fe({
          title: p.message,
          type: "error"
        });
        return;
      }
      e.value = p.data, r.value = Object.assign({}, e.value), fe({
        title: "Page updated.",
        type: "success"
      });
    }
    Promise.all([o(), a()]);
    const u = Ee(() => JSON.stringify(r.value) != JSON.stringify(e.value));
    return {
      tab: t,
      page: e,
      templates: i,
      saveEnabled: u,
      onSubmit: c
    };
  }
}, KL = { key: 0 }, qL = {
  class: "tab",
  style: { "margin-bottom": "1rem" }
}, JL = {
  key: 0,
  class: "container"
}, GL = { class: "columns" }, XL = { class: "column col-6" }, YL = ["disabled"];
function ZL(n, e, t, r, i, o) {
  const a = le("router-link"), c = le("main-form"), u = le("seo-form"), d = le("page-paths"), p = le("page-content"), h = le("page-preview");
  return L(), z("div", null, [
    S("p", null, [
      Me(a, { to: "/pages" }, {
        default: ct(() => [
          xt("< Back")
        ]),
        _: 1
      })
    ]),
    r.page ? (L(), z("div", KL, [
      S("h2", null, "Edit Page: " + Ie(r.page.name), 1),
      S("ul", qL, [
        S("li", {
          class: Mt(["tab-item", { active: r.tab == "main" || !r.tab }])
        }, [
          S("a", {
            href: "#",
            onClick: e[0] || (e[0] = Je((g) => r.tab = "main", ["prevent"]))
          }, "Main")
        ], 2),
        S("li", {
          class: Mt(["tab-item", { active: r.tab == "seo" }])
        }, [
          S("a", {
            href: "#",
            onClick: e[1] || (e[1] = Je((g) => r.tab = "seo", ["prevent"]))
          }, "SEO")
        ], 2),
        S("li", {
          class: Mt(["tab-item", { active: r.tab == "paths" }])
        }, [
          S("a", {
            href: "#",
            onClick: e[2] || (e[2] = Je((g) => r.tab = "paths", ["prevent"]))
          }, "Paths")
        ], 2),
        S("li", {
          class: Mt(["tab-item", { active: r.tab == "content" }])
        }, [
          S("a", {
            href: "#",
            onClick: e[3] || (e[3] = Je((g) => r.tab = "content", ["prevent"]))
          }, "Content")
        ], 2),
        S("li", {
          class: Mt(["tab-item", { active: r.tab == "preview" }])
        }, [
          S("a", {
            href: "#",
            onClick: e[4] || (e[4] = Je((g) => r.tab = "preview", ["prevent"]))
          }, "Preview")
        ], 2)
      ]),
      r.tab == "main" || r.tab == "seo" || !r.tab ? (L(), z("div", JL, [
        S("div", GL, [
          S("div", XL, [
            S("form", {
              onSubmit: e[5] || (e[5] = Je((...g) => r.onSubmit && r.onSubmit(...g), ["prevent"]))
            }, [
              Ne(Me(c, { page: r.page }, null, 8, ["page"]), [
                [Hp, r.tab == "main" || !r.tab]
              ]),
              Ne(Me(u, { page: r.page }, null, 8, ["page"]), [
                [Hp, r.tab == "seo"]
              ]),
              S("button", {
                class: "btn btn-primary",
                disabled: !r.saveEnabled
              }, " Update ", 8, YL)
            ], 32)
          ])
        ])
      ])) : $t("", !0),
      r.tab == "paths" ? (L(), dt(d, {
        key: 1,
        page: r.page
      }, null, 8, ["page"])) : $t("", !0),
      r.tab == "content" ? (L(), dt(p, {
        key: 2,
        page: r.page
      }, null, 8, ["page"])) : $t("", !0),
      r.tab == "preview" ? (L(), dt(h, {
        key: 3,
        page: r.page
      }, null, 8, ["page"])) : $t("", !0)
    ])) : $t("", !0)
  ]);
}
const QL = /* @__PURE__ */ xe(jL, [["render", ZL]]), e2 = {
  name: "LaravelCmsAdminPagesListItem",
  props: ["path"],
  setup(n, { emit: e }) {
    async function t() {
      e("delete", n.path.id);
    }
    return { onDeleteClick: t };
  }
};
function t2(n, e, t, r, i, o) {
  const a = le("router-link");
  return L(), z("tr", null, [
    S("td", null, Ie(t.path.id), 1),
    S("td", null, Ie(t.path.cms_page_id), 1),
    S("td", null, [
      Me(a, {
        to: "/paths/" + t.path.id
      }, {
        default: ct(() => [
          xt(Ie(t.path.path), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    S("td", null, [
      S("button", {
        onClick: e[0] || (e[0] = Je((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const n2 = /* @__PURE__ */ xe(e2, [["render", t2]]), r2 = {
  name: "LaravelCmsAdminPaths",
  components: {
    ListItem: n2
  },
  setup(n, { emit: e }) {
    const t = be([]), r = be(!1);
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
        fe({
          title: json.message,
          type: "error"
        });
        return;
      }
      fe({
        title: "Path deleted.",
        type: "warn"
      });
      var d = t.value.map((p) => p.id).indexOf(c);
      ~d && t.value.splice(d, 1);
    }
    return i(), {
      pathsSorted: Ee(() => Jt.exports.sortBy(t.value || [], (c) => c.path)),
      loaded: r,
      onDelete: o
    };
  }
}, i2 = /* @__PURE__ */ S("h2", null, "Paths", -1), o2 = {
  key: 0,
  class: "table"
}, s2 = /* @__PURE__ */ S("tr", null, [
  /* @__PURE__ */ S("th", null, "Id"),
  /* @__PURE__ */ S("th", null, "Page Id"),
  /* @__PURE__ */ S("th", { colspan: "2" }, "Path")
], -1), a2 = { key: 1 }, l2 = { key: 2 };
function c2(n, e, t, r, i, o) {
  const a = le("list-item");
  return L(), z(Ve, null, [
    i2,
    r.loaded && r.pathsSorted.length ? (L(), z("table", o2, [
      s2,
      (L(!0), z(Ve, null, St(r.pathsSorted, (c) => (L(), dt(a, {
        key: c.id,
        path: c,
        onDelete: r.onDelete
      }, null, 8, ["path", "onDelete"]))), 128))
    ])) : r.loaded ? (L(), z("p", a2, "There are no paths.")) : (L(), z("p", l2, "Loading..."))
  ], 64);
}
const u2 = /* @__PURE__ */ xe(r2, [["render", c2]]), f2 = {
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
function d2(n, e, t, r, i, o) {
  const a = le("router-link");
  return L(), z("tr", null, [
    S("td", null, Ie(t.template.id), 1),
    S("td", null, [
      Me(a, {
        to: "/templates/" + t.template.id
      }, {
        default: ct(() => [
          xt(Ie(t.template.name), 1)
        ]),
        _: 1
      }, 8, ["to"])
    ]),
    S("td", null, Ie(t.template.identifier), 1),
    S("td", null, [
      S("button", {
        onClick: e[0] || (e[0] = Je((...c) => r.onDeleteClick && r.onDeleteClick(...c), ["prevent"])),
        class: "btn btn-link text-error"
      }, " Delete ")
    ])
  ]);
}
const p2 = /* @__PURE__ */ xe(f2, [["render", d2]]), h2 = {
  name: "LaravelCmsAdminTemplateAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = be({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = Ee(() => t.value.name != null && t.value.identifier != null);
    return { newTemplate: t, onSubmit: r, valid: i };
  }
}, m2 = { class: "form-group form-inline mx-2" }, g2 = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), y2 = { class: "form-group form-inline mx-2" }, v2 = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), b2 = ["disabled"];
function w2(n, e, t, r, i, o) {
  return L(), z("form", {
    onSubmit: e[2] || (e[2] = Je((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    S("fieldset", null, [
      S("div", m2, [
        g2,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newTemplate.name = a)
        }, null, 512), [
          [Ze, r.newTemplate.name]
        ])
      ]),
      S("div", y2, [
        v2,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newTemplate.identifier = a)
        }, null, 512), [
          [Ze, r.newTemplate.identifier]
        ])
      ]),
      S("button", {
        class: "btn btn-primary mx-2",
        disabled: !r.valid
      }, " Add Template ", 8, b2)
    ])
  ], 32);
}
const x2 = /* @__PURE__ */ xe(h2, [["render", w2]]), S2 = {
  name: "LaravelCmsAdminTemplates",
  components: {
    ListItem: p2,
    AddForm: x2
  },
  setup(n, { emit: e }) {
    const t = og(), r = Ei("$cookies"), i = be([]), o = be(!1);
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
        fe({
          title: g.message,
          type: "error"
        });
        return;
      }
      i.value.push(g.data), fe({
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
        fe({
          title: json.message,
          type: "error"
        });
        return;
      }
      fe({
        title: "Template deleted.",
        type: "warn"
      });
      var g = i.value.map((y) => y.id).indexOf(p);
      ~g && i.value.splice(g, 1);
    }
    return a(), {
      templatesSorted: Ee(() => Jt.exports.sortBy(i.value || [], (p) => p.name)),
      loaded: o,
      onAdd: c,
      onDelete: u
    };
  }
}, _2 = /* @__PURE__ */ S("h2", null, "Add Template", -1), k2 = /* @__PURE__ */ S("h2", null, "Existing Templates", -1), C2 = {
  key: 0,
  class: "table"
}, E2 = { key: 1 }, O2 = { key: 2 };
function T2(n, e, t, r, i, o) {
  const a = le("add-form"), c = le("list-item");
  return L(), z(Ve, null, [
    _2,
    Me(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    k2,
    r.loaded && r.templatesSorted.length ? (L(), z("table", C2, [
      (L(!0), z(Ve, null, St(r.templatesSorted, (u) => (L(), dt(c, {
        key: u.id,
        template: u,
        onDelete: r.onDelete
      }, null, 8, ["template", "onDelete"]))), 128))
    ])) : r.loaded ? (L(), z("p", E2, "There are no templates.")) : (L(), z("p", O2, "Loading..."))
  ], 64);
}
const A2 = /* @__PURE__ */ xe(S2, [["render", T2]]), M2 = (n, e) => {
  let t;
  return (...r) => {
    t && clearTimeout(t), t = setTimeout(() => {
      n(...r);
    }, e);
  };
}, N2 = {
  name: "LaravelCmsAdminTemplatesListItem",
  props: ["section"],
  emits: ["delete", "save"],
  setup(n, { emit: e }) {
    Ga(n.section, (i, o) => {
      r();
    });
    async function t() {
      e("delete", n.section.id);
    }
    const r = M2(() => {
      e("save", n.section);
    }, 1e3);
    return { onDeleteClick: t };
  }
}, D2 = { class: "form-group form-inline mx-2" }, R2 = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), I2 = { class: "form-group form-inline mx-2" }, P2 = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "identifier"
}, "Slug", -1);
function L2(n, e, t, r, i, o) {
  return L(), z("fieldset", null, [
    S("div", D2, [
      R2,
      Ne(S("input", {
        class: "form-input",
        type: "text",
        name: "name",
        id: "name",
        "onUpdate:modelValue": e[0] || (e[0] = (a) => t.section.name = a)
      }, null, 512), [
        [Ze, t.section.name]
      ])
    ]),
    S("div", I2, [
      P2,
      Ne(S("input", {
        class: "form-input",
        type: "text",
        name: "identifier",
        id: "identifier",
        "onUpdate:modelValue": e[1] || (e[1] = (a) => t.section.identifier = a)
      }, null, 512), [
        [Ze, t.section.identifier]
      ])
    ]),
    S("button", {
      class: "btn btn-link text-error mx-2",
      onClick: e[2] || (e[2] = Je((...a) => r.onDeleteClick && r.onDeleteClick(...a), ["prevent"]))
    }, " Delete ")
  ]);
}
const B2 = /* @__PURE__ */ xe(N2, [["render", L2]]), $2 = {
  name: "LaravelCmsAdminTemplateSectionAddForm",
  components: {},
  emits: ["add"],
  setup(n, { emit: e }) {
    const t = be({});
    async function r() {
      !this.valid || (e("add", t.value), t.value = {});
    }
    const i = Ee(() => t.value.name != null && t.value.identifier != null);
    return { newTemplateSection: t, onSubmit: r, valid: i };
  }
}, F2 = /* @__PURE__ */ S("legend", null, "Add Section", -1), V2 = { class: "form-group form-inline mx-2" }, z2 = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), H2 = { class: "form-group form-inline mx-2" }, W2 = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), U2 = ["disabled"];
function j2(n, e, t, r, i, o) {
  return L(), z("form", {
    onSubmit: e[2] || (e[2] = Je((...a) => r.onSubmit && r.onSubmit(...a), ["prevent"]))
  }, [
    S("fieldset", null, [
      F2,
      S("div", V2, [
        z2,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "name",
          id: "name",
          "onUpdate:modelValue": e[0] || (e[0] = (a) => r.newTemplateSection.name = a),
          required: ""
        }, null, 512), [
          [Ze, r.newTemplateSection.name]
        ])
      ]),
      S("div", H2, [
        W2,
        Ne(S("input", {
          class: "form-input",
          type: "text",
          name: "identifier",
          id: "identifier",
          "onUpdate:modelValue": e[1] || (e[1] = (a) => r.newTemplateSection.identifier = a)
        }, null, 512), [
          [Ze, r.newTemplateSection.identifier]
        ])
      ]),
      S("button", {
        class: "btn btn-link mx-2",
        disabled: !r.valid
      }, " Add Template Section ", 8, U2)
    ])
  ], 32);
}
const K2 = /* @__PURE__ */ xe($2, [["render", j2]]), q2 = {
  name: "LaravelCmsAdminTemplateSections",
  components: {
    AddForm: K2,
    ListItem: B2
  },
  props: ["templateId"],
  setup(n) {
    const e = be([]), t = be(!1);
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
        fe({
          title: json.message,
          type: "error"
        });
        return;
      }
      fe({
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
        fe({
          title: p.message,
          type: "error"
        });
        return;
      }
      fe({
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
        fe({
          title: p.message,
          type: "error"
        });
        return;
      }
      e.value.push(p.data), fe({
        title: "New template section created.",
        type: "success"
      });
    }
    return r(), {
      sectionsSorted: Ee(() => Jt.exports.sortBy(e.value || [], (u) => u.name)),
      loaded: t,
      onDelete: i,
      onSave: o,
      onAdd: a
    };
  }
}, J2 = { key: 0 }, G2 = /* @__PURE__ */ S("div", { class: "divider" }, null, -1), X2 = { key: 0 }, Y2 = { key: 1 }, Z2 = { key: 2 };
function Q2(n, e, t, r, i, o) {
  const a = le("add-form"), c = le("list-item");
  return r.sectionsSorted ? (L(), z("fieldset", J2, [
    Me(a, { onAdd: r.onAdd }, null, 8, ["onAdd"]),
    G2,
    r.loaded && r.sectionsSorted.length ? (L(), z("div", X2, [
      (L(!0), z(Ve, null, St(r.sectionsSorted, (u) => (L(), dt(c, {
        key: u.id,
        section: u,
        onDelete: r.onDelete,
        onSave: r.onSave
      }, null, 8, ["section", "onDelete", "onSave"]))), 128))
    ])) : r.loaded ? (L(), z("p", Y2, "There are no templates sections.")) : (L(), z("p", Z2, "Loading..."))
  ])) : $t("", !0);
}
const eB = /* @__PURE__ */ xe(q2, [["render", Q2]]), tB = {
  name: "LaravelCmsAdminTemplate",
  components: { TemplateSections: eB, WysiwygEditor: hl },
  props: ["id"],
  setup(n) {
    const e = be(null), t = be(null);
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
        fe({
          title: c.message,
          type: "error"
        });
        return;
      }
      e.value = c.data, t.value = Object.assign({}, e.value), fe({
        title: "Template updated.",
        type: "success"
      });
    }
    r();
    const o = Ee(() => JSON.stringify(t.value) != JSON.stringify(e.value));
    return { template: e, onSubmit: i, saveEnabled: o };
  }
}, nB = /* @__PURE__ */ S("h2", null, "Edit Template", -1), rB = { class: "form-group form-inline mx-2" }, iB = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "name"
}, "Name", -1), oB = { class: "form-group form-inline mx-2" }, sB = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "identifier"
}, "Identifier", -1), aB = { class: "form-group form-inline mx-2" }, lB = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "description"
}, "Description", -1), cB = { class: "form-group mx-2" }, uB = /* @__PURE__ */ S("label", {
  class: "form-label",
  for: "html"
}, "Body", -1), fB = ["disabled"], dB = /* @__PURE__ */ S("h2", null, "Template Sections", -1);
function pB(n, e, t, r, i, o) {
  const a = le("router-link"), c = le("wysiwyg-editor"), u = le("template-sections");
  return L(), z(Ve, null, [
    S("p", null, [
      Me(a, { to: "/templates" }, {
        default: ct(() => [
          xt("< Back")
        ]),
        _: 1
      })
    ]),
    nB,
    r.template ? (L(), z("form", {
      key: 0,
      onSubmit: e[4] || (e[4] = Je((...d) => r.onSubmit && r.onSubmit(...d), ["prevent"]))
    }, [
      S("fieldset", null, [
        S("div", rB, [
          iB,
          Ne(S("input", {
            class: "form-input",
            type: "text",
            name: "name",
            id: "name",
            "onUpdate:modelValue": e[0] || (e[0] = (d) => r.template.name = d)
          }, null, 512), [
            [Ze, r.template.name]
          ])
        ]),
        S("div", oB, [
          sB,
          Ne(S("input", {
            class: "form-input",
            type: "text",
            name: "identifier",
            id: "identifier",
            "onUpdate:modelValue": e[1] || (e[1] = (d) => r.template.identifier = d)
          }, null, 512), [
            [Ze, r.template.identifier]
          ])
        ]),
        S("div", aB, [
          lB,
          Ne(S("input", {
            class: "form-input",
            type: "text",
            name: "description",
            id: "description",
            "onUpdate:modelValue": e[2] || (e[2] = (d) => r.template.description = d)
          }, null, 512), [
            [Ze, r.template.description]
          ])
        ])
      ]),
      S("fieldset", null, [
        S("div", cB, [
          uB,
          Me(c, {
            modelValue: r.template.html,
            "onUpdate:modelValue": e[3] || (e[3] = (d) => r.template.html = d)
          }, null, 8, ["modelValue"])
        ])
      ]),
      S("fieldset", null, [
        S("button", {
          class: "btn btn-link mx-2",
          disabled: !r.saveEnabled
        }, " Update ", 8, fB)
      ])
    ], 32)) : $t("", !0),
    dB,
    S("form", null, [
      Me(u, { "template-id": t.id }, null, 8, ["template-id"])
    ])
  ], 64);
}
const hB = /* @__PURE__ */ xe(tB, [["render", pB]]), mB = [
  {
    path: "/",
    name: "Home",
    component: Lm
  },
  {
    path: "/components",
    name: "Components",
    component: JR
  },
  {
    path: "/components/:id",
    name: "Component",
    component: MR,
    props: (n) => ({ id: parseInt(n.params.id) })
  },
  {
    path: "/pages",
    name: "Pages",
    component: Lm
  },
  {
    path: "/pages/:id",
    name: "Page",
    component: QL,
    props: (n) => ({ id: parseInt(n.params.id) })
  },
  {
    path: "/paths",
    name: "Paths",
    component: u2
  },
  {
    path: "/media",
    name: "Media",
    component: hI
  },
  {
    path: "/templates",
    name: "Templates",
    component: A2
  },
  {
    path: "/templates/:id",
    name: "Template",
    component: hB,
    props: (n) => ({ id: parseInt(n.params.id) })
  }
], gB = pC({
  history: dk(),
  routes: mB
});
var ev = { exports: {} };
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
})(ev);
const yB = ev.exports;
const bB = N_(V_).use(gB).use(LC).use(yB);
export {
  bB as default
};
