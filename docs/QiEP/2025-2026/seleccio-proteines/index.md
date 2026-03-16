---
title: "Selecció interna de proteïnes · 2025-2026"
permalink: /QiEP/2025-2026/seleccio-proteines/
author: "Química i Enginyeria de Proteïnes"
---

# Selecció interna de proteïnes per a les pràctiques 2025-2026

Aquest espai intern recull una selecció de proteïnes candidates per a les pràctiques del curs 2025-2026. El conjunt s'ha revisat a partir de les entrades del PDB i de la literatura primària associada per prioritzar casos amb treballs de disseny o d'enginyeria de proteïnes orientats a millorar interaccions o activitat catalítica.

El fitxer FASTA complet es pot descarregar aquí: [proteines-seleccio-2025-2026.fasta]({{ '/files/qiep-2025-2026/proteines-seleccio-2025-2026.fasta' | relative_url }}).

Nota metodològica: la major part de la llista encaixa directament amb el criteri d'enginyeria funcional. `8YL8`, `3H7V` i `3NY9` són casos de frontera: el primer és sobretot un exemple metodològic de disseny de novo; els altres dos són més útils com a referències estructurals o de constructe enginyat que no pas com a exemples nets d'optimització funcional.

## 8T5E

Seqüència emprada: entitat proteica principal del lligador dissenyat contra una hèlix BH3 de Bim.

PDB: [8T5E](https://www.rcsb.org/structure/8T5E). Publicació principal: [Nature 2024, DOI 10.1038/s41586-023-06953-1](https://doi.org/10.1038/s41586-023-06953-1).

Aquest cas és un exemple directe de disseny de novo orientat a interaccions proteïna-pèptid. El treball mostra com es poden generar lligadors d'alta afinitat contra pèptids helicoïdals bioactius; per tant, és un bon punt de partida si es vol treballar reconeixement molecular, especificitat i relació entre superfície d'unió i afinitat.

```text
MSGEEERKEKREKVRAGLKRAIAELPAEVAARCLALLDDASDEEFIEAVLEVLEAMREALVAMAREGRLDAVRRATSHIN
EVLVDAAELALEKGREYFRRLCLIVCDMMIELIRLEPEQTPELRRIRERLEEIRRRLEGSG
```

## 8YL8

Seqüència emprada: proteïna de novo de 211 residus validada estructuralment.

PDB: [8YL8](https://www.rcsb.org/structure/8YL8). Publicació principal: [Science 2024, DOI 10.1126/science.adq1741](https://doi.org/10.1126/science.adq1741).

Aquest exemple és més metodològic que funcional: la publicació se centra en l'escalabilitat del disseny de proteïnes en un espai de seqüència relaxat. Tot i que no és el millor cas per parlar de millora d'activitat, sí que és útil si es vol discutir com una seqüència artificial arriba a una estructura estable i validable experimentalment.

```text
PDFTGARERFLAGDVTIVLLIAESHDAPYRLANPEDPEADLSDEQLERALAAYLTLVETLFPELYAEMKAALAAAKTPEE
KIAVFREYNARFLAEFDALIDQAFARLKADSLTLKIHLSQGKGSYEIIFPPEVQADPERAAAIEALWKPTLDQLLAVLQE
KHKGKPATTVTYEISAETLRAAVAALARAAEAALRRKVGSLESSGLEVLFQ
```

## 7RMX

Seqüència emprada: proteïna de novo simètrica amb butxaques regulables.

PDB: [7RMX](https://www.rcsb.org/structure/7RMX). Publicació principal: [PNAS 2022, DOI 10.1073/pnas.2113400119](https://doi.org/10.1073/pnas.2113400119).

El valor d'aquest sistema és que connecta disseny de novo i reconeixement molecular. El treball descriu homodímers amb butxaques simètriques ajustables, de manera que permet discutir com la geometria del plegament i la disposició dels residus contribueixen a modular la unió a lligands o a fragments moleculars.

```text
SGSGSTEEEEALLRWFQTLLAKFDELVKQLGDPRLLEEARRLQERLEEAKKRGDKRTIKQLAALLQMFVLIAQIFQLVEE
LGDPKLLEQAKRLLERLKEAVERGDEETIKELLDLAHMTYLIAQIFQLVEQLGDPRLLELAKELLKRLKEAQERGDRRTI
ERLLRLVQMTYLIAQIFQLVRQLGDPRLLETAKTLLTLLKLAFEEGDELLIKSLLTLVAETYRQAAAEQ
```

## 9CCE

Seqüència emprada: lligador proteic dissenyat per reconèixer una regió intrínsecament desordenada; el pèptid diana és la dinorfina A.

PDB: [9CCE](https://www.rcsb.org/structure/9CCE). Publicació principal: [Science 2025, DOI 10.1126/science.adr8063](https://doi.org/10.1126/science.adr8063).

És un dels exemples més nets de disseny orientat a interaccions de la llista. La feina se centra a generar lligadors contra regions intrínsecament desordenades, un repte especialment interessant perquè la diana no adopta una estructura rígida única. Serveix molt bé per discutir complementarietat, plasticitat conformacional i especificitat de la unió.

```text
MSGKEEEIEKEFEEKKKIIEENLKEAEEEGEEEAAEKLKEALKKLEEAIKLHREGANPVEVELEEVTAIILNNLAVLLRE
GEEELAKELEKAIKLLEEKKDAPEEERLKAIAIAIIRSVLVLIKWEGGKDEETIEEIEEILENRENLSLEELREAYVRAE
IAYLIESGIDPEAAKKVREKYERGAPLEELLKDIEKIEKEAKKREEEKKGSHHHHHH
```

## 6NW4

Seqüència emprada: variant evolucionada d'un Kemp eliminase de disseny computacional.

PDB: [6NW4](https://www.rcsb.org/structure/6NW4). Publicació principal: [JACS 2019, DOI 10.1021/jacs.9b02731](https://doi.org/10.1021/jacs.9b02731).

Aquí la connexió amb enginyeria enzimàtica és directa. El treball segueix l'evolució d'un enzim dissenyat i mostra que, a mesura que augmenta l'activitat, també emergeixen trets dinàmics nous, com una capacitat calorífica d'activació negativa. És un bon cas per relacionar seqüència, dinàmica fina del centre actiu i eficiència catalítica.

```text
PRYLKGWLKDVVQLSLRRPSFRASRQRPIISLNERILEFNKRNITAIIAAYRRKSPCGLDVERDPIEYSKFMERYAVGLA
IATEEKYFNGSYETLRKIASSVSIPILMWDFIVKESQIDDAYNLGADTVALIVKILTERELESLLEYARSYGMEPYIVIN
DENDLDIALRIGARFIEICSRDFETLEINKENQRKLISMIPSNVVKVAWGGISERNEIEELRKLGVNAFGIGSSLMRNPE
KIKEFIL
```

## 5AN7

Seqüència emprada: RA95.5-8F, variant altament activa d'una retro-aldolasa artificial.

PDB: [5AN7](https://www.rcsb.org/structure/5AN7). Publicació principal: [Nature Chemistry 2017, DOI 10.1038/nchem.2596](https://doi.org/10.1038/nchem.2596).

És un exemple canònic d'evolució dirigida sobre un enzim artificial. La publicació descriu l'emergència d'una tetrada catalítica en una variant amb activitat molt superior a la dels avantpassats, i permet discutir com canvis acumulatius en el centre actiu poden transformar el mecanisme i l'eficiència de la reacció.

```text
MPRYLKGWLEDVVQLSLRRPSVHASRQRPIISLNERILEFNKRNITAIIAYYLRKSPSGLDVERDPIEYAKYMEPYAVGL
SIKTEEKYFDGSYEMLRKIASSVSIPILMNDFIVKESQIDDAYNLGADTVLLIVEILTERELESLLEYARGYGMEPLILI
NDENDLDIALRIGARFITIYSMNFETGEINKENQRKLISMIPSNVVKVPLLDFFEPNEIEELRKLGVNAFMISSSLMRNP
EKIKELIEGSLEHHHHHH
```

## 4A29

Seqüència emprada: RA95.0, una etapa anterior de la mateixa línia evolutiva de retro-aldolases artificials.

PDB: [4A29](https://www.rcsb.org/structure/4A29). Publicació principal: [Nature Chemical Biology 2013, DOI 10.1038/nchembio.1276](https://doi.org/10.1038/nchembio.1276).

Aquest punt de la sèrie RA95 és especialment valuós si es vol comparar trajectòries evolutives. L'article mostra que l'optimització de l'activitat no va ser només un refinament local, sinó una remodelació profunda del centre actiu. Posar-lo al costat de `5AN7` ajuda a veure com canvia l'arquitectura funcional al llarg del procés de disseny i evolució.

```text
MPRYLKGWLEDVVQLSLRRPSVRASRQRPIISLNERILEFNKRNITAIIAVYERKSPSGLDVERDPIEYAKFMERYAVGL
SITTEEKYFNGSYETLRKIASSVSIPILMSDFIVKESQIDDAYNLGADTVLLIVKILTERELESLLEYARSYGMEPLILI
NDENDLDIALRIGARFIGIMSRDFETGEINKENQRKLISMIPSNVVKVAKLGISERNEIEELRKLGVNAFLISSSLMRNP
EKIKELIEGSLEHHHHHH
```

## 3H7V

Seqüència emprada: O-succinilbenzoat sintasa de *Thermosynechococcus elongatus*.

PDB: [3H7V](https://www.rcsb.org/structure/3H7V). Publicació principal: [PNAS 2014, DOI 10.1073/pnas.1318703111](https://doi.org/10.1073/pnas.1318703111).

Aquest és un cas límit respecte al criteri d'enginyeria funcional. La publicació no descriu un programa de disseny per augmentar activitat, sinó que analitza com la pèrdua d'estructura quaternària s'associa a divergència de seqüència dins la família OSBS. Tot i això, pot ser útil com a proteïna de referència si es vol discutir restriccions estructurals i evolutives sobre la funció enzimàtica.

```text
LRWQWRIYEEPLQEPLTTAQGVWRSRSGIYLRLEDEQGQVGYGEIAPLPGWGSETLNADIALCQQLPGHLTPEIMATIPE
ALPAAQFGFATAWQSVGRLPYRVRPWPICALLGSGQAALEQWQQSWQRGQTTFKWKVGVMSPEEEQAILKALLAALPPGA
KLRLDANGSWDRATANRWFAWLDRHGNGKIEYVEQPLPPDQWQALLSLAQTVTTAIALDESVVSAAEVQRWVDRGWPGFF
VIKTALFGDPDSLSLLLRRGLEPQRLVFSSALEGAIARTAIFHLLETWQPCHALGFGVDRWRSAPLLTTLTAYERLWERL
DQEGHHHHHH
```

## 3NY9

Seqüència emprada: constructe enginyat de receptor β2-adrenèrgic fusionat a lisozim per facilitar l'estudi estructural.

PDB: [3NY9](https://www.rcsb.org/structure/3NY9). Publicació principal: [JACS 2010, DOI 10.1021/ja105108q](https://doi.org/10.1021/ja105108q).

També és un cas de frontera. El valor principal no és una millora d'activitat, sinó l'enginyeria del constructe per estabilitzar el receptor i poder caracteritzar amb detall el reconeixement d'antagonistes i agonistes inversos. Si es manté a la llista, és sobretot com a exemple de com l'enginyeria de proteïnes pot fer accessible l'estudi estructural de la interacció receptor-lligand.

```text
DYKDDDDAMGQPGNGSAFLLAPNRSHAPDHDVTQQRDEVWVVGMGIVMSLIVLAIVFGNVLVITAIAKFERLQTVTNYFI
TSLACADLVMGLAVVPFGAAHILMKMWTFGNFWCEFWTSIDVLCVTASIWTLCVIAVDRYFAITSPFKYQSLLTKNKARV
IILMVWIVSGLTSFLPIQMHWYRATHQEAINCYAEETCCDFFTNQAYAIASSIVSFYVPLVIMVFVYSRVFQEAKRQLNI
FEMLRIDEGLRLKIYKDTEGYYTIGIGHLLTKSPSLNAAKSELDKAIGRNTNGVITKDEAEKLFNQDVDAAVRGILRNAK
LKPVYDSLDAVRRAALINMVFQMGETGVAGFTNSLRMLQQKRWDEAAVNLAKSRWYNQTPNRAKRVITTFRTGTWDAYKF
CLKEHKALKTLGIIMGTFTLCWLPFFIVNIVHVIQDNLIRKEVYILLNWIGYVNSGFNPLIYCRSPDFRIAFQELLCLRR
SSLKHHHHHH
```

## 6C7T

Seqüència emprada: variant KE07 de ronda 5 de Kemp eliminase.

PDB: [6C7T](https://www.rcsb.org/structure/6C7T). Publicació principal: [Nature Communications 2018, DOI 10.1038/s41467-018-06305-y](https://doi.org/10.1038/s41467-018-06305-y).

Aquest sistema és molt bo per treballar el lligam entre evolució dirigida i multiplicitat estructural del centre actiu. El treball mostra que una mateixa funció optimitzada pot passar per configuracions actives diferents, fet que obliga a interpretar amb cura la relació entre mutacions, geometria local i activitat observada.

```text
MALAKRIDAALIMKDGRVVKGSNFENLRDSGDPVELGKFYSEIGIDELSFWDITASVEKRKTMLELVEKVAEQIDIPFTV
GGGIHDFETASELILRGADKVEINTAAVENPSLITQIAQTFGSQAVVVYIAAKRVDGEFMVFTYSGKKNTGILLRDWVVE
VEKRGAGEIVLGSIDRLGTKSGYDTEMIRFVRPLTTLPIIAHRGAGKMEHFLEAFLAGADAAKADSVFHFREIDVRELKE
YLKKHGVNVRLEGLGSLEHHHHHH
```

## 5UCW

Seqüència emprada: variant P411 d'una P450 BM3 enginyada per aminar enllaços C-H benzílics.

PDB: [5UCW](https://www.rcsb.org/structure/5UCW). Publicació principal: [Nature Chemistry 2017, DOI 10.1038/nchem.2783](https://doi.org/10.1038/nchem.2783).

És un exemple excel·lent d'expansió de reactivitat en enginyeria de proteïnes. La variant P411 s'ha seleccionat per dur a terme una aminació intermolecular enantioselectiva d'enllaços C-H, una activitat absent en l'enzim natural. Dona molt joc per parlar d'especificitat, selectivitat i redisseny del microentorn del grup hemo.

```text
MTIKEMPQPKTFGELKNLPLLNTDKPVQALMKIADELGEIFKFEAPGRVTRYLSSQRLIKEACDESRFDKNLSQALKFVR
DFLGDGLATSWTHEKNWKKAHNILLPSFSQQAMKGYHAMMVDIAVQLVQKWERLNADEHIEVSEDMTRLTLDTIGLCGFN
YRFNSFYRDQPHPFIISMVRALDEVMNKLQRANPDDPAYDENKRQFQEDIKVMNDLVDKIIADRKARGEQSDDLLTQMLN
GKDPETGEPLDDGNIRYQIITFLLAGHEGTSGLLSFALYFLVKNPHVLQKVAEEAARVLVDPVPSYKQVKQLKYVGMVLN
EALRLWPTVPAFSLYAKEDTVLGGEYPLEKGDEVMVLIPQLHRDKTVWGDDVEEFRPERFENPSAIPQHAFKPFGNGQRA
SIGQQFALHEATLVLGMMLKHFDFEDHTNYELDIKETLSLKPKGFVVKAKSKKIPLGGIPSPSTLEHHHHHH
```

## 3QI8

Seqüència emprada: variant evolucionada de P450 BM3 dissenyada com a mimètic bacterià de CYP2C9 humà.

PDB: [3QI8](https://www.rcsb.org/structure/3QI8). Publicació principal: [ChemCatChem 2011, DOI 10.1002/cctc.201000452](https://doi.org/10.1002/cctc.201000452).

Aquest cas permet sortir del discurs purament de novo i entrar en l'enginyeria de funcions biotecnològiques útils. L'objectiu és remodelar una P450 bacteriana perquè reprodueixi millor el perfil funcional d'un enzim humà metabolitzador de fàrmacs. És una bona elecció si es vol treballar reconeixement de substrat, especificitat i relació entre mutacions i perfil catalític.

```text
MTIKEMPQPKTFGELKNLPLLNTDKPVQALMKIADELGEIFKFEAPGRVTRYISSQRLVKEACDESRFDKNLSQARKFVR
DFAGDGLATSWTHEKNWKKARNILLPRLSQQAMKGYHAMMVDIAVQLVQKWERLNSDEHIEVPEDMTRLTLDTIGLCGFN
YRINSFYRDQPHPFITSMVRALDEVMNKLQRANPDDPAYDENKRQFQEDIKVMNDLVDKIIADRKASGEQSDDLLTHMLH
GKDPETGEPLDDENIRYQIITFLIAGHETTSGLLTFALYFLVKNPHVLQKAAEEAARVLVDPVPSYKQVKQLKYVGMVLN
EALRIWPTAPAFSLYAKEDTMLGGEYPLEKGDELMVLIPQLHRDKTVWGDDVEEFRPERFENPSAIPQHAFKPFGNGQRA
CIGQQFALHEATLVLGMMLKHFDFEDHTNYELDIEETLTLKPKGFVIKAKSKKIPLGGIPSPSTLEHHHHHH
```

## 6I8N

Seqüència emprada: LmrR amb substitució `V15pAF`; el residu no canònic es representa com `X` en la seqüència del PDB.

PDB: [6I8N](https://www.rcsb.org/structure/6I8N). Publicació principal: [Angewandte Chemie International Edition 2019, DOI 10.1002/anie.201813499](https://doi.org/10.1002/anie.201813499). Treball precursor del disseny: [Nature Chemistry 2018, DOI 10.1038/s41557-018-0082-z](https://doi.org/10.1038/s41557-018-0082-z).

LmrR és un cas especialment atractiu perquè combina expansió del codi genètic i evolució dirigida. El residu no natural p-aminofenilalanina introdueix una funcionalitat catalítica nova, i l'evolució posterior en millora rendiment i selectivitat en reaccions de formació d'hidrazones i oximes. És ideal per discutir fins a quin punt la seqüència pot incorporar química nova sense perdre plegament ni reconeixement del substrat.

```text
MAEIPKEMLRAQTNXILLNVLKQGDNYVYGIIKQVKEASNGEMELNEATLYTIFKRLEKDGIISSYWGDESQGGRRKYYR
LTEIGHENMRLAFESWSRVDKIIENLEANKKSEAIKSRWSHPQFEK
```
