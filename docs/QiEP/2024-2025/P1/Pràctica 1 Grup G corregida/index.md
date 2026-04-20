---
title: "Translocasa SecA"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-G-corregida/
author: "Oriol Monte & Ainhoa González"
---

<p class="qiep-group-label"><strong>Grup G</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>sp|P10408|SECA_ECOLI Protein translocase subunit SecA OS=Escherichia coli (strain K12) OX=83333 GN=secA PE=1 SV=2 | 2024-2025 | seqüència problema
MLIKLLTKVFGSRNDRTLRRMRKVVNIINAMEPEMEKLSDEELKGKTAEFRARLEKGEVLENLIPEAFAVVREASKRVFG
MRHFDVQLLGGMVLNERCIAEMRTGEGKTLTATLPAYLNALTGKGVHVVTVNDYLAQRDAENNRPLFEFLGLTVGINLPG
MPAPAKREAYAADITYGTNNEYGFDYLRDNMAFSPEERVQRKLHYALVDEVDSILIDEARTPLIISGPAEDSSEMYKRVN
KIIPHLIRQEKEDSETFQGEGHFSVDEKSRQVNLTERGLVLIEELLVKEGIMDEGESLYSPANIMLMHHVTAALRAHALF
TRDVDYIVKDGEVIIVDEHTGRTMQGRRWSDGLHQAVEAKEGVQIQNENQTLASITFQNYFRLYEKLAGMTGTADTEAFE
FSSIYKLDTVVVPTNRPMIRKDLPDLVYMTEAEKIQAIIEDIKERTAKGQPVLVGTISIEKSELVSNELTKAGIKHNVLN
AKFHANEAAIVAQAGYPAAVTIATNMAGRGTDIVLGGSWQAEVAALENPTAEQIEKIKADWQVRHDAVLEAGGLHIIGTE
RHESRRIDNQLRGRSGRQGDAGSSRFYLSMEDALMRIFASDRVSGMMRKLGMKPGEAIEHPWVTKAIANAQRKVESRNFD
IRKQLLEYDDVANDQRRAIYSQRNELLDVSDVSETINSIREDVFKATIDAYIPPQSLEEMWDIPGLQERLKNDFDLDLPI
AEWLDKEPELHEETLRERILAQSIEVYQRKEEVVGAEMMRHFEKGVMLQTLDSLWKEHLAAMDYLRQGIHLRGYAQKDPK
QEYKRESFSMFAAMLESLKYEVISTLSKVQVRMPEEVEELEQQRRMEAERLAQMQQLSHQDDDSAAAAALAAQTGERKVG
RNDPCPCGSGKKYKQCHGRLQ
```

Seqüència recuperada de UniProt P10408. Longitud: 901 aminoàcids. Cisteïnes: 98, 885, 887, 896.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a traslocasa SecA. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P10408; gen: secA |
| EC / BRENDA | 7.4.2.8 |
| Estructura principal | 2FSF |
| Plegament o família | ATPasa motora amb dominis NBD/HSD/HWD/PPXD que canvien de disposició durant el cicle de translocació |
| Estructura secundària i lectura ChimeraX | motor SecA amb dominis NBD i dominis de moviment; cal relacionar estat nucleotídic, solc de preproteïna i canvis conformacionals |
| Lligands, cofactors o lloc funcional | ATP/ADP i interacció amb preproteïna/SecYEG; no és un lloc catalític d’un enzim soluble convencional sinó un motor ATP-dependent |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. SecA és una ATPasa de translocació que acobla hidròlisi d’ATP i transport de proteïnes a través del sistema Sec.

## Arquitectura molecular

SecA combina dominis d’unió a ATP amb superfícies que contacten el translocó SecYEG i la proteïna client. L’estructura s’entén com una ATPasa motora modular.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_1.png' | relative_url }}" alt="Figura 1 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Translocasa SecA: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_10.png' | relative_url }}" alt="Figura 2 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Translocasa SecA: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La hidròlisi d’ATP impulsa canvis conformacionals que afavoreixen el pas de segments polipeptídics pel canal de translocació.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/secu_2fsf.jpeg' | relative_url }}" alt="Estructura de SecA com a ATPasa modular de translocació proteica. " loading="lazy"> <figcaption><strong>Figura.</strong> Estructura de SecA com a ATPasa modular de translocació proteica. Font: <a href="https://www.rcsb.org/structure/2FSF">RCSB PDB 2FSF</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Hunt et al., 2002).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_11.png' | relative_url }}" alt="Figura 3 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Translocasa SecA: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_12.png' | relative_url }}" alt="Figura 4 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Translocasa SecA: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

La lectura funcional se centra en variants de dominis i estat nucleotídic; les modificacions posttraduccionals no són el component principal de SecA bacteriana. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_13.png' | relative_url }}" alt="Figura 5 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Translocasa SecA: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_14.png' | relative_url }}" alt="Figura 6 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Translocasa SecA: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_2.png' | relative_url }}" alt="Figura 7 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Translocasa SecA: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_3.png' | relative_url }}" alt="Figura 8 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Translocasa SecA: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_4.png' | relative_url }}" alt="Figura 9 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Translocasa SecA: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_5.png' | relative_url }}" alt="Figura 10 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Translocasa SecA: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Hunt, J. F. et al. (2002). *Nucleotide control of interdomain interactions in the conformational reaction cycle of SecA*. *Science*. [doi: 10.1126/science.1074424](https://doi.org/10.1126/science.1074424). També és útil la referència estructural de SecA dimèrica: Papanikolau, Y. et al. (2007), [doi: 10.1016/j.jmb.2006.12.049](https://doi.org/10.1016/j.jmb.2006.12.049).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Pràctica 1. Grup G.md' | relative_url }}">pàgina original del grup G</a>.
