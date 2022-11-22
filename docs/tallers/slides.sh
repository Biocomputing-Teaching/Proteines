#!/bin/bash -x
# no acaba de funcionar bé. Cal treballar una mica més les opcions
# de pandoc ja que la visualització al navegador és imperfecta
# mentrestant treballo directament el document Tallers.md sense 
# transformar-lo en diapos
pandoc -t dzslides Tallers.md -o tallersBatx.html --embed-resources --standalone
pandoc -t revealjs Tallers.md -o rtallersBatx.html --embed-resources --standalone

