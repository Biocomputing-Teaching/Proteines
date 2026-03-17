---
title: "QiEP · Pràctica 1 · 2025-2026"
permalink: /QiEP/2025-2026/practica-1/
author: "Química i Enginyeria de Proteïnes"
---

<section class="feature-card">
  <h2>Objectiu de la pràctica</h2>
  <p>L'exercici pretén que us familiaritzeu amb <a href="https://www.cgl.ucsf.edu/chimerax/">ChimeraX</a> i amb els fitxers de la base de dades del <a href="https://www.rcsb.org/">Protein Data Bank (PDB)</a>, així com amb diverses eines de bioinformàtica estructural; podeu provar també d'accedir-hi a través de <a href="https://www.ebi.ac.uk/thornton-srv/databases/pdbsum/">PDBsum</a>. Sobretot, però, cerquem que sigueu capaços d'identificar en l'estructura d'una determinada proteïna aquells elements estructurals que la caracteritzen i que la fan funcional, i establir aquestes relacions estructura-funció.</p>
</section>

<section class="feature-card">
  <h2>Objectius d'aprenentatge</h2>
  <p>Pràctica que treballa l'ús d'eines habituals en bioinformàtica estructural. Objectius:</p>
  <ul>
    <li>Familiaritzar-nos amb eines d'anàlisi i de cerca d'homologia de seqüències proteiques.</li>
    <li>Dominar les representacions gràfiques d'estructures de proteïnes.</li>
    <li>Identificar i interpretar els elements d'estructura secundària, supersecundària i terciària en proteïnes globulars.</li>
    <li>Explorar les regions i característiques que participen en la seva funció.</li>
    <li>Treballar en equip.</li>
    <li>Desenvolupar habilitats digitals en la presentació de resultats.</li>
  </ul>
</section>

<section class="feature-card">
  <h2>Document amb les seqüències a treballar</h2>
  <p>Les seqüències de les proteïnes a treballar, una per grup, són disponibles en format FASTA aquí: <a href="{{ '/files/qiep-2025-2026/proteines-seleccio-2025-2026.fasta' | relative_url }}">proteines-seleccio-2025-2026.fasta</a>.</p>
</section>

<section class="feature-card">
  <h2>Temporització</h2>
  <ul>
    <li><strong>Setmana 7</strong> (16/03/2026-22/03/2026): inici de la pràctica 1.</li>
    <li><strong>Setmana 9</strong> (06/04/2026-12/04/2026): lliurament de la pràctica 1.</li>
  </ul>
</section>

<section class="feature-card">
  <h2>Lliurament</h2>
  <p>El lliurament consisteix en un únic document comprimit (<code>.zip</code>) que ha d'incloure:</p>
  <ul>
    <li>un únic fitxer en format <a href="https://www.markdownguide.org/basic-syntax/">Markdown</a> amb les respostes;</li>
    <li>una carpeta amb les imatges i altres elements que estiguin vinculats al fitxer Markdown.</li>
  </ul>
  <p>Per veure el format general esperat del treball final, podeu consultar les pràctiques del curs passat aquí: <a href="{{ '/QiEP/2024-2025/' | relative_url }}">pràctica 1 del curs 2024-2025</a>.</p>
  <p>Recordeu afegir peus de figura descriptius a les figures que inclogueu i referenciar-les de forma adient des del text. Les figures han de ser, en la seva major part, generades per vosaltres mateixos, en general amb <a href="https://www.cgl.ucsf.edu/chimerax/">ChimeraX</a>, però també usant qualsevol altra eina gràfica que escaigui, com <a href="https://chemaxon.com/products/chemdraw-alternatives/chemsketch-download">ChemSketch</a> per als mecanismes. En el cas que alguna figura s'hagi obtingut d'altres fonts, cal referenciar-la correctament.</p>
  <p>El fitxer Markdown ha de contenir cites de la literatura en el format adient. No s'hi han d'incloure enllaços web a pàgines d'informació general, llevat d'enllaços a bases de dades consultades, si escau. Us recomanem usar <a href="https://www.zotero.org/">Zotero</a> o <a href="https://www.mendeley.com/">Mendeley</a> com a eines de gestió de referències.</p>
</section>

<section class="feature-card">
  <h2>Detalls pràctics</h2>
  <ul>
    <li>Tots els codis i referències que useu han d'estar vinculats a l'enllaç corresponent de la web.</li>
    <li>No useu vincles a la Viquipèdia ni a la Wikipedia. Feu servir només vincles a continguts peer-reviewed o a entrades en bases de dades.</li>
    <li>Si un article no està disponible directament en línia, cerqueu-lo primer a <a href="https://www.uvic.cat/biblioteca/colleccions/ucercatot">UCercaTot</a>, el cercador de la Biblioteca de la UVic-UCC. Si encara no hi teniu accés a text complet, el podeu sol·licitar a través del <a href="https://www.uvic.cat/biblioteca/serveis/prestec-obtencio-documents/servei-obtencio-de-documents">Servei d'Obtenció de Documents</a> de la Universitat.</li>
    <li>ChatGPT pot ser una eina útil per començar un document, però no per acabar-lo professionalment.</li>
  </ul>
</section>

<section class="feature-card">
  <h2>Qüestions a resoldre</h2>
  <p>La pràctica consisteix a respondre les qüestions següents sobre la seqüència problema.</p>

  <h3>1. Sobre la proteïna</h3>
  <ol>
    <li>Cerqueu la seqüència donada a <a href="https://www.uniprot.org/">UniProt</a> i trobeu el nom del gen corresponent. Anoteu el codi UniProt i també la classificació EC.X.X.X.X, en cas que es tracti d'un enzim, segons la base de dades <a href="https://www.brenda-enzymes.org/">BRENDA</a>.</li>
    <li>Cerqueu a la base de dades del <a href="https://www.rcsb.org/">Protein Data Bank</a> si l'estructura de la proteïna és coneguda i, en aquest cas, doneu-ne el codi PDB. Si n'hi ha més d'un, justifiqueu amb quin treballareu a partir d'aquest punt en funció de la resolució de l'experiment i de la cobertura de seqüència. En cas que no trobeu la proteïna al PDB, useu el <a href="https://deepmind.google/technologies/alphafold/alphafold-server/">servidor oficial d'AlphaFold</a> o bé la <a href="https://alphafold.ebi.ac.uk/">AlphaFold Protein Structure Database</a> per trobar una predicció de la seva estructura.</li>
    <li>Expliqueu breument la funció de la proteïna.</li>
  </ol>

  <h3>2. Treball amb ChimeraX</h3>
  <ol>
    <li>Obriu l'estructura del PDB amb el programa <a href="https://www.cgl.ucsf.edu/chimerax/">ChimeraX</a>.</li>
    <li>Detecteu les diferents estructures secundàries de la proteïna i determineu-ne el tipus: fulles, hèlixs, llaços i les seves diferents variants. Mireu de descriure amb un cert detall els diferents tipus d'interaccions que podeu trobar dins aquestes estructures secundàries. Mostreu els ponts d'hidrogen interns d'aquestes estructures secundàries.</li>
    <li>Detecteu, si n'hi ha, motius d'estructura supersecundària. Mostreu les interaccions, ponts d'hidrogen i interaccions de van der Waals, entre els diferents elements que constitueixen aquestes estructures supersecundàries.</li>
    <li>L'estructura terciària de la proteïna, a quin tipus de plegament correspon? Per a l'estudi dels dominis i de la família estructural, useu preferentment <a href="https://www.cathdb.info/">CATH</a> i/o <a href="http://prodata.swmed.edu/ecod">ECOD</a>, perquè són recursos més actius per a classificació de dominis i relacions evolutives. Podeu usar <a href="https://scop.berkeley.edu/">SCOPe</a> com a recurs complementari o de contrast. Anoteu els codis i la jerarquia que obtingueu, i discutiu també l'estructura quaternària si escau.</li>
  </ol>

  <h3>3. Funció de la proteïna</h3>
  <ol>
    <li>Identifiqueu el centre actiu de la proteïna. Quins residus són rellevants, segons la literatura? L'estructura que heu explorat inclou algun substrat o inhibidor? Podeu descriure les interaccions entre els residus del centre actiu i, eventualment, entre aquests residus i el possible substrat o inhibidor, com ara ponts d'hidrogen, interaccions de van der Waals o càrregues?</li>
    <li>Cerqueu informació sobre la funció que fa aquesta proteïna. Si es tracta d'un enzim, podeu mostrar i explicar el mecanisme detallat de la reacció que catalitza.</li>
    <li><strong>Relació seqüència-estructura-funció:</strong> com relacionaríeu l'estructura que heu analitzat amb la funció de la proteïna? Quins elements estructurals participen en aquesta funció? Quins residus, en concret, són claus per a la funció? Cerqueu eventuals variants de la proteïna que tinguin implicacions funcionals i comenteu-ne els efectes a nivell molecular.</li>
  </ol>
</section>

<section class="feature-card">
  <h2>Desenvolupament de la pràctica</h2>
  <ul>
    <li><strong>Feina interna del grup:</strong> cada grup `JC A-L` de la classe, tal com consta a l'aula Moodle, té assignada una proteïna. Inicialment, cada grup treballarà conjuntament el punt 1 de la pràctica.</li>
    <li><strong>Distribució de tasques:</strong> dins de cada grup `JC A-L`, es repartiran els aspectes 2 i 3 de la pràctica segons l'organització que decidiu i d'acord amb les indicacions de l'aula Moodle.</li>
    <li><strong>Posada en comú:</strong> els membres de cada grup `JC A-L` es reuniran de nou per elaborar el document final de la seva proteïna.</li>
  </ul>
</section>

<section class="feature-card">
  <h2>Avaluació de la pràctica</h2>
  <p>La pràctica s'avaluarà fent la mitjana de dues notes:</p>
  <ul>
    <li><strong>Sobre el treball fet al grup JC:</strong> una avaluació de la qualitat del treball realitzat, segons la rúbrica proposada.</li>
    <li><strong>Sobre la comprensió dels diferents treballs presentats:</strong> la mitjana de les notes del test d'elecció múltiple vinculat a la pràctica en l'examen parcial 1 dels diferents membres de cada grup JC.</li>
  </ul>
</section>

<section class="feature-card">
  <h2>Bibliografia</h2>
  <ul>
    <li>Meng EC. et al. UCSF ChimeraX: Tools for structure building and analysis. <em>Protein Sci</em> 2024;33:e4792. <a href="https://doi.org/10.1002/pro.4792">https://doi.org/10.1002/pro.4792</a></li>
    <li>The UniProt Consortium. UniProt: the Universal Protein Knowledgebase in 2025. <em>Nucleic Acids Res</em> 2025;53:D609-D617. <a href="https://doi.org/10.1093/nar/gkae1010">https://doi.org/10.1093/nar/gkae1010</a></li>
    <li>Jeske L. et al. BRENDA, the ELIXIR core data resource in 2021: new developments and updates. <em>Nucleic Acids Res</em> 2021;49:D498-D508. <a href="https://doi.org/10.1093/nar/gkaa1025">https://doi.org/10.1093/nar/gkaa1025</a></li>
    <li>Jumper J. et al. Highly accurate protein structure prediction with AlphaFold. <em>Nature</em> 2021;596:583-589. <a href="https://doi.org/10.1038/s41586-021-03819-2">https://doi.org/10.1038/s41586-021-03819-2</a></li>
    <li>Varadi M. et al. AlphaFold Protein Structure Database in 2024: providing structure coverage for over 214 million protein sequences. <em>Nucleic Acids Res</em> 2024;52:D368-D375. <a href="https://doi.org/10.1093/nar/gkad1011">https://doi.org/10.1093/nar/gkad1011</a></li>
    <li>Waman VP. et al. CATH 2024: CATH-AlphaFlow doubles the number of structures in CATH and reveals nearly 200 new folds. <em>J Mol Biol</em> 2024;436:168551. <a href="https://doi.org/10.1016/j.jmb.2024.168551">https://doi.org/10.1016/j.jmb.2024.168551</a></li>
    <li>Schaeffer RD. et al. ECOD: integrating classifications of protein domains from experimental and predicted structures. <em>Nucleic Acids Res</em> 2025;53:D411-D418. <a href="https://doi.org/10.1093/nar/gkae1029">https://doi.org/10.1093/nar/gkae1029</a></li>
    <li>Fox NK, Brenner SE, Chandonia JM. SCOPe: improvements to the structural classification of proteins: extended database to facilitate variant interpretation and machine learning. <em>Nucleic Acids Res</em> 2022;50:D553-D559. <a href="https://doi.org/10.1093/nar/gkab1054">https://doi.org/10.1093/nar/gkab1054</a></li>
  </ul>
</section>
