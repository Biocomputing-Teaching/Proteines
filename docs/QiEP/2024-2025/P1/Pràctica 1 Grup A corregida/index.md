---
title: "Flavin-containing monooxygenase 5"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-A-corregida/
author: "Ruben Casalí, Martí Corbella, Albert Garcia"
---

<p class="qiep-group-label"><strong>Grup A</strong> · Química i Enginyeria de Proteïnes 2024-2025</p> Autors del treball original: **Ruben Casalí, Martí Corbella, Albert Garcia**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P49326|FMO5_HUMAN Flavin-containing monooxygenase 5 OS=Homo sapiens OX=9606 GN=FMO5 PE=1 SV=2 | 2024-2025 | seqüència problema
MTKKRIAVIGGGVSGLSSIKCCVEEGLEPVCFERTDDIGGLWRFQENPEEGRASIYKSVIINTSKEMMCFSDYPIPDHYP
NFMHNAQVLEYFRMYAKEFDLLKYIRFKTTVCSVKKQPDFATSGQWEVVTESEGKKEMNVFDGVMVCTGHHTNAHLPLES
FPGIEKFKGQYFHSRDYKNPEGFTGKRVIIIGIGNSGGDLAVEISQTAKQVFLSTRRGAWILNRVGDYGYPADVLFSSRL
THFIWKICGQSLANKYLEKKINQRFDHEMFGLKPKHRALSQHPTLNDDLPNRIISGLVKVKGNVKEFTETAAIFEDGSRE
DDIDAVIFATGYSFDFPFLEDSVKVVKNKISLYKKVFPPNLERPTLAIIGLIQPLGAIMPISELQGRWATQVFKGLKTLP
SQSEMMAEISKAQEEIDKRYVESQRHTIQGDYIDTMEELADLVGVRPNLLSLAFTDPKLALHLLLGPCTPIHYRVQGPGK
WDGARKAILTTDDRIRKPLMTRVVERSSSMTSTMTIGKFMLALAFFAIIIAYF
```

Seqüència recuperada de UniProt P49326. Longitud: 533 aminoàcids. Cisteïnes: 21, 22, 31, 69, 112, 147, 248, 468.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a flavin-containing monooxygenase 5. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P49326; gen: FMO5 |
| EC / BRENDA | 1.14.13.8 |
| Estructura principal | 6SEK |
| Plegament o família | enzim flavoproteic amb FAD; plegament adaptat a transferència d’oxigen dependent de NADPH |
| Estructura secundària i lectura ChimeraX | domini flavoproteic mixt amb hèlixs i làmines que sostenen FAD i el lloc d’entrada de substrat; cal marcar ponts d’hidrogen interns i contactes al voltant del cofactor |
| Lligands, cofactors o centre actiu | FAD/NADPH o anàlegs segons l’estructura triada; cal distingir cofactor i substrat xenobiòtic |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. FMO5 catalitza oxidacions dependents de FAD i NADPH, amb interès en metabolisme oxidatiu i especificitat de substrat.

## Flavin-containing monooxygenase 5 (FMO)

### Introducció a la proteïna **Nom del gen:**

FMO5 **Codi UniProt: ** P49326· FMO5_HUMAN **Classificació de l’enzim:** EC1.14.13.8 **Estructura:** s’ha utilitzat per a l'anàlisi de la proteïna el codi PDB 6SEK, ja que aquesta estructura PDB era la que tenia una estructura 3D, realitzada amb el mètode de difracció de raigs X 2.17 Å, més completa i ens podia aportar major informació que no pas els resultats obtinguts amb el BLAST. De fet, amb el BLAST s’obtenen com a resultats de la cerca la proteïna anomenada Chain A, Amine oxidase [flavin-containing] A [Homo sapiens] que era la que tenia més total score té, tenint una query cover de 7% i un percentatge d'identitat del 45, 71% i el seu codi PDB era 2Z5Y, però ja que no es basava en la proteïna es descarta aquesta opció i l’anàlisi se centra en la primera opció. **Funció:** La proteïna té diferents funcions, en les quals podem destacar que:
- Actua com a monooxigenasa (Incorpora un grup hidroxil a un determinat substrat) de Baeyer_Villiger, en una varietat de diferents substrats.
- Catalitza la inserció d’un àtom d'oxigen en un enllaç carboni-carboni adjacent a un carbonil que permet convertir cetones en èsters.
- Catalitza l'oxidació de molècules de fàrmacs que porten un grup carbonil en una cadena alifàtica.
- Actua com a modulador positiu en la biosíntesi del colesterol i de l'homeòstasi de la glucosa, promovent, l’envelliment metabòlic a través d’efectes pleiotròpics.

### Treball amb l'aplicació

ChimeraX Com podem apreciar en la figura, l’enzim té diverses estructures secundàries. Les estructures acolorides de color taronja corresponen a estructures hèlix-alfa, i les de color verd corresponen a làmines β. Entre aquestes, les estructures de color blanc que es mostren corresponen a seqüències d’aminoàcids que les uneixen, però que no presenten una estructura secundària definida. La figura següent ens mostra de color blau els ponts d’hidrogen presents a la proteïna. Hi ha un total de 4386 ponts d’hidrogen presents. Podem distingir que tots els enllaços es donen entre les estructures secundàries, o bé a les hèlix α o bé les làmines β. A més, també es veuen involucrades en les estructures supersecundàries que es formen els motius Beta. Com es pot apreciar en la figura sí que s’observa diferents motius d’estructura supersecundària, les estructures acolorides de color verd corresponen a làmines β formant hairpins de manera antiparal·lela una darrera l’altre amb girs de 180 graus. Aquests "hairpins", en el mateix moment, es pot apreciar en la figura com en quatre disposicions de l’enzim formen un altre tipus de subestructura, anomenats barrils beta (Els barrils beta són una seria de làmines β unides per ponts d’hidrogen formant una estructura secundària tancada amb forma de cercle). Cada un d’aquestes forma un domini independent. També, podem apreciar de color blau diferents superestructures secundàries amb conformació hèlix α-bucle-hèlix α. **3. L'estructura terciària de la proteïna, a quin tipus de plegament correspon? Busqueu el plegament a la base de dades SCOP, anoteu el codi que us dona aquesta base de dades per al plegament i mostreu la jerarquia d’aquest plegament. En cas que existeixi estructura quaternària, discutiu-la també. **SCOP ID 4000117:** Al gràfic superior s’observa la jerarquia, mostrant les estructures ancestre d’aquest plegament. El domini concret de la proteïna no es troba referència a la base de dades SCOP, es troba un homòleg d’un organisme diferent d’Homo sapiens, però amb una funció de monooxidasa igual a la proteïna. **SCOP ID 8057763:** Pel domini que pertany a l’organisme Thermobidia fusca. A external links mostra que el codi per consultar l’estructura superior de la base de dades PDB és 1w4x. La proteïna presenta estructura quaternària, s’observa, cadascuna de les cadenes que la conformen es poden considerar una interacció entre dos dominis tipus l’esmentat anteriorment, ja que consta d’una cadena alfa i una cadena beta, és a dir, dues estructures terciàries que en interaccionar formen la proteïna.

### Funció de la proteïna

L’enzim està tot de color taronja excepte el centre actiu que es troba pintat de color blanc per així poder-ho apreciar de millor forma. Segons la literatura els residus més rellevants són: Thr62, Ser62, Thr63; Glu 281, Glu 281, His 282; Ile378, Thr378, Ile378 (marcats en blau fort), ja que els altres residus són estrictament conservats per tenir conformacions idèntiques. Els substrats o inhibidors que té la molècula són els que es mostren a continuació marcats en verd. D’aquests substrats marcats en verd podem destacar en la següent figura en aquests podem destacar que tenim 2 cofactors els quals són el FAD (Flavin Adenine Dinucleotide), marcat de color magenta, NAP (NADP⁺ - Nicotinamide Adenine Dinucleotide Phosphate), marcat de color groc. A més també trobem un buffer utilitzat en la cristal·lització com és EPE (HEPES - 4-(2-hydroxyethyl)-1-piperazine ethanesulfonic àcid), marcat de color blau claret, un possible substrat com és GLC (Glucose - α-D-Glucopyranose), marcat de color rosa i finalment un detergent també fet servir en la cristal·lització com és el LMT (Dodecyl-β-D-Maltoside), marcat de color verd fosc. **Taula 1 i Figura 15:** Taula on s’observa els substrats que interaccionen i figura on es mostra aquesta interacció Les interaccions realitzades pels substrats amb la proteïna són ponts d’hidrogen i interaccions de van der Waals. la proteïna pertany a la família de les monooxigenases que contenen flavina, que són enzims dependents de NADPH (i els seus derivats com NADH) que catalitzen l'oxidació de centres heteroatòmics nucleòfils en fàrmacs, pesticides i altres compostos xenobiòtics. la FMO5 presenta una activitat com a Baeyer-Villiger monooxigenasa, que implica la inserció d’un àtom d'oxigen en un enllaç carboni-carboni adjacent a un grup carbonil, convertint cetones en èsters. El mecanisme catalític implica la reducció del cofactor FAD per NADPH, seguida de la formació d’un intermediari hidroperòxid que oxida el substrat. Aquest mecanisme és eficient i no requereix la unió prèvia del substrat per activar l'oxigen, a diferència d'altres monooxigenases. En primer lloc, per relacionar l’estructura amb la funció caldria saber quina és la funció que realitza la proteïna, la Chain A, Amine oxidase [flavin-containing] A [Homo sapiens] concretament es basa principalment en la capacitat per a catalitzar reaccions d’oxigenació de substrats utilitzant el FAD i el NADPH com a cofactors. Els cofactors són molt importants per a la proteïna, ja que el FAD ajuda a la transferència d’electrons durant la reacció així com el domini de Flavina que estabilitza aquest FAD i ajuda a la transferència d’electrons entre el NADPH, el FAD i l’oxigen (indispensables per a la reacció). També és important el centre actiu, pel fet que és on s’uneix el substrat així com els residus funcionals perquè es pugui dur a terme la funció de l’enzim. Aquests residus funcionals són la His que està involucrada en la coordinació del FAD i en la transferència d'electrons cap a l'àtom d'oxigen, l’Àcid glutàmic (Glu) que permet l'estabilització d'ions o la interacció amb l'oxigen, la Ser i treonina (Thr) que s'encarreguen de formar ponts d’hidrogen amb el substrat o el cofactor, facilitant la reacció d'oxigenació i finalment la Cys que ajuda a la catalització de la transferència d'electrons així com a l'estabilització d’un intermediari reactiu si s'arribés a produir.
Com a variants de la proteïna en humans trobem altres FMOs basades en mutacions en alguns aminoàcids que provocant certs efectes a escala molecular així com diferents funcions:
- FMO3 V257M: Es basa en un canvi en un aminoàcid proper al centre actiu on en comptes d’haver-hi una valina hi ha una metionina, fet que provoca una alteració en la forma de l’enzim que afecta l'afinitat pel substrat i la capacitat d'oxidar-lo correctament.
- FMO1 R500H: La mutació R500H reemplaça una arginina carregada positivament al centre actiu per una histidina. Això provoca que s’alterin les interaccions de càrrega i afecta l'afinitat pels substrats així com l'estabilitat del cofactor FAD, cosa que dificulta la metabolització de toxines.
- FMO4 I71T: En aquest cas, la isoleucina se substitueix per una treonina al lloc actiu de l’enzim. Això canvia la hidrofobicitat de la regió, afectant la capacitat de la proteïna per interactuar correctament amb substrats hidrofòbics fent disminuir l'eficiència de metabolització de fàrmacs i altres molècules.

## Arquitectura molecular

FMO5 és una monooxigenasa dependent de FAD i NADPH. La lectura estructural se centra en el lloc d’unió de FAD, l’accés del NADPH i la cavitat on s’oxiden substrats orgànics.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt1.1.PNG' | relative_url }}" alt="Figura 1 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Flavin-containing monooxygenase 5: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt1.PNG' | relative_url }}" alt="Figura 2 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Flavin-containing monooxygenase 5: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

El cicle catalític passa per reducció de FAD, activació d’oxigen i transferència d’un àtom d’oxigen al substrat. La geometria del cofactor i la xarxa de residus polars controlen la formació d’intermedis oxidants.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/fmo_bvmo.png' | relative_url }}" alt="Mecanisme general d’una monooxigenasa dependent de flavina; esquema útil per contextualitzar l’activació d’oxigen per FAD/NADPH. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Mecanisme general d’una monooxigenasa dependent de flavina; esquema útil per contextualitzar l’activació d’oxigen per FAD/NADPH. Font: <a href="https://commons.wikimedia.org/wiki/File:BVMO_reaction_mechanism.png">Wikimedia Commons, BVMO reaction mechanism</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Leisch et al., 2011).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt2.1.PNG' | relative_url }}" alt="Figura 3 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Flavin-containing monooxygenase 5: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt2.2.2.PNG' | relative_url }}" alt="Figura 4 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Flavin-containing monooxygenase 5: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

Les anotacions de variants i modificacions s’han de consultar a UniProt per FMO5 i traslladar-les només si el residu és present en la seqüència analitzada. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt2.2.PNG' | relative_url }}" alt="Figura 5 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Flavin-containing monooxygenase 5: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt2.3.PNG' | relative_url }}" alt="Figura 6 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Flavin-containing monooxygenase 5: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt3.1.PNG' | relative_url }}" alt="Figura 7 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Flavin-containing monooxygenase 5: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt3.2.PNG' | relative_url }}" alt="Figura 8 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Flavin-containing monooxygenase 5: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt3.3.PNG' | relative_url }}" alt="Figura 9 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Flavin-containing monooxygenase 5: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/imatges/chimera_punt4.1.PNG' | relative_url }}" alt="Figura 10 del grup A 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Flavin-containing monooxygenase 5: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Leisch, H.; Morley, K.; Lau, P. C. K. (2011). *Baeyer-Villiger Monooxygenases: More Than Just Green Chemistry*. *Chemical Reviews*. [doi: 10.1021/cr1003437](https://doi.org/10.1021/cr1003437).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup A/pràctica1(JCA).md' | relative_url }}">pàgina original del grup A</a>.
