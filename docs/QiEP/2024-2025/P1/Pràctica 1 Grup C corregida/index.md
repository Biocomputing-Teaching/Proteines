---
title: "Cutinasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-C-corregida/
author: "Marta Amaro, Núria Gonzalez i Fatima Saculles"
---

<p class="qiep-group-label"><strong>Grup C</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>7YM9_1|Chains A, B|Poly(ethylene terephthalate) hydrolase|Cryptosporangium aurantiacum (134849) | 2024-2025 | seqüència problema
MAADNPYQRGPDPTNASIEAATGPFAVGTQPIVGASGFGGGQIYYPTDTSQTYGAVVIVPGFISVWAQLNWLGPRLASQG
FVVIGIETSVITDLPDPRGDQALAALDWATTRSPVASRIDRTRLAAAGWSMGGGGLRRAALQRPSLKAIVGMAPWNGERN
WSAVTVPTLFFGGSSDAVAspNDHAKPFYNSITRAEKDYIELRNADHFFPTSANTTMAKYFISWLKRWVDNDTRYTQFLC
PGPSTGLFAPVSASMNTCPFLEHHHHHH
```

Seqüència recuperada de RCSB PDB 7YM9. Longitud: 268 aminoàcids. Cisteïnes: 240, 258.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a cutinasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | no fixat a la pàgina original; gen: cutinase/cut1 segons organisme |
| EC / BRENDA | 3.1.1.74 |
| Estructura principal | 7YM9/7YME segons comparació estructural |
| Plegament o família | plegament α/β hidrolasa amb triada catalítica Ser-His-Asp/Glu accessible al solvent |
| Estructura secundària i lectura ChimeraX | plegament α/β hidrolasa; cal marcar la triada Ser-His-Asp/Glu, els llaços d’accés i els ponts d’hidrogen que estabilitzen el nucli |
| Lligands, cofactors o lloc funcional | centre catalític de serina; el substrat és un èster de cutina o un èster lipídic model |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La cutinasa hidrolitza enllaços èster en substrats com la cutina i és un model útil d’hidrolasa amb centre actiu accessible.

## Arquitectura molecular

La cutinasa adopta un plegament d’hidrolasa α/β amb una serina catalítica accessible. La superfície oberta del centre actiu explica l’activitat sobre èsters de polímers com la cutina.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/1.1.PNG' | relative_url }}" alt="Figura 1 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Cutinasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/1.2.PNG' | relative_url }}" alt="Figura 2 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Cutinasa: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

El mecanisme implica atac nucleofílic de la serina, intermedi acil-enzim i hidròlisi per aigua. La tríada catalítica i el forat oxianió estabilitzen els estats de transició.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/cutinase_hydrolysis.png' | relative_url }}" alt="Mecanisme d’hidròlisi de la cutinasa, amb l’intermedi acil-enzim característic de les serina hidrolases. " loading="lazy"> <figcaption><strong>Figura.</strong> Mecanisme d’hidròlisi de la cutinasa, amb l’intermedi acil-enzim característic de les serina hidrolases. Font: <a href="https://commons.wikimedia.org/wiki/File:Cutinase_Hydrolysis_Mechanism.png">Wikimedia Commons, Cutinase Hydrolysis Mechanism</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Martinez et al., 1992).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/1.3.png' | relative_url }}" alt="Figura 3 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Cutinasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/1.4.png' | relative_url }}" alt="Figura 4 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Cutinasa: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

La funció depèn sobretot de la triada catalítica i de la superfície d’accés al substrat; les modificacions posttraduccionals només s’han de discutir si provenen de la proteïna exacta o d’un homòleg alineat. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/2.1.PNG' | relative_url }}" alt="Figura 5 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Cutinasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/2.2.PNG' | relative_url }}" alt="Figura 6 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Cutinasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/2.3.PNG' | relative_url }}" alt="Figura 7 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Cutinasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/2.4.PNG' | relative_url }}" alt="Figura 8 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Cutinasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/3.1.PNG' | relative_url }}" alt="Figura 9 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Cutinasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/3.2.PNG' | relative_url }}" alt="Figura 10 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Cutinasa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Martinez, C. et al. (1992). *Fusarium solani cutinase is a lipolytic enzyme with a catalytic serine accessible to solvent*. *Nature*. [doi: 10.1038/356615a0](https://doi.org/10.1038/356615a0).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/Pràctica 1 (JC C).md' | relative_url }}">pàgina original del grup C</a>.
