---
title: "Exemple amb NGLView"
permalink: /nglview/
author: "Química i Enginyeria de Proteïnes"
---

<section class="feature-card">
  <h2>NGLView en aquest lloc web</h2>
  <p><strong>NGLView</strong> és una eina pensada per treballar dins d'un entorn <strong>Jupyter</strong>. Per això, un fitxer <code>.ipynb</code> publicat directament a GitHub Pages no es renderitza com una experiència interactiva usable al navegador.</p>
  <p>En aquesta web, el notebook es manté com a plantilla descarregable i aquesta pàgina fa de punt d'entrada perquè el recurs sigui utilitzable.</p>
</section>

<section class="card-grid">
  <article class="link-card">
    <h2><a href="{{ '/nglview_prots.ipynb' | relative_url }}">Descarregar notebook</a></h2>
    <p class="muted">Fitxer mínim de Jupyter per obrir una estructura del PDB amb <code>nglview</code>.</p>
  </article>
  <article class="link-card">
    <h2><a href="{{ '/visualPDB.html' | relative_url }}">Alternativa web immediata</a></h2>
    <p class="muted">Si el que voleu és una visualització 3D directa al navegador, feu servir el visor basat en PDBe Mol*.</p>
  </article>
</section>

<section class="feature-card">
  <h2>Codi mínim</h2>
  <p>El notebook inclou un exemple tan simple com aquest:</p>

```python
import nglview
view = nglview.show_pdbid("5p21")
view
```
</section>

<section class="feature-card">
  <h2>Quan convé fer servir NGLView</h2>
  <ul>
    <li>Quan voleu explorar estructures dins d'un notebook i combinar visualització amb codi Python.</li>
    <li>Quan voleu generar un flux de treball reproduïble en Jupyter.</li>
    <li>Quan necessiteu un visor web estàtic i immediat, és millor usar el recurs <a href="{{ '/visualPDB.html' | relative_url }}">PDBe Mol*</a>.</li>
  </ul>
</section>
