---
title: "DNA ligasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-F-corregida/
author: "Marc Conde, Marc Sánchez, Adrià Segura"
---

<p class="qiep-group-label"><strong>Grup F</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>sp|P18858|DNLI1_HUMAN DNA ligase 1 OS=Homo sapiens OX=9606 GN=LIG1 PE=1 SV=1 | 2024-2025 | seqüència problema
MQRSIMSFFHPKKEGKAKKPEKEASNSSRETEPPPKAALKEWNGVVSESDSPVKRPGRKAARVLGSEGEEEDEALSPAKG
QKPALDCSQVSPPRPATSPENNASLSDTSPMDSSPSGIPKRRTARKQLPKRTIQEVLEEQSEDEDREAKRKKEEEEEETP
KESLTEAEVATEKEGEDGDQPTTPPKPLKTSKAETPTESVSEPEVATKQELQEEEEQTKPPRRAPKTLSSFFTPRKPAVK
KEVKEEEPGAPGKEGAAEGPLDPSGYNPAKNNYHPVEDACWKPGQKVPYLAVARTFEKIEEVSARLRMVETLSNLLRSVV
ALSPPDLLPVLYLSLNHLGPPQQGLELGVGDGVLLKAVAQATGRQLESVRAEAAEKGDVGLVAENSRSTQRLMLPPPPLT
ASGVFSKFRDIARLTGSASTAKKIDIIKGLFVACRHSEARFIARSLSGRLRLGLAEQSVLAALSQAVSLTPPGQEFPPAM
VDAGKGKTAEARKTWLEEQGMILKQTFCEVPDLDRIIPVLLEHGLERLPEHCKLSPGIPLKPMLAHPTRGISEVLKRFEE
AAFTCEYKYDGQRAQIHALEGGEVKIFSRNQEDNTGKYPDIISRIPKIKLPSVTSFILDTEAVAWDREKKQIQPFQVLTT
RKRKEVDASEIQVQVCLYAFDLIYLNGESLVREPLSRRRQLLRENFVETEGEFVFATSLDTKDIEQIAEFLEQSVKDSCE
GLMVKTLDVDATYEIAKRSHNWLKLKKDYLDGVGDTLDLVVIGAYLGRGKRAGRYGGFLLASYDEDSEELQAICKLGTGF
SDEELEEHHQSLKALVLPSPRPYVRIDGAVIPDHWLDPSAVWEVKCADLSLSPIYPAARGLVDSDKGISLRFPRFIRVRE
DKQPEQATTSAQVACLYRKQSQIQNQQGEDSGSDPEDTY
```

Seqüència recuperada de UniProt P18858. Longitud: 919 aminoàcids. Cisteïnes: 87, 280, 434, 508, 532, 565, 656, 719, 794, 846, 895.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a DNA ligasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P18858/P12004 segons isoforma analitzada; gen: LIG1 o lligasa relacionada |
| EC / BRENDA | 6.5.1.1 |
| Estructura principal | 7QNZ |
| Plegament o família | enzim modular que envolta DNA escindit; dominis d’unió a DNA i domini adenilació/OB-fold |
| Estructura secundària i lectura ChimeraX | enzim modular que envolta DNA; cal descriure dominis d’unió a DNA, domini d’adenilació i contactes amb el DNA escindit |
| Lligands, cofactors o lloc funcional | DNA amb osca, ATP/AMP o intermedis adenilats; el mecanisme passa per adenilació de Lys, transferència a DNA i segellat fosfodièster |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La DNA ligasa segella trencaments del DNA mitjançant una química d’adenilació i tancament d’enllaços fosfodièster.

## Arquitectura molecular

La DNA ligasa és una màquina modular que envolta el DNA i alinea extrems trencats. El tancament de dominis és tan important com la química del centre actiu.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_1.jpg' | relative_url }}" alt="Figura 1 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> DNA ligasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_10.jpg' | relative_url }}" alt="Figura 2 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> DNA ligasa: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

El mecanisme té tres etapes: adenilació de l’enzim, transferència d’AMP al fosfat 5’ del DNA i atac del 3’-OH per formar l’enllaç fosfodièster.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/dna_ligase_nick.jpg' | relative_url }}" alt="Reparació d’un tall al DNA per DNA ligasa: alineament d’extrems i formació de l’enllaç fosfodièster. " loading="lazy"> <figcaption><strong>Figura.</strong> Reparació d’un tall al DNA per DNA ligasa: alineament d’extrems i formació de l’enllaç fosfodièster. Font: <a href="https://commons.wikimedia.org/wiki/File:Ligase_nick_repair_mecanism.jpg">Wikimedia Commons, Ligase tall monocatenari repair mechanism</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Pascal et al., 2004).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_11.jpg' | relative_url }}" alt="Figura 3 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> DNA ligasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_12.jpg' | relative_url }}" alt="Figura 4 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> DNA ligasa: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

En lligases eucariotes poden ser rellevants fosforilacions o regulació de cicle cel·lular; només s’han de transferir si corresponen a la isoforma exacta. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_13.jpg' | relative_url }}" alt="Figura 5 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> DNA ligasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_14.jpg' | relative_url }}" alt="Figura 6 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> DNA ligasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_15.jpg' | relative_url }}" alt="Figura 7 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> DNA ligasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_16.jpg' | relative_url }}" alt="Figura 8 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> DNA ligasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_17.jpg' | relative_url }}" alt="Figura 9 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> DNA ligasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_18.jpg' | relative_url }}" alt="Figura 10 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> DNA ligasa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Pascal, J. M. et al. (2004). *Human DNA ligase I completely encircles and partially unwinds tall monocatenaried DNA*. *Nature*. [doi: 10.1038/nature03082](https://doi.org/10.1038/nature03082).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/Practica Markdown.md' | relative_url }}">pàgina original del grup F</a>.
