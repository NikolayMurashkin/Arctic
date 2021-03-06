(() => {
  "use strict";
  function t(t) {
    this.type = t;
  }
  (t.prototype.init = function () {
    const t = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let t = 0; t < this.nodes.length; t++) {
      const e = this.nodes[t],
        n = e.dataset.da.trim().split(","),
        o = {};
      (o.element = e),
        (o.parent = e.parentNode),
        (o.destination = document.querySelector(n[0].trim())),
        (o.breakpoint = n[1] ? n[1].trim() : "767"),
        (o.place = n[2] ? n[2].trim() : "last"),
        (o.index = this.indexInParent(o.parent, o.element)),
        this.оbjects.push(o);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (t) {
          return (
            "(" + this.type + "-width: " + t.breakpoint + "px)," + t.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (t, e, n) {
          return Array.prototype.indexOf.call(n, t) === e;
        }
      ));
    for (let e = 0; e < this.mediaQueries.length; e++) {
      const n = this.mediaQueries[e],
        o = String.prototype.split.call(n, ","),
        r = window.matchMedia(o[0]),
        a = o[1],
        s = Array.prototype.filter.call(this.оbjects, function (t) {
          return t.breakpoint === a;
        });
      r.addListener(function () {
        t.mediaHandler(r, s);
      }),
        this.mediaHandler(r, s);
    }
  }),
    (t.prototype.mediaHandler = function (t, e) {
      if (t.matches)
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          (n.index = this.indexInParent(n.parent, n.element)),
            this.moveTo(n.place, n.element, n.destination);
        }
      else
        for (let t = e.length - 1; t >= 0; t--) {
          const n = e[t];
          n.element.classList.contains(this.daClassname) &&
            this.moveBack(n.parent, n.element, n.index);
        }
    }),
    (t.prototype.moveTo = function (t, e, n) {
      e.classList.add(this.daClassname),
        "last" === t || t >= n.children.length
          ? n.insertAdjacentElement("beforeend", e)
          : "first" !== t
          ? n.children[t].insertAdjacentElement("beforebegin", e)
          : n.insertAdjacentElement("afterbegin", e);
    }),
    (t.prototype.moveBack = function (t, e, n) {
      e.classList.remove(this.daClassname),
        void 0 !== t.children[n]
          ? t.children[n].insertAdjacentElement("beforebegin", e)
          : t.insertAdjacentElement("beforeend", e);
    }),
    (t.prototype.indexInParent = function (t, e) {
      const n = Array.prototype.slice.call(t.children);
      return Array.prototype.indexOf.call(n, e);
    }),
    (t.prototype.arraySort = function (t) {
      "min" === this.type
        ? Array.prototype.sort.call(t, function (t, e) {
            return t.breakpoint === e.breakpoint
              ? t.place === e.place
                ? 0
                : "first" === t.place || "last" === e.place
                ? -1
                : "last" === t.place || "first" === e.place
                ? 1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          })
        : Array.prototype.sort.call(t, function (t, e) {
            return t.breakpoint === e.breakpoint
              ? t.place === e.place
                ? 0
                : "first" === t.place || "last" === e.place
                ? 1
                : "last" === t.place || "first" === e.place
                ? -1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          });
    });
  new t("max").init();
  let e = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
      );
    },
  };
  let n = !0,
    o = (t = 500) => {
      let e = document.querySelector("body");
      if (n) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < o.length; t++) {
            o[t].style.paddingRight = "0px";
          }
          (e.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, t);
      }
    },
    r = (t = 500) => {
      let e = document.querySelector("body");
      if (n) {
        let o = document.querySelectorAll("[data-lp]");
        for (let t = 0; t < o.length; t++) {
          o[t].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (e.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (n = !1),
          setTimeout(function () {
            n = !0;
          }, t);
      }
    };
  function a(t) {
    setTimeout(() => {
      window.FLS && console.log(t);
    }, 0);
  }
  function s(t) {
    return t.filter(function (t, e, n) {
      return n.indexOf(t) === e;
    });
  }
  let i = (t, e = !1, n = 500, r = 0) => {
    const s = document.querySelector(t);
    if (s) {
      let i = "",
        c = 0;
      e &&
        ((i = "header.header"), (c = document.querySelector(i).offsetHeight));
      let l = {
        speedAsDuration: !0,
        speed: n,
        header: i,
        offset: r,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (o(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(s, "", l);
      else {
        let t = s.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: c ? t - c : t, behavior: "smooth" });
      }
      a(`[gotoBlock]: Юхуу...едем к ${t}`);
    } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
  };
  class c {
    constructor(t) {
      (this.config = Object.assign({ logging: !0 }, t)),
        this.observer,
        !document.documentElement.classList.contains("watcher") &&
          this.scrollWatcherRun();
    }
    scrollWatcherUpdate() {
      this.scrollWatcherRun();
    }
    scrollWatcherRun() {
      document.documentElement.classList.add("watcher"),
        this.scrollWatcherConstructor(
          document.querySelectorAll("[data-watch]")
        );
    }
    scrollWatcherConstructor(t) {
      if (t.length) {
        this.scrollWatcherLogging(
          `Проснулся, слежу за объектами (${t.length})...`
        ),
          s(
            Array.from(t).map(function (t) {
              return `${
                t.dataset.watchRoot ? t.dataset.watchRoot : null
              }|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
            })
          ).forEach((e) => {
            let n = e.split("|"),
              o = { root: n[0], margin: n[1], threshold: n[2] },
              r = Array.from(t).filter(function (t) {
                let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                  n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                  r = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                if (
                  String(e) === o.root &&
                  String(n) === o.margin &&
                  String(r) === o.threshold
                )
                  return t;
              }),
              a = this.getScrollWatcherConfig(o);
            this.scrollWatcherInit(r, a);
          });
      } else
        this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
    }
    getScrollWatcherConfig(t) {
      let e = {};
      if (
        (document.querySelector(t.root)
          ? (e.root = document.querySelector(t.root))
          : "null" !== t.root &&
            this.scrollWatcherLogging(
              `Эмм... родительского объекта ${t.root} нет на странице`
            ),
        (e.rootMargin = t.margin),
        !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
      ) {
        if ("prx" === t.threshold) {
          t.threshold = [];
          for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
        } else t.threshold = t.threshold.split(",");
        return (e.threshold = t.threshold), e;
      }
      this.scrollWatcherLogging(
        "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
      );
    }
    scrollWatcherCreate(t) {
      this.observer = new IntersectionObserver((t, e) => {
        t.forEach((t) => {
          this.scrollWatcherCallback(t, e);
        });
      }, t);
    }
    scrollWatcherInit(t, e) {
      this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
    }
    scrollWatcherIntersecting(t, e) {
      t.isIntersecting
        ? (!e.classList.contains("_watcher-view") &&
            e.classList.add("_watcher-view"),
          this.scrollWatcherLogging(
            `Я вижу ${e.classList}, добавил класс _watcher-view`
          ))
        : (e.classList.contains("_watcher-view") &&
            e.classList.remove("_watcher-view"),
          this.scrollWatcherLogging(
            `Я не вижу ${e.classList}, убрал класс _watcher-view`
          ));
    }
    scrollWatcherOff(t, e) {
      e.unobserve(t),
        this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
    }
    scrollWatcherLogging(t) {
      this.config.logging && a(`[Наблюдатель]: ${t}`);
    }
    scrollWatcherCallback(t, e) {
      const n = t.target;
      this.scrollWatcherIntersecting(t, n),
        n.hasAttribute("data-watch-once") &&
          t.isIntersecting &&
          this.scrollWatcherOff(n, e),
        document.dispatchEvent(
          new CustomEvent("watcherCallback", { detail: { entry: t } })
        );
    }
  }
  let l = !1;
  setTimeout(() => {
    if (l) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0);
  const d = document.querySelectorAll("._anim-items");
  if (d.length > 0) {
    function t(t) {
      for (let t = 0; t < d.length; t++) {
        const n = d[t],
          o = n.offsetHeight,
          r = e(n).top,
          a = 4;
        let s = window.innerHeight - o / a;
        o > window.innerHeight &&
          (s = window.innerHeight - window.innerHeight / a),
          window.pageYOffset > r - s && window.pageYOffset < r + o
            ? n.classList.add("_scrolled")
            : n.classList.contains("_anim-no-hide") ||
              n.classList.remove("_scrolled");
      }
    }
    function e(t) {
      const e = t.getBoundingClientRect(),
        n = window.pageXOffset || document.documentElement.scrollLeft,
        o = window.pageYOffset || document.documentElement.scrollTop;
      return { top: e.top + o, left: e.left + n };
    }
    window.addEventListener("scroll", t),
      setTimeout(() => {
        t();
      }, 300);
  }
  (window.FLS = !0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    e.any() && document.documentElement.classList.add("touch"),
    (function () {
      let t = document.querySelector(".icon-menu");
      t &&
        t.addEventListener("click", function (t) {
          n &&
            (((t = 500) => {
              document.documentElement.classList.contains("lock") ? o(t) : r(t);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
        function t() {
          let t = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${t}px`);
        }
        window.addEventListener("resize", t), t();
      }
    })(),
    new c({}),
    (function () {
      function t(t) {
        if ("click" === t.type) {
          const e = t.target;
          if (e.closest("[data-goto]")) {
            const n = e.closest("[data-goto]"),
              o = n.dataset.goto ? n.dataset.goto : "",
              r = !!n.hasAttribute("data-goto-header"),
              a = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
            i(o, r, a), t.preventDefault();
          }
        } else if ("watcherCallback" === t.type && t.detail) {
          const e = t.detail.entry,
            n = e.target;
          if ("navigator" === n.dataset.watch) {
            const t = n.id,
              o =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${t}"]`));
            e.isIntersecting
              ? o && o.classList.add("_navigator-active")
              : o && o.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", t),
        document.addEventListener("watcherCallback", t);
    })(),
    (function () {
      l = !0;
      const t = document.querySelector("header.header"),
        e = t.hasAttribute("data-scroll-show"),
        n = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        o = t.dataset.scroll ? t.dataset.scroll : 1;
      let r,
        a = 0;
      document.addEventListener("windowScroll", function (s) {
        const i = window.scrollY;
        clearTimeout(r),
          i >= o
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              e &&
                (i > a
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (r = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, n))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              e &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (a = i <= 0 ? 0 : i);
      });
    })();
})();
