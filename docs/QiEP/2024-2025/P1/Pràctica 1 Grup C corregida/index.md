---
title: "Cutinasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-C-corregida/
author: "Marta Amaro, Núria Gonzalez i Fatima Saculles"
---

<p class="qiep-group-label"><strong>Grup C</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>

Autors del treball original: **Marta Amaro, Núria Gonzalez i Fatima Saculles**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>7YM9_1|Chains A, B|Poly(ethylene terephthalate) hydrolase|Cryptosporangium aurantiacum (134849) | 2024-2025 | seqüència problema
MAADNPYQRGPDPTNASIEAATGPFAVGTQPIVGASGFGGGQIYYPTDTSQTYGAVVIVPGFISVWAQLNWLGPRLASQG
FVVIGIETSVITDLPDPRGDQALAALDWATTRSPVASRIDRTRLAAAGWSMGGGGLRRAALQRPSLKAIVGMAPWNGERN
WSAVTVPTLFFGGSSDAVAspNDHAKPFYNSITRAEKDYIELRNADHFFPTSANTTMAKYFISWLKRWVDNDTRYTQFLC
PGPSTGLFAPVSASMNTCPFLEHHHHHH
```

Seqüència recuperada de RCSB PDB 7YM9. Longitud: 268 aminoàcids. Cisteïnes: 240, 258.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a cutinasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | no fixat a la pàgina original; gen: cutinase/cut1 segons organisme |
| EC / BRENDA | 3.1.1.74 |
| Estructura principal | 7YM9/7YME segons comparació estructural |
| Plegament o família | plegament α/β hidrolasa amb triada catalítica Ser-His-Asp/Glu accessible al solvent |
| Estructura secundària i lectura ChimeraX | plegament α/β hidrolasa; cal marcar la triada Ser-His-Asp/Glu, els llaços d’accés i els ponts d’hidrogen que estabilitzen el nucli |
| Lligands, cofactors o centre actiu | centre catalític de serina; el substrat és un èster de cutina o un èster lipídic model |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La cutinasa hidrolitza enllaços èster en substrats com la cutina i és un model útil d’hidrolasa amb centre actiu accessible.

### Sobre la proteïna:
**Seqüència**: MLSFLRSTGRPERRRASLPALLLFTAALVASGLTAAPAAQAADNPYQRGPDPTNASIEAATGPFAVGTQPIVGASGFGGGQIYYPTDTSQTYGAVVIVPGFISVWAQLNWLGPRLASQGFVVIGIETSVITDLPDPRGDQALAALDWATTRSPVASRIDRTRLAAAGWSMGGGGLRRAALQRPSLKAIVGMAPWNGERNWSAVTVPTLFFGGSSDAVAspNDHAKPFYNSITRAEKDYIELRNADHFFPTSANTTMAKYFISWLKRWVDNDTRYTQFLCPGPSTGLFAPVSASMNTCPF - **Codi UniProt**: A0A1M7II12
- **Nom del gen (ORF name)**: SAMN05443668_101498
- **Nom proteïna**: Cutinasa → És una hidrolasa.
- **Classificació EC. X. X. X. X**: EC. 3.1.1.74
- **Estructura (codi PDB)**: 7YM9. → De les dues opcions, aquesta estructura és la que presenta una resolució més petita (1.34 Å vs 1.5 Å (estructura 7YME)).
- **Funció**: enzim que cataliza la hidròlisis de la quitina, un component estructural de la cutícula de les plantes.

### Estructures secundàries de la proteïna:
- Es poden veure dues cadenes (A i B).
- Les estructures secundàries que es poden observar són: làmines β (strand), hèlix α (hèlix) i llaços.
- També s’hi observen residus no standards MLI.

#### Hèlix α:

#### Làmines β:

#### llaços:

#### Residus no estàndard:

Trobem 1780 ponts d’hidrogen.

#### Motius d'estructura supersecundària [3]:
- **forquilla β-β**:
- **β-α-β**:
- **α-α**:

#### L'estructura terciària de la proteïna:

SCOP no conté una classificació directa de la proteïna, possiblement perquè no ha estat inclosa en la base de dades estructuralment classificades. Per això, hem buscat estructures similars de proteïnes hidrolases (cutinases) com la seva. Hem trobat una proteïna cutinasa de Fusarium solani que té una estructura similar a la proteïna. De tots els dominis que dona, el que té el codi PDB: 1oxm, és el més semblant a la proteïna ja que també té dues cadenes (A i B) [4]. Tot i que són organismes molt diferents (bacteri i fong), les seves hidrolases tenen funcions similars, i per això hem realitzat una cerca d'estructures similars en SCOP utilitzant "cutinase" com a referència. El tipus de plegament és c. 69: α/β-Hydrolases. Aquest plegament forma part de la classe α/β, caracteritzada per una combinació d’hèlixs α i làmines β alternants. El codi del plegament és [53473]. **Jerarquia**: *Fig. 19*: Jerarquia del plegament de la Fusarium solani.

### Funció:

#### Centre actiu de la proteïna:

Centre actiu (marcat en verd): *Fig. 20*: Centre actiu de l’estructura 7YM9.

#### Residus rellevants:

El centre actiu de la cutinasa està format per un residu catalític de serina, d'histidina que actua com a base general i un residu d’àcid aspàrtic. Aquests tres aminoàcids formen la tríada catalítica. A l’estructura s'ha trobat també un residu no estàndard, l'ió malonate, que actua com a inhibidor.

#### Interaccions:

El centre actiu mostra una coloració vermella que s'interpreta que presenta càrrega negativa o lleugerament negativa, i es veu com es formen ponts d’hidrogen al centre actiu amb l'inhibidor malonate. *Fig. 21*: Interaccions al centre actiu de l’estructura 7YM9.

#### Mecanisme d'acció:

La cutinasa és un enzim que catalitza la hidròlisi de la cutina, un component estructural de la cutícula de les plantes, aquesta capa externa actua com a barrera protectora contra factors ambientals i patògens. A més, la cutinasa mostra propietats catalítiques d'esterases i lipases, ja que poden hidrolitzar èsters solubles i triacilglicerols. La cutinasa segueix un mecanisme catalític amb un patró típic de les serines hidrolases. Aquest mecanisme segueix les etapes següents:

1. **Formació del complex enzim-substrat**:
- El substrat entra al centre actiu de l’enzim.
- Els residus hidrofòbics estabilitzen la unió del substrat mitjançant interaccions van der Waals.
- La His forma un pont d’hidrogen amb la Ser, ajudant a polaritzar-la i activant-la com a nucleòfil.

2. **Atac nucleofílic i formació de l’intermediari tetraèdric**:
- La Ser desprotonada ataca el carboni carbonil del substrat, creant un intermediari tetraèdric. Aquest intermediari és altament inestable i es descompon ràpidament.

3. **Formació de l’intermediari acil-enzim i alliberament del primer producte**:
- La reorganització electrònica de l'intermediari tetraèdric provoca la ruptura de l'enllaç èster alliberant el grup alcohol del substrat.
- La resta acil·lada del substrat queda covalentment unit a la Ser, formant un intermediari acil-enzim.
- La His actua com a base, captant el protó de la Ser i estabilitzant l'intermediari.

4. **Atac de l’aigua i formació del segon intermediari tetraèdric**:
- Una molècula d’aigua entra al centre actiu i és activada per la His, que la desprotona per convertir-la en un nucleòfil.
- L'aigua ataca el carboni carbonílic de l'intermediari acil-enzim, formant un nou intermediari tetraèdric.

5. **Alliberament del segon producte i regeneració de l’enzim**:
- L'intermediari tetraèdric es descompon, alliberant l'àcid gras/producte carboxilat.
- La Ser és regenerada, i l’enzim torna al seu estat inicial. *Fig. 22*: Mecanisme catalític de las serín-proteasas [1]. Les cutinases són serina hidrolases que pertanyen al gran conjunt de les hidrolases α/β; aquests enzims presenten una triada catalítica composta per Serina, Histidina i Aspartat; en la qual la serina actua com a catalitzador en contacte amb el substrat.
A diferència de les lipases tradicionals, les cutinases no compten amb una coberta hidrològica sobre la serina del lloc actiu, sinó que presenta un lloc actiu ampli que permet interactuar amb substrats d'alt pes molecular, com ho és el cas de la cutina, i fins i tot amb polímers sintètics. [2] Residus funcionals per a la funció:
- Serina: Actua com a nucleòfil en la reacció d'hidròlisi.
- Histidina: Funciona com a base general, facilitant la transferència de protons.
- Aspartat: Estabilitza la càrrega positiva de la histidina durant la catàlisi. Variants de l’enzim cutinasa obtingudes mitjançant modificacions a la seva estructura:
- Modificacions per millorar l'estabilitat: Mutacions per formar ponts disulfur i així millorar-ne l'estabilitat.
- Augment a l'accessibilitat al substrat: s'eliminen les interaccions que bloquegen l'accés del polímer al lloc actiu.
Exemple: Variant L182M/Y209S a Fusarium solani, que millora la interacció amb el PET.
- Inducció d'enllaços salins: mutacions que enforteixen l’estructura de l’enzim en condicions alcalines.
Exemple: mutacions a Humicola insolens que en permeten l'ús en detergents.

## Arquitectura molecular

La cutinasa adopta un plegament d’hidrolasa α/β amb una serina catalítica accessible. La superfície oberta del centre actiu explica l’activitat sobre èsters de polímers com la cutina.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/1.1.PNG' | relative_url }}" alt="Figura 1 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Cutinasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/1.2.PNG' | relative_url }}" alt="Figura 2 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Cutinasa: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

El mecanisme implica atac nucleofílic de la serina, intermedi acil-enzim i hidròlisi per aigua. La tríada catalítica i el forat oxianió estabilitzen els estats de transició.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/cutinase_hydrolysis.png' | relative_url }}" alt="Mecanisme d’hidròlisi de la cutinasa, amb l’intermedi acil-enzim característic de les serina hidrolases. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Mecanisme d’hidròlisi de la cutinasa, amb l’intermedi acil-enzim característic de les serina hidrolases. Font: <a href="https://commons.wikimedia.org/wiki/File:Cutinase_Hydrolysis_Mechanism.png">Wikimedia Commons, Cutinase Hydrolysis Mechanism</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Martinez et al., 1992).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/1.3.png' | relative_url }}" alt="Figura 3 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Cutinasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/1.4.png' | relative_url }}" alt="Figura 4 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Cutinasa: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

La funció depèn sobretot de la triada catalítica i de la superfície d’accés al substrat; les PTM només s’han de discutir si provenen de la proteïna exacta o d’un homòleg alineat. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/2.1.PNG' | relative_url }}" alt="Figura 5 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Cutinasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/2.2.PNG' | relative_url }}" alt="Figura 6 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Cutinasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/2.3.PNG' | relative_url }}" alt="Figura 7 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Cutinasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/2.4.PNG' | relative_url }}" alt="Figura 8 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Cutinasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/3.1.PNG' | relative_url }}" alt="Figura 9 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Cutinasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/imatges/3.2.PNG' | relative_url }}" alt="Figura 10 del grup C 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Cutinasa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Martinez, C. et al. (1992). *Fusarium solani cutinase is a lipolytic enzyme with a catalytic serine accessible to solvent*. *Nature*. [doi: 10.1038/356615a0](https://doi.org/10.1038/356615a0).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup C/Pràctica 1 (JC C).md' | relative_url }}">pàgina original del grup C</a>.
