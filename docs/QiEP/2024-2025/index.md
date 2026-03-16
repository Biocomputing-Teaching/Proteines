---
title: "QiEP · Pràctica 1 · 2024-2025"
permalink: /QiEP/2024-2025/
author: "Química i Enginyeria de Proteïnes"
---

{% assign groups = site.data.site.qiep_groups_2024_2025 %}

<section class="feature-card">
  <h2>Context docent</h2>
  <p>La pràctica 1 del curs 2024-2025 es dedica a l'anàlisi d'una proteïna problema per relacionar la seva seqüència, la seva estructura i la seva funció. L'activitat combina consulta de bases de dades, visualització molecular i interpretació funcional.</p>
</section>

<section class="feature-card">
  <h2>Desenvolupament de la pràctica</h2>
  <ol>
    <li>Identificar la proteïna a partir de la seqüència i anotar-ne el gen, el codi UniProt, l'activitat enzimàtica i el context funcional.</li>
    <li>Determinar l'estructura disponible al PDB o, si cal, recórrer a prediccions estructurals com AlphaFold.</li>
    <li>Descriure estructures secundària, motius supersecundaris, plegament i eventual estructura quaternària.</li>
    <li>Interpretar el centre actiu, les interaccions rellevants i la relació molecular entre estructura i funció.</li>
  </ol>
</section>

<section class="feature-card">
  <h2>Treballs dels grups</h2>
  <div class="card-grid">
    {% for item in groups %}
      <article class="mini-card">
        <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
        <p class="muted">{{ item.protein }}</p>
      </article>
    {% endfor %}
  </div>
</section>
