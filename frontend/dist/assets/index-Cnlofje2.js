var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (e && (t = e((e = 0))), t),
  s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  c = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return n || t(r, Symbol.toStringTag, { value: `Module` }), r;
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        (d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            });
    return e;
  },
  u = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    l(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n
    )
  ),
  d = (e) =>
    a.call(e, `module.exports`)
      ? e[`module.exports`]
      : l(t({}, `__esModule`, { value: !0 }), e);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
        ? (t.credentials = `omit`)
        : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var f = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      });
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    var x = (b.prototype = new y());
    (x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0);
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      ee = Object.prototype.hasOwnProperty;
    function te(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function ne(e, t) {
      return te(e.type, t, e.props);
    }
    function re(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function T(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ie = /\/+/g;
    function E(e, t) {
      return typeof e == `object` && e && e.key != null
        ? T(`` + e.key)
        : t.toString(36);
    }
    function ae(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  }
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function oe(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return (c = e._init), oe(c(e._payload), r, i, a, o);
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + E(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(ie, `$&/`) + `/`),
              oe(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (re(o) &&
                (o = ne(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ie, `$&/`) + `/`) +
                    c
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          (a = e[u]), (s = l + E(a, u)), (c += oe(a, r, i, s, o));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          (a = a.value), (s = l + E(a, u++)), (c += oe(a, r, i, s, o));
      else if (s === `object`) {
        if (typeof e.then == `function`) return oe(ae(e), r, i, a, o);
        throw (
          ((r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`
          ))
        );
      }
      return c;
    }
    function se(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        oe(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function D(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var O =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      k = {
        map: se,
        forEach: function (e, t, n) {
          se(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            se(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            se(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!re(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`
            );
          return e;
        },
      };
    (e.Activity = f),
      (e.Children = k),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !ee.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return te(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            ee.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return te(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = re),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: D };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, O);
        } catch (e) {
          O(e);
        } finally {
          t !== null && n.types !== null && (t.types = n.types), (w.T = t);
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.5`);
  }),
  p = s((e, t) => {
    t.exports = f();
  }),
  m = s((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) (e[r] = t), (e[n] = a), (n = r);
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) (e[r] = u), (e[l] = n), (r = l);
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          r(l), (i.sortIndex = i.expirationTime), t(c, i);
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) (m = !0), S || ((S = !0), re());
        else {
          var t = n(l);
          t !== null && E(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      ee = -1;
    function te() {
      return g ? !0 : !(e.unstable_now() - ee < w);
    }
    function ne() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        ee = t;
        var i = !0;
        try {
          a: {
            (m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0);
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && te());

                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    (d.callback = null), (f = d.priorityLevel);
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      (d.callback = s), b(t), (i = !0);
                      break b;
                    }
                    d === n(c) && r(c), b(t);
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  u !== null && E(x, u.startTime - t), (i = !1);
                }
              }
              break a;
            } finally {
              (d = null), (f = a), (p = !1);
            }
            i = void 0;
          }
        } finally {
          i ? re() : (S = !1);
        }
      }
    }
    var re;
    if (typeof y == `function`)
      re = function () {
        y(ne);
      };
    else if (typeof MessageChannel < `u`) {
      var T = new MessageChannel(),
        ie = T.port2;
      (T.port1.onmessage = ne),
        (re = function () {
          ie.postMessage(null);
        });
    } else
      re = function () {
        _(ne, 0);
      };
    function E(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), E(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), re()))),
          r
        );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      });
  }),
  h = s((e, t) => {
    t.exports = m();
  }),
  g = s((e) => {
    var t = p();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    (e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          (s.T = t), (i.p = n), i.d.f();
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o }
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.5`);
  }),
  _ = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = g());
  }),
  v = s((e) => {
    var t = h(),
      n = p(),
      r = _();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return l(a), e;
            if (s === r) return l(a), t;
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) (n = a), (r = s);
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              (c = !0), (n = a), (r = s);
              break;
            }
            if (u === r) {
              (c = !0), (r = a), (n = s);
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                (c = !0), (n = s), (r = a);
                break;
              }
              if (u === r) {
                (c = !0), (r = s), (n = a);
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function d(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = d(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var f = Object.assign,
      m = Symbol.for(`react.element`),
      g = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      ee = Symbol.for(`react.suspense`),
      te = Symbol.for(`react.suspense_list`),
      ne = Symbol.for(`react.memo`),
      re = Symbol.for(`react.lazy`),
      T = Symbol.for(`react.activity`),
      ie = Symbol.for(`react.memo_cache_sentinel`),
      E = Symbol.iterator;
    function ae(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (E && e[E]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var oe = Symbol.for(`react.client.reference`);
    function se(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case te:
          return `SuspenseList`;
        case T:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ne:
            return (
              (t = e.displayName || null), t === null ? se(e.type) || `Memo` : t
            );
          case re:
            (t = e._payload), (e = e._init);
            try {
              return se(e(t));
            } catch {}
        }
      return null;
    }
    var D = Array.isArray,
      O = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      k = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      ce = { pending: !1, data: null, method: null, action: null },
      le = [],
      ue = -1;
    function de(e) {
      return { current: e };
    }
    function fe(e) {
      0 > ue || ((e.current = le[ue]), (le[ue] = null), ue--);
    }
    function A(e, t) {
      ue++, (le[ue] = e.current), (e.current = t);
    }
    var pe = de(null),
      me = de(null),
      he = de(null),
      ge = de(null);
    function _e(e, t) {
      switch ((A(he, t), A(me, e), A(pe, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Gd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            (t = Gd(t)), (e = Kd(t, e));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      fe(pe), A(pe, e);
    }
    function ve() {
      fe(pe), fe(me), fe(he);
    }
    function ye(e) {
      e.memoizedState !== null && A(ge, e);
      var t = pe.current,
        n = Kd(t, e.type);
      t !== n && (A(me, e), A(pe, n));
    }
    function be(e) {
      me.current === e && (fe(pe), fe(me)),
        ge.current === e && (fe(ge), (np._currentValue = ce));
    }
    var xe, Se;
    function Ce(e) {
      if (xe === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          (xe = (t && t[1]) || ``),
            (Se =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                ? `@unknown:0:0`
                : ``);
        }
      return (
        `
` +
        xe +
        e +
        Se
      );
    }
    var we = !1;
    function Te(e, t) {
      if (!e || we) return ``;
      we = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, `props`, {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, `name`, {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);

          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);

          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];

            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        (we = !1), (Error.prepareStackTrace = n);
      }
      return (n = e ? e.displayName || e.name : ``) ? Ce(n) : ``;
    }
    function Ee(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ce(e.type);
        case 16:
          return Ce(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? Ce(`Suspense Fallback`)
            : Ce(`Suspense`);
        case 19:
          return Ce(`SuspenseList`);
        case 0:
        case 15:
          return Te(e.type, !1);
        case 11:
          return Te(e.type.render, !1);
        case 1:
          return Te(e.type, !0);
        case 31:
          return Ce(`Activity`);
        default:
          return ``;
      }
    }
    function De(e) {
      try {
        var t = ``,
          n = null;
        do (t += Ee(e, n)), (n = e), (e = e.return);
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Oe = Object.prototype.hasOwnProperty,
      ke = t.unstable_scheduleCallback,
      Ae = t.unstable_cancelCallback,
      je = t.unstable_shouldYield,
      Me = t.unstable_requestPaint,
      Ne = t.unstable_now,
      Pe = t.unstable_getCurrentPriorityLevel,
      Fe = t.unstable_ImmediatePriority,
      Ie = t.unstable_UserBlockingPriority,
      Le = t.unstable_NormalPriority,
      Re = t.unstable_LowPriority,
      ze = t.unstable_IdlePriority,
      Be = t.log,
      Ve = t.unstable_setDisableYieldValue,
      He = null,
      Ue = null;
    function We(e) {
      if (
        (typeof Be == `function` && Ve(e),
        Ue && typeof Ue.setStrictMode == `function`)
      )
        try {
          Ue.setStrictMode(He, e);
        } catch {}
    }
    var Ge = Math.clz32 ? Math.clz32 : Je,
      Ke = Math.log,
      qe = Math.LN2;
    function Je(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((Ke(e) / qe) | 0)) | 0;
    }
    var Ye = 256,
      Xe = 262144,
      Ze = 4194304;
    function Qe(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function $e(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Qe(n)))
                : (i = Qe(o))
              : (i = Qe(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Qe(n)))
                  : (i = Qe(o)))
              : (i = Qe(r))),
        i === 0
          ? 0
          : t !== 0 &&
            t !== i &&
            (t & a) === 0 &&
            ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
          ? t
          : i
      );
    }
    function et(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function tt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function nt() {
      var e = Ze;
      return (Ze <<= 1), !(Ze & 62914560) && (Ze = 4194304), e;
    }
    function rt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function it(e, t) {
      (e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }
    function at(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0);
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ge(n),
          d = 1 << u;
        (s[u] = 0), (c[u] = -1);
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      r !== 0 && ot(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t));
    }
    function ot(e, t, n) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var r = 31 - Ge(t);
      (e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930));
    }
    function st(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ge(n),
          i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
      }
    }
    function ct(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : lt(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function lt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ut(e) {
      return (
        (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function dt() {
      var e = k.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : vp(e.type)) : e;
    }
    function ft(e, t) {
      var n = k.p;
      try {
        return (k.p = e), t();
      } finally {
        k.p = n;
      }
    }
    var pt = Math.random().toString(36).slice(2),
      mt = `__reactFiber$` + pt,
      ht = `__reactProps$` + pt,
      gt = `__reactContainer$` + pt,
      _t = `__reactEvents$` + pt,
      vt = `__reactListeners$` + pt,
      yt = `__reactHandles$` + pt,
      bt = `__reactResources$` + pt,
      xt = `__reactMarker$` + pt;
    function St(e) {
      delete e[mt], delete e[ht], delete e[_t], delete e[vt], delete e[yt];
    }
    function Ct(e) {
      var t = e[mt];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[gt] || n[mt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = hf(e); e !== null; ) {
              if ((n = e[mt])) return n;
              e = hf(e);
            }
          return t;
        }
        (e = n), (n = e.parentNode);
      }
      return null;
    }
    function wt(e) {
      if ((e = e[mt] || e[gt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Tt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Et(e) {
      var t = e[bt];
      return (
        (t ||= e[bt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Dt(e) {
      e[xt] = !0;
    }
    var Ot = new Set(),
      kt = {};
    function At(e, t) {
      jt(e, t), jt(e + `Capture`, t);
    }
    function jt(e, t) {
      for (kt[e] = t, e = 0; e < t.length; e++) Ot.add(t[e]);
    }
    var Mt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`
      ),
      Nt = {},
      Pt = {};
    function Ft(e) {
      return Oe.call(Pt, e)
        ? !0
        : Oe.call(Nt, e)
        ? !1
        : Mt.test(e)
        ? (Pt[e] = !0)
        : ((Nt[e] = !0), !1);
    }
    function It(e, t, n) {
      if (Ft(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Lt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Rt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function zt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Bt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Vt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              (n = `` + e), a.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function Ht(e) {
      if (!e._valueTracker) {
        var t = Bt(e) ? `checked` : `value`;
        e._valueTracker = Vt(e, t, `` + e[t]);
      }
    }
    function Ut(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Bt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function Wt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Gt = /[\n"\\]/g;
    function Kt(e) {
      return e.replace(Gt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function qt(e, t, n, r, i, a, o, s) {
      (e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
          ? ((t === 0 && e.value === ``) || e.value != t) &&
            (e.value = `` + zt(t))
          : e.value !== `` + zt(t) && (e.value = `` + zt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Yt(e, o, zt(n))
          : Yt(e, o, zt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + zt(s))
          : e.removeAttribute(`name`);
    }
    function Jt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Ht(e);
          return;
        }
        (n = n == null ? `` : `` + zt(n)),
          (t = t == null ? n : `` + zt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Ht(e);
    }
    function Yt(e, t, n) {
      (t === `number` && Wt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Xt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = `` + zt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            (e[i].selected = !0), r && (e[i].defaultSelected = !0);
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Zt(e, t, n) {
      if (
        t != null &&
        ((t = `` + zt(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + zt(n);
    }
    function Qt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (D(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        (n ??= ``), (t = n);
      }
      (n = zt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Ht(e);
    }
    function $t(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var en = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `
      )
    );
    function tn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
          ? (e.cssFloat = ``)
          : (e[t] = ``)
        : r
        ? e.setProperty(t, n)
        : typeof n != `number` || n === 0 || en.has(t)
        ? t === `float`
          ? (e.cssFloat = n)
          : (e[t] = (`` + n).trim())
        : (e[t] = n + `px`);
    }
    function nn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
              ? (e.cssFloat = ``)
              : (e[r] = ``));
        for (var a in t)
          (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && tn(e, a, r);
      } else for (var o in t) t.hasOwnProperty(o) && tn(e, o, t[o]);
    }
    function rn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var an = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      on =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sn(e) {
      return on.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function cn() {}
    var ln = null;
    function un(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var dn = null,
      fn = null;
    function pn(e) {
      var t = wt(e);
      if (t && (e = t.stateNode)) {
        var n = e[ht] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (qt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Kt(`` + t) + `"][type="radio"]`
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[ht] || null;
                  if (!a) throw Error(i(90));
                  qt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                (r = n[t]), r.form === e.form && Ut(r);
            }
            break a;
          case `textarea`:
            Zt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            (t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
        }
      }
    }
    var mn = !1;
    function hn(e, t, n) {
      if (mn) return e(t, n);
      mn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((mn = !1),
          (dn !== null || fn !== null) &&
            (wu(), dn && ((t = dn), (e = fn), (fn = dn = null), pn(t), e)))
        )
          for (t = 0; t < e.length; t++) pn(e[t]);
      }
    }
    function gn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[ht] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r);
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var _n = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      vn = !1;
    if (_n)
      try {
        var yn = {};
        Object.defineProperty(yn, `passive`, {
          get: function () {
            vn = !0;
          },
        }),
          window.addEventListener(`test`, yn, yn),
          window.removeEventListener(`test`, yn, yn);
      } catch {
        vn = !1;
      }
    var bn = null,
      xn = null,
      Sn = null;
    function Cn() {
      if (Sn) return Sn;
      var e,
        t = xn,
        n = t.length,
        r,
        i = `value` in bn ? bn.value : bn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Sn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function wn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Tn() {
      return !0;
    }
    function En() {
      return !1;
    }
    function Dn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Tn
            : En),
          (this.isPropagationStopped = En),
          this
        );
      }
      return (
        f(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Tn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Tn));
          },
          persist: function () {},
          isPersistent: Tn,
        }),
        t
      );
    }
    var On = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      kn = Dn(On),
      An = f({}, On, { view: 0, detail: 0 }),
      jn = Dn(An),
      Mn,
      Nn,
      Pn,
      Fn = f({}, An, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Kn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Pn &&
                (Pn && e.type === `mousemove`
                  ? ((Mn = e.screenX - Pn.screenX),
                    (Nn = e.screenY - Pn.screenY))
                  : (Nn = Mn = 0),
                (Pn = e)),
              Mn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Nn;
        },
      }),
      In = Dn(Fn),
      Ln = Dn(f({}, Fn, { dataTransfer: 0 })),
      Rn = Dn(f({}, An, { relatedTarget: 0 })),
      zn = Dn(
        f({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      Bn = Dn(
        f({}, On, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      Vn = Dn(f({}, On, { data: 0 })),
      Hn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Un = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Wn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Gn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Wn[e])
        ? !!t[e]
        : !1;
    }
    function Kn() {
      return Gn;
    }
    var qn = Dn(
        f({}, An, {
          key: function (e) {
            if (e.key) {
              var t = Hn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = wn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
              ? Un[e.keyCode] || `Unidentified`
              : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Kn,
          charCode: function (e) {
            return e.type === `keypress` ? wn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? wn(e)
              : e.type === `keydown` || e.type === `keyup`
              ? e.keyCode
              : 0;
          },
        })
      ),
      Jn = Dn(
        f({}, Fn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      Yn = Dn(
        f({}, An, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Kn,
        })
      ),
      Xn = Dn(f({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Zn = Dn(
        f({}, Fn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
              ? -e.wheelDeltaY
              : `wheelDelta` in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      Qn = Dn(f({}, On, { newState: 0, oldState: 0 })),
      $n = [9, 13, 27, 32],
      er = _n && `CompositionEvent` in window,
      tr = null;
    _n && `documentMode` in document && (tr = document.documentMode);
    var nr = _n && `TextEvent` in window && !tr,
      rr = _n && (!er || (tr && 8 < tr && 11 >= tr)),
      ir = ` `,
      ar = !1;
    function or(e, t) {
      switch (e) {
        case `keyup`:
          return $n.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function sr(e) {
      return (
        (e = e.detail), typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var cr = !1;
    function lr(e, t) {
      switch (e) {
        case `compositionend`:
          return sr(t);
        case `keypress`:
          return t.which === 32 ? ((ar = !0), ir) : null;
        case `textInput`:
          return (e = t.data), e === ir && ar ? null : e;
        default:
          return null;
      }
    }
    function ur(e, t) {
      if (cr)
        return e === `compositionend` || (!er && or(e, t))
          ? ((e = Cn()), (Sn = xn = bn = null), (cr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return rr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var dr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function fr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!dr[e.type] : t === `textarea`;
    }
    function pr(e, t, n, r) {
      dn ? (fn ? fn.push(r) : (fn = [r])) : (dn = r),
        (t = Ad(t, `onChange`)),
        0 < t.length &&
          ((n = new kn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t }));
    }
    var mr = null,
      hr = null;
    function gr(e) {
      Cd(e, 0);
    }
    function _r(e) {
      if (Ut(Tt(e))) return e;
    }
    function vr(e, t) {
      if (e === `change`) return t;
    }
    var yr = !1;
    if (_n) {
      var br;
      if (_n) {
        var xr = `oninput` in document;
        if (!xr) {
          var Sr = document.createElement(`div`);
          Sr.setAttribute(`oninput`, `return;`),
            (xr = typeof Sr.oninput == `function`);
        }
        br = xr;
      } else br = !1;
      yr = br && (!document.documentMode || 9 < document.documentMode);
    }
    function Cr() {
      mr && (mr.detachEvent(`onpropertychange`, wr), (hr = mr = null));
    }
    function wr(e) {
      if (e.propertyName === `value` && _r(hr)) {
        var t = [];
        pr(t, hr, e, un(e)), hn(gr, t);
      }
    }
    function Tr(e, t, n) {
      e === `focusin`
        ? (Cr(), (mr = t), (hr = n), mr.attachEvent(`onpropertychange`, wr))
        : e === `focusout` && Cr();
    }
    function Er(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return _r(hr);
    }
    function Dr(e, t) {
      if (e === `click`) return _r(t);
    }
    function Or(e, t) {
      if (e === `input` || e === `change`) return _r(t);
    }
    function kr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Ar = typeof Object.is == `function` ? Object.is : kr;
    function jr(e, t) {
      if (Ar(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Oe.call(t, i) || !Ar(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Mr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Nr(e, t) {
      var n = Mr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Mr(n);
      }
    }
    function Pr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? Pr(e, t.parentNode)
          : `contains` in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function Fr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Wt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Wt(e.document);
      }
      return t;
    }
    function Ir(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Lr = _n && `documentMode` in document && 11 >= document.documentMode,
      Rr = null,
      zr = null,
      Br = null,
      Vr = !1;
    function Hr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Vr ||
        Rr == null ||
        Rr !== Wt(r) ||
        ((r = Rr),
        `selectionStart` in r && Ir(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Br && jr(Br, r)) ||
          ((Br = r),
          (r = Ad(zr, `onSelect`)),
          0 < r.length &&
            ((t = new kn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Rr))));
    }
    function Ur(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Wr = {
        animationend: Ur(`Animation`, `AnimationEnd`),
        animationiteration: Ur(`Animation`, `AnimationIteration`),
        animationstart: Ur(`Animation`, `AnimationStart`),
        transitionrun: Ur(`Transition`, `TransitionRun`),
        transitionstart: Ur(`Transition`, `TransitionStart`),
        transitioncancel: Ur(`Transition`, `TransitionCancel`),
        transitionend: Ur(`Transition`, `TransitionEnd`),
      },
      Gr = {},
      Kr = {};
    _n &&
      ((Kr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Wr.animationend.animation,
        delete Wr.animationiteration.animation,
        delete Wr.animationstart.animation),
      `TransitionEvent` in window || delete Wr.transitionend.transition);
    function qr(e) {
      if (Gr[e]) return Gr[e];
      if (!Wr[e]) return e;
      var t = Wr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Kr) return (Gr[e] = t[n]);
      return e;
    }
    var Jr = qr(`animationend`),
      Yr = qr(`animationiteration`),
      Xr = qr(`animationstart`),
      Zr = qr(`transitionrun`),
      Qr = qr(`transitionstart`),
      $r = qr(`transitioncancel`),
      ei = qr(`transitionend`),
      ti = new Map(),
      ni =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `
        );
    ni.push(`scrollEnd`);
    function ri(e, t) {
      ti.set(e, t), At(t, [e]);
    }
    var ii =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ai = [],
      oi = 0,
      si = 0;
    function ci() {
      for (var e = oi, t = (si = oi = 0); t < e; ) {
        var n = ai[t];
        ai[t++] = null;
        var r = ai[t];
        ai[t++] = null;
        var i = ai[t];
        ai[t++] = null;
        var a = ai[t];
        if (((ai[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i);
        }
        a !== 0 && j(n, i, a);
      }
    }
    function li(e, t, n, r) {
      (ai[oi++] = e),
        (ai[oi++] = t),
        (ai[oi++] = n),
        (ai[oi++] = r),
        (si |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r);
    }
    function ui(e, t, n, r) {
      return li(e, t, n, r), fi(e);
    }
    function di(e, t) {
      return li(e, null, null, t), fi(e);
    }
    function j(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        (a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return);
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ge(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function fi(e) {
      if (50 < hu) throw ((hu = 0), (gu = null), Error(i(185)));
      for (var t = e.return; t !== null; ) (e = t), (t = e.return);
      return e.tag === 3 ? e.stateNode : null;
    }
    var pi = {};
    function mi(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function hi(e, t, n, r) {
      return new mi(e, t, n, r);
    }
    function gi(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function _i(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = hi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function vi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function yi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) gi(e) && (s = 1);
      else if (typeof e == `string`)
        s = qf(e, n, pe.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
          ? 27
          : 5;
      else
        a: switch (e) {
          case T:
            return (e = hi(31, n, t, a)), (e.elementType = T), (e.lanes = o), e;
          case y:
            return bi(n.children, a, o, t);
          case b:
            (s = 8), (a |= 24);
            break;
          case x:
            return (
              (e = hi(12, n, t, a | 2)), (e.elementType = x), (e.lanes = o), e
            );
          case ee:
            return (
              (e = hi(13, n, t, a)), (e.elementType = ee), (e.lanes = o), e
            );
          case te:
            return (
              (e = hi(19, n, t, a)), (e.elementType = te), (e.lanes = o), e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case ne:
                  s = 14;
                  break a;
                case re:
                  (s = 16), (r = null);
                  break a;
              }
            (s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null);
        }
      return (
        (t = hi(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function bi(e, t, n, r) {
      return (e = hi(7, e, r, t)), (e.lanes = n), e;
    }
    function xi(e, t, n) {
      return (e = hi(6, e, null, t)), (e.lanes = n), e;
    }
    function Si(e) {
      var t = hi(18, null, null, 0);
      return (t.stateNode = e), t;
    }
    function Ci(e, t, n) {
      return (
        (t = hi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var wi = new WeakMap();
    function Ti(e, t) {
      if (typeof e == `object` && e) {
        var n = wi.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: De(t) }), wi.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: De(t) };
    }
    var Ei = [],
      Di = 0,
      Oi = null,
      ki = 0,
      Ai = [],
      ji = 0,
      Mi = null,
      Ni = 1,
      M = ``;
    function Pi(e, t) {
      (Ei[Di++] = ki), (Ei[Di++] = Oi), (Oi = e), (ki = t);
    }
    function Fi(e, t, n) {
      (Ai[ji++] = Ni), (Ai[ji++] = M), (Ai[ji++] = Mi), (Mi = e);
      var r = Ni;
      e = M;
      var i = 32 - Ge(r) - 1;
      (r &= ~(1 << i)), (n += 1);
      var a = 32 - Ge(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Ni = (1 << (32 - Ge(t) + i)) | (n << i) | r),
          (M = a + e);
      } else (Ni = (1 << a) | (n << i) | r), (M = e);
    }
    function Ii(e) {
      e.return !== null && (Pi(e, 1), Fi(e, 1, 0));
    }
    function Li(e) {
      for (; e === Oi; )
        (Oi = Ei[--Di]), (Ei[Di] = null), (ki = Ei[--Di]), (Ei[Di] = null);
      for (; e === Mi; )
        (Mi = Ai[--ji]),
          (Ai[ji] = null),
          (M = Ai[--ji]),
          (Ai[ji] = null),
          (Ni = Ai[--ji]),
          (Ai[ji] = null);
    }
    function Ri(e, t) {
      (Ai[ji++] = Ni),
        (Ai[ji++] = M),
        (Ai[ji++] = Mi),
        (Ni = t.id),
        (M = t.overflow),
        (Mi = e);
    }
    var zi = null,
      N = null,
      P = !1,
      Bi = null,
      Vi = !1,
      Hi = Error(i(519));
    function Ui(e) {
      throw (
        (Yi(
          Ti(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``
              )
            ),
            e
          )
        ),
        Hi)
      );
    }
    function Wi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[mt] = e), (t[ht] = r), n)) {
        case `dialog`:
          J(`cancel`, t), J(`close`, t);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          J(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < xd.length; n++) J(xd[n], t);
          break;
        case `source`:
          J(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          J(`error`, t), J(`load`, t);
          break;
        case `details`:
          J(`toggle`, t);
          break;
        case `input`:
          J(`invalid`, t),
            Jt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0
            );
          break;
        case `select`:
          J(`invalid`, t);
          break;
        case `textarea`:
          J(`invalid`, t), Qt(t, r.value, r.defaultValue, r.children);
      }
      (n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Id(t.textContent, n)
          ? (r.popover != null && (J(`beforetoggle`, t), J(`toggle`, t)),
            r.onScroll != null && J(`scroll`, t),
            r.onScrollEnd != null && J(`scrollend`, t),
            r.onClick != null && (t.onclick = cn),
            (t = !0))
          : (t = !1),
        t || Ui(e, !0);
    }
    function Gi(e) {
      for (zi = e.return; zi; )
        switch (zi.tag) {
          case 5:
          case 31:
          case 13:
            Vi = !1;
            return;
          case 27:
          case 3:
            Vi = !0;
            return;
          default:
            zi = zi.return;
        }
    }
    function Ki(e) {
      if (e !== zi) return !1;
      if (!P) return Gi(e), (P = !0), !1;
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              qd(e.type, e.memoizedProps))),
          (n = !n)),
        n && N && Ui(e),
        Gi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        N = mf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        N = mf(e);
      } else
        t === 27
          ? ((t = N), tf(e.type) ? ((e = pf), (pf = null), (N = e)) : (N = t))
          : (N = zi ? ff(e.stateNode.nextSibling) : null);
      return !0;
    }
    function qi() {
      (N = zi = null), (P = !1);
    }
    function Ji() {
      var e = Bi;
      return (
        e !== null &&
          (tu === null ? (tu = e) : tu.push.apply(tu, e), (Bi = null)),
        e
      );
    }
    function Yi(e) {
      Bi === null ? (Bi = [e]) : Bi.push(e);
    }
    var Xi = de(null),
      Zi = null,
      Qi = null;
    function $i(e, t, n) {
      A(Xi, t._currentValue), (t._currentValue = n);
    }
    function ea(e) {
      (e._currentValue = Xi.current), fe(Xi);
    }
    function ta(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function na(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                (o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ta(o.return, n, e),
                  r || (s = null);
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          (s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ta(s, n, e),
            (s = null);
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              (a.return = s.return), (s = a);
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ra(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Ar(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === ge.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [np]) : e.push(np));
        }
        a = a.return;
      }
      e !== null && na(t, e, n, r), (t.flags |= 262144);
    }
    function ia(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ar(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function aa(e) {
      (Zi = e),
        (Qi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null);
    }
    function oa(e) {
      return ca(Zi, e);
    }
    function sa(e, t) {
      return Zi === null && aa(e), ca(e, t);
    }
    function ca(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Qi === null)) {
        if (e === null) throw Error(i(308));
        (Qi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288);
      } else Qi = Qi.next = t;
      return n;
    }
    var la =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  });
              };
            },
      ua = t.unstable_scheduleCallback,
      da = t.unstable_NormalPriority,
      fa = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function pa() {
      return { controller: new la(), data: new Map(), refCount: 0 };
    }
    function ma(e) {
      e.refCount--,
        e.refCount === 0 &&
          ua(da, function () {
            e.controller.abort();
          });
    }
    var ha = null,
      ga = 0,
      _a = 0,
      va = null;
    function ya(e, t) {
      if (ha === null) {
        var n = (ha = []);
        (ga = 0),
          (_a = hd()),
          (va = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          });
      }
      return ga++, t.then(ba, ba), t;
    }
    function ba() {
      if (--ga === 0 && ha !== null) {
        va !== null && (va.status = `fulfilled`);
        var e = ha;
        (ha = null), (_a = 0), (va = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function xa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            (r.status = `fulfilled`), (r.value = t);
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          }
        ),
        r
      );
    }
    var Sa = O.S;
    O.S = function (e, t) {
      (iu = Ne()),
        typeof t == `object` && t && typeof t.then == `function` && ya(e, t),
        Sa !== null && Sa(e, t);
    };
    var Ca = de(null);
    function wa() {
      var e = Ca.current;
      return e === null ? U.pooledCache : e;
    }
    function Ta(e, t) {
      t === null ? A(Ca, Ca.current) : A(Ca, t.pool);
    }
    function Ea() {
      var e = wa();
      return e === null ? null : { parent: fa._currentValue, pool: e };
    }
    var Da = Error(i(460)),
      Oa = Error(i(474)),
      ka = Error(i(542)),
      Aa = { then: function () {} };
    function ja(e) {
      return (e = e.status), e === `fulfilled` || e === `rejected`;
    }
    function Ma(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Ia(e), e);
        default:
          if (typeof t.status == `string`) t.then(cn, cn);
          else {
            if (((e = U), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            (e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `fulfilled`), (n.value = e);
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `rejected`), (n.reason = e);
                  }
                }
              );
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Ia(e), e);
          }
          throw ((Pa = t), Da);
      }
    }
    function Na(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Pa = e), Da)
          : e;
      }
    }
    var Pa = null;
    function Fa() {
      if (Pa === null) throw Error(i(459));
      var e = Pa;
      return (Pa = null), e;
    }
    function Ia(e) {
      if (e === Da || e === ka) throw Error(i(483));
    }
    var La = null,
      Ra = 0;
    function za(e) {
      var t = Ra;
      return (Ra += 1), La === null && (La = []), Ma(La, e, t);
    }
    function Ba(e, t) {
      (t = t.props.ref), (e.ref = t === void 0 ? null : t);
    }
    function Va(e, t) {
      throw t.$$typeof === m
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e
            )
          ));
    }
    function Ha(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling);
        return t;
      }
      function a(e, t) {
        return (e = _i(e, t)), (e.index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return e && t.alternate === null && (t.flags |= 67108866), t;
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = xi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
            (t.elementType === i ||
              (typeof i == `object` &&
                i &&
                i.$$typeof === re &&
                Na(i) === t.type))
          ? ((t = a(t, n.props)), Ba(t, n), (t.return = e), t)
          : ((t = yi(n.type, n.key, n.props, null, e.mode, r)),
            Ba(t, n),
            (t.return = e),
            t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ci(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = bi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return (t = xi(`` + t, e.mode, n)), (t.return = e), t;
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case g:
              return (
                (n = yi(t.type, t.key, t.props, null, e.mode, n)),
                Ba(n, t),
                (n.return = e),
                n
              );
            case v:
              return (t = Ci(t, e.mode, n)), (t.return = e), t;
            case re:
              return (t = Na(t)), f(e, t, n);
          }
          if (D(t) || ae(t))
            return (t = bi(t, e.mode, n, null)), (t.return = e), t;
          if (typeof t.then == `function`) return f(e, za(t), n);
          if (t.$$typeof === C) return f(e, sa(e, t), n);
          Va(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case g:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case re:
              return (n = Na(n)), p(e, t, n, r);
          }
          if (D(n) || ae(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, za(n), r);
          if (n.$$typeof === C) return p(e, t, sa(e, n), r);
          Va(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return (e = e.get(n) || null), c(t, e, `` + r, i);
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case g:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i)
              );
            case re:
              return (r = Na(r)), m(e, t, n, r, i);
          }
          if (D(r) || ae(r)) return (e = e.get(n) || null), d(t, e, r, i, null);
          if (typeof r.then == `function`) return m(e, t, n, za(r), i);
          if (r.$$typeof === C) return m(e, t, n, sa(t, r), i);
          Va(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g);
        }
        if (h === s.length) return n(i, d), P && Pi(i, h), l;
        if (d === null) {
          for (; h < s.length; h++)
            (d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d));
          return P && Pi(i, h), l;
        }
        for (d = r(d); h < s.length; h++)
          (g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          P && Pi(i, h),
          l
        );
      }
      function _(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _);
        }
        if (v.done) return n(a, h), P && Pi(a, g), u;
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            (v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v));
          return P && Pi(a, g), u;
        }
        for (h = r(h); !v.done; g++, v = c.next())
          (v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          P && Pi(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case g:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c);
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === re &&
                        Na(l) === r.type)
                    ) {
                      n(e, r.sibling),
                        (c = a(r, o.props)),
                        Ba(c, o),
                        (c.return = e),
                        (e = c);
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = bi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = yi(o.type, o.key, o.props, null, e.mode, c)),
                    Ba(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c);
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                (c = Ci(o, e.mode, c)), (c.return = e), (e = c);
              }
              return s(e);
            case re:
              return (o = Na(o)), b(e, r, o, c);
          }
          if (D(o)) return h(e, r, o, c);
          if (ae(o)) {
            if (((l = ae(o)), typeof l != `function`)) throw Error(i(150));
            return (o = l.call(o)), _(e, r, o, c);
          }
          if (typeof o.then == `function`) return b(e, r, za(o), c);
          if (o.$$typeof === C) return b(e, r, sa(e, o), c);
          Va(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = xi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Ra = 0;
          var i = b(e, t, n, r);
          return (La = null), i;
        } catch (t) {
          if (t === Da || t === ka) throw t;
          var a = hi(29, t, null, e.mode);
          return (a.lanes = r), (a.return = e), a;
        }
      };
    }
    var Ua = Ha(!0),
      Wa = Ha(!1),
      Ga = !1;
    function F(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ka(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }
    function qa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ja(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), H & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = fi(e)),
          j(e, null, n),
          t
        );
      }
      return li(e, r, t, n), fi(e);
    }
    function Ya(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), st(e, n);
      }
    }
    function Xa(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n);
        return;
      }
      (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    var Za = !1;
    function Qa() {
      if (Za) {
        var e = va;
        if (e !== null) throw e;
      }
    }
    function $a(e, t, n, r) {
      Za = !1;
      var i = e.updateQueue;
      Ga = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        (c.next = null), o === null ? (a = l) : (o.next = l), (o = c);
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        (o = 0), (u = l = c = null), (s = a);
        do {
          var p = s.lane & -536870913,
            m = p !== s.lane;
          if (m ? (G & p) === p : (r & p) === p) {
            p !== 0 && p === _a && (Za = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  });
            a: {
              var h = e,
                g = s;
              p = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, p);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = g.payload),
                    (p = typeof h == `function` ? h.call(_, d, p) : h),
                    p == null)
                  )
                    break a;
                  d = f({}, d, p);
                  break a;
                case 2:
                  Ga = !0;
              }
            }
            (p = s.callback),
              p !== null &&
                ((e.flags |= 64),
                m && (e.flags |= 8192),
                (m = i.callbacks),
                m === null ? (i.callbacks = [p]) : m.push(p));
          } else
            (m = {
              lane: p,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = m), (c = d)) : (u = u.next = m),
              (o |= p);
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            (m = s),
              (s = m.next),
              (m.next = null),
              (i.lastBaseUpdate = m),
              (i.shared.pending = null);
          }
        } while (1);
        u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Yl |= o),
          (e.lanes = o),
          (e.memoizedState = d);
      }
    }
    function eo(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function to(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) eo(n[e], t);
    }
    var no = de(null),
      ro = de(0);
    function io(e, t) {
      (e = ql), A(ro, e), A(no, t), (ql = e | t.baseLanes);
    }
    function ao() {
      A(ro, ql), A(no, no.current);
    }
    function oo() {
      (ql = ro.current), fe(no), fe(ro);
    }
    var so = de(null),
      co = null;
    function lo(e) {
      var t = e.alternate;
      A(ho, ho.current & 1),
        A(so, e),
        co === null &&
          (t === null || no.current !== null || t.memoizedState !== null) &&
          (co = e);
    }
    function uo(e) {
      A(ho, ho.current), A(so, e), co === null && (co = e);
    }
    function fo(e) {
      e.tag === 22
        ? (A(ho, ho.current), A(so, e), co === null && (co = e))
        : po(e);
    }
    function po() {
      A(ho, ho.current), A(so, so.current);
    }
    function mo(e) {
      fe(so), co === e && (co = null), fe(ho);
    }
    var ho = de(0);
    function go(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || lf(n) || uf(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var _o = 0,
      I = null,
      L = null,
      vo = null,
      yo = !1,
      bo = !1,
      xo = !1,
      So = 0,
      Co = 0,
      wo = null,
      To = 0;
    function Eo() {
      throw Error(i(321));
    }
    function Do(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ar(e[n], t[n])) return !1;
      return !0;
    }
    function Oo(e, t, n, r, i, a) {
      return (
        (_o = a),
        (I = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (O.H = e === null || e.memoizedState === null ? Gs : Ks),
        (xo = !1),
        (a = n(r, i)),
        (xo = !1),
        bo && (a = Ao(t, n, r, i)),
        ko(e),
        a
      );
    }
    function ko(e) {
      O.H = Ws;
      var t = L !== null && L.next !== null;
      if (((_o = 0), (vo = L = I = null), (yo = !1), (Co = 0), (wo = null), t))
        throw Error(i(300));
      e === null ||
        lc ||
        ((e = e.dependencies), e !== null && ia(e) && (lc = !0));
    }
    function Ao(e, t, n, r) {
      I = e;
      var a = 0;
      do {
        if ((bo && (wo = null), (Co = 0), (bo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (vo = L = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          (o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0);
        }
        (O.H = qs), (o = t(n, r));
      } while (bo);
      return o;
    }
    function jo() {
      var e = O.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Ro(t) : t),
        (e = e.useState()[0]),
        (L === null ? null : L.memoizedState) !== e && (I.flags |= 1024),
        t
      );
    }
    function Mo() {
      var e = So !== 0;
      return (So = 0), e;
    }
    function No(e, t, n) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
    }
    function Po(e) {
      if (yo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), (e = e.next);
        }
        yo = !1;
      }
      (_o = 0), (vo = L = I = null), (bo = !1), (Co = So = 0), (wo = null);
    }
    function Fo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return vo === null ? (I.memoizedState = vo = e) : (vo = vo.next = e), vo;
    }
    function Io() {
      if (L === null) {
        var e = I.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = L.next;
      var t = vo === null ? I.memoizedState : vo.next;
      if (t !== null) (vo = t), (L = e);
      else {
        if (e === null)
          throw I.alternate === null ? Error(i(467)) : Error(i(310));
        (L = e),
          (e = {
            memoizedState: L.memoizedState,
            baseState: L.baseState,
            baseQueue: L.baseQueue,
            queue: L.queue,
            next: null,
          }),
          vo === null ? (I.memoizedState = vo = e) : (vo = vo.next = e);
      }
      return vo;
    }
    function Lo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ro(e) {
      var t = Co;
      return (
        (Co += 1),
        wo === null && (wo = []),
        (e = Ma(wo, e, t)),
        (t = I),
        (vo === null ? t.memoizedState : vo.next) === null &&
          ((t = t.alternate),
          (O.H = t === null || t.memoizedState === null ? Gs : Ks)),
        e
      );
    }
    function zo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Ro(e);
        if (e.$$typeof === C) return oa(e);
      }
      throw Error(i(438, String(e)));
    }
    function Bo(e) {
      var t = null,
        n = I.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = I.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Lo()), (I.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ie;
      return t.index++, n;
    }
    function Vo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Ho(e) {
      return Uo(Io(), L, e);
    }
    function Uo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          (a.next = o.next), (o.next = s);
        }
        (t.baseQueue = a = o), (r.pending = null);
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (_o & f) === f : (G & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === _a && (d = !0);
            else if ((_o & p) === p) {
              (u = u.next), p === _a && (d = !0);
              continue;
            } else
              (f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (I.lanes |= p),
                (Yl |= p);
            (f = u.action),
              xo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f));
          } else
            (p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (I.lanes |= f),
              (Yl |= f);
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Ar(o, e.memoizedState) && ((lc = !0), d && ((n = va), n !== null)))
        )
          throw n;
        (e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o);
      }
      return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
    }
    function Wo(e) {
      var t = Io(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== a);
        Ar(o, t.memoizedState) || (lc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o);
      }
      return [o, r];
    }
    function Go(e, t, n) {
      var r = I,
        a = Io(),
        o = P;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Ar((L || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (lc = !0)),
        (a = a.queue),
        gs(Jo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (vo !== null && vo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ds(9, { destroy: void 0 }, qo.bind(null, r, a, n, t), null),
          U === null)
        )
          throw Error(i(349));
        o || _o & 127 || Ko(r, t, n);
      }
      return n;
    }
    function Ko(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = I.updateQueue),
        t === null
          ? ((t = Lo()), (I.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }
    function qo(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), Yo(t) && Xo(e);
    }
    function Jo(e, t, n) {
      return n(function () {
        Yo(t) && Xo(e);
      });
    }
    function Yo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Ar(e, n);
      } catch {
        return !0;
      }
    }
    function Xo(e) {
      var t = di(e, 2);
      t !== null && yu(t, e, 2);
    }
    function Zo(e) {
      var t = Fo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), xo)) {
          We(!0);
          try {
            n();
          } finally {
            We(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Qo(e, t, n, r) {
      return (e.baseState = n), Uo(e, L, typeof r == `function` ? r : Vo);
    }
    function $o(e, t, n, r, a) {
      if (Vs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        O.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), es(t, o))
            : ((o.next = n.next), (t.pending = n.next = o));
      }
    }
    function es(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = O.T,
          o = {};
        O.T = o;
        try {
          var s = n(i, r),
            c = O.S;
          c !== null && c(o, s), ts(e, t, s);
        } catch (n) {
          rs(e, t, n);
        } finally {
          a !== null && o.types !== null && (a.types = o.types), (O.T = a);
        }
      } else
        try {
          (a = n(i, r)), ts(e, t, a);
        } catch (n) {
          rs(e, t, n);
        }
    }
    function ts(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              ns(e, t, n);
            },
            function (n) {
              return rs(e, t, n);
            }
          )
        : ns(e, t, n);
    }
    function ns(e, t, n) {
      (t.status = `fulfilled`),
        (t.value = n),
        is(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), es(e, n)));
    }
    function rs(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do (t.status = `rejected`), (t.reason = n), is(t), (t = t.next);
        while (t !== r);
      }
      e.action = null;
    }
    function is(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function as(e, t) {
      return t;
    }
    function os(e, t) {
      if (P) {
        var n = U.formState;
        if (n !== null) {
          a: {
            var r = I;
            if (P) {
              if (N) {
                b: {
                  for (var i = N, a = Vi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = ff(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  (a = i.data), (i = a === `F!` || a === `F` ? i : null);
                }
                if (i) {
                  (N = ff(i.nextSibling)), (r = i.data === `F!`);
                  break a;
                }
              }
              Ui(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Fo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: as,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Rs.bind(null, I, r)),
        (r.dispatch = n),
        (r = Zo(!1)),
        (a = Bs.bind(null, I, !1, r.queue)),
        (r = Fo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = $o.bind(null, I, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ss(e) {
      return cs(Io(), L, e);
    }
    function cs(e, t, n) {
      if (
        ((t = Uo(e, t, as)[0]),
        (e = Ho(Vo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Ro(t);
        } catch (e) {
          throw e === Da ? ka : e;
        }
      else r = t;
      t = Io();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((I.flags |= 2048),
          ds(9, { destroy: void 0 }, ls.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ls(e, t) {
      e.action = t;
    }
    function us(e) {
      var t = Io(),
        n = L;
      if (n !== null) return cs(t, n, e);
      Io(), (t = t.memoizedState), (n = Io());
      var r = n.queue.dispatch;
      return (n.memoizedState = e), [t, r, !1];
    }
    function ds(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = I.updateQueue),
        t === null && ((t = Lo()), (I.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function fs() {
      return Io().memoizedState;
    }
    function ps(e, t, n, r) {
      var i = Fo();
      (I.flags |= e),
        (i.memoizedState = ds(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r
        ));
    }
    function ms(e, t, n, r) {
      var i = Io();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      L !== null && r !== null && Do(r, L.memoizedState.deps)
        ? (i.memoizedState = ds(t, a, n, r))
        : ((I.flags |= e), (i.memoizedState = ds(1 | t, a, n, r)));
    }
    function hs(e, t) {
      ps(8390656, 8, e, t);
    }
    function gs(e, t) {
      ms(2048, 8, e, t);
    }
    function _s(e) {
      I.flags |= 4;
      var t = I.updateQueue;
      if (t === null) (t = Lo()), (I.updateQueue = t), (t.events = [e]);
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function vs(e) {
      var t = Io().memoizedState;
      return (
        _s({ ref: t, nextImpl: e }),
        function () {
          if (H & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function ys(e, t) {
      return ms(4, 2, e, t);
    }
    function bs(e, t) {
      return ms(4, 4, e, t);
    }
    function xs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Ss(e, t, n) {
      (n = n == null ? null : n.concat([e])), ms(4, 4, xs.bind(null, t, e), n);
    }
    function Cs() {}
    function ws(e, t) {
      var n = Io();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && Do(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ts(e, t) {
      var n = Io();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && Do(t, r[1])) return r[0];
      if (((r = e()), xo)) {
        We(!0);
        try {
          e();
        } finally {
          We(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    }
    function Es(e, t, n) {
      return n === void 0 || (_o & 1073741824 && !(G & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = vu()), (I.lanes |= e), (Yl |= e), n);
    }
    function Ds(e, t, n, r) {
      return Ar(n, t)
        ? n
        : no.current === null
        ? !(_o & 42) || (_o & 1073741824 && !(G & 261930))
          ? ((lc = !0), (e.memoizedState = n))
          : ((e = vu()), (I.lanes |= e), (Yl |= e), t)
        : ((e = Es(e, n, r)), Ar(e, t) || (lc = !0), e);
    }
    function Os(e, t, n, r, i) {
      var a = k.p;
      k.p = a !== 0 && 8 > a ? a : 8;
      var o = O.T,
        s = {};
      (O.T = s), Bs(e, !1, t, n);
      try {
        var c = i(),
          l = O.S;
        l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? zs(e, t, xa(c, r), _u(e))
            : zs(e, t, r, _u(e));
      } catch (n) {
        zs(e, t, { then: function () {}, status: `rejected`, reason: n }, _u());
      } finally {
        (k.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (O.T = o);
      }
    }
    function ks() {}
    function As(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = js(e).queue;
      Os(
        e,
        a,
        t,
        ce,
        n === null
          ? ks
          : function () {
              return Ms(e), n(r);
            }
      );
    }
    function js(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ce,
        baseState: ce,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: ce,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Ms(e) {
      var t = js(e);
      t.next === null && (t = e.alternate.memoizedState),
        zs(e, t.next.queue, {}, _u());
    }
    function Ns() {
      return oa(np);
    }
    function Ps() {
      return Io().memoizedState;
    }
    function Fs() {
      return Io().memoizedState;
    }
    function Is(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = _u();
            e = qa(n);
            var r = Ja(t, e, n);
            r !== null && (yu(r, t, n), Ya(r, t, n)),
              (t = { cache: pa() }),
              (e.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function Ls(e, t, n) {
      var r = _u();
      (n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Vs(e)
          ? Hs(t, n)
          : ((n = ui(e, t, n, r)), n !== null && (yu(n, e, r), Us(n, t, r)));
    }
    function Rs(e, t, n) {
      zs(e, t, n, _u());
    }
    function zs(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Vs(e)) Hs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Ar(s, o)))
              return li(e, t, i, 0), U === null && ci(), !1;
          } catch {}
        if (((n = ui(e, t, i, r)), n !== null))
          return yu(n, e, r), Us(n, t, r), !0;
      }
      return !1;
    }
    function Bs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: hd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Vs(e))
      ) {
        if (t) throw Error(i(479));
      } else (t = ui(e, n, r, 2)), t !== null && yu(t, e, 2);
    }
    function Vs(e) {
      var t = e.alternate;
      return e === I || (t !== null && t === I);
    }
    function Hs(e, t) {
      bo = yo = !0;
      var n = e.pending;
      n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
    function Us(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), st(e, n);
      }
    }
    var Ws = {
      readContext: oa,
      use: zo,
      useCallback: Eo,
      useContext: Eo,
      useEffect: Eo,
      useImperativeHandle: Eo,
      useLayoutEffect: Eo,
      useInsertionEffect: Eo,
      useMemo: Eo,
      useReducer: Eo,
      useRef: Eo,
      useState: Eo,
      useDebugValue: Eo,
      useDeferredValue: Eo,
      useTransition: Eo,
      useSyncExternalStore: Eo,
      useId: Eo,
      useHostTransitionStatus: Eo,
      useFormState: Eo,
      useActionState: Eo,
      useOptimistic: Eo,
      useMemoCache: Eo,
      useCacheRefresh: Eo,
    };
    Ws.useEffectEvent = Eo;
    var Gs = {
        readContext: oa,
        use: zo,
        useCallback: function (e, t) {
          return (Fo().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: oa,
        useEffect: hs,
        useImperativeHandle: function (e, t, n) {
          (n = n == null ? null : n.concat([e])),
            ps(4194308, 4, xs.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return ps(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          ps(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Fo();
          t = t === void 0 ? null : t;
          var r = e();
          if (xo) {
            We(!0);
            try {
              e();
            } finally {
              We(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
          var r = Fo();
          if (n !== void 0) {
            var i = n(t);
            if (xo) {
              We(!0);
              try {
                n(t);
              } finally {
                We(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ls.bind(null, I, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Fo();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: function (e) {
          e = Zo(e);
          var t = e.queue,
            n = Rs.bind(null, I, t);
          return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: Cs,
        useDeferredValue: function (e, t) {
          return Es(Fo(), e, t);
        },
        useTransition: function () {
          var e = Zo(!1);
          return (
            (e = Os.bind(null, I, e.queue, !0, !1)),
            (Fo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = I,
            a = Fo();
          if (P) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), U === null)) throw Error(i(349));
            G & 127 || Ko(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            hs(Jo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ds(9, { destroy: void 0 }, qo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Fo(),
            t = U.identifierPrefix;
          if (P) {
            var n = M,
              r = Ni;
            (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = So++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`);
          } else (n = To++), (t = `_` + t + `r_` + n.toString(32) + `_`);
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Ns,
        useFormState: os,
        useActionState: os,
        useOptimistic: function (e) {
          var t = Fo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Bs.bind(null, I, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Bo,
        useCacheRefresh: function () {
          return (Fo().memoizedState = Is.bind(null, I));
        },
        useEffectEvent: function (e) {
          var t = Fo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (H & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Ks = {
        readContext: oa,
        use: zo,
        useCallback: ws,
        useContext: oa,
        useEffect: gs,
        useImperativeHandle: Ss,
        useInsertionEffect: ys,
        useLayoutEffect: bs,
        useMemo: Ts,
        useReducer: Ho,
        useRef: fs,
        useState: function () {
          return Ho(Vo);
        },
        useDebugValue: Cs,
        useDeferredValue: function (e, t) {
          return Ds(Io(), L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Ho(Vo)[0],
            t = Io().memoizedState;
          return [typeof e == `boolean` ? e : Ro(e), t];
        },
        useSyncExternalStore: Go,
        useId: Ps,
        useHostTransitionStatus: Ns,
        useFormState: ss,
        useActionState: ss,
        useOptimistic: function (e, t) {
          return Qo(Io(), L, e, t);
        },
        useMemoCache: Bo,
        useCacheRefresh: Fs,
      };
    Ks.useEffectEvent = vs;
    var qs = {
      readContext: oa,
      use: zo,
      useCallback: ws,
      useContext: oa,
      useEffect: gs,
      useImperativeHandle: Ss,
      useInsertionEffect: ys,
      useLayoutEffect: bs,
      useMemo: Ts,
      useReducer: Wo,
      useRef: fs,
      useState: function () {
        return Wo(Vo);
      },
      useDebugValue: Cs,
      useDeferredValue: function (e, t) {
        var n = Io();
        return L === null ? Es(n, e, t) : Ds(n, L.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Wo(Vo)[0],
          t = Io().memoizedState;
        return [typeof e == `boolean` ? e : Ro(e), t];
      },
      useSyncExternalStore: Go,
      useId: Ps,
      useHostTransitionStatus: Ns,
      useFormState: us,
      useActionState: us,
      useOptimistic: function (e, t) {
        var n = Io();
        return L === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Qo(n, L, e, t);
      },
      useMemoCache: Bo,
      useCacheRefresh: Fs,
    };
    qs.useEffectEvent = vs;
    function Js(e, t, n, r) {
      (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : f({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Ys = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = _u(),
          i = qa(r);
        (i.payload = t),
          n != null && (i.callback = n),
          (t = Ja(e, i, r)),
          t !== null && (yu(t, e, r), Ya(t, e, r));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = _u(),
          i = qa(r);
        (i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ja(e, i, r)),
          t !== null && (yu(t, e, r), Ya(t, e, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = _u(),
          r = qa(n);
        (r.tag = 2),
          t != null && (r.callback = t),
          (t = Ja(e, r, n)),
          t !== null && (yu(t, e, n), Ya(t, e, n));
      },
    };
    function Xs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
          ? !jr(n, r) || !jr(i, a)
          : !0
      );
    }
    function Zs(e, t, n, r) {
      (e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ys.enqueueReplaceState(t, t.state, null);
    }
    function Qs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = f({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function $s(e) {
      ii(e);
    }
    function ec(e) {
      console.error(e);
    }
    function tc(e) {
      ii(e);
    }
    function nc(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function rc(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ic(e, t, n) {
      return (
        (n = qa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          nc(e, t);
        }),
        n
      );
    }
    function ac(e) {
      return (e = qa(e)), (e.tag = 3), e;
    }
    function oc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        (e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            rc(t, n, r);
          });
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          rc(t, n, r),
            typeof i != `function` &&
              (su === null ? (su = new Set([this])) : su.add(this));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function sc(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && ra(t, n, a, !0),
          (n = so.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                co === null
                  ? ju()
                  : n.alternate === null && Jl === 0 && (Jl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Yu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Yu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return Yu(e, r, a), ju(), !1;
      }
      if (P)
        return (
          (t = so.current),
          t === null
            ? (r !== Hi && ((t = Error(i(423), { cause: r })), Yi(Ti(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Ti(r, n)),
              (a = ic(e.stateNode, r, a)),
              Xa(e, a),
              Jl !== 4 && (Jl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Hi && ((e = Error(i(422), { cause: r })), Yi(Ti(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = Ti(o, n)),
        eu === null ? (eu = [o]) : eu.push(o),
        Jl !== 4 && (Jl = 2),
        t === null)
      )
        return !0;
      (r = Ti(r, n)), (n = t);
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = ic(n.stateNode, r, e)),
              Xa(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (su === null || !su.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = ac(a)),
                oc(a, e, n, r),
                Xa(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var cc = Error(i(461)),
      lc = !1;
    function uc(e, t, n, r) {
      t.child = e === null ? Wa(t, null, n, r) : Ua(t, e.child, n, r);
    }
    function dc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        aa(t),
        (r = Oo(e, t, n, o, a, i)),
        (s = Mo()),
        e !== null && !lc
          ? (No(e, t, i), Fc(e, t, i))
          : (P && s && Ii(t), (t.flags |= 1), uc(e, t, r, i), t.child)
      );
    }
    function fc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !gi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), pc(e, t, a, r, i))
          : ((e = yi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Ic(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? jr : n),
          n(o, r) && e.ref === t.ref)
        )
          return Fc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = _i(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function pc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (jr(a, r) && e.ref === t.ref)
          if (((lc = !1), (t.pendingProps = r = a), Ic(e, i)))
            e.flags & 131072 && (lc = !0);
          else return (t.lanes = e.lanes), Fc(e, t, i);
      }
      return xc(e, t, n, r, i);
    }
    function mc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              (i = i | r.lanes | r.childLanes), (r = r.sibling);
            r = i & ~a;
          } else (r = 0), (t.child = null);
          return gc(e, t, a, n, r);
        }
        if (n & 536870912)
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ta(t, a === null ? null : a.cachePool),
            a === null ? ao() : io(t, a),
            fo(t);
        else
          return (
            (r = t.lanes = 536870912),
            gc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Ta(t, null), ao(), po(t))
          : (Ta(t, a.cachePool), io(t, a), po(t), (t.memoizedState = null));
      return uc(e, t, i, n), t.child;
    }
    function hc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function gc(e, t, n, r, i) {
      var a = wa();
      return (
        (a = a === null ? null : { parent: fa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ta(t, null),
        ao(),
        fo(t),
        e !== null && ra(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function _c(e, t) {
      return (
        (t = Ac({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function vc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = _c(t, t.pendingProps)),
        (e.flags |= 2),
        mo(t),
        (t.memoizedState = null),
        e
      );
    }
    function yc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (P) {
          if (r.mode === `hidden`)
            return (e = _c(t, r)), (t.lanes = 536870912), hc(null, e);
          if (
            (uo(t),
            (e = N)
              ? ((e = cf(e, Vi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Mi === null ? null : { id: Ni, overflow: M },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Si(e)),
                  (n.return = t),
                  (t.child = n),
                  (zi = t),
                  (N = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t);
          return (t.lanes = 536870912), null;
        }
        return _c(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((uo(t), a))
          if (t.flags & 256) (t.flags &= -257), (t = vc(e, t, n));
          else if (t.memoizedState !== null)
            (t.child = e.child), (t.flags |= 128), (t = null);
          else throw Error(i(558));
        else if (
          (lc || ra(e, t, n, !1), (a = (n & e.childLanes) !== 0), lc || a)
        ) {
          if (
            ((r = U),
            r !== null && ((s = ct(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), di(e, s), yu(r, e, s), cc);
          ju(), (t = vc(e, t, n));
        } else
          (e = o.treeContext),
            (N = ff(s.nextSibling)),
            (zi = t),
            (P = !0),
            (Bi = null),
            (Vi = !1),
            e !== null && Ri(t, e),
            (t = _c(t, r)),
            (t.flags |= 4096);
        return t;
      }
      return (
        (e = _i(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function bc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function xc(e, t, n, r, i) {
      return (
        aa(t),
        (n = Oo(e, t, n, r, void 0, i)),
        (r = Mo()),
        e !== null && !lc
          ? (No(e, t, i), Fc(e, t, i))
          : (P && r && Ii(t), (t.flags |= 1), uc(e, t, n, i), t.child)
      );
    }
    function Sc(e, t, n, r, i, a) {
      return (
        aa(t),
        (t.updateQueue = null),
        (n = Ao(t, r, n, i)),
        ko(e),
        (r = Mo()),
        e !== null && !lc
          ? (No(e, t, a), Fc(e, t, a))
          : (P && r && Ii(t), (t.flags |= 1), uc(e, t, n, a), t.child)
      );
    }
    function Cc(e, t, n, r, i) {
      if ((aa(t), t.stateNode === null)) {
        var a = pi,
          o = n.contextType;
        typeof o == `object` && o && (a = oa(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ys),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          F(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? oa(o) : pi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Js(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Ys.enqueueReplaceState(a, a.state, null),
            $a(t, r, a, i),
            Qa(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0);
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Qs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        (o = pi), typeof u == `object` && u && (o = oa(u));
        var d = n.getDerivedStateFromProps;
        (u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Zs(t, a, r, o)),
          (Ga = !1);
        var f = t.memoizedState;
        (a.state = f),
          $a(t, r, a, i),
          Qa(),
          (l = t.memoizedState),
          s || f !== l || Ga
            ? (typeof d == `function` &&
                (Js(t, n, d, r), (l = t.memoizedState)),
              (c = Ga || Xs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1));
      } else {
        (a = t.stateNode),
          Ka(e, t),
          (o = t.memoizedProps),
          (u = Qs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = pi),
          typeof l == `object` && l && (c = oa(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Zs(t, a, r, c)),
          (Ga = !1),
          (f = t.memoizedState),
          (a.state = f),
          $a(t, r, a, i),
          Qa();
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ga ||
        (e !== null && e.dependencies !== null && ia(e.dependencies))
          ? (typeof s == `function` && (Js(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ga ||
              Xs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && ia(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        bc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ua(t, e.child, null, i)),
                (t.child = Ua(t, null, n, i)))
              : uc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Fc(e, t, i)),
        e
      );
    }
    function wc(e, t, n, r) {
      return qi(), (t.flags |= 256), uc(e, t, n, r), t.child;
    }
    var Tc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Ec(e) {
      return { baseLanes: e, cachePool: Ea() };
    }
    function Dc(e, t, n) {
      return (e = e === null ? 0 : e.childLanes & ~n), t && (e |= Ql), e;
    }
    function Oc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null
              ? !1
              : (ho.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (P) {
          if (
            (a ? lo(t) : po(t),
            (e = N)
              ? ((e = cf(e, Vi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Mi === null ? null : { id: Ni, overflow: M },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Si(e)),
                  (n.return = t),
                  (t.child = n),
                  (zi = t),
                  (N = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t);
          return uf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (po(t),
              (a = t.mode),
              (c = Ac({ mode: `hidden`, children: c }, a)),
              (r = bi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Ec(n)),
              (r.childLanes = Dc(e, s, n)),
              (t.memoizedState = Tc),
              hc(null, r))
            : (lo(t), kc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (lo(t), (t.flags &= -257), (t = jc(e, t, n)))
            : t.memoizedState === null
            ? (po(t),
              (c = r.fallback),
              (a = t.mode),
              (r = Ac({ mode: `visible`, children: r.children }, a)),
              (c = bi(c, a, n, null)),
              (c.flags |= 2),
              (r.return = t),
              (c.return = t),
              (r.sibling = c),
              (t.child = r),
              Ua(t, e.child, null, n),
              (r = t.child),
              (r.memoizedState = Ec(n)),
              (r.childLanes = Dc(e, s, n)),
              (t.memoizedState = Tc),
              (t = hc(null, r)))
            : (po(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((lo(t), uf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          (s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Yi({ value: r, source: null, stack: null }),
            (t = jc(e, t, n));
        } else if (
          (lc || ra(e, t, n, !1), (s = (n & e.childLanes) !== 0), lc || s)
        ) {
          if (
            ((s = U),
            s !== null && ((r = ct(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), di(e, r), yu(s, e, r), cc);
          lf(c) || ju(), (t = jc(e, t, n));
        } else
          lf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (N = ff(c.nextSibling)),
              (zi = t),
              (P = !0),
              (Bi = null),
              (Vi = !1),
              e !== null && Ri(t, e),
              (t = kc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (po(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = _i(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = bi(c, a, n, null)), (c.flags |= 2))
            : (c = _i(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          hc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Ec(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Ea())
                : ((l = fa._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = Dc(e, s, n)),
          (t.memoizedState = Tc),
          hc(e.child, r))
        : (lo(t),
          (n = e.child),
          (e = n.sibling),
          (n = _i(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function kc(e, t) {
      return (
        (t = Ac({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Ac(e, t) {
      return (e = hi(22, e, null, t)), (e.lanes = 0), e;
    }
    function jc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = kc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Mc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      r !== null && (r.lanes |= t), ta(e.return, t, n);
    }
    function Nc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Pc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = ho.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        A(ho, o),
        uc(e, t, r, n),
        (r = P ? ki : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Mc(e, n, t);
          else if (e.tag === 19) Mc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && go(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Nc(t, !1, i, n, a, r);
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && go(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Nc(t, !0, n, null, a, r);
          break;
        case `together`:
          Nc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Fc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Yl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ra(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = _i(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (n = n.sibling = _i(e, e.pendingProps)),
            (n.return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function Ic(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && ia(e)))
        : !0;
    }
    function Lc(e, t, n) {
      switch (t.tag) {
        case 3:
          _e(t, t.stateNode.containerInfo),
            $i(t, fa, e.memoizedState.cache),
            qi();
          break;
        case 27:
        case 5:
          ye(t);
          break;
        case 4:
          _e(t, t.stateNode.containerInfo);
          break;
        case 10:
          $i(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return (t.flags |= 128), uo(t), null;
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (lo(t), (e = Fc(e, t, n)), e === null ? null : e.sibling)
                : Oc(e, t, n)
              : (lo(t), (t.flags |= 128), null);
          lo(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (ra(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Pc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            A(ho, ho.current),
            r)
          )
            break;
          return null;
        case 22:
          return (t.lanes = 0), mc(e, t, n, t.pendingProps);
        case 24:
          $i(t, fa, e.memoizedState.cache);
      }
      return Fc(e, t, n);
    }
    function Rc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) lc = !0;
        else {
          if (!Ic(e, n) && !(t.flags & 128)) return (lc = !1), Lc(e, t, n);
          lc = !!(e.flags & 131072);
        }
      else (lc = !1), P && t.flags & 1048576 && Fi(t, ki, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Na(t.elementType)), (t.type = e), typeof e == `function`))
              gi(e)
                ? ((r = Qs(e, r)), (t.tag = 1), (t = Cc(null, t, e, r, n)))
                : ((t.tag = 0), (t = xc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  (t.tag = 11), (t = dc(null, t, e, r, n));
                  break a;
                } else if (a === ne) {
                  (t.tag = 14), (t = fc(null, t, e, r, n));
                  break a;
                }
              }
              throw ((t = se(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return xc(e, t, t.type, t.pendingProps, n);
        case 1:
          return (r = t.type), (a = Qs(r, t.pendingProps)), Cc(e, t, r, a, n);
        case 3:
          a: {
            if ((_e(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            (a = o.element), Ka(e, t), $a(t, r, null, n);
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              $i(t, fa, r),
              r !== o.cache && na(t, [fa], n, !0),
              Qa(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = wc(e, t, r, n);
                break a;
              } else if (r !== a) {
                (a = Ti(Error(i(424)), t)), Yi(a), (t = wc(e, t, r, n));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  N = ff(e.firstChild),
                    zi = t,
                    P = !0,
                    Bi = null,
                    Vi = !0,
                    n = Wa(t, null, r, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
              }
            else {
              if ((qi(), r === a)) {
                t = Fc(e, t, n);
                break a;
              }
              uc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            bc(e, t),
            e === null
              ? (n = Nf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : P ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Wd(he.current).createElement(n)),
                  (r[mt] = t),
                  (r[ht] = e),
                  Rd(r, n, e),
                  Dt(r),
                  (t.stateNode = r))
              : (t.memoizedState = Nf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState
                )),
            null
          );
        case 27:
          return (
            ye(t),
            e === null &&
              P &&
              ((r = t.stateNode = gf(t.type, t.pendingProps, he.current)),
              (zi = t),
              (Vi = !0),
              (a = N),
              tf(t.type) ? ((pf = a), (N = ff(r.firstChild))) : (N = a)),
            uc(e, t, t.pendingProps.children, n),
            bc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              P &&
              ((a = r = N) &&
                ((r = of(r, t.type, t.pendingProps, Vi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (zi = t),
                    (N = ff(r.firstChild)),
                    (Vi = !1),
                    (a = !0))),
              a || Ui(t)),
            ye(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            qd(a, o) ? (r = null) : s !== null && qd(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = Oo(e, t, jo, null, null, n)), (np._currentValue = a)),
            bc(e, t),
            uc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              P &&
              ((e = n = N) &&
                ((n = sf(n, t.pendingProps, Vi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (zi = t), (N = null), (e = !0))),
              e || Ui(t)),
            null
          );
        case 13:
          return Oc(e, t, n);
        case 4:
          return (
            _e(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ua(t, null, r, n)) : uc(e, t, r, n),
            t.child
          );
        case 11:
          return dc(e, t, t.type, t.pendingProps, n);
        case 7:
          return uc(e, t, t.pendingProps, n), t.child;
        case 8:
          return uc(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return uc(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return (
            (r = t.pendingProps),
            $i(t, t.type, r.value),
            uc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            aa(t),
            (a = oa(a)),
            (r = r(a)),
            (t.flags |= 1),
            uc(e, t, r, n),
            t.child
          );
        case 14:
          return fc(e, t, t.type, t.pendingProps, n);
        case 15:
          return pc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Pc(e, t, n);
        case 31:
          return yc(e, t, n);
        case 22:
          return mc(e, t, n, t.pendingProps);
        case 24:
          return (
            aa(t),
            (r = oa(fa)),
            e === null
              ? ((a = wa()),
                a === null &&
                  ((a = U),
                  (o = pa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                F(t),
                $i(t, fa, a))
              : ((e.lanes & n) !== 0 && (Ka(e, t), $a(t, null, null, n), Qa()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    $i(t, fa, r),
                    r !== a.cache && na(t, [fa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    $i(t, fa, r))),
            uc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function zc(e) {
      e.flags |= 4;
    }
    function Bc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Ou()) e.flags |= 8192;
          else throw ((Pa = Aa), Oa);
      } else e.flags &= -16777217;
    }
    function Vc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Jf(t)))
        if (Ou()) e.flags |= 8192;
        else throw ((Pa = Aa), Oa);
    }
    function Hc(e, t) {
      t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : nt()), (e.lanes |= t), ($l |= t));
    }
    function Uc(e, t) {
      if (!P)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), (t = t.sibling);
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              n.alternate !== null && (r = n), (n = n.sibling);
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function R(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling);
      else
        for (i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function Wc(e, t, n) {
      var r = t.pendingProps;
      switch ((Li(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return R(t), null;
        case 1:
          return R(t), null;
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ea(fa),
            ve(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ki(t)
                ? zc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ji())),
            R(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (zc(t),
                o === null ? (R(t), Bc(t, a, null, r, n)) : (R(t), Vc(t, o)))
              : o
              ? o === e.memoizedState
                ? (R(t), (t.flags &= -16777217))
                : (zc(t), R(t), Vc(t, o))
              : ((e = e.memoizedProps),
                e !== r && zc(t),
                R(t),
                Bc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (be(t),
            (n = he.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && zc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return R(t), null;
            }
            (e = pe.current),
              Ki(t) ? Wi(t, e) : ((e = gf(a, r, n)), (t.stateNode = e), zc(t));
          }
          return R(t), null;
        case 5:
          if ((be(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && zc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return R(t), null;
            }
            if (((o = pe.current), Ki(t))) Wi(t, o);
            else {
              var s = Wd(he.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a
                      );
                      break;
                    case `script`:
                      (o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild));
                      break;
                    case `select`:
                      (o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size);
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              (o[mt] = t), (o[ht] = r);
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  (s.child.return = s), (s = s.child);
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                (s.sibling.return = s.return), (s = s.sibling);
              }
              t.stateNode = o;
              a: switch ((Rd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && zc(t);
            }
          }
          return (
            R(t),
            Bc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && zc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = he.current), Ki(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = zi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              (e[mt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Id(e.nodeValue, n)
                )),
                e || Ui(t, !0);
            } else
              (e = Wd(e).createTextNode(r)), (e[mt] = t), (t.stateNode = e);
          }
          return R(t), null;
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ki(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[mt] = t;
              } else
                qi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              R(t), (e = !1);
            } else
              (n = Ji()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0);
            if (!e) return t.flags & 256 ? (mo(t), t) : (mo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return R(t), null;
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ki(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[mt] = t;
              } else
                qi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              R(t), (a = !1);
            } else
              (a = Ji()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0);
            if (!a) return t.flags & 256 ? (mo(t), t) : (mo(t), null);
          }
          return (
            mo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Hc(t, t.updateQueue),
                R(t),
                null)
          );
        case 4:
          return ve(), e === null && Ed(t.stateNode.containerInfo), R(t), null;
        case 10:
          return ea(t.type), R(t), null;
        case 19:
          if ((fe(ho), (r = t.memoizedState), r === null)) return R(t), null;
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Uc(r, !1);
            else {
              if (Jl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = go(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Uc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Hc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;

                    )
                      vi(n, e), (n = n.sibling);
                    return (
                      A(ho, (ho.current & 1) | 2),
                      P && Pi(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Ne() > au &&
                ((t.flags |= 128), (a = !0), Uc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = go(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Hc(t, e),
                  Uc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !P)
                )
                  return R(t), null;
              } else
                2 * Ne() - r.renderingStartTime > au &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Uc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (R(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ne()),
              (e.sibling = null),
              (n = ho.current),
              A(ho, a ? (n & 1) | 2 : n & 1),
              P && Pi(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            mo(t),
            oo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (R(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : R(t),
            (n = t.updateQueue),
            n !== null && Hc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && fe(Ca),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ea(fa),
            R(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Gc(e, t) {
      switch ((Li(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            ea(fa),
            ve(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return be(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if ((mo(t), t.alternate === null)) throw Error(i(340));
            qi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (mo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            qi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return fe(ho), null;
        case 4:
          return ve(), null;
        case 10:
          return ea(t.type), null;
        case 22:
        case 23:
          return (
            mo(t),
            oo(),
            e !== null && fe(Ca),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return ea(fa), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Kc(e, t) {
      switch ((Li(t), t.tag)) {
        case 3:
          ea(fa), ve();
          break;
        case 26:
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          ve();
          break;
        case 31:
          t.memoizedState !== null && mo(t);
          break;
        case 13:
          mo(t);
          break;
        case 19:
          fe(ho);
          break;
        case 10:
          ea(t.type);
          break;
        case 22:
        case 23:
          mo(t), oo(), e !== null && fe(Ca);
          break;
        case 24:
          ea(fa);
      }
    }
    function qc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              (r = a()), (o.destroy = r);
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        q(t, t.return, e);
      }
    }
    function Jc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                (o.destroy = void 0), (i = t);
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  q(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        q(t, t.return, e);
      }
    }
    function Yc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          to(t, n);
        } catch (t) {
          q(e, e.return, t);
        }
      }
    }
    function Xc(e, t, n) {
      (n.props = Qs(e.type, e.memoizedProps)), (n.state = e.memoizedState);
      try {
        n.componentWillUnmount();
      } catch (n) {
        q(e, t, n);
      }
    }
    function Zc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        q(e, t, n);
      }
    }
    function Qc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            q(e, t, n);
          } finally {
            (e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null);
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            q(e, t, n);
          }
        else n.current = null;
    }
    function $c(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        q(e, e.return, t);
      }
    }
    function el(e, t, n) {
      try {
        var r = e.stateNode;
        zd(r, e.type, n, t), (r[ht] = t);
      } catch (t) {
        q(e, e.return, t);
      }
    }
    function tl(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && tf(e.type)) ||
        e.tag === 4
      );
    }
    function nl(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || tl(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (
            (e.tag === 27 && tf(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function rl(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                ? n.ownerDocument.body
                : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = cn));
      else if (
        r !== 4 &&
        (r === 27 && tf(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (rl(e, t, n), e = e.sibling; e !== null; )
          rl(e, t, n), (e = e.sibling);
    }
    function z(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (
        r !== 4 &&
        (r === 27 && tf(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (z(e, t, n), e = e.sibling; e !== null; )
          z(e, t, n), (e = e.sibling);
    }
    function il(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        Rd(t, r, n), (t[mt] = e), (t[ht] = n);
      } catch (t) {
        q(e, e.return, t);
      }
    }
    var al = !1,
      ol = !1,
      sl = !1,
      cl = typeof WeakSet == `function` ? WeakSet : Set,
      ll = null;
    function ul(e, t) {
      if (((e = e.containerInfo), (Hd = dp), (e = Fr(e)), Ir(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                n.nodeType, o.nodeType;
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;

                )
                  (p = f), (f = m);
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  (f = p), (p = f.parentNode);
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Ud = { focusedElem: e, selectionRange: n }, dp = !1, ll = t;
        ll !== null;

      )
        if (((t = ll), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          (e.return = t), (ll = e);
        else
          for (; ll !== null; ) {
            switch (((t = ll), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    (a = e[n]), (a.ref.impl = a.nextImpl);
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  (e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode);
                  try {
                    var h = Qs(n.type, a);
                    (e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e);
                  } catch (e) {
                    q(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    af(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        af(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (ll = e);
              break;
            }
            ll = t.return;
          }
    }
    function dl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wl(e, n), r & 4 && qc(5, n);
          break;
        case 1:
          if ((wl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                q(n, n.return, e);
              }
            else {
              var i = Qs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              } catch (e) {
                q(n, n.return, e);
              }
            }
          r & 64 && Yc(n), r & 512 && Zc(n, n.return);
          break;
        case 3:
          if ((wl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              to(e, t);
            } catch (e) {
              q(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && il(n);
        case 26:
        case 5:
          wl(e, n), t === null && r & 4 && $c(n), r & 512 && Zc(n, n.return);
          break;
        case 12:
          wl(e, n);
          break;
        case 31:
          wl(e, n), r & 4 && gl(e, n);
          break;
        case 13:
          wl(e, n),
            r & 4 && _l(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Qu.bind(null, n)), df(e, n))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || al), !r)) {
            (t = (t !== null && t.memoizedState !== null) || ol), (i = al);
            var a = ol;
            (al = r),
              (ol = t) && !a
                ? El(e, n, (n.subtreeFlags & 8772) != 0)
                : wl(e, n),
              (al = i),
              (ol = a);
          }
          break;
        case 30:
          break;
        default:
          wl(e, n);
      }
    }
    function fl(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), fl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && St(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    var B = null,
      pl = !1;
    function ml(e, t, n) {
      for (n = n.child; n !== null; ) hl(e, t, n), (n = n.sibling);
    }
    function hl(e, t, n) {
      if (Ue && typeof Ue.onCommitFiberUnmount == `function`)
        try {
          Ue.onCommitFiberUnmount(He, n);
        } catch {}
      switch (n.tag) {
        case 26:
          ol || Qc(n, t),
            ml(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
          break;
        case 27:
          ol || Qc(n, t);
          var r = B,
            i = pl;
          tf(n.type) && ((B = n.stateNode), (pl = !1)),
            ml(e, t, n),
            _f(n.stateNode),
            (B = r),
            (pl = i);
          break;
        case 5:
          ol || Qc(n, t);
        case 6:
          if (
            ((r = B),
            (i = pl),
            (B = null),
            ml(e, t, n),
            (B = r),
            (pl = i),
            B !== null)
          )
            if (pl)
              try {
                (B.nodeType === 9
                  ? B.body
                  : B.nodeName === `HTML`
                  ? B.ownerDocument.body
                  : B
                ).removeChild(n.stateNode);
              } catch (e) {
                q(n, t, e);
              }
            else
              try {
                B.removeChild(n.stateNode);
              } catch (e) {
                q(n, t, e);
              }
          break;
        case 18:
          B !== null &&
            (pl
              ? ((e = B),
                nf(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                    ? e.ownerDocument.body
                    : e,
                  n.stateNode
                ),
                Lp(e))
              : nf(B, n.stateNode));
          break;
        case 4:
          (r = B),
            (i = pl),
            (B = n.stateNode.containerInfo),
            (pl = !0),
            ml(e, t, n),
            (B = r),
            (pl = i);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Jc(2, n, t), ol || Jc(4, n, t), ml(e, t, n);
          break;
        case 1:
          ol ||
            (Qc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Xc(n, t, r)),
            ml(e, t, n);
          break;
        case 21:
          ml(e, t, n);
          break;
        case 22:
          (ol = (r = ol) || n.memoizedState !== null), ml(e, t, n), (ol = r);
          break;
        default:
          ml(e, t, n);
      }
    }
    function gl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Lp(e);
        } catch (e) {
          q(t, t.return, e);
        }
      }
    }
    function _l(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Lp(e);
        } catch (e) {
          q(t, t.return, e);
        }
    }
    function vl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new cl()), t;
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new cl()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function yl(e, t) {
      var n = vl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = $u.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function bl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (tf(c.type)) {
                  (B = c.stateNode), (pl = !1);
                  break a;
                }
                break;
              case 5:
                (B = c.stateNode), (pl = !1);
                break a;
              case 3:
              case 4:
                (B = c.stateNode.containerInfo), (pl = !0);
                break a;
            }
            c = c.return;
          }
          if (B === null) throw Error(i(160));
          hl(o, s, a),
            (B = null),
            (pl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null);
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) Sl(t, e), (t = t.sibling);
    }
    var xl = null;
    function Sl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bl(t, e),
            Cl(e),
            r & 4 && (Jc(3, e, e.return), qc(3, e), Jc(5, e, e.return));
          break;
        case 1:
          bl(t, e),
            Cl(e),
            r & 512 && (ol || n === null || Qc(n, n.return)),
            r & 64 &&
              al &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r)))));
          break;
        case 26:
          var a = xl;
          if (
            (bl(t, e),
            Cl(e),
            r & 512 && (ol || n === null || Qc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    (r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a);
                    b: switch (r) {
                      case `title`:
                        (o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[xt] ||
                            o[mt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`)
                            )),
                          Rd(o, r, n),
                          (o[mt] = e),
                          Dt(o),
                          (r = o);
                        break a;
                      case `link`:
                        var s = Gf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        (o = a.createElement(r)),
                          Rd(o, r, n),
                          a.head.appendChild(o);
                        break;
                      case `meta`:
                        if (
                          (s = Gf(`meta`, `content`, a).get(
                            r + (n.content || ``)
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        (o = a.createElement(r)),
                          Rd(o, r, n),
                          a.head.appendChild(o);
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    (o[mt] = e), Dt(o), (r = o);
                  }
                  e.stateNode = r;
                } else Kf(a, e.type, e.stateNode);
              else e.stateNode = Bf(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  el(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Kf(a, e.type, e.stateNode)
                    : Bf(a, r, e.memoizedProps));
          }
          break;
        case 27:
          bl(t, e),
            Cl(e),
            r & 512 && (ol || n === null || Qc(n, n.return)),
            n !== null && r & 4 && el(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (
            (bl(t, e),
            Cl(e),
            r & 512 && (ol || n === null || Qc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              $t(a, ``);
            } catch (t) {
              q(e, e.return, t);
            }
          }
          r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), el(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (sl = !0);
          break;
        case 6:
          if ((bl(t, e), Cl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            (r = e.memoizedProps), (n = e.stateNode);
            try {
              n.nodeValue = r;
            } catch (t) {
              q(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Wf = null),
            (a = xl),
            (xl = bf(t.containerInfo)),
            bl(t, e),
            (xl = a),
            Cl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Lp(t.containerInfo);
            } catch (t) {
              q(e, e.return, t);
            }
          sl && ((sl = !1), V(e));
          break;
        case 4:
          (r = xl),
            (xl = bf(e.stateNode.containerInfo)),
            bl(t, e),
            Cl(e),
            (xl = r);
          break;
        case 12:
          bl(t, e), Cl(e);
          break;
        case 31:
          bl(t, e),
            Cl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), yl(e, r)));
          break;
        case 13:
          bl(t, e),
            Cl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (ru = Ne()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), yl(e, r)));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = al,
            d = ol;
          if (
            ((al = u || a),
            (ol = d || l),
            bl(t, e),
            (ol = d),
            (al = u),
            Cl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || al || ol || Tl(e)),
                n = null,
                t = e;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      (s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`);
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    q(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    q(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? rf(m, !0) : rf(l.stateNode, !1);
                  } catch (e) {
                    q(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                n === t && (n = null), (t = t.return);
              }
              n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), yl(e, n))));
          break;
        case 19:
          bl(t, e),
            Cl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), yl(e, r)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          bl(t, e), Cl(e);
      }
    }
    function Cl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (tl(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              z(e, nl(e), a);
              break;
            case 5:
              var o = n.stateNode;
              n.flags & 32 && ($t(o, ``), (n.flags &= -33)), z(e, nl(e), o);
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              rl(e, nl(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          q(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function V(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          V(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling);
        }
    }
    function wl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) dl(e, t.alternate, t), (t = t.sibling);
    }
    function Tl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Jc(4, t, t.return), Tl(t);
            break;
          case 1:
            Qc(t, t.return);
            var n = t.stateNode;
            typeof n.componentWillUnmount == `function` && Xc(t, t.return, n),
              Tl(t);
            break;
          case 27:
            _f(t.stateNode);
          case 26:
          case 5:
            Qc(t, t.return), Tl(t);
            break;
          case 22:
            t.memoizedState === null && Tl(t);
            break;
          case 30:
            Tl(t);
            break;
          default:
            Tl(t);
        }
        e = e.sibling;
      }
    }
    function El(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            El(i, a, n), qc(4, a);
            break;
          case 1:
            if (
              (El(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                q(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    eo(c[i], s);
              } catch (e) {
                q(r, r.return, e);
              }
            }
            n && o & 64 && Yc(a), Zc(a, a.return);
            break;
          case 27:
            il(a);
          case 26:
          case 5:
            El(i, a, n), n && r === null && o & 4 && $c(a), Zc(a, a.return);
            break;
          case 12:
            El(i, a, n);
            break;
          case 31:
            El(i, a, n), n && o & 4 && gl(i, a);
            break;
          case 13:
            El(i, a, n), n && o & 4 && _l(i, a);
            break;
          case 22:
            a.memoizedState === null && El(i, a, n), Zc(a, a.return);
            break;
          case 30:
            break;
          default:
            El(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Dl(e, t) {
      var n = null;
      e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ma(n));
    }
    function Ol(e, t) {
      (e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ma(e));
    }
    function kl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) Al(e, t, n, r), (t = t.sibling);
    }
    function Al(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          kl(e, t, n, r), i & 2048 && qc(9, t);
          break;
        case 1:
          kl(e, t, n, r);
          break;
        case 3:
          kl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ma(e)));
          break;
        case 12:
          if (i & 2048) {
            kl(e, t, n, r), (e = t.stateNode);
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0
                );
            } catch (e) {
              q(t, t.return, e);
            }
          } else kl(e, t, n, r);
          break;
        case 31:
          kl(e, t, n, r);
          break;
        case 13:
          kl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          (a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? kl(e, t, n, r)
                : ((a._visibility |= 2),
                  jl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
              ? kl(e, t, n, r)
              : Ml(e, t),
            i & 2048 && Dl(o, t);
          break;
        case 24:
          kl(e, t, n, r), i & 2048 && Ol(t.alternate, t);
          break;
        default:
          kl(e, t, n, r);
      }
    }
    function jl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;

      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            jl(a, o, s, c, i), qc(8, o);
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            o.memoizedState === null
              ? ((u._visibility |= 2), jl(a, o, s, c, i))
              : u._visibility & 2
              ? jl(a, o, s, c, i)
              : Ml(a, o),
              i && l & 2048 && Dl(o.alternate, o);
            break;
          case 24:
            jl(a, o, s, c, i), i && l & 2048 && Ol(o.alternate, o);
            break;
          default:
            jl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ml(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              Ml(n, r), i & 2048 && Dl(r.alternate, r);
              break;
            case 24:
              Ml(n, r), i & 2048 && Ol(r.alternate, r);
              break;
            default:
              Ml(n, r);
          }
          t = t.sibling;
        }
    }
    var Nl = 8192;
    function Pl(e, t, n) {
      if (e.subtreeFlags & Nl)
        for (e = e.child; e !== null; ) Fl(e, t, n), (e = e.sibling);
    }
    function Fl(e, t, n) {
      switch (e.tag) {
        case 26:
          Pl(e, t, n),
            e.flags & Nl &&
              e.memoizedState !== null &&
              Yf(n, xl, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Pl(e, t, n);
          break;
        case 3:
        case 4:
          var r = xl;
          (xl = bf(e.stateNode.containerInfo)), Pl(e, t, n), (xl = r);
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Nl), (Nl = 16777216), Pl(e, t, n), (Nl = r))
              : Pl(e, t, n));
          break;
        default:
          Pl(e, t, n);
      }
    }
    function Il(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (e !== null);
      }
    }
    function Ll(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (ll = r), Bl(r, e);
          }
        Il(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) Rl(e), (e = e.sibling);
    }
    function Rl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ll(e), e.flags & 2048 && Jc(9, e, e.return);
          break;
        case 3:
          Ll(e);
          break;
        case 12:
          Ll(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), zl(e))
            : Ll(e);
          break;
        default:
          Ll(e);
      }
    }
    function zl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (ll = r), Bl(r, e);
          }
        Il(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            Jc(8, t, t.return), zl(t);
            break;
          case 22:
            (n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), zl(t));
            break;
          default:
            zl(t);
        }
        e = e.sibling;
      }
    }
    function Bl(e, t) {
      for (; ll !== null; ) {
        var n = ll;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Jc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ma(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) (r.return = n), (ll = r);
        else
          a: for (n = e; ll !== null; ) {
            r = ll;
            var i = r.sibling,
              a = r.return;
            if ((fl(r), r === n)) {
              ll = null;
              break a;
            }
            if (i !== null) {
              (i.return = a), (ll = i);
              break a;
            }
            ll = a;
          }
      }
    }
    var Vl = {
        getCacheForType: function (e) {
          var t = oa(fa),
            n = t.data.get(e);
          return n === void 0 && ((n = e()), t.data.set(e, n)), n;
        },
        cacheSignal: function () {
          return oa(fa).controller.signal;
        },
      },
      Hl = typeof WeakMap == `function` ? WeakMap : Map,
      H = 0,
      U = null,
      W = null,
      G = 0,
      K = 0,
      Ul = null,
      Wl = !1,
      Gl = !1,
      Kl = !1,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = 0,
      Ql = 0,
      $l = 0,
      eu = null,
      tu = null,
      nu = !1,
      ru = 0,
      iu = 0,
      au = 1 / 0,
      ou = null,
      su = null,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = 0,
      pu = null,
      mu = null,
      hu = 0,
      gu = null;
    function _u() {
      return H & 2 && G !== 0 ? G & -G : O.T === null ? dt() : hd();
    }
    function vu() {
      if (Ql === 0)
        if (!(G & 536870912) || P) {
          var e = Xe;
          (Xe <<= 1), !(Xe & 3932160) && (Xe = 262144), (Ql = e);
        } else Ql = 536870912;
      return (e = so.current), e !== null && (e.flags |= 32), Ql;
    }
    function yu(e, t, n) {
      ((e === U && (K === 2 || K === 9)) || e.cancelPendingCommit !== null) &&
        (Eu(e, 0), Cu(e, G, Ql, !1)),
        it(e, n),
        (!(H & 2) || e !== U) &&
          (e === U && (!(H & 2) && (Xl |= n), Jl === 4 && Cu(e, G, Ql, !1)),
          sd(e));
    }
    function bu(e, t, n) {
      if (H & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || et(e, t),
        a = r ? Pu(e, t) : Mu(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Gl && !r && Cu(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !Su(n))) {
            (a = Mu(e, t, !1)), (o = !1);
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              (s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s);
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = eu;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Eu(c, s).flags |= 256), (s = Mu(c, s, !1)), s !== 2)
                ) {
                  if (Kl && !l) {
                    (c.errorRecoveryDisabledLanes |= o), (Xl |= o), (a = 4);
                    break a;
                  }
                  (o = tu),
                    (tu = a),
                    o !== null &&
                      (tu === null ? (tu = o) : tu.push.apply(tu, o));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            Eu(e, 0), Cu(e, t, 0, !0);
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Cu(r, t, Ql, !Wl);
                break a;
              case 2:
                tu = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = ru + 300 - Ne()), 10 < a)) {
              if ((Cu(r, t, Ql, !Wl), $e(r, 0, !0) !== 0)) break a;
              (du = t),
                (r.timeoutHandle = Xd(
                  xu.bind(
                    null,
                    r,
                    n,
                    tu,
                    ou,
                    nu,
                    t,
                    Ql,
                    Xl,
                    $l,
                    Wl,
                    o,
                    `Throttled`,
                    -0,
                    0
                  ),
                  a
                ));
              break a;
            }
            xu(r, n, tu, ou, nu, t, Ql, Xl, $l, Wl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      sd(e);
    }
    function xu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        (d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: cn,
        }),
          Fl(t, a, d);
        var m =
          (a & 62914560) === a
            ? ru - Ne()
            : (a & 4194048) === a
            ? iu - Ne()
            : 0;
        if (((m = Zf(d, m)), m !== null)) {
          (du = a),
            (e.cancelPendingCommit = m(
              Vu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)
            )),
            Cu(e, a, o, !l);
          return;
        }
      }
      Vu(e, t, a, n, r, i, o, s, c);
    }
    function Su(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Ar(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          (n.return = t), (t = n);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function Cu(e, t, n, r) {
      (t &= ~Zl),
        (t &= ~Xl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
      for (var i = t; 0 < i; ) {
        var a = 31 - Ge(i),
          o = 1 << a;
        (r[a] = -1), (i &= ~o);
      }
      n !== 0 && ot(e, n, t);
    }
    function wu() {
      return H & 6 ? !0 : (cd(0, !1), !1);
    }
    function Tu() {
      if (W !== null) {
        if (K === 0) var e = W.return;
        else (e = W), (Qi = Zi = null), Po(e), (La = null), (Ra = 0), (e = W);
        for (; e !== null; ) Kc(e.alternate, e), (e = e.return);
        W = null;
      }
    }
    function Eu(e, t) {
      var n = e.timeoutHandle;
      n !== -1 && ((e.timeoutHandle = -1), Zd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (du = 0),
        Tu(),
        (U = e),
        (W = n = _i(e.current, null)),
        (G = t),
        (K = 0),
        (Ul = null),
        (Wl = !1),
        (Gl = et(e, t)),
        (Kl = !1),
        ($l = Ql = Zl = Xl = Yl = Jl = 0),
        (tu = eu = null),
        (nu = !1),
        t & 8 && (t |= t & 32);
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ge(r),
            a = 1 << i;
          (t |= e[i]), (r &= ~a);
        }
      return (ql = t), ci(), n;
    }
    function Du(e, t) {
      (I = null),
        (O.H = Ws),
        t === Da || t === ka
          ? ((t = Fa()), (K = 3))
          : t === Oa
          ? ((t = Fa()), (K = 4))
          : (K =
              t === cc
                ? 8
                : typeof t == `object` && t && typeof t.then == `function`
                ? 6
                : 1),
        (Ul = t),
        W === null && ((Jl = 1), nc(e, Ti(t, e.current)));
    }
    function Ou() {
      var e = so.current;
      return e === null
        ? !0
        : (G & 4194048) === G
        ? co === null
        : (G & 62914560) === G || G & 536870912
        ? e === co
        : !1;
    }
    function ku() {
      var e = O.H;
      return (O.H = Ws), e === null ? Ws : e;
    }
    function Au() {
      var e = O.A;
      return (O.A = Vl), e;
    }
    function ju() {
      (Jl = 4),
        Wl || ((G & 4194048) !== G && so.current !== null) || (Gl = !0),
        (!(Yl & 134217727) && !(Xl & 134217727)) ||
          U === null ||
          Cu(U, G, Ql, !1);
    }
    function Mu(e, t, n) {
      var r = H;
      H |= 2;
      var i = ku(),
        a = Au();
      (U !== e || G !== t) && ((ou = null), Eu(e, t)), (t = !1);
      var o = Jl;
      a: do
        try {
          if (K !== 0 && W !== null) {
            var s = W,
              c = Ul;
            switch (K) {
              case 8:
                Tu(), (o = 6);
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                so.current === null && (t = !0);
                var l = K;
                if (((K = 0), (Ul = null), Ru(e, s, c, l), n && Gl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                (l = K), (K = 0), (Ul = null), Ru(e, s, c, l);
            }
          }
          Nu(), (o = Jl);
          break;
        } catch (t) {
          Du(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Qi = Zi = null),
        (H = r),
        (O.H = i),
        (O.A = a),
        W === null && ((U = null), (G = 0), ci()),
        o
      );
    }
    function Nu() {
      for (; W !== null; ) Iu(W);
    }
    function Pu(e, t) {
      var n = H;
      H |= 2;
      var r = ku(),
        a = Au();
      U !== e || G !== t
        ? ((ou = null), (au = Ne() + 500), Eu(e, t))
        : (Gl = et(e, t));
      a: do
        try {
          if (K !== 0 && W !== null) {
            t = W;
            var o = Ul;
            b: switch (K) {
              case 1:
                (K = 0), (Ul = null), Ru(e, t, o, 1);
                break;
              case 2:
              case 9:
                if (ja(o)) {
                  (K = 0), (Ul = null), Lu(t);
                  break;
                }
                (t = function () {
                  (K !== 2 && K !== 9) || U !== e || (K = 7), sd(e);
                }),
                  o.then(t, t);
                break a;
              case 3:
                K = 7;
                break a;
              case 4:
                K = 5;
                break a;
              case 7:
                ja(o)
                  ? ((K = 0), (Ul = null), Lu(t))
                  : ((K = 0), (Ul = null), Ru(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (W.tag) {
                  case 26:
                    s = W.memoizedState;
                  case 5:
                  case 27:
                    var c = W;
                    if (s ? Jf(s) : c.stateNode.complete) {
                      (K = 0), (Ul = null);
                      var l = c.sibling;
                      if (l !== null) W = l;
                      else {
                        var u = c.return;
                        u === null ? (W = null) : ((W = u), zu(u));
                      }
                      break b;
                    }
                }
                (K = 0), (Ul = null), Ru(e, t, o, 5);
                break;
              case 6:
                (K = 0), (Ul = null), Ru(e, t, o, 6);
                break;
              case 8:
                Tu(), (Jl = 6);
                break a;
              default:
                throw Error(i(462));
            }
          }
          Fu();
          break;
        } catch (t) {
          Du(e, t);
        }
      while (1);
      return (
        (Qi = Zi = null),
        (O.H = r),
        (O.A = a),
        (H = n),
        W === null ? ((U = null), (G = 0), ci(), Jl) : 0
      );
    }
    function Fu() {
      for (; W !== null && !je(); ) Iu(W);
    }
    function Iu(e) {
      var t = Rc(e.alternate, e, ql);
      (e.memoizedProps = e.pendingProps), t === null ? zu(e) : (W = t);
    }
    function Lu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Sc(n, t, t.pendingProps, t.type, void 0, G);
          break;
        case 11:
          t = Sc(n, t, t.pendingProps, t.type.render, t.ref, G);
          break;
        case 5:
          Po(t);
        default:
          Kc(n, t), (t = W = vi(t, ql)), (t = Rc(n, t, ql));
      }
      (e.memoizedProps = e.pendingProps), t === null ? zu(e) : (W = t);
    }
    function Ru(e, t, n, r) {
      (Qi = Zi = null), Po(t), (La = null), (Ra = 0);
      var i = t.return;
      try {
        if (sc(e, i, t, n, G)) {
          (Jl = 1), nc(e, Ti(n, e.current)), (W = null);
          return;
        }
      } catch (t) {
        if (i !== null) throw ((W = i), t);
        (Jl = 1), nc(e, Ti(n, e.current)), (W = null);
        return;
      }
      t.flags & 32768
        ? (P || r === 1
            ? (e = !0)
            : Gl || G & 536870912
            ? (e = !1)
            : ((Wl = e = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = so.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
          Bu(t, e))
        : zu(t);
    }
    function zu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Bu(t, Wl);
          return;
        }
        e = t.return;
        var n = Wc(t.alternate, t, ql);
        if (n !== null) {
          W = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          W = t;
          return;
        }
        W = t = e;
      } while (t !== null);
      Jl === 0 && (Jl = 5);
    }
    function Bu(e, t) {
      do {
        var n = Gc(e.alternate, e);
        if (n !== null) {
          (n.flags &= 32767), (W = n);
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          W = e;
          return;
        }
        W = e = n;
      } while (e !== null);
      (Jl = 6), (W = null);
    }
    function Vu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Ku();
      while (cu !== 0);
      if (H & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= si),
          at(e, n, o, s, c, l),
          e === U && ((W = U = null), (G = 0)),
          (uu = t),
          (lu = e),
          (du = n),
          (fu = o),
          (pu = a),
          (mu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              ed(Le, function () {
                return qu(), null;
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          (r = O.T), (O.T = null), (a = k.p), (k.p = 2), (s = H), (H |= 4);
          try {
            ul(e, t, n);
          } finally {
            (H = s), (k.p = a), (O.T = r);
          }
        }
        (cu = 1), Hu(), Uu(), Wu();
      }
    }
    function Hu() {
      if (cu === 1) {
        cu = 0;
        var e = lu,
          t = uu,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          (n = O.T), (O.T = null);
          var r = k.p;
          k.p = 2;
          var i = H;
          H |= 4;
          try {
            Sl(t, e);
            var a = Ud,
              o = Fr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Pr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Ir(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  (s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Nr(s, h),
                      v = Nr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
              }
            }
            (dp = !!Hd), (Ud = Hd = null);
          } finally {
            (H = i), (k.p = r), (O.T = n);
          }
        }
        (e.current = t), (cu = 2);
      }
    }
    function Uu() {
      if (cu === 2) {
        cu = 0;
        var e = lu,
          t = uu,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          (n = O.T), (O.T = null);
          var r = k.p;
          k.p = 2;
          var i = H;
          H |= 4;
          try {
            dl(e, t.alternate, t);
          } finally {
            (H = i), (k.p = r), (O.T = n);
          }
        }
        cu = 3;
      }
    }
    function Wu() {
      if (cu === 4 || cu === 3) {
        (cu = 0), Me();
        var e = lu,
          t = uu,
          n = du,
          r = mu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (cu = 5)
          : ((cu = 0), (uu = lu = null), Gu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (su = null),
          ut(n),
          (t = t.stateNode),
          Ue && typeof Ue.onCommitFiberRoot == `function`)
        )
          try {
            Ue.onCommitFiberRoot(He, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          (t = O.T), (i = k.p), (k.p = 2), (O.T = null);
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            (O.T = t), (k.p = i);
          }
        }
        du & 3 && Ku(),
          sd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === gu
              ? hu++
              : ((hu = 0), (gu = e))
            : (hu = 0),
          cd(0, !1);
      }
    }
    function Gu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ma(t)));
    }
    function Ku() {
      return Hu(), Uu(), Wu(), qu();
    }
    function qu() {
      if (cu !== 5) return !1;
      var e = lu,
        t = fu;
      fu = 0;
      var n = ut(du),
        r = O.T,
        a = k.p;
      try {
        (k.p = 32 > n ? 32 : n), (O.T = null), (n = pu), (pu = null);
        var o = lu,
          s = du;
        if (((cu = 0), (uu = lu = null), (du = 0), H & 6)) throw Error(i(331));
        var c = H;
        if (
          ((H |= 4),
          Rl(o.current),
          Al(o, o.current, s, n),
          (H = c),
          cd(0, !1),
          Ue && typeof Ue.onPostCommitFiberRoot == `function`)
        )
          try {
            Ue.onPostCommitFiberRoot(He, o);
          } catch {}
        return !0;
      } finally {
        (k.p = a), (O.T = r), Gu(e, t);
      }
    }
    function Ju(e, t, n) {
      (t = Ti(n, t)),
        (t = ic(e.stateNode, t, 2)),
        (e = Ja(e, t, 2)),
        e !== null && (it(e, 2), sd(e));
    }
    function q(e, t, n) {
      if (e.tag === 3) Ju(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Ju(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (su === null || !su.has(r)))
            ) {
              (e = Ti(n, e)),
                (n = ac(2)),
                (r = Ja(t, n, 2)),
                r !== null && (oc(n, r, t, e), it(r, 2), sd(r));
              break;
            }
          }
          t = t.return;
        }
    }
    function Yu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Hl();
        var i = new Set();
        r.set(t, i);
      } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
      i.has(n) ||
        ((Kl = !0), i.add(n), (e = Xu.bind(null, e, t, n)), t.then(e, e));
    }
    function Xu(e, t, n) {
      var r = e.pingCache;
      r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        U === e &&
          (G & n) === n &&
          (Jl === 4 || (Jl === 3 && (G & 62914560) === G && 300 > Ne() - ru)
            ? !(H & 2) && Eu(e, 0)
            : (Zl |= n),
          $l === G && ($l = 0)),
        sd(e);
    }
    function Zu(e, t) {
      t === 0 && (t = nt()), (e = di(e, t)), e !== null && (it(e, t), sd(e));
    }
    function Qu(e) {
      var t = e.memoizedState,
        n = 0;
      t !== null && (n = t.retryLane), Zu(e, n);
    }
    function $u(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      r !== null && r.delete(t), Zu(e, n);
    }
    function ed(e, t) {
      return ke(e, t);
    }
    var td = null,
      nd = null,
      rd = !1,
      id = !1,
      ad = !1,
      od = 0;
    function sd(e) {
      e !== nd &&
        e.next === null &&
        (nd === null ? (td = nd = e) : (nd = nd.next = e)),
        (id = !0),
        rd || ((rd = !0), md());
    }
    function cd(e, t) {
      if (!ad && id) {
        ad = !0;
        do
          for (var n = !1, r = td; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  (a = (1 << (31 - Ge(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0);
                }
                a !== 0 && ((n = !0), pd(r, a));
              } else
                (a = G),
                  (a = $e(
                    r,
                    r === U ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1
                  )),
                  !(a & 3) || et(r, a) || ((n = !0), pd(r, a));
            r = r.next;
          }
        while (n);
        ad = !1;
      }
    }
    function ld() {
      ud();
    }
    function ud() {
      id = rd = !1;
      var e = 0;
      od !== 0 && Yd() && (e = od);
      for (var t = Ne(), n = null, r = td; r !== null; ) {
        var i = r.next,
          a = dd(r, t);
        a === 0
          ? ((r.next = null),
            n === null ? (td = i) : (n.next = i),
            i === null && (nd = n))
          : ((n = r), (e !== 0 || a & 3) && (id = !0)),
          (r = i);
      }
      (cu !== 0 && cu !== 5) || cd(e, !1), od !== 0 && (od = 0);
    }
    function dd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;

      ) {
        var o = 31 - Ge(a),
          s = 1 << o,
          c = i[o];
        c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = tt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s);
      }
      if (
        ((t = U),
        (n = G),
        (n = $e(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (K === 2 || K === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ae(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || et(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ae(r), ut(n))) {
          case 2:
          case 8:
            n = Ie;
            break;
          case 32:
            n = Le;
            break;
          case 268435456:
            n = ze;
            break;
          default:
            n = Le;
        }
        return (
          (r = fd.bind(null, e)),
          (n = ke(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Ae(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function fd(e, t) {
      if (cu !== 0 && cu !== 5)
        return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var n = e.callbackNode;
      if (Ku() && e.callbackNode !== n) return null;
      var r = G;
      return (
        (r = $e(
          e,
          e === U ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        r === 0
          ? null
          : (bu(e, r, t),
            dd(e, Ne()),
            e.callbackNode != null && e.callbackNode === n
              ? fd.bind(null, e)
              : null)
      );
    }
    function pd(e, t) {
      if (Ku()) return null;
      bu(e, t, !0);
    }
    function md() {
      $d(function () {
        H & 6 ? ke(Fe, ld) : ud();
      });
    }
    function hd() {
      if (od === 0) {
        var e = _a;
        e === 0 && ((e = Ye), (Ye <<= 1), !(Ye & 261888) && (Ye = 256)),
          (od = e);
      }
      return od;
    }
    function gd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
        ? e
        : sn(`` + e);
    }
    function _d(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function vd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = gd((i[ht] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[ht] || null)
            ? gd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new kn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (od !== 0) {
                    var e = o ? _d(i, o) : new FormData(i);
                    As(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? _d(i, o) : new FormData(i)),
                    As(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var yd = 0; yd < ni.length; yd++) {
      var bd = ni[yd];
      ri(bd.toLowerCase(), `on` + (bd[0].toUpperCase() + bd.slice(1)));
    }
    ri(Jr, `onAnimationEnd`),
      ri(Yr, `onAnimationIteration`),
      ri(Xr, `onAnimationStart`),
      ri(`dblclick`, `onDoubleClick`),
      ri(`focusin`, `onFocus`),
      ri(`focusout`, `onBlur`),
      ri(Zr, `onTransitionRun`),
      ri(Qr, `onTransitionStart`),
      ri($r, `onTransitionCancel`),
      ri(ei, `onTransitionEnd`),
      jt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      jt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      jt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      jt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      At(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `
        )
      ),
      At(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `
        )
      ),
      At(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      At(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `)
      ),
      At(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `)
      ),
      At(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)
      );
    var xd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `
        ),
      Sd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(xd)
      );
    function Cd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                ii(e);
              }
              (i.currentTarget = null), (a = c);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                ii(e);
              }
              (i.currentTarget = null), (a = c);
            }
        }
      }
    }
    function J(e, t) {
      var n = t[_t];
      n === void 0 && (n = t[_t] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Dd(t, e, 2, !1), n.add(r));
    }
    function wd(e, t, n) {
      var r = 0;
      t && (r |= 4), Dd(n, e, r, t);
    }
    var Td = `_reactListening` + Math.random().toString(36).slice(2);
    function Ed(e) {
      if (!e[Td]) {
        (e[Td] = !0),
          Ot.forEach(function (t) {
            t !== `selectionchange` &&
              (Sd.has(t) || wd(t, !1, e), wd(t, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Td] || ((t[Td] = !0), wd(`selectionchange`, !1, t));
      }
    }
    function Dd(e, t, n, r) {
      switch (vp(t)) {
        case 2:
          var i = fp;
          break;
        case 8:
          i = pp;
          break;
        default:
          i = mp;
      }
      (n = i.bind(null, t, n, e)),
        (i = void 0),
        !vn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
          ? e.addEventListener(t, n, !1)
          : e.addEventListener(t, n, { passive: i });
    }
    function Od(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = Ct(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      hn(function () {
        var r = a,
          i = un(n),
          s = [];
        a: {
          var c = ti.get(e);
          if (c !== void 0) {
            var l = kn,
              u = e;
            switch (e) {
              case `keypress`:
                if (wn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = qn;
                break;
              case `focusin`:
                (u = `focus`), (l = Rn);
                break;
              case `focusout`:
                (u = `blur`), (l = Rn);
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Rn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = In;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Ln;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Yn;
                break;
              case Jr:
              case Yr:
              case Xr:
                l = zn;
                break;
              case ei:
                l = Xn;
                break;
              case `scroll`:
              case `scrollend`:
                l = jn;
                break;
              case `wheel`:
                l = Zn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Bn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Jn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Qn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = gn(m, p)), g != null && d.push(kd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== ln &&
                (u = n.relatedTarget || n.fromElement) &&
                (Ct(u) || u[gt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                  ? c.defaultView || c.parentWindow
                  : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Ct(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = In),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Jn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : Tt(l)),
                (h = u == null ? c : Tt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                Ct(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = jd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) (p = d(p)), h--;
                  for (; 0 < g - h; ) (m = d(m)), g--;
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    (p = d(p)), (m = d(m));
                  }
                  d = null;
                }
              else d = null;
              l !== null && Md(s, c, l, d, !1),
                u !== null && f !== null && Md(s, f, u, d, !0);
            }
          }
          a: {
            if (
              ((c = r ? Tt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = vr;
            else if (fr(c))
              if (yr) v = Or;
              else {
                v = Er;
                var y = Tr;
              }
            else
              (l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && rn(r.elementType) && (v = vr)
                  : (v = Dr);
            if ((v &&= v(e, r))) {
              pr(s, v, n, i);
              break a;
            }
            y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Yt(c, `number`, c.value);
          }
          switch (((y = r ? Tt(r) : window), e)) {
            case `focusin`:
              (fr(y) || y.contentEditable === `true`) &&
                ((Rr = y), (zr = r), (Br = null));
              break;
            case `focusout`:
              Br = zr = Rr = null;
              break;
            case `mousedown`:
              Vr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              (Vr = !1), Hr(s, n, i);
              break;
            case `selectionchange`:
              if (Lr) break;
            case `keydown`:
            case `keyup`:
              Hr(s, n, i);
          }
          var b;
          if (er)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            cr
              ? or(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          x &&
            (rr &&
              n.locale !== `ko` &&
              (cr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && cr && (b = Cn())
                : ((bn = i),
                  (xn = `value` in bn ? bn.value : bn.textContent),
                  (cr = !0))),
            (y = Ad(r, x)),
            0 < y.length &&
              ((x = new Vn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = sr(n)), b !== null && (x.data = b)))),
            (b = nr ? lr(e, n) : ur(e, n)) &&
              ((x = Ad(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Vn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            vd(s, e, r, n, i);
        }
        Cd(s, t);
      });
    }
    function kd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ad(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = gn(e, n)),
            i != null && r.unshift(kd(e, i, a)),
            (i = gn(e, t)),
            i != null && r.push(kd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function jd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Md(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        (s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = gn(n, a)), l != null && o.unshift(kd(n, l, c)))
            : i || ((l = gn(n, a)), l != null && o.push(kd(n, l, c)))),
          (n = n.return);
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Nd = /\r\n?/g,
      Pd = /\u0000|\uFFFD/g;
    function Fd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Nd,
          `
`
        )
        .replace(Pd, ``);
    }
    function Id(e, t) {
      return (t = Fd(t)), Fd(e) === t;
    }
    function Y(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || $t(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              $t(e, `` + r);
          break;
        case `className`:
          Lt(e, `class`, r);
          break;
        case `tabIndex`:
          Lt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Lt(e, n, r);
          break;
        case `style`:
          nn(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Lt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = sn(`` + r)), e.setAttribute(n, r);
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && Y(e, t, `name`, a.name, a, null),
                  Y(e, t, `formEncType`, a.formEncType, a, null),
                  Y(e, t, `formMethod`, a.formMethod, a, null),
                  Y(e, t, `formTarget`, a.formTarget, a, null))
                : (Y(e, t, `encType`, a.encType, a, null),
                  Y(e, t, `method`, a.method, a, null),
                  Y(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          (r = sn(`` + r)), e.setAttribute(n, r);
          break;
        case `onClick`:
          r != null && (e.onclick = cn);
          break;
        case `onScroll`:
          r != null && J(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && J(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          (n = sn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
              r != null &&
              typeof r != `function` &&
              typeof r != `symbol`
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          J(`beforetoggle`, e), J(`toggle`, e), It(e, `popover`, r);
          break;
        case `xlinkActuate`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          It(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = an.get(n) || n), It(e, n, r));
      }
    }
    function Ld(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          nn(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? $t(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && $t(e, `` + r);
          break;
        case `onScroll`:
          r != null && J(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && J(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = cn);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!kt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[ht] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a);
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                ? e.setAttribute(n, ``)
                : It(e, n, r);
            }
      }
    }
    function Rd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          J(`error`, e), J(`load`, e);
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    Y(e, t, o, s, n, null);
                }
            }
          a && Y(e, t, `srcSet`, n.srcSet, n, null),
            r && Y(e, t, `src`, n.src, n, null);
          return;
        case `input`:
          J(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    Y(e, t, r, d, n, null);
                }
            }
          Jt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (J(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  Y(e, t, a, c, n, null);
              }
          (t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Xt(e, !!r, n, !0) : Xt(e, !!r, t, !1);
          return;
        case `textarea`:
          for (s in (J(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  Y(e, t, s, c, n, null);
              }
          Qt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  Y(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          J(`beforetoggle`, e), J(`toggle`, e), J(`cancel`, e), J(`close`, e);
          break;
        case `iframe`:
        case `object`:
          J(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < xd.length; r++) J(xd[r], e);
          break;
        case `image`:
          J(`error`, e), J(`load`, e);
          break;
        case `details`:
          J(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          J(`error`, e), J(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  Y(e, t, u, r, n, null);
              }
          return;
        default:
          if (rn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Ld(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && Y(e, t, c, r, n, null));
    }
    function zd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || Y(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && Y(e, t, p, m, r, f);
              }
          }
          qt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || Y(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && Y(e, t, a, o, r, l);
              }
          (t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Xt(e, !!n, n ? [] : ``, !1) : Xt(e, !!n, t, !0))
              : Xt(e, !!n, p, !1);
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  Y(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && Y(e, t, s, a, r, o);
              }
          Zt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  Y(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  Y(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            (p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                Y(e, t, g, null, r, p);
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  Y(e, t, u, p, r, m);
              }
          return;
        default:
          if (rn(t)) {
            for (var _ in n)
              (p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Ld(e, t, _, void 0, r, p);
            for (d in r)
              (p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Ld(e, t, d, p, r, m);
            return;
          }
      }
      for (var v in n)
        (p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            Y(e, t, v, null, r, p);
      for (f in r)
        (p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            Y(e, t, f, p, r, m);
    }
    function Bd(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Vd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Bd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Bd(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Hd = null,
      Ud = null;
    function Wd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Gd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Kd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function qd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Jd = null;
    function Yd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Jd
          ? !1
          : ((Jd = e), !0)
        : ((Jd = null), !1);
    }
    var Xd = typeof setTimeout == `function` ? setTimeout : void 0,
      Zd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Qd = typeof Promise == `function` ? Promise : void 0,
      $d =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Qd === void 0
          ? Xd
          : function (e) {
              return Qd.resolve(null).then(e).catch(ef);
            };
    function ef(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function tf(e) {
      return e === `head`;
    }
    function nf(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              e.removeChild(i), Lp(t);
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) _f(e.ownerDocument.documentElement);
          else if (n === `head`) {
            (n = e.ownerDocument.head), _f(n);
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              a[xt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o);
            }
          } else n === `body` && _f(e.ownerDocument.body);
        n = i;
      } while (n);
      Lp(t);
    }
    function rf(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function af(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            af(n), St(n);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function of(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[xt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = ff(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function sf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = ff(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function cf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = ff(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function lf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function uf(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function df(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          t(), n.removeEventListener(`DOMContentLoaded`, r);
        };
        n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r);
      }
    }
    function ff(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var pf = null;
    function mf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return ff(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function hf(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function gf(e, t, n) {
      switch (((t = Wd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function _f(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      St(e);
    }
    var vf = new Map(),
      yf = new Set();
    function bf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
        ? e
        : e.ownerDocument;
    }
    var xf = k.d;
    k.d = { f: Sf, r: Cf, D: Ef, C: Df, L: Of, m: kf, X: jf, S: Af, M: Mf };
    function Sf() {
      var e = xf.f(),
        t = wu();
      return e || t;
    }
    function Cf(e) {
      var t = wt(e);
      t !== null && t.tag === 5 && t.type === `form` ? Ms(t) : xf.r(e);
    }
    var wf = typeof document > `u` ? null : document;
    function Tf(e, t, n) {
      var r = wf;
      if (r && typeof t == `string` && t) {
        var i = Kt(t);
        (i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          yf.has(i) ||
            (yf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Rd(t, `link`, e),
              Dt(t),
              r.head.appendChild(t)));
      }
    }
    function Ef(e) {
      xf.D(e), Tf(`dns-prefetch`, e, null);
    }
    function Df(e, t) {
      xf.C(e, t), Tf(`preconnect`, e, t);
    }
    function Of(e, t, n) {
      xf.L(e, t, n);
      var r = wf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Kt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Kt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Kt(n.imageSizes) + `"]`))
          : (i += `[href="` + Kt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Pf(e);
            break;
          case `script`:
            a = Rf(e);
        }
        vf.has(a) ||
          ((e = f(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n
          )),
          vf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Ff(a))) ||
            (t === `script` && r.querySelector(zf(a))) ||
            ((t = r.createElement(`link`)),
            Rd(t, `link`, e),
            Dt(t),
            r.head.appendChild(t)));
      }
    }
    function kf(e, t) {
      xf.m(e, t);
      var n = wf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Kt(r) +
            `"][href="` +
            Kt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Rf(e);
        }
        if (
          !vf.has(a) &&
          ((e = f({ rel: `modulepreload`, href: e }, t)),
          vf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zf(a))) return;
          }
          (r = n.createElement(`link`)),
            Rd(r, `link`, e),
            Dt(r),
            n.head.appendChild(r);
        }
      }
    }
    function Af(e, t, n) {
      xf.S(e, t, n);
      var r = wf;
      if (r && e) {
        var i = Et(r).hoistableStyles,
          a = Pf(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Ff(a)))) s.loading = 5;
          else {
            (e = f({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = vf.get(a)) && Hf(e, n);
            var c = (o = r.createElement(`link`));
            Dt(c),
              Rd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                (c.onload = e), (c.onerror = t);
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Vf(o, t, r);
          }
          (o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o);
        }
      }
    }
    function jf(e, t) {
      xf.X(e, t);
      var n = wf;
      if (n && e) {
        var r = Et(n).hoistableScripts,
          i = Rf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zf(i))),
          a ||
            ((e = f({ src: e, async: !0 }, t)),
            (t = vf.get(i)) && Uf(e, t),
            (a = n.createElement(`script`)),
            Dt(a),
            Rd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Mf(e, t) {
      xf.M(e, t);
      var n = wf;
      if (n && e) {
        var r = Et(n).hoistableScripts,
          i = Rf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zf(i))),
          a ||
            ((e = f({ src: e, async: !0, type: `module` }, t)),
            (t = vf.get(i)) && Uf(e, t),
            (a = n.createElement(`script`)),
            Dt(a),
            Rd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Nf(e, t, n, r) {
      var a = (a = he.current) ? bf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Pf(n.href)),
              (n = Et(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Pf(n.href);
            var o = Et(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Ff(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                vf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  vf.set(e, n),
                  o || Lf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Rf(n)),
                (n = Et(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Pf(e) {
      return `href="` + Kt(e) + `"`;
    }
    function Ff(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function If(e) {
      return f({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Lf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Rd(t, `link`, n),
          Dt(t),
          e.head.appendChild(t));
    }
    function Rf(e) {
      return `[src="` + Kt(e) + `"]`;
    }
    function zf(e) {
      return `script[async]` + e;
    }
    function Bf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Kt(n.href) + `"]`);
            if (r) return (t.instance = r), Dt(r), r;
            var a = f({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Dt(r),
              Rd(r, `style`, a),
              Vf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Pf(n.href);
            var o = e.querySelector(Ff(a));
            if (o) return (t.state.loading |= 4), (t.instance = o), Dt(o), o;
            (r = If(n)),
              (a = vf.get(a)) && Hf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Dt(o);
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                (s.onload = e), (s.onerror = t);
              })),
              Rd(o, `link`, r),
              (t.state.loading |= 4),
              Vf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Rf(n.src)),
              (a = e.querySelector(zf(o)))
                ? ((t.instance = a), Dt(a), a)
                : ((r = n),
                  (a = vf.get(o)) && ((r = f({}, n)), Uf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Dt(a),
                  Rd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Vf(r, n.precedence, e));
      return t.instance;
    }
    function Vf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Hf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title);
    }
    function Uf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity);
    }
    var Wf = null;
    function Gf(e, t, n) {
      if (Wf === null) {
        var r = new Map(),
          i = (Wf = new Map());
        i.set(n, r);
      } else (i = Wf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[xt] ||
            a[mt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Kf(e, t, n) {
      (e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null
        );
    }
    function qf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled), typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Jf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Yf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Pf(r.href),
            a = t.querySelector(Ff(i));
          if (a) {
            (t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Qf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Dt(a);
            return;
          }
          (a = t.ownerDocument || t),
            (r = If(r)),
            (i = vf.get(i)) && Hf(r, i),
            (a = a.createElement(`link`)),
            Dt(a);
          var o = a;
          (o._p = new Promise(function (e, t) {
            (o.onload = e), (o.onerror = t);
          })),
            Rd(a, `link`, r),
            (n.instance = a);
        }
        e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Qf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n));
      }
    }
    var Xf = 0;
    function Zf(e, t) {
      return (
        e.stylesheets && e.count === 0 && ep(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && ep(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  (e.unsuspend = null), t();
                }
              }, 6e4 + t);
              0 < e.imgBytes && Xf === 0 && (Xf = 62500 * Vd());
              var i = setTimeout(function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && ep(e, e.stylesheets), e.unsuspend))
                ) {
                  var t = e.unsuspend;
                  (e.unsuspend = null), t();
                }
              }, (e.imgBytes > Xf ? 50 : 800) + t);
              return (
                (e.unsuspend = n),
                function () {
                  (e.unsuspend = null), clearTimeout(r), clearTimeout(i);
                }
              );
            }
          : null
      );
    }
    function Qf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) ep(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
      }
    }
    var $f = null;
    function ep(e, t) {
      (e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          ($f = new Map()),
          t.forEach(tp, e),
          ($f = null),
          Qf.call(e));
    }
    function tp(e, t) {
      if (!(t.state.loading & 4)) {
        var n = $f.get(e);
        if (n) var r = n.get(null);
        else {
          (n = new Map()), $f.set(e, n);
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        (i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Qf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var np = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: ce,
      _currentValue2: ce,
      _threadCount: 0,
    };
    function rp(e, t, n, r, i, a, o, s, c) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = rt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = rt(0)),
        (this.hiddenUpdates = rt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map());
    }
    function ip(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new rp(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = hi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = pa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        F(a),
        e
      );
    }
    function ap(e) {
      return e ? ((e = pi), e) : pi;
    }
    function op(e, t, n, r, i, a) {
      (i = ap(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = qa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ja(e, r, t)),
        n !== null && (yu(n, e, t), Ya(n, e, t));
    }
    function sp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function cp(e, t) {
      sp(e, t), (e = e.alternate) && sp(e, t);
    }
    function lp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = di(e, 67108864);
        t !== null && yu(t, e, 67108864), cp(e, 67108864);
      }
    }
    function up(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = _u();
        t = lt(t);
        var n = di(e, t);
        n !== null && yu(n, e, t), cp(e, t);
      }
    }
    var dp = !0;
    function fp(e, t, n, r) {
      var i = O.T;
      O.T = null;
      var a = k.p;
      try {
        (k.p = 2), mp(e, t, n, r);
      } finally {
        (k.p = a), (O.T = i);
      }
    }
    function pp(e, t, n, r) {
      var i = O.T;
      O.T = null;
      var a = k.p;
      try {
        (k.p = 8), mp(e, t, n, r);
      } finally {
        (k.p = a), (O.T = i);
      }
    }
    function mp(e, t, n, r) {
      if (dp) {
        var i = hp(r);
        if (i === null) Od(e, t, r, gp, n), Dp(e, r);
        else if (kp(i, e, t, n, r)) r.stopPropagation();
        else if ((Dp(e, r), t & 4 && -1 < Ep.indexOf(e))) {
          for (; i !== null; ) {
            var a = wt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Qe(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ge(o));
                        (s.entanglements[1] |= c), (o &= ~c);
                      }
                      sd(a), !(H & 6) && ((au = Ne() + 500), cd(0, !1));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (s = di(a, 2)), s !== null && yu(s, a, 2), wu(), cp(a, 2);
              }
            if (((a = hp(r)), a === null && Od(e, t, r, gp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Od(e, t, r, null, n);
      }
    }
    function hp(e) {
      return (e = un(e)), _p(e);
    }
    var gp = null;
    function _p(e) {
      if (((gp = null), (e = Ct(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (gp = e), null;
    }
    function vp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Pe()) {
            case Fe:
              return 2;
            case Ie:
              return 8;
            case Le:
            case Re:
              return 32;
            case ze:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var yp = !1,
      bp = null,
      xp = null,
      Sp = null,
      Cp = new Map(),
      wp = new Map(),
      Tp = [],
      Ep =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `
        );
    function Dp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          bp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          xp = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Sp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Cp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          wp.delete(t.pointerId);
      }
    }
    function Op(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = wt(t)), t !== null && lp(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function kp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return (bp = Op(bp, e, t, n, r, i)), !0;
        case `dragenter`:
          return (xp = Op(xp, e, t, n, r, i)), !0;
        case `mouseover`:
          return (Sp = Op(Sp, e, t, n, r, i)), !0;
        case `pointerover`:
          var a = i.pointerId;
          return Cp.set(a, Op(Cp.get(a) || null, e, t, n, r, i)), !0;
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            wp.set(a, Op(wp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ap(e) {
      var t = Ct(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              (e.blockedOn = t),
                ft(e.priority, function () {
                  up(n);
                });
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              (e.blockedOn = t),
                ft(e.priority, function () {
                  up(n);
                });
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function jp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = hp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          (ln = r), n.target.dispatchEvent(r), (ln = null);
        } else return (t = wt(n)), t !== null && lp(t), (e.blockedOn = n), !1;
        t.shift();
      }
      return !0;
    }
    function Mp(e, t, n) {
      jp(e) && n.delete(t);
    }
    function Np() {
      (yp = !1),
        bp !== null && jp(bp) && (bp = null),
        xp !== null && jp(xp) && (xp = null),
        Sp !== null && jp(Sp) && (Sp = null),
        Cp.forEach(Mp),
        wp.forEach(Mp);
    }
    function Pp(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        yp ||
          ((yp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Np)));
    }
    var Fp = null;
    function Ip(e) {
      Fp !== e &&
        ((Fp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Fp === e && (Fp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (_p(r || n) === null) continue;
              break;
            }
            var a = wt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              As(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i
              ));
          }
        }));
    }
    function Lp(e) {
      function t(t) {
        return Pp(t, e);
      }
      bp !== null && Pp(bp, e),
        xp !== null && Pp(xp, e),
        Sp !== null && Pp(Sp, e),
        Cp.forEach(t),
        wp.forEach(t);
      for (var n = 0; n < Tp.length; n++) {
        var r = Tp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Tp.length && ((n = Tp[0]), n.blockedOn === null); )
        Ap(n), n.blockedOn === null && Tp.shift();
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[ht] || null;
          if (typeof a == `function`) o || Ip(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[ht] || null))) s = o.formAction;
              else if (_p(i) !== null) continue;
            } else s = o.action;
            typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Ip(n);
          }
        }
    }
    function Rp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        i !== null && (i(), (i = null)), r || setTimeout(n, 20);
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            (r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null));
          }
        );
      }
    }
    function zp(e) {
      this._internalRoot = e;
    }
    (Bp.prototype.render = zp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        op(n, _u(), e, t, null, null);
      }),
      (Bp.prototype.unmount = zp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            op(e.current, 2, null, e, null, null), wu(), (t[gt] = null);
          }
        });
    function Bp(e) {
      this._internalRoot = e;
    }
    Bp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = dt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Tp.length && t !== 0 && t < Tp[n].priority; n++);
        Tp.splice(n, 0, e), n === 0 && Ap(e);
      }
    };
    var Vp = n.version;
    if (Vp !== `19.2.5`) throw Error(i(527, Vp, `19.2.5`));
    k.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = u(t)),
        (e = e === null ? null : d(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Hp = {
      bundleType: 0,
      version: `19.2.5`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: O,
      reconcilerVersion: `19.2.5`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var X = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!X.isDisabled && X.supportsFiber)
        try {
          (He = X.inject(Hp)), (Ue = X);
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = $s,
        s = ec,
        c = tc;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ip(e, 1, !1, null, null, n, r, null, o, s, c, Rp)),
        (e[gt] = t.current),
        Ed(e),
        new zp(t)
      );
    };
  }),
  y = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = v());
  }),
  b = u(p(), 1),
  x = y(),
  S = `modulepreload`,
  C = function (e) {
    return `/` + e;
  },
  w = {},
  ee = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e })
            )
          )
        );
      }
      r = o(
        t.map((t) => {
          if (((t = C(t, n)), t in w)) return;
          w[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : S),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`))
                );
            });
        })
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  te = `popstate`;
function ne(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function re(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return oe(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : se(t);
  }
  return O(t, n, null, e);
}
function T(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function ie(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function E() {
  return Math.random().toString(36).substring(2, 10);
}
function ae(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.unstable_mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function oe(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? D(t) : t),
    state: n,
    key: (t && t.key) || r || E(),
    unstable_mask: i,
  };
}
function se({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function D(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function O(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    (l = e), c && c({ action: s, location: h.location, delta: t });
  }
  function f(e, t) {
    s = `PUSH`;
    let r = ne(e) ? e : oe(h.location, e, t);
    n && n(r, e), (l = u() + 1);
    let d = ae(r, l),
      f = h.createHref(r.unstable_mask || r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = ne(e) ? e : oe(h.location, e, t);
    n && n(r, e), (l = u());
    let i = ae(r, l),
      d = h.createHref(r.unstable_mask || r);
    o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 });
  }
  function m(e) {
    return k(e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(te, d),
        (c = e),
        () => {
          i.removeEventListener(te, d), (c = null);
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function k(e, t = !1) {
  let n = `http://localhost`;
  typeof window < `u` &&
    (n =
      window.location.origin === `null`
        ? window.location.href
        : window.location.origin),
    T(n, `No window.location.(origin|href) available to create URL`);
  let r = typeof e == `string` ? e : se(e);
  return (
    (r = r.replace(/ $/, `%20`)),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r, n)
  );
}
function ce(e, t, n = `/`) {
  return le(e, t, n, !1);
}
function le(e, t, n, r) {
  let i = Ee((typeof t == `string` ? D(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = de(e);
  A(a);
  let o = null;
  for (let e = 0; o == null && e < a.length; ++e) {
    let t = Te(i);
    o = Se(a[e], t, r);
  }
  return o;
}
function ue(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle,
  };
}
function de(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      T(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (c.relativePath = c.relativePath.slice(r.length));
    }
    let l = Pe([r, c.relativePath]),
      u = n.concat(c);
    e.children &&
      e.children.length > 0 &&
      (T(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`
      ),
      de(e.children, t, u, l, o)),
      !(e.path == null && !e.index) &&
        t.push({ path: l, score: be(l, e.index), routesMeta: u });
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of fe(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function fe(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = fe(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function A(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? xe(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex)
        )
      : t.score - e.score
  );
}
var pe = /^:[\w-]+$/,
  me = 3,
  he = 2,
  ge = 1,
  _e = 10,
  ve = -2,
  ye = (e) => e === `*`;
function be(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(ye) && (r += ve),
    t && (r += he),
    n
      .filter((e) => !ye(e))
      .reduce((e, t) => e + (pe.test(t) ? me : t === `` ? ge : _e), r)
  );
}
function xe(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Se(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = Ce(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = Ce(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l
        )),
      !u)
    )
      return null;
    Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: Pe([a, u.pathname]),
        pathnameBase: Fe(Pe([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = Pe([a, u.pathnameBase]));
  }
  return o;
}
function Ce(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = we(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let i = s[r];
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)), e
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function we(e, t = !1, n = !0) {
  ie(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      `/*`
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      `/*`
    )}".`
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
      ? (i += `\\/*$`)
      : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function Te(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      ie(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function Ee(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var De = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Oe(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? D(e) : e,
    a;
  return (
    n
      ? ((n = n.replace(/\/\/+/g, `/`)),
        (a = n.startsWith(`/`) ? ke(n.substring(1), `/`) : ke(n, t)))
      : (a = t),
    { pathname: a, search: Ie(r), hash: Le(i) }
  );
}
function ke(e, t) {
  let n = t.replace(/\/+$/, ``).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function Ae(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function je(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Me(e) {
  let t = je(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function Ne(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = D(e))
    : ((i = { ...e }),
      T(
        !i.pathname || !i.pathname.includes(`?`),
        Ae(`?`, `pathname`, `search`, i)
      ),
      T(
        !i.pathname || !i.pathname.includes(`#`),
        Ae(`#`, `pathname`, `hash`, i)
      ),
      T(!i.search || !i.search.includes(`#`), Ae(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) t.shift(), --e;
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = Oe(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return !c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c;
}
var Pe = (e) => e.join(`/`).replace(/\/\/+/g, `/`),
  Fe = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
  Ie = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Le = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  Re = class {
    constructor(e, t, n, r = !1) {
      (this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n);
    }
  };
function ze(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function Be(e) {
  return (
    e
      .map((e) => e.route.path)
      .filter(Boolean)
      .join(`/`)
      .replace(/\/\/*/g, `/`) || `/`
  );
}
var Ve =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
function He(e, t) {
  let n = e;
  if (typeof n != `string` || !De.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    i = !1;
  if (Ve)
    try {
      let e = new URL(window.location.href),
        r = n.startsWith(`//`) ? new URL(e.protocol + n) : new URL(n),
        a = Ee(r.pathname, t);
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0);
    } catch {
      ie(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: r, isExternal: i, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Ue = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(Ue);
var We = [`GET`, ...Ue];
new Set(We);
var Ge = b.createContext(null);
Ge.displayName = `DataRouter`;
var Ke = b.createContext(null);
Ke.displayName = `DataRouterState`;
var qe = b.createContext(!1);
function Je() {
  return b.useContext(qe);
}
var Ye = b.createContext({ isTransitioning: !1 });
Ye.displayName = `ViewTransition`;
var Xe = b.createContext(new Map());
Xe.displayName = `Fetchers`;
var Ze = b.createContext(null);
Ze.displayName = `Await`;
var Qe = b.createContext(null);
Qe.displayName = `Navigation`;
var $e = b.createContext(null);
$e.displayName = `Location`;
var et = b.createContext({ outlet: null, matches: [], isDataRoute: !1 });
et.displayName = `Route`;
var tt = b.createContext(null);
tt.displayName = `RouteError`;
var nt = `REACT_ROUTER_ERROR`,
  rt = `REDIRECT`,
  it = `ROUTE_ERROR_RESPONSE`;
function at(e) {
  if (e.startsWith(`${nt}:${rt}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function ot(e) {
  if (e.startsWith(`${nt}:${it}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new Re(t.status, t.statusText, t.data);
    } catch {}
}
function st(e, { relative: t } = {}) {
  T(ct(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = b.useContext(Qe),
    { hash: i, pathname: a, search: o } = mt(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : Pe([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function ct() {
  return b.useContext($e) != null;
}
function lt() {
  return (
    T(
      ct(),
      `useLocation() may be used only in the context of a <Router> component.`
    ),
    b.useContext($e).location
  );
}
var ut = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function dt(e) {
  b.useContext(Qe).static || b.useLayoutEffect(e);
}
function ft() {
  let { isDataRoute: e } = b.useContext(et);
  return e ? Nt() : pt();
}
function pt() {
  T(
    ct(),
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let e = b.useContext(Ge),
    { basename: t, navigator: n } = b.useContext(Qe),
    { matches: r } = b.useContext(et),
    { pathname: i } = lt(),
    a = JSON.stringify(Me(r)),
    o = b.useRef(!1);
  return (
    dt(() => {
      o.current = !0;
    }),
    b.useCallback(
      (r, s = {}) => {
        if ((ie(o.current, ut), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = Ne(r, JSON.parse(a), i, s.relative === `path`);
        e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : Pe([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, a, i, e]
    )
  );
}
b.createContext(null);
function mt(e, { relative: t } = {}) {
  let { matches: n } = b.useContext(et),
    { pathname: r } = lt(),
    i = JSON.stringify(Me(n));
  return b.useMemo(() => Ne(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function ht(e, t) {
  return gt(e, t);
}
function gt(e, t, n) {
  T(
    ct(),
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: r } = b.useContext(Qe),
    { matches: i } = b.useContext(et),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route;
  {
    let e = (l && l.path) || ``;
    Ft(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${
        e === `/` ? `*` : `${e}/*`
      }">.`
    );
  }
  let u = lt(),
    d;
  if (t) {
    let e = typeof t == `string` ? D(t) : t;
    T(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`
    ),
      (d = e);
  } else d = u;
  let f = d.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m = ce(e, { pathname: p });
  ie(
    l || m != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `
  ),
    ie(
      m == null ||
        m[m.length - 1].route.element !== void 0 ||
        m[m.length - 1].route.Component !== void 0 ||
        m[m.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let h = Ct(
    m &&
      m.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: Pe([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`)
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : Pe([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`)
                      ).pathname
                    : e.pathnameBase,
                ]),
        })
      ),
    i,
    n
  );
  return t && h
    ? b.createElement(
        $e.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              unstable_mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        h
      )
    : h;
}
function _t() {
  let e = Mt(),
    t = ze(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = b.createElement(
      b.Fragment,
      null,
      b.createElement(`p`, null, `💿 Hey developer 👋`),
      b.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        b.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        b.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`
      )
    )),
    b.createElement(
      b.Fragment,
      null,
      b.createElement(`h2`, null, `Unexpected Application Error!`),
      b.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? b.createElement(`pre`, { style: i }, n) : null,
      o
    )
  );
}
var vt = b.createElement(_t, null),
  yt = class extends b.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e
          );
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = ot(e.digest);
        t && (e = t);
      }
      let t =
        e === void 0
          ? this.props.children
          : b.createElement(
              et.Provider,
              { value: this.props.routeContext },
              b.createElement(tt.Provider, {
                value: e,
                children: this.props.component,
              })
            );
      return this.context ? b.createElement(xt, { error: e }, t) : t;
    }
  };
yt.contextType = qe;
var bt = new WeakMap();
function xt({ children: e, error: t }) {
  let { basename: n } = b.useContext(Qe);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = at(t.digest);
    if (e) {
      let r = bt.get(t);
      if (r) throw r;
      let i = He(e.location, n);
      if (Ve && !bt.get(t))
        if (i.isExternal || e.reloadDocument)
          window.location.href = i.absoluteURL || i.to;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, {
              replace: e.replace,
            })
          );
          throw (bt.set(t, n), n);
        }
      return b.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return e;
}
function St({ routeContext: e, match: t, children: n }) {
  let r = b.useContext(Ge);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    b.createElement(et.Provider, { value: e }, n)
  );
}
function Ct(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    T(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(`,`)}`
    ),
      (i = i.slice(0, Math.min(i.length, e + 1)));
  }
  let o = !1,
    s = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]);
          break;
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              unstable_pattern: Be(r.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null;
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || vt),
      o &&
        (s < 0 && c === 0
          ? (Ft(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t;
        return (
          (t = u
            ? f
            : d
            ? p
            : n.route.Component
            ? b.createElement(n.route.Component, null)
            : n.route.element
            ? n.route.element
            : e),
          b.createElement(St, {
            match: n,
            routeContext: { outlet: e, matches: m, isDataRoute: r != null },
            children: t,
          })
        );
      };
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? b.createElement(yt, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: l,
        })
      : h();
  }, null);
}
function wt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tt(e) {
  let t = b.useContext(Ge);
  return T(t, wt(e)), t;
}
function Et(e) {
  let t = b.useContext(Ke);
  return T(t, wt(e)), t;
}
function Dt(e) {
  let t = b.useContext(et);
  return T(t, wt(e)), t;
}
function Ot(e) {
  let t = Dt(e),
    n = t.matches[t.matches.length - 1];
  return (
    T(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function kt() {
  return Ot(`useRouteId`);
}
function At() {
  return Et(`useNavigation`).navigation;
}
function jt() {
  let { matches: e, loaderData: t } = Et(`useMatches`);
  return b.useMemo(() => e.map((e) => ue(e, t)), [e, t]);
}
function Mt() {
  let e = b.useContext(tt),
    t = Et(`useRouteError`),
    n = Ot(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function Nt() {
  let { router: e } = Tt(`useNavigate`),
    t = Ot(`useNavigate`),
    n = b.useRef(!1);
  return (
    dt(() => {
      n.current = !0;
    }),
    b.useCallback(
      async (r, i = {}) => {
        ie(n.current, ut),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i }));
      },
      [e, t]
    )
  );
}
var Pt = {};
function Ft(e, t, n) {
  !t && !Pt[e] && ((Pt[e] = !0), ie(!1, n));
}
b.useOptimistic, b.memo(It);
function It({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
  return gt(e, void 0, { state: n, isStatic: r, onError: i, future: t });
}
function Lt(e) {
  T(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  );
}
function Rt({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  unstable_useTransitions: o,
}) {
  T(
    !ct(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let s = e.replace(/^\/*/, `/`),
    c = b.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        unstable_useTransitions: o,
        future: {},
      }),
      [s, i, a, o]
    );
  typeof n == `string` && (n = D(n));
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      unstable_mask: m,
    } = n,
    h = b.useMemo(() => {
      let e = Ee(l, s);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              unstable_mask: m,
            },
            navigationType: r,
          };
    }, [s, l, u, d, f, p, r, m]);
  return (
    ie(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    h == null
      ? null
      : b.createElement(
          Qe.Provider,
          { value: c },
          b.createElement($e.Provider, { children: t, value: h })
        )
  );
}
function zt({ children: e, location: t }) {
  return ht(Bt(e), t);
}
b.Component;
function Bt(e, t = []) {
  let n = [];
  return (
    b.Children.forEach(e, (e, r) => {
      if (!b.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === b.Fragment) {
        n.push.apply(n, Bt(e.props.children, i));
        return;
      }
      T(
        e.type === Lt,
        `[${
          typeof e.type == `string` ? e.type : e.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        T(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`
        );
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      e.props.children && (a.children = Bt(e.props.children, i)), n.push(a);
    }),
    n
  );
}
var Vt = `get`,
  Ht = `application/x-www-form-urlencoded`;
function Ut(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function Wt(e) {
  return Ut(e) && e.tagName.toLowerCase() === `button`;
}
function Gt(e) {
  return Ut(e) && e.tagName.toLowerCase() === `form`;
}
function Kt(e) {
  return Ut(e) && e.tagName.toLowerCase() === `input`;
}
function qt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Jt(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !qt(e);
}
var Yt = null;
function Xt() {
  if (Yt === null)
    try {
      new FormData(document.createElement(`form`), 0), (Yt = !1);
    } catch {
      Yt = !0;
    }
  return Yt;
}
var Zt = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function Qt(e) {
  return e != null && !Zt.has(e)
    ? (ie(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ht}"`
      ),
      null)
    : e;
}
function $t(e, t) {
  let n, r, i, a, o;
  if (Gt(e)) {
    let o = e.getAttribute(`action`);
    (r = o ? Ee(o, t) : null),
      (n = e.getAttribute(`method`) || Vt),
      (i = Qt(e.getAttribute(`enctype`)) || Ht),
      (a = new FormData(e));
  } else if (Wt(e) || (Kt(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? Ee(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Vt),
      (i =
        Qt(e.getAttribute(`formenctype`)) ||
        Qt(o.getAttribute(`enctype`)) ||
        Ht),
      (a = new FormData(o, e)),
      !Xt())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        a.append(`${e}x`, `0`), a.append(`${e}y`, `0`);
      } else t && a.append(t, r);
    }
  } else if (Ut(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  else (n = Vt), (r = null), (i = Ht), (o = e);
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var en = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  tn = /[&><\u2028\u2029]/g;
function nn(e) {
  return e.replace(tn, (e) => en[e]);
}
function rn(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function an(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u` ? `server://singlefetch/` : window.location.origin
        )
      : e;
  return (
    n
      ? i.pathname.endsWith(`/`)
        ? (i.pathname = `${i.pathname}_.${r}`)
        : (i.pathname = `${i.pathname}.${r}`)
      : i.pathname === `/`
      ? (i.pathname = `_root.${r}`)
      : t && Ee(i.pathname, t) === `/`
      ? (i.pathname = `${t.replace(/\/$/, ``)}/_root.${r}`)
      : (i.pathname = `${i.pathname.replace(/\/$/, ``)}.${r}`),
    i
  );
}
async function on(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await ee(() => import(e.module), []);
    return (t[e.id] = n), n;
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function sn(e) {
  return e != null && typeof e.page == `string`;
}
function cn(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === `preload` &&
      typeof e.imageSrcSet == `string` &&
      typeof e.imageSizes == `string`
    : typeof e.rel == `string` && typeof e.href == `string`;
}
async function ln(e, t, n) {
  return mn(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await on(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        })
      )
    )
      .flat(1)
      .filter(cn)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` }
      )
  );
}
function un(e, t, n, r, i, a) {
  let o = (e, t) => (n[t] ? e.route.id !== n[t].route.id : !0),
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
    ? t.filter((t, a) => {
        let c = r.routes[t.route.id];
        if (!c || !c.hasLoader) return !1;
        if (o(t, a) || s(t, a)) return !0;
        if (t.route.shouldRevalidate) {
          let r = t.route.shouldRevalidate({
            currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
            currentParams: n[0]?.params || {},
            nextUrl: new URL(e, window.origin),
            nextParams: t.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof r == `boolean`) return r;
        }
        return !0;
      })
    : [];
}
function dn(e, t, { includeHydrateFallback: n } = {}) {
  return fn(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1)
  );
}
function fn(e) {
  return [...new Set(e)];
}
function pn(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function mn(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !sn(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(pn(i));
    return n.has(a) || (n.add(a), e.push({ key: a, link: i })), e;
  }, []);
}
function hn() {
  let e = b.useContext(Ge);
  return (
    rn(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`
    ),
    e
  );
}
function gn() {
  let e = b.useContext(Ke);
  return (
    rn(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`
    ),
    e
  );
}
var _n = b.createContext(void 0);
_n.displayName = `FrameworkContext`;
function vn() {
  let e = b.useContext(_n);
  return (
    rn(e, `You must render this element inside a <HydratedRouter> element`), e
  );
}
function yn(e, t) {
  let n = b.useContext(_n),
    [r, i] = b.useState(!1),
    [a, o] = b.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = b.useRef(null);
  b.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 }
      );
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    b.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]);
  let p = () => {
      i(!0);
    },
    m = () => {
      i(!1), o(!1);
    };
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: bn(s, p),
            onBlur: bn(c, m),
            onMouseEnter: bn(l, p),
            onMouseLeave: bn(u, m),
            onTouchStart: bn(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}];
}
function bn(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function xn({ page: e, ...t }) {
  let n = Je(),
    { router: r } = hn(),
    i = b.useMemo(() => ce(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return i
    ? n
      ? b.createElement(Cn, { page: e, matches: i, ...t })
      : b.createElement(wn, { page: e, matches: i, ...t })
    : null;
}
function Sn(e) {
  let { manifest: t, routeModules: n } = vn(),
    [r, i] = b.useState([]);
  return (
    b.useEffect(() => {
      let r = !1;
      return (
        ln(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Cn({ page: e, matches: t, ...n }) {
  let r = lt(),
    { future: i } = vn(),
    { basename: a } = hn(),
    o = b.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = an(e, a, i.unstable_trailingSlashAwareDataRequests, `rsc`),
        o = !1,
        s = [];
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (o = !0)
          : s.push(e.route.id);
      return (
        o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      );
    }, [a, i.unstable_trailingSlashAwareDataRequests, e, r, t]);
  return b.createElement(
    b.Fragment,
    null,
    o.map((e) =>
      b.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      })
    )
  );
}
function wn({ page: e, matches: t, ...n }) {
  let r = lt(),
    { future: i, manifest: a, routeModules: o } = vn(),
    { basename: s } = hn(),
    { loaderData: c, matches: l } = gn(),
    u = b.useMemo(() => un(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = b.useMemo(() => un(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = b.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        l = !1;
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id];
          !t ||
            !t.hasLoader ||
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let d = an(e, s, i.unstable_trailingSlashAwareDataRequests, `data`);
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`)
          ),
        [d.pathname + d.search]
      );
    }, [s, i.unstable_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = b.useMemo(() => dn(d, a), [d, a]),
    m = Sn(d);
  return b.createElement(
    b.Fragment,
    null,
    f.map((e) =>
      b.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      })
    ),
    p.map((e) =>
      b.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n })
    ),
    m.map(({ key: e, link: t }) =>
      b.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      })
    )
  );
}
function Tn(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
b.Component;
var En =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  En && (window.__reactRouterVersion = `7.14.0`);
} catch {}
function Dn({
  basename: e,
  children: t,
  unstable_useTransitions: n,
  window: r,
}) {
  let i = b.useRef();
  i.current ??= re({ window: r, v5Compat: !0 });
  let a = i.current,
    [o, s] = b.useState({ action: a.action, location: a.location }),
    c = b.useCallback(
      (e) => {
        n === !1 ? s(e) : b.startTransition(() => s(e));
      },
      [n]
    );
  return (
    b.useLayoutEffect(() => a.listen(c), [a, c]),
    b.createElement(Rt, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      unstable_useTransitions: n,
    })
  );
}
function On({
  basename: e,
  children: t,
  history: n,
  unstable_useTransitions: r,
}) {
  let [i, a] = b.useState({ action: n.action, location: n.location }),
    o = b.useCallback(
      (e) => {
        r === !1 ? a(e) : b.startTransition(() => a(e));
      },
      [r]
    );
  return (
    b.useLayoutEffect(() => n.listen(o), [n, o]),
    b.createElement(Rt, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: n,
      unstable_useTransitions: r,
    })
  );
}
On.displayName = `unstable_HistoryRouter`;
var kn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  An = b.forwardRef(function (
    {
      onClick: e,
      discover: t = `render`,
      prefetch: n = `none`,
      relative: r,
      reloadDocument: i,
      replace: a,
      unstable_mask: o,
      state: s,
      target: c,
      to: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m
  ) {
    let {
        basename: h,
        navigator: g,
        unstable_useTransitions: _,
      } = b.useContext(Qe),
      v = typeof l == `string` && kn.test(l),
      y = He(l, h);
    l = y.to;
    let x = st(l, { relative: r }),
      S = lt(),
      C = null;
    if (o) {
      let e = Ne(o, [], S.unstable_mask ? S.unstable_mask.pathname : `/`, !0);
      h !== `/` && (e.pathname = e.pathname === `/` ? h : Pe([h, e.pathname])),
        (C = g.createHref(e));
    }
    let [w, ee, te] = yn(n, p),
      ne = Ln(l, {
        replace: a,
        unstable_mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        unstable_defaultShouldRevalidate: f,
        unstable_useTransitions: _,
      });
    function re(t) {
      e && e(t), t.defaultPrevented || ne(t);
    }
    let T = !(y.isExternal || i),
      ie = b.createElement(`a`, {
        ...p,
        ...te,
        href: (T ? C : void 0) || y.absoluteURL || x,
        onClick: T ? re : e,
        ref: Tn(m, ee),
        target: c,
        "data-discover": !v && t === `render` ? `true` : void 0,
      });
    return w && !v
      ? b.createElement(b.Fragment, null, ie, b.createElement(xn, { page: x }))
      : ie;
  });
An.displayName = `Link`;
var jn = b.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l
) {
  let u = mt(a, { relative: c.relative }),
    d = lt(),
    f = b.useContext(Ke),
    { navigator: p, basename: m } = b.useContext(Qe),
    h = f != null && qn(u) && o === !0,
    g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    _ = d.pathname,
    v =
      f && f.navigation && f.navigation.location
        ? f.navigation.location.pathname
        : null;
  t ||
    ((_ = _.toLowerCase()),
    (v = v ? v.toLowerCase() : null),
    (g = g.toLowerCase())),
    v && m && (v = Ee(v, m) || v);
  let y = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
    x = _ === g || (!r && _.startsWith(g) && _.charAt(y) === `/`),
    S =
      v != null &&
      (v === g || (!r && v.startsWith(g) && v.charAt(g.length) === `/`)),
    C = { isActive: x, isPending: S, isTransitioning: h },
    w = x ? e : void 0,
    ee;
  ee =
    typeof n == `function`
      ? n(C)
      : [
          n,
          x ? `active` : null,
          S ? `pending` : null,
          h ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let te = typeof i == `function` ? i(C) : i;
  return b.createElement(
    An,
    {
      ...c,
      "aria-current": w,
      className: ee,
      ref: l,
      style: te,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(C) : s
  );
});
jn.displayName = `NavLink`;
var Mn = b.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = Vt,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m
  ) => {
    let { unstable_useTransitions: h } = b.useContext(Qe),
      g = Bn(),
      _ = Vn(s, { relative: l }),
      v = o.toLowerCase() === `get` ? `get` : `post`,
      y = typeof s == `string` && kn.test(s);
    return b.createElement(`form`, {
      ref: m,
      method: v,
      action: _,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o,
              p = () =>
                g(r || e.currentTarget, {
                  fetcherKey: t,
                  method: s,
                  navigate: n,
                  replace: i,
                  state: a,
                  relative: l,
                  preventScrollReset: u,
                  viewTransition: d,
                  unstable_defaultShouldRevalidate: f,
                });
            h && n !== !1 ? b.startTransition(() => p()) : p();
          },
      ...p,
      "data-discover": !y && e === `render` ? `true` : void 0,
    });
  }
);
Mn.displayName = `Form`;
function Nn({ getKey: e, storageKey: t, ...n }) {
  let r = b.useContext(_n),
    { basename: i } = b.useContext(Qe),
    a = lt(),
    o = jt();
  Gn({ getKey: e, storageKey: t });
  let s = b.useMemo(() => {
    if (!r || !e) return null;
    let t = Wn(a, o, i, e);
    return t === a.key ? null : t;
  }, []);
  if (!r || r.isSpaMode) return null;
  let c = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: e }, ``);
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ];
      typeof n == `number` && window.scrollTo(0, n);
    } catch (t) {
      console.error(t), sessionStorage.removeItem(e);
    }
  }).toString();
  return b.createElement(`script`, {
    ...n,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${c})(${nn(JSON.stringify(t || Hn))}, ${nn(
        JSON.stringify(s)
      )})`,
    },
  });
}
Nn.displayName = `ScrollRestoration`;
function Pn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Fn(e) {
  let t = b.useContext(Ge);
  return T(t, Pn(e)), t;
}
function In(e) {
  let t = b.useContext(Ke);
  return T(t, Pn(e)), t;
}
function Ln(
  e,
  {
    target: t,
    replace: n,
    unstable_mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    unstable_defaultShouldRevalidate: c,
    unstable_useTransitions: l,
  } = {}
) {
  let u = ft(),
    d = lt(),
    f = mt(e, { relative: o });
  return b.useCallback(
    (p) => {
      if (Jt(p, t)) {
        p.preventDefault();
        let t = n === void 0 ? se(d) === se(f) : n,
          m = () =>
            u(e, {
              replace: t,
              unstable_mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              unstable_defaultShouldRevalidate: c,
            });
        l ? b.startTransition(() => m()) : m();
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l]
  );
}
var Rn = 0,
  zn = () => `__${String(++Rn)}__`;
function Bn() {
  let { router: e } = Fn(`useSubmit`),
    { basename: t } = b.useContext(Qe),
    n = kt(),
    r = e.fetch,
    i = e.navigate;
  return b.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = $t(e, t);
      a.navigate === !1
        ? await r(a.fetcherKey || zn(), n, a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync,
          })
        : await i(a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
    },
    [r, i, t, n]
  );
}
function Vn(e, { relative: t } = {}) {
  let { basename: n } = b.useContext(Qe),
    r = b.useContext(et);
  T(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...mt(e || `.`, { relative: t }) },
    o = lt();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : Pe([n, a.pathname])),
    se(a)
  );
}
var Hn = `react-router-scroll-positions`,
  Un = {};
function Wn(e, t, n, r) {
  let i = null;
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: Ee(e.pathname, n) || e.pathname },
        t
      )),
    (i ??= e.key),
    i
  );
}
function Gn({ getKey: e, storageKey: t } = {}) {
  let { router: n } = Fn(`useScrollRestoration`),
    { restoreScrollPosition: r, preventScrollReset: i } =
      In(`useScrollRestoration`),
    { basename: a } = b.useContext(Qe),
    o = lt(),
    s = jt(),
    c = At();
  b.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`;
      }
    ),
    []
  ),
    Kn(
      b.useCallback(() => {
        if (c.state === `idle`) {
          let t = Wn(o, s, a, e);
          Un[t] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || Hn, JSON.stringify(Un));
        } catch (e) {
          ie(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`
          );
        }
        window.history.scrollRestoration = `auto`;
      }, [c.state, e, a, o, s, t])
    ),
    typeof document < `u` &&
      (b.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || Hn);
          e && (Un = JSON.parse(e));
        } catch {}
      }, [t]),
      b.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          Un,
          () => window.scrollY,
          e ? (t, n) => Wn(t, n, a, e) : void 0
        );
        return () => t && t();
      }, [n, a, e]),
      b.useLayoutEffect(() => {
        if (r !== !1) {
          if (typeof r == `number`) {
            window.scrollTo(0, r);
            return;
          }
          try {
            if (o.hash) {
              let e = document.getElementById(
                decodeURIComponent(o.hash.slice(1))
              );
              if (e) {
                e.scrollIntoView();
                return;
              }
            }
          } catch {
            ie(
              !1,
              `"${o.hash.slice(
                1
              )}" is not a decodable element ID. The view will not scroll to it.`
            );
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [o, r, i]));
}
function Kn(e, t) {
  let { capture: n } = t || {};
  b.useEffect(() => {
    let t = n == null ? void 0 : { capture: n };
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t);
      }
    );
  }, [e, n]);
}
function qn(e, { relative: t } = {}) {
  let n = b.useContext(Ye);
  T(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Fn(`useViewTransitionState`),
    i = mt(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = Ee(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Ee(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ce(i.pathname, o) != null || Ce(i.pathname, a) != null;
}
var Jn = { data: `` },
  Yn = (e) => {
    if (typeof window == `object`) {
      let t =
        (e ? e.querySelector(`#_goober`) : window._goober) ||
        Object.assign(document.createElement(`style`), {
          innerHTML: ` `,
          id: `_goober`,
        });
      return (
        (t.nonce = window.__nonce__),
        t.parentNode || (e || document.head).appendChild(t),
        t.firstChild
      );
    }
    return e || Jn;
  },
  Xn = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Zn = /\/\*[^]*?\*\/|  +/g,
  Qn = /\n+/g,
  $n = (e, t) => {
    let n = ``,
      r = ``,
      i = ``;
    for (let a in e) {
      let o = e[a];
      a[0] == `@`
        ? a[1] == `i`
          ? (n = a + ` ` + o + `;`)
          : (r +=
              a[1] == `f`
                ? $n(o, a)
                : a + `{` + $n(o, a[1] == `k` ? `` : t) + `}`)
        : typeof o == `object`
        ? (r += $n(
            o,
            t
              ? t.replace(/([^,])+/g, (e) =>
                  a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t) =>
                    /&/.test(t) ? t.replace(/&/g, e) : e ? e + ` ` + t : t
                  )
                )
              : a
          ))
        : o != null &&
          ((a = /^--/.test(a) ? a : a.replace(/[A-Z]/g, `-$&`).toLowerCase()),
          (i += $n.p ? $n.p(a, o) : a + `:` + o + `;`));
    }
    return n + (t && i ? t + `{` + i + `}` : i) + r;
  },
  er = {},
  tr = (e) => {
    if (typeof e == `object`) {
      let t = ``;
      for (let n in e) t += n + tr(e[n]);
      return t;
    }
    return e;
  },
  nr = (e, t, n, r, i) => {
    let a = tr(e),
      o =
        er[a] ||
        (er[a] = ((e) => {
          let t = 0,
            n = 11;
          for (; t < e.length; ) n = (101 * n + e.charCodeAt(t++)) >>> 0;
          return `go` + n;
        })(a));
    if (!er[o]) {
      let t =
        a === e
          ? ((e) => {
              let t,
                n,
                r = [{}];
              for (; (t = Xn.exec(e.replace(Zn, ``))); )
                t[4]
                  ? r.shift()
                  : t[3]
                  ? ((n = t[3].replace(Qn, ` `).trim()),
                    r.unshift((r[0][n] = r[0][n] || {})))
                  : (r[0][t[1]] = t[2].replace(Qn, ` `).trim());
              return r[0];
            })(e)
          : e;
      er[o] = $n(i ? { [`@keyframes ` + o]: t } : t, n ? `` : `.` + o);
    }
    let s = n && er.g ? er.g : null;
    return (
      n && (er.g = er[o]),
      ((e, t, n, r) => {
        r
          ? (t.data = t.data.replace(r, e))
          : t.data.indexOf(e) === -1 && (t.data = n ? e + t.data : t.data + e);
      })(er[o], t, r, s),
      o
    );
  },
  rr = (e, t, n) =>
    e.reduce((e, r, i) => {
      let a = t[i];
      if (a && a.call) {
        let e = a(n),
          t = (e && e.props && e.props.className) || (/^go/.test(e) && e);
        a = t
          ? `.` + t
          : e && typeof e == `object`
          ? e.props
            ? ``
            : $n(e, ``)
          : !1 === e
          ? ``
          : e;
      }
      return e + r + (a ?? ``);
    }, ``);
function ir(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return nr(
    n.unshift
      ? n.raw
        ? rr(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {})
      : n,
    Yn(t.target),
    t.g,
    t.o,
    t.k
  );
}
var ar, or, sr;
ir.bind({ g: 1 });
var cr = ir.bind({ k: 1 });
function lr(e, t, n, r) {
  ($n.p = t), (ar = e), (or = n), (sr = r);
}
function ur(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function i(a, o) {
      let s = Object.assign({}, a),
        c = s.className || i.className;
      (n.p = Object.assign({ theme: or && or() }, s)),
        (n.o = / *go\d+/.test(c)),
        (s.className = ir.apply(n, r) + (c ? ` ` + c : ``)),
        t && (s.ref = o);
      let l = e;
      return (
        e[0] && ((l = s.as || e), delete s.as), sr && l[0] && sr(s), ar(l, s)
      );
    }
    return t ? t(i) : i;
  };
}
var dr = (e) => typeof e == `function`,
  fr = (e, t) => (dr(e) ? e(t) : e),
  pr = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  mr = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < `u`) {
        let t = matchMedia(`(prefers-reduced-motion: reduce)`);
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  hr = 20,
  gr = `default`,
  _r = (e, t) => {
    let { toastLimit: n } = e.settings;
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, n) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((e) =>
            e.id === t.toast.id ? { ...e, ...t.toast } : e
          ),
        };
      case 2:
        let { toast: r } = t;
        return _r(e, {
          type: +!!e.toasts.find((e) => e.id === r.id),
          toast: r,
        });
      case 3:
        let { toastId: i } = t;
        return {
          ...e,
          toasts: e.toasts.map((e) =>
            e.id === i || i === void 0
              ? { ...e, dismissed: !0, visible: !1 }
              : e
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let a = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((e) => ({
            ...e,
            pauseDuration: e.pauseDuration + a,
          })),
        };
    }
  },
  vr = [],
  yr = { toasts: [], pausedAt: void 0, settings: { toastLimit: hr } },
  br = {},
  xr = (e, t = gr) => {
    (br[t] = _r(br[t] || yr, e)),
      vr.forEach(([e, n]) => {
        e === t && n(br[t]);
      });
  },
  Sr = (e) => Object.keys(br).forEach((t) => xr(e, t)),
  Cr = (e) => Object.keys(br).find((t) => br[t].toasts.some((t) => t.id === e)),
  wr =
    (e = gr) =>
    (t) => {
      xr(t, e);
    },
  Tr = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Er = (e = {}, t = gr) => {
    let [n, r] = (0, b.useState)(br[t] || yr),
      i = (0, b.useRef)(br[t]);
    (0, b.useEffect)(
      () => (
        i.current !== br[t] && r(br[t]),
        vr.push([t, r]),
        () => {
          let e = vr.findIndex(([e]) => e === t);
          e > -1 && vr.splice(e, 1);
        }
      ),
      [t]
    );
    let a = n.toasts.map((t) => ({
      ...e,
      ...e[t.type],
      ...t,
      removeDelay: t.removeDelay || e[t.type]?.removeDelay || e?.removeDelay,
      duration: t.duration || e[t.type]?.duration || e?.duration || Tr[t.type],
      style: { ...e.style, ...e[t.type]?.style, ...t.style },
    }));
    return { ...n, toasts: a };
  },
  Dr = (e, t = `blank`, n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: `status`, "aria-live": `polite` },
    message: e,
    pauseDuration: 0,
    ...n,
    id: n?.id || pr(),
  }),
  Or = (e) => (t, n) => {
    let r = Dr(t, e, n);
    return wr(r.toasterId || Cr(r.id))({ type: 2, toast: r }), r.id;
  },
  kr = (e, t) => Or(`blank`)(e, t);
(kr.error = Or(`error`)),
  (kr.success = Or(`success`)),
  (kr.loading = Or(`loading`)),
  (kr.custom = Or(`custom`)),
  (kr.dismiss = (e, t) => {
    let n = { type: 3, toastId: e };
    t ? wr(t)(n) : Sr(n);
  }),
  (kr.dismissAll = (e) => kr.dismiss(void 0, e)),
  (kr.remove = (e, t) => {
    let n = { type: 4, toastId: e };
    t ? wr(t)(n) : Sr(n);
  }),
  (kr.removeAll = (e) => kr.remove(void 0, e)),
  (kr.promise = (e, t, n) => {
    let r = kr.loading(t.loading, { ...n, ...n?.loading });
    return (
      typeof e == `function` && (e = e()),
      e
        .then((e) => {
          let i = t.success ? fr(t.success, e) : void 0;
          return (
            i ? kr.success(i, { id: r, ...n, ...n?.success }) : kr.dismiss(r), e
          );
        })
        .catch((e) => {
          let i = t.error ? fr(t.error, e) : void 0;
          i ? kr.error(i, { id: r, ...n, ...n?.error }) : kr.dismiss(r);
        }),
      e
    );
  });
var Ar = 1e3,
  jr = (e, t = `default`) => {
    let { toasts: n, pausedAt: r } = Er(e, t),
      i = (0, b.useRef)(new Map()).current,
      a = (0, b.useCallback)((e, t = Ar) => {
        if (i.has(e)) return;
        let n = setTimeout(() => {
          i.delete(e), o({ type: 4, toastId: e });
        }, t);
        i.set(e, n);
      }, []);
    (0, b.useEffect)(() => {
      if (r) return;
      let e = Date.now(),
        i = n.map((n) => {
          if (n.duration === 1 / 0) return;
          let r = (n.duration || 0) + n.pauseDuration - (e - n.createdAt);
          if (r < 0) {
            n.visible && kr.dismiss(n.id);
            return;
          }
          return setTimeout(() => kr.dismiss(n.id, t), r);
        });
      return () => {
        i.forEach((e) => e && clearTimeout(e));
      };
    }, [n, r, t]);
    let o = (0, b.useCallback)(wr(t), [t]),
      s = (0, b.useCallback)(() => {
        o({ type: 5, time: Date.now() });
      }, [o]),
      c = (0, b.useCallback)(
        (e, t) => {
          o({ type: 1, toast: { id: e, height: t } });
        },
        [o]
      ),
      l = (0, b.useCallback)(() => {
        r && o({ type: 6, time: Date.now() });
      }, [r, o]),
      u = (0, b.useCallback)(
        (e, t) => {
          let {
              reverseOrder: r = !1,
              gutter: i = 8,
              defaultPosition: a,
            } = t || {},
            o = n.filter(
              (t) => (t.position || a) === (e.position || a) && t.height
            ),
            s = o.findIndex((t) => t.id === e.id),
            c = o.filter((e, t) => t < s && e.visible).length;
          return o
            .filter((e) => e.visible)
            .slice(...(r ? [c + 1] : [0, c]))
            .reduce((e, t) => e + (t.height || 0) + i, 0);
        },
        [n]
      );
    return (
      (0, b.useEffect)(() => {
        n.forEach((e) => {
          if (e.dismissed) a(e.id, e.removeDelay);
          else {
            let t = i.get(e.id);
            t && (clearTimeout(t), i.delete(e.id));
          }
        });
      }, [n, a]),
      {
        toasts: n,
        handlers: {
          updateHeight: c,
          startPause: s,
          endPause: l,
          calculateOffset: u,
        },
      }
    );
  },
  Mr = cr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Nr = cr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Pr = cr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Fr = ur(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || `#ff4b4b`};
  position: relative;
  transform: rotate(45deg);

  animation: ${Mr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Nr} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || `#fff`};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Pr} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Ir = cr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Lr = ur(`div`)`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || `#e0e0e0`};
  border-right-color: ${(e) => e.primary || `#616161`};
  animation: ${Ir} 1s linear infinite;
`,
  Rr = cr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  zr = cr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Br = ur(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || `#61d345`};
  position: relative;
  transform: rotate(45deg);

  animation: ${Rr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${zr} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || `#fff`};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Vr = ur(`div`)`
  position: absolute;
`,
  Hr = ur(`div`)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Ur = cr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Wr = ur(`div`)`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ur} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Gr = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t === void 0
      ? n === `blank`
        ? null
        : b.createElement(
            Hr,
            null,
            b.createElement(Lr, { ...r }),
            n !== `loading` &&
              b.createElement(
                Vr,
                null,
                n === `error`
                  ? b.createElement(Fr, { ...r })
                  : b.createElement(Br, { ...r })
              )
          )
      : typeof t == `string`
      ? b.createElement(Wr, null, t)
      : t;
  },
  Kr = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  qr = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  Jr = `0%{opacity:0;} 100%{opacity:1;}`,
  Yr = `0%{opacity:1;} 100%{opacity:0;}`,
  Xr = ur(`div`)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Zr = ur(`div`)`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  Qr = (e, t) => {
    let n = e.includes(`top`) ? 1 : -1,
      [r, i] = mr() ? [Jr, Yr] : [Kr(n), qr(n)];
    return {
      animation: t
        ? `${cr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${cr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  $r = b.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? Qr(e.position || t || `top-center`, e.visible)
        : { opacity: 0 },
      a = b.createElement(Gr, { toast: e }),
      o = b.createElement(Zr, { ...e.ariaProps }, fr(e.message, e));
    return b.createElement(
      Xr,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == `function`
        ? r({ icon: a, message: o })
        : b.createElement(b.Fragment, null, a, o)
    );
  });
lr(b.createElement);
var ei = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i,
  }) => {
    let a = b.useCallback(
      (t) => {
        if (t) {
          let n = () => {
            let n = t.getBoundingClientRect().height;
            r(e, n);
          };
          n(),
            new MutationObserver(n).observe(t, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return b.createElement(`div`, { ref: a, className: t, style: n }, i);
  },
  ti = (e, t) => {
    let n = e.includes(`top`),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes(`center`)
        ? { justifyContent: `center` }
        : e.includes(`right`)
        ? { justifyContent: `flex-end` }
        : {};
    return {
      left: 0,
      right: 0,
      display: `flex`,
      position: `absolute`,
      transition: mr() ? void 0 : `all 230ms cubic-bezier(.21,1.02,.73,1)`,
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i,
    };
  },
  ni = ir`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  ri = 16,
  ii = ({
    reverseOrder: e,
    position: t = `top-center`,
    toastOptions: n,
    gutter: r,
    children: i,
    toasterId: a,
    containerStyle: o,
    containerClassName: s,
  }) => {
    let { toasts: c, handlers: l } = jr(n, a);
    return b.createElement(
      `div`,
      {
        "data-rht-toaster": a || ``,
        style: {
          position: `fixed`,
          zIndex: 9999,
          top: ri,
          left: ri,
          right: ri,
          bottom: ri,
          pointerEvents: `none`,
          ...o,
        },
        className: s,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      c.map((n) => {
        let a = n.position || t,
          o = ti(
            a,
            l.calculateOffset(n, {
              reverseOrder: e,
              gutter: r,
              defaultPosition: t,
            })
          );
        return b.createElement(
          ei,
          {
            id: n.id,
            key: n.id,
            onHeightUpdate: l.updateHeight,
            className: n.visible ? ni : ``,
            style: o,
          },
          n.type === `custom`
            ? fr(n.message, n)
            : i
            ? i(n)
            : b.createElement($r, { toast: n, position: a })
        );
      })
    );
  },
  ai = kr,
  oi = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    (e.Fragment = n), (e.jsx = r), (e.jsxs = r);
  }),
  si = s((e, t) => {
    t.exports = oi();
  }),
  ci = (0, b.createContext)({});
function li(e) {
  let t = (0, b.useRef)(null);
  return t.current === null && (t.current = e()), t.current;
}
var ui = (0, b.createContext)(null),
  di = (0, b.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  }),
  j = si(),
  fi = class extends b.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
        let e = this.props.sizeRef.current;
        (e.height = t.offsetHeight || 0),
          (e.width = t.offsetWidth || 0),
          (e.top = t.offsetTop),
          (e.left = t.offsetLeft);
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  };
function pi({ children: e, isPresent: t }) {
  let n = (0, b.useId)(),
    r = (0, b.useRef)(null),
    i = (0, b.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: a } = (0, b.useContext)(di);
  return (
    (0, b.useInsertionEffect)(() => {
      let { width: e, height: o, top: s, left: c } = i.current;
      if (t || !r.current || !e || !o) return;
      r.current.dataset.motionPopId = n;
      let l = document.createElement(`style`);
      return (
        a && (l.nonce = a),
        document.head.appendChild(l),
        l.sheet &&
          l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(l);
        }
      );
    }, [t]),
    (0, j.jsx)(fi, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: b.cloneElement(e, { ref: r }),
    })
  );
}
var mi = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
}) => {
  let s = li(hi),
    c = (0, b.useId)(),
    l = (0, b.useCallback)(
      (e) => {
        s.set(e, !0);
        for (let e of s.values()) if (!e) return;
        r && r();
      },
      [s, r]
    ),
    u = (0, b.useMemo)(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: l,
        register: (e) => (s.set(e, !1), () => s.delete(e)),
      }),
      a ? [Math.random(), l] : [n, l]
    );
  return (
    (0, b.useMemo)(() => {
      s.forEach((e, t) => s.set(t, !1));
    }, [n]),
    b.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    o === `popLayout` && (e = (0, j.jsx)(pi, { isPresent: n, children: e })),
    (0, j.jsx)(ui.Provider, { value: u, children: e })
  );
};
function hi() {
  return new Map();
}
function gi(e = !0) {
  let t = (0, b.useContext)(ui);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, b.useId)();
  (0, b.useEffect)(() => {
    e && i(a);
  }, [e]);
  let o = (0, b.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var _i = (e) => e.key || ``;
function vi(e) {
  let t = [];
  return (
    b.Children.forEach(e, (e) => {
      (0, b.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var yi = typeof window < `u`,
  bi = yi ? b.useLayoutEffect : b.useEffect,
  xi = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
  }) => {
    let [s, c] = gi(o),
      l = (0, b.useMemo)(() => vi(e), [e]),
      u = o && !s ? [] : l.map(_i),
      d = (0, b.useRef)(!0),
      f = (0, b.useRef)(l),
      p = li(() => new Map()),
      [m, h] = (0, b.useState)(l),
      [g, _] = (0, b.useState)(l);
    bi(() => {
      (d.current = !1), (f.current = l);
      for (let e = 0; e < g.length; e++) {
        let t = _i(g[e]);
        u.includes(t) ? p.delete(t) : p.get(t) !== !0 && p.set(t, !1);
      }
    }, [g, u.length, u.join(`-`)]);
    let v = [];
    if (l !== m) {
      let e = [...l];
      for (let t = 0; t < g.length; t++) {
        let n = g[t],
          r = _i(n);
        u.includes(r) || (e.splice(t, 0, n), v.push(n));
      }
      a === `wait` && v.length && (e = v), _(vi(e)), h(l);
      return;
    }
    let { forceRender: y } = (0, b.useContext)(ci);
    return (0, j.jsx)(j.Fragment, {
      children: g.map((e) => {
        let m = _i(e),
          h = o && !s ? !1 : l === g || u.includes(m);
        return (0, j.jsx)(
          mi,
          {
            isPresent: h,
            initial: !d.current || n ? void 0 : !1,
            custom: h ? void 0 : t,
            presenceAffectsLayout: i,
            mode: a,
            onExitComplete: h
              ? void 0
              : () => {
                  if (p.has(m)) p.set(m, !0);
                  else return;
                  let e = !0;
                  p.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (y?.(), _(f.current), o && c?.(), r && r());
                },
            children: e,
          },
          m
        );
      }),
    });
  },
  Si = (e) => e,
  Ci = Si,
  wi = Si;
function Ti(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Ei = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Di = (e) => e * 1e3,
  Oi = (e) => e / 1e3,
  ki = { skipAnimations: !1, useManualTiming: !1 };
function Ai(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    a.has(t) && (c.schedule(t), e()), t(o);
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return i && a.add(e), s.has(e) || s.add(e), e;
    },
    cancel: (e) => {
      n.delete(e), a.delete(e);
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e));
    },
  };
  return c;
}
var ji = [
    `read`,
    `resolveKeyframes`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ],
  Mi = 40;
function Ni(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = ji.reduce((e, t) => ((e[t] = Ai(a)), e), {}),
    {
      read: s,
      resolveKeyframes: c,
      update: l,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    p = () => {
      let a = ki.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, Mi), 1)),
        (i.timestamp = a),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p));
    },
    m = () => {
      (n = !0), (r = !0), i.isProcessing || e(p);
    };
  return {
    schedule: ji.reduce((e, t) => {
      let r = o[t];
      return (e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))), e;
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < ji.length; t++) o[ji[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: M,
    cancel: Pi,
    state: Fi,
    steps: Ii,
  } = Ni(typeof requestAnimationFrame < `u` ? requestAnimationFrame : Si, !0),
  Li = (0, b.createContext)({ strict: !1 }),
  Ri = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  zi = {};
for (let e in Ri) zi[e] = { isEnabled: (t) => Ri[e].some((e) => !!t[e]) };
function N(e) {
  for (let t in e) zi[t] = { ...zi[t], ...e[t] };
}
var P = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(
    `.`
  )
);
function Bi(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    P.has(e)
  );
}
var Vi = c({ default: () => Hi }),
  Hi,
  Ui = o(() => {
    throw (
      ((Hi = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`
      ))
    );
  }),
  Wi = (e) => !Bi(e);
function Gi(e) {
  e && (Wi = (t) => (t.startsWith(`on`) ? !Bi(t) : e(t)));
}
try {
  Gi((Ui(), d(Vi)).default);
} catch {}
function Ki(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      ((Wi(i) ||
        (n === !0 && Bi(i)) ||
        (!t && !Bi(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
function qi(e) {
  if (typeof Proxy > `u`) return e;
  let t = new Map();
  return new Proxy((...t) => e(...t), {
    get: (n, r) =>
      r === `create` ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
  });
}
var Ji = (0, b.createContext)({});
function Yi(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Xi(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
var Zi = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  Qi = [`initial`, ...Zi];
function $i(e) {
  return Xi(e.animate) || Qi.some((t) => Yi(e[t]));
}
function ea(e) {
  return !!($i(e) || e.variants);
}
function ta(e, t) {
  if ($i(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || Yi(t) ? t : void 0,
      animate: Yi(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function na(e) {
  let { initial: t, animate: n } = ta(e, (0, b.useContext)(Ji));
  return (0, b.useMemo)(() => ({ initial: t, animate: n }), [ra(t), ra(n)]);
}
function ra(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var ia = Symbol.for(`motionComponentSymbol`);
function aa(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function oa(e, t, n) {
  return (0, b.useCallback)(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == `function` ? n(r) : aa(n) && (n.current = r));
    },
    [t]
  );
}
var sa = (e) => e.replace(/([a-z])([A-Z])/gu, `$1-$2`).toLowerCase(),
  ca = `data-` + sa(`framerAppearId`),
  { schedule: la, cancel: ua } = Ni(queueMicrotask, !1),
  da = (0, b.createContext)({});
function fa(e, t, n, r, i) {
  let { visualElement: a } = (0, b.useContext)(Ji),
    o = (0, b.useContext)(Li),
    s = (0, b.useContext)(ui),
    c = (0, b.useContext)(di).reducedMotion,
    l = (0, b.useRef)(null);
  (r ||= o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  let u = l.current,
    d = (0, b.useContext)(da);
  u &&
    !u.projection &&
    i &&
    (u.type === `html` || u.type === `svg`) &&
    pa(l.current, n, i, d);
  let f = (0, b.useRef)(!1);
  (0, b.useInsertionEffect)(() => {
    u && f.current && u.update(n, s);
  });
  let p = n[ca],
    m = (0, b.useRef)(
      !!p &&
        !window.MotionHandoffIsComplete?.call(window, p) &&
        window.MotionHasOptimisedAnimation?.call(window, p)
    );
  return (
    bi(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        la.render(u.render),
        m.current && u.animationState && u.animationState.animateChanges());
    }),
    (0, b.useEffect)(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
        (m.current &&=
          (queueMicrotask(() => {
            var e;
            (e = window.MotionHandoffMarkAsComplete) == null ||
              e.call(window, p);
          }),
          !1)));
    }),
    u
  );
}
function pa(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : ma(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && aa(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    });
}
function ma(e) {
  if (e) return e.options.allowProjection === !1 ? ma(e.parent) : e.projection;
}
function ha({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && N(e);
  function a(a, o) {
    let s,
      c = { ...(0, b.useContext)(di), ...a, layoutId: ga(a) },
      { isStatic: l } = c,
      u = na(a),
      d = r(a, l);
    if (!l && yi) {
      _a(c, e);
      let n = va(c);
      (s = n.MeasureLayout),
        (u.visualElement = fa(i, d, c, t, n.ProjectionNode));
    }
    return (0, j.jsxs)(Ji.Provider, {
      value: u,
      children: [
        s && u.visualElement
          ? (0, j.jsx)(s, { visualElement: u.visualElement, ...c })
          : null,
        n(i, a, oa(d, u.visualElement, o), d, l, u.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof i == `string` ? i : `create(${i.displayName ?? i.name ?? ``})`
  }`;
  let o = (0, b.forwardRef)(a);
  return (o[ia] = i), o;
}
function ga({ layoutId: e }) {
  let t = (0, b.useContext)(ci).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function _a(e, t) {
  (0, b.useContext)(Li).strict;
}
function va(e) {
  let { drag: t, layout: n } = zi;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var ya = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function ba(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(ya.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function xa(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
    }),
    t
  );
}
function Sa(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = xa(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = xa(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
var Ca = (e) => Array.isArray(e),
  wa = (e) => !!(e && typeof e == `object` && e.mix && e.toValue),
  Ta = (e) => (Ca(e) ? e[e.length - 1] || 0 : e),
  Ea = (e) => !!(e && e.getVelocity);
function Da(e) {
  let t = Ea(e) ? e.get() : e;
  return wa(t) ? t.toValue() : t;
}
function Oa(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  a
) {
  let o = { latestValues: Aa(r, i, a, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (e) => n({ props: r, current: e, ...o })),
      (o.onUpdate = (e) => n(e))),
    o
  );
}
var ka = (e) => (t, n) => {
  let r = (0, b.useContext)(Ji),
    i = (0, b.useContext)(ui),
    a = () => Oa(e, t, r, i);
  return n ? a() : li(a);
};
function Aa(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Da(a[e]);
  let { initial: o, animate: s } = e,
    c = $i(e),
    l = ea(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Xi(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Sa(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var ja = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  Ma = new Set(ja),
  Na = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Pa = Na(`--`),
  Fa = Na(`var(--`),
  Ia = (e) => (Fa(e) ? La.test(e.split(`/*`)[0].trim()) : !1),
  La =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ra = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  za = (e, t, n) => (n > t ? t : n < e ? e : n),
  Ba = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  Va = { ...Ba, transform: (e) => za(0, 1, e) },
  Ha = { ...Ba, default: 1 },
  Ua = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Wa = Ua(`deg`),
  Ga = Ua(`%`),
  F = Ua(`px`),
  Ka = Ua(`vh`),
  qa = Ua(`vw`),
  Ja = {
    ...Ga,
    parse: (e) => Ga.parse(e) / 100,
    transform: (e) => Ga.transform(e * 100),
  },
  Ya = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
  },
  Xa = {
    rotate: Wa,
    rotateX: Wa,
    rotateY: Wa,
    rotateZ: Wa,
    scale: Ha,
    scaleX: Ha,
    scaleY: Ha,
    scaleZ: Ha,
    skew: Wa,
    skewX: Wa,
    skewY: Wa,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: Va,
    originX: Ja,
    originY: Ja,
    originZ: F,
  },
  Za = { ...Ba, transform: Math.round },
  Qa = {
    ...Ya,
    ...Xa,
    zIndex: Za,
    size: F,
    fillOpacity: Va,
    strokeOpacity: Va,
    numOctaves: Za,
  },
  $a = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  eo = ja.length;
function to(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < eo; a++) {
    let o = ja[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (
      ((c =
        typeof s == `number`
          ? s === +!!o.startsWith(`scale`)
          : parseFloat(s) === 0),
      !c || n)
    ) {
      let e = Ra(s, Qa[o]);
      if (!c) {
        i = !1;
        let t = $a[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r;
}
function no(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Ma.has(e)) {
      o = !0;
      continue;
    } else if (Pa(e)) {
      i[e] = n;
      continue;
    } else {
      let t = Ra(n, Qa[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = to(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var ro = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  io = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function ao(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? ro : io;
  e[a.offset] = F.transform(-r);
  let o = F.transform(t),
    s = F.transform(n);
  e[a.array] = `${o} ${s}`;
}
function oo(e, t, n) {
  return typeof e == `string` ? e : F.transform(t + n * e);
}
function so(e, t, n) {
  return `${oo(t, e.x, e.width)} ${oo(n, e.y, e.height)}`;
}
function co(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: a,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d
) {
  if ((no(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: f, style: p, dimensions: m } = e;
  f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (i !== void 0 || a !== void 0 || p.transform) &&
      (p.transformOrigin = so(
        m,
        i === void 0 ? 0.5 : i,
        a === void 0 ? 0.5 : a
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && ao(f, o, s, c, !1);
}
var lo = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  uo = () => ({ ...lo(), attrs: {} }),
  fo = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function po(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let t in n) e.style.setProperty(t, n[t]);
}
var mo = new Set([
  `baseFrequency`,
  `diffuseConstant`,
  `kernelMatrix`,
  `kernelUnitLength`,
  `keySplines`,
  `keyTimes`,
  `limitingConeAngle`,
  `markerHeight`,
  `markerWidth`,
  `numOctaves`,
  `targetX`,
  `targetY`,
  `surfaceScale`,
  `specularConstant`,
  `specularExponent`,
  `stdDeviation`,
  `tableValues`,
  `viewBox`,
  `gradientTransform`,
  `pathLength`,
  `startOffset`,
  `textLength`,
  `lengthAdjust`,
]);
function ho(e, t, n, r) {
  po(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(mo.has(n) ? n : sa(n), t.attrs[n]);
}
var go = {};
function _o(e) {
  Object.assign(go, e);
}
function I(e, { layout: t, layoutId: n }) {
  return (
    Ma.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!go[e] || e === `opacity`))
  );
}
function L(e, t, n) {
  let { style: r } = e,
    i = {};
  for (let a in r)
    (Ea(r[a]) ||
      (t.style && Ea(t.style[a])) ||
      I(a, e) ||
      n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function vo(e, t, n) {
  let r = L(e, t, n);
  for (let n in e)
    if (Ea(e[n]) || Ea(t[n])) {
      let t =
        ja.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function yo(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == `function` ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
var bo = [`x`, `y`, `width`, `height`, `cx`, `cy`, `r`],
  xo = {
    useVisualState: ka({
      scrapeMotionValuesFromProps: vo,
      createRenderState: uo,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let a = !!e.drag;
        if (!a) {
          for (let e in i)
            if (Ma.has(e)) {
              a = !0;
              break;
            }
        }
        if (!a) return;
        let o = !t;
        if (t)
          for (let n = 0; n < bo.length; n++) {
            let r = bo[n];
            e[r] !== t[r] && (o = !0);
          }
        o &&
          M.read(() => {
            yo(n, r),
              M.render(() => {
                co(r, i, fo(n.tagName), e.transformTemplate), ho(n, r);
              });
          });
      },
    }),
  },
  So = {
    useVisualState: ka({
      scrapeMotionValuesFromProps: L,
      createRenderState: lo,
    }),
  };
function Co(e, t, n) {
  for (let r in t) !Ea(t[r]) && !I(r, n) && (e[r] = t[r]);
}
function wo({ transformTemplate: e }, t) {
  return (0, b.useMemo)(() => {
    let n = lo();
    return no(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function To(e, t) {
  let n = e.style || {},
    r = {};
  return Co(r, n, e), Object.assign(r, wo(e, t)), r;
}
function Eo(e, t) {
  let n = {},
    r = To(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function Do(e, t, n, r) {
  let i = (0, b.useMemo)(() => {
    let n = uo();
    return (
      co(n, t, fo(r), e.transformTemplate),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    Co(t, e.style, e), (i.style = { ...t, ...i.style });
  }
  return i;
}
function Oo(e = !1) {
  return (t, n, r, { latestValues: i }, a) => {
    let o = (ba(t) ? Do : Eo)(n, i, a, t),
      s = Ki(n, typeof t == `string`, e),
      c = t === b.Fragment ? {} : { ...s, ...o, ref: r },
      { children: l } = n,
      u = (0, b.useMemo)(() => (Ea(l) ? l.get() : l), [l]);
    return (0, b.createElement)(t, { ...c, children: u });
  };
}
function ko(e, t) {
  return function (n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    return ha({
      ...(ba(n) ? xo : So),
      preloadedFeatures: e,
      useRender: Oo(r),
      createVisualElement: t,
      Component: n,
    });
  };
}
function Ao(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function jo(e, t, n) {
  let r = e.getProps();
  return Sa(r, t, n === void 0 ? r.custom : n, e);
}
var Mo = Ti(() => window.ScrollTimeline !== void 0),
  No = class {
    constructor(e) {
      (this.stop = () => this.runAll(`stop`)),
        (this.animations = e.filter(Boolean));
    }
    get finished() {
      return Promise.all(
        this.animations.map((e) => (`finished` in e ? e.finished : e))
      );
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      let n = this.animations.map((n) => {
        if (Mo() && n.attachTimeline) return n.attachTimeline(e);
        if (typeof t == `function`) return t(n);
      });
      return () => {
        n.forEach((e, t) => {
          e && e(), this.animations[t].stop();
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e) {
      this.setAll(`time`, e);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e) {
      this.setAll(`speed`, e);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll(`flatten`);
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  },
  Po = class extends No {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  };
function Fo(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var Io = 2e4;
function Lo(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t));
  return t >= 2e4 ? 1 / 0 : t;
}
function Ro(e) {
  return typeof e == `function`;
}
function zo(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
var Bo = (e) => Array.isArray(e) && typeof e[0] == `number`,
  Vo = { linearEasing: void 0 };
function Ho(e, t) {
  let n = Ti(e);
  return () => Vo[t] ?? n();
}
var Uo = Ho(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Wo = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += e(Ei(0, i - 1, t)) + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Go(e) {
  return !!(
    (typeof e == `function` && Uo()) ||
    !e ||
    (typeof e == `string` && (e in qo || Uo())) ||
    Bo(e) ||
    (Array.isArray(e) && e.every(Go))
  );
}
var Ko = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  qo = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Ko([0, 0.65, 0.55, 1]),
    circOut: Ko([0.55, 0, 1, 0.45]),
    backIn: Ko([0.31, 0.01, 0.66, -0.59]),
    backOut: Ko([0.33, 1.53, 0.69, 0.99]),
  };
function Jo(e, t) {
  if (e)
    return typeof e == `function` && Uo()
      ? Wo(e, t)
      : Bo(e)
      ? Ko(e)
      : Array.isArray(e)
      ? e.map((e) => Jo(e, t) || qo.easeOut)
      : qo[e];
}
var Yo = { x: !1, y: !1 };
function Xo() {
  return Yo.x || Yo.y;
}
function Zo(e, t, n) {
  if (e instanceof Element) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Qo(e, t) {
  let n = Zo(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function $o(e) {
  return (t) => {
    t.pointerType === `touch` || Xo() || e(t);
  };
}
function es(e, t, n = {}) {
  let [r, i, a] = Qo(e, n),
    o = $o((e) => {
      let { target: n } = e,
        r = t(e);
      if (typeof r != `function` || !n) return;
      let a = $o((e) => {
        r(e), n.removeEventListener(`pointerleave`, a);
      });
      n.addEventListener(`pointerleave`, a, i);
    });
  return (
    r.forEach((e) => {
      e.addEventListener(`pointerenter`, o, i);
    }),
    a
  );
}
var ts = (e, t) => (t ? (e === t ? !0 : ts(e, t.parentElement)) : !1),
  ns = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  rs = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function is(e) {
  return rs.has(e.tagName) || e.tabIndex !== -1;
}
var as = new WeakSet();
function os(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function ss(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 })
  );
}
var cs = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = os(() => {
    if (as.has(n)) return;
    ss(n, `down`);
    let e = os(() => {
      ss(n, `up`);
    });
    n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => ss(n, `cancel`), t);
  });
  n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t);
};
function ls(e) {
  return ns(e) && !Xo();
}
function us(e, t, n = {}) {
  let [r, i, a] = Qo(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!ls(e) || as.has(r)) return;
      as.add(r);
      let a = t(e),
        o = (e, t) => {
          window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            !(!ls(e) || !as.has(r)) &&
              (as.delete(r), typeof a == `function` && a(e, { success: t }));
        },
        s = (e) => {
          o(e, n.useGlobalTarget || ts(r, e.target));
        },
        c = (e) => {
          o(e, !1);
        };
      window.addEventListener(`pointerup`, s, i),
        window.addEventListener(`pointercancel`, c, i);
    };
  return (
    r.forEach((e) => {
      !is(e) && e.getAttribute(`tabindex`) === null && (e.tabIndex = 0),
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        e.addEventListener(`focus`, (e) => cs(e, i), i);
    }),
    a
  );
}
function ds(e) {
  return e === `x` || e === `y`
    ? Yo[e]
      ? null
      : ((Yo[e] = !0),
        () => {
          Yo[e] = !1;
        })
    : Yo.x || Yo.y
    ? null
    : ((Yo.x = Yo.y = !0),
      () => {
        Yo.x = Yo.y = !1;
      });
}
var fs = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...ja]),
  ps;
function ms() {
  ps = void 0;
}
var hs = {
  now: () => (
    ps === void 0 &&
      hs.set(
        Fi.isProcessing || ki.useManualTiming ? Fi.timestamp : performance.now()
      ),
    ps
  ),
  set: (e) => {
    (ps = e), queueMicrotask(ms);
  },
};
function gs(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function _s(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var vs = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return gs(this.subscriptions, e), () => _s(this.subscriptions, e);
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](e, t, n);
      else
        for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          r && r(e, t, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function ys(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var bs = 30,
  xs = (e) => !isNaN(parseFloat(e)),
  Ss = { current: void 0 },
  Cs = class {
    constructor(e, t = {}) {
      (this.version = `11.18.2`),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e, t = !0) => {
          let n = hs.now();
          this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            t &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e),
        (this.updatedAt = hs.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = xs(this.current));
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new vs());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            n(),
              M.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e, t = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return Ss.current && Ss.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = hs.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > bs
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, bs);
      return ys(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function ws(e, t) {
  return new Cs(e, t);
}
function Ts(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ws(n));
}
function Es(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = jo(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) Ts(e, t, Ta(i[t]));
}
function Ds(e) {
  return !!(Ea(e) && e.add);
}
function Os(e, t) {
  let n = e.getValue(`willChange`);
  if (Ds(n)) return n.add(t);
}
function ks(e) {
  return e.props[ca];
}
var As = { current: !1 },
  js = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Ms = 1e-7,
  Ns = 12;
function Ps(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do (o = t + (n - t) / 2), (a = js(o, r, i) - e), a > 0 ? (n = o) : (t = o);
  while (Math.abs(a) > Ms && ++s < Ns);
  return o;
}
function Fs(e, t, n, r) {
  if (e === t && n === r) return Si;
  let i = (t) => Ps(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : js(i(e), t, r));
}
var Is = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Ls = (e) => (t) => 1 - e(1 - t),
  Rs = Fs(0.33, 1.53, 0.69, 0.99),
  zs = Ls(Rs),
  Bs = Is(zs),
  Vs = (e) => ((e *= 2) < 1 ? 0.5 * zs(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  Hs = (e) => 1 - Math.sin(Math.acos(e)),
  Us = Ls(Hs),
  Ws = Is(Hs),
  Gs = (e) => /^0[^.\s]+$/u.test(e);
function Ks(e) {
  return typeof e == `number`
    ? e === 0
    : e === null
    ? !0
    : e === `none` || e === `0` || Gs(e);
}
var qs = (e) => Math.round(e * 1e5) / 1e5,
  Js = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ys(e) {
  return e == null;
}
var Xs =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Zs = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Xs.test(n) && n.startsWith(e)) ||
      (t && !Ys(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Qs = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Js);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  $s = (e) => za(0, 255, e),
  ec = { ...Ba, transform: (e) => Math.round($s(e)) },
  tc = {
    test: Zs(`rgb`, `red`),
    parse: Qs(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      ec.transform(e) +
      `, ` +
      ec.transform(t) +
      `, ` +
      ec.transform(n) +
      `, ` +
      qs(Va.transform(r)) +
      `)`,
  };
function nc(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var rc = { test: Zs(`#`), parse: nc, transform: tc.transform },
  ic = {
    test: Zs(`hsl`, `hue`),
    parse: Qs(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      Ga.transform(qs(t)) +
      `, ` +
      Ga.transform(qs(n)) +
      `, ` +
      qs(Va.transform(r)) +
      `)`,
  },
  ac = {
    test: (e) => tc.test(e) || rc.test(e) || ic.test(e),
    parse: (e) =>
      tc.test(e) ? tc.parse(e) : ic.test(e) ? ic.parse(e) : rc.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
        ? tc.transform(e)
        : ic.transform(e),
  },
  oc =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function sc(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(Js)?.length || 0) + (e.match(oc)?.length || 0) > 0
  );
}
var cc = `number`,
  lc = `color`,
  uc = `var`,
  dc = `var(`,
  fc = "${}",
  pc =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mc(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        pc,
        (e) => (
          ac.test(e)
            ? (r.color.push(a), i.push(lc), n.push(ac.parse(e)))
            : e.startsWith(dc)
            ? (r.var.push(a), i.push(uc), n.push(e))
            : (r.number.push(a), i.push(cc), n.push(parseFloat(e))),
          ++a,
          fc
        )
      )
      .split(fc),
    indexes: r,
    types: i,
  };
}
function hc(e) {
  return mc(e).values;
}
function gc(e) {
  let { split: t, types: n } = mc(e),
    r = t.length;
  return (e) => {
    let i = ``;
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a];
        t === cc
          ? (i += qs(e[a]))
          : t === lc
          ? (i += ac.transform(e[a]))
          : (i += e[a]);
      }
    return i;
  };
}
var _c = (e) => (typeof e == `number` ? 0 : e);
function vc(e) {
  let t = hc(e);
  return gc(e)(t.map(_c));
}
var yc = { test: sc, parse: hc, createTransformer: gc, getAnimatableNone: vc },
  bc = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function xc(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Js) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!bc.has(t);
  return r !== n && (a *= 100), t + `(` + a + i + `)`;
}
var Sc = /\b([a-z-]*)\(.*?\)/gu,
  Cc = {
    ...yc,
    getAnimatableNone: (e) => {
      let t = e.match(Sc);
      return t ? t.map(xc).join(` `) : e;
    },
  },
  wc = {
    ...Qa,
    color: ac,
    backgroundColor: ac,
    outlineColor: ac,
    fill: ac,
    stroke: ac,
    borderColor: ac,
    borderTopColor: ac,
    borderRightColor: ac,
    borderBottomColor: ac,
    borderLeftColor: ac,
    filter: Cc,
    WebkitFilter: Cc,
  },
  Tc = (e) => wc[e];
function Ec(e, t) {
  let n = Tc(e);
  return (
    n !== Cc && (n = yc), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var Dc = new Set([`auto`, `none`, `0`]);
function Oc(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let t = e[r];
    typeof t == `string` && !Dc.has(t) && mc(t).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (let r of t) e[r] = Ec(n, i);
}
var kc = (e) => e === Ba || e === F,
  Ac = (e, t) => parseFloat(e.split(`, `)[t]),
  jc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === `none` || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Ac(i[1], t);
      {
        let t = r.match(/^matrix\((.+)\)$/u);
        return t ? Ac(t[1], e) : 0;
      }
    },
  Mc = new Set([`x`, `y`, `z`]),
  Nc = ja.filter((e) => !Mc.has(e));
function Pc(e) {
  let t = [];
  return (
    Nc.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var Fc = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: jc(4, 13),
  y: jc(5, 14),
};
(Fc.translateX = Fc.x), (Fc.translateY = Fc.y);
var Ic = new Set(),
  Lc = !1,
  Rc = !1;
function zc() {
  if (Rc) {
    let e = Array.from(Ic).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    t.forEach((e) => {
      let t = Pc(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            var r;
            (r = e.getValue(t)) == null || r.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      });
  }
  (Rc = !1), (Lc = !1), Ic.forEach((e) => e.complete()), Ic.clear();
}
function Bc() {
  Ic.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Rc = !0);
  });
}
function Vc() {
  Bc(), zc();
}
var Hc = class {
    constructor(e, t, n, r, i, a = !1) {
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (Ic.add(this),
            Lc || ((Lc = !0), M.read(Bc), M.resolveKeyframes(zc)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null)
          if (i === 0) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Ic.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), Ic.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  Uc = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  R = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Wc(e) {
  let t = R.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var Gc = 4;
function Kc(e, t, n = 1) {
  wi(
    n <= Gc,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = Wc(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Uc(e) ? parseFloat(e) : e;
  }
  return Ia(i) ? Kc(i, t, n + 1) : i;
}
var qc = (e) => (t) => t.test(e),
  Jc = [Ba, F, Ga, Wa, qa, Ka, { test: (e) => e === `auto`, parse: (e) => e }],
  Yc = (e) => Jc.find(qc(e)),
  Xc = class extends Hc {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Ia(r))) {
          let i = Kc(r, t.current);
          i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r);
        }
      }
      if ((this.resolveNoneKeyframes(), !fs.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = Yc(r),
        o = Yc(i);
      if (a !== o)
        if (kc(a) && kc(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++) Ks(e[t]) && n.push(t);
      n.length && Oc(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = Fc[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current)
        )),
        (t[0] = this.measuredOrigin);
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      (n[i] = Fc[t](
        e.measureViewportBox(),
        window.getComputedStyle(e.current)
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes();
    }
  },
  Zc = (e, t) =>
    t === `zIndex`
      ? !1
      : !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` &&
            (yc.test(e) || e === `0`) &&
            !e.startsWith(`url(`))
        );
function Qc(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function $c(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Zc(i, t),
    s = Zc(a, t);
  return (
    Ci(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`
    ),
    !o || !s ? !1 : Qc(e) || ((n === `spring` || Ro(n)) && r)
  );
}
var el = (e) => e !== null;
function tl(e, { repeat: t, repeatType: n = `loop` }, r) {
  let i = e.filter(el),
    a = t && n !== `loop` && t % 2 == 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
var nl = 40,
  rl = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      ...o
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = hs.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          ...o,
        }),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > nl
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && Vc(), this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      (this.resolvedAt = hs.now()), (this.hasAttemptedResolve = !0);
      let {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: c,
      } = this.options;
      if (!c && !$c(e, n, r, i))
        if (As.current || !a) {
          s && s(tl(e, this.options, t)),
            o && o(),
            this.resolveFinishedPromise();
          return;
        } else this.options.duration = 0;
      let l = this.initPlayback(e, t);
      l !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...l }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      (this.options.type = `keyframes`), (this.options.ease = `linear`);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  z = (e, t, n) => e + (t - e) * n;
function il(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function al({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    (i = il(s, r, e + 1 / 3)), (a = il(s, r, e)), (o = il(s, r, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function ol(e, t) {
  return (n) => (n > 0 ? t : e);
}
var sl = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  cl = [rc, tc, ic],
  ll = (e) => cl.find((t) => t.test(e));
function ul(e) {
  let t = ll(e);
  if (
    (Ci(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === ic && (n = al(n)), n;
}
var dl = (e, t) => {
    let n = ul(e),
      r = ul(t);
    if (!n || !r) return ol(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = sl(n.red, r.red, e)),
      (i.green = sl(n.green, r.green, e)),
      (i.blue = sl(n.blue, r.blue, e)),
      (i.alpha = z(n.alpha, r.alpha, e)),
      tc.transform(i)
    );
  },
  fl = (e, t) => (n) => t(e(n)),
  B = (...e) => e.reduce(fl),
  pl = new Set([`none`, `hidden`]);
function ml(e, t) {
  return pl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function hl(e, t) {
  return (n) => z(e, t, n);
}
function gl(e) {
  return typeof e == `number`
    ? hl
    : typeof e == `string`
    ? Ia(e)
      ? ol
      : ac.test(e)
      ? dl
      : bl
    : Array.isArray(e)
    ? _l
    : typeof e == `object`
    ? ac.test(e)
      ? dl
      : vl
    : ol;
}
function _l(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => gl(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function vl(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = gl(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function yl(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]];
    (n[i] = e.values[o] ?? 0), r[a]++;
  }
  return n;
}
var bl = (e, t) => {
  let n = yc.createTransformer(t),
    r = mc(e),
    i = mc(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (pl.has(e) && !i.values.length) || (pl.has(t) && !r.values.length)
      ? ml(e, t)
      : B(_l(yl(r, i), i.values), n)
    : (Ci(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      ol(e, t));
};
function xl(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? z(e, t, n)
    : gl(e)(e, t);
}
var Sl = 5;
function Cl(e, t, n) {
  let r = Math.max(t - Sl, 0);
  return ys(n - e(r), t - r);
}
var V = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  wl = 0.001;
function Tl({
  duration: e = V.duration,
  bounce: t = V.bounce,
  velocity: n = V.velocity,
  mass: r = V.mass,
}) {
  let i, a;
  Ci(e <= Di(V.maxDuration), `Spring duration must be 10 seconds or less`);
  let o = 1 - t;
  (o = za(V.minDamping, V.maxDamping, o)),
    (e = za(V.minDuration, V.maxDuration, Oi(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = Ol(t, o),
            c = Math.exp(-i);
          return wl - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = Ol(t ** 2, o);
          return ((-i(t) + wl > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => {
          let r = Math.exp(-t * e),
            i = (t - n) * e + 1;
          return -wl + r * i;
        }),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e))));
  let s = 5 / e,
    c = Dl(i, a, s);
  if (((e = Di(e)), isNaN(c)))
    return { stiffness: V.stiffness, damping: V.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var El = 12;
function Dl(e, t, n) {
  let r = n;
  for (let n = 1; n < El; n++) r -= e(r) / t(r);
  return r;
}
function Ol(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var kl = [`duration`, `bounce`],
  Al = [`stiffness`, `damping`, `mass`];
function jl(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function Ml(e) {
  let t = {
    velocity: V.velocity,
    stiffness: V.stiffness,
    damping: V.damping,
    mass: V.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!jl(e, Al) && jl(e, kl))
    if (e.visualDuration) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * za(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: V.mass, stiffness: i, damping: a };
    } else {
      let n = Tl(e);
      (t = { ...t, ...n, mass: V.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Nl(e = V.visualDuration, t = V.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = Ml({ ...n, velocity: -Oi(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = Oi(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  (r ||= v ? V.restSpeed.granular : V.restSpeed.default),
    (i ||= v ? V.restDelta.granular : V.restDelta.default);
  let y;
  if (h < 1) {
    let e = Ol(_, h);
    y = (t) =>
      o -
      Math.exp(-h * _ * t) *
        (((m + h * _ * g) / e) * Math.sin(e * t) + g * Math.cos(e * t));
  } else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
  else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
  }
  let b = {
    calculatedDuration: (p && d) || null,
    next: (e) => {
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = 0;
        h < 1 && (n = e === 0 ? Di(m) : Cl(y, e, t));
        let a = Math.abs(n) <= r,
          c = Math.abs(o - t) <= i;
        s.done = a && c;
      }
      return (s.value = s.done ? o : t), s;
    },
    toString: () => {
      let e = Math.min(Lo(b), Io),
        t = Wo((t) => b.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
  };
  return b;
}
function Pl({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
        ? s
        : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      (f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n);
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = Nl({
          keyframes: [f.value, m(f.value)],
          velocity: Cl(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
var Fl = Fs(0.42, 0, 1, 1),
  Il = Fs(0, 0, 0.58, 1),
  Ll = Fs(0.42, 0, 0.58, 1),
  Rl = (e) => Array.isArray(e) && typeof e[0] != `number`,
  zl = {
    linear: Si,
    easeIn: Fl,
    easeInOut: Ll,
    easeOut: Il,
    circIn: Hs,
    circInOut: Ws,
    circOut: Us,
    backIn: zs,
    backInOut: Bs,
    backOut: Rs,
    anticipate: Vs,
  },
  Bl = (e) => {
    if (Bo(e)) {
      wi(
        e.length === 4,
        `Cubic bezier arrays must contain four numerical values.`
      );
      let [t, n, r, i] = e;
      return Fs(t, n, r, i);
    } else if (typeof e == `string`)
      return wi(zl[e] !== void 0, `Invalid easing type '${e}'`), zl[e];
    return e;
  };
function Vl(e, t, n) {
  let r = [],
    i = n || xl,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    t && (a = B(Array.isArray(t) ? t[n] || Si : t, a)), r.push(a);
  }
  return r;
}
function Hl(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if (
    (wi(a === t.length, `Both input and output ranges must be the same length`),
    a === 1)
  )
    return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Vl(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = Ei(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(za(e[0], e[a - 1], t)) : l;
}
function H(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Ei(0, t, r);
    e.push(z(n, 1, i));
  }
}
function U(e) {
  let t = [0];
  return H(t, e.length - 1), t;
}
function W(e, t) {
  return e.map((e) => e * t);
}
function G(e, t) {
  return e.map(() => t || Ll).splice(0, e.length - 1);
}
function K({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = Rl(r) ? r.map(Bl) : Bl(r),
    a = { done: !1, value: t[0] },
    o = Hl(W(n && n.length === t.length ? n : U(t), e), t, {
      ease: Array.isArray(i) ? i : G(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var Ul = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: () => M.update(t, !0),
      stop: () => Pi(t),
      now: () => (Fi.isProcessing ? Fi.timestamp : hs.now()),
    };
  },
  Wl = { decay: Pl, inertia: Pl, tween: K, keyframes: K, spring: Nl },
  Gl = (e) => e / 100,
  Kl = class extends rl {
    constructor(e) {
      super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = `running`),
        (this.startTime = null),
        (this.state = `idle`),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === `idle`)
          )
            return;
          this.teardown();
          let { onStop: e } = this.options;
          e && e();
        });
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      (this.resolver = new (r?.KeyframeResolver || Hc)(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes)
          );
    }
    initPlayback(e) {
      let {
          type: t = `keyframes`,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = this.options,
        o = Ro(t) ? t : Wl[t] || K,
        s,
        c;
      o !== K &&
        typeof e[0] != `number` &&
        ((s = B(Gl, xl(e[0], e[1]))), (e = [0, 100]));
      let l = o({ ...this.options, keyframes: e });
      i === `mirror` &&
        (c = o({ ...this.options, keyframes: [...e].reverse(), velocity: -a })),
        l.calculatedDuration === null && (l.calculatedDuration = Lo(l));
      let { calculatedDuration: u } = l,
        d = u + r,
        f = d * (n + 1) - r;
      return {
        generator: l,
        mirroredGenerator: c,
        mapPercentToKeyframes: s,
        calculatedDuration: u,
        resolvedDuration: d,
        totalDuration: f,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      this.play(),
        this.pendingPlayState === `paused` || !e
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: e } = this.options;
        return { done: !0, value: e[e.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: a,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: c,
        totalDuration: l,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: d,
        repeat: f,
        repeatType: p,
        repeatDelay: m,
        onUpdate: h,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - l / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime === null
          ? (this.currentTime = Math.round(e - this.startTime) * this.speed)
          : (this.currentTime = this.holdTime);
      let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        _ = this.speed >= 0 ? g < 0 : g > l;
      (this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = l);
      let v = this.currentTime,
        y = i;
      if (f) {
        let e = Math.min(this.currentTime, l) / u,
          t = Math.floor(e),
          n = e % 1;
        !n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, f + 1)),
          t % 2 &&
            (p === `reverse`
              ? ((n = 1 - n), m && (n -= m / u))
              : p === `mirror` && (y = a)),
          (v = za(0, 1, n) * u);
      }
      let b = _ ? { done: !1, value: s[0] } : y.next(v);
      o && (b.value = o(b.value));
      let { done: x } = b;
      !_ &&
        c !== null &&
        (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && r !== void 0 && (b.value = tl(s, this.options, r)),
        h && h(b.value),
        S && this.finish(),
        b
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Oi(e.calculatedDuration) : 0;
    }
    get time() {
      return Oi(this.currentTime);
    }
    set time(e) {
      (e = Di(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = Oi(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = `running`;
        return;
      }
      if (this.isStopped) return;
      let { driver: e = Ul, onPlay: t, startTime: n } = this.options;
      (this.driver ||= e((e) => this.tick(e))), t && t();
      let r = this.driver.now();
      this.holdTime === null
        ? this.startTime
          ? this.state === `finished` && (this.startTime = r)
          : (this.startTime = n ?? this.calcStartTime())
        : (this.startTime = r - this.holdTime),
        this.state === `finished` && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start();
    }
    pause() {
      if (!this._resolved) {
        this.pendingPlayState = `paused`;
        return;
      }
      (this.state = `paused`), (this.holdTime = this.currentTime ?? 0);
    }
    complete() {
      this.state !== `running` && this.play(),
        (this.pendingPlayState = this.state = `finished`),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = `finished`);
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = `idle`),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  },
  ql = new Set([`opacity`, `clipPath`, `filter`, `transform`]);
function Jl(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeInOut`,
    times: c,
  } = {}
) {
  let l = { [t]: n };
  c && (l.offset = c);
  let u = Jo(s, i);
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? `linear` : u,
      fill: `both`,
      iterations: a + 1,
      direction: o === `reverse` ? `alternate` : `normal`,
    })
  );
}
var Yl = Ti(() => Object.hasOwnProperty.call(Element.prototype, `animate`)),
  Xl = 10,
  Zl = 2e4;
function Ql(e) {
  return Ro(e.type) || e.type === `spring` || !Go(e.ease);
}
function $l(e, t) {
  let n = new Kl({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    a = 0;
  for (; !r.done && a < Zl; ) (r = n.sample(a)), i.push(r.value), (a += Xl);
  return { times: void 0, keyframes: i, duration: a - Xl, ease: `linear` };
}
var eu = { anticipate: Vs, backInOut: Bs, circInOut: Ws };
function tu(e) {
  return e in eu;
}
var nu = class extends rl {
    constructor(e) {
      super(e);
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      (this.resolver = new Xc(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve();
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: a,
        motionValue: o,
        name: s,
        startTime: c,
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      if (
        (typeof i == `string` && Uo() && tu(i) && (i = eu[i]), Ql(this.options))
      ) {
        let {
            onComplete: t,
            onUpdate: o,
            motionValue: s,
            element: c,
            ...l
          } = this.options,
          u = $l(e, l);
        (e = u.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (n = u.duration),
          (r = u.times),
          (i = u.ease),
          (a = `keyframes`);
      }
      let l = Jl(o.owner.current, s, e, {
        ...this.options,
        duration: n,
        times: r,
        ease: i,
      });
      return (
        (l.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (zo(l, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (l.onfinish = () => {
              let { onComplete: n } = this.options;
              o.set(tl(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise();
            }),
        { animation: l, duration: n, times: r, type: a, ease: i, keyframes: e }
      );
    }
    get duration() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { duration: t } = e;
      return Oi(t);
    }
    get time() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { animation: t } = e;
      return Oi(t.currentTime || 0);
    }
    set time(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.currentTime = Di(e);
    }
    get speed() {
      let { resolved: e } = this;
      if (!e) return 1;
      let { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      let { resolved: e } = this;
      if (!e) return `idle`;
      let { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      let { resolved: e } = this;
      if (!e) return null;
      let { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
        let { resolved: t } = this;
        if (!t) return Si;
        let { animation: n } = t;
        zo(n, e);
      }
      return Si;
    }
    play() {
      if (this.isStopped) return;
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      t.playState === `finished` && this.updateFinishedPromise(), t.play();
    }
    pause() {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === `idle`)
      )
        return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      let { resolved: e } = this;
      if (!e) return;
      let {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: a,
        times: o,
      } = e;
      if (t.playState === `idle` || t.playState === `finished`) return;
      if (this.time) {
        let {
            motionValue: e,
            onUpdate: t,
            onComplete: s,
            element: c,
            ...l
          } = this.options,
          u = new Kl({
            ...l,
            keyframes: n,
            duration: r,
            type: i,
            ease: a,
            times: o,
            isGenerator: !0,
          }),
          d = Di(this.time);
        e.setWithVelocity(u.sample(d - Xl).value, u.sample(d).value, Xl);
      }
      let { onStop: s } = this.options;
      s && s(), this.cancel();
    }
    complete() {
      let { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      let { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      let {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o,
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
        return !1;
      let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
      return (
        Yl() &&
        n &&
        ql.has(n) &&
        !s &&
        !c &&
        !r &&
        i !== `mirror` &&
        a !== 0 &&
        o !== `inertia`
      );
    }
  },
  ru = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  iu = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  au = { type: `keyframes`, duration: 0.8 },
  ou = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  su = (e, { keyframes: t }) =>
    t.length > 2
      ? au
      : Ma.has(e)
      ? e.startsWith(`scale`)
        ? iu(t[1])
        : ru
      : ou;
function cu({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
var lu =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = Fo(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= Di(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: (e) => {
        t.set(e), s.onUpdate && s.onUpdate(e);
      },
      onComplete: () => {
        o(), s.onComplete && s.onComplete();
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    };
    cu(s) || (u = { ...u, ...su(e, u) }),
      (u.duration &&= Di(u.duration)),
      (u.repeatDelay &&= Di(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      (As.current || ki.skipAnimations) &&
        ((d = !0), (u.duration = 0), (u.delay = 0)),
      d && !a && t.get() !== void 0)
    ) {
      let e = tl(u.keyframes, s);
      if (e !== void 0)
        return (
          M.update(() => {
            u.onUpdate(e), u.onComplete();
          }),
          new Po([])
        );
    }
    return !a && nu.supports(u) ? new nu(u) : new Kl(u);
  };
function uu({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function du(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
  r && (a = r);
  let c = [],
    l = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (l && uu(l, t))) continue;
    let o = { delay: n, ...Fo(a || {}, t) },
      u = !1;
    if (window.MotionHandoffAnimation) {
      let n = ks(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, M);
        e !== null && ((o.startTime = e), (u = !0));
      }
    }
    Os(e, t),
      r.start(
        lu(t, r, i, e.shouldReduceMotion && fs.has(t) ? { type: !1 } : o, e, u)
      );
    let d = r.animation;
    d && c.push(d);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        M.update(() => {
          o && Es(e, o);
        });
      }),
    c
  );
}
function fu(e, t, n = {}) {
  let r = jo(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(du(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return pu(e, t, a + r, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  } else return Promise.all([a(), o(n.delay)]);
}
function pu(e, t, n = 0, r = 0, i = 1, a) {
  let o = [],
    s = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
  return (
    Array.from(e.variantChildren)
      .sort(mu)
      .forEach((e, r) => {
        e.notify(`AnimationStart`, t),
          o.push(
            fu(e, t, { ...a, delay: n + c(r) }).then(() =>
              e.notify(`AnimationComplete`, t)
            )
          );
      }),
    Promise.all(o)
  );
}
function mu(e, t) {
  return e.sortNodePosition(t);
}
function hu(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => fu(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = fu(e, t, n);
  else {
    let i = typeof t == `function` ? jo(e, t, n.custom) : t;
    r = Promise.all(du(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var gu = Qi.length;
function _u(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && _u(e.parent)) || {};
    return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
  }
  let t = {};
  for (let n = 0; n < gu; n++) {
    let r = Qi[n],
      i = e.props[r];
    (Yi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var vu = [...Zi].reverse(),
  yu = Zi.length;
function bu(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => hu(e, t, n)));
}
function xu(e) {
  let t = bu(e),
    n = wu(),
    r = !0,
    i = (t) => (n, r) => {
      let i = jo(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function a(n) {
    t = n(e);
  }
  function o(a) {
    let { props: o } = e,
      s = _u(e.parent) || {},
      c = [],
      l = new Set(),
      u = {},
      d = 1 / 0;
    for (let t = 0; t < yu; t++) {
      let f = vu[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = Yi(m),
        g = f === a ? p.isActive : null;
      g === !1 && (d = t);
      let _ = m === s[f] && m !== o[f] && h;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = { ...u }),
        (!p.isActive && g === null) ||
          (!m && !p.prevProp) ||
          Xi(m) ||
          typeof m == `boolean`)
      )
        continue;
      let v = Su(p.prevProp, m),
        y = v || (f === a && p.isActive && !_ && h) || (t > d && h),
        b = !1,
        x = Array.isArray(m) ? m : [m],
        S = x.reduce(i(f), {});
      g === !1 && (S = {});
      let { prevResolvedValues: C = {} } = p,
        w = { ...C, ...S },
        ee = (t) => {
          (y = !0),
            l.has(t) && ((b = !0), l.delete(t)),
            (p.needsAnimating[t] = !0);
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in w) {
        let t = S[e],
          n = C[e];
        if (u.hasOwnProperty(e)) continue;
        let r = !1;
        (r = Ca(t) && Ca(n) ? !Ao(t, n) : t !== n),
          r
            ? t == null
              ? l.add(e)
              : ee(e)
            : t !== void 0 && l.has(e)
            ? ee(e)
            : (p.protectedKeys[e] = !0);
      }
      (p.prevProp = m),
        (p.prevResolvedValues = S),
        p.isActive && (u = { ...u, ...S }),
        r && e.blockInitialAnimation && (y = !1),
        y &&
          (!(_ && v) || b) &&
          c.push(...x.map((e) => ({ animation: e, options: { type: f } })));
    }
    if (l.size) {
      let t = {};
      l.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        i && (i.liveStyle = !0), (t[n] = r ?? null);
      }),
        c.push({ animation: t });
    }
    let f = !!c.length;
    return (
      r &&
        (o.initial === !1 || o.initial === o.animate) &&
        !e.manuallyAnimateOnMount &&
        (f = !1),
      (r = !1),
      f ? t(c) : Promise.resolve()
    );
  }
  function s(t, r) {
    var i;
    if (n[t].isActive === r) return Promise.resolve();
    (i = e.variantChildren) == null ||
      i.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r);
    let a = o(t);
    for (let e in n) n[e].protectedKeys = {};
    return a;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      (n = wu()), (r = !0);
    },
  };
}
function Su(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !Ao(t, e) : !1;
}
function Cu(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function wu() {
  return {
    animate: Cu(!0),
    whileInView: Cu(),
    whileHover: Cu(),
    whileTap: Cu(),
    whileDrag: Cu(),
    whileFocus: Cu(),
    exit: Cu(),
  };
}
var Tu = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  Eu = class extends Tu {
    constructor(e) {
      super(e), (e.animationState ||= xu(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      Xi(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this);
    }
  },
  Du = 0,
  Ou = {
    animation: { Feature: Eu },
    exit: {
      Feature: class extends Tu {
        constructor() {
          super(...arguments), (this.id = Du++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive(`exit`, !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      },
    },
  };
function ku(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Au(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var ju = (e) => (t) => ns(t) && e(t, Au(t));
function Mu(e, t, n, r) {
  return ku(e, t, ju(n), r);
}
var Nu = (e, t) => Math.abs(e - t);
function Pu(e, t) {
  let n = Nu(e.x, t.x),
    r = Nu(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var Fu = class {
  constructor(
    e,
    t,
    { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let e = Ru(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n = Pu(e.offset, { x: 0, y: 0 }) >= 3;
        if (!t && !n) return;
        let { point: r } = e,
          { timestamp: i } = Fi;
        this.history.push({ ...r, timestamp: i });
        let { onStart: a, onMove: o } = this.handlers;
        t ||
          (a && a(this.lastMoveEvent, e),
          (this.startEvent = this.lastMoveEvent)),
          o && o(this.lastMoveEvent, e);
      }),
      (this.handlePointerMove = (e, t) => {
        (this.lastMoveEvent = e),
          (this.lastMoveEventInfo = Iu(t, this.transformPagePoint)),
          M.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (e, t) => {
        this.end();
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
        if (
          (this.dragSnapToOrigin && i && i(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let a = Ru(
          e.type === `pointercancel`
            ? this.lastMoveEventInfo
            : Iu(t, this.transformPagePoint),
          this.history
        );
        this.startEvent && n && n(e, a), r && r(e, a);
      }),
      !ns(e))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || window);
    let a = Iu(Au(e), this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = Fi;
    this.history = [{ ...o, timestamp: s }];
    let { onSessionStart: c } = t;
    c && c(e, Ru(a, this.history)),
      (this.removeListeners = B(
        Mu(this.contextWindow, `pointermove`, this.handlePointerMove),
        Mu(this.contextWindow, `pointerup`, this.handlePointerUp),
        Mu(this.contextWindow, `pointercancel`, this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Pi(this.updatePoint);
  }
};
function Iu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Lu(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ru({ point: e }, t) {
  return {
    point: e,
    delta: Lu(e, Bu(t)),
    offset: Lu(e, zu(t)),
    velocity: Vu(t, 0.1),
  };
}
function zu(e) {
  return e[0];
}
function Bu(e) {
  return e[e.length - 1];
}
function Vu(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Bu(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Di(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let a = Oi(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
var Hu = 1e-4,
  Uu = 1 - Hu,
  Wu = 1 + Hu,
  Gu = 0.01,
  Ku = 0 - Gu,
  qu = 0 + Gu;
function Ju(e) {
  return e.max - e.min;
}
function q(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Yu(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = z(t.min, t.max, e.origin)),
    (e.scale = Ju(n) / Ju(t)),
    (e.translate = z(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Uu && e.scale <= Wu) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Ku && e.translate <= qu) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Xu(e, t, n, r) {
  Yu(e.x, t.x, n.x, r ? r.originX : void 0),
    Yu(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Zu(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ju(t));
}
function Qu(e, t, n) {
  Zu(e.x, t.x, n.x), Zu(e.y, t.y, n.y);
}
function $u(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ju(t));
}
function ed(e, t, n) {
  $u(e.x, t.x, n.x), $u(e.y, t.y, n.y);
}
function td(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? z(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? z(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function nd(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function rd(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: nd(e.x, n, i), y: nd(e.y, t, r) };
}
function id(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ad(e, t) {
  return { x: id(e.x, t.x), y: id(e.y, t.y) };
}
function od(e, t) {
  let n = 0.5,
    r = Ju(e),
    i = Ju(t);
  return (
    i > r
      ? (n = Ei(t.min, t.max - r, e.min))
      : r > i && (n = Ei(e.min, e.max - i, t.min)),
    za(0, 1, n)
  );
}
function sd(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var cd = 0.35;
function ld(e = cd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = cd),
    { x: ud(e, `left`, `right`), y: ud(e, `top`, `bottom`) }
  );
}
function ud(e, t, n) {
  return { min: dd(e, t), max: dd(e, n) };
}
function dd(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var fd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  pd = () => ({ x: fd(), y: fd() }),
  md = () => ({ min: 0, max: 0 }),
  hd = () => ({ x: md(), y: md() });
function gd(e) {
  return [e(`x`), e(`y`)];
}
function _d({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function vd({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function yd(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function bd(e) {
  return e === void 0 || e === 1;
}
function xd({ scale: e, scaleX: t, scaleY: n }) {
  return !bd(e) || !bd(t) || !bd(n);
}
function Sd(e) {
  return (
    xd(e) ||
    Cd(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Cd(e) {
  return J(e.x) || J(e.y);
}
function J(e) {
  return e && e !== `0%`;
}
function wd(e, t, n) {
  return n + t * (e - n);
}
function Td(e, t, n, r, i) {
  return i !== void 0 && (e = wd(e, i, r)), wd(e, n, r) + t;
}
function Ed(e, t = 0, n = 1, r, i) {
  (e.min = Td(e.min, t, n, r, i)), (e.max = Td(e.max, t, n, r, i));
}
function Dd(e, { x: t, y: n }) {
  Ed(e.x, t.translate, t.scale, t.originPoint),
    Ed(e.y, n.translate, n.scale, n.originPoint);
}
var Od = 0.999999999999,
  kd = 1.0000000000001;
function Ad(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    (a = n[s]), (o = a.projectionDelta);
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        Nd(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Dd(e, o)),
      r && Sd(a.latestValues) && Nd(e, a.latestValues));
  }
  t.x < kd && t.x > Od && (t.x = 1), t.y < kd && t.y > Od && (t.y = 1);
}
function jd(e, t) {
  (e.min += t), (e.max += t);
}
function Md(e, t, n, r, i = 0.5) {
  Ed(e, t, n, z(e.min, e.max, i), r);
}
function Nd(e, t) {
  Md(e.x, t.x, t.scaleX, t.scale, t.originX),
    Md(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Pd(e, t) {
  return _d(yd(e.getBoundingClientRect(), t));
}
function Fd(e, t, n) {
  let r = Pd(e, n),
    { scroll: i } = t;
  return i && (jd(r.x, i.offset.x), jd(r.y, i.offset.y)), r;
}
var Id = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Y = new WeakMap(),
  Ld = class {
    constructor(e) {
      (this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = hd()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (e) => {
          let { dragSnapToOrigin: n } = this.getProps();
          n ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(Au(e).point);
        },
        i = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = ds(n)),
            !this.openDragLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            gd((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (Ga.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Ju(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && M.postRender(() => i(e, t)),
            Os(this.visualElement, `transform`);
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        a = (e, t) => {
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            (this.currentDirection = zd(o)),
              this.currentDirection !== null && i && i(this.currentDirection);
            return;
          }
          this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && a(e, t);
        },
        o = (e, t) => this.stop(e, t),
        s = () =>
          gd(
            (e) =>
              this.getAnimationState(e) === `paused` &&
              this.getAxisMotionValue(e).animation?.play()
          ),
        { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new Fu(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: a,
          onSessionEnd: o,
          resumeAnimation: s,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: c,
          contextWindow: Id(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && M.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Rd(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (a = td(a, this.constraints[e], this.elastic[e])),
        i.set(a);
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      e && aa(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : e && n
        ? (this.constraints = rd(n.layoutBox, e))
        : (this.constraints = !1),
        (this.elastic = ld(t)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          gd((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = sd(n.layoutBox[e], this.constraints[e]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !aa(e)) return !1;
      let n = e.current;
      wi(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = Fd(n, r.root, this.visualElement.getTransformPagePoint()),
        a = ad(r.layout.layoutBox, i);
      if (t) {
        let e = t(vd(a));
        (this.hasMutatedConstraints = !!e), e && (a = _d(e));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = gd((o) => {
          if (!Rd(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          a && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        Os(this.visualElement, e),
        n.start(lu(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      gd((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      gd((e) => this.getAxisMotionValue(e).animation?.pause());
    }
    getAnimationState(e) {
      return this.getAxisMotionValue(e).animation?.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps();
      return (
        n[t] ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      gd((t) => {
        let { drag: n } = this.getProps();
        if (!Rd(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - z(n, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!aa(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      gd((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = od({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        gd((t) => {
          if (!Rd(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(z(i, a, r[t]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Y.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Mu(e, `pointerdown`, (e) => {
          let { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        n = () => {
          let { dragConstraints: e } = this.getProps();
          aa(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener(`measure`, n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        M.read(n);
      let a = ku(window, `resize`, () => this.scalePositionWithinConstraints()),
        o = r.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (gd((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        a(), t(), i(), o && o();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = cd,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function Rd(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function zd(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n;
}
var Bd = class extends Tu {
    constructor(e) {
      super(e),
        (this.removeGroupControls = Si),
        (this.removeListeners = Si),
        (this.controls = new Ld(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || Si);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  Vd = (e) => (t, n) => {
    e && M.postRender(() => e(t, n));
  },
  Hd = class extends Tu {
    constructor() {
      super(...arguments), (this.removePointerDownListener = Si);
    }
    onPointerDown(e) {
      this.session = new Fu(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Id(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: Vd(e),
        onStart: Vd(t),
        onMove: n,
        onEnd: (e, t) => {
          delete this.session, r && M.postRender(() => r(e, t));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Mu(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  Ud = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Wd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Gd = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if (F.test(e)) e = parseFloat(e);
        else return e;
      return `${Wd(e, t.target.x)}% ${Wd(e, t.target.y)}%`;
    },
  },
  Kd = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = yc.parse(e);
      if (i.length > 5) return r;
      let a = yc.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (i[0 + o] /= s), (i[1 + o] /= c);
      let l = z(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  qd = class extends b.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      _o(Yd),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener(`animationComplete`, () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (Ud.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        a = n.projection;
      return a
        ? ((a.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                M.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        la.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Jd(e) {
  let [t, n] = gi(),
    r = (0, b.useContext)(ci);
  return (0, j.jsx)(qd, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, b.useContext)(da),
    isPresent: t,
    safeToRemove: n,
  });
}
var Yd = {
  borderRadius: {
    ...Gd,
    applyTo: [
      `borderTopLeftRadius`,
      `borderTopRightRadius`,
      `borderBottomLeftRadius`,
      `borderBottomRightRadius`,
    ],
  },
  borderTopLeftRadius: Gd,
  borderTopRightRadius: Gd,
  borderBottomLeftRadius: Gd,
  borderBottomRightRadius: Gd,
  boxShadow: Kd,
};
function Xd(e, t, n) {
  let r = Ea(e) ? e : ws(e);
  return r.start(lu(``, r, t, n)), r.animation;
}
function Zd(e) {
  return e instanceof SVGElement && e.tagName !== `svg`;
}
var Qd = (e, t) => e.depth - t.depth,
  $d = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      gs(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      _s(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(Qd),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function ef(e, t) {
  let n = hs.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (Pi(r), e(a - t));
    };
  return M.read(r, !0), () => Pi(r);
}
var tf = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`],
  nf = tf.length,
  rf = (e) => (typeof e == `string` ? parseFloat(e) : e),
  af = (e) => typeof e == `number` || F.test(e);
function of(e, t, n, r, i, a) {
  i
    ? ((e.opacity = z(0, n.opacity === void 0 ? 1 : n.opacity, cf(r))),
      (e.opacityExit = z(t.opacity === void 0 ? 1 : t.opacity, 0, lf(r))))
    : a &&
      (e.opacity = z(
        t.opacity === void 0 ? 1 : t.opacity,
        n.opacity === void 0 ? 1 : n.opacity,
        r
      ));
  for (let i = 0; i < nf; i++) {
    let a = `border${tf[i]}Radius`,
      o = sf(t, a),
      s = sf(n, a);
    (o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || af(o) === af(s)
        ? ((e[a] = Math.max(z(rf(o), rf(s), r), 0)),
          (Ga.test(s) || Ga.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = z(t.rotate || 0, n.rotate || 0, r));
}
function sf(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var cf = uf(0, 0.5, Us),
  lf = uf(0.5, 0.95, Si);
function uf(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ei(e, t, r)));
}
function df(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ff(e, t) {
  df(e.x, t.x), df(e.y, t.y);
}
function pf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function mf(e, t, n, r, i) {
  return (
    (e -= t), (e = wd(e, 1 / n, r)), i !== void 0 && (e = wd(e, 1 / i, r)), e
  );
}
function hf(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (Ga.test(t) &&
      ((t = parseFloat(t)), (t = z(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = z(a.min, a.max, r);
  e === a && (s -= t),
    (e.min = mf(e.min, t, n, s, i)),
    (e.max = mf(e.max, t, n, s, i));
}
function gf(e, t, [n, r, i], a, o) {
  hf(e, t[n], t[r], t[i], t.scale, a, o);
}
var _f = [`x`, `scaleX`, `originX`],
  vf = [`y`, `scaleY`, `originY`];
function yf(e, t, n, r) {
  gf(e.x, t, _f, n ? n.x : void 0, r ? r.x : void 0),
    gf(e.y, t, vf, n ? n.y : void 0, r ? r.y : void 0);
}
function bf(e) {
  return e.translate === 0 && e.scale === 1;
}
function xf(e) {
  return bf(e.x) && bf(e.y);
}
function Sf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Cf(e, t) {
  return Sf(e.x, t.x) && Sf(e.y, t.y);
}
function wf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Tf(e, t) {
  return wf(e.x, t.x) && wf(e.y, t.y);
}
function Ef(e) {
  return Ju(e.x) / Ju(e.y);
}
function Df(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var Of = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    gs(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (_s(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((t) => e === t);
    if (t === 0) return !1;
    let n;
    for (let e = t; e >= 0; e--) {
      let t = this.members[e];
      if (t.isPresent !== !1) {
        n = t;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function kf(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      rotateX: i,
      rotateY: a,
      skewX: o,
      skewY: s,
    } = n;
    e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `);
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`;
}
var Af = {
    type: `projectionFrame`,
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  jf = typeof window < `u` && window.MotionDebug !== void 0,
  Mf = [``, `X`, `Y`, `Z`],
  Nf = { visibility: `hidden` },
  Pf = 1e3,
  Ff = 0;
function If(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Lf(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = ks(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, M, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Lf(r);
}
function Rf({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      (this.id = Ff++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            jf &&
              (Af.totalNodes =
                Af.resolvedTargetDeltas =
                Af.recalculatedProjection =
                  0),
            this.nodes.forEach(Vf),
            this.nodes.forEach(Jf),
            this.nodes.forEach(Yf),
            this.nodes.forEach(Hf),
            jf && window.MotionDebug.record(Af);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0);
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new $d());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new vs()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t, n = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Zd(t)), (this.instance = t);
      let { layoutId: r, layout: i, visualElement: a } = this.options;
      if (
        (a && !a.current && a.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        n && (i || r) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = () => (this.root.updateBlockedByResize = !1);
        e(t, () => {
          (this.root.updateBlockedByResize = !0),
            n && n(),
            (n = ef(r, 250)),
            Ud.hasAnimatedSinceResize &&
              ((Ud.hasAnimatedSinceResize = !1), this.nodes.forEach(qf));
        });
      }
      r && this.root.registerSharedNode(r, this),
        this.options.animate !== !1 &&
          a &&
          (r || i) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let i = this.options.transition || a.getDefaultTransition() || np,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  a.getProps(),
                c = !this.targetLayout || !Tf(this.targetLayout, r) || n,
                l = !t && n;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(e, l);
                let t = { ...Fo(i, `layout`), onPlay: o, onComplete: s };
                (a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t);
              } else
                t || qf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = r;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let e = this.getStack();
      e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Pi(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Xf),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Lf(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        (t.shouldResetTransform = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1);
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      (this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`);
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wf);
        return;
      }
      this.isUpdating || this.nodes.forEach(Gf),
        (this.isUpdating = !1),
        this.nodes.forEach(Kf),
        this.nodes.forEach(zf),
        this.nodes.forEach(Bf),
        this.clearAllSnapshots();
      let e = hs.now();
      (Fi.delta = za(0, 1e3 / 60, e - Fi.timestamp)),
        (Fi.timestamp = e),
        (Fi.isProcessing = !0),
        Ii.update.process(Fi),
        Ii.preRender.process(Fi),
        Ii.render.process(Fi),
        (Fi.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), la.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Uf), this.sharedNodes.forEach(Zf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        M.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      M.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = hd()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox);
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !xf(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        (t || Sd(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        op(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return hd();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(cp))) {
        let { scroll: e } = this.root;
        e && (jd(t.x, e.offset.x), jd(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = hd();
      if ((ff(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && ff(t, e), jd(t.x, i.offset.x), jd(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1) {
      let n = hd();
      ff(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        !t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          Nd(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
          Sd(r.latestValues) && Nd(n, r.latestValues);
      }
      return Sd(this.latestValues) && Nd(n, this.latestValues), n;
    }
    removeTransform(e) {
      let t = hd();
      ff(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!n.instance || !Sd(n.latestValues)) continue;
        xd(n.latestValues) && n.updateSnapshot();
        let r = hd();
        ff(r, n.measurePageBox()),
          yf(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
      }
      return Sd(this.latestValues) && yf(t, this.latestValues), t;
    }
    setTargetDelta(e) {
      (this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 ? !0 : e.crossfade,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Fi.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      (this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty);
      let n = !!this.resumingFrom || this !== t;
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!(!this.layout || !(r || i))) {
        if (
          ((this.resolvedRelativeTargetAt = Fi.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let e = this.getClosestProjectingParent();
          e && e.layout && this.animationProgress !== 1
            ? ((this.relativeParent = e),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = hd()),
              (this.relativeTargetOrigin = hd()),
              ed(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                e.layout.layoutBox
              ),
              ff(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = hd()), (this.targetWithTransforms = hd())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Qu(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ff(this.target, this.layout.layoutBox),
                Dd(this.target, this.targetDelta))
              : ff(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let e = this.getClosestProjectingParent();
            e &&
            !!e.resumingFrom == !!this.resumingFrom &&
            !e.options.layoutScroll &&
            e.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = hd()),
                (this.relativeTargetOrigin = hd()),
                ed(this.relativeTargetOrigin, this.target, e.target),
                ff(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          jf && Af.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          xd(this.parent.latestValues) ||
          Cd(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === Fi.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      ff(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      Ad(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = hd()));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (pf(this.prevProjectionDelta.x, this.projectionDelta.x),
          pf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Xu(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !Df(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Df(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        jf && Af.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      var t;
      if (((t = this.options.visualElement) == null || t.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = pd()),
        (this.projectionDelta = pd()),
        (this.projectionDeltaWithTransform = pd());
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = pd();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t);
      let o = hd(),
        s =
          (n ? n.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(tp));
      this.animationProgress = 0;
      let d;
      (this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        Qf(a.x, e.x, n),
          Qf(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ed(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ep(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && Cf(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= hd()),
            ff(d, this.relativeTarget)),
          s &&
            ((this.animationValues = i), of(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(e) {
      this.notifyListeners(`animationStart`),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        (this.pendingAnimation &&= (Pi(this.pendingAnimation), void 0)),
        (this.pendingAnimation = M.update(() => {
          (Ud.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Xd(0, Pf, {
              ...e,
              onUpdate: (t) => {
                this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
              },
              onComplete: () => {
                e.onComplete && e.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`);
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Pf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          sp(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || hd();
          let t = Ju(this.layout.layoutBox.x);
          (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
          let r = Ju(this.layout.layoutBox.y);
          (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
        }
        ff(t, n),
          Nd(t, i),
          Xu(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
      }
    }
    registerSharedNode(e, t) {
      this.sharedNodes.has(e) || this.sharedNodes.set(e, new Of()),
        this.sharedNodes.get(e).add(t);
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return e ? e.lead === this : !0;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t });
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && If(`z`, e, r, this.animationValues);
      for (let t = 0; t < Mf.length; t++)
        If(`rotate${Mf[t]}`, e, r, this.animationValues),
          If(`skew${Mf[t]}`, e, r, this.animationValues);
      e.render();
      for (let t in r)
        e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]);
      e.scheduleRender();
    }
    getProjectionStyles(e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Nf;
      let t = { visibility: `` },
        n = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (t.opacity = ``),
          (t.pointerEvents = Da(e?.pointerEvents) || ``),
          (t.transform = n ? n(this.latestValues, ``) : `none`),
          t
        );
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        let t = {};
        return (
          this.options.layoutId &&
            ((t.opacity =
              this.latestValues.opacity === void 0
                ? 1
                : this.latestValues.opacity),
            (t.pointerEvents = Da(e?.pointerEvents) || ``)),
          this.hasProjected &&
            !Sd(this.latestValues) &&
            ((t.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)),
          t
        );
      }
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget(),
        (t.transform = kf(
          this.projectionDeltaWithTransform,
          this.treeScale,
          i
        )),
        n && (t.transform = n(i, t.transform));
      let { x: a, y: o } = this.projectionDelta;
      (t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`),
        r.animationValues
          ? (t.opacity =
              r === this
                ? i.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : i.opacityExit)
          : (t.opacity =
              r === this
                ? i.opacity === void 0
                  ? ``
                  : i.opacity
                : i.opacityExit === void 0
                ? 0
                : i.opacityExit);
      for (let e in go) {
        if (i[e] === void 0) continue;
        let { correct: n, applyTo: a } = go[e],
          o = t.transform === `none` ? i[e] : n(i[e], r);
        if (a) {
          let e = a.length;
          for (let n = 0; n < e; n++) t[a[n]] = o;
        } else t[e] = o;
      }
      return (
        this.options.layoutId &&
          (t.pointerEvents = r === this ? Da(e?.pointerEvents) || `` : `none`),
        t
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Wf),
        this.root.sharedNodes.clear();
    }
  };
}
function zf(e) {
  e.updateLayout();
}
function Bf(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    i === `size`
      ? gd((e) => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = Ju(r);
          (r.min = n[e].min), (r.max = r.min + i);
        })
      : sp(i, t.layoutBox, n) &&
        gd((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Ju(n[r]);
          (i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o));
        });
    let o = pd();
    Xu(o, n, t.layoutBox);
    let s = pd();
    a ? Xu(s, e.applyTransform(r, !0), t.measuredBox) : Xu(s, n, t.layoutBox);
    let c = !xf(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = hd();
          ed(o, t.layoutBox, i.layoutBox);
          let s = hd();
          ed(s, n, a.layoutBox),
            Tf(o, s) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s),
              (e.relativeTargetOrigin = o),
              (e.relativeParent = r));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Vf(e) {
  jf && Af.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty));
}
function Hf(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Uf(e) {
  e.clearSnapshot();
}
function Wf(e) {
  e.clearMeasurements();
}
function Gf(e) {
  e.isLayoutDirty = !1;
}
function Kf(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform();
}
function qf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Jf(e) {
  e.resolveTargetDelta();
}
function Yf(e) {
  e.calcProjection();
}
function Xf(e) {
  e.resetSkewAndRotation();
}
function Zf(e) {
  e.removeLeadSnapshot();
}
function Qf(e, t, n) {
  (e.translate = z(t.translate, 0, n)),
    (e.scale = z(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function $f(e, t, n, r) {
  (e.min = z(t.min, n.min, r)), (e.max = z(t.max, n.max, r));
}
function ep(e, t, n, r) {
  $f(e.x, t.x, n.x, r), $f(e.y, t.y, n.y, r);
}
function tp(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var np = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  rp = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ip = rp(`applewebkit/`) && !rp(`chrome/`) ? Math.round : Si;
function ap(e) {
  (e.min = ip(e.min)), (e.max = ip(e.max));
}
function op(e) {
  ap(e.x), ap(e.y);
}
function sp(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !q(Ef(t), Ef(n), 0.2));
}
function cp(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var lp = Rf({
    attachResizeListener: (e, t) => ku(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  up = { current: void 0 },
  dp = Rf({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!up.current) {
        let e = new lp({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (up.current = e);
      }
      return up.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  fp = {
    pan: { Feature: Hd },
    drag: { Feature: Bd, ProjectionNode: dp, MeasureLayout: Jd },
  };
function pp(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && M.postRender(() => i(t, Au(t)));
}
var mp = class extends Tu {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = es(
          e,
          (e) => (pp(this.node, e, `Start`), (e) => pp(this.node, e, `End`))
        ));
    }
    unmount() {}
  },
  hp = class extends Tu {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = B(
        ku(this.node.current, `focus`, () => this.onFocus()),
        ku(this.node.current, `blur`, () => this.onBlur())
      );
    }
    unmount() {}
  };
function gp(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && M.postRender(() => i(t, Au(t)));
}
var _p = class extends Tu {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = us(
          e,
          (e) => (
            gp(this.node, e, `Start`),
            (e, { success: t }) => gp(this.node, e, t ? `End` : `Cancel`)
          ),
          { useGlobalTarget: this.node.props.globalTapTarget }
        ));
    }
    unmount() {}
  },
  vp = new WeakMap(),
  yp = new WeakMap(),
  bp = (e) => {
    let t = vp.get(e.target);
    t && t(e);
  },
  xp = (e) => {
    e.forEach(bp);
  };
function Sp({ root: e, ...t }) {
  let n = e || document;
  yp.has(n) || yp.set(n, {});
  let r = yp.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(xp, { root: e, ...t })), r[i];
}
function Cp(e, t, n) {
  let r = Sp(t);
  return (
    vp.set(e, n),
    r.observe(e),
    () => {
      vp.delete(e), r.unobserve(e);
    }
  );
}
var wp = { some: 0, all: 1 },
  Tp = class extends Tu {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : wp[r],
        };
      return Cp(this.node.current, a, (e) => {
        let { isIntersecting: t } = e;
        if (
          this.isInView === t ||
          ((this.isInView = t), i && !t && this.hasEnteredView)
        )
          return;
        t && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive(`whileInView`, t);
        let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
          a = t ? n : r;
        a && a(e);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(Ep(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function Ep({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Dp = {
    inView: { Feature: Tp },
    tap: { Feature: _p },
    focus: { Feature: hp },
    hover: { Feature: mp },
  },
  Op = { layout: { ProjectionNode: dp, MeasureLayout: Jd } },
  kp = { current: null },
  Ap = { current: !1 };
function jp() {
  if (((Ap.current = !0), yi))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (kp.current = e.matches);
      e.addListener(t), t();
    } else kp.current = !1;
}
var Mp = [...Jc, ac, yc],
  Np = (e) => Mp.find(qc(e)),
  Pp = new WeakMap();
function Fp(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (Ea(i)) e.addValue(r, i);
    else if (Ea(a)) e.addValue(r, ws(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, ws(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var Ip = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  Lp = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: a,
      },
      o = {}
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Hc),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = hs.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), M.render(this.render, !1, !0));
        });
      let { latestValues: s, renderState: c, onUpdate: l } = a;
      (this.onUpdate = l),
        (this.latestValues = s),
        (this.baseTarget = { ...s }),
        (this.initialValues = t.initial ? { ...s } : {}),
        (this.renderState = c),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = $i(t)),
        (this.isVariantNode = ea(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this
      );
      for (let e in d) {
        let t = d[e];
        s[e] !== void 0 && Ea(t) && t.set(s[e], !1);
      }
    }
    mount(e) {
      (this.current = e),
        Pp.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        Ap.current || jp(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === `never`
            ? !1
            : this.reducedMotionConfig === `always`
            ? !0
            : kp.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      Pp.delete(this.current),
        this.projection && this.projection.unmount(),
        Pi(this.notifyUpdate),
        Pi(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let n = Ma.has(e),
        r = t.on(`change`, (t) => {
          (this.latestValues[e] = t),
            this.props.onUpdate && M.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on(`renderRequest`, this.scheduleRender),
        a;
      window.MotionCheckAppearSync &&
        (a = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          r(), i(), a && a(), t.owner && t.stop();
        });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in zi) {
        let t = zi[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : hd();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let t = 0; t < Ip.length; t++) {
        let n = Ip[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      (this.prevMotionValues = Fp(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = ws(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options);
      return (
        n != null &&
          (typeof n == `string` && (Uc(n) || Gs(n))
            ? (n = parseFloat(n))
            : !Np(n) && yc.test(t) && (n = Ec(e, t)),
          this.setBaseTarget(e, Ea(n) ? n.get() : n)),
        Ea(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = Sa(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !Ea(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
        ? void 0
        : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new vs()), this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  },
  Rp = class extends Lp {
    constructor() {
      super(...arguments), (this.KeyframeResolver = Xc);
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Ea(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  };
function zp(e) {
  return window.getComputedStyle(e);
}
var Bp = class extends Rp {
    constructor() {
      super(...arguments), (this.type = `html`), (this.renderInstance = po);
    }
    readValueFromInstance(e, t) {
      if (Ma.has(t)) {
        let e = Tc(t);
        return (e && e.default) || 0;
      } else {
        let n = zp(e),
          r = (Pa(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Pd(e, t);
    }
    build(e, t, n) {
      no(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return L(e, t, n);
    }
  },
  Vp = class extends Rp {
    constructor() {
      super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = hd);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Ma.has(t)) {
        let e = Tc(t);
        return (e && e.default) || 0;
      }
      return (t = mo.has(t) ? t : sa(t)), e.getAttribute(t);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return vo(e, t, n);
    }
    build(e, t, n) {
      co(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      ho(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = fo(e.tagName)), super.mount(e);
    }
  },
  Hp = (e, t) =>
    ba(e) ? new Vp(t) : new Bp(t, { allowProjection: e !== b.Fragment }),
  X = qi(ko({ ...Ou, ...Dp, ...fp, ...Op }, Hp)),
  Up = { some: 0, all: 1 };
function Wp(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = Zo(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function`
                ? o.set(e.target, n)
                : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Up[i] }
    );
  return a.forEach((e) => s.observe(e)), () => s.disconnect();
}
function Gp(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  let [a, o] = (0, b.useState)(!1);
  return (
    (0, b.useEffect)(() => {
      if (!e.current || (i && a)) return;
      let s = () => (o(!0), i ? void 0 : () => o(!1)),
        c = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Wp(e.current, s, c);
    }, [t, e, n, i, r]),
    a
  );
}
var Kp = [
  { label: `Home`, to: `/` },
  { label: `How It Works`, to: `/how-it-works` },
  { label: `About`, to: `/about` },
];
function qp() {
  let [e, t] = (0, b.useState)(!1),
    [n, r] = (0, b.useState)(!1);
  return (
    (0, b.useEffect)(() => {
      let e = () => t(window.scrollY > 10);
      return (
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, j.jsxs)(`nav`, {
      style: { backgroundColor: `#1A1A2E` },
      className: [
        `sticky top-0 z-50 w-full transition-shadow duration-300`,
        e ? `shadow-[0_4px_32px_0_rgba(233,69,96,0.18)]` : `shadow-none`,
      ].join(` `),
      children: [
        (0, j.jsx)(`div`, {
          className: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`,
          children: (0, j.jsxs)(`div`, {
            className: `flex items-center justify-between h-16`,
            children: [
              (0, j.jsxs)(An, {
                to: `/`,
                className: `flex items-center gap-2 select-none group`,
                children: [
                  (0, j.jsx)(`span`, {
                    className: `text-2xl leading-none`,
                    children: `🛡️`,
                  }),
                  (0, j.jsx)(`span`, {
                    className: `text-white font-bold text-xl tracking-tight`,
                    children: `InsureEasy`,
                  }),
                  (0, j.jsx)(`span`, {
                    className: `w-2 h-2 rounded-full -ml-1 mt-0.5 self-start shrink-0 transition-transform duration-300 group-hover:scale-125`,
                    style: { backgroundColor: `#E94560` },
                  }),
                ],
              }),
              (0, j.jsx)(`ul`, {
                className: `hidden md:flex items-center gap-8`,
                children: Kp.map(({ label: e, to: t }) =>
                  (0, j.jsx)(
                    `li`,
                    {
                      children: (0, j.jsx)(An, {
                        to: t,
                        className: `relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200\r
                             after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#E94560]\r
                             after:transition-all after:duration-300 hover:after:w-full`,
                        children: e,
                      }),
                    },
                    t
                  )
                ),
              }),
              (0, j.jsx)(`div`, {
                className: `hidden md:block`,
                children: (0, j.jsxs)(An, {
                  to: `/upload`,
                  className: `inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold text-white\r
                         transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95`,
                  style: { backgroundColor: `#E94560` },
                  children: [
                    `Try Free`,
                    (0, j.jsx)(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      viewBox: `0 0 20 20`,
                      fill: `currentColor`,
                      className: `w-4 h-4`,
                      children: (0, j.jsx)(`path`, {
                        fillRule: `evenodd`,
                        d: `M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z`,
                        clipRule: `evenodd`,
                      }),
                    }),
                  ],
                }),
              }),
              (0, j.jsxs)(`button`, {
                className: `md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md\r
                       text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E94560]`,
                "aria-label": `Toggle menu`,
                onClick: () => r((e) => !e),
                children: [
                  (0, j.jsx)(`span`, {
                    className: [
                      `block w-5 h-0.5 bg-current transition-all duration-300 origin-center`,
                      n ? `translate-y-2 rotate-45` : ``,
                    ].join(` `),
                  }),
                  (0, j.jsx)(`span`, {
                    className: [
                      `block w-5 h-0.5 bg-current transition-all duration-300`,
                      n ? `opacity-0 scale-x-0` : ``,
                    ].join(` `),
                  }),
                  (0, j.jsx)(`span`, {
                    className: [
                      `block w-5 h-0.5 bg-current transition-all duration-300 origin-center`,
                      n ? `-translate-y-2 -rotate-45` : ``,
                    ].join(` `),
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, j.jsx)(`div`, {
          className: [
            `md:hidden overflow-hidden transition-all duration-300 ease-in-out`,
            n ? `max-h-64 opacity-100` : `max-h-0 opacity-0`,
          ].join(` `),
          style: { backgroundColor: `#16162a` },
          children: (0, j.jsxs)(`ul`, {
            className: `flex flex-col px-4 pb-4 pt-2 gap-1`,
            children: [
              Kp.map(({ label: e, to: t }) =>
                (0, j.jsx)(
                  `li`,
                  {
                    children: (0, j.jsx)(An, {
                      to: t,
                      onClick: () => r(!1),
                      className: `block px-3 py-2.5 rounded-md text-sm font-medium text-gray-300 hover:text-white\r
                           hover:bg-white/5 transition-colors duration-150`,
                      children: e,
                    }),
                  },
                  t
                )
              ),
              (0, j.jsx)(`li`, {
                className: `mt-2`,
                children: (0, j.jsxs)(An, {
                  to: `/upload`,
                  onClick: () => r(!1),
                  className: `flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-lg\r
                         text-sm font-semibold text-white transition-all duration-200 hover:brightness-110`,
                  style: { backgroundColor: `#E94560` },
                  children: [
                    `Try Free`,
                    (0, j.jsx)(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      viewBox: `0 0 20 20`,
                      fill: `currentColor`,
                      className: `w-4 h-4`,
                      children: (0, j.jsx)(`path`, {
                        fillRule: `evenodd`,
                        d: `M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z`,
                        clipRule: `evenodd`,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
var Jp = `#1A1A2E`,
  Yp = `#E94560`,
  Xp = {
    Product: [
      { label: `How It Works`, to: `/how-it-works` },
      { label: `Upload Policy`, to: `/upload` },
      { label: `Coverage Visualizer`, to: `/upload` },
      { label: `Risk Analyzer`, to: `/upload` },
    ],
    Company: [
      { label: `About Us`, to: `/about` },
      { label: `Blog`, to: `/about` },
      { label: `Hackathon`, to: `/about` },
    ],
    Legal: [
      { label: `Privacy Policy`, to: `/privacy` },
      { label: `Terms of Use`, to: `/terms` },
      { label: `Cookie Policy`, to: `/cookies` },
    ],
  },
  Zp = [
    {
      label: `GitHub`,
      href: `https://github.com`,
      icon: (0, j.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        className: `w-4 h-4`,
        children: (0, j.jsx)(`path`, {
          d: `M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z`,
        }),
      }),
    },
    {
      label: `Twitter`,
      href: `https://twitter.com`,
      icon: (0, j.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        className: `w-4 h-4`,
        children: (0, j.jsx)(`path`, {
          d: `M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`,
        }),
      }),
    },
    {
      label: `LinkedIn`,
      href: `https://linkedin.com`,
      icon: (0, j.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        className: `w-4 h-4`,
        children: (0, j.jsx)(`path`, {
          d: `M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`,
        }),
      }),
    },
  ];
function Qp() {
  let e = new Date().getFullYear();
  return (0, j.jsxs)(`footer`, {
    style: { background: Jp },
    children: [
      (0, j.jsxs)(`div`, {
        className: `max-w-6xl mx-auto px-6 pt-14 pb-10`,
        children: [
          (0, j.jsxs)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10`,
            children: [
              (0, j.jsxs)(`div`, {
                className: `lg:col-span-2 flex flex-col gap-5`,
                children: [
                  (0, j.jsxs)(An, {
                    to: `/`,
                    className: `flex items-center gap-2 w-fit group`,
                    children: [
                      (0, j.jsx)(`span`, {
                        className: `text-2xl`,
                        children: `🛡️`,
                      }),
                      (0, j.jsx)(`span`, {
                        className: `text-white font-black text-xl tracking-tight`,
                        children: `InsureEasy`,
                      }),
                      (0, j.jsx)(`span`, {
                        className: `w-2 h-2 rounded-full -ml-1 mt-0.5 self-start shrink-0\r
                               group-hover:scale-125 transition-transform duration-200`,
                        style: { background: Yp },
                      }),
                    ],
                  }),
                  (0, j.jsx)(`p`, {
                    className: `text-sm text-gray-400 leading-relaxed max-w-xs`,
                    children: `AI-powered insurance policy analysis. Upload any policy and get plain-English summaries, coverage maps, and instant answers in under 60 seconds.`,
                  }),
                  (0, j.jsx)(`div`, {
                    className: `flex items-center gap-3`,
                    children: Zp.map(({ label: e, href: t, icon: n }) =>
                      (0, j.jsx)(
                        `a`,
                        {
                          href: t,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          "aria-label": e,
                          className: `w-8 h-8 rounded-lg flex items-center justify-center text-gray-400\r
                             hover:text-white transition-all duration-150`,
                          style: {
                            background: `rgba(255,255,255,0.06)`,
                            border: `1px solid rgba(255,255,255,0.08)`,
                          },
                          onMouseEnter: (e) =>
                            (e.currentTarget.style.borderColor = `rgba(233,69,96,0.5)`),
                          onMouseLeave: (e) =>
                            (e.currentTarget.style.borderColor = `rgba(255,255,255,0.08)`),
                          children: n,
                        },
                        e
                      )
                    ),
                  }),
                  (0, j.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-xs text-gray-400`,
                    children: [
                      (0, j.jsx)(`span`, {
                        className: `w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse`,
                      }),
                      `All systems operational`,
                    ],
                  }),
                ],
              }),
              Object.entries(Xp).map(([e, t]) =>
                (0, j.jsxs)(
                  `div`,
                  {
                    className: `flex flex-col gap-4`,
                    children: [
                      (0, j.jsx)(`h4`, {
                        className: `text-xs font-extrabold uppercase tracking-[0.18em] text-gray-500`,
                        children: e,
                      }),
                      (0, j.jsx)(`ul`, {
                        className: `flex flex-col gap-2.5`,
                        children: t.map(({ label: e, to: t }) =>
                          (0, j.jsx)(
                            `li`,
                            {
                              children: (0, j.jsx)(An, {
                                to: t,
                                className: `text-sm text-gray-400 hover:text-white transition-colors duration-150\r
                                 hover:translate-x-0.5 inline-block`,
                                children: e,
                              }),
                            },
                            e
                          )
                        ),
                      }),
                    ],
                  },
                  e
                )
              ),
            ],
          }),
          (0, j.jsxs)(`div`, {
            className: `mt-12 flex flex-col sm:flex-row items-center justify-between gap-4\r
                        px-6 py-5 rounded-2xl`,
            style: {
              background: `rgba(233,69,96,0.08)`,
              border: `1px solid rgba(233,69,96,0.18)`,
            },
            children: [
              (0, j.jsxs)(`div`, {
                children: [
                  (0, j.jsx)(`p`, {
                    className: `text-white font-bold text-sm`,
                    children: `Ready to decode your policy?`,
                  }),
                  (0, j.jsx)(`p`, {
                    className: `text-gray-400 text-xs mt-0.5`,
                    children: `Free to try. No credit card required.`,
                  }),
                ],
              }),
              (0, j.jsx)(An, {
                to: `/upload`,
                className: `shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm\r
                       font-bold text-white transition-all duration-150 hover:brightness-110\r
                       hover:scale-105 active:scale-95`,
                style: {
                  background: `linear-gradient(135deg, ${Yp}, #c0304f)`,
                },
                children: `Upload Your Policy →`,
              }),
            ],
          }),
        ],
      }),
      (0, j.jsx)(`div`, {
        className: `border-t max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row\r
                      items-center justify-between gap-3`,
        style: { borderColor: `rgba(255,255,255,0.07)` },
        children: (0, j.jsxs)(`p`, {
          className: `text-xs text-gray-500`,
          children: [
            `© `,
            e,
            ` InsureEasy. Built for the Fintech Hackathon. All rights reserved.`,
          ],
        }),
      }),
    ],
  });
}
var $p = `#E94560`,
  em = `#1A1A2E`,
  tm = `#0F3460`,
  nm = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-7 h-7`,
      children: [
        (0, j.jsx)(`path`, {
          d: `M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`,
        }),
        (0, j.jsx)(`polyline`, { points: `9 12 11 14 15 10` }),
      ],
    }),
  rm = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-7 h-7`,
      children: [
        (0, j.jsx)(`path`, {
          d: `M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z`,
        }),
        (0, j.jsx)(`line`, { x1: `12`, y1: `9`, x2: `12`, y2: `13` }),
        (0, j.jsx)(`line`, { x1: `12`, y1: `17`, x2: `12.01`, y2: `17` }),
      ],
    }),
  im = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-7 h-7`,
      children: [
        (0, j.jsx)(`path`, {
          d: `M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z`,
        }),
        (0, j.jsx)(`line`, { x1: `9`, y1: `10`, x2: `15`, y2: `10` }),
        (0, j.jsx)(`line`, { x1: `9`, y1: `14`, x2: `12`, y2: `14` }),
      ],
    }),
  am = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-5 h-5`,
      children: [
        (0, j.jsx)(`path`, { d: `M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4` }),
        (0, j.jsx)(`polyline`, { points: `17 8 12 3 7 8` }),
        (0, j.jsx)(`line`, { x1: `12`, y1: `3`, x2: `12`, y2: `15` }),
      ],
    }),
  om = () =>
    (0, j.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-4 h-4`,
      children: (0, j.jsx)(`polygon`, { points: `5 3 19 12 5 21 5 3` }),
    });
function sm({ children: e, delay: t = 0, className: n = `` }) {
  let r = (0, b.useRef)(null),
    i = Gp(r, { once: !0, margin: `-80px` });
  return (0, j.jsx)(X.div, {
    ref: r,
    className: n,
    initial: { opacity: 0, y: 36 },
    animate: i ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay: t, ease: [0.22, 1, 0.36, 1] },
    children: e,
  });
}
function cm() {
  return (0, j.jsxs)(X.div, {
    animate: { y: [0, -14, 0] },
    transition: { duration: 4, repeat: 1 / 0, ease: `easeInOut` },
    className: `relative mx-auto w-72 rounded-2xl overflow-hidden`,
    style: {
      background: `rgba(255,255,255,0.06)`,
      backdropFilter: `blur(18px)`,
      border: `1px solid rgba(255,255,255,0.14)`,
      boxShadow: `0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(233,69,96,0.18)`,
    },
    children: [
      (0, j.jsxs)(`div`, {
        className: `px-5 pt-5 pb-3 flex items-center justify-between`,
        children: [
          (0, j.jsxs)(`div`, {
            children: [
              (0, j.jsx)(`p`, {
                className: `text-xs font-semibold uppercase tracking-widest text-[#E94560]`,
                children: `Live Stats`,
              }),
              (0, j.jsx)(`p`, {
                className: `text-3xl font-black text-white mt-0.5`,
                children: `10,000+`,
              }),
              (0, j.jsx)(`p`, {
                className: `text-sm text-gray-400 font-medium`,
                children: `Policies Analyzed`,
              }),
            ],
          }),
          (0, j.jsx)(`div`, {
            className: `w-12 h-12 rounded-xl flex items-center justify-center`,
            style: {
              background: `rgba(233,69,96,0.15)`,
              border: `1px solid rgba(233,69,96,0.3)`,
            },
            children: (0, j.jsx)(`span`, {
              className: `text-2xl`,
              children: `🛡️`,
            }),
          }),
        ],
      }),
      (0, j.jsxs)(`div`, {
        className: `px-5 pb-5`,
        children: [
          (0, j.jsx)(`div`, {
            className: `flex items-end gap-1.5 h-12 mt-2`,
            children: [72, 88, 55, 94, 67, 81].map((e, t) =>
              (0, j.jsx)(
                X.div,
                {
                  className: `flex-1 rounded-sm`,
                  style: {
                    originY: 1,
                    height: `${e}%`,
                    backgroundColor: t === 3 ? $p : `rgba(255,255,255,0.2)`,
                  },
                  initial: { scaleY: 0 },
                  animate: { scaleY: 1 },
                  transition: {
                    delay: 0.6 + t * 0.08,
                    duration: 0.5,
                    ease: `backOut`,
                  },
                },
                t
              )
            ),
          }),
          (0, j.jsxs)(`div`, {
            className: `flex justify-between mt-2.5`,
            children: [
              (0, j.jsx)(`span`, {
                className: `text-xs text-gray-500`,
                children: `Jan`,
              }),
              (0, j.jsx)(`span`, {
                className: `text-xs text-gray-500`,
                children: `Jun`,
              }),
            ],
          }),
        ],
      }),
      (0, j.jsx)(`div`, {
        className: `absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl pointer-events-none`,
        style: { background: `rgba(233,69,96,0.3)` },
      }),
    ],
  });
}
var lm = [
  {
    Icon: nm,
    title: `Coverage Visualizer`,
    desc: `See exactly what you're covered for at a glance — mapped visually so nothing gets buried in legalese.`,
    tag: `Protection`,
    color: `#3B82F6`,
  },
  {
    Icon: rm,
    title: `Exclusion Highlighter`,
    desc: `Instantly surface every clause that limits or voids your coverage, before a claim denial surprises you.`,
    tag: `Risk`,
    color: `#F59E0B`,
  },
  {
    Icon: im,
    title: `Scenario Simulator`,
    desc: `Ask "What if I have a fender bender at work?" and get a real answer drawn from your actual policy.`,
    tag: `Q&A`,
    color: $p,
  },
];
function um({ Icon: e, title: t, desc: n, tag: r, color: i, index: a }) {
  return (0, j.jsx)(sm, {
    delay: a * 0.12,
    children: (0, j.jsxs)(X.div, {
      whileHover: { y: -8, boxShadow: `0 24px 48px rgba(0,0,0,0.12)` },
      transition: { type: `spring`, stiffness: 320, damping: 22 },
      className: `relative bg-white rounded-2xl p-7 h-full flex flex-col gap-4`,
      style: {
        boxShadow: `0 4px 24px rgba(0,0,0,0.07)`,
        border: `1px solid rgba(0,0,0,0.05)`,
      },
      children: [
        (0, j.jsx)(`span`, {
          className: `self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full`,
          style: { background: `${i}18`, color: i },
          children: r,
        }),
        (0, j.jsx)(`div`, {
          className: `w-14 h-14 rounded-2xl flex items-center justify-center`,
          style: { background: `${i}14`, color: i },
          children: (0, j.jsx)(e, {}),
        }),
        (0, j.jsx)(`h3`, {
          className: `text-lg font-extrabold text-gray-900`,
          children: t,
        }),
        (0, j.jsx)(`p`, {
          className: `text-sm text-gray-500 leading-relaxed flex-1`,
          children: n,
        }),
        (0, j.jsxs)(X.span, {
          className: `text-sm font-semibold flex items-center gap-1`,
          style: { color: i },
          whileHover: { x: 4 },
          children: [
            `Learn more`,
            (0, j.jsx)(`svg`, {
              viewBox: `0 0 16 16`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: 2,
              className: `w-3.5 h-3.5`,
              children: (0, j.jsx)(`path`, {
                d: `M3 8h10M9 4l4 4-4 4`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
              }),
            }),
          ],
        }),
        (0, j.jsx)(`div`, {
          className: `absolute top-0 right-0 w-20 h-20 rounded-bl-[80px] rounded-tr-2xl opacity-[0.04]`,
          style: { background: i },
        }),
      ],
    }),
  });
}
var dm = [
  {
    num: `01`,
    title: `Upload Your PDF`,
    desc: `Drag & drop or browse to upload any insurance policy document — health, auto, home, or life.`,
    emoji: `📄`,
  },
  {
    num: `02`,
    title: `AI Analyzes It`,
    desc: `Our engine reads every clause, maps your coverage limits, and flags hidden exclusions in seconds.`,
    emoji: `🤖`,
  },
  {
    num: `03`,
    title: `Get Clear Insights`,
    desc: `Receive plain-English summaries, visual coverage maps, and your own AI policy advisor.`,
    emoji: `✨`,
  },
];
function fm({ num: e, title: t, desc: n, emoji: r, index: i, total: a }) {
  return (0, j.jsx)(sm, {
    delay: i * 0.15,
    className: `flex-1`,
    children: (0, j.jsxs)(`div`, {
      className: `relative flex flex-col items-center text-center`,
      children: [
        i < a - 1 &&
          (0, j.jsx)(`div`, {
            className: `hidden md:block absolute top-9 left-1/2 w-full h-px`,
            style: {
              background: `linear-gradient(90deg, rgba(233,69,96,0.5) 0%, rgba(233,69,96,0.1) 100%)`,
              zIndex: 0,
            },
          }),
        (0, j.jsx)(`div`, {
          className: `relative z-10 w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5 text-2xl font-black text-white`,
          style: {
            background: `linear-gradient(135deg, ${$p}, #b02040)`,
            boxShadow: `0 8px 28px rgba(233,69,96,0.4)`,
          },
          children: r,
        }),
        (0, j.jsx)(`span`, {
          className: `text-xs font-extrabold tracking-[0.2em] uppercase mb-2`,
          style: { color: $p },
          children: e,
        }),
        (0, j.jsx)(`h4`, {
          className: `text-base font-extrabold text-gray-900 mb-2`,
          children: t,
        }),
        (0, j.jsx)(`p`, {
          className: `text-sm text-gray-500 leading-relaxed max-w-[200px]`,
          children: n,
        }),
      ],
    }),
  });
}
function pm() {
  let e = ft();
  return (0, j.jsxs)(`main`, {
    className: `min-h-screen bg-white font-sans overflow-x-hidden`,
    style: { fontFamily: `'DM Sans', 'Nunito', sans-serif` },
    children: [
      (0, j.jsx)(`style`, {
        children: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,800;0,9..40,900;1,9..40,400&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap');
        .hero-heading { font-family: 'Fraunces', serif; }
      `,
      }),
      (0, j.jsxs)(`section`, {
        className: `relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden`,
        style: {
          background: `linear-gradient(135deg, ${em} 0%, ${tm} 60%, #16213E 100%)`,
        },
        children: [
          (0, j.jsx)(`div`, {
            className: `absolute inset-0 pointer-events-none`,
            style: {
              backgroundImage: `
              linear-gradient(rgba(233,69,96,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(233,69,96,0.04) 1px, transparent 1px)
            `,
              backgroundSize: `48px 48px`,
            },
          }),
          (0, j.jsx)(`div`, {
            className: `absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none`,
            style: { background: `rgba(233,69,96,0.18)` },
          }),
          (0, j.jsx)(`div`, {
            className: `absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none`,
            style: { background: `rgba(15,52,96,0.6)` },
          }),
          (0, j.jsx)(`div`, {
            className: `relative z-10 max-w-6xl mx-auto px-6 w-full`,
            children: (0, j.jsxs)(`div`, {
              className: `grid md:grid-cols-2 gap-12 items-center`,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `flex flex-col gap-7`,
                  children: [
                    (0, j.jsxs)(X.div, {
                      initial: { opacity: 0, y: -16 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5 },
                      className: `self-start flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest`,
                      style: {
                        background: `rgba(233,69,96,0.15)`,
                        border: `1px solid rgba(233,69,96,0.35)`,
                        color: $p,
                      },
                      children: [
                        (0, j.jsx)(`span`, {
                          className: `w-1.5 h-1.5 rounded-full animate-pulse`,
                          style: { background: $p },
                        }),
                        `AI-Powered Policy Analysis`,
                      ],
                    }),
                    (0, j.jsxs)(X.h1, {
                      className: `hero-heading text-5xl md:text-6xl font-black text-white leading-[1.05]`,
                      initial: { opacity: 0, y: 24 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.7, delay: 0.1 },
                      children: [
                        `Understand Your`,
                        ` `,
                        (0, j.jsxs)(`span`, {
                          className: `relative inline-block`,
                          children: [
                            `Insurance Policy`,
                            (0, j.jsx)(X.span, {
                              className: `absolute bottom-1 left-0 w-full h-1 rounded-full`,
                              style: {
                                background: `linear-gradient(90deg, ${$p}, transparent)`,
                              },
                              initial: { scaleX: 0 },
                              animate: { scaleX: 1 },
                              transition: {
                                delay: 0.9,
                                duration: 0.6,
                                ease: `easeOut`,
                              },
                            }),
                          ],
                        }),
                        ` `,
                        `in 60 Seconds`,
                      ],
                    }),
                    (0, j.jsx)(X.p, {
                      className: `text-lg text-gray-300 leading-relaxed max-w-lg`,
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: 0.25 },
                      children: `Upload your policy PDF. Get plain-English summaries, coverage visualizations, and instant answers to your questions.`,
                    }),
                    (0, j.jsxs)(X.div, {
                      className: `flex flex-wrap gap-4`,
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: 0.4 },
                      children: [
                        (0, j.jsxs)(X.button, {
                          whileHover: {
                            scale: 1.04,
                            boxShadow: `0 12px 32px rgba(233,69,96,0.45)`,
                          },
                          whileTap: { scale: 0.97 },
                          onClick: () => e(`/upload`),
                          className: `flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm`,
                          style: {
                            background: `linear-gradient(135deg, ${$p}, #c0304f)`,
                          },
                          children: [(0, j.jsx)(am, {}), `Upload Your Policy`],
                        }),
                        (0, j.jsxs)(X.button, {
                          whileHover: {
                            scale: 1.04,
                            background: `rgba(255,255,255,0.1)`,
                          },
                          whileTap: { scale: 0.97 },
                          className: `flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm border border-white/25 backdrop-blur-sm transition-colors duration-200`,
                          children: [(0, j.jsx)(om, {}), `Watch Demo`],
                        }),
                      ],
                    }),
                    (0, j.jsxs)(X.div, {
                      className: `flex items-center gap-3 mt-2`,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.65 },
                      children: [
                        (0, j.jsx)(`div`, {
                          className: `flex -space-x-2`,
                          children: [
                            `#E94560`,
                            `#3B82F6`,
                            `#F59E0B`,
                            `#10B981`,
                          ].map((e, t) =>
                            (0, j.jsx)(
                              `div`,
                              {
                                className: `w-8 h-8 rounded-full border-2 border-[#1A1A2E] flex items-center justify-center text-white text-xs font-bold`,
                                style: { background: e },
                                children: [`J`, `M`, `A`, `K`][t],
                              },
                              t
                            )
                          ),
                        }),
                        (0, j.jsxs)(`p`, {
                          className: `text-sm text-gray-400`,
                          children: [
                            (0, j.jsx)(`span`, {
                              className: `text-white font-semibold`,
                              children: `2,400+`,
                            }),
                            ` `,
                            `people protected this month`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, j.jsx)(X.div, {
                  initial: { opacity: 0, x: 40 },
                  animate: { opacity: 1, x: 0 },
                  transition: {
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  children: (0, j.jsx)(cm, {}),
                }),
              ],
            }),
          }),
          (0, j.jsx)(`div`, {
            className: `absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none`,
            children: (0, j.jsx)(`svg`, {
              viewBox: `0 0 1440 64`,
              fill: `none`,
              xmlns: `http://www.w3.org/2000/svg`,
              className: `w-full`,
              children: (0, j.jsx)(`path`, {
                d: `M0 64L1440 64L1440 32C1200 64 960 0 720 32C480 64 240 0 0 32L0 64Z`,
                fill: `white`,
              }),
            }),
          }),
        ],
      }),
      (0, j.jsx)(`section`, {
        className: `py-24 bg-white`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-6xl mx-auto px-6`,
          children: [
            (0, j.jsxs)(sm, {
              className: `text-center mb-14`,
              children: [
                (0, j.jsx)(`span`, {
                  className: `text-xs font-extrabold tracking-[0.25em] uppercase`,
                  style: { color: $p },
                  children: `Features`,
                }),
                (0, j.jsxs)(`h2`, {
                  className: `hero-heading text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight`,
                  children: [
                    `Your policy, finally `,
                    (0, j.jsx)(`span`, {
                      style: { color: $p },
                      children: `decoded.`,
                    }),
                  ],
                }),
                (0, j.jsx)(`p`, {
                  className: `mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed`,
                  children: `Three powerful tools work together to give you complete clarity over your coverage — no law degree required.`,
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `grid md:grid-cols-3 gap-6`,
              children: lm.map((e, t) =>
                (0, j.jsx)(um, { ...e, index: t }, e.title)
              ),
            }),
          ],
        }),
      }),
      (0, j.jsxs)(`section`, {
        className: `py-24 relative overflow-hidden`,
        style: {
          background: `linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)`,
        },
        children: [
          (0, j.jsx)(`div`, {
            className: `absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none`,
            style: {
              background: `radial-gradient(circle, rgba(233,69,96,0.06) 0%, transparent 70%)`,
            },
          }),
          (0, j.jsxs)(`div`, {
            className: `max-w-6xl mx-auto px-6 relative z-10`,
            children: [
              (0, j.jsxs)(sm, {
                className: `text-center mb-16`,
                children: [
                  (0, j.jsx)(`span`, {
                    className: `text-xs font-extrabold tracking-[0.25em] uppercase`,
                    style: { color: $p },
                    children: `How It Works`,
                  }),
                  (0, j.jsxs)(`h2`, {
                    className: `hero-heading text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight`,
                    children: [
                      `Three steps to `,
                      (0, j.jsx)(`span`, {
                        style: { color: $p },
                        children: `clarity.`,
                      }),
                    ],
                  }),
                  (0, j.jsx)(`p`, {
                    className: `mt-4 text-gray-500 max-w-md mx-auto text-base leading-relaxed`,
                    children: `From PDF upload to actionable insights in under a minute.`,
                  }),
                ],
              }),
              (0, j.jsx)(`div`, {
                className: `relative flex flex-col md:flex-row gap-12 md:gap-6`,
                children: dm.map((e, t) =>
                  (0, j.jsx)(fm, { ...e, index: t, total: dm.length }, e.num)
                ),
              }),
              (0, j.jsx)(sm, {
                delay: 0.2,
                className: `mt-20`,
                children: (0, j.jsxs)(X.div, {
                  whileHover: { scale: 1.01 },
                  className: `relative rounded-3xl overflow-hidden px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6`,
                  style: {
                    background: `linear-gradient(120deg, ${em} 0%, ${tm} 100%)`,
                  },
                  children: [
                    (0, j.jsx)(`div`, {
                      className: `absolute inset-0 pointer-events-none`,
                      style: {
                        backgroundImage: `radial-gradient(circle at 80% 50%, rgba(233,69,96,0.25) 0%, transparent 55%)`,
                      },
                    }),
                    (0, j.jsxs)(`div`, {
                      className: `relative z-10`,
                      children: [
                        (0, j.jsx)(`h3`, {
                          className: `hero-heading text-3xl font-black text-white`,
                          children: `Ready to understand your coverage?`,
                        }),
                        (0, j.jsx)(`p`, {
                          className: `text-gray-400 mt-2 text-sm max-w-md leading-relaxed`,
                          children: `Join thousands who've already stopped guessing and started knowing.`,
                        }),
                      ],
                    }),
                    (0, j.jsxs)(X.button, {
                      whileHover: {
                        scale: 1.06,
                        boxShadow: `0 12px 32px rgba(233,69,96,0.5)`,
                      },
                      whileTap: { scale: 0.97 },
                      onClick: () => e(`/upload`),
                      className: `relative z-10 shrink-0 flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm whitespace-nowrap`,
                      style: {
                        background: `linear-gradient(135deg, ${$p}, #c0304f)`,
                      },
                      children: [
                        (0, j.jsx)(am, {}),
                        `Upload Your Policy — Free`,
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var mm = s((e, t) => {
    t.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
  }),
  hm = s((e, t) => {
    var n = mm();
    function r() {}
    function i() {}
    (i.resetWarningCache = r),
      (t.exports = function () {
        function e(e, t, r, i, a, o) {
          if (o !== n) {
            var s = Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((s.name = `Invariant Violation`), s);
          }
        }
        e.isRequired = e;
        function t() {
          return e;
        }
        var a = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: r,
        };
        return (a.PropTypes = a), a;
      });
  }),
  gm = s((e, t) => {
    t.exports = hm()();
  });
function _m(e, t, n, r) {
  function i(e) {
    return e instanceof n
      ? e
      : new n(function (t) {
          t(e);
        });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
var vm = new Map([
  [`1km`, `application/vnd.1000minds.decision-model+xml`],
  [`3dml`, `text/vnd.in3d.3dml`],
  [`3ds`, `image/x-3ds`],
  [`3g2`, `video/3gpp2`],
  [`3gp`, `video/3gp`],
  [`3gpp`, `video/3gpp`],
  [`3mf`, `model/3mf`],
  [`7z`, `application/x-7z-compressed`],
  [`7zip`, `application/x-7z-compressed`],
  [`123`, `application/vnd.lotus-1-2-3`],
  [`aab`, `application/x-authorware-bin`],
  [`aac`, `audio/x-acc`],
  [`aam`, `application/x-authorware-map`],
  [`aas`, `application/x-authorware-seg`],
  [`abw`, `application/x-abiword`],
  [`ac`, `application/vnd.nokia.n-gage.ac+xml`],
  [`ac3`, `audio/ac3`],
  [`acc`, `application/vnd.americandynamics.acc`],
  [`ace`, `application/x-ace-compressed`],
  [`acu`, `application/vnd.acucobol`],
  [`acutc`, `application/vnd.acucorp`],
  [`adp`, `audio/adpcm`],
  [`aep`, `application/vnd.audiograph`],
  [`afm`, `application/x-font-type1`],
  [`afp`, `application/vnd.ibm.modcap`],
  [`ahead`, `application/vnd.ahead.space`],
  [`ai`, `application/pdf`],
  [`aif`, `audio/x-aiff`],
  [`aifc`, `audio/x-aiff`],
  [`aiff`, `audio/x-aiff`],
  [`air`, `application/vnd.adobe.air-application-installer-package+zip`],
  [`ait`, `application/vnd.dvb.ait`],
  [`ami`, `application/vnd.amiga.ami`],
  [`amr`, `audio/amr`],
  [`apk`, `application/vnd.android.package-archive`],
  [`apng`, `image/apng`],
  [`appcache`, `text/cache-manifest`],
  [`application`, `application/x-ms-application`],
  [`apr`, `application/vnd.lotus-approach`],
  [`arc`, `application/x-freearc`],
  [`arj`, `application/x-arj`],
  [`asc`, `application/pgp-signature`],
  [`asf`, `video/x-ms-asf`],
  [`asm`, `text/x-asm`],
  [`aso`, `application/vnd.accpac.simply.aso`],
  [`asx`, `video/x-ms-asf`],
  [`atc`, `application/vnd.acucorp`],
  [`atom`, `application/atom+xml`],
  [`atomcat`, `application/atomcat+xml`],
  [`atomdeleted`, `application/atomdeleted+xml`],
  [`atomsvc`, `application/atomsvc+xml`],
  [`atx`, `application/vnd.antix.game-component`],
  [`au`, `audio/x-au`],
  [`avi`, `video/x-msvideo`],
  [`avif`, `image/avif`],
  [`aw`, `application/applixware`],
  [`azf`, `application/vnd.airzip.filesecure.azf`],
  [`azs`, `application/vnd.airzip.filesecure.azs`],
  [`azv`, `image/vnd.airzip.accelerator.azv`],
  [`azw`, `application/vnd.amazon.ebook`],
  [`b16`, `image/vnd.pco.b16`],
  [`bat`, `application/x-msdownload`],
  [`bcpio`, `application/x-bcpio`],
  [`bdf`, `application/x-font-bdf`],
  [`bdm`, `application/vnd.syncml.dm+wbxml`],
  [`bdoc`, `application/x-bdoc`],
  [`bed`, `application/vnd.realvnc.bed`],
  [`bh2`, `application/vnd.fujitsu.oasysprs`],
  [`bin`, `application/octet-stream`],
  [`blb`, `application/x-blorb`],
  [`blorb`, `application/x-blorb`],
  [`bmi`, `application/vnd.bmi`],
  [`bmml`, `application/vnd.balsamiq.bmml+xml`],
  [`bmp`, `image/bmp`],
  [`book`, `application/vnd.framemaker`],
  [`box`, `application/vnd.previewsystems.box`],
  [`boz`, `application/x-bzip2`],
  [`bpk`, `application/octet-stream`],
  [`bpmn`, `application/octet-stream`],
  [`bsp`, `model/vnd.valve.source.compiled-map`],
  [`btif`, `image/prs.btif`],
  [`buffer`, `application/octet-stream`],
  [`bz`, `application/x-bzip`],
  [`bz2`, `application/x-bzip2`],
  [`c`, `text/x-c`],
  [`c4d`, `application/vnd.clonk.c4group`],
  [`c4f`, `application/vnd.clonk.c4group`],
  [`c4g`, `application/vnd.clonk.c4group`],
  [`c4p`, `application/vnd.clonk.c4group`],
  [`c4u`, `application/vnd.clonk.c4group`],
  [`c11amc`, `application/vnd.cluetrust.cartomobile-config`],
  [`c11amz`, `application/vnd.cluetrust.cartomobile-config-pkg`],
  [`cab`, `application/vnd.ms-cab-compressed`],
  [`caf`, `audio/x-caf`],
  [`cap`, `application/vnd.tcpdump.pcap`],
  [`car`, `application/vnd.curl.car`],
  [`cat`, `application/vnd.ms-pki.seccat`],
  [`cb7`, `application/x-cbr`],
  [`cba`, `application/x-cbr`],
  [`cbr`, `application/x-cbr`],
  [`cbt`, `application/x-cbr`],
  [`cbz`, `application/x-cbr`],
  [`cc`, `text/x-c`],
  [`cco`, `application/x-cocoa`],
  [`cct`, `application/x-director`],
  [`ccxml`, `application/ccxml+xml`],
  [`cdbcmsg`, `application/vnd.contact.cmsg`],
  [`cda`, `application/x-cdf`],
  [`cdf`, `application/x-netcdf`],
  [`cdfx`, `application/cdfx+xml`],
  [`cdkey`, `application/vnd.mediastation.cdkey`],
  [`cdmia`, `application/cdmi-capability`],
  [`cdmic`, `application/cdmi-container`],
  [`cdmid`, `application/cdmi-domain`],
  [`cdmio`, `application/cdmi-object`],
  [`cdmiq`, `application/cdmi-queue`],
  [`cdr`, `application/cdr`],
  [`cdx`, `chemical/x-cdx`],
  [`cdxml`, `application/vnd.chemdraw+xml`],
  [`cdy`, `application/vnd.cinderella`],
  [`cer`, `application/pkix-cert`],
  [`cfs`, `application/x-cfs-compressed`],
  [`cgm`, `image/cgm`],
  [`chat`, `application/x-chat`],
  [`chm`, `application/vnd.ms-htmlhelp`],
  [`chrt`, `application/vnd.kde.kchart`],
  [`cif`, `chemical/x-cif`],
  [`cii`, `application/vnd.anser-web-certificate-issue-initiation`],
  [`cil`, `application/vnd.ms-artgalry`],
  [`cjs`, `application/node`],
  [`cla`, `application/vnd.claymore`],
  [`class`, `application/octet-stream`],
  [`clkk`, `application/vnd.crick.clicker.keyboard`],
  [`clkp`, `application/vnd.crick.clicker.palette`],
  [`clkt`, `application/vnd.crick.clicker.template`],
  [`clkw`, `application/vnd.crick.clicker.wordbank`],
  [`clkx`, `application/vnd.crick.clicker`],
  [`clp`, `application/x-msclip`],
  [`cmc`, `application/vnd.cosmocaller`],
  [`cmdf`, `chemical/x-cmdf`],
  [`cml`, `chemical/x-cml`],
  [`cmp`, `application/vnd.yellowriver-custom-menu`],
  [`cmx`, `image/x-cmx`],
  [`cod`, `application/vnd.rim.cod`],
  [`coffee`, `text/coffeescript`],
  [`com`, `application/x-msdownload`],
  [`conf`, `text/plain`],
  [`cpio`, `application/x-cpio`],
  [`cpp`, `text/x-c`],
  [`cpt`, `application/mac-compactpro`],
  [`crd`, `application/x-mscardfile`],
  [`crl`, `application/pkix-crl`],
  [`crt`, `application/x-x509-ca-cert`],
  [`crx`, `application/x-chrome-extension`],
  [`cryptonote`, `application/vnd.rig.cryptonote`],
  [`csh`, `application/x-csh`],
  [`csl`, `application/vnd.citationstyles.style+xml`],
  [`csml`, `chemical/x-csml`],
  [`csp`, `application/vnd.commonspace`],
  [`csr`, `application/octet-stream`],
  [`css`, `text/css`],
  [`cst`, `application/x-director`],
  [`csv`, `text/csv`],
  [`cu`, `application/cu-seeme`],
  [`curl`, `text/vnd.curl`],
  [`cww`, `application/prs.cww`],
  [`cxt`, `application/x-director`],
  [`cxx`, `text/x-c`],
  [`dae`, `model/vnd.collada+xml`],
  [`daf`, `application/vnd.mobius.daf`],
  [`dart`, `application/vnd.dart`],
  [`dataless`, `application/vnd.fdsn.seed`],
  [`davmount`, `application/davmount+xml`],
  [`dbf`, `application/vnd.dbf`],
  [`dbk`, `application/docbook+xml`],
  [`dcr`, `application/x-director`],
  [`dcurl`, `text/vnd.curl.dcurl`],
  [`dd2`, `application/vnd.oma.dd2+xml`],
  [`ddd`, `application/vnd.fujixerox.ddd`],
  [`ddf`, `application/vnd.syncml.dmddf+xml`],
  [`dds`, `image/vnd.ms-dds`],
  [`deb`, `application/x-debian-package`],
  [`def`, `text/plain`],
  [`deploy`, `application/octet-stream`],
  [`der`, `application/x-x509-ca-cert`],
  [`dfac`, `application/vnd.dreamfactory`],
  [`dgc`, `application/x-dgc-compressed`],
  [`dic`, `text/x-c`],
  [`dir`, `application/x-director`],
  [`dis`, `application/vnd.mobius.dis`],
  [`disposition-notification`, `message/disposition-notification`],
  [`dist`, `application/octet-stream`],
  [`distz`, `application/octet-stream`],
  [`djv`, `image/vnd.djvu`],
  [`djvu`, `image/vnd.djvu`],
  [`dll`, `application/octet-stream`],
  [`dmg`, `application/x-apple-diskimage`],
  [`dmn`, `application/octet-stream`],
  [`dmp`, `application/vnd.tcpdump.pcap`],
  [`dms`, `application/octet-stream`],
  [`dna`, `application/vnd.dna`],
  [`doc`, `application/msword`],
  [`docm`, `application/vnd.ms-word.template.macroEnabled.12`],
  [
    `docx`,
    `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
  ],
  [`dot`, `application/msword`],
  [`dotm`, `application/vnd.ms-word.template.macroEnabled.12`],
  [
    `dotx`,
    `application/vnd.openxmlformats-officedocument.wordprocessingml.template`,
  ],
  [`dp`, `application/vnd.osgi.dp`],
  [`dpg`, `application/vnd.dpgraph`],
  [`dra`, `audio/vnd.dra`],
  [`drle`, `image/dicom-rle`],
  [`dsc`, `text/prs.lines.tag`],
  [`dssc`, `application/dssc+der`],
  [`dtb`, `application/x-dtbook+xml`],
  [`dtd`, `application/xml-dtd`],
  [`dts`, `audio/vnd.dts`],
  [`dtshd`, `audio/vnd.dts.hd`],
  [`dump`, `application/octet-stream`],
  [`dvb`, `video/vnd.dvb.file`],
  [`dvi`, `application/x-dvi`],
  [`dwd`, `application/atsc-dwd+xml`],
  [`dwf`, `model/vnd.dwf`],
  [`dwg`, `image/vnd.dwg`],
  [`dxf`, `image/vnd.dxf`],
  [`dxp`, `application/vnd.spotfire.dxp`],
  [`dxr`, `application/x-director`],
  [`ear`, `application/java-archive`],
  [`ecelp4800`, `audio/vnd.nuera.ecelp4800`],
  [`ecelp7470`, `audio/vnd.nuera.ecelp7470`],
  [`ecelp9600`, `audio/vnd.nuera.ecelp9600`],
  [`ecma`, `application/ecmascript`],
  [`edm`, `application/vnd.novadigm.edm`],
  [`edx`, `application/vnd.novadigm.edx`],
  [`efif`, `application/vnd.picsel`],
  [`ei6`, `application/vnd.pg.osasli`],
  [`elc`, `application/octet-stream`],
  [`emf`, `image/emf`],
  [`eml`, `message/rfc822`],
  [`emma`, `application/emma+xml`],
  [`emotionml`, `application/emotionml+xml`],
  [`emz`, `application/x-msmetafile`],
  [`eol`, `audio/vnd.digital-winds`],
  [`eot`, `application/vnd.ms-fontobject`],
  [`eps`, `application/postscript`],
  [`epub`, `application/epub+zip`],
  [`es`, `application/ecmascript`],
  [`es3`, `application/vnd.eszigno3+xml`],
  [`esa`, `application/vnd.osgi.subsystem`],
  [`esf`, `application/vnd.epson.esf`],
  [`et3`, `application/vnd.eszigno3+xml`],
  [`etx`, `text/x-setext`],
  [`eva`, `application/x-eva`],
  [`evy`, `application/x-envoy`],
  [`exe`, `application/octet-stream`],
  [`exi`, `application/exi`],
  [`exp`, `application/express`],
  [`exr`, `image/aces`],
  [`ext`, `application/vnd.novadigm.ext`],
  [`ez`, `application/andrew-inset`],
  [`ez2`, `application/vnd.ezpix-album`],
  [`ez3`, `application/vnd.ezpix-package`],
  [`f`, `text/x-fortran`],
  [`f4v`, `video/mp4`],
  [`f77`, `text/x-fortran`],
  [`f90`, `text/x-fortran`],
  [`fbs`, `image/vnd.fastbidsheet`],
  [`fcdt`, `application/vnd.adobe.formscentral.fcdt`],
  [`fcs`, `application/vnd.isac.fcs`],
  [`fdf`, `application/vnd.fdf`],
  [`fdt`, `application/fdt+xml`],
  [`fe_launch`, `application/vnd.denovo.fcselayout-link`],
  [`fg5`, `application/vnd.fujitsu.oasysgp`],
  [`fgd`, `application/x-director`],
  [`fh`, `image/x-freehand`],
  [`fh4`, `image/x-freehand`],
  [`fh5`, `image/x-freehand`],
  [`fh7`, `image/x-freehand`],
  [`fhc`, `image/x-freehand`],
  [`fig`, `application/x-xfig`],
  [`fits`, `image/fits`],
  [`flac`, `audio/x-flac`],
  [`fli`, `video/x-fli`],
  [`flo`, `application/vnd.micrografx.flo`],
  [`flv`, `video/x-flv`],
  [`flw`, `application/vnd.kde.kivio`],
  [`flx`, `text/vnd.fmi.flexstor`],
  [`fly`, `text/vnd.fly`],
  [`fm`, `application/vnd.framemaker`],
  [`fnc`, `application/vnd.frogans.fnc`],
  [`fo`, `application/vnd.software602.filler.form+xml`],
  [`for`, `text/x-fortran`],
  [`fpx`, `image/vnd.fpx`],
  [`frame`, `application/vnd.framemaker`],
  [`fsc`, `application/vnd.fsc.weblaunch`],
  [`fst`, `image/vnd.fst`],
  [`ftc`, `application/vnd.fluxtime.clip`],
  [`fti`, `application/vnd.anser-web-funds-transfer-initiation`],
  [`fvt`, `video/vnd.fvt`],
  [`fxp`, `application/vnd.adobe.fxp`],
  [`fxpl`, `application/vnd.adobe.fxp`],
  [`fzs`, `application/vnd.fuzzysheet`],
  [`g2w`, `application/vnd.geoplan`],
  [`g3`, `image/g3fax`],
  [`g3w`, `application/vnd.geospace`],
  [`gac`, `application/vnd.groove-account`],
  [`gam`, `application/x-tads`],
  [`gbr`, `application/rpki-ghostbusters`],
  [`gca`, `application/x-gca-compressed`],
  [`gdl`, `model/vnd.gdl`],
  [`gdoc`, `application/vnd.google-apps.document`],
  [`geo`, `application/vnd.dynageo`],
  [`geojson`, `application/geo+json`],
  [`gex`, `application/vnd.geometry-explorer`],
  [`ggb`, `application/vnd.geogebra.file`],
  [`ggt`, `application/vnd.geogebra.tool`],
  [`ghf`, `application/vnd.groove-help`],
  [`gif`, `image/gif`],
  [`gim`, `application/vnd.groove-identity-message`],
  [`glb`, `model/gltf-binary`],
  [`gltf`, `model/gltf+json`],
  [`gml`, `application/gml+xml`],
  [`gmx`, `application/vnd.gmx`],
  [`gnumeric`, `application/x-gnumeric`],
  [`gpg`, `application/gpg-keys`],
  [`gph`, `application/vnd.flographit`],
  [`gpx`, `application/gpx+xml`],
  [`gqf`, `application/vnd.grafeq`],
  [`gqs`, `application/vnd.grafeq`],
  [`gram`, `application/srgs`],
  [`gramps`, `application/x-gramps-xml`],
  [`gre`, `application/vnd.geometry-explorer`],
  [`grv`, `application/vnd.groove-injector`],
  [`grxml`, `application/srgs+xml`],
  [`gsf`, `application/x-font-ghostscript`],
  [`gsheet`, `application/vnd.google-apps.spreadsheet`],
  [`gslides`, `application/vnd.google-apps.presentation`],
  [`gtar`, `application/x-gtar`],
  [`gtm`, `application/vnd.groove-tool-message`],
  [`gtw`, `model/vnd.gtw`],
  [`gv`, `text/vnd.graphviz`],
  [`gxf`, `application/gxf`],
  [`gxt`, `application/vnd.geonext`],
  [`gz`, `application/gzip`],
  [`gzip`, `application/gzip`],
  [`h`, `text/x-c`],
  [`h261`, `video/h261`],
  [`h263`, `video/h263`],
  [`h264`, `video/h264`],
  [`hal`, `application/vnd.hal+xml`],
  [`hbci`, `application/vnd.hbci`],
  [`hbs`, `text/x-handlebars-template`],
  [`hdd`, `application/x-virtualbox-hdd`],
  [`hdf`, `application/x-hdf`],
  [`heic`, `image/heic`],
  [`heics`, `image/heic-sequence`],
  [`heif`, `image/heif`],
  [`heifs`, `image/heif-sequence`],
  [`hej2`, `image/hej2k`],
  [`held`, `application/atsc-held+xml`],
  [`hh`, `text/x-c`],
  [`hjson`, `application/hjson`],
  [`hlp`, `application/winhlp`],
  [`hpgl`, `application/vnd.hp-hpgl`],
  [`hpid`, `application/vnd.hp-hpid`],
  [`hps`, `application/vnd.hp-hps`],
  [`hqx`, `application/mac-binhex40`],
  [`hsj2`, `image/hsj2`],
  [`htc`, `text/x-component`],
  [`htke`, `application/vnd.kenameaapp`],
  [`htm`, `text/html`],
  [`html`, `text/html`],
  [`hvd`, `application/vnd.yamaha.hv-dic`],
  [`hvp`, `application/vnd.yamaha.hv-voice`],
  [`hvs`, `application/vnd.yamaha.hv-script`],
  [`i2g`, `application/vnd.intergeo`],
  [`icc`, `application/vnd.iccprofile`],
  [`ice`, `x-conference/x-cooltalk`],
  [`icm`, `application/vnd.iccprofile`],
  [`ico`, `image/x-icon`],
  [`ics`, `text/calendar`],
  [`ief`, `image/ief`],
  [`ifb`, `text/calendar`],
  [`ifm`, `application/vnd.shana.informed.formdata`],
  [`iges`, `model/iges`],
  [`igl`, `application/vnd.igloader`],
  [`igm`, `application/vnd.insors.igm`],
  [`igs`, `model/iges`],
  [`igx`, `application/vnd.micrografx.igx`],
  [`iif`, `application/vnd.shana.informed.interchange`],
  [`img`, `application/octet-stream`],
  [`imp`, `application/vnd.accpac.simply.imp`],
  [`ims`, `application/vnd.ms-ims`],
  [`in`, `text/plain`],
  [`ini`, `text/plain`],
  [`ink`, `application/inkml+xml`],
  [`inkml`, `application/inkml+xml`],
  [`install`, `application/x-install-instructions`],
  [`iota`, `application/vnd.astraea-software.iota`],
  [`ipfix`, `application/ipfix`],
  [`ipk`, `application/vnd.shana.informed.package`],
  [`irm`, `application/vnd.ibm.rights-management`],
  [`irp`, `application/vnd.irepository.package+xml`],
  [`iso`, `application/x-iso9660-image`],
  [`itp`, `application/vnd.shana.informed.formtemplate`],
  [`its`, `application/its+xml`],
  [`ivp`, `application/vnd.immervision-ivp`],
  [`ivu`, `application/vnd.immervision-ivu`],
  [`jad`, `text/vnd.sun.j2me.app-descriptor`],
  [`jade`, `text/jade`],
  [`jam`, `application/vnd.jam`],
  [`jar`, `application/java-archive`],
  [`jardiff`, `application/x-java-archive-diff`],
  [`java`, `text/x-java-source`],
  [`jhc`, `image/jphc`],
  [`jisp`, `application/vnd.jisp`],
  [`jls`, `image/jls`],
  [`jlt`, `application/vnd.hp-jlyt`],
  [`jng`, `image/x-jng`],
  [`jnlp`, `application/x-java-jnlp-file`],
  [`joda`, `application/vnd.joost.joda-archive`],
  [`jp2`, `image/jp2`],
  [`jpe`, `image/jpeg`],
  [`jpeg`, `image/jpeg`],
  [`jpf`, `image/jpx`],
  [`jpg`, `image/jpeg`],
  [`jpg2`, `image/jp2`],
  [`jpgm`, `video/jpm`],
  [`jpgv`, `video/jpeg`],
  [`jph`, `image/jph`],
  [`jpm`, `video/jpm`],
  [`jpx`, `image/jpx`],
  [`js`, `application/javascript`],
  [`json`, `application/json`],
  [`json5`, `application/json5`],
  [`jsonld`, `application/ld+json`],
  [`jsonl`, `application/jsonl`],
  [`jsonml`, `application/jsonml+json`],
  [`jsx`, `text/jsx`],
  [`jxr`, `image/jxr`],
  [`jxra`, `image/jxra`],
  [`jxrs`, `image/jxrs`],
  [`jxs`, `image/jxs`],
  [`jxsc`, `image/jxsc`],
  [`jxsi`, `image/jxsi`],
  [`jxss`, `image/jxss`],
  [`kar`, `audio/midi`],
  [`karbon`, `application/vnd.kde.karbon`],
  [`kdb`, `application/octet-stream`],
  [`kdbx`, `application/x-keepass2`],
  [`key`, `application/x-iwork-keynote-sffkey`],
  [`kfo`, `application/vnd.kde.kformula`],
  [`kia`, `application/vnd.kidspiration`],
  [`kml`, `application/vnd.google-earth.kml+xml`],
  [`kmz`, `application/vnd.google-earth.kmz`],
  [`kne`, `application/vnd.kinar`],
  [`knp`, `application/vnd.kinar`],
  [`kon`, `application/vnd.kde.kontour`],
  [`kpr`, `application/vnd.kde.kpresenter`],
  [`kpt`, `application/vnd.kde.kpresenter`],
  [`kpxx`, `application/vnd.ds-keypoint`],
  [`ksp`, `application/vnd.kde.kspread`],
  [`ktr`, `application/vnd.kahootz`],
  [`ktx`, `image/ktx`],
  [`ktx2`, `image/ktx2`],
  [`ktz`, `application/vnd.kahootz`],
  [`kwd`, `application/vnd.kde.kword`],
  [`kwt`, `application/vnd.kde.kword`],
  [`lasxml`, `application/vnd.las.las+xml`],
  [`latex`, `application/x-latex`],
  [`lbd`, `application/vnd.llamagraphics.life-balance.desktop`],
  [`lbe`, `application/vnd.llamagraphics.life-balance.exchange+xml`],
  [`les`, `application/vnd.hhe.lesson-player`],
  [`less`, `text/less`],
  [`lgr`, `application/lgr+xml`],
  [`lha`, `application/octet-stream`],
  [`link66`, `application/vnd.route66.link66+xml`],
  [`list`, `text/plain`],
  [`list3820`, `application/vnd.ibm.modcap`],
  [`listafp`, `application/vnd.ibm.modcap`],
  [`litcoffee`, `text/coffeescript`],
  [`lnk`, `application/x-ms-shortcut`],
  [`log`, `text/plain`],
  [`lostxml`, `application/lost+xml`],
  [`lrf`, `application/octet-stream`],
  [`lrm`, `application/vnd.ms-lrm`],
  [`ltf`, `application/vnd.frogans.ltf`],
  [`lua`, `text/x-lua`],
  [`luac`, `application/x-lua-bytecode`],
  [`lvp`, `audio/vnd.lucent.voice`],
  [`lwp`, `application/vnd.lotus-wordpro`],
  [`lzh`, `application/octet-stream`],
  [`m1v`, `video/mpeg`],
  [`m2a`, `audio/mpeg`],
  [`m2v`, `video/mpeg`],
  [`m3a`, `audio/mpeg`],
  [`m3u`, `text/plain`],
  [`m3u8`, `application/vnd.apple.mpegurl`],
  [`m4a`, `audio/x-m4a`],
  [`m4p`, `application/mp4`],
  [`m4s`, `video/iso.segment`],
  [`m4u`, `application/vnd.mpegurl`],
  [`m4v`, `video/x-m4v`],
  [`m13`, `application/x-msmediaview`],
  [`m14`, `application/x-msmediaview`],
  [`m21`, `application/mp21`],
  [`ma`, `application/mathematica`],
  [`mads`, `application/mads+xml`],
  [`maei`, `application/mmt-aei+xml`],
  [`mag`, `application/vnd.ecowin.chart`],
  [`maker`, `application/vnd.framemaker`],
  [`man`, `text/troff`],
  [`manifest`, `text/cache-manifest`],
  [`map`, `application/json`],
  [`mar`, `application/octet-stream`],
  [`markdown`, `text/markdown`],
  [`mathml`, `application/mathml+xml`],
  [`mb`, `application/mathematica`],
  [`mbk`, `application/vnd.mobius.mbk`],
  [`mbox`, `application/mbox`],
  [`mc1`, `application/vnd.medcalcdata`],
  [`mcd`, `application/vnd.mcd`],
  [`mcurl`, `text/vnd.curl.mcurl`],
  [`md`, `text/markdown`],
  [`mdb`, `application/x-msaccess`],
  [`mdi`, `image/vnd.ms-modi`],
  [`mdx`, `text/mdx`],
  [`me`, `text/troff`],
  [`mesh`, `model/mesh`],
  [`meta4`, `application/metalink4+xml`],
  [`metalink`, `application/metalink+xml`],
  [`mets`, `application/mets+xml`],
  [`mfm`, `application/vnd.mfmp`],
  [`mft`, `application/rpki-manifest`],
  [`mgp`, `application/vnd.osgeo.mapguide.package`],
  [`mgz`, `application/vnd.proteus.magazine`],
  [`mid`, `audio/midi`],
  [`midi`, `audio/midi`],
  [`mie`, `application/x-mie`],
  [`mif`, `application/vnd.mif`],
  [`mime`, `message/rfc822`],
  [`mj2`, `video/mj2`],
  [`mjp2`, `video/mj2`],
  [`mjs`, `application/javascript`],
  [`mk3d`, `video/x-matroska`],
  [`mka`, `audio/x-matroska`],
  [`mkd`, `text/x-markdown`],
  [`mks`, `video/x-matroska`],
  [`mkv`, `video/x-matroska`],
  [`mlp`, `application/vnd.dolby.mlp`],
  [`mmd`, `application/vnd.chipnuts.karaoke-mmd`],
  [`mmf`, `application/vnd.smaf`],
  [`mml`, `text/mathml`],
  [`mmr`, `image/vnd.fujixerox.edmics-mmr`],
  [`mng`, `video/x-mng`],
  [`mny`, `application/x-msmoney`],
  [`mobi`, `application/x-mobipocket-ebook`],
  [`mods`, `application/mods+xml`],
  [`mov`, `video/quicktime`],
  [`movie`, `video/x-sgi-movie`],
  [`mp2`, `audio/mpeg`],
  [`mp2a`, `audio/mpeg`],
  [`mp3`, `audio/mpeg`],
  [`mp4`, `video/mp4`],
  [`mp4a`, `audio/mp4`],
  [`mp4s`, `application/mp4`],
  [`mp4v`, `video/mp4`],
  [`mp21`, `application/mp21`],
  [`mpc`, `application/vnd.mophun.certificate`],
  [`mpd`, `application/dash+xml`],
  [`mpe`, `video/mpeg`],
  [`mpeg`, `video/mpeg`],
  [`mpg`, `video/mpeg`],
  [`mpg4`, `video/mp4`],
  [`mpga`, `audio/mpeg`],
  [`mpkg`, `application/vnd.apple.installer+xml`],
  [`mpm`, `application/vnd.blueice.multipass`],
  [`mpn`, `application/vnd.mophun.application`],
  [`mpp`, `application/vnd.ms-project`],
  [`mpt`, `application/vnd.ms-project`],
  [`mpy`, `application/vnd.ibm.minipay`],
  [`mqy`, `application/vnd.mobius.mqy`],
  [`mrc`, `application/marc`],
  [`mrcx`, `application/marcxml+xml`],
  [`ms`, `text/troff`],
  [`mscml`, `application/mediaservercontrol+xml`],
  [`mseed`, `application/vnd.fdsn.mseed`],
  [`mseq`, `application/vnd.mseq`],
  [`msf`, `application/vnd.epson.msf`],
  [`msg`, `application/vnd.ms-outlook`],
  [`msh`, `model/mesh`],
  [`msi`, `application/x-msdownload`],
  [`msl`, `application/vnd.mobius.msl`],
  [`msm`, `application/octet-stream`],
  [`msp`, `application/octet-stream`],
  [`msty`, `application/vnd.muvee.style`],
  [`mtl`, `model/mtl`],
  [`mts`, `model/vnd.mts`],
  [`mus`, `application/vnd.musician`],
  [`musd`, `application/mmt-usd+xml`],
  [`musicxml`, `application/vnd.recordare.musicxml+xml`],
  [`mvb`, `application/x-msmediaview`],
  [`mvt`, `application/vnd.mapbox-vector-tile`],
  [`mwf`, `application/vnd.mfer`],
  [`mxf`, `application/mxf`],
  [`mxl`, `application/vnd.recordare.musicxml`],
  [`mxmf`, `audio/mobile-xmf`],
  [`mxml`, `application/xv+xml`],
  [`mxs`, `application/vnd.triscape.mxs`],
  [`mxu`, `video/vnd.mpegurl`],
  [`n-gage`, `application/vnd.nokia.n-gage.symbian.install`],
  [`n3`, `text/n3`],
  [`nb`, `application/mathematica`],
  [`nbp`, `application/vnd.wolfram.player`],
  [`nc`, `application/x-netcdf`],
  [`ncx`, `application/x-dtbncx+xml`],
  [`nfo`, `text/x-nfo`],
  [`ngdat`, `application/vnd.nokia.n-gage.data`],
  [`nitf`, `application/vnd.nitf`],
  [`nlu`, `application/vnd.neurolanguage.nlu`],
  [`nml`, `application/vnd.enliven`],
  [`nnd`, `application/vnd.noblenet-directory`],
  [`nns`, `application/vnd.noblenet-sealer`],
  [`nnw`, `application/vnd.noblenet-web`],
  [`npx`, `image/vnd.net-fpx`],
  [`nq`, `application/n-quads`],
  [`nsc`, `application/x-conference`],
  [`nsf`, `application/vnd.lotus-notes`],
  [`nt`, `application/n-triples`],
  [`ntf`, `application/vnd.nitf`],
  [`numbers`, `application/x-iwork-numbers-sffnumbers`],
  [`nzb`, `application/x-nzb`],
  [`oa2`, `application/vnd.fujitsu.oasys2`],
  [`oa3`, `application/vnd.fujitsu.oasys3`],
  [`oas`, `application/vnd.fujitsu.oasys`],
  [`obd`, `application/x-msbinder`],
  [`obgx`, `application/vnd.openblox.game+xml`],
  [`obj`, `model/obj`],
  [`oda`, `application/oda`],
  [`odb`, `application/vnd.oasis.opendocument.database`],
  [`odc`, `application/vnd.oasis.opendocument.chart`],
  [`odf`, `application/vnd.oasis.opendocument.formula`],
  [`odft`, `application/vnd.oasis.opendocument.formula-template`],
  [`odg`, `application/vnd.oasis.opendocument.graphics`],
  [`odi`, `application/vnd.oasis.opendocument.image`],
  [`odm`, `application/vnd.oasis.opendocument.text-master`],
  [`odp`, `application/vnd.oasis.opendocument.presentation`],
  [`ods`, `application/vnd.oasis.opendocument.spreadsheet`],
  [`odt`, `application/vnd.oasis.opendocument.text`],
  [`oga`, `audio/ogg`],
  [`ogex`, `model/vnd.opengex`],
  [`ogg`, `audio/ogg`],
  [`ogv`, `video/ogg`],
  [`ogx`, `application/ogg`],
  [`omdoc`, `application/omdoc+xml`],
  [`onepkg`, `application/onenote`],
  [`onetmp`, `application/onenote`],
  [`onetoc`, `application/onenote`],
  [`onetoc2`, `application/onenote`],
  [`opf`, `application/oebps-package+xml`],
  [`opml`, `text/x-opml`],
  [`oprc`, `application/vnd.palm`],
  [`opus`, `audio/ogg`],
  [`org`, `text/x-org`],
  [`osf`, `application/vnd.yamaha.openscoreformat`],
  [`osfpvg`, `application/vnd.yamaha.openscoreformat.osfpvg+xml`],
  [`osm`, `application/vnd.openstreetmap.data+xml`],
  [`otc`, `application/vnd.oasis.opendocument.chart-template`],
  [`otf`, `font/otf`],
  [`otg`, `application/vnd.oasis.opendocument.graphics-template`],
  [`oth`, `application/vnd.oasis.opendocument.text-web`],
  [`oti`, `application/vnd.oasis.opendocument.image-template`],
  [`otp`, `application/vnd.oasis.opendocument.presentation-template`],
  [`ots`, `application/vnd.oasis.opendocument.spreadsheet-template`],
  [`ott`, `application/vnd.oasis.opendocument.text-template`],
  [`ova`, `application/x-virtualbox-ova`],
  [`ovf`, `application/x-virtualbox-ovf`],
  [`owl`, `application/rdf+xml`],
  [`oxps`, `application/oxps`],
  [`oxt`, `application/vnd.openofficeorg.extension`],
  [`p`, `text/x-pascal`],
  [`p7a`, `application/x-pkcs7-signature`],
  [`p7b`, `application/x-pkcs7-certificates`],
  [`p7c`, `application/pkcs7-mime`],
  [`p7m`, `application/pkcs7-mime`],
  [`p7r`, `application/x-pkcs7-certreqresp`],
  [`p7s`, `application/pkcs7-signature`],
  [`p8`, `application/pkcs8`],
  [`p10`, `application/x-pkcs10`],
  [`p12`, `application/x-pkcs12`],
  [`pac`, `application/x-ns-proxy-autoconfig`],
  [`pages`, `application/x-iwork-pages-sffpages`],
  [`pas`, `text/x-pascal`],
  [`paw`, `application/vnd.pawaafile`],
  [`pbd`, `application/vnd.powerbuilder6`],
  [`pbm`, `image/x-portable-bitmap`],
  [`pcap`, `application/vnd.tcpdump.pcap`],
  [`pcf`, `application/x-font-pcf`],
  [`pcl`, `application/vnd.hp-pcl`],
  [`pclxl`, `application/vnd.hp-pclxl`],
  [`pct`, `image/x-pict`],
  [`pcurl`, `application/vnd.curl.pcurl`],
  [`pcx`, `image/x-pcx`],
  [`pdb`, `application/x-pilot`],
  [`pde`, `text/x-processing`],
  [`pdf`, `application/pdf`],
  [`pem`, `application/x-x509-user-cert`],
  [`pfa`, `application/x-font-type1`],
  [`pfb`, `application/x-font-type1`],
  [`pfm`, `application/x-font-type1`],
  [`pfr`, `application/font-tdpfr`],
  [`pfx`, `application/x-pkcs12`],
  [`pgm`, `image/x-portable-graymap`],
  [`pgn`, `application/x-chess-pgn`],
  [`pgp`, `application/pgp`],
  [`php`, `application/x-httpd-php`],
  [`php3`, `application/x-httpd-php`],
  [`php4`, `application/x-httpd-php`],
  [`phps`, `application/x-httpd-php-source`],
  [`phtml`, `application/x-httpd-php`],
  [`pic`, `image/x-pict`],
  [`pkg`, `application/octet-stream`],
  [`pki`, `application/pkixcmp`],
  [`pkipath`, `application/pkix-pkipath`],
  [`pkpass`, `application/vnd.apple.pkpass`],
  [`pl`, `application/x-perl`],
  [`plb`, `application/vnd.3gpp.pic-bw-large`],
  [`plc`, `application/vnd.mobius.plc`],
  [`plf`, `application/vnd.pocketlearn`],
  [`pls`, `application/pls+xml`],
  [`pm`, `application/x-perl`],
  [`pml`, `application/vnd.ctc-posml`],
  [`png`, `image/png`],
  [`pnm`, `image/x-portable-anymap`],
  [`portpkg`, `application/vnd.macports.portpkg`],
  [`pot`, `application/vnd.ms-powerpoint`],
  [`potm`, `application/vnd.ms-powerpoint.presentation.macroEnabled.12`],
  [
    `potx`,
    `application/vnd.openxmlformats-officedocument.presentationml.template`,
  ],
  [`ppa`, `application/vnd.ms-powerpoint`],
  [`ppam`, `application/vnd.ms-powerpoint.addin.macroEnabled.12`],
  [`ppd`, `application/vnd.cups-ppd`],
  [`ppm`, `image/x-portable-pixmap`],
  [`pps`, `application/vnd.ms-powerpoint`],
  [`ppsm`, `application/vnd.ms-powerpoint.slideshow.macroEnabled.12`],
  [
    `ppsx`,
    `application/vnd.openxmlformats-officedocument.presentationml.slideshow`,
  ],
  [`ppt`, `application/powerpoint`],
  [`pptm`, `application/vnd.ms-powerpoint.presentation.macroEnabled.12`],
  [
    `pptx`,
    `application/vnd.openxmlformats-officedocument.presentationml.presentation`,
  ],
  [`pqa`, `application/vnd.palm`],
  [`prc`, `application/x-pilot`],
  [`pre`, `application/vnd.lotus-freelance`],
  [`prf`, `application/pics-rules`],
  [`provx`, `application/provenance+xml`],
  [`ps`, `application/postscript`],
  [`psb`, `application/vnd.3gpp.pic-bw-small`],
  [`psd`, `application/x-photoshop`],
  [`psf`, `application/x-font-linux-psf`],
  [`pskcxml`, `application/pskc+xml`],
  [`pti`, `image/prs.pti`],
  [`ptid`, `application/vnd.pvi.ptid1`],
  [`pub`, `application/x-mspublisher`],
  [`pvb`, `application/vnd.3gpp.pic-bw-var`],
  [`pwn`, `application/vnd.3m.post-it-notes`],
  [`pya`, `audio/vnd.ms-playready.media.pya`],
  [`pyv`, `video/vnd.ms-playready.media.pyv`],
  [`qam`, `application/vnd.epson.quickanime`],
  [`qbo`, `application/vnd.intu.qbo`],
  [`qfx`, `application/vnd.intu.qfx`],
  [`qps`, `application/vnd.publishare-delta-tree`],
  [`qt`, `video/quicktime`],
  [`qwd`, `application/vnd.quark.quarkxpress`],
  [`qwt`, `application/vnd.quark.quarkxpress`],
  [`qxb`, `application/vnd.quark.quarkxpress`],
  [`qxd`, `application/vnd.quark.quarkxpress`],
  [`qxl`, `application/vnd.quark.quarkxpress`],
  [`qxt`, `application/vnd.quark.quarkxpress`],
  [`ra`, `audio/x-realaudio`],
  [`ram`, `audio/x-pn-realaudio`],
  [`raml`, `application/raml+yaml`],
  [`rapd`, `application/route-apd+xml`],
  [`rar`, `application/x-rar`],
  [`ras`, `image/x-cmu-raster`],
  [`rcprofile`, `application/vnd.ipunplugged.rcprofile`],
  [`rdf`, `application/rdf+xml`],
  [`rdz`, `application/vnd.data-vision.rdz`],
  [`relo`, `application/p2p-overlay+xml`],
  [`rep`, `application/vnd.businessobjects`],
  [`res`, `application/x-dtbresource+xml`],
  [`rgb`, `image/x-rgb`],
  [`rif`, `application/reginfo+xml`],
  [`rip`, `audio/vnd.rip`],
  [`ris`, `application/x-research-info-systems`],
  [`rl`, `application/resource-lists+xml`],
  [`rlc`, `image/vnd.fujixerox.edmics-rlc`],
  [`rld`, `application/resource-lists-diff+xml`],
  [`rm`, `audio/x-pn-realaudio`],
  [`rmi`, `audio/midi`],
  [`rmp`, `audio/x-pn-realaudio-plugin`],
  [`rms`, `application/vnd.jcp.javame.midlet-rms`],
  [`rmvb`, `application/vnd.rn-realmedia-vbr`],
  [`rnc`, `application/relax-ng-compact-syntax`],
  [`rng`, `application/xml`],
  [`roa`, `application/rpki-roa`],
  [`roff`, `text/troff`],
  [`rp9`, `application/vnd.cloanto.rp9`],
  [`rpm`, `audio/x-pn-realaudio-plugin`],
  [`rpss`, `application/vnd.nokia.radio-presets`],
  [`rpst`, `application/vnd.nokia.radio-preset`],
  [`rq`, `application/sparql-query`],
  [`rs`, `application/rls-services+xml`],
  [`rsa`, `application/x-pkcs7`],
  [`rsat`, `application/atsc-rsat+xml`],
  [`rsd`, `application/rsd+xml`],
  [`rsheet`, `application/urc-ressheet+xml`],
  [`rss`, `application/rss+xml`],
  [`rtf`, `text/rtf`],
  [`rtx`, `text/richtext`],
  [`run`, `application/x-makeself`],
  [`rusd`, `application/route-usd+xml`],
  [`rv`, `video/vnd.rn-realvideo`],
  [`s`, `text/x-asm`],
  [`s3m`, `audio/s3m`],
  [`saf`, `application/vnd.yamaha.smaf-audio`],
  [`sass`, `text/x-sass`],
  [`sbml`, `application/sbml+xml`],
  [`sc`, `application/vnd.ibm.secure-container`],
  [`scd`, `application/x-msschedule`],
  [`scm`, `application/vnd.lotus-screencam`],
  [`scq`, `application/scvp-cv-request`],
  [`scs`, `application/scvp-cv-response`],
  [`scss`, `text/x-scss`],
  [`scurl`, `text/vnd.curl.scurl`],
  [`sda`, `application/vnd.stardivision.draw`],
  [`sdc`, `application/vnd.stardivision.calc`],
  [`sdd`, `application/vnd.stardivision.impress`],
  [`sdkd`, `application/vnd.solent.sdkm+xml`],
  [`sdkm`, `application/vnd.solent.sdkm+xml`],
  [`sdp`, `application/sdp`],
  [`sdw`, `application/vnd.stardivision.writer`],
  [`sea`, `application/octet-stream`],
  [`see`, `application/vnd.seemail`],
  [`seed`, `application/vnd.fdsn.seed`],
  [`sema`, `application/vnd.sema`],
  [`semd`, `application/vnd.semd`],
  [`semf`, `application/vnd.semf`],
  [`senmlx`, `application/senml+xml`],
  [`sensmlx`, `application/sensml+xml`],
  [`ser`, `application/java-serialized-object`],
  [`setpay`, `application/set-payment-initiation`],
  [`setreg`, `application/set-registration-initiation`],
  [`sfd-hdstx`, `application/vnd.hydrostatix.sof-data`],
  [`sfs`, `application/vnd.spotfire.sfs`],
  [`sfv`, `text/x-sfv`],
  [`sgi`, `image/sgi`],
  [`sgl`, `application/vnd.stardivision.writer-global`],
  [`sgm`, `text/sgml`],
  [`sgml`, `text/sgml`],
  [`sh`, `application/x-sh`],
  [`shar`, `application/x-shar`],
  [`shex`, `text/shex`],
  [`shf`, `application/shf+xml`],
  [`shtml`, `text/html`],
  [`sid`, `image/x-mrsid-image`],
  [`sieve`, `application/sieve`],
  [`sig`, `application/pgp-signature`],
  [`sil`, `audio/silk`],
  [`silo`, `model/mesh`],
  [`sis`, `application/vnd.symbian.install`],
  [`sisx`, `application/vnd.symbian.install`],
  [`sit`, `application/x-stuffit`],
  [`sitx`, `application/x-stuffitx`],
  [`siv`, `application/sieve`],
  [`skd`, `application/vnd.koan`],
  [`skm`, `application/vnd.koan`],
  [`skp`, `application/vnd.koan`],
  [`skt`, `application/vnd.koan`],
  [`sldm`, `application/vnd.ms-powerpoint.slide.macroenabled.12`],
  [
    `sldx`,
    `application/vnd.openxmlformats-officedocument.presentationml.slide`,
  ],
  [`slim`, `text/slim`],
  [`slm`, `text/slim`],
  [`sls`, `application/route-s-tsid+xml`],
  [`slt`, `application/vnd.epson.salt`],
  [`sm`, `application/vnd.stepmania.stepchart`],
  [`smf`, `application/vnd.stardivision.math`],
  [`smi`, `application/smil`],
  [`smil`, `application/smil`],
  [`smv`, `video/x-smv`],
  [`smzip`, `application/vnd.stepmania.package`],
  [`snd`, `audio/basic`],
  [`snf`, `application/x-font-snf`],
  [`so`, `application/octet-stream`],
  [`spc`, `application/x-pkcs7-certificates`],
  [`spdx`, `text/spdx`],
  [`spf`, `application/vnd.yamaha.smaf-phrase`],
  [`spl`, `application/x-futuresplash`],
  [`spot`, `text/vnd.in3d.spot`],
  [`spp`, `application/scvp-vp-response`],
  [`spq`, `application/scvp-vp-request`],
  [`spx`, `audio/ogg`],
  [`sql`, `application/x-sql`],
  [`src`, `application/x-wais-source`],
  [`srt`, `application/x-subrip`],
  [`sru`, `application/sru+xml`],
  [`srx`, `application/sparql-results+xml`],
  [`ssdl`, `application/ssdl+xml`],
  [`sse`, `application/vnd.kodak-descriptor`],
  [`ssf`, `application/vnd.epson.ssf`],
  [`ssml`, `application/ssml+xml`],
  [`sst`, `application/octet-stream`],
  [`st`, `application/vnd.sailingtracker.track`],
  [`stc`, `application/vnd.sun.xml.calc.template`],
  [`std`, `application/vnd.sun.xml.draw.template`],
  [`stf`, `application/vnd.wt.stf`],
  [`sti`, `application/vnd.sun.xml.impress.template`],
  [`stk`, `application/hyperstudio`],
  [`stl`, `model/stl`],
  [`stpx`, `model/step+xml`],
  [`stpxz`, `model/step-xml+zip`],
  [`stpz`, `model/step+zip`],
  [`str`, `application/vnd.pg.format`],
  [`stw`, `application/vnd.sun.xml.writer.template`],
  [`styl`, `text/stylus`],
  [`stylus`, `text/stylus`],
  [`sub`, `text/vnd.dvb.subtitle`],
  [`sus`, `application/vnd.sus-calendar`],
  [`susp`, `application/vnd.sus-calendar`],
  [`sv4cpio`, `application/x-sv4cpio`],
  [`sv4crc`, `application/x-sv4crc`],
  [`svc`, `application/vnd.dvb.service`],
  [`svd`, `application/vnd.svd`],
  [`svg`, `image/svg+xml`],
  [`svgz`, `image/svg+xml`],
  [`swa`, `application/x-director`],
  [`swf`, `application/x-shockwave-flash`],
  [`swi`, `application/vnd.aristanetworks.swi`],
  [`swidtag`, `application/swid+xml`],
  [`sxc`, `application/vnd.sun.xml.calc`],
  [`sxd`, `application/vnd.sun.xml.draw`],
  [`sxg`, `application/vnd.sun.xml.writer.global`],
  [`sxi`, `application/vnd.sun.xml.impress`],
  [`sxm`, `application/vnd.sun.xml.math`],
  [`sxw`, `application/vnd.sun.xml.writer`],
  [`t`, `text/troff`],
  [`t3`, `application/x-t3vm-image`],
  [`t38`, `image/t38`],
  [`taglet`, `application/vnd.mynfc`],
  [`tao`, `application/vnd.tao.intent-module-archive`],
  [`tap`, `image/vnd.tencent.tap`],
  [`tar`, `application/x-tar`],
  [`tcap`, `application/vnd.3gpp2.tcap`],
  [`tcl`, `application/x-tcl`],
  [`td`, `application/urc-targetdesc+xml`],
  [`teacher`, `application/vnd.smart.teacher`],
  [`tei`, `application/tei+xml`],
  [`teicorpus`, `application/tei+xml`],
  [`tex`, `application/x-tex`],
  [`texi`, `application/x-texinfo`],
  [`texinfo`, `application/x-texinfo`],
  [`text`, `text/plain`],
  [`tfi`, `application/thraud+xml`],
  [`tfm`, `application/x-tex-tfm`],
  [`tfx`, `image/tiff-fx`],
  [`tga`, `image/x-tga`],
  [`tgz`, `application/x-tar`],
  [`thmx`, `application/vnd.ms-officetheme`],
  [`tif`, `image/tiff`],
  [`tiff`, `image/tiff`],
  [`tk`, `application/x-tcl`],
  [`tmo`, `application/vnd.tmobile-livetv`],
  [`toml`, `application/toml`],
  [`torrent`, `application/x-bittorrent`],
  [`tpl`, `application/vnd.groove-tool-template`],
  [`tpt`, `application/vnd.trid.tpt`],
  [`tr`, `text/troff`],
  [`tra`, `application/vnd.trueapp`],
  [`trig`, `application/trig`],
  [`trm`, `application/x-msterminal`],
  [`ts`, `video/mp2t`],
  [`tsd`, `application/timestamped-data`],
  [`tsv`, `text/tab-separated-values`],
  [`ttc`, `font/collection`],
  [`ttf`, `font/ttf`],
  [`ttl`, `text/turtle`],
  [`ttml`, `application/ttml+xml`],
  [`twd`, `application/vnd.simtech-mindmapper`],
  [`twds`, `application/vnd.simtech-mindmapper`],
  [`txd`, `application/vnd.genomatix.tuxedo`],
  [`txf`, `application/vnd.mobius.txf`],
  [`txt`, `text/plain`],
  [`u8dsn`, `message/global-delivery-status`],
  [`u8hdr`, `message/global-headers`],
  [`u8mdn`, `message/global-disposition-notification`],
  [`u8msg`, `message/global`],
  [`u32`, `application/x-authorware-bin`],
  [`ubj`, `application/ubjson`],
  [`udeb`, `application/x-debian-package`],
  [`ufd`, `application/vnd.ufdl`],
  [`ufdl`, `application/vnd.ufdl`],
  [`ulx`, `application/x-glulx`],
  [`umj`, `application/vnd.umajin`],
  [`unityweb`, `application/vnd.unity`],
  [`uoml`, `application/vnd.uoml+xml`],
  [`uri`, `text/uri-list`],
  [`uris`, `text/uri-list`],
  [`urls`, `text/uri-list`],
  [`usdz`, `model/vnd.usdz+zip`],
  [`ustar`, `application/x-ustar`],
  [`utz`, `application/vnd.uiq.theme`],
  [`uu`, `text/x-uuencode`],
  [`uva`, `audio/vnd.dece.audio`],
  [`uvd`, `application/vnd.dece.data`],
  [`uvf`, `application/vnd.dece.data`],
  [`uvg`, `image/vnd.dece.graphic`],
  [`uvh`, `video/vnd.dece.hd`],
  [`uvi`, `image/vnd.dece.graphic`],
  [`uvm`, `video/vnd.dece.mobile`],
  [`uvp`, `video/vnd.dece.pd`],
  [`uvs`, `video/vnd.dece.sd`],
  [`uvt`, `application/vnd.dece.ttml+xml`],
  [`uvu`, `video/vnd.uvvu.mp4`],
  [`uvv`, `video/vnd.dece.video`],
  [`uvva`, `audio/vnd.dece.audio`],
  [`uvvd`, `application/vnd.dece.data`],
  [`uvvf`, `application/vnd.dece.data`],
  [`uvvg`, `image/vnd.dece.graphic`],
  [`uvvh`, `video/vnd.dece.hd`],
  [`uvvi`, `image/vnd.dece.graphic`],
  [`uvvm`, `video/vnd.dece.mobile`],
  [`uvvp`, `video/vnd.dece.pd`],
  [`uvvs`, `video/vnd.dece.sd`],
  [`uvvt`, `application/vnd.dece.ttml+xml`],
  [`uvvu`, `video/vnd.uvvu.mp4`],
  [`uvvv`, `video/vnd.dece.video`],
  [`uvvx`, `application/vnd.dece.unspecified`],
  [`uvvz`, `application/vnd.dece.zip`],
  [`uvx`, `application/vnd.dece.unspecified`],
  [`uvz`, `application/vnd.dece.zip`],
  [`vbox`, `application/x-virtualbox-vbox`],
  [`vbox-extpack`, `application/x-virtualbox-vbox-extpack`],
  [`vcard`, `text/vcard`],
  [`vcd`, `application/x-cdlink`],
  [`vcf`, `text/x-vcard`],
  [`vcg`, `application/vnd.groove-vcard`],
  [`vcs`, `text/x-vcalendar`],
  [`vcx`, `application/vnd.vcx`],
  [`vdi`, `application/x-virtualbox-vdi`],
  [`vds`, `model/vnd.sap.vds`],
  [`vhd`, `application/x-virtualbox-vhd`],
  [`vis`, `application/vnd.visionary`],
  [`viv`, `video/vnd.vivo`],
  [`vlc`, `application/videolan`],
  [`vmdk`, `application/x-virtualbox-vmdk`],
  [`vob`, `video/x-ms-vob`],
  [`vor`, `application/vnd.stardivision.writer`],
  [`vox`, `application/x-authorware-bin`],
  [`vrml`, `model/vrml`],
  [`vsd`, `application/vnd.visio`],
  [`vsf`, `application/vnd.vsf`],
  [`vss`, `application/vnd.visio`],
  [`vst`, `application/vnd.visio`],
  [`vsw`, `application/vnd.visio`],
  [`vtf`, `image/vnd.valve.source.texture`],
  [`vtt`, `text/vtt`],
  [`vtu`, `model/vnd.vtu`],
  [`vxml`, `application/voicexml+xml`],
  [`w3d`, `application/x-director`],
  [`wad`, `application/x-doom`],
  [`wadl`, `application/vnd.sun.wadl+xml`],
  [`war`, `application/java-archive`],
  [`wasm`, `application/wasm`],
  [`wav`, `audio/x-wav`],
  [`wax`, `audio/x-ms-wax`],
  [`wbmp`, `image/vnd.wap.wbmp`],
  [`wbs`, `application/vnd.criticaltools.wbs+xml`],
  [`wbxml`, `application/wbxml`],
  [`wcm`, `application/vnd.ms-works`],
  [`wdb`, `application/vnd.ms-works`],
  [`wdp`, `image/vnd.ms-photo`],
  [`weba`, `audio/webm`],
  [`webapp`, `application/x-web-app-manifest+json`],
  [`webm`, `video/webm`],
  [`webmanifest`, `application/manifest+json`],
  [`webp`, `image/webp`],
  [`wg`, `application/vnd.pmi.widget`],
  [`wgt`, `application/widget`],
  [`wks`, `application/vnd.ms-works`],
  [`wm`, `video/x-ms-wm`],
  [`wma`, `audio/x-ms-wma`],
  [`wmd`, `application/x-ms-wmd`],
  [`wmf`, `image/wmf`],
  [`wml`, `text/vnd.wap.wml`],
  [`wmlc`, `application/wmlc`],
  [`wmls`, `text/vnd.wap.wmlscript`],
  [`wmlsc`, `application/vnd.wap.wmlscriptc`],
  [`wmv`, `video/x-ms-wmv`],
  [`wmx`, `video/x-ms-wmx`],
  [`wmz`, `application/x-msmetafile`],
  [`woff`, `font/woff`],
  [`woff2`, `font/woff2`],
  [`word`, `application/msword`],
  [`wpd`, `application/vnd.wordperfect`],
  [`wpl`, `application/vnd.ms-wpl`],
  [`wps`, `application/vnd.ms-works`],
  [`wqd`, `application/vnd.wqd`],
  [`wri`, `application/x-mswrite`],
  [`wrl`, `model/vrml`],
  [`wsc`, `message/vnd.wfa.wsc`],
  [`wsdl`, `application/wsdl+xml`],
  [`wspolicy`, `application/wspolicy+xml`],
  [`wtb`, `application/vnd.webturbo`],
  [`wvx`, `video/x-ms-wvx`],
  [`x3d`, `model/x3d+xml`],
  [`x3db`, `model/x3d+fastinfoset`],
  [`x3dbz`, `model/x3d+binary`],
  [`x3dv`, `model/x3d-vrml`],
  [`x3dvz`, `model/x3d+vrml`],
  [`x3dz`, `model/x3d+xml`],
  [`x32`, `application/x-authorware-bin`],
  [`x_b`, `model/vnd.parasolid.transmit.binary`],
  [`x_t`, `model/vnd.parasolid.transmit.text`],
  [`xaml`, `application/xaml+xml`],
  [`xap`, `application/x-silverlight-app`],
  [`xar`, `application/vnd.xara`],
  [`xav`, `application/xcap-att+xml`],
  [`xbap`, `application/x-ms-xbap`],
  [`xbd`, `application/vnd.fujixerox.docuworks.binder`],
  [`xbm`, `image/x-xbitmap`],
  [`xca`, `application/xcap-caps+xml`],
  [`xcs`, `application/calendar+xml`],
  [`xdf`, `application/xcap-diff+xml`],
  [`xdm`, `application/vnd.syncml.dm+xml`],
  [`xdp`, `application/vnd.adobe.xdp+xml`],
  [`xdssc`, `application/dssc+xml`],
  [`xdw`, `application/vnd.fujixerox.docuworks`],
  [`xel`, `application/xcap-el+xml`],
  [`xenc`, `application/xenc+xml`],
  [`xer`, `application/patch-ops-error+xml`],
  [`xfdf`, `application/vnd.adobe.xfdf`],
  [`xfdl`, `application/vnd.xfdl`],
  [`xht`, `application/xhtml+xml`],
  [`xhtml`, `application/xhtml+xml`],
  [`xhvml`, `application/xv+xml`],
  [`xif`, `image/vnd.xiff`],
  [`xl`, `application/excel`],
  [`xla`, `application/vnd.ms-excel`],
  [`xlam`, `application/vnd.ms-excel.addin.macroEnabled.12`],
  [`xlc`, `application/vnd.ms-excel`],
  [`xlf`, `application/xliff+xml`],
  [`xlm`, `application/vnd.ms-excel`],
  [`xls`, `application/vnd.ms-excel`],
  [`xlsb`, `application/vnd.ms-excel.sheet.binary.macroEnabled.12`],
  [`xlsm`, `application/vnd.ms-excel.sheet.macroEnabled.12`],
  [`xlsx`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`],
  [`xlt`, `application/vnd.ms-excel`],
  [`xltm`, `application/vnd.ms-excel.template.macroEnabled.12`],
  [
    `xltx`,
    `application/vnd.openxmlformats-officedocument.spreadsheetml.template`,
  ],
  [`xlw`, `application/vnd.ms-excel`],
  [`xm`, `audio/xm`],
  [`xml`, `application/xml`],
  [`xns`, `application/xcap-ns+xml`],
  [`xo`, `application/vnd.olpc-sugar`],
  [`xop`, `application/xop+xml`],
  [`xpi`, `application/x-xpinstall`],
  [`xpl`, `application/xproc+xml`],
  [`xpm`, `image/x-xpixmap`],
  [`xpr`, `application/vnd.is-xpr`],
  [`xps`, `application/vnd.ms-xpsdocument`],
  [`xpw`, `application/vnd.intercon.formnet`],
  [`xpx`, `application/vnd.intercon.formnet`],
  [`xsd`, `application/xml`],
  [`xsl`, `application/xml`],
  [`xslt`, `application/xslt+xml`],
  [`xsm`, `application/vnd.syncml+xml`],
  [`xspf`, `application/xspf+xml`],
  [`xul`, `application/vnd.mozilla.xul+xml`],
  [`xvm`, `application/xv+xml`],
  [`xvml`, `application/xv+xml`],
  [`xwd`, `image/x-xwindowdump`],
  [`xyz`, `chemical/x-xyz`],
  [`xz`, `application/x-xz`],
  [`yaml`, `text/yaml`],
  [`yang`, `application/yang`],
  [`yin`, `application/yin+xml`],
  [`yml`, `text/yaml`],
  [`ymp`, `text/x-suse-ymp`],
  [`z`, `application/x-compress`],
  [`z1`, `application/x-zmachine`],
  [`z2`, `application/x-zmachine`],
  [`z3`, `application/x-zmachine`],
  [`z4`, `application/x-zmachine`],
  [`z5`, `application/x-zmachine`],
  [`z6`, `application/x-zmachine`],
  [`z7`, `application/x-zmachine`],
  [`z8`, `application/x-zmachine`],
  [`zaz`, `application/vnd.zzazz.deck+xml`],
  [`zip`, `application/zip`],
  [`zir`, `application/vnd.zul`],
  [`zirz`, `application/vnd.zul`],
  [`zmm`, `application/vnd.handheld-entertainment+xml`],
  [`zsh`, `text/x-scriptzsh`],
]);
function ym(e, t, n) {
  let r = bm(e),
    { webkitRelativePath: i } = e,
    a =
      typeof t == `string`
        ? t
        : typeof i == `string` && i.length > 0
        ? i
        : `./${e.name}`;
  return (
    typeof r.path != `string` && xm(r, `path`, a),
    n !== void 0 &&
      Object.defineProperty(r, `handle`, {
        value: n,
        writable: !1,
        configurable: !1,
        enumerable: !0,
      }),
    xm(r, `relativePath`, a),
    r
  );
}
function bm(e) {
  let { name: t } = e;
  if (t && t.lastIndexOf(`.`) !== -1 && !e.type) {
    let n = t.split(`.`).pop().toLowerCase(),
      r = vm.get(n);
    r &&
      Object.defineProperty(e, `type`, {
        value: r,
        writable: !1,
        configurable: !1,
        enumerable: !0,
      });
  }
  return e;
}
function xm(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0,
  });
}
var Sm = [`.DS_Store`, `Thumbs.db`];
function Cm(e) {
  return _m(this, void 0, void 0, function* () {
    return Em(e) && wm(e.dataTransfer)
      ? km(e.dataTransfer, e.type)
      : Tm(e)
      ? Dm(e)
      : Array.isArray(e) &&
        e.every((e) => `getFile` in e && typeof e.getFile == `function`)
      ? Om(e)
      : [];
  });
}
function wm(e) {
  return Em(e);
}
function Tm(e) {
  return Em(e) && Em(e.target);
}
function Em(e) {
  return typeof e == `object` && !!e;
}
function Dm(e) {
  return jm(e.target.files).map((e) => ym(e));
}
function Om(e) {
  return _m(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((e) => e.getFile()))).map((e) => ym(e));
  });
}
function km(e, t) {
  return _m(this, void 0, void 0, function* () {
    if (e.items) {
      let n = jm(e.items).filter((e) => e.kind === `file`);
      return t === `drop` ? Am(Nm(yield Promise.all(n.map(Mm)))) : n;
    }
    return Am(jm(e.files).map((e) => ym(e)));
  });
}
function Am(e) {
  return e.filter((e) => Sm.indexOf(e.name) === -1);
}
function jm(e) {
  if (e === null) return [];
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r);
  }
  return t;
}
function Mm(e) {
  if (typeof e.webkitGetAsEntry != `function`) return Pm(e);
  let t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Im(t) : Pm(e, t);
}
function Nm(e) {
  return e.reduce((e, t) => [...e, ...(Array.isArray(t) ? Nm(t) : [t])], []);
}
function Pm(e, t) {
  return _m(this, void 0, void 0, function* () {
    if (
      globalThis.isSecureContext &&
      typeof e.getAsFileSystemHandle == `function`
    ) {
      let t = yield e.getAsFileSystemHandle();
      if (t === null) throw Error(`${e} is not a File`);
      if (t !== void 0) {
        let e = yield t.getFile();
        return (e.handle = t), ym(e);
      }
    }
    let n = e.getAsFile();
    if (!n) throw Error(`${e} is not a File`);
    return ym(n, t?.fullPath ?? void 0);
  });
}
function Fm(e) {
  return _m(this, void 0, void 0, function* () {
    return e.isDirectory ? Im(e) : Lm(e);
  });
}
function Im(e) {
  let t = e.createReader();
  return new Promise((e, n) => {
    let r = [];
    function i() {
      t.readEntries(
        (t) =>
          _m(this, void 0, void 0, function* () {
            if (t.length) {
              let e = Promise.all(t.map(Fm));
              r.push(e), i();
            } else
              try {
                e(yield Promise.all(r));
              } catch (e) {
                n(e);
              }
          }),
        (e) => {
          n(e);
        }
      );
    }
    i();
  });
}
function Lm(e) {
  return _m(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file(
        (n) => {
          t(ym(n, e.fullPath));
        },
        (e) => {
          n(e);
        }
      );
    });
  });
}
var Rm = s((e) => {
    (e.__esModule = !0),
      (e.default = function (e, t) {
        if (e && t) {
          var n = Array.isArray(t) ? t : t.split(`,`);
          if (n.length === 0) return !0;
          var r = e.name || ``,
            i = (e.type || ``).toLowerCase(),
            a = i.replace(/\/.*$/, ``);
          return n.some(function (e) {
            var t = e.trim().toLowerCase();
            return t.charAt(0) === `.`
              ? r.toLowerCase().endsWith(t)
              : t.endsWith(`/*`)
              ? a === t.replace(/\/.*$/, ``)
              : i === t;
          });
        }
        return !0;
      });
  }),
  Z = u(gm()),
  zm = u(Rm());
function Bm(e) {
  return Um(e) || Hm(e) || Ym(e) || Vm();
}
function Vm() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hm(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Um(e) {
  if (Array.isArray(e)) return Xm(e);
}
function Wm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Gm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Wm(Object(n), !0).forEach(function (t) {
          Km(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Wm(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function Km(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function qm(e, t) {
  return Qm(e) || Zm(e, t) || Ym(e, t) || Jm();
}
function Jm() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ym(e, t) {
  if (e) {
    if (typeof e == `string`) return Xm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xm(e, t);
  }
}
function Xm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Zm(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      s;
    try {
      for (
        n = n.call(e);
        !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        i = !0
      );
    } catch (e) {
      (a = !0), (s = e);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function Qm(e) {
  if (Array.isArray(e)) return e;
}
var $m = typeof zm.default == `function` ? zm.default : zm.default.default,
  eh = `file-invalid-type`,
  th = `file-too-large`,
  nh = `file-too-small`,
  rh = `too-many-files`,
  ih = function () {
    var e = (
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ``
    ).split(`,`);
    return {
      code: eh,
      message: `File type must be ${
        e.length > 1 ? `one of ${e.join(`, `)}` : e[0]
      }`,
    };
  },
  ah = function (e) {
    return {
      code: th,
      message: `File is larger than ${e} ${e === 1 ? `byte` : `bytes`}`,
    };
  },
  oh = function (e) {
    return {
      code: nh,
      message: `File is smaller than ${e} ${e === 1 ? `byte` : `bytes`}`,
    };
  },
  sh = { code: rh, message: `Too many files` };
function ch(e) {
  return e.type === `` && typeof e.getAsFile == `function`;
}
function lh(e, t) {
  var n = e.type === `application/x-moz-file` || $m(e, t) || ch(e);
  return [n, n ? null : ih(t)];
}
function uh(e, t, n) {
  if (dh(e.size)) {
    if (dh(t) && dh(n)) {
      if (e.size > n) return [!1, ah(n)];
      if (e.size < t) return [!1, oh(t)];
    } else if (dh(t) && e.size < t) return [!1, oh(t)];
    else if (dh(n) && e.size > n) return [!1, ah(n)];
  }
  return [!0, null];
}
function dh(e) {
  return e != null;
}
function fh(e) {
  var t = e.files,
    n = e.accept,
    r = e.minSize,
    i = e.maxSize,
    a = e.multiple,
    o = e.maxFiles,
    s = e.validator;
  return (!a && t.length > 1) || (a && o >= 1 && t.length > o)
    ? !1
    : t.every(function (e) {
        var t = qm(lh(e, n), 1)[0],
          a = qm(uh(e, r, i), 1)[0],
          o = s ? s(e) : null;
        return t && a && !o;
      });
}
function ph(e) {
  return typeof e.isPropagationStopped == `function`
    ? e.isPropagationStopped()
    : e.cancelBubble === void 0
    ? !1
    : e.cancelBubble;
}
function mh(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(e.dataTransfer.types, function (e) {
        return e === `Files` || e === `application/x-moz-file`;
      })
    : !!e.target && !!e.target.files;
}
function hh(e) {
  e.preventDefault();
}
function gh(e) {
  return e.indexOf(`MSIE`) !== -1 || e.indexOf(`Trident/`) !== -1;
}
function _h(e) {
  return e.indexOf(`Edge/`) !== -1;
}
function vh() {
  var e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : window.navigator.userAgent;
  return gh(e) || _h(e);
}
function yh() {
  var e = [...arguments];
  return function (t) {
    var n = [...arguments].slice(1);
    return e.some(function (e) {
      return !ph(t) && e && e.apply(void 0, [t].concat(n)), ph(t);
    });
  };
}
function bh() {
  return `showOpenFilePicker` in window;
}
function xh(e) {
  return dh(e)
    ? [
        {
          description: `Files`,
          accept: Object.entries(e)
            .filter(function (e) {
              var t = qm(e, 2),
                n = t[0],
                r = t[1],
                i = !0;
              return (
                Th(n) ||
                  (console.warn(
                    `Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`
                  ),
                  (i = !1)),
                (!Array.isArray(r) || !r.every(Eh)) &&
                  (console.warn(
                    `Skipped "${n}" because an invalid file extension was provided.`
                  ),
                  (i = !1)),
                i
              );
            })
            .reduce(function (e, t) {
              var n = qm(t, 2),
                r = n[0],
                i = n[1];
              return Gm(Gm({}, e), {}, Km({}, r, i));
            }, {}),
        },
      ]
    : e;
}
function Sh(e) {
  if (dh(e))
    return Object.entries(e)
      .reduce(function (e, t) {
        var n = qm(t, 2),
          r = n[0],
          i = n[1];
        return [].concat(Bm(e), [r], Bm(i));
      }, [])
      .filter(function (e) {
        return Th(e) || Eh(e);
      })
      .join(`,`);
}
function Ch(e) {
  return (
    e instanceof DOMException &&
    (e.name === `AbortError` || e.code === e.ABORT_ERR)
  );
}
function wh(e) {
  return (
    e instanceof DOMException &&
    (e.name === `SecurityError` || e.code === e.SECURITY_ERR)
  );
}
function Th(e) {
  return (
    e === `audio/*` ||
    e === `video/*` ||
    e === `image/*` ||
    e === `text/*` ||
    e === `application/*` ||
    /\w+\/[-+.\w]+/g.test(e)
  );
}
function Eh(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Dh = [`children`],
  Oh = [`open`],
  kh = [
    `refKey`,
    `role`,
    `onKeyDown`,
    `onFocus`,
    `onBlur`,
    `onClick`,
    `onDragEnter`,
    `onDragOver`,
    `onDragLeave`,
    `onDrop`,
  ],
  Ah = [`refKey`, `onChange`, `onClick`];
function jh(e) {
  return Ph(e) || Nh(e) || Lh(e) || Mh();
}
function Mh() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nh(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Ph(e) {
  if (Array.isArray(e)) return Rh(e);
}
function Fh(e, t) {
  return Bh(e) || zh(e, t) || Lh(e, t) || Ih();
}
function Ih() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lh(e, t) {
  if (e) {
    if (typeof e == `string`) return Rh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rh(e, t);
  }
}
function Rh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zh(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      s;
    try {
      for (
        n = n.call(e);
        !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        i = !0
      );
    } catch (e) {
      (a = !0), (s = e);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function Bh(e) {
  if (Array.isArray(e)) return e;
}
function Vh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Hh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Vh(Object(n), !0).forEach(function (t) {
          Uh(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Vh(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function Uh(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Wh(e, t) {
  if (e == null) return {};
  var n = Gh(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Gh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Kh = (0, b.forwardRef)(function (e, t) {
  var n = e.children,
    r = Yh(Wh(e, Dh)),
    i = r.open,
    a = Wh(r, Oh);
  return (
    (0, b.useImperativeHandle)(
      t,
      function () {
        return { open: i };
      },
      [i]
    ),
    b.createElement(b.Fragment, null, n(Hh(Hh({}, a), {}, { open: i })))
  );
});
Kh.displayName = `Dropzone`;
var qh = {
  disabled: !1,
  getFilesFromEvent: Cm,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1,
  autoFocus: !1,
};
(Kh.defaultProps = qh),
  (Kh.propTypes = {
    children: Z.default.func,
    accept: Z.default.objectOf(Z.default.arrayOf(Z.default.string)),
    multiple: Z.default.bool,
    preventDropOnDocument: Z.default.bool,
    noClick: Z.default.bool,
    noKeyboard: Z.default.bool,
    noDrag: Z.default.bool,
    noDragEventsBubbling: Z.default.bool,
    minSize: Z.default.number,
    maxSize: Z.default.number,
    maxFiles: Z.default.number,
    disabled: Z.default.bool,
    getFilesFromEvent: Z.default.func,
    onFileDialogCancel: Z.default.func,
    onFileDialogOpen: Z.default.func,
    useFsAccessApi: Z.default.bool,
    autoFocus: Z.default.bool,
    onDragEnter: Z.default.func,
    onDragLeave: Z.default.func,
    onDragOver: Z.default.func,
    onDrop: Z.default.func,
    onDropAccepted: Z.default.func,
    onDropRejected: Z.default.func,
    onError: Z.default.func,
    validator: Z.default.func,
  });
var Jh = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  isDragGlobal: !1,
  acceptedFiles: [],
  fileRejections: [],
};
function Yh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = Hh(Hh({}, qh), e),
    n = t.accept,
    r = t.disabled,
    i = t.getFilesFromEvent,
    a = t.maxSize,
    o = t.minSize,
    s = t.multiple,
    c = t.maxFiles,
    l = t.onDragEnter,
    u = t.onDragLeave,
    d = t.onDragOver,
    f = t.onDrop,
    p = t.onDropAccepted,
    m = t.onDropRejected,
    h = t.onFileDialogCancel,
    g = t.onFileDialogOpen,
    _ = t.useFsAccessApi,
    v = t.autoFocus,
    y = t.preventDropOnDocument,
    x = t.noClick,
    S = t.noKeyboard,
    C = t.noDrag,
    w = t.noDragEventsBubbling,
    ee = t.onError,
    te = t.validator,
    ne = (0, b.useMemo)(
      function () {
        return Sh(n);
      },
      [n]
    ),
    re = (0, b.useMemo)(
      function () {
        return xh(n);
      },
      [n]
    ),
    T = (0, b.useMemo)(
      function () {
        return typeof g == `function` ? g : Zh;
      },
      [g]
    ),
    ie = (0, b.useMemo)(
      function () {
        return typeof h == `function` ? h : Zh;
      },
      [h]
    ),
    E = (0, b.useRef)(null),
    ae = (0, b.useRef)(null),
    oe = Fh((0, b.useReducer)(Xh, Jh), 2),
    se = oe[0],
    D = oe[1],
    O = se.isFocused,
    k = se.isFileDialogActive,
    ce = (0, b.useRef)(
      typeof window < `u` && window.isSecureContext && _ && bh()
    ),
    le = function () {
      !ce.current &&
        k &&
        setTimeout(function () {
          ae.current &&
            (ae.current.files.length || (D({ type: `closeDialog` }), ie()));
        }, 300);
    };
  (0, b.useEffect)(
    function () {
      return (
        window.addEventListener(`focus`, le, !1),
        function () {
          window.removeEventListener(`focus`, le, !1);
        }
      );
    },
    [ae, k, ie, ce]
  );
  var ue = (0, b.useRef)([]),
    de = (0, b.useRef)([]),
    fe = function (e) {
      (E.current && E.current.contains(e.target)) ||
        (e.preventDefault(), (ue.current = []));
    };
  (0, b.useEffect)(
    function () {
      return (
        y &&
          (document.addEventListener(`dragover`, hh, !1),
          document.addEventListener(`drop`, fe, !1)),
        function () {
          y &&
            (document.removeEventListener(`dragover`, hh),
            document.removeEventListener(`drop`, fe));
        }
      );
    },
    [E, y]
  ),
    (0, b.useEffect)(
      function () {
        var e = function (e) {
            (de.current = [].concat(jh(de.current), [e.target])),
              mh(e) && D({ isDragGlobal: !0, type: `setDragGlobal` });
          },
          t = function (e) {
            (de.current = de.current.filter(function (t) {
              return t !== e.target && t !== null;
            })),
              !(de.current.length > 0) &&
                D({ isDragGlobal: !1, type: `setDragGlobal` });
          },
          n = function () {
            (de.current = []), D({ isDragGlobal: !1, type: `setDragGlobal` });
          },
          r = function () {
            (de.current = []), D({ isDragGlobal: !1, type: `setDragGlobal` });
          };
        return (
          document.addEventListener(`dragenter`, e, !1),
          document.addEventListener(`dragleave`, t, !1),
          document.addEventListener(`dragend`, n, !1),
          document.addEventListener(`drop`, r, !1),
          function () {
            document.removeEventListener(`dragenter`, e),
              document.removeEventListener(`dragleave`, t),
              document.removeEventListener(`dragend`, n),
              document.removeEventListener(`drop`, r);
          }
        );
      },
      [E]
    ),
    (0, b.useEffect)(
      function () {
        return !r && v && E.current && E.current.focus(), function () {};
      },
      [E, v, r]
    );
  var A = (0, b.useCallback)(
      function (e) {
        ee ? ee(e) : console.error(e);
      },
      [ee]
    ),
    pe = (0, b.useCallback)(
      function (e) {
        e.preventDefault(),
          e.persist(),
          Ee(e),
          (ue.current = [].concat(jh(ue.current), [e.target])),
          mh(e) &&
            Promise.resolve(i(e))
              .then(function (t) {
                if (!(ph(e) && !w)) {
                  var n = t.length,
                    r =
                      n > 0 &&
                      fh({
                        files: t,
                        accept: ne,
                        minSize: o,
                        maxSize: a,
                        multiple: s,
                        maxFiles: c,
                        validator: te,
                      });
                  D({
                    isDragAccept: r,
                    isDragReject: n > 0 && !r,
                    isDragActive: !0,
                    type: `setDraggedFiles`,
                  }),
                    l && l(e);
                }
              })
              .catch(function (e) {
                return A(e);
              });
      },
      [i, l, A, w, ne, o, a, s, c, te]
    ),
    me = (0, b.useCallback)(
      function (e) {
        e.preventDefault(), e.persist(), Ee(e);
        var t = mh(e);
        if (t && e.dataTransfer)
          try {
            e.dataTransfer.dropEffect = `copy`;
          } catch {}
        return t && d && d(e), !1;
      },
      [d, w]
    ),
    he = (0, b.useCallback)(
      function (e) {
        e.preventDefault(), e.persist(), Ee(e);
        var t = ue.current.filter(function (e) {
            return E.current && E.current.contains(e);
          }),
          n = t.indexOf(e.target);
        n !== -1 && t.splice(n, 1),
          (ue.current = t),
          !(t.length > 0) &&
            (D({
              type: `setDraggedFiles`,
              isDragActive: !1,
              isDragAccept: !1,
              isDragReject: !1,
            }),
            mh(e) && u && u(e));
      },
      [E, u, w]
    ),
    ge = (0, b.useCallback)(
      function (e, t) {
        var n = [],
          r = [];
        e.forEach(function (e) {
          var t = Fh(lh(e, ne), 2),
            i = t[0],
            s = t[1],
            c = Fh(uh(e, o, a), 2),
            l = c[0],
            u = c[1],
            d = te ? te(e) : null;
          if (i && l && !d) n.push(e);
          else {
            var f = [s, u];
            d && (f = f.concat(d)),
              r.push({
                file: e,
                errors: f.filter(function (e) {
                  return e;
                }),
              });
          }
        }),
          ((!s && n.length > 1) || (s && c >= 1 && n.length > c)) &&
            (n.forEach(function (e) {
              r.push({ file: e, errors: [sh] });
            }),
            n.splice(0)),
          D({ acceptedFiles: n, fileRejections: r, type: `setFiles` }),
          f && f(n, r, t),
          r.length > 0 && m && m(r, t),
          n.length > 0 && p && p(n, t);
      },
      [D, s, ne, o, a, c, f, p, m, te]
    ),
    _e = (0, b.useCallback)(
      function (e) {
        e.preventDefault(),
          e.persist(),
          Ee(e),
          (ue.current = []),
          mh(e) &&
            Promise.resolve(i(e))
              .then(function (t) {
                (ph(e) && !w) || ge(t, e);
              })
              .catch(function (e) {
                return A(e);
              }),
          D({ type: `reset` });
      },
      [i, ge, A, w]
    ),
    ve = (0, b.useCallback)(
      function () {
        if (ce.current) {
          D({ type: `openDialog` }), T();
          var e = { multiple: s, types: re };
          window
            .showOpenFilePicker(e)
            .then(function (e) {
              return i(e);
            })
            .then(function (e) {
              ge(e, null), D({ type: `closeDialog` });
            })
            .catch(function (e) {
              Ch(e)
                ? (ie(e), D({ type: `closeDialog` }))
                : wh(e)
                ? ((ce.current = !1),
                  ae.current
                    ? ((ae.current.value = null), ae.current.click())
                    : A(
                        Error(
                          `Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.`
                        )
                      ))
                : A(e);
            });
          return;
        }
        ae.current &&
          (D({ type: `openDialog` }),
          T(),
          (ae.current.value = null),
          ae.current.click());
      },
      [D, T, ie, _, ge, A, re, s]
    ),
    ye = (0, b.useCallback)(
      function (e) {
        !E.current ||
          !E.current.isEqualNode(e.target) ||
          ((e.key === ` ` ||
            e.key === `Enter` ||
            e.keyCode === 32 ||
            e.keyCode === 13) &&
            (e.preventDefault(), ve()));
      },
      [E, ve]
    ),
    be = (0, b.useCallback)(function () {
      D({ type: `focus` });
    }, []),
    xe = (0, b.useCallback)(function () {
      D({ type: `blur` });
    }, []),
    Se = (0, b.useCallback)(
      function () {
        x || (vh() ? setTimeout(ve, 0) : ve());
      },
      [x, ve]
    ),
    Ce = function (e) {
      return r ? null : e;
    },
    we = function (e) {
      return S ? null : Ce(e);
    },
    Te = function (e) {
      return C ? null : Ce(e);
    },
    Ee = function (e) {
      w && e.stopPropagation();
    },
    De = (0, b.useMemo)(
      function () {
        return function () {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            t = e.refKey,
            n = t === void 0 ? `ref` : t,
            i = e.role,
            a = e.onKeyDown,
            o = e.onFocus,
            s = e.onBlur,
            c = e.onClick,
            l = e.onDragEnter,
            u = e.onDragOver,
            d = e.onDragLeave,
            f = e.onDrop,
            p = Wh(e, kh);
          return Hh(
            Hh(
              Uh(
                {
                  onKeyDown: we(yh(a, ye)),
                  onFocus: we(yh(o, be)),
                  onBlur: we(yh(s, xe)),
                  onClick: Ce(yh(c, Se)),
                  onDragEnter: Te(yh(l, pe)),
                  onDragOver: Te(yh(u, me)),
                  onDragLeave: Te(yh(d, he)),
                  onDrop: Te(yh(f, _e)),
                  role: typeof i == `string` && i !== `` ? i : `presentation`,
                },
                n,
                E
              ),
              !r && !S ? { tabIndex: 0 } : {}
            ),
            p
          );
        };
      },
      [E, ye, be, xe, Se, pe, me, he, _e, S, C, r]
    ),
    Oe = (0, b.useCallback)(function (e) {
      e.stopPropagation();
    }, []),
    ke = (0, b.useMemo)(
      function () {
        return function () {
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            t = e.refKey,
            n = t === void 0 ? `ref` : t,
            r = e.onChange,
            i = e.onClick,
            a = Wh(e, Ah);
          return Hh(
            Hh(
              {},
              Uh(
                {
                  accept: ne,
                  multiple: s,
                  type: `file`,
                  style: {
                    border: 0,
                    clip: `rect(0, 0, 0, 0)`,
                    clipPath: `inset(50%)`,
                    height: `1px`,
                    margin: `0 -1px -1px 0`,
                    overflow: `hidden`,
                    padding: 0,
                    position: `absolute`,
                    width: `1px`,
                    whiteSpace: `nowrap`,
                  },
                  onChange: Ce(yh(r, _e)),
                  onClick: Ce(yh(i, Oe)),
                  tabIndex: -1,
                },
                n,
                ae
              )
            ),
            a
          );
        };
      },
      [ae, n, s, _e, r]
    );
  return Hh(
    Hh({}, se),
    {},
    {
      isFocused: O && !r,
      getRootProps: De,
      getInputProps: ke,
      rootRef: E,
      inputRef: ae,
      open: Ce(ve),
    }
  );
}
function Xh(e, t) {
  switch (t.type) {
    case `focus`:
      return Hh(Hh({}, e), {}, { isFocused: !0 });
    case `blur`:
      return Hh(Hh({}, e), {}, { isFocused: !1 });
    case `openDialog`:
      return Hh(Hh({}, Jh), {}, { isFileDialogActive: !0 });
    case `closeDialog`:
      return Hh(Hh({}, e), {}, { isFileDialogActive: !1 });
    case `setDraggedFiles`:
      return Hh(
        Hh({}, e),
        {},
        {
          isDragActive: t.isDragActive,
          isDragAccept: t.isDragAccept,
          isDragReject: t.isDragReject,
        }
      );
    case `setFiles`:
      return Hh(
        Hh({}, e),
        {},
        {
          acceptedFiles: t.acceptedFiles,
          fileRejections: t.fileRejections,
          isDragReject: !1,
        }
      );
    case `setDragGlobal`:
      return Hh(Hh({}, e), {}, { isDragGlobal: t.isDragGlobal });
    case `reset`:
      return Hh({}, Jh);
    default:
      return e;
  }
}
function Zh() {}
function Qh(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var { toString: $h } = Object.prototype,
  { getPrototypeOf: eg } = Object,
  { iterator: tg, toStringTag: ng } = Symbol,
  rg = ((e) => (t) => {
    let n = $h.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ig = (e) => ((e = e.toLowerCase()), (t) => rg(t) === e),
  ag = (e) => (t) => typeof t === e,
  { isArray: og } = Array,
  sg = ag(`undefined`);
function cg(e) {
  return (
    e !== null &&
    !sg(e) &&
    e.constructor !== null &&
    !sg(e.constructor) &&
    fg(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
var lg = ig(`ArrayBuffer`);
function ug(e) {
  let t;
  return (
    (t =
      typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && lg(e.buffer)),
    t
  );
}
var dg = ag(`string`),
  fg = ag(`function`),
  pg = ag(`number`),
  mg = (e) => typeof e == `object` && !!e,
  hg = (e) => e === !0 || e === !1,
  gg = (e) => {
    if (rg(e) !== `object`) return !1;
    let t = eg(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(ng in e) &&
      !(tg in e)
    );
  },
  _g = (e) => {
    if (!mg(e) || cg(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  vg = ig(`Date`),
  yg = ig(`File`),
  bg = (e) => !!(e && e.uri !== void 0),
  xg = (e) => e && e.getParts !== void 0,
  Sg = ig(`Blob`),
  Cg = ig(`FileList`),
  wg = (e) => mg(e) && fg(e.pipe);
function Tg() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof self < `u`
    ? self
    : typeof window < `u`
    ? window
    : typeof global < `u`
    ? global
    : {};
}
var Eg = Tg(),
  Dg = Eg.FormData === void 0 ? void 0 : Eg.FormData,
  Og = (e) => {
    let t;
    return (
      e &&
      ((Dg && e instanceof Dg) ||
        (fg(e.append) &&
          ((t = rg(e)) === `formdata` ||
            (t === `object` &&
              fg(e.toString) &&
              e.toString() === `[object FormData]`))))
    );
  },
  kg = ig(`URLSearchParams`),
  [Ag, jg, Mg, Ng] = [`ReadableStream`, `Request`, `Response`, `Headers`].map(
    ig
  ),
  Pg = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``);
function Fg(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e == null) return;
  let r, i;
  if ((typeof e != `object` && (e = [e]), og(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    if (cg(e)) return;
    let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length,
      o;
    for (r = 0; r < a; r++) (o = i[r]), t.call(null, e[o], o, e);
  }
}
function Ig(e, t) {
  if (cg(e)) return null;
  t = t.toLowerCase();
  let n = Object.keys(e),
    r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
var Lg =
    typeof globalThis < `u`
      ? globalThis
      : typeof self < `u`
      ? self
      : typeof window < `u`
      ? window
      : global,
  Rg = (e) => !sg(e) && e !== Lg;
function zg() {
  let { caseless: e, skipUndefined: t } = (Rg(this) && this) || {},
    n = {},
    r = (r, i) => {
      if (i === `__proto__` || i === `constructor` || i === `prototype`) return;
      let a = (e && Ig(n, i)) || i;
      gg(n[a]) && gg(r)
        ? (n[a] = zg(n[a], r))
        : gg(r)
        ? (n[a] = zg({}, r))
        : og(r)
        ? (n[a] = r.slice())
        : (!t || !sg(r)) && (n[a] = r);
    };
  for (let e = 0, t = arguments.length; e < t; e++)
    arguments[e] && Fg(arguments[e], r);
  return n;
}
var Bg = (e, t, n, { allOwnKeys: r } = {}) => (
    Fg(
      t,
      (t, r) => {
        n && fg(t)
          ? Object.defineProperty(e, r, {
              value: Qh(t, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, r, {
              value: t,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Vg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Hg = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, `constructor`, {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, `super`, { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Ug = (e, t, n, r) => {
    let i,
      a,
      o,
      s = {};
    if (((t ||= {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        (o = i[a]), (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0));
      e = n !== !1 && eg(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Wg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    let r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Gg = (e) => {
    if (!e) return null;
    if (og(e)) return e;
    let t = e.length;
    if (!pg(t)) return null;
    let n = Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Kg = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < `u` && eg(Uint8Array)),
  qg = (e, t) => {
    let n = (e && e[tg]).call(e),
      r;
    for (; (r = n.next()) && !r.done; ) {
      let n = r.value;
      t.call(e, n[0], n[1]);
    }
  },
  Jg = (e, t) => {
    let n,
      r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Yg = ig(`HTMLFormElement`),
  Xg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
      return t.toUpperCase() + n;
    }),
  Zg = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Qg = ig(`RegExp`),
  $g = (e, t) => {
    let n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Fg(n, (n, i) => {
      let a;
      (a = t(n, i, e)) !== !1 && (r[i] = a || n);
    }),
      Object.defineProperties(e, r);
  },
  e_ = (e) => {
    $g(e, (t, n) => {
      if (fg(e) && [`arguments`, `caller`, `callee`].indexOf(n) !== -1)
        return !1;
      let r = e[n];
      if (fg(r)) {
        if (((t.enumerable = !1), `writable` in t)) {
          t.writable = !1;
          return;
        }
        t.set ||= () => {
          throw Error(`Can not rewrite read-only method '` + n + `'`);
        };
      }
    });
  },
  t_ = (e, t) => {
    let n = {},
      r = (e) => {
        e.forEach((e) => {
          n[e] = !0;
        });
      };
    return og(e) ? r(e) : r(String(e).split(t)), n;
  },
  n_ = () => {},
  r_ = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function i_(e) {
  return !!(e && fg(e.append) && e[ng] === `FormData` && e[tg]);
}
var a_ = (e) => {
    let t = Array(10),
      n = (e, r) => {
        if (mg(e)) {
          if (t.indexOf(e) >= 0) return;
          if (cg(e)) return e;
          if (!(`toJSON` in e)) {
            t[r] = e;
            let i = og(e) ? [] : {};
            return (
              Fg(e, (e, t) => {
                let a = n(e, r + 1);
                !sg(a) && (i[t] = a);
              }),
              (t[r] = void 0),
              i
            );
          }
        }
        return e;
      };
    return n(e, 0);
  },
  o_ = ig(`AsyncFunction`),
  s_ = (e) => e && (mg(e) || fg(e)) && fg(e.then) && fg(e.catch),
  c_ = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((e, t) => (
          Lg.addEventListener(
            `message`,
            ({ source: n, data: r }) => {
              n === Lg && r === e && t.length && t.shift()();
            },
            !1
          ),
          (n) => {
            t.push(n), Lg.postMessage(e, `*`);
          }
        ))(`axios@${Math.random()}`, [])
      : (e) => setTimeout(e))(
    typeof setImmediate == `function`,
    fg(Lg.postMessage)
  ),
  Q = {
    isArray: og,
    isArrayBuffer: lg,
    isBuffer: cg,
    isFormData: Og,
    isArrayBufferView: ug,
    isString: dg,
    isNumber: pg,
    isBoolean: hg,
    isObject: mg,
    isPlainObject: gg,
    isEmptyObject: _g,
    isReadableStream: Ag,
    isRequest: jg,
    isResponse: Mg,
    isHeaders: Ng,
    isUndefined: sg,
    isDate: vg,
    isFile: yg,
    isReactNativeBlob: bg,
    isReactNative: xg,
    isBlob: Sg,
    isRegExp: Qg,
    isFunction: fg,
    isStream: wg,
    isURLSearchParams: kg,
    isTypedArray: Kg,
    isFileList: Cg,
    forEach: Fg,
    merge: zg,
    extend: Bg,
    trim: Pg,
    stripBOM: Vg,
    inherits: Hg,
    toFlatObject: Ug,
    kindOf: rg,
    kindOfTest: ig,
    endsWith: Wg,
    toArray: Gg,
    forEachEntry: qg,
    matchAll: Jg,
    isHTMLForm: Yg,
    hasOwnProperty: Zg,
    hasOwnProp: Zg,
    reduceDescriptors: $g,
    freezeMethods: e_,
    toObjectSet: t_,
    toCamelCase: Xg,
    noop: n_,
    toFiniteNumber: r_,
    findKey: Ig,
    global: Lg,
    isContextDefined: Rg,
    isSpecCompliantForm: i_,
    toJSONObject: a_,
    isAsyncFn: o_,
    isThenable: s_,
    setImmediate: c_,
    asap:
      typeof queueMicrotask < `u`
        ? queueMicrotask.bind(Lg)
        : (typeof process < `u` && process.nextTick) || c_,
    isIterable: (e) => e != null && fg(e[tg]),
  },
  $ = class e extends Error {
    static from(t, n, r, i, a, o) {
      let s = new e(t.message, n || t.code, r, i, a);
      return (
        (s.cause = t),
        (s.name = t.name),
        t.status != null && s.status == null && (s.status = t.status),
        o && Object.assign(s, o),
        s
      );
    }
    constructor(e, t, n, r, i) {
      super(e),
        Object.defineProperty(this, `message`, {
          value: e,
          enumerable: !0,
          writable: !0,
          configurable: !0,
        }),
        (this.name = `AxiosError`),
        (this.isAxiosError = !0),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && ((this.response = i), (this.status = i.status));
    }
    toJSON() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Q.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    }
  };
($.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`),
  ($.ERR_BAD_OPTION = `ERR_BAD_OPTION`),
  ($.ECONNABORTED = `ECONNABORTED`),
  ($.ETIMEDOUT = `ETIMEDOUT`),
  ($.ERR_NETWORK = `ERR_NETWORK`),
  ($.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`),
  ($.ERR_DEPRECATED = `ERR_DEPRECATED`),
  ($.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`),
  ($.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`),
  ($.ERR_CANCELED = `ERR_CANCELED`),
  ($.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`),
  ($.ERR_INVALID_URL = `ERR_INVALID_URL`);
function l_(e) {
  return Q.isPlainObject(e) || Q.isArray(e);
}
function u_(e) {
  return Q.endsWith(e, `[]`) ? e.slice(0, -2) : e;
}
function d_(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return (e = u_(e)), !n && t ? `[` + e + `]` : e;
        })
        .join(n ? `.` : ``)
    : t;
}
function f_(e) {
  return Q.isArray(e) && !e.some(l_);
}
var p_ = Q.toFlatObject(Q, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function m_(e, t, n) {
  if (!Q.isObject(e)) throw TypeError(`target must be an object`);
  (t ||= new FormData()),
    (n = Q.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (e, t) {
        return !Q.isUndefined(t[e]);
      }
    ));
  let r = n.metaTokens,
    i = n.visitor || l,
    a = n.dots,
    o = n.indexes,
    s = (n.Blob || (typeof Blob < `u` && Blob)) && Q.isSpecCompliantForm(t);
  if (!Q.isFunction(i)) throw TypeError(`visitor must be a function`);
  function c(e) {
    if (e === null) return ``;
    if (Q.isDate(e)) return e.toISOString();
    if (Q.isBoolean(e)) return e.toString();
    if (!s && Q.isBlob(e))
      throw new $(`Blob is not supported. Use a Buffer instead.`);
    return Q.isArrayBuffer(e) || Q.isTypedArray(e)
      ? s && typeof Blob == `function`
        ? new Blob([e])
        : Buffer.from(e)
      : e;
  }
  function l(e, n, i) {
    let s = e;
    if (Q.isReactNative(t) && Q.isReactNativeBlob(e))
      return t.append(d_(i, n, a), c(e)), !1;
    if (e && !i && typeof e == `object`) {
      if (Q.endsWith(n, `{}`))
        (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
      else if (
        (Q.isArray(e) && f_(e)) ||
        ((Q.isFileList(e) || Q.endsWith(n, `[]`)) && (s = Q.toArray(e)))
      )
        return (
          (n = u_(n)),
          s.forEach(function (e, r) {
            !(Q.isUndefined(e) || e === null) &&
              t.append(
                o === !0 ? d_([n], r, a) : o === null ? n : n + `[]`,
                c(e)
              );
          }),
          !1
        );
    }
    return l_(e) ? !0 : (t.append(d_(i, n, a), c(e)), !1);
  }
  let u = [],
    d = Object.assign(p_, {
      defaultVisitor: l,
      convertValue: c,
      isVisitable: l_,
    });
  function f(e, n) {
    if (!Q.isUndefined(e)) {
      if (u.indexOf(e) !== -1)
        throw Error(`Circular reference detected in ` + n.join(`.`));
      u.push(e),
        Q.forEach(e, function (e, r) {
          (!(Q.isUndefined(e) || e === null) &&
            i.call(t, e, Q.isString(r) ? r.trim() : r, n, d)) === !0 &&
            f(e, n ? n.concat(r) : [r]);
        }),
        u.pop();
    }
  }
  if (!Q.isObject(e)) throw TypeError(`data must be an object`);
  return f(e), t;
}
function h_(e) {
  let t = {
    "!": `%21`,
    "'": `%27`,
    "(": `%28`,
    ")": `%29`,
    "~": `%7E`,
    "%20": `+`,
    "%00": `\0`,
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
    return t[e];
  });
}
function g_(e, t) {
  (this._pairs = []), e && m_(e, this, t);
}
var __ = g_.prototype;
(__.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (__.toString = function (e) {
    let t = e
      ? function (t) {
          return e.call(this, t, h_);
        }
      : h_;
    return this._pairs
      .map(function (e) {
        return t(e[0]) + `=` + t(e[1]);
      }, ``)
      .join(`&`);
  });
function v_(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, `:`)
    .replace(/%24/g, `$`)
    .replace(/%2C/gi, `,`)
    .replace(/%20/g, `+`);
}
function y_(e, t, n) {
  if (!t) return e;
  let r = (n && n.encode) || v_,
    i = Q.isFunction(n) ? { serialize: n } : n,
    a = i && i.serialize,
    o;
  if (
    ((o = a
      ? a(t, i)
      : Q.isURLSearchParams(t)
      ? t.toString()
      : new g_(t, i).toString(r)),
    o)
  ) {
    let t = e.indexOf(`#`);
    t !== -1 && (e = e.slice(0, t)),
      (e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o);
  }
  return e;
}
var b_ = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers &&= [];
    }
    forEach(e) {
      Q.forEach(this.handlers, function (t) {
        t !== null && e(t);
      });
    }
  },
  x_ = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  S_ = {
    isBrowser: !0,
    classes: {
      URLSearchParams: typeof URLSearchParams < `u` ? URLSearchParams : g_,
      FormData: typeof FormData < `u` ? FormData : null,
      Blob: typeof Blob < `u` ? Blob : null,
    },
    protocols: [`http`, `https`, `file`, `blob`, `url`, `data`],
  },
  C_ = c({
    hasBrowserEnv: () => w_,
    hasStandardBrowserEnv: () => E_,
    hasStandardBrowserWebWorkerEnv: () => D_,
    navigator: () => T_,
    origin: () => O_,
  }),
  w_ = typeof window < `u` && typeof document < `u`,
  T_ = (typeof navigator == `object` && navigator) || void 0,
  E_ =
    w_ &&
    (!T_ || [`ReactNative`, `NativeScript`, `NS`].indexOf(T_.product) < 0),
  D_ =
    typeof WorkerGlobalScope < `u` &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == `function`,
  O_ = (w_ && window.location.href) || `http://localhost`,
  k_ = { ...C_, ...S_ };
function A_(e, t) {
  return m_(e, new k_.classes.URLSearchParams(), {
    visitor: function (e, t, n, r) {
      return k_.isNode && Q.isBuffer(e)
        ? (this.append(t, e.toString(`base64`)), !1)
        : r.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function j_(e) {
  return Q.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
    e[0] === `[]` ? `` : e[1] || e[0]
  );
}
function M_(e) {
  let t = {},
    n = Object.keys(e),
    r,
    i = n.length,
    a;
  for (r = 0; r < i; r++) (a = n[r]), (t[a] = e[a]);
  return t;
}
function N_(e) {
  function t(e, n, r, i) {
    let a = e[i++];
    if (a === `__proto__`) return !0;
    let o = Number.isFinite(+a),
      s = i >= e.length;
    return (
      (a = !a && Q.isArray(r) ? r.length : a),
      s
        ? (Q.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !o)
        : ((!r[a] || !Q.isObject(r[a])) && (r[a] = []),
          t(e, n, r[a], i) && Q.isArray(r[a]) && (r[a] = M_(r[a])),
          !o)
    );
  }
  if (Q.isFormData(e) && Q.isFunction(e.entries)) {
    let n = {};
    return (
      Q.forEachEntry(e, (e, r) => {
        t(j_(e), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function P_(e, t, n) {
  if (Q.isString(e))
    try {
      return (t || JSON.parse)(e), Q.trim(e);
    } catch (e) {
      if (e.name !== `SyntaxError`) throw e;
    }
  return (n || JSON.stringify)(e);
}
var F_ = {
  transitional: x_,
  adapter: [`xhr`, `http`, `fetch`],
  transformRequest: [
    function (e, t) {
      let n = t.getContentType() || ``,
        r = n.indexOf(`application/json`) > -1,
        i = Q.isObject(e);
      if ((i && Q.isHTMLForm(e) && (e = new FormData(e)), Q.isFormData(e)))
        return r ? JSON.stringify(N_(e)) : e;
      if (
        Q.isArrayBuffer(e) ||
        Q.isBuffer(e) ||
        Q.isStream(e) ||
        Q.isFile(e) ||
        Q.isBlob(e) ||
        Q.isReadableStream(e)
      )
        return e;
      if (Q.isArrayBufferView(e)) return e.buffer;
      if (Q.isURLSearchParams(e))
        return (
          t.setContentType(
            `application/x-www-form-urlencoded;charset=utf-8`,
            !1
          ),
          e.toString()
        );
      let a;
      if (i) {
        if (n.indexOf(`application/x-www-form-urlencoded`) > -1)
          return A_(e, this.formSerializer).toString();
        if ((a = Q.isFileList(e)) || n.indexOf(`multipart/form-data`) > -1) {
          let t = this.env && this.env.FormData;
          return m_(
            a ? { "files[]": e } : e,
            t && new t(),
            this.formSerializer
          );
        }
      }
      return i || r ? (t.setContentType(`application/json`, !1), P_(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      let t = this.transitional || F_.transitional,
        n = t && t.forcedJSONParsing,
        r = this.responseType === `json`;
      if (Q.isResponse(e) || Q.isReadableStream(e)) return e;
      if (e && Q.isString(e) && ((n && !this.responseType) || r)) {
        let n = !(t && t.silentJSONParsing) && r;
        try {
          return JSON.parse(e, this.parseReviver);
        } catch (e) {
          if (n)
            throw e.name === `SyntaxError`
              ? $.from(e, $.ERR_BAD_RESPONSE, this, null, this.response)
              : e;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: `XSRF-TOKEN`,
  xsrfHeaderName: `X-XSRF-TOKEN`,
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: k_.classes.FormData, Blob: k_.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: `application/json, text/plain, */*`,
      "Content-Type": void 0,
    },
  },
};
Q.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`], (e) => {
  F_.headers[e] = {};
});
var I_ = Q.toObjectSet([
    `age`,
    `authorization`,
    `content-length`,
    `content-type`,
    `etag`,
    `expires`,
    `from`,
    `host`,
    `if-modified-since`,
    `if-unmodified-since`,
    `last-modified`,
    `location`,
    `max-forwards`,
    `proxy-authorization`,
    `referer`,
    `retry-after`,
    `user-agent`,
  ]),
  L_ = (e) => {
    let t = {},
      n,
      r,
      i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (e) {
            (i = e.indexOf(`:`)),
              (n = e.substring(0, i).trim().toLowerCase()),
              (r = e.substring(i + 1).trim()),
              !(!n || (t[n] && I_[n])) &&
                (n === `set-cookie`
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + `, ` + r : r));
          }),
      t
    );
  },
  R_ = Symbol(`internals`),
  z_ = (e) => !/[\r\n]/.test(e);
function B_(e, t) {
  if (!(e === !1 || e == null)) {
    if (Q.isArray(e)) {
      e.forEach((e) => B_(e, t));
      return;
    }
    if (!z_(String(e)))
      throw Error(`Invalid character in header content ["${t}"]`);
  }
}
function V_(e) {
  return e && String(e).trim().toLowerCase();
}
function H_(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13) break;
    --t;
  }
  return t === e.length ? e : e.slice(0, t);
}
function U_(e) {
  return e === !1 || e == null ? e : Q.isArray(e) ? e.map(U_) : H_(String(e));
}
function W_(e) {
  let t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
    r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
var G_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function K_(e, t, n, r, i) {
  if (Q.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), Q.isString(t))) {
    if (Q.isString(r)) return t.indexOf(r) !== -1;
    if (Q.isRegExp(r)) return r.test(t);
  }
}
function q_(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function J_(e, t) {
  let n = Q.toCamelCase(` ` + t);
  [`get`, `set`, `has`].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (e, n, i) {
        return this[r].call(this, t, e, n, i);
      },
      configurable: !0,
    });
  });
}
var Y_ = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    let r = this;
    function i(e, t, n) {
      let i = V_(t);
      if (!i) throw Error(`header name must be a non-empty string`);
      let a = Q.findKey(r, i);
      (!a || r[a] === void 0 || n === !0 || (n === void 0 && r[a] !== !1)) &&
        (B_(e, t), (r[a || t] = U_(e)));
    }
    let a = (e, t) => Q.forEach(e, (e, n) => i(e, n, t));
    if (Q.isPlainObject(e) || e instanceof this.constructor) a(e, t);
    else if (Q.isString(e) && (e = e.trim()) && !G_(e)) a(L_(e), t);
    else if (Q.isObject(e) && Q.isIterable(e)) {
      let n = {},
        r,
        i;
      for (let t of e) {
        if (!Q.isArray(t))
          throw TypeError(`Object iterator must return a key-value pair`);
        n[(i = t[0])] = (r = n[i])
          ? Q.isArray(r)
            ? [...r, t[1]]
            : [r, t[1]]
          : t[1];
      }
      a(n, t);
    } else e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (((e = V_(e)), e)) {
      let n = Q.findKey(this, e);
      if (n) {
        let e = this[n];
        if (!t) return e;
        if (t === !0) return W_(e);
        if (Q.isFunction(t)) return t.call(this, e, n);
        if (Q.isRegExp(t)) return t.exec(e);
        throw TypeError(`parser must be boolean|regexp|function`);
      }
    }
  }
  has(e, t) {
    if (((e = V_(e)), e)) {
      let n = Q.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || K_(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    let n = this,
      r = !1;
    function i(e) {
      if (((e = V_(e)), e)) {
        let i = Q.findKey(n, e);
        i && (!t || K_(n, n[i], i, t)) && (delete n[i], (r = !0));
      }
    }
    return Q.isArray(e) ? e.forEach(i) : i(e), r;
  }
  clear(e) {
    let t = Object.keys(this),
      n = t.length,
      r = !1;
    for (; n--; ) {
      let i = t[n];
      (!e || K_(this, this[i], i, e, !0)) && (delete this[i], (r = !0));
    }
    return r;
  }
  normalize(e) {
    let t = this,
      n = {};
    return (
      Q.forEach(this, (r, i) => {
        let a = Q.findKey(n, i);
        if (a) {
          (t[a] = U_(r)), delete t[i];
          return;
        }
        let o = e ? q_(i) : String(i).trim();
        o !== i && delete t[i], (t[o] = U_(r)), (n[o] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    let t = Object.create(null);
    return (
      Q.forEach(this, (n, r) => {
        n != null && n !== !1 && (t[r] = e && Q.isArray(n) ? n.join(`, `) : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + `: ` + t).join(`
`);
  }
  getSetCookie() {
    return this.get(`set-cookie`) || [];
  }
  get [Symbol.toStringTag]() {
    return `AxiosHeaders`;
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    let n = new this(e);
    return t.forEach((e) => n.set(e)), n;
  }
  static accessor(e) {
    let t = (this[R_] = this[R_] = { accessors: {} }).accessors,
      n = this.prototype;
    function r(e) {
      let r = V_(e);
      t[r] || (J_(n, e), (t[r] = !0));
    }
    return Q.isArray(e) ? e.forEach(r) : r(e), this;
  }
};
Y_.accessor([
  `Content-Type`,
  `Content-Length`,
  `Accept`,
  `Accept-Encoding`,
  `User-Agent`,
  `Authorization`,
]),
  Q.reduceDescriptors(Y_.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[n] = e;
      },
    };
  }),
  Q.freezeMethods(Y_);
function X_(e, t) {
  let n = this || F_,
    r = t || n,
    i = Y_.from(r.headers),
    a = r.data;
  return (
    Q.forEach(e, function (e) {
      a = e.call(n, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function Z_(e) {
  return !!(e && e.__CANCEL__);
}
var Q_ = class extends $ {
  constructor(e, t, n) {
    super(e ?? `canceled`, $.ERR_CANCELED, t, n),
      (this.name = `CanceledError`),
      (this.__CANCEL__ = !0);
  }
};
function $_(e, t, n) {
  let r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new $(
          `Request failed with status code ` + n.status,
          [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function ev(e) {
  let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || ``;
}
function tv(e, t) {
  e ||= 10;
  let n = Array(e),
    r = Array(e),
    i = 0,
    a = 0,
    o;
  return (
    (t = t === void 0 ? 1e3 : t),
    function (s) {
      let c = Date.now(),
        l = r[a];
      (o ||= c), (n[i] = s), (r[i] = c);
      let u = a,
        d = 0;
      for (; u !== i; ) (d += n[u++]), (u %= e);
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), c - o < t)) return;
      let f = l && c - l;
      return f ? Math.round((d * 1e3) / f) : void 0;
    }
  );
}
function nv(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    a,
    o = (t, r = Date.now()) => {
      (n = r), (i = null), (a &&= (clearTimeout(a), null)), e(...t);
    };
  return [
    (...e) => {
      let t = Date.now(),
        s = t - n;
      s >= r
        ? o(e, t)
        : ((i = e),
          (a ||= setTimeout(() => {
            (a = null), o(i);
          }, r - s)));
    },
    () => i && o(i),
  ];
}
var rv = (e, t, n = 3) => {
    let r = 0,
      i = tv(50, 250);
    return nv((n) => {
      let a = n.loaded,
        o = n.lengthComputable ? n.total : void 0,
        s = a - r,
        c = i(s),
        l = a <= o;
      (r = a),
        e({
          loaded: a,
          total: o,
          progress: o ? a / o : void 0,
          bytes: s,
          rate: c || void 0,
          estimated: c && o && l ? (o - a) / c : void 0,
          event: n,
          lengthComputable: o != null,
          [t ? `download` : `upload`]: !0,
        });
    }, n);
  },
  iv = (e, t) => {
    let n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  av =
    (e) =>
    (...t) =>
      Q.asap(() => e(...t)),
  ov = k_.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, k_.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(k_.origin),
        k_.navigator && /(msie|trident)/i.test(k_.navigator.userAgent)
      )
    : () => !0,
  sv = k_.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, a, o) {
          if (typeof document > `u`) return;
          let s = [`${e}=${encodeURIComponent(t)}`];
          Q.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`),
            Q.isString(r) && s.push(`path=${r}`),
            Q.isString(i) && s.push(`domain=${i}`),
            a === !0 && s.push(`secure`),
            Q.isString(o) && s.push(`SameSite=${o}`),
            (document.cookie = s.join(`; `));
        },
        read(e) {
          if (typeof document > `u`) return null;
          let t = document.cookie.match(RegExp(`(?:^|; )` + e + `=([^;]*)`));
          return t ? decodeURIComponent(t[1]) : null;
        },
        remove(e) {
          this.write(e, ``, Date.now() - 864e5, `/`);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function cv(e) {
  return typeof e == `string` ? /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) : !1;
}
function lv(e, t) {
  return t ? e.replace(/\/?\/$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
}
function uv(e, t, n) {
  let r = !cv(t);
  return e && (r || n == 0) ? lv(e, t) : t;
}
var dv = (e) => (e instanceof Y_ ? { ...e } : e);
function fv(e, t) {
  t ||= {};
  let n = {};
  function r(e, t, n, r) {
    return Q.isPlainObject(e) && Q.isPlainObject(t)
      ? Q.merge.call({ caseless: r }, e, t)
      : Q.isPlainObject(t)
      ? Q.merge({}, t)
      : Q.isArray(t)
      ? t.slice()
      : t;
  }
  function i(e, t, n, i) {
    if (!Q.isUndefined(t)) return r(e, t, n, i);
    if (!Q.isUndefined(e)) return r(void 0, e, n, i);
  }
  function a(e, t) {
    if (!Q.isUndefined(t)) return r(void 0, t);
  }
  function o(e, t) {
    if (!Q.isUndefined(t)) return r(void 0, t);
    if (!Q.isUndefined(e)) return r(void 0, e);
  }
  function s(n, i, a) {
    if (a in t) return r(n, i);
    if (a in e) return r(void 0, n);
  }
  let c = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (e, t, n) => i(dv(e), dv(t), n, !0),
  };
  return (
    Q.forEach(Object.keys({ ...e, ...t }), function (r) {
      if (r === `__proto__` || r === `constructor` || r === `prototype`) return;
      let a = Q.hasOwnProp(c, r) ? c[r] : i,
        o = a(e[r], t[r], r);
      (Q.isUndefined(o) && a !== s) || (n[r] = o);
    }),
    n
  );
}
var pv = (e) => {
    let t = fv({}, e),
      {
        data: n,
        withXSRFToken: r,
        xsrfHeaderName: i,
        xsrfCookieName: a,
        headers: o,
        auth: s,
      } = t;
    if (
      ((t.headers = o = Y_.from(o)),
      (t.url = y_(
        uv(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      s &&
        o.set(
          `Authorization`,
          `Basic ` +
            btoa(
              (s.username || ``) +
                `:` +
                (s.password ? unescape(encodeURIComponent(s.password)) : ``)
            )
        ),
      Q.isFormData(n))
    ) {
      if (k_.hasStandardBrowserEnv || k_.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if (Q.isFunction(n.getHeaders)) {
        let e = n.getHeaders(),
          t = [`content-type`, `content-length`];
        Object.entries(e).forEach(([e, n]) => {
          t.includes(e.toLowerCase()) && o.set(e, n);
        });
      }
    }
    if (
      k_.hasStandardBrowserEnv &&
      (r && Q.isFunction(r) && (r = r(t)), r || (r !== !1 && ov(t.url)))
    ) {
      let e = i && a && sv.read(a);
      e && o.set(i, e);
    }
    return t;
  },
  mv =
    typeof XMLHttpRequest < `u` &&
    function (e) {
      return new Promise(function (t, n) {
        let r = pv(e),
          i = r.data,
          a = Y_.from(r.headers).normalize(),
          { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r,
          l,
          u,
          d,
          f,
          p;
        function m() {
          f && f(),
            p && p(),
            r.cancelToken && r.cancelToken.unsubscribe(l),
            r.signal && r.signal.removeEventListener(`abort`, l);
        }
        let h = new XMLHttpRequest();
        h.open(r.method.toUpperCase(), r.url, !0), (h.timeout = r.timeout);
        function g() {
          if (!h) return;
          let r = Y_.from(
            `getAllResponseHeaders` in h && h.getAllResponseHeaders()
          );
          $_(
            function (e) {
              t(e), m();
            },
            function (e) {
              n(e), m();
            },
            {
              data:
                !o || o === `text` || o === `json`
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: r,
              config: e,
              request: h,
            }
          ),
            (h = null);
        }
        `onloadend` in h
          ? (h.onloadend = g)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 &&
                  !(h.responseURL && h.responseURL.indexOf(`file:`) === 0)) ||
                setTimeout(g);
            }),
          (h.onabort = function () {
            h &&= (n(new $(`Request aborted`, $.ECONNABORTED, e, h)), null);
          }),
          (h.onerror = function (t) {
            let r = new $(
              t && t.message ? t.message : `Network Error`,
              $.ERR_NETWORK,
              e,
              h
            );
            (r.event = t || null), n(r), (h = null);
          }),
          (h.ontimeout = function () {
            let t = r.timeout
                ? `timeout of ` + r.timeout + `ms exceeded`
                : `timeout exceeded`,
              i = r.transitional || x_;
            r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
              n(
                new $(
                  t,
                  i.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
                  e,
                  h
                )
              ),
              (h = null);
          }),
          i === void 0 && a.setContentType(null),
          `setRequestHeader` in h &&
            Q.forEach(a.toJSON(), function (e, t) {
              h.setRequestHeader(t, e);
            }),
          Q.isUndefined(r.withCredentials) ||
            (h.withCredentials = !!r.withCredentials),
          o && o !== `json` && (h.responseType = r.responseType),
          c && (([d, p] = rv(c, !0)), h.addEventListener(`progress`, d)),
          s &&
            h.upload &&
            (([u, f] = rv(s)),
            h.upload.addEventListener(`progress`, u),
            h.upload.addEventListener(`loadend`, f)),
          (r.cancelToken || r.signal) &&
            ((l = (t) => {
              h &&= (n(!t || t.type ? new Q_(null, e, h) : t), h.abort(), null);
            }),
            r.cancelToken && r.cancelToken.subscribe(l),
            r.signal &&
              (r.signal.aborted ? l() : r.signal.addEventListener(`abort`, l)));
        let _ = ev(r.url);
        if (_ && k_.protocols.indexOf(_) === -1) {
          n(new $(`Unsupported protocol ` + _ + `:`, $.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(i || null);
      });
    },
  hv = (e, t) => {
    let { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let n = new AbortController(),
        r,
        i = function (e) {
          if (!r) {
            (r = !0), o();
            let t = e instanceof Error ? e : this.reason;
            n.abort(
              t instanceof $ ? t : new Q_(t instanceof Error ? t.message : t)
            );
          }
        },
        a =
          t &&
          setTimeout(() => {
            (a = null), i(new $(`timeout of ${t}ms exceeded`, $.ETIMEDOUT));
          }, t),
        o = () => {
          e &&=
            (a && clearTimeout(a),
            (a = null),
            e.forEach((e) => {
              e.unsubscribe
                ? e.unsubscribe(i)
                : e.removeEventListener(`abort`, i);
            }),
            null);
        };
      e.forEach((e) => e.addEventListener(`abort`, i));
      let { signal: s } = n;
      return (s.unsubscribe = () => Q.asap(o)), s;
    }
  },
  gv = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  _v = async function* (e, t) {
    for await (let n of vv(e)) yield* gv(n, t);
  },
  vv = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    let t = e.getReader();
    try {
      for (;;) {
        let { done: e, value: n } = await t.read();
        if (e) break;
        yield n;
      }
    } finally {
      await t.cancel();
    }
  },
  yv = (e, t, n, r) => {
    let i = _v(e, t),
      a = 0,
      o,
      s = (e) => {
        o || ((o = !0), r && r(e));
      };
    return new ReadableStream(
      {
        async pull(e) {
          try {
            let { done: t, value: r } = await i.next();
            if (t) {
              s(), e.close();
              return;
            }
            let o = r.byteLength;
            n && n((a += o)), e.enqueue(new Uint8Array(r));
          } catch (e) {
            throw (s(e), e);
          }
        },
        cancel(e) {
          return s(e), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  bv = 64 * 1024,
  { isFunction: xv } = Q,
  Sv = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    Q.global
  ),
  { ReadableStream: Cv, TextEncoder: wv } = Q.global,
  Tv = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Ev = (e) => {
    e = Q.merge.call({ skipUndefined: !0 }, Sv, e);
    let { fetch: t, Request: n, Response: r } = e,
      i = t ? xv(t) : typeof fetch == `function`,
      a = xv(n),
      o = xv(r);
    if (!i) return !1;
    let s = i && xv(Cv),
      c =
        i &&
        (typeof wv == `function`
          ? (
              (e) => (t) =>
                e.encode(t)
            )(new wv())
          : async (e) => new Uint8Array(await new n(e).arrayBuffer())),
      l =
        a &&
        s &&
        Tv(() => {
          let e = !1,
            t = new Cv(),
            r = new n(k_.origin, {
              body: t,
              method: `POST`,
              get duplex() {
                return (e = !0), `half`;
              },
            }).headers.has(`Content-Type`);
          return t.cancel(), e && !r;
        }),
      u = o && s && Tv(() => Q.isReadableStream(new r(``).body)),
      d = { stream: u && ((e) => e.body) };
    i &&
      [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach((e) => {
        !d[e] &&
          (d[e] = (t, n) => {
            let r = t && t[e];
            if (r) return r.call(t);
            throw new $(
              `Response type '${e}' is not supported`,
              $.ERR_NOT_SUPPORT,
              n
            );
          });
      });
    let f = async (e) => {
        if (e == null) return 0;
        if (Q.isBlob(e)) return e.size;
        if (Q.isSpecCompliantForm(e))
          return (
            await new n(k_.origin, { method: `POST`, body: e }).arrayBuffer()
          ).byteLength;
        if (Q.isArrayBufferView(e) || Q.isArrayBuffer(e)) return e.byteLength;
        if ((Q.isURLSearchParams(e) && (e += ``), Q.isString(e)))
          return (await c(e)).byteLength;
      },
      p = async (e, t) => Q.toFiniteNumber(e.getContentLength()) ?? f(t);
    return async (e) => {
      let {
          url: i,
          method: o,
          data: s,
          signal: c,
          cancelToken: f,
          timeout: m,
          onDownloadProgress: h,
          onUploadProgress: g,
          responseType: _,
          headers: v,
          withCredentials: y = `same-origin`,
          fetchOptions: b,
        } = pv(e),
        x = t || fetch;
      _ = _ ? (_ + ``).toLowerCase() : `text`;
      let S = hv([c, f && f.toAbortSignal()], m),
        C = null,
        w =
          S &&
          S.unsubscribe &&
          (() => {
            S.unsubscribe();
          }),
        ee;
      try {
        if (
          g &&
          l &&
          o !== `get` &&
          o !== `head` &&
          (ee = await p(v, s)) !== 0
        ) {
          let e = new n(i, { method: `POST`, body: s, duplex: `half` }),
            t;
          if (
            (Q.isFormData(s) &&
              (t = e.headers.get(`content-type`)) &&
              v.setContentType(t),
            e.body)
          ) {
            let [t, n] = iv(ee, rv(av(g)));
            s = yv(e.body, bv, t, n);
          }
        }
        Q.isString(y) || (y = y ? `include` : `omit`);
        let t = a && `credentials` in n.prototype,
          c = {
            ...b,
            signal: S,
            method: o.toUpperCase(),
            headers: v.normalize().toJSON(),
            body: s,
            duplex: `half`,
            credentials: t ? y : void 0,
          };
        C = a && new n(i, c);
        let f = await (a ? x(C, b) : x(i, c)),
          m = u && (_ === `stream` || _ === `response`);
        if (u && (h || (m && w))) {
          let e = {};
          [`status`, `statusText`, `headers`].forEach((t) => {
            e[t] = f[t];
          });
          let t = Q.toFiniteNumber(f.headers.get(`content-length`)),
            [n, i] = (h && iv(t, rv(av(h), !0))) || [];
          f = new r(
            yv(f.body, bv, n, () => {
              i && i(), w && w();
            }),
            e
          );
        }
        _ ||= `text`;
        let te = await d[Q.findKey(d, _) || `text`](f, e);
        return (
          !m && w && w(),
          await new Promise((t, n) => {
            $_(t, n, {
              data: te,
              headers: Y_.from(f.headers),
              status: f.status,
              statusText: f.statusText,
              config: e,
              request: C,
            });
          })
        );
      } catch (t) {
        throw (
          (w && w(),
          t && t.name === `TypeError` && /Load failed|fetch/i.test(t.message)
            ? Object.assign(
                new $(`Network Error`, $.ERR_NETWORK, e, C, t && t.response),
                { cause: t.cause || t }
              )
            : $.from(t, t && t.code, e, C, t && t.response))
        );
      }
    };
  },
  Dv = new Map(),
  Ov = (e) => {
    let t = (e && e.env) || {},
      { fetch: n, Request: r, Response: i } = t,
      a = [r, i, n],
      o = a.length,
      s,
      c,
      l = Dv;
    for (; o--; )
      (s = a[o]),
        (c = l.get(s)),
        c === void 0 && l.set(s, (c = o ? new Map() : Ev(t))),
        (l = c);
    return c;
  };
Ov();
var kv = { http: null, xhr: mv, fetch: { get: Ov } };
Q.forEach(kv, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, `name`, { value: t });
    } catch {}
    Object.defineProperty(e, `adapterName`, { value: t });
  }
});
var Av = (e) => `- ${e}`,
  jv = (e) => Q.isFunction(e) || e === null || e === !1;
function Mv(e, t) {
  e = Q.isArray(e) ? e : [e];
  let { length: n } = e,
    r,
    i,
    a = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let n;
    if (
      ((i = r),
      !jv(r) && ((i = kv[(n = String(r)).toLowerCase()]), i === void 0))
    )
      throw new $(`Unknown adapter '${n}'`);
    if (i && (Q.isFunction(i) || (i = i.get(t)))) break;
    a[n || `#` + o] = i;
  }
  if (!i) {
    let e = Object.entries(a).map(
      ([e, t]) =>
        `adapter ${e} ` +
        (t === !1
          ? `is not supported by the environment`
          : `is not available in the build`)
    );
    throw new $(
      `There is no suitable adapter to dispatch the request ` +
        (n
          ? e.length > 1
            ? `since :
` +
              e.map(Av).join(`
`)
            : ` ` + Av(e[0])
          : `as no adapter specified`),
      `ERR_NOT_SUPPORT`
    );
  }
  return i;
}
var Nv = { getAdapter: Mv, adapters: kv };
function Pv(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Q_(null, e);
}
function Fv(e) {
  return (
    Pv(e),
    (e.headers = Y_.from(e.headers)),
    (e.data = X_.call(e, e.transformRequest)),
    [`post`, `put`, `patch`].indexOf(e.method) !== -1 &&
      e.headers.setContentType(`application/x-www-form-urlencoded`, !1),
    Nv.getAdapter(
      e.adapter || F_.adapter,
      e
    )(e).then(
      function (t) {
        return (
          Pv(e),
          (t.data = X_.call(e, e.transformResponse, t)),
          (t.headers = Y_.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          Z_(t) ||
            (Pv(e),
            t &&
              t.response &&
              ((t.response.data = X_.call(e, e.transformResponse, t.response)),
              (t.response.headers = Y_.from(t.response.headers)))),
          Promise.reject(t)
        );
      }
    )
  );
}
var Iv = `1.15.0`,
  Lv = {};
[`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
  (e, t) => {
    Lv[e] = function (n) {
      return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e;
    };
  }
);
var Rv = {};
(Lv.transitional = function (e, t, n) {
  function r(e, t) {
    return (
      `[Axios v` +
      Iv +
      `] Transitional option '` +
      e +
      `'` +
      t +
      (n ? `. ` + n : ``)
    );
  }
  return (n, i, a) => {
    if (e === !1)
      throw new $(
        r(i, ` has been removed` + (t ? ` in ` + t : ``)),
        $.ERR_DEPRECATED
      );
    return (
      t &&
        !Rv[i] &&
        ((Rv[i] = !0),
        console.warn(
          r(
            i,
            ` has been deprecated since v` +
              t +
              ` and will be removed in the near future`
          )
        )),
      e ? e(n, i, a) : !0
    );
  };
}),
  (Lv.spelling = function (e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
  });
function zv(e, t, n) {
  if (typeof e != `object`)
    throw new $(`options must be an object`, $.ERR_BAD_OPTION_VALUE);
  let r = Object.keys(e),
    i = r.length;
  for (; i-- > 0; ) {
    let a = r[i],
      o = t[a];
    if (o) {
      let t = e[a],
        n = t === void 0 || o(t, a, e);
      if (n !== !0)
        throw new $(`option ` + a + ` must be ` + n, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new $(`Unknown option ` + a, $.ERR_BAD_OPTION);
  }
}
var Bv = { assertOptions: zv, validators: Lv },
  Vv = Bv.validators,
  Hv = class {
    constructor(e) {
      (this.defaults = e || {}),
        (this.interceptors = { request: new b_(), response: new b_() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t = {};
          Error.captureStackTrace ? Error.captureStackTrace(t) : (t = Error());
          let n = (() => {
            if (!t.stack) return ``;
            let e = t.stack.indexOf(`
`);
            return e === -1 ? `` : t.stack.slice(e + 1);
          })();
          try {
            if (!e.stack) e.stack = n;
            else if (n) {
              let t = n.indexOf(`
`),
                r =
                  t === -1
                    ? -1
                    : n.indexOf(
                        `
`,
                        t + 1
                      ),
                i = r === -1 ? `` : n.slice(r + 1);
              String(e.stack).endsWith(i) ||
                (e.stack +=
                  `
` + n);
            }
          } catch {}
        }
        throw e;
      }
    }
    _request(e, t) {
      typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
        (t = fv(this.defaults, t));
      let { transitional: n, paramsSerializer: r, headers: i } = t;
      n !== void 0 &&
        Bv.assertOptions(
          n,
          {
            silentJSONParsing: Vv.transitional(Vv.boolean),
            forcedJSONParsing: Vv.transitional(Vv.boolean),
            clarifyTimeoutError: Vv.transitional(Vv.boolean),
            legacyInterceptorReqResOrdering: Vv.transitional(Vv.boolean),
          },
          !1
        ),
        r != null &&
          (Q.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Bv.assertOptions(
                r,
                { encode: Vv.function, serialize: Vv.function },
                !0
              )),
        t.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls === void 0
            ? (t.allowAbsoluteUrls = !0)
            : (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)),
        Bv.assertOptions(
          t,
          {
            baseUrl: Vv.spelling(`baseURL`),
            withXsrfToken: Vv.spelling(`withXSRFToken`),
          },
          !0
        ),
        (t.method = (t.method || this.defaults.method || `get`).toLowerCase());
      let a = i && Q.merge(i.common, i[t.method]);
      i &&
        Q.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `common`],
          (e) => {
            delete i[e];
          }
        ),
        (t.headers = Y_.concat(a, i));
      let o = [],
        s = !0;
      this.interceptors.request.forEach(function (e) {
        if (typeof e.runWhen == `function` && e.runWhen(t) === !1) return;
        s &&= e.synchronous;
        let n = t.transitional || x_;
        n && n.legacyInterceptorReqResOrdering
          ? o.unshift(e.fulfilled, e.rejected)
          : o.push(e.fulfilled, e.rejected);
      });
      let c = [];
      this.interceptors.response.forEach(function (e) {
        c.push(e.fulfilled, e.rejected);
      });
      let l,
        u = 0,
        d;
      if (!s) {
        let e = [Fv.bind(this), void 0];
        for (
          e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t);
          u < d;

        )
          l = l.then(e[u++], e[u++]);
        return l;
      }
      d = o.length;
      let f = t;
      for (; u < d; ) {
        let e = o[u++],
          t = o[u++];
        try {
          f = e(f);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        l = Fv.call(this, f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (u = 0, d = c.length; u < d; ) l = l.then(c[u++], c[u++]);
      return l;
    }
    getUri(e) {
      return (
        (e = fv(this.defaults, e)),
        y_(
          uv(e.baseURL, e.url, e.allowAbsoluteUrls),
          e.params,
          e.paramsSerializer
        )
      );
    }
  };
Q.forEach([`delete`, `get`, `head`, `options`], function (e) {
  Hv.prototype[e] = function (t, n) {
    return this.request(
      fv(n || {}, { method: e, url: t, data: (n || {}).data })
    );
  };
}),
  Q.forEach([`post`, `put`, `patch`], function (e) {
    function t(t) {
      return function (n, r, i) {
        return this.request(
          fv(i || {}, {
            method: e,
            headers: t ? { "Content-Type": `multipart/form-data` } : {},
            url: n,
            data: r,
          })
        );
      };
    }
    (Hv.prototype[e] = t()), (Hv.prototype[e + `Form`] = t(!0));
  });
var Uv = class e {
  constructor(e) {
    if (typeof e != `function`) throw TypeError(`executor must be a function.`);
    let t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    let n = this;
    this.promise.then((e) => {
      if (!n._listeners) return;
      let t = n._listeners.length;
      for (; t-- > 0; ) n._listeners[t](e);
      n._listeners = null;
    }),
      (this.promise.then = (e) => {
        let t,
          r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
        return (
          (r.cancel = function () {
            n.unsubscribe(t);
          }),
          r
        );
      }),
      e(function (e, r, i) {
        n.reason || ((n.reason = new Q_(e, r, i)), t(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    let t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    let e = new AbortController(),
      t = (t) => {
        e.abort(t);
      };
    return (
      this.subscribe(t),
      (e.signal.unsubscribe = () => this.unsubscribe(t)),
      e.signal
    );
  }
  static source() {
    let t;
    return {
      token: new e(function (e) {
        t = e;
      }),
      cancel: t,
    };
  }
};
function Wv(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
function Gv(e) {
  return Q.isObject(e) && e.isAxiosError === !0;
}
var Kv = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Kv).forEach(([e, t]) => {
  Kv[t] = e;
});
function qv(e) {
  let t = new Hv(e),
    n = Qh(Hv.prototype.request, t);
  return (
    Q.extend(n, Hv.prototype, t, { allOwnKeys: !0 }),
    Q.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (t) {
      return qv(fv(e, t));
    }),
    n
  );
}
var Jv = qv(F_);
(Jv.Axios = Hv),
  (Jv.CanceledError = Q_),
  (Jv.CancelToken = Uv),
  (Jv.isCancel = Z_),
  (Jv.VERSION = Iv),
  (Jv.toFormData = m_),
  (Jv.AxiosError = $),
  (Jv.Cancel = Jv.CanceledError),
  (Jv.all = function (e) {
    return Promise.all(e);
  }),
  (Jv.spread = Wv),
  (Jv.isAxiosError = Gv),
  (Jv.mergeConfig = fv),
  (Jv.AxiosHeaders = Y_),
  (Jv.formToJSON = (e) => N_(Q.isHTMLForm(e) ? new FormData(e) : e)),
  (Jv.getAdapter = Nv.getAdapter),
  (Jv.HttpStatusCode = Kv),
  (Jv.default = Jv);
var Yv = Jv.create({
  baseURL: `http://localhost:5000/api`,
  timeout: 6e4,
  headers: { Accept: `application/json` },
});
Yv.interceptors.request.use(
  (e) => e,
  (e) => (console.error(`[API] Request setup error:`, e), Promise.reject(e))
),
  Yv.interceptors.response.use(
    (e) => e,
    (e) => {
      if (e.response) {
        let { status: t, data: n, config: r } = e.response;
        console.error(
          `[API] ${t} error on ${r?.method?.toUpperCase()} ${r?.url}:`,
          n
        );
        let i = n?.message || n?.error || `Request failed with status ${t}`,
          a = Error(i);
        return (a.status = t), (a.data = n), Promise.reject(a);
      }
      if (e.request) {
        console.error(`[API] No response received:`, e.request);
        let t = Error(
          `Unable to reach the server. Please check your connection.`
        );
        return (t.isNetworkError = !0), Promise.reject(t);
      }
      return (
        console.error(`[API] Unexpected error:`, e.message), Promise.reject(e)
      );
    }
  );
async function Xv(e) {
  return (await Yv.post(`/policy/analyze`, e)).data;
}
async function Zv(e, t) {
  return (await Yv.post(`/policy/simulate`, { policyId: e, question: t })).data;
}
async function Qv(e, t) {
  return (await Yv.post(`/policy/chat`, { policyId: e, messages: t })).data;
}
var $v = { analyzePolicy: Xv, simulateScenario: Zv, chatWithPolicy: Qv },
  ey = `#E94560`,
  ty = ({ className: e = `w-12 h-12` }) =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.5,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: e,
      children: [
        (0, j.jsx)(`polyline`, { points: `16 16 12 12 8 16` }),
        (0, j.jsx)(`line`, { x1: `12`, y1: `12`, x2: `12`, y2: `21` }),
        (0, j.jsx)(`path`, {
          d: `M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3`,
        }),
      ],
    }),
  ny = ({ className: e = `w-5 h-5` }) =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: e,
      children: [
        (0, j.jsx)(`path`, {
          d: `M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z`,
        }),
        (0, j.jsx)(`polyline`, { points: `14 2 14 8 20 8` }),
        (0, j.jsx)(`line`, { x1: `16`, y1: `13`, x2: `8`, y2: `13` }),
        (0, j.jsx)(`line`, { x1: `16`, y1: `17`, x2: `8`, y2: `17` }),
        (0, j.jsx)(`polyline`, { points: `10 9 9 9 8 9` }),
      ],
    }),
  ry = ({ className: e = `w-5 h-5` }) =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 2,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: e,
      children: [
        (0, j.jsx)(`path`, { d: `M22 11.08V12a10 10 0 11-5.93-9.14` }),
        (0, j.jsx)(`polyline`, { points: `22 4 12 14.01 9 11.01` }),
      ],
    }),
  iy = ({ className: e = `w-4 h-4` }) =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 2.5,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: e,
      children: [
        (0, j.jsx)(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
        (0, j.jsx)(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
      ],
    }),
  ay = () =>
    (0, j.jsxs)(`svg`, {
      className: `w-5 h-5 animate-spin`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      children: [
        (0, j.jsx)(`circle`, {
          className: `opacity-25`,
          cx: `12`,
          cy: `12`,
          r: `10`,
          stroke: `currentColor`,
          strokeWidth: 3,
        }),
        (0, j.jsx)(`path`, {
          className: `opacity-75`,
          fill: `currentColor`,
          d: `M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z`,
        }),
      ],
    }),
  oy = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-8 h-8`,
      children: [
        (0, j.jsx)(`path`, {
          d: `M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z`,
        }),
        (0, j.jsx)(`polyline`, { points: `14 2 14 8 20 8` }),
        (0, j.jsx)(`text`, {
          x: `6`,
          y: `18`,
          fontSize: `5`,
          fontWeight: `bold`,
          fill: `currentColor`,
          stroke: `none`,
          children: `PDF`,
        }),
      ],
    });
function sy(e) {
  return e < 1024
    ? `${e} B`
    : e < 1024 * 1024
    ? `${(e / 1024).toFixed(1)} KB`
    : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
var cy = [
  { id: `pdf`, label: `PDF Upload`, Icon: ty },
  { id: `text`, label: `Text Input`, Icon: ny },
];
function ly() {
  let e = ft(),
    [t, n] = (0, b.useState)(`pdf`),
    [r, i] = (0, b.useState)(null),
    [a, o] = (0, b.useState)(``),
    [s, c] = (0, b.useState)(!1),
    [l, u] = (0, b.useState)(``),
    {
      getRootProps: d,
      getInputProps: f,
      isDragActive: p,
      isDragReject: m,
    } = Yh({
      onDrop: (0, b.useCallback)((e, t) => {
        if ((u(``), t.length > 0)) {
          u(`Only PDF files are accepted. Please try again.`);
          return;
        }
        e.length > 0 && i(e[0]);
      }, []),
      accept: { "application/pdf": [`.pdf`] },
      maxFiles: 1,
      multiple: !1,
    }),
    h = t === `pdf` ? !!r : a.trim().length > 20;
  async function g() {
    if (!(!h || s)) {
      c(!0), u(``);
      try {
        let n = new FormData();
        t === `pdf` ? n.append(`file`, r) : n.append(`text`, a.trim()),
          e(`/results`, {
            state: {
              data: await $v.analyzePolicy(n),
              fileName: t === `pdf` ? r.name : `Pasted Policy`,
            },
          });
      } catch (e) {
        u(e?.message || `Something went wrong. Please try again.`), c(!1);
      }
    }
  }
  let _ = m
    ? `border-red-400 bg-red-50`
    : p
    ? `border-blue-500 bg-blue-50 scale-[1.01]`
    : r
    ? `border-green-400 bg-green-50`
    : `border-blue-400 bg-white hover:bg-blue-50/50 hover:border-blue-500`;
  return (0, j.jsxs)(j.Fragment, {
    children: [
      (0, j.jsx)(`style`, {
        children: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:wght@700;900&display=swap');
        .upload-heading { font-family: 'Fraunces', serif; }
        body { font-family: 'DM Sans', sans-serif; }
      `,
      }),
      (0, j.jsxs)(`main`, {
        className: `min-h-screen flex flex-col items-center justify-center px-4 py-16`,
        style: {
          background: `linear-gradient(160deg, #F0F4FF 0%, #FAF5FF 50%, #FFF0F3 100%)`,
        },
        children: [
          (0, j.jsx)(`div`, {
            className: `fixed top-0 left-0 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none opacity-30`,
            style: { background: `#BFDBFE` },
          }),
          (0, j.jsx)(`div`, {
            className: `fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-25`,
            style: { background: `#FCA5A5` },
          }),
          (0, j.jsxs)(`div`, {
            className: `relative z-10 w-full max-w-2xl`,
            children: [
              (0, j.jsxs)(`div`, {
                className: `text-center mb-9`,
                children: [
                  (0, j.jsxs)(`div`, {
                    className: `inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4`,
                    style: {
                      background: `rgba(233,69,96,0.08)`,
                      color: ey,
                      border: `1px solid rgba(233,69,96,0.2)`,
                    },
                    children: [
                      (0, j.jsx)(`span`, {
                        className: `w-1.5 h-1.5 rounded-full animate-pulse`,
                        style: { background: ey },
                      }),
                      `AI-Powered Analysis`,
                    ],
                  }),
                  (0, j.jsxs)(`h1`, {
                    className: `upload-heading text-4xl font-black text-gray-900 leading-tight`,
                    children: [
                      `Upload Your`,
                      ` `,
                      (0, j.jsxs)(`span`, {
                        className: `relative`,
                        children: [
                          `Insurance Policy`,
                          (0, j.jsx)(`svg`, {
                            className: `absolute -bottom-1 left-0 w-full`,
                            viewBox: `0 0 300 8`,
                            fill: `none`,
                            children: (0, j.jsx)(`path`, {
                              d: `M2 6 Q75 2 150 5 Q225 8 298 4`,
                              stroke: ey,
                              strokeWidth: `2.5`,
                              strokeLinecap: `round`,
                              fill: `none`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, j.jsx)(`p`, {
                    className: `text-gray-500 mt-4 text-base max-w-md mx-auto leading-relaxed`,
                    children: `Get plain-English summaries, coverage maps, and instant answers — in under 60 seconds.`,
                  }),
                ],
              }),
              (0, j.jsxs)(`div`, {
                className: `bg-white rounded-3xl shadow-xl overflow-hidden`,
                style: {
                  boxShadow: `0 8px 48px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.05)`,
                },
                children: [
                  (0, j.jsx)(`div`, {
                    className: `flex border-b border-gray-100`,
                    children: cy.map(({ id: e, label: r, Icon: i }) =>
                      (0, j.jsxs)(
                        `button`,
                        {
                          onClick: () => {
                            n(e), u(``);
                          },
                          className: [
                            `flex-1 flex items-center justify-center gap-2.5 py-4 text-sm font-semibold transition-all duration-200`,
                            t === e
                              ? `text-gray-900 border-b-2`
                              : `text-gray-400 hover:text-gray-600`,
                          ].join(` `),
                          style: t === e ? { borderColor: ey } : {},
                          children: [
                            (0, j.jsx)(i, { className: `w-4 h-4` }),
                            r,
                          ],
                        },
                        e
                      )
                    ),
                  }),
                  (0, j.jsxs)(`div`, {
                    className: `p-8 flex flex-col gap-6`,
                    children: [
                      t === `pdf` &&
                        (0, j.jsx)(j.Fragment, {
                          children: r
                            ? (0, j.jsxs)(`div`, {
                                className: `border-2 border-green-300 bg-green-50 rounded-2xl p-5`,
                                children: [
                                  (0, j.jsxs)(`div`, {
                                    className: `flex items-center gap-4`,
                                    children: [
                                      (0, j.jsx)(`div`, {
                                        className: `w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 text-green-600`,
                                        children: (0, j.jsx)(oy, {}),
                                      }),
                                      (0, j.jsxs)(`div`, {
                                        className: `flex-1 min-w-0`,
                                        children: [
                                          (0, j.jsx)(`p`, {
                                            className: `font-semibold text-gray-800 truncate text-sm`,
                                            children: r.name,
                                          }),
                                          (0, j.jsx)(`p`, {
                                            className: `text-gray-500 text-xs mt-0.5`,
                                            children: sy(r.size),
                                          }),
                                          (0, j.jsxs)(`div`, {
                                            className: `flex items-center gap-1.5 mt-1.5 text-green-600`,
                                            children: [
                                              (0, j.jsx)(ry, {
                                                className: `w-4 h-4`,
                                              }),
                                              (0, j.jsx)(`span`, {
                                                className: `text-xs font-semibold`,
                                                children: `Ready to analyze`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, j.jsx)(`button`, {
                                        onClick: (e) => {
                                          e.stopPropagation(), i(null), u(``);
                                        },
                                        className: `w-8 h-8 rounded-full bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center shadow-sm border border-gray-200 transition-colors duration-150 shrink-0`,
                                        title: `Remove file`,
                                        children: (0, j.jsx)(iy, {}),
                                      }),
                                    ],
                                  }),
                                  (0, j.jsx)(`button`, {
                                    onClick: () => i(null),
                                    className: `mt-3 w-full text-xs text-center text-gray-400 hover:text-blue-500 transition-colors duration-150 py-1`,
                                    children: `Replace with a different file`,
                                  }),
                                ],
                              })
                            : (0, j.jsxs)(`div`, {
                                ...d(),
                                className: [
                                  `relative border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 select-none`,
                                  _,
                                ].join(` `),
                                children: [
                                  (0, j.jsx)(`input`, { ...f() }),
                                  (0, j.jsxs)(`div`, {
                                    className: `flex flex-col items-center justify-center py-14 px-6 text-center gap-4`,
                                    children: [
                                      (0, j.jsx)(`div`, {
                                        className: [
                                          `w-20 h-20 rounded-2xl flex items-center justify-center transition-colors duration-200`,
                                          p
                                            ? `bg-blue-100 text-blue-500`
                                            : `bg-gray-100 text-gray-400`,
                                        ].join(` `),
                                        children: (0, j.jsx)(ty, {
                                          className: `w-10 h-10`,
                                        }),
                                      }),
                                      (0, j.jsxs)(`div`, {
                                        children: [
                                          (0, j.jsx)(`p`, {
                                            className: `text-gray-700 font-semibold text-base`,
                                            children: p
                                              ? `Drop your PDF here…`
                                              : `Drag & drop your PDF here`,
                                          }),
                                          (0, j.jsxs)(`p`, {
                                            className: `text-gray-400 text-sm mt-1.5`,
                                            children: [
                                              `or`,
                                              ` `,
                                              (0, j.jsx)(`span`, {
                                                className: `font-semibold underline underline-offset-2 cursor-pointer`,
                                                style: { color: `#3B82F6` },
                                                children: `browse files`,
                                              }),
                                              ` `,
                                              `from your device`,
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, j.jsxs)(`div`, {
                                        className: `flex items-center gap-3 text-xs text-gray-400`,
                                        children: [
                                          (0, j.jsx)(`span`, {
                                            className: `px-2.5 py-1 bg-gray-100 rounded-full font-medium`,
                                            children: `PDF only`,
                                          }),
                                          (0, j.jsx)(`span`, {
                                            className: `px-2.5 py-1 bg-gray-100 rounded-full font-medium`,
                                            children: `Up to 50 MB`,
                                          }),
                                          (0, j.jsx)(`span`, {
                                            className: `px-2.5 py-1 bg-gray-100 rounded-full font-medium`,
                                            children: `Encrypted`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        }),
                      t === `text` &&
                        (0, j.jsxs)(`div`, {
                          className: `flex flex-col gap-2`,
                          children: [
                            (0, j.jsxs)(`label`, {
                              className: `text-sm font-semibold text-gray-700 flex items-center gap-2`,
                              children: [
                                (0, j.jsx)(ny, {
                                  className: `w-4 h-4 text-gray-400`,
                                }),
                                `Or paste your policy text here`,
                              ],
                            }),
                            (0, j.jsx)(`textarea`, {
                              value: a,
                              onChange: (e) => o(e.target.value),
                              placeholder: `Paste the full text of your insurance policy document…`,
                              rows: 12,
                              className: `w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 resize-none outline-none focus:ring-2 transition-all duration-200 leading-relaxed`,
                              style: { focusRingColor: ey },
                              onFocus: (e) =>
                                (e.target.style.boxShadow = `0 0 0 3px rgba(233,69,96,0.12)`),
                              onBlur: (e) =>
                                (e.target.style.boxShadow = `none`),
                            }),
                            (0, j.jsxs)(`div`, {
                              className: `flex justify-between items-center text-xs text-gray-400 px-1`,
                              children: [
                                (0, j.jsx)(`span`, {
                                  children:
                                    a.length > 0
                                      ? `${a.length.toLocaleString()} characters`
                                      : `Minimum 20 characters`,
                                }),
                                a.trim().length > 20 &&
                                  (0, j.jsxs)(`span`, {
                                    className: `flex items-center gap-1 text-green-600 font-semibold`,
                                    children: [
                                      (0, j.jsx)(ry, {
                                        className: `w-3.5 h-3.5`,
                                      }),
                                      ` Ready`,
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      l &&
                        (0, j.jsxs)(`div`, {
                          className: `flex items-start gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600`,
                          children: [
                            (0, j.jsx)(`span`, {
                              className: `font-bold mt-0.5`,
                              children: `⚠`,
                            }),
                            (0, j.jsx)(`span`, { children: l }),
                          ],
                        }),
                      (0, j.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, j.jsx)(`div`, {
                            className: `flex-1 h-px bg-gray-100`,
                          }),
                          (0, j.jsx)(`span`, {
                            className: `text-xs text-gray-400 font-medium uppercase tracking-widest`,
                            children: `Ready to go`,
                          }),
                          (0, j.jsx)(`div`, {
                            className: `flex-1 h-px bg-gray-100`,
                          }),
                        ],
                      }),
                      (0, j.jsx)(`button`, {
                        onClick: g,
                        disabled: !h || s,
                        className: [
                          `w-full py-4 rounded-xl font-bold text-white text-base flex items-center justify-center gap-3 transition-all duration-200`,
                          h && !s
                            ? `hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] cursor-pointer`
                            : `opacity-40 cursor-not-allowed`,
                        ].join(` `),
                        style: {
                          background:
                            h && !s
                              ? `linear-gradient(135deg, ${ey} 0%, #c0304f 100%)`
                              : `#9CA3AF`,
                          boxShadow:
                            h && !s
                              ? `0 8px 24px rgba(233,69,96,0.35)`
                              : `none`,
                        },
                        children: s
                          ? (0, j.jsxs)(j.Fragment, {
                              children: [
                                (0, j.jsx)(ay, {}),
                                `Analyzing your policy…`,
                              ],
                            })
                          : (0, j.jsxs)(j.Fragment, {
                              children: [
                                (0, j.jsxs)(`svg`, {
                                  viewBox: `0 0 24 24`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  strokeWidth: 2.2,
                                  strokeLinecap: `round`,
                                  strokeLinejoin: `round`,
                                  className: `w-5 h-5`,
                                  children: [
                                    (0, j.jsx)(`circle`, {
                                      cx: `11`,
                                      cy: `11`,
                                      r: `8`,
                                    }),
                                    (0, j.jsx)(`line`, {
                                      x1: `21`,
                                      y1: `21`,
                                      x2: `16.65`,
                                      y2: `16.65`,
                                    }),
                                  ],
                                }),
                                `Analyze Policy`,
                              ],
                            }),
                      }),
                      (0, j.jsxs)(`p`, {
                        className: `text-center text-xs text-gray-400 leading-relaxed`,
                        children: [
                          `🔒 Your document is encrypted in transit and never stored permanently.`,
                          ` `,
                          (0, j.jsx)(`a`, {
                            href: `/privacy`,
                            className: `underline underline-offset-2 hover:text-gray-600 transition-colors`,
                            children: `Privacy policy`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, j.jsx)(`div`, {
                className: `flex items-center justify-center gap-6 mt-7`,
                children: [
                  `SOC 2 Compliant`,
                  `256-bit Encryption`,
                  `HIPAA Ready`,
                ].map((e) =>
                  (0, j.jsxs)(
                    `span`,
                    {
                      className: `flex items-center gap-1.5 text-xs text-gray-400 font-medium`,
                      children: [
                        (0, j.jsx)(`span`, {
                          className: `w-4 h-4 rounded-full flex items-center justify-center`,
                          style: {
                            background: `rgba(233,69,96,0.12)`,
                            color: ey,
                            fontSize: 9,
                          },
                          children: `✓`,
                        }),
                        e,
                      ],
                    },
                    e
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var uy = {
  covered: {
    bg: `#ECFDF3`,
    border: `#16A34A`,
    badgeBg: `#DCFCE7`,
    badgeText: `#15803D`,
    label: `Covered`,
    pillRing: `rgba(22,163,74,0.25)`,
    statusIcon: (0, j.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      stroke: `#16A34A`,
      strokeWidth: 2.2,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-4 h-4 shrink-0`,
      "aria-hidden": `true`,
      children: (0, j.jsx)(`path`, { d: `M4 10.5l4.5 4.5 7.5-8` }),
    }),
    glow: `rgba(22,163,74,0.08)`,
  },
  excluded: {
    bg: `#FEF3F2`,
    border: `#DC2626`,
    badgeBg: `#FEE2E2`,
    badgeText: `#B91C1C`,
    label: `Excluded`,
    pillRing: `rgba(220,38,38,0.25)`,
    statusIcon: (0, j.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      stroke: `#DC2626`,
      strokeWidth: 2.4,
      strokeLinecap: `round`,
      className: `w-4 h-4 shrink-0`,
      "aria-hidden": `true`,
      children: (0, j.jsx)(`path`, { d: `M5 5l10 10M15 5L5 15` }),
    }),
    glow: `rgba(220,38,38,0.07)`,
  },
  partial: {
    bg: `#FFFAEB`,
    border: `#D97706`,
    badgeBg: `#FEF3C7`,
    badgeText: `#B45309`,
    label: `Partial`,
    pillRing: `rgba(217,119,6,0.25)`,
    statusIcon: (0, j.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      stroke: `#D97706`,
      strokeWidth: 2.1,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-4 h-4 shrink-0`,
      "aria-hidden": `true`,
      children: [
        (0, j.jsx)(`path`, {
          d: `M9.26 3.28L2.08 15.5A1 1 0 003 17h14a1 1 0 00.87-1.5L10.74 3.28a1 1 0 00-1.48 0z`,
        }),
        (0, j.jsx)(`line`, { x1: `10`, y1: `9`, x2: `10`, y2: `12` }),
        (0, j.jsx)(`circle`, {
          cx: `10`,
          cy: `14.5`,
          r: `0.5`,
          fill: `#D97706`,
        }),
      ],
    }),
    glow: `rgba(217,119,6,0.07)`,
  },
};
function dy({
  title: e,
  description: t,
  icon: n,
  type: r = `covered`,
  covered: i,
  notCovered: a,
}) {
  let o = uy[r] ?? uy.covered;
  return (0, j.jsxs)(`article`, {
    className: `group relative flex flex-col gap-3 rounded-2xl p-5 cursor-default\r
                 transition-all duration-200 ease-out\r
                 hover:scale-[1.02] hover:-translate-y-0.5`,
    style: {
      background: o.bg,
      borderLeft: `4px solid ${o.border}`,
      boxShadow: `0 2px 12px ${o.glow}, 0 1px 3px rgba(0,0,0,0.05)`,
    },
    children: [
      (0, j.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [
          (0, j.jsx)(`div`, {
            className: `w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0\r
                     transition-transform duration-200 group-hover:scale-110`,
            style: {
              background: `rgba(255,255,255,0.75)`,
              boxShadow: `0 0 0 2px ${o.pillRing}`,
            },
            "aria-hidden": `true`,
            children: n,
          }),
          (0, j.jsxs)(`span`, {
            className: `self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full\r
                     text-xs font-bold tracking-wide shrink-0`,
            style: { background: o.badgeBg, color: o.badgeText },
            children: [o.statusIcon, o.label],
          }),
        ],
      }),
      (0, j.jsx)(`h3`, {
        className: `font-extrabold text-gray-900 text-[0.95rem] leading-snug`,
        children: e,
      }),
      (0, j.jsx)(`p`, {
        className: `text-gray-500 text-sm leading-relaxed flex-1`,
        children: t,
      }),
      r === `partial` &&
        (i || a) &&
        (0, j.jsxs)(`div`, {
          className: `space-y-1`,
          children: [
            i &&
              (0, j.jsxs)(`p`, {
                className: `text-green-600 text-xs flex items-center gap-1`,
                children: [
                  (0, j.jsx)(`svg`, {
                    viewBox: `0 0 12 12`,
                    className: `w-3 h-3 shrink-0`,
                    fill: `currentColor`,
                    children: (0, j.jsx)(`path`, {
                      d: `M2 6.5l3 3 5-5`,
                      stroke: `currentColor`,
                      strokeWidth: `1.5`,
                      fill: `none`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                    }),
                  }),
                  i,
                ],
              }),
            a &&
              (0, j.jsxs)(`p`, {
                className: `text-red-600 text-xs flex items-center gap-1`,
                children: [
                  (0, j.jsx)(`svg`, {
                    viewBox: `0 0 12 12`,
                    className: `w-3 h-3 shrink-0`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `1.8`,
                    strokeLinecap: `round`,
                    children: (0, j.jsx)(`path`, { d: `M3 3l6 6M9 3l-6 6` }),
                  }),
                  a,
                ],
              }),
          ],
        }),
      (0, j.jsx)(`div`, {
        className: `absolute bottom-0 left-4 right-4 h-px rounded-full opacity-0\r
                   group-hover:opacity-100 transition-opacity duration-300`,
        style: {
          background: `linear-gradient(90deg, ${o.border}40, transparent)`,
        },
      }),
    ],
  });
}
var fy = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 22 22`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-5 h-5`,
      "aria-hidden": `true`,
      children: [
        (0, j.jsx)(`path`, {
          d: `M11 2L3 6v5c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6L11 2z`,
        }),
        (0, j.jsx)(`polyline`, { points: `8 11 10.5 13.5 14.5 9` }),
      ],
    }),
  py = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 22 22`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-5 h-5`,
      "aria-hidden": `true`,
      children: [
        (0, j.jsx)(`circle`, { cx: `11`, cy: `11`, r: `9` }),
        (0, j.jsx)(`line`, {
          x1: `4.22`,
          y1: `4.22`,
          x2: `17.78`,
          y2: `17.78`,
        }),
      ],
    }),
  my = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 22 22`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-5 h-5`,
      "aria-hidden": `true`,
      children: [
        (0, j.jsx)(`path`, {
          d: `M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L11.71 3.86a2 2 0 0 0-3.42 0z`,
        }),
        (0, j.jsx)(`line`, { x1: `12`, y1: `9`, x2: `12`, y2: `13` }),
        (0, j.jsx)(`line`, { x1: `12`, y1: `17`, x2: `12.01`, y2: `17` }),
      ],
    });
function hy({
  title: e,
  subtitle: t,
  badge: n,
  items: r,
  cardType: i,
  emptyMessage: a,
}) {
  let { bg: o, text: s, ring: c, Icon: l } = n;
  return (0, j.jsxs)(`section`, {
    className: `flex flex-col gap-5`,
    children: [
      (0, j.jsxs)(`div`, {
        className: `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`,
        children: [
          (0, j.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, j.jsx)(`div`, {
                className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0`,
                style: { background: o, color: s, boxShadow: `0 0 0 2px ${c}` },
                children: (0, j.jsx)(l, {}),
              }),
              (0, j.jsxs)(`div`, {
                children: [
                  (0, j.jsx)(`h2`, {
                    className: `text-lg font-extrabold text-gray-900 leading-none`,
                    children: e,
                  }),
                  t &&
                    (0, j.jsx)(`p`, {
                      className: `text-xs text-gray-400 mt-0.5 font-medium`,
                      children: t,
                    }),
                ],
              }),
            ],
          }),
          (0, j.jsxs)(`span`, {
            className: `self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5\r
                     rounded-full text-xs font-bold tracking-wide`,
            style: { background: o, color: s },
            children: [r.length, ` item`, r.length === 1 ? `` : `s`],
          }),
        ],
      }),
      (0, j.jsx)(`div`, {
        className: `h-px w-full rounded-full`,
        style: { background: c },
      }),
      r.length > 0
        ? (0, j.jsx)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,
            children: r.map((e, t) =>
              (0, j.jsx)(
                dy,
                {
                  title: e.title,
                  description: e.description,
                  icon: e.icon,
                  type: e.type ?? i,
                  covered: e.covered,
                  notCovered: e.notCovered,
                },
                e.id ?? `${i}-${t}`
              )
            ),
          })
        : (0, j.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center py-12 rounded-2xl border-2 border-dashed text-center gap-2`,
            style: { borderColor: c, background: o + `60` },
            children: [
              (0, j.jsx)(`span`, {
                className: `text-3xl opacity-40`,
                children: (0, j.jsx)(l, {}),
              }),
              (0, j.jsx)(`p`, {
                className: `text-sm text-gray-400 font-medium`,
                children: a,
              }),
            ],
          }),
    ],
  });
}
function gy({
  coveredItems: e = [],
  excludedItems: t = [],
  partialItems: n = [],
}) {
  let r = e.length + t.length + n.length;
  return (0, j.jsxs)(`div`, {
    className: `flex flex-col gap-10`,
    children: [
      r > 0 &&
        (0, j.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-4 px-5 py-4 rounded-2xl`,
          style: {
            background: `linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)`,
            border: `1px solid #E2E8F0`,
          },
          children: [
            (0, j.jsxs)(`div`, {
              className: `flex items-center gap-3 flex-1 min-w-[160px]`,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `relative w-12 h-12 shrink-0`,
                  children: [
                    (0, j.jsxs)(`svg`, {
                      viewBox: `0 0 36 36`,
                      className: `w-12 h-12 -rotate-90`,
                      children: [
                        (0, j.jsx)(`circle`, {
                          cx: `18`,
                          cy: `18`,
                          r: `14`,
                          fill: `none`,
                          stroke: `#E2E8F0`,
                          strokeWidth: `4`,
                        }),
                        (0, j.jsx)(`circle`, {
                          cx: `18`,
                          cy: `18`,
                          r: `14`,
                          fill: `none`,
                          stroke: `#16A34A`,
                          strokeWidth: `4`,
                          strokeDasharray: `${
                            r > 0 ? ((e.length / r) * 88).toFixed(1) : 0
                          } 88`,
                          strokeLinecap: `round`,
                          style: { transition: `stroke-dasharray 0.8s ease` },
                        }),
                      ],
                    }),
                    (0, j.jsxs)(`span`, {
                      className: `absolute inset-0 flex items-center justify-center text-xs font-black text-gray-700`,
                      children: [
                        r > 0 ? Math.round((e.length / r) * 100) : 0,
                        `%`,
                      ],
                    }),
                  ],
                }),
                (0, j.jsxs)(`div`, {
                  children: [
                    (0, j.jsx)(`p`, {
                      className: `text-sm font-bold text-gray-800`,
                      children: `Coverage Score`,
                    }),
                    (0, j.jsxs)(`p`, {
                      className: `text-xs text-gray-400`,
                      children: [
                        e.length,
                        ` covered · `,
                        n.length,
                        ` partial ·`,
                        ` `,
                        t.length,
                        ` excluded`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, j.jsxs)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: [
                (0, j.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full\r
                             text-xs font-bold bg-green-100 text-green-700`,
                  children: [
                    (0, j.jsx)(`svg`, {
                      viewBox: `0 0 12 12`,
                      className: `w-3 h-3`,
                      fill: `currentColor`,
                      children: (0, j.jsx)(`path`, {
                        d: `M2 6.5l3 3 5-5`,
                        stroke: `currentColor`,
                        strokeWidth: `1.5`,
                        fill: `none`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                      }),
                    }),
                    e.length,
                    ` Covered`,
                  ],
                }),
                n.length > 0 &&
                  (0, j.jsxs)(`span`, {
                    className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full\r
                               text-xs font-bold bg-yellow-100 text-yellow-700`,
                    children: [
                      (0, j.jsxs)(`svg`, {
                        viewBox: `0 0 12 12`,
                        className: `w-3 h-3`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.5`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        children: [
                          (0, j.jsx)(`path`, {
                            d: `M9.26 3.28L2.08 15.5A1 1 0 003 17h14a1 1 0 00.87-1.5L10.74 3.28a1 1 0 00-1.48 0z`,
                          }),
                          (0, j.jsx)(`line`, {
                            x1: `10`,
                            y1: `9`,
                            x2: `10`,
                            y2: `12`,
                          }),
                          (0, j.jsx)(`circle`, {
                            cx: `10`,
                            cy: `14.5`,
                            r: `0.5`,
                            fill: `currentColor`,
                          }),
                        ],
                      }),
                      n.length,
                      ` Partial`,
                    ],
                  }),
                (0, j.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full\r
                             text-xs font-bold bg-red-100 text-red-700`,
                  children: [
                    (0, j.jsx)(`svg`, {
                      viewBox: `0 0 12 12`,
                      className: `w-3 h-3`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.8`,
                      strokeLinecap: `round`,
                      children: (0, j.jsx)(`path`, { d: `M3 3l6 6M9 3l-6 6` }),
                    }),
                    t.length,
                    ` Excluded`,
                  ],
                }),
              ],
            }),
          ],
        }),
      (0, j.jsx)(hy, {
        title: `What You're Covered For`,
        subtitle: `Benefits and protections included in your policy`,
        badge: { bg: `#DCFCE7`, text: `#15803D`, ring: `#BBF7D0`, Icon: fy },
        items: e,
        cardType: `covered`,
        emptyMessage: `No covered items found in this policy.`,
      }),
      n.length > 0 &&
        (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsxs)(`div`, {
              className: `relative flex items-center gap-4`,
              children: [
                (0, j.jsx)(`div`, {
                  className: `flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent`,
                }),
                (0, j.jsx)(`span`, {
                  className: `text-xs font-bold text-gray-300 uppercase tracking-widest shrink-0 px-2`,
                  children: `and`,
                }),
                (0, j.jsx)(`div`, {
                  className: `flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent`,
                }),
              ],
            }),
            (0, j.jsx)(hy, {
              title: `Partially Covered`,
              subtitle: `Some coverage with conditions or limitations`,
              badge: {
                bg: `#FEF3C7`,
                text: `#B45309`,
                ring: `#FDE68A`,
                Icon: my,
              },
              items: n,
              cardType: `partial`,
              emptyMessage: `No partial coverage items found.`,
            }),
          ],
        }),
      (0, j.jsxs)(`div`, {
        className: `relative flex items-center gap-4`,
        children: [
          (0, j.jsx)(`div`, {
            className: `flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent`,
          }),
          (0, j.jsx)(`span`, {
            className: `text-xs font-bold text-gray-300 uppercase tracking-widest shrink-0 px-2`,
            children: `vs`,
          }),
          (0, j.jsx)(`div`, {
            className: `flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent`,
          }),
        ],
      }),
      (0, j.jsx)(hy, {
        title: `What's NOT Covered`,
        subtitle: `Exclusions, limitations, and gaps in your policy`,
        badge: { bg: `#FEE2E2`, text: `#B91C1C`, ring: `#FECACA`, Icon: py },
        items: t,
        cardType: `excluded`,
        emptyMessage: `No exclusions found — or none have been analyzed yet.`,
      }),
    ],
  });
}
function _y({ notCovered: e = [], partialCoverage: t = [] }) {
  let [n, r] = (0, b.useState)(``),
    i = (e) =>
      e.filter(
        (e) =>
          e.title.toLowerCase().includes(n.toLowerCase()) ||
          e.description.toLowerCase().includes(n.toLowerCase())
      );
  return (0, j.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, j.jsx)(`div`, {
        className: `bg-red-600 text-white px-4 py-3 rounded-lg font-bold text-center`,
        children: `⚠️ These situations are NOT covered by your policy`,
      }),
      (0, j.jsx)(`input`, {
        type: `text`,
        placeholder: `Search exclusions...`,
        value: n,
        onChange: (e) => r(e.target.value),
        className: `w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400`,
      }),
      (0, j.jsx)(`div`, {
        className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
        children: i(e).map((e, t) =>
          (0, j.jsxs)(
            `div`,
            {
              className: `relative bg-red-50 border-l-4 border-red-500 rounded-lg p-4 hover:shadow-md transition-shadow`,
              children: [
                (0, j.jsx)(`span`, {
                  className: `absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full`,
                  children: `NOT COVERED`,
                }),
                (0, j.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-1`,
                  children: [
                    (0, j.jsx)(`span`, {
                      className: `text-xl`,
                      children: e.icon ?? `📋`,
                    }),
                    (0, j.jsx)(`h3`, {
                      className: `font-bold text-red-700`,
                      children: e.title,
                    }),
                  ],
                }),
                (0, j.jsx)(`p`, {
                  className: `text-gray-600 text-sm`,
                  children: e.description,
                }),
              ],
            },
            t
          )
        ),
      }),
      t.length > 0 &&
        (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(`h3`, {
              className: `text-lg font-semibold text-yellow-700 mt-4`,
              children: `⚡ Partially Covered`,
            }),
            (0, j.jsx)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
              children: i(t).map((e, t) =>
                (0, j.jsxs)(
                  `div`,
                  {
                    className: `bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 hover:shadow-md transition-shadow`,
                    children: [
                      (0, j.jsxs)(`div`, {
                        className: `flex items-center gap-2 mb-1`,
                        children: [
                          (0, j.jsx)(`span`, {
                            className: `text-xl`,
                            children: e.icon ?? `📋`,
                          }),
                          (0, j.jsx)(`h3`, {
                            className: `font-bold text-yellow-700`,
                            children: e.title,
                          }),
                        ],
                      }),
                      (0, j.jsx)(`p`, {
                        className: `text-gray-600 text-sm`,
                        children: e.description,
                      }),
                      e.covered &&
                        (0, j.jsxs)(`p`, {
                          className: `text-green-600 text-xs mt-1`,
                          children: [`✅ `, e.covered],
                        }),
                      e.notCovered &&
                        (0, j.jsxs)(`p`, {
                          className: `text-red-600 text-xs`,
                          children: [`❌ `, e.notCovered],
                        }),
                    ],
                  },
                  t
                )
              ),
            }),
          ],
        }),
      (0, j.jsxs)(`p`, {
        className: `text-sm text-gray-500 text-center`,
        children: [
          e.length,
          ` items not covered, `,
          t.length,
          ` `,
          `partially covered`,
        ],
      }),
    ],
  });
}
function vy({ keyTerms: e = [] }) {
  let [t, n] = (0, b.useState)(``),
    [r, i] = (0, b.useState)(`All`),
    [a, o] = (0, b.useState)(null),
    s = [`All`, ...`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``)],
    c = e.filter((e) => {
      let n = e.term.toLowerCase().includes(t.toLowerCase()),
        i = r === `All` || e.term.toUpperCase().startsWith(r);
      return n && i;
    });
  return (0, j.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, j.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, j.jsx)(`span`, { className: `text-2xl`, children: `📖` }),
          (0, j.jsxs)(`div`, {
            children: [
              (0, j.jsx)(`h2`, {
                className: `text-xl font-bold`,
                children: `Insurance Terms Simplified`,
              }),
              (0, j.jsx)(`p`, {
                className: `text-gray-500 text-sm`,
                children: `Click any term to see what it really means`,
              }),
            ],
          }),
        ],
      }),
      (0, j.jsx)(`input`, {
        type: `text`,
        value: t,
        onChange: (e) => n(e.target.value),
        placeholder: `Search terms...`,
        className: `w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400`,
      }),
      (0, j.jsx)(`div`, {
        className: `flex flex-wrap gap-1`,
        children: s.map((e) =>
          (0, j.jsx)(
            `button`,
            {
              onClick: () => i(e),
              className: `px-2 py-0.5 text-xs rounded border font-medium transition ${
                r === e
                  ? `bg-blue-500 text-white border-blue-500`
                  : `bg-white text-gray-600 border-gray-300 hover:bg-gray-50`
              }`,
              children: e,
            },
            e
          )
        ),
      }),
      c.length === 0
        ? (0, j.jsxs)(`div`, {
            className: `text-center py-10 text-gray-400`,
            children: [
              (0, j.jsx)(`p`, { className: `text-4xl mb-2`, children: `🔍` }),
              (0, j.jsx)(`p`, { children: `No terms found` }),
            ],
          })
        : (0, j.jsx)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 gap-3`,
            children: c.map((e, t) =>
              (0, j.jsxs)(
                `div`,
                {
                  className: `border rounded-lg overflow-hidden`,
                  children: [
                    (0, j.jsxs)(`button`, {
                      onClick: () => o(a === t ? null : t),
                      className: `w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-gray-50 transition text-left`,
                      children: [
                        (0, j.jsx)(`span`, {
                          className: `font-bold text-gray-800`,
                          children: e.term,
                        }),
                        (0, j.jsx)(`span`, {
                          className: `text-gray-400 transition-transform duration-300 ${
                            a === t ? `rotate-180` : ``
                          }`,
                          children: `▼`,
                        }),
                      ],
                    }),
                    (0, j.jsx)(xi, {
                      children:
                        a === t &&
                        (0, j.jsx)(X.div, {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: `auto`, opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.25 },
                          className: `overflow-hidden`,
                          children: (0, j.jsxs)(`div`, {
                            className: `px-4 pb-4 pt-1 bg-gray-50 text-sm text-gray-600 space-y-2`,
                            children: [
                              (0, j.jsx)(`p`, { children: e.definition }),
                              (0, j.jsx)(`button`, {
                                onClick: () => o(null),
                                className: `text-xs text-blue-500 hover:underline`,
                                children: `Got it!`,
                              }),
                            ],
                          }),
                        }),
                    }),
                  ],
                },
                t
              )
            ),
          }),
    ],
  });
}
var yy = [
  `What if I get hospitalized?`,
  `What if I have a car accident?`,
  `What if my phone gets stolen?`,
  `What if I need surgery?`,
  `What if I travel abroad?`,
];
function by({ policyId: e }) {
  let [t, n] = (0, b.useState)(``),
    [r, i] = (0, b.useState)(!1),
    [a, o] = (0, b.useState)(null),
    s = async () => {
      if (t.trim()) {
        i(!0), o(null);
        try {
          o(await Zv(e, t));
        } catch {
          ai.error(`Something went wrong. Please try again.`);
        } finally {
          i(!1);
        }
      }
    },
    c = {
      YES: `bg-green-100 text-green-700 border border-green-400`,
      NO: `bg-red-100 text-red-700 border border-red-400`,
      PARTIAL: `bg-yellow-100 text-yellow-700 border border-yellow-400`,
    },
    l = (e) => (e.covered === !0 ? `YES` : e.covered === !1 ? `NO` : `PARTIAL`);
  return (0, j.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, j.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, j.jsx)(`span`, { className: `text-2xl`, children: `⚡` }),
          (0, j.jsxs)(`div`, {
            children: [
              (0, j.jsx)(`h2`, {
                className: `text-xl font-bold`,
                children: `Scenario Simulator`,
              }),
              (0, j.jsx)(`p`, {
                className: `text-gray-500 text-sm`,
                children: `Ask any what-if question about your policy`,
              }),
            ],
          }),
        ],
      }),
      (0, j.jsx)(`div`, {
        className: `flex flex-wrap gap-2`,
        children: yy.map((e) =>
          (0, j.jsx)(
            `button`,
            {
              onClick: () => n(e),
              className: `text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full border transition`,
              children: e,
            },
            e
          )
        ),
      }),
      (0, j.jsx)(`textarea`, {
        value: t,
        onChange: (e) => n(e.target.value),
        placeholder: `Describe your situation...`,
        rows: 3,
        className: `w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400`,
      }),
      (0, j.jsx)(`div`, {
        className: `flex justify-end`,
        children: (0, j.jsx)(`button`, {
          onClick: s,
          disabled: r || !t.trim(),
          className: `bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white px-6 py-2 rounded-lg font-semibold transition`,
          children: r ? `Asking...` : `Ask Now`,
        }),
      }),
      (0, j.jsx)(xi, {
        children:
          a &&
          (0, j.jsxs)(X.div, {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0 },
            className: `bg-white border rounded-xl p-5 shadow space-y-3`,
            children: [
              (0, j.jsx)(`span`, {
                className: `inline-block px-4 py-1 rounded-full font-bold text-lg ${
                  c[l(a)]
                }`,
                children: l(a),
              }),
              (0, j.jsxs)(`div`, {
                children: [
                  (0, j.jsx)(`h4`, {
                    className: `font-semibold text-gray-700`,
                    children: `Answer`,
                  }),
                  (0, j.jsx)(`p`, {
                    className: `text-gray-600 text-sm`,
                    children: a.answer,
                  }),
                ],
              }),
              a.relevantClauses?.length > 0 &&
                (0, j.jsxs)(`div`, {
                  children: [
                    (0, j.jsx)(`h4`, {
                      className: `font-semibold text-gray-700`,
                      children: `Relevant Policy Points`,
                    }),
                    (0, j.jsx)(`ul`, {
                      className: `list-disc list-inside text-sm text-gray-600 space-y-1`,
                      children: a.relevantClauses.map((e, t) =>
                        (0, j.jsx)(`li`, { children: e }, t)
                      ),
                    }),
                  ],
                }),
              a.recommendation &&
                (0, j.jsxs)(`div`, {
                  className: `bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700`,
                  children: [
                    `💡 `,
                    (0, j.jsx)(`strong`, { children: `What You Should Do:` }),
                    ` `,
                    a.recommendation,
                  ],
                }),
            ],
          }),
      }),
    ],
  });
}
var xy = [
  `What is my deductible?`,
  `Am I covered for pre-existing conditions?`,
  `What is the claim process?`,
  `Are family members covered?`,
];
function Sy({ policyId: e }) {
  let [t, n] = (0, b.useState)([
      { role: `assistant`, content: `Hi! Ask me anything about your policy.` },
    ]),
    [r, i] = (0, b.useState)(``),
    [a, o] = (0, b.useState)(!1),
    [s, c] = (0, b.useState)(!0),
    l = (0, b.useRef)(null),
    u = async (a) => {
      let s = a || r.trim();
      if (!s) return;
      let l = [...t, { role: `user`, content: s }];
      n(l), i(``), c(!1), o(!0);
      try {
        let t = await Qv(e, l);
        n([...l, { role: `assistant`, content: t.reply }]);
      } catch {
        ai.error(`Failed to get a response.`);
      } finally {
        o(!1);
      }
    };
  return (0, j.jsxs)(`div`, {
    className: `flex flex-col h-[500px] border rounded-xl overflow-hidden`,
    children: [
      (0, j.jsxs)(`div`, {
        className: `flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50`,
        children: [
          s &&
            (0, j.jsx)(`div`, {
              className: `flex flex-wrap gap-2 mb-2`,
              children: xy.map((e) =>
                (0, j.jsx)(
                  `button`,
                  {
                    onClick: () => u(e),
                    className: `text-xs bg-white border border-gray-300 hover:bg-gray-100 px-3 py-1 rounded-full transition`,
                    children: e,
                  },
                  e
                )
              ),
            }),
          t.map((e, t) =>
            (0, j.jsx)(
              `div`,
              {
                className: `flex ${
                  e.role === `user` ? `justify-end` : `justify-start`
                }`,
                children: (0, j.jsxs)(`div`, {
                  className: `max-w-[75%]`,
                  children: [
                    e.role === `assistant` &&
                      (0, j.jsx)(`p`, {
                        className: `text-xs text-gray-400 mb-0.5 ml-1`,
                        children: `InsureEasy AI`,
                      }),
                    (0, j.jsx)(`div`, {
                      className: `px-4 py-2 rounded-2xl text-sm ${
                        e.role === `user`
                          ? `bg-blue-500 text-white rounded-br-none`
                          : `bg-white text-gray-800 border rounded-bl-none shadow-sm`
                      }`,
                      children: e.content,
                    }),
                  ],
                }),
              },
              t
            )
          ),
          a &&
            (0, j.jsx)(`div`, {
              className: `flex justify-start`,
              children: (0, j.jsx)(`div`, {
                className: `bg-white border rounded-2xl rounded-bl-none px-4 py-2 shadow-sm`,
                children: (0, j.jsx)(`span`, {
                  className: `flex gap-1`,
                  children: [0, 1, 2].map((e) =>
                    (0, j.jsx)(
                      `span`,
                      {
                        className: `w-2 h-2 bg-gray-400 rounded-full animate-bounce`,
                        style: { animationDelay: `${e * 0.15}s` },
                      },
                      e
                    )
                  ),
                }),
              }),
            }),
          (0, j.jsx)(`div`, { ref: l }),
        ],
      }),
      (0, j.jsxs)(`div`, {
        className: `flex items-center gap-2 p-3 border-t bg-white`,
        children: [
          (0, j.jsx)(`input`, {
            value: r,
            onChange: (e) => i(e.target.value),
            onKeyDown: (e) => e.key === `Enter` && u(),
            placeholder: `Ask about your policy...`,
            className: `flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300`,
          }),
          (0, j.jsx)(`button`, {
            onClick: () => u(),
            className: `bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition`,
            children: `✈️`,
          }),
        ],
      }),
    ],
  });
}
var Cy = `#1A1A2E`,
  wy = `#0F3460`,
  Ty = `#E94560`,
  Ey = () =>
    (0, j.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 2,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-4 h-4`,
      children: (0, j.jsx)(`path`, { d: `M15 10H5M9 6l-4 4 4 4` }),
    }),
  Dy = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-4 h-4`,
      children: [
        (0, j.jsx)(`rect`, {
          x: `3`,
          y: `4`,
          width: `14`,
          height: `13`,
          rx: `2`,
        }),
        (0, j.jsx)(`path`, { d: `M3 8h14M7 3v2M13 3v2` }),
      ],
    }),
  Oy = () =>
    (0, j.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: 1.8,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: `w-4 h-4`,
      children: [
        (0, j.jsx)(`path`, {
          d: `M13 2H7a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V6z`,
        }),
        (0, j.jsx)(`polyline`, { points: `13 2 13 6 17 6` }),
      ],
    });
function ky(e) {
  return e < 40
    ? { stroke: `#16A34A`, text: `#15803D`, label: `Low Risk`, bg: `#DCFCE7` }
    : e < 70
    ? {
        stroke: `#D97706`,
        text: `#B45309`,
        label: `Medium Risk`,
        bg: `#FEF3C7`,
      }
    : { stroke: `#DC2626`, text: `#B91C1C`, label: `High Risk`, bg: `#FEE2E2` };
}
function Ay({ score: e = 0 }) {
  let [t, n] = (0, b.useState)(0),
    r = ky(t);
  (0, b.useEffect)(() => {
    let t,
      r = null,
      i = (a) => {
        r ||= a;
        let o = Math.min((a - r) / 1200, 1),
          s = 1 - (1 - o) ** 3;
        n(Math.round(s * e)), o < 1 && (t = requestAnimationFrame(i));
      };
    return (t = requestAnimationFrame(i)), () => cancelAnimationFrame(t);
  }, [e]);
  let i = 2 * Math.PI * 52,
    a = (t / 100) * i;
  return (0, j.jsxs)(`div`, {
    className: `flex flex-col items-center gap-3`,
    children: [
      (0, j.jsxs)(`div`, {
        className: `relative w-36 h-36`,
        children: [
          (0, j.jsxs)(`svg`, {
            viewBox: `0 0 120 120`,
            className: `w-full h-full -rotate-90`,
            children: [
              (0, j.jsx)(`circle`, {
                cx: `60`,
                cy: `60`,
                r: 52,
                fill: `none`,
                stroke: `rgba(255,255,255,0.08)`,
                strokeWidth: `10`,
              }),
              (0, j.jsx)(`circle`, {
                cx: `60`,
                cy: `60`,
                r: 52,
                fill: `none`,
                stroke: r.stroke,
                strokeWidth: `10`,
                strokeLinecap: `round`,
                strokeDasharray: `${a} ${i}`,
                style: { transition: `stroke 0.4s` },
              }),
            ],
          }),
          (0, j.jsxs)(`div`, {
            className: `absolute inset-0 flex flex-col items-center justify-center`,
            children: [
              (0, j.jsx)(`span`, {
                className: `text-3xl font-black text-white leading-none`,
                children: t,
              }),
              (0, j.jsx)(`span`, {
                className: `text-xs font-semibold mt-0.5`,
                style: { color: r.stroke },
                children: `/100`,
              }),
            ],
          }),
        ],
      }),
      (0, j.jsxs)(`div`, {
        className: `flex flex-col items-center gap-1`,
        children: [
          (0, j.jsx)(`span`, {
            className: `text-xs font-bold tracking-widest uppercase text-gray-400`,
            children: `Policy Risk Score`,
          }),
          (0, j.jsx)(`span`, {
            className: `px-3 py-1 rounded-full text-xs font-extrabold`,
            style: {
              background: r.bg + `22`,
              color: r.stroke,
              border: `1px solid ${r.stroke}44`,
            },
            children: r.label,
          }),
        ],
      }),
    ],
  });
}
function jy({ value: e, label: t, color: n, icon: r }) {
  return (0, j.jsxs)(`div`, {
    className: `flex flex-col items-center gap-1 px-5 py-4 rounded-2xl`,
    style: {
      background: `rgba(255,255,255,0.05)`,
      border: `1px solid rgba(255,255,255,0.08)`,
    },
    children: [
      (0, j.jsx)(`span`, { className: `text-2xl`, children: r }),
      (0, j.jsx)(`span`, {
        className: `text-2xl font-black text-white leading-none`,
        style: { color: n },
        children: e,
      }),
      (0, j.jsx)(`span`, {
        className: `text-xs text-gray-400 font-medium text-center leading-tight`,
        children: t,
      }),
    ],
  });
}
var My = [
    { id: `coverage`, label: `Coverage`, emoji: `🛡️` },
    { id: `exclusions`, label: `Exclusions`, emoji: `🚫` },
    { id: `terms`, label: `Key Terms`, emoji: `📖` },
    { id: `simulate`, label: `Simulator`, emoji: `⚡` },
    { id: `chat`, label: `Ask Policy`, emoji: `💬` },
  ],
  Ny = {
    summary: `This is a standard homeowner's insurance policy with moderate coverage. Several high-risk exclusions were identified including flood, earthquake, and intentional damage.`,
    riskScore: 62,
    covered: [
      {
        title: `Fire & Smoke Damage`,
        description: `Full replacement cost coverage for fire and smoke damage to structure and contents.`,
        icon: `🔥`,
      },
      {
        title: `Theft & Vandalism`,
        description: `Covers stolen or damaged property up to $50,000 with a $500 deductible.`,
        icon: `🔒`,
      },
      {
        title: `Liability Protection`,
        description: `Up to $300,000 personal liability if someone is injured on your property.`,
        icon: `⚖️`,
      },
      {
        title: `Temporary Housing`,
        description: `Covers hotel and living expenses up to $15,000 if your home is uninhabitable.`,
        icon: `🏨`,
      },
      {
        title: `Medical Payments`,
        description: `Pays up to $5,000 for medical expenses of guests injured on your property.`,
        icon: `🏥`,
      },
    ],
    notCovered: [
      {
        title: `Flood Damage`,
        description: `Rising water, storm surge, and sewer backup are explicitly excluded.`,
        icon: `🌊`,
      },
      {
        title: `Earthquake Damage`,
        description: `Structural damage from seismic activity is not covered under this policy.`,
        icon: `🌍`,
      },
      {
        title: `Intentional Acts`,
        description: `Any damage caused intentionally by the insured is excluded.`,
        icon: `⛔`,
      },
      {
        title: `Business Activities`,
        description: `Losses arising from running a business at the property are not covered.`,
        icon: `💼`,
      },
    ],
    partialCoverage: [
      {
        title: `Water Damage`,
        description: `Only sudden/accidental covered. Gradual leaks excluded.`,
        icon: `💧`,
        covered: `Burst pipes`,
        notCovered: `Slow leaks`,
      },
    ],
    keyTerms: [
      {
        term: `Deductible`,
        definition: `The amount you pay out-of-pocket before your insurance kicks in.`,
      },
      {
        term: `Premium`,
        definition: `The amount you pay monthly or annually to keep your policy active.`,
      },
      {
        term: `Liability`,
        definition: `Your legal responsibility if someone is injured or their property is damaged.`,
      },
      {
        term: `Replacement Cost`,
        definition: `What it costs to replace or repair your property at today's prices.`,
      },
      {
        term: `Exclusion`,
        definition: `A specific situation or item that your policy does NOT cover.`,
      },
      {
        term: `Endorsement`,
        definition: `An amendment to your policy that adds, removes, or changes coverage.`,
      },
    ],
    policyId: `demo-policy-123`,
  };
function Py() {
  let { state: e } = lt(),
    t = ft(),
    [n, r] = (0, b.useState)(`coverage`),
    {
      summary: i = ``,
      riskScore: a = 0,
      covered: o = [],
      notCovered: s = [],
      partialCoverage: c = [],
      keyTerms: l = [],
      policyId: u,
    } = e?.data ?? Ny,
    d = e?.fileName ?? `Insurance Policy`,
    f = new Date().toLocaleDateString(`en-US`, {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    });
  return (0, j.jsxs)(j.Fragment, {
    children: [
      (0, j.jsx)(`style`, {
        children: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:wght@700;900&display=swap');
        .results-heading { font-family: 'Fraunces', serif; }
        body { font-family: 'DM Sans', sans-serif; background: #F1F5F9; }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tab-enter { animation: fadeSlideUp 0.3s ease forwards; }
      `,
      }),
      (0, j.jsxs)(`div`, {
        className: `min-h-screen flex flex-col`,
        style: { background: `#F1F5F9` },
        children: [
          (0, j.jsxs)(`header`, {
            className: `relative overflow-hidden`,
            style: {
              background: `linear-gradient(135deg, ${Cy} 0%, ${wy} 100%)`,
            },
            children: [
              (0, j.jsx)(`div`, {
                className: `absolute inset-0 pointer-events-none opacity-[0.04]`,
                style: {
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                                linear-gradient(90deg,rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: `40px 40px`,
                },
              }),
              (0, j.jsx)(`div`, {
                className: `absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] pointer-events-none`,
                style: { background: `rgba(233,69,96,0.2)` },
              }),
              (0, j.jsxs)(`div`, {
                className: `relative z-10 max-w-6xl mx-auto px-6 py-8`,
                children: [
                  (0, j.jsxs)(`div`, {
                    className: `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8`,
                    children: [
                      (0, j.jsxs)(`div`, {
                        className: `flex items-center gap-3 min-w-0`,
                        children: [
                          (0, j.jsxs)(`button`, {
                            onClick: () => t(`/upload`),
                            className: `flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 shrink-0`,
                            children: [(0, j.jsx)(Ey, {}), ` Back`],
                          }),
                          (0, j.jsx)(`span`, {
                            className: `text-gray-600`,
                            children: `|`,
                          }),
                          (0, j.jsxs)(`div`, {
                            className: `flex items-center gap-2 min-w-0`,
                            children: [
                              (0, j.jsx)(`div`, {
                                className: `w-7 h-7 rounded-lg flex items-center justify-center shrink-0`,
                                style: {
                                  background: `rgba(233,69,96,0.2)`,
                                  color: Ty,
                                },
                                children: (0, j.jsx)(Oy, {}),
                              }),
                              (0, j.jsx)(`span`, {
                                className: `text-white font-bold text-sm truncate`,
                                children: d,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, j.jsxs)(`div`, {
                        className: `flex items-center gap-4 shrink-0`,
                        children: [
                          (0, j.jsxs)(`div`, {
                            className: `flex items-center gap-1.5 text-xs text-gray-400`,
                            children: [(0, j.jsx)(Dy, {}), ` `, f],
                          }),
                          (0, j.jsx)(`button`, {
                            onClick: () => t(`/upload`),
                            className: `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white\r
                             border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-150`,
                            children: `Analyze Another →`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, j.jsxs)(`div`, {
                    className: `flex flex-col lg:flex-row gap-8 items-start`,
                    children: [
                      (0, j.jsxs)(`div`, {
                        className: `flex-1 min-w-0`,
                        children: [
                          (0, j.jsx)(`span`, {
                            className: `text-xs font-extrabold tracking-[0.2em] uppercase mb-2 block`,
                            style: { color: Ty },
                            children: `Analysis Complete`,
                          }),
                          (0, j.jsxs)(`h1`, {
                            className: `results-heading text-3xl md:text-4xl font-black text-white leading-tight mb-4`,
                            children: [
                              `Your Policy,`,
                              (0, j.jsx)(`br`, {}),
                              `Decoded.`,
                            ],
                          }),
                          i &&
                            (0, j.jsx)(`p`, {
                              className: `text-sm text-gray-300 leading-relaxed max-w-lg mb-6`,
                              children: i,
                            }),
                          (0, j.jsxs)(`div`, {
                            className: `grid grid-cols-3 gap-3 max-w-sm`,
                            children: [
                              (0, j.jsx)(jy, {
                                value: o.length,
                                label: `Items Covered`,
                                color: `#4ADE80`,
                                icon: `✅`,
                              }),
                              (0, j.jsx)(jy, {
                                value: s.length,
                                label: `Exclusions`,
                                color: `#F87171`,
                                icon: `🚫`,
                              }),
                              (0, j.jsx)(jy, {
                                value: l.length,
                                label: `Key Terms`,
                                color: `#FBBF24`,
                                icon: `📖`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, j.jsx)(`div`, {
                        className: `lg:self-center`,
                        children: (0, j.jsx)(Ay, { score: a }),
                      }),
                    ],
                  }),
                  (0, j.jsx)(`div`, {
                    className: `flex gap-1 mt-8 overflow-x-auto pb-0.5 -mb-px`,
                    children: My.map(({ id: e, label: t, emoji: i }) =>
                      (0, j.jsxs)(
                        `button`,
                        {
                          onClick: () => r(e),
                          className: [
                            `flex items-center gap-2 px-5 py-3 rounded-t-xl text-sm font-bold whitespace-nowrap`,
                            `transition-all duration-150 border-b-2`,
                            n === e
                              ? `text-white border-[#E94560] bg-white/10`
                              : `text-gray-400 border-transparent hover:text-white hover:bg-white/5`,
                          ].join(` `),
                          children: [(0, j.jsx)(`span`, { children: i }), t],
                        },
                        e
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, j.jsx)(`main`, {
            className: `flex-1 max-w-6xl mx-auto w-full px-6 py-8`,
            children: (0, j.jsxs)(
              `div`,
              {
                className: `tab-enter`,
                children: [
                  n === `coverage` &&
                    (0, j.jsx)(gy, {
                      coveredItems: o.map((e) => ({ ...e, type: `covered` })),
                      partialItems: c.map((e) => ({ ...e, type: `partial` })),
                      excludedItems: s.map((e) => ({ ...e, type: `excluded` })),
                    }),
                  n === `exclusions` &&
                    (0, j.jsx)(_y, { notCovered: s, partialCoverage: c }),
                  n === `terms` &&
                    (0, j.jsxs)(`div`, {
                      className: `flex flex-col gap-4`,
                      children: [
                        (0, j.jsxs)(`div`, {
                          className: `mb-2`,
                          children: [
                            (0, j.jsx)(`h2`, {
                              className: `results-heading text-2xl font-black text-gray-900`,
                              children: `Key Terms Glossary`,
                            }),
                            (0, j.jsx)(`p`, {
                              className: `text-sm text-gray-400 mt-1`,
                              children: `Insurance jargon, translated into plain English.`,
                            }),
                          ],
                        }),
                        (0, j.jsx)(vy, { keyTerms: l }),
                      ],
                    }),
                  n === `simulate` && (0, j.jsx)(by, { policyId: u }),
                  n === `chat` &&
                    (0, j.jsxs)(`div`, {
                      className: `flex flex-col gap-4`,
                      children: [
                        (0, j.jsxs)(`div`, {
                          className: `mb-2`,
                          children: [
                            (0, j.jsx)(`h2`, {
                              className: `results-heading text-2xl font-black text-gray-900`,
                              children: `Ask Your Policy`,
                            }),
                            (0, j.jsx)(`p`, {
                              className: `text-sm text-gray-400 mt-1`,
                              children: `Chat directly with AI about your policy details.`,
                            }),
                          ],
                        }),
                        (0, j.jsx)(Sy, { policyId: u }),
                      ],
                    }),
                ],
              },
              n
            ),
          }),
          (0, j.jsx)(`footer`, {
            className: `border-t border-gray-200 py-5`,
            children: (0, j.jsxs)(`div`, {
              className: `max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-3`,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-sm text-gray-400`,
                  children: [
                    (0, j.jsx)(`span`, { children: `🛡️` }),
                    (0, j.jsx)(`span`, {
                      className: `font-bold text-gray-600`,
                      children: `InsureEasy`,
                    }),
                    (0, j.jsx)(`span`, { children: `· AI Analysis` }),
                  ],
                }),
                (0, j.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 text-xs text-gray-400`,
                  children: [
                    (0, j.jsx)(`span`, {
                      className: `w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse`,
                    }),
                    `Analysis complete · `,
                    new Date().toLocaleTimeString(),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
var Fy = `#E94560`,
  Iy = `#1A1A2E`,
  Ly = `#0F3460`;
function Ry({ children: e, delay: t = 0, className: n = `` }) {
  let r = (0, b.useRef)(null),
    i = Gp(r, { once: !0, margin: `-60px` });
  return (0, j.jsx)(X.div, {
    ref: r,
    className: n,
    initial: { opacity: 0, y: 40 },
    animate: i ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay: t, ease: [0.22, 1, 0.36, 1] },
    children: e,
  });
}
var zy = [
    {
      num: `01`,
      emoji: `📄`,
      title: `Upload Your Policy`,
      subtitle: `PDF or plain text — your choice`,
      desc: `Drag and drop your insurance policy PDF, or simply paste the text. We accept health, auto, home, life — any policy type. Your document is encrypted end-to-end.`,
      detail: [
        `Supports PDF files up to 50MB`,
        `Or paste raw policy text directly`,
        `256-bit encryption in transit`,
        `Document deleted after analysis`,
      ],
      color: `#3B82F6`,
      bg: `#EFF6FF`,
    },
    {
      num: `02`,
      emoji: `🤖`,
      title: `AI Reads Every Clause`,
      subtitle: `Powered by Google Gemini`,
      desc: `Our AI reads your entire policy word-by-word — extracting coverage details, spotting exclusions, defining confusing terms, and calculating a risk score in seconds.`,
      detail: [
        `Reads up to 8,000 words of policy text`,
        `Identifies covered & excluded items`,
        `Flags unusual or risky clauses`,
        `Calculates a 0–100 risk score`,
      ],
      color: Fy,
      bg: `#FFF0F3`,
    },
    {
      num: `03`,
      emoji: `✨`,
      title: `Get Clear Insights`,
      subtitle: `Your policy, finally decoded`,
      desc: `Receive a plain-English summary, visual coverage map, flagged exclusions, and a glossary of key terms — all in one clean dashboard you can explore interactively.`,
      detail: [
        `Plain-English summary (2–3 sentences)`,
        `Visual coverage & exclusion cards`,
        `Clickable insurance glossary`,
        `Shareable results dashboard`,
      ],
      color: `#10B981`,
      bg: `#ECFDF5`,
    },
    {
      num: `04`,
      emoji: `💬`,
      title: `Ask Anything`,
      subtitle: `Your personal policy advisor`,
      desc: `Use the Scenario Simulator to ask 'What if I get hospitalized?' or chat directly with AI about any clause. Get real answers drawn from your actual policy.`,
      detail: [
        `Scenario simulator with preset questions`,
        `Multi-turn policy chat`,
        `Relevant clause references`,
        `Plain recommendation for each scenario`,
      ],
      color: `#F59E0B`,
      bg: `#FFFBEB`,
    },
  ],
  By = [
    {
      q: `Is my policy document stored permanently?`,
      a: `No. Your document is processed in memory and deleted immediately after analysis. We never store your personal insurance data.`,
    },
    {
      q: `What types of insurance policies work?`,
      a: `Any type — health, auto, home, life, travel, or business insurance. If it's written in English, our AI can analyze it.`,
    },
    {
      q: `How accurate is the AI analysis?`,
      a: `Very accurate for extraction and summarization. However, always verify critical coverage decisions with your insurance provider. This is a clarity tool, not legal advice.`,
    },
    {
      q: `How long does the analysis take?`,
      a: `Typically 15–30 seconds depending on policy length. The AI reads and processes thousands of words in that time.`,
    },
    {
      q: `Do I need to create an account?`,
      a: `No account needed. Just upload your policy and get instant results. No sign-up, no credit card, no friction.`,
    },
  ];
function Vy({ q: e, a: t, index: n }) {
  let r = (0, b.useRef)(null),
    i = Gp(r, { once: !0, margin: `-40px` });
  return (0, j.jsxs)(X.div, {
    ref: r,
    initial: { opacity: 0, x: -20 },
    animate: i ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.5, delay: n * 0.08 },
    className: `border-b border-gray-100 py-6 last:border-0`,
    children: [
      (0, j.jsx)(`h4`, {
        className: `font-bold text-gray-900 mb-2 text-base`,
        children: e,
      }),
      (0, j.jsx)(`p`, {
        className: `text-gray-500 text-sm leading-relaxed`,
        children: t,
      }),
    ],
  });
}
function Hy() {
  return (0, j.jsxs)(`main`, {
    className: `min-h-screen bg-white overflow-x-hidden`,
    style: { fontFamily: `'DM Sans', sans-serif` },
    children: [
      (0, j.jsx)(`style`, {
        children: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap'); .hw-heading{font-family:'Fraunces',serif;}`,
      }),
      (0, j.jsxs)(`section`, {
        className: `relative pt-20 pb-24 overflow-hidden`,
        style: {
          background: `linear-gradient(135deg, ${Iy} 0%, ${Ly} 60%, #16213E 100%)`,
        },
        children: [
          (0, j.jsx)(`div`, {
            className: `absolute inset-0 pointer-events-none`,
            style: {
              backgroundImage: `linear-gradient(rgba(233,69,96,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(233,69,96,0.04) 1px,transparent 1px)`,
              backgroundSize: `48px 48px`,
            },
          }),
          (0, j.jsx)(`div`, {
            className: `absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none`,
            style: { background: `rgba(233,69,96,0.2)` },
          }),
          (0, j.jsxs)(`div`, {
            className: `relative z-10 max-w-4xl mx-auto px-6 text-center`,
            children: [
              (0, j.jsxs)(X.div, {
                initial: { opacity: 0, y: -16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6`,
                style: {
                  background: `rgba(233,69,96,0.15)`,
                  border: `1px solid rgba(233,69,96,0.35)`,
                  color: Fy,
                },
                children: [
                  (0, j.jsx)(`span`, {
                    className: `w-1.5 h-1.5 rounded-full animate-pulse`,
                    style: { background: Fy },
                  }),
                  `Simple 4-Step Process`,
                ],
              }),
              (0, j.jsxs)(X.h1, {
                className: `hw-heading text-5xl md:text-6xl font-black text-white leading-tight mb-6`,
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.1 },
                children: [
                  `From Confusing PDF`,
                  (0, j.jsx)(`br`, {}),
                  (0, j.jsx)(`span`, {
                    style: { color: Fy },
                    children: `to Crystal Clarity`,
                  }),
                ],
              }),
              (0, j.jsx)(X.p, {
                className: `text-lg text-gray-300 max-w-xl mx-auto leading-relaxed`,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.3 },
                children: `No law degree. No jargon. No guesswork. Just upload your policy and understand exactly what you're paying for.`,
              }),
              (0, j.jsx)(X.div, {
                className: `flex flex-wrap justify-center gap-8 mt-12`,
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5 },
                children: [
                  [`60s`, `Average analysis time`],
                  [`10K+`, `Policies analyzed`],
                  [`98%`, `Accuracy rate`],
                  [`0`, `Data stored`],
                ].map(([e, t]) =>
                  (0, j.jsxs)(
                    `div`,
                    {
                      className: `text-center`,
                      children: [
                        (0, j.jsx)(`div`, {
                          className: `text-3xl font-black text-white`,
                          style: { fontFamily: `'Fraunces', serif` },
                          children: e,
                        }),
                        (0, j.jsx)(`div`, {
                          className: `text-xs text-gray-400 mt-1 font-medium`,
                          children: t,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
          (0, j.jsx)(`div`, {
            className: `absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none`,
            children: (0, j.jsx)(`svg`, {
              viewBox: `0 0 1440 64`,
              fill: `none`,
              className: `w-full`,
              children: (0, j.jsx)(`path`, {
                d: `M0 64L1440 64L1440 32C1200 64 960 0 720 32C480 64 240 0 0 32L0 64Z`,
                fill: `white`,
              }),
            }),
          }),
        ],
      }),
      (0, j.jsx)(`section`, {
        className: `py-24 bg-white`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-5xl mx-auto px-6`,
          children: [
            (0, j.jsxs)(Ry, {
              className: `text-center mb-20`,
              children: [
                (0, j.jsx)(`span`, {
                  className: `text-xs font-extrabold tracking-[0.25em] uppercase`,
                  style: { color: Fy },
                  children: `The Process`,
                }),
                (0, j.jsx)(`h2`, {
                  className: `hw-heading text-4xl md:text-5xl font-black text-gray-900 mt-3`,
                  children: `Four steps. One clear picture.`,
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `flex flex-col gap-16`,
              children: zy.map((e, t) =>
                (0, j.jsxs)(
                  Ry,
                  {
                    delay: 0.1,
                    children: [
                      (0, j.jsxs)(`div`, {
                        className: `flex flex-col ${
                          t % 2 == 0 ? `md:flex-row` : `md:flex-row-reverse`
                        } gap-10 items-center`,
                        children: [
                          (0, j.jsx)(`div`, {
                            className: `flex-1 flex justify-center`,
                            children: (0, j.jsxs)(X.div, {
                              whileHover: { scale: 1.03 },
                              transition: {
                                type: `spring`,
                                stiffness: 300,
                                damping: 20,
                              },
                              className: `relative w-72 h-64 rounded-3xl flex flex-col items-center justify-center gap-4`,
                              style: {
                                background: e.bg,
                                border: `2px solid ${e.color}22`,
                                boxShadow: `0 20px 60px ${e.color}18`,
                              },
                              children: [
                                (0, j.jsx)(`div`, {
                                  className: `absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-sm`,
                                  style: {
                                    background: `linear-gradient(135deg, ${e.color}, ${e.color}cc)`,
                                    boxShadow: `0 8px 24px ${e.color}44`,
                                  },
                                  children: e.num,
                                }),
                                (0, j.jsx)(`div`, {
                                  className: `text-6xl`,
                                  children: e.emoji,
                                }),
                                (0, j.jsx)(`div`, {
                                  className: `flex flex-col gap-1.5 w-full px-6`,
                                  children: e.detail
                                    .slice(0, 2)
                                    .map((t, n) =>
                                      (0, j.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white`,
                                          style: {
                                            color: e.color,
                                            border: `1px solid ${e.color}30`,
                                          },
                                          children: [
                                            (0, j.jsx)(`span`, {
                                              className: `w-1.5 h-1.5 rounded-full shrink-0`,
                                              style: { background: e.color },
                                            }),
                                            t,
                                          ],
                                        },
                                        n
                                      )
                                    ),
                                }),
                              ],
                            }),
                          }),
                          (0, j.jsxs)(`div`, {
                            className: `flex-1`,
                            children: [
                              (0, j.jsx)(`span`, {
                                className: `text-xs font-extrabold tracking-widest uppercase`,
                                style: { color: e.color },
                                children: e.subtitle,
                              }),
                              (0, j.jsx)(`h3`, {
                                className: `hw-heading text-3xl font-black text-gray-900 mt-2 mb-4`,
                                children: e.title,
                              }),
                              (0, j.jsx)(`p`, {
                                className: `text-gray-500 leading-relaxed mb-6`,
                                children: e.desc,
                              }),
                              (0, j.jsx)(`ul`, {
                                className: `flex flex-col gap-2`,
                                children: e.detail.map((t, n) =>
                                  (0, j.jsxs)(
                                    `li`,
                                    {
                                      className: `flex items-center gap-3 text-sm text-gray-600`,
                                      children: [
                                        (0, j.jsx)(`span`, {
                                          className: `w-5 h-5 rounded-full flex items-center justify-center shrink-0`,
                                          style: {
                                            background: e.bg,
                                            color: e.color,
                                            border: `1.5px solid ${e.color}40`,
                                          },
                                          children: (0, j.jsx)(`svg`, {
                                            viewBox: `0 0 12 12`,
                                            className: `w-3 h-3`,
                                            fill: `none`,
                                            stroke: `currentColor`,
                                            strokeWidth: 2.5,
                                            strokeLinecap: `round`,
                                            strokeLinejoin: `round`,
                                            children: (0, j.jsx)(`path`, {
                                              d: `M2 6l3 3 5-5`,
                                            }),
                                          }),
                                        }),
                                        t,
                                      ],
                                    },
                                    n
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t < zy.length - 1 &&
                        (0, j.jsx)(`div`, {
                          className: `flex justify-center mt-10`,
                          children: (0, j.jsx)(`div`, {
                            className: `flex flex-col items-center gap-1`,
                            children: [0, 1, 2].map((e) =>
                              (0, j.jsx)(
                                `div`,
                                {
                                  className: `w-1 h-1 rounded-full`,
                                  style: {
                                    background: Fy,
                                    opacity: 1 - e * 0.25,
                                  },
                                },
                                e
                              )
                            ),
                          }),
                        }),
                    ],
                  },
                  e.num
                )
              ),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `py-24`,
        style: {
          background: `linear-gradient(180deg,#F8FAFC 0%,#F1F5F9 100%)`,
        },
        children: (0, j.jsxs)(`div`, {
          className: `max-w-3xl mx-auto px-6`,
          children: [
            (0, j.jsxs)(Ry, {
              className: `text-center mb-14`,
              children: [
                (0, j.jsx)(`span`, {
                  className: `text-xs font-extrabold tracking-[0.25em] uppercase`,
                  style: { color: Fy },
                  children: `FAQ`,
                }),
                (0, j.jsx)(`h2`, {
                  className: `hw-heading text-4xl font-black text-gray-900 mt-3`,
                  children: `Questions we get a lot.`,
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `bg-white rounded-3xl p-8 shadow-sm border border-gray-100`,
              children: By.map((e, t) => (0, j.jsx)(Vy, { ...e, index: t }, t)),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `py-20`,
        style: { background: `linear-gradient(135deg, ${Iy} 0%, ${Ly} 100%)` },
        children: (0, j.jsx)(`div`, {
          className: `max-w-3xl mx-auto px-6 text-center`,
          children: (0, j.jsxs)(Ry, {
            children: [
              (0, j.jsx)(`div`, { className: `text-5xl mb-6`, children: `🛡️` }),
              (0, j.jsx)(`h2`, {
                className: `hw-heading text-4xl font-black text-white mb-4`,
                children: `Ready to try it yourself?`,
              }),
              (0, j.jsx)(`p`, {
                className: `text-gray-400 mb-8 text-lg`,
                children: `No account. No credit card. Just upload and understand.`,
              }),
              (0, j.jsx)(An, {
                to: `/upload`,
                children: (0, j.jsxs)(X.button, {
                  whileHover: {
                    scale: 1.05,
                    boxShadow: `0 16px 40px rgba(233,69,96,0.5)`,
                  },
                  whileTap: { scale: 0.97 },
                  className: `inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-lg`,
                  style: {
                    background: `linear-gradient(135deg, ${Fy}, #c0304f)`,
                  },
                  children: [
                    `Upload Your Policy — Free`,
                    (0, j.jsx)(`svg`, {
                      viewBox: `0 0 20 20`,
                      fill: `currentColor`,
                      className: `w-5 h-5`,
                      children: (0, j.jsx)(`path`, {
                        fillRule: `evenodd`,
                        d: `M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z`,
                        clipRule: `evenodd`,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var Uy = `#E94560`,
  Wy = `#1A1A2E`,
  Gy = `#0F3460`;
function Ky({ children: e, delay: t = 0, className: n = `` }) {
  let r = (0, b.useRef)(null),
    i = Gp(r, { once: !0, margin: `-60px` });
  return (0, j.jsx)(X.div, {
    ref: r,
    className: n,
    initial: { opacity: 0, y: 40 },
    animate: i ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay: t, ease: [0.22, 1, 0.36, 1] },
    children: e,
  });
}
var qy = [
    {
      stat: `47`,
      unit: `pages`,
      label: `Average insurance policy length`,
      icon: `📄`,
    },
    {
      stat: `68%`,
      unit: ``,
      label: `Claims denied due to unknown exclusions`,
      icon: `❌`,
    },
    {
      stat: `9/10`,
      unit: ``,
      label: `People don't fully read their policy`,
      icon: `😶`,
    },
    {
      stat: `₹0`,
      unit: `refund`,
      label: `You get back when a claim is rejected`,
      icon: `💸`,
    },
  ],
  Jy = [
    {
      icon: `🛡️`,
      title: `Coverage Visualizer`,
      desc: `See every item your policy covers mapped into clean visual cards. No more hunting through pages to find if something is included.`,
      tag: `Core Feature`,
      color: `#3B82F6`,
      bg: `#EFF6FF`,
    },
    {
      icon: `🚫`,
      title: `Exclusion Highlighter`,
      desc: `Every exclusion clearly flagged in red. Know exactly what your policy won't cover before you file a claim and face a rejection.`,
      tag: `Core Feature`,
      color: Uy,
      bg: `#FFF0F3`,
    },
    {
      icon: `⚡`,
      title: `Scenario Simulator`,
      desc: `Ask 'What if I get hospitalized?' and get a real YES / NO / PARTIAL answer drawn directly from your actual policy — instantly.`,
      tag: `Wow Feature`,
      color: `#F59E0B`,
      bg: `#FFFBEB`,
    },
    {
      icon: `💬`,
      title: `Policy Chat`,
      desc: `A multi-turn AI chat that knows your policy inside out. Ask anything about a clause, deductible, or process in plain English.`,
      tag: `Wow Feature`,
      color: `#10B981`,
      bg: `#ECFDF5`,
    },
    {
      icon: `📊`,
      title: `Risk Score`,
      desc: `Every policy scored 0–100. The higher the number, the riskier your coverage. Know at a glance whether your policy is solid or full of gaps.`,
      tag: `Insight`,
      color: `#8B5CF6`,
      bg: `#F5F3FF`,
    },
    {
      icon: `📖`,
      title: `Key Terms Glossary`,
      desc: `Every confusing insurance term — deductible, premium, endorsement, liability — explained in one sentence that actually makes sense.`,
      tag: `Insight`,
      color: `#0D7377`,
      bg: `#ECFDFB`,
    },
  ],
  Yy = [
    `Plain-English Summary`,
    `Visual Coverage Map`,
    `Exclusion Highlighter`,
    `What-If Scenario Simulator`,
    `AI Policy Chat`,
    `Risk Score`,
    `Results in under 60 seconds`,
    `No account required`,
  ];
function Xy() {
  return (0, j.jsxs)(`main`, {
    className: `min-h-screen bg-white overflow-x-hidden`,
    style: { fontFamily: `'DM Sans', sans-serif` },
    children: [
      (0, j.jsx)(`style`, {
        children: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap');
        .ab-heading { font-family: 'Fraunces', serif; }
      `,
      }),
      (0, j.jsxs)(`section`, {
        className: `relative pt-20 pb-32 overflow-hidden`,
        style: {
          background: `linear-gradient(135deg, ${Wy} 0%, ${Gy} 60%, #16213E 100%)`,
        },
        children: [
          (0, j.jsx)(`div`, {
            className: `absolute inset-0 pointer-events-none`,
            style: {
              backgroundImage: `linear-gradient(rgba(233,69,96,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(233,69,96,0.04) 1px,transparent 1px)`,
              backgroundSize: `48px 48px`,
            },
          }),
          (0, j.jsx)(`div`, {
            className: `absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none`,
            style: { background: `rgba(233,69,96,0.15)` },
          }),
          (0, j.jsx)(`div`, {
            className: `absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none`,
            style: { background: `rgba(15,52,96,0.5)` },
          }),
          (0, j.jsxs)(`div`, {
            className: `relative z-10 max-w-4xl mx-auto px-6 text-center`,
            children: [
              (0, j.jsxs)(X.div, {
                initial: { opacity: 0, y: -16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6`,
                style: {
                  background: `rgba(233,69,96,0.15)`,
                  border: `1px solid rgba(233,69,96,0.35)`,
                  color: Uy,
                },
                children: [
                  (0, j.jsx)(`span`, {
                    className: `w-1.5 h-1.5 rounded-full animate-pulse`,
                    style: { background: Uy },
                  }),
                  `About InsureEasy`,
                ],
              }),
              (0, j.jsxs)(X.h1, {
                className: `ab-heading text-5xl md:text-6xl font-black text-white leading-tight mb-6`,
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.1 },
                children: [
                  `Insurance was designed`,
                  (0, j.jsx)(`br`, {}),
                  `to be`,
                  ` `,
                  (0, j.jsxs)(`span`, {
                    className: `relative inline-block`,
                    children: [
                      `confusing.`,
                      (0, j.jsx)(X.span, {
                        className: `absolute bottom-1 left-0 w-full h-1 rounded-full`,
                        style: {
                          background: `linear-gradient(90deg, ${Uy}, transparent)`,
                        },
                        initial: { scaleX: 0 },
                        animate: { scaleX: 1 },
                        transition: { delay: 0.9, duration: 0.6 },
                      }),
                    ],
                  }),
                  (0, j.jsx)(`br`, {}),
                  (0, j.jsx)(`span`, {
                    style: { color: Uy },
                    children: `We fix that.`,
                  }),
                ],
              }),
              (0, j.jsx)(X.p, {
                className: `text-lg text-gray-300 max-w-xl mx-auto leading-relaxed`,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.3 },
                children: `InsureEasy uses AI to translate your insurance policy from dense legal jargon into plain English — with visuals, insights, and answers in under 60 seconds.`,
              }),
            ],
          }),
          (0, j.jsx)(`div`, {
            className: `absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none`,
            children: (0, j.jsx)(`svg`, {
              viewBox: `0 0 1440 64`,
              fill: `none`,
              className: `w-full`,
              children: (0, j.jsx)(`path`, {
                d: `M0 64L1440 64L1440 32C1200 64 960 0 720 32C480 64 240 0 0 32L0 64Z`,
                fill: `white`,
              }),
            }),
          }),
        ],
      }),
      (0, j.jsx)(`section`, {
        className: `py-24 bg-white`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-5xl mx-auto px-6`,
          children: [
            (0, j.jsxs)(Ky, {
              className: `text-center mb-16`,
              children: [
                (0, j.jsx)(`span`, {
                  className: `text-xs font-extrabold tracking-[0.25em] uppercase`,
                  style: { color: Uy },
                  children: `The Problem`,
                }),
                (0, j.jsxs)(`h2`, {
                  className: `ab-heading text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight`,
                  children: [
                    `Policies feel overwhelming,`,
                    (0, j.jsx)(`br`, {}),
                    `legalistic, and confusing.`,
                  ],
                }),
                (0, j.jsx)(`p`, {
                  className: `text-gray-500 mt-5 max-w-2xl mx-auto text-base leading-relaxed`,
                  children: `Insurance companies write policies for lawyers, not for customers. The result? Millions of people pay for coverage they don't understand — and lose money when they need it most.`,
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `grid grid-cols-2 md:grid-cols-4 gap-4 mb-16`,
              children: qy.map((e, t) =>
                (0, j.jsx)(
                  Ky,
                  {
                    delay: t * 0.1,
                    children: (0, j.jsxs)(X.div, {
                      whileHover: { y: -6 },
                      transition: {
                        type: `spring`,
                        stiffness: 300,
                        damping: 22,
                      },
                      className: `bg-white rounded-2xl p-6 text-center flex flex-col items-center gap-3`,
                      style: {
                        boxShadow: `0 4px 24px rgba(0,0,0,0.07)`,
                        border: `1px solid rgba(0,0,0,0.06)`,
                      },
                      children: [
                        (0, j.jsx)(`div`, {
                          className: `text-3xl`,
                          children: e.icon,
                        }),
                        (0, j.jsxs)(`div`, {
                          children: [
                            (0, j.jsxs)(`div`, {
                              className: `ab-heading text-3xl font-black`,
                              style: { color: Uy },
                              children: [
                                e.stat,
                                (0, j.jsx)(`span`, {
                                  className: `text-base ml-0.5 text-gray-400`,
                                  children: e.unit,
                                }),
                              ],
                            }),
                            (0, j.jsx)(`p`, {
                              className: `text-xs text-gray-500 mt-1 leading-snug font-medium`,
                              children: e.label,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.label
                )
              ),
            }),
            (0, j.jsx)(Ky, {
              delay: 0.1,
              children: (0, j.jsxs)(`div`, {
                className: `grid md:grid-cols-2 gap-6`,
                children: [
                  (0, j.jsxs)(`div`, {
                    className: `rounded-2xl p-6 flex flex-col gap-4`,
                    style: {
                      background: `#FEF2F2`,
                      border: `2px solid #FECACA`,
                    },
                    children: [
                      (0, j.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, j.jsx)(`span`, {
                            className: `text-2xl`,
                            children: `😰`,
                          }),
                          (0, j.jsx)(`h3`, {
                            className: `font-extrabold text-red-700`,
                            children: `What You Get Today`,
                          }),
                        ],
                      }),
                      [
                        `Notwithstanding the provisions of Section 4(b)(ii)...`,
                        `Subject to the deductible stipulated hereinabove...`,
                        `Excluding pre-existing conditions per Clause 12(c)...`,
                        `See endorsement form HO-3, subsection III, para 2...`,
                      ].map((e, t) =>
                        (0, j.jsxs)(
                          `div`,
                          {
                            className: `flex items-start gap-2 text-sm text-red-600 bg-white rounded-lg px-3 py-2 font-mono`,
                            style: { border: `1px solid #FECACA` },
                            children: [
                              (0, j.jsx)(`span`, {
                                className: `mt-0.5 shrink-0`,
                                children: `❌`,
                              }),
                              (0, j.jsx)(`span`, {
                                className: `opacity-80 italic`,
                                children: e,
                              }),
                            ],
                          },
                          t
                        )
                      ),
                      (0, j.jsx)(`p`, {
                        className: `text-xs text-red-500 font-semibold text-center`,
                        children: `47 more pages of this...`,
                      }),
                    ],
                  }),
                  (0, j.jsxs)(`div`, {
                    className: `rounded-2xl p-6 flex flex-col gap-4`,
                    style: {
                      background: `#ECFDF5`,
                      border: `2px solid #6EE7B7`,
                    },
                    children: [
                      (0, j.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, j.jsx)(`span`, {
                            className: `text-2xl`,
                            children: `✅`,
                          }),
                          (0, j.jsx)(`h3`, {
                            className: `font-extrabold text-green-700`,
                            children: `What InsureEasy Gives You`,
                          }),
                        ],
                      }),
                      [
                        {
                          icon: `🔥`,
                          text: `Fire & smoke damage — fully covered up to ₹5,00,000`,
                          color: `text-green-700`,
                        },
                        {
                          icon: `🏥`,
                          text: `Hospitalization — covered after 24hr admission`,
                          color: `text-green-700`,
                        },
                        {
                          icon: `🚫`,
                          text: `Dental treatment — NOT covered under this policy`,
                          color: `text-red-600`,
                        },
                        {
                          icon: `⚡`,
                          text: `Pre-existing conditions — partial cover after 2 years`,
                          color: `text-yellow-700`,
                        },
                      ].map((e, t) =>
                        (0, j.jsxs)(
                          `div`,
                          {
                            className: `flex items-center gap-2 text-sm ${e.color} bg-white rounded-lg px-3 py-2 font-semibold`,
                            style: { border: `1px solid rgba(0,0,0,0.06)` },
                            children: [
                              (0, j.jsx)(`span`, { children: e.icon }),
                              (0, j.jsx)(`span`, { children: e.text }),
                            ],
                          },
                          t
                        )
                      ),
                      (0, j.jsxs)(`div`, {
                        className: `flex items-center justify-center gap-2 text-xs text-green-600 font-bold`,
                        children: [
                          (0, j.jsx)(`span`, {
                            className: `w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse`,
                          }),
                          `Analyzed in 23 seconds`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `py-24`,
        style: {
          background: `linear-gradient(180deg,#F8FAFC 0%,#F1F5F9 100%)`,
        },
        children: (0, j.jsxs)(`div`, {
          className: `max-w-5xl mx-auto px-6`,
          children: [
            (0, j.jsxs)(Ky, {
              className: `text-center mb-16`,
              children: [
                (0, j.jsx)(`span`, {
                  className: `text-xs font-extrabold tracking-[0.25em] uppercase`,
                  style: { color: Uy },
                  children: `The Solution`,
                }),
                (0, j.jsxs)(`h2`, {
                  className: `ab-heading text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight`,
                  children: [
                    `When policies become`,
                    ` `,
                    (0, j.jsx)(`span`, {
                      style: { color: Uy },
                      children: `Interactive Visual Summaries`,
                    }),
                    `,`,
                    (0, j.jsx)(`br`, {}),
                    `everything changes.`,
                  ],
                }),
                (0, j.jsx)(`p`, {
                  className: `text-gray-500 mt-5 max-w-2xl mx-auto text-base leading-relaxed`,
                  children: `Research shows that when customers truly understand their coverage, they make smarter decisions. InsureEasy makes that possible — for anyone, instantly, for free.`,
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `grid md:grid-cols-3 gap-6`,
              children: [
                {
                  icon: `🗣️`,
                  title: `Plain-Language First`,
                  desc: `Every clause rewritten in simple English. If a 12-year-old can understand it, we've done our job.`,
                  color: `#3B82F6`,
                },
                {
                  icon: `👁️`,
                  title: `Visual Before Text`,
                  desc: `Coverage cards, risk meters, exclusion badges. See your policy before reading it. Visuals are 60,000x faster to process.`,
                  color: Uy,
                },
                {
                  icon: `🤝`,
                  title: `Interactive, Not Static`,
                  desc: `Ask questions. Simulate scenarios. Chat with your policy. Understanding insurance should be a conversation, not a document.`,
                  color: `#10B981`,
                },
              ].map((e, t) =>
                (0, j.jsx)(
                  Ky,
                  {
                    delay: t * 0.12,
                    children: (0, j.jsxs)(X.div, {
                      whileHover: {
                        y: -8,
                        boxShadow: `0 24px 48px rgba(0,0,0,0.1)`,
                      },
                      transition: {
                        type: `spring`,
                        stiffness: 300,
                        damping: 22,
                      },
                      className: `bg-white rounded-2xl p-7 h-full flex flex-col gap-4`,
                      style: {
                        boxShadow: `0 4px 20px rgba(0,0,0,0.06)`,
                        border: `1px solid rgba(0,0,0,0.05)`,
                      },
                      children: [
                        (0, j.jsx)(`div`, {
                          className: `w-14 h-14 rounded-2xl flex items-center justify-center text-3xl`,
                          style: {
                            background: `${e.color}12`,
                            border: `1.5px solid ${e.color}25`,
                          },
                          children: e.icon,
                        }),
                        (0, j.jsx)(`h3`, {
                          className: `font-extrabold text-gray-900 text-lg`,
                          children: e.title,
                        }),
                        (0, j.jsx)(`p`, {
                          className: `text-gray-500 text-sm leading-relaxed flex-1`,
                          children: e.desc,
                        }),
                        (0, j.jsx)(`div`, {
                          className: `h-1 w-12 rounded-full`,
                          style: { background: e.color },
                        }),
                      ],
                    }),
                  },
                  e.title
                )
              ),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `py-24 bg-white`,
        children: (0, j.jsxs)(`div`, {
          className: `max-w-5xl mx-auto px-6`,
          children: [
            (0, j.jsxs)(Ky, {
              className: `text-center mb-16`,
              children: [
                (0, j.jsx)(`span`, {
                  className: `text-xs font-extrabold tracking-[0.25em] uppercase`,
                  style: { color: Uy },
                  children: `Features`,
                }),
                (0, j.jsxs)(`h2`, {
                  className: `ab-heading text-4xl md:text-5xl font-black text-gray-900 mt-3`,
                  children: [
                    `Six tools. One dashboard.`,
                    (0, j.jsx)(`br`, {}),
                    `Complete clarity.`,
                  ],
                }),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `grid md:grid-cols-2 lg:grid-cols-3 gap-5`,
              children: Jy.map((e, t) =>
                (0, j.jsx)(
                  Ky,
                  {
                    delay: t * 0.08,
                    children: (0, j.jsxs)(X.div, {
                      whileHover: {
                        y: -6,
                        boxShadow: `0 20px 48px rgba(0,0,0,0.09)`,
                      },
                      transition: {
                        type: `spring`,
                        stiffness: 300,
                        damping: 22,
                      },
                      className: `relative rounded-2xl p-6 h-full flex flex-col gap-4`,
                      style: {
                        background: e.bg,
                        border: `1.5px solid ${e.color}20`,
                      },
                      children: [
                        (0, j.jsx)(`span`, {
                          className: `self-start text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full`,
                          style: { background: `${e.color}18`, color: e.color },
                          children: e.tag,
                        }),
                        (0, j.jsx)(`div`, {
                          className: `text-4xl`,
                          children: e.icon,
                        }),
                        (0, j.jsx)(`h3`, {
                          className: `font-extrabold text-gray-900 text-lg leading-tight`,
                          children: e.title,
                        }),
                        (0, j.jsx)(`p`, {
                          className: `text-gray-500 text-sm leading-relaxed flex-1`,
                          children: e.desc,
                        }),
                        (0, j.jsx)(`div`, {
                          className: `h-1 w-10 rounded-full`,
                          style: { background: `${e.color}60` },
                        }),
                        (0, j.jsx)(`div`, {
                          className: `absolute top-0 right-0 w-16 h-16 rounded-bl-[60px] rounded-tr-2xl opacity-[0.06]`,
                          style: { background: e.color },
                        }),
                      ],
                    }),
                  },
                  e.title
                )
              ),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `py-24`,
        style: {
          background: `linear-gradient(180deg,#F8FAFC 0%,#F1F5F9 100%)`,
        },
        children: (0, j.jsxs)(`div`, {
          className: `max-w-3xl mx-auto px-6`,
          children: [
            (0, j.jsxs)(Ky, {
              className: `text-center mb-14`,
              children: [
                (0, j.jsx)(`span`, {
                  className: `text-xs font-extrabold tracking-[0.25em] uppercase`,
                  style: { color: Uy },
                  children: `Why InsureEasy`,
                }),
                (0, j.jsx)(`h2`, {
                  className: `ab-heading text-4xl font-black text-gray-900 mt-3`,
                  children: `Nothing else does all of this.`,
                }),
              ],
            }),
            (0, j.jsx)(Ky, {
              delay: 0.1,
              children: (0, j.jsxs)(`div`, {
                className: `bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100`,
                children: [
                  (0, j.jsxs)(`div`, {
                    className: `grid grid-cols-3 px-6 py-4`,
                    style: {
                      background: `linear-gradient(135deg, ${Wy}, ${Gy})`,
                    },
                    children: [
                      (0, j.jsx)(`div`, {
                        className: `text-xs font-bold text-gray-400 uppercase tracking-widest`,
                        children: `Feature`,
                      }),
                      (0, j.jsx)(`div`, {
                        className: `text-center text-xs font-extrabold text-white uppercase tracking-widest`,
                        children: `🛡️ InsureEasy`,
                      }),
                      (0, j.jsx)(`div`, {
                        className: `text-center text-xs font-bold text-gray-400 uppercase tracking-widest`,
                        children: `Traditional`,
                      }),
                    ],
                  }),
                  Yy.map((e, t) =>
                    (0, j.jsxs)(
                      `div`,
                      {
                        className: `grid grid-cols-3 px-6 py-4 border-b border-gray-50 last:border-0 ${
                          t % 2 == 0 ? `bg-white` : `bg-gray-50/50`
                        }`,
                        children: [
                          (0, j.jsx)(`div`, {
                            className: `text-sm font-semibold text-gray-700 flex items-center`,
                            children: e,
                          }),
                          (0, j.jsx)(`div`, {
                            className: `flex justify-center`,
                            children: (0, j.jsx)(`span`, {
                              className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold`,
                              style: {
                                background: `#DCFCE7`,
                                color: `#15803D`,
                              },
                              children: `✓`,
                            }),
                          }),
                          (0, j.jsx)(`div`, {
                            className: `flex justify-center`,
                            children: (0, j.jsx)(`span`, {
                              className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold`,
                              style: {
                                background: `#FEE2E2`,
                                color: `#B91C1C`,
                              },
                              children: `✗`,
                            }),
                          }),
                        ],
                      },
                      e
                    )
                  ),
                ],
              }),
            }),
          ],
        }),
      }),
      (0, j.jsx)(`section`, {
        className: `py-20`,
        style: { background: `linear-gradient(135deg, ${Wy} 0%, ${Gy} 100%)` },
        children: (0, j.jsx)(`div`, {
          className: `max-w-3xl mx-auto px-6 text-center`,
          children: (0, j.jsxs)(Ky, {
            children: [
              (0, j.jsx)(`div`, { className: `text-5xl mb-6`, children: `🛡️` }),
              (0, j.jsx)(`h2`, {
                className: `ab-heading text-4xl font-black text-white mb-4`,
                children: `Stop guessing. Start knowing.`,
              }),
              (0, j.jsx)(`p`, {
                className: `text-gray-400 mb-8 text-lg max-w-xl mx-auto leading-relaxed`,
                children: `Upload any insurance policy and get complete clarity in under 60 seconds. No account, no credit card, no confusion.`,
              }),
              (0, j.jsxs)(`div`, {
                className: `flex flex-wrap justify-center gap-4`,
                children: [
                  (0, j.jsx)(An, {
                    to: `/upload`,
                    children: (0, j.jsxs)(X.button, {
                      whileHover: {
                        scale: 1.05,
                        boxShadow: `0 16px 40px rgba(233,69,96,0.5)`,
                      },
                      whileTap: { scale: 0.97 },
                      className: `inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-base`,
                      style: {
                        background: `linear-gradient(135deg, ${Uy}, #c0304f)`,
                      },
                      children: [
                        `Upload Your Policy — Free`,
                        (0, j.jsx)(`svg`, {
                          viewBox: `0 0 20 20`,
                          fill: `currentColor`,
                          className: `w-5 h-5`,
                          children: (0, j.jsx)(`path`, {
                            fillRule: `evenodd`,
                            d: `M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z`,
                            clipRule: `evenodd`,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, j.jsx)(An, {
                    to: `/how-it-works`,
                    children: (0, j.jsx)(X.button, {
                      whileHover: {
                        scale: 1.05,
                        background: `rgba(255,255,255,0.1)`,
                      },
                      whileTap: { scale: 0.97 },
                      className: `inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white text-base border border-white/20 transition-colors duration-200`,
                      children: `See How It Works`,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Zy() {
  let { pathname: e } = lt();
  return (
    b.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
var Qy = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};
function $y() {
  let e = lt();
  return (0, j.jsx)(xi, {
    mode: `wait`,
    children: (0, j.jsx)(
      X.div,
      {
        variants: Qy,
        initial: `initial`,
        animate: `animate`,
        exit: `exit`,
        children: (0, j.jsxs)(zt, {
          location: e,
          children: [
            (0, j.jsx)(Lt, { path: `/`, element: (0, j.jsx)(pm, {}) }),
            (0, j.jsx)(Lt, { path: `/upload`, element: (0, j.jsx)(ly, {}) }),
            (0, j.jsx)(Lt, { path: `/results`, element: (0, j.jsx)(Py, {}) }),
            (0, j.jsx)(Lt, {
              path: `/how-it-works`,
              element: (0, j.jsx)(Hy, {}),
            }),
            (0, j.jsx)(Lt, { path: `/about`, element: (0, j.jsx)(Xy, {}) }),
          ],
        }),
      },
      e.pathname
    ),
  });
}
function eb() {
  return (0, j.jsxs)(Dn, {
    children: [
      (0, j.jsx)(Zy, {}),
      (0, j.jsx)(ii, {
        position: `top-right`,
        toastOptions: {
          duration: 4e3,
          style: {
            background: `#1A1A2E`,
            color: `#fff`,
            fontSize: `14px`,
            fontWeight: 500,
            borderRadius: `12px`,
            border: `1px solid rgba(233,69,96,0.25)`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
          },
          success: { iconTheme: { primary: `#4ADE80`, secondary: `#1A1A2E` } },
          error: { iconTheme: { primary: `#E94560`, secondary: `#1A1A2E` } },
        },
      }),
      (0, j.jsxs)(`div`, {
        className: `flex flex-col min-h-screen`,
        children: [
          (0, j.jsx)(qp, {}),
          (0, j.jsx)(`div`, {
            className: `flex-1`,
            children: (0, j.jsx)($y, {}),
          }),
          (0, j.jsx)(Qp, {}),
        ],
      }),
    ],
  });
}
(0, x.createRoot)(document.getElementById(`root`)).render(
  (0, j.jsx)(b.StrictMode, { children: (0, j.jsx)(eb, {}) })
);
