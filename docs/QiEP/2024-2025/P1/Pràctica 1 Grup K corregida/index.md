---
title: "Pectat liasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-K-corregida/
author: "Martina Carreño, Laura Jordan i Berta Serrabasa"
---

<p class="qiep-group-label"><strong>Grup K</strong> · Química i Enginyeria de Proteïnes 2024-2025</p> Autors del treball original: **Martina Carreño, Laura Jordan i Berta Serrabasa**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P0C1A6|PLYL_DICCH Pectate lyase L OS=Dickeya chrysanthemi OX=556 GN=pelL PE=3 SV=1 | 2024-2025 | seqüència problema
MKYLNCFISTGLAAFFLVNSTSVLAADCSSDLTSGISTKRIYYVAPNGSSSNNGNSFNSPMSFTAAMAAANPGELILLKP
GTYTIPYTQGKGNTITFNKSGKEGSPIYVAAANCGRAVFDFSFPDSQWVQASYGFYVTGDYWYFKGIEVTRAGYQGAYVT
GSHNTFENTAFHHNRNTGLEINNGGSYNTVINSDAYRNYDPKKNGSMADGFGPKQKQGQGNRFGGCRAWENSDDGFDLFD
SPQKVVIENSWAFRNGINYWSDSSFAGNGNGFKLGGNQAVGNHRITRSVAFGNVSKGFDQNNNAGGVTVINNTSYKNGIN
YGFGSNVKSGQKHYFRNNVSLSGSATVNNADAKSNSWDTGPVASASDFVSLDTSLATISRDNDGTLPETALFRLSTNSKL
INAGTKESNISYSGSAPDLGAFERN
```

Seqüència recuperada de UniProt P0C1A6. Longitud: 425 aminoàcids. Cisteïnes: 6, 28, 114, 226.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a pectat liasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | segons organisme de la pectat liasa; gen: pel/pectate lyase |
| EC / BRENDA | 4.2.2.2 |
| Estructura principal | 1EE6 |
| Plegament o família | beta-hèlix dreta típica de moltes polisacàrid-liases |
| Estructura secundària i lectura ChimeraX | beta-hèlix dreta amb solc de polisacàrid; cal marcar Ca2+, residus bàsics i la zona d’eliminació beta |
| Lligands, cofactors o centre actiu | Ca2+ i pectat/oligogalacturonat; la reacció és eliminació beta i no hidròlisi |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les pectat liases trenquen pectines peliminació beta i mostren com un polisacàrid pot ser reconegut sobre una superfície proteica.

## PRÀCTICA 1

#### Martina

Carreño, Laura Jordan i Berta Serrabasa - 1. Sobre la Proteïna - 2. Treball amb Chimera X Estructures secundàries Motius d’estructura supersecundària Estructura terciària i quaternària - Estructures secundàries - Motius d’estructura supersecundària - Estructura terciària i quaternària - Funció de la proteïna - Relació seqüència-estructura-funció - Elements estructurals que participen en la funció - Variants amb implicacions funcionals - Conseqüències moleculars

### Sobre la

Proteïna - Nom del gen corresponent: Pectate lyase L - Codi UniProt: P0C1A6 - Classificació: EC: 4.2.2.2 - Funció: Presenta activitat endo-cleaving sobre polygalacturonate o pectina parcialment metilada.
- Codi PDB: 1RU4_A - Funció: La Pectate lyase L és un enzim que degrada la pectina, un component estructural de la paret cel·lular vegetal. Concretament, trenca els enllaços èster en els àcids poli-galacturònics mitjançant un mecanisme de β-eliminació, facilitant així la descomposició dels teixits vegetals.

### Treball amb Chimera X

#### Estructures secundàries -

Hèlix α (4 identificades) Tipus 1: Hèlix α clàssica amb ponts d’hidrogen intracatenaris cada 4 residus (entre el grup carbonil del residu i i l’N-H del residu i+4). Tipus 5: Hèlix més estirada amb ponts cada 5 residus. Interaccions: Ponts d’hidrogen: Estabilitzen l’estructura i mantenen l’hèlix compacta. Interaccions hidrofòbiques: Entre cadenes laterals apolars orientades cap al centre de l’hèlix. Interaccions electrostàtiques: Entre residus carregats, especialment a les vores de l’hèlix.
- Tipus 1: Hèlix α clàssica amb ponts d’hidrogen intracatenaris cada 4 residus (entre el grup carbonil del residu i i l’N-H del residu i+4).
- Tipus 5: Hèlix més estirada amb ponts cada 5 residus.
- Interaccions: Ponts d’hidrogen: Estabilitzen l’estructura i mantenen l’hèlix compacta. Interaccions hidrofòbiques: Entre cadenes laterals apolars orientades cap al centre de l’hèlix. Interaccions electrostàtiques: Entre residus carregats, especialment a les vores de l’hèlix.
- Ponts d’hidrogen: Estabilitzen l’estructura i mantenen l’hèlix compacta.
- Interaccions hidrofòbiques: Entre cadenes laterals apolars orientades cap al centre de l’hèlix.
- Interaccions electrostàtiques: Entre residus carregats, especialment a les vores de l’hèlix.
- Làmines β (32 identificades) Tipus 0: Làmines β paral·leles, on els ponts d’hidrogen són gairebé simètrics, amb les cadenes laterals alternant cap amunt i cap avall. Tipus 1: Làmines β antiparal·leles amb ponts d’hidrogen més forts perquè s’alineen directament (lineals). Interaccions: Interaccions hidrofòbiques: Entre residus apolars situats a la mateixa cara de la fulla. Ponts de sal: Si hi ha residus carregats a les vores, poden establir interaccions iònics amb residus propers.
- Tipus 0: Làmines β paral·leles, on els ponts d’hidrogen són gairebé simètrics, amb les cadenes laterals alternant cap amunt i cap avall.
- Tipus 1: Làmines β antiparal·leles amb ponts d’hidrogen més forts perquè s’alineen directament (lineals).
- Interaccions: Interaccions hidrofòbiques: Entre residus apolars situats a la mateixa cara de la fulla. Ponts de sal: Si hi ha residus carregats a les vores, poden establir interaccions iònics amb residus propers.
- Interaccions hidrofòbiques: Entre residus apolars situats a la mateixa cara de la fulla.
- Ponts de sal: Si hi ha residus carregats a les vores, poden establir interaccions iònics amb residus propers.
- Bucles (13 identificats) Els bucles són estructures flexibles que connecten les hèlix i les làmines β. Dins d’aquests: Hem detectat 3 ponts d’hidrogen interns, sovint entre el carbonil i l’N-H d’aminoàcids propers, tot i que menys estructurats que en les hèlix o fulles. Els bucles també poden interaccionar amb altres estructures secundàries, estabilitzant l’estructura global de la proteïna.
- Hem detectat 3 ponts d’hidrogen interns, sovint entre el carbonil i l’N-H d’aminoàcids propers, tot i que menys estructurats que en les hèlix o fulles.
- Els bucles també poden interaccionar amb altres estructures secundàries, estabilitzant l’estructura global de la proteïna.

#### Motius d’estructura supersecundària

Els motius d’estructura supersecundaria que trobem són α-hèlix, làmines β i llaços. En aquesta estructura trobem 10 ponts d’hidrogen que estabilitzen les estructures principalment entre els grups NH i C=O. També trobem forces de van de Waals ( atracció entre resiuds polars que estabilitzen el nicli de la proteïna), interaccions hidrofòbiques i ponts salins (interaccions entre Adp i Arg que són aa carregats).

#### Estructura terciària i quaternària -

Plegament: Hèlix β paral·lela - Classificació SCOP: Classe: All beta proteins Plegament: Pectin lyase-like Superfamília: Pectin lyase-like Família: Pectate lyase - Classe: All beta proteins - Plegament: Pectin lyase-like - Superfamília: Pectin lyase-like - Família: Pectate lyase - Estructura quaternària: Generalment monòmers, però pot formar oligòmers

### Funció de la

Proteïna - Lloc de coordinació del calci: Un ió de calci de gran afinitat està coordinat per diversos residus aspartats, principalment Asp-209, Asp-233 i Asp-237 (amb un paper similar al descrit en estructures comparables, com en PelC). Aquest calci no sols estabilitza la configuració de l’enzyme sinó que també interacciona amb el substrat, ajudant a posicionar el grup carboxilat de la residu en subsite −1.
- Residu catalític: Lys-273 és el candidat principal per actuar com a base catalítica, encarregat d’extreure el protó del C5 del substrat durant el mecanisme d’eliminació anti-E1cb. La importància d’aquest residu es recolza en l’estudi de mutagènia, ja que la seva substitució per alanina o per arginina redueix dràsticament l’activitat enzimàtica. Residu catalític: Lys-273 és el candidat principal per actuar com a base catalítica, encarregat d’extreure el protó del C5 del substrat durant el mecanisme d’eliminació anti-E1cb. La importància d’aquest residu es recolza en l’estudi de mutagènia, ja que la seva substitució per alanina o per arginina redueix dràsticament l’activitat enzimàtica.
- Altres residus rellevants: La xapa de substrat també incorpora altres residus carboxilats, com Asp-299 i Glu-180, que podrien participar en interaccions amb els grups carboxilats del substrat, possiblement mitjançant ponts de calci o interaccions electrostàtiques i d’hidrogen, contribuint així a la correcta orientació i estabilització del complex enzim-substrat. Altres residus rellevants: La xapa de substrat també incorpora altres residus carboxilats, com Asp-299 i Glu-180, que podrien participar en interaccions amb els grups carboxilats del substrat, possiblement mitjançant ponts de calci o interaccions electrostàtiques i d’hidrogen, contribuint així a la correcta orientació i estabilització del complex enzim-substrat.
- Presència de substrat o inhibidor: Pel que fa a la presència de substrat o inhibidor en l’estructura resolta, tot i haver-se intentat obtenir complexos amb substrat i calci (o utilitzar ions plom per inferir la presència de llocs addicionals de calci), els cristalls de Pel9A no mostren un lligand (substrat o inhibidor) lligat de forma directa. No obstant això, l’anàlisi amb ions plom suggereix l’existència d’un segon lloc de calci, que en els complexos de Michaelis (com en la comparació amb PelC) estaria implicat en pontar el substrat amb l’enzyme. Presència de substrat o inhibidor: Pel que fa a la presència de substrat o inhibidor en l’estructura resolta, tot i haver-se intentat obtenir complexos amb substrat i calci (o utilitzar ions plom per inferir la presència de llocs addicionals de calci), els cristalls de Pel9A no mostren un lligand (substrat o inhibidor) lligat de forma directa. No obstant això, l’anàlisi amb ions plom suggereix l’existència d’un segon lloc de calci, que en els complexos de Michaelis (com en la comparació amb PelC) estaria implicat en pontar el substrat amb l’enzyme.
- Interaccions dins del centre actiu: El calci primari està fortament coordinat pels grups carboxilats d’Asp-209, Asp-233 i Asp-237, establint ponts de coordinació que ajuden a mantenir la geometria adequada per a la reacció i, indirectament, en fixar el substrat. Lys-273, situat a prop d’aquest lloc, actua com a base catalítica, i la seva posició relativa al calci facilita l’absenció del protó del C5 del substrat, iniciant el mecanisme d’eliminació. Els residus Asp-299 i Glu-180, situats a la xapa del substrat, poden formar interaccions electrostàtiques i de ponts d’hidrogen amb els grups carboxilats i hidroxil del substrat, contribuint a l’estabilització del complex enzim-substrat. Interaccions dins del centre actiu:
- El calci primari està fortament coordinat pels grups carboxilats d’Asp-209, Asp-233 i Asp-237, establint ponts de coordinació que ajuden a mantenir la geometria adequada per a la reacció i, indirectament, en fixar el substrat.
- Lys-273, situat a prop d’aquest lloc, actua com a base catalítica, i la seva posició relativa al calci facilita l’absenció del protó del C5 del substrat, iniciant el mecanisme d’eliminació.
- Els residus Asp-299 i Glu-180, situats a la xapa del substrat, poden formar interaccions electrostàtiques i de ponts d’hidrogen amb els grups carboxilats i hidroxil del substrat, contribuint a l’estabilització del complex enzim-substrat. En resum, el centre actiu de Pel9A està definit pel lloc de coordinació del calci (Asp-209, Asp-233, Asp-237), amb Lys-273 com a residu important per a la catalisi, i complementat per altres residus (com Asp-299 i Glu-180) que potencialment ajuden a fixar el substrat. L’estructura resolta no conté un substrat o inhibidor lligat directament, però els estudis amb ions plom indiquen la presència d’un segon lloc de calci que seria rellevant en la formació del complex catalític.

#### Funció de la proteïna

La pectat liasa L és un enzim que degrada la pectina, un component estructural important de la paret cel·lular de les plantes. Catalitza la clivació de pectats (polímers d’àcid galacturònic) mitjançant un mecanisme de β-eliminació, alliberant oligosacàrids insaturats. A diferència d’altres enzims com les poligalacturonases, actua específicament sobre pectats desmetilats (pectat i àcid poligalacturònic). La seva activitat afebleix la paret cel·lular vegetal, facilitant processos com la maceració i la degradació dels teixits vegetals. A més de la seva funció general en la degradació de la pectina, la pectat liasa L pot presentar característiques específiques segons l’organisme en què es troba. Aquest enzim catalitza la β-eliminació, un procés que genera un doble enllaç en els productes finals, modificant-ne la reactivitat química i la solubilitat. Sovint, requereix ions divalents com Ca²⁺ per estabilitzar la seva estructura i activar el substrat. A diferència d’altres pectat liases, la seva activitat pot variar segons el grau d’acetilació i esterificació de la pectina. Biològicament, la pectat liasa L és una eina important per a bacteris i fongs fitopatògens com Erwinia, Pectobacterium i Aspergillus, que la utilitzen per degradar la paret cel·lular vegetal i facilitar la infecció. També pot estar present en microorganismes simbionts d’insectes herbívors, ajudant en la digestió dels teixits vegetals. En l’àmbit biotecnològic, la pectat liasa L té múltiples aplicacions. En la indústria alimentària, s’empra per millorar la clarificació de sucs, optimitzar l’extracció d’olis i pigments, i facilitar la fermentació de productes vegetals. En el sector tèxtil i paperer, es fa servir per al processament de fibres vegetals riques en pectina. Finalment, en enginyeria genètica, es poden modificar aquestes enzims per obtenir una activitat optimitzada en diferents condicions de pH i temperatura, ampliant-ne les aplicacions en biotecnologia. L’estructura de la Pectate lyase L està directament relacionada amb la seva funció catalítica en la degradació de la pectina.
- Domini estructural i estabilitat: L’enzim presenta una estructura de làmines β paral·leles, característica de moltes hidrolases i liases. A més, les hèlix α (tipus 1 i 5) i els bucles ajuden a estabilitzar l’estructura global i poden estar implicats en la unió al substrat. Les interaccions hidrofòbiques, ponts d’hidrogen i interaccions electrostàtiques contribueixen a l’estabilitat de l’estructura i a l’orientació correcta del centre actiu. Domini estructural i estabilitat: L’enzim presenta una estructura de làmines β paral·leles, característica de moltes hidrolases i liases. A més, les hèlix α (tipus 1 i 5) i els bucles ajuden a estabilitzar l’estructura global i poden estar implicats en la unió al substrat. Les interaccions hidrofòbiques, ponts d’hidrogen i interaccions electrostàtiques contribueixen a l’estabilitat de l’estructura i a l’orientació correcta del centre actiu.
- Centre actiu i mecanisme catalític: L’enzim actua per un mecanisme de β-eliminació, trencant els enllaços glicosídics de l’àcid poligalacturònic. A més, l’ió Ca²⁺, coordinat per Asp-209, Asp-233 i Asp-237, és essencial per estabilitzar l’enzim i per posicionar el substrat correctament. La Lys-273 actua com a base catalítica, iniciant la reacció enzimàtica, i l’Asp-299 i el Glu-180 interaccionen amb els grups carboxilats del substrat, estabilitzant la unió i facilitant la catàlisi. Centre actiu i mecanisme catalític: L’enzim actua per un mecanisme de β-eliminació, trencant els enllaços glicosídics de l’àcid poligalacturònic. A més, l’ió Ca²⁺, coordinat per Asp-209, Asp-233 i Asp-237, és essencial per estabilitzar l’enzim i per posicionar el substrat correctament. La Lys-273 actua com a base catalítica, iniciant la reacció enzimàtica, i l’Asp-299 i el Glu-180 interaccionen amb els grups carboxilats del substrat, estabilitzant la unió i facilitant la catàlisi.
- Relació amb la seqüència: La presència de residus àcids (Asp, Glu) en el centre actiu facilita la interacció amb el substrat carregat negativament. Les regions conservades en altres pectat liases indiquen la importància funcional d’aquests dominis estructurals. A més, algunes variants de la proteïna poden modificar l’afinitat pel substrat o l’eficiència catalítica, afectant la seva activitat enzimàtica. Relació amb la seqüència: La presència de residus àcids (Asp, Glu) en el centre actiu facilita la interacció amb el substrat carregat negativament. Les regions conservades en altres pectat liases indiquen la importància funcional d’aquests dominis estructurals. A més, algunes variants de la proteïna poden modificar l’afinitat pel substrat o l’eficiència catalítica, afectant la seva activitat enzimàtica.
- Variants i implicacions funcionals: Les mutacions en Lys-273 redueixen dràsticament l’activitat enzimàtica, demostrant el seu paper crític en la catàlisi. També, les modificacions en la coordinació del calci poden alterar la funció de l’enzim, ja que aquest element és essencial per a la seva activitat. A més, algunes variants poden adaptar-se a diferents condicions de pH i temperatura, fet que pot tenir aplicacions en biotecnologia. Variants i implicacions funcionals: Les mutacions en Lys-273 redueixen dràsticament l’activitat enzimàtica, demostrant el seu paper crític en la catàlisi. També, les modificacions en la coordinació del calci poden alterar la funció de l’enzim, ja que aquest element és essencial per a la seva activitat. A més, algunes variants poden adaptar-se a diferents condicions de pH i temperatura, fet que pot tenir aplicacions en biotecnologia. En resum, la seqüència determina l’estructura, i aquesta estructura defineix la funció de l’enzim. Els elements importants inclouen les làmines β paral·leles, els residus catalítics i la coordinació del calci, tots fonamentals per a la degradació eficient de la pectina.

#### Elements estructurals que participen en la funció -

Fulles β i hèlix α: L’enzim té una estructura dominada per làmines β paral·leles, que formen el nucli estructural de la proteïna. Aquestes fulles estabilitzen la conformació necessària per al centre actiu. Fulles β i hèlix α: L’enzim té una estructura dominada per làmines β paral·leles, que formen el nucli estructural de la proteïna. Aquestes fulles estabilitzen la conformació necessària per al centre actiu.
- Lloc de coordinació del calci: Els residus Asp-209, Asp-233 i Asp-237 són essencials per estabilitzar el ió de Ca²⁺, que alhora facilita la interacció amb el substrat. Lloc de coordinació del calci: Els residus Asp-209, Asp-233 i Asp-237 són essencials per estabilitzar el ió de Ca²⁺, que alhora facilita la interacció amb el substrat.
- Base catalítica: Lys-273 és essencial per a l’eliminació β, actuant com a base que desprotona el substrat. Base catalítica: Lys-273 és essencial per a l’eliminació β, actuant com a base que desprotona el substrat.
- Interaccions secundàries: Residus com Asp-299 i Glu-180 poden estabilitzar el substrat mitjançant ponts d’hidrogen i interaccions electrostàtiques. Interaccions secundàries: Residus com Asp-299 i Glu-180 poden estabilitzar el substrat mitjançant ponts d’hidrogen i interaccions electrostàtiques.

#### Variants amb implicacions funcionals

Algunes mutacions en residus funcionals poden alterar significativament la funció de l’enzim:
- K273A o K273R: La substitució de Lys-273 per alanina o arginina redueix dràsticament l’activitat, ja que impedeix la correcta desprotonació del substrat.
- D209A, D233A, D237A: La mutació d’aquests residus afecta la unió del calci, desestabilitzant el centre actiu i disminuint l’activitat enzimàtica.
- G180D: Aquesta mutació pot alterar la interacció amb el substrat, afectant-ne l’afinitat.

#### Conseqüències moleculars -

Pèrdua de funció: Si el centre actiu es veu afectat per mutacions que impedeixen la coordinació del calci o la desprotonació del substrat, l’enzim deixa de ser funcional.

## Arquitectura molecular

Les pectat liases presenten superfícies allargades o solcs on s’acomoda el polisacàrid. Sovint el calci contribueix a neutralitzar càrregues del pectat.

## Centre actiu i mecanisme

La reacció és una eliminació beta, no una hidròlisi. El producte insaturat reflecteix la química de ruptura del polímer.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/pectate_1ee6.jpeg' | relative_url }}" alt="Pectat liasa: estructura de referència per interpretar el solc de reconeixement del polisacàrid i la química d’eliminació. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Pectat liasa: estructura de referència per interpretar el solc de reconeixement del polisacàrid i la química d’eliminació. Font: <a href="https://www.rcsb.org/structure/1EE6">RCSB PDB 1EE6</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Akita et al., 2001).

## Modificacions, variants i límits d’anotació

El punt funcional principal són residus bàsics/àcids i Ca2+ al solc del polisacàrid, no PTM reguladores. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

## Referències

- Akita, M. et al. (2001). *The first structure of pectate lyase belonging to polysaccharide lyase family 3*. *Acta Crystallographica D*. [doi: 10.1107/S0907444901014482](https://doi.org/10.1107/S0907444901014482).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup K/Pectate lyase L.html' | relative_url }}">pàgina original del grup K</a>.
