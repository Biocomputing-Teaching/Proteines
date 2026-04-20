---
title: "Receptor beta-2 adrenèrgic amb fusió T4 lisozim"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-H-corregida/
author: "Estel Boix, Carla Masip, Marc Pardeiro"
---

<p class="qiep-group-label"><strong>Grup H</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>

Autors del treball original: **Estel Boix, Carla Masip, Marc Pardeiro**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC H | 2025-2026 | seqüència problema
DYKDDDDAMGQPGNGSAFLLAPNRSHAPDHDVTQQRDEVWVVGMGIVMSLIVLAIVFGNVLVITAIAKFERLQTVTNYFI
TSLACADLVMGLAVVPFGAAHILMKMWTFGNFWCEFWTSIDVLCVTASIWTLCVIAVDRYFAITSPFKYQSLLTKNKARV
IILMVWIVSGLTSFLPIQMHWYRATHQEAINCYAEETCCDFFTNQAYAIASSIVSFYVPLVIMVFVYSRVFQEAKRQLNI
FEMLRIDEGLRLKIYKDTEGYYTIGIGHLLTKSPSLNAAKSELDKAIGRNTNGVITKDEAEKLFNQDVDAAVRGILRNAK
LKPVYDSLDAVRRAALINMVFQMGETGVAGFTNSLRMLQQKRWDEAAVNLAKSRWYNQTPNRAKRVITTFRTGTWDAYKF
CLKEHKALKTLGIIMGTFTLCWLPFFIVNIVHVIQDNLIRKEVYILLNWIGYVNSGFNPLIYCRSPDFRIAFQELLCLRR
SSLKHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 490 aminoàcids. Cisteïnes: 85, 114, 124, 133, 192, 198, 199, 401, 421, 463, 477.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [6PS2](https://www.rcsb.org/structure/6PS2) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 2.4 Å. La longitud de la seqüència analitzada és de 490 aminoàcids. Registres UniProt candidats: P07550 (receptor beta-2 adrenèrgic, cobertura de l’entitat 64, 3%), D9IEF7/P00720 (lisozima T4/endolisina, domini de fusió). La interpretació principal correspon a ADRB2; els dominis de fusió s’han de discutir per separat.

| Camp | Valor |
|---|---|
| UniProt / gen | [P07550](https://www.uniprot.org/uniprotkb/P07550); gen: ADRB2 |
| EC / BRENDA | no assignat |
| Estructura principal | [6PS2](https://www.rcsb.org/structure/6PS2) entitat 1; difracció de raigs X, 2.4 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | receptor GPCR de set hèlixs transmembrana amb lisozima T4 fusionada per estabilitzar la cristal·lització |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 23, regions no assignades: 1; exemples: làmina β 267-272, 278-281, 284-287; hèlix 53-85; hèlix 86-89; hèlix 90-110; hèlix 110-120; hèlix 125-160; hèlix 170-195; hèlix 202-211 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 485-490 (HHHHHH); flag 1-7 (DYKDDDD); cisteïnes a [85, 114, 124, 133, 192, 198, 199, 401, 421, 463, 477] |

Funcionalment, el component ADRB2 és un receptor acoblat a proteïna G per catecolamines; la lisozima T4 és una fusió d’estabilització/cristal·lització i s’ha de tractar com a domini auxiliar. La interpretació funcional s’ha de centrar en el receptor i en el lligand/estat conformacional. La seqüència combina ADRB2, una fusió T4 lisozim/endolisina i etiquetes terminals. 6PS2 cobreix tota la seqüència assignada; 5D5A és una estructura compatible per a l’anàlisi del receptor.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | ADRB2-T4L |
| Estructura de referència | 6PS2 / 5D5A |
| Longitud | 490 aa |
| Trets rellevants | FLAG 1-7; His 485-490; fusió GPCR-lisozim |


### Identificació aportada pels autors

**Seqüència donada:**
DYKDDDDAMGQPGNGSAFLLAPNRSHAPDHDVTQQRDEVWVVGMGIVMSLIVLAIVFGNVLVITAIAKFERL
QTVTNYFITSLACADLVMGLAVVPFGAAHILMKMWTFGNFWCEFWTSIDVLCVTASIWTLCVIAVDRYFAIT
SPFKYQSLLTKNKARVIILMVWIVSGLTSFLPIQMHWYRATHQEAINCYAEETCCDFFTNQAYAIASSIVSF
YVPLVIMVFVYSRVFQEAKRQLNIFEMLRIDEGLRLKIYKDTEGYYTIGIGHLLTKSPSLNAAKSELDKAIG
RNTNGVITKDEAEKLFNQDVDAAVRGILRNAKLKPVYDSLDAVRRAALINMVFQMGETGVAGFTNSLRMLQQ
KRWDEAAVNLAKSRWYNQTPNRAKRVITTFRTGTWDAYKFCLKEHKALKTLGIIMGTFTLCWLPFFIVNIVH
VIQDNLIRKEVYILLNWIGYVNSGFNPLIYCRSPDFRIAFQELLCLRRSSLKHHHHHH **Nom de la proteïna:** Receptor ß-2 adrenèrgic **Organisme:** _Homo sapiens_ **Codi UniProt:** P07550 **Gen:** ADRB2

#### Estructura:

Codi PDB: * 5D5A (domini amb millor resolució) * 2R4R i 2RH1 (demés dominis) Existeixen múltiples entrades corresponents a aquesta proteïna, com ara 2R4R, 2RH1 i 5D5A, que representen diferents determinacions estructurals en diverses condicions experimentals.
S’ha seleccionat l’estructura amb codi PDB 5D5A, ja que presenta una millor resolució (2.48 Å) i una cobertura més completa de la seqüència respecte a altres estructures disponibles.
Al tenir millor resolució que tots els dominis ens permetrà analitzar l’estructura secundària amb més detall i concreció.

#### Funció:

L’ADRB2 és un receptor acoblat a proteïnes G per a catecolamines que pot activar tant les proteïnes Gs com Gi, generant vies de senyalització diferents. Té una afinitat aproximadament 30 vegades més alta per l’epinefrina que per la norepinefrina.
Al cor, l’activació per epinefrina i norepinefrina indueix una taxa de contracció ràpida i lenta dels cardiomiòcits, respectivament.
Les dues catecolamines activen principalment la via Gs/PKA, que modula la contracció dels miòcits. A més, l’epinefrina promou l'acoblament d'ADRB2 a les proteïnes G(i) per exercir efectes cardioprotectors, especialment en situacions d’hipòxia i estrès oxidatiu mitjançant la via PI3K/Akt.
Finalment, ADRB2 també pot regular el pH cel·lular de manera independent de PKA modulant l’activitat de l’intercanviador Na⁺/H⁺ (SLC9A3).

### Treball amb l’aplicació ChimeraX

#### Estructures secundàries

La interacció més important són els ponts d’hidrogen (342) (figura 2), que es formen en la interacció entre el grup carbonil i el grup amida d’aminoàcids. Són interaccions intramoleculars (a la mateixa cadena) que estabilitzen les hèlixs (menys flexible).
També podem trobar interaccions de van der Waals, entre àtoms molt propers per estabilitzar l’empaquetament de la proteïna i interaccions hidrofòbiques, que tenen més importància en estructura terciària. Al visualitzar la seqüència de cada subunitat de manera individual, les zones marcades en color groc són **hèlixs α**, mentre que les marcades en negre llima són **llaç**.

#### Estructures supersecundàries

Segons la classificació de la base de dades SCOPe, la proteïna β2-adrenèrgic (ADRB2) pertany a la família f. 13.1.3: amine receptor-like, dins del grup dels receptors acoblats a proteïnes G (GPCR). S’hi identifiquen quatre dominis estructurals corresponents a diferents estructures resoltes experimentalment al Protein Data Bank: 2r4r (figura 4), 2rh1 (figura 5), 5d5a (figura 6) i 5x7d (figura 7). Aquests dominis presenten una arquitectura molt similar i corresponen a diferents determinacions estructurals del mateix receptor en diverses condicions experimentals (diferent resolució i presència de lligands o proteïnes fusionades). Interaccions estabilitzadores
Dins l’estructura supersecundària es poden identificar diferents tipus d’interaccions:
Ponts d’hidrogen: estabilitzen les hèlixs α mitjançant interaccions entre els grups carbonil (C=O) i amida (N-H) del esquelet peptídic peptídic.
Interaccions hidrofòbiques: predominants a les regions transmembrana, on residus apolars interaccionen amb la bicapa lipídica i entre ells, contribuint a l’estabilitat del feix d’hèlixs.
Interaccions de van der Waals: entre cadenes laterals compactades dins del nucli de la proteïna, afavorint un empaquetament eficient.

#### Estructura terciària

#### Plegament terciari, dominis i estructura quaternària

 L’anàlisi de l’estructura terciària de la proteïna mitjançant CATH indica que pertany a la classe α, amb el codi CATH: 1.10.530.40 (figura 8), que correspon a una arquitectura basada en un feix d’hèlixs α transmembrana.
El codi CATH (1.10.530.40) es desglossa en els diferents nivells jeràrquics: classe (1, principalment α), arquitectura (10, Orthogonal Bundle), topologia o plegament (530, Lysozyme) i superfamília homòloga (40). Segons ECOD (P07550_F1_nD1), la proteïna s’inclou dins del grup: G protein-coupled receptor-like, que indica una relació evolutiva amb altres receptors de membrana implicats en processos de senyalització cel·lular. Pel que fa als dominis (figura 9), la proteïna presenta diversos dominis a les hèlixs α, que conformen el nucli funcional del receptor, amb regions extracel·lulars i intracel·lulars. Respecte l’estructura quaternària és principalment monomèrica, tot i que en alguns casos pot formar oligòmers.

#### Centre actiu

El centre actiu correspon al lloc d’unió del lligand situat dins del feix de les 7 hèlixs α. Aquest lloc hidrofòbic que permet la unió de molècules senyalitzadores/inhibidors, característica dels receptors acoblats a proteïna G. Segons UniProt, residus com Asp113, Ser203, Ser207 i Asn312 són rellevants en la interacció amb el lligand. L’Asp113, participa en interaccions electrostàtiques amb el lligand, mentre que les serines i l’asparagina contribueixen a la formació de ponts d’hidrogen, important per a l’estabilització del complex.
L’estructura analitzada inclou un inhibidor, el carazolol, unit al receptor. Aquest lligand ocupa el lloc d’unió a les hèlixs i interacciona amb els residus del centre actiu. Les interaccions inclouen ponts d’hidrogen entre el lligand i residus polars així com interaccions electrostàtiques. També es produeixen interaccions de van der Waals entre el lligand i els residus hidrofòbics que recobreixen la cavitat d’unió, contribuint a l’estabilització del complex receptor-lligand.

#### Funció de la proteïna

La proteïna β2-adrenèrgic (ADRB2) és un receptor de membrana de la família dels receptors acoblats a proteïnes G (GPCR) que s’uneix principalment a catecolamines com l’epinefrina i la norepinefrina. La seva funció principal és transmetre senyals extracel·lulars cap a l’interior de la cèl·lula, regulant diversos processos fisiològics.
Quan s’activa, ADRB2 pot acoblar-se a diferents proteïnes G:
Via Gs: activa l’adenilat ciclasa, augmenta els nivells de AMPc i activa la PKA → regula processos com la contracció cardíaca i la relaxació del múscul llis (per exemple, broncodilatació).
Via Gi: inhibeix l’adenilat ciclasa i activa vies com PI3K/Akt → associada a efectes cardioprotectors i supervivència cel·lular. En el cor, modula la contractilitat dels cardiomiòcits. En el pulmó, indueix relaxació del múscul llis bronquial (important en tractaments de l’asma). I també pot participar en la regulació del metabolisme i del pH cel·lular. No és un enzim, per tant no catalitza una reacció, sinó que actua com a receptor i transductor de senyal.

#### Modificacions posttraduccionals

L’ADRB2 (receptor β2-adrenèrgic) està regulat per diverses modificacions posttraduccionals que modulen la seva activitat.
La modificació més rellevant és la fosforilació, que té lloc en residus de serina i treonina, principalment a la regió C-terminal. Aquesta fosforilació és mediada per PKA i per quinases específiques de GPCR (GRKs), i afavoreix la unió de β-arrestines, promovent la desensibilització i la internalització del receptor. Entre els residus més destacats es troben Ser262, Ser355 i Ser356. Una altra modificació important és la palmitoilació, que consisteix en l’addició d’un àcid gras a residus de cisteïna, com Cys341. Aquesta modificació regula la unió del receptor a la membrana. També presenta glicosilació en residus d’asparagina situats a l’extrem N-terminal (com Asn6 i Asn15), la qual és essencial per a l’estabilitat, el correcte plegament i l’expressió del receptor a la membrana plasmàtica.
Finalment, la ubiquitinació en residus de lisina regula la degradació del receptor i el seu trànsit intracel·lular, contribuint al control dels nivells de receptor a la superfície cel·lular. Relació entre seqüència, estructura i funció:
La funció de la proteïna ADRB2 està directament relacionada amb la seva estructura. La seqüència d’aminoàcids determina que es formi una estructura amb set hèlixs α transmembrana, típiques dels receptors acoblats a proteïnes G (GPCR).
Aquestes hèlixs formen una mena de “butxaca” al centre de la proteïna, que és on s’uneixen els lligands. Quan el lligand s’uneix, la proteïna canvia lleugerament de forma, i això permet activar les proteïnes G dins de la cèl·lula. Elements estructurals implicats:
Els principals elements estructurals que participen en la funció són:
7 hèlixs α transmembrana (TM1-TM7): Formen el nucli del receptor i el lloc d’unió del lligand.
Regió extracel·lular: Participa en el reconeixement del lligand.
Regió intracel·lular: Interacciona amb les proteïnes G per transmetre el senyal.
Butxaca central (lloc d’unió): Espai format entre les hèlixs on s’uneix el lligand. Residus funcionals per a la funció:
Alguns aminoàcids són especialment importants:
Asp113 (TM3): Interacciona amb el lligand (interaccions electrostàtiques). És essencial per a la unió.
Ser203, Ser204 i Ser207 (TM5): Formen ponts d’hidrogen amb el lligand.
Asn312 (TM7): Ajuda a estabilitzar la unió del lligand. Aquests residus estan situats dins la butxaca d’unió i són importants per activar el receptor. Variants i efectes funcionals:
Hi ha variants (mutacions) en aquesta proteïna que poden afectar la seva funció:
Mutacions al lloc d’unió→ poden disminuir l’afinitat pel lligand→ el receptor respon pitjor
Mutacions a la regió intracel·lular→ poden afectar la interacció amb proteïnes G→ alteren la transmissió del senyal
Mutacions en residus reguladors→ poden afectar processos com la fosforilació→ poden provocar desensibilització o activació anormal A escala molecular, aquestes variants poden canviar la forma de la proteïna o les seves interaccions, i això altera la resposta cel·lular (per exemple, la resposta a l’adrenalina).

## Arquitectura molecular

ADRB2 presenta el paquet de set hèlixs transmembrana propi dels GPCR. La fusió de lisozim es manté separada de la part funcional del receptor, perquè estabilitza el sistema però no participa en la senyalització adrenèrgica.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura1.png' | relative_url }}" alt="Figura 1 del grup H" loading="lazy"> <figcaption><strong>Figura 1.</strong> ADRB2-T4L: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura2.png' | relative_url }}" alt="Figura 2 del grup H" loading="lazy"> <figcaption><strong>Figura 2.</strong> ADRB2-T4L: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

ADRB2 reconeix lligands adrenèrgics i transmet el senyal cap a proteïnes G. Residus com Asp113, Ser203/Ser207 i Asn312 defineixen interaccions importants de la butxaca de lligand.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/adrb2_6ps2.jpeg' | relative_url }}" alt="Receptor beta-2 adrenèrgic amb fusió T4 lisozim; model estructural de referència per separar receptor i fusió. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Receptor beta-2 adrenèrgic amb fusió T4 lisozim; model estructural de referència per separar receptor i fusió. Font: <a href="https://www.rcsb.org/structure/6PS2">RCSB PDB 6PS2</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Cherezov et al., 2007).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura3_a.png' | relative_url }}" alt="Figura 3 del grup H" loading="lazy"> <figcaption><strong>Figura 3.</strong> ADRB2-T4L: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura3_b.png' | relative_url }}" alt="Figura 4 del grup H" loading="lazy"> <figcaption><strong>Figura 4.</strong> ADRB2-T4L: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

ADRB2 presenta regulació per palmitoilació i fosforilació en la proteïna humana, especialment en residus de la cua intracel·lular i en cisteïnes properes a la membrana. En aquesta estructura cal remapar aquestes posicions perquè la seqüència inclou una fusió amb lisozima T4 i etiquetes terminals; les modificacions de la lisozima no formen part de la biologia d’ADRB2.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció es basa en distingir hèlixs transmembrana, residus de la butxaca, fusió de cristal·lització i etiquetes. Aquesta separació és imprescindible per interpretar variants i lligands.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura4_a.png' | relative_url }}" alt="Figura 5 del grup H" loading="lazy"> <figcaption><strong>Figura 5.</strong> ADRB2-T4L: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura4_b.png' | relative_url }}" alt="Figura 6 del grup H" loading="lazy"> <figcaption><strong>Figura 6.</strong> ADRB2-T4L: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura5_a.png' | relative_url }}" alt="Figura 7 del grup H" loading="lazy"> <figcaption><strong>Figura 7.</strong> ADRB2-T4L: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura5_b.png' | relative_url }}" alt="Figura 8 del grup H" loading="lazy"> <figcaption><strong>Figura 8.</strong> ADRB2-T4L: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura6_a.png' | relative_url }}" alt="Figura 9 del grup H" loading="lazy"> <figcaption><strong>Figura 9.</strong> ADRB2-T4L: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/figura6_b.png' | relative_url }}" alt="Figura 10 del grup H" loading="lazy"> <figcaption><strong>Figura 10.</strong> ADRB2-T4L: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Cherezov, V. et al. (2007). *High-Resolution Crystal Structure of an Engineered Human β2-Adrenergic G Protein-Coupled Receptor*. *Science*. [doi: 10.1126/science.1150577](https://doi.org/10.1126/science.1150577). Per a l’estat actiu estabilitzat per nanocòs: Rasmussen, S. G. F. et al. (2011), [doi: 10.1038/nature10361](https://doi.org/10.1038/nature10361).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup H/Pràctica1_QiEP_GrupH.md' | relative_url }}">pàgina original del grup H</a>.
