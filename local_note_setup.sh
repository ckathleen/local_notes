#!/bin/sh

echo "*.js filter=localnotes" >> ./.gitattributes
echo "[filter \"localnotes\"]
        clean = \"sed '/LOCAL NOTE:/d'\"
        smudge = cat" >> ~/.gitconfig