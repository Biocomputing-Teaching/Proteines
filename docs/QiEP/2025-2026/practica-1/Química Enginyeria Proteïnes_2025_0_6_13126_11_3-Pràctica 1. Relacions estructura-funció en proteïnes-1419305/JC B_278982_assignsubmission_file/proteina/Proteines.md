---
layout: default
title: "Anàlisi estructural i funcional d’una proteïna de disseny de novo"
date: 2026-03-17
author: "Clara Batllé, Anna Galcerà, Carla Gonzalez, Gisell Montaña, Maria Pinteño"
permalink: /QiEP-P1-2026-B/
---

<style>
.qiep-report {
  --qiep-ink: #17212b;
  --qiep-muted: #5d6f7a;
  --qiep-line: #d6e2e4;
  --qiep-panel: #f6faf9;
  --qiep-accent: #0d6f78;
  --qiep-accent-2: #b36b00;
  color: var(--qiep-ink);
}

.qiep-hero {
  margin: 0 0 2rem;
  padding: 1.6rem 0 1.4rem;
  border-bottom: 1px solid var(--qiep-line);
}

.qiep-kicker {
  margin: 0 0 .45rem;
  color: var(--qiep-accent);
  font-size: .82rem;
  font-weight: 700;
  text-transform: uppercase;
}

.qiep-hero h2 {
  margin: 0;
  max-width: 980px;
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  line-height: 1.02;
}

.qiep-lead {
  max-width: 840px;
  margin: .75rem 0 0;
  color: var(--qiep-muted);
  font-size: 1.08rem;
}

.qiep-meta {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.qiep-meta li {
  border: 1px solid var(--qiep-line);
  border-radius: 999px;
  padding: .28rem .65rem;
  background: #fff;
  color: var(--qiep-muted);
  font-size: .9rem;
}

.qiep-shell {
  display: grid;
  grid-template-columns: minmax(210px, 280px) minmax(0, 1fr);
  gap: 2rem;
  align-items: start;
}

.qiep-toc {
  position: sticky;
  top: 1rem;
  max-height: calc(100vh - 2rem);
  overflow: auto;
  border: 1px solid var(--qiep-line);
  border-radius: 8px;
  background: var(--qiep-panel);
  padding: .9rem;
}

.qiep-toc-title {
  margin: 0 0 .55rem;
  color: var(--qiep-accent);
  font-size: .84rem;
  font-weight: 800;
  text-transform: uppercase;
}

.qiep-toc a {
  display: block;
  border-radius: 6px;
  padding: .28rem .45rem;
  color: var(--qiep-ink);
  line-height: 1.25;
  text-decoration: none;
}

.qiep-toc a:hover,
.qiep-toc a:focus {
  background: #e5f0f1;
  color: var(--qiep-accent);
}

.qiep-toc ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.qiep-toc li + li {
  margin-top: .18rem;
}

.qiep-toc .qiep-sub {
  margin: .15rem 0 .5rem .75rem;
  border-left: 2px solid #c9d9dc;
  padding-left: .45rem;
  font-size: .92rem;
}

.qiep-content {
  min-width: 0;
}

.qiep-content h1 {
  margin-top: 2.4rem;
  padding-bottom: .35rem;
  border-bottom: 2px solid var(--qiep-line);
}

.qiep-content h2 {
  margin-top: 2rem;
  color: var(--qiep-accent);
}

.qiep-content h3 {
  color: var(--qiep-accent-2);
}

.qiep-content img,
.qiep-content video {
  display: block;
  width: min(100%, 760px);
  height: auto;
  margin: 1rem auto;
  border: 1px solid var(--qiep-line);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(23, 33, 43, .08);
}

.qiep-content pre {
  border: 1px solid var(--qiep-line);
  border-radius: 8px;
}

.qiep-content strong:first-child {
  color: #263842;
}

@media (max-width: 900px) {
  .qiep-shell {
    display: block;
  }

  .qiep-toc {
    position: relative;
    top: auto;
    max-height: none;
    margin-bottom: 1.5rem;
  }
}
</style>

<div class="qiep-report" markdown="1">

<header class="qiep-hero" id="inici">
  <p class="qiep-kicker">Grup B · Pràctica 1</p>
  <h2>Proteïna 8YL8</h2>
  <p class="qiep-lead">Informe navegable sobre una proteïna de disseny de novo, amb èmfasi en l’organització estructural, les interaccions estabilitzadores i la relació seqüència-estructura-funció.</p>
  <ul class="qiep-meta">
    <li>PDB 8YL8</li>
    <li>Homotetràmer</li>
    <li>ChimeraX</li>
    <li>Disseny RSO</li>
    <li>α+β</li>
  </ul>
</header>

<div class="qiep-shell" markdown="1">

<nav class="qiep-toc" aria-label="Índex de la pràctica">
  <p class="qiep-toc-title">Menú</p>
  <ul>
    <li><a href="#context">Context</a></li>
    <li><a href="#introduccio">Introducció</a></li>
    <li>
      <a href="#sobre-la-proteina">Sobre la proteïna</a>
      <ul class="qiep-sub">
        <li><a href="#sequencia-donada">Seqüència</a></li>
        <li><a href="#classificacio-ec">Classificació EC</a></li>
        <li><a href="#organisme-expressio">Organisme</a></li>
        <li><a href="#pdb-id">PDB ID</a></li>
        <li><a href="#funcio-resumida">Funció resumida</a></li>
      </ul>
    </li>
    <li>
      <a href="#treball-amb-chimerax">ChimeraX</a>
      <ul class="qiep-sub">
        <li><a href="#proteina-amb-chimerax">Vista general</a></li>
        <li><a href="#estructures-secundaries">Estructures secundàries</a></li>
        <li><a href="#interaccions">Interaccions</a></li>
        <li><a href="#motius-supersecundaris">Motius supersecundaris</a></li>
        <li><a href="#estructura-terciaria">Estructura terciària</a></li>
      </ul>
    </li>
    <li>
      <a href="#funcio-de-la-proteina">Funció</a>
      <ul class="qiep-sub">
        <li><a href="#centre-actiu">Centre actiu</a></li>
        <li><a href="#distribucio-carregues">Càrregues</a></li>
        <li><a href="#relacio-sequencia-estructura-funcio">Seqüència-estructura-funció</a></li>
      </ul>
    </li>
    <li><a href="#conclusio">Conclusió</a></li>
    <li><a href="#bibliografia">Bibliografia</a></li>
  </ul>
</nav>

<main class="qiep-content" markdown="1">

# Context {#context}

Aquesta pràctica té com a finalitat familiaritzar-se amb l’ús d’eines de bioinformàtica estructural, especialment ChimeraX, i amb la consulta de bases de dades de proteïnes com el Protein Data Bank (PDB) i PDBsum. A partir d’una seqüència proteica inicial, es treballa la cerca d’homologies amb eines com BLAST i la identificació d’estructures relacionades, així com la interpretació dels diferents nivells d’organització estructural (secundària, terciària i quaternària). L’objectiu final és adquirir habilitats en la representació i interpretació d’estructures proteiques, identificant els elements que les caracteritzen i que poden estar relacionats amb les seves propietats.


# Introducció {#introduccio}

En aquest treball s’ha analitzat una proteïna a partir d’una seqüència aminoacídica inicial, utilitzant eines de bioinformàtica estructural com BLAST, UniProt, el Protein Data Bank (PDB) i ChimeraX. La cerca inicial va permetre identificar estructures relacionades i accedir a informació associada a un article científic vinculat al disseny de la proteïna. A partir d’aquestes dades, s’ha dut a terme una anàlisi detallada de l’estructura tridimensional amb l’objectiu d’estudiar la seva organització i estabilitat, així com la relació entre els diferents nivells estructurals i les seves propietats.

# Sobre la proteïna {#sobre-la-proteina}

### Seqüència donada {#sequencia-donada}

```text
PDFTGARERFLAGDVTIVLLIAESHDAPYRLANPEDPEADLSDEQLERALAAYLTLVETLFPELYAEMKAALAAAKTPEEKIAVFREYNARFLAEFDALIDQAFARLKADSLTLKIHLSQGKGSYEIIFPPEVQADPERAAAIEALWKPTLDQLLAVLQEKHKGKPATTVTYEISAETLRAAVAALARAAEAALRRKVGSLESSGLEVLFQ
```

Cada cadena té aquesta seqüència, amb una llargada de 211 aa. La proteïna està formada per quatre cadenes amb una llargada total de 844 aa.

No s'ha obtingut cap resultat coherent a UniProt, la llargada de la proteïna que donava UniProt no correspon amb la llargada de la seqüència.

### Classificació EC.X.X.X.X {#classificacio-ec}

No és un enzim.

### Organisme d'expressió {#organisme-expressio}

*Escherichia coli*.

### PDB ID {#pdb-id}

8YL8 Extended : pdb_00008yl8

Existeixen dues estructures corresponents a la mateixa proteïna dissenyada de novo mitjançant el mètode RSO, però obtingudes en diferents condicions de cristal·lització (Form 1 i Form 2).[bank] Ambdues estan dipositades en el Protein Data Bank i constitueixen validacions experimentals del model.

S'ha seleccionat l'estructura 8YL8, ja que presenta una millor qualitat estructural en comparació amb 8YL4. En concret, posseeix una resolució de 2.21 Å, inferior als 2.88 Å de 8YL4, la qual cosa indica un major nivell de detall atòmic. A més, presenta valors de R-free (0.244) i R-work (0.201) més baixos que els de 8YL4, la qual cosa reflecteix un millor ajust entre el model estructural i les dades experimentals. Per això, 8YL8 es considera l'opció més fiable per a l'anàlisi estructural posterior.

### Funció resumida {#funcio-resumida}

La proteïna corresponent a l'estructura 8YL8 no presenta una funció biològica natural coneguda, ja que es tracta d'una proteïna dissenyada de novo mitjançant el mètode RSO. El seu propòsit principal és actuar com a model experimental per a validar la capacitat de disseny estructural de l'algorisme RSO, demostrant que és possible generar proteïnes sintètiques que adopten amb alta precisió la conformació tridimensional predita. L'estructura 8YL8 presenta un ió sulfat (SO₄²⁻), el qual probablement prové de les condicions en el buffer de cristal·lització (sulfat d’amoni, HEPES i PEG 400). Aquest ió pot establir interaccions electroestàtiques o ponts d'hidrogen amb residus de la proteïna, però no representa un substrat fisiològic ni indica activitat catalítica, i, per tant, no permet afirmar que aquesta sigui la seva funció ni que es tracti d'un enzim. [bank]

# Treball amb ChimeraX {#treball-amb-chimerax}

## Proteïna amb ChimeraX {#proteina-amb-chimerax}

**Totes les imatges i figures han estat elaborades amb ChimeraX, excepte les extretes de les presentacions i Jalview **

Tot l'anàlisi pertany al mateix fitxer PDB.

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/video.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.1**. Rotativa de la proteïna en primer pla.


**Cadena A** Verda --\> 1668 àtoms, 1611 enllaços, 

**Cadena B** Turquesa --\> 1676 àtoms, 1629 enllaços, 

**Cadena C** Rosa --\> 1624 àtoms, 1560 enllaços, 

**Cadena D** Blanca --\> 1582 àtoms, 1537 enllaços, 

**Residus (No estàndard)**: Groc --\> Molècules d'aigua (HOH), Ions sulfat (SO₄) --\> 354 àtoms, 24 enllaços, 

<img src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/fotito.png' | relative_url }}" alt="Estructura de la proteïna" />

L’estructura quaternària de la proteïna està formada per quatre cadenes polipeptídiques idèntiques, que s’associen per formar un homotetràmer. Aquesta organització s’ha pogut confirmar mitjançant l’alineament estructural de les quatre cadenes, que mostra una elevada similitud entre elles, indicant que es tracta de subunitats equivalents tant estructuralment com funcionalment.

## Estructures secundàries de la proteïna {#estructures-secundaries}

### Làmines (Taronja)

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie1.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.2**. Rotativa de la proteïna en primer pla amb làmines ꞵ ressaltades.

**680 àtoms, 680 enllaços, 84 residus**


<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie4.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.3**. Rotativa de la proteïna en primer pla únicament de les làmines ꞵ de la proteïna.


Làmines $\beta$ antiparal·leles vistes en les 4 cadenes

### Hèlix alfa (vermell)

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie2.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.4**. Rotativa de les làmines $\beta$ antiparal·leles de les 4 cadenes.

 **4575 àtoms, 462 enllaços, 602 residus.**


<img src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/image1.png' | relative_url }}" width="500"/>

**Fig.5**. Rotativa de les làmines $\beta$ antiparal·leles en les 4 cadenes.

S'ha identificat en la majoria d'hèlixs, hèlixs $\alpha$ tipus $3_.16.$ en el model analitzat


<img src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/image2.png' | relative_url }}" width="500"/>

<img src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/image3.png' | relative_url }}" width="500"/>

<img src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/image4.png' | relative_url }}" width="500"/>

<img src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/image5.png' | relative_url }}" width="500"/>

**Fig.6, 7, 8, 9.** Tram curt compatible amb hèlix $\alpha$ $3_.10.$.

En els extrems hèlix $\alpha$ de les cadenes **A** **B** **C** **D** s'observa un tram curt compatible amb hèlix $\alpha$ $3_.10.$.


En aquest model no s'ha observat hèlix $\alpha$ $4.4_16$ ni $2.2_7$.


### Coils (groc)

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie3.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.10**. Rotativa en primer pla de la proteïna amb els coils ressaltats.

**1296 àtoms, 1287 enllaços, 189 residus**.


## Interaccions {#interaccions}

**Interaccions de van der Waals entre les diferents estructures secundàries.**

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie6.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.11**. Rotativa en primer pla de la proteïna amb les interaccions de van der Waals ressaltades.

**4672 interaccions**


### **Ponts d'hidrogen**

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie7.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.12**. Rotativa en primer pla de la proteïna amb els ponts d’hidrogen ressaltats.

**1337 enllaços d'hidrogen** Ponts d'hidrogen entre les estructures secundàries i estabilitzen l'estructura quaternària unint les 4 cadenes


### **Interaccions proteïna lligand**

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie8.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.13**. Rotativa en primer pla de la proteïna i de molècules sulfat i aigua.

**30 àtoms, 24 enllaços, 6 residus** **HOH + SO4**


### **Interaccions amb ions**

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie9.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.14**. Rotativa de la proteïna interaccionant amb els ions corresponents (H2O i SO4)


### **Interaccions amb el solvent (H2O)**

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie10.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.15**. Rotativa de les interaccions amb el solvent (H2O)

## Motius supersecundaris i les seves interaccions {#motius-supersecundaris}

En totes les cadenes trobem $\beta$ hairpins

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie18.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.16**. Rotativa de les $\beta$ hairpins.


En totes les cadenes trobem $\beta$ $\alpha$ $\beta$.

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie19.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.17**. Rotativa de les $\beta$ $\alpha$ $\beta$.


En totes les cadenes trobem "helix-turn-helix".

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie15.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.18**. Rotativa de les "helix-turn-helix".

Interaccions dels $\beta$ hairpins, $\beta$ $\alpha$ $\beta$ i "helix-turn-helix" **van der Waals**.

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie16.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.19**. Rotativa de les interaccions dels $\beta$ hairpins, $\beta$ $\alpha$ $\beta$ i "helix-turn-helix" **van der Waals**.

Ponts d'hidrogen dels $\beta$ hairpins, $\beta$ $\alpha$ $\beta$ i helix-turn-helix.

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie7.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.20**. Rotativa dels ponts d'hidrogen dels $\beta$ hairpins, $\beta$ $\alpha$ $\beta$ i "helix-turn-helix".

## Estructura terciària de la proteïna i el tipus de plegament al qual correspon. {#estructura-terciaria}

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie20.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.21**. Rotativa de l'estructura terciària de la proteïna i a quin tipus de plegament correspon.

L’estructura terciària presenta un plegament de tipus α+β, caracteritzat per la presència d’hèlix α i làmines β disposades en regions diferenciades. Aquestes estructures secundàries es troben segregades tant en el mapa topològic com en l’organització tridimensional de la proteïna, un patró típic observat en proteïnes com les ribonucleases. [Tema4]


<img src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/foto.png' | relative_url }}" width="500"/>

**Fig.22**. Imatge extreta del PowerPoint "Tema 4 - Teoria". 


S'ha observat un "helical bundle".

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie23.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.23**. Rotativa on podem observar "l'helical bundle".

### Estudi dels dominis i de la família estructural

Pel que fa a la classificació estructural, no ha estat possible assignar directament aquesta proteïna a una família dins de bases de dades com CATH o SCOPe, degut al fet que es tracta d’una proteïna de disseny de novo. Aquest tipus de proteïnes no sempre es troben representades en bases de dades estructurals clàssiques, ja que no tenen un equivalent evolutiu natural clar. A més, tot i que la cerca amb BLAST mostra proteïnes amb certa similitud de seqüència, aquestes també corresponen majoritàriament a dissenys de novo o seqüències artificials. Aquesta proteïna ha estat dissenyada amb l’objectiu de validar eines de predicció estructural, com el mètode RSO, demostrant la seva capacitat per generar estructures tridimensionals estables a partir de seqüències artificials.

# Funció de la proteïna {#funcio-de-la-proteina}

### Centre actiu {#centre-actiu}

En la proteïna 8YL8 no s’identifica un centre actiu catalític, ja que es tracta d’una proteïna de disseny de novo amb una funció principalment estructural. Per aquest motiu, tampoc es troba cap substrat ni inhibidor co-cristal·litzat, i la proteïna es presenta en estat apo.


<img src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/fotofo.png' | relative_url }}" width="500"/>

**Fig.24**. Interaccions entre els ponts d'hidrogen i les zones amb càrrega.



### Interaccions {#interaccions-funcio}

Tot i això, l’estructura presenta diverses interaccions que contribueixen a la seva estabilitat. S’observen interaccions de van der Waals entre les diferents estructures secundàries, així com ponts d’hidrogen que contribueixen a la unió i estabilització de les quatre cadenes polipeptídiques, formant un homotetràmer.

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie22.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.25**. Visualització de la superfície molecular i distribució de càrregues de la proteïna d'estudi. Les regions representades en vermell indiquen un potencial negatiu, mentre que les blaves indiquen un potencial positiu i les blanques zones neutres o hidrofòbiques.


### Distribució de càrregues {#distribucio-carregues}

A partir de la visualització en ChimeraX, es distingeix la distribució de residus segons les seves propietats: els residus apolars es representen en blanc, els residus amb càrrega negativa en vermell i els residus amb càrrega positiva en blau. Aquesta distribució reflecteix l’organització estructural típica de proteïnes globulars, on les interaccions hidrofòbiques i electrostàtiques són clau per a l’estabilitat del plegament.

### Informació sobre la funció de la proteïna

Atès que es tracta d’una proteïna de disseny de novo, no se li pot assignar una funció biològica natural coneguda. La seva finalitat principal és experimental, ja que ha estat generada per validar mètodes de predicció i disseny de proteïnes amb RSO, demostrant la capacitat de produir estructures tridimensionals estables i correctament plegades. No obstant això, a partir de les característiques estructurals observades, es podria especular amb possibles funcions potencials, com ara la capacitat d’estabilització estructural o d’interacció amb altres molècules, tot i que aquestes hipòtesis no tenen evidència funcional experimental.

### Modificacions post-traduccionals

No es disposa d’informació experimental sobre modificacions post-traduccionals específiques per a la proteïna 8YL8, atès que es tracta d’una proteïna de disseny de novo. Per aquest motiu, no s’han descrit modificacions concretes associades a la seva funció biològica. Tanmateix, considerant proteïnes amb plegament similar de tipus α+β (com les ribonucleases), es poden inferir possibles modificacions post-traduccionals habituals en aquest tipus de proteïnes, com la formació de ponts disulfur en residus de cisteïna, així com possibles fosforilacions en residus de serina, treonina o tirosina, que en proteïnes naturals poden participar en processos d’estabilització o regulació.

## Relació seqüència–estructura–funció {#relacio-sequencia-estructura-funcio}

Atès que es tracta d’una proteïna dissenyada mitjançant el mètode RSO, és probable que la seva funció principal sigui validar la capacitat d’aquest sistema per generar estructures estables i correctament plegades, més que no pas exercir una funció biològica específica.

No obstant això, a partir de l’anàlisi de la seva estructura i seqüència, es poden inferir possibles funcions, tot i que aquestes no es poden confirmar experimentalment en tractar-se d’una proteïna de disseny.

La proteïna presenta característiques pròpies de les proteïnes fibroses, ja que la seva estructura primària mostra una baixa diversitat seqüencial i una alta repetició. Això és coherent amb el fet que està formada per quatre subunitats idèntiques (homotetràmer).

Per tant, es pot plantejar la hipòtesi que la seva funció podria ser estructural.

A més, la distribució relativament homogènia de residus polars i apolars suggereix que la proteïna no presenta un nucli hidrofòbic clàssic ben definit a nivell monomèric. En canvi, les interaccions hidrofòbiques semblen estar implicades en l’estabilització de les interfícies entre subunitats, fet coherent amb la seva organització homotetramèrica.

Les β làmines contribueixen a l’estabilitat local i a la correcta organització estructural, reforçant una funció principalment estructural o d’acoblament

### Relació estructura amb la funció

L’estructura tridimensional de la proteïna està dominada per α-hèlixs, que formen una arquitectura compacta i probablement s’empaqueten entre elles generant un helical bundle. Aquest tipus d’organització és característic de proteïnes estructurals, ja que proporciona estabilitat i resistència mecànica.

A més, la presència de β-làmines antiparal·leles, tot i ser menys abundants, té un paper rellevant en la rigidesa local de l’estructura. En particular, la identificació de motius β–α–β indica una organització supersecundària que contribueix al correcte plegament i pot actuar com a element d’unió entre diferents regions estructurals.

En conjunt, la combinació d’una estructura rica en α-hèlixs, una organització quaternària simètrica i la distribució de les interaccions hidrofòbiques entre subunitats suggereix que la proteïna podria actuar com a element estructural o scaffold, participant en l’estabilització de complexos macromoleculars o en processos d’autoassemblatge.

### Elements estructurals que participen en la funció


 -  **α hèlixs abundants** : Responsables de l’estabilitat global i de l’empaquetament estructural
 
 -  **β làmines antiparal·leles**: Aporten rigidesa local i estabilitzen regions específiques.

 -  **Motiu βαβ** : Contribueix a l’organització del plegament Estructura quaternària (homotetràmer).

 Permet la formació d’interfícies d’interacció entre subunitats Interfícies hidrofòbiques. Estabilitzen l’assemblatge oligomèric

 
 **Els residus** més rellevants per a la funció estructural de la proteïna es poden agrupar en dos grans tipus: segons les seves propietats fisicoquímiques. D’una banda, destaquen els residus hidrofòbics, com Leu (L), Ile (I), Val (V), Ala (A) i Phe (F), que tenen un paper clau en l’estabilitat estructural. Aquests residus participen principalment en l’empaquetament de les α-hèlixs i en la estabilització de les interfícies entre subunitats, mitjançant interaccions hidrofòbiques que afavoreixen l’assemblatge del complex homotetramèric. D’altra banda, els
residus polars i carregats, com Lys (K), Arg (R), Asp (D), Glu (E), Ser (S), Thr (T) i Gln (Q), es localitzen majoritàriament a la superfície de la proteïna. Aquests residus intervenen en les interaccions amb el solvent, contribueixen a la formació de possibles ponts salins entre subunitats i participen en la estabilització superficial de l’estructura proteica.



Tot i que hi ha una barreja aparent de residus polars i apolars al llarg de la seqüència, això no implica absència d’organització, sinó que reflecteix una distribució funcional adaptada a una estructura oligomèrica, on les interaccions es donen tant dins com entre subunitats.

<video width="500" autoplay loop muted>

<source src="{{ '/QiEP/2025-2026/practica-1/Química Enginyeria Proteïnes_2025_0_6_13126_11_3-Pràctica 1. Relacions estructura-funció en proteïnes-1419305/JC B_278982_assignsubmission_file/proteina/movie24.mp4' | relative_url }}" type="video/mp4">

</video>

**Fig.26**. Rotativa de la proteïna i les seves regions hidrofíliques i hidrofòbiques. 


Una possible **variant estructural** és la proteïna 8YL4, també obtinguda experimentalment mitjançant difracció de raigs X. Aquesta presenta una resolució de 2,88 Å, inferior a la de la proteïna analitzada, fet que implica una menor precisió estructural i una possible incertesa en la posició exacta d’alguns residus.

A nivell funcional, tot i que la seqüència i l’estructura global siguin similars, petites diferències en la resolució o en el model estructural poden afectar la interpretació de les interaccions moleculars, la identificació de possibles interfícies d’unió i la precisió en la descripció del plegament proteic.



# Conclusió {#conclusio}

En aquest treball s’ha analitzat la proteïna 8YL8, dissenyada de novo mitjançant el mètode RSO, demostrant que és possible generar estructures tridimensionals estables a partir de seqüències artificials. L’anàlisi estructural ha revelat una organització quaternària en forma d’homotetràmer i un plegament de tipus α+β, dominat per α-hèlixs i complementat amb làmines β i motius supersecundaris.

Les interaccions hidrofòbiques, els ponts d’hidrogen i les forces de van der Waals tenen un paper clau en l’estabilitat global de la proteïna i en l’assemblatge de les seves subunitats. Tot i no presentar una funció biològica definida ni un centre actiu, les seves característiques estructurals suggereixen un possible paper com a proteïna estructural o scaffold.

A més, el mètode RSO (Relaxed Sequence Optimization) representa un avenç important en el disseny de proteïnes, ja que es basa en l’ús de seqüències relaxades, en les quals cada posició pot representar una combinació de diversos aminoàcids en lloc d’un de sol. Aquesta aproximació permet una optimització més suau i eficient, evitant les limitacions de treballar amb seqüències fixes i facilitant l’obtenció d’estructures estables. A més, no requereix el reentrenament del model per a cada nou problema, fet que el converteix en una eina flexible i aplicable a diferents estratègies de disseny.

En conjunt, aquest estudi confirma la relació seqüència–estructura i posa en valor el potencial del disseny de novo per generar proteïnes funcionals i estables amb aplicacions futures en biotecnologia.

# Bibliografia {#bibliografia}



RCSB Protein Data Bank. (2024). Crystal structure of the de novo designed protein 200 AA in the crystal form 1 (PDB ID: 8YL4). https://www.rcsb.org/structure/8YL4



National Center for Biotechnology Information (NCBI). (n.d.). Protein database search: 8YL8. https://www.ncbi.nlm.nih.gov/protein/?term=8YL8



Universitat de Vic. (n.d.). Tema 4 – Estructura de proteïnes, Química i Enginyeria de Proteïnes. https://aules.uvic.cat/pluginfile.php/2282213/mod_resource/content/1/Tema4_Moodle.pdf



Universitat de Vic. (n.d.). Tema 5 – Tipus de proteïnes i les seves funcions, Química i Enginyeria de Proteïnes. https://aules.uvic.cat/pluginfile.php/2285134/mod_resource/content/1/Tema%205.pdf



Frank, C., Khoshouei, A., Fu, L., Schiwietz, D., Putz, D., Weber, L., Zhao, Z., Hattori, M., Feng, S., de Stigter, Y., Ovchinnikov, S., & Dietz, H. (2024). Scalable protein design using optimization in a relaxed sequence space. Science, 386, 439–445. https://doi.org/10.1126/science.adq1741

</main>

</div>

</div>
