---
title: "RA95.0: retro-aldolasa sobre bastida TIM"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-G-corregida/
author: "Joan Suárez, Mariona Miquel, Martina Xian Porcel, Joan Oliva, Joan Grau"
---

<p class="qiep-group-label"><strong>Grup G</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>

Autors del treball original: **Joan Suárez, Mariona Miquel, Martina Xian Porcel, Joan Oliva, Joan Grau**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC G | 2025-2026 | seqüència problema
MPRYLKGWLEDVVQLSLRRPSVRASRQRPIISLNERILEFNKRNITAIIAVYERKSPSGLDVERDPIEYAKFMERYAVGL
SITTEEKYFNGSYETLRKIASSVSIPILMSDFIVKESQIDDAYNLGADTVLLIVKILTERELESLLEYARSYGMEPLILI
NDENDLDIALRIGARFIGIMSRDFETGEINKENQRKLISMIPSNVVKVAKLGISERNEIEELRKLGVNAFLISSSLMRNP
EKIKELIEGSLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 258 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [4A29](https://www.rcsb.org/structure/4A29) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.1 Å. La longitud de la seqüència analitzada és de 258 aminoàcids. Registre UniProt candidat Q06121 (indole-3-glicerol fosfat sintasa), vinculat a l’entitat PDB recomanada. Gen: trpC.

| Camp | Valor |
|---|---|
| UniProt / gen | [Q06121](https://www.uniprot.org/uniprotkb/Q06121); gen: trpC |
| EC / BRENDA | 4.1.1.48. Consulteu BRENDA a partir del número EC indicat. |
| Estructura principal | [4A29](https://www.rcsb.org/structure/4A29) entitat 1; difracció de raigs X, 1.1 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | bastida de barril TIM/aldolasa de classe I, CATH 3.20.20.70, usada com a suport de la retro-aldolasa RA95.0 |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 12, regions no assignades: 1; exemples: làmina β 48-52, 229-232, 206-211, 176-179, 157-160, 129-133, 107-110, 79-83, 48-52; hèlix 6-18; hèlix 32-43; hèlix 65-74; hèlix 92-101; hèlix 115-126; hèlix 135-137; hèlix 138-152 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 253-258 (HHHHHH) |

Funcionalment, RA95.0 és una retro-aldolasa dissenyada sobre una bastida TIM. La funció natural IGPS/trpC i l’EC 4.1.1.48 s’han de presentar com a context estructural o evolutiu, no com a funció directa del constructe. 4A29 cobreix tota la seqüència assignada amb identitat completa. 3QJA, una IGPS nativa d’alta resolució, és útil com a comparació de bastida però no substitueix 4A29 per explicar identitat, funció o residus del constructe.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | RA95.0 |
| Estructura de referència | 4A29 |
| Longitud | 258 aa |
| Trets rellevants | His 253-258; sense Cys |

### Sobre la proteïna

Nom del gen: trpC Nom de la proteïna: indole-3-glycerol phosphate
synthase (IGPS) Codi UniProt: P9WFX7 Codi BRENDA / EC: EC 4.1.1.48

#### Estructura codi

PDB: 3QJA | PDB\_00003qja L’estructura 3QJA és la millor opció
perquè ofereix la màxima resolució (1, 29 Å) per a la proteïna nativa
(salvatge), superant en detall atòmic qualsevol altra versió no
modificada. A diferència dels codis amb resolució superior (com 5AOU),
la 3QJA manté la seqüència original sense mutacions artificials de
disseny. A més, en ser una forma apo, proporciona un model estructural
pur i sense distorsions causades per lligands. Generalment funciona com
a monòmer o dímer segons l’organisme.

#### Funció

Catalitza la conversió de
1-(O-carboxifenilamino)-1-desoxiribulosa-5-fosfat en indole-3-glicerol
fosfat, un precursor directe del triptòfan. Aquest pas és essencial
perquè permet la formació de l’anell indòlic, característic del
triptòfan.

### Treball amb ChimeraX

#### Estructura secundària

Representació tridimensional de la proteïna amb les sis cadenes diferenciades, mostrant hèlixs α (groc), làmines β (magenta) i llaços (verd). " />
<figcaption aria-hidden="true">Figura 1. Representació tridimensional de
la proteïna amb les sis cadenes diferenciades, mostrant hèlixs α (groc),
làmines β (magenta) i llaços (verd). </figcaption> L’estructura que es veu combina hèlixs α, làmines β i llaços, i totes
aquestes parts s’organitzen mitjançant enllaços que estabilitzen el
plegament. Les làmines β es mantenen unides per enllaços d’hidrogen
entre cadenes, formant motius com les forquilles β–β o patrons més
amplis com la motiu Greek key. Les hèlixs α es mantenen estables gràcies als
seus enllaços d’hidrogen interns, i sovint s’empaqueten entre elles
mitjançant interaccions hidrofòbiques. Els llaços i girs connecten
aquestes estructures i defineixen la geometria global. En conjunt,
aquests enllaços d’hidrogen, hidrofòbics, electrostàtics i, si n’hi ha,
disulfur donen forma a les estructures supersecundàries i permeten que
la proteïna adopti un plegament estable i funció.

#### Estructura supersecundària i interaccions
<figcaption aria-hidden="true">Figura 2. Estructura de la proteïna
mostrant el segment de 13 residus i els seus ponts d’hidrogen (en blau)
amb la resta de la cadena. </figcaption> alt="Figura 3. Estructura de la proteïna amb el mateix segment de 13 residus, destacant les interaccions de van der Waals (en vermell) que estableix amb l’entorn. " />
<figcaption aria-hidden="true">Figura 3. Estructura de la proteïna amb
el mateix segment de 13 residus, destacant les interaccions de van der Waals
(en vermell) que estableix amb l’entorn. </figcaption> Disulfide Bond: between residues 59 and 73 of chain A. alt="Figura 4: Representació de la proteïna amb el pont disulfur (magenta) entre els residus 59 i 73 de la cadena A, que contribueix a l’estabilitat de l’estructura terciària. " />
<figcaption aria-hidden="true">Figura 4: Representació de la proteïna
amb el pont disulfur (magenta) entre els residus 59 i 73 de la cadena A,
que contribueix a l’estabilitat de l’estructura terciària. </figcaption>

#### Estructura terciària

<figcaption aria-hidden="true">Figura 5: Barril α/β (TIM barrel)</figcaption>

El barril α/β (TIM barrel) està format per:
- 8 làmines β internes (formen
el barril) - 8 hèlixs α externes El centre actiu es troba a la part
superior del barril alt="Figura 6 i 7. Domini segons ECOD. Domini e3qjaA1 (A: 4–270) classificat com a TIM β/α‑barrel dins dels grups TIM barrels. " />
<figcaption aria-hidden="true">Figura 6 i 7. Domini segons ECOD. Domini
e3qjaA1 (A: 4–270) classificat com a TIM β/α‑barrel dins dels grups TIM
barrels. </figcaption>

### Funció de la proteïna

#### Centre actiu i residus rellevants

<figcaption aria-hidden="true">Figura 8: Centre actiu de la proteïna</figcaption>

Identificació del centre actiu: El centre actiu d’aquesta proteïna es
troba a la part superior del barril α/β (també conegut com a barril
TIM). Segons la literatura, els residus més rellevants del centre actiu
són Glu57, Lys59, Lys119, Glu168 i Glu219, ja que la seva mutació
provoca una pèrdua molt important o total de l’activitat enzimàtica. En
particular, Lys119 s’ha proposat com el residu que actua com a àcid
catalític en el pas de ciclació, mentre que Glu168 podria estabilitzar
un intermedi carregat positivament i actuar també com a base catalítica.
A més, s’ha suggerit que Glu57, Lys119 i Glu219 formen una xarxa
funcional que modula la reactivitat de Lys119 i, per tant, l’activitat
global de l’enzim (Konas et al., 2023). L’estructura 3QJA és una
estructura en forma apo, és a dir, no inclou ni el substrat natural ni
cap inhibidor unit al centre actiu. Segons l’entrada del PDB, l’únic
heterolligand present és un ió sulfat (SO4), que molt probablement
deriva de les condicions de cristal·lització i no correspon a un lligand
fisiològic implicat directament en la catàlisi. Per tant, aquesta
estructura permet identificar molt bé la cavitat del centre actiu i la
disposició dels residus catalítics, però no permet observar directament
un complex enzim-substrat o enzim-inhibidor (RCSB PDB, 2011). Tot i
això, la literatura basada en altres estructures de la mateixa proteïna,
especialment el complex 3T44 amb el producte IGP, permet descriure les
interaccions més probables del centre actiu. En aquest complex, els
àtoms de nitrogen del esquelet peptídic de Gly221, Gly242 i Glu243 formen ponts
d’hidrogen amb els oxigens del grup fosfat de l’IGP. La cadena lateral
de Lys59 estableix ponts d’hidrogen tant amb un oxigen del fosfat com
amb un grup hidroxil del lligand. Lys119 està situada de manera
compatible amb una interacció catió-π amb la part indòlica del producte,
mentre que Glu168 pot formar un pont d’hidrogen amb el grup N-H de l’IGP
i contribuir a estabilitzar l’intermedi de reacció. També s’ha descrit
una xarxa de ponts d’hidrogen entre Glu168, Asn189 i Ser220, que podria
participar en la unió del lligand i/o en la catàlisi (Esposito et al.,
2022).

#### Funció de la proteïna

Es tracta d’un enzim de la via de biosíntesi del triptòfan que catalitza
la conversió de CdRP (1-(2-carboxyphenylamino)-1-deoxy-D-ribulose
5-phosphate) en IGP (indole-3-glycerol phosphate), un precursor directe
del triptòfan. Per això, la seva funció és essencial en la formació de
l’anell indòlic característic d’aquest aminoàcid. El mecanisme de
reacció consta, de manera general, de tres etapes principals: ciclació,
descarboxilació i deshidratació. Primer, el substrat s’uneix al centre
actiu i es reorganitza per permetre el tancament de l’anell; després es
produeix la pèrdua de CO₂; i finalment s’elimina H₂O, obtenint-se el
producte IGP. Així, l’enzim transforma un compost lineal en una molècula
cíclica aromàtica pròpia de la biosíntesi del triptòfan.

#### Modificacions posttraduccionals

En el cas de la proteïna indole-3-glycerol phosphate synthase (TrpC),
segons la informació disponible a la base de dades UniProt, no s’han
descrit modificacions posttraduccionals rellevants ni reguladores
associades a aquesta proteïna. Tampoc hi ha evidència experimental
consistent de fosforilació, acetilació, metilació o altres modificacions
que tinguin un paper funcional en l’activitat de l’enzim. Això és
coherent amb el fet que es tracta d’un enzim metabòlic bacterià altament
conservat, on la regulació acostuma a produir-se principalment a escala
d’expressió gènica dins de la via de biosíntesi del triptòfan, més que
no pas per modificacions posttraduccionals. alt="Figura 9: modificacions posttraduccionals segons UniProt" />
<figcaption aria-hidden="true">Figura 9: modificacions posttraduccionals
segons UniProt</figcaption> L’IGPS (indole-3-glycerol phosphate synthase, gen trpC) és un exemple
per veure com la seqüència d’aminoàcids acaba important l’estructura
i, al final, la funció de l’enzim dins la via del triptòfan. A escala
d’estructura, el que s’observa és el típic plegament de barril TIM
(α/β)₈. Això, dit de forma simple, vol dir que la proteïna s’organitza
com un cilindre format per làmines β al centre i hèlixs α al voltant.
Aquesta arquitectura no és casual: crea una butxaca interna molt estable
on es forma el centre actiu. Justament aquí és on l’enzim pot fer la
seva funció sense que l’aigua o l’entorn interfereixin massa, cosa
important perquè la reacció té intermedis inestables. La funció de
l’IGPS és catalitzar un pas concret de la síntesi del triptòfan (la
conversió del CDRP a IGP), i per això necessita una col·locació molt
precisa del substrat. Això s’aconsegueix gràcies a diferents tipus de
residus al centre actiu: Hi ha residus bàsics (sobretot lisines i
arginines) que contribueixen a fixar el substrat, sobretot el grup
fosfat, i mantenir-lo ben fixat. També hi ha un residu àcid important
(com un glutamat) que participa directament en la reacció, ajudant en
passos de transferència de protons. I altres residus com asparagines que
no catalitzen directament, però ajuden a estabilitzar intermedis de la
reacció amb ponts d’hidrogen. Un altre punt important són els bucles
que tapen el centre actiu. No són estructures rígides: es mouen. Quan
entra el substrat, el bucle es tanca una mica i això ajuda a “segellar”
la reacció. Això evita que els intermedis s’escapin i fa que l’enzim
sigui molt més eficient. Pel que fa a la relació seqüència-funció, el
més important és que aquests residus estan molt conservats. Això vol dir
que si els canvies, la funció es veu afectada gairebé sempre. En el cas
de variants: Si es muten les lisines o arginines del centre actiu, el
substrat ja no s’uneix igual i l’enzim perd molta eficiència (li costa
més treballar perquè no “enganxa” bé el substrat). Si es canvia el
glutamat catalític, directament la reacció pot deixar de funcionar,
perquè es perd una part essencial del mecanisme químic. Si els bucles no
funcionen bé o perden flexibilitat, el centre actiu queda massa obert i
els intermedis no es protegeixen bé, i això també fa baixar molt
l’activitat. Per últim, la seqüència que ens heu passat acaba amb una
etiqueta d’histidines (cua d’histidines), que en realitat no forma part de la proteïna
natural. S’hi posa en laboratoris per poder purificar-la més fàcilment,
però no té funció enzimàtica. Així doncs, podem concloure que el que es
veu clar és que l’IGPS funciona perquè té una estructura molt ben
“dissenyada”: un barril TIM que crea el lloc actiu, residus concrets que
fan la química i uns bucles que controlen l’entrada i sortida del
substrat. Sense aquesta combinació, l’enzim no podria fer la seva funció
correctament.

## Arquitectura molecular

RA95.0 manté el patró de barril TIM: làmines β al centre i hèlixs envoltants. Aquesta disposició crea una cavitat modulable on canvis puntuals de seqüència poden generar una activitat química nova.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 1.png' | relative_url }}" alt="Figura 1 del grup G" loading="lazy"> <figcaption><strong>Figura 1.</strong> RA95.0: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 2.png' | relative_url }}" alt="Figura 2 del grup G" loading="lazy"> <figcaption><strong>Figura 2.</strong> RA95.0: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

La funció del constructe és retro-aldolasa dissenyada. IGPS/trpC i EC 4.1.1.48 són context de la bastida natural; la discussió funcional de RA95.0 se centra en la catàlisi retro-aldòlica.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/ra95_4a29.jpeg' | relative_url }}" alt="Estructura 4A29 de RA95.0, retro-aldolasa de disseny. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura 4A29 de RA95.0, retro-aldolasa de disseny. Font: <a href="https://www.rcsb.org/structure/4A29">RCSB PDB 4A29</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Giger et al., 2013).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 3.png' | relative_url }}" alt="Figura 3 del grup G" loading="lazy"> <figcaption><strong>Figura 3.</strong> RA95.0: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 4.png' | relative_url }}" alt="Figura 4 del grup G" loading="lazy"> <figcaption><strong>Figura 4.</strong> RA95.0: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

RA95.0 és un constructe dissenyat; no s’hi ha d’importar variants o PTM de la IGPS natural sense alineament. Les posicions importants són les mutacions que creen la cavitat retro-aldolasa i la geometria del centre catalític al PDB 4A29.

## Relació seqüència-estructura-funció

Els residus catalítics d’IGPS no es transfereixen automàticament a RA95.0. La comparació útil és un remapeig 3QJA-4A29 que identifiqui posicions equivalents i mutacions responsables de la nova reactivitat.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 5.png' | relative_url }}" alt="Figura 5 del grup G" loading="lazy"> <figcaption><strong>Figura 5.</strong> RA95.0: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 6.png' | relative_url }}" alt="Figura 6 del grup G" loading="lazy"> <figcaption><strong>Figura 6.</strong> RA95.0: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 7.png' | relative_url }}" alt="Figura 7 del grup G" loading="lazy"> <figcaption><strong>Figura 7.</strong> RA95.0: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 8.png' | relative_url }}" alt="Figura 8 del grup G" loading="lazy"> <figcaption><strong>Figura 8.</strong> RA95.0: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/Fig 9.png' | relative_url }}" alt="Figura 9 del grup G" loading="lazy"> <figcaption><strong>Figura 9.</strong> RA95.0: vista global del plegament. </figcaption>
</figure>

## Referències

- Giger, L. et al. (2013). *Evolution of a designed retro-aldolase leads to complete active site remodeling*. *Nature Chemical Biology*. [doi: 10.1038/nchembio.1276](https://doi.org/10.1038/nchembio.1276). La família RA95 prové del disseny computacional de retro-aldolases: Jiang, L. et al. (2008), [doi: 10.1126/science.1152692](https://doi.org/10.1126/science.1152692).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup G/P1_QIEP_GrupG_editat.md' | relative_url }}">pàgina original del grup G</a>.
