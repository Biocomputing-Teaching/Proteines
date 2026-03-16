---
title: "Tallers"
permalink: /tallers/
---

{% assign tallers = site.data.site.tallers %}

<section class="feature-card">
  <div class="logos">
    <img src="{{ '/figures/FCTE.png' | relative_url }}" alt="Facultat de Ciències, Tecnologia i Enginyeries">
    <img src="{{ '/figures/UVic-UCC-logo.png' | relative_url }}" alt="Universitat de Vic - Universitat Central de Catalunya">
  </div>
  <p>Els tallers serveixen per introduir conceptes de bioinformàtica estructural i de relació seqüència-estructura-funció a partir de casos d'estudi concrets. Des d'aquí es pot accedir a totes les versions disponibles.</p>
</section>

<section class="card-grid">
  {% for item in tallers %}
    <article class="link-card">
      <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
      <p class="muted">{{ item.summary }}</p>
    </article>
  {% endfor %}
</section>
