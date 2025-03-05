---
layout: default
title: 'Relacions estructura-funció: Amina oxidasa'
date: 03-2025
author: Arisó Gómez Irene, Guiu Gorgas Berta i Vila Roca Judith
permalink: /QiEP-P1-2025-H/
---
# **Pràctica 1. Anàlisi proteïna Amine oxidase [flavin-containing] A**
## **Grup H: Arisó Gómez Irene, Guiu Gorgas Berta i Vila Roca Judith**

## 1 - Sobre la proteïna

*   Cerqueu la seqüència donada a UNIPROT i trobeu el nom del gen corresponent. Anoteu el codi UNIPROT i també la classificació EC.X.X.X.X, en cas que es tracti d'un enzim, segons la base de dades BRENDA.

        Seqüència donada: 

        MENQEKASIAGHMFDVVVIGGGISGLSAAKLLTEYGVSVLVLEARDRVGGRTYTIRNEHVDYVDVGGAYVGPTQNRILRLSKELGIETYKVNVSERLVQYVKGKTYPFRGAFPPVWNPIAYLDYNNLWRTIDNMGKEIPTDAPWEAQHADKWDKMTMKELIDKICWTKTARRFAYLFVNINVTSEPHEVSALWFLWYVKQCGGTTRIFSVTNGGQERKFVGGSGQVSERIMDLLGDQVKLNHPVTHVDQSSDNIIIETLNHEHYECKYVINAIPPTLTAKIHFRPELPAERNQLIQRLPMGAVIKCMMYYKEAFWKKKDYCGCMIIEDEDAPISITLDDTKPDGSLPAIMGFILARKADRLAKLHKEIRKKKICELYAKVLGSQEALHPVHYEEKNWCEEQYSGGCYTAYFPPGIMTQYGRVIRQPVGRIFFAGTETATKWSGYMEGAVEAGERAAREVLNGLGKVTEKDIWVQEPESKDVPAVEITHTFWERNLPSVSGLLKIIGFSTSVTALGFVLYKYKLLPRS


        Hem buscat la seqüència a la base de dades Uniprot, el codi d'aquesta proteïna és P21397 - AOFA_HUMAN "https://www.uniprot.org/uniprotkb/P21397/entry" la classificació de l'enzim EC:1.4.3.4 ; 
        EC Tree: 1. Oxidoreductases 
        → 1.4. Actua sobre el grup CH-NH₂ dels donants 
        → 1.4.3. Té oxigen com a receptor 
        → 1.4.3.4. Monoamino oxidasa 
        i codifica per el gen MAOA.



*   Cerqueu a la base de dades del Protein Data Bank si l'estructura de la proteïna és coneguda i, en aquest cas, doneu-ne el codi PDB (si n'hi ha més d'un justifiqueu amb quin treballareu a partir d'aquest punt en base a la resolució de l'experiment on s'ha resolt l'estructura i també la cobertura de seqüència que s'ha fet). En cas que no trobeu la proteïna al PDB, useu la interfície d'Alphafold2 o bé la pròpia base de dades del programa Alphafold2 per trobar una predicció de la seva estructura.


        Hem cercat l'estructura a la base de dades de Protein Data Bank i hem trobat que està disponible amb el codi PDB: 2Z5Y, amb una resolució de 2.17 Å i les posicions cobertes són de la 12-524. 
        Hem escollit aquesta estructura ja que es la que presenta millor resolució, és a dir, més baixa i cobreix el major nombre de posicions de la seqüència. Tambè he utilitzat la interfície d'AlphaFold per obtenir una predicció de la seva estructura tridimensional i poder comparar-les.


![alt text](<Captura de Pantalla 2025-03-03 a las 12.46.25-1.png>)


        Estructura tridimensional PDB 2Z5Y	

![alt text](<Captura de Pantalla 2025-03-03 a las 12.48.10-1.png>)


        Estructura tridimensional Alphafold


*   Expliqueu breument la funció de la proteïna.

        La proteïna Microsomal Epixode hydrolase 1, és un enzim involucrat en la detoxificació de compostos tòxics ja que té capacitat per hidrolitzar epòxids. Un cop els hidrolitza, els comparteix en diols, facilitant la seva eliminació.

        L'Amine oxidase (AOFA_HUMAN), esta involucrat en la degradació de les amines biogèniques, com la serotonina, la dopamina, la noradrenalina i l'adrenalina, a través d'oxidació generant aldehids, amoníac i peròxid d'hidrogen com a subproductes.

        Aquest enzim es fundamental per la regulació dels neurotransmissors al sistema nerviós central, implicat tambè en la depresió i transtorns neurològics i psiquiàtrics. En teràpies s'utilitzen inhibidors de la MAO-A.


## 2 - Treball amb ChimeraX

*   Obriu l'estructura del PDB amb el programa ChimeraX

![alt text](<Captura de Pantalla 2025-03-03 a las 12.34.28.png>)

*   Detecteu les diferents estructures secundàries de la proteïna i determineu-ne el tipus (fulles, hèlix, llaços i les seves diferents variants). Mireu de descriure amb un cert detall els diferents tipus d'interaccions que podeu trobar dins aquestes estructures secundàries (mostreu els ponts d'hidrogen interns d'aquestes estructures secundàries).

![alt text](<Captura de Pantalla 2025-03-03 a las 12.30.50.png>)

        Identificació estructures secundaries:
            - Fulles α → Vermell
            - Fulles β → Groc
            - Laços y girs → Blanc


 <u>Fulles α </u>: 21 estructures ; 
 
        select /A:22-35,74-84,117-137,142-146,148-165,167-183,190-200,203-209,223-235,274-279,288-296,313-318,355-362,365-382,384-388,414-423,434-438,444-463,468-472,489-495,497-521  

        S'han seleccionat 1945 àtoms en total, 1966 enllaços dins de la selecció i 241 residus en total, la selecció pertany a un sol model estructural dins del PDB carregat.

![alt text](<Captura de Pantalla 2025-03-03 a las 12.52.54.png>)

<u>Fulles β  </u>: 20 estructures ; 

        select /A:16-19,39-42,54-55,63-64,88-90,96-101,104-108,217-219,238-239,244-248,254-258,263-266,268-271,282-284,303-309,320-327,335-338,348-354,391-396,430-432  

        S'han seleccionat 736 àtoms en total, 735 enllaços dins de la selecció i 87 residus en total, la selecció pertany a un sol model estructural dins del PDB carregat.

![alt text](<Captura de Pantalla 2025-03-03 a las 13.02.36.png>)

Respecte els ponts d'hidrogen es troben 1016 (imatge de sota)

![alt text](<Captura de Pantalla 2025-03-03 a las 13.00.34.png>)



*   Podeu detectar-hi motius d'estructura supersecundària? Mostreu les interaccions (ponts d'hidrogen, van der Waals) entre els diferents elements que constitueixen aquestes estructures supersecundàries.

        S'han detectat diferents tipus d'interaccions estabilitzadores dins d'aquestes estructures com per exemple; Ponts d'hidrogen , majoritàriament entre els grups amida i carbonil de les làmines β i hèlix α

![alt text](<Captura de Pantalla 2025-03-03 a las 13.20.33.png>)

        També s'han localitzat les interaccions de van der Waals entre residus hidrofòbics de les làmines β i hèlix α.

![alt text](<Captura de Pantalla 2025-03-03 a las 13.26.44-1.png>)


*  L'estructura terciària de la proteïna, a quin tipus de plegament correspon? Busqueu el plegament a la base de dades SCOP, anoteu el codi que us dona aquesta base de dades per al plegament i mostreu la jerarquía d'aquest plegament. En cas que existeixi estructura quaternària, discutiu-la també.

        Es tracta d'una proteïna α/β amb estructura terciària globular, amb plegament de flavoproteïna ja que conté FAD com a cofactor que s'uneix al seu centre actiu. El codi de SCOPe és el següent: Fold c.3: FAD/NAD(P)-binding domain [51904]. 
        
        La proteïna estudiada, també pot formar estructura quaternària. La estructura quaternària resulta de la unió de dues o més cadenes polipeptídiques que formaràn part de la mateixa proteïna. En el cas de la Amine oxidase [flavin-containing] A, podrà formar en algun cas l'estructura quaternària, ja que pot existir com a monòmer o formar dímers. 

## 3 - Funció de la proteïna:

*  Identifiqueu el centre actiu de la proteïna. Quins residus són rellevants, a partir de la literatura? L'estructura que heu explorat, inclou algun substrat o inhibidor? Podeu descriure les interaccions que presenten entre ells els residus del centre actiu i, eventualment, d'aquests amb el possible substrat/inhibidor (ponts d'hidrogen, van der Waals, càrregues, etc)?

         El centre actiu de la AMINE OXIDASA és la cavitat hidrofòbica de l’enzim on té lloc la reacció d’oxidació. En aquesta regió es troba: la flavina (FAD), que serveix com a cofactor essencial, i els residus.
          De residuos podem trobar: 
          - Histidines: Trobem les His 451 i His 335 que ajuden a establitzar el centre actiu i poden interaccionar amb el substrat.
          - Serina: Trobem la Ser 203, que també interactua mab el substrat ajudant a establitzar el seu grup amina.
          - Residus aromàtics: Són el Triftòfen 118 i la Fenilanina 343 que estableixen la propietat hidrofòbica del cetnre actiu.
          
          La proteïna Amine Oxidasa si pot portar substrats en el seu centre actiu, igual que inhibidors. Un exemple d'inhibidor irreversible sería la clorgilina. Els residus del centre actiu interaccionen amb el substrat o el inhibidor de diferents maneres: Ponts d'hidrogen, com estableixen el FAD i la serina amb el grup amina del substrat per catalitzar-lo; Forces de Van der Waals per part del Triftòfen i la Fenilanina (donen propietat hidrofòbica al centre actiu) que ajuden a estabilitzazr la molècula i, finalment, les histidines poden interaccionar electroestàticament amb el substrat per col·locar-lo en la orientació correcte.


*  Cerqueu informació sobre la funció fa aquesta proteïna? Podeu mostrar el mecanisme detallat que segueix si es tracta d'un enzim? (mireu la figura 6.5.1 d'aquest enllaç per entendre a què ens referim amb el mecanisme de reacció d'un enzim)?

        La funció de la proteïna és catalitzar la desaminació oxidativa (reacció en la qual una molècula orgànica perd un grup amino (-NH2)) en amines primàries, i a vegades, secundàries, com es neurotransmissors: adrenalina, noradrenalina, dopamina i serotonina. Provoquen una reducció del oxígen al peròxid d'hidrògen per eliminar un grup amino d'un substrat, resultant en l'aldehid corresponent, amoníac i peròxid d'hidrogen. La reacció és:
          H R-C-NH₂ + O₂ + H₂O → R-C=O + NH₃ + H₂O₂ H
          
          La seva funció es molt important per al metabolisme de les amines neuroactives i vasoactives del SNC i teixits perifèrics, així assegura l'homeòstasi dels nivells de neurotransmissors centrals .  

*  Relació seqüència-estructura-funció: Com relacionaríeu l'estructura que heu analitzat amb la funció de la proteïna? Quins elements estructurals participen en aquesta funció? Quins residus en concret són claus per a la funció? Cerqueu eventuals variants de la proteïna que tinguin implicacions funcionals i comenteu els seus efectes a nivell molecular.

        L'estructura de la proteïna és globular i amb la cavitat del centre actiu hidrofòbica, el que permet envoltar i estabilitzar el substrat per a dur a terme la desaminació oxidativa. També és essencial per a la seva funció, que l'estructura presenti dominis específics per a que el cofactor FAD s'uneixi, ja que és completament necessàri per l'acció enzimàtica.En conclusió, l'estructura si està relacionada amb la funció en aquest cas.
        Les Histidines també tenen una participació essencial en la catàlisi i la interacció amb el substrat, a part del FAD, conjuntament seríen els residus més essencials. 
        Existeixen variants d'aquestes proteïnes que, al estar enfocades a la catàlisi dels neurotransmissors, la seva mutació pot provocar deficiències en la salut mental i el comportament, associades a transtrons psiquiàtrics. Per exemple, la variant NC_000023.11:g.43711896G>A esta associada al espectre autista i actitut violenta, al substituïr una Alanina amb una Treonina. Algunes de les seves variants missense (Accession code uniprot:NC_000023.11:g.43656344G>A; i l'altre:NC_000023.11:g.43683572C>T ) resulten en proteïnes no funcionals, el que provoca el síndrome de Brunner, caracteritzat per per una lleu discapacitat intelectual i problemes de conducte desde la infància. En total es poden trobar 328 variants d'aquesta proteïna.