---
title: "RA95.5-8F: retro-aldolasa dissenyada"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-F-corregida/
author: "Carlota Pérez, Elsa Benito, Marc Rovira, Jordi Solà i Aina Seguí"
---

<p class="qiep-group-label"><strong>Grup F</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>

Autors del treball original: **Carlota Pérez, Elsa Benito, Marc Rovira, Jordi Solà i Aina Seguí**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC F | 2025-2026 | seqüència problema
MPRYLKGWLEDVVQLSLRRPSVHASRQRPIISLNERILEFNKRNITAIIAYYLRKSPSGLDVERDPIEYAKYMEPYAVGL
SIKTEEKYFDGSYEMLRKIASSVSIPILMNDFIVKESQIDDAYNLGADTVLLIVEILTERELESLLEYARGYGMEPLILI
NDENDLDIALRIGARFITIYSMNFETGEINKENQRKLISMIPSNVVKVPLLDFFEPNEIEELRKLGVNAFMISSSLMRNP
EKIKELIEGSLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 258 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [5AN7](https://www.rcsb.org/structure/5AN7) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.1 Å. La longitud de la seqüència analitzada és de 258 aminoàcids. Registre UniProt candidat Q06121 (indole-3-glicerol fosfat sintasa), vinculat a l’entitat PDB recomanada. Gen: trpC.

| Camp | Valor |
|---|---|
| UniProt / gen | [Q06121](https://www.uniprot.org/uniprotkb/Q06121); gen: trpC |
| EC / BRENDA | 4.1.1.48. Consulteu BRENDA a partir del número EC indicat. |
| Estructura principal | [5AN7](https://www.rcsb.org/structure/5AN7) entitat 1; difracció de raigs X, 1.1 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | bastida de barril TIM/aldolasa de classe I, CATH 3.20.20.70, remodelada per activitat retro-aldolasa |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 12, regions no assignades: 1; exemples: làmina β 48-52, 230-232, 206-211, 176-179, 157-160, 129-133, 107-110, 79-83, 48-52; hèlix 6-18; hèlix 32-44; hèlix 65-74; hèlix 92-101; hèlix 115-126; hèlix 135-137; hèlix 138-152 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 253-258 (HHHHHH) |

Funcionalment, RA95.5-8F és una retro-aldolasa dissenyada sobre una bastida d’indole-3-glicerol fosfat sintasa. La funció natural IGPS/trpC i l’EC 4.1.1.48 són context de la bastida, no la funció principal del constructe evolucionat. 5AN7 és la coincidència exacta de la seqüència assignada. El context IGPS/trpC descriu la bastida evolutiva, però la identitat del constructe és una retro-aldolasa dissenyada.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | RA95.5-8F |
| Estructura de referència | 5AN7 |
| Longitud | 258 aa |
| Trets rellevants | His 253-258; barril TIM |


#### Seqüència
MPRYLKGWLEDVVQLSLRRPSVHASRQRPIISLNERILEFNKRNITAIIAYYLRKSPSGLDVERDPIEYAKYMEPYAVGLSIKTEEKYFDGSYEMLRKIAS
SVSIPILMNDFIVKESQIDDAYNLGADTVLLIVEILTERELESLLEYARGYGMEPLILINDENDLDIALRIGARFITIYSMNFETGEINKENQRKLISMIP
SNVVKVPLLDFFEPNEIEELRKLGVNAFMISSSLMRNPEKIKELIEGSLEHHHHHH

### Estructura de la proteïna

La proteïna estudiada presenta diverses estructures disponibles a la base de dades Protein Data Bank (PDB), obtingudes mitjançant difracció de raigs X. Aquestes estructures poden variar en resolució, cobertura de la seqüència o presència de lligands. S’ha seleccionat l’estructura amb codi PDB 1IGS, ja que presenta una resolució de 2.00 Å i una cobertura gairebé completa de la seqüència proteica (247 de 248 aminoàcids). A més, aquesta estructura no presenta mutacions, fet que ens permet treballar amb una forma molt propera a l’estructura nativa de la proteïna. Tot i que existeixen altres estructures disponibles al PDB, hem escollit aquesta perquè ofereix una bona qualitat experimental i permet analitzar amb detall les característiques estructurals de la proteïna.

### Funció de la proteïna

La proteïna indole-3-glycerol phosphate synthase és un enzim que participa en la biosíntesi del triptòfan, un aminoàcid essencial en molts organismes. Aquest enzim catalitza un pas concret dins d’aquesta via metabòlica, transformant un intermedi en indole-3-glycerol phosphate.
Aquesta funció és important perquè permet la producció de triptòfan, necessari per a la síntesi de proteïnes i per al funcionament normal del metabolisme cel·lular.

## Treball amb l’aplicació ChimeraX

### Estructures secundàries i ponts d’hidrogen

 Com podem apreciar en la figura, l’enzim té diverses estructures secundàries. Les estructures acolorides de color verd corresponen a estructures hèlix-alfa, i les de color rosa corresponen a làmines β. Entre aquestes, les estructures de color groc que es mostren corresponen a seqüències d’aminoàcids que les uneixen, però que no presenten una estructura secundària definida.  La figura següent ens mostra de color blau els ponts d’hidrogen presents a la proteïna. Hi ha un total de 926 ponts d’hidrogen presents. Podem distingir que tots els enllaços es donen entre les estructures secundàries, o bé a les hèlix α o bé les làmines β. A més, també es veuen involucrades en les estructures supersecundàries que es formen els motius Beta. Hi ha connexió entre làmines paral·leles i estabilització del nucli.

### Motius supersecundaris i contactes

A la figura següent s’observen estructures supersecundàries β-α-β. Aquest tipus d’estructures són la forma més habitual de connectar dues làmines β paral·leles.  Les interaccions de van der Waals contribueixen a l’estabilització de l’estructura tridimensional de la proteïna. Aquestes interaccions es produeixen principalment entre residus hidrofòbics situats a l’interior del barril TIM, contribuint a un empaquetament compacte del nucli proteic.
Aquest empaquetament hidrofòbic és essencial per mantenir la integritat estructural del barril α/β i assegurar la correcta orientació dels residus del centre actiu. A més, dins de la cavitat catalítica, les interaccions de van der Waals també contribueixen a l’estabilització del substrat, especialment en les regions no polars o aromàtiques.

### Interaccions de la proteïna

### Plegament terciari i classificació CATH
 **Classe (C)**: Proteïnes Alfa-Beta (α−β). **Arquitectura (A)**: Barril Alfa-Beta (El tub central tancat per les làmines i envoltat d'hèlixs). **Topologia (T)**: Barril TIM (Topologia específica de 8 elements repetits). **Superfamília Homòloga (H)**: Família del barril d’unió a la Ribulosa-fosfat / Enzims tipus Aldolasa. S'agrupen aquí perquè es considera que tots van divergir d’un avantpassat comú antic, adaptant el mateix "motlle" físic per catalitzar diferents reaccions químiques. 

### ECOD
**Arquitectura (A)**: Barrils α/β. **X-grup (X)**: TIM-barrel (El grup d'homologia llunyana). **H-grup (H)**: Enzims tipus unió a ribulosa-fosfat / rutes de síntesi d'aminoàcids (que comparteixen dominis evolutivament relacionats per al metabolisme de sucres fosfatats i anàlegs). **F-grup / T-grup**: Família de les sintases del Triptòfan (IGPS). 

### SCOP

### Estructura quaternària

#### En el cas de la proteïna 1A53:

Té una estructura quaternària que és monomèrica. Això vol dir que la unitat biològica funcional de l’enzim a l'interior de l'arqueobacteri consta d’una sola cadena polipeptídica (la cadena A de 247 aminoàcids). A diferència d'altres enzims que necessiten associar-se (formant dímers o tetràmers) per crear el lloc actiu o estabilitzar-se, el barril TIM de la IGPS és una unitat independent i completament funcional per si sola; de fet, el lloc actiu on es fa la reacció química es troba en un dels extrems “oberts" del centre del barril.

## Funció de la proteïna

Els residus més rellevants del centre actiu són:**Lys53**, pot formar un pont salí amb el grup carboxilat del substrat i orientar-lo dins del centre actiu. **Lys110** i **Glu159**: intervenen en la transferència de protons durant la reacció. **Asn180**: ajuda a mantenir l’entorn catalític correcte i és necessari per conservar l’activitat de l’enzim. **b)** L’estructura 1IGS no inclou el substrat complet ni un inhibidor específic, l’únic lligand associat a aquesta estructura és un ió fosfat. Per tant, les interaccions del següent apartat s’han deduït d’altres estructures amb substrat. **c)** Altres interaccions observades són l’estabilització mitjançant ponts d’hidrogen de la part fosfatada del lligant amb els residus polars del centre actiu, i interaccions de van der Waals dins de la cavitat per estabilitzar la part aromàtica del substrat.

### Funció i mecanisme

L’enzim indole-3-glycerol phosphate synthase (IGPS) catalitza la conversió de CdRP en IGP mitjançant un mecanisme que inclou ciclació, descarboxilació i deshidratació. Durant la reacció, residus com Lys53 ajuden a orientar el substrat dins del centre actiu, mentre que Glu159 i Lys110 participen en la transferència de protons i en l’estabilització dels intermediaris. El microentorn del centre actiu, mitjançant ponts d’hidrogen i interaccions electrostàtiques, permet estabilitzar els intermediaris i afavoreix la formació de l’anell indòlic del producte final.

### Modificacions posttraduccionals

No hi ha una PTM específica demostrada, però en proteïnes similars i en arqueus relacionats les PTMs més probables són acetilació de lisines, acetilació N-terminal i possiblement fosforilació. Les dianes més rellevants que es poden proposar per aquesta proteïna són Lys53 i Lys110 i, com a possibles dianes addicionals, residus polars de la cavitat activa com Ser56, Ser58, Ser211 i Ser234.
En resum, no hi ha PTM no descrites per IGPS específicament. **a)** L’estructura explica la funció perquè mostra una cavitat catalítica ben definida, amb els residus actius en la posició adequada i amb una organització química compatible amb la unió del substrat i la catàlisi. **b)** Els principals elements estructurals que participen en la funció són el barril TIM (β/α), la cavitat del centre actiu i els residus Lys53, Lys110 i Glu159, juntament amb la regió d’unió del fosfat. **c)** No s’han trobat variants anotades per a Q06121, així que ens basem en variants experimentals. Les variants més clares són les que afecten els residus del centre actiu. Les variants a continuació demostren que la funció d’aquesta proteïna depèn dels residus catalítics i de l’organització i flexibilitat de l’entorn estructural que els envolta.
- La variant K53Q, mostra una gran pèrdua d’activitat per l’eliminació de la càrrega positiva de la lisina, debilitant la interacció electrostàtica amb el substrat.
- La variant N90A disminueix l’eficiència catalítica, fent més lenta la deshidratació.
- La doble mutant R664A/D65A produeix una baixada d’afinitat pel substrat i una reducció de l’eficiència catalítica.

## Arquitectura molecular

La proteïna adopta un barril TIM, amb làmines β internes i hèlixs externes. Aquesta arquitectura és compatible amb cavitats catalítiques profundes i apareix repetidament en disseny d’enzims.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura1.png' | relative_url }}" alt="Figura 1 del grup F" loading="lazy"> <figcaption><strong>Figura 1.</strong> RA95.5-8F: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura10.png' | relative_url }}" alt="Figura 2 del grup F" loading="lazy"> <figcaption><strong>Figura 2.</strong> RA95.5-8F: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

La funció rellevant és la reacció retro-aldòlica dissenyada. La cavitat catalítica no s’ha d’interpretar com a centre actiu d’IGPS, sinó com una reprogramació química sobre una bastida TIM.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/ra95_5an7.jpeg' | relative_url }}" alt="Estructura 5AN7 de RA95.5-8F, retro-aldolasa dissenyada sobre bastida TIM. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura 5AN7 de RA95.5-8F, retro-aldolasa dissenyada sobre bastida TIM. Font: <a href="https://www.rcsb.org/structure/5AN7">RCSB PDB 5AN7</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Obexer et al., 2017).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura2.png' | relative_url }}" alt="Figura 3 del grup F" loading="lazy"> <figcaption><strong>Figura 3.</strong> RA95.5-8F: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura3.png' | relative_url }}" alt="Figura 4 del grup F" loading="lazy"> <figcaption><strong>Figura 4.</strong> RA95.5-8F: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

RA95.5-8F és un constructe evolucionat; no s’hi ha d’importar variants o PTM de la IGPS natural sense alineament. Les mutacions rellevants són les que remodelen la cavitat retro-aldolasa i cal discutir-les segons la numeració del PDB 5AN7.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció requereix separar residus conservats de la bastida, mutacions de disseny i residus directament implicats en la cavitat catalítica.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura4.png' | relative_url }}" alt="Figura 5 del grup F" loading="lazy"> <figcaption><strong>Figura 5.</strong> RA95.5-8F: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura5.png' | relative_url }}" alt="Figura 6 del grup F" loading="lazy"> <figcaption><strong>Figura 6.</strong> RA95.5-8F: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura6.png' | relative_url }}" alt="Figura 7 del grup F" loading="lazy"> <figcaption><strong>Figura 7.</strong> RA95.5-8F: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura7.png' | relative_url }}" alt="Figura 8 del grup F" loading="lazy"> <figcaption><strong>Figura 8.</strong> RA95.5-8F: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura8.png' | relative_url }}" alt="Figura 9 del grup F" loading="lazy"> <figcaption><strong>Figura 9.</strong> RA95.5-8F: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/figura9.png' | relative_url }}" alt="Figura 10 del grup F" loading="lazy"> <figcaption><strong>Figura 10.</strong> RA95.5-8F: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Obexer, R. et al. (2017). *Emergence of a catalytic tetrad during evolution of a highly active artificial aldolase*. *Nature Chemistry*. [doi: 10.1038/nchem.2596](https://doi.org/10.1038/nchem.2596).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup F/pràticaQiEP.html' | relative_url }}">pàgina original del grup F</a>.
