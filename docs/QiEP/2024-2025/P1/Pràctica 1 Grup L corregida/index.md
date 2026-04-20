---
title: "Xilosa isomerasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-L-corregida/
author: "Cloe Capelle, Arnau Garcia i Sofia Lombera"
---

<p class="qiep-group-label"><strong>Grup L</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>sp|P24300|XYLA_STREZ Xylose isomerase OS=Streptomyces pseudogriseolus OX=36817 GN=xylA PE=1 SV=4 | 2024-2025 | seqüència problema
MNYQPTPEDRFTFGLWTVGWQGRDPFGDATRRALDPVESVRRLAELGAHGVTFHDDDLIPFGSSDSEREEHVKRFRQALD
DTGMKVPMATTNLFTHPVFKDGGFTANDRDVRRYALRKTIRNIDLAVELGAETYVAWGGREGAESGGAKDVRDALDRMKE
AFDLLGEYVTSQGYDIRFAIEPKPNEPRGDILLPTVGHALAFIERLERPELYGVNPEVGHEQMAGLNFPHGIAQALWAGK
LFHIDLNGQNGIKYDQDLRFGAGDLRAAFWLVDLLESAGYSGPRHFDFKPPRTEDFDGVWASAAGCMRNYLILKERAAAF
RADPEVQEALRASRLDELARPTAADGLQALLDDRSAFEEFDVDAAAARGMAFERLDQLAMDHLLGARG
```

Seqüència recuperada de UniProt P24300. Longitud: 388 aminoàcids. Cisteïnes: 306.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a xilosa isomerasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P24300; gen: xylA |
| EC / BRENDA | 5.3.1.5 |
| Estructura principal | 1MNZ |
| Plegament o família | barril TIM tetramèric amb centre actiu metal·loenzimàtic |
| Estructura secundària i lectura ChimeraX | barril TIM tetramèric; cal situar els dos metalls, el sucre i els residus de coordinació al centre del barril |
| Lligands, cofactors o lloc funcional | dos metalls divalents i sucre; la isomerització implica obertura d’anell i transferència d’hidrur |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La xilosa isomerasa interconverteix aldoses i cetoses mitjançant un centre actiu metàl·lic.

## Arquitectura molecular

La xilosa isomerasa és un enzim metàl·lic, sovint oligomèric, que interconverteix aldoses i cetoses. El centre actiu es llegeix al voltant dels metalls divalents.

## Lloc funcional i mecanisme

Els metalls estabilitzen intermedis i faciliten el desplaçament d’hidrogen necessari per convertir xilosa en xilulosa o glucosa en fructosa.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/xylose_isomerase.png' | relative_url }}" alt="Estructura i mecanisme de la xilosa isomerasa, amb el centre metàl·lic implicat en la isomerització. " loading="lazy"> <figcaption><strong>Figura.</strong> Estructura i mecanisme de la xilosa isomerasa, amb el centre metàl·lic implicat en la isomerització. Font: <a href="https://commons.wikimedia.org/wiki/File:Structure_and_mechanism_of_xylose_on_glucose.png">Wikimedia Commons, Structure and mechanism of xylose on glucose</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Blow et al., 1992).

## Modificacions i variants

Les modificacions posttraduccionals no són centrals; les variants rellevants afecten metalls, estabilitat i especificitat de substrat. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

## Referències

- Blow, D. M. et al. (1992). *Structure and mechanism of D-xylose isomerase*. *Faraday Discussions*. [doi: 10.1039/FD9929300067](https://doi.org/10.1039/FD9929300067). Per al paper dels metalls en una xilosa isomerasa moderna: [doi: 10.1021/acs.biochem.7b00777](https://doi.org/10.1021/acs.biochem.7b00777).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup L/PRACTICA1_GRUPJ.md' | relative_url }}">pàgina original del grup L</a>.
