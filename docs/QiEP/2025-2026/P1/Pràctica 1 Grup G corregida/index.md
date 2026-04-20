---
title: "RA95.0: retro-aldolasa sobre bastida TIM"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-G-corregida/
author: "Joan Suárez, Mariona Miquel, Martina Xian Porcel, Joan Oliva, Joan Grau"
---

<p class="qiep-group-label"><strong>Grup G</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC G | 2025-2026 | seqüència problema
MPRYLKGWLEDVVQLSLRRPSVRASRQRPIISLNERILEFNKRNITAIIAVYERKSPSGLDVERDPIEYAKFMERYAVGL
SITTEEKYFNGSYETLRKIASSVSIPILMSDFIVKESQIDDAYNLGADTVLLIVKILTERELESLLEYARSYGMEPLILI
NDENDLDIALRIGARFIGIMSRDFETGEINKENQRKLISMIPSNVVKVAKLGISERNEIEELRKLGVNAFLISSSLMRNP
EKIKELIEGSLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 258 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [4A29](https://www.rcsb.org/structure/4A29) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.1 Å. La longitud de la seqüència analitzada és de 258 aminoàcids. Registre UniProt candidat Q06121 (indole-3-glicerol fosfat sintasa), vinculat a l’entitat PDB recomanada. Gen: trpC.

| Camp | Valor |
|---|---|
| UniProt / gen | [Q06121](https://www.uniprot.org/uniprotkb/Q06121); gen: trpC |
| EC / BRENDA | 4.1.1.48. Consulteu BRENDA a partir del número EC indicat. |
| Estructura principal | [4A29](https://www.rcsb.org/structure/4A29) entitat 1; difracció de raigs X, 1.1 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | bastida de barril TIM/aldolasa de classe I, CATH 3.20.20.70, usada com a suport de la retro-aldolasa RA95.0 |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 12, regions no assignades: 1; exemples: làmina β 48-52, 229-232, 206-211, 176-179, 157-160, 129-133, 107-110, 79-83, 48-52; hèlix 6-18; hèlix 32-43; hèlix 65-74; hèlix 92-101; hèlix 115-126; hèlix 135-137; hèlix 138-152 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 253-258 (HHHHHH) |

Funcionalment, RA95.0 és una retro-aldolasa dissenyada sobre una bastida TIM. La funció natural IGPS/trpC i l’EC 4.1.1.48 s’han de presentar com a context estructural o evolutiu, no com a funció directa del constructe. 4A29 cobreix tota la seqüència assignada amb identitat completa. 3QJA, una IGPS nativa d’alta resolució, és útil com a comparació de bastida però no substitueix 4A29 per explicar identitat, funció o residus del constructe.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | RA95.0 |
| Estructura de referència | 4A29 |
| Longitud | 258 aa |
| Trets rellevants | His 253-258; sense Cys |

## Arquitectura molecular

RA95.0 manté el patró de barril TIM: làmines β al centre i hèlixs envoltants. Aquesta disposició crea una cavitat modulable on canvis puntuals de seqüència poden generar una activitat química nova.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 1.png' | relative_url }}" alt="Figura 1 del grup G" loading="lazy"> <figcaption><strong>Figura 1.</strong> RA95.0: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 2.png' | relative_url }}" alt="Figura 2 del grup G" loading="lazy"> <figcaption><strong>Figura 2.</strong> RA95.0: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La funció del constructe és retro-aldolasa dissenyada. IGPS/trpC i EC 4.1.1.48 són context de la bastida natural; la discussió funcional de RA95.0 se centra en la catàlisi retro-aldòlica.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/ra95_4a29.jpeg' | relative_url }}" alt="Estructura 4A29 de RA95.0, retro-aldolasa de disseny. " loading="lazy"> <figcaption><strong>Figura.</strong> Estructura 4A29 de RA95.0, retro-aldolasa de disseny. Font: <a href="https://www.rcsb.org/structure/4A29">RCSB PDB 4A29</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Giger et al., 2013).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 3.png' | relative_url }}" alt="Figura 3 del grup G" loading="lazy"> <figcaption><strong>Figura 3.</strong> RA95.0: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 4.png' | relative_url }}" alt="Figura 4 del grup G" loading="lazy"> <figcaption><strong>Figura 4.</strong> RA95.0: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

RA95.0 és un constructe dissenyat; no s’hi han d’importar variants o modificacions posttraduccionals de la IGPS natural sense alineament. Les posicions determinants són les mutacions que creen la cavitat retro-aldolasa i la geometria del centre catalític al PDB 4A29.

## Relació seqüència-estructura-funció

Els residus catalítics d’IGPS no es transfereixen automàticament a RA95.0. La comparació útil és un remapeig 3QJA-4A29 que identifiqui posicions equivalents i mutacions responsables de la nova reactivitat.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 5.png' | relative_url }}" alt="Figura 5 del grup G" loading="lazy"> <figcaption><strong>Figura 5.</strong> RA95.0: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 6.png' | relative_url }}" alt="Figura 6 del grup G" loading="lazy"> <figcaption><strong>Figura 6.</strong> RA95.0: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 7.png' | relative_url }}" alt="Figura 7 del grup G" loading="lazy"> <figcaption><strong>Figura 7.</strong> RA95.0: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 8.png' | relative_url }}" alt="Figura 8 del grup G" loading="lazy"> <figcaption><strong>Figura 8.</strong> RA95.0: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 9.png' | relative_url }}" alt="Figura 9 del grup G" loading="lazy"> <figcaption><strong>Figura 9.</strong> RA95.0: vista global del plegament. </figcaption>
</figure>

## Referències

- Giger, L. et al. (2013). *Evolution of a designed retro-aldolase leads to complete active site remodeling*. *Nature Chemical Biology*. [doi: 10.1038/nchembio.1276](https://doi.org/10.1038/nchembio.1276). La família RA95 prové del disseny computacional de retro-aldolases: Jiang, L. et al. (2008), [doi: 10.1126/science.1152692](https://doi.org/10.1126/science.1152692).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/P1_QIEP_GrupG_editat.md' | relative_url }}">pàgina original del grup G</a>.
