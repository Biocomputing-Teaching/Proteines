---
title: "DYNA_1b7 en complex amb dinorfina A"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-D-corregida/
author: "Luca Espinola, Daniela García, Manel Garcia, Oriol García, Guillem Fortea"
---

<p class="qiep-group-label"><strong>Grup D</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>

Autors del treball original: **Luca Espinola, Daniela García, Manel Garcia, Oriol García, Guillem Fortea**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC D | 2025-2026 | seqüència problema
MSGKEEEIEKEFEEKKKIIEENLKEAEEEGEEEAAEKLKEALKKLEEAIKLHREGANPVEVELEEVTAIILNNLAVLLRE
GEEELAKELEKAIKLLEEKKDAPEEERLKAIAIAIIRSVLVLIKWEGGKDEETIEEIEEILENRENLSLEELREAYVRAE
IAYLIESGIDPEAAKKVREKYERGAPLEELLKDIEKIEKEAKKREEEKKGSHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 217 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [9CCE](https://www.rcsb.org/structure/9CCE) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 3.15 Å. La longitud de la seqüència analitzada és de 217 aminoàcids. Segons RCSB/SIFTS, l’entitat 1, DYNA_1b7, no té un registre UniProt propi; l’entitat 2 del mateix PDB correspon al pèptid dinorfina A i mapeja a [UniProt P01213](https://www.uniprot.org/uniprotkb/P01213), proencefalina-B/prodinorfina, gen *PDYN*.

| Camp | Valor |
|---|---|
| UniProt / gen | constructe DYNA_1b7: sense registre UniProt propi; pèptid dinorfina A associat: [P01213](https://www.uniprot.org/uniprotkb/P01213), gen *PDYN* |
| EC / BRENDA | no assignat |
| Estructura principal | [9CCE](https://www.rcsb.org/structure/9CCE) entitat 1; difracció de raigs X, 3.15 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | feix helicoidal dissenyat per reconeixement de regió desordenada/dinorfina; sense jerarquia natural CATH/ECOD directa |
| Estructura secundària i lectura ChimeraX | hèlix: 9, regions no assignades: 1; exemples: hèlix 6-29; hèlix 31-55; hèlix 57-80; hèlix 82-98; hèlix 103-126; hèlix 131-143; hèlix 148-167; hèlix 172-183 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 212-217 (HHHHHH) |

Funcionalment, DYNA_1b7 és un constructe d’unió a dinorfina A. La prodinorfina/PDYN aporta el context biològic del pèptid, però la funció del model estructural és el reconeixement proteïna-pèptid. 9CCE entitat 1 cobreix tota la seqüència assignada i correspon a DYNA_1b7; el mapatge UniProt P01213 correspon al pèptid associat de l’entitat 2 i no a la identitat del constructe dissenyat.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | DYNA_1b7 |
| Estructura de referència | 9CCE |
| Longitud | 217 aa |
| Trets rellevants | His 212-217; complex amb pèptid dinorfina |


#### Grup

JC_D: Luca Espinola, Daniela García, Manel Garcia, Oriol García, Guillem Fortea

### Identificació del sistema

La seqüència analitzada correspon al constructe DYNA_1b7. El context biològic del complex ve donat pel pèptid dinorfina A, que deriva de la prodinorfina humana: UniProt P01213, gen *PDYN*, precursor de 254 aminoàcids i sense classificació EC perquè no és un enzim. Aquest registre UniProt descriu el pèptid associat de 9CCE, no la identitat del constructe de disseny.

#### Estructura:

Codis PDB: **9CCE** Aquesta estructura correspon al complex format per la proteïna dissenyada computacionalment i el seu lligand diana (un fragment de la Dinorfina A). Hem escollit aquesta estructura perquè representa de forma completa i a una resolució de 3.15 Å com la proteïna sintètica s'acobla perfectament a un pèptid que, de manera natural, és intrínsecament desordenat.

#### Funció:

La funció d’aquesta proteïna sintètica no és enzimàtica, sinó de **reconeixement molecular**. Ha estat dissenyada específicament per unir-se amb alta afinitat i especificitat a un fragment de la Dinorfina A (un pèptid opioide humà). Actua com una mena de "receptor artificial" o anticòs sintètic, estabilitzant la conformació del pèptid dins d’una butxaca d’unió creada a mida.

### Treball amb l’aplicació ChimeraX

#### Estructures secundàries

L'estructura de la proteïna principal (el receptor sintètic) presenta una organització altament estable dominada quasi exclusivament per **hèlixs α**.
Aquestes hèlixs s'estabilitzen internament mitjançant ponts d’hidrogen entre els grups amida i carbonil de l'esquelet polipeptídic. A diferència d'altres proteïnes globulars més complexes, en aquest disseny no s'observen estructures de làmina β. Els diferents segments helicoïdals estan connectats per petits **llaços o girs (bucles)**, que atorguen la flexibilitat just per connectar el feix d'hèlixs però mantenint una gran rigidesa estructural global. Les **hèlixs α** són l’estructura secundària predominant (i pràcticament exclusiva) en aquest receptor sintètic, i es troben fortament estabilitzades per ponts d’hidrogen interns al llarg de l'esquelet polipeptídic. Aquestes estructures helicoidals s'empaqueten formant una bastida summament rígida i estable, la qual és essencial per mantenir la forma exacta de la butxaca on s'unirà el pèptid diana. Els **girs i llaços (bucles)** tenen la funció de connectar les diferents hèlixs α entre si, permetent que la cadena polipeptídica canviï de direcció i es pugui tancar sobre si mateixa (cal destacar que en aquesta proteïna dissenyada no hi ha làmines β). Com que aquestes regions flexibles solen quedar exposades a la superfície, són molt importants per a la interacció amb el medi extern (el solvent aquós), ajudant a mantenir la proteïna soluble i estabilitzant la conformació global mitjançant ponts d’hidrogen amb molècules d’aigua i altres interaccions electrostàtiques.

#### Estructures supersecundàries

L’anàlisi dels motius d’estructura supersecundària del fragment no permet identificar la presència de patrons estructurals clàssics. En concret, no s’observen motius com hèlix-gir-hèlix o beta-hairpins, fet que es pot atribuir principalment a la mida reduïda del fragment estudiat. Les interaccions entre els diferents elements estructurals són, en general, locals i limitades, sense donar lloc a una organització superior definida. Aquest comportament és coherent amb la manca d’elements d’estructura secundària ben establerts descrita anteriorment. Pel que fa als ponts d’hidrogen, aquests es troben majoritàriament dins de regions locals i contribueixen a l’estabilització puntual de l’estructura, però no formen patrons extensos ni estructures regulars. D’altra banda, les interaccions de van der Waals també participen en l’estabilitat del fragment, tot i que la seva contribució és moderada i no condueix a la formació de motius estructurals complexos.

#### Estructura terciària

L’anàlisi de l’estructura terciària del fragment indica que no presenta un plegament globular definit. Aquesta manca d’organització tridimensional és coherent amb la naturalesa parcial de l’estructura estudiada. Pel que fa a la seva classificació estructural, no és possible assignar-la a cap categoria dins dels sistemes CATH o ECOD. Aquesta limitació es deu a l’absència d’una estructura terciària completa que permeti identificar patrons estructurals reconeguts. De la mateixa manera, no s’identifiquen dominis estructurals diferenciats dins del fragment analitzat. Això reforça la idea que es tracta d’una regió amb una organització limitada i sense subdivisions estructurals clares.

#### Estructura quaternària

L’anàlisi de l’estructura quaternària indica que el fragment estudiat es troba en forma de monòmer. No s’observen associacions amb altres subunitats ni la formació de complexes multimèrics. En conseqüència, tampoc s’identifiquen interfícies rellevants d’interacció quaternària. Aquesta absència és coherent amb la naturalesa del fragment i amb el fet que no representa la proteïna completa. Des d’un punt de vista funcional, la manca d’estructura quaternària no té un impacte significatiu, ja que la funció de la prodinorfina no depèn de l’associació entre subunitats, sinó del seu processament proteolític.

#### Funció de la proteïna

#### Centre actiu de la proteïna

La prodinorfina no és un enzim i, per tant, no presenta un centre actiu en el sentit clàssic. La seva funció no es basa en una activitat catalítica, sinó en la seva capacitat de generar molècules actives a partir de la seva pròpia seqüència. En aquest context, és més adequat parlar de regions funcionals dins de la seqüència que, després del processament proteolític, donen lloc a pèptids actius. Entre aquestes regions destaquen les que originen la leu-encefalina, la dinorfina A (en les formes 1-8, 1-13 i 1-17) i la big dynorphin.

#### Substrat o inhibidor

L’estructura 9CCE no mostra la presència d’un substrat o inhibidor típic d’una reacció enzimàtica, fet coherent amb la naturalesa no enzimàtica de PDYN. En aquest cas, l’estructura està associada al reconeixement d’un fragment de dinorfina. Per tant, es tracta d’una interacció de tipus proteïna-pèptid i no d’un procés catalític.

#### Funció de la proteïna

La funció principal de la prodinorfina és actuar com a precursor de pèptids opioides endògens. Aquests pèptids presenten activitats similars a les dels opiacis i participa en processos com la percepció del dolor i la resposta a l’estrès. En particular, les dinorfines actuen sobre el receptor opioide kappa, mentre que altres pèptids derivats contribueixen a la regulació de la senyalització neuronal.

#### Modificacions posttraduccionals

La modificació més rellevant de la prodinorfina és el seu processament proteolític. Aquest procés implica la seva escissió en punts concrets de la seqüència, donant lloc als pèptids actius responsables de la seva funció. Tot i que també s’han descrit altres possibles modificacions, com la formació de ponts disulfur o modificacions de tipus fosforilació o acetilació, el processament proteolític és, amb diferència, el mecanisme més important des del punt de vista funcional. En el cas de la prodinorfina, la funció depèn principalment de la seva seqüència més que no pas d’una estructura tridimensional complexa. La seqüència conté els llocs de tall proteolític i les regions que es transformaran en pèptids actius. Això fa que la seva funció estigui directament relacionada amb la seva capacitat de ser processada i generar molècules amb activitat biològica.

#### Variants amb implicacions funcionals

Les variants descrites per PDYN afecten principalment la seva expressió i no tant la seva estructura. Algunes variants genètiques s’han associat amb processos com l’addicció, alteracions en la resposta a l’estrès i diversos trastorns neurològics. En aquests casos, l’efecte no es produeix sobre un centre actiu, sinó sobre la quantitat de proteïna produïda i, en conseqüència, sobre la quantitat de pèptids opioides generats.

## Arquitectura molecular

L’estructura és un conjunt helicoidal que presenta una superfície d’unió per a dinorfina A. La interpretació separa cadenes del constructe, cadenes del pèptid i etiqueta d’histidines terminal.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Figura 1.png' | relative_url }}" alt="Figura 1 del grup D" loading="lazy"> <figcaption><strong>Figura 1.</strong> DYNA_1b7: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Figura 2.png' | relative_url }}" alt="Figura 2 del grup D" loading="lazy"> <figcaption><strong>Figura 2.</strong> DYNA_1b7: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

La funció molecular és el reconeixement del pèptid. No es tracta d’un enzim ni d’un precursor opioide; és un sistema de disseny per estudiar interaccions proteïna-pèptid amb geometria definida.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/dyna_9cce.jpeg' | relative_url }}" alt="Complex DYNA_1b7-dinorfina A, amb el constructe d’unió i el pèptid representats en el mateix conjunt estructural. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Complex DYNA_1b7-dinorfina A, amb el constructe d’unió i el pèptid representats en el mateix conjunt estructural. Font: <a href="https://www.rcsb.org/structure/9CCE">RCSB PDB 9CCE</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Wu et al., 2025).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Figura 3.png' | relative_url }}" alt="Figura 3 del grup D" loading="lazy"> <figcaption><strong>Figura 3.</strong> DYNA_1b7: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Figura 4.png' | relative_url }}" alt="Figura 4 del grup D" loading="lazy"> <figcaption><strong>Figura 4.</strong> DYNA_1b7: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

La seqüència assignada és un constructe de reconeixement de dinorfina A i no la prodinorfina humana completa. Les variants de *PDYN* i les modificacions del precursor només tenen sentit com a context del pèptid natural; no s’han de traslladar al constructe sense separar entitat, cadena i numeració. L’etiqueta d’histidines terminal forma part del constructe experimental.

## Relació seqüència-estructura-funció

Els residus d’interfície del constructe expliquen la complementarietat amb la dinorfina A. La numeració del pèptid i la numeració del constructe s’han de mantenir separades per evitar atribucions funcionals incorrectes.

## Referències

- Wu, K. et al. (2025). *Design of intrinsically disordered region binding proteins*. *Science*. [doi: 10.1126/science.adr8063](https://doi.org/10.1126/science.adr8063).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup D/Pratica1_GrupJC_D.md' | relative_url }}">pàgina original del grup D</a>.
