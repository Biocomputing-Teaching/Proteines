---
title: "Lipasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-M-corregida/
author: "Aina Altimiras, Pere Lorente, Arturo Martinez"
---

<p class="qiep-group-label"><strong>Grup M</strong> · Química i Enginyeria de Proteïnes 2024-2025</p> Autors del treball original: **Aina Altimiras, Pere Lorente, Arturo Martinez**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P41365|LIPB_PSEA2 Lipase B OS=Pseudozyma antarctica OX=84753 PE=1 SV=1 | 2024-2025 | seqüència problema
MKLLSLTGVAGVLATCVAATPLVKRLPSGSDPAFSQPKSVLDAGLTCQGAspSSVSKPILLVPGTGTTGPQSFDSNWIPL
STQLGYTPCWISPPPFMLNDTQVNTEYMVNAITALYAGSGNNKLPVLTWSQGGLVAQWGLTFFPSIRSKVDRLMAFAPDY
KGTVLAGPLDALAVSAPSVWQQTTGSALTTALRNAGGLTQIVPTTNLYSATDEIVQPQVSNSPLDSSYLFNGKNVQAQAV
CGPLFVIDHAGSLTSQFSYVVGRSALRSTTGQARSADYGITDCNPLPANDLTPEQKVAAAALLAPAAAAIVAGPKQNCEP
DLMPYARPFAVGKRTCSGIVTP
```

Seqüència recuperada de UniProt P41365. Longitud: 342 aminoàcids. Cisteïnes: 16, 47, 89, 241, 283, 318, 336.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a lipasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | segons lipasa analitzada; gen: lipase/triacylglycerol lipase |
| EC / BRENDA | 3.1.1.3 |
| Estructura principal | estructura del lliurament o homòleg experimental |
| Plegament o família | α/β hidrolasa amb triada Ser-His-Asp/Glu i sovint tapadora mòbil de la interfície |
| Estructura secundària i lectura ChimeraX | α/β hidrolasa amb tapa mòbil; cal marcar triada catalítica, oxyanion hole i estat obert/tancat de la interfície lipídica |
| Lligands, cofactors o centre actiu | substrat lipídic o inhibidor covalent; la catàlisi passa per acil-enzim i hidròlisi posterior |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les lipases hidrolitzen èsters lipídics i connecten catàlisi de serina amb reconeixement d’interfícies hidrofòbiques.

### Introducció a la proteïna **Nom de la proteïna:**

Lipasa B **Organisme:** _Candida antarctica_ **Codi UniProt: ** P41365 **Gen:** LIPB\_PSEA2 **Classificació EC:** EC: 3.1.1.3

#### Estructura:

Codis PDB: * 1LBS (inclou tots els dominis) * 3ICV i 4K5Q (domini A amb molt millor resolució) * 5A71 (dominis A i B amb molt millor resolució). Atès que la Lipasa B té 6 subunitats o cadenes idèntiques, és més precís analitzar-la amb l’estructura de qualsevol dels 6 dominis que tingui major resolució. Per tant, treballarem amb el codi **4K5Q**, ja que al tenir millor resolució que el codi que inclou tots els dominis ens permetrà analitzar l’estructura secundària amb més detall i concreció.

#### Funció:

La Lipasa B és un enzim del grup de les hidrolases que està majorment implicada en la hidròlisi (degradació) de triglicèrids (lípids), per proporcionar energia i components estructurals a l’organisme. Actua trencant els enllaços èster dels triacilglicèrids, alliberant àcids grassos i glicerol, que després poden ser metabolitzats. Aquesta funció és essencial per al reciclatge de nutrients i l’adaptació d’organismes com Candida antarctica a diferents fonts de carboni en el seu medi natural. També s’ha vist que pot tenir rols importants en la síntesi de glucolípids.

### Treball amb l’aplicació ChimeraX

#### Estructures secundàries

La Lipasa B té 6 cadenes idèntiques (A, B, C, D, E, F). Cadascuna compta amb una estructura secundària ben definida que li confereix estabilitat i funcionalitat en la seva activitat catalítica. Aquesta estructura està composta principalment per **hèlixs α, làmines β i llaços o girs**, cadascun dels quals té un paper fonamental en la conformació i activitat de l’enzim. Les **hèlixs α** són una de les estructures predominants en la lipasa B i es troben estabilitzades per **ponts d’hidrogen interns**. Aquestes estructures helicoidals contribueixen a la **flexibilitat i estabilitat** de l’enzim.. Les **làmines β** constitueixen una altra part essencial de l’arquitectura secundària de l’enzim. Aquestes estructures estan estabilitzades per **ponts d’hidrogen entre cadenes polipeptídiques adjacents**, que poden ser **paral·leles o antiparal·leles** segons el seu sentit. A més, aquestes làmines formen part del **nucli hidrofòbic** de l’enzim, ajudant a protegir els residus apolars del contacte amb el medi aquós i conferint estabilitat a l’estructura tridimensional. Els **girs i llaços** tenen la funció de connectar les hèlixs α i les làmines β, permetent la flexibilitat necessària per als **canvis conformacionals** que tenen lloc durant la catàlisi. Aquestes regions també són importants per la seva **interacció amb el medi extern** (normalment aigua), ja que estabilitzen certes conformacions mitjançant **ponts d’hidrogen amb molècules d’aigua** i altres forces electrostàtiques. A més dels **ponts d’hidrogen**, hi ha altres interaccions internes contribueixen a la conformació estable de la lipasa B. Entre elles, destaquen les **interaccions hidrofòbiques**, que mantenen agrupats els residus no polars en el centre de l’enzim, i els **enllaços iònics**, que es formen entre residus carregats positivament i negativament, reforçant l’estabilitat estructural. En general, la combinació d’aquestes estructures secundàries i les seves interaccions internes proporciona a la lipasa B de _Candida antarctica_ una elevada **estabilitat estructural i funcionalitat enzimàtica**, fent-la una eina essencial en aplicacions industrials com la síntesi de biodièsel, la indústria farmacèutica i l’elaboració de productes alimentaris modificats. Al visualitzar la seqüència de cada subunitat de manera individual, les zones marcades en color groc són **hèlixs α**, mentre que les marcades en verd són **làmines β**. Té una llargada de 317 aminoàcids, amb el primer sent una Leucina i l’últim una Prolina.

#### Estructures supersecundàries

En l’estructura de la Lipasa B de Candida antarctica, es poden identificar diversos motius d’estructura supersecundària (combinacions d’elements secundaris estabilitzats per enllaços no covalents), visibles en les figures 3. Entre aquests, destaquen els motius α-β-α, en què una làmina β es troba limitada per dues hèlixs α (Figura 4), estabilitzades per ponts d’hidrogen (marcat en vermell a les imatges de la figura 3). També es poden observar làmines β paral·leles disposades en un pla torsionat, estabilitzades per ponts d’hidrogen (primera figura de la Figura 3).

#### Estructura terciària

#### **L'estructura terciària de la proteïna, a quin tipus de plegament correspon?

Busqueu el plegament a la [base de dades SCOP](https://scop.berkeley.edu)**, anoteu el codi que us dona aquesta base de dades per al plegament i mostreu la jerarquia d’aquest plegament. En cas que existeixi estructura quaternària, discutiu-la també. Pel que fa a l’estructura quaternària, la Lipasa B és un hexàmer, ja que està formada per sis subunitats idèntiques que interaccionen entre elles per formar un complex funcional.

#### Centre actiu

La Lipasa B té un centre actiu format per Ser105-His224-Asp187, que és característic de moltes lipases i altres hidrolases de la família α/β. La serina (Ser105) actua com a nucleòfil, realitzant l’atac directe sobre l’enllaç èster del substrat, mentre que la histidina (His224) facilita aquest procés actuant com a base general. L’àcid aspàrtic (Asp187) estabilitza la histidina mitjançant interaccions electrostàtiques.
L’estructura resolta al PDB amb el codi 4K5Q inclou la presència d’un inhibidor, el metilhexanoat, que simula la interacció amb el substrat natural (lípids). Aquest inhibidor estableix ponts d’hidrogen amb la histidina i l’àcid aspàrtic del centre actiu, i gràcies a les interaccions hidrofòbiques amb altres residus del centre catalític es facilita la seva unió. A més, el centre actiu es troba parcialment cobert per un “tap” estructural, un element característic de les lipases que regula l’accés del substrat al lloc catalític i que es reconfigura quan la proteïna interacciona amb una superfície lipídica.

#### Funció de la proteïna

Les lipases són hidrolases, que són enzims que catalitzen la ruptura d’enllaços per mitjà de l'addició d’aigua. La Lipasa B de _Candida antarctica_ (CalB) és un enzim que catalitza la hidròlisi d'èsters, especialment triglicèrids, mitjançant un mecanisme basat en una tríada catalítica formada per Serina 105 (Ser105), Histidina 224 (His224) i Aspàrtic 187 (Asp187)(Fojan et al., 2000). Aquesta és la reacció catalítica:**Triacylglycerol + H(2)O = diacylglycerol + a carboxylate**. La Lipasa B (CalB), quan entra en contacte amb una interfície aigua-lípid, l’enzim adopta una conformació catalíticament activa(Pleiss, Fischer, & Schmid, 1998). Un cop ha entrat en aquesta fase, el substrat (triglicèrid o èster) entra a l'interior del centre actiu de l’enzim. La Serina 105 actua com a nucleòfil i està preparada per atacar l'enllaç èster del substrat (Uppenberg et al., 1995). Quan la serina ataca el carboni carbonílic del substrat, es forma un intermedi acil-enzim covalent. En aquest procés: * La Histidina 224 actua com a base general, facilitant la transferència de protons i activant la serina. * L'Aspàrtic 187 estabilitza la histidina mitjançant un pont d’hidrogen(Fojan et al., 2000). Aquest pas és fonamental per a la catàlisi i determina la velocitat de reacció. Després de la formació de l'intermedi, una molècula d’aigua ataca l'enllaç acil-enzim, provocant la ruptura de l'enllaç èster i la formació del producte final (un àcid gras i un monoglicèrid/glicerol)(Uppenberg et al., 1995). Això permet que l’enzim torni al seu estat original i pugui catalitzar una nova reacció. El centre actiu de l’enzim es troba a la part hidrofòbica del enzim, el qual facilita la interacció amb els substrats lipídics. Addicionalment, l’estructura α/β proporciona estabilitat a la proteïna. Com hem comentat anteriorment, el centre actiu està conformat per Ser105-His224-Asp187. Mutacions com la S105A, en què la serina del centre actiu (posició 105) es substitueix per una alanina, provoquen la pèrdua total d’activitat catalítica, ja que la serina és imprescindible per al trencament de l’enllaç èster. De manera similar, la mutació H224Q, que substitueix la histidina per una glutamina, redueix dràsticament l’activitat de l’enzim, ja que la histidina també és fonamental per activar la serina durant la catàlisi. Tot i així, a diferència de l’anterior, només redueix la velocitat, però segueix permetent l’activitat enzimàtica.

## Arquitectura molecular

Les lipases presenten un nucli d’hidrolasa i superfícies hidrofòbiques adequades per treballar en interfícies oli-aigua. En molts casos, una tapa regula l’accés al centre actiu.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura1_a.png' | relative_url }}" alt="Figura 1 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Lipasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura1_b.png' | relative_url }}" alt="Figura 2 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Lipasa: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

El mecanisme usa una serina nucleòfila, intermedi acil-enzim i hidròlisi final. L’activació interfacial connecta moviment estructural i accés del substrat lipídic.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/lipase_mechanism.jpg' | relative_url }}" alt="Mecanisme catalític d’una lipasa amb serina nucleòfila i intermedi acil-enzim. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Mecanisme catalític d’una lipasa amb serina nucleòfila i intermedi acil-enzim. Font: <a href="https://commons.wikimedia.org/wiki/File:Mecanisme_catal%C3%ADtic_de_la_lipasa.jpg">Wikimedia Commons, Mecanisme catalític de la lipasa</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Brzozowski et al., 1991).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura2.png' | relative_url }}" alt="Figura 3 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Lipasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura3_a.png' | relative_url }}" alt="Figura 4 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Lipasa: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

En lipases secretades poden aparèixer ponts disulfur o glicosilació segons organisme; cal comprovar-los sobre la seqüència concreta. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura3_b.png' | relative_url }}" alt="Figura 5 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Lipasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura3_c.png' | relative_url }}" alt="Figura 6 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Lipasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura3_d.png' | relative_url }}" alt="Figura 7 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Lipasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura4.png' | relative_url }}" alt="Figura 8 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Lipasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura5.png' | relative_url }}" alt="Figura 9 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Lipasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/figura6_a.png' | relative_url }}" alt="Figura 10 del grup M 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Lipasa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Brzozowski, A. M. et al. (1991). *A model for interfacial activation in lipases from the structure of a fungal lipase-inhibitor complex*. *Nature*. [doi: 10.1038/351491a0](https://doi.org/10.1038/351491a0).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup M/practica_1_QEP/Pràctica1_definitiva2_GrupM.md' | relative_url }}">pàgina original del grup M</a>.
