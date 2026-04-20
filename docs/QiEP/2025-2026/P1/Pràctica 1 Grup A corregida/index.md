---
title: "Complex 8T5E: constructe d’unió al pèptid BIM"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-A-corregida/
author: "Sergi Gebellí, Marc Mulet, Alex Navarro, Ana Rodríguez, Guillem Sansalvador"
---

<p class="qiep-group-label"><strong>Grup A</strong> · Química i Enginyeria de Proteïnes 2025-2026</p> Autors del treball original: **Sergi Gebellí, Marc Mulet, Alex Navarro, Ana Rodríguez, Guillem Sansalvador**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC A | 2025-2026 | seqüència problema
MSGEEERKEKREKVRAGLKRAIAELPAEVAARCLALLDDASDEEFIEAVLEVLEAMREALVAMAREGRLDAVRRATSHIN
EVLVDAAELALEKGREYFRRLCLIVCDMMIELIRLEPEQTPELRRIRERLEEIRRRLEGSG
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 141 aminoàcids. Cisteïnes: 33, 102, 106.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [8T5E](https://www.rcsb.org/structure/8T5E) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 3.0 Å. La longitud de la seqüència analitzada és de 141 aminoàcids. Segons les dades de RCSB/SIFTS, l’entitat 1, Bim_fulldiff, no té un registre UniProt propi perquè és un constructe dissenyat. El mateix PDB, però, sí que enllaça l’entitat 2, el pèptid BIM/BCL2L11, amb [UniProt O43521](https://www.uniprot.org/uniprotkb/O43521), amb cobertura completa del pèptid dins l’estructura però només parcial respecte de la proteïna BIM completa.

| Camp | Valor |
|---|---|
| UniProt / gen | constructe Bim_fulldiff: sense registre UniProt propi; pèptid associat BIM/BCL2L11: [O43521](https://www.uniprot.org/uniprotkb/O43521), gen *BCL2L11* |
| EC / BRENDA | no assignat |
| Estructura principal | [8T5E](https://www.rcsb.org/structure/8T5E) entitat 1; difracció de raigs X, 3.0 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | constructe helicoidal de disseny per reconeixement de pèptids; no hi ha una jerarquia CATH/ECOD natural assignable directament |
| Estructura secundària i lectura ChimeraX | hèlix: 7, regions no assignades: 1; exemples: hèlix 5-23; hèlix 26-39; hèlix 44-67; hèlix 68-81; hèlix 82-94; hèlix 94-114; hèlix 124-138; regions no assignades 1-4, 24-25, 40-43, 115-123, 139-141 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | cisteïnes a [33, 102, 106] |

Funcionalment, el constructe s’interpreta com una proteïna dissenyada per reconèixer un pèptid helicoidal BIM. La lectura biològica s’ha de separar en dues parts: la superfície artificial d’unió del disseny i el paper apoptòtic del pèptid BIM natural. 8T5E correspon al constructe Bim_fulldiff en complex amb un pèptid BIM helicoidal; el mapatge UniProt correspon al pèptid de l’entitat 2, no a la cadena dissenyada de l’entitat 1. La identitat funcional de l’entitat analitzada es formula, per tant, com a reconeixement proteïna-pèptid.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | constructe d’unió al pèptid BIM; nom de l’entitat PDB: Bim_fulldiff |
| Estructura de referència | 8T5E |
| Longitud | 141 aa |
| Trets rellevants | 3 Cys; complex proteïna-pèptid |

## Perfil molecular

El sistema estructural de referència és el complex 8T5E, format pel constructe Bim_fulldiff i un pèptid BIM helicoidal. La cadena principal té 141 aminoàcids i adopta una arquitectura helicoidal dissenyada per reconèixer el pèptid; la interpretació funcional s’ha de separar del paper biològic de BIM natural en apoptosi. BIM natural participa en la regulació de la via intrínseca de l’apoptosi. El constructe 8T5E no és un enzim i, per tant, no té classificació EC ni centre actiu catalític; el seu element funcional és una interfície de reconeixement proteïna-pèptid.

## Arquitectura secundària

La cadena analitzada és gairebé exclusivament helicoidal i no presenta làmines β. Les hèlixs α mostren el patró regular de ponts d’hidrogen de l’esquelet peptídic, amb interaccions C=O(i)···H-N(i+4); l’exemple Gly14-Lys10 il·lustra aquesta separació de quatre residus. Els trams no helicoidals connecten els elements secundaris i poden incloure girs curts o bucles més flexibles. Aquests segments contribueixen a orientar les hèlixs i a definir la superfície d’unió.

### Interaccions estabilitzadores

Les diferents estructures secundàries es troben estabilitzades per diversos tipus d’interaccions: En les hèlixs α el principal element estabilitzador són els ponts d’hidrogen intracatenaris, que s’estabilitzen mitjançant enllaços entre el grup carbonil d’un aminoàcid i el grup amino del residu situat quatre posicions més endavant. Aquesta disposició dels enllaços peptídics genera un macrodipol helicoïdal amb l’extrem N-terminal parcialment positiu i el C-terminal parcialment negatiu. A més les cadenes laterals dels aminoàcids queden orientades cap a l’exterior i cap enrere de l’hèlix minimitzant així les repulsions estèriques, facilitant la interacció amb l’entorn i permetent una estructura compacta. Tot i això, l’estabilitat de l’hèlix α no depèn únicament dels ponts d’hidrogen, sinó que també està influenciada per altres factors com les interaccions hidrofòbiques, electrostàtiques i la naturalesa dels aminoàcids. Els girs β poden estabilitzar-se amb ponts d’hidrogen i sovint apareixen a la superfície, on connecten elements secundaris i interactuen amb el solvent. Els bucles Ω, per la seva banda, no presenten un patró regular d’enllaços d’hidrogen ja que no representen una geometria regular fixa i són regions flexibles que faciliten la connexió entre elements estructurals de l’entorn. La figura 2 mostra la xarxa de ponts d’hidrogen associada a aquests elements.

## Motius supersecundaris

En les interaccions de van der Waals, que contenen un empaquetament hidrofòbic, a la figura 3, les línies verdes discontínues que creuen l’espai entre els diferents cilindres evidencien els contactes de van der Waals. Aquests es produeixen per l’estret empaquetament de les cadenes laterals dels aminoàcids que interactuen entre una hèlix i la seva veïna. Aquest fenomen permet amagar els residus hidrofòbics de l’aigua, formant el nucli hidrofòbic que dona estabilitat al domini sencer. El contacte entre Arg132 i Glu135 és compatible amb una interacció local que contribueix a estabilitzar el canvi de direcció entre elements helicoidals.

## Plegament terciari

La cadena presenta un plegament clarament de tipus α, compatible amb un α-helical bundle (feix d’hèlixs α). Això es pot inferir de la inspecció a ChimeraX, on la proteïna apareix formada gairebé exclusivament per hèlixs α i no mostra un nucli β ni un plegament α/β. Aquest tipus de plegament és típic de proteïnes implicades en interaccions proteïna-proteïna.

## Dominis i classificació estructural

Quant a l’estudi de dominis i família estructural, no s’ha trobat una classificació assignable per a 8T5E a CATH ni a ECOD, i tampoc una entrada útil de contrast a SCOPe en la cerca realitzada. Això és coherent amb la naturalesa de l’estructura, ja que RCSB l’anota explícitament com a proteïna dissenyada de novo / synthetic construct, és a dir, no necessàriament integrada en una família estructural i evolutiva clàssica prèviament catalogada. Per tant, en aquest cas, el tipus de plegament s’ha d’inferir principalment a partir de la inspecció estructural i de la descripció de l’entrada PDB.

## Organització quaternària

L’estructura quaternària correspon a un complex asimètric A1B1: la cadena A és el constructe d’unió i la cadena B és el pèptid curt reconegut. No és un oligòmer de subunitats equivalents, sinó un complex proteïna-pèptid.

## Centre funcional

BIM no presenta un centre actiu catalític, és a dir, no és una proteïna que catalitzi directament una reacció química com ho faria un enzim. El seu centre funcional és el motiu BH3 (Bcl-2 homology 3), que és una seqüència curta de residus aminoacídics conservada dins d’algunes proteïnes de la família BCL-2 i que és essencial per a les interaccions que regulen l’apoptosi. Aquest motiu és responsable de la unió de BIM a proteïnes antiapoptòtiques, és a dir, proteïnes que eviten o frenen la mort cel·lular programada, com ara BCL-XL, BCL-2 i MCL-1. Gràcies a aquesta unió, BIM pot exercir la seva activitat proapoptòtica, és a dir, afavorir l’activació de l’apoptosi. Aquest motiu BH3 és la regió estructuralment més rellevant de BIM perquè és la que entra dins el solc hidrofòbic canònic, és a dir, una ranura de la proteïna receptora rica en residus hidrofòbics, on s’estableix la unió principal. En solució, BIM és majoritàriament una proteïna intrínsecament desordenada, és a dir, no adopta una estructura tridimensional rígida i estable quan està lliure. Tanmateix, quan s’uneix al seu soci molecular, el motiu BH3 adopta una α-hèlix funcional, que és un tipus d’estructura secundària helicoïdal habitual en moltes proteïnes i que permet un encaix correcte amb la proteïna diana.

### Residus i motius funcionals

El primer motiu, el BH3 és essencial per a la funció apoptòtica. La literatura estructural sobre BH3 mostra que la unió depèn sobretot de quatre residus hidrofòbics conservats de la cara de l’hèlix i d’un Asp conservat que estableix una interacció electrostàtica/pont salí amb una Arg del soci antiapoptòtic. Els residus funcionals del motiu BH3 inclouen Ile148, Leu152, Ile155, Asp157 i Phe159. Els residus hidrofòbics participen en la interacció amb butxaques hidrofòbiques del soci molecular, mentre que Asp157 estableix una interacció electrostàtica conservada amb una arginina. El segon motiu d’unió és a DYNLL1/LC8, BIM també està regulada per la seva unió a la cadena lleugera de dineïna DYNLL1 (LC8), cosa que la manté associada al complex motor/microtúbuls en cèl·lules sanes. Aquest motiu no és el principal lloc apoptòtic final, però és un motiu regulador important perquè controla la disponibilitat de BIM. Finalment en les regions fosforilables de BIMEL, l’isoforma BIMEL té una regió addicional amb llocs de fosforilació reguladors. En humans, Ser69 és especialment important: la fosforilació per ERK1/2 afavoreix la dissociació de BIMEL de MCL-1/BCL-XL i també en pot promoure la degradació; a més, RSK1/2 fosforila serines d’un degró que afavoreix el reconeixement per βTrCP i la degradació proteasòmica.

### Lligands, substrats o inhibidors

No conté cap substrat. Com s’ha indicat anteriorment, BIM no és un enzim i, per tant, no transforma cap substrat químicament. L’estructura 8T5E correspon a un complex (un heterodímer asimètric A1B1). En aquest cas, la cadena principal (cadena A) actua com a “receptor” o proteïna d’unió dissenyada per reconèixer un pèptid. Des d’un punt de vista funcional, el motiu BH3 de BIM actua com a element d’unió a proteïnes antiapoptòtiques com BCL-2 o MCL-1. En bloquejar el solc hidrofòbic d’aquestes proteïnes protectores, BIM “inhibeix l’inhibidor” de la mort cel·lular, i permet així la progressió de l’apoptosi

### Interaccions funcionals

Com que BIM no presenta un centre catalític actiu, en aquest cas es parla d’un centre d’unió funcional. El motiu BH3 de BIM interacciona amb proteïnes antiapoptòtiques de la família BCL-2, com BCL-XL, MCL-1 i altres proteïnes semblants, mitjançant la seva unió al seu solc hidrofòbic. En aquesta interacció, la regió BH3 adopta una estructura d’α-hèlix amfipàtica. Els residus hidrofòbics Ile148, Leu152, Ile155 i Phe159 s’insereixen en butxaques hidrofòbiques del soci molecular, contribuint de manera principal a l’estabilització del complex a través d’interaccions de van der Waals i de l’efecte hidrofòbic. Al mateix temps, Asp157 estableix una interacció electrostàtica amb una arginina conservada de la proteïna receptora (per exemple, Arg263 en MCL-1 o residus arginina equivalents en altres membres de la família BCL-2). Aquest patró d’unió està dominat per interaccions hidrofòbiques/van der Waals, reforçades per ponts d’hidrogen i un pont salí conservat.

## Funció biològica

El context biològic correspon al pèptid BIM/BCL2L11 de l’entitat 2 de 8T5E, no al constructe Bim_fulldiff de l’entitat 1. BIM no és un enzim, de manera que no catalitza cap reacció química ni segueix un mecanisme enzimàtic. La seva funció és principalment reguladora dins la via intrínseca de l’apoptosi. Segons UniProt O43521, es descriu com una proteïna capaç d’induir apoptosi i anoïkis. El mecanisme funcional de BIM es pot resumir de la següent manera: en resposta a estrès cel·lular, retirada de factors de supervivència o altres senyals proapoptòtics, BIM s’activa o s’allibera. Un cop actiu, el seu motiu BH3 s’uneix a proteïnes antiapoptòtiques de la família BCL-2, com BCL-2, BCL-XL o MCL-1, neutralitzant així la seva funció protectora. A més, BIM pot contribuir a l’activació de les proteïnes efectores BAX/BAK1, responsables de la permeabilització de la membrana externa mitocondrial. Aquest procés desencadena la MOMP (mitochondrial outer membrane permeabilization), que provoca l’alliberament de factors proapoptòtics com el citocrom c i l’activació de la cascada apoptòtica. Finalment, BIM també participa en la regulació de la relació entre autofàgia i apoptosi: quan s’uneix a DYNLL1, pot reclutar BECN1 als microtúbuls i inhibir l’autofàgia. En determinades condicions, la fosforilació de BIM per quinases com JNK/MAPK8 afavoreix la dissociació d’aquest complex, modulant així aquest equilibri cel·lular.

## Modificacions posttraduccionals

BIM presenta diverses modificacions posttraduccionals rellevants des del punt de vista funcional, especialment en la seva isoforma BIMEL. La més ben documentada és la fosforilació. En humans, la fosforilació del residu Ser69 per ERK1/2 és especialment important, ja que pot afavorir la dissociació de BIMEL de proteïnes antiapoptòtiques com MCL-1 o BCL-XL. A més, aquesta modificació “prepara” la proteïna per a fosforilacions addicionals que en promouen la degradació. En un degró conservat de BIMEL, les quinases Rsk1/2 fosforilen diverses serines, fet que facilita la unió de βTrCP i la posterior degradació proteasòmica. D’altra banda, en el context de la regulació entre autofàgia i apoptosi, la fosforilació de BIM per JNK/MAPK8 pot abolir la seva interacció amb DYNLL1. Una altra modificació important és la ubiquitinació. La degradació de BIMEL depèn en gran mesura d’aquest procés, que sovint és afavorit per la fosforilació prèvia. Això permet un control molt fi de la quantitat de BIM activa dins la cèl·lula i, per tant, de la seva capacitat proapoptòtica. Pel que fa als residus diana potencials, destaquen principalment els residus Ser/Thr de la regió reguladora específica de BIMEL, especialment Ser69. També són rellevants els residus implicats en el motiu d’unió a DYNLL1, on la fosforilació pot alterar la interacció amb LC8. Finalment, diverses lisines poden actuar com a punts d’ubiquitinació, especialment en el context de la degradació regulada de BIMEL.

## Relació estructura-funció

L’estructura de BIM està adaptada a una funció de reconeixement proteïna-proteïna més que no pas a una funció catalítica. BIM és majoritàriament desordenada quan està lliure, i això li dona flexibilitat reguladora; però el seu motiu BH3 pot ordenar-se en α-hèlix quan troba el soci molecular correcte. Aquesta transició desordre → hèlix és essencial perquè BIM pugui unir-se amb gran afinitat a diverses proteïnes antiapoptòtiques i actuar com a sensor/integrador de senyals de mort cel·lular.

#### Elements estructurals.

El motiu BH3 és l’element central d’unió de BIM a proteïnes de la família BCL-2. Quan s’uneix al seu soci molecular, adopta una estructura d’α-hèlix, que permet el reconeixement funcional. La regió N-terminal conté el motiu d’unió a DYNLL1 i regula la localització cel·lular i la disponibilitat funcional de BIM. Finalment, la regió específica de BIMEL, amb múltiples llocs de fosforilació, actua com a element regulador que controla l’estabilitat, l’activitat i la degradació de la proteïna.

#### Residus funcionals.

Els principals residus implicats en la funció de BIM es poden resumir segons el seu paper estructural i regulador. Dins el motiu BH3, els residus Ile148, Leu152, Ile155 i Phe159 constitueixen el nucli hidrofòbic principal, essencial per a la interacció amb les proteïnes antiapoptòtiques de la família BCL-2. En aquest mateix motiu, Asp157 és un residu carregat conservat que participa en la formació d’un pont salí amb un residu d’arginina del soci molecular, estabilitzant així el complex d’unió. En la isoforma BIMEL, el residu Ser69 és un punt regulador important, ja que la seva fosforilació per ERK1/2 modula l’activitat de la proteïna i pot influir en la seva estabilitat i degradació. Finalment, els residus implicats en el motiu d’unió a DYNLL1 formen una regió reguladora important per al segrest de BIM als microtúbuls i la modulació de la seva funció proapoptòtica, encara que en una descripció estructural rigorosa és preferible referir-s’hi com a motiu funcional regulador si no es disposa de la numeració exacta validada per a una estructura concreta.

#### Variants.

La variant més coneguda i amb més rellevància biomèdica no és tant una mutació puntual de la proteïna, sinó una deleció polimòrfica a l’intró 2 de BCL2L11. Aquesta deleció altera l’splicing i afavoreix isoformes que perden el domini BH3, de manera que es redueix la capacitat proapoptòtica i pot aparèixer resistència intrínseca a inhibidors de tirosina quinasa (TKI) en alguns contextos, com CML o NSCLC amb EGFR.

### Integració estructural i funcional

La funció molecular depèn de la superfície d’interacció amb altres proteïnes. El paquet d’hèlixs α aporta estabilitat geomètrica, mentre que els trams flexibles permeten l’ajust local necessari per al reconeixement del pèptid o del soci molecular. El motiu BH3 és un exemple de com una regió estructural pot determinar la funció global de la proteïna. La capacitat de formar una hèlix α només en presència del soci molecular reflecteix un mecanisme d’adaptació estructural que optimitza la unió

### Síntesi

L’estudi demostra que la proteïna BIM és un regulador important de l’apoptosi la funció del qual depèn de la seva estructura i dinàmica conformacional. Tot i no presentar activitat enzimàtica, la seva arquitectura basada en hèlixs α i la presència del motiu BH3 li permeten establir interaccions específiques amb proteïnes antiapoptòtiques. El plegament de tipus α-helical bundle proporciona estabilitat estructural, mentre que la flexibilitat de determinades regions permet adaptar-se a diferents socis moleculars. La transició del motiu BH3 d’un estat desordenat a una hèlix estructurada és un element essencial en el mecanisme de reconeixement. A més, la regulació mitjançant modificacions posttraduccionals i l’existència de variants que afecten el motiu funcional evidencien la importància de la seva estructura en la seva funció biològica. En conjunt, aquest sistema mostra com una superfície helicoidal de reconeixement pot modular interaccions proteïna-pèptid relacionades amb apoptosi, tot i que el constructe estructural és una proteïna de disseny i no una proteïna natural completa.

## Arquitectura molecular

El model mostra un paquet d’hèlixs que genera una superfície complementària per al pèptid BIM. L’element estructural rellevant no és un centre actiu, sinó una interfície: distribució d’hidrofòbics, càrregues de superfície i geometria de contacte.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge1.png' | relative_url }}" alt="Figura 1 del grup A" loading="lazy"> <figcaption><strong>Figura 1.</strong> Complex 8T5E: vista global del plegament del constructe d’unió. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge2.png' | relative_url }}" alt="Figura 2 del grup A" loading="lazy"> <figcaption><strong>Figura 2.</strong> Elements d’estructura secundària del constructe d’unió. </figcaption>
</figure>

## Centre actiu i mecanisme

La funció molecular directa és la unió al pèptid BIM. Les conseqüències sobre apoptosi pertanyen al context biològic del pèptid natural i no es poden atribuir al constructe sense assaigs funcionals addicionals.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/bim_8t5e.jpeg' | relative_url }}" alt="Complex Bim_fulldiff-pèptid BIM; estructura de referència del sistema d’unió proteïna-pèptid. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Complex Bim_fulldiff-pèptid BIM; estructura de referència del sistema d’unió proteïna-pèptid. Font: <a href="https://www.rcsb.org/structure/8T5E">RCSB PDB 8T5E</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Vazquez Torres et al., 2024).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge3.png' | relative_url }}" alt="Figura 3 del grup A" loading="lazy"> <figcaption><strong>Figura 3.</strong> Regió funcional associada al reconeixement del pèptid BIM. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge4.png' | relative_url }}" alt="Figura 4 del grup A" loading="lazy"> <figcaption><strong>Figura 4.</strong> Superfície molecular del constructe d’unió. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

No hi ha un registre UniProt natural directe associat a l’entitat 1 de 8T5E. Les modificacions posttraduccionals i variants de BIM/BCL2L11 anotades a UniProt O43521 descriuen la proteïna natural o el pèptid associat, no el constructe Bim_fulldiff. Només s’han de projectar sobre l’estructura quan es manté separada la numeració del pèptid de la numeració del constructe.

## Relació seqüència-estructura-funció

La interpretació seqüència-estructura-funció se centra en separar residus del constructe i residus del pèptid. Els primers defineixen la superfície d’unió; els segons expliquen quins importants de BIM són reconeguts.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Imatge5.png' | relative_url }}" alt="Figura 5 del grup A" loading="lazy"> <figcaption><strong>Figura 5.</strong> Contactes moleculars del complex 8T5E. </figcaption>
</figure>

## Referències

- Vazquez Torres, S. et al. (2024). *De novo design of high-affinity binders of bioactive helical peptides*. *Nature*. [doi: 10.1038/s41586-023-06953-1](https://doi.org/10.1038/s41586-023-06953-1).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup A/Pràctica 1 Química i Enginyeria de proteïnes..html' | relative_url }}">pàgina original del grup A</a>.
