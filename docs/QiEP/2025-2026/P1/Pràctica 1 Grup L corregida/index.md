---
title: "Regulador PadR/LmrR amb domini hèlix alada"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-L-corregida/
author: "Pere Berdié, Anna Cotado i Emma Granados"
---

<p class="qiep-group-label"><strong>Grup L</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC L | 2025-2026 | seqüència problema
MAEIPKEMLRAQTNXILLNVLKQGDNYVYGIIKQVKEASNGEMELNEATLYTIFKRLEKDGIISSYWGDESQGGRRKYYR
LTEIGHENMRLAFESWSRVDKIIENLEANKKSEAIKSRWSHPQFEK
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 126 aminoàcids. Posicions amb residu ambigu o no estàndard: 15.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [6I8N](https://www.rcsb.org/structure/6I8N) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.79 Å. La longitud de la seqüència analitzada és de 126 aminoàcids. Registre UniProt candidat A2RI36 (regulador transcripcional de la família PadR/LmrR, cobertura de l’entitat 92, 1%). El gen no apareix anotat al registre recuperat; cal separar l’anotació natural de l’ús com a bastida de disseny.

| Camp | Valor |
|---|---|
| UniProt / gen | [A2RI36](https://www.uniprot.org/uniprotkb/A2RI36); gen: no anotat o no aplicable |
| EC / BRENDA | no assignat |
| Estructura principal | [6I8N](https://www.rcsb.org/structure/6I8N) entitat 1; difracció de raigs X, 1.79 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | dímer regulador de tipus hèlix alada, CATH 1.10.10.10; bastida LmrR/PadR amb residu no canònic en el centre funcional |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 4, regions no assignades: 1; exemples: làmina β 26-27, 77-81, 63-67; hèlix 5-24; hèlix 28-39; hèlix 46-60; hèlix 82-111; regions no assignades 1-4, 25, 40-45, 61-62, 68-76, 112-126 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta Strep-II 119-126 (WSHPQFEK); residus no canònics: [15] |

Funcionalment, LmrR/PadR és un regulador dimèric de tipus hèlix alada. En aquesta entrada cal separar la funció reguladora natural d’unió a DNA o lligands de l’ús com a bastida de disseny amb aminoàcid no canònic. 6I8N cobreix tota la seqüència assignada. La proteïna s’inscriu en la família PadR-like; l’etiqueta Strep-tag II final es diferencia del domini funcional.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | PadR/LmrR |
| Estructura de referència | 6I8N |
| Longitud | 126 aa |
| Trets rellevants | Strep-tag II 119-126; domini d’unió al DNA |


## Arquitectura molecular

El domini principal és de tipus hèlix alada, amb hèlixs de reconeixement i elements beta que contribueixen a la interacció amb DNA. La dimerització és part del context funcional de molts reguladors d’aquesta família.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura1.png' | relative_url }}" alt="Figura 1 del grup L" loading="lazy"> <figcaption><strong>Figura 1.</strong> PadR/LmrR: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura2.jpg' | relative_url }}" alt="Figura 2 del grup L" loading="lazy"> <figcaption><strong>Figura 2.</strong> PadR/LmrR: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La funció molecular és reguladora: unió a DNA i modulació de transcripció, amb possibles efectes de lligands segons l’homologia amb LmrR. Les afirmacions sobre cavitats o lligands s’han de vincular a l’estructura o a l’homòleg corresponent.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/padr_6i8n.jpeg' | relative_url }}" alt="Estructura 6I8N del regulador PadR-like amb domini hèlix alada. " loading="lazy"> <figcaption><strong>Figura.</strong> Estructura 6I8N del regulador PadR-like amb domini hèlix alada. Font: <a href="https://www.rcsb.org/structure/6I8N">RCSB PDB 6I8N</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Mayer et al., 2019).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura3.jpg' | relative_url }}" alt="Figura 3 del grup L" loading="lazy"> <figcaption><strong>Figura 3.</strong> PadR/LmrR: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura4.jpg' | relative_url }}" alt="Figura 4 del grup L" loading="lazy"> <figcaption><strong>Figura 4.</strong> PadR/LmrR: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

En LmrR/PadR, els punts funcionals són els residus de la interfície dimèrica, el domini hèlix alada i el residu no canònic emprat en el disseny. Les posicions d’unió anotades a UniProt/PDB s’han de remapar a la numeració del constructe 6I8N abans de relacionar-les amb DNA, lligands o catàlisi artificial.

## Relació seqüència-estructura-funció

La seqüència es llegeix separant el domini hèlix alada, les posicions potencialment implicades en DNA i el tram final d’etiqueta. Aquesta frontera evita interpretar l’etiqueta com a part de la funció reguladora.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura5.png' | relative_url }}" alt="Figura 5 del grup L" loading="lazy"> <figcaption><strong>Figura 5.</strong> PadR/LmrR: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura6.jpg' | relative_url }}" alt="Figura 6 del grup L" loading="lazy"> <figcaption><strong>Figura 6.</strong> PadR/LmrR: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura7.png' | relative_url }}" alt="Figura 7 del grup L" loading="lazy"> <figcaption><strong>Figura 7.</strong> PadR/LmrR: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura8.png' | relative_url }}" alt="Figura 8 del grup L" loading="lazy"> <figcaption><strong>Figura 8.</strong> PadR/LmrR: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura9.png' | relative_url }}" alt="Figura 9 del grup L" loading="lazy"> <figcaption><strong>Figura 9.</strong> PadR/LmrR: vista global del plegament. </figcaption>
</figure>

## Referències

- Mayer, C. et al. (2019). *Directed Evolution of a Designer Enzyme Featuring an Unnatural Catalytic Amino Acid*. *Angewandte Chemie International Edition*. [doi: 10.1002/anie.201813499](https://doi.org/10.1002/anie.201813499).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Practica1grupL.html' | relative_url }}">pàgina original del grup L</a>.
