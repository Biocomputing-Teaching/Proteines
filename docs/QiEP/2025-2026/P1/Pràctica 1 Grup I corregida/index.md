---
title: "KE07: eliminasa de Kemp dissenyada"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-I-corregida/
author: "Gerard Pañach, Ester Forés, Clara Alabau, Txell Cassases, Estel Àlvarez"
---

<p class="qiep-group-label"><strong>Grup I</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC I | 2025-2026 | seqüència problema
MALAKRIDAALIMKDGRVVKGSNFENLRDSGDPVELGKFYSEIGIDELSFWDITASVEKRKTMLELVEKVAEQIDIPFTV
GGGIHDFETASELILRGADKVEINTAAVENPSLITQIAQTFGSQAVVVYIAAKRVDGEFMVFTYSGKKNTGILLRDWVVE
VEKRGAGEIVLGSIDRLGTKSGYDTEMIRFVRPLTTLPIIAHRGAGKMEHFLEAFLAGADAAKADSVFHFREIDVRELKE
YLKKHGVNVRLEGLGSLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 264 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [6C7M](https://www.rcsb.org/structure/6C7M) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.45 Å. La longitud de la seqüència analitzada és de 264 aminoàcids. No s’ha trobat cap referència UniProt directa per a la millor entitat PDB; la seqüència s’ha de tractar com a constructe o proteïna de disseny si no hi ha una cerca addicional que en justifiqui una assignació natural.

| Camp | Valor |
|---|---|
| UniProt / gen | cap registre UniProt directe per al constructe; gen: no anotat o no aplicable |
| EC / BRENDA | no assignat |
| Estructura principal | [6C7M](https://www.rcsb.org/structure/6C7M) entitat 1; difracció de raigs X, 1.45 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | bastida de barril TIM/aldolasa de classe I, CATH 3.20.20.70, remodelada per a l’eliminació de Kemp |
| Estructura secundària i lectura ChimeraX | làmina β: 2, hèlix: 12, regions no assignades: 1; exemples: làmina β 17-18, 6-14, 47-52, 78-81, 100-103, 126-135, 138-143, 148-153; làmina β 17-18, 6-14, 221-224, 199-202, 168-173, 126-135, 138-143, 148-153; hèlix 32-44; hèlix 55-74; hèlix 86-97; hèlix 104-110; hèlix 111-122; hèlix 154-165 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 259-264 (HHHHHH) |

Funcionalment, KE07 és una eliminasa de Kemp dissenyada. No té una funció natural de genoma; el mecanisme s’ha d’explicar a partir dels residus introduïts, la cavitat catalítica i la literatura de disseny enzimàtic. 6C7M és la coincidència exacta de KE07. 8S8S pot usar-se com a homòleg estructural proper, però la identitat i la funció de la seqüència assignada corresponen a KE07.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | Kemp eliminase KE07 |
| Estructura de referència | 6C7M |
| Longitud | 264 aa |
| Trets rellevants | His 259-264; barril TIM |


## Arquitectura molecular

El plegament és compatible amb un barril TIM. La cavitat central permet situar residus dissenyats que orienten el substrat de la reacció de Kemp.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura1.png' | relative_url }}" alt="Figura 1 del grup I" loading="lazy"> <figcaption><strong>Figura 1.</strong> Kemp eliminase KE07: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura2.png' | relative_url }}" alt="Figura 2 del grup I" loading="lazy"> <figcaption><strong>Figura 2.</strong> Kemp eliminase KE07: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

L’eliminació de Kemp requereix orientar el substrat i facilitar una transferència de protó. En KE07, la funció s’explica a partir d’un microambient catalític artificial construït dins la bastida.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/ke07_6c7m.jpeg' | relative_url }}" alt="Estructura 6C7M de KE07, eliminasa de Kemp dissenyada. " loading="lazy"> <figcaption><strong>Figura.</strong> Estructura 6C7M de KE07, eliminasa de Kemp dissenyada. Font: <a href="https://www.rcsb.org/structure/6C7M">RCSB PDB 6C7M</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Hong et al., 2018).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura3.png' | relative_url }}" alt="Figura 3 del grup I" loading="lazy"> <figcaption><strong>Figura 3.</strong> Kemp eliminase KE07: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura4_a.png' | relative_url }}" alt="Figura 4 del grup I" loading="lazy"> <figcaption><strong>Figura 4.</strong> Kemp eliminase KE07: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

No hi ha un registre UniProt natural directe associat a la millor entitat PDB. En aquest cas no és correcte importar modificacions posttraduccionals o variants d’una proteïna natural sense un alineament explícit; les variants rellevants són les pròpies del disseny, de la interfície o del centre funcional definit a la publicació estructural.

## Relació seqüència-estructura-funció

La comparació 6C7M-8S8S és útil només si es conserva el remapeig de numeració. Els residus funcionals s’han de discutir sobre KE07; l’homòleg ajuda a contextualitzar el plegament.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura4_b.png' | relative_url }}" alt="Figura 5 del grup I" loading="lazy"> <figcaption><strong>Figura 5.</strong> Kemp eliminase KE07: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura4_c.png' | relative_url }}" alt="Figura 6 del grup I" loading="lazy"> <figcaption><strong>Figura 6.</strong> Kemp eliminase KE07: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura4_d.png' | relative_url }}" alt="Figura 7 del grup I" loading="lazy"> <figcaption><strong>Figura 7.</strong> Kemp eliminase KE07: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura5.png' | relative_url }}" alt="Figura 8 del grup I" loading="lazy"> <figcaption><strong>Figura 8.</strong> Kemp eliminase KE07: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura6_a.png' | relative_url }}" alt="Figura 9 del grup I" loading="lazy"> <figcaption><strong>Figura 9.</strong> Kemp eliminase KE07: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura6_b.png' | relative_url }}" alt="Figura 10 del grup I" loading="lazy"> <figcaption><strong>Figura 10.</strong> Kemp eliminase KE07: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Hong, N. S. et al. (2018). *The evolution of multiple active site configurations in a designed enzyme*. *Nature Communications*. [doi: 10.1038/s41467-018-06305-y](https://doi.org/10.1038/s41467-018-06305-y). L’origen del disseny KE és Röthlisberger, D. et al. (2008), [doi: 10.1038/nature06879](https://doi.org/10.1038/nature06879).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/Pràctica1_QEP_Grup_I.html' | relative_url }}">pàgina original del grup I</a>.
