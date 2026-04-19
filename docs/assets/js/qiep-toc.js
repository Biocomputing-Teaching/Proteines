(function () {
  var path = window.location.pathname;
  var isPractice =
    path.indexOf("/QiEP-P1-") !== -1 ||
    path.indexOf("/QiEP/2025-2026/practica-1/") !== -1 ||
    path.indexOf("/QiEP/2024-2025/P1/") !== -1 ||
    path.indexOf("/QiEP/2022-2023/Practica1") !== -1;

  if (!isPractice) return;
  if (document.querySelector(".qiep-toc, #TOC, .tocify, .qiep-auto-toc")) return;

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
        !heading.closest(".qiep-auto-toc")
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
  nav.className = "qiep-auto-toc";
  nav.setAttribute("aria-label", "Índex de la pràctica");

  var title = document.createElement("p");
  title.className = "qiep-auto-toc__title";
  title.textContent = "Menú";
  nav.appendChild(title);

  var list = document.createElement("ol");
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

  var style = document.createElement("style");
  style.textContent = [
    ".qiep-auto-toc{position:sticky;top:1rem;float:left;width:min(260px,100%);max-height:calc(100vh - 2rem);overflow:auto;margin:.25rem 1.5rem 1rem 0;padding:.9rem;border:1px solid rgba(30,27,24,.14);border-radius:8px;background:#f6faf9;box-shadow:0 10px 28px rgba(23,33,43,.08);z-index:2}",
    ".qiep-auto-toc__title{margin:0 0 .55rem;color:#0d6f78;font-size:.84rem;font-weight:800;text-transform:uppercase}",
    ".qiep-auto-toc__list{margin:0;padding:0;list-style:none}",
    ".qiep-auto-toc__item+ .qiep-auto-toc__item{margin-top:.18rem}",
    ".qiep-auto-toc a{display:block;border-radius:6px;padding:.28rem .45rem;color:#17212b;line-height:1.25;text-decoration:none}",
    ".qiep-auto-toc a:hover,.qiep-auto-toc a:focus{background:#e5f0f1;color:#0d6f78}",
    ".qiep-auto-toc__item--h2{margin-left:.65rem;border-left:2px solid #c9d9dc;padding-left:.35rem;font-size:.94rem}",
    ".qiep-auto-toc__item--h3{margin-left:1.2rem;border-left:2px solid #dde7e9;padding-left:.35rem;font-size:.88rem}",
    ".qiep-manual-index-hidden{display:none!important}",
    "@media(max-width:900px){.qiep-auto-toc{position:relative;top:auto;float:none;width:auto;max-height:none;margin:0 0 1.5rem}}"
  ].join("");

  document.head.appendChild(style);

  var firstHeading = headings.find(function (heading) {
    return !heading.classList.contains("qiep-manual-index-hidden");
  });

  if (firstHeading && firstHeading.parentNode) {
    firstHeading.parentNode.insertBefore(nav, firstHeading);
  }
})();
