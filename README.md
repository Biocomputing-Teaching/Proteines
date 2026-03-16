# Proteïnes

Web docent sobre l'estudi de la seqüència, l'estructura i la funció de les proteïnes. El lloc queda organitzat en dos blocs principals:

- Tallers de bioinformàtica estructural.
- Assignatura de Química i Enginyeria de Proteïnes (QiEP) de la FCTE al Grau en Biotecnologia de la UVic-UCC.

La font del lloc Jekyll es troba a `docs/`. La configuració del projecte es manté a l'arrel del repositori.

## Enllaços per compartir

- Web pública: <https://biocomputing-teaching.github.io/Proteines/>
- Portada local habitual: <http://127.0.0.1:4000/Proteines/>
- QiEP: <https://biocomputing-teaching.github.io/Proteines/QiEP/>
- Tallers: <https://biocomputing-teaching.github.io/Proteines/tallers/>

## Requisits locals

- Ruby 3.1 o compatible
- Bundler

Si cal instal·lar dependències:

```bash
bundle install
```

## Executar Jekyll en local

Per reproduir la mateixa base URL que GitHub Pages usa per aquest repositori de projecte:

```bash
bundle exec jekyll serve --livereload --baseurl "/Proteines"
```

La web quedarà disponible a:

- <http://127.0.0.1:4000/Proteines/>

Si es vol servir sense `baseurl` per fer proves puntuals de contingut:

```bash
bundle exec jekyll serve --livereload --baseurl ""
```

## Comprovar la build

Abans de fer `git push`, convé verificar que el lloc compila correctament:

```bash
bundle exec jekyll build --trace --baseurl "/Proteines"
```

La sortida es genera a `_site/`.

## GitHub Pages

El desplegament es fa amb GitHub Actions a través de [`.github/workflows/jekyll.yml`](./.github/workflows/jekyll.yml).

Flux recomanat:

```bash
git add .
git commit -m "Reorganitza la web de Proteïnes"
git push origin main
```

Després del `push`:

1. GitHub executa el workflow de Jekyll.
2. El workflow construeix el lloc a partir de `docs/`.
3. GitHub Pages publica la web a `https://biocomputing-teaching.github.io/Proteines/`.

## Notes de manteniment

- No s'ha de versionar `_site/`.
- GitHub Pages és sensible a majúscules i minúscules en noms de fitxer i carpetes.
- Hi ha materials antics i heterogenis; la navegació comuna s'afegeix via layout i dades Jekyll per no haver de reescriure cada treball individual.
