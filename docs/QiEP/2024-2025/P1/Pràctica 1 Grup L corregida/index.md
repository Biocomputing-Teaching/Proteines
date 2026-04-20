---
title: "Xilosa isomerasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-L-corregida/
author: "Cloe Capelle, Arnau Garcia i Sofia Lombera"
---

<p class="qiep-group-label"><strong>Grup L</strong> · Química i Enginyeria de Proteïnes 2024-2025</p> Autors del treball original: **Cloe Capelle, Arnau Garcia i Sofia Lombera**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P24300|XYLA_STREZ Xylose isomerase OS=Streptomyces pseudogriseolus OX=36817 GN=xylA PE=1 SV=4 | 2024-2025 | seqüència problema
MNYQPTPEDRFTFGLWTVGWQGRDPFGDATRRALDPVESVRRLAELGAHGVTFHDDDLIPFGSSDSEREEHVKRFRQALD
DTGMKVPMATTNLFTHPVFKDGGFTANDRDVRRYALRKTIRNIDLAVELGAETYVAWGGREGAESGGAKDVRDALDRMKE
AFDLLGEYVTSQGYDIRFAIEPKPNEPRGDILLPTVGHALAFIERLERPELYGVNPEVGHEQMAGLNFPHGIAQALWAGK
LFHIDLNGQNGIKYDQDLRFGAGDLRAAFWLVDLLESAGYSGPRHFDFKPPRTEDFDGVWASAAGCMRNYLILKERAAAF
RADPEVQEALRASRLDELARPTAADGLQALLDDRSAFEEFDVDAAAARGMAFERLDQLAMDHLLGARG
```

Seqüència recuperada de UniProt P24300. Longitud: 388 aminoàcids. Cisteïnes: 306.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a xilosa isomerasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P24300; gen: xylA |
| EC / BRENDA | 5.3.1.5 |
| Estructura principal | 1MNZ |
| Plegament o família | barril TIM tetramèric amb centre actiu metal·loenzimàtic |
| Estructura secundària i lectura ChimeraX | barril TIM tetramèric; cal situar els dos metalls, el sucre i els residus de coordinació al centre del barril |
| Lligands, cofactors o centre actiu | dos metalls divalents i sucre; la isomerització implica obertura d’anell i transferència d’hidrur |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La xilosa isomerasa interconverteix aldoses i cetoses mitjançant un centre actiu metàl·lic. ﻿---
---

## PRÀCTICA 1
Cloe Capelle, Arnau Garcia i Sofia Lombera

### Relacions estructura-funció de proteïnes

### Introducció
Per assolir els objectius, utilitzarem eines com **ChimeraX** per visualitzar i analitzar l’estructura tridimensional de la proteïna, així com dades extretes del **Protein Data Bank (PDB)** i, si és necessari, d'**AlphaFold**. La seva tasca principal consistirà a identificar els elements estructurals funcionals de la _Xylose Isomerase_ i comprendre com aquestes estructures contribueixen a la seva funció enzimàtica.

### Sobre la proteïna
La seqüència proporcionada va ser la següent:
`MNYQPTPEDRFTFGLWTVGWQGRDPFGDATRRALDPVESVRRLAELGAHGVTFHDDDLIPFGSSDSEREEHVKRFRQALDDTGMKVPMATTNLFTHPVFKDGGFTANDRDVRRYALRKTIRNIDLAVELGAETYVAWGGREGAESGGAKDVRDALDRMKEAFDLLGEYVTSQGYDIRFAIEPKPNEPRGDILLPTVGHALAFIERLERPELYGVNPEVGHEQMAGLNFPHGIAQALWAGKLFHIDLNGQNGIKYDQDLRFGAGDLRAAFWLVDLLESAGYSGPRHFDFKPPRTEDFDGVWASAAGCMRNYLILKERAAAFRADPEVQEALRASRLDELARPTAADGLQALLDDRSAFEEFDVDAAAARGMAFERLDQLAMDHLLGARG`

#### Cerca de la seqüència a UniProt
- **Nom UniProt**: P24300
- **Proteïna**: Xylose Isomerase
- **Gen**: xyIA
- **Organisme**: Streptomyces rubiginosus
- **aminoàcids**: 388 AA

#### Estructura de la proteïna
- **Codi PDB**: 1MNZ
- **EC Number**: EC 5.3.1.5 L'estructura tridimensional de la _Xylose Isomerase_ està disponible a la base de dades del **Protein Data Bank** amb el codi _1MNZ_. Aquesta estructura proporciona informació sobre els elements estructurals de la proteïna, incloent les seves estructures secundàries (hèlix α, làmines β) i les interaccions que estabilitzen la seva conformació, amb el qual podrem observar la seva estructura amb el programa _ChimeraX_.

#### Funció de la proteïna
La _Xylose Isomerase_ (XI) és una enzim que catalitza la interconversió entre dos monosacàrids:
- **D-xilosa → D-xilulosa**
- També pot convertir **D-glucosa → D-fructosa** (amb menor afinitat per la glucosa). Aquesta reacció és crucial en el metabolisme de la pentosa fosfat i en la degradació dels sucres, ja que permet a bacteris i fongs utilitzar la xilosa, un sucre de cinc carbonis present a l'hemicel·lulosa, una part important de les parets cel·lulars de les plantes. Això resulta vital per organismes com _Streptomyces rubiginosus_, que habiten ambients rics en material vegetal.

#### Aplicacions industrials
La _Xylose Isomerase_ té un paper fonamental en la **producció d'alt-fructose corn syrup (HFCS)**. Aquesta proteïna s'utilitza per convertir **D-glucosa en D-fructosa** durant el procés industrial de fabricació del xarop de blat de moro d'alta fructosa, un edulcorant àmpliament emprat en begudes, aliments processats i altres productes. A més, per funcionar correctament, la XI necessita ions metàl·lics, com **Mg²⁺** o **Mn²⁺**, que actuen com a cofactors essencials per a l’activitat enzimàtica.

### Treball amb ChimeraX

#### Anàlisis d'estructures secundàries
S’observa clarament que presenta estructures secundàries comunes, com ara hèlix α, llaços i làmines β. 3475 atoms, 3131 bonds, 13 pseudobonds, 803 residues, 2 models selected

#### Hèlix α
Les hèlixs α apareixen en forma de cintes helicoïdals verdes. Es formen per la creació de ponts d’hidrogen interns entre el grup amida (-NH) d’un residu d'aminoàcid i el grup carbonil (-C=O) d’un altre residu situat 4 posicions més endavant en la cadena polipeptídica. Aquests ponts d’hidrogen estabilitzen l’estructura enrotllada característica.

#### Full beta
Les làmines β, representades en blau, estan estabilitzades per ponts d’hidrogen entre cadenes adjacents, formant patrons paral·lels o antiparal·lels. Aquestes fulles tenen una estructura més estirada en comparació amb les hèlixs.

#### Llaços o girs
Els llaços o girs, destacats en vermell, són les parts més corbes i desorganitzades que connecten les hèlixs α i les làmines β. No tenen una estructura repetitiva regular i actuen com a connexions flexibles entre altres estructures secundàries.

#### Interaccions dins les estructures secundàries -

Els **ponts d’hidrogen** són les interaccions principals dins les estructures secundàries. A les hèlixs α, els ponts d’hidrogen interns mantenen la cadena enrotllada. En les làmines β (si n'hi hagués), els ponts d’hidrogen s'establirien entre cadenes β paral·leles o antiparal·leles.
- A més dels ponts d’hidrogen, altres forces com les **interaccions hidrofòbiques** poden ajudar a estabilitzar aquestes estructures secundàries, especialment quan els residus hidrofòbics queden enterrats al nucli de la proteïna. | **Interaccions hidrofòbiques** | Estructura |
|--|--|
| Aldehid | atoms, 1 bond, 1 residue, 1 model selected |
| Amida | 1221 atoms, 814 bonds, 387 residues, 1 model selected |
| Aromatic ring | 296 atoms, 302 bonds, 48 residues, 1 model selected
| Carbonil | 816 atoms, 408 bonds, 387 residues, 1 model selected
| Carboxylate | 195 atoms, 130 bonds, 65 residues, 1 model selected
| Hidroxil | 41 atoms, 38 residues, 1 model selected
| Metil | 211 atoms, 140 residues, 1 model selected
| Thioeter | 7 atoms, 7 residues, 1 model selected
| Tiol | 1 atom, 1 residue, 1 model selected

#### Anàlisis d'estructures supersecundàries
La _xylose isomerase_ presenta diversos motius d'estructura supersecundària relacionats amb el seu plec TIM barrel, que inclou interaccions importants com ponts d’hidrogen i interaccions de van der Waals. Aquestes interaccions estabilitzen la seva forma terciària i permeten que la proteïna compleixi la seva funció d'isomeritzar la xilosa. Els visualitzadors moleculars són eines excel·lents per explorar aquestes interaccions detalladament. Estructures supersecundàries:
- **Motiu de la “cua de corb” (Greek key motif)**: Aquesta és una estructura comuna en proteïnes amb plecs β. Consisteix en una sèrie de làmines β que es lliguen entre elles en un patró determinat.
- **Motiu de l'α-hèlix β-sheet (hèlix-gir-hèlix)**: Les hèlix α i làmines β sovint es combinen en estructures d’aquesta classe, en què les hèlix envolten els plecs β en patrons característics. **Ponts hidrogen**: Els grups NH de les hèlix α poden formar ponts d’hidrogen amb els grups carbonils de les llaminetes beta. Aquestes interaccions són fonamentals per mantenir la coherència estructural de la proteïna, especialment en el plegament de la forma TIM barrel. **Interaccions van der Waals**: Els residus hidrofòbics de les hèlixs α i les llaminetes beta poden interactuar mitjançant interaccions de van der Waals.

#### Estructura terciària (Plegament i

SCOP) i estructura quaternària
L'estructura terciària de la _Xylose Isomerase_ (XI) de _Streptomyces rubiginosus_ es caracteritza per un plegament de tipus barril α/β, conegut com a barril TIM (Triosephosphate Isomerase), que és comú en moltes isomerases de sucres. Aquesta estructura consisteix en vuit hèlixs α i vuit làmines β que s'alternen i es disposen formant un barril cilíndric tancat. Pel que fa a la jerarquia SCOP (Structural Classification of Proteins), la _Xylose Isomerase_ es classifica de la següent manera:
- **Classe**: Proteïnes α/β
- **Plegament**: Barril TIM (c. 1)
- **Superfamília**: Xylose isomerase-like (c. 1.15)
- **Família**: Xylose isomerase (c. 1.15.3) Aquesta classificació reflecteix l’estructura de barril α/β tancat de la proteïna, que és típica de les isomerases de sucres. **CODI**: ([c. 1.15](https://scop.berkeley.edu/sunid=51665). [3](https://scop.berkeley.edu/sunid=51665))
**Description**: Atomic structure of Glucose isomerase
**Class**: Alpha and beta proteins (a/b)
**Superfamily**: Xylose isomera
**Plegament**: TIM beta/alpha-barrel (barrel: plegament estructural en proteïnes. Es caracteritza per una estructura alternada de vuit hèlixs α i vuit làmines βdisposades en forma de barril cilíndric. )
**Familia**: Xylose isomerase Quant a l’estructura quaternària, la _Xylose Isomerase_ forma un homotetràmer, és a dir, està composta per quatre subunitats idèntiques que s'uneixen per formar la proteïna funcional. Aquesta organització tetramèrica és comuna en moltes isomerases de sucres i és essencial per a la seva activitat enzimàtica. En resum, la _Xylose Isomerase_ presenta una estructura terciària de tipus barril α/β (barril TIM) i una estructura quaternària tetramèrica, característiques que són fonamentals per a la seva funció en la interconversió de D-xilosa i D-xilulosa.

### Funció de la proteïna
La xilosa isomerasa és un enzim que catalitza la interconversió entre la D-xilosa i la D-xilulosa, un pas important en la via de metabolisme dels monosacàrids. Aquesta reacció és fonamental per convertir la xilosa en altres carbohidrats utilitzables per l’organisme, contribuint així a la producció d'energia i altres processos metabòlics.

#### Centre actiu i residus rellevants
La xilosa isomerasa té un centre actiu on es produeix la reacció d'isomerització, facilitada per residus funcionals com:
- **Histidina**: Actua com a base o àcid, promovent la transferència de protons durant el procés.
- **Glutamat**: Estabilitza l'intermediari enolè i participa en les reaccions de protonació.
- **Serina o Cisteïna**: Poden contribuir a la formació d'enllaços amb el substrat i estabilitzar l’estructura de l’enzim. A més, la proteïna interacciona amb quatre lligands importants:
- **2-AMINO-2-HYDROXYMETHYL-PROPANE-1, 3-DIOL** (C4 H12 N O3): Actua com a estabilitzador.
- **(4R)-2-METHYLPENTANE-2, 4-DIOL** (C6 H14 O2): Funciona com a inhibidor.
- **Ió calci (+2)**: Actua com a coenzim.
- **Ió magnesi (+2)**: També participa com a coenzim. Els ions metàl·lics, especialment el calci i el magnesi, són essencials per a l'activació de l’enzim i per mantenir l’estructura correcta del centre actiu.

#### Funció biològica i mecanisme d'acció
El mecanisme d'acció de la xilosa isomerasa implica la conversió de **D-xilosa** a **D-xilulosa** mitjançant un procés d'isomerització. Aquest procés segueix els passos següents: 1. **Unió del substrat**: La D-xilosa s'uneix al centre actiu.
2. **Formació de l'intermediari enolè**: L'enzim elimina un protó de la D-xilosa, creant un intermediari que conté un doble enllaç entre un carboni i un oxigen (enolè).
3. **Reorganització molecular**: L'intermediari es reorganitza per formar la D-xilulosa.
4. **Alliberament del producte**: La D-xilulosa és alliberada, i l’enzim queda llest per començar un altre cicle catalític. Els ions de **calci** i **magnesi** tenen un paper crucial en aquest procés, ja que estabilitzen l’estat de transició i faciliten la conversió del substrat. La seqüència d'aminoàcids de la xilosa isomerasa determina la seva estructura tridimensional, la qual influeix directament en la seva funció biològica. Els aspectes més rellevants són:
- **Llocs actius**: Regió específica on es produeix la interacció amb el substrat.
- **Dobrades i motifs estructurals**: Inclou estructures secundàries com el **tim barrel**, que proporciona estabilitat i suporta la configuració del centre actiu.
- **Flexibilitat estructural**: Permet el moviment dels residus funcionals durant l’activitat enzimàtica. Les **variants proteiques** poden resultar de mutacions que afecten la seqüència d'aminoàcids, produint canvis en l’estructura i la funció de l’enzim. Aquestes mutacions poden:
- **Disminuir l’activitat enzimàtica** si alteren els residus del centre actiu.
- **Afectar la selectivitat del substrat** si introdueixen canvis a les regions d’unió.
- **Modificar la capacitat funcional** en condicions fisiològiques si interfereixen amb les interaccions amb cofactors com el calci i el magnesi. En resum, la funció de la xilosa isomerasa depèn directament de la seva estructura, la qual està determinada per la seqüència d'aminoàcids i modulada per la presència de cofactors metàl·lics i lligands específics.

## Arquitectura molecular

La xilosa isomerasa és un enzim metàl·lic, sovint oligomèric, que interconverteix aldoses i cetoses. El centre actiu es llegeix al voltant dels metalls divalents.

## Centre actiu i mecanisme

Els metalls estabilitzen intermedis i faciliten el desplaçament d’hidrogen necessari per convertir xilosa en xilulosa o glucosa en fructosa.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/xylose_isomerase.png' | relative_url }}" alt="Estructura i mecanisme de la xilosa isomerasa, amb el centre metàl·lic implicat en la isomerització. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura i mecanisme de la xilosa isomerasa, amb el centre metàl·lic implicat en la isomerització. Font: <a href="https://commons.wikimedia.org/wiki/File:Structure_and_mechanism_of_xylose_on_glucose.png">Wikimedia Commons, Structure and mechanism of xylose on glucose</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Blow et al., 1992).

## Modificacions, variants i límits d’anotació

Les modificacions posttraduccionals no són centrals; les variants rellevants afecten metalls, estabilitat i especificitat de substrat. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

## Referències

- Blow, D. M. et al. (1992). *Structure and mechanism of D-xylose isomerase*. *Faraday Discussions*. [doi: 10.1039/FD9929300067](https://doi.org/10.1039/FD9929300067). Per al paper dels metalls en una xilosa isomerasa moderna: [doi: 10.1021/acs.biochem. 7b00777](https://doi.org/10.1021/acs.biochem.7b00777).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup L/PRACTICA1_GRUPJ.md' | relative_url }}">pàgina original del grup L</a>.
