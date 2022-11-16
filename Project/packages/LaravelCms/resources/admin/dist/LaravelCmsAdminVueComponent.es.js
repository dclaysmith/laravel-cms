import { resolveComponent as _, openBlock as m, createElementBlock as u, createElementVNode as e, createVNode as n, withCtx as o, createTextVNode as s, Fragment as $ } from "vue";
const d = (c, l) => {
  const a = c.__vccOpts || c;
  for (const [i, r] of l)
    a[i] = r;
  return a;
}, h = {
  name: "LaravelCmsAdminMenu"
};
function x(c, l, a, i, r, p) {
  const t = _("router-link");
  return m(), u("ul", null, [
    e("li", null, [
      n(t, { to: "/templates" }, {
        default: o(() => [
          s("Templates")
        ]),
        _: 1
      })
    ]),
    e("li", null, [
      n(t, { to: "/pages" }, {
        default: o(() => [
          s("Pages")
        ]),
        _: 1
      })
    ]),
    e("li", null, [
      n(t, { to: "/paths" }, {
        default: o(() => [
          s("Paths")
        ]),
        _: 1
      })
    ]),
    e("li", null, [
      n(t, { to: "/components" }, {
        default: o(() => [
          s("Components")
        ]),
        _: 1
      })
    ]),
    e("li", null, [
      n(t, { to: "/media" }, {
        default: o(() => [
          s("Media")
        ]),
        _: 1
      })
    ])
  ]);
}
const C = /* @__PURE__ */ d(h, [["render", x]]);
const g = {
  name: "LaravelCmsAdminVueComponent",
  components: {
    AdminMenu: C
  }
}, k = { class: "cms-container" }, A = { class: "cms-menu" }, V = { class: "cms-content" };
function M(c, l, a, i, r, p) {
  const t = _("notifications"), f = _("admin-menu"), v = _("router-view");
  return m(), u($, null, [
    n(t),
    e("div", k, [
      e("div", A, [
        n(f)
      ]),
      e("div", V, [
        n(v)
      ])
    ])
  ], 64);
}
const y = /* @__PURE__ */ d(g, [["render", M]]);
export {
  y as default
};
