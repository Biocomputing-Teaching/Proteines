---
layout: default
title: 'Pràctica 1; Química i Enginyeria de Proteïnes, UVic-UCC 22-23'
author: Jordi Villà-Freixa
permalink: /QiEP-P1/
---
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <title>PDBe Molstar - Helper functions</title>
    <!-- Molstar CSS & JS -->
    <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-light-3.1.0.css">
    <script type="text/javascript" src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-plugin-3.1.0.js"></script>
    <style>
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      .msp-plugin ::-webkit-scrollbar-thumb {
          background-color: #474748 !important;
      }
      .viewerSection {
        margin: 120px 0 0 50px;
      }
      #myViewer{
        float:left;
        width:400px;
        height: 400px;
        position:relative;
      }
    </style>
  </head>

<h1>QiEP: Pràctica 1. Proteïnes que digereixen proteïnes</h1>

<!-- toc -->

- [Introducció](#introduccio)
- [Sobre la proteïna:](#sobre-la-proteina)
- [Briefing on the mechanism of action of SARS-CoV-2](#briefing-on-the-mechanism-of-action-of-sars-cov-2)
- [Assignment questions](#assignment-questions)
  * [1. 1) Virus-cell interactions](#1-1-virus-cell-interactions)
  * [2. 2) Variability in the SARS-CoV-2 genome](#2-2-variability-in-the-sars-cov-2-genome)
  * [3. 3) Rational Drug Discovery](#3-3-rational-drug-discovery)
    + [3.1. Ligand](#31-ligand)
    + [3.2. Complex](#32-complex)
- [References](#references)

<!-- tocstop -->

# Introducció



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


# Sobre la proteïna:

**Cerqueu la seqüència donada a UNIPROT i trobeu el nom del gen corresponent. Anoteu el codi UNIPROT i també la classifició EC.X.X.X.X de l'enzim segons la base de dades BRENDA.**

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


A Cystein protease https://rest.uniprot.org/uniprotkb/Q14790.fasta Caspase 8
B Serine protease https://www.uniprot.org/uniprotkb/Q8RR56/entry Kumamolysin
C Serine Protease https://www.uniprot.org/uniprotkb/Q99895/entry Chymotrypsin-C
D Aspartate protease https://www.uniprot.org/uniprotkb/P56817/entry BACE1
E Threonine protease https://www.uniprot.org/uniprotkb/Q9H6P5/entry Taspase 1
F metalloprotease https://www.uniprot.org/uniprotkb/P15085/entry Carboxipeptidase A1

**Cerqueu a la base de dades del Protein Data Bank si l'estructura de la proteïna és coneguda i, en aquest cas, doneu-ne el codi PDB (si n'hi ha més d'un justifiqueu amb quin treballareu a partir d'aquest punt en base a la resolució de l'experiment on s'ha resolt l'estructura i també la cobertura de seqüència que s'ha fet). En cas que la seqüència no sigui exactament coincident amb la de la proteïna resolta al PDB, justifiqueu perquè heu escollit aquest codi. Expliqueu breument la funció de la proteïna.**

El més fàcil és accedir a aquesta informació directament des de la pàgina d'UNIPROT (secció `Structure`) sempre que estigui disponible (en general el més comú és no trobar estructures resoltes d'una proteïna al PDB i aleshores podem fer ús de la predicció que ens dona Alphafold2 accessible directament des de la pàgina d'UNIPROT). Fent-ho i escollint els PDB amb millor resolució i major cobertura, obtenim aquesta nova taula:

| Grup: proteïna [UNIPROT]         | Funció [^3]                                                                                                             | Codi PDB i cadena       |
|-------------------------|---------------------------------------------------------------------------------------------------------------------|----------------|
| A: Caspasa-8  [Q14790]  | Proteasa de tiol que juga un paper clau en la mort cel·lular programada actuant com a interruptor molecular per a l'apoptosi, la necroptosi i la piroptosi, i és necessària per prevenir danys en el teixit durant el desenvolupament embrionari i la vida adulta. | [1QTN](https://www.rcsb.org/structure/1QTN)_A |
| B: Kumamolisina [Q8RR56] | L'enzim hidrolitza preferentment pèptids que tenen un residu Ala o Pro a la posició P2 i prefereix residus d'aminoàcids carregats com Glu o Arg a la posició P2'.[^4]                                   | [1T1E](https://www.rcsb.org/structure/1T1E)_A |
| C: Quimotripsina-C [Q99895]| Regula l'activació i la degradació de tripsinògens i procarboxipeptidases dirigint-se a llocs de tall específics dins dels seus zimogens. Té activitat proteasa de tipus quimotripsina i activitat hipocalcèmica.   | [4H4F](https://www.rcsb.org/structure/4H4F)_A |
| D: BACE1   [P56817]     | Responsable del processament proteolític de la proteïna precursora de l'amiloide (APP). L'escissió a l'extrem N de la seqüència de pèptids A-beta, entre els residus 671 i 672 de l'APP, condueix a la generació i l'alliberament extracel·lular d'APP soluble escindida en beta, i un fragment C-terminal associat a la cèl·lula corresponent que s'allibera més tard. per gamma-secretasa | [1TQF](https://www.rcsb.org/structure/1TQF)_A |
| E: Taspasa 1  [Q9H6P5]  | Proteasa responsable del processament i activació de KMT2A/MLL1. També activa KMT2D/MLL2 (Per similitud). Mitjançant l'activació del substrat, controla l'expressió dels gens HOXA i l'expressió de reguladors clau del cicle cel·lular, inclosos CCNA1, CCNB1, CCNE1 i CDKN2A (Per similitud)   | [2A8J](https://www.rcsb.org/structure/2A8J)_A |
| F: Carboxipeptidasa A1 [P15085] | Carboxipeptidasa que catalitza l'alliberament d'un aminoàcid C-terminal, però té poca o cap acció amb -Asp, -Glu, -Arg, -Lys o -Pro | [5OM9](https://www.rcsb.org/structure/5OM9)_A |

[^3]: Si no s'especifica el contrari, la informació està extreta de la fitxa UNIPROT
[^4]: Informació obtinguda de la fitxa a BRENDA.

# Treball amb ChimeraX

**Obriu l'estructura del PDB amb el programa Chimera. Detecteu les diferents estructures secundàries de la proteïna (fulles, hèlix, llaços) i determina el seu tipus. Mireu de descriure amb un cert detall els diferents tipus d'enllaços que podeu trobar dins aquestes estructures secundàries (mostreu els ponts d'hidrogen interns d'aquestes estructures secundàries).**

**Podeu detectar-hi motius d'estructura supersecundària? Mostreu les interaccions (ponts d'hidrogen, van der Waals) entre els diferents elements que constitueixen aquestes estructures supersecundàries.**

**L'estructura terciària de la proteïna, a quin tipus de plegament correspon? Busqueu el plegament a la base de dades SCOP, anoteu el codi que us dona aquesta base de dades per al plegament i mostreu la jerarquía d'aquest plegament.**

Mirarem de respondre les preguntes de forma col·lectiva per a cada proteïna:

## A: Caspasa-8  [Q14790] 

   <div class="viewerSection">
      <!-- Molstar container -->
      <div id="myViewer"></div>
      
   </div>
  <script>
    //Create plugin instance
    var viewerInstance = new PDBeMolstarPlugin();
    //Set options (Checkout available options list in the documentation)
    var options = {
        customData: {
          url: 'https://alphafold.ebi.ac.uk/files/AF-O15552-F1-model_v1.cif',
          format: 'cif'
        },
        alphafoldView: true,
        bgColor: {r:255, g:255, b:255},
        hideCanvasControls: ['selection', 'animation', 'controlToggle', 'controlInfo']
      }    
      //Get element from HTML/Template to place the viewer 
      var viewerContainer = document.getElementById('myViewer'); 
      //Call render method to display the 3D view
      viewerInstance.render(viewerContainer, options);   
  </script>

## B: Kumamolisina [Q8RR56]
## C: Quimotripsina-C [Q99895]
## D: BACE1   [P56817]
## E: Taspasa 1  [Q9H6P5]
## F: Carboxipeptidasa A1 [P15085]

# Funció de la proteïna:

**Identifiqueu el centre actiu de la proteïna. Quins residus són rellevants, a partir de la literatura? L'estructura que heu explorat, inclou algun substrat o inhibidor? Podeu descriure les interaccions que presenten entre ells els residus del centre actiu i, eventualment, d'aquests amb el possible substrat/inhibidor (ponts d'hidrogen, van der Waals, càrregues, etc)?**

**Cerqueu informació sobre la funció fa aquesta proteïna? Podeu mostrar el mecanisme detallat que segueix? Relació seqüència-estructura-funció: Com relacionaríeu l'estructura que heu analitzat amb la funció de la proteïna? Quins elements estructurals participen en aquesta funció? Quins residus en concret són claus per a la funció? Cerqueu eventuals variants de la proteïna que tinguin implicacions funcionals i comenteu els seus efectes a nivell molecular.**



&copy; [Jordi Villà Freixa](https://mon.uvic.cat/cbbl/members/), [Facultat de Ciències, Tecnologia i Enginyeries](https://mon.uvic.cat/fcte/), [Universitat de Vic - Universitat Central de Catalunya](https://www.uvic.cat/), 2023