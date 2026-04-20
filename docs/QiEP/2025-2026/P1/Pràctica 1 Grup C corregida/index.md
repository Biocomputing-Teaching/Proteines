---
title: "D_3_212: proteïna simètrica de disseny"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-C-corregida/
author: "Carla Gómez, Irene Herrada, Abril Insa, Oriol Martí i Marina Valor"
---

<p class="qiep-group-label"><strong>Grup C</strong> · Química i Enginyeria de Proteïnes 2025-2026</p> Autors del treball original: **Carla Gómez, Irene Herrada, Abril Insa, Oriol Martí i Marina Valor**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>JC C | 2025-2026 | seqüència problema
SGSGSTEEEEALLRWFQTLLAKFDELVKQLGDPRLLEEARRLQERLEEAKKRGDKRTIKQLAALLQMFVLIAQIFQLVEE
LGDPKLLEQAKRLLERLKEAVERGDEETIKELLDLAHMTYLIAQIFQLVEQLGDPRLLELAKELLKRLKEAQERGDRRTI
ERLLRLVQMTYLIAQIFQLVRQLGDPRLLETAKTLLTLLKLAFEEGDELLIKSLLTLVAETYRQAAAEQ
```

Seqüència extreta del fitxer FASTA oficial de selecció 2025-2026. Longitud: 229 aminoàcids.

## Identificació i estructura de referència

La seqüència anterior defineix la molècula analitzada i evita confondre el nom abreujat del sistema amb una proteïna natural completa. La cerca a RCSB PDB proporciona com a estructura de referència [7RMX](https://www.rcsb.org/structure/7RMX) entitat 1, amb cobertura de la seqüència 100.0%, identitat 100.0% i resolució 1.65 Å. La longitud de la seqüència analitzada és de 229 aminoàcids. No s’ha trobat cap referència UniProt directa per a la millor entitat PDB; la seqüència s’ha de tractar com a constructe o proteïna de disseny si no hi ha una cerca addicional que en justifiqui una assignació natural.

| Camp | Valor |
|---|---|
| UniProt / gen | cap registre UniProt directe per al constructe; gen: no anotat o no aplicable |
| EC / BRENDA | no assignat |
| Estructura principal | [7RMX](https://www.rcsb.org/structure/7RMX) entitat 1; difracció de raigs X, 1.65 Å |
| Cobertura i identitat | 100.0% de cobertura; 100.0% d’identitat |
| Dominis i plegament | constructe helicoidal simètric D3 amb cavitat central; l’anotació automàtica ECOD no substitueix la descripció de disseny |
| Estructura secundària i lectura ChimeraX | hèlix: 9, regions no assignades: 1; exemples: hèlix 6-31; hèlix 32-53; hèlix 54-82; hèlix 83-104; hèlix 105-133; hèlix 134-155; hèlix 156-184; hèlix 185-205 |
| Lligands o cofactors a revisar | No s’han identificat lligands no polimèrics en aquesta entrada PDB; els pèptids, cadenes associades o socis polimèrics s’han de revisar per separat. |
| Trets de constructe | No s’ha detectat cap etiqueta de purificació, residu ambigu o alerta específica de cisteïnes a partir de la seqüència sola. |

Funcionalment, D_3_212 és un constructe simètric de disseny. El punt central és la geometria de la cavitat i de la simetria D3, no una funció enzimàtica natural. 7RMX cobreix tota la seqüència assignada. D_3_212 és una proteïna de disseny simètrica; no s’interpreta com una proteïna de Golgi ni com una proteïna natural amb funció cel·lular anotada.

| Paràmetre | Valor |
|---|---|
| Proteïna o constructe | D_3_212 |
| Estructura de referència | 7RMX |
| Longitud | 229 aa |
| Trets rellevants | constructe helicoidal; simetria D3 | <p class="qiep-group-label"><strong>Grup C</strong></p>

### **1.

INFORMACIÓ SOBRE LA PROTEÏNA** **Nom de la proteïna:** Golgin subfamily A member 6-like protein 4 **Nom del gen:** GOLGA6L4 **Codi UniProt: ** A6NEF3 La funció de la proteïna codificada pel gen GOLGA6L4 no ha estat caracteritzada experimentalment. A la base de dades UniProt no es descriu una funció específica, i les anotacions disponibles provenen de models computacionals (PAN-GO), basats en homologia amb altres proteïnes.
No obstant això, GOLGA6L4 pertany a la família de les golgines, proteïnes associades a l’aparell de Golgi. Per analogia amb altres membres d’aquesta família, és probable que estigui implicada en el manteniment de l’estructura de l’aparell de Golgi i en processos de trànsit vesicular intracel·lular. No es tracta d’un enzim, per tant no presenta classificació EC ni activitat catalítica.

### **2.

TREBALL AMB ChimeraX**

#### **Tipus d'estructures secundàries detectades**
- **Hèlix alpha (α)** - **Bucles** - **Ponts d’hidrogen**

#### **Tipus d'estructures supersecundàries detectades**

#### **Estructura terciària**

L’estructura terciària de la proteïna GOLGA6L4, obtinguda mitjançant AlphaFold, mostra un plegament allargat i predominantment α-helical, propi de proteïnes estructurals no globulars. Aquesta conformació es basa en la presència de múltiples hèlixs α que s’organitzen en estructures repetitives. L’anàlisi amb ECOD mostra un total de 53 resultats amb característiques estructurals molt similars, principalment classificats dins de dominis de tipus ankyrin repeat. La repetició d’aquests resultats indica una alta consistència en la classificació estructural, suggerint que la proteïna presenta un plegament basat en motius repetitius d’alpha hairpins (hèlix α–gir–hèlix α). Tot i que la identitat de seqüència és moderada (~30–35%), els valors baixos d’E-value confirmen que la similitud estructural és significativa. En conjunt, aquests resultats reforcen que la proteïna presenta una arquitectura α-helical repetitiva, típica de proteïnes implicades en interaccions proteïna-proteïna. No hi ha evidència experimental d’estructura quaternària; tanmateix, podria formar oligòmers per interaccions llaçed-llaç, com altres golgines.

### **3.

FUNCIÓ DE LA PROTEÏNA**

#### Absència de centre actiu i anàlisi estructural de GOLGA6L4

#### **Centre actiu i residus rellevants**
- La proteïna GOLGA6L4 **no presenta centre actiu definit**
- No es tracta d’un enzim, sinó una proteïna **estructural associada a l'aparell de Golgi**
- Com que a UniProt no hi cap anotació de llocs actius ni residus catalítics considerem que no hi ha **residus catalítics descrits** i no participa en **reacccions enzimàtiques**

#### **Substrats i inhibidors**
L’estructura analitzada correspon a un model predictiu d’AlphaFold, que representa la proteïna en estat aïllat, sense presència de substrats ni inhibidors.

#### **Interaccions estructurals observades**
Tot i no tenir funció catalítica, la proteïna presenta interaccions internes importants:
- **Ponts d’hidrogen** que estabilitzen les hèlix α i manté l’estructura secundària
- **Interaccions hidrofòbiques** entre residus com Leucina, Isoleucina i Valina
- **Interaccions de van der Waals** entre cadenes properes
- **Interaccions electostàtiques** entre residus com Lisina i Glutamat que estabilitzen l’estructura tridimensional

#### **Informació general**

L’anàlisi estructural mostra una proteïna predominantment formada per hèlix α llargues que s’organitzen en motius llaçed-llaç, una característica típica de les golgines. Aquest tipus d’estructura genera una conformació allargada que facilita les interaccions proteïna-proteïna i permet actuar com a element d’ancoratge dins l’aparell de Golgi. Els principals elements estructurals implicats en la funció són:
- Hèlix α llargues que proporcionen estabilitat estructural
- Motius llaçed-llaç que afavoreixen la formació de complexes multiproteics
- Regions de llaç que aporten flexibilitat conformacional Aquesta organització estructural és coherent amb el paper proposat de GOLGA6L4 en:
- Manteniment de l’arquitectura de l’aparell de Golgi
- Tethering o captura de vesícules
- Establiment d’interaccions dins del sistema endomembranós

#### **Modificacions posttraduccionals**
No s’han descrit modificacions posttraduccionals específiques per a GOLGA6L4 a UniProt. Tanmateix, per analogia amb altres golgines, podria presentar fosforilació (Ser, Thr, Tyr), ubiquitinació i acetilació (Lys). Aquestes modificacions podrien regular la seva interacció amb altres proteïnes i la seva funció estructural al Golgi.

## Arquitectura molecular

El plegament és helicoidal i organitzat per simetria D3. La repetició d’elements helicoidals crea interfícies regulars que estabilitzen el conjunt i fan del sistema un exemple clar de disseny per simetria.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura1.png' | relative_url }}" alt="Figura 1 del grup C" loading="lazy"> <figcaption><strong>Figura 1.</strong> D_3_212: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura2.png' | relative_url }}" alt="Figura 2 del grup C" loading="lazy"> <figcaption><strong>Figura 2.</strong> D_3_212: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

La funció experimental principal és arquitectònica: generar un objecte molecular estable i simètric. Qualsevol funció cel·lular queda fora de la interpretació si no hi ha evidència independent.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/d3_7rmx.jpeg' | relative_url }}" alt="Estructura simètrica D_3_212 utilitzada per interpretar l’arquitectura helicoidal del constructe. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura simètrica D_3_212 utilitzada per interpretar l’arquitectura helicoidal del constructe. Font: <a href="https://www.rcsb.org/structure/7RMX">RCSB PDB 7RMX</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Hicks et al., 2022).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura3.png' | relative_url }}" alt="Figura 3 del grup C" loading="lazy"> <figcaption><strong>Figura 3.</strong> D_3_212: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura4.png' | relative_url }}" alt="Figura 4 del grup C" loading="lazy"> <figcaption><strong>Figura 4.</strong> D_3_212: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

No hi ha un registre UniProt natural directe associat a la millor entitat PDB. En aquest cas no és correcte importar PTM o variants d’una proteïna natural sense un alineament explícit; les variants importants són les pròpies del disseny, de la interfície o del centre funcional definit a la publicació estructural.

## Relació seqüència-estructura-funció

Els residus que apunten cap al nucli i cap a les interfícies simètriques expliquen la forma global. La seqüència es llegeix com un patró d’empaquetament repetitiu que dona lloc a l’arquitectura D3.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura5.png' | relative_url }}" alt="Figura 5 del grup C" loading="lazy"> <figcaption><strong>Figura 5.</strong> D_3_212: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura6.png' | relative_url }}" alt="Figura 6 del grup C" loading="lazy"> <figcaption><strong>Figura 6.</strong> D_3_212: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura7.png' | relative_url }}" alt="Figura 7 del grup C" loading="lazy"> <figcaption><strong>Figura 7.</strong> D_3_212: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura8.png' | relative_url }}" alt="Figura 8 del grup C" loading="lazy"> <figcaption><strong>Figura 8.</strong> D_3_212: representació complementària del model. </figcaption>
</figure>

## Referències

- Hicks, D. R. et al. (2022). *De novo design of protein homodimers containing tunable symmetric protein pockets*. *PNAS*. [doi: 10.1073/pnas.2113400119](https://doi.org/10.1073/pnas.2113400119).

[^origen]: Material de partida: <a href="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/QiEP1_GrupC.md' | relative_url }}">pàgina original del grup C</a>.
