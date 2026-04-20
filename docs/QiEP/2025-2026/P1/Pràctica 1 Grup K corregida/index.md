---
title: "Domini hemo del citocrom P450 BM3"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-K-corregida/
author: "Anna Delós, Diego De la Cueva, Joaquín Arcas, Sofía Barbero"
---

<p class="qiep-group-label"><strong>Grup K</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC K | 2025-2026 | seqüència problema
MTIKEMPQPKTFGELKNLPLLNTDKPVQALMKIADELGEIFKFEAPGRVTRYISSQRLVKEACDESRFDKNLSQARKFVR
DFAGDGLATSWTHEKNWKKARNILLPRLSQQAMKGYHAMMVDIAVQLVQKWERLNSDEHIEVPEDMTRLTLDTIGLCGFN
YRINSFYRDQPHPFITSMVRALDEVMNKLQRANPDDPAYDENKRQFQEDIKVMNDLVDKIIADRKASGEQSDDLLTHMLH
GKDPETGEPLDDENIRYQIITFLIAGHETTSGLLTFALYFLVKNPHVLQKAAEEAARVLVDPVPSYKQVKQLKYVGMVLN
EALRIWPTAPAFSLYAKEDTMLGGEYPLEKGDELMVLIPQLHRDKTVWGDDVEEFRPERFENPSAIPQHAFKPFGNGQRA
CIGQQFALHEATLVLGMMLKHFDFEDHTNYELDIEETLTLKPKGFVIKAKSKKIPLGGIPSPSTLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 472 aminoàcids. Cisteïnes: 63, 157, 401.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [3QI8](https://www.rcsb.org/structure/3QI8) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 3.2 Å. La longitud de la seqüència analitzada és de 472 aminoàcids. 3QI8 no exposa un mapatge UniProt directe per a aquesta entitat a RCSB/SIFTS, però estructures molt properes del domini hemo de BM3 mapen a [UniProt P14779](https://www.uniprot.org/uniprotkb/P14779), citocrom P450/NADPH--P450 reductasa bifuncional, gen *cyp102A1*.

| Camp | Valor |
|---|---|
| UniProt / gen | context de BM3: [P14779](https://www.uniprot.org/uniprotkb/P14779), gen *cyp102A1*; 3QI8 entitat 1 sense mapatge SIFTS directe |
| EC / BRENDA | no assignat |
| Estructura principal | [3QI8](https://www.rcsb.org/structure/3QI8) entitat 1; difracció de raigs X, 3.2 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | domini hemo de citocrom P450, CATH 1.10.630.10; variant evolucionada del domini P450 de BM3 |
| Estructura secundària i lectura ChimeraX | làmina β: 4, hèlix: 22, regions no assignades: 1; exemples: làmina β 42-45, 48-53, 353-357, 331-336, 68-70; làmina β 140-141, 446-451, 422-425; làmina β 340-342, 346-348; làmina β 434-436, 440-442; hèlix 12-16; hèlix 17-22; hèlix 25-37; hèlix 55-63 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 467-472 (HHHHHH); cisteïnes a [63, 157, 401] |

Funcionalment, és una variant del domini hemo de P450 BM3. La funció natural és la monooxigenació d’àcids grassos amb activació d’oxigen al ferro-hemo; les mutacions de variants evolucionades modulen accés de substrat, estat electrònic i acoblament catalític. 3QI8 és la coincidència exacta de la seqüència assignada. 2IJ2 és una estructura propera i d’alta resolució que pot aportar detall atòmic si es manté el remapeig amb la seqüència.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | P450 BM3 hemo |
| Estructura de referència | 3QI8 / 2IJ2 |
| Longitud | 472 aa |
| Trets rellevants | His 467-472; citocrom P450 |


## Arquitectura molecular

El domini hemo de BM3 presenta el plegament P450, amb hèlixs que envolten el grup hemo i defineixen canals d’accés al substrat.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup K/Figura 1.png' | relative_url }}" alt="Figura 1 del grup K" loading="lazy"> <figcaption><strong>Figura 1.</strong> P450 BM3 hemo: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup K/Figura 2.png' | relative_url }}" alt="Figura 2 del grup K" loading="lazy"> <figcaption><strong>Figura 2.</strong> P450 BM3 hemo: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La funció natural de BM3 és la hidroxilació d’àcids grassos. El domini hemo activa oxigen i transfereix un àtom d’oxigen al substrat; els dominis reductasa aporten electrons en la proteïna completa.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/p450_mechanism.png' | relative_url }}" alt="Cicle catalític general dels citocroms P450 aplicable al domini hemo de BM3. " loading="lazy"> <figcaption><strong>Figura.</strong> Cicle catalític general dels citocroms P450 aplicable al domini hemo de BM3. Font: <a href="https://commons.wikimedia.org/wiki/File:CYP_mechanism.png">Wikimedia Commons, CYP mechanism</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Whitehouse et al., 2012).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup K/Figura 3.png' | relative_url }}" alt="Figura 3 del grup K" loading="lazy"> <figcaption><strong>Figura 3.</strong> P450 BM3 hemo: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup K/Figura 4.png' | relative_url }}" alt="Figura 4 del grup K" loading="lazy"> <figcaption><strong>Figura 4.</strong> P450 BM3 hemo: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

En aquesta variant del domini hemo de BM3, els canvis funcionals s’han d’interpretar com a mutacions d’enginyeria al voltant de l’hemo, el canal de substrat i l’acoblament electrònic. Les anotacions de BM3 completa sobre reductasa o dominis flavínics no s’han de projectar sobre el domini hemo aïllat.

## Relació seqüència-estructura-funció

La interpretació molecular connecta hemo, residus de la butxaca, canals d’entrada i mutacions. Quan es fa servir 2IJ2, les posicions s’han de remapejar respecte de 3QI8.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup K/Taula 1.png' | relative_url }}" alt="Figura 5 del grup K" loading="lazy"> <figcaption><strong>Figura 5.</strong> P450 BM3 hemo: contactes amb lligands o cofactors. </figcaption>
</figure>

## Referències

- Whitehouse, C. J. C.; Bell, S. G.; Wong, L. -L. (2012). *P450BM3 (CYP102A1): connecting the dots*. *Chemical Society Reviews*. [doi: 10.1039/C1CS15192D](https://doi.org/10.1039/C1CS15192D).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup K/Citocrom-P450-BM3.html' | relative_url }}">pàgina original del grup K</a>.
