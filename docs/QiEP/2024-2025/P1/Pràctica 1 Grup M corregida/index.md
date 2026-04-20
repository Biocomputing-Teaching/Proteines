---
title: "Lipasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-M-corregida/
author: "Aina Altimiras, Pere Lorente, Arturo Martinez"
---

<p class="qiep-group-label"><strong>Grup M</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>sp|P41365|LIPB_PSEA2 Lipase B OS=Pseudozyma antarctica OX=84753 PE=1 SV=1 | 2024-2025 | seqüència problema
MKLLSLTGVAGVLATCVAATPLVKRLPSGSDPAFSQPKSVLDAGLTCQGAspSSVSKPILLVPGTGTTGPQSFDSNWIPL
STQLGYTPCWISPPPFMLNDTQVNTEYMVNAITALYAGSGNNKLPVLTWSQGGLVAQWGLTFFPSIRSKVDRLMAFAPDY
KGTVLAGPLDALAVSAPSVWQQTTGSALTTALRNAGGLTQIVPTTNLYSATDEIVQPQVSNSPLDSSYLFNGKNVQAQAV
CGPLFVIDHAGSLTSQFSYVVGRSALRSTTGQARSADYGITDCNPLPANDLTPEQKVAAAALLAPAAAAIVAGPKQNCEP
DLMPYARPFAVGKRTCSGIVTP
```

Seqüència recuperada de UniProt P41365. Longitud: 342 aminoàcids. Cisteïnes: 16, 47, 89, 241, 283, 318, 336.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a lipasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | segons lipasa analitzada; gen: lipase/triacylglycerol lipase |
| EC / BRENDA | 3.1.1.3 |
| Estructura principal | estructura del lliurament o homòleg experimental |
| Plegament o família | α/β hidrolasa amb triada Ser-His-Asp/Glu i sovint tapadora mòbil de la interfície |
| Estructura secundària i lectura ChimeraX | α/β hidrolasa amb tapa mòbil; cal marcar triada catalítica, oxyanion hole i estat obert/tancat de la interfície lipídica |
| Lligands, cofactors o lloc funcional | substrat lipídic o inhibidor covalent; la catàlisi passa per acil-enzim i hidròlisi posterior |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les lipases hidrolitzen èsters lipídics i connecten catàlisi de serina amb reconeixement d’interfícies hidrofòbiques.

## Arquitectura molecular

Les lipases presenten un nucli d’hidrolasa i superfícies hidrofòbiques adequades per treballar en interfícies oli-aigua. En molts casos, una tapa regula l’accés al centre actiu.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura1_a.png' | relative_url }}" alt="Figura 1 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Lipasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura1_b.png' | relative_url }}" alt="Figura 2 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Lipasa: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

El mecanisme usa una serina nucleòfila, intermedi acil-enzim i hidròlisi final. L’activació interfacial connecta moviment estructural i accés del substrat lipídic.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/lipase_mechanism.jpg' | relative_url }}" alt="Mecanisme catalític d’una lipasa amb serina nucleòfila i intermedi acil-enzim. " loading="lazy"> <figcaption><strong>Figura.</strong> Mecanisme catalític d’una lipasa amb serina nucleòfila i intermedi acil-enzim. Font: <a href="https://commons.wikimedia.org/wiki/File:Mecanisme_catal%C3%ADtic_de_la_lipasa.jpg">Wikimedia Commons, Mecanisme catalític de la lipasa</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Brzozowski et al., 1991).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura2.png' | relative_url }}" alt="Figura 3 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Lipasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura3_a.png' | relative_url }}" alt="Figura 4 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Lipasa: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

En lipases secretades poden aparèixer ponts disulfur o glicosilació segons organisme; cal comprovar-los sobre la seqüència concreta. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura3_b.png' | relative_url }}" alt="Figura 5 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Lipasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura3_c.png' | relative_url }}" alt="Figura 6 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Lipasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura3_d.png' | relative_url }}" alt="Figura 7 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Lipasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura4.png' | relative_url }}" alt="Figura 8 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Lipasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura5.png' | relative_url }}" alt="Figura 9 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Lipasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura6_a.png' | relative_url }}" alt="Figura 10 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Lipasa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Brzozowski, A. M. et al. (1991). *A model for interfacial activation in lipases from the structure of a fungal lipase-inhibitor complex*. *Nature*. [doi: 10.1038/351491a0](https://doi.org/10.1038/351491a0).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/Pràctica1_definitiva2_GrupM.md' | relative_url }}">pàgina original del grup M</a>.
