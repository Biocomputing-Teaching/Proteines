---
layout: default
title: Tallers Bioinformàtica Estructural FTCE
author: Jordi Villà-Freixa
permalink: /COVID19/
---
 <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
<script src="https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js"></script>
    <!-- Web component polyfill (only loads what it needs) -->
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-lite.js" charset="utf-8"></script>
    <!-- Required to polyfill modern browsers as code is ES5 for IE... -->
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js" charset="utf-8"></script>

<link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.2.1.css">
<script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-1.2.1.js"></script>
<style>
        #myViewer{
          float:none;
          width:400px;
          height:400px;
          position:relative;
        }
    </style>
  </head>



![](../figures/FCTE.png)

<h1>En cerca d'un antiviral per a la COVID19</h1>


Com s'ho fan els científics per trobar un antiviral per a un virus com el SARS-Cov-2? Com escullen la proteïna que els servirà de diana terapèutica? Com aprofiten el coneixement existent?

- [Com ataca el coronavirus?](#com-ataca-el-coronavirus)
- [Com muta el genoma del SARS-CoV-2](#com-muta-el-genoma-del-sars-cov-2)
- [Millor una proteïna menys variant per generar un antiviral: 3CLPro](#millor-una-proteïna-menys-variant-per-generar-un-antiviral-3clpro)
- [Ara et toca a tu!](#ara-et-toca-a-tu)

# Com ataca el coronavirus?

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/5DGwOJXSxqg/0.jpg)](https://youtu.be/5DGwOJXSxqg?t=42)


![](./figures/sars-cov-2-fusion.png)

[Credit: David S. Goodsell](https://pdb101.rcsb.org/sci-art/goodsell-gallery/sars-cov-2-fusion)

<p>
<div id="myViewer">
<pdbe-molstar id="pdbeMolstarComponent" molecule-id="7df4" hide-controls="false"></pdbe-molstar>
</div>
Proteïna Spike interaccionant amb ACE2
</p>
<br>  

<p>
<div id="myViewer">
<pdbe-molstar id="pdbeMolstarComponent" molecule-id="6wpt" hide-controls="false"></pdbe-molstar>
</div>
Proteïna Spike amb un anticós neutralitzant
</p>
<br>  

# Com muta el genoma del SARS-CoV-2
![](./figures/genome-illustr-2021-update2.png)

![](./figures/variabilitatOmicron.png)
[Alta variabilitat de la proteïna SPIKE](https://covdb.stanford.edu/variants/omicron_ba_1_3/)

# Millor una proteïna menys variant per generar un antiviral: 3CLPro

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/WQzjXHKBSY8/0.jpg)](https://youtu.be/WQzjXHKBSY8)

![](./figures/44_2022_2951_Fig1_HTML.png)

[Article](https://link-springer-com.biblioremot.uvic.cat/article/10.1007/s00044-022-02951-6)

![](./figures/MSA_variants_Mpro.png)


<p>
<div id="myViewer">
<pdbe-molstar id="pdbeMolstarComponent" molecule-id="6yb7" hide-controls="false"></pdbe-molstar>
</div>
Proteasa principal del SARS-CoV-2 amb un inhibidor covalent.
</p>
<br>  

# Ara et toca a tu!

Per seguir els diferents passos d'aquesta apassionant història t'hem preparat [un guió](https://jordivillafreixa.github.io/Proteines/GuioCOVID19/) on, pas a pas, podràs raonar com ho ha fet la comunitat científica per trobar una possible solució a la COVID-19. Encara queda molta més feina per fer. T'animes a seguir els passos d'aquests investigadors?

Sovint parlem de com d'important és invertir en recerca, tot i que de vegades els resultats no siguin immediatament aparents. Aquí us hem mostrat un exemple de com la recerca en genòmica, virologia, bioinformàtica, química mèdica, biologia molecular, descobriment de fàrmacs i modelatge molecular van de la mà quan cal trobar una resposta a un problema. L'acumulació de resultats i de coneixement al llarg de molts anys acaba essent determinant per trobar solucions ràpides a crisis sanitàries sobtades!


&copy; [Jordi Villà Freixa](https://mon.uvic.cat/cbbl/members/) 2022