---
title: "QiEP · Pràctica 2 · 2025-2026"
permalink: /QiEP/2025-2026/P2/
author: "Química i Enginyeria de Proteïnes"
---

<section class="feature-card">
  <h2>Objectiu de la pràctica</h2>
  <p>En aquesta pràctica preparareu una proposta breu de projecte de recerca en enginyeria de proteïnes. Haureu d'escollir una proteïna, definir quin aspecte de la seva funció voleu millorar i proposar una estratègia experimental o computacional ben justificada per obtenir variants millorades.</p>
  <p>El treball ha de tenir el to i l'estructura d'una proposta curta inspirada en convocatòries competitives com una beca Marie Skłodowska-Curie Actions o una EMBO Long-Term Fellowship: objectiu clar, hipòtesi defensable, metodologia concreta, impacte i cronograma realista.</p>
</section>

<section class="feature-card">
  <h2>Calendari</h2>
  <p>La pràctica 2 es treballarà els dies <strong>15, 19 i 22 de maig de 2026</strong>.</p>
  <p><strong>Lliurament:</strong> divendres <strong>22 de maig de 2026</strong>, en un únic fitxer PDF.</p>
</section>

<section class="feature-card">
  <h2>Tria de la proteïna</h2>
  <p>Podeu continuar treballant amb una de les proteïnes estudiades a la pràctica 1, encara que no sigui necessàriament la que vau treballar al vostre grup. També podeu proposar una altra proteïna que us interessi i que hàgiu estudiat durant el grau, sempre que hi hagi prou informació de seqüència, estructura i funció per construir una proposta sòlida.</p>
  <p>La proteïna escollida ha d'estar identificada amb fonts verificables: codi UniProt, estructura PDB o model AlphaFold quan calgui, funció coneguda, residus o regions funcionals i articles científics rellevants.</p>
</section>

<section class="feature-card">
  <h2>Eines computacionals necessàries</h2>
  <p>Un cop identificada la proteïna i la propietat que voleu millorar, heu de decidir quines eines computacionals necessiteu per obtenir dades preliminars. Aquest pas s'ha de fer al començament de la pràctica, perquè els resultats dels servidors han d'ajudar a formular la hipòtesi, escollir residus o regions candidates i justificar la metodologia.</p>
  <p>El catàleg següent és una <strong>proposta d'eines possibles</strong>. No cal usar-les totes: cada grup ha d'escollir les que cregui adients segons la proteïna, la propietat que vol millorar i el tipus d'evidència que necessita. Com a mínim heu d'utilitzar ChimeraX per analitzar l'estructura i una o més eines computacionals addicionals per justificar les mutacions o la metodologia proposada. Trieu les eines segons la pregunta científica, no per acumular captures de pantalla.</p>
  <div class="card-grid">
    <article class="mini-card">
      <h3><a href="https://www.cgl.ucsf.edu/chimerax/">UCSF ChimeraX</a></h3>
      <p class="muted">Visualització estructural, residus funcionals, interaccions, lligands, interfícies i figures pròpies.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://www.tamarind.bio/tools/temstapro">TemStaPro</a></h3>
      <p class="muted">Predicció de termoestabilitat a partir de la seqüència.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://doi.org/10.3390/ijms24087444">DeepSTABp</a></h3>
      <p class="muted">Predicció de la temperatura de fusió a partir de la seqüència i models de llenguatge de proteïnes.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://doi.org/10.1002/mlf2.12152">GRAPE-WEB</a></h3>
      <p class="muted">Redisseny computacional per proposar i combinar mutacions estabilitzants.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://loschmidt.chemi.muni.cz/fireprotweb/">FireProt 2.0</a></h3>
      <p class="muted">Disseny de proteïnes termoestables integrant estructura, seqüència, consens i reconstrucció ancestral.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://doi.org/10.1093/bioinformatics/btac073">Thermometer</a></h3>
      <p class="muted">Estimació d'estabilitat tèrmica des d'una estructura PDB mitjançant xarxes d'interacció entre residus.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://biolm.ai/models/thermompnn/">ThermoMPNN</a></h3>
      <p class="muted">Predicció de l'efecte de mutacions puntuals sobre l'estabilitat a partir de l'estructura.</p>
    </article>
    <article class="mini-card">
      <h3><a href="http://FuncLib.weizmann.ac.il">FuncLib</a></h3>
      <p class="muted">Redisseny de centres actius i variants múltiples combinant conservació i càlculs energètics.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://loschmidt.chemi.muni.cz/caverweb">Caver Web</a></h3>
      <p class="muted">Anàlisi de túnels, trajectòries i perfils d'energia per a l'accés de lligands o substrats.</p>
    </article>
    <article class="mini-card">
      <h3><a href="http://bioinfo.dcc.ufmg.br/napoli">nAPOLI</a></h3>
      <p class="muted">Anàlisi de xarxes d'interaccions proteïna-lligand i residus de contacte conservats.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://loschmidt.chemi.muni.cz/soluprot">SoluProt</a></h3>
      <p class="muted">Predicció de solubilitat a partir de la seqüència.</p>
    </article>
    <article class="mini-card">
      <h3><a href="http://biocomp.chem.uw.edu.pl/A3D2">Aggrescan3D 2.0</a></h3>
      <p class="muted">Predicció d'agregació i suggeriments de mutació per millorar solubilitat en context estructural.</p>
    </article>
    <article class="mini-card">
      <h3><a href="http://biosig.unimelb.edu.au/dynamut2">DynaMut2</a></h3>
      <p class="muted">Estimació de canvis d'estabilitat i flexibilitat causats per mutacions puntuals.</p>
    </article>
    <article class="mini-card">
      <h3><a href="http://biocomp.chem.uw.edu.pl/CABSflex2">CABS-flex 2.0</a></h3>
      <p class="muted">Avaluació ràpida de flexibilitat estructural i fluctuacions conformacionals.</p>
    </article>
    <article class="mini-card">
      <h3><a href="http://allosigma.bii.a-star.edu.sg">AlloSigMA 2</a></h3>
      <p class="muted">Estimació d'efectes al·lostèrics de mutacions o unió de lligands.</p>
    </article>
    <article class="mini-card">
      <h3><a href="https://loschmidt.chemi.muni.cz/fireprotasr">FireProtASR</a></h3>
      <p class="muted">Reconstrucció de seqüències ancestrals per explorar variants més estables o promíscues.</p>
    </article>
  </div>
  <p>També podeu usar altres servidors o programes especialitzats si els justifiqueu amb una referència adequada i expliqueu què aporten a la decisió de disseny.</p>
</section>

<section class="feature-card">
  <h2>Què heu de millorar?</h2>
  <p>La proposta ha de perseguir una millora concreta i mesurable. Alguns objectius possibles són:</p>
  <ul>
    <li>augmentar l'estabilitat global o la termoestabilitat;</li>
    <li>millorar la reactivitat o l'eficiència catalítica d'un enzim;</li>
    <li>modificar l'especificitat pel substrat, lligand o proteïna interactora;</li>
    <li>canviar la selectivitat quiral o l'acceptació d'enantiòmers;</li>
    <li>modular una interacció proteïna-proteïna o proteïna-lligand;</li>
    <li>reduir agregació, millorar solubilitat o facilitar expressió;</li>
    <li>dissenyar un biosensor, interruptor o variant regulable basada en una proteïna existent.</li>
  </ul>
  <p>No n'hi ha prou amb dir que una mutació "millorarà" la proteïna: cal explicar per què aquelles posicions són candidates i quines dades permetrien validar l'efecte.</p>
</section>

<section class="feature-card">
  <h2>Tècniques que podeu combinar</h2>
  <p>La proposta ha d'estar basada en el material del curs. Les estratègies següents són especialment pertinents:</p>
  <ul>
    <li><strong>Disseny racional:</strong> selecció de posicions a partir d'estructura, centre actiu, cavitat, túnels, interfícies, xarxes d'interacció o comparació amb homòlegs.</li>
    <li><strong>Mutagènesi dirigida:</strong> canvis puntuals justificats per una hipòtesi estructural o funcional.</li>
    <li><strong>Mutagènesi de saturació:</strong> exploració d'una o diverses posicions quan hi ha incertesa sobre quin aminoàcid és òptim.</li>
    <li><strong>Mutagènesi aleatòria i evolució dirigida:</strong> generació de biblioteques, cribatge o selecció, i rondes iteratives d'acumulació de variants beneficioses.</li>
    <li><strong>Recombinació i cassettes de DNA:</strong> combinació de regions o motius quan hi ha famílies proteiques comparables.</li>
    <li><strong>Disseny basat en consens o reconstrucció ancestral:</strong> ús d'informació evolutiva per estabilitzar una proteïna o recuperar propietats robustes.</li>
    <li><strong>Disseny de novo o template-based:</strong> proposta de nous mòduls, interaccions o sensors a partir d'estructures i bastides conegudes.</li>
    <li><strong>Redisseny computacional d'enzims:</strong> priorització de mutacions per estabilitat, especificitat, túnels d'accés, solubilitat, dinàmica o interaccions amb lligands.</li>
  </ul>
</section>

<section class="feature-card">
  <h2>Sessions de treball</h2>
  <p>La pràctica es treballarà els dies 15, 19 i 22 de maig. Es recomana organitzar-los així:</p>
  <ol>
    <li><strong>15 de maig:</strong> començar la cerca i selecció de la proteïna. Durant aquesta primera sessió heu d'explorar possibles proteïnes, decidir quina propietat voldríeu millorar, recuperar seqüència i estructura, identificar quines eines computacionals us poden ser útils i començar els primers càlculs o consultes per veure si la hipòtesi inicial és viable.</li>
    <li><strong>19 de maig:</strong> completar la cerca bibliogràfica, executar i interpretar els càlculs computacionals, refinar la hipòtesi, seleccionar les variants o biblioteques candidates i preparar les figures i dades preliminars que sustentaran la proposta.</li>
    <li><strong>22 de maig:</strong> rematar el treball i fer el lliurament. Aquesta sessió s'ha de dedicar a tancar l'argument, acabar d'integrar els resultats preliminars, revisar cites i figures, completar impacte i cronograma, i lliurar el PDF final aquell mateix dia.</li>
  </ol>
  <p>El 22 de maig no és el dia per començar a decidir la proteïna o la hipòtesi principal. Hi heu d'arribar amb la proteïna ja escollida, una pregunta concreta, resultats computacionals preliminars i una primera proposta de variants o estratègies candidates, perquè aquell dia el treball s'ha de tancar i lliurar.</p>
</section>

<section class="feature-card">
  <h2>Estructura del PDF</h2>
  <p>El lliurament del 22 de maig és un únic PDF de 5 pàgines com a màxim, sense comptar només els annexos si el professor els autoritza explícitament. El document ha d'incloure una proposta de projecte i també el material preliminar que la sustenta.</p>
  <ul>
    <li><strong>Títol i resum breu:</strong> proteïna, propietat a millorar i estratègia principal.</li>
    <li><strong>Introducció:</strong> context biològic o biotecnològic, estat de l'art i justificació de l'objectiu, amb informació preliminar extreta d'articles científics ben citats.</li>
    <li><strong>Dades preliminars:</strong> resum de la informació obtinguda de la literatura i dels vostres càlculs amb ChimeraX, TemStaPro, DeepSTABp, GRAPE-WEB, FireProt 2.0, Thermometer, ThermoMPNN o altres eines justificades.</li>
    <li><strong>Hipòtesi i objectius:</strong> què espereu millorar i com ho mesurareu.</li>
    <li><strong>Metodologia:</strong> selecció de mutacions o biblioteques, eines computacionals, estratègia experimental si escau, controls i criteris de validació. Cal explicar quins resultats preliminars justifiquen cada decisió.</li>
    <li><strong>Impacte:</strong> per què la variant o el coneixement obtingut seria rellevant.</li>
    <li><strong>Cronograma:</strong> pla de treball esquemàtic per fases, amb fites i resultats esperats.</li>
    <li><strong>Referències:</strong> articles i recursos tècnics citats correctament dins el text.</li>
  </ul>
</section>

<section class="feature-card">
  <h2>Criteris de qualitat</h2>
  <ul>
    <li>La proposta ha de connectar seqüència, estructura, funció i tècnica d'enginyeria.</li>
    <li>Les mutacions o biblioteques han d'estar justificades amb dades, no només amb intuïció.</li>
    <li>Les figures han de ser pròpies quan sigui possible i han d'ajudar a defensar la proposta.</li>
    <li>Les eines computacionals han d'aportar una decisió concreta: seleccionar posicions, comparar variants, descartar opcions o definir un experiment. Els resultats obtinguts s'han d'incloure de manera resumida al PDF.</li>
    <li>Les referències han de ser articles científics, revisions o documentació tècnica especialitzada. No useu pàgines generalistes com a font principal.</li>
    <li>El cronograma ha de ser coherent amb una proposta de recerca curta i ha d'incloure riscos o alternatives si les primeres variants no funcionen.</li>
  </ul>
</section>

<section class="feature-card">
  <h2>Avaluació</h2>
  <p>La pràctica s'avaluarà amb una rúbrica específica de la pràctica 2. Els blocs principals són: definició de la pregunta i context, anàlisi de la proteïna, justificació de l'estratègia d'enginyeria, metodologia i validació, impacte i cronograma, i qualitat del document i de les referències.</p>
  <p>La guia general sobre com escriure una bona memòria, gestionar les referències i preparar figures és disponible a <a href="{{ '/QiEP/guia-memories/' | relative_url }}">la pàgina general de QiEP</a>. Els documents de suport i la bibliografia comuna del curs són disponibles a <a href="{{ '/QiEP/2025-2026/' | relative_url }}">la pàgina del curs 2025-2026</a>.</p>
</section>
