---
title: "Traslocasa SecA"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-G-corregida/
author: "Oriol Monte & Ainhoa González"
---

<p class="qiep-group-label"><strong>Grup G</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>

Autors del treball original: **Oriol Monte & Ainhoa González**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P10408|SECA_ECOLI Protein translocase subunit SecA OS=Escherichia coli (strain K12) OX=83333 GN=secA PE=1 SV=2 | 2024-2025 | seqüència problema
MLIKLLTKVFGSRNDRTLRRMRKVVNIINAMEPEMEKLSDEELKGKTAEFRARLEKGEVLENLIPEAFAVVREASKRVFG
MRHFDVQLLGGMVLNERCIAEMRTGEGKTLTATLPAYLNALTGKGVHVVTVNDYLAQRDAENNRPLFEFLGLTVGINLPG
MPAPAKREAYAADITYGTNNEYGFDYLRDNMAFSPEERVQRKLHYALVDEVDSILIDEARTPLIISGPAEDSSEMYKRVN
KIIPHLIRQEKEDSETFQGEGHFSVDEKSRQVNLTERGLVLIEELLVKEGIMDEGESLYSPANIMLMHHVTAALRAHALF
TRDVDYIVKDGEVIIVDEHTGRTMQGRRWSDGLHQAVEAKEGVQIQNENQTLASITFQNYFRLYEKLAGMTGTADTEAFE
FSSIYKLDTVVVPTNRPMIRKDLPDLVYMTEAEKIQAIIEDIKERTAKGQPVLVGTISIEKSELVSNELTKAGIKHNVLN
AKFHANEAAIVAQAGYPAAVTIATNMAGRGTDIVLGGSWQAEVAALENPTAEQIEKIKADWQVRHDAVLEAGGLHIIGTE
RHESRRIDNQLRGRSGRQGDAGSSRFYLSMEDALMRIFASDRVSGMMRKLGMKPGEAIEHPWVTKAIANAQRKVESRNFD
IRKQLLEYDDVANDQRRAIYSQRNELLDVSDVSETINSIREDVFKATIDAYIPPQSLEEMWDIPGLQERLKNDFDLDLPI
AEWLDKEPELHEETLRERILAQSIEVYQRKEEVVGAEMMRHFEKGVMLQTLDSLWKEHLAAMDYLRQGIHLRGYAQKDPK
QEYKRESFSMFAAMLESLKYEVISTLSKVQVRMPEEVEELEQQRRMEAERLAQMQQLSHQDDDSAAAAALAAQTGERKVG
RNDPCPCGSGKKYKQCHGRLQ
```

Seqüència recuperada de UniProt P10408. Longitud: 901 aminoàcids. Cisteïnes: 98, 885, 887, 896.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a traslocasa SecA. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P10408; gen: secA |
| EC / BRENDA | 7.4.2.8 |
| Estructura principal | 2FSF |
| Plegament o família | ATPasa motora amb dominis NBD/HSD/HWD/PPXD que canvien de disposició durant el cicle de translocació |
| Estructura secundària i lectura ChimeraX | motor SecA amb dominis NBD i dominis de moviment; cal relacionar estat nucleotídic, solc de preproteïna i canvis conformacionals |
| Lligands, cofactors o centre actiu | ATP/ADP i interacció amb preproteïna/SecYEG; no és un centre actiu enzimàtic clàssic sinó un motor ATP-dependent |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. SecA és una ATPasa de translocació que acobla hidròlisi d’ATP i transport de proteïnes a través del sistema Sec.

### Pràctica 1.
| Seqüencia proteïna: |
| |
| MLIKLLTKVFGSRNDRTLRRMRKVVNIINAMEPEMEKLSDEELKGKTAEFRARLEKGEVLENLIPEAFAVVREASKRVFGMRHFDVQLLGGMVLNERCIAEMRTGEGKTLTATLPAYLNALTGKGVHVVTVNDYLAQRDAENNRPLFEFLGLTVGINLPGMPAPAKREAYAADITYGTNNEYGFDYLRDNMAFSPEERVQRKLHYALVDEVDSILIDEARTPLIISGPAEDSSEMYKRVNKIIPHLIRQEKEDSETFQGEGHFSVDEKSRQVNLTERGLVLIEELLVKEGIMDEGESLYSPANIMLMHHVTAALRAHALFTRDVDYIVKDGEVIIVDEHTGRTMQGRRWSDGLHQAVEAKEGVQIQNENQTLASITFQNYFRLYEKLAGMTGTADTEAFEFSSIYKLDTVVVPTNRPMIRKDLPDLVYMTEAEKIQAIIEDIKERTAKGQPVLVGTISIEKSELVSNELTKAGIKHNVLNAKFHANEAAIVAQAGYPAAVTIATNMAGRGTDIVLGGSWQAEVAALENPTAEQIEKIKADWQVRHDAVLEAGGLHIIGTERHESRRIDNQLRGRSGRQGDAGSSRFYLSMEDALMRIFASDRVSGMMRKLGMKPGEAIEHPWVTKAIANAQRKVESRNFDIRKQLLEYDDVANDQRRAIYSQRNELLDVSDVSETINSIREDVFKATIDAYIPPQSLEEMWDIPGLQERLKNDFDLDLPIAEWLDKEPELHEETLRERILAQSIEVYQRKEEVVGAEMMRHFEKGVMLQTLDSLWKEHLAAMDYLRQGIHLRGYAQKDPKQEYKRESFSMFAAMLESLKYEVISTLSKVQVRMPEEVEELEQQRRMEAERLAQMQQLSHQDDDSAAAAALAAQTGERKVGRNDPCPCGSGKKYKQCHGRLQ |

## Preprotein translocase dimeric ATPase

### Informació sobre la proteïna
**Nom del gen**: secA
**Codi UniProt**: P10408
**Classificació de l’enzim**: EC 7.4.2.8.
**Codi PDB**: 2FSF Hi ha més d’una estructura disponible per a la proteïna a estudiar. Per això, fem una cerca amb blastp amb base de dades PDB. Els resultats obtinguts és el codi proporcionat de PDB on el query coverage és juntament amb la identitat de 100%. Aquests valors ens indiquen que tota la seqüència aportada es troba en aquesta estructura. L'enzim pertany a *Escherichia coli*. **La translocasa de preproteïnes amb activitat ATPasa dimèrica**, correspon a la subunitat **SecA** del sistema Sec en bacteris. SecA és una ATPasa que impulsa la translocació de preproteïnes a través del canal de translocació format pel complex SecYEG a la membrana interna bacteriana utilitzant energia de la hidròlisi d’ATP. > *Figura 1: Model amb la via explicada A i una a alternativa B per l'activació de SecA > *Figura 2: Estructura cristalizada Preprotein translocase dimeric ATPase representada amb molècules aigua. Es pot observar que hi ha cadena A (vermell) i cadena B (verd)*

### Estructura proteïna. Treball amb ChimeraX
La proteïna 2FSF és l’estructura cristal·lina de la seca de l'E. coli. És un enzim, i està format per dues cadenes, les quals a ChimeraX anomena A i B.
Aquesta proteïna té tres tipus destructura secundària, ja que té: làmines β, hèlixs α i girs β. Les làmines β semblen anar en sentit antiparal·lel en algunes parts, mentre que en altres són paral·leles. Té estructures enllaçants.
Hi ha part de la seqüència de la proteïna que no té estructura secundària, que podem considerar com només la cadena d'aminoàcids a la seva estructura primària. > *Figura 3: Mostra de l’estructura secundària de la proteïna 2FSF. Representació de les hèlix α (blau) amb els ponts d’hidrogen presents (1424). * > *Figura 4: Mostra de l’estructura secundària de la proteïna 2FSF. Representació de les làmines β (vermell) amb els ponts d’hidrogen presents (228). * > *Figura 5: Mostra de l’estructura secundària de la proteïna 2FSF. Representació dels girs β (lila) amb els ponts d’hidrogen presents (594). *

#### Motius d'estructura supersecundària i interaccions
L'estructura de SecA presenta motius d'estructura supersecundària, com hèlixs α i làmines β organitzades en dominis funcionals. Aquests motius faciliten la interacció de SecA amb altres proteïnes i components de la membrana durant la translocació de preproteïnes.
Les hèlixs α i les làmines β de SecA estan estabilitzades per:
**Ponts d’hidrogen**: Entre els grups carbonil i amino de l'esquelet peptídic. > *Figura 6: Mostra de l’estructura secundària de la proteïna 2FSF. Representació dels ponts d’hidrogen totals (2544). * > *Figura 7: Ponts d’hidrogen on estabilitzen l’estructura entre les hèlix α i les làmines β. > *Figura 8: Regions seleccionades en verd: A: 10-20 &: A: 50-70 &: A: 100-120 &: A: 200-220. > *Figura 9: Zoom in a les regions seleccionades en verd fosfor poden contenir hèlixs embolicades. β-hairpin --> EDSYRKQVVIDGETCLLDILDT
P-bucle / Walker motif -->	GAGGVGKS
Motius β-α-β --> SAMRDQYMRTGEGFLCVFAINNTKSFEDIHQYREQIKRVKDSDDVPMVL VGNKCDLAARTVESRQAQDLARSYGIPYIETSAKTRQGVEDAFYTLVREIR **Interaccions de van der Waals**: Entre les cadenes laterals dels aminoàcids propers. L'estructura terciària de SecA es caracteritza per dominis rics en hèlixs α i làmines β, formant una arquitectura complexa que facilita la seva funció com a motor ATPàsic en la translocació de proteïnes.
SecA funciona com a dímer en el seu estat actiu. Aquesta estructura és quaternària i és molt important per a la seva funció en la translocació de proteïnes, ja que permet la interacció eficient amb el complex de translocació SecYEG i la translocació efectiva de preproteïnes a través de la membrana citoplasmàtica

#### Cerca del plegament a la base de dades

SCOP La proteïna es classifica de la següent manera dins de SCOP:
1. Classe g: Small proteins [56992] → Proteïnes petites que depenen d’ions metàl·lics o ponts disulfur per a la seva estabilitat.
2. Plegament g. 74: Sec-C motif [103641] → Plegament unit a metalls (zinc).
3. Superfamília g. 74.1: Sec-C motif [103642] → Conté proteïnes amb funció similar.
4. Família g. 74.1.1: Sec-C motif [103643] → Família específica dins de la superfamília.
5. Proteïna: Domini C-terminal de la translocasa de preproteïnes SecA [103644] > *Figura 10: Dominis segons SCOP. Preprotein translocase SecA C-terminal domain. * Es tracta d’una proteïna α/β, amb un plegament de tipus G-domain-like, el representant del qual és PDB: 1CTQ segons la classificació a SCOP.
A més, forma part de la superfamília P-bucle containing nucleotide triosephosphate hydrolases segons CATH.

### Funció de la proteïna

La cerca a InterPro (https://www.ebi.ac.uk/interpro/protein/UniProt/P10408/#table) permet explorar l'entrada per a aquest domini específic: PFAM: PF00071, i observem que es tracta d’una GTPasa. El domini concret Ras està altament distribuït, trobat en més de 1500 arquitectures diferents, vora 2000 espècies. L'estudi del logo HMM ens mostra una regió molt enriquida en glicines corresponent al P-bucle, i també la gran conservació de la Treonina 35 del fitxer PDB (posició 31 en el logo HMM), que és essencial per a la coordinació de l'ió magnesi, que participa en la reacció GTPasa, com es pot apreciar en el centre actiu de la proteïna: > *Figura 11: Centre actiu Centre actiu de la proteïna UniProt: P10408. S'aprecia que l'ió magnesi està coordinat per 6 àtoms d'oxigen: dos provinents de sengles molècules d’aigua, dos dels fosfats β i γ del GTP, un de la serina 17 i un altre de la treonina 35 (aquests dos residus, altament conservats en les posicions 13 i 31 del logo HMM). Altres residus altament conservats que s'aprecien al logo PFAM tenen tasques importants en l’activitat de la proteïna Ras. > *Figura 12: regions hidrofòbiques de la molècula.
> *Figura 13: Ilustració del b-factor de la molècula. SecA s'uneix a les preproteïnes mitjançant la seva seqüència senyal i regions riques en aminoàcids hidrofòbics, unió on es donara el procés de translocació. Les molècules d’aigua interaccionen amb SecA mitjançant ponts d’hidrogen i interaccions de van der Waals. Aquestes interaccions són importants per a l'estabilitat de l’estructura de SecA i per a la coordinació d'ions magnesi (Mg²⁺) durant la hidròlisi d’ATP.
- L'ATP s'uneix a SecA en presència d'ions magnesi (Mg²⁺), que són necessaris per a l’activitat ATPasa de SecA. > *Figura 14: Interacció secA i SecYEG SecA passa per múltiples estats conformacionals durant el cicle de translocació, qui inclouen la unió a ATP, la hidròlisi d’ATP i l'alliberament d'ADP i fosfat inorgànic SecA també interacciona amb els lípids de la membrana interna, cosa que ajuda a la seva ancoratge i estabilitat durant el procés de translocació.

#### Resum de funció i interacció

SecA | Funció/Interacció |Descripció |
| | |
| Unió a preproteïnes | SecA s'uneix a les preproteïnes mitjançant la seqüència senyal |
| Hidròlisi d’ATP | Utilitza l'energia de la hidròlisi d’ATP per impulsar la translocació |
| Interacció amb SecYEG | Forma un canal de translocació funcional amb el complex SecYEG |
| Interacció amb lípids | S'ancora a la membrana interna mitjançant interaccions amb lípids |
|Interacció amb Mg²⁺| Coordina ions magnesi per a l’activitat ATPasa |
|Interacció amb aigua| Forma ponts d’hidrogen i interaccions de van der Waals amb molècules d’aigua |

## Arquitectura molecular

SecA combina dominis d’unió a ATP amb superfícies que contacten el translocó SecYEG i la proteïna client. L’estructura s’entén com una ATPasa motora modular.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_1.png' | relative_url }}" alt="Figura 1 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Traslocasa SecA: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_10.png' | relative_url }}" alt="Figura 2 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Traslocasa SecA: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

La hidròlisi d’ATP impulsa canvis conformacionals que afavoreixen el pas de segments polipeptídics pel canal de translocació.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/secu_2fsf.jpeg' | relative_url }}" alt="Estructura de SecA com a ATPasa modular de translocació proteica. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura de SecA com a ATPasa modular de translocació proteica. Font: <a href="https://www.rcsb.org/structure/2FSF">RCSB PDB 2FSF</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Hunt et al., 2002).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_11.png' | relative_url }}" alt="Figura 3 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Traslocasa SecA: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_12.png' | relative_url }}" alt="Figura 4 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Traslocasa SecA: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

La lectura funcional se centra en variants de dominis i estat nucleotídic; les PTM no són el component principal de SecA bacteriana. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_13.png' | relative_url }}" alt="Figura 5 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Traslocasa SecA: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_14.png' | relative_url }}" alt="Figura 6 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Traslocasa SecA: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_2.png' | relative_url }}" alt="Figura 7 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Traslocasa SecA: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_3.png' | relative_url }}" alt="Figura 8 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Traslocasa SecA: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_4.png' | relative_url }}" alt="Figura 9 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Traslocasa SecA: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Figures/Fig_5.png' | relative_url }}" alt="Figura 10 del grup G 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Traslocasa SecA: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Hunt, J. F. et al. (2002). *Nucleotide control of interdomain interactions in the conformational reaction cycle of SecA*. *Science*. [doi: 10.1126/science.1074424](https://doi.org/10.1126/science.1074424). També és útil la referència estructural de SecA dimèrica: Papanikolau, Y. et al. (2007), [doi: 10.1016/j.jmb.2006.12.049](https://doi.org/10.1016/j.jmb.2006.12.049).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup G/Pràctica 1. Grup G.md' | relative_url }}">pàgina original del grup G</a>.
