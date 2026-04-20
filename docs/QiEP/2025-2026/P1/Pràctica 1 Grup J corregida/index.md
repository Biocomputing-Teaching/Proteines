---
title: "Variant P450/P411 derivada de BM3"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-J-corregida/
author: "Maria Llena Prats, María Roura Vilanova, Lídia Lan Molina Vergés i Agnès Navarta Bonilla i Miquel Ruiz"
---

<p class="qiep-group-label"><strong>Grup J</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>

Autors del treball original: **Maria Llena Prats, María Roura Vilanova, Lídia Lan Molina Vergés i Agnès Navarta Bonilla i Miquel Ruiz**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC J | 2025-2026 | seqüència problema
MTIKEMPQPKTFGELKNLPLLNTDKPVQALMKIADELGEIFKFEAPGRVTRYLSSQRLIKEACDESRFDKNLSQALKFVR
DFLGDGLATSWTHEKNWKKAHNILLPSFSQQAMKGYHAMMVDIAVQLVQKWERLNADEHIEVSEDMTRLTLDTIGLCGFN
YRFNSFYRDQPHPFIISMVRALDEVMNKLQRANPDDPAYDENKRQFQEDIKVMNDLVDKIIADRKARGEQSDDLLTQMLN
GKDPETGEPLDDGNIRYQIITFLLAGHEGSHGLLSFALYFLVKNPHVLQKVAEEAARVLVDPVPSYKQVKQLKYVGMVLN
EALRLWPTVPAFSLYAKEDTVLGGEYPLEKGDEVMVLIPQLHRDKTVWGDDVEEFRPERFENPSAIPQHAFKPFGNGQRA
SIGQQFALHEATLVLGMMLKHFDFEDHTNYELDIKETLSLKPKGFVVKAKSKKIPLGGIPSPSTLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 472 aminoàcids. Cisteïnes: 63, 157.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [5UCW](https://www.rcsb.org/structure/5UCW) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.7 Å. La longitud de la seqüència analitzada és de 472 aminoàcids. Registre UniProt candidat P14779 (citocrom P450/NADPH--P450 reductasa bifuncional), vinculat a l’entitat PDB recomanada. Gen: cyp102A1.

| Camp | Valor |
|---|---|
| UniProt / gen | [P14779](https://www.uniprot.org/uniprotkb/P14779); gen: cyp102A1 |
| EC / BRENDA | no assignat |
| Estructura principal | [5UCW](https://www.rcsb.org/structure/5UCW) entitat 1; difracció de raigs X, 1.7 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | domini hemo de citocrom P450, CATH 1.10.630.10; el constructe correspon al domini catalític i no a BM3 completa |
| Estructura secundària i lectura ChimeraX | làmina β: 4, hèlix: 23, regions no assignades: 1; exemples: làmina β 40-45, 48-53, 353-357, 331-336, 68-71; làmina β 140-141, 446-451, 422-425; làmina β 340-342, 346-348; làmina β 434-436, 440-442; hèlix 12-16; hèlix 17-22; hèlix 25-38; hèlix 55-63 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 467-472 (HHHHHH); cisteïnes a [63, 157] |

Funcionalment, el domini P450/P411 deriva de CYP102A1/BM3. Els P450 naturals hidroxilen àcids grassos mitjançant activació d’oxigen al ferro-hemo, mentre que les variants P411 poden redirigir la reactivitat cap a transferència de carbè i ciclopropanació. 5UCW correspon a una variant del domini hemo de CYP102A1/BM3. L’anàlisi se centra en el domini P450/P411 i no en la proteïna BM3 completa amb dominis reductasa.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | P450/P411 |
| Estructura de referència | 5UCW |
| Longitud | 472 aa |
| Trets rellevants | His 467-472; domini hemo |


### Introducció sobre la proteïna

La proteïna estudiada és un citocrom P450, concretament el citocrom P450 BM3 del bacteri *Bacillus megaterium*. (https://www.uniprot.org/uniprotkb/P14779/entry) Nom del gen: **cyp102A1** Codi UniProt: **P14779** Segons la base de dades BRENDA, forma part de la família d’enzims oxidoreductases que catalitzen reaccions d’oxidació incorporant oxigen molecular en substrats orgànics, amb funció monooxigenasa (https://www.brenda-enzymes.org/enzyme.php?OrganismID=656&UniProtAcc=P14779&ecno=1.14.14.1). Classificació BRENDA: **EC 1.14.14.1** Funcionalment, catalitza la hidroxilació d’àcids grassos de cadena mitjana i llarga i participa en processos metabòlics i en la regulació de la fluïdesa de membranes (https://www.rcsb.org/groups/summary/polymer_entity/P14779)

#### Funció bàsica de la proteïna

Cyp102A1 és un enzim de la família dels citocroms P450 que actua com a un fatty acid monooxygenase. Segons UniProt, catalitza la hidroxilació d'àcids grassos en posició omega-1, omega-2 i omega-3, mostrant més activitat òptima en cadenes llargues i mitjanes d’àcids grassos com l’àcid làuric (C12), mirístic (C14) i palmític (C16). A més presenta un domini reductasa al terminal C que permet la transferència d’electrons des del NADPH fins al ferro del grup hemo del domini P450 N-terminal, permetent l’activació de l’oxigen molecular i la posterior oxidació del substrat.

#### Estructura tridimensional

Protein Data Bank. Per fer l’anàlisi estructural s’ha seleccionat l’estructura **PDB: 5UCW** obtinguda per cristal·lografia de raigs X amb una resolució de **1.70 Å**. Gràcies a aquesta alta resolució es pot observar amb precisió la disposició dels àtoms i les interaccions moleculars.

### Anàlisi amb ChimeraX

Per fer l'estudi estructural s'ha utilitzat el programa ChimeraX ja que permet visualitzar i analitzar les diferents estructures i les seves interaccions.

#### Estructures secundàries i interaccions estabilitzadores

#### Làmines beta

 Formades per 850 àtoms, 848 bonds, 102 residus repartits en 2 models i 365 pseudobonds. Aquestes fulles es disposen en forma de làmines amb principalment ponts d’hidrogen entre cadenes polipeptídiques, especialment de manera antiparal·lela.

#### Hèlixs α

 Les hèlix α constitueixen la major part de la proteïna. S'han identificat 4512 àtoms, 4566 bonds, 571 residus i 3100 pseudobonds.

#### Llaços

Els llaços o llaços presenten 1790 àtoms, 1790 bonds, 233 residus i 1 pseudobond. A diferència de les hèlix i les làmines β, els llaços no tenen una estructura definida, però són els principals llocs d'interacció amb altres estructures. En aquest cas identifiquem **2206** ponts d’hidrogen entre llaços.

#### Interaccions estabilitzadores

#### Ponts d’hidrogen

 Podem visualitzar 1913 ponts d’hidrogens representats amb el color blau (cian)

#### Interaccions de van der Waals

 Hi han representats 7162 interaccions van der Waals, que són interaccions febles, de color verd

#### Estructures supersecundàries

Son estructures que apareixen quan hi ha una agrupació o es formen motius en les estructures secundàries.

#### Motius beta-meandre

 Podem observar 4 tires consecutives beta antiparal·leles unides per bucles 2n exemple del beta meander:

#### Forquetes beta

 Aquesta estructura és una β - hairpin, ja que es poden veure clarament 2 làmines β antiparaleles unides per un bucle

#### Estructura terciària

L’estructura terciària de la proteïna correspon al plegament característic dels citocroms P450, amb un clar predomini d’hèlixs α que s’organitzen en una arquitectura compacta al voltant del centre actiu. Aquest tipus de plegament permet la formació d’una cavitat hidrofòbica interna adequada per a la unió i correcta orientació d’àcids grassos de cadena llarga respecte al grup hemo, fet essencial per a la seva funció catalítica.
Segons la base de dades CATH, el domini del citocrom P450 del CYP102A1 es classifica dins de la classe de proteïnes principalment alfa, amb una arquitectura helicoidal i una topologia pròpia de la família estructural dels citocroms P450, reflectint l’elevat grau de conservació estructural d’aquesta superfamília. D’acord amb la classificació d’ECOD, aquest domini s’engloba dins del grup P450-like, que inclou monooxigenases dependents de citocrom P450 amb un origen evolutiu comú. De manera coherent amb aquestes classificacions, segons SCOPe el domini del citocrom P450 també s’assigna a la classe de proteïnes principalment alfa, confirmant el plegament conservat característic d’aquesta família.
Pel que fa a l’estructura quaternària, el CYP102A1 és una proteïna monomèrica. Tot i això, presenta una organització funcional singular, ja que integra en una sola cadena polipeptídica el domini citocrom P450 i el domini reductasa, fet que permet una transferència d’electrons intramolecular eficient durant el cicle catalític.

### Funció de la proteïna

#### Centre actiu

El centre actiu de la proteïna està format pel grup hemo (Fe-protoporfirina IX) dins del domini citocrom P450 (N-terminal), on el ferro és coordinat pel residu conservat Cys400, essencial per a l’activitat catalítica. Un residu important inclou Thr268, implicat en la transferència de protons i l’activació de l’oxigen molecular. La unió i orientació del substrat està controlada per residus hidrofòbics com Phe87, Val78, Leu188 i Ala264, mentre que Arg47 i Tyr51 participen en el reconeixement del substrat. L’estructura presenta un inhibidor, el N-(12-imidazolyl-dodecanoyl)-L-leucine, i també presenta substrat sent aquests àcids grassos de cadena llarga (C12-C16). El substrat, constituït per àcids grassos de cadena llarga, interacciona amb el centre actiu principalment mitjançant interaccions hidrofòbiques i de van der Waals amb residus com Phe87, Val78, Leu188 i Ala264, que formen una cavitat apolar. El grup carboxilat del substrat estableix interaccions electrostàtiques amb Arg47 i pot formar ponts d’hidrogen amb Tyr51 o molècules d’aigua. Aquest conjunt d’interaccions permet estabilitzar i orientar el substrat correctament respecte al grup hemo per a la reacció catalítica. L’inhibidor N-(12-imidazolyl-dodecanoyl)-L-leucine interacciona amb el centre actiu del CYP102A1 mitjançant diversos tipus d’interaccions. El grup imidazol estableix una coordinació directa amb el ferro del grup hemo (enllaç Fe–N), bloquejant l’activitat catalítica. La cadena hidrocarbonada forma interaccions hidrofòbiques i de van der Waals amb residus com Phe87, Val78, Leu188 i Ala264, ocupant la cavitat del substrat. A més, grups polars de l’inhibidor poden establir interaccions electrostàtiques amb Arg47 i ponts d’hidrogen amb Tyr51 o molècules d’aigua, contribuint a l’estabilització del complex.

#### Funció i mecanisme de l’enzim

La proteïna CYP102A1 (P14779) és una monooxigenasa dependent de NADPH que catalitza la hidroxilació d’àcids grassos de cadena llarga. El mecanisme catalític segueix el cicle típic dels citocroms P450: el substrat s’uneix prop del grup hemo, el ferro rep electrons des de NADPH a través dels cofactors FAD i FMN, i es produeix la unió i activació de l’oxigen molecular. Això genera una espècie reactiva (Fe(IV)=O) capaç d’oxidar el substrat mitjançant la inserció d’un grup hidroxil. Finalment, s’allibera el producte hidroxilat i l’enzim retorna al seu estat inicial.

#### Modificacions posttraduccionals

En el cas del CYP102A1 (P14779), no es descriuen moltes modificacions posttraduccionals específiques. No obstant això, en proteïnes de la família dels citocroms P450 s’han descrit modificacions com la fosforilació en residus Ser, Thr o Tyr, que poden regular l’activitat enzimàtica. També poden produir-se modificacions com l’acetilació en residus Lys o oxidacions en Cys i Met. A més, el residu Cys400 és essencial, ja que coordina el grup hemo, una modificació funcional imprescindible per a l’activitat catalítica de l’enzim. L’estructura del CYP102A1 està estretament relacionada amb la seva funció. El centre actiu conté un grup hemo coordinat pel residu Cys400, essencial per a l’activitat oxidativa. La cavitat hidrofòbica formada per residus com Phe87, Val78 o Leu188 permet la unió i posicionament dels àcids grassos, mentre que residus polars com Arg47 i Tyr51 contribueixen a la seva orientació. A més, residus com Thr268 participen en el mecanisme catalític. La presència d’un domini reductasa amb cofactors FAD i FMN facilita la transferència d’electrons des de NADPH. Aquesta organització estructural fa que l’enzim sigui altament eficient en la hidroxilació de substrats lipídics. La seqüència d’aminoàcids determina la disposició d’aquests residus en l’espai tridimensional, i per tant la funció de la proteïna. Mutacions en residus funcionals poden alterar significativament l’activitat. Per exemple, mutacions en Phe87 (com F87A o F87G) modifiquen la mida de la cavitat i l’accés del substrat al centre actiu, afectant la selectivitat i l’activitat enzimàtica. Altres mutacions en residus de la butxaca del substrat poden canviar la regioselectivitat de la reacció o permetre l’oxidació de nous substrats.

## Arquitectura molecular

El domini P450 és majoritàriament helicoidal i envolta el grup hemo. La posició del ferro, el lligand axial i la cavitat de substrat defineixen la reactivitat.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura10.meander.png' | relative_url }}" alt="Figura 1 del grup J" loading="lazy"> <figcaption><strong>Figura 1.</strong> P450/P411: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura11.pontsh.png' | relative_url }}" alt="Figura 2 del grup J" loading="lazy"> <figcaption><strong>Figura 2.</strong> P450/P411: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

Els P450 naturals activen oxigen sobre el ferro-hemo. En variants P411, canvis a l’entorn de l’hemo modulen la química i poden afavorir reaccions no naturals.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/p450_mechanism.png' | relative_url }}" alt="Cicle catalític general dels citocroms P450, útil per situar l’activació de l’oxigen al ferro-hemo. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Cicle catalític general dels citocroms P450, útil per situar l’activació de l’oxigen al ferro-hemo. Font: <a href="https://commons.wikimedia.org/wiki/File:CYP_mechanism.png">Wikimedia Commons, CYP mechanism</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Coelho et al., 2013).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura12.pontsh2.png' | relative_url }}" alt="Figura 3 del grup J" loading="lazy"> <figcaption><strong>Figura 3.</strong> P450/P411: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura13.vanderwalls.png' | relative_url }}" alt="Figura 4 del grup J" loading="lazy"> <figcaption><strong>Figura 4.</strong> P450/P411: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

Per al domini P450/P411, els residus funcionals principals són els que configuren l’hemo, el lligand axial i la cavitat de substrat. Les anotacions de BM3 completa sobre dominis FMN/FAD o regió reductasa només són contextuals si aquests dominis no són presents al constructe estructural.

## Relació seqüència-estructura-funció

Les mutacions del domini hemo s’han de connectar amb la geometria del centre actiu, l’accés del substrat i l’estat electrònic del ferro. FMN/FAD pertany al context de BM3 completa.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura14.betahairpin.png' | relative_url }}" alt="Figura 5 del grup J" loading="lazy"> <figcaption><strong>Figura 5.</strong> P450/P411: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura15.png' | relative_url }}" alt="Figura 6 del grup J" loading="lazy"> <figcaption><strong>Figura 6.</strong> P450/P411: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura16.png' | relative_url }}" alt="Figura 7 del grup J" loading="lazy"> <figcaption><strong>Figura 7.</strong> P450/P411: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura17.png' | relative_url }}" alt="Figura 8 del grup J" loading="lazy"> <figcaption><strong>Figura 8.</strong> P450/P411: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura18.png' | relative_url }}" alt="Figura 9 del grup J" loading="lazy"> <figcaption><strong>Figura 9.</strong> P450/P411: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Figura19.png' | relative_url }}" alt="Figura 10 del grup J" loading="lazy"> <figcaption><strong>Figura 10.</strong> P450/P411: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Coelho, P. S. et al. (2013). *Olefin cyclopropanation via carbene transfer catalyzed by engineered cytochrome P450 enzymes*. *Science*. [doi: 10.1126/science.1231434](https://doi.org/10.1126/science.1231434). Per al context de BM3: Whitehouse, C. J. C. et al. (2012), [doi: 10.1039/C1CS15192D](https://doi.org/10.1039/C1CS15192D).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup J/Pràctica1QiEP_J.html' | relative_url }}">pàgina original del grup J</a>.
