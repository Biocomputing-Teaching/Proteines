---
title: "Flavin-containing monooxygenase 5"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-A-corregida/
author: "Ruben Casalí, Martí Corbella, Albert Garcia"
---

<p class="qiep-group-label"><strong>Grup A</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>sp|P49326|FMO5_HUMAN Flavin-containing monooxygenase 5 OS=Homo sapiens OX=9606 GN=FMO5 PE=1 SV=2 | 2024-2025 | seqüència problema
MTKKRIAVIGGGVSGLSSIKCCVEEGLEPVCFERTDDIGGLWRFQENPEEGRASIYKSVIINTSKEMMCFSDYPIPDHYP
NFMHNAQVLEYFRMYAKEFDLLKYIRFKTTVCSVKKQPDFATSGQWEVVTESEGKKEMNVFDGVMVCTGHHTNAHLPLES
FPGIEKFKGQYFHSRDYKNPEGFTGKRVIIIGIGNSGGDLAVEISQTAKQVFLSTRRGAWILNRVGDYGYPADVLFSSRL
THFIWKICGQSLANKYLEKKINQRFDHEMFGLKPKHRALSQHPTLNDDLPNRIISGLVKVKGNVKEFTETAAIFEDGSRE
DDIDAVIFATGYSFDFPFLEDSVKVVKNKISLYKKVFPPNLERPTLAIIGLIQPLGAIMPISELQGRWATQVFKGLKTLP
SQSEMMAEISKAQEEIDKRYVESQRHTIQGDYIDTMEELADLVGVRPNLLSLAFTDPKLALHLLLGPCTPIHYRVQGPGK
WDGARKAILTTDDRIRKPLMTRVVERSSSMTSTMTIGKFMLALAFFAIIIAYF
```

Seqüència recuperada de UniProt P49326. Longitud: 533 aminoàcids. Cisteïnes: 21, 22, 31, 69, 112, 147, 248, 468.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a flavin-containing monooxygenase 5. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P49326; gen: FMO5 |
| EC / BRENDA | 1.14.13.8 |
| Estructura principal | 6SEK |
| Plegament o família | enzim flavoproteic amb FAD; plegament adaptat a transferència d’oxigen dependent de NADPH |
| Estructura secundària i lectura ChimeraX | domini flavoproteic mixt amb hèlixs i làmines que sostenen FAD i el lloc d’entrada de substrat; cal marcar ponts d’hidrogen interns i contactes al voltant del cofactor |
| Lligands, cofactors o lloc funcional | FAD/NADPH o anàlegs segons l’estructura triada; cal distingir cofactor i substrat xenobiòtic |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. FMO5 catalitza oxidacions dependents de FAD i NADPH, amb interès en metabolisme oxidatiu i especificitat de substrat.

## Arquitectura molecular

FMO5 és una monooxigenasa dependent de FAD i NADPH. La lectura estructural se centra en el lloc d’unió de FAD, l’accés del NADPH i la cavitat on s’oxiden substrats orgànics.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt1.1.PNG' | relative_url }}" alt="Figura 1 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Flavin-containing monooxygenase 5: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt1.PNG' | relative_url }}" alt="Figura 2 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Flavin-containing monooxygenase 5: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

El cicle catalític passa per reducció de FAD, activació d’oxigen i transferència d’un àtom d’oxigen al substrat. La geometria del cofactor i la xarxa de residus polars controlen la formació d’intermedis oxidants.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/fmo_bvmo.png' | relative_url }}" alt="Mecanisme general d’una monooxigenasa dependent de flavina; esquema útil per contextualitzar l’activació d’oxigen per FAD/NADPH. " loading="lazy"> <figcaption><strong>Figura.</strong> Mecanisme general d’una monooxigenasa dependent de flavina; esquema útil per contextualitzar l’activació d’oxigen per FAD/NADPH. Font: <a href="https://commons.wikimedia.org/wiki/File:BVMO_reaction_mechanism.png">Wikimedia Commons, BVMO reaction mechanism</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Leisch et al., 2011).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt2.1.PNG' | relative_url }}" alt="Figura 3 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Flavin-containing monooxygenase 5: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt2.2.2.PNG' | relative_url }}" alt="Figura 4 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Flavin-containing monooxygenase 5: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

Les anotacions de variants i modificacions s’han de consultar a UniProt per FMO5 i traslladar-les només si el residu és present en la seqüència analitzada. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt2.2.PNG' | relative_url }}" alt="Figura 5 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Flavin-containing monooxygenase 5: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt2.3.PNG' | relative_url }}" alt="Figura 6 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Flavin-containing monooxygenase 5: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt3.1.PNG' | relative_url }}" alt="Figura 7 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Flavin-containing monooxygenase 5: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt3.2.PNG' | relative_url }}" alt="Figura 8 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Flavin-containing monooxygenase 5: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt3.3.PNG' | relative_url }}" alt="Figura 9 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Flavin-containing monooxygenase 5: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt4.1.PNG' | relative_url }}" alt="Figura 10 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Flavin-containing monooxygenase 5: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Leisch, H.; Morley, K.; Lau, P. C. K. (2011). *Baeyer-Villiger Monooxygenases: More Than Just Green Chemistry*. *Chemical Reviews*. [doi: 10.1021/cr1003437](https://doi.org/10.1021/cr1003437).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/pràctica1(JCA).md' | relative_url }}">pàgina original del grup A</a>.
