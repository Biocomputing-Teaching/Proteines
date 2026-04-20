---
title: "Regulador PadR/LmrR amb domini winged hèlix"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-L-corregida/
author: "Pere Berdié, Anna Cotado i Emma Granados"
---

<p class="qiep-group-label"><strong>Grup L</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>

Autors del treball original: **Pere Berdié, Anna Cotado i Emma Granados**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC L | 2025-2026 | seqüència problema
MAEIPKEMLRAQTNXILLNVLKQGDNYVYGIIKQVKEASNGEMELNEATLYTIFKRLEKDGIISSYWGDESQGGRRKYYR
LTEIGHENMRLAFESWSRVDKIIENLEANKKSEAIKSRWSHPQFEK
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 126 aminoàcids. Posicions amb residu ambigu o no estàndard: 15.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [6I8N](https://www.rcsb.org/structure/6I8N) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.79 Å. La longitud de la seqüència analitzada és de 126 aminoàcids. Registre UniProt candidat A2RI36 (regulador transcripcional de la família PadR/LmrR, cobertura de l’entitat 92, 1%). El gen no apareix anotat al registre recuperat; cal separar l’anotació natural de l’ús com a bastida de disseny.

| Camp | Valor |
|---|---|
| UniProt / gen | [A2RI36](https://www.uniprot.org/uniprotkb/A2RI36); gen: no anotat o no aplicable |
| EC / BRENDA | no assignat |
| Estructura principal | [6I8N](https://www.rcsb.org/structure/6I8N) entitat 1; difracció de raigs X, 1.79 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | dímer regulador de tipus winged hèlix, CATH 1.10.10.10; bastida LmrR/PadR amb residu no canònic en el centre funcional |
| Estructura secundària i lectura ChimeraX | làmina β: 1, hèlix: 4, regions no assignades: 1; exemples: làmina β 26-27, 77-81, 63-67; hèlix 5-24; hèlix 28-39; hèlix 46-60; hèlix 82-111; regions no assignades 1-4, 25, 40-45, 61-62, 68-76, 112-126 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta Strep-II 119-126 (WSHPQFEK); residus no canònics: [15] |

Funcionalment, LmrR/PadR és un regulador dimèric de tipus winged hèlix. En aquesta entrada cal separar la funció reguladora natural d’unió a DNA o lligands de l’ús com a bastida de disseny amb aminoàcid no canònic. 6I8N cobreix tota la seqüència assignada. La proteïna s’inscriu en la família PadR-like; l’etiqueta Strep-tag II final es diferencia del domini funcional.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | PadR/LmrR |
| Estructura de referència | 6I8N |
| Longitud | 126 aa |
| Trets rellevants | Strep-tag II 119-126; domini d’unió al DNA |

### Autoria del treball original

Pere Berdié, Anna Cotado i Emma Granados.

### Sobre la proteïna

Nom del gen: Regulador transcripcional de la família PadR Organisme: Lactococcus lactis subsp. cremoris Gen: RF668_01650 Codi UniProt: A0AAX4A7G0 Classificació EC: No és un enzim (sense codi EC a BRENDA) Font estructural: Model predictiu d’AlphaFold (sense estructura experimental al PDB) La seqüència proporcionada es va analitzar mitjançant BLAST a la base de dades UniProt, obtenint com a millor resultat la proteïna amb codi A0AAX4A7G0, corresponent a un regulador transcripcional de la família PadR de Lactococcus lactis subsp. cremoris. Aquesta família de proteïnes es caracteritza per participar en la regulació de l’expressió gènica, habitualment mitjançant unió al DNA. No s’ha trobat cap classificació EC a la base de dades BRENDA, fet que indica que la proteïna no és un enzim. No s’ha identificat una estructura experimental directa per aquesta proteïna a la base de dades Protein Data Bank (PDB). Per aquest motiu, s’ha utilitzat un model predictiu obtingut mitjançant AlphaFold Protein Structure Database per a l’anàlisi estructural posterior. Figura 1. Predicció de l’estructura de la proteïna reguladora transcripcional de la família PadR de Lactococcus lactis subsp. cremoris, obtinguda de la AlphaFold Protein Structure Database ( https://alphafold.ebi.ac.uk ). Funció: La proteïna és un regulador transcripcional de la família PadR que controla l’expressió gènica mitjançant la unió a seqüències específiques de DNA. Aquesta unió permet modular (generalment reprimir) la transcripció de gens implicats en la resposta a estrès, detoxificació i adaptació metabòlica.

### Treball amb ChimeraX

#### Estructures secundàries i interaccions

S’ha analitzat l’estructura predita per AlphaFold mitjançant UCSF ChimeraX. La proteïna presenta un plegament majoritàriament α-helicoidal amb algunes làmines β curtes i bucles connectors. Les zones vermelles corresponen a les hèlix α. Aquestes tenen una estructura helicoidal compacta i regular. Es formen ponts d’hidrogen intramoleculars entre el grup C=O d’un aminoàcid residu i (és a dir, qualsevol aminoàcid) i el grup N-H del residu i + 4 (4 posicions més endavant). Aquests ponts són paral·lels a l’eix de l’hèlix i estabilitzen l’estructura. Les zones grogues fan referència a les làmines β. Estan formades per cadenes esteses i estructura rígida i plana. En la figura es pot observar com obtenen una configuració antiparal·lela. També formen ponts d’hidrogen però en aquest cas entre cadenes adjacents entre C=O d’una cadena i N-H de l’altre. Per últim, les zones verdes ens indiquen els bucles. Són estructures no regulars que connecten l’hèlix α amb les làmines β que permeten la flexibilitat necessària per als canvis conformacionals requerits per a la unió al DNA i la regulació de l’activitat. Aquesta estructura té interaccions amb el medi. Figura 2. Diferents estructures secundàries. Hèlix α (vermell), làmina β (groc) i bucles (verd). Figura 3. S’observen els ponts d’hidrogen com línies blaves discontínues. Els ponts d’hidrogen mostrats corresponen principalment a interaccions internes que estabilitzen les estructures secundàries (hèlix α i làmines β).

#### Estructures supersecundàries i interaccions

S’ha identificat un motiu d’estructura supersecundària tipus hèlix-gir-hèlix (HTH) format per dues hèlixs α connectades per un bucle curt. Aquest patró s’ha detectat observant l’estructura tridimensional de la proteïna amb UCSF ChimeraX. Aquest motiu és característic de proteïnes reguladores de la transcripció i està implicat en la unió al DNA. Figura 4. HTH (hèlix-gir-hèlix) Amb l’anàlisi de UCSF ChimeraX s’han pogut visualitzar ponts d’hidrogen, representats amb línies discontínues, que estabilitzen tant les hèlixs α com les làmines β presents a la proteïna. També s’ha identificat interaccions de van der Waals, que corresponen a contactes estrets entre residus propers de la proteïna (contactes entre residus de les dues hèlixs). Aquestes interaccions, tot i ser febles individualment, contribueixen conjuntament a estabilitzar l’estructura tridimensional, especialment en el motiu hèlix-gir-hèlix. Aquest conjunt d’interaccions permet mantenir la conformació tridimensional necessària per a la funció de la proteïna. Figura 5. Línies discontínues blaves (ponts d’hidrogen) i verdes (interaccions de van der Waals).

#### Estructura terciària, dominis i família estructural

Estructura terciària: plegament de tipus hèlix-gir-hèlix (HTH), amb un domini principalment α-helicoidal organitzat en un α-helical bundle implicat en la unió al DNA. En la base de dades ECOD, la proteïna es classifica dins: X-group: hèlix-gir-hèlix DNA-binding domain i H-group: PadR-like regulators. Segons CATH, aquesta proteïna s’inclou dins: Class 1: Mainly Alpha, Architecture: Orthogonal Bundle, Topology: HTH-like fold and Homologous superfamily: PadR-like transcriptional regulators. Com a suport, bases de dades com SCOPe també inclouen aquests dominis dins la classe all-alpha proteins, en la família de factors de transcripció amb motiu HTH. Estructura quaternària: la proteïna forma un dímer funcional. Aquesta dimerització és essencial, ja que permet posicionar correctament els dominis HTH per a la unió al DNA i generar una cavitat interfacial implicada en la unió de lligands, important en la regulació de la seva activitat.

### Funció de la proteïna

#### Lloc d’unió a lligands

Com la seqüència proporcionada que nosaltres hem obtingut no és un enzim, és un regulador transcripcional, no té un centre actiu clàssic. En lloc d’això, té un lloc on s’uneixen molècules, és a dir, un lloc d’unió a lligands. Aquesta proteïna funciona com un dímer, és a dir, està formada per dues cadenes idèntiques (monòmers) que s’uneixen per formar una estructura funcional. Aquesta proteïna no presenta un centre actiu clàssic, sinó una cavitat d’unió a lligands situada a la interfície del dímer. Aquesta cavitat té un paper regulador, no catalític. Dins d’aquest forat es troben dos aminoàcids importants (Trp96 i Trp96’). Aquests dos residus són crucials per a l’unió de molècules mitjançant interaccions d’apilament aromàtic (π–π), estabilitzant-les dins la cavitat. Hi ha certes molècules com Hoechst 33342, daunomicina o riboflavina que s’uneixen a aquesta cavitat actuant d’inhibidors dificultant la interacció entre la proteïna i l’ADN a causa dels canvis conformacionals que causen. A més de les interaccions π–π amb els residus de triptòfan, la unió dels lligands també pot implicar interaccions de van der Waals i, en alguns casos, ponts d’hidrogen amb altres residus de la cavitat, contribuint a l’estabilització del complex proteïna-lligand. El model utilitzat correspon a un monòmer, fet que explica que només s’identifiqui un residu Trp96. En l’estructura dimèrica funcional, aquest residu es troba duplicat (Trp96 i Trp96’) formant la cavitat d’unió. Figura 6. Cavitat d’unió a lligands amb Trp96 destacat.

#### Mecanisme de regulació transcripcional

La proteïna estudiada és un regulador transcripcional de la família PadR, per tant no és un enzim i no catalitza cap reacció química. Per tant, ens centrarem en la informació essencial sobre aquesta proteïna. La seva funció és regular l’expressió gènica mitjançant la unió a DNA. Concretament, actua com a repressor transcripcional: en absència de lligands, la proteïna (en forma de dímer) s’uneix a seqüències específiques del DNA en la regió promotora i impedeix la unió de l’ARN polimerasa, inhibint així la transcripció del gen. El mecanisme de regulació és al·lostèric i dependent de lligands. Quan petites molècules (com àcids fenòlics o altres compostos) s’uneixen a una cavitat de la proteïna, es produeix un canvi conformacional que redueix la seva afinitat pel DNA. Això provoca la dissociació de la proteïna del DNA i permet la transcripció del gen (desrepressió). Aquest mecanisme permet a la cèl·lula respondre a canvis ambientals, regulant gens implicats en processos com la detoxificació, resistència a compostos tòxics o adaptació metabòlica. Figura 7. Mecanisme de regulació al·lostèrica de la proteïna PadR. En absència de lligand (part superior), el dímer s’uneix al DNA i bloqueja la transcripció. La unió del lligand indueix un canvi conformacional que provoca la dissociació del DNA i permet la transcripció (desrepressió).

#### Modificacions posttraduccionals

No s’han descrit modificacions posttraduccionals específiques per a aquesta proteïna concreta de la família PadR. No obstant això, en proteïnes reguladores de la transcripció similars, les PTMs són mecanismes habituals de regulació funcional. Les modificacions més probables són:
- Fosforilació en residus de serina, treonina o tirosina: pot actuar com a interruptor molecular alterant la conformació de la proteïna i l’afinitat pel DNA.
- Acetilació en residus de lisina: pot neutralitzar càrrega positiva i disminuir la interacció amb el DNA.
- Metilació en lisina o arginina: pot modular interaccions proteïna-DNA o proteïna-proteïna. Els residus més susceptibles de ser dianes són:
- Residus Lys i Arg del motiu hèlix-gir-hèlix, implicats en la unió al DNA.
- Residus polars exposats a superfície, com Ser, Thr o Tyr, accessibles a enzims modificadors.
- Residus situats a la interfície de dimerització, que podrien regular l’associació dels monòmers.

### Relació seqüència estructura funció

#### Elements estructurals funcionals

La funció de la proteïna com a regulador transcripcional està directament determinada per la seva estructura tridimensional. El plegament de tipus hèlix-gir-hèlix (HTH) constitueix l’element estructural funcional, ja que permet el reconeixement específic i la unió al DNA. En particular, una de les hèlixs (hèlix de reconeixement) s’insereix al solc major del DNA, establint interaccions específiques amb les bases. El motiu HTH és responsable de la unió específica al DNA; les hèlixs α proporcionen estabilitat i orientació del domini d’unió; els bucles aporten flexibilitat; i la interfície de dimerització permet formar el dímer funcional necessari per a la unió efectiva al DNA.

#### Residus funcionals i variants

Els residus funcionals per a la funció són:
- Lys i Arg del motiu HTH, que interaccionen amb el DNA mitjançant interaccions electrostàtiques amb el esquelet fosfat. Lys i Arg del motiu HTH, que interaccionen amb el DNA mitjançant interaccions electrostàtiques amb el esquelet fosfat.
- Trp96 (i Trp96’ en el dímer), implicats en la unió de lligands mitjançant interaccions π–π dins la cavitat central Trp96 (i Trp96’ en el dímer), implicats en la unió de lligands mitjançant interaccions π–π dins la cavitat central Figura 8. Representació electrostàtica També són residus funcionals, altres residus hidrofòbics de la interfície, que estabilitzen la dimerització mitjançant interaccions de van der Waals. Figura 9. Respresentació hidrofòbica Variants funcionals i efectes moleculars: Pel que fa a variants, mutacions en residus funcionals poden tenir efectes funcionals importants, a escala molecular, aquestes alteracions afecten la capacitat de la proteïna per reconèixer el DNA o respondre a senyals cel·lulars, comprometent la seva funció reguladora.
- Mutacions en Lys/Arg del domini HTH poden reduir o abolir la unió al DNA.
- Substitucions en Trp96 poden afectar la unió de lligands i la regulació al·lostèrica.
- Mutacions a la interfície de dimerització poden impedir la formació del dímer i inactivar la proteïna.

## Arquitectura molecular

El domini principal és de tipus winged hèlix, amb hèlixs de reconeixement i elements beta que contribueixen a la interacció amb DNA. La dimerització és part del context funcional de molts reguladors d’aquesta família.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura1.png' | relative_url }}" alt="Figura 1 del grup L" loading="lazy"> <figcaption><strong>Figura 1.</strong> PadR/LmrR: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura2.jpg' | relative_url }}" alt="Figura 2 del grup L" loading="lazy"> <figcaption><strong>Figura 2.</strong> PadR/LmrR: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

La funció molecular és reguladora: unió a DNA i modulació de transcripció, amb possibles efectes de lligands segons l’homologia amb LmrR. Les afirmacions sobre cavitats o lligands s’han de vincular a l’estructura o a l’homòleg corresponent.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/padr_6i8n.jpeg' | relative_url }}" alt="Estructura 6I8N del regulador PadR-like amb domini winged hèlix. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura 6I8N del regulador PadR-like amb domini winged hèlix. Font: <a href="https://www.rcsb.org/structure/6I8N">RCSB PDB 6I8N</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Mayer et al., 2019).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura3.jpg' | relative_url }}" alt="Figura 3 del grup L" loading="lazy"> <figcaption><strong>Figura 3.</strong> PadR/LmrR: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura4.jpg' | relative_url }}" alt="Figura 4 del grup L" loading="lazy"> <figcaption><strong>Figura 4.</strong> PadR/LmrR: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

En LmrR/PadR, els punts funcionals són els residus de la interfície dimèrica, el domini winged hèlix i el residu no canònic emprat en el disseny. Les posicions d’unió anotades a UniProt/PDB s’han de remapar a la numeració del constructe 6I8N abans de relacionar-les amb DNA, lligands o catàlisi artificial.

## Relació seqüència-estructura-funció

La seqüència es llegeix separant el domini winged hèlix, les posicions potencialment implicades en DNA i el tram final d’etiqueta. Aquesta frontera evita interpretar l’etiqueta com a part de la funció reguladora.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura5.png' | relative_url }}" alt="Figura 5 del grup L" loading="lazy"> <figcaption><strong>Figura 5.</strong> PadR/LmrR: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura6.jpg' | relative_url }}" alt="Figura 6 del grup L" loading="lazy"> <figcaption><strong>Figura 6.</strong> PadR/LmrR: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura7.png' | relative_url }}" alt="Figura 7 del grup L" loading="lazy"> <figcaption><strong>Figura 7.</strong> PadR/LmrR: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura8.png' | relative_url }}" alt="Figura 8 del grup L" loading="lazy"> <figcaption><strong>Figura 8.</strong> PadR/LmrR: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Figura9.png' | relative_url }}" alt="Figura 9 del grup L" loading="lazy"> <figcaption><strong>Figura 9.</strong> PadR/LmrR: vista global del plegament. </figcaption>
</figure>

## Referències

- Mayer, C. et al. (2019). *Directed Evolution of a Designer Enzyme Featuring an Unnatural Catalytic Amino Acid*. *Angewandte Chemie International Edition*. [doi: 10.1002/anie.201813499](https://doi.org/10.1002/anie.201813499).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup L/Practica1grupL.html' | relative_url }}">pàgina original del grup L</a>.
