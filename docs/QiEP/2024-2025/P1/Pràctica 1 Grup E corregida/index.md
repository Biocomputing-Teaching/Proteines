---
title: "Sucrosa isomerasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-E-corregida/
author: "Queralt Datzira, Elsa Gutiérrez i Ariadna Parisi"
---

<p class="qiep-group-label"><strong>Grup E</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>

Autors del treball original: **Queralt Datzira, Elsa Gutiérrez i Ariadna Parisi**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>tr|M1E1F7|M1E1F7_9HYPH Sucrose isomerase OS=Rhizobium sp. MX-45 OX=1071045 GN=mutB PE=1 SV=1 | 2024-2025 | seqüència problema
KPGAPWWKSAVFYQVYPRSFKDTNGDGIGDFKGLTEKLDYLKGLGIDAIWINPHYAspNTDNGYDISDYREVMKEYGTME
DFDRLMAELKKRGMRLMVDVVINHSSDQHEWFKSSRASKDNPYRDYYFWRDGKDGHEPNNYPSFFGGSAWEKDPVTGQYY
LHYFGRQQPDLNWDTPKLREELYAMLRFWLDKGVSGMRFDTVATYSKTPGFPDLTPEQMKNFAEAYTQGPNLHRYLQEMH
EKVFDHYDAVTAGEIFGAPLNQVPLFIDSRRKELDMAFTFDLICYDRALDRWHTIPRTLADFRQTIDKVDAIAGEYGWNT
FFLGNHDNPRAVSHFGDDRPQWREASAKALATVTLTQRGTPFIFQGDELGMTNYPFKTLQDFDDIEVKGFFQDYVETGKA
TAEELLTNVALTSRDNARTPFQWDDSANAGFTTGKPWLKVNPNYTEINAAREIGDPKSVYSFYRNLISIRHETPALSTGS
YRDIDPSNADVYAYTRSQDGETYLVVVNFKAEPRSFTLPDGMHIAETLIESSSPAAPAAGAASLELQPWQSGIYKVK
```

Seqüència recuperada de UniProt M1E1F7. Longitud: 557 aminoàcids. Cisteïnes: 284.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a sacarosa isomerasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | M1E1F7; gen: sucrose isomerase |
| EC / BRENDA | 5.4.99.11 |
| Estructura principal | 4H2C |
| Plegament o família | enzim de família GH13 amb barril catalític i dominis auxiliars de reconeixement de carbohidrats |
| Estructura secundària i lectura ChimeraX | barril catalític GH13 amb dominis auxiliars; el solc de carbohidrat i els residus àcids conservats defineixen la química |
| Lligands, cofactors o centre actiu | sacarosa o inhibidors de carbohidrat al centre catalític; els residus àcids conservats executen la química glicosídica |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La sucrosa isomerasa reordena l’enllaç glucosídic de la sucrosa i genera productes d’interès alimentari i biotecnològic.

## PRÀCTICA 1

### Relacions estructura-funció de proteïnes

#### Queralt

Datzira, Elsa Gutiérrez i Ariadna Parisi - [PRÀCTICA 1](#pràctica-1)
- [Queralt Datzira, Elsa Gutiérrez i Ariadna Parisi](#queralt-datzira-elsa-gutiérrez-i-ariadna-parisi)
- [Tipus d'estructures secundàries detectades](#tipus-destructures-secundàries-detectades)
- [Motius de l’estructura supersecundària](#motius-de-lestructura-supersecundària)
- [Estructura terciària i classificació SCOP](#estructura-terciària-i-classificació-scop)
- [Localització del centre actiu](#localització-del-centre-actiu)
- [Residus rellevants](#residus-rellevants)
- [Substrats i inhibidors](#substrats-i-inhibidors)
- [Interaccions entre residus del centre actiu i substrat/inhibidor](#interaccions-entre-residus-del-centre-actiu-i-substratinhibidor)
- [Ponts salins](#ponts-salins)
- [Ponts d’hidrogen](#ponts-dhidrogen)
- [Interaccions aromàtiques](#interaccions-aromàtiques)

## Informació sobre la proteïna
La proteïna estudiada és **l’enzim isomerasa de sacarosa**, més concretament el gen **mutB** d’aquest enzim.
El codi UniProt d’aquest enzim: [**M1E1F7**](https://www.uniprot.org/uniprotkb/M1E1F7/entry) i al tractar-se d’un enzim torbem també codi BRENDA: [**EC. 5.4.99.11**](https://www.brenda-enzymes.org/enzyme.php?ecno=5.4.99.11).
El codi PDB: [**4H2C**](https://www.rcsb.org/structure/4H2C), ens determina que només hi ha una estructura a 1, 70Å vàlida. La seqüència de la proteïna és:

## Estructura de la proteïna

### Treball amb ChimeraX

#### Tipus d'estructures secundàries detectades
Hem diferenciat les següents estructures secundàries en la proteïna:
- **Hèlix α**:
- **Hèlix 3₁₀:** Més compacta, amb 3 residus per volta i ponts d’hidrogen entre residus separats per 3 posicions.
- **Hèlix α:** La més comuna, amb 3.6 residus per volta estabilitzada per ponts d’hidrogen entre el C=O d’un residu i el N-H del residu situat 4 posicions més endavant.
- **Làmines β:**
- **Tipus 0:** Cadenes perfectament alineades sense desplaçament.
- **Tipus 1:** Desplaçament d’un residu entre les cadenes.
- **Tipus -1:** Desplaçament en direcció oposada.
- **Llaços:** 7 llaços connectant estructures secundàries i permeten canvis de direcció. *Figura 1: Estructura de la proteïna amb els ponts d’hidrogen marcats. * Identifiquem 3158 **Ponts d’hidrogen interns** en total.
- Que formen part d'**Hèlix α:** 838
- Que formen part de **Làmines β:** 273
- I la resta, formen part d' **Altres interaccions:** 2047 (llaços, aigua, subunitats, etc. ) Per una millor visualització, hem assignat colors: vermell per a les hèlixs, blau per a les fulles i verd per als llaços. *Figura 2: Estructura de la porteïna amb diferenciació de colors segons les estructures. *

### Motius de l’estructura supersecundària
El motiu detectat és **hèlix-gir-hèlix**, freqüent en factors de transcripció. *Figura 3: Visualització d’un motiu hèlix-gir-hèlix a l’estructura de la proteïna. * *Figura 4: Motiu hèlix-gir-hèlix amb les interaccions ponts d’hidrogen marcats. * Aquest motiu **beta-bucle** és comú en estructures beta i permet la connexió entre dues làmines β antiparal·leles mitjançant un gir. *Figura 5: Visualització d’un motiu beta-bucle a l’estructura de la proteïna. * *Figura 6: Motiu beta-bucle amb les interaccions ponts d’hidrogen marcats. * Trobem **Interaccions estabilitzadores** com:
- **Ponts d’hidrogen**, els observem a través de les línies blaves discontínues i estabilitzen aquestes estructures.
- **Interaccions van der Waals** entre diferents elements estructurals.

### Estructura terciària i classificació SCOP
L'estructura terciària es caracteritza per un **plegament globular** amb una disposició de **barrel α/β**, típic de les **isomerases de sucrosa**.
- **Codi SCOP:** `a. 118.1.2`
- **Jerarquia SCOP:**
- **Classe:** Proteïnes α/β
- **Plegament:** Barrel α/β tancat
- **Superfamília:** Barrel tipus isomerasa
- **Família:** Barrel tipus isomerasa
- **Proteïna:** Sucrose isomerase Aquesta proteïna **no té una estructura quaternària**, ja que es presenta com una **proteïna monomèrica** i no forma complexos amb altres cadenes polipeptídiques.

## Funció de la proteïna

### Localització del centre actiu
El centre actiu de la proteïna es localitza al **domini A** i té forma de **butxaca**. *Figura 7: Centre actiu de l’enzim localitzat al domini A. *

#### Residus rellevants
- **Un residu nucleòfil**
- **El residu que actua com a àcid/base general**: Glu254 *Figura 8: Residu àcid/base de la cadena A de l’enzim isomerasa de sacarosa identificat com Glu254. * - **El residu que estabilitza l’estat de transició**: Asp327 *(No localitzable per la cristal·lografia de raigs X)*

#### Substrats i inhibidors
- **Substrat**: La **sacarosa**, que es transforma per una reacció d’isomerització a **isomaltulosa** i **trehalulosa**.
- **Inhibidors**:
- **Glucosa**: Quan està unida al centre actiu, impedeix la unió del substrat i bloqueja la reacció.
- **Deoxynojirimycin**: Mencionat com a possible inhibidor, però sense activitat inhibidora demostrada.

#### Interaccions entre residus del centre actiu i substrat/inhibidor

#### Ponts salins
- **Arg414 - Asp61**
- **Arg414 - Asp384**
- Aquestes interaccions ajuden a mantenir la forma de butxaca funcional.

#### Ponts d’hidrogen
- **Wat4101** (*molècula d’aigua catalítica*) forma enllaços d’hidrogen amb:
- Asn325
- Asp327
- Glu254

#### Interaccions aromàtiques
- **Phe164 i Phe280** estableixen interaccions aromàtiques amb la glucosa.

### Funció de la proteïna i mecanisme de reacció
L'**isomerasa de sacarosa** catalitza la conversió de **sacarosa** en **isomaltulosa** i **trehalulosa** per mitjà d’una **isomerització**, sense trencar la molècula. També pot hidrolitzar la sacarosa en monosacàrids com poden ser la glucosa i la fructosa. *Figura 9: Mecanisme de reacció de l’enzim. Extret [Acta Crystallographica](https://journals.iucr.org/paper?S0907444912045532). * - **Centre actiu en forma de butxaca**: Impedeix l’entrada d’aigua i afavoreix la reacció d’isomerització.
- **Interaccions estabilitzadores**:
- Ponts salins **(Arg414 - Asp61 - Asp384)** mantenen la forma de la butxaca.
- **Residus aromàtics (Phe164, Phe280)** controlen la interacció amb el substrat.
- **Asp327 i Glu254** són essencials per a la funció catalítica.
- **Residus conservats (Asp61, Phe145, Phe164, Gln168, Arg414)** contribueixen al reconeixement del substrat i estabilització del complex.

#### Residus funcionals per a la funció
- **Asp327 i Glu254**: Participen en la catàlisi mitjançant ponts d’hidrogen.
- **Phe164 i Phe280**: Regulen l’accés del substrat.
- **Arg414, Asp61 i Asp384**: Formen ponts salins per estabilitzar la conformació.

#### Variants de la proteïna i efectes funcionals
S'han identificat mutacions en:
- **R284C i F164L**: Afecten el centre actiu, obrint la butxaca i permetent l’entrada d’aigua.
- Això redueix la capacitat d’isomerització i afavoreix la hidròlisi de la sacarosa en glucosa i fructosa. *Figura 10: Funcionalitat de les variants de l’enzim. Extret [Acta Crystallographica](https://journals.iucr.org/paper?S0907444912045532). *

## Arquitectura molecular

La sucrosa isomerasa presenta un domini catalític de la família de glicosidases i una cavitat capaç de retenir els dos monosacàrids durant el reordenament de l’enllaç.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/betta_supersecundaria.png' | relative_url }}" alt="Figura 1 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Sucrosa isomerasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/centre actiu.png' | relative_url }}" alt="Figura 2 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Sucrosa isomerasa: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

La reacció trenca i refà l’enllaç glucosídic sense una hidròlisi completa. La posició relativa de glucosa i fructosa determina la proporció d’isomaltulosa i altres productes.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/sucrose_condensation.svg' | relative_url }}" alt="Esquema químic de la sucrosa; punt de partida per interpretar el reordenament glicosídic catalitzat per sucrosa isomerasa. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Esquema químic de la sucrosa; punt de partida per interpretar el reordenament glicosídic catalitzat per sucrosa isomerasa. Font: <a href="https://commons.wikimedia.org/wiki/File:Sucrose_condensation.svg">Wikimedia Commons, Sucrose condensation</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Ravaud et al., 2009).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/mecanisme_reaccio.png' | relative_url }}" alt="Figura 3 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Sucrosa isomerasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/ph_betta_supersecundaria.png' | relative_url }}" alt="Figura 4 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Sucrosa isomerasa: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

En el cas dels enzims bacterians/industrials el punt central és l’especificitat de producte i les mutacions de butxaca, més que PTM reguladores. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/ph_supersecundaria.png' | relative_url }}" alt="Figura 5 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Sucrosa isomerasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/ponts hidrogen.png' | relative_url }}" alt="Figura 6 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Sucrosa isomerasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/residu.png' | relative_url }}" alt="Figura 7 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Sucrosa isomerasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/supersecundaria.png' | relative_url }}" alt="Figura 8 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Sucrosa isomerasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/variants.png' | relative_url }}" alt="Figura 9 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Sucrosa isomerasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/visualitzacio.png' | relative_url }}" alt="Figura 10 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Sucrosa isomerasa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Ravaud, S. et al. (2009). *Structural importants of product specificity of sucrose isomerases*. *FEBS Letters*. [doi: 10.1016/j.febslet. 2009.05.002](https://doi.org/10.1016/j.febslet.2009.05.002).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/practica1.md' | relative_url }}">pàgina original del grup E</a>.
