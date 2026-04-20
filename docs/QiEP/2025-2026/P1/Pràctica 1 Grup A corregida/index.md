---
title: "Complex 8T5E: constructe d’unió al pèptid BIM"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-A-corregida/
author: "Sergi Gebellí, Marc Mulet, Alex Navarro, Ana Rodríguez, Guillem Sansalvador"
---

<p class="qiep-group-label"><strong>Grup A</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC A | 2025-2026 | seqüència problema
MSGEEERKEKREKVRAGLKRAIAELPAEVAARCLALLDDASDEEFIEAVLEVLEAMREALVAMAREGRLDAVRRATSHIN
EVLVDAAELALEKGREYFRRLCLIVCDMMIELIRLEPEQTPELRRIRERLEEIRRRLEGSG
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 141 aminoàcids. Cisteïnes: 33, 102, 106.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [8T5E](https://www.rcsb.org/structure/8T5E) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 3.0 Å. La longitud de la seqüència analitzada és de 141 aminoàcids. Segons les dades de RCSB/SIFTS, l’entitat 1, Bim_fulldiff, no té un registre UniProt propi perquè és un constructe dissenyat. El mateix PDB, però, sí que enllaça l’entitat 2, el pèptid BIM/BCL2L11, amb [UniProt O43521](https://www.uniprot.org/uniprotkb/O43521), amb cobertura completa del pèptid dins l’estructura però només parcial respecte de la proteïna BIM completa.

| Camp | Valor |
|---|---|
| UniProt / gen | constructe Bim_fulldiff: sense registre UniProt propi; pèptid associat BIM/BCL2L11: [O43521](https://www.uniprot.org/uniprotkb/O43521), gen *BCL2L11* |
| EC / BRENDA | no assignat |
| Estructura principal | [8T5E](https://www.rcsb.org/structure/8T5E) entitat 1; difracció de raigs X, 3.0 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | constructe helicoidal de disseny per reconeixement de pèptids; no hi ha una jerarquia CATH/ECOD natural assignable directament |
| Estructura secundària i lectura ChimeraX | hèlix: 7, regions no assignades: 1; exemples: hèlix 5-23; hèlix 26-39; hèlix 44-67; hèlix 68-81; hèlix 82-94; hèlix 94-114; hèlix 124-138; regions no assignades 1-4, 24-25, 40-43, 115-123, 139-141 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | cisteïnes a [33, 102, 106] |

Funcionalment, el constructe s’interpreta com una proteïna dissenyada per reconèixer un pèptid helicoidal BIM. La lectura biològica s’ha de separar en dues parts: la superfície artificial d’unió del disseny i el paper apoptòtic del pèptid BIM natural. 8T5E correspon al constructe Bim_fulldiff en complex amb un pèptid BIM helicoidal; el mapatge UniProt correspon al pèptid de l’entitat 2, no a la cadena dissenyada de l’entitat 1. La identitat funcional de l’entitat analitzada es formula, per tant, com a reconeixement proteïna-pèptid.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | constructe d’unió al pèptid BIM; nom de l’entitat PDB: Bim_fulldiff |
| Estructura de referència | 8T5E |
| Longitud | 141 aa |
| Trets rellevants | 3 Cys; complex proteïna-pèptid |

## Arquitectura molecular

El model mostra un paquet d’hèlixs que genera una superfície complementària per al pèptid BIM. L’element estructural rellevant no és un centre actiu, sinó una interfície: distribució d’hidrofòbics, càrregues de superfície i geometria de contacte.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge1.png' | relative_url }}" alt="Figura 1 del grup A" loading="lazy"> <figcaption><strong>Figura 1.</strong> Complex 8T5E: vista global del plegament del constructe d’unió. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge2.png' | relative_url }}" alt="Figura 2 del grup A" loading="lazy"> <figcaption><strong>Figura 2.</strong> Elements d’estructura secundària del constructe d’unió. </figcaption>
</figure>

## Lloc funcional i mecanisme

La funció molecular directa és la unió al pèptid BIM. Les conseqüències sobre apoptosi pertanyen al context biològic del pèptid natural i no es poden atribuir al constructe sense assaigs funcionals addicionals.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/bim_8t5e.jpeg' | relative_url }}" alt="Complex Bim_fulldiff-pèptid BIM; estructura de referència del sistema d’unió proteïna-pèptid. " loading="lazy"> <figcaption><strong>Figura.</strong> Complex Bim_fulldiff-pèptid BIM; estructura de referència del sistema d’unió proteïna-pèptid. Font: <a href="https://www.rcsb.org/structure/8T5E">RCSB PDB 8T5E</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Vazquez Torres et al., 2024).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge3.png' | relative_url }}" alt="Figura 3 del grup A" loading="lazy"> <figcaption><strong>Figura 3.</strong> Regió funcional associada al reconeixement del pèptid BIM. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge4.png' | relative_url }}" alt="Figura 4 del grup A" loading="lazy"> <figcaption><strong>Figura 4.</strong> Superfície molecular del constructe d’unió. </figcaption>
</figure>

## Modificacions i variants

No hi ha un registre UniProt natural directe associat a l’entitat 1 de 8T5E. Les modificacions posttraduccionals i variants de BIM/BCL2L11 anotades a UniProt O43521 descriuen la proteïna natural o el pèptid associat, no el constructe Bim_fulldiff. Només s’han de projectar sobre l’estructura quan es manté separada la numeració del pèptid de la numeració del constructe.

## Relació seqüència-estructura-funció

La interpretació seqüència-estructura-funció se centra en separar residus del constructe i residus del pèptid. Els primers defineixen la superfície d’unió; els segons expliquen quins residus de BIM són reconeguts.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge5.png' | relative_url }}" alt="Figura 5 del grup A" loading="lazy"> <figcaption><strong>Figura 5.</strong> Contactes moleculars del complex 8T5E. </figcaption>
</figure>

## Referències

- Vazquez Torres, S. et al. (2024). *De novo design of high-affinity binders of bioactive helical peptides*. *Nature*. [doi: 10.1038/s41586-023-06953-1](https://doi.org/10.1038/s41586-023-06953-1).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Pràctica 1 Química i Enginyeria de proteïnes..html' | relative_url }}">pàgina original del grup A</a>.
