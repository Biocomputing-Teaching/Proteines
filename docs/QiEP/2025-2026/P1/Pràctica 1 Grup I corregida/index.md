---
title: "KE07: eliminasa de Kemp dissenyada"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-I-corregida/
author: "Gerard Pañach, Ester Forés, Clara Alabau, Txell Cassases, Estel Àlvarez"
---

<p class="qiep-group-label"><strong>Grup I</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>

Autors del treball original: **Gerard Pañach, Ester Forés, Clara Alabau, Txell Cassases, Estel Àlvarez**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC I | 2025-2026 | seqüència problema
MALAKRIDAALIMKDGRVVKGSNFENLRDSGDPVELGKFYSEIGIDELSFWDITASVEKRKTMLELVEKVAEQIDIPFTV
GGGIHDFETASELILRGADKVEINTAAVENPSLITQIAQTFGSQAVVVYIAAKRVDGEFMVFTYSGKKNTGILLRDWVVE
VEKRGAGEIVLGSIDRLGTKSGYDTEMIRFVRPLTTLPIIAHRGAGKMEHFLEAFLAGADAAKADSVFHFREIDVRELKE
YLKKHGVNVRLEGLGSLEHHHHHH
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 264 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [6C7M](https://www.rcsb.org/structure/6C7M) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.45 Å. La longitud de la seqüència analitzada és de 264 aminoàcids. No s’ha trobat cap referència UniProt directa per a la millor entitat PDB; la seqüència s’ha de tractar com a constructe o proteïna de disseny si no hi ha una cerca addicional que en justifiqui una assignació natural.

| Camp | Valor |
|---|---|
| UniProt / gen | cap registre UniProt directe per al constructe; gen: no anotat o no aplicable |
| EC / BRENDA | no assignat |
| Estructura principal | [6C7M](https://www.rcsb.org/structure/6C7M) entitat 1; difracció de raigs X, 1.45 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | bastida de barril TIM/aldolasa de classe I, CATH 3.20.20.70, remodelada peliminació de Kemp |
| Estructura secundària i lectura ChimeraX | làmina β: 2, hèlix: 12, regions no assignades: 1; exemples: làmina β 17-18, 6-14, 47-52, 78-81, 100-103, 126-135, 138-143, 148-153; làmina β 17-18, 6-14, 221-224, 199-202, 168-173, 126-135, 138-143, 148-153; hèlix 32-44; hèlix 55-74; hèlix 86-97; hèlix 104-110; hèlix 111-122; hèlix 154-165 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | etiqueta d’histidines 259-264 (HHHHHH) |

Funcionalment, KE07 és una eliminasa de Kemp dissenyada. No té una funció natural de genoma; el mecanisme s’ha d’explicar a partir dels residus introduïts, la cavitat catalítica i la literatura de disseny enzimàtic. 6C7M és la coincidència exacta de KE07.8S8S pot usar-se com a homòleg estructural proper, però la identitat i la funció de la seqüència assignada corresponen a KE07.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | Kemp eliminase KE07 |
| Estructura de referència | 6C7M |
| Longitud | 264 aa |
| Trets rellevants | His 259-264; barril TIM |


### Identificació aportada pels autors

**Nom de la proteïna:**

Imidazole glycerol phosphate synthase subunit
HisF **Organisme:** thermotoga maritima **Codi UniProt:** WP_004080486 **Gen:** hisF **Aa:** 253 **Classificació EC:** EC: 4.3.2.10

#### Estructura: {#estructura}

Codi PDB: pdb_00008s8s La proteïna està ben caracteritzada estructuralment al PDB amb múltiples
entrades. Entre elles, 8S8S és l’opció òptima per continuar el treball
perquè maximitza la qualitat estructural sense perdre informació de
seqüència.

#### Funció: {#funció}

L'enzim està involucrat a la biosíntesi d'histidina, així com a la
biosíntesi de nucleòtids de purina. Els enzims d'arquees i bacteris són
heterodimèrics. Un component de glutaminasa (cf. EC 3.5.1.2,
glutaminasa) produeix una molècula d'amoníac que es transfereix per un
túnel de 25 Å a un component de ciclasa, que l'afegeix a l’anell
d'imidazol, cosa que porta a la lisi de la molècula i a la ciclificació
d’un. La subunitat de glutaminasa només està activa dins el complex
dimèric. En fongs i plantes, les dues subunitats es combinen en un sol
polipèptid.

### Treball amb ChimeraX

#### Estructures secundàries {#estructures-secundàries}

La subunitat HisF de la imidazole‑glycerol‑phosphate synthase està
formada per una única cadena polipeptídica. Aquesta cadena presenta una
estructura secundària ben definida, composta principalment per hèlixs α,
làmines β i llaços o girs, elements que contribueixen de manera
essencial a l’estabilitat del seu plegament en barril TIM i a la seva
funció catalítica. Les **hèlixs α** es formen quan la cadena polipeptídica s’enrotlla sobre
si mateixa. Els ponts d’hidrogen (línies discontínues grogues) es formen
de manera intercatenària entre l’oxigen del grup carbonil d’un
aminoàcid i l’hidrogen del grup amino de l’aminoàcid situat quatre
posicions més endavant, fet que aporta rigidesa i estabilitat a
l’estructura. Les **làmines β** constitueixen una altra part essencial, la direcció de
la fletxa indica el sentit de la cadena. Els ponts d’hidrogen són
intercatenaris. Poden ser paral·leles (les cadenes van en el mateix
sentit) o antiparal·leles (les cadenes van en sentits oposats, solen ser
més estables), i formen el nucli estructural del plegament. Els **girs i llaços** connecten les hèlixs α i les làmines β,
proporcionant la flexibilitat necessària perquè la proteïna pugui dur a
terme els seus canvis conformacionals durant la catàlisi. Aquestes
regions, més flexibles que els elements regulars d’estructura
secundària, poden estabilitzar els canvis de direcció mitjançant ponts
d’hidrogen amb l’aigua o amb altres parts de la proteïna, contribuint
així al plegament i a la dinàmica funcional de l’enzim. Els **ponts d’hidrogen** estabilitzen l’estructura de la proteïna. En
les hèlixs α i les làmines β mantenen la seva forma característica,
mentre que en els girs i llaços ajuden a fixar els canvis de direcció i
aporten flexibilitat. El conjunt d’hèlixs α, làmines β i llaços, amb els ponts d’hidrogen
ajuden a estabilitzar i confereix a la subunitat HisF una elevada
estabilitat estructural i la flexibilitat necessària per dur a terme la
seva funció catalítica dins del complex ImGPS. cadena polipeptídica taronja es veuen les hèlix α, en lila les làmines β i en rosa els
llaços. ](figura2.png){width="318"} **Figura 2. ** figura de la cadena
polipeptídica de HisF. On en color taronja es veuen les hèlix α, en lila
les làmines β i en rosa els llaços.

#### Estructures supersecundàries

Les figures dels autors mostren el motiu de barril TIM i contactes interns entre làmines, hèlixs i llaços. En l’estructura de la subunitat HisF es poden identificar diversos
motius supersecundaris formats per la combinació d’hèlixs α i làmines β.
Entre aquests destaca el motiu β‑α‑β, on una làmina β es connecta amb
una hèlix α mitjançant un llaç, contribuint a l’organització del barril
TIM. També s’observen β‑hairpins, formats per dues cadenes de làmina
unides per un gir curt, que reforcen el nucli central de la proteïna.
Aquestes estructures es mantenen gràcies a ponts d’hidrogen entre les
cadenes de les làmines β i als ponts d’hidrogen interns de les hèlixs α,
mentre que les interaccions de van der Waals entre les cadenes laterals
afavoreixen l’empaquetament compacte del nucli proteic. A la figura 4_d s’observa en color groc, una de les unitats
repetitives que conformen l'arquitectura de barril TIM (TIM barrel), on
s'observa la connexió entre una làmina β i una hèlix alpha. La
superfície representada en gris fosc (transparent)evidencia
l'empaquetament hidrofòbic del nucli proteic, fonamentat en interaccions
de van der Waals entre les cadenes laterals de les estructures
secundàries, essent aquest motiu estructural el responsable de
l'estabilitat i la rigidesa necessàries per a la funció catalítica de
l’enzim.

#### Estructura terciària {#estructura-terciària}

#### Plegament terciari, dominis i estructura quaternària

La jerarquia ECOD per al domini e8s8sA01 (cadena A, residus 2-251) és
molt clara:
- X (Architecture): TIM beta/alpha-barrel. Aquest és el plegament de
l’estructura terciària.
- H (Homology): TIM barrels.
- T (Topology): TIM barrels.
- F (Functional Family): His_biosynth (Biosíntesi d'Histidina). **Discussió del plegament (Estructura Terciària):** El plegament de tipus **TIM barrel** (barril TIM o (\\alpha/\\beta)) és
un dels més comuns i estables en la natura. Consisteix en 8 làmines
\\beta paral·leles que formen un cilindre central (el barril),
envoltades per 8 hèlixs alpha externes que es connecten a les làmines
mitjançant bucles. Si busquem el codi PDB **8S8S** a CATH, la jerarquia corresponent seria:
- **C (Class):** 3 (Alpha Beta).
- **A (Architecture):** 3.20 (Alpha-Beta Barrel).
- **T (Topology):** 3.20.20 (TIM Barrel).
- **H (Homologous Superfamily):** 3.20.20.120 (Aldolase). om que és un barril TIM, l’estructura es basa en la repetició del motiu
supersecundari **\\beta-\\alpha-\\beta**.
- **Interaccions:** El barril es manté tancat gràcies als **ponts
d’hidrogen** entre les làmines \\beta paral·leles del nucli. **Estabilitat:** Les forces de **van der Waals** i l'**efecte
hidrofòbic** són crítics en la interfície entre el barril \$\\beta\$
intern i les hèlixs \\alpha externes, empaquetant les cadenes laterals
apolars per evitar el contacte amb l’aigua. En cuant a l’estructura quaternaria el codi PDB 8S8S correspon a una
Imidazoleglycerol-phosphate dehydratase (IGPD) de Schizosaccharomyces
pombe.

#### Centre actiu i residus rellevants

L'estructura que heu explorat inclou
algun substrat o inhibidor? Podeu descriure les interaccions entre els
residus del centre actiu i, eventualment, entre aquests residus i el
possible substrat o inhibidor, com ara ponts d’hidrogen, interaccions de
van der Waals o càrregues? ** El centre actiu de l’enzim HisF de Thermotoga maritima es localitza a
l'extrem C-terminal del seu barril TIM, concretament en una cavitat
formada pels bucles que connecten les làmines β amb les hèlixs alpha,
on s'allotja un complex mecanisme de catàlisi i unió; aquest espai conté
quatre residus fonamentals (Asp11, His228, Asp130 i His178) que
configuren un doble sistema de relleu de protons essencial per a la
ciclació del substrat, a més de residus com l'Arg5, la Lys19 i la Thr164
que actuen com a ancoratges electrostàtics per als grups fosfat del
PRFAR, permetent que el substrat s'estabilitzi mitjançant una xarxa de
ponts d’hidrogen amb aspartats i histidines, interaccions de càrrega amb
aminoàcids positius i interaccions de van der Waals que asseguren un encaix
induït perfecte dins la cavitat hidrofòbica de l’enzim. En la figura 2_b es mostra l'esquelet de la proteïna envoltat per una
densa xarxa de línies blaves que representen els ponts d’hidrogen
essencials per a la seva estabilitat tèrmica. En color blau clar es
ressalten els residus funcionals del centre actiu, situats a la cavitat
superior del barril TIM, que són els responsables de la catàlisi química
necessària per a la síntesi d'histidina. His228. ](figura6_a.png){width="318"} **Figura 6_a. ** Residus del centre
actiu com Asp 11 o His228. l'HisF. ](figura6_b.png){width="318"} **Figura 6_b. ** Xarxa
d'estabilització i centre actiu de l'HisF.

#### Funció de la proteïna {#funció-de-la-proteïna}

L'IGPS catalitza la conversió de PRFAR i glutamina a IGP, AICAR i
glutamat. La subunitat HisF catalitza l’activitat de ciclació que
produeix IGP i AICAR a partir de PRFAR utilitzant l'amoníac proporcionat
per la subunitat HisH. glutamat. ](figura7.png) **Figura 7. **Conversió de PRFAR i glutamina a
IGP, AICAR i glutamat.

#### Modificacions posttraduccionals {#modificacions-posttraduccionals}

Les modificacions posttraduccionals (PTMs) són molt importants per
regular l’activitat i l’estabilitat de les proteïnes. En el cas de la
subunitat HisF de la IGP sintasa, no hi ha gaires modificacions
descrites de manera específica, però es poden inferir a partir del que
s’observa en altres enzims metabòlics similars. Les modificacions més probables inclouen la fosforilació, que pot
regular l’activitat enzimàtica, i l’acetilació, molt habitual en enzims
del metabolisme, que pot influir en la seva funció. També es poden donar
oxidacions en residus sensibles, així com, en menor mesura, metilacions
o ubiquitinacions. Pel que fa als residus implicats, la fosforilació sol
produir-se principalment en serines, treonines i tirosines. La lisina és
important per a processos com l’acetilació i la ubiquitinació. La cisteïna
pot patir oxidacions relacionades amb l’estat redox de la cèl·lula. A
més, la histidina també podria ser modificada, tenint en compte la seva
importància en el centre actiu de molts enzims. En una proteïna com HisF (253 aminoàcids), és probable que hi hagi
diversos residus susceptibles de modificació al llarg de la seqüència,
especialment lisines, serines, treonines i cisteïnes, que podrien actuar
com a punts de regulació de l’activitat enzimàtica. La subunitat HisF de Thermotoga maritima funciona com un barril rígid de
tipus TIM que li permet resistir temperatures extremes i, gràcies a un
túnel intern de 25 Å, canalitza l’amoníac de forma segura cap al seu
centre actiu per fabricar histidina. Aquest centre actiu, situat al
final de les làmines, utilitza uns "relleus" de protons formats pels
parells Asp11-His228 i Asp130-His178 per completar la reacció. La
importància d’aquesta estructura es veu en les mutacions: si canviem els
aspartats important per alanines (D130A, D11A), l’enzim perd la seva
capacitat química tot i mantenir la seva forma. Si les mutacions afecten
les zones de contacte amb l'altra subunitat (com Arg5 o Lys19),
l'amoníac s'escapa pel camí i la feina es torna molt ineficient.
Finalment, si s'altera el nucli interior de la proteïna, el barril perd
la seva solidesa i es desmunta amb la calor. En definitiva, la seqüència
està optimitzada per garantir que l’enzim mantingui la seva forma i
pugui moure els protons amb precisió, assegurant que la síntesi funcioni
correctament en l'ambient termòfil on viu l’organisme. l'HisF. ](figura8.png){width="318"} **Figura 8. ** Canal intern i centre
actiu de l'HisF. A la figura 8 tenim la representació en superfície semitransparent que
permet observar el túnel intern de 25 Å que travessa el barril TIM,
facilitant el transport segur de l'amoníac. Els residus marcats en
vermell identifiquen el centre actiu a l'extrem del canal, on es
produeix la catàlisi essencial per a la biosíntesi d'histidina,
demostrant la integració entre l’estructura interna i la funció
enzimàtica.

## Arquitectura molecular

El plegament és compatible amb un barril TIM. La cavitat central permet situar residus dissenyats que orienten el substrat de la reacció de Kemp.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura1.png' | relative_url }}" alt="Figura 1 del grup I" loading="lazy"> <figcaption><strong>Figura 1.</strong> Kemp eliminase KE07: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura2.png' | relative_url }}" alt="Figura 2 del grup I" loading="lazy"> <figcaption><strong>Figura 2.</strong> Kemp eliminase KE07: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

L’eliminació de Kemp requereix orientar el substrat i facilitar una transferència de protó. En KE07, la funció s’explica a partir d’un microambient catalític artificial construït dins la bastida.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/ke07_6c7m.jpeg' | relative_url }}" alt="Estructura 6C7M de KE07, eliminasa de Kemp dissenyada. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura 6C7M de KE07, eliminasa de Kemp dissenyada. Font: <a href="https://www.rcsb.org/structure/6C7M">RCSB PDB 6C7M</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Hong et al., 2018).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura3.png' | relative_url }}" alt="Figura 3 del grup I" loading="lazy"> <figcaption><strong>Figura 3.</strong> Kemp eliminase KE07: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura4_a.png' | relative_url }}" alt="Figura 4 del grup I" loading="lazy"> <figcaption><strong>Figura 4.</strong> Kemp eliminase KE07: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

No hi ha un registre UniProt natural directe associat a la millor entitat PDB. En aquest cas no és correcte importar PTM o variants d’una proteïna natural sense un alineament explícit; les variants importants són les pròpies del disseny, de la interfície o del centre funcional definit a la publicació estructural.

## Relació seqüència-estructura-funció

La comparació 6C7M-8S8S és útil només si es conserva el remapeig de numeració. Els residus funcionals s’han de discutir sobre KE07; l’homòleg ajuda a contextualitzar el plegament.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura4_b.png' | relative_url }}" alt="Figura 5 del grup I" loading="lazy"> <figcaption><strong>Figura 5.</strong> Kemp eliminase KE07: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura4_c.png' | relative_url }}" alt="Figura 6 del grup I" loading="lazy"> <figcaption><strong>Figura 6.</strong> Kemp eliminase KE07: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura4_d.png' | relative_url }}" alt="Figura 7 del grup I" loading="lazy"> <figcaption><strong>Figura 7.</strong> Kemp eliminase KE07: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura5.png' | relative_url }}" alt="Figura 8 del grup I" loading="lazy"> <figcaption><strong>Figura 8.</strong> Kemp eliminase KE07: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura6_a.png' | relative_url }}" alt="Figura 9 del grup I" loading="lazy"> <figcaption><strong>Figura 9.</strong> Kemp eliminase KE07: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/figura6_b.png' | relative_url }}" alt="Figura 10 del grup I" loading="lazy"> <figcaption><strong>Figura 10.</strong> Kemp eliminase KE07: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Hong, N. S. et al. (2018). *The evolution of multiple active site configurations in a designed enzyme*. *Nature Communications*. [doi: 10.1038/s41467-018-06305-y](https://doi.org/10.1038/s41467-018-06305-y). L’origen del disseny KE és Röthlisberger, D. et al. (2008), [doi: 10.1038/nature06879](https://doi.org/10.1038/nature06879).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup I/Pràctica1_QEP_Grup_I.html' | relative_url }}">pàgina original del grup I</a>.
