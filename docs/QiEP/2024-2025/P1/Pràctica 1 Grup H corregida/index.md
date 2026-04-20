---
title: "Amina oxidasa"
permalink: /QiEP/2024-2025/P1/Practica-1-Grup-H-corregida/
author: "Arisó Gómez Irene, Guiu Gorgas Berta i Vila Roca Judith"
---

<p class="qiep-group-label"><strong>Grup H</strong> · Química i Enginyeria de Proteïnes 2024-2025</p>

Autors del treball original: **Arisó Gómez Irene, Guiu Gorgas Berta i Vila Roca Judith**.

<nav class="qiep-local-toc" markdown="1">
* TOC
{: toc}
</nav>

## Seqüència problema

La seqüència problema és el punt de partida de la fitxa. A partir d’aquesta cadena aminoacídica s’identifica la proteïna o el constructe, se selecciona l’estructura experimental o predictiva més adequada i s’interpreten l’arquitectura molecular, la funció, les variants i la relació seqüència-estructura-funció.

```fasta
>sp|P21397|AOFA_HUMAN Amine oxidase [flavin-containing] A OS=Homo sapiens OX=9606 GN=MAOA PE=1 SV=1 | 2024-2025 | seqüència problema
MENQEKASIAGHMFDVVVIGGGISGLSAAKLLTEYGVSVLVLEARDRVGGRTYTIRNEHVDYVDVGGAYVGPTQNRILRL
SKELGIETYKVNVSERLVQYVKGKTYPFRGAFPPVWNPIAYLDYNNLWRTIDNMGKEIPTDAPWEAQHADKWDKMTMKEL
IDKICWTKTARRFAYLFVNINVTSEPHEVSALWFLWYVKQCGGTTRIFSVTNGGQERKFVGGSGQVSERIMDLLGDQVKL
NHPVTHVDQSSDNIIIETLNHEHYECKYVINAIPPTLTAKIHFRPELPAERNQLIQRLPMGAVIKCMMYYKEAFWKKKDY
CGCMIIEDEDAPISITLDDTKPDGSLPAIMGFILARKADRLAKLHKEIRKKKICELYAKVLGSQEALHPVHYEEKNWCEE
QYSGGCYTAYFPPGIMTQYGRVIRQPVGRIFFAGTETATKWSGYMEGAVEAGERAAREVLNGLGKVTEKDIWVQEPESKD
VPAVEITHTFWERNLPSVSGLLKIIGFSTSVTALGFVLYKYKLLPRS
```

Seqüència recuperada de UniProt P21397. Longitud: 527 aminoàcids. Cisteïnes: 165, 201, 266, 306, 321, 323, 374, 398, 406.

## Identificació i estructura de referència

A partir de la seqüència anterior i de les bases de dades principals de seqüència i estructura, la proteïna s’identifica com a amina oxidasa. L’estructura de treball s’ha d’interpretar sempre comprovant que el PDB triat cobreix prou bé la seqüència analitzada; si hi ha diversos PDB possibles, la resolució només és decisiva després de comprovar cobertura, identitat, estat del lligand i rellevància biològica.

| Camp | Valor |
|---|---|
| UniProt / gen | P21397; gen: AOC/amine oxidase segons organisme |
| EC / BRENDA | 1.4.3.4 |
| Estructura principal | 2Z5Y |
| Plegament o família | enzim de coure amb cofactor TPQ derivat d’una tirosina interna |
| Estructura secundària i lectura ChimeraX | enzim de coure amb cofactor TPQ; cal situar Cu, TPQ i canal d’accés de l’amina dins del plegament |
| Lligands, cofactors o centre actiu | Cu i TPQ al centre actiu; el substrat amina forma una base de Schiff i es converteix en aldehid amb producció de peròxid d’hidrogen |

La transferència de residus funcionals requereix conservar la correspondència entre la numeració de la seqüència i la del model estructural, especialment quan l’estructura prové d’un homòleg, d’un domini aïllat o d’un model predictiu. Les amina oxidases oxiden amines i generen aldehids, amoníac i peròxid d’hidrogen mitjançant cofactors especialitzats.

## Amine oxidase flavin-containing A

Anàlisi proteïna Amine oxidase [flavin-containing] A**

### Sobre la proteïna

Sobre la proteïna. Seqüència donada: MENQEKASIAGHMFDVVVIGGGISGLSAAKLLTEYGVSVLVLEARDRVGGRTYTIRNEHVDYVDVGGAYVGPTQNRILRLSKELGIETYKVNVSERLVQYVKGKTYPFRGAFPPVWNPIAYLDYNNLWRTIDNMGKEIPTDAPWEAQHADKWDKMTMKELIDKICWTKTARRFAYLFVNINVTSEPHEVSALWFLWYVKQCGGTTRIFSVTNGGQERKFVGGSGQVSERIMDLLGDQVKLNHPVTHVDQSSDNIIIETLNHEHYECKYVINAIPPTLTAKIHFRPELPAERNQLIQRLPMGAVIKCMMYYKEAFWKKKDYCGCMIIEDEDAPISITLDDTKPDGSLPAIMGFILARKADRLAKLHKEIRKKKICELYAKVLGSQEALHPVHYEEKNWCEEQYSGGCYTAYFPPGIMTQYGRVIRQPVGRIFFAGTETATKWSGYMEGAVEAGERAAREVLNGLGKVTEKDIWVQEPESKDVPAVEITHTFWERNLPSVSGLLKIIGFSTSVTALGFVLYKYKLLPRS Hem buscat la seqüència a la base de dades UniProt, el codi d’aquesta proteïna és P21397 - AOFA_HUMAN "https://www.uniprot.org/uniprotkb/P21397/entry" la classificació de l’enzim EC: 1.4.3.4;
EC Tree: 1. Oxidoreductases
→ 1.4. Actua sobre el grup CH-NH₂ dels donants
→ 1.4.3. Té oxigen com a receptor
→ 1.4.3.4. Monoamino oxidasa
i és codificada pel gen MAOA. Hem cercat l’estructura a la base de dades de Protein Data Bank i hem trobat que està disponible amb el codi PDB: 2Z5Y, amb una resolució de 2.17 Å i les posicions cobertes són de la 12-524.
Hem escollit aquesta estructura ja que es la que presenta millor resolució, és a dir, més baixa i cobreix el major nombre de posicions de la seqüència. Tambè he utilitzat la interfície d’AlphaFold per obtenir una predicció de la seva estructura tridimensional i poder comparar-les. Estructura tridimensional PDB 2Z5Y Estructura tridimensional AlphaFold La proteïna Microsomal Epoxide hydrolase 1 és un enzim implicat en la detoxificació de compostos tòxics ja que té capacitat per hidrolitzar epòxids. Un cop els hidrolitza, els comparteix en diols, facilitant la seva eliminació. L'Amine oxidase (AOFA_HUMAN), esta involucrat en la degradació de les amines biogèniques, com la serotonina, la dopamina, la noradrenalina i l'adrenalina, a través d'oxidació generant aldehids, amoníac i peròxid d’hidrogen com a subproductes. Aquest enzim es fundamental per la regulació dels neurotransmissors al sistema nerviós central, implicat tambè en la depresió i transtorns neurològics i psiquiàtrics. En teràpies s'utilitzen inhibidors de la MAO-A.

## Treball amb ChimeraX

L’anàlisi amb ChimeraX descriu una proteïna globular amb plegament α/β i cofactor FAD. Les hèlixs α corresponen, entre altres trams, als residus 22-35, 74-84, 117-137, 142-146, 148-165, 167-183, 190-200, 203-209, 223-235, 274-279, 288-296, 313-318, 355-362, 365-382, 384-388, 414-423, 434-438, 444-463, 468-472, 489-495 i 497-521. Les làmines β s’identifiquen en segments com 16-19, 39-42, 54-55, 63-64, 88-90, 96-101, 104-108, 217-219, 238-239, 244-248, 254-258, 263-266, 268-271, 282-284, 303-309, 320-327, 335-338, 348-354, 391-396 i 430-432.

Les estructures secundàries s’estabilitzen amb ponts d’hidrogen entre els grups carbonil i amida de l’esquelet peptídic, especialment en hèlixs α i làmines β. Les interaccions hidrofòbiques i de van der Waals contribueixen a compactar el nucli de la proteïna i a definir la cavitat del cofactor. Segons SCOPe, el domini pertany al plegament FAD/NAD(P)-binding domain (c.3), coherent amb la presència del FAD al centre funcional. La proteïna pot aparèixer com a monòmer o formar dímers segons el context estructural i experimental.

## Funció de la proteïna

El centre actiu de l’amina oxidasa és una cavitat hidrofòbica que conté FAD i residus implicats en la unió i orientació del substrat. His451 i His335 contribueixen a estabilitzar el centre actiu i poden participar en la interacció amb el substrat; Ser203 ajuda a posicionar el grup amina; i Trp118 i Phe343 contribueixen al caràcter hidrofòbic de la cavitat. La clorgilina és un exemple d’inhibidor irreversible d’aquest tipus d’enzim.

La funció de la proteïna és catalitzar la desaminació oxidativa d’amines primàries i, en alguns casos, secundàries, incloent-hi neurotransmissors com adrenalina, noradrenalina, dopamina i serotonina. La reacció converteix el substrat aminat en l’aldehid corresponent i genera amoníac i peròxid d’hidrogen:

$$R-CH_2-NH_2 + O_2 + H_2O \rightarrow R-CHO + NH_3 + H_2O_2$$

Aquesta activitat és rellevant per al metabolisme d’amines neuroactives i vasoactives al sistema nerviós central i en teixits perifèrics. La cavitat hidrofòbica orienta el substrat, mentre que el FAD participa directament en la transferència redox. Les variants que afecten residus funcionals o l’estabilitat del plegament poden alterar el metabolisme dels neurotransmissors; per això les mutacions en gens d’amina oxidasa s’han relacionat amb fenotips neurològics o conductuals.

## Arquitectura molecular

Les amina oxidases presenten cavitats d’accés al substrat connectades amb cofactors orgànics o metàl·lics. La forma del canal contribueix a la selectivitat.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/1.png' | relative_url }}" alt="Figura 1 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 1.</strong> Amina oxidasa: vista global del plegament. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/2.png' | relative_url }}" alt="Figura 2 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 2.</strong> Amina oxidasa: elements d’estructura secundària. </figcaption>
</figure>

## Centre actiu i mecanisme

L’oxidació d’amines genera aldehid, amoníac i peròxid d’hidrogen. La posició del cofactor i dels residus àcid-base controla la transferència d’electrons i protons.

<figure class="mechanism-figure"> <img src="{{ '/assets/img/qiep-mechanisms/amine_oxidase.png' | relative_url }}" alt="Esquema de reacció relacionat amb oxidació d’amines, útil per situar substrat, producte i transferència redox. " loading="lazy"> <figcaption><strong>Figura de suport mecanístic. </strong> Esquema de reacció relacionat amb oxidació d’amines, útil per situar substrat, producte i transferència redox. Font: <a href="https://commons.wikimedia.org/wiki/File:Hdmethrxn2.png">Wikimedia Commons, Hdmethrxn2</a>. </figcaption>
</figure> La interpretació estructural i funcional d’aquest sistema es pot situar en el context de la literatura experimental corresponent (Mure et al., 2002).

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/3.png' | relative_url }}" alt="Figura 3 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 3.</strong> Amina oxidasa: regió funcional o cavitat principal. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/4.png' | relative_url }}" alt="Figura 4 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 4.</strong> Amina oxidasa: superfície molecular. </figcaption>
</figure>

## Modificacions, variants i límits d’anotació

La modificació essencial és la biogènesi de TPQ a partir de tirosina; cal numerar el residu segons la seqüència exacta. Les modificacions, mutacions o variants només tenen valor estructural si s’indiquen amb residu, numeració i equivalència amb el PDB o model usat a les figures.

## Relació seqüència-estructura-funció

La lectura molecular connecta tres nivells: residus que sostenen el plegament, residus que defineixen cavitats o superfícies d’interacció, i residus directament implicats en la química o en el reconeixement del substrat. Aquesta estructura permet comparar variants, interpretar lligands i entendre quines parts de la proteïna són més importants per a la funció.

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/5.png' | relative_url }}" alt="Figura 5 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 5.</strong> Amina oxidasa: contactes amb lligands o cofactors. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/6.png' | relative_url }}" alt="Figura 6 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 6.</strong> Amina oxidasa: interfície o estat oligomèric. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/7.png' | relative_url }}" alt="Figura 7 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 7.</strong> Amina oxidasa: detall de residus rellevants. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/8.png' | relative_url }}" alt="Figura 8 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 8.</strong> Amina oxidasa: representació complementària del model. </figcaption>
</figure>

<figure> <img src="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/imatges/9.png' | relative_url }}" alt="Figura 9 del grup H 2024-2025" loading="lazy"> <figcaption><strong>Figura 9.</strong> Amina oxidasa: vista global del plegament. </figcaption>
</figure>

## Referències

- Mure, M.; Mills, S. A.; Klinman, J. P. (2002). *Catalytic Mechanism of the Topa Quinone Containing Copper Amine Oxidases*. *Biochemistry*. [doi: 10.1021/bi020246b](https://doi.org/10.1021/bi020246b).

[^origen]: Material de partida: <a href="{{ '/QiEP/2024-2025/P1/Pràctica 1 Grup H/Grup H Amine oxidase.md' | relative_url }}">pàgina original del grup H</a>.
