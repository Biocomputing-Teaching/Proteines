---
title: "Receptor beta-2 adrenèrgic amb fusió lisozima T4"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-H-corregida/
author: "Estel Boix, Carla Masip, Marc Pardeiro"
---

<p class="qiep-group-label"><strong>Grup H</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>JC H | 2025-2026 | seqüència problema
DYKDDDDAMGQPGNGSAFLLAPNRSHAPDHDVTQQRDEVWVVGMGIVMSLIVLAIVFGNVLVITAIAKFERLQTVTNYFI
TSLACADLVMGLAVVPFGAAHILMKMWTFGNFWCEFWTSIDVLCVTASIWTLCVIAVDRYFAITSPFKYQSLLTKNKARV
IILMVWIVSGLTSFLPIQMHWYRATHQEAINCYAEETCCDFFTNQAYAIASSIVSFYVPLVIMVFVYSRVFQEAKRQLNI
FEMLRIDEGLRLKIYKDTEGYYTIGIGHLLTKSPSLNAAKSELDKAIGRNTNGVITKDEAEKLFNQDVDAAVRGILRNAK
LKPVYDSLDAVRRAALINMVFQMGETGVAGFTNSLRMLQQKRWDEAAVNLAKSRWYNQTPNRAKRVITTFRTGTWDAYKF
CLKEHKALKTLGIIMGTFTLCWLPFFIVNIVHVIQDNLIRKEVYILLNWIGYVNSGFNPLIYCRSPDFRIAFQELLCLRR
SSLKHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 490 aminoàcids. Cisteïnes: 85, 114, 124, 133, 192, 198, 199, 401, 421, 463, 477.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [6PS2](https://www.rcsb.org/structure/6PS2) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 2.4 Å. La longitud de la seqüència analitzada és de 490 aminoàcids. Registres UniProt candidats: P07550 (receptor beta-2 adrenèrgic, cobertura de l’entitat 64, 3%), D9IEF7/P00720 (lisozima T4/endolisina, domini de fusió). La interpretació principal correspon a ADRB2; els dominis de fusió s’han de discutir per separat.

| Camp | Valor |
|---|---|
| UniProt / gen | [P07550](https://www.uniprot.org/uniprotkb/P07550); gen: ADRB2 |
| EC / BRENDA | no assignat |
| Estructura principal | [6PS2](https://www.rcsb.org/structure/6PS2) entitat 1; difracció de raigs X, 2.4 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | receptor GPCR de set hèlixs transmembrana amb lisozima T4 fusionada per estabilitzar la cristal·lització |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 23, regions no assignades: 1; exemples: làmina β 267-272, 278-281, 284-287; hèlix 53-85; hèlix 86-89; hèlix 90-110; hèlix 110-120; hèlix 125-160; hèlix 170-195; hèlix 202-211 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 485-490 (HHHHHH); flag 1-7 (DYKDDDD); cisteïnes a [85, 114, 124, 133, 192, 198, 199, 401, 421, 463, 477] |

Funcionalment, el component ADRB2 és un receptor acoblat a proteïna G per catecolamines; la lisozima T4 és una fusió d’estabilització/cristal·lització i s’ha de tractar com a domini auxiliar. La interpretació funcional s’ha de centrar en el receptor i en el lligand/estat conformacional. La seqüència combina ADRB2, una fusió lisozima T4/endolisina i etiquetes terminals. 6PS2 cobreix tota la seqüència assignada; 5D5A és una estructura compatible per a l’anàlisi del receptor.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | ADRB2-T4L |
| Estructura de referència | 6PS2 / 5D5A |
| Longitud | 490 aa |
| Trets rellevants | FLAG 1-7; His 485-490; fusió GPCR-lisozim |


## Arquitectura molecular

ADRB2 presenta el paquet de set hèlixs transmembrana propi dels GPCR. La fusió de lisozim es manté separada de la part funcional del receptor, perquè estabilitza el sistema però no participa en la senyalització adrenèrgica.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura1.png' | relative_url }}" alt="Figura 1 del grup H" loading="lazy"> <figcaption><strong>Figura 1.</strong> ADRB2-T4L: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura2.png' | relative_url }}" alt="Figura 2 del grup H" loading="lazy"> <figcaption><strong>Figura 2.</strong> ADRB2-T4L: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

ADRB2 reconeix lligands adrenèrgics i transmet el senyal cap a proteïnes G. Residus com Asp113, Ser203/Ser207 i Asn312 defineixen interaccions importants de la butxaca de lligand.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/adrb2_6ps2.jpeg' | relative_url }}" alt="Receptor beta-2 adrenèrgic amb fusió lisozima T4; model estructural de referència per separar receptor i fusió. " loading="lazy"> <figcaption><strong>Figura.</strong> Receptor beta-2 adrenèrgic amb fusió lisozima T4; model estructural de referència per separar receptor i fusió. Font: <a href="https://www.rcsb.org/structure/6PS2">RCSB PDB 6PS2</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Cherezov et al., 2007).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura3_a.png' | relative_url }}" alt="Figura 3 del grup H" loading="lazy"> <figcaption><strong>Figura 3.</strong> ADRB2-T4L: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura3_b.png' | relative_url }}" alt="Figura 4 del grup H" loading="lazy"> <figcaption><strong>Figura 4.</strong> ADRB2-T4L: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

ADRB2 presenta regulació per palmitoilació i fosforilació en la proteïna humana, especialment en residus de la cua intracel·lular i en cisteïnes properes a la membrana. En aquesta estructura cal remapar aquestes posicions perquè la seqüència inclou una fusió amb lisozima T4 i etiquetes terminals; les modificacions de la lisozima no formen part de la biologia d’ADRB2.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció es basa en distingir hèlixs transmembrana, residus de la butxaca, fusió de cristal·lització i etiquetes. Aquesta separació és imprescindible per interpretar variants i lligands.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura4_a.png' | relative_url }}" alt="Figura 5 del grup H" loading="lazy"> <figcaption><strong>Figura 5.</strong> ADRB2-T4L: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura4_b.png' | relative_url }}" alt="Figura 6 del grup H" loading="lazy"> <figcaption><strong>Figura 6.</strong> ADRB2-T4L: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura5_a.png' | relative_url }}" alt="Figura 7 del grup H" loading="lazy"> <figcaption><strong>Figura 7.</strong> ADRB2-T4L: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura5_b.png' | relative_url }}" alt="Figura 8 del grup H" loading="lazy"> <figcaption><strong>Figura 8.</strong> ADRB2-T4L: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura6_a.png' | relative_url }}" alt="Figura 9 del grup H" loading="lazy"> <figcaption><strong>Figura 9.</strong> ADRB2-T4L: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura6_b.png' | relative_url }}" alt="Figura 10 del grup H" loading="lazy"> <figcaption><strong>Figura 10.</strong> ADRB2-T4L: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Cherezov, V. et al. (2007). *High-Resolution Crystal Structure of an Engineered Human β2-Adrenergic G Protein-Coupled Receptor*. *Science*. [doi: 10.1126/science.1150577](https://doi.org/10.1126/science.1150577). Per a l’estat actiu estabilitzat per nanocòs: Rasmussen, S. G. F. et al. (2011), [doi: 10.1038/nature10361](https://doi.org/10.1038/nature10361).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/Pràctica1_QiEP_GrupH.md' | relative_url }}">pàgina original del grup H</a>.
