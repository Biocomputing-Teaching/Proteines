---
title: "Amina oxidasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-H-corregida/
author: "Arisó Gómez Irene, Guiu Gorgas Berta i Vila Roca Judith"
---

<p class="qiep-group-label"><strong>Grup H</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>sp|P21397|AOFA_HUMAN Amine oxidase [flavin-containing] A OS=Homo sapiens OX=9606 GN=MAOA PE=1 SV=1 | 2024-2025 | seqüència problema
MENQEKASIAGHMFDVVVIGGGISGLSAAKLLTEYGVSVLVLEARDRVGGRTYTIRNEHVDYVDVGGAYVGPTQNRILRL
SKELGIETYKVNVSERLVQYVKGKTYPFRGAFPPVWNPIAYLDYNNLWRTIDNMGKEIPTDAPWEAQHADKWDKMTMKEL
IDKICWTKTARRFAYLFVNINVTSEPHEVSALWFLWYVKQCGGTTRIFSVTNGGQERKFVGGSGQVSERIMDLLGDQVKL
NHPVTHVDQSSDNIIIETLNHEHYECKYVINAIPPTLTAKIHFRPELPAERNQLIQRLPMGAVIKCMMYYKEAFWKKKDY
CGCMIIEDEDAPISITLDDTKPDGSLPAIMGFILARKADRLAKLHKEIRKKKICELYAKVLGSQEALHPVHYEEKNWCEE
QYSGGCYTAYFPPGIMTQYGRVIRQPVGRIFFAGTETATKWSGYMEGAVEAGERAAREVLNGLGKVTEKDIWVQEPESKD
VPAVEITHTFWERNLPSVSGLLKIIGFSTSVTALGFVLYKYKLLPRS
```

Seqüència recuperada de UniProt P21397. Longitud: 527 aminoàcids. Cisteïnes: 165, 201, 266, 306, 321, 323, 374, 398, 406.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a amina oxidasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P21397; gen: AOC/amine oxidase segons organisme |
| EC / BRENDA | 1.4.3.4 |
| Estructura principal | 2Z5Y |
| Plegament o família | enzim de coure amb cofactor TPQ derivat d’una tirosina interna |
| Estructura secundària i lectura ChimeraX | enzim de coure amb cofactor TPQ; cal situar Cu, TPQ i canal d’accés de l’amina dins del plegament |
| Lligands, cofactors o lloc funcional | Cu i TPQ al centre actiu; el substrat amina forma una base de Schiff i es converteix en aldehid amb producció de peròxid d’hidrogen |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les amina oxidases oxiden amines i generen aldehids, amoníac i peròxid d’hidrogen mitjançant cofactors especialitzats.

## Arquitectura molecular

Les amina oxidases presenten cavitats d’accés al substrat connectades amb cofactors orgànics o metàl·lics. La forma del canal contribueix a la selectivitat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/1.png' | relative_url }}" alt="Figura 1 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Amina oxidasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/2.png' | relative_url }}" alt="Figura 2 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Amina oxidasa: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

L’oxidació d’amines genera aldehid, amoníac i peròxid d’hidrogen. La posició del cofactor i dels residus àcid-base controla la transferència d’electrons i protons.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/amine_oxidase.png' | relative_url }}" alt="Esquema de reacció relacionat amb oxidació d’amines, útil per situar substrat, producte i transferència redox. " loading="lazy"> <figcaption><strong>Figura.</strong> Esquema de reacció relacionat amb oxidació d’amines, útil per situar substrat, producte i transferència redox. Font: <a href="https://commons.wikimedia.org/wiki/File:Hdmethrxn2.png">Wikimedia Commons, Hdmethrxn2</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Mure et al., 2002).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/3.png' | relative_url }}" alt="Figura 3 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Amina oxidasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/4.png' | relative_url }}" alt="Figura 4 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Amina oxidasa: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

La modificació essencial és la biogènesi de TPQ a partir de tirosina; cal numerar el residu segons la seqüència exacta. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/5.png' | relative_url }}" alt="Figura 5 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Amina oxidasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/6.png' | relative_url }}" alt="Figura 6 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Amina oxidasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/7.png' | relative_url }}" alt="Figura 7 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Amina oxidasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/8.png' | relative_url }}" alt="Figura 8 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Amina oxidasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/9.png' | relative_url }}" alt="Figura 9 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Amina oxidasa: vista global del plegament. </figcaption>
</figure>

## Referències

- Mure, M.; Mills, S. A.; Klinman, J. P. (2002). *Catalytic Mechanism of the Topa Quinone Containing Copper Amine Oxidases*. *Biochemistry*. [doi: 10.1021/bi020246b](https://doi.org/10.1021/bi020246b).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/Grup H Amine oxidase.md' | relative_url }}">pàgina original del grup H</a>.
