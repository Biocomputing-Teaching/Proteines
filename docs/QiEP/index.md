---
title: "Química i Enginyeria de Proteïnes"
permalink: /QiEP/
author: "FCTE · Grau en Biotecnologia · UVic-UCC"
---

{% assign courses = site.data.site.qiep_courses %}

<section class="feature-card">
  <div class="logos">
    <img src="{{ '/figures/FCTE.png' | relative_url }}" alt="Facultat de Ciències, Tecnologia i Enginyeries">
    <img src="{{ '/figures/UVic-UCC-logo.png' | relative_url }}" alt="Universitat de Vic - Universitat Central de Catalunya">
  </div>
  <p>Material docent de l'assignatura <strong>Química i Enginyeria de Proteïnes</strong> de la FCTE al Grau en Biotecnologia. El fil conductor de l'assignatura és l'anàlisi integrada de la seqüència, l'estructura i la funció de les proteïnes.</p>
  <p>La guia general per escriure memòries i gestionar cites, figures i flux de treball digital és aquí: <a href="{{ '/QiEP/guia-memories/' | relative_url }}">guia per escriure una memòria</a>.</p>
</section>

<section class="card-grid">
  {% for item in courses %}
    <article class="link-card">
      <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
      <p class="muted">{{ item.summary }}</p>
    </article>
  {% endfor %}
</section>
