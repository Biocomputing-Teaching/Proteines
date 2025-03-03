---
layout: default
title: 'Pràctica 1; Química i Enginyeria de Proteïnes, UVic-UCC 22-23'
author: Jordi Villà-Freixa
date: 2023
permalink: /QiEP-P1-2023/
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

<h1>QiEP: Pràctica 1. Proteïnes que digereixen proteïnes</h1>

<!-- toc -->



<!-- tocstop -->

L'exercici consisteix a explorar l'estructura de sis proteïnes, una per a cada grup de la classe, de les quals ens donen les seqüències:

```fasta
>A
MDFSRNLYDIGEQLDSEDLASLKFLSLDYIPQRKQEPIKDALMLFQRLQEKRMLEESNLSFLKELLFRINRLDLLITYLNTRKEEMERELQTPGRAQISAYRVMLYQISEEVSRSELRSFKFLLQEEISKCKLDDDMNLLDIFIEMEKRVILGEGKLDILKRVCAQINKSLLKIINDYEEFSKERSSSLEGSPDEFSNGEELCGVMTISDSPREQDSESQTLDKVYQMKSKPRGYCLIINNHNFAKAREKVPKLHSIRDRNGTHLDAGALTTTFEELHFEIKPHDDCTVEQIYEILKIYQLMDHSNMDCFICCILSHGDKGIIYGTDGQEAPIYELTSQFTGLKCPSLAGKPKVFFIQACQGDNYQKGIPVETDSEEQPYLEMDLSSPQTRYIPDEADFLLGMATVNNCVSYRNPAEGTWYIQSLCQSLRERCPRGDDILTILTEVNYEVSNKDDKKNMGKQMPQPTFTLRKKLVFPSD
>B
MSDMEKPWKEEEKREVLAGHARRQAPQAVDKGPVTGDQRISVTVVLRRQRGDELEAHVERQAALAPHARVHLEREAFAASHGASLDDFAEIRKFAEAHGLTLDRAHVAAGTAVLSGPVDAVNQAFGVELRHFDHPDGSYRSYVGDVRVPASIAPLIEAVLGLDTRPVARPHFRLRRRAEGEFEARSQSAAPTAYTPLDVAQAYQFPEGLDGQGQCIAIIELGGGYDETSLAQYFASLGVSAPQVVSVSVDGATNQPTGDPNGPDGEVELDIEVAGALAPGAKIAVYFAPNTDAGFLNAITTAVHDPTHKPSIVSISWGGPEDSWAPASIAAMNRAFLDAAALGVTVLAAAGDSGSTDGEQDGLYHVDFPAASPYVLACGGTRLVASAGRIERETVWNDGPDGGSTGGGVSRIFPLPSWQERANVPPSANPGAGSGRGVPDVAGNADPATGYEVVIDGETTVIGGTAAVAPLFAALVARINQKLGKPVGYLNPTLYQLPPEVFHDITEGNNDIANRARIYQAGPGWDPCTGLGSPIGIRLLQALLPSASQAQP
>C
MLGITVLAALLACASSCGVPSFPPNLSARVVGGEDARPHSWPWQISLQYLKNDTWRHTCGGTLIASNFVLTAAHCISNTRTYRVAVGKNNLEVEDEEGSLFVGVDTIHVHKRWNALLLRNDIALIKLAEHVELSDTIQVACLPEKDSLLPKDYPCYVTGWGRLWTNGPIADKLQQGLQPVVDHATCSRIDWWGFRVKKTMVCAGGDGVISACNGDSGGPLNCQLENGSWEVFGIVSFGSRRGCNTRKKPVVYTRVSAYIDWINEKMQL
>D
MAQALPWLLLWMGAGVLPAHGTQHGIRLPLRSGLGGAPLGLRLPRETDEEPEEPGRRGSFVEMVDNLRGKSGQGYYVEMTVGSPPQTLNILVDTGSSNFAVGAAPHPFLHRYYQRQLSSTYRDLRKGVYVPYTQGKWEGELGTDLVSIPHGPNVTVRANIAAITESDKFFINGSNWEGILGLAYAEIARPDDSLEPFFDSLVKQTHVPNLFSLQLCGAGFPLNQSEVLASVGGSMIIGGIDHSLYTGSLWYTPIRREWYYEVIIVRVEINGQDLKMDCKEYNYDKSIVDSGTTNLRLPKKVFEAAVKSIKAASSTEKFPDGFWLGEQLVCWQAGTTPWNIFPVISLYLMGEVTNQSFRITILPQQYLRPVEDVATSQDDCYKFAISQSSTGTVMGAVIMEGFYVVFDRARKRIGFAVSACHVHDEFRTAAVEGPFVTLDMEDCGYNIPQTDESTLMTIAYVMAAICALFMLPLCLMVCQWRCLRCLRQQHDDFADDISLLK
>E
MTMEKGMSSGEGLPSRSSQVSAGKITAKELETKQSYKEKRGGFVLVHAGAGYHSESKAKEYKHVCKRACQKAIEKLQAGALATDAVTAALVELEDSPFTNAGMGSNLNLLGEIECDASIMDGKSLNFGAVGALSGIKNPVSVANRLLCEGQKGKLSAGRIPPCFLVGEGAYRWAVDHGIPSCPPNIMTTRFSLAAFKRNKRKLELAERVDTDFMQLKKRRQSSEKENDSGTLDTVGAVVVDHEGNVAAAVSSGGLALKHPGRVGQAALYGCGCWAENTGAHNPYSTAVSTSGCGEHLVRTILARECSHALQAEDAHQALLETMQNKFISSPFLASEDGVLGGVIVLRSCRCSAEPDSSQNKQTLLVEFLWSHTTESMCVGYMSAQDGKAKTHISRLPPGAVAGQSVAIEGGVCRLESPVN
>F
MRGLLVLSVLLGAVFGKEDFVGHQVLRISVADEAQVQKVKELEDLEHLQLDFWRGPAHPGSPIDVRVPFPSIQAVKIFLESHGISYETMIEDVQSLLDEEQEQMFAFRSRARSTDTFNYATYHTLEEIYDFLDLLVAENPHLVSKIQIGNTYEGRPIYVLKFSTGGSKRPAIWIDTGIHSREWVTQASGVWFAKKITQDYGQDAAFTAILDTLDIFLEIVTNPDGFAFTHSTNRMWRKTRSHTAGSLCIGVDPNRNWDAGFGLSGASSNPCSETYHGKFANSEVEVKSIVDFVKDHGNIKAFISIHSYSQLLMYPYGYKTEPVPDQDELDQLSKAAVTALASLYGTKFNYGSIIKAIYQASGSTIDWTYSQGIKYSFTFELRDTGRYGFLLPASQIIPTAKETWLALLTIMEHTLNHPY
```

Usarem eines com:

1. [Chimera](https://www.cgl.ucsf.edu/chimera/) per a la visualització de proteïnes.
2. [UNIPROT](https://www.uniprot.org/) per a obtenir informació sobre una proteïna determinada.
3. [PDB](https://www.rcsb.org/) per a obtenir l'estructura tridimensional d'una proteïna.
4. [BRENDA](https://www.brenda-enzymes.org). En tant que enzims, explorarem la seva funció i la seva classificació.



El primer que farem serà identificar quines són aquestes seqüències usant el programa [BLAST a NCBI](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastp&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome) per a buscar les proteïnes per a les quals codifiquen (tinguem cura d'especificar que volem executar BLAST "contra" la base de dades Uniprot en el desplegable corresponent). Per exemple, en el cas de la proteîna del grup `A` obtenim un resultat a BLAST com el de la figura següent (mostrem només els 5 millors resultats):
![blast per a la proteïna A](figures/ncbi_caspase8_blast.png)

Accedint al codi d'accés `Q14790.1`de la drerta de la primera línea trobem que es tracta de la caspasa-8 humana, amb codi d'accés [UNIPROT `Q14790`](https://www.uniprot.org/uniprotkb/Q14790/entry).
![entrada per a la Caspasa 8](figures/ncbi_caspase8.png)

A la pròpia entrada UNIPROT hi trobem l'enllaç a BRENDA i el codi EC de l'enzim.

Així, identifiquem:

| Grup: proteïna        | Codi UNIPROT                                          | Codi BRENDA/ENZYME                                                                                      |
| ---------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| A: Caspasa-8           | [Q14790](https://www.uniprot.org/uniprotkb/Q14790/entry) | [EC 3.4.22.61](https://www.brenda-enzymes.org/enzyme.php?ecno=3.4.22.61&UniProtAcc=Q14790&OrganismID=2681) |
| B: Kumamolisina        | [Q8RR56](https://www.uniprot.org/uniprotkb/Q8RR56/entry) | [EC 3.4.21.B48](https://www.brenda-enzymes.org/enzyme.php?ecno=3.4.21.B48) [^1]                            |
| C: Quimotripsina-C     | [Q99895](https://www.uniprot.org/uniprotkb/Q99895/entry) | [EC 3.4.21.2](https://www.brenda-enzymes.org/enzyme.php?ecno=3.4.21.2&UniProtAcc=Q99895&OrganismID=2681)   |
| D: BACE1               | [P56817](https://www.uniprot.org/uniprotkb/P56817/entry) | [EC 3.4.23.46](https://www.brenda-enzymes.org/enzyme.php?ecno=3.4.23.46&UniProtAcc=P56817&OrganismID=2681) |
| E: Taspasa 1           | [Q9H6P5](https://www.uniprot.org/uniprotkb/Q9H6P5/entry) | [EC 3.4.25.1](https://www.brenda-enzymes.org/enzyme.php?ecno=3.4.25.1) [^2]                                    |
| F: Carboxipeptidasa A1 | [P15085](https://www.uniprot.org/uniprotkb/P15085/entry)                                                |                         [EC 3.4.17.1](https://www.brenda-enzymes.org/enzyme.php?ecno=3.4.17.1&UniProtAcc=P15085&OrganismID=2681)                                                                 |

[^1]: Cal notar que en aquest cas l'entrada UNIPROT no enllaça a BRENDA, però si entrem a BRENDA i cerquem directament el nom de la proteïna obtenim un *preliminary BRENDA supplied EC number*
[^2]: En aquest cas, en accedir a ENZYME des de la pàgina d'UNIPROT, obtenim [dues opcions de codi](https://enzyme.expasy.org/EC/3.4.25.-), i hem agafat el primer.




El més fàcil és accedir a la informació estructural directament des de la pàgina d'UNIPROT (secció `Structure`) sempre que estigui disponible (en general el més comú és no trobar estructures resoltes d'una proteïna al PDB i aleshores podem fer ús de la predicció que ens dona Alphafold2 accessible directament des de la pàgina d'UNIPROT). Fent-ho i escollint els PDB amb millor resolució i major cobertura, obtenim aquesta nova taula:

| Grup: proteïna [UNIPROT]         | Funció [^3]                                                                                                             | Codi PDB i cadena       |
|-------------------------|---------------------------------------------------------------------------------------------------------------------|----------------|
| A: Caspasa-8  [Q14790]  | **Cisteina proteasa** que juga un paper clau en la mort cel·lular programada actuant com a interruptor molecular per a l'apoptosi, la necroptosi i la piroptosi, i és necessària per prevenir danys en el teixit durant el desenvolupament embrionari i la vida adulta. | [1QTN](https://www.rcsb.org/structure/1QTN)_A |
| B: Kumamolisina [Q8RR56] | **Serina proteasa, sedolisina** hidrolitza preferentment pèptids que tenen un residu Ala o Pro a la posició P2 i prefereix residus d'aminoàcids carregats com Glu o Arg a la posició P2'.[^4]                                   | [1T1E](https://www.rcsb.org/structure/1T1E)_A |
| C: Quimotripsina-C [Q99895]| **Serina proteasa**, Regula l'activació i la degradació de tripsinògens i procarboxipeptidases dirigint-se a llocs de tall específics dins dels seus zimogens. Té activitat proteasa de tipus quimotripsina i activitat hipocalcèmica.   | [4H4F](https://www.rcsb.org/structure/4H4F)_A |
| D: BACE1   [P56817]     | **Aspartat proteasa** Responsable del processament proteolític de la proteïna precursora de l'amiloide (APP). L'escissió a l'extrem N de la seqüència de pèptids A-beta, entre els residus 671 i 672 de l'APP, condueix a la generació i l'alliberament extracel·lular d'APP soluble escindida en beta, i un fragment C-terminal associat a la cèl·lula corresponent que s'allibera més tard. per gamma-secretasa | [1TQF](https://www.rcsb.org/structure/1TQF)_A |
| E: Taspasa 1  [Q9H6P5]  | **Treonina proteasa**, responsable del processament i activació de KMT2A/MLL1. També activa KMT2D/MLL2 (Per similitud). Mitjançant l'activació del substrat, controla l'expressió dels gens HOXA i l'expressió de reguladors clau del cicle cel·lular, inclosos CCNA1, CCNB1, CCNE1 i CDKN2A (Per similitud)   | [2A8J](https://www.rcsb.org/structure/2A8J)_A |
| F: Carboxipeptidasa A1 [P15085] |**Metaloproteasa** Carboxipeptidasa que catalitza l'alliberament d'un aminoàcid C-terminal, però té poca o cap acció amb -Asp, -Glu, -Arg, -Lys o -Pro | [5OM9](https://www.rcsb.org/structure/5OM9)_A |

[^3]: Si no s'especifica el contrari, la informació està extreta de la fitxa UNIPROT
[^4]: Informació obtinguda de la fitxa a BRENDA.



<table>
  <thead>
    <tr>
      <th>Grup: proteïna [UNIPROT]</th>
      <th>Codi PDB i cadena / Domini</th>
      <th>Visualització</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A: Caspasa-8  [Q14790] </td>
      <td><a href="https://www.rcsb.org/structure/1QTN" target="_blank">1QTN_A</a><br> <a href="https://scop.berkeley.edu/sunid=30999" target="_blank">SCOPe</a></td>
      <td>   
        <div id="myViewer"><pdbe-molstar id="pdbeMolstarComponent" molecule-id="1qtn" hide-controls="true"></pdbe-molstar></div> 
      </td>
    </tr>
    <tr>
      <td>B: Kumamolisina [Q8RR56]</td>
      <td><a href="https://www.rcsb.org/structure/1T1E" target="_blank">1T1E_A</a><br> <a href="https://scop.berkeley.edu/sunid=106244" target="_blank">SCOPe</a></td>
      <td>   
        <div id="myViewer"><pdbe-molstar id="pdbeMolstarComponent" molecule-id="1t1e" hide-controls="true"></pdbe-molstar></div> 
      </td>
    </tr>
    <tr>
      <td>C: Quimotripsina-C [Q99895]</td>
      <td><a href="https://www.rcsb.org/structure/4H4F" target="_blank">4H4F_A</a><br> <a href="https://scop.berkeley.edu/sunid=26067" target="_blank">SCOPe</a></td>
      <td>   
        <div id="myViewer"><pdbe-molstar id="pdbeMolstarComponent" molecule-id="4h4f" hide-controls="true"></pdbe-molstar></div> 
      </td>
    </tr>
    <tr>
      <td>D: BACE1   [P56817]</td>
      <td><a href="https://www.rcsb.org/structure/1TQF" target="_blank">1TQF_A</a><br> <a href="https://scop.berkeley.edu/sunid=112613" target="_blank">SCOPe</a></td>
      <td>   
        <div id="myViewer"><pdbe-molstar id="pdbeMolstarComponent" molecule-id="1tqf" hide-controls="true"></pdbe-molstar></div> 
      </td>
    </tr>
    <tr>
      <td>E: Taspasa 1  [Q9H6P5]</td>
      <td><a href="https://www.rcsb.org/structure/2A8J" target="_blank">2A8J_A</a><br> <a href="https://www.ebi.ac.uk/thornton-srv/databases/cgi-bin/pdbsum/GetPfamStr.pl?pfam_id=PF01112" target="_blank">PFAM</a></td>
      <td>   
        <div id="myViewer"><pdbe-molstar id="pdbeMolstarComponent" molecule-id="2a8j" hide-controls="true"></pdbe-molstar></div> 
      </td>
    </tr>
    <tr>
      <td>F: Carboxipeptidasa A1 [P15085]</td>
      <td><a href="https://www.rcsb.org/structure/5OM9" target="_blank">5OM9_A</a><br> <a href="http://scop.mrc-lmb.cam.ac.uk/term/3000662" target="_blank">SCOP</a></td>
      <td>   
        <div id="myViewer"><pdbe-molstar id="pdbeMolstarComponent" molecule-id="5om9" hide-controls="true"></pdbe-molstar></div> 
      </td>
    </tr>
  </tbody>
</table>

Veure intro a estructures supersecundàries [aquí](./supersec.pdf).

&copy; [Jordi Villà Freixa](https://mon.uvic.cat/cbbl/members/), [Facultat de Ciències, Tecnologia i Enginyeries](https://mon.uvic.cat/fcte/), [Universitat de Vic - Universitat Central de Catalunya](https://www.uvic.cat/), 2023




