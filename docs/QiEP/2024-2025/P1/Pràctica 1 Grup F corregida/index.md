---
title: "DNA ligasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-F-corregida/
author: "Marc Conde, Marc Sánchez, Adrià Segura"
---

<p class="qiep-group-label"><strong>Grup F</strong> · Química i Enginyeria de Proteïnes 2024-2025</p> Autors del treball original: **Marc Conde, Marc Sánchez, Adrià Segura**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P18858|DNLI1_HUMAN DNA ligase 1 OS=Homo sapiens OX=9606 GN=LIG1 PE=1 SV=1 | 2024-2025 | seqüència problema
MQRSIMSFFHPKKEGKAKKPEKEASNSSRETEPPPKAALKEWNGVVSESDSPVKRPGRKAARVLGSEGEEEDEALSPAKG
QKPALDCSQVSPPRPATSPENNASLSDTSPMDSSPSGIPKRRTARKQLPKRTIQEVLEEQSEDEDREAKRKKEEEEEETP
KESLTEAEVATEKEGEDGDQPTTPPKPLKTSKAETPTESVSEPEVATKQELQEEEEQTKPPRRAPKTLSSFFTPRKPAVK
KEVKEEEPGAPGKEGAAEGPLDPSGYNPAKNNYHPVEDACWKPGQKVPYLAVARTFEKIEEVSARLRMVETLSNLLRSVV
ALSPPDLLPVLYLSLNHLGPPQQGLELGVGDGVLLKAVAQATGRQLESVRAEAAEKGDVGLVAENSRSTQRLMLPPPPLT
ASGVFSKFRDIARLTGSASTAKKIDIIKGLFVACRHSEARFIARSLSGRLRLGLAEQSVLAALSQAVSLTPPGQEFPPAM
VDAGKGKTAEARKTWLEEQGMILKQTFCEVPDLDRIIPVLLEHGLERLPEHCKLSPGIPLKPMLAHPTRGISEVLKRFEE
AAFTCEYKYDGQRAQIHALEGGEVKIFSRNQEDNTGKYPDIISRIPKIKLPSVTSFILDTEAVAWDREKKQIQPFQVLTT
RKRKEVDASEIQVQVCLYAFDLIYLNGESLVREPLSRRRQLLRENFVETEGEFVFATSLDTKDIEQIAEFLEQSVKDSCE
GLMVKTLDVDATYEIAKRSHNWLKLKKDYLDGVGDTLDLVVIGAYLGRGKRAGRYGGFLLASYDEDSEELQAICKLGTGF
SDEELEEHHQSLKALVLPSPRPYVRIDGAVIPDHWLDPSAVWEVKCADLSLSPIYPAARGLVDSDKGISLRFPRFIRVRE
DKQPEQATTSAQVACLYRKQSQIQNQQGEDSGSDPEDTY
```

Seqüència recuperada de UniProt P18858. Longitud: 919 aminoàcids. Cisteïnes: 87, 280, 434, 508, 532, 565, 656, 719, 794, 846, 895.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a DNA ligasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P18858/P12004 segons isoforma analitzada; gen: LIG1 o lligasa relacionada |
| EC / BRENDA | 6.5.1.1 |
| Estructura principal | 7QNZ |
| Plegament o família | enzim modular que envolta DNA escindit; dominis d’unió a DNA i domini adenilació/OB-fold |
| Estructura secundària i lectura ChimeraX | enzim modular que envolta DNA; cal descriure dominis d’unió a DNA, domini d’adenilació i contactes amb el DNA escindit |
| Lligands, cofactors o centre actiu | DNA amb osca, ATP/AMP o intermedis adenilats; el mecanisme passa per adenilació de Lys, transferència a DNA i segellat fosfodièster |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La DNA ligasa segella trencaments del DNA mitjançant una química d’adenilació i tancament d’enllaços fosfodièster.

## Pràctica 1

### Relacions estructura-funció de proteïnes

#### DNA ligase 1
***Sobre la proteïna:***
**Proteïna amb seqüència:** MQRSIMSFFHPKKEGKAKKPEKEASNSSRETEPPPKAALKEWNGVVSESDSPVKRPGRKAARVLGSEGEEEDEALSPAKGQKPALDCSQVSPPRPATSPENNASLSDTSPMDSSPSGIPKRRTARKQLPKRTIQEVLEEQSEDEDREAKRKKEEEEEETPKESLTEAEVATEKEGEDGDQPTTPPKPLKTSKAETPTESVSEPEVATKQELQEEEEQTKPPRRAPKTLSSFFTPRKPAVKKEVKEEEPGAPGKEGAAEGPLDPSGYNPAKNNYHPVEDACWKPGQKVPYLAVARTFEKIEEVSARLRMVETLSNLLRSVVALSPPDLLPVLYLSLNHLGPPQQGLELGVGDGVLLKAVAQATGRQLESVRAEAAEKGDVGLVAENSRSTQRLMLPPPPLTASGVFSKFRDIARLTGSASTAKKIDIIKGLFVACRHSEARFIARSLSGRLRLGLAEQSVLAALSQAVSLTPPGQEFPPAMVDAGKGKTAEARKTWLEEQGMILKQTFCEVPDLDRIIPVLLEHGLERLPEHCKLSPGIPLKPMLAHPTRGISEVLKRFEEAAFTCEYKYDGQRAQIHALEGGEVKIFSRNQEDNTGKYPDIISRIPKIKLPSVTSFILDTEAVAWDREKKQIQPFQVLTTRKRKEVDASEIQVQVCLYAFDLIYLNGESLVREPLSRRRQLLRENFVETEGEFVFATSLDTKDIEQIAEFLEQSVKDSCEGLMVKTLDVDATYEIAKRSHNWLKLKKDYLDGVGDTLDLVVIGAYLGRGKRAGRYGGFLLASYDEDSEELQAICKLGTGFSDEELEEHHQSLKALVLPSPRPYVRIDGAVIPDHWLDPSAVWEVKCADLSLSPIYPAARGLVDSDKGISLRFPRFIRVREDKQPEQATTSAQVACLYRKQSQIQNQQGEDSGSDPEDTY
**Proteïna trobada:** P18858
**Nom del gen:** DNLI1_HUMAN DNA ligase 1
**Organisme:** Homo Sapiens
**EC:** 6.5.1.1
**PBD:** 7QNZ (1-919) 4.58 Å
**Funció:** lligasa de l’ADN que segella els talls monocatenaris en doble cadena durant la reparació de l’ADN. També participen en la replicació de l’ADN i la recombinació de l’ADN. Té activitat catalítica i un cofactor (Mg2+). ***2. Treball amb ChimeraX***
**Tipus d'estructures secundàries:**
El tipus d'estructures secundàries que conté la proteïna són:
- **Hèlix-α:** Format per un total de 3448 àtoms, 3463 bonds (enllaços) i 443 residus repartits en 2 estructures (Humann LIG1 i Human PCNA), també, aquesta estructura està constituïda per 386 pseudoenllaços que tots aquests representen ponts d’hidrogen.
- **β-sheet (strand):** Format per un total de 3678 àtoms, 3671 bonds (enllaços) i 470 residus repartits en 2 estructures (Human LIG1 i Human PCNA), també, aquesta estructura està constituïda per 390 pseudoenllaços que tots aquests representen ponts d’hidrogen.
- **β-turns(llaços):** Format per un total de 3527 àtoms, 3475 bonds (enllaços) i 477 residus repartatis en 2 estructures(Human LIG1 i Human PCNA), també, aquesta estructura està constituida per 151 pseudoenllaços que tots aquests representen ponts d’hidrogen **Motius d'estructura supersecundària:**
Si que trobem estructures supersecundàries, l’estructura Human PCNA està formada quasi en la seva totalitat per β-meander motifs, compostos de dues o més cadenes β antiparal·leles consecutives unides entre si per hairpin bucles. L'estructura Human LIG1 forma algunes hèlix-gir-hèlix, aquests motius li conferèixin la capacitat a la LIG1 d’unir-se al DNA; el monòmer incorpora dues hèlixs α, unides per una cadena curta d'aminoàcids, que s'uneixen al solc gran de l’ADN. fFigura 10: figura pròpia que mostra les interaccions de van der Waals del hèlix-gir-hèlix (ChimeraX). **Estructura terciària:**
El tipus de plegament de l’estructura terciària de la Human PCNA és: El tipus de plegament de l’estructura terciària de la Human LIG1 és: ***3. Funció de la proteïna***
Centre actiu:
Per trobar el centre actiu hem buscat el substrat d’aquest, què és l'adenosina monofosfat (AMP). Mitjançant el substrat les proteïnes que es trobin al costat de l’AMP, formin ponts d’hidrogen o interaccions electrostàtiques fortes i siguin conegudes per estar conservades en altres DNA-ligases són els residus funcionals que formen part del centre actiu, com és el cas de: Lisina 568, Glutamat 720 i Glutamat 621, Arginina 573, Tirosina 567 (Tyr 567) i Fenilalanina 860 (Phe 860), entre d'altres com pot ser la Metionina 723. D'aquests podem destacar la lisina 568, que és un residu important, formant un enllaç covalent amb l’AMP en l’enzim. **Funció de la proteïna:** La DNA-ligasa catalitza la unió entre dos fragments d’ADN formant un enllaç fosfodièster. Aquest enllaç uneix l'extrem 3'-OH i el 5'-P. Per a dur a terme aquest procés, consumeix una molècula d’ATP, alliberant AMP i PPi. La PCNA és una altra proteïna que s'uneix a la LIG1 per fixar la ligasa a la cadena d’ADN i garantir el seu funcionament correcte. La LIG1 està conformada per tres dominis diferents:
- **Domini N-terminal:** el qual és l'utilitzat per interaccionar amb altres proteïnes com la PCNA, fet que permet la localització de la ligasa en els llocs de reparació i replicació del DNA. El motiu que actua per tal d’unir-se a la PCNA és el PIPN-term, el qual conté residus que interaccionen amb la PCNA, a més, aquest motiu, a diferència d'altres, té una estructura desordenada i flexible, és per això que podrà acoblar-se d’una millor forma a la PCNA. Aquest domini està format per residus polars, els quals faciliten la interacció entre diferents proteïnes, a més d'aportar-hi flexibilitat. És en aquest domini on trobem també el motiu PIP DBD, el qual serà l'encarregat de mantenir la unió entre LIG1 i PCNA, un cop el motiu PIPN-term deixi d'interaccionar entre aquests dos monòmers quan el DNA entri al complex. El PIP DBD un motiu amb baixa afinitat per la PCNA, conferint flexibilitat i dinamisme a LIG1 per realitzar la seva funció.
- **Domini central catalític:** Lloc catalític el qual és l'encarregat de realitzar la reacció de lligació de l’ADN. Aquest domini conté residus conservats de lisina, els quals s'uneixen a l’AMP i són especials per a la catàlisi. Aquest domini és altament conservat amb regions hèlix i làmines β que estabilitzen la reacció amb l’ADN.
- **Domini C-terminal:** Aquest és important per tal d'estabilitzar el complex ADN-ligasa, assegurant la correcta orientació durant la reacció de la ligasa. Conté residus hidrofòbics i amb càrrega, els quals ajuden a estabilitzar la interacció amb la doble hèlix d’ADN. Per a la PCNA tenim només dos dominis:
- **Domini N-terminal i Domini C-terminal:** Els dominis N-terminal i C-terminal de PCNA són topològicament idèntics. Tres molècules de PCNA estan estretament associades per formar un anell tancat que envolta l’ADN dúplex. La relació seqüència-estructura-funció del complex Lig1–DNA–PCNA és essencial durant la síntesi de cadena retardada, l’ADN Ligasa 1 (Lig1) coopera amb la pinça lliscant PCNA per segellar els talls monocatenaris entre els fragments d'Okazaki generats per Pol δ i Flap endonucleasa 1 (FEN1). La unió de la PCNA a la regió N-terminal de la LIG1 ocorre a través del motiu PIPN-term, que actua com un primer ancoratge a PCNA. Abans de la regió d’unió a l’ADN (PIPDBD) de la LIG1 s'involucri, PIPN-term manté la LIG1 unida a PCNA, encara que en una varietat d'orientacions a causa de la flexibilitat conformacional del domini N-terminal. El motiu PIPN-term és una seqüència específica a la regió N-terminal de la lliga 1 (LIG1) que conté un PIP-box (Proliferating Cell Nuclear Antigen-Interacting Protein box). Aquest motiu permet la interacció inicial de LIG1 amb PCNA, ja que PIPN-term s'uneix al segon monòmer de PCNA, facilitant així el reclutament i estabilització de la unió. El complex LIG1-PCNA repara els talls monocatenaris a l’ADN mitjançant un procés coordinat en què també participa FEN1(Flap Endonuclease 1). Tot comença quan FEN1, unit a un dels monòmers de PCNA, talla els fragments sobrants de l’ADN a la regió del tall monocatenari i el manté doblegat en una posició exposada sobre la cara frontal de l’anell de PCNA. Aquesta disposició deixa l’ADN accessible per a la interacció següent amb la lligasa (LIG1). A continuació, LIG1 s'uneix a un altre monòmer lliure de PCNA mitjançant el domini PIPDBD, cosa que facilita la transferència de l’ADN des de FEN1 cap al seu lloc actiu. La flexibilitat del domini OBD de LIG1 permet que l’ADN passi d’un lloc a un altre sense dificultat, un procés conegut com a transferència directa. Durant aquest pas intermedi, la conformació de LIG1 s'ajusta per rebre l’ADN, assegurant que el domini DBD-AdD estigui obert i llest per abraçar la molècula entrant. Un cop l’ADN és completament envoltat per la lligasa, el domini OBD es tanca sobre el fil, estabilitzant-lo dins de la seva estructura. Finalment, LIG1 catalitza la formació de l'enllaç fosfodièster, segella el tall monocatenari i restaura la continuïtat de la doble hèlix. D'aquesta manera, PCNA actua com a plataforma d'intercanvi que permet la transferència de l’ADN des de FEN1 a LIG1, assegurant una reparació eficient i precisa de l’ADN. **Bibliografia** Georgescu, R. E., Yao, N. Y., & O'Donnell, M. E. (2022). Mechanism of human Lig1 regulation by PCNA in Okazaki fragment maturation. Nature Communications, 13, 7782. https://doi.org/10.1038/s41467-022-35475-z InterPro. (s. f. ). ATP5F1A protein domain analysis. European Bioinformatics Institute (EBI). Recuperat el 2 de marzo de 2025, de https://www.ebi.ac.uk/interpro/protein/UniProt/P18858/entry/pfam/#table InterPro. (s. f. ). ATP5F1B protein domain analysis. European Bioinformatics Institute (EBI). Recuperat el 2 de marzo de 2025, de https://www.ebi.ac.uk/interpro/protein/UniProt/P12004/entry/pfam/#table PDBsum. (s. f. ). Structural summaries of proteins. European Bioinformatics Institute (EBI). Recuperat el 2 de marzo de 2025, de https://www.ebi.ac.uk/thornton-srv/databases/pdbsum/ RCSB PDB. (s. f. ). 7QNZ: Cryo-EM structure of human mitochondrial ATP synthase. RCSB Protein Data Bank. Recuperat el 2 de marzo de 2025, de https://www.rcsb.org/structure/7QNZ UniProt. (s. f. ). P18858 - ATP5F1A (Homo sapiens). UniProt. Recuperat el 2 de marzo de 2025, de https://www.uniprot.org/uniprotkb/P18858/entry UniProt. (s. f. ). P12004 - ATP5F1B (Homo sapiens). UniProt. Recuperat el 2 de marzo de 2025, de https://www.uniprot.org/uniprotkb/P12004/entry

## Arquitectura molecular

La DNA ligasa és una màquina modular que envolta el DNA i alinea extrems trencats. El tancament de dominis és tan important com la química del centre actiu.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_1.jpg' | relative_url }}" alt="Figura 1 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> DNA ligasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_10.jpg' | relative_url }}" alt="Figura 2 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> DNA ligasa: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

El mecanisme té tres etapes: adenilació de l’enzim, transferència d’AMP al fosfat 5’ del DNA i atac del 3’-OH per formar l’enllaç fosfodièster.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/dna_ligase_nick.jpg' | relative_url }}" alt="Reparació d’un tall al DNA per DNA ligasa: alineament d’extrems i formació de l’enllaç fosfodièster. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Reparació d’un tall al DNA per DNA ligasa: alineament d’extrems i formació de l’enllaç fosfodièster. Font: <a href="https://commons.wikimedia.org/wiki/File:Ligase_nick_repair_mecanism.jpg">Wikimedia Commons, Ligase tall monocatenari repair mechanism</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Pascal et al., 2004).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_11.jpg' | relative_url }}" alt="Figura 3 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> DNA ligasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_12.jpg' | relative_url }}" alt="Figura 4 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> DNA ligasa: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

En lligases eucariotes poden ser rellevants fosforilacions o regulació de cicle cel·lular; només s’han de transferir si corresponen a la isoforma exacta. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_13.jpg' | relative_url }}" alt="Figura 5 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> DNA ligasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_14.jpg' | relative_url }}" alt="Figura 6 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> DNA ligasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_15.jpg' | relative_url }}" alt="Figura 7 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> DNA ligasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_16.jpg' | relative_url }}" alt="Figura 8 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> DNA ligasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_17.jpg' | relative_url }}" alt="Figura 9 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> DNA ligasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/FIGURES/FIGURA_18.jpg' | relative_url }}" alt="Figura 10 del grup F 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> DNA ligasa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Pascal, J. M. et al. (2004). *Human DNA ligase I completely encircles and partially unwinds tall monocatenaried DNA*. *Nature*. [doi: 10.1038/nature03082](https://doi.org/10.1038/nature03082).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup F/Practica Markdown.md' | relative_url }}">pàgina original del grup F</a>.
