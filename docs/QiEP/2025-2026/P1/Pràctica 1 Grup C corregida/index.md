---
title: "D_3_212: proteïna simètrica de disseny"
permalink: /QiEP/2025-2026/P1/Practica-1-Grup-C-corregida/
author: "Carla Gómez, Irene Herrada, Abril Insa, Oriol Martí i Marina Valor"
---

<p class="qiep-group-label"><strong>Grup C</strong> · Química i Enginyeria de Proteïnes 2025-2026</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

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
| Trets rellevants | constructe helicoidal; simetria D3 |


## Arquitectura molecular

El plegament és helicoidal i organitzat per simetria D3. La repetició d’elements helicoidals crea interfícies regulars que estabilitzen el conjunt i fan del sistema un exemple clar de disseny per simetria.

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura1.png' | relative_url }}" alt="Figura 1 del grup C" loading="lazy"> <figcaption><strong>Figura 1.</strong> D_3_212: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura2.png' | relative_url }}" alt="Figura 2 del grup C" loading="lazy"> <figcaption><strong>Figura 2.</strong> D_3_212: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La funció experimental principal és arquitectònica: generar un objecte molecular estable i simètric. Qualsevol funció cel·lular queda fora de la interpretació si no hi ha evidència independent.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/d3_7rmx.jpeg' | relative_url }}" alt="Estructura simètrica D_3_212 utilitzada per interpretar l’arquitectura helicoidal del constructe. " loading="lazy"> <figcaption><strong>Figura.</strong> Estructura simètrica D_3_212 utilitzada per interpretar l’arquitectura helicoidal del constructe. Font: <a href="https://www.rcsb.org/structure/7RMX">RCSB PDB 7RMX</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Hicks et al., 2022).

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura3.png' | relative_url }}" alt="Figura 3 del grup C" loading="lazy"> <figcaption><strong>Figura 3.</strong> D_3_212: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2025-2026/P1/Pràctica 1 Grup C/Figura4.png' | relative_url }}" alt="Figura 4 del grup C" loading="lazy"> <figcaption><strong>Figura 4.</strong> D_3_212: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

No hi ha un registre UniProt natural directe associat a la millor entitat PDB. En aquest cas no és correcte importar modificacions posttraduccionals o variants d’una proteïna natural sense un alineament explícit; les variants rellevants són les pròpies del disseny, de la interfície o del centre funcional definit a la publicació estructural.

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
