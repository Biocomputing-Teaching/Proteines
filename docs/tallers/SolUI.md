---
layout: default
title: Assignment for Systems Biology course; molecular level; University of Iceland 02/2023
author: Jordi Villà-Freixa
permalink: /LVF601MSol/
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


<h1> How a drug for COVID-19 is designed?</h1>

- [Assignment anwers](#assignment-anwers)
  - [1) Virus-cell interactions](#1-virus-cell-interactions)
  - [2) Variability in the SARS-CoV-2 genome](#2-variability-in-the-sars-cov-2-genome)
  - [3) Rational Drug Discovery](#3-rational-drug-discovery)
    - [Ligand](#ligand)
    - [Complex](#complex)
- [References](#references)


# Assignment anwers

## 1) Virus-cell interactions

1. Get the human SARS-CoV-2 virus Spike protein Uniprot code.

[P0DTC2](https://www.uniprot.org/uniprotkb/P0DTC2/entry)

2. Identify the name of the cell surface protein that the SARS-CoV-2 Spike protein interacts with.

In the section "interactions, we can see how most of the important ones (with more evidence from experiments, at least) refer to the Spike-ACE2 interaction.

![](../figures/spikeint.png)

To deep into this, we can access the IntAct database through the [link in the right of the row]( https://www.ebi.ac.uk/intact/search?query=(id:EBI-25474821%20AND%20id:EBI-7730807)#interactor) with more experiments associated.


3. Look in the PDB database for a structure of the complex between Spike protein and the above cell membrane protein. Add an image of the PDB obtained with Chimera.

Again, many routes lead to the same place. For example, in the interactions section we have identified an interaction with 254 experiments (see image above). If we click in the link in the right of the row pointing to the `INTACT` database, we reach this page, where we can filtrate by `Interaction Method / x-ray diffraction`:

|![](./figures/intactSpikeACE2.png)|
|:--:|
|`INTACT` page for the interaction between Spkie and ACE2, filtered by X-ray diffraction|

If we then click on the `Interaction AC / EBI-25475360` which, at the time of writing this document, is the first document linked in the table (see figure), we reach this information, where, in the right hand side, points us to the PDB code [6M0J](https://www.rcsb.org/structure/6M0J).

|![](./figures/EBISpikeACE2.png)|
|:--:|
|`EBI` page for the interaction between Spike and ACE2, filtered by X-ray diffraction|

<p>
<div id="myViewer">
<pdbe-molstar id="pdbeMolstarComponent" molecule-id="6m0j" hide-controls="false"></pdbe-molstar>
</div>
</p>
<br> 

4. Look in the PDB database for a structure of the complex between Spike protein and antibodies. Add an image of the PDB obtained with Chimera.

We use here a simpler trick. Simply go to the web of the PDB database that we reached before and write `Spike antibody` in the search box. For example, we can check the PDB file [6XDG](https://www.rcsb.org/structure/6XDG), that contains the complex of SARS-CoV-2 receptor binding domain with the Fab fragments of two neutralizing antibodies. I show here the PDB file in an interactive way:

<p>
<div id="myViewer">
<pdbe-molstar id="pdbeMolstarComponent" molecule-id="6xdg" hide-controls="false"></pdbe-molstar>
</div>
</p>
<br> 

In order to get it into Chimera, I open the program in the laptop and access the code through `File / fetch by ID`, inputting 6XDG in the corresponding box. 

|![](./figures/6XDGsnapshot.png)|
|:--:|
|Chimera snapshot of the structure of [6XDG](https://www.rcsb.org/structure/6XDG). The figure has been obtained by, first selecting `Presets / Publication 1` and then activating `Favorites / Command Line` and typing the `rainbow chain` parameter in the command line box|

|![](./figures/6XDGseqs.png)|
|:--:|
|Sequences of the different chains in the [6XDG](https://www.rcsb.org/structure/6XDG) PDB code, corresponding to a fragment of the spike protein (chain E) and the light (chain  A and chain D -equal sequence, not shown) and heavy (chain B and chain C -equal sequence, not shown) chains of the REGN10933 neutralizing antibody.|

5. Identify the residues that are in the interface regions, using the `select zone` tool in Chimera. Are they many? What do you think a good strategy for preventing SARS-CoV-2 to interact with the cell could be? Are the regions of interaction the same in the complexes you located in the above steps?

For example, in the case of [6M0J](https://www.rcsb.org/structure/6M0J), we can first select a residue that is in the region by CONTRL+Left mouse button, and then find all the residues that are in that partiucular zone by `Select / zone` and follow the steps:

|![](./figures/6M0Jinteraction.png)|
|:--:|
|selected interaction region between ACE2 (blue) and Spike (orange).|

If you want to go further and explore the interface regions as a whole, you can use [ChimeraX](https://www.cgl.ucsf.edu/chimerax/), which I leave to you as an exercise. 

The answer to the question if the interface interactions aree the same is NO, in general. This implies that the antobodies are not targetting speciffically the same region in the spike protein as ACE2 does.

## 2) Variability in the SARS-CoV-2 genome

Go to the SARS-CoV-2 genome variation site at Stanford University: [COVDB](https://covdb.stanford.edu/variants/omicron_ba_1_3/). Look for the page devoted to the omicron variants:

6. Is the variability homogeneous? why do you think it is like this in terms of viral-host interaction evolution?

Taking for example the case of the [Omicron variant BA.1](https://covdb.stanford.edu/variants/omicron_ba_1_3/), we can see that the Spike protein presents astronger variation than the rest of the virus genom. In particular, much more that proteins that are responsible for the replication machinery.

|![](./figures/OmicronBA1variation.png)|
|:--:|
|Detail on the variation of the SARS-CoV-2 genome, where we can see how the Spike protein (green region) presents a large variability as compared to other regions.|

The virus includes a recognition site (Spike) that can mutate easily because it is exposed and under strong selection pressure. Instead, other proteins in the genome are less prone to mutations, because they are pieces of the complex replication machinery, so they are less easy to be replaced or modified.

7. Check in particular the genomic region for 3CLpro. Can you give a rough measure of the percentage of variation of Spike and 3CLpro?

Folowing with the [Omicron variant BA.1](https://covdb.stanford.edu/variants/omicron_ba_1_3/) we can see that there a single aminoacid change among around 333 residues (approx 1000 base pairs, looking at the figure above). Instead, as a rough estimation, the Spike protein presents 34 in around 400 resudes (1273 base pairs) with respect to the Wuhan sequence. So the different in variability is huge among the two virus proteins.


## 3) Rational Drug Discovery

### Ligand

8. Go to the [DRUGBANK](https://go.drugbank.com/) web site, and check for the Nirmatrelvir file. Download the structure in the PDB format and visualize it in Chimera. Paste it here Does it look right to you? What is missing?

The molecule is shown flat in Chimera, which comes from the fact that the [PDB file in Drugbank](https://go.drugbank.com/structures/small_molecule_drugs/DB16691.pdb) is directly obtained from its SMILES code, without taking into accound the 3D structure. Using OpenBabel, one can modify this by adding the correct 3D structure, including hydrogens.

We can fix this by going to any version of OpenBabel. For example, [its online implementation](http://www.cheminfo.org/Chemistry/Cheminformatics/FormatConverter/index.html).



9.  Try fixing the structure using [openbabel](http://www.cheminfo.org/Chemistry/Cheminformatics/FormatConverter/index.html). Paste the new structure as seen in Chimera.
10.  Can you identify the different functional groups. Discover the protein target of this molecule. Which of them is relevant for the interaction with the target? 

### Complex

11. Can you find a structure in the PDB database that contains Nirmatrelivir with its target?
12. The target is based on a conserved catalytic dyad, Can you recognize it using Chimera? 
13. Check the variability of the target and show in the structure where those variants at the level of aminoacids appear. Are they relevant for the function?
14. What is the mode of interaction between ligand and target? Can you elaborate on why would you consider it strong and specific? How can this be related to the activity of the protein?
15. Can you find information about the way Nirmatrelvir was designed? In particular, what are its precursors?

# References

* You can find interesting material on COVID19 structural biology at the web of the PDB: [COVID-19/SARS-CoV-2 Resources](https://www.rcsb.org/news/feature/5e74d55d2d410731e9944f52).
* Greasley, S. E.; Noell, S.; Plotnikova, O.; Ferre, R.; Liu, W.; Bolanos, B.; Fennell, K.; Nicki, J.; Craig, T.; Zhu, Y.; Stewart, A. E.; Steppan, C. M. [Structural Basis for the in Vitro Efficacy of Nirmatrelvir against SARS-CoV-2 Variants](https://doi.org/10.1016/j.jbc.2022.101972). Journal of Biological Chemistry 2022, 298 (6), 101972.
* Ryan P. Joyce, Vivian W. Hu & Jun Wang [The history, mechanism, and perspectives of nirmatrelvir (PF-07321332): an orally bioavailable main protease inhibitor used in combination with ritonavir to reduce COVID-19-related hospitalizations](https://link.springer.com/article/10.1007/s00044-022-02951-6). Medicinal Chemistry Research 2022; 31, 1637-1646.

&copy; [Jordi Villà Freixa](https://mon.uvic.cat/cbbl/members/) 2023