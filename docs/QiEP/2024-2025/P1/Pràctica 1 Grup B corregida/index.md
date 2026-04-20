---
title: "Glutatió S-transferasa GstA"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-B-corregida/
author: "Alex Durán, Ariadna Gómez, Jordi Martín"
---

<p class="qiep-group-label"><strong>Grup B</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

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
| Lligands, cofactors o lloc funcional | glutatió al lloc G; la química depèn de l’activació del tiol com a tiolat i de l’orientació del substrat electrofílic al lloc H |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les glutatió S-transferases catalitzen la conjugació del glutatió amb compostos electrofílics i participen en detoxificació cel·lular.

## Arquitectura molecular

Les GST tenen un domini N-terminal que uneix glutatió i un domini C-terminal que configura el lloc hidrofòbic per al substrat electrofílic. Aquesta arquitectura separa clarament reconeixement de GSH i especificitat del segon substrat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge1.png' | relative_url }}" alt="Figura 1 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Glutatió S-transferasa GstA: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge10.png' | relative_url }}" alt="Figura 2 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Glutatió S-transferasa GstA: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

El mecanisme afavoreix la forma tiolat del glutatió i l’orienta per atacar el compost electrofílic. El producte és un conjugat més soluble, relacionat amb detoxificació i resposta a xenobiòtics.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/gst_glutathione.svg' | relative_url }}" alt="Estructura del glutatió reduït, substrat central del lloc G en les glutatió S-transferases. " loading="lazy"> <figcaption><strong>Figura.</strong> Estructura del glutatió reduït, substrat central del lloc G en les glutatió S-transferases. Font: <a href="https://commons.wikimedia.org/wiki/File:Glutathione-skeletal.svg">Wikimedia Commons, Glutathione-skeletal</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Armstrong et al., 1997).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge11.png' | relative_url }}" alt="Figura 3 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Glutatió S-transferasa GstA: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup B/Fotos/Imatge12.png' | relative_url }}" alt="Figura 4 del grup B 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Glutatió S-transferasa GstA: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

En bacteris no s’ha d’assumir una regulació per modificacions posttraduccionals eucariotes; les variants rellevants són canvis en residus d’unió al glutatió o a la cavitat hidrofòbica. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

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
