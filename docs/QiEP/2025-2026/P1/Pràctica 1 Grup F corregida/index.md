---
title: "RA95.5-8F: retro-aldolasa dissenyada"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-F-corregida/
author: "Carlota Pérez, Elsa Benito, Marc Rovira, Jordi Solà i Aina Seguí"
---

<p class="qiep-group-label"><strong>Grup F</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC F | 2025-2026 | seqüència problema
MPRYLKGWLEDVVQLSLRRPSVHASRQRPIISLNERILEFNKRNITAIIAYYLRKSPSGLDVERDPIEYAKYMEPYAVGL
SIKTEEKYFDGSYEMLRKIASSVSIPILMNDFIVKESQIDDAYNLGADTVLLIVEILTERELESLLEYARGYGMEPLILI
NDENDLDIALRIGARFITIYSMNFETGEINKENQRKLISMIPSNVVKVPLLDFFEPNEIEELRKLGVNAFMISSSLMRNP
EKIKELIEGSLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 258 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [5AN7](https://www.rcsb.org/structure/5AN7) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.1 Å. La longitud de la seqüència analitzada és de 258 aminoàcids. Registre UniProt candidat Q06121 (indole-3-glicerol fosfat sintasa), vinculat a l’entitat PDB recomanada. Gen: trpC.

| Camp | Valor |
|---|---|
| UniProt / gen | [Q06121](https://www.uniprot.org/uniprotkb/Q06121); gen: trpC |
| EC / BRENDA | 4.1.1.48. Consulteu BRENDA a partir del número EC indicat. |
| Estructura principal | [5AN7](https://www.rcsb.org/structure/5AN7) entitat 1; difracció de raigs X, 1.1 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | bastida de barril TIM/aldolasa de classe I, CATH 3.20.20.70, remodelada per activitat retro-aldolasa |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 12, regions no assignades: 1; exemples: làmina β 48-52, 230-232, 206-211, 176-179, 157-160, 129-133, 107-110, 79-83, 48-52; hèlix 6-18; hèlix 32-44; hèlix 65-74; hèlix 92-101; hèlix 115-126; hèlix 135-137; hèlix 138-152 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 253-258 (HHHHHH) |

Funcionalment, RA95.5-8F és una retro-aldolasa dissenyada sobre una bastida d’indole-3-glicerol fosfat sintasa. La funció natural IGPS/trpC i l’EC 4.1.1.48 són context de la bastida, no la funció principal del constructe evolucionat. 5AN7 és la coincidència exacta de la seqüència assignada. El context IGPS/trpC descriu la bastida evolutiva, però la identitat del constructe és una retro-aldolasa dissenyada.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | RA95.5-8F |
| Estructura de referència | 5AN7 |
| Longitud | 258 aa |
| Trets rellevants | His 253-258; barril TIM |


## Arquitectura molecular

La proteïna adopta un barril TIM, amb làmines β internes i hèlixs externes. Aquesta arquitectura és compatible amb cavitats catalítiques profundes i apareix repetidament en disseny d’enzims.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura1.png' | relative_url }}" alt="Figura 1 del grup F" loading="lazy"> <figcaption><strong>Figura 1.</strong> RA95.5-8F: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura10.png' | relative_url }}" alt="Figura 2 del grup F" loading="lazy"> <figcaption><strong>Figura 2.</strong> RA95.5-8F: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La funció rellevant és la reacció retro-aldòlica dissenyada. La cavitat catalítica no s’ha d’interpretar com a centre actiu d’IGPS, sinó com una reprogramació química sobre una bastida TIM.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/ra95_5an7.jpeg' | relative_url }}" alt="Estructura 5AN7 de RA95.5-8F, retro-aldolasa dissenyada sobre bastida TIM. " loading="lazy"> <figcaption><strong>Figura.</strong> Estructura 5AN7 de RA95.5-8F, retro-aldolasa dissenyada sobre bastida TIM. Font: <a href="https://www.rcsb.org/structure/5AN7">RCSB PDB 5AN7</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Obexer et al., 2017).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura2.png' | relative_url }}" alt="Figura 3 del grup F" loading="lazy"> <figcaption><strong>Figura 3.</strong> RA95.5-8F: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura3.png' | relative_url }}" alt="Figura 4 del grup F" loading="lazy"> <figcaption><strong>Figura 4.</strong> RA95.5-8F: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

RA95.5-8F és un constructe evolucionat; no s’hi han d’importar variants o modificacions posttraduccionals de la IGPS natural sense alineament. Les mutacions rellevants són les que remodelen la cavitat retro-aldolasa i cal discutir-les segons la numeració del PDB 5AN7.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció requereix separar residus conservats de la bastida, mutacions de disseny i residus directament implicats en la cavitat catalítica.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura4.png' | relative_url }}" alt="Figura 5 del grup F" loading="lazy"> <figcaption><strong>Figura 5.</strong> RA95.5-8F: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura5.png' | relative_url }}" alt="Figura 6 del grup F" loading="lazy"> <figcaption><strong>Figura 6.</strong> RA95.5-8F: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura6.png' | relative_url }}" alt="Figura 7 del grup F" loading="lazy"> <figcaption><strong>Figura 7.</strong> RA95.5-8F: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura7.png' | relative_url }}" alt="Figura 8 del grup F" loading="lazy"> <figcaption><strong>Figura 8.</strong> RA95.5-8F: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura8.png' | relative_url }}" alt="Figura 9 del grup F" loading="lazy"> <figcaption><strong>Figura 9.</strong> RA95.5-8F: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura9.png' | relative_url }}" alt="Figura 10 del grup F" loading="lazy"> <figcaption><strong>Figura 10.</strong> RA95.5-8F: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Obexer, R. et al. (2017). *Emergence of a catalytic tetrad during evolution of a highly active artificial aldolase*. *Nature Chemistry*. [doi: 10.1038/nchem.2596](https://doi.org/10.1038/nchem.2596).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/pràticaQiEP.html' | relative_url }}">pàgina original del grup F</a>.
