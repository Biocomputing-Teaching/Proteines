---
title: "isomerasa de sacarosa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-E-corregida/
author: "Queralt Datzira, Elsa Gutiérrez i Ariadna Parisi"
---

<p class="qiep-group-label"><strong>Grup E</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>


<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

Aquesta és la cadena aminoacídica analitzada. La identificació de la proteïna o del constructe es fa a partir d’aquesta seqüència, i totes les correspondències amb UniProt, PDB, CATH/ECOD o AlphaFold s’han d’interpretar en relació amb aquesta numeració.

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
| Lligands, cofactors o lloc funcional | sacarosa o inhibidors de carbohidrat al centre catalític; els residus àcids conservats executen la química glicosídica |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. La sucrosa isomerasa reordena l’enllaç glucosídic de la sucrosa i genera productes d’interès alimentari i biotecnològic.

## Arquitectura molecular

La sucrosa isomerasa presenta un domini catalític de la família de glicosidases i una cavitat capaç de retenir els dos monosacàrids durant el reordenament de l’enllaç.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/betta_supersecundaria.png' | relative_url }}" alt="Figura 1 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> isomerasa de sacarosa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/centre actiu.png' | relative_url }}" alt="Figura 2 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> isomerasa de sacarosa: elements d’estructura secundària. </figcaption>
</figure>

## Lloc funcional i mecanisme

La reacció trenca i refà l’enllaç glucosídic sense una hidròlisi completa. La posició relativa de glucosa i fructosa determina la proporció d’isomaltulosa i altres productes.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/sucrose_condensation.svg' | relative_url }}" alt="Esquema químic de la sucrosa; punt de partida per interpretar el reordenament glicosídic catalitzat per sucrosa isomerasa. " loading="lazy"> <figcaption><strong>Figura.</strong> Esquema químic de la sucrosa; punt de partida per interpretar el reordenament glicosídic catalitzat per sucrosa isomerasa. Font: <a href="https://commons.wikimedia.org/wiki/File:Sucrose_condensation.svg">Wikimedia Commons, Sucrose condensation</a>. </figcaption>
</figure>

La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Ravaud et al., 2009).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/mecanisme_reaccio.png' | relative_url }}" alt="Figura 3 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> isomerasa de sacarosa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/ph_betta_supersecundaria.png' | relative_url }}" alt="Figura 4 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> isomerasa de sacarosa: superfície molecular. </figcaption>
</figure>

## Modificacions i variants

En el cas dels enzims bacterians/industrials el punt central és l’especificitat de producte i les mutacions de butxaca, més que modificacions posttraduccionals reguladores. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La relació seqüència-estructura-funció s’ha d’interpretar situant sobre el model els residus que estabilitzen el plegament i els que defineixen el lloc funcional. Les variants, els lligands o els cofactors només són informatius si es manté la correspondència entre la numeració de la seqüència i la del PDB o model utilitzat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/ph_supersecundaria.png' | relative_url }}" alt="Figura 5 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> isomerasa de sacarosa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/ponts hidrogen.png' | relative_url }}" alt="Figura 6 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> isomerasa de sacarosa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/residu.png' | relative_url }}" alt="Figura 7 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> isomerasa de sacarosa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/supersecundaria.png' | relative_url }}" alt="Figura 8 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> isomerasa de sacarosa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/variants.png' | relative_url }}" alt="Figura 9 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> isomerasa de sacarosa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/visualitzacio.png' | relative_url }}" alt="Figura 10 del grup E 2024-2025" loading="lazy"> <figcaption><strong>Figura 10.</strong> isomerasa de sacarosa: elements d’estructura secundària. </figcaption>
</figure>

## Referències

- Ravaud, S. et al. (2009). *Structural importants of product specificity of sucrose isomerases*. *FEBS Letters*. [doi: 10.1016/j.febslet. 2009.05.002](https://doi.org/10.1016/j.febslet.2009.05.002).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup E/practica1.md' | relative_url }}">pàgina original del grup E</a>.
