---
title: "Fenilalanina amoni-liasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-D-corregida/
author: "Leire Pérez Palacios i Cèlia Delmàs Hortal"
---

<p class="qiep-group-label"><strong>Grup D</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

```fasta
>Practica_1_Leire_Celia.md | 2024-2025 | seqüència problema
MAPSLDSISHSFANGVASAKQAVNGASTNLAVAGSHLPTTQVTQVDIVEKMLAAPTDSTLELDGYSLNLGDVVSAARKGR
PVRVKDSDEIRSKIDKSVEFLRSQLSMSVYGVTTGFGGSADTRTEDAISLQKALLEHQLCGVLPSSFDSFRLGRGLENSL
PLEVVRGAMTIRVNSLTRGHSAVRLVVLEALTNFLNHGITPIVPLRGTISASGDLSPLSYIAAAISGHPDSKVHVVHEGK
EKILYAREAMALFNLEPVVLGPKEGLGLVNGTAVSASMATLALHDAHMLSLLSQSLTAMTVEAMVGHAGSFHPFLHDVTR
PHPTQIEVAGNIRKLLEGSRFAVHHEEEVKVKDDEGILRQDRYPLRTSPQWLGPLVSDLIHAHAVLTIEAGQSTTDNPLI
DVENKTSHHGGNFQAAAVANTMEKTRLGLAQIGKLNFTQLTEMLNAGMNRGLPSCLAAEDPSLSYHCKGLDIAAAAYTSE
LGHLANPVTTHVQPAEMANQAVNSLALISARRTTESNDVLSLLLATHLYCVLQAIDLRAIEFEFKKQFGPAIVSLIDQHF
GSAMTGSNLRDELVEKVNKTLAKRLEQTNSYDLVPRWHDAFSFAAGTVVEVLSSTSLSLAAVNAWKVAAAESAISLTRQV
RETFWSAASTSSPALSYLSPRTQILYAFVREELGVKARRGDVFLGKQEVTIGSNVSKIYEAIKSGRINNVLLKMLA
```

Seqüència recuperada del lliurament original (Practica_1_Leire_Celia.md). Longitud: 716 aminoàcids. Cisteïnes: 140, 455, 467, 530.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a fenilalanina amoni-liasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | segons organisme de la seqüència; gen: PAL |
| EC / BRENDA | 4.3.1.24 |
| Estructura principal | estructura PAL del lliurament o AlphaFold si no hi ha coincidència experimental completa |
| Plegament o família | enzim tetramèric de la família ammonia-lyase amb cofactor MIO generat autocatalíticament |
| Estructura secundària i lectura ChimeraX | arquitectura oligomèrica de PAL amb centre MIO; cal separar hèlixs de suport, interfícies de subunitat i túnel d’accés al substrat |
| Lligands, cofactors o lloc funcional | centre actiu amb MIO; la reacció elimina amoni de L-fenilalanina per formar trans-cinamat |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La fenilalanina amoni-liasa elimina amoníac de la fenilalanina i connecta el metabolisme aromàtic amb la química del cofactor MIO.

## Arquitectura molecular

La PAL és un enzim sovint oligomèric amb un centre actiu que conté el cofactor MIO, generat autocatalíticament. La cavitat posiciona la fenilalanina i el seu anell aromàtic.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/22.png' | relative_url }}" alt="Figura 1 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Fenilalanina amoni-liasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/Captura de pantalla 2025-03-02 131809.png' | relative_url }}" alt="Figura 2 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Fenilalanina amoni-liasa: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La reacció elimina amoníac de la fenilalanina i forma àcid trans-cinàmic. El cofactor MIO actua com a centre electrofílic i facilita la química d’eliminació.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/pal_active_site.png' | relative_url }}" alt="Centre actiu de la fenilalanina amoni-liasa amb el cofactor MIO i residus propers. " loading="lazy"> <figcaption><strong>Figura.</strong> Centre actiu de la fenilalanina amoni-liasa amb el cofactor MIO i residus propers. Font: <a href="https://commons.wikimedia.org/wiki/File:Phenylalanine_ammonia_lysase_active_site.png">Wikimedia Commons, Phenylalanine ammonia-lyase active site</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Ritter et al., 2004).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/ap.png' | relative_url }}" alt="Figura 3 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Fenilalanina amoni-liasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/bab.png' | relative_url }}" alt="Figura 4 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Fenilalanina amoni-liasa: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

La modificació important no és una modificació posttraduccional reguladora externa sinó la formació autocatalítica del grup MIO a partir del motiu intern conservat. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/beta.png' | relative_url }}" alt="Figura 5 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Fenilalanina amoni-liasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/chimera.png' | relative_url }}" alt="Figura 6 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Fenilalanina amoni-liasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/helice.png' | relative_url }}" alt="Figura 7 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Fenilalanina amoni-liasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/ph.png' | relative_url }}" alt="Figura 8 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Fenilalanina amoni-liasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/reaccion.png' | relative_url }}" alt="Figura 9 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Fenilalanina amoni-liasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/seq.png' | relative_url }}" alt="Figura 10 del grup D 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> Fenilalanina amoni-liasa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Ritter, H.; Schulz, G. E. (2004). *Structural Basis for the Entrance into the Phenylpropanoid Metabolism Catalyzed by Phenylalanine Ammonia-Lyase*. *The Plant Cell*. [doi: 10.1105/tpc.104.025288](https://doi.org/10.1105/tpc.104.025288).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup D/Practica 1/Practica_1_Leire_Celia.md' | relative_url }}">pàgina original del grup D</a>.
