

# PRÀCTICA 1
Cloe Capelle, Arnau Garcia i Sofia Lombera

## Relacions estructura-funció de proteïnes
## Introducció
Aquesta pràctica té com a objectiu treballar l'ús d'eines habituals en bioinformàtica estructural, centrant-nos en l'anàlisi de la proteïna **Xylose Isomerase**. Mitjançant aquesta activitat, busquem familiaritzar-nos amb les eines d'anàlisi i cerca d'homologia de seqüències proteiques, així com dominar les representacions gràfiques de les estructures de proteïnes.

Per assolir els objectius, utilitzarem eines com **ChimeraX** per visualitzar i analitzar l'estructura tridimensional de la proteïna, així com dades extretes del **Protein Data Bank (PDB)** i, si és necessari, d'**Alphafold2**. La nostra tasca principal consistirà a identificar els elements estructurals clau de la _Xylose Isomerase_ i comprendre com aquestes estructures contribueixen a la seva funció enzimàtica.

## Sobre la proteïna
La seqüència proporcionada va ser la següent:
`MNYQPTPEDRFTFGLWTVGWQGRDPFGDATRRALDPVESVRRLAELGAHGVTFHDDDLIPFGSSDSEREEHVKRFRQALDDTGMKVPMATTNLFTHPVFKDGGFTANDRDVRRYALRKTIRNIDLAVELGAETYVAWGGREGAESGGAKDVRDALDRMKEAFDLLGEYVTSQGYDIRFAIEPKPNEPRGDILLPTVGHALAFIERLERPELYGVNPEVGHEQMAGLNFPHGIAQALWAGKLFHIDLNGQNGIKYDQDLRFGAGDLRAAFWLVDLLESAGYSGPRHFDFKPPRTEDFDGVWASAAGCMRNYLILKERAAAFRADPEVQEALRASRLDELARPTAADGLQALLDDRSAFEEFDVDAAAARGMAFERLDQLAMDHLLGARG`

### Cerca de la seqüència a UNIPROT
-   **Nom UNIPROT**: P24300
-   **Proteïna**: Xylose Isomerase
-   **Gen**: xyIA
-   **Organisme**: Streptomyces rubiginosus
-   **Aminoàcids**: 388 AA

### Estructura de la proteïna 
-   **Codi PDB**: 1MNZ
-   **EC Number**: EC 5.3.1.5

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdEJIGn2euurcSEs-7JxAuspkJ3rBeL_-hUti2Cz9JBQP4GncR3F_WisYD3JE1SYA58W16NzEws2zxQalIe8Q5Fzmze64hTL9DPd2NNQ7NgZS0ekEZL8yL9j0Vje_nWRzvJn-92?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 1: Codi PDB de la nostre proteïna_

L'estructura tridimensional de la _Xylose Isomerase_ està disponible a la base de dades del **Protein Data Bank** amb el codi _1MNZ_. Aquesta estructura proporciona informació sobre els elements estructurals de la proteïna, incloent les seves estructures secundàries (hèlix alfa, fulles beta) i les interaccions que estabilitzen la seva conformació, amb el qual podrem observar la seva estructura amb el programa _ChimeraX_.

### Funció de la proteïna
La _Xylose Isomerase_ (XI) és una enzim que catalitza la interconversió entre dos monosacàrids:
-   **D-xilosa → D-xilulosa**
-   També pot convertir **D-glucosa → D-fructosa** (amb menor afinitat per la glucosa).
    
Aquesta reacció és crucial en el metabolisme de la pentosa fosfat i en la degradació dels sucres, ja que permet a bacteris i fongs utilitzar la xilosa, un sucre de cinc carbonis present a l'hemicel·lulosa, una part important de les parets cel·lulars de les plantes. Això resulta vital per organismes com _Streptomyces rubiginosus_, que habiten ambients rics en material vegetal.

#### Aplicacions industrials
La _Xylose Isomerase_ té un paper fonamental en la **producció d'alt-fructose corn syrup (HFCS)**. Aquesta proteïna s'utilitza per convertir **D-glucosa en D-fructosa** durant el procés industrial de fabricació del xarop de blat de moro d'alta fructosa, un edulcorant àmpliament emprat en begudes, aliments processats i altres productes.

A més, per funcionar correctament, la XI necessita ions metàl·lics, com **Mg²⁺** o **Mn²⁺**, que actuen com a cofactors essencials per a l'activitat enzimàtica.

## Treball amb ChimeraX
### Anàlisis d'estructures secundàries
Podem veure clarament que presenta estructures secundàries comunes, com ara hèlix α, llaços i làmines β. 3475 atoms, 3131 bonds, 13 pseudobonds, 803 residues, 2 models selected

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLhTQje66lWnG6pVfV9vt1CAIuALqajhTGUcRVKiUYFqGwFAfZhHg39sc7yM1ISVlYlLt88O75GW_VL7D88vLq9yQe2z5AWBLZV5-Emwh1gU9JWfpNtL1rE-7mkbwNX3tfCFgw?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 2: Estructura de la proteïna amb ChimeraX_

#### Hèlix alfa
Les hèlixs α apareixen en forma de cintes helicoïdals verdes. Es formen per la creació de ponts d'hidrogen interns entre el grup amida (-NH) d'un residu d'aminoàcid i el grup carbonil (-C=O) d'un altre residu situat 4 posicions més endavant en la cadena polipeptídica. Aquests ponts d'hidrogen estabilitzen l'estructura enrotllada característica.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJ_qZNqynhsdFVE9up8-O19bntVWB2Pv2wKVXRZbYD193gh91CHrqHl9vSO839vyC0QcJtUXcqBBPf9ZRB5N9vrDHO8leYHrCirei7qX0xObgw5TTe4dALW1ImhhXSG2-KJFkT4A?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 3: Estructura de la proteïna, on observem les helix alfa en verd_

#### Full beta
Les fulles β, representades en blau, estan estabilitzades per ponts d'hidrogen entre cadenes adjacents, formant patrons paral·lels o antiparal·lels. Aquestes fulles tenen una estructura més estirada en comparació amb les hèlixs.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeojHd9K8-w0oYfZV6GGB-UZIQJjLpw-Z1k3dH9oSV1sa0csYGZWHdOlRy0DL-2ceIJDiR1tJItkoIxnJ02YdVTcBoGZoj26mmNTFukN9o9WqztRfubzKiYqbtKH3Te1CSIrx5g?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 4: Estructura de la proteïna, on la part en blau representen les fulles beta_

#### Llaços o girs
Els llaços o girs, destacats en vermell, són les parts més corbes i desorganitzades que connecten les hèlixs α i les fulles β. No tenen una estructura repetitiva regular i actuen com a connexions flexibles entre altres estructures secundàries.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXetZwoV9x73Pc_2Wr_OOnHA8Kj4gKVOKEove3EOw__1UF-uEn-wGgjhRnDbiI-GoN_B1JBvyFqvuWroIjboMKeMeQDS9XjgRB1MDnFwANWEcShmK4bRqjQQvS77lY_t7woyMmCn?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 5: Estructura de la proteïna, on en vermell podem obersevar els llaços (o girs)_

### Interaccions dins les estructures secundàries

- Els **ponts d'hidrogen** són les interaccions principals dins les estructures secundàries. A les hèlixs α, els ponts d'hidrogen interns mantenen la cadena enrotllada. En les fulles β (si n'hi hagués), els ponts d'hidrogen s'establirien entre cadenes β paral·leles o antiparal·leles.
- A més dels ponts d'hidrogen, altres forces com les **interaccions hidrofòbiques** poden ajudar a estabilitzar aquestes estructures secundàries, especialment quan els residus hidrofòbics queden enterrats al nucli de la proteïna.

| **Interaccions hidrofòbiques** | Estructura |
|--|--|
| Aldehid |  atoms, 1 bond, 1 residue, 1 model selected |
| Amida | 1221 atoms, 814 bonds, 387 residues, 1 model selected |
| Aromatic ring | 296 atoms, 302 bonds, 48 residues, 1 model selected
| Carbonil | 816 atoms, 408 bonds, 387 residues, 1 model selected
| Carboxylate | 195 atoms, 130 bonds, 65 residues, 1 model selected
| Hidroxil | 41 atoms, 38 residues, 1 model selected
| Metil | 211 atoms, 140 residues, 1 model selected
| Thioeter | 7 atoms, 7 residues, 1 model selected
| Tiol | 1 atom, 1 residue, 1 model selected

### Anàlisis d'estructures supersecundàries
La _xylose isomerase_ presenta diversos motius d'estructura supersecundària relacionats amb el seu plec TIM barrel, que inclou interaccions importants com ponts d'hidrogen i interaccions de van der Waals. Aquestes interaccions estabilitzen la seva forma terciària i permeten que la proteïna compleixi la seva funció d'isomeritzar la xilosa. Els visualitzadors moleculars són eines excel·lents per explorar aquestes interaccions detalladament.

Estructures supersecundàries:
- **Motiu de la “cua de corb” (Greek key motif)**: Aquesta és una estructura comuna en proteïnes amb plecs β. Consisteix en una sèrie de làmines β que es lliguen entre elles en un patró determinat.
- **Motiu de l'α-helix β-sheet (helix-turn-helix)**: Les helix alfa i fulles beta sovint es combinen en estructures d'aquesta classe, en què les helix envolten els plecs β en patrons característics.
    
**Ponts hidrogen**: Els grups NH de les helix alfa poden formar ponts d'hidrogen amb els grups carbonils de les llaminetes beta. Aquestes interaccions són fonamentals per mantenir la coherència estructural de la proteïna, especialment en el plegament de la forma TIM barrel.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2jP_Hv7jXN5MPBkB3lAjwPvkIY0LBBAwmLoiL7JmIbgvIREcy8taLRB-voWCR7L5iEia9Fc3FARRCz3hZ8yb_Cc6sakg0yf6Hm2CL-dU8I2tbf2iRf6Fso_F1dJnNN6r1ivSuYw?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 6: Observem les interaccions entre el ponts d'hidrogen (343 ponts H)_

**Interaccions Van der Waals**: Els residus hidrofòbics de les helixs alfa i les llaminetes beta poden interactuar mitjançant forces de van der Waals.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfH_frvrjqDE05xEH8ba7ESmhEqYI-DrKEUk1okSxcTaXcZ2L06VR0bwtcx43wcTK14H1rmxMHx0T32hWl0qT9xggOD6vlH33gtIBXDi3CQCVnINlXT-_Yu_uwp2b1Nh4JToDtH?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 7: Observem les interaccions Van der Waals (3150)_

### Estructura terciària (Plegament i SCOP) i estructura quaternària
L'estructura terciària de la  _Xylose Isomerase_  (XI) de  _Streptomyces rubiginosus_  es caracteritza per un plegament de tipus barril α/β, conegut com a barril TIM (Triosephosphate Isomerase), que és comú en moltes isomerases de sucres. Aquesta estructura consisteix en vuit hèlixs α i vuit fulles β que s'alternen i es disposen formant un barril cilíndric tancat.

Pel que fa a la jerarquia SCOP (Structural Classification of Proteins), la  _Xylose Isomerase_  es classifica de la següent manera:

-   **Classe**: Proteïnes α/β
-   **Plegament**: Barril TIM (c.1)
-   **Superfamília**: Xylose isomerase-like (c.1.15)
-   **Família**: Xylose isomerase (c.1.15.3)

Aquesta classificació reflecteix l'estructura de barril α/β tancat de la proteïna, que és típica de les isomerases de sucres.

![Catalytic mechanism of xylose isomerase. Top: ring opening, middle:... | Download Scientific Diagram](https://www.researchgate.net/profile/Julianna_Olah/publication/263513933/figure/download/fig21/AS%3A357977258250247%401462359837212/Catalytic-mechanism-of-xylose-isomerase-Top-ring-opening-middle-substrate.png)
_Figura 8: Representa l’estructura terciària d’una proteïna amb un plegament de tipus TIM barrel (barril alfa/beta)_

**CODI**: ([c.1.15](https://scop.berkeley.edu/sunid=51665).[3](https://scop.berkeley.edu/sunid=51665))
**Description**: Atomic structure of Glucose isomerase
**Class**: Alpha and beta proteins (a/b)
**Superfamily**: Xylose isomera
**Plegament**: TIM beta/alpha-barrel (barrel:plegament estructural en proteïnes. Es caracteritza per una estructura alternada de vuit hèlixs α i vuit fulles βdisposades en forma de barril cilíndric.)
**Familia**: Xylose isomerase

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdCTQxlEpNyTZ8SaiGo4WaOv4Ff2p64IuspM3epzNd5ncbhCoYBghwDreCGt4G_hBhkGcOUB_RCfzadQ7vNjMfoObaOK1x5bcGjSTRBDYI5CkH-4km85ao3jB3bED-I_lXq16oZaw?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 9: Imatge de la **[base de dades SCOP](https://scop.berkeley.edu/)** sobre la nostre proteïna_

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeMZQBxX6H08Yrs0qNSiHI_5ZWESBE_-AMPFK_opU9BDBhIIh1wxb9uGDe_QrV_171PwFAFQ17_tgbyJM4p-ndbB4inNZEPaWxQy94_cAhmAGmmOGnOLtlkXZEakqxFn8pwzL3s?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 10: Figura de la nostre proteina a SCOP_

En quant a l'estructura quaternària, la  _Xylose Isomerase_  forma un homotetràmer, és a dir, està composta per quatre subunitats idèntiques que s'uneixen per formar la proteïna funcional. Aquesta organització tetramèrica és comuna en moltes isomerases de sucres i és essencial per a la seva activitat enzimàtica.

En resum, la  _Xylose Isomerase_ presenta una estructura terciària de tipus barril α/β (barril TIM) i una estructura quaternària tetramèrica, característiques que són fonamentals per a la seva funció en la interconversió de D-xilosa i D-xilulosa.

## Funció de la proteïna
La xilosa isomerasa és un enzim que catalitza la interconversió entre la D-xilosa i la D-xilulosa, un pas clau en la via de metabolisme dels monosacàrids. Aquesta reacció és fonamental per convertir la xilosa en altres carbohidrats utilitzables per l'organisme, contribuint així a la producció d'energia i altres processos metabòlics.

### Centre actiu i residus rellevants
La xilosa isomerasa té un centre actiu on es produeix la reacció d'isomerització, facilitada per residus clau com:

-   **Histidina**: Actua com a base o àcid, promovent la transferència de protons durant el procés.
-   **Glutamat**: Estabilitza l'intermediari enolè i participa en les reaccions de protonació.
-   **Serina o Cisteïna**: Poden contribuir a la formació d'enllaços amb el substrat i estabilitzar l'estructura de l'enzim.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf69mgGnyz9tjPyiTLrZpHYqL9bucb-tew2xuiZDddKmv4EE7vx-OVYelwtoBjcxd7J-4cOgFRCgFeHT6uq5c4ei_7wxfEvAijN1ksGWHHCVJ1FkhqUGrAGal6WurMZZJT4G1ut?key=IIFDaqnBsluiSPqK4L2VHfZA)
_Figura 11: Observem on està el centre actiu dels lligands_

A més, la proteïna interacciona amb quatre lligands importants:

-   **2-AMINO-2-HYDROXYMETHYL-PROPANE-1,3-DIOL** (C4 H12 N O3): Actua com a estabilitzador.
-   **(4R)-2-METHYLPENTANE-2,4-DIOL** (C6 H14 O2): Funciona com a inhibidor.
-   **Ió calci (+2)**: Actua com a coenzim.
-   **Ió magnesi (+2)**: També participa com a coenzim.
 
Els ions metàl·lics, especialment el calci i el magnesi, són essencials per a l'activació de l'enzim i per mantenir l'estructura correcta del centre actiu.

### Funció biològica i mecanisme d'acció 
El mecanisme d'acció de la xilosa isomerasa implica la conversió de **D-xilosa** a **D-xilulosa** mitjançant un procés d'isomerització. Aquest procés segueix els passos següents:

1.  **Unió del substrat**: La D-xilosa s'uneix al centre actiu.
2.  **Formació de l'intermediari enolè**: L'enzim elimina un protó de la D-xilosa, creant un intermediari que conté un doble enllaç entre un carboni i un oxigen (enolè).
3.  **Reorganització molecular**: L'intermediari es reorganitza per formar la D-xilulosa.
4.  **Alliberament del producte**: La D-xilulosa és alliberada, i l'enzim queda llest per començar un altre cicle catalític.

Els ions de **calci** i **magnesi** tenen un paper crucial en aquest procés, ja que estabilitzen l'estat de transició i faciliten la conversió del substrat.

### Relació seqüència-estructura-funció
La seqüència d'aminoàcids de la xilosa isomerasa determina la seva estructura tridimensional, la qual influeix directament en la seva funció biològica. Els aspectes més rellevants són:

-   **Llocs actius**: Regió específica on es produeix la interacció amb el substrat.
-   **Dobrades i motifs estructurals**: Inclou estructures secundàries com el **tim barrel**, que proporciona estabilitat i suporta la configuració del centre actiu.
-   **Flexibilitat estructural**: Permet el moviment dels residus clau durant l'activitat enzimàtica.
    

Les **variants proteiques** poden resultar de mutacions que afecten la seqüència d'aminoàcids, produint canvis en l'estructura i la funció de l'enzim. Aquestes mutacions poden:

-   **Disminuir l'activitat enzimàtica** si alteren els residus del centre actiu.
-   **Afectar la selectivitat del substrat** si introdueixen canvis a les regions d'unió.   
-   **Modificar la capacitat funcional** en condicions fisiològiques si interfereixen amb les interaccions amb cofactors com el calci i el magnesi.
    
En resum, la funció de la xilosa isomerasa depèn directament de la seva estructura, la qual està determinada per la seqüència d'aminoàcids i modulada per la presència de cofactors metàl·lics i lligands específics.

## Bibliografía
[PubMed](https://pubmed.ncbi.nlm.nih.gov/6699015/)
[Articles Wikiwand](https://www.wikiwand.com/es/articles/Xilosa_isomerasa)
[Imatge Ylose-isomerase](https://www.researchgate.net/figure/ylose-isomerase-from-B-cenocepacia-predicted-structure-a-Overall-structure-of-XylA-Bc_fig10_333369688)
[Xilosa_isomerasa](https://es.wikipedia.org/wiki/Xilosa_isomerasa)
[Active site](https://www.researchgate.net/figure/ylose-isomerase-from-B-cenocepacia-predicted-structure-a-Overall-structure-of-XylA-Bc_fig10_333369688)
