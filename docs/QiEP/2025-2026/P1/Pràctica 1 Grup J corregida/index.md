---
title: "Variant P450/P411 derivada de BM3"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-J-corregida/
author: "Maria Llena Prats, María Roura Vilanova, Lídia Lan Molina Vergés i Agnès Navarta Bonilla i Miquel Ruiz"
---

<p class="qiep-group-label"><strong>Grup J</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC J | 2025-2026 | seqüència problema
MTIKEMPQPKTFGELKNLPLLNTDKPVQALMKIADELGEIFKFEAPGRVTRYLSSQRLIKEACDESRFDKNLSQALKFVR
DFLGDGLATSWTHEKNWKKAHNILLPSFSQQAMKGYHAMMVDIAVQLVQKWERLNADEHIEVSEDMTRLTLDTIGLCGFN
YRFNSFYRDQPHPFIISMVRALDEVMNKLQRANPDDPAYDENKRQFQEDIKVMNDLVDKIIADRKARGEQSDDLLTQMLN
GKDPETGEPLDDGNIRYQIITFLLAGHEGSHGLLSFALYFLVKNPHVLQKVAEEAARVLVDPVPSYKQVKQLKYVGMVLN
EALRLWPTVPAFSLYAKEDTVLGGEYPLEKGDEVMVLIPQLHRDKTVWGDDVEEFRPERFENPSAIPQHAFKPFGNGQRA
SIGQQFALHEATLVLGMMLKHFDFEDHTNYELDIKETLSLKPKGFVVKAKSKKIPLGGIPSPSTLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 472 aminoàcids. Cisteïnes: 63, 157.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [5UCW](https://www.rcsb.org/structure/5UCW) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.7 Å. La longitud de la seqüència analitzada és de 472 aminoàcids. Registre UniProt candidat P14779 (citocrom P450/NADPH--P450 reductasa bifuncional), vinculat a l’entitat PDB recomanada. Gen: cyp102A1.

| Camp | Valor |
|---|---|
| UniProt / gen | [P14779](https://www.uniprot.org/uniprotkb/P14779); gen: cyp102A1 |
| EC / BRENDA | no assignat |
| Estructura principal | [5UCW](https://www.rcsb.org/structure/5UCW) entitat 1; difracció de raigs X, 1.7 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | domini hemo de citocrom P450, CATH 1.10.630.10; el constructe correspon al domini catalític i no a BM3 completa |
| Estructura secundària i lectura ChimeraX | làmina β: 4, hèlix: 23, regions no assignades: 1; exemples: làmina β 40-45, 48-53, 353-357, 331-336, 68-71; làmina β 140-141, 446-451, 422-425; làmina β 340-342, 346-348; làmina β 434-436, 440-442; hèlix 12-16; hèlix 17-22; hèlix 25-38; hèlix 55-63 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 467-472 (HHHHHH); cisteïnes a [63, 157] |

Funcionalment, el domini P450/P411 deriva de CYP102A1/BM3. Els P450 naturals hidroxilen àcids grassos mitjançant activació d’oxigen al ferro-hemo, mentre que les variants P411 poden redirigir la reactivitat cap a transferència de carbè i ciclopropanació. 5UCW correspon a una variant del domini hemo de CYP102A1/BM3. L’anàlisi se centra en el domini P450/P411 i no en la proteïna BM3 completa amb dominis reductasa.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | P450/P411 |
| Estructura de referència | 5UCW |
| Longitud | 472 aa |
| Trets rellevants | His 467-472; domini hemo |


## Arquitectura molecular

El domini P450 és majoritàriament helicoidal i envolta el grup hemo. La posició del ferro, el lligand axial i la cavitat de substrat defineixen la reactivitat.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura10.meander.png' | relative_url }}" alt="Figura 1 del grup J" loading="lazy"> <figcaption><strong>Figura 1.</strong> P450/P411: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura11.pontsh.png' | relative_url }}" alt="Figura 2 del grup J" loading="lazy"> <figcaption><strong>Figura 2.</strong> P450/P411: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

Els P450 naturals activen oxigen sobre el ferro-hemo. En variants P411, canvis a l’entorn de l’hemo modulen la química i poden afavorir reaccions no naturals.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/p450_mechanism.png' | relative_url }}" alt="Cicle catalític general dels citocroms P450, útil per situar l’activació de l’oxigen al ferro-hemo. " loading="lazy"> <figcaption><strong>Figura.</strong> Cicle catalític general dels citocroms P450, útil per situar l’activació de l’oxigen al ferro-hemo. Font: <a href="https://commons.wikimedia.org/wiki/File:CYP_mechanism.png">Wikimedia Commons, CYP mechanism</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Coelho et al., 2013).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura12.pontsh2.png' | relative_url }}" alt="Figura 3 del grup J" loading="lazy"> <figcaption><strong>Figura 3.</strong> P450/P411: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura13.vanderwalls.png' | relative_url }}" alt="Figura 4 del grup J" loading="lazy"> <figcaption><strong>Figura 4.</strong> P450/P411: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

Per al domini P450/P411, els residus funcionals principals són els que configuren l’hemo, el lligand axial i la cavitat de substrat. Les anotacions de BM3 completa sobre dominis FMN/FAD o regió reductasa només són contextuals si aquests dominis no són presents al constructe estructural.

## Relació seqüència-estructura-funció

Les mutacions del domini hemo s’han de connectar amb la geometria del centre actiu, l’accés del substrat i l’estat electrònic del ferro. FMN/FAD pertany al context de BM3 completa.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura14.betahairpin.png' | relative_url }}" alt="Figura 5 del grup J" loading="lazy"> <figcaption><strong>Figura 5.</strong> P450/P411: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura15.png' | relative_url }}" alt="Figura 6 del grup J" loading="lazy"> <figcaption><strong>Figura 6.</strong> P450/P411: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura16.png' | relative_url }}" alt="Figura 7 del grup J" loading="lazy"> <figcaption><strong>Figura 7.</strong> P450/P411: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura17.png' | relative_url }}" alt="Figura 8 del grup J" loading="lazy"> <figcaption><strong>Figura 8.</strong> P450/P411: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura18.png' | relative_url }}" alt="Figura 9 del grup J" loading="lazy"> <figcaption><strong>Figura 9.</strong> P450/P411: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura19.png' | relative_url }}" alt="Figura 10 del grup J" loading="lazy"> <figcaption><strong>Figura 10.</strong> P450/P411: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Coelho, P. S. et al. (2013). *Olefin cyclopropanation via carbene transfer catalyzed by engineered cytochrome P450 enzymes*. *Science*. [doi: 10.1126/science.1231434](https://doi.org/10.1126/science.1231434). Per al context de BM3: Whitehouse, C. J. C. et al. (2012), [doi: 10.1039/C1CS15192D](https://doi.org/10.1039/C1CS15192D).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Pràctica1QiEP_J.html' | relative_url }}">pàgina original del grup J</a>.
