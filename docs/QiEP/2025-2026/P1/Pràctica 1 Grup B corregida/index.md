---
title: "Proteïna de disseny de novo 8YL8"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-B-corregida/
author: "Clara Batllé, Anna Galcerà, Carla Gonzalez, Gisell Montaña, Maria Pinteño"
---

<p class="qiep-group-label"><strong>Grup B</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>

Autors del treball original: **Clara Batllé, Anna Galcerà, Carla Gonzalez, Gisell Montaña, Maria Pinteño**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC B | 2025-2026 | seqüència problema
PDFTGARERFLAGDVTIVLLIAESHDAPYRLANPEDPEADLSDEQLERALAAYLTLVETLFPELYAEMKAALAAAKTPEE
KIAVFREYNARFLAEFDALIDQAFARLKADSLTLKIHLSQGKGSYEIIFPPEVQADPERAAAIEALWKPTLDQLLAVLQE
KHKGKPATTVTYEISAETLRAAVAALARAAEAALRRKVGSLESSGLEVLFQ
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 211 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [8YL8](https://www.rcsb.org/structure/8YL8) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 2.21 Å. La longitud de la seqüència analitzada és de 211 aminoàcids. No s’ha trobat cap referència UniProt directa per a la millor entitat PDB; la seqüència s’ha de tractar com a constructe o proteïna de disseny si no hi ha una cerca addicional que en justifiqui una assignació natural.

| Camp | Valor |
|---|---|
| UniProt / gen | cap registre UniProt directe per al constructe; gen: no anotat o no aplicable |
| EC / BRENDA | no assignat |
| Estructura principal | [8YL8](https://www.rcsb.org/structure/8YL8) entitat 1; difracció de raigs X, 2.21 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | proteïna de disseny de novo amb arquitectura principalment helicoidal i elements beta locals; sense família natural CATH/ECOD assignable directament |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 11, regions no assignades: 1; exemples: làmina β 124-128, 111-118, 168-175; hèlix 5-13; hèlix 16-25; hèlix 36-40; hèlix 42-61; hèlix 61-75; hèlix 77-108; hèlix 130-135 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | No s’ha detectat cap etiqueta de purificació, residu ambigu o alerta específica de cisteïnes a partir de la seqüència sola. |

Funcionalment, és una proteïna de disseny de novo. No té gen natural ni número EC; la interpretació s’ha de basar en l’arquitectura, l’estabilitat del plegament i la publicació estructural associada. La seqüència assignada coincideix completament amb l’entitat experimental 8YL8. No hi ha entrada UniProt natural ni classificació EC associada, de manera que la proteïna s’interpreta com un constructe de disseny i no com un homòleg funcional anotat.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | Proteïna de disseny de novo |
| Estructura de referència | 8YL8 |
| Longitud | 211 aa |
| Trets rellevants | sense Cys; sense EC assignat |

 <div class="qiep-report" markdown="1"> <header class="qiep-hero" id="inici">
<h2>Proteïna 8YL8</h2>
<p class="qiep-lead">Informe navegable sobre una proteïna de disseny de novo, amb èmfasi en l’organització estructural, les interaccions estabilitzadores i la relació seqüència-estructura-funció. </p>
<ul class="qiep-meta">
<li>PDB 8YL8</li>
<li>Homotetràmer</li>
<li>ChimeraX</li>
<li>Disseny RSO</li>
<li>α+β</li>
</ul>
</header> <div class="qiep-shell" markdown="1"> <p class="qiep-toc-title">Menú</p>
<ul>
<li><a href="#context">Context</a></li>
<li><a href="#introduccio">Introducció</a></li>
<li>
<a href="#sobre-la-proteïna">Sobre la proteïna</a>
<ul class="qiep-sub">
<li><a href="#sequencia-donada">Seqüència</a></li>
<li><a href="#classificacio-ec">Classificació EC</a></li>
<li><a href="#organisme-expressio">Organisme</a></li>
<li><a href="#PDB-id">PDB ID</a></li>
<li><a href="#funcio-resumida">Funció resumida</a></li>
</ul>
</li>
<li>
<a href="#treball-amb-chimerax">ChimeraX</a>
<ul class="qiep-sub">
<li><a href="#proteïna-amb-chimerax">Vista general</a></li>
<li><a href="#estructures-secundaries">Estructures secundàries</a></li>
<li><a href="#interaccions">Interaccions</a></li>
<li><a href="#motius-supersecundaris">Motius supersecundaris</a></li>
<li><a href="#estructura-terciaria">Estructura terciària</a></li>
</ul>
</li>
<li>
<a href="#funcio-de-la-proteïna">Funció</a>
<ul class="qiep-sub">
<li><a href="#centre-actiu">Centre actiu</a></li>
<li><a href="#distribucio-carregues">Càrregues</a></li>
<li><a href="#relacio-sequencia-estructura-funcio">Seqüència-estructura-funció</a></li>
</ul>
</li>
<li><a href="#conclusio">Conclusió</a></li>
<li><a href="#referències">Referències</a></li>
</ul> <main class="qiep-content" markdown="1">

## Introducció {#introduccio}

Aquesta fitxa analitza una proteïna a partir d’una seqüència aminoacídica inicial, utilitzant eines de bioinformàtica estructural com BLAST, UniProt, el Protein Data Bank (PDB) i ChimeraX. La cerca inicial va permetre identificar estructures relacionades i accedir a informació associada a un article científic vinculat al disseny de la proteïna. A partir d’aquestes dades, s’ha dut a terme una anàlisi detallada de l’estructura tridimensional amb l’objectiu d’estudiar la seva organització i estabilitat, així com la relació entre els diferents nivells estructurals i les seves propietats.

## Sobre la proteïna {#sobre-la-proteïna}

#### Seqüència donada {#sequencia-donada}

Cada cadena té aquesta seqüència, amb una llargada de 211 aa. La proteïna està formada per quatre cadenes amb una llargada total de 844 aa. No s'ha obtingut cap resultat coherent a UniProt, la llargada de la proteïna que donava UniProt no correspon amb la llargada de la seqüència.

#### Classificació

EC. X. X. X. X {#classificacio-ec} No és un enzim.

#### Organisme d'expressió {#organisme-expressio} *Escherichia coli*.

#### PDB

ID {#PDB-id} 8YL8 Extended: pdb_00008yl8 Existeixen dues estructures corresponents a la mateixa proteïna dissenyada de novo mitjançant el mètode RSO, però obtingudes en diferents condicions de cristal·lització (Form 1 i Form 2). [bank] Ambdues estan dipositades en el Protein Data Bank i constitueixen validacions experimentals del model. S'ha seleccionat l’estructura 8YL8, ja que presenta una millor qualitat estructural en comparació amb 8YL4. En concret, posseeix una resolució de 2.21 Å, inferior als 2.88 Å de 8YL4, la qual cosa indica un major nivell de detall atòmic. A més, presenta valors de R-free (0.244) i R-work (0.201) més baixos que els de 8YL4, la qual cosa reflecteix un millor ajust entre el model estructural i les dades experimentals. Per això, 8YL8 es considera l'opció més fiable per a l'anàlisi estructural posterior.

#### Funció resumida {#funcio-resumida}

La proteïna corresponent a l’estructura 8YL8 no presenta una funció biològica natural coneguda, ja que es tracta d’una proteïna dissenyada de novo mitjançant el mètode RSO. El seu propòsit principal és actuar com a model experimental per a validar la capacitat de disseny estructural de l'algorisme RSO, demostrant que és possible generar proteïnes sintètiques que adopten amb alta precisió la conformació tridimensional predita. L'estructura 8YL8 presenta un ió sulfat (SO₄²⁻), el qual probablement prové de les condicions en el tampó de cristal·lització (sulfat d’amoni, HEPES i PEG 400). Aquest ió pot establir interaccions electrostàtiques o ponts d’hidrogen amb residus de la proteïna, però no representa un substrat fisiològic ni indica activitat catalítica, i, per tant, no permet afirmar que aquesta sigui la seva funció ni que es tracti d’un enzim. [bank]

## Treball amb ChimeraX

ChimeraX {#treball-amb-chimerax}

### Visualització general

ChimeraX {#proteïna-amb-chimerax} **Totes les imatges i figures han estat elaborades amb ChimeraX, excepte les extretes de les presentacions i Jalview ** Tot l'anàlisi pertany al mateix fitxer PDB. <video width="500" autoplay bucle muted> </video> **Fig. 1**. Rotativa de la proteïna en primer pla. **Cadena A** Verda --\> 1668 àtoms, 1611 enllaços, **Cadena B** Turquesa --\> 1676 àtoms, 1629 enllaços, **Cadena C** Rosa --\> 1624 àtoms, 1560 enllaços, **Cadena D** Blanca --\> 1582 àtoms, 1537 enllaços, **Residus (No estàndard)**: Groc --\> Molècules d’aigua (HOH), Ions sulfat (SO₄) --\> 354 àtoms, 24 enllaços, L’estructura quaternària de la proteïna està formada per quatre cadenes polipeptídiques idèntiques, que s’associen per formar un homotetràmer. Aquesta organització s’ha pogut confirmar mitjançant l’alineament estructural de les quatre cadenes, que mostra una elevada similitud entre elles, indicant que es tracta de subunitats equivalents tant estructuralment com funcionalment.

### Estructures secundàries de la proteïna {#estructures-secundaries}

#### Làmines beta

<video width="500" autoplay bucle muted> </video> **Fig. 2.**

Rotativa de la proteïna en primer pla amb làmines ꞵ ressaltades. **680 àtoms, 680 enllaços, 84 residus** <video width="500" autoplay bucle muted> </video> **Fig. 3**. Rotativa de la proteïna en primer pla únicament de les làmines ꞵ de la proteïna. Làmines $\beta$ antiparal·leles vistes en les 4 cadenes

#### Hèlixs α

<video width="500" autoplay bucle muted> </video> **Fig. 4.**

Rotativa de les làmines $\beta$ antiparal·leles de les 4 cadenes. **4575 àtoms, 462 enllaços, 602 residus. ** **Fig. 5.** Rotativa de les làmines $\beta$ antiparal·leles en les 4 cadenes. S'ha identificat en la majoria d'hèlixs, hèlixs $\alpha$ tipus $3_. 16. $ en el model analitzat **Fig. 6, 7, 8, 9.** Tram curt compatible amb hèlix $\alpha$ $3_. 10. $. En els extrems hèlix $\alpha$ de les cadenes **A** **B** **C** **D** s'observa un tram curt compatible amb hèlix $\alpha$ $3_. 10. $. En aquest model no s'ha observat hèlix $\alpha$ $4.4_16$ ni $2.2_7$.

#### Llaços

<video width="500" autoplay bucle muted> </video> **Fig. 10.**

Rotativa en primer pla de la proteïna amb els llaços ressaltats. **1296 àtoms, 1287 enllaços, 189 residus**.

### Interaccions

Interaccions de van der Waals entre les diferents estructures secundàries. <video width="500" autoplay bucle muted> </video> **Fig. 11**. Rotativa en primer pla de la proteïna amb les interaccions de van der Waals ressaltades. **4672 interaccions**

#### Ponts d’hidrogen

<video width="500" autoplay bucle muted> </video> **Fig. 12.**

Rotativa en primer pla de la proteïna amb els ponts d’hidrogen ressaltats. **1337 enllaços d’hidrogen** Ponts d’hidrogen entre les estructures secundàries i estabilitzen l’estructura quaternària unint les 4 cadenes

#### Interaccions proteïna-lligand

<video width="500" autoplay bucle muted> </video> **Fig. 13.** Rotativa en primer pla de la proteïna i de molècules sulfat i aigua. **30 àtoms, 24 enllaços, 6 residus. HOH + SO4**
#### Interaccions amb ions

<video width="500" autoplay bucle muted> </video> **Fig. 14.** Rotativa de la proteïna interaccionant amb els ions corresponents (H2O i SO4).

#### Interaccions amb el solvent

<video width="500" autoplay bucle muted> </video> **Fig. 15.** Rotativa de les interaccions amb el solvent (H2O).

### Motius supersecundaris i les seves interaccions {#motius-supersecundaris}

En totes les cadenes trobem $\beta$ hairpins <video width="500" autoplay bucle muted> </video> **Fig. 16**. Rotativa de les $\beta$ hairpins. En totes les cadenes trobem $\beta$ $\alpha$ $\beta$. <video width="500" autoplay bucle muted> </video> **Fig. 17**. Rotativa de les $\beta$ $\alpha$ $\beta$. En totes les cadenes trobem "hèlix-gir-hèlix". <video width="500" autoplay bucle muted> </video> **Fig. 18**. Rotativa de les "hèlix-gir-hèlix". Interaccions dels $\beta$ hairpins, $\beta$ $\alpha$ $\beta$ i "hèlix-gir-hèlix" **van der Waals**. <video width="500" autoplay bucle muted> </video> **Fig. 19**. Rotativa de les interaccions dels $\beta$ hairpins, $\beta$ $\alpha$ $\beta$ i "hèlix-gir-hèlix" **van der Waals**. Ponts d’hidrogen dels $\beta$ hairpins, $\beta$ $\alpha$ $\beta$ i hèlix-gir-hèlix. <video width="500" autoplay bucle muted> </video> **Fig. 20**. Rotativa dels ponts d’hidrogen dels $\beta$ hairpins, $\beta$ $\alpha$ $\beta$ i "hèlix-gir-hèlix".

### Estructura terciària

<video width="500" autoplay bucle muted> </video> **Fig. 21.** Rotativa de l’estructura terciària de la proteïna i a quin tipus de plegament correspon. L’estructura terciària presenta un plegament de tipus α+β, caracteritzat per la presència d’hèlix α i làmines β disposades en regions diferenciades. Aquestes estructures secundàries es troben segregades tant en el mapa topològic com en l’organització tridimensional de la proteïna, un patró típic observat en proteïnes com les ribonucleases. [Tema4] **Fig. 22**. figura extreta del PowerPoint "Tema 4 - Teoria". S'ha observat un "helical bundle". <video width="500" autoplay bucle muted> </video> **Fig. 23**. Rotativa on s’hi observen "l'helical bundle".

#### Estudi dels dominis i de la família estructural

Pel que fa a la classificació estructural, no ha estat possible assignar directament aquesta proteïna a una família dins de bases de dades com CATH o SCOPe, a causa del fet que es tracta d’una proteïna de disseny de novo. Aquest tipus de proteïnes no sempre es troben representades en bases de dades estructurals clàssiques, ja que no tenen un equivalent evolutiu natural clar. A més, tot i que la cerca amb BLAST mostra proteïnes amb certa similitud de seqüència, aquestes també corresponen majoritàriament a dissenys de novo o seqüències artificials. Aquesta proteïna ha estat dissenyada amb l’objectiu de validar eines de predicció estructural, com el mètode RSO, demostrant la seva capacitat per generar estructures tridimensionals estables a partir de seqüències artificials.

## Funció de la proteïna {#funcio-de-la-proteïna}

#### Centre actiu {#centre-actiu}

En la proteïna 8YL8 no s’identifica un centre actiu catalític, ja que es tracta d’una proteïna de disseny de novo amb una funció principalment estructural. Per aquest motiu, tampoc es troba cap substrat ni inhibidor co-cristal·litzat, i la proteïna es presenta en estat apo. **Fig. 24**. Interaccions entre els ponts d’hidrogen i les zones amb càrrega.

#### Interaccions {#interaccions-funcio}

Tot i això, l’estructura presenta diverses interaccions que contribueixen a la seva estabilitat. S’observen interaccions de van der Waals entre les diferents estructures secundàries, així com ponts d’hidrogen que contribueixen a la unió i estabilització de les quatre cadenes polipeptídiques, formant un homotetràmer. <video width="500" autoplay bucle muted> </video> **Fig. 25**. Visualització de la superfície molecular i distribució de càrregues de la proteïna d'estudi. Les regions representades en vermell indiquen un potencial negatiu, mentre que les blaves indiquen un potencial positiu i les blanques zones neutres o hidrofòbiques.

#### Distribució de càrregues {#distribucio-carregues}

A partir de la visualització en ChimeraX, es distingeix la distribució de residus segons les seves propietats: els residus apolars es representen en blanc, els residus amb càrrega negativa en vermell i els residus amb càrrega positiva en blau. Aquesta distribució reflecteix l’organització estructural típica de proteïnes globulars, on les interaccions hidrofòbiques i electrostàtiques són importants per a l’estabilitat del plegament.

#### Informació sobre la funció de la proteïna

Atès que es tracta d’una proteïna de disseny de novo, no se li pot assignar una funció biològica natural coneguda. La seva finalitat principal és experimental, ja que ha estat generada per validar mètodes de predicció i disseny de proteïnes amb RSO, demostrant la capacitat de produir estructures tridimensionals estables i correctament plegades. No obstant això, a partir de les característiques estructurals observades, es podria especular amb possibles funcions potencials, com ara la capacitat d’estabilització estructural o d’interacció amb altres molècules, tot i que aquestes hipòtesis no tenen evidència funcional experimental.

#### Modificacions posttraduccionals

No es disposa d’informació experimental sobre modificacions posttraduccionals específiques per a la proteïna 8YL8, atès que es tracta d’una proteïna de disseny de novo. Per aquest motiu, no s’han descrit modificacions concretes associades a la seva funció biològica. Tanmateix, considerant proteïnes amb plegament similar de tipus α+β (com les ribonucleases), es poden inferir possibles modificacions posttraduccionals habituals en aquest tipus de proteïnes, com la formació de ponts disulfur en residus de cisteïna, així com possibles fosforilacions en residus de serina, treonina o tirosina, que en proteïnes naturals poden participar en processos d’estabilització o regulació. Atès que es tracta d’una proteïna dissenyada mitjançant el mètode RSO, és probable que la seva funció principal sigui validar la capacitat d’aquest sistema per generar estructures estables i correctament plegades, més que no pas exercir una funció biològica específica. No obstant això, a partir de l’anàlisi de la seva estructura i seqüència, es poden inferir possibles funcions, tot i que aquestes no es poden confirmar experimentalment en tractar-se d’una proteïna de disseny. La proteïna presenta característiques pròpies de les proteïnes fibroses, ja que la seva estructura primària mostra una baixa diversitat seqüencial i una alta repetició. Això és coherent amb el fet que està formada per quatre subunitats idèntiques (homotetràmer). Per tant, es pot plantejar la hipòtesi que la seva funció podria ser estructural. A més, la distribució relativament homogènia de residus polars i apolars suggereix que la proteïna no presenta un nucli hidrofòbic clàssic ben definit a escala monomèric. En canvi, les interaccions hidrofòbiques semblen estar implicades en l’estabilització de les interfícies entre subunitats, fet coherent amb la seva organització homotetramèrica. Les β làmines contribueixen a l’estabilitat local i a la correcta organització estructural, reforçant una funció principalment estructural o d’acoblament

#### Relació estructura amb la funció

L’estructura tridimensional de la proteïna està dominada per α-hèlixs, que formen una arquitectura compacta i probablement s’empaqueten entre elles generant un helical bundle. Aquest tipus d’organització és característic de proteïnes estructurals, ja que proporciona estabilitat i resistència mecànica. A més, la presència de β-làmines antiparal·leles, tot i ser menys abundants, té un paper rellevant en la rigidesa local de l’estructura. En particular, la identificació de motius β–α–β indica una organització supersecundària que contribueix al correcte plegament i pot actuar com a element d’unió entre diferents regions estructurals. En conjunt, la combinació d’una estructura rica en α-hèlixs, una organització quaternària simètrica i la distribució de les interaccions hidrofòbiques entre subunitats suggereix que la proteïna podria actuar com a element estructural o scaffold, participant en l’estabilització de complexos macromoleculars o en processos d’autoassemblatge.

#### Elements estructurals que participen en la funció

- **Hèlixs α abundants:**

Responsables de l’estabilitat global i de l’empaquetament estructural - **β làmines antiparal·leles**: Aporten rigidesa local i estabilitzen regions específiques.
- **Motiu βαβ**: Contribueix a l’organització del plegament Estructura quaternària (homotetràmer). Permet la formació d’interfícies d’interacció entre subunitats Interfícies hidrofòbiques. Estabilitzen l’assemblatge oligomèric

## Arquitectura molecular

L’estructura combina un nucli principalment helicoidal amb elements beta locals. La lectura estructural es basa en l’empaquetament del nucli, la distribució de residus polars a superfície i les possibles interfícies oligomèriques.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/fotito.png' | relative_url }}" alt="Figura 1 del grup B" loading="lazy"> <figcaption><strong>Figura 1.</strong> Proteïna de disseny de novo: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/foto.png' | relative_url }}" alt="Figura 2 del grup B" loading="lazy"> <figcaption><strong>Figura 2.</strong> Proteïna de disseny de novo: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

No es proposa una funció natural. La informació funcional disponible és estructural: estabilitat del plegament, geometria de superfície i eventual capacitat d’oligomerització o interacció derivada del disseny.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/denovo_8yl8.jpeg' | relative_url }}" alt="Estructura de referència 8YL8 per a la proteïna de disseny de novo. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura de referència 8YL8 per a la proteïna de disseny de novo. Font: <a href="https://www.rcsb.org/structure/8YL8">RCSB PDB 8YL8</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Frank et al., 2024).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/fotofo.png' | relative_url }}" alt="Figura 3 del grup B" loading="lazy"> <figcaption><strong>Figura 3.</strong> Proteïna de disseny de novo: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/fotofoto.jpeg' | relative_url }}" alt="Figura 4 del grup B" loading="lazy"> <figcaption><strong>Figura 4.</strong> Proteïna de disseny de novo: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

No hi ha un registre UniProt natural directe associat a la millor entitat PDB. En aquest cas no és correcte importar PTM o variants d’una proteïna natural sense un alineament explícit; les variants importants són les pròpies del disseny, de la interfície o del centre funcional definit a la publicació estructural.

## Relació seqüència-estructura-funció

En una proteïna de novo, la relació seqüència-estructura-funció és sobretot una relació seqüència-plegament. Les posicions hidrofòbiques sostenen el nucli; les posicions polars i carregades determinen solubilitat i reconeixement superficial.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/image1.png' | relative_url }}" alt="Figura 5 del grup B" loading="lazy"> <figcaption><strong>Figura 5.</strong> Proteïna de disseny de novo: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/image2.png' | relative_url }}" alt="Figura 6 del grup B" loading="lazy"> <figcaption><strong>Figura 6.</strong> Proteïna de disseny de novo: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/image3.png' | relative_url }}" alt="Figura 7 del grup B" loading="lazy"> <figcaption><strong>Figura 7.</strong> Proteïna de disseny de novo: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/image4.png' | relative_url }}" alt="Figura 8 del grup B" loading="lazy"> <figcaption><strong>Figura 8.</strong> Proteïna de disseny de novo: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/image5.png' | relative_url }}" alt="Figura 9 del grup B" loading="lazy"> <figcaption><strong>Figura 9.</strong> Proteïna de disseny de novo: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/image6.png' | relative_url }}" alt="Figura 10 del grup B" loading="lazy"> <figcaption><strong>Figura 10.</strong> Proteïna de disseny de novo: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Frank, C. et al. (2024). *Scalable protein design using optimization in a relaxed sequence space*. *Science*. [doi: 10.1126/science.adq1741](https://doi.org/10.1126/science.adq1741).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup B/Proteines.md' | relative_url }}">pàgina original del grup B</a>.
