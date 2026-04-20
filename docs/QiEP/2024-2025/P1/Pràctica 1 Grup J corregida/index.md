---
title: "Epoxi hidrolasa microsomal 1"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-J-corregida/
author: "Baquero Matabacas Laia, Fernández Marín Lidia i Sastre Miralles Mariona"
---

<p class="qiep-group-label"><strong>Grup J</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>sp|P07099|HYEP_HUMAN Epoxide hydrolase 1 OS=Homo sapiens OX=9606 GN=EPHX1 PE=1 SV=1 | 2024-2025 | seqüència problema
MWLEILLTSVLGFAIYWFISRDKEETLPLEDGWWGPGTRSAAREDDSIRPFKVETSDEEIHDLHQRIDKFRFTPPLEDSC
FHYGFNSNYLKKVISYWRNEFDWKKQVEILNRYPHFKTKIEGLDIHFIHVKPPQLPAGHTPKPLLMVHGWPGSFYEFYKI
IPLLTDPKNHGLSDEHVFEVICPSIPGYGFSEASSKKGFNSVATARIFYKLMLRLGFQEFYIQGGDWGSLICTNMAQLVP
SHVKGLHLNMALVLSNFSTLTLLLGQRFGRFLGLTERDVELLYPVKEKVFYSLMRESGYMHIQCTKPDTVGSALNDSPVG
LAAYILEKFSTWTNTEFRYLEDGGLERKFSLDDLLTNVMLYWTTGTIISSQRFYKENLGQGWMTQKHERMKVYVPTGFSA
FPFELLHTPEKWVRFKYPKLISYSYMVRGGHFAAFEEPELLAQDIRKFLSVLERQ
```

Seqüència recuperada de UniProt P07099. Longitud: 455 aminoàcids. Cisteïnes: 80, 182, 232, 304.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a epoxi hidrolasa microsomal 1. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P07099; gen: EPHX1 |
| EC / BRENDA | 3.3.2.9 / 3.3.2.3 |
| Estructura principal | model experimental o AlphaFold segons cobertura |
| Plegament o família | α/β hidrolasa amb triada catalítica i butxaca per epòxids hidrofòbics |
| Estructura secundària i lectura ChimeraX | α/β hidrolasa de membrana; cal separar nucli catalític, cavitat hidrofòbica i regions d’ancoratge o contacte amb membrana |
| Lligands, cofactors o lloc funcional | epòxid al centre actiu; el mecanisme forma un intermedi covalent hidroxialquil-enzim i després l’hidrolitza |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. L’epoxi hidrolasa microsomal 1 transforma epòxids reactius en diols, una reacció important en metabolisme de xenobiòtics.

## Arquitectura molecular

EPHX1 és una hidrolasa associada al metabolisme de compostos lipòfils. La seva arquitectura combina un nucli catalític amb regions adequades per captar epòxids hidrofòbics.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/1.png' | relative_url }}" alt="Figura 1 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Epoxi hidrolasa microsomal 1: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/10.png' | relative_url }}" alt="Figura 2 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Epoxi hidrolasa microsomal 1: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

El mecanisme obre l’epòxid i produeix un diol. La xarxa catalítica activa aigua i estabilitza intermedis, reduint la reactivitat del substrat original.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/epoxide_hydrolase.png' | relative_url }}" alt="Mecanisme d’epoxi hidrolasa, amb obertura de l’epòxid i formació del diol. " loading="lazy"> <figcaption><strong>Figura.</strong> Mecanisme d’epoxi hidrolasa, amb obertura de l’epòxid i formació del diol. Font: <a href="https://commons.wikimedia.org/wiki/File:LEH_mechanism.png">Wikimedia Commons, LEH mechanism</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Morisseau et al., 2005).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/2.png' | relative_url }}" alt="Figura 3 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Epoxi hidrolasa microsomal 1: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/3.png' | relative_url }}" alt="Figura 4 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Epoxi hidrolasa microsomal 1: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

En EPHX1 humana interessen variants funcionals i context de membrana; les variants s’han de mapar a la seqüència exacta. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/4.png' | relative_url }}" alt="Figura 5 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Epoxi hidrolasa microsomal 1: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/5.png' | relative_url }}" alt="Figura 6 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Epoxi hidrolasa microsomal 1: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/6.png' | relative_url }}" alt="Figura 7 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Epoxi hidrolasa microsomal 1: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/7.png' | relative_url }}" alt="Figura 8 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Epoxi hidrolasa microsomal 1: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/8.png' | relative_url }}" alt="Figura 9 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Epoxi hidrolasa microsomal 1: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/9.png' | relative_url }}" alt="Figura 10 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Epoxi hidrolasa microsomal 1: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Morisseau, C.; Hammock, B. D. (2005). *Epoxide Hydrolases: Mechanisms, Inhibitor Designs, and Biological Roles*. *Annual Review of Pharmacology and Toxicology*. [doi: 10.1146/annurev.pharmtox.45.120403.095920](https://doi.org/10.1146/annurev.pharmtox.45.120403.095920).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/Pràctica 1. Anàlisi proteïna microsomal Epoxide Hydrolase 1 (EPHX1).md' | relative_url }}">pàgina original del grup J</a>.
