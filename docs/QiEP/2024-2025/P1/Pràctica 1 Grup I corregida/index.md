---
title: "Glicosiltransferasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-I-corregida/
author: "Marina Garcia Baco i Malena Ortolà Bilbao"
---

<p class="qiep-group-label"><strong>Grup I</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>

Autors del treball original: **Marina Garcia Baco i Malena Ortolà Bilbao**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

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
| Lligands, cofactors o centre actiu | donador glicosídic, acceptor i sovint metall divalent en GT-A; cal separar mecanisme inversor o retenidor |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les glicosiltransferases formen enllaços glicosídics transferint sucres activats cap a acceptors específics. <head>
<meta charset="utf-8">
<title>{{ page. title }}</title> <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/PDB-component-library/css/pdbe-molstar-1.2.1.css"> </head> <h1> Anàlisi de les relacions seqüència-estructura-funció de la proteïna glicosiltransferasa a Nicotiana tabacum (PDB: 8CHD)</h1> - [Estructura secundària](#estructura-secundària)
- [Estructura supersecundària](#estructura-supersecundària)
- [Plegament](#plegament) El codi [PDB: 8CHD](https://www.rcsb.org/structure/8CHD) correspon a l’estructura de la proteïna glicosiltransferasa, codi [UniProt: A0A1S4A9U5](https://www.uniprot.org/UniProt/A0A1S4A9U5), amb una gran conservació de seqüència pel que es pot veure a l'[alineament](https://www.rcsb.org/UniProt/A0A1S4A9U5) que el propi PDB dona. Pots visualitzar la proteïna en aquesta finestra proveïda per [PDB*](https://www.rcsb.org/3d-view/8chd):

### Estructura secundària

L'estructura presenta tant hèlix α com làmines β
La següent figura mostra la seqüència de la proteïna i les regions amb hèlix α (blau fluix) i làmines β (blau fosc) |! [](/8CHD_2nd.png)|
|: --: | |! [](/estructura_8CHD.png)|
|: --: |
|Seqüència de la proteïna mostra tota l’estructura amb les diferents estructures secundàries|

### Estructura supersecundària

Malauradament el fitxer PBD no conté massa informació sobre l’estructura secundària i no en podem treure massa profit, en aquest cas.

### Plegament

La glicosiltransferasa amb codi PDB: 8CHD presenta un plegament característic de la superfamília de les nucleotidil-difosfat-sugar transferases. Aquest tipus de plegament es caracteritza per un nucli central format per una làmina β de set filaments, flanquejada per hèlixs α en ambdós costats, formant una estructura $\alpha/\beta$.
Aquestes característiques són comunes en enzims que catalitzen la transferència de grups glicosil de nucleòtids-sugar activats a acceptors específics, com sucres, lípids o proteïnes. Pel que fa a l’estructura quaternària, la majoria de les glicosiltransferases funcionen com a monòmers. No obstant això, algunes poden formar dímeres o altres oligòmers per a la seva activitat biològica. En el cas específic de la proteïna 8CHD, les dades cristal·logràfiques suggereixen que aquesta proteïna actua com a monòmer.

### Funció
Podem començar per [cercar a PFAM el codi UniProt de la proteïna](https://www.ebi.ac.uk/interpro/protein/UniProt/A0A1S4A9U5/entry/pfam/#table). S’observa que es tracta d’una proteïna amb un sol domini ben caracteritzat: |! [](. /pfam_domini.png)|
|: --: |
|Taula resum dels dominis PFAM per al PDB: 8CHD, UniProt: A0A1S4A9U5| Podem aleshores explorar l'entrada per a aquest domini específic: PFAM: PF00201, i observem que es tracta d’una UGT. El domini està altament distribuït, trobat en més de [1065 arquitectures de domini](https://www.ebi.ac.uk/interpro/entry/pfam/PF00201/domain_architecture/) |! [](/dominis_diferents.png)|
|: --: |
|Taula resum dels dominis PFAM per al PDB: 8CHD, UniProt: A0A1S4A9U5
| Un cop explorem aquest domini, ens adonem que es tracta d’una UDP-glycosyl transferase. Aquesta familia d’enzims catalitza la transferència d’una molècula de glucosa (o altre sucres) des de uridine diphosphate-sugars (UDP-sucres) fins a molècules acceptores, generalment un compost hidroxilat, com un fenol, alcohol, amina o àcid carboxílic. ​​Aquest procés es coneix com a glucosilació o glicosiltransferència.
Influència processos metabòlics important, com la modificació de proteïnes i la biosíntesi de metabòlits secundaris. |! [](/reaccio.png)|
|: --: |
| |! [](/centre_actiu.png)|
|: --: |
|Centre actiu de la proteïna PDB: 8CHD. En aquest cas no es veu definit un ió que destaqui sobre la resta com a centre actiu, però els residus que fan que l’enzim pugui fer la seva funció són els non-standresidues que es troben a diferents punts de l’estructura de l’enzim|

## Arquitectura molecular

Les glicosiltransferases organitzen un donador nucleòtid-sucre i un acceptor en una escletxa catalítica. La geometria entre dominis explica especificitat i estereoquímica.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/8CHD_2nd.png' | relative_url }}" alt="Figura 1 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Glicosiltransferasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/centre_actiu.png' | relative_url }}" alt="Figura 2 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Glicosiltransferasa: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

La reacció forma un nou enllaç glicosídic. La identitat del nucleòtid-sucre, el grup acceptor i els residus que estabilitzen l’estat de transició determinen el producte.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/glycosyltransferase.png' | relative_url }}" alt="Mecanismes generals de glicosiltransferases amb retenció o inversió de configuració. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Mecanismes generals de glicosiltransferases amb retenció o inversió de configuració. Font: <a href="https://commons.wikimedia.org/wiki/File:Glycosyltransferase_mechanisms.png">Wikimedia Commons, Glycosyltransferase mechanisms</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Lairson et al., 2008).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/dominis_diferents.png' | relative_url }}" alt="Figura 3 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Glicosiltransferasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/estructura_8CHD.png' | relative_url }}" alt="Figura 4 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Glicosiltransferasa: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

Les PTM són secundàries respecte a la identitat de família GT i als residus que coordinen donador/acceptor. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/pfam_domini.png' | relative_url }}" alt="Figura 5 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Glicosiltransferasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/reaccio.png' | relative_url }}" alt="Figura 6 del grup I 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Glicosiltransferasa: interfície o estat oligomèric. </figcaption>
</figure>

## Referències

- Lairson, L. L. et al. (2008). *Glycosyltransferases: Structures, Functions, and Mechanisms*. *Annual Review of Biochemistry*. [doi: 10.1146/annurev.biochem.76.061005.092322](https://doi.org/10.1146/annurev.biochem.76.061005.092322).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup I/practica1qep.md' | relative_url }}">pàgina original del grup I</a>.
