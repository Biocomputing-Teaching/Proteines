---
title: "Epoxi hidrolasa microsomal 1"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-J-corregida/
author: "Baquero Matabacas Laia, Fernández Marín Lidia i Sastre Miralles Mariona"
---

<p class="qiep-group-label"><strong>Grup J</strong> · Química i Enginyeria de Proteïnes 2024-2025</p> Autors del treball original: **Baquero Matabacas Laia, Fernández Marín Lidia i Sastre Miralles Mariona**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P07099|HYEP_HUMAN Epoxide hydrolase 1 OS=Homo sapiens OX=9606 GN=EPHX1 PE=1 SV=1 | 2024-2025 | seqüència problema
MWLEILLTSVLGFAIYWFISRDKEETLPLEDGWWGPGTRSAAREDDSIRPFKVETSDEEIHDLHQRIDKFRFTPPLEDSC
FHYGFNSNYLKKVISYWRNEFDWKKQVEILNRYPHFKTKIEGLDIHFIHVKPPQLPAGHTPKPLLMVHGWPGSFYEFYKI
IPLLTDPKNHGLSDEHVFEVICPSIPGYGFSEASSKKGFNSVATARIFYKLMLRLGFQEFYIQGGDWGSLICTNMAQLVP
SHVKGLHLNMALVLSNFSTLTLLLGQRFGRFLGLTERDVELLYPVKEKVFYSLMRESGYMHIQCTKPDTVGSALNDSPVG
LAAYILEKFSTWTNTEFRYLEDGGLERKFSLDDLLTNVMLYWTTGTIISSQRFYKENLGQGWMTQKHERMKVYVPTGFSA
FPFELLHTPEKWVRFKYPKLISYSYMVRGGHFAAFEEPELLAQDIRKFLSVLERQ
```

Seqüència recuperada de UniProt P07099. Longitud: 455 aminoàcids. Cisteïnes: 80, 182, 232, 304.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a epoxi hidrolasa microsomal 1. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P07099; gen: EPHX1 |
| EC / BRENDA | 3.3.2.9 / 3.3.2.3 |
| Estructura principal | model experimental o AlphaFold segons cobertura |
| Plegament o família | α/β hidrolasa amb triada catalítica i butxaca per epòxids hidrofòbics |
| Estructura secundària i lectura ChimeraX | α/β hidrolasa de membrana; cal separar nucli catalític, cavitat hidrofòbica i regions d’ancoratge o contacte amb membrana |
| Lligands, cofactors o centre actiu | epòxid al centre actiu; el mecanisme forma un intermedi covalent hidroxialquil-enzim i després l’hidrolitza |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. L’epoxi hidrolasa microsomal 1 transforma epòxids reactius en diols, una reacció important en metabolisme de xenobiòtics.

## Pràctica 1.

Anàlisi proteïna Microsomal Epoxide Hydrolase 1 (EPHX1)

### Sobre la proteïna <u>Seqüència donada: </u>
MWLEILLTSVLGFAIYWFISRDKEETLPLEDGWWGPGTRSAAREDDSIRPFKVETSDEEIHDLHQRIDKFRFTPPLEDSCFHYGFNSNYLKKVISYWRNEFDWKKQVEILNRYPHFKTKIEGLDIHFIHVKPPQLPAGHTPKPLLMVHGWPGSFYEFYKIIPLLTDPKNHGLSDEHVFEVICPSIPGYGFSEASSKKGFNSVATARIFYKLMLRLGFQEFYIQGGDWGSLICTNMAQLVPSHVKGLHLNMALVLSNFSTLTLLLGQRFGRFLGLTERDVELLYPVKEKVFYSLMRESGYMHIQCTKPDTVGSALNDSPVGLAAYILEKFSTWTNTEFRYLEDGGLERKFSLDDLLTNVMLYWTTGTIISSQRFYKENLGQGWMTQKHERMKVYVPTGFSAFPFELLHTPEKWVRFKYPKLISYSYMVRGGHFAAFEEPELLAQDIRKFLSVLERQ Un cop buscada aquesta seqüència a la base de dades UniProt, dona com a resultat que la proteïna és la registrada amb el codi P07099 (Microsomal Epoxide hydrolase 1) (https://www.uniprot.org/uniprotkb/P07099), amb la classificació EC següent: EC: 3.3.2.9 (https://www.brenda-enzymes.org/enzyme.php?ecno=3.3.2.3). EC TREE:
3 Hydrolases
3.3 Acting on ether bonds
3.3.2 Ether hydrolases
3.3.2.9 Microsomal Epoxide hydrolase A més, s’observa que aquesta proteïna és codificada pel gen EPHx1. Un cop vist el resultat de la recerca, s’observa que la base de dades del Protein Data Bank no ens serveix, ja que no ens apareix cap codi PDB. En aquest cas, sí que ens surt un codi AlphaFold (AF-P07099-F1), per tant, és en aquesta base de dades on hem de buscar l’estructura de la proteïna. Si només podem trobar l’estructura a AlphaFold, ens indica que la proteïna no ha estat vista experimentalment, i, per tant, la seva estructura ha estat reproduïda mitjançant intel·ligència artificial basant-se en dades de seqüències d'aminoàcids conegudes. La proteïna Microsomal Epoxide hydrolase 1 és un enzim implicat en la detoxificació de compostos tòxics, ja que té capacitat per hidrolitzar epòxids. Un cop els hidrolitza, els converteix en diols, facilitant la seva eliminació.

### Treball amb ChimeraX Gràcies al programa Chimera X, hem pogut extreure les següents conclusions: <u>Làmines β: </u> En total trobem 9 làmines β. Les trobem a les posicions de la cadena A de la proteïna: 48-51, 115-120, 132-130, 142-147, 178-183, 220-224, 243-248, 396-400, 420-425. En total, hi ha 431 àtoms implicats, 438 enllaços i 52 aminoàcids totals. S’observen les làmines β de color verd en la figura. <u>Hèlix α: </u> En total tenim 23 fulles. Les trobem a les posicions de la cadena A de la proteïna: 2-20, 57-68, 87-99, 103-112, 154-157, 161-163, 168-170, 201-214, 226-238, 256-272, 276-282, 285-296, 298-305, 307-316, 318-331, 335-339, 345-347, 351-347, 351-364, 367-378, 386-388, 410-416, 433-436, 438-454. En total, trobem implicats 1901 àtoms en l’estructura, 1927 enllaços i 224 aminoàcids totals. A la figura, les hèlixs α estan ressaltades en color verd. <u>Bucles: </u> En total tenim 33 bucles (més regions desordenades). Implicats tenim 1418 àtoms, 1439 enllaços i 179 aminoàcids totals. S’observen els bucles i regions desordenades en color verd <u>Ponts d’hidrogen: </u> Trobem 449 ponts d’hidrogen. S’observen els ponts d’hidrogen marcats amb colors <u>Ponts disulfur: </u> en la proteïna trobem un total de 4 ponts. S’observen els 4 ponts marcats en verd <u>Enllaços de van der Waals: </u> Trobem 2861 enllaços de van der Waals A la figura estan marcades de color verd les regions on es poden ocasionar aquests enllaços.

#### **L'estructura terciària de la proteïna, a quin tipus de plegament correspon?

Busqueu el plegament a la base de dades SCOP, anoteu el codi que us dona aquesta base de dades per al plegament i mostreu la jerarquia d’aquest plegament. En cas que existeixi estructura quaternària, discutiu-la també. Com hem comentat anteriorment, la proteïna no consta de codi PDB i la seva estructura és obtinguda gràcies a la base de dades d’AlphaFold. Per això en buscar el tipus de plegament d’aquesta, no es pot trobar, ja que en anar seguint el llinatge ens trobem en un punt on tots els resultats són amb entrades de PDB. Adjuntem figura de fins on es pot seguir la classificació.

### Funció de la proteïna:

El centre actiu està format per una tríada catalítica que inclou els següents residus:
- Asp: donador de protons que ajuda a l'obertura de l’anell epòxid.
- Glu: Participa en l'estabilització intermèdia de la reacció i la transferència de protons.
- His: Operativa com a base general; en el context de la catàlisi, accepta i dona protons Un cop explorat l’enzim mitjançant l’aplicació Chimera, hem pogut comprovar que no s'inclouen lligands com substrats o inhibidors. D’aquesta manera es pot establir que l’estructura representada no té en compte molècules petites que puguin estar associades al seu centre actiu. Aquests residus estableixen interaccions que sostenen la catàlisi:
- Enllaç d’hidrogen: entre els residus de la tríada i el substrat poden estabilitzar l’estat de transició.
- Interaccions electrostàtiques: Ajuda el substrat a orientar-se correctament en el lloc actiu.
- Interaccions de van der Waals: Estabilitzen el complex enzim-substrat. La proteïna, l’epoxi hidrolasa microsomal, és un enzim que catalitza la hidròlisi d’epòxids. Aquesta acció dona lloc a dihidrodiols menys reactius i més solubles en aigua.
A més, té un paper fonamental en el metabolisme dels lípids, sobretot en la transformació d'àcids grassos que contenen epòxids i la detoxificació de compostos lipofílics. Respecte al mecanisme que segueix l’enzim, segueix uns passos molt concrets per dur a terme la seva funció. L'activitat comença quan l'epòxid s'uneix al centre actiu de l’enzim, on un residu d'aminoàcid (Asp) començarà la reacció. Aquest atacarà un dels carbonis de l’anell epòxid, fent que aquest s'obri i formi una unió d’un intermediari covalent entre el substrat i l’enzim. L'acció permetrà que entri una molècula d’aigua al centre actiu i serà activada per altres residus (Glu i His), realitzant una hidròlisi sobre l'intermediari covalent. Finalment, l’aigua hidrolitza l’intermedi covalent i dona lloc a un diol, el producte serà alliberat del centre actiu i ara podrà ser eliminat més fàcilment en reaccions futures. L'enzim es regenera per al cicle catalític següent.
- **Centre actiu i residus catalítics:** El centre actiu de l'EPHX1 conté un mecanisme catalític de tipus hidròlisi covalent, en què residus d’His i Asp participen en l'activació de la molècula d’aigua per facilitar l’atac nucleofílic sobre l’epòxid. A més, altres aminoàcids del centre actiu estabilitzen l’estat de transició del substrat i contribueixen a la seva selectivitat, assegurant una conversió eficient dels epòxids en diols mitjançant hidròlisi.
- **Domini estructural principal:** EPHX1 pertany a la família α/β-hidrolasa, caracteritzada per un domini central format per una làmina β central envoltada d’hèlixs α. Aquesta disposició estructural facilita la interacció del substrat amb el centre actiu i permet la seva correcta orientació per a la catàlisi, garantint l'eficiència del mecanisme d'hidròlisi dels epòxids.
- **Motiu catalític conservat:** Com moltes altres hidrolases, EPHX1 presenta un motiu catalític conservat (Glu-X-X-X-X-Asp-His) essencial per a la seva funció. En moltes epòxid hidrolases, els residus Asp i His formen una diada catalítica, on Asp actua com a base general i His facilita l'activació de la molècula d’aigua, permetent així l'hidròlisi eficient dels epòxids Diversos estudis de mutagènesi i modelatge estructural indiquen que els següents residus són essencials per a l’activitat enzimàtica de l’EPHX1:
- Asp226: Paper en l'activació de l’aigua com a base catalítica
- His431: Essencial per estabilitzar l’estat de transició i facilitar la hidròlisi.
- Tyr374: Pot jugar un paper en la unió del substrat.
- Arg287: Pot estabilitzar la càrrega negativa en la transició del substrat. Aquestes posicions poden variar segons la numeració exacta de la seqüència de la proteïna. El polimorfisme Tyr113His (rs1051740) dona lloc a un canvi d’aminoàcid de tirosina (Tyr) a histidina (His) en la posició 113 de la proteïna EPHX1. Aquesta variant es troba a l’exó 3 i disminueix l’activitat de l’enzim fins a un 50%, fet que podria impactar la seva funció en la desintoxicació de compostos epòxid reactius. En termes funcionals, aquesta reducció de l’activitat enzimàtica podria afectar la seva capacitat per metabolitzar certes substàncies tòxiques. El polimorfisme His139Arg (rs2234922) provoca un canvi d’aminoàcid de histidina (His) a arginina (Arg) en la posició 139. Aquesta variant es troba a l’exó 4 i causa un increment del 25% en l’activitat de l’enzim. Com a conseqüència, pot augmentar la velocitat de metabolisme dels epòxids, alterant la resposta de l’organisme a determinats fàrmacs i compostos tòxics. Tot i que aquest augment en l’activitat pot ser beneficiós en alguns casos, també pot provocar una major propensió al dany oxidatiu en les cèl·lules hepàtiques i modificar la farmacocinètica de diversos medicaments, com els quimioteràpics. Quan es consideren ambdues variants en conjunt (haplotips), els individus poden presentar una activitat baixa, intermèdia o alta de l’enzim EPHX1. Aquells amb dues còpies de Tyr113His mostren una activitat disminuïda i poden tenir un major risc d’acumulació de compostos tòxics, mentre que els que tenen dues còpies de His139Arg presenten una activitat elevada, fet que podria modificar la metabolització de fàrmacs.

## Arquitectura molecular

EPHX1 és una hidrolasa associada al metabolisme de compostos lipòfils. La seva arquitectura combina un nucli catalític amb regions adequades per captar epòxids hidrofòbics.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/1.png' | relative_url }}" alt="Figura 1 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Epoxi hidrolasa microsomal 1: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/10.png' | relative_url }}" alt="Figura 2 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Epoxi hidrolasa microsomal 1: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

El mecanisme obre l’epòxid i produeix un diol. La xarxa catalítica activa aigua i estabilitza intermedis, reduint la reactivitat del substrat original.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/epoxide_hydrolase.png' | relative_url }}" alt="Mecanisme d’epoxi hidrolasa, amb obertura de l’epòxid i formació del diol. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Mecanisme d’epoxi hidrolasa, amb obertura de l’epòxid i formació del diol. Font: <a href="https://commons.wikimedia.org/wiki/File:LEH_mechanism.png">Wikimedia Commons, LEH mechanism</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Morisseau et al., 2005).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/2.png' | relative_url }}" alt="Figura 3 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Epoxi hidrolasa microsomal 1: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/3.png' | relative_url }}" alt="Figura 4 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Epoxi hidrolasa microsomal 1: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

En EPHX1 humana interessen variants funcionals i context de membrana; les variants s’han de mapar a la seqüència exacta. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/4.png' | relative_url }}" alt="Figura 5 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Epoxi hidrolasa microsomal 1: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/5.png' | relative_url }}" alt="Figura 6 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Epoxi hidrolasa microsomal 1: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/6.png' | relative_url }}" alt="Figura 7 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Epoxi hidrolasa microsomal 1: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/7.png' | relative_url }}" alt="Figura 8 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Epoxi hidrolasa microsomal 1: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/8.png' | relative_url }}" alt="Figura 9 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Epoxi hidrolasa microsomal 1: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/imatges/9.png' | relative_url }}" alt="Figura 10 del grup J 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Epoxi hidrolasa microsomal 1: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Morisseau, C.; Hammock, B. D. (2005). *Epoxide Hydrolases: Mechanisms, Inhibitor Designs, and Biological Roles*. *Annual Review of Pharmacology and Toxicology*. [doi: 10.1146/annurev.pharmtox.45.120403.095920](https://doi.org/10.1146/annurev.pharmtox.45.120403.095920).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup J/Pràctica 1. Anàlisi proteïna microsomal Epoxide Hydrolase 1 (EPHX1).md' | relative_url }}">pàgina original del grup J</a>.
