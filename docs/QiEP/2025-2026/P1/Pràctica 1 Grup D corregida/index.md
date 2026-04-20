---
title: "DYNA_1b7 en complex amb dinorfina A"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-D-corregida/
author: "Luca Espinola, Daniela García, Manel Garcia, Oriol García, Guillem Fortea"
---

<p class="qiep-group-label"><strong>Grup D</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC D | 2025-2026 | seqüència problema
MSGKEEEIEKEFEEKKKIIEENLKEAEEEGEEEAAEKLKEALKKLEEAIKLHREGANPVEVELEEVTAIILNNLAVLLRE
GEEELAKELEKAIKLLEEKKDAPEEERLKAIAIAIIRSVLVLIKWEGGKDEETIEEIEEILENRENLSLEELREAYVRAE
IAYLIESGIDPEAAKKVREKYERGAPLEELLKDIEKIEKEAKKREEEKKGSHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 217 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [9CCE](https://www.rcsb.org/structure/9CCE) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 3.15 Å. La longitud de la seqüència analitzada és de 217 aminoàcids. Segons RCSB/SIFTS, l’entitat 1, DYNA_1b7, no té un registre UniProt propi; l’entitat 2 del mateix PDB correspon al pèptid dinorfina A i mapeja a [UniProt P01213](https://www.uniprot.org/uniprotkb/P01213), proencefalina-B/prodinorfina, gen *PDYN*.

| Camp | Valor |
|---|---|
| UniProt / gen | constructe DYNA_1b7: sense registre UniProt propi; pèptid dinorfina A associat: [P01213](https://www.uniprot.org/uniprotkb/P01213), gen *PDYN* |
| EC / BRENDA | no assignat |
| Estructura principal | [9CCE](https://www.rcsb.org/structure/9CCE) entitat 1; difracció de raigs X, 3.15 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | feix helicoidal dissenyat per reconeixement de regió desordenada/dinorfina; sense jerarquia natural CATH/ECOD directa |
| Estructura secundària i lectura ChimeraX | hèlix: 9, regions no assignades: 1; exemples: hèlix 6-29; hèlix 31-55; hèlix 57-80; hèlix 82-98; hèlix 103-126; hèlix 131-143; hèlix 148-167; hèlix 172-183 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 212-217 (HHHHHH) |

Funcionalment, DYNA_1b7 és un constructe d’unió a dinorfina A. La prodinorfina/PDYN aporta el context biològic del pèptid, però la funció del model estructural és el reconeixement proteïna-pèptid. 9CCE entitat 1 cobreix tota la seqüència assignada i correspon a DYNA_1b7; el mapatge UniProt P01213 correspon al pèptid associat de l’entitat 2 i no a la identitat del constructe dissenyat.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | DYNA_1b7 |
| Estructura de referència | 9CCE |
| Longitud | 217 aa |
| Trets rellevants | His 212-217; complex amb pèptid dinorfina |


## Arquitectura molecular

L’estructura és un conjunt helicoidal que presenta una superfície d’unió per a dinorfina A. La interpretació separa cadenes del constructe, cadenes del pèptid i etiqueta d’histidines terminal.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Figura 1.png' | relative_url }}" alt="Figura 1 del grup D" loading="lazy"> <figcaption><strong>Figura 1.</strong> DYNA_1b7: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Figura 2.png' | relative_url }}" alt="Figura 2 del grup D" loading="lazy"> <figcaption><strong>Figura 2.</strong> DYNA_1b7: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La funció molecular és el reconeixement del pèptid. No es tracta d’un enzim ni d’un precursor opioide; és un sistema de disseny per estudiar interaccions proteïna-pèptid amb geometria definida.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/dyna_9cce.jpeg' | relative_url }}" alt="Complex DYNA_1b7-dinorfina A, amb el constructe d’unió i el pèptid representats en el mateix conjunt estructural. " loading="lazy"> <figcaption><strong>Figura.</strong> Complex DYNA_1b7-dinorfina A, amb el constructe d’unió i el pèptid representats en el mateix conjunt estructural. Font: <a href="https://www.rcsb.org/structure/9CCE">RCSB PDB 9CCE</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Wu et al., 2025).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Figura 3.png' | relative_url }}" alt="Figura 3 del grup D" loading="lazy"> <figcaption><strong>Figura 3.</strong> DYNA_1b7: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Figura 4.png' | relative_url }}" alt="Figura 4 del grup D" loading="lazy"> <figcaption><strong>Figura 4.</strong> DYNA_1b7: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

La seqüència assignada és un constructe de reconeixement de dinorfina A i no la prodinorfina humana completa. Les variants de *PDYN* i les modificacions del precursor només tenen sentit com a context del pèptid natural; no s’han de traslladar al constructe sense separar entitat, cadena i numeració. L’etiqueta d’histidines terminal forma part del constructe experimental.

## Relació seqüència-estructura-funció

Els residus d’interfície del constructe expliquen la complementarietat amb la dinorfina A. La numeració del pèptid i la numeració del constructe s’han de mantenir separades per evitar atribucions funcionals incorrectes.

## Referències

- Wu, K. et al. (2025). *Design of intrinsically disordered region binding proteins*. *Science*. [doi: 10.1126/science.adr8063](https://doi.org/10.1126/science.adr8063).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Pratica1_GrupJC_D.md' | relative_url }}">pàgina original del grup D</a>.
