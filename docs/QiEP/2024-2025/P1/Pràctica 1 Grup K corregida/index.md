---
title: "Pectat liasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-K-corregida/
author: "Martina Carreño, Laura Jordan i Berta Serrabasa"
---

<p class="qiep-group-label"><strong>Grup K</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>sp|P0C1A6|PLYL_DICCH Pectate lyase L OS=Dickeya chrysanthemi OX=556 GN=pelL PE=3 SV=1 | 2024-2025 | seqüència problema
MKYLNCFISTGLAAFFLVNSTSVLAADCSSDLTSGISTKRIYYVAPNGSSSNNGNSFNSPMSFTAAMAAANPGELILLKP
GTYTIPYTQGKGNTITFNKSGKEGSPIYVAAANCGRAVFDFSFPDSQWVQASYGFYVTGDYWYFKGIEVTRAGYQGAYVT
GSHNTFENTAFHHNRNTGLEINNGGSYNTVINSDAYRNYDPKKNGSMADGFGPKQKQGQGNRFGGCRAWENSDDGFDLFD
SPQKVVIENSWAFRNGINYWSDSSFAGNGNGFKLGGNQAVGNHRITRSVAFGNVSKGFDQNNNAGGVTVINNTSYKNGIN
YGFGSNVKSGQKHYFRNNVSLSGSATVNNADAKSNSWDTGPVASASDFVSLDTSLATISRDNDGTLPETALFRLSTNSKL
INAGTKESNISYSGSAPDLGAFERN
```

Seqüència recuperada de UniProt P0C1A6. Longitud: 425 aminoàcids. Cisteïnes: 6, 28, 114, 226.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a pectat liasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | segons organisme de la pectat liasa; gen: pel/pectate lyase |
| EC / BRENDA | 4.2.2.2 |
| Estructura principal | 1EE6 |
| Plegament o família | hèlix β dreta típica de moltes polisacàrid-liases |
| Estructura secundària i lectura ChimeraX | hèlix β dreta amb solc de polisacàrid; cal marcar Ca2+, residus bàsics i la zona de β-eliminació |
| Lligands, cofactors o lloc funcional | Ca2+ i pectat/oligogalacturonat; la reacció és β-eliminació i no hidròlisi |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les pectat liases trenquen pectines per a la β-eliminació i mostren com un polisacàrid pot ser reconegut sobre una superfície proteica.

## Arquitectura molecular

Les pectat liases presenten superfícies allargades o solcs on s’acomoda el polisacàrid. Sovint el calci contribueix a neutralitzar càrregues del pectat.

## Lloc funcional i mecanisme

La reacció és una β-eliminació, no una hidròlisi. El producte insaturat reflecteix la química de ruptura del polímer.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/pectate_1ee6.jpeg' | relative_url }}" alt="Pectat liasa: estructura de referència per interpretar el solc de reconeixement del polisacàrid i la química d’eliminació. " loading="lazy"> <figcaption><strong>Figura.</strong> Pectat liasa: estructura de referència per interpretar el solc de reconeixement del polisacàrid i la química d’eliminació. Font: <a href="https://www.rcsb.org/structure/1EE6">RCSB PDB 1EE6</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Akita et al., 2001).

## Modificacions i variants

El punt funcional principal són residus bàsics/àcids i Ca2+ al solc del polisacàrid, no modificacions posttraduccionals reguladores. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

## Referències

- Akita, M. et al. (2001). *The first structure of pectate lyase belonging to polysaccharide lyase family 3*. *Acta Crystallographica D*. [doi: 10.1107/S0907444901014482](https://doi.org/10.1107/S0907444901014482).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup K/Pectate lyase L.html' | relative_url }}">pàgina original del grup K</a>.
