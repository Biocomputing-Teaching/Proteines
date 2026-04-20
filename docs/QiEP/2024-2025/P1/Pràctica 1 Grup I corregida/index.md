---
title: "Glicosiltransferasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-I-corregida/
author: "Marina Garcia Baco i Malena Ortolà Bilbao"
---

<p class="qiep-group-label"><strong>Grup I</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>8CHD | 2024-2025 | seqüència problema
MEATQRDGGAQSPTPHVVMLPSPGMGHLIPLLEFAKRLLFLHRFTVTFAIPSGDPPSKAQISILSSLPSGIDYVFLPPVN
FHDLPKDTKAGVFIVLAVARSLPSFRDLFKSMVANTNLVALVVDQFGTDAFDVAREFNVSPYIFFPCAAMTLSFLLRLPE
FDETVAGEYRELPEPIRLSGCAPIPGKDLAGPFHDRENDAYKLFLHNAKRYALADGIFLNSFPELEPGAIKALLEEESRK
PLVHPVGPLVQIDSSGSEEGAECLKWLEEQPHGSVLFVSFGSGGALSSDQINELALGLEMSGHRFIWVVRSPSDEAANAS
FFSVHSQNDPLSFLPEGFLEGTRGRSVVVPSWAPQAQILSHSSTGGFLSHCGWNSTLESVVYGVPLIAWPLYAEQKMNAI
LLTEDIKAALRPKINEESGLIEKEEIAEVVKELFEGEDGKRVRAKMEELKDAAVRVLGEDGSSSTLSEVVQKWKRKISG
```

Seqüència recuperada del lliurament original (practica1qep.md). Longitud: 479 aminoàcids. Cisteïnes: 147, 181, 263, 371.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a glicosiltransferasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | no fixat a la pàgina original; gen: glicosiltransferasa segons família |
| EC / BRENDA | segons substrat i família CAZy/GT |
| Estructura principal | 8CHD |
| Plegament o família | domini GT-A o GT-B segons la família; reconeixement de sucre nucleòtid i acceptor |
| Estructura secundària i lectura ChimeraX | domini de glicosiltransferasa amb cavitats per donador i acceptor; cal distingir l’arquitectura GT i els residus de coordinació del substrat |
| Lligands, cofactors o lloc funcional | donador glicosídic, acceptor i sovint metall divalent en GT-A; cal separar mecanisme inversor o retenidor |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les glicosiltransferases formen enllaços glicosídics transferint sucres activats cap a acceptors específics. El codi [PDB: 8CHD](https://www.rcsb.org/structure/8CHD) permet situar el domini catalític i les cavitats de reconeixement del donador i de l’acceptor.

## Arquitectura molecular

Les glicosiltransferases organitzen un donador nucleòtid-sucre i un acceptor en una escletxa catalítica. La geometria entre dominis explica especificitat i estereoquímica.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/8CHD_2nd.png' | relative_url }}" alt="Figura 1 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Glicosiltransferasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/centre_actiu.png' | relative_url }}" alt="Figura 2 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Glicosiltransferasa: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La reacció forma un nou enllaç glicosídic. La identitat del nucleòtid-sucre, el grup acceptor i els residus que estabilitzen l’estat de transició determinen el producte.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/glycosyltransferase.png' | relative_url }}" alt="Mecanismes generals de glicosiltransferases amb retenció o inversió de configuració. " loading="lazy"> <figcaption><strong>Figura.</strong> Mecanismes generals de glicosiltransferases amb retenció o inversió de configuració. Font: <a href="https://commons.wikimedia.org/wiki/File:Glycosyltransferase_mechanisms.png">Wikimedia Commons, Glycosyltransferase mechanisms</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Lairson et al., 2008).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/dominis_diferents.png' | relative_url }}" alt="Figura 3 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Glicosiltransferasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/estructura_8CHD.png' | relative_url }}" alt="Figura 4 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Glicosiltransferasa: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

Les modificacions posttraduccionals són secundàries respecte a la identitat de família GT i als residus que coordinen donador/acceptor. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/pfam_domini.png' | relative_url }}" alt="Figura 5 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Glicosiltransferasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/reaccio.png' | relative_url }}" alt="Figura 6 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Glicosiltransferasa: interfície o estat oligomèric. </figcaption>
</figure>

## Referències

- Lairson, L. L. et al. (2008). *Glycosyltransferases: Structures, Functions, and Mechanisms*. *Annual Review of Biochemistry*. [doi: 10.1146/annurev.biochem.76.061005.092322](https://doi.org/10.1146/annurev.biochem.76.061005.092322).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/practica1qep.md' | relative_url }}">pàgina original del grup I</a>.
