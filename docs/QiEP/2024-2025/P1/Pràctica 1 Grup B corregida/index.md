---
title: "Glutatió S-transferasa GstA"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-B-corregida/
author: "Alex Durán, Ariadna Gómez, Jordi Martín"
---

<p class="qiep-group-label"><strong>Grup B</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>

Autors del treball original: **Alex Durán, Ariadna Gómez, Jordi Martín**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P0A9D2|GSTA_ECOLI Glutathione S-transferase GstA OS=Escherichia coli (strain K12) OX=83333 GN=gstA PE=1 SV=1 | 2024-2025 | seqüència problema
MKLFYKPGACSLASHITLRESGKDFTLVSVDLMKKRLENGDDYFAVNPKGQVPALLLDDGTLLTEGVAIMQYLADSVPDR
QLLAPVNSISRYKTIEWLNYIATELHKGFTPLFRPDTPEEYKPTVRAQLEKKLQYVNEALKDEHWICGQRFTIADAYLFT
VLRWAYAVKLNLEGLEHIAAFMQRMAERPEVQDALSAEGLK
```

Seqüència recuperada de UniProt P0A9D2. Longitud: 201 aminoàcids. Cisteïnes: 10, 147.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a glutatió S-transferasa GstA. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P0A9D2; gen: gstA |
| EC / BRENDA | 2.5.1.18 |
| Estructura principal | 1A0F |
| Plegament o família | domini N-terminal d’unió al glutatió i domini C-terminal hidrofòbic; dímer funcional en moltes GST |
| Estructura secundària i lectura ChimeraX | domini N-terminal tipus tioredoxina amb el lloc G i domini C-terminal helicoidal; cal distingir la interfície dimèrica i la cavitat hidrofòbica del substrat |
| Lligands, cofactors o centre actiu | glutatió al lloc G; la química depèn de l’activació del tiol com a tiolat i de l’orientació del substrat electrofílic al lloc H |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les glutatió S-transferases catalitzen la conjugació del glutatió amb compostos electrofílics i participen en detoxificació cel·lular.

## Identitat de la proteïna
Aquesta seqüència prové de l'Escherichia coli K-12, i codifica per la proteïna Glutathione S-transferase GstA (aminoàcids: 201) (https://www.uniprot.org/uniprotkb/P0A9D2/entry) - **Codi UniProt:** P0A9D2
- **Nom del gen:** gstA
- **Funció breu:** Catalitza la conjugació de glutatió reduït (GSH) a un gran nombre d'electròfils hidrofòbics exògens i endògens.
- **Classificació enzimàtica:** EC 2.5.1.18 (https://www.brenda-enzymes.org/enzyme.php?ecno=2.5.1.18)

## Estructura de referència
(https://www.rcsb.org/structure/1A0F)
- **Codi PDB:** 1A0F_A
- **Mètode:** difracció de raigs X
- **Resolució:** 2.10 Å
- **Mutacions:** No A l’estructura de la proteïna s’hi observen estructures secundàries individuals, com làmines plegades β i també s’hi observen hèlix α, però també estructures supersecundàries, com forquilles β-β o important grega de quatre làmines β.

### Interaccions estructurals

### Plegament terciari
**Codis de la base de dades SCOP:** 1a0f A: 81-201 [17737], 1a0f A: 1-80 [33031], 1a0f B: 81-201 [17738], 1a0f B: 1-80 [33032] (https://scop.berkeley.edu/search/?ver=2.08&key=1A0F_A) En les imatges s’hi observa la proteïna, en color s’indiquen els dominis i en gris la resta de la proteïna; l’associació de dominis contribueix a l’organització quaternària.

## Funció molecular

### Centre actiu
S’identifiquen residus funcionals a les posicions 10, 35, 52, 65-66, 99 i 103-106, marcats en verd a l’estructura.

### Residus funcionals
Cys10 (Cys10), Lys35 (Lys35), Val52 (Val52), Glu65 (Glu65), Gly66 (Gly66), His106 (His106), Asn99 (Asn99), Thr103 (Thr103), Glu104 (Glu104)

### Substrats o inhibidors
El GSH és el cosubstrat que ocupa el lloc G de l’enzim.

### Interaccions al centre actiu
Es formen ponts d’hidrogen entre His106, Thr103 i Glu104 amb el glutatió o altres residus polars propers, interaccions de van der Waals entre Leu32, Val52 i Gly66 i Lys35 i Glu65 poden tenir interaccions electrostàtiques
El GSH és un substrat de la GstA, i la seva unió està estabilitzada mitjançant una combinació de ponts d’hidrogen, interaccions de van der Waals i forces electrostàtiques. Els residus del centre actiu orienten correctament el substrat i faciliten la reacció catalítica.

### Funció
​La Glutatió S-transferasa A (GstA) és un enzim que catalitza la conjugació del glutatió reduït (GSH) amb compostos electrofílics, facilitant la detoxificació cel·lular.
També ajuda a la prevenció de l'estrès oxidatiu i a neutralitzar toxines exògenes com ara drogues, pesticides i carcinògens.

### Mecanisme catalític
El GSH s'uneix al lloc G de GstA, on el grup tiol (-SH) de GSH s'activa per residus específics de l’enzim. En molts GST, la tirosina del lloc actiu forma enllaços d’hidrogen amb el grup tiol de GSH, estabilitzant així la seva forma tiolat més nucleòfila.
El substrat electrofílic s'uneix al lloc H de la GstA, es produeix un atac nucleofílic del GSH al substrat i finalment es produeix el producte conjugat, que s’allibera del lloc actiu.

### Relació seqüència-estructura-funció
El glutatió reduït (GSH) és el cosubstrat central de les GST. El grup tiol del GSH es desprotona parcialment al lloc G i es converteix en un tiolat més nucleòfil, que pot atacar el substrat electrofílic situat al lloc H. El dímer estabilitza l’arquitectura del lloc actiu i contribueix a definir la cavitat hidrofòbica on s’acomoda el segon substrat.

### Variants
Aquesta proteïna pot presentar variants que afecten la seva funcionalitat. Per exemple, una mutació al lloc d’unió del GSH, afecta la capacitat de la proteïna per unir-se al GSH i activar-lo disminuint l'eficiència de la conjugació amb compostos tòxics. Una altra mutació que pot tenir és en residus de la interfície de dimerització, que provoquen que l'estabilitat de l’estructura es vegi afectada juntament amb la seva activitat enzimàtica. Per últim, també es pot ocasionar mutacions en regions reguladores que afecten l'expressió de GstA, implicant una menor protecció contra l'estrès oxidatiu. Més concretament, una mutació en la posició 10 que canvia la cisteïna per una serina (S) o una alanina (A), això provoca que l'afinitat per el GSH disminueixi, però també fa que augmenti la seva activitat de transferasa. Després, una altra mutació en la posició 106 que canvia la histidina (H) per una fenilalanina (F) o una alanina (A) que provoca una disminució en l'afinitat pel GSH i també en la seva activitat de transferasa.

## Arquitectura molecular

Les GST tenen un domini N-terminal que uneix glutatió i un domini C-terminal que configura el lloc hidrofòbic per al substrat electrofílic. Aquesta arquitectura separa clarament reconeixement de GSH i especificitat del segon substrat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge1.png' | relative_url }}" alt="Figura 1 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Glutatió S-transferasa GstA: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge10.png' | relative_url }}" alt="Figura 2 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Glutatió S-transferasa GstA: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

El mecanisme afavoreix la forma tiolat del glutatió i l’orienta per atacar el compost electrofílic. El producte és un conjugat més soluble, relacionat amb detoxificació i resposta a xenobiòtics.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/gst_glutathione.svg' | relative_url }}" alt="Estructura del glutatió reduït, substrat central del lloc G en les glutatió S-transferases. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Estructura del glutatió reduït, substrat central del lloc G en les glutatió S-transferases. Font: <a href="https://commons.wikimedia.org/wiki/File:Glutathione-skeletal.svg">Wikimedia Commons, Glutathione-skeletal</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Armstrong et al., 1997).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge11.png' | relative_url }}" alt="Figura 3 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Glutatió S-transferasa GstA: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge12.png' | relative_url }}" alt="Figura 4 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Glutatió S-transferasa GstA: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

En bacteris no s’ha d’assumir una regulació per PTM eucariotes; les variants rellevants són canvis en residus d’unió al glutatió o a la cavitat hidrofòbica. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge13.png' | relative_url }}" alt="Figura 5 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Glutatió S-transferasa GstA: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge14.png' | relative_url }}" alt="Figura 6 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Glutatió S-transferasa GstA: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge15.png' | relative_url }}" alt="Figura 7 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Glutatió S-transferasa GstA: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge16.png' | relative_url }}" alt="Figura 8 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Glutatió S-transferasa GstA: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge17.png' | relative_url }}" alt="Figura 9 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Glutatió S-transferasa GstA: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge18.png' | relative_url }}" alt="Figura 10 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Glutatió S-transferasa GstA: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Armstrong, R. N. (1997). *Structure, Catalytic Mechanism, and Evolution of the Glutathione Transferases*. *Chemical Research in Toxicology*. [doi: 10.1021/tx960072x](https://doi.org/10.1021/tx960072x).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Pràctica1.md' | relative_url }}">pàgina original del grup B</a>.
