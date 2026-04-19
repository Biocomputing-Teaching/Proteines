(function () {
  var path = window.location.pathname;
  var isPractice =
    path.indexOf("/QiEP-P1-") !== -1 ||
    path.indexOf("/QiEP/2025-2026/practica-1/") !== -1 ||
    path.indexOf("/QiEP/2024-2025/P1/") !== -1 ||
    path.indexOf("/QiEP/2022-2023/Practica1") !== -1;

  if (!isPractice) return;
  if (document.querySelector("#TOC, .tocify, .qiep-auto-toc")) return;

  function injectStyle() {
    if (document.getElementById("qiep-auto-toc-style")) return;

    var style = document.createElement("style");
    style.id = "qiep-auto-toc-style";
    style.textContent = [
      ".qiep-toc-layout{display:block}",
      ".qiep-toc-content{min-width:0;padding-left:min(300px,25%);padding-right:40px}",
      "#TOC.qiep-auto-toc,.qiep-toc{position:fixed;top:96px;left:max(1rem,calc((100vw - 1120px)/2));width:20%;max-width:260px;max-height:85vh;overflow:auto;margin:25px 0 20px 0;padding:0;border:1px solid #ccc;border-radius:6px;background:#fff;box-shadow:none;z-index:4}",
      "#TOC.qiep-auto-toc ul,#TOC.qiep-auto-toc li,.qiep-toc ul,.qiep-toc li{list-style:none;margin:0;padding:0;border:none;line-height:20px}",
      "#TOC.qiep-auto-toc a,.qiep-toc a{display:block;margin:0;padding:5px 8px;color:#2fa4e7;text-decoration:none;border-radius:0;line-height:1.25}",
      "#TOC.qiep-auto-toc a:hover,#TOC.qiep-auto-toc a:focus,.qiep-toc a:hover,.qiep-toc a:focus{background:#eeeeee;color:#157ab5;text-decoration:none}",
      "#TOC.qiep-auto-toc a.is-active,.qiep-toc a.is-active{background:#2fa4e7;color:#fff}",
      ".qiep-auto-toc__item--h1>a,.qiep-toc>ul>li>a{text-indent:10px}",
      ".qiep-auto-toc__item--h2>a,.qiep-toc .qiep-sub a{text-indent:20px;font-size:.9em}",
      ".qiep-auto-toc__item--h3>a{text-indent:30px;font-size:.9em}",
      ".qiep-manual-index-hidden{display:none!important}",
      "@media(max-width:900px){.qiep-toc-content{padding-left:0;padding-right:0}#TOC.qiep-auto-toc,.qiep-toc{position:relative;top:auto;left:auto;width:100%;max-width:none;max-height:none;margin:0 0 1.5rem 0}}"
    ].join("");

    document.head.appendChild(style);
  }

  var existingToc = document.querySelector(".qiep-toc");
  if (existingToc) {
    injectStyle();
    var existingContent = document.querySelector(".qiep-content");
    var existingShell = document.querySelector(".qiep-shell");
    if (existingShell) existingShell.classList.add("qiep-toc-layout");
    if (existingContent) existingContent.classList.add("qiep-toc-content");
    return;
  }

  var root =
    document.querySelector("article.page-card") ||
    document.querySelector(".main-container") ||
    document.querySelector("main") ||
    document.body;

  if (!root) return;

  var headings = Array.prototype.slice
    .call(root.querySelectorAll("h1, h2, h3"))
    .filter(function (heading) {
      return (
        !heading.closest("nav") &&
        !heading.closest("header.page-card__header") &&
        !heading.closest(".qiep-auto-toc") &&
        !heading.classList.contains("toc-ignore") &&
        !heading.classList.contains("title") &&
        !heading.classList.contains("subtitle") &&
        !heading.classList.contains("author") &&
        !heading.classList.contains("date")
      );
    });

  if (headings.length < 3) return;

  var usedIds = {};

  function slugify(text) {
    return text
      .toString()
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "seccio";
  }

  function ensureId(heading) {
    var base = heading.id || slugify(heading.textContent);
    var id = base;
    var index = 2;
    while (usedIds[id] || (document.getElementById(id) && document.getElementById(id) !== heading)) {
      id = base + "-" + index;
      index += 1;
    }
    usedIds[id] = true;
    heading.id = id;
    return id;
  }

  function hideManualIndex() {
    var indexHeading = headings.find(function (heading) {
      return /^(índex|index)$/i.test(heading.textContent.trim());
    });

    if (!indexHeading) return;

    var level = Number(indexHeading.tagName.substring(1));
    var node = indexHeading.nextElementSibling;
    indexHeading.classList.add("qiep-manual-index-hidden");

    while (node) {
      if (/^H[1-6]$/.test(node.tagName) && Number(node.tagName.substring(1)) <= level) break;
      var next = node.nextElementSibling;
      node.classList.add("qiep-manual-index-hidden");
      node = next;
    }
  }

  hideManualIndex();

  var nav = document.createElement("nav");
  nav.id = "TOC";
  nav.className = "tocify qiep-auto-toc";
  nav.setAttribute("aria-label", "Índex de la pràctica");

  var list = document.createElement("ul");
  list.className = "qiep-auto-toc__list";

  headings.forEach(function (heading) {
    if (heading.classList.contains("qiep-manual-index-hidden")) return;

    var item = document.createElement("li");
    item.className = "qiep-auto-toc__item qiep-auto-toc__item--" + heading.tagName.toLowerCase();

    var link = document.createElement("a");
    link.href = "#" + ensureId(heading);
    link.textContent = heading.textContent.replace(/\s+/g, " ").trim();

    item.appendChild(link);
    list.appendChild(item);
  });

  if (!list.children.length) return;

  nav.appendChild(list);
  injectStyle();

  var firstHeading = headings.find(function (heading) {
    return !heading.classList.contains("qiep-manual-index-hidden");
  });

  if (firstHeading && firstHeading.parentNode) {
    root.classList.add("qiep-toc-layout");
    if (!root.classList.contains("toc-content")) {
      root.classList.add("qiep-toc-content");
    }
    firstHeading.parentNode.insertBefore(nav, firstHeading);
  }

  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
  var linkById = links.reduce(function (memo, link) {
    memo[link.getAttribute("href").slice(1)] = link;
    return memo;
  }, {});

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; })[0];

        if (!visible) return;
        links.forEach(function (link) { link.classList.remove("is-active"); });
        if (linkById[visible.target.id]) {
          linkById[visible.target.id].classList.add("is-active");
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.01 }
    );

    headings.forEach(function (heading) {
      if (!heading.classList.contains("qiep-manual-index-hidden")) observer.observe(heading);
    });
  }
})();
